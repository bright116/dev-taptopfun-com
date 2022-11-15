var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("../../@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("../../@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {};

(function (exports) {
    "use strict";
    function showMsgBox(params) {
        zs.fgui.msgbox.show(params);
    }
    function hideMsgBox(isClear) {
        if (isClear) {
            zs.fgui.msgbox.clear();
        }
        zs.fgui.msgbox.hide();
    }
    var workflow = /* */ function () {
        (0, _createClass2.default)(workflow, [{
            key: "exportWindow",
            get: function get() {
                if (this._exportWindow == null) {
                    this._exportWindow = zs.fgui.window.create().show();
                }
                return this._exportWindow;
            }
        }, {
            key: "fsmList",
            get: function get() {
                if (this._fsmList == null) {
                    this._fsmList = {};
                }
                return this._fsmList;
            }
        }, {
            key: "state",
            get: function get() {
                if (this.fsm) {
                    return this.fsm.current;
                }
                return null;
            }
        }, {
            key: "childState",
            get: function get() {
                if (this.fsm && this.fsmList[this.fsm.current]) {
                    return this.fsmList[this.fsm.current].current;
                }
                return null;
            }
        }]);
        function workflow() {
            (0, _classCallCheck2.default)(this, workflow);
            this.switchExporter = "zs_jump_switch";
            this.exporterPack = null;
        }
        (0, _createClass2.default)(workflow, [{
            key: "registe",
            value: function registe() { }
        }, {
            key: "start",
            value: function start() {
                if (this.fsm) {
                    this.fsm.onBeforeChange = Laya.Handler.create(this, this.onBeforeChange, null, false);
                    this.fsm.onChanged = Laya.Handler.create(this, this.onChanged, null, false);
                }
                zs.fgui.configs.registeBase(workflow.exporterList, zs.exporter.list);
                zs.fgui.configs.registeBase(workflow.exporterCard, zs.exporter.card);
                core.addAppShow(Laya.Handler.create(this, zs.platform.sync.clearDelayBanner, null, false));
                this.fsm.init();
            }
        }, {
            key: "setFSM",
            value: function setFSM(key, fsm) {
                this.fsmList[key] = fsm;
            }
        }, {
            key: "on",
            value: function on(key, handler, isBefore) {
                if (key == null || key.length <= 0 || handler == null) {
                    return;
                }
                if (isBefore) {
                    if (this.preListeners == null) {
                        this.preListeners = {};
                    }
                    if (this.preListeners[key] == null) {
                        this.preListeners[key] = [];
                    }
                    var listener = this.preListeners[key];
                    for (var i = 0, n = listener.length; i < n; i++) {
                        if (listener[i]._id == handler._id) {
                            return;
                        }
                    }
                    this.preListeners[key].push(handler);
                } else {
                    if (this.listeners == null) {
                        this.listeners = {};
                    }
                    if (this.listeners[key] == null) {
                        this.listeners[key] = [];
                    }
                    var _listener = this.listeners[key];
                    for (var _i = 0, _n = _listener.length; _i < _n; _i++) {
                        if (_listener[_i]._id == handler._id) {
                            return;
                        }
                    }
                    this.listeners[key].push(handler);
                }
            }
        }, {
            key: "off",
            value: function off(key, handler, isBefore) {
                if (key == null || key.length <= 0 || handler == null) {
                    return;
                }
                if (isBefore) {
                    if (this.preListeners == null) {
                        return;
                    }
                    if (this.preListeners[key] == null) {
                        return;
                    }
                    var listener = this.preListeners[key];
                    for (var i = 0, n = listener.length; i < n; i++) {
                        if (listener[i]._id == handler._id) {
                            listener.splice(i, 1);
                            return;
                        }
                    }
                } else {
                    if (this.listeners == null) {
                        return;
                    }
                    if (this.listeners[key] == null) {
                        return;
                    }
                    var _listener2 = this.listeners[key];
                    for (var _i2 = 0, _n2 = _listener2.length; _i2 < _n2; _i2++) {
                        if (_listener2[_i2]._id == handler._id) {
                            _listener2.splice(_i2, 1);
                            return;
                        }
                    }
                }
            }
        }, {
            key: "offAll",
            value: function offAll(key, isBefore) {
                if (key == null || key.length <= 0) {
                    return;
                }
                if (isBefore) {
                    if (this.preListeners == null) {
                        return;
                    }
                    if (this.preListeners[key] == null) {
                        return;
                    }
                    delete this.preListeners[key];
                } else {
                    if (this.listeners == null) {
                        return;
                    }
                    if (this.listeners[key] == null) {
                        return;
                    }
                    delete this.listeners[key];
                }
            }
        }, {
            key: "next",
            value: function next(target) {
                if (this.fsm == null) {
                    return;
                }
                if (target) {
                    this.fsm.runTransition(target);
                } else {
                    this.fsm.runNext();
                }
            }
        }, {
            key: "childNext",
            value: function childNext(target) {
                if (this.fsm == null) {
                    return;
                }
                var childFSM = this.fsmList[this.fsm.current];
                if (childFSM) {
                    if (target) {
                        childFSM.runTransition(target);
                    } else {
                        childFSM.runNext();
                    }
                }
            }
        }, {
            key: "onBeforeChange",
            value: function onBeforeChange(target, current) {
                if (this.preListeners != null && this.preListeners[target] != null) {
                    var list = this.preListeners[target];
                    for (var i = 0, n = list.length; i < n; i++) {
                        var once = list[i].once;
                        list[i].run();
                        if (once) {
                            list.splice(i, 1);
                            i--;
                            n--;
                        }
                    }
                }
                this.exportWindow.clear();
                // banner销毁
                zs.platform.sync.hideBanner();
                zs.platform.sync.clearDelayBanner();
            }
        }, {
            key: "onChanged",
            value: function onChanged(current) {
                zs.td.justTrack(zs.td.workflowKey + current, zs.td.workflowDesc + current);
                if (this.listeners != null && this.listeners[current] != null) {
                    var list = this.listeners[current];
                    for (var i = 0, n = list.length; i < n; i++) {
                        var once = list[i].once;
                        list[i].run();
                        if (once) {
                            list.splice(i, 1);
                            i--;
                            n--;
                        }
                    }
                }
                var childFSM = this.fsmList[current];
                if (childFSM) {
                    childFSM.onBeforeChange = Laya.Handler.create(this, this.onChildFSMBeforeChanged, null, false);
                    childFSM.onChanged = Laya.Handler.create(this, this.onChildFSMChanged, null, false);
                    childFSM.init();
                    var productData = zs.configs.productCfg[current];
                    if (productData) {
                        zs.log.info(current + " 状态存在子状态机，无法自动创建应用运营配置，请使用子状态进行配置!", "Workflow", childFSM.list);
                    }
                } else {
                    this.checkBase(current);
                    zs.product.get(this.switchExporter) && this.checkExporter(current);
                    this.checkBanner(current);
                }
            }
        }, {
            key: "onChildFSMBeforeChanged",
            value: function onChildFSMBeforeChanged(target, current) {
                if (this.fsm == null) {
                    return;
                }
                var childKey = this.fsm.current + "." + target;
                if (this.preListeners != null && this.preListeners[childKey] != null) {
                    var list = this.preListeners[childKey];
                    for (var i = 0, n = list.length; i < n; i++) {
                        var once = list[i].once;
                        list[i].run();
                        if (once) {
                            list.splice(i, 1);
                            i--;
                            n--;
                        }
                    }
                }
                this.exportWindow.clear();
                // banner销毁
                zs.platform.sync.hideBanner();
                console.log("hide child banner");
                zs.platform.sync.clearDelayBanner();
            }
        }, {
            key: "onChildFSMChanged",
            value: function onChildFSMChanged(current) {
                if (this.fsm == null) {
                    return;
                }
                var childKey = this.fsm.current + "." + current;
                zs.td.justTrack(zs.td.workflowKey + childKey, zs.td.workflowDesc + childKey);
                if (this.listeners != null && this.listeners[childKey] != null) {
                    var list = this.listeners[childKey];
                    for (var i = 0, n = list.length; i < n; i++) {
                        var once = list[i].once;
                        list[i].run();
                        if (once) {
                            list.splice(i, 1);
                            i--;
                            n--;
                        }
                    }
                }
                this.checkBase(childKey);
                zs.product.get(this.switchExporter) && this.checkExporter(childKey);
                this.checkBanner(childKey);
            }
        }, {
            key: "checkBanner",
            value: function checkBanner(current) {
                var data = zs.configs.productCfg[current];
                if (this.bannerIgnoreList && this.bannerIgnoreList.indexOf(current) >= 0) {
                    if (data && data.banner) {
                        zs.log.info("状态 " + current + " 在横幅广告忽略列表中，无法自动生成，请自主管理横幅广告展示或将该状态移出忽略列表", "Workflow");
                    }
                    return;
                }
                data && zs.platform.sync.checkBanner({
                    data: data
                });
            }
        }, {
            key: "checkExporter",
            value: function checkExporter(current) {
                var data = zs.configs.productCfg[current];
                if (this.exporterIgnoreList && this.exporterIgnoreList.indexOf(current) >= 0) {
                    if (data && data.exporter && data.exporter.length > 0) {
                        zs.log.info("状态 " + current + " 在导出忽略列表中，无法自动生成，请自主管理导出展示或将该状态移出忽略列表", "Workflow");
                    }
                    return;
                }
                if (data && data.exporter && data.exporter.length > 0) {
                    for (var i = 0, n = data.exporter.length; i < n; i++) {
                        var config = data.exporter[i];
                        if (config.switch) {
                            if (Array.isArray(config.switch)) {
                                var skip = false;
                                for (var _i3 = 0, _n3 = config.switch.length; _i3 < _n3; _i3++) {
                                    if (!zs.product.get(config.switch[_i3])) {
                                        skip = true;
                                        break;
                                    }
                                }
                                if (skip) {
                                    continue;
                                }
                            } else if (!zs.product.get(config.switch)) {
                                continue;
                            }
                        }
                        this.exportWindow.applyConfig(config).front();
                    }
                }
            }
        }, {
            key: "checkBase",
            value: function checkBase(current) {
                var data = zs.configs.productCfg[current];
                if (data && data.base && data.base.length > 0) {
                    for (var i = 0, n = data.base.length; i < n; i++) {
                        var config = data.base[i];
                        if (config.switch) {
                            if (Array.isArray(config.switch)) {
                                var skip = false;
                                for (var _i4 = 0, _n4 = config.switch.length; _i4 < _n4; _i4++) {
                                    if (!zs.product.get(config.switch[_i4])) {
                                        skip = true;
                                        break;
                                    }
                                }
                                if (skip) {
                                    continue;
                                }
                            } else if (!zs.product.get(config.switch)) {
                                continue;
                            }
                        }
                        this.exportWindow.applyConfig(config).front();
                    }
                }
            }
        }]);
        return workflow;
    }();
    workflow.exporterList = "export_list";
    workflow.exporterCard = "export_card";
    var core = /* */ function () {
        function core() {
            (0, _classCallCheck2.default)(this, core);
        }
        (0, _createClass2.default)(core, null, [{
            key: "init",
            value: function () {
                var _init = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee(productDef) {
                    var entry;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    zs.platform.init();
                                    zs.platform.sync.addEventShow({
                                        showHandler: function showHandler(result) {
                                            core.onAppShow(result);
                                        }
                                    });
                                    zs.platform.sync.addEventHide({
                                        hideHandler: function hideHandler(result) {
                                            core.onAppHide(result);
                                        }
                                    });
                                    _context.next = 5;
                                    return zs.configs.init();

                                case 5:
                                    zs.td.appKey = this.tdKey;
                                    zs.td.appName = this.appName;
                                    zs.td.appId = this.appId;
                                    zs.configs.gameCfg.tdVersion && (zs.td.versionName = zs.configs.gameCfg.tdVersion);
                                    zs.td.init();
                                    zs.td.justTrack(zs.td.startupKey, zs.td.startupDesc);
                                    zs.resource.init();
                                    if (zs.configs.gameCfg.debug) {
                                        zs.log.Configs.logLevel = zs.log.Level.DEBUG;
                                    }
                                    this.onConfigInit && this.onConfigInit.run();
                                    zs.product.init(productDef);
                                    this._readyStart = false;
                                    zs.ui.uiScene.init();
                                    zs.fgui.init();
                                    entry = this.entry ? this.entry : zs.base.entry;
                                    if (!this.loadingPage) {
                                        _context.next = 25;
                                        break;
                                    }
                                    _context.next = 22;
                                    return this.loadingPage.preload();

                                case 22:
                                    this.entryInst = entry.init(this.loadingPage, this, this.ready);
                                    _context.next = 32;
                                    break;

                                case 25:
                                    if (!this.layaLoadingPage) {
                                        _context.next = 31;
                                        break;
                                    }
                                    _context.next = 28;
                                    return this.layaLoadingPage.preload();

                                case 28:
                                    this.entryInst = entry.init(this.layaLoadingPage, this, this.ready);
                                    _context.next = 32;
                                    break;

                                case 31:
                                    this.entryInst = entry.init(zs.ui.Loading, this, this.ready);

                                case 32:
                                    if (zs.platform.config.platformMark == "wx_" && typeof wx !== "undefined") {
                                        loadLib("zsLibs/adapter/ald-game.js");
                                        loadLib("zsLibs/adapter/h.js");
                                    }

                                case 33:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function init(_x) {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        }, {
            key: "ready",
            value: function () {
                var _ready = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee2() {
                    var basicExportPack, switchs, cfgs, key, cfg, _cfgs, _key, _cfg, i, n, workListener;
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    zs.log.debug("初始化数据统计", "Core");
                                    _context2.next = 3;
                                    return zs.td.registeConfig(zs.configs.gameCfg.tdConfig);

                                case 3:
                                    this.progress = 15;
                                    zs.log.debug("初始化广告与导出组件", "Core");
                                    _context2.next = 7;
                                    return zs.fgui.loadPack(zs.fgui.configs.pack_basic_exporter);

                                case 7:
                                    basicExportPack = _context2.sent;
                                    zs.ui.FGUI_msgbox.bind(basicExportPack);
                                    zs.ui.FGUI_list.bind(basicExportPack);
                                    zs.ui.FGUI_card.bind(basicExportPack);
                                    this.progress = 20;
                                    zs.log.debug("加载必要分包", "Core");
                                    _context2.next = 15;
                                    return zs.resource.preload();

                                case 15:
                                    this.progress = 30;
                                    zs.log.debug("加载 main", "Core");
                                    _context2.next = 19;
                                    return zs.fgui.loadPacks(zs.configs.gameCfg.fguiPacks, true);

                                case 19:
                                    this.onFGUIBind && this.onFGUIBind.run();
                                    this.progress = 40;
                                    zs.log.debug("web 设置", "Core");
                                    _context2.next = 24;
                                    return zs.network.init();

                                case 24:
                                    core.userInfo = _context2.sent;
                                    core.userId = core.userInfo.user_id;
                                    this.progress = 50;
                                    zs.log.debug("运营设置", "Core");
                                    _context2.next = 30;
                                    return zs.network.config(true);

                                case 30:
                                    switchs = _context2.sent;
                                    zs.product.sync(switchs);
                                    this.progress = 60;
                                    zs.log.debug("加载基础配置", "Core");
                                    if (!(zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.configs)) {
                                        _context2.next = 45;
                                        break;
                                    }
                                    cfgs = zs.configs.gameCfg.resources.configs;
                                    _context2.t0 = _regenerator.default.keys(cfgs);

                                case 37:
                                    if ((_context2.t1 = _context2.t0()).done) {
                                        _context2.next = 45;
                                        break;
                                    }
                                    key = _context2.t1.value;
                                    cfg = cfgs[key];
                                    if (!(cfg && cfg.length > 0)) {
                                        _context2.next = 43;
                                        break;
                                    }
                                    _context2.next = 43;
                                    return zs.configs.load(key, cfg[0], cfg.length > 1 ? cfg[1] : null, cfg.length > 2 ? cfg[2] : true);

                                case 43:
                                    _context2.next = 37;
                                    break;

                                case 45:
                                    this.progress = 70;
                                    if (!(zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.prefabs)) {
                                        _context2.next = 57;
                                        break;
                                    }
                                    _cfgs = zs.configs.gameCfg.resources.prefabs;
                                    _context2.t2 = _regenerator.default.keys(_cfgs);

                                case 49:
                                    if ((_context2.t3 = _context2.t2()).done) {
                                        _context2.next = 57;
                                        break;
                                    }
                                    _key = _context2.t3.value;
                                    _cfg = _cfgs[_key];
                                    if (!(_cfg && _cfg.length > 0)) {
                                        _context2.next = 55;
                                        break;
                                    }
                                    _context2.next = 55;
                                    return zs.prefabs.load(_key, _cfg[0], _cfg.length > 1 ? _cfg[1] : null, _cfg.length > 2 ? _cfg[2] : true);

                                case 55:
                                    _context2.next = 49;
                                    break;

                                case 57:
                                    this.progress = 80;
                                    zs.log.debug("广告组件初始化", "Core");
                                    zs.platform.initAds();
                                    this.progress = 85;
                                    zs.log.debug("业务流程拼装", "Core");
                                    this.progress = 95;
                                    if (this.workflow == null) {
                                        this.workflow = new zs.base.workflow();
                                    }
                                    if (!this.workflow.exporterPack) {
                                        _context2.next = 67;
                                        break;
                                    }
                                    _context2.next = 67;
                                    return zs.fgui.loadPack(this.workflow.exporterPack);

                                case 67:
                                    this.workflow.registe();
                                    if (this.workListeners) {
                                        for (i = 0, n = this.workListeners.length; i < n; i++) {
                                            workListener = this.workListeners[i];
                                            this.workflow.on(workListener.key, workListener.handler, workListener.isBefore);
                                        }
                                        this.workListeners = null;
                                    }
                                    this.checkGameCfg(switchs);
                                    if (this.onPrepare) {
                                        this.onPrepare.run();
                                    } else {
                                        this.readyFinish();
                                    }
                                    Laya.timer.frameLoop(1, null, function () {
                                        var sortIndex = 1;
                                        if (zs.ui.uiScene.scene) {
                                            if (Laya.stage.getChildIndex(zs.ui.uiScene.scene) < Laya.stage.numChildren - sortIndex) {
                                                Laya.stage.setChildIndex(zs.ui.uiScene.scene, Laya.stage.numChildren - sortIndex);
                                            }
                                            sortIndex++;
                                        }
                                        if (Laya.stage.getChildIndex(fairygui.GRoot.inst.displayObject) != Laya.stage.numChildren - sortIndex) {
                                            Laya.stage.setChildIndex(fairygui.GRoot.inst.displayObject, Laya.stage.numChildren - sortIndex);
                                        }
                                    });

                                case 72:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));
                function ready() {
                    return _ready.apply(this, arguments);
                }
                return ready;
            }()
        }, {
            key: "readyFinish",
            value: function readyFinish() {
                this.progress = 100;
                this._readyStart = true;
            }
        }, {
            key: "start",
            value: function start() {
                zs.log.debug("启动业务", "Core");
                if (this.readyStart) {
                    this.workflow.start();
                    this.onStart && this.onStart.run();
                    zs.td.justTrack(zs.td.gameStartKey, zs.td.gameStartDesc, {
                        uid: core.userId
                    });
                }
            }
        }, {
            key: "onWorkflow",
            value: function onWorkflow(key, handler, isBefore) {
                if (key == null || key.length <= 0 || handler == null) {
                    return;
                }
                if (this.workListeners == null) {
                    this.workListeners = [];
                }
                handler.once = false;
                this.workListeners.push({
                    key: key,
                    handler: handler,
                    isBefore: isBefore
                });
            }
        }, {
            key: "onceWorkflow",
            value: function onceWorkflow(key, handler, isBefore) {
                if (key == null || key.length <= 0 || handler == null) {
                    return;
                }
                if (this.workListeners == null) {
                    this.workListeners = [];
                }
                handler.once = true;
                this.workListeners.push({
                    key: key,
                    handler: handler,
                    isBefore: isBefore
                });
            }
        }, {
            key: "onAppShow",
            value: function onAppShow(result) {
                if (this.appShowListeners == null || this.appShowListeners.length <= 0) {
                    return;
                }
                for (var i = 0, n = this.appShowListeners.length; i < n; i++) {
                    var listener = this.appShowListeners[i];
                    listener && listener.runWith(result);
                    if (!listener || listener.once) {
                        this.appShowListeners.splice(i, 1);
                        i--;
                        n--;
                    }
                }
            }
        }, {
            key: "onAppHide",
            value: function onAppHide(result) {
                if (this.appHideListeners == null || this.appHideListeners.length <= 0) {
                    return;
                }
                for (var i = 0, n = this.appHideListeners.length; i < n; i++) {
                    var listener = this.appHideListeners[i];
                    listener && listener.runWith(result);
                    if (!listener || listener.once) {
                        this.appHideListeners.splice(i, 1);
                        i--;
                        n--;
                    }
                }
            }
        }, {
            key: "addAppShow",
            value: function addAppShow(handler) {
                if (handler == null) {
                    return;
                }
                if (this.appShowListeners == null) {
                    this.appShowListeners = [];
                }
                this.appShowListeners.push(handler);
            }
        }, {
            key: "removeAppShow",
            value: function removeAppShow(handler) {
                if (handler == null || this.appShowListeners == null || this.appShowListeners.length <= 0) {
                    return;
                }
                var caller = handler.caller;
                var method = handler.method;
                var onceOnly = handler.once;
                for (var i = 0, n = this.appShowListeners.length; i < n; i++) {
                    var listener = this.appShowListeners[i];
                    if (listener && (!caller || listener.caller === caller) && (method == null || listener.method === method) && (!onceOnly || listener.once)) {
                        this.appShowListeners.splice(i, 1);
                        i--;
                        n--;
                        listener.recover();
                    }
                }
            }
        }, {
            key: "addAppHide",
            value: function addAppHide(handler) {
                if (handler == null) {
                    return;
                }
                if (this.appHideListeners == null) {
                    this.appHideListeners = [];
                }
                this.appHideListeners.push(handler);
            }
        }, {
            key: "removeAppHide",
            value: function removeAppHide(handler) {
                if (handler == null || this.appHideListeners == null || this.appHideListeners.length <= 0) {
                    return;
                }
                var caller = handler.caller;
                var method = handler.method;
                var onceOnly = handler.once;
                for (var i = 0, n = this.appHideListeners.length; i < n; i++) {
                    var listener = this.appHideListeners[i];
                    if (listener && (!caller || listener.caller === caller) && (method == null || listener.method === method) && (!onceOnly || listener.once)) {
                        this.appHideListeners.splice(i, 1);
                        i--;
                        n--;
                        listener.recover();
                    }
                }
            }
        }, {
            key: "checkGameCfg",
            value: function checkGameCfg(switchs) {
                var gamecfg = zs.configs.gameCfg;
            }
        }, {
            key: "appName",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.appName : null;
            }
        }, {
            key: "appId",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.appId : null;
            }
        }, {
            key: "tdKey",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.tdKey : null;
            }
        }, {
            key: "aldKey",
            get: function get() {
                return zs.configs.gameCfg ? zs.configs.gameCfg.aldKey : null;
            }
        }, {
            key: "readyStart",
            get: function get() {
                return this.entryInst && this.entryInst.progress >= 100 && this._readyStart;
            }
        }]);
        return core;
    }();
    core.userInfo = null;
    core.userId = null;
    core.entry = null;
    core.onConfigInit = null;
    core.onFGUIBind = null;
    core.onPrepare = null;
    core.onStart = null;
    core.overrideWorkflow = null;
    core.workflow = null;
    core.loadingPage = null;
    core.layaLoadingPage = null;
    exports.showMsgBox = showMsgBox;
    exports.hideMsgBox = hideMsgBox;
    exports.workflow = workflow;
    exports.core = core;
})(window.zs = window.zs || {});