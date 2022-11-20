!function () {
    "use strict";
    let load3end = false;
    let loadProRes = false;
    function _get(e, t, i) {
        return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, i) {
            var a = _superPropBase(e, t);
            if (a) {
                var n = Object.getOwnPropertyDescriptor(a, t);
                return n.get ? n.get.call(i) : n.value;
            }
        })(e, t, i || e);
    }

    function _superPropBase(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)););
        return e;
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && _setPrototypeOf(e, t);
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function _defineProperties(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
        }
    }

    function _createClass(e, t, i) {
        return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
    }

    !function () {
        var e = function () {
            function ErrorUtils() {
                _classCallCheck(this, ErrorUtils);
            }
            return _createClass(ErrorUtils, null, [{
                key: "throwNormalError",
                value: function (e) {
                    throw new Error(e);
                }
            }, {
                key: "throwNot2BeNull",
                value: function (e, t) {
                    null == e && this.throwNormalError("".concat(t, " is supposed to be valid!!!"));
                }
            }]), ErrorUtils;
        }();
        function __awaiter(e, t, i, a) {
            return new (i || (i = Promise))(function (n, o) {
                function fulfilled(e) {
                    try {
                        step(a.next(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function rejected(e) {
                    try {
                        step(a.throw(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function step(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                        e(t);
                    })).then(fulfilled, rejected);
                }
                step((a = a.apply(e, t || [])).next());
            });
        }
        Object.create;
        Object.create;
        var t, i = function () {
            function AbstractBean(e) {
                _classCallCheck(this, AbstractBean), this._name = e, this._dispatcher = new Laya.EventDispatcher();
            }
            return _createClass(AbstractBean, [{
                key: "finish",
                value: function () {
                    this._dispatcher && this._dispatcher.event(Laya.Event.COMPLETE);
                }
            }, {
                key: "destroy",
                value: function () {
                    this._dispatcher && (this._dispatcher.offAll(), this._dispatcher = void 0);
                }
            }, {
                key: "name",
                get: function () {
                    return this._name;
                }
            }, {
                key: "dispatcher",
                get: function () {
                    return this._dispatcher;
                }
            }]), AbstractBean;
        }(), a = function () {
            function MathUtils() {
                _classCallCheck(this, MathUtils);
            }
            return _createClass(MathUtils, null, [{
                key: "isBetween",
                value: function (e, t, i) {
                    return arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? e >= Math.min(t, i) && e <= Math.max(t, i) : e > Math.min(t, i) && e < Math.max(t, i);
                }
            }, {
                key: "minMax",
                value: function (e, t) {
                    return {
                        min: Math.min(e, t),
                        max: Math.max(e, t)
                    };
                }
            }, {
                key: "calValueBetween",
                value: function (e, t, i) {
                    var a = this.minMax(t, i), n = a.min, o = a.max;
                    return Math.max(Math.min(o, e), n);
                }
            }, {
                key: "randomBetween",
                value: function (e, t) {
                    var i = this.minMax(e, t), a = i.min, n = i.max;
                    return a + Math.random() * (n - a);
                }
            }, {
                key: "calLen",
                value: function (e, t) {
                    return Math.sqrt(e * e + t * t);
                }
            }, {
                key: "isEqual",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-9;
                    return Math.abs(e - t) < i;
                }
            }]), MathUtils;
        }(), n = function () {
            function LayaUtils() {
                _classCallCheck(this, LayaUtils);
            }
            return _createClass(LayaUtils, null, [{
                key: "fixWxOpenDataViewer",
                value: function (e) {
                    var t = window.sharedCanvas;
                    t && e.on(Laya.Event.DISPLAY, void 0, function () {
                        t.width = e.width, t.height = e.height;
                    });
                }
            }, {
                key: "addClickListener",
                value: function (e, t, i) {
                    e.on(Laya.Event.CLICK, i, t);
                }
            }, {
                key: "addBtnsClickHandler",
                value: function (e, t, i) {
                    e.forEach(function (e) {
                        e && e.on(Laya.Event.CLICK, i, t);
                    });
                }
            }, {
                key: "removeBtnsClickHandler",
                value: function (e, t, i) {
                    e.forEach(function (e) {
                        e && e.off(Laya.Event.CLICK, i, t);
                    });
                }
            }, {
                key: "asyncLoadTexture2D",
                value: function (e) {
                    var t = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new Promise(function (a, n) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var t;
                            return regeneratorRuntime.wrap(function (o) {
                                for (; ;) switch (o.prev = o.next) {
                                    case 0:
                                        i ? (t = function onError() {
                                            console.log("加载失败", e), Laya.loader.off(Laya.Event.ERROR, void 0, onError), n();
                                        }, Laya.loader.on(Laya.Event.ERROR, void 0, t), Laya.loader.load(e, Laya.Handler.create(void 0, function (e) {
                                            Laya.loader.off(Laya.Event.ERROR, void 0, t), a(e);
                                        }), void 0, Laya.Loader.TEXTURE2D)) : Laya.Texture2D.load(e, Laya.Handler.create(void 0, a));

                                    case 1:
                                    case "end":
                                        return o.stop();
                                }
                            }, _callee, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadMaterial",
                value: function (e) {
                    return new Promise(function (t) {
                        Laya.BaseMaterial.load(e, Laya.Handler.create(void 0, t));
                    });
                }
            }, {
                key: "asyncCreateRes",
                value: function (e, t) {
                    return new Promise(function (i) {
                        Laya.loader.create(e, Laya.Handler.create(void 0, i), t ? Laya.Handler.create(void 0, t, void 0, !0) : void 0);
                    });
                }
            }, {
                key: "asyncLoadScene3D",
                value: function (e) {
                    var t = this;
                    return new Promise(function (i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        i(Laya.Loader.getRes(e));

                                    case 3:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee2, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadSprite3D",
                value: function (e) {
                    var t = this;
                    return new Promise(function (i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                            var t;
                            return regeneratorRuntime.wrap(function (a) {
                                for (; ;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        (t = Laya.Sprite3D.instantiate(Laya.Loader.getRes(e))).transform.localPosition = new Laya.Vector3(0, 0, 0),
                                            i(t);

                                    case 5:
                                    case "end":
                                        return a.stop();
                                }
                            }, _callee3, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadParticle",
                value: function (e) {
                    var t = this;
                    return new Promise(function (i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                            var t;
                            return regeneratorRuntime.wrap(function (a) {
                                for (; ;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        (t = Laya.ShuriKenParticle3D.instantiate(Laya.Loader.getRes(e))).transform.localPosition = new Laya.Vector3(0, 0, 0),
                                            i(t);

                                    case 5:
                                    case "end":
                                        return a.stop();
                                }
                            }, _callee4, this);
                        }));
                    });
                }
            }, {
                key: "asyncOpenScene",
                value: function (e) {
                    var t = this, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return new Promise(function (a) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
                            return regeneratorRuntime.wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        Laya.Scene.open(e, i, void 0, Laya.Handler.create(void 0, a));

                                    case 3:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee5, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadScene",
                value: function (e, t, i) {
                    return new Promise(function (a) {
                        Laya.Scene.load(e, Laya.Handler.create(null, function (e) {
                            t && t.call(i, 1), a(e);
                        }), t ? Laya.Handler.create(i, t, void 0, !1) : void 0);
                    });
                }
            }, {
                key: "asyncLoadJson",
                value: function (e) {
                    var t = this;
                    return new Promise(function (i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee6() {
                            var t;
                            return regeneratorRuntime.wrap(function (a) {
                                for (; ;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        t = Laya.Loader.getRes(e), Array.isArray(t) || (t = t ? [t] : []), i(t);

                                    case 5:
                                    case "end":
                                        return a.stop();
                                }
                            }, _callee6, this);
                        }));
                    });
                }
            }, {
                key: "getUrlParamsObj",
                value: function () {
                    var e, t = {};
                    Laya.Browser.window.conch || (((null === (e = Laya.Browser.window.location) || void 0 === e ? void 0 : e.href) || "").split("?")[1] || "").split("&").forEach(function (e) {
                        if (e && -1 !== e.indexOf("=")) {
                            var i = e.split("=");
                            t[i[0]] = i[1];
                        }
                    });
                    return t;
                }
            }, {
                key: "asyncLoadRes",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee8() {
                        var t = this;
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", new Promise(function (i) {
                                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee7() {
                                            return regeneratorRuntime.wrap(function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, this.asyncCreateRes(e);

                                                    case 2:
                                                        i(Laya.loader.getRes(e));

                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, _callee7, this);
                                        }));
                                    }));

                                case 1:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee8, this);
                    }));
                }
            }, {
                key: "browerAlert",
                value: function (e) {
                    Laya.Browser.window.conch || Laya.Browser.window.alert(e);
                }
            }, {
                key: "rgb2V3",
                value: function (e) {
                    e = e.replace(/^#/, "");
                    var t = new Laya.Vector3();
                    return 6 === e.length && (t.x = parseInt(e.substr(0, 2), 16) / 256, t.y = parseInt(e.substr(0, 2), 16) / 256,
                        t.z = parseInt(e.substr(0, 2), 16) / 256), t;
                }
            }, {
                key: "try2SetTexture",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none", a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee9() {
                        var n, o;
                        return regeneratorRuntime.wrap(function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    if (e instanceof Laya.MeshSprite3D ? o = e.meshRenderer.material : e instanceof Laya.SkinnedMeshSprite3D && (o = e.skinnedMeshRenderer.material),
                                        !(o instanceof Laya.UnlitMaterial)) {
                                        r.next = 6;
                                        break;
                                    }
                                    return r.next = 4, this.asyncLoadTexture2D(t, a);

                                case 4:
                                    n = r.sent, o.albedoTexture = n;

                                case 6:
                                    return "x" === i ? e.transform.localScaleZ = e.transform.localScaleX * n.height / n.width : "z" === i && (e.transform.localScaleX = e.transform.localScaleZ * n.width / n.height),
                                        r.abrupt("return", n);

                                case 8:
                                case "end":
                                    return r.stop();
                            }
                        }, _callee9, this);
                    }));
                }
            }, {
                key: "getMeshSprite3DChildDeep",
                value: function (e) {
                    for (var t = e.numChildren, i = 0; i < t; i++) {
                        var a = e.getChildAt(i);
                        if (a instanceof Laya.MeshSprite3D || a instanceof Laya.SkinnedMeshSprite3D) return a;
                        var n = this.getMeshSprite3DChildDeep(a);
                        if (n) return n;
                    }
                }
            }, {
                key: "getChildByNameDeep",
                value: function (e, t) {
                    var i = e.getChildByName(t);
                    if (i) return i;
                    for (var a = e.numChildren, n = 0; n < a; n++) {
                        i = e.getChildAt(n);
                        var o = this.getChildByNameDeep(i, t);
                        if (o) return o;
                    }
                }
            }, {
                key: "playOrStopParticle",
                value: function (e, t) {
                    if (e instanceof Laya.ShuriKenParticle3D) {
                        e.active || (console.log("粒子没有active？"), e.active = !0);
                        var i = e.particleSystem;
                        if (i.isEmitting === t) return;
                        t ? i.play() : i.stop();
                    }
                }
            }, {
                key: "getFrameDelta",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return Math.min(36, 1e3 / e);
                }
            }, {
                key: "calFrameValue",
                value: function (e) {
                    return e * this.getFrameDelta() / 1e3;
                }
            }, {
                key: "updateSelfProps",
                value: function (e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = Array.isArray(t) ? t : [t], n = function () {
                        return a.forEach(function (t) {
                            return e[t] = e[t];
                        });
                    };
                    if (i) return Laya.Handler.create(void 0, n, void 0, !1);
                    n();
                }
            }, {
                key: "createUlitPlane",
                value: function (e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee10() {
                        var r, s;
                        return regeneratorRuntime.wrap(function (l) {
                            for (; ;) switch (l.prev = l.next) {
                                case 0:
                                    return r = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(e, t)), (s = new Laya.UnlitMaterial()).renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
                                        s.cull = Laya.RenderState.CULL_NONE, r.meshRenderer.sharedMaterial = s, a.isEqual(n, 1) || (s.albedoColor = new Laya.Vector4(1, 1, 1, n)),
                                        l.next = 8, this.try2SetTexture(r, i, "z", o);

                                case 8:
                                    return s.albedoTexture = l.sent, l.abrupt("return", r);

                                case 10:
                                case "end":
                                    return l.stop();
                            }
                        }, _callee10, this);
                    }));
                }
            }, {
                key: "asyncRequest",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "post";
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    return a.abrupt("return", new Promise(function (a, n) {
                                        var o = new Laya.HttpRequest();
                                        o.once(Laya.Event.COMPLETE, void 0, a), o.once(Laya.Event.ERROR, void 0, n);
                                        if (e.indexOf("null") > -1) {
                                            return n();
                                        }
                                        // o.send(e, t, i, "json", ["Content-Type", "application/json;charset=UTF-8"]);
                                    }));

                                case 1:
                                case "end":
                                    return a.stop();
                            }
                        }, _callee11, this);
                    }));
                }
            }, {
                key: "setVisibleAndAlpha",
                value: function (e, t) {
                    e.visible = t, e.alpha = t ? 1 : 0;
                }
            }, {
                key: "prewarmParticle",
                value: function (e) { }
            }]), LayaUtils;
        }(), o = new (function () {
            function YLUIManager() {
                _classCallCheck(this, YLUIManager), this._worldClickBlockCount = 0;
            }
            return _createClass(YLUIManager, [{
                key: "setForceWorldCanClick",
                value: function () {
                    this._worldClickBlockCount = 0, this._boxModal.visible = !1;
                }
            }, {
                key: "deploy",
                value: function () {
                    this._layerRoot || (this._layerRoot = new Laya.Sprite(), Laya.stage.addChild(this._layerRoot),
                        this._layerScene = this._layerRoot.addChild(new Laya.Sprite()), this.initWhiteMask(),
                        this._layerPopup = this._layerRoot.addChild(new Laya.Sprite()), this._layerSplash = this._layerRoot.addChild(new Laya.Sprite()),
                        this.initBoxModal(),
                        Ue.data.once("hasGameInit", this.onGameInit, this));
                }
            }, {
                key: "onGameInit",
                value: function () {
                    var e = this;
                    Ue.data.hasGameInit && this._boxWhiteMask && Laya.Tween.to(this._boxWhiteMask, {
                        alpha: 0
                    }, 500, void 0, Laya.Handler.create(void 0, function () {
                        e._boxWhiteMask.destroy(), e._boxWhiteMask = void 0;
                    }));
                }
            }, {
                key: "initBoxModal",
                value: function () {
                    var e = this, t = new Laya.Box();
                    t.mouseEnabled = !0, t.mouseThrough = !1, t.zOrder = 9999, t.pos(-10, -10, !0),
                        t.size(1e4, 1e4), t.visible = !1, t.on(Laya.Event.CLICK, void 0, function () {
                            return console.log("世界点击已被禁止，但是锁定次数：".concat(e._worldClickBlockCount));
                        }),
                        this._boxModal = t// Laya.stage.addChild(t);
                }
            }, {
                key: "initWhiteMask",
                value: function () {
                    var e = new Laya.Box();
                    e.mouseEnabled = !0, e.mouseThrough = !1, e.pos(-10, -10, !0), e.size(1e4, 1e4),
                        e.bgColor = "#ffffff", this._boxWhiteMask = this.layerRoot.addChild(e);
                }
            }, {
                key: "showCustomView",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee12() {
                        var t;
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, n.asyncLoadScene(e);

                                case 2:
                                    return t = i.sent, this._layerPopup.addChild(t), i.abrupt("return", t);

                                case 5:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee12, this);
                    }));
                }
            }, {
                key: "isWorldCanClick",
                set: function (e) {
                    var t = Math.max(0, this._worldClickBlockCount + (e ? -1 : 1));
                    this._worldClickBlockCount = t//, this._boxModal.visible = t > 0;
                },
                get: function () {
                    return this._worldClickBlockCount <= 0;
                }
            }, {
                key: "layerScene",
                get: function () {
                    return this._layerScene;
                }
            }, {
                key: "layerRoot",
                get: function () {
                    return this._layerRoot;
                }
            }, {
                key: "layerPopup",
                get: function () {
                    return this._layerPopup;
                }
            }, {
                key: "layerSplash",
                get: function () {
                    return this._layerSplash;
                }
            }]), YLUIManager;
        }())(), r = function () {
            function AbstractPlatform() {
                _classCallCheck(this, AbstractPlatform);
            }
            return _createClass(AbstractPlatform, [{
                key: "playMusic",
                value: function (e) {
                    Laya.SoundManager.playMusic(e);
                }
            }, {
                key: "cookServerRsp",
                value: function (e, t) {
                    return t;
                }
            }, {
                key: "playSoundEffect",
                value: function (e, t) {
                    Laya.SoundManager.playSound(e, t);
                }
            }, {
                key: "stopSound",
                value: function (e) {
                    Laya.SoundManager.stopSound(e);
                }
            }, {
                key: "stopAllSound",
                value: function () {
                    Laya.SoundManager.stopAll();
                }
            }]), AbstractPlatform;
        }(), s = function () {
            function StringUtils() {
                _classCallCheck(this, StringUtils);
            }
            return _createClass(StringUtils, null, [{
                key: "compareVersion",
                value: function (e, t) {
                    for (var i = e.split("."), a = t.split("."), n = Math.max(i.length, a.length), o = 0; o < n; o++) {
                        var r = parseInt(i[o]) || 0, s = parseInt(a[o]) || 0;
                        if (r > s) return 1;
                        if (r < s) return -1;
                    }
                    return 0;
                }
            }, {
                key: "truncate",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...", n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = e.length;
                    if (o < t) return e;
                    var r = t - i.length;
                    if (0 === r) return i;
                    r < 0 && (i = ""), n = a.calValueBetween(n, 0, 1);
                    var s = [], l = Math.round(t * n);
                    return s.push(e.substr(0, l)), l = o - (t - l), s.push(e.substr(l)), s.join(i);
                }
            }]), StringUtils;
        }();
        !function (e) {
            e.LoadRes = "LoadRes", e.Rank = "Rank", e.ReqMyInfo = "ReqMyInfo", e.WorldRankData = "WorldRankData",
                e.ShowFirstFriendPlayerHead = "ShowFirstFriendPlayerHead", e.SubmitScore = "SubmitScore",
                e.CheckOverPlayer = "CheckOverPlayer", e.Reset = "Reset";
        }(t || (t = {}));
        var l, h = function () {
            function BaseEventDispatcher() {
                _classCallCheck(this, BaseEventDispatcher), this._dispatcher = new Laya.EventDispatcher();
            }
            return _createClass(BaseEventDispatcher, [{
                key: "once",
                value: function (e, t, i) {
                    this._dispatcher && this._dispatcher.once(e.toString(), i, t);
                }
            }, {
                key: "on",
                value: function (e, t, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (this._dispatcher && (this._dispatcher.on(e.toString(), i, t), a)) {
                        t.call(i, {
                            event: e.toString(),
                            value: this[e]
                        });
                    }
                }
            }, {
                key: "off",
                value: function (e, t, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "all";
                    this._dispatcher && this._dispatcher.off(e.toString(), i, t, "once" === a);
                }
            }, {
                key: "offAllCaller",
                value: function (e) {
                    this._dispatcher && this._dispatcher.offAllCaller(e);
                }
            }, {
                key: "emit",
                value: function (e, t) {
                    if (this.isValid) {
                        var i = e.toString();
                        if (this._dispatcher.hasListener(i)) {
                            var a = {
                                event: i,
                                value: t
                            };
                            this._dispatcher.event(a.event, a);
                        }
                    }
                }
            }, {
                key: "hasListener",
                value: function (e) {
                    var t;
                    return (null === (t = this._dispatcher) || void 0 === t ? void 0 : t.hasListener(e.toString())) || !1;
                }
            }, {
                key: "destroy",
                value: function () {
                    this._dispatcher && (this._dispatcher.offAll(), this._dispatcher = null);
                }
            }, {
                key: "isValid",
                get: function () {
                    return !!this._dispatcher;
                }
            }]), BaseEventDispatcher;
        }(), c = function () {
            function ArrayUtils() {
                _classCallCheck(this, ArrayUtils);
            }
            return _createClass(ArrayUtils, null, [{
                key: "uniq",
                value: function (e) {
                    for (var t = new Map(), i = e.length, a = 0; a < i; a++) {
                        var n = e[a];
                        t.get(n) ? (e.splice(a, 1), a--, i--) : t.set(n, !0);
                    }
                    return e;
                }
            }, {
                key: "randomOne",
                value: function (e, t) {
                    var i = e.length;
                    if (i && (null == t || !t.length || (i = (e = e.filter(function (e) {
                        return -1 !== t.indexOf(e);
                    })).length))) return e[Math.random() * i >> 0];
                }
            }, {
                key: "disturb",
                value: function (e) {
                    return e.sort(function () {
                        return Math.random() - .5;
                    }), e;
                }
            }, {
                key: "createNumberArrary",
                value: function (e, t) {
                    for (var i = [], a = e; a <= t; a++) i.push(a);
                    return i;
                }
            }, {
                key: "createBezierPoints",
                value: function (e, t) {
                    for (var i = [], a = 0; a < t; a++) i.push(this.multiPointBezier(e, a / t));
                    return i;
                }
            }, {
                key: "multiPointBezier",
                value: function (e, t) {
                    for (var i = e.length, a = 0, n = 0, o = 0; o < i; o++) {
                        var r = e[o];
                        a += r.x * Math.pow(1 - t, i - 1 - o) * Math.pow(t, o) * this.erxiangshi(i - 1, o),
                            n += r.y * Math.pow(1 - t, i - 1 - o) * Math.pow(t, o) * this.erxiangshi(i - 1, o);
                    }
                    return {
                        x: a,
                        y: n
                    };
                }
            }, {
                key: "erxiangshi",
                value: function (e, t) {
                    for (var i = 1, a = 1; t > 0;) i *= e, a *= t, e--, t--;
                    return i / a;
                }
            }, {
                key: "keys",
                value: function (e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t;
                }
            }, {
                key: "values",
                value: function (e) {
                    var t = [];
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.push(e[i]);
                    return t;
                }
            }, {
                key: "remove",
                value: function (e, t) {
                    var i = e.indexOf(t);
                    return -1 !== i && e.splice(i, 1), i;
                }
            }, {
                key: "getChildrenByNameSection",
                value: function (e, t) {
                    for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = []; ;) {
                        var r = t + i, s = n ? e.getChildByName(r) : e[r];
                        if (!s) break;
                        (!a || s instanceof a) && (o.push(s), i++);
                    }
                    return o;
                }
            }]), ArrayUtils;
        }();
        !function (e) {
            e.login = "/common/temporaryLogin", e.getAvatar = "/common/getAvatar", e.authorizeLogin = "/common/authorizedLogin",
                e.recordShare = "/user/recordShare", e.clickWxApp = "/common/clickWxapp", e.viewVideo = "/user/viewVideo",
                e.worldRank = "/user/worldRanking", e.pass = "/user/pass", e.getInitConfig = "";
        }(l || (l = {}));
        var u = function () {
            function MD5() {
                _classCallCheck(this, MD5);
            }
            return _createClass(MD5, null, [{
                key: "hex_md5",
                value: function (e) {
                    return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz));
                }
            }, {
                key: "b64_md5",
                value: function (e) {
                    return this.binl2b64(this.core_md5(this.str2binl(e), e.length * this.chrsz));
                }
            }, {
                key: "str_md5",
                value: function (e) {
                    return this.binl2str(this.core_md5(this.str2binl(e), e.length * this.chrsz));
                }
            }, {
                key: "hex_hmac_md5",
                value: function (e, t) {
                    return this.binl2hex(this.core_hmac_md5(e, t));
                }
            }, {
                key: "b64_hmac_md5",
                value: function (e, t) {
                    return this.binl2b64(this.core_hmac_md5(e, t));
                }
            }, {
                key: "str_hmac_md5",
                value: function (e, t) {
                    return this.binl2str(this.core_hmac_md5(e, t));
                }
            }, {
                key: "md5_vm_test",
                value: function () {
                    return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc");
                }
            }, {
                key: "core_md5",
                value: function (e, t) {
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    for (var i = 1732584193, a = -271733879, n = -1732584194, o = 271733878, r = 0; r < e.length; r += 16) {
                        var s = i, l = a, h = n, c = o;
                        i = this.md5_ff(i, a, n, o, e[r + 0], 7, -680876936), o = this.md5_ff(o, i, a, n, e[r + 1], 12, -389564586),
                            n = this.md5_ff(n, o, i, a, e[r + 2], 17, 606105819), a = this.md5_ff(a, n, o, i, e[r + 3], 22, -1044525330),
                            i = this.md5_ff(i, a, n, o, e[r + 4], 7, -176418897), o = this.md5_ff(o, i, a, n, e[r + 5], 12, 1200080426),
                            n = this.md5_ff(n, o, i, a, e[r + 6], 17, -1473231341), a = this.md5_ff(a, n, o, i, e[r + 7], 22, -45705983),
                            i = this.md5_ff(i, a, n, o, e[r + 8], 7, 1770035416), o = this.md5_ff(o, i, a, n, e[r + 9], 12, -1958414417),
                            n = this.md5_ff(n, o, i, a, e[r + 10], 17, -42063), a = this.md5_ff(a, n, o, i, e[r + 11], 22, -1990404162),
                            i = this.md5_ff(i, a, n, o, e[r + 12], 7, 1804603682), o = this.md5_ff(o, i, a, n, e[r + 13], 12, -40341101),
                            n = this.md5_ff(n, o, i, a, e[r + 14], 17, -1502002290), a = this.md5_ff(a, n, o, i, e[r + 15], 22, 1236535329),
                            i = this.md5_gg(i, a, n, o, e[r + 1], 5, -165796510), o = this.md5_gg(o, i, a, n, e[r + 6], 9, -1069501632),
                            n = this.md5_gg(n, o, i, a, e[r + 11], 14, 643717713), a = this.md5_gg(a, n, o, i, e[r + 0], 20, -373897302),
                            i = this.md5_gg(i, a, n, o, e[r + 5], 5, -701558691), o = this.md5_gg(o, i, a, n, e[r + 10], 9, 38016083),
                            n = this.md5_gg(n, o, i, a, e[r + 15], 14, -660478335), a = this.md5_gg(a, n, o, i, e[r + 4], 20, -405537848),
                            i = this.md5_gg(i, a, n, o, e[r + 9], 5, 568446438), o = this.md5_gg(o, i, a, n, e[r + 14], 9, -1019803690),
                            n = this.md5_gg(n, o, i, a, e[r + 3], 14, -187363961), a = this.md5_gg(a, n, o, i, e[r + 8], 20, 1163531501),
                            i = this.md5_gg(i, a, n, o, e[r + 13], 5, -1444681467), o = this.md5_gg(o, i, a, n, e[r + 2], 9, -51403784),
                            n = this.md5_gg(n, o, i, a, e[r + 7], 14, 1735328473), a = this.md5_gg(a, n, o, i, e[r + 12], 20, -1926607734),
                            i = this.md5_hh(i, a, n, o, e[r + 5], 4, -378558), o = this.md5_hh(o, i, a, n, e[r + 8], 11, -2022574463),
                            n = this.md5_hh(n, o, i, a, e[r + 11], 16, 1839030562), a = this.md5_hh(a, n, o, i, e[r + 14], 23, -35309556),
                            i = this.md5_hh(i, a, n, o, e[r + 1], 4, -1530992060), o = this.md5_hh(o, i, a, n, e[r + 4], 11, 1272893353),
                            n = this.md5_hh(n, o, i, a, e[r + 7], 16, -155497632), a = this.md5_hh(a, n, o, i, e[r + 10], 23, -1094730640),
                            i = this.md5_hh(i, a, n, o, e[r + 13], 4, 681279174), o = this.md5_hh(o, i, a, n, e[r + 0], 11, -358537222),
                            n = this.md5_hh(n, o, i, a, e[r + 3], 16, -722521979), a = this.md5_hh(a, n, o, i, e[r + 6], 23, 76029189),
                            i = this.md5_hh(i, a, n, o, e[r + 9], 4, -640364487), o = this.md5_hh(o, i, a, n, e[r + 12], 11, -421815835),
                            n = this.md5_hh(n, o, i, a, e[r + 15], 16, 530742520), a = this.md5_hh(a, n, o, i, e[r + 2], 23, -995338651),
                            i = this.md5_ii(i, a, n, o, e[r + 0], 6, -198630844), o = this.md5_ii(o, i, a, n, e[r + 7], 10, 1126891415),
                            n = this.md5_ii(n, o, i, a, e[r + 14], 15, -1416354905), a = this.md5_ii(a, n, o, i, e[r + 5], 21, -57434055),
                            i = this.md5_ii(i, a, n, o, e[r + 12], 6, 1700485571), o = this.md5_ii(o, i, a, n, e[r + 3], 10, -1894986606),
                            n = this.md5_ii(n, o, i, a, e[r + 10], 15, -1051523), a = this.md5_ii(a, n, o, i, e[r + 1], 21, -2054922799),
                            i = this.md5_ii(i, a, n, o, e[r + 8], 6, 1873313359), o = this.md5_ii(o, i, a, n, e[r + 15], 10, -30611744),
                            n = this.md5_ii(n, o, i, a, e[r + 6], 15, -1560198380), a = this.md5_ii(a, n, o, i, e[r + 13], 21, 1309151649),
                            i = this.md5_ii(i, a, n, o, e[r + 4], 6, -145523070), o = this.md5_ii(o, i, a, n, e[r + 11], 10, -1120210379),
                            n = this.md5_ii(n, o, i, a, e[r + 2], 15, 718787259), a = this.md5_ii(a, n, o, i, e[r + 9], 21, -343485551),
                            i = this.safe_add(i, s), a = this.safe_add(a, l), n = this.safe_add(n, h), o = this.safe_add(o, c);
                    }
                    return Array(i, a, n, o);
                }
            }, {
                key: "md5_cmn",
                value: function (e, t, i, a, n, o) {
                    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(a, o)), n), i);
                }
            }, {
                key: "md5_ff",
                value: function (e, t, i, a, n, o, r) {
                    return this.md5_cmn(t & i | ~t & a, e, t, n, o, r);
                }
            }, {
                key: "md5_gg",
                value: function (e, t, i, a, n, o, r) {
                    return this.md5_cmn(t & a | i & ~a, e, t, n, o, r);
                }
            }, {
                key: "md5_hh",
                value: function (e, t, i, a, n, o, r) {
                    return this.md5_cmn(t ^ i ^ a, e, t, n, o, r);
                }
            }, {
                key: "md5_ii",
                value: function (e, t, i, a, n, o, r) {
                    return this.md5_cmn(i ^ (t | ~a), e, t, n, o, r);
                }
            }, {
                key: "core_hmac_md5",
                value: function (e, t) {
                    var i = this.str2binl(e);
                    i.length > 16 && (i = this.core_md5(i, e.length * this.chrsz));
                    for (var a = Array(16), n = Array(16), o = 0; o < 16; o++) a[o] = 909522486 ^ i[o],
                        n[o] = 1549556828 ^ i[o];
                    var r = this.core_md5(a.concat(this.str2binl(t)), 512 + t.length * this.chrsz);
                    return this.core_md5(n.concat(r), 640);
                }
            }, {
                key: "safe_add",
                value: function (e, t) {
                    var i = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i;
                }
            }, {
                key: "bit_rol",
                value: function (e, t) {
                    return e << t | e >>> 32 - t;
                }
            }, {
                key: "str2binl",
                value: function (e) {
                    for (var t = Array(), i = (1 << this.chrsz) - 1, a = 0; a < e.length * this.chrsz; a += this.chrsz) t[a >> 5] |= (e.charCodeAt(a / this.chrsz) & i) << a % 32;
                    return t;
                }
            }, {
                key: "binl2str",
                value: function (e) {
                    for (var t = "", i = (1 << this.chrsz) - 1, a = 0; a < 32 * e.length; a += this.chrsz) t += String.fromCharCode(e[a >> 5] >>> a % 32 & i);
                    return t;
                }
            }, {
                key: "binl2hex",
                value: function (e) {
                    for (var t = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", a = 0; a < 4 * e.length; a++) i += t.charAt(e[a >> 2] >> a % 4 * 8 + 4 & 15) + t.charAt(e[a >> 2] >> a % 4 * 8 & 15);
                    return i;
                }
            }, {
                key: "binl2b64",
                value: function (e) {
                    for (var t = "", i = 0; i < 4 * e.length; i += 3) for (var a = (e[i >> 2] >> i % 4 * 8 & 255) << 16 | (e[i + 1 >> 2] >> (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >> 2] >> (i + 2) % 4 * 8 & 255, n = 0; n < 4; n++) 8 * i + 6 * n > 32 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a >> 6 * (3 - n) & 63);
                    return t;
                }
            }]), MD5;
        }();
        u.hexcase = 0, u.b64pad = "", u.chrsz = 8;
        var d, p, _ = new (function () {
            function YLNetManager() {
                _classCallCheck(this, YLNetManager);
            }
            return _createClass(YLNetManager, [{
                key: "request",
                value: function (e, t) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee13() {
                        var i, a, o, r, s, l;
                        return regeneratorRuntime.wrap(function (h) {
                            for (; ;) switch (h.prev = h.next) {
                                case 0:
                                    return t = t || {}, a = Ue.config.server, o = a.host.replace(/\/+$/, ""), r = a.apiversion.replace(/[\/\\]/g, ""),
                                        s = e.replace(/^\/+/, ""), h.prev = 5, l = "".concat(o, "/").concat(r, "/").concat(s),
                                        h.next = 9, n.asyncRequest(l, this.signParmas(t), "post");

                                case 9:
                                    i = h.sent, i = w.cookServerRsp(e, i), h.next = 17;
                                    break;

                                case 13:
                                    h.prev = 13, h.t0 = h.catch(5), i = {
                                        code: 10086,
                                        msg: "请求出错，网络不稳定",
                                        result: void 0,
                                        path: e.replace(a.host, "")
                                    }, console.log("请求出错，网络不稳定：".concat(e, "，").concat(h.t0));

                                case 17:
                                    return h.abrupt("return", i);

                                case 18:
                                case "end":
                                    return h.stop();
                            }
                        }, _callee13, this, [[5, 13]]);
                    }));
                }
            }, {
                key: "signParmas",
                value: function (e) {
                    var t = Object.assign({}, e);
                    t.apiKey = Ue.config.server.apiKey, t.timestamp = Date.now() / 1e3, Ue.data.token && (t.token = Ue.data.token);
                    var i = c.keys(t);
                    i.sort();
                    var a = "";
                    return i.forEach(function (e) {
                        var i = void 0 === t[e] ? "" : t[e];
                        a += encodeURIComponent(i);
                    }), t.apiSign = u.hex_hmac_md5(Ue.config.server.apiSecret, a), t;
                }
            }, {
                key: "reqGetAvatar",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee14() {
                        var e;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (Ue.config.needSearchPlayer) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                case 2:
                                    return t.next = 4, this.request(l.getAvatar);

                                case 4:
                                    (e = t.sent).code || (Ue.data.playerNamesPool = e.result.names || [], Ue.data.playerHeadsPool = e.result.avatar);

                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee14, this);
                    }));
                }
            }, {
                key: "reqWorldRank",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee15() {
                        var i, a, n, o;
                        return regeneratorRuntime.wrap(function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, this.request(l.worldRank, {
                                        page: e
                                    });

                                case 2:
                                    (i = r.sent).code || (a = i.result.list.map(function (e) {
                                        return {
                                            avatarUrl: e.avatar,
                                            nickName: e.user_nickname,
                                            score: e.score,
                                            rank: e.rank
                                        };
                                    }), Ue.data.worldRanks = a, n = i.result.userInfo, o = {
                                        avatarUrl: n.avatar,
                                        nickName: n.user_nickname,
                                        score: n.score,
                                        rank: n.rank
                                    }, w.postMsg2OpenData(t.WorldRankData, {
                                        list: a,
                                        myRank: o
                                    }));

                                case 4:
                                case "end":
                                    return r.stop();
                            }
                        }, _callee15, this);
                    }));
                }
            }, {
                key: "reqUpdateScore",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee16() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (Ue.data.userInfo && !(e <= Ue.data.userInfo.max_score)) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                case 2:
                                    return t.next = 4, this.request(l.pass, {
                                        score: e,
                                        use_time: Ue.data.useTime
                                    });

                                case 4:
                                    t.sent.code || (Ue.data.userInfo.max_score = e);

                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee16, this);
                    }));
                }
            }, {
                key: "getInitConfig",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee17() {
                        var e;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.request(l.getInitConfig);

                                case 2:
                                    if ((e = t.sent).code) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.abrupt("return", e.result);

                                case 7:
                                    return t.abrupt("return");

                                case 8:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee17, this);
                    }));
                }
            }]), YLNetManager;
        }())();
        !function (e) {
            e.BANNER_LOADED = "BANNER_LOADED";
        }(d || (d = {})), function (e) {
            e[e.Unknown = 0] = "Unknown", e[e.Reborn = 1] = "Reborn", e[e.Skin = 2] = "Skin";
        }(p || (p = {}));
        var f, y = new (function (e) {
            function YLADManager() {
                var e;
                return _classCallCheck(this, YLADManager), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADManager).apply(this, arguments))).AD_MAX = 3,
                    e._bannerPool = [], e._bannerQueue = [], e._bannerIndex = 0, e._curShowingBanner = void 0,
                    e._latestLoadAdTime = 0, e._loadAdInterval = 2e3, e._curShowingBannerId = 0, e._curShowingBlockId = 0,
                    e._curShowingBoxId = 0, e._normalBannerHegiht = 0, e._bannerShowIndex = 0, e;
            }
            return _inherits(YLADManager, h), _createClass(YLADManager, [{
                key: "deploy",
                value: function () {
                    Laya.Browser.onQQMiniGame && (this.AD_MAX = 1), this._normalBannerHegiht = 77 / 568 * Laya.Browser.clientHeight,
                        w.isSupportBannerAd && (this.try2LoadBannerAd(), Laya.timer.loop(1e3 / 3, this, this.try2LoadBannerAd)),
                        this.createVideoAd();
                }
            }, {
                key: "createVideoAd",
                value: function () {
                    w.isSupportVideoAd && w.createVideoAd();
                }
            }, {
                key: "showVideo",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee18() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (w.isSupportVideoAd) {
                                        t.next = 5;
                                        break;
                                    }
                                    return w.toastMsg("操作失败：不支持视频广告！"), t.abrupt("return", -3);

                                case 5:
                                    if (!Ue.data.isWatchingVidoeAd) {
                                        t.next = 8;
                                        break;
                                    }
                                    return w.toastMsg("操作失败，已有视频在播放！"), t.abrupt("return", -2);

                                case 8:
                                    return t.abrupt("return", new Promise(function (t) {
                                        _.request(l.viewVideo, {
                                            ad_type: e,
                                            type: 0
                                        }), Ue.data.isWatchingVidoeAd = !0, w.showVideoAd(function (i) {
                                            w.playBgm(!0), Ue.data.isWatchingVidoeAd = !1, i > 0 ? _.request(l.viewVideo, {
                                                ad_type: e,
                                                type: 1
                                            }) : 0 === i ? w.toastMsg("未观看完视频") : -1 === i && w.toastMsg("暂时没有视频，请稍后再试."), t(i);
                                        });
                                    }));

                                case 9:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee18, this);
                    }));
                }
            }, {
                key: "try2LoadBannerAd",
                value: function () {
                    var e, t, i = this;
                    if (w.isSupportBannerAd) if (this._bannerPool.length + this._bannerQueue.length > this.AD_MAX) this._loadAdInterval = Math.max((null === (e = Ue.data.versionConfig) || void 0 === e ? void 0 : e.banner_interval) || 1e3, 5e3); else if (!(Date.now() - this._latestLoadAdTime < this._loadAdInterval)) {
                        var a = {
                            id: this._bannerIndex++,
                            banner: void 0
                        };
                        this._latestLoadAdTime = Date.now(), this._bannerQueue.push(a), null === (t = w.createBannerAd()) || void 0 === t || t.then(function (e) {
                            c.remove(i._bannerQueue, a), e && (a.banner = e, i._bannerPool.push(a), i.emit(d.BANNER_LOADED));
                        }, function () {
                            c.remove(i._bannerQueue, a);
                        });
                    }
                }
            }, {
                key: "showBanner",
                value: function () {
                    var e, t;
                    return 1 === (null === (t = null === (e = Ue.data) || void 0 === e ? void 0 : e.versionConfig) || void 0 === t ? void 0 : t.delay) && Laya.timer.loop(1500, this, this.loopSHowBanner),
                        this.loopSHowBanner();
                }
            }, {
                key: "loopSHowBanner",
                value: function () {
                    var e = this._bannerPool[this._bannerShowIndex];
                    return console.log("showbannerLoop", e), e ? (this._curShowingBanner && this._curShowingBanner.banner.hide(),
                        e.banner.show(), this._curShowingBanner = e, this._curShowingBannerId = a.randomBetween(1, 1e7) >> 0,
                        this._bannerShowIndex = ++this._bannerShowIndex % 3, this._curShowingBannerId) : (this._bannerShowIndex = ++this._bannerShowIndex % 3,
                            (e = this._bannerPool[this._bannerShowIndex]) ? (this._curShowingBanner && this._curShowingBanner.banner.hide(),
                                e.banner.show(), this._curShowingBanner = e, this._curShowingBannerId = a.randomBetween(1, 1e7) >> 0,
                                this._curShowingBannerId) : 0);
                }
            }, {
                key: "hideBanner",
                value: function (e, t) {
                    Laya.timer.clear(this, this.loopSHowBanner);
                    for (var i = 0; i < 3; i++) this._bannerPool[i] && this._bannerPool[i].banner.hide();
                    this._bannerPool.shift(), this.try2LoadBannerAd();
                }
            }, {
                key: "showBlock",
                value: function (e, t, i, n) {
                    var o = Laya.Browser.clientHeight / Laya.stage.displayHeight;
                    return e *= o, t *= o, this.hideBlock(0, !0), this._curShowingBlock = w.createBlockAd(e, t, i, n),
                        this._curShowingBlock ? (this._curShowingBlock.show(), this._curShowingBlockId = a.randomBetween(1, 1e5) >> 0,
                            this._curShowingBlockId) : 0;
                }
            }, {
                key: "changeBlockPos",
                value: function (e, t, i) {
                    if (e && this._curShowingBlockId && e === this._curShowingBlockId) {
                        var a = Laya.Browser.clientHeight / Laya.stage.displayHeight;
                        t *= a, i *= a, this._curShowingBlock.style.left = t, this._curShowingBlock.style.top = i;
                    }
                }
            }, {
                key: "hideBlock",
                value: function (e, t) {
                    var i, a;
                    (t || e && this._curShowingBlockId === e) && (null === (i = this._curShowingBlock) || void 0 === i || i.hide(),
                        null === (a = this._curShowingBlock) || void 0 === a || a.destroy(), this._curShowingBlockId = void 0,
                        this._curShowingBlock = void 0);
                }
            }, {
                key: "showBox",
                value: function (e) {
                    var t = this;
                    return this.hideBox(0, !0), this._curShowingBox = w.createBoxAd(function () {
                        t.hideBox(0, !0), e && e();
                    }), this._curShowingBox ? (this._curShowingBox.load().then(function () {
                        var e;
                        return null === (e = t._curShowingBox) || void 0 === e ? void 0 : e.show();
                    }), this._curShowingBoxId = a.randomBetween(1, 1e5) >> 0, this._curShowingBoxId) : 0;
                }
            }, {
                key: "hideBox",
                value: function (e, t) {
                    var i;
                    (t || e && this._curShowingBoxId === e) && (this._curShowingBoxId = void 0, null === (i = this._curShowingBox) || void 0 === i || i.destroy(),
                        this._curShowingBox = void 0);
                }
            }, {
                key: "normalBannerHegiht",
                set: function (e) {
                    this._normalBannerHegiht = e;
                },
                get: function () {
                    return this._normalBannerHegiht;
                }
            }, {
                key: "curShowingBanner",
                get: function () {
                    return this._curShowingBanner;
                }
            }, {
                key: "hasBanner",
                get: function () {
                    return this._bannerPool.length > 0;
                }
            }]), YLADManager;
        }())(), m = function (e) {
            function WXMiniGamePlatform() {
                var e;
                return _classCallCheck(this, WXMiniGamePlatform), (e = _possibleConstructorReturn(this, _getPrototypeOf(WXMiniGamePlatform).apply(this, arguments)))._tencentApi = wx,
                    e._adIndex = 0, e._tercentAppName = "微信", e._preReqAuthorTime = 0, e._curBgmMusicUrl = "",
                    e;
            }
            return _inherits(WXMiniGamePlatform, r), _createClass(WXMiniGamePlatform, [{
                key: "sendJsonDataToDataContext",
                value: function (e) {
                    Laya.MiniAdpter.sendJsonDataToDataContext(e);
                }
            }, {
                key: "sendAtlasToOpenDataContext",
                value: function (e) {
                    Laya.MiniAdpter.sendAtlasToOpenDataContext(e);
                }
            }, {
                key: "submitScore",
                value: function (e) {
                    this.postMsg2OpenData({
                        event: t.SubmitScore,
                        score: e
                    });
                }
            }, {
                key: "toastMsg",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    this._tencentApi.showToast({
                        title: e,
                        icon: "none",
                        complete: void 0,
                        fail: void 0,
                        success: void 0,
                        image: void 0,
                        mask: void 0,
                        duration: t
                    });
                }
            }, {
                key: "postMsg2OpenData",
                value: function (e) {
                    this._tencentApi.getOpenDataContext().postMessage(e);
                }
            }, {
                key: "login",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee19() {
                        var e = this;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise(function (t, i) {
                                        e._tencentApi.login({
                                            success: function (a) {
                                                a.code ? (console.log("【".concat(e._tercentAppName, "】登录成功")), t(a)) : i("".concat(e._tercentAppName, "登录失败，code不存在！"));
                                            },
                                            fail: function () {
                                                return i("".concat(e._tercentAppName, "登录失败，接口调用失败！"));
                                            }
                                        });
                                    }));

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee19, this);
                    }));
                }
            }, {
                key: "authorize",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee20() {
                        var e = this;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise(function (t) {
                                        var i = e._systemInfo, a = i.screenWidth, n = i.screenHeight, o = {
                                            left: 0,
                                            top: 0,
                                            width: a,
                                            height: n,
                                            lineHeight: n,
                                            backgroundColor: "#00000000",
                                            color: "#ffffffff",
                                            textAlign: "center",
                                            fontSize: 16,
                                            borderRadius: 4
                                        }, r = e._tencentApi.createUserInfoButton({
                                            type: "text",
                                            text: "",
                                            style: o,
                                            withCredentials: !0
                                        });
                                        console.log("【".concat(e._tercentAppName, "】请求授权登录。")), r.show(), r.onTap(function (i) {
                                            var a = Date.now();
                                            a - e._preReqAuthorTime < 1e3 || (e._preReqAuthorTime = a, i.userInfo ? (console.log("【".concat(e._tercentAppName, "】用户授权登录。")),
                                                t(i)) : (console.log("【".concat(e._tercentAppName, "】授权取消。")), t(void 0)), r.destroy());
                                        });
                                    }));

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee20, this);
                    }));
                }
            }, {
                key: "shareFriend",
                value: function (e, t) {
                    this._onShareFriend = function (e) {
                        return t && t(e);
                    }, this._shareFriendId = e.share_id, this._shareFriendBeginTime = Date.now();
                    var i = {
                        title: e.share_title,
                        imageUrl: e.share_img,
                        query: "share_id=".concat(e.share_id, "&share_type=").concat(e.share_type, "&id=").concat(Ue.data.userInfo.id)
                    };
                    this._tencentApi.shareAppMessage(i);
                }
            }, {
                key: "deploy",
                value: function (e, t, i) {
                    this._systemInfo = this._tencentApi.getSystemInfoSync(), this._launchOptions = this._tencentApi.getLaunchOptionsSync(),
                        this._onShareAppMsg = i, this._onGameHide = e, this._onGameShow = t, this.addWxEvents();
                }
            }, {
                key: "addWxEvents",
                value: function () {
                    this._tencentApi.onShow(this.onGameShow.bind(this)), this._tencentApi.onHide(this.onGameHide.bind(this)),
                        this._tencentApi.onShareAppMessage(this.onShareAppMsg.bind(this));
                }
            }, {
                key: "onGameShow",
                value: function () {
                    if (this._onShareFriend) {
                        var e = Date.now() - this._shareFriendBeginTime > 2500;
                        this._onShareAppMsg && e && this._onShareAppMsg(this._shareFriendId), this._onShareFriend(e),
                            this._shareFriendId = void 0, this._shareFriendBeginTime = void 0, this._onShareFriend = void 0;
                    }
                    this._onGameShow && this._onGameShow();
                }
            }, {
                key: "onGameHide",
                value: function () {
                    this._onGameHide && this._onGameHide();
                }
            }, {
                key: "onShareAppMsg",
                value: function () {
                    if (Ue.data.token) {
                        var e = Ue.data.getShareContent(1);
                        return this._onShareAppMsg && this._onShareAppMsg(e.share_id), {
                            title: e.share_title,
                            imageUrl: e.share_img,
                            query: "share_id=".concat(e.share_id, "&share_type=").concat(e.share_type, "&id=").concat(Ue.data.userInfo.id),
                            success: function () { },
                            fail: function () { }
                        };
                    }
                }
            }, {
                key: "getLaunchOptions",
                value: function () {
                    var e, t, i, a = this._launchOptions, n = {};
                    if (!a) return n;
                    a.scene && (n.scene_id = a.scene), (null === (e = a.referrerInfo) || void 0 === e ? void 0 : e.appId) && (n.appid = a.referrerInfo.appId);
                    var o = a.query;
                    return o ? (o.id && (n.share_user_id = parseInt(o.id) || 0), o.share_id && (n.share_id = parseInt(o.share_id) || 0),
                        o.channel && (n.channel = o.channel), o.wxgamecid && (n.wxgamecid = o.wxgamecid)) : (null === (i = null === (t = a.referrerInfo) || void 0 === t ? void 0 : t.extraData) || void 0 === i ? void 0 : i.channel) && (n.channel = a.referrerInfo.extraData.channel),
                        n;
                }
            }, {
                key: "vibrate",
                value: function (e) {
                    var t = {
                        complete: function () { },
                        fail: function () { },
                        success: function () { }
                    };
                    e ? this._tencentApi.vibrateShort(t) : this._tencentApi.vibrateLong(t);
                }
            }, {
                key: "loadSubpackage",
                value: function (e, t) {
                    var i = this;
                    return new Promise(function (a, n) {
                        i._tencentApi.loadSubpackage({
                            name: e,
                            success: function () {
                                t(1), a();
                            },
                            fail: function (e) {
                                n(e);
                            }
                        }).onProgressUpdate(function (e) {
                            var i = Math.min(1, e.totalBytesWritten / e.totalBytesExpectedToWrite);
                            t(i);
                        });
                    });
                }
            }, {
                key: "playMusic",
                value: function (e) {
                    var t;
                    e && e !== this._curBgmMusicUrl && (null === (t = this._bgmMusicContext) || void 0 === t || t.destroy(),
                        this._bgmMusicContext = this._tencentApi.createInnerAudioContext(), this._bgmMusicContext.src = e,
                        this._bgmMusicContext.loop = !0, this._bgmMusicContext.play(), this._curBgmMusicUrl = e);
                }
            }, {
                key: "stopSound",
                value: function (e) {
                    var t;
                    e && (e === this._curBgmMusicUrl ? (null === (t = this._bgmMusicContext) || void 0 === t || t.destroy(),
                        this._bgmMusicContext = void 0, this._curBgmMusicUrl = void 0) : _get(_getPrototypeOf(WXMiniGamePlatform.prototype), "stopSound", this).call(this, e));
                }
            }, {
                key: "getRightUpFavouriteBtnPos",
                value: function () {
                    if (s.compareVersion(this._systemInfo.SDKVersion, "2.1.0") >= 0) {
                        var e = this._tencentApi.getMenuButtonBoundingClientRect(), t = e.width, i = e.height, a = e.top, n = e.left;
                        if (t || i || a || n) {
                            var o = new Laya.Point(n, a + .6 * i), r = Laya.stage.displayWidth / Laya.Browser.clientWidth, l = Laya.stage.displayHeight / Laya.Browser.clientHeight;
                            return o.x *= r, o.y *= l, o;
                        }
                    } else;
                }
            }, {
                key: "createBlockAd",
                value: function (e, t, i, a) { }
            }, {
                key: "createBoxAd",
                value: function (e) { }
            }, {
                key: "createBannerAd",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee21() {
                        var e = this;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.isSupportBannerAd) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                case 2:
                                    return t.abrupt("return", new Promise(function (t) {
                                        var i = e._tencentApi.createBannerAd({
                                            adUnitId: Ue.config.ad.bannerAdID[e._adIndex++ % Ue.config.ad.bannerAdID.length],
                                            style: {
                                                left: 0,
                                                top: .86 * e._systemInfo.screenHeight,
                                                width: e._systemInfo.screenWidth
                                            }
                                        });
                                        i.onError(function () {
                                            t(void 0);
                                        }), i.onLoad(function () {
                                            t(i);
                                        }), i.onResize(function (t) {
                                            if (t) i.style.realWidth = t.width, i.style.realHeight = t.height, y.normalBannerHegiht = t.height,
                                                i.style.top = e._systemInfo.screenHeight - t.height; else {
                                                var a = i.style.realHeight + .1;
                                                y.normalBannerHegiht || (y.normalBannerHegiht = a), i.style.top = e._systemInfo.screenHeight - a;
                                            }
                                        });
                                    }));

                                case 3:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee21, this);
                    }));
                }
            }, {
                key: "createVideoAd",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee22() {
                        var e = this;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise(function (t) {
                                        var i;
                                        null === (i = e._videoAd) || void 0 === i || i.destroy(), e._videoAd = e._tencentApi.createRewardedVideoAd({
                                            adUnitId: Ue.config.ad.videoAdID
                                        });
                                        e._videoAd.onLoad(function onload() {
                                            e._videoAd && (e._videoAd.offLoad(onload), t(e._videoAd));
                                        }), e._videoAd.onError(function () {
                                            var i;
                                            console.log("视频加载失败"), null === (i = e._videoAd) || void 0 === i || i.destroy(),
                                                e._videoAd = void 0, t(void 0);
                                        }), e._videoAd.onClose(function (t) {
                                            e._onVideoCloseCallback && e._onVideoCloseCallback(t ? t.isEnded ? 1 : 0 : 1), e._onVideoCloseCallback = void 0,
                                                e._videoAd.load();
                                        }), e._videoAd.load();
                                    }));

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee22, this);
                    }));
                }
            }, {
                key: "showVideoAd",
                value: function (e) {
                    var t;
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee23() {
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return this._onVideoCloseCallback = e, i.prev = 1, i.next = 4, this._videoAd.show();

                                case 4:
                                    i.next = 11;
                                    break;

                                case 6:
                                    i.prev = 6, i.t0 = i.catch(1), null === (t = this._videoAd) || void 0 === t || t.load(),
                                        this._onVideoCloseCallback = void 0, e && e(-1);

                                case 11:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee23, this, [[1, 6]]);
                    }));
                }
            }, {
                key: "gotoApp",
                value: function (e) {
                    var t = this, i = e.app_id, a = e.app_path;
                    e.wx_id, e.ad_id;
                    return new Promise(function (e) {
                        t._tencentApi.navigateToMiniProgram({
                            appId: i,
                            path: a,
                            success: function () {
                                e(!0);
                            },
                            complete: function () { },
                            fail: function () {
                                e(!1);
                            },
                            envVersion: void 0,
                            extraData: void 0
                        });
                    });
                }
            }, {
                key: "isSupportBlockAd",
                get: function () {
                    return !1;
                }
            }, {
                key: "isSupportBoxAd",
                get: function () {
                    return !1;
                }
            }, {
                key: "isSupportBannerAd",
                get: function () {
                    return s.compareVersion(this._systemInfo.SDKVersion, "2.6.0") >= 0;
                }
            }, {
                key: "isSupportVideoAd",
                get: function () {
                    return s.compareVersion(this._systemInfo.SDKVersion, " 2.0.4") >= 0;
                }
            }, {
                key: "statusBarHeight",
                get: function () {
                    var e = this._systemInfo.statusBarHeight;
                    return (e = e > 20 ? e : 0) * Laya.stage.displayHeight / Laya.Browser.clientHeight;
                }
            }]), WXMiniGamePlatform;
        }(), v = function (e) {
            function AbstractModel() {
                return _classCallCheck(this, AbstractModel), _possibleConstructorReturn(this, _getPrototypeOf(AbstractModel).apply(this, arguments));
            }
            return _inherits(AbstractModel, h), _createClass(AbstractModel, [{
                key: "try2Set",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this.isValid) {
                        var a = "_".concat(e);
                        (this[a] !== t || i) && (this[a] = t, this.emit(e, t));
                    }
                }
            }]), AbstractModel;
        }(), g = function () {
            function AsyncUtils() {
                _classCallCheck(this, AsyncUtils);
            }
            return _createClass(AsyncUtils, null, [{
                key: "sleep",
                value: function (e) {
                    return new Promise(function (t) {
                        Laya.timer.once(e, void 0, t);
                    });
                }
            }]), AsyncUtils;
        }(), k = new (function () {
            function YLStorageManager() {
                _classCallCheck(this, YLStorageManager), this._isDirty = !1;
            }
            return _createClass(YLStorageManager, [{
                key: "deploy",
                value: function () {
                    this._storageKey = "Drift-At-Will-Data", this._data = Laya.LocalStorage.getJSON(this._storageKey) || {},
                        this.updateDataModel(), Laya.timer.loop(1e3 / 3, this, this.tick2Flush);
                }
            }, {
                key: "updateDataModel",
                value: function () {
                    var e = Ue.data, t = this._data, i = t.gold, a = t.ownStoreItemIds, n = t.storeItemIdInUse, o = t.isMute, r = t.canVibrate;
                    e.gold = i || 0, e.storeItemIdInUse = n || NaN, e.ownStoreItemIds = (a || "").split(",").filter(Boolean),
                        w.isMute = o || !1, w.canVibrate = null == r || r;
                }
            }, {
                key: "tick2Flush",
                value: function () {
                    this._isDirty && (Laya.LocalStorage.setJSON(this._storageKey, this._data), this._isDirty = !1);
                }
            }, {
                key: "set",
                value: function (e, t) {
                    this._data[e] !== t && (this._isDirty = !0, this._data[e] = t);
                }
            }, {
                key: "get",
                value: function (e) {
                    return this._data[e];
                }
            }]), YLStorageManager;
        }())(), w = new (function (e) {
            function YLPlatformManager() {
                var e;
                return _classCallCheck(this, YLPlatformManager), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLPlatformManager).apply(this, arguments)))._subpackageNames = [],
                    e._subpackageProgresses = [], e._isMute = !1, e._canVibrate = !0, e._doLoadSubPackage = function (t, i) {
                        return __awaiter(_assertThisInitialized(e), void 0, void 0, regeneratorRuntime.mark(function _callee24() {
                            var e, n = this;
                            return regeneratorRuntime.wrap(function (o) {
                                for (; ;) switch (o.prev = o.next) {
                                    case 0:
                                        return o.prev = 0, e = function (e) {
                                            console.log("分包".concat(t, "下载进度：").concat(e)), n._subpackageProgresses[i] = a.calValueBetween(e, 0, 1),
                                                n.onSubPackageProgress();
                                        }, o.next = 4, this._platform.loadSubpackage(t, e);

                                    case 4:
                                        o.next = 11;
                                        break;

                                    case 6:
                                        return o.prev = 6, o.t0 = o.catch(0), console.log("分包加载 ".concat(t, " 失败，正重新加载。失败原因：").concat(o.t0)),
                                            o.next = 11, this._doLoadSubPackage(t, i);

                                    case 11:
                                    case "end":
                                        return o.stop();
                                }
                            }, _callee24, this, [[0, 6]]);
                        }));
                    }, e._onGameShow = function () {
                        Ue.data.isSleep = !1, console.log("app切换到前台"), e.playBgm(!0);
                    }, e._onGameHide = function () {
                        console.log("app切换到后台"), Ue.data.isSleep = !0;
                    }, e._onShareAppMsg = function (e) {
                        _.request(l.recordShare, {
                            share_id: e
                        });
                    }, e;
            }
            return _inherits(YLPlatformManager, v), _createClass(YLPlatformManager, [{
                key: "cookServerRsp",
                value: function (e, t) {
                    return this._platform ? this._platform.cookServerRsp(e, t) : t;
                }
            }, {
                key: "sendJsonDataToDataContext",
                value: function (e) {
                    var t;
                    null === (t = this._platform) || void 0 === t || t.sendJsonDataToDataContext(e);
                }
            }, {
                key: "sendAtlasToOpenDataContext",
                value: function (e) {
                    var t;
                    null === (t = this._platform) || void 0 === t || t.sendAtlasToOpenDataContext(e);
                }
            }, {
                key: "submitScore",
                value: function (e) {
                    var t;
                    !Ue.data.userInfo || e <= Ue.data.userInfo.max_score || null === (t = this._platform) || void 0 === t || t.submitScore(e);
                }
            }, {
                key: "shareFriend",
                value: function (e, t) {
                    if (this._platform) {
                        if (!Ue.data.userInfo) return this.toastMsg("分享失败，尚未登录！"), void (t && t(!1));
                        var i = Ue.data.shareInfoDic[e] || [], a = c.randomOne(i) || {
                            share_title: "",
                            share_img: "",
                            share_id: 1,
                            share_type: e
                        };
                        this._platform.shareFriend(a, t);
                    }
                }
            }, {
                key: "postMsg2OpenData",
                value: function (e, t) {
                    var i;
                    null === (i = this._platform) || void 0 === i || i.postMsg2OpenData(Object.assign({
                        event: e
                    }, t || {}));
                }
            }, {
                key: "vibrate",
                value: function (e) {
                    this._platform && this.canVibrate && this._platform.vibrate(e);
                }
            }, {
                key: "playBgm",
                value: function () {
                    if (!window.WebAudioEngin) {
                        return;
                    }
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.stopSound(Ue.config.sound.bgm),
                        this.playMusic(Ue.config.sound.bgm);
                }
            }, {
                key: "playMusic",
                value: function (e) {
                    if (Ue.hasDeployed && !this.isMute && e) {
                        var t = Ue.config.sound.bgm;
                        if (this._curPlayingBgmName !== t) {
                            this._curPlayingBgmName = t;
                            var i = this.cookSoundUrlByName(e);
                            Laya.SoundManager.playMusic(i);
                        }
                    }
                }
            }, {
                key: "playSoundEffect",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    if (Ue.hasDeployed && !this.isMute && e) {
                        var i = this.cookSoundUrlByName(e);
                        Laya.SoundManager.playSound(i, t == 0);
                    }
                }
            }, {
                key: "stopSound",
                value: function (e) {
                    if (Ue.hasDeployed && e) {
                        var t = e === Ue.config.sound.bgm;
                        t && (this._curPlayingBgmName = void 0);
                        var i = this.cookSoundUrlByName(e);
                        t ? Laya.SoundManager.stopMusic() : Laya.SoundManager.stopSound(i);
                    }
                }
            }, {
                key: "stopAllSound",
                value: function () {
                    Ue.hasDeployed && (this.stopSound(Ue.config.sound.bgm), Laya.SoundManager.stopAll());
                }
            }, {
                key: "cookSoundUrlByName",
                value: function (e) {
                    return "".concat(Ue.config.sound.basePath, "/").concat(e, ".mp3");
                }
            }, {
                key: "toastMsg",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    this._platform ? this._platform.toastMsg(e, t) : console.log("【飘字消息】".concat(e));
                }
            }, {
                key: "gotoApp",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee25() {
                        var t;
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    if (!this._platform || !e) {
                                        i.next = 11;
                                        break;
                                    }
                                    return i.next = 3, this._platform.gotoApp(e);

                                case 3:
                                    if (!i.sent) {
                                        i.next = 7;
                                        break;
                                    }
                                    i.t0 = 1, i.next = 8;
                                    break;

                                case 7:
                                    i.t0 = 0;

                                case 8:
                                    return t = i.t0, _.request(l.clickWxApp, {
                                        wx_id: e.wx_id,
                                        ad_id: e.ad_id,
                                        type: t
                                    }), i.abrupt("return", t);

                                case 11:
                                    return i.abrupt("return", -1);

                                case 12:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee25, this);
                    }));
                }
            }, {
                key: "getRightUpFavouriteBtnPos",
                value: function () {
                    var e, t = (null === (e = this._platform) || void 0 === e ? void 0 : e.getRightUpFavouriteBtnPos()) || new Laya.Point();
                    return t.x || t.y || (t.x = Laya.stage.displayWidth - 100, t.y = 100), t;
                }
            }, {
                key: "loadSubpackages",
                value: function (e, t) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee26() {
                        var i;
                        return regeneratorRuntime.wrap(function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    if (this._platform && e && e.length) {
                                        a.next = 2;
                                        break;
                                    }
                                    return a.abrupt("return", console.log("不用加载分包"));

                                case 2:
                                    if (this._onSubpackageProgress = t, this._subpackageNames = e, this._subpackageProgresses = e.map(function () {
                                        return 0;
                                    }), !Ue.config.load.isSubpackLoadPromiseAll) {
                                        a.next = 10;
                                        break;
                                    }
                                    return a.next = 8, Promise.all(this._subpackageNames.map(this._doLoadSubPackage));

                                case 8:
                                    a.next = 17;
                                    break;

                                case 10:
                                    i = 0;

                                case 11:
                                    if (!(i < this._subpackageNames.length)) {
                                        a.next = 17;
                                        break;
                                    }
                                    return a.next = 14, this._doLoadSubPackage(this._subpackageNames[i], i);

                                case 14:
                                    i++, a.next = 11;
                                    break;

                                case 17:
                                case "end":
                                    return a.stop();
                            }
                        }, _callee26, this);
                    }));
                }
            }, {
                key: "onSubPackageProgress",
                value: function () {
                    if (this._onSubpackageProgress) {
                        var e = this._subpackageProgresses.reduce(function (e, t) {
                            return e + t;
                        }) / this._subpackageProgresses.length;
                        this._onSubpackageProgress(e);
                    }
                }
            }, {
                key: "login",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee29() {
                        var e, t, i, a, n, o, r, s = this;
                        return regeneratorRuntime.wrap(function (h) {
                            for (; ;) switch (h.prev = h.next) {
                                case 0:
                                    if (this._platform) {
                                        h.next = 2;
                                        break;
                                    }
                                    return h.abrupt("return");

                                case 2:
                                    e = 3, t = 0, i = "", n = function () {
                                        return __awaiter(s, void 0, void 0, regeneratorRuntime.mark(function _callee27() {
                                            var e;
                                            return regeneratorRuntime.wrap(function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, this._platform.login();

                                                    case 3:
                                                        e = t.sent, i = e.code, console.log("【登录】app登录成功：".concat(i)), t.next = 12;
                                                        break;

                                                    case 8:
                                                        return t.prev = 8, t.t0 = t.catch(0), i = "", t.abrupt("return", t.t0);

                                                    case 12:
                                                        return t.abrupt("return", "");

                                                    case 13:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, _callee27, this, [[0, 8]]);
                                        }));
                                    }, o = function () {
                                        return __awaiter(s, void 0, void 0, regeneratorRuntime.mark(function _callee28() {
                                            var e;
                                            return regeneratorRuntime.wrap(function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return (e = this._platform.getLaunchOptions()).code = i, e.late_version = Ue.data.CUR_VERSION,
                                                            t.next = 5, _.request(l.login, e);

                                                    case 5:
                                                        a = t.sent;

                                                    case 6:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, _callee28, this);
                                        }));
                                    };

                                case 7:
                                    return h.next = 10, n();

                                case 10:
                                    if (r = h.sent, i) {
                                        h.next = 15;
                                        break;
                                    }
                                    console.log("【登录】app登录失败：".concat(r, "，").concat(i)), h.next = 20;
                                    break;

                                case 15:
                                    return h.next = 17, o();

                                case 17:
                                    if (a.code) {
                                        h.next = 19;
                                        break;
                                    }
                                    return h.abrupt("return", a.result);

                                case 19:
                                    console.log("【登录】后台失败，错误代码：".concat(a.code, "，原因：").concat(a.msg));

                                case 20:
                                    if (!(++t < e)) {
                                        h.next = 26;
                                        break;
                                    }
                                    return h.next = 24, g.sleep(1e3);

                                case 24:
                                    h.next = 28;
                                    break;

                                case 26:
                                    return console.log("登录失败，已经超过最大重试次数（".concat(e, "次）。")), h.abrupt("return");

                                case 28:
                                    h.next = 7;
                                    break;

                                case 30:
                                case "end":
                                    return h.stop();
                            }
                        }, _callee29, this);
                    }));
                }
            }, {
                key: "authorize",
                value: function () {
                    var e, t;
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee30() {
                        var i, a, n;
                        return regeneratorRuntime.wrap(function (o) {
                            for (; ;) switch (o.prev = o.next) {
                                case 0:
                                    if (!(null === (e = Ue.data.userInfo) || void 0 === e ? void 0 : e.avatar)) {
                                        o.next = 2;
                                        break;
                                    }
                                    return o.abrupt("return", !0);

                                case 2:
                                    return o.next = 4, null === (t = this._platform) || void 0 === t ? void 0 : t.authorize();

                                case 4:
                                    if (i = o.sent) {
                                        o.next = 8;
                                        break;
                                    }
                                    return Ue.data.hasRejectAuthor = !0, o.abrupt("return", !1);

                                case 8:
                                    return a = {
                                        encrypted_data: i.encryptedData,
                                        iv: i.iv
                                    }, o.next = 11, _.request(l.authorizeLogin, a);

                                case 11:
                                    if ((n = o.sent).code) {
                                        o.next = 17;
                                        break;
                                    }
                                    return Ue.data.userInfo = n.result.userInfo, o.abrupt("return", !0);

                                case 17:
                                    return o.abrupt("return", !1);

                                case 18:
                                case "end":
                                    return o.stop();
                            }
                        }, _callee30, this);
                    }));
                }
            }, {
                key: "deploy",
                value: function () {
                    Laya.Browser.onMiniGame && (this._platform = new m()), this._platform && this._platform.deploy(this._onGameHide, this._onGameShow, this._onShareAppMsg);
                }
            }, {
                key: "showVideoAd",
                value: function (e) {
                    this.isSupportVideoAd && (o.isWorldCanClick = !1,
                        platform.getInstance().showRewrad(() => {
                            e && e(true);
                        }));
                    Laya.timer.once(1000, this, () => {
                        o.isWorldCanClick = !0
                    })
                }
            }, {
                key: "createVideoAd",
                value: function () {
                    this.isSupportVideoAd && this._platform.createVideoAd();
                }
            }, {
                key: "createBannerAd",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee31() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.isSupportBannerAd) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                case 2:
                                    return e.next = 4, this._platform.createBannerAd();

                                case 4:
                                    return e.abrupt("return", e.sent);

                                case 5:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee31, this);
                    }));
                }
            }, {
                key: "createBlockAd",
                value: function (e, t, i, a) {
                    if (this.isSupportBlockAd) return this._platform.createBlockAd(e, t, i, a);
                }
            }, {
                key: "createBoxAd",
                value: function (e) {
                    var t;
                    if (this.isSupportBoxAd) return null === (t = this._platform) || void 0 === t ? void 0 : t.createBoxAd(e);
                }
            }, {
                key: "getStatusBarHeight",
                value: function () {
                    var e;
                    return (null === (e = this._platform) || void 0 === e ? void 0 : e.statusBarHeight) || 0;
                }
            }, {
                key: "checkSceneBlacklist",
                value: function () {
                    var e, t;
                    if (this._platform) {
                        var i = null === (t = null === (e = Ue.data) || void 0 === e ? void 0 : e.versionConfig) || void 0 === t ? void 0 : t.screen_scenes;
                        if (i) {
                            var a = this._platform.getLaunchOptions();
                            console.log("checkSceneBlacklist param:", a), -1 != i.indexOf(a.scene_id) && (Ue.data.isSceneBlacklist = !0);
                        }
                    }
                }
            }, {
                key: "canVibrate",
                get: function () {
                    return this._canVibrate;
                },
                set: function (e) {
                    this.try2Set("canVibrate", e), k.set("canVibrate", e);
                }
            }, {
                key: "isMute",
                get: function () {
                    return this._isMute;
                },
                set: function (e) {
                    var t = e !== this.isMute;
                    this.try2Set("isMute", e), k.set("isMute", e);
                }
            }, {
                key: "isIosWXMiniGame",
                get: function () {
                    return Laya.Browser.onMiniGame && Laya.Browser.onIOS;
                }
            }, {
                key: "isQQWXMiniGame",
                get: function () {
                    return Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame;
                }
            }, {
                key: "isSupportVideoAd",
                get: function () {
                    var e;
                    return !!Ue.config.ad.videoAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportVideoAd);
                }
            }, {
                key: "isSupportBannerAd",
                get: function () {
                    var e;
                    return !!Ue.config.ad.bannerAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportBannerAd);
                }
            }, {
                key: "isSupportBlockAd",
                get: function () {
                    var e;
                    return !!Ue.config.ad.blockAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportBannerAd);
                }
            }, {
                key: "isSupportBoxAd",
                get: function () {
                    var e;
                    return !!Ue.config.ad.boxAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportBoxAd);
                }
            }]), YLPlatformManager;
        }())(), S = function (e) {
            function ZoomButton() {
                var e;
                return _classCallCheck(this, ZoomButton), (e = _possibleConstructorReturn(this, _getPrototypeOf(ZoomButton).apply(this, arguments)))._scaleX = 1,
                    e._scaleY = 1, e._isPushingDown = !1, e.mouseDownScale = 1.03, e.notZoom = !1, e;
            }
            return _inherits(ZoomButton, Laya.Script), _createClass(ZoomButton, [{
                key: "onAwake",
                value: function () {
                    var e = this.owner;
                    e = this.owner, this._scaleX = e.scaleX, this._scaleY = e.scaleY, this._spOwner = e;
                }
            }, {
                key: "onMouseDown",
                value: function () {
                    this.isPushingDown = !0;
                }
            }, {
                key: "onMouseUp",
                value: function () {
                    if (this._isPushingDown) {
                        this.isPushingDown = !1;
                        var e = this.specifiedClickSound || Ue.config.sound.click;
                        w.playSoundEffect(e);
                    }
                }
            }, {
                key: "onStageMouseUp",
                value: function () {
                    this.isPushingDown = !1;
                }
            }, {
                key: "isPushingDown",
                get: function () {
                    return this._isPushingDown;
                },
                set: function (e) {
                    if (this._isPushingDown !== e && (this._isPushingDown = e, !this.notZoom)) {
                        var t = this.zoomTarget || this._spOwner;
                        e ? Laya.Tween.to(t, {
                            scaleX: this._scaleX * this.mouseDownScale,
                            scaleY: this._scaleY * this.mouseDownScale
                        }, 50) : Laya.Tween.to(t, {
                            scaleX: this._scaleX,
                            scaleY: this._scaleY
                        }, 50);
                    }
                }
            }]), ZoomButton;
        }(), C = function (e) {
            function AbstractRuntimeView() {
                return _classCallCheck(this, AbstractRuntimeView), _possibleConstructorReturn(this, _getPrototypeOf(AbstractRuntimeView).apply(this, arguments));
            }
            return _inherits(AbstractRuntimeView, Laya.View), _createClass(AbstractRuntimeView, [{
                key: "deploy",
                value: function (e, t) {
                    for (var i in this._model = e, this._controller = t, this) {
                        var a = this[i];
                        a instanceof Laya.Node && 0 === i.indexOf("_btn") && (a.getComponent(S) || a.addComponent(S),
                            n.addClickListener(a, this.onBtnClick, this));
                    }
                }
            }, {
                key: "onBtnClick",
                value: function (e) { }
            }, {
                key: "onDeploy",
                value: function () { }
            }, {
                key: "onDestroy",
                value: function () {
                    this._model && (this._model.offAllCaller(this), this._model = void 0, this._controller = void 0);
                }
            }]), AbstractRuntimeView;
        }(), L = function (t) {
            function AbstractPopupView() {
                var e;
                return _classCallCheck(this, AbstractPopupView), (e = _possibleConstructorReturn(this, _getPrototypeOf(AbstractPopupView).apply(this, arguments)))._modalOrigAlpha = 1,
                    e._isShowing = !1, e._viewScaleXOrig = 1, e._viewScaleYOrig = 1, e._isClickModalClose = !0,
                    e._needPopupEffect = !0, e;
            }
            return _inherits(AbstractPopupView, C), _createClass(AbstractPopupView, [{
                key: "onCloseClick",
                value: function () { }
            }, {
                key: "onModalClick",
                value: function () {
                    this._isClickModalClose && this.onCloseClick();
                }
            }, {
                key: "deployPopup",
                value: function (e, t, i) {
                    this._needPopupEffect = i, this.deploy(e, t);
                }
            }, {
                key: "onDeploy",
                value: function () {
                    e.throwNot2BeNull(this._spView, "_spView"), this._viewScaleXOrig = this._spView.scaleX,
                        this._viewScaleYOrig = this._spView.scaleY, this._spModal && (this._modalOrigAlpha = this._spModal.alpha,
                            n.addClickListener(this._spModal, this.onModalClick, this)), this._btnClose && n.addClickListener(this._btnClose, this.onCloseClick, this),
                        _get(_getPrototypeOf(AbstractPopupView.prototype), "onDeploy", this).call(this);
                }
            }, {
                key: "clearTween",
                value: function () {
                    Laya.Tween.clearAll(this._spModal), Laya.Tween.clearAll(this._spView), Laya.timer.clear(this, this.checkHideComplete),
                        this._showTl && (this._showTl.destroy(), this._showTl = void 0);
                }
            }, {
                key: "show",
                value: function () {
                    if (!this._isShowing) if (o.isWorldCanClick = !1, this._isShowing = !0, this.clearTween(),
                        this._needPopupEffect) {
                        var e = Laya, t = e.Tween, i = e.TimeLine;
                        this._spModal && (this._spModal.alpha = 0, t.to(this._spModal, {
                            alpha: this._modalOrigAlpha
                        }, 200)), this._spView.alpha = 1, this._spView.scaleX = this._viewScaleXOrig, this._spView.scaleY = this._viewScaleYOrig,
                            o.layerPopup.addChild(this);
                        var a = new i();
                        a.to(this._spView, {
                            scaleX: 1.1 * this._viewScaleXOrig,
                            scaleY: 1.1 * this._viewScaleYOrig
                        }, 110).to(this._spView, {
                            scaleX: this._viewScaleXOrig,
                            scaleY: this._viewScaleYOrig
                        }, 110), a.play(0), a.on(Laya.Event.COMPLETE, this, this.onShowComplete), this._showTl = a;
                    } else o.layerPopup.addChild(this), this.onShowComplete();
                }
            }, {
                key: "checkHideComplete",
                value: function () {
                    this.parent && this.onHideComplete();
                }
            }, {
                key: "onShowComplete",
                value: function () {
                    this._spModal && (this._spModal.alpha = this._modalOrigAlpha), o.isWorldCanClick = !0;
                }
            }, {
                key: "hide",
                value: function () {
                    if (this._isShowing) if (o.isWorldCanClick = !1, this._isShowing = !1, this.clearTween(),
                        this._needPopupEffect) {
                        var e = Laya.Tween;
                        this._spModal && e.to(this._spModal, {
                            alpha: 0
                        }, 150), e.to(this._spView, {
                            scaleX: .01,
                            scaleY: .01,
                            alpha: 0
                        }, 200, null, new Laya.Handler(this, this.onHideComplete)), Laya.timer.once(1e3, this, this.checkHideComplete);
                    } else this.onHideComplete();
                }
            }, {
                key: "onHideComplete",
                value: function () {
                    this.clearTween(), this.removeSelf(), o.isWorldCanClick = !0;
                }
            }, {
                key: "isShowing",
                get: function () {
                    return this._isShowing;
                }
            }]), AbstractPopupView;
        }(), R = function () {
            function AbstractView(e, t, i) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = arguments.length > 4 ? arguments[4] : void 0;
                _classCallCheck(this, AbstractView), this._model = e, this._controller = t, this._sceneUrl = i,
                    this._viewZorder = a, this._specifiedParent = n, this._isShowing = !1, this._popupViewsDic = {};
            }
            return _createClass(AbstractView, [{
                key: "bindPopUpChildView",
                value: function (e, t) {
                    var i = this, a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    if (!(e in this._popupViewsDic)) {
                        var r = {
                            url: e,
                            state: "invalid",
                            modelEvent: t.toString(),
                            needPopupEffect: a,
                            zorder: n,
                            propEqualValue: o
                        }, s = function () {
                            i.onModelPropertyChanged(r);
                        };
                        r.eventHandler = s, this._model.on(t, s, null), this._popupViewsDic[e] = r;
                    }
                }
            }, {
                key: "onModelPropertyChanged",
                value: function (t) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee32() {
                        var i;
                        return regeneratorRuntime.wrap(function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    if (!(this._model[t.modelEvent] === t.propEqualValue)) {
                                        a.next = 14;
                                        break;
                                    }
                                    if ("valid" !== t.state || !t.view) {
                                        a.next = 6;
                                        break;
                                    }
                                    this.try2ShowPopup(t), a.next = 12;
                                    break;

                                case 6:
                                    if ("invalid" !== t.state) {
                                        a.next = 12;
                                        break;
                                    }
                                    return t.state = "isLoading", a.next = 10, n.asyncLoadScene(t.url);

                                case 10:
                                    (i = a.sent) instanceof L ? (i.deployPopup(this._model, this._controller, t.needPopupEffect),
                                        i.onDeploy(), t.view = i, i.zOrder = t.zorder, t.state = "valid", this.try2ShowPopup(t)) : e.throwNormalError("弹窗界面必须继承AbstractPopupView：".concat(t.url));

                                case 12:
                                    a.next = 15;
                                    break;

                                case 14:
                                    "valid" === t.state && t.view && t.view.hide();

                                case 15:
                                case "end":
                                    return a.stop();
                            }
                        }, _callee32, this);
                    }));
                }
            }, {
                key: "try2ShowPopup",
                value: function (e) {
                    "valid" === e.state && e.view && this._model[e.modelEvent] && e.view.show();
                }
            }, {
                key: "deploy",
                value: function () {
                    this.bindPopupViews();
                }
            }, {
                key: "show",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee33() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.isShowing) {
                                        t.next = 11;
                                        break;
                                    }
                                    if (this._isShowing = !0, this._viewAssset) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.next = 5, n.asyncLoadScene(this._sceneUrl, e);

                                case 5:
                                    this._viewAssset = t.sent, this._viewAssset.zOrder = this._viewZorder, this._viewAssset instanceof C && (this._viewAssset.deploy(this._model, this._controller),
                                        this._viewAssset.onDeploy());

                                case 8:
                                    (this._specifiedParent || o.layerScene).addChild(this._viewAssset), this.onShowComplete();

                                case 11:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee33, this);
                    }));
                }
            }, {
                key: "onShowComplete",
                value: function () { }
            }, {
                key: "hide",
                value: function () {
                    this.isShowing && this._viewAssset && (this._viewAssset.removeSelf(), this._isShowing = !1);
                }
            }, {
                key: "destroy",
                value: function () {
                    var e, t;
                    if (this._model) {
                        for (var i in this.hide(), null === (e = this._viewAssset) || void 0 === e || e.destroy(!0),
                            this._popupViewsDic) null === (t = this._popupViewsDic[i].view) || void 0 === t || t.destroy(!0);
                        this._model.offAllCaller(this), this._model = void 0, this._popupViewsDic = void 0;
                    }
                }
            }, {
                key: "isShowing",
                get: function () {
                    return this._isShowing;
                }
            }]), AbstractView;
        }(), b = function (e) {
            function YLSplashView(e, t) {
                return _classCallCheck(this, YLSplashView), _possibleConstructorReturn(this, _getPrototypeOf(YLSplashView).call(this, e, t, "sdk_youling/base/view/YLSplash.json", 0, o.layerSplash));
            }
            return _inherits(YLSplashView, R), _createClass(YLSplashView, [{
                key: "bindPopupViews",
                value: function () { }
            }]), YLSplashView;
        }(), P = function () {
            function AbstractController() {
                _classCallCheck(this, AbstractController);
            }
            return _createClass(AbstractController, [{
                key: "destroy",
                value: function () {
                    this._model.offAllCaller(this);
                }
            }]), AbstractController;
        }(), A = function (e) {
            function YLSplashController(e) {
                var t;
                return _classCallCheck(this, YLSplashController), (t = _possibleConstructorReturn(this, _getPrototypeOf(YLSplashController).call(this)))._model = e,
                    t;
            }
            return _inherits(YLSplashController, P), _createClass(YLSplashController, [{
                key: "start",
                value: function () {
                    Laya.timer.frameLoop(1, this, this.onNProgressInc);
                }
            }, {
                key: "onNProgressInc",
                value: function () {
                    var e = 0, t = this._model.percent;
                    e = 16 * (e = t >= 0 && t < .2 ? .1 : t >= .2 && t < .5 ? .04 : t >= .5 && t < .8 ? .02 : t >= .8 && t < .99 ? .005 : 0) / 200,
                        this._model.percent += e;
                }
            }, {
                key: "done",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee35() {
                        var t = this;
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", new Promise(function (i) {
                                        var a = {
                                            value: 0
                                        };
                                        Laya.timer.clear(t, t.onNProgressInc), a.value = t._model.percent;
                                        Laya.Tween.to(a, {
                                            value: 1,
                                            update: new Laya.Handler(void 0, function () {
                                                return t._model.percent = a.value;
                                            })
                                        }, e, Laya.Ease.linearNone, Laya.Handler.create(void 0, function () {
                                            return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee34() {
                                                return regeneratorRuntime.wrap(function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, g.sleep(50);
                                                        case 2:
                                                            i();
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                                }, _callee34, this);
                                            }));
                                        }));
                                    }));

                                case 1:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee35, this);
                    }));
                }
            }]), YLSplashController;
        }(), x = function (e) {
            function YLSplashModel() {
                var e;
                return _classCallCheck(this, YLSplashModel), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSplashModel).apply(this, arguments)))._percent = 0,
                    e;
            }
            return _inherits(YLSplashModel, v), _createClass(YLSplashModel, [{
                key: "percent",
                get: function () {
                    return this._percent;
                },
                set: function (e) {
                    this.try2Set("percent", e);
                }
            }]), YLSplashModel;
        }(), B = function () {
            function AbstractModule() {
                _classCallCheck(this, AbstractModule);
            }
            return _createClass(AbstractModule, [{
                key: "show",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee36() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.isShowing) {
                                        t.next = 4;
                                        break;
                                    }
                                    return this._view || (this.initMVC(), this._view.deploy()), t.next = 4, this._view.show(e);

                                case 4:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee36, this);
                    }));
                }
            }, {
                key: "hide",
                value: function () {
                    this.isShowing && this._view.hide();
                }
            }, {
                key: "isShowing",
                get: function () {
                    return !!this._view && this._view.isShowing;
                }
            }]), AbstractModule;
        }(), M = new (function (e) {
            function YLSplashModule() {
                return _classCallCheck(this, YLSplashModule), _possibleConstructorReturn(this, _getPrototypeOf(YLSplashModule).apply(this, arguments));
            }
            return _inherits(YLSplashModule, B), _createClass(YLSplashModule, [{
                key: "initMVC",
                value: function () {
                    this._model = new x(), this._controller = new A(this._model), this._view = new b(this._model, this._controller);
                }
            }, {
                key: "done",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee37() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.isShowing) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                case 2:
                                    return t.next = 4, this._controller.done(e);

                                case 4:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee37, this);
                    }));
                }
            }, {
                key: "destroy",
                value: function () {
                    this._model && (this._view.destroy(), this._controller.destroy(), this._model.destroy(),
                        this._view = void 0, this._controller = void 0, this._model = void 0);
                }
            }, {
                key: "curPercent",
                get: function () {
                    return this._model ? this._model.percent : 0;
                }
            }]), YLSplashModule;
        }())(), V = function (e) {
            function ShowSplashBean() {
                return _classCallCheck(this, ShowSplashBean), _possibleConstructorReturn(this, _getPrototypeOf(ShowSplashBean).call(this, "ShowSplashBean"));
            }
            return _inherits(ShowSplashBean, i), _createClass(ShowSplashBean, [{
                key: "start",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee38() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return Ue.data.splashShowTime = Date.now(), e.next = 3, M.show();

                                case 3:
                                    _.getInitConfig().then(this.onGetInitConfig.bind(this));

                                case 4:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee38, this);
                    }));
                }
            }, {
                key: "onGetInitConfig",
                value: function (e) {
                    console.log("ShowSplashBean onGetInitConfig $versionConfig:", e), Ue.data.versionConfig = e,
                        e && w.checkSceneBlacklist(), this.finish();
                }
            }]), ShowSplashBean;
        }(), I = function (e) {
            function LoginBean() {
                return _classCallCheck(this, LoginBean), _possibleConstructorReturn(this, _getPrototypeOf(LoginBean).call(this, "LoginBean"));
            }
            return _inherits(LoginBean, i), _createClass(LoginBean, [{
                key: "start",
                value: function () {
                    w.login().then(this.onLoginResult.bind(this)), this.finish();
                }
            }, {
                key: "onLoginResult",
                value: function (e) {
                    if (!e) return console.log("登录失败！");
                    console.log("登录成功，头像：", e.userInfo.avatar), Ue.data.token = e.token, "loading" !== Ue.config.authorTime || e.userInfo.avatar ? Ue.data.userInfo = e.userInfo : w.authorize(),
                        this.cookLoginData(e), _.reqGetAvatar(), _.reqWorldRank(), w.postMsg2OpenData(t.ReqMyInfo);
                    w.postMsg2OpenData(t.Rank, {
                        rankKey: "friend"
                    }), w.checkSceneBlacklist();
                }
            }, {
                key: "cookLoginData",
                value: function (e) {
                    var t, i;
                    Ue.data.versionConfig = e.versionConfig;
                    var a = {};
                    null === (t = e.shareContent) || void 0 === t || t.forEach(function (e) {
                        var t = a[e.share_type];
                        t || (a[e.share_type] = t = []), t.push(e);
                    }), Ue.data.shareInfoDic = a;
                    var n = {};
                    null === (i = e.wxappList) || void 0 === i || i.forEach(function (e) {
                        var t = n[e.category];
                        t || (n[e.category] = t = []), t.push(e);
                    }), Ue.data.appListDic = n;
                }
            }]), LoginBean;
        }(), T = function (e) {
            function LoadSubPackagesBean() {
                return _classCallCheck(this, LoadSubPackagesBean), _possibleConstructorReturn(this, _getPrototypeOf(LoadSubPackagesBean).call(this, "LoadSubPackagesBean"));
            }
            return _inherits(LoadSubPackagesBean, i), _createClass(LoadSubPackagesBean, [{
                key: "start",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee39() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, w.loadSubpackages(Ue.config.load.subpackages, void 0);

                                case 2:
                                    Ue.data.isAllSubpackagesLoaded = !0, this.finish();

                                case 4:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee39, this);
                    }));
                }
            }]), LoadSubPackagesBean;
        }();
        !function (e) {
            e.Unknown = "Unknown", e.VIEW_Main = "sdk_youling/lite/view/YLMain.json", e.VIEW_Home = "sdk_youling/lite/view/YLHome.json",
                e.VIEW_Game = "sdk_youling/common/view/YLGame.json", e.VIEW_Store = "sdk_youling/common/view/YLStore.json",
                e.POPUP_Favorite = "sdk_youling/common/view/YLFavorite.json", e.POPUP_MoreGame = "sdk_youling/lite/view/YLMoreGame.json",
                e.POPUP_Rank = "sdk_youling/common/view/YLRank.json", e.VIEW_CrazyClick = "sdk_youling/common/view/YLCrazyClick.json",
                e.VIEW_BoxClick = "sdk_youling/common/view/YLTreasureBox.json", e.POPUP_Newbie = "sdk_youling/common/view/YLNewbie.json",
                e.VIEW_SearchPlayer = "sdk_youling/common/view/YLSearchPlayer.json", e.VIEW_SearchVSPlayer = "sdk_youling/common/view/YLSearchVSPlayer.json",
                e.VIEW_Skin = "sdk_youling/common/view/YLSkin.json", e.VIEW_Reborn = "sdk_youling/common/view/YLReborn.json",
                e.VIEW_SystemAppList = "sdk_youling/common/view/YLSystemAppList.json", e.VIEW_Result = "sdk_youling/common/view/YLResult.json",
                e.VIEW_BackHome = "sdk_youling/lite/view/YLBackHome.json", e.VIEW_BeginGame = "sdk_youling/lite/view/YLBeginGame.json";
        }(f || (f = {}));
        var D, O = Object.assign({}, f), Y = new h();
        !function (e) {
            e.S2G_INIT_GAME_READY = "S2G_INIT_GAME_READY", e.G2S_INIT_GAME_READY_SUCCESS = "G2S_INIT_GAME_READY_SUCCESS",
                e.S2G_BEGIN_GAME = "S2G_BEGIN_GAME", e.G2S_GAME_FAIL = "G2S_GAME_FAIL", e.S2G_REBORN_GAME_READY = "S2G_REBORN_GAME_READY",
                e.G2S_REBORN_GAME_READY_SUCCESS = "G2S_REBORN_GAME_READY_SUCCESS", e.S2G_RESET_GAME_READY = "S2G_RESET_GAME_READY",
                e.G2S_RESET_GAME_READY_SUCCESS = "G2S_RESET_GAME_READY_SUCCESS", e.S2G_USE_SKIN = "S2G_USE_SKIN",
                e.G2S_UPDATE_CUR_SCORE = "G2S_UPDATE_CUR_SCORE", e.S2G_PLAYER_SEARCHED = "S2G_PLAYER_SEARCHED",
                e.S2G_ON_CRAZY_CLICK = "S2G_ON_CRAZY_CLICK", e.S2G_STACK_VIEW_BEFORE_EACH = "S2G_STACK_VIEW_BEFORE_EACH",
                e.G2S_STACK_VIEW_BEFORE_EACH_SUCCESS = "G2S_STACK_VIEW_BEFORE_EACH_SUCCESS";
        }(D || (D = {}));
        var E = function (e) {
            function YLMainModel() {
                var e;
                return _classCallCheck(this, YLMainModel), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLMainModel).apply(this, arguments)))._isNewbieShowing = !1,
                    e._isFavoriteShowing = !1, e._isMoreGameShowing = !1, e._isVideoUseSkin = !0, e._rebornCount = 0,
                    e._playerHeads = [], e._playerNames = [], e._curSearchPlayerIndex = NaN, e._rankTabKey = "friend",
                    e._isRankShowing = !1, e._isShowingGamePlayerRank = !1, e._isShowingGamePlayerOver = !1,
                    e._hasGameBegan = !1, e._overWorldRankCached = {}, e._curStackView = O.Unknown,
                    e._preStackView = O.Unknown, e._hasCrazyClickFinish = !1, e._boxClickNumber = 0,
                    e._percentOnCrazyClick = 0, e.targetPercentOnCrazyClick = .8, e._percentOnBoxClick = 0,
                    e.targetPercentOnBoxClick = .8, e._gameListBanner = !1, e._doChangeCurStackView = function (t, i) {
                        e.try2Set("curStackView", i), t !== i && (e._preStackView = t);
                    }, e;
            }
            return _inherits(YLMainModel, v), _createClass(YLMainModel, [{
                key: "reset",
                value: function () {
                    this._preStackView = O.Unknown, this.hasCrazyClickFinish = !1, this.rebornCount = 0,
                        this.percentOnCrazyClick = 0, this.hasGameBegan = !1, this.isVideoUseSkin = !0,
                        this._overWorldRankCached = {}, this._curSearchPlayerIndex = NaN, this.isShowingGamePlayerRank = !1,
                        this.isShowingGamePlayerOver = !1;
                }
            }, {
                key: "setPreviewSkin",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.try2Set("previewShopItem", e, t);
                }
            }, {
                key: "hasCrazyClickFinish",
                get: function () {
                    return this._hasCrazyClickFinish;
                },
                set: function (e) {
                    this.try2Set("hasCrazyClickFinish", e);
                }
            }, {
                key: "percentOnCrazyClick",
                get: function () {
                    return this._percentOnCrazyClick;
                },
                set: function (e) {
                    this.try2Set("percentOnCrazyClick", e);
                }
            }, {
                key: "boxClickNumber",
                get: function () {
                    return this._boxClickNumber;
                },
                set: function (e) {
                    this.try2Set("boxClickNumber", e);
                }
            }, {
                key: "percentOnBoxClick",
                get: function () {
                    return this._percentOnBoxClick;
                },
                set: function (e) {
                    this.try2Set("percentOnBoxClick", e);
                }
            }, {
                key: "preStackView",
                get: function () {
                    return this._preStackView;
                }
            }, {
                key: "gameListBanner",
                get: function () {
                    return this._gameListBanner;
                },
                set: function (e) {
                    this.try2Set("gameListBanner", e, !0);
                }
            }, {
                key: "curStackView",
                get: function () {
                    return this._curStackView;
                },
                set: function (e) {
                    var t = this, i = this._curStackView;
                    if (i !== e) if (Y.hasListener(D.S2G_STACK_VIEW_BEFORE_EACH)) {
                        Y.once(D.G2S_STACK_VIEW_BEFORE_EACH_SUCCESS, function () {
                            t._doChangeCurStackView(i, e);
                        }, void 0), this.try2Set("curStackView", O.Unknown);
                        var a = {
                            from: i,
                            to: e
                        };
                        Y.emit(D.S2G_STACK_VIEW_BEFORE_EACH, a);
                    } else this._doChangeCurStackView(i, e);
                }
            }, {
                key: "overWorldRankCached",
                get: function () {
                    return this._overWorldRankCached;
                },
                set: function (e) {
                    this._overWorldRankCached = e;
                }
            }, {
                key: "hasGameBegan",
                get: function () {
                    return this._hasGameBegan;
                },
                set: function (e) {
                    this.try2Set("hasGameBegan", e);
                }
            }, {
                key: "storeUnlockResult",
                get: function () {
                    return this._storeUnlockResult;
                },
                set: function (e) {
                    this.try2Set("storeUnlockResult", e);
                }
            }, {
                key: "isShowingGamePlayerOver",
                get: function () {
                    return this._isShowingGamePlayerOver;
                },
                set: function (e) {
                    this.try2Set("isShowingGamePlayerOver", e);
                }
            }, {
                key: "isShowingGamePlayerRank",
                get: function () {
                    return this._isShowingGamePlayerRank;
                },
                set: function (e) {
                    this.try2Set("isShowingGamePlayerRank", e);
                }
            }, {
                key: "rankTabKey",
                get: function () {
                    return this._rankTabKey;
                },
                set: function (e) {
                    this.try2Set("rankTabKey", e);
                }
            }, {
                key: "isRankShowing",
                get: function () {
                    return this._isRankShowing;
                },
                set: function (e) {
                    this.try2Set("isRankShowing", e);
                }
            }, {
                key: "curSelectedInStore",
                get: function () {
                    return this._curSelectedInStore;
                },
                set: function (e) {
                    this.try2Set("curSelectedInStore", e);
                }
            }, {
                key: "previewShopItem",
                get: function () {
                    return this._previewShopItem;
                }
            }, {
                key: "curSearchPlayerIndex",
                get: function () {
                    return this._curSearchPlayerIndex;
                },
                set: function (e) {
                    this.try2Set("curSearchPlayerIndex", e);
                }
            }, {
                key: "playerNames",
                get: function () {
                    return this._playerNames;
                },
                set: function (e) {
                    this.try2Set("playerNames", e);
                }
            }, {
                key: "playerHeads",
                get: function () {
                    return this._playerHeads;
                },
                set: function (e) {
                    this.try2Set("playerHeads", e);
                }
            }, {
                key: "isVideoUseSkin",
                get: function () {
                    return this._isVideoUseSkin;
                },
                set: function (e) {
                    this.try2Set("isVideoUseSkin", e);
                }
            }, {
                key: "isMoreGameShowing",
                get: function () {
                    return this._isMoreGameShowing;
                },
                set: function (e) {
                    this.try2Set("isMoreGameShowing", e);
                }
            }, {
                key: "isFavoriteShowing",
                get: function () {
                    return this._isFavoriteShowing;
                },
                set: function (e) {
                    this.try2Set("isFavoriteShowing", e);
                }
            }, {
                key: "rebornCount",
                get: function () {
                    return this._rebornCount;
                },
                set: function (e) {
                    this.try2Set("rebornCount", e);
                }
            }, {
                key: "isNewbieShowing",
                get: function () {
                    return this._isNewbieShowing;
                },
                set: function (e) {
                    this.try2Set("isNewbieShowing", e);
                }
            }]), YLMainModel;
        }(), G = function (e) {
            function YLMainController(e) {
                var t;
                return _classCallCheck(this, YLMainController), (t = _possibleConstructorReturn(this, _getPrototypeOf(YLMainController).call(this)))._model = e,
                    t.initEvents(), t;
            }
            return _inherits(YLMainController, P), _createClass(YLMainController, [{
                key: "gotoApp",
                value: function (e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee40() {
                        var t;
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    if (!e) {
                                        i.next = 9;
                                        break;
                                    }
                                    return i.next = 3, w.gotoApp(e);

                                case 3:
                                    if (i.sent) {
                                        i.next = 9;
                                        break;
                                    }
                                    if (t = this._model.curStackView, Ue.data.isAllSubpackagesLoaded) {
                                        i.next = 8;
                                        break;
                                    }
                                    return i.abrupt("return");

                                case 8:
                                    t === O.VIEW_Home ? (this._model.isMoreGameShowing = !1, this._model.curStackView = O.VIEW_Home)
                                        : t === O.VIEW_Reborn && (this.submitScore());

                                case 9:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee40, this);
                    }));
                }
            }, {
                key: "fixStoreItemInUse",
                value: function () {
                    var e = Ue.data, t = Ue.config, i = e.storeItemIdInUse, a = t.storeItems.find(function (e) {
                        return e.isDefault;
                    });
                    if (isNaN(i)) i = null == a ? void 0 : a.id; else {
                        var n = t.storeItems.find(function (e) {
                            return e.id === i;
                        });
                        n && this.isStoreItemBought(n) || (i = null == a ? void 0 : a.id);
                    }
                    e.storeItemIdInUse = i;
                    var o = t.storeItems.find(function (e) {
                        return e.id === i;
                    });
                    o && (Y.emit(D.S2G_USE_SKIN, o), this._model.curSelectedInStore = o);
                }
            }, {
                key: "closeStoreTry2UseSkin",
                value: function () {
                    this._model.curStackView = O.VIEW_Home;
                    var e = this._model.curSelectedInStore;
                    e && this.isStoreItemBought(e) && (Ue.data.storeItemIdInUse = e.id, Y.emit(D.S2G_USE_SKIN, e));
                }
            }, {
                key: "doUnlockStoreItem",
                value: function (e) {
                    if (this.isStoreItemBought(e.item)) return w.toastMsg("操作失败，该商品已购买！");
                    if (Ue.data.gold < e.cost) return w.toastMsg("操作失败，金币不足！");
                    this._model.curSelectedInStore = e.item, Ue.data.gold -= e.cost;
                    var t = Ue.data.ownStoreItemIds.concat();
                    t.push(e.item.id.toString()), Ue.data.ownStoreItemIds = t, w.toastMsg("恭喜获得新皮肤！");
                }
            }, {
                key: "randomUnlockStoreItem",
                value: function () {
                    var e = this.getStoreItemsCanBuy();
                    if (e.length <= 0) w.toastMsg("操作失败，没有商品可以购买！"); else {
                        var t = this.calStoreRandomUnlockGold();
                        t > Ue.data.gold ? platform.getInstance().prompt("Coin Needed") : this._model.storeUnlockResult = {
                            item: c.randomOne(e),
                            cost: t
                        };
                    }
                }
            }, {
                key: "getStoreItemsCanBuy",
                value: function () {
                    var e = this;
                    return Ue.config.storeItems.filter(function (t) {
                        return !e.isStoreItemBought(t);
                    });
                }
            }, {
                key: "calStoreRandomUnlockGold",
                value: function () {
                    var e = this.getStoreItemsCanBuy();
                    return Ue.config.storeRandomUnlockGold(e.length);
                }
            }, {
                key: "isStoreItemBought",
                value: function (e) {
                    return e.isDefault || -1 !== Ue.data.ownStoreItemIds.indexOf(e.id.toString());
                }
            }, {
                key: "try2ShowBeginGame",
                value: function () {
                    // this._model.curStackView = O.VIEW_BeginGame;
                }
            }, {
                key: "watchVideo2GetGold",
                value: function () {
                    platform.getInstance().showReward(() => {
                        (Ue.data.gold += Ue.config.storeVideoUnlockGold)
                    })
                }
            }, {
                key: "watchVideo2UseSkin",
                value: function () {
                    platform.getInstance().showReward(() => {
                        Y.emit(D.S2G_USE_SKIN, this._model.previewShopItem),
                            this.try2ShowSearchPlayer()
                    })
                }
            }, {
                key: "watchVideo2Reborn",
                value: function () {
                    platform.getInstance().showReward(() => {
                        this.doReborn()
                    })
                }
            }, {
                key: "skipReborn",
                value: function (e) {
                    var t = Ue.data, i = t.hasWrongClickOnBtnSkipReborn, a = t.versionConfig;
                    !e && (null == a ? void 0 : a.skip_video) && !i ? (Ue.data.hasWrongClickOnBtnSkipReborn = !0,
                        this.watchVideo2Reborn(!0)) : this.onGameEnd();
                }
            }, {
                key: "onGameEnd",
                value: function () {
                    var e;
                    w.postMsg2OpenData(t.Reset), (null === (e = Ue.data.versionConfig) || void 0 === e ? void 0 : e.page_control) ? this._model.curStackView = O.VIEW_SystemAppList : this.try2ShowResult();
                }
            }, {
                key: "try2ShowResult",
                value: function () {
                    this._model.curStackView = O.VIEW_Result, Ue.data.isOnGame = !1;
                }
            }, {
                key: "doReborn",
                value: function () {
                    this._model.rebornCount++, Y.emit(D.S2G_REBORN_GAME_READY), this.try2ShowNewbie();
                }
            }, {
                key: "try2Replay",
                value: function () {
                    this._model.reset(), this._model.curStackView === O.VIEW_Result && Y.emit(D.S2G_RESET_GAME_READY),
                        this.try2ShowSkin(!0);
                }
            }, {
                key: "try2ShowBackHome",
                value: function () {
                    // this._model.curStackView = O.VIEW_BackHome, Y.emit(D.S2G_RESET_GAME_READY);
                }
            }, {
                key: "try2GotoHome",
                value: function () {
                    this._model.reset(), this._model.curStackView = O.VIEW_Home;
                }
            }, {
                key: "onG2SGameFail",
                value: function () {
                    console.log("游戏失败 onG2SGameFail"), this._model.curStackView = O.VIEW_Reborn;
                }
            }, {
                key: "doGameFail",
                value: function () {
                    _.reqGetAvatar(), this._model.rebornCount >= Ue.config.rebornMax ? this.onGameEnd() : this._model.curStackView = O.VIEW_Reborn;
                }
            }, {
                key: "try2ShowSkin",
                value: function (e) {
                    var t;
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee44() {
                        var i, a, n = this;
                        return regeneratorRuntime.wrap(function (o) {
                            for (; ;) switch (o.prev = o.next) {
                                case 0:
                                    if (Ue.data.round++, Ue.data.hasGameInit) {
                                        o.next = 3;
                                        break;
                                    }
                                    return o.abrupt("return", w.toastMsg("请耐心等待，游戏正在努力加载中~"));

                                case 3:
                                    var i = function () {
                                        var e, t, i = n.getStoreItemsCanBuy(), a = c.randomOne(i);
                                        a && !Ue.config.isVerify && (null === (t = null === (e = Ue.data) || void 0 === e ? void 0 : e.versionConfig)
                                            || void 0 === t ? void 0 : t.delay) ? (n._model.isVideoUseSkin = w.isSupportVideoAd,
                                                n._model.setPreviewSkin(a), n._model.curStackView = O.VIEW_Skin) : n.try2ShowSearchPlayer();
                                    }, a = function () {
                                        var e, t;
                                        Ue.data.isAfterBox = !0, 1 == (null === (t = null === (e = Ue.data) || void 0 === e ? void 0 : e.versionConfig)
                                            || void 0 === t ? void 0 : t.treasure_box) ? n.try2ShowBoxClick() : i();
                                    }
                                    o.next = 11;
                                    break;
                                case 8:
                                    a(), o.next = 12;
                                    break;

                                case 11:
                                    a();

                                case 12:
                                case "end":
                                    return o.stop();
                            }
                        }, _callee44, this);
                    }));
                }
            }, {
                key: "try2ShowSearchPlayer",
                value: function () {
                    // var e = Ue.config, t = e.needSearchPlayer, i = e.searchPlayerMode;
                    // t ? (this.cookPlayerHeads(), this._model.curStackView = 2 === i ? O.VIEW_SearchVSPlayer : O.VIEW_SearchPlayer) : 
                    this.try2ShowNewbie();
                }
            }, {
                key: "cookPlayerHeads",
                value: function () {
                    if (Ue.config.needSearchPlayer) {
                        var e = Ue.data.playerNamesPool.concat();
                        c.disturb(e), this._model.playerNames = e.slice(0, Ue.config.numSearchPlayer);
                        var t = Ue.data.playerHeadsPool.concat();
                        c.disturb(t), this._model.playerHeads = t.slice(0, Ue.config.numSearchPlayer);
                    }
                }
            }, {
                key: "try2ShowNewbie",
                value: function () {
                    Ue.config.noNewbie ? this.try2ShowCrazyClick() : (this._model.curStackView = O.Unknown,
                        this._model.isNewbieShowing = !0);
                }
            }, {
                key: "tick2CoolDownBoxClick",
                value: function () {
                    this._model.percentOnBoxClick = Math.max(this._model.percentOnBoxClick - .01, 0);
                }
            }, {
                key: "boxClick",
                value: function () {
                    var e = this;
                    if (this._model.curStackView === O.VIEW_BoxClick) {
                        this._model.percentOnBoxClick = a.calValueBetween(this._model.percentOnBoxClick + .1, 0, 1);
                        var t = this._model.boxClickNumber;
                        this._model.boxClickNumber = t + 1;
                        var i, n, o = 2 == this._model.boxClickNumber, r = 6 == this._model.boxClickNumber, s = this._model.percentOnBoxClick >= .9;
                        if (r) {
                            var l = y.showBanner();
                            Laya.timer.once(2e3, this, function () {
                                return y.hideBanner(l);
                            });
                        } else if (o) Laya.timer.loop(1e3 / 60, this, this.tick2CoolDownBoxClick); else if (s) if (Ue.data.gold += Ue.config.BoxUnlockGold,
                            Laya.timer.clear(this, this.tick2CoolDownBoxClick), Ue.data.isAfterBox) {
                            i = e.getStoreItemsCanBuy(), (n = c.randomOne(i)) && !Ue.config.isVerify && Ue.data.versionConfig.delay ? (e._model.isVideoUseSkin = w.isSupportVideoAd,
                                e._model.setPreviewSkin(n), e._model.curStackView = O.VIEW_Skin) : e.try2ShowSearchPlayer();
                        } else this.try2GotoHome();
                    }
                }
            }, {
                key: "try2ShowBoxClick",
                value: function () {
                    this._model.curStackView = O.VIEW_BoxClick, this._model.percentOnBoxClick = 0, this._model.targetPercentOnBoxClick = .8;
                }
            }, {
                key: "try2ShowCrazyClick",
                value: function () {
                    this._model.isNewbieShowing = !1;
                    var e = Ue.data.round, t = Ue.data.versionConfig || {}, i = t.show_quicken, n = t.quicken_num;
                    !this._model.rebornCount && i && (!(null == n ? void 0 : n.length) || 1 === n.length && 0 === n[0] || -1 !== n.indexOf(e)) ?
                        (this._model.curStackView = O.VIEW_CrazyClick,
                            this._model.percentOnCrazyClick = 0, this._model.targetPercentOnCrazyClick = a.randomBetween(.4, .7),
                            Laya.timer.loop(1e3 / 60, this, this.tick2CoolDownCrazyClick)) : this.try2BeginGame();
                }
            }, {
                key: "tick2CoolDownCrazyClick",
                value: function () {
                    this._model.percentOnCrazyClick = Math.max(this._model.percentOnCrazyClick - .01, 0);
                }
            }, {
                key: "crazyClick",
                value: function () {
                    if (this._model.curStackView === O.VIEW_CrazyClick) {
                        this._model.percentOnCrazyClick = a.calValueBetween(this._model.percentOnCrazyClick + .1, 0, 1);
                        var e = this._model.percentOnCrazyClick >= this._model.targetPercentOnCrazyClick, t = {
                            isFinish: e,
                            percent: this._model.percentOnCrazyClick
                        };
                        if (Y.emit(D.S2G_ON_CRAZY_CLICK, t), e && !this._model.hasCrazyClickFinish) {
                            this._model.hasCrazyClickFinish = !0;
                            var i = y.showBanner();
                            Laya.timer.once(2e3, this, function () {
                                return y.hideBanner(i);
                            }), Laya.timer.clear(this, this.tick2CoolDownCrazyClick), Laya.timer.once(1e3, this, this.try2BeginGame);
                        }
                    }
                }
            }, {
                key: "try2BeginGame",
                value: function () {
                    this._model.hasCrazyClickFinish = !1, this._model.curStackView = O.VIEW_Game, Y.emit(D.S2G_BEGIN_GAME),
                        Ue.data.isOnGame = !0, this._model.hasGameBegan || (this._model.isShowingGamePlayerRank = !0),
                        this._model.hasGameBegan = !0;
                }
            }, {
                key: "submitScore",
                value: function () {
                    var e = Ue.data.curScore;
                    w.submitScore(e), _.reqUpdateScore(e);
                    var t = Ue.config.score2Gold(e);
                    Ue.data.gold += t;
                }
            }, {
                key: "findCurSelectedSkinInStore",
                value: function () {
                    if (!this._model.curSelectedInStore) {
                        var e = Ue.config.storeItems.find(function (e) {
                            return e.isDefault;
                        });
                        this._model.curSelectedInStore = e;
                    }
                }
            }, {
                key: "onG2SCurScore",
                value: function (e) {
                    var i = e.value.curScore;
                    if (Ue.data.curScore !== i && (Ue.data.curScore = i, this._model.isShowingGamePlayerOver)) {
                        var a = this._model.overWorldRankCached, n = [], o = Ue.config.overPlayerQueueMax;
                        Ue.data.worldRanks.forEach(function (e) {
                            e.avatarUrl && e.score < i && !a[e.avatarUrl] && (a[e.avatarUrl] = !0, n.length < 1 && n.push(e));
                        }), n.length && (n.reverse(), n.forEach(function (e) {
                            var i = {
                                score: e.score,
                                playerUrl: e.avatarUrl,
                                queueMax: o
                            };
                            w.postMsg2OpenData(t.CheckOverPlayer, {
                                data: i
                            });
                        }));
                        var r = {
                            score: i,
                            queueMax: o
                        };
                        w.postMsg2OpenData(t.CheckOverPlayer, {
                            data: r
                        });
                    }
                }
            }, {
                key: "onG2SGameResetReadySuccess",
                value: function () {
                    this.fixStoreItemInUse();
                }
            }, {
                key: "initEvents",
                value: function () {
                    Y.on(D.G2S_RESET_GAME_READY_SUCCESS, this.onG2SGameResetReadySuccess, this), Y.on(D.G2S_GAME_FAIL, this.onG2SGameFail, this),
                        Y.on(D.G2S_UPDATE_CUR_SCORE, this.onG2SCurScore, this);
                }
            }]), YLMainController;
        }(), N = function (e) {
            function YLMainView(e, t) {
                return _classCallCheck(this, YLMainView), _possibleConstructorReturn(this, _getPrototypeOf(YLMainView).call(this, e, t, O.VIEW_Main, 0));
            }
            return _inherits(YLMainView, R), _createClass(YLMainView, [{
                key: "bindPopupViews",
                value: function () {
                    this.bindPopUpChildView(O.POPUP_Favorite, "isFavoriteShowing", !0), this.bindPopUpChildView(O.POPUP_MoreGame, "isMoreGameShowing", !0),
                        this.bindPopUpChildView(O.POPUP_Rank, "isRankShowing", !0), this.bindPopUpChildView(O.POPUP_Newbie, "isNewbieShowing", !0),
                        this.bindPopUpChildView(O.VIEW_Home, "curStackView", !1, 0, O.VIEW_Home), this.bindPopUpChildView(O.VIEW_Game, "curStackView", !1, 0, O.VIEW_Game),
                        this.bindPopUpChildView(O.VIEW_Store, "curStackView", !1, 1, O.VIEW_Store), this.bindPopUpChildView(O.VIEW_BoxClick, "curStackView", !1, 1, O.VIEW_BoxClick),
                        this.bindPopUpChildView(O.VIEW_SearchPlayer, "curStackView", !0, 0, O.VIEW_SearchPlayer),
                        this.bindPopUpChildView(O.VIEW_SearchVSPlayer, "curStackView", !1, 0, O.VIEW_SearchVSPlayer),
                        this.bindPopUpChildView(O.VIEW_Skin, "curStackView", !0, 0, O.VIEW_Skin), this.bindPopUpChildView(O.VIEW_CrazyClick, "curStackView", !1, 1, O.VIEW_CrazyClick),
                        this.bindPopUpChildView(O.VIEW_Reborn, "curStackView", !0, 0, O.VIEW_Reborn), this.bindPopUpChildView(O.VIEW_SystemAppList, "curStackView", !1, 0, O.VIEW_SystemAppList),
                        this.bindPopUpChildView(O.VIEW_Result, "curStackView", !0, 0, O.VIEW_Result), this.bindPopUpChildView(O.VIEW_BackHome, "curStackView", !1, 0, O.VIEW_BackHome),
                        this.bindPopUpChildView(O.VIEW_BeginGame, "curStackView", !1, 0, O.VIEW_BeginGame);
                }
            }]), YLMainView;
        }(), U = new (function (e) {
            function YLMainModule() {
                return _classCallCheck(this, YLMainModule), _possibleConstructorReturn(this, _getPrototypeOf(YLMainModule).apply(this, arguments));
            }
            return _inherits(YLMainModule, B), _createClass(YLMainModule, [{
                key: "show",
                value: function (e) {
                    var t = this, i = Object.create(null, {
                        show: {
                            get: function () {
                                return _get(_getPrototypeOf(YLMainModule.prototype), "show", t);
                            }
                        }
                    });
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee45() {
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, i.show.call(this, e);
                                case 2:
                                    loadProRes = true;
                                    this.isShowing && load3end && U.model.curStackView != O.VIEW_Home &&
                                        platform.getInstance().cargamesstartup("Drift-At-Will", () => {
                                            window.yad.offAll(Laya.Event.MOUSE_DOWN)
                                            window.yad.on(Laya.Event.MOUSE_DOWN, window.yad,
                                                (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                                            window.WebAudioEngine.pause = w.isMute;
                                            w.playBgm(!0)
                                            this._model.curStackView = O.VIEW_Home;
                                            M.destroy();
                                        })
                                case 3:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee45, this);
                    }));
                }
            }, {
                key: "initMVC",
                value: function () {
                    this._model = new E(), this._controller = new G(this._model), this._view = new N(this._model, this._controller);
                }
            }, {
                key: "model",
                get: function () {
                    return this._model;
                }
            }, {
                key: "controller",
                get: function () {
                    return this._controller;
                }
            }]), YLMainModule;
        }())(), H = function (e) {
            function ShowMainBean() {
                return _classCallCheck(this, ShowMainBean), _possibleConstructorReturn(this, _getPrototypeOf(ShowMainBean).call(this, "ShowMainBean"));
            }
            return _inherits(ShowMainBean, i), _createClass(ShowMainBean, [{
                key: "start",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee46() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, U.show();

                                case 2:
                                    this.finish();

                                case 3:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee46, this);
                    }));
                }
            }]), ShowMainBean;
        }(), F = function () {
            function DateUtils() {
                _classCallCheck(this, DateUtils);
            }
            return _createClass(DateUtils, null, [{
                key: "toSecondStr",
                value: function (e) {
                    return (e / 1e3).toFixed(2);
                }
            }, {
                key: "getDateString",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "yyyy-MM-dd HH:mm:ss", t = arguments.length > 1 ? arguments[1] : void 0, i = {
                        "M+": (t = t || new Date()).getMonth() + 1,
                        "d+": t.getDate(),
                        "H+": t.getHours(),
                        "h+": t.getHours(),
                        "m+": t.getMinutes(),
                        "s+": t.getSeconds(),
                        "q+": Math.floor((t.getMonth() + 3) / 3),
                        S: t.getMilliseconds()
                    };
                    for (var a in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))),
                        i) new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? i[a] : ("00" + i[a]).substr(("" + i[a]).length)));
                    return e;
                }
            }]), DateUtils;
        }(), W = new (function () {
            function YLMainManager() {
                _classCallCheck(this, YLMainManager);
            }
            return _createClass(YLMainManager, [{
                key: "deploy",
                value: function () { }
            }]), YLMainManager;
        }())(), X = function (e) {
            function InitAppBean() {
                return _classCallCheck(this, InitAppBean), _possibleConstructorReturn(this, _getPrototypeOf(InitAppBean).call(this, "InitAppBean"));
            }
            return _inherits(InitAppBean, i), _createClass(InitAppBean, [{
                key: "start",
                value: function () {
                    k.deploy(), w.deploy(), o.deploy(), y.deploy(), W.deploy(), this.finish();
                }
            }]), InitAppBean;
        }(), j = function (e) {
            function LoadResBean() {
                var e;
                return _classCallCheck(this, LoadResBean), (e = _possibleConstructorReturn(this, _getPrototypeOf(LoadResBean).call(this, "LoadResBean")))._curProgress = 0,
                    e;
            }
            return _inherits(LoadResBean, i), _createClass(LoadResBean, [{
                key: "start",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee47() {
                        var e, t;
                        return regeneratorRuntime.wrap(function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    if ((e = Ue.config.load.reses2Load) && e.length) {
                                        i.next = 5;
                                        break;
                                    }
                                    return console.log("没有资源需要预加载"), this.finish(), i.abrupt("return");

                                case 5:
                                    return this._curProgress = M.curPercent, t = e.map(function (e) {
                                        return "string" == typeof e ? e : e.url;
                                    }), i.next = 9, n.asyncCreateRes(t);

                                case 9:
                                    e.map(function (e) {
                                        "string" != typeof e && e.needLock && (Laya.loader.getRes(e.url).lock = !0);
                                    }), this.finish();

                                case 11:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee47, this);
                    }));
                }
            }]), LoadResBean;
        }(), z = function (e) {
            function InitGameBean() {
                return _classCallCheck(this, InitGameBean), _possibleConstructorReturn(this, _getPrototypeOf(InitGameBean).call(this, "InitGameBean"));
            }
            return _inherits(InitGameBean, i), _createClass(InitGameBean, [{
                key: "start",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee48() {
                        var e;
                        return regeneratorRuntime.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return Y.once(D.G2S_INIT_GAME_READY_SUCCESS, this.onInitGameReadySuccess, this),
                                        t.next = 3, n.asyncLoadScene(Ue.config.gameSceneUrl);

                                case 3:
                                    e = t.sent, o.layerScene.addChildAt(e, 0), Y.emit(D.S2G_INIT_GAME_READY);

                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee48, this);
                    }));
                }
            }, {
                key: "onInitGameReadySuccess",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee49() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    Ue.data.hasGameInit = !0, w.playBgm(), this.finish();

                                case 3:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee49, this);
                    }));
                }
            }]), InitGameBean;
        }(), q = function (e) {
            function LoadOpenDataResBean() {
                var e;
                return _classCallCheck(this, LoadOpenDataResBean), (e = _possibleConstructorReturn(this, _getPrototypeOf(LoadOpenDataResBean).call(this, "LoadOpenDataResBean")))._openDataRess = ["res/atlas/opendata/pic.atlas"],
                    e;
            }
            return _inherits(LoadOpenDataResBean, i), _createClass(LoadOpenDataResBean, [{
                key: "start",
                value: function () {
                    this.finish();
                }
            }, {
                key: "onResesLoaded",
                value: function () {
                    console.log("透传资源到开放域"), this._openDataRess.forEach(function (e) {
                        /\.atlas$/i.test(e) ? w.sendAtlasToOpenDataContext(e) : /\.json$/i.test(e) && w.sendJsonDataToDataContext(e);
                    }), w.postMsg2OpenData(t.LoadRes);
                }
            }]), LoadOpenDataResBean;
        }(), K = function (e) {
            function CheckStoreItemInUseBean() {
                return _classCallCheck(this, CheckStoreItemInUseBean), _possibleConstructorReturn(this, _getPrototypeOf(CheckStoreItemInUseBean).call(this, "CheckStoreItemInUseBean"));
            }
            return _inherits(CheckStoreItemInUseBean, i), _createClass(CheckStoreItemInUseBean, [{
                key: "start",
                value: function () {
                    U.controller.fixStoreItemInUse(), this.finish();
                }
            }]), CheckStoreItemInUseBean;
        }(), Z = function (e) {
            function LoadLiteSubPackageBean() {
                return _classCallCheck(this, LoadLiteSubPackageBean), _possibleConstructorReturn(this, _getPrototypeOf(LoadLiteSubPackageBean).call(this, "LoadLiteSubPackageBean"));
            }
            return _inherits(LoadLiteSubPackageBean, i), _createClass(LoadLiteSubPackageBean, [{
                key: "start",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee50() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, w.loadSubpackages([Ue.config.load.liteSubpackage], void 0);

                                case 2:
                                    this.finish();

                                case 3:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee50, this);
                    }));
                }
            }]), LoadLiteSubPackageBean;
        }(), Q = function (e) {
            function HideSplashBean() {
                return _classCallCheck(this, HideSplashBean), _possibleConstructorReturn(this, _getPrototypeOf(HideSplashBean).call(this, "HideSplashBean"));
            }
            return _inherits(HideSplashBean, i), _createClass(HideSplashBean, [{
                key: "start",
                value: function () {
                    M.done(200), console.log("【闪屏】闪屏显示时长：".concat(F.toSecondStr(Date.now() - Ue.data.splashShowTime))),
                        this.finish();
                }
            }]), HideSplashBean;
        }(), J = function () {
            function YLBeanLauncher() {
                _classCallCheck(this, YLBeanLauncher), this._beans = [], this._curBeanIndex = 0,
                    this._beanStartTime = 0, this._beans = [X, V, I, Z, H, Q, T, j, q, z, K];
            }
            return _createClass(YLBeanLauncher, [{
                key: "run",
                value: function () {
                    if (this._beanStartTime) {
                        var e = this._beans[this._curBeanIndex - 1];
                        console.log("[BEAN]执行 ".concat(e.name, " 完成，耗时：").concat(F.toSecondStr(Date.now() - this._beanStartTime),
                            " 秒。"));
                    }
                    if (this._curBeanIndex < this._beans.length) {
                        this._beanStartTime = Date.now();
                        var t = new (0, this._beans[this._curBeanIndex])();
                        t.dispatcher.once(Laya.Event.COMPLETE, this, this.run), this._curBeanIndex++,
                            console.log("[BEAN]正在执行bean：".concat(t.name))
                            , t.start();
                    } else console.log("[BEAN]所有bean全部执行完毕。");
                }
            }]), YLBeanLauncher;
        }(), $ = function (e) {
            function YLSplashRTView() {
                return _classCallCheck(this, YLSplashRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLSplashRTView).apply(this, arguments));
            }
            return _inherits(YLSplashRTView, C), _createClass(YLSplashRTView, [{
                key: "onAwake",
                value: function () {
                    this._spProgressBar.mask = this._spProgressBarMask, this._spProgressBarMask.removeSelf(),
                        this._model.on("percent", this.onPercent, this, !0), this._controller.start();
                }
            }, {
                key: "onPercent",
                value: function () {
                    var e = a.calValueBetween(this._model.percent, 0, 1), t = this._spProgressBarMask.graphics;
                    t.clear(!0), t.drawRect(0, 0, this._spProgressBar.width * e, 29, "#ffffff", void 0, 0),
                        this._txtProgress.text = "".concat(99 * e >> 0, "%");
                }
            }]), YLSplashRTView;
        }(), ee = function (e) {
            function AlignWidget() {
                var e;
                return _classCallCheck(this, AlignWidget), (e = _possibleConstructorReturn(this, _getPrototypeOf(AlignWidget).apply(this, arguments))).stickMode = "center",
                    e.offsetX = "0", e.offsetY = "0", e.statusBarOffsetY = 0, e._p = new Laya.Point(0, 0),
                    e.isPause = !1, e;
            }
            return _inherits(AlignWidget, Laya.Script), _createClass(AlignWidget, [{
                key: "onWinResize4Repos",
                value: function () {
                    if (!this.isPause) {
                        var e = this.owner;
                        if (null == e ? void 0 : e.displayedInStage) {
                            var t = e.parent;
                            if (t instanceof Laya.Sprite) {
                                var i = this.stickMode, a = !1;
                                if ("none" !== i && (this.calPos(), this._p = t.globalToLocal(this._p), "v_middle" !== i && "bottom" !== i && "top" !== i && (e.x = this._p.x + this.cookOffsetValue(this.offsetX, !0),
                                    a = !0), "h_center" !== i && "right" !== i && (e.y = this._p.y + this.cookOffsetValue(this.offsetY, !1),
                                        a = !0), this.isAdaptStatusBar)) {
                                    var n = w.getStatusBarHeight();
                                    n && (n += this.statusBarOffsetY), e.y += n, a = !0;
                                }
                                a && e.event("Event_RePos");
                            }
                        }
                    }
                }
            }, {
                key: "cookOffsetValue",
                value: function (e, t) {
                    return -1 === e.indexOf("%") ? parseFloat(e) || 0 : (parseFloat(e.replace("%", "")) || 0) / 100 * (t ? Laya.stage.width : Laya.stage.height);
                }
            }, {
                key: "calPos",
                value: function () {
                    if (this.owner instanceof Laya.Sprite) {
                        var e = Laya.stage.width, t = Laya.stage.height;
                        switch (this.stickMode) {
                            case "center":
                                this._p.x = e >> 1, this._p.y = t >> 1;
                                break;

                            case "h_center":
                                this._p.x = e >> 1;
                                break;

                            case "v_middle":
                                this._p.y = t >> 1;
                                break;

                            case "top":
                                this._p.y = 0;
                                break;

                            case "top_center":
                                this._p.x = e >> 1, this._p.y = 0;
                                break;

                            case "bottom":
                                this._p.y = t;
                                break;

                            case "bottom_center":
                                this._p.x = e >> 1, this._p.y = t;
                                break;

                            case "left_down":
                                this._p.x = 0, this._p.y = t;
                                break;

                            case "right":
                                this._p.x = e >> 0;
                                break;

                            case "right_middle":
                                this._p.x = e, this._p.y = t >> 1;
                                break;

                            case "right_down":
                                this._p.x = e, this._p.y = t;
                                break;

                            case "right_up":
                                this._p.x = e, this._p.y = 0;
                                break;

                            default:
                                return;
                        }
                    }
                }
            }, {
                key: "onEnable",
                value: function () {
                    Laya.stage.on(Laya.Event.RESIZE, this, this.onWinResize4Repos), this.owner.on(Laya.Event.DISPLAY, this, this.onWinResize4Repos),
                        this.onWinResize4Repos();
                }
            }, {
                key: "onStart",
                value: function () {
                    this.onWinResize4Repos();
                }
            }, {
                key: "onDisable",
                value: function () {
                    Laya.stage.off(Laya.Event.RESIZE, this, this.onWinResize4Repos), this.owner.off(Laya.Event.DISPLAY, this, this.onWinResize4Repos);
                }
            }, {
                key: "onDestroy",
                value: function () {
                    this.onDisable();
                }
            }]), AlignWidget;
        }(), te = function (e) {
            function YLCrazyClickRTView() {
                return _classCallCheck(this, YLCrazyClickRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLCrazyClickRTView).apply(this, arguments));
            }
            return _inherits(YLCrazyClickRTView, L), _createClass(YLCrazyClickRTView, [{
                key: "onAwake",
                value: function () {
                    this._model.on("percentOnCrazyClick", this.onPercent, this), n.addClickListener(this._spHandClick, this.onHandClick, this);
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.onPercent();
                }
            }, {
                key: "onPercent",
                value: function () {
                    this._spProgressPane.percent = this._model.percentOnCrazyClick;
                }
            }, {
                key: "onHandClick",
                value: function () {
                    this._controller.crazyClick();
                }
            }]), YLCrazyClickRTView;
        }(), ie = function (e) {
            function YLProgressRTPane() {
                var e;
                return _classCallCheck(this, YLProgressRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLProgressRTPane).apply(this, arguments)))._percent = 0,
                    e;
            }
            return _inherits(YLProgressRTPane, Laya.Sprite), _createClass(YLProgressRTPane, [{
                key: "onAwake",
                value: function () {
                    this._spBar = this.getChildByName("imgBar"), this._spBarMask = this.getChildByName("spBarMask"),
                        this._spBar.mask = this._spBarMask, this._spBarMask.removeSelf(), this.onPercent();
                }
            }, {
                key: "onEnable",
                value: function () {
                    this._spBar.mask = void 0, this._spBar.mask = this._spBarMask, this.onPercent();
                }
            }, {
                key: "onPercent",
                value: function () {
                    var e = a.calValueBetween(this._percent, 0, 1), t = this._spBarMask, i = t.graphics, n = t.width, o = t.height;
                    if (i.clear(!0), e) {
                        var r = o * e;
                        i.drawRect(0, o - r, n, r, "#ffffff", void 0, 0);
                    }
                }
            }, {
                key: "percent",
                get: function () {
                    return this._percent;
                },
                set: function (e) {
                    this._percent !== e && (this._percent = e, this.onPercent());
                }
            }]), YLProgressRTPane;
        }(), ae = function (e) {
            function YLHandClickRTPane() {
                var e;
                return _classCallCheck(this, YLHandClickRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLHandClickRTPane).apply(this, arguments)))._tlMap = new Map(),
                    e;
            }
            return _inherits(YLHandClickRTPane, Laya.Sprite), _createClass(YLHandClickRTPane, [{
                key: "onAwake",
                value: function () {
                    this._spCircle1 = this.getChildByName("spCircle1"), this._spCircle2 = this.getChildByName("spCircle2"),
                        this._spCircle3 = this.getChildByName("spCircle3"), this._spHand = this.getChildByName("spHand"),
                        this._btnClickArea = this.getChildByName("btnClickArea"), n.addClickListener(this._btnClickArea, this.onClick, this);
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.tweenCircle(this._spCircle1, 0), this.tweenCircle(this._spCircle2, 1), this.tweenCircle(this._spCircle3, 2),
                        this.tweenHand();
                }
            }, {
                key: "onDisable",
                value: function () {
                    this.resetAnimation(this._spCircle1), this.resetAnimation(this._spCircle2), this.resetAnimation(this._spCircle3),
                        this.resetAnimation(this._spHand);
                }
            }, {
                key: "tweenHand",
                value: function () {
                    this.resetAnimation(this._spHand);
                    this._spHand.scale(1.1, 1.1);
                    var e = new Laya.TimeLine();
                    e.to(this._spHand, {
                        scaleX: 1,
                        scaleY: 1
                    }, 400, Laya.Ease.sineIn), e.to(this._spHand, {
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, 400, Laya.Ease.sineOut), e.play(void 0, !0), this._tlMap.set(this._spHand, e);
                }
            }, {
                key: "tweenCircle",
                value: function (e, t) {
                    var i = this;
                    this.resetAnimation(e), e.scale(.01, .01);
                    var a = 300 * t;
                    Laya.timer.once(a, e, function tweenIt() {
                        e.scale(.01, .01), e.alpha = 1, Laya.Tween.to(e, {
                            alpha: 0,
                            scaleX: 3,
                            scaleY: 3
                        }, 1e3, Laya.Ease.sineIn, new Laya.Handler(i, function () {
                            Laya.timer.once(300, e, tweenIt);
                        }));
                    });
                }
            }, {
                key: "resetAnimation",
                value: function (e) {
                    var t = this._tlMap.get(e);
                    t && (t.destroy(), this._tlMap.delete(e)), Laya.Tween.clearAll(e), Laya.timer.clearAll(e);
                }
            }, {
                key: "onClick",
                value: function () {
                    this.event(Laya.Event.CLICK);
                }
            }]), YLHandClickRTPane;
        }(), ne = function (e) {
            function YLFavoriteRTView() {
                return _classCallCheck(this, YLFavoriteRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLFavoriteRTView).apply(this, arguments));
            }
            return _inherits(YLFavoriteRTView, L), _createClass(YLFavoriteRTView, [{
                key: "onAwake",
                value: function () {
                    this._txtName1.text = this._txtName2.text = Ue.config.gameName, this._imgIcon1.skin = this._imgIcon2.skin = Ue.config.gameIconUrl;
                }
            }, {
                key: "onCloseClick",
                value: function () {
                    this._model.isFavoriteShowing = !1;
                }
            }]), YLFavoriteRTView;
        }(), oe = function (e) {
            function YLGameRTView() {
                return _classCallCheck(this, YLGameRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLGameRTView).apply(this, arguments));
            }
            return _inherits(YLGameRTView, L), _createClass(YLGameRTView, [{
                key: "onAwake",
                value: function () {
                    n.fixWxOpenDataViewer(this._wxOverHead), n.fixWxOpenDataViewer(this._wxRankHead),
                        this._model.on("isShowingGamePlayerOver", this.onPlayerOverShowingChanged, this, !0),
                        this._model.on("isShowingGamePlayerRank", this.onPlayerRankShowingChanged, this, !0);
                }
            }, {
                key: "onPlayerOverShowingChanged",
                value: function () {
                    if (this._model.isShowingGamePlayerOver) {
                        var e = {
                            score: Ue.data.curScore,
                            queueMax: Ue.config.overPlayerQueueMax
                        };
                        w.postMsg2OpenData(t.CheckOverPlayer, {
                            data: e
                        }), this._wxOverHead.x = this._wxOverHead.x;
                    }
                }
            }, {
                key: "onPlayerRankShowingChanged",
                value: function () {

                }
            }, {
                key: "onPlayerRankHideComplete",
                value: function () {
                    this._model.isShowingGamePlayerRank = !1, this._model.hasGameBegan && (this._model.isShowingGamePlayerOver = !0);
                }
            }, {
                key: "checkAd",
                value: function () {
                    var e, t, i = this, a = Ue.config.ad.gameViewAdMode;
                    1 !== a && (null === (e = this._panelAdCenter) || void 0 === e ? void 0 : e.parent) && (this._panelAdCenter.removeSelf(),
                        Laya.timer.once(500, void 0, function () {
                            i._panelAdCenter.destroy(), i._panelAdCenter = void 0;
                        })), 2 !== a && (null === (t = this._panelAdBottom) || void 0 === t ? void 0 : t.parent) && (this._panelAdBottom.removeSelf(),
                            Laya.timer.once(500, void 0, function () {
                                i._panelAdBottom.destroy(), i._panelAdBottom = void 0;
                            }));
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.checkAd(), Ue.data.on("curScore", this.onCurScore, this, !0);
                }
            }, {
                key: "onDisable",
                value: function () {
                    Ue.data.off("curScore", this.onCurScore, this);
                }
            }, {
                key: "onCurScore",
                value: function () {
                    this._fontScore.value = Ue.data.curScore.toString();
                }
            }]), YLGameRTView;
        }(), re = function (e) {
            function AbstractADGameRTPane(e) {
                var t;
                return _classCallCheck(this, AbstractADGameRTPane), (t = _possibleConstructorReturn(this, _getPrototypeOf(AbstractADGameRTPane).call(this)))._gridCategory = e,
                    t._grids = [], t._curIndex = 0, t._canShake = !0, t._updateIntervalMs = 2e3, t;
            }
            return _inherits(AbstractADGameRTPane, Laya.Sprite), _createClass(AbstractADGameRTPane, [{
                key: "onAwake",
                value: function () {
                    this.initUI();
                }
            }, {
                key: "onEnable",
                value: function () {
                    Ue.data.on("appListDic", this.onAppListDic, this, !0), Ue.data.activeAdNum++;
                }
            }, {
                key: "onDisable",
                value: function () {
                    Ue.data.off("appListDic", this.onAppListDic, this), Laya.timer.clear(this, this.tick2Update),
                        Ue.data.activeAdNum--;
                }
            }, {
                key: "onAppListDic",
                value: function () {
                    this.updateGrids(!1), Laya.timer.clear(this, this.tick2Update), Laya.timer.clear(this, this.onDelay2Update),
                        Laya.timer.once(a.randomBetween(0, 1e3), this, this.onDelay2Update);
                }
            }, {
                key: "onDelay2Update",
                value: function () {
                    Laya.timer.loop(this._updateIntervalMs, this, this.tick2Update);
                }
            }, {
                key: "tick2Update",
                value: function () {
                    this.updateGrids(!0);
                }
            }, {
                key: "updateGrids",
                value: function (e) {
                    var t = this;
                    e = e && this._canShake, this._applist && this._applist.length || (this._applist = (Ue.data.appListDic[this._gridCategory] || []).concat(),
                        c.disturb(this._applist)), this._grids.forEach(function (i, a) {
                            var n = (t._curIndex + a) % t._applist.length;
                            i.setData(t._applist[n], e);
                        }), this._curIndex += this._grids.length;
                }
            }]), AbstractADGameRTPane;
        }(), se = function (e) {
            function YLADGameRTBanner0() {
                var e;
                return _classCallCheck(this, YLADGameRTBanner0), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTBanner0).call(this, 0)))._canShake = !1,
                    e;
            }
            return _inherits(YLADGameRTBanner0, re), _createClass(YLADGameRTBanner0, [{
                key: "onAppListDic",
                value: function () {
                    var e = Ue.data.appListDic[this._gridCategory] || [];
                    this._imgBg.visible = !!e.length, _get(_getPrototypeOf(YLADGameRTBanner0.prototype), "onAppListDic", this).call(this);
                }
            }, {
                key: "initUI",
                value: function () {
                    this._imgBg = this.getChildByName("imgBg");
                    for (var e = 0; ;) {
                        var t = this.getChildByName("ad".concat(e));
                        if (!t) break;
                        this._grids.push(t), e++;
                    }
                }
            }]), YLADGameRTBanner0;
        }(), le = function (e) {
            function YLAdGameRTGrid() {
                var e;
                return _classCallCheck(this, YLAdGameRTGrid), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLAdGameRTGrid).apply(this, arguments)))._controller = U.controller,
                    e;
            }
            return _inherits(YLAdGameRTGrid, Laya.Sprite), _createClass(YLAdGameRTGrid, [{
                key: "setData",
                value: function (e, t) {
                    var i;
                    this._data = e;
                    var a = (null == e ? void 0 : e.app_img) || "";
                    this._imgAd.skin = a, this.visible = !!a, null === (i = this._shakeTimeline) || void 0 === i || i.destroy(),
                        this._shakeTimeline = void 0, this._imgAd.rotation = 0, t && (this._shakeTimeline = new Laya.TimeLine(),
                            this._shakeTimeline.to(this._imgAd, {
                                rotation: 15
                            }, 50).to(this._imgAd, {
                                rotation: -15
                            }, 100).to(this._imgAd, {
                                rotation: 15
                            }, 100).to(this._imgAd, {
                                rotation: 0
                            }, 50), this._shakeTimeline.play());
                }
            }, {
                key: "onADClick",
                value: function () {
                    this._controller.gotoApp(this._data);
                }
            }, {
                key: "onAwake",
                value: function () {
                    this._imgAd = this.getChildByName("imgAd"), n.addClickListener(this._imgAd, this.onADClick, this);
                }
            }]), YLAdGameRTGrid;
        }(), he = function (e) {
            function YLADGameRTSquare0() {
                return _classCallCheck(this, YLADGameRTSquare0), _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTSquare0).call(this, 0));
            }
            return _inherits(YLADGameRTSquare0, re), _createClass(YLADGameRTSquare0, [{
                key: "initUI",
                value: function () {
                    var e = this.getChildByName("paneLeft"), t = this.getChildByName("paneRight");
                    this._grids.push(e.getChildByName("adL1")), this._grids.push(e.getChildByName("adL2")),
                        this._grids.push(t.getChildByName("adR1")), this._grids.push(t.getChildByName("adR2"));
                }
            }]), YLADGameRTSquare0;
        }(), ce = function (e) {
            function YLNewbieRTView() {
                return _classCallCheck(this, YLNewbieRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLNewbieRTView).apply(this, arguments));
            }
            return _inherits(YLNewbieRTView, L), _createClass(YLNewbieRTView, [{
                key: "onAwake",
                value: function () {
                    this._spClickOther.visible = !1, this._imgMain.on(Laya.Event.LOADED, this, this.onNewbieMainComplete),
                        this._imgMain.skin = Ue.config.newbieImgUrl || "", Ue.config.newbieAniUrl && Laya.loader.load(Ue.config.newbieAniUrl, Laya.Handler.create(this, this.onAniComplete)),
                        Ue.config.newbieTextUrl && (this._spClickOther.visible = !0, Laya.loader.load(Ue.config.newbieTextUrl, Laya.Handler.create(this, this.onTextTureComplete)));
                }
            }, {
                key: "onEnable",
                value: function () {
                    this._ani && this._ani.play(0, !0);
                }
            }, {
                key: "onAniComplete",
                value: function () {
                    this._ani = new Laya.Animation(), this._ani.loadAnimation(Ue.config.newbieAniUrl),
                        this._ani.play(0, !0), this._spView.addChild(this._ani), console.log("this.Ani", this._ani);
                }
            }, {
                key: "onTextTureComplete",
                value: function (e) {
                    this._spClickOther.texture = e;
                }
            }, {
                key: "onNewbieMainComplete",
                value: function () {
                    this._spClickOther.y = this._imgMain.y + .5 * this._imgMain.height + 80;
                }
            }, {
                key: "onCloseClick",
                value: function () {
                    this._controller.try2ShowCrazyClick();
                }
            }, {
                key: "onDisable",
                value: function () {
                    this._ani && this._ani.gotoAndStop(0);
                }
            }]), YLNewbieRTView;
        }(), ue = function (e) {
            function YLRankRTView() {
                return _classCallCheck(this, YLRankRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLRankRTView).apply(this, arguments));
            }
            return _inherits(YLRankRTView, L), _createClass(YLRankRTView, [{
                key: "onAwake",
                value: function () {
                    n.fixWxOpenDataViewer(this._wxODViewer), this._wxODViewerOrginalPos = new Laya.Point(this._wxODViewer.x, this._wxODViewer.y),
                        this._wxODViewerParnet = this._wxODViewer.parent;
                }
            }, {
                key: "onEnable",
                value: function () {
                    var e, t = this;
                    "rank" !== Ue.config.authorTime || Ue.data.hasRejectAuthor || (null === (e = Ue.data.userInfo) || void 0 === e ? void 0 : e.avatar) || w.authorize().then(function (e) {
                        return e && t.onRanKeyChanged();
                    }), this._model.on("rankTabKey", this.onRanKeyChanged, this, !0);
                }
            }, {
                key: "onDisable",
                value: function () {
                    this._model.off("rankTabKey", this.onRanKeyChanged, this);
                }
            }, {
                key: "onShowComplete",
                value: function () {
                    var e = this._wxODViewerParnet.localToGlobal(this._wxODViewerOrginalPos, !0);
                    e = this.globalToLocal(e, !1), this.addChild(this._wxODViewer), this._wxODViewer.x = e.x,
                        this._wxODViewer.y = e.y, _get(_getPrototypeOf(YLRankRTView.prototype), "onShowComplete", this).call(this);
                }
            }, {
                key: "hide",
                value: function () {
                    this.isShowing && this._wxODViewer.parent !== this._wxODViewerParnet && (this._wxODViewerParnet.addChild(this._wxODViewer),
                        this._wxODViewer.x = this._wxODViewerOrginalPos.x, this._wxODViewer.y = this._wxODViewerOrginalPos.y),
                        _get(_getPrototypeOf(YLRankRTView.prototype), "hide", this).call(this);
                }
            }, {
                key: "onRanKeyChanged",
                value: function () {
                    var e = this._model.rankTabKey;
                    e && w.isQQWXMiniGame && ("world" === e && _.reqWorldRank(), w.postMsg2OpenData(t.Rank, {
                        rankKey: e
                    }));
                }
            }, {
                key: "onCloseClick",
                value: function () {
                    this._model.isRankShowing = !1;
                }
            }]), YLRankRTView;
        }(), de = function (e) {
            function YLTab() {
                var e;
                return _classCallCheck(this, YLTab), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLTab).apply(this, arguments)))._isSelected = !1,
                    e;
            }
            return _inherits(YLTab, Laya.Script), _createClass(YLTab, [{
                key: "updateSelection",
                value: function () {
                    this._imgSelected.visible = this._isSelected, this._imgNormal.visible = !this._isSelected;
                }
            }, {
                key: "onAwake",
                value: function () {
                    this._imgSelected = this.owner.getChildByName("imgSelected"), this._imgNormal = this.owner.getChildByName("imgNormal"),
                        this._txtTitle = this.owner.getChildByName("txtTitle"), this.updateSelection();
                }
            }, {
                key: "isSelected",
                get: function () {
                    return this._isSelected;
                },
                set: function (e) {
                    this._isSelected !== e && (this._isSelected = e, this.updateSelection());
                }
            }]), YLTab;
        }(), pe = function (e) {
            function YLTabGroup() {
                var e;
                return _classCallCheck(this, YLTabGroup), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLTabGroup).apply(this, arguments)))._tabComps = [],
                    e._tabs = [], e;
            }
            return _inherits(YLTabGroup, Laya.Script), _createClass(YLTabGroup, [{
                key: "addTabClick",
                value: function (e) {
                    this._onTabClick = e;
                }
            }, {
                key: "updateSelection",
                value: function (e) {
                    this._tabComps.forEach(function (t) {
                        return t.isSelected = e === t.tabKey;
                    });
                }
            }, {
                key: "onAwake",
                value: function () {
                    for (var e = this.tabParent || this.owner, t = e.numChildren, i = 0; i < t; i++) {
                        var a = e.getChildAt(i), o = a.getComponent(de);
                        o && (this._tabComps.push(o), this._tabs.push(a), n.addClickListener(a, this.onTabClickChanged, this));
                    }
                }
            }, {
                key: "onStart",
                value: function () {
                    var e = this;
                    if (this.updateSelection(this.defaultTabKey), this.modelProperty) {
                        var t = this.owner, i = t.model || t._model;
                        i instanceof v && (this._parentModel = i, i.on(this.modelProperty, this.onModelTabKeyChanged, this, !0),
                            this.addTabClick(function (t) {
                                return i[e.modelProperty] = t;
                            }));
                    }
                }
            }, {
                key: "onModelTabKeyChanged",
                value: function () {
                    this.updateSelection(this._parentModel[this.modelProperty]);
                }
            }, {
                key: "onTabClickChanged",
                value: function (e) {
                    var t = e.currentTarget, i = this._tabs.indexOf(t);
                    if (-1 !== i) {
                        var a = this._tabComps[i];
                        this._onTabClick && this._onTabClick(a.tabKey), this.updateSelection(a.tabKey);
                    }
                }
            }, {
                key: "onDestroy",
                value: function () {
                    this._parentModel && this._parentModel.off(this.modelProperty, this.onModelTabKeyChanged, this),
                        this._tabComps = void 0, this._tabs = void 0, this._onTabClick = void 0;
                }
            }]), YLTabGroup;
        }(), _e = function (e) {
            function YLRebornRTView() {
                return _classCallCheck(this, YLRebornRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLRebornRTView).apply(this, arguments));
            }
            return _inherits(YLRebornRTView, L), _createClass(YLRebornRTView, [{
                key: "onAwake",
                value: function () {
                    this._btnVideo.visible = !Ue.config.isVerify;
                }
            }, {
                key: "onEnable",
                value: function () {
                    Laya.timer.once(1e4, this, this.onTimer2Skip);
                    platform.getInstance().initList(this.list_showList);
                }
            }, {
                key: "onDisable",
                value: function () {
                    Laya.timer.clear(this, this.onTimer2Skip);
                }
            }, {
                key: "onTimer2Skip",
                value: function () {
                    this._controller.skipReborn(!0);
                }
            }, {
                key: "onBtnClick",
                value: function (e) {
                    switch (e.currentTarget) {
                        case this._btnVideo:
                            Laya.timer.clear(this, this.onTimer2Skip), this._controller.watchVideo2Reborn();
                            break;

                        case this._btnSkip:
                            platform.getInstance().showInterstitial(() => {
                                Laya.timer.clear(this, this.onTimer2Skip), this._controller.skipReborn(!1);
                            })
                    }
                }
            }]), YLRebornRTView;
        }(), fe = function (e) {
            function YLADGameList() {
                var e;
                return _classCallCheck(this, YLADGameList), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADGameList).apply(this, arguments)))._controller = U.controller,
                    e._model = U.model, e.category = 0, e.rowArea = 3, e.hangDurationMS = 1e3, e.tweenDurationMSPerRaw = 4e3,
                    e.isAutoClickOneAppOnShow = !1, e._datas = [], e._bottomItemRelatedRowIndex = 0,
                    e._hasRandomClickApp = !1, e;
            }
            return _inherits(YLADGameList, Laya.Script), _createClass(YLADGameList, [{
                key: "onAwake",
                value: function () {
                    this._ownerList = this.owner, this._ownerList.vScrollBarSkin = "", this._ownerList.renderHandler = new Laya.Handler(this, this.updateItem);
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.clearMyTimers(), Ue.data.on("appListDic", this.onAppListDic, this, !0), Ue.data.activeAdNum++;
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function () {
                    var e;
                    if (this.isAutoClickOneAppOnShow && !this._hasRandomClickApp && (null === (e = Ue.data.versionConfig) || void 0 === e ? void 0 : e.comple_derive)) {
                        var t = this._ownerList.dataSource || [];
                        t.length && (this._hasRandomClickApp = !0, this._controller.gotoApp(c.randomOne(t)));
                    }
                }
            }, {
                key: "onDisable",
                value: function () {
                    Ue.data.off("appListDic", this.onAppListDic, this), this.clearMyTimers(), Ue.data.activeAdNum--,
                        this._hasRandomClickApp = !1;
                }
            }, {
                key: "clearMyTimers",
                value: function () {
                    Laya.timer.clear(this, this.doTween2Top), Laya.timer.clear(this, this.doTween2Bottom),
                        Laya.timer.clear(this, this.checkAutoScroll);
                }
            }, {
                key: "onMouseDown",
                value: function () {
                    this.clearMyTimers();
                }
            }, {
                key: "onStageMouseUp",
                value: function () {
                    this.needAutoScroll && Laya.timer.once(1e3, this, this.checkAutoScroll);
                }
            }, {
                key: "checkAutoScroll",
                value: function () {
                    this.calRow(this._ownerList.startIndex) >= .5 * this._bottomItemRelatedRowIndex ? this.doTween2Top() : this.doTween2Bottom();
                }
            }, {
                key: "updateItem",
                value: function (e) {
                    e.setData(e.dataSource, !1);
                }
            }, {
                key: "onAppListDic",
                value: function () {
                    var e = Ue.data.appListDic[this.category] || [];
                    this._datas = this.exchange(e), this._bottomItemRelatedRowIndex = this.calRow(this._datas.length - 1) - this.rowArea + 2,
                        this._ownerList.dataSource = e, this.tween2Bottom(), this.try2AutoClickOneApp();
                }
            }, {
                key: "exchange",
                value: function (e) {
                    if (0 == e.length) return [];
                    for (var t = 0; t < e.length / 2 - 1; ++t) {
                        var i = e[t], n = Math.floor(a.randomBetween(e.length / 2 - 1, e.length - 1));
                        i = e[t], e[t] = e[n], e[n] = i;
                    }
                    for (; !e[0];) e.shift();
                    return e;
                }
            }, {
                key: "tween2Bottom",
                value: function () {
                    this.needAutoScroll && Laya.timer.once(this.hangDurationMS, this, this.doTween2Bottom);
                }
            }, {
                key: "doTween2Bottom",
                value: function () {
                    var e = this._bottomItemRelatedRowIndex * this.rowArea;
                    this._ownerList.tweenTo(e, this.calAutoScrollDurationMS(this._bottomItemRelatedRowIndex), new Laya.Handler(this, this.tween2Top));
                }
            }, {
                key: "tween2Top",
                value: function () {
                    this.needAutoScroll && Laya.timer.once(this.hangDurationMS, this, this.doTween2Top);
                }
            }, {
                key: "doTween2Top",
                value: function () {
                    var e = this.calRow(0);
                    this._ownerList.tweenTo(0, this.calAutoScrollDurationMS(e), new Laya.Handler(this, this.tween2Bottom));
                }
            }, {
                key: "calAutoScrollDurationMS",
                value: function (e) {
                    var t = this.calRow(this._ownerList.startIndex);
                    return (Math.abs(t - e) || 1) * this.tweenDurationMSPerRaw;
                }
            }, {
                key: "calRow",
                value: function (e) {
                    return e / this._ownerList.repeatX >> 0;
                }
            }, {
                key: "needAutoScroll",
                get: function () {
                    return this._datas.length > this._ownerList.repeatX * this.rowArea;
                }
            }]), YLADGameList;
        }(), ye = function (e) {
            function YLADRealBanner() {
                var e;
                return _classCallCheck(this, YLADRealBanner), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADRealBanner).apply(this, arguments))).hangMS = 0,
                    e.coverTargetToY = NaN, e.needFakeBanner = !1, e.isShare = !1, e.isDisableWhileNoDelay = !1,
                    e.showDelayMS = -1, e._isTime2ShowAd = !1, e._isShowingBanner = !1, e._isAdEnable = !1,
                    e._curRealBannerId = 0, e._corverTargetOriPos = void 0, e;
            }
            return _inherits(YLADRealBanner, Laya.Script), _createClass(YLADRealBanner, [{
                key: "onDisable",
                value: function () {
                    this.isAdEnable = !1;
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.isAdEnable = !0;
                }
            }, {
                key: "updateCoverTarget2PosYDirectly",
                value: function () {
                    if (this.coverTarget && !isNaN(this.coverTargetToY)) {
                        var e = this.coverTarget.getComponent(ee);
                        e && (e.isPause = !0), this.coverTarget.y = this.coverTargetToY;
                    }
                }
            }, {
                key: "onTime2Show",
                value: function () {
                    this._isTime2ShowAd = !0, this.try2ShowAd();
                }
            }, {
                key: "try2ShowAd",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee51() {
                        var e, t, i, a, o, r = this;
                        return regeneratorRuntime.wrap(function (s) {
                            for (; ;) switch (s.prev = s.next) {
                                case 0:
                                    if (e = Ue.data.versionConfig, !this._isShowingBanner && this._isTime2ShowAd) {
                                        s.next = 3;
                                        break;
                                    }
                                    return s.abrupt("return");

                                case 3:
                                    if (this.isEnableWrongClick || !this.hangMS) {
                                        s.next = 5;
                                        break;
                                    }
                                    return s.abrupt("return");

                                case 5:
                                    if (!this.isDisableWhileNoDelay || 1 === (null == e ? void 0 : e.delay)) {
                                        s.next = 7;
                                        break;
                                    }
                                    return s.abrupt("return");

                                case 7:
                                    if (y.hasBanner) {
                                        s.next = 20;
                                        break;
                                    }
                                    if (y.once(d.BANNER_LOADED, this.try2ShowAd, this), !this.needFakeBanner) {
                                        s.next = 19;
                                        break;
                                    }
                                    if (this._fakeBanner) {
                                        s.next = 17;
                                        break;
                                    }
                                    return s.next = 13, n.asyncLoadRes("sdk_youling/common/prefab/YLADGameBanner2.prefab");

                                case 13:
                                    t = s.sent, this._fakeBanner = t.create(), this._fakeBanner.addComponent(ee).stickMode = "bottom_center";

                                case 17:
                                    s.next = 20;
                                    break;

                                case 19:
                                    return s.abrupt("return");

                                case 20:
                                    if (this.hangMS > 0 && Laya.timer.once(this.hangMS, this, this.onTime2HideAd), this._isShowingBanner = !0,
                                        this.doShowAd(), !this.coverTarget || this.hangMS || this.needUpdateTarget2PosYDirectly && e) {
                                        s.next = 40;
                                        break;
                                    }
                                    if (this._corverTargetOriPos || (this._corverTargetOriPos = new Laya.Point(this.coverTarget.x, this.coverTarget.y)),
                                        i = 0, !y.curShowingBanner) {
                                        s.next = 31;
                                        break;
                                    }
                                    a = y.curShowingBanner.banner.style.realHeight || y.normalBannerHegiht, i = (1 - a / Laya.Browser.clientHeight) * Laya.stage.displayHeight,
                                        s.next = 36;
                                    break;

                                case 31:
                                    if (!this._fakeBanner) {
                                        s.next = 35;
                                        break;
                                    }
                                    i = Laya.stage.height - this._fakeBanner.adHeight, s.next = 36;
                                    break;

                                case 35:
                                    return s.abrupt("return");

                                case 36:
                                    i = this.coverTarget.parent.globalToLocal(new Laya.Point(0, i)).y, isNaN(this.coverTargetToY) || (i = Math.min(i, this.coverTargetToY)),
                                        o = (null == e ? void 0 : e.move_time) || 1e3, Laya.Tween.to(this.coverTarget, {
                                            y: i
                                        }, 300, void 0, new Laya.Handler(this, function () {
                                            var e;
                                            return null === (e = r.owner) || void 0 === e ? void 0 : e.event("EVENT_BannerCoverTargetMoveComplete");
                                        }), o);

                                case 40:
                                case "end":
                                    return s.stop();
                            }
                        }, _callee51, this);
                    }));
                }
            }, {
                key: "doShowAd",
                value: function () {
                    y.hasBanner ? this._curRealBannerId = y.showBanner() : this._fakeBanner && this.owner.addChild(this._fakeBanner);
                }
            }, {
                key: "onTime2HideAd",
                value: function () {
                    var e;
                    y.hideBanner(this._curRealBannerId), null === (e = this._fakeBanner) || void 0 === e || e.removeSelf(),
                        this._isShowingBanner = !1, this._curRealBannerId = 0;
                }
            }, {
                key: "isEnableWrongClick",
                get: function () {
                    var e = Ue.data.versionConfig;
                    return 1 === (null == e ? void 0 : e.delay) && (!this.isShare || 1 === e.share);
                }
            }, {
                key: "needUpdateTarget2PosYDirectly",
                get: function () {
                    var e = Ue.data.versionConfig;
                    return !this.isEnableWrongClick || this.isDisableWhileNoDelay && 1 !== (null == e ? void 0 : e.delay);
                }
            }, {
                key: "isAdEnable",
                get: function () {
                    return this._isAdEnable;
                },
                set: function (e) {
                    var t;
                    if (this._isAdEnable !== e) if (this._isAdEnable = e, e) {
                        this.needUpdateTarget2PosYDirectly && this.updateCoverTarget2PosYDirectly();
                        var i = (null === (t = Ue.data.versionConfig) || void 0 === t ? void 0 : t.latency_time) || 1e3;
                        this.showDelayMS > 0 ? i = this.showDelayMS : 0 === this.showDelayMS && (i = 200),
                            i > 0 ? Laya.timer.once(i, this, this.onTime2Show) : this.onTime2Show();
                    } else y.off(d.BANNER_LOADED, this.try2ShowAd, this), Laya.timer.clearAll(this),
                        this._isTime2ShowAd = !1, this._isShowingBanner && this.onTime2HideAd();
                }
            }]), YLADRealBanner;
        }(), me = function (e) {
            function YLResultRTView() {
                return _classCallCheck(this, YLResultRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLResultRTView).apply(this, arguments));
            }
            return _inherits(YLResultRTView, L), _createClass(YLResultRTView, [{
                key: "onBtnClick",
                value: function (e) {
                    switch (e.currentTarget) {
                        case this._btnHome:
                            platform.getInstance().showInterstitial(() => {
                                Y.emit(D.S2G_RESET_GAME_READY);
                                U.model.curStackView = O.VIEW_Home;
                            })
                            break;
                        // case this._coins2:

                        case this._btnPlay:
                        case this._btnPlayVerify:
                            this._controller.try2ShowBackHome();
                            break;

                        case this._btnFight:
                            w.shareFriend(2);
                            break;

                        case this._btnContinue:
                            // Y.emit(D.S2G_RESET_GAME_READY);
                            // U.model.curStackView = O.VIEW_Home;
                            platform.getInstance().showReward(() => {
                                this._controller.submitScore();
                                Y.emit(D.S2G_RESET_GAME_READY);
                                U.model.curStackView = O.VIEW_Home;
                            })
                            break;
                    }
                }
            }, {
                key: "show",
                value: function () {
                    this.isShowing || console.log("YLResultRTView显示"), _get(_getPrototypeOf(YLResultRTView.prototype), "show", this).call(this);
                    platform.getInstance().initList(this.list_showList);
                    let score = Laya.LocalStorage.getItem("Drift-At-Will-MaxScore") ? JSON.parse(Laya.LocalStorage.getItem("Drift-At-Will-MaxScore")) : 0;
                    if (score < Ue.data.curScore) {
                        Laya.LocalStorage.setItem("Drift-At-Will-MaxScore", JSON.stringify(Ue.data.curScore));
                    }
                }
            }, {
                key: "onShowComplete",
                value: function () {
                    console.log("YLResultRTView显示完毕"), _get(_getPrototypeOf(YLResultRTView.prototype), "onShowComplete", this).call(this);
                }
            }, {
                key: "hide",
                value: function () {
                    this.isShowing && console.log("YLResultRTView隐藏"), _get(_getPrototypeOf(YLResultRTView.prototype), "hide", this).call(this);
                }
            }, {
                key: "onHideComplete",
                value: function () {
                    console.log("YLResultRTView隐藏完毕"), _get(_getPrototypeOf(YLResultRTView.prototype), "onHideComplete", this).call(this);
                }
            }, {
                key: "onEnable",
                value: function () {
                    var e = Ue.config.score2Gold(Ue.data.curScore);
                    this._fontScore.value = e.toString(),
                        this._controller.submitScore(),
                        _get(_getPrototypeOf(YLResultRTView.prototype), "onEnable", this).call(this);
                }
            }]), YLResultRTView;
        }(), ve = function (e) {
            function YLGoldRTPane() {
                var e;
                return _classCallCheck(this, YLGoldRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLGoldRTPane).apply(this, arguments)))._goldTxt = "",
                    e;
            }
            return _inherits(YLGoldRTPane, Laya.Sprite), _createClass(YLGoldRTPane, [{
                key: "onAwake",
                value: function () {
                    this._fontClip = this.getChildByName("fontClip");
                }
            }, {
                key: "goldTxt",
                get: function () {
                    return this._goldTxt;
                },
                set: function (e) {
                    this._goldTxt = e, this._fontClip.value = e;
                }
            }]), YLGoldRTPane;
        }(), ge = function (e) {
            function YLGoldPane() {
                var e;
                return _classCallCheck(this, YLGoldPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLGoldPane).apply(this, arguments))).isHero = !1,
                    e;
            }
            return _inherits(YLGoldPane, Laya.Script), _createClass(YLGoldPane, [{
                key: "onAwake",
                value: function () {
                    this._owner = this.owner;
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.isHero && Ue.data.on("gold", this.onHeroGold, this, !0);
                }
            }, {
                key: "onDisable",
                value: function () {
                    Ue.data.off("gold", this.onHeroGold, this);
                }
            }, {
                key: "onHeroGold",
                value: function () {
                    this._owner.goldTxt = Ue.data.gold.toString();
                }
            }]), YLGoldPane;
        }(), ke = function (e) {
            function YLADGameRTSquare3() {
                return _classCallCheck(this, YLADGameRTSquare3), _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTSquare3).call(this, 3));
            }
            return _inherits(YLADGameRTSquare3, re), _createClass(YLADGameRTSquare3, [{
                key: "initUI",
                value: function () {
                    for (var e = 0; ;) {
                        var t = this.getChildByName("ad".concat(e));
                        if (!t) break;
                        this._grids.push(t), e++;
                    }
                }
            }]), YLADGameRTSquare3;
        }(), we = function (e) {
            function YLPlayerHeadRTGrid() {
                var e;
                return _classCallCheck(this, YLPlayerHeadRTGrid), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLPlayerHeadRTGrid).apply(this, arguments)))._isShowing = void 0,
                    e;
            }
            return _inherits(YLPlayerHeadRTGrid, Laya.Sprite), _createClass(YLPlayerHeadRTGrid, [{
                key: "onAwake",
                value: function () {
                    var e = this;
                    this._aniSpark = this.getChildByName("aniSpark");
                    var t = this.getChildByName("spHeadParent");
                    this._spHead = t.getChildByName("spHead"), this._aniSpark.on(Laya.Event.COMPLETE, void 0, function () {
                        return e._aniSpark.visible = !1;
                    });
                }
            }, {
                key: "isShowing",
                set: function (e) {
                    this._isShowing !== e && (this._isShowing = e, this.visible = e, e ? (this._aniSpark.visible = !0,
                        this._aniSpark.play(0, !1)) : this._aniSpark.stop());
                },
                get: function () {
                    return this._isShowing;
                }
            }, {
                key: "headUrl",
                get: function () {
                    return this._headUrl;
                },
                set: function (e) {
                    this._headUrl = e, e && this._spHead.loadImage(e);
                }
            }]), YLPlayerHeadRTGrid;
        }(), Se = function (e) {
            function YLSearchPlayerRTView() {
                var e;
                return _classCallCheck(this, YLSearchPlayerRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSearchPlayerRTView).apply(this, arguments)))._tweeningProgress = {
                    value: 0
                }, e._isSearching = !1, e._grids = [], e.DURATION_MS = 3e3, e.MAX = Ue.config.numSearchPlayer,
                    e;
            }
            return _inherits(YLSearchPlayerRTView, L), _createClass(YLSearchPlayerRTView, [{
                key: "onAwake",
                value: function () {
                    this._grids = c.getChildrenByNameSection(this._spView, "head", 0, we, !0);
                }
            }, {
                key: "onEnable",
                value: function () {
                    var e = this;
                    this.reset(), this._isSearching = !0, this._grids.forEach(function (t, i) {
                        t.headUrl = e._model.playerHeads[i], t.isShowing = !1;
                    }), Laya.Tween.to(this._tweeningProgress, {
                        value: this.MAX,
                        update: Laya.Handler.create(this, this.onTweenProgress, void 0, !1)
                    }, this.DURATION_MS, void 0, Laya.Handler.create(this, this.onSearchComplete));
                }
            }, {
                key: "onTweenProgress",
                value: function () {
                    var e = this._tweeningProgress.value;
                    this._progress.value = e / this.MAX;
                    var t = (e >> 0) - 1;
                    t > 0 && t >= this._grids.length || (this._model.curSearchPlayerIndex = t + 1, this._grids.forEach(function (e, i) {
                        var a = e.isShowing, n = i <= t;
                        if (e.isShowing = n, a !== n) {
                            var o = {
                                index: i,
                                headUrl: e.headUrl
                            };
                            w.vibrate(!0), Y.emit(D.S2G_PLAYER_SEARCHED, o);
                        }
                    }));
                }
            }, {
                key: "onSearchComplete",
                value: function () {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee52() {
                        return regeneratorRuntime.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this._tweeningProgress.value = this.MAX, this.onTweenProgress(), e.next = 4,
                                        g.sleep(1e3);

                                case 4:
                                    this._isSearching = !1, this.onCloseClick();

                                case 6:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee52, this);
                    }));
                }
            }, {
                key: "onDisable",
                value: function () {
                    this.reset();
                }
            }, {
                key: "reset",
                value: function () {
                    this._isSearching = !1, Laya.Tween.clearAll(this._tweeningProgress), this._tweeningProgress.value = 0;
                }
            }, {
                key: "onCloseClick",
                value: function () {
                    this._isSearching || this._controller.try2ShowNewbie();
                }
            }]), YLSearchPlayerRTView;
        }(), Ce = function (e) {
            function YLSearchVSPlayerRTView() {
                return _classCallCheck(this, YLSearchVSPlayerRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLSearchVSPlayerRTView).apply(this, arguments));
            }
            return _inherits(YLSearchVSPlayerRTView, L), _createClass(YLSearchVSPlayerRTView, [{
                key: "onAwake",
                value: function () {
                    this._spLeftPane.setTweenInfos(-375, -99), this._spRightPane.setTweenInfos(375, -69);
                }
            }, {
                key: "onEnable",
                value: function () {
                    var e = Ue.data.userInfo || {}, t = e.user_nickname, i = e.avatar;
                    this._spLeftPane.setPlayerInfo(i, t, !0);
                    var a = this._model, n = a.playerHeads, o = a.playerNames;
                    this._spRightPane.setPlayerInfo(c.randomOne(n), c.randomOne(o), !1), this.tween2Show(),
                        this._spLeftPane.tween2Show(), this._spRightPane.tween2Show();
                }
            }, {
                key: "onDisable",
                value: function () {
                    this.reset();
                }
            }, {
                key: "reset",
                value: function () {
                    var e;
                    Laya.timer.clear(this, this.beginTweenPiPei), Laya.timer.clear(this, this.tween2Hide),
                        Laya.Tween.clearAll(this._imgDuiZhan), Laya.Tween.clearAll(this._spPiPei), null === (e = this._tlPiPeiYoyo) || void 0 === e || e.destroy(),
                        this._tlPiPeiYoyo = void 0, this._spModal && (Laya.Tween.clearAll(this._spModal),
                            this._spModal.alpha = this._modalOrigAlpha);
                }
            }, {
                key: "tween2Show",
                value: function () {
                    this.reset(), this._imgDuiZhan.scale(2, 2), this._imgDuiZhan.alpha = 0, this._spPiPei.alpha = 0,
                        Laya.Tween.to(this._imgDuiZhan, {
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1
                        }, 300, Laya.Ease.expoIn, void 0, 200), Laya.timer.once(200, this, this.beginTweenPiPei),
                        Laya.timer.once(2e3, this, this.tween2Hide);
                }
            }, {
                key: "tween2Hide",
                value: function () {
                    this.reset(), this._spPiPei.alpha = 1, Laya.Tween.to(this._spModal, {
                        alpha: 0
                    }, 500, Laya.Ease.expoOut, Laya.Handler.create(this, this.onAllHideComplete)), Laya.Tween.to(this._spPiPei, {
                        alpha: 0
                    }, 300, Laya.Ease.expoOut), Laya.Tween.to(this._imgDuiZhan, {
                        alpha: 0,
                        scale: .1
                    }, 200, Laya.Ease.expoOut), this._spLeftPane.tween2Hide(), this._spRightPane.tween2Hide();
                }
            }, {
                key: "onAllHideComplete",
                value: function () {
                    this._controller.try2ShowNewbie();
                }
            }, {
                key: "beginTweenPiPei",
                value: function () {
                    var e = new Laya.TimeLine();
                    e.to(this._spPiPei, {
                        alpha: 1
                    }, 500, Laya.Ease.sineIn), e.to(this._spPiPei, {
                        alpha: 0
                    }, 500, Laya.Ease.sineOut), e.play(void 0, !0), this._tlPiPeiYoyo = e;
                }
            }]), YLSearchVSPlayerRTView;
        }(), Le = function (e) {
            function YLVSPlayerRTPane() {
                var e;
                return _classCallCheck(this, YLVSPlayerRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLVSPlayerRTPane).apply(this, arguments)))._headUrl = "",
                    e._name = "", e;
            }
            return _inherits(YLVSPlayerRTPane, Laya.Sprite), _createClass(YLVSPlayerRTPane, [{
                key: "setPlayerInfo",
                value: function (e, t, i) {
                    this._headUrl = e, this._name = t, this._isMe = i, this._head.headUrl = e, this._spName.visible = !!t,
                        t && (this._txtName.text = s.truncate(t, 7, ".."));
                }
            }, {
                key: "onAwake",
                value: function () {
                    this._initPos = {
                        x: this.x,
                        y: this.y
                    }, this._spPlayer = this.getChildByName("spPlayer"), this._spName = this._spPlayer.getChildByName("spName"),
                        this._txtName = this._spName.getChildByName("txtName"), this._head = this._spPlayer.getChildByName("spHead");
                }
            }, {
                key: "reset",
                value: function () {
                    var e;
                    Laya.timer.clear(this, this.onHit), null === (e = this._tlAppear) || void 0 === e || e.destroy(),
                        this._tlAppear = void 0, Laya.Tween.clearAll(this);
                }
            }, {
                key: "setTweenInfos",
                value: function (e, t) {
                    this._toPos = {
                        x: e,
                        y: t
                    };
                }
            }, {
                key: "tween2Hide",
                value: function () {
                    this.reset(), Laya.Tween.to(this, {
                        x: this._initPos.x
                    }, 200, Laya.Ease.expoOut);
                }
            }, {
                key: "tween2Show",
                value: function () {
                    this.reset(), this.x = this._initPos.x, this.y = this._initPos.y;
                    var e = new Laya.TimeLine();
                    Laya.timer.once(200, this, this.onHit), e.to(this, {
                        x: this._toPos.x
                    }, 200, Laya.Ease.expoIn), e.to(this, {
                        y: this._toPos.y
                    }, 100, void 0, 200), e.play();
                }
            }, {
                key: "onHit",
                value: function () {
                    if (!this._isMe) {
                        w.vibrate(!1);
                        var e = {
                            headUrl: this._headUrl,
                            index: 0,
                            name: this._name
                        };
                        Y.emit(D.S2G_PLAYER_SEARCHED, e);
                    }
                }
            }]), YLVSPlayerRTPane;
        }(), Re = function () {
            function MvcUtils() {
                _classCallCheck(this, MvcUtils);
            }
            return _createClass(MvcUtils, null, [{
                key: "bindVisible",
                value: function (e, t, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
                    o = o || e;
                    t.on(i, function () {
                        var o = !!t[i];
                        void 0 !== n && (o = t[i] === n), a && (o = !o), e.visible = o;
                    }, o, !0);
                }
            }, {
                key: "bindFunctionNCall",
                value: function (e, t, i, a) {
                    e.on(t, i, a), i.call(a);
                }
            }]), MvcUtils;
        }(), be = function (e) {
            function YLSkinRTView() {
                var e;
                return _classCallCheck(this, YLSkinRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSkinRTView).apply(this, arguments)))._imgAvatarOrgPos = new Laya.Vector2(),
                    e;
            }
            return _inherits(YLSkinRTView, L), _createClass(YLSkinRTView, [{
                key: "onAwake",
                value: function () {
                    this._imgAvatarOrgPos.setValue(this._imgAvatar.x, this._imgAvatar.y), Re.bindVisible(this._spCheckVideoUseSkin, this._model, "isVideoUseSkin"),
                        Re.bindVisible(this._btnTempUse, this._model, "isVideoUseSkin"), Re.bindVisible(this._btnTempNotUse, this._model, "isVideoUseSkin", !0),
                        this._model.on("previewShopItem", this.onPreviewShopItem, this, !0);
                }
            }, {
                key: "onPreviewShopItem",
                value: function () {
                    var e = this._model.previewShopItem;
                    e && (this._imgAvatar.skin = e.previewPath, this._imgAvatar.x = this._imgAvatarOrgPos.x + (e.iconOffsetX || 0),
                        this._imgAvatar.y = this._imgAvatarOrgPos.y + (e.iconOffsetY || 0));
                }
            }, {
                key: "onBtnClick",
                value: function (e) {
                    switch (e.currentTarget) {
                        case this._btnTempUse:
                        case this._btnVideoUse:
                            this._controller.watchVideo2UseSkin();
                            break;

                        case this._btnTempNotUse:
                            this._controller.try2ShowSearchPlayer();
                            break;

                        case this._btnCheckBoxVideo:
                            this._model.isVideoUseSkin = !this._model.isVideoUseSkin;
                    }
                }
            }]), YLSkinRTView;
        }(), Pe = function (e) {
            function YLStoreRTView() {
                var e;
                return _classCallCheck(this, YLStoreRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLStoreRTView).apply(this, arguments)))._imgAvatarOrgPos = new Laya.Vector2(),
                    e._tweenObj = {
                        value: 0
                    }, e;
            }
            return _inherits(YLStoreRTView, L), _createClass(YLStoreRTView, [{
                key: "onAwake",
                value: function () {
                    var e = Ue.config, t = e.isVerify, i = e.storeItems, a = e.storeVideoUnlockGold;
                    this._btnVideoUse.visible = !t, t && (this._btnRandom.x = 0), this._imgAvatarOrgPos.setValue(this._imgAvatar.x, this._imgAvatar.y),
                        this._list.vScrollBarSkin = "", this._list.dataSource = i, this._list.renderHandler = new Laya.Handler(this, this.updateItem),
                        this._goldPaneVideo.goldTxt = a.toString(), this._model.on("curSelectedInStore", this.onSelcted, this, !0),
                        this._model.on("storeUnlockResult", this.onStoreUnlockResult, this), Ue.data.on("ownStoreItemIds", this.onOwnStoreItemIds, this, !0),
                        Laya.stage.on(Laya.Event.RESIZE, this, this.calListHeight), this._imgBg.once(Laya.Event.LOADED, this, this.onBgLoaded),
                        this._controller.findCurSelectedSkinInStore(), this.onBgLoaded(), this.calListHeight();
                }
            }, {
                key: "onBgLoaded",
                value: function () {
                    this._imgBg.height > 0 && Laya.stage.displayHeight > this._imgBg.height && (this._imgBg.height = Laya.stage.displayHeight);
                }
            }, {
                key: "onOwnStoreItemIds",
                value: function () {
                    var e = this._controller.calStoreRandomUnlockGold();
                    e < 0 && (e = 0), this._goldPaneRandom.goldTxt = e.toString();
                }
            }, {
                key: "onStoreUnlockResult",
                value: function () {
                    var e = this, t = this._model.storeUnlockResult;
                    if (t) {
                        var i = this._controller.getStoreItemsCanBuy(), a = i.length;
                        if (1 === a) this._controller.doUnlockStoreItem(t); else {
                            c.remove(i, t.item), c.disturb(i), i.push(t.item), this._tweenObj.value = 0;
                            var n = 4;
                            a > 6 ? n = 2 : a > 3 && (n = 3);
                            for (var r = [], s = 0; s < n; s++) r = r.concat(i);
                            o.isWorldCanClick = !1, Laya.Tween.to(this._tweenObj, {
                                value: 100,
                                update: new Laya.Handler(this, function () {
                                    var t = Math.ceil(e._tweenObj.value) / 100;
                                    e._model.curSelectedInStore = r[r.length * t >> 0];
                                })
                            }, 3e3, Laya.Ease.sineInOut, Laya.Handler.create(void 0, function () {
                                o.isWorldCanClick = !0, e._controller.doUnlockStoreItem(t);
                            }));
                        }
                    }
                }
            }, {
                key: "calListHeight",
                value: function () {
                    var e = this._spBottomBtns.getComponent(ee), t = parseInt(e.offsetY) - 132, i = this._list.globalToLocal(new Laya.Point(0, Laya.stage.displayHeight + t));
                    this._list.height = i.y, this._listBottomDecorator.y = this._list.y + i.y + 4;
                }
            }, {
                key: "onSelcted",
                value: function () {
                    var e = this._model.curSelectedInStore;
                    e && (this._imgAvatar.skin = e.previewPath, this._imgAvatar.x = this._imgAvatarOrgPos.x + (e.iconOffsetX || 0),
                        this._imgAvatar.y = this._imgAvatarOrgPos.y + (e.iconOffsetY || 0));
                }
            }, {
                key: "updateItem",
                value: function (e) {
                    e.data = e.dataSource;
                }
            }, {
                key: "onBtnClick",
                value: function (e) {
                    switch (e.currentTarget) {
                        case this._btnRandom:
                            this._controller.randomUnlockStoreItem();
                            break;

                        case this._btnVideoUse:
                            this._controller.watchVideo2GetGold();
                    }
                }
            }, {
                key: "onCloseClick",
                value: function () {
                    platform.getInstance().showInterstitial(() => {
                        this._controller.closeStoreTry2UseSkin();
                    })
                }
            }]), YLStoreRTView;
        }(), Ae = function (e) {
            function YLStoreRTGrid() {
                var e;
                return _classCallCheck(this, YLStoreRTGrid), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLStoreRTGrid).apply(this, arguments)))._isSelceted = !1,
                    e;
            }
            return _inherits(YLStoreRTGrid, Laya.Sprite), _createClass(YLStoreRTGrid, [{
                key: "onAwake",
                value: function () {
                    this._model = U.model, this._controller = U.controller;
                    var e = this.getChildByName("spView");
                    this._spFrameNormal = e.getChildByName("spFrameNormal"), this._spFrameSelected = e.getChildByName("spFrameSelected"),
                        this._imgIcon = e.getChildByName("imgIcon"), this._imgIconOrgPos = new Laya.Point(this._imgIcon.x, this._imgIcon.y),
                        this._spLock = e.getChildByName("spLock"), this.addComponent(S).zoomTarget = e,
                        n.setVisibleAndAlpha(this._spFrameSelected, !1), n.addClickListener(this, this.onGridClick, this),
                        this._model.on("curSelectedInStore", this.onSelectedChanged, this), Ue.data.on("ownStoreItemIds", this.onOwnStoreItemIds, this);
                }
            }, {
                key: "onOwnStoreItemIds",
                value: function () {
                    this._spLock.visible = !!this.data && !this._controller.isStoreItemBought(this.data);
                }
            }, {
                key: "onGridClick",
                value: function () {
                    this._model.curSelectedInStore = this._data;
                }
            }, {
                key: "onSelectedChanged",
                value: function () {
                    var e = this, t = !!this._data && this._model.curSelectedInStore === this._data;
                    t !== this._isSelceted && (this._isSelceted = t, this._spFrameNormal.visible = !0,
                        this._spFrameSelected.visible = !0, Laya.Tween.to(this._spFrameSelected, {
                            alpha: t ? 1 : 0
                        }, 200, void 0, Laya.Handler.create(void 0, function () {
                            e._spFrameSelected.visible = e._isSelceted, e._spFrameNormal.visible = !e._isSelceted;
                        }), void 0, !0));
                }
            }, {
                key: "data",
                get: function () {
                    return this._data;
                },
                set: function (e) {
                    this._data = e, e && (this._imgIcon.skin = e.previewPath, this._imgIcon.x = this._imgIconOrgPos.x + (e.gridOffsetX || 0),
                        this._imgIcon.y = this._imgIconOrgPos.y + (e.gridOffsetY || 0), this.onOwnStoreItemIds()),
                        this.onSelectedChanged();
                }
            }]), YLStoreRTGrid;
        }(), xe = function (e) {
            function YLSystemAppListRTView() {
                var e;
                return _classCallCheck(this, YLSystemAppListRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSystemAppListRTView).apply(this, arguments)))._hasRandomClickApp = !1,
                    e.category = 5, e._listScrollY = 0, e.tweenDurationMSPerRaw = 1e3, e._datas = [],
                    e._bottomItemRelatedRowIndex = 0, e._hangDurationMS = 2e3, e._rowArea = 10, e;
            }
            return _inherits(YLSystemAppListRTView, L), _createClass(YLSystemAppListRTView, [{
                key: "onCloseClick",
                value: function () {
                    this._controller.try2ShowResult();
                }
            }, {
                key: "onAwake",
                value: function () {
                    this._btnClose.getComponent(S).notZoom = !0, this._list.vScrollBarSkin = "", this._listScrollBar = this._list.scrollBar,
                        this._list.dataSource = [], this._list.renderHandler = new Laya.Handler(this, this.updateItem);
                }
            }, {
                key: "onResize",
                value: function () {
                    var e = Laya.stage.displayHeight - this._list.y;
                    this._list.height = e, this._rowArea = e / 148 >> 0;
                }
            }, {
                key: "onAppListDic",
                value: function () {
                    var e = Ue.data.appListDic[this.category] || [];
                    e.forEach(function (e) {
                        void 0 === e.__isStar && (e.__isStar = Math.random() > .5, e.__pplPlay = a.randomBetween(5e3, 1e5) >> 0);
                    }), this._list.dataSource = e, this._datas = e, this._bottomItemRelatedRowIndex = this.calRow(this._datas.length - 1) - this._rowArea + 2,
                        this.tween2Bottom(), this.try2AutoClickOneApp();
                }
            }, {
                key: "onScrollChanged",
                value: function () {
                    this._listScrollBar && !a.isEqual(this._listScrollY, this._listScrollBar.value) && (this._listScrollY = this._listScrollBar.value,
                        this._spListHeader.y = -this._listScrollY);
                }
            }, {
                key: "onEnable",
                value: function () {
                    Ue.data.on("appListDic", this.onAppListDic, this, !0), Laya.stage.on(Laya.Event.RESIZE, this, this.onResize),
                        this._list.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onStageMouseUp),
                        this.onResize();
                }
            }, {
                key: "onDisable",
                value: function () {
                    Ue.data.off("appListDic", this.onAppListDic, this), Laya.stage.off(Laya.Event.RESIZE, this, this.onResize),
                        this._list.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onStageMouseUp),
                        this._hasRandomClickApp = !1, this.clearMyTimers();
                }
            }, {
                key: "onMouseDown",
                value: function () {
                    this.clearMyTimers();
                }
            }, {
                key: "onStageMouseUp",
                value: function () {
                    this.needAutoScroll && Laya.timer.once(1e3, this, this.checkAutoScroll);
                }
            }, {
                key: "clearMyTimers",
                value: function () {
                    Laya.timer.clear(this, this.doTween2Top), Laya.timer.clear(this, this.doTween2Bottom),
                        Laya.timer.clear(this, this.checkAutoScroll);
                }
            }, {
                key: "doTween2Bottom",
                value: function () {
                    var e = this._bottomItemRelatedRowIndex;
                    this._list.tweenTo(e, this.calAutoScrollDurationMS(this._bottomItemRelatedRowIndex), new Laya.Handler(this, this.tween2Top));
                }
            }, {
                key: "tween2Bottom",
                value: function () {
                    this.needAutoScroll && Laya.timer.once(this._hangDurationMS, this, this.doTween2Bottom);
                }
            }, {
                key: "tween2Top",
                value: function () {
                    this.needAutoScroll && Laya.timer.once(this._hangDurationMS, this, this.doTween2Top);
                }
            }, {
                key: "doTween2Top",
                value: function () {
                    var e = this.calRow(0);
                    this._list.tweenTo(0, this.calAutoScrollDurationMS(e), new Laya.Handler(this, this.tween2Bottom));
                }
            }, {
                key: "calAutoScrollDurationMS",
                value: function (e) {
                    var t = this.calRow(this._list.startIndex);
                    return (Math.abs(t - e) || 1) * this.tweenDurationMSPerRaw;
                }
            }, {
                key: "checkAutoScroll",
                value: function () {
                    this.calRow(this._list.startIndex) >= .5 * this._bottomItemRelatedRowIndex ? this.doTween2Top() : this.doTween2Bottom();
                }
            }, {
                key: "calRow",
                value: function (e) {
                    return e / this._list.repeatX >> 0;
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function () {
                    var e;
                    if (!this._hasRandomClickApp && (null === (e = Ue.data.versionConfig) || void 0 === e ? void 0 : e.push_video)) {
                        var t = this._list.dataSource || [];
                        t.length && (this._hasRandomClickApp = !0, this._controller.gotoApp(c.randomOne(t)));
                    }
                }
            }, {
                key: "updateItem",
                value: function (e, t) {
                    e.data = e.dataSource, e.index = t, e.zOrder = this._datas.length - t;
                }
            }, {
                key: "needAutoScroll",
                get: function () {
                    return this._datas.length > this._list.repeatX * this._rowArea;
                }
            }]), YLSystemAppListRTView;
        }(), Be = function (e) {
            function YLSystemAppListRTItem() {
                var e;
                return _classCallCheck(this, YLSystemAppListRTItem), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSystemAppListRTItem).apply(this, arguments)))._controller = U.controller,
                    e._imgBgs = [], e._index = -1, e;
            }
            return _inherits(YLSystemAppListRTItem, Laya.Sprite), _createClass(YLSystemAppListRTItem, [{
                key: "onAwake",
                value: function () {
                    this._imgBgs = c.getChildrenByNameSection(this, "imgBg", 0, void 0, !0), this._spStar = this.getChildByName("spStar"),
                        this._txtName = this.getChildByName("txtName"), this._txtPpl = this.getChildByName("txtPpl"),
                        this._imgIcon = this.getChildByName("imgIcon"), n.addClickListener(this, this.onGridClick, this);
                }
            }, {
                key: "onGridClick",
                value: function () {
                    this._controller.gotoApp(this._data);
                }
            }, {
                key: "index",
                get: function () {
                    return this._index;
                },
                set: function (e) {
                    if (this._index !== e) {
                        this._index = e;
                        var t = this._imgBgs.length;
                        this._imgBgs.forEach(function (i, a) {
                            return i.visible = e % t === a;
                        });
                    }
                }
            }, {
                key: "data",
                get: function () {
                    return this._data;
                },
                set: function (e) {
                    if (this._data = e, e) {
                        var t = e.__isStar, i = e.__pplPlay, a = e.app_name, n = e.app_img;
                        this._spStar.visible = t, this._txtName.text = a, this._txtPpl.text = "".concat(i, "人在玩"),
                            this._imgIcon.skin = n;
                    }
                }
            }]), YLSystemAppListRTItem;
        }(), Me = function (e) {
            function YLTreasureBoxRTView() {
                return _classCallCheck(this, YLTreasureBoxRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLTreasureBoxRTView).apply(this, arguments));
            }
            return _inherits(YLTreasureBoxRTView, L), _createClass(YLTreasureBoxRTView, [{
                key: "onAwake",
                value: function () {
                    this._model.on("percentOnBoxClick", this.onPercent, this), n.addClickListener(this._spHandClick, this.onHandClick, this);
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.onPercent(), this._model.boxClickNumber = 0, Laya.timer.loop(100, this, this.rotateBG);
                }
            }, {
                key: "onPercent",
                value: function () {
                    this._spProgressPane.percent = this._model.percentOnBoxClick;
                }
            }, {
                key: "rotateBG",
                value: function () {
                    this._boxLIght.rotation += 5;
                }
            }, {
                key: "onHandClick",
                value: function () {
                    var e = this;
                    this._controller.boxClick(), this._treasureBox.scale(1.4, 1.4), Laya.timer.once(200, this, function () {
                        e._treasureBox.scale(1.2, 1.2);
                    });
                }
            }]), YLTreasureBoxRTView;
        }(), Ve = function (e) {
            function YLBackHomeRTView() {
                return _classCallCheck(this, YLBackHomeRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLBackHomeRTView).apply(this, arguments));
            }
            return _inherits(YLBackHomeRTView, L), _createClass(YLBackHomeRTView, [{
                key: "onAwake",
                value: function () {
                    this._isClickModalClose = !1;
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.height = Laya.stage.height, this.width = Laya.stage.width;
                    var e = Ue.data.versionConfig;
                    null == e || e.control_ms;
                    this._btnRandomStart.visible = !1, this._btnContinue.visible = !0;
                }
            }, {
                key: "onShowComplete",
                value: function () {
                    var e;
                    _get(_getPrototypeOf(YLBackHomeRTView.prototype), "onShowComplete", this).call(this),
                        (null === (e = Ue.data) || void 0 === e ? void 0 : e.versionConfig) && 0 == Ue.data.versionConfig.show_ad && (console.log("是否为黑名单场景值 ：", Ue.data.isSceneBlacklist),
                            Ue.data.isSceneBlacklist && (this.onCloseClick(), o.setForceWorldCanClick()));
                }
            }, {
                key: "switchBtn",
                value: function () {
                    this._btnRandomStart.visible = !this._btnRandomStart.visible, this._btnContinue.visible = !this._btnContinue.visible;
                }
            }, {
                key: "onCloseClick",
                value: function () {
                    Ue.data.isOnGame ? this._controller.doGameFail() : this._controller.try2ShowBeginGame();
                }
            }, {
                key: "onBtnClick",
                value: function (e) {
                    var t, i;
                    switch (e.currentTarget) {
                        case this._btnRandomStart:
                            this.try2AutoClickOneApp();
                            break;

                        case this._btnContinue:
                            Ue.data.isOnGame ? this._controller.doGameFail() : 1 == (null === (i = null === (t = Ue.data) || void 0 === t ? void 0 : t.versionConfig) || void 0 === i ? void 0 : i.derive_one) ? this.try2AutoClickOneApp() : this._controller.try2ShowBeginGame();
                    }
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function () {
                    var e = this._list.dataSource || [];
                    e.length && this._controller.gotoApp(c.randomOne(e));
                }
            }]), YLBackHomeRTView;
        }(), Ie = function (e) {
            function YLBeginGameRTView() {
                return _classCallCheck(this, YLBeginGameRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLBeginGameRTView).apply(this, arguments));
            }
            return _inherits(YLBeginGameRTView, L), _createClass(YLBeginGameRTView, [{
                key: "onAwake",
                value: function () {
                    this._isClickModalClose = !1;
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.height = Laya.stage.height, this.width = Laya.stage.width;
                    var e = Ue.data.versionConfig;
                    null == e || e.control_ms;
                    this._btnRandomStart.visible = !1, this._btnContinue.visible = !0, this._isShowbanner = !1,
                        this._model.on("gameListBanner", this.showDelayBanner, this);
                }
            }, {
                key: "onShowComplete",
                value: function () {
                    var e;
                    _get(_getPrototypeOf(YLBeginGameRTView.prototype), "onShowComplete", this).call(this),
                        (null === (e = Ue.data) || void 0 === e ? void 0 : e.versionConfig) && 0 == Ue.data.versionConfig.show_ad && (console.log("是否为黑名单场景值 ：", Ue.data.isSceneBlacklist),
                            Ue.data.isSceneBlacklist && (this.onCloseClick(), o.setForceWorldCanClick()));
                }
            }, {
                key: "showDelayBanner",
                value: function () {
                    var e;
                    1 != (null === (e = Ue.data) || void 0 === e ? void 0 : e.versionConfig.derive_one) || this._isShowbanner || (this._isShowbanner = !0,
                        Laya.timer.once(1e3, this, this.showbanner));
                }
            }, {
                key: "showbanner",
                value: function () {
                    y.showBanner(), Laya.timer.once(1600, this, this.showbanner);
                }
            }, {
                key: "hidebanner",
                value: function () {
                    y.hideBanner();
                }
            }, {
                key: "switchBtn",
                value: function () {
                    this._btnRandomStart.visible = !this._btnRandomStart.visible, this._btnContinue.visible = !this._btnContinue.visible;
                }
            }, {
                key: "onCloseClick",
                value: function () {
                    Laya.timer.clear(this, this.showDelayBanner), Laya.timer.clear(this, this.hidebanner),
                        y.hideBanner(), this._controller.try2GotoHome();
                }
            }, {
                key: "onBtnClick",
                value: function (e) {
                    var t, i;
                    switch (e.currentTarget) {
                        case this._btnBegin:
                            this._controller.try2Replay();
                            break;

                        case this._btnRandomStart:
                            this.try2AutoClickOneApp();
                            break;

                        case this._btnContinue:
                            1 == (null === (i = null === (t = Ue.data) || void 0 === t ? void 0 : t.versionConfig) || void 0 === i ? void 0 : i.derive_two) ? this.try2AutoClickOneApp() : (y.hideBanner(),
                                this._controller.try2GotoHome());
                    }
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function () {
                    var e = this._list.dataSource || [];
                    e.length && this._controller.gotoApp(c.randomOne(e));
                }
            }]), YLBeginGameRTView;
        }(), Te = function (e) {
            function YLHomeRTView() {
                return _classCallCheck(this, YLHomeRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLHomeRTView).apply(this, arguments));
            }
            return _inherits(YLHomeRTView, L), _createClass(YLHomeRTView, [{
                key: "onDeploy",
                value: function () {
                    this._imgLogo.skin = Ue.config.homeLogoUrl, console.log("YLHomeRTView onDeploy ", Ue.config.homeLogoUrl),
                        Re.bindVisible(this._spSoundOn, w, "isMute", !0, void 0, this), Re.bindVisible(this._spSoundOff, w, "isMute", !1, void 0, this),
                        Re.bindVisible(this._spVibrateOn, w, "canVibrate", !1, void 0, this), Re.bindVisible(this._spVibrateOff, w, "canVibrate", !0, void 0, this),
                        _get(_getPrototypeOf(YLHomeRTView.prototype), "onDeploy", this).call(this);
                }
            }, {
                key: "onEnable",
                value: function () {
                    platform.getInstance().hideSplash();
                    platform.getInstance().showBanner();
                    let score = Laya.LocalStorage.getItem("Drift-At-Will-MaxScore") ? JSON.parse(Laya.LocalStorage.getItem("Drift-At-Will-MaxScore")) : 0;
                    this.text_best.text = "Best:" + score;
                }
            }, {
                key: "onBtnClick",
                value: function (e) {
                    var t, i = [this._btnShare, this._btnMore];
                    if (!Ue.data.isAllSubpackagesLoaded && -1 === i.indexOf(e.currentTarget)) return w.toastMsg("请耐心等待，游戏正在努力加载中~");
                    if (Ue.data.isShowBoxClick && 1 == (null === (t = Ue.data.versionConfig) || void 0 === t ? void 0 : t.treasure_box)) return Ue.data.isShowBoxClick = !1,
                        void this._controller.try2ShowBoxClick();
                    switch (e.currentTarget) {
                        case this._btnSound:
                            w.isMute = !w.isMute;
                            window.WebAudioEngine && (window.WebAudioEngine.pause = w.isMute);
                            break;

                        case this._btnVibrate:
                            w.canVibrate = !w.canVibrate;
                            break;

                        case this._btnMore:
                            this._model.isMoreGameShowing = !0;
                            break;

                        case this._btnPlay:
                            platform.getInstance().showInterstitial(() => {
                                this._controller.try2ShowSkin(!0);
                            });
                            break;

                        case this._btnRank:
                            this._model.isRankShowing = !0;
                            break;

                        case this._btnSkin:
                            this._model.curStackView = O.VIEW_Store;
                            break;

                        case this._btnShare:
                            w.shareFriend(1);
                            break;

                        case this._btnCollect:
                            this._model.isFavoriteShowing = !0;
                    }
                }
            }, {
                key: "onDestroy",
                value: function () {
                    w.offAllCaller(this);
                }
            }]), YLHomeRTView;
        }(), De = function (e) {
            function YLAddGameRTSticker() {
                return _classCallCheck(this, YLAddGameRTSticker), _possibleConstructorReturn(this, _getPrototypeOf(YLAddGameRTSticker).apply(this, arguments));
            }
            return _inherits(YLAddGameRTSticker, Laya.Sprite), _createClass(YLAddGameRTSticker, [{
                key: "onAwake",
                value: function () {
                    this._img = this.getChildByName("img");
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.displayedInStage ? this.onDisplay() : this.once(Laya.Event.DISPLAY, this, this.onDisplay);
                }
            }, {
                key: "onDisable",
                value: function () {
                    this.off(Laya.Event.DISPLAY, this, this.onDisplay), this.reset();
                }
            }, {
                key: "onDisplay",
                value: function () {
                    var e = this.parent.globalToLocal(w.getRightUpFavouriteBtnPos());
                    this.pos(e.x, e.y), this.reset(), this._tl = new Laya.TimeLine(), this._tl.to(this._img, {
                        x: -30
                    }, 400, Laya.Ease.sineIn).to(this._img, {
                        x: 0
                    }, 400, Laya.Ease.sineOut), this._tl.play(void 0, !0);
                }
            }, {
                key: "reset",
                value: function () {
                    var e;
                    null === (e = this._tl) || void 0 === e || e.destroy(), this._tl = void 0, this._img.pos(0, 0);
                }
            }]), YLAddGameRTSticker;
        }(), Oe = function (e) {
            function YLMoreGameRTView() {
                return _classCallCheck(this, YLMoreGameRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLMoreGameRTView).apply(this, arguments));
            }
            return _inherits(YLMoreGameRTView, L), _createClass(YLMoreGameRTView, [{
                key: "onCloseClick",
                value: function () {
                    this._model.isMoreGameShowing = !1;
                }
            }]), YLMoreGameRTView;
        }(), Ye = function (e) {
            function YLADGameRTBanner2() {
                var e;
                return _classCallCheck(this, YLADGameRTBanner2), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTBanner2).call(this, 2)))._canShake = !1,
                    e._updateIntervalMs = 3e3, e;
            }
            return _inherits(YLADGameRTBanner2, re), _createClass(YLADGameRTBanner2, [{
                key: "initUI",
                value: function () {
                    var e = this.getChildByName("ad");
                    this._grids.push(e);
                }
            }, {
                key: "adHeight",
                get: function () {
                    var e;
                    return (null === (e = this._grids[0]) || void 0 === e ? void 0 : e.height) || 260;
                }
            }]), YLADGameRTBanner2;
        }(), Ee = function () {
            function GameConfig() {
                _classCallCheck(this, GameConfig);
            }
            return _createClass(GameConfig, null, [{
                key: "init",
                value: function () {
                    var e = Laya.ClassUtils.regClass;
                    e("youling/splash/view/runtime/YLSplashRTView.ts", $), e("youling/common/component/AlignWidget.ts", ee),
                        e("youling/main/view/runtime/YLCrazyClickRTView.ts", te), e("youling/main/view/runtime/gadgets/YLProgressRTPane.ts", ie),
                        e("youling/main/view/runtime/gadgets/YLHandClickRTPane.ts", ae), e("youling/main/view/runtime/YLFavoriteRTView.ts", ne),
                        e("youling/main/view/runtime/YLGameRTView.ts", oe), e("youling/common/component/ad/runtime/YLADGameRTBanner0.ts", se),
                        e("youling/common/component/ad/runtime/YLADGameRTGrid.ts", le), e("youling/common/component/ad/runtime/YLADGameRTSquare0.ts", he),
                        e("youling/main/view/runtime/YLNewbieRTView.ts", ce), e("youling/main/view/runtime/YLRankRTView.ts", ue),
                        e("youling/common/component/YLTabGroup.ts", pe), e("youling/common/component/YLTab.ts", de),
                        e("youling/common/component/ZoomButton.ts", S), e("youling/main/view/runtime/YLRebornRTView.ts", _e),
                        e("youling/common/component/ad/script/YLADGameList.ts", fe), e("youling/common/component/ad/script/YLADRealBanner.ts", ye),
                        e("youling/main/view/runtime/YLResultRTView.ts", me), e("youling/common/component/runtime/YLGoldRTPane.ts", ve),
                        e("youling/common/component/YLGoldPane.ts", ge), e("youling/common/component/ad/runtime/YLADGameRTSquare3.ts", ke),
                        e("youling/main/view/runtime/YLSearchPlayerRTView.ts", Se), e("youling/common/component/runtime/YLPlayerHeadRTGrid.ts", we),
                        e("youling/main/view/runtime/YLSearchVSPlayerRTView.ts", Ce), e("youling/main/view/runtime/gadgets/YLVSPlayerRTPane.ts", Le),
                        e("youling/main/view/runtime/YLSkinRTView.ts", be), e("youling/main/view/runtime/YLStoreRTView.ts", Pe),
                        e("youling/main/view/runtime/YLStoreRTGrid.ts", Ae), e("youling/main/view/runtime/YLSystemAppListRTView.ts", xe),
                        e("youling/main/view/runtime/gadgets/YLSystemAppListRTItem.ts", Be), e("youling/main/view/runtime/YLTreasureBoxRTView.ts", Me),
                        e("youling/main/view/runtime/YLBackHomeRTView.ts", Ve), e("youling/main/view/runtime/YLBeginGameRTView.ts", Ie),
                        e("youling/main/view/runtime/YLHomeRTView.ts", Te), e("youling/common/component/runtime/YLAddGameRTSticker.ts", De),
                        e("youling/main/view/runtime/YLMoreGameRTView.ts", Oe), e("youling/common/component/ad/runtime/YLADGameRTBanner2.ts", Ye);
                }
            }]), GameConfig;
        }();
        Ee.width = 750, Ee.height = 1335, Ee.scaleMode = "exactfit", Ee.screenMode = "none",
            Ee.alignV = "middle", Ee.alignH = "center", Ee.startScene = "sdk_youling/base/view/YLSplash.scene",
            Ee.sceneRoot = "", Ee.debug = !1, Ee.stat = !1, Ee.physicsDebug = !1, Ee.exportSceneToJson = !0,
            Ee.init();
        var Ge, Ne = function (e) {
            function YLDataModel() {
                var e;
                return _classCallCheck(this, YLDataModel), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLDataModel).apply(this, arguments)))._isSleep = !1,
                    e.CUR_VERSION = "2", e._token = "", e._shareInfoDic = {}, e._appListDic = {}, e._playerHeadsPool = [],
                    e._playerNamesPool = [], e._gold = 0, e._curScore = 0, e._isWatchingVidoeAd = !1,
                    e._worldRanks = [], e._useTime = 1e3, e._ownStoreItemIds = [], e._storeItemIdInUse = NaN,
                    e.activeAdNum = 0, e.splashShowTime = 0, e._isAllSubpackagesLoaded = !1, e._hasGameInit = !1,
                    e._round = 0, e._hasWrongClickOnBtnSkipReborn = !1, e._isOnGame = !1, e._hasRejectAuthor = !1,
                    e._isShowBoxClick = !1, e._isAfterBox = !1, e._isSceneBlacklist = !1, e;
            }
            return _inherits(YLDataModel, v), _createClass(YLDataModel, [{
                key: "getShareContent",
                value: function (e) {
                    var t, i = this._shareInfoDic[e];
                    return (null == i ? void 0 : i.length) && (t = c.randomOne(i)), t || (t = {
                        share_title: "",
                        share_img: "",
                        share_id: 1,
                        share_type: e
                    }), t;
                }
            }, {
                key: "hasRejectAuthor",
                get: function () {
                    return this._hasRejectAuthor;
                },
                set: function (e) {
                    this._hasRejectAuthor = e;
                }
            }, {
                key: "hasWrongClickOnBtnSkipReborn",
                get: function () {
                    return this._hasWrongClickOnBtnSkipReborn;
                },
                set: function (e) {
                    this._hasWrongClickOnBtnSkipReborn = e;
                }
            }, {
                key: "round",
                get: function () {
                    return this._round;
                },
                set: function (e) {
                    this.try2Set("round", e);
                }
            }, {
                key: "hasGameInit",
                get: function () {
                    return !Ue.hasDeployed || this._hasGameInit;
                },
                set: function (e) {
                    this.try2Set("hasGameInit", e);
                }
            }, {
                key: "isOnGame",
                get: function () {
                    return this._isOnGame;
                },
                set: function (e) {
                    this.try2Set("isOnGame", e);
                }
            }, {
                key: "isShowBoxClick",
                get: function () {
                    return this._isShowBoxClick;
                },
                set: function (e) {
                    this.try2Set("isShowBoxClick", e);
                }
            }, {
                key: "isAfterBox",
                get: function () {
                    return this._isAfterBox;
                },
                set: function (e) {
                    this.try2Set("isAfterBox", e);
                }
            }, {
                key: "isAllSubpackagesLoaded",
                get: function () {
                    return !Ue.hasDeployed || this._isAllSubpackagesLoaded;
                },
                set: function (e) {
                    this.try2Set("isAllSubpackagesLoaded", e);
                }
            }, {
                key: "storeItemIdInUse",
                get: function () {
                    return this._storeItemIdInUse;
                },
                set: function (e) {
                    this.try2Set("storeItemIdInUse", e), k.set("storeItemIdInUse", e);
                }
            }, {
                key: "ownStoreItemIds",
                get: function () {
                    return this._ownStoreItemIds;
                },
                set: function (e) {
                    e = e || [], c.uniq(e), this.try2Set("ownStoreItemIds", e), k.set("ownStoreItemIds", e.filter(Boolean).join(","));
                }
            }, {
                key: "useTime",
                get: function () {
                    return this._useTime;
                },
                set: function (e) {
                    this.try2Set("useTime", e);
                }
            }, {
                key: "worldRanks",
                get: function () {
                    return this._worldRanks;
                },
                set: function (e) {
                    this.try2Set("worldRanks", e);
                }
            }, {
                key: "isWatchingVidoeAd",
                get: function () {
                    return this._isWatchingVidoeAd;
                },
                set: function (e) {
                    this.try2Set("isWatchingVidoeAd", e);
                }
            }, {
                key: "curScore",
                get: function () {
                    return this._curScore;
                },
                set: function (e) {
                    this.try2Set("curScore", e);
                }
            }, {
                key: "gold",
                get: function () {
                    return this._gold;
                },
                set: function (e) {
                    this.try2Set("gold", e), k.set("gold", e);
                }
            }, {
                key: "playerHeadsPool",
                get: function () {
                    return this._playerHeadsPool;
                },
                set: function (e) {
                    this.try2Set("playerHeadsPool", e);
                }
            }, {
                key: "playerNamesPool",
                get: function () {
                    return this._playerNamesPool;
                },
                set: function (e) {
                    this.try2Set("playerNamesPool", e);
                }
            }, {
                key: "userInfo",
                get: function () {
                    return this._userInfo;
                },
                set: function (e) {
                    this.try2Set("userInfo", e);
                }
            }, {
                key: "appListDic",
                get: function () {
                    return this._appListDic;
                },
                set: function (e) {
                    this.try2Set("appListDic", e);
                }
            }, {
                key: "shareInfoDic",
                get: function () {
                    return this._shareInfoDic;
                },
                set: function (e) {
                    this.try2Set("shareInfoDic", e);
                }
            }, {
                key: "versionConfig",
                get: function () {
                    return this._versionConfig;
                },
                set: function (e) {
                    e && (e.banner_interval = e.banner_interval || 1e3, 1 !== e.delay && (e.latency_time = 0,
                        e.move_time = 0)), this.try2Set("versionConfig", e);
                }
            }, {
                key: "token",
                get: function () {
                    return this._token;
                },
                set: function (e) {
                    this.try2Set("token", e);
                }
            }, {
                key: "isSleep",
                get: function () {
                    return this._isSleep;
                },
                set: function (e) {
                    this.try2Set("isSleep", e);
                }
            }, {
                key: "isSceneBlacklist",
                get: function () {
                    return this._isSceneBlacklist;
                },
                set: function (e) {
                    this.try2Set("isSceneBlacklist", e);
                }
            }]), YLDataModel;
        }(), Ue = new (function () {
            function YLSDKClazz() {
                var e = this;
                _classCallCheck(this, YLSDKClazz), this._data = new Ne(), this._hasDeployed = !1,
                    this._defaultStoreRandomUnlockGold = function (t) {
                        if (e.config && t > 0) {
                            var i = 500;
                            return isNaN(i) ? 9999999 : i;
                        }
                        return -1;
                    }, this._defaultScore2Gold = function (e) {
                        return .1 * e >> 0;
                    };
            }
            return _createClass(YLSDKClazz, [{
                key: "configurate",
                value: function (e) {
                    var t, i, a, n, o, r;
                    e.load.liteSubpackage || (e.load.liteSubpackage = "sdk_youling_lite"), c.remove(e.load.subpackages, e.load.liteSubpackage),
                        e.numSearchPlayer = 16, e.overPlayerQueueMax = null !== (t = e.overPlayerQueueMax) && void 0 !== t ? t : 2,
                        e.score2Gold = e.score2Gold || this._defaultScore2Gold, e.storeRandomUnlockGold = e.storeRandomUnlockGold || this._defaultStoreRandomUnlockGold,
                        e.rebornMax = null !== (i = e.rebornMax) && void 0 !== i ? i : 2, e.searchPlayerMode = null !== (a = e.searchPlayerMode) && void 0 !== a ? a : 1,
                        e.authorTime = null !== (n = e.authorTime) && void 0 !== n ? n : "rank", e.storeVideoUnlockGold = null !== (o = e.storeVideoUnlockGold) && void 0 !== o ? o : 300,
                        e.BoxUnlockGold = null !== (r = e.BoxUnlockGold) && void 0 !== r ? r : 100, e.server.apiversion = e.server.apiversion || "null",
                        this._config = e;
                }
            }, {
                key: "deploy",
                value: function () {
                    this._config ? (
                        this._hasDeployed = !0
                        , Ee.physicsDebug = !1
                        , this._beanLauncher = new J()
                        , this._beanLauncher.run()
                    ) :
                        e.throwNormalError("请先执行 YLSDK.configurate 进行配置！");
                }
            }, {
                key: "hasDeployed",
                get: function () {
                    return this._hasDeployed;
                }
            }, {
                key: "data",
                get: function () {
                    return this._data;
                }
            }, {
                key: "config",
                get: function () {
                    return this._config;
                }
            }]), YLSDKClazz;
        }())(), He = Laya.ClassUtils.regClass;
        !function (e) {
            !function (e) {
                var t = function (e) {
                    function TestSceneUI() {
                        return _classCallCheck(this, TestSceneUI), _possibleConstructorReturn(this, _getPrototypeOf(TestSceneUI).call(this));
                    }
                    return _inherits(TestSceneUI, Laya.Scene), _createClass(TestSceneUI, [{
                        key: "createChildren",
                        value: function () {
                            _get(_getPrototypeOf(TestSceneUI.prototype), "createChildren", this).call(this),
                                this.loadScene("test/TestScene");
                        }
                    }]), TestSceneUI;
                }();
                e.TestSceneUI = t, He("ui.test.TestSceneUI", t);
            }(e.test || (e.test = {}));
        }(Ge || (Ge = {}));
        var Fe = function (e) {
            function LevelMapObjSprit() {
                var e;
                return _classCallCheck(this, LevelMapObjSprit), (e = _possibleConstructorReturn(this, _getPrototypeOf(LevelMapObjSprit).call(this))).endPos = new Laya.Vector3(),
                    e.endRot = new Laya.Vector3(), e;
            }
            return _inherits(LevelMapObjSprit, Laya.Script3D), LevelMapObjSprit;
        }(), We = function MapData() {
            _classCallCheck(this, MapData), this.levelMapDatas = new Array(), this.combinationDatas = new Array(),
                this.allLevel = 3, this.levelMapNumberList = new Array(), this.isTestRoute = !1,
                this.testRouteList = "1-5-74-54";
        }, Xe = function ObjectData() {
            _classCallCheck(this, ObjectData), this.collideTpye = 1, this.typeName = "", this.pos = new Laya.Vector3(0, 0, 0),
                this.rot = new Laya.Vector3(0, 0, 0), this.scale = new Laya.Vector3(1, 1, 1), this.param = [0, 0];
        }, je = function LevelMaps() {
            _classCallCheck(this, LevelMaps), this.dengji = 0, this.levelMaps = new Array();
        }, ze = function (e) {
            function CollisionObj() {
                var e;
                return _classCallCheck(this, CollisionObj), (e = _possibleConstructorReturn(this, _getPrototypeOf(CollisionObj).apply(this, arguments))).defaultStrength = 20,
                    e.isCollided = !1, e.defaulSpeed_y = 1, e;
            }
            return _inherits(CollisionObj, Laya.Script3D), _createClass(CollisionObj, [{
                key: "onAwake",
                value: function () {
                    this.transform = this.owner.transform, this.forwardSpeed = new Laya.Vector3(), this.speed_y = 0;
                }
            }, {
                key: "onEnable",
                value: function () {
                    this.isCollided = !1;
                }
            }, {
                key: "BeStrike",
                value: function (e, t) {
                    this.isCollided || (this.isCollided = !0, this.forwardSpeed = e, this.speed_y = this.defaulSpeed_y,
                        Laya.timer.frameLoop(1, this, this.loop), Laya.timer.once(3e3, this, this.loopEnd));
                }
            }, {
                key: "loop",
                value: function () {
                    var e = new Laya.Vector3(this.forwardSpeed.x, this.forwardSpeed.y, this.forwardSpeed.z);
                    Laya.Vector3.scale(e, 18 * Math.random() - 9, e), this.transform.rotate(e, !1, !1),
                        this.transform.translate(this.forwardSpeed, !1), this.transform.translate(new Laya.Vector3(0, this.speed_y, 0), !1),
                        this.speed_y -= 10 * 36 / 1e3;
                }
            }, {
                key: "loopEnd",
                value: function () {
                    Laya.timer.clear(this, this.loop);
                }
            }, {
                key: "onDisable",
                value: function () {
                    Laya.timer.clear(this, this.loop), Laya.timer.clear(this, this.loopEnd);
                }
            }]), CollisionObj;
        }(), qe = function () {
            function ObjPool3D() {
                _classCallCheck(this, ObjPool3D), this.modelObjs = new Array(), this.poolObjs = {};
                for (var e = Laya.loader.getRes("res/LayaScene_Model/Conventional/Model.lh").getChildByName("models"), t = 0; t < e.numChildren; t++) this.modelObjs.push(e.getChildAt(t));
                this._objPoolNode = new Laya.Sprite3D("poolNode");
            }
            return _createClass(ObjPool3D, [{
                key: "checkStructure",
                value: function (e) {
                    null == this.poolObjs[e] && (this.poolObjs[e] = []);
                }
            }, {
                key: "GetPrefabByName",
                value: function () {
                    for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ModelType.muban01").toString(), t = null, i = 0; i < this.modelObjs.length; i++) if (this.modelObjs[i].name == e) {
                        t = this.modelObjs[i];
                        break;
                    }
                    return null == t ? (console.log("没有找到模型：", e), null) : t;
                }
            }, {
                key: "InitObj",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Laya.Vector3(0, 1e3, -1e3), a = new Laya.Vector3(e.transform.position.x, e.transform.position.y, e.transform.position.z);
                    e.transform.position = i, e.active = !0, new Laya.Timer().once(t, this, function () {
                        e.transform.position = a, e.active = !1;
                    });
                }
            }, {
                key: "storage",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.checkStructure(e);
                    for (var i = 0; i < t; i++) {
                        var a = Laya.Sprite3D.instantiate(this.GetPrefabByName(e), this._objPoolNode);
                        this.poolObjs[e].push(a);
                    }
                }
            }, {
                key: "GetNewObj",
                value: function (e, t) {
                    if (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) {
                        if (this.checkStructure(e), 0 == this.poolObjs[e].length) {
                            var i = Laya.Sprite3D.instantiate(this.GetPrefabByName(e), t);
                            return t.addChild(i), i;
                        }
                        var a = this.poolObjs[e].shift();
                        return a.active = !0, t.addChild(a), a;
                    }
                    var n = Laya.Sprite3D.instantiate(this.GetPrefabByName(e), t);
                    return t.addChild(n), n;
                }
            }, {
                key: "RecoverObj",
                value: function (e) {
                    return !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] ? (e.active = !1,
                        this.checkStructure(e.name), -1 == this.poolObjs[e.name].indexOf(e) ? (this.poolObjs[e.name].push(e),
                            this._objPoolNode.addChild(e), !0) : (console.log("已在对象池中：", e.name, e.parent.name),
                                !1)) : (e.destroy(), !0);
                }
            }], [{
                key: "I",
                get: function () {
                    return null == ObjPool3D._instance && (ObjPool3D._instance = new ObjPool3D()), ObjPool3D._instance;
                }
            }]), ObjPool3D;
        }(), Ke = function () {
            function MapManage() {
                _classCallCheck(this, MapManage), this._levelMapList = new Array(), this._curHard = 0,
                    this._curLevelMapIndex = 0, this.maxLevelMapShowNumber = 2, this.levelMapLoadOffset = 0,
                    this.carTrapObjList = new Array(), this.toolsObjList = new Array(), this.xiaorenObjList = new Array(),
                    this.decorateObjList = new Array(), this.loadedMapIdList = "", this.testRouteList = "1-5-5-9-7",
                    this.testRoutes = new Array();
            }
            return _createClass(MapManage, [{
                key: "init",
                value: function (e) {
                    this._mapData = Laya.loader.getRes("res/Datas/Datas.json"), this._mapData.isTestRoute && (this.testRoutes = this._mapData.testRouteList.split("-"));
                    for (var t = 0; t < this._mapData.levelMapDatas.length; t++) {
                        this._mapData.levelMapDatas[t].id = t;
                    }
                    this.allLevelMaps = new Array();
                    for (var i = 0; i < this._mapData.levelMapDatas.length; i++) {
                        for (var a = this._mapData.levelMapDatas[i], n = !0, o = 0; o < this.allLevelMaps.length; o++) {
                            var r = this.allLevelMaps[o];
                            r.dengji == a.hardLevel && (n = !1, r.levelMaps.push(a));
                        }
                        if (n) {
                            var s = new je();
                            s.dengji = a.hardLevel, s.levelMaps.push(a), this.allLevelMaps.push(s);
                        }
                    }
                    this.gameScene = e, null == this._mapRootNode && (this._mapRootNode = new Laya.Sprite3D("_mapRootNode"),
                        this.gameScene.addChild(this._mapRootNode)), this.resetMap();
                }
            }, {
                key: "resetMap",
                value: function () {
                    for (; this._levelMapList.length > 0;) this.recoveryLevelMap(this._levelMapList.pop());
                    this._levelMapList = new Array(), this.loadedMapIdList = "", this._curLevelMapIndex = 0,
                        this._curHard = 0;
                    for (var e = 0; e < this.maxLevelMapShowNumber; e++) {
                        var t = this.addNewLevelMap();
                        if (et.I.playerController.changePointCheckList(0, t.levelMapData.bserPointList),
                            null != et.I.NPCList && et.I.NPCList.length > 0) for (var i = 0; i < et.I.NPCList.length; i++) et.I.NPCList[i].changePointCheckList(0, t.levelMapData.bserPointList);
                    }
                }
            }, {
                key: "UpdateLevelMapOnMove",
                value: function (e) {
                    if (null == this._levelMapList || this._levelMapList.length <= 1) console.log("地图队列为空或长度为1！！！"); else {
                        var t = this._levelMapList[0].getComponent(Fe).levelMapData.bserPointList.length;
                        if (e > t + 75) {
                            this.removeLastLeveMap();
                            var i = this.addNewLevelMap();
                            if (et.I.playerController.changePointCheckList(t, i.levelMapData.bserPointList),
                                null != et.I.NPCList && et.I.NPCList.length > 0) for (var a = 0; a < et.I.NPCList.length; a++) et.I.NPCList[a].changePointCheckList(t, i.levelMapData.bserPointList);
                        }
                    }
                }
            }, {
                key: "creatReviveFloor",
                value: function () {
                    var e = this._levelMapList[0].getChildByName("floorParent"), t = new Xe();
                    return t.collideTpye = 0, t.typeName = "sd01_mx", t.pos = new Laya.Vector3(0, 0, -15),
                        this.CreatAOrnament(t, e).transform.position.z;
                }
            }, {
                key: "removeLastLeveMap",
                value: function () {
                    var e = this._levelMapList.shift();
                    this.recoveryLevelMap(e);
                }
            }, {
                key: "addNewLevelMap",
                value: function () {
                    if (this._mapData.isTestRoute) {
                        var e = Number(this.testRoutes[this._curLevelMapIndex % this.testRoutes.length]);
                        return this.CreatDiTuByMapData(this._mapData.levelMapDatas[e - 1]);
                    }
                    this._curHard = this._mapData.allLevel - 1;
                    for (var t = 0, i = 0; i < this._mapData.allLevel; i++) if (t += this._mapData.levelMapNumberList[i],
                        this._curLevelMapIndex < t) {
                        this._curHard = i;
                        break;
                    }
                    return this.CreatDiTuByMapData(this.GetMapBylevel(this._curHard));
                }
            }, {
                key: "recoveryLevelMap",
                value: function (e) {
                    for (var t = 0; t < e.numChildren; t++) {
                        var i = e.getChildAt(t);
                        if ("compositeUnits" == i.name) for (var a = 0; a < i.numChildren; a++) for (var n = i.getChildAt(a); n.numChildren > 0;) qe.I.RecoverObj(n.getChildAt(0), !0); else for (; i.numChildren > 0;) qe.I.RecoverObj(i.getChildAt(0), !0);
                    }
                    e.destroy();
                }
            }, {
                key: "CreatDiTuByMapData",
                value: function (e) {
                    var t = this._mapRootNode.addChild(new Laya.Sprite3D()), i = t.addComponent(Fe);
                    i.levelMapData = JSON.parse(JSON.stringify(e));
                    for (var a, n = t.addChild(new Laya.Sprite3D("floorParent")), o = t.addChild(new Laya.Sprite3D("compositeUnits")), r = new Laya.Vector3(), s = new Laya.Vector3(), l = 0; l < e.mapLength; l++) {
                        if (null != a) {
                            var h = a.getChildByName("endPos");
                            null != h ? (r = h.transform.position, s = h.transform.rotationEuler) : console.error("该floor没有endpos：", a);
                        }
                        var c = new Xe();
                        c.collideTpye = 0, c.typeName = e.floorList[l];
                        for (var u = this.CreatAOrnament(c, n), d = 0; d < u.numChildren; d++) {
                            var p = u.getChildAt(d);
                            p.name.indexOf("_L") > 0 ? p.active = e.isLeftMountain : p.name.indexOf("_R") > 0 && (p.active = !e.isLeftMountain);
                        }
                        u.transform.localPosition = r, u.transform.localRotationEuler = s, a = u;
                    }
                    for (var _ = 0; _ < e.combinationCases.length; _++) {
                        var f = e.combinationCases[_], y = this._mapData.combinationDatas[f.combinationDataId], m = o.addChild(new Laya.Sprite3D("composite" + _.toString()));
                        m.transform.localPosition = new Laya.Vector3(-f.pos.x, f.pos.y, f.pos.z), m.transform.localRotationEuler = new Laya.Vector3(f.rot.x, -f.rot.y, -f.rot.z),
                            this.CreatMapCombination(null, y.objComList, null, y.decorateList, m.transform);
                    }
                    if (this.CreatMapCombination(null, e.objList, null, e.decorateList, t.transform),
                        this._curLevelMapIndex++, this._levelMapList.length >= 1) {
                        var v = this._levelMapList[this._levelMapList.length - 1].getComponent(Fe);
                        t.transform.position = v.endPos, t.transform.rotationEuler = v.endRot;
                    }
                    var g = (a = n.getChildAt(e.mapLength - 1)).getChildByName("endPos");
                    i.endPos = g.transform.position, i.endRot = g.transform.rotationEuler;
                    for (var k = 0; k < i.levelMapData.bserPointList.length; k++) {
                        var w = i.levelMapData.bserPointList[k];
                        Laya.Vector3.transformQuat(w, t.transform.rotation, w), Laya.Vector3.add(w, t.transform.position, w);
                    }
                    return this._levelMapList.push(t), this.loadedMapIdList += (e.id + 1).toString() + "-",
                        i;
                }
            }, {
                key: "CreatMapCombination",
                value: function (e, t, i, a, n) {
                    n.owner.addChild(new Laya.Sprite3D("roleParent"));
                    var o = n.owner.addChild(new Laya.Sprite3D("trapParent")), r = (n.owner.addChild(new Laya.Sprite3D("toolParent")),
                        n.owner.addChild(new Laya.Sprite3D("decorateParent")));
                    if (null != t) for (var s = 0; s < t.length; s++) {
                        var l = t[s], h = this.CreatAOrnament(l, o);
                        if (h.numChildren > 0) {
                            var c = h.getChildAt(0).getComponent(Laya.Rigidbody3D);
                            null != c && (c.isKinematic = !1);
                        }
                    }
                    if (null != a) for (var u = 0; u < a.length; u++) {
                        var d = a[u], p = this.CreatAOrnament(d, r);
                        p.getComponent(ze) || p.addComponent(ze);
                    }
                }
            }, {
                key: "GetMapBylevel",
                value: function (e) {
                    for (var t = 0; t < this.allLevelMaps.length; t++) {
                        var i = this.allLevelMaps[t];
                        if (i.dengji == e) {
                            var a = Math.floor(Math.random() * i.levelMaps.length), n = i.levelMaps.splice(a, 1)[0];
                            if (null != n) return n;
                            break;
                        }
                    }
                    for (var o = 0; o < this._mapData.levelMapDatas.length; o++) {
                        var r = this._mapData.levelMapDatas[o];
                        r.hardLevel == e && this.allLevelMaps[e].levelMaps.push(r);
                    }
                    return this.GetMapBylevel(e);
                }
            }, {
                key: "CreatAOrnament",
                value: function (e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = qe.I.GetNewObj(e.typeName, t, i);
                    return a.transform.localPosition = new Laya.Vector3(-e.pos.x, e.pos.y, e.pos.z),
                        a.transform.localRotationEuler = new Laya.Vector3(e.rot.x, -e.rot.y, -e.rot.z),
                        a.transform.localScale = new Laya.Vector3(e.scale.x, e.scale.y, e.scale.z), a;
                }
            }]), MapManage;
        }(), Ze = function (e) {
            function CrownObj() {
                return _classCallCheck(this, CrownObj), _possibleConstructorReturn(this, _getPrototypeOf(CrownObj).apply(this, arguments));
            }
            return _inherits(CrownObj, Laya.Script3D), _createClass(CrownObj, [{
                key: "onAwake",
                value: function () {
                    this.transform = this.owner.transform;
                }
            }, {
                key: "onUpdate",
                value: function () {
                    this.transform.rotate(new Laya.Vector3(0, 1, 0), !0, !1);
                }
            }]), CrownObj;
        }(), Qe = function () {
            function Tools() {
                _classCallCheck(this, Tools);
            }
            return _createClass(Tools, null, [{
                key: "getComOnAllParent",
                value: function (e, t) {
                    if (null == e) return null;
                    var i = e.getComponent(t);
                    return null != i ? i : Tools.getComOnAllParent(e.parent, t);
                }
            }, {
                key: "getCompOnParent",
                value: function (e, t) {
                    if (null == e) return null;
                    var i = e.getComponent(t);
                    return null != i ? i : null != e.parent ? e.parent.getComponent(t) : null;
                }
            }, {
                key: "setFog",
                value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 50;
                    e.enableFog = !0, e.fogColor = Tools.getRGB(t), e.fogStart = i, e.fogRange = a;
                }
            }, {
                key: "getRGB",
                value: function (e) {
                    var t = [], i = [], a = e.replace(/#/, "");
                    if (3 == a.length) {
                        for (var n = [], o = 0; o < 3; o++) n.push(a.charAt(o) + a.charAt(o));
                        a = n.join("");
                    }
                    for (o = 0; o < 3; o++) t[o] = "0x" + a.substr(2 * o, 2), i.push(parseInt(t[o]));
                    return new Laya.Vector3(i[0] / 255, i[1] / 255, i[2] / 255);
                }
            }, {
                key: "IsConvexAngle",
                value: function (e, t) {
                    var i = new Laya.Vector3();
                    return Laya.Vector3.cross(e, t, i), Laya.Vector3.dot(new Laya.Vector3(0, 1, 0), i) >= 0;
                }
            }]), Tools;
        }(), Je = function (e) {
            function NPC_RoleObj() {
                var e;
                return _classCallCheck(this, NPC_RoleObj), (e = _possibleConstructorReturn(this, _getPrototypeOf(NPC_RoleObj).call(this))).forwardSpeed = 1,
                    e.driftSpeed = .6, e.driftLimit = 20, e.rotSpeedOnFly = 4, e.angleLimit = 75, e.speedUpDuration = 3e3,
                    e.speedUpTimes = 1.5, e.UnstoppableDuration = 5e3, e.isNPC = !1, e.isMove = !1,
                    e.isDrift = !1, e.isFly = !1, e.isPress = !1, e.isLeftDrift = !1, e.isSuperSpeed = !1,
                    e.isUnstoppable = !1, e.isOver = !1, e.hitResult = new Laya.HitResult(), e.targetPos = new Laya.Vector3(0, 0, 1),
                    e.groundNormal = new Laya.Vector3(0, 0, 0), e.direction = new Laya.Vector3(0, 0, 1),
                    e.currentSpeed = 0, e.pointCheckCount = 5, e._CheckIndex = 0, e.curSkinIndex = -1,
                    e.randTime = new Laya.Vector2(2e3, 6e3), e.randAngle = 15, e.curRandTime = 0, e.curRandAngle = 0,
                    e.isColled = !1, e.dir = new Laya.Vector3(), e.collTime = 1e3, e.speedY = 0, e.minFlyHeight = 0,
                    e;
            }
            return _inherits(NPC_RoleObj, Laya.Script3D), _createClass(NPC_RoleObj, [{
                key: "onAwake",
                value: function () {
                    this.gameObj = this.owner, this.transform = this.gameObj.transform, this.rigidBody = this.owner.getComponent(Laya.Rigidbody3D),
                        this.CarRotY = this.owner.getChildByName("CarRotY").transform, this.CarRotX = this.CarRotY.owner.getChildByName("CarRotX").transform,
                        this.setSkin(Math.ceil(9 * Math.random())), this.from = this.CarRotX.owner.getChildByName("from").transform,
                        this.to = this.CarRotX.owner.getChildByName("to").transform, this.FX_PY_Speed = this.CarRotX.owner.getChildByName("FX_PY_Speed"),
                        this.FX_PY_Speed.active = !1, this.FX_PY_Drift = this.CarRotX.owner.getChildByName("FX_PY_Drift"),
                        this.FX_PY_Drift.active = !1, this.curRoadDirect = new Laya.Vector3(0, 0, 1), this.curAngleYSection = new Laya.Vector2(-this.angleLimit, this.angleLimit),
                        this.curPointCheckList = new Array(), this.currentSpeed = 0, this.curRandAngle = 0,
                        this.curRandTime = this.randTime.x + Math.random() * this.randTime.y;
                }
            }, {
                key: "setSkin",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (this.curSkinIndex != e) {
                        if (this.curSkinIndex = e, null != this.carAnimator) {
                            var t = this.carAnimator.owner.parent;
                            qe.I.RecoverObj(t, !0);
                        }
                        var i = "pf0" + e.toString();
                        this.pf = qe.I.GetNewObj(i, this.CarRotX.owner, !0), this.pf.transform.localPosition = new Laya.Vector3(),
                            this.carAnimator = this.pf.getChildAt(0).getComponent(Laya.Animator), this.roleAnimator = this.pf.getChildAt(1).getComponent(Laya.Animator),
                            this.roleAnimator.play("front"), this.carAnimator.play("front");
                    }
                }
            }, {
                key: "ReSetPlayer",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Laya.Vector3(0, 0, 0), t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    Laya.timer.clear(this, this.speedUpOver), Laya.timer.clear(this, this.moveByFrame),
                        this.isColled = !1, this.curRandAngle = 0, this.curRandTime = this.randTime.x + Math.random() * this.randTime.y,
                        this.isSuperSpeed = !1, this.FX_PY_Speed.active = !1, this.roleAnimator.play("front"),
                        this.carAnimator.play("front"), this.isMove = !1, this.transform.localPosition = e,
                        this.localRotY = 0, this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0),
                        this.localRotX = 0, this.CarRotX.localRotationEulerX = this.localRotX, this._CheckIndex = t,
                        this.curPointCheckList = new Array(), this.isFly = !1;
                }
            }, {
                key: "startMove",
                value: function () {
                    this.currentSpeed = this.forwardSpeed, this.isMove = !0, this.localRotX = 0, this.localRotY = 0;
                }
            }, {
                key: "onUpdate",
                value: function () {
                    if (this.isMove && !this.isOver) if (this.isFly) {
                        if (et.I.gameScenes.physicsSimulation.raycastFromTo(this.from.position, this.to.position, this.hitResult) && this.hitResult.collider.owner.name.indexOf("gangplank_mx") >= 0) return this.targetPos = this.hitResult.point,
                            this.groundNormal = this.hitResult.normal, this.direction = new Laya.Vector3(),
                            Laya.Vector3.subtract(this.targetPos, this.transform.position, this.direction),
                            Laya.Vector3.normalize(this.direction, this.direction), Laya.Vector3.scale(this.direction, this.currentSpeed, this.direction),
                            void this.transform.translate(this.direction, !1);
                        if (this.transform.translate(this.direction, !1), this.transform.translate(new Laya.Vector3(0, this.speedY, 0), !1),
                            this.speedY -= .5 * 36 / 1e3, this.isPress && (this.CarRotX.localRotationEulerX += this.rotSpeedOnFly),
                            this.speedY < 0) {
                            if (et.I.gameScenes.physicsSimulation.raycastFromTo(this.from.position, this.to.position, this.hitResult) && (this.hitResult.collider.owner.name.indexOf("lu") >= 0 || this.hitResult.collider.owner.name.indexOf("cao") >= 0 || this.hitResult.collider.owner.name.indexOf("Plane") >= 0)) {
                                var e = this.CarRotX.localRotationEulerX % 360;
                                e < 45 || e > 315 ? (this.transform.position = this.hitResult.point, this.CarRotX.localRotationEulerX = 0,
                                    this.isFly = !1) : (this.isMove = !1, this.isOver = !0, this.transform.position = this.hitResult.point,
                                        this.CarRotX.localRotationEulerX = 0, this.roleAnimator.play("falldown"), this.carAnimator.play("falldown"),
                                        Laya.timer.once(2e3, this, this.onRevive));
                            }
                            this.transform.position.y < this.minFlyHeight && this.fall();
                        }
                    } else {
                        if (this.curRandTime <= 0) {
                            this.curRandAngle = Math.random() * this.randAngle;
                            var t = new Laya.Vector3();
                            Laya.Vector3.subtract(this.transform.position, this.curPointCheckList[this.CheckIndex], t);
                            var i = this.curRoadDirect;
                            Qe.IsConvexAngle(t, i) || (this.curRandAngle = -this.curRandAngle), this.curRandTime = this.randTime.x + Math.random() * this.randTime.y;
                        } else this.curRandTime -= 36;
                        if (this.curRandAngle -= .02 * this.curRandAngle, Math.abs(this.curRandAngle) < 1 && (this.curRandAngle = 0),
                            this.CheckIndex + 1 >= this.curPointCheckList.length - 1) return;
                        for (var a = 0, n = Laya.Vector3.distanceSquared(this.transform.position, this.curPointCheckList[this.CheckIndex]), o = 0; o < this.pointCheckCount && !(this.CheckIndex + o >= this.curPointCheckList.length); o++) {
                            var r = Laya.Vector3.distanceSquared(this.transform.position, this.curPointCheckList[this.CheckIndex + o]);
                            n >= r && (a = o, n = r);
                        }
                        this.CheckIndex += a, Laya.Vector3.subtract(this.curPointCheckList[this.CheckIndex + 1], this.curPointCheckList[this.CheckIndex], this.curRoadDirect),
                            Laya.Vector3.normalize(this.curRoadDirect, this.curRoadDirect);
                        var s = Math.acos(Laya.Vector3.dot(new Laya.Vector3(0, 1, 0), this.groundNormal)) / Math.PI * 180;
                        this.localRotX = this.localRotX + .05 * (s - this.localRotX), this.CarRotX.localRotationEulerX = this.localRotX;
                        var l = new Laya.Vector3(this.curRoadDirect.x, 0, this.curRoadDirect.z), h = 0;
                        h = 0 != l.z ? Math.atan(l.x / l.z) / Math.PI * 180 : l.x > 0 ? 90 : -90, this.curRoadDirect.z < 0 && (h = 180 + h),
                            this.localRotY = h + this.curRandAngle, this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0),
                            et.I.gameScenes.physicsSimulation.raycastFromTo(this.from.position, this.to.position, this.hitResult) ? ((this.hitResult.collider.owner.name.indexOf("lu") >= 0 || this.hitResult.collider.owner.name.indexOf("cao") >= 0 || this.hitResult.collider.owner.name.indexOf("Plane") >= 0) && (this.targetPos = this.hitResult.point,
                                this.groundNormal = this.hitResult.normal, this.direction = new Laya.Vector3(),
                                Laya.Vector3.subtract(this.targetPos, this.transform.position, this.direction),
                                Laya.Vector3.normalize(this.direction, this.direction), Laya.Vector3.scale(this.direction, this.currentSpeed, this.direction)),
                                this.transform.translate(this.direction, !1)) : this.fall(), this.isDrift ? (this.targetSpeed = this.driftSpeed,
                                    this.FX_PY_Drift.active = !0) : (this.targetSpeed = this.forwardSpeed, this.FX_PY_Drift.active = !1),
                            this.isSuperSpeed && (this.targetSpeed = this.targetSpeed * this.speedUpTimes),
                            this.currentSpeed = .02 * (this.targetSpeed - this.currentSpeed) + this.currentSpeed;
                    }
                }
            }, {
                key: "onTriggerEnter",
                value: function (e) {
                    var t = e.owner.name, i = Qe.getCompOnParent(e.owner, ze);
                    if (i && !(t.indexOf("roadblock_mx") >= 0)) {
                        var a = Laya.Quaternion.DEFAULT;
                        Laya.Quaternion.createFromAxisAngle(new Laya.Vector3(0, 1, 0), (Math.random() - .5) * Math.PI / 3, a);
                        var n = new Laya.Vector3();
                        return Laya.Vector3.transformQuat(this.direction, a, n), void i.BeStrike(n, 0);
                    }
                    if (t.indexOf("gangplank_mx") >= 0) this.flight(); else if (t.indexOf("speed_mx") >= 0) this.speedUp(); else if (t.indexOf("car") >= 0 || t.indexOf("wood_mx") >= 0 || t.indexOf("stone") >= 0 || t.indexOf("shan") >= 0 || t.indexOf("roadblock_mx") >= 0 || t.indexOf("tree_mx") >= 0) this.isUnstoppable || this.crash(); else if (t.indexOf("NPC") >= 0 || t.indexOf("player") >= 0) {
                        var o = new Laya.Vector3();
                        Laya.Vector3.subtract(this.transform.position, e.owner.transform.position, o), this.isColled || (this.collTime = 1e3,
                            this.isColled = !0, this.dir = o, Laya.Vector3.scale(this.dir, .15, this.dir), this.iscollisioned());
                    }
                }
            }, {
                key: "iscollisioned",
                value: function () {
                    Laya.timer.frameLoop(1, this, this.moveByFrame);
                }
            }, {
                key: "moveByFrame",
                value: function () {
                    var e = new Laya.Vector3();
                    if (Laya.Vector3.scale(this.dir, this.collTime / 1e3, e), this.collTime > 800) {
                        var t = 1 - (this.collTime - 800) / 200, i = 1 + .05 * (1 - 4 * Math.pow(t - .5, 2));
                        this.pf.transform.localScale = new Laya.Vector3(i, i, i);
                    }
                    this.transform.translate(e), this.collTime -= 36, this.collTime <= 0 && (Laya.timer.clear(this, this.moveByFrame),
                        this.isColled = !1, this.collTime = 1e3);
                }
            }, {
                key: "flight",
                value: function () {
                    this.CarRotY.getForward(this.direction), Laya.Vector3.scale(this.direction, -this.currentSpeed, this.direction),
                        this.isDrift = !1, this.FX_PY_Drift.active = !1, this.CarRotX.localRotationEulerX = -30,
                        this.speedY = .25, this.isFly = !0, this.minFlyHeight = this.transform.position.y - 40;
                }
            }, {
                key: "fall",
                value: function () {
                    this.isFly = !0, this.isMove = !1, this.roleAnimator.crossFade("falldown02", .4),
                        this.carAnimator.crossFade("falldown02", .4), this.FX_PY_Drift.active = !1, Laya.timer.once(2e3, this, this.onRevive);
                }
            }, {
                key: "crash",
                value: function () {
                    this.FX_PY_Drift.active = !1, this.roleAnimator.crossFade("falldown03", .4), this.carAnimator.crossFade("falldown03", .4),
                        this.isMove = !1, Laya.timer.once(2e3, this, this.onRevive);
                }
            }, {
                key: "speedUp",
                value: function () {
                    Laya.timer.clear(this, this.speedUpOver), this.isSuperSpeed = !0, Laya.timer.once(this.speedUpDuration, this, this.speedUpOver),
                        this.targetSpeed = this.targetSpeed * this.speedUpTimes, this.currentSpeed = this.targetSpeed,
                        this.FX_PY_Speed.active = !0;
                }
            }, {
                key: "speedUpOver",
                value: function () {
                    this.isSuperSpeed = !1, this.FX_PY_Speed.active = !1;
                }
            }, {
                key: "changePointCheckList",
                value: function (e, t) {
                    this.curPointCheckList.splice(0, e), this.curPointCheckList = this.curPointCheckList.concat(t),
                        this.CheckIndex >= e ? this.CheckIndex -= e : this.onRevive();
                }
            }, {
                key: "onRevive",
                value: function () {
                    this.isMove = !0, this.isDrift = !1, this.FX_PY_Drift.active = !1, this.CarRotX.localRotationEulerX = 0,
                        this.speedY = 0, this.isFly = !1, this.isSuperSpeed = !1, this.FX_PY_Speed.active = !1,
                        this.roleAnimator.play("front"), this.carAnimator.play("front"), this.localRotX = 0,
                        this.localRotY = 0, this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0),
                        this.CheckIndex = et.I.playerController.CheckIndex - Math.ceil(15 + 15 * Math.random()),
                        this.CheckIndex < 0 && (this.CheckIndex = 0), this.transform.position = new Laya.Vector3(this.curPointCheckList[this.CheckIndex].x + 10 * Math.random() - 5, this.curPointCheckList[this.CheckIndex].y, this.curPointCheckList[this.CheckIndex].z + 10 * Math.random() - 5),
                        Laya.Vector3.subtract(this.curPointCheckList[this.CheckIndex + 1], this.curPointCheckList[this.CheckIndex], this.curRoadDirect),
                        Laya.Vector3.normalize(this.curRoadDirect, this.curRoadDirect), this.CarRotX.localRotationEulerX = 0;
                    var e = new Laya.Vector3(this.curRoadDirect.x, 0, this.curRoadDirect.z), t = 0;
                    t = 0 != e.z ? Math.atan(e.x / e.z) / Math.PI * 180 : e.x > 0 ? 90 : -90, this.curRoadDirect.z < 0 && (t = 180 + t),
                        this.localRotY = t, this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0);
                }
            }, {
                key: "curPointCheckList",
                get: function () {
                    return this._curPointCheckList;
                },
                set: function (e) {
                    this._curPointCheckList = e;
                }
            }, {
                key: "CheckIndex",
                get: function () {
                    return this._CheckIndex;
                },
                set: function (e) {
                    this._CheckIndex = e;
                }
            }]), NPC_RoleObj;
        }(), $e = function (e) {
            function PlayerController() {
                var e;
                return _classCallCheck(this, PlayerController), (e = _possibleConstructorReturn(this, _getPrototypeOf(PlayerController).call(this))).forwardSpeed = 1,
                    e.driftSpeed = .6, e.driftLimit = 20, e.rotSpeedOnFly = 8, e.angleLimit = 75, e.speedUpDuration = 3e3,
                    e.speedUpTimes = 1.5, e.UnstoppableDuration = 5e3, e.allOilGasNumber = 8, e.driftSpeedUpTime = 3e3,
                    e.pointCheckCount = 5, e.isOver = !1, e.isMove = !1, e.isDrift = !1, e.isFly = !1,
                    e.isPress = !1, e.isLeftDrift = !1, e.isSuperSpeed = !1, e.isUnstoppable = !1, e.isLoseControl = !1,
                    e.isDriftSpeedUp = !1, e._CheckIndex = 0, e.localRotY = 0, e.localRotX = 0, e.hitResult = new Laya.HitResult(),
                    e.targetPos = new Laya.Vector3(0, 0, 1), e.groundNormal = new Laya.Vector3(0, 0, 0),
                    e.direction = new Laya.Vector3(0, 0, 1), e.hitNoThingMax = 5, e.curHitNo = 0, e.posTest = new Laya.Vector3(),
                    e.curSkinIndex = -1, e.playDriftVoiceTime = 600, e.isColled = !1, e.dir = new Laya.Vector3(),
                    e.collTime = 1e3, e.startPoint = new Laya.Point(), e.diffX = 0, e.diffY = 0, e.moveValue = new Laya.Vector3(),
                    e.speedControlPara = .22, e.speedY = 0, e.minFlyHeight = 0, e;
            }
            return _inherits(PlayerController, Laya.Script3D), _createClass(PlayerController, [{
                key: "onAwake",
                value: function () {
                    this.gameObj = this.owner, this.transform = this.gameObj.transform, this.rigidBody = this.owner.getComponent(Laya.Rigidbody3D),
                        this.CameraPos = et.I.gameScenes.getChildByName("CameraPos"), this.CarRotY = this.owner.getChildByName("CarRotY").transform,
                        this.CarRotX = this.CarRotY.owner.getChildByName("CarRotX").transform, this.setSkin(),
                        this.Plane = this.CarRotX.owner.getChildByName("Plane"), this.Plane.active = !0,
                        this.FX_PY_Speed = this.CarRotX.owner.getChildByName("FX_PY_Speed"), this.Wind_Pos = this.CameraPos.getChildByName("Wind_Pos"),
                        this.FX_PY_Run_Wind = this.Wind_Pos.getChildByName("FX_PY_Run_Wind"), this.FX_PY_Speed_Wind = this.Wind_Pos.getChildByName("FX_PY_Speed_Wind"),
                        this.FX_PY_Speed.active = !1, this.FX_PY_Run_Wind.active = !1, this.FX_PY_Speed_Wind.active = !1,
                        this.FX_PY_Shield = this.CameraPos.getChildByName("FX_PY_Shield"), this.FX_PY_Shield.active = !1,
                        this.FX_PY_Drift = this.CarRotX.owner.getChildByName("FX_PY_Drift"), this.FX_PY_Drift.active = !1,
                        this.from = this.CameraPos.getChildByName("from").transform, this.to = this.CameraPos.getChildByName("to").transform,
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUpEvent),
                        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent),
                        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), this.curRoadDirect = new Laya.Vector3(),
                        this.curAngleYSection = new Laya.Vector2(-this.angleLimit, this.angleLimit), this.curPointCheckList = new Array(),
                        this.curOilValue = 0;
                }
            }, {
                key: "TestKEY",
                value: function (e) {
                    Laya.Vector3.add(this.posTest, new Laya.Vector3(0, 0, 100), this.posTest);
                    var t = et.I.WorldToScreen(this.posTest);
                    console.log("newPos", t);
                }
            }, {
                key: "ReSetPlayer",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Laya.Vector3(0, 0, 0);
                    Laya.timer.clear(this, this.speedUpOver), Laya.timer.clear(this, this.moveByFrame),
                        this.isColled = !1, this.roleAnimator.play("front"), this.carAnimator.play("front"),
                        this.isMove = !1, this.transform.localPosition = e, this.localRotY = 0, this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0),
                        this.localRotX = 0, this.CarRotX.localRotationEulerX = this.localRotX, this.CameraPos.transform.position = this.CarRotY.position;
                    var t = new Laya.Vector3(0, 0, 0);
                    this.CameraPos.transform.localRotationEuler = t, this._CheckIndex = 0, this.curPointCheckList = new Array(),
                        this.curOilValue = 0, this.isFly = !1, this.isLoseControl = !1, this.FX_PY_Run_Wind.active = !1,
                        this.FX_PY_Speed_Wind.active = !1, this.Plane.active = !0, Laya.stage.event("UpDataOil", this.curOilValue / this.allOilGasNumber);
                    var i = {
                        curScore: Math.ceil(et.I.Score)
                    };
                    Y.emit(D.G2S_UPDATE_CUR_SCORE, i), w.stopSound("drift");
                }
            }, {
                key: "setSkin",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (this.curSkinIndex != e) {
                        if (this.curSkinIndex = e, null != this.carAnimator) {
                            var t = this.carAnimator.owner.parent;
                            qe.I.RecoverObj(t, !0);
                        }
                        var i = "pf0" + e.toString();
                        this.pf = qe.I.GetNewObj(i, this.CarRotX.owner, !0), this.carAnimator = this.pf.getChildAt(0).getComponent(Laya.Animator),
                            this.roleAnimator = this.pf.getChildAt(1).getComponent(Laya.Animator), this.pf.transform.localPosition = new Laya.Vector3(0, -1.251, 0),
                            this.roleAnimator.play("front"), this.carAnimator.play("front");
                    }
                }
            }, {
                key: "ReLive",
                value: function () {
                    var e = this;
                    Laya.stage.event("endDrift"), Laya.timer.clear(this, this.speedUpOver), Laya.timer.clear(this, this.moveByFrame),
                        this.isColled = !1, this.roleAnimator.play("front"), this.carAnimator.play("front"),
                        this.CheckIndex -= 10, this.CheckIndex < 0 && (this.CheckIndex = 0), this.transform.position = new Laya.Vector3(this.curPointCheckList[this.CheckIndex].x, this.curPointCheckList[this.CheckIndex].y, this.curPointCheckList[this.CheckIndex].z),
                        Laya.Vector3.subtract(this.curPointCheckList[this.CheckIndex + 1], this.curPointCheckList[this.CheckIndex], this.curRoadDirect),
                        Laya.Vector3.normalize(this.curRoadDirect, this.curRoadDirect), this.CarRotX.localRotationEulerX = 0;
                    var t = new Laya.Vector3(this.curRoadDirect.x, 0, this.curRoadDirect.z), i = 0;
                    i = 0 != t.z ? Math.atan(t.x / t.z) / Math.PI * 180 : t.x > 0 ? 90 : -90, this.curRoadDirect.z < 0 && (i = 180 + i),
                        this.localRotY = i, this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0),
                        this.CameraPos.transform.position = this.CarRotY.position, this.CameraPos.transform.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0),
                        this.isMove = !0, this.isLoseControl = !1, this.isFly = !1, this.Plane.active = !0,
                        this.getUnstoppableBuff(), Laya.timer.once(100, this, function () {
                            et.I.gameScenes.physicsSimulation.raycastFromTo(e.from.position, e.to.position, e.hitResult) ? (e.hitResult.collider.owner.name.indexOf("lu") >= 0 || e.hitResult.collider.owner.name.indexOf("cao") >= 0 || e.hitResult.collider.owner.name.indexOf("Plane") >= 0) && (e.transform.position = e.hitResult.point,
                                e.CameraPos.transform.position = e.CarRotY.position, w.playSoundEffect("down", 1)) : console.log("复活检测点失败！");
                        });
                }
            }, {
                key: "onUpdate",
                value: function () {
                    if (this.playDriftVoiceTime >= 0 && (this.playDriftVoiceTime -= 36),
                        this.isMove) {
                        if (!this.isLoseControl) {
                            this.CameraPos.transform.position = this.CarRotY.position;
                            var e = new Laya.Vector3(0, this.CameraPos.transform.localRotationEulerY, 0);
                            Laya.Vector3.lerp(e, new Laya.Vector3(0, this.localRotY, 0), .02, e), this.CameraPos.transform.localRotationEuler = e,
                                this.Wind_Pos.transform.localRotationEuler = new Laya.Vector3(0, .05 * (this.localRotY - e.y), 0);
                        }
                        if (this.isFly) {
                            if (et.I.gameScenes.physicsSimulation.raycastFromTo(this.from.position, this.to.position, this.hitResult) && this.hitResult.collider.owner.name.indexOf("gangplank_mx") >= 0) return this.targetPos = this.hitResult.point,
                                this.groundNormal = this.hitResult.normal, this.direction = new Laya.Vector3(),
                                Laya.Vector3.subtract(this.targetPos, this.transform.position, this.direction),
                                Laya.Vector3.normalize(this.direction, this.direction), Laya.Vector3.scale(this.direction, this.currentSpeed, this.direction),
                                void this.transform.translate(this.direction, !1);
                            if (this.CameraPos.transform.getForward(this.direction), Laya.Vector3.scale(this.direction, -this.currentSpeed, this.direction),
                                this.transform.translate(this.direction, !1), this.transform.translate(new Laya.Vector3(0, this.speedY, 0), !1),
                                this.speedY -= .45 * 36 / 1e3, this.speedY < 0) {
                                if (et.I.gameScenes.physicsSimulation.raycastFromTo(this.from.position, this.to.position, this.hitResult) && (this.hitResult.collider.owner.name.indexOf("lu") >= 0 || this.hitResult.collider.owner.name.indexOf("cao") >= 0 || this.hitResult.collider.owner.name.indexOf("Plane") >= 0)) {
                                    this.CarRotX.localRotationEulerX;
                                    this.transform.position = this.hitResult.point, this.CarRotX.localRotationEulerX = 0,
                                        this.isFly = !1, this.Plane.active = !0, w.playSoundEffect("run", 0), w.playSoundEffect("down", 1);
                                }
                                this.transform.position.y < this.minFlyHeight && (console.log("玩家陆地点过低，判断坠崖，死亡！"),
                                    this.fall());
                            }
                        } else {
                            if (et.I.gameScenes.physicsSimulation.raycastFromTo(this.from.position, this.to.position, this.hitResult)) (this.hitResult.collider.owner.name.indexOf("lu") >= 0 || this.hitResult.collider.owner.name.indexOf("cao") >= 0 || this.hitResult.collider.owner.name.indexOf("Plane") >= 0) && (this.targetPos = this.hitResult.point,
                                this.groundNormal = this.hitResult.normal, this.direction = new Laya.Vector3(),
                                Laya.Vector3.subtract(this.targetPos, this.transform.position, this.direction),
                                Laya.Vector3.normalize(this.direction, this.direction), Laya.Vector3.scale(this.direction, this.currentSpeed, this.direction),
                                this.curHitNo = 0), this.transform.translate(this.direction, !1); else if (this.curHitNo++,
                                    this.transform.translate(this.direction, !1), this.curHitNo >= this.hitNoThingMax) return this.fall(),
                                        void (this.curHitNo = 0);
                            var t = Math.abs(this.CameraPos.transform.localRotationEuler.y - this.localRotY);
                            this.isDrift ? (this.isDriftSpeedUp || (this.curOilValue += 36 / 1e3,
                                this.curOilValue > this.allOilGasNumber && (this.curOilValue = this.allOilGasNumber)),
                                this.targetSpeed = this.driftSpeed, t < this.driftLimit && (this.isDrift = !1, w.stopSound("drift"),
                                    Laya.stage.event("endDrift"), this.FX_PY_Drift.active = !1, this.roleAnimator.crossFade("front", .4),
                                    this.carAnimator.crossFade("front", .4))) : (this.targetSpeed = this.forwardSpeed,
                                        t > this.driftLimit && (this.isDrift = !0, this.playDriftVoiceTime <= 0 && (w.stopSound("drift"),
                                            w.playSoundEffect("drift"), this.playDriftVoiceTime = 600), Laya.stage.event("startDrift"),
                                            this.FX_PY_Drift.active = !0, this.CameraPos.transform.localRotationEuler.y - this.localRotY < 0 ? (this.roleAnimator.crossFade("drift_l", .4),
                                                this.carAnimator.crossFade("drift_l", .4)) : (this.roleAnimator.crossFade("drift_r", .4),
                                                    this.carAnimator.crossFade("drift_r", .4)))), this.isSuperSpeed && (this.targetSpeed = this.targetSpeed * this.speedUpTimes),
                                this.currentSpeed = .02 * (this.targetSpeed - this.currentSpeed) + this.currentSpeed;
                        }
                        this.CheckPoint(), Laya.stage.event("UpDataOil", this.curOilValue / this.allOilGasNumber);
                    }
                }
            }, {
                key: "CheckPoint",
                value: function () {
                    if (this.CheckIndex + 1 >= this.curPointCheckList.length - 1) return console.error("贝塞尔点检测完了！"),
                        void (this.isMove = !1);
                    for (var e = 0, t = Laya.Vector3.distanceSquared(this.transform.position, this.curPointCheckList[this.CheckIndex]), i = 0; i < this.pointCheckCount && !(this.CheckIndex + i >= this.curPointCheckList.length); i++) {
                        var a = Laya.Vector3.distanceSquared(this.transform.position, this.curPointCheckList[this.CheckIndex + i]);
                        t >= a && (e = i, t = a);
                    }
                    this.CheckIndex += e, et.I.Score += e / 5;
                    var n = {
                        curScore: Math.ceil(et.I.Score)
                    };
                    if (Y.emit(D.G2S_UPDATE_CUR_SCORE, n), !this.isFly) {
                        Laya.Vector3.subtract(this.curPointCheckList[this.CheckIndex + 1], this.curPointCheckList[this.CheckIndex], this.curRoadDirect),
                            Laya.Vector3.normalize(this.curRoadDirect, this.curRoadDirect);
                        var o = Math.acos(Laya.Vector3.dot(new Laya.Vector3(0, 1, 0), this.groundNormal)) / Math.PI * 180;
                        this.localRotX = this.localRotX + .05 * (o - this.localRotX), this.CarRotX.localRotationEulerX = this.localRotX;
                    }
                    et.I.mapManage.UpdateLevelMapOnMove(this.CheckIndex);
                }
            }, {
                key: "onTriggerEnter",
                value: function (e) {
                    if (this.isOver || this.isOver == undefined) {
                        return;
                    }
                    var t = e.owner.name, i = Qe.getCompOnParent(e.owner, ze);
                    if (i && !(t.indexOf("roadblock_mx") >= 0)) {
                        var a = Laya.Quaternion.DEFAULT;
                        Laya.Quaternion.createFromAxisAngle(new Laya.Vector3(0, 1, 0), (Math.random() - .5) * Math.PI / 3, a);
                        var n = new Laya.Vector3();
                        return Laya.Vector3.transformQuat(this.direction, a, n), i.BeStrike(n, 0), w.playSoundEffect("crash_mini", 1),
                            void w.vibrate(!0);
                    }
                    if (t.indexOf("gangplank_mx") >= 0) this.flight(); else if (t.indexOf("speed_mx") >= 0) this.speedUp(),
                        w.vibrate(!0); else if (t.indexOf("defend_mx") >= 0) w.vibrate(!0), w.playSoundEffect("item", 1),
                            this.getUnstoppableBuff(), qe.I.RecoverObj(e.owner, !0); else if (t.indexOf("shan") >= 0) this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.CameraPos.transform.localRotationEulerY, 0),
                                w.playSoundEffect("carsh_gameover", 1), this.crash(); else if (t.indexOf("car") >= 0 || t.indexOf("wood_mx") >= 0 || t.indexOf("stone") >= 0 || t.indexOf("roadblock_mx") >= 0 || t.indexOf("tree_mx") >= 0) this.isUnstoppable || (w.playSoundEffect("carsh_gameover", 1),
                                    this.crash()); else if (t.indexOf("NPC") >= 0) {
                                        var o = Qe.getCompOnParent(e.owner, Je);
                                        if (null == o || 0 == o.isMove) return;
                                        var r = new Laya.Vector3();
                                        Laya.Vector3.subtract(this.transform.position, e.owner.transform.position, r), this.isColled || (w.vibrate(!0),
                                            this.collTime = 1e3, this.isColled = !0, this.dir = r, Laya.Vector3.scale(this.dir, .15, this.dir),
                                            this.iscollisioned(), w.playSoundEffect("carsh_tricycle", 1));
                                    }
                }
            }, {
                key: "Pop",
                value: function (e, t, i, a) {
                    return 1 - 4 * Math.pow(a - e / 2, 2);
                }
            }, {
                key: "iscollisioned",
                value: function () {
                    Laya.timer.frameLoop(1, this, this.moveByFrame);
                }
            }, {
                key: "moveByFrame",
                value: function () {
                    var e = new Laya.Vector3();
                    if (Laya.Vector3.scale(this.dir, this.collTime / 1e3, e), this.collTime > 800) {
                        var t = 1 - (this.collTime - 800) / 200, i = 1 + .05 * (1 - 4 * Math.pow(t - .5, 2));
                        this.pf.transform.localScale = new Laya.Vector3(i, i, i);
                    }
                    this.transform.translate(e), this.collTime -= 36, this.collTime <= 0 && (Laya.timer.clear(this, this.moveByFrame),
                        this.isColled = !1, this.collTime = 1e3, this.pf.transform.localScale = new Laya.Vector3(1, 1, 1));
                }
            }, {
                key: "onMouseDownEvent",
                value: function (e) {
                    if (!this.isOver) {
                        this.moveX = true;
                        this.isMove || Laya.stage.event("showGuide", !1), this.isMove = !0, w.playSoundEffect("run", 0),
                            this.FX_PY_Run_Wind.active = !0, this.currentSpeed = this.forwardSpeed, this.startPoint.setTo(e.stageX, e.stageY),
                            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.isPress = !0;
                        for (var t = 0; t < et.I.NPCList.length; t++) et.I.NPCList[t].startMove();
                    }
                }
            }, {
                key: "onMouseUpEvent",
                value: function () {
                    this.moveX = false;
                    this.isPress = !1, Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove),
                        this.curOilValue / this.allOilGasNumber >= 1 && this.isMove && !this.isDriftSpeedUp && !this.isFly && (this.speedUp(this.driftSpeedUpTime),
                            this.isDriftSpeedUp = !0, Laya.stage.frameLoop(1, this, this.onDriftSpeedUp));
                }
            }, {
                key: "onDriftSpeedUp",
                value: function () {
                    this.curOilValue -= 36 / this.driftSpeedUpTime * this.allOilGasNumber,
                        this.curOilValue <= 0 && (Laya.stage.clearTimer(this, this.onDriftSpeedUp), this.isDriftSpeedUp = !1);
                }
            }, {
                key: "onMouseMoveEvent",
                value: function () { }
            }, {
                key: "mouseMove",
                value: function (e) {
                    if (!this.isOver && this.isMove) {
                        this.diffX = this.startPoint.x - e.stageX;
                        var t = new Laya.Vector3(0, this.curRoadDirect.y, this.curRoadDirect.z), i = Math.acos(Laya.Vector3.dot(this.curRoadDirect, t)) / Math.PI * 180;
                        this.curRoadDirect.z < 0 && (i = 180 - i), this.curRoadDirect.x < 0 && (i = 360 - i);
                        for (var a = Math.round(this.localRotY / 360), n = 0, o = Math.abs(360 * a + i - this.localRotY), r = -1; r <= 1; r++) {
                            var s = Math.abs(360 * (a + r) + i - this.localRotY);
                            s < o && (o = s, n = r);
                        }
                        a += n, this.curAngleYSection = new Laya.Vector2(i - this.angleLimit, i + this.angleLimit),
                            this.moveX && (this.localRotY += this.diffX * this.speedControlPara), this.curAngleYSection.x + 360 * a > this.localRotY ? this.localRotY = this.curAngleYSection.x + 360 * a : this.curAngleYSection.y + 360 * a < this.localRotY && (this.localRotY = this.curAngleYSection.y + 360 * a),
                            this.CarRotY.localRotationEuler = new Laya.Vector3(0, this.localRotY, 0), this.startPoint.setTo(e.stageX, e.stageY);
                    }
                }
            }, {
                key: "flight",
                value: function () {
                    w.stopSound("run"), w.playSoundEffect("jump", 1), this.CarRotY.getForward(this.direction),
                        Laya.Vector3.scale(this.direction, -this.currentSpeed, this.direction), this.isDrift = !1,
                        Laya.stage.event("endDrift"), w.stopSound("drift"), this.FX_PY_Drift.active = !1,
                        this.Plane.active = !1, this.roleAnimator.crossFade("front", .4), this.carAnimator.crossFade("front", .4),
                        this.CarRotX.localRotationEulerX = -30, this.speedY = .3, this.isFly = !0, this.minFlyHeight = this.transform.position.y - 40;
                }
            }, {
                key: "fall",
                value: function () {
                    w.playSoundEffect("rushout", 1), w.stopSound("run"), this.isLoseControl = !0, this.isFly = !0,
                        this.roleAnimator.crossFade("falldown02", .4), this.carAnimator.crossFade("falldown02", .4),
                        this.isMove = !1, this.isOver = !0, this.FX_PY_Run_Wind.active = !1, this.FX_PY_Drift.active = !1,
                        this.Plane.active = !1, this.OnDeath();
                }
            }, {
                key: "crash",
                value: function () {
                    this.FX_PY_Run_Wind.active = !1, this.FX_PY_Drift.active = !1, this.roleAnimator.crossFade("falldown03", .4),
                        this.carAnimator.crossFade("falldown03", .4), this.isMove = !1, this.isOver = !0,
                        this.Plane.active = !1, this.OnDeath();
                }
            }, {
                key: "speedUp",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.speedUpDuration;
                    w.playSoundEffect("super", 1), Laya.timer.clear(this, this.speedUpOver), this.isSuperSpeed = !0,
                        Laya.timer.once(e, this, this.speedUpOver), this.targetSpeed = this.targetSpeed * this.speedUpTimes,
                        this.currentSpeed = this.targetSpeed, this.FX_PY_Speed.active = !0, this.FX_PY_Speed_Wind.active = !0,
                        this.FX_PY_Run_Wind.active = !1;
                }
            }, {
                key: "speedUpOver",
                value: function () {
                    w.stopSound("super"), this.isSuperSpeed = !1, this.FX_PY_Speed.active = !1, this.FX_PY_Speed_Wind.active = !1,
                        this.FX_PY_Run_Wind.active = !0;
                }
            }, {
                key: "getUnstoppableBuff",
                value: function () {
                    Laya.timer.clear(this, this.UnstoppableBuffOver), this.isUnstoppable = !0, Laya.timer.once(this.UnstoppableDuration, this, this.UnstoppableBuffOver),
                        this.FX_PY_Shield.active = !0;
                }
            }, {
                key: "UnstoppableBuffOver",
                value: function () {
                    this.isUnstoppable = !1, this.FX_PY_Shield.active = !1;
                }
            }, {
                key: "changePointCheckList",
                value: function (e, t) {
                    this.CheckIndex >= e ? (this.curPointCheckList.splice(0, e), this.CheckIndex -= e,
                        this.curPointCheckList = this.curPointCheckList.concat(t)) : console.error("贝塞尔点删除异常！当前点：", this.CheckIndex, " 删除数目：", e);
                }
            }, {
                key: "OnDeath",
                value: function () {
                    w.vibrate(!1), w.stopSound("run"), Laya.stage.event("endDrift"), w.stopSound("drift"),
                        Laya.timer.clear(this, this.speedUpOver), this.Plane.active = !1, this.isSuperSpeed = !1,
                        this.FX_PY_Speed.active = !1, this.FX_PY_Speed_Wind.active = !1, this.FX_PY_Run_Wind.active = !1,
                        this.isMove = !1, this.isDrift = !1, Laya.timer.once(2e3, this, function () {
                            et.I.overGame();
                        });
                }
            }, {
                key: "CheckIndex",
                get: function () {
                    return this._CheckIndex;
                },
                set: function (e) {
                    this._CheckIndex = e;
                }
            }]), PlayerController;
        }(), et = function () {
            function GameManager() {
                _classCallCheck(this, GameManager), this.NPCList = new Array(), this.playerIndex = 4,
                    this.Score = 0, this.RankTime = 600, this.isShowGuige = !0, this.rankDelay = 0,
                    this.lastChampionNumber = 0, Y.on(D.S2G_BEGIN_GAME, this.StartGame, this), Y.on(D.S2G_REBORN_GAME_READY, this.reLiveGame, this),
                    Y.on(D.S2G_RESET_GAME_READY, this.reSetingGame, this), Y.on(D.S2G_USE_SKIN, this.setSkin_YLSDK, this);
            }
            return _createClass(GameManager, [{
                key: "InitGame",
                value: function () {
                    if (Laya.Browser.onIOS ? Qe.setFog(this.gameScenes, "48A1FF", 95, 85) : Qe.setFog(this.gameScenes, "48A1FF", 100, 250),
                        null == this.playerController) {
                        console.log("gameScenes:", this.gameScenes), this.playerController = this.gameScenes.getChildByName("player").addComponent($e),
                            this.playerController.isOver = !0;
                        var e = this.gameScenes.getChildByName("NPC").addComponent(Je);
                        e.CheckIndex = 3;
                        var t = this.gameScenes.getChildByName("NPC (1)").addComponent(Je);
                        t.CheckIndex = 2;
                        var i = this.gameScenes.getChildByName("NPC (2)").addComponent(Je);
                        i.CheckIndex = 1, this.NPCList.push(e), this.NPCList.push(t), this.NPCList.push(i),
                            this.camera = this.gameScenes.getChildByName("CameraPos").getChildByName("Main Camera"),
                            Laya.Browser.onIOS ? (this.camera.farPlane = 175, this.playerController.forwardSpeed = 1.1,
                                this.playerController.driftSpeed = .75, e.forwardSpeed = 1.1, t.forwardSpeed = 1.1,
                                i.forwardSpeed = 1.1) : this.camera.farPlane = 350, this.crownObj = this.gameScenes.getChildByName("crown_mx"),
                            this.crownObj.addComponent(Ze), this.FX_PY_Crown = this.crownObj.getChildAt(1),
                            this.NPCList[0].CarRotX.owner.addChild(this.crownObj), this.crownObj.transform.localPosition = new Laya.Vector3(0, 4.2, 0);
                    }
                    this.mapManage = new Ke(), this.mapManage.init(this.gameScenes);
                    for (var a = 0; a < this.NPCList.length; a++) this.NPCList[a].isOver = !0;
                }
            }, {
                key: "StartGame",
                value: function () {
                    this.playerController.isOver = !1;
                    for (var e = 0; e < this.NPCList.length; e++) {
                        this.NPCList[e].isOver = !1;
                    }
                    Laya.timer.clear(this, this.onPlayerIndexChange), Laya.timer.frameLoop(1, this, this.onPlayerIndexChange),
                        this.rankDelay = 0, this.isShowGuige && (this.Score = 0, Laya.stage.event("showGuide", !0),
                            this.isShowGuige = !1);
                }
            }, {
                key: "reSetingGame",
                value: function () {
                    this.isShowGuige = !0, this.Score = 0, this.playerController.ReSetPlayer(new Laya.Vector3(-2, 0, 10.7)),
                        this.playerController.isOver = !0, this.NPCList[0].ReSetPlayer(new Laya.Vector3(2, 0, 25.7), 3),
                        this.NPCList[0].isOver = !0, this.NPCList[1].ReSetPlayer(new Laya.Vector3(-6, 0, 20.7), 2),
                        this.NPCList[1].isOver = !0, this.NPCList[2].ReSetPlayer(new Laya.Vector3(6, 0, 15.7), 1),
                        this.NPCList[2].isOver = !0, this.mapManage.resetMap(), this.onPlayerIndexChange(),
                        Y.emit(D.G2S_RESET_GAME_READY_SUCCESS);
                }
            }, {
                key: "overGame",
                value: function () {
                    this.playerController.isOver = !0;
                    for (var e = 0; e < this.NPCList.length; e++) {
                        this.NPCList[e].isOver = !0;
                    }
                    Y.emit(D.G2S_GAME_FAIL), Laya.timer.clear(this, this.onPlayerIndexChange);
                }
            }, {
                key: "reLiveGame",
                value: function () {
                    this.playerController.ReLive(), this.playerController.isOver = !1, this.playerController.isMove = !1;
                    for (var e = 0; e < this.NPCList.length; e++) {
                        var t = this.NPCList[e];
                        t.isOver = !1, t.isMove = !1;
                    }
                    Y.emit(D.G2S_REBORN_GAME_READY_SUCCESS), Laya.timer.clear(this, this.onPlayerIndexChange),
                        Laya.timer.frameLoop(1, this, this.onPlayerIndexChange);
                }
            }, {
                key: "setSkin",
                value: function (e) {
                    this.playerController.setSkin(e);
                }
            }, {
                key: "setSkin_YLSDK",
                value: function (e) {
                    console.log("设置皮肤：", e.value.id), this.playerController.setSkin(e.value.id - 1);
                }
            }, {
                key: "onPlayerIndexChange",
                value: function () {
                    for (var e = this, t = [], i = new Array(4), a = new Array(4), n = 0; n < this.NPCList.length; n++) {
                        a[n] = this.NPCList[n].CheckIndex;
                        var o = new Laya.Vector3();
                        Laya.Vector3.add(this.NPCList[n].transform.position, new Laya.Vector3(0, 3.2, 0), o),
                            i[n] = this.WorldToScreen(o);
                    }
                    a[3] = this.playerController.CheckIndex;
                    var r = new Laya.Vector3();
                    if (Laya.Vector3.add(this.playerController.transform.position, new Laya.Vector3(0, 3.2, 0), r),
                        i[3] = this.WorldToScreen(r), this.rankDelay += 36, this.rankDelay > this.RankTime) {
                        this.rankDelay = 0, t = [1, 2, 3, 4];
                        for (var s = 0; s < 4; s++) for (var l = 0; l < 4; l++) if (a[s] > a[l] && t[s] > t[l]) {
                            var h = t[l];
                            t[l] = t[s], t[s] = h;
                        }
                        if (1 == t[3]) 3 != this.lastChampionNumber && (this.playerController.CarRotX.owner.addChild(this.crownObj),
                            this.crownObj.transform.localPosition = new Laya.Vector3(0, 2.7, 0), this.crownObj.transform.localScale = new Laya.Vector3(0, 0, 0),
                            this.FX_PY_Crown.active = !1, Laya.Tween.to(this.crownObj.transform.localScale, {
                                x: 1.7,
                                y: 1.7,
                                z: 1.7
                            }, 550, Laya.Ease.backOut, new Laya.Handler(this, function () {
                                e.FX_PY_Crown.active = !0;
                            }), 0, !0)), this.lastChampionNumber = 3; else for (var c = 0; c < 3; c++) 1 == t[c] && (this.lastChampionNumber != c && (this.NPCList[c].CarRotX.owner.addChild(this.crownObj),
                                this.crownObj.transform.localPosition = new Laya.Vector3(0, 4.2, 0), this.crownObj.transform.localScale = new Laya.Vector3(0, 0, 0),
                                this.FX_PY_Crown.active = !1, Laya.Tween.to(this.crownObj.transform.localScale, {
                                    x: 1.7,
                                    y: 1.7,
                                    z: 1.7
                                }, 550, Laya.Ease.backOut, new Laya.Handler(this, function () {
                                    e.FX_PY_Crown.active = !0;
                                }), 0, !0)), this.lastChampionNumber = c);
                    }
                    for (var u = 0; u < 3; u++) this.playerController.CheckIndex > this.NPCList[u].CheckIndex ? this.playerController.CheckIndex > this.NPCList[u].CheckIndex + 15 && (this.NPCList[u].forwardSpeed = 1.2 * this.playerController.forwardSpeed) : this.playerController.CheckIndex < this.NPCList[u].CheckIndex - 30 && (this.NPCList[u].forwardSpeed = .65 * this.playerController.forwardSpeed);
                    Laya.stage.event("UpdataRank", [t, i]);
                }
            }, {
                key: "WorldToScreen",
                value: function (e) {
                    var t = new Laya.Vector4();
                    this.camera.viewport.project(e, this.camera.projectionViewMatrix, t);
                    var i = t.x / Laya.stage.clientScaleX, a = t.y / Laya.stage.clientScaleY;
                    return t.x = i, t.y = a, new Laya.Vector3(t.x, t.y, t.w);
                }
            }], [{
                key: "I",
                get: function () {
                    return null == GameManager._I && (GameManager._I = new GameManager()), GameManager._I;
                },
                set: function (e) {
                    GameManager._I = e;
                }
            }]), GameManager;
        }(), tt = function (e) {
            function GameUI() {
                var e;
                return _classCallCheck(this, GameUI), (e = _possibleConstructorReturn(this, _getPrototypeOf(GameUI).call(this))).isShowAddScore = !1,
                    e.textList = new Array(), e.isOpenNPC_Name = !0, e.isShowName = !1, e.scaleValue = 1,
                    e.addScoreValue = 0, e.showAddScoreTime = 1e3, e.curShowAddScoreTime = 0, e.isInEndDrift = !1,
                    e.continueDriftTimes = 0, e.LoadRes(), e;
            }
            return _inherits(GameUI, Ge.test.TestSceneUI), _createClass(GameUI, [{
                key: "LoadRes",
                value: function () {
                    var e = [{
                        url: "res/LayaScene_game/Conventional/game.ls",
                        clas: Laya.Scene,
                        priority: 1
                    }, {
                        url: "res/LayaScene_Model/Conventional/Model.lh",
                        clas: Laya.Sprite3D,
                        priority: 2
                    }, {
                        url: "res/Datas/Datas.json",
                        clas: We,
                        priority: 3
                    }];
                    Laya.loader.create(e, Laya.Handler.create(this, this.onLoadFinish, null, !1)), Laya.loader.on(Laya.Event.ERROR, this, function (e) {
                        console.error("load 3dres error:", e);
                    });
                }
            }, {
                key: "onLoadFinish",
                value: function (e) {
                    var t = Laya.loader.getRes("res/LayaScene_game/Conventional/game.ls");
                    Laya.stage.addChild(t), Laya.stage.setChildIndex(t, 0), this.driftProgress = this.getChildByName("driftProgress"),
                        this.sliderMask = this.getChildByName("slider").mask, this.guide = this.getChildByName("guide"),
                        this.guide.visible = !1, Laya.stage.on("showGuide", this, this.showGuide), this.UpDataProgressBar(0),
                        Laya.stage.on("UpDataOil", this, this.UpDataProgressBar), this.addScore = this.getChildByName("addScore"),
                        this.addScore.visible = !1, this.fontImge = this.addScore.getChildByName("fontImge"),
                        this.fontImge.visible = !1, Laya.stage.on("startDrift", this, this.startDrift),
                        Laya.stage.on("endDrift", this, this.endDrift);
                    var i = this.getChildByName("nameText1");
                    this.textList.push(i);
                    var a = this.getChildByName("nameText2");
                    this.textList.push(a);
                    var n = this.getChildByName("nameText3");
                    this.textList.push(n);
                    var o = this.getChildByName("nameText4");
                    this.textList.push(o), this.isOpenNPC_Name && Laya.stage.on("UpdataRank", this, this.updataRank)
                    var r = ["", "", "", "Player"];
                    if (null != r && r.length >= 4) {
                        this.isShowName = !0;
                        for (var s = 0; s < 4; s++) this.textList[s].text = r[s];
                    }

                    et.I.gameScenes = t, et.I.InitGame(), this.setRankName(), Ue.data.on("playerNamesPool", this.setRankName, this),
                        Y.emit(D.G2S_INIT_GAME_READY_SUCCESS);

                    load3end = true;
                    if (loadProRes && U.model.curStackView != O.VIEW_Home) {
                        platform.getInstance().cargamesstartup("Drift-At-Will", () => {
                            window.yad.offAll(Laya.Event.MOUSE_DOWN)
                            window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                            window.WebAudioEngine.pause = w.isMute;
                            w.playBgm(!0)
                            U.model.curStackView = O.VIEW_Home;
                            M.destroy();
                        })
                    }
                }
            }, {
                key: "showGuide",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.guide.visible = e, null == this.ani2D && (this.ani2D = new Laya.Animation(),
                        this.ani2D.loadAtlas("res/atlas/xsyd_eff.atlas", Laya.Handler.create(this, this.onLoaded)));
                }
            }, {
                key: "onLoaded",
                value: function () {
                    this.guide.addChild(this.ani2D), this.ani2D.x = 203, this.ani2D.y = 65, this.ani2D.interval = 200,
                        this.ani2D.play(), console.log("加载完成！！！");
                }
            }, {
                key: "setRankName",
                value: function () {
                    var e = Ue.data.playerNamesPool;
                    if (null != e && e.length >= 4) {
                        this.isShowName = !0;
                        for (var t = 0; t < 3; t++) this.textList[t].text = e[t];
                    }
                }
            }, {
                key: "updataRank",
                value: function (e, t) {
                    if (null != e && e.length >= 4) for (var i = 0; i < e.length; i++) {
                        var a = this.textList[i].getChildAt(0);
                        1 == e[i] ? a.visible = !1 : (a.visible = !0, a.skin = "02game/" + e[i].toString() + ".png"),
                            this.isShowName && (e[i] > e[3] ? this.textList[i].visible = !1 : this.textList[i].visible = !0);
                    }
                    for (var n = 0; n < 4; n++) {
                        this.textList[n].pos(t[n].x, t[n].y);
                        var o = 20 / t[n].z * this.scaleValue;
                        o > 1 ? o = 1 : o < .2 && (o = 0), this.textList[n].scale(o, o);
                    }
                }
            }, {
                key: "UpDataProgressBar",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    e > 1 ? e = 1 : e < 0 && (e = 0), this.sliderMask.y = this.driftProgress.height * (1 - e);
                }
            }, {
                key: "startDrift",
                value: function () {
                    this.isShowAddScore || (this.isInEndDrift ? this.continueDriftTimes > 3 ? (et.I.Score += this.addScoreValue,
                        this.addScoreValue = 0, this.continueDriftTimes = 0) : this.continueDriftTimes++ : this.continueDriftTimes = 0,
                        0 == this.addScoreValue && (this.addScoreValue = 1), this.addScore.value = "+" + this.addScoreValue.toString(),
                        this.isShowAddScore = !0, this.fontImge.skin = "02game/font_youxiu.png", this.fontImge.visible = !1,
                        this.addScore.skin = "02game/num-lv.png", this.addScore.visible = !0, Laya.Tween.to(this.addScore, {
                            scaleX: 1.5,
                            scaleY: 1.5
                        }, 200, Laya.Ease.backOut, null, 0, !0), Laya.timer.loop(100, this, this.OnAddScore));
                }
            }, {
                key: "endDrift",
                value: function () {
                    var e = this;
                    this.isShowAddScore = !1, this.isInEndDrift = !0, Laya.Tween.to(this.addScore, {
                        scaleX: .2,
                        scaleY: .2
                    }, 200, null, new Laya.Handler(this, function () {
                        e.addScore.visible = !1, et.I.Score += e.addScoreValue, e.addScoreValue = 0, e.isInEndDrift = !1;
                    }), 0, !0), Laya.timer.clear(this, this.OnAddScore);
                }
            }, {
                key: "OnAddScore",
                value: function () {
                    this.addScoreValue++, this.addScore.value = "+" + this.addScoreValue.toString(),
                        this.addScoreValue > 20 ? this.addScoreValue > 50 ? (this.fontImge.skin = "02game/font_chaoji.png",
                            this.fontImge.visible = !0, this.addScore.skin = "02game/num-huang.png") : (this.fontImge.skin = "02game/font_youxiu.png",
                                this.fontImge.visible = !0, this.addScore.skin = "02game/num-lv.png") : this.fontImge.visible = !1;
                }
            }]), GameUI;
        }(), it = function () {
            function GameConfig$1() {
                _classCallCheck(this, GameConfig$1);
            }
            return _createClass(GameConfig$1, null, [{
                key: "init",
                value: function () {
                    (0, Laya.ClassUtils.regClass)("script/GameLogic/GameUI.ts", tt);
                }
            }]), GameConfig$1;
        }();
        it.width = 750, it.height = 1334, it.scaleMode = "exactfit", it.screenMode = "none",
            it.alignV = "middle", it.alignH = "center", it.startScene = "test/TestScene.scene", it.sceneRoot = "",
            it.debug = !1, it.stat = !1, it.physicsDebug = !1, it.exportSceneToJson = !0, it.init();
        var at = {
            isVerify: !1,
            gameName: "",
            gameSceneUrl: "test/TestScene.json",
            gameIconUrl: "05collection/icon-shoucang.png",
            homeLogoUrl: "01home/logo.png",
            noNewbie: !0,
            needSearchPlayer: !0,
            storeItems: [{
                id: 1,
                previewPath: "04skinShop/zj_ui.png",
                isDefault: !0
            }, {
                id: 2,
                previewPath: "04skinShop/pf01_ui.png"
            }, {
                id: 3,
                previewPath: "04skinShop/pf02_ui.png"
            }, {
                id: 4,
                previewPath: "04skinShop/pf03_ui.png"
            }, {
                id: 5,
                previewPath: "04skinShop/pf04_ui.png"
            }, {
                id: 6,
                previewPath: "04skinShop/pf05_ui.png"
            }, {
                id: 7,
                previewPath: "04skinShop/pf06_ui.png"
            }, {
                id: 8,
                previewPath: "04skinShop/pf07_ui.png"
            }, {
                id: 9,
                previewPath: "04skinShop/pf08_ui.png"
            }, {
                id: 10,
                previewPath: "04skinShop/pf09_ui.png"
            }],
            sound: {
                basePath: "res/sound",
                click: "button",
                bgm: "bg"
            },
            load: {
                subpackages: ["sdk_youling_common", "LayaScene_game", "LayaScene_Model", "sound"],
                reses2Load: ["res/LayaScene_game/Conventional/game.ls", "res/LayaScene_Model/Conventional/Model.lh", "res/Datas/Datas.json"]
            },
            server: {
                host: "",
                apiversion: "null",
                apiKey: "4puumeg0y5x158hfic1z8wo5z8fcilge",
                apiSecret: "8ZJixcwYgCrTNjOiUfpE7AO1h9aLj2CV"
            },
            ad: {
                gameViewAdMode: 0,
                bannerAdID: ["adunit-bb7a05ec7e06490d", "adunit-ee23fd1791cb2639", "adunit-c57809a5cd125c98"],
                videoAdID: "adunit-79dd858303025ef7"
            }
        };
        new (function () {
            function Main() {
                _classCallCheck(this, Main), window.Laya3D ? Laya3D.init(it.width, it.height) : Laya.init(it.width, it.height, Laya.WebGL),
                    Laya.stage.scaleMode = it.scaleMode, Laya.stage.screenMode = it.screenMode, Laya.stage.alignV = it.alignV,
                    Laya.stage.alignH = it.alignH, Laya.URL.exportSceneToJson = it.exportSceneToJson;
                window.yad = platform.getInstance().createLogo();
                platform.getInstance().showSplash();
                window.yad.top = 0;
                window.yad.right = 0;
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            return _createClass(Main, [{
                key: "onVersionLoaded",
                value: function () {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }
            }, {
                key: "onConfigLoaded",
                value: function () {
                    Ue.configurate(at);
                    Ue.deploy();
                }
            }]), Main;
        }())();
    }();
}();