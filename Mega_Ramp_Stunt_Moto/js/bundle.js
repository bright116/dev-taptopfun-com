!function () {
    "use strict";
    class e {
        static log(...t) {
            e.isDebug && console.log(...t);
        }
        static info(...t) {
            e.isDebug && console.info(...t);
        }
        static error(...t) {
            e.isDebug && console.error(...t);
        }
        static warn(...t) {
            e.isDebug && console.warn(...t);
        }
    }
    e.isDebug = !1;
    class t {
        static init() {
            this.gameHeight = 750 * Laya.Browser.clientHeight / Laya.Browser.clientWidth, this.clientScale = this.gameHeight / Laya.Browser.clientHeight,
                this.heightOffsetScale = (this.gameHeight - 1334) / 290, this.gameHeight - 1334 > 0 && (this.offY = (this.gameHeight - 1334) / 2),
                this.isIphoneX = Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2, e.log("WindowUtil ---------------------------------------------------------"),
                e.log("WindowUtil Laya.Browser.client:", Laya.Browser.clientWidth, Laya.Browser.clientHeight),
                e.log("WindowUtil Laya.stageSize:", Laya.stage.width, Laya.stage.height), e.log("WindowUtil IsIphoneX=", this.isIphoneX),
                e.log("WindowUtil gameWidth=" + this.gameWidth, "  gameHeight=" + this.gameHeight),
                e.log("WindowUtil clientScale=", this.clientScale), e.log("WindowUtil heightOffsetScale=", this.heightOffsetScale),
                e.log("WindowUtil offY=", this.offY), e.log("WindowUtil ---------------------------------------------------------");
        }
        static follow2(e, t, i, a = 1) {
            let s = new Laya.Vector3();
            Laya.Vector3.add(e.transform.position, i, s);
            let n = new Laya.Vector3();
            Laya.Vector3.lerp(t.transform.position, s, a, n), t.transform.position = n;
        }
        static follow2Z(e, t, i, a = 1) {
            let s = new Laya.Vector3();
            Laya.Vector3.add(e.transform.position, i, s);
            let n = new Laya.Vector3();
            Laya.Vector3.lerp(t.transform.position, s, a, n), t.transform.localPositionZ = n.z;
        }
    }
    t.gameWidth = 750, t.gameHeight = 1334, t.offY = 0, t.isIphoneX = !1, t.clientScale = 1,
        t.heightOffsetScale = 0;
    class i { }
    i.GAME_NAME = "Mega-Ramp-Stunt-Moto", i.VERSION = 102, i.bannerTime = 1e3, i.BoxTime = 2250,
        i.GameId = "", i.Scene = "0", i.Code = "", i.OpenId = "", i.IsShowRedPackge = !1,
        i.IsMisLead = !1, i.IsStatus = !1, i.YDShowing = !1, i.BulletinList = [], i.StartDialogShowAdTime = 1e3,
        i.fenhongData = null;
    class a { }
    a.DATE = "date", a.MONTH = "month", a.ISSCENE = "isScene", a.ISNEWUSER = "IsNewUser",
        a.ISCHECK = "IsCheck", a.CHECKINDATE = "checkDate", a.CHECKIN = "checkIn", a.NEWUSER = "NewUser",
        a.USERLEVEL = "UserLevel", a.SKINDATA = "SkinData", a.GETSKIN = "GetSkin", a.COIN = "Coin",
        a.TL = "LocalTL", a.TLTIME = "TLTIME", a.HOMEVIDEODATE = "HomeVideoDate", a.GAMESTARTDATE = "GameStartDate",
        a.HANDTS = "handTs", a.DcSj2 = "DcSj2", a.DcSj3 = "DcSj3", a.FXSEL = "FxSel";
    class s { }
    s.JNINFO = "JnInfo", s.GAMELOADEND = "GameLoadEnd", s.GAMESTART = "GameStart", s.GAMEEND = "GameEnd",
        s.SELECT = "Select", s.SELECTCALLBACK = "SelectCallback", s.LEVELEND = "LevelEnd",
        s.TL = "Tl", s.DCLOADEND = "DCLoadEnd", s.CLOSECT = "CloseCT", s.FXP = "Fxp", s.TIMEEND = "TimeEnd";
    (class { }).ROLE = "Role";
    const n = (e, t, i, a, s) => [["moveTo", e + s, 0], ["lineTo", e + i - s, 0], ["arcTo", e + i, t, e + i, t + s, s], ["lineTo", e + i, t + a - s], ["arcTo", e + i, t + a, e + i - s, t + a, s], ["lineTo", e + s, t + a], ["arcTo", e, t + a, e, t + a - s, s], ["lineTo", e, t + s], ["arcTo", e, t, e + s, t, s], ["closePath"]], o = (e, t, i, a) => {
        var s = new Laya.Scene3D();
        s.name = "skinS3d", e.addChild(s);
        var n = new Laya.Camera();
        s.addChild(n), n.transform.localPosition = new Laya.Vector3(8.25, 6.76, 9.1), n.transform.rotate(new Laya.Vector3(-21.93, 43.3, 0), !1, !1),
            n.orthographic = !0, n.orthographicVerticalSize = 1, n.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
        let o = new Laya.Vector3(i, a, 0), r = new Laya.Vector3(0, 0, 0);
        s.addChild(t), n.convertScreenCoordToOrthographicCoord(o, r), t.transform.position = r;
    }, r = e => {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
            let a = e.charAt(i);
            t = 16 * t + d(a);
        }
        return t;
    }, d = e => {
        let t = "a".charCodeAt(0), i = "f".charCodeAt(0), a = "A".charCodeAt(0), s = "F".charCodeAt(0), n = "0".charCodeAt(0), o = "9".charCodeAt(0), r = e.charCodeAt(0);
        if (r >= t && r <= i) return 10 + r - t;
        if (r >= a && r <= s) return 10 + r - a;
        if (r >= n && r <= o) return r - n;
        throw Error("转换时字符错误：" + e);
    };
    class l {
        constructor() {
            this.root = null, this.LoadingBox = null, this.LoadingTimer = null, this.root || (this.root = Laya.stage.addChild(new Laya.Sprite()),
                this.root.zOrder = 1001);
        }
        static Instance() {
            return l.instance || (l.instance = new l()), l.instance;
        }
        static alert(e, t = {}, i = null) {
            l.Instance().alert(e, t, i);
        }
        alert(e, t = {}, i = null) { }
        static msg(e, t = {}, i = null) {
            l.Instance().msg(e, t, i);
        }
        msg(e, t = {
            time: 1500
        }, i = null) {
            let a = this.root.addChild(new Laya.Box()), s = a.addChild(new Laya.Sprite()), o = a.addChild(new Laya.Label());
            o.text = e, o.font = "SimHei", o.color = "#ffffff", o.padding = "15,15,15,15", o.fontSize = 30,
                a.width = s.width = o.width, a.height = s.height = o.height, s.graphics.drawPath(0, 0, n(0, 0, o.width, o.height, 10), {
                    fillStyle: "#000000"
                }), s.alpha = .5, a.x = (Laya.stage.width - a.width) / 2, a.y = (Laya.stage.height - a.height) / 2,
                setTimeout(() => {
                    a.removeSelf(), i && i();
                }, t.time || 1500);
        }
        static confirm(e, t = {}, i = null, a = null) {
            l.Instance().confirm(e, t, i, a);
        }
        confirm(e, t = {}, i = null, a = null) {
            let s = this.root.addChild(new Laya.Box()), o = s.addChild(new Laya.Sprite()), r = s.addChild(new Laya.Label()), d = s.addChild(new Laya.Label()), l = s.addChild(new Laya.Label()), h = s.addChild(new Laya.Label());
            d.dataSource = l.dataSource = h.dataSource = r.dataSource = {
                padding: "20,20,20,20",
                font: "SimHei",
                fontSize: 30,
                width: .6 * Laya.stage.width,
                color: "#000000",
                align: "center",
                x: 0,
                y: 0,
                text: "提示",
                overflow: "hidden"
            }, r.dataSource = {
                padding: "20,20,40,20",
                overflow: "",
                fontSize: 25,
                wordWrap: !0,
                text: e,
                color: t.contentColor || "#5A5A5A",
                y: d.height
            }, l.dataSource = {
                text: t.cancelText || "否",
                width: d.width / 2,
                y: d.height + r.height
            }, h.dataSource = {
                text: t.yesText || "是",
                width: d.width / 2,
                color: "#169C24",
                y: d.height + r.height,
                x: d.width / 2
            }, s.dataSource = {
                width: .6 * Laya.stage.width,
                height: d.height + r.height + h.height,
                x: .2 * Laya.stage.width,
                y: (Laya.stage.height - d.height - r.height - h.height) / 2
            }, o.graphics.drawPath(0, 0, n(0, 0, s.width, s.height, 10), {
                fillStyle: "#FFFFFF"
            }), o.graphics.drawLine(0, d.height + r.height, s.width, d.height + r.height, "#D2D2D2", 1),
                o.graphics.drawLine(s.width / 2, d.height + r.height, s.width / 2, s.height, "#D2D2D2", 1),
                l.on(Laya.Event.CLICK, this, e => {
                    s.removeSelf(), a && a();
                }), h.on(Laya.Event.CLICK, this, e => {
                    s.removeSelf(), i && i();
                });
        }
        static showLoading() {
            l.Instance().showLoading();
        }
        static hideLoading() {
            l.Instance().hideLoading();
        }
        showLoading() {
            if (!this.LoadingBox) {
                let e = [{
                    x: Math.SQRT1_2,
                    y: Math.SQRT1_2
                }, {
                    x: 0,
                    y: 1
                }, {
                    x: -Math.SQRT1_2,
                    y: Math.SQRT1_2
                }, {
                    x: -1,
                    y: 0
                }, {
                    x: -Math.SQRT1_2,
                    y: -Math.SQRT1_2
                }, {
                    x: 0,
                    y: -1
                }, {
                    x: Math.SQRT1_2,
                    y: -Math.SQRT1_2
                }, {
                    x: 1,
                    y: 0
                }];
                this.LoadingBox = this.root.addChild(new Laya.Box()), this.LoadingBox.width = this.LoadingBox.height = 120,
                    this.LoadingBox.anchorX = this.LoadingBox.anchorY = .5, this.LoadingBox.x = Laya.stage.width / 2,
                    this.LoadingBox.y = Laya.stage.height / 2;
                for (let t = 0; t < 8; t++) this.LoadingBox.graphics.drawCircle(60 * e[t].x + 60, 60 * e[t].y + 60, 14 - t, "rgba(255,255,255," + (1 - .05 * t) + ")");
            }
            this.LoadingBox.visible = !0, this.LoadingTimer && clearInterval(this.LoadingTimer),
                this.LoadingTimer = setInterval(() => {
                    this.LoadingBox.rotation -= 2;
                }, 30);
        }
        hideLoading() {
            this.LoadingTimer && clearInterval(this.LoadingTimer), this.LoadingBox.visible = !1;
        }
    }
    class h {
        constructor() {
            this.bannerAdCache = null, this.rewardedVideoAdCache = null, this.RewardedVideoError = null,
                this.RewardedVideoFail = null, this.RewardedVideoSuccess = null, this.openDataContext = new c();
        }
        exitMiniProgram(e) { }
        getLaunchOptionsSync() {
            return {
                query: {},
                scene: 1103
            };
        }
        onShow(e) { }
        onHide(e) { }
        offShow(e) { }
        offHide(e) { }
        getSystemInfo(e) { }
        getSystemInfoSync() { }
        onTouchStart(e) { }
        onTouchMove(e) { }
        onTouchEnd(e) { }
        onTouchCancel(e) { }
        offTouchStart(e) { }
        offTouchMove(e) { }
        offTouchEnd(e) { }
        offTouchCancel(e) { }
        setTimeout(e, t) {
            return 1;
        }
        clearTimeout(e) { }
        setInterval(e, t) {
            return 2;
        }
        clearInterval(e) { }
        onAudioInterruptionBegin(e) { }
        offAudioInterruptionBegin(e) { }
        onAudioInterruptionEnd(e) { }
        offAudioInterruptionEnd(e) { }
        onError(e) { }
        offError(e) { }
        showToast(e) { }
        showModal(e) { }
        showActionSheet(e) { }
        hideToast(e) { }
        showLoading(e) {
            l.showLoading();
        }
        hideLoading(e) {
            l.hideLoading();
        }
        msg(e, t, i) {
            l.msg(e, t, i);
        }
        confirm(e, t, i, a) {
            l.confirm(e, t, i, a);
        }
        updateKeyboard(e) { }
        showKeyboard(e) { }
        hideKeyboard(e) { }
        onKeyboardInput(e) { }
        onKeyboardConfirm(e) { }
        onKeyboardComplete(e) { }
        offKeyboardInput(e) { }
        offKeyboardConfirm(e) { }
        offKeyboardComplete(e) { }
        setMenuStyle(e) { }
        getMenuButtonBoundingClientRect() { }
        setStatusBarStyle(e) { }
        onWindowResize(e) { }
        offWindowResize(e) { }
        clearStorage(e) { }
        clearStorageSync() { }
        getStorageInfo(e) { }
        getStorageInfoSync() { }
        removeStorage(e) { }
        removeStorageSync(e) { }
        getStorage(e) {
            e.key && e.success && e.success(Laya.LocalStorage.getItem(e.key));
        }
        getStorageSync(e) {
            return Laya.LocalStorage.getItem(e);
        }
        setStorage(e) {
            Laya.LocalStorage.setItem(e.key, e.value);
        }
        setStorageSync(e, t) {
            Laya.LocalStorage.setItem(e, t);
        }
        updateShareMenu(e) { }
        showShareMenu(e) { }
        hideShareMenu(e) { }
        offShareAppMessage(e) { }
        onShareAppMessage(e) { }
        shareAppMessage(e) { }
        shareVideo(e) { }
        getShareInfo(e) { }
        initShare(e) { }
        share(e) { }
        getNetworkType(e) { }
        onNetworkStatusChange(e) { }
        vibrateLong() { }
        vibrateShort() { }
        reportAnalytics(t, i) {
            e.log("[DebugPlatform][数据上报] eventName:", t, ", data:", i);
        }
        createBannerAd(e) {
            return {};
        }
        createRewardedVideoAd(e) {
            return {};
        }
        initBannerAd(e = {}) {
            let t = Laya.stage.addChild(new Laya.Box()), i = t.addChild(new Laya.Label());
            this.rewardedVideoAdCache = t, t.zOrder = 1003, t.width = e.width || Laya.stage.width,
                t.height = e.width ? e.width / 3 : Laya.stage.width / 3, t.top = e.top || Laya.stage.height - t.height,
                t.left = e.left || 0, i.text = "Banner广告", i.font = "SimHei", i.align = "center",
                i.valign = "middle", i.fontSize = 50, i.color = "#ffffff", i.bgColor = "#999999",
                i.bold = !0, i.left = i.right = i.top = i.bottom = 0, t.visible = !1, this.bannerAdCache = t;
        }
        showBannerAd(e = {}, t = null) {
            let i = this;
            null === this.bannerAdCache && this.initBannerAd(), void 0 === e.delayNum && (e.delayNum = 1e3),
                e.delay && e.delayNum > 0 ? setTimeout(() => {
                    i.bannerAdCache.visible = !0, e.width && (i.bannerAdCache.width = e.width, i.bannerAdCache.height = e.width / 3),
                        e.left && (i.bannerAdCache.left = e.left), e.top && (i.bannerAdCache.top = e.top),
                        t && t({
                            realWidth: i.bannerAdCache.width,
                            realHeight: i.bannerAdCache.height,
                            width: i.bannerAdCache.width,
                            height: i.bannerAdCache.height,
                            left: i.bannerAdCache.left,
                            top: i.bannerAdCache.top
                        });
                }, e.delayNum) : (i.bannerAdCache.visible = !0, e.width && (i.bannerAdCache.width = e.width,
                    i.bannerAdCache.height = e.width / 3), e.left && (i.bannerAdCache.left = e.left),
                    e.top && (i.bannerAdCache.top = e.top), t && t({
                        realWidth: i.bannerAdCache.width,
                        realHeight: i.bannerAdCache.height,
                        width: i.bannerAdCache.width,
                        height: i.bannerAdCache.height,
                        left: i.bannerAdCache.left,
                        top: i.bannerAdCache.top
                    }));
        }
        hideBannerAd() {
            this.bannerAdCache && (this.bannerAdCache.visible = !1);
        }
        initRewardedVideoAd(t = {}) {
            let i = this, a = Laya.stage.addChild(new Laya.Box()), s = a.addChild(new Laya.Button()), n = a.addChild(new Laya.Button()), o = a.addChild(new Laya.Button());
            this.rewardedVideoAdCache = a, a.zOrder = 1002, a.width = Laya.stage.width, a.height = Laya.stage.height,
                a.graphics.drawRect(0, 0, a.width, a.height, "#aaaaaa"), s.label = "Error", n.label = "Fail",
                o.label = "Success", s.centerX = n.centerX = o.centerX = 0, s.width = n.width = o.width = 300,
                s.height = n.height = o.height = 100, s.labelSize = n.labelSize = o.labelSize = 50,
                s.top = 300, n.top = 450, o.top = 600, s.on(Laya.Event.CLICK, this, () => {
                    e.log("[RewardedVideo] Error"), this.rewardedVideoAdCache.visible = !1, i.RewardedVideoError && i.RewardedVideoError();
                }), n.on(Laya.Event.CLICK, this, () => {
                    e.log("[RewardedVideo] Fail"), this.rewardedVideoAdCache.visible = !1, i.RewardedVideoFail && i.RewardedVideoFail();
                }), o.on(Laya.Event.CLICK, this, () => {
                    e.log("[RewardedVideo] Success"), this.rewardedVideoAdCache.visible = !1, i.RewardedVideoSuccess && i.RewardedVideoSuccess();
                }), a.visible = !1;
        }
        showRewardedVideoAd(e) {
            null === this.rewardedVideoAdCache && this.initRewardedVideoAd(), this.RewardedVideoError = e.error || null,
                this.RewardedVideoFail = e.fail || null, this.RewardedVideoSuccess = e.success || null,
                this.rewardedVideoAdCache.visible = !0;
        }
        authorize(e) { }
        checkIsUserAdvisedToRest(e) { }
        openCustomerServiceConversation(e) { }
        login(e) {
            e.success && e.success({
                code: "debug_code"
            });
        }
        request(e) { }
        checkSession(e) { }
        navigateToMiniProgram(e) {
            l.confirm("即将打开“小程序名称”小程序", {
                cancelText: "取消",
                yesText: "允许"
            }, () => {
                e.success && e.success(), e.complete && e.complete(), platform.reportAnalytics("navigateToMiniProgram", {
                    appid: e.appId,
                    type: 2
                });
            }, () => {
                e.fail && e.fail(), e.complete && e.complete(), platform.reportAnalytics("navigateToMiniProgram", {
                    appid: e.appId,
                    type: 3
                });
            });
        }
        getSetting(e) { }
        openSetting(e) { }
        getUserInfo(e) { }
        createUserInfoButton(e) { }
    }
    class c {
        createDisplayObject(e, t, i) {
            return new Laya.Sprite();
        }
        postMessage(e) { }
    }
    class m {
        constructor() {
            this.music_url = "", this.music_loop = !1, this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1,
                this.sound_inner_isStop = !1;
        }
        static get Instance() {
            return m.instance || (m.instance = new m()), m.instance;
        }
        init() {
            y.Instance.onWx ? (this.mp3_inner = y.Instance.platform.createInnerAudioContext(),
                this.onMusicListener(), this.wav_inner = y.Instance.platform.createInnerAudioContext(),
                this.onSoundListener()) : console.error("未找到微信接口");
        }
        playMusic(e, t = !1) {
            this.mp3_inner && (this.music_url = e, this.music_loop = t, this.mp3_inner.stop(),
                this.mp3_inner.src = e, this.mp3_inner.loop = t, Laya.timer.once(200, this, () => {
                    this.mp3_inner.play();
                }));
        }
        playSound(e, t = !1) {
            this.wav_inner && ((this.sound_inner_isPlaying || this.sound_inner_isPause) && this.wav_inner.stop(),
                this.wav_inner.src = e, this.wav_inner.loop = t, this.wav_inner.play());
        }
        stopAll() {
            this.mp3_inner && (this.mp3_inner.volume = 0), this.wav_inner && (this.wav_inner.volume = 0);
        }
        playAll() {
            this.mp3_inner && (this.mp3_inner.volume = 1), this.wav_inner && (this.wav_inner.volume = 1);
        }
        onMusicListener() {
            this.mp3_inner.onCanplay(() => { }), this.mp3_inner.onPlay(() => { }), this.mp3_inner.onPause(() => { }),
                this.mp3_inner.onStop(() => {
                    this.mp3_inner.destroy(), this.mp3_inner = y.Instance.platform.createInnerAudioContext(),
                        this.onMusicListener(), this.playMusic(this.music_url, this.music_loop);
                }), this.mp3_inner.onEnded(() => { }), this.mp3_inner.onTimeUpdate(() => { }), this.mp3_inner.onError(() => {
                    this.mp3_inner.destroy(), this.mp3_inner = y.Instance.platform.createInnerAudioContext(),
                        this.onMusicListener(), this.playMusic(this.music_url, this.music_loop);
                }), this.mp3_inner.onWaiting(() => { }), this.mp3_inner.onSeeking(() => { }), this.mp3_inner.onSeeked(() => { });
        }
        offMusicListener() {
            this.mp3_inner.offCanplay(() => { }), this.mp3_inner.offPlay(() => { }), this.mp3_inner.offPause(() => { }),
                this.mp3_inner.offStop(() => { }), this.mp3_inner.offEnded(() => { }), this.mp3_inner.offTimeUpdate(() => { }),
                this.mp3_inner.offError(() => { }), this.mp3_inner.offWaiting(() => { }), this.mp3_inner.offSeeking(() => { }),
                this.mp3_inner.offSeeked(() => { });
        }
        onSoundListener() {
            this.wav_inner.onCanplay(() => { }), this.wav_inner.onPlay(() => {
                this.sound_inner_isPlaying = !0, this.sound_inner_isPause = !1, this.sound_inner_isStop = !1;
            }), this.wav_inner.onPause(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !0, this.sound_inner_isStop = !1;
            }), this.wav_inner.onStop(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1, this.sound_inner_isStop = !0;
            }), this.wav_inner.onEnded(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1, this.sound_inner_isStop = !0;
            }), this.wav_inner.onTimeUpdate(() => { }), this.wav_inner.onError(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1, this.sound_inner_isStop = !1;
            }), this.wav_inner.onWaiting(() => { }), this.wav_inner.onSeeking(() => { }), this.wav_inner.onSeeked(() => { });
        }
        offSoundListener() {
            this.wav_inner.offCanplay(() => { }), this.wav_inner.offPlay(() => { }), this.wav_inner.offPause(() => { }),
                this.wav_inner.offStop(() => { }), this.wav_inner.offEnded(() => { }), this.wav_inner.offTimeUpdate(() => { }),
                this.wav_inner.offError(() => { }), this.wav_inner.offWaiting(() => { }), this.wav_inner.offSeeking(() => { }),
                this.wav_inner.offSeeked(() => { });
        }
    }
    class g {
        constructor(e, t) {
            this.callback = null, this.context = null;
            this.callback = e, this.context = t;
        }
        notify(...e) {
            this.callback.call(this.context, ...e);
        }
        compar(e) {
            return e == this.context;
        }
    }
    class u {
        constructor() {
            this.listeners = {};
        }
        static get Instance() {
            return this.instance && null != this.instance || (this.instance = new u()), this.instance;
        }
        on(e, t, i) {
            this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(new g(t, i));
        }
        removeListener(e, t) {
            let i = this.listeners[e];
            if (!i) return;
            let a = i.length;
            for (let e = 0; e < a; e++) {
                if (i[e].compar(t)) {
                    i.splice(e, 1);
                    break;
                }
            }
            0 == i.length && delete this.listeners[e];
        }
        emit(e, ...t) {
            let i = this.listeners[e];
            if (!i) return;
            let a = i.length;
            for (let e = 0; e < a; e++) {
                let a = i[e];
                a && a.notify(...t);
            }
        }
    }
    u.instance = null;
    class p {
        static remove(e) {
            null != e && "" != e ? Laya.LocalStorage.removeItem(p.rootPath + e) : console.error(this.name + "---\x3e remove err : key undefind");
        }
        static setString(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setItem(p.rootPath + e, t) : console.error(this.name + "---\x3e setString err : key or value undefind");
        }
        static setNumber(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setItem(p.rootPath + e, String(t)) : console.error(this.name + "---\x3e setNumber err : key or value undefind");
        }
        static setBoolean(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setItem(p.rootPath + e, t ? "1" : "0") : console.error(this.name + "---\x3e setBoolean err : key or value undefind");
        }
        static setList(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setJSON(p.rootPath + e, t) : console.error(this.name + "---\x3e setList err : key or value undefind");
        }
        static getString(e, t) {
            if (null == e || "" == e) return console.error(this.name + "---\x3e getString err : key undefind"),
                null;
            let i = Laya.LocalStorage.getItem(p.rootPath + e);
            return i || (t || null);
        }
        static getNumber(e, t) {
            if (null == e || "" == e) return console.error(this.name + "---\x3e getNumber err : key undefind"),
                0;
            let i = Laya.LocalStorage.getItem(p.rootPath + e);
            return i && "" != i ? Number(i) : null != t || null != t ? t : 0;
        }
        static getBoolean(e, t) {
            if (null == e || "" == e) return console.error(this.name + "---\x3e getBoolean err : key undefind"),
                !1;
            let i = Laya.LocalStorage.getItem(p.rootPath + e);
            return i && "" != i ? "1" == i : null != t && t;
        }
        static getList(e, t) {
            if (null == e || "" == e) return console.error("getList err : key undefind"), null;
            let i = Laya.LocalStorage.getJSON(p.rootPath + e);
            return i || (t || null);
        }
    }
    p.rootPath = i.GAME_NAME + "-";
    class w {
        static init() {
            this.IsSpeed = !1;
        }
        static getCoin(e) {
            this.Coin += e, p.setNumber(a.COIN, this.Coin);
        }
        static cutCoin(e) {
            this.Coin -= e, p.setNumber(a.COIN, this.Coin);
        }
    }
    w.NowLevel = 1, w.UserLevel = 1, w.MaxLevel = 7, w.Coin = 0, w.IsIP6 = !1, w.IsTtIOS = !1,
        w.GetSkin = 0, w.GetSkinSy = !1, w.IsTcHome = !0, w.StartGame = !1, w.RetrunHomeNum = 0,
        w.Dctj = 0, w.PassNum = 0, w.IsShowBox = !1, w.DCHandNumMax = 1, w.DCHandNum = 0,
        w.IsDcBox = !0, w.DcLoad = !1, w.DataTime = 0, w.HomeTL = !0, w.VIVOHome = !1, w.SkyIsLoad = !1,
        w.DcSj2 = !1, w.DcSj3 = !1, w.isScene = !1, w.FirstHome = !0, w.isFXP = !1, w.FxpAngle = 60,
        w.CheckDate = [{
            type: "power",
            val: 2
        }, {
            type: "coin",
            val: 400
        }, {
            type: "power",
            val: 4
        }, {
            type: "coin",
            val: 800
        }, {
            type: "power",
            val: 6
        }, {
            type: "coin",
            val: 1e3
        }, {
            type: "power",
            val: 8
        }], w.DcBoxzt = 0, w.IsResu = 0, w.IsSpeed = !1, w.SpeedTime = 10, w.AinName = "",
        w.SkinData = [{
            id: 0,
            name: "base",
            car: "res/LayaScene_Motor/Conventional/Assets/Textrue/Motor/Motor.png",
            people: "res/LayaScene_Motor/Conventional/Assets/Textrue/Motor/Man.png",
            have: !0,
            version: 1
        }, {
            id: 1,
            name: "blue",
            car: "res/Skin/Blue/Blue.png",
            people: "res/Skin/Blue/BlueMan.png",
            have: !1
        }, {
            id: 2,
            name: "red",
            car: "res/Skin/Red/red.png",
            people: "res/Skin/Red/RedMan.png",
            have: !1
        }], w.LevelData = [{
            id: 0,
            Trap: null
        }, {
            id: 1,
            Trap: null
        }, {
            id: 2,
            resu: [{
                pos: {
                    x: -44.8,
                    y: .3,
                    z: 290
                },
                rot: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }]
        }, {
            id: 3,
            resu: [{
                pos: {
                    x: -95.8,
                    y: .3,
                    z: 222.7
                },
                rot: {
                    x: 0,
                    y: -90,
                    z: 0
                }
            }]
        }, {
            id: 4,
            resu: [{
                pos: {
                    x: -0,
                    y: .3,
                    z: 650.2
                },
                rot: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }]
        }, {
            id: 5,
            resu: [{
                pos: {
                    x: 227.4,
                    y: .3,
                    z: 258.3
                },
                rot: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }]
        }, {
            id: 6,
            resu: [{
                pos: {
                    x: -113.8,
                    y: 7.1,
                    z: 268.4
                },
                rot: {
                    x: 0,
                    y: -90,
                    z: 0
                }
            }]
        }, {
            id: 7,
            resu: [{
                pos: {
                    x: -80,
                    y: 11.3,
                    z: 251.1
                },
                rot: {
                    x: 0,
                    y: -0,
                    z: 0
                }
            }]
        }, {
            id: 8,
            resu: [{
                pos: {
                    x: 0,
                    y: .3,
                    z: 258
                },
                rot: {
                    x: 0,
                    y: -0,
                    z: 0
                }
            }, {
                pos: {
                    x: 0,
                    y: 5.1,
                    z: 569.6
                },
                rot: {
                    x: 0,
                    y: -0,
                    z: 0
                }
            }]
        }, {
            id: 9,
            resu: [{
                pos: {
                    x: -29.6,
                    y: 4.84,
                    z: 335
                },
                rot: {
                    x: 0,
                    y: 90,
                    z: 0
                }
            }, {
                pos: {
                    x: 227.4,
                    y: .3,
                    z: 243.6
                },
                rot: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }, {
                pos: {
                    x: 227.4,
                    y: .3,
                    z: 323
                },
                rot: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }]
        }, {
            id: 10,
            resu: [{
                pos: {
                    x: -48.9,
                    y: .3,
                    z: 326
                },
                rot: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }, {
                pos: {
                    x: -45.9,
                    y: .3,
                    z: 499
                },
                rot: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            }]
        }];
    class y {
        constructor() {
            this.Wx = "Wx", this.Qq = "Qq", this.Tt = "Tt", this.Vivo = "Vivo", this.Oppo = "Oppo",
                this.Bd = "Bd", this.Uc = "Uc", this.Web = "Web", this.Mz = "Mz", this.platformName = this.Wx,
                this.onWx = !1, this.onQq = !1, this.onTt = !1, this.onVivo = !1, this.onOppo = !1,
                this.onBd = !1, this.onWeb = !1, this.onUc = !1, this.onMz = !1, this.isWx = !1,
                this.isQq = !1, this.isTt = !1, this.isVivo = !1, this.isOppo = !1, this.isBd = !1,
                this.isWeb = !1, this.isUc = !1, this.isMz = !1, this.xsb = 750 / Laya.Browser.clientWidth,
                this.JLBtnInfo = {
                    top: 88,
                    right: 20,
                    height: 57,
                    width: 0
                };
        }
        static get Instance() {
            return y._instance || (y._instance = new y()), y._instance;
        }
        init() {
            this.isWeb = !0, this.initWeb();
            this.getJlInfo();
        }
        initWx() {
            // this.platform = Laya.Browser.window.wx, this.onWx = !!this.platform, this.platform.uma.init({
            //     appKey: "5f6ae24c46549c54f0b54da5",
            //     useOpenid: !0,
            //     autoGetOpenid: !1,
            //     debug: !0
            // }), this.onWx && (this.openDataViewer = new Laya.WXOpenDataViewer(), m.Instance.init());
        }
        initTt() {
            this.platform = Laya.Browser.window.tt, this.onTt = !!this.platform;
        }
        initQq() {
            this.platform = Laya.Browser.window.qq, this.onQq = !!this.platform;
        }
        initOppo() {
            this.platform = Laya.Browser.window.qg, this.onOppo = !!this.platform, this.onOppo && this.platform.setEnableDebug({
                enableDebug: !1
            });
        }
        initVivo() {
            this.platform = Laya.Browser.window.qg, this.onVivo = !!this.platform;
        }
        initMz() {
            this.platform = Laya.Browser.window.qg, this.onMz = !!this.platform;
        }
        initUc() {
            this.platform = Laya.Browser.window.uc, this.onUc = !!this.platform;
        }
        initBd() {
            this.platform = Laya.Browser.window.swan, e.log("百度调试"), this.platform.setEnableDebug({
                enableDebug: !1
            }), this.onBd = !!this.platform;
        }
        initWeb() {
            this.platform = new h(), this.onWeb = !!this.platform, w.DcLoad = !0;
        }
        getJlInfo() {
            if (this.isUc || this.isWeb || !this.platform.getMenuButtonBoundingClientRect) Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2 ? this.JLBtnInfo = {
                height: 57,
                top: 88,
                width: 80,
                right: 22
            } : this.JLBtnInfo = {
                height: 57,
                top: 44,
                width: 80,
                right: 22
            }; else {
                let t;
                e.log("-------------胶囊按钮位置信息-------------", this.platform.getMenuButtonBoundingClientRect());
                let i = {
                    height: (t = this.platform.getMenuButtonBoundingClientRect()).height * Laya.Browser.pixelRatio,
                    top: t.top * Laya.Browser.pixelRatio,
                    right: t.right * Laya.Browser.pixelRatio,
                    width: t.width * Laya.Browser.pixelRatio
                };
                t.top ? (this.JLBtnInfo = i, u.Instance.emit(s.JNINFO)) : Laya.timer.once(1e3, this, this.getJlInfo),
                    e.log("胶囊按钮信息2", i);
            }
        }
        topMidle(e) {
            if (null != e) if (this.platform) {
                let i = this.platform.getMenuButtonBoundingClientRect(), a = (i.height * t.clientScale - e.height) / 2;
                e.y = i.top * t.clientScale + a;
            } else e.y = 20;
        }
        top(e) {
            if (null != e) if (this.platform) {
                let i = this.platform.getMenuButtonBoundingClientRect();
                e.y = i ? i.top * t.clientScale : 20;
            } else e.y = 20;
        }
        wxCopy() {
            if (this.platformName == this.Wx && Laya.Browser.onWeiXin) {
                let e = ["$6VWIYtQ9ny4$", "$gXXNYtQ9Zks$", "$0qWPYtQk0YB$", "$Bo20YtQkqvP$", "$PEnfYtQkYPc$", "$WyJPYtQPfJw$", "$MuIaYtQPUQ4$", "$VuVFYtQPcpB$", "$pujuYtQPrFd$", "$eC5MYtQlak1$"];
                this.platform.setClipboardData({
                    data: e[Math.floor(Math.random() * (e.length - 1))],
                    success: () => {
                        this.platform.hideToast();
                    }
                });
            }
        }
        shortVibrate() {
            if (this.isMz) {
                Laya.Browser.window.mz.vibrateShort({
                    success: () => { },
                    fail: () => { },
                    complete: () => { }
                });
            } else this.platform && this.platform.vibrateShort();
        }
        longVibrate() {
            if (this.isMz) {
                Laya.Browser.window.mz.vibrateLong({
                    success: () => { },
                    fail: () => { },
                    complete: () => { }
                });
            } else this.platform && this.platform.vibrateLong();
        }
        setOpenID(e, t, i) {
            this.onWx && this.platform.uma.setOpenid(e);
        }
    }
    class I extends Laya.Dialog {
        openedCallBack(e) {
            this.opened_call_back = e;
        }
        onOpened(t) {
            e.log("BaseDialogRt----------------onOpened param=", t), this.opened_call_back && this.opened_call_back(t);
        }
        onAwake() {
            this.width = Laya.stage.width, this.height = Laya.stage.height, y.Instance.isWx && i.IsMisLead && w.isScene && this.name;
        }
        retrunBtn() {
            let e = new Laya.Image("public/btn_jlal.png");
            this.addChild(e), e.zOrder = 9999, e.top = y.Instance.JLBtnInfo.top + y.Instance.JLBtnInfo.height + 1,
                e.right = 20, e.on(Laya.Event.CLICK, this, () => { });
        }
    }
    class L {
        constructor() { }
        static get Instance() {
            return this._instance || (this._instance = new L()), this._instance;
        }
        static init() {
            let e = Laya.LocalStorage.getItem(this._status_key);
            this.status = !e;
        }
        static StopAll() {
            L.status = !1;
        }
        static RestAll() {
            L.status = !0;
        }
        static get status() {
            return L._status;
        }
        static set status(t) {
            L._status = t, Laya.SoundManager.muted = Laya.SoundManager.musicMuted = Laya.SoundManager.soundMuted = !L._status,
                e.log("是否静音", Laya.SoundManager.muted + ""), L._status ? Laya.LocalStorage.removeItem(this._status_key) : (Laya.SoundManager.stopAll(),
                    Laya.LocalStorage.setItem(this._status_key, this._status_key));
        }
        static play(t, i = 0, a = 1, s = null) {
            Laya.SoundManager.playSound(this.options[t].url, i, null === s ? null : Laya.Handler.create(this, s));
        }
        static stop(t) {
            if ("music" === this.options[t].type) {
                Laya.SoundManager.stopMusic();
            } else Laya.SoundManager.stopSound(this.options[t].url);
        }
    }
    L._status_key = "sound_key", L._status = !0, L.options = {
        bg: {
            url: "sound/bg.mp3",
            type: "music"
        },
        coin: {
            url: "sound/get_coin.mp3",
            type: "sound"
        },
        click: {
            url: "sound/click.mp3",
            type: "sound"
        },
        pass: {
            url: "sound/pass.mp3",
            type: "sound"
        },
        fail: {
            url: "sound/fail.mp3",
            type: "sound"
        },
        die: {
            url: "sound/die.mp3",
            type: "sound"
        },
        speed: {
            url: "sound/speedUp.mp3",
            type: "sound"
        },
        speed2: {
            url: "sound/speedUp2.mp3",
            type: "sound"
        },
        collision: {
            url: "sound/collision.mp3",
            type: "sound"
        },
        start: {
            url: "sound/start.mp3",
            type: "sound"
        },
        start2: {
            url: "sound/start2.mp3",
            type: "sound"
        },
        zhuangji: {
            url: "sound/zhuangji.mp3",
            type: "sound"
        },
        fire: {
            url: "sound/fire.mp3",
            type: "sound"
        },
        resuMd: {
            url: "sound/resuMd.mp3",
            type: "sound"
        },
        stop: {
            url: "sound/stop.mp3",
            type: "sound"
        },
        run: {
            url: "sound/run.mp3",
            type: "sound"
        },
        motor: {
            url: "sound/motor.mp3",
            type: "sound"
        }
    };
    class f { }
    f.LOAD_SCENE = "Scenes/LoadingScene.scene", f.HOME_SCENE = "Scenes/HomeScene.scene",
        f.GAME_SCENE = "Scenes/GameScene.scene", f.Home_DIALOG = "Dialogs/HomeDialog.scene",
        f.SHOP_DIALOG = "Dialogs/ShopDialog.scene", f.CHECKIN_DIALOG = "Dialogs/CheckInDialog.scene",
        f.RAND_DIALOG = "Dialogs/RankDialog.scene", f.PASSCOIN_DIALOG = "Dialogs/PassCoinDialog.scene",
        f.PASS_DIALOG = "Dialogs/PassDialog.scene", f.RESU_DIALOG = "Dialogs/ResuDialog.scene",
        f.FAIL_DIALOG = "Dialogs/FailDialog.scene", f.BX_DIALOG = "Dialogs/BxDialog.scene",
        f.BX2_DIALOG = "Dialogs/Bx2Dialog.scene", f.EXPROT_DIALOG = "Dialogs/ExprotDialog.scene",
        f.EXPROTBOX_DIALOG = "Dialogs/ExprotBoxDialog.scene", f.EXPROTBOX2_DIALOG = "Dialogs/ExprotBox2Dialog.scene",
        f.EXPROTBOX3_DIALOG = "Dialogs/ExprotBox3Dialog.scene", f.MENT_DIALOG = "Dialogs/MentDialog.scene",
        f.PAUSE_DIALOG = "Dialogs/PauseDialog.scene", f.TRYFAIL_DIALOG = "Dialogs/TryFailDialog.scene",
        f.TRYEND_DIALOG = "Dialogs/TryEndDialog.scene", f.LEVEL_DIALOG = "Dialogs/LevelDialog.scene",
        f.TL_DIALOG = "Dialogs/TlDialog.scene", f.NativeDIALOG = "Dialogs/NativeDialog.scene",
        f.NativeOppoDIALOG = "Dialogs/NativeOppoDialog.scene";
    class A {
        static onStart(t, a, s) {
            if (!this.postAld) return;
            if (e.log("关卡", w.NowLevel, w.UserLevel), w.UserLevel != w.NowLevel) return;
            let n = {
                stageId: t || w.NowLevel,
                stageName: a ? "Level " + a : "Level " + w.NowLevel,
                userId: s || i.OpenId
            };

        }
        static onRunning(e, t, a) {
            if (!this.postAld) return;
            let s = {
                stageId: e || w.NowLevel,
                stageName: t ? "Level " + t : "Level " + w.NowLevel,
                userId: a || i.OpenId,
                event: "relive"
            };

        }
        static onEnd(e, t, a, s) {
            if (!this.postAld) return;
            if (w.UserLevel != w.NowLevel) return;
            let n = {
                stageId: t || w.NowLevel,
                stageName: a ? "Level " + a : "Level " + w.NowLevel,
                userId: s || i.OpenId,
                event: e ? "complete" : "fail"
            };

        }
        static upload(e) {
            if (this.postAld && y.Instance.platform) try {
                y.Instance.platform.aldSendEvent(e);
            } catch (e) { }
        }
    }
    A.postAld = !1;
    class S {
        constructor() {
            this.TOKEN = "", S._instance = this;
        }
        static get Instance() {
            return S._instance || new S(), S._instance;
        }
        static request(e) {
            S.Instance.request(e);
        }
        request(e) {
            // e = this.param(e);
            // let t = new Laya.HttpRequest();
            // t.once(Laya.Event.COMPLETE, this, () => {
            //     e.complete && e.complete(t.data);
            // }), t.once(Laya.Event.ERROR, this, t => {
            //     e.error && e.error(t);
            // }), t.send(e.url, this.obj2str(e.data), e.method, e.responseType);
        }
        param(t = {}) {
            let i = t.data || {};
            return t.data = i, t.method = t.method || "post", t.responseType = t.responseType || "json",
                e.log(t), t;
        }
        objSort(e) {
            for (var t = Object.keys(e).sort(), i = {}, a = 0; a < t.length; a++) i[t[a]] = e[t[a]];
            return i;
        }
        obj2str(e) {
            let t = "";
            for (let i in e) t += "&" + i + "=" + e[i];
            return t.substring(1);
        }
    }
    class b {
        constructor() {
            this.isRequiered = !0;
        }
        static login() {
            y.Instance.platform ? (this.getTimes += 1, y.Instance.platform.login({
                force: !1,
                success: t => {
                    if (e.log("login success: res=", t), t.code) {
                        i.Code = t.code;
                        let e = y.Instance.platform.getLaunchOptionsSync(), s = "0", n = e.scene;
                        p.getBoolean(a.ISSCENE, !1) ? w.isScene = !0 : "1037" != e.scene && "1038" != e.scene || (p.setBoolean(a.ISSCENE, !0),
                            w.isScene = !0), n = null == e.query || null == e.query ? "0" : null == e.query.scene || null == e.query.scene ? "0" : e.query.scene,
                            i.Scene = decodeURIComponent(n), this.getTimes = 0;
                        let o = C.loginUrl + "&version=" + i.VERSION + "&code=" + t.code + "&scene=" + i.Scene + "&uid=" + s;
                        this.loginToService(o);
                    } else if (t.data) {
                        let e = t.token, i = y.Instance.platform.getLaunchOptionsSync();
                        "1037" != i.scene && "1038" != i.scene || (w.isScene = !0);
                        let a = "0";
                        a = null == i.query || null == i.query ? "0" : JSON.stringify(i.query), this.loginOppoToService(e, a);
                    }
                },
                fail: t => {
                    this.getTimes < this.MAX_GET_TIMES ? this.login() : e.log("login fail");
                }
            })) : e.log("请在微信开发工具上调试");
        }
        static loginToService(t) {
            e.log("loginPath=", t), S.request({
                url: t,
                method: "get",
                complete: t => {
                    e.log("loginToService success:", t), y.Instance.setOpenID(t.data.openid, 0, 0),
                        i.OpenId = t.data.openid, this.getGameList(), this.getMisleadInfo();
                },
                error: e => {
                    console.error("loginToService fail:", e);
                }
            });
        }
        static loginOppoToService(t, i) {

        }
        static getGameList() {

        }
        static startGame() {
            if (i.OpenId) {
                let e = C.startGameUrl + "&openid=" + i.OpenId + "&version=" + i.VERSION;
                S.request({
                    url: e,
                    method: "get",
                    complete: e => {
                        console.info("startGame success:", e), i.GameId = e.data.id;
                    },
                    error: e => {
                        console.info("startGame fail:", e);
                    }
                });
            }
        }
        static endGame(e) {

        }
        static leadOut(e) {

        }
        static leadOutSuccess(e) {

        }
        static getMisleadInfo() {

        }
        static getBulletinList() {

        }
        static uploadLevel(t) {
            if (i.OpenId) {
                let a = C.uploadLevelUrl + "&openid=" + i.OpenId + "&level=" + t;
                S.request({
                    url: a,
                    method: "get",
                    complete: t => {
                        e.log("uploadLevel success");
                    },
                    error: t => {
                        e.log("uploadLevel fail");
                    }
                });
            }
        }
    }
    b.MAX_GET_TIMES = 3, b.getTimes = 0;
    class C {
        static getRootUrl() {

        }
    }
    C.user = C.getRootUrl() + "&act=user", C.loginUrl = C.getRootUrl() + "&act=userinfo",
        C.misleadUrl = C.getRootUrl() + "&act=user", C.gameListUrl = C.getRootUrl() + "&act=gamelist",
        C.startGameUrl = C.getRootUrl() + "&act=index", C.endGameUrl = C.getRootUrl() + "&act=end",
        C.leadOutUrl = C.getRootUrl() + "&act=game", C.leadOutSuccessUrl = C.getRootUrl() + "&act=cgame",
        C.leadBox = C.getRootUrl() + "&act=hzlist", C.uploadLevelUrl = C.getRootUrl() + "&act=level",
        C.bulletinList = C.getRootUrl() + "&act=nickname&openid=", C.fenghong = C.getRootUrl() + "&act=fenhong&openid=",
        C.domain = C.getRootUrl() + "&act=";
    class v {
        static trackEvent(e, t) {
            if (y.Instance.onWx) if (t) {
                if (t instanceof Array) return void console.error("友盟上报事件属性不能为数组");
                y.Instance.platform.uma.trackEvent(e, t);
            } else y.Instance.platform.uma.trackEvent(e);
        }
    }
    class B {
        static getGameListSize() {
            return null == this.GameList ? 0 : this.GameList.length;
        }
        static checkBannerGameList() {
            return !(null == this.BannerList || this.BannerList.length <= 0);
        }
        static getGameListRadom(e, t) {
            if (0 == e) return null;
            let i = [], a = [];
            if (null != t && t.length > 0) {
                e = Math.min(e, t.length);
                let s = !0;
                for (; s;) {
                    let n = Number((Math.random() * (t.length - 1)).toFixed());
                    i.indexOf(n) < 0 && (i.push(n), a.push(t[n])), i.length == e && (s = !1);
                }
                return a;
            }
            return null;
        }
        static leadOut(e, t = "e_9999", i = !0) {
            y.Instance.onWx ? (b.leadOut(e.id), y.Instance.platform.navigateToMiniProgram({
                appId: e.appid,
                path: e.url,
                extraData: {
                    foo: "bar"
                },
                envVersion: "release",
                success(i) {
                    b.leadOutSuccess(e.id), v.trackEvent(t);
                },
                fail() {
                    i && Laya.Dialog.open(f.EXPROTBOX3_DIALOG, !0);
                }
            })) : y.Instance.isOppo ? (b.leadOut(e.id), y.Instance.platform.navigateToMiniGame({
                pkgName: e.appid,
                path: e.url,
                extraData: {
                    from: "pageA"
                },
                success: function () {
                    b.leadOutSuccess(e.id);
                },
                fail: function (e) { }
            })) : l.msg("");
        }
    }
    B.GameList = [];
    class N {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = {},
                this.rewardedVideoAdStatus = {}, this.rewardedVideoAdLoadStatus = !1, this._onCloseRewardedVideoAd = null,
                this._onLoadRewardedVideoAd = null, this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new N()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        createBannerAd(e) {
            return y.Instance.platform.createBannerAd(e);
        }
        createRewardedVideoAd(e) {
            return y.Instance.platform.createRewardedVideoAd(e);
        }
        initRewardedVideoAd(t = {}) {
            if (e.log("initRewardedVideoAd"), t.adUnitId) {
                e.log("initRewardedVideoAd 创建广告ID"), this.rewardedVideoAdId !== t.adUnitId && (this.rewardedVideoAdLoadStatus = !1);
                let i = t.adUnitId.length;
                i = Math.floor(Math.random() * i), this.rewardedVideoAdId = t.adUnitId[i], void 0 === this.rewardedVideoAdStatus[this.rewardedVideoAdId] && (this.rewardedVideoAdStatus[this.rewardedVideoAdId] = !0),
                    void 0 === this.rewardedVideoAdFailNum[this.rewardedVideoAdId] && (this.rewardedVideoAdFailNum[this.rewardedVideoAdId] = 0);
            }
            this.rewardedVideoAdStatus[this.rewardedVideoAdId] && this.rewardedVideoAdFailNum[this.rewardedVideoAdId] <= 3 && (e.log("initRewardedVideoAd 创建广告"),
                this.rewardedVideoAdCache = y.Instance.platform.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoAdId
                }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd),
                this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(t) {
            e.log("showRewardedVideoAd", N.Instance.rewardedVideoAdLoadStatus), t.before && t.before(),
                N.Instance.rewardedVideoAdLoadStatus ? (N.Instance._onCloseRewardedVideoAd = (e => {
                    t.complete && t.complete(e.isEnded), e.isEnded ? t.success && t.success() : t.fail && t.fail();
                }), N.Instance.rewardedVideoAdCache.onClose(N.Instance.onCloseRewardedVideoAd),
                    N.Instance.rewardedVideoAdCache.show()) : (t.error && t.error(), t.complete && t.complete(!1));
        }
        onCloseRewardedVideoAd(e) {
            N.Instance.rewardedVideoAdCache.offClose(N.Instance.onCloseRewardedVideoAd), N.Instance._onCloseRewardedVideoAd && N.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            e.log("onLoadRewardedVideoAd"), N.Instance.rewardedVideoAdLoadStatus = !0, N.Instance.rewardedVideoAdCache.offLoad(N.Instance.onLoadRewardedVideoAd),
                N.Instance._onLoadRewardedVideoAd && N.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(t) {
            switch (e.log("onErrorRewardedVideoAd res", t), N.Instance.rewardedVideoAdCache.offError(N.Instance.onErrorRewardedVideoAd),
            N.Instance._onErrorRewardedVideoAd && N.Instance._onErrorRewardedVideoAd(), t.errCode) {
                case 1002:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                    N.Instance.rewardedVideoAdStatus[N.Instance.rewardedVideoAdId] = !1;
                    break;

                case 1e3:
                case 1001:
                case 1003:
                case 1004:
                default:
                    N.Instance.rewardedVideoAdFailNum[N.Instance.rewardedVideoAdId]++, N.Instance.setTimeout(() => {
                        N.Instance.initRewardedVideoAd();
                    }, 1e4);
            }
        }
    }
    class x {
        static get Instance() {
            return this._instance || (this._instance = new x()), this._instance;
        }
        onShow() {
            y.Instance.isUc || y.Instance.platform.onShow(e => { });
        }
        static AddPrefab(e, t, i) {
            return Laya.loader.create(e, Laya.Handler.create(i, t)), new Promise((e, t) => {
                try {
                    e("success");
                } catch (e) {
                    t("fail");
                }
            });
        }
        getGoldCoin(e) {
            let t, i = parseFloat(e);
            switch (e.charAt(e.length - 1)) {
                case "T":
                    t = 1e6 * i;
                    break;

                case "K":
                    t = 1e3 * i;
                    break;

                default:
                    t = i;
            }
            return t;
        }
        setGoldCoin(e) {
            let t;
            return t = e > 1e6 ? (e / 1e6).toFixed(1) + "T" : e > 1e3 ? (e / 1e3).toFixed(1) + "K" : e + "";
        }
        toParentPoin(e) {
            let t;
            return (t = Laya.Point.create()).setTo(e.x, e.y), t = e.toParentPoint(t);
        }
        stagePoin(e, t = Laya.stage) {
            let i;
            return (i = Laya.Point.create()).setTo(e.x, e.y), i = e.fromParentPoint(i), i = e.localToGlobal(i, !1, t);
        }
        parentPoin(e, t, i) {
            let a;
            return a = new Laya.Point(t, i), e.globalToLocal(a), a;
        }
        multiply(e, t) {
            let i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.multiply(e, t, i), i;
        }
        angleToRadian(e) {
            return Math.PI / 180 * e;
        }
        radianToAngle(e) {
            return 180 / Math.PI * e;
        }
    }
    class D extends Laya.Script {
        constructor() {
            super(), this.load_id = 0, this.type = 1;
        }
        onEnable() {
            if (this.owner.zOrder = 9999, !B.BannerList || null == B.BannerList || B.BannerList.length <= 0) return this.owner.visible = !1,
                void e.log("bannerlist=" + B.BannerList + " 隐藏广告位导出");
            this.initSize(), this.load_id = Math.floor(Math.random() * B.BannerList.length),
                this.owner.loadImage(B.BannerList[this.load_id].img), Laya.timer.loop(5e3, this, () => {
                    this.load_id++, this.load_id = this.load_id % B.BannerList.length, this.owner.loadImage(B.BannerList[this.load_id].img);
                }), this.owner.on(Laya.Event.CLICK, this, () => {
                    Laya.Browser.onWeiXin && B.leadOut(B.BannerList[this.load_id]);
                });
        }
        initSize() {
            1 == this.type ? (this.owner.height = 234, this.owner.width = 750) : (this.owner.height = 200,
                this.owner.width = 600), this.owner.x = (Laya.stage.width - this.owner.width) / 2,
                this.owner.y = Laya.stage.height - this.owner.height, t.isIphoneX && (this.owner.y -= 30);
        }
    }
    class V {
        constructor() { }
        static init(t = {}) {
            let i = Laya.Browser.window.wx.getSystemInfoSync();
            if (V.curModel = i.model, e.log("当前设备型号", V.curModel), V.windowHeight = i.windowHeight,
                V.windowWidth = i.windowWidth, V.stageHeight = Laya.stage.height, V.stageWidth = Laya.stage.width,
                t.adUnitId && ("string" == typeof t.adUnitId && (t.adUnitId = t.adUnitId.split(",")),
                    e.log("obj.adUnitId", t.adUnitId), V.adUnitIds = t.adUnitId, V.adUnitIds.length)) {
                for (let e of V.adUnitIds) V.adUnitIdFailNum[e] = 0, V.adUnitIdStatus[e] = !0;
                V.curAdUnitId = V.ramdonAdUnitId();
            }
            t.adUnitIdMaxFailNum && (V.adUnitIdFailNum = t.adUnitIdMaxFailNum), t.style && (V.styleCustom = t.style,
                t.style.styleMode && -1 !== V.styleModeList.indexOf(t.style.styleMode) && (V.styleMode = t.style.styleMode)),
                t.interval && (V.interval = t.interval, V.interval < V.intervalMin && (V.interval = V.intervalMin)),
                t.timerStatus && (V.timerStatus = t.timerStatus), V.load(), V.timer && clearInterval(V.timer),
                V.timer = setInterval(() => {
                    V.timerStatus && V.showStatus && (V.timerSecond++, V.timerSecond > V.interval && (V.timerSecond = 0,
                        V.isTimerLoad = !0, V.load()));
                }, 1e3);
        }
        static load() {
            let e;
            V.cache && V.cache.destroy(), V.isTimerLoad ? (e = V.styleCache.style, V.styleHasBottom = V.styleCache.hasBottom,
                V.styleBottomNum = V.styleCache.bottomNum, V.isTimerLoad = !1) : e = V.style;
            let t = Laya.Browser.window.wx;
            V.cache = t.createBannerAd({
                adUnitId: V.ramdonAdUnitId(),
                style: e
            }), V.cache.onLoad(V.onLoad), V.cache.onError(V.onError), V.cache.onResize(V.onResize);
        }
        static show(t = {}, i = null) {
            if (V.isOk && (V.spb = new Laya.Sprite(), V.spb.addComponent(D), V.spb.zOrder = 9999,
                Laya.stage.addChild(V.spb), V.spb.mouseEnabled = !0), V.adUnitIdsCount) {
                if (t.style && (V.styleCustom = t.style, t.style.styleMode && -1 !== V.styleModeList.indexOf(t.style.styleMode) && (V.styleMode = t.style.styleMode)),
                    t.timerStatus && (V.timerStatus = t.timerStatus), t.realtime) V.load(), i && (V._onLoad = (() => {
                        V.cache.show(), i(V.styleStageCur);
                    })); else {
                    t.style && t.style.width && V.stage2windowWidth(t.style.width) !== V.cache.style.width && V.onResize(V.onResize);
                    let a = V.style;
                    V.cache.style.width = a.width, V.cache.style.top = a.top, V.cache.style.left = a.left,
                        t.delay ? (void 0 === t.delayNum && 0 === t.delayNum && (t.delayNum = 1e3), setTimeout(() => {
                            V.showStatus && (V.cache.show(), i && i(V.styleStageCur));
                        }, t.delayNum)) : (V.cache.show(), e.log("--------------------------------------------------", V.styleStageCur),
                            i && i(V.styleStageCur));
                }
                V.showStatus = !0;
            }
        }
        static hide() {
            V.cache && V.cache.hide(), V.isOk && V.spb && V.spb.removeSelf(), V.showStatus = !1;
        }
        static destroy() { }
        static onResize(t) {
            e.log("WxBanner onResize", t, V.styleHasBottom, V.styleBottomNum, V.cache), V.cache.offResize(V.onResize),
                e.log("WxBannerAd.cache.style.top", V.cache.style.top, "|", V.windowHeight, t.height, V.styleBottomNum),
                (-1 != V.curModel.search(/iPhone X/i) || -1 != V.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (V.isIpx = !0),
                V.styleHasBottom && (V.cache.style.top = V.windowHeight - t.height - V.styleBottomNum - (V.isIpx ? 10 : 0) + .1),
                V._onResize && (V._onResize(t), V._onResize = null), V.styleWindowCur = {
                    realHeight: t.height,
                    realWidth: t.width,
                    width: t.width,
                    height: t.height,
                    top: V.cache.style.top,
                    left: V.cache.style.left
                }, e.log("WxBanner onResize", t, V.cache);
        }
        static onLoad() {
            e.log("WxBanner onLoad bannerCache", V.cache), V.loadStatus = !0, V.cache.offLoad(V.onLoad),
                V._onLoad && (V._onLoad(V.cache.style), V._onLoad = null), V.styleWindowCur = {
                    realHeight: V.cache.style.realHeight,
                    realWidth: V.cache.style.realWidth,
                    width: V.cache.style.width,
                    height: V.cache.style.height,
                    top: V.cache.style.top,
                    left: V.cache.style.left
                }, V.showStatus && V.cache.show();
        }
        static onError(e) {
            switch (V.isOk = !0, V.cache.offError(V.onError), e.errCode) {
                case 1002:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                    V.adUnitIdStatus[V.curAdUnitId] = !1;
                    break;

                case 1e3:
                case 1001:
                case 1003:
                case 1004:
                default:
                    V.adUnitIdFailNum[V.curAdUnitId]++, setTimeout(() => {
                        V.load();
                    }, 1e3);
            }
            V._onError && (V._onError(e), V._onError = null);
        }
        static ramdonAdUnitId() {
            return V.adUnitIds.length ? V.adUnitIds[Math.floor(Math.random() * V.adUnitIds.length)] : null;
        }
        static removeCurAdUnitId() {
            V.adUnitIds.length && -1 !== V.adUnitIds.indexOf(V.curAdUnitId) && (-1 === V.adUnitIdsErr.indexOf(V.curAdUnitId) && V.adUnitIdsErr.push(V.curAdUnitId),
                V.adUnitIds.splice(V.adUnitIds.indexOf(V.curAdUnitId), 1)), V.curAdUnitId = null;
        }
        static switchCurAdUnitId(e = null) {
            e && -1 !== V.adUnitIds.indexOf(e) ? V.curAdUnitId = e : V.curAdUnitId = V.ramdonAdUnitId();
        }
        static get adUnitIdsCount() {
            return V.adUnitIds.length;
        }
        static stage2windowWidth(e) {
            return e * V.windowWidth / V.stageWidth;
        }
        static stage2windowHeight(e) {
            return e * V.windowHeight / V.stageHeight;
        }
        static window2stageWidth(e) {
            return e * V.stageWidth / V.windowWidth;
        }
        static window2stageHeight(e) {
            return e * V.stageHeight / V.windowHeight;
        }
        static get styleStageCur() {
            return e.log("---------------------------------------------------"), e.log(V.styleWindowCur),
            {
                realHeight: V.window2stageHeight(V.styleWindowCur.realHeight),
                realWidth: V.window2stageWidth(V.styleWindowCur.realWidth),
                width: V.window2stageWidth(V.styleWindowCur.realWidth),
                height: V.window2stageHeight(V.styleWindowCur.realHeight),
                top: V.window2stageHeight(V.styleWindowCur.top),
                left: V.window2stageWidth(V.styleWindowCur.left)
            };
        }
        static get style() {
            V.styleHasBottom = !1, V.styleBottomNum = 0;
            let t = {};
            switch (t.width = V.styleCustom.width ? V.stage2windowWidth(V.styleCustom.width) : V.windowWidth,
            e.log("设置的宽度", t.width), t.width > V.windowWidth && (t.width = V.windowWidth), t.width < 300 && (t.width = 300),
            V.styleMode) {
                case "none":
                    void 0 !== V.styleCustom.bottom ? (V.styleHasBottom = !0, V.styleBottomNum = V.stage2windowHeight(V.styleCustom.bottom),
                        t.top = V.windowHeight - t.width / 3 - V.styleBottomNum) : void 0 !== V.styleCustom.top ? t.top = V.stage2windowHeight(V.styleCustom.top) : (V.styleHasBottom = !0,
                            t.top = V.windowHeight - t.width / 3), void 0 !== V.styleCustom.center ? (t.left = V.windowWidth / 2 + V.stage2windowWidth(V.styleCustom.center) - t.width / 2,
                                t.left < 0 ? t.left = 0 : t.left > V.windowWidth - t.width && (t.left = V.windowWidth - t.width)) : void 0 !== V.styleCustom.right ? t.left = V.windowWidth - V.stage2windowWidth(V.styleCustom.right) - t.width : void 0 !== V.styleCustom.left ? t.left = V.stage2windowWidth(V.styleCustom.left) : t.left = (V.windowWidth - t.width) / 2;
                    break;

                case "left-top":
                    t.top = 0, t.left = 0;
                    break;

                case "right-top":
                    t.top = 0, t.left = V.windowWidth - t.width;

                case "top":
                case "center-top":
                    t.top = 0, t.left = (V.windowWidth - t.width) / 2;
                    break;

                case "left-bottom":
                    V.styleHasBottom = !0, t.top = V.windowHeight - t.width / 3, t.left = 0;
                    break;

                case "right-bottom":
                    V.styleHasBottom = !0, t.top = V.windowHeight - t.width / 3, t.left = V.windowWidth - t.width;
                    break;

                case "bottom":
                case "center-bottom":
                default:
                    V.styleHasBottom = !0, V.cache && V.loadStatus ? ((-1 != V.curModel.search(/iPhone X/i) || -1 != V.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (V.isIpx = !0),
                        t.top = V.windowHeight - V.cache.style.realHeight - (V.isIpx ? 10 : 0) + .1) : t.top = V.windowHeight - t.width / 3 - (V.isIpx ? 5 : 0) + .1,
                        t.left = (V.windowWidth - t.width) / 2, V.cache ? e.log("banner高度----------", V.cache.style.realWidth, V.cache.style.realHeight) : e.log("banner高度----------", V.cache);
            }
            return V.styleCache = {
                style: t,
                hasBottom: V.styleHasBottom,
                bottomNum: V.styleBottomNum
            }, t;
        }
    }
    V.showStatus = !1, V.loadStatus = !1, V.isOk = !1, V.cache = null, V._onResize = null,
        V._onLoad = null, V._onError = null, V.timerStatus = !1, V.interval = 600, V.intervalMin = 20,
        V.isTimerLoad = !1, V.timerSecond = 0, V.curAdUnitId = null, V.adUnitIds = [], V.adUnitIdsErr = [],
        V.adUnitIdMaxFailNum = 3, V.adUnitIdStatus = {}, V.adUnitIdFailNum = {}, V.curModel = "",
        V.modelList = ["iPhone X", "iPhone XR", "iPhone XS", "iPhone 11", "iPhone XS Max", "iPhone11 Pro"],
        V.isIpx = !1, V.styleWindowCur = {
            realHeight: 0,
            realWidth: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }, V.styleModeList = ["left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom", "top", "bottom"],
        V.styleMode = "center-bottom", V.styleCustom = {}, V.styleCache = {}, V.styleHasBottom = !1,
        V.styleBottomNum = 0;
    class _ {
        constructor() { }
        static init(t = {}) {
            let i = Laya.Browser.window.wx.getSystemInfoSync();
            if (_.curModel = i.model, e.log("当前设备型号", _.curModel), _.windowHeight = i.windowHeight,
                _.windowWidth = i.windowWidth, _.stageHeight = Laya.stage.height, _.stageWidth = Laya.stage.width,
                t.adUnitId && ("string" == typeof t.adUnitId && (t.adUnitId = t.adUnitId.split(",")),
                    e.log("obj.adUnitId", t.adUnitId), _.adUnitIds = t.adUnitId, _.adUnitIds.length)) {
                for (let e of _.adUnitIds) _.adUnitIdFailNum[e] = 0, _.adUnitIdStatus[e] = !0;
                _.curAdUnitId = _.ramdonAdUnitId();
            }
            t.adUnitIdMaxFailNum && (_.adUnitIdFailNum = t.adUnitIdMaxFailNum), t.style && (_.styleCustom = t.style,
                t.style.styleMode && -1 !== _.styleModeList.indexOf(t.style.styleMode) && (_.styleMode = t.style.styleMode)),
                t.interval && (_.interval = t.interval, _.interval < _.intervalMin && (_.interval = _.intervalMin)),
                t.timerStatus && (_.timerStatus = t.timerStatus), _.load(), _.timer && clearInterval(_.timer),
                _.timer = setInterval(() => {
                    _.timerStatus && _.showStatus && (_.timerSecond++, _.timerSecond > _.interval && (_.timerSecond = 0,
                        _.isTimerLoad = !0, _.load()));
                }, 1e3);
        }
        static load() {
            let e;
            _.cache && _.cache.destroy(), _.isTimerLoad ? (e = _.styleCache.style, _.styleHasBottom = _.styleCache.hasBottom,
                _.styleBottomNum = _.styleCache.bottomNum, _.isTimerLoad = !1) : e = _.style;
            let t = Laya.Browser.window.wx;
            _.cache = t.createBannerAd({
                adUnitId: _.ramdonAdUnitId(),
                style: e
            }), _.cache.onLoad(_.onLoad), _.cache.onError(_.onError), _.cache.onResize(_.onResize);
        }
        static show(t = {}, i = null) {
            if (_.isOk && y.Instance.isWx && (_.spb = new Laya.Sprite(), _.spb.addComponent(D),
                _.spb.zOrder = 9999, Laya.stage.addChild(_.spb), _.spb.mouseEnabled = !0), _.adUnitIdsCount) {
                if (t.style && (_.styleCustom = t.style, t.style.styleMode && -1 !== _.styleModeList.indexOf(t.style.styleMode) && (_.styleMode = t.style.styleMode)),
                    t.timerStatus && (_.timerStatus = t.timerStatus), t.realtime) _.load(), i && (_._onLoad = (() => {
                        _.cache.show(), i(_.styleStageCur);
                    })); else {
                    t.style && t.style.width && _.stage2windowWidth(t.style.width) !== _.cache.style.width && _.onResize(_.onResize);
                    let a = _.style;
                    _.cache.style.width = a.width, _.cache.style.top = a.top, _.cache.style.height = a.height,
                        _.cache.style.left = a.left, e.log("显示banner_show", a), t.delay ? (void 0 === t.delayNum && 0 === t.delayNum && (t.delayNum = 1e3),
                            setTimeout(() => {
                                _.showStatus && (_.cache.show(), i && i(_.styleStageCur));
                            }, t.delayNum)) : (_.cache.show(), e.log("--------------------------------------------------", _.styleStageCur),
                                i && i(_.styleStageCur));
                }
                _.showStatus = !0;
            }
        }
        static hide() {
            _.cache && _.cache.hide(), _.isOk && _.spb && _.spb.removeSelf(), _.showStatus = !1;
        }
        static destroy() { }
        static onResize(t) {
            e.log("WxBanner onResize", t, _.styleHasBottom, _.styleBottomNum, _.cache), _.cache.offResize(_.onResize),
                e.log("WxBannerAd2.cache.style.top", _.cache.style.top, "|", _.windowHeight, t.height, _.styleBottomNum),
                (-1 != _.curModel.search(/iPhone X/i) || -1 != _.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (_.isIpx = !0),
                _.styleHasBottom && (_.cache.style.top = _.windowHeight - t.height - _.styleBottomNum - (_.isIpx ? 10 : 0) + .1),
                _._onResize && (_._onResize(t), _._onResize = null), _.styleWindowCur = {
                    realHeight: t.height,
                    realWidth: t.width,
                    width: t.width,
                    height: t.height,
                    top: _.cache.style.top,
                    left: _.cache.style.left
                }, e.log("WxBanner onResize", t, _.cache);
        }
        static onLoad() {
            e.log("WxBanner onLoad bannerCache", _.cache), _.loadStatus = !0, _.cache.offLoad(_.onLoad),
                _._onLoad && (_._onLoad(_.cache.style), _._onLoad = null), _.styleWindowCur = {
                    realHeight: _.cache.style.realHeight,
                    realWidth: _.cache.style.realWidth,
                    width: _.cache.style.width,
                    height: _.cache.style.height,
                    top: _.cache.style.top,
                    left: _.cache.style.left
                }, _.showStatus && _.cache.show();
        }
        static onError(e) {
            switch (_.isOk = !0, _.cache.offError(_.onError), e.errCode) {
                case 1002:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                    _.adUnitIdStatus[_.curAdUnitId] = !1;
                    break;

                case 1e3:
                case 1001:
                case 1003:
                case 1004:
                default:
                    _.adUnitIdFailNum[_.curAdUnitId]++, setTimeout(() => {
                        _.load();
                    }, 1e3);
            }
            _._onError && (_._onError(e), _._onError = null);
        }
        static ramdonAdUnitId() {
            return _.adUnitIds.length ? _.adUnitIds[Math.floor(Math.random() * _.adUnitIds.length)] : null;
        }
        static removeCurAdUnitId() {
            _.adUnitIds.length && -1 !== _.adUnitIds.indexOf(_.curAdUnitId) && (-1 === _.adUnitIdsErr.indexOf(_.curAdUnitId) && _.adUnitIdsErr.push(_.curAdUnitId),
                _.adUnitIds.splice(_.adUnitIds.indexOf(_.curAdUnitId), 1)), _.curAdUnitId = null;
        }
        static switchCurAdUnitId(e = null) {
            e && -1 !== _.adUnitIds.indexOf(e) ? _.curAdUnitId = e : _.curAdUnitId = _.ramdonAdUnitId();
        }
        static get adUnitIdsCount() {
            return _.adUnitIds.length;
        }
        static stage2windowWidth(e) {
            return e * _.windowWidth / _.stageWidth;
        }
        static stage2windowHeight(e) {
            return e * _.windowHeight / _.stageHeight;
        }
        static window2stageWidth(e) {
            return e * _.stageWidth / _.windowWidth;
        }
        static window2stageHeight(e) {
            return e * _.stageHeight / _.windowHeight;
        }
        static get styleStageCur() {
            return e.log("---------------------------------------------------"), e.log(_.styleWindowCur),
            {
                realHeight: _.window2stageHeight(_.styleWindowCur.realHeight),
                realWidth: _.window2stageWidth(_.styleWindowCur.realWidth),
                width: _.window2stageWidth(_.styleWindowCur.realWidth),
                height: _.window2stageHeight(_.styleWindowCur.realHeight),
                top: _.window2stageHeight(_.styleWindowCur.top),
                left: _.window2stageWidth(_.styleWindowCur.left)
            };
        }
        static get style() {
            _.styleHasBottom = !1, _.styleBottomNum = 0;
            let t = {};
            switch (t.width = _.styleCustom.width ? _.stage2windowWidth(_.styleCustom.width) : _.windowWidth,
            t.width > _.windowWidth && (t.width = _.windowWidth), t.width < 300 && (t.width = 300),
            _.styleMode) {
                case "none":
                    void 0 !== _.styleCustom.bottom ? (_.styleHasBottom = !0, _.styleBottomNum = _.stage2windowHeight(_.styleCustom.bottom),
                        t.top = _.windowHeight - t.width / 3 - _.styleBottomNum) : void 0 !== _.styleCustom.top ? t.top = _.stage2windowHeight(_.styleCustom.top) : (_.styleHasBottom = !0,
                            t.top = _.windowHeight - t.width / 3), void 0 !== _.styleCustom.center ? (t.left = _.windowWidth / 2 + _.stage2windowWidth(_.styleCustom.center) - t.width / 2,
                                t.left < 0 ? t.left = 0 : t.left > _.windowWidth - t.width && (t.left = _.windowWidth - t.width)) : void 0 !== _.styleCustom.right ? t.left = _.windowWidth - _.stage2windowWidth(_.styleCustom.right) - t.width : void 0 !== _.styleCustom.left ? t.left = _.stage2windowWidth(_.styleCustom.left) : t.left = (_.windowWidth - t.width) / 2;
                    break;

                case "left-top":
                    t.top = 0, t.left = 0;
                    break;

                case "right-top":
                    t.top = 0, t.left = _.windowWidth - t.width;

                case "top":
                case "center-top":
                    t.top = 0, t.left = (_.windowWidth - t.width) / 2;
                    break;

                case "left-bottom":
                    _.styleHasBottom = !0, t.top = _.windowHeight - t.width / 3, t.left = 0;
                    break;

                case "right-bottom":
                    _.styleHasBottom = !0, t.top = _.windowHeight - t.width / 3, t.left = _.windowWidth - t.width;
                    break;

                case "bottom":
                case "center-bottom":
                default:
                    _.styleHasBottom = !0, _.cache && _.loadStatus ? ((-1 != _.curModel.search(/iPhone X/i) || -1 != _.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (_.isIpx = !0),
                        t.top = _.windowHeight - _.cache.style.realHeight - (_.isIpx ? 5 : 0) + .1) : t.top = _.windowHeight - t.width / 3 - (_.isIpx ? 5 : 0) + .1,
                        t.left = (_.windowWidth - t.width) / 2, e.log("banner高度----------", _.cache && _.cache.style.realHeight);
            }
            return t.height = t.width / 3, _.styleCache = {
                style: t,
                hasBottom: _.styleHasBottom,
                bottomNum: _.styleBottomNum
            }, t;
        }
    }
    _.showStatus = !1, _.loadStatus = !1, _.isOk = !1, _.cache = null, _._onResize = null,
        _._onLoad = null, _._onError = null, _.timerStatus = !1, _.interval = 600, _.intervalMin = 10,
        _.isTimerLoad = !1, _.timerSecond = 0, _.curAdUnitId = null, _.adUnitIds = [], _.adUnitIdsErr = [],
        _.adUnitIdMaxFailNum = 3, _.adUnitIdStatus = {}, _.adUnitIdFailNum = {}, _.curModel = "",
        _.modelList = ["iPhone X", "iPhone XR", "iPhone XS", "iPhone 11", "iPhone XS Max", "iPhone11 Pro"],
        _.isIpx = !1, _.styleWindowCur = {
            realHeight: 0,
            realWidth: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }, _.styleModeList = ["left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom", "top", "bottom"],
        _.styleMode = "center-bottom", _.styleCustom = {}, _.styleCache = {}, _.styleHasBottom = !1,
        _.styleBottomNum = 0;
    class R {
        constructor() {
            this.hadLoad = !1, this.showTime = 1e4, this.MaxLoadTime = 3, this.platformData = null,
                this.showType = 0, this.isShow = !1, this.realHeight = 0, this.top = 0, this.initVideoSuccess = !1,
                this.startTime = 0;
        }
        static get Instance() {
            return this._instance || (this._instance = new R()), this._instance;
        }
        init() {
            y.Instance.onWx && (this.platformData = T, e.log("微信广告", this.platformData), T.videoIds.length > 0 && N.Instance.initRewardedVideoAd({
                adUnitId: T.videoIds
            }), this.initShare(), V.init({
                adUnitId: T.bannerId,
                interval: 30,
                timerStatus: !0,
                style: {
                    width: 300,
                    styleMode: "center-bottom"
                }
            }), _.init({
                adUnitId: T.bannerId,
                interval: 30,
                timerStatus: !0,
                style: {
                    width: 300,
                    styleMode: "left-bottom"
                }
            }));
        }
        showBanner(e) {
            y.Instance.onWx && this.platformData.bannerId && (e && e.type && e.dialog ? (this.showType = e.type,
                this.showBannerDialog = e.dialog, this.isShow = !0, 1 == this.showType ? this.hadLoad && this.bannerAD ? this.showBannerWithRefresh(this.bannerAD) : this.showBannerDialog && B.checkBannerGameList : this.startBannerAD && this.startBannerAD ? this.showBannerWithRefresh(this.startBannerAD) : this.showBannerDialog && B.checkBannerGameList) : console.error("showBanner 参数不正确"));
        }
        hideBanner() {
            y.Instance.onWx && (this.isShow = !1, this.showType = 0, this.showBannerDialog = null,
                this.bannerAD && this.bannerAD.hide(), this.startBannerAD && this.startBannerAD.hide(),
                Laya.timer.clearAll(this));
        }
        showBannerWithRefresh(e) {
            y.Instance.onWx && (e.show(), Laya.timer.clearAll(this), Laya.timer.loop(this.showTime, this, () => {
                this.initBanner(0);
            }));
        }
        initBanner(i = 0) {
            if (!y.Instance.onWx || !this.platformData.bannerId) return;
            let a;
            if (i++, !(a = {
                adUnitId: this.platformData.bannerId,
                style: {
                    left: 0,
                    top: t.gameHeight - 300,
                    width: 750
                },
                adIntervals: 300
            })) return void e.log("wx initBanner bannerObj=null");
            let s = y.Instance.platform.createBannerAd(a);
            s.onError(e => {
                i < this.MaxLoadTime ? this.initBanner(i) : this.isShow && this.bannerAD || (this.hadLoad = !1);
            }), s.onLoad(() => {
                i = 0, this.hadLoad = !0, this.bannerAD && (this.bannerAD.hide(), this.bannerAD.destroy(),
                    this.bannerAD = null), this.bannerAD = s, t.isIphoneX ? this.bannerAD.style.top = y.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight - 50 / t.clientScale : this.bannerAD.style.top = y.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight,
                    this.isShow && 1 == this.showType && this.showBannerWithRefresh(this.bannerAD);
            }), s.onResize(() => {
                se.Instance.setADMidleY(s);
            });
        }
        initShare() {
            y.Instance.isWx && y.Instance.platform.showShareMenu({
                withShareTicket: !0
            }), y.Instance.platform.onShareAppMessage(() => {
                if (y.Instance.onWx) {
                    let e = Math.floor(Math.random() * this.platformData.ShareData.length);
                    return {
                        title: this.platformData.ShareData[e].title,
                        imageUrlId: this.platformData.ShareData[e].id,
                        imageUrl: this.platformData.ShareData[e].url
                    };
                }
            });
        }
        video(e = {}) {
            N.Instance.showRewardedVideoAd({
                complete: () => {
                    e.complete && e.complete();
                },
                success: () => {
                    e.success && e.success();
                },
                fail: () => {
                    e.fail ? e.fail() : l.msg("");
                },
                error: () => {
                    // this.share(e);
                }
            });
        }
        share(e = {}) {
            if (y.Instance.onWx) if (T.ShareData.length > 0) {
                let t = Math.floor(Math.random() * T.ShareData.length), i = {};
                i.title = T.ShareData[t].title, i.imageUrlId = T.ShareData[t].id, i.imageUrl = T.ShareData[t].url,
                    y.Instance.platform.shareAppMessage(i), this.startTime = new Date().getTime(), y.Instance.platform.onShow(() => {
                        new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(),
                            y.Instance.platform.offShow(), x.Instance.onShow();
                    });
            } else {
                let t = {
                    imageUrl: "images/share.jpg"
                };
                y.Instance.platform.shareAppMessage(t), this.startTime = new Date().getTime(), y.Instance.platform.onShow(() => {
                    new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(),
                        y.Instance.platform.offShow(), x.Instance.onShow();
                });
            } else e && e.success && e.success();
        }
    }
    class T { }
    T.videoIds = [""], T.bannerId = "",
        T.ShareTxt = [""], T.ShareData = [{
            title: "。",
            url: "",
            id: ""
        }];
    class M {
        constructor() { }
        static init(t = {}) {
            t.realTime && (this.realTime = t.realTime), M.AppBox && M.AppBox.destroy(), M.AppBox = y.Instance.platform.createAppBox({
                adUnitId: M.adUnitId
            }), M.AppBox && M.AppBox.load(), M.AppBox.onClose(t => {
                e.log("用户关闭了广告", M.callback), M.callback && M.callback();
            });
        }
        static show(e) {
            M.realTime ? M.AppBox.load().then(() => {
                M.AppBox.show().then(() => {
                    e.success && e.success(), M.callback = e.onClose;
                }).catch(() => {
                    e.fail && e.fail();
                });
            }) : M.AppBox.show().then(() => {
                e.success && e.success(), M.callback = e.onClose;
            }).catch(() => {
                e.fail && e.fail();
            });
        }
        static destroy() {
            M.AppBox && M.AppBox.destroy();
        }
    }
    M.adUnitId = "d570233366d1dd0456a79753461b5d2c", M.realTime = !1;
    class E {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = {},
                this.rewardedVideoAdStatus = {}, this.rewardedVideoAdLoadStatus = !1, this._onCloseRewardedVideoAd = null,
                this._onLoadRewardedVideoAd = null, this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new E()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        createBannerAd(e) {
            return y.Instance.platform.createBannerAd(e);
        }
        createRewardedVideoAd(e) {
            return y.Instance.platform.createRewardedVideoAd(e);
        }
        initRewardedVideoAd(t = {}) {
            if (e.log("initRewardedVideoAd"), t.adUnitId) {
                e.log("initRewardedVideoAd 创建广告ID"), this.rewardedVideoAdId !== t.adUnitId && (this.rewardedVideoAdLoadStatus = !1);
                let i = t.adUnitId.length;
                i = Math.floor(Math.random() * i), this.rewardedVideoAdId = t.adUnitId[i], void 0 === this.rewardedVideoAdStatus[this.rewardedVideoAdId] && (this.rewardedVideoAdStatus[this.rewardedVideoAdId] = !0),
                    void 0 === this.rewardedVideoAdFailNum[this.rewardedVideoAdId] && (this.rewardedVideoAdFailNum[this.rewardedVideoAdId] = 0);
            }
            this.rewardedVideoAdStatus[this.rewardedVideoAdId] && this.rewardedVideoAdFailNum[this.rewardedVideoAdId] <= 3 && (e.log("initRewardedVideoAd 创建广告"),
                this.rewardedVideoAdCache = y.Instance.platform.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoAdId
                }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd),
                this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(t) {
            e.log("showRewardedVideoAd", E.Instance.rewardedVideoAdLoadStatus), t.before && t.before(),
                E.Instance.rewardedVideoAdLoadStatus ? (E.Instance._onCloseRewardedVideoAd = (e => {
                    t.complete && t.complete(e.isEnded), e.isEnded ? t.success && t.success() : t.fail && t.fail();
                }), E.Instance.rewardedVideoAdCache.onClose(E.Instance.onCloseRewardedVideoAd),
                    E.Instance.rewardedVideoAdCache.show()) : (t.error && t.error(), t.complete && t.complete(!1));
        }
        onCloseRewardedVideoAd(e) {
            E.Instance.rewardedVideoAdCache.offClose(E.Instance.onCloseRewardedVideoAd), E.Instance._onCloseRewardedVideoAd && E.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            e.log("onLoadRewardedVideoAd"), E.Instance.rewardedVideoAdLoadStatus = !0, E.Instance.rewardedVideoAdCache.offLoad(E.Instance.onLoadRewardedVideoAd),
                E.Instance._onLoadRewardedVideoAd && E.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(t) {
            switch (e.log("onErrorRewardedVideoAd res", t), E.Instance.rewardedVideoAdCache.offError(E.Instance.onErrorRewardedVideoAd),
            E.Instance._onErrorRewardedVideoAd && E.Instance._onErrorRewardedVideoAd(), t.errCode) {
                case 1002:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                    E.Instance.rewardedVideoAdStatus[E.Instance.rewardedVideoAdId] = !1;
                    break;

                case 1e3:
                case 1001:
                case 1003:
                case 1004:
                default:
                    E.Instance.rewardedVideoAdFailNum[E.Instance.rewardedVideoAdId]++, E.Instance.setTimeout(() => {
                        E.Instance.initRewardedVideoAd();
                    }, 1e4);
            }
        }
    }
    class k {
        constructor() { }
        static init(t = {}) {
            let i = Laya.Browser.window.wx.getSystemInfoSync();
            if (k.curModel = i.model, e.log("当前设备型号", k.curModel), k.windowHeight = i.windowHeight,
                k.windowWidth = i.windowWidth, k.stageHeight = Laya.stage.height, k.stageWidth = Laya.stage.width,
                t.adUnitId && ("string" == typeof t.adUnitId && (t.adUnitId = t.adUnitId.split(",")),
                    e.log("obj.adUnitId", t.adUnitId), k.adUnitIds = t.adUnitId, k.adUnitIds.length)) {
                for (let e of k.adUnitIds) k.adUnitIdFailNum[e] = 0, k.adUnitIdStatus[e] = !0;
                k.curAdUnitId = k.ramdonAdUnitId();
            }
            t.adUnitIdMaxFailNum && (k.adUnitIdFailNum = t.adUnitIdMaxFailNum), t.style && (k.styleCustom = t.style,
                t.style.styleMode && -1 !== k.styleModeList.indexOf(t.style.styleMode) && (k.styleMode = t.style.styleMode)),
                t.interval && (k.interval = t.interval, k.interval < k.intervalMin && (k.interval = k.intervalMin)),
                t.timerStatus && (k.timerStatus = t.timerStatus), k.load(), k.timer && clearInterval(k.timer),
                k.timer = setInterval(() => {
                    k.timerStatus && k.showStatus && (e.log("[QqBannerAd].timerSecond", k.timerSecond),
                        k.timerSecond++, k.timerSecond > k.interval && (k.timerSecond = 0, k.isTimerLoad = !0,
                            k.load()));
                }, 1e3);
        }
        static load() {
            let e;
            k.cache && k.cache.destroy(), k.isTimerLoad ? (e = k.styleCache.style, k.styleHasBottom = k.styleCache.hasBottom,
                k.styleBottomNum = k.styleCache.bottomNum, k.isTimerLoad = !1) : e = k.style;
            let t = Laya.Browser.window.wx;
            k.cache = t.createBannerAd({
                adUnitId: k.ramdonAdUnitId(),
                style: e
            }), k.cache.onLoad(k.onLoad), k.cache.onError(k.onError), k.cache.onResize(k.onResize);
        }
        static show(t = {}, i = null) {
            if (k.adUnitIdsCount) {
                if (t.style && (k.styleCustom = t.style, t.style.styleMode && -1 !== k.styleModeList.indexOf(t.style.styleMode) && (k.styleMode = t.style.styleMode)),
                    t.timerStatus && (k.timerStatus = t.timerStatus), t.realtime) k.load(), i && (k._onLoad = (() => {
                        k.cache.show(), i(k.styleStageCur);
                    })); else {
                    t.style && t.style.width && k.stage2windowWidth(t.style.width) !== k.cache.style.width && k.onResize(k.onResize);
                    let a = k.style;
                    k.cache.style.width = a.width, k.cache.style.top = a.top, k.cache.style.left = a.left,
                        t.delay ? (void 0 === t.delayNum && 0 === t.delayNum && (t.delayNum = 1e3), setTimeout(() => {
                            k.showStatus && (k.cache.show(), i && i(k.styleStageCur));
                        }, t.delayNum)) : (k.cache.show(), e.log("--------------------------------------------------", k.styleStageCur),
                            i && i(k.styleStageCur));
                }
                k.showStatus = !0;
            }
        }
        static hide() {
            k.cache && k.cache.hide(), k.showStatus = !1;
        }
        static destroy() { }
        static onResize(t) {
            e.log("WxBanner onResize", t, k.styleHasBottom, k.styleBottomNum, k.cache), k.cache.offResize(k.onResize),
                e.log("QqBannerAd.cache.style.top", k.cache.style.top, "|", k.windowHeight, t.height, k.styleBottomNum),
                (-1 != k.curModel.search(/iPhone X/i) || -1 != k.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (k.isIpx = !0),
                k.styleHasBottom && (k.cache.style.top = k.windowHeight - t.height - k.styleBottomNum - (k.isIpx ? 25 : 0) + .1),
                k._onResize && (k._onResize(t), k._onResize = null), k.styleWindowCur = {
                    realHeight: k.cache.style.realHeight,
                    realWidth: k.cache.style.realWidth,
                    width: k.cache.style.width,
                    height: k.cache.style.height,
                    top: k.cache.style.top,
                    left: k.cache.style.left
                }, e.log("WxBanner onResize", t, k.cache);
        }
        static onLoad() {
            e.log("WxBanner onLoad bannerCache", k.cache), k.loadStatus = !0, k.cache.offLoad(k.onLoad),
                k._onLoad && (k._onLoad(k.cache.style), k._onLoad = null), k.styleWindowCur = {
                    realHeight: k.cache.style.realHeight,
                    realWidth: k.cache.style.realWidth,
                    width: k.cache.style.width,
                    height: k.cache.style.height,
                    top: k.cache.style.top,
                    left: k.cache.style.left
                }, k.showStatus && k.cache.show();
        }
        static onError(e) {
            switch (k.cache.offError(k.onError), e.errCode) {
                case 1002:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                    k.adUnitIdStatus[k.curAdUnitId] = !1;
                    break;

                case 1e3:
                case 1001:
                case 1003:
                case 1004:
                default:
                    k.adUnitIdFailNum[k.curAdUnitId]++, setTimeout(() => {
                        k.load();
                    }, 1e3);
            }
            k._onError && (k._onError(e), k._onError = null);
        }
        static ramdonAdUnitId() {
            return k.adUnitIds.length ? k.adUnitIds[Math.floor(Math.random() * k.adUnitIds.length)] : null;
        }
        static removeCurAdUnitId() {
            k.adUnitIds.length && -1 !== k.adUnitIds.indexOf(k.curAdUnitId) && (-1 === k.adUnitIdsErr.indexOf(k.curAdUnitId) && k.adUnitIdsErr.push(k.curAdUnitId),
                k.adUnitIds.splice(k.adUnitIds.indexOf(k.curAdUnitId), 1)), k.curAdUnitId = null;
        }
        static switchCurAdUnitId(e = null) {
            e && -1 !== k.adUnitIds.indexOf(e) ? k.curAdUnitId = e : k.curAdUnitId = k.ramdonAdUnitId();
        }
        static get adUnitIdsCount() {
            return k.adUnitIds.length;
        }
        static stage2windowWidth(e) {
            return e * k.windowWidth / k.stageWidth;
        }
        static stage2windowHeight(e) {
            return e * k.windowHeight / k.stageHeight;
        }
        static window2stageWidth(e) {
            return e * k.stageWidth / k.windowWidth;
        }
        static window2stageHeight(e) {
            return e * k.stageHeight / k.windowHeight;
        }
        static get styleStageCur() {
            return e.log("---------------------------------------------------"), e.log(k.styleWindowCur),
            {
                realHeight: k.window2stageHeight(k.styleWindowCur.realHeight),
                realWidth: k.window2stageWidth(k.styleWindowCur.realWidth),
                width: k.window2stageWidth(k.styleWindowCur.realWidth),
                height: k.window2stageHeight(k.styleWindowCur.realHeight),
                top: k.window2stageHeight(k.styleWindowCur.top),
                left: k.window2stageWidth(k.styleWindowCur.left)
            };
        }
        static get style() {
            k.styleHasBottom = !1, k.styleBottomNum = 0;
            let e = {};
            switch (e.width = k.styleCustom.width ? k.stage2windowWidth(k.styleCustom.width) : k.windowWidth,
            e.width > k.windowWidth && (e.width = k.windowWidth), e.width < 300 && (e.width = 300),
            k.styleMode) {
                case "none":
                    void 0 !== k.styleCustom.bottom ? (k.styleHasBottom = !0, k.styleBottomNum = k.stage2windowHeight(k.styleCustom.bottom),
                        e.top = k.windowHeight - e.width / 3 - k.styleBottomNum) : void 0 !== k.styleCustom.top ? e.top = k.stage2windowHeight(k.styleCustom.top) : (k.styleHasBottom = !0,
                            e.top = k.windowHeight - e.width / 3), void 0 !== k.styleCustom.center ? (e.left = k.windowWidth / 2 + k.stage2windowWidth(k.styleCustom.center) - e.width / 2,
                                e.left < 0 ? e.left = 0 : e.left > k.windowWidth - e.width && (e.left = k.windowWidth - e.width)) : void 0 !== k.styleCustom.right ? e.left = k.windowWidth - k.stage2windowWidth(k.styleCustom.right) - e.width : void 0 !== k.styleCustom.left ? e.left = k.stage2windowWidth(k.styleCustom.left) : e.left = (k.windowWidth - e.width) / 2;
                    break;

                case "left-top":
                    e.top = 0, e.left = 0;
                    break;

                case "right-top":
                    e.top = 0, e.left = k.windowWidth - e.width;

                case "top":
                case "center-top":
                    e.top = 0, e.left = (k.windowWidth - e.width) / 2;
                    break;

                case "left-bottom":
                    k.styleHasBottom = !0, e.top = k.windowHeight - e.width / 3, e.left = 0;
                    break;

                case "right-bottom":
                    k.styleHasBottom = !0, e.top = k.windowHeight - e.width / 3, e.left = k.windowWidth - e.width;
                    break;

                case "bottom":
                case "center-bottom":
                default:
                    k.styleHasBottom = !0, k.cache && k.loadStatus ? ((-1 != k.curModel.search(/iPhone X/i) || -1 != k.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (k.isIpx = !0),
                        e.top = k.windowHeight - k.cache.style.realHeight - (k.isIpx ? 25 : 0) + .1) : e.top = k.windowHeight - e.width / 3 + .1,
                        e.left = (k.windowWidth - e.width) / 2;
            }
            return k.styleCache = {
                style: e,
                hasBottom: k.styleHasBottom,
                bottomNum: k.styleBottomNum
            }, e;
        }
    }
    k.showStatus = !1, k.loadStatus = !1, k.cache = null, k._onResize = null, k._onLoad = null,
        k._onError = null, k.timerStatus = !1, k.interval = 600, k.intervalMin = 10, k.isTimerLoad = !1,
        k.timerSecond = 0, k.curAdUnitId = null, k.adUnitIds = [], k.adUnitIdsErr = [],
        k.adUnitIdMaxFailNum = 3, k.adUnitIdStatus = {}, k.adUnitIdFailNum = {}, k.curModel = "",
        k.modelList = ["iPhone X", "iPhone XR", "iPhone XS", "iPhone 11", "iPhone XS Max", "iPhone11 Pro"],
        k.isIpx = !1, k.styleWindowCur = {
            realHeight: 0,
            realWidth: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }, k.styleModeList = ["left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom", "top", "bottom"],
        k.styleMode = "center-bottom", k.styleCustom = {}, k.styleCache = {}, k.styleHasBottom = !1,
        k.styleBottomNum = 0;
    class O {
        constructor() { }
        static init(t = {}) {
            let i = y.Instance.platform.getSystemInfoSync().windowWidth;
            if (O.adUnitId = t.adUnitId, t.isRealtime ? O.isRealtime = t.isRealtime : O.isRealtime = !1,
                t.realtime && (O.interval = t.interval), t.style && t.style.width) {
                let e = t.style.width;
                e = e * i / Laya.stage.width, O.bWidth = e, O.bWidth < 300 && (O.bWidth = 300);
            } else O.bWidth = i;
            O.load(), O.cache.onLoad(t => {
                e.log("banner广告创建完成1", t);
            }), e.log("banner广告创建完成", O.cache);
        }
        static load() {
            O.cache && O.cache.destroy();
            let i = y.Instance.platform.getSystemInfoSync(), a = (i.windowWidth, i.windowHeight);
            O.cache = y.Instance.platform.createBannerAd({
                adUnitId: O.adUnitId,
                adIntervals: O.adIntervals,
                style: {
                    width: O.bWidth,
                    top: a - O.bWidth / 16 * 9 - (t.isIphoneX ? 20 : 0),
                    left: 0
                }
            }), O.cache.onError(t => {
                e.log("WxBanner广告错误", t);
            }), O.cache.onResize(i => {
                e.log("尺寸变化了", i.width, i.height), O.cache.style.top = a - i.height - (t.isIphoneX ? 20 : 0),
                    O.cache.style.left = 0;
            });
        }
        static show(t = {}) {
            O.cache && (O.isRealtime ? (O.load(), O.isLoad = !0, O.cache.onLoad(function () {
                O.isLoad = !1, O.cache.show().then(() => { }).catch(() => {
                    O.cache.show();
                });
            })) : O.cache.show().then(() => {
                O.errorNum = 0, O._setTime && clearInterval(O._setTime), O._setTime = setInterval(() => {
                    e.log("WxBannerAdNew._alltime", O._alltime), O._alltime++, O._alltime >= O.interval && (O._alltime = 0,
                        O.load(), O.isLoad = !0, O.cache.onLoad(function () {
                            O.isLoad = !1, O.cache.show();
                        }));
                }, 1e3);
            }).catch(t => {
                O.errorNum++, O.errorNum > 3 || (O.show(), e.log("广告组件出现问题", t));
            }));
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                O.isLoad ? this.delteHide() : O.hide();
            });
        }
        static hide() {
            this.isLoad ? O.delteHide() : (O._setTime && clearInterval(O._setTime), O.cache && O.cache.hide());
        }
    }
    O.cache = null, O.interval = 30, O._alltime = 0, O._setTime = null, O.adIntervals = 30,
        O.isRealtime = !1, O.styleCache = {}, O.errorNum = 0, O.isLoad = !1;
    class U {
        constructor() {
            this.MaxLoadTime = 3, this.realHeight = 0, this.top = 0, this.initVideoSuccess = !1,
                this.startTime = 0, this.isShowInterstitialSuccess = !1;
        }
        static get Instance() {
            return this._instance || (this._instance = new U()), this._instance;
        }
        init() {
            this.platformData = new W(), E.Instance.initRewardedVideoAd({
                adUnitId: this.platformData.videoIds
            }), this.initShare(), e.log("QqAdUtil---\x3einitShare finish"), k.init({
                adUnitId: this.platformData.bannerId,
                interval: 10,
                timerStatus: !0,
                style: {
                    width: 300,
                    styleMode: "center-bottom"
                }
            }), O.init({
                adUnitId: this.platformData.bannerId,
                interval: 10,
                timerStatus: !0,
                style: {
                    width: 300,
                    styleMode: "left-bottom"
                }
            }), e.log("QqAdUtil---\x3einitBanner finish"), M.init({
                realTime: !0
            }), e.log("QqAdUtil---\x3einitQQBox finish");
        }
        initBanner(i = 0) {
            let a;
            if (i++, !(a = {
                adUnitId: this.platformData.bannerId,
                style: {
                    left: 0,
                    top: (t.gameHeight - 300) / t.clientScale,
                    width: 750 / t.clientScale
                },
                adIntervals: 300
            })) return void e.log("qq initBanner bannerObj=null");
            let s = y.Instance.platform.createBannerAd(a);
            s.onError(t => {
                i < this.MaxLoadTime ? this.initBanner(i) : e.log("banner 加载失败");
            }), s.onLoad(() => {
                i = 0, this.bannerAD = s, t.isIphoneX ? this.bannerAD.style.top = y.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight - 50 / t.clientScale : this.bannerAD.style.top = y.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight,
                    se.Instance.setADMidleY(this.bannerAD.style), e.log("banner load success");
            });
        }
        initShare() {
            y.Instance.onQq && y.Instance.platform.showShareMenu({
                withShareTicket: !0
            }), this.platformData.shareData && this.platformData.shareData.length > 0 && y.Instance.platform.onShareAppMessage(() => {
                let e = Math.floor(Math.random() * this.platformData.shareData.length);
                return {
                    title: this.platformData.shareData[e].title,
                    imageUrlId: this.platformData.shareData[e].id,
                    imageUrl: this.platformData.shareData[e].url
                };
            });
        }
        showBanner(e = {}) {
            k.show();
        }
        hideBanner() {
            k.hide();
        }
        video(e = {}) {
            E.Instance.showRewardedVideoAd({
                success: () => {
                    e.success && e.success();
                },
                fail: () => {
                    e.fail ? e.fail() : l.msg("");
                },
                error: () => {
                    l.msg("");
                }
            });
        }
        share(e = {}) {
            if (y.Instance.isQq) if (this.platformData.shareData.length > 0) {
                let t = Math.floor(Math.random() * this.platformData.shareData.length), i = {};
                i.title = this.platformData.shareData[t].title, i.imageUrlId = this.platformData.shareData[t].id,
                    i.imageUrl = this.platformData.shareData[t].url, y.Instance.platform.shareAppMessage(i),
                    this.startTime = new Date().getTime(), y.Instance.platform.onShow(() => {
                        new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(),
                            y.Instance.platform.offShow(), x.Instance.onShow();
                    });
            } else {
                let t = {
                    imageUrl: "images/share.jpg"
                };
                y.Instance.platform.shareAppMessage(t), this.startTime = new Date().getTime(), y.Instance.platform.onShow(() => {
                    new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(),
                        y.Instance.platform.offShow(), x.Instance.onShow();
                });
            } else e && e.success && e.success();
        }
        initInterstitialAd(t = !1) {
            e.log("initInterstitialAd"), this.interstitialAd ? this.interstitialAd.show().then(() => {
                e.log("插屏广告显示成功1"), this.isShowInterstitialSuccess = !0;
            }).catch(t => {
                e.log("插屏广告显示失败1"), this.isShowInterstitialSuccess || (this.adOptions && this.adOptions.fail && this.adOptions.fail(),
                    this.adOptions = null);
            }) : (this.interstitialAd = y.Instance.platform.createInterstitialAd({
                adUnitId: this.platformData.interstitialId
            }), this.interstitialAd.onLoad(() => {
                t && this.interstitialAd.show().then(() => {
                    e.log("插屏广告显示成功2"), this.isShowInterstitialSuccess = !0;
                }).catch(t => {
                    e.log("插屏广告显示失败2"), this.isShowInterstitialSuccess || (this.adOptions && this.adOptions.fail && this.adOptions.fail(),
                        this.adOptions = null);
                });
            }));
        }
        showInterstitialAd(t) {
            y.Instance.onQq && (this.adOptions = t, y.Instance.platform && y.Instance.platform.createInterstitialAd ? (this.isShowInterstitialSuccess = !1,
                this.initInterstitialAd(!0)) : (e.log("未找到 createInterstitialAd 方法"), this.adOptions && this.adOptions.fail && this.adOptions.fail()));
        }
    }
    U.StartDialogShowAdTime = 2250;
    class W {
        constructor() {
            this.appid = "1110320198", this.videoIds = ["88e9ae197bfa92a3a0d32ea645a689e4"],
                this.bannerId = "e15177296b8ad21b70ff5112b5333b29", this.interstitialId = "", this.shareTxt = ["愣着干什么，英雄救美啊"],
                this.shareData = [{
                    title: "",
                    url: "",
                    id: ""
                }];
        }
    }
    class P {
        static init() {
            P.initVideo(), P.initBanner(), P.InitNative();
        }
        static initVideo() {
            P.videoAd = qg.createRewardedVideoAd({
                posId: P.VIVO_VIDEO_ID2[P.videoAdNum]
            }), P.videoAd.onLoad(() => {
                P.hadLoaded = !0;
            }), P.videoAd.onError(e => {
                l.msg(""), P.hadLoaded = !1, L.RestAll(), null != P.adOptions && null != P.adOptions && P.adOptions.fail && P.adOptions.fail(),
                    Laya.timer.currTimer - P.videoTime > 6e4 ? (P.videoTime = Laya.timer.currTimer,
                        P.videoAdNum++, P.videoAdNum >= P.VIVO_VIDEO_ID2.length && (P.videoAdNum = 0), P.videoAd = qg.createRewardedVideoAd({
                            posId: P.VIVO_VIDEO_ID2[P.videoAdNum]
                        })) : Laya.timer.once(6e4, this, () => {
                            P.videoAd.load();
                        });
            }), P.videoAd.onClose(e => {
                P.videoTime = Laya.timer.currTimer, P.hadLoaded = !1, L.RestAll(), e.isEnded ? null != P.adOptions && null != P.adOptions && P.adOptions.success && P.adOptions.success() : null != P.adOptions && null != P.adOptions && P.adOptions.fail && P.adOptions.fail(),
                    Laya.timer.once(6e4, this, () => {
                        P.videoAd.load();
                    });
            });
        }
        static video(e = {}) {
            P.adOptions = e, P.hadLoaded ? (P.videoAd.show(), L.StopAll()) : (l.msg(""),
                null != P.adOptions && null != P.adOptions && P.adOptions.fail && P.adOptions.fail());
        }
        static initBanner() {
            P.bannerNum++, P.bannerNum >= P.VIVO_BANNER_ID2.length && (P.bannerNum = 0), P.bannerAd = qg.createBannerAd({
                posId: P.VIVO_BANNER_ID2[P.bannerNum],
                style: {}
            }), P.bannerAd.onLoad(() => {
                P.bannerAd;
            }), P.bannerAd.onClose(e => {
                Laya.timer.once(2e4, this, () => {
                    P.initBanner();
                });
            }), P.bannerAd.onError(t => {
                e.log("banner加载失败", t), Laya.timer.once(2e4, this, () => {
                    P.initBanner();
                });
            });
        }
        static showBanner() {
            P.bannerAd ? P.bannerAd.show() : (this.initBanner(), P.bannerAd.onLoad(() => {
                null != P.bannerAd && P.bannerAd.show();
            }));
        }
        static hideBanner() {
            P.bannerAd && P.bannerAd.hide();
        }
        static initInterstitial() {
            P.InterstitialAd = y.Instance.platform.createInterstitialAd({
                posId: P.VIVO_Interstitial_ID
            }), P.InterstitialAd.onLoad(() => {
                P.InterstitialLoaded = !0;
            }), P.InterstitialAd.onError(e => {
                P.InterstitialLoaded = !1, Laya.timer.once(1e4, this, () => {
                    P.initInterstitial();
                });
            }), P.InterstitialAd.onClose(() => {
                P.InterstitialLoaded = !1, Laya.timer.once(1e4, this, () => {
                    P.initInterstitial();
                });
            });
        }
        static showInterstitial() {
            if (P.InterstitialLoaded && null != P.InterstitialAd) {
                let e = P.InterstitialAd.show();
                e && e.then(() => { }).catch(e => {
                    Laya.timer.once(1e4, this, () => {
                        P.initInterstitial();
                    });
                });
            }
        }
        static InitNative() {
            let e = Laya.Browser.window.qg;
            P.Native_ID.length <= 0 || (P.NativeNum++, P.NativeNum >= P.Native_ID.length && (P.NativeNum = 0),
                P.NativeAd && (P.NativeAd.offLoad(), P.NativeAd.offError()), P.NativeAd = e.createNativeAd({
                    adUnitId: P.Native_ID[P.NativeNum]
                }), Laya.timer.once(200, this, () => {
                    P.NativeAd.load();
                }), P.NativeAd.onLoad(e => {
                    P.NativeLoad = !0;
                    let t = e.adList;
                    this.nativeList = [];
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e], a = new H();
                        a.adId = i.adId, a.clickBtnTxt = i.clickBtnTxt, a.creativeType = i.creativeType,
                            a.desc = i.desc, a.icon = i.icon, a.imgUrlList = i.imgUrlList, a.interactionType = i.interactionType,
                            a.logoUrl = i.logoUrl, a.title = i.title, this.nativeList.push(a);
                    }
                }), P.NativeAd.onError(e => {
                    l.msg(""), P.NativeLoad = !1, this.InitNative();
                }));
        }
        static showNative() {
            y.Instance.isVivo && P.NativeLoad && Laya.Dialog.open(f.NativeDIALOG, !1, () => { });
        }
        static ReportAdShow() {
            y.Instance.isVivo && P.NativeAd.reportAdShow({
                adId: P.nativeList[0].adId.toString()
            });
        }
        static RestNativeInit() {
            y.Instance.isVivo && (P.NativeLoad = !1, P.InitNative());
        }
        static ReportAdClick() {
            y.Instance.isVivo && P.NativeAd.reportAdClick({
                adId: P.nativeList[0].adId.toString()
            });
        }
    }
    P.VIVO_VIDEO_ID = "7bf50de63294470f81e868dafe3c2c83", P.VIVO_VIDEO_ID2 = ["7bf50de63294470f81e868dafe3c2c83", "7bf50de63294470f81e868dafe3c2c83"],
        P.VIVO_BANNER_ID = "618aad8bf8c64d15a45b13abe8096cbf", P.VIVO_BANNER_ID2 = ["618aad8bf8c64d15a45b13abe8096cbf", "618aad8bf8c64d15a45b13abe8096cbf"],
        P.VIVO_Interstitial_ID = "", P.Native_ID = ["aca78d8fcb7e404c91189b2ff8bb3705", "aca78d8fcb7e404c91189b2ff8bb3705"],
        P.videoAdNum = 0, P.videoTime = 0, P.bannerNum = 0, P.NativeNum = 0, P.hadLoaded = !1,
        P.isFrist = !0, P.InterstitialLoaded = !1, P.NativeLoad = !1, P.nativeList = [];
    class H {
        toString() {
            return "adId=" + this.adId + "\ntitle=" + this.title + "\ndesc=" + this.desc + "\nicon=" + this.icon + "\nlogoUrl=" + this.logoUrl + "\nclickBtnTxt=" + this.clickBtnTxt + "\ncreativeType=" + this.creativeType + "\ninteractionType=" + this.interactionType + "\nimgUrlList=" + this.imgUrlList;
        }
    }
    class G {
        constructor() { }
        static init(t = {}) {
            G.adUnitId = t.adUnitId, G.appId = t.appSid, t.isRealtime ? G.isRealtime = t.isRealtime : G.isRealtime = !1,
                t.realtime && (G.realtime = t.realtime), t.style && t.style.width ? this.bannerWidth = t.style.width < 300 * Laya.Browser.pixelRatio ? 300 * Laya.Browser.pixelRatio : t.style.width : this.bannerWidth = Laya.Browser.width,
                G.load(), G.isLoadOK = !1, G.cache.onLoad(t => {
                    G.isLoadOK = !0, G.errorNum = 0, e.log("banner广告创建完成1", t);
                });
        }
        static load() {
            let t = y.Instance.platform.getSystemInfoSync(), i = t.windowWidth, a = t.windowHeight, s = this.bannerWidth / Laya.Browser.pixelRatio;
            G.cache && (G.cache.offError(), G.cache.offLoad(), G.cache.destroy()), G.cache = y.Instance.platform.createBannerAd({
                adUnitId: G.adUnitId,
                appSid: G.appId,
                style: {
                    width: s,
                    top: a - s / 13 * 5 - (Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2 ? 15 : 0),
                    left: (i - s) / 2
                }
            }), G.cache.onError(t => {
                if (G.isLoadOK = !1, 3010012 == t.errCode) e.log("小游戏启动前5秒不允许展示banner广告"); else {
                    if (G.errorNum > 3) return;
                    G.load(), G.errorNum++;
                }
            }), G.cache.onResize(t => {
                e.log("banner尺寸变化", t.width, t.height), G.cache.style.top = a - t.height - (Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2 ? 15 : 0),
                    G.cache.style.left = (i - t.width) / 2;
            });
        }
        static show(t = {}) {
            G.cache && (G.isRealtime ? (G.load(), G.isLoadOK = !1, G.cache.onLoad(function () {
                G.isLoadOK = !0, G.cache.show().then(() => { }).catch(() => {
                    G.cache.show();
                });
            })) : G.cache.show().then(() => {
                G.errorNum = 0, G._setTime && clearInterval(G._setTime), G._setTime = setInterval(() => {
                    e.log("BdBannerAd._alltime", G._alltime), G._alltime++, G._alltime >= G.realtime && (G._alltime = 0,
                        G.load(), G.isLoadOK = !1, G.cache.onLoad(function () {
                            G.isLoadOK = !0, G.cache.show();
                        }));
                }, 1e3);
            }).catch(t => {
                e.log("广告组件出现问题", t), G.load();
            }));
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                G.isLoadOK ? G.hide() : this.delteHide();
            });
        }
        static hide() {
            G.cache && (this.isLoadOK ? (G._setTime && clearInterval(G._setTime), G.cache && G.cache.hide()) : G.delteHide());
        }
    }
    G.cache = null, G.realtime = 30, G._alltime = 0, G._setTime = null, G.adIntervals = 30,
        G.isRealtime = !1, G.styleCache = {}, G.errorNum = 0, G.isLoadOK = !1, G.minWidth = 300,
        G.bannerWidth = 750;
    class F {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAppSid = "", this.rewardedVideoAdCache = null,
                this.rewardedVideoAdFailNum = 0, this.rewardedVideoAdMaxNum = 3, this.rewardedVideoAdStatus = !1,
                this.videoIsSound = !0, this._onCloseRewardedVideoAd = null, this._onLoadRewardedVideoAd = null,
                this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new F()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        initRewardedVideoAd(t = {}) {
            e.log("initRewardedVideoAd"), t.adUnitId && (e.log("initRewardedVideoAd 创建广告ID"),
                this.rewardedVideoAdId = t.adUnitId, this.rewardedVideoAppSid = t.appSid), this.rewardedVideoAdFailNum < this.rewardedVideoAdMaxNum && (e.log("initRewardedVideoAd 创建广告"),
                    this.rewardedVideoAdCache = y.Instance.platform.createRewardedVideoAd({
                        adUnitId: this.rewardedVideoAdId,
                        appSid: this.rewardedVideoAppSid
                    }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd),
                    this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(t) {
            Laya.LocalStorage.getItem("sound_key") ? this.videoIsSound = !1 : (this.videoIsSound = !0,
                L.StopAll()), e.log("showRewardedVideoAd", F.Instance.rewardedVideoAdStatus), t.before && t.before(),
                F.Instance.rewardedVideoAdStatus ? (F.Instance._onCloseRewardedVideoAd = (e => {
                    this.videoIsSound && L.RestAll(), t.complete && t.complete(e.isEnded), e.isEnded ? t.success && t.success() : t.fail && t.fail();
                }), F.Instance.rewardedVideoAdCache.onClose(F.Instance.onCloseRewardedVideoAd),
                    F.Instance.rewardedVideoAdCache.show()) : (t.error ? t.error() : l.msg(""),
                        t.complete && t.complete(!1), this.videoIsSound && L.RestAll());
        }
        onCloseRewardedVideoAd(e) {
            F.Instance.rewardedVideoAdCache.offClose(F.Instance.onCloseRewardedVideoAd), F.Instance._onCloseRewardedVideoAd && F.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            e.log("百度视频加载完成"), F.Instance.rewardedVideoAdStatus = !0, F.Instance.rewardedVideoAdCache.offLoad(F.Instance.onLoadRewardedVideoAd),
                F.Instance._onLoadRewardedVideoAd && F.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(t) {
            switch (e.log("onErrorRewardedVideoAd res", t), F.Instance.rewardedVideoAdCache.offError(F.Instance.onErrorRewardedVideoAd),
            F.Instance._onErrorRewardedVideoAd && F.Instance._onErrorRewardedVideoAd(), t.errCode) {
                case 1002:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                    F.Instance.rewardedVideoAdStatus = !1;
                    break;

                case 1e3:
                case 1001:
                case 1003:
                case 1004:
                default:
                    F.Instance.rewardedVideoAdFailNum++, F.Instance.setTimeout(() => {
                        F.Instance.initRewardedVideoAd(), e.log("视频重新加载", F.Instance.rewardedVideoAdFailNum);
                    }, 5e3);
            }
        }
    }
    class z {
        constructor() {
            this.videoId = "7230153", this.bannerId = "7168299", this.appSid = "eb6aea35";
        }
        static get Instance() {
            return this._instance || (this._instance = new z()), this._instance;
        }
        init() {
            G.init({
                adUnitId: this.bannerId,
                appSid: this.appSid,
                isRealtime: !1,
                realtime: 20,
                style: {
                    width: 600
                }
            }), F.Instance.initRewardedVideoAd({
                adUnitId: this.videoId,
                appSid: this.appSid
            });
        }
    }
    class X {
        constructor() { }
        static init(t = {}) {
            X.adUnitId = t.adUnitId, t.isRealtime ? X.isRealtime = t.isRealtime : X.isRealtime = !1,
                t.realtime && (X.realtime = t.realtime), X.load(), X.cache.onLoad(t => {
                    e.log("banner广告创建完成1", t);
                }), e.log("banner广告创建完成", X.cache);
        }
        static load() {
            let i = y.Instance.platform.getSystemInfoSync(), a = i.windowWidth, s = i.windowHeight;
            X.cache && X.cache.destroy(), X.cache = y.Instance.platform.createBannerAd({
                adUnitId: X.adUnitId,
                adIntervals: X.adIntervals,
                style: {
                    width: 180,
                    top: s - 101.25 - (t.isIphoneX ? 20 : 0),
                    left: (a - 180) / 2
                }
            }), X.cache.onError(t => {
                e.log("banner广告错误", t);
            }), X.cache.onResize(i => {
                e.log(i.width, i.height), X.cache.style.top = s - i.height - (t.isIphoneX ? 20 : 0),
                    X.cache.style.left = (a - i.width) / 2;
            });
        }
        static show(t = {}) {
            X.isRealtime ? (X.load(), X.isLoad = !0, X.cache.onLoad(function () {
                X.isLoad = !1, X.cache.show().then(() => { }).catch(() => {
                    X.cache.show();
                });
            })) : X.cache.show().then(() => {
                X.errorNum = 0, X._setTime && clearInterval(X._setTime), X._setTime = setInterval(() => {
                    e.log("TtBannerAd._alltime", X._alltime), X._alltime++, X._alltime >= X.realtime && (X._alltime = 0,
                        X.load(), X.isLoad = !0, X.cache.onLoad(function () {
                            X.isLoad = !1, X.cache.show();
                        }));
                }, 1e3);
            }).catch(t => {
                X.errorNum++, X.errorNum > 3 || (X.show(), e.log("广告组件出现问题", t));
            });
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                X.isLoad ? this.delteHide() : X.hide();
            });
        }
        static hide() {
            this.isLoad ? X.delteHide() : (X._setTime && clearInterval(X._setTime), X.cache && X.cache.hide());
        }
    }
    X.cache = null, X.realtime = 30, X._alltime = 0, X._setTime = null, X.adIntervals = 30,
        X.isRealtime = !1, X.styleCache = {}, X.errorNum = 0, X.isLoad = !1;
    class q {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = {},
                this.rewardedVideoAdStatus = {}, this.rewardedVideoAdLoadStatus = !1, this._onCloseRewardedVideoAd = null,
                this._onLoadRewardedVideoAd = null, this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new q()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        createBannerAd(e) {
            return y.Instance.platform.createBannerAd(e);
        }
        createRewardedVideoAd(e) {
            return y.Instance.platform.createRewardedVideoAd(e);
        }
        initRewardedVideoAd(t = {}) {
            if (e.log("initRewardedVideoAd"), t.adUnitId) {
                e.log("initRewardedVideoAd 创建广告ID"), this.rewardedVideoAdId !== t.adUnitId && (this.rewardedVideoAdLoadStatus = !1);
                let i = t.adUnitId.length;
                i = Math.floor(Math.random() * i), this.rewardedVideoAdId = t.adUnitId[i], void 0 === this.rewardedVideoAdStatus[this.rewardedVideoAdId] && (this.rewardedVideoAdStatus[this.rewardedVideoAdId] = !0),
                    void 0 === this.rewardedVideoAdFailNum[this.rewardedVideoAdId] && (this.rewardedVideoAdFailNum[this.rewardedVideoAdId] = 0);
            }
            this.rewardedVideoAdStatus[this.rewardedVideoAdId] && this.rewardedVideoAdFailNum[this.rewardedVideoAdId] <= 3 && (e.log("initRewardedVideoAd 创建广告"),
                this.rewardedVideoAdCache = y.Instance.platform.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoAdId
                }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd),
                this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(t) {
            e.log("showRewardedVideoAd", q.Instance.rewardedVideoAdLoadStatus), t.before && t.before(),
                q.Instance.rewardedVideoAdLoadStatus ? (q.Instance._onCloseRewardedVideoAd = (e => {
                    t.complete && t.complete(e.isEnded), e.isEnded ? t.success && t.success() : t.fail && t.fail();
                }), q.Instance.rewardedVideoAdCache.onClose(q.Instance.onCloseRewardedVideoAd),
                    q.Instance.rewardedVideoAdCache.show()) : (t.error && t.error(), t.complete && t.complete(!1));
        }
        onCloseRewardedVideoAd(e) {
            q.Instance.rewardedVideoAdCache.offClose(q.Instance.onCloseRewardedVideoAd), q.Instance._onCloseRewardedVideoAd && q.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            e.log("onLoadRewardedVideoAd"), q.Instance.rewardedVideoAdLoadStatus = !0, q.Instance.rewardedVideoAdCache.offLoad(q.Instance.onLoadRewardedVideoAd),
                q.Instance._onLoadRewardedVideoAd && q.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(t) {
            switch (e.log("onErrorRewardedVideoAd res", t), q.Instance.rewardedVideoAdCache.offError(q.Instance.onErrorRewardedVideoAd),
            q.Instance._onErrorRewardedVideoAd && q.Instance._onErrorRewardedVideoAd(), t.errCode) {
                case 1002:
                case 1005:
                case 1006:
                case 1007:
                case 1008:
                    q.Instance.rewardedVideoAdStatus[q.Instance.rewardedVideoAdId] = !1;
                    break;

                case 1e3:
                case 1001:
                case 1003:
                case 1004:
                default:
                    q.Instance.rewardedVideoAdFailNum[q.Instance.rewardedVideoAdId]++, q.Instance.setTimeout(() => {
                        q.Instance.initRewardedVideoAd();
                    }, 1e4);
            }
        }
    }
    class Q {
        constructor() { }
        static init() {
            Q.recorder = y.Instance.platform.getGameRecorderManager();
        }
        static start(t = 120) {
            Q.recorder.onStart(t => {
                Q.isLp = !0, e.log("录屏开始");
            }), Q.recorder.start({
                duration: t
            }), Q.recorderTime = 0, Q._time = setInterval(() => {
                Q.recorderTime++;
            }, 1e3);
        }
        static stop() {
            clearInterval(Q._time), Q.recorder.onStop(t => {
                Q.isLp = !1, e.log("录屏结束"), Q.videoPath = t.videoPath;
            }), Q.recorder.stop();
        }
    }
    Q.recorderTime = 0, Q.isLp = !1;
    class K {
        constructor() { }
        static init() {
            y.Instance.platform.showShareMenu({
                withShareTicket: !0
            }), K.onShareAppMessage(function (e) {
                return {
                    title: K.title,
                    imageUrl: K._url
                };
            });
        }
        static onShareAppMessage(e) {
            y.Instance.platform.onShareAppMessage(e);
        }
        static shareAppMessage(e) {
            y.Instance.platform.shareAppMessage(e);
        }
        static share(t) {
            let i;
            Q.recorderTime < 4 ? l.msg("") : t.videoPath ? "video" === t.channel ? (K.shareAppMessage({
                channel: "video",
                title: t.title ? t.title : K.title,
                desc: t.desc ? t.desc : "",
                imageUrl: t.imageUrl ? t.imageUrl : K._url,
                templateId: K._id,
                query: t.query ? t.query : "",
                extra: {
                    videoPath: t.videoPath,
                    videoTopics: t.videoTopics ? t.videoTopics : [""]
                },
                success(e) {
                    i = e.videoId, t.success && t.success();
                },
                fail(e) {
                    t.fail && t.fail(e);
                },
                error(e) {
                    t.error ? t.error(e) : l.msg("");
                }
            }), y.Instance.platform.navigateToVideoView({
                videoId: i,
                success: t => {
                    e.log("done");
                },
                fail: t => {
                    e.log("视频跳转失败", t), 1006 === t.errCode && y.Instance.platform.showToast({
                        title: "something wrong with your network"
                    });
                }
            })) : K.shareAppMessage({
                templateId: K._id,
                title: t.title ? t.title : K.title,
                desc: t.desc ? t.desc : "",
                imageUrl: t.imageUrl ? t.imageUrl : K._url,
                query: t.query ? t.query : "",
                success() {
                    t.success && t.success();
                },
                fail(e) {
                    t.fail && t.fail();
                }
            }) : l.msg("");
        }
    }
    K._url = "",
        K.title = "", K._id = "";
    class Y {
        constructor() {
            this.MAX_TIME = 2, this.shareId = "cbhrendgpm532970gb", this.bannerId = "1nee7g3aa35d2ao4fk",
                this.videoIds = ["13qf6o43qg6j2impin"], this.game_key = "tt8224f4991d1eb3c3",
                this.videoPath = "";
        }
        static get Instance() {
            return this._instance || (this._instance = new Y()), this._instance;
        }
        init() {
            y.Instance.isTt && (Q.init(), X.init({
                adUnitId: this.bannerId,
                isRealtime: !1,
                realtime: 60
            }), K.init(), y.Instance.platform.createRewardedVideoAd && q.Instance.initRewardedVideoAd({
                adUnitId: this.videoIds
            }));
        }
        showBanner(e = {}) {
            X.show();
        }
        hideBanner() {
            X.hide();
        }
        video(e = {}) {
            q.Instance.showRewardedVideoAd({
                success: () => {
                    e.success && e.success();
                },
                fail: () => {
                    e.fail ? e.fail() : l.msg("");
                },
                error: () => {
                    e.error ? e.error() : l.msg("");
                }
            });
        }
    }
    class j {
        constructor() { }
        static init(e = {}) {
            this.load();
        }
        static load() {
            this.isLoad = !1, j.VideoAd = y.Instance.platform.createRewardVideoAd(), j.VideoAd.load(),
                j.onLoad(), j.onError();
        }
        static onLoad() {
            j.VideoAd.onLoad(), j.VideoAd.onLoad(e => {
                this.errorNum = 0, this.isLoad = !0;
            });
        }
        static onError() {
            j.VideoAd.onError(), j.VideoAd.onError(t => {
                this.isLoad = !1, j.errorNum++, e.log("Uc视频广告创建失败" + j.errorNum, t), j.errorNum >= j.errorMax || j.load();
            });
        }
        static show(t) {
            this.isLoad ? j.VideoAd.show().then(() => {
                j.onClose(t);
            }).catch(i => {
                e.log("Uc播放视频广告失败", i), t.error ? t.error() : l.msg(""), t.complete && t.complete();
            }) : (t.error ? t.error() : l.msg(""), t.complete && t.complete());
        }
        static onClose(e) {
            j.VideoAd.offClose(), j.VideoAd.onClose(t => {
                e.complete && e.complete(), t && t.isEnded ? e.success && e.success() : e.fail && e.fail();
            });
        }
    }
    j.VideoAd = null, j.errorNum = 0, j.errorMax = 3, j.isLoad = !1;
    class J {
        constructor() { }
        static init(e = {}) {
            e.isRealtime ? J.isRealtime = e.isRealtime : J.isRealtime = !1, e.realtime && (J.realtime = e.realtime),
                J.load();
        }
        static load() {
            this.isLoad = !1;
            let t = y.Instance.platform.getSystemInfoSync();
            if ("string" == typeof t) try {
                t = JSON.parse(t);
            } catch (e) { }
            e.log("UC获取设备信息", t);
            let i = t.windowWidth, a = t.windowHeight;
            J.cache && J.cache.destroy(), J.cache = y.Instance.platform.createBannerAd({
                style: {
                    width: i,
                    height: .12 * a,
                    bottom: 0,
                    left: 0,
                    gravity: 7
                }
            }), J.cache.onLoad(t => {
                e.log("Ucbanner广告创建完成", t), this.errorNum = 0, this.isLoad = !0;
            }), J.onError(), J.onLoad();
        }
        static onLoad(e = !1) {
            J.cache.onLoad(t => {
                this.errorNum = 0, this.isLoad = !0, e && J.cache.show();
            });
        }
        static onError() {
            J.cache.onError(t => {
                this.isLoad = !1, J.errorNum++, e.log("Ucbanner广告创建失败" + J.errorNum, t), J.errorNum >= J.errorMax || this.load();
            });
        }
        static show(t = {}) {
            J.isRealtime ? (J.load(), J.onLoad(!0)) : (J.cache.show(), J._setTime && clearInterval(J._setTime),
                J._setTime = setInterval(() => {
                    e.log("UcBannerAd._alltime", J._alltime), J._alltime++, J._alltime >= J.realtime && (J._alltime = 0,
                        J.load(), J.onLoad(!0));
                }, 1e3));
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                J.isLoad ? J.hide() : this.delteHide();
            });
        }
        static hide() {
            this.isLoad ? (J._setTime && clearInterval(J._setTime), J.cache && J.cache.hide()) : J.delteHide();
        }
    }
    J.cache = null, J.realtime = 30, J._alltime = 0, J._setTime = null, J.isRealtime = !1,
        J.errorNum = 0, J.errorMax = 3, J.isLoad = !1;
    class Z {
        constructor() {
            this.Clientid = "8d8b9874743f4564a78479ea53907d9f  ", this.Clientkey = "4553bfcc366c4835925ccdae1321c074",
                this.appid = "7dacaab4b23a4535948e95dd0ede7d83";
        }
        static get Instance() {
            return this._instance || (this._instance = new Z()), this._instance;
        }
        init() {
            e.log("初始化UC广告"), J.init({
                isRealtime: !1,
                realtime: 30
            }), j.init();
        }
    }
    class $ {
        static init() {
            $.initAD(), $.initVideo(), $.initBanner(), $.InitNative(), $.loadDc(), e.log("初始化原生广告");
        }
        static loadDc() {
            b.getGameList();
        }
        static initAD() {
            Laya.Browser.window.qg.initAdService({
                appId: $.APP_ID,
                isDebug: !0,
                success: function (t) {
                    e.log("oppo initAD success");
                },
                fail: function (t) {
                    e.log("oppo initAD fail:" + t.code + t.msg);
                },
                complete: function (t) {
                    e.log("oppo initAD complete");
                }
            });
        }
        static initVideo() {
            $.VIDEO_ID.length <= 0 || ($.videoNum++, $.videoNum >= $.VIDEO_ID.length && ($.videoNum = 0),
                $.videoAd && ($.videoAd.offLoad(), $.videoAd.offClose(), $.videoAd.offError()),
                $.videoAd = y.Instance.platform.createRewardedVideoAd({
                    posId: $.VIDEO_ID[$.videoNum]
                }), $.videoAd.onLoad(() => {
                    this.loadTime = 0, $.videoAd.show();
                }), $.videoAd.onVideoStart(() => { }), $.videoAd.onError(t => {
                    e.log("oppo video onError:", t), l.msg("");
                }), $.videoAd.onClose(t => {
                    e.log("oppo video onClose:", t.isEnded), t.isEnded ? $.adOptions.success() : $.adOptions.fail ? $.adOptions.fail() : l.msg("");
                }));
        }
        static video(e = {}) {
            $.adOptions = e, $.videoAd.load();
        }
        static initBanner() {
            let t = 200 * Laya.Browser.window.qg.getSystemInfoSync().windowHeight / 1334;
            e.log("banner高度", t), $.BANNER_ID.length <= 0 || ($.bannerNum++, $.bannerNum >= $.BANNER_ID.length && ($.bannerNum = 0),
                $.bannerAd = y.Instance.platform.createBannerAd({
                    posId: $.BANNER_ID[$.bannerNum]
                }));
        }
        static showBanner() {
            $.bannerAd ? $.bannerAd.show() : ($.initBanner(), Laya.timer.once(100, this, () => {
                $.showBanner();
            }));
        }
        static hideBanner() {
            Laya.timer.clearAll(this), $.bannerAd && $.bannerAd.hide();
        }
        static InitInterstitial() {
            let e = Laya.Browser.window.qg;
            $.Interstitial_ID.length <= 0 || ($.InterstitialNum++, $.InterstitialNum >= $.Interstitial_ID.length && ($.InterstitialNum = 0),
                $.InterstitialAd = e.createInterstitialAd({
                    adUnitId: $.Interstitial_ID[$.InterstitialNum]
                }), Laya.timer.once(200, this, () => {
                    $.InterstitialAd.load();
                }), $.InterstitialAd.onLoad(() => {
                    $.InterstitialLoaded = !0;
                }), $.InterstitialAd.onError(e => {
                    $.InterstitialLoaded = !1, Laya.timer.once(1e4, this, () => {
                        $.InitInterstitial();
                    });
                }), $.InterstitialAd.onClose(() => {
                    $.InterstitialLoaded = !1, $.InitInterstitial();
                }));
        }
        static showInterstitial() {
            if ($.InterstitialLoaded && null != $.InterstitialAd) {
                let e = $.InterstitialAd.show();
                e && e.then(() => { }).catch(e => {
                    Laya.timer.once(1e4, this, () => {
                        $.InitInterstitial();
                    });
                });
            }
        }
        static InitNative() {
            let t = Laya.Browser.window.qg;
            $.Native_ID.length <= 0 || ($.NativeNum++, $.NativeNum >= $.Native_ID.length && ($.NativeNum = 0),
                $.NativeAd && ($.NativeAd.offLoad(), $.NativeAd.offError()), $.NativeAd = t.createNativeAd({
                    adUnitId: $.Native_ID[$.NativeNum]
                }), Laya.timer.once(500, this, () => {
                    $.NativeAd.load();
                }), $.NativeAd.onLoad(t => {
                    $.NativeLoad = !0;
                    let i = t.adList;
                    this.nativeList = [];
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e], a = new ee();
                        a.adId = t.adId, a.clickBtnTxt = t.clickBtnTxt, a.creativeType = t.creativeType,
                            a.desc = t.desc, a.icon = t.icon, a.imgUrlList = t.imgUrlList, a.interactionType = t.interactionType,
                            a.logoUrl = t.logoUrl, a.title = t.title, this.nativeList.push(a);
                    }
                    for (let t in this.nativeList[0]) e.log("原生广告" + t + " " + this.nativeList[0][t]);
                }), $.NativeAd.onError(() => {
                    e.log("原生广告加载错误"), $.NativeLoad = !1, Laya.timer.once(1e3, this, () => {
                        this.InitNative();
                    });
                }));
        }
        static showNative() {
            y.Instance.isOppo && $.NativeLoad && Laya.Dialog.open(f.NativeOppoDIALOG, !1, () => { });
        }
        static ReportAdShow() {
            y.Instance.isOppo && $.NativeLoad && $.NativeAd.reportAdShow({
                adId: $.nativeList[0].adId
            });
        }
        static RestNativeInit() {
            y.Instance.isOppo && ($.NativeAd.destroy(), $.NativeLoad = !1, $.InitNative());
        }
        static ReportAdClick() {
            y.Instance.isOppo && $.NativeLoad && $.NativeAd.reportAdClick({
                adId: $.nativeList[0].adId.toString()
            });
        }
    }
    $.VIDEO_ID = ["224673", "224673"], $.BANNER_ID = ["224659", "224659"], $.Native_ID = ["224668", "224668"],
        $.Interstitial_ID = [""], $.APP_ID = "30353879", $.videoNum = 0, $.bannerNum = 0,
        $.NativeNum = 0, $.InterstitialNum = 0, $.loadTime = 0, $.hadShowBanner = !1, $.InterstitialLoaded = !1,
        $.NativeLoad = !1, $.nativeList = [];
    class ee {
        toString() {
            return "adId=" + this.adId + "\ntitle=" + this.title + "\ndesc=" + this.desc + "\nicon=" + this.icon + "\nlogoUrl=" + this.logoUrl + "\nclickBtnTxt=" + this.clickBtnTxt + "\ncreativeType=" + this.creativeType + "\ninteractionType=" + this.interactionType + "\nimgUrlList=" + this.imgUrlList;
        }
    }
    class te {
        constructor() { }
        static init(t = {}) {
            te.adUnitId = t.adUnitId, t.isRealtime ? te.isRealtime = t.isRealtime : te.isRealtime = !1,
                t.realtime && (te.realtime = t.realtime), t.style && t.style.width ? this.bannerWidth = t.style.width < 300 * y.Instance.xsb ? 300 * y.Instance.xsb : t.style.width : this.bannerWidth = Laya.Browser.width,
                e.log("banner广告信息1", te.adUnitId), te.load(), te.isLoadOK = !1, te.cache.onLoad(t => {
                    te.isLoadOK = !0, te.errorNum = 0, e.log("banner广告创建完成1", t);
                });
        }
        static load() {
            e.log("魅族设备像素比列", y.Instance.xsb, y.Instance.platform.getSystemInfoSync().screenHeight, y.Instance.platform.getSystemInfoSync().screenWidth);
            let t = y.Instance.platform.getSystemInfoSync().screenHeight, i = y.Instance.platform.getSystemInfoSync().screenWidth, a = y.Instance.platform.getSystemInfoSync().screenWidth;
            a *= .4;
            this.bannerWidth, y.Instance.xsb;
            te.cache && (te.cache.offError(), te.cache.offLoad()), te.cache = y.Instance.platform.createBannerAd({
                adUnitId: te.adUnitId,
                style: {
                    width: a,
                    top: t - a / 6.7,
                    left: (i - a) / 2
                }
            }), te.cache.onError(t => {
                e.log("banner广告加载失败", t), te.isLoadOK = !1, te.errorNum > 3 ? te.errorNum = 0 : Laya.timer.once(1e3, this, () => {
                    te.errorNum++, te.load();
                });
            }), te.cache.onResize(t => {
                e.log("Banner 尺寸改变", t);
                let a = qg.getSystemInfoSync().screenHeight;
                te.cache.top = a - t.height, te.cache.style.left = (i - t.width) / 2, te.cache.style.width = t.width,
                    te.cache.style.height = t.height;
            }), te.cache.onClose(() => {
                e.log("banner广告关闭");
            });
        }
        static show(t = {}) {
            if (e.log("显示魅族banner"), te.cache) if (te.isRealtime) te.load(), te.isLoadOK = !1,
                te.cache.onLoad(function () {
                    te.isLoadOK = !0, te.cache.show();
                }); else if (te.isLoadOK) te.cache.show(), te.errorNum = 0, te._setTime && clearInterval(te._setTime),
                    te._setTime = setInterval(() => {
                        te._alltime++, te._alltime >= te.realtime && (te._alltime = 0, te.load(), te.isLoadOK = !1,
                            te.cache.onLoad(function () {
                                te.isLoadOK = !0, te.cache.show();
                            }));
                    }, 1e3); else {
                if (te.errorNum > 3) return void (te.errorNum = 0);
                Laya.timer.once(3e3, this, () => {
                    te.errorNum++, this.show();
                });
            } else {
                if (te.errorNum > 3) return void (te.errorNum = 0);
                this.init(), Laya.timer.once(3e3, this, () => {
                    te.errorNum++, this.show();
                });
            }
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                te.isLoadOK ? te.hide() : this.delteHide();
            });
        }
        static hide() {
            te.cache && (this.isLoadOK ? (te._setTime && clearInterval(te._setTime), te.cache && te.cache.hide()) : te.delteHide());
        }
    }
    te.cache = null, te.realtime = 30, te._alltime = 0, te._setTime = null, te.adIntervals = 30,
        te.isRealtime = !1, te.styleCache = {}, te.errorNum = 0, te.isLoadOK = !1, te.minWidth = 300,
        te.bannerWidth = 750;
    class ie {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = 0,
                this.rewardedVideoAdMaxNum = 3, this.rewardedVideoAdStatus = !1, this.videoIsSound = !0;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new ie()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        initRewardedVideoAd(t = {}) {
            e.log("initRewardedVideoAd"), t.adUnitId && (e.log("initRewardedVideoAd 创建广告ID"),
                this.rewardedVideoAdId = t.adUnitId), this.rewardedVideoAdFailNum < this.rewardedVideoAdMaxNum && (e.log("initRewardedVideoAd 创建广告", this.rewardedVideoAdId),
                    this.rewardedVideoAdCache = y.Instance.platform.createRewardedVideoAd({
                        adUnitId: this.rewardedVideoAdId
                    }), this.load());
        }
        load() {
            this.rewardedVideoAdCache.offLoad(), this.rewardedVideoAdCache.offError(), this.rewardedVideoAdCache.load(),
                this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd);
        }
        onLoadRewardedVideoAd() {
            e.log("视频 广告加载成功"), ie.Instance.rewardedVideoAdStatus = !0, ie.Instance.rewardedVideoAdFailNum = 0;
        }
        onErrorRewardedVideoAd(t) {
            if (e.log("魅族视频加载错误", t), ie.Instance.rewardedVideoAdStatus = !1, ie.Instance.rewardedVideoAdFailNum++,
                ie.Instance.rewardedVideoAdFailNum > ie.Instance.rewardedVideoAdMaxNum) return !1;
            Laya.timer.once(1e3, ie.Instance, ie.Instance.load);
        }
        showRewardedVideoAd(t) {
            this.rewardedVideoAdStatus ? (Laya.LocalStorage.getItem("sound_key") ? this.videoIsSound = !1 : (this.videoIsSound = !0,
                L.StopAll()), t.before && t.before(), this.rewardedVideoAdCache.show(), this.rewardedVideoAdStatus = !1,
                e.log("魅族显示激励视频加载成功"), this.rewardedVideoAdCache.onClose(() => {
                    this.videoIsSound && L.RestAll(), Laya.timer.once(500, this, () => {
                        t.complete && t.complete(), t.success && t.success(), t.fail && t.fail();
                    }), this.rewardedVideoAdCache.offClose(), this.load();
                })) : l.msg("");
        }
    }
    class ae {
        constructor() {
            this.videoId = "AmCjixam", this.bannerId = "o8i4I7e9";
        }
        static get Instance() {
            return this._instance || (this._instance = new ae()), this._instance;
        }
        init() {
            te.init({
                adUnitId: this.bannerId,
                isRealtime: !1,
                realtime: 60
            }), ie.Instance.initRewardedVideoAd({
                adUnitId: this.videoId
            });
        }
    }
    class se {
        constructor() {
            this.bannerStyle = null, this.ADMidleY = 0, this.hadInit = !1, this.showType = 0;
        }
        static get Instance() {
            return this._instance || (this._instance = new se()), this._instance;
        }
        init() {
            switch (y.Instance.platformName) {
                case y.Instance.Wx:
                    y.Instance.onWx && R.Instance.init();
                    break;

                case y.Instance.Qq:
                    y.Instance.onQq && U.Instance.init();
                    break;

                case y.Instance.Oppo:
                    y.Instance.onOppo && $.init();
                    break;

                case y.Instance.Vivo:
                    y.Instance.onVivo && P.init();
                    break;

                case y.Instance.Bd:
                    y.Instance.onBd && z.Instance.init();
                    break;

                case y.Instance.Tt:
                    y.Instance.onTt && Y.Instance.init();
                    break;

                case y.Instance.Uc:
                    y.Instance.onUc && Z.Instance.init();
                    break;

                case y.Instance.Mz:
                    y.Instance.onMz && ae.Instance.init();
                    break;

                case y.Instance.Web:
                    b.getGameList();
            }
            this.hadInit = !0, x.Instance.onShow();
        }
        showBanner(e = {}) {
            if (this.hadInit) switch (y.Instance.platformName) {
                case y.Instance.Wx:
                    V.show();
                    break;

                case y.Instance.Qq:
                    k.show();
                    break;

                case y.Instance.Tt:
                    Y.Instance.showBanner();
                    break;

                case y.Instance.Oppo:
                    $.showBanner();
                    break;

                case y.Instance.Vivo:
                    P.showBanner();
                    break;

                case y.Instance.Bd:
                    break;

                case y.Instance.Uc:
                    J.show();
                    break;

                case y.Instance.Mz:
            }
        }
        hideBanner() {
            if (this.hadInit) switch (y.Instance.platformName) {
                case y.Instance.Wx:
                    V.hide();
                    break;

                case y.Instance.Qq:
                    k.hide();
                    break;

                case y.Instance.Tt:
                    Y.Instance.hideBanner();
                    break;

                case y.Instance.Oppo:
                    $.hideBanner();
                    break;

                case y.Instance.Vivo:
                    P.hideBanner();
                    break;

                case y.Instance.Bd:
                    G.hide();
                    break;

                case y.Instance.Uc:
                    J.hide();
                    break;

                case y.Instance.Mz:
                    break;

                default:
                    y.Instance.platform.hideBannerAd();
            }
        }
        showVideo(e = {}) {
            platform.getInstance().showReward(() => {
                e.success && e.success();
            }, () => {
                e.fail && e.fail();
            })
        }
        share(e = {}) {
            platform.getInstance().showReward(() => {
                e.success && e.success();
            }, () => {
                e.fail && e.fail();
            })
        }
        setADMidleY(i) {
            if (i) {
                this.bannerStyle = i, e.log("ADMidleY---\x3e bannerInfo ：", i);
                let a = t.gameHeight - i.height / 2 * t.clientScale;
                e.log("ADMidleY---\x3e y =", a), a >= t.gameHeight && (a = t.gameHeight - 150),
                    this.ADMidleY = a, e.log("ADMidleY---\x3e ADMidleY =", this.ADMidleY);
            } else this.ADMidleY = t.gameHeight - 150;
        }
        getADMidleY() {
            let i = 0 == this.ADMidleY ? this.ADMidleY = t.gameHeight - 150 : this.ADMidleY;
            return e.log("ADMidleY---\x3e getADMidleY :", i), i;
        }
        getADBannerInfo() {
            return this.bannerStyle;
        }
    }
    class ne extends Laya.Script {
        constructor() {
            super(...arguments), this.aldPage = "BaseDialog";
        }
        onEnable() {
            this.aldPage = this.owner.url.substring(this.owner.url.lastIndexOf("/"), this.owner.url.lastIndexOf(".scene")),
                this.owner.width = Laya.stage.width, this.owner.height = Laya.stage.height, this.owner.left = 0,
                this.owner.top = 0, this.owner.openedCallBack(e => {
                    this.closeFun = e;
                }), this.initData(), this.findView(), this.initView(), this.screenAdaptation();
        }
        onStart() {
            A.upload(this.aldPage);
        }
        showBoxMask() {
            this.boxMask = this.owner.getChildByName("_mask"), this.boxMask.visible = !0;
        }
        hideBoxMask() {
            this.boxMask = this.owner.getChildByName("_mask"), this.boxMask.visible = !1;
        }
        showBox() {
            i.IsMisLead && y.Instance.isQq && Laya.timer.once(i.BoxTime, this, () => {
                M.show({
                    succsee: () => { },
                    fail: () => { },
                    onClose: () => { }
                });
            });
        }
        showBoxOrInter() {
            i.IsMisLead && y.Instance.isQq && Laya.timer.once(i.BoxTime, this, () => {
                Math.random() < -1 || M.show({
                    succsee: () => { },
                    fail: () => { },
                    onClose: () => { }
                });
            });
        }
        onDisable() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this), Laya.timer.clearAll(this.owner),
                Laya.Tween.clearAll(this.owner), se.Instance.hideBanner();
        }
        onDestroy() { }
        startAni(e, t) {
            let i = this.owner[e];
            i && i.play(null, t);
        }
        showBottomBanner(e = null) {
            se.Instance.showBanner({
                type: 1,
                dialog: this.owner
            });
        }
        setNotMisLeadStyle(e) {
            if (se.Instance.showBanner({
                showType: 1,
                dialog: this.owner
            }), e) {
                e.visible = !1, e instanceof Laya.Label ? (e.fontSize = 30, e.alpha = .7) : e instanceof Laya.Box ? e.alpha = 1 : e.alpha = .7;
                let t = e.parent;
                e.x = (t.width - e.width) / 2, Laya.timer.once(1e3, this, () => {
                    e.visible = !0;
                });
            }
        }
        setMisLeadStyle(e) {
            if (e) {
                let t = e.x, i = e.y, a = e.parent, s = new Laya.Point(t, i), n = a.localToGlobal(s, !0), o = se.Instance.getADMidleY() - (n.y - i);
                e.y = o, e.visible = !0, e.alpha = 1, e instanceof Laya.Label && (e.fontSize = 36,
                    e.bold = !0), e.x = (a.width - e.width) / 2, Laya.timer.clearAll(this), Laya.timer.once(1500, this, () => {
                        Laya.Tween.to(e, {
                            y: i
                        }, 500, null, null, 200), se.Instance.showBanner({
                            showType: 1,
                            dialog: this.owner
                        });
                    });
            } else se.Instance.showBanner({
                showType: 1,
                dialog: this.owner
            });
        }
    }
    class oe extends ne {
        constructor() {
            super(), this._numAll = 0, this._numOnce = 0, this._timeOnce = 1e3, this._numDjs = 10,
                this.isClick = !0, this.isShowBanner = !1;
        }
        initData() {
            V.hide(), this.isClick = !0, this.owner.openedCallBack(e => {
                this.closeFun = e;
            });
        }
        findView() {
            this.box = this.owner.getChildByName("Box"), this.img = this.box.getChildByName("bxBox").getChildByName("img"),
                this.time = this.box.getChildByName("time"), this.djs = this.box.getChildByName("djs"),
                this.btn = this.owner.getChildByName("btn"), this.ani = this.btn.getChildByName("Ani"),
                this.bar = this.box.getChildByName("bar");
        }
        initView() {
            y.Instance.isQq && (this.btn.bottom -= 50), this.bar.value = 0, Laya.Browser.onWeiXin && !Laya.Browser.onQQMiniGame && (this.time.visible = !1,
                this.djs.visible = !1), this.btn.on(Laya.Event.CLICK, this, this.bxClick);
        }
        screenAdaptation() { }
        bxClick() {
            if (this.isClick) {
                this.ani.visible = !1, L.play("click"), this.btn.scale(1.2, 1.2), Laya.timer.once(100, this, () => {
                    this.btn.scale(1, 1);
                }), this._numAll++, this._numOnce++, this.bar.value += 1 / 8;
                let e = .5 + .3 * Math.random();
                y.Instance.isBd ? this.bar.value >= .9 && se.Instance.showVideo({
                    complete: () => {
                        this.owner.close(), this.closeFun();
                    }
                }) : this.bar.value >= e && (this.showBottomBanner(), this.onPass());
            }
        }
        countdown() {
            this._numDjs--, this.time.text = this._numDjs + "秒", this._numDjs < 1 && (this.owner.close(),
                Laya.Dialog.open(f.TRYEND_DIALOG, !0, () => {
                    Laya.Dialog.open(f.PASS_DIALOG, !0);
                }));
        }
        onBxStatus(e) {
            this.img.skin = ["public/img_bx1.png", "public/img_bx2.png", "public/img_bx3.png"][e];
        }
        onFrequency() {
            this._numOnce++;
        }
        onPass() {
            this.isClick = !1, w.getCoin(100), l.msg("Coin +100"), y.Instance.isQq || y.Instance.isWx ? (se.Instance.hideBanner(),
                this.owner.close(), this.closeFun()) : Laya.timer.once(2e3, this, () => {
                    this.owner.close(), this.closeFun();
                });
        }
        onUpdate() {
            this.bar.value -= .003;
        }
        onDisable() {
            Laya.timer.clearAll(this), super.onDisable(), this.btn.off(Laya.Event.CLICK, this, this.bxClick);
        }
    }
    class re extends Laya.Sprite {
        constructor() {
            super();
        }
        onShow() {
            Laya.timer.loop(600, this, () => {
                this.visible = !this.visible;
            });
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class de extends Laya.Script {
        constructor() {
            super(), this.handNum = 0, this.dataList = [], this.eventId = "e_999";
        }
        onAwake() { }
        initData() {
            if (w.DcLoad) {
                let e = 0;
                if (this.isAll) {
                    e = B.GameList.length;
                    for (let t = 0; t < e; t++) this.dataList.push(B.GameList[t]);
                } else if (this.isFront) {
                    e = Math.floor(B.GameList.length / 2);
                    for (let t = 0; t < e; t++) this.dataList.push(B.GameList[t]);
                } else {
                    e = B.GameList.length - Math.floor(B.GameList.length / 2);
                    for (let e = Math.floor(B.GameList.length / 2); e < B.GameList.length; e++) this.dataList.push(B.GameList[e]);
                }
                this.dataList.length < 1 ? this.owner.visible = !1 : this.owner.visible = !0, this.onSetList(),
                    this.onTween(), u.Instance.removeListener(s.DCLOADEND, this);
            } else u.Instance.on(s.DCLOADEND, this.initData, this);
        }
        onEnable() {
            this.list = this.owner.getChildByName("list"), y.Instance.isWx || y.Instance.isOppo || y.Instance.isWeb ? this.initData() : this.owner.visible = !1;
        }
        onSetList() {
            this.handNum = Math.floor(Math.random() * this.dataList.length), this.list.vScrollBarSkin = "",
                this.list.selectEnable = !0, this.list.array = this.dataList, this.list.refresh(),
                this.list.renderHandler = new Laya.Handler(this, this.updateItem), this.list.mouseHandler = new Laya.Handler(this, this.onSelect);
        }
        updateItem(e, t) {
            e.getChildByName("m_pic").skin = e.dataSource.img;
            let i = e.getChildByName("hand");
            this.handNum == t && (i.visible = !0, i.onShow());
        }
        onSelect(e, t, i) {
            "click" == e.type && B.leadOut(this.dataList[t], this.eventId);
        }
        onTween() {
            this.list.array = this.dataList;
            let e = this.list.scrollBar.max / 3;
            Laya.timer.loop(16, null, () => {
                this.list && this.list.scrollBar && (this.list.scrollBar.value += 1, this.list.scrollBar.value >= this.list.scrollBar.max - e ? (this.dataList = this.dataList.concat(this.dataList),
                    this.list.updateArray(this.dataList)) : Laya.timer.clearAll(this));
            });
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class le extends Laya.Script {
        constructor() {
            super(...arguments), this.aldPage = "BaseDialog";
        }
        onAwake() {
            this.owner.openedCallBack(e => {
                this.closeFun = e;
            }), this.initData(), this.findView(), this.initView(), this.screenAdaptation();
        }
        onEnable() { }
        onStart() { }
        onDisable() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this);
        }
        onDestroy() { }
        showBanner() { }
        hideBanner() { }
        setIsShowMisLead(e, t) {
            let i;
            if (e) {
                t.visible = !0, i = t.y;
                try {
                    Laya.timer.clearAll(this), Laya.timer.once(1500, this, () => {
                        Laya.Tween.to(t, {
                            y: i
                        }, 300, null, null, 200);
                    });
                } catch (e) { }
            } else t.visible = !1, t.alpha = .3, Laya.timer.once(1e3, this, function () {
                t.visible = !0;
            });
        }
        startAni(e, t) {
            let i = this.owner[e];
            i && i.play(null, t);
        }
    }
    const he = e => {
        if (!e) throw Error("输入颜色值为空");
        if (6 != e.length) throw Error("输入颜色值格式错误");
        let t = new Laya.Vector3(), i = ce(e);
        return t = me(i);
    }, ce = e => {
        if (!e) throw Error("输入颜色值为空");
        if (6 != e.length) throw Error("输入颜色值格式错误");
        let t = {}, i = e.substr(0, 2), a = e.substr(2, 2), s = e.substr(4, 2);
        return t = {
            r: r(i),
            g: r(a),
            b: r(s)
        };
    }, me = e => {
        if (!e) throw Error("输入RGB颜色值为空");
        if (null == e.r || null == e.g || null == e.b) throw Error("输入RGB颜色值格式不正确");
        let t = Number((e.r / 255).toFixed(2)), i = Number((e.g / 255).toFixed(2)), a = Number((e.b / 255).toFixed(2));
        return new Laya.Vector3(t, i, a);
    }, ge = e => {
        if (!e) throw Error("输入Vector3颜色空间值为空");
        return new Laya.Vector4(e.x, e.y, e.z, 1);
    };
    class ue {
        constructor() { }
    }
    ue.Levels = new Map(), ue.Trails = new Map(), ue.Material = {
        car: {
            red: null,
            yellow: null,
            purple: null
        }
    }, ue.Part = {
        Pass: null
    };
    class pe extends Laya.Script {
        constructor() {
            super(), this.angle = 0, this.timeAll = 10, pe.Instance = this;
        }
        onEnable() {
            this.hand = this.owner.getChildByName("hand"), this.pieSpr = new Laya.Sprite(),
                this.quan = this.owner.getChildByName("quan"), this.drawSomething(this.angle), this.quan.mask = this.pieSpr,
                this.init();
        }
        onHand() {
            this.hand.alpha = 1, this.hand.visible = !0, Laya.timer.loop(600, this, this.onQh),
                this.owner.on(Laya.Event.CLICK, this, () => {
                    w.IsSpeed && (Laya.timer.clear(this, this.onQh), this.hand.alpha = 0, this.hand.visible = !1);
                }), Laya.timer.once(4e3, this, () => {
                    this.hand.alpha = 0, this.hand.visible = !1;
                });
        }
        onQh() {
            this.hand.visible = !this.hand.visible;
        }
        init() {
            this.angle = 0, w.IsSpeed = !1, this.addSpeed();
        }
        addSpeed() {
            Laya.timer.clearAll(this);
            let e = 36 / this.timeAll;
            Laya.timer.loop(100, this, () => {
                if (!Ie.Instance.isStart) { return }
                if (this.angle += e, this.drawSomething(this.angle), this.angle >= 360) return w.IsSpeed = !0,
                    this.angle = 360, Laya.timer.clearAll(this), this.onHand(), !1;
            });
        }
        onSpeed() {
            let e = 36 / w.SpeedTime;
            Laya.timer.loop(100, this, () => {
                if (this.angle -= e, this.drawSomething(this.angle), this.angle <= 0) return this.angle = 0,
                    Laya.timer.clearAll(this), !1;
            });
        }
        offSpeed() {
            w.IsSpeed = !1, this.angle = 0, this.addSpeed();
        }
        drawSomething(e) {
            this.pieSpr.graphics.clear(!0), this.pieSpr.graphics.drawPie(65, 65, 65, 0, e, "#ff0000");
        }
    }
    class we {
        constructor() { }
        static get Instance() {
            return this._instance || (this._instance = new we()), this._instance;
        }
        upDateLoadMtl(e, t) {
            e.meshRenderer.material = t;
        }
        upDateTexture(e, t) {
            let i = e.meshRenderer.material;
            Laya.Texture2D.load(t, Laya.Handler.create(this, function (e) {
                i.albedoTexture = e;
            }));
        }
        upDateTexture2(e, t) {
            let i = e.skinnedMeshRenderer.material;
            Laya.Texture2D.load(t, Laya.Handler.create(this, function (e) {
                i.albedoTexture = e;
            }));
        }
        upDateMaterial(e, t) {
            e.meshRenderer.material;
            let i = new Laya.PBRStandardMaterial();
            i.smoothness = 0, Laya.Texture2D.load(t, Laya.Handler.create(this, function (e) {
                i.albedoTexture = e;
            })), e.meshRenderer.material = i;
        }
        upDateMaterial2(e, t) {
            e.skinnedMeshRenderer.material;
            let i = new Laya.PBRStandardMaterial();
            i.metallic = .2, i.smoothness = 0, Laya.Texture2D.load(t, Laya.Handler.create(this, function (e) {
                i.albedoTexture = e;
            })), e.skinnedMeshRenderer.material = i;
        }
        upDateMaterialFeel(e, t) {
            e.meshRenderer.material;
            let i = new Laya.UnlitMaterial();
            i.albedoColor = ge(he("FF0900")), i.albedoIntensity = 2.3, Laya.Texture2D.load(t, Laya.Handler.create(this, function (e) {
                i.albedoTexture = e;
            })), e.meshRenderer.material = i;
        }
    }
    class ye {
        static get Instace() {
            return this._instance || (this._instance = new ye()), this._instance;
        }
        startSound() {
            L.stop("motor"), L.play("start", 0, 1, () => {
                L.play("start2", 0, 1, () => {
                    L.play("motor", 0);
                });
            });
        }
        runSound() {
            L.stop("motor"), L.stop("run"), L.play("run", 1);
        }
        offRunSound() {
            L.play("motor", 1), L.stop("run");
        }
        offMotorSound() {
            L.stop("motor");
        }
        offAll() {
            L.stop("run"), L.stop("motor");
        }
        motor() {
            L.play("motor", 1);
        }
        speedSound() {
            L.stop("speed"), L.play("speed");
        }
    }
    class Ie extends Laya.Script {
        constructor() {
            super(), this.time = 12e4, this.isStart = !1, Ie.Instance = this;
        }
        onEnable() {
            u.Instance.on(s.GAMESTART, this.onDjs, this);
            // u.Instance.on(s.GAMESTART, this.onDjs, this);
        }
        onStageClick() {
            this.isStart = !0;
        }
        onDjs() {
            let e = 0;
            this.time = 12e4
            let t = Math.floor(this.time / 6e4), i = this.time % 6e4, a = Math.floor(i / 1e3), n = i % 1e3;
            this.owner.text = t + ":" + a + ":" + n,
                this.isStart = !1,
                u.Instance.on(s.GAMEEND, () => {
                    u.Instance.removeListener(s.GAMEEND, this), Laya.timer.clearAll(this);
                }, this), Laya.timer.frameLoop(1, this, () => {
                    if (!this.isStart) return !1;
                    e = 36, this.time -= e;
                    let t = Math.floor(this.time / 6e4), i = this.time % 6e4, a = Math.floor(i / 1e3), n = i % 1e3;
                    this.owner.text = t + ":" + a + ":" + n, this.time <= 0 && (Laya.timer.clearAll(this),
                        this.owner.text = "00:00:00", u.Instance.emit(s.TIMEEND));
                });
        }
        onDisable() {
            u.Instance.removeListener(s.GAMEEND, this), u.Instance.removeListener(s.GAMESTART, this),
                Laya.timer.clearAll(this);
        }
    }
    class Le {
        static get Instance() {
            return this.instance || (this.instance = new Le()), this.instance;
        }
        animState(e, t, i, a) {
            let s = new Laya.AnimatorState();
            return s.name = t, s.clipStart = i, s.clipEnd = a, s.clip = e.getDefaultState().clip,
                s.clip.islooping = !1, s;
        }
    }
    class fe extends Laya.Script3D {
        constructor() {
            super(), this.isRun = !1, this.isDc = !1, this.dcSpeed = 5, this.stateArr = {
                run: null,
                left: null,
                leftRT: null,
                right: null,
                rightRT: null,
                stop: null,
                _stop: null,
                rever: null,
                reverR: null,
                reverL: null
            };
        }
        onEnable() {
            this.CarBody = this.owner.getChildByName("ManAndMotorAnimation");
            let e = this.CarBody.getChildByName("MotorControlAll").getChildByName("MotorControl").getChildByName("pipe");
            this.wheel1 = e.getChildByName("Head_2").getChildByName("FrontWheel"), this.wheel2 = e.getChildByName("BackWheel").getChildByName("BackWheel_2"),
                this.friePart = this.owner.getChildByName("Fire"), this.smorkPart = this.owner.getChildByName("Smoke"),
                this.speedPart = this.owner.getChildByName("ExhaustParticle"), this.friePart.active = !1,
                this.speedPart.active = !1, this.initAni(), this.playAni("_stop");
        }
        playAni(e, t = !1) {
            return new Promise((i, a) => {
                if (!this.isRun && "stop" != e && "_stop" != e) return;
                if (w.AinName == e) {
                    try {
                        i();
                    } catch (e) {
                        a();
                    }
                    return;
                }
                w.AinName = e, this.anim.play(e), this.anim.getDefaultState().clip.islooping = t;
                let s = this, n = this.anim.getCurrentAnimatorPlayState();
                Laya.timer.frameLoop(1, this, function state() {
                    if (n.normalizedTime >= 1) {
                        Laya.timer.clear(s, state);
                        try {
                            i();
                        } catch (e) {
                            a();
                        }
                    }
                });
            });
        }
        initAni() {
            this.anim = this.owner.getChildByName("ManAndMotorAnimation").getComponent(Laya.Animator);
            let e = this.anim.getControllerLayer();
            this.stateArr.run = Le.Instance.animState(this.anim, "run", 0, 0), this.stateArr.left = Le.Instance.animState(this.anim, "left", 0, 4 / 96),
                this.stateArr.leftRT = Le.Instance.animState(this.anim, "leftRT", 4 / 96, 8 / 96),
                this.stateArr.right = Le.Instance.animState(this.anim, "right", 8 / 96, .125), this.stateArr.rightRT = Le.Instance.animState(this.anim, "rightRT", .125, 16 / 96),
                this.stateArr.stop = Le.Instance.animState(this.anim, "stop", 16 / 96, 20 / 96),
                this.stateArr._stop = Le.Instance.animState(this.anim, "_stop", 20 / 96, 20 / 96),
                this.stateArr.rever = Le.Instance.animState(this.anim, "rever", 20 / 96, 35 / 96),
                this.stateArr.reverR = Le.Instance.animState(this.anim, "reverR", 40 / 96, 55 / 96),
                this.stateArr.reverL = Le.Instance.animState(this.anim, "reverL", .625, 75 / 96),
                e.addState(this.stateArr.run), e.addState(this.stateArr.left), e.addState(this.stateArr.leftRT),
                e.addState(this.stateArr.right), e.addState(this.stateArr.rightRT), e.addState(this.stateArr.stop),
                e.addState(this.stateArr._stop), e.addState(this.stateArr.rever), e.addState(this.stateArr.reverR),
                e.addState(this.stateArr.reverL);
        }
    }
    class Ae extends fe {
        constructor() {
            super(), this.carSpeed = 0, this.carIsQD = !1, this.angle = 0, this.isEnd = !1,
                this.forceBase = new Laya.Vector3(2e4, 0, 2e4), this.forceSpeed = new Laya.Vector3(0, 0, 1e3),
                this.angularVelocity = new Laya.Vector3(0, 0, 0), this.isGo = !1, this.isBack = !1,
                this.isLeft = !1, this.isRight = !1, this.turnAngle = 1, this.wordAngle = 0, this.isDie = !1,
                this.isRunSound = !0, this.isFirstView = !1;
        }
        onEnable() {
            super.onEnable(), e.log("车子的角度", this.owner), this.angle = Math.round(this.owner.transform.rotationEuler.y);
            let t = this.owner.transform.rotationEuler.y, i = x.Instance.angleToRadian(t), a = Math.cos(i), s = Math.sin(i);
            this.forceNormal = new Laya.Vector3(s, 0, a);
        }
        getSceneSp(e) {
            this.TrailBox = e, this.init();
        }
        init() {
            this.owner.transform.position = new Laya.Vector3(0, 1, 0), this.Rig = this.owner.getComponent(Laya.Rigidbody3D),
                this.onPart(!1), this.Rig.mass = 1e3, this.Rig.friction = .6, this.Rig.restitution = 0,
                this.Rig.linearDamping = .1, e.log("this.Rig.restitution", this.Rig.linearVelocity),
                this.Rig.linearVelocity = new Laya.Vector3(0, 0, 0), this.Rig.gravity = new Laya.Vector3(0, -29.8, 0),
                this.force = new Laya.Vector3(0, 0, 0), this.onFxp(), u.Instance.on(s.TIMEEND, () => {
                    this.isEnd || (e.log("游戏结束-时间到"), this.isEnd = !0, Be.Instance.onFail(), u.Instance.removeListener(s.TIMEEND, this));
                }, this), u.Instance.on(s.GAMEEND, e => {
                    e && (this.Rig.clearForces(), this.Rig.linearVelocity = new Laya.Vector3(0, 0, 0),
                        Laya.timer.clearAll(this));
                }, this), this.upDateMtl(w.GetSkin);
        }
        upDateMtl(e) {
            let t = this.owner.getChildByName("ManAndMotorAnimation"), i = t.getChildByName("body").getChildByName("body_2"), a = t.getChildByName("body").getChildByName("CON_Master").getChildByName("CON_Hips").getChildByName("page_2"), s = t.getChildByName("body").getChildByName("CON_Master").getChildByName("CON_Hips").getChildByName("page_3"), n = t.getChildByName("MotorControlAll").getChildByName("MotorControl").getChildByName("pipe"), o = n.getChildByName("Head_2").getChildByName("MotorHand");
            we.Instance.upDateTexture2(i, w.SkinData[e].people), we.Instance.upDateTexture(a, w.SkinData[e].people),
                we.Instance.upDateTexture(s, w.SkinData[e].people), we.Instance.upDateTexture(n, w.SkinData[e].car),
                we.Instance.upDateTexture(o, w.SkinData[e].car);
        }
        createTrail() {
            let e = ue.Trails.get("carTrail").clone(), t = ue.Trails.get("carTrail").clone();
            this.TrailBox.addChildren(e, t);
        }
        onTrail(e, t) {
            this.Rig.linearVelocity.x < .5 && this.Rig.linearVelocity.z < .5 && this.offTrail();
        }
        offTrail() {
            Laya.timer.clear(this, this.onTrail);
        }
        goAhead() {
            Laya.timer.clear(this, this.giveOil), this.isGo = !0, this.isBack = !1, Laya.timer.frameLoop(1, this, this.giveOil),
                Ie.Instance && !Ie.Instance.isStart && (Ie.Instance.isStart = !0);
        }
        goBack() {
            Laya.timer.clear(this, this.giveOil), this.isGo = !1, this.isBack = !0, Laya.timer.frameLoop(1, this, this.giveOil);
        }
        turnLeft() {
            this.offBackToNormal(), Laya.timer.frameLoop(1, this, this.onTurnLeft);
        }
        offTurnLeft() {
            Laya.timer.clear(this, this.onTurnLeft), this.playAni("leftRT"), this.BackToNormal();
        }
        onTurnLeft() {
            this.isDc ? this.playAni("reverL", !0) : this.playAni("left");
            let e = -this.turnAngle;
            this.CarBody.transform.localRotationEulerZ <= -15 && (e = 0), this.CarBody.transform.localRotationEulerZ += e;
        }
        turnRight() {
            this.offBackToNormal(), Laya.timer.frameLoop(1, this, this.onTurnRight);
        }
        onTurnRight() {
            this.isDc ? this.playAni("reverR", !0) : this.playAni("right");
            let e = this.turnAngle;
            this.CarBody.transform.localRotationEulerZ >= 15 && (e = 0), this.CarBody.transform.localRotationEulerZ += e;
        }
        offTurnRight() {
            Laya.timer.clear(this, this.onTurnRight), this.playAni("rightRT"), this.BackToNormal();
        }
        BackToNormal() {
            Laya.timer.frameLoop(1, this, this.onBackToNormal);
        }
        onBackToNormal() {
            let e = Math.round(this.CarBody.transform.localRotationEulerZ), t = 4 * this.turnAngle;
            e > 0 ? (t = 4 * -this.turnAngle, e <= 4 * this.turnAngle && (e = 0)) : e >= 4 * this.turnAngle && (e = 0),
                e ? this.CarBody.transform.localRotationEulerZ += t : (this.CarBody.transform.localRotationEulerZ = 0,
                    Laya.timer.clear(this, this.onBackToNormal), this.Rig.angularVelocity = new Laya.Vector3(this.Rig.angularVelocity.x, 0, this.Rig.angularVelocity.z));
        }
        offBackToNormal() {
            Laya.timer.clear(this, this.onBackToNormal);
        }
        onFxp() {
            u.Instance.on(s.FXP, this.onWheelRatation, this);
        }
        onWheelRatation(e) { }
        giveOil() {
            this.carIsQD = !0, this.offTrail();
            let e = new Laya.Vector3(0, 0, 0), t = this.owner.transform.localRotationEulerY, i = x.Instance.angleToRadian(t), a = Math.cos(i), s = Math.sin(i);
            this.forceNormal = new Laya.Vector3(s, 0, a),
                this.isGo && (e = x.Instance.multiply(new Laya.Vector3(1, 1, 1), this.forceNormal)),
                this.isBack && (e = x.Instance.multiply(new Laya.Vector3(-.8, .8, -.8), this.forceNormal)),
                this.force = this.speedPart.active ? x.Instance.multiply(x.Instance.multiply(new Laya.Vector3(2, 2, 2), this.forceBase), this.forceNormal) :
                    x.Instance.multiply(e, this.forceBase),
                this.Rig.applyForce(this.force);
        }
        giveSpeed() {
            this.onPart(!0), L.play("speed2"), this.force = x.Instance.multiply(new Laya.Vector3(2, 2, 2), this.forceBase),
                pe.Instance.onSpeed(), Laya.timer.once(1e3 * w.SpeedTime, this, () => {
                    this.onPart(!1), this.force = this.forceBase, pe.Instance.offSpeed();
                });
        }
        giveTurn(e = 1) {
            if (!this.isTrigger) return;
            let t = e > 2 ? 2 : e, i = this.CarBody.transform.localRotationEulerZ;
            if (i) {
                let e = 0;
                e = Math.abs(i) > 30 ? 8e3 : Math.abs(i) > 20 ? 8e3 : (Math.abs(i), 8e3), w.isFXP && (e /= 1.2),
                    this.carSpeed, this.isBack && (e = -e), i < 0 ? this.Rig.applyTorque(new Laya.Vector3(0, -e * t, 0)) : this.Rig.applyTorque(new Laya.Vector3(0, e * t, 0));
            } else this.Rig.applyTorque(new Laya.Vector3(0, 0, 0)), this.Rig.angularVelocity = new Laya.Vector3(0, 0, 0),
                this.isDc ? this.playAni("rever", !0) : this.playAni("run");
        }
        onFly() {
            this.Rig.applyTorque(new Laya.Vector3(-300, 0, 0)), (this.owner.transform.localRotationEulerX > 30 || this.owner.transform.localRotationEulerX < -30) && (this.Rig.applyTorque(new Laya.Vector3(0, 0, 0)),
                this.Rig.angularVelocity = new Laya.Vector3(0, 0, 0));
        }
        stopOil() {
            this.isGo = !1, this.isBack = !1, Laya.timer.clear(this, this.giveOil);
        }
        stop() {
            this.isTrigger && (this.stopOil(), this.Rig.linearVelocity = x.Instance.multiply(new Laya.Vector3(.5, 1, .5), this.Rig.linearVelocity));
        }
        carCollision() {
            this.Rig.linearVelocity = x.Instance.multiply(new Laya.Vector3(.3, 1, .3), this.Rig.linearVelocity),
                this.Rig.angularVelocity = x.Instance.multiply(new Laya.Vector3(.1, 1, .1), this.Rig.angularVelocity);
        }
        offStop() { }
        onPart(e) {
            this.speedPart.active = e;
        }
        onSound() {
            if (!this.carIsQD) return !1;
            Math.abs(this.carSpeed) >= 1 && !this.isDc ? this.isRunSound || (this.isRunSound = !0,
                ye.Instace.runSound()) : this.isRunSound && (ye.Instace.offRunSound(), this.isRunSound = !1);
        }
        onWheel() {
            let t = this.owner.transform.localRotationEulerY, i = x.Instance.angleToRadian(t), a = Math.cos(i), s = Math.sin(i), n = new Laya.Vector2(s, a), o = new Laya.Vector2(this.Rig.linearVelocity.x, this.Rig.linearVelocity.z), r = 0;
            (r = Math.atan2(o.y, o.x) - Math.atan2(n.y, n.x)) < 0 && (r += 2 * Math.PI), r = Math.round(x.Instance.radianToAngle(r));
            let d = 0, l = Math.round(this.Rig.linearVelocity.x), h = Math.round(this.Rig.linearVelocity.z);
            if (l || h) {
                let t = Math.abs(h) > Math.abs(l) ? Math.round(h) : Math.round(l);
                if (this.carSpeed = t, -1 < t && t < 1); else {
                    if (this.isRun = !0, d = -t / 1, Math.abs(r) > 150 && Math.abs(r) < 210) {
                        let t, i;
                        this.isDc = !0, t = l < 0 ? Math.abs(l) > this.dcSpeed ? -this.dcSpeed : l : Math.abs(l) > this.dcSpeed ? this.dcSpeed : l,
                            i = h < 0 ? Math.abs(h) > this.dcSpeed ? -this.dcSpeed : h : Math.abs(h) > this.dcSpeed ? this.dcSpeed : h,
                            e.log("倒车速度x:", t, "倒车速度z:", i), (d = Math.abs(d)) > 28 && (d = 28);
                    } else this.isDc = !1, (d = -Math.abs(d)) < -28 && (d = -28);
                    this.giveTurn();
                }
            } else this.carSpeed = 0, this.isRun = !1, this.playAni("stop");
            this.wheel1.transform.localRotationEulerX += d, this.wheel2.transform.localRotationEulerX += d,
                Math.abs(this.wheel1.transform.localRotationEulerX) >= 360 && (this.wheel1.transform.localRotationEulerX = this.wheel2.transform.localRotationEulerX = 0),
                this.onAngle(), this.onSound();
        }
        onCollisionEnter(t) {
            if (w.StartGame && !this.isEnd) switch (this.isTrigger = !0, t.other.owner.name) {
                case "speed":
                    break;

                case "rusuMd":
                    L.play("resuMd");
                    break;

                case "VerticalPart":
                case "Baffle":
                    L.play("collision"), y.Instance.shortVibrate(), this.carCollision();
                    break;

                case "resu":
                    let i = t.other.owner, a = Number(i.getChildAt(0).name);
                    Be.Instance.resuInfo = a;
                    break;

                case "pass":
                    this.isEnd = !0, Be.Instance.onPass();
                    break;

                case "Saw_die":
                case "Axe_die":
                    this.isEnd = !0, this.friePart.active = !0, L.play("zhuangji"), Laya.timer.once(1e3, this, () => {
                        L.play("fire");
                    }), e.log("游戏结束-障碍物"), Be.Instance.onFail();
            }
        }
        onCollisionExit() {
            this.isTrigger = !1, this.offTrail();
        }
        onCollisionStay() {
            this.isTrigger = !0;
        }
        onAngle() {
            let e = Math.round(this.owner.transform.rotationEuler.y);
            if (Math.abs(this.angle - e) >= 2) {
                let t = new Laya.Vector3(this.Rig.linearVelocity.x, this.Rig.linearVelocity.y, this.Rig.linearVelocity.z), i = this.angle - e, a = x.Instance.angleToRadian(i), s = new Laya.Vector3(t.x * Math.cos(a) - t.z * Math.sin(a), t.y, t.x * Math.sin(a) + t.z * Math.cos(a));
                this.Rig.linearVelocity = s, this.angle = e;
            }
        }
        onFail() {
            this.isEnd || this.owner.transform.localPositionY <= -50 && (this.isEnd = !0, e.log("游戏结束-50"),
                Be.Instance.onFail());
        }
        onCarFlip() {
            if (this.isDie || this.isEnd) return !1;
            (Math.abs(this.owner.transform.localRotationEulerX) >= 80 || Math.abs(this.owner.transform.localRotationEulerZ) >= 80) && (this.friePart.active = !0,
                this.isDie = !0, this.isEnd = !0, L.play("fire"), e.log("游戏结束-侧翻"), Be.Instance.onFail());
        }
        onUpdate() {
            w.StartGame && (this.onCarFlip(), this.isTrigger, this.onWheel(), this.onFail());
        }
        onDisable() {
            u.Instance.removeListener(s.FXP, this), u.Instance.removeListener(s.TIMEEND, this),
                u.Instance.removeListener(s.GAMEEND, this);
        }
    }
    class Se extends Laya.Script3D {
        constructor() {
            super();
        }
        onEnable() {
            this.axe = this.owner.getChildByName("Axe_die");
        }
        init(e) {
            let t = 0, i = 180 / ((t = e || (w.NowLevel >= 5 ? 1500 + 1500 * Math.random() : 2500 + 3500 * Math.random())) / 100);
            Laya.timer.loop(100, this, () => {
                this.axe.transform.localRotationEulerY >= 90 ? i = -Math.abs(i) : this.axe.transform.localRotationEulerY <= -90 && (i = Math.abs(i)),
                    this.axe.transform.localRotationEulerY += i;
            });
        }
        init2(e) {
            let t = 180 / (e / 100);
            new Laya.Vector3(0, -t, 0);
            Laya.timer.loop(100, this, () => {
                this.axe.transform.localRotationEulerY >= 90 ? t = -Math.abs(t) : this.axe.transform.localRotationEulerY <= -90 && (t = Math.abs(t)),
                    this.axe.transform.localRotationEulerY += t;
            });
        }
        onDisable() {
            Laya.timer.clearAll(this), u.Instance.removeListener(s.GAMEEND, this);
        }
    }
    class be extends Laya.Script3D {
        constructor() {
            super();
        }
        onEnable() {
            this.saw = this.owner.getChildByName("Saw_die"), Laya.timer.frameLoop(1, this, () => {
                this.saw.transform.localRotationEulerZ <= -360 && (this.saw.transform.localRotationEulerZ = 0),
                    this.saw.transform.localRotationEulerZ -= 5;
            });
        }
        init(e) {
            let t = 0, i = 18 / ((t = e || (w.NowLevel >= 5 ? 1500 + 1500 * Math.random() : 2500 + 3500 * Math.random())) / 100);
            Laya.timer.loop(100, this, () => {
                this.saw.transform.localPositionX >= 9 ? i = -Math.abs(i) : this.saw.transform.localPositionX <= -9 && (i = Math.abs(i)),
                    this.saw.transform.localPositionX += i;
            });
        }
        onDisable() {
            Laya.timer.clearAll(this), u.Instance.removeListener(s.GAMEEND, this);
        }
    }
    class Ce extends Laya.Script3D {
        constructor() {
            super();
        }
        onEnable() {
            this.light = this.owner.getChildByName("rebirthLightPillar"), this.material = this.light.meshRenderer.material,
                e.log("复活点", this.material.tilingOffsetX, this.material.tilingOffsetY), Laya.timer.frameLoop(1, this, () => {
                    let e = this.material.tilingOffsetX;
                    (e += .005) >= 10 && (e = 1), this.material.tilingOffsetX = e;
                });
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class ve extends Laya.Script3D {
        constructor() {
            super();
        }
        onEnable() {
            this.door = this.owner.getChildByName("Door");
        }
        init(e) {
            let t = 0, i = 16 / ((t = e || (w.NowLevel >= 5 ? 500 + 1500 * Math.random() : 1500 + 2500 * Math.random())) / 100);
            Laya.timer.loop(100, this, () => {
                this.door.transform.localPositionX >= 16 ? i = -Math.abs(i) : this.door.transform.localPositionX <= 0 && (i = Math.abs(i)),
                    this.door.transform.localPositionX += i;
            });
        }
        onDisable() {
            Laya.timer.clearAll(this), u.Instance.removeListener(s.GAMEEND, this);
        }
    }
    class Be extends le {
        constructor() {
            super(), this.fxSel = 0, this.levelPrefab = null, this.cameraPosition = new Laya.Vector3(0, 8.97, -17.19),
                this.cameraRotation = new Laya.Vector3(-15.43, 180, 0), this.isLoad = !1, this.resuInfo = 0,
                this.cameraV3 = new Laya.Vector3(), this.lerp = new Laya.Vector3(), this.cuntV3 = new Laya.Vector3(),
                Be.Instance = this;
        }
        initData() {
            this.destroyScene(), this.fxSel = p.getNumber(a.FXSEL, 0);
        }
        findView() {
            this.OperatingBox = this.owner.getChildByName("OperatingBox"), this.fxBox = this.OperatingBox.getChildByName("fxBox"),
                this.fxpBox = this.OperatingBox.getChildByName("fxpBox"), this.dlBox = this.OperatingBox.getChildByName("dlBox"),
                this.leftBtn = this.fxBox.getChildByName("left"), this.rightBtn = this.fxBox.getChildByName("right"),
                this.goBtn = this.dlBox.getChildByName("top"), this.tsHand = this.goBtn.getChildByName("hand"),
                this.backBtn = this.dlBox.getChildByName("bottom"), this.stopBtn = this.OperatingBox.getChildByName("stop"),
                this.speedBtn = this.OperatingBox.getChildByName("speedBtn"), this.gameBtn = this.OperatingBox.getChildByName("btnGame"),
                this.spr_tips = this.OperatingBox.getChildByName("spr_tips"), this.btnJump = this.OperatingBox.getChildByName("btnJump"),
                this.onTs();
            if (Laya.Browser.onPC) {
                this.fxBox.visible = this.dlBox.visible = false;
            } else {
                this.fxBox.visible = this.dlBox.visible = true;
            }
            if (w.NowLevel == 1) {
                if (Laya.Browser.onPC) {
                    this.spr_tips.visible = true;
                } else {
                    this.spr_tips.visible = true;
                }
            }
        }
        onTs() {
            p.getBoolean(a.HANDTS, !1) ? this.tsHand.visible = !1 : (p.setBoolean(a.HANDTS, !0),
                this.tsHand.visible = !0, Laya.timer.loop(600, this, this.handTs), this.goBtn.on(Laya.Event.CLICK, this, () => {
                    Laya.timer.clear(this, this.handTs), this.tsHand.visible = !1;
                }));
        }
        handTs() {
            this.tsHand.visible = !this.tsHand.visible;
        }
        onChangeGame() { }
        onPerating() {
            this.gameBtn.on(Laya.Event.CLICK, this, () => {
                this.fxSel++, this.fxSel > 1 && (this.fxSel = 0), this.onChangeGame();
            }), this.goBtn.on(Laya.Event.MOUSE_DOWN, this, e => {
                e.stopPropagation(), this.goBtn.skin = "game/goAheadh.png", this.mCar.goAhead(),
                    ye.Instace.speedSound();
            }), this.goBtn.on(Laya.Event.MOUSE_OUT, this, e => {
                e.stopPropagation(), this.goBtn.skin = "game/goAhead.png", this.mCar.stopOil();
            }), this.backBtn.on(Laya.Event.MOUSE_DOWN, this, e => {
                e.stopPropagation(), this.backBtn.skin = "game/goBackh.png", this.mCar.goBack(),
                    ye.Instace.speedSound();
            }), this.backBtn.on(Laya.Event.MOUSE_OUT, this, e => {
                e.stopPropagation(), this.backBtn.skin = "game/goBack.png", this.mCar.stopOil();
            }), this.leftBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.mCar.turnLeft(), this.leftBtn.alpha = .7;
            }), this.leftBtn.on(Laya.Event.MOUSE_OUT, this, () => {
                this.mCar.offTurnLeft(), this.leftBtn.alpha = 1;
            }), this.rightBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.mCar.turnRight(), this.rightBtn.alpha = .7;
            }), this.rightBtn.on(Laya.Event.MOUSE_OUT, this, () => {
                this.mCar.offTurnRight(), this.rightBtn.alpha = 1;
            }), this.stopBtn.on(Laya.Event.MOUSE_DOWN, this, () => {
                this.mCar.stop();
            }), this.stopBtn.on(Laya.Event.MOUSE_UP, this, () => {
                this.mCar.offStop();
            }), this.speedBtn.on(Laya.Event.CLICK, this, e => {
                e.stopPropagation(), w.IsSpeed && (w.IsSpeed = !1, this.mCar.giveSpeed());
            }), this.btnJump.on(Laya.Event.CLICK, this, e => {
                e.stopPropagation(), se.Instance.showVideo({
                    success: () => {
                        v.trackEvent("e_21"), Ne.Instance.gameEnd(!0);
                    }
                });
            });
        }
        initView() {
            this.OperatingBox.visible = !1, this.onChangeGame(), this.onGame();
        }
        screenAdaptation() { }
        onEnable() { }
        onStart() {
            e.log("开始", this.closeFun), this.closeFun && this.closeFun();
        }
        setSkyBox(e, t) {
            let i = "res/Box2/skyMaterial.lmat";
            if (w.SkyIsLoad) {
                let e = ["res/SkyBox/Box1/skyMaterial.lmat", "res/Box2/skyMaterial.lmat", "res/SkyBox/Box4/skyMaterial.lmat"];
                i = e[Math.floor(Math.random() * e.length)];
            }
            Laya.Material.load(i, Laya.Handler.create(this, function (i) {
                t.clearFlag = Laya.CameraClearFlags.Sky;
                var a = e.skyRenderer;
                a.mesh = Laya.SkyBox.instance, a.material = i;
            }));
        }
        onFog(e) {
            e.enableFog = !0, e.fogColor = he("d4fdff"), e.fogStart = 300, e.fogRange = 900;
        }
        onKeyDown(e) {
            if (!this.mCar) {
                return;
            }
            this.spr_tips.visible && (this.spr_tips.visible = false);
            switch (e.keyCode) {
                case 32:
                    w.IsSpeed && (w.IsSpeed = !1, this.mCar.giveSpeed())
                    break;
                case 38:
                case Laya.Keyboard.W:
                    this.mCar.goAhead();
                    break;

                case 40:
                case Laya.Keyboard.S:
                    this.mCar.goBack();
                    break;

                case 37:
                case Laya.Keyboard.A:
                    this.mCar.turnLeft();
                    break;

                case 39:
                case Laya.Keyboard.D:
                    this.mCar.turnRight();
            }
        }
        onKeyUp(e) {
            this.spr_tips.visible && (this.spr_tips.visible = false);
            switch (e.keyCode) {
                case 38:
                case Laya.Keyboard.W:
                case 40:
                case Laya.Keyboard.S:
                    this.mCar.stopOil();
                    break;
                case 37:
                case Laya.Keyboard.A:
                    this.mCar.offTurnLeft();
                    break;
                case 39:
                case Laya.Keyboard.D:
                    this.mCar.offTurnRight();
            }
        }
        loadCar() {
            if (e.log("复活添加车子"), this.Car.destroy(), this.Car = this.scene3D.addChild(ue.Motor.clone()),
                this.mCar = this.Car.addComponent(Ae), this.mCar.getSceneSp(this.TrailBox), this.Car.addChild(this.camera),
                this.resuInfo && w.LevelData[w.NowLevel - 1].resu) {
                let e = w.LevelData[w.NowLevel - 1].resu[this.resuInfo - 1];
                this.Car.transform.localPosition = new Laya.Vector3(e.pos.x, e.pos.y, e.pos.z),
                    this.Car.transform.localRotationEuler = new Laya.Vector3(e.rot.x, e.rot.y, e.rot.z);
            }
            this.camera.transform.localPosition = this.cameraPosition, this.camera.transform.localRotationEuler = this.cameraRotation,
                this.OperatingBox.visible = !0, pe.Instance.init();
        }
        loadLevel(t) {
            if (w.init(), this.setSkyBox(this.scene3D, this.camera), this.levelPrefab = ue.Levels.get("Level" + t).clone(),
                this.sceneBox.addChild(this.levelPrefab), w.LevelData[w.NowLevel - 1].resu) {
                let e = w.LevelData[w.NowLevel - 1];
                for (let t = 0; t < e.resu.length; t++) {
                    let i = ue.ruseMd.clone();
                    this.levelPrefab.addChild(i), i.transform.localPosition = new Laya.Vector3(e.resu[t].pos.x, e.resu[t].pos.y - 1, e.resu[t].pos.z),
                        i.addComponent(Ce);
                }
            }
            this.initFlyRoad(), e.log("关卡", this.levelPrefab), this.Car = this.scene3D.addChild(ue.Motor.clone()),
                this.mCar = this.Car.addComponent(Ae), this.mCar.getSceneSp(this.TrailBox), this.camera.transform.position = this.cameraPosition,
                this.camera.transform.rotationEuler = this.cameraRotation, this.Car.addChild(this.camera),
                this.OperatingBox.visible = !0, pe.Instance.init(), w.StartGame = !0, this.OperatingBox.visible = !0,
                this.resuInfo = 0;
        }
        loadGroud(e) {
            w.init(), this.levelPrefab = ue.Levels.get("Level" + e).clone(), this.sceneBox.addChild(this.levelPrefab),
                this.setSkyBox(this.scene3D, this.camera);
        }
        initFlyRoad() {
            for (let e = 0; e < this.levelPrefab.numChildren; e++) {
                let t = this.levelPrefab.getChildAt(e).name;
                if ("SpeedFly" == t.substring(0, 8)); else if ("AxeBox" == t.substring(0, 6)) {
                    let t = this.levelPrefab.getChildAt(e);
                    if (!t) return;
                    t.addComponent(Se).init();
                } else if ("SawBox" == t.substring(0, 6)) {
                    let t = this.levelPrefab.getChildAt(e);
                    if (!t) return;
                    t.addComponent(be).init();
                } else if ("DoorBo" == t.substring(0, 6)) {
                    let t = this.levelPrefab.getChildAt(e);
                    if (!t) return;
                    t.addComponent(ve).init();
                }
            }
        }
        destroyLevel() {
            e.log("删除元素"), this.resuInfo = 0, this.TrailBox.destroyChildren(), e.log("删除元素-拖尾"),
                this.levelPrefab && this.levelPrefab.destroy(), e.log("删除元素-关卡"), this.Car && this.Car.destroy(),
                e.log("删除元素-car");
        }
        destroyScene() {
            this.scene3D && (this.resuInfo = 0, Laya.timer.clearAll(this), this.scene3D.removeChildren(),
                this.scene3D.destroyChildren(), this.scene3D.destroy(), this.scene3D = null, Laya.Resource.destroyUnusedResources());
        }
        onCamera() {
            let e = new Laya.Vector3(this.camera.transform.position.x, this.camera.transform.position.y, this.camera.transform.position.z), t = new Laya.Vector3(this.camera.transform.rotationEuler.x, this.camera.transform.rotationEuler.y, this.camera.transform.rotationEuler.z);
            this.scene3D.addChild(this.camera), this.camera.transform.position = e, this.camera.transform.rotationEuler = t;
        }
        onPass() {
            y.Instance.longVibrate();
            let e = ue.Part.Pass.clone(), t = this.levelPrefab.getChildByName("endPrefab").getChildByName("PartVct").transform.position;
            this.levelPrefab.addChild(e), e.transform.position = t, this.onCamera(), Laya.timer.once(1e3, this, () => {
                this.mCar.stop();
            }), this.OperatingBox.visible = !1, Ne.Instance.gameEnd(!0);
        }
        onFail() {
            y.Instance.longVibrate(), this.OperatingBox.visible = !1, Laya.timer.once(1500, this, () => {
                this.onCamera(), Ne.Instance.gameEnd(!1);
            });
        }
        onLoad(e) {
            this.onFog(e), this.scene3D = e, this.sceneBox = this.scene3D.getChildByName("SceneBox"),
                this.TrailBox = this.scene3D.getChildByName("TrailBox"), this.owner.addChild(e),
                this.camera = this.scene3D.getChildByName("Main Camera"), this.camera.enableHDR = !1,
                this.isLoad = !0, u.Instance.emit(s.LEVELEND), this.onPerating();
        }
        onGame() {
            Laya.loader.create("res/LayaScene_Main/Conventional/Main.ls", Laya.Handler.create(this, this.onLoad), Laya.Handler.create(this, e => { }));
        }
        onDisable() {
            super.onDisable();
            Laya.timer.clearAll(this);
        }
        onCameraGS() {
            Laya.Vector3.add(this.Car.transform.position, this.cameraV3, this.lerp), Laya.Vector3.lerp(this.camera.transform.position, this.lerp, .5, this.cuntV3),
                this.camera.transform.position = this.cuntV3;
        }
        onUpdate() {
            w.StartGame;
        }
    }
    class Ne {
        constructor() { }
        static get Instance() {
            return this._instance || (this._instance = new Ne()), this._instance;
        }
        gamePause() { }
        gameRestart() { }
        gameRelive() {
            Be.Instance.loadCar(), u.Instance.emit(s.GAMESTART), w.StartGame = !0;
        }
        gameStart() {
            platform.getInstance().showInterstitial();
            Ne.Instance.onstart();
        }
        onstart() {
            Be.Instance.isLoad ? Ne.Instance.start() : u.Instance.on(s.LEVELEND, () => {
                Ne.Instance.start();
            }, Be.Instance), y.Instance.isQq && Laya.timer.once(500, this, () => {
                k.show();
            });
        }
        start() {
            ye.Instace.startSound(), w.NowLevel > w.LevelData.length && (w.NowLevel = 1), Be.Instance.destroyLevel(),
                Be.Instance.loadLevel(w.NowLevel), b.startGame(), w.RetrunHomeNum = 0, w.StartGame = !0,
                u.Instance.removeListener(s.LEVELEND, Be.Instance), u.Instance.emit(s.GAMESTART),
                A.onStart(), y.Instance.isTt && Q.start(), p.setNumber(a.GAMESTARTDATE, w.DataTime);
        }
        gameEnd(e) {
            ye.Instace.offAll(), y.Instance.isTt && Q.stop(), w.IsResu = 0, w.StartGame = !1,
                b.endGame(w.NowLevel + ""), w.GetSkinSy && (w.GetSkin = 0, w.GetSkinSy = !1), e ? (u.Instance.emit(s.GAMEEND),
                    A.onEnd(!0), L.play("pass"), this.storeUserInfo(), w.PassNum++, Laya.timer.once(1500, this, () => {
                        y.Instance.isWx && i.IsMisLead ? 2 == w.NowLevel ? Laya.Dialog.open(f.EXPROTBOX_DIALOG, !0, () => {
                            Laya.Dialog.open(f.EXPROTBOX2_DIALOG, !0, () => {
                                Laya.Dialog.open(f.PASS_DIALOG, !0);
                            });
                        }) : 3 == w.NowLevel ? Laya.Dialog.open(f.EXPROTBOX_DIALOG, !0, () => {
                            Laya.Dialog.open(f.EXPROTBOX2_DIALOG, !0, () => {
                                Laya.Dialog.open(f.PASSCOIN_DIALOG, !0);
                            });
                        }) : Laya.Dialog.open(f.EXPROTBOX3_DIALOG, !0, () => {
                            Laya.Dialog.open(f.EXPROTBOX_DIALOG, !0, () => {
                                Laya.Dialog.open(f.EXPROTBOX2_DIALOG, !0, () => {
                                    Laya.Dialog.open(f.BX_DIALOG, !0, () => {
                                        Laya.Dialog.open(f.PASSCOIN_DIALOG, !0);
                                    });
                                });
                            });
                        }) : y.Instance.isBd && w.NowLevel % 2 == 1 ? Laya.Dialog.open(f.BX2_DIALOG, !0, () => {
                            Laya.Dialog.open(f.PASSCOIN_DIALOG, !0);
                        }) : Laya.Dialog.open(f.PASSCOIN_DIALOG, !0);
                    })) : (u.Instance.emit(s.GAMEEND, [1]), A.onEnd(!1), L.play("fail"), Laya.timer.once(1e3, this, () => {
                        Laya.Dialog.open(f.RESU_DIALOG, !0);
                    }));
        }
        storeUserInfo() {
            let e = p.getNumber(a.USERLEVEL);
            w.NowLevel += 1, e < w.NowLevel && (w.UserLevel = w.NowLevel, p.setNumber(a.USERLEVEL, w.NowLevel),
                y.Instance.isWx);
        }
        retrunHome() {
            Be.Instance && Be.Instance.destroyScene(), Laya.Dialog.closeAll(), Laya.View.open(f.HOME_SCENE, !0);
        }
    }
    class xe extends ne {
        constructor() {
            super(), this.handNum = 0, this.dataList = [];
        }
        initData() {
            se.Instance.hideBanner(), _.hide();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.list = this.owner.getChildByName("list");
        }
        initView() {
            if (w.DcLoad) if (B.GameList) {
                for (let e = 0; e < B.GameList.length; e++) this.dataList.push(B.GameList[e]);
                this.onSetList(), this.onTween(), u.Instance.removeListener(s.DCLOADEND, this);
            } else this.dataList = []; else u.Instance.on(s.DCLOADEND, this.initData, this);
        }
        screenAdaptation() { }
        onSetList() {
            this.handNum = Math.floor(Math.random() * this.dataList.length), this.list.hScrollBarSkin = "",
                this.list.selectEnable = !0, this.list.array = this.dataList, this.list.refresh(),
                this.list.renderHandler = new Laya.Handler(this, this.updateItem), this.list.mouseHandler = new Laya.Handler(this, this.onSelect);
        }
        updateItem(e, t) {
            e.getChildByName("m_pic").skin = e.dataSource.img, e.getChildByName("m_name").text = e.dataSource.title;
            let i = e.getChildByName("hand");
            this.handNum == t && (i.visible = !0, i.onShow());
        }
        onSelect(e, t, i) {
            "click" == e.type && B.leadOut(this.dataList[t], "e_17");
        }
        onTween() {
            this.list.array = this.dataList;
            let e = this.list.scrollBar.max / 4;
            Laya.timer.loop(16, null, () => {
                this.list.scrollBar.value += 1, this.list.scrollBar.value >= this.list.scrollBar.max - e && (this.dataList = this.dataList.concat(this.dataList),
                    this.list.updateArray(this.dataList));
            });
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnSj":
                    B.leadOut(this.dataList[Math.floor(Math.random() * this.dataList.length)], "e_15");
                    break;

                case "btnRetrun":
                    v.trackEvent("e_16"), this.closeFun ? (this.owner.close(), this.closeFun()) : Ne.Instance.retrunHome();
            }
        }
        onDisable() {
            super.onDisable();
        }
    }
    class De extends ne {
        constructor() {
            super(), this.handNum = 0, this.dataList = [];
        }
        initData() {
            se.Instance.hideBanner(), _.hide();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.list = this.owner.getChildByName("list");
        }
        initView() {
            if (w.DcLoad) if (B.GameList) {
                for (let e = 0; e < B.GameList.length; e++) this.dataList.push(B.GameList[e]);
                this.onSetList(), this.onTween(), u.Instance.removeListener(s.DCLOADEND, this);
            } else this.dataList = []; else u.Instance.on(s.DCLOADEND, this.initData, this);
        }
        screenAdaptation() { }
        onSetList() {
            this.handNum = Math.floor(Math.random() * this.dataList.length), this.list.hScrollBarSkin = "",
                this.list.selectEnable = !0, this.list.array = this.dataList, this.list.refresh(),
                this.list.renderHandler = new Laya.Handler(this, this.updateItem), this.list.mouseHandler = new Laya.Handler(this, this.onSelect);
        }
        updateItem(e, t) {
            e.getChildByName("m_pic").skin = e.dataSource.img, e.getChildByName("m_name").text = e.dataSource.title;
            let i = e.getChildByName("hand");
            this.handNum == t && (i.visible = !0, i.onShow());
        }
        onSelect(e, t, i) {
            "click" == e.type && B.leadOut(this.dataList[t], "e_20", !1);
        }
        onTween() {
            this.list.array = this.dataList;
            let e = this.list.scrollBar.max / 4;
            Laya.timer.loop(16, null, () => {
                this.list.scrollBar.value += 1, this.list.scrollBar.value >= this.list.scrollBar.max - e && (this.dataList = this.dataList.concat(this.dataList),
                    this.list.updateArray(this.dataList));
            });
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnSj":
                    B.leadOut(this.dataList[Math.floor(Math.random() * this.dataList.length)], "e_18", !1);
                    break;

                case "btnRetrun":
                    v.trackEvent("e_19"), this.closeFun ? (this.owner.close(), this.closeFun()) : Ne.Instance.retrunHome();
            }
        }
        onDisable() {
            super.onDisable();
        }
    }
    class Ve extends ne {
        constructor() {
            super(), this.handNum = 0, this.dataList = [];
        }
        initData() {
            se.Instance.hideBanner(), _.hide();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.list = this.owner.getChildByName("list");
        }
        initView() {
            if (w.DcLoad) if (B.GameList) {
                for (let e = 0; e < B.GameList.length; e++) this.dataList.push(B.GameList[e]);
                this.onSetList(), this.onTween(), u.Instance.removeListener(s.DCLOADEND, this);
            } else this.dataList = []; else u.Instance.on(s.DCLOADEND, this.initData, this);
        }
        screenAdaptation() { }
        onSetList() {
            this.handNum = Math.floor(Math.random() * this.dataList.length), this.list.hScrollBarSkin = "",
                this.list.selectEnable = !0, this.list.array = this.dataList, this.list.refresh(),
                this.list.renderHandler = new Laya.Handler(this, this.updateItem), this.list.mouseHandler = new Laya.Handler(this, this.onSelect);
        }
        updateItem(e, t) {
            e.getChildByName("m_pic").skin = e.dataSource.img, e.getChildByName("m_name").text = e.dataSource.title;
            let i = e.getChildByName("hand");
            this.handNum == t && (i.visible = !0, i.onShow());
        }
        onSelect(e, t, i) {
            "click" == e.type && B.leadOut(this.dataList[t], "e_14");
        }
        onTween() {
            this.list.array = this.dataList;
            let e = this.list.scrollBar.max / 4;
            Laya.timer.loop(16, null, () => {
                this.list.scrollBar.value += 1, this.list.scrollBar.value >= this.list.scrollBar.max - e && (this.dataList = this.dataList.concat(this.dataList),
                    this.list.updateArray(this.dataList));
            });
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnSj":
                    B.leadOut(this.dataList[Math.floor(Math.random() * this.dataList.length)]);
                    break;

                case "btnNext":
                    v.trackEvent("e_13"), this.closeFun ? (this.owner.close(), this.closeFun()) : Ne.Instance.retrunHome();
            }
        }
        onDisable() {
            super.onDisable();
        }
    }
    class _e extends ne {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {
            y.Instance.isVivo && P.showNative();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.goldBox = this.owner.getChildByName("goldBox"),
                this.btnMore = this.goldBox.getChildByName("btnMore");
        }
        initView() {
            if (this.onCasualClick(), y.Instance.isWx || y.Instance.isQq ? this.btnMore.visible = !0 : this.btnMore.visible = !1,
                y.Instance.isOppo && (this.btnMore.visible = !1, $.NativeLoad)) {
                this.btnMore.visible = !0, this.btnMore.getChildByName("txt").text = "查看广告";
            }
            if (y.Instance.isTt) {
                this.btnMore.visible = !0, this.btnMore.getChildByName("txt").text = "录屏分享";
            }
        }
        screenAdaptation() { }
        onCasualClick() {
            i.IsMisLead ? (Laya.timer.once(i.bannerTime, this, () => {
                y.Instance.isOppo || this.showBottomBanner();
            })) : (y.Instance.isOppo || this.showBottomBanner());
        }
        onUpdate() { }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnNext":
                    v.trackEvent("e_26"), this.owner.close(), Ne.Instance.gameStart();
                    break;

                case "btnMore":
                    y.Instance.isWx ? (v.trackEvent("e_25"), Laya.Dialog.open(f.EXPROTBOX_DIALOG, !0)) : y.Instance.isQq ? M.show({}) : y.Instance.isOppo ? $.NativeLoad && $.ReportAdClick() : y.Instance.isTt &&
                        (l.msg(""));
                    break;

                case "btnRetrun":
                    v.trackEvent("e_28"), Ne.Instance.retrunHome();
            }
        }
    }
    class Re extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            if (y.Instance.isOppo && $.NativeLoad) {
                $.ReportAdShow(), this.owner.zOrder = 9999, this.owner.visible = !0, this.img = this.owner.getChildByName("img"),
                    this.name = this.owner.getChildByName("name");
                let e = "native/ysgg.png";
                $.nativeList[0].imgUrlList && $.nativeList[0].imgUrlList.length > 0 ? e = $.nativeList[0].imgUrlList[0] : $.nativeList[0].icon && $.nativeList[0].icon.length > 0 && (e = $.nativeList[0].icon),
                    this.img.skin = e, this.name.text = $.nativeList[0].desc;
            } else this.owner.visible = !1;
        }
        onClick() {
            $.ReportAdClick();
        }
        onDisable() {
            $.RestNativeInit();
        }
    }
    class Te extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            this.txt = this.owner.getChildByName("txt"), this.nowCoin = w.Coin, isNaN(w.Coin) && (w.Coin = 980,
                p.setNumber(a.COIN, 980)), this.txt.text = x.Instance.setGoldCoin(w.Coin), this.setInfo(),
                u.Instance.on(s.JNINFO, this.setInfo, this);
        }
        setInfo() {
            u.Instance.removeListener(s.JNINFO, this);
        }
        onUpdate() {
            w.Coin != this.nowCoin && (this.txt.text = x.Instance.setGoldCoin(w.Coin), this.nowCoin = w.Coin);
        }
        onClick() { }
        onDisable() { }
    }
    class Me extends ne {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() { }
        findView() { }
        initView() { }
        screenAdaptation() { }
        onCasualClick() { }
        onUpdate() { }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnNext":
                    this.owner.close(), Ne.Instance.gameStart();
            }
        }
    }
    class Ee extends Laya.Script {
        constructor() {
            super(), this.dataList = [], this.index = null, this.eventId = "e_999";
        }
        initData() {
            if (w.DcLoad) {
                let e = 0;
                if (this.isAll) {
                    e = B.GameList.length;
                    for (let t = 0; t < e; t++) this.dataList.push(B.GameList[t]);
                } else if (this.isFront) {
                    e = Math.floor(B.GameList.length / 2);
                    for (let t = 0; t < e; t++) this.dataList.push(B.GameList[t]);
                } else {
                    e = B.GameList.length - Math.floor(B.GameList.length / 2);
                    for (let e = Math.floor(B.GameList.length / 2); e < B.GameList.length; e++) this.dataList.push(B.GameList[e]);
                }
                this.dataList.length < 1 ? this.owner.visible = !1 : this.owner.visible = !0, this.setExprot(),
                    u.Instance.removeListener(s.DCLOADEND, this);
            } else u.Instance.on(s.DCLOADEND, this.initData, this);
        }
        setExprot() {
            if (this.dataList.length < 1) return !1;
            this.index++, this.index >= this.dataList.length && (this.index = 0), this.img.skin = this.dataList[this.index].img,
                Laya.timer.once(2e3, this, this.setExprot);
        }
        onEnable() {
            y.Instance.isWx || y.Instance.isOppo || y.Instance.isWeb ? (this.img = this.owner.getChildByName("img"),
                this.initData()) : this.owner.visible = !1;
        }
        onClick() {
            w.DcLoad && B.leadOut(this.dataList[this.index], this.eventId);
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class ke extends ne {
        constructor() {
            super(), this.btnSrc = [], this.isOpenGG = !0;
        }
        initData() {
            this.isOpenGG = !0, P.ReportAdShow(), this.btnSrc = ["native/btn1.png", "native/btn2.png", "native/btn3.png", "native/btn4.png", "native/btn5.png"];
        }
        findView() {
            this.box = this.owner.getChildByName("box"), this.pic = this.box.getChildByName("pic"),
                this.name = this.box.getChildByName("name"), this.btnClose = this.box.getChildByName("btnClose"),
                this.btnCloseTxt = this.btnClose.getChildByName("txt"), this.ggClose = this.box.getChildByName("ggClose");
        }
        initView() {
            this.name.text = P.nativeList[0].title, this.pic.skin = P.nativeList[0].imgUrlList[0],
                this.btnClose.skin = this.btnSrc[Math.floor(Math.random() * this.btnSrc.length)],
                this.btnCloseTxt.text = "", i.IsMisLead ? this.ggClose.visible = !0 : Laya.timer.once(2e3, this, () => {
                    this.ggClose.visible = !0;
                });
        }
        screenAdaptation() { }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "ggClose":
                    w.NowLevel > 4 && this.isOpenGG ? (this.isOpenGG = !1, P.ReportAdClick(), this.closeFun && this.closeFun()) : (this.owner.close(),
                        this.closeFun && this.closeFun());
                    break;

                case "pic":
                case "btnClose":
                case "name":
                    P.ReportAdClick(), this.owner.close(), this.closeFun && this.closeFun();
            }
        }
        onDisable() {
            P.RestNativeInit(), Laya.timer.clearAll(this);
        }
    }
    class Oe extends ne {
        constructor() {
            super(), this.btnSrc = [], this.isOpenGG = !0;
        }
        initData() {
            this.isOpenGG = !0, $.ReportAdShow(), this.btnSrc = ["native/btn1.png", "native/btn2.png", "native/btn3.png", "native/btn4.png", "native/btn5.png"];
        }
        findView() {
            this.box = this.owner.getChildByName("box"), this.pic = this.box.getChildByName("pic"),
                this.name = this.box.getChildByName("name"), this.btnClose = this.box.getChildByName("btnClose"),
                this.btnCloseTxt = this.btnClose.getChildByName("txt"), this.ggClose = this.box.getChildByName("ggClose");
        }
        initView() {
            this.name.text = $.nativeList[0].title;
            let e = "native/ysgg.png";
            $.nativeList[0].imgUrlList && $.nativeList[0].imgUrlList.length > 0 ? e = $.nativeList[0].imgUrlList[0] : $.nativeList[0].icon && $.nativeList[0].icon.length > 0 && (e = $.nativeList[0].icon),
                this.pic.skin = e, this.btnClose.skin = this.btnSrc[Math.floor(Math.random() * this.btnSrc.length)],
                this.ggClose.visible = !0;
        }
        screenAdaptation() { }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "ggClose":
                    this.owner.close(), this.closeFun && this.closeFun();
                    break;

                case "pic":
                case "btnClose":
                case "name":
                    $.ReportAdClick(), this.owner.close(), this.closeFun && this.closeFun();
            }
        }
        onDisable() {
            $.RestNativeInit(), Laya.timer.clearAll(this);
        }
    }
    class Ue extends ne {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {
            y.Instance.isVivo && P.showNative();
        }
        findView() {
            this.goldBox = this.owner.getChildByName("goldBox"), this.moveBox = this.owner.getChildByName("moveBox"),
                this.check = this.moveBox.getChildByName("check"), this.goldTxt = this.goldBox.getChildByName("goldTxt");
        }
        initView() {
            i.IsMisLead ? this.check.selected = !0 : this.check.selected = !1, this.onCasualClick(),
                y.Instance.isQq && (this.check.visible = !1, this.check.selected = !1), y.Instance.isVivo && w.NowLevel > 4 && Math.random() < .5 && (this.check.selected = !0),
                this.check.selected ? this.goldTxt.text = "+800" : this.goldTxt.text = "+200", this.check.on(Laya.Event.CLICK, this, () => {
                    this.check.selected ? this.goldTxt.text = "+800" : this.goldTxt.text = "+200";
                });
            platform.getInstance().initList(this.owner.getChildByName("list_showList"));
        }
        screenAdaptation() { }
        onCasualClick() {
            i.IsMisLead ? (Laya.timer.once(i.bannerTime, this, () => {
                y.Instance.isOppo || this.showBottomBanner();
            })) : (y.Instance.isOppo || this.showBottomBanner()),
                y.Instance.isBd && (w.NowLevel < 4 ? this.check.selected = !1 : this.check.selected = !0);
        }
        onNext(e) {
            w.getCoin(e), l.msg("Coin +" + e), this.owner.close(), y.Instance.isBd ? Ne.Instance.gameStart() : Ne.Instance.retrunHome();
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnNext":
                    this.check.selected ? se.Instance.showVideo({
                        success: () => {
                            v.trackEvent("e_10"), this.onNext(800);
                        }
                    }) : (v.trackEvent("e_11"), y.Instance.isBd && w.NowLevel >= 4 && Math.random() < .8 ? se.Instance.showVideo({
                        success: () => {
                            v.trackEvent("e_10"), this.onNext(800);
                        },
                        fail: () => {
                            this.onNext(200);
                        }
                    }) : this.onNext(200));
            }
        }
    }
    class We extends ne {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {
            y.Instance.isVivo && P.showNative();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.goldBox = this.owner.getChildByName("goldBox"),
                this.btnMore = this.goldBox.getChildByName("btnMore");
        }
        initView() {
            this.onCasualClick(), this.btnMore.visible = !1
        }
        screenAdaptation() { }
        onCasualClick() {
            i.IsMisLead ? (Laya.timer.once(i.bannerTime, this, () => {
                y.Instance.isOppo || this.showBottomBanner();
            })) : (y.Instance.isOppo || this.showBottomBanner());
        }
        onUpdate() { }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnNext":
                    v.trackEvent("e_7"), this.owner.close(), Ne.Instance.gameStart();
                    break;

                case "btnMore":
                    y.Instance.isWx ? (v.trackEvent("e_6"), Laya.Dialog.open(f.EXPROTBOX_DIALOG, !0)) : y.Instance.isQq ? M.show({}) : y.Instance.isTt && (l.msg(""));
                    break;

                case "btnRetrun":
                    v.trackEvent("e_9"), Ne.Instance.retrunHome();
            }
        }
    }
    class Pe extends ne {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() { }
        findView() {
            this.goldBox = this.owner.getChildByName("goldBox"), this.btnNext = this.owner.getChildByName("btnNext");
        }
        initView() {
            if (this.onCasualClick(), y.Instance.isBd) {
                this.goldBox.getChildByName("btnResu").getChildByName("txt").text = "Revive", this.btnNext.visible = !1,
                    Laya.timer.once(2e3, this, () => {
                        this.btnNext.visible = !0;
                    });
            }
            platform.getInstance().initList(this.owner.getChildByName("list_showList"));
        }
        screenAdaptation() { }
        onCasualClick() {
            i.IsMisLead ? (Laya.timer.once(i.bannerTime, this, () => {
                y.Instance.isOppo || this.showBottomBanner();
            })) : (y.Instance.isOppo || this.showBottomBanner());
        }
        onUpdate() { }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnNext":
                    v.trackEvent("e_23"), y.Instance.isWx && i.IsMisLead ? Laya.Dialog.open(f.EXPROTBOX3_DIALOG, !0, () => {
                        Laya.Dialog.open(f.EXPROTBOX_DIALOG, !0, () => {
                            Laya.Dialog.open(f.EXPROTBOX2_DIALOG, !0, () => {
                                Ne.Instance.retrunHome()
                            });
                        });
                    }) : (this.owner.close(), Ne.Instance.retrunHome());
                    break;

                case "btnJump":
                    se.Instance.showVideo({
                        success: () => {
                            v.trackEvent("e_21"), this.owner.close(), Ne.Instance.gameEnd(!0);
                        }
                    });
                    break;

                case "btnResu":
                    se.Instance.showVideo({
                        success: () => {
                            v.trackEvent("e_22"), this.owner.close(), Ne.Instance.gameRelive();
                        }
                    });
            }
        }
    }
    class He extends Laya.Scene {
        openedCallBack(e) {
            this.opened_call_back = e;
        }
        onOpened(t) {
            e.log("BaseSceneRt----------------onOpened param=", t), this.opened_call_back && this.opened_call_back(t);
        }
        onAwake() {
            this.width = Laya.stage.width, this.height = Laya.stage.height, this.pos(0, 0),
                e.log("屏幕", Laya.stage.width, Laya.Browser.width, Laya.Browser.clientWidth), y.Instance.isWx && i.IsMisLead && w.isScene && this.name;
        }
    }
    class Ge extends Laya.Script {
        constructor() {
            super(), this.isSwitch = !1;
        }
        onEnable() {
            this.maxAngle = w.FxpAngle, this.fxp = this.owner.getChildByName("fxp"), this.init();
        }
        init() {
            this.firstPoin = new Laya.Point(), this._point = new Laya.Point(), this.ownerP = x.Instance.stagePoin(this.fxp);
        }
        onMouseDown() {
            this.firstPoin.setTo(Laya.stage.mouseX, Laya.stage.mouseY), this.isSwitch = !0,
                this.offFxpToNormal();
        }
        onMouseMove() {
            this.isSwitch && (this._point.setTo(Laya.stage.mouseX, Laya.stage.mouseY), this.onFxpRotation(this.getAngle()));
        }
        onMouseOut() {
            e.log("鼠标弹起2"), this.isSwitch = !1, this.onFxpToNormal();
        }
        subtract(e, t) {
            let i = new Laya.Point();
            return i.x = e.x - t.x, i.y = e.y - t.y, i;
        }
        getAngle() {
            let e = 0, t = this.subtract(this.firstPoin, this.ownerP), i = this.subtract(this._point, this.ownerP);
            return e = x.Instance.radianToAngle(Math.atan2(i.y, i.x)) - x.Instance.radianToAngle(Math.atan2(t.y, t.x)),
                this.firstPoin.setTo(this._point.x, this._point.y), Math.abs(e) >= 180 ? e = Math.abs(e) - 360 : Math.abs(e) <= -180 && (e = 360 - Math.abs(e)),
                e;
        }
        onFxpRotation(e) {
            this.fxp.rotation += e, this.fxp.rotation >= this.maxAngle ? this.fxp.rotation = this.maxAngle : this.fxp.rotation <= -this.maxAngle && (this.fxp.rotation = -this.maxAngle),
                this.setAngle(this.fxp.rotation);
        }
        onFxpToNormal() {
            Laya.timer.frameLoop(1, this, this.fxpToNormal);
        }
        offFxpToNormal() {
            Laya.timer.clear(this, this.fxpToNormal);
        }
        fxpToNormal() {
            let e = 10;
            this._angle > 0 && (e = -e), this.fxp.rotation += e, this.fxp.rotation > 0 && this.fxp.rotation < Math.abs(e) ? this.fxp.rotation = 0 : this.fxp.rotation < 0 && this.fxp.rotation > -Math.abs(e) && (this.fxp.rotation = 0),
                this.setAngle(this.fxp.rotation), 0 == this._angle && this.offFxpToNormal();
        }
        setAngle(e) {
            this._angle = e, u.Instance.emit(s.FXP, [this._angle]);
        }
    }
    class Fe extends Laya.Script {
        onEnable() {
            this.owner.text = "Level " + w.NowLevel, u.Instance.on(s.GAMESTART, () => {
                this.owner.text = "Level " + w.NowLevel;
            }, this);
        }
        onDisable() {
            u.Instance.removeListener(s.GAMESTART, this);
        }
    }
    class ze extends le {
        constructor() {
            super(), this.skinNum = 0, this.isVideo = !1;
        }
        initData() {
            v.trackEvent("e_2"), this.skinNum = w.GetSkin, //w.FirstHome || (this.skinNum = this.getCarNum()),
                y.Instance.isVivo && w.VIVOHome && P.showNative();
        }
        getCarNum() {
            let e = 0;
            for (let t = 0; t < w.SkinData.length; t++) if (!w.SkinData[t].have) return e = t;
            return e;
        }
        findView() {
            this.carBox = this.owner.getChildByName("carBox"), this.btnLeft = this.carBox.getChildByName("btn_left"),
                this.btnRight = this.carBox.getChildByName("btn_right"), this.btnNext = this.owner.getChildByName("btnNext"),
                this.Ani = this.btnNext.getChildByName("Ani"), this.btnBuy = this.owner.getChildByName("btnBuy"),
                this.btnMore = this.owner.getChildByName("btnMore"), ye.Instace.motor();
            this.btnMusic = this.owner.getChildByName("btnMusic");
        }
        initView() {
            this.btnMusic.skin = window.WebAudioEngine.pause ? "public/btn_sound_off.png" : "public/btn_sound_on.png";
            this.setData(), this.setSkin(this.skinNum),
                this.btnLeft.on(Laya.Event.CLICK, this, () => {
                    this.skinNum--, this.skinNum < 0 && (this.skinNum = w.SkinData.length - 1), this.setSkin(this.skinNum);
                }), this.btnRight.on(Laya.Event.CLICK, this, () => {
                    this.skinNum++, this.skinNum > w.SkinData.length - 1 && (this.skinNum = 0), this.setSkin(this.skinNum);
                }), this.onCheck();
        }
        screenAdaptation() {
            (y.Instance.isWx || y.Instance.isQq) && _.show();
        }
        onCheck() {
            if (p.getBoolean(a.ISNEWUSER, !1)) {
                this.onTl();
                let e = new Date().getDate();
                p.getBoolean(a.ISCHECK, !1) || e == p.getNumber(a.CHECKINDATE, 0) || p.setBoolean(a.ISCHECK, !0);
            } else p.setBoolean(a.ISNEWUSER, !0);
        }
        onTl() {
            y.Instance.isWx && i.IsMisLead && w.HomeTL && (_.hide(), Laya.Dialog.open(f.EXPROTBOX3_DIALOG, !0, () => {
                Laya.Dialog.open(f.EXPROTBOX_DIALOG, !0, () => {
                    Laya.Dialog.open(f.EXPROTBOX2_DIALOG, !0, () => {
                        w.HomeTL = !1, Laya.Dialog.closeAll();
                    });
                });
            }));
        }
        initCar() {
            let e = this.Car.addComponent(fe);
            e.playAni("stop", !1), this.carRig = this.Car.getComponent(Laya.Rigidbody3D), this.carRig.isKinematic = !0,
                Laya.timer.frameLoop(1, this, () => {
                    e.wheel1.transform.localRotationEulerX -= 5, e.wheel2.transform.localRotationEulerX -= 5,
                        Math.abs(e.wheel1.transform.localRotationEulerX) >= 360 && (e.wheel1.transform.localRotationEulerX = e.wheel2.transform.localRotationEulerX = 0);
                });
        }
        setData() {
            this.Car = ue.Motor.clone(), this.Car.transform.localScale = new Laya.Vector3(.085, .085, .085),
                o(this.carBox, this.Car, this.owner.width / 2 - 10, this.owner.height / 2 + 170),
                this.initCar(), this.skinS3d = this.carBox.getChildByName("skinS3d");
        }
        setSkin(e) {
            w.GetSkin = e, w.SkinData[e].have ? (this.isVideo = !1, w.GetSkinSy = !1, this.btnNext.skin = "public/btn_start.png",
                this.btnBuy.visible = !1, this.Ani.visible = !0) : (this.isVideo = !0, w.GetSkinSy = !0,
                    this.btnNext.skin = "public/btn_video.png", this.Ani.visible = !1, this.btnBuy.visible = !0);
            let t = this.Car.getChildByName("ManAndMotorAnimation"), i = t.getChildByName("body").getChildByName("body_2"), a = t.getChildByName("body").getChildByName("CON_Master").getChildByName("CON_Hips").getChildByName("page_2"), s = t.getChildByName("body").getChildByName("CON_Master").getChildByName("CON_Hips").getChildByName("page_3"), n = t.getChildByName("MotorControlAll").getChildByName("MotorControl").getChildByName("pipe"), o = n.getChildByName("Head_2").getChildByName("MotorHand");
            we.Instance.upDateTexture2(i, w.SkinData[e].people), we.Instance.upDateTexture(a, w.SkinData[e].people),
                we.Instance.upDateTexture(s, w.SkinData[e].people), we.Instance.upDateTexture(n, w.SkinData[e].car),
                we.Instance.upDateTexture(o, w.SkinData[e].car);
        }
        gameStart() {
            v.trackEvent("e_4"), this.skinS3d.removeChildren(), this.skinS3d.destroyChildren(),
                this.skinS3d.destroy(), Laya.Scene.open(f.GAME_SCENE, !0, Ne.Instance.gameStart);
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && L.play("click"),
            e.target.name) {
                case "btnMore":
                    // M.show({});
                    break;

                case "CoinBox":
                    // y.Instance.isQq && Laya.Dialog.open(f.BX_DIALOG, !1, () => { });
                    break;

                case "btnNext":
                    w.GetSkinSy ? se.Instance.showVideo({
                        success: () => {
                            this.gameStart();
                        }
                    }) : this.gameStart();
                    break;
                case "btnBuy":
                    w.Coin >= 2e3 ? (w.cutCoin(2e3), w.SkinData[this.skinNum].have = !0, p.setList(a.SKINDATA, w.SkinData),
                        w.GetSkin = this.skinNum, p.setNumber(a.GETSKIN, this.skinNum), this.setSkin(this.skinNum),
                        v.trackEvent("e_5")) : l.msg("Coins Are Not Enough");
                    break;
                case "btnMusic":
                    this.changeMusic();
                    break;
            }
        }
        changeMusic() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            this.btnMusic.skin = window.WebAudioEngine.pause ? "public/btn_sound_off.png" : "public/btn_sound_on.png";
            Laya.LocalStorage.setItem("Mega-Ramp-Stunt-Moto-musicState", JSON.stringify(window.WebAudioEngine.pause));
        }
        onDisable() {
            super.onDisable(), w.HomeTL = !0, (y.Instance.isWx || y.Instance.isQq) && _.hide(),
                w.FirstHome = !1, w.VIVOHome = !1;
        }
    }
    class Xe {
        static SetTl(e, t) {
            if (e) {
                this.TlVal -= t;
                let e = Laya.timer.currTimer;
                p.setNumber(a.TLTIME, e);
            } else this.TlVal += t, this.TlVal > this.TLMax && (this.IsTLCut = !1, Laya.timer.clear(this, this.SetTl));
            this.TlVal < this.TLMax && (this.IsTLCut || (this.IsTLCut = !0, Laya.timer.loop(this.TLCutTime, this, this.SetTl, [!1, 1]))),
                this.TlVal <= 0 && (this.TlVal = 0), p.setNumber(a.TL, this.TlVal);
        }
        static initTL() {
            this.TlVal = p.getNumber(a.TL, this.TLMax);
            let t = this.TLMax - this.TlVal;
            if (this.TlVal < this.TLMax) {
                let i = (Laya.timer.currTimer - p.getNumber(a.TLTIME, Laya.timer.currTimer)) / this.TLCutTime;
                e.log("体力", i), (i = Math.floor(i)) > t && (i = t), this.SetTl(!1, i);
            }
        }
    }
    Xe.TlVal = 5, Xe.TLMax = 5, Xe.IsTLCut = !1, Xe.TLCutTime = 3e5;
    class qe extends le {
        constructor() {
            super(), this.assets = ["res/atlas/comp.atlas", "res/atlas/comp.png", "res/atlas/game.atlas", "res/atlas/game.png",
                "res/atlas/public.atlas", "res/atlas/public.png", "res/atlas/dc.atlas", "res/atlas/dc.png", "sound/click.mp3"],
                this.loadTaskNum = 0;
        }
        onPrompt() {
            this.prompt = this.owner.getChildByName("prompt"), this.prompt.text = "Loading..."
        }
        initData() {
            v.trackEvent("e_1"), this.loadTaskNum = 0, w.MaxLevel = w.LevelData.length, Xe.initTL(),
                w.DcSj2 = p.getBoolean(a.DcSj2, !1), w.DcSj3 = p.getBoolean(a.DcSj3, !1), w.Coin = p.getNumber(a.COIN, 0),
                w.NowLevel = w.UserLevel = p.getNumber(a.USERLEVEL, 1), w.GetSkin = p.getNumber(a.GETSKIN, 0),
                p.getList(a.SKINDATA) && (w.SkinData = p.getList(a.SKINDATA)), Laya.loader.load("sound/bg.mp3", new Laya.Handler(this, () => { }));
        }
        findView() {
            this.logo = this.owner.getChildByName("logo"), this.bar = this.owner.getChildByName("progress"),
                this.onPrompt();
        }
        initView() {
            this.logo.visible = !0,
                platform.getInstance().cargamesstartup("Mega-Ramp-Stunt-Moto", () => {
                    platform.getInstance().showSplash();
                    this.loadSubpackages("sound", "prefab", "motor", "skin").then(() => {
                        this.onZyLoad();
                    });
                })
        }
        screenAdaptation() { }
        getPrefabs() {
            y.Instance.isWx;
            Laya.loader.create(["res/LayaScene_Prefabs/Conventional/level1.lh", "res/LayaScene_Prefabs/Conventional/level2.lh", "res/LayaScene_Prefabs/Conventional/level3.lh",
                "res/LayaScene_Prefabs/Conventional/level4.lh", "res/LayaScene_Prefabs/Conventional/level5.lh", "res/LayaScene_Prefabs/Conventional/level6.lh",
                "res/LayaScene_Prefabs/Conventional/level7.lh", "res/LayaScene_Prefabs/Conventional/level8.lh", "res/LayaScene_Prefabs/Conventional/level9.lh",
                "res/LayaScene_Prefabs/Conventional/level10.lh", "res/LayaScene_Prefabs/Conventional/level11.lh", "res/LayaScene_Prefabs/Conventional/rusuMd.lh",
                "res/LayaScene_Motor/Conventional/motorBox.lh", "res/LayaScene_Prefabs/Conventional/PassPart.lh"], Laya.Handler.create(this, () => {
                    for (let e = 0; e < w.LevelData.length; e++) ue.Levels.set("Level" + (e + 1), Laya.loader.getRes("res/LayaScene_Prefabs/Conventional/level" + (e + 1) + ".lh"));
                    ue.Motor = Laya.loader.getRes("res/LayaScene_Motor/Conventional/motorBox.lh"), ue.ruseMd = Laya.loader.getRes("res/LayaScene_Prefabs/Conventional/rusuMd.lh"),
                        ue.Part.Pass = Laya.loader.getRes("res/LayaScene_Prefabs/Conventional/PassPart.lh"),
                        window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                    window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Mega-Ramp-Stunt-Moto-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Mega-Ramp-Stunt-Moto-musicState")) : false;
                    platform.getInstance().hideSplash();
                    platform.getInstance().showBanner();
                    Laya.SoundManager.playMusic("sound/bg.mp3");
                    Laya.Scene.open(f.HOME_SCENE), y.Instance.isMz && te.show();
                }), Laya.Handler.create(this, t => {
                    e.log("[进度设置]", t), this.bar.value = t;
                }));
        }
        loadSubpackages(...t) {
            let i = this;
            return new Promise((a, s) => {
                if (e.log("分包加载开始"), t && t.length > 0 && (y.Instance.isWx || y.Instance.isQq || y.Instance.isBd || y.Instance.isVivo)) {
                    let n = 0;
                    for (let o = 0; o < t.length; o++) {
                        y.Instance.platform.loadSubpackage({
                            name: t[o],
                            success: () => {
                                ++n == t.length && (e.log("分包加载成功"), i.loadSubpackagesOther("skyBox").then(() => {
                                    w.SkyIsLoad = !0;
                                }), a());
                            },
                            fail: () => {
                                e.log("分包加载失败"), s();
                            }
                        }).onProgressUpdate(e => {
                            this.bar.value = e.progress;
                        });
                    }
                } else e.log("不需要加载分包"), w.SkyIsLoad = !0, a();
            });
        }
        loadSubpackagesOther(...t) {
            return new Promise((i, a) => {
                if (e.log("分包加载开始"), t && t.length > 0) {
                    let s = 0;
                    for (let n = 0; n < t.length; n++) y.Instance.platform.loadSubpackage({
                        name: t[n],
                        success: () => {
                            ++s == t.length && (e.log("分包加载成功"), i());
                        },
                        fail: () => {
                            e.log("分包加载失败"), a();
                        }
                    });
                }
            });
        }
        onZyLoad() {
            Laya.loader.load(this.assets, new Laya.Handler(this, () => {
                this.getPrefabs();
            }), new Laya.Handler(this, t => {
                e.log("[进度设置]", t), this.bar.value = t;
            }));
        }
        createDrawer() {
            let e;
            Laya.loader.create("Prefabs/exprotDrawerBox.json", Laya.Handler.create(this, function (t) {
                let i = new Laya.Prefab();
                i.json = t, (e = i.create()).bottom = 0, e.left = 0, Laya.stage.addChild(e), e.zOrder = 9999;
            }));
        }
    }
    class Qe extends Laya.Script {
        onEnable() {
            if (y.Instance.isOppo && $.NativeLoad) {
                this.owner.visible = !0, this.owner.zOrder = 9999;
                let e = ["native/btn_ckgg1.png", "native/btn_ckgg2.png"];
                this.owner.skin = e[Math.floor(Math.random() * e.length)];
            } else this.owner.visible = !1;
        }
        onClick() {
            y.Instance.isOppo && $.NativeLoad && $.ReportAdClick();
        }
        onDisable() { }
    }
    class Ke {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("Runtimes/BaseDialogRt.ts", I), e("Activity/Scripts/BxDialog.ts", oe), e("Prefabs/Exprot/DcHandRT.ts", re),
                e("Prefabs/Exprot/ExprotBoxV.ts", de), e("Activity/Scripts/ExprotBox2Dialog.ts", xe),
                e("Activity/Scripts/ExprotBox3Dialog.ts", De), e("Activity/Scripts/ExprotBoxDialog.ts", Ve),
                e("Activity/Scripts/FailDialog.ts", _e), e("Platform/Oppo/nativeTu.ts", Re), e("Prefabs/CoinControl.ts", Te),
                e("Activity/Scripts/HomeDialog.ts", Me), e("Prefabs/Exprot/RandomExprotMg.ts", Ee),
                e("Activity/Scripts/NativeDialog.ts", ke), e("Activity/Scripts/NativeOppoDialog.ts", Oe),
                e("Activity/Scripts/PassCoinDialog.ts", Ue), e("Activity/Scripts/PassDialog.ts", We),
                e("Activity/Scripts/ResulDialog.ts", Pe), e("Runtimes/BaseSceneRt.ts", He), e("Game/Script/Scene/GameScene.ts", Be),
                e("Game/Script/SpeedBtnMg.ts", pe), e("Game/Script/FxpMg.ts", Ge), e("Game/Script/LevelMg.ts", Fe),
                e("Game/Script/TimeMg.ts", Ie), e("Game/Script/Scene/HomeScene.ts", ze), e("Game/Script/Scene/LoadingScene.ts", qe),
                e("Platform/Oppo/nativeBtn.ts", Qe);
        }
    }
    Ke.width = 1334, Ke.height = 750, Ke.scaleMode = "exactfit", Ke.screenMode = "none",
        Ke.alignV = "middle", Ke.alignH = "center", Ke.startScene = "Scenes/LoadingScene.scene",
        Ke.sceneRoot = "", Ke.debug = !1, Ke.stat = !1, Ke.physicsDebug = !1, Ke.exportSceneToJson = !0,
        Ke.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(Ke.width, Ke.height) : Laya.init(Ke.width, Ke.height, Laya.WebGL),
                Laya.stage.scaleMode = Ke.scaleMode, Laya.stage.screenMode = Ke.screenMode, Laya.stage.alignV = Ke.alignV,
                Laya.stage.alignH = Ke.alignH, Laya.URL.exportSceneToJson = Ke.exportSceneToJson,
                window.yad = platform.getInstance().createLogo();
            window.yad.bottom = 0;
            window.yad.centerX = 0;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Ke.startScene && Laya.Scene.open(Ke.startScene);
        }
    }(), class {
        static init() {
            return new Promise(i => {
                UIConfig.popupBgAlpha = .8, UIConfig.closeDialogOnSide = !1, y.Instance.init(),
                    e.log("平台初始化-完成"), L.init(), e.log("音效初始化-完成"), t.init(), Laya.MouseManager.multiTouchEnabled = !0,
                    se.Instance.init(), e.log("广告初始化-完成"), b.login(), e.log("登录操作"), y.Instance.platformName !== y.Instance.Wx && y.Instance.platformName !== y.Instance.Qq || (A.postAld = !0);
            });
        }
        static initData() { }
        static loadSubpackages(...t) {
            return new Promise((i, a) => {
                if (e.log("分包加载开始"), t && t.length > 0 && (y.Instance.onWx || y.Instance.onQq)) {
                    let s = 0;
                    for (let n = 0; n < t.length; n++) y.Instance.platform.loadSubpackage({
                        name: t[n],
                        success: () => {
                            ++s == t.length && (e.log("分包加载成功"), i());
                        },
                        fail: () => {
                            e.log("分包加载失败"), a();
                        }
                    });
                } else e.log("不需要加载分包"), i();
            });
        }
    }.init();
}();