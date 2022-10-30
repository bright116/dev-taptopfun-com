! function() {
    "use strict";
    const e = Laya.SoundManager,
        t = {
            bgmIndex: 1,
            _bgmOn: void 0,
            _effectOn: void 0,
            _inited: !1,
            _secCount: 0,
            onLoad: function() {
                t._inited = !0, t.playBgm(), wx.onShow(t.playBgm), wx.onAudioInterruptionEnd(t.playBgm),
                    setInterval(() => {
                        t._secCount = 0;
                    }, 1e3);
            },
            getBgmOn: function() {
                if (t._inited) return void 0 === t._bgmOn && (t._bgmOn = "0" === wx.getStorageSync("bgmOn") ? 0 : 1),
                    t._bgmOn;
            },
            getEffectOn: function() {
                if (t._inited) return void 0 === t._effectOn && (t._effectOn = "0" === wx.getStorageSync("effectOn") ? 0 : 1),
                    t._effectOn;
            },
            enableBgm: function() {
                t._inited && (t._bgmOn = 1, t.playBgm(), wx.setStorage({
                    key: "bgmOn",
                    data: "1"
                }));
            },
            disableBgm: function() {
                t._inited && (t._bgmOn = 0, t.stopBgm(), wx.setStorage({
                    key: "bgmOn",
                    data: "0"
                }));
            },
            enableEffect: function() {
                t._inited && (t._effectOn = 1, wx.setStorage({
                    key: "effectOn",
                    data: "1"
                }));
            },
            disableEffect: function() {
                t._inited && (t._effectOn = 0, t.stopAllEffect(), wx.setStorage({
                    key: "effectOn",
                    data: "0"
                }));
            },
            playBgm: function() {
                if (t._inited && t.getBgmOn()) {
                    let t = "sounds/bgm.mp3";
                    e.playMusic(t, 0);
                }
            },
            stopBgm: function() {
                t._inited && e.stopMusic();
            },
            playEffect: function(a, i = 1, s = !0) {
                t._inited && a && t.getEffectOn() && (a = "sounds/" + a, s && e.stopSound(a), e.playSound(a, i));
            },
            stopEffect: function(a) {
                t._inited && a && (a = "sounds/" + a, e.stopSound(a));
            },
            stopAllEffect: function() {
                t._inited && e.stopAllSound();
            },
            playButton: function() {
                t._inited && t.playEffect("button.mp3");
            }
        };



    class a extends Laya.Script {
        constructor() {
            super(), this.enabled = !0, this.animation = !0, this.sound = !0, this.dotName = "";
        }
        onEnable() {
            this.owner.stateNum = 1, this.owner.setEnable = this.setEnable.bind(this), this.originScaleX = this.owner.scaleX,
                this.originScaleY = this.owner.scaleY;
        }
        setEnable(e) {
            this.owner.mouseEnabled = e;
        }
        onMouseDown(e) {
            e.stopPropagation(), this.animation && (this.owner.scaleX = .9 * this.originScaleX,
                this.owner.scaleY = .9 * this.originScaleY, this.sound && t.playButton(), this.dotName && this.dotName,
                this.owner.click && this.owner.click()), wx.vibrateShort();
        }
        onMouseUp() {
            this.owner.scaleX = this.originScaleX, this.owner.scaleY = this.originScaleY;
        }
        onMouseOut() {
            this.owner.scaleX = this.originScaleX, this.owner.scaleY = this.originScaleY;
        }
    }
    const i = {
            VERSION: 125,
            SWITCH_PROD: "harvest",
            SWITCH_DEV: "harvest_new",
            APP_ID: "wx4d0b920de54187b9",
            BOX_AD_APP: ["wx3df1cf2a43a6b16d", "wx19fe122baf8d8038", "wx7c5746de6a1ec260", "wx7a4523bc52c9f92a", "wx1abdfd4b29462a97"],
            openId: "",
            AD_ID: {
                VIDEO: "adunit-72ebf218f7172ee1",
                BANNER: ["adunit-f03cd295674b42d5", "adunit-05ee9998abb9bf00", "adunit-faad575aad3653ce"],
                FAKE_BANNER: ["adunit-6f9e21570e343fc0", "adunit-5b6f54c77e925141"],
                GAMEBANNER: ["PBgAAgih3ZCXx3rE"],
                GAMEICON: ["PBgAAgih3ZCa1iEs", "PBgAAgih3ZCcFSag", "PBgAAgih3ZCBbcM4"],
                PAGE: [""],
                ZHISE: "Vo6QcSADue7WrP5P"
            },
            AD_APP_ID: ["wx6b8c89ec0be2634e", "wxb7c846a59c2c3290", "wx10fc484302a32412", "wxb97ef34e6ec17e68", "wx863a58ff6a6ef427", "wxb06d72c468ade27a", "wx3b79a9b90a9b8898", "wxe77f4c9380e02c00", "wxd0fed2d7f7112e5f", "wx0de354ac28c03703"],
            skin: [{
                mesh: "car1",
                mat: "car_1_1",
                color: new Laya.Vector3(.831, .226, .125)
            }, {
                mesh: "car1",
                mat: "car_1_2",
                color: new Laya.Vector3(.165, .78, .341)
            }, {
                mesh: "car1",
                mat: "car_1_3",
                color: new Laya.Vector3(.05, .541, .949)
            }, {
                mesh: "car1",
                mat: "car_1_4",
                color: new Laya.Vector3(.459, .372, .96)
            }, {
                mesh: "car2",
                mat: "car_2_1",
                color: new Laya.Vector3(.02, 1, .976)
            }, {
                mesh: "car2",
                mat: "car_2_2",
                color: new Laya.Vector3(.831, .226, .125)
            }, {
                mesh: "car2",
                mat: "car_2_3",
                color: new Laya.Vector3(.831, .226, .125)
            }, {
                mesh: "car3",
                mat: "car_3",
                color: new Laya.Vector3(.831, .226, .125)
            }, {
                mesh: "car4",
                mat: "car_4",
                color: new Laya.Vector3(.02, 1, .976)
            }, {
                mesh: "car5",
                mat: "car_5",
                color: new Laya.Vector3(.05, .541, .949)
            }, {
                mesh: "car6",
                mat: "car_6_1",
                color: new Laya.Vector3(.831, .226, .125)
            }, {
                mesh: "car6",
                mat: "car_6_2",
                color: new Laya.Vector3(.459, .372, .96)
            }, {
                mesh: "car6",
                mat: "car_6_3",
                color: new Laya.Vector3(.02, 1, .976)
            }, {
                mesh: "car7",
                mat: "car_7_1",
                color: new Laya.Vector3(.459, .372, .96)
            }, {
                mesh: "car7",
                mat: "car_7_2",
                color: new Laya.Vector3(.165, .78, .341)
            }, {
                mesh: "car7",
                mat: "car_7_3",
                color: new Laya.Vector3(.05, .541, .949)
            }, {
                mesh: "car7",
                mat: "car_7_4",
                color: new Laya.Vector3(.165, .78, .341)
            }, {
                mesh: "car8",
                mat: "car_8_1",
                color: new Laya.Vector3(.165, .78, .341)
            }, {
                mesh: "car8",
                mat: "car_8_2",
                color: new Laya.Vector3(.05, .541, .949)
            }, {
                mesh: "car8",
                mat: "car_8_3",
                color: new Laya.Vector3(.831, .226, .125)
            }, {
                mesh: "car9",
                mat: "car_9",
                color: new Laya.Vector3(.831, .226, .125)
            }, {
                mesh: "car10",
                mat: "car_10",
                color: new Laya.Vector3(.05, .541, .949)
            }, {
                mesh: "car11",
                mat: "car_11_1",
                color: new Laya.Vector3(.02, 1, .976)
            }, {
                mesh: "car11",
                mat: "car_11_2",
                color: new Laya.Vector3(.831, .226, .125)
            }],
            levelConfig: [
                [{
                    x: 0,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    left: 1
                }, {
                    x: 4,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    bottom: 1,
                    right: 1
                }, {
                    x: 0,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    bottom: 1
                }, {
                    x: 4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    right: 1,
                    top: 1
                }],
                [{
                    x: 0,
                    y: 0,
                    crop: "grass1",
                    size: 20
                }, {
                    x: 4,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    right: 1,
                    bottom: 1
                }, {
                    x: 0,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    bottom: 1
                }, {
                    x: -4,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    bottom: 1,
                    left: 1
                }, {
                    x: -4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    left: 1
                }, {
                    x: 4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    right: 1
                }, {
                    x: -4,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    top: 1
                }, {
                    x: 0,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    top: 1
                }, {
                    x: 4,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    right: 1
                }],
                [{
                    x: 0,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    right: 1
                }, {
                    x: 0,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    bottom: 1
                }, {
                    x: -4,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    bottom: 1,
                    left: 1
                }, {
                    x: 4,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    bottom: 1,
                    right: 1
                }, {
                    x: 0,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    top: 1
                }, {
                    x: -4,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    bottom: 1,
                    top: 1
                }, {
                    x: 4,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    right: 1,
                    top: 1,
                    bottom: 1
                }],
                [{
                    x: 0,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    top: 1
                }, {
                    x: 8,
                    y: 8,
                    crop: "grass1",
                    size: 20,
                    bottom: 1,
                    right: 1
                }, {
                    x: 4,
                    y: 8,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    bottom: 1
                }, {
                    x: 0,
                    y: 8,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    bottom: 1
                }, {
                    x: 0,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    right: 1
                }, {
                    x: 8,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    right: 1
                }, {
                    x: 4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    bottom: 1,
                    top: 1
                }, {
                    x: 8,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    right: 1
                }],
                [{
                    x: 0,
                    y: 0,
                    crop: "grass1",
                    size: 20
                }, {
                    x: -4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    bottom: 1,
                    left: 1
                }, {
                    x: 4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    right: 1,
                    bottom: 1
                }, {
                    x: 0,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    bottom: 1,
                    left: 1,
                    right: 1
                }, {
                    x: 0,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    left: 1,
                    right: 1
                }],
                [{
                    x: 0,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    bottom: 1
                }, {
                    x: 4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    right: 1
                }, {
                    x: -4,
                    y: 0,
                    crop: "grass1",
                    size: 20,
                    left: 1
                }, {
                    x: -4,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    left: 1,
                    right: 1
                }, {
                    x: -4,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    right: 1,
                    bottom: 1
                }, {
                    x: 4,
                    y: -4,
                    crop: "grass1",
                    size: 20,
                    top: 1,
                    left: 1,
                    right: 1
                }, {
                    x: 4,
                    y: 4,
                    crop: "grass1",
                    size: 20,
                    left: 1,
                    right: 1,
                    bottom: 1
                }]
            ]
        },
        s = {
            gameData: {
                level: 0,
                skin: 0,
                unlockSkin: 0,
                coin: 0,
                moveSpeed: 100,
                upgradeSpeed: 100,
                coinPlus: 100,
                moveSpeedCost: 100,
                upgradeSpeedCost: 100,
                coinPlusCost: 100
            }
        },
        n = {
            _instance: null,
            _isReady: !1,
            _closeCallback: null,
            _reloadTimer: null,
            init: () => {
                if (!wx.createRewardedVideoAd) return;
                let e = {
                    adUnitId: i.AD_ID.VIDEO
                };
                n._instance = wx.createRewardedVideoAd(e), n._instance.onLoad(() => {
                    console.log("[VideoAd] video onLoad..."), n._isReady = !0, clearTimeout(n._reloadTimer);
                }), n._instance.onError(e => {
                    console.log("[VideoAd] video onError...", e), clearTimeout(n._reloadTimer), n._reloadTimer = setTimeout(() => {
                        n._instance.load();
                    }, 3e3);
                });
            },
            status() {
                return this._isReady;
            },
            show(e, t, a) {
                wx.createRewardedVideoAd ? (n._isReady ? (n._closeCallback && n._instance.offClose(n._closeCallback),
                        n._closeCallback = (t => {
                            t && t.isEnded || void 0 === t ? e && e() : a && a();
                        }), n._instance.onClose(n._closeCallback), n._instance.show()) : (t && t(), n._instance.load()),
                    n._isReady = !1) : wx.showToast({
                    title: "请升级微信",
                    icon: "none"
                });
            }
        };

    function safeAdd(e, t) {
        var a = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a;
    }

    function md5cmn(e, t, a, i, s, n) {
        return safeAdd((o = safeAdd(safeAdd(t, e), safeAdd(i, n))) << (r = s) | o >>> 32 - r, a);
        var o, r;
    }

    function md5ff(e, t, a, i, s, n, o) {
        return md5cmn(t & a | ~t & i, e, t, s, n, o);
    }

    function md5gg(e, t, a, i, s, n, o) {
        return md5cmn(t & i | a & ~i, e, t, s, n, o);
    }

    function md5hh(e, t, a, i, s, n, o) {
        return md5cmn(t ^ a ^ i, e, t, s, n, o);
    }

    function md5ii(e, t, a, i, s, n, o) {
        return md5cmn(a ^ (t | ~i), e, t, s, n, o);
    }

    function binlMD5(e, t) {
        var a, i, s, n, o;
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        var r = 1732584193,
            h = -271733879,
            l = -1732584194,
            d = 271733878;
        for (a = 0; a < e.length; a += 16) i = r, s = h, n = l, o = d, r = md5ff(r, h, l, d, e[a], 7, -680876936),
            d = md5ff(d, r, h, l, e[a + 1], 12, -389564586), l = md5ff(l, d, r, h, e[a + 2], 17, 606105819),
            h = md5ff(h, l, d, r, e[a + 3], 22, -1044525330), r = md5ff(r, h, l, d, e[a + 4], 7, -176418897),
            d = md5ff(d, r, h, l, e[a + 5], 12, 1200080426), l = md5ff(l, d, r, h, e[a + 6], 17, -1473231341),
            h = md5ff(h, l, d, r, e[a + 7], 22, -45705983), r = md5ff(r, h, l, d, e[a + 8], 7, 1770035416),
            d = md5ff(d, r, h, l, e[a + 9], 12, -1958414417), l = md5ff(l, d, r, h, e[a + 10], 17, -42063),
            h = md5ff(h, l, d, r, e[a + 11], 22, -1990404162), r = md5ff(r, h, l, d, e[a + 12], 7, 1804603682),
            d = md5ff(d, r, h, l, e[a + 13], 12, -40341101), l = md5ff(l, d, r, h, e[a + 14], 17, -1502002290),
            r = md5gg(r, h = md5ff(h, l, d, r, e[a + 15], 22, 1236535329), l, d, e[a + 1], 5, -165796510),
            d = md5gg(d, r, h, l, e[a + 6], 9, -1069501632), l = md5gg(l, d, r, h, e[a + 11], 14, 643717713),
            h = md5gg(h, l, d, r, e[a], 20, -373897302), r = md5gg(r, h, l, d, e[a + 5], 5, -701558691),
            d = md5gg(d, r, h, l, e[a + 10], 9, 38016083), l = md5gg(l, d, r, h, e[a + 15], 14, -660478335),
            h = md5gg(h, l, d, r, e[a + 4], 20, -405537848), r = md5gg(r, h, l, d, e[a + 9], 5, 568446438),
            d = md5gg(d, r, h, l, e[a + 14], 9, -1019803690), l = md5gg(l, d, r, h, e[a + 3], 14, -187363961),
            h = md5gg(h, l, d, r, e[a + 8], 20, 1163531501), r = md5gg(r, h, l, d, e[a + 13], 5, -1444681467),
            d = md5gg(d, r, h, l, e[a + 2], 9, -51403784), l = md5gg(l, d, r, h, e[a + 7], 14, 1735328473),
            r = md5hh(r, h = md5gg(h, l, d, r, e[a + 12], 20, -1926607734), l, d, e[a + 5], 4, -378558),
            d = md5hh(d, r, h, l, e[a + 8], 11, -2022574463), l = md5hh(l, d, r, h, e[a + 11], 16, 1839030562),
            h = md5hh(h, l, d, r, e[a + 14], 23, -35309556), r = md5hh(r, h, l, d, e[a + 1], 4, -1530992060),
            d = md5hh(d, r, h, l, e[a + 4], 11, 1272893353), l = md5hh(l, d, r, h, e[a + 7], 16, -155497632),
            h = md5hh(h, l, d, r, e[a + 10], 23, -1094730640), r = md5hh(r, h, l, d, e[a + 13], 4, 681279174),
            d = md5hh(d, r, h, l, e[a], 11, -358537222), l = md5hh(l, d, r, h, e[a + 3], 16, -722521979),
            h = md5hh(h, l, d, r, e[a + 6], 23, 76029189), r = md5hh(r, h, l, d, e[a + 9], 4, -640364487),
            d = md5hh(d, r, h, l, e[a + 12], 11, -421815835), l = md5hh(l, d, r, h, e[a + 15], 16, 530742520),
            r = md5ii(r, h = md5hh(h, l, d, r, e[a + 2], 23, -995338651), l, d, e[a], 6, -198630844),
            d = md5ii(d, r, h, l, e[a + 7], 10, 1126891415), l = md5ii(l, d, r, h, e[a + 14], 15, -1416354905),
            h = md5ii(h, l, d, r, e[a + 5], 21, -57434055), r = md5ii(r, h, l, d, e[a + 12], 6, 1700485571),
            d = md5ii(d, r, h, l, e[a + 3], 10, -1894986606), l = md5ii(l, d, r, h, e[a + 10], 15, -1051523),
            h = md5ii(h, l, d, r, e[a + 1], 21, -2054922799), r = md5ii(r, h, l, d, e[a + 8], 6, 1873313359),
            d = md5ii(d, r, h, l, e[a + 15], 10, -30611744), l = md5ii(l, d, r, h, e[a + 6], 15, -1560198380),
            h = md5ii(h, l, d, r, e[a + 13], 21, 1309151649), r = md5ii(r, h, l, d, e[a + 4], 6, -145523070),
            d = md5ii(d, r, h, l, e[a + 11], 10, -1120210379), l = md5ii(l, d, r, h, e[a + 2], 15, 718787259),
            h = md5ii(h, l, d, r, e[a + 9], 21, -343485551), r = safeAdd(r, i), h = safeAdd(h, s),
            l = safeAdd(l, n), d = safeAdd(d, o);
        return [r, h, l, d];
    }

    function binl2rstr(e) {
        var t, a = "",
            i = 32 * e.length;
        for (t = 0; t < i; t += 8) a += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return a;
    }

    function rstr2binl(e) {
        var t, a = [];
        for (a[(e.length >> 2) - 1] = void 0, t = 0; t < a.length; t += 1) a[t] = 0;
        var i = 8 * e.length;
        for (t = 0; t < i; t += 8) a[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return a;
    }

    function rstr2hex(e) {
        var t, a, i = "";
        for (a = 0; a < e.length; a += 1) t = e.charCodeAt(a), i += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return i;
    }

    function str2rstrUTF8(e) {
        return unescape(encodeURIComponent(e));
    }

    function rawMD5(e) {
        return function(e) {
            return binl2rstr(binlMD5(rstr2binl(e), 8 * e.length));
        }(str2rstrUTF8(e));
    }

    function rawHMACMD5(e, t) {
        return function(e, t) {
            var a, i, s = rstr2binl(e),
                n = [],
                o = [];
            for (n[15] = o[15] = void 0, s.length > 16 && (s = binlMD5(s, 8 * e.length)), a = 0; a < 16; a += 1) n[a] = 909522486 ^ s[a],
                o[a] = 1549556828 ^ s[a];
            return i = binlMD5(n.concat(rstr2binl(t)), 512 + 8 * t.length), binl2rstr(binlMD5(o.concat(i), 640));
        }(str2rstrUTF8(e), str2rstrUTF8(t));
    }

    function md5(e, t, a) {
        return t ? a ? rawHMACMD5(t, e) : rstr2hex(rawHMACMD5(t, e)) : a ? rawMD5(e) : rstr2hex(rawMD5(e));
    }
    const o = {
        threshold: 3e3,
        init: () => {
            o.fail = null, o.success = null, o.inited || (o.inited = !0, wx.onShow(() => {
                new Date().getTime() - o.time > o.threshold ? setTimeout(() => {
                    o.success && o.success(), o.init(), o.threshold = 3e3;
                }, 500) : (o.fail && o.fail(), o.threshold -= 1e3);
            }));
        },
        beseShare: (e = {}) => {
            o.init(), o.time = new Date().getTime(), o.fail = e.fail, o.success = e.success,
                e.cancel = (() => {
                    o.fail && o.fail(), o.init();
                }), wx.aldShareAppMessage(e);
        }
    };
    let r = "wx4d0b920de54187b9",
        h = "Vo6QcSADue7WrP5P";
    var l = function() {
            var e = {},
                t = function(e, t) {
                    return e << t | e >>> 32 - t;
                },
                a = function(e, t) {
                    var a, i, s, n, o;
                    return s = 2147483648 & e, n = 2147483648 & t, o = (1073741823 & e) + (1073741823 & t),
                        (a = 1073741824 & e) & (i = 1073741824 & t) ? 2147483648 ^ o ^ s ^ n : a | i ? 1073741824 & o ? 3221225472 ^ o ^ s ^ n : 1073741824 ^ o ^ s ^ n : o ^ s ^ n;
                },
                i = function(e, i, s, n, o, r, h) {
                    return e = a(e, a(a(function(e, t, a) {
                        return e & t | ~e & a;
                    }(i, s, n), o), h)), a(t(e, r), i);
                },
                s = function(e, i, s, n, o, r, h) {
                    return e = a(e, a(a(function(e, t, a) {
                        return e & a | t & ~a;
                    }(i, s, n), o), h)), a(t(e, r), i);
                },
                n = function(e, i, s, n, o, r, h) {
                    return e = a(e, a(a(function(e, t, a) {
                        return e ^ t ^ a;
                    }(i, s, n), o), h)), a(t(e, r), i);
                },
                o = function(e, i, s, n, o, r, h) {
                    return e = a(e, a(a(function(e, t, a) {
                        return t ^ (e | ~a);
                    }(i, s, n), o), h)), a(t(e, r), i);
                },
                l = function(e) {
                    var t, a = "",
                        i = "";
                    for (t = 0; t <= 3; t++) a += (i = "0" + (e >>> 8 * t & 255).toString(16)).substr(i.length - 2, 2);
                    return a;
                },
                d = function(e) {
                    var t, r, h, d, c, g, m, p, u, f = Array();
                    for (f = function(e) {
                            for (var t, a = e.length, i = a + 8, s = 16 * ((i - i % 64) / 64 + 1), n = Array(s - 1), o = 0, r = 0; r < a;) o = r % 4 * 8,
                                n[t = (r - r % 4) / 4] = n[t] | e.charCodeAt(r) << o, r++;
                            return o = r % 4 * 8, n[t = (r - r % 4) / 4] = n[t] | 128 << o, n[s - 2] = a << 3,
                                n[s - 1] = a >>> 29, n;
                        }(e = function(e) {
                            e = e.replace(/\x0d\x0a/g, "\n");
                            for (var t = "", a = 0; a < e.length; a++) {
                                var i = e.charCodeAt(a);
                                i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192),
                                    t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224),
                                    t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128));
                            }
                            return t;
                        }(e)), g = 1732584193, m = 4023233417, p = 2562383102, u = 271733878, t = 0; t < f.length; t += 16) r = g,
                        h = m, d = p, c = u, g = i(g, m, p, u, f[t + 0], 7, 3614090360), u = i(u, g, m, p, f[t + 1], 12, 3905402710),
                        p = i(p, u, g, m, f[t + 2], 17, 606105819), m = i(m, p, u, g, f[t + 3], 22, 3250441966),
                        g = i(g, m, p, u, f[t + 4], 7, 4118548399), u = i(u, g, m, p, f[t + 5], 12, 1200080426),
                        p = i(p, u, g, m, f[t + 6], 17, 2821735955), m = i(m, p, u, g, f[t + 7], 22, 4249261313),
                        g = i(g, m, p, u, f[t + 8], 7, 1770035416), u = i(u, g, m, p, f[t + 9], 12, 2336552879),
                        p = i(p, u, g, m, f[t + 10], 17, 4294925233), m = i(m, p, u, g, f[t + 11], 22, 2304563134),
                        g = i(g, m, p, u, f[t + 12], 7, 1804603682), u = i(u, g, m, p, f[t + 13], 12, 4254626195),
                        p = i(p, u, g, m, f[t + 14], 17, 2792965006), m = i(m, p, u, g, f[t + 15], 22, 1236535329),
                        g = s(g, m, p, u, f[t + 1], 5, 4129170786), u = s(u, g, m, p, f[t + 6], 9, 3225465664),
                        p = s(p, u, g, m, f[t + 11], 14, 643717713), m = s(m, p, u, g, f[t + 0], 20, 3921069994),
                        g = s(g, m, p, u, f[t + 5], 5, 3593408605), u = s(u, g, m, p, f[t + 10], 9, 38016083),
                        p = s(p, u, g, m, f[t + 15], 14, 3634488961), m = s(m, p, u, g, f[t + 4], 20, 3889429448),
                        g = s(g, m, p, u, f[t + 9], 5, 568446438), u = s(u, g, m, p, f[t + 14], 9, 3275163606),
                        p = s(p, u, g, m, f[t + 3], 14, 4107603335), m = s(m, p, u, g, f[t + 8], 20, 1163531501),
                        g = s(g, m, p, u, f[t + 13], 5, 2850285829), u = s(u, g, m, p, f[t + 2], 9, 4243563512),
                        p = s(p, u, g, m, f[t + 7], 14, 1735328473), m = s(m, p, u, g, f[t + 12], 20, 2368359562),
                        g = n(g, m, p, u, f[t + 5], 4, 4294588738), u = n(u, g, m, p, f[t + 8], 11, 2272392833),
                        p = n(p, u, g, m, f[t + 11], 16, 1839030562), m = n(m, p, u, g, f[t + 14], 23, 4259657740),
                        g = n(g, m, p, u, f[t + 1], 4, 2763975236), u = n(u, g, m, p, f[t + 4], 11, 1272893353),
                        p = n(p, u, g, m, f[t + 7], 16, 4139469664), m = n(m, p, u, g, f[t + 10], 23, 3200236656),
                        g = n(g, m, p, u, f[t + 13], 4, 681279174), u = n(u, g, m, p, f[t + 0], 11, 3936430074),
                        p = n(p, u, g, m, f[t + 3], 16, 3572445317), m = n(m, p, u, g, f[t + 6], 23, 76029189),
                        g = n(g, m, p, u, f[t + 9], 4, 3654602809), u = n(u, g, m, p, f[t + 12], 11, 3873151461),
                        p = n(p, u, g, m, f[t + 15], 16, 530742520), m = n(m, p, u, g, f[t + 2], 23, 3299628645),
                        g = o(g, m, p, u, f[t + 0], 6, 4096336452), u = o(u, g, m, p, f[t + 7], 10, 1126891415),
                        p = o(p, u, g, m, f[t + 14], 15, 2878612391), m = o(m, p, u, g, f[t + 5], 21, 4237533241),
                        g = o(g, m, p, u, f[t + 12], 6, 1700485571), u = o(u, g, m, p, f[t + 3], 10, 2399980690),
                        p = o(p, u, g, m, f[t + 10], 15, 4293915773), m = o(m, p, u, g, f[t + 1], 21, 2240044497),
                        g = o(g, m, p, u, f[t + 8], 6, 1873313359), u = o(u, g, m, p, f[t + 15], 10, 4264355552),
                        p = o(p, u, g, m, f[t + 6], 15, 2734768916), m = o(m, p, u, g, f[t + 13], 21, 1309151649),
                        g = o(g, m, p, u, f[t + 4], 6, 4149444226), u = o(u, g, m, p, f[t + 11], 10, 3174756917),
                        p = o(p, u, g, m, f[t + 2], 15, 718787259), m = o(m, p, u, g, f[t + 9], 21, 3951481745),
                        g = a(g, r), m = a(m, h), p = a(p, d), u = a(u, c);
                    return (l(g) + l(m) + l(p) + l(u)).toLowerCase();
                },
                c = function(e, t) {
                    t = t || !0;
                    for (var a = Object.keys(e).sort(), i = "", s = 0; s < a.length; s++) i += a[s] + ":" + e[a[s]];
                    t && (i += h);
                    var n = d(i);
                    return n = n.toLowerCase();
                },
                g = function(e) {
                    var t = y("zsAd");
                    switch (e) {
                        case "1":
                            return t.more;

                        case "2":
                            return t.promotion;

                        case "3":
                            return t.indexFloat;

                        case "7":
                            return t.indexLeft;

                        case "8":
                            return t.gameFloat;

                        case "9":
                            return t.endPage;

                        case "11":
                            return t.indexLeftFloat;

                        case "12":
                            return t.backAd;

                        case "13":
                            return t.iosLinkAd;
                    }
                    return null;
                },
                m = function(e, t) {
                    var a = g(e);
                    if (null == a) return console.error("custom link is null"), null;
                    for (var i = 0; i < a.length; i++)
                        if (a[i].appid == t) return a[i];
                },
                p = function(e, t, a, i, s, n) {
                    if ("undefined" == typeof wx) {
                        var o = new XMLHttpRequest();
                        o.onreadystatechange = function() {
                            if (4 == o.readyState) {
                                var e = o.responseText;
                                if (o.status >= 200 && o.status < 400) {
                                    var t = {};
                                    try {
                                        t = JSON.parse(e);
                                    } catch (t) {
                                        console.error("json parse error ", e), s && s(t);
                                    }
                                    i && i(t);
                                } else console.error("error ", e), s && s(e);
                            }
                        }, o.timeout = 3e3, o.ontimeout = function(e) {
                            console.error("error ", e), s && s(e);
                        }, o.open(a, e, !0), "POST" == a ? (o.open("POST", e), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                            o.send(function(e) {
                                var t = [];
                                for (var a in e) t.push(a + "=" + e[a]);
                                return t.join("&");
                            }(t))) : o.send();
                    } else wx.request({
                        url: e,
                        data: t,
                        header: {
                            "content-type": "application/json"
                        },
                        method: a,
                        success: function(e) {
                            i && i(e.data);
                        },
                        fail: function(e) {
                            s && s(e);
                        },
                        complete: function(e) {
                            n && n(e);
                        }
                    });
                },
                u = function(t, a) {
                    e.zsStorage = e.zsStorage || {}, e.zsStorage[t] = a;
                },
                f = function(t) {
                    return e.zsStorage = e.zsStorage || {}, e.zsStorage[t];
                },
                y = function(e, t) {
                    if (t) {
                        var a = f(e + "_time");
                        return null == a || Date.now() - Number(a) < t ? f(e) : null;
                    }
                    return f(e);
                },
                w = function(e, t) {
                    u(e, t), u(e + "_time", Date.now());
                },
                b = function(e) {
                    return "function" == typeof e;
                },
                C = function(t, a) {
                    if ("3" == t.app_type) {
                        var i = f(t.appid);
                        u(t.appid, null == i ? 1 : Number(i) + 1);
                    }
                    var s, n, o, h, l, d;
                    "undefined" != typeof wx && (s = t.app_id, n = a, o = Math.round(new Date().getTime() / 1e3).toString(),
                        l = c(h = {
                            user_id: n,
                            from_id: r,
                            to_id: s,
                            timestamp: o
                        }), d = Object.assign({}, h, {
                            sign: l
                        }),
                        function(t) {
                            console.error("userId is null")
                        }(t.appid));
                };
            e.userId = null, e.platformId = null, e.srcAppId = "", e.launchScene = "", e.adJumpNum = null,
                e.adJumpAppId = null, e.isEnableExportAdLinkId = "0", e.init = function(t) {
                    if (console.log("zsAdSdk.init"), this.userId = t, this.platformId = 0, "undefined" == typeof wx) this.launchScene = 1038,
                        this.srcAppId = "";
                    else {
                        var a = wx.getLaunchOptionsSync();
                        this.launchScene = a.scene ? a.scene : "", this.srcAppId = a.referrerInfo && a.referrerInfo.appId ? a.referrerInfo.appId : "";
                    }! function() {
                        console.error("userId is null")
                    }();
                }, e.sendVideoLog = function() {

                }, e.cfgCbList = [], e.inCfgRequest = !1, e.loadConfig = function(t, a) {
                    var i = Math.round(new Date().getTime() / 1e3).toString(),
                        s = {
                            appid: r,
                            timestamp: i
                        },
                        n = c(s),
                        o = Object.assign({}, s, {
                            sign: n
                        }),
                        h = y("zsCfg", 6e5);
                    h ? b(t) && t(h) : this.inCfgRequest ? this.cfgCbList.push({
                        success: t,
                        fail: a
                    }) : (this.inCfgRequest = !0, this.cfgCbList.push({
                        success: t,
                        fail: a
                    }));
                }, e.adCbList = [], e.inAdRequest = !1, e.loadAd = function(t) {
                    var a = y("zsAd", 6e5);
                    if (a) t(a);
                    else if (this.inAdRequest) this.adCbList.push(t);
                    else {
                        this.loadConfig(null), this.inAdRequest = !0, this.adCbList.push(t);
                        var i = Math.round(new Date().getTime() / 1e3).toString(),
                            s = {
                                appid: r,
                                timestamp: i
                            },
                            n = c(s),
                            o = Object.assign({}, s, {
                                sign: n
                            });
                    }
                }, e.navigate2Mini = function(e, t, a, i, s) {
                    var n = e;
                    if (null != this.adJumpNum && "3" == n.app_type) try {
                        var o = f(n.appid);
                        if (o = null != o ? Number(o) : 0, console.log(n.appid + ":" + o + "," + this.adJumpNum),
                            Number(o) + 1 >= this.adJumpNum) {
                            if (1 == this.platformId) {
                                var r = y("zsAd");
                                if (r.iosLinkAd.length > 0) {
                                    var h = r.iosLinkAd[Math.floor(r.iosLinkAd.length * Math.random())];
                                    console.log("jump:" + JSON.stringify(h)), n = m(n.position_type, h.appid);
                                } else this.adJumpAppId ? (console.log("jump:" + this.adJumpAppId), n = m(n.position_type, this.adJumpAppId)) : console.log("jump self");
                            } else console.log("jump link in Android"), n = function(e) {
                                var t = g(e);
                                if (null == t) return console.error("box is null"), null;
                                for (var a = 0; a < t.length; a++)
                                    if ("4" == t[a].app_type) return t[a];
                                return console.error("box is null"), null;
                            }(n.position_type);
                            null == n && (n = e);
                        }
                    } catch (e) {
                        console.error(e);
                    }
                    if ("undefined" == typeof wx) return b(i) && i(), void(b(s) && s());
                    n.extraData = n.extraData || {}, wx.navigateToMiniProgram({
                        appId: n.appid,
                        path: n.link_path,
                        extraData: n.extraData,
                        success: function(e) {
                            C(n, t), b(a) && a();
                        },
                        fail: function(e) {
                            b(i) && i();
                        },
                        complete: function(e) {
                            b(s) && s();
                        }
                    });
                }, e.getShareCard = function(e, t) {
                    var a = Math.round(new Date().getTime() / 1e3).toString(),
                        i = {
                            appid: r,
                            timestamp: a
                        },
                        s = c(i),
                        n = Object.assign({}, i, {
                            sign: s
                        });
                }, e.collectShareCardClick = function(e, t, a, i) {
                    var s = Math.round(new Date().getTime() / 1e3).toString(),
                        n = {
                            appid: r,
                            card_id: e,
                            user_id: t,
                            timestamp: s
                        },
                        o = c(n),
                        h = Object.assign({}, n, {
                            sign: o
                        });
                };
            var L = [1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049, 1124, 1125, 1126];
            e.launchInfo = null, e.isExportValid = function() {
                return !(this.launchInfo && L.indexOf(this.launchInfo.scene) >= 0) && (null == this.launchInfo || null == this.launchInfo.query || this.launchInfo.query.customLink != this.isEnableExportAdLinkId);
            }, e.isFromLink = function() {
                return this.launchInfo && L.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), !0) : null != this.launchInfo && null != this.launchInfo.query && this.launchInfo.query.customLink;
            };
            return "undefined" == typeof wx || (e.launchInfo = wx.getLaunchOptionsSync(), console.log("scene:" + e.launchInfo.scene),
                e.isFromLink() && console.log("open by link")), e;
        }(),
        d = "undefined" != typeof window ? window : global;
    d.zs = d.zs || {}, d.zs.sdk = l;
    const c = "https://www.yad.com";
    let g = [],
        m = [],
        p = [],
        u = {
            env: "prod",
            APP_ID: i.APP_ID,
            openId: "no_open_id_user_0",
            session_key: "",
            shareSwitch: !0,
            ipSwitch: !0,
            zhiseAdSwitch: !0,
            setCloudDataSetWX(e, t, a) {},
            login(e, t) {},
            getOpenId(e, t, a) {},
            getUserInfo(e, t) {},
            setRankScore(e, t, a, i) {},
            getGameData(e, t, a) {},
            getThirdGameData(e, t, a, i, s) {},
            getTimeOffset(e) {},
            uploadGameData(e, t, a) {
                dao.gameDao.save();
            },
            uploadThirdData(e, t, a, i, s) {},
            share(e, t, a, i, s) {},
            uploadSharePic(e) {},
            logEvent(e) {},
            requestShareParam(e) {},
            getShareParam() {},
            getWorldRank(e) {},
            uploadSelfInfo() {},
            initVideo() {
                n.init();
            },
            videoReady: () => n.status(),
            createVideoAd(e = "看完视频后才可以获得奖励", t = "看完视频后才可以获得奖励", a, i) {
                "function" == typeof e ? (a = e, i = t, e = "看完视频后才可以获得奖励", t = "看完视频后才可以获得奖励") : "function" == typeof t && (i = a = t,
                    t = "看完视频后才可以获得奖励"), wx.isFake ? "function" == typeof a && a() : n.show(() => {
                    "function" == typeof a && a();
                }, () => {
                    wx.showModal({
                        title: "广告加载失败",
                        content: t,
                        confirmText: "重新观看",
                        cancelText: "知道了",
                        success: e => {
                            e.confirm ? this.createVideoAd(a, i) : e.cancel && "function" == typeof i && i();
                        }
                    });
                }, () => {
                    wx.showModal({
                        title: "广告取消",
                        content: e,
                        confirmText: "重新观看",
                        cancelText: "知道了",
                        success: e => {
                            e.confirm ? this.createVideoAd(a, i) : e.cancel && "function" == typeof i && i();
                        }
                    });
                });
            },
            createBannerAd({
                bannerIndex: e = 0,
                align: t = "center bottom",
                style: a = {
                    width: 300
                },
                successCallback: s = (() => {}),
                errCallback: n = (() => {}),
                autoShow: o = !0
            } = {}) {
                if (wx.isFake) return;
                let r, {
                        screenWidth: h,
                        screenHeight: l
                    } = wx.getSystemInfoSync(),
                    d = i.AD_ID.BANNER[e];
                return console.log("createBannerAd", e), r = wx.createBannerAd({
                    adUnitId: d,
                    style: {
                        left: 0,
                        top: 0,
                        width: a.width
                    }
                }), g[e] = r, g[e].useTimes = 0, r.onLoad(() => {
                    r.style.left = h / 2 - r.style.realWidth / 2, r.style.top = l - r.style.realHeight,
                        l / h >= 2 && (r.style.top -= 20 * l / Laya.stage.height), console.log("banner" + e + " create success"),
                        s(), o && r.show();
                }), r.onError(t => {
                    g[e] = null, n(t), console.log("banner" + e + " create error");
                }), r;
            },
            showBannerAd() {},
            hideBannerAd() {},
            destroyBannerAd(e = 0) {
                g[e] && (g[e].destroy(), g[e] = null);
            },
            showPageAd() {
                wx.createInterstitialAd({
                    adUnitId: i.AD_ID.PAGE[0]
                }).show();
            },
            createGameBanner({
                bannerIndex: e = 0,
                successCallback: t = (() => {}),
                errCallback: a = (() => {}),
                autoShow: s = !0
            } = {}) {},
            showGameBanner(e = 0) {},
            hideGameBanner(e = 0) {},
            destroyGameBanner(e = 0) {},
            createGameIcon({
                index: e = 0,
                num: t = 1,
                posArray: a = []
            }) {},
            hideGameIcon(e) {}
        };

    function QuadTree(e, t) {
        this.bounds = e || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            this.objects = [],
            this.nodes = [];
        var a = t || 0;
        this.clear = function() {
                this.objects = [];
                for (var e = 0; e < this.nodes.length; e++) this.nodes[e].clear();
                this.nodes = [];
            },
            this.getAllObjects = function(e) {
                for (var t = 0; t < this.nodes.length; t++) this.nodes[t].getAllObjects(e);
                t = 0;
                for (var a = this.objects.length; t < a; t++) e.push(this.objects[t]);
                return e;
            }, this.findObjects = function(e, t) {
                if (void 0 !== t) {
                    var a = this.getIndex(t); -
                    1 != a && this.nodes.length && this.nodes[a].findObjects(e, t);
                    for (var i = 0, s = this.objects.length; i < s; i++) e.push(this.objects[i]);
                    return e;
                }
                console.log("UNDEFINED OBJECT");
            }, this.insert = function(e) {
                if (void 0 !== e)
                    if (e instanceof Array)
                        for (var t = 0, i = e.length; t < i; t++) this.insert(e[t]);
                    else {
                        if (this.nodes.length) {
                            if (-1 != (s = this.getIndex(e))) return void this.nodes[s].insert(e);
                        } else this.objects.push(e);
                        if (this.objects.length > 10 && a < 7)
                            for (null == this.nodes[0] && this.split(); this.objects.length;) {
                                let e = this.objects.pop();
                                var s; -
                                1 != (s = this.getIndex(e)) && this.nodes[s].insert(e);
                            }
                    }
            }, this.getIndex = function(e) {
                var t = -1,
                    a = this.bounds.x + this.bounds.width / 2,
                    i = this.bounds.y + this.bounds.height / 2,
                    s = e.y > i && e.y + e.height > i,
                    n = e.y <= i;
                return e.x < a && e.x + e.width < a ? s ? t = 1 : n && (t = 2) : e.x >= a && (s ? t = 0 : n && (t = 3)),
                    t;
            }, this.split = function() {
                var e = this.bounds.width / 2,
                    t = this.bounds.height / 2;
                this.nodes[0] = new QuadTree({
                    x: this.bounds.x + e,
                    y: this.bounds.y + t,
                    width: e,
                    height: t
                }, a + 1), this.nodes[1] = new QuadTree({
                    x: this.bounds.x,
                    y: this.bounds.y + t,
                    width: e,
                    height: t
                }, a + 1), this.nodes[2] = new QuadTree({
                    x: this.bounds.x,
                    y: this.bounds.y,
                    width: e,
                    height: t
                }, a + 1), this.nodes[3] = new QuadTree({
                    x: this.bounds.x + e,
                    y: this.bounds.y,
                    width: e,
                    height: t
                }, a + 1);
            }, this.retrieve = function(e, t, i) {
                if (void 0 !== t) {
                    if (i === a) return this.getAllObjects(e), e;
                    var s = this.getIndex(t);
                    if (!this.nodes.length) {
                        for (var n = 0, o = this.objects.length; n < o; n++) e.push(this.objects[n]);
                        return e;
                    }
                    this.nodes[s].retrieve(e, t);
                } else console.log("UNDEFINED OBJECT");
            }, this.getArea = function(e, t) {
                if (this.nodes.length)
                    for (let a in this.nodes) this.nodes[a].getArea(e, t);
                else if (this.isPointInPolygon(this.bounds, t)) {
                    for (var a = 0, i = this.objects.length; a < i; a++) e.push(this.objects[a]);
                    return e;
                }
            }, this.isPointInPolygon = function(e, t) {
                let a = 0,
                    i = e.x,
                    s = e.y;
                for (let e, n = t[1] > s, o = 3; o < t.length; o += 2)
                    if ((e = n) != (n = t[o] > s)) {
                        let r = (e ? 1 : 0) - (n ? 1 : 0);
                        r * ((t[o - 3] - i) * (t[o - 0] - s) - (t[o - 2] - s) * (t[o - 1] - i)) > 0 && (a += r);
                    }
                return a;
            };
    }
    class f extends Laya.Script {
        constructor() {
            super(), this.testResult = [], this.colliderList = {};
        }
        clearStage() {
            this.crops.forEach(e => {
                e && !e.destroyed && e.destroy();
            });
        }
        makeCrop(e) {
            let t;
            this.quadTree = new QuadTree({
                    x: -20,
                    y: -20,
                    width: 40,
                    height: 40
                }), this.cropSp = new Laya.Sprite3D(), this.game.scene3d.addChild(this.cropSp),
                this.crops = [];
            let a = [1, 3, 5];
            for (; a.length > 2;) a.splice(Math.floor(Math.random() * a.length), 1);
            for (let i = 0; i < e.length; i++) {
                let s = e[i],
                    n = s.size * s.size,
                    o = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(s.size / 5 + .5, .01, s.size / 5 + .5));
                o.transform.position = new Laya.Vector3(s.x - .1, -.2, s.y - .2), o.meshRenderer.material = new Laya.BlinnPhongMaterial(),
                    o.meshRenderer.material.specularColor = new Laya.Vector3(0, 0, 0), o.meshRenderer.material.albedoColor = new Laya.Vector3(.83, .68, .68),
                    o.name = "plane", this.game.gameObjectSp.addChild(o);
                let r = "grass" + a[Math.floor(Math.random() * a.length)];
                for (let e = 0; e < n; e++)(t = this.cropSp.addChild(this.game[r].clone())).name = "crop",
                    t.transform.position = new Laya.Vector3(s.x + e % s.size * .2 - s.size / 10, 0, s.y + .2 * Math.floor(e / s.size) - s.size / 10),
                    t.x = s.x + e % s.size * .2 - s.size / 10, t.y = s.y + .2 * Math.floor(e / s.size) - s.size / 10,
                    t.width = 0, t.height = 0, t.fastRender = !0, this.quadTree.insert(t), this.crops.push(t);
                let h, l, d, c, g = s.size + 4;
                for (let e = 0; e < g / 2; e++) d = s.x + .4 * e - g / 10, c = s.y - g / 10 - .2,
                    s.top && checkBorder(d, c) && ((h = this.game.gameObjectSp.addChild(this.game.border.clone())).transform.position = new Laya.Vector3(d, 0, c),
                        h.fastRender = !0), d = s.x + .4 * e - g / 10, c = s.y + g / 10 - .2, s.bottom && checkBorder(d, c) && ((h = this.game.gameObjectSp.addChild(this.game.border.clone())).transform.position = new Laya.Vector3(d, 0, c),
                        h.fastRender = !0), d = s.x - g / 10 - .2, c = s.y + .4 * e - g / 10, s.left && checkBorder(d, c) && ((h = this.game.gameObjectSp.addChild(this.game.border.clone())).transform.position = new Laya.Vector3(d, 0, c),
                        h.transform.rotationEuler = new Laya.Vector3(0, 90, 0), h.fastRender = !0), d = s.x + g / 10 - .2,
                    c = s.y + .4 * e - g / 10, s.right && checkBorder(d, c) && ((h = this.game.gameObjectSp.addChild(this.game.border.clone())).transform.rotationEuler = new Laya.Vector3(0, 90, 0),
                        h.transform.position = new Laya.Vector3(d, 0, c), h.fastRender = !0);
                g = s.size / 5;
                for (let e = 0; e < 2; e++) d = s.x + 3 * Math.random() - 1.5, c = s.y - 3 - Math.random(),
                    s.top && ((l = this.game.gameObjectSp.addChild(this.game.tree.clone())).transform.position = new Laya.Vector3(d, .3, c),
                        l.fastRender = !0), d = s.x + 3 * Math.random() - 1.5, c = s.y + 3 + Math.random(),
                    s.bottom && ((l = this.game.gameObjectSp.addChild(this.game.tree.clone())).transform.position = new Laya.Vector3(d, .3, c),
                        l.fastRender = !0), d = s.x - 3 - Math.random(), c = s.y + 3 * Math.random() - 1.5,
                    s.left && ((l = this.game.gameObjectSp.addChild(this.game.tree.clone())).transform.position = new Laya.Vector3(d, .3, c),
                        l.fastRender = !0), d = s.x + 3 + Math.random(), c = s.y + 3 * Math.random() - 1.5,
                    s.right && ((l = this.game.gameObjectSp.addChild(this.game.tree.clone())).transform.position = new Laya.Vector3(d, .3, c),
                        l.fastRender = !0);
            }

            function checkBorder(t, a) {
                for (let i in e)
                    if (t < e[i].x + e[i].size / 10 + .1 && t > e[i].x - e[i].size / 10 - .5 && a < e[i].y + e[i].size / 10 + .1 && a > e[i].y - e[i].size / 10 - .5) return !1;
                return !0;
            }
            this.clearRenderCrop();
        }
        clearRenderCrop() {
            this.game.scene3d._renders.elements = this.game.scene3d._renders.elements.filter(e => !(!e._owner || "crop" === e._owner.name || e._owner.destroyed || !e._owner.active) || (e._indexInList = -1, !1)), this.game.scene3d._renders.elements.forEach((e, t) => {
                e._indexInList, e._setIndexInList(t);
            }), this.game.scene3d._renders.length = this.game.scene3d._renders.elements.length;
        }
        checkCropRender(e) {
            this.clearRenderCrop(), this.testResult = [];
            let t = [4 + e.x, -3.5 + e.z, 0 + e.x, 3 + e.z, -3 + e.x, 1 + e.z, -1 + e.x, -6.5 + e.z, 4 + e.x, -3.5 + e.z];
            this.quadTree.getArea(this.testResult, t), this.testResult.forEach(e => {
                e && !e.destroyed && e.active && this.game.scene3d._renders.add(e.meshRenderer);
            });
        }
        checkCropCut(e, t) {
            let a, i = 0,
                s = e.transform.position,
                n = [];
            this.quadTree.getArea(n, [.8 + s.x, .8 + s.z, .8 + s.x, -.8 + s.z, -.8 + s.x, -.8 + s.z, -.8 + s.x, .8 + s.z, .8 + s.x, .8 + s.z]);
            for (let t in n) {
                let s = n[t];
                s && "crop" === s.name && !s.destroyed && s.active && this.isPointInPolygon(s.transform.position, e.areaPoints) && (n[t] = null,
                    s.active = !1, a = s, i += 1);
            }
            return t && a && (this.game.cutColor = a.meshRenderer.materials[a.meshRenderer.materials.length - 1].albedoColor),
                i;
        }
        registerCollider(e, t) {
            this.colliderList[t] || (this.colliderList[t] = []), e.pos = e.transform.position,
                this.colliderList[t].push(e);
        }
        checkCollider(e, t) {
            let a;
            for (let i in this.colliderList) {
                let s = this.colliderList[i];
                if (i !== t && !s.disabled)
                    for (let t in s)
                        if ((a = s[t]) && a.active && !a.destroyed && this.isPointInPolygon(a.pos, e)) return a;
            }
            return !1;
        }
        removeColliderGroup(e) {
            this.colliderList[e] = [];
        }
        enableColliderGroup(e) {
            this.colliderList[e].disabled = !1;
        }
        disableColliderGroup(e) {
            this.colliderList[e].disabled = !0;
        }
        clearCollider() {
            this.colliderList = {};
        }
        isPointInPolygon(e, t) {
            let a = 0,
                i = e.x,
                s = e.z;
            for (let e, n = t[1] > s, o = 3; o < t.length; o += 2)
                if ((e = n) != (n = t[o] > s)) {
                    let r = (e ? 1 : 0) - (n ? 1 : 0);
                    r * ((t[o - 3] - i) * (t[o - 0] - s) - (t[o - 2] - s) * (t[o - 1] - i)) > 0 && (a += r);
                }
            return a;
        }
    }
    var y = {
        isFake: !0,
        triggerGC: function() {},
        request: function(e) {
            var t = new Laya.HttpRequest(),
                a = e.url,
                i = e.data || null,
                s = e.header || null,
                n = (e.method || "get").toLowerCase(),
                o = e.dataType || "json",
                r = e.success,
                h = e.fail,
                l = e.complete;
            "object" == typeof i && (i = JSON.stringify(i), s = ["Content-Type", "application/json"]),
                t.once(Laya.Event.COMPLETE, t, function() {
                    t.statusCode = 200, r && "function" == typeof r && r(t), l && "function" == typeof l && l(),
                        t.offAll(Laya.Event.ERROR);
                }), t.once(Laya.Event.ERROR, t, function(e) {
                    h && "function" == typeof h && h(t), t.offAll(Laya.Event.COMPLETE);
                }), t.send(a, i, n, o, s);
        },
        getOpenDataContext: function() {
            return {
                postMessage: function(e) {}
            };
        },
        onMessage: function(e) {},
        getStorageSync: function(e) {
            return localStorage.getItem(e);
        },
        setStorage: function(e) {
            localStorage.setItem(e.key, e.data), e.success && "function" == typeof e.success && e.success(),
                e.complete && "function" == typeof e.complete && e.complete();
        },
        getSystemInfoSync: function() {
            var e = Laya.Laya.Browser;
            return {
                screenWidth: e.clientWidth,
                screenHeight: e.clientHeight,
                windowWidth: e.clientWidth,
                windowHeight: e.clientHeight,
                model: e.userAgent,
                platform: ""
            };
        },
        vibrateShort: function(e) {
            e && (e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete());
        },
        vibrateLong: function(e) {
            e && (e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete());
        },
        loadFont: function(e) {
            var t = e.split("/");
            return t[t.length - 1].replace(".ttf", "");
        },
        saveImageToPhotosAlbum: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        previewImage: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        openSetting: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        showModal: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        navigateToMiniProgram: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        getUserInfo: function(e) {
            e.success && "function" == typeof e.success && e.success({
                userInfo: {
                    nickName: "BacooTang",
                    avatarUrl: "",
                    gender: 1,
                    province: "广东",
                    city: "广州",
                    country: "Egypt"
                }
            }), e.complete && "function" == typeof e.complete && e.complete();
        },
        getLaunchOptionsSync: function() {
            return {
                scene: 1001,
                query: {},
                isSticky: !1,
                shareTicket: null,
                referrerInfo: {}
            };
        },
        exitMiniProgram: function() {
            console.log("exitMiniProgram");
        },
        onShow: function(e) {},
        offShow: function(e) {},
        onHide: function(e) {},
        offHide: function(e) {},
        onAudioInterruptionBegin: function(e) {},
        offAudioInterruptionBegin: function(e) {},
        onAudioInterruptionEnd: function(e) {},
        offAudioInterruptionEnd: function(e) {},
        onError: function(e) {},
        offError: function(e) {},
        showShareMenu: function(e) {},
        aldOnShareAppMessage: function(e) {},
        openCustomerServiceConversation: function(e) {},
        aldShareAppMessage: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        aldSendEvent: function() {},
        createRewardedVideoAd: function(e) {
            return {
                _onCloseCallback: null,
                _onLoadCallback: null,
                load: function() {},
                onError: function(e) {},
                onLoad: function(e) {
                    this._onLoadCallback = e, this._onLoadCallback();
                },
                onClose: function(e) {
                    this._onCloseCallback = e;
                },
                offClose: function(e) {
                    this._onCloseCallback = null;
                },
                show: function() {
                    quick.resume();
                    var e = 1,
                        t = display.sprite().addto(stage).zorder(100001),
                        a = (display.mask(1).addto(t),
                            display.label("我在大清当皇帝", 60, display.COLOR_WHITE).center().addto(t), display.label(e + "秒", 40, display.COLOR_WHITE).pos(80, display.top + 80).addto(t));
                    display.label("关闭", 40, display.COLOR_WHITE).pos(display.right - 100, display.top + 80).addto(t).on("mousedown", this, function() {
                        this._onCloseCallback && this._onCloseCallback({
                            isEnded: !e
                        }), this._onLoadCallback && this._onLoadCallback(), t.destroy();
                    }), timer.loop(1e3, t, function() {
                        0 == --e && timer.clearAll(t), a.text = e + "秒";
                    });
                }
            };
        },
        showToast: function(e) {
            console.log(e.title);
        },
        createBannerAd: function(e) {
            if (!wx.isFake) return {
                _banner: null,
                show: function() {
                    this._banner = display.rect(display.width, 338, display.COLOR_WHITE).pos(0, display.bottom - 338).zorder(1e5).addto(stage),
                        display.label("banner ad", 60, display.COLOR_BLACK).pos(display.cx, 169).addto(this._banner);
                },
                hide: function() {
                    this._banner && (this._banner.destroy(), this._banner = null);
                },
                destroy: function() {
                    this.hide();
                }
            };
        },
        createCanvas: function() {
            return {
                getContext: function() {
                    return {
                        drawImage: function() {},
                        save: function() {},
                        rect: function() {},
                        clip: function() {},
                        restore: function() {},
                        arc: function() {}
                    };
                },
                toTempFilePathSync: function() {}
            };
        },
        getSetting: function(e) {
            e.success && "function" == typeof e.success && e.success({
                authSetting: {
                    "scope.userInfo": !0,
                    "scope.userLocation": !0,
                    "scope.address": !0,
                    "scope.invoiceTitle": !0,
                    "scope.werun": !0,
                    "scope.record": !0,
                    "scope.writePhotosAlbum": !0,
                    "scope.camera": !0
                }
            }), e.complete && "function" == typeof e.complete && e.complete();
        },
        authorize: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        login: function(e) {
            e.success && "function" == typeof e.success && e.success({
                code: ""
            }), e.complete && "function" == typeof e.complete && e.complete();
        },
        setUserCloudStorage: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        getFriendCloudStorage: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        getUserCloudStorage: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        getUserInfo: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        getGroupCloudStorage: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        getGroupCloudStorage: function(e) {
            e.success && "function" == typeof e.success && e.success(), e.complete && "function" == typeof e.complete && e.complete();
        },
        getSharedCanvas: function() {
            return {};
        }
    };

    function md5$1(e) {
        var t, a, i, s, n, o, r, h, l, d = Array();
        for (d = function(e) {
                var t, a = e.length,
                    i = a + 8,
                    s = 16 * ((i - i % 64) / 64 + 1),
                    n = Array(s - 1),
                    o = 0,
                    r = 0;
                for (; r < a;) o = r % 4 * 8, n[t = (r - r % 4) / 4] = n[t] | e.charCodeAt(r) << o,
                    r++;
                return o = r % 4 * 8, n[t = (r - r % 4) / 4] = n[t] | 128 << o, n[s - 2] = a << 3,
                    n[s - 1] = a >>> 29, n;
            }(e = function(e) {
                for (var t = "", a = 0; a < e.length; a++) {
                    var i = e.charCodeAt(a);
                    i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192),
                        t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224),
                        t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128));
                }
                return t;
            }(e)), o = 1732584193, r = 4023233417, h = 2562383102, l = 271733878, t = 0; t < d.length; t += 16) a = o,
            i = r, s = h, n = l, o = FF(o, r, h, l, d[t + 0], 7, 3614090360), l = FF(l, o, r, h, d[t + 1], 12, 3905402710),
            h = FF(h, l, o, r, d[t + 2], 17, 606105819), r = FF(r, h, l, o, d[t + 3], 22, 3250441966),
            o = FF(o, r, h, l, d[t + 4], 7, 4118548399), l = FF(l, o, r, h, d[t + 5], 12, 1200080426),
            h = FF(h, l, o, r, d[t + 6], 17, 2821735955), r = FF(r, h, l, o, d[t + 7], 22, 4249261313),
            o = FF(o, r, h, l, d[t + 8], 7, 1770035416), l = FF(l, o, r, h, d[t + 9], 12, 2336552879),
            h = FF(h, l, o, r, d[t + 10], 17, 4294925233), r = FF(r, h, l, o, d[t + 11], 22, 2304563134),
            o = FF(o, r, h, l, d[t + 12], 7, 1804603682), l = FF(l, o, r, h, d[t + 13], 12, 4254626195),
            h = FF(h, l, o, r, d[t + 14], 17, 2792965006), o = GG(o, r = FF(r, h, l, o, d[t + 15], 22, 1236535329), h, l, d[t + 1], 5, 4129170786),
            l = GG(l, o, r, h, d[t + 6], 9, 3225465664), h = GG(h, l, o, r, d[t + 11], 14, 643717713),
            r = GG(r, h, l, o, d[t + 0], 20, 3921069994), o = GG(o, r, h, l, d[t + 5], 5, 3593408605),
            l = GG(l, o, r, h, d[t + 10], 9, 38016083), h = GG(h, l, o, r, d[t + 15], 14, 3634488961),
            r = GG(r, h, l, o, d[t + 4], 20, 3889429448), o = GG(o, r, h, l, d[t + 9], 5, 568446438),
            l = GG(l, o, r, h, d[t + 14], 9, 3275163606), h = GG(h, l, o, r, d[t + 3], 14, 4107603335),
            r = GG(r, h, l, o, d[t + 8], 20, 1163531501), o = GG(o, r, h, l, d[t + 13], 5, 2850285829),
            l = GG(l, o, r, h, d[t + 2], 9, 4243563512), h = GG(h, l, o, r, d[t + 7], 14, 1735328473),
            o = HH(o, r = GG(r, h, l, o, d[t + 12], 20, 2368359562), h, l, d[t + 5], 4, 4294588738),
            l = HH(l, o, r, h, d[t + 8], 11, 2272392833), h = HH(h, l, o, r, d[t + 11], 16, 1839030562),
            r = HH(r, h, l, o, d[t + 14], 23, 4259657740), o = HH(o, r, h, l, d[t + 1], 4, 2763975236),
            l = HH(l, o, r, h, d[t + 4], 11, 1272893353), h = HH(h, l, o, r, d[t + 7], 16, 4139469664),
            r = HH(r, h, l, o, d[t + 10], 23, 3200236656), o = HH(o, r, h, l, d[t + 13], 4, 681279174),
            l = HH(l, o, r, h, d[t + 0], 11, 3936430074), h = HH(h, l, o, r, d[t + 3], 16, 3572445317),
            r = HH(r, h, l, o, d[t + 6], 23, 76029189), o = HH(o, r, h, l, d[t + 9], 4, 3654602809),
            l = HH(l, o, r, h, d[t + 12], 11, 3873151461), h = HH(h, l, o, r, d[t + 15], 16, 530742520),
            o = II(o, r = HH(r, h, l, o, d[t + 2], 23, 3299628645), h, l, d[t + 0], 6, 4096336452),
            l = II(l, o, r, h, d[t + 7], 10, 1126891415), h = II(h, l, o, r, d[t + 14], 15, 2878612391),
            r = II(r, h, l, o, d[t + 5], 21, 4237533241), o = II(o, r, h, l, d[t + 12], 6, 1700485571),
            l = II(l, o, r, h, d[t + 3], 10, 2399980690), h = II(h, l, o, r, d[t + 10], 15, 4293915773),
            r = II(r, h, l, o, d[t + 1], 21, 2240044497), o = II(o, r, h, l, d[t + 8], 6, 1873313359),
            l = II(l, o, r, h, d[t + 15], 10, 4264355552), h = II(h, l, o, r, d[t + 6], 15, 2734768916),
            r = II(r, h, l, o, d[t + 13], 21, 1309151649), o = II(o, r, h, l, d[t + 4], 6, 4149444226),
            l = II(l, o, r, h, d[t + 11], 10, 3174756917), h = II(h, l, o, r, d[t + 2], 15, 718787259),
            r = II(r, h, l, o, d[t + 9], 21, 3951481745), o = AddUnsigned(o, a), r = AddUnsigned(r, i),
            h = AddUnsigned(h, s), l = AddUnsigned(l, n);
        return (WordToHex(o) + WordToHex(r) + WordToHex(h) + WordToHex(l)).toLowerCase();
    }

    function RotateLeft(e, t) {
        return e << t | e >>> 32 - t;
    }

    function AddUnsigned(e, t) {
        var a, i, s, n, o;
        return s = 2147483648 & e, n = 2147483648 & t, o = (1073741823 & e) + (1073741823 & t),
            (a = 1073741824 & e) & (i = 1073741824 & t) ? 2147483648 ^ o ^ s ^ n : a | i ? 1073741824 & o ? 3221225472 ^ o ^ s ^ n : 1073741824 ^ o ^ s ^ n : o ^ s ^ n;
    }

    function FF(e, t, a, i, s, n, o) {
        return e = AddUnsigned(e, AddUnsigned(AddUnsigned(function(e, t, a) {
            return e & t | ~e & a;
        }(t, a, i), s), o)), AddUnsigned(RotateLeft(e, n), t);
    }

    function GG(e, t, a, i, s, n, o) {
        return e = AddUnsigned(e, AddUnsigned(AddUnsigned(function(e, t, a) {
            return e & a | t & ~a;
        }(t, a, i), s), o)), AddUnsigned(RotateLeft(e, n), t);
    }

    function HH(e, t, a, i, s, n, o) {
        return e = AddUnsigned(e, AddUnsigned(AddUnsigned(function(e, t, a) {
            return e ^ t ^ a;
        }(t, a, i), s), o)), AddUnsigned(RotateLeft(e, n), t);
    }

    function II(e, t, a, i, s, n, o) {
        return e = AddUnsigned(e, AddUnsigned(AddUnsigned(function(e, t, a) {
            return t ^ (e | ~a);
        }(t, a, i), s), o)), AddUnsigned(RotateLeft(e, n), t);
    }

    function WordToHex(e) {
        var t, a = "",
            i = "";
        for (t = 0; t <= 3; t++) a += (i = "0" + (e >>> 8 * t & 255).toString(16)).substr(i.length - 2, 2);
        return a;
    }
    "undefined" == typeof wx && ("undefined" != typeof window && (window.wx = y), "undefined" != typeof global && (global.wx = y));
    const w = {
            data: {},
            init: function() {},
            getGifById: function(e, t) {
                try {
                    let a = w.data[e];
                    if (!a || 0 === a.length) return;
                    let i = a[0].sourceWidth,
                        s = a[0].sourceHeight,
                        n = new Laya.Sprite(),
                        o = -1;

                    function nextFrame() {
                        ++o > a.length - 1 && (o = 0);
                        let e = a[o];
                        n.graphics.clear(), n.graphics.drawTexture(e, 0, 0);
                    }
                    return nextFrame(), Laya.timer.loop(1e3 / 12, n, nextFrame), t && (n.scaleX = t / i,
                        n.scaleY = t / s), n;
                } catch (e) {
                    return;
                }
            }
        },
        b = e => (e.anchorX = .5, e.anchorY = .5, e),
        C = {
            floatData: [],
            youlikeData: [],
            sixData: [],
            bottomData: [],
            drawerData: [],
            fullscreenData: [],
            data: null,
            _callbacks: [],
            homeCallback: null,
            initAd: function(e) {
                if (this.data) return e();
                if (this._callbacks.push(e), this._callbacks.length > 1) return;
                // w.init();
                let t = Math.ceil(Date.now() / 1e3);
                md5$1("appid:" + i.APP_ID + "timestamp:" + t + i.AD_ID.ZHISE);
                l.loadAd(e => {
                    this.data = e.promotion, this.data.forEach(function(e) {
                            -1 === e.app_icon.indexOf(".gif") && Laya.loader.load(e.app_icon);
                        }), this.floatData = [...this.data], this.youlikeData = [...this.data], this.sixData = [...this.data],
                        this.bottomData = [...this.data], this.drawerData = [...this.data], this.fullscreenData = [...this.data],
                        Laya.loader.load("res/atlas/zhise.atlas", Laya.Handler.create(this, function() {
                            this._callbacks.forEach(e => e()), this._callbacks = [];
                        }));
                });
            },
            buildFloat: function(e) {
                this.initAd(() => {
                    let t = null,
                        i = [...this.floatData];
                    i.sort((e, t) => Math.random() > .5 ? -1 : 1);
                    let s = new Laya.Sprite(),
                        n = b(new Laya.Image("zhise/img_float_ad.png"));
                    s.addChild(n);
                    let o = new Laya.Sprite();
                    o.x = 6, o.y = 6, n.addChild(o);
                    let r = b(new Laya.Label(""));
                    r.color = "#ffffff", r.fontSize = 26, r.x = 66, r.y = 160, n.addChild(r);
                    const h = e => {
                        if (e) {
                            let e = 8,
                                t = 80;
                            Laya.Tween.to(s, {
                                rotation: e
                            }, t), Laya.timer.once(t, s, function() {
                                Laya.Tween.to(s, {
                                    rotation: -e
                                }, t);
                            }), Laya.timer.once(2 * t, s, function() {
                                Laya.Tween.to(s, {
                                    rotation: e
                                }, t);
                            }), Laya.timer.once(3 * t, s, function() {
                                Laya.Tween.to(s, {
                                    rotation: -e
                                }, t);
                            }), Laya.timer.once(4 * t, s, function() {
                                Laya.Tween.to(s, {
                                    rotation: e
                                }, t);
                            }), Laya.timer.once(5 * t, s, function() {
                                Laya.Tween.to(s, {
                                    rotation: 0
                                }, t);
                            });
                        }
                        t = i.shift(), i.push(t), r.text = t.app_title, Laya.loader.load(t.app_icon, Laya.Handler.create(s, function() {
                            try {
                                let e = Laya.loader.getRes(t.app_icon);
                                o.graphics.clear(), o.graphics.drawTexture(e, 0, 0, 120, 120), o.gif && (o.gif.destroy(),
                                    o.gif = null);
                                let a = w.getGifById(t.appid, 120);
                                a && (o.gif = a, o.addChild(a));
                            } catch (e) {
                                console.log(e);
                            }
                        }));
                    };
                    h(!1), Laya.timer.loop(6e3, s, function() {
                        h(!0);
                    }), n.addComponent(a), n.click = (() => {
                        this.click(t);
                    }), e(s);
                });
            },
            buildFloat2: function(e, t = !0) {
                // this.initAd(() => {
                //     let i = null, s = [ ...this.floatData ];
                //     s.sort((e, t) => Math.random() > .5 ? -1 : 1);
                //     let n = new Laya.Sprite(), o = b(new Laya.Image("zhise/img_you_like_board.png"));
                //     n.addChild(o);
                //     let r = new Laya.Sprite();
                //     r.x = 26, r.y = 22, o.addChild(r);
                //     let h = b(new Laya.Label(""));
                //     h.fontSize = 28, h.y = o.height - 44, h.x = o.width / 2, o.addChild(h);
                //     const l = e => {
                //         if (e) {
                //             let e = 8, t = 80;
                //             Laya.Tween.to(n, {
                //                 rotation: e
                //             }, t), Laya.timer.once(t, n, function() {
                //                 Laya.Tween.to(n, {
                //                     rotation: -e
                //                 }, t);
                //             }), Laya.timer.once(2 * t, n, function() {
                //                 Laya.Tween.to(n, {
                //                     rotation: e
                //                 }, t);
                //             }), Laya.timer.once(3 * t, n, function() {
                //                 Laya.Tween.to(n, {
                //                     rotation: -e
                //                 }, t);
                //             }), Laya.timer.once(4 * t, n, function() {
                //                 Laya.Tween.to(n, {
                //                     rotation: e
                //                 }, t);
                //             }), Laya.timer.once(5 * t, n, function() {
                //                 Laya.Tween.to(n, {
                //                     rotation: 0
                //                 }, t);
                //             });
                //         }
                //         i = s.shift(), s.push(i), h.text = i.app_title, Laya.loader.load(i.app_icon, Laya.Handler.create(n, function() {
                //             try {
                //                 let e = Laya.loader.getRes(i.app_icon);
                //                 if (r.graphics.clear(), r.graphics.drawTexture(e, 0, 0, 158, 158), t) {
                //                     r.gif && (r.gif.destroy(), r.gif = null);
                //                     let e = w.getGifById(i.appid, 158);
                //                     e && (r.gif = e, r.addChild(e));
                //                 }
                //             } catch (e) {
                //                 console.log(e);
                //             }
                //         }));
                //     };
                //     l(!1), Laya.timer.loop(6e3, n, function() {
                //         l(!0);
                //     }), o.addComponent(a), o.click = (() => {
                //         this.click(i);
                //     }), e(n);
                // });
            },
            buildYouLike: function(e) {
                this.initAd(() => {
                    let t = [...this.youlikeData];
                    t.sort((e, t) => Math.random() > .5 ? -1 : 1);
                    let i = new Laya.Sprite(),
                        s = b(new Laya.Image("zhise/img_you_like.png"));
                    i.addChild(s);
                    for (let e = 0; e < 4; e++) {
                        let s = t[e],
                            n = b(new Laya.Image("zhise/img_you_like_board.png"));
                        n.y = 200, n.x = 230 * e - 345, n.addComponent(a), n.click = (() => {
                            this.click(s);
                        });
                        let e = new Laya.Sprite();
                        e.x = 26, e.y = 22, n.addChild(e), Laya.loader.load(s.app_icon, Laya.Handler.create(this, function() {
                            let t = Laya.loader.getRes(s.app_icon);
                            e.graphics.drawTexture(t, 0, 0, 158, 158);
                        }));
                        let r = b(new Laya.Label(s.app_title));
                        r.fontSize = 28, r.y = n.height - 44, r.x = n.width / 2, n.addChild(r), i.addChild(n);
                    }
                    e(i);
                });
            },
            buildSix: function(e) {
                // this.initAd(() => {
                //     let t = new Laya.Sprite(), i = [];
                //     const s = () => {
                //         i.forEach(e => e.destroy()), i = [];
                //         let e = [ ...this.sixData ];
                //         e.sort((e, t) => Math.random() > .5 ? -1 : 1);
                //         for (let s = 0; s < 6; s++) {
                //             let n = e[s], o = b(new Laya.Image("zhise/img_moregamepage_ico_gamecardbg_" + s + ".png"));
                //             o.x = s % 3 * 350 - 350, o.y = 430 * Math.floor(s / 3) + o.height / 2;
                //             let r = w.getGifById(n.appid, 293);
                //             if (r) r.x = 10, r.y = 10, o.addChild(r); else {
                //                 let e = new Laya.Sprite();
                //                 e.x = 10, e.y = 10, o.addChild(e), Laya.loader.load(n.app_icon, Laya.Handler.create(this, function() {
                //                     let t = Laya.loader.getRes(n.app_icon);
                //                     e.graphics.drawTexture(t, 0, 0, 293, 293);
                //                 }));
                //             }
                //             let h = b(new Laya.Label(n.app_title));
                //             h.fontSize = 40, h.color = "#ffffff", h.y = o.height - 46, h.x = o.width / 2, o.addChild(h), 
                //             o.addComponent(a), o.click = (() => {
                //                 this.click(n);
                //             });
                //             let l = Math.floor(3 * Math.random());
                //             if (1 === l) {
                //                 let e = new Laya.Image("zhise/img_hot.png");
                //                 e.width = 124, e.height = 76, e.x = 214, e.y = -28, o.addChild(e);
                //             } else if (2 === l) {
                //                 let e = new Laya.Image("zhise/img_new.png");
                //                 e.width = 124, e.height = 76, e.x = 214, e.y = -28, o.addChild(e);
                //             }
                //             t.addChild(o), i.push(o);
                //         }
                //     };
                //     s(), Laya.timer.loop(5e3, t, () => {
                //         s();
                //     }), e(t);
                // });
            },
            buildBottom: function(e) {
                let forgames = platform.getInstance().getForgames();
                let t = forgames;
                let {
                    width: a,
                    height: i
                } = Laya.stage,
                    s = new Laya.Sprite();
                s.width = a, s.height = 300;
                let n = new Laya.Sprite();
                n.width = a, n.height = 300, n.graphics.drawRect(0, 0, a, 300, "#000000"), n.alpha = .5,
                    s.addChild(n);
                let o = new Laya.Sprite();
                o.width = 235 * t.length + 130, o.height = 300, s.addChild(o);
                let r = [];
                for (let i = 0; i < t.length; i++) {
                    let a = t[i];
                    let image = b(new Laya.Image("zhise/img_you_like_board.png"));
                    image.x = 235 * i + 130,
                        image.y = 155;
                    image.dataSource = a;
                    let e = new Laya.Sprite();
                    e.x = 26, e.y = 22,
                        image.addChild(e),
                        Laya.loader.load(a.thumb, Laya.Handler.create(this, function() {
                            let t = Laya.loader.getRes(a.thumb);
                            e.graphics.drawTexture(t, 0, 0, 158, 158);
                        }));
                    let n = b(new Laya.Label(a.name));
                    n.width = image.width;
                    n.align = "center";
                    n.wordWrap = true;
                    n.fontSize = 22,
                        n.y = image.height - 44,
                        n.x = image.width / 2,
                        image.addChild(n),
                        o.addChild(image),
                        r.push(image);
                }
                let h = !1,
                    l = 0,
                    d = 0,
                    c = -1,
                    g = !0;
                o.on("mousedown", s, e => {
                        if (h = !0, g = !1, l = e.stageX, d = e.stageX, Math.abs(e.stageX - d) < 40) {
                            let xx = -o.x + e.stageX,
                                a = Math.round((xx - 117.5) / 235),
                                i = r[a];
                            // i.scaleX = .9, i.scaleY = .9;
                            platform.getInstance().navigate("HOME", "More", i.dataSource.id);
                        }
                    }), o.on("mouseup", s, e => {
                        h = !1, g = !0
                    }),
                    o.on("mouseout", s, e => {
                        h = !1, g = !0
                    }),
                    o.on("mousemove", s, e => {
                        h && (o.x += e.stageX - l, o.x = Math.min(0, o.x), o.x = Math.max(-235 * t.length + a, o.x),
                            l = e.stageX, r.forEach(e => {
                                e.visible = !(e.x + o.x < -e.width / 2 || e.x + o.x > a + e.width / 2);
                            }));
                    }),
                    Laya.timer.frameLoop(1, s, () => {
                        g && (o.x += c, o.x > 0 ? (o.x = 0, c = -1) : o.x < -235 * t.length + a && (o.x = -235 * t.length + a,
                            c = 1), r.forEach(e => {
                            e.visible = !(e.x + o.x < -e.width / 2 || e.x + o.x > a + e.width / 2);
                        }));
                    }), e(s);
            },
            buildDrawer: function(e) {
                this.initAd(() => {
                    let t = new Laya.Sprite(),
                        i = "close",
                        {
                            width: s,
                            height: n
                        } = Laya.stage,
                        o = new Laya.Sprite();
                    o.width = s, o.height = n, o.graphics.drawRect(0, 0, s, n, "#000000"), o.on("mousedown", o, () => {}),
                        o.alpha = .8, o.visible = !1, t.addChild(o);
                    let r = new Laya.Image("zhise/img_drawer_board.png");
                    r.anchorX = 1, r.anchorY = .5, r.y = n / 2, r.visible = !1, t.addChild(r);
                    let h = [...this.drawerData];
                    h.sort((e, t) => Math.random() > .5 ? -1 : 1);
                    for (let e = 0; e < 12; e++) {
                        let t = h[e % h.length],
                            i = b(new Laya.Image("zhise/img_draw_icon.png"));
                        i.x = e % 3 * 227 + 130, i.y = 269 * Math.floor(e / 3) + 267, i.addComponent(a),
                            i.click = (() => {
                                this.click(t);
                            }), r.addChild(i);
                        let s = w.getGifById(t.appid, 158);
                        if (s) s.x = 16, s.y = 12, i.addChild(s);
                        else {
                            let e = new Laya.Sprite();
                            e.x = 16, e.y = 12, i.addChild(e), Laya.loader.load(t.app_icon, Laya.Handler.create(this, function() {
                                let a = Laya.loader.getRes(t.app_icon);
                                e.graphics.drawTexture(a, 0, 0, 158, 158);
                            }));
                        }
                        let n = Math.floor(3 * Math.random());
                        if (1 === n) {
                            let e = new Laya.Image("zhise/img_hot.png");
                            e.x = 116, e.y = -11, i.addChild(e);
                        } else if (2 === n) {
                            let e = new Laya.Image("zhise/img_new.png");
                            e.x = 116, e.y = -11, i.addChild(e);
                        }
                        let o = b(new Laya.Label(t.app_title));
                        o.fontSize = 30, o.x = i.width / 2, o.y = 214, i.addChild(o);
                    }
                    let l = new Laya.Image("zhise/btn_drawer_open.png");
                    l.anchorY = .5, l.y = n / 2, l.addComponent(a), l.click = (() => {
                        Laya.Tween.clearAll(l), Laya.Tween.clearAll(r), "close" === i ? (o.visible = !0,
                            i = "open", r.visible = !0, l.skin = "zhise/btn_drawer_close.png", Laya.Tween.to(l, {
                                x: 716
                            }, 300, Laya.Ease.sineOut), Laya.Tween.to(r, {
                                x: 716
                            }, 300, Laya.Ease.sineOut)) : (o.visible = !1, i = "close", l.skin = "zhise/btn_drawer_open.png",
                            Laya.Tween.to(l, {
                                x: 0
                            }, 300, Laya.Ease.sineOut), Laya.Tween.to(r, {
                                x: 0
                            }, 300, Laya.Ease.sineOut, Laya.Handler.create(r, function() {
                                r.visible = !1;
                            })));
                    }), t.btn = l, t.addChild(l), e(t);
                });
            },
            buildFullScreen: function(e) {
                u.hideBannerAd(), this.initAd(() => {
                    let t = [...this.fullscreenData];
                    t.sort((e, t) => Math.random() > .5 ? -1 : 1);
                    let {
                        width: i,
                        height: s
                    } = Laya.stage, n = i / 2, o = s / 2, r = new Laya.Sprite();
                    r.width = i, r.height = s, r.graphics.drawRect(0, 0, i, s, "#4C3A9D");
                    let h = new Laya.Sprite();
                    h.width = Laya.stage.width, h.height = Laya.stage.height, h.y = o - 186 - 196, r.addChild(h);
                    let l = new Laya.Sprite();
                    l.graphics.drawRect(0, 0, i, o - 400, "#4C3A9D"), r.addChild(l);
                    let d = [],
                        c = 0,
                        g = 0,
                        m = 0,
                        p = 0,
                        u = null,
                        f = !1;
                    h.on("mousedown", h, function(e) {
                        f = !0, c = e.stageX, g = e.stageY, m = e.stageX, p = e.stageY;
                        for (let t = 0; t < d.length; t++) d[t].hitTestPoint(e.stageX, e.stageY) && (d[t].scaleX = .9,
                            d[t].scaleY = .9, u = d[t]);
                    }), h.on("mousemove", h, function(e) {
                        f = !0;
                        let t = e.stageY - p;
                        p = e.stageY;
                        for (let e = 0; e < d.length; e++) d[e].y += t, d[e].y < -500 && (d[e].y += 2700),
                            d[e].y > 2e3 && (d[e].y -= 2700);
                    }), h.on("mouseup", h, function(e) {
                        f = !1;
                        for (let e = 0; e < d.length; e++) d[e].scaleX = 1, d[e].scaleY = 1;
                        u && Math.abs(e.stageX - c) < 20 && Math.abs(e.stageY - g) < 20 && e.stageY > -196 && (u.click(),
                            u = null);
                    });
                    for (let e = 0; e < 18; e++) {
                        let a = t.shift();
                        t.push(a);
                        let i = b(new Laya.Image("zhise/img_moregamepage_ico_gamecardbg_" + e % 9 + ".png"));
                        i.x = e % 3 * 350 - 350 + n, i.y = 450 * Math.floor(e / 3) + 196;
                        let s = w.getGifById(a.appid, 293);
                        if (s) s.x = 10, s.y = 10, i.addChild(s);
                        else {
                            let e = new Laya.Sprite();
                            e.x = 10, e.y = 10, i.addChild(e), Laya.loader.load(a.app_icon, Laya.Handler.create(this, function() {
                                let t = Laya.loader.getRes(a.app_icon);
                                e.graphics.drawTexture(t, 0, 0, 293, 293);
                            }));
                        }
                        let o = b(new Laya.Label(a.app_title));
                        o.fontSize = 40, o.color = "#ffffff", o.y = i.height - 46, o.x = i.width / 2, i.addChild(o),
                            i.click = (() => {
                                this.click(a, !1);
                            });
                        let r = Math.floor(3 * Math.random());
                        if (1 === r) {
                            let e = new Laya.Image("zhise/img_hot.png");
                            e.width = 124, e.height = 76, e.x = 214, e.y = -28, i.addChild(e);
                        } else if (2 === r) {
                            let e = new Laya.Image("zhise/img_new.png");
                            e.width = 124, e.height = 76, e.x = 214, e.y = -28, i.addChild(e);
                        }
                        h.addChild(i), d.push(i);
                    }
                    let y = b(new Laya.Image("zhise/btn_back.png"));
                    y.x = 146, y.y = o - 880, r.addChild(y), y.addComponent(a), y.click = (() => {
                        if (r.closeCallback) try {
                            r.closeCallback();
                        } catch (e) {
                            console.log(e);
                        }
                        r.destroy();
                    });
                    let C = b(new Laya.Image("zhise/adpage_btn_continue.png"));
                    C.x = n, C.y = s - 180, r.addChild(C), C.addComponent(a), C.click = (() => {
                        if (r.closeCallback) try {
                            r.closeCallback();
                        } catch (e) {
                            console.log(e);
                        }
                        r.destroy();
                    });
                    let L = b(new Laya.Image("zhise/btn_home.png"));
                    L.x = 360, L.y = o - 880, r.addChild(L), L.addComponent(a), L.click = (() => {
                        if (r.homeCallback) try {
                            r.homeCallback();
                        } catch (e) {
                            console.log(e);
                        }
                        r.destroy();
                    });
                    let x = b(new Laya.Image("zhise/img_zhise.png"));
                    x.x = n, x.y = o - 880, r.addChild(x);
                    let _ = b(new Laya.Image("zhise/img_freind_play.png"));
                    _.x = 142, _.y = o - 770, r.addChild(_);
                    let k = b(new Laya.Image("zhise/img_friendplay_bg.png"));
                    k.x = n, k.y = o - 620, r.addChild(k);
                    let v = new Laya.Image("zhise/img_friendplay_bg.png");
                    k.mask = v;
                    let S = [];
                    for (let e = 0; e < t.length; e++) {
                        let i = t.shift();
                        t.push(i);
                        let s = b(new Laya.Image());
                        s.width = 150, s.height = 150;
                        let n = w.getGifById(i.appid, 150);
                        if (n) s.addChild(n);
                        else {
                            let e = new Laya.Sprite();
                            s.addChild(e), Laya.loader.load(i.app_icon, Laya.Handler.create(this, function() {
                                let t = Laya.loader.getRes(i.app_icon);
                                e.graphics.drawTexture(t, 0, 0, 150, 150);
                            }));
                        }
                        s.x = 196 * (e + 1) - 98, s.y = 109, s.addComponent(a), s.click = (() => {
                            this.click(i, !1);
                        }), S.push(s), k.addChild(s);
                    }
                    Laya.timer.frameLoop(1, r, function() {
                        for (let e = 0; e < S.length; e++) {
                            let a = S[e];
                            a.x -= 1, a.x < -120 && (a.x += 196 * t.length);
                        }
                        if (!f)
                            for (let e = 0; e < d.length; e++) d[e].y -= 1, d[e].y < -500 && (d[e].y += 2700),
                                d[e].y > 2e3 && (d[e].y -= 2700);
                    });
                    let B = b(new Laya.Image("zhise/img_hot_label.png"));
                    B.x = 142, B.y = o - 440, r.addChild(B), e(r);
                });
            },
            click: function(e, t = !0) {
                if (wx.isFake) return console.log(e);
                if ("ios" === wx.getSystemInfoSync().platform)
                    for (; i.BOX_AD_APP.indexOf(e.appid) > -1;) e.appid = i.AD_APP_ID[Math.floor(Math.random() * i.AD_APP_ID.length)];
                l.navigate2Mini(e, u.openId, () => {
                    t && u.zhiseAdSwitch && setTimeout(() => {
                        C.buildFullScreen(e => {
                            e.zOrder = 9999, Laya.stage.addChild(e);
                        });
                    }, 1e3);
                }, () => {
                    t && u.zhiseAdSwitch && C.buildFullScreen(e => {
                        e.zOrder = 9999, Laya.stage.addChild(e);
                    });
                });
            }
        },
        L = (e, t, a, i, s, n) => {
            let o = new Laya.Sprite();
            o.graphics.drawRect(0, 0, e, t, a), o.x = i, o.y = s, o.width = e, o.height = t,
                o.on("mousedown", () => {}), n.addChild(o);
        },
        x = e => (e.anchorX = .5, e.anchorY = .5, e);
    class _ extends Laya.Sprite {
        constructor() {
            super(), this.onLoad();
        }
        onLoad() {
            let {
                width: e,
                height: n
            } = Laya.stage, o = e / 2, r = n / 2;
            this.lightBg = L(e, r - 784, "#4C4C83", 0, 0, this), this.deepBg = L(e, r + 784, "#282847", 0, r - 784, this),
                this.backBtn = new Laya.Image("wx_m_settingPage/btn_back.png"), this.backBtn.anchorX = 0,
                this.backBtn.anchorY = .5, this.backBtn.x = 0, this.backBtn.y = r - 854, this.backBtn.addComponent(a),
                this.backBtn.click = (() => {
                    this.destroy();
                }), this.addChild(this.backBtn), this.titleImg = x(new Laya.Image("wx_m_settingPage/img_title.png")),
                this.titleImg.x = o, this.titleImg.y = r - 854, this.addChild(this.titleImg), this.bgmBtn = x(new Laya.Image(t.getBgmOn() ? "wx_m_settingPage/btn_bgm.png" : "wx_m_settingPage/btn_bgm_dis.png")),
                this.bgmBtn.x = 182, this.bgmBtn.y = r - 580, this.bgmBtn.addComponent(a), this.bgmBtn.click = (() => {
                    t.getBgmOn() ? (t.disableBgm(), this.bgmBtn.skin = "wx_m_settingPage/btn_bgm_dis.png") : (t.enableBgm(),
                        this.bgmBtn.skin = "wx_m_settingPage/btn_bgm.png");
                }), this.addChild(this.bgmBtn), this.bgmImg = x(new Laya.Image("wx_m_settingPage/img_bgm.png")),
                this.bgmImg.x = 344, this.bgmImg.y = r - 580, this.addChild(this.bgmImg), this.effectBtn = x(new Laya.Image(t.getEffectOn() ? "wx_m_settingPage/btn_effect.png" : "wx_m_settingPage/btn_effect_dis.png")),
                this.effectBtn.x = 702, this.effectBtn.y = r - 580, this.effectBtn.addComponent(a),
                this.effectBtn.click = (() => {
                    t.getEffectOn() ? (t.disableEffect(), this.effectBtn.skin = "wx_m_settingPage/btn_effect_dis.png") : (t.enableEffect(),
                        this.effectBtn.skin = "wx_m_settingPage/btn_effect.png");
                }), this.addChild(this.effectBtn), this.effectImg = x(new Laya.Image("wx_m_settingPage/img_effect.png")),
                this.effectImg.x = 872, this.effectImg.y = r - 580, this.addChild(this.effectImg),
                Laya.timer.once(100, this, function() {}),
                this.logoBtn = x(new Laya.Image("wx_m_settingPage/btn_logo.png")), this.logoBtn.x = o,
                this.logoBtn.y = r + 719, this.logoBtn.addComponent(a), this.logoClickTimes = 0,
                this.logoBtn.click = (() => {
                    platform.getInstance().navigate("SETTING", "LOGO");
                }),
                this.addChild(this.logoBtn), Laya.timer.once(200, this, function() {});
        }
    }
    const k = e => (e.anchorX = .5, e.anchorY = .5, e);
    class v extends Laya.Sprite {
        constructor(e) {
            super(), this.btnY = e.btnY || Laya.stage.height - 200, this.sound = e.sound, this.success = e.success,
                this.complete = e.complete, this.showTimes = 0, this.onLoad();
        }
        onLoad() {
            let {
                width: e,
                height: t
            } = Laya.stage, i = e / 2, s = t / 2;
            this.count = 20, this.maskHeight = 0, this.finish = !1, this.isFirst = !0, this.showFirst = !1,
                this.tapTimeArr = [], this.totalCount = this.count, this.sampleCount = Math.floor(4 * Math.random() + 4),
                this.maskSp = new Laya.Sprite(), this.maskSp.width = e, this.maskSp.height = t,
                this.maskSp.graphics.drawRect(0, 0, e, t, "#000000"), this.maskSp.alpha = .9, this.maskSp.on("mousedown", this, () => {}),
                this.addChild(this.maskSp), this.title = k(new Laya.Image("wx_m_fraudEgg/ico_title.png")),
                this.title.x = i, this.title.y = s - 700, this.title.scaleX = 0, this.title.scaleY = 0,
                this.addChild(this.title), Laya.Tween.to(this.title, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut), this.egg = k(new Laya.Image("wx_m_fraudEgg/ico_egg.png")),
                this.egg.x = i, this.egg.y = s - 102, this.egg.scaleX = 0, this.egg.scaleY = 0,
                this.addChild(this.egg), Laya.Tween.to(this.egg, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.eggReapetAction();
                }), 200), this.hitEffect = k(new Laya.Image("wx_m_fraudEgg/Hit_1.png")), this.hitEffect.x = i + 100,
                this.hitEffect.y = s - 180, this.hitEffect.alpha = 0, this.addChild(this.hitEffect),
                this.hammer = new Laya.Image("wx_m_fraudEgg/ico_hammer.png"), this.hammer.x = i + 500,
                this.hammer.y = s, this.hammer.scaleX = 0, this.hammer.scaleY = 0, this.hammer.anchorX = 1,
                this.hammer.anchorY = 1, this.hammer.rotation = 10, Laya.Tween.to(this.hammer, {
                    scaleX: 1,
                    scaleY: 1
                }, 600), this.hammerReapetAction(), this.addChild(this.hammer), this.openBtn = k(new Laya.Image("wx_m_fraudEgg/btn_open.png")),
                this.openBtn.x = i, this.openBtn.y = this.btnY, this.openBtn.scaleX = 0, this.openBtn.scaleY = 0,
                this.openBtn.addComponent(a), this.openBtn.click = (() => {
                    this.btnClick();
                }), this.addChild(this.openBtn), Laya.Tween.to(this.openBtn, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.openBtn.getComponent(a).originScaleX = 1, this.openBtn.getComponent(a).originScaleY = 1;
                }), 400), this.tip = k(new Laya.Image("wx_m_fraudEgg/ico_press_label.png")), this.tip.x = i + 300,
                this.tip.y = this.openBtn.y - 250, this.tip.scaleX = 0, this.tip.scaleY = 0, this.addChild(this.tip),
                Laya.Tween.to(this.tip, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.tipReapetAction();
                })), this.hand = k(new Laya.Image("wx_m_fraudEgg/ico_hand.png")), this.hand.x = i + 300,
                this.hand.y = this.openBtn.y + 100, this.hand.scaleX = 0, this.hand.scaleY = 0,
                this.addChild(this.hand), Laya.Tween.to(this.hand, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.handReapetAction();
                })), C.buildBottom(e => {
                    e.y = s + 200, this.bottomZhiseAd = e, this.addChild(this.bottomZhiseAd);
                }), this.board = k(new Laya.Image("wx_m_fraudEgg/board.png")), this.board.x = 80,
                this.board.y = s - 100, this.addChild(this.board), this.bar = k(new Laya.Image("wx_m_fraudEgg/bar.png")),
                this.bar.x = 80, this.bar.y = s - 100, this.addChild(this.bar);
            let n = new Laya.Sprite();
            n.graphics.drawRect(0, 0, 77, this.maskHeight, "#ffffff"), n.width = 77, n.height = this.maskHeight,
                n.x = 0, n.y = 542 - this.maskHeight, this.bar.mask = n, Laya.timer.frameLoop(1, this, this.update);
        }
        update() {
            if (this.finish) return;
            if (0 === this.count) return;
            this.maskHeight -= 2, this.maskHeight <= 0 && (this.maskHeight = 0);
            let e = new Laya.Sprite();
            e.graphics.drawRect(0, 0, 77, this.maskHeight, "#ffffff"), e.width = 77, e.height = this.maskHeight,
                e.x = 0, e.y = 542 - this.maskHeight, this.bar.mask = null, this.bar.mask = e;
        }
        showEffect() {
            Laya.timer.once(50, this, function() {
                this.hitEffect.alpha = 1;
            }), Laya.timer.once(80, this, function() {
                this.hitEffect.skin = "wx_m_fraudEgg/Hit_1.png";
            }), Laya.timer.once(80, this, function() {
                this.hitEffect.skin = "wx_m_fraudEgg/Hit_2.png";
            }), Laya.timer.once(110, this, function() {
                this.hitEffect.skin = "wx_m_fraudEgg/Hit_3.png";
            }), Laya.timer.once(140, this, function() {
                this.hitEffect.skin = "wx_m_fraudEgg/Hit_4.png";
            }), Laya.timer.once(170, this, function() {
                this.hitEffect.alpha = 0;
            });
        }
        btnClick() {
            if (this.finish) return;
            this.isFirst && (this.startTime = Date.now(), this.isFirst = !1), this.sound && t.playEffect(this.sound);
            let e = 0,
                a = Date.now();
            this.tapTimeArr.push(a), this.tapTimeArr.length < this.sampleCount ? (e = this.tapTimeArr.length / (a - this.tapTimeArr[0]),
                    e = Math.min(e, .001 * this.tapTimeArr.length)) : e = this.sampleCount / (a - this.tapTimeArr[this.tapTimeArr.length - this.sampleCount]),
                e *= 125, (e = Math.min(1, e)) >= .5 && !this.firstShow && (this.firstShow = !0,
                    this.success && this.success(), this.nextShow = !0, wx.onHide(() => {
                        Laya.timer.clearAll(this), this.pass = !0, this.finish = !0, this.complete && this.complete(),
                            wx.offHide(), this.destroy();
                    }), Laya.timer.once(2e4, this, () => {
                        Laya.timer.clearAll(this), this.pass = !0, this.finish = !0, this.complete && this.complete(),
                            wx.offHide(), this.destroy();
                    })), this.nextShow && (this.nextShow = !1, Laya.timer.once(1500, this, this.secondShow.bind(this))),
                this.maskHeight = 542 * e;
            let i = new Laya.Sprite();
            i.graphics.drawRect(0, 0, 77, this.maskHeight, "#ffffff"), i.width = 77, i.height = this.maskHeight,
                i.x = 0, i.y = 542 - this.maskHeight, this.bar.mask = null, this.bar.mask = i;
        }
        secondShow() {
            this.success && this.success(), this.nextShow = !0;
        }
        handReapetAction() {
            Laya.Tween.to(this.hand, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 1e3, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.hand, {
                    scaleX: 1,
                    scaleY: 1
                }, 1e3, null, Laya.Handler.create(this, function() {
                    this.handReapetAction();
                }));
            }));
        }
        tipReapetAction() {
            Laya.Tween.to(this.tip, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 1e3, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.tip, {
                    scaleX: 1,
                    scaleY: 1
                }, 1e3, null, Laya.Handler.create(this, function() {
                    this.tipReapetAction();
                }));
            }));
        }
        eggReapetAction() {
            Laya.Tween.to(this.egg, {
                scaleX: .9,
                scaleY: .9
            }, 1e3, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.egg, {
                    scaleX: 1,
                    scaleY: 1
                }, 1e3, null, Laya.Handler.create(this, function() {
                    this.eggReapetAction();
                }));
            }));
        }
        hammerReapetAction() {
            Laya.Tween.to(this.hammer, {
                rotation: -10
            }, 100, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.hammer, {
                    rotation: 10
                }, 100, null, Laya.Handler.create(this, function() {
                    this.hammerReapetAction();
                }));
            }));
        }
    }
    const S = e => (e.anchorX = .5, e.anchorY = .5, e);
    class B extends Laya.Sprite {
        constructor(e) {
            super(), this.btnY = e.btnY || Laya.stage.height - 200, this.sound = e.sound, this.success = e.success,
                this.complete = e.complete, this.showTimes = 0, this.onLoad();
        }
        onLoad() {
            let {
                width: e,
                height: t
            } = Laya.stage, i = e / 2, s = t / 2;
            this.count = 20, this.maskHeight = 0, this.finish = !1, this.isFirst = !0, this.showFirst = !1,
                this.tapTimeArr = [], this.totalCount = this.count, this.sampleCount = Math.floor(4 * Math.random() + 4),
                this.maskSp = new Laya.Sprite(), this.maskSp.width = e, this.maskSp.height = t,
                this.maskSp.graphics.drawRect(0, 0, e, t, "#000000"), this.maskSp.alpha = .9, this.maskSp.on("mousedown", this, () => {}),
                this.addChild(this.maskSp), this.title = S(new Laya.Image("wx_m_fraudEgg/eggwindow_ico_slogan.png")),
                this.title.x = i, this.title.y = s - 700, this.title.scaleX = 0, this.title.scaleY = 0,
                this.addChild(this.title), Laya.Tween.to(this.title, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut), this.egg = S(new Laya.Image("wx_m_fraudEgg/savewindow_car_fire.png")),
                this.egg.x = i, this.egg.y = s - 102, this.egg.scaleX = 0, this.egg.scaleY = 0,
                this.addChild(this.egg), Laya.Tween.to(this.egg, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.eggReapetAction();
                }), 200), this.openBtn = S(new Laya.Image("wx_m_fraudEgg/savewindow_btn_save.png")),
                this.openBtn.x = i, this.openBtn.y = this.btnY, this.openBtn.scaleX = 0, this.openBtn.scaleY = 0,
                this.openBtn.addComponent(a), this.openBtn.click = (() => {
                    this.btnClick();
                }), this.addChild(this.openBtn), Laya.Tween.to(this.openBtn, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.openBtn.getComponent(a).originScaleX = 1, this.openBtn.getComponent(a).originScaleY = 1;
                }), 400), this.tip = S(new Laya.Image("wx_m_fraudEgg/ico_press_label.png")), this.tip.x = i + 300,
                this.tip.y = this.openBtn.y - 250, this.tip.scaleX = 0, this.tip.scaleY = 0, this.addChild(this.tip),
                Laya.Tween.to(this.tip, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.tipReapetAction();
                })), this.hand = S(new Laya.Image("wx_m_fraudEgg/ico_hand.png")), this.hand.x = i + 300,
                this.hand.y = this.openBtn.y + 100, this.hand.scaleX = 0, this.hand.scaleY = 0,
                this.addChild(this.hand), C.buildBottom(e => {
                    e.y = s + 200, this.bottomZhiseAd = e, this.addChild(this.bottomZhiseAd);
                }), Laya.Tween.to(this.hand, {
                    scaleX: 1,
                    scaleY: 1
                }, 400, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                    this.handReapetAction();
                })), this.board = S(new Laya.Image("wx_m_fraudEgg/board.png")), this.board.x = 80,
                this.board.y = s - 100, this.addChild(this.board), this.bar = S(new Laya.Image("wx_m_fraudEgg/bar.png")),
                this.bar.x = 80, this.bar.y = s - 100, this.addChild(this.bar);
            let n = new Laya.Sprite();
            n.graphics.drawRect(0, 0, 77, this.maskHeight, "#ffffff"), n.width = 77, n.height = this.maskHeight,
                n.x = 0, n.y = 542 - this.maskHeight, this.bar.mask = n, Laya.timer.frameLoop(1, this, this.update);
        }
        update() {
            if (this.finish) return;
            if (0 === this.count) return;
            this.maskHeight -= 2, this.maskHeight <= 0 && (this.maskHeight = 0);
            let e = new Laya.Sprite();
            e.graphics.drawRect(0, 0, 77, this.maskHeight, "#ffffff"), e.width = 77, e.height = this.maskHeight,
                e.x = 0, e.y = 542 - this.maskHeight, this.bar.mask = null, this.bar.mask = e;
        }
        btnClick() {
            if (this.finish) return;
            this.isFirst && (this.startTime = Date.now(), this.isFirst = !1), this.sound && t.playEffect(this.sound);
            let e = 0,
                a = Date.now();
            this.tapTimeArr.push(a), this.tapTimeArr.length < this.sampleCount ? (e = this.tapTimeArr.length / (a - this.tapTimeArr[0]),
                    e = Math.min(e, .001 * this.tapTimeArr.length)) : e = this.sampleCount / (a - this.tapTimeArr[this.tapTimeArr.length - this.sampleCount]),
                e *= 125, (e = Math.min(1, e)) >= .5 && !this.firstShow && (this.firstShow = !0,
                    this.success && this.success(), this.nextShow = !0, wx.onHide(() => {
                        Laya.timer.clearAll(this), this.pass = !0, this.finish = !0, this.complete && this.complete(),
                            wx.offHide(), this.destroy();
                    }), Laya.timer.once(2e4, this, () => {
                        Laya.timer.clearAll(this), this.pass = !0, this.finish = !0, this.complete && this.complete(),
                            wx.offHide(), this.destroy();
                    })), this.nextShow && (this.nextShow = !1, Laya.timer.once(1500, this, this.secondShow.bind(this))),
                this.maskHeight = 542 * e;
            let i = new Laya.Sprite();
            i.graphics.drawRect(0, 0, 77, this.maskHeight, "#ffffff"), i.width = 77, i.height = this.maskHeight,
                i.x = 0, i.y = 542 - this.maskHeight, this.bar.mask = null, this.bar.mask = i;
        }
        secondShow() {
            this.success && this.success(), this.nextShow = !0;
        }
        handReapetAction() {
            Laya.Tween.to(this.hand, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 1e3, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.hand, {
                    scaleX: 1,
                    scaleY: 1
                }, 1e3, null, Laya.Handler.create(this, function() {
                    this.handReapetAction();
                }));
            }));
        }
        tipReapetAction() {
            Laya.Tween.to(this.tip, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 1e3, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.tip, {
                    scaleX: 1,
                    scaleY: 1
                }, 1e3, null, Laya.Handler.create(this, function() {
                    this.tipReapetAction();
                }));
            }));
        }
        eggReapetAction() {
            Laya.Tween.to(this.egg, {
                scaleX: .9,
                scaleY: .9
            }, 1e3, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.egg, {
                    scaleX: 1,
                    scaleY: 1
                }, 1e3, null, Laya.Handler.create(this, function() {
                    this.eggReapetAction();
                }));
            }));
        }
    }
    let I = {
            _banner: null,
            show: function() {
                if ("dev" !== u.env && !wx.isFake) {
                    if (!this._banner) {
                        let e = wx.getSystemInfoSync();
                        this._banner = wx.createBannerAd({
                            adUnitId: i.AD_ID.FAKE_BANNER[0],
                            style: {
                                left: e.screenWidth - 1,
                                top: e.screenHeight - 1,
                                width: e.screenWidth - 20,
                                height: 100 * e.screenWidth / 320 - 10
                            }
                        }), this._banner.onError && this._banner.onError(() => {}), this._banner.onLoad && this._banner.onLoad(() => {});
                    }
                    this._banner.show();
                }
            },
            destroy: function() {
                "dev" !== u.env && this._banner && (console.log("refresh fraud banner!~~~~"), this._banner.destroy(),
                    this._banner = null);
            },
            reload: function() {
                this.destroy(), this.show();
            }
        },
        A = {
            _banner: null,
            show: function() {
                if ("dev" !== u.env && !wx.isFake) {
                    if (!this._banner) {
                        let e = wx.getSystemInfoSync();
                        this._banner = wx.createBannerAd({
                            adUnitId: i.AD_ID.FAKE_BANNER[1],
                            style: {
                                left: e.screenWidth - 1,
                                top: e.screenHeight - 1,
                                width: e.screenWidth - 20,
                                height: 100 * e.screenWidth / 320 - 10
                            }
                        }), this._banner.onError && this._banner.onError(() => {}), this._banner.onLoad && this._banner.onLoad(() => {});
                    }
                    this._banner.show();
                }
            },
            destroy: function() {
                "dev" !== u.env && this._banner && (console.log("refresh fraud banner!~~~~"), this._banner.destroy(),
                    this._banner = null);
            },
            reload: function() {
                this.destroy(), this.show();
            }
        };
    class D extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.game = this.owner.parent.getComponent(N),
                this.homepage = this.owner.getChildByName("homepage"),
                this.gamepage = this.owner.getChildByName("gamepage"),
                this.endpage = this.owner.getChildByName("endpage"),
                this.continue = this.owner.getChildByName("continue"),
                this.coinpage = this.owner.getChildByName("coinpage"),
                this.upgrade = this.owner.getChildByName("upgrade"),
                this.coin = this.owner.getChildByName("coin"),



                this.logo = this.gamepage.getChildByName("logo");
            this.logo.on(Laya.Event.MOUSE_DOWN, this, () => {
                if (this.gamepage.visible) {
                    platform.getInstance().navigate("GAME", "LOGO");
                }
            })

            this.homepage.getChildByName("moregame_btn").on(Laya.Event.MOUSE_DOWN, this, this.moreGameBtnCallback)

            this.homepage.getChildByName("start_btn").clickHandler = new Laya.Handler(this, this.startBtnCallback),

                this.homepage.getChildByName("skin_btn").clickHandler = new Laya.Handler(this, this.skinBtnCallback),
                this.homepage.getChildByName("setting_btn").clickHandler = new Laya.Handler(this, this.settingBtnCallback),
                // this.homepage.getChildByName("share_btn").clickHandler = new Laya.Handler(this, this.shareBtnCallback), 
                this.endpage.getChildByName("restart_btn").clickHandler = new Laya.Handler(this, this.restartBtnCallback),
                this.endpage.getChildByName("next_btn").clickHandler = new Laya.Handler(this, this.restartBtnCallback),
                this.endpage.getChildByName("home_btn").clickHandler = new Laya.Handler(this, this.homeBtnCallback),
                this.continue.getChildByName("skip_btn").clickHandler = new Laya.Handler(this, this.skipContinueBtnCallback),
                this.continue.getChildByName("ad_continue_btn").clickHandler = new Laya.Handler(this, this.adContinueBtnCallback),
                this.continue.getChildByName("coin_continue_btn").clickHandler = new Laya.Handler(this, this.coinContinueBtnCallback),
                this.coinpage.getChildByName("more_coin_btn").clickHandler = new Laya.Handler(this, this.moreCoinBtnCallback),
                this.coinpage.getChildByName("skip_btn").clickHandler = new Laya.Handler(this, this.skipCoinBtnCallback),
                this.upgrade.getChildByName("move_speed").clickHandler = new Laya.Handler(this, this.upgradeMoveSpeed),
                this.upgrade.getChildByName("upgrade_speed").clickHandler = new Laya.Handler(this, this.upgradeUpgradeSpeed),
                this.upgrade.getChildByName("coin_plus").clickHandler = new Laya.Handler(this, this.upgradeCoinPlus),
                this.timerLabel = this.gamepage.getChildByName("time").getChildByName("time_label"),
                this.rankList = [this.gamepage.getChildByName("rank1").getChildByName("name"),
                    this.gamepage.getChildByName("rank2").getChildByName("name"),
                    this.gamepage.getChildByName("rank3").getChildByName("name"),
                    this.gamepage.getChildByName("rank4").getChildByName("name")
                ],
                this.isHomepage = !0, this.initPage();
        }
        initPage() {
            let {
                width: e,
                height: t
            } = Laya.stage;
            this.owner.width = e, this.owner.height = t, this.homepage.width = e, this.homepage.height = t,
                this.gamepage.width = e, this.gamepage.height = t, this.endpage.width = e, this.endpage.height = t,
                this.continue.width = e, this.continue.height = t, this.coinpage.width = e, this.coinpage.height = t,
                this.updateSkinProgress(), this.updateCoins(), this.updateUpgrade(), this.handTween(),
                this.showHomepage(), u.createBannerAd({
                    bannerIndex: 0,
                    autoShow: !1
                }), u.createBannerAd({
                    bannerIndex: 1,
                    autoShow: !1
                }), u.createBannerAd({
                    bannerIndex: 2,
                    autoShow: !1
                });
            platform.getInstance().initList(this.coinpage.getChildByName("list_showList"));
            platform.getInstance().initList(this.continue.getChildByName("list_showList0"));
            platform.getInstance().initList(this.endpage.getChildByName("list_showList1"));
        }
        initZhise() {
            let {
                width: e,
                height: t
            } = Laya.stage, a = e / 2, i = t / 2;
            C.initAd(() => {}),
                C.buildBottom(e => {
                    console.log("buildBottom");
                    e.y = t - e.height, this.bottomZhiseAd = e, this.homepage.addChild(this.bottomZhiseAd);
                }),
                C.buildBottom(e => {
                    e.y = t - e.height, this.bottomZhiseAd = e, this.endpage.addChild(this.bottomZhiseAd);
                }), C.buildFloat2(e => {
                    e.x = 150, e.y = i + 70, this.floatZhiseAd1 = e, this.homepage.addChild(this.floatZhiseAd1);
                }), C.buildFloat2(t => {
                    t.x = e - 150, t.y = i + 70, this.floatZhiseAd2 = t, this.homepage.addChild(this.floatZhiseAd2);
                }), C.buildFloat2(e => {
                    e.x = 150, e.y = i - 230, this.floatZhiseAd1 = e, this.homepage.addChild(this.floatZhiseAd1);
                }), C.buildFloat2(t => {
                    t.x = e - 150, t.y = i - 230, this.floatZhiseAd2 = t, this.homepage.addChild(this.floatZhiseAd2);
                }), u.gameZhiseAd && (C.buildFloat2(e => {
                    e.x = 150, e.y = 650, this.floatZhiseAd1 = e, this.gamepage.addChild(this.floatZhiseAd1);
                }, !1), C.buildFloat2(t => {
                    t.x = e - 150, t.y = 650, this.floatZhiseAd2 = t, this.gamepage.addChild(this.floatZhiseAd2);
                }, !1)), C.buildSix(e => {
                    e.x = a, e.y = 400, this.endZhiseAd = e, this.endpage.addChild(this.endZhiseAd);
                }), C.buildSix(e => {
                    e.x = a, e.y = 400, this.continueAd = e, this.continue.addChild(this.continueAd);
                }), C.buildSix(e => {
                    e.x = a, e.y = 500, this.continueAd = e, this.coinpage.addChild(this.continueAd);
                });
        }
        handTween() {
            let {
                width: e,
                height: t
            } = Laya.stage, a = this.owner.getChildByName("gamepage").getChildByName("hand");

            function onTween1() {
                Laya.Tween.clearTween(onTween1), Laya.Tween.to(a, {
                    x: e / 2 + 200,
                    y: t - 600
                }, 1500, null, Laya.Handler.create(this, onTween2));
            }

            function onTween2() {
                Laya.Tween.clearTween(onTween2), Laya.Tween.to(a, {
                    x: e / 2 - 200,
                    y: t - 600
                }, 1500, null, Laya.Handler.create(this, onTween1));
            }
            this.hand = a, Laya.Tween.to(a, {
                x: e / 2 - 200,
                y: t - 600
            }, 1500, null, Laya.Handler.create(this, onTween1));
        }
        showHand() {
            this.owner.getChildByName("gamepage").getChildByName("hand").visible = !0;
        }
        hideHand() {
            this.owner.getChildByName("gamepage").getChildByName("hand").visible = !1;
        }
        startBtnCallback() {
            platform.getInstance().showInterstitial(() => {
                this.game.gameReady && (this.showGamepage(), this.game.initLevel(), this.matchGame());
            });
        }
        restartBtnCallback() {
            if (this.waitJump) {

            } else {
                platform.getInstance().showInterstitial(
                    () => {
                        Laya.timer.clearAll(this),
                            this.game.initLevel(),
                            this.matchGame(),
                            this.showGamepage(),
                            I.destroy(),
                            A.destroy(),
                            u.hideGameIcon(0)
                    }
                );
            }
        }
        homeBtnCallback() {
            platform.getInstance().showInterstitial(() => {
                Laya.timer.clearAll(this);
                this.showHomepage();
                I.destroy();
                A.destroy();
                u.hideBannerAd();
                u.hideGameIcon(0);
            })
        }
        adContinueBtnCallback() {
            platform.getInstance().showReward(() => {
                this.owner.getChildByName("new_skin_tip").y = -1e3,
                    this.gamepage.visible = true;
                this.continue.visible = false;
                this.game.continue()
            })
        }
        coinContinueBtnCallback() {
            this.waitJump || (dao.gameDao.coin >= 100 ? (dao.gameDao.coin -= 100, this.updateCoins(),
                this.updateUpgrade(), u.uploadGameData([{
                    key: "coin",
                    value: dao.gameDao.coin + ""
                }]), this.gamepage.visible = !0, this.continue.visible = !1, u.hideBannerAd(),
                u.hideGameIcon(1), this.game.continue(), this.owner.getChildByName("new_skin_tip").y = -1e3) : wx.showToast({
                title: "金币不足"
            }));
        }
        skipContinueBtnCallback() {
            this.waitJump || (u.hideBannerAd(), u.hideGameIcon(1), this.game.gameOver(!1, !0));
        }
        skipCoinBtnCallback() {
            if (this.waitJump) {} else {
                this.coinpage.visible = !1,
                    this.owner.getChildByName("new_skin_tip").y = 260,
                    this.endpage.visible = !0,
                    dao.gameDao.coin += Math.floor(this.game.carriageNum * dao.gameDao.coinPlus / 10),
                    this.updateCoins(),
                    this.updateUpgrade(),
                    u.uploadGameData([]);
            }
        }
        moreCoinBtnCallback() {
            this.waitJump || (u.hideBannerAd(), u.createVideoAd(() => {
                dao.gameDao.coin += Math.floor(this.game.carriageNum * dao.gameDao.coinPlus * .3),
                    this.updateCoins(), this.updateUpgrade(), this.coinpage.visible = !1, this.endpage.visible = !0,
                    this.owner.getChildByName("new_skin_tip").y = 260, this.jumpEndBanner(), wx.showToast({
                        title: "已三倍获得金币"
                    }), u.uploadGameData([{
                        key: "coin",
                        value: dao.gameDao.coin + ""
                    }]);
            }));
        }
        moreGameBtnCallback() {
            console.log("aaaaa");
            platform.getInstance().navigate("HOME", "LOGO");
            // "prod" === u.env && u.zhiseAdSwitch && !u.noZhiseAd && C.buildFullScreen(e => {
            //     e.zOrder = 9999, Laya.stage.addChild(e);
            // });
        }
        skinBtnCallback() {
            this.owner.getChildByName("shoppage").show(), this.owner.getChildByName("shoppage").ui = this,
                this.upgrade.visible = !0, this.coin.visible = !0;
            let {
                width: e,
                height: t
            } = Laya.stage;
            this.coin.y = t - 480;
        }
        settingBtnCallback() {
            let e = new _();
            Laya.stage.addChild(e);
        }
        showHomepage() {
            // platform.getInstance().showInterstitial();


            let {
                width: e,
                height: t
            } = Laya.stage;
            this.isHomepage = !0, this.owner.getChildByName("new_skin_tip").y = t - 760, this.coin.y = 150,
                this.upgrade.visible = !1, this.homepage.visible = !0, this.endpage.visible = !1,
                this.gamepage.visible = !1, this.continue.visible = !1, this.coinpage.visible = !1,
                this.changeSkin();
        }
        changeSkin() {
            let image = this.homepage.getChildByName("skin");
            image.width = 641;
            image.height = 526;
            let res = "res/shop/car" + (dao.gameDao.skin + 1) + ".png";
            image.skin = res;

        }
        matchGame() {
            let e = dao.playersDao.findPlayers(3);
            this.game.initPlayers(e), Laya.timer.once(1e3, this, () => {
                this.gamepage.getChildByName("matching").visible = !1, this.gamepage.getChildByName("game_tip").visible = !0,
                    this.gamepage.getChildByName("count3").visible = !0, t.playEffect("count.mp3"),
                    Laya.timer.once(1e3, this, () => {
                        this.gamepage.getChildByName("count3").visible = !1, this.gamepage.getChildByName("count2").visible = !0;
                    }), Laya.timer.once(2e3, this, () => {
                        this.gamepage.getChildByName("count2").visible = !1, this.gamepage.getChildByName("count1").visible = !0;
                    }), Laya.timer.once(3e3, this, () => {
                        this.gamepage.getChildByName("count1").visible = !1, this.gamepage.getChildByName("game_tip").visible = !1,
                            this.gamepage.getChildByName("hand").visible = !0, this.gamepage.getChildByName("ctrl_tip").visible = !0,
                            this.game.gameStart();
                    });
            });
            // wx.request({
            //     url: "",
            //     success: t => {
            //         0 === t.data.code && (e = t.data.data.players).forEach(e => {
            //             e.name.length > 6 && (e.name = e.name.slice(0, 6));
            //         });
            //     },
            //     complete: () => {

            //     }
            // });
        }
        showGamepage() {
            this.owner.getChildByName("new_skin_tip").y = -1e3, this.coin.visible = !1, this.upgrade.visible = !1,
                this.homepage.visible = !1, this.endpage.visible = !1, this.gamepage.visible = !0,
                this.continue.visible = !1, this.coinpage.visible = !1, this.gamepage.getChildByName("count1").visible = !1,
                this.gamepage.getChildByName("count2").visible = !1, this.gamepage.getChildByName("count3").visible = !1,
                this.gamepage.getChildByName("ctrl_tip").visible = !1, this.gamepage.getChildByName("game_tip").visible = !1,
                this.gamepage.getChildByName("hand").visible = !1, this.hideGoal(), this.gamepage.getChildByName("matching").visible = !0;
        }
        showEndpage(e) {
            let {
                width: t,
                height: a
            } = Laya.stage;
            this.owner.getChildByName("new_skin_tip").y = 260;
            this.coin.y = a - 480;
            this.homepage.visible = !1;
            this.endpage.visible = !0;
            this.gamepage.visible = !1;
            this.continue.visible = !1
            this.coinpage.visible = !1
            this.updateCoins();
            this.updateUpgrade()
            if (e) {
                this.endpage.getChildByName("win_title").visible = !0
                this.endpage.getChildByName("lose_title").visible = !1;
                this.endpage.getChildByName("next_btn").visible = !0,
                    this.endpage.getChildByName("restart_btn").visible = !1
            } else {
                this.endpage.getChildByName("win_title").visible = !1,
                    this.endpage.getChildByName("lose_title").visible = true;
                this.endpage.getChildByName("next_btn").visible = !1,
                    this.endpage.getChildByName("restart_btn").visible = true;
            }
            this.skipCoinBtnCallback();
        }
        jumpEndBanner() {
            let {
                width: e,
                height: t
            } = Laya.stage;
            this.endpage.getChildByName("home_btn").y = 1350, this.endpage.getChildByName("restart_btn").y = 1350,
                this.endpage.getChildByName("next_btn").y = 1350, this.coin.visible = !0, this.upgrade.visible = !1,
                u.createGameIcon({
                    index: 0,
                    num: 2,
                    posArray: [{
                        left: 5,
                        top: 60
                    }, {
                        left: wx.getSystemInfoSync().screenWidth - 75,
                        top: 60
                    }]
                });
        }
        showFixCar() {
            u.createGameIcon({
                index: 2,
                num: 2,
                posArray: [{
                    left: 20,
                    top: wx.getSystemInfoSync().screenHeight / 2 - 200
                }, {
                    left: wx.getSystemInfoSync().screenWidth - 90,
                    top: wx.getSystemInfoSync().screenHeight / 2 - 200
                }]
            });
            let e = new B({
                btnY: Laya.stage.height - 150,
                sound: "knock.mp3",
                success: () => {
                    u.showBannerAd(), setTimeout(() => {
                        u.hideBannerAd();
                    }, 1e3);
                },
                complete: () => {
                    u.hideBannerAd(), u.hideGameIcon(2), this.game.continue();
                }
            });
            Laya.stage.addChild(e);
        }
        showContinue() {
            this.owner.getChildByName("new_skin_tip").y = -1000, this.homepage.visible = !1, this.endpage.visible = !1,
                this.gamepage.visible = !1, this.continue.visible = !0, this.coinpage.visible = !1,
                this.coin.visible = !1, this.upgrade.visible = !1,
                this.continue.getChildByName("coin_continue_btn").getChildByName("text").text = "100/" + dao.gameDao.coin;
            let {
                width: e,
                height: t
            } = Laya.stage;
            this.continue.getChildByName("skip_btn").y = t - 150;
        }
        showCoinpage() {
            this.owner.getChildByName("new_skin_tip").y = -1e3, this.homepage.visible = !1,
                this.endpage.visible = !1, this.gamepage.visible = !1, this.continue.visible = !1,
                this.coinpage.visible = !0, this.coin.visible = !1, this.upgrade.visible = !1, this.coinpage.getChildByName("coin_plus").text = "金币收益X" + (dao.gameDao.coinPlus / 100).toFixed(1);
            let {
                width: e,
                height: t
            } = Laya.stage;
            this.coinpage.getChildByName("more_coin_btn").y = t - 150, this.coinpage.getChildByName("skip_btn").y = t - 150,
                this.coinpage.getChildByName("carriage").getChildByName("text").text = this.game.carriageNum,
                this.coinpage.getChildByName("coin").getChildByName("text").text = Math.floor(this.game.carriageNum * dao.gameDao.coinPlus / 10),
                u.shareSwitch && u.ipSwitch && (u.coin_jump || u.fromAd) ? (this.waitJump = !0,
                    Laya.timer.once(2e3, this, () => {
                        this.waitJump = !1, this.coinpage.getChildByName("more_coin_btn").y = 1500, this.coinpage.getChildByName("skip_btn").y = 1500,
                            u.showBannerAd();
                    })) : (this.coinpage.getChildByName("more_coin_btn").y = 1500, this.coinpage.getChildByName("skip_btn").y = 1500,
                    u.showBannerAd());
        }
        hideGoal() {
            this.gamepage.getChildByName("win_tip").visible = !1, this.gamepage.getChildByName("lose_tip").visible = !1;
        }
        showGoal(e) {
            this.hideGoal();
            let t = this.gamepage.getChildByName(e);
            t.visible = !0, t.scaleX = .5, t.scaleY = .5, Laya.timer.frameLoop(1, t, () => {
                t.scaleX += .1, t.scaleY += .1, t.scaleX > 1.2 && Laya.timer.clearAll(t);
            });
        }
        changeLevelName(e) {
            this.levelNameLable.text = e, this.nextLevelNameLable.text = Number(e) + 1;
        }
        updateSkinProgress() {
            let e = this.owner.getChildByName("new_skin_tip");
            if (dao.gameDao.unlockSkin >= i.skin.length) return void(e.visible = !1);
            let t = 5 * (dao.gameDao.unlockSkin + 1);
            e.getChildByName("text").text = "Level " + t + " New Skin";
            // let a = new Laya.Texture();
            let image = e.getChildByName("pic");
            image.width = image.height = 100;
            let res = "res/shop/car" + (t / 5 + 1) + ".png";
            console.log("res= ", res);
            image.skin = res;
        }
        updateLevelName(e) {
            this.gamepage.getChildByName("level").text = "Level " + e;
        }
        updateScore(e) {}
        updateRank(e) {
            let t = [],
                a = [];
            for (let i in e) {
                let s = 0;
                for (; s < t.length && !(e[i] < t[s]); s++);
                t.splice(s, 0, e[i]), a.splice(s, 0, i);
            }
            t.reverse(), a.reverse();
            for (let e = 0; e < 4; e++) a[e] ? (this.rankList[e].text = a[e], "You" === a[e] ? this.rankList[e].color = "#ffff00" : -1 === t[e] ?
                this.rankList[e].color = "#ff0000" : this.rankList[e].color = "#ffffff") : (this.rankList[e].text = "Waiting",
                this.rankList[e].color = "#ffffff");
            this.sortName = a;
        }
        startTimer(e) {
            this.leftTime = e, this.timerLabel.text = Math.floor(this.leftTime / 60) + ":" + this.leftTime % 60,
                Laya.timer.loop(1e3, this, () => {
                    this.game.gameStatus && (this.leftTime -= 1, this.timerLabel.text = Math.floor(this.leftTime / 60) + ":" + this.leftTime % 60,
                        this.updateRank(this.game.rank), 0 === this.leftTime && (this.game.gameOver("You" === this.sortName[0]),
                            this.clearTimer()));
                });
        }
        clearTimer() {
            Laya.timer.clearAll(this);
        }
        updateCoins() {
            this.coin.getChildByName("text").text = dao.gameDao.coin;
        }
        updateUpgrade() {
            this.upgrade.getChildByName("move_speed").getChildByName("value").text = ((2 * (dao.gameDao.moveSpeed - 100) + 100) / 100).toFixed(1),
                this.upgrade.getChildByName("move_speed").getChildByName("cost").text = dao.gameDao.moveSpeedCost,
                this.upgrade.getChildByName("upgrade_speed").getChildByName("value").text = (dao.gameDao.upgradeSpeed / 100).toFixed(1),
                this.upgrade.getChildByName("upgrade_speed").getChildByName("cost").text = dao.gameDao.upgradeSpeedCost,
                this.upgrade.getChildByName("coin_plus").getChildByName("value").text = (dao.gameDao.coinPlus / 100).toFixed(1),
                this.upgrade.getChildByName("coin_plus").getChildByName("cost").text = dao.gameDao.coinPlusCost,
                dao.gameDao.moveSpeedCost > dao.gameDao.coin ? (this.upgrade.getChildByName("move_speed").getComponent(a).enable = !1,
                    this.upgrade.getChildByName("move_speed").getChildByName("disable").visible = !0,
                    this.upgrade.getChildByName("move_speed").getChildByName("tip").visible = !1) : (this.upgrade.getChildByName("move_speed").getComponent(a).enable = !0,
                    this.upgrade.getChildByName("move_speed").getChildByName("disable").visible = !1,
                    this.upgrade.getChildByName("move_speed").getChildByName("tip").visible = !0), dao.gameDao.moveSpeed >= 200 && (this.upgrade.getChildByName("move_speed").getComponent(a).enable = !1,
                    this.upgrade.getChildByName("move_speed").getChildByName("disable").visible = !0,
                    this.upgrade.getChildByName("move_speed").getChildByName("cost").text = "已达上限"),
                dao.gameDao.upgradeSpeedCost > dao.gameDao.coin ? (this.upgrade.getChildByName("upgrade_speed").getComponent(a).enable = !1,
                    this.upgrade.getChildByName("upgrade_speed").getChildByName("disable").visible = !0,
                    this.upgrade.getChildByName("upgrade_speed").getChildByName("tip").visible = !1) : (this.upgrade.getChildByName("upgrade_speed").getComponent(a).enable = !0,
                    this.upgrade.getChildByName("upgrade_speed").getChildByName("disable").visible = !1,
                    this.upgrade.getChildByName("upgrade_speed").getChildByName("tip").visible = !0),
                dao.gameDao.upgradeSpeed >= 300 && (this.upgrade.getChildByName("upgrade_speed").getComponent(a).enable = !1,
                    this.upgrade.getChildByName("upgrade_speed").getChildByName("disable").visible = !0,
                    this.upgrade.getChildByName("upgrade_speed").getChildByName("cost").text = "已达上限"),
                dao.gameDao.coinPlusCost > dao.gameDao.coin ? (this.upgrade.getChildByName("coin_plus").getComponent(a).enable = !1,
                    this.upgrade.getChildByName("coin_plus").getChildByName("disable").visible = !0,
                    this.upgrade.getChildByName("coin_plus").getChildByName("tip").visible = !1) : (this.upgrade.getChildByName("coin_plus").getComponent(a).enable = !0,
                    this.upgrade.getChildByName("coin_plus").getChildByName("disable").visible = !1,
                    this.upgrade.getChildByName("coin_plus").getChildByName("tip").visible = !0);
        }
        upgradeMoveSpeed() {
            dao.gameDao.coin >= dao.gameDao.moveSpeedCost ? (dao.gameDao.coin -= dao.gameDao.moveSpeedCost,
                dao.gameDao.moveSpeed += 5, dao.gameDao.moveSpeedCost += 150,
                u.uploadGameData([]),
                this.updateCoins(),
                this.updateUpgrade(),
                wx.showToast({
                    title: "升级成功"
                })) : wx.showToast({
                title: "金币不足"
            });
        }
        upgradeUpgradeSpeed() {
            dao.gameDao.coin >= dao.gameDao.upgradeSpeedCost ? (dao.gameDao.coin -= dao.gameDao.upgradeSpeedCost,
                dao.gameDao.upgradeSpeed += 10, dao.gameDao.upgradeSpeedCost += 150,
                u.uploadGameData([]),
                this.updateCoins(),
                this.updateUpgrade(),
                wx.showToast({
                    title: "升级成功"
                })) : wx.showToast({
                title: "金币不足"
            });
        }
        upgradeCoinPlus() {
            dao.gameDao.coin >= dao.gameDao.coinPlusCost ? (dao.gameDao.coin -= dao.gameDao.coinPlusCost,
                dao.gameDao.coinPlus += 10, dao.gameDao.coinPlusCost += 150, u.uploadGameData([{
                    key: "coin",
                    value: dao.gameDao.coin + ""
                }, {
                    key: "coinPlus",
                    value: dao.gameDao.coinPlus + ""
                }, {
                    key: "coinPlusCost",
                    value: dao.gameDao.coinPlusCost + ""
                }]), this.updateCoins(), this.updateUpgrade(), wx.showToast({
                    title: "升级成功"
                })) : wx.showToast({
                title: "金币不足"
            });
        }
    }
    class N extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            let {
                width: e,
                height: a
            } = Laya.stage;
            this.owner.width = e, this.owner.height = a, this.stage = this.owner.getComponent(f),
                this.ui = this.owner.getChildByName("UI").getComponent(D), this.stage.game = this,
                this.gameStatus = !1, this.gameReady = !1, this.init3d(), t.onLoad();
        }
        initLevel() {
            this.camera.transform.position = new Laya.Vector3(-1.2, 4, 2), this.continueChance = 2,
                this.dragDirection = 0, this.carriageNum = 0, this.dragStartPoint = {
                    x: 0,
                    y: 0
                }, this.rank = {}, this.AIMoveSpeed = Math.min(200, 100 + 10 * (Math.floor(dao.gameDao.level / 5) + 1)),
                this.AIUpgradeSpeed = Math.min(300, 100 + 20 * (Math.floor(dao.gameDao.level / 5) + 1)),
                this.ui.updateScore(0), this.ui.updateLevelName(dao.gameDao.level + 1), this.levelConfig = i.levelConfig[dao.gameDao.level % i.levelConfig.length],
                this.train = this.initTrain("You", "train", this.levelConfig[0], dao.gameDao.skin),
                this.rank["You"] = 0, this.ui.updateRank(this.rank), this.stage.makeCrop(this.levelConfig),
                this.stage.checkCropRender(this.train.transform.position), s.showFixCar = !1;
        }
        initPlayers(e) {
            this.otherPlayers = [];
            let t = this.initTrain(e[0].name, "player1", this.levelConfig[1], 1);
            this.otherPlayers.push(t), Laya.timer.once(300, this, () => {
                this.rank[e[0].name] = 0, this.ui.updateRank(this.rank);
            });
            let a = this.initTrain(e[1].name, "player2", this.levelConfig[2], 2);
            this.otherPlayers.push(a), Laya.timer.once(600, this, () => {
                this.rank[e[1].name] = 0, this.ui.updateRank(this.rank);
            });
            let i = this.initTrain(e[2].name, "player3", this.levelConfig[3], 3);
            this.otherPlayers.push(i), Laya.timer.once(900, this, () => {
                this.rank[e[2].name] = 0, this.ui.updateRank(this.rank);
            });
        }
        initTrain(e, t, a, s, n) {
            let o = new Laya.Sprite3D();
            o.group = t, o.username = e, o.startPos = a, o.skinId = s, o.cutter = this.cutter.clone(),
                o.cutter.meshRenderer.materials[0].albedoColor = i.skin[s].color, o.cutParticle = this.cutParticle.clone(),
                Laya.timer.loop(50, o.cutter, () => {
                    o.cutter.transform.rotate(new Laya.Vector3(0, -30, 0), !0, !1);
                }), o.addChild(o.cutter), o.addChild(o.cutParticle), o.cutter.transform.position = new Laya.Vector3(.25, 0, 0),
                o.trainLength = 0, o.cropCut = 0, o.direction = 0;
            let r = this.createNameBoard(e);
            return r.transform.rotationEuler = new Laya.Vector3(60, -30, 0), r.transform.position = new Laya.Vector3(0, 1, 0),
                o.nameBoard = r, o.addChild(r), n && (o.isRevive = !0, this.stage.disableColliderGroup(o.group),
                    Laya.timer.once(3e3, this, () => {
                        this.stage.enableColliderGroup(o.group), o.isRevive = !1;
                    })), o.transform.position = new Laya.Vector3(a.x, 0, a.y), this.stage.registerCollider(o, o.group),
                this.stage.registerCollider(this.makeCarriage(o), o.group), this.gameObjectSp.addChild(o),
                Laya.Sprite3D.load("res/skin/" + i.skin[s].mesh + ".lh", Laya.Handler.create(null, e => {
                    o.head = e.clone(), o.head.transform.localScale = new Laya.Vector3(8, 8, 8), o.head.transform.position = new Laya.Vector3(0, 0, 0),
                        o.head.transform.rotationEuler = new Laya.Vector3(0, -90, 0), o.addChild(o.head),
                        Laya.BaseMaterial.load("res/skin/Assets/skin/texture/Materials/" + i.skin[s].mat + ".lmat", Laya.Handler.create(this, function(e) {
                            e.specularColor = new Laya.Vector3(0, 0, 0), o.head.meshRenderer.materials = [e, e, e, e, e];
                        }));
                })), o;
        }
        gameStart() {
            Laya.SoundManager.stopAllSound();
            this.gameStatus = !0, this.ui.startTimer(90), Laya.timer.frameLoop(10, this, () => {
                this.gameStatus && this.stage.checkCropRender(this.train.transform.position);
            });
            let e, a, i = 0,
                s = new Date().getTime();
            Laya.timer.frameLoop(1, this, () => {
                if (this.gameStatus && (e = new Date().getTime(), a = e - s, s = e, this.trainMove(this.train, this.dragDirection, !0, a),
                        this.gameStatus)) {
                    for (let e in this.otherPlayers) {
                        let t = this.otherPlayers[e];
                        t.destroyed || (this.AIMove(t), this.trainMove(t, t.aiMove, !1, a));
                    }
                    switch (i) {
                        case 0:
                            this.trainCut(this.train, !0);
                            break;

                        case 2:
                            this.trainCut(this.otherPlayers[0]);
                            break;

                        case 4:
                            this.trainCut(this.otherPlayers[1]);
                            break;

                        case 6:
                            this.trainCut(this.otherPlayers[2]);
                    }
                    i += 1, i %= 8;
                }
            }), Laya.timer.loop(200, this, () => {
                try {
                    this.playCutEffect ? (t.playEffect("cut1.mp3"), this.train.cutParticle.particleSystem.startColorConstant = this.cutColor,
                        this.train.nameBoard.progressBar.transform.localPosition = new Laya.Vector3(.3 * -(1 - this.train.cropCut % 50 / 50), .001, 0),
                        this.train.nameBoard.progressBar.transform.localScale = new Laya.Vector3(this.train.cropCut % 50 / 50, 1, 1),
                        this.train.cutParticle.particleSystem.play(), this.playCutEffect = !1) : this.train.cutParticle.particleSystem.stop();
                } catch (e) {}
            });
        }
        AIMove(e) {
            if (void 0 === e.aiMove) e.aiMove = Math.random() * Math.PI * 2 - Math.PI, Laya.timer.loop(1e3, e, () => {
                e.aiMove += (Math.random() * Math.PI * 2 - Math.PI) / 4, Math.abs(e.aiMove - e.direction) < .1 && (e.aiTurning = !1),
                    e.aiMove = this.formRadian(e.aiMove);
            });
            else if (e.aiTurn && !e.aiTurning) {
                let t, a = e.transform.position;
                e.aiTurn = !1, e.aiTurning = !0;
                for (let e in this.levelConfig) {
                    let i = this.levelConfig[e];
                    if (a.x < i.x + i.size / 10 && a.x > i.x - i.size / 10 && a.z < i.y + i.size / 10 && a.z > i.y - i.size / 10) {
                        t = i;
                        break;
                    }
                }
                e.aiMove = Math.atan2(t.y - a.z, t.x - a.x);
            }
        }
        trainCrash(e) {
            this.rank[e.username] = -1, this.ui.updateRank(this.rank), this.stage.removeColliderGroup(e.group);
            let a = e.after;
            for (; a;) {
                let e = this.goods.clone();
                e.transform.position = a.transform.position, e.transform.rotationEuler = new Laya.Vector3(0, 360 * Math.random(), 0),
                    e.name = "free_carriage", this.gameObjectSp.addChild(e), this.stage.registerCollider(e, "freeCarriage"),
                    a.destroy(), a = a.after;
            }
            let i = this.explosionParticle.clone();
            this.gameObjectSp.addChild(i), i.transform.position = e.transform.position, Laya.timer.once(1e3, this, () => {
                i.destroy();
            }), e.destroy(), t.playEffect("crash.mp3"), "You" !== e.username && Laya.timer.once(3e3, this, () => {
                let t = this.initTrain(e.username, e.group, e.startPos, e.skinId, !0);
                this.rank[e.username] = 0, this.ui.updateRank(this.rank), this.otherPlayers[this.otherPlayers.indexOf(e)] = t;
            });
        }
        fail() {
            this.continueChance > 0 ? (this.gameStatus = !1, 2 === this.continueChance && u.fixCar && u.shareSwitch && u.ipSwitch && s.eggThreshold > 0 ? (s.eggThreshold -= 1,
                s.showFixCar = !0, this.ui.showFixCar()) : this.ui.showContinue()) : this.gameOver();
        }
        continue () {
            this.gameStatus = !0, this.continueChance -= 1;
            let e = this.initTrain(this.train.username, this.train.group, this.train.startPos, this.train.skinId, !0);
            this.rank[this.train.username] = 0, this.ui.updateRank(this.rank), this.train = e,
                this.camera.transform.position = new Laya.Vector3(-1.2, 4, 2);
        }
        gameOver(e, a) {
            this.gameStatus = !1,
                this.ui.hideGoal(),
                this.ui.clearTimer(),
                this.stage.clearCollider(),
                Laya.timer.clearAll(this),
                Laya.timer.once(0.5e3, this, () => {
                    this.stage.clearStage(),
                        this.gameObjectSp.destroyChildren();
                });
            if (e) {
                dao.gameDao.level += 1;
                this.ui.showGoal("win_tip");
                t.playEffect("win.mp3");
                Laya.timer.once(1e3, this, () => {
                    this.ui.showEndpage(!0);
                });
                dao.gameDao.unlockSkin < i.skin.length && Math.floor(dao.gameDao.level / 5) > dao.gameDao.unlockSkin && (dao.gameDao.unlockSkin = Math.floor(dao.gameDao.level / 5),
                        dao.gameDao.skin = dao.gameDao.unlockSkin,
                        this.changeSkin(),
                        wx.showToast({
                            title: "已解锁新皮肤"
                        })),
                    this.ui.updateSkinProgress(),
                    u.uploadGameData([{
                        key: "level",
                        value: dao.gameDao.level + ""
                    }, {
                        key: "unlockSkin",
                        value: dao.gameDao.unlockSkin + ""
                    }, {
                        key: "skin",
                        value: dao.gameDao.skin + ""
                    }])
            } else {
                t.playEffect("lose.mp3");
                this.ui.showGoal("lose_tip"), a ? this.ui.showEndpage() : Laya.timer.once(1e3, this, () => {
                    this.ui.showEndpage();
                })
            }
        }
        changeSkin() {
            this.ui.changeSkin();
        }
        init3d() {
            var e = new Laya.Scene3D();
            this.scene3d = e, this.owner.getChildByName("3d").addChild(this.scene3d), this.scene3d.ambientColor = new Laya.Vector3(.6, .6, .6);
            var t = new Laya.Camera(0, .1, 10);
            t.transform.position = new Laya.Vector3(-1.2, 4, 2), t.transform.rotate(new Laya.Vector3(-60, -30, 0), !0, !1),
                this.scene3d.addChild(t), this.camera = t;
            var a = e.addChild(new Laya.DirectionLight());
            a.color = new Laya.Vector3(.6, .6, .6), a.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
            let i = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(100, .01, 100));
            i.transform.position = new Laya.Vector3(0, -.21, 0), i.meshRenderer.material = new Laya.BlinnPhongMaterial(),
                i.meshRenderer.material.specularColor = new Laya.Vector3(0, 0, 0), i.meshRenderer.material.albedoColor = new Laya.Vector3(.72, .86, .26),
                i.name = "ground", this.scene3d.addChild(i), this.gameObjectSp = this.scene3d.addChild(new Laya.Sprite3D()),
                this.loadModels(() => {
                    this.ui.initZhise();
                    this.gameReady = !0;
                });
        }
        loadModels(e) {
            this.total = 0, this.complete = 0, this.models = [], this.onComplete = e, this.loadList("res/grass_1.lh", "grass1"),
                this.loadList("res/grass_2.lh", "grass2"), this.loadList("res/grass_3.lh", "grass3"),
                this.loadList("res/grass_4.lh", "grass4"), this.loadList("res/grass_5.lh", "grass5"),
                this.loadList("res/train_carriage.lh", "trainCarriage", e => {
                    e.transform.position = new Laya.Vector3(0, .1, 0), e.transform.rotationEuler = new Laya.Vector3(0, -90, 0),
                        e.transform.localScale = new Laya.Vector3(7, 7, 7);
                }), this.loadList("res/wheel.lh", "cutter", e => {
                    e.transform.rotationEuler = new Laya.Vector3(90, 0, 0), e.transform.localScale = new Laya.Vector3(12, 12, 12);
                }), this.loadList("res/goods.lh", "goods", e => {
                    e.transform.localScale = new Laya.Vector3(8, 8, 8);
                }), this.loadList("res/border.lh", "border", e => {}), this.loadList("res/tree.lh", "tree", e => {}),
                this.loadList("res/cutParticle.lh", "cutParticle", e => {
                    e.transform.rotationEuler = new Laya.Vector3(-150, 90, 0), e.transform.position = new Laya.Vector3(.3, .1, 0);
                }), this.loadList("res/explosionParticle.lh", "explosionParticle", e => {});
        }
        loadList(e, t, a) {
            let i = this;
            if (e instanceof Array) {
                this.total += e.length;
                for (let s = 0; s < e.length; s++) ! function(s) {
                    Laya.Sprite3D.load(e[s], Laya.Handler.create(null, e => {
                        a && a(e, s), t.push(e), i.complete += 1, i.complete === i.total && i.onComplete && i.onComplete();
                    }));
                }(s);
            } else this.total += 1, Laya.timer.once(10, this, () => {
                new Date().getTime();
                Laya.Sprite3D.load(e, Laya.Handler.create(null, e => {
                    a && a(e, 0), i[t] = e, i.complete += 1, i.complete === i.total && i.onComplete && i.onComplete();
                }));
            });
        }
        onMouseDown(e) {
            this.gameStatus && !this.mouseStatus && (this.mouseStatus = !0, "touchstart" === e.nativeEvent.type ? this.dragStartPoint = {
                x: e.nativeEvent.targetTouches[0].clientX,
                y: e.nativeEvent.targetTouches[0].clientY
            } : this.dragStartPoint = {
                x: e.nativeEvent.clientX,
                y: e.nativeEvent.clientY
            }, this.ui.hideHand());
        }
        onMouseMove(e) {
            if (this.gameStatus && this.mouseStatus) {
                if ("touchmove" === e.nativeEvent.type) {
                    let t = {
                        x: e.nativeEvent.targetTouches[0].clientX - this.dragStartPoint.x,
                        y: e.nativeEvent.targetTouches[0].clientY - this.dragStartPoint.y
                    };
                    this.dragDirection = Math.atan2(t.y, t.x);
                } else {
                    let t = {
                        x: e.nativeEvent.clientX - this.dragStartPoint.x,
                        y: e.nativeEvent.clientY - this.dragStartPoint.y
                    };
                    this.dragDirection = Math.atan2(t.y, t.x);
                }
                this.dragDirection += Math.PI / 6, this.dragDirection - this.train.direction > Math.PI && (this.dragDirection -= 2 * Math.PI),
                    this.dragDirection - this.train.direction < -Math.PI && (this.dragDirection += 2 * Math.PI),
                    this.dragDirection = this.formRadian(this.dragDirection);
            }
        }
        onMouseUp() {
            this.gameStatus && this.mouseStatus && (this.mouseStatus = !1, this.ui.showHand());
        }
        trainMove(e, t, a, i) {
            let n = t - e.direction;
            (n = this.formRadian(n)) > .05 ? e.direction += .05 : n < -.05 ? e.direction -= .05 : e.direction += n,
                e.direction = this.formRadian(e.direction);
            let o = a ? .02 * dao.gameDao.moveSpeed / 100 : .02 * this.AIMoveSpeed / 100;
            o = Math.min(o * i / 20, .04);
            let r = new Laya.Vector3(o * Math.cos(e.direction), 0, o * Math.sin(e.direction));
            this.checkMove(e, r) && (e.transform.translate(r, !1, !1), e.transform.rotationEuler = new Laya.Vector3(0, 180 * -e.direction / Math.PI, 0),
                e.nameBoard.transform.rotationEuler = new Laya.Vector3(60, -30, 0), a && this.camera.transform.translate(r, !1, !1));
            let h, l, d, c, g, m = e;
            for (; m.after;) {
                let e;
                e = m.before ? .05 : .15, h = m.transform.position.x - Math.cos(m.transform.rotationEuler.y * Math.PI / 180) * e - m.after.transform.position.x,
                    l = m.transform.position.z + Math.sin(m.transform.rotationEuler.y * Math.PI / 180) * e - m.after.transform.position.z,
                    d = Math.atan2(l, h), c = (Math.pow(h, 2) + Math.pow(l, 2)) / 2, g = 180 * -d / Math.PI - m.after.transform.rotationEuler.y,
                    g = this.formAngel(g), Math.abs(g) > 20 && (g = 20 * Math.sign(g)), m.after.transform.translate(new Laya.Vector3(c * Math.cos(d), 0, c * Math.sin(d)), !1, !1),
                    m.after.transform.rotationEuler = new Laya.Vector3(0, m.after.transform.rotationEuler.y + g, 0),
                    m = m.after;
            }
        }
        trainCut(e, a) {
            if (e.destroyed) return;
            let i = a ? 5e3 / dao.gameDao.upgradeSpeed : 5e3 / this.AIUpgradeSpeed;
            this.updateCutterArea(e.cutter, .4, -e.transform.rotationEuler.y);
            let n = this.stage.checkCollider(e.cutter.areaPoints, e.group);
            if (n)
                if ("free_carriage" === n.name) {
                    n.destroy(), e.cropCut += i, this.ui.updateScore(e.cropCut),
                        wx.vibrateShort();
                }
            else if (!e.isRevive) return this.trainCrash(e), void(a && this.fail());
            let o = this.stage.checkCropCut(e.cutter, a);
            e.cropCut += o, a && o && (this.playCutEffect = !0), this.rank[e.username] = e.cropCut,
                Math.floor(e.cropCut / i) > e.trainLength && (a && (t.playEffect("add.mp3"), this.carriageNum += 1),
                    e.trainLength += 1, this.stage.registerCollider(this.makeCarriage(e), e.group));
        }
        makeCarriage(e) {
            let t = new Laya.Sprite3D(),
                a = this.trainCarriage.clone();
            t.name = "carriage", t.addChild(a);
            let i = 0;
            if (scale(t, i), i += 100, e.after) {
                t.transform.position = e.after.transform.position, t.transform.rotationEuler = e.after.transform.rotationEuler,
                    t.after = e.after;
                let a = e.after;
                for (a.before = t; a.after;) scale(a, i), i += 100, a.transform.position = a.after.transform.position,
                    a.transform.rotationEuler = a.after.transform.rotationEuler, a = a.after;
                scale(a, i), i += 100, a.transform.translate(new Laya.Vector3(-.3, 0, 0));
            } else t.transform.position = e.transform.position, t.transform.translate(new Laya.Vector3(.3 * Math.cos(e.direction - Math.PI), 0, .3 * Math.sin(e.direction - Math.PI)));

            function scale(e, t) {
                Laya.timer.once(t, e, () => {
                    e.transform.localScale = new Laya.Vector3(1.2, 1.2, 1.2);
                }), Laya.timer.once(t + 100, e, () => {
                    e.transform.localScale = new Laya.Vector3(1, 1, 1);
                });
            }
            return e.after = t, t.before = e, this.gameObjectSp.addChild(t), wx.vibrateShort(),
                t;
        }
        updateCutterArea(e, t, a) {
            let i = [],
                s = e.transform.position;
            a = a * Math.PI / 180, a += 1.25, i.push(s.x + t * Math.cos(a)), i.push(s.z + t * Math.sin(a)),
                a += .64, i.push(s.x + t * Math.cos(a)), i.push(s.z + t * Math.sin(a)), a += 2.5,
                i.push(s.x + t * Math.cos(a)), i.push(s.z + t * Math.sin(a)), a += .64, i.push(s.x + t * Math.cos(a)),
                i.push(s.z + t * Math.sin(a)), i.push(i[0]), i.push(i[1]), e.areaPoints = i;
        }
        checkMove(e, t) {
            let a, i = e.transform.position;
            for (let e in this.levelConfig) {
                let t = this.levelConfig[e];
                if (i.x < t.x + t.size / 10 && i.x > t.x - t.size / 10 && i.z < t.y + t.size / 10 && i.z > t.y - t.size / 10) {
                    a = t;
                    break;
                }
            }
            let s = i.x + t.x,
                n = i.z + t.z,
                o = !1,
                r = !1,
                h = !1,
                l = !1;
            l = !(s < a.x + a.size / 10), h = !(s > a.x - a.size / 10), o = !(n < a.y + a.size / 10),
                r = !(n > a.y - a.size / 10);
            let d = i.x + 90 * t.x,
                c = i.z + 90 * t.z,
                g = !1,
                m = !1,
                p = !1,
                u = !1;
            if (g = !(d < a.x + a.size / 10), m = !(d > a.x - a.size / 10), p = !(c < a.y + a.size / 10),
                u = !(c > a.y - a.size / 10), !(r && h && l && o))
                for (let e in this.levelConfig) {
                    let t = this.levelConfig[e];
                    if (s < t.x + t.size / 10 && s > t.x - t.size / 10 && n < t.y + t.size / 10 && n > t.y - t.size / 10) {
                        o = !1, r = !1, h = !1, l = !1;
                        break;
                    }
                }
            if (!(u && m && g && p))
                for (let e in this.levelConfig) {
                    let t = this.levelConfig[e];
                    if (d < t.x + t.size / 10 && d > t.x - t.size / 10 && c < t.y + t.size / 10 && c > t.y - t.size / 10) {
                        u = !1, m = !1, g = !1, p = !1;
                        break;
                    }
                }
            return l && (t.x = Math.min(0, t.x), e.aiTurning = !1), h && (t.x = Math.max(0, t.x),
                e.aiTurning = !1), o && (t.z = Math.min(0, t.z), e.aiTurning = !1), r && (t.z = Math.max(0, t.z),
                e.aiTurning = !1), (u || m || g || p) && e.aiMove && (e.aiTurn = !0), !0;
        }
        formRadian(e) {
            for (; e > Math.PI;) e -= 2 * Math.PI;
            for (; e < -Math.PI;) e += 2 * Math.PI;
            return e;
        }
        formAngel(e) {
            for (; e > 180;) e -= 360;
            for (; e < -180;) e += 360;
            return e;
        }
        createNameBoard(e) {
            let t = new Laya.Sprite3D(),
                a = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(.6, .24));
            a.meshRenderer.material = new Laya.BlinnPhongMaterial(), a.meshRenderer.material.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT,
                a.meshRenderer.material.albedoColor = new Laya.Vector4(0, 0, 0, .4), t.addChild(a);
            let i = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(.6, .24));
            i.meshRenderer.material = new Laya.BlinnPhongMaterial(), i.meshRenderer.material.albedoColor = new Laya.Vector3(1, .52, .02),
                t.addChild(i), t.progressBar = i, i.transform.position = new Laya.Vector3(0, .001, 0),
                i.transform.localScale = new Laya.Vector3(0, 1, 1);
            let s = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(.6, .24)),
                n = new Laya.UnlitMaterial();
            s.meshRenderer.sharedMaterial = n;
            let o = Laya.Browser.createElement("canvas"),
                r = o.getContext("2d");
            o.width = 200, o.height = 80, r.fillStyle = "rgb(255,255,255)", r.font = "bold 40px 黑体",
                r.textAlign = "center", r.textBaseline = "center", r.fillText(e, 100, 50, 200);
            let h = new Laya.Texture2D(200, 80);
            return h.loadImageSource(o), n.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
                n.albedoTexture = h, s.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE,
                t.addChild(s), s.transform.position = new Laya.Vector3(0, .002, 0), t;
        }
    }
    class T extends Laya.Script {
        constructor() {
            super(), this.inited = !1;
        }
        onAwake() {
            this.owner.show = this.show.bind(this);
        }
        show() {
            this.inited || this.init(), this.owner.visible = !0;
        }
        init() {
            this.game = this.owner.parent.parent.getComponent(N);
            let {
                width: e,
                height: t
            } = Laya.stage;
            this.owner.width = e, this.owner.height = t, Laya.timer.once(100, this, () => {
                    this.owner.getChildByName("bg").width = e, this.owner.getChildByName("bg").height = t;
                }), this.owner.getChildByName("back_btn").clickHandler = new Laya.Handler(this, this.backBtnCallback),
                this.owner.getChildByName("use_btn").clickHandler = new Laya.Handler(this, this.useBtnCallback);
            let a = this.owner.getChildByName("list"),
                n = this.owner.getChildByName("tip");
            this.useBtn = this.owner.getChildByName("use_btn"), this.using = this.owner.getChildByName("using");
            let o = [];
            for (let e = 0; e < i.skin.length + 2; e++) e > 0 && e < i.skin.length + 1 ? e === dao.gameDao.unlockSkin + 2 ? o.push({
                img: "res/shop/car" + e + ".png?1"
            }) : o.push({
                img: "res/shop/car" + e + ".png"
            }) : o.push({
                img: "./"
            });
            a.array = o,
                a.scrollBar.hide = true,
                Laya.timer.once(100, this, () => {
                    a.scrollBar.value = 360 * dao.gameDao.skin;
                });
            let r = 0;
            a.scrollBar.changeHandler = new Laya.Handler(this, e => {
                this.useBtn.visible = false;
                let t, i = Math.abs(e - r),
                    o = Math.round(e / 360);
                this.skinId = o, t = e % 360 > 180 ? 2 : 1, a._cells.forEach((e, a) => {
                        let i = e.getChildByName("img");
                        a === t ? (i.scaleX = 1, i.scaleY = 1) : (i.scaleX = .8, i.scaleY = .8);
                    }),
                    i < 3 && (a.scrollBar.value = 360 * o, a.scrollBar.stopScroll(), dao.gameDao.unlockSkin < o ? (n.visible = !0,
                        n.text = "Level " + 5 * o + " New Skin", this.useBtn.visible = !1, this.using.visible = !1) : (n.visible = !1,
                        dao.gameDao.skin === o ? (this.useBtn.visible = !1, this.using.visible = !0) : (this.useBtn.visible = true,
                            this.using.visible = !1))), r = e;
            });
        }
        backBtnCallback() {
            this.owner.visible = !1, this.owner.ui.upgrade.visible = !1, this.owner.ui.coin.y = 150;
            this.game.changeSkin();
        }
        useBtnCallback() {
            this.using.visible = !0, this.useBtn.visible = !1, dao.gameDao.skin = this.skinId,
                this.game.changeSkin(), u.uploadGameData([{
                    key: "skin",
                    value: dao.gameDao.skin + ""
                }]);
        }
        onDisable() {}
    }
    class M extends Laya.Script {}
    class P {
        static init() {
            let e = Laya.ClassUtils.regClass;
            e("common/CommonButton.js", a), e("script/shop.js", T), e("script/UICtrl.js", D),
                e("script/stageCtrl.js", f), e("script/gameCtrl.js", N), e("script/loading.js", M);
        }
    }
    P.width = 1080, P.height = 1920, P.scaleMode = "fixedauto", P.screenMode = "vertical",
        P.alignV = "top", P.alignH = "left", P.startScene = "loading.scene", P.sceneRoot = "",
        P.debug = !1, P.stat = !1, P.physicsDebug = !1, P.exportSceneToJson = !0, P.init();
    // new class {
    //     constructor() {
    //         console.log("main")
    //         window.Laya3D ? Laya3D.init(P.width, P.height) : Laya.init(P.width, P.height, Laya.WebGL), 
    //         Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
    //         Laya.stage.scaleMode = P.scaleMode, Laya.stage.screenMode = P.screenMode, Laya.stage.alignV = P.alignV, 
    //         Laya.stage.alignH = P.alignH, Laya.URL.exportSceneToJson = P.exportSceneToJson, 
    //         (P.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
    //         P.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), P.stat && Laya.Stat.show(), 
    //         Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    //     }
    //     onVersionLoaded() {
    //         Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    //     }
    //     onConfigLoaded() {
    //         P.startScene && Laya.Scene.open(P.startScene);
    //     }
    // }();
}();