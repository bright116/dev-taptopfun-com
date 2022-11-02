var _classCallCheck2 = arequire("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = arequire("../../@babel/runtime/helpers/createClass");

var _get2 = arequire("../../@babel/runtime/helpers/get");

var _getPrototypeOf2 = arequire("../../@babel/runtime/helpers/getPrototypeOf");

var _inherits2 = arequire("../../@babel/runtime/helpers/inherits");

var _createSuper2 = arequire("../../@babel/runtime/helpers/createSuper");

!function() {
    "use strict";
    Laya.loader.load("sdk/sdk.atlas");
    var t = /* */ function(_Laya$View) {
        _inherits2(t, _Laya$View);
        var _super = _createSuper2(t);
        function t() {
            _classCallCheck2(this, t);
            return _super.call(this);
        }
        _createClass2(t, [ {
            key: "onOpened",
            value: function onOpened(_t) {
                _get2(_getPrototypeOf2(t.prototype), "onOpened", this).call(this), this.argObj = _t, 
                this.initData(), this.initUI(), this.initEvent();
            }
        }, {
            key: "initUI",
            value: function initUI() {}
        }, {
            key: "initData",
            value: function initData() {}
        }, {
            key: "initEvent",
            value: function initEvent() {}
        }, {
            key: "doClose",
            value: function doClose() {
                delete uleeSDK._ui[this.name], this.close();
            }
        } ]);
        return t;
    }(Laya.View);
    Laya.ClassUtils.regClass("MainUI", /* */ function(_t2) {
        _inherits2(_class, _t2);
        var _super2 = _createSuper2(_class);
        function _class() {
            _classCallCheck2(this, _class);
            return _super2.call(this);
        }
        _createClass2(_class, [ {
            key: "initUI",
            value: function initUI() {
                this.label_energy.text = uleeSDK.getData("energy"), this.label_gold.text = uleeSDK.getData("gold"), 
                uleeSDK.getData("freeTL") && (this.btn_lucky.visible = !1), window.tt && (this.box_tt.visible = !0), 
                window.wx && (this.btn_lucky.visible = !1);
            }
        }, {
            key: "initData",
            value: function initData() {}
        }, {
            key: "initEvent",
            value: function initEvent() {
                uleeTools.onBtnScaleEvent(this.btn_pVideo, this, function() {}), uleeTools.onBtnScaleEvent(this.btn_moreGame, this, function() {
                    uleeSDK.showMoreGame();
                }), uleeTools.onBtnScaleEvent(this.btn_share, this, function() {}), uleeTools.onBtnScaleEvent(this.btn_gz, this, function() {}), 
                uleeTools.onBtnScaleEvent(this.btn_lucky, this, function() {
                    uleeSDK.openLucky();
                });
            }
        }, {
            key: "startGame",
            value: function startGame(t) {
                this.tlcallback = function() {
                    this.imgTL && this.imgTL.visible && (this.imgTL.visible = !1, this.box_menu.visible = !1), 
                    1 == uleeSDK.serverConfig.touchMistake ? uleeSDK.showCreazyClick(function() {
                        t && t(), t = null;
                    }.bind(this)) : (t && t(), t = null);
                }.bind(this), uleeSDK.oneEnergy > 0 ? this.addTL(-uleeSDK.oneEnergy) && (this.imgTL.visible = !0, 
                this.imgTL.x = this.img_tl.x + this.imgTL.width / 2, this.imgTL.y = this.img_tl.y + this.imgTL.height / 2, 
                this.imgTL.scaleX = 1, this.imgTL.scaleY = 1, this.timeline_tl.play(0, !1), Laya.timer.once(1e3, this, this.tlcallback)) : (this.tlcallback && this.tlcallback(), 
                this.box_menu.visible = !1), this.showUI(!1);
            }
        }, {
            key: "addTL",
            value: function addTL(t) {
                var e = uleeSDK.getData("energy");
                if (t < 0) return uleeSDK.getData("freeTL") ? (this.tlcallback(), !1) : e >= -t ? (this.imgTL || (this.imgTL = new Laya.Image(), 
                this.imgTL.skin = "sdk/img_powerIcon.png", this.imgTL.anchorX = .5, this.imgTL.anchorY = .5, 
                this.imgTL.visible = !1, this.addChild(this.imgTL), this.timeline_tl = new Laya.TimeLine(), 
                this.timeline_tl.to(this.imgTL, {
                    scaleX: 1.2,
                    scaleY: 1.2
                }, 100, null, 0).to(this.imgTL, {
                    x: Laya.stage.width / 2,
                    y: Laya.stage.height / 2
                }, 500, Laya.Ease.circOut, 0).to(this.imgTL, {
                    scaleX: .2,
                    scaleY: .2
                }, 100, null, 0), this.timeline_tl.on(Laya.Event.COMPLETE, this, function() {
                    this.tlcallback();
                })), uleeSDK.setData("energy", e + t), this.label_energy.text = uleeSDK.getData("energy"), 
                !0) : (uleeSDK.openAddEnergy(this.tlcallback), !1);
                if (t > 0) {
                    var i = function() {
                        var i = e + t;
                        i = i > uleeSDK.maxEnergy ? uleeSDK.maxEnergy : i, uleeSDK.setData("energy", i), 
                        this.label_energy.text = uleeSDK.getData("energy");
                    }.bind(this);
                    return uleeTools.createFlyAni({
                        x: Laya.stage.width / 2,
                        y: Laya.stage.height / 2
                    }, {
                        x: this.img_tl.x,
                        y: this.img_tl.y
                    }, t, "sdk/img_powerIcon.png", i), !0;
                }
            }
        }, {
            key: "addGold",
            value: function addGold(t) {
                var e = uleeSDK.getData("gold");
                if (t < 0) return e >= -t ? (uleeSDK.setData("gold", e + t), this.label_gold.text = uleeSDK.getData("gold"), 
                !0) : (uleeSDK.openAddGold(), !1);
                if (t > 0) {
                    var i = function() {
                        var i = e + t;
                        uleeSDK.setData("gold", i), this.label_gold.text = uleeSDK.getData("gold");
                    }.bind(this);
                    return uleeTools.createFlyAni({
                        x: Laya.stage.width / 2,
                        y: Laya.stage.height / 2
                    }, {
                        x: this.img_gold.x,
                        y: this.img_gold.y
                    }, 15, "sdk/img_jinbi.png", i), !0;
                }
            }
        }, {
            key: "showUI",
            value: function showUI(t) {
                this.btn_pVideo.visible = t, this.btn_moreGame.visible = t, t ? (this.box_menu.visible = !0, 
                uleeSDK.isFirstIn ? (uleeSDK.showAD(!0), uleeSDK.getData("energy") <= 1 && uleeSDK.openAddEnergy()) : uleeSDK.showBoxBanner()) : (uleeSDK.closeBoxBanner(), 
                uleeSDK.showAD(!0));
            }
        }, {
            key: "doClose",
            value: function doClose() {
                _get2(_getPrototypeOf2(_class.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class;
    }(t));
    Laya.ClassUtils.regClass("AddEnergyUI", /* */ function(_t3) {
        _inherits2(_class2, _t3);
        var _super3 = _createSuper2(_class2);
        function _class2() {
            _classCallCheck2(this, _class2);
            return _super3.call(this);
        }
        _createClass2(_class2, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style && this.argObj.style.centerY && (this.img_bg.centerY = this.argObj.style.centerY), 
                this.label_num.text = "+" + uleeSDK.addEnergy, this.ani1.play(0, !1), this.zOrder = 1;
            }
        }, {
            key: "initData",
            value: function initData() {}
        }, {
            key: "initEvent",
            value: function initEvent() {
                uleeTools.onBtnScaleEvent(this.btn_get, this, function() {
                    uleeSDK.mainUI.addTL(uleeSDK.addEnergy), this.doClose();
                }), uleeTools.onBtnScaleEvent(this.btn_double, this, function() {
                    uleeSDK.showVideo(function() {
                        uleeSDK.mainUI.addTL(2 * uleeSDK.addEnergy), this.doClose();
                    }.bind(this), function() {
                        uleeTools.prompt("视频观看失败，无法领取奖励");
                    });
                });
            }
        }, {
            key: "doClose",
            value: function doClose() {
                this.argObj.callback && this.argObj.callback(), _get2(_getPrototypeOf2(_class2.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class2;
    }(t));
    Laya.ClassUtils.regClass("AddGoldUI", /* */ function(_t4) {
        _inherits2(_class3, _t4);
        var _super4 = _createSuper2(_class3);
        function _class3() {
            _classCallCheck2(this, _class3);
            return _super4.call(this);
        }
        _createClass2(_class3, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style && this.argObj.style.centerY && (this.img_bg.centerY = this.argObj.style.centerY), 
                this.label_num.text = "+" + uleeSDK.addGold, this.ani1.play(0, !1), this.zOrder = 1;
            }
        }, {
            key: "initData",
            value: function initData() {}
        }, {
            key: "initEvent",
            value: function initEvent() {
                uleeTools.onBtnScaleEvent(this.btn_get, this, function() {
                    this.doClose();
                }), uleeTools.onBtnScaleEvent(this.btn_double, this, function() {
                    uleeSDK.showVideo(function() {
                        uleeSDK.mainUI.addGold(uleeSDK.addGold), this.doClose();
                    }.bind(this), function() {
                        uleeTools.prompt("视频观看失败，无法领取奖励");
                    });
                });
            }
        }, {
            key: "doClose",
            value: function doClose() {
                this.argObj.callback && this.argObj.callback(), _get2(_getPrototypeOf2(_class3.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class3;
    }(t));
    Laya.ClassUtils.regClass("LuckyUI", /* */ function(_t5) {
        _inherits2(_class4, _t5);
        var _super5 = _createSuper2(_class4);
        function _class4() {
            _classCallCheck2(this, _class4);
            return _super5.call(this);
        }
        _createClass2(_class4, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style && this.argObj.style.centerY && (this.img_bg.centerY = this.argObj.style.centerY), 
                this.updateLabel(), this.ani1.play(0, !1);
            }
        }, {
            key: "initData",
            value: function initData() {}
        }, {
            key: "updateLabel",
            value: function updateLabel() {
                this.label_times.text = "已观看（" + uleeSDK.getData("videoTimes") + "/3）", uleeSDK.getData("videoTimes") >= 3 && (this.label_times.color = "#ff110d", 
                this.btn_video.visible = !1, this.btn_continue.visible = !1, this.btn_get.visible = !0);
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                uleeTools.onBtnScaleEvent(this.btn_video, this, function() {
                    uleeSDK.showVideo(this.updateLabel.bind(this));
                }), uleeTools.onBtnScaleEvent(this.btn_continue, this, function() {
                    this.doClose();
                }), uleeTools.onBtnScaleEvent(this.btn_get, this, function() {
                    uleeSDK.setData("freeTL", !0), uleeSDK.mainUI.btn_lucky.visible = !1, this.doClose();
                });
            }
        }, {
            key: "doClose",
            value: function doClose() {
                _get2(_getPrototypeOf2(_class4.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class4;
    }(t));
    Laya.ClassUtils.regClass("ChestUI", /* */ function(_t6) {
        _inherits2(_class5, _t6);
        var _super6 = _createSuper2(_class5);
        function _class5() {
            _classCallCheck2(this, _class5);
            return _super6.call(this);
        }
        _createClass2(_class5, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style && this.argObj.style.centerY && (this.img_bg.centerY = this.argObj.style.centerY);
            }
        }, {
            key: "initData",
            value: function initData() {}
        }, {
            key: "initEvent",
            value: function initEvent() {}
        }, {
            key: "doClose",
            value: function doClose() {
                _get2(_getPrototypeOf2(_class5.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class5;
    }(t));
    Laya.ClassUtils.regClass("CreazyClickUI", /* */ function(_t7) {
        _inherits2(_class6, _t7);
        var _super7 = _createSuper2(_class6);
        function _class6() {
            _classCallCheck2(this, _class6);
            return _super7.call(this);
        }
        _createClass2(_class6, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style, this.ani1.play(0, !0), this.ani3.play(0, !0), this.ani4.play(0, !1), 
                this.ani4.on(Laya.Event.COMPLETE, this, function() {
                    this.canTouch = !0;
                }), this.img_bar.width = 0, uleeSDK.showAD(!1);
            }
        }, {
            key: "initData",
            value: function initData() {
                this.clickTimes = 0, this.clickTime = new Date().getTime(), this.targetTimes = uleeTools.random(1, 3);
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                uleeTools.onBtnScaleEvent(this.btn_click, this, function() {
                    this.canTouch && (this.ani2.play(0, !1), this.img_bar.width < 480 && (this.img_bar.width += 40 * Math.random() + 60, 
                    this.img_bar.width > 480 && (this.img_bar.width = 480)), new Date().getTime() - this.clickTime < 300 ? (this.clickTimes++, 
                    this.clickTimes == this.targetTimes && (uleeSDK.showAD(!0, 0, this.box_btn.y), this.img_bar.width = 480, 
                    Laya.timer.once(2e3, this, this.doClose))) : this.clickTimes = 0, this.clickTime = new Date().getTime());
                }), Laya.timer.frameLoop(1, this, this.loop);
            }
        }, {
            key: "loop",
            value: function loop() {
                this.img_bar.width > 0 ? this.img_bar.width -= 2 : this.img_bar.width = 0;
            }
        }, {
            key: "doClose",
            value: function doClose() {
                uleeSDK.showAD(!1), Laya.timer.clear(this, this.loop), this.argObj.callback && this.argObj.callback(), 
                _get2(_getPrototypeOf2(_class6.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class6;
    }(t));
    Laya.ClassUtils.regClass("ShareVideoUI", /* */ function(_t8) {
        _inherits2(_class7, _t8);
        var _super8 = _createSuper2(_class7);
        function _class7() {
            _classCallCheck2(this, _class7);
            return _super8.call(this);
        }
        _createClass2(_class7, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style && this.argObj.style.centerY && (this.img_bg.centerY = this.argObj.style.centerY);
            }
        }, {
            key: "initData",
            value: function initData() {}
        }, {
            key: "initEvent",
            value: function initEvent() {}
        }, {
            key: "loop",
            value: function loop() {}
        }, {
            key: "doClose",
            value: function doClose() {
                Laya.timer.clear(this, this.loop), _get2(_getPrototypeOf2(_class7.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class7;
    }(t));
    Laya.ClassUtils.regClass("DrawerUI", /* */ function(_t9) {
        _inherits2(_class8, _t9);
        var _super9 = _createSuper2(_class8);
        function _class8() {
            _classCallCheck2(this, _class8);
            return _super9.call(this);
        }
        _createClass2(_class8, [ {
            key: "initUI",
            value: function initUI() {
                Laya.timer.frameLoop(1, this, this.loop);
            }
        }, {
            key: "initData",
            value: function initData() {
                this.dir = 2, this.stopCD = 0, this.isOpen = !0;
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                this.btn_onoff.on(Laya.Event.MOUSE_DOWN, this, function(t) {
                    t.stopPropagation(), this.switchDrawer(!this.isOpen);
                }), this.list_drawer.on(Laya.Event.MOUSE_DOWN, this, function() {
                    this.stopCD = 1e3;
                }), uleeTools.listHandler(this.list_drawer, this, this.renderFunc, this.selectFunc), 
                this.list_drawer.array = uleeSDK.recommendDatas;
                var t = this.list_drawer._children[0]._children[0].height + 20;
                this.maxh = Math.ceil(this.list_drawer.array.length / 3) * t - this.list_drawer.height - this.list_drawer._spaceY;
            }
        }, {
            key: "switchDrawer",
            value: function switchDrawer(t) {
                this.isOpen = t, this.isOpen ? this.btn_arrow.rotation = 0 : this.btn_arrow.rotation = 180;
            }
        }, {
            key: "renderFunc",
            value: function renderFunc(t, e) {
                var i = t.dataSource, s = t.getChildByName("img_icon"), l = t.getChildByName("label_name");
                s.skin = i.icon, l.text = i.name;
            }
        }, {
            key: "selectFunc",
            value: function selectFunc(t) {
                var e = this.list1._cells[t].dataSource;
                uleeSDK.jumpToApp(e);
            }
        }, {
            key: "loop",
            value: function loop() {
                if (this.isOpen) {
                    if (this.img_bg.x < 0) {
                        var _t10 = -this.img_bg.x / 10;
                        _t10 = _t10 < 2 ? 2 : _t10, this.img_bg.x += _t10, this.img_bg.x > -1 && (this.img_bg.x = 0);
                    }
                    this.stopCD > 0 ? this.stopCD -= Laya.timer.delta : (this.list_drawer._scrollBar.value += this.dir, 
                    this.list_drawer._scrollBar.value >= this.maxh ? (this.stopCD = 1e3, this.dir = -2) : this.list_drawer._scrollBar.value <= 0 && (this.stopCD = 1e3, 
                    this.dir = 2));
                } else if (this.img_bg.x > -500) {
                    var _t11 = (500 + this.img_bg.x) / 10;
                    _t11 = _t11 < 2 ? 2 : _t11, this.img_bg.x -= _t11, this.img_bg.x < -499 && (this.img_bg.x = -500);
                }
            }
        }, {
            key: "doClose",
            value: function doClose() {
                Laya.timer.clear(this, this.loop), _get2(_getPrototypeOf2(_class8.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class8;
    }(t));
    Laya.ClassUtils.regClass("CoupletUI", /* */ function(_t12) {
        _inherits2(_class9, _t12);
        var _super10 = _createSuper2(_class9);
        function _class9() {
            _classCallCheck2(this, _class9);
            return _super10.call(this);
        }
        _createClass2(_class9, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style && this.argObj.style.centerY && (this.list1.y = this.argObj.style.y, 
                this.list2.y = this.argObj.style.y), this.zOrder = -1;
            }
        }, {
            key: "initData",
            value: function initData() {
                if (this.shakeCD = 0, uleeSDK.recommendDatas.length > 0) {
                    this.arr1 = [], this.arr2 = [];
                    var _t13 = Math.floor(uleeSDK.recommendDatas.length / 2);
                    for (;this.arr1.length < _t13 || this.arr2.length < _t13; ) {
                        var e = uleeTools.random(0, uleeSDK.recommendDatas.length - 1);
                        this.arr1.length < _t13 && !uleeTools.isContain(this.arr1, uleeSDK.recommendDatas[e]) ? this.arr1.push(uleeSDK.recommendDatas[e]) : this.arr2.length < _t13 && !uleeTools.isContain(this.arr1, uleeSDK.recommendDatas[e]) && !uleeTools.isContain(this.arr2, uleeSDK.recommendDatas[e]) && this.arr2.push(uleeSDK.recommendDatas[e]);
                    }
                    this.list1.array = this.arr1, this.list2.array = this.arr2;
                }
            }
        }, {
            key: "isContain",
            value: function isContain(t, e) {
                for (var i = 0; i < t.length; i++) {
                    if (t[i] == e) return !0;
                }
                return !1;
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                Laya.timer.frameLoop(1, this, this.loop), uleeTools.listHandler(this.list1, this, this.renderFunc, this.selectFunc1), 
                uleeTools.listHandler(this.list2, this, this.renderFunc, this.selectFunc2);
            }
        }, {
            key: "renderFunc",
            value: function renderFunc(t, e) {
                var i = t.dataSource, s = t.getChildByName("img_icon"), l = t.getChildByName("label_name");
                s.skin = i.icon, l.text = i.name;
            }
        }, {
            key: "selectFunc1",
            value: function selectFunc1(t) {
                var e = this.list1._cells[t].dataSource;
                uleeSDK.jumpToApp(e);
            }
        }, {
            key: "selectFunc2",
            value: function selectFunc2(t) {
                var e = this.list2._cells[t].dataSource;
                uleeSDK.jumpToApp(e);
            }
        }, {
            key: "loop",
            value: function loop() {
                if (this.shakeCD -= Laya.timer.delta, this.shakeCD <= 0) {
                    this.shakeCD = 4e3;
                    for (var t = 0; t < this.list1._cells.length; t++) {
                        0 == uleeTools.random(0, 2) && this.shakeIcon(this.list1._cells[t]), 1 == uleeTools.random(0, 2) && this.shakeIcon(this.list2._cells[t]);
                    }
                }
            }
        }, {
            key: "shakeIcon",
            value: function shakeIcon(t) {
                var e = new Laya.TimeLine();
                e.to(t, {
                    rotation: 15
                }, 50, null, 0).to(t, {
                    rotation: 0
                }, 50, null, 0).to(t, {
                    rotation: -15
                }, 50, null, 0).to(t, {
                    rotation: 9
                }, 50, null, 0).to(t, {
                    rotation: 0
                }, 50, null, 0).to(t, {
                    rotation: -7
                }, 30, null, 0).to(t, {
                    rotation: 0
                }, 30, null, 0).to(t, {
                    rotation: 5
                }, 30, null, 0).to(t, {
                    rotation: 0
                }, 30, null, 0).play(0, !1), e.on(Laya.Event.COMPLETE, this, function() {
                    e.destroy();
                });
            }
        }, {
            key: "doClose",
            value: function doClose() {
                Laya.timer.clear(this, this.loop), _get2(_getPrototypeOf2(_class9.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class9;
    }(t));
    Laya.ClassUtils.regClass("SettlementUI", /* */ function(_t14) {
        _inherits2(_class10, _t14);
        var _super11 = _createSuper2(_class10);
        function _class10() {
            _classCallCheck2(this, _class10);
            return _super11.call(this);
        }
        _createClass2(_class10, [ {
            key: "initUI",
            value: function initUI() {
                if (this.argObj.style && (this.argObj.style.centerY && (this.img_bg.centerY = this.argObj.style.centerY, 
                this.img_native.centerY = this.argObj.style.centerY), this.argObj.style.height && (this.img_bg.height = this.argObj.style.height)), 
                this.zOrder = -1, window.qg) {
                    var t = uleeSDK.getNativeAd();
                    t && (this.img_native.skin = t.imgUrlList[0]);
                }
                uleeSDK.showAD(!1);
            }
        }, {
            key: "initData",
            value: function initData() {
                this.dir = 2, this.stopCD = 0, uleeSDK.isFirstIn = !1;
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                if (uleeSDK.showAD(!1), window.qg) {
                    this.btn_adclose.on(Laya.Event.MOUSE_DOWN, this, function(t) {
                        this.doClose(), t.stopPropagation();
                    }.bind(this)), this.btn_ad.on(Laya.Event.MOUSE_DOWN, this, function(t) {
                        this.doClose(), uleeSDK.reportClick(), t.stopPropagation();
                    }.bind(this)), this.img_native.on(Laya.Event.MOUSE_DOWN, this, function(t) {
                        this.doClose(), uleeSDK.reportClick(), t.stopPropagation();
                    }.bind(this));
                    var _t15 = Math.random();
                    uleeSDK.serverConfig && 1 == uleeSDK.serverConfig.touchMistake && uleeSDK.serverConfig.clickNativeRate > _t15 && (0 == uleeSDK.serverConfig.isFirstIn || !uleeSDK.isFirstIn) && (this.img_native.visible = !1, 
                    Laya.timer.once(1e3, this, function() {
                        this.img_native.visible = !0;
                    }.bind(this)), this.argObj.callback && this.argObj.callback()), this.img_bg.visible = !1;
                } else this.img_native.visible = !1, this.list.on(Laya.Event.MOUSE_DOWN, this, function() {
                    this.stopCD = 1e3;
                }), uleeTools.listHandler(this.list, this, this.renderFunc, this.selectFunc), this.list.array = uleeSDK.recommendDatas, 
                this.maxh = 240 * Math.ceil(this.list.array.length / 3) - (this.img_bg.height - 35) - 20, 
                Laya.timer.frameLoop(1, this, this.loop), 1 == uleeSDK.serverConfig.touchMistake && Laya.timer.once(1e3, this, function() {
                    if (this.destroyed) return;
                    var t = this.argObj.bannerY || Laya.stage.height - 300;
                    uleeSDK.showAD(!0, 0, t), Laya.timer.once(2e3, this, function() {
                        this.destroyed || uleeSDK.showAD(!1);
                    });
                });
            }
        }, {
            key: "renderFunc",
            value: function renderFunc(t, e) {
                var i = t.dataSource, s = t.getChildByName("img_icon"), l = t.getChildByName("label_name");
                s.skin = i.icon, l.text = i.name;
            }
        }, {
            key: "selectFunc",
            value: function selectFunc(t) {
                var e = this.list._cells[t].dataSource;
                uleeSDK.jumpToApp(e);
            }
        }, {
            key: "loop",
            value: function loop() {
                this.stopCD > 0 ? this.stopCD -= Laya.timer.delta : (this.list._scrollBar.value += this.dir, 
                this.list._scrollBar.value >= this.maxh ? (this.stopCD = 1e3, this.dir = -2) : this.list._scrollBar.value <= 0 && (this.stopCD = 1e3, 
                this.dir = 2));
            }
        }, {
            key: "doClose",
            value: function doClose() {
                Laya.timer.clear(this, this.loop), _get2(_getPrototypeOf2(_class10.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class10;
    }(t));
    Laya.ClassUtils.regClass("FullScreenUI", /* */ function(_t16) {
        _inherits2(_class11, _t16);
        var _super12 = _createSuper2(_class11);
        function _class11() {
            _classCallCheck2(this, _class11);
            return _super12.call(this);
        }
        _createClass2(_class11, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style, this.zOrder = 1;
            }
        }, {
            key: "initData",
            value: function initData() {
                this.dir = 2, this.stopCD = 0;
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                this.list.on(Laya.Event.MOUSE_DOWN, this, function() {
                    this.stopCD = 1e3;
                }), uleeTools.listHandler(this.list, this, this.renderFunc, this.selectFunc), this.list.array = uleeSDK.recommendDatas, 
                this.maxh = 220 * Math.ceil(this.list.array.length / 2) - this.list.height - 20, 
                Laya.timer.frameLoop(1, this, this.loop), uleeTools.onBtnScaleEvent(this.btn_continue, this, function() {
                    this.doClose();
                });
            }
        }, {
            key: "renderFunc",
            value: function renderFunc(t, e) {
                var i = t.dataSource, s = t.getChildByName("img_di"), l = new Laya.Image();
                l.width = 300, l.height = 200, l.skin = s.skin, s.mask = l;
                var a = s.getChildByName("img_icon"), n = s.getChildByName("label_name");
                a.skin = i.icon, n.text = i.name;
            }
        }, {
            key: "selectFunc",
            value: function selectFunc(t) {
                var e = this.list._cells[t].dataSource;
                uleeSDK.jumpToApp(e);
            }
        }, {
            key: "loop",
            value: function loop() {
                this.stopCD > 0 ? this.stopCD -= Laya.timer.delta : (this.list._scrollBar.value += this.dir, 
                this.list._scrollBar.value >= this.maxh ? (this.stopCD = 1e3, this.dir = -2) : this.list._scrollBar.value <= 0 && (this.stopCD = 1e3, 
                this.dir = 2));
            }
        }, {
            key: "doClose",
            value: function doClose() {
                Laya.timer.clear(this, this.loop), _get2(_getPrototypeOf2(_class11.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class11;
    }(t));
    Laya.ClassUtils.regClass("MoreGameUI", /* */ function(_t17) {
        _inherits2(_class12, _t17);
        var _super13 = _createSuper2(_class12);
        function _class12() {
            _classCallCheck2(this, _class12);
            return _super13.call(this);
        }
        _createClass2(_class12, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style, this.zOrder = 1, uleeSDK.showAD(!1), uleeSDK.recommendDatas.length > 0 && (this.label_name1.text = uleeSDK.recommendDatas[0].name, 
                this.img_icon1.skin = uleeSDK.recommendDatas[0].icon, this.label_name2.text = uleeSDK.recommendDatas[1].name, 
                this.img_icon2.skin = uleeSDK.recommendDatas[1].icon, this.label_name3.text = uleeSDK.recommendDatas[2].name, 
                this.img_icon3.skin = uleeSDK.recommendDatas[2].icon);
            }
        }, {
            key: "initData",
            value: function initData() {
                this.dir = 2, this.stopCD = 0;
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                var _this = this;
                if (this.list.on(Laya.Event.MOUSE_DOWN, this, function() {
                    this.stopCD = 1e3;
                }), uleeTools.listHandler(this.list, this, this.renderFunc, this.selectFunc), this.list.array = uleeSDK.recommendDatas, 
                this.maxh = 220 * Math.ceil(this.list.array.length / 2) - this.list.height - 20, 
                Laya.timer.frameLoop(1, this, this.loop), uleeTools.onBtnScaleEvent(this.btn_back, this, this.doClose), 
                uleeSDK.recommendDatas.length > 0) {
                    var _loop = function _loop(_t18) {
                        uleeTools.onBtnScaleEvent(_this["img_bg" + _t18], _this, function() {
                            uleeSDK.jumpToApp(uleeSDK.recommendDatas[_t18]);
                        });
                    };
                    for (var _t18 = 0; _t18 < 3; _t18++) {
                        _loop(_t18);
                    }
                }
            }
        }, {
            key: "renderFunc",
            value: function renderFunc(t, e) {
                var i = t.dataSource, s = t.getChildByName("img_icon"), l = t.getChildByName("label_name"), a = t.getChildByName("label_content"), n = t.getChildByName("label_index");
                s.skin = i.icon, l.text = i.name, n.text = e + 1, a.text = i.content;
            }
        }, {
            key: "selectFunc",
            value: function selectFunc(t) {
                var e = this.list._cells[t].dataSource;
                uleeSDK.jumpToApp(e);
            }
        }, {
            key: "loop",
            value: function loop() {
                this.stopCD > 0 ? this.stopCD -= Laya.timer.delta : (this.list._scrollBar.value += this.dir, 
                this.list._scrollBar.value >= this.maxh ? (this.stopCD = 1e3, this.dir = -2) : this.list._scrollBar.value <= 0 && (this.stopCD = 1e3, 
                this.dir = 2));
            }
        }, {
            key: "doClose",
            value: function doClose() {
                Laya.timer.clear(this, this.loop), _get2(_getPrototypeOf2(_class12.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class12;
    }(t));
    Laya.ClassUtils.regClass("RecommendUI", /* */ function(_t19) {
        _inherits2(_class13, _t19);
        var _super14 = _createSuper2(_class13);
        function _class13() {
            _classCallCheck2(this, _class13);
            return _super14.call(this);
        }
        _createClass2(_class13, [ {
            key: "initUI",
            value: function initUI() {
                this.argObj.style, this.zOrder = 1, 1 == uleeSDK.serverConfig.touchMistake ? (this.touchType = uleeTools.random(0, 1), 
                0 == this.touchType ? Laya.timer.once(1e3, this, function() {
                    if (this.canTouch = !0, this.destroyed) return;
                    var t = this.btn_close.y - 70;
                    uleeSDK.showAD(!0, 0, t), Laya.timer.once(2e3, this, function() {
                        this.destroyed || uleeSDK.showAD(!1);
                    });
                }) : (this.btn_close.y = Laya.stage.height - 100, Laya.timer.once(1e3, this, function() {
                    uleeSDK.showAD(!0);
                    var t = new Laya.TimeLine();
                    t.to(this.btn_close, {
                        y: Laya.stage.height - 300
                    }, 1500, null, 0).play(0, !1), t.on(Laya.Event.COMPLETE, this, function() {
                        t.destroy(), this.canTouch = !0;
                    });
                })), uleeSDK.showAD(!1)) : (uleeSDK.showAD(!0), this.canTouch = !0);
            }
        }, {
            key: "initData",
            value: function initData() {
                if (this.arr1 = [], uleeSDK.recommendDatas.length > 0) {
                    var _t20 = uleeSDK.recommendDatas.length > 4 ? 4 : uleeSDK.recommendDatas.length;
                    for (;this.arr1.length < _t20; ) {
                        var e = uleeTools.random(0, uleeSDK.recommendDatas.length - 1);
                        this.arr1.length < _t20 && !uleeTools.isContain(this.arr1, uleeSDK.recommendDatas[e]) && this.arr1.push(uleeSDK.recommendDatas[e]);
                    }
                    this.list.array = this.arr1;
                }
            }
        }, {
            key: "initEvent",
            value: function initEvent() {
                uleeTools.listHandler(this.list, this, this.renderFunc, this.selectFunc), uleeTools.onBtnScaleEvent(this.btn_close, this, function() {
                    this.canTouch && this.doClose();
                });
            }
        }, {
            key: "renderFunc",
            value: function renderFunc(t, e) {
                var i = t.dataSource, s = t.getChildByName("img_icon"), l = t.getChildByName("label_name");
                s.skin = i.icon, l.text = i.name;
            }
        }, {
            key: "selectFunc",
            value: function selectFunc(t) {
                var e = this.list._cells[t].dataSource;
                uleeSDK.jumpToApp(e);
            }
        }, {
            key: "doClose",
            value: function doClose() {
                uleeSDK.showAD(!1), this.argObj.callback && this.argObj.callback(), _get2(_getPrototypeOf2(_class13.prototype), "doClose", this).call(this);
            }
        } ]);
        return _class13;
    }(t));
}();