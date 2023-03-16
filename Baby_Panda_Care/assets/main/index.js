window.__require = function n(c, e, o) {
    function a(i, s) {
        if (!e[i]) {
            if (!c[i]) {
                var d = i.split("/");
                if (d = d[d.length - 1],
                !c[d]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l)
                        return l(d, !0);
                    if (t)
                        return t(d, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
                i = d
            }
            var f = e[i] = {
                exports: {}
            };
            c[i][0].call(f.exports, function(n) {
                return a(c[i][1][n] || n)
            }, f, f.exports, n, c, e, o)
        }
        return e[i].exports
    }
    for (var t = "function" == typeof __require && __require, i = 0; i < o.length; i++)
        a(o[i]);
    return a
}({
    CommonSound: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "ae90cT4pxdKl73ENn1uBLpM", "CommonSound"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        function(n) {
            function c() {
                return null !== n && n.apply(this, arguments) || this
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {}
            ,
            c.prototype.start = function() {
                e.self = this
            }
            ,
            c.prototype.PlaySound = function(n, c) {
                n.getChildByName(c) && n.getChildByName(c).getComponent(cc.AudioSource).play()
            }
            ,
            c.prototype.stopSound = function(n, c) {
                n.getChildByName(c) && n.getChildByName(c).getComponent(cc.AudioSource).stop()
            }
            ,
            c.prototype.pauseAllSound = function(n) {
                n.children.forEach(function(n) {
                    n.getComponent(cc.AudioSource).pause()
                })
            }
            ,
            c.prototype.resumeAllSound = function(n) {
                n.children.forEach(function(n) {
                    n.getComponent(cc.AudioSource).resume()
                })
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component));
        e.default = t,
        cc._RF.pop()
    }
    , {}],
    DiperView1: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "1c623iieHhMJLiT4iNqc5mz", "DiperView1"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.Counter = 0,
                c.isPlayAnimation = !1,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {}
            ,
            c.prototype.start = function() {
                cc.debug.setDisplayStats(!1),
                e.self = this,
                this.playSound("01303002"),
                cc.find("Canvas").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas").getComponent(cc.Animation).play("Cry"),
                    e.self.playSound("bigcry"),
                    cc.find("Canvas/Panda/cry_1/leftArrow1").active = !0,
                    e.self.node.on(cc.Node.EventType.TOUCH_START, e.self.onTouchStart),
                    e.self.node.on(cc.Node.EventType.TOUCH_MOVE, e.self.onTouchMove),
                    e.self.node.on(cc.Node.EventType.TOUCH_END, e.self.onTouchEnd),
                    e.self.node.on(cc.Node.EventType.TOUCH_CANCEL, e.self.onTouchEnd)
                })
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play()
            }
            ,
            c.prototype.onTouchStart = function(n, c) {
                e.self.isPlayAnimation || (0 == e.self.Counter && cc.v2(397, 120).fuzzyEquals(n.getLocation(), 30) ? (e.self.Counter = 1,
                e.self.isPlayAnimation = !0,
                cc.find("Canvas/Panda/cry_1/leftArrow1").active = !1,
                cc.find("Canvas").getComponent(cc.Animation).play("CryWithoutBodyMovement"),
                cc.find("Canvas").getComponent(cc.Animation).play("DiperOpen1"),
                e.self.playSound("takeon"),
                cc.find("Canvas").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas").getComponent(cc.Animation).play("CryWithoutBodyMovement"),
                    e.self.isPlayAnimation = !1,
                    cc.find("Canvas/Panda/cry_1/leftArrow2").active = !0
                })) : 1 == e.self.Counter && cc.v2(397, 120).fuzzyEquals(n.getLocation(), 30) ? (e.self.Counter = 2,
                e.self.isPlayAnimation = !0,
                e.self.playSound("takeon"),
                cc.find("Canvas/Panda/cry_1/leftArrow2").active = !1,
                cc.find("Canvas").getComponent(cc.Animation).play("DiperOpen2"),
                cc.find("Canvas").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas").getComponent(cc.Animation).play("CryWithoutBodyMovement"),
                    e.self.isPlayAnimation = !1,
                    cc.find("Canvas/Panda/cry_1/leftArrow3").active = !0
                })) : 2 == e.self.Counter && cc.v2(397, 120).fuzzyEquals(n.getLocation(), 30) ? (e.self.Counter = 3,
                e.self.isPlayAnimation = !0,
                e.self.playSound("takeon"),
                cc.find("Canvas/Panda/cry_1/leftArrow3").active = !1,
                cc.find("Canvas").getComponent(cc.Animation).play("DiperOpen3"),
                cc.find("Canvas").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas").getComponent(cc.Animation).play("CryAfterDiperRemove"),
                    e.self.isPlayAnimation = !1,
                    e.self.showHintAnimation()
                })) : 3 == e.self.Counter && cc.find("Canvas/diaper_dirty").getBoundingBoxToWorld().contains(n.getLocation()) ? (e.self.isPlayAnimation = !0,
                cc.find("Canvas/diaper_dirty").active = !0,
                e.self.hideHintAnimation(),
                e.self.playSound("throwintorubish"),
                cc.find("Canvas/rubish_1").getComponent(cc.Animation).play("DustbinEntry"),
                cc.find("Canvas/diaper_dirty").runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, -30)), cc.callFunc(function() {
                    e.self.isPlayAnimation = !1,
                    cc.find("Canvas/diaper_dirty").active = !1,
                    cc.find("Canvas/diaper_dirty2").active = !0,
                    e.self.Counter = 4,
                    e.self.showHintAnimation()
                }, this)))) : 4 == e.self.Counter ? e.self.hideHintAnimation() : 5 == e.self.Counter && cc.find("Canvas/paperbox").getBoundingBoxToWorld().contains(n.getLocation()) && (cc.find("Canvas/paperbox").getComponent(cc.Animation).play("PaperBoxExit"),
                cc.find("Canvas/paper").active = !0,
                e.self.playSound("tap"),
                e.self.hideHintAnimation()))
            }
            ,
            c.prototype.onTouchMove = function(n, c) {
                4 == e.self.Counter ? (cc.find("Canvas/diaper_dirty2").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                n.getLocation().fuzzyEquals(cc.v2(645, 240), 30) && (e.self.hideHintAnimation(),
                e.self.playSound("zhituan"),
                e.self.Counter = -1,
                cc.find("Canvas/diaper_dirty2").runAction(cc.sequence(cc.jumpTo(.8, cc.v2(244, -7), 100, 1), cc.hide(), cc.callFunc(function() {
                    cc.find("Canvas/rubish_1").getComponent(cc.Animation).play("DustbinExitanim"),
                    cc.find("Canvas/paperbox").getComponent(cc.Animation).play("PaperBoxEntry"),
                    e.self.Counter = 5,
                    e.self.showHintAnimation()
                }, this))))) : 5 == e.self.Counter ? (e.self.hideHintAnimation(),
                cc.find("Canvas/paper").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.find("Canvas/Panda/cry_1/shit").getBoundingBoxToWorld().contains(n.getLocation()) && (0 == cc.find("Canvas/SoundNode/01302030").getComponent(cc.AudioSource).isPlaying && cc.find("Canvas/SoundNode/01302030").getComponent(cc.AudioSource).play(),
                cc.find("Canvas/Panda/cry_1/shit").opacity > 5 ? cc.find("Canvas/Panda/cry_1/shit").opacity -= 5 : (cc.find("Canvas/Panda/cry_1/shit").opacity = 0,
                cc.find("Canvas/rubish_1").getComponent(cc.Animation).play("DustbinEntry"),
                e.self.Counter = 6,
                e.self.showHintAnimation(),
                cc.find("Canvas").getComponent(cc.Animation).play("Smile"),
                cc.find("Canvas/SoundNode/bigcry").getComponent(cc.AudioSource).stop(),
                e.self.playSound("smile")))) : 6 == e.self.Counter && (e.self.hideHintAnimation(),
                cc.find("Canvas/paper").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                n.getLocation().fuzzyEquals(cc.v2(645, 240), 30) && (e.self.playSound("zhituan"),
                e.self.Counter = 7,
                cc.find("Canvas/paper").runAction(cc.sequence(cc.jumpTo(.8, cc.v2(244, -7), 100, 1), cc.hide(), cc.callFunc(function() {
                    cc.find("Canvas/rubish_1").getComponent(cc.Animation).play("DustbinExitanim"),
                    cc.find("Canvas/rubish_1").getComponent(cc.Animation).on("finished", function(n) {
                        console.log("onfinish"),
                        e.self.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            t.default.self.requestAds()
                        }, this), cc.delayTime(1), cc.callFunc(function() {
                            cc.director.loadScene("DiperView2")
                        })))
                    })
                }, this)))))
            }
            ,
            c.prototype.showHintAnimation = function() {
                switch (cc.find("Canvas/Hand").stopAllActions(),
                e.self.Counter) {
                case 3:
                    cc.find("Canvas/Hand").active = !0,
                    cc.find("Canvas/Hand").setPosition(-2, -162),
                    cc.find("Canvas/Hand").runAction(cc.repeatForever(cc.sequence(cc.moveTo(.5, cc.v2(-2, -180)), cc.place(cc.v2(-2, -162)))));
                    break;
                case 4:
                    cc.find("Canvas/Hand").active = !0,
                    cc.find("Canvas/Hand").setPosition(0, -200),
                    cc.find("Canvas/Hand").runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(254, -52)), cc.place(cc.v2(0, -200)))));
                    break;
                case 5:
                    cc.find("Canvas/Hand").active = !0,
                    cc.find("Canvas/Hand").setPosition(254, -100),
                    cc.find("Canvas/Hand").runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(-2, -162)), cc.place(cc.v2(254, -100)))))
                }
            }
            ,
            c.prototype.hideHintAnimation = function() {
                cc.find("Canvas/Hand").active = !1
            }
            ,
            c.prototype.onTouchEnd = function(n, c) {
                4 == e.self.Counter ? (cc.find("Canvas/diaper_dirty2").setPosition(0, -204),
                e.self.showHintAnimation()) : 5 == e.self.Counter ? (cc.find("Canvas/paper").setPosition(221, -100),
                e.self.showHintAnimation()) : 6 == e.self.Counter && e.self.showHintAnimation()
            }
            ,
            c.prototype.backAction = function() {
                this.playSound("tap"),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.preloadScene("LevelScreen", null, function(n, c) {
                        cc.director.loadScene("LevelScreen")
                    })
                }, this)))
            }
            ,
            c.prototype.getRandomArbitrary = function(n, c) {
                return Math.round(Math.random() * (c - n) + n)
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    DiperView2: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "addf3WYqTRFrbdj5KP38Hmx", "DiperView2"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.Counter = 0,
                c.isPlaySoap = !1,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {
                cc.director.preloadScene("DiperView3")
            }
            ,
            c.prototype.start = function() {
                cc.debug.setDisplayStats(!1),
                e.self = this,
                e.self.node.on(cc.Node.EventType.TOUCH_START, e.self.onTouchStart),
                e.self.node.on(cc.Node.EventType.TOUCH_MOVE, e.self.onTouchMove),
                e.self.node.on(cc.Node.EventType.TOUCH_END, e.self.onTouchEnd),
                e.self.node.on(cc.Node.EventType.TOUCH_CANCEL, e.self.onTouchEnd),
                cc.find("Canvas/Curtain").getComponent(cc.Animation).play("CurtainOpen"),
                this.addBubble(),
                cc.find("Canvas/Bubble/bubble1").active = !0,
                cc.find("Canvas/Curtain").getComponent(cc.Animation).on("finished", function() {})
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) ? cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play() : console.log("Sound File Missing")
            }
            ,
            c.prototype.onTouchStart = function(n, c) {
                0 == e.self.Counter ? cc.find("Canvas/Bubble").children.forEach(function(c) {
                    c.getBoundingBoxToWorld().contains(n.getLocation()) && (c.removeFromParent(),
                    e.self.playSound("pop"),
                    cc.find("Canvas/Bubble/bubble1") && (cc.find("Canvas/Bubble/bubble1").active = !1))
                }) : 1 == e.self.Counter && cc.find("Canvas/bathBall").getBoundingBoxToWorld().contains(n.getLocation()) ? (cc.find("Canvas/bathBall").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                e.self.playSound("tap"),
                0 == e.self.isPlaySoap && cc.find("Canvas/Character").getComponent(cc.Animation).play("DiperSoap"),
                cc.find("Canvas/bathBall").stopAllActions(),
                cc.find("Canvas/bathBall").scale = 1) : 2 == e.self.Counter && cc.find("Canvas/hat").getBoundingBoxToWorld().contains(n.getLocation()) ? (e.self.playSound("tap"),
                e.self.HideHint(),
                cc.find("Canvas/hat").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.find("Canvas/hat").stopAllActions(),
                cc.find("Canvas/hat").scale = 1,
                cc.find("Canvas/HandTarget").active = !0) : 3 == e.self.Counter && cc.find("Canvas/ladle1").getBoundingBoxToWorld().contains(n.getLocation()) && (e.self.playSound("tap"),
                cc.find("Canvas/ladle1").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.find("Canvas/ladle1").stopAllActions(),
                cc.find("Canvas/ladle1").scale = 1,
                e.self.HideHint(),
                cc.find("Canvas/HandTarget").active = !0)
            }
            ,
            c.prototype.onTouchMove = function(n, c) {
                if (1 == e.self.Counter && cc.find("Canvas/bathBall").getBoundingBoxToWorld().contains(n.getLocation())) {
                    cc.find("Canvas/bathBall").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                    cc.find("Canvas/Character/Face/FaceBubble").children.forEach(function(n) {
                        n.opacity <= 250 && n.getBoundingBoxToWorld().intersects(cc.find("Canvas/bathBall").getBoundingBoxToWorld()) && (0 == cc.find("Canvas/SoundNode/01303012").getComponent(cc.AudioSource).isPlaying && cc.find("Canvas/SoundNode/01303012").getComponent(cc.AudioSource).play(),
                        n.opacity += 1)
                    });
                    var o = !0;
                    cc.find("Canvas/Character/Face/FaceBubble").children.forEach(function(n) {
                        n.opacity <= 250 && (o = !1)
                    }),
                    o && (cc.find("Canvas/bathBall").setPosition(175, -160),
                    e.self.Counter = 2,
                    cc.find("Canvas/bathBall").runAction(cc.moveTo(1, cc.v2(175, -660))),
                    cc.find("Canvas/Character/Face/FaceAnimation").getComponent(cc.Animation).play("FaceAnimation"),
                    e.self.playSound("laugh"),
                    cc.find("Canvas/Character/Face/FaceAnimation").getComponent(cc.Animation).on("finished", function(n) {
                        cc.find("Canvas/Character/Face/Water").active = !0,
                        cc.find("Canvas/Character/Face/FaceBubble").active = !1,
                        cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleAfterShop"),
                        cc.find("Canvas/hat").runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                            e.self.playSound("jump")
                        }, this), cc.moveTo(.5, cc.v2(225, -127)))),
                        e.self.scaleeffect(cc.find("Canvas/hat")),
                        e.self.ShowHand(0)
                    }))
                } else
                    2 == e.self.Counter && cc.find("Canvas/hat").getBoundingBoxToWorld().contains(n.getLocation()) ? (cc.find("Canvas/hat").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                    cc.find("Canvas/hat").position.fuzzyEquals(cc.v3(0, 10, 0), 100) && (cc.find("Canvas/HandTarget").active = !1,
                    cc.find("Canvas/hat").setPosition(56565, 56565),
                    e.self.Counter = 3,
                    cc.find("Canvas/Character/Face/xqq_maozi").active = !0,
                    cc.find("Canvas/ladle1").runAction(cc.sequence(cc.delayTime(2), cc.moveTo(1, cc.v2(240, -140)), cc.callFunc(function() {
                        e.self.ShowHand(1)
                    }, this))),
                    e.self.scaleeffect(cc.find("Canvas/ladle1")))) : 3 == e.self.Counter && cc.find("Canvas/ladle1").getBoundingBoxToWorld().contains(n.getLocation()) && (cc.find("Canvas/ladle1").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                    cc.find("Canvas/ladle1").position.fuzzyEquals(cc.v3(0, 100, 0), 100) && (cc.find("Canvas/HandTarget").active = !1,
                    cc.find("Canvas/ladle1").setPosition(56565, 56565),
                    e.self.Counter = 4,
                    e.self.playSound("cool"),
                    e.self.playSound("01303010"),
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("WaterPour"),
                    cc.find("Canvas/Character/WaterAnimation").getComponent(cc.Animation).play("WaterDropAnimation"),
                    cc.find("Canvas/Character/WaterAnimation").getComponent(cc.Animation).on("finished", function(n) {
                        cc.find("Canvas/SoundNode/01303010").getComponent(cc.AudioSource).stop(),
                        cc.find("Canvas/Character/WaterAnimation").getComponent(cc.Animation).off("finished"),
                        cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleAfterWaterAnimation"),
                        e.self.playSound("smile"),
                        cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                            t.default.self.requestAds(),
                            cc.director.preloadScene("DiperView3", null, function(n, c) {
                                cc.director.loadScene("DiperView3")
                            })
                        })
                    })))
            }
            ,
            c.prototype.onTouchEnd = function(n, c) {
                1 == e.self.Counter ? (cc.find("Canvas/bathBall").setPosition(175, -160),
                e.self.scaleeffect(cc.find("Canvas/bathBall"))) : 2 == e.self.Counter ? (cc.find("Canvas/hat").setPosition(225, -130),
                e.self.scaleeffect(cc.find("Canvas/hat")),
                e.self.ShowHand(0),
                cc.find("Canvas/HandTarget").active = !1) : 3 == e.self.Counter && (cc.find("Canvas/ladle1").setPosition(240, -140),
                e.self.scaleeffect(cc.find("Canvas/ladle1")),
                e.self.ShowHand(1),
                cc.find("Canvas/HandTarget").active = !1)
            }
            ,
            c.prototype.backAction = function() {
                this.playSound("tap"),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
                    cc.director.loadScene("LevelScreen")
                }, this)))
            }
            ,
            c.prototype.ShowHand = function(n) {
                console.log("Hintindex:" + n),
                0 == n ? (cc.find("Canvas/Hand").active = !0,
                cc.find("Canvas/Hand").stopAllActions(),
                cc.find("Canvas/Hand").runAction(cc.repeatForever(cc.sequence(cc.place(242, -120), cc.moveTo(1, cc.v2(-18, 92)))))) : 1 == n && (cc.find("Canvas/Hand").active = !0,
                cc.find("Canvas/Hand").stopAllActions(),
                cc.find("Canvas/Hand").runAction(cc.repeatForever(cc.sequence(cc.place(242, -120), cc.moveTo(1, cc.v2(-18, 92))))))
            }
            ,
            c.prototype.HideHint = function() {
                cc.find("Canvas/Hand").stopAllActions(),
                cc.find("Canvas/Hand").active = !1
            }
            ,
            c.prototype.addBubble = function() {
                for (var n = 0; n < 100; n++) {
                    var c = cc.instantiate(cc.find("Canvas/Bubble/DontDelete/bubble" + this.getRandomArbitrary(1, 6)));
                    cc.find("Canvas/Bubble").addChild(c),
                    c.setPosition(this.getRandomArbitrary(-400, 400), this.getRandomArbitrary(-252, 252)),
                    c.runAction(cc.sequence(cc.moveBy(this.getRandomArbitrary(3, 10), cc.v2(0, 700)), cc.removeSelf())),
                    c.scale = .2 + .2 * this.getRandomArbitrary(1, 5)
                }
                cc.find("Canvas/bathBall").runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
                    e.self.playSound("jump")
                }), cc.moveTo(.3, cc.v2(175, -160)), cc.callFunc(function() {
                    e.self.Counter = 1,
                    e.self.scaleeffect(cc.find("Canvas/bathBall")),
                    cc.find("Canvas/Bubble/bubble1") && (cc.find("Canvas/Bubble/bubble1").active = !1)
                }, this)))
            }
            ,
            c.prototype.getRandomArbitrary = function(n, c) {
                return Math.round(Math.random() * (c - n) + n)
            }
            ,
            c.prototype.scaleeffect = function(n) {
                n.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.1), cc.scaleTo(.1, 1), cc.delayTime(1))))
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    DiperView3: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "9d74eXzhmxHDJHDBCpFiOXU", "DiperView3"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.Counter = 0,
                c.CanMove = !1,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {}
            ,
            c.prototype.start = function() {
                cc.debug.setDisplayStats(!1),
                e.self = this,
                e.self.node.on(cc.Node.EventType.TOUCH_START, e.self.onTouchStart),
                e.self.node.on(cc.Node.EventType.TOUCH_MOVE, e.self.onTouchMove),
                e.self.node.on(cc.Node.EventType.TOUCH_END, e.self.onTouchEnd),
                e.self.node.on(cc.Node.EventType.TOUCH_CANCEL, e.self.onTouchEnd),
                cc.find("Canvas/towel").runAction(cc.sequence(cc.delayTime(1), cc.moveTo(.5, cc.v2(230, -95)), cc.callFunc(function() {
                    e.self.showHintAnimation()
                }, this)))
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) ? cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play() : console.log("Sound File Missing")
            }
            ,
            c.prototype.onTouchStart = function(n, c) {
                0 == e.self.Counter && cc.find("Canvas/towel").getBoundingBoxToWorld().contains(n.getLocation()) ? (e.self.CanMove = !0,
                e.self.playSound("tap"),
                e.self.hideHintAnimation()) : 1 == e.self.Counter && cc.find("Canvas/diaper").getBoundingBoxToWorld().contains(n.getLocation()) ? (e.self.CanMove = !0,
                e.self.playSound("tap"),
                e.self.hideHintAnimation()) : 2 == e.self.Counter && cc.find("Canvas/diaper_in").getBoundingBoxToWorld().contains(n.getLocation()) ? (e.self.playSound("takeoff"),
                e.self.Counter = -1,
                cc.find("Canvas/Character/leftArrow3").active = !1,
                cc.find("Canvas/diaper_in").active = !1,
                cc.find("Canvas/Character/Body").getComponent(cc.Animation).play("DiperWear1"),
                cc.find("Canvas/Character/Body").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character/Body").getComponent(cc.Animation).off("finished"),
                    e.self.Counter = 3,
                    cc.find("Canvas/Character/leftArrow2").active = !0
                })) : 3 == e.self.Counter && cc.find("Canvas/diaper_in").getBoundingBoxToWorld().contains(n.getLocation()) ? (e.self.Counter = -1,
                e.self.playSound("takeoff"),
                cc.find("Canvas/Character/leftArrow2").active = !1,
                cc.find("Canvas/Character/Body").getComponent(cc.Animation).play("DiperWear2"),
                cc.find("Canvas/Character/Body").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character/Body").getComponent(cc.Animation).off("finished"),
                    e.self.Counter = 4,
                    cc.find("Canvas/Character/leftArrow1").active = !0
                })) : 4 == e.self.Counter && cc.find("Canvas/diaper_in").getBoundingBoxToWorld().contains(n.getLocation()) && (e.self.Counter = -1,
                e.self.playSound("takeoff"),
                cc.find("Canvas/Character/leftArrow1").active = !1,
                cc.find("Canvas/Character/Body").getComponent(cc.Animation).play("DiperWear3"),
                cc.find("Canvas/Character/Body").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character/Body").getComponent(cc.Animation).off("finished"),
                    e.self.Counter = 5,
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("KissAnimation"),
                    e.self.playSound("kiss"),
                    cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                        cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                        cc.find("Canvas/Character/Body").getComponent(cc.Animation).play("IdleWithDiper"),
                        cc.find("Canvas/Character/Face").getComponent(cc.Animation).play("FaceHappy"),
                        e.self.playSound("laugh"),
                        cc.find("Canvas/goldBurst").active = !0,
                        cc.find("Canvas/back").scale = .7,
                        cc.find("Canvas/back").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, .7))))
                    })
                }))
            }
            ,
            c.prototype.onTouchMove = function(n, c) {
                if (0 == e.self.Counter && e.self.CanMove) {
                    cc.find("Canvas/towel").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()));
                    var o = !0;
                    cc.find("Canvas/Character/WaterDrop").children.forEach(function(n) {
                        n.opacity > 3 && (o = !1,
                        n.getBoundingBoxToWorld().intersects(cc.find("Canvas/towel").getBoundingBoxToWorld()) && (0 == cc.find("Canvas/SoundNode/01303012").getComponent(cc.AudioSource).isPlaying && cc.find("Canvas/SoundNode/01303012").getComponent(cc.AudioSource).play(),
                        n.opacity -= 3))
                    }),
                    o && (e.self.Counter = 1,
                    cc.find("Canvas/towel").setPosition(230, -95),
                    cc.find("Canvas/towel").runAction(cc.moveBy(.5, cc.v2(800, 0))),
                    e.self.CanMove = !1,
                    cc.find("Canvas/diaper").runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, cc.v2(230, -110)), cc.callFunc(function() {
                        cc.find("Canvas/diaper_in2").active = !0,
                        e.self.showHintAnimation()
                    }, this))))
                } else
                    1 == e.self.Counter && e.self.CanMove && (cc.find("Canvas/diaper").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                    n.getLocation().fuzzyEquals(cc.v2(423, 91), 30) && (e.self.playSound("zhituan"),
                    e.self.Counter = 2,
                    cc.find("Canvas/diaper").setPosition(2222, 2222),
                    cc.find("Canvas/diaper_in2").active = !1,
                    cc.find("Canvas/diaper_in").active = !0,
                    e.self.CanMove = !1,
                    cc.find("Canvas/Character/leftArrow3").active = !0))
            }
            ,
            c.prototype.onTouchEnd = function(n, c) {
                0 != e.self.CanMove && (e.self.CanMove = !1,
                0 == e.self.Counter ? (e.self.showHintAnimation(),
                cc.find("Canvas/towel").setPosition(230, -95)) : 1 == e.self.Counter && (e.self.showHintAnimation(),
                cc.find("Canvas/diaper").setPosition(230, -110)))
            }
            ,
            c.prototype.backAction = function() {
                this.playSound("tap"),
                cc.sys.localStorage.setItem("Stage3Complete", !0),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.loadScene("LevelScreen")
                }, this)))
            }
            ,
            c.prototype.getRandomArbitrary = function(n, c) {
                return Math.round(Math.random() * (c - n) + n)
            }
            ,
            c.prototype.showHintAnimation = function() {
                switch (cc.find("Canvas/Hand").stopAllActions(),
                e.self.Counter) {
                case 0:
                case 1:
                    cc.find("Canvas/Hand").active = !0,
                    cc.find("Canvas/Hand").setPosition(242, -100),
                    cc.find("Canvas/Hand").runAction(cc.repeatForever(cc.sequence(cc.moveTo(1, cc.v2(-16, -113)), cc.place(cc.v2(242, -100)))))
                }
            }
            ,
            c.prototype.hideHintAnimation = function() {
                cc.find("Canvas/Hand").active = !1
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    Dressup: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "c889c+2uYtGNK6+YjkOcg78", "Dressup"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.isAnimationPlay = !0,
                c.AnimationVector = [],
                c.AnimationCounter = 0,
                c.ToolName = "0",
                c.isDone = [!1, !1, !1, !1],
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {
                cc.debug.setDisplayStats(!1)
            }
            ,
            c.prototype.start = function() {
                cc.find("Canvas/Panel/cabinet_1/PreviousBtn").getComponent(cc.Button).interactable = !1,
                e.self = this,
                this.AnimationVector.push("Idle"),
                this.AnimationVector.push("Idle"),
                this.RandomAnimation()
            }
            ,
            c.prototype.ScrollAction = function(n) {
                if (!this.isAnimationPlay) {
                    this.isAnimationPlay = !0,
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    console.log(n.target.name),
                    cc.find("Canvas/Panel/New ScrollView/view/content/cabinet_1/tool_2").active = !0,
                    cc.find("Canvas/Panel/New ScrollView/view/content/cabinet_2/tool_3").active = !0,
                    cc.find("Canvas/Panel/New ScrollView/view/content/cabinet_3/tool_5").active = !0,
                    cc.find("Canvas/Panel/New ScrollView/view/content/cabinet_4/tool_6").active = !0,
                    n.target.active = !1;
                    var c = cc.instantiate(n.target);
                    c.active = !0,
                    cc.find("Canvas").addChild(c, 10),
                    this.ToolName = n.target.name,
                    c.position = cc.find("Canvas").convertToNodeSpaceAR(n.target.parent.convertToWorldSpaceAR(n.target.position)),
                    c.runAction(cc.sequence(cc.moveTo(.4, cc.v2(50, 100)), cc.callFunc(function() {
                        switch (n.target.name) {
                        case "tool_2":
                            e.self.isDone[0] = !0,
                            e.self.playSound("01302002"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation3_1"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                                cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                                e.self.PlayIdleAnimation(),
                                e.self.showBack()
                            });
                            break;
                        case "tool_3":
                            e.self.isDone[1] = !0,
                            e.self.playSound("01302018"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation2_1"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                                cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                                e.self.PlayIdleAnimation(),
                                e.self.showBack()
                            });
                            break;
                        case "tool_5":
                            e.self.isDone[2] = !0,
                            e.self.playSound("01302013"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation1_1"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                                cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                                e.self.PlayIdleAnimation(),
                                e.self.showBack()
                            });
                            break;
                        case "tool_6":
                            e.self.isDone[3] = !0,
                            e.self.playSound("01302049"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation6_2"),
                            cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                                cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                                e.self.PlayIdleAnimation(),
                                e.self.showBack()
                            })
                        }
                    }, this), cc.removeSelf()))
                }
            }
            ,
            c.prototype.PlayIdleAnimation = function() {
                switch (console.log("Calllled"),
                this.isAnimationPlay = !1,
                e.self.ToolName) {
                case "tool_2":
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation3_2").wrapMode = cc.WrapMode.Loop;
                    break;
                case "tool_3":
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation2_2").wrapMode = cc.WrapMode.Loop;
                    break;
                case "tool_5":
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation1_2").wrapMode = cc.WrapMode.Loop;
                    break;
                case "tool_6":
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("Animation6_3").wrapMode = cc.WrapMode.Loop
                }
            }
            ,
            c.prototype.NextAction = function() {
                cc.find("Canvas/Panel/New ScrollView").getComponent(cc.ScrollView).scrollToBottom(1, !0),
                cc.find("Canvas/Panel/cabinet_1/PreviousBtn").getComponent(cc.Button).interactable = !0,
                cc.find("Canvas/Panel/cabinet_3_2/NextBtn").getComponent(cc.Button).interactable = !1
            }
            ,
            c.prototype.PreviousAction = function() {
                cc.find("Canvas/Panel/New ScrollView").getComponent(cc.ScrollView).scrollToTop(1, !0),
                cc.find("Canvas/Panel/cabinet_1/PreviousBtn").getComponent(cc.Button).interactable = !1,
                cc.find("Canvas/Panel/cabinet_3_2/NextBtn").getComponent(cc.Button).interactable = !0
            }
            ,
            c.prototype.getRandomArbitrary = function(n, c) {
                return Math.round(Math.random() * (c - n) + n)
            }
            ,
            c.prototype.showBack = function() {
                this.isDone[0] && this.isDone[1] && this.isDone[2] && this.isDone[3] && 0 == cc.find("Canvas/UI/back").scale && (cc.find("Canvas/UI/back").stopAllActions(),
                cc.find("Canvas/UI/back").scale = .7,
                cc.find("Canvas/UI/back").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, .7)))))
            }
            ,
            c.prototype.backAction = function() {
                this.playSound("tap"),
                cc.sys.localStorage.setItem("Stage5Complete", !0),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.preloadScene("LevelScreen", null, function(n, c) {
                        cc.director.loadScene("LevelScreen")
                    })
                }, this)))
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) ? cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play() : console.log("Sound File Missing")
            }
            ,
            c.prototype.RandomAnimation = function() {
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.isAnimationPlay = !0,
                    e.self.RandomAnimation()
                }),
                this.isAnimationPlay && (this.isAnimationPlay = !1,
                this.AnimationCounter >= this.AnimationVector.length && (this.AnimationCounter = 0),
                cc.find("Canvas/Character").getComponent(cc.Animation).play(this.AnimationVector[this.AnimationCounter]),
                this.AnimationCounter++,
                console.log(this.AnimationCounter))
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    EatingView1: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "56b714qEM1Bj5v+bDblIrFb", "EatingView1"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.Counter = 0,
                c.SelectedTool = 0,
                c.SelectedSubTool = 0,
                c.EatingCounter = 0,
                c.CanMove = !1,
                c.isplayAnimation = !0,
                c.isDone = [!1, !1, !1, !1],
                c.isAnimationRunning = !1,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {
                cc.debug.setDisplayStats(!1)
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) ? cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play() : console.log("Sound File Missing")
            }
            ,
            c.prototype.stopSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) && cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).stop()
            }
            ,
            c.prototype.start = function() {
                e.self = this,
                e.self.node.on(cc.Node.EventType.TOUCH_START, e.self.onTouchStart),
                e.self.node.on(cc.Node.EventType.TOUCH_MOVE, e.self.onTouchMove),
                e.self.node.on(cc.Node.EventType.TOUCH_END, e.self.onTouchEnd),
                e.self.node.on(cc.Node.EventType.TOUCH_CANCEL, e.self.onTouchEnd),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    Math.random() > .8 && e.self.isplayAnimation && e.self.Counter > 0 ? (e.self.playSound("face"),
                    e.self.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                        e.self.playSound("face")
                    }, this))),
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleEBStep2")) : cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleEBStep1")
                }),
                cc.find("Canvas/Appron").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, .8), cc.scaleTo(.2, .75)))),
                cc.find("Canvas/bibdot").runAction(cc.repeatForever(cc.blink(1, 2))),
                cc.find("Canvas/bibdot").active = !0,
                this.showHandHint(1, 1)
            }
            ,
            c.prototype.onTouchStart = function(n, c) {
                if (0 == e.self.Counter && cc.find("Canvas/Appron").getBoundingBoxToWorld().contains(n.getLocation()) && (e.self.playSound("tap"),
                e.self.CanMove = !0,
                cc.find("Canvas/Appron").stopAllActions(),
                cc.find("Canvas/Appron").scale = .75,
                e.self.hideHint()),
                e.self.Counter > 0)
                    for (var o = 1; o <= 4; o++)
                        cc.find("Canvas/Round/dish/food" + o).getBoundingBoxToWorld().contains(n.getLocation()) && (255 == cc.find("Canvas/Round").opacity ? (e.self.playSound("dishback"),
                        cc.find("Canvas/Round").runAction(cc.moveTo(.3, cc.v2(-276, -19)).easing(cc.easeBackInOut())),
                        cc.find("Canvas/Round").opacity = 254) : (e.self.isDone[o - 1] = !0,
                        cc.find("Canvas/Round/dish/food" + o).runAction(cc.sequence(cc.scaleTo(.2, .45), cc.scaleTo(.1, .5))),
                        e.self.FoodAction(o),
                        cc.find("Canvas/Round").runAction(cc.sequence(cc.delayTime(.1), cc.moveTo(.3, cc.v2(-405, -19)).easing(cc.easeBackInOut()))),
                        cc.find("Canvas/Round").opacity = 255));
                1 == e.self.SelectedTool ? cc.find("Canvas/FoodOnTabel/food1_0/pot").getBoundingBoxToWorld().contains(n.getLocation()) && 0 == e.self.SelectedSubTool ? (e.self.playSound("tap"),
                e.self.SelectedSubTool = -1,
                e.self.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    e.self.playSound("pullwater")
                }, this))),
                e.self.hideHint(),
                cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).play("WaterPour"),
                cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).off("finished"),
                    e.self.stopSound("pullwater"),
                    cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).play("FoodEntry1_1"),
                    e.self.playSound("buttonjump"),
                    e.self.SelectedSubTool = 1,
                    e.self.showHandHint(3, 1)
                })) : cc.find("Canvas/FoodOnTabel/food1_0/ladle").getBoundingBoxToWorld().contains(n.getLocation()) && 1 == e.self.SelectedSubTool ? (e.self.hideHint(),
                e.self.playSound("tap"),
                e.self.CanMove = !0,
                cc.find("Canvas/FoodOnTabel/food1_0/ladle").active = !1,
                cc.find("Canvas/Spoon1_1").active = !0,
                cc.find("Canvas/Spoon1_1").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()))) : cc.find("Canvas/FoodOnTabel/food1_0").getBoundingBoxToWorld().contains(n.getLocation()) && 2 == e.self.SelectedSubTool && (e.self.playSound("tap"),
                e.self.CanMove = !0,
                e.self.hideHint(),
                cc.find("Canvas/FoodOnTabel/food1_0").active = !1,
                cc.find("Canvas/MilkBottle").active = !0,
                cc.find("Canvas/MilkBottle").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()))) : 2 == e.self.SelectedTool && 0 == e.self.SelectedSubTool ? cc.find("Canvas/FoodOnTabel/food2_0/spoon").getBoundingBoxToWorld().contains(n.getLocation()) && (e.self.hideHint(),
                e.self.playSound("tap"),
                e.self.CanMove = !0,
                cc.find("Canvas/FoodOnTabel/food2_0/spoon").active = !1,
                cc.find("Canvas/spoonFood2").active = !0,
                cc.find("Canvas/spoonFood2").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()))) : 2 == e.self.SelectedTool && 1 == e.self.SelectedSubTool ? cc.find("Canvas/Tissues").getBoundingBoxToWorld().contains(n.getLocation()) && (e.self.playSound("tap"),
                e.self.hideHint(),
                cc.find("Canvas/paper").active = !0,
                cc.find("Canvas/paper").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                e.self.CanMove = !0) : 4 == e.self.SelectedTool ? cc.find("Canvas/FoodOnTabel/food4_1/lemon").getBoundingBoxToWorld().contains(n.getLocation()) && 255 == cc.find("Canvas/lemon").opacity && (e.self.hideHint(),
                e.self.playSound("tap"),
                cc.find("Canvas/lemon").active = !0,
                cc.find("Canvas/lemon").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.find("Canvas/FoodOnTabel/food4_1/lemon").active = !1,
                e.self.CanMove = !0) : 3 == e.self.SelectedTool && 0 == e.self.SelectedSubTool ? cc.find("Canvas/FoodOnTabel/food3_1/fork_1").getBoundingBoxToWorld().contains(n.getLocation()) && (e.self.hideHint(),
                e.self.playSound("tap"),
                cc.find("Canvas/fork_1").active = !0,
                cc.find("Canvas/FoodOnTabel/food3_1/fork_1").active = !1,
                e.self.CanMove = !0,
                cc.find("Canvas/fork_1").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()))) : 3 == e.self.SelectedTool && 1 == e.self.SelectedSubTool && cc.find("Canvas/Tissues").getBoundingBoxToWorld().contains(n.getLocation()) && (e.self.playSound("tap"),
                e.self.hideHint(),
                cc.find("Canvas/paper").active = !0,
                cc.find("Canvas/paper").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                e.self.CanMove = !0)
            }
            ,
            c.prototype.onTouchMove = function(n, c) {
                0 == e.self.Counter && e.self.CanMove && (cc.find("Canvas/Appron").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.v2(400, 165).fuzzyEquals(n.getLocation(), 30) && (cc.find("Canvas/bibdot").active = !1,
                cc.find("Canvas/Character/holddrink").active = !0,
                cc.find("Canvas/Character/pandanobib").active = !1,
                e.self.Counter = 1,
                e.self.CanMove = !1,
                cc.find("Canvas/Appron").setPosition(3233, 232323),
                e.self.WheelEntry(),
                e.self.isplayAnimation = !0)),
                e.self.CanMove && 1 == e.self.SelectedTool && 1 == e.self.SelectedSubTool ? (cc.find("Canvas/Spoon1_1").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.find("Canvas/Spoon1_1/ladlewithmilk").active && cc.v2(240, 240).fuzzyEquals(n.getLocation(), 20) ? (e.self.CanMove = !1,
                cc.find("Canvas/Spoon1_1/ladlewithmilk").active = !0,
                cc.find("Canvas/Spoon1_1").setPosition(56565, 56565),
                cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).play("MilkPowderPour"),
                e.self.playSound("addpower"),
                cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).off("finished"),
                    e.self.SelectedSubTool = 2,
                    e.self.showHandHint(4, 1)
                })) : cc.v2(487, 227).fuzzyEquals(n.getLocation(), 20) && (cc.find("Canvas/Spoon1_1/ladlewithmilk").active = !0)) : e.self.CanMove && 1 == e.self.SelectedTool && 2 == e.self.SelectedSubTool ? (cc.find("Canvas/MilkBottle").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.v2(400, 215).fuzzyEquals(n.getLocation(), 20) && (cc.find("Canvas/MilkBottle").setPosition(56565, 566565),
                e.self.SelectedSubTool = 3,
                e.self.CanMove = !1,
                e.self.isplayAnimation = !1,
                e.self.playSound("drink"),
                cc.find("Canvas/Character").getComponent(cc.Animation).play("DrinkMilk"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("AfterDrinkMilk"),
                    cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                        cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                        cc.find("Canvas/Character").getComponent(cc.Animation).play("Good"),
                        cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                            cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                            e.self.PlayIdleAnimation(),
                            e.self.WheelEntry(),
                            e.self.isplayAnimation = !0,
                            e.self.showBack()
                        })
                    })
                }))) : 2 == e.self.SelectedTool && e.self.CanMove ? 0 == e.self.SelectedSubTool ? (cc.find("Canvas/spoonFood2").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                0 == cc.find("Canvas/spoonFood2/spoon_1").active ? cc.v2(255, 140).fuzzyEquals(n.getLocation(), 20) && (cc.find("Canvas/spoonFood2/spoon_1").active = !0,
                0 == e.self.EatingCounter ? cc.find("Canvas/FoodOnTabel/food2_0/food2_2").runAction(cc.scaleTo(.2, .7)) : 1 == e.self.EatingCounter ? cc.find("Canvas/FoodOnTabel/food2_0/food2_2").runAction(cc.scaleTo(.2, .4)) : 2 == e.self.EatingCounter && cc.find("Canvas/FoodOnTabel/food2_0/food2_2").runAction(cc.scaleTo(.2, 0))) : cc.v2(440, 219).fuzzyEquals(n.getLocation(), 20) && 0 == e.self.isAnimationRunning && (e.self.isplayAnimation = !1,
                cc.find("Canvas/spoonFood2/spoon_1").active = !1,
                0 == e.self.EatingCounter ? (e.self.isAnimationRunning = !0,
                e.self.EatingCounter++,
                e.self.playSound("eat"),
                cc.find("Canvas/Character").getComponent(cc.Animation).play("EatingAnim"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    e.self.stopSound("eat"),
                    e.self.isAnimationRunning = !1,
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.isplayAnimation = !0
                })) : 1 == e.self.EatingCounter ? (e.self.isAnimationRunning = !0,
                e.self.EatingCounter++,
                e.self.isplayAnimation = !1,
                e.self.playSound("eat"),
                cc.find("Canvas/Character").getComponent(cc.Animation).play("EatingAnim2"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    e.self.stopSound("eat"),
                    e.self.isAnimationRunning = !1,
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.isplayAnimation = !0
                })) : 2 == e.self.EatingCounter && (e.self.isAnimationRunning = !0,
                e.self.EatingCounter++,
                e.self.SelectedSubTool = 1,
                e.self.isplayAnimation = !1,
                cc.find("Canvas/spoonFood2").setPosition(5656, 56656),
                e.self.CanMove = !1,
                e.self.playSound("eat"),
                cc.find("Canvas/Character").getComponent(cc.Animation).play("EatingAnim3"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.stopSound("eat"),
                    e.self.isAnimationRunning = !1,
                    cc.find("Canvas/Tissues").active = !0,
                    cc.find("Canvas/FoodOnTabel/food2_0").active = !1,
                    e.self.PlayIdleAnimation(),
                    e.self.showHandHint(7, 1),
                    e.self.showBack()
                })))) : 1 == e.self.SelectedSubTool && (cc.find("Canvas/paper").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.find("Canvas/Character/Face/dirty_1").getBoundingBoxToWorld().intersects(cc.find("Canvas/paper").getBoundingBoxToWorld()) && cc.find("Canvas/Character/Face/dirty_1").opacity > 3 ? cc.find("Canvas/Character/Face/dirty_1").opacity -= 3 : cc.find("Canvas/Character/Face/dirty_2").getBoundingBoxToWorld().intersects(cc.find("Canvas/paper").getBoundingBoxToWorld()) && cc.find("Canvas/Character/Face/dirty_2").opacity > 3 ? cc.find("Canvas/Character/Face/dirty_2").opacity -= 3 : cc.find("Canvas/Character/Face/dirty_3").getBoundingBoxToWorld().intersects(cc.find("Canvas/paper").getBoundingBoxToWorld()) && cc.find("Canvas/Character/Face/dirty_3").opacity > 3 ? cc.find("Canvas/Character/Face/dirty_3").opacity -= 3 : cc.find("Canvas/Character/Face/dirty_1").opacity < 5 && cc.find("Canvas/Character/Face/dirty_2").opacity < 5 && cc.find("Canvas/Character/Face/dirty_3").opacity < 5 && (cc.find("Canvas/Tissues").active = !1,
                cc.find("Canvas/paper").setPosition(56565, 656565),
                cc.find("Canvas/Character/Face/dirty_1").opacity = 0,
                cc.find("Canvas/Character/Face/dirty_2").opacity = 0,
                cc.find("Canvas/Character/Face/dirty_3").opacity = 0,
                e.self.CanMove = !1,
                cc.find("Canvas/Character").getComponent(cc.Animation).play("Good"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.SelectedSubTool = 0,
                    e.self.SelectedTool = 0,
                    e.self.WheelEntry(),
                    e.self.isplayAnimation = !0,
                    e.self.PlayIdleAnimation(),
                    e.self.showBack()
                }))) : 4 == e.self.SelectedTool && e.self.CanMove ? (cc.find("Canvas/lemon").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.v2(404, 227).fuzzyEquals(n.getLocation(), 10) && (e.self.isplayAnimation = !1,
                cc.find("Canvas/lemon").setPosition(6, -27),
                e.self.CanMove = !1,
                cc.find("Canvas/lemon").opacity = 254,
                cc.find("Canvas/Character").getComponent(cc.Animation).play("Lemon"),
                e.self.playSound("eatlemon"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.PlayIdleAnimation(),
                    e.self.WheelEntry(),
                    e.self.isplayAnimation = !0
                }),
                cc.find("Canvas/lemon").runAction(cc.sequence(cc.delayTime(1), cc.moveTo(.3, cc.v2(11, -100)), cc.callFunc(function() {
                    cc.find("Canvas/lemon").active = !1,
                    cc.find("Canvas/FoodOnTabel/food4_1/lemon").active = !0,
                    cc.find("Canvas/lemon").opacity = 255,
                    e.self.showBack()
                }, this))))) : 3 == e.self.SelectedTool && e.self.CanMove && 0 == e.self.SelectedSubTool ? (cc.find("Canvas/fork_1").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.v2(300, 135).fuzzyEquals(n.getLocation(), 20) && 0 == cc.find("Canvas/fork_1/fork_3").active ? (cc.find("Canvas/fork_1/fork_3").active = !0,
                0 == e.self.EatingCounter ? cc.find("Canvas/FoodOnTabel/food3_1/food3_2").runAction(cc.scaleTo(.2, .7)) : 1 == e.self.EatingCounter ? cc.find("Canvas/FoodOnTabel/food3_1/food3_2").runAction(cc.scaleTo(.2, .4)) : 2 == e.self.EatingCounter && cc.find("Canvas/FoodOnTabel/food3_1/food3_2").runAction(cc.scaleTo(.2, 0))) : cc.v2(456, 226).fuzzyEquals(n.getLocation(), 20) && cc.find("Canvas/fork_1/fork_3").active && 0 == e.self.isAnimationRunning && (cc.find("Canvas/fork_1/fork_3").active = !1,
                cc.find("Canvas/FoodOnTabel/food3_1/fork_1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/fork_1").getComponent(cc.Sprite).spriteFrame,
                0 == e.self.EatingCounter ? (e.self.isAnimationRunning = !0,
                e.self.isplayAnimation = !1,
                e.self.playSound("eatnoodle"),
                cc.find("Canvas/Character").getComponent(cc.Animation).play("EatingNoodle"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    e.self.isAnimationRunning = !1,
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished")
                })) : 1 == e.self.EatingCounter ? (e.self.isAnimationRunning = !0,
                e.self.playSound("eatnoodle"),
                cc.find("Canvas/Character").getComponent(cc.Animation).play("EatingNoodle1"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    e.self.isAnimationRunning = !1,
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished")
                })) : 2 == e.self.EatingCounter && (e.self.isAnimationRunning = !0,
                e.self.playSound("eatnoodle"),
                cc.find("Canvas/Character").getComponent(cc.Animation).play("EatingNoodle2"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.isAnimationRunning = !1,
                    e.self.PlayIdleAnimation(),
                    cc.find("Canvas/FoodOnTabel/food3_1").active = !1,
                    cc.find("Canvas/Tissues").active = !0,
                    e.self.showHandHint(7, 1)
                }),
                cc.find("Canvas/fork_1").active = !1,
                cc.find("Canvas/FoodOnTabel/food3_1/fork_1").active = !0,
                e.self.CanMove = !1,
                e.self.SelectedSubTool = 1),
                e.self.EatingCounter++)) : 3 == e.self.SelectedTool && 1 == e.self.SelectedSubTool && e.self.CanMove && (cc.find("Canvas/paper").setPosition(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.find("Canvas/Character/Face/dirty_1").getBoundingBoxToWorld().intersects(cc.find("Canvas/paper").getBoundingBoxToWorld()) && cc.find("Canvas/Character/Face/dirty_1").opacity > 3 ? cc.find("Canvas/Character/Face/dirty_1").opacity -= 3 : cc.find("Canvas/Character/Face/dirty_2").getBoundingBoxToWorld().intersects(cc.find("Canvas/paper").getBoundingBoxToWorld()) && cc.find("Canvas/Character/Face/dirty_2").opacity > 3 ? cc.find("Canvas/Character/Face/dirty_2").opacity -= 3 : cc.find("Canvas/Character/Face/dirty_3").getBoundingBoxToWorld().intersects(cc.find("Canvas/paper").getBoundingBoxToWorld()) && cc.find("Canvas/Character/Face/dirty_3").opacity > 3 ? cc.find("Canvas/Character/Face/dirty_3").opacity -= 3 : cc.find("Canvas/Character/Face/dirty_1").opacity < 5 && cc.find("Canvas/Character/Face/dirty_2").opacity < 5 && cc.find("Canvas/Character/Face/dirty_3").opacity < 5 && (cc.find("Canvas/Tissues").active = !1,
                cc.find("Canvas/paper").setPosition(56565, 656565),
                cc.find("Canvas/Character/Face/dirty_1").opacity = 0,
                cc.find("Canvas/Character/Face/dirty_2").opacity = 0,
                cc.find("Canvas/Character/Face/dirty_3").opacity = 0,
                e.self.CanMove = !1,
                e.self.SelectedSubTool = 0,
                e.self.SelectedTool = 0,
                cc.find("Canvas/Character").getComponent(cc.Animation).play("Good"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                    e.self.WheelEntry(),
                    e.self.isplayAnimation = !0,
                    e.self.showBack()
                })))
            }
            ,
            c.prototype.onTouchEnd = function(n, c) {
                0 != e.self.CanMove && (e.self.CanMove = !1,
                0 == e.self.Counter ? (e.self.showHandHint(1, .5),
                cc.find("Canvas/Appron").setPosition(-242, 125),
                cc.find("Canvas/Appron").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, .8), cc.scaleTo(.2, .75))))) : 1 == e.self.SelectedTool && 1 == e.self.SelectedSubTool ? (cc.find("Canvas/Spoon1_1").active = !1,
                cc.find("Canvas/FoodOnTabel/food1_0/ladle").active = !0,
                e.self.showHandHint(3, 1),
                cc.find("Canvas/Spoon1_1/ladlewithmilk").active ? cc.find("Canvas/FoodOnTabel/food1_0/ladle").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Spoon1_1/ladlewithmilk").getComponent(cc.Sprite).spriteFrame : cc.find("Canvas/FoodOnTabel/food1_0/ladle").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Spoon1_1").getComponent(cc.Sprite).spriteFrame) : 1 == e.self.SelectedTool && 2 == e.self.SelectedSubTool ? (cc.find("Canvas/MilkBottle").active = !1,
                cc.find("Canvas/FoodOnTabel/food1_0").active = !0,
                e.self.showHandHint(4, 1)) : 2 == e.self.SelectedTool ? 0 == e.self.SelectedSubTool ? (e.self.showHandHint(6, 1),
                cc.find("Canvas/spoonFood2").active = !1,
                cc.find("Canvas/FoodOnTabel/food2_0/spoon").active = !0,
                cc.find("Canvas/spoonFood2/spoon_1").active ? cc.find("Canvas/FoodOnTabel/food2_0/spoon").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/spoonFood2/spoon_1").getComponent(cc.Sprite).spriteFrame : cc.find("Canvas/FoodOnTabel/food2_0/spoon").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/spoonFood2").getComponent(cc.Sprite).spriteFrame) : 1 == e.self.SelectedSubTool && (cc.find("Canvas/paper").setPosition(5656, 565655),
                e.self.showHandHint(7, 1)) : 4 == e.self.SelectedTool ? (cc.find("Canvas/lemon").active = !1,
                cc.find("Canvas/FoodOnTabel/food4_1/lemon").active = !0,
                e.self.showHandHint(5, 1)) : 3 == e.self.SelectedTool && 0 == e.self.SelectedSubTool ? (cc.find("Canvas/fork_1").active = !1,
                e.self.showHandHint(8, 1),
                cc.find("Canvas/FoodOnTabel/food3_1/fork_1").active = !0,
                cc.find("Canvas/fork_1/fork_3").active ? cc.find("Canvas/FoodOnTabel/food3_1/fork_1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/fork_1/fork_3").getComponent(cc.Sprite).spriteFrame : cc.find("Canvas/FoodOnTabel/food3_1/fork_1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/fork_1").getComponent(cc.Sprite).spriteFrame) : 3 == e.self.SelectedTool && 1 == e.self.SelectedSubTool && (cc.find("Canvas/paper").setPosition(5656, 565655),
                e.self.showHandHint(7, 1)))
            }
            ,
            c.prototype.showHandHint = function(n, c) {
                var e = cc.find("Canvas/Hand");
                switch (cc.find("Canvas").stopAllActions(),
                e.stopAllActions(),
                e.active = !1,
                n) {
                case 1:
                    e.active = !0,
                    e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(-230, 82)), cc.show(), cc.moveTo(1, cc.v2(0, -85)), cc.hide(), cc.delayTime(2))));
                    break;
                case 2:
                    cc.find("Canvas").runAction(cc.sequence(cc.delayTime(c), cc.callFunc(function() {
                        e.active = !0,
                        e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(205, -140)), cc.show(), cc.scaleTo(.3, .9), cc.scaleTo(.2, 1), cc.scaleTo(.3, .9), cc.scaleTo(.2, 1), cc.hide(), cc.delayTime(2))))
                    }, this)));
                    break;
                case 3:
                    cc.find("Canvas").runAction(cc.sequence(cc.delayTime(c), cc.callFunc(function() {
                        e.active = !0,
                        cc.find("Canvas/Spoon1_1/ladlewithmilk").active ? e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(201, -139)), cc.show(), cc.moveTo(1, cc.v2(-200, -37)), cc.hide(), cc.delayTime(2)))) : e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(201, -139)), cc.show(), cc.moveTo(1, cc.v2(35, -44)), cc.hide(), cc.delayTime(2))))
                    }, this)));
                    break;
                case 4:
                    cc.find("Canvas").runAction(cc.sequence(cc.delayTime(c), cc.callFunc(function() {
                        e.active = !0,
                        e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(-200, -111)), cc.show(), cc.moveTo(1, cc.v2(0, -18)), cc.hide(), cc.delayTime(2))))
                    }, this)));
                    break;
                case 5:
                    cc.find("Canvas").runAction(cc.sequence(cc.delayTime(c), cc.callFunc(function() {
                        e.active = !0,
                        e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(-0, -175)), cc.show(), cc.moveTo(1, cc.v2(0, -15)), cc.hide(), cc.delayTime(2))))
                    }, this)));
                    break;
                case 6:
                    cc.find("Canvas").runAction(cc.sequence(cc.delayTime(c), cc.callFunc(function() {
                        e.active = !0,
                        cc.find("Canvas/spoonFood2/spoon_1").active ? e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(198, -142)), cc.show(), cc.moveTo(1, cc.v2(0, -23)), cc.hide(), cc.delayTime(2)))) : e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(198, -142)), cc.show(), cc.moveTo(1, cc.v2(-174, -137)), cc.hide(), cc.delayTime(2))))
                    }, this)));
                    break;
                case 7:
                    cc.find("Canvas").runAction(cc.sequence(cc.delayTime(c), cc.callFunc(function() {
                        e.active = !0,
                        e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(198, -123)), cc.show(), cc.moveTo(1, cc.v2(0, -7)), cc.hide(), cc.delayTime(2))))
                    }, this)));
                    break;
                case 8:
                    cc.find("Canvas").runAction(cc.sequence(cc.delayTime(c), cc.callFunc(function() {
                        e.active = !0,
                        0 == cc.find("Canvas/fork_1/fork_3").active ? e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(195, -159)), cc.show(), cc.moveTo(1, cc.v2(-142, -107)), cc.hide(), cc.delayTime(2)))) : e.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.place(cc.v2(195, -159)), cc.show(), cc.moveTo(1, cc.v2(-0, -17)), cc.hide(), cc.delayTime(2))))
                    }, this)))
                }
            }
            ,
            c.prototype.hideHint = function() {
                cc.find("Canvas").stopAllActions(),
                cc.find("Canvas/Hand").stopAllActions(),
                cc.find("Canvas/Hand").active = !1
            }
            ,
            c.prototype.PlayIdleAnimation = function() {
                cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleHungry"),
                cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                    Math.random() > .8 && e.self.isplayAnimation ? (e.self.playSound("face"),
                    e.self.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                        e.self.playSound("face")
                    }, this))),
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleEBStep2")) : Math.random() > .9 && 0 == e.self.SelectedSubTool ? cc.find("Canvas/Character").getComponent(cc.Animation).play("HitDesk") : Math.random() > .5 ? cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleHungry") : cc.find("Canvas/Character").getComponent(cc.Animation).play("IdleEBStep1")
                })
            }
            ,
            c.prototype.WheelEntry = function() {
                e.self.playSound("dishback"),
                cc.find("Canvas/Round").stopAllActions(),
                cc.find("Canvas/Round").opacity = 254,
                cc.find("Canvas/Round").runAction(cc.moveTo(.3, cc.v2(-276, -19)).easing(cc.easeBackInOut())),
                cc.find("Canvas/Round").runAction(cc.repeatForever(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
                    Math.random() > .5 ? e.self.playSound("dishturn1") : e.self.playSound("dishturn2")
                }, this), cc.rotateBy(.5, 90), cc.callFunc(function() {
                    Math.random() > .8 ? cc.find("Canvas/Round/dish/food1").runAction(cc.repeat(cc.sequence(cc.scaleTo(.3, .45), cc.scaleTo(.2, .5)), 3)) : Math.random() > .6 ? cc.find("Canvas/Round/dish/food2").runAction(cc.repeat(cc.sequence(cc.scaleTo(.3, .45), cc.scaleTo(.2, .5)), 3)) : Math.random() > .4 ? cc.find("Canvas/Round/dish/food3").runAction(cc.repeat(cc.sequence(cc.scaleTo(.3, .45), cc.scaleTo(.2, .5)), 3)) : cc.find("Canvas/Round/dish/food4").runAction(cc.repeat(cc.sequence(cc.scaleTo(.3, .45), cc.scaleTo(.2, .5)), 3))
                }, this))))
            }
            ,
            c.prototype.FoodAction = function(n) {
                this.hideHint(),
                e.self.playSound("buttonjump"),
                e.self.EatingCounter = 0,
                e.self.SelectedSubTool = 0,
                this.SelectedTool = n,
                cc.find("Canvas/Tissues").active = !1,
                cc.find("Canvas/FoodOnTabel/food1_0").active = !1,
                cc.find("Canvas/FoodOnTabel/food2_0").active = !1,
                cc.find("Canvas/FoodOnTabel/food3_1").active = !1,
                cc.find("Canvas/FoodOnTabel/food4_1").active = !1,
                cc.find("Canvas/Character/Face/dirty_1").opacity = 0,
                cc.find("Canvas/Character/Face/dirty_2").opacity = 0,
                cc.find("Canvas/Character/Face/dirty_3").opacity = 0,
                cc.find("Canvas/FoodOnTabel").getComponent(cc.Animation).play("FoodEntry" + n),
                console.log(n),
                1 == n ? this.showHandHint(2, 1) : 4 == n ? this.showHandHint(5, 1) : 2 == n ? this.showHandHint(6, 1) : 3 == n && this.showHandHint(8, 1)
            }
            ,
            c.prototype.showBack = function() {
                this.isDone[0] && this.isDone[1] && this.isDone[2] && this.isDone[3] && 0 == cc.find("Canvas/back").scale && (cc.find("Canvas/back").stopAllActions(),
                cc.find("Canvas/back").scale = .7,
                cc.find("Canvas/back").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, .7)))))
            }
            ,
            c.prototype.backAction = function() {
                cc.sys.localStorage.setItem("Stage2Complete", !0),
                this.playSound("tap"),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.preloadScene("LevelScreen", null, function(n, c) {
                        cc.director.loadScene("LevelScreen")
                    })
                }, this)))
            }
            ,
            c.prototype.getRandomArbitrary = function(n, c) {
                return Math.round(Math.random() * (c - n) + n)
            }
            ,
            c.prototype.update = function(n) {
                cc.find("Canvas/Round/dish/food1").angle = -cc.find("Canvas/Round").angle,
                cc.find("Canvas/Round/dish/food2").angle = -cc.find("Canvas/Round").angle,
                cc.find("Canvas/Round/dish/food3").angle = -cc.find("Canvas/Round").angle,
                cc.find("Canvas/Round/dish/food4").angle = -cc.find("Canvas/Round").angle
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    LevelScreen: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "07755AsiYFOHai2Y3TySlqZ", "LevelScreen"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.counter = 0,
                c.isPlayAnimation = !1,
                c.bgsoundElement = null,
                c.isAnimationPlay = !0,
                c.AnimationVector = [],
                c.AnimationCounter = 0,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {
                cc.director.preloadScene("ToyView", null, function(n, c) {
                    console.log("ToyView Preloaded")
                }),
                cc.director.preloadScene("DiperView", null, function(n, c) {
                    console.log("DiperView Preloaded")
                }),
                cc.director.preloadScene("DiperView2", null, function(n, c) {
                    console.log("DiperView2 Preloaded")
                }),
                cc.director.preloadScene("DiperView3", null, function(n, c) {
                    console.log("LevelScreen Preloaded")
                }),
                cc.debug.setDisplayStats(!1)
            }
            ,
            c.prototype.addParticle = function(n) {
                var c = cc.instantiate(cc.find("Canvas/TapParticle"));
                cc.find("Canvas").addChild(c),
                c.zIndex = 5,
                c.position = cc.v3(n),
                c.active = !0,
                c.runAction(cc.sequence(cc.delayTime(2), cc.removeSelf()))
            }
            ,
            c.prototype.addHeart = function() {
                var n = cc.instantiate(cc.find("Canvas/Heart"));
                cc.find("Canvas/Temp").addChild(n),
                n.active = !0,
                n.runAction(cc.sequence(cc.delayTime(4), cc.removeSelf()))
            }
            ,
            c.prototype.start = function() {
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("FaceRound"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Scare"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Hehehehe"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Clapping"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Idle1"),
                e.self = this,
                this.RandomAnimation();
                for (var n = 0; n < 5; n++)
                    cc.find("Canvas/Menu/menu_" + (n + 1)).runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.5, -5), cc.rotateBy(.5, 10), cc.rotateBy(.5, -5))));
                var c = 0;
                "true" == cc.sys.localStorage.getItem("Stage1Complete") && (cc.find("Canvas/Menu/menu_1").getComponent(cc.Button).interactable = !1,
                cc.find("Canvas/Menu/menu_1").stopAllActions(),
                cc.find("Canvas/Menu/menu_1/sign").active = !0,
                c++),
                "true" === cc.sys.localStorage.getItem("Stage2Complete") && (cc.find("Canvas/Menu/menu_2").getComponent(cc.Button).interactable = !1,
                cc.find("Canvas/Menu/menu_2").stopAllActions(),
                cc.find("Canvas/Menu/menu_2/sign").active = !0,
                c++),
                "true" === cc.sys.localStorage.getItem("Stage3Complete") && (cc.find("Canvas/Menu/menu_3").getComponent(cc.Button).interactable = !1,
                cc.find("Canvas/Menu/menu_3").stopAllActions(),
                cc.find("Canvas/Menu/menu_3/sign").active = !0,
                c++),
                "true" === cc.sys.localStorage.getItem("Stage4Complete") && (cc.find("Canvas/Menu/menu_4").getComponent(cc.Button).interactable = !1,
                cc.find("Canvas/Menu/menu_4").stopAllActions(),
                cc.find("Canvas/Menu/menu_4/sign").active = !0,
                c++),
                "true" === cc.sys.localStorage.getItem("Stage5Complete") && (cc.find("Canvas/Menu/menu_5").getComponent(cc.Button).interactable = !1,
                cc.find("Canvas/Menu/menu_5").stopAllActions(),
                cc.find("Canvas/Menu/menu_5/sign").active = !0,
                c++),
                5 == c && (cc.find("Canvas/btn_takeright").scale = .8,
                cc.find("Canvas/btn_takeright").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .85), cc.scaleTo(.2, .8))))),
                this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(3), cc.callFunc(this.scaleAction, this)))),
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart),
                this.showHint()
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play()
            }
            ,
            c.prototype.DoneAction = function() {
                cc.find("Canvas/Menu").active = !1,
                cc.find("Canvas/btn_takeright").active = !1,
                cc.find("Canvas/promotion").position = cc.v3(0, 0, 0),
                t.default.self.setPromoThumb(),
                t.default.self.requestAds()
            }
            ,
            c.prototype.PandaTapAnimation = function() {
                e.self.hideHint(),
                cc.find("Canvas/CustomNode/Custom").active = !1,
                cc.find("Canvas/Panda").active = !0,
                cc.find("Canvas").getComponent(cc.Animation).on("finished", function() {
                    cc.find("Canvas").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas/CustomNode/Custom").active = !0,
                    cc.find("Canvas/Panda").active = !1,
                    e.self.isPlayAnimation = !1,
                    e.self.showHint()
                })
            }
            ,
            c.prototype.onTouchStart = function(n, c) {
                0 != cc.find("Canvas/Menu").active && (e.self.isPlayAnimation || (e.self.addParticle(cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())),
                cc.v2(275, 375).fuzzyEquals(n.getLocation(), 20) ? (e.self.isPlayAnimation = !0,
                e.self.hideHint(),
                cc.find("Canvas").getComponent(cc.Animation).play("LeftEar"),
                e.self.playSound("leftear"),
                e.self.PandaTapAnimation()) : cc.v2(320, 160).fuzzyEquals(n.getLocation(), 20) ? (e.self.isPlayAnimation = !0,
                e.self.hideHint(),
                cc.find("Canvas").getComponent(cc.Animation).play("LeftHand"),
                e.self.playSound("lefthand1"),
                e.self.PandaTapAnimation()) : cc.v2(343, 94).fuzzyEquals(n.getLocation(), 20) ? (e.self.isPlayAnimation = !0,
                e.self.hideHint(),
                cc.find("Canvas").getComponent(cc.Animation).play("LeftFoot"),
                e.self.playSound("leftfoot"),
                e.self.PandaTapAnimation()) : cc.v2(400, 241).fuzzyEquals(n.getLocation(), 20) ? (e.self.isPlayAnimation = !0,
                e.self.hideHint(),
                cc.find("Canvas").getComponent(cc.Animation).play("PandaScroll"),
                e.self.playSound("scroll"),
                e.self.PandaTapAnimation()) : e.self.addHeart()))
            }
            ,
            c.prototype.stopSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) && cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).stop()
            }
            ,
            c.prototype.RandomAnimation = function() {
                cc.find("Canvas/CustomNode/Custom").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/CustomNode/Custom").getComponent(cc.Animation).off("finished"),
                    e.self.stopSound("01302049"),
                    e.self.stopSound("eye"),
                    e.self.isAnimationPlay = !0,
                    e.self.RandomAnimation()
                }),
                this.isAnimationPlay && (this.isAnimationPlay = !1,
                this.AnimationCounter >= this.AnimationVector.length && (this.AnimationCounter = 0),
                "Hehehehe" == this.AnimationVector[this.AnimationCounter] && e.self.playSound("applaud"),
                "Scare" == this.AnimationVector[this.AnimationCounter] && e.self.playSound("01302049"),
                "FaceRound" == this.AnimationVector[this.AnimationCounter] && (e.self.playSound("happy"),
                e.self.node.runAction(cc.sequence(cc.delayTime(1.1), cc.callFunc(function() {
                    e.self.playSound("eye")
                }, this)))),
                cc.find("Canvas/CustomNode/Custom").getComponent(cc.Animation).play(this.AnimationVector[this.AnimationCounter]),
                this.AnimationCounter++)
            }
            ,
            c.prototype.scaleAction = function() {
                var n = this.getRandomArbitrary(1, 5);
                cc.find("Canvas/Menu/menu_" + n).runAction(cc.sequence(cc.scaleTo(.3, 1.1), cc.scaleTo(.2, 1)))
            }
            ,
            c.prototype.getRandomArbitrary = function(n, c) {
                return Math.round(Math.random() * (c - n) + n)
            }
            ,
            c.prototype.HomeAction = function() {
                cc.sys.localStorage.setItem("Stage1Complete", !1),
                cc.sys.localStorage.setItem("Stage2Complete", !1),
                cc.sys.localStorage.setItem("Stage3Complete", !1),
                cc.sys.localStorage.setItem("Stage4Complete", !1),
                cc.sys.localStorage.setItem("Stage5Complete", !1),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.loadScene("LevelScreen")
                }, this)))
            }
            ,
            c.prototype.ButtonAction = function(n) {
                if (254 != n.target.opacity)
                    switch (cc.find("Canvas/Menu").children.forEach(function(n) {
                        n.opacity = 254
                    }),
                    t.default.self.requestAds(),
                    n.target.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.1, 1))),
                    this.playSound("tap"),
                    n.target.name) {
                    case "menu_1":
                        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            cc.director.loadScene("ToyView")
                        }, this)));
                        break;
                    case "menu_2":
                        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            cc.director.loadScene("MilkView")
                        }, this)));
                        break;
                    case "menu_3":
                        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            cc.director.loadScene("DiperView")
                        }, this)));
                        break;
                    case "menu_4":
                        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            cc.director.loadScene("SleepView")
                        }, this)));
                        break;
                    case "menu_5":
                        this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            cc.director.loadScene("Dressup")
                        }, this)))
                    }
            }
            ,
            c.prototype.hideHint = function() {
                cc.find("Canvas/Hand").position = cc.v3(-4755, -156, 0)
            }
            ,
            c.prototype.showHint = function() {
                switch (console.log("showHint"),
                cc.find("Canvas/Hand").getComponent(cc.Animation).play("LevelscreenHandAnimation1"),
                this.getRandomArbitrary(1, 4)) {
                case 1:
                    cc.find("Canvas/Hand").position = cc.v3(-47, -156, 0);
                    break;
                case 2:
                    cc.find("Canvas/Hand").position = cc.v3(-8, -24, 0);
                    break;
                case 3:
                    cc.find("Canvas/Hand").position = cc.v3(-67, -115, 0);
                    break;
                case 4:
                    cc.find("Canvas/Hand").position = cc.v3(-120, 122, 0)
                }
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    MainScreen: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "2e67dL6MpZBl70VidU6glvs", "MainScreen"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.bgsoundElement = null,
                c
            }
            return __extends(c, n),
            c.prototype.onLoad = function() {
                cc.debug.setDisplayStats(!1),
                this.bgsoundElement = document.createElement("AUDIO"),
                this.bgsoundElement.id = "bgsound",
                this.bgsoundElement.loop = !0,
                this.bgsoundElement.setAttribute("src", this.node.getComponents(cc.AudioSource)[0].clip.url),
                document.body.appendChild(this.bgsoundElement),
                cc.sys.localStorage.setItem("Stage1Complete", !1),
                cc.sys.localStorage.setItem("Stage2Complete", !1),
                cc.sys.localStorage.setItem("Stage3Complete", !1),
                cc.sys.localStorage.setItem("Stage4Complete", !1),
                cc.sys.localStorage.setItem("Stage5Complete", !1)
            }
            ,
            c.prototype.start = function() {
                0 == cc.audioEngine.getMusicVolume() && (cc.find("Canvas/SoundOn").active = !1,
                cc.find("Canvas/SoundOff").active = !0),
                cc.find("Canvas").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas").getComponent(cc.Animation).play("PlayBtnAnim")
                })
            }
            ,
            c.prototype.playCallback = function() {
                document.getElementById("bgsound").play()
            }
            ,
            c.prototype.playBTNClicked = function(n) {
                this.playCallback(),
                this.getComponents(cc.AudioSource)[1].play(),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.loadScene("LevelScreen")
                }, this)))
            }
            ,
            c.prototype.onSoundOffBtnClick = function(n) {
                this.playCallback(),
                this.getComponents(cc.AudioSource)[1].play(),
                cc.find("Canvas/SoundOn").active = !0,
                cc.find("Canvas/SoundOff").active = !1,
                cc.audioEngine.setMusicVolume(1),
                cc.audioEngine.setEffectsVolume(1),
                document.getElementById("bgsound").muted = !1
            }
            ,
            c.prototype.onSoundOnBtnClick = function(n) {
                this.playCallback(),
                this.getComponents(cc.AudioSource)[1].play(),
                cc.find("Canvas/SoundOn").active = !1,
                cc.find("Canvas/SoundOff").active = !0,
                cc.audioEngine.setMusicVolume(0),
                cc.audioEngine.setEffectsVolume(0),
                document.getElementById("bgsound").muted = !0
            }
            ,
            c = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    Promotion: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "287abjFVFZKJpsiRvHjSKa0", "Promotion"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.isAdRunnning = !1,
                c.isSwitchTab = !1,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.start = function() {
                e.self = this;
                var n = this;
                "promoBack" == n.node.name && this.setPromoThumb();
                var c = "game";
                "Mainscreen" == cc.director.getScene().name && (c = "mainscreen"),
                this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                    YYGGames && (console.log(n.node.name),
                    "promoBack" == n.node.name ? 255 == n.node.parent.opacity && YYGGames.navigate( "gameover", "relatedgames", YYGGames.forgames[window.relatedThumbNo].id) : cc.find("Canvas/promotion") && 255 == cc.find("Canvas/promotion").opacity && 0 == cc.find("Canvas/promotion").position.x && 0 == cc.find("Canvas/promotion").position.y ? YYGGames.navigate( "gameover", n.node.name) : YYGGames.navigate( c, n.node.name))
                }),
                cc.game.on(cc.game.EVENT_SHOW, this.gameResume, !1),
                cc.game.on(cc.game.EVENT_HIDE, this.gamePause, !1)
            }
            ,
            c.prototype.playSound = function(n) {
                cc.loader.loadRes(n, cc.AudioClip, function(n, c) {
                    cc.audioEngine.playEffect(c, !1)
                })
            }
            ,
            c.prototype.onReplayClick = function(n) {
                n.target.getComponent(cc.Button).interactable = !1,
                e.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    cc.director.loadScene("LevelScreen")
                })))
            }
            ,
            c.prototype.setPromoThumb = function() {
                "undefined" != typeof YYGGames && YYGGames.forgames.length > 0 && (window.relatedThumbNo = e.getRandomInt(0, YYGGames.forgames.length - 1),
                cc.loader.load(YYGGames.forgames[window.relatedThumbNo].thumb, function(n, c) {
                    cc.find("Canvas/promotion").opacity = 255,
                    cc.find("Canvas/promotion/promoBack/tex").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c)
                }))
            }
            ,
            c.prototype.requestAds = function() {

             e.self.isAdRunnning = !0,
                e.self.MuteSound(),
                cc.game.pause(),
                console.log("请求插屏广告");

                // 展示插屏广告
                HUHU_showInterstitialAd();
            
                // 继续游戏
                this.onSuccessCallback();
                // YYGGames.showInterstitial({
                //     afterShowAd:()=>{
                //         this.onSuccessCallback();
                //     }
                // })
                // YYGGames.adsManager.request(YYG.TYPE.INTERSTITIAL, YYG.EventHandler.create(this, this.onSuccessCallback), YYG.EventHandler.create(this, this.onFailCallback)))
            }
            ,
            c.prototype.gameResume = function() {
                console.log("Resume Game"),
                e.self.isSwitchTab = !1,
                e.self.isAdRunnning ? (cc.game.pause(),
                e.self.MuteSound()) : (cc.game.resume(),
                e.self.StartSound())
            }
            ,
            c.prototype.gamePause = function() {
                console.log("Pause Game"),
                cc.game.pause(),
                e.self.isSwitchTab = !0,
                e.self.MuteSound()
            }
            ,
            c.prototype.MuteSound = function() {
                document.getElementById("bgsound") && (document.getElementById("bgsound").muted = !0),
                cc.find("Canvas/SoundNode") && cc.find("Canvas/SoundNode").children.forEach(function(n) {
                    n.getComponent(cc.AudioSource) && (n.getComponent(cc.AudioSource).mute = !0)
                })
            }
            ,
            c.prototype.StartSound = function() {
                e.self.isSwitchTab || (document.getElementById("bgsound") && (document.getElementById("bgsound").muted = !1),
                cc.find("Canvas/SoundNode") && cc.find("Canvas/SoundNode").children.forEach(function(n) {
                    n.getComponent(cc.AudioSource) && n.getComponent(cc.AudioSource).mute && (n.getComponent(cc.AudioSource).mute = !1)
                }))
            }
            ,
            c.prototype.onSuccessCallback = function() {
                e.self.isAdRunnning = !1,
                0 == e.self.isSwitchTab && e.self.gameResume(),
                console.log("onSuccessCallback")
            }
            ,
            c.prototype.onFailCallback = function() {
                e.self.isAdRunnning = !1,
                0 == e.self.isSwitchTab && e.self.gameResume(),
                console.log("onFailCallback")
            }
            ,
            c.getRandomInt = function(n, c) {
                return n = Math.ceil(n),
                c = Math.floor(c) + 1,
                Math.floor(Math.random() * (c - n)) + n
            }
            ,
            c.getRandomArbitrary = function(n, c) {
                return Math.random() * (c - n) + n
            }
            ,
            c.setFrame = function(n, c) {
                n && c && (n.getComponent(cc.Sprite).spriteFrame = c.getComponent(cc.Sprite).spriteFrame)
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component));
        e.default = t,
        cc._RF.pop()
    }
    , {}],
    SleepView: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "8c85fzT1hZA+pLnSagqWHbd", "SleepView"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        n("./Promotion"))
          , i = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.isAnimationPlay = !0,
                c.AnimationVector = [],
                c.AnimationCounter = 0,
                c.StepIndex = 0,
                c.Hand = null,
                c.CanMove = !1,
                c.SheetCounter = 0,
                c.MusicCounter = 0,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {
                cc.director.preloadScene("LevelScreen", null, function(n, c) {
                    console.log("LevelScreen Preloaded")
                }),
                cc.director.preloadScene("Dressup", null, function(n, c) {
                    console.log("Dressup Preloaded")
                }),
                cc.director.preloadScene("MilkView", null, function(n, c) {
                    console.log("MilkView Preloaded")
                }),
                cc.director.preloadScene("SleepView", null, function(n, c) {
                    console.log("SleepView Preloaded")
                }),
                cc.debug.setDisplayStats(!1)
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) ? cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play() : console.log("Sound File Missing")
            }
            ,
            c.prototype.stopSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) && cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).stop()
            }
            ,
            c.prototype.start = function() {
                e.self = this,
                this.AnimationVector.push("PandaIdle"),
                this.AnimationVector.push("PandaIdle"),
                this.Hand = cc.find("Canvas/Hand"),
                this.Hand.active = !0,
                this.Hand.runAction(cc.repeatForever(cc.sequence(cc.show(), cc.callFunc(function() {
                    e.self.Hand.getComponent(cc.Animation).play("HandAnimationConti")
                }, this), cc.place(cc.v2(23, -74)), cc.delayTime(.45), cc.moveTo(.8, cc.v2(46, -148)), cc.hide(), cc.delayTime(2)))),
                cc.find("Canvas/SheepPanel/homeguide_1").zIndex = 5,
                this.RandomAnimation(),
                e.self.node.on(cc.Node.EventType.TOUCH_START, e.self.onTouchStart),
                e.self.node.on(cc.Node.EventType.TOUCH_MOVE, e.self.onTouchMove),
                e.self.node.on(cc.Node.EventType.TOUCH_END, e.self.onTouchEnd),
                e.self.node.on(cc.Node.EventType.TOUCH_CANCEL, e.self.onTouchEnd)
            }
            ,
            c.prototype.onTouchStart = function(n, c) {
                var o = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation())
                  , a = n.getLocation();
                0 == e.self.StepIndex ? cc.find("Canvas/bed_1/Panda/Frame").getBoundingBoxToWorld().contains(a) && (e.self.StepIndex = 1,
                e.self.Hand.active = !1,
                cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).off("finished"),
                cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).play("Stretch"),
                e.self.playSound("stretch"),
                cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).off("finished"),
                    e.self.stopSound("stretch"),
                    e.self.AnimationCounter = 0,
                    e.self.isAnimationPlay = !0,
                    e.self.RandomAnimation(),
                    cc.find("Canvas/quilt_1").runAction(cc.moveTo(.5, cc.v2(-285, -87))),
                    e.self.Hand.stopAllActions(),
                    e.self.Hand.active = !0,
                    e.self.Hand.runAction(cc.repeatForever(cc.sequence(cc.hide(), cc.delayTime(.5), cc.show(), cc.place(cc.v2(-230, -135)), cc.moveTo(1, cc.v2(10, -251)), cc.hide())))
                })) : 1 == e.self.StepIndex ? cc.find("Canvas/quilt_1").getBoundingBoxToWorld().contains(a) && (e.self.Hand.active = !1,
                cc.find("Canvas/quilt_1").position = o,
                e.self.CanMove = !0,
                e.self.playSound("tap")) : 2 == e.self.StepIndex ? cc.find("Canvas/guide1").getBoundingBoxToWorld().contains(a) && (e.self.CanMove = !0,
                e.self.playSound("tap")) : 3 == e.self.StepIndex ? cc.find("Canvas/MusicIcon1").getBoundingBoxToWorld().contains(a) ? (cc.find("Canvas/MusicIcon1").active = !1,
                cc.find("Canvas/MusicIcon2").active = !1,
                e.self.StepIndex = 4,
                e.self.playSound("tap"),
                cc.find("Canvas/MusicBox").active = !0,
                cc.find("Canvas/SheepPanel").active = !0,
                e.self.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
                    var n = cc.instantiate(cc.find("Canvas/SheepPanel/Sheep"));
                    cc.find("Canvas/SheepPanel").addChild(n),
                    n.active = !0,
                    n.runAction(cc.sequence(cc.delayTime(6), cc.removeSelf()))
                }, this), cc.delayTime(1), cc.callFunc(function() {
                    e.self.MusicCounter++;
                    var n = cc.instantiate(cc.find("Canvas/SheepPanel/note_" + e.self.MusicCounter));
                    cc.find("Canvas/SheepPanel").addChild(n),
                    n.active = !0,
                    n.runAction(cc.sequence(cc.delayTime(8), cc.removeSelf())),
                    e.self.MusicCounter >= 4 && (e.self.MusicCounter = 0)
                }, this), cc.delayTime(1)))),
                e.self.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    cc.find("Canvas/SheepPanel/homeguide_1").active = !0
                }, this)))) : cc.find("Canvas/MusicIcon2").getBoundingBoxToWorld().contains(a) && (cc.find("Canvas/MusicIcon1").active = !1,
                cc.find("Canvas/MusicIcon2").active = !1,
                e.self.StepIndex = 4,
                e.self.playSound("tap"),
                cc.find("Canvas/book").active = !0,
                cc.find("Canvas/book").runAction(cc.repeatForever(cc.sequence(cc.delayTime(4), cc.callFunc(function() {
                    Math.random() > .5 ? cc.find("Canvas/book").getComponent(cc.Animation).play("PageTurn2") : cc.find("Canvas/book").getComponent(cc.Animation).play("PageTurn3")
                }, this)))),
                cc.find("Canvas/SheepPanel").active = !0,
                e.self.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
                    var n = cc.instantiate(cc.find("Canvas/SheepPanel/Sheep"));
                    cc.find("Canvas/SheepPanel").addChild(n),
                    n.active = !0,
                    n.runAction(cc.sequence(cc.delayTime(6), cc.removeSelf()))
                }, this), cc.delayTime(2)))),
                e.self.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    cc.find("Canvas/SheepPanel/homeguide_1").active = !0
                }, this)))) : 4 == e.self.StepIndex ? cc.find("Canvas/SheepPanel").children.forEach(function(c) {
                    if ("Sheep" == c.name && c.active && c.getBoundingBoxToWorld().contains(n.getLocation())) {
                        c.getComponent(cc.Animation).stop(),
                        c.runAction(cc.sequence(cc.scaleTo(.3, 0), cc.removeSelf()));
                        var o = cc.instantiate(cc.find("allwin"));
                        cc.find("Canvas/SheepPanel").addChild(o),
                        o.position = c.position,
                        o.active = !0,
                        e.self.playSound("particle"),
                        e.self.SheetCounter++,
                        cc.find("Canvas/SheepPanel/homeguide_1").active = !1,
                        e.self.SheetCounter >= 10 && (cc.find("Canvas/MusicBox").active = !1,
                        cc.find("Canvas/SheepPanel").active = !1,
                        cc.find("Canvas/book").active = !1,
                        e.self.StepIndex = 5,
                        cc.find("Canvas/switch").active = !0,
                        cc.find("Canvas/switch").runAction(cc.moveTo(.3, cc.v2(-270, 276))),
                        cc.find("Canvas/switch").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.3, 3), cc.rotateBy(.3, -3), cc.rotateBy(.3, -3), cc.rotateBy(.3, 3)))),
                        cc.find("Canvas/bed_1").stopAllActions(),
                        cc.find("Canvas/bed_1").angle = 0)
                    }
                }) : 5 == e.self.StepIndex ? cc.find("Canvas/switch").getBoundingBoxToWorld().contains(a) && (e.self.StepIndex = 6,
                cc.find("Canvas/switch").stopAllActions(),
                cc.find("Canvas/switch").angle = 0,
                cc.find("Canvas/switch").runAction(cc.jumpTo(.4, cc.v2(-270, 550), 100, 1)),
                cc.find("Canvas/curtain_1").getComponent(cc.Animation).play("CurtainClose"),
                e.self.playSound("sway1"),
                e.self.playSound("sway2"),
                cc.find("Canvas/curtain_1").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/curtain_1").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas/clock_1").runAction(cc.moveTo(.5, cc.v2(-256, 274))),
                    cc.find("Canvas/clock_1").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.3, 3), cc.rotateBy(.3, -3), cc.rotateBy(.3, -3), cc.rotateBy(.3, 3))))
                })) : 6 == e.self.StepIndex && cc.find("Canvas/clock_1").getBoundingBoxToWorld().contains(a) && (e.self.StepIndex = 7,
                cc.find("Canvas/clock_1").getComponent(cc.Animation).play("Clock"),
                e.self.playSound("clock"),
                cc.find("Canvas").getComponent(cc.Animation).play("CurtainOpen"),
                e.self.playSound("sway1"),
                e.self.playSound("sway2"),
                cc.find("Canvas/clock_1").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/clock_1").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas/clock_1").runAction(cc.moveTo(.5, cc.v2(-256, 530))),
                    cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).play("Stretch"),
                    cc.find("Canvas/bed_1/quiltopen_1").runAction(cc.moveBy(.5, cc.v2(0, -150))),
                    e.self.playSound("hiseyes"),
                    cc.find("Canvas/goldBurst").active = !0,
                    e.self.showBack()
                }))
            }
            ,
            c.prototype.onTouchMove = function(n, c) {
                var o = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation());
                n.getLocation();
                1 == e.self.StepIndex && e.self.CanMove && (cc.find("Canvas/quilt_1").position = o,
                cc.v2(0, -142).fuzzyEquals(o, 60) && (e.self.stopSound("cool"),
                e.self.StepIndex = 2,
                e.self.CanMove = !1,
                cc.find("Canvas/quilt_1").position = cc.v2(565, 5656),
                cc.find("Canvas/bed_1/quiltopen_1").active = !0,
                cc.find("Canvas/guide1").active = !0,
                e.self.Hand.stopAllActions(),
                e.self.Hand.active = !0,
                cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).stop("cool"),
                e.self.isAnimationPlay = !0,
                e.self.Hand.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0), cc.show(), cc.place(cc.v2(-87, -36)), cc.moveTo(1, cc.v2(91, -36)), cc.moveTo(1, cc.v2(-87, -36)), cc.hide())))))
            }
            ,
            c.prototype.onTouchEnd = function(n, c) {
                0 != e.self.CanMove && (e.self.CanMove = !1,
                1 == e.self.StepIndex ? (cc.find("Canvas/quilt_1").position = cc.v2(-285, -87),
                e.self.Hand.stopAllActions(),
                e.self.Hand.active = !0,
                e.self.Hand.runAction(cc.repeatForever(cc.sequence(cc.show(), cc.place(cc.v2(-230, -135)), cc.moveTo(1, cc.v2(10, -251)), cc.hide())))) : 2 == e.self.StepIndex && (e.self.StepIndex = 3,
                cc.find("Canvas/guide1").active = !1,
                e.self.Hand.active = !1,
                cc.find("Canvas/bed_1").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(1, 5), cc.rotateBy(1, -5), cc.rotateBy(1, -5), cc.rotateBy(1, 5)))),
                cc.find("Canvas/MusicIcon1").active = !0,
                cc.find("Canvas/MusicIcon2").active = !0))
            }
            ,
            c.prototype.showBack = function() {
                cc.find("Canvas/UI/back").stopAllActions(),
                cc.find("Canvas/UI/back").scale = .7,
                cc.find("Canvas/UI/back").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, .7))))
            }
            ,
            c.prototype.backAction = function() {
                cc.sys.localStorage.setItem("Stage4Complete", !0),
                this.playSound("tap"),
                t.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.loadScene("LevelScreen")
                }, this)))
            }
            ,
            c.prototype.RandomAnimation = function() {
                cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).off("finished"),
                    e.self.isAnimationPlay = !0,
                    e.self.RandomAnimation()
                }),
                this.isAnimationPlay && (this.isAnimationPlay = !1,
                this.AnimationCounter >= this.AnimationVector.length && (this.AnimationCounter = 0),
                7 == e.self.StepIndex ? cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).play("getUpPanda") : 6 == e.self.StepIndex ? (e.self.playSound("snore"),
                cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).play("Snore")) : e.self.StepIndex >= 2 ? cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).play("StandBy") : 1 == e.self.StepIndex ? (e.self.playSound("cool"),
                cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).play("Tremble")) : cc.find("Canvas/bed_1/Panda").getComponent(cc.Animation).play(this.AnimationVector[this.AnimationCounter]),
                this.AnimationCounter++,
                console.log(this.AnimationCounter))
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component);
        e.default = i,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    Splash: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "c6bf7WCiyhLBp1EjaRYWXtR", "Splash"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = cc._decorator
          , a = o.ccclass
          , t = (o.property,
        function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.bgsoundElement = null,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {
                cc.debug.setDisplayStats(!1),
                cc.director.preloadScene("Mainscreen"),
                e.self = this,
                this.bgsoundElement = document.createElement("AUDIO"),
                this.bgsoundElement.id = "bgsound",
                this.bgsoundElement.loop = !0,
                this.bgsoundElement.setAttribute("src", cc.find("Canvas/music").getComponent(cc.AudioSource).clip.url)
            }
            ,
            c.prototype.start = function() {
                var n = this;
                cc.sys.isMobile && (cc.view.on("canvas-resize", function() {
                    n.updateLogo(cc.view.getFrameSize())
                }),
                this.updateLogo(cc.view.getFrameSize()))
            }
            ,
            c.prototype.updateLogo = function(n) {
                n.width > n.height ? (console.log("landscape"),
                cc.find("Canvas/splash").scale = 1,
                cc.find("Canvas/Play").scale = 1,
                cc.find("Canvas/Play").setPosition(0, -70),
                cc.find("Canvas/Play").getComponent(cc.Animation).play("PlaySplashScene")) : (console.log("portrait"),
                cc.find("Canvas/splash").scale = 1.7,
                cc.find("Canvas/Play").scale = 1.7,
                cc.find("Canvas/Play").setPosition(0, -110),
                cc.find("Canvas/Play").getComponent(cc.Animation).play("PlaySplashScene2"))
            }
            ,
            c.prototype.PlayAction = function(n) {
                document.body.appendChild(this.bgsoundElement);
                var c = n.target;
                c && (c.getComponent(cc.Button).interactable = !1),
                document.getElementById("bgsound") && document.getElementById("bgsound").play(),
                cc.director.loadScene("Mainscreen")
            }
            ,
            c.prototype.OpenUrl = function() {
                // cc.sys.openURL("https://www.yiv.com/?utm_source=unknown&utm_medium=Loading-logo&utm_campaign=game-" + document.title.replace(/ /g, "-"))
            }
            ,
            c.prototype.PlaySound = function(n) {
                cc.find("Canvas/SoundNode/" + n) && cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play()
            }
            ,
            c.self = null,
            c = e = __decorate([a], c)
        }(cc.Component));
        e.default = t,
        cc._RF.pop()
    }
    , {}],
    ToyView: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "3571a3Ex9xI2KNtVWQLZlVb", "ToyView"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o, a = cc._decorator, t = a.ccclass;
        a.property;
        (function(n) {
            n[n.NONE = 100] = "NONE",
            n[n.CHOCO_BOX = 101] = "CHOCO_BOX",
            n[n.TOY_BOX = 102] = "TOY_BOX",
            n[n.DRUM = 103] = "DRUM",
            n[n.GUN = 104] = "GUN",
            n[n.BALL = 105] = "BALL"
        }
        )(o || (o = {}));
        var i = n("./Promotion")
          , s = function(n) {
            function c() {
                var c = null !== n && n.apply(this, arguments) || this;
                return c.isAnimationPlay = !1,
                c.AnimationVector = [],
                c.AnimationCounter = 0,
                c.CanMove = !1,
                c.selectedTool = o.NONE,
                c.isDone = [!1, !1, !1, !1],
                c.HintSequence = 0,
                c
            }
            var e;
            return __extends(c, n),
            e = c,
            c.prototype.onLoad = function() {
                this.HideHint(),
                cc.debug.setDisplayStats(!1),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("FaceRound"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Scare"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Hehehehe"),
                this.AnimationVector.push("Idle1"),
                this.AnimationVector.push("Idle1"),
                cc.find("Canvas/bamboo_shoots").zIndex = 5,
                cc.find("Canvas/bamboo_shoots").active = !0,
                cc.find("Canvas/bamboo_shoots").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(.2, 5), cc.rotateBy(.2, -5), cc.rotateBy(.2, 5), cc.rotateBy(.2, -5)))),
                cc.find("Canvas/bamboo_shoots").active = !1,
                cc.director.getPhysicsManager().enabled = !0,
                cc.director.getCollisionManager().enabled = !0,
                cc.director.getPhysicsManager().gravity = cc.v2(0, -1e3),
                this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    this.showHint()
                }, this)))
            }
            ,
            c.prototype.start = function() {
                e.self = this,
                e.self.node.on(cc.Node.EventType.TOUCH_START, e.self.onTouchStart),
                e.self.node.on(cc.Node.EventType.TOUCH_MOVE, e.self.onTouchMove),
                e.self.node.on(cc.Node.EventType.TOUCH_END, e.self.onTouchEnd),
                e.self.node.on(cc.Node.EventType.TOUCH_CANCEL, e.self.onTouchEnd),
                cc.find("Canvas/Tool").getComponent(cc.Animation).play("ToolEntry"),
                this.randomToolEffect(),
                this.RandomAnimation(),
                this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.05), cc.callFunc(function() {
                    e.self.addBubbleGun()
                }, this))))
            }
            ,
            c.prototype.onTouchStart = function(n, c) {
                cc.find("Canvas/Items/Bubble").children.forEach(function(c) {
                    c.active && c.getBoundingBoxToWorld().contains(n.getLocation()) && c.removeFromParent()
                }),
                cc.find("Canvas/Tool/Dori3/bamboo_shootsx").getBoundingBoxToWorld().contains(n.getLocation()) && cc.find("Canvas/Tool/Dori3/bamboo_shootsx").active && e.self.selectedTool == o.NONE ? (cc.find("Canvas/Tool/Dori3").active = !1,
                cc.find("Canvas/bamboo_shoots").active = !0,
                cc.find("Canvas/bamboo_shoots").angle = 0,
                cc.find("Canvas/bamboo_shoots").position = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()),
                e.self.CanMove = !0,
                e.self.selectedTool = o.GUN,
                e.self.isDone[0] = !0,
                e.self.HideHint()) : cc.find("Canvas/Tool/Dori2/rattle_drumx").getBoundingBoxToWorld().contains(n.getLocation()) && cc.find("Canvas/Tool/Dori2/rattle_drumx").active && e.self.selectedTool == o.NONE ? (e.self.selectedTool = o.DRUM,
                cc.find("Canvas/Tool/Dori2").active = !1,
                e.self.CanMove = !0,
                e.self.selectedTool = o.DRUM,
                cc.find("Canvas/rattle_drum_1").active = !0,
                cc.find("Canvas/rattle_drum_1").angle = 0,
                cc.find("Canvas/rattle_drum_1").position = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()),
                e.self.isDone[1] = !0,
                e.self.HideHint()) : cc.find("Canvas/Tool/Dori1/ballx").getBoundingBoxToWorld().contains(n.getLocation()) && cc.find("Canvas/Tool/Dori1/ballx").active && e.self.selectedTool == o.NONE && (cc.find("Canvas/Tool/Dori1").active = !1,
                e.self.selectedTool = o.BALL,
                e.self.CanMove = !0,
                cc.find("Canvas/ball2").active = !0,
                cc.find("Canvas/ball2").position = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()),
                e.self.isDone[2] = !0,
                e.self.HideHint())
            }
            ,
            c.prototype.onTouchMove = function(n, c) {
                e.self.selectedTool == o.GUN ? cc.find("Canvas/bamboo_shoots").position = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()) : e.self.selectedTool == o.DRUM ? cc.find("Canvas/rattle_drum_1").position = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()) : e.self.selectedTool == o.BALL && (cc.find("Canvas/ball2").position = cc.find("Canvas").convertToNodeSpaceAR(n.getLocation()))
            }
            ,
            c.prototype.onTouchEnd = function(n, c) {
                e.self.CanMove && e.self.selectedTool == o.DRUM ? (e.self.CanMove = !1,
                e.self.HideHint(),
                e.self.selectedTool = o.DRUM,
                e.self.stopIdleSound(),
                cc.find("Canvas/Tool/Dori2").active = !1,
                cc.find("Canvas/rattle_drum_1").runAction(cc.sequence(cc.spawn(cc.jumpTo(.3, cc.v2(35, -84), 100, 1), cc.rotateTo(.3, 32)), cc.callFunc(function() {
                    cc.find("Canvas/rattle_drum_1").active = !1,
                    e.self.AnimationCounter = 0,
                    cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).off("finished"),
                    e.self.isAnimationPlay = !1,
                    cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).play("Drum"),
                    e.self.playSound("rattledrum"),
                    cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).on("finished", function(n) {
                        cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).off("finished"),
                        cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).play("Kiss"),
                        cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).on("finished", function(n) {
                            e.self.isAnimationPlay = !0,
                            e.self.selectedTool = o.NONE,
                            e.self.RandomAnimation()
                        }),
                        cc.find("Canvas/Character/CustForHide/Custom").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            cc.find("Canvas/Character/CustForHide/Custom/DrumOutSide").active = !1,
                            cc.find("Canvas/Tool/Dori2").active = !0,
                            e.self.showBack()
                        }, this)))
                    })
                }, this)))) : e.self.CanMove && e.self.selectedTool == o.GUN ? (e.self.CanMove = !1,
                e.self.HideHint(),
                cc.find("Canvas/Tool/Dori3").active = !1,
                e.self.stopIdleSound(),
                e.self.selectedTool = o.GUN,
                cc.find("Canvas/bamboo_shoots").runAction(cc.sequence(cc.spawn(cc.jumpTo(.3, cc.v2(-29, -95), 100, 1), cc.scaleTo(.3, 1)), cc.callFunc(function() {
                    cc.find("Canvas/bamboo_shoots").active = !1,
                    e.self.AnimationCounter = 0,
                    e.self.isAnimationPlay = !1,
                    cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).off("finished"),
                    cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).play("Gun"),
                    cc.find("Canvas/Character").runAction(cc.repeatForever(cc.sequence(cc.callFunc(e.self.addBubble, this), cc.delayTime(.09)))),
                    cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).on("finished", function(n) {
                        cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).off("finished"),
                        e.self.isAnimationPlay = !0,
                        e.self.selectedTool = o.NONE,
                        e.self.RandomAnimation(),
                        cc.find("Canvas/Tool/Dori3").active = !0,
                        cc.find("Canvas/Character").stopAllActions(),
                        e.self.showBack()
                    })
                }, this)))) : e.self.CanMove && e.self.selectedTool == o.BALL ? (cc.find("Canvas/Tool/Dori1").active = !1,
                e.self.stopIdleSound(),
                e.self.HideHint(),
                e.self.selectedTool = o.BALL,
                cc.find("Canvas/ball2").runAction(cc.sequence(cc.spawn(cc.jumpTo(.3, cc.v2(106, -64), 100, 1), cc.scaleTo(.3, 1)), cc.callFunc(function() {
                    cc.find("Canvas/ball2").active = !1,
                    e.self.AnimationCounter = 4,
                    e.self.isAnimationPlay = !1,
                    e.self.playSound("ball"),
                    e.self.node.runAction(cc.sequence(cc.delayTime(4), cc.callFunc(function() {
                        e.self.playSound("cracking")
                    }, this))),
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("PlayBall"),
                    cc.find("Canvas/Character").getComponent(cc.Animation).on("finished", function(n) {
                        cc.find("Canvas/Character").getComponent(cc.Animation).off("finished"),
                        e.self.isAnimationPlay = !0,
                        e.self.selectedTool = o.NONE,
                        e.self.RandomAnimation(),
                        cc.find("Canvas/Tool/Dori1").active = !0,
                        e.self.showBack()
                    })
                }, this)))) : cc.find("Canvas/Tool/Dori4/boxx").getBoundingBoxToWorld().contains(n.getLocation()) && cc.find("Canvas/Tool/Dori4/boxx").active && e.self.selectedTool == o.NONE && (e.self.getRandomArbitrary(0, 1) > .5 ? (e.self.isDone[3] = !0,
                e.self.HideHint(),
                e.self.stopIdleSound(),
                cc.find("Canvas/Tool/Dori4").active = !1,
                e.self.selectedTool = o.TOY_BOX,
                e.self.playSound("jump"),
                e.self.isAnimationPlay = !1,
                cc.find("Canvas/Items/Box").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.find("Canvas/Character").getComponent(cc.Animation).play("BoxOpen"),
                    e.self.playSound("open_box"),
                    e.self.playSound("get_terror")
                }, this))),
                cc.find("Canvas/Items/Box").getComponent(cc.Animation).play("BoxOpenToy"),
                cc.find("Canvas/Items/Box").getComponent(cc.Animation).on("finished", function(n) {
                    e.self.selectedTool = o.NONE,
                    cc.find("Canvas/Tool/Dori4").active = !0,
                    e.self.isAnimationPlay = !0,
                    e.self.RandomAnimation(),
                    e.self.showBack()
                })) : (e.self.isDone[3] = !0,
                e.self.HideHint(),
                e.self.stopIdleSound(),
                e.self.playSound("jump"),
                cc.find("Canvas/Tool/Dori4").active = !1,
                e.self.isAnimationPlay = !1,
                e.self.selectedTool = o.CHOCO_BOX,
                cc.find("Canvas/Items/Box").getComponent(cc.Animation).play("Chocolate"),
                e.self.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    e.self.playSound("open_box"),
                    e.self.playSound("01301001")
                }, this))),
                cc.find("Canvas/Items/Box").getComponent(cc.Animation).on("finished", function(n) {
                    e.self.selectedTool = o.NONE,
                    cc.find("Canvas/Tool/Dori4").active = !0,
                    e.self.isAnimationPlay = !0,
                    e.self.RandomAnimation(),
                    e.self.showBack()
                }),
                cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).play("Clapping")))
            }
            ,
            c.prototype.addBubble = function() {
                var n = parseInt(e.self.getRandomArbitrary(1, 7).toString())
                  , c = cc.instantiate(cc.find("Canvas/Items/Bubble/bubble" + n));
                cc.find("Canvas/Items/Bubble").addChild(c),
                c.zIndex = 1,
                c.active = !0,
                0 == cc.find("Canvas/SoundNode/01302033").getComponent(cc.AudioSource).isPlaying && e.self.playSound("01302033"),
                c.scale = e.self.getRandomArbitrary(.5, .7);
                var o = cc.v2(e.self.getRandomArbitrary(-800, 800), e.self.getRandomArbitrary(-400, 400));
                c.runAction(cc.sequence(cc.spawn(cc.moveBy(3, o), cc.scaleTo(2, 1)), cc.removeSelf()))
            }
            ,
            c.prototype.addBubbleGun = function() {
                if (0 != cc.find("Canvas/bamboo_shoots").active) {
                    var n = parseInt(e.self.getRandomArbitrary(1, 7).toString())
                      , c = cc.instantiate(cc.find("Canvas/Items/Bubble/bubble" + n));
                    cc.find("Canvas").addChild(c),
                    c.position = cc.v2(cc.find("Canvas/bamboo_shoots").position.x - 60, cc.find("Canvas/bamboo_shoots").position.y + 10),
                    c.zIndex = 1,
                    c.active = !0,
                    0 == cc.find("Canvas/SoundNode/01302033").getComponent(cc.AudioSource).isPlaying && e.self.playSound("01302033"),
                    c.scale = .4;
                    var o = cc.v2(e.self.getRandomArbitrary(-800, 800), e.self.getRandomArbitrary(-400, 400));
                    c.runAction(cc.sequence(cc.spawn(cc.moveBy(.2, cc.v2(-50, 0)), cc.scaleTo(.2, 1)), cc.moveBy(3, o), cc.removeSelf()))
                }
            }
            ,
            c.prototype.showBack = function() {
                this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    e.self.showHint()
                }, this))),
                this.isDone[0] && this.isDone[1] && this.isDone[2] && this.isDone[3] && 0 == cc.find("Canvas/UI/back").scale && (cc.find("Canvas/UI/back").stopAllActions(),
                cc.find("Canvas/UI/back").scale = .7,
                cc.find("Canvas/UI/back").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, .8), cc.scaleTo(.3, .7)))))
            }
            ,
            c.prototype.backAction = function() {
                this.playSound("tap"),
                cc.sys.localStorage.setItem("Stage1Complete", !0),
                i.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
                    cc.director.loadScene("LevelScreen")
                }, this)))
            }
            ,
            c.prototype.playSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) ? cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).play() : console.log("Sound File Missing")
            }
            ,
            c.prototype.stopSound = function(n) {
                cc.find("Canvas/SoundNode/" + n) && cc.find("Canvas/SoundNode/" + n).getComponent(cc.AudioSource).stop()
            }
            ,
            c.prototype.stopIdleSound = function() {
                e.self.stopSound("01302049"),
                e.self.stopSound("eye"),
                e.self.stopSound("applaud"),
                e.self.stopSound("happy")
            }
            ,
            c.prototype.HideHint = function() {
                cc.find("Canvas").stopAllActions(),
                cc.find("Canvas/Hand").active = !1
            }
            ,
            c.prototype.showHint = function() {
                0 == e.self.HintSequence ? (e.self.HintSequence++,
                cc.find("Canvas/Hand").active = !0,
                cc.find("Canvas/Hand").position = cc.v2(-200, 9),
                cc.find("Canvas").runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    cc.find("Canvas/Hand").active = !1
                }, this), cc.delayTime(3), cc.callFunc(function() {
                    e.self.showHint()
                }, this)))) : 1 == e.self.HintSequence ? (e.self.HintSequence++,
                cc.find("Canvas/Hand").active = !0,
                cc.find("Canvas/Hand").position = cc.v2(-347, -39),
                cc.find("Canvas").runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    cc.find("Canvas/Hand").active = !1
                }, this), cc.delayTime(3), cc.callFunc(function() {
                    e.self.showHint()
                }, this)))) : 2 == e.self.HintSequence ? (e.self.HintSequence++,
                cc.find("Canvas/Hand").active = !0,
                cc.find("Canvas/Hand").position = cc.v2(-285, 60),
                cc.find("Canvas").runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    cc.find("Canvas/Hand").active = !1
                }, this), cc.delayTime(3), cc.callFunc(function() {
                    e.self.showHint()
                }, this)))) : 3 == e.self.HintSequence && (e.self.HintSequence = 0,
                cc.find("Canvas/Hand").active = !0,
                cc.find("Canvas/Hand").position = cc.v2(-241, -115),
                cc.find("Canvas").runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    cc.find("Canvas/Hand").active = !1
                }, this), cc.delayTime(3), cc.callFunc(function() {
                    e.self.showHint()
                }, this))))
            }
            ,
            c.prototype.RandomAnimation = function() {
                cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).on("finished", function(n) {
                    cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).off("finished"),
                    e.self.stopSound("01302049"),
                    e.self.stopSound("eye"),
                    e.self.isAnimationPlay = !0,
                    e.self.RandomAnimation()
                }),
                this.isAnimationPlay && this.selectedTool == o.CHOCO_BOX ? (this.AnimationCounter = 0,
                cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).play("Clapping")) : this.isAnimationPlay && this.selectedTool == o.NONE && (this.isAnimationPlay = !1,
                this.AnimationCounter >= this.AnimationVector.length && (this.AnimationCounter = 0),
                "Hehehehe" == this.AnimationVector[this.AnimationCounter] && e.self.playSound("applaud"),
                "Scare" == this.AnimationVector[this.AnimationCounter] && e.self.playSound("01302049"),
                "FaceRound" == this.AnimationVector[this.AnimationCounter] && (e.self.playSound("happy"),
                e.self.node.runAction(cc.sequence(cc.delayTime(1.1), cc.callFunc(function() {
                    e.self.playSound("eye")
                }, this)))),
                cc.find("Canvas/Character/CustForHide/Custom").getComponent(cc.Animation).play(this.AnimationVector[this.AnimationCounter]),
                this.AnimationCounter++,
                console.log(this.AnimationCounter))
            }
            ,
            c.prototype.randomToolEffect = function() {
                var n = this.getRandomArbitrary(1, 4).toString();
                cc.find("Canvas/Tool/Dori" + parseInt(n)).runAction(cc.sequence(cc.jumpBy(1, cc.Vec2.ZERO, 30, 1), cc.delayTime(2), cc.callFunc(function() {
                    e.self.randomToolEffect()
                }, this)))
            }
            ,
            c.prototype.getRandomArbitrary = function(n, c) {
                return Math.round(Math.random() * (c - n) + n)
            }
            ,
            c.prototype.update = function(n) {}
            ,
            c.self = null,
            c = e = __decorate([t], c)
        }(cc.Component);
        e.default = s,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    use_reversed_rotateBy: [function(n, c, e) {
        "use strict";
        cc._RF.push(c, "77bb1W9i3FICLEowDet8Np9", "use_reversed_rotateBy"),
        cc.RotateBy._reverse = !0,
        cc._RF.pop()
    }
    , {}]
}, {}, ["CommonSound", "DiperView1", "DiperView2", "DiperView3", "Dressup", "EatingView1", "LevelScreen", "MainScreen", "Promotion", "SleepView", "Splash", "ToyView", "use_reversed_rotateBy"]);
