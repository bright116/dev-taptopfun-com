    !function() {
        "use strict";
        class e {
            static Log(...e) {
                this.Enabled && console.log.apply(null, e)
            }
            static Warn(...e) {
                this.Enabled && console.warn.apply(null, e)
            }
            static Error(...e) {
                this.Enabled && console.error.apply(null, e)
            }
        }
        e.Enabled = !0;
        var t = Laya.Vector3;
        class i {
            static Clamp01(e) {
                return e < 0 ? 0 : e > 1 ? 1 : e
            }
            static Clamp(e, t, i) {
                return e < t ? t : e > i ? i : e
            }
            static GetRandomRangeInt(e, t) {
                return Math.floor(e + Math.random() * (t - e))
            }
            static GetRandomRangeFloat(e, t) {
                return e + Math.random() * (t - e)
            }
            static RandomNormal(e) {
                let t = Math.random() * Math.PI * 2;
                e.x = Math.cos(t),
                e.y = Math.sin(t)
            }
        }
        i.R2D = 180 / Math.PI,
        i.D2R = Math.PI / 180,
        i.VEC3_ZERO = new t(0,0,0),
        i.VEC3_UP = new t(0,1,0);
        var s = Laya.Browser;
        class a {
            static IsWeChatMiniGame() {
                return this._IS_WECHAT_MINIGAME && s.onMiniGame
            }
            static IsQQMiniGame() {
                return this._IS_QQ_MINIGAME && s.onQQMiniGame
            }
            static IsQGMiniGame() {
                return this._IS_QG_MINIGAME && s.onQGMiniGame
            }
            static IsTTMiniGame() {
                this._IS_TT_MINIGAME = false;
                return this._IS_TT_MINIGAME
            }
            static CompareVersion(e, t) {
                let i = e.split(".")
                  , s = t.split(".")
                  , a = Math.max(i.length, s.length);
                for (let e = 0; e < a; e++) {
                    let t = void 0 === i[e] ? 0 : parseInt(i[e])
                      , a = void 0 === s[e] ? 0 : parseInt(s[e]);
                    if (t > a)
                        return 1;
                    if (t < a)
                        return -1
                }
                return 0
            }
            static SetKeepScreenOn() {
                // a.IsWeChatMiniGame() && wx.setKeepScreenOn && wx.setKeepScreenOn({
                //     keepScreenOn: !0
                // }),
                // a.IsQQMiniGame() && qq.setKeepScreenOn && qq.setKeepScreenOn({
                //     keepScreenOn: !0
                // }),
                // a.IsTTMiniGame() && tt.setKeepScreenOn && tt.setKeepScreenOn({
                //     keepScreenOn: !0
                // })
            }
            static VibrateShort() {
                a.IsWeChatMiniGame() && wx.vibrateShort && wx.vibrateShort({}),
                a.IsQQMiniGame() && qq.vibrateShort && qq.vibrateShort({}),
                a.IsTTMiniGame() && tt.vibrateShort && tt.vibrateShort({})
            }
            static VibrateLong() {
                a.IsWeChatMiniGame() && wx.vibrateLong && wx.vibrateLong({}),
                a.IsQQMiniGame() && qq.vibrateLong && qq.vibrateLong({}),
                a.IsTTMiniGame() && tt.vibrateLong && tt.vibrateLong({})
            }
        }
        a._IS_WECHAT_MINIGAME = !1,
        a._IS_QQ_MINIGAME = !1,
        a._IS_QG_MINIGAME = !1,
        a._IS_TT_MINIGAME = !0;
        var n = Laya.LocalStorage;
        class r {
            static Read(t) {
                let i = null;
                try {
                    let s;
                    s = a.IsWeChatMiniGame() ? wx.getStorageSync(t) : n.getItem(t),
                    i = JSON.parse(s),
                    e.Log("[LocalDataHelper]: Read Success:%s", s)
                } catch (t) {
                    e.Warn("[LocalDataHelper]: Read Error:%s", t.message)
                }
                return i
            }
            static Write(t, i) {
                try {
                    let s = JSON.stringify(i);
                    a.IsWeChatMiniGame() ? wx.setStorageSync(t, s) : n.setItem(t, s),
                    e.Log("[LocalDataHelper]: Write Success:%s", s)
                } catch (t) {
                    e.Warn("[LocalDataHelper]: Write Error:%s", t.message)
                }
                return !1
            }
        }
        var o = Laya.SoundManager;
        class l {
            constructor() {
                this.musicMuted = !1,
                this.soundMuted = !1,
                this.musicVolume = 1,
                this.soundVolume = 1
            }
        }
        class h {
            static get Option() {
                return this._Option || (this._Option = r.Read(this._OPTION_KEY),
                this._Option || (this._Option = new l),
                o.setMusicVolume(this._Option.musicVolume),
                o.setSoundVolume(this._Option.soundVolume)),
                this._Option
            }
            static get MusicMuted() {
                return this.Option.musicMuted
            }
            static set MusicMuted(e) {
                this.Option.musicMuted = e,
                e ? this.StopMusic() : this.PlayMusic()
            }
            static get SoundMuted() {
                return this.Option.soundMuted
            }
            static set SoundMuted(e) {
                this.Option.soundMuted = e,
                e && this.StopAllSound()
            }
            static get MusicVolume() {
                return this.Option.musicVolume
            }
            static set MusicVolume(e) {
                this.Option.musicVolume = e = i.Clamp01(e),
                o.setMusicVolume(e)
            }
            static get SoundVolume() {
                return this.Option.soundVolume
            }
            static set SoundVolume(e) {
                this.Option.soundVolume = e = i.Clamp01(e),
                o.setSoundVolume(e)
            }
            static WriteOption() {
                r.Write(this._OPTION_KEY, this.Option)
            }
            static PlayMusic(e) {
                if (e && (this._MusicUrl = e),
                !this.MusicMuted) {
                    if (e)
                        return o.playMusic(e);
                    if (this._MusicUrl)
                        return o.playMusic(this._MusicUrl)
                }
                return null
            }
            static StopMusic() {
                o.stopMusic()
            }
            static PlaySound(e, t=1) {
                return this.SoundMuted ? null : o.playSound(e, t)
            }
            static StopSound(e) {
                o.stopSound(e)
            }
            static StopAllSound() {
                o.stopAllSound()
            }
        }
        h._OPTION_KEY = "wqsoundmanager",
        h._MusicUrl = "",
        h._Option = null;
        var c = Laya.Event
          , d = Laya.Keyboard
          , u = Laya.Shader3D;
        class p {
            static Init(e) {
                u.debugMode = e,
                e && Laya.stage.on(c.KEY_UP, p, e=>{
                    e.keyCode === d.G && p.GenerateShaderVariantsJSON()
                }
                )
            }
            static GenerateShaderVariantsJSON() {
                let e = new Object;
                for (let t = 0; t < u.debugShaderVariantCollection.variantCount; t++) {
                    let i = u.debugShaderVariantCollection.getByIndex(t)
                      , s = new Object;
                    s.defineNames = i.defineNames,
                    s.passIndex = i.passIndex,
                    s.subShaderIndex = i.subShaderIndex;
                    let a = i.shader.name;
                    Array.isArray(e[a]) || (e[a] = []),
                    e[a].push(s)
                }
                console.log(JSON.stringify(e))
            }
            static PreCompileShaderVariants(e) {
                for (let t in e) {
                    let i = e[t];
                    if (Array.isArray(i))
                        for (let e = 0; e < i.length; e++) {
                            let s = i[e];
                            u.compileShaderByDefineNames(t, s.subShaderIndex, s.passIndex, s.defineNames)
                        }
                }
            }
        }
        class m {
            static GetCurrentTime() {
                return Date.now()
            }
            static Init(t, i) {
                e.Enabled = t,
                p.Init(i)
            }
        }
        m.VERSION = "1.0.2",
        m.WQSoundManager = h;
        var g = Laya.Ease
          , _ = Laya.Tween;
        class S extends Laya.Script {
            constructor() {
                super(...arguments),
                this.scaleEnabled = !0,
                this.duration = 200,
                this.ease = g.linearNone,
                this.normalX = 1,
                this.normalY = 1,
                this.pressX = 1.2,
                this.pressY = 1.2
            }
            scaleToNormal() {
                this.scaleEnabled && _.to(this.owner, {
                    scaleX: this.normalX,
                    scaleY: this.normalY,
                    ease: this.ease
                }, this.duration, null, null, 0, !0)
            }
            scaleToPress() {
                this.scaleEnabled && _.to(this.owner, {
                    scaleX: this.pressX,
                    scaleY: this.pressY,
                    ease: this.ease
                }, this.duration, null, null, 0, !0)
            }
            onMouseDown(e) {
                this.downSound && m.WQSoundManager.PlaySound(this.downSound),
                this.scaleToPress()
            }
            onMouseUp(e) {
                this.upSound && m.WQSoundManager.PlaySound(this.upSound),
                this.scaleToNormal()
            }
            onMouseOut(e) {
                this.scaleToNormal()
            }
        }
        var y = Laya.Point;
        class f extends Laya.Script {
            constructor() {
                super(...arguments),
                this.horizontalLimit = 90,
                this.onControl = null,
                this.startPoint = new y,
                this.endPoint = new y,
                this.control = !1,
                this.intensity = 0,
                this._myBackground = null,
                this._myButton = null
            }
            get mySprite() {
                return this.owner
            }
            get myBackground() {
                return this._myBackground || (this._myBackground = this.owner.getChildByName("background")),
                this._myBackground
            }
            get myButton() {
                return this._myButton || (this._myButton = this.owner.getChildByName("button")),
                this._myButton
            }
            dispatchEvent() {
                this.onControl && this.onControl.Invoke(this)
            }
            updateDisplayState(e) {
                this.myBackground.visible = this.myButton.visible = e
            }
            updateDisplayPosition() {
                this.myBackground.pos(this.startPoint.x, this.startPoint.y),
                this.myButton.pos(this.endPoint.x, this.endPoint.y)
            }
            onMouseDown(e) {
                this.startPoint.setTo(e.stageX, e.stageY),
                this.mySprite.globalToLocal(this.startPoint),
                this.endPoint.setTo(this.startPoint.x, this.startPoint.y),
                this.control = !0,
                this.intensity = 0,
                this.dispatchEvent(),
                this.updateDisplayState(!0),
                this.updateDisplayPosition()
            }
            onMouseMove(e) {
                this.control && (this.endPoint.setTo(e.stageX, e.stageY),
                this.mySprite.globalToLocal(this.endPoint),
                this.startPoint.distance(this.endPoint.x, this.endPoint.y) > this.horizontalLimit && (this.startPoint.setTo(this.startPoint.x - this.endPoint.x, this.startPoint.y - this.endPoint.y),
                this.startPoint.normalize(),
                this.startPoint.x = this.endPoint.x + this.startPoint.x * this.horizontalLimit,
                this.startPoint.y = this.endPoint.y + this.startPoint.y * this.horizontalLimit),
                this.intensity = (this.endPoint.x - this.startPoint.x) / this.horizontalLimit,
                this.dispatchEvent(),
                this.updateDisplayPosition())
            }
            onMouseUp(e) {
                this.control = !1,
                this.intensity = 0,
                this.dispatchEvent(),
                this.updateDisplayState(!1)
            }
        }
        var P, C = Laya.Vector3;
        class I {
            static CompareVehicleDriveDistance(e, t) {
                return t.driveDistance - e.driveDistance
            }
            static Destroy() {
                for (let e = 0; e < I.Vehicles.length; e++)
                    I.Vehicles[e].owner.destroy();
                I.Vehicles.length = 0,
                I.P1 = null,
                I.P2 = null,
                I.MyScene3D && (I.MyScene3D.destroy(),
                I.MyScene3D = null),
                I.MySceneData = null,
                I.DistanceBetweenPathPoints.length = 0,
                I.TotalDistance = 0,
                I.OnRankingUpdated = null
            }
            static GetVehicleIndex(e) {
                for (let t = 0; t < I.Vehicles.length; t++)
                    if (I.Vehicles[t] === e)
                        return t;
                return -1
            }
            static SortVehiclesByDriveDistance() {
                for (let e = 0; e < I.Vehicles.length; e++)
                    I.Vehicles[e].CalculateDriveDistance();
                I.Vehicles.sort(I.CompareVehicleDriveDistance),
                I.OnRankingUpdated && I.OnRankingUpdated.Invoke()
            }
            static CalculatePathsDistance() {
                let e = I.MySceneData.paths.length - 1
                  , t = 0;
                for (let i = 0; i < e; i++)
                    t = C.distance(I.MySceneData.paths[i], I.MySceneData.paths[i + 1]),
                    I.DistanceBetweenPathPoints.push(t),
                    I.TotalDistance += t
            }
            static CalculatePercentageOfDistanceFromPlayer(e, t) {
                let i = 0;
                if (I.P1 && I.P2) {
                    let s = C.distance(e, I.P1.mySprite3D.transform.position);
                    s > t && (s = t);
                    let a = C.distance(e, I.P2.mySprite3D.transform.position);
                    a > t && (a = t),
                    i = (s < a ? s : a) / t
                } else if (I.P1) {
                    let s = C.distance(e, I.P1.mySprite3D.transform.position);
                    s > t && (s = t),
                    i = s / t
                }
                return i
            }
        }
        I.SOUND_MAX_DISTANCE = 60,
        I.MyScene3D = null,
        I.MySceneData = null,
        I.Vehicles = [],
        I.P1 = null,
        I.P2 = null,
        I.DistanceBetweenPathPoints = [],
        I.TotalDistance = 0,
        I.OnRankingUpdated = null,
        function(e) {
            e[e.P1 = 0] = "P1",
            e[e.P2 = 1] = "P2",
            e[e.AI = 2] = "AI"
        }(P || (P = {}));
        var w = Laya.Image
          , b = Laya.Label;
        class D {
            constructor() {
                this.vehicle = null,
                this.image = null
            }
        }
        class v extends Laya.Script {
            constructor() {
                super(...arguments),
                this._arrows = null
            }
            onAwake() {
                this.createArrows()
            }
            onDestroy() {
                this.destroyArrows()
            }
            destroyArrows() {
                if (this._arrows) {
                    for (let e = 0; e < this._arrows.length; e++)
                        this._arrows[e].image && this._arrows[e].image.destroy();
                    this._arrows = null
                }
            }
            createArrows() {
                this.destroyArrows(),
                this._arrows = [];
                let e = null
                  , t = null;
                for (let i = 0; i < I.Vehicles.length; i++) {
                    let s = new D;
                    switch (s.vehicle = I.Vehicles[i],
                    s.vehicle.driver) {
                    case P.P1:
                        e = s,
                        s.image = new w(this.p1ArrowSkin),
                        this.createLabel("P1", "#ff1100", s.image);
                        break;
                    case P.P2:
                        t = s,
                        s.image = new w(this.p2ArrowSkin),
                        this.createLabel("P2", "#0088ff", s.image);
                        break;
                    default:
                        s.image = new w(this.aiArrowSkin)
                    }
                    s.image.anchorX = .5,
                    s.image.anchorY = 1,
                    this.owner.addChild(s.image),
                    this._arrows.push(s)
                }
                t && this.owner.addChildAt(t.image, this.owner.numChildren - 1),
                e && this.owner.addChildAt(e.image, this.owner.numChildren - 1),
                this.Update()
            }
            createLabel(e, t, i) {
                let s = new b;
                s.text = e,
                s.fontSize = 24,
                s.color = t,
                i.addChild(s),
                s.x = -3,
                s.y = -32
            }
            Update() {
                if (this._arrows) {
                    const e = I.TotalDistance;
                    let t = null;
                    for (let s = 0; s < this._arrows.length; s++)
                        (t = this._arrows[s]).image.x = this.owner.width * i.Clamp01(t.vehicle.driveDistance / e)
                }
            }
        }
        var M = Laya.Image;
        class T extends Laya.Script {
            SetStar(e) {
                if (this.owner.destroyChildren(),
                e > 0) {
                    let t = -this.offset * (e - 1) / 2;
                    for (let i = 0; i < e; i++) {
                        let e = new M(this.skin);
                        e.anchorX = e.anchorY = .5,
                        e.x = t + i * this.offset,
                        this.owner.addChild(e)
                    }
                }
            }
        }
        class L extends Laya.Script {
            constructor() {
                super(...arguments),
                this.onValueChanged = null,
                this._spriteOn = null,
                this._spriteOff = null,
                this._isOn = !1
            }
            get spriteOn() {
                return this._spriteOn || (this._spriteOn = this.owner.getChildByName("on")),
                this._spriteOn
            }
            get spriteOff() {
                return this._spriteOff || (this._spriteOff = this.owner.getChildByName("off")),
                this._spriteOff
            }
            get isOn() {
                return this._isOn
            }
            set isOn(e) {
                this._isOn = e,
                this.spriteOn && (this.spriteOn.visible = e),
                this.spriteOff && (this.spriteOff.visible = !e)
            }
            onClick(e) {
                this.isOn = !this.isOn,
                this.onValueChanged && this.onValueChanged.Invoke(this.isOn),
                this.changeSound && m.WQSoundManager.PlaySound(this.changeSound)
            }
        }
        class G {
            constructor() {}
            static init() {
                var e = Laya.ClassUtils.regClass;
                e("Scripts/WQ/UI/UIButton.ts", S),
                e("Scripts/Game/UI/UIHorizontalJoystick.ts", f),
                e("Scripts/Game/UI/UIGameProgress.ts", v),
                e("Scripts/Game/UI/UIStar.ts", T),
                e("Scripts/WQ/UI/UIToggle.ts", L)
            }
        }
        G.width = 750,
        G.height = 1334,
        G.scaleMode = "fixedheight",
        G.screenMode = "vertical",
        G.alignV = "top",
        G.alignH = "left",
        G.startScene = "pages/AlertPage.scene",
        G.sceneRoot = "",
        G.debug = !1,
        G.stat = !1,
        G.physicsDebug = !1,
        G.exportSceneToJson = !0,
        G.init();
        class V {
            constructor() {
                this._name = ""
            }
            get name() {
                return this._name
            }
            static RegistModule(e) {
                for (let t = 0; t < this._modules.length; t++)
                    if (this._modules[t].name === e.name)
                        throw new Error("duplicate module error");
                this._modules.push(e)
            }
            static GetModule(e) {
                for (let t = 0; t < this._modules.length; t++)
                    if (this._modules[t].name === e)
                        return this._modules[t];
                return null
            }
            static SwitchModule(e) {
                let t = this.GetModule(e);
                t && (this._currentModule && this._currentModule.Exit(),
                this._currentModule = t,
                this._currentModule.Enter())
            }
            static ExecuteCurrentModule(e) {
                this._currentModule && this._currentModule.Execute(e)
            }
        }
        V._modules = [],
        V._currentModule = null;
        class A {
        }
        var E = Laya.Vector3
          , R = Laya.Vector4;
        class k {
            constructor() {
                this.shaderVariants = null,
                this.vehicleDatas = null,
                this.sceneDatas = null,
                this.recommendations = null,
                this.effect_Collision = null,
                this.effect_Explode = null,
                this.effect_Acceleration = null,
                this.effect_Reverse = null,
                this.effect_Reset = null,
                this.effect_Firework = null,
                this.missile = null,
                this.hammer = null,
                this.flagP1 = null,
                this.flagP2 = null
            }
            static GetInstance() {
                return k._Instance || (k._Instance = new k),
                k._Instance
            }
            GetVehicleDataByID(e) {
                for (let t = 0; t < this.vehicleDatas.length; t++)
                    if (this.vehicleDatas[t].id === e)
                        return this.vehicleDatas[t];
                return null
            }
            GetVehicleDataIndexById(e) {
                for (let t = 0; t < this.vehicleDatas.length; t++)
                    if (this.vehicleDatas[t].id === e)
                        return t;
                return -1
            }
            RandomGetVehicleData() {
                return this.vehicleDatas[i.GetRandomRangeInt(0, this.vehicleDatas.length)]
            }
            TranslateSceneDatas(e) {
                this.sceneDatas = [];
                for (let t = 0; t < e.length; t++) {
                    let i = new A
                      , s = e[t];
                    i.name = s.name,
                    i.description = s.description,
                    i.url = s.url,
                    i.cameraClearColor = this.toVector4(s.cameraClearColor),
                    i.starts = this.toVector3s(s.starts),
                    i.paths = this.toVector3s(s.paths),
                    i.nodeComponentDatas = s.nodeComponentDatas,
                    this.sceneDatas.push(i)
                }
            }
            GetSceneDataByURL(e) {
                for (let t = 0; t < this.sceneDatas.length; t++)
                    if (this.sceneDatas[t].url === e)
                        return this.sceneDatas[t];
                return null
            }
            toVector3(e) {
                return new E(e.x,e.y,e.z)
            }
            toVector3s(e) {
                let t = [];
                for (let i = 0; i < e.length; i++)
                    t.push(this.toVector3(e[i]));
                return t
            }
            toVector4(e) {
                return new R(e.x,e.y,e.z,e.w)
            }
        }
        k._Instance = null,
        k.PATH_SUBPACKAGES_UNITY = "subpackages/unitys/";
        class O {
            constructor() {
                this._bannerMainPage = null,
                this._bannerSetupPage = null,
                this._bannerSelectVehiclePage = null,
                this._bannerSelectScenePage = null,
                this._bannerResultPage = null,
                this._interstitialGameOver = null,
                this._rewardedVideoSelectVehicle = null,
                this._rewardedVideoSelectVehicleCallback = null,
                this._gridResultPage = null,
                this._appBoxMoreGame = null
            }
            static GetInstance() {
                return O._Instance || (O._Instance = new O),
                O._Instance
            }
            DestroyBannerMainPage() {
            }
            CreateBannerMainPage() {
            }
            DestroyBannerSetupPage() {
                a.IsWeChatMiniGame() && this._bannerSetupPage && (this._bannerSetupPage.destroy(),
                this._bannerSetupPage = null),
                a.IsQQMiniGame() && this._bannerSetupPage && (this._bannerSetupPage.destroy(),
                this._bannerSetupPage = null),
                a.IsTTMiniGame() && this._bannerSetupPage && (this._bannerSetupPage.destroy(),
                this._bannerSetupPage = null)
            }
            CreateBannerSetupPage() {
                if (this.DestroyBannerSetupPage(),
                a.IsWeChatMiniGame()) {
                    let t = wx.getSystemInfoSync();
                    a.CompareVersion(t.SDKVersion, "2.0.4") >= 0 && (this._bannerSetupPage = wx.createBannerAd({
                        adUnitId: "adunit-26f79cdf15122d08",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSetupPage.onError(t=>{
                        e.Log("banner setuppage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._bannerSetupPage.onResize(e=>{
                        this._bannerSetupPage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._bannerSetupPage.show(),
                    this._bannerSetupPage.style.width = t.screenWidth)
                }
                if (a.IsQQMiniGame()) {
                    let t = qq.getSystemInfoSync();
                    this._bannerSetupPage = qq.createBannerAd({
                        adUnitId: "863652c678231f4f2065d994a63989dd",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSetupPage.onError(t=>{
                        e.Log("banner setuppage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._bannerSetupPage.onResize(e=>{
                        this._bannerSetupPage.style.left = t.screenWidth - e.width >> 1,
                        this._bannerSetupPage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._bannerSetupPage.show(),
                    this._bannerSetupPage.style.width = t.screenWidth
                }
                if (a.IsTTMiniGame() && tt.createBannerAd) {
                    let t = tt.getSystemInfoSync();
                    this._bannerSetupPage = tt.createBannerAd({
                        adUnitId: "465ledmbei75u3dvca",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSetupPage.onError(t=>{
                        e.Log("banner setuppage error"),
                        e.Log(t)
                    }
                    ),
                    this._bannerSetupPage.onResize(e=>{
                        this._bannerSetupPage.style.left = t.windowWidth - e.width >> 1,
                        this._bannerSetupPage.style.top = t.windowHeight - e.height
                    }
                    ),
                    this._bannerSetupPage.onLoad(()=>{
                        this._bannerSetupPage.show(),
                        this._bannerSetupPage.style.width = t.windowWidth
                    }
                    )
                }
            }
            DestroyBannerSelectVehiclePage() {
                a.IsWeChatMiniGame() && this._bannerSelectVehiclePage && (this._bannerSelectVehiclePage.destroy(),
                this._bannerSelectVehiclePage = null),
                a.IsQQMiniGame() && this._bannerSelectVehiclePage && (this._bannerSelectVehiclePage.destroy(),
                this._bannerSelectVehiclePage = null),
                a.IsTTMiniGame() && this._bannerSelectVehiclePage && (this._bannerSelectVehiclePage.destroy(),
                this._bannerSelectVehiclePage = null)
            }
            CreateBannerSelectVehiclePage() {
                if (this.DestroyBannerSelectVehiclePage(),
                a.IsWeChatMiniGame()) {
                    let t = wx.getSystemInfoSync();
                    a.CompareVersion(t.SDKVersion, "2.0.4") >= 0 && (this._bannerSelectVehiclePage = wx.createBannerAd({
                        adUnitId: "adunit-0bd5ece6a959ce6a",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSelectVehiclePage.onError(t=>{
                        e.Log("banner selectvehiclepage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._bannerSelectVehiclePage.onResize(e=>{
                        this._bannerSelectVehiclePage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._bannerSelectVehiclePage.show(),
                    this._bannerSelectVehiclePage.style.width = t.screenWidth)
                }
                if (a.IsQQMiniGame()) {
                    let t = qq.getSystemInfoSync();
                    this._bannerSelectVehiclePage = qq.createBannerAd({
                        adUnitId: "428c30519e28d06d9c2af3029bcc3091",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSelectVehiclePage.onError(t=>{
                        e.Log("banner selectvehiclepage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._bannerSelectVehiclePage.onResize(e=>{
                        this._bannerSelectVehiclePage.style.left = t.screenWidth - e.width >> 1,
                        this._bannerSelectVehiclePage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._bannerSelectVehiclePage.show(),
                    this._bannerSelectVehiclePage.style.width = t.screenWidth
                }
                if (a.IsTTMiniGame() && tt.createBannerAd) {
                    let t = tt.getSystemInfoSync();
                    this._bannerSelectVehiclePage = tt.createBannerAd({
                        adUnitId: "1j0nj8lt2bi2bf219k",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSelectVehiclePage.onError(t=>{
                        e.Log("banner selectvehiclepage error"),
                        e.Log(t)
                    }
                    ),
                    this._bannerSelectVehiclePage.onResize(e=>{
                        this._bannerSelectVehiclePage.style.left = t.windowWidth - e.width >> 1,
                        this._bannerSelectVehiclePage.style.top = t.windowHeight - e.height
                    }
                    ),
                    this._bannerSelectVehiclePage.onLoad(()=>{
                        this._bannerSelectVehiclePage.show(),
                        this._bannerSelectVehiclePage.style.width = t.windowWidth
                    }
                    )
                }
            }
            DestroyBannerSelectScenePage() {
                a.IsWeChatMiniGame() && this._bannerSelectScenePage && (this._bannerSelectScenePage.destroy(),
                this._bannerSelectScenePage = null),
                a.IsQQMiniGame() && this._bannerSelectScenePage && (this._bannerSelectScenePage.destroy(),
                this._bannerSelectScenePage = null),
                a.IsTTMiniGame() && this._bannerSelectScenePage && (this._bannerSelectScenePage.destroy(),
                this._bannerSelectScenePage = null)
            }
            CreateBannerSelectScenePage() {
                if (this.DestroyBannerSelectScenePage(),
                a.IsWeChatMiniGame()) {
                    let t = wx.getSystemInfoSync();
                    a.CompareVersion(t.SDKVersion, "2.0.4") >= 0 && (this._bannerSelectScenePage = wx.createBannerAd({
                        adUnitId: "adunit-9878f1cd919a9a03",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSelectScenePage.onError(t=>{
                        e.Log("banner selectscenepage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._bannerSelectScenePage.onResize(e=>{
                        this._bannerSelectScenePage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._bannerSelectScenePage.show(),
                    this._bannerSelectScenePage.style.width = t.screenWidth)
                }
                if (a.IsQQMiniGame()) {
                    let t = qq.getSystemInfoSync();
                    this._bannerSelectScenePage = qq.createBannerAd({
                        adUnitId: "97e45a381e5da7f021104ea8476221ee",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSelectScenePage.onError(t=>{
                        e.Log("banner selectscenepage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._bannerSelectScenePage.onResize(e=>{
                        this._bannerSelectScenePage.style.left = t.screenWidth - e.width >> 1,
                        this._bannerSelectScenePage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._bannerSelectScenePage.show(),
                    this._bannerSelectScenePage.style.width = t.screenWidth
                }
                if (a.IsTTMiniGame() && tt.createBannerAd) {
                    let t = tt.getSystemInfoSync();
                    this._bannerSelectScenePage = tt.createBannerAd({
                        adUnitId: "44d6lhefp8glfd788g",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerSelectScenePage.onError(t=>{
                        e.Log("banner selectscenepage error"),
                        e.Log(t)
                    }
                    ),
                    this._bannerSelectScenePage.onResize(e=>{
                        this._bannerSelectScenePage.style.left = t.windowWidth - e.width >> 1,
                        this._bannerSelectScenePage.style.top = t.windowHeight - e.height
                    }
                    ),
                    this._bannerSelectScenePage.onLoad(()=>{
                        this._bannerSelectScenePage.show(),
                        this._bannerSelectScenePage.style.width = t.windowWidth
                    }
                    )
                }
            }
            DestroyBannerResultPage() {
                a.IsQQMiniGame() && this._bannerResultPage && (this._bannerResultPage.destroy(),
                this._bannerResultPage = null)
            }
            CreateBannerResultPage() {
                if (this.DestroyBannerResultPage(),
                a.IsQQMiniGame()) {
                    let t = qq.getSystemInfoSync();
                    this._bannerResultPage = qq.createBannerAd({
                        adUnitId: "8fda0c399a6b61552fbce249ab92851f",
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._bannerResultPage.onError(t=>{
                        e.Log("banner resultpage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._bannerResultPage.onResize(e=>{
                        this._bannerResultPage.style.left = t.screenWidth - e.width >> 1,
                        this._bannerResultPage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._bannerResultPage.show(),
                    this._bannerResultPage.style.width = t.screenWidth
                }
            }
            DestroyInterstitialGameOver() {
                a.IsWeChatMiniGame() && this._interstitialGameOver && (a.CompareVersion(wx.getSystemInfoSync().SDKVersion, "2.8.0") >= 0 && this._interstitialGameOver.destroy(),
                this._interstitialGameOver = null),
                a.IsQQMiniGame() && this._interstitialGameOver && (this._interstitialGameOver.destroy(),
                this._interstitialGameOver = null),
                a.IsTTMiniGame() && this._interstitialGameOver && (this._interstitialGameOver.destroy(),
                this._interstitialGameOver = null)
            }
            CreateInterstitialGameOver() {
                // if (this.DestroyInterstitialGameOver(),
                // a.IsWeChatMiniGame()) {
                //     let t = wx.getSystemInfoSync();
                //     a.CompareVersion(t.SDKVersion, "2.6.0") >= 0 && (this._interstitialGameOver = wx.createInterstitialAd({
                //         adUnitId: "adunit-f09e08a2f2b91703"
                //     }),
                //     this._interstitialGameOver.onError(t=>{
                //         e.Log("interstitial gameover error", t.errCode, t.errMsg)
                //     }
                //     ),
                //     this._interstitialGameOver.onLoad(()=>{
                //         e.Log("interstitial gameover loaded")
                //     }
                //     ))
                // }
                // if (a.IsQQMiniGame()) {
                //     let t = qq.getSystemInfoSync();
                //     a.CompareVersion(t.SDKVersion, "1.12.0") >= 0 && (this._interstitialGameOver = qq.createInterstitialAd({
                //         adUnitId: "b190d2b4a0035009c664f1e9ee4fa483"
                //     }),
                //     this._interstitialGameOver.onError(t=>{
                //         e.Log("interstitial gameover error"),
                //         e.Log(t)
                //     }
                //     ),
                //     this._interstitialGameOver.onLoad(()=>{
                //         e.Log("interstitial gameover loaded")
                //     }
                //     ))
                // }
                // a.IsTTMiniGame() && tt.createInterstitialAd && (this._interstitialGameOver = tt.createInterstitialAd({
                //     adUnitId: "55i8h1l134jh6ks3fm"
                // }),
                // this._interstitialGameOver.onError(t=>{
                //     e.Log("interstitial gameover error"),
                //     e.Log(t)
                // }
                // ),
                // this._interstitialGameOver.onLoad(()=>{
                //     e.Log("interstitial gameover loaded")
                // }
                // ))
            }
            ShowInterstitialGameOver() {
                a.IsWeChatMiniGame() && this._interstitialGameOver && this._interstitialGameOver.show(),
                a.IsQQMiniGame() && this._interstitialGameOver && this._interstitialGameOver.show(),
                a.IsTTMiniGame() && this._interstitialGameOver && this._interstitialGameOver.load().then(()=>{
                    this._interstitialGameOver.show()
                }
                )
            }
            CreateRewardedVideoSelectVehicle() {
                // if (a.IsWeChatMiniGame()) {
                //     let t = wx.getSystemInfoSync();
                //     a.CompareVersion(t.SDKVersion, "2.0.4") >= 0 && (this._rewardedVideoSelectVehicle = wx.createRewardedVideoAd({
                //         adUnitId: "adunit-514a76ae57aa07c3"
                //     }),
                //     this._rewardedVideoSelectVehicle.onError(t=>{
                //         e.Log("rewardedvideo selectvehicle error:%s %s", t.errCode, t.errMsg)
                //     }
                //     ),
                //     this._rewardedVideoSelectVehicle.onLoad(()=>{
                //         e.Log("rewardedvideo selectvehicle loaded")
                //     }
                //     ),
                //     this._rewardedVideoSelectVehicle.onClose(e=>{
                //         let t = e && e.isEnded || void 0 === e;
                //         this._rewardedVideoSelectVehicleCallback && (this._rewardedVideoSelectVehicleCallback(t),
                //         this._rewardedVideoSelectVehicleCallback = null),
                //         this._rewardedVideoSelectVehicle.load()
                //     }
                //     ),
                //     this._rewardedVideoSelectVehicle.load())
                // }
                // a.IsQQMiniGame() && (this._rewardedVideoSelectVehicle = qq.createRewardedVideoAd({
                //     adUnitId: "8ca3fe37f64f4c9cdf8256de6b866064"
                // }),
                // this._rewardedVideoSelectVehicle.onError(t=>{
                //     e.Log("rewardedvideo selectvehicle error:%s %s", t.errCode, t.errMsg)
                // }
                // ),
                // this._rewardedVideoSelectVehicle.onLoad(()=>{
                //     e.Log("rewardedvideo selectvehicle loaded")
                // }
                // ),
                // this._rewardedVideoSelectVehicle.onClose(e=>{
                //     let t = e.isEnded;
                //     this._rewardedVideoSelectVehicleCallback && (this._rewardedVideoSelectVehicleCallback(t),
                //     this._rewardedVideoSelectVehicleCallback = null)
                // }
                // )),
                // a.IsTTMiniGame() && tt.createRewardedVideoAd && (this._rewardedVideoSelectVehicle = tt.createRewardedVideoAd({
                //     adUnitId: "1ffnb337n4jl111a13"
                // }),
                // this._rewardedVideoSelectVehicle.onError(t=>{
                //     e.Log("rewardedvideo selectvehicle error"),
                //     e.Log(t)
                // }
                // ),
                // this._rewardedVideoSelectVehicle.onLoad(()=>{
                //     e.Log("rewardedvideo selectvehicle loaded")
                // }
                // ),
                // this._rewardedVideoSelectVehicle.onClose(e=>{
                //     let t = e.isEnded;
                //     this._rewardedVideoSelectVehicleCallback && (this._rewardedVideoSelectVehicleCallback(t),
                //     this._rewardedVideoSelectVehicleCallback = null),
                //     this._rewardedVideoSelectVehicle.load()
                // }
                // ))
            }
            ShowRewardedVideoSelectVehicle(e) {
                a.IsWeChatMiniGame() ? this._rewardedVideoSelectVehicle ? (this._rewardedVideoSelectVehicleCallback = e,
                this._rewardedVideoSelectVehicle.show().catch(t=>{
                    this._rewardedVideoSelectVehicleCallback = null,
                    e(!1)
                }
                )) : e(!1) : a.IsQQMiniGame() ? this._rewardedVideoSelectVehicle ? (this._rewardedVideoSelectVehicleCallback = e,
                this._rewardedVideoSelectVehicle.show().catch(t=>{
                    this._rewardedVideoSelectVehicleCallback = null,
                    e(!1)
                }
                )) : e(!1) : a.IsTTMiniGame() && this._rewardedVideoSelectVehicle ? (this._rewardedVideoSelectVehicleCallback = e,
                this._rewardedVideoSelectVehicle.show().catch(t=>{
                    this._rewardedVideoSelectVehicleCallback = null,
                    e(!1)
                }
                )) : e(!1)
            }
            DestroyGridResultPage() {
                a.IsWeChatMiniGame() && this._gridResultPage && (this._gridResultPage.destroy(),
                this._gridResultPage = null)
            }
            CreateGridResultPage() {
                if (this.DestroyGridResultPage(),
                a.IsWeChatMiniGame()) {
                    let t = wx.getSystemInfoSync();
                    a.CompareVersion(t.SDKVersion, "2.9.2") >= 0 && (this._gridResultPage = wx.createGridAd({
                        adUnitId: "adunit-3e838a705efe19eb",
                        adIntervals: 120,
                        adTheme: "white",
                        gridCount: 5,
                        style: {
                            left: 0,
                            top: 0,
                            width: 300
                        }
                    }),
                    this._gridResultPage.onError(t=>{
                        e.Log("grid resultpage error:%s %s", t.errCode, t.errMsg)
                    }
                    ),
                    this._gridResultPage.onResize(e=>{
                        this._gridResultPage.style.left = t.screenWidth - e.width >> 1,
                        this._gridResultPage.style.top = t.screenHeight - e.height
                    }
                    ),
                    this._gridResultPage.show(),
                    this._gridResultPage.style.width = t.screenWidth)
                }
            }
            DestroyAppBoxMoreGame() {
                a.IsQQMiniGame() && this._appBoxMoreGame && (this._appBoxMoreGame.destroy(),
                this._appBoxMoreGame = null)
            }
            CreateAppBoxMoreGame() {
                if (this.DestroyAppBoxMoreGame(),
                a.IsQQMiniGame()) {
                    let e = qq.getSystemInfoSync();
                    a.CompareVersion(e.SDKVersion, "1.7.1") >= 0 && (this._appBoxMoreGame = qq.createAppBox({
                        adUnitId: "609ba0b0465f447b9adf33cae39317e8"
                    }))
                }
            }
            ShowAppBoxMoreGame() {
                a.IsQQMiniGame() && this._appBoxMoreGame && this._appBoxMoreGame.load().then(()=>{
                    this._appBoxMoreGame.show()
                }
                )
            }
        }
        O._Instance = null;
        class x {
            static Init() {
                if (a.IsTTMiniGame() && tt.getGameRecorderManager) {
                    const t = tt.getGameRecorderManager();
                    t.onError(t=>{
                        e.Log("recoder error:%s", t),
                        x.VideoPath = ""
                    }
                    ),
                    t.onStart(t=>{
                        e.Log("recorder start")
                    }
                    ),
                    t.onPause(()=>{
                        e.Log("recorder pause")
                    }
                    ),
                    t.onResume(()=>{
                        e.Log("recorder resume")
                    }
                    ),
                    t.onStop(i=>{
                        i.videoPath && t.clipVideo({
                            path: i.videoPath,
                            timeRange: [60, 0],
                            success: t=>{
                                e.Log("recorder clip success:%s", t.videoPath),
                                x.VideoPath = t.videoPath
                            }
                            ,
                            fail: t=>{
                                e.Log("recorder clip fail:%s", t),
                                x.VideoPath = ""
                            }
                        })
                    }
                    )
                }
            }
            static Start() {
                a.IsTTMiniGame() && tt.getGameRecorderManager && tt.getGameRecorderManager().start({
                    duration: 300
                })
            }
            static Pause() {
                a.IsTTMiniGame() && tt.getGameRecorderManager && tt.getGameRecorderManager().pause()
            }
            static Resume() {
                a.IsTTMiniGame() && tt.getGameRecorderManager && tt.getGameRecorderManager().resume()
            }
            static Stop() {
                a.IsTTMiniGame() && tt.getGameRecorderManager && tt.getGameRecorderManager().stop()
            }
            static Share(t) {
                a.IsTTMiniGame() && x.VideoPath ? tt.shareAppMessage({
                    channel: "video",
                    extra: {
                        videoPath: x.VideoPath,
                        videoTopics: ["双人游戏", "3D赛车", "对战竞速"],
                        hashtag_list: ["双人游戏", "3D赛车", "对战竞速"]
                    },
                    success: ()=>{
                        e.Log("recorder share success"),
                        t(!0)
                    }
                    ,
                    fail: i=>{
                        e.Log("recorder share fail:%s", i),
                        t(!1)
                    }
                }) : t(!1)
            }
        }
        x.VideoPath = "";
        var U, B = Laya.ClassUtils.regClass;
        !function(e) {
            !function(e) {
                class t extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/AlertPage")
                    }
                }
                e.AlertPageUI = t,
                B("ui.pages.AlertPageUI", t);
                class i extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/CountdownPage")
                    }
                }
                e.CountdownPageUI = i,
                B("ui.pages.CountdownPageUI", i);
                class s extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/GameOnePlayerPage")
                    }
                }
                e.GameOnePlayerPageUI = s,
                B("ui.pages.GameOnePlayerPageUI", s);
                class a extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/GameOverPage")
                    }
                }
                e.GameOverPageUI = a,
                B("ui.pages.GameOverPageUI", a);
                class n extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/GameTwoPlayerPage")
                    }
                }
                e.GameTwoPlayerPageUI = n,
                B("ui.pages.GameTwoPlayerPageUI", n);
                class r extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/InitPage")
                    }
                }
                e.InitPageUI = r,
                B("ui.pages.InitPageUI", r);
                class o extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/LoadPage")
                    }
                }
                e.LoadPageUI = o,
                B("ui.pages.LoadPageUI", o);
                class l extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/MainPage")
                    }
                }
                e.MainPageUI = l,
                B("ui.pages.MainPageUI", l);
                class h extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/MoreGamePage")
                    }
                }
                e.MoreGamePageUI = h,
                B("ui.pages.MoreGamePageUI", h);
                class c extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/RecommendationPage")
                    }
                }
                e.RecommendationPageUI = c,
                B("ui.pages.RecommendationPageUI", c);
                class d extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/ResultPage")
                    }
                }
                e.ResultPageUI = d,
                B("ui.pages.ResultPageUI", d);
                class u extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/SelectScenePage")
                    }
                }
                e.SelectScenePageUI = u,
                B("ui.pages.SelectScenePageUI", u);
                class p extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/SelectVehiclePage")
                    }
                }
                e.SelectVehiclePageUI = p,
                B("ui.pages.SelectVehiclePageUI", p);
                class m extends Laya.View {
                    constructor() {
                        super()
                    }
                    createChildren() {
                        super.createChildren(),
                        this.loadScene("pages/SetupPage")
                    }
                }
                e.SetupPageUI = m,
                B("ui.pages.SetupPageUI", m)
            }(e.pages || (e.pages = {}))
        }(U || (U = {}));
        class N extends U.pages.InitPageUI {
            SetTips(e, t="#ffffff") {
                this.lab_Tips && this.ani_Tips && (this.lab_Tips.text = e,
                this.lab_Tips.color = t,
                this.ani_Tips.play(0, !1))
            }
        }
        var H = Laya.Handler
          , F = Laya.Tween
          , W = Laya.Ease;
        class Q extends U.pages.LoadPageUI {
            constructor() {
                super(...arguments),
                this._tips = null,
                this._openedCallback = null
            }
            onAwake() {
                this._tips = ["Friendship first, Competition second", "When you do drink, don't drive", "Hand is my best friend.！"],
                this.playOpenUI(this._openedCallback),
                this._openedCallback = null
            }
            playOpenUI(e) {

             
                this.lab_Tips.text = this._tips[i.GetRandomRangeInt(0, this._tips.length)],
                this.background.alpha = 0,
                F.to(this.background, {
                    alpha: 1
                }, 600),
                this.img_Logo_Game.centerX = -750,
                F.to(this.img_Logo_Game, {
                    centerX: 0,
                    ease: W.backOut,
                    complete: H.create(this, ()=>{
                        e && e()
                    }
                    )
                }, 1200)
            }
            playCloseUI(e) {
                F.to(this.background, {
                    alpha: 0
                }, 600),
                F.to(this.img_Logo_Game, {
                    centerX: 750,
                    ease: W.backIn,
                    complete: H.create(this, ()=>{
                        this.close(),
                        e && e()
                    }
                    )
                }, 1200)
            }
            static OpenUI(e) {
                Q._Instance ? (Q._Instance.open(!1),
                Q._Instance.playOpenUI(e)) : (Q._Instance = new Q,
                Q._Instance._openedCallback = e,
                Q._Instance.open(!1))
            }
            static CloseUI(e) {
                Q._Instance ? (Q._Instance.open(!1),
                Q._Instance.playCloseUI(e)) : e && e()
            }
        }
        Q._Instance = null;
        var q, K, Y = Laya.Handler;
        class X extends V {
            constructor() {
                super(),
                this._uiInitPage = null,
                this._moduleSwitched = !1,
                this._moduleSwitchDelay = 0,
                this._globalResourcesLoaded = !1,
                this._name = "InitModule"
            }
            Enter() {

                platform.getInstance().cargamesstartup("Crazy-Racing",()=>{
                    platform.getInstance().addLogo();
                    m.Init(!1, !1),
                    a.SetKeepScreenOn(),
                    Laya.stage.bgColor = "#202020",
                    this._uiInitPage = new N,
                    this._uiInitPage.open(!1),
                    this._moduleSwitched = !1,
                    this._globalResourcesLoaded = !1,
                    Laya.timer.once(100, this, this.loadSubpackages)
                    m.WQSoundManager.MusicMuted = false;
                    m.WQSoundManager.soundMuted = false;
                })

                
            }
            Execute(e) {
                !this._moduleSwitched && this._globalResourcesLoaded && this._moduleSwitchDelay <= m.GetCurrentTime() && (this._moduleSwitched = !0,
                this._uiInitPage.SetTips("100%"),
                Q.OpenUI(()=>{
                    p.PreCompileShaderVariants(k.GetInstance().shaderVariants),
                    O.GetInstance().CreateInterstitialGameOver(),
                    O.GetInstance().CreateRewardedVideoSelectVehicle(),
                    O.GetInstance().CreateAppBoxMoreGame(),
                    x.Init(),
                    a.IsTTMiniGame() && tt.setMoreGamesInfo && tt.setMoreGamesInfo({
                        appLaunchOptions: [{
                            appId: "ttcb66bddb54432d79"
                        }, {
                            appId: "ttc096b62b5fac87bf"
                        }, {
                            appId: "ttf31d85a06c376fd9"
                        }, {
                            appId: "ttbcb2ca0f23980d29"
                        }]
                    }),
                    V.SwitchModule("MainModule")
                }
                ))
            }
            Exit() {
                e.Log("[InitModule]: Exit==================>"),

                platform.getInstance().removeLogo();

                this._uiInitPage.destroy(),
                this._uiInitPage = null,
                Laya.Resource.destroyUnusedResources()
            }
            loadSubpackages() {
                if (this._moduleSwitchDelay = m.GetCurrentTime() + 2900,
                a.IsQGMiniGame()) {
                    qg.loadSubpackage({
                        name: "subpackages",
                        success: ()=>{
                            this.loadGlobalResources()
                        }
                        ,
                        fail: ()=>{
                            this._uiInitPage.SetTips("分包加载错误，请重新启动游戏！", "#ff0000")
                        }
                    }).onProgressUpdate(e=>{
                        this._uiInitPage.SetTips(e.progress + "%")
                    }
                    )
                } else if (a.IsWeChatMiniGame()) {
                    wx.loadSubpackage({
                        name: "subpackages",
                        success: e=>{
                            this.loadGlobalResources()
                        }
                        ,
                        fail: e=>{
                            this._uiInitPage.SetTips("分包加载错误，请重新启动游戏！", "#ff0000")
                        }
                    }).onProgressUpdate(e=>{
                        this._uiInitPage.SetTips(e.progress + "%")
                    }
                    )
                } else if (a.IsQQMiniGame()) {
                    qq.loadSubpackage({
                        name: "subpackages",
                        success: e=>{
                            this.loadGlobalResources()
                        }
                        ,
                        fail: e=>{
                            this._uiInitPage.SetTips("分包加载错误，请重新启动游戏！", "#ff0000")
                        }
                    }).onProgressUpdate(e=>{
                        this._uiInitPage.SetTips(e.progress + "%")
                    }
                    )
                } else
                    this.loadGlobalResources()
            }
            loadGlobalResources() {
                let t = Laya.loader
                  , i = k.GetInstance()
                  , s = [];
                s.push("configs/shadervariants.json"),
                s.push("configs/vehicledatas.json"),
                s.push("configs/scenedatas.json"),
                s.push("configs/recommendations.json"),
                t.create(s, Y.create(this, a=>{
                    if (a) {
                        i.shaderVariants = t.getRes("configs/shadervariants.json"),
                        i.vehicleDatas = t.getRes("configs/vehicledatas.json"),
                        i.TranslateSceneDatas(t.getRes("configs/scenedatas.json")),
                        i.recommendations = t.getRes("configs/recommendations.json"),
                        s.length = 0;
                        for (let e = 0; e < i.vehicleDatas.length; e++)
                            s.push(k.PATH_SUBPACKAGES_UNITY + i.vehicleDatas[e].url);
                        s.push(k.PATH_SUBPACKAGES_UNITY + "effect-collision.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "effect-explode.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "effect-acceleration.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "effect-reverse.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "effect-reset.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "effect-firework.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "missile.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "hammer.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "flagp1.lh"),
                        s.push(k.PATH_SUBPACKAGES_UNITY + "flagp2.lh"),
                        t.create(s, Y.create(this, s=>{
                            if (s) {
                                for (let e = 0; e < i.vehicleDatas.length; e++)
                                    i.vehicleDatas[e].prefab = t.getRes(k.PATH_SUBPACKAGES_UNITY + i.vehicleDatas[e].url);
                                i.effect_Collision = t.getRes(k.PATH_SUBPACKAGES_UNITY + "effect-collision.lh"),
                                i.effect_Explode = t.getRes(k.PATH_SUBPACKAGES_UNITY + "effect-explode.lh"),
                                i.effect_Acceleration = t.getRes(k.PATH_SUBPACKAGES_UNITY + "effect-acceleration.lh"),
                                i.effect_Reverse = t.getRes(k.PATH_SUBPACKAGES_UNITY + "effect-reverse.lh"),
                                i.effect_Reset = t.getRes(k.PATH_SUBPACKAGES_UNITY + "effect-reset.lh"),
                                i.effect_Firework = t.getRes(k.PATH_SUBPACKAGES_UNITY + "effect-firework.lh"),
                                i.missile = t.getRes(k.PATH_SUBPACKAGES_UNITY + "missile.lh"),
                                i.hammer = t.getRes(k.PATH_SUBPACKAGES_UNITY + "hammer.lh"),
                                i.flagP1 = t.getRes(k.PATH_SUBPACKAGES_UNITY + "flagp1.lh"),
                                i.flagP2 = t.getRes(k.PATH_SUBPACKAGES_UNITY + "flagp2.lh"),
                                this._globalResourcesLoaded = !0,
                                e.Log(i)
                            } else
                                this._uiInitPage.SetTips("资源加载错误，请重新启动游戏！", "#ff0000")
                        }
                        ))
                    } else
                        this._uiInitPage.SetTips("资源加载错误，请重新启动游戏！", "#ff0000")
                }
                ))
            }
        }
        class z {
            constructor(e, t) {
                this.caller = null,
                this.func = null,
                this.caller = e,
                this.func = t
            }
            Invoke(e=null) {
                return Array.isArray(e) ? this.func.apply(this.caller, e) : this.func.call(this.caller, e)
            }
        }
        !function(e) {
            e[e.One = 0] = "One",
            e[e.Two = 1] = "Two"
        }(q || (q = {})),
        function(e) {
            e[e.Easy = 0] = "Easy",
            e[e.Normal = 1] = "Normal",
            e[e.Hard = 2] = "Hard",
            e[e.Hardest = 3] = "Hardest",
            e[e.God = 4] = "God"
        }(K || (K = {}));
        class j {
        }
        j.GamePlayerNumber = q.One,
        j.GameAILevel = K.Easy,
        j.SelectSceneURL = "island.ls",
        j.AccelerationInStart = !1,
        j.UpdateShowVehicles = null;
        class J {
            constructor() {
                this.p1SelectVehicleID = 1e3,
                this.p2SelectVehicleID = 1e3
            }
            static GetData() {
                return J._data || (J._data = r.Read(J._KEY_NAME),
                J._data || (J._data = new J)),
                J._data
            }
            static WriteData() {
                r.Write(J._KEY_NAME, J.GetData())
            }
        }
        J._KEY_NAME = "wqgamelocaldata",
        J._data = null;
        class Z {
        }
        Z.VERSION = "1.1.6",
        Z.LAUNCH_MISSILE = "Launch Missile",
        Z.DIRECTION_REVERSE = "Reverse",
        Z.CHANGE_POSITION = "Change Position";
        var $ = Laya.Event
          , ee = Laya.Handler
          , te = Laya.Ease
          , ie = Laya.Tween;
        class se extends U.pages.SetupPageUI {
            constructor() {
                super(...arguments),
                this.closedCallback = null,
                this._toggleMusic = null,
                this._toggleSound = null
            }
            onAwake() {
                this._toggleMusic = this.tog_Music.getComponent(L),
                this._toggleSound = this.tog_Sound.getComponent(L),
                this.but_Back.on($.CLICK, this, this.onBackButtonClickHandler),
                this._toggleMusic.onValueChanged = new z(this,this.onMusicToggleValueChangedHandler),
                this._toggleSound.onValueChanged = new z(this,this.onSoundToggleValueChangedHandler),
                this.playOpenUI()
            }
            playOpenUI() {
                let e = "互动QQ群：626694549";
                a.IsTTMiniGame() && (e = ""),
                // this.lab_About.text = e + "\n辣椒人工作室\n当前版本：" + Z.VERSION + "\nPowered by LayaAir Engine",
                this._toggleMusic.isOn = !m.WQSoundManager.MusicMuted,
                this._toggleSound.isOn = !m.WQSoundManager.SoundMuted,
                this.background.alpha = 0,
                ie.to(this.background, {
                    alpha: 1
                }, 600),
                this.panel_Top.top = -667,
                ie.to(this.panel_Top, {
                    top: 0,
                    ease: te.backOut
                }, 1200),
                this.panel_Center.centerY = -1334,
                ie.to(this.panel_Center, {
                    centerY: 0,
                    ease: te.backOut
                }, 1200),
                O.GetInstance().CreateBannerSetupPage()
            }
            playCloseUI() {
                ie.to(this.background, {
                    alpha: 0
                }, 600),
                ie.to(this.panel_Top, {
                    top: -667
                }, 600),
                ie.to(this.panel_Center, {
                    centerY: -1334,
                    complete: ee.create(this, ()=>{
                        this.destroy(),
                        m.WQSoundManager.WriteOption(),
                        this.closedCallback && (this.closedCallback(),
                        this.closedCallback = null)
                    }
                    )
                }, 600),
                O.GetInstance().DestroyBannerSetupPage()
            }
            onBackButtonClickHandler(e) {
                this.playCloseUI()
            }
            onMusicToggleValueChangedHandler(e) {
                m.WQSoundManager.MusicMuted = !e
            }
            onSoundToggleValueChangedHandler(e) {
                m.WQSoundManager.SoundMuted = !e
            }
        }
        var ae = Laya.Event
          , ne = Laya.Handler
          , re = Laya.Ease
          , oe = Laya.Tween;
        class le extends U.pages.MoreGamePageUI {
            onAwake() {
                this.but_Close.on(ae.CLICK, this, this.onCloseButtonClickHandler),
                this.but_srqz3d.on(ae.CLICK, this, this.onSRQZ3DButtonClickHandler),
                this.but_srmxw3d.on(ae.CLICK, this, this.onSRMXW3DButtonClickHandler),
                this.playOpenUI()
            }
            playOpenUI() {
                this.background.alpha = 0,
                oe.to(this.background, {
                    alpha: 1
                }, 600),
                this.panel_Center.centerY = -1334,
                oe.to(this.panel_Center, {
                    centerY: 0,
                    ease: re.backOut
                }, 1200)
            }
            playCloseUI() {
                oe.to(this.background, {
                    alpha: 0
                }, 600),
                oe.to(this.panel_Center, {
                    centerY: -1334,
                    complete: ne.create(this, ()=>{
                        this.destroy()
                    }
                    )
                }, 600)
            }
            onCloseButtonClickHandler(e) {
                this.playCloseUI()
            }
            onSRQZ3DButtonClickHandler(e) {
                a.IsWeChatMiniGame() && wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                    appId: "wxded58d3344ab36a1"
                })
            }
            onSRMXW3DButtonClickHandler(e) {
                a.IsWeChatMiniGame() && wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                    appId: "wxd92d0a2b550df43b"
                })
            }
        }
        var he = Laya.Vector3;
        class ce extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this._rotation = new he
            }
            onUpdate() {
                this._rotation.y = 5e-4 * Laya.timer.delta,
                this.owner.transform.rotate(this._rotation)
            }
        }
        var de = Laya.Event
          , ue = Laya.Handler
          , pe = Laya.Ease
          , me = Laya.Tween;
        class ge extends U.pages.AlertPageUI {
            constructor() {
                super(...arguments),
                this.content = null,
                this.closedCallback = null
            }
            onAwake() {
                this.but_Confirm.on(de.CLICK, this, this.onConfirmButtonClickHandler),
                this.content && (this.lab_Content.text = this.content,
                this.content = null),
                this.playOpenUI()
            }
            playOpenUI() {
                this.background.alpha = 0,
                me.to(this.background, {
                    alpha: 1
                }, 600),
                this.panel_Center.centerY = -1334,
                me.to(this.panel_Center, {
                    centerY: 0,
                    ease: pe.backOut
                }, 600)
            }
            playCloseUI() {
                me.to(this.background, {
                    alpha: 0
                }, 600),
                me.to(this.panel_Center, {
                    centerY: -1334,
                    complete: ue.create(this, ()=>{
                        this.close(),
                        this.closedCallback && (this.closedCallback(),
                        this.closedCallback = null)
                    }
                    )
                }, 600)
            }
            onConfirmButtonClickHandler(e) {
                this.playCloseUI()
            }
            static OpenUI(e, t) {
                ge._Instance ? (ge._Instance.lab_Content && (ge._Instance.lab_Content.text = e),
                ge._Instance.closedCallback = t,
                ge._Instance.open(!1),
                ge._Instance.playOpenUI()) : (ge._Instance = new ge,
                ge._Instance.content = e,
                ge._Instance.closedCallback = t,
                ge._Instance.open(!1))
            }
            static CloseUI() {
                ge._Instance && ge._Instance.playCloseUI()
            }
        }
        ge._Instance = null;
        var _e = Laya.Event
          , Se = Laya.Handler
          , ye = Laya.Ease
          , fe = Laya.Tween
          , Pe = Laya.Point
          , Ce = Laya.Vector3
          , Ie = Laya.Sprite3D
          , we = Laya.Scene3D
          , be = Laya.DirectionLight
          , De = Laya.CameraClearFlags
          , ve = Laya.Camera
          , Me = Laya.Rigidbody3D;
        class Te extends U.pages.SelectVehiclePageUI {
            constructor() {
                super(...arguments),
                this.driver = P.P1,
                this.vehicleDatas = null,
                this.closedCallback = null,
                this._uiStar = null,
                this._index = 0,
                this._scene3D = null,
                this._vehicle = null
            }
            onAwake() {
                this._uiStar = this.ui_Star.getComponent(T),
                this.but_Back.on(_e.CLICK, this, this.onBackButtonClickHandler),
                this.but_LeftSelect.on(_e.CLICK, this, this.onLeftSelectButtonClickHandler),
                this.but_RightSelect.on(_e.CLICK, this, this.onRightSelectButtonClickHandler),
                this.but_Select.on(_e.CLICK, this, this.onSelectButtonClickHandler),
                this.but_PlayVideo.on(_e.CLICK, this, this.onPlayVideoButtonClickHandler),
                this.playOpenUI()
            }
            onDestroy() {
                this.timer.clearAll(this),
                this.destroyVehicle(),
                this.destroyScene3D()
            }
            playOpenUI() {
                let e = 0;
                this.driver === P.P1 ? (this.lab_Title.text = "player1",
                e = J.GetData().p1SelectVehicleID) : (this.lab_Title.text = "player2",
                e = J.GetData().p2SelectVehicleID),
                this._index = this.getVehicleDataIndex(e),
                this._index < 0 && (this._index = 0);
                let t = this.vehicleDatas[this._index];
                this.updateShowInformation(t),
                this.background.alpha = 0,
                fe.to(this.background, {
                    alpha: 1
                }, 600),
                this.panel_Top.top = -667,
                fe.to(this.panel_Top, {
                    top: 0,
                    ease: ye.backOut
                }, 1200),
                this.panel_Center.centerY = -1334,
                fe.to(this.panel_Center, {
                    centerY: 0,
                    ease: ye.backOut,
                    complete: Se.create(this, ()=>{
                        this.timer.once(100, this, ()=>{
                            this.createScene3D(),
                            this.updateShowVehicle(t)
                        }
                        )
                    }
                    )
                }, 1200),
                O.GetInstance().CreateBannerSelectVehiclePage()
            }
            playCloseUI() {
                this.destroyVehicle(),
                this.destroyScene3D(),
                fe.to(this.background, {
                    alpha: 0
                }, 600),
                fe.to(this.panel_Top, {
                    top: -667
                }, 600),
                fe.to(this.panel_Center, {
                    centerY: -1334,
                    complete: Se.create(this, ()=>{
                        this.destroy(),
                        this.closedCallback && (this.closedCallback(),
                        this.closedCallback = null)
                    }
                    )
                }, 600),
                O.GetInstance().DestroyBannerSelectVehiclePage()
            }
            destroyScene3D() {
                this._scene3D && (this._scene3D.destroy(),
                this._scene3D = null)
            }
            createScene3D() {
                this.destroyScene3D(),
                this._scene3D = new we,
                this._scene3D.ambientColor = new Ce(.25,.25,.25);
                let e = new be;
                e.transform.rotationEuler = new Ce(-50,150,0);
                let t = new ve(0,.3,300);
                t.clearFlag = De.DepthOnly,
                t.transform.position = new Ce(0,2,-2),
                t.transform.rotationEuler = new Ce(-45,180,0),
                this._scene3D.addChild(e),
                this._scene3D.addChild(t),
                this.inner_Background.addChild(this._scene3D);
                let i = t.viewport
                  , s = new Pe(0,0);
                s = this.inner_Background.localToGlobal(s),
                i.x = s.x * Laya.stage.clientScaleX,
                i.y = s.y * Laya.stage.clientScaleY,
                i.width = this.inner_Background.width * Laya.stage.clientScaleX,
                i.height = this.inner_Background.height * Laya.stage.clientScaleY,
                t.viewport = i
            }
            destroyVehicle() {
                this._vehicle && (this._vehicle.destroy(),
                this._vehicle = null)
            }
            createVehicle(e) {
                if (this.destroyVehicle(),
                this._scene3D && e) {
                    this._vehicle = Ie.instantiate(e);
                    let t = this._vehicle.getComponent(Me);
                    t && t.destroy();
                    let i = this._vehicle.getChildByName("trail");
                    i && i.destroy();
                    let s = this._vehicle.getChildByName("trigger");
                    s && s.destroy(),
                    this._vehicle.transform.position = new Ce(0,0,0),
                    this._vehicle.transform.rotationEuler = new Ce(0,-45,0),
                    this._vehicle.addComponent(ce),
                    this._scene3D.addChild(this._vehicle)
                }
            }
            getVehicleDataIndex(e) {
                if (this.vehicleDatas)
                    for (let t = 0; t < this.vehicleDatas.length; t++)
                        if (this.vehicleDatas[t].id === e)
                            return t;
                return -1
            }
            updateShowInformation(e) {
                if (e) {
                    this.lab_VehicleName.text = e.name,
                    this.lab_Index.text = "(" + (this._index + 1) + "/" + this.vehicleDatas.length + ")",
                    this._uiStar.SetStar(e.star),
                    (this.driver === P.P1 ? J.GetData().p1SelectVehicleID : J.GetData().p2SelectVehicleID) === e.id ? (this.img_Selected.visible = !0,
                    this.but_Select.visible = this.but_PlayVideo.visible = !1) : e.selectNeedPlayVideo ? (this.but_PlayVideo.visible = !0,
                    this.img_Selected.visible = this.but_Select.visible = !1) : (this.but_Select.visible = !0,
                    this.img_Selected.visible = this.but_PlayVideo.visible = !1)
                }
            }
            updateShowVehicle(e) {
                e && this.createVehicle(e.prefab)
            }
            updateAll() {
                let e = this.vehicleDatas[this._index];
                this.updateShowInformation(e),
                this.updateShowVehicle(e)
            }
            confirmSelect() {
                let e = this.vehicleDatas[this._index];
                e && (this.driver === P.P1 ? J.GetData().p1SelectVehicleID = e.id : J.GetData().p2SelectVehicleID = e.id,
                J.WriteData(),
                j.UpdateShowVehicles && j.UpdateShowVehicles.Invoke())
            }
            onBackButtonClickHandler(e) {
                this.playCloseUI()
            }
            onLeftSelectButtonClickHandler(e) {
                this._index--,
                this._index < 0 && (this._index = this.vehicleDatas.length - 1),
                this.updateAll()
            }
            onRightSelectButtonClickHandler(e) {
                this._index++,
                this._index >= this.vehicleDatas.length && (this._index = 0),
                this.updateAll()
            }
            onSelectButtonClickHandler(e) {
                this.confirmSelect(),
                this.playCloseUI()
            }
            onPlayVideoButtonClickHandler(e) {

                platform.getInstance().showReward(
                    ()=>{
                        //成功  发放奖励
                        (this.confirmSelect(),
                    this.playCloseUI())
                    })

                // O.GetInstance().ShowRewardedVideoSelectVehicle(e=>{
                //     e ? (this.confirmSelect(),
                //     this.playCloseUI()) : ge.OpenUI("视频播放错误", null)
                // }
                // )
            }
        }
        var Le = Laya.Handler
          , Ge = Laya.Event
          , Ve = Laya.Ease
          , Ae = Laya.Tween
          , Ee = Laya.Point
          , Re = Laya.Vector3
          , ke = Laya.Sprite3D
          , Oe = Laya.Scene3D
          , xe = Laya.DirectionLight
          , Ue = Laya.CameraClearFlags
          , Be = Laya.Camera
          , Ne = Laya.Rigidbody3D;
        class He extends U.pages.RecommendationPageUI {
            constructor() {
                super(...arguments),
                this.closedCallback = null,
                this._uiStar = null,
                this._vehicleData = null,
                this._scene3D = null,
                this._vehicle = null
            }
            onAwake() {
                this._uiStar = this.ui_Star.getComponent(T),
                this.but_PlayVideo.on(Ge.CLICK, this, this.onPlayVideoButtonClickHandler),
                this.but_Close.on(Ge.CLICK, this, this.onCloseButtonClickHandler),
                this.playOpenUI()
            }
            onDestroy() {
                this.timer.clearAll(this),
                this.destroyVehicle(),
                this.destroyScene3D()
            }
            playOpenUI() {
                const e = k.GetInstance();
                let t = J.GetData().p1SelectVehicleID
                  , s = [];
                for (let i = 0; i < e.recommendations.length; i++)
                    e.recommendations[i] !== t && s.push(e.recommendations[i]);
                this._vehicleData = e.GetVehicleDataByID(s[i.GetRandomRangeInt(0, s.length)]),
                this._vehicleData && (this.lab_VehicleName.text = this._vehicleData.name,
                this._uiStar.SetStar(this._vehicleData.star)),
                this.background.alpha = 0,
                Ae.to(this.background, {
                    alpha: 1
                }, 600),
                this.panel_Center.centerY = -1334,
                Ae.to(this.panel_Center, {
                    centerY: 0,
                    ease: Ve.backOut,
                    complete: Le.create(this, ()=>{
                        this.timer.once(100, this, ()=>{
                            this.createScene3D(),
                            this._vehicleData && this.createVehicle(this._vehicleData.prefab)
                        }
                        )
                    }
                    )
                }, 1200)
            }
            playCloseUI() {
                this.destroyVehicle(),
                this.destroyScene3D(),
                Ae.to(this.background, {
                    alpha: 0
                }, 600),
                Ae.to(this.panel_Center, {
                    centerY: -1334,
                    complete: Le.create(this, ()=>{
                        this.destroy(),
                        this.closedCallback && (this.closedCallback(),
                        this.closedCallback = null)
                    }
                    )
                }, 600)
            }
            destroyScene3D() {
                this._scene3D && (this._scene3D.destroy(),
                this._scene3D = null)
            }
            createScene3D() {
                this.destroyScene3D(),
                this._scene3D = new Oe,
                this._scene3D.ambientColor = new Re(.25,.25,.25);
                let e = new xe;
                e.transform.rotationEuler = new Re(-50,150,0);
                let t = new Be(0,.3,300);
                t.clearFlag = Ue.DepthOnly,
                t.transform.position = new Re(0,2,-2),
                t.transform.rotationEuler = new Re(-45,180,0),
                this._scene3D.addChild(e),
                this._scene3D.addChild(t),
                this.inner_Background.addChild(this._scene3D);
                let i = t.viewport
                  , s = new Ee(0,0);
                s = this.inner_Background.localToGlobal(s),
                i.x = s.x * Laya.stage.clientScaleX,
                i.y = s.y * Laya.stage.clientScaleY,
                i.width = this.inner_Background.width * Laya.stage.clientScaleX,
                i.height = this.inner_Background.height * Laya.stage.clientScaleY,
                t.viewport = i
            }
            destroyVehicle() {
                this._vehicle && (this._vehicle.destroy(),
                this._vehicle = null)
            }
            createVehicle(e) {
                if (this.destroyVehicle(),
                this._scene3D && e) {
                    this._vehicle = ke.instantiate(e);
                    let t = this._vehicle.getComponent(Ne);
                    t && t.destroy();
                    let i = this._vehicle.getChildByName("trail");
                    i && i.destroy();
                    let s = this._vehicle.getChildByName("trigger");
                    s && s.destroy(),
                    this._vehicle.transform.position = new Re(0,0,0),
                    this._vehicle.transform.rotationEuler = new Re(0,-45,0),
                    this._vehicle.addComponent(ce),
                    this._scene3D.addChild(this._vehicle)
                }
            }
            onPlayVideoButtonClickHandler(e) {
                platform.getInstance().showReward(
                    ()=>{
                        //成功  发放奖励
                        (this._vehicleData && (J.GetData().p1SelectVehicleID = J.GetData().p2SelectVehicleID = this._vehicleData.id,
                    J.WriteData()),
                    this.playCloseUI())
                    })
                // O.GetInstance().ShowRewardedVideoSelectVehicle(e=>{
                //     e ? (this._vehicleData && (J.GetData().p1SelectVehicleID = J.GetData().p2SelectVehicleID = this._vehicleData.id,
                //     J.WriteData()),
                //     this.playCloseUI()) : ge.OpenUI("视频播放错误", null)
                // }
                // )
            }
            onCloseButtonClickHandler(e) {
                this.playCloseUI()
            }
        }
        var Fe = Laya.Event
          , We = Laya.Handler
          , Qe = Laya.Ease
          , qe = Laya.Tween;
        class Ke extends U.pages.SelectScenePageUI {
            constructor() {
                super(...arguments),
                this.sceneDatas = null,
                this.backCallback = null,
                this._index = 0
            }
            onAwake() {
                this.but_Back.on(Fe.CLICK, this, this.onBackButtonClickHandler),
                this.but_LeftSelect.on(Fe.CLICK, this, this.onLeftSelectButtonClickHandler),
                this.but_RightSelect.on(Fe.CLICK, this, this.onRightSelectButtonClickHandler),
                this.but_StartGame.on(Fe.CLICK, this, this.onStartGameButtonClickHandler),
                this.com_AILevel.selectHandler = new We(this,this.onAILevelSelectHandler),
                this.playOpenUI()
            }
            playOpenUI() {
                this._index = this.getSceneDataIndexByUrl(j.SelectSceneURL),
                this._index < 0 && (this._index = 0),
                this.updateShow(this.sceneDatas[this._index]),
                this.com_AILevel.selectedIndex = j.GameAILevel,
                this.background.alpha = 0,
                qe.to(this.background, {
                    alpha: 1
                }, 600),
                this.panel_Top.top = -667,
                qe.to(this.panel_Top, {
                    top: 0,
                    ease: Qe.backOut
                }, 1200),
                this.panel_Center.centerY = -1334,
                qe.to(this.panel_Center, {
                    centerY: 0,
                    ease: Qe.backOut
                }, 1200),
                O.GetInstance().CreateBannerSelectScenePage()
            }
            playCloseUI(e) {
                qe.to(this.background, {
                    alpha: 0
                }, 600),
                qe.to(this.panel_Top, {
                    top: -667
                }, 600),
                qe.to(this.panel_Center, {
                    centerY: -1334,
                    complete: We.create(this, ()=>{
                        this.destroy(),
                        e && e()
                    }
                    )
                }, 600),
                O.GetInstance().DestroyBannerSelectScenePage()
            }
            getSkinByName(e) {
                switch (e) {
                case "Three Sand Islands":
                    return "generics/img_island.png";
                case "Fantasic ShangHai":
                    return "generics/img_city.png";
                case "Western Zhou Dynasty Tomb":
                    return "generics/img_tomb.png";
                default:
                    return ""
                }
            }
            getSceneDataIndexByUrl(e) {
                for (let t = 0; t < this.sceneDatas.length; t++)
                    if (this.sceneDatas[t].url === e)
                        return t;
                return -1
            }
            updateShow(e) {
                e && (this.lab_SceneName.text = e.name,
                this.lab_SceneDescription.text = e.description,
                this.img_Scene.skin = this.getSkinByName(e.name))
            }
            onBackButtonClickHandler(e) {
                this.playCloseUI(this.backCallback)
            }
            onLeftSelectButtonClickHandler(e) {
                this._index--,
                this._index < 0 && (this._index = this.sceneDatas.length - 1),
                this.updateShow(this.sceneDatas[this._index])
            }
            onRightSelectButtonClickHandler(e) {
                this._index++,
                this._index >= this.sceneDatas.length && (this._index = 0),
                this.updateShow(this.sceneDatas[this._index])
            }
            onStartGameButtonClickHandler(e) {
                m.WQSoundManager.StopMusic(),
                j.SelectSceneURL = this.sceneDatas[this._index].url,
                this.playCloseUI(()=>{
                    let e = new He;
                    e.closedCallback = (()=>{
                        Q.OpenUI(()=>{
                            V.SwitchModule("GameModule")
                        }
                        )
                    }
                    ),
                    e.open(!1)
                }
                )
            }
            onAILevelSelectHandler() {
                j.GameAILevel = this.com_AILevel.selectedIndex,
                e.Log("AILevel=%s", j.GameAILevel)
            }
        }
        var Ye = Laya.Event
          , Xe = Laya.Handler
          , ze = Laya.Ease
          , je = Laya.Tween;
        class Je extends U.pages.MainPageUI {
            onAwake() {
                this.but_Setup.on(Ye.CLICK, this, this.onSetupButtonClickHandler),
                this.but_MoreGame.on(Ye.CLICK, this, this.onMoreGameButtonClickHandler),
                this.but_NavigateSRQZ3D.on(Ye.CLICK, this, this.onNavigateSRQZ3DButtonClickHandler),
                this.but_OnePlayerGame.on(Ye.CLICK, this, this.onOnePlayerGameButtonClickHandler),
                this.but_TwoPlayerGame.on(Ye.CLICK, this, this.onTwoPlayerGameButtonClickHandler),
                this.but_SelectVehicleP1.on(Ye.CLICK, this, this.onSelectVehicleP1ButtonClickHandler),
                this.but_SelectVehicleP2.on(Ye.CLICK, this, this.onSelectVehicleP2ButtonClickHandler),
                this.playOpenUI()
            }
            playOpenUI() {
                this.addChild(platform.getInstance().yad)
               

                const appList = this.getChildByName("appList");
                platform.getInstance().initList(appList);
                this.panel_Top.top = -667,
                je.to(this.panel_Top, {
                    top: 0,
                    ease: ze.backOut
                }, 1200),
                this.panel_Center.centerY = -1334,
                je.to(this.panel_Center, {
                    centerY: 0,
                    ease: ze.backOut
                }, 1200)
            }
            playCloseUI(e) {
                platform.getInstance().yad.removeSelf()
                je.to(this.panel_Top, {
                    top: -667
                }, 600),
                je.to(this.panel_Center, {
                    centerY: -1334,
                    complete: Xe.create(this, ()=>{
                        this.destroy(),
                        e && e()
                    }
                    )
                }, 600)
            }
            openUISelectVehiclePage(e) {
                this.playCloseUI(()=>{
                    let t = new Te;
                    t.driver = e,
                    t.vehicleDatas = k.GetInstance().vehicleDatas,
                    t.closedCallback = (()=>{
                        (new Je).open(!1)
                    }
                    ),
                    t.open(!1)
                }
                )
            }
            openUISelectScenePage() {
                this.playCloseUI(()=>{
                    let e = new Ke;
                    e.sceneDatas = k.GetInstance().sceneDatas,
                    e.backCallback = (()=>{
                        (new Je).open(!1)
                    }
                    ),
                    e.open(!1)
                }
                )
            }
            onSetupButtonClickHandler(e) {
                this.playCloseUI(()=>{
                    let e = new se;
                    e.closedCallback = (()=>{
                        (new Je).open(!1)
                    }
                    ),
                    e.open(!1)
                }
                )
            }
            onMoreGameButtonClickHandler(e) {
            }
            onOnePlayerGameButtonClickHandler(e) {

                platform.getInstance().showInterstitial(()=>{
                    //广告回调,不论成功失败都会进入
                    //恢复音乐
                    //todosomething
                    j.GamePlayerNumber = q.One,
                    this.openUISelectScenePage()
                })
                
                
            }
            onTwoPlayerGameButtonClickHandler(e) {

                platform.getInstance().showInterstitial(()=>{
                    //广告回调,不论成功失败都会进入
                    //恢复音乐
                    //todosomething
                    j.GamePlayerNumber = q.Two,
                    this.openUISelectScenePage()
                })
                
            }
            onSelectVehicleP1ButtonClickHandler(e) {
                this.openUISelectVehiclePage(P.P1)
            }
            onSelectVehicleP2ButtonClickHandler(e) {
                this.openUISelectVehiclePage(P.P2)
            }
            onNavigateSRQZ3DButtonClickHandler(e) {
                a.IsWeChatMiniGame() && wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                    appId: "wxded58d3344ab36a1"
                })
            }
        }
        var Ze = Laya.Vector3;
        class $e extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this._mySprite3D = null,
                this._rotateSpeed = .01,
                this._rotationEuler = new Ze
            }
            onAwake() {
                this._mySprite3D = this.owner
            }
            onUpdate() {
                this._mySprite3D.transform.rotationEuler.cloneTo(this._rotationEuler),
                this._rotationEuler.y <= -30 ? (this._rotationEuler.y = -30,
                this._mySprite3D.transform.rotationEuler = this._rotationEuler,
                this._rotateSpeed = .01) : this._rotationEuler.y >= 30 && (this._rotationEuler.y = 30,
                this._mySprite3D.transform.rotationEuler = this._rotationEuler,
                this._rotateSpeed = -.01),
                this._rotationEuler.y += this._rotateSpeed * Laya.timer.delta,
                this._mySprite3D.transform.rotationEuler = this._rotationEuler
            }
        }
        var et, it = Laya.Handler, st = Laya.Vector3, at = Laya.Vector4, nt = Laya.Sprite3D, rt = Laya.Rigidbody3D, ot = Laya.CameraClearFlags, lt = Laya.Camera;
        class ht {
            constructor() {
                this._scene3D = null,
                this._p1ShowPoint = null,
                this._p2ShowPoint = null,
                this._p1 = null,
                this._p2 = null
            }
            destroyScene3D() {
                this._scene3D && (this._scene3D.destroy(),
                this._scene3D = null)
            }
            destroyPlayers() {
                this._p1 && (this._p1.destroy(),
                this._p1 = null),
                this._p2 && (this._p2.destroy(),
                this._p2 = null)
            }
            createShowVehicle(e, t, i) {
                let s = nt.instantiate(e.prefab, i)
                  , a = s.getComponent(rt);
                a && a.destroy();
                let n = s.getChildByName("trail");
                n && n.destroy();
                let r = s.getChildByName("trigger");
                return r && r.destroy(),
                s.transform.position = t.transform.position,
                s.transform.rotation = t.transform.rotation,
                s
            }
            Build() {
                Laya.loader.create("subpackages/unitys/main.ls", it.create(this, e=>{
                    this._scene3D = e,
                    this._p1ShowPoint = e.getChildByName("p1showpoint"),
                    this._p2ShowPoint = e.getChildByName("p2showpoint");
                    let t = new lt(0,.3,300);
                    t.clearFlag = ot.SolidColor,
                    t.clearColor = new at(.1451,.2667,.2824,1),
                    t.transform.position = new st(0,6.5,-8),
                    t.transform.rotationEuler = new st(-45,180,0);
                    let i = new nt("camera");
                    i.addChild(t),
                    i.addComponent($e),
                    e.addChild(i),
                    Laya.stage.addChildAt(e, 0),
                    j.UpdateShowVehicles = new z(this,this.onUpdateShowVehiclesHandler),
                    this.onUpdateShowVehiclesHandler(),
                    Q.CloseUI(()=>{
                        m.WQSoundManager.PlayMusic("sounds/music.mp3"),
                        (new Je).open(!1)
                    }
                    )
                }
                ))
            }
            Destroy() {
                j.UpdateShowVehicles = null,
                this.destroyPlayers(),
                this.destroyScene3D()
            }
            onUpdateShowVehiclesHandler() {
                if (this._scene3D) {
                    this.destroyPlayers();
                    let e = k.GetInstance().GetVehicleDataByID(J.GetData().p1SelectVehicleID);
                    e && this._p1ShowPoint && (this._p1 = this.createShowVehicle(e, this._p1ShowPoint, this._scene3D));
                    let t = k.GetInstance().GetVehicleDataByID(J.GetData().p2SelectVehicleID);
                    t && this._p2ShowPoint && (this._p2 = this.createShowVehicle(t, this._p2ShowPoint, this._scene3D))
                }
            }
        }
        class ct extends V {
            constructor() {
                super(),
                this._mainLogicManager = null,
                this._name = "MainModule"
            }
            Enter() {
                e.Log("[MainModule]: Enter==================>"),
                this.destroyMainLogicManager(),
                this._mainLogicManager = new ht,
                this._mainLogicManager.Build()
            }
            Execute(e) {}
            Exit() {
                e.Log("[MainModule]: Exit==================>"),
                this.destroyMainLogicManager(),
                Laya.Resource.destroyUnusedResources()
            }
            destroyMainLogicManager() {
                this._mainLogicManager && (this._mainLogicManager.Destroy(),
                this._mainLogicManager = null)
            }
        }
        class dt {
            constructor() {
                this._map = new Object,
                this._id = 0
            }
            get id() {
                return this._id
            }
            AddTransition(e, t) {
                this._map[e] = t
            }
            RemoveTransition(e) {
                this._map.hasOwnProperty(e) && delete this._map[e]
            }
            GetTransitionStateID(e) {
                return this._map.hasOwnProperty(e) ? this._map[e] : 0
            }
        }
        class ut {
            constructor() {
                this._states = [],
                this._globalState = null,
                this._currentState = null,
                this._previousState = null
            }
            get globalState() {
                return this._globalState
            }
            set globalState(e) {
                this._globalState = e,
                this._globalState.Enter()
            }
            get currentState() {
                return this._currentState
            }
            get previousState() {
                return this._previousState
            }
            set PreviousState(e) {
                this._previousState = e
            }
            GetState(e) {
                for (let t = 0; t < this._states.length; t++)
                    if (this._states[t].id === e)
                        return this._states[t];
                return null
            }
            AddState(t) {
                let i;
                for (let s = 0; s < this._states.length; s++)
                    if ((i = this._states[s]) === t || i.id === t.id)
                        return void e.Warn("duplicate state %d", t.id);
                this._states.push(t)
            }
            RemoveState(e) {
                let t = this._states.indexOf(e);
                -1 !== t && this._states.splice(t, 1)
            }
            ChangeCurrentState(e) {
                this._currentState && this._currentState.Exit(),
                this._previousState = this._currentState,
                this._currentState = e,
                this._currentState.Enter()
            }
            ChangeCurrentStateByStateID(e) {
                let t = this.GetState(e);
                t && this.ChangeCurrentState(t)
            }
            BackToPreviousState() {
                this._previousState && this.ChangeCurrentState(this._previousState)
            }
            PerformTransition(t) {
                if (this._currentState) {
                    let e = this._currentState.GetTransitionStateID(t);
                    this.ChangeCurrentStateByStateID(e)
                } else
                    e.Warn("currentState = null")
            }
            Update(e) {
                this._globalState && this._globalState.Execute(e),
                this._currentState && this._currentState.Execute(e)
            }
        }
        !function(e) {
            e.EffectCollision = "effect-collision",
            e.EffectExplode = "effect-explode",
            e.EffectAcceleration = "effect-acceleration",
            e.EffectReverse = "effect-reverse",
            e.EffectReset = "effect-reset"
        }(et || (et = {}));
        class pt extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.sign = "",
                this.pool = null,
                this._mySprite3D = null
            }
            get mySprite3D() {
                return this._mySprite3D || (this._mySprite3D = this.owner),
                this._mySprite3D
            }
            ReturnEffect() {
                this.sign && this.pool ? this.pool.ReturnComponent(this.sign, this) : this.owner.destroy()
            }
        }
        var mt = Laya.ShuriKenParticle3D;
        class gt extends pt {
            constructor() {
                super(...arguments),
                this.myParticles = [],
                this.followTarget = null
            }
            onAwake() {
                let e = null;
                for (let t = 0; t < this.owner.numChildren; t++)
                    (e = this.owner.getChildAt(t))instanceof mt && this.myParticles.push(e)
            }
            onUpdate() {
                this.IsPlaying() ? this.followTarget && (this.mySprite3D.transform.position = this.followTarget.transform.position,
                this.mySprite3D.transform.rotation = this.followTarget.transform.rotation) : (this.followTarget = null,
                this.ReturnEffect())
            }
            IsPlaying() {
                for (let e = 0; e < this.myParticles.length; e++)
                    if (this.myParticles[e].particleSystem.isPlaying)
                        return !0;
                return !1
            }
            Play() {
                for (let e = 0; e < this.myParticles.length; e++)
                    this.myParticles[e].particleSystem.play()
            }
        }
        var _t = Laya.Sprite3D;
        class St {
            static Create() {
                return _t.instantiate(k.GetInstance().effect_Collision).addComponent(gt)
            }
        }
        var yt = Laya.Sprite3D;
        class ft {
            static Create() {
                return yt.instantiate(k.GetInstance().effect_Explode).addComponent(gt)
            }
        }
        var Pt = Laya.ShuriKenParticle3D;
        class Ct extends pt {
            constructor() {
                super(...arguments),
                this.myParticles = []
            }
            onAwake() {
                let e = null;
                for (let t = 0; t < this.owner.numChildren; t++)
                    (e = this.owner.getChildAt(t))instanceof Pt && this.myParticles.push(e)
            }
            Play() {
                for (let e = 0; e < this.myParticles.length; e++)
                    this.myParticles[e].particleSystem.play()
            }
        }
        var It = Laya.Sprite3D;
        class wt {
            static Create() {
                return It.instantiate(k.GetInstance().effect_Acceleration).addComponent(Ct)
            }
        }
        var bt = Laya.Sprite3D;
        class Dt {
            static Create() {
                return bt.instantiate(k.GetInstance().effect_Reverse).addComponent(Ct)
            }
        }
        var vt = Laya.Sprite3D;
        class Mt {
            static Create() {
                return vt.instantiate(k.GetInstance().effect_Reset).addComponent(gt)
            }
        }
        class Tt {
            static PreInstantiate() {
                let t = 0
                  , i = [];
                for (t = 0; t < 6; t++)
                    i.push(Tt.GetEffect(et.EffectCollision));
                for (t = 0; t < i.length; t++)
                    Tt.Pool.ReturnComponent(et.EffectCollision, i[t]);
                for (i.length = 0,
                t = 0; t < 2; t++)
                    i.push(Tt.GetEffect(et.EffectExplode));
                for (t = 0; t < i.length; t++)
                    Tt.Pool.ReturnComponent(et.EffectExplode, i[t]);
                for (i.length = 0,
                t = 0; t < 6; t++)
                    i.push(Tt.GetEffect(et.EffectAcceleration));
                for (t = 0; t < i.length; t++)
                    Tt.Pool.ReturnComponent(et.EffectAcceleration, i[t]);
                for (i.length = 0,
                t = 0; t < 6; t++)
                    i.push(Tt.GetEffect(et.EffectReverse));
                for (t = 0; t < i.length; t++)
                    Tt.Pool.ReturnComponent(et.EffectReverse, i[t]);
                for (i.length = 0,
                t = 0; t < 6; t++)
                    i.push(Tt.GetEffect(et.EffectReset));
                for (t = 0; t < i.length; t++)
                    Tt.Pool.ReturnComponent(et.EffectReset, i[t]);
                e.Log(Tt.Pool)
            }
            static GetEffect(e) {
                let t = null;
                switch (e) {
                case et.EffectCollision:
                    t = Tt.Pool.GetComponentByCreateFunc(e, St.Create, St);
                    break;
                case et.EffectExplode:
                    t = Tt.Pool.GetComponentByCreateFunc(e, ft.Create, ft);
                    break;
                case et.EffectAcceleration:
                    t = Tt.Pool.GetComponentByCreateFunc(e, wt.Create, wt);
                    break;
                case et.EffectReverse:
                    t = Tt.Pool.GetComponentByCreateFunc(e, Dt.Create, Dt);
                    break;
                case et.EffectReset:
                    t = Tt.Pool.GetComponentByCreateFunc(e, Mt.Create, Mt)
                }
                return t.sign = e,
                t.pool = Tt.Pool,
                t
            }
        }
        Tt.Pool = new class {
            constructor() {
                this._pools = new Object
            }
            getPoolBySign(e) {
                return this._pools[e] || (this._pools[e] = [])
            }
            ClearAllPools() {
                let e = this._pools;
                for (let t in e) {
                    let i = e[t];
                    if (Array.isArray(i))
                        for (let e = 0; e < i.length; e++)
                            i[e].owner.destroy()
                }
                this._pools = new Object
            }
            GetComponentByCreateFunc(e, t, i=null) {
                let s = this.getPoolBySign(e);
                return s.length > 0 ? s.pop() : t.apply(i)
            }
            ReturnComponent(e, t) {
                t.owner.removeSelf();
                let i = this.getPoolBySign(e);
                -1 === i.indexOf(t) && i.push(t)
            }
        }
        ;
        var Lt = Laya.Vector3;
        class Gt {
            constructor() {
                this.vehicleA = null,
                this.vehicleB = null,
                this.collisionPoint = new Lt
            }
            Equals(e, t) {
                return this.vehicleA === e && this.vehicleB === t || this.vehicleA === t && this.vehicleB === e
            }
            static Create(e, t, i) {
                let s = new Gt;
                return s.vehicleA = e,
                s.vehicleB = t,
                i.cloneTo(s.collisionPoint),
                s
            }
        }
        var Vt, At, Et = Laya.Vector3;
        class Rt {
            static Clear() {
                Rt.VehicleCollisionInfos.length = 0
            }
            static GetVehicleCollisionInfo(e, t) {
                for (let i = 0; i < Rt.VehicleCollisionInfos.length; i++)
                    if (Rt.VehicleCollisionInfos[i].Equals(e, t))
                        return Rt.VehicleCollisionInfos[i];
                return null
            }
            static AddVehicleCollisionInfo(e, t, i) {
                let s = Rt.GetVehicleCollisionInfo(e, t);
                s || (s = Gt.Create(e, t, i),
                Rt.VehicleCollisionInfos.push(s))
            }
            static Process(e) {
                let t = null
                  , i = Rt._TempVector3;
                for (let e = 0; e < Rt.VehicleCollisionInfos.length; e++)
                    if (t = Rt.VehicleCollisionInfos[e],
                    Et.subtract(t.vehicleA.mySprite3D.transform.position, t.collisionPoint, i),
                    Et.normalize(i, i),
                    Et.scale(i, Rt.COLLISION_REBOUND_IMPULSE, i),
                    t.vehicleA.myRigidbody3D.applyImpulse(i),
                    Et.subtract(t.vehicleB.mySprite3D.transform.position, t.collisionPoint, i),
                    Et.normalize(i, i),
                    Et.scale(i, Rt.COLLISION_REBOUND_IMPULSE, i),
                    t.vehicleB.myRigidbody3D.applyImpulse(i),
                    I.MyScene3D) {
                        let e = I.CalculatePercentageOfDistanceFromPlayer(t.collisionPoint, I.SOUND_MAX_DISTANCE);
                        if (e < 1) {
                            if (Rt._SoundPlayTime < Date.now()) {
                                Rt._SoundPlayTime = Date.now() + 600;
                                let t = m.WQSoundManager.PlaySound("sounds/collision.mp3");
                                t && (t.volume = 1 - e)
                            }
                            let i = Tt.GetEffect(et.EffectCollision);
                            I.MyScene3D.addChild(i.owner),
                            i.mySprite3D.transform.position = t.collisionPoint,
                            i.Play()
                        }
                    }
                Rt.VehicleCollisionInfos.length = 0
            }
        }
        Rt.COLLISION_REBOUND_IMPULSE = 1,
        Rt.VehicleCollisionInfos = [],
        Rt._SoundPlayTime = 0,
        Rt._TempVector3 = new Et,
        function(e) {
            e[e.NullStateID = 0] = "NullStateID",
            e[e.Ready = 1] = "Ready",
            e[e.Game = 2] = "Game",
            e[e.Over = 3] = "Over"
        }(Vt || (Vt = {})),
        function(e) {
            e[e.NullTransitionID = 0] = "NullTransitionID",
            e[e.ReadyCompleted = 1] = "ReadyCompleted",
            e[e.GameOver = 2] = "GameOver"
        }(At || (At = {}));
        class kt extends dt {
            constructor(e) {
                super(),
                this.manager = null,
                this.manager = e
            }
        }
        class Ot {
            static IsPauseUpdate() {
                return Ot.IsGamePause || Ot.IsGameOver
            }
            static GameOver(e) {
                if (!Ot.IsGameOver) {
                    Ot.IsGameOver = !0,
                    Ot.RankingList.length = 0,
                    Ot.RankingList.push(e.GetNickname()),
                    I.SortVehiclesByDriveDistance();
                    for (let t = 0; t < I.Vehicles.length; t++)
                        I.Vehicles[t] !== e && Ot.RankingList.push(I.Vehicles[t].GetNickname())
                }
            }
        }
        Ot.IsGamePause = !1,
        Ot.IsGameOver = !1,
        Ot.IsGameStart = !1,
        Ot.GameTime = 0,
        Ot.RankingList = [],
        Ot.OnP1PlayTips = null,
        Ot.OnP2PlayTips = null;
        var xt = Laya.Event
          , Ut = Laya.Handler
          , Bt = Laya.Ease
          , Nt = Laya.Tween;
        class Ht extends U.pages.GameOnePlayerPageUI {
            constructor() {
                super(...arguments),
                this._uiGameProgress = null,
                this._openedCallback = null
            }
            onAwake() {
                this._uiGameProgress = this.ui_GameProgress.getComponent(v),
                this.but_Back.on(xt.CLICK, this, this.onBackButtonClickHandler),
                this.joystick_Control.getComponent(f).onControl = new z(this,this.onControlHandler),
                I.OnRankingUpdated = new z(this,this.onRankingUpdatedHandler),
                Ot.OnP1PlayTips = new z(this,this.onPlayTipsHandler),
                this.playOpenUI(this._openedCallback),
                this._openedCallback = null
            }
            onDestroy() {
                I.OnRankingUpdated = null,
                Ot.OnP1PlayTips = null
            }
            playOpenUI(e) {
                this.panel_Top.top = -667,
                Nt.to(this.panel_Top, {
                    top: 0,
                    ease: Bt.backOut
                }, 600),
                this.panel_Bottom.bottom = -667,
                Nt.to(this.panel_Bottom, {
                    bottom: 0,
                    ease: Bt.backOut,
                    complete: Ut.create(this, ()=>{
                        e && e(),
                        this.joystick_Control.on(xt.MOUSE_DOWN, this, this.onCloseOperationTipsHandler)
                    }
                    )
                }, 600)
            }
            playCloseUI(e) {
                Nt.to(this.panel_Top, {
                    top: -667
                }, 600),
                Nt.to(this.panel_Bottom, {
                    bottom: -667,
                    complete: Ut.create(this, ()=>{
                        this.destroy(),
                        e && e()
                    }
                    )
                }, 600)
            }
            OpenUI(e) {
                this._openedCallback = e,
                this.open(!1)
            }
            CloseUI(e) {
                this.playCloseUI(e)
            }
            onRankingUpdatedHandler() {
                this._uiGameProgress.Update()
            }
            onPlayTipsHandler(e) {
                this.lab_Tips.text = e,
                this.lab_Tips.alpha = 1,
                this.lab_Tips.scaleX = this.lab_Tips.scaleY = 0,
                Nt.to(this.lab_Tips, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: Bt.backOut
                }, 600),
                Nt.to(this.lab_Tips, {
                    alpha: 0
                }, 600, null, null, 2e3)
            }
            onBackButtonClickHandler(e) {
                m.WQSoundManager.StopMusic(),
                this.playCloseUI(()=>{
                    Q.OpenUI(()=>{
                        V.SwitchModule("MainModule")
                    }
                    )
                }
                )
            }
            onControlHandler(e) {
                I.P1 && (I.P1.input.drive = e.control,
                I.P1.input.horizontal = e.intensity)
            }
            onCloseOperationTipsHandler(e) {
                this.joystick_Control.off(xt.MOUSE_DOWN, this, this.onCloseOperationTipsHandler),
                this.operationTips && this.operationTips.destroy()
            }
        }
        var Ft = Laya.Event
          , Wt = Laya.Handler
          , Qt = Laya.Ease
          , qt = Laya.Tween;
        class Kt extends U.pages.GameTwoPlayerPageUI {
            constructor() {
                super(...arguments),
                this._uiGameProgress = null,
                this._openedCallback = null
            }
            onAwake() {
                this._uiGameProgress = this.ui_GameProgress.getComponent(v),
                this.but_Back.on(Ft.CLICK, this, this.onBackButtonClickHandler),
                this.joystick_P1Control.getComponent(f).onControl = new z(this,this.onP1ControlHandler),
                this.joystick_P2Control.getComponent(f).onControl = new z(this,this.onP2ControlHandler),
                Ot.OnP1PlayTips = new z(this,this.onP1PlayTipsHandler),
                Ot.OnP2PlayTips = new z(this,this.onP2PlayTipsHandler),
                I.OnRankingUpdated = new z(this,this.onRankingUpdatedHandler),
                this.playOpenUI(this._openedCallback),
                this._openedCallback = null
            }
            onDestroy() {
                Ot.OnP1PlayTips = null,
                Ot.OnP2PlayTips = null,
                I.OnRankingUpdated = null
            }
            playOpenUI(e) {
                this.panel_Top.top = -667,
                qt.to(this.panel_Top, {
                    top: 0,
                    ease: Qt.backOut
                }, 600),
                this.panel_Bottom.bottom = -667,
                qt.to(this.panel_Bottom, {
                    bottom: 0,
                    ease: Qt.backOut,
                    complete: Wt.create(this, ()=>{
                        e && e(),
                        this.joystick_P1Control.on(Ft.MOUSE_DOWN, this, this.onCloseOperationTipsP1Handler),
                        this.joystick_P2Control.on(Ft.MOUSE_DOWN, this, this.onCloseOperationTipsP2Handler)
                    }
                    )
                }, 600),
                this.panel_Center.alpha = 0,
                qt.to(this.panel_Center, {
                    alpha: 1
                }, 600)
            }
            playCloseUI(e) {
                qt.to(this.panel_Top, {
                    top: -667
                }, 600),
                qt.to(this.panel_Bottom, {
                    bottom: -667,
                    complete: Wt.create(this, ()=>{
                        this.destroy(),
                        e && e()
                    }
                    )
                }, 600),
                qt.to(this.panel_Center, {
                    alpha: 0
                }, 600)
            }
            OpenUI(e) {
                this._openedCallback = e,
                this.open(!1)
            }
            CloseUI(e) {
                this.playCloseUI(e)
            }
            onRankingUpdatedHandler() {
                this._uiGameProgress.Update()
            }
            onP1PlayTipsHandler(e) {
                this.lab_TipsP1.text = e,
                this.lab_TipsP1.alpha = 1,
                this.lab_TipsP1.scaleX = this.lab_TipsP1.scaleY = 0,
                qt.to(this.lab_TipsP1, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: Qt.backOut
                }, 600),
                qt.to(this.lab_TipsP1, {
                    alpha: 0
                }, 600, null, null, 2e3)
            }
            onP2PlayTipsHandler(e) {
                this.lab_TipsP2.text = e,
                this.lab_TipsP2.alpha = 1,
                this.lab_TipsP2.scaleX = this.lab_TipsP2.scaleY = 0,
                qt.to(this.lab_TipsP2, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: Qt.backOut
                }, 600),
                qt.to(this.lab_TipsP2, {
                    alpha: 0
                }, 600, null, null, 2e3)
            }
            onBackButtonClickHandler(e) {
                m.WQSoundManager.StopMusic(),
                this.playCloseUI(()=>{
                    Q.OpenUI(()=>{
                        V.SwitchModule("MainModule")
                    }
                    )
                }
                )
            }
            onP1ControlHandler(e) {
                I.P1 && (I.P1.input.drive = e.control,
                I.P1.input.horizontal = e.intensity)
            }
            onP2ControlHandler(e) {
                I.P2 && (I.P2.input.drive = e.control,
                I.P2.input.horizontal = -e.intensity)
            }
            onCloseOperationTipsP1Handler(e) {
                this.joystick_P1Control.off(Ft.MOUSE_DOWN, this, this.onCloseOperationTipsP1Handler),
                this.operationTipsP1 && this.operationTipsP1.destroy()
            }
            onCloseOperationTipsP2Handler(e) {
                this.joystick_P2Control.off(Ft.MOUSE_DOWN, this, this.onCloseOperationTipsP2Handler),
                this.operationTipsP2 && this.operationTipsP2.destroy()
            }
        }
        var Yt, Xt, zt, jt = Laya.Physics3DUtils;
        class Jt {
        }
        Jt.ALL = jt.COLLISIONFILTERGROUP_ALLFILTER,
        Jt.VEHICLE = jt.COLLISIONFILTERGROUP_CUSTOMFILTER1,
        Jt.VEHICLE_TRIGGER = jt.COLLISIONFILTERGROUP_CUSTOMFILTER2,
        Jt.TEST_DROP = jt.COLLISIONFILTERGROUP_ALLFILTER ^ jt.COLLISIONFILTERGROUP_CUSTOMFILTER1 ^ jt.COLLISIONFILTERGROUP_CUSTOMFILTER2,
        function(e) {
            e[e.TriggerEndPoint = 0] = "TriggerEndPoint",
            e[e.Acceleration = 1] = "Acceleration",
            e[e.Blast = 2] = "Blast",
            e[e.Destroy = 3] = "Destroy",
            e[e.Reverse = 4] = "Reverse",
            e[e.ChangePosition = 5] = "ChangePosition"
        }(Yt || (Yt = {}));
        class Zt {
            constructor() {
                this.horizontal = 0,
                this.drive = !1
            }
        }
        !function(e) {
            e[e.NullStateID = 0] = "NullStateID",
            e[e.Global = 1] = "Global",
            e[e.Ready = 2] = "Ready",
            e[e.Drive = 3] = "Drive",
            e[e.OffGround = 4] = "OffGround",
            e[e.Reset = 5] = "Reset",
            e[e.Arrive = 6] = "Arrive"
        }(Xt || (Xt = {})),
        function(e) {
            e[e.NullTransitionID = 0] = "NullTransitionID",
            e[e.GameStart = 1] = "GameStart",
            e[e.Destroyed = 2] = "Destroyed",
            e[e.OffGround = 3] = "OffGround",
            e[e.ArriveEnd = 4] = "ArriveEnd",
            e[e.OnGround = 5] = "OnGround",
            e[e.ResetComplete = 6] = "ResetComplete"
        }(zt || (zt = {}));
        class $t extends dt {
            constructor(e) {
                super(),
                this.vehicle = null,
                this.vehicle = e
            }
        }
        class ei extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.target = null,
                this._mySprite3D = null
            }
            onAwake() {
                this._mySprite3D = this.owner,
                Laya.timer.once(900, this, ()=>{
                    this.destroyTarget()
                }
                ),
                Laya.timer.once(2e3, this, ()=>{
                    this.owner.destroy()
                }
                )
            }
            onUpdate() {
                this.target && (this._mySprite3D.transform.position = this.target.mySprite3D.transform.position)
            }
            onDestroy() {
                Laya.timer.clearAll(this)
            }
            destroyTarget() {
                if (this.target && (this.target.EventHandler(Yt.Destroy),
                I.MyScene3D)) {
                    let e = I.CalculatePercentageOfDistanceFromPlayer(this._mySprite3D.transform.position, I.SOUND_MAX_DISTANCE);
                    if (e < 1) {
                        let t = m.WQSoundManager.PlaySound("sounds/explode.mp3");
                        t && (t.volume = 1 - e);
                        let i = Tt.GetEffect(et.EffectExplode);
                        I.MyScene3D.addChild(i.owner),
                        i.mySprite3D.transform.position = this._mySprite3D.transform.position,
                        i.Play()
                    }
                }
            }
        }
        var ti = Laya.Vector3
          , ii = Laya.Sprite3D;
        class si extends $t {
            constructor(e) {
                super(e),
                this._nextPathPoint = null,
                this._id = Xt.Global
            }
            Enter() {}
            Execute(e) {
                this.recordPathPoint(),
                this.checkMove(e)
            }
            Exit() {}
            recordPathPoint() {
                this._nextPathPoint = I.MySceneData.paths[this.vehicle.nextPathPointIndex],
                ti.distanceSquared(this.vehicle.mySprite3D.transform.position, this._nextPathPoint) <= 100 && (this.vehicle.previousPathPointIndex = this.vehicle.nextPathPointIndex,
                this.vehicle.nextPathPointIndex = this.vehicle.nextPathPointIndex + 1,
                this.vehicle.nextPathPointIndex >= I.MySceneData.paths.length && (this.vehicle.nextPathPointIndex = I.MySceneData.paths.length - 1))
            }
            checkMove(e) {
                if (this.vehicle.IsVehicleNormal())
                    if (this.vehicle.checkMoveTimer >= 3e3)
                        if (this.vehicle.checkMoveTimer = 0,
                        ti.distanceSquared(this.vehicle.checkMovePosition, this.vehicle.mySprite3D.transform.position) < 4) {
                            if (I.MyScene3D) {
                                let e = ii.instantiate(k.GetInstance().hammer, I.MyScene3D);
                                e.transform.position = this.vehicle.mySprite3D.transform.position,
                                e.addComponent(ei).target = this.vehicle
                            }
                        } else
                            this.vehicle.mySprite3D.transform.position.cloneTo(this.vehicle.checkMovePosition);
                    else
                        this.vehicle.checkMoveTimer += e
            }
        }
        var ai = Laya.Vector3;
        class ni extends $t {
            constructor(e) {
                super(e),
                this._id = Xt.Ready
            }
            Enter() {}
            Execute(e) {
                Ot.IsGameStart && this.vehicle.PerformTransition(zt.GameStart)
            }
            Exit() {
                if (this.vehicle.accelerationInStart) {
                    let e = new ai;
                    this.vehicle.mySprite3D.transform.getForward(e),
                    ai.scale(e, 10, e),
                    this.vehicle.Acceleration(e)
                }
            }
        }
        var ri = Laya.Vector3;
        class oi extends $t {
            constructor(e) {
                super(e),
                this._currentForwardForce = 0,
                this._currentMaxForwardVelocity = 0,
                this._currentForwardVelocity = 0,
                this._currentForward = new ri,
                this._currentLinearVelocity = new ri,
                this._currentAngularVelocity = new ri,
                this._currentPosition = new ri,
                this._targetPosition = new ri,
                this._targetDirection = new ri,
                this._currentAngle = 0,
                this._targetAngle = 0,
                this._angleDifference = 0,
                this._absAngleDifference = 0,
                this._torqueIntensity = 0,
                this._applyForwardForce = new ri,
                this._applyTorqueForce = new ri,
                this._enabledSoundBrake = !0,
                this._soundBrake = null,
                this._id = Xt.Drive,
                this._enabledSoundBrake = !a.IsQQMiniGame()
            }
            Enter() {}
            Execute(e) {
                this.vehicle.isArrive ? this.vehicle.PerformTransition(zt.ArriveEnd) : this.vehicle.isDestroyed ? this.vehicle.PerformTransition(zt.Destroyed) : this.vehicle.isOffGround ? this.vehicle.PerformTransition(zt.OffGround) : this.controlVehicle(e)
            }
            Exit() {
                this.stopSoundBrake()
            }
            playSoundBrake() {
                !this._enabledSoundBrake || this._soundBrake && !this._soundBrake.isStopped || (this._soundBrake = m.WQSoundManager.PlaySound("sounds/brake.mp3"))
            }
            stopSoundBrake() {
                this._soundBrake && (this._soundBrake.stop(),
                this._soundBrake = null)
            }
            controlVehicle(e) {
                if (this.vehicle.WakeUpRigidbody3D(),
                this.vehicle.mySprite3D.transform.getForward(this._currentForward),
                this.vehicle.myRigidbody3D.linearVelocity.cloneTo(this._currentLinearVelocity),
                this.vehicle.myRigidbody3D.angularVelocity.cloneTo(this._currentAngularVelocity),
                this.vehicle.driver === P.AI)
                    this.vehicle.nextPathPointIndex !== I.MySceneData.paths.length - 1 && (this.vehicle.mySprite3D.transform.position.cloneTo(this._currentPosition),
                    this._currentPosition.y = 0,
                    I.MySceneData.paths[this.vehicle.nextPathPointIndex].cloneTo(this._targetPosition),
                    this._targetPosition.y = 0,
                    ri.subtract(this._targetPosition, this._currentPosition, this._targetDirection),
                    this._currentAngle = Math.atan2(this._currentForward.x, this._currentForward.z) * i.R2D,
                    this._targetAngle = Math.atan2(this._targetDirection.x, this._targetDirection.z) * i.R2D,
                    this._angleDifference = this._currentAngle - this._targetAngle,
                    this._angleDifference < -180 && (this._angleDifference = 360 + this._angleDifference),
                    this._angleDifference > 180 && (this._angleDifference = this._angleDifference - 360),
                    this._absAngleDifference = Math.abs(this._angleDifference),
                    this._absAngleDifference > 1 ? (this._torqueIntensity = this._absAngleDifference / 10,
                    this._torqueIntensity = this._angleDifference / this._absAngleDifference * this._torqueIntensity,
                    this.vehicle.isEnabledAIReverse && this.vehicle.IsReverse() && (this._torqueIntensity = -this._torqueIntensity),
                    this.rotate(this._torqueIntensity)) : this.forward());
                else {
                    if (this.vehicle.input.drive) {
                        let e = this.vehicle.input.horizontal;
                        this.vehicle.IsReverse() && (e = -e),
                        this.rotate(e),
                        this.playSoundBrake()
                    } else
                        this.stopSoundBrake();
                    this.forward()
                }
            }
            forward() {
                this.vehicle.IsAcceleration() ? (this._currentForwardForce = this.vehicle.accelerationForwardForce,
                this._currentMaxForwardVelocity = this.vehicle.accelerationMaxForwardVelocity) : (this._currentForwardForce = this.vehicle.forwardForce,
                this._currentMaxForwardVelocity = this.vehicle.maxForwardVelocity),
                this._currentForwardVelocity = ri.dot(this._currentForward, this._currentLinearVelocity),
                this._currentForwardVelocity < this._currentMaxForwardVelocity && (ri.scale(this._currentForward, this._currentForwardForce, this._applyForwardForce),
                this.vehicle.myRigidbody3D.applyForce(this._applyForwardForce))
            }
            rotate(e) {
                if (e > 0 && this._currentAngularVelocity.y < this.vehicle.maxTorqueVelocity || e < 0 && this._currentAngularVelocity.y > -this.vehicle.maxTorqueVelocity) {
                    let t = (1 - ri.distanceSquared(this._currentLinearVelocity, i.VEC3_ZERO) / 100) * this.vehicle.torqueAddForce;
                    t < 0 && (t = 0),
                    this._applyTorqueForce.y = (this.vehicle.torqueForce + t) * e,
                    this.vehicle.myRigidbody3D.applyTorque(this._applyTorqueForce)
                }
            }
        }
        var li = Laya.Vector3;
        class hi extends $t {
            constructor(e) {
                super(e),
                this._checkDropTimer = 0,
                this._castFrom = new li,
                this._castTo = new li,
                this._id = Xt.OffGround
            }
            Enter() {
                this._checkDropTimer = 0
            }
            Execute(e) {
                this.vehicle.isArrive ? this.vehicle.PerformTransition(zt.ArriveEnd) : this.vehicle.isDestroyed ? this.vehicle.PerformTransition(zt.Destroyed) : this.vehicle.isOffGround ? (this.vehicle.WakeUpRigidbody3D(),
                this.checkDrop(e)) : this.vehicle.PerformTransition(zt.OnGround)
            }
            Exit() {}
            checkDrop(e) {
                if (this._checkDropTimer > 1e3) {
                    if (this._checkDropTimer = 0,
                    this.vehicle.myRigidbody3D.linearVelocity.y > -9.81)
                        return;
                    this.vehicle.mySprite3D.transform.position.cloneTo(this._castFrom),
                    this._castFrom.cloneTo(this._castTo),
                    this._castTo.y -= 100,
                    I.MyScene3D.physicsSimulation.raycastFromTo(this._castFrom, this._castTo, null, Jt.ALL, Jt.TEST_DROP) || (this.vehicle.isDestroyed = !0)
                } else
                    this._checkDropTimer += e
            }
        }
        var ci, di, ui = Laya.Vector3;
        class pi extends $t {
            constructor(e) {
                super(e),
                this._resetTimer = 0,
                this._resetPosition = new ui,
                this._resetRotationEuler = new ui,
                this._tempDirection = new ui,
                this._id = Xt.Reset
            }
            Enter() {
                this.vehicle.ClearAdditionalState(),
                this.vehicle.myRigidbody3D.enabled = !1,
                this.vehicle.myModel.active = !1,
                this.vehicle.myTrail.active = !1,
                this._resetTimer = 0
            }
            Execute(e) {
                this._resetTimer >= 1e3 ? this.vehicle.PerformTransition(zt.ResetComplete) : this._resetTimer += e
            }
            Exit() {
                this.resetVehicle()
            }
            resetVehicle() {
                if (this.vehicle.myRigidbody3D.enabled = !0,
                this.vehicle.myModel.active = !0,
                this.vehicle.myTrail.active = !0,
                this.vehicle.isDestroyed = !1,
                I.MySceneData.paths[this.vehicle.previousPathPointIndex].cloneTo(this._resetPosition),
                this.vehicle.previousPathPointIndex !== this.vehicle.nextPathPointIndex && (ui.subtract(I.MySceneData.paths[this.vehicle.nextPathPointIndex], this._resetPosition, this._tempDirection),
                this._resetRotationEuler.y = Math.atan2(this._tempDirection.x, this._tempDirection.z) * i.R2D + 180),
                this._resetPosition.y += 2,
                this.vehicle.SetPosition(this._resetPosition, this._resetRotationEuler),
                this.vehicle.checkMoveTimer = 0,
                this._resetPosition.cloneTo(this.vehicle.checkMovePosition),
                I.MyScene3D) {
                    let e = I.CalculatePercentageOfDistanceFromPlayer(this._resetPosition, I.SOUND_MAX_DISTANCE);
                    if (e < 1) {
                        let t = m.WQSoundManager.PlaySound("sounds/reset.mp3");
                        t && (t.volume = 1 - e);
                        let i = Tt.GetEffect(et.EffectReset);
                        I.MyScene3D.addChild(i.owner),
                        i.mySprite3D.transform.position = this._resetPosition,
                        i.Play()
                    }
                }
            }
        }
        class mi extends $t {
            constructor(e) {
                super(e),
                this._id = Xt.Arrive
            }
            Enter() {}
            Execute(e) {}
            Exit() {}
        }
        !function(e) {
            e[e.NullStateID = 0] = "NullStateID",
            e[e.None = 1] = "None",
            e[e.Acceleration = 2] = "Acceleration",
            e[e.Reverse = 3] = "Reverse"
        }(ci || (ci = {})),
        function(e) {
            e[e.NullTransitionID = 0] = "NullTransitionID",
            e[e.TimeOut = 1] = "TimeOut"
        }(di || (di = {}));
        class gi extends dt {
            constructor(e) {
                super(),
                this.vehicle = null,
                this.vehicle = e
            }
        }
        class _i extends gi {
            constructor(e) {
                super(e),
                this._id = ci.None
            }
            Enter() {}
            Execute(e) {}
            Exit() {}
        }
        class Si extends gi {
            constructor(e) {
                super(e),
                this._durationTimer = 0,
                this._effectAcceleration = null,
                this._id = ci.Acceleration
            }
            Enter() {
                if (this._durationTimer = 0,
                I.MyScene3D && !this._effectAcceleration) {
                    let e = I.CalculatePercentageOfDistanceFromPlayer(this.vehicle.mySprite3D.transform.position, I.SOUND_MAX_DISTANCE);
                    if (e < 1) {
                        let t = m.WQSoundManager.PlaySound("sounds/acceleration.mp3");
                        t && (t.volume = 1 - e)
                    }
                    this._effectAcceleration = Tt.GetEffect(et.EffectAcceleration),
                    I.MyScene3D.addChild(this._effectAcceleration.owner),
                    this.updateEffectAcceleration()
                }
                this.vehicle.SetCameraFarPosition()
            }
            Execute(e) {
                this._durationTimer >= 3e3 ? this.vehicle.PerformAdditionalTransition(di.TimeOut) : (this._durationTimer += e,
                this._effectAcceleration && this.updateEffectAcceleration())
            }
            Exit() {
                this._effectAcceleration && (this._effectAcceleration.ReturnEffect(),
                this._effectAcceleration = null),
                this.vehicle.SetCameraNearPosition()
            }
            updateEffectAcceleration() {
                this._effectAcceleration.mySprite3D.transform.position = this.vehicle.myCenter.transform.position,
                this._effectAcceleration.mySprite3D.transform.rotation = this.vehicle.myCenter.transform.rotation
            }
        }
        class yi extends gi {
            constructor(e) {
                super(e),
                this._durationTimer = 0,
                this._effectReverse = null,
                this._id = ci.Reverse
            }
            Enter() {
                this._durationTimer = 0,
                I.MyScene3D && !this._effectReverse && (this._effectReverse = Tt.GetEffect(et.EffectReverse),
                I.MyScene3D.addChild(this._effectReverse.owner),
                this.updateEffectReverse())
            }
            Execute(e) {
                this._durationTimer >= 6e3 ? this.vehicle.PerformAdditionalTransition(di.TimeOut) : (this._durationTimer += e,
                this._effectReverse && this.updateEffectReverse())
            }
            Exit() {
                this._effectReverse && (this._effectReverse.ReturnEffect(),
                this._effectReverse = null)
            }
            updateEffectReverse() {
                this._effectReverse.mySprite3D.transform.position = this.vehicle.myCenter.transform.position,
                this._effectReverse.mySprite3D.transform.rotation = this.vehicle.myCenter.transform.rotation
            }
        }
        var fi = Laya.Vector3
          , Pi = Laya.Animator
          , Ci = Laya.Rigidbody3D;
        class Ii extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.mySprite3D = null,
                this.myAnimator = null,
                this.myRigidbody3D = null,
                this._myModel = null,
                this._myTrail = null,
                this._myCenter = null,
                this._fsmSystem = new ut,
                this._globalState = null,
                this._readyState = null,
                this._driveState = null,
                this._offGroundState = null,
                this._resetState = null,
                this._arriveState = null,
                this._additionalFSMSystem = new ut,
                this._noneAdditionalState = null,
                this._accelerationAdditionalState = null,
                this._reverseAdditionalState = null,
                this.data = null,
                this.driver = P.P1,
                this.input = new Zt,
                this.camera = null,
                this.accelerationInStart = !1,
                this.isArrive = !1,
                this.isDestroyed = !1,
                this.isOffGround = !1,
                this.checkMoveTimer = 0,
                this.checkMovePosition = new fi,
                this.previousPathPointIndex = 0,
                this.nextPathPointIndex = 0,
                this.driveDistance = 0,
                this.forwardForce = 20,
                this.maxForwardVelocity = 10,
                this.torqueForce = 1,
                this.torqueAddForce = 10,
                this.maxTorqueVelocity = 1,
                this.accelerationForwardForce = 20,
                this.accelerationMaxForwardVelocity = 20,
                this.isEnabledAIReverse = !0
            }
            get myModel() {
                return this._myModel || (this._myModel = this.owner.getChildByName("model")),
                this._myModel
            }
            get myTrail() {
                return this._myTrail || (this._myTrail = this.owner.getChildByName("trail")),
                this._myTrail
            }
            get myCenter() {
                return this._myCenter || (this._myCenter = this.owner.getChildByName("center")),
                this._myCenter
            }
            onAwake() {
                this.mySprite3D = this.owner,
                this.myAnimator = this.owner.getComponent(Pi),
                this.myRigidbody3D = this.owner.getComponent(Ci),
                this.myRigidbody3D.collisionGroup = Jt.VEHICLE,
                this.myRigidbody3D.restitution = .2,
                this.myRigidbody3D.angularDamping = .8,
                this.myRigidbody3D.linearDamping = .2,
                this._globalState = new si(this),
                this._readyState = new ni(this),
                this._readyState.AddTransition(zt.GameStart, Xt.Drive),
                this._driveState = new oi(this),
                this._driveState.AddTransition(zt.ArriveEnd, Xt.Arrive),
                this._driveState.AddTransition(zt.Destroyed, Xt.Reset),
                this._driveState.AddTransition(zt.OffGround, Xt.OffGround),
                this._offGroundState = new hi(this),
                this._offGroundState.AddTransition(zt.ArriveEnd, Xt.Arrive),
                this._offGroundState.AddTransition(zt.Destroyed, Xt.Reset),
                this._offGroundState.AddTransition(zt.OnGround, Xt.Drive),
                this._resetState = new pi(this),
                this._resetState.AddTransition(zt.ResetComplete, Xt.Drive),
                this._arriveState = new mi(this),
                this._fsmSystem.AddState(this._readyState),
                this._fsmSystem.AddState(this._driveState),
                this._fsmSystem.AddState(this._offGroundState),
                this._fsmSystem.AddState(this._resetState),
                this._fsmSystem.AddState(this._arriveState),
                this._fsmSystem.globalState = this._globalState,
                this._noneAdditionalState = new _i(this),
                this._accelerationAdditionalState = new Si(this),
                this._accelerationAdditionalState.AddTransition(di.TimeOut, ci.None),
                this._reverseAdditionalState = new yi(this),
                this._reverseAdditionalState.AddTransition(di.TimeOut, ci.None),
                this._additionalFSMSystem.AddState(this._noneAdditionalState),
                this._additionalFSMSystem.AddState(this._accelerationAdditionalState),
                this._additionalFSMSystem.AddState(this._reverseAdditionalState),
                this._additionalFSMSystem.ChangeCurrentState(this._noneAdditionalState)
            }
            onUpdate() {
                Ot.IsPauseUpdate() || (this._fsmSystem.Update(Laya.timer.delta),
                this._additionalFSMSystem.Update(Laya.timer.delta))
            }
            onDestroy() {}
            onCollisionEnter(e) {
                let t = e.other.owner.getComponent(Ii);
                t && t != this && e.contacts.length > 0 && Rt.AddVehicleCollisionInfo(this, t, e.contacts[0].positionOnA)
            }
            configureAI(e, t) {
                if (e === P.AI)
                    switch (t) {
                    case K.Easy:
                        this.myRigidbody3D.mass = .4,
                        this.forwardForce = 20,
                        this.maxForwardVelocity = 4,
                        this.torqueForce = 1,
                        this.torqueAddForce = 10,
                        this.maxTorqueVelocity = 1,
                        this.isEnabledAIReverse = !0;
                        break;
                    case K.Normal:
                        this.myRigidbody3D.mass = .6,
                        this.forwardForce = 20,
                        this.maxForwardVelocity = 6,
                        this.torqueForce = 1,
                        this.torqueAddForce = 10,
                        this.maxTorqueVelocity = 1,
                        this.isEnabledAIReverse = !0;
                        break;
                    case K.Hard:
                        this.myRigidbody3D.mass = 1,
                        this.forwardForce = 20,
                        this.maxForwardVelocity = 10,
                        this.torqueForce = 1,
                        this.torqueAddForce = 10,
                        this.maxTorqueVelocity = 1,
                        this.isEnabledAIReverse = !0;
                        break;
                    case K.Hardest:
                        this.myRigidbody3D.mass = 1,
                        this.forwardForce = 20,
                        this.maxForwardVelocity = 12,
                        this.torqueForce = 1,
                        this.torqueAddForce = 10,
                        this.maxTorqueVelocity = 1,
                        this.isEnabledAIReverse = !1;
                        break;
                    case K.God:
                        this.myRigidbody3D.mass = 1,
                        this.forwardForce = 20,
                        this.maxForwardVelocity = 20,
                        this.torqueForce = 1,
                        this.torqueAddForce = 10,
                        this.maxTorqueVelocity = 1,
                        this.isEnabledAIReverse = !1
                    }
            }
            GetCurrentStateID() {
                return this._fsmSystem.currentState ? this._fsmSystem.currentState.id : 0
            }
            PerformTransition(e) {
                this._fsmSystem.PerformTransition(e)
            }
            GetCurrentAdditionalStateID() {
                return this._additionalFSMSystem.currentState ? this._additionalFSMSystem.currentState.id : 0
            }
            PerformAdditionalTransition(e) {
                this._additionalFSMSystem.PerformTransition(e)
            }
            GetNickname() {
                switch (this.driver) {
                case P.P1:
                    return "Player1 ";
                case P.P2:
                    return "Player2 ";
                case P.AI:
                    return "Computer ";
                default:
                    return "Unkonw "
                }
            }
            IsVehicleNormal() {
                let e = this.GetCurrentStateID();
                return e === Xt.Drive || e === Xt.OffGround
            }
            IsAcceleration() {
                return this.GetCurrentAdditionalStateID() === ci.Acceleration
            }
            IsReverse() {
                return this.GetCurrentAdditionalStateID() === ci.Reverse
            }
            Acceleration(e) {
                this._additionalFSMSystem.ChangeCurrentState(this._accelerationAdditionalState),
                this.WakeUpRigidbody3D(),
                this.myRigidbody3D.applyImpulse(e)
            }
            Reverse() {
                this._additionalFSMSystem.ChangeCurrentState(this._reverseAdditionalState)
            }
            ClearAdditionalState() {
                this._additionalFSMSystem.ChangeCurrentState(this._noneAdditionalState)
            }
            WakeUpRigidbody3D() {
                this.myRigidbody3D.isSleeping && this.myRigidbody3D.wakeUp()
            }
            SetPosition(e, t) {
                this.myRigidbody3D.clearForces(),
                this.mySprite3D.transform.position = e,
                this.mySprite3D.transform.rotationEuler = t
            }
            ChangePosition(e) {
                let t = new fi;
                if (e.mySprite3D.transform.position.cloneTo(t),
                t.y += 2,
                this.myRigidbody3D.clearForces(),
                this.mySprite3D.transform.position = t,
                this.mySprite3D.transform.rotation = e.mySprite3D.transform.rotation,
                this.previousPathPointIndex = e.previousPathPointIndex,
                this.nextPathPointIndex = e.nextPathPointIndex,
                I.MyScene3D) {
                    let e = I.CalculatePercentageOfDistanceFromPlayer(t, I.SOUND_MAX_DISTANCE);
                    if (e < 1) {
                        let i = m.WQSoundManager.PlaySound("sounds/reset.mp3");
                        i && (i.volume = 1 - e);
                        let s = Tt.GetEffect(et.EffectReset);
                        I.MyScene3D.addChild(s.owner),
                        s.mySprite3D.transform.position = t,
                        s.Play()
                    }
                }
            }
            CalculateDriveDistance() {
                if (this.nextPathPointIndex === I.MySceneData.paths.length - 1)
                    this.driveDistance = I.TotalDistance;
                else {
                    this.driveDistance = 0;
                    for (let e = 0; e < this.previousPathPointIndex; e++)
                        this.driveDistance += I.DistanceBetweenPathPoints[e];
                    if (this.previousPathPointIndex < this.nextPathPointIndex) {
                        let e = I.MySceneData.paths[this.previousPathPointIndex]
                          , t = I.MySceneData.paths[this.nextPathPointIndex]
                          , i = new fi;
                        fi.subtract(t, e, i),
                        fi.normalize(i, i);
                        let s = new fi;
                        fi.subtract(this.mySprite3D.transform.position, e, s);
                        let a = fi.dot(s, i);
                        this.driveDistance += a
                    }
                }
            }
            Shake() {
                this.camera && this.camera.Shake()
            }
            SetCameraNearPosition() {
                this.camera && this.camera.SetNearPosition()
            }
            SetCameraFarPosition() {
                this.camera && this.camera.SetFarPosition()
            }
            EventHandler(e, t) {
                switch (e) {
                case Yt.TriggerEndPoint:
                    this.isArrive = !0;
                    break;
                case Yt.Acceleration:
                    this.IsVehicleNormal() && this.Acceleration(t);
                    break;
                case Yt.Blast:
                    this.IsVehicleNormal() && (this.myRigidbody3D.clearForces(),
                    this.myRigidbody3D.applyImpulse(t[0]),
                    this.myRigidbody3D.applyTorqueImpulse(t[1]),
                    this.Shake());
                    break;
                case Yt.Destroy:
                    this.IsVehicleNormal() && (this.isDestroyed = !0,
                    this.Shake());
                    break;
                case Yt.Reverse:
                    this.IsVehicleNormal() && this.Reverse();
                    break;
                case Yt.ChangePosition:
                    this.IsVehicleNormal() && t && this.ChangePosition(t)
                }
            }
            Init(e, t) {
                this.driver = e,
                this.data = t,
                this.configureAI(e, j.GameAILevel),
                this._fsmSystem.ChangeCurrentState(this._readyState)
            }
        }
        var wi = Laya.PhysicsCollider;
        class bi extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.myPhysicsCollider = null
            }
            onAwake() {
                this.myPhysicsCollider = this.owner.getComponent(wi),
                this.myPhysicsCollider.canCollideWith = Jt.VEHICLE
            }
            onTriggerEnter(e) {
                let t = e.owner.getComponent(Ii);
                t && (t.EventHandler(Yt.TriggerEndPoint),
                Ot.GameOver(t))
            }
        }
        var Di, vi, Mi = Laya.Vector3, Ti = Laya.PhysicsCollider;
        class Li extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.myPhysicsCollider = null,
                this._impulse = new Mi
            }
            onAwake() {
                this.myPhysicsCollider = this.owner.getComponent(Ti),
                this.myPhysicsCollider.canCollideWith = Jt.VEHICLE
            }
            onTriggerEnter(e) {
                let t = e.owner.getComponent(Ii);
                t && t.EventHandler(Yt.Acceleration, this._impulse)
            }
            Init(e) {
                this.owner.transform.getForward(this._impulse),
                Mi.scale(this._impulse, e, this._impulse)
            }
        }
        !function(e) {
            e[e.NullStateID = 0] = "NullStateID",
            e[e.Enable = 1] = "Enable",
            e[e.Reset = 2] = "Reset"
        }(Di || (Di = {})),
        function(e) {
            e[e.NullTransitionID = 0] = "NullTransitionID",
            e[e.TriggerBomb = 1] = "TriggerBomb",
            e[e.ResetComplete = 2] = "ResetComplete"
        }(vi || (vi = {}));
        class Gi extends dt {
            constructor(e) {
                super(),
                this.bomb = null,
                this.bomb = e
            }
        }
        class Vi extends Gi {
            constructor(e) {
                super(e),
                this._id = Di.Enable
            }
            Enter() {
                this.bomb.myModel.active = !0,
                this.bomb.isTriggerBomb = !1
            }
            Execute(e) {
                this.bomb.isTriggerBomb && this.bomb.PerformTransition(vi.TriggerBomb)
            }
            Exit() {}
        }
        class Ai extends Gi {
            constructor(e) {
                super(e),
                this._resetTimer = 0,
                this._id = Di.Reset
            }
            Enter() {
                this.bomb.myModel.active = !1,
                this._resetTimer = 0
            }
            Execute(e) {
                this._resetTimer >= 8e3 ? this.bomb.PerformTransition(vi.ResetComplete) : this._resetTimer += e
            }
            Exit() {}
        }
        var Ei = Laya.Vector3
          , Ri = Laya.PhysicsCollider;
        class ki extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.mySprite3D = null,
                this.myPhysicsCollider = null,
                this.myModel = null,
                this._fsmSystem = new ut,
                this._enableState = null,
                this._resetState = null,
                this.isTriggerBomb = !1,
                this._impulses = []
            }
            onAwake() {
                this.mySprite3D = this.owner,
                this.myPhysicsCollider = this.owner.getComponent(Ri),
                this.myPhysicsCollider.canCollideWith = Jt.VEHICLE,
                this.myModel = this.owner.getChildByName("model"),
                this._enableState = new Vi(this),
                this._enableState.AddTransition(vi.TriggerBomb, Di.Reset),
                this._resetState = new Ai(this),
                this._resetState.AddTransition(vi.ResetComplete, Di.Enable),
                this._fsmSystem.AddState(this._enableState),
                this._fsmSystem.AddState(this._resetState),
                this._fsmSystem.ChangeCurrentState(this._enableState);
                for (let e = 0; e < 2; e++)
                    this._impulses.push(new Ei)
            }
            onUpdate() {
                Ot.IsPauseUpdate() || this._fsmSystem.Update(Laya.timer.delta)
            }
            onTriggerEnter(e) {
                if (!this.isTriggerBomb) {
                    let t = e.owner.getComponent(Ii);
                    if (t && (this.isTriggerBomb = !0,
                    this._impulses[0].setValue(0, i.GetRandomRangeFloat(10, 20), 0),
                    this._impulses[1].setValue(i.GetRandomRangeFloat(-1, 1), i.GetRandomRangeFloat(-1, 1), i.GetRandomRangeFloat(-1, 1)),
                    t.EventHandler(Yt.Blast, this._impulses),
                    I.MyScene3D)) {
                        let e = I.CalculatePercentageOfDistanceFromPlayer(this.mySprite3D.transform.position, I.SOUND_MAX_DISTANCE);
                        if (e < 1) {
                            let t = m.WQSoundManager.PlaySound("sounds/explode.mp3");
                            t && (t.volume = 1 - e);
                            let i = Tt.GetEffect(et.EffectExplode);
                            I.MyScene3D.addChild(i.owner),
                            i.mySprite3D.transform.position = this.mySprite3D.transform.position,
                            i.Play()
                        }
                    }
                }
            }
            GetCurrentStateID() {
                return this._fsmSystem.currentState ? this._fsmSystem.currentState.id : 0
            }
            PerformTransition(e) {
                this._fsmSystem.PerformTransition(e)
            }
        }
        var Oi, xi, Ui = Laya.Vector3, Bi = Laya.Rigidbody3D;
        class Ni extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.mySprite3D = null,
                this.myRigidbody3D = null,
                this.master = null,
                this.target = null,
                this._lifeTimer = 0,
                this._forward = new Ui,
                this._tempPosition = new Ui
            }
            onAwake() {
                this.mySprite3D = this.owner,
                this.myRigidbody3D = this.owner.getComponent(Bi),
                this.myRigidbody3D.canCollideWith = Jt.VEHICLE,
                this._lifeTimer = 0
            }
            onUpdate() {
                Ot.IsPauseUpdate() || (this._lifeTimer >= 3e4 ? this.owner.destroy() : (this._lifeTimer += Laya.timer.delta,
                this.rotate(Laya.timer.delta),
                this.forward(Laya.timer.delta)))
            }
            onDestroy() {
                this.master = this.target = null
            }
            onTriggerEnter(e) {
                if (this.master) {
                    let t = e.owner.getComponent(Ii);
                    if (t && t !== this.master && (this.owner.destroy(),
                    t.EventHandler(Yt.Destroy),
                    I.MyScene3D)) {
                        let e = I.CalculatePercentageOfDistanceFromPlayer(t.mySprite3D.transform.position, I.SOUND_MAX_DISTANCE);
                        if (e < 1) {
                            let i = m.WQSoundManager.PlaySound("sounds/explode.mp3");
                            i && (i.volume = 1 - e);
                            let s = Tt.GetEffect(et.EffectExplode);
                            I.MyScene3D.addChild(s.owner),
                            s.mySprite3D.transform.position = t.mySprite3D.transform.position,
                            s.Play()
                        }
                    }
                }
            }
            rotate(e) {
                this.target && this.target.IsVehicleNormal() && this.mySprite3D.transform.lookAt(this.target.mySprite3D.transform.position, i.VEC3_UP)
            }
            forward(e) {
                this.mySprite3D.transform.getForward(this._forward),
                Ui.scale(this._forward, .02 * e, this._forward),
                Ui.add(this.mySprite3D.transform.position, this._forward, this._tempPosition),
                this.mySprite3D.transform.position = this._tempPosition
            }
            Init(e, t) {
                this.master = e,
                this.target = t,
                this.mySprite3D.transform.position = this.master.myCenter.transform.position,
                this.mySprite3D.transform.rotation = this.master.myCenter.transform.rotation
            }
        }
        !function(e) {
            e[e.NullStateID = 0] = "NullStateID",
            e[e.Enable = 1] = "Enable",
            e[e.Reset = 2] = "Reset"
        }(Oi || (Oi = {})),
        function(e) {
            e[e.NullTransitionID = 0] = "NullTransitionID",
            e[e.Used = 1] = "Used",
            e[e.ResetComplete = 2] = "ResetComplete"
        }(xi || (xi = {}));
        class Hi extends dt {
            constructor(e) {
                super(),
                this.itemBox = null,
                this.itemBox = e
            }
        }
        class Fi extends Hi {
            constructor(e) {
                super(e),
                this._id = Oi.Enable
            }
            Enter() {
                this.itemBox.myModel.active = !0,
                this.itemBox.isUsed = !1
            }
            Execute(e) {
                this.itemBox.isUsed && this.itemBox.PerformTransition(xi.Used)
            }
            Exit() {}
        }
        class Wi extends Hi {
            constructor(e) {
                super(e),
                this._resetTimer = 0,
                this._id = Oi.Reset
            }
            Enter() {
                this.itemBox.myModel.active = !1,
                this._resetTimer = 0
            }
            Execute(e) {
                this._resetTimer >= 4e3 ? this.itemBox.PerformTransition(xi.ResetComplete) : this._resetTimer += e
            }
            Exit() {}
        }
        var Qi = Laya.Sprite3D
          , qi = Laya.PhysicsCollider;
        class Ki extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.myPhysicsCollider = null,
                this.myModel = null,
                this._fsmSystem = new ut,
                this._enableState = null,
                this._resetState = null,
                this.isUsed = !1
            }
            onAwake() {
                this.myPhysicsCollider = this.owner.getComponent(qi),
                this.myPhysicsCollider.canCollideWith = Jt.VEHICLE,
                this.myModel = this.owner.getChildByName("model"),
                this._enableState = new Fi(this),
                this._enableState.AddTransition(xi.Used, Oi.Reset),
                this._resetState = new Wi(this),
                this._resetState.AddTransition(xi.ResetComplete, Oi.Enable),
                this._fsmSystem.AddState(this._enableState),
                this._fsmSystem.AddState(this._resetState),
                this._fsmSystem.ChangeCurrentState(this._enableState)
            }
            onUpdate() {
                Ot.IsPauseUpdate() || this._fsmSystem.Update(Laya.timer.delta)
            }
            onTriggerEnter(e) {
                if (!this.isUsed) {
                    let t = e.owner.getComponent(Ii);
                    t && (this.isUsed = !0,
                    this.triggerUse(t))
                }
            }
            triggerUse(e) {
                let t = Math.random();
                t < .2 ? this.otherVehiclesReverse(e) : t < .5 ? this.changePosition(e) : this.launchMissile(e)
            }
            launchMissile(e) {
                if (m.WQSoundManager.PlaySound("sounds/launchmissile.mp3"),
                I.MyScene3D) {
                    let t = Qi.instantiate(k.GetInstance().missile, I.MyScene3D).addComponent(Ni)
                      , i = null;
                    I.SortVehiclesByDriveDistance();
                    let s = I.GetVehicleIndex(e);
                    s > 0 && (i = I.Vehicles[s - 1]),
                    t.Init(e, i)
                }
                e.driver === P.P1 ? Ot.OnP1PlayTips && Ot.OnP1PlayTips.Invoke(Z.LAUNCH_MISSILE) : e.driver === P.P2 && Ot.OnP2PlayTips && Ot.OnP2PlayTips.Invoke(Z.LAUNCH_MISSILE)
            }
            otherVehiclesReverse(e) {
                m.WQSoundManager.PlaySound("sounds/reverse.mp3");
                let t = null;
                for (let i = 0; i < I.Vehicles.length; i++)
                    (t = I.Vehicles[i]) !== e && t.IsVehicleNormal() && t.EventHandler(Yt.Reverse);
                Ot.OnP1PlayTips && Ot.OnP1PlayTips.Invoke(Z.DIRECTION_REVERSE),
                Ot.OnP2PlayTips && Ot.OnP2PlayTips.Invoke(Z.DIRECTION_REVERSE)
            }
            changePosition(e) {
                let t = [];
                for (let i = 0; i < I.Vehicles.length; i++)
                    I.Vehicles[i] !== e && t.push(I.Vehicles[i]);
                t.length > 0 && (e.EventHandler(Yt.ChangePosition, t[i.GetRandomRangeInt(0, t.length)]),
                e.driver === P.P1 ? Ot.OnP1PlayTips && Ot.OnP1PlayTips.Invoke(Z.CHANGE_POSITION) : e.driver === P.P2 && Ot.OnP2PlayTips && Ot.OnP2PlayTips.Invoke(Z.CHANGE_POSITION))
            }
            GetCurrentStateID() {
                return this._fsmSystem.currentState ? this._fsmSystem.currentState.id : 0
            }
            PerformTransition(e) {
                this._fsmSystem.PerformTransition(e)
            }
        }
        class Yi extends Laya.Script3D {
            onUpdate() {
                this.owner.transform.position.y < -1e3 && this.owner.destroy()
            }
        }
        class Xi {
            static Assemble(e, t) {
                let i = t.nodeComponentDatas
                  , s = null
                  , a = null;
                for (let t = 0; t < i.length; t++)
                    s = i[t],
                    (a = e.getChildByName(s.nodeName)) && Xi.AssembleNodeComponent(a, s)
            }
            static AssembleNodeComponent(e, t) {
                switch (t.componentName) {
                case "EndPoint":
                    e.addComponent(bi);
                    break;
                case "Accelerator":
                    e.addComponent(Li).Init(parseFloat(t.data));
                    break;
                case "Bomb":
                    e.addComponent(ki);
                    break;
                case "ItemBox":
                    e.addComponent(Ki);
                    break;
                case "Obstacle":
                    e.addComponent(Yi)
                }
            }
        }
        class zi {
            constructor(e) {
                this.owner = null,
                this.owner = e
            }
        }
        var ji = Laya.Vector3;
        class Ji extends zi {
            constructor() {
                super(...arguments),
                this.isLocal = !1,
                this.targetPosition = null,
                this.moveSpeed = 0,
                this._moveDistance = 0,
                this._directionVec = new ji,
                this._moveDistanceVec = new ji,
                this._positionVec = new ji
            }
            Update(e) {
                return !!this.targetPosition && (this.getOwnerPosition().cloneTo(this._positionVec),
                this._moveDistance = this.moveSpeed * e,
                ji.distance(this.targetPosition, this._positionVec) <= this._moveDistance ? (this.setOwnerPosition(this.targetPosition),
                !0) : (ji.subtract(this.targetPosition, this._positionVec, this._directionVec),
                ji.normalize(this._directionVec, this._directionVec),
                ji.scale(this._directionVec, this._moveDistance, this._moveDistanceVec),
                ji.add(this._positionVec, this._moveDistanceVec, this._positionVec),
                this.setOwnerPosition(this._positionVec),
                !1))
            }
            getOwnerPosition() {
                return this.isLocal ? this.owner.transform.localPosition : this.owner.transform.position
            }
            setOwnerPosition(e) {
                this.isLocal ? this.owner.transform.localPosition = e : this.owner.transform.position = e
            }
        }
        class Zi extends zi {
            constructor(e) {
                super(e),
                this.arrive = null,
                this.path = null,
                this.currentIndex = 0,
                this.arrive = new Ji(e)
            }
            Update(e) {
                return !!this.path && (this.currentIndex >= this.path.length || (this.arrive.targetPosition = this.path[this.currentIndex],
                this.arrive.Update(e) && this.currentIndex++,
                !1))
            }
        }
        var $i = Laya.Vector3
          , es = Laya.Sprite3D
          , ts = Laya.Camera;
        class is extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.mySprite3D = null,
                this.myCamera = null,
                this.target = null,
                this._currentOffsetPosition = new $i(-3,8,-10),
                this._rotationEuler = new $i(-36,197,0),
                this._targetOffsetPosition = new $i(-3,8,-10),
                this._nearOffsetPosition = new $i(-3,8,-10),
                this._farOffsetPosition = new $i(-5.6,12,-19),
                this._direction = new $i,
                this._tempPosition = new $i,
                this._isShaking = !1,
                this._shakeArrivePath = null
            }
            onLateUpdate() {
                this.target && (this.followTarget(),
                this.shakeCamera())
            }
            followTarget() {
                if (!$i.equals(this._currentOffsetPosition, this._targetOffsetPosition)) {
                    let e = .01 * Laya.timer.delta;
                    $i.distance(this._targetOffsetPosition, this._currentOffsetPosition) <= e ? this._targetOffsetPosition.cloneTo(this._currentOffsetPosition) : ($i.subtract(this._targetOffsetPosition, this._currentOffsetPosition, this._tempPosition),
                    $i.normalize(this._tempPosition, this._tempPosition),
                    $i.scale(this._tempPosition, e, this._tempPosition),
                    $i.add(this._currentOffsetPosition, this._tempPosition, this._currentOffsetPosition))
                }
                $i.add(this.target.mySprite3D.transform.position, this._currentOffsetPosition, this._tempPosition),
                this.mySprite3D.transform.position = this._tempPosition,
                $i.equals(this.mySprite3D.transform.rotationEuler, this._rotationEuler) || (this.mySprite3D.transform.rotationEuler = this._rotationEuler)
            }
            shakeCamera() {
                this._isShaking && this._shakeArrivePath.Update(Laya.timer.delta) && (this._isShaking = !1)
            }
            Init(e, t) {
                this.mySprite3D = e,
                this.myCamera = t,
                this._shakeArrivePath = new Zi(this.myCamera),
                this._shakeArrivePath.arrive.isLocal = !0,
                this._shakeArrivePath.arrive.moveSpeed = .01,
                this._shakeArrivePath.path = [new $i(0,0,0), new $i(0,0,0), new $i(0,0,0), new $i(0,0,0)]
            }
            SetNearPosition() {
                this._nearOffsetPosition.cloneTo(this._targetOffsetPosition)
            }
            SetFarPosition() {
                this._farOffsetPosition.cloneTo(this._targetOffsetPosition)
            }
            Shake() {
                this._isShaking = !0,
                this._shakeArrivePath.currentIndex = 0;
                for (let e = this._shakeArrivePath.path.length - 2; e >= 0; e--)
                    this._shakeArrivePath.path[e].setValue(i.GetRandomRangeFloat(-1, 1), i.GetRandomRangeFloat(-1, 1), 0);
                a.VibrateLong()
            }
            static Create(e, t) {
                let i = null
                  , s = new es("vehicleCamera")
                  , a = new ts(0,.3,300);
                return a.clearFlag = Laya.CameraClearFlags.SolidColor,
                a.clearColor = t,
                s.addChild(a),
                e.addChild(s),
                (i = s.addComponent(is)).Init(s, a),
                i
            }
        }
        var ss = Laya.Rigidbody3D;
        class as extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this._myRigidbody3D = null,
                this.vehicle = null
            }
            onAwake() {
                this._myRigidbody3D = this.owner.getComponent(ss),
                this._myRigidbody3D.collisionGroup = Jt.VEHICLE_TRIGGER
            }
            onTriggerStay(e) {
                this.vehicle && this.vehicle.owner !== e.owner && (this.vehicle.isOffGround = !1)
            }
            onTriggerExit(e) {
                this.vehicle && this.vehicle.owner !== e.owner && (this.vehicle.isOffGround = !0)
            }
        }
        class ns extends Laya.Script3D {
            constructor() {
                super(...arguments),
                this.mySprite3D = null,
                this.target = null
            }
            onAwake() {
                this.mySprite3D = this.owner
            }
            onUpdate() {
                this.target && (this.mySprite3D.transform.position = this.target.transform.position)
            }
        }
        var rs = Laya.Handler
          , os = Laya.Vector3
          , ls = Laya.Sprite3D;
        class hs extends kt {
            constructor(e) {
                super(e),
                this._isReadyCompleted = !1,
                this._id = Vt.Ready
            }
            Enter() {
                e.Log("GameFlow: Enter Ready"),
                Tt.PreInstantiate(),
                this._isReadyCompleted = !1,
                Ot.IsGamePause = !1,
                Ot.IsGameOver = !1,
                Ot.IsGameStart = !1,
                Ot.GameTime = 0;
                let t = k.GetInstance()
                  , i = Laya.loader
                  , s = t.GetSceneDataByURL(j.SelectSceneURL)
                  , a = [];
                a.push(k.PATH_SUBPACKAGES_UNITY + s.url),
                i.create(a, rs.create(this, e=>{
                    if (e) {
                        let e = i.getRes(k.PATH_SUBPACKAGES_UNITY + s.url);
                        this.createScene3D(e, s),
                        this.createVehicles(e, s),
                        this.createUIGame()
                    } else
                        V.SwitchModule("MainModule")
                }
                ))
            }
            Execute(e) {
                this._isReadyCompleted && this.manager.GameFlowPerformTransition(At.ReadyCompleted)
            }
            Exit() {}
            createScene3D(e, t) {
                I.MyScene3D = e,
                I.MySceneData = t,
                I.CalculatePathsDistance(),
                Laya.stage.addChildAt(e, 0),
                Xi.Assemble(e, t)
            }
            createVehicles(e, t) {
                let s = k.GetInstance()
                  , a = t.starts.length
                  , n = []
                  , r = s.GetVehicleDataByID(J.GetData().p1SelectVehicleID)
                  , o = this.createPlayerVehicle(e, t, P.P1, r);
                if (I.Vehicles.push(o),
                I.P1 = o,
                n.push(o),
                ls.instantiate(s.flagP1, e).addComponent(ns).target = o.mySprite3D,
                j.GamePlayerNumber === q.Two) {
                    let i = s.GetVehicleDataByID(J.GetData().p2SelectVehicleID)
                      , a = this.createPlayerVehicle(e, t, P.P2, i);
                    I.Vehicles.push(a),
                    I.P2 = a,
                    n.push(a),
                    ls.instantiate(s.flagP2, e).addComponent(ns).target = a.mySprite3D;
                    let r = o.camera.myCamera.normalizedViewport;
                    r.y = .504,
                    r.height = .498,
                    o.camera.myCamera.normalizedViewport = r;
                    let l = a.camera.myCamera.normalizedViewport;
                    l.height = .498,
                    a.camera.myCamera.normalizedViewport = l,
                    a.camera.myCamera.transform.rotationEuler = new os(0,0,180)
                }
                for (; n.length < a; ) {
                    let t = s.RandomGetVehicleData()
                      , i = this.createAIVehicle(e, t);
                    I.Vehicles.push(i),
                    n.push(i)
                }
                let l = new os(0,180,0);
                for (let e = 0; e < a; e++) {
                    let s = n[i.GetRandomRangeInt(0, n.length)];
                    s.SetPosition(t.starts[e], l);
                    for (let e = 0; e < n.length; e++)
                        if (s === n[e]) {
                            n.splice(e, 1);
                            break
                        }
                }
                j.AccelerationInStart = !1
            }
            addVehicleTriggerComponent(e, t) {
                let i = e.getChildByName("trigger");
                if (i) {
                    i.addComponent(as).vehicle = t
                }
            }
            createPlayerVehicle(e, t, i, s) {
                let a = ls.instantiate(s.prefab, e)
                  , n = a.addComponent(Ii);
                n.Init(i, s);
                let r = is.Create(e, t.cameraClearColor);
                return r.target = n,
                n.camera = r,
                this.addVehicleTriggerComponent(a, n),
                n.accelerationInStart = j.AccelerationInStart,
                n
            }
            createAIVehicle(e, t) {
                let i = ls.instantiate(t.prefab, e)
                  , s = i.addComponent(Ii);
                return s.Init(P.AI, t),
                this.addVehicleTriggerComponent(i, s),
                s
            }
            createUIGame() {
                Q.CloseUI(()=>{
                    j.GamePlayerNumber === q.One ? this.manager.uiGame = new Ht : this.manager.uiGame = new Kt,
                    this.manager.uiGame.OpenUI(()=>{
                        this._isReadyCompleted = !0
                    }
                    )
                }
                )
            }
        }
        var cs = Laya.Ease
          , ds = Laya.Tween;
        class us extends U.pages.CountdownPageUI {
            constructor() {
                super(...arguments),
                this._count = 0
            }
            onAwake() {
                this._count = 4,
                this.countdown()
            }
            setTips(e) {
                this.lab_Tips.text = e,
                this.lab_Tips.scaleX = this.lab_Tips.scaleY = 0,
                ds.to(this.lab_Tips, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: cs.backOut
                }, 600)
            }
            countdown() {
                if (this._count--,
                this._count < 0)
                    this.destroy();
                else {
                    switch (this._count) {
                    case 3:
                    case 2:
                    case 1:
                        this.setTips("= " + this._count.toString() + " ="),
                        m.WQSoundManager.PlaySound("sounds/count.mp3");
                        break;
                    default:
                        this.setTips("GO"),
                        m.WQSoundManager.PlaySound("sounds/start.mp3"),
                        m.WQSoundManager.PlayMusic("sounds/music.mp3"),
                        Ot.IsGameStart = !0
                    }
                    this.timer.once(1e3, this, this.countdown)
                }
            }
        }
        class ps extends kt {
            constructor(e) {
                super(e),
                this._sortVehiclesTimer = 0,
                this._id = Vt.Game
            }
            Enter() {
                e.Log("GameFlow: Enter Game"),
                (new us).open(!1),
                this._sortVehiclesTimer = 0,
                x.Start()
            }
            Execute(e) {
                Ot.IsGameOver ? this.manager.GameFlowPerformTransition(At.GameOver) : Ot.IsGamePause || (Ot.GameTime += e,
                Rt.Process(e),
                this.sortVehicles(e))
            }
            Exit() {
                x.Stop()
            }
            sortVehicles(e) {
                this._sortVehiclesTimer >= 1200 ? (this._sortVehiclesTimer = 0,
                I.SortVehiclesByDriveDistance()) : this._sortVehiclesTimer += e
            }
        }
        class ms {
            static Share() {
            }
            static SaveAppToDesktop() {
                a.IsQQMiniGame() && a.CompareVersion(qq.getSystemInfoSync().SDKVersion, "1.7.1") >= 0 && qq.saveAppToDesktop({
                    success: ()=>{
                        e.Log("success save app to desktop")
                    }
                    ,
                    fail: ()=>{
                        e.Log("fail save app to desktop")
                    }
                })
            }
        }
        var gs = Laya.Event
          , _s = Laya.Handler
          , Ss = Laya.Ease
          , ys = Laya.Tween
          , fs = Laya.Vector3
          , Ps = Laya.Sprite3D
          , Cs = Laya.Scene3D
          , Is = Laya.CameraClearFlags
          , ws = Laya.Camera;
        class bs extends U.pages.ResultPageUI {
            constructor() {
                super(...arguments),
                this._lab_Nums = [],
                this._scene3D = null
            }
            onAwake() {
                this.but_Again.on(gs.CLICK, this, this.onAgainButtonClickHandler),
                this.but_MoreGame.on(gs.CLICK, this, this.onMoreGameButtonClickHandler),
                this.but_Share.on(gs.CLICK, this, this.onShareButtonClickHandler),
                this.but_ShareVideo.on(gs.CLICK, this, this.onShareVideoButtonClickHandler),
                this._lab_Nums.push(this.lab_Num1),
                this._lab_Nums.push(this.lab_Num2),
                this._lab_Nums.push(this.lab_Num3),
                this._lab_Nums.push(this.lab_Num4),
                this._lab_Nums.push(this.lab_Num5),
                this._lab_Nums.push(this.lab_Num6),
                this.playOpenUI()
            }
            onDestroy() {
                this.timer.clearAll(this),
                this.destroyScene3D()
            }
            playOpenUI() {
                this.updateRankingList(),
                m.WQSoundManager.PlaySound("sounds/result.mp3"),
                this.background.alpha = 0,
                ys.to(this.background, {
                    alpha: 1
                }, 600),
                this.panel_Center.centerY = -1334,
                ys.to(this.panel_Center, {
                    centerY: 0,
                    ease: Ss.backOut,
                    complete: _s.create(this, ()=>{
                        this.createScene3D(),
                        this.timer.once(1e3, this, ()=>{
                            O.GetInstance().ShowInterstitialGameOver()
                        }
                        ),
                        ms.SaveAppToDesktop()
                    }
                    )
                }, 1200),
                a.IsTTMiniGame() && (this.lab_Tips.visible = !1,
                this.but_ShareVideo.visible = this.lab_ShareVideo.visible = !0,
                "ios" === tt.getSystemInfoSync().platform && (this.but_MoreGame.visible = !1)),
                O.GetInstance().CreateGridResultPage(),
                O.GetInstance().CreateBannerResultPage()
            }
            playCloseUI(e) {
                this.destroyScene3D(),
                ys.to(this.background, {
                    alpha: 0
                }, 600),
                ys.to(this.panel_Center, {
                    centerY: -1334,
                    complete: _s.create(this, ()=>{
                        this.destroy(),
                        e && e()
                    }
                    )
                }, 600),
                O.GetInstance().DestroyGridResultPage(),
                O.GetInstance().DestroyBannerResultPage()
            }
            updateRankingList() {
                for (let e = 0; e < this._lab_Nums.length; e++)
                    Ot.RankingList[e] && (this._lab_Nums[e].text = Ot.RankingList[e])
            }
            destroyScene3D() {
                this._scene3D && (this._scene3D.destroy(),
                this._scene3D = null)
            }
            createScene3D() {
                this.destroyScene3D(),
                this._scene3D = new Cs;
                let e = new ws(0,.3,300);
                e.clearFlag = Is.DepthOnly,
                e.transform.position = new fs(0,0,-10),
                e.transform.rotationEuler = new fs(0,180,0);
                let t = Ps.instantiate(k.GetInstance().effect_Firework);
                this._scene3D.addChild(e),
                this._scene3D.addChild(t),
                this.sceneLayer.addChild(this._scene3D),
                m.WQSoundManager.PlaySound("sounds/firework.mp3")
            }
            onAgainButtonClickHandler(e) {
                this.playCloseUI(()=>{
                    Q.OpenUI(()=>{
                        V.SwitchModule("MainModule")
                    }
                    )
                }
                )
            }
            onMoreGameButtonClickHandler(e) {
                a.IsWeChatMiniGame() && (new le).open(!1),
                a.IsQQMiniGame() && O.GetInstance().ShowAppBoxMoreGame(),
                a.IsTTMiniGame() && tt.showMoreGamesModal && tt.showMoreGamesModal({
                    appLaunchOptions: [{
                        appId: "ttcb66bddb54432d79"
                    }, {
                        appId: "ttc096b62b5fac87bf"
                    }, {
                        appId: "ttf31d85a06c376fd9"
                    }, {
                        appId: "ttbcb2ca0f23980d29"
                    }]
                })
            }
            onShareButtonClickHandler(e) {
                ms.Share()
            }
            onShareVideoButtonClickHandler(e) {
                x.Share(e=>{
                    e ? (this.but_ShareVideo.disabled = !0,
                    j.AccelerationInStart = !0) : ge.OpenUI("分享失败，无法获得奖励哦(T_T)", null)
                }
                )
            }
        }
        var Ds = Laya.Handler
          , vs = Laya.Ease
          , Ms = Laya.Tween;
        class Ts extends U.pages.GameOverPageUI {
            onAwake() {
                this.playOpenUI(),
                this.timer.once(2600, this, this.playCloseUI)
            }
            playOpenUI() {

                if(Ot.RankingList[0].trim() === "Player1".trim() || Ot.RankingList[1].trim() === "Player1".trim() || Ot.RankingList[2].trim() === "Player1".trim()){
                    this.lab_GameOver.text = "Reach Goal";
                }

                this.lab_WinnerTips.text = Ot.RankingList[0] + "breast the yarn",
                this.panel_Center.scaleX = this.panel_Center.scaleY = 0,
                Ms.to(this.panel_Center, {
                    scaleX: 1,
                    scaleY: 1,
                    ease: vs.backOut
                }, 600)
            }
            playCloseUI() {
                Ms.to(this.panel_Center, {
                    alpha: 0,
                    complete: Ds.create(this, ()=>{
                        this.destroy(),
                        (new bs).open(!1)
                    }
                    )
                }, 600)
            }
        }
        class Ls extends kt {
            constructor(e) {
                super(e),
                this._id = Vt.Over
            }
            Enter() {
                e.Log("GameFlow: Enter Over"),
                e.Log(Ot.GameTime),
                e.Log(Ot.RankingList),
                m.WQSoundManager.StopMusic(),
                m.WQSoundManager.PlaySound("sounds/start.mp3"),
                this.manager.uiGame && (this.manager.uiGame.CloseUI(null),
                this.manager.uiGame = null),
                Laya.timer.once(1600, this, ()=>{
                    (new Ts).open(!1)
                }
                )
            }
            Execute(e) {}
            Exit() {}
        }
        class Gs {
            constructor() {
                this._gameFlowFSMSystem = new ut,
                this._gameFlowReadyState = null,
                this._gameFlowGameState = null,
                this._gameFlowOverState = null,
                this.uiGame = null
            }
            Build() {
                this._gameFlowReadyState = new hs(this),
                this._gameFlowReadyState.AddTransition(At.ReadyCompleted, Vt.Game),
                this._gameFlowGameState = new ps(this),
                this._gameFlowGameState.AddTransition(At.GameOver, Vt.Over),
                this._gameFlowOverState = new Ls(this),
                this._gameFlowFSMSystem.AddState(this._gameFlowReadyState),
                this._gameFlowFSMSystem.AddState(this._gameFlowGameState),
                this._gameFlowFSMSystem.AddState(this._gameFlowOverState),
                this._gameFlowFSMSystem.ChangeCurrentState(this._gameFlowReadyState)
            }
            Update(e) {
                this._gameFlowFSMSystem.Update(e)
            }
            Destroy() {
                I.Destroy(),
                Rt.Clear(),
                Tt.Pool.ClearAllPools()
            }
            GameFlowPerformTransition(e) {
                this._gameFlowFSMSystem.PerformTransition(e)
            }
        }
        class Vs extends V {
            constructor() {
                super(),
                this._gameLogicManager = null,
                this._name = "GameModule"
            }
            Enter() {
                e.Log("[GameModule]: Enter==================>"),
                this.destroyGameLogicManager(),
                this._gameLogicManager = new Gs,
                this._gameLogicManager.Build()
            }
            Execute(e) {
                this._gameLogicManager && this._gameLogicManager.Update(e)
            }
            Exit() {
                e.Log("[GameModule]: Exit==================>"),
                this.destroyGameLogicManager(),
                Laya.Resource.destroyUnusedResources()
            }
            destroyGameLogicManager() {
                this._gameLogicManager && (this._gameLogicManager.Destroy(),
                this._gameLogicManager = null)
            }
        }
        new class {
            constructor() {
                window.Laya3D ? Laya3D.init(G.width, G.height) : Laya.init(G.width, G.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(),
                Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode  = "showall",
                Laya.stage.screenMode = "none",
                Laya.stage.alignV = G.alignV,
                Laya.stage.alignH = "center",
                Laya.URL.exportSceneToJson = G.exportSceneToJson,
                (G.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                G.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                G.stat && Laya.Stat.show(),
                Laya.alertGlobalError(!0),
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
            }
            onVersionLoaded() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
            }
            onConfigLoaded() {
                V.RegistModule(new X),
                V.RegistModule(new ct),
                V.RegistModule(new Vs),
                V.SwitchModule("InitModule"),
                Laya.timer.frameLoop(1, this, ()=>{
                    V.ExecuteCurrentModule(Laya.timer.delta)
                }
                )
            }
        }
    }();
