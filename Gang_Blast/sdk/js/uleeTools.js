var _classCallCheck2 = arequire("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = arequire("../../@babel/runtime/helpers/createClass");

!function() {
    "use strict";
    window.uleeTools = new (/* */ function() {
        function _class() {
            _classCallCheck2(this, _class);
        }
        _createClass2(_class, [ {
            key: "onBtnScaleEvent",
            value: function onBtnScaleEvent(t, e, i, a) {
                null == t && console.log("控件不存在");
                var n = t.scaleX ? t.scaleX : 1, s = t.scaleY ? t.scaleY : 1;
                // t.offAll(), 
                t.anchorX = isNaN(t.anchorX) ? 0 : t.anchorX,
                 t.anchorY = isNaN(t.anchorY) ? 0 : t.anchorY;
                var o = t.x + (.5 * t.width - t.width * t.anchorX),
                 r = t.y + (.5 * t.height - t.height * t.anchorY);
                t.anchorX = .5, t.anchorY = .5, t.x = o, 
                t.y = r, 
                t.on(Laya.Event.MOUSE_DOWN, e, function(t) {
                    t.target.scale(.9 * n, .9 * s), !a && t.stopPropagation();
                }), 
                t.on(Laya.Event.ROLL_OUT, e, function(t) {
                    t.currentTarget.scale(n, s), !a && t.stopPropagation();
                }), 
                t.on(Laya.Event.MOUSE_UP, e, function(t) {
                    t.target.scale(n, s), !a && t.stopPropagation();
                }), 
                t.on(Laya.Event.CLICK, e, function(t) {
                    null != i && i.bind(e)(t), null != t.stopPropagation && !a && t.stopPropagation();
                });
            }

        }, 
        
        {
            key: "random",
            value: function random(t, e) {
                return Math.floor(Math.random() * (e + 1 - t) + t);
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
            key: "createFlyAni",
            value: function createFlyAni(t, e, i, a, n) {
                var _this = this;
                var s = [];
                var _loop = function _loop(o) {
                    var i = t.x, 
                    o = t.y,
                     r = i + utils.random(-100, 100),
                      l = o + utils.random(-100, 100), h = new Laya.Image(a);
                    h.x = i, 
                    h.y = o - h.height / 2, 
                    uleeSDK.mainUI.box_page1.addChild(h), 
                    s.push(h);
                    var g = new Laya.TimeLine(),
                     p = 100 + 200 * Math.random();
                    g.to(h, {
                        x: r,
                        y: l
                    }, p).to(h, {}, 500 - p).to(h, {
                        x: e.x,
                        y: e.y
                    }, 200).to(h, {
                        scaleX: .2,
                        scaleY: .2
                    }, 100).play(0, !1),
                     g.on(Laya.Event.COMPLETE, _this, function() {
                        g.pause(), g.destroy(), h.destroy(), s.remove(h), 0 == s.length && (n && n(), n = null);
                    });
                };
                for (var o = 0; o < i; o++) {
                    _loop(o);
                }
                Laya.timer.once(2e3, this, function() {
                    if (s.length > 0) {
                        for (var t = 0; t < s.length; t++) {
                            s[t].destroy();
                        }
                        n && n(), n = null;
                    }
                });
            }
        }, {
            key: "prompt",
            value: function prompt(t) {
                this.bgSprite || (this.bgSprite = new Laya.Image("sdk/img_infoBase.png"), this.bgSprite.width = Laya.stage.width - 40, 
                this.bgSprite.height = 50, this.bgSprite.anchorX = .5, this.bgSprite.anchorY = .5, 
                this.bgSprite.x = Laya.stage.width / 2, this.bgSprite.y = Laya.stage.height / 9, 
                this.textOffx = 30, this.textOffy = 15, this.tipText = new Laya.Label(), this.bgSprite.addChild(this.tipText), 
                this.tipText.width = this.bgSprite.width - 2 * this.textOffx, this.tipText.fontSize = 30, 
                this.tipText.align = "center", this.tipText.color = "#ffffff", this.tipText.y = this.textOffy, 
                this.bgSprite.zOrder = 2e3, uleeSDK.mainUI.addChild(this.bgSprite), this.timeLine = new Laya.TimeLine(), 
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
                }, 1e3, null, 0), this.timeLine.on(Laya.Event.COMPLETE, this, function() {
                    this.bgSprite.visible = !1;
                })), this.tipText.text = t, this.tipText.x = this.textOffx, this.bgSprite.height = 30 + this.textOffx, 
                this.timeLine.play(0, !1), this.bgSprite.visible = !0, this.bgSprite.showTime = new Date().getTime(), 
                Laya.timer.once(3e3, this, function() {
                    new Date().getTime() - this.bgSprite.showTime > 3e3 && (this.bgSprite.visible = !1);
                }.bind(this));
            }
        }, {
            key: "listHandler",
            value: function listHandler(t, e, i, a) {
                t && (i && (t.renderHandler = new Handler(e, i.bind(e))), a && (t.selectHandler = new Handler(e, a.bind(e))), 
                t.scrollBar && (t.scrollBar.visible = !1), t.selectEnable = !0);
            }
        }, {
            key: "_setStorage",
            value: function _setStorage(t, e) {
                var i = e || "uleesdk";
                Laya.Browser.onMiniGame ? wx.setStorage({
                    key: i,
                    data: t
                }) : Laya.LocalStorage.setItem(i, JSON.stringify(t));
            }
        }, {
            key: "_getStorage",
            value: function _getStorage(t, e) {
                var i, a = e || "uleesdk";
                Laya.Browser.onMiniGame ? wx.getStorage({
                    key: a,
                    success: function success(e) {
                        t && t(e.data);
                    },
                    fail: function fail(e) {
                        (i = Laya.LocalStorage.getItem(a)) && (i = JSON.parse(i)), t && t(i);
                    }
                }) : ((i = Laya.LocalStorage.getItem(a)) && (i = JSON.parse(i)), t && t(i));
            }
        }, {
            key: "_copyForm2",
            value: function _copyForm2(t, e) {
                for (var i in e) {
                    "string" != typeof e[i] && "number" != typeof e[i] && "boolean" != typeof e[i] || (t[i] = e[i]);
                }
            }
        }, {
            key: "_copyFrom",
            value: function _copyFrom(t, e) {
                for (var i in e) {
                    t[i] = e[i];
                }
            }
        } ]);
        return _class;
    }())();
}();