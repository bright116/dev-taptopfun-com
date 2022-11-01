var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(requirea("../../@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(a) {
    "use strict";
    var e;
    !function(a) {
        a[a.Common = 0] = "Common", a[a.Scene = 1] = "Scene", a[a.Scene3D = 2] = "Scene3D", 
        a[a.Sprite3D = 3] = "Sprite3D", a[a.FGUIPack = 4] = "FGUIPack";
    }(e = e || (e = {}));
    var t = /* */ function() {
        function t() {
            (0, _classCallCheck2.default)(this, t);
        }
        (0, _createClass2.default)(t, null, [ {
            key: "init",
            value: function init() {
                if (t.loadedPacks = [], t.preloadPacks = [], t.subpacks = {}, s.gameCfg && s.gameCfg.subpackages) {
                    var _a = s.gameCfg.subpackages;
                    for (var _e in s.gameCfg.subpackages) {
                        if (null == _e || _e.length <= 0) continue;
                        var _s = !1, l = _a[_e];
                        "*" === _e[0] && (_s = !0, _e = _e.slice(1), t.preloadPacks.push(_e)), "/" !== l[l.length - 1] && (l += "/"), 
                        t.subpacks[_e] = l;
                    }
                }
            }
        }, {
            key: "preload",
            value: function() {
                var _preload = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee() {
                    var _loop, _a2, _e2;
                    return _regenerator.default.wrap(function _callee$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (null == t.preloadPacks || t.preloadPacks.length <= 0) {
                                    _context2.next = 8;
                                    break;
                                }
                                _loop = /* */ _regenerator.default.mark(function _loop(_a2, _e2) {
                                    var e;
                                    return _regenerator.default.wrap(function _loop$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                              case 0:
                                                e = t.preloadPacks[_a2];
                                                _context.next = 3;
                                                return zs.platform.async.loadSubpackage({
                                                    pkgName: e
                                                }).then(function() {
                                                    t.loadedPacks.push(e), zs.log.debug("预加载分包" + e + "成功!");
                                                }).catch(function() {
                                                    zs.log.warn("预加载分包" + e + "失败!");
                                                });

                                              case 3:
                                              case "end":
                                                return _context.stop();
                                            }
                                        }
                                    }, _loop);
                                });
                                _a2 = 0, _e2 = t.preloadPacks.length;

                              case 3:
                                if (!(_a2 < _e2)) {
                                    _context2.next = 8;
                                    break;
                                }
                                return _context2.delegateYield(_loop(_a2, _e2), "t0", 5);

                              case 5:
                                _a2++;
                                _context2.next = 3;
                                break;

                              case 8:
                              case "end":
                                return _context2.stop();
                            }
                        }
                    }, _callee);
                }));
                function preload() {
                    return _preload.apply(this, arguments);
                }
                return preload;
            }()
        }, {
            key: "check",
            value: function check(a) {
                for (var _e3 in t.subpacks) {
                    if (zs.utils.startwith(a, t.subpacks[_e3])) return _e3;
                }
                return null;
            }
        }, {
            key: "isPackLoaded",
            value: function isPackLoaded(a) {
                return this.loadedPacks.indexOf(a) >= 0;
            }
        }, {
            key: "isLoading",
            value: function isLoading() {
                return t.numLoading > 0;
            }
        }, {
            key: "load",
            value: function load(a, e) {
                var _this = this;
                return new zs.Coop(function(s, l) {
                    if (!a) return s();
                    var c = t.check(a);
                    t.numLoading++, c && !_this.isPackLoaded(c) ? zs.platform.async.loadSubpackage({
                        pkgName: c
                    }).then(function() {
                        t.loadedPacks.push(c), t.nativeLoad(a, e).then(function(a) {
                            t.numLoading--, s(a);
                        }).catch(function(a) {
                            return a;
                        });
                    }).catch(function() {
                        t.nativeLoad(a, e).then(function(a) {
                            t.numLoading--, s(a);
                        }).catch(function(a) {
                            return a;
                        });
                    }) : t.nativeLoad(a, e).then(function(a) {
                        t.numLoading--, s(a);
                    }).catch(function(a) {
                        return a;
                    });
                });
            }
        }, {
            key: "nativeLoad",
            value: function nativeLoad(a, t, s) {
                return new zs.Coop(function(l, c) {
                    var n = zs.proxy.Loader.getRes(a);
                    if (n) l(n); else switch (t) {
                      case e.Scene:
                        zs.proxy.Loader.loadScene(a, zs.Handler.create(null, function(a) {
                            l(a);
                        }));
                        break;

                      case e.Scene3D:
                        zs.proxy.Loader.loadScene3D(a, zs.Handler.create(null, function(a) {
                            l(a);
                        }));
                        break;

                      case e.Sprite3D:
                        zs.proxy.Loader.loadSprite3D(a, zs.Handler.create(null, function(a) {
                            l(a);
                        }));
                        break;

                      case e.FGUIPack:
                        zs.proxy.loadFGUIPack(a).then(l).catch(c);
                        break;

                      default:
                        zs.proxy.Loader.load(a, zs.Handler.create(null, function(a) {
                            l(a);
                        }), s);
                    }
                });
            }
        }, {
            key: "destroyFGUIPackage",
            value: function destroyFGUIPackage(a) {
                a && a.dispose();
            }
        }, {
            key: "destroyFGUIPackageByName",
            value: function destroyFGUIPackageByName(a) {
                var e = fairygui.UIPackage.getByName(a);
                this.destroyFGUIPackage(e);
            }
        } ]);
        return t;
    }();
    t.subpacks = {}, t.preloadPacks = [], t.loadedPacks = [], t.numLoading = 0;
    var s = /* */ function() {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [ {
            key: "init",
            value: function() {
                var _init = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee2() {
                    return _regenerator.default.wrap(function _callee2$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return zs.resource.load(s.gameCfgPath).catch(function(a) {
                                    return a;
                                });

                              case 2:
                                s.gameCfg = _context3.sent;
                                _context3.next = 5;
                                return zs.resource.load(s.porductCfgPath).catch(function(a) {
                                    return a;
                                });

                              case 5:
                                s.productCfg = _context3.sent;
                                _context3.next = 8;
                                return zs.resource.load(s.uiCfgPath).catch(function(a) {
                                    return a;
                                });

                              case 8:
                                s.uiCfg = _context3.sent;
                                s.gameCfg.secret || (s.gameCfg.secret = "7CaD3L23LlGnENd1");

                              case 10:
                              case "end":
                                return _context3.stop();
                            }
                        }
                    }, _callee2);
                }));
                function init() {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        }, {
            key: "load",
            value: function() {
                var _load = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee3(a, e, t, l) {
                    var _e4, c, n, _e5;
                    return _regenerator.default.wrap(function _callee3$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (!(null == s.list && (s.list = {}), s.list[a])) {
                                    _context4.next = 2;
                                    break;
                                }
                                return _context4.abrupt("return", new zs.Coop(function(e, t) {
                                    e(s.list[a]);
                                }));

                              case 2:
                                _context4.t0 = null == t || l;
                                if (!_context4.t0) {
                                    _context4.next = 6;
                                    break;
                                }
                                _context4.next = 6;
                                return zs.resource.load(e).then(function(e) {
                                    s.list[a] = e;
                                }).catch(function() {
                                    zs.log.warn("本地无法正确加载配置表 " + a + " 路径为 " + e, "Configs");
                                });

                              case 6:
                                if (!t) {
                                    _context4.next = 18;
                                    break;
                                }
                                _e4 = t.split(">>", 2);
                                if (!(_e4.length > 0)) {
                                    _context4.next = 18;
                                    break;
                                }
                                c = _e4.length > 1 ? _e4[0] : null, n = _e4.length > 1 ? _e4[1] : _e4[0];
                                if (!l) {
                                    _context4.next = 14;
                                    break;
                                }
                                zs.network.config(!1, c, n).then(function(e) {
                                    e && (s.list[a] = e);
                                }).catch(function() {
                                    zs.log.warn("远程无法正确加载配置表 " + a + " 路径为 " + t, "Configs");
                                });
                                _context4.next = 18;
                                break;

                              case 14:
                                _context4.next = 16;
                                return zs.network.config(!1, c, n).catch(function() {
                                    zs.log.warn("远程无法正确加载配置表 " + a + " 路径为 " + t, "Configs");
                                });

                              case 16:
                                _e5 = _context4.sent;
                                _e5 && (s.list[a] = _e5);

                              case 18:
                                return _context4.abrupt("return", new zs.Coop(function(e, t) {
                                    e(s.list[a]);
                                }));

                              case 19:
                              case "end":
                                return _context4.stop();
                            }
                        }
                    }, _callee3);
                }));
                function load(_x, _x2, _x3, _x4) {
                    return _load.apply(this, arguments);
                }
                return load;
            }()
        }, {
            key: "get",
            value: function get(a) {
                return null == s.list || null == s.list[a] ? null : s.list[a];
            }
        } ]);
        return s;
    }();
    s.gameCfgPath = zs.proxy.Configs.gameCfgPath, s.porductCfgPath = zs.proxy.Configs.porductCfgPath, 
    s.uiCfgPath = zs.proxy.Configs.uiCfgPath;
    a.ResourceType = e, a.resource = t, a.configs = s, a.prefabs = /* */ function() {
        function _class() {
            (0, _classCallCheck2.default)(this, _class);
        }
        (0, _createClass2.default)(_class, null, [ {
            key: "load",
            value: function() {
                var _load2 = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee4(a, e, t, l) {
                    var _t;
                    return _regenerator.default.wrap(function _callee4$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                if (!(null == s.list && (s.list = {}), s.list[a])) {
                                    _context5.next = 2;
                                    break;
                                }
                                return _context5.abrupt("return", new zs.Coop(function(e, t) {
                                    e(s.list[a]);
                                }));

                              case 2:
                                if (!(null == t || l)) {
                                    _context5.next = 7;
                                    break;
                                }
                                _context5.next = 5;
                                return zs.resource.load(e, zs.ResourceType.Sprite3D).catch(function() {
                                    zs.log.warn("本地无法正确加载预制体 " + a + " 路径为 " + e, "Prefabs");
                                });

                              case 5:
                                _t = _context5.sent;
                                s.list[a] = _t;

                              case 7:
                                return _context5.abrupt("return", new zs.Coop(function(e, t) {
                                    e(s.list[a]);
                                }));

                              case 8:
                              case "end":
                                return _context5.stop();
                            }
                        }
                    }, _callee4);
                }));
                function load(_x5, _x6, _x7, _x8) {
                    return _load2.apply(this, arguments);
                }
                return load;
            }()
        }, {
            key: "get",
            value: function get(a) {
                return null == s.list || null == s.list[a] ? null : s.list[a];
            }
        } ]);
        return _class;
    }();
}(window.zs = window.zs || {});