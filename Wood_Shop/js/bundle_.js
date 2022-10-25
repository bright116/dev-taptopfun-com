class Prompt {
    init() {
        this.bgSprite = new Laya.Image("common/img_infoBase.png"),
            this.bgSprite.width = Laya.stage.width - 40,
            this.bgSprite.height = 30,
            this.bgSprite.anchorX = .5,
            this.bgSprite.anchorY = .5,
            this.bgSprite.x = Laya.stage.width / 2,
            this.bgSprite.y = Laya.stage.height / 3,
            this.textOffx = 30,
            this.textOffy = 15,

            this.tipText = new Laya.Label(),
            this.bgSprite.addChild(this.tipText),
            this.tipText.width = this.bgSprite.width - 2 * this.textOffx,
            this.tipText.fontSize = 28,
            this.tipText.align = "center",
            this.tipText.color = "#ffffff",
            this.tipText.wordWrap = true;
        this.tipText.y = this.textOffy,
            this.bgSprite.zOrder = 2e3,
            Laya.stage.addChild(this.bgSprite),
            this.timeLine = new Laya.TimeLine(),
            this.timeLine.addLabel("scale", 0).to(this.bgSprite, {
                scaleX: 1.2,
                scaleY: 1.2,
                alpha: 1
            }, 100, null, 0).addLabel("back", 0).to(this.bgSprite, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 100, null, 0).addLabel("show", 0).to(this.bgSprite, {
                alpha: 1
            }, 1e3, null, 0).addLabel("hide", 0).to(this.bgSprite, {
                alpha: 0
            }, 1e3, null, 0), this.timeLine.on(Laya.Event.COMPLETE, this, this.onComplete),
            this.mouseThrough = !0;
        this.onComplete();
    }

    onComplete() {
        this.bgSprite.alpha = 0;
        this.visible = !1, this.mouseThrough = !0;
    }
    removeRes() {
        this.timeLine.destroy();
    }

    prompt(e) {
        this.tipText.text = e, this.tipText.x = this.textOffx, this.bgSprite.height = 50 + this.textOffx,
            this.timeLine.play(0, !1), this.visible = !0;
    }
    resize() {
        this.bgSprite && (this.bgSprite.width = Laya.stage.width - 40, this.bgSprite.height = this.tipText.contextHeight + this.textOffx,
            this.bgSprite.x = Laya.stage.width / 2, this.bgSprite.y = Laya.stage.height / 8,
            this.tipText && (this.tipText.style.width = this.bgSprite.width - 2 * this.textOffx));
    }
}





