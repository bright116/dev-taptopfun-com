!function() {
    "use strict";
    class e {
        static init() {
            this.gameHeight = 750 * Laya.Browser.clientHeight / Laya.Browser.clientWidth, this.clientScale = this.gameHeight / Laya.Browser.clientHeight, 
            this.heightOffsetScale = (this.gameHeight - 1334) / 290, this.gameHeight - 1334 > 0 && (this.offY = (this.gameHeight - 1334) / 2), 
            this.isIphoneX = Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2;
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
    e.gameWidth = 750, e.gameHeight = 1334, e.offY = 0, e.isIphoneX = !1, e.clientScale = 1, 
    e.heightOffsetScale = 0;
    class t {}
    t.GAME_NAME = "skyCarView", t.VERSION = 107, t.bannerTime = 1e3, t.BoxTime = 2250, 
    t.GameId = "", t.Scene = "0", t.Code = "", t.OpenId = "", t.IsShowRedPackge = !1, 
    t.IsMisLead = !1, t.IsStatus = !1, t.YDShowing = !1, t.BulletinList = [], t.StartDialogShowAdTime = 1e3, 
    t.fenhongData = null;
    class i {}
    i.DATE = "date", i.MONTH = "month", i.ISSCENE = "isScene", i.ISNEWUSER = "IsNewUser", 
    i.ISCHECK = "IsCheck", i.CHECKINDATE = "checkDate", i.CHECKIN = "checkIn", i.NEWUSER = "NewUser", 
    i.USERLEVEL = "UserLevel", i.SKINDATA = "SkinData", i.GETSKIN = "GetSkin", i.COIN = "Coin", 
    i.TL = "LocalTL", i.TLTIME = "TLTIME", i.HOMEVIDEODATE = "HomeVideoDate", i.GAMESTARTDATE = "GameStartDate", 
    i.HANDTS = "handTs", i.DcSj2 = "DcSj2", i.DcSj3 = "DcSj3", i.FXSEL = "FxSel";
    class a {}
    a.JNINFO = "JnInfo", a.GAMELOADEND = "GameLoadEnd", a.GAMESTART = "GameStart", a.GAMEEND = "GameEnd", 
    a.SELECT = "Select", a.SELECTCALLBACK = "SelectCallback", a.LEVELEND = "LevelEnd", 
    a.TL = "Tl", a.DCLOADEND = "DCLoadEnd", a.CLOSECT = "CloseCT", a.FXP = "Fxp", a.TIMEEND = "TimeEnd";
    (class {}).ROLE = "Role";
    const s = (e, t, i, a, s) => [ [ "moveTo", e + s, 0 ], [ "lineTo", e + i - s, 0 ], [ "arcTo", e + i, t, e + i, t + s, s ], [ "lineTo", e + i, t + a - s ], [ "arcTo", e + i, t + a, e + i - s, t + a, s ], [ "lineTo", e + s, t + a ], [ "arcTo", e, t + a, e, t + a - s, s ], [ "lineTo", e, t + s ], [ "arcTo", e, t, e + s, t, s ], [ "closePath" ] ], n = (e, t, i, a) => {
        var s = new Laya.Scene3D();
        s.name = "skinS3d", e.addChild(s);
        var n = new Laya.Camera();
        s.addChild(n), n.transform.localPosition = new Laya.Vector3(8.25, 6.76, 9.1), n.transform.rotate(new Laya.Vector3(-21.93, 43.3, 0), !1, !1), 
        n.orthographic = !0, n.orthographicVerticalSize = 1, n.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
        let o = new Laya.Vector3(i, a, 0), r = new Laya.Vector3(0, 0, 0);
        s.addChild(t), n.convertScreenCoordToOrthographicCoord(o, r), t.transform.position = r;
    }, o = e => {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
            let a = e.charAt(i);
            t = 16 * t + r(a);
        }
        return t;
    }, r = e => {
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
        alert(e, t = {}, i = null) {}
        static msg(e, t = {}, i = null) {
            l.Instance().msg(e, t, i);
        }
        msg(e, t = {
            time: 1500
        }, i = null) {
            let a = this.root.addChild(new Laya.Box()), n = a.addChild(new Laya.Sprite()), o = a.addChild(new Laya.Label());
            o.text = e, o.font = "SimHei", o.color = "#ffffff", o.padding = "15,15,15,15", o.fontSize = 30, 
            a.width = n.width = o.width, a.height = n.height = o.height, n.graphics.drawPath(0, 0, s(0, 0, o.width, o.height, 10), {
                fillStyle: "#000000"
            }), n.alpha = .5, a.x = (Laya.stage.width - a.width) / 2, a.y = (Laya.stage.height - a.height) / 2, 
            setTimeout(() => {
                a.removeSelf(), i && i();
            }, t.time || 1500);
        }
        static confirm(e, t = {}, i = null, a = null) {
            l.Instance().confirm(e, t, i, a);
        }
        confirm(e, t = {}, i = null, a = null) {
            let n = this.root.addChild(new Laya.Box()), o = n.addChild(new Laya.Sprite()), r = n.addChild(new Laya.Label()), l = n.addChild(new Laya.Label()), d = n.addChild(new Laya.Label()), h = n.addChild(new Laya.Label());
            l.dataSource = d.dataSource = h.dataSource = r.dataSource = {
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
                y: l.height
            }, d.dataSource = {
                text: t.cancelText || "否",
                width: l.width / 2,
                y: l.height + r.height
            }, h.dataSource = {
                text: t.yesText || "是",
                width: l.width / 2,
                color: "#169C24",
                y: l.height + r.height,
                x: l.width / 2
            }, n.dataSource = {
                width: .6 * Laya.stage.width,
                height: l.height + r.height + h.height,
                x: .2 * Laya.stage.width,
                y: (Laya.stage.height - l.height - r.height - h.height) / 2
            }, o.graphics.drawPath(0, 0, s(0, 0, n.width, n.height, 10), {
                fillStyle: "#FFFFFF"
            }), o.graphics.drawLine(0, l.height + r.height, n.width, l.height + r.height, "#D2D2D2", 1), 
            o.graphics.drawLine(n.width / 2, l.height + r.height, n.width / 2, n.height, "#D2D2D2", 1), 
            d.on(Laya.Event.CLICK, this, e => {
                n.removeSelf(), a && a();
            }), h.on(Laya.Event.CLICK, this, e => {
                n.removeSelf(), i && i();
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
                let e = [ {
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
                } ];
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
    class d {
        constructor() {
            this.bannerAdCache = null, this.rewardedVideoAdCache = null, this.RewardedVideoError = null, 
            this.RewardedVideoFail = null, this.RewardedVideoSuccess = null, this.openDataContext = new h();
        }
        exitMiniProgram(e) {}
        getLaunchOptionsSync() {
            return {
                query: {},
                scene: 1103
            };
        }
        onShow(e) {}
        onHide(e) {}
        offShow(e) {}
        offHide(e) {}
        getSystemInfo(e) {}
        getSystemInfoSync() {}
        onTouchStart(e) {}
        onTouchMove(e) {}
        onTouchEnd(e) {}
        onTouchCancel(e) {}
        offTouchStart(e) {}
        offTouchMove(e) {}
        offTouchEnd(e) {}
        offTouchCancel(e) {}
        setTimeout(e, t) {
            return 1;
        }
        clearTimeout(e) {}
        setInterval(e, t) {
            return 2;
        }
        clearInterval(e) {}
        onAudioInterruptionBegin(e) {}
        offAudioInterruptionBegin(e) {}
        onAudioInterruptionEnd(e) {}
        offAudioInterruptionEnd(e) {}
        onError(e) {}
        offError(e) {}
        showToast(e) {}
        showModal(e) {}
        showActionSheet(e) {}
        hideToast(e) {}
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
        updateKeyboard(e) {}
        showKeyboard(e) {}
        hideKeyboard(e) {}
        onKeyboardInput(e) {}
        onKeyboardConfirm(e) {}
        onKeyboardComplete(e) {}
        offKeyboardInput(e) {}
        offKeyboardConfirm(e) {}
        offKeyboardComplete(e) {}
        setMenuStyle(e) {}
        getMenuButtonBoundingClientRect() {}
        setStatusBarStyle(e) {}
        onWindowResize(e) {}
        offWindowResize(e) {}
        clearStorage(e) {}
        clearStorageSync() {}
        getStorageInfo(e) {}
        getStorageInfoSync() {}
        removeStorage(e) {}
        removeStorageSync(e) {}
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
        updateShareMenu(e) {}
        showShareMenu(e) {}
        hideShareMenu(e) {}
        offShareAppMessage(e) {}
        onShareAppMessage(e) {}
        shareAppMessage(e) {}
        shareVideo(e) {}
        getShareInfo(e) {}
        initShare(e) {}
        share(e) {}
        getNetworkType(e) {}
        onNetworkStatusChange(e) {}
        vibrateLong() {}
        vibrateShort() {}
        reportAnalytics(e, t) {
            console.log("[DebugPlatform][数据上报] eventName:", e, ", data:", t);
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
        initRewardedVideoAd(e = {}) {
            let t = this, i = Laya.stage.addChild(new Laya.Box()), a = i.addChild(new Laya.Button()), s = i.addChild(new Laya.Button()), n = i.addChild(new Laya.Button());
            this.rewardedVideoAdCache = i, i.zOrder = 1002, i.width = Laya.stage.width, i.height = Laya.stage.height, 
            i.graphics.drawRect(0, 0, i.width, i.height, "#aaaaaa"), a.label = "Error", s.label = "Fail", 
            n.label = "Success", a.centerX = s.centerX = n.centerX = 0, a.width = s.width = n.width = 300, 
            a.height = s.height = n.height = 100, a.labelSize = s.labelSize = n.labelSize = 50, 
            a.top = 300, s.top = 450, n.top = 600, a.on(Laya.Event.CLICK, this, () => {
                console.log("[RewardedVideo] Error"), this.rewardedVideoAdCache.visible = !1, t.RewardedVideoError && t.RewardedVideoError();
            }), s.on(Laya.Event.CLICK, this, () => {
                console.log("[RewardedVideo] Fail"), this.rewardedVideoAdCache.visible = !1, t.RewardedVideoFail && t.RewardedVideoFail();
            }), n.on(Laya.Event.CLICK, this, () => {
                console.log("[RewardedVideo] Success"), this.rewardedVideoAdCache.visible = !1, 
                t.RewardedVideoSuccess && t.RewardedVideoSuccess();
            }), i.visible = !1;
        }
        showRewardedVideoAd(e) {
            // null === this.rewardedVideoAdCache && this.initRewardedVideoAd(), this.RewardedVideoError = e.error || null, 
            // this.RewardedVideoFail = e.fail || null, this.RewardedVideoSuccess = e.success || null, 
            // this.rewardedVideoAdCache.visible = !0;
        }
        authorize(e) {}
        checkIsUserAdvisedToRest(e) {}
        openCustomerServiceConversation(e) {}
        login(e) {
            e.success && e.success({
                code: ""
            });
        }
        request(e) {}
        checkSession(e) {}
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
        getSetting(e) {}
        openSetting(e) {}
        getUserInfo(e) {}
        createUserInfoButton(e) {}
    }
    class h {
        createDisplayObject(e, t, i) {
            return new Laya.Sprite();
        }
        postMessage(e) {}
    }
    class c {
        constructor() {
            this.music_url = "", this.music_loop = !1, this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1, 
            this.sound_inner_isStop = !1;
        }
        static get Instance() {
            return c.instance || (c.instance = new c()), c.instance;
        }
        init() {
            p.Instance.onWx ? (this.mp3_inner = p.Instance.platform.createInnerAudioContext(), 
            this.onMusicListener(), this.wav_inner = p.Instance.platform.createInnerAudioContext(), 
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
            this.mp3_inner.onCanplay(() => {}), this.mp3_inner.onPlay(() => {}), this.mp3_inner.onPause(() => {}), 
            this.mp3_inner.onStop(() => {
                this.mp3_inner.destroy(), this.mp3_inner = p.Instance.platform.createInnerAudioContext(), 
                this.onMusicListener(), this.playMusic(this.music_url, this.music_loop);
            }), this.mp3_inner.onEnded(() => {}), this.mp3_inner.onTimeUpdate(() => {}), this.mp3_inner.onError(() => {
                this.mp3_inner.destroy(), this.mp3_inner = p.Instance.platform.createInnerAudioContext(), 
                this.onMusicListener(), this.playMusic(this.music_url, this.music_loop);
            }), this.mp3_inner.onWaiting(() => {}), this.mp3_inner.onSeeking(() => {}), this.mp3_inner.onSeeked(() => {});
        }
        offMusicListener() {
            this.mp3_inner.offCanplay(() => {}), this.mp3_inner.offPlay(() => {}), this.mp3_inner.offPause(() => {}), 
            this.mp3_inner.offStop(() => {}), this.mp3_inner.offEnded(() => {}), this.mp3_inner.offTimeUpdate(() => {}), 
            this.mp3_inner.offError(() => {}), this.mp3_inner.offWaiting(() => {}), this.mp3_inner.offSeeking(() => {}), 
            this.mp3_inner.offSeeked(() => {});
        }
        onSoundListener() {
            this.wav_inner.onCanplay(() => {}), this.wav_inner.onPlay(() => {
                this.sound_inner_isPlaying = !0, this.sound_inner_isPause = !1, this.sound_inner_isStop = !1;
            }), this.wav_inner.onPause(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !0, this.sound_inner_isStop = !1;
            }), this.wav_inner.onStop(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1, this.sound_inner_isStop = !0;
            }), this.wav_inner.onEnded(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1, this.sound_inner_isStop = !0;
            }), this.wav_inner.onTimeUpdate(() => {}), this.wav_inner.onError(() => {
                this.sound_inner_isPlaying = !1, this.sound_inner_isPause = !1, this.sound_inner_isStop = !1;
            }), this.wav_inner.onWaiting(() => {}), this.wav_inner.onSeeking(() => {}), this.wav_inner.onSeeked(() => {});
        }
        offSoundListener() {
            this.wav_inner.offCanplay(() => {}), this.wav_inner.offPlay(() => {}), this.wav_inner.offPause(() => {}), 
            this.wav_inner.offStop(() => {}), this.wav_inner.offEnded(() => {}), this.wav_inner.offTimeUpdate(() => {}), 
            this.wav_inner.offError(() => {}), this.wav_inner.offWaiting(() => {}), this.wav_inner.offSeeking(() => {}), 
            this.wav_inner.offSeeked(() => {});
        }
    }
    class m {
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
            this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(new m(t, i));
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
    class g {
        static remove(e) {
            null != e && "" != e ? Laya.LocalStorage.removeItem(g.rootPath + e) : console.error(this.name + "---\x3e remove err : key undefind");
        }
        static setString(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setItem(g.rootPath + e, t) : console.error(this.name + "---\x3e setString err : key or value undefind");
        }
        static setNumber(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setItem(g.rootPath + e, String(t)) : console.error(this.name + "---\x3e setNumber err : key or value undefind");
        }
        static setBoolean(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setItem(g.rootPath + e, t ? "1" : "0") : console.error(this.name + "---\x3e setBoolean err : key or value undefind");
        }
        static setList(e, t) {
            null != t && null != e && "" != e ? Laya.LocalStorage.setJSON(g.rootPath + e, t) : console.error(this.name + "---\x3e setList err : key or value undefind");
        }
        static getString(e, t) {
            if (null == e || "" == e) return console.error(this.name + "---\x3e getString err : key undefind"), 
            null;
            let i = Laya.LocalStorage.getItem(g.rootPath + e);
            return i || (t || null);
        }
        static getNumber(e, t) {
            if (null == e || "" == e) return console.error(this.name + "---\x3e getNumber err : key undefind"), 
            0;
            let i = Laya.LocalStorage.getItem(g.rootPath + e);
            return i && "" != i ? Number(i) : null != t || null != t ? t : 0;
        }
        static getBoolean(e, t) {
            if (null == e || "" == e) return console.error(this.name + "---\x3e getBoolean err : key undefind"), 
            !1;
            let i = Laya.LocalStorage.getItem(g.rootPath + e);
            return i && "" != i ? "1" == i : null != t && t;
        }
        static getList(e, t) {
            if (null == e || "" == e) return console.error("getList err : key undefind"), null;
            let i = Laya.LocalStorage.getJSON(g.rootPath + e);
            return i || (t || null);
        }
    }
    g.rootPath = t.GAME_NAME + "_";
    class w {
        static init() {
            this.IsSpeed = !1;
        }
        static getCoin(e) {
            this.Coin += e, g.setNumber(i.COIN, this.Coin);
        }
        static cutCoin(e) {
            this.Coin -= e, g.setNumber(i.COIN, this.Coin);
        }
    }
    w.NowLevel = 1, w.UserLevel = 1, w.MaxLevel = 7, w.Coin = 0, w.IsIP6 = !1, w.IsTtIOS = !1, 
    w.GetSkin = 0, w.GetSkinSy = !1, w.IsTcHome = !0, w.StartGame = !1, w.RetrunHomeNum = 0, 
    w.Dctj = 0, w.PassNum = 0, w.IsShowBox = !1, w.DCHandNumMax = 1, w.DCHandNum = 0, 
    w.IsDcBox = !0, w.DcLoad = !1, w.DataTime = 0, w.HomeTL = !0, w.VIVOHome = !1, w.SkyIsLoad = !1, 
    w.FirstHome = !0, w.isFXP = !1, w.FxpAngle = 60, w.DcSj2 = !1, w.DcSj3 = !1, w.isScene = !1, 
    w.isDcFail = !1, w.CheckDate = [ {
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
    } ], w.DcBoxzt = 0, w.IsResu = 0, w.IsSpeed = !1, w.IsAddSpeed=true,w.SpeedTime = 10, w.SkinData = [ {
        id: 0,
        name: "red",
        textrue: "res/LayaScene_Prefabs/Conventional/Assets/Textrue/CarColor.png",
        have: !0,
        version: 1
    }, {
        id: 1,
        name: "purple",
        textrue: "res/LayaScene_Prefabs/Conventional/Assets/Textrue/CarPurple.png",
        have: !1
    }, {
        id: 2,
        name: "yellow",
        textrue: "res/LayaScene_Prefabs/Conventional/Assets/Textrue/CarYellow.png",
        have: !1
    } ], w.LevelData = [ {
        id: 0,
        Trap: null
    }, {
        id: 1,
        Trap: null
    }, {
        id: 2,
        resu: [ {
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
        } ]
    }, {
        id: 3,
        resu: [ {
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
        } ]
    }, {
        id: 4,
        resu: [ {
            pos: {
                x: -0,
                y: .3,
                z: 412
            },
            rot: {
                x: 0,
                y: 0,
                z: 0
            }
        } ]
    }, {
        id: 5,
        resu: [ {
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
        } ]
    }, {
        id: 6,
        resu: [ {
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
        } ]
    }, {
        id: 7,
        resu: [ {
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
        } ]
    }, {
        id: 8,
        resu: [ {
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
                z: 422
            },
            rot: {
                x: 0,
                y: -0,
                z: 0
            }
        } ]
    }, {
        id: 9,
        resu: [ {
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
        } ]
    } ];
    class p {
        constructor() {
            this.Wx = "Wx", this.Qq = "Qq", this.Tt = "Tt", this.Vivo = "Vivo", this.Oppo = "Oppo", 
            this.Bd = "Bd", this.Uc = "Uc", this.Web = "Web", this.Mz = "Mz", this.Android = "Android", 
            this.Ios = "Ios", this.platformName = this.Web, this.onWx = !1, this.onQq = !1, this.onTt = !1, 
            this.onVivo = !1, this.onOppo = !1, this.onBd = !1, this.onWeb = !1, this.onUc = !1, 
            this.onMz = !1, this.onAndroid = !1, this.onIos = !1, this.isWx = !1, this.isQq = !1, 
            this.isTt = !1, this.isVivo = !1, this.isOppo = !1, this.isBd = !1, this.isWeb = !1, 
            this.isUc = !1, this.isMz = !1, this.isAndroid = !1, this.isIos = !1, this.xsb = 750 / Laya.Browser.clientWidth, 
            this.JLBtnInfo = {
                top: 88,
                right: 20,
                height: 57,
                width: 0
            };
        }
        static get Instance() {
            return p._instance || (p._instance = new p()), p._instance;
        }
        init() {
            switch (this.platformName) {
              case this.Wx:
                this.isWx = !0, this.initWx();
                break;

              case this.Qq:
                this.isQq = !0, this.initQq();
                break;

              case this.Oppo:
                this.isOppo = !0, this.initOppo();
                break;

              case this.Vivo:
                this.isVivo = !0, this.initVivo();
                break;

              case this.Bd:
                this.isBd = !0, this.initBd();
                break;

              case this.Tt:
                this.isTt = !0, this.initTt();
                break;

              case this.Mz:
                this.isMz = !0, this.initMz();
                break;

              case this.Uc:
                this.isUc = !0, this.initUc();
                break;

              case this.Android:
                this.isAndroid = !0, this.initAndroid();
                break;

              case this.Ios:
                this.isIos = !0, this.initIos();
                break;

              default:
                this.isWeb = !0, this.initWeb();
            }
            this.getJlInfo();
        }
        initWx() {
            this.platform = Laya.Browser.window.wx, this.onWx = !!this.platform, this.platform.uma.init({
                appKey: "5f93e85645b2b751a91a78fa",
                useOpenid: !0,
                autoGetOpenid: !1,
                debug: !0
            }), this.onWx && (this.openDataViewer = new Laya.WXOpenDataViewer(), c.Instance.init());
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
            this.platform = Laya.Browser.window.swan, console.log("百度调试"), this.platform.setEnableDebug({
                enableDebug: !1
            }), this.onBd = !!this.platform;
        }
        initAndroid() {
            this.platform = new d(), this.onAndroid = !!this.platform;
        }
        initIos() {
            this.platform = new d(), this.onIos = !!this.platform;
        }
        initWeb() {
            this.platform = new d(), this.onWeb = !!this.platform, w.DcLoad = !0;
        }
        getJlInfo() {
            if (this.isUc || this.isWeb || this.isAndroid || !this.platform.getMenuButtonBoundingClientRect) Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2 ? this.JLBtnInfo = {
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
                let e;
                console.log("-------------胶囊按钮位置信息-------------", this.platform.getMenuButtonBoundingClientRect());
                let t = {
                    height: (e = this.platform.getMenuButtonBoundingClientRect()).height * Laya.Browser.pixelRatio,
                    top: e.top * Laya.Browser.pixelRatio,
                    right: e.right * Laya.Browser.pixelRatio,
                    width: e.width * Laya.Browser.pixelRatio
                };
                e.top ? (this.JLBtnInfo = t, u.Instance.emit(a.JNINFO)) : Laya.timer.once(1e3, this, this.getJlInfo), 
                console.log("胶囊按钮信息2", t);
            }
        }
        topMidle(t) {
            if (null != t) if (this.platform) {
                let i = this.platform.getMenuButtonBoundingClientRect(), a = (i.height * e.clientScale - t.height) / 2;
                t.y = i.top * e.clientScale + a;
            } else t.y = 20;
        }
        top(t) {
            if (null != t) if (this.platform) {
                let i = this.platform.getMenuButtonBoundingClientRect();
                t.y = i ? i.top * e.clientScale : 20;
            } else t.y = 20;
        }
        wxCopy() {}
        shortVibrate() {
            this.isMz || this.platform && this.platform.vibrateShort();
        }
        longVibrate() {
            this.isMz || this.platform && this.platform.vibrateLong();
        }
        setOpenID(e, t, i) {
            this.onWx && this.platform.uma.setOpenid(e);
        }
    }
    class y extends Laya.Dialog {
        openedCallBack(e) {
            this.opened_call_back = e;
        }
        onOpened(e) {
            console.log("BaseDialogRt----------------onOpened param=", e), this.opened_call_back && this.opened_call_back(e);
        }
        onAwake() {
            this.width = Laya.stage.width, this.height = Laya.stage.height, p.Instance.isWx && t.IsMisLead && w.isScene && this.name;
        }
        retrunBtn() {
            let e = new Laya.Image("public/btn_jlal.png");
            this.addChild(e), e.zOrder = 9999, e.top = p.Instance.JLBtnInfo.top + p.Instance.JLBtnInfo.height + 1, 
            e.right = 20, e.on(Laya.Event.CLICK, this, () => {});
        }
    }
    class I {
        constructor() {}
        static get Instance() {
            return this._instance || (this._instance = new I()), this._instance;
        }
        static init() {
            (p.Instance.isAndroid || p.Instance.isIos) && (I.options = {
                bg: {
                    url: "sound/wav/bg.wav",
                    type: "music"
                },
                coin: {
                    url: "sound/wav/get_coin.wav",
                    type: "sound"
                },
                click: {
                    url: "sound/wav/click.wav",
                    type: "sound"
                },
                pass: {
                    url: "sound/wav/pass.wav",
                    type: "sound"
                },
                fail: {
                    url: "sound/wav/fail.wav",
                    type: "sound"
                },
                die: {
                    url: "sound/wav/die.wav",
                    type: "sound"
                },
                speed: {
                    url: "sound/wav/speedUp.wav",
                    type: "sound"
                },
                speed2: {
                    url: "sound/wav/speedUp2.wav",
                    type: "sound"
                },
                collision: {
                    url: "sound/wav/collision.wav",
                    type: "sound"
                },
                start: {
                    url: "sound/wav/start.wav",
                    type: "sound"
                },
                start2: {
                    url: "sound/wav/start2.wav",
                    type: "sound"
                },
                zhuangji: {
                    url: "sound/wav/zhuangji.wav",
                    type: "sound"
                },
                fire: {
                    url: "sound/wav/fire.wav",
                    type: "sound"
                },
                resuMd: {
                    url: "sound/wav/resuMd.wav",
                    type: "sound"
                },
                stop: {
                    url: "sound/wav/stop.wav",
                    type: "sound"
                },
                run: {
                    url: "sound/wav/run.wav",
                    type: "sound"
                },
                motor: {
                    url: "sound/wav/motor.wav",
                    type: "sound"
                }
            });
            let e = Laya.LocalStorage.getItem(this._status_key);
            this.status = !e;
        }
        static StopAll() {
            I.status = !1;
        }
        static RestAll() {
            I.status = !0;
        }
        static get status() {
            return I._status;
        }
        static set status(e) {
            I._status = e, Laya.SoundManager.muted = Laya.SoundManager.musicMuted = Laya.SoundManager.soundMuted = !I._status, 
            console.log("是否静音", Laya.SoundManager.muted + ""), I._status ? Laya.LocalStorage.removeItem(this._status_key) : (Laya.SoundManager.stopAll(), 
            Laya.LocalStorage.setItem(this._status_key, this._status_key));
        }
        static play(e, t = 1, i = 1, a = null) {
            if (I._status, Laya.SoundManager.setSoundVolume(i, this.options[e].url), "music" === this.options[e].type) {
                if (console.log("播放背景音乐", this.options[e].url), p.Instance.isWx) return void c.Instance.playMusic(this.options[e].url, !0);
                Laya.SoundManager.playMusic(this.options[e].url, 0);
            } else Laya.SoundManager.playSound(this.options[e].url, t, null === a ? null : Laya.Handler.create(this, a));
        }
        static stop(e) {
            if ("music" === this.options[e].type) {
                if (p.Instance.isWx) return void c.Instance.stopAll();
                Laya.SoundManager.stopMusic(), console.log("停止播放背景音乐");
            } else Laya.SoundManager.stopSound(this.options[e].url);
        }
    }
    I._status_key = "sound_key", I._status = !0, I.options = {
        bg: {
            url: "bg.mp3",
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
    class L {}
    L.LOAD_SCENE = "Scenes/LoadingScene.scene", L.HOME_SCENE = "Scenes/HomeScene.scene", 
    L.GAME_SCENE = "Scenes/GameScene.scene", L.Home_DIALOG = "Dialogs/HomeDialog.scene", 
    L.SHOP_DIALOG = "Dialogs/ShopDialog.scene", L.CHECKIN_DIALOG = "Dialogs/CheckInDialog.scene", 
    L.RAND_DIALOG = "Dialogs/RankDialog.scene", L.PASSCOIN_DIALOG = "Dialogs/PassCoinDialog.scene", 
    L.PASS_DIALOG = "Dialogs/PassDialog.scene", L.RESU_DIALOG = "Dialogs/ResuDialog.scene", 
    L.FAIL_DIALOG = "Dialogs/FailDialog.scene", L.BX_DIALOG = "Dialogs/BxDialog.scene", 
    L.BX2_DIALOG = "Dialogs/Bx2Dialog.scene", L.EXPROT_DIALOG = "Dialogs/ExprotDialog.scene", 
    L.EXPROTBOX_DIALOG = "Dialogs/ExprotBoxDialog.scene", L.EXPROTBOX2_DIALOG = "Dialogs/ExprotBox2Dialog.scene", 
    L.EXPROTBOX3_DIALOG = "Dialogs/ExprotBox3Dialog.scene", L.MENT_DIALOG = "Dialogs/MentDialog.scene", 
    L.PAUSE_DIALOG = "Dialogs/PauseDialog.scene", L.TRYFAIL_DIALOG = "Dialogs/TryFailDialog.scene", 
    L.TRYEND_DIALOG = "Dialogs/TryEndDialog.scene", L.LEVEL_DIALOG = "Dialogs/LevelDialog.scene", 
    L.TL_DIALOG = "Dialogs/TlDialog.scene", L.NativeDIALOG = "Dialogs/NativeDialog.scene", 
    L.NativeOppoDIALOG = "Dialogs/NativeOppoDialog.scene";
    class f {
        static onStart(e, i, a) {
            if (!this.postAld) return;
            if (console.log("关卡", w.NowLevel, w.UserLevel), w.UserLevel != w.NowLevel) return;
            let s = {
                stageId: e || w.NowLevel,
                stageName: i ? "Level:" + i : "Level:" + w.NowLevel ,
                userId: a || t.OpenId
            };
            if (p.Instance.platform) {
                let e = Laya.Browser.window.wx;
                try {
                    e.aldStage.onStart(s);
                } catch (e) {
                    console.error("stageStart upload fail");
                }
            }
        }
        static onRunning(e, i, a) {
            if (!this.postAld) return;
            let s = {
                stageId: e || w.NowLevel,
                stageName: i ? "Level:" + i : "Level:" + w.NowLevel ,
                userId: a || t.OpenId,
                event: "relive"
            };
            if (p.Instance.platform) {
                let e = Laya.Browser.window.wx;
                try {
                    e.aldStage.onRunning(s);
                } catch (e) {
                    console.error("onRunning upload fail");
                }
            }
        }
        static onEnd(e, i, a, s) {
            if (!this.postAld) return;
            if (w.UserLevel != w.NowLevel) return;
            let n = {
                stageId: i || w.NowLevel,
                stageName: a ? "Level:" + a : "Level:" + w.NowLevel,
                userId: s || t.OpenId,
                event: e ? "complete" : "fail"
            };
            if (p.Instance.platform) {
                let e = Laya.Browser.window.wx;
                try {
                    e.aldStage.onEnd(n);
                } catch (e) {
                    console.error("onRunning upload fail");
                }
            }
        }
        static upload(e) {
            if (this.postAld && p.Instance.platform) try {
                p.Instance.platform.aldSendEvent(e);
            } catch (e) {}
        }
    }
    f.postAld = !1;
    class A {
        constructor() {
            this.TOKEN = "", A._instance = this;
        }
        static get Instance() {
            return A._instance || new A(), A._instance;
        }
        static request(e) {
            A.Instance.request(e);
        }
        request(e) {
            e = this.param(e);
            let t = new Laya.HttpRequest();
            t.once(Laya.Event.COMPLETE, this, () => {
                e.complete && e.complete(t.data);
            }), t.once(Laya.Event.ERROR, this, t => {
                e.error && e.error(t);
            }), t.send(e.url, this.obj2str(e.data), e.method, e.responseType);
        }
        param(e = {}) {
            let t = e.data || {};
            return e.data = t, e.method = e.method || "post", e.responseType = e.responseType || "json", 
            // console.log(e),
             e;
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
            p.Instance.platform ? (this.getTimes += 1, p.Instance.platform.login({
                force: !1,
                success: e => {
                    if (
                        // console.log("login success: res=", e), 
                        e.code) {
                        t.Code = e.code;
                        let a = p.Instance.platform.getLaunchOptionsSync(), s = "0", n = a.scene;
                        g.getBoolean(i.ISSCENE, !1) ? w.isScene = !0 : "1037" != a.scene && "1038" != a.scene || (g.setBoolean(i.ISSCENE, !0), 
                        w.isScene = !0), n = null == a.query || null == a.query ? "0" : null == a.query.scene || null == a.query.scene ? "0" : a.query.scene, 
                        t.Scene = decodeURIComponent(n), this.getTimes = 0;
                        let o = S.loginUrl + "&version=" + t.VERSION + "&code=" + e.code + "&scene=" + t.Scene + "&uid=" + s;
                        this.loginToService(o);
                    } else if (e.data) {
                        let t = e.token, i = p.Instance.platform.getLaunchOptionsSync();
                        "1037" != i.scene && "1038" != i.scene || (w.isScene = !0);
                        let a = "0";
                        a = null == i.query || null == i.query ? "0" : JSON.stringify(i.query), this.loginOppoToService(t, a);
                    }
                },
                fail: e => {
                    this.getTimes < this.MAX_GET_TIMES ? this.login() : console.log("login fail");
                }
            })) : console.log("请在微信开发工具上调试");
        }
        static loginToService(e) {
            // console.log("loginPath=", e), 
            A.request({
                url: e,
                method: "get",
                complete: e => {
                    // console.log("loginToService success:", e), p.Instance.setOpenID(e.data.openid, 0, 0), 
                    // t.OpenId = e.data.openid, this.getGameList(), this.getMisleadInfo();
                },
                error: e => {
                    // console.error("loginToService fail:", e);
                }
            });
        }
        static loginOppoToService(e, t) {
            let i = "";
            console.log("path:", i), A.request({
                url: i,
                method: "get",
                complete: e => {
                    console.log("loginOppoToService success:", e);
                },
                error: e => {
                    console.log("loginOppoToService fail:", e);
                }
            });
        }
        static getGameList() {
            // if (p.Instance.isOppo) {
            //     let e = "";
            //     A.request({
            //         url: e,
            //         method: "get",
            //         complete: e => {
            //             console.log("getLeadOut success:", e), 1 == e.result_code && (v.GameList = e.data.gamelist, 
            //             v.BannerList = e.data.banner, console.log("导出列表加载成功:"), console.log("GameList", v.GameList), 
            //             console.log("GameBannerList", v.BannerList), w.DcLoad = !0, u.Instance.emit(a.DCLOADEND));
            //         },
            //         error: e => {
            //             console.log("导出列表加载失败:", e);
            //         }
            //     });
            // } else if (t.OpenId) {
            //     let e = S.gameListUrl + "&openid=" + t.OpenId + "&version=" + t.VERSION;
            //     A.request({
            //         url: e,
            //         method: "get",
            //         complete: e => {
            //             console.log("getLeadOut success:", e), 1 == e.result_code && (v.GameList = e.data.gamelist, 
            //             v.BannerList = e.data.banner, console.log("导出列表加载成功:"), console.log("GameList", v.GameList), 
            //             console.log("GameBannerList", v.BannerList), w.DcLoad = !0, u.Instance.emit(a.DCLOADEND));
            //         },
            //         error: e => {
            //             console.log("导出列表加载失败:", e);
            //         }
            //     });
            // }
        }
        static startGame() {
            if (t.OpenId) {
                let e = S.startGameUrl + "&openid=" + t.OpenId + "&version=" + t.VERSION;
                A.request({
                    url: e,
                    method: "get",
                    complete: e => {
                        console.info("startGame success:", e), t.GameId = e.data.id;
                    },
                    error: e => {
                        console.info("startGame fail:", e);
                    }
                });
            }
        }
        static endGame(e) {
            if (t.OpenId) {
                let i = S.endGameUrl + "&openid=" + t.OpenId + "&version=" + t.VERSION + "&id=" + t.GameId + "&level=" + e;
                A.request({
                    url: i,
                    method: "get",
                    complete: e => {
                        console.info("endGame success:", e);
                    },
                    error: e => {
                        console.info("endGame fail:", e);
                    }
                });
            }
        }
        static leadOut(e) {
            if (p.Instance.isOppo) {
                let t = "https://op.xyxapi.com/OpApi?act=game&webid=2" + "&id=" + e;
                A.request({
                    url: t,
                    method: "get",
                    complete: e => {
                        console.info("leadOut success:", e);
                    },
                    error: e => {
                        console.info("leadOut fail:", e);
                    }
                });
            } else if (t.OpenId) {
                let i = S.leadOutUrl + "&openid=" + t.OpenId + "&version=" + t.VERSION + "&id=" + e;
                A.request({
                    url: i,
                    method: "get",
                    complete: e => {
                        console.info("leadOut success:", e);
                    },
                    error: e => {
                        console.info("leadOut fail:", e);
                    }
                });
            }
        }
        static leadOutSuccess(e) {
            if (p.Instance.isOppo) {
                let t = "https://op.xyxapi.com/OpApi?act=cgame&webid=2" + "&id=" + e;
                A.request({
                    url: t,
                    method: "get",
                    complete: e => {
                        console.info("leadOutSuccess success:", e);
                    },
                    error: e => {
                        console.info("leadOutSuccess fail:", e);
                    }
                });
            } else if (t.OpenId) {
                let i = S.leadOutSuccessUrl + "&openid=" + t.OpenId + "&version=" + t.VERSION + "&id=" + e;
                A.request({
                    url: i,
                    method: "get",
                    complete: e => {
                        console.info("leadOutSuccess success:", e);
                    },
                    error: e => {
                        console.info("leadOutSuccess fail:", e);
                    }
                });
            }
        }
        static getMisleadInfo() {
            if (t.OpenId) {
                let e = p.Instance.platform.getLaunchOptionsSync().scene, i = S.misleadUrl + "&openid=" + t.OpenId + "&version=" + t.VERSION + "&scene=" + t.Scene + "&cj=" + e;
                A.request({
                    url: i,
                    method: "get",
                    complete: e => {
                        t.IsStatus = "1" == e.data.is_status, t.IsStatus ? t.IsMisLead = "1" == e.data.casualClick : t.IsMisLead = !1, 
                        console.log("IsMisLead:", t.IsMisLead), console.log("IsStatus:", t.IsStatus);
                    },
                    error: e => {
                        console.info("isMislead fail:", e);
                    }
                });
            }
        }
        static getBulletinList() {
            if (t.OpenId) {
                let e = S.bulletinList + t.OpenId;
                A.request({
                    url: e,
                    method: "get",
                    complete: e => {
                        console.log("getBulletinList=", e.data.list), t.BulletinList = e.data.list;
                    },
                    error: e => {}
                });
            }
        }
        static uploadLevel(e) {
            if (t.OpenId) {
                let i = S.uploadLevelUrl + "&openid=" + t.OpenId + "&level=" + e;
                A.request({
                    url: i,
                    method: "get",
                    complete: e => {
                        console.log("uploadLevel success");
                    },
                    error: e => {
                        console.log("uploadLevel fail");
                    }
                });
            }
        }
    }
    b.MAX_GET_TIMES = 3, b.getTimes = 0;
    class S {
        static getRootUrl() {
            let e = "";
            switch (p.Instance.platformName) {
              case p.Instance.Wx:
                e = "";
                break;

              case p.Instance.Qq:
                e = "";
                break;

              case p.Instance.Tt:
                e = "";
                break;

              case p.Instance.Oppo:
                e = "";
            }
            return e;
        }
    }
    S.user = S.getRootUrl() + "&act=user", S.loginUrl = S.getRootUrl() + "&act=userinfo", 
    S.misleadUrl = S.getRootUrl() + "&act=user", S.gameListUrl = S.getRootUrl() + "&act=gamelist", 
    S.startGameUrl = S.getRootUrl() + "&act=index", S.endGameUrl = S.getRootUrl() + "&act=end", 
    S.leadOutUrl = S.getRootUrl() + "&act=game", S.leadOutSuccessUrl = S.getRootUrl() + "&act=cgame", 
    S.leadBox = S.getRootUrl() + "&act=hzlist", S.uploadLevelUrl = S.getRootUrl() + "&act=level", 
    S.bulletinList = S.getRootUrl() + "&act=nickname&openid=", S.fenghong = S.getRootUrl() + "&act=fenhong&openid=", 
    S.domain = S.getRootUrl() + "&act=";
    class C {
        static trackEvent(e, t) {
            if (p.Instance.onWx) if (t) {
                if (t instanceof Array) return void console.error("友盟上报事件属性不能为数组");
                p.Instance.platform.uma.trackEvent(e, t);
            } else p.Instance.platform.uma.trackEvent(e);
        }
    }
    class v {
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
                for (;s; ) {
                    let n = Number((Math.random() * (t.length - 1)).toFixed());
                    i.indexOf(n) < 0 && (i.push(n), a.push(t[n])), i.length == e && (s = !1);
                }
                return a;
            }
            return null;
        }
        static leadOut(e, i = "e_9999", a = !0) {
            p.Instance.onWx ? (b.leadOut(e.id), p.Instance.platform.navigateToMiniProgram({
                appId: e.appid,
                path: e.url,
                extraData: {
                    foo: "bar"
                },
                envVersion: "release",
                success(t) {
                    b.leadOutSuccess(e.id), C.trackEvent(i);
                },
                fail() {
                    a && t.IsMisLead && (w.isDcFail = !0, Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0));
                }
            })) : p.Instance.isOppo ? (b.leadOut(e.id), p.Instance.platform.navigateToMiniGame({
                pkgName: e.appid,
                path: e.url,
                extraData: {
                    from: "pageA"
                },
                success: function() {
                    b.leadOutSuccess(e.id);
                },
                fail: function(e) {}
            })) : l.msg("仅在微信中使用");
        }
    }
    v.GameList = [];
    class x {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = {}, 
            this.rewardedVideoAdStatus = {}, this.rewardedVideoAdLoadStatus = !1, this._onCloseRewardedVideoAd = null, 
            this._onLoadRewardedVideoAd = null, this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new x()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        createBannerAd(e) {
            return p.Instance.platform.createBannerAd(e);
        }
        createRewardedVideoAd(e) {
            return p.Instance.platform.createRewardedVideoAd(e);
        }
        initRewardedVideoAd(e = {}) {
            if (console.log("initRewardedVideoAd"), e.adUnitId) {
                console.log("initRewardedVideoAd 创建广告ID"), this.rewardedVideoAdId !== e.adUnitId && (this.rewardedVideoAdLoadStatus = !1);
                let t = e.adUnitId.length;
                t = Math.floor(Math.random() * t), this.rewardedVideoAdId = e.adUnitId[t], void 0 === this.rewardedVideoAdStatus[this.rewardedVideoAdId] && (this.rewardedVideoAdStatus[this.rewardedVideoAdId] = !0), 
                void 0 === this.rewardedVideoAdFailNum[this.rewardedVideoAdId] && (this.rewardedVideoAdFailNum[this.rewardedVideoAdId] = 0);
            }
            this.rewardedVideoAdStatus[this.rewardedVideoAdId] && this.rewardedVideoAdFailNum[this.rewardedVideoAdId] <= 3 && (console.log("initRewardedVideoAd 创建广告"), 
            this.rewardedVideoAdCache = p.Instance.platform.createRewardedVideoAd({
                adUnitId: this.rewardedVideoAdId
            }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd), 
            this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(e) {
            console.log("showRewardedVideoAd", x.Instance.rewardedVideoAdLoadStatus), e.before && e.before(), 
            x.Instance.rewardedVideoAdLoadStatus ? (x.Instance._onCloseRewardedVideoAd = (t => {
                e.complete && e.complete(t.isEnded), t.isEnded ? e.success && e.success() : e.fail && e.fail();
            }), x.Instance.rewardedVideoAdCache.onClose(x.Instance.onCloseRewardedVideoAd), 
            x.Instance.rewardedVideoAdCache.show()) : (e.error && e.error(), e.complete && e.complete(!1));
        }
        onCloseRewardedVideoAd(e) {
            x.Instance.rewardedVideoAdCache.offClose(x.Instance.onCloseRewardedVideoAd), x.Instance._onCloseRewardedVideoAd && x.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            console.log("onLoadRewardedVideoAd"), x.Instance.rewardedVideoAdLoadStatus = !0, 
            x.Instance.rewardedVideoAdCache.offLoad(x.Instance.onLoadRewardedVideoAd), x.Instance._onLoadRewardedVideoAd && x.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(e) {
            switch (console.log("onErrorRewardedVideoAd res", e), x.Instance.rewardedVideoAdCache.offError(x.Instance.onErrorRewardedVideoAd), 
            x.Instance._onErrorRewardedVideoAd && x.Instance._onErrorRewardedVideoAd(), e.errCode) {
              case 1002:
              case 1005:
              case 1006:
              case 1007:
              case 1008:
                x.Instance.rewardedVideoAdStatus[x.Instance.rewardedVideoAdId] = !1;
                break;

              case 1e3:
              case 1001:
              case 1003:
              case 1004:
              default:
                x.Instance.rewardedVideoAdFailNum[x.Instance.rewardedVideoAdId]++, x.Instance.setTimeout(() => {
                    x.Instance.initRewardedVideoAd();
                }, 1e4);
            }
        }
    }
    class B {
        static get Instance() {
            return this._instance || (this._instance = new B()), this._instance;
        }
        onShow() {
            p.Instance.isUc || p.Instance.platform.onShow(e => {});
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
    class N extends Laya.Script {
        constructor() {
            super(), this.load_id = 0, this.type = 1;
        }
        onEnable() {
            if (this.owner.zOrder = 9999, !v.BannerList || null == v.BannerList || v.BannerList.length <= 0) return this.owner.visible = !1, 
            void console.log("bannerlist=" + v.BannerList + " 隐藏广告位导出");
            this.initSize(), this.load_id = Math.floor(Math.random() * v.BannerList.length), 
            this.owner.loadImage(v.BannerList[this.load_id].img), Laya.timer.loop(5e3, this, () => {
                this.load_id++, this.load_id = this.load_id % v.BannerList.length, this.owner.loadImage(v.BannerList[this.load_id].img);
            }), this.owner.on(Laya.Event.CLICK, this, () => {
                Laya.Browser.onWeiXin && v.leadOut(v.BannerList[this.load_id]);
            });
        }
        initSize() {
            1 == this.type ? (this.owner.height = 234, this.owner.width = 750) : (this.owner.height = 200, 
            this.owner.width = 600), this.owner.x = (Laya.stage.width - this.owner.width) / 2, 
            this.owner.y = Laya.stage.height - this.owner.height, e.isIphoneX && (this.owner.y -= 30);
        }
    }
    class D {
        constructor() {}
        static init(e = {}) {
            let t = Laya.Browser.window.wx.getSystemInfoSync();
            if (D.curModel = t.model, console.log("当前设备型号", D.curModel), D.windowHeight = t.windowHeight, 
            D.windowWidth = t.windowWidth, D.stageHeight = Laya.stage.height, D.stageWidth = Laya.stage.width, 
            e.adUnitId && ("string" == typeof e.adUnitId && (e.adUnitId = e.adUnitId.split(",")), 
            console.log("obj.adUnitId", e.adUnitId), D.adUnitIds = e.adUnitId, D.adUnitIds.length)) {
                for (let e of D.adUnitIds) D.adUnitIdFailNum[e] = 0, D.adUnitIdStatus[e] = !0;
                D.curAdUnitId = D.ramdonAdUnitId();
            }
            e.adUnitIdMaxFailNum && (D.adUnitIdFailNum = e.adUnitIdMaxFailNum), e.style && (D.styleCustom = e.style, 
            e.style.styleMode && -1 !== D.styleModeList.indexOf(e.style.styleMode) && (D.styleMode = e.style.styleMode)), 
            e.interval && (D.interval = e.interval, D.interval < D.intervalMin && (D.interval = D.intervalMin)), 
            e.timerStatus && (D.timerStatus = e.timerStatus), D.load(), D.timer && clearInterval(D.timer), 
            D.timer = setInterval(() => {
                D.timerStatus && D.showStatus && (D.timerSecond++, D.timerSecond > D.interval && (D.timerSecond = 0, 
                D.isTimerLoad = !0, D.load()));
            }, 1e3);
        }
        static load() {
            let e;
            D.cache && D.cache.destroy(), D.isTimerLoad ? (e = D.styleCache.style, D.styleHasBottom = D.styleCache.hasBottom, 
            D.styleBottomNum = D.styleCache.bottomNum, D.isTimerLoad = !1) : e = D.style;
            let t = Laya.Browser.window.wx;
            D.cache = t.createBannerAd({
                adUnitId: D.ramdonAdUnitId(),
                style: e
            }), D.cache.onLoad(D.onLoad), D.cache.onError(D.onError), D.cache.onResize(D.onResize);
        }
        static show(e = {}, t = null) {
            if (D.isOk && (D.spb = new Laya.Sprite(), D.spb.addComponent(N), D.spb.zOrder = 9999, 
            Laya.stage.addChild(D.spb), D.spb.mouseEnabled = !0), D.adUnitIdsCount) {
                if (e.style && (D.styleCustom = e.style, e.style.styleMode && -1 !== D.styleModeList.indexOf(e.style.styleMode) && (D.styleMode = e.style.styleMode)), 
                e.timerStatus && (D.timerStatus = e.timerStatus), e.realtime) D.load(), t && (D._onLoad = (() => {
                    D.cache.show(), t(D.styleStageCur);
                })); else {
                    e.style && e.style.width && D.stage2windowWidth(e.style.width) !== D.cache.style.width && D.onResize(D.onResize);
                    let i = D.style;
                    D.cache.style.width = i.width, D.cache.style.top = i.top, D.cache.style.left = i.left, 
                    e.delay ? (void 0 === e.delayNum && 0 === e.delayNum && (e.delayNum = 1e3), setTimeout(() => {
                        D.showStatus && (D.cache.show(), t && t(D.styleStageCur));
                    }, e.delayNum)) : (D.cache.show(), console.log("--------------------------------------------------", D.styleStageCur), 
                    t && t(D.styleStageCur));
                }
                D.showStatus = !0;
            }
        }
        static hide() {
            D.cache && D.cache.hide(), D.isOk && D.spb && D.spb.removeSelf(), D.showStatus = !1;
        }
        static destroy() {}
        static onResize(e) {
            console.log("WxBanner onResize", e, D.styleHasBottom, D.styleBottomNum, D.cache), 
            D.cache.offResize(D.onResize), console.log("WxBannerAd.cache.style.top", D.cache.style.top, "|", D.windowHeight, e.height, D.styleBottomNum), 
            (-1 != D.curModel.search(/iPhone X/i) || -1 != D.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (D.isIpx = !0), 
            D.styleHasBottom && (D.cache.style.top = D.windowHeight - e.height - D.styleBottomNum - (D.isIpx ? 10 : 0) + .1), 
            D._onResize && (D._onResize(e), D._onResize = null), D.styleWindowCur = {
                realHeight: e.height,
                realWidth: e.width,
                width: e.width,
                height: e.height,
                top: D.cache.style.top,
                left: D.cache.style.left
            }, console.log("WxBanner onResize", e, D.cache);
        }
        static onLoad() {
            console.log("WxBanner onLoad bannerCache", D.cache), D.loadStatus = !0, D.cache.offLoad(D.onLoad), 
            D._onLoad && (D._onLoad(D.cache.style), D._onLoad = null), D.styleWindowCur = {
                realHeight: D.cache.style.realHeight,
                realWidth: D.cache.style.realWidth,
                width: D.cache.style.width,
                height: D.cache.style.height,
                top: D.cache.style.top,
                left: D.cache.style.left
            }, D.showStatus && D.cache.show();
        }
        static onError(e) {
            switch (D.isOk = !0, D.cache.offError(D.onError), e.errCode) {
              case 1002:
              case 1005:
              case 1006:
              case 1007:
              case 1008:
                D.adUnitIdStatus[D.curAdUnitId] = !1;
                break;

              case 1e3:
              case 1001:
              case 1003:
              case 1004:
              default:
                D.adUnitIdFailNum[D.curAdUnitId]++, setTimeout(() => {
                    D.load();
                }, 1e3);
            }
            D._onError && (D._onError(e), D._onError = null);
        }
        static ramdonAdUnitId() {
            return D.adUnitIds.length ? D.adUnitIds[Math.floor(Math.random() * D.adUnitIds.length)] : null;
        }
        static removeCurAdUnitId() {
            D.adUnitIds.length && -1 !== D.adUnitIds.indexOf(D.curAdUnitId) && (-1 === D.adUnitIdsErr.indexOf(D.curAdUnitId) && D.adUnitIdsErr.push(D.curAdUnitId), 
            D.adUnitIds.splice(D.adUnitIds.indexOf(D.curAdUnitId), 1)), D.curAdUnitId = null;
        }
        static switchCurAdUnitId(e = null) {
            e && -1 !== D.adUnitIds.indexOf(e) ? D.curAdUnitId = e : D.curAdUnitId = D.ramdonAdUnitId();
        }
        static get adUnitIdsCount() {
            return D.adUnitIds.length;
        }
        static stage2windowWidth(e) {
            return e * D.windowWidth / D.stageWidth;
        }
        static stage2windowHeight(e) {
            return e * D.windowHeight / D.stageHeight;
        }
        static window2stageWidth(e) {
            return e * D.stageWidth / D.windowWidth;
        }
        static window2stageHeight(e) {
            return e * D.stageHeight / D.windowHeight;
        }
        static get styleStageCur() {
            return console.log("---------------------------------------------------"), console.log(D.styleWindowCur), 
            {
                realHeight: D.window2stageHeight(D.styleWindowCur.realHeight),
                realWidth: D.window2stageWidth(D.styleWindowCur.realWidth),
                width: D.window2stageWidth(D.styleWindowCur.realWidth),
                height: D.window2stageHeight(D.styleWindowCur.realHeight),
                top: D.window2stageHeight(D.styleWindowCur.top),
                left: D.window2stageWidth(D.styleWindowCur.left)
            };
        }
        static get style() {
            D.styleHasBottom = !1, D.styleBottomNum = 0;
            let e = {};
            switch (e.width = D.styleCustom.width ? D.stage2windowWidth(D.styleCustom.width) : D.windowWidth, 
            console.log("设置的宽度", e.width), e.width > D.windowWidth && (e.width = D.windowWidth), 
            e.width < 300 && (e.width = 300), D.styleMode) {
              case "none":
                void 0 !== D.styleCustom.bottom ? (D.styleHasBottom = !0, D.styleBottomNum = D.stage2windowHeight(D.styleCustom.bottom), 
                e.top = D.windowHeight - e.width / 3 - D.styleBottomNum) : void 0 !== D.styleCustom.top ? e.top = D.stage2windowHeight(D.styleCustom.top) : (D.styleHasBottom = !0, 
                e.top = D.windowHeight - e.width / 3), void 0 !== D.styleCustom.center ? (e.left = D.windowWidth / 2 + D.stage2windowWidth(D.styleCustom.center) - e.width / 2, 
                e.left < 0 ? e.left = 0 : e.left > D.windowWidth - e.width && (e.left = D.windowWidth - e.width)) : void 0 !== D.styleCustom.right ? e.left = D.windowWidth - D.stage2windowWidth(D.styleCustom.right) - e.width : void 0 !== D.styleCustom.left ? e.left = D.stage2windowWidth(D.styleCustom.left) : e.left = (D.windowWidth - e.width) / 2;
                break;

              case "left-top":
                e.top = 0, e.left = 0;
                break;

              case "right-top":
                e.top = 0, e.left = D.windowWidth - e.width;

              case "top":
              case "center-top":
                e.top = 0, e.left = (D.windowWidth - e.width) / 2;
                break;

              case "left-bottom":
                D.styleHasBottom = !0, e.top = D.windowHeight - e.width / 3, e.left = 0;
                break;

              case "right-bottom":
                D.styleHasBottom = !0, e.top = D.windowHeight - e.width / 3, e.left = D.windowWidth - e.width;
                break;

              case "bottom":
              case "center-bottom":
              default:
                D.styleHasBottom = !0, D.cache && D.loadStatus ? ((-1 != D.curModel.search(/iPhone X/i) || -1 != D.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (D.isIpx = !0), 
                e.top = D.windowHeight - D.cache.style.realHeight - (D.isIpx ? 10 : 0) + .1) : e.top = D.windowHeight - e.width / 3 - (D.isIpx ? 5 : 0) + .1, 
                e.left = (D.windowWidth - e.width) / 2, D.cache ? console.log("banner高度----------", D.cache.style.realWidth, D.cache.style.realHeight) : console.log("banner高度----------", D.cache);
            }
            return D.styleCache = {
                style: e,
                hasBottom: D.styleHasBottom,
                bottomNum: D.styleBottomNum
            }, e;
        }
    }
    D.showStatus = !1, D.loadStatus = !1, D.isOk = !1, D.cache = null, D._onResize = null, 
    D._onLoad = null, D._onError = null, D.timerStatus = !1, D.interval = 600, D.intervalMin = 20, 
    D.isTimerLoad = !1, D.timerSecond = 0, D.curAdUnitId = null, D.adUnitIds = [], D.adUnitIdsErr = [], 
    D.adUnitIdMaxFailNum = 3, D.adUnitIdStatus = {}, D.adUnitIdFailNum = {}, D.curModel = "", 
    D.modelList = [ "iPhone X", "iPhone XR", "iPhone XS", "iPhone 11", "iPhone XS Max", "iPhone11 Pro" ], 
    D.isIpx = !1, D.styleWindowCur = {
        realHeight: 0,
        realWidth: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0
    }, D.styleModeList = [ "left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom", "top", "bottom" ], 
    D.styleMode = "center-bottom", D.styleCustom = {}, D.styleCache = {}, D.styleHasBottom = !1, 
    D.styleBottomNum = 0;
    class _ {
        constructor() {}
        static init(e = {}) {
            let t = Laya.Browser.window.wx.getSystemInfoSync();
            if (_.curModel = t.model, console.log("当前设备型号", _.curModel), _.windowHeight = t.windowHeight, 
            _.windowWidth = t.windowWidth, _.stageHeight = Laya.stage.height, _.stageWidth = Laya.stage.width, 
            e.adUnitId && ("string" == typeof e.adUnitId && (e.adUnitId = e.adUnitId.split(",")), 
            console.log("obj.adUnitId", e.adUnitId), _.adUnitIds = e.adUnitId, _.adUnitIds.length)) {
                for (let e of _.adUnitIds) _.adUnitIdFailNum[e] = 0, _.adUnitIdStatus[e] = !0;
                _.curAdUnitId = _.ramdonAdUnitId();
            }
            e.adUnitIdMaxFailNum && (_.adUnitIdFailNum = e.adUnitIdMaxFailNum), e.style && (_.styleCustom = e.style, 
            e.style.styleMode && -1 !== _.styleModeList.indexOf(e.style.styleMode) && (_.styleMode = e.style.styleMode)), 
            e.interval && (_.interval = e.interval, _.interval < _.intervalMin && (_.interval = _.intervalMin)), 
            e.timerStatus && (_.timerStatus = e.timerStatus), _.load(), _.timer && clearInterval(_.timer), 
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
        static show(e = {}, t = null) {
            if (_.isOk && p.Instance.isWx && (_.spb = new Laya.Sprite(), _.spb.addComponent(N), 
            _.spb.zOrder = 9999, Laya.stage.addChild(_.spb), _.spb.mouseEnabled = !0), _.adUnitIdsCount) {
                if (e.style && (_.styleCustom = e.style, e.style.styleMode && -1 !== _.styleModeList.indexOf(e.style.styleMode) && (_.styleMode = e.style.styleMode)), 
                e.timerStatus && (_.timerStatus = e.timerStatus), e.realtime) _.load(), t && (_._onLoad = (() => {
                    _.cache.show(), t(_.styleStageCur);
                })); else {
                    e.style && e.style.width && _.stage2windowWidth(e.style.width) !== _.cache.style.width && _.onResize(_.onResize);
                    let i = _.style;
                    _.cache.style.width = i.width, _.cache.style.top = i.top, _.cache.style.height = i.height, 
                    _.cache.style.left = i.left, console.log("显示banner_show", i), e.delay ? (void 0 === e.delayNum && 0 === e.delayNum && (e.delayNum = 1e3), 
                    setTimeout(() => {
                        _.showStatus && (_.cache.show(), t && t(_.styleStageCur));
                    }, e.delayNum)) : (_.cache.show(), console.log("--------------------------------------------------", _.styleStageCur), 
                    t && t(_.styleStageCur));
                }
                _.showStatus = !0;
            }
        }
        static hide() {
            _.cache && _.cache.hide(), _.isOk && _.spb && _.spb.removeSelf(), _.showStatus = !1;
        }
        static destroy() {}
        static onResize(e) {
            console.log("WxBanner onResize", e, _.styleHasBottom, _.styleBottomNum, _.cache), 
            _.cache.offResize(_.onResize), console.log("WxBannerAd2.cache.style.top", _.cache.style.top, "|", _.windowHeight, e.height, _.styleBottomNum), 
            (-1 != _.curModel.search(/iPhone X/i) || -1 != _.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (_.isIpx = !0), 
            _.styleHasBottom && (_.cache.style.top = _.windowHeight - e.height - _.styleBottomNum - (_.isIpx ? 10 : 0) + .1), 
            _._onResize && (_._onResize(e), _._onResize = null), _.styleWindowCur = {
                realHeight: e.height,
                realWidth: e.width,
                width: e.width,
                height: e.height,
                top: _.cache.style.top,
                left: _.cache.style.left
            }, console.log("WxBanner onResize", e, _.cache);
        }
        static onLoad() {
            console.log("WxBanner onLoad bannerCache", _.cache), _.loadStatus = !0, _.cache.offLoad(_.onLoad), 
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
            return console.log("---------------------------------------------------"), console.log(_.styleWindowCur), 
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
            let e = {};
            switch (e.width = _.styleCustom.width ? _.stage2windowWidth(_.styleCustom.width) : _.windowWidth, 
            e.width > _.windowWidth && (e.width = _.windowWidth), e.width < 300 && (e.width = 300), 
            _.styleMode) {
              case "none":
                void 0 !== _.styleCustom.bottom ? (_.styleHasBottom = !0, _.styleBottomNum = _.stage2windowHeight(_.styleCustom.bottom), 
                e.top = _.windowHeight - e.width / 3 - _.styleBottomNum) : void 0 !== _.styleCustom.top ? e.top = _.stage2windowHeight(_.styleCustom.top) : (_.styleHasBottom = !0, 
                e.top = _.windowHeight - e.width / 3), void 0 !== _.styleCustom.center ? (e.left = _.windowWidth / 2 + _.stage2windowWidth(_.styleCustom.center) - e.width / 2, 
                e.left < 0 ? e.left = 0 : e.left > _.windowWidth - e.width && (e.left = _.windowWidth - e.width)) : void 0 !== _.styleCustom.right ? e.left = _.windowWidth - _.stage2windowWidth(_.styleCustom.right) - e.width : void 0 !== _.styleCustom.left ? e.left = _.stage2windowWidth(_.styleCustom.left) : e.left = (_.windowWidth - e.width) / 2;
                break;

              case "left-top":
                e.top = 0, e.left = 0;
                break;

              case "right-top":
                e.top = 0, e.left = _.windowWidth - e.width;

              case "top":
              case "center-top":
                e.top = 0, e.left = (_.windowWidth - e.width) / 2;
                break;

              case "left-bottom":
                _.styleHasBottom = !0, e.top = _.windowHeight - e.width / 3, e.left = 0;
                break;

              case "right-bottom":
                _.styleHasBottom = !0, e.top = _.windowHeight - e.width / 3, e.left = _.windowWidth - e.width;
                break;

              case "bottom":
              case "center-bottom":
              default:
                _.styleHasBottom = !0, _.cache && _.loadStatus ? ((-1 != _.curModel.search(/iPhone X/i) || -1 != _.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (_.isIpx = !0), 
                e.top = _.windowHeight - _.cache.style.realHeight - (_.isIpx ? 5 : 0) + .1) : e.top = _.windowHeight - e.width / 3 - (_.isIpx ? 5 : 0) + .1, 
                e.left = (_.windowWidth - e.width) / 2, console.log("banner高度----------", _.cache && _.cache.style.realHeight);
            }
            return e.height = e.width / 3, _.styleCache = {
                style: e,
                hasBottom: _.styleHasBottom,
                bottomNum: _.styleBottomNum
            }, e;
        }
    }
    _.showStatus = !1, _.loadStatus = !1, _.isOk = !1, _.cache = null, _._onResize = null, 
    _._onLoad = null, _._onError = null, _.timerStatus = !1, _.interval = 600, _.intervalMin = 10, 
    _.isTimerLoad = !1, _.timerSecond = 0, _.curAdUnitId = null, _.adUnitIds = [], _.adUnitIdsErr = [], 
    _.adUnitIdMaxFailNum = 3, _.adUnitIdStatus = {}, _.adUnitIdFailNum = {}, _.curModel = "", 
    _.modelList = [ "iPhone X", "iPhone XR", "iPhone XS", "iPhone 11", "iPhone XS Max", "iPhone11 Pro" ], 
    _.isIpx = !1, _.styleWindowCur = {
        realHeight: 0,
        realWidth: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0
    }, _.styleModeList = [ "left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom", "top", "bottom" ], 
    _.styleMode = "center-bottom", _.styleCustom = {}, _.styleCache = {}, _.styleHasBottom = !1, 
    _.styleBottomNum = 0;
    class V {
        constructor() {
            this.hadLoad = !1, this.showTime = 1e4, this.MaxLoadTime = 3, this.platformData = null, 
            this.showType = 0, this.isShow = !1, this.realHeight = 0, this.top = 0, this.initVideoSuccess = !1, 
            this.startTime = 0;
        }
        static get Instance() {
            return this._instance || (this._instance = new V()), this._instance;
        }
        init() {
            p.Instance.onWx && (this.platformData = T, console.log("微信广告", this.platformData), 
            T.videoIds.length > 0 && x.Instance.initRewardedVideoAd({
                adUnitId: T.videoIds
            }), this.initShare(), D.init({
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
            p.Instance.onWx && this.platformData.bannerId && (e && e.type && e.dialog ? (this.showType = e.type, 
            this.showBannerDialog = e.dialog, this.isShow = !0, 1 == this.showType ? this.hadLoad && this.bannerAD ? this.showBannerWithRefresh(this.bannerAD) : this.showBannerDialog && v.checkBannerGameList : this.startBannerAD && this.startBannerAD ? this.showBannerWithRefresh(this.startBannerAD) : this.showBannerDialog && v.checkBannerGameList) : console.error("showBanner 参数不正确"));
        }
        hideBanner() {
            p.Instance.onWx && (this.isShow = !1, this.showType = 0, this.showBannerDialog = null, 
            this.bannerAD && this.bannerAD.hide(), this.startBannerAD && this.startBannerAD.hide(), 
            Laya.timer.clearAll(this));
        }
        showBannerWithRefresh(e) {
            p.Instance.onWx && (e.show(), Laya.timer.clearAll(this), Laya.timer.loop(this.showTime, this, () => {
                this.initBanner(0);
            }));
        }
        initBanner(t = 0) {
            if (!p.Instance.onWx || !this.platformData.bannerId) return;
            let i;
            if (t++, !(i = {
                adUnitId: this.platformData.bannerId,
                style: {
                    left: 0,
                    top: e.gameHeight - 300,
                    width: 750
                },
                adIntervals: 300
            })) return void console.log("wx initBanner bannerObj=null");
            let a = p.Instance.platform.createBannerAd(i);
            a.onError(e => {
                t < this.MaxLoadTime ? this.initBanner(t) : this.isShow && this.bannerAD || (this.hadLoad = !1);
            }), a.onLoad(() => {
                t = 0, this.hadLoad = !0, this.bannerAD && (this.bannerAD.hide(), this.bannerAD.destroy(), 
                this.bannerAD = null), this.bannerAD = a, e.isIphoneX ? this.bannerAD.style.top = p.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight - 50 / e.clientScale : this.bannerAD.style.top = p.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight, 
                this.isShow && 1 == this.showType && this.showBannerWithRefresh(this.bannerAD);
            }), a.onResize(() => {
                ae.Instance.setADMidleY(a);
            });
        }
        initShare() {
            p.Instance.isWx && p.Instance.platform.showShareMenu({
                withShareTicket: !0
            }), p.Instance.platform.onShareAppMessage(() => {
                if (p.Instance.onWx) {
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
            x.Instance.showRewardedVideoAd({
                complete: () => {
                    e.complete && e.complete();
                },
                success: () => {
                    e.success && e.success();
                },
                fail: () => {
                    e.fail ? e.fail() : l.msg("观看完整视频才能获得奖励哦");
                },
                error: () => {
                    this.share(e);
                }
            });
        }
        share(e = {}) {
            if (p.Instance.onWx) if (T.ShareData.length > 0) {
                let t = Math.floor(Math.random() * T.ShareData.length), i = {};
                i.title = T.ShareData[t].title, i.imageUrlId = T.ShareData[t].id, i.imageUrl = T.ShareData[t].url, 
                p.Instance.platform.shareAppMessage(i), this.startTime = new Date().getTime(), p.Instance.platform.onShow(() => {
                    new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(), 
                    p.Instance.platform.offShow(), B.Instance.onShow();
                });
            } else {
                let t = {
                    imageUrl: "images/share.jpg"
                };
                p.Instance.platform.shareAppMessage(t), this.startTime = new Date().getTime(), p.Instance.platform.onShow(() => {
                    new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(), 
                    p.Instance.platform.offShow(), B.Instance.onShow();
                });
            } else e && e.success && e.success();
        }
    }
    class T {}
    T.videoIds = [ "adunit-aa8a47e0fb07f3ab" ], T.bannerId = "adunit-6911cfdc6b4c955c", 
    T.ShareTxt = [ "秋名山老司机等你来战！", "3D死亡飞车？ " ], T.ShareData = [ {
        title: "惊险赛道，花样陷阱，等你挑战。",
        url: "https://mmocgame.qpic.cn/wechatgame/baLuz5tYG1DL6GYKTdOkpe5QakaoiakPGptVkecrcVGWY5ZuPLo5AY17y8QgyfE2E/0",
        id: "7BlYgYB9TvqhCFoZi5pf0A=="
    }, {
        title: "3D死亡飞车",
        url: "https://mmocgame.qpic.cn/wechatgame/baLuz5tYG1DAkiakq59KTOGvKe0rR9U57DxLicLaXSHxhhp70YtdVmsh5MkpkJ0kAM/0",
        id: "P+8A+eRlQ4imAKCiunPcEg=="
    } ];
    class E {
        constructor() {}
        static init(e = {}) {
            e.realTime && (this.realTime = e.realTime), E.AppBox && E.AppBox.destroy(), E.AppBox = p.Instance.platform.createAppBox({
                adUnitId: E.adUnitId
            }), E.AppBox && E.AppBox.load(), E.AppBox.onClose(e => {
                console.log("用户关闭了广告", E.callback), E.callback && E.callback();
            });
        }
        static show(e) {
            E.realTime ? E.AppBox.load().then(() => {
                E.AppBox.show().then(() => {
                    e.success && e.success(), E.callback = e.onClose;
                }).catch(() => {
                    e.fail && e.fail();
                });
            }) : E.AppBox.show().then(() => {
                e.success && e.success(), E.callback = e.onClose;
            }).catch(() => {
                e.fail && e.fail();
            });
        }
        static destroy() {
            E.AppBox && E.AppBox.destroy();
        }
    }
    E.adUnitId = "d570233366d1dd0456a79753461b5d2c", E.realTime = !1;
    class R {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = {}, 
            this.rewardedVideoAdStatus = {}, this.rewardedVideoAdLoadStatus = !1, this._onCloseRewardedVideoAd = null, 
            this._onLoadRewardedVideoAd = null, this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new R()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        createBannerAd(e) {
            return p.Instance.platform.createBannerAd(e);
        }
        createRewardedVideoAd(e) {
            return p.Instance.platform.createRewardedVideoAd(e);
        }
        initRewardedVideoAd(e = {}) {
            if (console.log("initRewardedVideoAd"), e.adUnitId) {
                console.log("initRewardedVideoAd 创建广告ID"), this.rewardedVideoAdId !== e.adUnitId && (this.rewardedVideoAdLoadStatus = !1);
                let t = e.adUnitId.length;
                t = Math.floor(Math.random() * t), this.rewardedVideoAdId = e.adUnitId[t], void 0 === this.rewardedVideoAdStatus[this.rewardedVideoAdId] && (this.rewardedVideoAdStatus[this.rewardedVideoAdId] = !0), 
                void 0 === this.rewardedVideoAdFailNum[this.rewardedVideoAdId] && (this.rewardedVideoAdFailNum[this.rewardedVideoAdId] = 0);
            }
            this.rewardedVideoAdStatus[this.rewardedVideoAdId] && this.rewardedVideoAdFailNum[this.rewardedVideoAdId] <= 3 && (console.log("initRewardedVideoAd 创建广告"), 
            this.rewardedVideoAdCache = p.Instance.platform.createRewardedVideoAd({
                adUnitId: this.rewardedVideoAdId
            }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd), 
            this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(e) {
            console.log("showRewardedVideoAd", R.Instance.rewardedVideoAdLoadStatus), e.before && e.before(), 
            R.Instance.rewardedVideoAdLoadStatus ? (R.Instance._onCloseRewardedVideoAd = (t => {
                e.complete && e.complete(t.isEnded), t.isEnded ? e.success && e.success() : e.fail && e.fail();
            }), R.Instance.rewardedVideoAdCache.onClose(R.Instance.onCloseRewardedVideoAd), 
            R.Instance.rewardedVideoAdCache.show()) : (e.error && e.error(), e.complete && e.complete(!1));
        }
        onCloseRewardedVideoAd(e) {
            R.Instance.rewardedVideoAdCache.offClose(R.Instance.onCloseRewardedVideoAd), R.Instance._onCloseRewardedVideoAd && R.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            console.log("onLoadRewardedVideoAd"), R.Instance.rewardedVideoAdLoadStatus = !0, 
            R.Instance.rewardedVideoAdCache.offLoad(R.Instance.onLoadRewardedVideoAd), R.Instance._onLoadRewardedVideoAd && R.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(e) {
            switch (console.log("onErrorRewardedVideoAd res", e), R.Instance.rewardedVideoAdCache.offError(R.Instance.onErrorRewardedVideoAd), 
            R.Instance._onErrorRewardedVideoAd && R.Instance._onErrorRewardedVideoAd(), e.errCode) {
              case 1002:
              case 1005:
              case 1006:
              case 1007:
              case 1008:
                R.Instance.rewardedVideoAdStatus[R.Instance.rewardedVideoAdId] = !1;
                break;

              case 1e3:
              case 1001:
              case 1003:
              case 1004:
              default:
                R.Instance.rewardedVideoAdFailNum[R.Instance.rewardedVideoAdId]++, R.Instance.setTimeout(() => {
                    R.Instance.initRewardedVideoAd();
                }, 1e4);
            }
        }
    }
    class k {
        constructor() {}
        static init(e = {}) {
            let t = Laya.Browser.window.wx.getSystemInfoSync();
            if (k.curModel = t.model, console.log("当前设备型号", k.curModel), k.windowHeight = t.windowHeight, 
            k.windowWidth = t.windowWidth, k.stageHeight = Laya.stage.height, k.stageWidth = Laya.stage.width, 
            e.adUnitId && ("string" == typeof e.adUnitId && (e.adUnitId = e.adUnitId.split(",")), 
            console.log("obj.adUnitId", e.adUnitId), k.adUnitIds = e.adUnitId, k.adUnitIds.length)) {
                for (let e of k.adUnitIds) k.adUnitIdFailNum[e] = 0, k.adUnitIdStatus[e] = !0;
                k.curAdUnitId = k.ramdonAdUnitId();
            }
            e.adUnitIdMaxFailNum && (k.adUnitIdFailNum = e.adUnitIdMaxFailNum), e.style && (k.styleCustom = e.style, 
            e.style.styleMode && -1 !== k.styleModeList.indexOf(e.style.styleMode) && (k.styleMode = e.style.styleMode)), 
            e.interval && (k.interval = e.interval, k.interval < k.intervalMin && (k.interval = k.intervalMin)), 
            e.timerStatus && (k.timerStatus = e.timerStatus), k.load(), k.timer && clearInterval(k.timer), 
            k.timer = setInterval(() => {
                k.timerStatus && k.showStatus && (console.log("[QqBannerAd].timerSecond", k.timerSecond), 
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
        static show(e = {}, t = null) {
            if (k.adUnitIdsCount) {
                if (e.style && (k.styleCustom = e.style, e.style.styleMode && -1 !== k.styleModeList.indexOf(e.style.styleMode) && (k.styleMode = e.style.styleMode)), 
                e.timerStatus && (k.timerStatus = e.timerStatus), e.realtime) k.load(), t && (k._onLoad = (() => {
                    k.cache.show(), t(k.styleStageCur);
                })); else {
                    e.style && e.style.width && k.stage2windowWidth(e.style.width) !== k.cache.style.width && k.onResize(k.onResize);
                    let i = k.style;
                    k.cache.style.width = i.width, k.cache.style.top = i.top, k.cache.style.left = i.left, 
                    e.delay ? (void 0 === e.delayNum && 0 === e.delayNum && (e.delayNum = 1e3), setTimeout(() => {
                        k.showStatus && (k.cache.show(), t && t(k.styleStageCur));
                    }, e.delayNum)) : (k.cache.show(), console.log("--------------------------------------------------", k.styleStageCur), 
                    t && t(k.styleStageCur));
                }
                k.showStatus = !0;
            }
        }
        static hide() {
            k.cache && k.cache.hide(), k.showStatus = !1;
        }
        static destroy() {}
        static onResize(e) {
            console.log("WxBanner onResize", e, k.styleHasBottom, k.styleBottomNum, k.cache), 
            k.cache.offResize(k.onResize), console.log("QqBannerAd.cache.style.top", k.cache.style.top, "|", k.windowHeight, e.height, k.styleBottomNum), 
            (-1 != k.curModel.search(/iPhone X/i) || -1 != k.curModel.search(/iPhone 11/i) || Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2) && (k.isIpx = !0), 
            k.styleHasBottom && (k.cache.style.top = k.windowHeight - e.height - k.styleBottomNum - (k.isIpx ? 25 : 0) + .1), 
            k._onResize && (k._onResize(e), k._onResize = null), k.styleWindowCur = {
                realHeight: k.cache.style.realHeight,
                realWidth: k.cache.style.realWidth,
                width: k.cache.style.width,
                height: k.cache.style.height,
                top: k.cache.style.top,
                left: k.cache.style.left
            }, console.log("WxBanner onResize", e, k.cache);
        }
        static onLoad() {
            console.log("WxBanner onLoad bannerCache", k.cache), k.loadStatus = !0, k.cache.offLoad(k.onLoad), 
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
            return console.log("---------------------------------------------------"), console.log(k.styleWindowCur), 
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
    k.modelList = [ "iPhone X", "iPhone XR", "iPhone XS", "iPhone 11", "iPhone XS Max", "iPhone11 Pro" ], 
    k.isIpx = !1, k.styleWindowCur = {
        realHeight: 0,
        realWidth: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0
    }, k.styleModeList = [ "left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom", "top", "bottom" ], 
    k.styleMode = "center-bottom", k.styleCustom = {}, k.styleCache = {}, k.styleHasBottom = !1, 
    k.styleBottomNum = 0;
    class M {
        constructor() {}
        static init(e = {}) {
            let t = p.Instance.platform.getSystemInfoSync().windowWidth;
            if (M.adUnitId = e.adUnitId, e.isRealtime ? M.isRealtime = e.isRealtime : M.isRealtime = !1, 
            e.realtime && (M.interval = e.interval), e.style && e.style.width) {
                let i = e.style.width;
                i = i * t / Laya.stage.width, M.bWidth = i, M.bWidth < 300 && (M.bWidth = 300);
            } else M.bWidth = t;
            M.load(), M.cache.onLoad(e => {
                console.log("banner广告创建完成1", e);
            }), console.log("banner广告创建完成", M.cache);
        }
        static load() {
            M.cache && M.cache.destroy();
            let t = p.Instance.platform.getSystemInfoSync(), i = (t.windowWidth, t.windowHeight);
            M.cache = p.Instance.platform.createBannerAd({
                adUnitId: M.adUnitId,
                adIntervals: M.adIntervals,
                style: {
                    width: M.bWidth,
                    top: i - M.bWidth / 16 * 9 - (e.isIphoneX ? 20 : 0),
                    left: 0
                }
            }), M.cache.onError(e => {
                console.log("WxBanner广告错误", e);
            }), M.cache.onResize(t => {
                console.log("尺寸变化了", t.width, t.height), M.cache.style.top = i - t.height - (e.isIphoneX ? 20 : 0), 
                M.cache.style.left = 0;
            });
        }
        static show(e = {}) {
            M.cache && (M.isRealtime ? (M.load(), M.isLoad = !0, M.cache.onLoad(function() {
                M.isLoad = !1, M.cache.show().then(() => {}).catch(() => {
                    M.cache.show();
                });
            })) : M.cache.show().then(() => {
                M.errorNum = 0, M._setTime && clearInterval(M._setTime), M._setTime = setInterval(() => {
                    console.log("WxBannerAdNew._alltime", M._alltime), M._alltime++, M._alltime >= M.interval && (M._alltime = 0, 
                    M.load(), M.isLoad = !0, M.cache.onLoad(function() {
                        M.isLoad = !1, M.cache.show();
                    }));
                }, 1e3);
            }).catch(e => {
                M.errorNum++, M.errorNum > 3 || (M.show(), console.log("广告组件出现问题", e));
            }));
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                M.isLoad ? this.delteHide() : M.hide();
            });
        }
        static hide() {
            this.isLoad ? M.delteHide() : (M._setTime && clearInterval(M._setTime), M.cache && M.cache.hide());
        }
    }
    M.cache = null, M.interval = 30, M._alltime = 0, M._setTime = null, M.adIntervals = 30, 
    M.isRealtime = !1, M.styleCache = {}, M.errorNum = 0, M.isLoad = !1;
    class O {
        constructor() {
            this.MaxLoadTime = 3, this.realHeight = 0, this.top = 0, this.initVideoSuccess = !1, 
            this.startTime = 0, this.isShowInterstitialSuccess = !1;
        }
        static get Instance() {
            return this._instance || (this._instance = new O()), this._instance;
        }
        init() {
            this.platformData = new U(), R.Instance.initRewardedVideoAd({
                adUnitId: this.platformData.videoIds
            }), this.initShare(), console.log("QqAdUtil---\x3einitShare finish"), k.init({
                adUnitId: this.platformData.bannerId,
                interval: 10,
                timerStatus: !0,
                style: {
                    width: 300,
                    styleMode: "center-bottom"
                }
            }), M.init({
                adUnitId: this.platformData.bannerId,
                interval: 10,
                timerStatus: !0,
                style: {
                    width: 300,
                    styleMode: "left-bottom"
                }
            }), console.log("QqAdUtil---\x3einitBanner finish"), E.init({
                realTime: !0
            }), console.log("QqAdUtil---\x3einitQQBox finish");
        }
        initBanner(t = 0) {
            let i;
            if (t++, !(i = {
                adUnitId: this.platformData.bannerId,
                style: {
                    left: 0,
                    top: (e.gameHeight - 300) / e.clientScale,
                    width: 750 / e.clientScale
                },
                adIntervals: 300
            })) return void console.log("qq initBanner bannerObj=null");
            let a = p.Instance.platform.createBannerAd(i);
            a.onError(e => {
                t < this.MaxLoadTime ? this.initBanner(t) : console.log("banner 加载失败");
            }), a.onLoad(() => {
                t = 0, this.bannerAD = a, e.isIphoneX ? this.bannerAD.style.top = p.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight - 50 / e.clientScale : this.bannerAD.style.top = p.Instance.platform.getSystemInfoSync().screenHeight - this.bannerAD.style.realHeight, 
                ae.Instance.setADMidleY(this.bannerAD.style), console.log("banner load success");
            });
        }
        initShare() {
            p.Instance.onQq && p.Instance.platform.showShareMenu({
                withShareTicket: !0
            }), this.platformData.shareData && this.platformData.shareData.length > 0 && p.Instance.platform.onShareAppMessage(() => {
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
            R.Instance.showRewardedVideoAd({
                success: () => {
                    e.success && e.success();
                },
                fail: () => {
                    e.fail ? e.fail() : l.msg("观看完整视频才能获得奖励哦");
                },
                error: () => {
                    l.msg("暂时没有可以播放的视频");
                }
            });
        }
        share(e = {}) {
            if (p.Instance.isQq) if (this.platformData.shareData.length > 0) {
                let t = Math.floor(Math.random() * this.platformData.shareData.length), i = {};
                i.title = this.platformData.shareData[t].title, i.imageUrlId = this.platformData.shareData[t].id, 
                i.imageUrl = this.platformData.shareData[t].url, p.Instance.platform.shareAppMessage(i), 
                this.startTime = new Date().getTime(), p.Instance.platform.onShow(() => {
                    new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(), 
                    p.Instance.platform.offShow(), B.Instance.onShow();
                });
            } else {
                let t = {
                    imageUrl: "images/share.jpg"
                };
                p.Instance.platform.shareAppMessage(t), this.startTime = new Date().getTime(), p.Instance.platform.onShow(() => {
                    new Date().getTime() - this.startTime >= 3e3 ? e.success && e.success() : e.fail && e.fail(), 
                    p.Instance.platform.offShow(), B.Instance.onShow();
                });
            } else e && e.success && e.success();
        }
        initInterstitialAd(e = !1) {
            console.log("initInterstitialAd"), this.interstitialAd ? this.interstitialAd.show().then(() => {
                console.log("插屏广告显示成功1"), this.isShowInterstitialSuccess = !0;
            }).catch(e => {
                console.log("插屏广告显示失败1"), this.isShowInterstitialSuccess || (this.adOptions && this.adOptions.fail && this.adOptions.fail(), 
                this.adOptions = null);
            }) : (this.interstitialAd = p.Instance.platform.createInterstitialAd({
                adUnitId: this.platformData.interstitialId
            }), this.interstitialAd.onLoad(() => {
                e && this.interstitialAd.show().then(() => {
                    console.log("插屏广告显示成功2"), this.isShowInterstitialSuccess = !0;
                }).catch(e => {
                    console.log("插屏广告显示失败2"), this.isShowInterstitialSuccess || (this.adOptions && this.adOptions.fail && this.adOptions.fail(), 
                    this.adOptions = null);
                });
            }));
        }
        showInterstitialAd(e) {
            p.Instance.onQq && (this.adOptions = e, p.Instance.platform && p.Instance.platform.createInterstitialAd ? (this.isShowInterstitialSuccess = !1, 
            this.initInterstitialAd(!0)) : (console.log("未找到 createInterstitialAd 方法"), this.adOptions && this.adOptions.fail && this.adOptions.fail()));
        }
    }
    O.StartDialogShowAdTime = 2250;
    class U {
        constructor() {
            this.appid = "1110320198", this.videoIds = [ "88e9ae197bfa92a3a0d32ea645a689e4" ], 
            this.bannerId = "e15177296b8ad21b70ff5112b5333b29", this.interstitialId = "", this.shareTxt = [ "愣着干什么，英雄救美啊" ], 
            this.shareData = [ {
                title: "惊险赛道，花样陷阱，等你挑战。",
                url: "https://mmocgame.qpic.cn/wechatgame/baLuz5tYG1DL6GYKTdOkpe5QakaoiakPGptVkecrcVGWY5ZuPLo5AY17y8QgyfE2E/0",
                id: "7BlYgYB9TvqhCFoZi5pf0A=="
            }, {
                title: "惊险赛道，花样陷阱，等你挑战。",
                url: "https://mmocgame.qpic.cn/wechatgame/baLuz5tYG1DAkiakq59KTOGvKe0rR9U57DxLicLaXSHxhhp70YtdVmsh5MkpkJ0kAM/0",
                id: "7BlYgYB9TvqhCFoZi5pf0A=="
            } ];
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
                l.msg("视频冷却中,请稍后再试..."), P.hadLoaded = !1, I.RestAll(), null != P.adOptions && null != P.adOptions && P.adOptions.fail && P.adOptions.fail(), 
                Laya.timer.currTimer - P.videoTime > 6e4 ? (P.videoTime = Laya.timer.currTimer, 
                P.videoAdNum++, P.videoAdNum >= P.VIVO_VIDEO_ID2.length && (P.videoAdNum = 0), P.videoAd = qg.createRewardedVideoAd({
                    posId: P.VIVO_VIDEO_ID2[P.videoAdNum]
                })) : Laya.timer.once(6e4, this, () => {
                    P.videoAd.load();
                });
            }), P.videoAd.onClose(e => {
                P.videoTime = Laya.timer.currTimer, P.hadLoaded = !1, I.RestAll(), e.isEnded ? null != P.adOptions && null != P.adOptions && P.adOptions.success && P.adOptions.success() : null != P.adOptions && null != P.adOptions && P.adOptions.fail && P.adOptions.fail(), 
                Laya.timer.once(6e4, this, () => {
                    P.videoAd.load();
                });
            });
        }
        static video(e = {}) {
            P.adOptions = e, P.hadLoaded ? (P.videoAd.show(), I.StopAll()) : (l.msg("视频冷却中,请稍后再试..."), 
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
            }), P.bannerAd.onError(e => {
                console.log("banner加载失败", e), Laya.timer.once(2e4, this, () => {
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
            P.InterstitialAd = p.Instance.platform.createInterstitialAd({
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
                e && e.then(() => {}).catch(e => {
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
                    let i = t[e], a = new W();
                    a.adId = i.adId, a.clickBtnTxt = i.clickBtnTxt, a.creativeType = i.creativeType, 
                    a.desc = i.desc, a.icon = i.icon, a.imgUrlList = i.imgUrlList, a.interactionType = i.interactionType, 
                    a.logoUrl = i.logoUrl, a.title = i.title, this.nativeList.push(a);
                }
            }), P.NativeAd.onError(e => {
                l.msg("原生广告加载失败", e), P.NativeLoad = !1, this.InitNative();
            }));
        }
        static showNative() {
            p.Instance.isVivo && P.NativeLoad && Laya.Dialog.open(L.NativeDIALOG, !1, () => {});
        }
        static ReportAdShow() {
            p.Instance.isVivo && P.NativeAd.reportAdShow({
                adId: P.nativeList[0].adId.toString()
            });
        }
        static RestNativeInit() {
            p.Instance.isVivo && (P.NativeLoad = !1, P.InitNative());
        }
        static ReportAdClick() {
            p.Instance.isVivo && P.NativeAd.reportAdClick({
                adId: P.nativeList[0].adId.toString()
            });
        }
    }
    P.VIVO_VIDEO_ID = "7bf50de63294470f81e868dafe3c2c83", P.VIVO_VIDEO_ID2 = [ "7bf50de63294470f81e868dafe3c2c83", "7bf50de63294470f81e868dafe3c2c83" ], 
    P.VIVO_BANNER_ID = "618aad8bf8c64d15a45b13abe8096cbf", P.VIVO_BANNER_ID2 = [ "618aad8bf8c64d15a45b13abe8096cbf", "618aad8bf8c64d15a45b13abe8096cbf" ], 
    P.VIVO_Interstitial_ID = "", P.Native_ID = [ "aca78d8fcb7e404c91189b2ff8bb3705", "aca78d8fcb7e404c91189b2ff8bb3705" ], 
    P.videoAdNum = 0, P.videoTime = 0, P.bannerNum = 0, P.NativeNum = 0, P.hadLoaded = !1, 
    P.isFrist = !0, P.InterstitialLoaded = !1, P.NativeLoad = !1, P.nativeList = [];
    class W {
        toString() {
            return "adId=" + this.adId + "\ntitle=" + this.title + "\ndesc=" + this.desc + "\nicon=" + this.icon + "\nlogoUrl=" + this.logoUrl + "\nclickBtnTxt=" + this.clickBtnTxt + "\ncreativeType=" + this.creativeType + "\ninteractionType=" + this.interactionType + "\nimgUrlList=" + this.imgUrlList;
        }
    }
    class H {
        constructor() {}
        static init(e = {}) {
            H.adUnitId = e.adUnitId, H.appId = e.appSid, e.isRealtime ? H.isRealtime = e.isRealtime : H.isRealtime = !1, 
            e.realtime && (H.realtime = e.realtime), e.style && e.style.width ? this.bannerWidth = e.style.width < 300 * Laya.Browser.pixelRatio ? 300 * Laya.Browser.pixelRatio : e.style.width : this.bannerWidth = Laya.Browser.width, 
            H.load(), H.isLoadOK = !1, H.cache.onLoad(e => {
                H.isLoadOK = !0, H.errorNum = 0, console.log("banner广告创建完成1", e);
            });
        }
        static load() {
            let e = p.Instance.platform.getSystemInfoSync(), t = e.windowWidth, i = e.windowHeight, a = this.bannerWidth / Laya.Browser.pixelRatio;
            H.cache && (H.cache.offError(), H.cache.offLoad(), H.cache.destroy()), H.cache = p.Instance.platform.createBannerAd({
                adUnitId: H.adUnitId,
                appSid: H.appId,
                style: {
                    width: a,
                    top: i - a / 13 * 5 - (Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2 ? 15 : 0),
                    left: (t - a) / 2
                }
            }), H.cache.onError(e => {
                if (H.isLoadOK = !1, 3010012 == e.errCode) console.log("小游戏启动前5秒不允许展示banner广告"); else {
                    if (H.errorNum > 3) return;
                    H.load(), H.errorNum++;
                }
            }), H.cache.onResize(e => {
                console.log("banner尺寸变化", e.width, e.height), H.cache.style.top = i - e.height - (Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2 ? 15 : 0), 
                H.cache.style.left = (t - e.width) / 2;
            });
        }
        static show(e = {}) {
            H.cache && (H.isRealtime ? (H.load(), H.isLoadOK = !1, H.cache.onLoad(function() {
                H.isLoadOK = !0, H.cache.show().then(() => {}).catch(() => {
                    H.cache.show();
                });
            })) : H.cache.show().then(() => {
                H.errorNum = 0, H._setTime && clearInterval(H._setTime), H._setTime = setInterval(() => {
                    console.log("BdBannerAd._alltime", H._alltime), H._alltime++, H._alltime >= H.realtime && (H._alltime = 0, 
                    H.load(), H.isLoadOK = !1, H.cache.onLoad(function() {
                        H.isLoadOK = !0, H.cache.show();
                    }));
                }, 1e3);
            }).catch(e => {
                console.log("广告组件出现问题", e), H.load();
            }));
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                H.isLoadOK ? H.hide() : this.delteHide();
            });
        }
        static hide() {
            H.cache && (this.isLoadOK ? (H._setTime && clearInterval(H._setTime), H.cache && H.cache.hide()) : H.delteHide());
        }
    }
    H.cache = null, H.realtime = 30, H._alltime = 0, H._setTime = null, H.adIntervals = 30, 
    H.isRealtime = !1, H.styleCache = {}, H.errorNum = 0, H.isLoadOK = !1, H.minWidth = 300, 
    H.bannerWidth = 750;
    class G {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAppSid = "", this.rewardedVideoAdCache = null, 
            this.rewardedVideoAdFailNum = 0, this.rewardedVideoAdMaxNum = 3, this.rewardedVideoAdStatus = !1, 
            this.videoIsSound = !0, this._onCloseRewardedVideoAd = null, this._onLoadRewardedVideoAd = null, 
            this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new G()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        initRewardedVideoAd(e = {}) {
            console.log("initRewardedVideoAd"), e.adUnitId && (console.log("initRewardedVideoAd 创建广告ID"), 
            this.rewardedVideoAdId = e.adUnitId, this.rewardedVideoAppSid = e.appSid), this.rewardedVideoAdFailNum < this.rewardedVideoAdMaxNum && (console.log("initRewardedVideoAd 创建广告"), 
            this.rewardedVideoAdCache = p.Instance.platform.createRewardedVideoAd({
                adUnitId: this.rewardedVideoAdId,
                appSid: this.rewardedVideoAppSid
            }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd), 
            this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(e) {
            Laya.LocalStorage.getItem("sound_key") ? this.videoIsSound = !1 : (this.videoIsSound = !0, 
            I.StopAll()), console.log("showRewardedVideoAd", G.Instance.rewardedVideoAdStatus), 
            e.before && e.before(), G.Instance.rewardedVideoAdStatus ? (G.Instance._onCloseRewardedVideoAd = (t => {
                e.complete && e.complete(), t.isEnded ? e.success && e.success() : e.fail && e.fail(), 
                this.videoIsSound && I.RestAll();
            }), G.Instance.rewardedVideoAdCache.onClose(G.Instance.onCloseRewardedVideoAd), 
            G.Instance.rewardedVideoAdCache.show()) : (e.error ? e.error() : l.msg("暂时没有可以播放的视频!"), 
            e.complete && e.complete(), this.videoIsSound && I.RestAll());
        }
        onCloseRewardedVideoAd(e) {
            G.Instance.rewardedVideoAdCache.offClose(G.Instance.onCloseRewardedVideoAd), G.Instance._onCloseRewardedVideoAd && G.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            console.log("百度视频加载完成"), G.Instance.rewardedVideoAdStatus = !0, G.Instance.rewardedVideoAdCache.offLoad(G.Instance.onLoadRewardedVideoAd), 
            G.Instance._onLoadRewardedVideoAd && G.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(e) {
            switch (console.log("onErrorRewardedVideoAd res", e), G.Instance.rewardedVideoAdCache.offError(G.Instance.onErrorRewardedVideoAd), 
            G.Instance._onErrorRewardedVideoAd && G.Instance._onErrorRewardedVideoAd(), e.errCode) {
              case 1002:
              case 1005:
              case 1006:
              case 1007:
              case 1008:
                G.Instance.rewardedVideoAdStatus = !1;
                break;

              case 1e3:
              case 1001:
              case 1003:
              case 1004:
              default:
                G.Instance.rewardedVideoAdFailNum++, G.Instance.setTimeout(() => {
                    G.Instance.initRewardedVideoAd(), console.log("视频重新加载", G.Instance.rewardedVideoAdFailNum);
                }, 5e3);
            }
        }
    }
    class F {
        constructor() {
            this.videoId = "7230153", this.bannerId = "7168299", this.appSid = "eb6aea35";
        }
        static get Instance() {
            return this._instance || (this._instance = new F()), this._instance;
        }
        init() {
            H.init({
                adUnitId: this.bannerId,
                appSid: this.appSid,
                isRealtime: !1,
                realtime: 20,
                style: {
                    width: 600
                }
            }), G.Instance.initRewardedVideoAd({
                adUnitId: this.videoId,
                appSid: this.appSid
            });
        }
    }
    class X {
        constructor() {}
        static init(e = {}) {
            X.adUnitId = e.adUnitId, e.isRealtime ? X.isRealtime = e.isRealtime : X.isRealtime = !1, 
            e.realtime && (X.realtime = e.realtime), X.load(), X.cache.onLoad(e => {
                console.log("banner广告创建完成1", e);
            }), console.log("banner广告创建完成", X.cache);
        }
        static load() {
            let t = p.Instance.platform.getSystemInfoSync(), i = t.windowWidth, a = t.windowHeight;
            X.cache && X.cache.destroy(), X.cache = p.Instance.platform.createBannerAd({
                adUnitId: X.adUnitId,
                adIntervals: X.adIntervals,
                style: {
                    width: 180,
                    top: a - 101.25 - (e.isIphoneX ? 20 : 0),
                    left: (i - 180) / 2
                }
            }), X.cache.onError(e => {
                console.log("banner广告错误", e);
            }), X.cache.onResize(t => {
                console.log(t.width, t.height), X.cache.style.top = a - t.height - (e.isIphoneX ? 20 : 0), 
                X.cache.style.left = (i - t.width) / 2;
            });
        }
        static show(e = {}) {
            X.isRealtime ? (X.load(), X.isLoad = !0, X.cache.onLoad(function() {
                X.isLoad = !1, X.cache.show().then(() => {}).catch(() => {
                    X.cache.show();
                });
            })) : X.cache.show().then(() => {
                X.errorNum = 0, X._setTime && clearInterval(X._setTime), X._setTime = setInterval(() => {
                    console.log("TtBannerAd._alltime", X._alltime), X._alltime++, X._alltime >= X.realtime && (X._alltime = 0, 
                    X.load(), X.isLoad = !0, X.cache.onLoad(function() {
                        X.isLoad = !1, X.cache.show();
                    }));
                }, 1e3);
            }).catch(e => {
                X.errorNum++, X.errorNum > 3 || (X.show(), console.log("广告组件出现问题", e));
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
    class z {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = {}, 
            this.rewardedVideoAdStatus = {}, this.rewardedVideoAdLoadStatus = !1, this._onCloseRewardedVideoAd = null, 
            this._onLoadRewardedVideoAd = null, this._onErrorRewardedVideoAd = null;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new z()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        createBannerAd(e) {
            return p.Instance.platform.createBannerAd(e);
        }
        createRewardedVideoAd(e) {
            return p.Instance.platform.createRewardedVideoAd(e);
        }
        initRewardedVideoAd(e = {}) {
            if (console.log("initRewardedVideoAd"), e.adUnitId) {
                console.log("initRewardedVideoAd 创建广告ID"), this.rewardedVideoAdId !== e.adUnitId && (this.rewardedVideoAdLoadStatus = !1);
                let t = e.adUnitId.length;
                t = Math.floor(Math.random() * t), this.rewardedVideoAdId = e.adUnitId[t], void 0 === this.rewardedVideoAdStatus[this.rewardedVideoAdId] && (this.rewardedVideoAdStatus[this.rewardedVideoAdId] = !0), 
                void 0 === this.rewardedVideoAdFailNum[this.rewardedVideoAdId] && (this.rewardedVideoAdFailNum[this.rewardedVideoAdId] = 0);
            }
            this.rewardedVideoAdStatus[this.rewardedVideoAdId] && this.rewardedVideoAdFailNum[this.rewardedVideoAdId] <= 3 && (console.log("initRewardedVideoAd 创建广告"), 
            this.rewardedVideoAdCache = p.Instance.platform.createRewardedVideoAd({
                adUnitId: this.rewardedVideoAdId
            }), this.rewardedVideoAdCache.load(), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd), 
            this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd));
        }
        showRewardedVideoAd(e) {
            console.log("showRewardedVideoAd", z.Instance.rewardedVideoAdLoadStatus), e.before && e.before(), 
            z.Instance.rewardedVideoAdLoadStatus ? (z.Instance._onCloseRewardedVideoAd = (t => {
                e.complete && e.complete(t.isEnded), t.isEnded ? e.success && e.success() : e.fail && e.fail();
            }), z.Instance.rewardedVideoAdCache.onClose(z.Instance.onCloseRewardedVideoAd), 
            z.Instance.rewardedVideoAdCache.show()) : (e.error && e.error(), e.complete && e.complete(!1));
        }
        onCloseRewardedVideoAd(e) {
            z.Instance.rewardedVideoAdCache.offClose(z.Instance.onCloseRewardedVideoAd), z.Instance._onCloseRewardedVideoAd && z.Instance._onCloseRewardedVideoAd(e);
        }
        onLoadRewardedVideoAd() {
            console.log("onLoadRewardedVideoAd"), z.Instance.rewardedVideoAdLoadStatus = !0, 
            z.Instance.rewardedVideoAdCache.offLoad(z.Instance.onLoadRewardedVideoAd), z.Instance._onLoadRewardedVideoAd && z.Instance._onLoadRewardedVideoAd();
        }
        onErrorRewardedVideoAd(e) {
            switch (console.log("onErrorRewardedVideoAd res", e), z.Instance.rewardedVideoAdCache.offError(z.Instance.onErrorRewardedVideoAd), 
            z.Instance._onErrorRewardedVideoAd && z.Instance._onErrorRewardedVideoAd(), e.errCode) {
              case 1002:
              case 1005:
              case 1006:
              case 1007:
              case 1008:
                z.Instance.rewardedVideoAdStatus[z.Instance.rewardedVideoAdId] = !1;
                break;

              case 1e3:
              case 1001:
              case 1003:
              case 1004:
              default:
                z.Instance.rewardedVideoAdFailNum[z.Instance.rewardedVideoAdId]++, z.Instance.setTimeout(() => {
                    z.Instance.initRewardedVideoAd();
                }, 1e4);
            }
        }
    }
    class q {
        constructor() {}
        static init() {
            q.recorder = p.Instance.platform.getGameRecorderManager();
        }
        static start(e = 120) {
            q.recorder.onStart(e => {
                q.isLp = !0, console.log("录屏开始");
            }), q.recorder.start({
                duration: e
            }), q.recorderTime = 0, q._time = setInterval(() => {
                q.recorderTime++;
            }, 1e3);
        }
        static stop() {
            clearInterval(q._time), q.recorder.onStop(e => {
                q.isLp = !1, console.log("录屏结束"), q.videoPath = e.videoPath;
            }), q.recorder.stop();
        }
    }
    q.recorderTime = 0, q.isLp = !1;
    class Y {
        constructor() {}
        static init() {
            p.Instance.platform.showShareMenu({
                withShareTicket: !0
            }), Y.onShareAppMessage(function(e) {
                return {
                    title: Y.title,
                    imageUrl: Y._url
                };
            });
        }
        static onShareAppMessage(e) {
            p.Instance.platform.onShareAppMessage(e);
        }
        static shareAppMessage(e) {
            p.Instance.platform.shareAppMessage(e);
        }
        static share(e) {
            let t;
            q.recorderTime < 4 ? l.msg("录屏时间小于3S，不能发布录屏!") : e.videoPath ? "video" === e.channel ? (Y.shareAppMessage({
                channel: "video",
                title: e.title ? e.title : Y.title,
                desc: e.desc ? e.desc : "",
                imageUrl: e.imageUrl ? e.imageUrl : Y._url,
                templateId: Y._id,
                query: e.query ? e.query : "",
                extra: {
                    videoPath: e.videoPath,
                    videoTopics: e.videoTopics ? e.videoTopics : [ "" ]
                },
                success(i) {
                    t = i.videoId, e.success && e.success();
                },
                fail(t) {
                    e.fail && e.fail(t);
                },
                error(t) {
                    e.error ? e.error(t) : l.msg("对局时间应大于3秒才能分享录屏哦");
                }
            }), p.Instance.platform.navigateToVideoView({
                videoId: t,
                success: e => {
                    console.log("done");
                },
                fail: e => {
                    console.log("视频跳转失败", e), 1006 === e.errCode && p.Instance.platform.showToast({
                        title: "something wrong with your network"
                    });
                }
            })) : Y.shareAppMessage({
                templateId: Y._id,
                title: e.title ? e.title : Y.title,
                desc: e.desc ? e.desc : "",
                imageUrl: e.imageUrl ? e.imageUrl : Y._url,
                query: e.query ? e.query : "",
                success() {
                    e.success && e.success();
                },
                fail(t) {
                    e.fail && e.fail();
                }
            }) : l.msg("录屏异常,请下一局再尝试！");
        }
    }
    Y._url = "https://sf1-ttcdn-tos.pstatp.com/img/developer/app/tt723f0482ed04e086/sie6476d5~noop.image", 
    Y.title = "秋名山老司机等你来战！", Y._id = "q1ef3hqo19hd6ijtqq";
    class Q {
        constructor() {
            this.MAX_TIME = 2, this.shareId = "cbhrendgpm532970gb", this.bannerId = "1nee7g3aa35d2ao4fk", 
            this.videoIds = [ "13qf6o43qg6j2impin" ], this.game_key = "tt8224f4991d1eb3c3", 
            this.videoPath = "";
        }
        static get Instance() {
            return this._instance || (this._instance = new Q()), this._instance;
        }
        init() {
            p.Instance.isTt && (q.init(), X.init({
                adUnitId: this.bannerId,
                isRealtime: !1,
                realtime: 60
            }), Y.init(), p.Instance.platform.createRewardedVideoAd && z.Instance.initRewardedVideoAd({
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
            z.Instance.showRewardedVideoAd({
                success: () => {
                    e.success && e.success();
                },
                fail: () => {
                    e.fail ? e.fail() : l.msg("观看完整视频才能获得奖励哦");
                },
                error: () => {
                    e.error ? e.error() : l.msg("暂时没有可以播放的视频！");
                }
            });
        }
    }
    class K {
        constructor() {}
        static init(e = {}) {
            this.load();
        }
        static load() {
            this.isLoad = !1, K.VideoAd = p.Instance.platform.createRewardVideoAd(), K.VideoAd.load(), 
            K.onLoad(), K.onError();
        }
        static onLoad() {
            K.VideoAd.onLoad(), K.VideoAd.onLoad(e => {
                this.errorNum = 0, this.isLoad = !0;
            });
        }
        static onError() {
            K.VideoAd.onError(), K.VideoAd.onError(e => {
                this.isLoad = !1, K.errorNum++, console.log("Uc视频广告创建失败" + K.errorNum, e), K.errorNum >= K.errorMax || K.load();
            });
        }
        static show(e) {
            this.isLoad ? K.VideoAd.show().then(() => {
                K.onClose(e);
            }).catch(t => {
                console.log("Uc播放视频广告失败", t), e.error ? e.error() : l.msg("暂时没有可以播放的视频"), e.complete && e.complete();
            }) : (e.error ? e.error() : l.msg("暂时没有可以播放的视频"), e.complete && e.complete());
        }
        static onClose(e) {
            K.VideoAd.offClose(), K.VideoAd.onClose(t => {
                e.complete && e.complete(), t && t.isEnded ? e.success && e.success() : e.fail && e.fail();
            });
        }
    }
    K.VideoAd = null, K.errorNum = 0, K.errorMax = 3, K.isLoad = !1;
    class j {
        constructor() {}
        static init(e = {}) {
            e.isRealtime ? j.isRealtime = e.isRealtime : j.isRealtime = !1, e.realtime && (j.realtime = e.realtime), 
            j.load();
        }
        static load() {
            this.isLoad = !1;
            let e = p.Instance.platform.getSystemInfoSync();
            if ("string" == typeof e) try {
                e = JSON.parse(e);
            } catch (e) {}
            console.log("UC获取设备信息", e);
            let t = e.windowWidth, i = e.windowHeight;
            j.cache && j.cache.destroy(), j.cache = p.Instance.platform.createBannerAd({
                style: {
                    width: t,
                    height: .12 * i,
                    bottom: 0,
                    left: 0,
                    gravity: 7
                }
            }), j.cache.onLoad(e => {
                console.log("Ucbanner广告创建完成", e), this.errorNum = 0, this.isLoad = !0;
            }), j.onError(), j.onLoad();
        }
        static onLoad(e = !1) {
            j.cache.onLoad(t => {
                this.errorNum = 0, this.isLoad = !0, e && j.cache.show();
            });
        }
        static onError() {
            j.cache.onError(e => {
                this.isLoad = !1, j.errorNum++, console.log("Ucbanner广告创建失败" + j.errorNum, e), j.errorNum >= j.errorMax || this.load();
            });
        }
        static show(e = {}) {
            j.isRealtime ? (j.load(), j.onLoad(!0)) : (j.cache.show(), j._setTime && clearInterval(j._setTime), 
            j._setTime = setInterval(() => {
                console.log("UcBannerAd._alltime", j._alltime), j._alltime++, j._alltime >= j.realtime && (j._alltime = 0, 
                j.load(), j.onLoad(!0));
            }, 1e3));
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                j.isLoad ? j.hide() : this.delteHide();
            });
        }
        static hide() {
            this.isLoad ? (j._setTime && clearInterval(j._setTime), j.cache && j.cache.hide()) : j.delteHide();
        }
    }
    j.cache = null, j.realtime = 30, j._alltime = 0, j._setTime = null, j.isRealtime = !1, 
    j.errorNum = 0, j.errorMax = 3, j.isLoad = !1;
    class J {
        constructor() {
            this.Clientid = "8d8b9874743f4564a78479ea53907d9f  ", this.Clientkey = "4553bfcc366c4835925ccdae1321c074", 
            this.appid = "7dacaab4b23a4535948e95dd0ede7d83";
        }
        static get Instance() {
            return this._instance || (this._instance = new J()), this._instance;
        }
        init() {
            console.log("初始化UC广告"), j.init({
                isRealtime: !1,
                realtime: 30
            }), K.init();
        }
    }
    class Z {
        static init() {
            Z.initAD(), Z.initVideo(), Z.initBanner(), Z.InitNative(), Z.loadDc(), console.log("初始化原生广告");
        }
        static loadDc() {
            b.getGameList();
        }
        static initAD() {
            Laya.Browser.window.qg.initAdService({
                appId: Z.APP_ID,
                isDebug: !0,
                success: function(e) {
                    console.log("oppo initAD success");
                },
                fail: function(e) {
                    console.log("oppo initAD fail:" + e.code + e.msg);
                },
                complete: function(e) {
                    console.log("oppo initAD complete");
                }
            });
        }
        static initVideo() {
            Z.VIDEO_ID.length <= 0 || (Z.videoNum++, Z.videoNum >= Z.VIDEO_ID.length && (Z.videoNum = 0), 
            Z.videoAd && (Z.videoAd.offLoad(), Z.videoAd.offClose(), Z.videoAd.offError()), 
            Z.videoAd = p.Instance.platform.createRewardedVideoAd({
                posId: Z.VIDEO_ID[Z.videoNum]
            }), Z.videoAd.onLoad(() => {
                this.loadTime = 0, Z.videoAd.show();
            }), Z.videoAd.onVideoStart(() => {}), Z.videoAd.onError(e => {
                console.log("oppo video onError:", e), l.msg("暂时没有可以播放的视频！");
            }), Z.videoAd.onClose(e => {
                console.log("oppo video onClose:", e.isEnded), e.isEnded ? Z.adOptions.success() : Z.adOptions.fail ? Z.adOptions.fail() : l.msg("播放视频失败！");
            }));
        }
        static video(e = {}) {
            Z.adOptions = e, Z.videoAd.load();
        }
        static initBanner() {
            let e = 200 * Laya.Browser.window.qg.getSystemInfoSync().windowHeight / 1334;
            console.log("banner高度", e), Z.BANNER_ID.length <= 0 || (Z.bannerNum++, Z.bannerNum >= Z.BANNER_ID.length && (Z.bannerNum = 0), 
            Z.bannerAd = p.Instance.platform.createBannerAd({
                posId: Z.BANNER_ID[Z.bannerNum]
            }));
        }
        static showBanner() {
            Z.bannerAd ? Z.bannerAd.show() : (Z.initBanner(), Laya.timer.once(100, this, () => {
                Z.showBanner();
            }));
        }
        static hideBanner() {
            Laya.timer.clearAll(this), Z.bannerAd && Z.bannerAd.hide();
        }
        static InitInterstitial() {
            let e = Laya.Browser.window.qg;
            Z.Interstitial_ID.length <= 0 || (Z.InterstitialNum++, Z.InterstitialNum >= Z.Interstitial_ID.length && (Z.InterstitialNum = 0), 
            Z.InterstitialAd = e.createInterstitialAd({
                adUnitId: Z.Interstitial_ID[Z.InterstitialNum]
            }), Laya.timer.once(200, this, () => {
                Z.InterstitialAd.load();
            }), Z.InterstitialAd.onLoad(() => {
                Z.InterstitialLoaded = !0;
            }), Z.InterstitialAd.onError(e => {
                Z.InterstitialLoaded = !1, Laya.timer.once(1e4, this, () => {
                    Z.InitInterstitial();
                });
            }), Z.InterstitialAd.onClose(() => {
                Z.InterstitialLoaded = !1, Z.InitInterstitial();
            }));
        }
        static showInterstitial() {
            if (Z.InterstitialLoaded && null != Z.InterstitialAd) {
                let e = Z.InterstitialAd.show();
                e && e.then(() => {}).catch(e => {
                    Laya.timer.once(1e4, this, () => {
                        Z.InitInterstitial();
                    });
                });
            }
        }
        static InitNative() {
            let e = Laya.Browser.window.qg;
            Z.Native_ID.length <= 0 || (Z.NativeNum++, Z.NativeNum >= Z.Native_ID.length && (Z.NativeNum = 0), 
            Z.NativeAd && (Z.NativeAd.offLoad(), Z.NativeAd.offError()), Z.NativeAd = e.createNativeAd({
                adUnitId: Z.Native_ID[Z.NativeNum]
            }), Laya.timer.once(500, this, () => {
                Z.NativeAd.load();
            }), Z.NativeAd.onLoad(e => {
                Z.NativeLoad = !0;
                let t = e.adList;
                this.nativeList = [];
                for (let e = 0; e < t.length; e++) {
                    let i = t[e], a = new $();
                    a.adId = i.adId, a.clickBtnTxt = i.clickBtnTxt, a.creativeType = i.creativeType, 
                    a.desc = i.desc, a.icon = i.icon, a.imgUrlList = i.imgUrlList, a.interactionType = i.interactionType, 
                    a.logoUrl = i.logoUrl, a.title = i.title, this.nativeList.push(a);
                }
                for (let e in this.nativeList[0]) console.log("原生广告" + e + " " + this.nativeList[0][e]);
            }), Z.NativeAd.onError(() => {
                console.log("原生广告加载错误"), Z.NativeLoad = !1, Laya.timer.once(1e3, this, () => {
                    this.InitNative();
                });
            }));
        }
        static showNative() {
            p.Instance.isOppo && Z.NativeLoad && Laya.Dialog.open(L.NativeOppoDIALOG, !1, () => {});
        }
        static ReportAdShow() {
            p.Instance.isOppo && Z.NativeLoad && Z.NativeAd.reportAdShow({
                adId: Z.nativeList[0].adId
            });
        }
        static RestNativeInit() {
            p.Instance.isOppo && (Z.NativeAd.destroy(), Z.NativeLoad = !1, Z.InitNative());
        }
        static ReportAdClick() {
            p.Instance.isOppo && Z.NativeLoad && Z.NativeAd.reportAdClick({
                adId: Z.nativeList[0].adId.toString()
            });
        }
    }
    Z.VIDEO_ID = [ "224673", "224673" ], Z.BANNER_ID = [ "224659", "224659" ], Z.Native_ID = [ "224668", "224668" ], 
    Z.Interstitial_ID = [ "" ], Z.APP_ID = "30353879", Z.videoNum = 0, Z.bannerNum = 0, 
    Z.NativeNum = 0, Z.InterstitialNum = 0, Z.loadTime = 0, Z.hadShowBanner = !1, Z.InterstitialLoaded = !1, 
    Z.NativeLoad = !1, Z.nativeList = [];
    class $ {
        toString() {
            return "adId=" + this.adId + "\ntitle=" + this.title + "\ndesc=" + this.desc + "\nicon=" + this.icon + "\nlogoUrl=" + this.logoUrl + "\nclickBtnTxt=" + this.clickBtnTxt + "\ncreativeType=" + this.creativeType + "\ninteractionType=" + this.interactionType + "\nimgUrlList=" + this.imgUrlList;
        }
    }
    class ee {
        constructor() {}
        static init(e = {}) {
            ee.adUnitId = e.adUnitId, e.isRealtime ? ee.isRealtime = e.isRealtime : ee.isRealtime = !1, 
            e.realtime && (ee.realtime = e.realtime), e.style && e.style.width ? this.bannerWidth = e.style.width < 300 * p.Instance.xsb ? 300 * p.Instance.xsb : e.style.width : this.bannerWidth = Laya.Browser.width, 
            console.log("banner广告信息1", ee.adUnitId), ee.load(), ee.isLoadOK = !1, ee.cache.onLoad(e => {
                ee.isLoadOK = !0, ee.errorNum = 0, console.log("banner广告创建完成1", e);
            });
        }
        static load() {
            console.log("魅族设备像素比列", p.Instance.xsb, p.Instance.platform.getSystemInfoSync().screenHeight, p.Instance.platform.getSystemInfoSync().screenWidth);
            let e = p.Instance.platform.getSystemInfoSync().screenHeight, t = p.Instance.platform.getSystemInfoSync().screenWidth, i = p.Instance.platform.getSystemInfoSync().screenWidth;
            i *= .4;
            this.bannerWidth, p.Instance.xsb;
            ee.cache && (ee.cache.offError(), ee.cache.offLoad()), ee.cache = p.Instance.platform.createBannerAd({
                adUnitId: ee.adUnitId,
                style: {
                    width: i,
                    top: e - i / 6.7,
                    left: (t - i) / 2
                }
            }), ee.cache.onError(e => {
                console.log("banner广告加载失败", e), ee.isLoadOK = !1, ee.errorNum > 3 ? ee.errorNum = 0 : Laya.timer.once(1e3, this, () => {
                    ee.errorNum++, ee.load();
                });
            }), ee.cache.onResize(e => {
                console.log("Banner 尺寸改变", e);
                let i = qg.getSystemInfoSync().screenHeight;
                ee.cache.top = i - e.height, ee.cache.style.left = (t - e.width) / 2, ee.cache.style.width = e.width, 
                ee.cache.style.height = e.height;
            }), ee.cache.onClose(() => {
                console.log("banner广告关闭");
            });
        }
        static show(e = {}) {
            if (console.log("显示魅族banner"), ee.cache) if (ee.isRealtime) ee.load(), ee.isLoadOK = !1, 
            ee.cache.onLoad(function() {
                ee.isLoadOK = !0, ee.cache.show();
            }); else if (ee.isLoadOK) ee.cache.show(), ee.errorNum = 0, ee._setTime && clearInterval(ee._setTime), 
            ee._setTime = setInterval(() => {
                ee._alltime++, ee._alltime >= ee.realtime && (ee._alltime = 0, ee.load(), ee.isLoadOK = !1, 
                ee.cache.onLoad(function() {
                    ee.isLoadOK = !0, ee.cache.show();
                }));
            }, 1e3); else {
                if (ee.errorNum > 3) return void (ee.errorNum = 0);
                Laya.timer.once(3e3, this, () => {
                    ee.errorNum++, this.show();
                });
            } else {
                if (ee.errorNum > 3) return void (ee.errorNum = 0);
                this.init(), Laya.timer.once(3e3, this, () => {
                    ee.errorNum++, this.show();
                });
            }
        }
        static delteHide() {
            Laya.timer.once(1e3, this, () => {
                ee.isLoadOK ? ee.hide() : this.delteHide();
            });
        }
        static hide() {
            ee.cache && (this.isLoadOK ? (ee._setTime && clearInterval(ee._setTime), ee.cache && ee.cache.hide()) : ee.delteHide());
        }
    }
    ee.cache = null, ee.realtime = 30, ee._alltime = 0, ee._setTime = null, ee.adIntervals = 30, 
    ee.isRealtime = !1, ee.styleCache = {}, ee.errorNum = 0, ee.isLoadOK = !1, ee.minWidth = 300, 
    ee.bannerWidth = 750;
    class te {
        constructor() {
            this.rewardedVideoAdId = "", this.rewardedVideoAdCache = null, this.rewardedVideoAdFailNum = 0, 
            this.rewardedVideoAdMaxNum = 3, this.rewardedVideoAdStatus = !1, this.videoIsSound = !0;
        }
        static get Instance() {
            return this._Instance || (this._Instance = new te()), this._Instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        initRewardedVideoAd(e = {}) {
            console.log("initRewardedVideoAd"), e.adUnitId && (console.log("initRewardedVideoAd 创建广告ID"), 
            this.rewardedVideoAdId = e.adUnitId), this.rewardedVideoAdFailNum < this.rewardedVideoAdMaxNum && (console.log("initRewardedVideoAd 创建广告", this.rewardedVideoAdId), 
            this.rewardedVideoAdCache = p.Instance.platform.createRewardedVideoAd({
                adUnitId: this.rewardedVideoAdId
            }), this.load());
        }
        load() {
            this.rewardedVideoAdCache.offLoad(), this.rewardedVideoAdCache.offError(), this.rewardedVideoAdCache.load(), 
            this.rewardedVideoAdCache.onError(this.onErrorRewardedVideoAd), this.rewardedVideoAdCache.onLoad(this.onLoadRewardedVideoAd);
        }
        onLoadRewardedVideoAd() {
            console.log("视频 广告加载成功"), te.Instance.rewardedVideoAdStatus = !0, te.Instance.rewardedVideoAdFailNum = 0;
        }
        onErrorRewardedVideoAd(e) {
            if (console.log("魅族视频加载错误", e), te.Instance.rewardedVideoAdStatus = !1, te.Instance.rewardedVideoAdFailNum++, 
            te.Instance.rewardedVideoAdFailNum > te.Instance.rewardedVideoAdMaxNum) return !1;
            Laya.timer.once(1e3, te.Instance, te.Instance.load);
        }
        showRewardedVideoAd(e) {
            this.rewardedVideoAdStatus ? (Laya.LocalStorage.getItem("sound_key") ? this.videoIsSound = !1 : (this.videoIsSound = !0, 
            I.StopAll()), e.before && e.before(), this.rewardedVideoAdCache.show(), this.rewardedVideoAdStatus = !1, 
            console.log("魅族显示激励视频加载成功"), this.rewardedVideoAdCache.onClose(() => {
                this.videoIsSound && I.RestAll(), Laya.timer.once(500, this, () => {
                    e.complete && e.complete(), e.success && e.success(), e.fail && e.fail();
                }), this.rewardedVideoAdCache.offClose(), this.load();
            })) : l.msg("暂时没有可以播放的视频,请稍后再尝试");
        }
    }
    class ie {
        constructor() {
            this.videoId = "AmCjixam", this.bannerId = "o8i4I7e9";
        }
        static get Instance() {
            return this._instance || (this._instance = new ie()), this._instance;
        }
        init() {
            ee.init({
                adUnitId: this.bannerId,
                isRealtime: !1,
                realtime: 60
            }), te.Instance.initRewardedVideoAd({
                adUnitId: this.videoId
            });
        }
    }
    class ae {
        constructor() {
            this.bannerStyle = null, this.ADMidleY = 0, this.hadInit = !1, this.showType = 0;
        }
        static get Instance() {
            return this._instance || (this._instance = new ae()), this._instance;
        }
        init() {
            switch (p.Instance.platformName) {
              case p.Instance.Wx:
                p.Instance.onWx && V.Instance.init();
                break;

              case p.Instance.Qq:
                p.Instance.onQq && O.Instance.init();
                break;

              case p.Instance.Oppo:
                p.Instance.onOppo && Z.init();
                break;

              case p.Instance.Vivo:
                p.Instance.onVivo && P.init();
                break;

              case p.Instance.Bd:
                p.Instance.onBd && F.Instance.init();
                break;

              case p.Instance.Tt:
                p.Instance.onTt && Q.Instance.init();
                break;

              case p.Instance.Uc:
                p.Instance.onUc && J.Instance.init();
                break;

              case p.Instance.Mz:
                p.Instance.onMz && ie.Instance.init();
                break;

              case p.Instance.Web:
                b.getGameList();
            }
            this.hadInit = !0, B.Instance.onShow();
        }
        showBanner(e = {}) {
            if (this.hadInit) switch (p.Instance.platformName) {
              case p.Instance.Wx:
                D.show();
                break;

              case p.Instance.Qq:
                k.show();
                break;

              case p.Instance.Tt:
                Q.Instance.showBanner();
                break;

              case p.Instance.Oppo:
                Z.showBanner();
                break;

              case p.Instance.Vivo:
                P.showBanner();
                break;

              case p.Instance.Bd:
                break;

              case p.Instance.Uc:
                j.show();
                break;

              case p.Instance.Mz:
            }
        }
        hideBanner() {
            if (this.hadInit) switch (p.Instance.platformName) {
              case p.Instance.Wx:
                D.hide();
                break;

              case p.Instance.Qq:
                k.hide();
                break;

              case p.Instance.Tt:
                Q.Instance.hideBanner();
                break;

              case p.Instance.Oppo:
                Z.hideBanner();
                break;

              case p.Instance.Vivo:
                P.hideBanner();
                break;

              case p.Instance.Bd:
                H.hide();
                break;

              case p.Instance.Uc:
                j.hide();
                break;

              case p.Instance.Mz:
                break;

              default:
                p.Instance.platform.hideBannerAd();
            }
        }
        showVideo(e = {}) {
            if (this.hadInit) switch (p.Instance.platformName) {
              case p.Instance.Wx:
                V.Instance.video(e);
                break;

              case p.Instance.Qq:
                O.Instance.video(e);
                break;

              case p.Instance.Tt:
                Q.Instance.video(e);
                break;

              case p.Instance.Oppo:
                Z.video(e);
                break;

              case p.Instance.Vivo:
                P.video(e);
                break;

              case p.Instance.Bd:
                G.Instance.showRewardedVideoAd(e);
                break;

              case p.Instance.Uc:
                K.show(e);
                break;

              case p.Instance.Mz:
                te.Instance.showRewardedVideoAd(e);
                break;

              case p.Instance.Web:
              default:
                e.success && e.success();
            } else e.success && e.success();
        }
        share(e = {}) {
            if (this.hadInit) switch (p.Instance.platformName) {
              case p.Instance.Wx:
                V.Instance.share(e);
                break;

              case p.Instance.Qq:
                O.Instance.share(e);
                break;

              case p.Instance.Tt:
                Y.share(e);
                break;

              default:
                e.fail && e.fail();
            } else e.success && e.success();
        }
        setADMidleY(t) {
            if (t) {
                this.bannerStyle = t, console.log("ADMidleY---\x3e bannerInfo ：", t);
                let i = e.gameHeight - t.height / 2 * e.clientScale;
                console.log("ADMidleY---\x3e y =", i), i >= e.gameHeight && (i = e.gameHeight - 150), 
                this.ADMidleY = i, console.log("ADMidleY---\x3e ADMidleY =", this.ADMidleY);
            } else this.ADMidleY = e.gameHeight - 150;
        }
        getADMidleY() {
            let t = 0 == this.ADMidleY ? this.ADMidleY = e.gameHeight - 150 : this.ADMidleY;
            return console.log("ADMidleY---\x3e getADMidleY :", t), t;
        }
        getADBannerInfo() {
            return this.bannerStyle;
        }
    }
    class se extends Laya.Script {
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
            f.upload(this.aldPage);
        }
        showBoxMask() {
            this.boxMask = this.owner.getChildByName("_mask"), this.boxMask.visible = !0;
        }
        hideBoxMask() {
            this.boxMask = this.owner.getChildByName("_mask"), this.boxMask.visible = !1;
        }
        showBox() {
            t.IsMisLead && p.Instance.isQq && Laya.timer.once(t.BoxTime, this, () => {
                E.show({
                    succsee: () => {},
                    fail: () => {},
                    onClose: () => {}
                });
            });
        }
        showBoxOrInter() {
            t.IsMisLead && p.Instance.isQq && Laya.timer.once(t.BoxTime, this, () => {
                Math.random() < -1 || E.show({
                    succsee: () => {},
                    fail: () => {},
                    onClose: () => {}
                });
            });
        }
        onDisable() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this), Laya.timer.clearAll(this.owner), 
            Laya.Tween.clearAll(this.owner), ae.Instance.hideBanner();
        }
        onDestroy() {}
        startAni(e, t) {
            let i = this.owner[e];
            i && i.play(null, t);
        }
        showBottomBanner(e = null) {
            ae.Instance.showBanner({
                type: 1,
                dialog: this.owner
            });
        }
        setNotMisLeadStyle(e) {
            if (ae.Instance.showBanner({
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
                let t = e.x, i = e.y, a = e.parent, s = new Laya.Point(t, i), n = a.localToGlobal(s, !0), o = ae.Instance.getADMidleY() - (n.y - i);
                e.y = o, e.visible = !0, e.alpha = 1, e instanceof Laya.Label && (e.fontSize = 36, 
                e.bold = !0), e.x = (a.width - e.width) / 2, Laya.timer.clearAll(this), Laya.timer.once(1500, this, () => {
                    Laya.Tween.to(e, {
                        y: i
                    }, 500, null, null, 200), ae.Instance.showBanner({
                        showType: 1,
                        dialog: this.owner
                    });
                });
            } else ae.Instance.showBanner({
                showType: 1,
                dialog: this.owner
            });
        }
    }
    class ne extends se {
        constructor() {
            super(), this._numAll = 0, this._numOnce = 0, this._timeOnce = 1e3, this._numDjs = 10, 
            this.isClick = !0, this.isShowBanner = !1;
        }
        initData() {
            D.hide(), this.isClick = !0, this.owner.openedCallBack(e => {
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
            p.Instance.isQq && (this.btn.bottom -= 50), this.bar.value = 0, Laya.Browser.onWeiXin && !Laya.Browser.onQQMiniGame && (this.time.visible = !1, 
            this.djs.visible = !1), this.btn.on(Laya.Event.CLICK, this, this.bxClick);
        }
        screenAdaptation() {}
        bxClick() {
            if (this.isClick) {
                this.ani.visible = !1, I.play("click"), this.btn.scale(1.2, 1.2), Laya.timer.once(100, this, () => {
                    this.btn.scale(1, 1);
                }), this._numAll++, this._numOnce++, this.bar.value += 1 / 8;
                let e = .5 + .3 * Math.random();
                p.Instance.isQq || p.Instance.isWx ? this.bar.value >= e && !this.isShowBanner && (this.showBottomBanner(), 
                this.isShowBanner = !0, Laya.timer.once(1500, this, () => {
                    this.onPass();
                })) : p.Instance.isBd ? this.bar.value >= .9 && (this.owner.close(), 
                platform.getInstance().showReward(
                    ()=>{
                        //成功  发放奖励
                        this.closeFun();
                    },
                    ()=>{

                    })
                // ae.Instance.showVideo({
                //     complete: () => {
                //         this.closeFun();
                //     }
                // })
                ) : this.bar.value >= e && (this.showBottomBanner(), this.onPass());
            }
        }
        countdown() {
            this._numDjs--, this.time.text = this._numDjs + "秒", this._numDjs < 1 && (this.owner.close(), 
            Laya.Dialog.open(L.TRYEND_DIALOG, !0, () => {
                Laya.Dialog.open(L.PASS_DIALOG, !0);
            }));
        }
        onBxStatus(e) {
            this.img.skin = [ "public/img_bx1.png", "public/img_bx2.png", "public/img_bx3.png" ][e];
        }
        onFrequency() {
            this._numOnce++;
        }
        onPass() {
            this.isClick = !1, w.getCoin(100), l.msg("恭喜获得100金币"), p.Instance.isQq || p.Instance.isWx ? (ae.Instance.hideBanner(), 
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
    class oe extends Laya.Sprite {
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
    class re extends Laya.Script {
        constructor() {
            super(), this.handNum = 0, this.dataList = [], this.eventId = "e_999";
        }
        onAwake() {}
        initData() {
            if (w.DcLoad) {
                let e = 0;
                if (this.isAll) {
                    e = v.GameList.length;
                    for (let t = 0; t < e; t++) this.dataList.push(v.GameList[t]);
                } else if (this.isFront) {
                    e = Math.floor(v.GameList.length / 2);
                    for (let t = 0; t < e; t++) this.dataList.push(v.GameList[t]);
                } else {
                    e = v.GameList.length - Math.floor(v.GameList.length / 2);
                    for (let e = Math.floor(v.GameList.length / 2); e < v.GameList.length; e++) this.dataList.push(v.GameList[e]);
                }
                console.log("导出长度", this.dataList, v.GameList.length, e), this.dataList.length < 1 ? this.owner.visible = !1 : this.owner.visible = !0, 
                this.onSetList(), this.onTween(), u.Instance.removeListener(a.DCLOADEND, this);
            } else u.Instance.on(a.DCLOADEND, this.initData, this);
        }
        onEnable() {
            this.list = this.owner.getChildByName("list"), p.Instance.isWx || p.Instance.isOppo || p.Instance.isWeb ? this.initData() : this.owner.visible = !1;
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
            "click" == e.type && v.leadOut(this.dataList[t], this.eventId);
        }
        onTween() {
            this.list.array = this.dataList;
            let e = this.list.scrollBar.max / .5;
            Laya.timer.frameLoop(1, null, () => {
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
        onEnable() {}
        onStart() {}
        onDisable() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this);
        }
        onDestroy() {}
        showBanner() {}
        hideBanner() {}
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
                } catch (e) {}
            } else t.visible = !1, t.alpha = .3, Laya.timer.once(1e3, this, function() {
                t.visible = !0;
            });
        }
        startAni(e, t) {
            let i = this.owner[e];
            i && i.play(null, t);
        }
    }
    class de {
        constructor() {}
    }
    de.Levels = new Map(), de.Trails = new Map(), de.Material = {
        car: {
            red: null,
            yellow: null,
            purple: null
        }
    }, de.CarTextrue = {
        red: "res/LayaScene_Prefabs/Conventional/Assets/Textrue/CarColor.png",
        CarPurple: "res/LayaScene_Prefabs/Conventional/Assets/Textrue/CarPurple.png",
        CarYellow: "res/LayaScene_Prefabs/Conventional/Assets/Textrue/CarYellow.png"
    }, de.Part = {
        Pass: null
    };
    class he extends Laya.Script {
        constructor() {
            super(), this.angle = 0, this.timeAll = 20, he.Instance = this;
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
            this.angle = 0 
            // w.IsSpeed = !1;
                        
            // this.angle = 1;
            // this.drawSomething(this.angle);
        }
        addSpeed() {
            if(w.IsAddSpeed == true)
            {
               let e = 36 / this.timeAll;
                this.angle += e               
                if(this.angle >= 360)
                {
                    this.angle = 360, this.onHand(), !1;
                    w.IsSpeed = true;
                    w.IsAddSpeed = false;

                }
                // console.log("向前",this.angle)
                
                this.drawSomething(this.angle); 
            //    return w.IsSpeed = !0, 
            //    this.angle = 360, this.onHand(), !1;                
            }

        }
        onSpeed() {
            let e = 36 / w.SpeedTime;
            Laya.timer.frameLoop(3.5, this, () => {
                this.angle -= e;
                this.drawSomething(this.angle); 
                if(this.angle <= 3 )
                {
                    Laya.timer.clearAll(this)
                    this.angle = 0;
                    w.IsAddSpeed = true;
                    this.hand.visible = false;
            

                }

                // console.log("向后",this.angle)
                
            }
            )
        }
        offSpeed() {
            this.angle = 1;
            this.drawSomething(this.angle);
            w.IsAddSpeed = true;
            this.hand.visible = false;
        }
        drawSomething(e) {
            this.pieSpr.graphics.clear(!0), this.pieSpr.graphics.drawPie(65, 65, 65, 0, e, "#ff0000");
        }
    }
    class ce {
        static get Instace() {
            return this._instance || (this._instance = new ce()), this._instance;
        }
        startSound() {
            I.stop("motor"), I.play("start", 1, 1, () => {
                I.play("start2", 1, 1, () => {
                    I.play("motor", 0);
                });
            });
        }
        runSound() {
            I.stop("motor"), I.stop("run"), I.play("run", 0);
        }
        offRunSound() {
            I.play("motor", 0), I.stop("run");
        }
        offMotorSound() {
            I.stop("motor");
        }
        offAll() {
            I.stop("run"), I.stop("motor");
        }
        motor() {
            I.play("motor", 0);
        }
        speedSound() {
            I.stop("speed"), I.play("speed");
        }
    }
    class me extends Laya.Script {
        constructor() {
            super(), this.time = 12e4, this.isStart = !1, me.Instance = this;
        }
        onEnable() {
            u.Instance.on(a.GAMESTART, this.onDjs, this);
        }
        onStageClick() {
            this.isStart = !0;
        }
        onDjs() {
            let e = 0;
            this.time = 12e4, this.isStart = !1, u.Instance.on(a.GAMEEND, () => {
                u.Instance.removeListener(a.GAMEEND, this), Laya.timer.clearAll(this);
            }, this), Laya.timer.frameLoop(1, this, () => {
                if (!this.isStart) return !1;
                e = Laya.timer.delta, this.time -= e;
                let t = Math.floor(this.time / 6e4), i = this.time % 6e4, s = Math.floor(i / 1e3), n = i % 1e3;
                this.owner.text = "0" + t + ":" + s + ":" + n, this.time <= 0 && (Laya.timer.clearAll(this), 
                this.owner.text = "00:00:00", u.Instance.emit(a.TIMEEND));
            });
        }
        onDisable() {
            u.Instance.removeListener(a.GAMEEND, this), u.Instance.removeListener(a.GAMESTART, this), 
            Laya.timer.clearAll(this);
        }
    }
    const ue = e => {
        if (!e) throw Error("输入颜色值为空");
        if (6 != e.length) throw Error("输入颜色值格式错误");
        let t = new Laya.Vector3(), i = ge(e);
        return t = we(i);
    }, ge = e => {
        if (!e) throw Error("输入颜色值为空");
        if (6 != e.length) throw Error("输入颜色值格式错误");
        let t = {}, i = e.substr(0, 2), a = e.substr(2, 2), s = e.substr(4, 2);
        return t = {
            r: o(i),
            g: o(a),
            b: o(s)
        };
    }, we = e => {
        if (!e) throw Error("输入RGB颜色值为空");
        if (null == e.r || null == e.g || null == e.b) throw Error("输入RGB颜色值格式不正确");
        let t = Number((e.r / 255).toFixed(2)), i = Number((e.g / 255).toFixed(2)), a = Number((e.b / 255).toFixed(2));
        return new Laya.Vector3(t, i, a);
    }, pe = e => {
        if (!e) throw Error("输入Vector3颜色空间值为空");
        return new Laya.Vector4(e.x, e.y, e.z, 1);
    };
    class ye {
        constructor() {}
        static get Instance() {
            return this._instance || (this._instance = new ye()), this._instance;
        }
        upDateLoadMtl(e, t) {
            e.meshRenderer.material = t;
        }
        upDateTexture(e, t) {
            let i = e.meshRenderer.material;
            Laya.Texture2D.load(t, Laya.Handler.create(this, function(e) {
                i.albedoTexture = e;
            }));
        }
        upDateMaterial(e, t) {
            e.meshRenderer.material;
            let i = new Laya.PBRStandardMaterial();
            i.smoothness = 0, Laya.Texture2D.load(t, Laya.Handler.create(this, function(e) {
                i.albedoTexture = e;
            })), e.meshRenderer.material = i;
        }
        upDateMaterial2(e, t) {
            e.skinnedMeshRenderer.material;
            let i = new Laya.PBRStandardMaterial();
            i.metallic = .2, i.smoothness = 0, Laya.Texture2D.load(t, Laya.Handler.create(this, function(e) {
                i.albedoTexture = e;
            })), e.skinnedMeshRenderer.material = i;
        }
        upDateMaterialFeel(e, t) {
            e.meshRenderer.material;
            let i = new Laya.UnlitMaterial();
            i.albedoColor = pe(ue("FF0900")), i.albedoIntensity = 2.3, Laya.Texture2D.load(t, Laya.Handler.create(this, function(e) {
                i.albedoTexture = e;
            })), e.meshRenderer.material = i;
        }
    }
    class Ie extends Laya.Script3D {
        constructor() {
            super(), this.isBtnOk = !1, this.carSpeed = 0, this.carIsQD = !1, this.angle = 0, 
            this.isEnd = !1, this.forceBase = new Laya.Vector3(2e4, 0, 2e4), this.forceSpeed = new Laya.Vector3(0, 0, 1e3), 
            this.angularVelocity = new Laya.Vector3(0, 0, 0), this.isGo = !1, this.isBack = !1, 
            this.isLeft = !1, this.isRight = !1, this.turnAngle = 1, this.wordAngle = 0, this.isDie = !1, 
            this.isRunSound = !0, this.isShowStart = !1;
        }
        onEnable() {
            console.log("车子的角度", this.owner), this.angle = Math.round(this.owner.transform.rotationEuler.y);
            let e = this.owner.transform.rotationEuler.y, t = B.Instance.angleToRadian(e), i = Math.cos(t), a = Math.sin(t);
            this.forceNormal = new Laya.Vector3(a, 0, i);
        }
        getSceneSp(e) {
            this.TrailBox = e, console.log("场景1111", this.TrailBox), this.init();
        }
        init() {
            this.owner.transform.position = new Laya.Vector3(0, 1, 0), this.CarFxp = this.owner.getChildByName("CarShell").getChildByName("Fxp").getChildByName("SteeringWheel"), 
            this.wheel1 = this.owner.getChildByName("CarShell").getChildByName("CarInsaid_2_2").getChildByName("Axle_Front").getChildByName("Tyre_Left_Front"), 
            this.wheel2 = this.owner.getChildByName("CarShell").getChildByName("CarInsaid_2_2").getChildByName("Axle_Front").getChildByName("Tyre_Right_Front"), 
            this.wheel3 = this.owner.getChildByName("CarShell").getChildByName("CarInsaid_2_2").getChildByName("Axle_Back").getChildByName("Tyre_Left_Front_1"), 
            this.wheel4 = this.owner.getChildByName("CarShell").getChildByName("CarInsaid_2_2").getChildByName("Axle_Back").getChildByName("Tyre_Right_Front_1"), 
            this.Rig = this.owner.getComponent(Laya.Rigidbody3D), this.FirePart = this.owner.getChildByName("Fire"), 
            this.FirePart.active = !1, this.onPart(!1), this.Rig.mass = 1e3, this.Rig.friction = .6, 
            this.Rig.restitution = 0, this.Rig.linearDamping = .1, console.log("this.Rig.restitution", this.Rig.linearVelocity), 
            this.Rig.linearVelocity = new Laya.Vector3(0, 0, 0), this.Rig.gravity = new Laya.Vector3(0, -29.8, 0), 
            this.force = new Laya.Vector3(0, 0, 0), this.onFxp(), u.Instance.on(a.TIMEEND, () => {
                this.isEnd || (console.log("游戏结束-时间到"), this.isEnd = !0, Ce.Instance.onFail(), u.Instance.removeListener(a.TIMEEND, this));
            }, this), u.Instance.on(a.GAMEEND, e => {
                e && (this.Rig.clearForces(), this.Rig.linearVelocity = new Laya.Vector3(0, 0, 0), 
                Laya.timer.clearAll(this));
            }, this), this.upDateMtl();
            he.Instance.offSpeed();
            Laya.timer.frameLoop(2, this, () => {
                
                if(this.carSpeed != 0)
                {

                        he.Instance.addSpeed();


                }
                // else{
                //     Laya.timer.clearAll(this);
                // }
            })
        }
        upDateMtl() {
            let e = this.owner.getChildByName("CarShell").getChildByName("CarInsaid_2_2").getChildByName("CarBaseAll_2"), t = this.owner.getChildByName("Decorate");
            for (let t = 0; t < e.numChildren; t++) ye.Instance.upDateTexture(e.getChildAt(t), w.SkinData[w.GetSkin].textrue);
            for (let e = 0; e < t.numChildren; e++) ye.Instance.upDateTexture(t.getChildAt(e), w.SkinData[w.GetSkin].textrue);
        }
        createTrail() {}
        showBanner() {
            this.isShowStart || (this.isShowStart = !0, Laya.timer.once(500, this, () => {
                _.show({
                    style: {
                        width: 700,
                        styleMode: "left-bottom"
                    }
                }), this.isBtnOk = !0, Laya.timer.once(1e3, this, () => {
                    _.hide();
                });
            }));
        }
        goAhead() {
            Laya.timer.clear(this, this.giveOil), this.isGo = !0, this.isBack = !1, Laya.timer.frameLoop(1, this, this.giveOil), 
            me.Instance && !me.Instance.isStart && (me.Instance.isStart = !0);
        }
        goBack() {
            Laya.timer.clear(this, this.giveOil), this.isGo = !1, this.isBack = !0, Laya.timer.frameLoop(1, this, this.giveOil);
        }
        onTurnLeft() {
            let e = this.turnAngle;
            this.CarFxp.transform.localRotationEulerY >= 22 && (e = 0), this.wheel1.transform.localRotationEulerY += e, 
            this.wheel2.transform.localRotationEulerY += e, this.CarFxp.transform.localRotationEulerY += e;
        }
        turnLeft() {
            if (t.IsMisLead && (this.showBanner(), !this.isBtnOk)) return !1;
            this.offBackToNormal(), Laya.timer.frameLoop(1, this, this.onTurnLeft);
        }
        offTurnLeft() {
            Laya.timer.clear(this, this.onTurnLeft), this.BackToNormal();
        }
        onTurnRight() {
            let e = -this.turnAngle;
            this.CarFxp.transform.localRotationEulerY <= -22 && (e = 0), this.wheel1.transform.localRotationEulerY += e, 
            this.wheel2.transform.localRotationEulerY += e, this.CarFxp.transform.localRotationEulerY += e;
        }
        turnRight() {
            if (t.IsMisLead && (this.showBanner(), !this.isBtnOk)) return !1;
            this.offBackToNormal(), Laya.timer.frameLoop(1, this, this.onTurnRight);
        }
        offTurnRight() {
            Laya.timer.clear(this, this.onTurnRight), this.BackToNormal();
        }
        BackToNormal() {
            Laya.timer.frameLoop(1, this, this.onBackToNormal);
        }
        onBackToNormal() {
            let e = Math.round(this.CarFxp.transform.localRotationEulerY), t = 4 * this.turnAngle;
            e > 0 ? (t = 4 * -this.turnAngle, e <= 4 * this.turnAngle && (e = 0)) : e >= 4 * this.turnAngle && (e = 0), 
            e ? (this.wheel1.transform.localRotationEulerY += t, this.wheel2.transform.localRotationEulerY += t, 
            this.CarFxp.transform.localRotationEulerY += t) : (this.wheel1.transform.localRotationEulerY = 0, 
            this.wheel2.transform.localRotationEulerY = 0, this.CarFxp.transform.localRotationEulerY = 0, 
            Laya.timer.clear(this, this.onBackToNormal), this.Rig.angularVelocity = new Laya.Vector3(this.Rig.angularVelocity.x, 0, this.Rig.angularVelocity.z));
        }
        offBackToNormal() {
            Laya.timer.clear(this, this.onBackToNormal);
        }
        onFxp() {
            u.Instance.on(a.FXP, this.onWheelRatation, this);
        }
        onWheelRatation(e) {
            let t = -40 * e / w.FxpAngle;
            this.CarFxp.transform.localRotationEulerY = t;
        }
        giveOil() {
            this.carIsQD = !0;
            let e = new Laya.Vector3(0, 0, 0), t = this.owner.transform.localRotationEulerY, i = B.Instance.angleToRadian(t), a = Math.cos(i), s = Math.sin(i);
            this.forceNormal = new Laya.Vector3(s, 0, a), this.isGo && (e = B.Instance.multiply(new Laya.Vector3(1.25, 1.25, 1.25), this.forceNormal)), 
            this.isBack && (e = B.Instance.multiply(new Laya.Vector3(-1.25, 1.25, -1.25), this.forceNormal)), 
            this.force = B.Instance.multiply(e, this.forceBase), this.Rig.applyForce(this.force);
        }
        giveSpeed() {
            this.onPart(!0), I.play("speed2"), this.force = B.Instance.multiply(new Laya.Vector3(3, 3, ), this.forceBase), 
            he.Instance.onSpeed(), Laya.timer.once(1e3 * w.SpeedTime, this, () => {
                this.onPart(!1), this.force = this.forceBase
            })
        }
        giveTurn(e = 1) {
            if (!this.isTrigger) return;
            let t = e > 2 ? 2 : e, i = this.CarFxp.transform.localRotationEulerY;
            if (i) {
                let e = 0;



                if(Math.abs(i) >30 )
                {
                    e = 1500;
                }
                else if(Math.abs(i)>20)
                {
                    e = 1e3;
                }
                else
                {
                    (Math.abs(i),1e3)
                }
                w.isFXP && (e /= 1.2)

                this.carSpeed, this.isBack && (e = -e), i > 0 ? this.Rig.applyTorque(new Laya.Vector3(0, -e * t, 0)) : this.Rig.applyTorque(new Laya.Vector3(0, e * t, 0));
            } else this.Rig.applyTorque(new Laya.Vector3(0, 0, 0)), this.Rig.angularVelocity = new Laya.Vector3(0, 0, 0);
        }
        onFly() {
            console.log("起飞角度", this.owner.transform.localRotationEulerX), this.owner.transform.localRotationEulerX > 20 ? (this.Rig.applyTorque(new Laya.Vector3(0, 0, 0)), 
            this.Rig.angularVelocity = new Laya.Vector3(0, 0, 0)) : this.Rig.applyTorque(new Laya.Vector3(-500, 0, 0));
        }
        stopOil() {
            this.isGo = !1, this.isBack = !1, Laya.timer.clear(this, this.giveOil);
        }
        stop() {
            this.isTrigger && (this.stopOil(), this.Rig.linearVelocity = B.Instance.multiply(new Laya.Vector3(.5, 1, .5), this.Rig.linearVelocity));
        }
        carCollision() {
            this.Rig.linearVelocity = B.Instance.multiply(new Laya.Vector3(.1, 1, .1), this.Rig.linearVelocity), 
            this.Rig.angularVelocity = B.Instance.multiply(new Laya.Vector3(.05, 1, .05), this.Rig.angularVelocity);
        }
        offStop() {}
        onPart(e) {}
        onSound() {
            if (!this.carIsQD) return !1;
            Math.abs(this.carSpeed) >= 1 ? this.isRunSound || (this.isRunSound = !0, ce.Instace.runSound()) : this.isRunSound && (ce.Instace.offRunSound(), 
            this.isRunSound = !1);
        }
        onWheel() {
            let e = this.owner.transform.localRotationEulerY, t = B.Instance.angleToRadian(e), i = Math.cos(t), a = Math.sin(t), s = new Laya.Vector2(a, i), n = new Laya.Vector2(this.Rig.linearVelocity.x, this.Rig.linearVelocity.z), o = 0;
            (o = Math.atan2(n.y, n.x) - Math.atan2(s.y, s.x)) < 0 && (o += 2 * Math.PI), o = Math.round(B.Instance.radianToAngle(o));
            let r = 0, l = Math.round(this.Rig.linearVelocity.x), d = Math.round(this.Rig.linearVelocity.z);
            if (l || d) {
                let e = Math.abs(d) > Math.abs(l) ? Math.round(d) : Math.round(l);
                this.carSpeed = e, -1 < e && e < 1 || (Math.abs(o) > 150 && Math.abs(o) < 210 ? (Ce.Instance.runCamera(!1), 
                (r = e / 3) < -8 && (r = -8)) : (Ce.Instance.runCamera(!0), (r = e / 3) > 8 && (r = 8)), 
                this.giveTurn());
            } else this.carSpeed = 0;
            this.wheel1.transform.localRotationEulerX += r, this.wheel2.transform.localRotationEulerX += r, 
            this.wheel3.transform.localRotationEulerX += r, this.wheel4.transform.localRotationEulerX += r, 
            Math.abs(this.wheel1.transform.localRotationEulerX) >= 360 && (this.wheel1.transform.localRotationEulerX = this.wheel2.transform.localRotationEulerX = this.wheel3.transform.localRotationEulerX = this.wheel4.transform.localRotationEulerX = 0), 
            this.onAngle(), this.onSound();
            console.log("rrrrrrrrrrrrrrrr",r)
        }
        onFlyTime() {
            this.isEnd || (console.log("摄像头无法回去-时间到"), Ce.Instance.flyCarCamera(!1));
        }
        onCollisionEnter(e) {
            if (w.StartGame && !this.isEnd) switch (this.isTrigger = !0, e.other.owner.name) {
              case "speed":
                break;

              case "startFly":
                Laya.timer.once(2e3, this, this.onFlyTime), Ce.Instance.flyCarCamera(!0);
                break;

              case "endFly":
                Laya.timer.clear(this, this.onFlyTime), Ce.Instance.flyCarCamera(!1);
                break;

              case "rusuMd":
                I.play("resuMd");
                break;

              case "VerticalPart":
              case "Baffle":
                I.play("collision"), p.Instance.shortVibrate(), this.carCollision();
                break;

              case "resu":
                let t = e.other.owner, i = Number(t.getChildAt(0).name);
                Ce.Instance.resuInfo = i;
                break;

              case "pass":
                this.isEnd = !0, Ce.Instance.onPass();
                break;

              case "Saw_die":
              case "Axe_die":
                this.isEnd = !0, this.FirePart.active = !0, I.play("zhuangji"), Laya.timer.once(1e3, this, () => {
                    I.play("fire");
                }), console.log("游戏结束-障碍物"), Ce.Instance.onFail();
            }
        }
        onCollisionExit() {
            this.isTrigger = !1;
        }
        onCollisionStay() {
            this.isTrigger = !0;
        }
        onAngle() {
            let e = Math.round(this.owner.transform.rotationEuler.y);
            if (Math.abs(this.angle - e) >= 2) {
                let t = new Laya.Vector3(this.Rig.linearVelocity.x, this.Rig.linearVelocity.y, this.Rig.linearVelocity.z), i = this.angle - e, a = B.Instance.angleToRadian(i), s = new Laya.Vector3(t.x * Math.cos(a) - t.z * Math.sin(a), t.y, t.x * Math.sin(a) + t.z * Math.cos(a));
                this.Rig.linearVelocity = s, this.angle = e;
            }
        }
        onFail() {
            this.isEnd || this.owner.transform.localPositionY <= -50 && (this.isEnd = !0, console.log("游戏结束-50"), 
            Ce.Instance.onFail());
        }
        onCarFlip() {
            if (this.isDie || this.isEnd) return !1;
            (Math.abs(this.owner.transform.localRotationEulerX) >= 300 || Math.abs(this.owner.transform.localRotationEulerZ) >= 300) && (this.isDie = !0, 
            this.isEnd = !0, I.play("fire"), this.FirePart.active = !0, console.log("游戏结束-侧翻"), 
            Ce.Instance.onFail());
        }
        onUpdate() {
            w.StartGame && (this.onCarFlip(), this.isTrigger, this.onWheel(), this.onFail());
        }
        onDisable() {
            u.Instance.removeListener(a.FXP, this), u.Instance.removeListener(a.TIMEEND, this), 
            u.Instance.removeListener(a.GAMEEND, this);
        }
    }
    class Le extends Laya.Script3D {
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
            Laya.timer.clearAll(this), u.Instance.removeListener(a.GAMEEND, this);
        }
    }
    class fe extends Laya.Script3D {
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
            Laya.timer.clearAll(this), u.Instance.removeListener(a.GAMEEND, this);
        }
    }
    class Ae extends Laya.Script3D {
        constructor() {
            super();
        }
        onEnable() {
            this.light = this.owner.getChildByName("rebirthLightPillar"), this.material = this.light.meshRenderer.material, 
            console.log("复活点", this.material.tilingOffsetX, this.material.tilingOffsetY), Laya.timer.frameLoop(1, this, () => {
                let e = this.material.tilingOffsetX;
                (e += .005) >= 10 && (e = 1), this.material.tilingOffsetX = e;
            });
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class be extends Laya.Script3D {
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
            Laya.timer.clearAll(this), u.Instance.removeListener(a.GAMEEND, this);
        }
    }
    class Se extends Laya.Script3D {
        constructor() {
            super();
        }
        onEnable() {
            this.material = this.owner.meshRenderer.material, console.log("加速带贴图", this.material.tilingOffset), 
            Laya.timer.frameLoop(5, this, () => {
                let e = this.material.tilingOffsetZ;
                e -= .02, this.material.tilingOffsetZ = e;
            });
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class Ce extends le {
        constructor() {
            super(), this.fxSel = 0, this.levelPrefab = null, this.cameraPosition = new Laya.Vector3(.3, 3.7, -.6), 
            this.cameraRotation = new Laya.Vector3(-13, 180, 0), this.cameraFlyPosition = new Laya.Vector3(.3, 7.9, -13.1), 
            this.cameraFlyRotation = new Laya.Vector3(-13, 180, 0), this.cameraEndPosition = new Laya.Vector3(-.3, 5.9, 7.9), 
            this.cameraEndRotation = new Laya.Vector3(-13, 0, 0), this.cameraFirePosition = new Laya.Vector3(0, 14.82, -24.83), 
            this.cameraFireRotation = new Laya.Vector3(-13, 0, 0), this.isLoad = !1, this.resuInfo = 0, 
            this.cameraV3 = new Laya.Vector3(), this.lerp = new Laya.Vector3(), this.cuntV3 = new Laya.Vector3(), 
            this.runPath = !0, Ce.Instance = this;
        }

        initData() {

            this.destroyScene(), this.fxSel = g.getNumber(i.FXSEL, 0);


            
        }
        findView() {
            this.OperatingBox = this.owner.getChildByName("OperatingBox"), this.fxBox = this.OperatingBox.getChildByName("fxBox"), 
            this.fxpBox = this.OperatingBox.getChildByName("fxpBox"), this.dlBox = this.OperatingBox.getChildByName("dlBox"), 
            this.leftBtn = this.fxBox.getChildByName("left"), this.rightBtn = this.fxBox.getChildByName("right"), 
            this.goBtn = this.dlBox.getChildByName("top"), this.tsHand = this.goBtn.getChildByName("hand"), 
            this.backBtn = this.dlBox.getChildByName("bottom"), this.stopBtn = this.OperatingBox.getChildByName("stop"), 
            this.speedBtn = this.dlBox.getChildByName("speedBtn"), this.gameBtn = this.OperatingBox.getChildByName("btnGame"), 
            this.onTs();
        }
        onTs() {
            g.getBoolean(i.HANDTS, !1) ? this.tsHand.visible = !1 : (g.setBoolean(i.HANDTS, !0), 
            this.tsHand.visible = !0, Laya.timer.loop(600, this, this.handTs), this.goBtn.on(Laya.Event.CLICK, this, () => {
                Laya.timer.clear(this, this.handTs), this.tsHand.visible = !1;
            }));
        }
        handTs() {
            this.tsHand.visible = !this.tsHand.visible;
        }
        onChangeGame() {
            0 == this.fxSel ? (w.isFXP = !1, this.gameBtn.skin = "game/game_ico.png", this.fxBox.visible = !0, 
            this.fxpBox.visible = !1, g.setNumber(i.FXSEL, 0)) : 1 == this.fxSel && (w.isFXP = !0, 
            this.gameBtn.skin = "game/game_ico2.png", this.fxBox.visible = !1, this.fxpBox.visible = !0, 
            g.setNumber(i.FXSEL, 1));
        }
        onPerating() {
          
 this.goBtn.on(Laya.Event.MOUSE_DOWN, this, e => {
                e.stopPropagation(), this.goBtn.skin = "game/goAheadh.png", this.mCar.goAhead(), 
                ce.Instace.speedSound();
            }), this.goBtn.on(Laya.Event.MOUSE_OUT, this, e => {
                e.stopPropagation(), this.goBtn.skin = "game/goAhead.png", this.mCar.stopOil();
            }), this.backBtn.on(Laya.Event.MOUSE_DOWN, this, e => {
                e.stopPropagation(), this.backBtn.skin = "game/goBackh.png", this.mCar.goBack(), 
                ce.Instace.speedSound();
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
            }), this.stopBtn.on(Laya.Event.MOUSE_OUT, this, () => {
                this.mCar.offStop();
            }), p.Instance.isAndroid && (this.goBtn.on(Laya.Event.MOUSE_UP, this, e => {
                e.stopPropagation(), this.goBtn.skin = "game/goAhead.png", this.mCar.stopOil();
            }), this.backBtn.on(Laya.Event.MOUSE_UP, this, e => {
                e.stopPropagation(), this.backBtn.skin = "game/goBack.png", this.mCar.stopOil();
            }), this.leftBtn.on(Laya.Event.MOUSE_UP, this, () => {
                this.mCar.offTurnLeft(), this.leftBtn.alpha = 1;
            }), this.rightBtn.on(Laya.Event.MOUSE_UP, this, () => {
                this.mCar.offTurnRight(), this.rightBtn.alpha = 1;
            })), this.speedBtn.on(Laya.Event.CLICK, this, e => {
                e.stopPropagation(), w.IsSpeed && (w.IsSpeed = !1, this.mCar.giveSpeed());
            });
        }
        initView() {
            this.OperatingBox.visible = !1, this.onGame();
        }
        screenAdaptation() {}
        onEnable() {}
        onStart() {
            this.closeFun && this.closeFun();
        }
        setSkyBox(e, t) {
            let i = "res/Box2/skyMaterial.lmat";
            if (w.SkyIsLoad) {
                let e = [ "res/SkyBox/Box1/skyMaterial.lmat", "res/Box2/skyMaterial.lmat", "res/SkyBox/Box4/skyMaterial.lmat" ];
                i = e[Math.floor(Math.random() * e.length)];
            }
            Laya.Material.load(i, Laya.Handler.create(this, function(i) {
                t.clearFlag = Laya.CameraClearFlags.Sky;
                var a = e.skyRenderer;
                a.mesh = Laya.SkyBox.instance, a.material = i;
            }));
        }
        onFog(e) {}
        onKeyDown(e) {
            switch (e.keyCode) {
              case 32:
                this.mCar.stop();
                break;

              case 87:
                this.mCar.goAhead();
                break;

              case 83:
                this.mCar.goBack();
                break;

              case 65:
                this.mCar.turnLeft();
                break;

              case 68:
                this.mCar.turnRight();
                break;
              case 16:
                e.stopPropagation(), w.IsSpeed && (w.IsSpeed = !1, this.mCar.giveSpeed());
            }
        }
        onKeyUp(e) {
            switch (e.keyCode) {
              case 87:
              case 83:
                this.mCar.stopOil();
                break;

              case 65:
                this.mCar.offTurnLeft();
                break;

              case 68:
                this.mCar.offTurnRight();
            }
        }
        loadCar() {
            if (this.Car.destroy(), this.Car = this.scene3D.addChild(de.Car.clone()), this.mCar = this.Car.addComponent(Ie), 
            this.mCar.getSceneSp(this.TrailBox), this.Car.addChild(this.camera), this.resuInfo && w.LevelData[w.NowLevel - 1].resu) {
                let e = w.LevelData[w.NowLevel - 1].resu[this.resuInfo - 1];
                this.Car.transform.localPosition = new Laya.Vector3(e.pos.x, e.pos.y, e.pos.z), 
                this.Car.transform.localRotationEuler = new Laya.Vector3(e.rot.x, e.rot.y, e.rot.z);
            }
            this.camera.transform.localPosition = this.cameraPosition, this.camera.transform.localRotationEuler = this.cameraRotation, 
            this.OperatingBox.visible = !0, he.Instance.init();
        }
        loadLevel(e) {
            if (w.init(), this.setSkyBox(this.scene3D, this.camera), this.levelPrefab = de.Levels.get("Level" + e).clone(), 
            this.sceneBox.addChild(this.levelPrefab), w.LevelData[w.NowLevel - 1].resu) {
                let e = w.LevelData[w.NowLevel - 1];
                for (let t = 0; t < e.resu.length; t++) {
                    let i = de.ruseMd.clone();
                    this.levelPrefab.addChild(i), i.transform.localPosition = new Laya.Vector3(e.resu[t].pos.x, e.resu[t].pos.y - 1, e.resu[t].pos.z), 
                    i.addComponent(Ae);
                }
            }
            this.initFlyRoad(), this.Car = this.scene3D.addChild(de.Car.clone()), this.mCar = this.Car.addComponent(Ie), 
            this.mCar.getSceneSp(this.TrailBox), this.camera.transform.position = this.cameraPosition, 
            this.camera.transform.rotationEuler = this.cameraRotation, this.Car.addChild(this.camera), 
            this.OperatingBox.visible = !0, he.Instance.init(), w.StartGame = !0, this.OperatingBox.visible = !0, 
            this.resuInfo = 0;
        }
        loadGroud(e) {
            w.init(), this.levelPrefab = de.Levels.get("Level" + e).clone(), this.sceneBox.addChild(this.levelPrefab), 
            this.setSkyBox(this.scene3D, this.camera);
        }
        initFlyRoad() {
            for (let e = 0; e < this.levelPrefab.numChildren; e++) {
                let t = this.levelPrefab.getChildAt(e).name;
                if ("SpeedFly" == t.substring(0, 8)) this.levelPrefab.getChildAt(e).addComponent(Se); else if ("AxeBox" == t.substring(0, 6)) {
                    let t = this.levelPrefab.getChildAt(e);
                    if (!t) return;
                    t.addComponent(Le).init();
                } else if ("SawBox" == t.substring(0, 6)) {
                    let t = this.levelPrefab.getChildAt(e);
                    if (!t) return;
                    t.addComponent(fe).init();
                } else if ("DoorBo" == t.substring(0, 6)) {
                    let t = this.levelPrefab.getChildAt(e);
                    if (!t) return;
                    t.addComponent(be).init();
                }
            }
        }
        destroyLevel() {
            this.resuInfo = 0, this.TrailBox.destroyChildren(), this.levelPrefab && this.levelPrefab.destroy(), 
            this.Car && this.Car.destroy();
        }
        destroyScene() {
            this.scene3D && (this.resuInfo = 0, Laya.timer.clearAll(this), this.scene3D.removeChildren(), 
            this.scene3D.destroyChildren(), this.scene3D.destroy(), this.scene3D = null, Laya.Resource.destroyUnusedResources());
        }
        onCamera() {
            let e = new Laya.Vector3(this.camera.transform.position.x, this.camera.transform.position.y, this.camera.transform.position.z), t = new Laya.Vector3(this.camera.transform.rotationEuler.x, this.camera.transform.rotationEuler.y, this.camera.transform.rotationEuler.z);
            this.scene3D.addChild(this.camera), this.camera.transform.position = e, this.camera.transform.rotationEuler = t;
        }
        flyCamera(e) {
            if (e) {
                let e = new Laya.Vector3(this.camera.transform.position.x, this.camera.transform.position.y + 15, this.camera.transform.position.z - 18), t = new Laya.Vector3(this.camera.transform.rotationEuler.x, this.camera.transform.rotationEuler.y, this.camera.transform.rotationEuler.z);
                this.scene3D.addChild(this.camera), this.camera.transform.position = e, this.camera.transform.rotationEuler = t;
            } else this.Car.addChild(this.camera), this.camera.transform.localPosition = this.cameraPosition, 
            this.camera.transform.localRotationEuler = this.cameraRotation;
        }
        flyCarCamera(e) {
            e ? (this.carTween && Laya.Tween.clear(this.carTween), this.carTween = Laya.Tween.to(this.camera.transform, {
                localPositionX: this.cameraFlyPosition.x,
                localPositionY: this.cameraFlyPosition.y,
                localPositionZ: this.cameraFlyPosition.z
            }, 500)) : (this.carTween && Laya.Tween.clear(this.carTween), this.carTween = Laya.Tween.to(this.camera.transform, {
                localPositionX: this.cameraPosition.x,
                localPositionY: this.cameraPosition.y,
                localPositionZ: this.cameraPosition.z
            }, 500));
        }
        fireCamera() {
            Laya.Tween.to(this.camera.transform, {
                localPositionX: this.cameraFirePosition.x,
                localPositionY: this.cameraFirePosition.y,
                localPositionZ: this.cameraFirePosition.z
            }, 500, null, Laya.Handler.create(this, () => {
                let e = new Laya.Vector3(this.camera.transform.position.x, this.camera.transform.position.y, this.camera.transform.position.z), t = new Laya.Vector3(this.camera.transform.rotationEuler.x, this.camera.transform.rotationEuler.y, this.camera.transform.rotationEuler.z);
                this.scene3D.addChild(this.camera), this.camera.transform.position = e, this.camera.transform.rotationEuler = t;
            }));
        }
        runCamera(e) {
            this.runPath != e && (console.log("切换摄像头"), e ? (this.runPath = !0, this.carTween && Laya.Tween.clear(this.carTween), 
            this.carTween = Laya.Tween.to(this.camera.transform, {
                localPositionX: this.cameraPosition.x,
                localPositionY: this.cameraPosition.y,
                localPositionZ: this.cameraPosition.z,
                localRotationEulerY: this.cameraRotation.y
            }, 200)) : (this.runPath = !1, this.carTween && Laya.Tween.clear(this.carTween), 
            this.carTween = Laya.Tween.to(this.camera.transform, {
                localPositionX: this.cameraEndPosition.x,
                localPositionY: this.cameraEndPosition.y,
                localPositionZ: this.cameraEndPosition.z,
                localRotationEulerY: this.cameraEndRotation.y
            }, 200)));
        }
        onPass() {
            p.Instance.longVibrate();
            let e = de.Part.Pass.clone(), t = this.levelPrefab.getChildByName("endPrefab").getChildByName("PartVct").transform.position;
            this.levelPrefab.addChild(e), e.transform.position = t, this.onCamera(), Laya.timer.once(1e3, this, () => {
                this.mCar.stop();
            }), this.OperatingBox.visible = !1, ve.Instance.gameEnd(!0);
        }
        onFail() {
            p.Instance.longVibrate(), this.OperatingBox.visible = !1, Laya.timer.once(1500, this, () => {
                this.fireCamera(), ve.Instance.gameEnd(!1);
            });
        }
        onLoad(e) {
            this.onFog(e), this.scene3D = e, this.sceneBox = this.scene3D.getChildByName("SceneBox"), 
            this.TrailBox = this.scene3D.getChildByName("TrailBox"), this.owner.addChild(e), 
            this.camera = this.scene3D.getChildByName("Main Camera"), this.camera.enableHDR = !1, 
            this.isLoad = !0, u.Instance.emit(a.LEVELEND), this.onPerating();
        }
        onGame() {
            Laya.loader.create("res/LayaScene_Main/Conventional/Main.ls", Laya.Handler.create(this, this.onLoad), Laya.Handler.create(this, e => {}));
        }
        onUpdate() {
            w.StartGame;
        }
    }
    class ve {
        constructor() {}
        static get Instance() {
            return this._instance || (this._instance = new ve()), this._instance;
        }
        gamePause() {}
        gameRestart() {}
        gameRelive() {
            Ce.Instance.loadCar(), u.Instance.emit(a.GAMESTART), w.StartGame = !0;
        }
        gameStart() {

                ve.Instance.onstart(); 

        }


        onstart() {
            // Ce.Instance.isLoad ? ve.Instance.start() : u.Instance.on(a.LEVELEND, () => {
            //     ve.Instance.start();
            // }, Ce.Instance), p.Instance.isQq && Laya.timer.once(500, this, () => {
            //     k.show();
            // });
console.log("isload",Ce.Instance.isLoad)
console.log("levelend",a.LEVELEND)

            if(Ce.Instance.isLoad)
            {
                ve.Instance.start()
            }
            else
            {
                u.Instance.on(a.LEVELEND, () => {
                    ve.Instance.start();
                }, Ce.Instance), 



                
                p.Instance.isQq && Laya.timer.once(500, this, () => {
                    k.show();
                });
            }
            

        }

        start() {
            ce.Instace.startSound(), 
            w.NowLevel > w.LevelData.length && (w.NowLevel = 1), 
            Ce.Instance.destroyLevel(), 
            Ce.Instance.loadLevel(w.NowLevel), b.startGame(), 
            w.RetrunHomeNum = 0, w.StartGame = !0, 
            u.Instance.removeListener(a.LEVELEND, Ce.Instance),
             u.Instance.emit(a.GAMESTART), 
            f.onStart(), 
            p.Instance.isTt && q.start(),
             g.setNumber(i.GAMESTARTDATE, w.DataTime);
        }
    




        gameEnd(e) {
            p.Instance.isQq && k.hide(), p.Instance.isOppo && Laya.LocalStorage.getItem("ZMTB"), 
            ce.Instace.offAll(), p.Instance.isTt && q.stop(), w.IsResu = 0, w.StartGame = !1, 
            b.endGame(w.NowLevel + ""), w.GetSkinSy && (w.GetSkin = 0, w.GetSkinSy = !1), e ? (u.Instance.emit(a.GAMEEND), 
            f.onEnd(!0), I.play("pass"), this.storeUserInfo(), w.PassNum++, Laya.timer.once(1500, this, () => {
                p.Instance.isWx && t.IsMisLead ? 2 == w.NowLevel ? Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0, () => {
                    Laya.Dialog.open(L.EXPROTBOX2_DIALOG, !0, () => {
                        Laya.Dialog.open(L.PASS_DIALOG, !0);
                    });
                }) : 3 == w.NowLevel ? Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0, () => {
                    Laya.Dialog.open(L.EXPROTBOX2_DIALOG, !0, () => {
                        Laya.Dialog.open(L.PASSCOIN_DIALOG, !0);
                    });
                }) : Laya.Dialog.open(L.EXPROTBOX3_DIALOG, !0, () => {
                    Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0, () => {
                        Laya.Dialog.open(L.EXPROTBOX2_DIALOG, !0, () => {
                            Laya.Dialog.open(L.BX_DIALOG, !0, () => {
                                Laya.Dialog.open(L.PASSCOIN_DIALOG, !0);
                            });
                        });
                    });
                }) : p.Instance.isBd && w.NowLevel % 2 == 1 ? Laya.Dialog.open(L.BX2_DIALOG, !0, () => {
                    Laya.Dialog.open(L.PASSCOIN_DIALOG, !0);
                }) : Laya.Dialog.open(L.PASSCOIN_DIALOG, !0);
            })) : (u.Instance.emit(a.GAMEEND, [ 1 ]), f.onEnd(!1), I.play("fail"), Laya.timer.once(1e3, this, () => {
                Laya.Dialog.open(L.RESU_DIALOG, !0);
            }));
        }
        storeUserInfo() {
            let e = g.getNumber(i.USERLEVEL);
            w.NowLevel += 1, e < w.NowLevel && (w.UserLevel = w.NowLevel, g.setNumber(i.USERLEVEL, w.NowLevel), 
            p.Instance.isWx);
        }
        retrunHome() {
            Ce.Instance && Ce.Instance.destroyScene(), Laya.Dialog.closeAll(), Laya.View.open(L.HOME_SCENE, !0);
        }
    }
    class xe extends se {
        constructor() {
            super(), this.handNum = 0, this.dataList = [];
        }
        initData() {
            ae.Instance.hideBanner(), _.hide();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.list = this.owner.getChildByName("list");
        }
        initView() {
            if (w.DcLoad) if (v.GameList) {
                for (let e = 0; e < v.GameList.length; e++) this.dataList.push(v.GameList[e]);
                this.onSetList(), this.onTween(), u.Instance.removeListener(a.DCLOADEND, this);
            } else this.dataList = []; else u.Instance.on(a.DCLOADEND, this.initData, this);
        }
        screenAdaptation() {}
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
            "click" == e.type && v.leadOut(this.dataList[t], "e_17");
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
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnSj":
                v.leadOut(this.dataList[Math.floor(Math.random() * this.dataList.length)], "e_15");
                break;

              case "btnRetrun":
                C.trackEvent("e_16"), this.closeFun ? (this.owner.close(), this.closeFun()) : ve.Instance.retrunHome();
            }
        }
        onDisable() {
            super.onDisable();
        }
    }
    class Be extends se {
        constructor() {
            super(), this.handNum = 0, this.dataList = [];
        }
        initData() {
            ae.Instance.hideBanner(), _.hide();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.list = this.owner.getChildByName("list");
        }
        initView() {
            if (w.DcLoad) if (v.GameList) {
                for (let e = 0; e < v.GameList.length; e++) this.dataList.push(v.GameList[e]);
                this.onSetList(), this.onTween(), u.Instance.removeListener(a.DCLOADEND, this);
            } else this.dataList = []; else u.Instance.on(a.DCLOADEND, this.initData, this);
        }
        screenAdaptation() {}
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
            "click" == e.type && v.leadOut(this.dataList[t], "e_20");
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
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnSj":
                v.leadOut(this.dataList[Math.floor(Math.random() * this.dataList.length)], "e_18");
                break;

              case "btnRetrun":
                C.trackEvent("e_19"), this.closeFun ? (this.owner.close(), this.closeFun()) : ve.Instance.retrunHome();
            }
        }
        onDisable() {
            super.onDisable();
        }
    }
    class Ne extends se {
        constructor() {
            super(), this.handNum = 0, this.dataList = [], this.isShowStart = !1, this.isBtnOk = !1;
        }
        initData() {
            ae.Instance.hideBanner(), _.hide(), this.showBannerDcFail();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.list = this.owner.getChildByName("list");
        }
        initView() {
            if (w.DcLoad) if (v.GameList) {
                for (let e = 0; e < v.GameList.length; e++) this.dataList.push(v.GameList[e]);
                this.onSetList(), this.onTween(), u.Instance.removeListener(a.DCLOADEND, this);
            } else this.dataList = []; else u.Instance.on(a.DCLOADEND, this.initData, this);
        }
        screenAdaptation() {}
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
            "click" == e.type && v.leadOut(this.dataList[t], "e_14", !1);
        }
        onTween() {
            this.list.array = this.dataList;
            let e = this.list.scrollBar.max / 4;
            Laya.timer.loop(16, null, () => {
                this.list.scrollBar.value += 1, this.list.scrollBar.value >= this.list.scrollBar.max - e && (this.dataList = this.dataList.concat(this.dataList), 
                this.list.updateArray(this.dataList));
            });
        }
        showBanner() {
            this.isShowStart || (this.isShowStart = !0, Laya.timer.once(200, this, () => {
                this.showBottomBanner(), Laya.timer.once(2e3, this, () => {
                    this.isBtnOk = !0, ae.Instance.hideBanner();
                });
            }));
        }
        showBannerDcFail() {
            t.IsMisLead && w.isDcFail && (this.showBottomBanner(), Laya.timer.once(2e3, this, () => {
                this.isBtnOk = !0, ae.Instance.hideBanner();
            }));
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnSj":
                v.leadOut(this.dataList[Math.floor(Math.random() * this.dataList.length)]);
                break;

              case "btnNext":
                if (w.isDcFail) {
                    if (t.IsMisLead && !this.isBtnOk) return;
                } else if (t.IsMisLead && !this.isBtnOk) return void this.showBanner();
                C.trackEvent("e_13"), this.closeFun ? (this.owner.close(), this.closeFun()) : ve.Instance.retrunHome();
            }
        }
        onDisable() {
            w.isDcFail = !1, super.onDisable();
        }
    }
    class De extends se {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {
            p.Instance.isVivo && P.showNative();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.goldBox = this.owner.getChildByName("goldBox"), 
            this.btnMore = this.goldBox.getChildByName("btnMore");
        }
        initView() {
            if (this.onCasualClick(), p.Instance.isWx || p.Instance.isQq ? this.btnMore.visible = !0 : this.btnMore.visible = !1, 
            p.Instance.isOppo && (this.btnMore.visible = !1, Z.NativeLoad)) {
                this.btnMore.visible = !0, this.btnMore.getChildByName("txt").text = "查看广告";
            }
            if (p.Instance.isTt) {
                this.btnMore.visible = !0, this.btnMore.getChildByName("txt").text = "录屏分享";
            }
          

        }
        
        screenAdaptation() {}
        onCasualClick() {
            t.IsMisLead ? (this.btnNext.bottom = e.isIphoneX ? 120 : 70, Laya.timer.once(t.bannerTime, this, () => {
                p.Instance.isOppo || this.showBottomBanner();
            }), Laya.timer.once(t.bannerTime + 500, this, () => {
                Laya.Tween.to(this.btnNext, {
                    bottom: e.isIphoneX ? 340 : 288
                }, 200);
            })) : (p.Instance.isOppo || this.showBottomBanner(), this.btnNext.bottom = e.isIphoneX ? 340 : 288);
        }
        onUpdate() {}
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnNext":
                C.trackEvent("e_26"), this.owner.close(), ve.Instance.gameStart();
                he.Instance.offSpeed();
                break;

              case "btnMore":
                C.trackEvent("e_25"), p.Instance.isWx ? Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0) : p.Instance.isQq ? E.show({}) : p.Instance.isOppo ? Z.NativeLoad && Z.ReportAdClick() : p.Instance.isTt && (this.isShar ? Y.share({
                    channel: "video",
                    videoPath: q.videoPath,
                    success: () => {
                        l.msg("分享成功！"), this.isShar = !1;
                    }
                }) : l.msg("已经分享过了，下一局再分享哦"));

                break;

              case "btnRetrun":
                platform.getInstance().showInterstitial((()=>{
                
                    C.trackEvent("e_27"), ve.Instance.retrunHome();
                    he.Instance.offSpeed();    
               
                }));

            }
        }
    }
    class _e extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            if (p.Instance.isOppo && Z.NativeLoad) {
                Z.ReportAdShow(), this.owner.zOrder = 9999, this.owner.visible = !0, this.img = this.owner.getChildByName("img"), 
                this.name = this.owner.getChildByName("name");
                let e = "native/ysgg.png";
                Z.nativeList[0].imgUrlList && Z.nativeList[0].imgUrlList.length > 0 ? e = Z.nativeList[0].imgUrlList[0] : Z.nativeList[0].icon && Z.nativeList[0].icon.length > 0 && (e = Z.nativeList[0].icon), 
                this.img.skin = e, this.name.text = Z.nativeList[0].desc;
            } else this.owner.visible = !1;
        }
        onClick() {
            Z.ReportAdClick();
        }
        onDisable() {
            Z.RestNativeInit();
        }
    }
    class Ve extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            this.txt = this.owner.getChildByName("txt"), this.nowCoin = w.Coin, isNaN(w.Coin) && (w.Coin = 980, 
            g.setNumber(i.COIN, 980)), this.txt.text = B.Instance.setGoldCoin(w.Coin), this.setInfo(), 
            u.Instance.on(a.JNINFO, this.setInfo, this);
        }
        setInfo() {
            u.Instance.removeListener(a.JNINFO, this);
        }
        onUpdate() {
            w.Coin != this.nowCoin && (this.txt.text = B.Instance.setGoldCoin(w.Coin), this.nowCoin = w.Coin);
        }
        onClick() {}
        onDisable() {}
    }
    class Te extends se {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {}
        findView() {}
        initView() {}
        screenAdaptation() {}
        onCasualClick() {}
        onUpdate() {}
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnNext":
                this.owner.close(), ve.Instance.gameStart();
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
                    e = v.GameList.length;
                    for (let t = 0; t < e; t++) this.dataList.push(v.GameList[t]);
                } else if (this.isFront) {
                    e = Math.floor(v.GameList.length / 2);
                    for (let t = 0; t < e; t++) this.dataList.push(v.GameList[t]);
                } else {
                    e = v.GameList.length - Math.floor(v.GameList.length / 2);
                    for (let e = Math.floor(v.GameList.length / 2); e < v.GameList.length; e++) this.dataList.push(v.GameList[e]);
                }
                this.dataList.length < 1 ? this.owner.visible = !1 : this.owner.visible = !0, this.setExprot(), 
                u.Instance.removeListener(a.DCLOADEND, this);
            } else u.Instance.on(a.DCLOADEND, this.initData, this);
        }
        setExprot() {
            if (this.dataList.length < 1) return !1;
            this.index++, this.index >= this.dataList.length && (this.index = 0), this.img.skin = this.dataList[this.index].img, 
            Laya.timer.once(2e3, this, this.setExprot);
        }
        onEnable() {
            p.Instance.isWx || p.Instance.isOppo || p.Instance.isWeb ? (this.img = this.owner.getChildByName("img"), 
            this.initData()) : this.owner.visible = !1;
        }
        onClick() {
            w.DcLoad && v.leadOut(this.dataList[this.index], this.eventId);
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class Re extends se {
        constructor() {
            super(), this.btnSrc = [], this.isOpenGG = !0;
        }
        initData() {
            this.isOpenGG = !0, P.ReportAdShow(), this.btnSrc = [ "native/btn1.png", "native/btn2.png", "native/btn3.png", "native/btn4.png", "native/btn5.png" ];
        }
        findView() {
            this.box = this.owner.getChildByName("box"), this.pic = this.box.getChildByName("pic"), 
            this.name = this.box.getChildByName("name"), this.btnClose = this.box.getChildByName("btnClose"), 
            this.btnCloseTxt = this.btnClose.getChildByName("txt"), this.ggClose = this.box.getChildByName("ggClose");
        }
        initView() {
            this.name.text = P.nativeList[0].title, this.pic.skin = P.nativeList[0].imgUrlList[0], 
            this.btnClose.skin = this.btnSrc[Math.floor(Math.random() * this.btnSrc.length)], 
            this.btnCloseTxt.text = "", t.IsMisLead ? this.ggClose.visible = !0 : Laya.timer.once(2e3, this, () => {
                this.ggClose.visible = !0;
            });
        }
        screenAdaptation() {}
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
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
    class ke extends se {
        constructor() {
            super(), this.btnSrc = [], this.isOpenGG = !0;
        }
        initData() {
            this.isOpenGG = !0, Z.ReportAdShow(), this.btnSrc = [ "native/btn1.png", "native/btn2.png", "native/btn3.png", "native/btn4.png", "native/btn5.png" ];
        }
        findView() {
            this.box = this.owner.getChildByName("box"), this.pic = this.box.getChildByName("pic"), 
            this.name = this.box.getChildByName("name"), this.btnClose = this.box.getChildByName("btnClose"), 
            this.btnCloseTxt = this.btnClose.getChildByName("txt"), this.ggClose = this.box.getChildByName("ggClose");
        }
        initView() {
            this.name.text = Z.nativeList[0].title;
            let e = "native/ysgg.png";
            Z.nativeList[0].imgUrlList && Z.nativeList[0].imgUrlList.length > 0 ? e = Z.nativeList[0].imgUrlList[0] : Z.nativeList[0].icon && Z.nativeList[0].icon.length > 0 && (e = Z.nativeList[0].icon), 
            this.pic.skin = e, this.btnClose.skin = this.btnSrc[Math.floor(Math.random() * this.btnSrc.length)], 
            this.ggClose.visible = !0;
        }
        screenAdaptation() {}
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "ggClose":
                this.owner.close(), this.closeFun && this.closeFun();
                break;

              case "pic":
              case "btnClose":
              case "name":
                Z.ReportAdClick(), this.owner.close(), this.closeFun && this.closeFun();
            }
        }
        onDisable() {
            Z.RestNativeInit(), Laya.timer.clearAll(this);
        }
    }
    class Me extends se {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {
            p.Instance.isVivo && P.showNative();
        }
        findView() {
            this.goldBox = this.owner.getChildByName("goldBox"), this.moveBox = this.owner.getChildByName("moveBox"), 
            this.check = this.moveBox.getChildByName("check"), this.goldTxt = this.goldBox.getChildByName("goldTxt");
        }
        initView() {
            // t.IsMisLead ? this.check.selected = !0 : this.check.selected = !1, this.onCasualClick(), 
            // p.Instance.isQq && (this.check.visible = !1, this.check.selected = !1), p.Instance.isVivo && w.NowLevel > 4 && Math.random() < .5 && (this.check.selected = !0), 
            // this.check.selected ? this.goldTxt.text = "+800" : this.goldTxt.text = "+200", this.check.on(Laya.Event.CLICK, this, () => {
            //     this.check.selected ? this.goldTxt.text = "+800" : this.goldTxt.text = "+200";
            // });
            this.addGameList();
        }
        screenAdaptation() {}
        onCasualClick() {
            // t.IsMisLead ? (this.moveBox.bottom = e.isIphoneX ? 120 : 70, Laya.timer.once(t.bannerTime, this, () => {
            //     p.Instance.isOppo || this.showBottomBanner();
            // }), Laya.timer.once(t.bannerTime + 500, this, () => {
            //     Laya.Tween.to(this.moveBox, {
            //         bottom: e.isIphoneX ? 340 : 288
            //     }, 200);
            // })) : (p.Instance.isOppo || this.showBottomBanner(), this.moveBox.bottom = e.isIphoneX ? 340 : 288), 
            // p.Instance.isBd && (w.NowLevel < 4 ? this.check.selected = !1 : this.check.selected = !0);
        }
        addGameList(){
            var json = {
                "x":15,
                "type":"List",
                "searchKey":"List,appList",
                "props":{
                    //"y":Laya.stage.height - 180,
                    "bottom":10,
                    "x":Laya.stage.width/2,
                    "width":620,
                    "height":160,
                    "repeatX":3,
                    "repeatY":1,
                    "spaceX":5,
                    "anchorX":0.5,
                    "name":"appList",
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
        onNext(e) {
            w.getCoin(e), l.msg("Add" + e + "Gold"), this.owner.close(), p.Instance.isBd ? ve.Instance.gameStart() : Laya.Dialog.open(L.PASS_DIALOG, !0);
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnVedio":
                platform.getInstance().showReward(
                    ()=>{
                        //成功  发放奖励
                        C.trackEvent("e_10"), this.onNext(800);
                        this.removeGameList();
                        
                    })
                //     ae.Instance.showVideo({
                //     success: () => {
                //         C.trackEvent("e_10"), this.onNext(800);
                //     }
                // }) 

                    break;

                case"btnNext":
                C.trackEvent("e_10"), this.onNext(200);
                this.removeGameList();
            }
        }
    }
    class Oe extends se {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {
            p.Instance.isVivo && P.showNative();
        }
        findView() {
            this.btnNext = this.owner.getChildByName("btnNext"), this.goldBox = this.owner.getChildByName("goldBox"), 
            this.btnMore = this.goldBox.getChildByName("btnMore");
        }
        initView() {
            if (this.onCasualClick(), p.Instance.isWx || p.Instance.isQq ? this.btnMore.visible = !0 : this.btnMore.visible = !1, 
            p.Instance.isOppo && (this.btnMore.visible = !1, Z.NativeLoad)) {
                this.btnMore.visible = !0, this.btnMore.getChildByName("txt").text = "查看广告";
            }
            if (p.Instance.isTt) {
                this.btnMore.visible = !0, this.btnMore.getChildByName("txt").text = "录屏分享";
            }
            if(w.NowLevel >= 11)
            {
                this.btnNext.visible=false;
                w.NowLevel = 1;
                he.Instance.offSpeed();
            }
        }
        screenAdaptation() {}
        onCasualClick() {
            t.IsMisLead ? (this.btnNext.bottom = e.isIphoneX ? 120 : 70, Laya.timer.once(t.bannerTime, this, () => {
                p.Instance.isOppo || this.showBottomBanner();
            }), Laya.timer.once(t.bannerTime + 500, this, () => {
                Laya.Tween.to(this.btnNext, {
                    bottom: e.isIphoneX ? 340 : 288
                }, 200);
            })) : (p.Instance.isOppo || this.showBottomBanner(), this.btnNext.bottom = e.isIphoneX ? 340 : 288);
        }
        onUpdate() {}
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnNext":
                platform.getInstance().showInterstitial((()=>{
                
                    this.owner.close(), C.trackEvent("e_7"), ve.Instance.gameStart();
                    he.Instance.offSpeed();        
               
                }));

                break;
              case "btnMore":
                C.trackEvent("e_6"), p.Instance.isWx ? Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0) : p.Instance.isQq ? E.show({}) : p.Instance.isTt && (this.isShar ? Y.share({
                    channel: "video",
                    videoPath: q.videoPath,
                    success: () => {
                        l.msg("分享成功！"), this.isShar = !1;
                    }
                }) : l.msg("已经分享过了，下一局再分享哦"));
                break;

              case "btnRetrun":
                C.trackEvent("e_9"), ve.Instance.retrunHome();
            }
        }
    }
    class Ue extends se {
        constructor() {
            super(), this.isShar = !0;
        }
        initData() {}
        findView() {
            this.goldBox = this.owner.getChildByName("goldBox"), this.btnNext = this.owner.getChildByName("btnNext");
        }
        initView() {
            if (this.onCasualClick(), p.Instance.isBd) {
                this.goldBox.getChildByName("btnResu").getChildByName("txt").text = "原地复活", this.btnNext.visible = !1, 
                Laya.timer.once(2e3, this, () => {
                    this.btnNext.visible = !0;
                });
            }
            this.addGameList();

        }
        addGameList(){
            var json = {
                "x":15,
                "type":"List",
                "searchKey":"List,appList",
                "props":{
                    //"y":Laya.stage.height - 180,
                    "bottom":10,
                    "x":Laya.stage.width/2,
                    "width":620,
                    "height":160,
                    "repeatX":3,
                    "repeatY":1,
                    "spaceX":5,
                    "anchorX":0.5,
                    "name":"appList",
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




        
        screenAdaptation() {}
        onCasualClick() {
            t.IsMisLead ? (this.btnNext.bottom = e.isIphoneX ? 120 : 70, Laya.timer.once(t.bannerTime, this, () => {
                p.Instance.isOppo || this.showBottomBanner();
            }), Laya.timer.once(t.bannerTime + 500, this, () => {
                Laya.Tween.to(this.btnNext, {
                    bottom: e.isIphoneX ? 340 : 288
                }, 200);
            })) : (p.Instance.isOppo || this.showBottomBanner(), this.btnNext.bottom = e.isIphoneX ? 340 : 288);
        }
        onUpdate() {}
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnNext":
                C.trackEvent("e_23"), p.Instance.isWx && t.IsMisLead ? Laya.Dialog.open(L.EXPROTBOX3_DIALOG, !0, () => {
                    Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0, () => {
                        Laya.Dialog.open(L.EXPROTBOX2_DIALOG, !0, () => {
                            Laya.Dialog.open(L.FAIL_DIALOG, !0);
                        });
                    });
                    this.removeGameList();
                }) : (this.owner.close(), Laya.Dialog.open(L.FAIL_DIALOG, !0));this.removeGameList();

                break;

              case "btnJump":
                if(w.NowLevel>=10)
                {
                    l.msg("This is the last level !");
                }
                
                else
                {
                platform.getInstance().showReward(
                    ()=>{
                        //成功  发放奖励


                            w.NowLevel = w.NowLevel+1;
                            this.owner.close(), C.trackEvent("e_7"), ve.Instance.gameStart();
                            this.removeGameList();
                            he.Instance.offSpeed();
 
                    })
                }
                // ae.Instance.showVideo({
                //     success: () => {
                //         C.trackEvent("e_21"), this.owner.close(), ve.Instance.gameEnd(!0);
                //     }
                // });
                break;

              case "btnResu":
                platform.getInstance().showReward(
                    ()=>{
                        //成功  发放奖励
                        C.trackEvent("e_22"), this.owner.close(), ve.Instance.gameRelive();
                        this.removeGameList();
                        he.Instance.offSpeed();
                    })
                    // ()=>{
                    //     //失败 不给奖励
                    // })
                // ae.Instance.showVideo({
                //     success: () => {
                //         C.trackEvent("e_22"), this.owner.close(), ve.Instance.gameRelive();
                //     }
                // });
            }
        }
    }
    class Pe extends Laya.Scene {
        openedCallBack(e) {
            this.opened_call_back = e;
        }
        onOpened(e) {
            console.log("BaseSceneRt----------------onOpened param=", e), this.opened_call_back && this.opened_call_back(e);
        }
        onAwake() {
            this.width = Laya.stage.width, this.height = Laya.stage.height, this.pos(0, 0), 
            console.log("屏幕", Laya.stage.width, Laya.Browser.width, Laya.Browser.clientWidth), 
            p.Instance.isWx && t.IsMisLead && w.isScene && this.name;
        }
    }
    class We extends Laya.Script {
        constructor() {
            super(), this.isSwitch = !1;
        }
        onEnable() {
            this.maxAngle = w.FxpAngle, this.fxp = this.owner.getChildByName("fxp"), this.init();
        }
        init() {
            this.firstPoin = new Laya.Point(), this._point = new Laya.Point(), this.ownerP = B.Instance.stagePoin(this.fxp);
        }
        onMouseDown() {
            this.firstPoin.setTo(Laya.stage.mouseX, Laya.stage.mouseY), this.isSwitch = !0, 
            this.offFxpToNormal();
        }
        onMouseMove() {
            this.isSwitch && (this._point.setTo(Laya.stage.mouseX, Laya.stage.mouseY), this.onFxpRotation(this.getAngle()));
        }
        onMouseUp() {
            p.Instance.isAndroid && (this.isSwitch = !1, this.onFxpToNormal());
        }
        onMouseOut() {
            console.log("鼠标弹起2"), this.isSwitch = !1, this.onFxpToNormal();
        }
        subtract(e, t) {
            let i = new Laya.Point();
            return i.x = e.x - t.x, i.y = e.y - t.y, i;
        }
        getAngle() {
            let e = 0, t = this.subtract(this.firstPoin, this.ownerP), i = this.subtract(this._point, this.ownerP);
            return e = B.Instance.radianToAngle(Math.atan2(i.y, i.x)) - B.Instance.radianToAngle(Math.atan2(t.y, t.x)), 
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
            this._angle = e, u.Instance.emit(a.FXP, [ this._angle ]);
        }
    }
    class He extends Laya.Script {
        onEnable() {
            this.owner.text = "Level:" + w.NowLevel , u.Instance.on(a.GAMESTART, () => {
                this.owner.text = "Level:" + w.NowLevel;
            }, this);
        }
        onDisable() {
            u.Instance.removeListener(a.GAMESTART, this);
        }
    }
    class Ge extends le {
        constructor() {
            super(), this.skinNum = 0, this.isVideo = !1;
        }
        initData() {
            this.skinNum = w.GetSkin, w.FirstHome || (this.skinNum = this.getCarNum()), p.Instance.isVivo && w.VIVOHome && P.showNative();
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
            this.btnMore = this.owner.getChildByName("btnMore"), ce.Instace.motor();
            this.Lock = this.owner.getChildByName("Lock"),this.btnVideo = this.owner.getChildByName("btnVideo");
        }
        initView() {
            this.Lock.visible = false;
            platform.getInstance().addGameList();
            // platform.getInstance().addLogo();
            p.Instance.isQq && (this.btnMore.visible = !0), this.setData(), this.setSkin(this.skinNum), 
            this.btnLeft.on(Laya.Event.CLICK, this, () => {
                this.skinNum--, this.skinNum < 0 && (this.skinNum = w.SkinData.length - 1), this.setSkin(this.skinNum);
            }), this.btnRight.on(Laya.Event.CLICK, this, () => {
                this.skinNum++, this.skinNum > w.SkinData.length - 1 && (this.skinNum = 0), this.setSkin(this.skinNum);
            }), this.onCheck();
        }
        screenAdaptation() {
            (p.Instance.isWx || p.Instance.isQq) && _.show();
        }
        onCheck() {
            if (g.getBoolean(i.ISNEWUSER, !1)) {
                this.onTl();
                let e = new Date().getDate();
                g.getBoolean(i.ISCHECK, !1) || e == g.getNumber(i.CHECKINDATE, 0) || g.setBoolean(i.ISCHECK, !0);
            } else g.setBoolean(i.ISNEWUSER, !0);
        }
        onTl() {
            p.Instance.isWx && t.IsMisLead && w.HomeTL && (_.hide(), Laya.Dialog.open(L.EXPROTBOX3_DIALOG, !0, () => {
                Laya.Dialog.open(L.EXPROTBOX_DIALOG, !0, () => {
                    Laya.Dialog.open(L.EXPROTBOX2_DIALOG, !0, () => {
                        w.HomeTL = !1, Laya.Dialog.closeAll();
                    });
                });
            }));
        }
        initCar() {
            this.carRig = this.Car.getComponent(Laya.Rigidbody3D), this.Car.getChildByName("Fire").active = !1, 
            this.carRig.isKinematic = !0;
        }
        setData() {
            this.Car = de.Car.clone(), this.initCar(), this.Car.transform.localScale = new Laya.Vector3(.085, .085, .085), 
            n(this.carBox, this.Car, this.owner.width / 2 - 10, this.owner.height / 2 + 170), 
            this.skinS3d = this.carBox.getChildByName("skinS3d");
        }
        setSkin(e) {
            // w.GetSkin = e, w.SkinData[e].have ? (this.isVideo = !1, w.GetSkinSy = !1, this.btnNext.skin = "public/btn_start.png", 
            // this.btnBuy.visible = !1,this.Lock.visible = !1, this.Ani.visible = !0) : 
            // (this.isVideo = !0, w.GetSkinSy = !0, this.btnNext.skin = "public/btn_video.png", this.Ani.visible = !1, this.btnBuy.visible = !0,this.Lock.visible = !0);
            // let t = this.Car.getChildByName("CarShell").getChildByName("CarInsaid_2_2").getChildByName("CarBaseAll_2"), i = this.Car.getChildByName("Decorate");
            // for (let i = 0; i < t.numChildren; i++) ye.Instance.upDateTexture(t.getChildAt(i), w.SkinData[e].textrue);
            // for (let t = 0; t < i.numChildren; t++) ye.Instance.upDateTexture(i.getChildAt(t), w.SkinData[e].textrue);
            w.GetSkin = e
            console.log("skin",w.SkinData)
            if(w.SkinData[e].have == true)
            {
                w.GetSkinSy = false;
                this.btnBuy.visible = false;
                this.btnVideo.visible = false;
                this.Lock.visible = false;


            }
            else
            {
                w.GetSkinSy = true;
                this.btnBuy.visible = true;
                this.btnVideo.visible = true;
                this.Lock.visible = true;
                
            }
            let t = this.Car.getChildByName("CarShell").getChildByName("CarInsaid_2_2").getChildByName("CarBaseAll_2"), i = this.Car.getChildByName("Decorate");
            for (let i = 0; i < t.numChildren; i++) ye.Instance.upDateTexture(t.getChildAt(i), w.SkinData[e].textrue);
            for (let t = 0; t < i.numChildren; t++) ye.Instance.upDateTexture(i.getChildAt(t), w.SkinData[e].textrue);
        }
        gameStart() {
            this.skinS3d.removeChildren(), this.skinS3d.destroyChildren(), this.skinS3d.destroy(), 
            C.trackEvent("e_4"), Laya.Scene.open(L.GAME_SCENE, !0, ve.Instance.gameStart);
        }
        onClick(e) {
            switch (e.stopPropagation(), "btn" === e.target.name.substring(0, 3) && I.play("click"), 
            e.target.name) {
              case "btnMore":
                E.show({});
                break;

              case "CoinBox":
                
                p.Instance.isQq && Laya.Dialog.open(L.BX_DIALOG, !1, () => {});
                break;

              case "btnNext":
                


                    //广告回调,不论成功失败都会进入
                    //恢复音乐
                    //todosomething
                //     w.GetSkinSy ? 
                //     platform.getInstance().showReward(
                //         ()=>{
                //             //成功  发放奖励
                //             platform.getInstance().removeLogo();
                //             platform.getInstance().removeGameList();
                //             this.gameStart();
                //         })
                // //     // ae.Instance.showVideo({
                // //     //     success: () => {
                // //     //         this.gameStart();
                // //     //     }
                // //     // }) 
                //     : 
                if(w.GetSkinSy == false)
                {
                    platform.getInstance().showInterstitial(()=>{
                        platform.getInstance().removeLogo();
                        platform.getInstance().removeGameList();
                        this.gameStart();
                    })
                }
                else
                {
                    w.GetSkin = 0;
                    platform.getInstance().showInterstitial(()=>{
                        platform.getInstance().removeLogo();
                        platform.getInstance().removeGameList();
                        this.gameStart();
                    })
                }


                    
                // })
                break;

              case "btnBuy":


                w.Coin >= 2e3 ? (C.trackEvent("e_5"), w.cutCoin(2e3), w.SkinData[this.skinNum].have = !0, 
                g.setList(i.SKINDATA, w.SkinData), w.GetSkin = this.skinNum, g.setNumber(i.GETSKIN, this.skinNum), 
                this.setSkin(this.skinNum)) : l.msg("Need enough gold！！！");

                break;

              case "btnVideo":
                platform.getInstance().showReward(
                    ()=>{
                        //成功  发放奖励
                        platform.getInstance().removeLogo();
                        platform.getInstance().removeGameList();
                        this.gameStart();
                    })

                
            }
        }
        onDisable() {
            super.onDisable(), w.HomeTL = !0, (p.Instance.isWx || p.Instance.isQq) && _.hide(), 
            w.FirstHome = !1, w.VIVOHome = !1;
        }
    }
    class Fe {
        static SetTl(e, t) {
            if (e) {
                this.TlVal -= t;
                let e = Laya.timer.currTimer;
                g.setNumber(i.TLTIME, e);
            } else this.TlVal += t, this.TlVal > this.TLMax && (this.IsTLCut = !1, Laya.timer.clear(this, this.SetTl));
            this.TlVal < this.TLMax && (this.IsTLCut || (this.IsTLCut = !0, Laya.timer.loop(this.TLCutTime, this, this.SetTl, [ !1, 1 ]))), 
            this.TlVal <= 0 && (this.TlVal = 0), g.setNumber(i.TL, this.TlVal);
        }
        static initTL() {
            this.TlVal = g.getNumber(i.TL, this.TLMax);
            let e = this.TLMax - this.TlVal;
            if (this.TlVal < this.TLMax) {
                let t = (Laya.timer.currTimer - g.getNumber(i.TLTIME, Laya.timer.currTimer)) / this.TLCutTime;
                console.log("体力", t), (t = Math.floor(t)) > e && (t = e), this.SetTl(!1, t);
            }
        }
    }
    Fe.TlVal = 5, Fe.TLMax = 5, Fe.IsTLCut = !1, Fe.TLCutTime = 3e5;
    class Xe extends le {
        constructor() {
            super(), this.assets = [ "res/atlas/comp.atlas", "res/atlas/comp.png", "res/atlas/game.atlas", "res/atlas/game.png", "res/atlas/public.atlas", "res/atlas/public.png", "res/atlas/dc.atlas", "res/atlas/dc.png", "sound/click.mp3" ], 
            this.loadTaskNum = 0;
        }
        onPrompt() {
            platform.getInstance().cargamesstartup("Veteran-Sprint", () => {
                // platform.getInstance().addGameList();
                
                let e = "Loading......";
                this.prompt = this.owner.getChildByName("prompt")
                    Laya.timer.loop(1500, this, () => {
                        this.prompt.text = e[Math.floor(Math.random() * e.length)];
                    });
                        const sideLogo      = new Laya.Image();
                        sideLogo.skin       = "yad.png"
                        sideLogo.zOrder     = 1e3;
                        sideLogo.right    = 0;
                        sideLogo.top        = 10;
                        Laya.stage.addChild(sideLogo);
                        sideLogo.on(Laya.Event.MOUSE_DOWN,sideLogo,()=>{
                           platform.getInstance().navigate("GAME","LOGO");
                        })
            })
        }

        initData() {
            C.trackEvent("e_1"), this.loadTaskNum = 0, w.MaxLevel = w.LevelData.length, Fe.initTL(), 
            w.DcSj2 = g.getBoolean(i.DcSj2, !1), w.DcSj3 = g.getBoolean(i.DcSj3, !1), w.Coin = g.getNumber(i.COIN, 0), 
            w.NowLevel = w.UserLevel = g.getNumber(i.USERLEVEL, 1), w.GetSkin = g.getNumber(i.GETSKIN, 0), 
            g.getList(i.SKINDATA) && (w.SkinData = g.getList(i.SKINDATA)), Laya.loader.load("bg.mp3", new Laya.Handler(this, () => {}));
        }
        findView() {
            this.logo = this.owner.getChildByName("logo"), this.bar = this.owner.getChildByName("progress"), 
            this.onPrompt();
        }
        initView() {
            p.Instance.isQq, this.logo.visible = !1, this.onLoadSubpackage();
        }
        screenAdaptation() {}
        getPrefabs() {
            p.Instance.isWx;
            Laya.loader.create([ "res/LayaScene_Prefabs/Conventional/level1.lh", "res/LayaScene_Prefabs/Conventional/level2.lh", "res/LayaScene_Prefabs/Conventional/level3.lh", "res/LayaScene_Prefabs/Conventional/level4.lh", "res/LayaScene_Prefabs/Conventional/level5.lh", "res/LayaScene_Prefabs/Conventional/level6.lh", "res/LayaScene_Prefabs/Conventional/level7.lh", "res/LayaScene_Prefabs/Conventional/level8.lh", "res/LayaScene_Prefabs/Conventional/level9.lh", "res/LayaScene_Prefabs/Conventional/level10.lh", "res/LayaScene_Prefabs/Conventional/Car.lh", "res/LayaScene_Prefabs/Conventional/rusuMd.lh", "res/LayaScene_Prefabs/Conventional/PassPart.lh" ], Laya.Handler.create(this, () => {
                for (let e = 0; e < w.LevelData.length; e++) de.Levels.set("Level" + (e + 1), Laya.loader.getRes("res/LayaScene_Prefabs/Conventional/level" + (e + 1) + ".lh"));
                de.Car = Laya.loader.getRes("res/LayaScene_Prefabs/Conventional/Car.lh"), de.ruseMd = Laya.loader.getRes("res/LayaScene_Prefabs/Conventional/rusuMd.lh"), 
                de.Part.Pass = Laya.loader.getRes("res/LayaScene_Prefabs/Conventional/PassPart.lh"), 
                C.trackEvent("e_2"), Laya.Scene.open(L.HOME_SCENE), p.Instance.isMz && ee.show();
            }), Laya.Handler.create(this, e => {
                console.log("[进度设置]", e), this.bar.value = e;
            }));
        }
        getLoadTaskNum() {
            this.loadTaskNum++, 2 == this.loadTaskNum && (this.onZyLoad(), console.log("分包资源加载完成" + this.loadTaskNum));
        }
        loadSubpackage1() {
            p.Instance.platform.loadSubpackage({
                name: "prefab",
                success: e => {
                    this.getLoadTaskNum();
                },
                fail: e => {}
            }).onProgressUpdate(e => {
                this.bar.value = e.progress;
            });
        }
        loadSubpackage2() {
            p.Instance.platform.loadSubpackage({
                name: "sound",
                success: e => {
                    this.getLoadTaskNum();
                },
                fail: e => {}
            }).onProgressUpdate(e => {
                this.bar.value = e.progress;
            });
        }
        loadSubpackage3() {
            p.Instance.platform.loadSubpackage({
                name: "skyBox",
                success: e => {
                    w.SkyIsLoad = !0;
                },
                fail: e => {}
            }).onProgressUpdate(e => {
                this.bar.value = e.progress;
            });
        }
        onLoadSubpackage() {
            p.Instance.isWx || p.Instance.isQq || p.Instance.isBd || p.Instance.isVivo ? (this.loadSubpackage1(), 
            this.loadSubpackage2(), this.loadSubpackage3()) : (w.SkyIsLoad = !0, this.onZyLoad());
        }
        onZyLoad() {
            Laya.loader.load(this.assets, new Laya.Handler(this, () => {
                this.getPrefabs();
            }), new Laya.Handler(this, e => {
                console.log("[进度设置]", e), this.bar.value = e;
            }));
        }
        createDrawer() {
            let e;
            Laya.loader.create("Prefabs/exprotDrawerBox.json", Laya.Handler.create(this, function(t) {
                let i = new Laya.Prefab();
                i.json = t, (e = i.create()).bottom = 0, e.left = 0, Laya.stage.addChild(e), e.zOrder = 9999;
            }));
        }
    }
    class ze extends Laya.Script {
        onEnable() {
            if (p.Instance.isOppo && Z.NativeLoad) {
                this.owner.visible = !0, this.owner.zOrder = 9999;
                let e = [ "native/btn_ckgg1.png", "native/btn_ckgg2.png" ];
                this.owner.skin = e[Math.floor(Math.random() * e.length)];
            } else this.owner.visible = !1;
        }
        onClick() {
            p.Instance.isOppo && Z.NativeLoad && Z.ReportAdClick();
        }
        onDisable() {}
    }
    class qe {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("Runtimes/BaseDialogRt.ts", y), e("Activity/Scripts/BxDialog.ts", ne), e("Prefabs/Exprot/DcHandRT.ts", oe), 
            e("Prefabs/Exprot/ExprotBoxV.ts", re), e("Activity/Scripts/ExprotBox2Dialog.ts", xe), 
            e("Activity/Scripts/ExprotBox3Dialog.ts", Be), e("Activity/Scripts/ExprotBoxDialog.ts", Ne), 
            e("Activity/Scripts/FailDialog.ts", De), e("Platform/Oppo/nativeTu.ts", _e), e("Prefabs/CoinControl.ts", Ve), 
            e("Activity/Scripts/HomeDialog.ts", Te), e("Prefabs/Exprot/RandomExprotMg.ts", Ee), 
            e("Activity/Scripts/NativeDialog.ts", Re), e("Activity/Scripts/NativeOppoDialog.ts", ke), 
            e("Activity/Scripts/PassCoinDialog.ts", Me), e("Activity/Scripts/PassDialog.ts", Oe), 
            e("Activity/Scripts/ResulDialog.ts", Ue), e("Runtimes/BaseSceneRt.ts", Pe), e("Game/Script/Scene/GameScene.ts", Ce), 
            e("Game/Script/SpeedBtnMg.ts", he), e("Game/Script/FxpMg.ts", We), e("Game/Script/LevelMg.ts", He), 
            e("Game/Script/TimeMg.ts", me), e("Game/Script/Scene/HomeScene.ts", Ge), e("Game/Script/Scene/LoadingScene.ts", Xe), 
            e("Platform/Oppo/nativeBtn.ts", ze);
        }
    }
    qe.width = 1334, qe.height = 750, qe.scaleMode = "showall", qe.screenMode = "horizontal", 
    qe.alignV = "middle", qe.alignH = "center", qe.startScene = "Scenes/LoadingScene.scene", 
    qe.sceneRoot = "", qe.debug = !1, qe.stat = !1, qe.physicsDebug = !1, qe.exportSceneToJson = !0, 
    qe.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(qe.width, qe.height) : Laya.init(qe.width, qe.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = qe.scaleMode, 
            // Laya.stage.screenMode = qe.screenMode, 
            Laya.stage.alignV = qe.alignV, 
            Laya.stage.alignH = qe.alignH, Laya.URL.exportSceneToJson = qe.exportSceneToJson, 
            (qe.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            qe.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), qe.stat && Laya.Stat.show(), 
            Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            qe.startScene && Laya.Scene.open(qe.startScene);
        }
    }(), class {
        static init() {
            return new Promise(t => {
                UIConfig.popupBgAlpha = .8, UIConfig.closeDialogOnSide = !1, p.Instance.init(), 
                // console.log("平台初始化-完成"), I.init(), console.log("音效初始化-完成"), 
                e.init(), Laya.MouseManager.multiTouchEnabled = !0, 
                ae.Instance.init(), 
                //console.log("广告初始化-完成"), 
                b.login(), 
                //console.log("登录操作"), 
                p.Instance.platformName !== p.Instance.Wx && p.Instance.platformName !== p.Instance.Qq || (f.postAld = !0);
            });
        }
        static initData() {}
        static loadSubpackages(...e) {
            return new Promise((t, i) => {
                if (
                    //console.log("分包加载开始"), 
                    e && e.length > 0 && (p.Instance.onWx || p.Instance.onQq)) {
                    let a = 0;
                    for (let s = 0; s < e.length; s++) p.Instance.platform.loadSubpackage({
                        name: e[s],
                        success: () => {
                            ++a == e.length && (
                                //console.log("分包加载成功"),
                                 t());
                        },
                        fail: () => {
                           // console.log("分包加载失败"), 
                            i();
                        }
                    });
                } else
                //console.log("不需要加载分包"), 
                t();
            });
        }
    }.init();
}();
console.log=function(){};
console.error=function(){};