!function () {
    var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

    var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

    var _asyncToGenerator2 = require("../../runtime/helpers/asyncToGenerator");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    window.zs = window.zs || {}, function (e) {
        "use strict";
        var t = /* */ function () {
            function t() {
                _classCallCheck2(this, t);
                this._isPreloading = !1, this._isSceneLoading = !1, this._current = null, this._nodes = {};
            }
            _createClass2(t, [{
                key: "nodes",
                get: function get() {
                    return this._nodes;
                }
            }, {
                key: "current",
                get: function get() {
                    return this._current;
                }
            }, {
                key: "next",
                get: function get() {
                    return this._next;
                }
            }, {
                key: "staticNode",
                get: function get() {
                    return this._staticNode;
                }
            }, {
                key: "dynamicNode",
                get: function get() {
                    return this._dynamicNode;
                }
            }, {
                key: "preloadNode",
                get: function get() {
                    return this._preloadNode;
                }
            }, {
                key: "isSceneLoading",
                get: function get() {
                    return this._isSceneLoading;
                }
            }, {
                key: "isPreloading",
                get: function get() {
                    return this._isPreloading;
                }
            }, {
                key: "load",
                value: function () {
                    var _load = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee(e, n, i) {
                        var s, r;
                        return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if (!this._isSceneLoading) {
                                            _context.next = 2;
                                            break;
                                        }
                                        return _context.abrupt("return", void zs.log.warn("正在加载其他场景······", "Scene"));

                                    case 2:
                                        s = "";
                                        s = e instanceof Laya.Scene3D ? e.url : n ? e : t.URLCombine(e, "ls"), null != this._current && this._current.destroy(!0);
                                        r = null;
                                        if (!(e instanceof Laya.Scene3D)) {
                                            _context.next = 9;
                                            break;
                                        }
                                        r = e;
                                        _context.next = 14;
                                        break;

                                    case 9:
                                        this._isSceneLoading = !0;
                                        _context.next = 12;
                                        return zs.resource.load(s, zs.ResourceType.Scene3D).catch(function (e) {
                                            return e;
                                        });

                                    case 12:
                                        r = _context.sent;
                                        this._isSceneLoading = !1;

                                    case 14:
                                        this._current = Laya.stage.addChildAt(r, i || 0);
                                        this.build();

                                    case 16:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                    function load(_x, _x2, _x3) {
                        return _load.apply(this, arguments);
                    }
                    return load;
                }()
            }, {
                key: "loadNext",
                value: function () {
                    var _loadNext = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee2(e, _t2) {
                        var n, i;
                        return _regenerator.default.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        if (!this._isSceneLoading) {
                                            _context2.next = 2;
                                            break;
                                        }
                                        return _context2.abrupt("return", void zs.log.warn("正在加载其他场景······", "Scene"));

                                    case 2:
                                        n = null;
                                        this._current && (n = this._current.url, this._current.destroy(!0)), e && null != this._next && n != this._next.url && (Laya.loader.clearRes(n),
                                            n = this._next.url), null == n && zs.log.fatal("场景加载错误，当前无场景且未预加载场景"), this._isSceneLoading = !0;
                                        _context2.next = 6;
                                        return zs.resource.load(n, zs.ResourceType.Scene3D).catch(function (e) {
                                            return e;
                                        });

                                    case 6:
                                        i = _context2.sent;
                                        this._isSceneLoading = !1, this._current = Laya.stage.addChildAt(i, _t2 || 0), this.build();

                                    case 8:
                                    case "end":
                                        return _context2.stop();
                                }
                            }
                        }, _callee2, this);
                    }));
                    function loadNext(_x4, _x5) {
                        return _loadNext.apply(this, arguments);
                    }
                    return loadNext;
                }()
            }, {
                key: "preload",
                value: function () {
                    var _preload = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee3(e, _t3) {
                        var _e;
                        return _regenerator.default.wrap(function _callee3$(_context3) {
                            while (1) {
                                switch (_context3.prev = _context3.next) {
                                    case 0:
                                        if (!this._isPreloading) {
                                            _context3.next = 4;
                                            break;
                                        }
                                        console.warn("正在预加载其他场景······");
                                        _context3.next = 10;
                                        break;

                                    case 4:
                                        if (!(this._isPreloading = !0, null == this._current || this._current.url != e)) {
                                            _context3.next = 9;
                                            break;
                                        }
                                        _context3.next = 7;
                                        return zs.utils.loadScene3D(url).catch(function (e) {
                                            return e;
                                        });

                                    case 7:
                                        _e = _context3.sent;
                                        this._next = _e;

                                    case 9:
                                        this._isPreloading = !1;

                                    case 10:
                                    case "end":
                                        return _context3.stop();
                                }
                            }
                        }, _callee3, this);
                    }));
                    function preload(_x6, _x7) {
                        return _preload.apply(this, arguments);
                    }
                    return preload;
                }()
            }, {
                key: "build",
                value: function build() {
                    if (null == this._current) return void zs.log.fatal("当前场景为空，无法构建场景");
                    if (t.nodesDef) for (var _e2 in t.nodesDef) {
                        var n = this._current.getChildByName(_e2);
                        null == n && (n = this._current.addChild(new Laya.Sprite3D(_e2))), this._nodes[_e2] = n,
                            t.nodesDef[_e2] = n;
                    }
                    if (this._staticNode = this._current.getChildByName(t.node_static), this._dynamicNode = this._current.getChildByName(t.node_dynamic),
                        this._preloadNode = this._current.getChildByName(t.node_preload), null == this._staticNode) return zs.log.warn("构建世界场景警告！节点Static丢失！无法自动构建场景！");
                    if (null == this._dynamicNode) return zs.log.warn("构建世界场景警告！节点Dynamic丢失！无法自动构建场景！");
                    if (null == this._preloadNode) return zs.log.warn("构建世界场景警告！节点Preload丢失！无法自动构建场景！");
                    var e = [];
                    if (this._preloadNode && this._staticNode) for (var _n = 0, i = this._preloadNode.numChildren; _n < i; _n++) {
                        var _i = this._preloadNode.getChildAt(_n), s = this._current.getChildByName(_i.name);
                        if (!(null == s || s.numChildren <= 0)) {
                            e.push(s), t.onBuildPrefab && t.onBuildPrefab.runWith(_i);
                            for (var _e3 = 0, _n2 = s.numChildren; _e3 < _n2; _e3++) {
                                var _n3 = s.getChildAt(_e3);
                                if (t.onPlacePrefab) t.onPlacePrefab.runWith([_i, _n3]); else {
                                    Laya.Sprite3D.instantiate(_i, this._staticNode, !1, _n3.transform.position, _n3.transform.rotation).transform.setWorldLossyScale(_n3.transform.getWorldLossyScale());
                                }
                            }
                        }
                    }
                    t.onBuildWorld && t.onBuildWorld.run(), Laya.ILaya.Browser.onIOS && "qq_" == zs.platform.config.platformMark ? zs.log.warn("手Q平台IOS系统使用静态合批将引发崩溃，自动跳过场景静态合批", "Scene") : Laya.StaticBatchManager.combine(this._staticNode),
                        this._preloadNode.destroy(!0);
                    for (var _t5 = 0; _t5 < e.length; _t5++) {
                        null != e[_t5] && e[_t5].destroy(!0);
                    }
                }
            }], [{
                key: "inst",
                get: function get() {
                    return null == t._inst && (t._inst = new t()), t._inst;
                }
            }, {
                key: "URLCombine",
                value: function URLCombine(e, _t) {
                    var n = this.basePath + "/" + e;
                    return null != _t && _t.trim().length > 0 && (n += "." + _t), n;
                }
            }]);
            return t;
        }();
        t.basePath = "3dres/Conventional", t.nodesDef = null, t.node_static = "static",
            t.node_dynamic = "dynamic", t.node_preload = "preload", t.onBuildPrefab = null,
            t.onPlacePrefab = null, t.onBuildWorld = null, e.scene = t;
    }(window.zs = window.zs || {});
}()