! function() {
    "use strict";
    var t, e = Laya.ClassUtils.regClass;
    ! function(t) {
        class s extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("FullSceneGames");
            }
        }
        t.FullSceneGamesUI = s, e("ui.FullSceneGamesUI", s);
        class i extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("GameScene");
            }
        }
        t.GameSceneUI = i, e("ui.GameSceneUI", i);
        class a extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("GateEditor");
            }
        }
        t.GateEditorUI = a, e("ui.GateEditorUI", a);
        class n extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("MoreGameDialog");
            }
        }
        t.MoreGameDialogUI = n, e("ui.MoreGameDialogUI", n);
        class o extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("NativeAdDialog");
            }
        }
        t.NativeAdDialogUI = o, e("ui.NativeAdDialogUI", o);
        class r extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("RankDialog");
            }
        }
        t.RankDialogUI = r, e("ui.RankDialogUI", r);
        class h extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("ResultDialog");
            }
        }
        t.ResultDialogUI = h, e("ui.ResultDialogUI", h);
        class l extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("ResultDialogForOPPO");
            }
        }
        t.ResultDialogForOPPOUI = l, e("ui.ResultDialogForOPPOUI", l);
        class d extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("SettingDialog");
            }
        }
        t.SettingDialogUI = d, e("ui.SettingDialogUI", d);
        class c extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.loadScene("SkinDialog");
            }
        }
        t.SkinDialogUI = c, e("ui.SkinDialogUI", c);
    }(t || (t = {}));
    class s extends Laya.EventDispatcher {
        constructor() {
            super();
        }
        static getIns() {
            return this._ins || (this._ins = new s()), this._ins;
        }
    }
    class i {
        constructor() {
            if (this.bannerAd = null, this.rewardedVideoAd = null, this.gameRecorder = null,
                this.wxBGM = null, this.wxSound = null, this.miuseSelected = !0, this.miuseSelected2 = !0,
                this.canShake = !0, this.bgMiuse = "bg.mp3", this.shareTitle = "快来一起做木工吧！", this.shareImgUrl = "https://mmocgame.qpic.cn/wechatgame/dqfFbeKCicHOLO61e2bvBbuSR9BSzohia4EiaTCPWAOS04YbCEKyC2qWcBxtdF8lE1w/0",
                this.shareImgId = "xvFkm489S6C10gIpLUZM4Q==", this.dataName = "data2", this.openRankDataKey = "rankData",
                this.openid = "qitu", this.bannerErrTimes = 0, this.playBgMiuse = function() {
                    this.playMiuse(this.bgMiuse);
                }, this.playMiuse = function(t) {
                    let e = (Laya.Browser.onMiniGame ? "" : ".") + "/res/sound/" + t;
                    this.miuseSelected && Laya.SoundManager.playMusic(e);
                }, this.stopMiuse = function() {
                    Laya.SoundManager.stopMusic();
                }, this.playSound = function(t) {
                    let e = (Laya.Browser.onMiniGame ? "" : ".") + "/res/sound/" + t;
                    this.miuseSelected2 && Laya.SoundManager.playSound(e, 1);
                }, this.sendWxMsg = function(t) {
                    Laya.Browser.onMiniGame && Laya.Browser.window.wx.getOpenDataContext().postMessage(t);
                }, this.showAd = function(t) {
                    this.videoFunc = t;
                    var e = this.getvideoId();
                    if (!this.sdkEnvironment || !e) return void this.videoFunc(0);
                    let s = this;
                    this.rewardedVideoAd || (Laya.Browser.onQGMiniGame ? this.rewardedVideoAd = this.sdkEnvironment.createRewardedVideoAd({
                        posId: e
                    }) : this.rewardedVideoAd = this.sdkEnvironment.createRewardedVideoAd({
                        adUnitId: e
                    }), this.rewardedVideoAd.onError(t => {
                        this.test("rewardedVideoAdERR：", t), this.videoFunc(2);
                    }), this.rewardedVideoAd.onClose(t => {
                        t && t.isEnded || void 0 === t ? this.videoFunc(0) : this.videoFunc(1);
                    })), Laya.Browser.onMiniGame ? this.rewardedVideoAd.show().catch(t => {
                        this.rewardedVideoAd.load().then(() => this.rewardedVideoAd.show());
                    }) : (this.rewardedVideoAd.onLoad(() => {
                        console.log("video add suacess............................................."), s.rewardedVideoAd.show();
                    }), this.rewardedVideoAd.load(), console.log("showAd11", e));
                }, this.showBanner = function(t = 720, e = 1e3, s = !1) {
                    if (!this.sdkEnvironment) return;
                    let i = this.getBannerId();
                    if (!i) return;
                    var a = t,
                        n = this.sdkEnvironment.getSystemInfoSync(),
                        o = n.windowWidth / Laya.stage.width,
                        r = n.windowHeight / Laya.stage.height,
                        h = a * o;
                    h < 300 ? h = 300 : h > Laya.stage.height - 20 && (h = Laya.stage.height - 20);
                    var l = e * r,
                        d = (Laya.stage.width * o - h) / 2,
                        c = h;
                    Laya.Browser.onQGMiniGame && (d = 0, c = n.windowWidth, l = null);
                    let g = {
                        left: d,
                        top: l,
                        width: c
                    };
                    s && (g.top = null, g.bottom = 4), this.bannerAd || (Laya.Browser.onQGMiniGame ? this.bannerAd = this.sdkEnvironment.createBannerAd({
                        posId: i,
                        style: g
                    }) : Laya.Browser.onMiniGame && (this.bannerAd = this.sdkEnvironment.createBannerAd({
                        adUnitId: i,
                        style: g
                    })), this.bannerAd.onError(t => {
                        this.bannerErrTimes < 3 && this.bannerAd.show(), this.bannerErrTimes++;
                    }), this.bannerAd.onShow && this.bannerAd.onShow(function() {
                        this.bannerErrTimes = 0;
                    })), this.bannerAd.show(), console.log("showBanner11", i);
                }, this.hideBanner = function(t = !0) {
                    this.sdkEnvironment && (this.bannerAd && this.bannerAd.hide(), t && (this.bannerAd = null));
                }, this.share = function(t) {
                    if (Laya.Browser.onMiniGame) {
                        this.isShare = !0, t || (t = this.shareTitle);
                        let e = this;
                        Laya.Browser.window.wx.shareAppMessage({
                            title: t,
                            imageUrlId: e.shareImgId,
                            imageUrl: e.shareImgUrl
                        });
                    }
                }, this.sdkEnvironment = this.getSdkEnvironment(), Laya.Browser.onMiniGame) {
                Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: !0
                });
                let t = this;
                Laya.Browser.window.wx.onShareAppMessage(function() {
                    return {
                        title: t.shareTitle,
                        imageUrlId: t.shareImgId,
                        imageUrl: t.shareImgUrl
                    };
                }), Laya.Browser.window.wx.onShow(t => {
                    this.miuseSelected && this.playBgMiuse(), this.isShare && (this.isShare = !1);
                }), Laya.Browser.window.wx.onHide(() => {
                    this.stopMiuse();
                });
            }
        }
        setUserCloudStorage(t) {}
        recorder() {
            this.sdkEnvironment && (this.gameRecorder || (this.gameRecorder = this.sdkEnvironment.getGameRecorder(),
                this.gameRecorder.on("error", t => {
                    t.error;
                })), this.gameRecorder.isFrameSupported());
        }
        getBannerId() {
            let t = "";
            return Laya.Browser.onMiniGame ? t = "adunit-5425eccbb77934f7" : Laya.Browser.onQGMiniGame && (t = "156225"),
                t;
        }
        getvideoId() {
            let t = "";
            return Laya.Browser.onMiniGame ? t = "adunit-44fd5cd627798867" : Laya.Browser.onQGMiniGame && (t = "156229"),
                t;
        }
        openGame(t, e, s, i) {
            this.sdkEnvironment && (Laya.Browser.onQGMiniGame ? this.sdkEnvironment.navigateToMiniGame({
                pkgName: t,
                path: s,
                extraData: i,
                envVersion: "release",
                success(t) {
                    e && e(t);
                }
            }) : this.sdkEnvironment.navigateToMiniProgram({
                appId: t,
                path: s,
                extraData: i,
                envVersion: "release",
                success(t) {
                    e && e(t);
                }
            }));
        }
        setStorage(t, e) {
            let s = e || this.dataName;
            Laya.Browser.onMiniGame ? this.sdkEnvironment.setStorage({
                key: s,
                data: t
            }) : Laya.LocalStorage.setItem(s, JSON.stringify(t));
        }
        getStorage(t, e) {
            let s, i = e || this.dataName;
            Laya.Browser.onMiniGame ? this.sdkEnvironment.getStorage({
                key: i,
                success(e) {
                    t && t(e.data);
                },
                fail(e) {
                    (s = Laya.LocalStorage.getItem(i)) && (s = JSON.parse(s)), t && t(s);
                }
            }) : ((s = Laya.LocalStorage.getItem(i)) && (s = JSON.parse(s)), t && t(s));
        }
        removeStorage(t, e) {
            let s = e || this.dataName;
            Laya.Browser.onMiniGame ? this.sdkEnvironment.removeStorage({
                key: s,
                success(e) {
                    t && t(e.data);
                },
                fail(e) {
                    t && t(-1);
                }
            }) : Laya.LocalStorage.removeItem(s);
        }
        clearStorage(t) {
            Laya.Browser.onMiniGame ? this.sdkEnvironment.clearStorage({
                success(e) {
                    t && t(e.data);
                },
                fail(e) {
                    t && t(-1);
                }
            }) : Laya.LocalStorage.clear();
        }
        vibrateShort(t) {
            this.canShake && this.sdkEnvironment && this.sdkEnvironment.vibrateShort(t);
        }
        vibrateLong(t) {
            this.canShake && this.sdkEnvironment && this.sdkEnvironment.vibrateLong(t);
        }
        showWXLoad(t = "", e = !0) {
            Laya.Browser.onMiniGame && Laya.Browser.window.wx.showLoading({
                title: t,
                mask: e
            });
        }
        hideWXLoad() {
            Laya.Browser.onMiniGame && Laya.Browser.window.wx.hideLoading();
        }
        getNativeAd(t, e = 1) {
            if (this.sdkEnvironment) {
                this.nativeAd && (this.nativeAd.destroy(), this.nativeAd = null);
                let s = "156228";
                2 == e ? s = "157346" : 3 == e && (s = "157347"), this.nativeAd = this.sdkEnvironment.createNativeAd({
                    posId: s
                }), this.nativeAd.onError(e => {
                    t(null);
                }), this.nativeAd.onLoad(e => {
                    t(e.adList);
                }), this.nativeAd.load();
            } else t([]);
        }
        getNativeAd2(t) {
            this.getNativeAd(e => {
                e ? t(e) : this.getNativeAd(e => {
                    e ? t(e) : this.getNativeAd(e => {
                        e && t(e);
                    }, 3);
                }, 2);
            }, 1);
        }
        reportAdClick(t) {
            this.nativeAd && this.nativeAd.reportAdClick({
                adId: t.adId
            });
        }
        reportAdShow(t) {
            this.nativeAd && this.nativeAd.reportAdShow({
                adId: t.adId
            });
        }
        showInsertAd() {
            this.sdkEnvironment && (this.insertAd || (this.insertAd = this.sdkEnvironment.createInsertAd({
                adUnitId: "256226"
            }), this.insertAd.onError(function(t) {
                console.log(t);
            }), this.insertAd.onClose(function() {
                console.log("插屏广告关闭");
            }), this.insertAd.onLoad(function() {
                console.log("插屏广告加载");
            })), this.insertAd.show());
        }
        hasShortcutInstalled(t) {
            this.sdkEnvironment && this.sdkEnvironment.hasShortcutInstalled({
                success: function(e) {
                    t(e);
                },
                fail: function(e) {
                    t(!1);
                },
                complete: function() {}
            });
        }
        installShortcut(t) {
            this.sdkEnvironment && this.sdkEnvironment.installShortcut({
                success: function() {
                    t && t(), console.log("installShortcutsuccess");
                },
                fail: function(t) {
                    console.log("installShortcutFial", t);
                },
                complete: function() {}
            });
        }
        oppoLogin(t) {
            Laya.Browser.onQGMiniGame && Laya.Browser.window.qg.login({
                success: function(e) {
                    var s = e.data;
                    t(s);
                },
                fail: function(e) {
                    console.log(JSON.stringify(e)), t(null);
                }
            });
        }
        navigate2Mini(t) {
            Laya.Browser.onQGMiniGame ? (window.zs.sdk.navigate2Mini(t, this.openid), this.clickGameReq(t)) : Laya.Browser.onMiniGame && zs.sdk.navigate2Mini(t, this.openid, () => {}, () => {
                s.getIns().event("navigate2Mini");
            }, () => {});
        }
        loginReq() {
            if (1 != this.haslogin && this.oppoLoginData) {
                let s = "https://platform.qwpo2018.com/api/oppo_login/index";
                var t = new Laya.HttpRequest();
                t.http.timeout = 1e4, t.once(Laya.Event.COMPLETE, this, t => {});
                let i = this.oppoLoginData.token;
                console.log("ttokensss", i);
                var e = {
                    apk_id: "30241962",
                    code: i
                };
                let a = JSON.stringify(e);
                t.send(s, a, "post", "json", ["content-type", "application/json"]), this.haslogin = !0;
            }
        }
        clickGameReq(t) {
            if (this.oppoLoginData) {
                let i = "https://platform.qwpo2018.com/api/apk_ad/click_log";
                var e = new Laya.HttpRequest();
                e.http.timeout = 1e4, e.once(Laya.Event.COMPLETE, this, t => {
                    console.log("clickGameReq", e.data);
                });
                var s = {
                    apk_id: "30241962",
                    user_id: this.oppoLoginData.uid,
                    link_id: t.id
                };
                e.send(i, JSON.stringify(s), "post", "json", ["content-type", "application/json"]);
            }
        }
        getWeiXinCfg(t) {
            var e = new Laya.HttpRequest();
            e.http.timeout = 1e4, e.once(Laya.Event.COMPLETE, this, s => {
                t(e.data.data);
            });
            e.send("https://cpcf.wqop2018.com/api/list_config/index", JSON.stringify({
                appid: "wxb9733608066c229f"
            }), "post", "json", ["content-type", "application/json"]);
        }
        getSdkEnvironment() {
            let t = null;
            return Laya.Browser.onMiniGame ? t = Laya.Browser.window.wx : Laya.Browser.onQGMiniGame && (t = Laya.Browser.window.qg).initAdService({
                appId: "30241962",
                isDebug: !1,
                success: function(t) {
                    console.log("initAdServicesuccess");
                },
                fail: function(t) {
                    console.log("initAdServicefail:" + t.code + t.msg);
                },
                complete: function(t) {
                    console.log("initAdServicecomplete");
                }
            }), t;
        }
        getOpenId() {
            if (Laya.Browser.onMiniGame) {
                let t = this;
                Laya.Browser.window.wx.login({
                    success(e) {
                        e.code ? Laya.Browser.window.wx.request({
                            url: "https://cpcf.wqop2018.com/api/app_login/index",
                            data: {
                                code: e.code,
                                appid: "wxb9733608066c229f"
                            },
                            success(e) {
                                t.openid = e.data.data.openid;
                            }
                        }) : console.log("登录失败！" + e.errMsg);
                    }
                });
            }
        }
        test(t, e) {
            console.log(t);
            for (let t in e) console.log(t, e[t]);
        }
        static getIns() {
            return this._ins || (this._ins = new i()), this._ins;
        }
    }
    class a {
        static copyForm(t, e) {
            for (let s in e) t[s] = e[s];
        }
        static copyForm2(t, e) {
            for (let s in e) "string" != typeof e[s] && "number" != typeof e[s] && "boolean" != typeof e[s] || (t[s] = e[s]);
        }
        static isEqualDateTime(t, e) {
            if (!t || !e || 0 == t || 0 == e) return !1;
            let s = new Date(t),
                i = new Date(e);
            return s.getFullYear() == i.getFullYear() && s.getMonth() == i.getMonth() && s.getDate() == i.getDate();
        }
        static getAngleByTwoPoint(t, e) {
            let s = e.x - t.x,
                i = e.y - t.y;
            return 180 * Math.atan2(i, s) / Math.PI;
        }
        static norTime(t) {
            let e = Math.floor(t / 3600),
                s = t % 60;
            return e + ":" + e % 60 + ":" + (s > 9 ? "" + s : "0" + s);
        }
        static norSecondTime(t) {
            let e = t % 60;
            return Math.floor(t / 60) + ":" + (e > 9 ? "" + e : "0" + e);
        }
        static get3DSpScenePos(t, e) {
            let s = new Laya.Vector3();
            e.viewport.project(t, e.projectionViewMatrix, s);
            s.x = s.x / Laya.stage.clientScaleX;
            s.y = s.y / Laya.stage.clientScaleY;
            return s;
        }
        static in3DPosInScene(t, e) {
            let s = this.get3DSpScenePos(t, e);
            return s.x >= 0 && s.x <= Laya.stage.width && s.y >= 0 && s.y <= Laya.stage.height;
        }
        static pointInRect(t, e, s) {
            let i = (s.b.x - s.a.x) * (e - s.a.y) - (s.b.y - s.a.y) * (t - s.a.x),
                a = (s.c.x - s.b.x) * (e - s.b.y) - (s.c.y - s.b.y) * (t - s.b.x),
                n = (s.d.x - s.c.x) * (e - s.c.y) - (s.d.y - s.c.y) * (t - s.c.x),
                o = (s.a.x - s.d.x) * (e - s.d.y) - (s.a.y - s.d.y) * (t - s.d.x);
            return i > 0 && a > 0 && n > 0 && o > 0 || i < 0 && a < 0 && n < 0 && o < 0;
        }
        static getLineMethodParam(t, e, s, i) {
            let a = 0;
            return s != t && (a = (i - e) / (s - t)), {
                k: a,
                b: i - a * s
            };
        }
        static getPointDistLine(t, e, s, i) {
            return Math.abs(s * t - e + i) / Math.sqrt(s * s + 1);
        }
        static getTwoPointDist(t, e, s, i) {
            return Math.sqrt((s - t) * (s - t) + (i - e) * (i - e));
        }
        static isIn(t, e, s) {
            return t >= e && t <= s;
        }
        static getBerizPoint(t, e, s, i) {
            return [Math.pow(1 - t, 2) * e.x + 2 * t * (1 - t) * s.x + Math.pow(t, 2) * i.x, Math.pow(1 - t, 2) * e.y + 2 * t * (1 - t) * s.y + Math.pow(t, 2) * i.y];
        }
        static getStrColorToRbg(t) {
            let e = [];
            for (let s = 1; s < t.length; s += 2) e.push(parseInt("0x" + t.slice(s, s + 2)) / 255);
            return e;
        }
        static flyImg(t, e, s = 6, i, a, n, o, r) {
            let h, l = e || Laya.stage;
            for (let e = 0; e < s; e++)(h = new Laya.Image(t)).x = i, h.y = a, l.addChild(h),
                Laya.Tween.to(h, {
                    x: n,
                    y: o
                }, 500, null, new Laya.Handler(this, (t, i) => {
                    t.removeSelf(), t = null, e == s - 1 && r();
                }, [h, e]), 60 * e);
        }
        static imgComarse(t, e, s, i, a) {
            if (!e) return 0;
            let n = new Laya.Image();
            n.loadImage(t);
            n.drawToCanvas(s, i, 0, 0);
            Laya.Browser.onQGMiniGame;
            let o = n.drawToCanvas(s, i, 0, 0);
            Laya.SubmitCanvas;
            let r = e.drawToCanvas(s, i, 0, 0);
            a(this.pixelsContrast(o.getTexture().getPixels(0, 0, 500, 375), r.getTexture().getPixels(0, 0, s, i), s, i));
        }
        static pixelsContrast(t, e, s, i) {
            var a = s || 8,
                n = i || 8;
            t = this.pixelsToBinary(t, 1), e = this.pixelsToBinary(e, 1);
            var o = 0,
                r = 0,
                h = 0;
            let l = a * n / 2;
            for (var d = 0; d < l; d++) 0 == t[d] && 0 == e[d] || (0 == t[d] && 1 == e[d] ? h++ : 1 == t[d] && (r++,
                1 == e[d] && o++));
            var c = (o - h) / r * 100;
            return c < 0 && (c = 0), (c = Math.floor(c)) > 97 && (c = 100), c;
        }
        static pixelsToBinary(t, e) {
            var s = 0,
                i = t.length,
                a = 0,
                n = new Uint8Array(i / 8);
            if (!e) {
                for (var o = 0; o < i; o += 8) s += .299 * t[o] + .587 * t[o + 1] + .114 * t[o + 2];
                e = s /= i / 4;
            }
            let r = 0;
            for (o = 0; o < i; o += 8) .299 * t[o] + .587 * t[o + 1] + .114 * t[o + 2] >= e ? (n[a++] = 1,
                r++) : n[a++] = 0;
            return console.log("tcount:" + r), n;
        }
        static getSpPixels(t, e, s) {
            let i = new Laya.Sprite();
            i.loadImage("res/icons/1.png"), Laya.stage.addChild(i);
        }
        static createColorFilter(t = 0, e = 0, s = 0) {
            let i = [t, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 1, 0];
            return [new Laya.ColorFilter(i)];
        }
        static twMoveList(t) {
            let e = t;
            e.scrollTo(0), e.tweenTo(9, 2e4);
        }
        static stopMove(t) {
            let e = t;
            Laya.Tween.clearTween(e);
        }
    }
    class n {
        constructor() {
            this.level = 0, this.name = "", this.id = 0, this.gold = 0, this.diamand = 0;
        }
        addAtt(t, e, s = !1) {
            s ? this[t] = e : this[t] ? this[t] += e : this[t] = e;
        }
        addGold(t) {
            this.gold += t, this.save();
        }
        levelup(t = 1) {
            this.level += t, this.save();
        }
        copyFrom(t) {
            a.copyForm(this, t);
        }
        save() {
            let t = {};
            a.copyForm2(t, this), i.getIns().setStorage(t);
        }
    }
    class o extends n {
        constructor() {
            super(), this.gates = "", this.nativeAdClickTimes = 0;
        }
        setGatePorss(t, e) {
            if (this.gates) {
                let s, i, a, n = "",
                    o = this.gates.split("|");
                for (let r = 0; r < o.length; r++) s = o[r].split("_"), parseInt(s[0]) == t && e > parseInt(s[1]) ? (i = t + "_" + e,
                    a = !0) : i = s[0] + "_" + s[1], i && (n ? n += "|" + i : n = i);
                a ? this.gates = n : this.gates += "|" + t + "_" + e;
            } else this.gates = t + "_" + e;
            this.save();
        }
        getGatePross(t) {
            if (this.gates) {
                let e = this.gates.split("|");
                for (let s = 0; s < e.length; s++)
                    if (e[s].split("_")[0] == t + "") return parseInt(e[s].split("_")[1]);
            }
            return 0;
        }
        isUnlock(t) {
            let e = this.gates.split("|");
            for (let s = 0; s < e.length; s++)
                if (parseInt(e[s].split("_")[0]) == t) return !0;
            return !1;
        }
        copyFrom(t) {
            super.copyFrom(t);
            let e = new Date(),
                s = e.getFullYear() + "_" + e.getMonth() + "_" + e.getDate();
            s != this.day && (this.nativeAdClickTimes = 0, this.day = s, this.save());
        }
        static getIns() {
            return this._ins || (this._ins = new o()), this._ins;
        }
    }
    class r {
        constructor() {}
        sceneOpen(t, e = !1, s, i, a) {
            Laya.Scene.open(t, e, s, i, a);
        }
        showDialogByClass(t) {
            let e = new t();
            return Laya.stage.addChild(e), e;
        }
        removeSp(t, e = !1) {
            t && (t.parent && t.parent.removeChild(t), e && (t = null));
        }
        static getIns() {
            return this._ins || (this._ins = new r()), this._ins;
        }
    }
    class h {
        constructor() {
            this.threeConfig = {}, this.zs_version = "1.4", this.zs_version_weixin = "1.2";
        }
        zs_jump_switch() {
            return Laya.Browser.onMiniGame ? !!this.isSameVersionWeiXin() && 1 == this.threeConfig.zs_jump_switch : 1 == this.threeConfig.zs_jump_switch;
        }
        zs_full_screen_jump() {
            return Laya.Browser.onMiniGame ? !!this.isSameVersionWeiXin() && 1 == this.threeConfig.zs_full_screen_jump : 1 == this.threeConfig.zs_full_screen_jump;
        }
        zs_native_click_switch() {
            return Laya.Browser.onMiniGame ? !!this.isSameVersionWeiXin() && 1 == this.threeConfig.zs_native_click_switch : 1 == this.threeConfig.zs_native_click_switch;
        }
        zs_full_screen_city() {
            return Laya.Browser.onMiniGame ? !!this.isSameVersionWeiXin() && 1 == this.threeConfig.zs_full_screen_city : 1 == this.threeConfig.zs_full_screen_city;
        }
        zs_click_award_num() {
            if (Laya.Browser.onMiniGame) return !!this.isSameVersionWeiXin() && this.threeConfig.zs_click_award_num;
            let t = this.threeConfig.zs_click_award_num;
            return console.log("zs_click_award_num:", t), 1 == t || "1" == t;
        }
        zs_banner_vertical_enable() {
            return !!Laya.Browser.onMiniGame && (!!this.isSameVersionWeiXin() && 1 == this.threeConfig.zs_banner_vertical_enable);
        }
        getPassScore() {
            let t = 60;
            return this.threeConfig.pass_score && (t = this.threeConfig.pass_score), t;
        }
        zs_banner_text_time() {
            let t = 2e3;
            return this.threeConfig.zs_banner_text_time && (t = this.threeConfig.zs_banner_text_time),
                t;
        }
        getGameItems(t = !0, e = 30) {
            let s = h.getIns().moreGameData ? h.getIns().moreGameData.endPage : [];
            if (t) return s;
            let i = [];
            if (s) {
                for (let t = 0; t < s.length; t++) i.push(s[t]);
                let t = e - s.length;
                if (t > 0) {
                    let e = 0;
                    for (let a = 0; a < t; a++) i.push(s[e]), ++e >= s.length && (e = 0);
                }
            }
            return i;
        }
        isSameVersion() {
            return this.zs_version == this.threeConfig.zs_version;
        }
        isSameVersionWeiXin() {
            return this.zs_version_weixin == this.threeConfig.zs_version;
        }
        openNativeAdDialog(t = 0) {
            if (Laya.Browser.onMiniGame) return;
            (0 == t ? this.zs_full_screen_city() : this.zs_click_award_num()) && o.getIns().nativeAdClickTimes < 8 && i.getIns().getNativeAd2(t => {
                let e = t ? t[0] : null;
                e && r.getIns().sceneOpen("NativeAdDialog.scene", !1, e);
            });
        }
        showWeiXinNorBanner() {
            Laya.Browser.onMiniGame && i.getIns().showBanner(680, Laya.stage.height - 244);
        }
        static getIns() {
            return this._ins || (this._ins = new h()), this._ins;
        }
    }
    class l extends t.FullSceneGamesUI {
        constructor() {
            super(), this.list1data = [], this.list.renderHandler = new Laya.Handler(this, this.renderr1),
                this.list.mouseHandler = new Laya.Handler(this, this.clickHandler1), this.list2.renderHandler = new Laya.Handler(this, this.renderr2),
                this.list2.mouseHandler = new Laya.Handler(this, this.clickHandler2), this.isPopupCenter = !1,
                this.bg.height = Laya.stage.height, this.goBtn.y = Laya.stage.height - 130 - 60;
        }
        renderr1(t, e) {
            let s = t.dataSource;
            if (s) {
                t.getChildByName("icon").texture = s.app_icon, s.app_title && t.getChildByName("nameTxt") && (t.getChildByName("nameTxt").text = s.app_title),
                    t.getChildByName("downBg").graphics.drawRect(0, 0, 200, 54, this.getClor(e)), t.getChildByName("hot").visible = e < 2,
                    e < 2 && (t.getChildByName("hot").texture = 0 == e ? "main/icon-hot.png" : "main/icon-new.png");
            }
        }
        clickHandler1(t, e) {
            if (t.type == Laya.Event.CLICK) {
                let e = t.target.dataSource;
                i.getIns().navigate2Mini(e);
            }
        }
        renderr2(t, e) {
            let s = t.dataSource;
            s && (t.texture = s.app_icon);
        }
        clickHandler2(t, e) {
            if (t.type == Laya.Event.CLICK) {
                let e = t.target.dataSource;
                i.getIns().navigate2Mini(e);
            }
        }
        onOpened(t) {
            this.resulData = t;
        }
        onEnable() {
            this.returnBtn.on(Laya.Event.CLICK, this, this.clickhandler, [1]), this.goBtn.on(Laya.Event.CLICK, this, this.clickhandler, [2]),
                this.homeBtn.on(Laya.Event.CLICK, this, this.clickhandler, [3]);
            let t = h.getIns().moreGameData ? h.getIns().moreGameData.endPage : [];
            this.list1data = t.slice();
            let e = 18 - t.length;
            if (e > 0)
                for (let s = 0; s < e; s++) t.push(t[s]);
            this.list.array = t;
            let s = h.getIns().moreGameData ? h.getIns().moreGameData.endPage : [];
            this.list2.array = s, a.twMoveList(this.list), a.twMoveList(this.list2), h.getIns().fullSceneGameDialogIsOpen = !0;
        }
        clickhandler(t, e) {
            h.getIns().openNativeAdDialog(1), this.close(), e.stopPropagation();
        }
        getClor(t) {
            return ["0xb852b6", "0x4294a2", "0x2f67c4", "0xe09031", "0x35bd75", "0xc5645e"][t % 6];
        }
        onDisable() {
            this.returnBtn.off(Laya.Event.CLICK, this, this.clickhandler), this.goBtn.off(Laya.Event.CLICK, this, this.clickhandler),
                this.homeBtn.off(Laya.Event.CLICK, this, this.clickhandler), h.getIns().fullSceneGameDialogIsOpen = !1,
                this.resulData && (r.getIns().sceneOpen("ResultDialog.scene", !1, this.resulData),
                    this.resulData = null);
        }
    }
    class d {
        constructor() {
            this.filePath = "res/Conventional/", this.toolNames = ["File001", "File002", "File003"],
                this.wood = "Wood", this.sponge = "Sponge001", this.paintNames = ["Brush"], this.colors = ["#e6002e", "#a40182", "#541b86", "#004ea1", "#0168b7", "#009ea7", "#dddddd", "#14a83a", "#abcd05", "#fdd900", "#fabf01", "#f39801", "#ed6d00", "#333333"];
        }
        loadModels(t = null) {
            let e = this.getAllModelUrls();
            Laya.loader.create(e, new Laya.Handler(this, () => {
                this.models = {};
                let e = this.getAllModelNames();
                for (let t = 0; t < e.length; t++) this.models[e[t]] = Laya.loader.getRes(this.getModelUrlByName(e[t]));
                t && t(), this.changeModelsSpecularColor();
            }));
        }
        getModelByName(t) {
            let e = this.models[t];
            if (e) return e.clone();
        }
        getModelCloneByName(t) {
            let e = this.models[t];
            if (e) return e.clone();
        }
        getModelUrlByName(t) {
            return this.filePath + t + ".lh";
        }
        getAllModelUrls() {
            let t = [],
                e = this.getAllModelNames();
            for (let s = 0; s < e.length; s++) t.push(this.filePath + e[s] + ".lh");
            return t;
        }
        getAllModelNames() {
            let t = [],
                e = this.toolNames;
            for (let s = 0; s < e.length; s++) t.push(e[s]);
            return t.push(this.wood), t.push(this.sponge), t = t.concat(this.paintNames);
        }
        getToolsName() {
            let t = [];
            for (let e = 0; e < this.toolNames.length; e++) t.push(this.toolNames[e]);
            return t;
        }
        isCarve(t) {
            return this.toolNames.indexOf(t) >= 0;
        }
        isDaMo(t) {
            return t == this.sponge;
        }
        ispaint(t) {
            return this.paintNames.indexOf(t) >= 0;
        }
        changeModelsSpecularColor() {
            for (let t = 0; t < this.toolNames.length; t++) this.changeModelSpecularColor(this.getModelByName(this.toolNames[t]));
        }
        changeModelSpecularColor(t) {
            t.meshRenderer.material.specularColor = new Laya.Vector4(30 / 255, 30 / 255, 30 / 255, 1);
        }
        isTool(t, e) {
            return this.toolNames[e] == t;
        }
        isColor(t, e) {
            return this.colors.indexOf(t) >= 0;
        }
        getColorImg(t) {
            return "main/10-" + (16 + this.colors.indexOf(t)) + ".png";
        }
        getToolIconByIndex(t) {
            let e = "main/10-04.png";
            return 1 == t ? e = "main/10-06.png" : 2 == t && (e = "main/10-05.png"), e;
        }
        getResultImg(t) {
            let e = "main/10-35.png";
            return t >= 60 && t <= 79 ? e = "main/10-34.png" : t >= 80 && t <= 94 ? e = "main/10-33.png" : t >= 95 && (e = "main/10-32.png"),
                e;
        }
        static getIns() {
            return this._ins || (this._ins = new d()), this._ins;
        }
    }
    class c extends Laya.MeshSprite3D {
        constructor(t) {
            super(), this.H = .016, this.R = 3, this.skins = ["res/Conventional/Assets/skin/Bark_Diffuse.jpg", "res/Conventional/Assets/skin/Wood_Diffuse.jpg"],
                this.num = t, this.pieceIndexs = [], this.init();
        }
        init() {
            let t;
            this.items = [];
            new Laya.Vector3(8, 8, 8);
            for (let e = 0; e < this.num; e++) t = this.createItem(), this.setSkin(t, this.skins[0], e, !0),
                t.transform.localPosition = new Laya.Vector3(e * this.H, 0, 0), this.addChild(t),
                this.items.push(t);
            this.isInit = !0;
        }
        createItem() {
            let t;
            return t = d.getIns().getModelCloneByName("Wood");
        }
        setSkin(t, e, s = 0, i = !1) {
            var a = t.getChildByName("Bark001").meshRenderer.material;
            if (a || (a = new Laya.BlinnPhongMaterial(), t.getChildByName("Bark001").meshRenderer.material = a),
                this.isInit || (t.getChildByName("Bark002").meshRenderer.material.specularColor = new Laya.Vector4(30 / 255, 30 / 255, 30 / 255, 1)),
                i) {
                a.specularColor = new Laya.Vector4(30 / 255, 30 / 255, 30 / 255, 1);
                var n = a.tilingOffset;
                n.setValue(1, .001, 1, .001 * s), a.tilingOffset = n, a.albedoColor = new Laya.Vector4(1, 1, 1, 1),
                    t.getChildByName("Bark002").meshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 1);
            }
            Laya.Texture2D.load(e, Laya.Handler.create(this, function(t) {
                a.albedoTexture = t;
            }));
        }
        setColor(t, e) {
            t.getChildByName("Bark001").meshRenderer.material.albedoColor = e, t.getChildByName("Bark002").meshRenderer.material.albedoColor = e;
        }
        createPiece() {
            let t = new Laya.MeshSprite3D();
            return t.transform.localRotationEulerZ = -90, t;
        }
        createPieces(t) {
            if (this.pieceIndexs.indexOf(t) >= 0) return;
            let e = [],
                s = !1;
            if (t >= this.num / 2)
                for (let s = t; s < this.num; s++) this.pieceIndexs.indexOf(s) < 0 && (e.push(this.items[s]),
                    this.pieceIndexs.push(s));
            else {
                for (let s = t; s >= 0; s--) this.pieceIndexs.indexOf(s) < 0 && (e.push(this.items[s]),
                    this.pieceIndexs.push(s));
                s = !0;
            }
            if (e.length) {
                let t = Laya.Pool.getItemByCreateFun("pieces", this.createPiece, this);
                t.transform.localPosition = new Laya.Vector3(), this.addChild(t);
                for (let s = 0; s < e.length; s++) t.addChild(e[s]);
                Laya.Tween.to(t.transform.localPosition, {
                    x: s ? -4 : 8,
                    y: -10,
                    z: 0,
                    update: new Laya.Handler(this, () => {
                        t.transform.localPosition = t.transform.localPosition;
                    })
                }, 200, null, new Laya.Handler(this, () => {
                    t.removeChildren(), t.removeSelf(), Laya.Pool.recover("pieces", t);
                }));
            }
        }
        carve(t, e) {
            let s, i, a, n, o = Math.floor((t.x - this.transform.position.x) / this.H),
                r = this.getCarveRs(o, e, t.y);
            for (let t = 0; t < r.length; t++) a = r[t].index, this.pieceIndexs.indexOf(a) < 0 && (i = this.items[a]) && (s = r[t].scale) < 1 && (1 == i.transform.localScaleY && this.setSkin(i, this.skins[1], t),
                s < i.transform.localScaleY && (i.transform.localScaleY = s, i.transform.localScaleZ = s,
                    n || (n = !0)), 0 == s && this.createPieces(a));
            return n;
        }
        getCarveRs(t, e, s) {
            let i = [],
                a = this.transform.position,
                n = 32;
            "File001" == e || (n = 40);
            let o, r = n / 2,
                h = 0,
                l = 40 * this.H;
            for (let n = -r; n < r; n++) o = Math.abs(s - a.y), "File002" == e ? h = 2 * Math.abs(n) * this.H : "File003" == e && (h = l / 2 - Math.sqrt(r * r - n * n) * this.H),
                i.push({
                    index: t + n,
                    scale: (o + h) / this.R
                });
            return i;
        }
        daMo(t, e, s) {
            let i, a, n, o, r, h, l = [],
                d = Math.floor(80 * s),
                c = Math.floor(d / 2),
                g = Math.floor((t.x - this.transform.position.x) / this.H) - c,
                m = this.getDaMoData(g, g + d);
            if (!m.length) {
                for (let e = g; e < g + d; e += 3) this.pieceIndexs.indexOf(e) >= 0 || ((i = this.items[e]) && (o = this.items[e - 2],
                        r = this.items[e - 1], a = this.R * i.transform.localScaleY, o && r && t.y > -a - 1 && (1 == i.transform.localScaleY && this.setSkin(i, this.skins[1], e),
                            1 == o.transform.localScaleY && this.setSkin(o, this.skins[1], e), 1 == r.transform.localScaleY && this.setSkin(r, this.skins[1], e),
                            i.transform.localScaleY -= 1e-4, i.transform.localScaleZ -= 1e-4, o.transform.localScaleY -= 1e-4,
                            o.transform.localScaleZ -= 1e-4, this.canDaMo(r.transform.localScaleY, o.transform.localScaleY, i.transform.localScaleY) && (n = (o.transform.localScaleY + i.transform.localScaleY) / 2,
                                r.transform.localScaleY > n && (r.transform.localScaleY = n, r.transform.localScaleZ = n)))),
                    i && t.y >= i.transform.position.y - a - 1 && (h ? a > h && (h = a) : h = a));
                for (let t = 0; t < l.length; t++)(i = this.items[l[t].index]) && (i.transform.localScaleY = l[t].scale,
                    i.transform.localScaleZ = l[t].scale);
                return h + 1 - .2;
            }
            for (let e = 0; e < m.length; e++) i = this.items[m[e]], a = this.R * i.transform.localScaleY,
                i && t.y >= -a - .9 && (1 == i.transform.localScaleY && this.setSkin(i, this.skins[1], m[e]),
                    i.transform.localScaleY -= .005, i.transform.localScaleZ -= .005);
        }
        canDaMo(t, e, s) {
            return !(Math.abs(t - e) > .1 || Math.abs(t - s) > .1);
        }
        daMoSub1(t, e, s) {
            let i, a, n = this.getDaMoData2(e, s);
            if (n.average1 <= n.average2) return !1;
            if (Math.abs(n.average1 - n.average2) < .001) return !1;
            let o = 0;
            for (let r = e; r < s; r++) i = this.items[r], a = this.R * i.transform.localScaleY,
                i && t.y >= -a - .9 && i.transform.localScaleY > n.average1 && (1 == i.transform.localScaleY && this.setSkin(i, this.skins[1], r),
                    (o = i.transform.localScaleY - n.average1) > .01 && (o = .01), i.transform.localScaleY -= o);
            return !0;
        }
        getDaMoData(t, e) {
            let s, i, a = t,
                n = e;
            a < 0 && (a = 0), n > 500 && (n = 500);
            let o = -1,
                r = 0,
                h = 0,
                l = [],
                d = [];
            for (let t = a; t < n; t++)
                if (s = this.items[t]) {
                    if (this.isHigh(i, s.transform.localScaleY, o, h)) o < 0 ? (o = i, l = [t], r = 1) : (r++,
                        l.push(t)), h ? i > h && (h = i) : h = i;
                    else {
                        if (r > 0 && r < 10)
                            for (let t = 0; t < l.length; t++) d.push(l[t]);
                        o = -1, r = 0, h = 0, l = [];
                    }
                    if (t == n - 1 && r > 0 && r < 10)
                        for (let t = 0; t < l.length; t++) d.push(l[t]);
                    i = s.transform.localScaleY;
                }
            return d;
        }
        isHigh(t, e, s, i) {
            if (i && i - e > .1) return !1;
            if (t)
                if (s >= 0) {
                    if (e - s > .1) return !0;
                } else if (e - t > .1) return !0;
            return !1;
        }
        getDaMoData2(t, e) {
            let s, i, a = 0,
                n = 0,
                o = 0,
                r = 0;
            for (let h = t; h < e; h++)(s = this.items[h]) && (a += i = s.transform.localScaleY,
                n++, r ? i > r && (r = i) : r = i, o ? o > i && (o = i) : o = i);
            return {
                average1: n > 0 ? a / n : 0,
                average2: (r + o) / 2
            };
        }
        paint(t, e, s, i) {
            if (!s) return;
            let n, o, r, h = Math.floor(160 * i / 2),
                l = Math.floor(h / 2),
                d = Math.floor((t.x - this.transform.position.x) / this.H) - l,
                c = a.getStrColorToRbg(s),
                g = new Laya.Vector4(c[0], c[1], c[2], 1);
            for (let e = d; e < d + h; e++) this.pieceIndexs.indexOf(e) >= 0 || (n = this.items[e]) && (t.y >= n.transform.position.y - this.R * n.transform.localScaleY && this.setColor(n, g),
                o = this.R * n.transform.localScaleY, t.y >= n.transform.position.y - o - 1 && (r ? o > r && (r = o) : r = o));
            return r - .1;
        }
        getLen() {
            return this.num * this.H;
        }
        getR() {
            return this.R;
        }
        getCompareData() {
            let t, e = [];
            for (let s = 0; s < this.num; s++)(t = this.items[s]) && t.parent ? e.push(t.transform.localScaleY) : e.push(0);
            return e;
        }
        test() {
            let t, e = 0,
                s = 0,
                i = 0;
            for (let e = 0; e < this.num; e++)(t = this.items[e]) && t.parent && (i += Math.abs(t.transform.localScaleY - .5) / .5,
                s++);
            return s > 0 && (e = Math.floor(i / s * 100)), e;
        }
        createImg(t = 375) {
            let e, s = [];
            for (let i = 0; i < 500; i++)(e = this.items[i]) && e.parent ? s.push(e.transform.localScaleY * t / 2) : s.push(0);
            let i = [],
                a = [],
                n = [];
            for (let e = 0; e < s.length; e++) 0 == e ? (a.push(["moveTo", e, s[e] + t / 2]),
                n.push(["lineTo", e, s[e] + t / 2])) : (a.push(["lineTo", e, s[e] + t / 2]),
                n.push(["lineTo", e, -s[e] + t / 2]));
            n.reverse(), (i = a.concat(n)).push(["closePath"]);
            let o = null;
            return a.length && (o = new Laya.Image()).graphics.drawPath(0, 0, i, {
                fillStyle: "#ffffff"
            }), o;
        }
        rest() {
            let t;
            this.pieceIndexs = [];
            for (let e = 0; e < this.items.length; e++)(t = this.items[e]).transform.localScaleY = 1,
                t.transform.localScaleZ = 1, t.transform.localPosition = new Laya.Vector3(e * this.H, 0, 0),
                this.setSkin(t, this.skins[0], e, !0), this.addChild(t);
        }
        getImg(t) {
            return t < 0 && (t = 1), "res/skin/Bark_Diffuse_0" + t + ".png";
        }
    }
    class g {
        constructor() {
            this.gateCount = 130, this.gates = [
                [500, {
                    start: 0,
                    end: 50,
                    startR: .1,
                    endR: .1,
                    method: 0
                }, {
                    start: 51,
                    end: 350,
                    startR: .4,
                    endR: .4,
                    method: 0
                }, {
                    start: 351,
                    end: 500,
                    startR: .8,
                    endR: 0,
                    method: 0
                }],
                [500, {
                    start: 0,
                    end: 50,
                    startR: .2,
                    endR: .2,
                    method: 0
                }, {
                    start: 51,
                    end: 100,
                    startR: .4,
                    endR: .4,
                    method: 0
                }, {
                    start: 101,
                    end: 150,
                    startR: .6,
                    endR: .6,
                    method: 0
                }, {
                    start: 151,
                    end: 350,
                    startR: .2,
                    endR: .2,
                    method: 0
                }, {
                    start: 351,
                    end: 400,
                    startR: .6,
                    endR: .6,
                    method: 0
                }, {
                    start: 401,
                    end: 450,
                    startR: .4,
                    endR: .4,
                    method: 0
                }, {
                    start: 451,
                    end: 500,
                    startR: .2,
                    endR: .2,
                    method: 0
                }],
                [500, {
                    start: 0,
                    end: 300,
                    startR: .2,
                    endR: .9,
                    method: 1,
                    midR: .8
                }, {
                    start: 301,
                    end: 330,
                    startR: .9,
                    endR: .9,
                    method: 0
                }, {
                    start: 331,
                    end: 440,
                    startR: .9,
                    endR: .6,
                    method: 1,
                    midR: .9
                }, {
                    start: 441,
                    end: 500,
                    startR: .6,
                    endR: .76,
                    method: 1,
                    midR: .7
                }],
                [500, {
                    start: 0,
                    end: 50,
                    startR: .05,
                    endR: .15,
                    method: 1,
                    midR: .3
                }, {
                    start: 51,
                    end: 150,
                    startR: .15,
                    endR: .17,
                    method: 0
                }, {
                    start: 151,
                    end: 180,
                    startR: .5,
                    endR: .5,
                    method: 1,
                    midR: .6
                }, {
                    start: 181,
                    end: 400,
                    startR: .2,
                    endR: .22,
                    method: 0
                }, {
                    start: 401,
                    end: 500,
                    startR: .22,
                    endR: 0,
                    method: 0
                }],
                [320, {
                    start: 0,
                    end: 220,
                    startR: 0,
                    endR: .9,
                    method: 0
                }, {
                    start: 221,
                    end: 320,
                    startR: .9,
                    endR: .7,
                    method: 0
                }],
                [500, {
                    start: 0,
                    end: 10,
                    startR: .4,
                    endR: .45,
                    method: 1,
                    midR: .45
                }, {
                    start: 11,
                    end: 230,
                    startR: .45,
                    endR: .45,
                    method: 0
                }, {
                    start: 231,
                    end: 410,
                    startR: .45,
                    endR: .2,
                    method: 1,
                    midR: .4
                }, {
                    start: 411,
                    end: 470,
                    startR: .2,
                    endR: .2,
                    method: 0
                }, {
                    start: 471,
                    end: 500,
                    startR: .2,
                    endR: .2,
                    method: 1,
                    midR: .25
                }],
                [500, {
                    start: 0,
                    end: 60,
                    startR: .1,
                    endR: .25,
                    method: 1,
                    midR: .27
                }, {
                    start: 61,
                    end: 230,
                    startR: .25,
                    endR: .2,
                    method: 1,
                    midR: .15
                }, {
                    start: 231,
                    end: 280,
                    startR: .2,
                    endR: .6,
                    method: 1,
                    midR: .48
                }, {
                    start: 281,
                    end: 450,
                    startR: .6,
                    endR: .6,
                    method: 1,
                    midR: 1
                }, {
                    start: 451,
                    end: 500,
                    startR: .6,
                    endR: .2,
                    method: 1,
                    midR: .5
                }],
                [300, {
                    start: 0,
                    end: 80,
                    startR: .7,
                    endR: .7,
                    method: 1,
                    midR: .9
                }, {
                    start: 81,
                    end: 250,
                    startR: .7,
                    endR: .15,
                    method: 1,
                    midR: .8
                }, {
                    start: 251,
                    end: 300,
                    startR: .15,
                    endR: .15,
                    method: 1,
                    midR: .3
                }, {
                    start: 301,
                    end: 315,
                    startR: .15,
                    endR: 0,
                    method: 1,
                    midR: .1
                }],
                [500, {
                    start: 0,
                    end: 10,
                    startR: .05,
                    endR: .15,
                    method: 1,
                    midR: .12
                }, {
                    start: 11,
                    end: 70,
                    startR: .15,
                    endR: .15,
                    method: 0
                }, {
                    start: 71,
                    end: 90,
                    startR: .1,
                    endR: .1,
                    method: 0
                }, {
                    start: 91,
                    end: 110,
                    startR: .15,
                    endR: .3,
                    method: 1,
                    midR: .3
                }, {
                    start: 111,
                    end: 390,
                    startR: .3,
                    endR: .3,
                    method: 0
                }, {
                    start: 391,
                    end: 410,
                    startR: .3,
                    endR: .1,
                    method: 1,
                    midR: .3
                }, {
                    start: 411,
                    end: 430,
                    startR: .1,
                    endR: .1,
                    method: 0
                }, {
                    start: 431,
                    end: 490,
                    startR: .15,
                    endR: .15,
                    method: 0
                }, {
                    start: 491,
                    end: 500,
                    startR: .15,
                    endR: .05,
                    method: 1,
                    midR: .12
                }],
                [500, {
                    start: 0,
                    end: 30,
                    startR: .25,
                    endR: .25,
                    method: 1,
                    midR: .3
                }, {
                    start: 31,
                    end: 100,
                    startR: .12,
                    endR: .12,
                    method: 0
                }, {
                    start: 101,
                    end: 350,
                    startR: .12,
                    endR: .3,
                    method: 1,
                    midR: .2
                }, {
                    start: 351,
                    end: 450,
                    startR: .3,
                    endR: .34,
                    method: 0
                }, {
                    start: 451,
                    end: 500,
                    startR: .34,
                    endR: .1,
                    method: 1,
                    midR: .3
                }]
            ], this.shapes = [], this.num = 0;
        }
        createShape(t, e) {
            this.num++;
        }
        getShapeByIndex(t) {
            return this.shapes[t];
        }
        getGate(t) {
            return this.gates[t];
        }
        getGateByLevel(t) {
            let e = t % this.getGateCount();
            return e < 0 && (e = 0), this.gates[e];
        }
        getGateByLevel2(t) {
            let e = t % this.gateCount;
            return e < 0 && (e = 0), e;
        }
        getGateIdByLevel(t) {
            let e = t % 2;
            return e < 0 && (e = 0), e;
        }
        getGateCount() {
            return this.gateCount || (this.gateCount = this.gates.length), this.gateCount;
        }
        getImgByGateId(t) {
            let e = t + 1;
            return e < 1 && (e = 1), "res/icons/" + e + ".png";
        }
        getGates() {
            let t = [];
            for (let e = 0; e < this.gateCount; e++) t.push({
                id: e
            });
            return t;
        }
        static getIns() {
            return this._ins || (this._ins = new g()), this._ins;
        }
    }
    class m extends Laya.MeshSprite3D {
        constructor() {
            super(), this.flag = "effflag", this.index = 0, this.items = [], this.clor = new Laya.Vector4(182, 155, 110, 1),
                Laya.Sprite3D.load("res/Conventional/ToonScene.lh", Laya.Handler.create(this, function(t) {
                    let e = t.getChildAt(0);
                    e.transform.setWorldLossyScale(new Laya.Vector3(7, 7, 7));
                    let s = t.getChildByName("FireworksPs");
                    s.transform.position = new Laya.Vector3(0, -7, 4), s.transform.setWorldLossyScale(new Laya.Vector3(1.5, 1.5, 1.5)),
                        this.particleSystem = e.particleSystem, this.particleSystem.startSpeedConstant = 3,
                        this.particleSystem2 = s.particleSystem, this.particleSystem2.playOnAwake = !1,
                        this.particleSystem2.emission.emissionRate = 1200, this.addChild(e), this.addChild(s);
                }));
        }
        play(t, e) {
            this.isRuning = !0, this.transform.localPositionX = t, this.transform.localPositionY = e - .8,
                this.particleSystem && this.particleSystem.play(), i.getIns().vibrateShort();
        }
        stop() {
            this.isRuning = !1, this.particleSystem && this.particleSystem.stop();
        }
        play2() {
            this.transform.position = new Laya.Vector3(), this.particleSystem2 && this.particleSystem2.play();
        }
        changeSize(t, e) {
            this.particleSystem && (this.particleSystem.startSizeConstantMax = e, this.particleSystem.startSizeConstantMin = t);
        }
        createSp() {
            let t = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(.1, .1, .01)),
                e = new Laya.BlinnPhongMaterial();
            return Laya.Texture2D.load("res/Conventional/Assets/skin/Wood_Diffuse.jpg", Laya.Handler.create(this, function(t) {
                e.albedoTexture = t;
            })), t.meshRenderer.material = e, t;
        }
        clear() {}
    }
    class p extends Laya.Script {
        constructor() {
            super(), this.min = 0, this.max = 100, this.startPos = 194, this.endPos = 32;
        }
        onEnable() {
            this.owner.getChildByName("posImg").on(Laya.Event.MOUSE_DOWN, this, this.moushandler),
                this.owner.parent.on(Laya.Event.MOUSE_UP, this, this.moushandler), this.owner.parent.on(Laya.Event.MOUSE_MOVE, this, this.moushandler),
                this.owner.parent.on(Laya.Event.MOUSE_OUT, this, this.moushandler), this.maxLen = 190,
                this.currPross = .9, this.fresh();
        }
        moushandler(t) {
            t.type == Laya.Event.MOUSE_DOWN ? this.isMouseDown = !0 : t.type == Laya.Event.MOUSE_MOVE ? this.isMouseDown && this.move(t.stageX, t.stageY) : this.isMouseDown = !1;
        }
        move(t, e) {
            let s = this.owner.globalToLocal(new Laya.Point(t, e)),
                i = (this.owner.getChildByName("posImg"),
                    s.y - this.endPos);
            i < 1 ? i = 1 : i > this.startPos && (i = this.startPos), this.currPross = 1 - i / this.maxLen,
                this.fresh(), this.changeHandler && this.changeHandler.runWith(this.currPross);
        }
        fresh() {
            this.owner.getChildByName("prossImg").scaleY = this.currPross;
            let t = this.startPos - this.currPross * this.maxLen;
            t < this.endPos && (t = this.endPos), this.owner.getChildByName("posImg").y = t;
        }
        setPross(t) {
            this.currPross = t, this.fresh();
        }
        get pross() {
            return this.currPross;
        }
        onDisable() {
            this.owner.getChildByName("posImg").off(Laya.Event.MOUSE_DOWN, this, this.moushandler),
                this.owner.parent.off(Laya.Event.MOUSE_UP, this, this.moushandler), this.owner.parent.off(Laya.Event.MOUSE_MOVE, this, this.moushandler),
                this.owner.parent.off(Laya.Event.MOUSE_OUT, this, this.moushandler);
        }
    }
    class u extends Laya.Script {
        constructor() {
            super(), this.filter = ["wx519b546c416c5a24", "wx198cc7aa16dd9c64"], this.downH = 54,
                this.downW = 200;
        }
        onEnable() {
            this.owner.getChildByName("list").mouseHandler = new Laya.Handler(this, this.click),
                this.owner.getChildByName("list").renderHandler = new Laya.Handler(this, this.rederer);
        }
        setData(t, e = !0) {
            this.data = t, this.owner.getChildByName("list").array = this.data, e ? this.owner.getChildByName("list").hScrollBarSkin = "" : this.owner.getChildByName("list").vScrollBarSkin = "",
                setTimeout(() => {
                    this.twMove();
                }, 1e3);
        }
        rederer(t, e) {
            let s = t.dataSource;
            if (s) {
                t.getChildByName("icon").texture = s.app_icon, s.app_title && t.getChildByName("nameTxt") && (t.getChildByName("nameTxt").text = s.app_title),
                    t.getChildByName("downBg").graphics.drawRect(0, 0, this.downW, this.downH, this.getClor(e)),
                    t.getChildByName("hot").visible = e < 2, e < 2 && (t.getChildByName("hot").texture = 0 == e ? "main/icon-hot.png" : "main/icon-new.png");
            }
        }
        click(t, e) {
            if (t.type == Laya.Event.CLICK) {
                let e = t.target.dataSource;
                i.getIns().navigate2Mini(e);
            }
            t.type == Laya.Event.MOUSE_DOWN && this.stopMove();
        }
        getClor(t) {
            return ["0xb852b6", "0x4294a2", "0x2f67c4", "0xe09031", "0x35bd75", "0xc5645e"][t % 6];
        }
        twMove() {
            let t = this.owner.getChildByName("list");
            t.scrollTo(0), t.tweenTo(30, 4e4);
        }
        stopMove() {
            let t = this.owner.getChildByName("list");
            Laya.Tween.clearTween(t);
        }
        createGameInfo(t, e, s) {
            return {
                app_icon: s,
                appid: t,
                app_title: e,
                app_desc: e
            };
        }
        onDisable() {}
    }
    class y {
        constructor() {}
        showMsgTip(t, e = null, s = null, i = null, a = null) {
            let n = e || Laya.stage,
                o = null == s ? n.width / 2 : s,
                r = null == i ? n.height / 2 : i,
                h = Laya.Pool.getItemByCreateFun("tiptxt", this.createTxt);
            h.x = o, h.y = r, this.initFont(h, a), h.text = t, n.addChild(h), Laya.Tween.clearTween(h),
                Laya.Tween.to(h, {
                    y: r - 100
                }, 1e3, null, Laya.Handler.create(this, this.oncomplete, [h]));
        }
        oncomplete(t) {
            t.removeSelf(), Laya.Pool.recover("tiptxt", t);
        }
        initFont(t, e) {
            t.fontSize = 30, t.color = "#ffffff", t.strokeColor = "#ff0000", e && (e.color && (t.color = e.color),
                e.fontSize && (t.fontSize = e.fontSize), e.strokeColor && (t.strokeColor = e.strokeColor),
                e.font && (t.font = e.font));
        }
        createTxt() {
            let t = new Laya.Label();
            return t.anchorX = t.anchorY = .5, t.bold = !0, t.width = 300, t.height = 100, t.wordWrap = !0,
                t.align = "center", t.stroke = 3, t;
        }
        static get Ins() {
            return this._ins || (this._ins = new y()), this._ins;
        }
    }
    class f extends t.GameSceneUI {
        constructor() {
            super(), this.currPaintSize = 1, this.woodW = 20, this.woodCirclenum = 500, this.step = 0,
                this.times = 0, this.daMoSize = 1, this.settimeoutIndex = 0, this.showNativeAdTime = 0,
                this.offStickY = .6;
            let t = new Laya.Image("main/bg.jpg");
            t.height = Laya.stage.height, this.addChildAt(t, 0), f._ins = this, this.mScene3D = new Laya.Scene3D(),
                this.addChildAt(this.mScene3D, 1), this.mScene3D.ambientColor = new Laya.Vector3(240 / 255, 240 / 255, 245 / 255),
                this.mCamera = this.mScene3D.addChild(new Laya.Camera(0, .1, 100));
            // this.mCamera.viewport
            this.mCamera.transform.position = new Laya.Vector3(0, -2, 20),
                this.mCamera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY;
            var e = this.mScene3D.addChild(new Laya.DirectionLight());
            e.transform.position = new Laya.Vector3(0, -100, 1), e.transform.localPositionX = -65,
                e.color = new Laya.Vector3(108 / 255, 98 / 255, 98 / 255), this.daMoBtn.on(Laya.Event.CLICK, this, this.damoClick),
                this.damoSilder.getComponent(p).changeHandler = new Laya.Handler(this, this.damoSizeChange),
                this.paintSilder.getComponent(p).changeHandler = new Laya.Handler(this, this.changePaintSize),
                this.compareBtn.on(Laya.Event.CLICK, this, this.compareClick),
                this.completeBtn.on(Laya.Event.CLICK, this, this.compoeteClick),
                this.paintBtn.on(Laya.Event.CLICK, this, this.paintClick),
                this.skinBtn.on(Laya.Event.CLICK, this, this.onClick, [1]),
                this.settingBtn.on(Laya.Event.CLICK, this, this.onClick, [2]),
                this.startBtn.on(Laya.Event.CLICK, this, this.onClick, [3]),
                this.rankBtn.on(Laya.Event.CLICK, this, this.onClick, [4]),
                this.returnBtn.on(Laya.Event.CLICK, this, this.onClick, [5]),
                // this.creatIconBtn.on(Laya.Event.CLICK, this, this.onClick, [ 6 ]), 
                this.moreBtn.on(Laya.Event.CLICK, this, this.onClick, [7]),
                this.moreBtn2.on(Laya.Event.CLICK, this, this.onClick, [7]), this.on(Laya.Event.MOUSE_DOWN, this, this.mosueHander),
                this.on(Laya.Event.MOUSE_MOVE, this, this.mosueHander), this.on(Laya.Event.MOUSE_OUT, this, this.mosueHander),
                this.on(Laya.Event.MOUSE_UP, this, this.mosueHander), s.getIns().on("navigate2Mini", this, this.navigate2MiniCall),
                this.toolList.renderHandler = new Laya.Handler(this, this.toolRederr), this.toolList.mouseHandler = new Laya.Handler(this, this.toolmouseClick),
                this.toolList.array = d.getIns().getToolsName(), this.paintList.renderHandler = new Laya.Handler(this, this.paintRederr),
                this.paintList.mouseHandler = new Laya.Handler(this, this.paintmouseClick), this.paintList.array = d.getIns().colors,

                this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                    platform.getInstance().navigate("GAME", "LOGO");
                });
            this.yad_game.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().navigate("GAME", "LOGO");
            });



            // this.creatIconBtn.visible = Laya.Browser.onQGMiniGame, 
            d.getIns().loadModels(() => {
                this.init();
            }), this.moreBtn.visible = this.moreBtn2.visible = !1;
        }
        init() {
            this.preMousePoint = new Laya.Vector2(), this.wood = new c(this.woodCirclenum),
                this.wood.transform.position = new Laya.Vector3(-4, 0, 0);
            let t = this.wood.transform.position;
            this.mScene3D.addChild(this.wood);
            let e = new Laya.Vector3(),
                n = new Laya.Vector3(t.x, t.y, t.z);
            if (e = a.get3DSpScenePos(n, this.mCamera), this.woodX = e.x, this.woodY = e.y,
                n.setValue(t.x, t.y - this.wood.getR(), t.z), e = a.get3DSpScenePos(n, this.mCamera),
                this.woodR = e.y - this.woodY, n.setValue(t.x + this.wood.getLen(), t.y, t.z), e = a.get3DSpScenePos(n, this.mCamera),
                this.woodLen = e.x - this.woodX, Laya.Browser.onQGMiniGame) {
                var r = i.getIns().sdkEnvironment.getSystemInfoSync(),
                    l = r.windowWidth / Laya.stage.width,
                    d = r.windowHeight / Laya.stage.height;
                this.toolShapeImg2.x = e.x / l - this.woodLen / l / 2, this.toolShapeImg2.y = e.y / d,
                    this.toolShapeImg2.scaleX = this.toolShapeImg2.scaleY = this.woodLen / l / 500;
            } else {
                this.toolShapeImg2.x = e.x - this.woodLen / 2;
                this.toolShapeImg2.y = e.y;
                this.toolShapeImg2.scaleX = this.toolShapeImg2.scaleY = this.woodLen / 500;

            }

            if (this.currGate = g.getIns().getGateByLevel2(o.getIns().level), this.eff = new m(),
                this.eff.transform.localPosition = new Laya.Vector3(0, 0, -2), this.mScene3D.addChild(this.eff),
                s.getIns().on("changeGameSt", this, this.changeGameSt), s.getIns().on("cut", this, this.cut),
                this.initStick(), this.test(), this.moreGame.visible = !1, this.changeGameSt(0),
                this.startBtn.visible = !1, Laya.Browser.onMiniGame && h.getIns().zs_jump_switch()) {
                let t = h.getIns().getGameItems(!1);
                this.moreGame.getComponent(u).setData(t), this.moreGame.visible = !0, Laya.stage.height > 1300 && (this.moreGame.y = Laya.stage.height - 230);
            }
            this.compareImg.filters = a.createColorFilter(), this.toolShapeImg2.filters = a.createColorFilter(),
                i.getIns().playBgMiuse(), this.posResize(), this.timerLoop(50, this, this.update);
        }
        posResize() {
            let t = Laya.Browser.onMiniGame;
            this.rankBtn.visible = !1,
                // this.creatIconBtn.y = t ? 924 : 990, 
                this.settingBtn.y = t ? 924 : 990,
                this.skinBtn.y = t ? 677 : 740, this.moreBtn.y = t ? 677 : 740;
            Laya.stage.height;
            this.moreBtn2.bottom = 212, this.returnBtn.bottom = 120, this.toolSp.bottom = 120,
                this.damoSp.bottom = 120, this.paintSp.bottom = 120, this.startTipImg.y = Laya.stage.height / Laya.stage.width >= 2 ? 1080 : 844;
        }
        toolRederr(t, e) {
            t.getChildByName("icon").skin = d.getIns().getToolIconByIndex(e);
            let s = d.getIns().isTool(this.currStickName, e);
            t.getChildByName("selectImg").visible = s, s ? 0 != t.x && Laya.Tween.to(t, {
                x: 0
            }, 200) : 40 != t.x && Laya.Tween.to(t, {
                x: 40
            }, 200);
        }
        toolmouseClick(t, e) {
            t.type == Laya.Event.CLICK && (this.changetype(this.toolList.array[e]), this.toolList.refresh()),
                t.stopPropagation();
        }
        paintRederr(t, e) {
            let s = this.paintList.array[e];
            t.getChildByName("icon").texture = d.getIns().getColorImg(s), t.getChildByName("selectImg").visible = this.currColor == s;
        }
        paintmouseClick(t, e) {
            t.type == Laya.Event.CLICK && (this.currColor = this.paintList.array[e], this.paintList.refresh(),
                this.stick.transform.position = new Laya.Vector3(0, -this.wood.getR() - this.offStickY, 0),
                t.stopPropagation());
        }
        onStartClick() {}
        start() {
            platform.getInstance().showInterstitial(() => {
                this.changeGameSt(1);
            })
        }
        update() {
            if (4 == this.gameSt) return;
            if (this.gameSt <= 0) return void(this.wood.transform.localRotationEulerX += 13);
            let t;
            if (this.times > 0 && this.step % 20 == 0 && (this.times--, this.times <= 0 ? this.cdComplete() : this.freshTimeTxt()),
                this.wood.transform.localRotationEulerX += 13, this.stick && this.isMaking()) {
                let e = this.stick.transform.position;
                if (2 == this.gameSt) {
                    if (e.y > this.wood.transform.position.y - this.wood.getR() - 1) {
                        let s = this.wood.daMo(e, this.currStickName, this.daMoSize);
                        e.y > -s && (e.y = -s, this.stick.transform.position = e, this.eff.play(e.x, e.y + .5),
                            t = !0);
                    }
                    t || this.eff.stop();
                } else if (e.y >= this.wood.transform.position.y - this.wood.getR()) {
                    if (1 == this.gameSt) this.wood.carve(e, this.currStickName) ? (this.eff.play(e.x, e.y),
                        "main/10-09.png" == this.daMoBtn.skin && (this.daMoBtn.skin = "main/10-08.png")) : this.eff.stop();
                    else if (3 == this.gameSt) {
                        let t = this.wood.paint(e, this.currStickName, this.currColor, this.currPaintSize);
                        e.y > -t && (e.y = -t, "main/10-09.png" == this.compareBtn.skin && (this.compareBtn.skin = "main/10-08.png"));
                    }
                } else this.eff.stop();
                this.step++;
            }
        }
        isMaking() {
            return 1 == this.gameSt || 2 == this.gameSt || 3 == this.gameSt;
        }
        mosueHander(t) {
            if (!(this.gameSt < 0)) switch (t.type) {
                case Laya.Event.MOUSE_DOWN:
                    t.target == this && (0 == this.gameSt && this.start(), this.isMouseDown = !0, this.preMousePoint.setValue(t.stageX, t.stageY));
                    break;

                case Laya.Event.MOUSE_MOVE:
                    this.moveStick(t);
                    break;

                case Laya.Event.MOUSE_OUT:
                case Laya.Event.MOUSE_UP:
                    this.isMouseDown = !1;
            }
        }
        moveStick(t) {
            if (!(this.gameSt <= 0 || this.gameSt >= 4) && this.isMouseDown) {
                let e = t.stageX - this.preMousePoint.x,
                    s = t.stageY - this.preMousePoint.y,
                    i = this.stick.transform.position,
                    a = this.wood.transform.position;
                e /= 100, s /= 100;
                let n = .2;
                Laya.Browser.onQGMiniGame && (n = .1), e > n ? e = n : e < -n && (e = -n), s > n ? s = n : s < -n && (s = -n),
                    0 != e && (i.x += e), 0 != s && (i.y += -s), this.preMousePoint.setValue(t.stageX, t.stageY),
                    i.x < a.x - 1 ? i.x = a.x - 1 : i.x > a.x + 9 && (i.x = a.x + 9), i.y < a.y - this.wood.getR() - 2 ? i.y = a.y - this.wood.getR() - 2 : i.y > a.y && (i.y = a.y),
                    this.stick.transform.position = i;
            }
        }
        damoClick(t) {
            "main/10-09.png" != this.daMoBtn.skin && (this.changeGameSt(2), this.changetype("Sponge001"),
                this.damoSizeChange(.2), this.damoSilder.getComponent(p).setPross(.2), t.stopPropagation());
        }
        paintClick(t) {
            this.changeGameSt(3), this.currColor = d.getIns().colors[0], this.changetype("Brush"),
                this.paintList.refresh(), this.changePaintSize(.5), this.paintSilder.getComponent(p).setPross(.5),
                this.compareBtn.skin = "main/10-09.png", t.stopPropagation();
        }
        compareClick(t) {
            if ("main/10-09.png" == this.compareBtn.skin) return;
            this.changeGameSt(4);
            let e = this.wood.createImg();
            a.imgComarse(g.getIns().getImgByGateId(this.currGate), e, 500, 375, t => {
                    let s = h.getIns().getPassScore();
                    t > 95 && (t = 100), this.compareResult = t, this.comparePerTxt.text = "Similarity:0" + this.compareResult + "%",
                        this.compareTipImg.skin = d.getIns().getResultImg(t), this.compareProssImg.scaleX = 0,
                        e = null, Laya.Tween.to(this.compareProssImg, {
                            scaleX: t / 100,
                            update: new Laya.Handler(this, () => {
                                this.comparePerTxt.text = "Similarity:" + Math.floor(this.compareProssImg.scaleX * this.compareResult) + "%";
                            })
                        }, 1e3, null, new Laya.Handler(this, () => {
                            this.comparePerTxt.text = "Similarity:" + this.compareResult + "%";
                        })), t >= s && this.eff.play2();
                }), this.wood.transform.localRotationEulerZ = 90, this.wood.transform.localRotationEulerX = 0,
                this.wood.transform.position = new Laya.Vector3(-3, -1, -2), this.stick.transform.position = new Laya.Vector3(0, -100, 0);
            let s = a.get3DSpScenePos(this.wood.transform.position, this.mCamera),
                n = a.get3DSpScenePos(new Laya.Vector3(-3, -5, -2), this.mCamera).y - s.y;
            if (Laya.Browser.onQGMiniGame) {
                var o = i.getIns().sdkEnvironment.getSystemInfoSync(),
                    r = o.windowWidth / Laya.stage.width,
                    l = o.windowHeight / Laya.stage.height;
                this.compareImg.y = s.y / l - n / l, this.toolShapeImg2.scaleX = this.toolShapeImg2.scaleY = this.woodLen / r / 500;
            } else this.compareImg.scaleX = this.compareImg.scaleY = 2 * n / 500, this.compareImg.y = s.y - n;
            h.getIns().showWeiXinNorBanner();
        }
        compoeteClick(t) {
            console.log("aaacompoeteClicka");
            r.getIns().sceneOpen("ResultDialog.scene", !1, {
                result: this.compareResult,
                gate: this.currGate
            });
            t.stopPropagation();

            // Laya.Browser.onQGMiniGame ? r.getIns().sceneOpen("ResultDialogForOPPO.scene", !1,
            // {
            //     result: this.compareResult,
            //     gate: this.currGate
            // }) : (i.getIns().hideBanner(!1), h.getIns().zs_full_screen_jump() ? r.getIns().sceneOpen("FullSceneGames.scene", !1, {
            //     result: this.compareResult,
            //     gate: this.currGate
            // }) : , ;
        }
        onClick(t, e) {

            if (1 == t) r.getIns().sceneOpen("SkinDialog.scene");
            else if (2 == t) r.getIns().sceneOpen("SettingDialog.scene");
            else if (3 == t) this.start();
            else if (4 == t) {
                platform.getInstance().showInterstitial(() => {
                    r.getIns().sceneOpen("RankDialog.scene");
                })
            } else if (5 == t) {
                platform.getInstance().showInterstitial(() => {
                    this.changeGameSt(0);
                    let t = new Date().getTime();
                    t - this.showNativeAdTime > 1e4 && (this.showNativeAdTime = t, h.getIns().openNativeAdDialog());
                })
            } else 6 == t ? i.getIns().hasShortcutInstalled(function(t) {
                0 != t ? y.Ins.showMsgTip("快捷图标已经创建过了") : i.getIns().installShortcut(function() {
                    y.Ins.showMsgTip("快捷图标创建成功");
                });
            }) : 7 == t ? r.getIns().sceneOpen("MoreGameDialog.scene") : 8 == t && r.getIns().sceneOpen("FullSceneGames.scene");
            e.stopPropagation();





        }
        damoSizeChange(t) {
            2 == this.gameSt && (this.daMoSize = t, this.daMoSize < .1 && (this.daMoSize = .1),
                this.stick.transform.localScaleX = 8 * this.daMoSize);
        }
        cut(t) {
            this.changeGameSt(0), this.rest(t);
        }
        rest(t) {
            this.wood.transform.position = new Laya.Vector3(-4, 0, 0), this.wood.transform.localRotationEulerZ = 0,
                this.currGate = t >= 0 ? t : g.getIns().getGateByLevel2(o.getIns().level), this.wood.rest(),
                this.changetype("File001"), this.toolList.refresh(), this.stick.transform.position = new Laya.Vector3(0, -this.wood.getR() - this.offStickY, 0),
                this.gateTxt.text = "Level " + (this.currGate + 1), this.gateTxt2.text = "Level " + (this.currGate + 1),
                this.compareImg.skin = g.getIns().getImgByGateId(this.currGate);
        }
        initStick() {
            this.changetype("File001"), this.toolList.refresh();
        }
        changetype(t) {
            if (this.currStickName != t) {
                this.currStickName = t, this.stick && this.stick.parent && this.stick.removeSelf(),
                    this.stick = d.getIns().getModelByName(t), this.stick.transform.setWorldLossyScale(new Laya.Vector3(8, 8, 8));
                let e = "Sponge001" == t ? .7 : 0;
                this.stick.transform.position = new Laya.Vector3(0, -this.wood.getR() - this.offStickY - e, 0),
                    this.mScene3D.addChild(this.stick);
            }
            "File001" == t ? this.eff.changeSize(.1, .2) : "File002" == t ? this.eff.changeSize(.05, .1) : "File003" == t ? this.eff.changeSize(.08, .12) : "Sponge001" == t && this.eff.changeSize(.035, .06);
        }
        startCd(t, e) {
            this.gameSt = t, this.times = e, this.freshTimeTxt();
        }
        freshTimeTxt() {}
        cdComplete() {}
        changeGameSt(t) {
            this.gameSt = t, this.freshviewSt(), 0 == this.gameSt && this.rest(-1), 1 == this.gameSt ? this.updateShapeToolSp() : this.gameSt;
        }
        changePaintSize(t) {
            this.currPaintSize = t, this.currPaintSize < .1 && (this.currPaintSize = .1);
            let e = this.stick.getChildByName("BrushBone001");
            e && (e.getChildByName("BrushBone002").transform.localScale = new Laya.Vector3(1, this.currPaintSize, this.currPaintSize));
        }
        freshviewSt() {
            this.startSp.visible = this.isInGames([0]),
                this.toolSp.visible = this.isInGames([1]),

                this.yad_game.visible = this.isInGames([1]),
                this.damoSp.visible = this.isInGames([2]), this.paintSp.visible = this.isInGames([3]),
                this.compareSp.visible = this.isInGames([4]), this.toolShapeImg2.visible = this.isInGames([1]),
                this.shapeBg.visible = this.isInGames([1]), this.toolShapeImg.visible = this.isInGames([1]),
                this.returnBtn.visible = this.isInGames([1, 2, 3]), this.gateTxt2.visible = this.isInGames([1, 2, 3, 4]),
                this.moreBtn.visible = this.isInGames([0]) && h.getIns().zs_jump_switch(), this.moreBtn2.visible = this.isInGames([1, 2, 3]) && h.getIns().zs_jump_switch(),
                this.moreGameIcon.visible = !1, h.getIns().zs_full_screen_jump() && this.isInGames([1, 2, 3]) && (this.moreGameIcon.visible = !0),
                Laya.Browser.onMiniGame && this.isInGames([0]) && this.moreGame.getComponent(u).twMove();
        }
        updateShapeToolSp() {
            this.toolShapeImg.skin = g.getIns().getImgByGateId(this.currGate),


                this.toolShapeImg2.loadImage(g.getIns().getImgByGateId(this.currGate)),

                this.toolTipImg.visible = !0, this.daMoBtn.skin = "main/10-09.png", clearTimeout(this.settimeoutIndex),
                this.settimeoutIndex = setTimeout(() => {
                    this.toolTipImg.visible && (this.toolTipImg.visible = !1);
                }, 2e3);
        }
        isInGames(t = []) {
            return t.indexOf(this.gameSt) >= 0;
        }
        navigate2MiniCall() {
            h.getIns().fullSceneGameDialogIsOpen || h.getIns().zs_full_screen_jump() && r.getIns().sceneOpen("FullSceneGames.scene");
        }
        test() {
            let t = this.getChildByName("test");
            t && (t.visible = !1);
        }
    }
    class w extends Laya.Script {
        constructor() {
            super(), s.getIns().on("changeGold", this, this.updateUI);
        }
        onEnable() {
            this.updateUI();
        }
        updateUI() {
            this.owner.getChildByName("txt").text = o.getIns().gold;
        }
        onDisable() {}
    }
    class I extends Laya.Script {
        constructor() {
            super(), this.list = [], this.index = 0, this.step = 0;
        }
        onEnable() {
            this.list = h.getIns().getGameItems(), this.change();
        }
        change() {
            if (this.list.length) {
                this.index++, this.index >= this.list.length && (this.index = 0);
                let t = this.list[this.index];
                this.owner.getChildByName("icon").texture = t.app_icon, this.owner.getChildByName("nameTxt").text = t.app_title;
            }
        }
        onClick() {
            let t = this.list[this.index];
            t && i.getIns().navigate2Mini(t);
        }
        onUpdate() {
            this.step++, this.step > 0 && this.step % 120 == 0 && this.change();
        }
        onDisable() {}
    }
    class L extends Laya.Sprite {
        constructor(t, e, s, i = "#999999") {
            super(), this.color = "", this.maxR = e, this.num = s, this.color = i, this.setData(t);
        }
        setData(t) {
            this.shapeLen = parseInt(t[0]);
            let e = t.slice(1);
            this.createRs(e), this.drawShape();
        }
        drawShape() {
            let t = [],
                e = [],
                s = [];
            for (let t = 0; t < this.num; t++) null != this.Rs[t] && this.Rs[t] >= 0 && (0 == t ? (e.push(["moveTo", t, this.Rs[t]]),
                s.push(["lineTo", t, this.Rs[t]])) : (e.push(["lineTo", t, this.Rs[t]]), s.push(["lineTo", t, -this.Rs[t]])));
            s.reverse(), (t = e.concat(s)).push(["closePath"]), this.graphics.clear(), this.graphics.drawPath(0, 0, t, {
                fillStyle: this.color
            });
        }
        createRs(t) {
            let e;
            this.Rs = [];
            for (let s = 0; s < t.length; s++) e = t[s], this.createRsPiece(e, 0 == s);
        }
        createRsPiece(t, e) {
            let s = e ? 0 : this.Rs[t.start - 1];
            for (let e = t.start; e <= t.end; e++) this.Rs[e] = this.getR(t, s, e);
        }
        sinMethed(t, e) {
            return t * Math.sin(e);
        }
        getR(t, e, s) {
            let i = t.startR * this.maxR,
                n = t.endR * this.maxR,
                o = i;
            if (0 == t.method) {
                if (t.startR != t.endR) {
                    let e = a.getLineMethodParam(t.start, i, t.end, n);
                    o = e.k * s + e.b;
                }
            } else if (1 == t.method) {
                let e = s - t.start;
                o = a.getBerizPoint(e / (t.end - t.start), {
                    x: t.start,
                    y: i
                }, {
                    x: t.mid,
                    y: t.midR * this.maxR
                }, {
                    x: t.end,
                    y: n
                })[1];
            }
            return o;
        }
        getMethdStartX(t, e) {
            let s = 0;
            return s = Math.asin(e / t);
        }
        getShpaeCompare(t) {
            let e, s = 0,
                i = 0;
            for (let a = 0; a < t.length; a++) i++, t[a] && (s += e = (this.maxR - Math.abs(t[a] * this.maxR - this.Rs[a])) / this.maxR);
            let a = 0;
            return i > 0 && (a = s / this.num), a;
        }
    }
    class C extends t.GateEditorUI {
        constructor() {
            super(), this.isPopupCenter = !1, this.pieces = [], this.line = new Laya.Sprite(),
                this.pieceParnet = new Laya.Sprite(), this.pieceParnet.y = 200, this.pieceParnet.addChild(this.line),
                this.addChild(this.pieceParnet), this.methodCombo.selectHandler = new Laya.Handler(this, this.methodChange),
                this.numCombo.selectHandler = new Laya.Handler(this, this.numComboChange), this.okBtn.on(Laya.Event.CLICK, this, this.btnClick, [0]),
                this.addBtn.on(Laya.Event.CLICK, this, this.btnClick, [1]), this.delBtn.on(Laya.Event.CLICK, this, this.btnClick, [2]);
        }
        onEnable() {
            this.closeBtn.once(Laya.Event.CLICK, this, this.close);
        }
        onOpened(t) {
            this.woodCirclenum = t.num, this.woodLen = t.woodLen, this.tipTxt.text = "总长度:" + this.woodCirclenum + " 高度数据单位为百分比",
                this.shapeLen = parseInt(t.arr[0]), this.shapeLenInputTxt.text = "" + this.shapeLen,
                this.mR = t.r;
            let e = t.arr.slice(1);
            this.numCombo.labels = this.getNumLabels(e.length), this.selectIndex = 0, this.numCombo.selectedIndex = 0;
            let s = this.woodCirclenum > this.woodLen ? this.woodLen / this.woodCirclenum : 1;
            this.line.graphics.drawLine(0, 0, this.woodCirclenum, 0, "#999999", 2), this.pieceParnet.scaleX = s,
                this.pieceParnet.x = (Laya.stage.width - this.woodCirclenum * s) / 2, this.createPieces(e),
                this.shape || (this.shape = new L(t.arr, this.mR, this.woodCirclenum), this.shape.y = 500,
                    this.addChild(this.shape)), this.shape.x = (Laya.stage.width - this.woodCirclenum * s) / 2,
                this.shape.scaleX = s, this.freshSelect();
        }
        createPieces(t) {
            let e;
            for (let s = 0; s < t.length; s++)(e = new S(this.mR)).setData(t[s], this.woodCirclenum, s),
                this.pieceParnet.addChild(e), this.pieces.push(e);
        }
        methodChange() {
            console.log("methodChange", this.methodCombo.selectedIndex);
            let t = this.pieces[this.selectIndex];
            t.data != this.methodCombo.selectedIndex && (t.changeMethod(this.methodCombo.selectedIndex),
                this.showGateData());
        }
        numComboChange() {
            this.selectIndex != this.numCombo.selectedIndex && this.numCombo.selectedIndex >= 0 && (this.selectIndex = this.numCombo.selectedIndex,
                this.freshSelect());
        }
        btnClick(t) {
            let e;
            if (0 == t)(e = this.pieces[this.selectIndex]).changed(Number(this.startInput.text), Number(this.endInput.text), parseInt(this.lenInput.text), Number(this.midRInput.text)),
                this.refreshPieces();
            else if (1 == t) {
                if ((e = this.pieces[this.pieces.length - 1]).data.end >= this.woodCirclenum) return void y.Ins.showMsgTip("已无增加位置，请移除最后一段或编辑各段长度", this); {
                    let t = {
                            start: e.data.end + 1,
                            end: this.woodCirclenum,
                            startR: .8,
                            endR: .8,
                            method: 0
                        },
                        s = new S(this.mR);
                    s.setData(t, this.woodCirclenum, this.pieces.length), this.pieceParnet.addChild(s),
                        this.pieces.push(s), this.selectIndex = this.pieces.length - 1, this.refreshPieces();
                }
            } else if (2 == t) {
                if (this.pieces.length < 2) return void y.Ins.showMsgTip("最少保留一段", this);
                e = this.pieces[this.selectIndex], this.remove(e);
            }
        }
        freshSelect() {
            let t = this.pieces[this.selectIndex];
            this.posTxt.text = "位置：" + this.selectIndex, this.startInput.text = t.data.startR,
                this.endInput.text = t.data.endR, this.midRInput.text = t.data.midR, this.lenInput.text = "" + t.data.end,
                this.methodCombo.selectedIndex = t.data.method, this.showGateData();
        }
        refreshPieces() {
            this.pieces.sort(function(t, e) {
                return t.data.start < e.data.start ? -1 : t.data.start < e.data.start ? 1 : 0;
            });
            let t = 0,
                e = [];
            for (let s = 0; s < this.pieces.length; s++)
                if (s > 0 && (t = this.pieces[s - 1].data.end), !this.pieces[s].freshData(s, t)) {
                    e = this.pieces.splice(s, this.pieces.length - s);
                    break;
                }
            if (e.length) {
                for (let t = 0; t < e.length; t++) e[t].removeSelf(), e[t] = null;
                e = null;
            }
            this.numCombo.labels = this.getNumLabels(this.pieces.length), this.numCombo.selectedIndex = this.selectIndex,
                this.freshSelect();
        }
        remove(t) {
            let e = this.pieces.indexOf(t);
            e >= 0 && this.pieces.splice(e, 1), t.removeSelf(), t = null, this.selectIndex = 0,
                this.refreshPieces();
        }
        showGateData() {
            let t, e = "[" + this.shapeLenInputTxt.text + ",",
                s = [parseInt(this.shapeLenInputTxt.text)];
            for (let i = 0; i < this.pieces.length; i++) t = this.pieces[i].getDataStr(), e += 0 == i ? t : "," + t,
                s.push(this.pieces[i].data);
            e += "]", this.gateTxt.text = e, this.shape.setData(s);
        }
        getNumLabels(t) {
            let e = "";
            for (let s = 0; s < t; s++) e ? e += "," + s : e = "" + s;
            return e;
        }
        clear() {
            for (let t = 0; t < this.pieces.length; t++) this.pieces[t].removeSelf(), this.pieces[t] = null;
            this.pieces = [];
        }
    }
    class S extends Laya.Sprite {
        constructor(t, e = null) {
            super(), this.index = 0, this.mR = t, this.func = e, this.init(), this.on(Laya.Event.CLICK, this, this.click);
        }
        setData(t, e, s) {
            this.data = {}, a.copyForm(this.data, t), this.maxX = e, this.index = s, this.drawP(),
                this.freshPos();
        }
        freshData(t, e) {
            this.index = t;
            let s = e ? e + 1 : 0,
                i = this.data.end;
            return i < s && (i = s + 4), i > this.maxX && (i = this.maxX), this.data.start = s,
                this.data.end = i, this.freshPos(), s < this.maxX;
        }
        changed(t, e, s, i) {
            s <= this.data.start || s > this.maxX ? y.Ins.showMsgTip("结束点位置数据不对", this) : (this.data.startR = t,
                this.data.endR = e, this.data.end = s, 1 == this.data.method && i && (this.data.midR = i),
                this.drawP());
        }
        chagneStartR(t) {
            this.data.startR = t, this.drawP();
        }
        chagneEndR(t) {
            this.data.endR = t, this.drawP();
        }
        chagneMidR(t) {
            this.data.midR = t, this.drawP();
        }
        changeMethod(t) {
            this.data.method = t, 1 == t && (this.data.midR || (this.data.midR = .5)), this.drawP();
        }
        drawP() {
            let t = this.getColor(this.index);
            this.p2.graphics.clear();
            let e = this.mR * this.data.endR;
            this.p2.graphics.drawRect(-2, -e, 4, 2 * e, t), this.p2.x = this.data.end - this.data.start,
                this.p1.graphics.clear(), this.p1.graphics.drawCircle(0, 0, 2, t), console.log("drawP", this.p2.x, this.p2.y, e);
        }
        freshPos() {
            this.x = this.data.start;
        }
        init() {
            this.p1 = new Laya.Sprite(), this.addChild(this.p1), this.p2 = new Laya.Sprite(),
                this.addChild(this.p2);
        }
        getColor(t) {
            let e = "#ff0000";
            return 1 == t ? e = "#00ff00" : 2 == t ? e = "#0000ff" : 3 == t ? e = "#ffff00" : 4 == t ? e = "#2F4F4F" : 5 == t ? e = "#191970" : 6 == t ? e = "#483D8B" : 7 == t ? e = "#00BFFF" : 8 == t ? e = "#2E8B57" : 9 == t ? e = "#BC8F8F" : 10 == t && (e = "#FF00FF"),
                e;
        }
        click() {
            this.func && this.func(this.index);
        }
        getDataStr() {
            let t = "{";
            return t += "start:" + this.data.start + ",", t += "end:" + this.data.end + ",",
                t += "startR:" + this.data.startR + ",", t += "endR:" + this.data.endR + ",", t += "method:" + this.data.method,
                1 == this.data.method && (t += ",midR:" + this.data.midR), t += "}";
        }
        onDestroy() {
            this.off(Laya.Event.CLICK, this, this.click);
        }
    }
    class v extends t.MoreGameDialogUI {
        constructor() {
            super(), this.listdata = [], this.list.renderHandler = new Laya.Handler(this, this.renderrr),
                this.list.mouseHandler = new Laya.Handler(this, this.itemhander), this.isPopupCenter = !1;
        }
        onEnable() {
            this.closeBtn.once(Laya.Event.CLICK, this, this.close), this.listdata = h.getIns().getGameItems(!1),
                this.list.array = this.listdata, a.twMoveList(this.list);
        }
        renderrr(t, e) {
            let s = this.listdata[e];
            if (s) {
                t.getChildByName("icon").skin = s.app_icon, s.app_title && t.getChildByName("nameTxt") && (t.getChildByName("nameTxt").text = s.app_title);
            }
        }
        itemhander(t, e) {
            if (t.type == Laya.Event.CLICK) {
                let t = this.listdata[e];
                i.getIns().navigate2Mini(t);
            }
        }
    }
    class x extends Laya.Script {
        constructor() {
            super(), this.alp = .5, this.color = "#000000";
        }
        onEnable() {
            if (this.bg = this.owner.getChildByName("DialogColorBg_bg"), !this.bg) {
                this.bg = new Laya.Sprite();
                let t = "main/backBg.png";
                this.bg.texture = t, this.bg.height = Laya.stage.height, this.owner.addChildAt(this.bg, 0);
            }
        }
        onDisable() {}
    }
    class B extends t.NativeAdDialogUI {
        constructor() {
            super(), this.icon.on(Laya.Event.CLICK, this, this.nativeAdClick), this.closeBtn.on(Laya.Event.CLICK, this, this.closeClick),
                this.goBtn.on(Laya.Event.CLICK, this, this.goClick), this.isPopupCenter = !1;
        }
        onOpened(t) {
            this.nativeData = t, this.nativeData && (this.icon.skin = this.nativeData.imgUrlList[0],
                    this.titleTxt.text = this.nativeData.desc, i.getIns().reportAdShow(this.nativeData)),
                this.goBtn.skin = "main/3-14.png", o.getIns().nativeAdClickTimes++, o.getIns().save(),
                i.getIns().hideBanner();
        }
        nativeAdClick() {
            this.nativeData && i.getIns().reportAdClick(this.nativeData), this.closeClick();
        }
        closeClick() {
            i.getIns().showBanner(1080, 1800), this.close(), Laya.Browser.onQGMiniGame && i.getIns().showBanner(0, 0, !0);
        }
        goClick() {
            this.closeClick();
        }
    }
    class k extends t.RankDialogUI {
        constructor() {
            super(), this.isPopupCenter = !1;
        }
        onEnable() {
            this.closeBtn.once(Laya.Event.CLICK, this, this.close), i.getIns().sendWxMsg({
                type: "show"
            });
        }
    }
    class R extends t.ResultDialogUI {
        constructor() {
            super(), this.isPopupCenter = !1,
                this.passBtn.on(Laya.Event.CLICK, this, this.passClick),
                this.closeBtn.once(Laya.Event.CLICK, this, this.closeClick);
        }
        onEnable() {
            this.btnMove();
        }
        onOpened(t) {
            let e = t.result,
                s = e + "%";
            this.resultTxt.text = "Similarity:" + e;
            let a = 1;
            this.win = !1;
            let n = h.getIns().getPassScore(),
                r = t.gate;

            e >= n && (a = 1.5, this.win = !0, r >= o.getIns().level && (o.getIns().levelup())),
                o.getIns().setGatePorss(r, e), this.gold = Math.floor(e * a), this.gold < 1 && (this.gold = 1),
                this.scoreTxt.text = "" + this.gold,
                this.resultTxt.text = this.win ? "Your similarity achieved " + s : "The similarity is too low, only " + s,
                this.titleImg.texture = this.getTitleImg(this.win);
            // let l = i.getIns().getvideoId() ? "main/3-04.png" : "main/3-07.png";

            this.passBtn.skin = "main/3-04.png";

            this.list.renderHandler = new Laya.Handler(this, this.onRender_)

            this.list.array = platform.getInstance().getForgames();
        }

        onRender_(c) {
            c.offAll(Laya.Event.MOUSE_DOWN);
            c.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().navigate("GAME", "MORE", c.dataSource.id);
            });
        }
        addGold(t, e = 1) {
            let i = Math.floor(t * e);
            o.getIns().addGold(i), this.goldSp.getComponent(w).updateUI(), s.getIns().event("changeGold");
        }
        passClick() {

            platform.getInstance().showReward(() => {
                this.closeClick(1);
            });

            // let t = this;
            // "main/3-04.png" == this.passBtn.skin ? i.getIns().showAd(e => {
            //     0 == e ? this.closeClick(1) : 1 == e ? y.Ins.showMsgTip("观看完整视频才能多倍领取", t) : y.Ins.showMsgTip("视频正在处理中", t);
            // }) : this.closeClick();
        }
        closeClick(t = null) {
            let e = 2 == t ? 10 : 0;
            if (s.getIns().event("changeGameSt", e), 2 != t) {
                let e = 1 == t ? 3 : 1;
                this.addGold(this.gold, e);
            }
            this.close();
        }
        getTitleImg(t) {
            let e = "main/5-15.png";
            return t || (e = "main/3-02.png"), e;
        }
        btnMove() {
            if (h.getIns().zs_banner_vertical_enable()) {
                this.downBtns.y = Laya.stage.height - 190;
                let t = h.getIns().zs_banner_text_time();
                setTimeout(() => {
                    this.parent && h.getIns().showWeiXinNorBanner();
                }, t - 100), Laya.Tween.to(this.downBtns, {
                    y: 856
                }, 700, null, new Laya.Handler(this, () => {}), t);
            } else Laya.Browser.onMiniGame && h.getIns().showWeiXinNorBanner();
        }
        onDisable() {
            Laya.Browser.onQGMiniGame && i.getIns().showBanner(0, 0, !0), Laya.Browser.onMiniGame && i.getIns().hideBanner();
        }
    }
    class M extends t.ResultDialogForOPPOUI {
        constructor() {
            super(), this.isPopupCenter = !1, this.passBtn.on(Laya.Event.CLICK, this, this.passClick),
                this.closeBtn.once(Laya.Event.CLICK, this, this.closeClick);
        }
        onEnable() {}
        onOpened(t) {
            let e = t.result,
                s = e + "%";
            this.resultTxt.text = "Similarity:" + e;
            let a = 1;
            this.win = !1;
            let n = h.getIns().getPassScore(),
                r = t.gate;
            e >= n && (a = 1.5, this.win = !0, r >= o.getIns().level && (o.getIns().levelup(),
                    i.getIns().setUserCloudStorage({
                        value1: r
                    }))), o.getIns().setGatePorss(r, e), this.gold = Math.floor(e * a), this.gold < 1 && (this.gold = 1),
                this.scoreTxt.text = "" + this.gold, this.resultTxt.text = this.win ? "Your similarity achieved " + s : "The similarity is too low, only " + s,
                this.titleImg.texture = this.getTitleImg(this.win);
            let l = i.getIns().getvideoId() ? "main/3-04.png" : "main/3-07.png";
            if (this.win && (l = i.getIns().getvideoId() ? "main/3-04.png" : "main/3-06.png"),
                this.passBtn.skin = l, h.getIns().openNativeAdDialog(), this.moreGameSp.visible = h.getIns().zs_jump_switch(),
                this.moreGameSp.visible) {
                let t = h.getIns().getGameItems(!1);
                this.moreGameSp.getComponent(u).setData(t, !1);
            }
        }
        addGold(t, e = 1) {
            let i = Math.floor(t * e);
            o.getIns().addGold(i), this.goldSp.getComponent(w).updateUI(), s.getIns().event("changeGold");
        }
        passClick() {
            let t = this;
            "main/3-04.png" == this.passBtn.skin ? i.getIns().showAd(e => {
                0 == e ? this.closeClick(1) : 1 == e ? y.Ins.showMsgTip("观看完整视频才能多倍领取", t) : y.Ins.showMsgTip("视频正在处理中", t);
            }) : this.closeClick();
        }
        closeClick(t = null) {
            let e = 2 == t ? 10 : 0;
            if (s.getIns().event("changeGameSt", e), 2 != t) {
                let e = 1 == t ? 3 : 1;
                this.addGold(this.gold, e);
            }
            this.close(), h.getIns().zs_full_screen_jump() ? r.getIns().sceneOpen("FullSceneGames.scene") : h.getIns().openNativeAdDialog(1);
        }
        getTitleImg(t) {
            let e = "main/5-15.png";
            return t || (e = "main/3-02.png"), e;
        }
        onDisable() {
            i.getIns().showBanner(0, 0, !0);
        }
    }
    class b extends t.SettingDialogUI {
        constructor() {
            super(), this.musicBtn.on(Laya.Event.CLICK, this, this.clickHanlder, [1]),
                //  this.rockBtn.on(Laya.Event.CLICK, this, this.clickHanlder, [ 2 ]), 
                this.isPopupCenter = !1;
        }
        clickHanlder(t) {
            1 == t ? (i.getIns().miuseSelected = !i.getIns().miuseSelected, i.getIns().miuseSelected ? i.getIns().playBgMiuse() : i.getIns().stopMiuse()) : 2 == t && (i.getIns().canShake = !i.getIns().canShake),
                this.updateUI();
        }
        onEnable() {
            this.closeBtn.once(Laya.Event.CLICK, this, this.close), this.updateUI(), h.getIns().showWeiXinNorBanner();
        }
        updateUI() {
            this.musicBtn.skin = i.getIns().miuseSelected ? "main/9-04.png" : "main/9-05.png";
            // this.rockBtn.skin = i.getIns().canShake ? "main/9-04.png" : "main/9-05.png";
        }
        onDisable() {
            Laya.Browser.onMiniGame && i.getIns().hideBanner();
        }
    }
    class G extends t.SkinDialogUI {
        constructor() {
            super(), this.selectIndex = 0, this.shapeScale = .3, this.list.renderHandler = new Laya.Handler(this, this.renderr),
                this.list.mouseHandler = new Laya.Handler(this, this.mousClick), this.selectBtn.on(Laya.Event.CLICK, this, this.cutClick),
                this.videoBtn.on(Laya.Event.CLICK, this, this.adClick);
        }
        renderr(t, e) {
            t.dataSource;
            let s = o.getIns().getGatePross(e),
                i = s > 0 ? s + "%" : "unfinished";
            t.getChildByName("icon").skin = g.getIns().getImgByGateId(e), t.getChildByName("icon").filters = s > 0 ? a.createColorFilter(0, 1) : a.createColorFilter(),
                t.getChildByName("porssTxt").text = i, t.getChildByName("porssTxt").strokeColor = s > 0 ? "#00a008" : "#666666",
                t.getChildByName("selectImg").visible = this.selectIndex == e;
        }
        mousClick(t, e) {
            t.type == Laya.Event.CLICK && (this.selectIndex = e, this.list.refresh(), this.freshSelectInfo());
        }
        freshSelectInfo() {
            let t = this.list.array[this.selectIndex],
                e = o.getIns().isUnlock(t.id) ? 50 : 200;
            this.selectBtn.label = e + " cut it";
        }
        cutClick(t) {
            let e = this.list.array[this.selectIndex],
                i = o.getIns().isUnlock(e.id) ? 50 : 200;
            if (o.getIns().gold >= i) {
                s.getIns().event("cut", e.id);
                this.addGold(-i);
                this.close()
            } else {
                y.Ins.showMsgTip("Coin is not enough", this)
            }
        }
        adClick(t) {
            platform.getInstance().showReward(() => {
                this.addGold(200);
            });
            // i.getIns().showAd(t => {
            //     0 == t ? this.addGold(200) : 1 == t ? y.Ins.showMsgTip("观看完整视频才能获得金币", this) : y.Ins.showMsgTip("视频正在处理中", this);
            // });
        }
        addGold(t) {
            o.getIns().addGold(t), s.getIns().event("changeGold");
        }
        onEnable() {
            this.closeBtn.once(Laya.Event.CLICK, this, this.close);
            let t = g.getIns().getGates();
            this.list.array = t, this.freshSelectInfo(), h.getIns().showWeiXinNorBanner();
        }
        onDisable() {
            Laya.Browser.onMiniGame && i.getIns().hideBanner();
        }
    }
    class D extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            this.owner.getChildByName("icon").on(Laya.Event.CLICK, this, this.nativeAdClick),
                this.owner.getChildByName("closeBtn").on(Laya.Event.CLICK, this, this.closeClick),
                this.owner.getChildByName("goBtn").on(Laya.Event.CLICK, this, this.goClick);
        }
        setData(t) {
            this.nativeData = t, this.owner.visible = !!t, this.nativeData && (this.owner.getChildByName("icon").skin = this.nativeData.imgUrlList[0]),
                this.owner.getChildByName("goBtn").skin = h.getIns().zs_native_click_switch() ? "main/3-13.png" : "main/3-14.png";
        }
        nativeAdClick() {
            this.nativeData && i.getIns().reportAdClick(this.nativeData), console.log("nativeAdClick", this.nativeData.adId),
                this.closeClick();
        }
        closeClick() {
            this.owner.visible = !1, i.getIns().showBanner(1080, 1800);
        }
        goClick() {
            h.getIns().zs_native_click_switch() ? this.nativeAdClick() : this.closeClick();
        }
        onDisable() {
            this.owner.getChildByName("icon").off(Laya.Event.CLICK, this, this.nativeAdClick),
                this.owner.getChildByName("closeBtn").off(Laya.Event.CLICK, this, this.closeClick);
        }
    }
    class _ {
        constructor() {}
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("scripts/FullSceneGameDialog.ts", l), t("scripts/GameScene.ts", f), t("scripts/MoreGame1.ts", u),
                t("scripts/GoldSp.ts", w), t("scripts/ProssSp.ts", p), t("scripts/MoreGameIcon.ts", I),
                t("scripts/GateEditor.ts", C), t("scripts/MoreGameDialog.ts", v), t("scripts/DialogColorBg.ts", x),
                t("scripts/NativeAdDialog.ts", B), t("scripts/RankDialog.ts", k), t("scripts/ResultDialog.ts", R),
                t("scripts/ResultDialogForOPPO.ts", M), t("scripts/SettingDialog.ts", b), t("scripts/SkinDialog.ts", G),
                t("scripts/NativeAd2.ts", D);
        }
    }
    _.width = 720, _.height = 1280, _.scaleMode = "fixedwidth", _.screenMode = "none",
        _.alignV = "top", _.alignH = "left", _.startScene = "GameScene.scene", _.sceneRoot = "",
        _.debug = !1, _.stat = !1, _.physicsDebug = !1, _.exportSceneToJson = !0, _.init();
    class E extends Laya.Sprite {
        constructor() {
            super(), this.W = 500, this.initbg(), this.addImgs();
        }
        initbg() {
            this.graphics.drawRect(-400, -600, 1500, 2600, 14193497);
        }
        addImgs() {
            this.bg = new Laya.Image("main/1-01.png"), this.bg.width = 720, this.bg.height = 1280,
                this.addChild(this.bg), this.prossBg = new Laya.Image("load/prossbg.png"), this.prossBg.width = this.W,
                this.prossBg.height = 20, this.prossBg.x = (720 - this.W) / 2, this.prossBg.y = 894,
                this.addChild(this.prossBg), this.pross = new Laya.Image("load/pross.png"), this.pross.width = 1,
                this.pross.height = 20, this.pross.x = (720 - this.W) / 2, this.pross.y = 894, this.addChild(this.pross),
                this.txt = new Laya.Label(), this.txt.fontSize = 40, this.txt.align = "center",
                this.txt.width = 500, this.txt.color = "#ffffff", this.txt.font = "Microsoft YaHei",
                this.txt.bold = !0, this.txt.y = 950, this.txt.text = "Loading...", this.txt.x = 110,
                this.addChild(this.txt);
        }

        onComplete(onCompleteCallback) {
            let yad = new Laya.Image("common/yad.png");
            yad.centerX = 0;
            yad.bottom = 100;
            yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                platform.getInstance().navigate("Loading", "LOGO");
            });
            yad.zOrder = 1e3;
            this.bg.addChild(yad);

            Laya.Tween.to(this.pross, {
                width: 500
            }, 2e3, null, Laya.Handler.create(this, () => {
                onCompleteCallback && onCompleteCallback();
            }));
        }

        update(t) {
            let e = t / 100;
            e > 1 && (e = 1), this.pross.width = this.W * e;
        }
        disposeed() {
            this.bg.destroy(), this.prossBg.destroy(), this.pross.destroy(), this.bg = null,
                this.prossBg = null, this.pross = null, this.removeSelf();
        }
    }
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(_.width, _.height) : Laya.init(_.width, _.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT,
                Laya.stage.alignV = _.alignV,
                Laya.stage.alignH = "center",
                Laya.URL.exportSceneToJson = _.exportSceneToJson,
                (_.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                _.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), _.stat && Laya.Stat.show(),
                Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json",
                    Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        loadSubPack() {
            this.loading = new E();
            Laya.stage.addChild(this.loading);
            // YYGGames.on(YYG.Event.YYGSDK_INITIALIZED,this,()=>
            // {
            //     platform.getInstance();
            //     this.loading.onComplete(()=>{
            //         this.loadData();
            //     })

            // });
            // let o = new YYG.Options();
            // o.gameNameId = "Wood-Shop";
            // o.gamedistributionID = "";
            // YYGSDK.__init__(YYG.ChannelType.YAD,o);

            platform.getInstance().yadstartup("Wood-Shop", () => {
                this.loading.onComplete(() => {
                    this.loadData();
                })
            })

        }
        loadData() {
            i.getIns().getStorage(t => {
                o.getIns().copyFrom(t), this.loadconmfig(() => {
                    this.loadConfigSucess = !0, this.hasGo || this.go();
                }), setTimeout(() => {
                    this.loadConfigSucess || (this.go(), this.hasGo = !0);
                }, 3e3);
            });
        }
        loadconmfig(t) {
            Laya.Browser.onQGMiniGame ? window.zs.sdk.loadAd(e => {
                h.getIns().moreGameData = e, window.zs.sdk.loadConfig(e => {
                    console.log("sucess", e), h.getIns().threeConfig = e, t();
                }, () => {
                    console.log("fail");
                });
            }) : Laya.Browser.onMiniGame && zs.sdk.loadAd(e => {
                console.log("sucess3", e), h.getIns().moreGameData = e, i.getIns().getWeiXinCfg(e => {
                    h.getIns().threeConfig = e, console.log("getWeiXinCfg", h.getIns().threeConfig),
                        t();
                });
            });
        }
        go() {
            _.startScene && Laya.Scene.open(_.startScene), this.loading && (this.loading.disposeed(),
                this.loading = null), this.loadOpenData(), i.getIns().getOpenId();
        }
        onConfigLoaded() {
            this.loadSubPack();
        }
        loadOpenData() {
            Laya.Browser.onMiniGame && Laya.loader.load(["res/atlas/rank.atlas"], Laya.Handler.create(null, function() {
                Laya.MiniAdpter.sendAtlasToOpenDataContext("res/atlas/rank.atlas");
            }));
        }
    }();
}();