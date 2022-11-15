!function () {
    "use strict";
    class e extends Laya.Scene { }
    class t {
        constructor() {
            this.forceHide = !1, this.init();
        }
        init() {
            this.scenes = [];
        }
        get getTopScene() {
            return this.topScene;
        }
        openScene(e, t = !1, a, i, s) {
            console.log("e'e'e'e'e'e'e'e'e'e'e'e'e'e", e),
                Laya.Scene.open(e, t, a, Laya.Handler.create(this, t => {
                    let a = this.scenes.filter(t => t.url == e);
                    a && a.length > 0 ? (console.log("已打开此场景", a), a[0].close()) : (i ? i.addChild(t) : Laya.stage.addChild(t),
                        this.scenes.push(t), this.topScene = this.scenes[this.scenes.length - 1], s && s(t));
                }));
        }
        closeScene(e) {
            console.log("")
            if (e ? "string" == typeof e && this.scenes.forEach(t => {
                t.url != e || (e = t);
            }) : null != this.topScene && (e = this.topScene), e && e instanceof Laya.Scene) {
                var t = this.scenes.indexOf(e);
                -1 != t && (this.scenes.splice(t, 1), this.topScene = this.scenes[this.scenes.length - 1]),
                    e.close()
                // , U.Platform.hideBanner(),

                platform.getInstance().showBanner(),
                    platform.getInstance().hideSplash();

                // Laya.timer.once(100, this, () => {
                //     var e = this.topScene;
                //     e.canShowAd && !e.isWuchu && 0 == R.instance.openSceneCount && (
                //         // U.Platform.showBanner(),
                //         console.log("UIMgr ShowBanner", e.url)
                //     );
                // });
            }
        }
    }
    class a { }
    a.AD_LOAD_EVENT = "", a.AD_SHOW_EVENT = "", a.AD_VIDEO_CLOSE_EVENT = "", a.PLATFORM_WAKE_EVENT = "",
        a.PLATFORM_SLEEP_EVENT = "", a.LOAD_FINISH_EVENT = "", a.GAME_INIT_EVENT = "", a.GAME_PLAY_EVENT = "",
        a.GAME_REBORN_EVENT = "", a.GAME_OVER_EVENT = "", a.MOUSE_EVENT = "", a.CHANGE_SKIN_EVENT = "",
        a.CHANGE_BRICK_EVENT = "", a.CHANGE_LEVEL_EVENT = "", a.CHANGE_COIN_EVENT = "",
        a.SHOW_TIPS_EVENT = "", a.UPDATE_SHARE_COUNT = "", a.UPDATE_CHECK_SV = "", a.LOGIN_EVENT = "",
        a.SHARE_BACK_EVENT = "";
    class i {
        constructor() {
            this.storageData = {
                score: 0,
                level: 1,
                playCount: 0,
                playTime: new Date().getTime(),
                gameTime: new Date().getTime() - 864e5,
                offlineTime: new Date().getTime(),
                strength: 20,
                coin: 0,
                key: 0,
                signDay: 1,
                signWeek: 1,
                isSign: !1,
                keyAmount: 0,
                isSound: !0,
                isVibrate: !0,
                skinPlate: [1, 6],
                skinKnife: [1],
                skinColor: [0],
                plateIndex: 1,
                knifeIndex: 1,
                colorIndex: 0,
                isNewPlay: !0,
                shareCount: 0
            }, this.storageName = {
                score: "",
                level: "",
                playCount: "",
                playTime: "",
                gameTime: "",
                strength: "",
                coin: "",
                signDay: "",
                signWeek: "",
                isSign: "",
                isSound: "",
                isVibrate: "",
                keyAmount: "",
                skinPlate: "",
                skinKnife: "",
                skinColor: "",
                plateIndex: "",
                knifeIndex: "",
                colorIndex: "",
                isNewPlay: "",
                offlineTime: "",
                shareCount: "",
                key: ""
            }, this.init();
        }
        init() {
            for (let e in this.storageData) {
                let t = this.readStorage(e);
                t ? (this.storageData[e] = JSON.parse(t), console.log("加载缓存", e, this.storageData[e])) : (this.writeStorage(e, this.storageData[e]),
                    console.log("初始化", e, this.storageData[e])), this.storageName[e] = e;
            }
            this.refreshData();
        }
        setValue(e, t) {
            this.storageData[e] = t, this.writeStorage(e, t);
        }
        writeStorage(e, t) {
            Laya.LocalStorage.setItem(e, JSON.stringify(t));
        }
        readStorage(e) {
            return Laya.LocalStorage.getItem(e);
        }
        removeStorage(e) {
            // Laya.LocalStorage.removeItem(e);
        }
        refreshData() {
            Math.floor(this.storageData.gameTime / 864e5) != Math.floor(this.getCurrentTime / 864e5) && (console.log("更新每日数据"),
                this.setValue(this.storageName.playCount, 0), this.setValue(this.storageName.playTime, this.getCurrentTime),
                this.setValue(this.storageName.gameTime, this.getCurrentTime), this.setValue(this.storageName.strength, 20),
                this.setValue(this.storageName.isSign, !1), this.storageData.signDay > 7 && (this.setValue(this.storageName.signDay, 1),
                    this.setValue(this.storageName.signWeek, this.storageData.signWeek + 1)), U.Event.on(a.UPDATE_SHARE_COUNT, this, this.updateShareCount));
        }
        updateShareCount(e) {
            this.setValue(this.storageName.shareCount, e.amount), console.log("剩余分享次数：", e.amount),
                U.Event.event(a.UPDATE_CHECK_SV);
        }
        get getCurrentTime() {
            return new Date().getTime();
        }
        passLevel() {
            this.setValue(this.storageName.level, this.storageData.level + 1);
        }
        updateCoin(e) {
            this.setValue(this.storageName.coin, this.storageData.coin + e), U.Event.event(a.CHANGE_COIN_EVENT);
        }
        getSkin(e, t) {
            this.storageData[e].push(t), this.setValue(e, this.storageData[e]);
        }
        changeSkin(e, t) {
            this.setValue(e, t);
        }
    }
    class s {
        constructor() {
            this.appId = "wx47537a2fe2002c8c", this.gameVersion = "1.0.4", this.gameType = "3D",
                this.sceneResUrl = "res/scene/Conventional/ResScene.ls",
                this.modelResUrl = "res/model/Conventional/ResScene.lh",
                this.rebornCount = 0, this.playCount = 0;
        }
        get shareContext() {
            return ["请分享到活跃的群！", "请分享到不同群！", "请分享给好友！", "请分享给20人以上的群！"][Math.floor(4 * Math.random())];
        }
    }
    class n {
        static add(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.add(e, t, a), a.clone();
        }
        static subtract(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.subtract(e, t, a), a.clone();
        }
        static mull(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.scale(e, t, a), a.clone();
        }
        static dot(e, t) {
            return Laya.Vector3.dot(e, t);
        }
        static cross(e, t) {
            var a = new Laya.Vector3();
            return Laya.Vector3.cross(e, t, a), a.clone();
        }
        static normalized(e) {
            var t = new Laya.Vector3();
            return Laya.Vector3.normalize(e, t), t.clone();
        }
        static distance(e, t) {
            var a = n.subtract(e, t);
            return Laya.Vector3.scalarLength(a);
        }
    }
    var o, r, h, l, c, d;
    !function (e) {
        e.Loading = "UIScene/Loading.scene",
            e.BusyLoading = "UIScene/BusyLoading.scene",
            e.Home = "UIScene/Home.scene", e.Game = "UIScene/Game.scene", e.Game3D = "UIScene/Game3D.scene",
            e.Reborn = "UIScene/Reborn.scene", e.Settlement = "UIScene/Settlement.scene", e.Mission = "UIScene/Mission.scene",
            e.Skin = "UIScene/Skin.scene", e.FreeSkin = "UIScene/FreeSkin.scene", e.Sign = "UIScene/Sign.scene",
            e.Offline = "UIScene/Offline.scene", e.Strength = "UIScene/Strength.scene", e.SignTips = "UIScene/SignTips.scene",
            e.Busy = "UIScene/Busy.scene", e.Background = "UIScene/Background.scene", e.Box = "UIScene/Box.scene",
            e.Clean = "UIScene/Clean.scene", e.Box2 = "UIScene/Box2.scene";
    }(o || (o = {})), function (e) {
        e.BoxItem = "prefab/BoxItem.prefab", e.FontDamaged = "prefab/FontDamaged.prefab",
            e.CompoundItem = "prefab/CompoundItem.prefab", e.DuilianIcon = "prefab/DuilianIcon.prefab";
    }(r || (r = {})), function (e) {
        e.BGM = "Bgm", e.CLICK = "Click", e.Finish2 = "Finish2", e.EndLight = "EndLight",
            e.Roach = "Roach", e.RollDown = "RollDown", e.Fail = "Fail", e.Rolling = "Rolling",
            e.RollingLong = "RollingLong";
    }(h || (h = {}));
    class g {
        addClickEvent(e, t, a, i, s) {
            if (e.offAllCaller(t), e instanceof Laya.Button && !s) {
                let s = e => {
                    a && a.call(t, e), U.Sound.play(h.CLICK);
                };
                e.on(Laya.Event.CLICK, t, s, [i]);
            } else {
                let s = 60, n = 1, o = e.scaleX * n, r = e.scaleY * n, l = .9 * n, c = !1, d = t => {
                    c = !0, Laya.Tween.to(e, {
                        scaleX: l,
                        scaleY: l
                    }, s);
                };
                e.on(Laya.Event.MOUSE_DOWN, t, d, [i]);
                let g = i => {
                    0 != c && (c = !1, Laya.Tween.to(e, {
                        scaleX: o,
                        scaleY: r
                    }, s), a && a.call(t, i), U.Sound.play(h.CLICK));
                };
                e.on(Laya.Event.MOUSE_UP, t, g, [i]);
                let u = t => {
                    Laya.Tween.to(e, {
                        scaleX: o,
                        scaleY: r
                    }, s);
                };
                e.on(Laya.Event.MOUSE_OUT, t, u, [i]);
            }
        }
        getRGB(e) {
            var t = [], a = [];
            let i = e.replace(/#/, "");
            if (3 == i.length) {
                for (var s = [], n = 0; n < 3; n++) s.push(i.charAt(n) + i.charAt(n));
                i = s.join("");
            }
            for (n = 0; n < 3; n++) t[n] = "0x" + i.substr(2 * n, 2), a.push(parseInt(t[n]));
            return new Laya.Vector3(a[0] / 255, a[1] / 255, a[2] / 255);
        }
        getRGBA(e) {
            var t = [], a = [];
            let i = e.replace(/#/, "");
            if (3 == i.length) {
                for (var s = [], n = 0; n < 3; n++) s.push(i.charAt(n) + i.charAt(n));
                i = s.join("");
            }
            for (n = 0; n < 3; n++) t[n] = "0x" + i.substr(2 * n, 2), a.push(parseInt(t[n]));
            return new Laya.Vector4(a[0] / 255, a[1] / 255, a[2] / 255, 1);
        }
        getColorString(e) {
            var t = 15 & e, a = t > 9 ? this.getHexValue(Number(t)) + "" : t + "";
            return ((t = 15 & e >>> 4) > 9 ? this.getHexValue(Number(t)) + "" : t + "") + a;
        }
        getHexValue(e) {
            switch (e) {
                case 10:
                    return "A";

                case 11:
                    return "B";

                case 12:
                    return "C";

                case 13:
                    return "D";

                case 14:
                    return "E";

                case 15:
                    return "F";
            }
        }
        getCurrentTime() {
            return Math.floor(Date.parse(new Date().toString()) / 1e3);
        }
        inverseLerp(e, t, a) {
            return (a - e) / (t - e);
        }
        linearEquation(e, t) {
            var a = (e.y - t.y) / (e.x - t.x);
            return [a, e.y - a * e.x];
        }
        loadJsonFile(e, t) {
            Laya.loader.load(e, Laya.Handler.create(this, a => {
                var i = Laya.loader.getRes(e);
                t(i);
            }), null, Laya.Loader.JSON);
        }
        getRandomArray(e, t) {
            var a = [], i = [];
            i = (i = i.concat(e)).sort(function () {
                return .5 - Math.random();
            });
            for (var s = 0; s < t; s++) a.push(i[s]);
            return a;
        }
        loadSubpackage(e, t, a) {
            if (Laya.Browser.onWeiXin) {
                wx.loadSubpackage({
                    name: e,
                    success: function (i) {
                        console.log("分包加载成功：", e), a.call(i, t, !0);
                    },
                    fail: function (i) {
                        console.error("分包加载失败：", e), a.call(i, t, !1);
                    }
                }).onProgressUpdate(e => {
                    console.log(e, "分包================");
                });
            }
        }
        loadSubpackagesSync(e, t, a) {
            for (var i = e.length, s = 0; s < i; s++) this.loadSubpackage(e[s], t, (e, s) => {
                s && 0 == --i && (console.log("全部分包加载完成"), a.call(this, t, !0));
            });
        }
        loadSubpackages(e, t, a) {
            var i = e.length;
            !function loadSubpackage() {
                var s = e[i - 1];
                null != s ? U.Utils.loadSubpackage(s, t, (e, t) => {
                    t && (i--, loadSubpackage());
                }) : (console.log("全部分包加载完成"), 0 == i ? a.call(this, t, !0) : a.call(this, t, !1));
            }();
        }
        getTimeLeft2BySecond(e) {
            let t = Math.round((e - 30) / 60) % 60, a = e % 60;
            return (t > 0 ? t > 9 ? t + ":" : "0" + t + ":" : "00:") + (a > 0 ? (a > 9 ? a + "" : "0" + a) + "" : "00");
        }
        objectShake(e, t = 1, a = .7) {
            var i = t, s = 1, n = e.transform.localPosition.clone();
            Laya.timer.frameLoop(1, this, function updateShake() {
                if (i > 0) {
                    var t = new Laya.Vector3();
                    Laya.Vector3.scale((o = Math.random() > .5 ? Math.random() : -Math.random(), r = Math.random() > .5 ? Math.random() : -Math.random(),
                        new Laya.Vector3(o, r, 0)), a, t), Laya.Vector3.add(n, t, t), e.transform.localPosition = t,
                        i -= .02 * s;
                } else i = 0, e.transform.localPosition = n, Laya.timer.clear(this, updateShake);
                var o, r;
            });
        }
        objectShake2D(e, t = 1, a = .7) {
            this.originPos && (Laya.timer.clear(this, this.updateShake), e.pos(this.originPos.x, this.originPos.y)),
                this.shakeTime = t;
            this.originPos = new Laya.Vector2(e.x, e.y), Laya.timer.frameLoop(1, this, this.updateShake, [a, e, 1]);
        }
        randomPos() {
            var e = Math.random() > .5 ? Math.random() : -Math.random(), t = Math.random() > .5 ? Math.random() : -Math.random();
            return new Laya.Vector2(e, t);
        }
        updateShake(e, t, a) {
            if (this.shakeTime > 0) {
                var i = new Laya.Vector2();
                Laya.Vector2.scale(this.randomPos(), e, i), i.setValue(i.x + this.originPos.x, i.y + this.originPos.y),
                    t.pos(i.x, i.y), this.shakeTime -= .02 * a;
            } else this.shakeTime = 0, t.pos(this.originPos.x, this.originPos.y), Laya.timer.clear(this, this.updateShake),
                this.originPos = null;
        }
        sameSide(e, t, a, i) {
            var s = n.subtract(t, e), o = n.subtract(a, e), r = n.subtract(i, e), h = n.cross(s, o), l = n.cross(s, r);
            return n.dot(h, l) >= 0;
        }
        pointInTriangle(e, t, a, i) {
            return this.sameSide(e, t, a, i) && this.sameSide(t, a, e, i) && this.sameSide(a, e, t, i);
        }
        findNodeByName(e, t) {
            let a = null, i = e => {
                for (let s = 0; s < e.numChildren; s++) {
                    if (e.getChildAt(s).name == t) return void (a = e.getChildAt(s));
                    i(e.getChildAt(s));
                }
            };
            return i(e), a;
        }
        coinCollectAnim(e, t, a, i = 15, s = null) {
            for (var n = i, o = 0; o < i; o++) {
                let i = Laya.Pool.getItemByClass("coin", Laya.Image);
                i.skin = "ui/sy_jb_01.png", i.x = e.x, i.y = e.y, i.scale(.6, .6), a.addChild(i);
                let o = 300 + 100 * Math.random() - 50;
                Laya.Tween.to(i, {
                    x: i.x + 250 * Math.random() - 125,
                    y: i.y + 250 * Math.random() - 125
                }, o), Laya.timer.once(o + 50, this, function () {
                    Laya.Tween.to(i, {
                        x: t.x,
                        y: t.y
                    }, 400, null, new Laya.Handler(this, function () {
                        a.removeChild(i), Laya.Pool.recover("coin", i), 0 == --n && s && s(a);
                    }));
                });
            }
        }
        fixCameraField(e) {
            let t = (Laya.stage.displayHeight - 1334 < 0 ? 0 : Laya.stage.displayHeight - 1334) / 290 * 10;
            e.fieldOfView += t;
        }
        changeMatColor(e, t) {
            e.meshRenderer && (e.meshRenderer.sharedMaterial.albedoColor = t);
        }
        getRandom() {
            return this.getRandomArray([0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1], 1)[0];
        }
        getAngle(e, t) {
            var a = Laya.Vector3.dot(e, t), i = Laya.Vector3.scalarLength(e) * Laya.Vector3.scalarLength(t);
            if (0 == i) {
                if (e.z > t.z) return 0;
                if (e.z < t.z) return 180;
                if (e.y > t.y) return 90;
                if (e.y < t.y) return -90;
            }
            var s = a / i;
            return 180 * Math.acos(s) / Math.PI;
        }
        transform(e) {
            let t = ["", "", ""], a = 1e3, i = 3;
            for (var s = 1; e / a >= 1;) a *= 10, i += 1;
            if (i <= 4) t[1] = "k", t[0] = (e / 1e3).toFixed(2); else if (i <= 9) {
                let a = parseInt((i - 4).toFixed(0)) / 2 > 1 ? "m" : "k";
                s = "k" === a ? 1e3 : 1e6, t[1] = a;
                let n = (e / s).toFixed(2);
                t[0] = n + "";
            } else if (i <= 16) {
                let a = "b", i = 1;
                "m" === a ? i = 1e6 : "b" === a && (i = 1e9), t[1] = a, t[0] = (e / i).toFixed(2);
            }
            return e < 1e3 && (t[1] = "", t[0] = Number(e).toFixed(0) + ""), t.join("");
        }
        static createTriangle(e, t, a) {
            void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = 1);
            Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
            var i = e / 2, s = t / 2, n = a / 2;
            new Float32Array([-i, s, -n, 0, 1, 0, 0, 0, i, s, -n, 0, 1, 0, 1, 0, i, s, n, 0, 1, 0, 1, 1, -i, -s, -n, 0, -1, 0, 0, 0, i, -s, -n, 0, -1, 0, -1, 0, i, -s, n, 0, -1, 0, -1, -1, -i, s, -n, 0, -1, 0, 0, 0, i, s, -n, 0, -1, 0, -1, 0, i, -s, -n, 0, -1, 0, 0, -1, -i, -s, -n, 0, -1, 0, -1, -1, i, s, -n, 0, 1, 0, 0, 0, i, s, n, 0, 1, 0, 1, 0, i, -s, -n, 0, 1, 0, 0, 1, i, -s, n, 0, 1, 0, 1, 1, -i, s, -n, 0, 1, 0, 0, 0, i, s, n, 0, 1, 0, 0, 0, i, -s, n, 0, 1, 0, 0, 1, -i, -s, -n, 0, 1, 0, 1, 1]),
                new Uint16Array([0, 1, 2, 5, 4, 3, 6, 9, 8, 8, 7, 6, 11, 10, 12, 12, 13, 11, 14, 15, 16, 16, 17, 14]);
        }
        getNormal(e, t, a) {
            var i = n.subtract(t, e), s = n.subtract(a, e);
            return n.normalized(n.cross(s, i));
        }
        missTouch(e, t = 300) {
            // U.Platform.hideBanner(), 
            // e.bottom = 70;
            // var a = R.instance.dataConfig.front_banner_show_time, i = R.instance.dataConfig.front_button_up;
            // Laya.timer.once(a, e, () => {
            //     // U.Platform.showBanner(),
            //      Laya.Tween.to(e, {
            //         bottom: t
            //     }, i);
            // });
        }
        clearMissTouch(e) {
            Laya.timer.clearAll(e);
        }
        clamp(e, t, a) {
            return e < t ? t : e > a ? a : e;
        }
        loadTexture2D(e, t) {
            Laya.Texture2D.load(e, Laya.Handler.create(null, e => {
                t(e);
            }));
        }
        setMaterialTexture(e, t) {
            this.loadTexture2D(t, t => {
                e.albedoTexture = t;
            });
        }
        cameraCrossTween(e, t) {
            let a = Laya.PrimitiveMesh.createBox(1, 1, 1), i = new Laya.MeshSprite3D(a);
            e.addChild(i), i.transform.localPosition = new Laya.Vector3(0, 0, -1);
            let s = new Laya.UnlitMaterial();
            s.alphaTest = !1, s.alphaTestValue = .5, s.blend = 1, s.blendDst = 771, s.blendSrc = 770,
                s.cull = 1, s.depthTest = 515, s.depthWrite = !1, s.renderQueue = 3e3, s.tilingOffset = new Laya.Vector4(1, 1, 0, 0);
            let n = new Laya.Vector4(0, 0, 0, 0);
            s.albedoColor = n, i.meshRenderer.material = s;
            let o = new Laya.Tween();
            o.to(n, {
                w: 1
            }, 1e3, null, Laya.Handler.create(this, () => {
                t && t(), o.to(n, {
                    w: 0
                }, 1e3, null, Laya.Handler.create(this, () => {
                    i.destroy();
                })), o.update = new Laya.Handler(this, () => {
                    s.albedoColor = n;
                });
            })), o.update = new Laya.Handler(this, () => {
                s.albedoColor = n;
            });
        }
        emojiAnim(e, t, a, i = 15, s = null) {
            for (var n = i, o = 0; o < i; o++) {
                let i = Laya.Pool.getItemByClass("coin", Laya.Image);
                a.addChild(i), i.skin = e, i.x = t.x, i.y = t.y, i.alpha = 1, i.scale(.6, .6);
                let o = 400 + 100 * Math.random() - 50, r = Math.random() > .5 ? i.x + 150 * Math.random() + 100 : i.x - 150 * Math.random() - 100;
                Laya.Tween.to(i, {
                    x: r,
                    y: i.y - 125 * Math.random() - 150
                }, o), Laya.timer.once(o + 50, this, function () {
                    Laya.Tween.to(i, {
                        x: i.x,
                        y: i.y - 100,
                        alpha: 0
                    }, 1500, null, new Laya.Handler(this, function () {
                        a.removeChild(i), Laya.Pool.recover("coin", i), 0 == --n && s && s(a);
                    }));
                });
            }
        }
    }
    g.showPoint = function (e, t) {
        for (var a = 0; a < e.length; a++) {
            e[a], g.createBox(.1, .1, .1);
            var i = new Laya.MeshSprite3D();
            U.CommonData.mainScene.addChild(i);
        }
    }, g.createMesh = function (e, t) {
        Laya.Resource.destroyUnusedResources();
        Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL");
        for (var a = [], i = new Laya.Vector3(-1, 0, 0), s = 0; s < e.length; s++) {
            var n = e[s];
            a.push(n.x), a.push(n.y), a.push(n.z), a.push(i.x), a.push(i.y), a.push(i.z);
        }
        new Float32Array(a), new Uint16Array(t);
    }, g.createBox2 = function (e, t, a) {
        void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = 1);
        Laya.VertexMesh.getVertexDeclaration("POSITION");
        var i = e / 2, s = t / 2, n = a / 2;
        new Float32Array([-i, s, -n, i, s, -n, i, s, n, -i, s, n, -i, -s, -n, i, -s, -n, i, -s, n, -i, -s, n, -i, s, -n, -i, s, n, -i, -s, n, -i, -s, -n, i, s, -n, i, s, n, i, -s, n, i, -s, -n, -i, s, n, i, s, n, i, -s, n, -i, -s, n, -i, s, -n, i, s, -n, i, -s, -n, -i, -s, -n]),
            new Uint16Array([0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 8, 9, 10, 10, 11, 8, 12, 15, 14, 14, 13, 12, 16, 17, 18, 18, 19, 16, 20, 23, 22, 22, 21, 20]);
    }, g.createBox = function (e, t, a) {
        void 0 === e && (e = 1), void 0 === t && (t = 1), void 0 === a && (a = 1);
        Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        var i = e / 2, s = t / 2, n = a / 2;
        new Float32Array([-i, s, -n, 0, 1, 0, 0, 0, i, s, -n, 0, 1, 0, 1, 0, i, s, n, 0, 1, 0, 1, 1, -i, s, n, 0, 1, 0, 0, 1, -i, -s, -n, 0, -1, 0, 0, 1, i, -s, -n, 0, -1, 0, 1, 1, i, -s, n, 0, -1, 0, 1, 0, -i, -s, n, 0, -1, 0, 0, 0, -i, s, -n, -1, 0, 0, 0, 0, -i, s, n, -1, 0, 0, 1, 0, -i, -s, n, -1, 0, 0, 1, 1, -i, -s, -n, -1, 0, 0, 0, 1, i, s, -n, 1, 0, 0, 1, 0, i, s, n, 1, 0, 0, 0, 0, i, -s, n, 1, 0, 0, 0, 1, i, -s, -n, 1, 0, 0, 1, 1, -i, s, n, 0, 0, 1, 0, 0, i, s, n, 0, 0, 1, 1, 0, i, -s, n, 0, 0, 1, 1, 1, -i, -s, n, 0, 0, 1, 0, 1, -i, s, -n, 0, 0, -1, 1, 0, i, s, -n, 0, 0, -1, 0, 0, i, -s, -n, 0, 0, -1, 0, 1, -i, -s, -n, 0, 0, -1, 1, 1]),
            new Uint16Array([0, 1, 2, 2, 3, 0, 4, 7, 6, 6, 5, 4, 8, 9, 10, 10, 11, 8, 12, 15, 14, 14, 13, 12, 16, 17, 18, 18, 19, 16, 20, 23, 22, 22, 21, 20]);
    };
    class u {
        constructor() {
            this.init(), Laya.loader.load(this.url, Laya.Handler.create(this, this.loadComplete), Laya.Handler.create(this, this.loadProgress), Laya.Loader.PREFAB);
        }
        init() {
            this.url = [];
            for (let e in r) this.url.push(r[e]);
        }
        getItem(e) {
            let t = Laya.loader.getRes(e);
            return t ? Laya.Pool.getItemByCreateFun(e, t.create, t) : null;
        }
        recoverItem(e, t) {
            Laya.Pool.recover(e, t), t.parent.removeChild(t);
        }
        loadProgress(e) {
            console.log("预制体资源加载中...", e);
        }
        loadComplete() {
            console.log("预制体资源加载完成!");
        }
    }
    class m {
        constructor() {
            this._isPlay = !1, this._isOver = !1, this._isPause = !1, this._isPressed = !1,
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownClick), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpClick),
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveClick);
        }
        get isPressed() {
            return this._isPressed;
        }
        set isPressed(e) {
            this._isPressed = e;
        }
        get isPlay() {
            return this._isPlay;
        }
        set isPlay(e) {
            this._isPlay = e;
        }
        get isOver() {
            return this._isOver;
        }
        set isOver(e) {
            this._isOver = e;
        }
        get isPause() {
            return this._isPause;
        }
        set isPause(e) {
            this._isPause = e, Laya.timer.scale = e ? 0 : 1;
        }
        set gameScale(e) {
            Laya.timer.scale = e;
        }
        onMouseDownClick(e) {
            U.Event.event(a.MOUSE_EVENT, {
                type: "down",
                evt: e
            });
        }
        onMouseUpClick(e) {
            U.Event.event(a.MOUSE_EVENT, {
                type: "up",
                evt: e
            });
        }
        onMouseMoveClick(e) {
            U.Event.event(a.MOUSE_EVENT, {
                type: "move",
                evt: e
            });
        }
        getThrowX(e, t, a, i) {
            return e * Math.pow(i, 2) + t * i + a;
        }
    }
    class f {
        toScale(e, t, a, i, s, n = !1, o = null) {
            if (e) {
                var r = null;
                e.scale(t, t), scale1();
            }
            function scale1() {
                r = n || s ? new Laya.Handler(this, scale2) : null, Laya.Tween.to(e, {
                    scaleX: a,
                    scaleY: a
                }, i, o, r);
            }
            function scale2() {
                r = n ? new Laya.Handler(this, scale1) : null, Laya.Tween.to(e, {
                    scaleX: t,
                    scaleY: t
                }, i, o, r);
            }
        }
        toAlpha(e, t, a, i, s, n = !1, o = null) {
            if (e) {
                var r = null;
                e.alpha = t, alpha1();
            }
            function alpha1() {
                r = n || s ? new Laya.Handler(this, alpha2) : null, Laya.Tween.to(e, {
                    alpha: a
                }, i, o, r);
            }
            function alpha2() {
                r = n ? new Laya.Handler(this, alpha1) : null, Laya.Tween.to(e, {
                    alpha: t
                }, i, o, r);
            }
        }
        toPosition(e, t, a, i = !1, s = 0) {
            let n = new Laya.Vector2(e.x, e.y);
            function pos1() {
                if (i) switch (s) {
                    case 0:
                        var n = new Laya.Handler(this, pos2);
                        break;

                    case 1:
                        n = new Laya.Handler(this, pos3);
                }
                Laya.Tween.to(e, {
                    x: t.x,
                    y: t.y
                }, a, null, n);
            }
            function pos2() {
                Laya.Tween.to(e, {
                    x: n.x,
                    y: n.y
                }, a, null, Laya.Handler.create(this, pos1));
            }
            function pos3() {
                e.x = n.x, e.y = n.y, pos1();
            }
            pos1();
        }
        toPosition3D(e, t, a, i, s, n, o) {
            s && (e.transform.position = s);
            var r = new Laya.Tween(), h = e.transform.position.clone();
            r.to(h, {
                x: t.x,
                y: t.y,
                z: t.z
            }, a, i, Laya.Handler.create(this, () => {
                e.destroyed ? r.clear() : (e.transform.position = t, n && n());
            })), r.update = new Laya.Handler(this, () => {
                e.destroyed ? r.clear() : (e.transform.position = h, o && o(e, h));
            });
        }
        toRotaion(e, t, a, i = !1, s = !1) {
            var n = e.rotation;
            function rotate2() {
                Laya.Tween.to(e, {
                    rotation: -t
                }, 2 * a, null, Laya.Handler.create(this, rotate3));
            }
            function rotate3() {
                Laya.Tween.to(e, {
                    rotation: t
                }, 2 * a, null, Laya.Handler.create(this, rotate2));
            }
            function rotate4() {
                Laya.Tween.to(e, {
                    rotation: n
                }, a);
            }
            !function () {
                if (i) var n = new Laya.Handler(this, rotate2); else if (s) var n = new Laya.Handler(this, rotate4);
                Laya.Tween.to(e, {
                    rotation: t
                }, a, null, n);
            }();
        }
        clear(e) {
            Laya.Tween.clearAll(e);
        }
    }
    class p extends Laya.Script3D {
        onAwake() {
            this.self = this.owner, this.init();
        }
        init(...e) { }
        onDestroy() {
            Laya.timer.clearAll(this), U.Event.offAllCaller(this);
        }
    }
    class y extends p {
        init(e, t, a, i, s, n) {
            this.sizeX = e ? e / 2 : 0, this.sizeY = t ? t / 2 : 0, this.sizeZ = a ? a / 2 : 0,
                this.offsetX = i || 0, this.offsetY = s || 0, this.offsetZ = n || 0, this.maxSize = Math.max(this.sizeZ, Math.max(this.sizeX, this.sizeY));
        }
    }
    class L extends y {
        onAwake() {
            super.onAwake(), null == y.colliders && (y.colliders = []), y.colliders.push(this);
        }
        onDestroy() {
            y.colliders.splice(y.colliders.indexOf(this), 1), super.onDestroy();
        }
        getTarget(e) {
            if (this.touchTargets) {
                a = null;
                for (var t = 0; t < this.touchTargets.length; t++) e == this.touchTargets[t].target && (a = this.touchTargets[t]);
                null == a && (a = {
                    target: e,
                    isFirstTouch: !0
                }, this.touchTargets.push(a));
            } else {
                this.touchTargets = [];
                var a = {
                    target: e,
                    isFirstTouch: !0
                };
                this.touchTargets.push(a);
            }
            return a;
        }
        setTarget(e, t) {
            for (var a = 0; a < this.touchTargets.length; a++) {
                if (e == this.touchTargets[a].target) this.touchTargets[a].isFirstTouch = t;
            }
        }
    }
    class v extends L {
        onStart() {
            if (this.init(1, .2, .24, 0, 0, 0), this.isTrigger = !0, this.speed = 3 * Math.random() / 100 + .03,
                this.isLeft = Math.random() > .5, !this.isLeft) {
                let e = this.self.transform.rotationEuler.clone();
                e.y += 180, this.self.transform.rotationEuler = e;
            }
        }
        onUpdate() {
            this.self.transform.translate(new Laya.Vector3(this.speed, 0, 0));
            let e = this.self.transform.position.clone();
            if (e.x > 2 || e.x < -2) {
                this.isLeft = !this.isLeft;
                let e = this.self.transform.rotationEuler.clone();
                e.y += 180, this.self.transform.rotationEuler = e;
            }
        }
    }
    class S extends p {
        constructor() {
            super(...arguments), this.canFollow = !0;
        }
        changeSkin() {
            let e = U.Level.getKnife(U.Storage.storageData.knifeIndex - 1), t = this.self.getChildByName("KnifePoint");
            t.destroyChildren(), t.addChild(e), e.transform.localPosition = new Laya.Vector3();
            let a = U.Level.getPlate(U.Storage.storageData.plateIndex - 1), i = this.self.getChildByName("PlatePoint");
            i.destroyChildren(), i.addChild(a), a.transform.localPosition = new Laya.Vector3();
        }
        start() {
            this.anim.play("CameraStart");
        }
        init() {
            this.firstX = this.self.transform.position.x, this.oriPos = this.self.transform.position.clone(),
                this.oriRot = this.self.transform.rotationEuler.clone(), this.anim = this.self.getComponent(Laya.Animator),
                this.fx = this.self.getChildByName("CameraWindFX").getChildAt(0).particleSystem,
                this.fx.stop(), this.shineFX = this.self.getChildByName("ShineFX"), this.throwSushiFX = this.self.getChildByName("FX").getChildByName("ThrowSushiFX").particleSystem,
                this.initData();
        }
        setTarget(e) {
            this.target = e;
            var t = this.self.transform.position.clone(), a = this.target.transform.position.clone();
            this.offset = new Laya.Vector3(), Laya.Vector3.subtract(t, a, this.offset);
        }
        finish(e, t) {
            this.fx.stop(), this.self.getChildByName("SushiPoint").addChild(e), e.transform.localPosition = new Laya.Vector3(0, t, 0),
                e.transform.localRotationEuler = new Laya.Vector3(), this.canFollow = !1, this.anim.play("CameraFinish_2"),
                Laya.timer.once(2200, this, () => {
                    this.throwSushiFX.play(), U.Sound.play(h.Finish2);
                }), Laya.timer.once(3e3, this, () => {
                    U.Utils.cameraCrossTween(U.Level.mainCamera, () => {
                        U.Game.isPlay = !1, U.Level.setFog("#EA9B62", !1), console.log("过度到首页"), this.initData(),
                            Laya.timer.once(500, this, () => {
                                this.anim.play("CameraEat_2"), Laya.timer.once(1250, this, () => {
                                    U.Event.event(a.GAME_OVER_EVENT);
                                });
                            });
                    });
                });
        }
        onUpdate() {
            if (U.Game.isPlay && this.target && this.canFollow) {
                var e = new Laya.Vector3(), t = this.target.transform.position.clone();
                Laya.Vector3.add(t, this.offset, e), e.y = this.self.transform.position.y, Laya.Vector3.lerp(this.self.transform.position, e, .2, e),
                    this.self.transform.position = e;
            }
        }
        initData() {
            this.canFollow = !0, this.self.transform.position = this.oriPos, this.self.transform.rotationEuler = this.oriRot,
                this.anim.play("CameraIdle"), this.shineFX.active = !1;
        }
    }
    class C extends L {
        onStart() {
            this.init(10, 5, 2.4, 0, 0, 0), this.isTrigger = !0;
        }
    }
    class w extends L {
        onStart() {
            this.init(1, .2, .24, 0, 0, 0), this.isTrigger = !0;
        }
    }
    class _ {
        constructor() {
            this.tween = new Laya.Tween(), this.tweens = [];
        }
        getTimeByFrame(e) {
            return Math.round(10 * e);
        }
        toTween(e, t, a, i, s, n = !0) {
            this.target = e, this.isLocal = n;
            var o = {}, r = {};
            if (t.pos) {
                var h = n ? e.transform.localPosition.clone() : e.transform.position.clone();
                o.posX = h.x, o.posY = h.y, o.posZ = h.z, r.posX = t.pos.x, r.posY = t.pos.y, r.posZ = t.pos.z;
            }
            if (t.rot) {
                var l = n ? e.transform.localRotationEuler.clone() : e.transform.rotationEuler.clone();
                o.rotX = l.x, o.rotY = l.y, o.rotZ = l.z, r.rotX = t.rot.x, r.rotY = t.rot.y, r.rotZ = t.rot.z;
            }
            if (t.sca) {
                var c = e.transform.getWorldLossyScale().clone();
                o.scaX = c.x, o.scaY = c.y, o.scaZ = c.z, r.scaX = t.sca.x, r.scaY = t.sca.y, r.scaZ = t.sca.z;
            }
            return this.tween.to(o, {
                posX: r.posX,
                posY: r.posY,
                posZ: r.posZ,
                rotX: r.rotX,
                rotY: r.rotY,
                rotZ: r.rotZ,
                scaX: r.scaX,
                scaY: r.scaY,
                scaZ: r.scaZ
            }, a, s, Laya.Handler.create(this, () => {
                i && i();
                var e = this.tweens.shift();
                e && this.toTween(this.target, e.value, e.time, e.completeFun, s, n);
            })), this.tween.update = new Laya.Handler(this, () => {
                t.pos && (n ? e.transform.localPosition = new Laya.Vector3(o.posX, o.posY, o.posZ) : e.transform.position = new Laya.Vector3(o.posX, o.posY, o.posZ)),
                    t.rot && (n ? e.transform.localRotationEuler = new Laya.Vector3(o.rotX, o.rotY, o.rotZ) : e.transform.rotationEuler = new Laya.Vector3(o.rotX, o.rotY, o.rotZ)),
                    t.sca && e.transform.setWorldLossyScale(new Laya.Vector3(o.scaX, o.scaY, o.scaZ));
            }), this;
        }
        clearTween(e) {
            this.tweens = [], this.tween.clear(), this.target && e && (e.pos && (this.isLocal ? this.target.transform.localPosition = new Laya.Vector3(e.pos.x, e.pos.y, e.pos.z) : this.target.transform.position = new Laya.Vector3(e.pos.x, e.pos.y, e.pos.z)),
                e.rot && (this.target.transform.rotationEuler = new Laya.Vector3(e.rot.x, e.rot.y, e.rot.z)),
                e.sca && this.target.transform.setWorldLossyScale(new Laya.Vector3(e.sca.x, e.sca.y, e.sca.z)));
        }
        then(e, t, a) {
            return this.tweens.push({
                value: e,
                time: t,
                completeFun: a
            }), this;
        }
    }
    class E extends y {
        onUpdate() {
            var e = y.colliders;
            if (e && 0 != e.length) for (var t = e.length - 1; t >= 0; t--) {
                var a = e[t];
                if (a.self.transform) {
                    var i = a.getTarget(this), s = a.self.transform.position.clone(), n = this.self.transform.position.clone(), o = a.sizeZ + this.sizeZ - Math.abs(s.z - n.z);
                    if (Math.abs(s.y - n.y) < this.sizeY + a.sizeY && n.z > s.z - this.sizeZ - a.sizeZ && n.z < s.z + this.sizeZ + a.sizeZ && n.x > s.x - this.sizeX - a.sizeX && n.x < s.x + this.sizeX + a.sizeX && a.isTrigger) {
                        if (s.y > n.y) {
                            n.y = s.y - (this.sizeY + a.sizeY);
                            var r = l.Up;
                        } else n.y = s.y + (this.sizeY + a.sizeY), r = l.Down;
                        i.isFirstTouch ? (a.setTarget(this, !1), a.isTrigger ? this.triggerEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n)) : a.isTrigger ? this.triggerStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n);
                    } else if (o > 0 && o < .5 && n.x > s.x - a.sizeX - this.sizeX && n.x < s.x + a.sizeX + this.sizeX && n.y > s.y - this.sizeY - a.sizeY && n.y < s.y + this.sizeY + a.sizeY) {
                        if (s.z > n.z) {
                            n.z = s.z - (a.sizeZ + this.sizeZ);
                            r = l.Forward;
                        } else n.z = s.z + (a.sizeZ + this.sizeZ), r = l.Backward;
                        i.isFirstTouch ? (a.setTarget(this, !1), a.isTrigger ? this.triggerEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n)) : a.isTrigger ? this.triggerStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n);
                    } else if (Math.abs(s.x - n.x) < a.sizeX + this.sizeX && n.z > s.z - a.sizeZ - this.sizeZ && n.z < s.z + a.sizeZ + this.sizeZ && n.y > s.y - this.sizeY - a.sizeY && n.y < s.y + this.sizeY + a.sizeY) {
                        if (s.x > n.x) {
                            n.x = s.x - (a.sizeX + this.sizeX);
                            r = l.Left;
                        } else n.x = s.x + (a.sizeX + this.sizeX), r = l.Right;
                        i.isFirstTouch ? (a.setTarget(this, !1), a.isTrigger ? this.triggerEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionEnter({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n)) : a.isTrigger ? this.triggerStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }) : (this.collisionStay({
                            type: r,
                            owner: this.self,
                            target: a
                        }), this.self.transform.position = n);
                    } else i.isFirstTouch || (a.setTarget(this, !0), a.isTrigger ? this.triggerExit({
                        owner: this.self,
                        target: a
                    }) : this.collisionExit({
                        owner: this.self,
                        target: a
                    }));
                }
            }
        }
        triggerEnter(e) { }
        triggerStay(e) { }
        triggerExit(e) { }
        collisionEnter(e) { }
        collisionStay(e) { }
        collisionExit(e) { }
    }
    !function (e) {
        e.None = "none", e.Forward = "forward", e.Backward = "backward", e.Left = "left",
            e.Right = "right", e.Up = "up", e.Down = "down";
    }(l || (l = {}));
    class x extends E {
        constructor() {
            super(...arguments), this.radius = 1.1, this.maxRadius = 2, this.amount = 200, this.mats = [],
                this.canPlay = !0, this.triggerCount = 0, this.currentIndex = 0;
        }
        initData() {
            if (this.rotateTarget) {
                this.canPlay = !0, this.isPressed = !1, this.canRotate = !1, this.currentIndex = 0,
                    this.radius = 1.1, this.init(4, this.radius, this.radius);
                for (var e = 0; e < 1; e++) {
                    this.rotateTarget.getChildAt(e).getChildAt(0)._children.forEach(e => {
                        e.active = !1;
                    });
                }
                this.self.transform.position = new Laya.Vector3(0, 6.94, -16), this.self.transform.rotationEuler = new Laya.Vector3(),
                    this.rollFX.stop();
            }
        }
        onStart() {
            this.init(4, this.radius, this.radius), this.rotateTarget = this.self.getChildAt(0);
            for (var e = 0; e < 1; e++) {
                this.rotateTarget.getChildAt(e).getChildAt(0)._children.forEach(e => {
                    e.active = !1;
                });
            }
            this.tween = new _(), U.Event.on(a.MOUSE_EVENT, this, this.onMouseEvent);
            let t = this.self.transform.position.clone();
            t.y = 5.5 + this.radius, this.self.transform.position = t, this.addRadius = (this.maxRadius - 1.1) / this.amount,
                this.rollFXSpr = U.Level.moveFX, this.rollFX = this.rollFXSpr.getChildAt(0).particleSystem,
                this.rollFX.stop();
        }
        onMouseEvent(e) {
            "up" == e.type ? this.isPressed = !1 : "down" == e.type && (this.isPressed = !0);
        }
        onUpdate() {
            if (U.Game.isPlay) {
                if (super.onUpdate(), this.oldStatus != this.isPressed && this.canPlay) {
                    this.oldStatus = this.isPressed;
                    let e = this.self.transform.position.clone();
                    e.z += .4, this.tween.clearTween(), this.isPressed ? (e.y = 5 + this.radius, this.tween.toTween(this.self, {
                        pos: e
                    }, 50, () => {
                        U.Sound.play(h.RollDown), U.Utils.objectShake(U.Level.mainCamera, .1, .1);
                    }, Laya.Ease.backOut).then({
                        sca: new Laya.Vector3(1, .75, 1.25)
                    }, 100).then({
                        sca: new Laya.Vector3(1, 1, 1)
                    }, 100)) : (e.y = 5.5 + this.radius, this.tween.toTween(this.self, {
                        pos: e
                    }, 50).then({
                        sca: new Laya.Vector3(1, 1.25, .75)
                    }, 100).then({
                        sca: new Laya.Vector3(1, 1, 1)
                    }, 100));
                } else this.self.transform.translate(new Laya.Vector3(0, 0, .1));
                this.canRotate && this.rotateTarget.transform.rotate(new Laya.Vector3(-.15, 0, 0)),
                    this.oldRotateStatus != this.canRotate && (this.oldRotateStatus = this.canRotate,
                        this.canRotate && this.fxColor ? (this.rollFX.startColorConstant = this.fxColor,
                            this.rollFX.play(), window.WebAudioEngine.playSound("res/sound/RollingLong.mp3")) : (this.rollFX.stop(), window.WebAudioEngine.stopSound("res/sound/RollingLong.mp3")));
                var e = this.self.transform.position.clone();
                e.y = 6.94, this.rollFXSpr.transform.position = e;
            }
        }
        roach() {
            this.isRoach || (this.isRoach = !0, U.Sound.play(h.Roach), Laya.timer.once(1e3, this, () => {
                this.isRoach = !1;
            }));
        }
        triggerEnter(e) {
            var t = e.target.self.name;
            if (-1 != t.indexOf("Sushi1_")) {
                Laya.timer.clear(this, this.cancelRotate), Laya.timer.once(100, this, this.cancelRotate),
                    this.canRotate = !0;
                let t = e.target.self.meshRenderer.material.clone();
                e.target.self.destroy(), this.showPart(t.albedoTexture), U.Event.event("Update_Progress", {
                    value: 5
                });
            } else if (-1 != t.indexOf("Nail_")) Laya.timer.clear(this, this.cancelRotate),
                Laya.timer.once(100, this, this.cancelRotate), this.canRotate = !0, e.target.self.destroy(),
                this.showPart(U.Level.nailTexture), U.Event.event("Update_Progress", {
                    value: -15
                }), this.roach(); else if ("Bug_01" == t) Laya.timer.clear(this, this.cancelRotate),
                    Laya.timer.once(100, this, this.cancelRotate), this.canRotate = !0, e.target.self.destroy(),
                    this.showPart(U.Level.bugTexture), this.showPart(U.Level.bugTexture), this.showPart(U.Level.bugTexture),
                    U.Event.event("Update_Progress", {
                        value: -300
                    }), this.roach(); else if ("Ground_Finish" == t) {
                        this.canPlay = !1, this.tween.clearTween();
                        let e = this.self.transform.position.clone();
                        e.z += .4, e.y = 5 + this.radius, this.tween.toTween(this.self, {
                            pos: e
                        }, 50, () => { }, Laya.Ease.backOut).then({
                            sca: new Laya.Vector3(1, .75, 1.25)
                        }, 100).then({
                            sca: new Laya.Vector3(1, 1, 1)
                        }, 100);
                    }
        }
        triggerExit(e) {
            "Ground_Finish" == e.target.self.name && (U.Game.isPlay = !1, this.tween.clearTween(),
                U.Level.finish(this.self, this.radius - 2), this.rollFX.stop());
        }
        cancelRotate() {
            this.canRotate = !1;
        }
        showPart(e) {
            if (this.currentIndex > 199) return;
            var t = e.url.split("/");
            switch (t[t.length - 1]) {
                case "Sushi_02.jpg":
                    this.fxColor = U.Utils.getRGBA("#46572B");
                    break;

                case "Sushi_04.jpg":
                    this.fxColor = U.Utils.getRGBA("#FE5723");
                    break;

                case "Sushi_011.jpg":
                    this.fxColor = U.Utils.getRGBA("#6FC820");
                    break;

                case "Sushi_012.jpg":
                    this.fxColor = U.Utils.getRGBA("#EAC811");
                    break;

                case "Sushi_03.png":
                    this.fxColor = U.Utils.getRGBA("#E3E0C4");
                    break;

                case "Sushi_05.png":
                    this.fxColor = U.Utils.getRGBA("#FEE211");
                    break;

                case "Sushi_06.png":
                    this.fxColor = U.Utils.getRGBA("#FFE9C9");
                    break;

                case "Sushi_07.png":
                    this.fxColor = U.Utils.getRGBA("#D03E36");
                    break;

                case "Sushi_08.png":
                    this.fxColor = U.Utils.getRGBA("#F9481E");
                    break;

                case "Sushi_09.png":
                    this.fxColor = U.Utils.getRGBA("#41715C");
                    break;

                case "Sushi_010.png":
                    this.fxColor = U.Utils.getRGBA("#876540");
                    break;

                case "Sushi_012.png":
                    this.fxColor = U.Utils.getRGBA("#F5F5F5");
            }
            // U.Platform.playVibrateShort();
            for (var a = 0; a < 1; a++) {
                let t = this.rotateTarget.getChildAt(a).getChildAt(0).getChildAt(this.currentIndex);
                t.active = !0, t.meshRenderer.material.albedoTexture = e;
            }
            this.currentIndex++, this.radius = 1.1 + this.currentIndex * this.addRadius;
            let i = this.self.transform.position.clone();
            i.y = 5 + this.radius, this.self.transform.position = i, this.init(4, this.radius, this.radius);
        }
    }
    class I extends L {
        onStart() {
            this.init(1, .2, .24, 0, 0, 0), this.isTrigger = !0;
        }
    }
    class b {
        constructor() {
            this.matType = [["Sushi_02.jpg", "Sushi_03.png", "Sushi_04.jpg", "Sushi_05.png", "Sushi_06.png", "Sushi_07.png", "Sushi_08.png"], ["Sushi_011.jpg", "Sushi_012.jpg", "Sushi_012.png"], ["Sushi_09.png", "Sushi_010.png"]];
        }
        getKnife(e) {
            return this.cloneObj(this.knifes.getChildAt(e));
        }
        getPlate(e) {
            return this.cloneObj(this.plates.getChildAt(e));
        }
        playHero(e) {
            if (this.heroAnim.play(e), "idle" == e) var t = 1; else t = "happy" == e ? 3 : 2;
            for (var a = this.hero.getChildByName("Hero_01"), i = 1; i < 4; i++) a.getChildAt(i - 1).active = i == t;
        }
        init() {
            var e = this.loadSceneRes();
            this.setFog("#EA9B62", !1), this.moveFX = e.getChildByName("MoveFX");
            var t = e.getChildByName("Target");
            this.sushiComp = t.addComponent(x), this.parent = e.getChildByName("Parent"), this.sushi = e.getChildByName("Sushi1_01"),
                this.nail = e.getChildByName("Nail_01"), this.bug = e.getChildByName("Bug_01"),
                this.knifes = e.getChildByName("Knifes"), this.plates = e.getChildByName("Plates"),
                e.getChildByName("GameScene").getChildByName("Ground_Finish").addComponent(C), this.cameraComp.setTarget(t),
                U.Utils.loadTexture2D("res/scene/Conventional/Assets/Projects/RollSushi/Textures/" + this.matType[2][0], e => {
                    this.nailTexture = e;
                }), U.Utils.loadTexture2D("res/scene/Conventional/Assets/Projects/RollSushi/Textures/" + this.matType[2][1], e => {
                    this.bugTexture = e;
                });
            let a = e.getChildByName("Hero_01");
            this.heroAnim = a.getComponent(Laya.Animator), this.hero = a, this.initLevel(),
                this.cameraComp.changeSkin();
        }
        loadSceneRes() {
            let e = Laya.loader.getRes(U.CommonData.sceneResUrl);
            Laya.stage.addChild(e), Laya.stage.setChildIndex(e, 1), this.mainScene = e;
            var t = e.getChildByName("Camera");
            return this.mainCamera = t.getChildByName("Point").getChildByName("Main Camera"),
                U.Utils.fixCameraField(this.mainCamera), U.CommonData.mainScene = this.mainScene,
                U.CommonData.mainCamera = this.mainCamera, this.cameraComp = t.addComponent(S),
                e;
        }
        loadModelRes() {
            return Laya.loader.getRes(U.CommonData.modelResUrl);
        }
        createShadow(e) {
            var t = e.getChildByName("Directional Light");
            t.shadowMode = Laya.ShadowMode.SoftHigh, t.shadowDistance = 60, t.shadowResolution = 2048,
                t.shadowCascadesMode = Laya.ShadowCascadesMode.TwoCascades, t.shadowNormalBias = .4;
        }
        setFog(e, t = !0) {
            let a = this.mainScene;
            a.enableFog = t, a.fogColor = U.Utils.getRGB(e), a.fogStart = 20, a.fogRange = 50;
        }
        initLevel() {
            this.playHero("idle"), this.cameraComp.initData(), this.parent.destroyChildren(),
                this.parent.addChild(this.sushiComp.self), this.sushiComp.initData();
            let e = U.Storage.storageData.level;
            if (1 == e) var t = 0; else t = e < 4 ? 1 : 2;
            var a = e % 5 == 0;
            if (a) for (var i = 0; i < 5; i++) this.createSushi(20 * i - 5, a); else for (i = 0; i < 5; i++) Math.random() > .3 || 0 == t || 0 == i ? this.createSushi(20 * i - 5) : t > 0 && (Math.random() > .5 ? this.createNail(20 * i - 5) : this.createBug(20 * i - 5),
                t--);
        }
        finish(e, t) {
            this.cameraComp.finish(e, t);
        }
        cloneObj(e) {
            return e ? e.clone() : null;
        }
        createSushi(e, t = !1) {
            let a = new Laya.Sprite3D();
            if (this.parent.addChild(a), a.transform.position = new Laya.Vector3(0, 5.9, e),
                t) var i = U.Utils.getRandomArray(this.matType[1], 1)[0]; else i = U.Utils.getRandomArray(this.matType[0], 1)[0];
            i = "res/scene/Conventional/Assets/Projects/RollSushi/Textures/" + i, U.Utils.loadTexture2D(i, e => {
                let t = this.sushi.clone();
                a.addChild(t), t.transform.localPosition = new Laya.Vector3(0, 0, 0), t._children.forEach(t => {
                    t.addComponent(I), t.meshRenderer.material.albedoTexture = e, t.meshRenderer.material.tilingOffsetZ = 0;
                });
            });
        }
        createNail(e) {
            let t = new Laya.Sprite3D();
            this.parent.addChild(t), t.transform.position = new Laya.Vector3(0, 5.9, e);
            let a = this.nail.clone();
            t.addChild(a), a.transform.localPosition = new Laya.Vector3(0, 0, 0), a._children.forEach(e => {
                e.addComponent(w);
            });
        }
        createBug(e) {
            let t = new Laya.Sprite3D();
            this.parent.addChild(t), t.transform.position = new Laya.Vector3(0, 5.9, e);
            for (var a = 0; a < 3; a++) {
                let e = this.bug.clone();
                t.addChild(e), e.transform.localPosition = new Laya.Vector3(0, 0, 1 * a - 1), e.addComponent(v);
            }
        }
    }
    class A {
        constructor() {
            this.bannerId = "", this.videoId = "", this.interId = "", this.gridId = "", this.existBannerAd = !1,
                this.existVideoAd = !1, this.existInterAd = !1, this.existGridAd = !1, this.init();
        }
        init() {
            console.error("初始化平台失败");
        }
        loadBanner() {
            console.error("暂不支持调用接口: loadBanner");
        }
        showBanner() {
            console.error("暂不支持调用接口: showBanner");
        }
        hideBanner() {
            console.error("暂不支持调用接口: hideBanner");
        }
        loadVideoAd() {
            console.error("暂不支持调用接口: loadVideoAd");
        }
        showVideoAd() {
            console.error("暂不支持调用接口: showVideoAd");
        }
    }
    !function (e) {
        e[e.WeiXin = 0] = "WeiXin", e[e.Qq = 1] = "Qq", e[e.Vivo = 2] = "Vivo", e[e.Oppo = 3] = "Oppo",
            e[e.ZiJieTiaoDong = 4] = "ZiJieTiaoDong", e[e.Mgc = 5] = "Mgc", e[e.Swan = 6] = "Swan",
            e[e.Android = 7] = "Android", e[e.Ios = 8] = "Ios";
    }(c || (c = {}));
    class B extends Laya.Scene {
        constructor() {
            super(), this.navList = this.navList, this.navData = [], this.scrollDir = 1, this.preIndex = -1,
                this.isRandomSort = !1;
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && e.isRandomSort && (this.isRandomSort = this.isRandomSort), B.scrollScene = this,
                this.initList();
        }
        onClosed() {
            Laya.timer.clearAll(this), B.scrollScene = null;
        }
        initList() {
            this.navData = [].concat(R.instance.navDataArr), this.isRandomSort && (this.navData = O.shuffleArr(this.navData)),
                this.navList.hScrollBarSkin = "", this.navList.repeatX = this.navData.length, this.navList.repeatY = 1,
                this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), this.ids = [],
                this.startIndex = 0, this.startLength = 4;
            for (var e = 0; e < this.startLength; e++) {
                var t = this.navData[e];
                t && this.ids.push(t.id);
            }
            Laya.timer.frameLoop(1, this, () => {
                if (this.startIndex != this.navList.startIndex) {
                    if (this.startIndex > this.navList.startIndex) for (var e = 0; e < this.navList.repeatY; e++) this.ids.push(this.navData[this.navList.startIndex + e].id); else for (e = 0; e < this.navList.repeatY; e++) {
                        var t = this.navData[this.startLength - this.navList.repeatY + this.navList.startIndex + e];
                        t && this.ids.push(t.id);
                    }
                    this.startIndex = this.navList.startIndex;
                }
            }), this.scrollLoop();
        }
        mouseHandler(e, t) {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, this.scrollLoop);
        }
        scrollLoop() {
            Laya.timer.once(1e3, this, () => {
                let e = Math.floor(this.navList.startIndex);
                1 == this.scrollDir ? ++e >= this.navData.length - 4 && (e--, this.scrollDir = -this.scrollDir) : --e < 0 && (this.scrollDir = -this.scrollDir),
                    this.navList.tweenTo(e, 1e3, Laya.Handler.create(this, this.scrollLoop));
            });
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item");
                a.getChildByName("icon").skin = this.navData[t].icon, a.off(Laya.Event.CLICK, this, this.navCB, [t]),
                    a.on(Laya.Event.CLICK, this, this.navCB, [t]);
            }
        }
        navCB(e) {
            console.log("click id:", e), R.instance.NavigateApp(e, () => { });
        }
    }
    // class D {
    //     constructor() {
    //         this.currentIndex = 0;
    //     }
    //     static get Instance() {
    //         return D._instance || (D._instance = new D()), D._instance;
    //     }
    //     get sysInfo() {
    //         return this._sysInfo || (this._sysInfo = wx.getSystemInfoSync()), this._sysInfo;
    //     }
    //     initAd(e, t, a = 5, i = 3e4, s = 1, n = 1, o = []) {
    //         this.bannerIds = ["adunit-7e9913f4b72e7d89"], e && t ? (console.log("新机制================"),
    //             this.changeTime = i, this.refreshNum = s, this.bannerNum = n, this.bannerIds = this.bannerIds.concat(o),
    //             this.useInnovation = !0, this.loadBannerNew(), this.showBanner = this.showBannerNew,
    //             this.hideBanner = this.hideBannerNew) : (this.bannerCount = a, this.currentCount = a,
    //                 this.useInnovation = !1, this.loadBannerOld(), this.showBanner = this.showBannerOld,
    //                 this.hideBanner = this.hideBannerOld);
    //     }
    //     getBannerId() {
    //         var e = Math.floor(100 * Math.random()) % this.bannerIds.length;
    //         return this.currentBannerId = this.bannerIds[e], this.bannerIds[e];
    //     }
    //     setBannerTop(e) {
    //         if (!this.currentBanner) return;
    //         let t = this.sysInfo;
    //         if (this.useInnovation) var a = this.currentBanner.banner; else a = this.currentBanner;
    //         let i = a.style.realHeight + .1;
    //         t.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * se.height), a.style.top = t.screenHeight - i + e;
    //     }
    //     loadBannerOld() {
    //         if (!Laya.Browser.onWeiXin) return;
    //         if (this.isLoading) return;
    //         this.isLoading = !0, this.currentBanner && (this.currentBanner.destroy(), this.currentBanner = null);
    //         let e = this.sysInfo, t = this.getBannerId(), a = wx.createBannerAd({
    //             adUnitId: t,
    //             style: {
    //                 width: .8 * e.screenWidth,
    //                 top: .8 * e.screenHeight,
    //                 left: .2 * e.screenWidth / 2
    //             }
    //         });
    //         a.onLoad(() => {
    //             console.log("create banner success"), D.Instance.currentBanner = a, D.Instance.isLoading = !1,
    //                 D.Instance.isLoadBannerError = !1, D.Instance.isloadAndShow && (D.Instance.isloadAndShow = !1,
    //                     D.Instance.showBannerOld());
    //         }), a.onError(e => {
    //             console.log("create banner error", e), D.Instance.isLoading = !1, D.Instance.isLoadBannerError = !0,
    //                 U.Event.event("Hide_Clear_View");
    //         }), a.onResize(t => {
    //             let i = a.style.realHeight + .1;
    //             e.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * se.height), a.style.top = e.screenHeight - i;
    //         });
    //     }
    //     showBannerOld() {
    //         if (!this.currentBanner) return this.isloadAndShow = !0, void this.loadBannerOld();
    //         if (Laya.Browser.onWeiXin) {
    //             if (!this.currentBanner) return;
    //             if (this.isShowBanner) return;
    //             this.isShowBanner = !0, this.currentBanner.show(), console.log("show banner"), this.setBannerTop(0);
    //         }
    //     }
    //     hideBannerOld() {
    //         if (Laya.Browser.onWeiXin) {
    //             if (this.isloadAndShow = !1, 0 == this.isShowBanner) return;
    //             if (this.isShowBanner = !1, !this.currentBanner) return;
    //             this.currentBanner.hide(), console.log("hide banner", this.isShowBanner, this.currentBanner),
    //                 this.countBanner();
    //         }
    //     }
    //     countBanner() {
    //         this.currentBanner && (0 == this.currentCount && (this.currentCount = this.bannerCount,
    //             this.loadBannerOld()), this.currentCount--, console.log("banner剩余展示次数", this.bannerCount));
    //     }
    //     loadBannerNew() {
    //         if (!Laya.Browser.onWeiXin) return;
    //         console.log("create banner"), this.banners = [];
    //         let e = this.sysInfo, t = this.bannerIds.length * this.bannerNum, a = t;
    //         for (let i = 0; i < this.bannerIds.length; i++) {
    //             let s = this.bannerIds[i];
    //             for (let i = 0; i < this.bannerNum; i++) {
    //                 let i = wx.createBannerAd({
    //                     adUnitId: s,
    //                     style: {
    //                         width: .8 * e.screenWidth,
    //                         top: .8 * e.screenHeight,
    //                         left: .2 * e.screenWidth / 2
    //                     }
    //                 });
    //                 i.onLoad(() => {
    //                     let e = {
    //                         banner: i,
    //                         showCount: 0
    //                     };
    //                     D.Instance.banners.push(e), D.Instance.isLoadBannerError = !1, 0 == --t && (D.Instance.isloadAndShow && D.Instance.showBanner(),
    //                         console.log("front_banner_ids=========", this.banners));
    //                 }), i.onError(e => {
    //                     console.log("create banner error", e), 0 == --a && (D.Instance.isLoadBannerError = !0,
    //                         U.Event.event("Hide_Clear_View"));
    //                 }), i.onResize(t => {
    //                     let a = i.style.realHeight + .1;
    //                     e.model.startsWith("iPhone X") && (a += 40 / Laya.Browser.height * se.height), i.style.top = e.screenHeight - a;
    //                 });
    //             }
    //         }
    //     }
    //     showBannerNew() {
    //         if (Laya.Browser.onWeiXin) {
    //             if (this.hideBannerNew(), !this.banners || 0 == this.banners.length) return this.loadBannerNew(),
    //                 void (this.isloadAndShow = !0);
    //             this.currentIndex >= this.banners.length && (this.currentIndex = 0);
    //             let e = this.banners[this.currentIndex];
    //             if (Laya.timer.once(this.changeTime, this, this.showBannerNew), !e || !e.banner) return;
    //             this.currentIndex++, e.banner.show(), e.showCount++, this.currentBanner = e, console.log("show banner", this.currentIndex - 1),
    //                 this.setBannerTop(0);
    //         }
    //     }
    //     hideBannerNew() {
    //         if (this.isloadAndShow = !1, Laya.Browser.onWeiXin) {
    //             let e = this.currentBanner;
    //             if (!e) return;
    //             e.banner.hide(), e.showCount >= this.refreshNum && (e.banner.destroy(), this.banners.splice(this.banners.indexOf(e), 1),
    //                 console.log("destroy banner")), console.log("hide banner", this.currentIndex - 1),
    //                 this.currentBanner = null, Laya.timer.clear(this, this.showBannerNew);
    //         }
    //     }
    // }
    // class T extends A {
    //     constructor() {
    //         super(...arguments), this.bannerTopFactor = 0, this.isShowBanner = !1;
    //     }
    //     init() {
    //         if (Laya.Browser.onWeiXin) {
    //             this.getSystemInfoSync(), this.videoId = "adunit-6916dca5c35a369b", this.interId = "adunit-9661fecbbdc97600",
    //                 this.gridId = "adunit-efdab00ff44b7cf0", this.initAd();
    //             var e = wx.getLaunchOptionsSync().query;
    //             console.log("init query:", e);
    //         }
    //     }
    //     initAd() {
    //         Laya.Browser.onWeiXin && (this.loadVideoAd(), this.createGameCustomAd(), this.createSingleCustomAd());
    //     }
    //     getBannerId() {
    //         var e = Math.floor(100 * Math.random()) % this.bannerIds.length;
    //         return this.currentBannerId = this.bannerIds[e], this.bannerIds[e];
    //     }
    //     setBannerTop(e) {
    //         // D.Instance.setBannerTop(e);
    //     }
    //     countBanner() {
    //         // this.existBannerAd && (0 == this.bannerCount && (this.bannerCount = R.instance.showBannerCount, 
    //         // this.loadBanner()), this.bannerCount--, console.log("剩余展示次数", this.bannerCount));
    //     }
    //     loadVideoAd() {
    //         // if (Laya.Browser.onWeiXin) {
    //         //     var e, t = this;
    //         //     null != (e = this.videoAd) && (e.offLoad(onLoadVideo), e.offError(onErrorVideo), 
    //         //     e.offClose(onCloseVideo)), (e = wx.createRewardedVideoAd({
    //         //         adUnitId: t.videoId
    //         //     })).onLoad(onLoadVideo), e.onError(onErrorVideo), e.onClose(onCloseVideo), this.videoAd = e;
    //         // }
    //         // function onLoadVideo() {
    //         //     console.log("video 加载成功"), t.existVideoAd = !0, t.isForceShowVideo && (t.isForceShowVideo = !1, 
    //         //     t.showVideoAd());
    //         // }
    //         // function onErrorVideo(e) {
    //         //     console.error("video 加载错误", e), t.existVideoAd = !1;
    //         // }
    //         // function onCloseVideo(e) {
    //         //     let t = !!(e && e.isEnded || void 0 === e);
    //         //     U.Event.event(a.AD_VIDEO_CLOSE_EVENT, {
    //         //         isEnded: t
    //         //     });
    //         // }
    //     }
    //     showVideoAd(e = !1) {
    //         // if (Laya.Browser.onWeiXin) {
    //         //     if (!this.existVideoAd) return this.isForceShowVideo = e, e || (console.log("暂无视频"), 
    //         //     U.Platform.showToast("暂无视频", 2e3)), void this.videoAd.load();
    //         //     if (Laya.Browser.onWeiXin) {
    //         //         var t = this.videoAd;
    //         //         t.show().then(() => {}).catch(e => {
    //         //             t.load().then(() => t.show());
    //         //         });
    //         //     }
    //         // }
    //     }
    //     createInterAd(e) {
    //         Laya.Browser.onWeiXin && (this.interAd = wx.createInterstitialAd({
    //             adUnitId: this.interId
    //         }), this.interAd.onLoad(() => {
    //             console.log("插屏广告加载成功"), e && this.showInterAd();
    //         }));
    //     }
    //     showInterAd() {
    //         this.interAd && this.interAd.show();
    //     }
    //     createHomeCustomAd(e) {
    //         if (Laya.Browser.onWeiXin) if (this.homeGridAds) e && this.showHomeGridAd(); else {
    //             let t = 2 * R.instance.dataConfig.front_gezi_number;
    //             this.homeGridAds = [];
    //             for (let a = 0; a < t; a++) {
    //                 let t = this.getGridPos(a, 120 * (Math.floor(a / 2) + 1)), i = wx.createCustomAd({
    //                     adUnitId: this.gridId,
    //                     adIntervals: 30,
    //                     style: t
    //                 });
    //                 this.homeGridAds.push(i), i.onLoad(() => {
    //                     e && i.show();
    //                 });
    //             }
    //         }
    //     }
    //     createGameCustomAd() {
    //         if (Laya.Browser.onWeiXin) {
    //             this.gameGridAd = [];
    //             for (let e = 0; e < 2; e++) {
    //                 let t = this.getGridPos(e, 120 * (Math.floor(e / 2) + 1)), a = wx.createCustomAd({
    //                     adUnitId: this.gridId,
    //                     adIntervals: 30,
    //                     style: t
    //                 });
    //                 this.gameGridAd.push(a), a.onLoad(() => { });
    //             }
    //         }
    //     }
    //     createSingleCustomAd() {
    //         if (Laya.Browser.onWeiXin) {
    //             let e = this.getGridPos(1), t = wx.createCustomAd({
    //                 adUnitId: this.gridId,
    //                 adIntervals: 30,
    //                 style: e
    //             });
    //             this.singleGridAd = t, t.onLoad(() => { });
    //         }
    //     }
    //     showHomeGridAd() {
    //         // if (this.homeGridAds) for (let e = 0; e < this.homeGridAds.length; e++) this.homeGridAds[e].show();
    //     }
    //     hideHomeGridAd() {
    //         // if (this.homeGridAds) for (let e = 0; e < this.homeGridAds.length; e++) this.homeGridAds[e].hide();
    //     }
    //     showGameGridAd() {
    //         // if (this.gameGridAd) for (let e = 0; e < this.gameGridAd.length; e++) this.gameGridAd[e].show();
    //     }
    //     hideGameGridAd() {
    //         // if (this.gameGridAd) for (let e = 0; e < this.gameGridAd.length; e++) this.gameGridAd[e].hide();
    //     }
    //     showSingleGridAd() {
    //         // this.singleGridAd && this.singleGridAd.show();
    //     }
    //     hideSingleGridAd() {
    //         // this.singleGridAd && this.singleGridAd.hide();
    //     }
    //     getGridPos(e, t = 120) {
    //         let a = {
    //             width: 20,
    //             height: 20
    //         };
    //         return e % 2 == 0 ? (a.left = 20, a.top = t) : (a.left = this.sysInfo.windowWidth - 90,
    //             a.top = t), a;
    //     }
    //     loadBanner(e) {
    //         if (Laya.Browser.onWeiXin && (e && (this.isloadAndShow = e), !this.isLoading)) {
    //             this.isLoading = !0, this.existBannerAd = !1;
    //             var t = this, a = this.sysInfo, i = this.getBannerId(), s = wx.createBannerAd({
    //                 adUnitId: i,
    //                 style: {
    //                     top: .8 * a.screenHeight,
    //                     width: .8 * a.screenWidth,
    //                     left: .2 * a.screenWidth / 2
    //                 }
    //             });
    //             s.onLoad(() => {
    //                 var e;
    //                 (console.log("Banner 加载成功"), t.existBannerAd = !0, t.bannerItem = s, t.isLoading = !1,
    //                     t.bannerLoadError = !1, t.isloadAndShow) ? (t.isloadAndShow = !1, (e = U.UI.getTopScene) && e.canShowAd && !e.isWuchu && 0 == R.instance.openSceneCount && t.showBanner()) : t.isShowBanner || (e = U.UI.getTopScene) && e.canShowAd && !e.isWuchu && 0 == R.instance.openSceneCount && t.showBanner();
    //             }), s.onError(e => {
    //                 t.existBannerAd = !1, console.error("Banner 加载错误", e), t.isLoading = !1, t.bannerLoadError = !0,
    //                     U.Event.event("Hide_Clear_View");
    //             }), s.onResize(e => {
    //                 if (!s) return;
    //                 let i = s.style.realHeight + .1;
    //                 a.model.startsWith("iPhone X") && (i += 40 / Laya.Browser.height * se.height), s.style.top = a.screenHeight - i + t.bannerTopFactor;
    //             });
    //         }
    //     }
    //     showScrollUI() {
    //         null == B.scrollScene ? R.instance.openScene(d.SCENE_SCROLLUI) : Laya.stage.setChildIndex(B.scrollScene, Laya.stage.numChildren - 1);
    //     }
    //     hideScrollUI() {
    //         null != B.scrollScene && (R.instance.closeScene(d.SCENE_SCROLLUI), B.scrollScene = null);
    //     }
    //     showBanner(e, t) {
    //         // D.Instance.showBanner();
    //     }
    //     hideBanner() {
    //         // D.Instance.hideBanner();
    //     }
    //     set bannerLoadError(e) { }
    //     get bannerLoadError() {
    //         return D.Instance.isLoadBannerError;
    //     }
    //     getSystemInfoSync() {
    //         if (Laya.Browser.onWeiXin) {
    //             this.sysInfo = wx.getSystemInfoSync();
    //             var e = this.sysInfo.model.split(" ")[1];
    //             Number(e) < 8 && U.Storage.setValue(U.Storage.storageName.isSound, !1);
    //         }
    //     }
    //     regisiterWxCallback() {
    //         Laya.Browser.onWeiXin && (wx.offShow(this.onShowEvent), wx.onShow(this.onShowEvent),
    //             wx.offHide(this.onHideEvent), wx.onHide(this.onHideEvent));
    //     }
    //     onShowEvent(e) {
    //         U.Storage.storageData.isSound && U.Sound.playMusic(h.BGM), U.UI.getTopScene && U.UI.getTopScene.url == o.Game3D && 0 == R.instance.openSceneCount && (U.Game.isPlay = !0),
    //             U.Event.event(a.PLATFORM_WAKE_EVENT);
    //     }
    //     onHideEvent() {
    //         console.log("onHide"), U.Storage.setValue(U.Storage.storageName.offlineTime, new Date().getTime()),
    //             U.Event.event(a.PLATFORM_SLEEP_EVENT), U.Game.isPlay && (U.Game.isPlay = !1);
    //     }
    //     showShareMenuWithTicket(e) {
    //         wx.showShareMenu({
    //             withShareTicket: e,
    //             success: function () { },
    //             fail: function () { },
    //             complete: function () { }
    //         });
    //     }
    //     regisiterWXShareCallback() {
    //         if (Laya.Browser.onWeiXin) {
    //             var e = R.instance.shareContext;
    //             wx.onShareAppMessage(function () {
    //                 return console.log("用户点击了转发按钮"), {
    //                     title: e.title,
    //                     imageUrl: e.image,
    //                     query: "share_id=1",
    //                     success: function (e) { },
    //                     fail: function () { }
    //                 };
    //             });
    //         }
    //     }
    //     showToast(e, t) {
    //         Laya.Browser.onWeiXin && wx.showToast({
    //             title: e,
    //             duration: t,
    //             icon: "none",
    //             success: function () { },
    //             fail: function () { },
    //             complete: function () { },
    //             image: "",
    //             mask: !1
    //         });
    //     }
    //     shareGame(e) {
    //         if (Laya.Browser.onWeiXin) {
    //             console.log("分享游戏");
    //             var t = R.instance.shareContext;
    //             this.JJShareAppMessage(t, e);
    //         }
    //     }
    //     playVibrateShort() {
    //         Laya.Browser.onWeiXin && U.Storage.storageData.isVibrate && wx.vibrateShort({
    //             success: function () { },
    //             fail: function () { },
    //             complete: function () { }
    //         });
    //     }
    //     playVibrateLong() {
    //         Laya.Browser.onWeiXin && U.Storage.storageData.isVibrate && wx.vibrateLong({
    //             success: function () { },
    //             fail: function () { },
    //             complete: function () { }
    //         });
    //     }
    //     showModal(e) {
    //         if (Laya.Browser.onWeiXin) {
    //             var t = this;
    //             wx.showModal({
    //                 title: "提示",
    //                 content: e,
    //                 showCancel: !0,
    //                 confirmText: "重新分享",
    //                 success(e) {
    //                     e.confirm ? (console.log("点击确定"), t.shareGame(t.shareCallBack)) : e.cancel && console.log("点击取消");
    //                 }
    //             });
    //         }
    //     }
    //     aldSendEvent(e, t) {
    //         console.log("埋点：", e), Laya.Browser.onWeiXin && wx.JJSendEvent(() => ({
    //             name: e,
    //             param: t
    //         }));
    //     }
    //     aldSendOpenid(e) { }
    //     JJBannerAdShowCount() {
    //         var e = this;
    //         Laya.Browser.onWeiXin && wx.JJBannerAdShowCount(() => ({
    //             adUnitId: e.currentBannerId,
    //             adUnitName: "banner",
    //             pageName: "all"
    //         }));
    //     }
    //     JJSendVideoAdCount(e, t) {
    //         var a = this;
    //         Laya.Browser.onWeiXin && wx.JJSendVideoAdCount(() => ({
    //             adUnitId: a.videoId,
    //             adUnitName: t,
    //             isEnded: e
    //         }));
    //     }
    //     JJShareAppMessage(e, t) {
    //         wx.JJShareAppMessage(() => ({
    //             title: e.title,
    //             imageUrl: e.imageUrl,
    //             id: e.id
    //         })).then(e => {
    //             t(e);
    //         });
    //     }
    //     JJOnShareAppMessage(e) {
    //         wx.JJOnShareAppMessage(() => ({
    //             title: e.title,
    //             imageUrl: e.imageUrl,
    //             id: e.id
    //         }));
    //     }
    // }
    // class k extends T { }
    class P {
        constructor() {
            this.init();
        }
        init() {
            this.costStrength = 1, this.maxStrength = 20, this.recoverTime = 5, this.recoverValue_Share = 5,
                this.recoverValue_Video = 5, this.currentStrength = U.Storage.storageData.strength;
            let e = (new Date().getTime() - U.Storage.storageData.offlineTime) / 6e4, t = Math.floor(e / this.recoverTime);
            t >= 20 - this.currentStrength && (t = 20 - this.currentStrength), this.addStrength(3, t),
                this.currentStrength < this.maxStrength && (this.countTime = 0, Laya.timer.loop(1e3, this, this.updateStrengthValue));
        }
        addStrength(e, t) {
            switch (e) {
                case 0:
                    this.currentStrength += 1;
                    break;

                case 1:
                    this.currentStrength += this.recoverValue_Video;
                    break;

                case 2:
                    this.currentStrength += this.recoverValue_Share;
                    break;

                case 3:
                    this.currentStrength += t;
            }
            this.currentStrength >= this.maxStrength && null == t && (this.currentStrength = this.maxStrength),
                this.updateData();
        }
        subStrength(e) {
            if (this.currentStrength < this.costStrength) {
                var t = !1;
                this.isGetStrengthByVideo = !this.isGetStrengthByVideo;
            } else t = !0, this.currentStrength == this.maxStrength && (Laya.timer.clear(this, this.updateStrengthValue),
                this.countTime = 0, Laya.timer.loop(1e3, this, this.updateStrengthValue)), this.currentStrength -= this.costStrength;
            this.updateData(), e(t);
        }
        get getStrengtByMaxStrength() {
            return this.currentStrength + "/" + this.maxStrength;
        }
        updateStrengthValue() {
            this.countTime++;
            let e = 60 * this.recoverTime - this.countTime;
            this.time = U.Utils.getTimeLeft2BySecond(e), 0 == e && (this.addStrength(0), this.currentStrength < this.maxStrength ? this.countTime = 0 : Laya.timer.clear(this, this.updateStrengthValue));
        }
        updateData() {
            U.Storage.setValue(U.Storage.storageName.strength, this.currentStrength);
        }
    }
    class M {
        constructor() {
            for (var e in this._pathRoot = "res/sound/", this._soundCtx = {}, this._soundFile = [],
                h) {
                let t = h[e];
                this._soundFile.push(t);
            }
            console.log(this._soundFile), this.init(), Laya.SoundManager.autoStopMusic = !1;
        }
        init() {
            let e = this._pathRoot, t = "", a = this._soundFile, i = this._soundFile.length;
            for (let s = 0; s < i; ++s) {
                t = a[s];
                let i = new Laya.SoundChannel();
                i.url = e + t + ".mp3", -1 != t.indexOf("Bgm") && (i.loops = 0), Laya.SoundManager.addChannel(i),
                    this._soundCtx[t] = !0;
            }
            Laya.loader.load(["res/sound/Bgm.mp3"]);
        }
        play(e) {
            this._soundCtx[e] && U.Storage.storageData.isSound && Laya.SoundManager.playSound(this._pathRoot + e + ".mp3");
        }
        stop(e) {
            this._soundCtx[e] && Laya.SoundManager.stopSound(this._pathRoot + e + ".mp3");
        }
        playMusic(e) {
            Laya.SoundManager.stopMusic(), Laya.SoundManager.playMusic(this._pathRoot + e + ".mp3", 0);
        }
        stopMusic() {
            Laya.SoundManager.stopMusic();
        }
    }
    class N {
        // constructor() {
        //     this.host = "", this.appKey = "", 
        //     this.gameConfigs = {};
        // }
        // request(e, t, a, i = "get") {
        //     let s = new Laya.HttpRequest();
        //     s.once(Laya.Event.COMPLETE, this, a), s.once(Laya.Event.ERROR, this, this.errorHandler), 
        //     s.on(Laya.Event.PROGRESS, this, this.progressHandler);
        //     let n = this.host + e;
        //     "get" == i ? s.send(n + t, "", "get", "json") : "post" == i && s.send(n, t, "post", "json", [ "Content-Type", "application/json;charset=UTF-8" ]);
        // }
        // errorHandler(e) {
        //     console.error("HTTP 错误：", e);
        // }
        // progressHandler(e) {}
        // getJJGameConfigs() {
        //     let e = {};
        //     e.version = U.CommonData.gameVersion, e.app_key = this.appKey, e = this.getParam(e), 
        //     this.request("game/configs", e, function(e) {
        //         console.log(e);
        //     });
        // }
        // getJJGameAds(e = "") {
        //     let t = {};
        //     t.app_key = this.appKey, t.position_id = e, t = this.getParam(t), this.request("ads", t, function(e) {
        //         console.log(e);
        //     });
        // }
        // getParam(e) {
        //     var t = "?";
        //     for (let a in e) t += a + "=" + e[a] + "&";
        //     return t;
        // }
    }
    class V {
        constructor() {
            this.offset = 0, this.loadModels();
        }
        static get Instance() {
            return V._instance || (V._instance = new V()), V._instance;
        }
        loadModels() {
            Laya.loader.load("jsonFile/ModelsConfig.json", Laya.Handler.create(this, () => {
                this.modelsConfig = Laya.Loader.getRes("jsonFile/ModelsConfig.json");
            }), null, Laya.Loader.JSON);
        }
        randomCreateModels(e) {
            this.offset = e;
            let t = Math.floor(100 * Math.random() % this.modelsConfig.length);
            console.log("关卡模组：", t), this.modelsConfig[t].models.forEach(e => {
                this.createModel(e);
            });
        }
        createModel(e) {
            var t = e.name, a = this.cloneObj(this.model.getChildByName(t));
            this.parent.addChild(a);
            let i = e.position;
            a.transform.position = new Laya.Vector3(Number(i.x), Number(i.y), Number(i.z) + this.offset);
            let s = e.rotation;
            s && (a.transform.rotationEuler = new Laya.Vector3(Number(s.x), Number(s.y), Number(s.z)));
        }
        cloneObj(e) {
            return e.clone();
        }
    }
    class U {
        static get ModelCreator() {
            return V.Instance;
        }
        static init() {
            for (var e in a) a[e] = e;
            U.UI, U.Storage, U.Prefab, U.CommonData, U.Utils, U.Event, U.Game, U.Tween, U.Level,
                U.Platform, U.Streng, U.Sound, U.ModelCreator;
        }
        static get UI() {
            return this.uiManager || (this.uiManager = new t()), this.uiManager;
        }
        static get Storage() {
            return this.storageManager || (this.storageManager = new i()), this.storageManager;
        }
        static get Utils() {
            return this.utils || (this.utils = new g()), this.utils;
        }
        static get CommonData() {
            return this.commonData || (this.commonData = new s()), this.commonData;
        }
        static get Event() {
            return this.event || (this.event = new Laya.EventDispatcher()), this.event;
        }
        static get Prefab() {
            return this.prefabManager || (this.prefabManager = new u()), this.prefabManager;
        }
        static get Game() {
            return this.gameManager || (this.gameManager = new m()), this.gameManager;
        }
        static get Tween() {
            return this.tweenManager || (this.tweenManager = new f()), this.tweenManager;
        }
        static get Level() {
            return this.levelManager || (this.levelManager = new b()), this.levelManager;
        }
        static get Platform() {
            // return this.platformManager || (this.platformManager = new k()), this.platformManager;
        }
        static get Streng() {
            return this.strengthManager || (this.strengthManager = new P()), this.strengthManager;
        }
        static get Sound() {
            return this.soundManager || (this.soundManager = new M()), this.soundManager;
        }
        static get Net() {
            return this.netManager || (this.netManager = new N()), this.netManager;
        }
    }
    !function (e) {
        e.SCENE_FRIENDGAME = "JJExport/FriendGameUI.scene", e.SCENE_SCROLLUI = "JJExport/ScrollUI.scene",
            e.SCENE_RECOMMENDUI = "JJExport/RecommendUI.scene", e.SCENE_FULLGAMEUI = "JJExport/FullGameUI.scene",
            e.SCENE_FINISHGAMEUI = "JJExport/FinishGameUI.scene", e.SCENE_DRAWUI = "JJExport/DrawUI.scene",
            e.SCENE_PROGRAMUI = "JJExport/ProgramUI.scene", e.SCENE_WECHATUI = "JJExport/WeChatUI.scene";
    }(d || (d = {}));
    class R {
        constructor() {
            this.dataConfig = {
                is_allow_area: !1,
                is_allow_export: !1,
                front_wuchu_scene: "1001|1002",
                front_pass_gate: 1,
                front_wuchu_finish_gate: 5,
                front_time_tag_switch: !1,
                front_share_number: 1,
                front_all_export_switch: !1,
                front_homepage_ad_switch: !1,
                front_start_remen_chance: 100,
                front_start_wanghong_chance: 100,
                front_duilian_export_switch: !1,
                front_duilian_icon_number: 4,
                front_jingxi_export_switch: !1,
                front_inside_remen_chance: 100,
                front_inside_wanghong_chance: 100,
                front_jiesuan_tiaozhuan_chance: 100,
                front_jiesuan_next_export_chance: 0,
                front_freetips_switch: !1,
                front_randompaly_start_level: 1,
                front_game_number_official: 1,
                front_first_box_gate: 1,
                front_second_box_gate: 1,
                front_box_chance: 100,
                front_progress_bar_return: .006,
                front_progress_bar_reduce: 6,
                front_box_clicks: [2, 8],
                front_is_box_force: !1,
                front_banner_show_time: 1e3,
                front_banner_hide_time: 1e3,
                front_wuchu_wanghong_gate: 1,
                front_wuchu_remen_gate: 1,
                front_banner_appear: 1e3,
                front_button_up: 1e3,
                front_banner_ids: [],
                front_create_banner_num: 2,
                front_banner_change_time: 3e3,
                front_banner_refresh_num: 2,
                front_banner_number: 8,
                front_banner_switch: !1,
                front_homepage_video_switch: !1,
                front_start_game_switch: !1,
                front_start_video_number: 1,
                front_top_gezi_gate: 1,
                front_wx_duilian_switch: !1,
                front_gezi_number: 4,
                front_wx_ad_switch: !1
            }, this.navDataArr = [], this.openSceneCount = 0;
        }
        static get instance() {
            return this._instance || (this._instance = new R()), this._instance;
        }
        get isOpenWuChu() {
            let e = U.Storage.storageData.level;
            return this.dataConfig.is_allow_area && O.allowScene() && e >= this.dataConfig.front_pass_gate && e < this.dataConfig.front_wuchu_finish_gate;
        }
        get shareAmount() {
            var e = this.dataConfig.front_share_number;
            return null != e ? e : 4;
        }
        set shareContext(e) {
            this.shareConfig = e;
        }
        get shareContext() {
            return this.shareConfig;
        }
        get showBannerCount() {
            return this.dataConfig.front_banner_number;
        }
        openScene(e, t = !1, a, i, s) {
            Laya.Scene.open(e, t, a, Laya.Handler.create(this, t => {
                e != d.SCENE_FINISHGAMEUI && this.openSceneCount++, Laya.stage.addChild(t), t.zOrder += 10,
                    s && s();
            }));
        }
        closeScene(e) {
            Laya.Scene.close(e);
        }
        NavigateApp(e, t, a) {
            // if (0 != this.navDataArr.length && (console.log("跳转", this.navDataArr[e].appid),
            //     U.Platform.aldSendEvent("导出-总点击数"), Laya.Browser.onWeiXin)) {
            //     var i = this;
            //     wx.JJNavigateToMiniProgram(() => ({
            //         appId: i.navDataArr[e].appid,
            //         path: i.navDataArr[e].path,
            //         id: i.navDataArr[e].id
            //     })).then(t => {
            //         console.log("success"), U.Platform.aldSendEvent("导出成功-总用户数"), U.Platform.aldSendEvent("导出成功-" + i.navDataArr[e].title);
            //     }, e => {
            //         console.log("fail", e), -1 != e.errMsg.indexOf("cancel") && t && t();
            //     });
            // }
        }
        getTitle(e, t = !0) {
            return null == e ? " " : t && e.subtitle && "" != e.subtitle ? e.subtitle : e.title;
        }
        updateDataConfig(e) {
            var t = e.data;
            this.dataConfig.is_allow_area = e.is_allow_area, this.dataConfig.is_allow_export = e.is_allow_export,
                this.dataConfig.front_wuchu_scene = e.front_wuchu_scene;
            for (let e in t) this.dataConfig[e] = t[e].config_val;
            console.log(this.dataConfig), U.Event.event(a.UPDATE_SHARE_COUNT, {
                amount: this.dataConfig.front_share_number
            });
        }
        updateNavData(e) {
            this.navDataArr = [];
            for (var t = 0; t < e.length; t++) {
                var a = e[t], i = new F();
                i.appid = a.channel_game_appid, i.title = a.channel_game_name, i.path = a.path,
                    i.subtitle = a.originality.copywriting, i.icon = a.originality.material, i.id = a.originality.id,
                    this.navDataArr.push(i);
            }
        }
    }
    class F { }
    class O {
        static httpRequest(e, t, a = "get", i) {
            // var s = new Laya.HttpRequest();
            // s.http.timeout = 5e3,
            // s.once(Laya.Event.COMPLETE, this, i),
            // s.once(Laya.Event.ERROR, this, this.httpRequest, [ e, t, a, i ]), 
            // "get" == a ? s.send(e + "?" + t, "", a, "text") : "post" == a && s.send(e, JSON.stringify(t), a, "text");
        }
        static shuffleArr(e) {
            let t = e.length;
            for (; t;) {
                let a = Math.floor(Math.random() * t--);
                [e[a], e[t]] = [e[t], e[a]];
            }
            return e;
        }
        static fixNodeY(e) {
            e.y = e.y * Laya.stage.displayHeight / Laya.stage.designHeight;
        }
        static visibleDelay(e, t = 1500) {
            e.visible = !1, Laya.timer.once(t, this, () => {
                e.visible = !0;
            });
        }
        static tMove(e, t, a, i) {
            Laya.Tween.to(e, {
                x: t
            }, a, null, new Laya.Handler(this, () => {
                i && i();
            }));
        }
        static allowScene() {
            if (Laya.Browser.onWeiXin) {
                var e = wx.getLaunchOptionsSync();
                console.log("当前场景：", e.scene);
                var t = !0;
                let a = R.instance.dataConfig.front_wuchu_scene;
                if (null == a && (t = !0), -1 == a.search("|")) {
                    t = parseInt(a) != e.scene;
                }
                let i = a.split("|");
                for (let a = 0; a < i.length; a++) {
                    parseInt(i[a]) == e.scene && (t = !1);
                }
                return t;
            }
            return !0;
        }
    }
    class H extends Laya.Script {
        constructor() {
            super(), this.isFix = !1;
        }
        onAwake() {
            if (this.isFix) {
                let e = this.owner;
                O.fixNodeY(e);
            }
        }
        onDestroy() { }
    }
    class G extends Laya.Scene {
        constructor() {
            super(), this.navList = this.navList, this.navData = [], this.clickIndex = 6;
        }
        onOpened(e) {
            e && (e.posY && (this.navList.y = e.posY), 1 == e.fixY && O.fixNodeY(this.navList)),
                this._init();
        }
        onClosed() {
            Laya.timer.clearAll(this);
        }
        _init() {
            this.initList();
        }
        updateNavData() {
            this.navData = [].concat(O.shuffleArr(R.instance.navDataArr)).slice(0, 6), this.navList.array = this.navData;
        }
        initList() {
            if (this.navData = [].concat(O.shuffleArr(R.instance.navDataArr)).slice(0, 6), this.navList.vScrollBarSkin = "",
                this.navList.repeatX = 3, this.navList.repeatY = 2, this.navList.array = this.navData,
                this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.navData.length < 6) this.imgFinger.visible = !1; else {
                var e = U.Utils.getRandomArray([0, 1, 2, 3, 4, 5], 1)[0], t = this.navList.cells[e];
                t.addChild(this.imgFinger), this.imgFinger.pos(t.width / 1.5, t.height / 1.5), Laya.timer.loop(1e3, this, this.fingerAnim);
            }
        }
        fingerAnim() {
            if (!this.isPlayFinger) {
                this.isPlayFinger = !0, U.Tween.toRotaion(this.imgFinger, -30, 100, !1, !0), Laya.timer.once(200, this, () => {
                    this.isPlayFinger = !1;
                });
            }
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item");
                a.getChildByName("icon").skin = this.navData[t].icon;
                var i = R.instance.navDataArr.indexOf(this.navData[t]);
                a.off(Laya.Event.CLICK, this, this.navCB, [t, i]), a.on(Laya.Event.CLICK, this, this.navCB, [t, i]);
            }
        }
        navCB(e, t) {
            // U.Platform.aldSendEvent("结算页 6 个 icon-总点击数"), console.log("click id:", t), R.instance.NavigateApp(t, () => {
            //     R.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
            //         closeCallbackFun: () => {
            //             // U.Platform.showBanner();
            //         }
            //     });
            // }, () => {
            //     U.Platform.aldSendEvent("结算页 6 个 icon-总成功跳转数");
            // }), this.changeData(e);
        }
        changeData(e) {
            this.updateNavData();
            for (var t = [], a = 0; a < this.navData.length; a++) t.push(this.navData[a].id);
        }
    }
    const X = 600;
    class z extends Laya.Scene {
        constructor() {
            super(), this.rootNode = this.rootNode, this.closeBtn = this.closeBtn, this.navList = this.navList,
                this.navData = [], this.scrollDir = 1, this.preIndex = -1, this.closeCallbackFun = null,
                this.isRandomSort = !1;
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && (e.closeCallbackFun && (this.closeCallbackFun = e.closeCallbackFun), e.isRandomSort && (this.isRandomSort = this.isRandomSort)),
                this._init()
            // , U.Platform.aldSendEvent("[好友都在玩的爆款游戏] 弹窗-弹出次数"), U.Platform.hideBanner();
        }
        onClosed() {
            Laya.timer.clearAll(this), this.closeCallbackFun && this.closeCallbackFun(), R.instance.openSceneCount--
            // ,
            // U.Platform.hideBanner(), U.Utils.clearMissTouch(this.closeBtn);
        }
        _init() {
            this.rootNode.y = X, this.rootNode.y = this.rootNode.y * Laya.stage.displayHeight / Laya.stage.designHeight
            // this.closeBtn.on(Laya.Event.CLICK, this, this.closeCB), this.initList(), R.instance.isOpenWuChu ? U.Utils.missTouch(this.closeBtn, 260) : Laya.timer.once(800, this, () => {
            //     U.Platform.showBanner();
            // });
        }
        initList() {
            this.navData = [].concat(R.instance.navDataArr), this.navData = O.shuffleArr(this.navData),
                this.navList.vScrollBarSkin = "", this.navList.repeatX = 3, this.navList.repeatY = Math.floor(this.navData.length / 3),
                this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), Laya.timer.once(1e3, this, () => {
                    Laya.timer.frameLoop(1, this, this.scrollLoop);
                });
        }
        mouseHandler(e, t) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let e = this.navList.scrollBar;
            e.value += this.scrollDir, (e.value >= e.max || e.value <= 0) && (this.scrollDir = -this.scrollDir,
                this.againScroll());
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item"), i = a.getChildByName("icon"), s = a.getChildByName("name");
                i.skin = this.navData[t].icon, s.text = R.instance.getTitle(this.navData[t]), a.off(Laya.Event.CLICK, this, this.navCB, [t]),
                    a.on(Laya.Event.CLICK, this, this.navCB, [t]);
            }
        }
        navCB(e) {
            // U.Platform.aldSendEvent("[好友都在玩的爆款游戏] 弹窗-总点击数"), console.log("click id:", e), e = R.instance.navDataArr.indexOf(this.navData[e]),
            //     R.instance.NavigateApp(e, () => {
            //         // R.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
            //         //     continueCallbackFun: () => {
            //         //         U.Platform.showBanner();
            //         //     }
            //         // });
            //     }, () => {
            //         U.Platform.aldSendEvent("[好友都在玩的爆款游戏] 弹窗-总成功跳转数");
            //     });
        }
        closeCB() {
            R.instance.closeScene(d.SCENE_FRIENDGAME);
        }
    }
    class W {
        constructor() {
            this.dataConfig = R.instance.dataConfig;
        }
        static get Instance() {
            return W._instance || (W._instance = new W()), W._instance;
        }
        get isOpenWuChu() {
            let e = U.Storage.storageData.level;
            return this.dataConfig.is_allow_area && O.allowScene() && e >= this.dataConfig.front_pass_gate && e < this.dataConfig.front_wuchu_finish_gate;
        }
        get isOpenExport() {
            return this.dataConfig.is_allow_export && O.allowScene() && this.dataConfig.front_all_export_switch;
        }
        get isShowExportMoreBtn() {
            return this.isOpenExport && this.dataConfig.front_jingxi_export_switch;
        }
        navClick(e) {
            console.log("click id:", e), R.instance.NavigateApp(e, () => { });
        }
        getRandomIndex() {
            return Math.floor(Math.random() * R.instance.navDataArr.length);
        }
        get getRandom0To100() {
            return 100 * Math.random();
        }
        missTouch(e, t = 300) {
            // U.Platform.hideBanner(), e.bottom = 90;
            // var a = R.instance.dataConfig.front_banner_appear, i = R.instance.dataConfig.front_button_up;
            // Laya.timer.once(a, e, () => {
            //     U.Platform.showBanner(), Laya.Tween.to(e, {
            //         bottom: t
            //     }, i);
            // });
        }
        clearMissTouch(e) {
            Laya.timer.clearAll(e);
        }
        getTitle(e, t = !0) {
            let a = R.instance.navDataArr;
            return null == a[e] ? " " : t && a[e].subtitle && "" != a[e].subtitle ? a[e].subtitle : a[e].title;
        }
        loadHomePage(e) {
            this.isOpenExport && this.dataConfig.front_homepage_ad_switch ? R.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
                isHomePage: !0,
                closeCallbackFun: () => {
                    R.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                        isHomePage: !0,
                        continueCallbackFun: () => {
                            e && e();
                        },
                        dontClose: !0
                    });
                },
                dontClose: !0
            }) : e && e(), this.isOpenWuChu && (this.dataConfig.front_homepage_video_switch ? (this.dataConfig.front_homepage_video_switch = !1,
                console.log("首页自动弹出视频"), U.Platform.showVideoAd(!0), U.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, () => {
                    U.Platform.showInterAd(), U.Event.offAllCaller(this);
                })) : this.dataConfig.front_wx_ad_switch && U.Platform.createInterAd(!0));

            console.log("initListttttttttttttttttttttttt");
        }
        showInterAd() {

            this.isOpenWuChu && this.dataConfig.front_wx_ad_switch && U.Platform.createInterAd(!0);
        }
        showDuilianIcon(e, t = 200) {
            if (this.isOpenExport && this.dataConfig.front_duilian_export_switch) {
                let a = this.dataConfig.front_duilian_icon_number, i = 2 * a, s = [].concat(R.instance.navDataArr);
                s = O.shuffleArr(s).slice(0, i);
                for (let i = 0; i < a; i++) for (let a = 0; a < 2; a++) {
                    let n = s.shift(), o = U.Prefab.getItem(r.DuilianIcon);
                    e.addChild(o), o.pos(0 == a ? 5 : Laya.stage.width - o.width - 5, t + 200 * i);
                    let h = o.getChildAt(0), l = o.getChildAt(1);
                    h.skin = n.icon;
                    let c = R.instance.navDataArr.indexOf(n);
                    l.text = this.getTitle(c), o.off(Laya.Event.CLICK, o.parent, W.Instance.navClick, [c]),
                        o.on(Laya.Event.CLICK, o.parent, W.Instance.navClick, [c]);
                }
            } else this.dataConfig.front_wx_duilian_switch;
            //  && U.Platform.createHomeCustomAd(!0);
        }
        clickStartGame(e) {
            ////////////////////

            // U.Platform.existVideoAd
            //  &&
            platform.getInstance().showInterstitial(() => {
                this.dataConfig.front_start_game_switch && this.dataConfig.front_start_video_number > 0 ? (this.dataConfig.front_start_video_number--,
                    console.log("开始游戏"), Laya.Browser.onWeiXin ? (U.Platform.showVideoAd(), U.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, () => {
                        this.showFirstBox(e), U.Event.offAllCaller(this);
                    })) : this.showFirstBox(e)) : this.showFirstBox(e);
            })

        }
        showGameFinishExport(e) {
            this.isOpenExport ? R.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
                closeCallbackFun: () => {
                    R.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                        continueCallbackFun: () => {
                            W.Instance.showSecondBox(e);
                        }
                    });
                }
            }) : e && e();
        }
        showSettlement(e) {
            // this.isOpenWuChu && e && (this.settlementBtn = e, this.missTouch(e, 290)), Laya.timer.once(10, this, () => {
            //     this.showSettlementExportUI(!0), this.settlementAutoNavigateApp();
            // }), U.Storage.storageData.level >= this.dataConfig.front_top_gezi_gate && U.Platform.showSingleGridAd();
        }
        closeSettlement(e) {
            // U.Platform.hideSingleGridAd(), this.settlementBtn && (this.clearMissTouch(this.settlementBtn),
            //     this.settlementBtn = null), this.showSettlementExportUI(!1), this.isOpenExport && this.getRandom0To100 < this.dataConfig.front_jiesuan_next_export_chance ? R.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
            //         closeCallbackFun: () => {
            //             R.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
            //                 continueCallbackFun: () => {
            //                     e && e();
            //                 }
            //             });
            //         }
            //     }) : e && e();
        }
        wuchuBtn(e, t, a, i) {
            // // Laya.timer.once(20, this, () => {
            // //     U.Platform.hideBanner();
            // // });
            // let s = U.Storage.storageData.level;
            // (e == d.SCENE_FULLGAMEUI && s >= this.dataConfig.front_wuchu_wanghong_gate || e == d.SCENE_RECOMMENDUI && s >= this.dataConfig.front_wuchu_remen_gate) && !t && this.isOpenWuChu && !U.Platform.bannerLoadError ? U.Utils.addClickEvent(a, a.parent, () => {
            //     a.offAllCaller(a.parent), Laya.timer.once(this.dataConfig.front_banner_show_time, this, () => {
            //         // U.Platform.showBanner(), Laya.timer.once(this.dataConfig.front_banner_hide_time, this, () => {
            //         //     U.Platform.hideBanner(), U.Utils.addClickEvent(a, a.parent, i, null, !0);
            //         // });
            //     });
            // }, null, !0) : U.Utils.addClickEvent(a, a.parent, i, null, !0);
        }
        showFullGameUI(e) {
            this.isOpenExport && R.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                continueCallbackFun: () => {
                    e && e();
                }
            });
        }
        showRecommendUI(e) {
            this.isOpenExport && R.instance.openScene(d.SCENE_RECOMMENDUI, !1, {
                closeCallbackFun: () => {
                    e && e();
                }
            });
        }
        wanghongAutoNavigateApp(e) {
            this.isOpenExport && (e && this.getRandom0To100 < this.dataConfig.front_start_wanghong_chance || !e && this.getRandom0To100 < this.dataConfig.front_inside_wanghong_chance) && R.instance.NavigateApp(this.getRandomIndex(), () => {
                console.log("网红爆款自动跳转取消");
            }, () => {
                console.log("网红爆款自动跳转成功");
            });
        }
        remenAutoNavigateApp(e) {
            this.isOpenExport && (e && this.getRandom0To100 < this.dataConfig.front_start_remen_chance || !e && this.getRandom0To100 < this.dataConfig.front_inside_remen_chance) && R.instance.NavigateApp(this.getRandomIndex(), () => {
                console.log("热门推荐自动跳转取消");
            }, () => {
                console.log("热门推荐自动跳转成功");
            });
        }
        settlementAutoNavigateApp() {
            this.isOpenExport && this.getRandom0To100 < this.dataConfig.front_jiesuan_tiaozhuan_chance && R.instance.NavigateApp(this.getRandomIndex(), () => {
                this.settlementBtn && (this.clearMissTouch(this.settlementBtn), this.settlementBtn = null),
                    console.log("结算页自动跳转取消"), R.instance.openScene(d.SCENE_RECOMMENDUI), this.remenAutoNavigateApp();
            }, () => {
                console.log("结算页自动跳转成功");
            });
        }
        showSettlementExportUI(e, t = 600) {
            this.isOpenExport && (e ? R.instance.openScene(d.SCENE_FINISHGAMEUI, !1, {
                posY: t,
                fixY: !0
            }) : R.instance.closeScene(d.SCENE_FINISHGAMEUI));
        }
        showFirstBox(e) {
            this.isOpenWuChu && U.Storage.storageData.level >= this.dataConfig.front_first_box_gate && this.getRandom0To100 < this.dataConfig.front_box_chance ? U.UI.openScene(o.Clean, !1, {
                closeCallback: () => {
                    e && e();
                }
            }) : e && e();
        }
        showSecondBox(e) {
            this.isOpenWuChu && U.Storage.storageData.level >= this.dataConfig.front_second_box_gate && this.getRandom0To100 < this.dataConfig.front_box_chance ? U.UI.openScene(o.Box2, !1, {
                isSettlement: !0,
                closeCallback: () => {
                    e && e();
                }
            }) : e && e();
        }
    }
    class J extends Laya.Scene {
        constructor() {
            super(), this.exitBtn = this.exitBtn, this.continueBtn = this.continueBtn, this.navList = this.navList,
                this.navData = [], this.scrollDir = 1, this.preIndex = -1, this.hotArr = [], this.continueCallbackFun = null,
                this.curGrade = -1;
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && e.continueCallbackFun && (this.continueCallbackFun = e.continueCallbackFun),
                e && e.grade && (this.curGrade = e.grade), e && e.dontClose && (this.dontClose = !0),
                this._init()
            // , U.Platform.aldSendEvent("全屏幕导出页出现次数");
            var t = e && e.isHomePage;
            (W.Instance.wanghongAutoNavigateApp(t), W.Instance.wuchuBtn(this.url, t, this.continueBtn, this.continueCB),
                U.Storage.storageData.level >= W.Instance.dataConfig.front_top_gezi_gate && U.Platform.showSingleGridAd(),
                // U.Platform.hideHomeGridAd(), 
                Laya.Browser.onWeiXin) && (U.Platform.sysInfo.model.startsWith("iPhone X") && (this.continueBtn.bottom += 40));
            R.instance.isOpenFullGameUI = !0;
        }
        onClosed() {
            Laya.timer.clearAll(this), U.Event.offAllCaller(this)
            // , U.Platform.hideBanner(),
            R.instance.openSceneCount--;
            var e = U.UI.getTopScene;
            0 == R.instance.openSceneCount && (e.canShowAd &&
                // U.Platform.showBanner(), 
                e.url == o.Home
                // && U.Platform.showHomeGridAd()
            ),
                R.instance.isOpenFullGameUI = !1, U.Storage.storageData.level >= W.Instance.dataConfig.front_top_gezi_gate
            // && U.Platform.hideSingleGridAd();
        }
        _init() {
            !R.instance.isOpenWuChu || U.Storage.storageData.level < R.instance.dataConfig.front_randompaly_start_level ? this.exitBtn.visible = !1 : this.exitBtn.on(Laya.Event.CLICK, this, this.closeCB),
                this.getHotRandArr(),
                this.initList();
        }
        getHotRandArr() {
            let e = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            e = O.shuffleArr(e), this.hotArr = e.slice(0, 3);
        }
        initList() {
            this.navData = [].concat(R.instance.navDataArr), this.navData = O.shuffleArr(this.navData),
                this.navList.vScrollBarSkin = "", this.navList.repeatX = 3, this.navList.repeatY = Math.floor(this.navData.length / 3),
                this.navList.array = this.navData, this.navList.height = Laya.stage.displayHeight - 434,
                this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), Laya.timer.once(1e3, this, () => {
                    Laya.timer.frameLoop(1, this, this.scrollLoop);
                });
        }
        mouseHandler(e, t) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let e = this.navList.scrollBar;
            e.value += this.scrollDir, (e.value >= e.max || e.value <= 0) && (this.scrollDir = -this.scrollDir,
                this.againScroll());
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item"), i = a.getChildByName("icon"), s = a.getChildByName("name"), n = a.getChildByName("hot");
                a.getChildByName("color").skin = "JJExportRes/" + (Math.floor(t % 9) + 1) + ".png",
                    i.skin = this.navData[t].icon, s.text = R.instance.getTitle(this.navData[t]), n.visible = -1 != this.hotArr.indexOf(t),
                    a.off(Laya.Event.CLICK, this, this.navCB, [t]), a.on(Laya.Event.CLICK, this, this.navCB, [t]);
            }
        }
        navCB(e) {
            // U.Platform.aldSendEvent("网红爆款全屏幕导出页-总点击数"), console.log("click id:", e), e = R.instance.navDataArr.indexOf(this.navData[e]),
            //     R.instance.NavigateApp(e, () => { }, () => {
            //         U.Platform.aldSendEvent("网红爆款全屏幕导出页-总成功跳转数");
            //     });
        }
        closeCB() {
            var e = Math.floor(Math.random() * this.navData.length);
            // U.Platform.aldSendEvent("网红爆款全屏幕导出页-总点击数"), console.log("click id:", e), R.instance.NavigateApp(e, null, () => {
            //     U.Platform.aldSendEvent("网红爆款全屏幕导出页-总成功跳转数");
            // });
        }
        continueCB() {
            this.dontClose ? this.continueCallbackFun && (this.continueCallbackFun(), this.continueCallbackFun = null) : (this.close(),
                this.continueCallbackFun && this.continueCallbackFun());
        }
    }
    class Y extends Laya.Scene {
        constructor() {
            super(), this.navList = this.navList, this.navData = [], this.scrollDir = 1, this.preIndex = -1,
                this.closeCallbackFun = null;
        }
        onAwake() {
            this.height = Laya.stage.height;
        }
        onOpened(e) {
            e && e.closeCallbackFun && (this.closeCallbackFun = e.closeCallbackFun), e && e.dontClose && (this.dontClose = !0),
                this._init()
            //  U.Platform.aldSendEvent("热门推荐全屏幕导出页出现次数");
            var t = e && e.isHomePage;
            W.Instance.remenAutoNavigateApp(t), W.Instance.wuchuBtn(this.url, t, this.continueBtn, this.closeCB),
                U.Storage.storageData.level >= W.Instance.dataConfig.front_top_gezi_gate && U.Platform.showSingleGridAd();
        }
        onClosed() {
            Laya.timer.clearAll(this), U.Event.offAllCaller(this),
                //  R.instance.isOpenWuChu && U.Platform.hideBanner(),
                R.instance.openSceneCount--;
            var e = U.UI.getTopScene;
            0 == R.instance.openSceneCount && null != e
            // && e.canShowAd && U.Platform.showBanner(),
            // U.UI.getTopScene.url == o.Reborn && U.Event.event("timeStatus", {
            //     isStartTimer: !0
            // }), this.closeCallbackFun && this.closeCallbackFun(), 
            // U.Storage.storageData.level >= W.Instance.dataConfig.front_top_gezi_gate && U.Platform.hideSingleGridAd();
        }
        _init() {
            this.initList();
            platform.getInstance().initList(this.ADList);
        }
        initList() {
            if (this.navData = [].concat(R.instance.navDataArr), this.navData = O.shuffleArr(this.navData),
                this.navList.vScrollBarSkin = "", this.navList.repeatX = 2, this.navList.repeatY = Math.floor(this.navData.length / 2),
                this.navList.array = this.navData, this.navList.height = Laya.stage.displayHeight - 430,
                this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), this.navData.length < 6) this.imgFinger.visible = !1; else {
                var e = U.Utils.getRandomArray([0, 1, 2, 3, 4, 5], 1)[0], t = this.navList.cells[e];
                t.addChild(this.imgFinger), this.imgFinger.pos(t.width / 1.5, t.height / 1.5), Laya.timer.loop(1e3, this, this.fingerAnim);
            }
            Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        mouseHandler(e, t) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let e = this.navList.scrollBar;
            e.value += this.scrollDir, (e.value >= e.max || e.value <= 0) && (this.scrollDir = -this.scrollDir,
                this.againScroll());
        }
        onListRender(e, t) {
            if (!(t >= this.navList.array.length)) {
                var a = e.getChildByName("item"), i = a.getChildByName("icon"), s = a.getChildByName("name");
                i.skin = this.navData[t].icon, s.text = R.instance.getTitle(this.navData[t]), a.off(Laya.Event.CLICK, this, this.navCB, [t]),
                    a.on(Laya.Event.CLICK, this, this.navCB, [t]);
            }
        }
        navCB(e) {
            // U.Platform.aldSendEvent("热门推荐全屏幕导出页-总点击数"), console.log("click id:", e),
            //  e = R.instance.navDataArr.indexOf(this.navData[e]),
            // R.instance.NavigateApp(e, () => { }, () => {
            //     U.Platform.aldSendEvent("热门推荐全屏幕导出页-总成功跳转数");
            // });
        }
        onContinueClick() {
            var e = Math.floor(Math.random() * this.navData.length);
            // U.Platform.aldSendEvent("热门推荐全屏幕导出页-总点击数"), console.log("click id:", e), R.instance.NavigateApp(e, null, () => {
            //     U.Platform.aldSendEvent("热门推荐全屏幕导出页-总成功跳转数");
            // });
        }
        closeCB() {
            this.dontClose ? this.closeCallbackFun && (this.closeCallbackFun(), this.closeCallbackFun = null) : this.close();
        }
        fingerAnim() {
            if (!this.isPlayFinger) {
                this.isPlayFinger = !0, U.Tween.toRotaion(this.imgFinger, -30, 100, !1, !0), Laya.timer.once(200, this, () => {
                    this.isPlayFinger = !1;
                });
            }
        }
    }
    class K extends Laya.Scene {
        checkShareOrVideo() {
            // this.isVideo = U.Storage.storageData.shareCount <= 0 && U.Platform.existVideoAd,
            //     this.imgType && (this.isVideo ? this.imgType.skin = "ui/sy_sj_04.png" : this.imgType.skin = "ui/sy_sj_05.png"),
            //     U.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, this.onCloseVideo);
        }
        onAwake() {
            (this.height = Laya.stage.height, this.checkShareOrVideo(), Laya.Browser.onWeiXin && this.btmBox) && (U.Platform.sysInfo.model.startsWith("iPhone X") && (this.btmBox.bottom += 40));
            this.init(), this.initUI(), this.initData(),
                this.initEvent()
            //  ,
            //   this.canShowAd && !this.isWuchu && 0 == R.instance.openSceneCount ? (U.Platform.showBanner(),
            // console.log("BaseScene ShowBanner")) : (U.Platform.hideBanner(), console.log("BaseScene HideBanner")),
            // Laya.timer.once(10, this, () => {
            //     null != B.scrollScene && Laya.stage.setChildIndex(B.scrollScene, Laya.stage.numChildren - 1);
            // }), U.Event.on(a.UPDATE_CHECK_SV, this, this.checkShareOrVideo);
        }
        get isWuchu() {
            return R.instance.isOpenWuChu && this.url == o.Settlement;
        }
        onClosed() {
            Laya.timer.clearAll(this), U.Event.offAllCaller(this), this.scene.destroy();
            console.log("onClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosedonClosed");
        }
        init() {
            this.btnClose && U.Utils.addClickEvent(this.btnClose, this, this.onCloseEvent, null, !0),
                this.fcCoin && (
                    this.fcCoin.value = U.Storage.storageData.coin.toString(),
                    U.Event.on(a.CHANGE_COIN_EVENT, this, () => {
                        this.fcCoin.value = U.Storage.storageData.coin.toString();
                    })), this.fcLevel && (this.fcLevel.value = U.Storage.storageData.level.toString());
        }
        initUI() { }
        initData() { }
        initEvent() { }
        onCloseEvent() {
            console.log("before close");
            U.UI.closeScene(this.url),
                this.onBtnCloseCallBack && this.onBtnCloseCallBack();
        }
        RewardClick(e, t) {
            if (!Laya.Browser.onWeiXin) return this.rewardCallback = e, void this.rewardCallback();
            t || this.isVideo ? (U.Event.off(a.AD_VIDEO_CLOSE_EVENT, this, this.onCloseVideo),
                U.Event.on(a.AD_VIDEO_CLOSE_EVENT, this, this.onCloseVideo), this.rewardCallback = e,
                U.Platform.showVideoAd()) : U.Platform.shareGame(t => {
                    t ? (e(), U.Event.event(a.UPDATE_SHARE_COUNT, {
                        amount: U.Storage.storageData.shareCount - 1
                    })) : U.Platform.showModal(U.CommonData.shareContext);
                });
        }
        onCloseVideo(e) {
            // this.rewardCallback && (e.isEnded ? this.rewardCallback() : (console.log("未看完视频"),
            //     U.Platform.showToast("未看完视频", 2e3)), this.rewardCallback = null);
        }
        get canShowAd() {
            return this.url == o.Settlement || this.url == o.Home;
        }
    }
    class j extends K {
        constructor() {
            super(...arguments), this.boxMaskHeight = 0;
        }
        onPress() {
            this.pressBar.value += this.addProgerss, Laya.Tween.to(this.btnPress, {
                scaleX: .7,
                scaleY: .7
            }, 110, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, {
                    scaleX: 1,
                    scaleY: 1
                }, 110, null);
            })), Laya.Tween.to(this.imgSushi, {
                rotation: 30
            }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.imgSushi, {
                    rotation: 0
                }, 100);
            })),
                console.log("前", this.pressBar.value, this.addProgerss, this.needClick)
            // , 
            // this.pressBar.value >= this.needClick * this.addProgerss && (U.Platform.showBanner(),
            //     Laya.timer.once(2500, this, () => {
            //         this.isforce ? (U.Platform.bannerLoadError && (U.Event.offAll("Hide_Clear_View"),
            //             this.onCloseEvent()), U.Platform.hideBanner()) : (U.Event.offAll("Hide_Clear_View"),
            //                 this.onCloseEvent());
            //     }));
        }
        reFreshUI() {
            this.pressBar.value > R.instance.dataConfig.front_progress_bar_return && (this.pressBar.value -= R.instance.dataConfig.front_progress_bar_return),
                this.light.rotation += 1;
        }
        show() {
            this.pressBar.value = 0;
        }
        initUI() {
            U.Utils.addClickEvent(this.btnPress, this, this.onPress), this.show(), Laya.timer.frameLoop(1, this, this.reFreshUI),
                this.pressBar.value = 0;
            var e = Number(R.instance.dataConfig.front_box_clicks[0]), t = Number(R.instance.dataConfig.front_box_clicks[1]);
            this.max = t, this.needClick = Math.floor(Math.random() * (t - R.instance.dataConfig.front_progress_bar_reduce - e + 1)) + e,
                this.addProgerss = 1 / t, console.log("点击数：", this.needClick), R.instance.dataConfig.front_is_box_force ? (this.isforce = !0,
                    U.Event.on("Hide_Clear_View", this, () => {
                        U.Event.offAll("Hide_Clear_View"), this.onCloseEvent();
                        console.log("在这里调用了");
                    })) : this.isforce = !1;
        }
        initEvent() {
            U.Event.on(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent),
                U.Platform.bannerLoadError || U.Event.on("Hide_Clear_View", this, () => {
                    U.Event.offAll("Hide_Clear_View"), this.onCloseEvent();
                    console.log("在这里调用了2");
                });
        }
        onOpened(e) {
            super.onOpened(e), this.visible = !1, e && (this.closeCallback = e.closeCallback),
                Laya.timer.once(100, this, () => {
                    // U.Platform.hideBanner();
                }), this.visible = !0, Laya.timer.once(10, this, () => {
                    U.Platform.bannerLoadError && (U.Event.offAll("Hide_Clear_View"), this.onCloseEvent());
                    console.log("在这里调用了3");
                });
        }
        onCloseEvent() {
            U.Event.offAll("Hide_Clear_View"),
                U.Event.off(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent),
                console.log("在这里调用了3"),
                U.UI.closeScene(o.Box2), this.closeCallback && (this.closeCallback(), this.closeCallback = null);
        }
    }
    class Z extends K {
        initData() {
            this.countTimer = 0,
                this.count = 1,
                Laya.timer.frameLoop(1, this, this.checkLoad);
        }
        checkLoad() {
            this.imgRotate.rotation += 5, this.countTimer += Laya.timer.delta, this.countTimer / 1e3 > .2 && (this.count++,
                this.countTimer = 0, this.count > 3 && (this.count = 1)), this.updateLoading(),
                U.CommonData.loadFinished && (
                    platform.getInstance().yadstartup("Sushi-Roll-3d", () => {
                        window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                        U.CommonData.loadFinished = !1,
                            console.log("进入游戏首页"),
                            U.UI.openScene(o.Game3D, !1, null, null, () => {
                                U.Sound.playMusic(h.BGM), U.UI.openScene(o.Home, !1, null, null, () => {
                                    U.UI.closeScene(o.BusyLoading),
                                        //  U.Platform.aldSendEvent("进入首页");

                                        platform.getInstance().showBanner();
                                    platform.getInstance().hideSplash();
                                });
                            })
                    })

                )
        }
        updateLoading() {
            for (var e = 0; e < 3; e++) {
                this.imgLoading.getChildAt(e).visible = this.count >= e + 1;
            }
        }
    }
    class q extends K {
        constructor() {
            super(...arguments), this.boxMaskHeight = 0;
        }
        onPress() {
            this.pressBar.value += this.addProgerss, Laya.Tween.to(this.btnPress, {
                scaleX: .7,
                scaleY: .7
            }, 110, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, {
                    scaleX: 1,
                    scaleY: 1
                }, 110, null);
            })), Laya.Tween.to(this.imgGift, {
                rotation: 30
            }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.imgGift, {
                    rotation: 0
                }, 100);
            }))
            // , console.log("前", this.pressBar.value, this.addProgerss, this.needClick), this.pressBar.value >= this.needClick * this.addProgerss && (U.Platform.showBanner(),
            //     Laya.timer.once(2500, this, () => {
            //         this.isforce ? (U.Platform.bannerLoadError && (U.Event.offAll("Hide_Clear_View"),
            //             this.onCloseEvent()), U.Platform.hideBanner()) : (U.Event.offAll("Hide_Clear_View"),
            //                 this.onCloseEvent());
            //     }));
        }
        reFreshUI() {
            this.pressBar.value > R.instance.dataConfig.front_progress_bar_return && (this.pressBar.value -= R.instance.dataConfig.front_progress_bar_return),
                this.light.rotation += 1;
        }
        show() {
            this.pressBar.value = 0;
        }
        initUI() {
            U.Utils.addClickEvent(this.btnPress, this, this.onPress), this.show(), Laya.timer.frameLoop(1, this, this.reFreshUI),
                this.pressBar.value = 0;
            var e = Number(R.instance.dataConfig.front_box_clicks[0]), t = Number(R.instance.dataConfig.front_box_clicks[1]);
            this.max = t, this.needClick = Math.floor(Math.random() * (t - R.instance.dataConfig.front_progress_bar_reduce - e)) + e,
                this.addProgerss = 1 / t, console.log("点击数：", this.needClick), R.instance.dataConfig.front_is_box_force ? (this.isforce = !0,
                    U.Event.on("Hide_Clear_View", this, () => {
                        U.Event.offAll("Hide_Clear_View"), this.onCloseEvent(),
                            console.log("在这里调用了4");
                    })) : this.isforce = !1;
        }
        initEvent() {
            U.Event.on(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent),
                U.Platform.bannerLoadError || U.Event.on("Hide_Clear_View", this, () => {
                    U.Event.offAll("Hide_Clear_View"), this.onCloseEvent();
                    console.log("在这里调用了5");
                });
        }
        onOpened(e) {
            super.onOpened(e), e.isSettlement && (this.imgGift.skin = "ui/jx_lw_02.png"), this.visible = !1,
                e && (this.closeCallback = e.closeCallback), Laya.timer.once(100, this, () => {
                    // U.Platform.hideBanner();
                }), Math.random() < R.instance.dataConfig.front_box_chance / 100 ? (this.visible = !0,
                    Laya.timer.once(10, this, () => {
                        U.Platform.bannerLoadError && (U.Event.offAll("Hide_Clear_View"), this.onCloseEvent());
                        console.log("在这里调用了6");
                    })) : this.onCloseEvent();
        }
        onCloseEvent() {
            U.Event.offAll("Hide_Clear_View"), U.Event.off(a.PLATFORM_WAKE_EVENT, this, this.onCloseEvent),
                console.log("在这里调用了6"),
                U.UI.closeScene(o.Clean), this.closeCallback && (this.closeCallback(), this.closeCallback = null);
        }
    }
    class Q extends K {
        constructor() {
            super(...arguments), this.lastWidth = 0;
        }
        initData() {
            this.tween = new Laya.Tween();
        }
        initUI() {
            W.Instance.isOpenExport && R.instance.dataConfig.front_freetips_switch || (this.iconItem.visible = !1),
                this.visible = !1, this.levelProgress.width = 0, this.lastWidth = 0, this.emoji1.visible = !0,
                this.emoji2.visible = !0;
        }
        initEvent() {
            U.Event.on(a.GAME_OVER_EVENT, this, this.onGameOverEvent), U.Event.on(a.GAME_INIT_EVENT, this, this.onInitGameEvent),
                U.Event.on(a.GAME_PLAY_EVENT, this, this.onPlayGameEvent), U.Event.on("Update_Progress", this, e => {
                    let t = this.lastWidth + e.value;
                    this.lastWidth = t, t > 552 ? (t = 552, this.lastWidth = 552) : t < 0 && (t = 0);
                    this.tween.clear(), this.tween.to(this.levelProgress, {
                        width: t
                    }, 500), this.emoji2.visible = this.levelProgress.width < 545, this.emoji1.visible = this.levelProgress.width < 280,
                        e.value < 0 ? this.showBadEmoji() : this.showGoodEmoji();
                });
        }
        showBadEmoji() {
            if (this.isShowing) return;
            this.isShowing = !0;
            let e = "ui/Face_0" + (Math.ceil(2 * Math.random()) + 6) + ".png";
            U.Utils.emojiAnim(e, {
                x: Laya.stage.width / 2,
                y: Laya.stage.height / 2
            }, this, 1, () => {
                this.isShowing = !1;
            });
        }
        showGoodEmoji() {
            if (this.isShowing) return;
            this.isShowing = !0;
            let e = "ui/Face_0" + Math.ceil(5 * Math.random()) + ".png";
            U.Utils.emojiAnim(e, {
                x: Laya.stage.width / 2,
                y: Laya.stage.height / 2
            }, this, 1, () => {
                this.isShowing = !1;
            });
        }
        onInitGameEvent() {
            U.Game.isOver = !1, U.Game.isPlay = !1, this.visible = !1, this.iconItem.left = -200,
                this.fcLevel.value = U.Storage.storageData.level.toString(), U.Level.setFog("#EA9B62", !1),
                U.Level.initLevel(), this.levelProgress.width = 0, this.lastWidth = 0, this.emoji1.visible = !0,
                this.emoji2.visible = !0, U.Event.event("hide_game_gridComponent");
        }
        onPlayGameEvent(e) {
            U.Level.cameraComp.start(), this.visible = !0, U.Event.event("show_game_gridComponent"),
                U.UI.closeScene(o.Home),
                // U.Platform.aldSendEvent("开始游戏"),
                //  U.Platform.aldSendEvent("第" + U.Storage.storageData.level + "关：进入"),
                Laya.timer.once(500, this, () => {
                    U.Level.setFog("#EA9B62");
                }), Laya.timer.once(1e3, this, () => {
                    U.Game.isPlay = !0, U.Game.isOver = !1, W.Instance.isOpenExport && R.instance.dataConfig.front_freetips_switch && Laya.timer.once(1500, this, () => {
                        this.iconItem.visible = !0, Laya.Tween.to(this.iconItem, {
                            left: 30
                        }, 500);
                    })
                    // , R.instance.dataConfig.front_banner_switch && Laya.timer.once(1e3, this, () => {
                    //     U.Platform.showBanner();
                    // }),
                    this.showTips();
                });
        }
        onGameOverEvent(e) {
            ///////////////GAMEOVER
            if (!U.Game.isOver) {
                if (U.Game.isPlay = !1, U.Game.isOver = !0, Laya.timer.clearAll(this),
                    this.lastWidth > 280) {
                    Laya.timer.once(100, this, () => {
                        //当前的胜负状态
                        if (Laya.LocalStorage.getItem("Sushi-Roll-3D-GameOver-State")) { Laya.LocalStorage.setItem("Sushi-Roll-3D-GameOver-State", 1) }
                        Laya.LocalStorage.setItem("Sushi-Roll-3D-GameOver-State", 1),
                            U.Storage.passLevel(),
                            U.Level.playHero("happy");
                    }), U.Level.cameraComp.shineFX.active = !0, U.Sound.play(h.EndLight);
                    for (var t = 0; t < 5; t++) {
                        let e = "ui/Face_0" + Math.ceil(5 * Math.random()) + ".png";
                        U.Utils.emojiAnim(e, {
                            x: Laya.stage.width / 2,
                            y: Laya.stage.height / 2
                        }, this, 1);
                    }
                } else {
                    Laya.timer.once(100, this, () => {
                        //当前的胜负状态
                        Laya.LocalStorage.setItem("Sushi-Roll-3D-GameOver-State", 0),
                            U.Level.playHero("sad");
                    }), U.Sound.play(h.Fail);
                    for (t = 0; t < 5; t++) {
                        let e = "ui/Face_0" + (Math.ceil(2 * Math.random()) + 6) + ".png";
                        U.Utils.emojiAnim(e, {
                            x: Laya.stage.width / 2,
                            y: Laya.stage.height / 2
                        }, this, 1);
                    }
                }
                Laya.timer.once(3e3, this, () => {
                    this.visible = !1, W.Instance.showGameFinishExport(() => {
                        U.UI.openScene(o.Settlement, !1);
                    });
                })
                // , U.Platform.hideGameGridAd();
            }
        }
        showTips() {
            this.imgTips.visible = !0, U.Tween.toScale(this.imgTips, 1, 1.1, 500, !1, !0), U.Game.isPlay = !1,
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onCloseTips);
        }
        onCloseTips() {
            U.Tween.clear(this.imgTips), this.imgTips.visible = !1, U.Game.isPlay = !0, Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onCloseTips),
                U.Level.cameraComp.fx.play();
        }
    }
    class $ extends Laya.Script {
        constructor() {
            super(...arguments), this.currentId = 0, this.totalId = 2, this.loopTime = 3e3,
                this.iconSize = 150, this.isShowName = !0, this.fontSize = 20, this.fontPosYFactor = 0,
                this.fontColor = "#ffffff", this.isTween = !0, this.isTweenByParent = !1, this.tweenMode = "scale",
                this.callbackScene = "RecommendUI";
        }
        onAwake() {
            if (this.initUI(), R.instance.navDataArr && R.instance.navDataArr.length > 0) {
                this.totalLength = R.instance.navDataArr.length, this.currentIndex = 0;
                for (var e = Math.floor(this.totalLength / this.totalId), t = [], a = 0; a < e; a++) {
                    var i = a * this.totalId + this.currentId;
                    t.push(i);
                }
                this.loopNums = t, Laya.timer.once(10, this, () => {
                    this.initData(), Laya.timer.loop(this.loopTime, this, this.initData);
                });
            } else this.imgIcon.visible = !1;
        }
        initUI() {
            if (this.imgIcon = this.owner, this.lbName = this.owner.getChildAt(0), this.imgIcon.width = this.iconSize,
                this.imgIcon.height = this.iconSize, this.isShowName ? (this.lbName.fontSize = this.fontSize,
                    this.lbName.y = this.imgIcon.height + this.fontPosYFactor, this.lbName.color = this.fontColor) : this.lbName.visible = !1,
                this.isTween) {
                var e = null;
                e = this.isTweenByParent ? this.owner.parent : this.imgIcon, "scale" == this.tweenMode ? U.Tween.toScale(e, 1, 1.1, 500, !0, !0) : U.Tween.toRotaion(e, 20, 500, !0);
            }
        }
        initData() {
            this.loopNums[this.currentIndex] > R.instance.navDataArr.length - 1 && (this.currentIndex = 0);
            var e = R.instance.navDataArr[this.loopNums[this.currentIndex]];
            this.imgIcon.skin = e.icon, this.lbName.text = e.title, this.imgIcon.off(Laya.Event.CLICK, this, this.navCB),
                this.imgIcon.on(Laya.Event.CLICK, this, this.navCB, [this.loopNums[this.currentIndex]]),
                this.currentIndex++, this.currentIndex > Math.floor(this.totalLength / this.totalId) - 1 && (this.currentIndex = 0);
        }
        navCB(e) {
            console.log("click id:", e), R.instance.NavigateApp(e, () => {
                if ("RecommendUI" == this.callbackScene) R.instance.openScene(d.SCENE_RECOMMENDUI); else {
                    var e = U.UI.getTopScene;
                    e.url != o.Settlement && e.url != o.Reborn && R.instance.openScene(d.SCENE_FULLGAMEUI, !1, {
                        continueCallbackFun: () => {
                            U.Game.isPlay = !0;
                        }
                    });
                }
            }
            // , () => {
            //     "RecommendUI" == this.callbackScene ? U.Platform.aldSendEvent("首页导出位-总成功数") : (U.Game.isPlay = !1,
            //         U.Platform.aldSendEvent("游戏内导出位-总成功数"));
            // }), "RecommendUI" == this.callbackScene ? U.Platform.aldSendEvent("首页导出位-总点击数") : (U.Game.isPlay = !1,
            //     U.Platform.aldSendEvent("游戏内导出位-总点击数")
            );
        }
        onDestroy() {
            if (this.isTween) {
                var e = null;
                e = this.isTweenByParent ? this.owner.parent : this.imgIcon, U.Tween.clear(e);
            }
            this.imgIcon.off(Laya.Event.CLICK, this, this.navCB), Laya.timer.clear(this, this.initData);
        }
    }
    var checkClick = true;
    class ee extends K {
        initUI() {
            this.btnMore.visible = W.Instance.isShowExportMoreBtn,
                this.btmBox.visible = !0,
                U.Tween.toScale(this.btnMore, 1, 1.1, 1e3, !1, !0),
                this.initList();
            platform.getInstance().initList(this.ADList);
            this.refreshSoundUI();
        }
        initEvent() {
            U.Utils.addClickEvent(this.btnSkin, this, this.onbtnSkinClick),
                U.Utils.addClickEvent(this.btnStart, this, this.onPlayGameClick),
                // U.Utils.addClickEvent(this.btnMore, this, this.onBtnMoreClick),
                U.Utils.addClickEvent(this.btnSound, this, this.onBtnSoundClick);
        }
        onbtnSkinClick() {
            console.log("before scene skin");
            if (checkClick) {
                checkClick = false;
                U.UI.openScene(o.Skin, !1, null, null, () => {
                    console.log("load scene skin");
                    checkClick = true;
                });
            } else {
                checkClick = true;
                return;
            }
            console.log("onbtnSkinClick " + checkClick)
        }
        onBtnMoreClick() {
            // U.Platform.aldSendEvent("点我有惊喜按钮点击"), W.Instance.showFullGameUI();
        }
        onBtnSoundClick() {
            console.log("音乐按钮被点击");
            // window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Sushi-Roll-3D-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Sushi-Roll-3D-musicState")) : false;
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            window.WebAudioEngine.pause ? Laya.LocalStorage.setItem("Sushi-Roll-3D-musicState", 0) : Laya.LocalStorage.setItem("Sushi-Roll-3D-musicState", 1)
            // console.log("音乐按钮被点击 + "+ Laya.LocalStorage.getItem("Sushi-Roll-3D-musicState"));
            this.refreshSoundUI();
        }
        refreshSoundUI() {
            console.log("更新音乐按钮显示");
            if (Laya.LocalStorage.getItem("Sushi-Roll-3D-musicState")) {
                Laya.LocalStorage.getItem("Sushi-Roll-3D-musicState") == 0 ? (this.SoundOn.visible = false, this.SoundOff.visible = true, window.WebAudioEngine.pause = true) : (this.SoundOn.visible = true, this.SoundOff.visible = false, window.WebAudioEngine.pause = false)
            } else {
                Laya.LocalStorage.setItem("Sushi-Roll-3D-musicState", 1)
                this.SoundOn.visible = true, this.SoundOff.visible = false;
            }
        }
        onOpened(e) {
            super.onOpened(e), W.Instance.showInterAd(), W.Instance.showDuilianIcon(this, 420);
        }
        onClosed() {
            super.onClosed()
            // , U.Platform.hideHomeGridAd();
        }
        onPlayGameClick() {
            W.Instance.clickStartGame(() => {
                U.Event.event(a.GAME_PLAY_EVENT)
                // , U.Platform.showGameGridAd();
            });
        }
        onListRender(e, t) {
            let a = this.skinData[t], i = e.getChildByName("icon"), s = e.getChildByName("imgLock");
            i.skin = a.itemSkin, s.visible = a.isLock, t = a.selectId, e.off(Laya.Event.CLICK, this, this.selectClick, [t]),
                e.on(Laya.Event.CLICK, this, this.selectClick, [t]);
        }
        onGetSkinClick() {
            console.log("ongetSkinClick");
            platform.getInstance().showReward(() => {
                this.isSkinClick = !0, this.RewardClick(() => {
                    this.isSkinClick = !1, this.isKnife ? (U.Storage.getSkin(U.Storage.storageName.skinKnife, this.selectIndex + 1),
                        U.Storage.changeSkin(U.Storage.storageName.knifeIndex, this.selectIndex + 1)) : (U.Storage.getSkin(U.Storage.storageName.skinPlate, this.selectIndex + 1),
                            U.Storage.changeSkin(U.Storage.storageName.plateIndex, this.selectIndex + 1));
                    let e = this.getSkinData();
                    this.skinList.array = e, U.Level.cameraComp.changeSkin(), 9 != U.Storage.storageData.skinKnife.length || 9 != U.Storage.storageData.skinPlate.length || (this.skinBox.visible = !1);
                });
            })

        }
        initCurrentSkin() { }
        selectClick(e) {
            console.log("selectClickselectClickselectClick");
            if (this.selectIndex = e, this.isKnife && -1 == U.Storage.storageData.skinKnife.indexOf(e + 1) || !this.isKnife && -1 == U.Storage.storageData.skinPlate.indexOf(e + 1)) this.onGetSkinClick(); else {
                let e = this.getSkinData();
                this.skinList.array = e;
            }
        }
        getSkinData() {
            let e = [];
            if (9 == U.Storage.storageData.skinKnife.length) {
                var t = U.Storage.storageData.skinPlate;
                this.isKnife = !1;
            } else t = U.Storage.storageData.skinKnife, this.isKnife = !0;
            for (let a = 0; a < 9; a++) {
                let i = {};
                -1 == t.indexOf(a + 1) && (i.isLock = !0, i.selectId = a, i.itemSkin = this.isKnife ? "ui/Knife_0" + (a + 1) + ".png" : "ui/Plate_0" + (a + 1) + ".png",
                    e.push(i));
            }
            return this.skinData = e, e;
        }
        initList() {
            if (9 == U.Storage.storageData.skinKnife.length && 9 == U.Storage.storageData.skinPlate.length) return void (this.skinBox.visible = !1);
            this.skinList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.skinList.hScrollBarSkin = "", this.skinList.elasticEnabled = !0;
            let e = this.getSkinData();
            this.skinList.array = e;
        }
    }
    class te extends K {
        initEvent() {
            U.Utils.addClickEvent(this.btnHome, this, this.backClick);
            U.Utils.addClickEvent(this.btnRewardHome, this, this.backRewardClick);
            platform.getInstance().initList(this.ADList);
        }
        backClick() {
            platform.getInstance().showInterstitial(() => {
                // W.Instance.closeSettlement(() => {
                U.UI.openScene(o.Home, !1, null, null, e => {
                    this.onCloseEvent(),
                        U.Event.event(a.GAME_INIT_EVENT);
                    console.log("在这里调用了8");
                });
                // });
            })
        }
        backRewardClick() {
            console.log("With Reward");
            platform.getInstance().showReward(() => {
                U.Storage.updateCoin(600),
                    this.fcReward.value = "900",
                    // W.Instance.closeSettlement(() => {
                    U.UI.openScene(o.Home, !1, null, null, e => {
                        this.onCloseEvent(), U.Event.event(a.GAME_INIT_EVENT);
                        console.log("在这里调用了9");
                    });
                // });
            })
        }
        onOpened(e) {

            super.onOpened(e);
            //////////结束界面
            if (Laya.LocalStorage.getItem("Sushi-Roll-3D-GameOver-State") == 1) {
                // (U.Storage.storageData.level - 1) % 5 == 0 ? (U.Storage.updateCoin(1e3),this.fcReward.value = "1000") : (
                U.Storage.updateCoin(300),
                    this.fcReward.value = "300",
                    // ),
                    U.CommonData.playCount++,
                    W.Instance.showSettlement(this.btmmBox);
                this.FinText.text = "YOU WIN";
            } else {
                (U.Storage.storageData.level - 1) % 5 == 0 ? (this.fcReward.value = "0") : (
                    this.fcReward.value = "0"),
                    //    U.CommonData.playCount++, 
                    W.Instance.showSettlement(this.btmmBox);
                this.btnRewardHome.visible = false;
                this.FinText.text = "YOU LOSE";
            }

        }
    }
    class ae extends K {
        constructor() {
            super(...arguments), this.tab = 1;
        }
        initUI() {
            this.skinList.vScrollBarSkin = "",
                this.skinList.selectEnable = !0,
                this.skinList.selectHandler = new Laya.Handler(this, this.onSelectItem),
                this.skinList.renderHandler = new Laya.Handler(this, this.updateItem), this.selectIndex = U.Storage.storageData.plateIndex,
                this.updateData()
            // U.Platform.hideHomeGridAd();

            // if(this._viewCreated){
            // this.updateData();
            // }else{
            //     this.once("onViewCreated",this,this.updateData);
            // }
        }



        getSkin(e) {
            1 == this.tab ? U.Storage.getSkin(U.Storage.storageName.skinPlate, e + 1) : U.Storage.getSkin(U.Storage.storageName.skinKnife, e + 1),
                this.selectIndex = e + 1,
                this.updateData();
        }
        onSelectItem(e) {
            if (-1 != e && this._viewCreated) {
                console.log("_viewCreated _viewCreated _viewCreated");
                var t = this.skinData[e];
                console.log("t.isLock " + t.isLock + "  t.isVideo+:" + t.isVideo)
                t.isLock ? t.isVideo ? this.RewardClick(() => {

                    platform.getInstance().showReward(() => {
                        this.getSkin(e);
                    })
                    this.skinList.selectedIndex = -1;
                }, !0) : U.Storage.storageData.coin >= t.cost ? (U.Storage.updateCoin(-t.cost),
                    this.getSkin(e)) : (
                    platform.getInstance().prompt("No Enough Money"),
                    console.log("金币不足")
                    //  U.Platform.showToast("金币不足", 2e3)
                ) : (
                    this.selectIndex = e + 1,
                    this.updateData());
            }


        }
        updateItem(e, t) {
            var a = e.getChildAt(0), i = e.getChildAt(1), s = e.getChildAt(2), n = s.getChildAt(0);
            let o = this.skinData[t];
            a.skin = o.imgSkin, o.isLock ? (i.visible = !1, s.visible = !0, o.isVideo ? (n.visible = !1,
                s.skin = "ui/sd_btn_mf.png") : (n.visible = !0, n.value = o.cost, s.skin = "ui/sd_btn_jb.png")) : o.isSelected ? (i.visible = !0,
                    s.visible = !1) : (i.visible = !1, s.visible = !1);
        }
        initEvent() {
            U.Utils.addClickEvent(this.btnPlate, this, () => {
                this.tab = 1,
                    this.skinList.selectedIndex = -1,
                    this.selectIndex = U.Storage.storageData.plateIndex,
                    this.updateData();
            }), U.Utils.addClickEvent(this.btnKnife, this, () => {
                this.tab = 2,
                    this.skinList.selectedIndex = -1,
                    this.selectIndex = U.Storage.storageData.knifeIndex,
                    this.updateData();
            });
        }
        updateData() {
            if (this.skinData = [], 1 == this.tab) {
                this.btnPlate.skin = "ui/sd_btn_pz2.png", this.btnKnife.skin = "ui/sd_btn_xd1.png";
                for (var e = 1; e < 10; e++) {
                    let t = {
                        imgSkin: "ui/Plate_0" + e + ".png",
                        isLock: -1 == U.Storage.storageData.skinPlate.indexOf(e),
                        isSelected: this.selectIndex == e,
                        isVideo: e > 6,
                        cost: 500 * (e + 1)
                    };
                    this.skinData.push(t);
                }
                this.skinData[this.selectIndex - 1].isLock || U.Storage.changeSkin(U.Storage.storageName.plateIndex, this.selectIndex);
            } else {
                this.btnPlate.skin = "ui/sd_btn_pz1.png", this.btnKnife.skin = "ui/sd_btn_xd2.png";
                for (e = 1; e < 10; e++) {
                    let t = {
                        imgSkin: "ui/Knife_0" + e + ".png",
                        isLock: -1 == U.Storage.storageData.skinKnife.indexOf(e),
                        isSelected: this.selectIndex == e,
                        isVideo: e > 6,
                        cost: 500 * (e + 1)
                    };
                    this.skinData.push(t);
                }
                this.skinData[this.selectIndex - 1].isLock || U.Storage.changeSkin(U.Storage.storageName.knifeIndex, this.selectIndex);
            }
            this.skinList.array = this.skinData;
        }
        onClosed() {
            // super.onClosed(),
            U.Level.cameraComp.changeSkin(),
                console.log("onClosed");
            //  , 
            //  U.Platform.showHomeGridAd();
        }
    }
    class ie extends Laya.Scene {
        onAwake() {
            this.height = Laya.stage.height, this.initUI();
        }
        initUI() {
            R.instance.dataConfig.front_time_tag_switch ? (this.updateTime(), Laya.timer.loop(6e4, this, this.updateTime),
                U.Event.on(a.GAME_OVER_EVENT, this, e => {
                    Laya.timer.once(100, this, this.updateTime);
                })) : this.fcTime.visible = !1;
        }
        updateTime() {
            let e = new Date(), t = e.getMonth() + 1, a = e.getDate(), i = e.getHours(), s = e.getMinutes(), n = t < 10 ? "0" + t : t.toString(), o = a < 10 ? "0" + a : a.toString(), r = i < 10 ? "0" + i : i.toString(), h = s < 10 ? "0" + s : s.toString();
            this.fcTime.text = "V" + this.switch(h) + this.switch(r) + this.switch(o) + this.switch(n) + "-" + U.Storage.storageData.level;
        }
        switch(e) {
            let t = "";
            for (let a = e.length - 1; a >= 0; a--) t += e[a];
            return t;
        }
    }
    class se {
        constructor() { }
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("JJExport/View/DrawUI.ts", e), t("JJExport/Libs/AutoFixPosY.ts", H), t("JJExport/View/FinishGameUI.ts", G),
                t("JJExport/View/FriendGameUI.ts", z), t("JJExport/View/FullGameUI.ts", J), t("JJExport/View/RecommendUI.ts", Y),
                t("JJExport/View/ScrollUI.ts", B), t("scripts/uiScenes/Box2.ts", j), t("scripts/uiScenes/BusyLoading.ts", Z),
                t("scripts/uiScenes/Clean.ts", q), t("scripts/uiScenes/Game3D.ts", Q), t("JJExport/Component/SingleIcon.ts", $),
                t("scripts/uiScenes/Home.ts", ee), t("scripts/uiScenes/Settlement.ts", te), t("scripts/uiScenes/Skin.ts", ae),
                t("scripts/uiScenes/TimeScene.ts", ie);
        }
    }
    se.width = 750, se.height = 1334, se.scaleMode = "showall", se.screenMode = "none",
        se.alignV = "middle", se.alignH = "center", se.startScene = "JJExport/DrawUI.scene",
        se.sceneRoot = "", se.debug = !1, se.stat = !1, se.physicsDebug = !1, se.exportSceneToJson = !0,
        se.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(se.width, se.height) : Laya.init(se.width, se.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = se.scaleMode,

                platform.getInstance().createLogo(),
                window.yad.left = 0,
                window.yad.bottom = 0,

                Laya.stage.screenMode = se.screenMode, Laya.stage.alignV = se.alignV,
                Laya.stage.alignH = se.alignH, Laya.URL.exportSceneToJson = se.exportSceneToJson,
                // Laya.stage.useRetinalCanvas = !0,
                (se.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                se.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), se.stat && Laya.Stat.show(),
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            if (U.init(), Laya.Browser.onWeiXin) {
                let e = ["scene"];
                U.Utils.loadSubpackagesSync(e, this, (e, t) => {
                    t && (e.load3DRes(), U.CommonData.laodSubpackageFinish = !0);
                });
            } else this.load3DRes();
            // U.Platform.aldSendEvent("进入游戏"),
            //  Laya.Browser.window.JJGetGameConfigAdShare().then(e => {
            //     // console.log("获取游戏配置：", e.data.config),
            //     R.instance.updateDataConfig(e.data.config), 
            //     U.Platform.bannerCount = R.instance.showBannerCount,
            //     // console.log("获取导出配置：", e.data.ad), 
            //     R.instance.updateNavData(e.data.ad);
            //     // console.log("获取分享配置：", e.data.share);
            //     var t = e.data.share[0];
            //     t && (R.instance.shareContext = {
            //         title: t.share_content,
            //         imageUrl: t.share_img,
            //         id: t.id
            //     }), 

            Laya.timer.once(50, this, this.checkLoad);
            // let a = R.instance.dataConfig.is_allow_area, i = O.allowScene(), 
            // s = R.instance.dataConfig.front_banner_number,
            //  n = R.instance.dataConfig.front_banner_change_time,
            //   o = R.instance.dataConfig.front_banner_refresh_num,
            //    r = R.instance.dataConfig.front_create_banner_num, 
            //    h = R.instance.dataConfig.front_banner_ids;
            // D.Instance.initAd(a, i, s, n, o, r, h), 
            Laya.Scene.open("UIScene/TimeScene.scene", !1, null, Laya.Handler.create(this, e => {
                Laya.stage.addChild(e), e.zOrder = 100;
            }));
            //  Laya.Browser.onWeiXin && (U.Platform.regisiterWxCallback(),
            //  U.Platform.showShareMenuWithTicket(!0), 
            // U.Platform.JJOnShareAppMessage(R.instance.shareContext));
            // }, () => {
            //     let e = R.instance.dataConfig.front_banner_number,
            //      t = R.instance.dataConfig.front_banner_change_time,
            //       a = R.instance.dataConfig.front_banner_refresh_num,
            //        i = R.instance.dataConfig.front_create_banner_num,
            //         s = R.instance.dataConfig.front_banner_ids;
            //     D.Instance.initAd(!1, !1, e, t, a, i, s),
            //      Laya.Browser.onWeiXin && (U.Platform.regisiterWxCallback(), 
            //     U.Platform.showShareMenuWithTicket(!0));
            // });
        }
        loadAtlas() {
            var e = [{
                url: "res/atlas/ui.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/ui.png",
                type: Laya.Loader.IMAGE
            }, {
                url: "res/atlas/loading.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/loading.png",
                type: Laya.Loader.IMAGE
            }];
            Laya.loader.load(e, Laya.Handler.create(this, function () {
                U.init(), se.startScene && Laya.Scene.open(se.startScene);
            }));
        }
        load3DRes() {
            var e = [{
                url: U.CommonData.sceneResUrl,
                clas: Laya.Scene3D,
                priority: 1
            }];
            Laya.loader.create(e, Laya.Handler.create(this, this.onLoadFinished, [{
                target: "3dRes"
            }], !1), null), Laya.loader.on(Laya.Event.ERROR, this, e => {
                console.error("资源加载失败", e);
            });
        }
        onLoadFinished(e) {
            console.log("资源加载完成", e), U.CommonData.loadFinished = !0, U.Level.init();
        }
        checkLoad() {
            W.Instance.loadHomePage(() => {
                U.CommonData.loadFinished ? U.UI.openScene(o.Game3D, !1, null, null, () => {
                    U.Sound.playMusic(h.BGM), U.UI.openScene(o.Home), R.instance.closeScene(d.SCENE_FULLGAMEUI),
                        R.instance.closeScene(d.SCENE_RECOMMENDUI);
                }) : U.UI.openScene(o.BusyLoading, !1, null, null, e => {
                    R.instance.closeScene(d.SCENE_FULLGAMEUI), R.instance.closeScene(d.SCENE_RECOMMENDUI);
                });
            });
        }
    }();
}();