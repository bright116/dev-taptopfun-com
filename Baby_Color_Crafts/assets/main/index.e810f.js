window.__require = function e(c, n, o) {
    function t(i, r) {
        if (!n[i]) {
            if (!c[i]) {
                var s = i.split("/");
                if (s = s[s.length - 1],
                    !c[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l)
                        return l(s, !0);
                    if (a)
                        return a(s, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
                i = s
            }
            var d = n[i] = {
                exports: {}
            };
            c[i][0].call(d.exports, function (e) {
                return t(c[i][1][e] || e)
            }, d, d.exports, e, c, n, o)
        }
        return n[i].exports
    }
    for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++)
        t(o[i]);
    return t
}({
    Bird_1: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "efdd273zVpKrraRZKtlhd8P", "Bird_1");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.SelectedStep = -1,
                            c.SelectedIndex = -1,
                            c.PickPOS = null,
                            c.Arrow = null,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            cc.director.preloadScene("Bird_3"),
                                this.Arrow = cc.find("Canvas/Feather2/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, 20)), cc.moveBy(.2, cc.v2(0, -20))))),
                                this.Arrow.zIndex = 2,
                                this.Arrow.active = !1,
                                this.Arrow = cc.find("Canvas/Feather/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.zIndex = 2,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, 20)), cc.moveBy(.2, cc.v2(0, -20))))),
                                this.Arrow.active = !1
                        }
                        ,
                        c.prototype.start = function () {
                            n.self = this,
                                cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, n.self.tapStart),
                                cc.find("Canvas").on(cc.Node.EventType.TOUCH_MOVE, n.self.tapMove),
                                cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, n.self.tapEnd),
                                cc.find("Canvas").on(cc.Node.EventType.TOUCH_CANCEL, n.self.tapEnd),
                                this.PlaySound("Bird_ the owl has a broken wings lets fix it"),
                                n.self.scheduleOnce(n.self.enterPopup, 4)
                        }
                        ,
                        c.prototype.enterPopup = function () {
                            cc.find("Canvas/board").runAction(cc.sequence(cc.scaleTo(.5, 1), cc.callFunc(function () {
                                cc.find("Canvas/brush").runAction(cc.moveTo(.2, cc.v2(298, 101))),
                                    cc.find("Canvas/brush").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1))))
                            })))
                        }
                        ,
                        c.prototype.BagEnter = function () {
                            cc.find("Canvas/bag").getComponent(cc.Animation).play();
                            for (var e = function (e) {
                                cc.find("Canvas/Feather/" + e).setPosition(cc.v2(cc.find("Canvas/Feather/" + e).getPosition().x, cc.find("Canvas/Feather/" + e).getPosition().y + 100)),
                                    cc.find("Canvas/Feather/" + e).active = !0,
                                    cc.find("Canvas/Feather/" + e).runAction(cc.sequence(cc.delayTime(.15 * e + 1.3), cc.callFunc(function () {
                                        1 == e && n.self.PlaySound("S27")
                                    }), cc.fadeIn(.1), cc.moveBy(.15, cc.v2(0, -100)), cc.callFunc(function () {
                                        8 == e && (cc.find("Canvas/Feather/box").runAction(cc.moveTo(.2, cc.v2(-201, -163)).easing(cc.easeBackOut())),
                                            cc.find("Canvas/Feather/1").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, -.6, -.6), cc.scaleTo(.5, -.5, -.5)))))
                                    })))
                            }, c = 1; c <= 8; c++)
                                e(c)
                        }
                        ,
                        c.prototype.tapStart = function (e) {
                            var c = e.getLocation();
                            cc.find("Canvas/brush").getBoundingBoxToWorld().contains(c) && 255 == cc.find("Canvas/brush").opacity ? (n.self.SelectedStep = 1,
                                n.self.PickPOS = cc.find("Canvas/brush").getPosition(),
                                n.self.PlaySound("S16"),
                                cc.find("Canvas/brush").zIndex = 10,
                                cc.find("Canvas/brush").stopAllActions(),
                                cc.find("Canvas/brush").setScale(1),
                                cc.find("Canvas/brush").setPosition(cc.find("Canvas/brush").getParent().convertToNodeSpaceAR(c))) : cc.find("Canvas/tube").getBoundingBoxToWorld().contains(c) && 255 == cc.find("Canvas/tube").opacity && (n.self.SelectedStep = 2,
                                    n.self.PickPOS = cc.find("Canvas/tube").getPosition(),
                                    n.self.PlaySound("S16"),
                                    cc.find("Canvas/tube").stopAllActions(),
                                    cc.find("Canvas/tube").setScale(1),
                                    cc.find("Canvas/tube").zIndex = 10,
                                    cc.find("Canvas/tube").setPosition(cc.find("Canvas/tube").getParent().convertToNodeSpaceAR(c)));
                            for (var o = 1; o <= 8; o++)
                                if (cc.find("Canvas/Feather/" + o).getBoundingBoxToWorld().contains(c) && 255 == cc.find("Canvas/Feather/" + o).opacity) {
                                    n.self.Arrow.active = !0,
                                        n.self.SelectedStep = 3,
                                        n.self.SelectedIndex = o,
                                        n.self.PlaySound("S16"),
                                        n.self.PickPOS = cc.find("Canvas/Feather/" + n.self.SelectedIndex).getPosition(),
                                        cc.find("Canvas/Feather/" + n.self.SelectedIndex).zIndex = 10,
                                        cc.find("Canvas/Feather/" + n.self.SelectedIndex).stopAllActions(),
                                        cc.find("Canvas/Feather/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c));
                                    break
                                }
                            for (o = 1; o <= 8; o++)
                                if (cc.find("Canvas/Feather2/" + o).getBoundingBoxToWorld().contains(c) && 255 == cc.find("Canvas/Feather2/" + o).opacity) {
                                    n.self.Arrow.active = !0,
                                        n.self.SelectedStep = 4,
                                        n.self.SelectedIndex = o,
                                        n.self.PlaySound("S16"),
                                        n.self.PickPOS = cc.find("Canvas/Feather2/" + n.self.SelectedIndex).getPosition(),
                                        cc.find("Canvas/Feather2/" + n.self.SelectedIndex).zIndex = 10,
                                        cc.find("Canvas/Feather2/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c));
                                    break
                                }
                        }
                        ,
                        c.prototype.tapMove = function (e) {
                            var c = e.getLocation();
                            if (1 == n.self.SelectedStep) {
                                cc.find("Canvas/brush").setPosition(cc.find("Canvas/brush").getParent().convertToNodeSpaceAR(c)),
                                    cc.find("Canvas/board").getBoundingBoxToWorld().contains(c) && 0 == cc.find("Canvas/SoundNode/S12").getComponent(cc.AudioSource).isPlaying && n.self.PlaySound("S12");
                                for (var o = function (e) {
                                    if (cc.find("Canvas/board/Stone" + e).getBoundingBoxToWorld().intersects(cc.find("Canvas/brush/BrushTouch").getBoundingBoxToWorld()) && cc.find("Canvas/board/Stone" + e).opacity > 140)
                                        return 0 == cc.find("Canvas/board/Stone" + e).getNumberOfRunningActions() && cc.find("Canvas/board/Stone" + e).runAction(cc.repeat(cc.sequence(cc.rotateTo(.02, -3), cc.rotateTo(.02, 3)), 3)),
                                            cc.find("Canvas/board/Stone" + e).opacity = cc.find("Canvas/board/Stone" + e).opacity - 1,
                                            cc.find("Canvas/board/Stone" + e).opacity < 150 && (n.self.PlaySound("S13"),
                                                cc.find("Canvas/board/Stone" + e).runAction(cc.sequence(cc.spawn(cc.jumpBy(.3, cc.v2(10, -20), 10, 1), cc.fadeOut(.4)), cc.callFunc(function () {
                                                    cc.find("Canvas/board/Stone" + e).opacity = 0
                                                }))),
                                                cc.find("Canvas/brush/4").active || (cc.find("Canvas/brush/4").active = !0)),
                                        {
                                            value: void 0
                                        }
                                }, t = 1; t <= 4; t++) {
                                    var a = o(t);
                                    if ("object" == typeof a)
                                        return a.value
                                }
                                for (t = 1; t <= 2; t++)
                                    if (cc.find("Canvas/board/dirt" + t).getBoundingBoxToWorld().intersects(cc.find("Canvas/brush/BrushTouch").getBoundingBoxToWorld()) && cc.find("Canvas/board/dirt" + t).opacity > 5)
                                        return 0 == cc.find("Canvas/board/dirt" + t).getNumberOfRunningActions() && cc.find("Canvas/board/dirt" + t).runAction(cc.sequence(cc.scaleTo(.5, 1.03), cc.scaleTo(.5, 1))),
                                            cc.find("Canvas/brush/dirtPart").getComponent(cc.ParticleSystem).active || cc.find("Canvas/brush/dirtPart").getComponent(cc.ParticleSystem).resetSystem(),
                                            cc.find("Canvas/board/dirt" + t).opacity = cc.find("Canvas/board/dirt" + t).opacity - 3,
                                            void (cc.find("Canvas/board/dirt" + t).opacity <= 10 && (cc.find("Canvas/board/dirt" + t).opacity = 0,
                                                cc.find("Canvas/board/dirt" + t).setPosition(cc.v2(1e3, 1e3)),
                                                cc.find("Canvas/brush/4").active || (cc.find("Canvas/brush/4").active = !0)));
                                cc.find("Canvas/brush/dirtPart").getComponent(cc.ParticleSystem).active && cc.find("Canvas/brush/dirtPart").getComponent(cc.ParticleSystem).stopSystem()
                            } else if (2 == n.self.SelectedStep) {
                                0 == cc.find("Canvas/tube").getNumberOfRunningActions() && cc.find("Canvas/tube").setPosition(cc.find("Canvas/tube").getParent().convertToNodeSpaceAR(c));
                                for (t = 1; t <= 4; t++)
                                    if (cc.find("Canvas/board/RedBubble/" + t + "/RedTouch").getBoundingBoxToWorld().intersects(cc.find("Canvas/tube").getBoundingBoxToWorld()) && !cc.find("Canvas/board/RedBubble/" + t + "/1").active) {
                                        var i = null;
                                        1 == t ? i = cc.v2(-179, 70) : 2 == t ? i = cc.v2(-72, 1) : 3 == t ? i = cc.v2(-111, 67) : 4 == t && (i = cc.v2(-22, 90)),
                                            cc.find("Canvas/tube").stopAllActions(),
                                            cc.find("Canvas/tube").setPosition(i),
                                            cc.find("Canvas/tube").runAction(cc.delayTime(.2)),
                                            cc.find("Canvas/board/RedBubble/" + t + "/1").active = !0,
                                            cc.find("Canvas/board/RedBubble/" + t + "/1").runAction(cc.scaleTo(1, 1)),
                                            n.self.PlaySound("S14"),
                                            cc.find("Canvas/board/RedBubble/" + t).runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function () { }), cc.scaleTo(.2, 0)));
                                        for (var r = 0, s = 1; s <= 4; s++)
                                            if (!cc.find("Canvas/board/RedBubble/" + s + "/1").active) {
                                                r = 1;
                                                break
                                            }
                                        0 == r && (n.self.SelectedStep = -1,
                                            cc.find("Canvas/tube").runAction(cc.sequence(cc.delayTime(.3), cc.moveBy(.3, cc.v2(1e3, 0)), cc.delayTime(2.2), cc.callFunc(function () {
                                                n.self.PlaySound("Bird_ wing is missing a piece , lets make beautiful feather wings"),
                                                    cc.find("Canvas/board").runAction(cc.scaleTo(.1, 0)),
                                                    cc.find("Canvas/birdInjurd_ske").getComponent(dragonBones.ArmatureDisplay).playAnimation("idle_clean", 0),
                                                    cc.find("Canvas/birdInjurd_ske").runAction(cc.sequence(cc.delayTime(5), cc.moveBy(1, cc.v2(0, -500)), cc.callFunc(function () {
                                                        n.self.BagEnter()
                                                    })))
                                            }))));
                                        break
                                    }
                            } else
                                3 == n.self.SelectedStep ? cc.find("Canvas/Feather/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c)) : 4 == n.self.SelectedStep && cc.find("Canvas/Feather2/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather2/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c))
                        }
                        ,
                        c.prototype.tapEnd = function (e) {
                            e.getLocation();
                            if (1 == n.self.SelectedStep) {
                                for (var c = 0, o = 1; o <= 4; o++)
                                    if (0 != cc.find("Canvas/board/Stone" + o).opacity) {
                                        c = 1;
                                        break
                                    }
                                for (o = 1; o <= 2; o++)
                                    if (0 != cc.find("Canvas/board/dirt" + o).opacity) {
                                        c = 1;
                                        break
                                    }
                                cc.find("Canvas/brush/dirtPart").getComponent(cc.ParticleSystem).active && cc.find("Canvas/brush/dirtPart").getComponent(cc.ParticleSystem).stopSystem(),
                                    cc.find("Canvas/brush").opacity = 254,
                                    1 == c ? (cc.find("Canvas/brush").stopAllActions(),
                                        cc.find("Canvas/brush").runAction(cc.sequence(cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                            cc.find("Canvas/brush").stopAllActions(),
                                                cc.find("Canvas/brush").zIndex = 1,
                                                cc.find("Canvas/brush").opacity = 255,
                                                cc.find("Canvas/brush").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1))))
                                        })))) : (cc.find("Canvas/brush").stopAllActions(),
                                            cc.find("Canvas/brush").runAction(cc.sequence(cc.moveBy(.3, cc.v2(1e3, 0)), cc.callFunc(function () {
                                                cc.find("Canvas/brush").zIndex = 1,
                                                    cc.find("Canvas/tube").stopAllActions(),
                                                    cc.find("Canvas/brush").opacity = 255,
                                                    cc.find("Canvas/tube").runAction(cc.moveTo(.3, cc.v2(190, 0))),
                                                    cc.find("Canvas/tube").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1)))),
                                                    cc.find("Canvas/board/RedBubble").active = !0
                                            }))))
                            } else if (2 == n.self.SelectedStep)
                                cc.find("Canvas/tube").stopAllActions(),
                                    cc.find("Canvas/tube").opacity = 254,
                                    cc.find("Canvas/tube").runAction(cc.sequence(cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                        cc.find("Canvas/tube").stopAllActions(),
                                            cc.find("Canvas/tube").opacity = 255,
                                            cc.find("Canvas/tube").zIndex = 1,
                                            cc.find("Canvas/tube").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1))))
                                    })));
                            else if (3 == n.self.SelectedStep) {
                                var t = n.self.SelectedIndex;
                                if (n.self.Arrow.active = !1,
                                    cc.find("Canvas/Feather/box").getBoundingBoxToWorld().intersects(cc.find("Canvas/Feather/" + t).getBoundingBoxToWorld())) {
                                    if (1 == t || 4 == t || 6 == t) {
                                        var a = null;
                                        1 == t ? a = cc.v2(-259, -159) : 4 == t ? a = cc.v2(-201, -153) : 6 == t && (a = cc.v2(-148, -144)),
                                            n.self.addStarParticle(),
                                            cc.find("Canvas/Feather/" + t).stopAllActions(),
                                            cc.find("Canvas/Feather/" + t).opacity = 254,
                                            cc.find("Canvas/Feather/" + t).runAction(cc.sequence(cc.spawn(cc.moveTo(.1, a), cc.rotateTo(.1, 90)), cc.callFunc(function () {
                                                cc.find("Canvas/Feather/" + t).zIndex = 1
                                            })))
                                    } else
                                        n.self.PlaySound("wrong"),
                                            cc.find("Canvas/Feather/" + t).stopAllActions(),
                                            cc.find("Canvas/Feather/" + t).opacity = 254,
                                            cc.find("Canvas/Feather/" + t).runAction(cc.sequence(cc.repeat(cc.sequence(cc.rotateTo(.1, 5), cc.rotateTo(.1, -5)), 2), cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                                cc.find("Canvas/Feather/" + t).zIndex = 1,
                                                    cc.find("Canvas/Feather/" + t).opacity = 255
                                            })));
                                    for (c = 0,
                                        o = 1; o <= 8; o++)
                                        if ((1 == o || 4 == o || 6 == o) && 254 != cc.find("Canvas/Feather/" + o).opacity) {
                                            c = 1;
                                            break
                                        }
                                    if (0 == c) {
                                        for (o = 1; o <= 8; o++)
                                            1 != o && 4 != o && 6 != o && cc.find("Canvas/Feather/" + o).runAction(cc.spawn(cc.rotateBy(1, -360), cc.moveBy(1, cc.v2(-1e3, 50)), cc.fadeOut(3)));
                                        n.self.Arrow = cc.find("Canvas/Feather2/Arrow"),
                                            cc.find("Canvas/Feather").runAction(cc.sequence(cc.delayTime(1), cc.moveBy(.3, cc.v2(0, -500)), cc.callFunc(function () {
                                                cc.find("Canvas/bag").getComponent(cc.Animation).play("BagAnim2");
                                                for (var e = function (e) {
                                                    cc.find("Canvas/Feather2/" + e).setPosition(cc.v2(cc.find("Canvas/Feather2/" + e).getPosition().x, cc.find("Canvas/Feather2/" + e).getPosition().y + 100)),
                                                        cc.find("Canvas/Feather2/" + e).active = !0,
                                                        cc.find("Canvas/Feather2/" + e).runAction(cc.sequence(cc.delayTime(.15 * e + .3), cc.callFunc(function () {
                                                            1 == e && n.self.PlaySound("S27")
                                                        }), cc.fadeIn(.1), cc.moveBy(.15, cc.v2(0, -100)), cc.callFunc(function () {
                                                            8 == e && (cc.find("Canvas/Feather2/box").runAction(cc.moveTo(.2, cc.v2(-201, -163)).easing(cc.easeBackOut())),
                                                                cc.find("Canvas/Feather2/4").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, -.6, -.6), cc.scaleTo(.5, -.5, -.5)))))
                                                        })))
                                                }, c = 1; c <= 8; c++)
                                                    e(c)
                                            })))
                                    }
                                } else
                                    cc.find("Canvas/Feather/" + t).stopAllActions(),
                                        cc.find("Canvas/Feather/" + t).opacity = 254,
                                        cc.find("Canvas/Feather/" + t).runAction(cc.sequence(cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                            cc.find("Canvas/Feather/" + t).zIndex = 1,
                                                cc.find("Canvas/Feather/" + t).opacity = 255
                                        })))
                            } else if (4 == n.self.SelectedStep) {
                                var i = n.self.SelectedIndex;
                                if (n.self.Arrow.active = !1,
                                    cc.find("Canvas/Feather2/box").getBoundingBoxToWorld().intersects(cc.find("Canvas/Feather2/" + i).getBoundingBoxToWorld())) {
                                    if (4 == i || 7 == i || 8 == i) {
                                        a = null;
                                        4 == i ? a = cc.v2(-259, -159) : 7 == i ? a = cc.v2(-201, -153) : 8 == i && (a = cc.v2(-148, -144)),
                                            n.self.addStarParticle(),
                                            cc.find("Canvas/Feather2/" + i).stopAllActions(),
                                            cc.find("Canvas/Feather2/" + i).opacity = 254,
                                            cc.find("Canvas/Feather2/" + i).runAction(cc.sequence(cc.spawn(cc.moveTo(.1, a), cc.rotateTo(.1, 90)), cc.callFunc(function () {
                                                cc.find("Canvas/Feather2/" + i).zIndex = 1
                                            })))
                                    } else
                                        n.self.PlaySound("wrong"),
                                            cc.find("Canvas/Feather2/" + i).stopAllActions(),
                                            cc.find("Canvas/Feather2/" + i).opacity = 254,
                                            cc.find("Canvas/Feather2/" + i).runAction(cc.sequence(cc.repeat(cc.sequence(cc.rotateTo(.1, 5), cc.rotateTo(.1, -5)), 2), cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                                cc.find("Canvas/Feather2/" + i).zIndex = 1,
                                                    cc.find("Canvas/Feather2/" + i).opacity = 255
                                            })));
                                    for (c = 0,
                                        o = 1; o <= 8; o++)
                                        if ((4 == o || 7 == o || 8 == o) && 254 != cc.find("Canvas/Feather2/" + o).opacity) {
                                            c = 1;
                                            break
                                        }
                                    if (0 == c) {
                                        for (o = 1; o <= 8; o++)
                                            4 != o && 7 != o && 8 != o && cc.find("Canvas/Feather2/" + o).runAction(cc.spawn(cc.rotateBy(1, -360), cc.moveBy(1, cc.v2(-1e3, 50)), cc.fadeOut(3)));
                                        cc.find("Canvas/Feather2").runAction(cc.sequence(cc.delayTime(1), cc.moveBy(.3, cc.v2(0, -500)), cc.callFunc(function () {
                                            cc.find("Canvas/Feather").stopAllActions(),
                                                cc.find("Canvas/Feather").runAction(cc.moveTo(.5, cc.v2(0, 150))),
                                                cc.find("Canvas/Feather2").stopAllActions(),
                                                cc.find("Canvas/Feather2").setPosition(cc.v2(362, 0)),
                                                cc.find("Canvas/Feather2").runAction(cc.moveTo(.5, cc.v2(362, 150))),
                                                n.self.PlaySound("Bird_ Awesome the feathers are  all  chosen"),
                                                n.self.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () {
                                                    cc.find("Canvas/StarParticle").active = !0,
                                                        cc.find("Canvas/Next").active = !0,
                                                        n.self.PlaySound("ToolDone2")
                                                })))
                                        })))
                                    }
                                } else
                                    cc.find("Canvas/Feather2/" + i).stopAllActions(),
                                        cc.find("Canvas/Feather2/" + i).opacity = 254,
                                        cc.find("Canvas/Feather2/" + i).runAction(cc.sequence(cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                            cc.find("Canvas/Feather2/" + i).zIndex = 1,
                                                cc.find("Canvas/Feather2/" + i).opacity = 255
                                        })))
                            }
                            n.self.SelectedStep = -1
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                a.default.self.requestAds(),
                                this.PlaySound("TapSound"),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Bird_3")
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.prototype.addStarParticle = function () {
                            var e = cc.instantiate(cc.find("Canvas/ItemStar"));
                            this.node.addChild(e),
                                e.active = !0,
                                this.PlaySound("ToolDone")
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Bird_2: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "9516c0018hGKJPmR5QaTZP4", "Bird_2");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.ColorCounter = 0,
                            c.PickItemName = null,
                            c.Arrow = null,
                            c.ISLOCKUSER = !1,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                cc.director.preloadScene("Bird_3"),
                                this.Arrow = cc.find("Canvas/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, 20)), cc.moveBy(.2, cc.v2(0, -20))))),
                                this.Arrow.active = !1
                        }
                        ,
                        c.prototype.start = function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                                    n.self.PlaySound("S25")
                                }), cc.moveTo(1, cc.v2(-151, 165)))),
                                this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
                                    n.self.PlaySound("choosetwocolortopour")
                                }))),
                                cc.find("Canvas/2").runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                                    n.self.PlaySound("S25")
                                }), cc.moveTo(1, cc.v2(240, -56)).easing(cc.easeBackOut())))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (!n.self.ISLOCKUSER && (0 == n.self.ToolSequence || 1 == n.self.ToolSequence))
                                for (var a = 0; a < 4; a++) {
                                    var i = cc.find("Canvas/2/TestTube_" + (a + 1));
                                    if (i && i.active && i.getBoundingBoxToWorld().contains(o) && 0 == cc.find("Canvas/MoveTool").childrenCount) {
                                        n.self.CanMove = !0,
                                            i.active = !1;
                                        var r = cc.instantiate(i);
                                        cc.find("Canvas/MoveTool").addChild(r),
                                            r.active = !0,
                                            r.position = t,
                                            n.self.MoveTool = r,
                                            r.scale = .5,
                                            n.self.PickItemName = i.name,
                                            n.self.PlaySound("Pick"),
                                            n.self.Arrow.active = !0;
                                        break
                                    }
                                }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence && n.self.CanMove) {
                                if (n.self.MoveTool.position = t,
                                    n.self.MoveTool.position.fuzzyEquals(cc.v3(-111, 45, 0), 80)) {
                                    n.self.CanMove = !1,
                                        cc.find("Canvas/1/TestTube_2").active = !0;
                                    var a = n.self.MoveTool.getChildByName("6").color;
                                    if (cc.find("Canvas/1/TestTube_2/6").color = a,
                                        cc.find("Canvas/1/TestTube_2/1").color = a,
                                        n.self.Arrow.active = !1,
                                        n.self.PlaySound("S32"),
                                        "TestTube_1" == n.self.MoveTool.name ? n.self.PlaySound("yellow") : "TestTube_2" == n.self.MoveTool.name ? n.self.PlaySound("red") : "TestTube_3" == n.self.MoveTool.name ? n.self.PlaySound("blue") : "TestTube_4" == n.self.MoveTool.name && n.self.PlaySound("white"),
                                        n.self.ISLOCKUSER = !0,
                                        cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).play("PourLiquid"),
                                        cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).on("finished", function () {
                                            n.self.StopSound("S32"),
                                                cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).off("finished"),
                                                cc.find("Canvas/1/TestTube_2").active = !1,
                                                n.self.MoveTool.active = !0,
                                                n.self.MoveTool.getChildByName("6").removeFromParent(),
                                                n.self.MoveTool.runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)), cc.removeSelf())),
                                                1 == n.self.ColorCounter && (n.self.ISLOCKUSER = !1)
                                        }),
                                        0 == n.self.ColorCounter)
                                        n.self.ColorCounter = 1,
                                            cc.find("Canvas/1/3_2").color = a,
                                            cc.find("Canvas/1/3_2").active = !0,
                                            cc.find("Canvas/1/3_2").getComponent(cc.Sprite).fillRange = 0,
                                            cc.find("Canvas/1").getComponent(cc.Animation).play("Progress1"),
                                            cc.find("Canvas/board/colorsplash1").active = !0,
                                            cc.find("Canvas/board/colorsplash1").color = a;
                                    else {
                                        n.self.ColorCounter = 2,
                                            n.self.ISLOCKUSER = !0,
                                            cc.find("Canvas/board/colorsplash2").active = !0,
                                            cc.find("Canvas/board/Plus").active = !0,
                                            cc.find("Canvas/board/Equal").active = !0,
                                            cc.find("Canvas/board/colorsplash2").color = a;
                                        var i = cc.find("Canvas/1/3_2").color;
                                        cc.find("Canvas/1/2_2").active = !0,
                                            cc.find("Canvas/1/3_2").active = !1,
                                            cc.find("Canvas/1/2_2").color = i;
                                        var r = cc.color((i.r + a.r) / 2, (i.g + a.g) / 2, (i.b + a.b) / 2);
                                        cc.find("Canvas/FinalScreen/1/2_2").color = r,
                                            cc.find("Canvas/board/Answer").color = r,
                                            cc.find("Canvas/1/2_2").runAction(cc.sequence(cc.delayTime(.5), cc.tintTo(1, r.r, r.g, r.b), cc.callFunc(function () {
                                                cc.find("Canvas/board/Answer").active = !0,
                                                    cc.find("Canvas/Rain").active = !0,
                                                    cc.find("Canvas/1/BottleParticle").active = !0,
                                                    cc.find("Canvas/1/BottleParticle").getComponent(cc.ParticleSystem).resetSystem(),
                                                    cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(.5), cc.moveBy(.5, cc.v2(0, 300)), cc.callFunc(function () {
                                                        cc.find("Canvas/1").getComponent(cc.Animation).play("AfterColorAnim"),
                                                            n.self.PlaySound("S23"),
                                                            cc.find("Canvas/board").children.forEach(function (e) {
                                                                e.active = !1
                                                            }),
                                                            cc.find("Canvas/1").getComponent(cc.Animation).on("finished", function () {
                                                                cc.find("Canvas/1/BottleParticle").active = !1,
                                                                    n.self.ColorCounter = 0,
                                                                    n.self.ToolSequence = 1,
                                                                    n.self.ISLOCKUSER = !1,
                                                                    cc.find("Canvas/1").getComponent(cc.Animation).off("finished"),
                                                                    cc.find("Canvas/2").getComponent(cc.Animation).play("EntryTestTube"),
                                                                    cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(2), cc.moveTo(1, cc.v2(-151, 165)))),
                                                                    cc.find("Canvas/2").getComponent(cc.Animation).on("finished", function () {
                                                                        n.self.PlaySound("choosetwocolortopour")
                                                                    })
                                                            })
                                                    })))
                                            }))),
                                            cc.find("Canvas/1").getComponent(cc.Animation).play("Progress2")
                                    }
                                    n.self.MoveTool.active = !1
                                }
                            } else if (1 == n.self.ToolSequence && n.self.CanMove && (n.self.MoveTool.position = t,
                                n.self.MoveTool.position.fuzzyEquals(cc.v3(-111, 45, 0), 80))) {
                                n.self.CanMove = !1,
                                    n.self.Arrow.active = !1,
                                    cc.find("Canvas/1/TestTube_2").active = !0;
                                a = n.self.MoveTool.getChildByName("6").color;
                                if (cc.find("Canvas/1/TestTube_2/6").color = a,
                                    cc.find("Canvas/1/TestTube_2/1").color = a,
                                    n.self.PlaySound("S32"),
                                    "TestTube_1" == n.self.MoveTool.name ? n.self.PlaySound("yellow") : "TestTube_2" == n.self.MoveTool.name ? n.self.PlaySound("red") : "TestTube_3" == n.self.MoveTool.name ? n.self.PlaySound("blue") : "TestTube_4" == n.self.MoveTool.name && n.self.PlaySound("white"),
                                    cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).play("PourLiquid"),
                                    cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).on("finished", function () {
                                        n.self.StopSound("S32"),
                                            cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).off("finished"),
                                            cc.find("Canvas/1/TestTube_2").active = !1,
                                            n.self.MoveTool.active = !0,
                                            n.self.MoveTool.getChildByName("6").removeFromParent(),
                                            n.self.MoveTool.runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)), cc.removeSelf()))
                                    }),
                                    0 == n.self.ColorCounter)
                                    n.self.ColorCounter = 1,
                                        cc.find("Canvas/1/3_2").color = a,
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("Progress1"),
                                        cc.find("Canvas/board/colorsplash1").active = !0,
                                        cc.find("Canvas/board/colorsplash1").color = a;
                                else {
                                    n.self.ISLOCKUSER = !0,
                                        cc.find("Canvas/board/colorsplash2").active = !0,
                                        cc.find("Canvas/board/Plus").active = !0,
                                        cc.find("Canvas/board/Equal").active = !0,
                                        cc.find("Canvas/board/colorsplash2").color = a;
                                    i = cc.find("Canvas/1/3_2").color;
                                    cc.find("Canvas/1/3_2").active = !1,
                                        cc.find("Canvas/1/2_2").color = i;
                                    r = cc.color((i.r + a.r) / 2, (i.g + a.g) / 2, (i.b + a.b) / 2);
                                    cc.find("Canvas/FinalScreen/2/2_2").color = r,
                                        cc.find("Canvas/board/Answer").color = r,
                                        cc.find("Canvas/1/2_2").runAction(cc.sequence(cc.tintTo(1.5, r.r, r.g, r.b), cc.callFunc(function () {
                                            cc.find("Canvas/board/Answer").active = !0,
                                                cc.find("Canvas/Rain").getComponent(cc.ParticleSystem).resetSystem(),
                                                cc.find("Canvas/1/BottleParticle").active = !0,
                                                cc.find("Canvas/1/BottleParticle").getComponent(cc.ParticleSystem).resetSystem(),
                                                cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(.5), cc.moveBy(.5, cc.v2(0, 300)), cc.callFunc(function () {
                                                    cc.find("Canvas/1").getComponent(cc.Animation).play("AfterColorLast"),
                                                        n.self.PlaySound("S23"),
                                                        cc.find("Canvas/1").getComponent(cc.Animation).on("finished", function () {
                                                            n.self.ColorCounter = 0,
                                                                cc.find("Canvas/1/BottleParticle").active = !1,
                                                                cc.find("Canvas/FinalScreen").active = !0,
                                                                n.self.PlaySound("FinalScreen"),
                                                                cc.find("Canvas/FinalScreen/1/2_2").color = cc.find("Canvas/FinalScreen/1/2_2").color,
                                                                cc.find("Canvas/FinalScreen/2/2_2").color = cc.find("Canvas/FinalScreen/2/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/1/4").color = cc.find("Canvas/FinalScreen/1/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/1/5").color = cc.find("Canvas/FinalScreen/1/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/2/5").color = cc.find("Canvas/FinalScreen/2/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/2/4").color = cc.find("Canvas/FinalScreen/2/2_2").color
                                                        })
                                                })))
                                        }))),
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("Progress2")
                                }
                                n.self.MoveTool.active = !1
                            }
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            n.self.CanMove && (n.self.CanMove = !1,
                                0 == n.self.ToolSequence ? (n.self.Arrow.active = !1,
                                    cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/2/" + n.self.PickItemName).active = !0) : 1 == n.self.ToolSequence && (n.self.Arrow.active = !1,
                                        cc.find("Canvas/MoveTool").removeAllChildren(),
                                        cc.find("Canvas/2/" + n.self.PickItemName).active = !0))
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                a.default.self.requestAds(),
                                this.PlaySound("TapSound"),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Bird_3")
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Bird_3: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "f9f76L/9mFBsIhaBb4MrfIJ", "Bird_3");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./FloodFill")
            , i = e("./DrawPercentage")
            , r = e("./Promotion")
            , s = cc._decorator
            , l = s.ccclass
            , d = (s.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.ColorCode = [],
                            c.StepPosition = [],
                            c.PictureColorNumber = [],
                            c.SelectedColorCode = null,
                            c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.DrawingObj = [],
                            c.DrawingPercentageObj = [],
                            c.SelectedStep = 0,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.SelectedColorCode = cc.Color.RED,
                                cc.director.preloadScene("Bird_4"),
                                this.ColorCode[0] = cc.color(255, 130, 45),
                                this.ColorCode[1] = cc.color(230, 96, 252),
                                this.ColorCode[2] = cc.color(143, 1, 203),
                                this.ColorCode[3] = cc.color(255, 158, 217),
                                this.ColorCode[4] = cc.color(254, 255, 101),
                                this.ColorCode[5] = cc.color(122, 250, 83),
                                this.ColorCode[6] = cc.color(244, 30, 41),
                                this.ColorCode[7] = cc.color(0, 123, 220);
                            for (var e = 1; e <= 8; e++)
                                cc.find("Canvas/ColorPanel/view/content/" + e).getChildByName("4").color = this.ColorCode[e - 1],
                                    cc.find("Canvas/ColorPanel/view/content/" + e).getChildByName("5").color = this.ColorCode[e - 1];
                            for (e = 0; e < 6; e++)
                                this.StepPosition[e] = cc.v2(cc.find("Canvas/Step" + (e + 1)).position),
                                    this.DrawingObj[e] = new a.default,
                                    this.DrawingObj[e].onLoadUser(cc.find("Canvas/Step" + (e + 1) + "/Mask/Drawing")),
                                    this.DrawingPercentageObj[e] = new i.default,
                                    this.DrawingPercentageObj[e].onLoadUser(cc.find("Static/S" + (e + 1)), null);
                            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                                n.self.Entry(),
                                    cc.find("Canvas/bord").runAction(cc.sequence(cc.delayTime(.9), cc.moveTo(.3, cc.v2(142, 113)))),
                                    cc.find("Canvas/ColorPanel").runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.3, cc.v2(320, -40))))
                            })));
                            for (e = 0; e < 9; e++)
                                this.PictureColorNumber[e] = e;
                            this.shuffle(this.PictureColorNumber)
                        }
                        ,
                        c.prototype.shuffle = function (e) {
                            e.sort(function () {
                                return Math.random() - Math.random()
                            })
                        }
                        ,
                        c.prototype.start = function () {
                            cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () {
                                    n.self.PlaySound("letstartcoloring")
                                })))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence) {
                                n.self.SelectedColorCode;
                                for (var a = 1; a <= 8; a++)
                                    if (cc.find("Canvas/ColorPanel/view/content/" + a).getBoundingBoxToWorld().contains(o)) {
                                        if (!n.self.isPickTool(a))
                                            return cc.find("Canvas/ColorPanel/view/content/" + a).runAction(cc.repeat(cc.sequence(cc.rotateTo(.2, 5), cc.rotateTo(.2, -5)), 2)),
                                                void n.self.PlaySound("S25");
                                        n.self.PlaySound("Pick"),
                                            n.self.CanMove = !0,
                                            cc.find("Canvas/ColorPanel/view/content/" + a).active = !1,
                                            cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !1;
                                        var i = cc.instantiate(cc.find("Canvas/Loader/Gun"));
                                        cc.find("Canvas/MoveTool").addChild(i),
                                            i.position = t,
                                            i.getChildByName("4").color = n.self.ColorCode[a - 1],
                                            i.getChildByName("5").color = n.self.ColorCode[a - 1];
                                        var r = i.getChildByName("ColorSpray");
                                        r.getComponent(cc.ParticleSystem).startColor = n.self.ColorCode[a - 1],
                                            r.getComponent(cc.ParticleSystem).endColor = n.self.ColorCode[a - 1],
                                            i.name = a.toString(),
                                            n.self.MoveTool = i;
                                        break
                                    }
                            }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            0 == n.self.ToolSequence && n.self.CanMove && (0 == cc.find("Canvas/SoundNode/SprayColor").getComponent(cc.AudioSource).isPlaying && n.self.PlaySound("SprayColor"),
                                n.self.MoveTool.position = t,
                                n.self.DrawingObj[n.self.SelectedStep].TouchMove(e, n.self.SelectedColorCode, cc.v2(-50, -50)),
                                n.self.DrawingPercentageObj[n.self.SelectedStep].TouchMove(e, cc.v2(-50, -50)))
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            if (!n.self.CanMove)
                                return !1;
                            n.self.CanMove = !1,
                                0 == n.self.ToolSequence && (n.self.StopSound("SprayColor"),
                                    cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !0,
                                    cc.find("Canvas/ColorPanel/view/content").children.forEach(function (e) {
                                        e.active = !0
                                    }),
                                    n.self.DrawingPercentageObj[n.self.SelectedStep].getPercentage() > 95 && (n.self.addParticle(),
                                        n.self.PlaySound("ToolDone2"),
                                        n.self.ToolSequence = -1,
                                        cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 1)),
                                        cc.find("Canvas/Step" + (n.self.SelectedStep + 1)).runAction(cc.sequence(cc.delayTime(.5), cc.jumpBy(.5, cc.v2(0, -500), 300, 1), cc.callFunc(function () {
                                            cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)) && cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)).runAction(cc.scaleTo(.2, 0)),
                                                n.self.Entry()
                                        })))))
                        }
                        ,
                        c.prototype.addParticle = function () {
                            var e = cc.instantiate(cc.find("Canvas/Loader/select"));
                            this.node.addChild(e),
                                e.position = cc.v3(-141, 0, 0),
                                e.active = !0
                        }
                        ,
                        c.prototype.isPickTool = function (e) {
                            var c = cc.find("Canvas/ColorPanel/view/content/" + e + "/4")
                                , o = cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/Mask/Drawing");
                            return c.color.r == o.color.r && c.color.g == o.color.g && c.color.b == o.color.b
                        }
                        ,
                        c.prototype.Entry = function () {
                            var e = this.getRandomInt(1, 6);
                            if (255 == cc.find("Canvas/Step" + e).opacity)
                                cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 0)),
                                    cc.find("Canvas/Step" + e).stopAllActions(),
                                    cc.find("Canvas/Step" + e).opacity = 254,
                                    cc.find("Canvas/Step" + e).active = !0,
                                    n.self.SelectedStep = e - 1,
                                    cc.find("Canvas/Step" + e).position = cc.v3(-500, this.StepPosition[e - 1].y),
                                    cc.find("Canvas/Step" + e).runAction(cc.sequence(cc.moveTo(.5, this.StepPosition[e - 1]), cc.callFunc(function () {
                                        n.self.EntryColor(e - 1),
                                            n.self.ToolSequence = 0
                                    })));
                            else {
                                for (var c = !1, o = 0; o < 6; o++)
                                    if (255 == cc.find("Canvas/Step" + (o + 1)).opacity) {
                                        cc.find("Canvas/Step" + (o + 1)).stopAllActions(),
                                            c = !0;
                                        break
                                    }
                                c ? this.Entry() : (console.log("done all"),
                                    cc.find("Canvas/ColorPanel").runAction(cc.moveBy(.5, cc.v2(500, 0))),
                                    cc.find("Canvas/bord").runAction(cc.moveBy(.5, cc.v2(0, 300))),
                                    cc.find("Canvas/bord/right").active = !1,
                                    cc.find("Canvas/Next").active = !0,
                                    this.PlaySound("ToolDone"),
                                    cc.find("Canvas/StarParticle").active = !0)
                            }
                        }
                        ,
                        c.prototype.EntryColor = function (e) {
                            this.SelectedColorCode = this.ColorCode[e],
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)).active = !0,
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/Mask/Drawing").color = this.SelectedColorCode,
                                console.log(n.self.SelectedStep + 1)
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                r.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Bird_4")
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([l], c)
                }(cc.Component));
        n.default = d,
            cc._RF.pop()
    }
        , {
        "./DrawPercentage": "DrawPercentage",
        "./FloodFill": "FloodFill",
        "./Promotion": "Promotion"
    }],
    Bird_4: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "aadc6Wen5hCXbqhIg7jvsIy", "Bird_4");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , i = a.ccclass
            , r = (a.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.ColorCode = [],
                            c.StepPosition = [],
                            c.PictureColorNumber = [],
                            c.SelectedColorCode = null,
                            c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.SelectedStep = 0,
                            c.StepCount = 1,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.SelectedColorCode = cc.Color.RED,
                                this.ColorCode[0] = cc.color(255, 130, 45),
                                this.ColorCode[1] = cc.color(230, 96, 252),
                                this.ColorCode[2] = cc.color(143, 1, 203),
                                this.ColorCode[3] = cc.color(255, 158, 217),
                                this.ColorCode[4] = cc.color(254, 255, 101),
                                this.ColorCode[5] = cc.color(122, 250, 83),
                                this.ColorCode[6] = cc.color(244, 30, 41),
                                this.ColorCode[7] = cc.color(0, 123, 220);
                            for (var e = 1; e <= 8; e++)
                                cc.find("Canvas/ColorPanel/view/content/" + e).getChildByName("2").color = this.ColorCode[e - 1];
                            for (e = 0; e < 6; e++)
                                this.StepPosition[e] = cc.v2(cc.find("Canvas/stand/Step" + (e + 1)).position);
                            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                                n.self.Entry(),
                                    cc.find("Canvas/bord").runAction(cc.sequence(cc.delayTime(.9), cc.moveTo(.3, cc.v2(142, 113)))),
                                    cc.find("Canvas/ColorPanel").runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.3, cc.v2(330, -40))))
                            })));
                            for (e = 0; e < 9; e++)
                                this.PictureColorNumber[e] = e;
                            this.shuffle(this.PictureColorNumber)
                        }
                        ,
                        c.prototype.shuffle = function (e) {
                            e.sort(function () {
                                return Math.random() - Math.random()
                            })
                        }
                        ,
                        c.prototype.start = function () {
                            cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () {
                                    n.self.PlaySound("decorate")
                                })))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence) {
                                n.self.SelectedColorCode;
                                for (var a = 1; a <= 8; a++)
                                    if (cc.find("Canvas/ColorPanel/view/content/" + a).getBoundingBoxToWorld().contains(o)) {
                                        if (!n.self.isPickTool(a))
                                            return cc.find("Canvas/ColorPanel/view/content/" + a).runAction(cc.repeat(cc.sequence(cc.rotateTo(.2, 5), cc.rotateTo(.2, -5)), 2)),
                                                void n.self.PlaySound("wrong");
                                        n.self.PlaySound("Pick"),
                                            n.self.CanMove = !0,
                                            cc.find("Canvas/ColorPanel/view/content/" + a).active = !1,
                                            cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !1;
                                        var i = cc.instantiate(cc.find("Canvas/Loader/Gun"));
                                        cc.find("Canvas/MoveTool").addChild(i),
                                            i.position = t,
                                            i.getChildByName("2").color = n.self.ColorCode[a - 1],
                                            i.name = a.toString(),
                                            n.self.MoveTool = i;
                                        break
                                    }
                            }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            0 == n.self.ToolSequence && n.self.CanMove && (n.self.MoveTool.position = t,
                                cc.find("Canvas/stand/Step" + (n.self.SelectedStep + 1)).getBoundingBoxToWorld().contains(o) && (n.self.CanMove = !1,
                                    cc.find("Canvas/stand/Step" + (n.self.SelectedStep + 1) + "/2").color = n.self.SelectedColorCode,
                                    cc.find("Canvas/stand/Step" + (n.self.SelectedStep + 1) + "/2").active = !0,
                                    cc.find("Canvas/stand/Step" + (n.self.SelectedStep + 1) + "/featherHInt").active = !1,
                                    cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !0,
                                    cc.find("Canvas/ColorPanel/view/content").children.forEach(function (e) {
                                        e.active = !0
                                    }),
                                    n.self.addParticle(),
                                    n.self.ToolSequence = -1,
                                    cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 1)),
                                    cc.find("Canvas/stand/Step" + (n.self.SelectedStep + 1)).runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () {
                                        n.self.Entry()
                                    })))))
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            if (!n.self.CanMove)
                                return !1;
                            n.self.CanMove = !1,
                                0 == n.self.ToolSequence && (cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !0,
                                    cc.find("Canvas/ColorPanel/view/content").children.forEach(function (e) {
                                        e.active = !0
                                    }))
                        }
                        ,
                        c.prototype.addParticle = function () {
                            this.PlaySound("ToolDone");
                            var e = cc.instantiate(cc.find("Canvas/Loader/select"));
                            this.node.addChild(e),
                                e.position = cc.v3(-141, 0, 0),
                                e.active = !0
                        }
                        ,
                        c.prototype.isPickTool = function (e) {
                            var c = cc.find("Canvas/ColorPanel/view/content/" + e + "/2")
                                , o = cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/2");
                            return c.color.r == o.color.r && c.color.g == o.color.g && c.color.b == o.color.b
                        }
                        ,
                        c.prototype.ShowBird = function () {
                            cc.find("Canvas/FinalScreen").active = !1,
                                cc.find("Canvas/Bird").active = !0,
                                cc.find("Canvas/Bird/effect_welldone_sahua").zIndex = 6,
                                cc.find("Canvas/Bird").position = cc.v3(0, 0, 0),
                                cc.find("Canvas/Bird/birdInjurd_ske").zIndex = 1;
                            var e = cc.instantiate(cc.find("Canvas/stand"));
                            cc.find("Canvas/Bird").addChild(e),
                                e.position = cc.v3(84, 27, 0),
                                e.scale = .5,
                                e.getComponent(cc.Animation).play(),
                                cc.find("Canvas/stand").active = !1,
                                this.ShowPromotion()
                        }
                        ,
                        c.prototype.ShowPromotion = function () {
                            cc.find("Canvas/promotion").position = cc.Vec3.ZERO,
                                cc.find("Canvas/logo").active = !1,
                                cc.find("Canvas/more").active = !1
                        }
                        ,
                        c.prototype.Entry = function () {
                            var e = n.self.StepCount;
                            if (n.self.StepCount++,
                                n.self.StepCount > 6 && (n.self.StepCount = 1),
                                255 == cc.find("Canvas/stand/Step" + e).opacity)
                                cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 0)),
                                    cc.find("Canvas/stand/Step" + e).stopAllActions(),
                                    cc.find("Canvas/stand/Step" + e).opacity = 254,
                                    cc.find("Canvas/stand/Step" + e).active = !0,
                                    n.self.SelectedStep = e - 1,
                                    n.self.EntryColor(e - 1),
                                    n.self.ToolSequence = 0;
                            else {
                                for (var c = !1, o = 0; o < 6; o++)
                                    if (255 == cc.find("Canvas/stand/Step" + (o + 1)).opacity) {
                                        cc.find("Canvas/stand/Step" + (o + 1)).stopAllActions(),
                                            c = !0;
                                        break
                                    }
                                if (c)
                                    this.Entry();
                                else {
                                    console.log("done all"),
                                        cc.find("Canvas/ColorPanel").runAction(cc.moveBy(.5, cc.v2(500, 0))),
                                        cc.find("Canvas/bord").runAction(cc.moveBy(.5, cc.v2(0, 300))),
                                        cc.find("Canvas/bord/right").active = !1;
                                    var t = cc.instantiate(cc.find("Canvas/stand"));
                                    cc.find("Canvas/FinalScreen").addChild(t),
                                        t.position = cc.v3(0, 0, 0),
                                        t.scale = .5,
                                        n.self.PlaySound("FinalScreen"),
                                        cc.find("Canvas/FinalScreen").active = !0,
                                        cc.find("Canvas/FinalScreen/effect_welldone_sahua").zIndex = 10
                                }
                            }
                        }
                        ,
                        c.prototype.EntryColor = function (e) {
                            this.SelectedColorCode = this.ColorCode[e],
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)).active = !0,
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/2").color = this.SelectedColorCode,
                                console.log(n.self.SelectedStep + 1)
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([i], c)
                }(cc.Component));
        n.default = r,
            cc._RF.pop()
    }
        , {}],
    CollectColorBlue: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "9bf5dDzROtDB6gEyS8b5RJn", "CollectColorBlue");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.Counter = 3,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                cc.director.preloadScene("CollectColorRed")
                        }
                        ,
                        c.prototype.start = function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                cc.find("Canvas/startscreen/Hand").getComponent(cc.Animation).play(),
                                cc.find("Canvas/startscreen/Hand").getComponent(cc.Animation).on("finished", function () {
                                    cc.find("Canvas/startscreen/Hand").getComponent(cc.Animation).off("finished"),
                                        cc.find("Canvas/startscreen/Hand").active = !1
                                }),
                                cc.find("Canvas/startscreen").getComponent(cc.Animation).on("finished", function () {
                                    cc.find("Canvas/startscreen").getComponent(cc.Animation).off("finished"),
                                        cc.find("Canvas/testtube").active = !0,
                                        cc.find("Canvas/testtube/Number").runAction(cc.scaleTo(.3, .75).easing(cc.easeBounceOut())),
                                        n.self.addCharacter()
                                }),
                                n.self.PlaySound("3blueapp")
                        }
                        ,
                        c.prototype.addCharacter = function () {
                            for (var e = 0, c = 3, o = 3, t = 3, a = 0; a < 10; a++) {
                                var i = void 0;
                                c > 0 && this.getRandomInt(0, 1) ? (c--,
                                    i = cc.instantiate(cc.find("Canvas/Character/2_1_ske"))) : o > 0 && this.getRandomInt(0, 1) ? (o--,
                                        i = cc.instantiate(cc.find("Canvas/Character/2_2_ske"))) : t > 0 && this.getRandomInt(0, 1) ? (t--,
                                            i = cc.instantiate(cc.find("Canvas/Character/2_3_ske"))) : c > 0 ? (c--,
                                                i = cc.instantiate(cc.find("Canvas/Character/2_1_ske"))) : o > 0 ? (o--,
                                                    i = cc.instantiate(cc.find("Canvas/Character/2_2_ske"))) : t > 0 ? (t--,
                                                        i = cc.instantiate(cc.find("Canvas/Character/2_3_ske"))) : i = cc.instantiate(cc.find("Canvas/Character/2_" + this.getRandomInt(1, 3) + "_ske")),
                                    cc.find("Canvas/Moving").addChild(i),
                                    i.active = !0,
                                    i.scale = 0,
                                    i.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(function () {
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("ShooterBlue"),
                                            n.self.PlaySound("S16")
                                    }), cc.spawn(cc.scaleTo(.3, .7), cc.moveTo(.3, cc.v2(this.getRandomInt(-100, 50), this.getRandomInt(10, 150)))))),
                                    e += .3
                            }
                        }
                        ,
                        c.prototype.addRandomCharacter = function () {
                            var e;
                            e = cc.instantiate(cc.find("Canvas/Character/2_" + this.getRandomInt(1, 3) + "_ske")),
                                cc.find("Canvas/Moving").addChild(e),
                                e.active = !0,
                                e.scale = 0,
                                e.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function () {
                                    n.self.PlaySound("S16"),
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("ShooterBlue")
                                }), cc.spawn(cc.scaleTo(.3, .7), cc.moveTo(.3, cc.v2(this.getRandomInt(-100, 50), this.getRandomInt(10, 150))))))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            for (var o = e.getLocation(), t = (cc.v3(n.self.node.convertToNodeSpaceAR(o)),
                                cc.find("Canvas/Moving").children), a = function (e) {
                                    if (t[e] && t[e].getBoundingBoxToWorld().contains(o)) {
                                        if ("2_1_ske" == t[e].name)
                                            return t[e].stopAllActions(),
                                                t[e].opacity = 254,
                                                n.self.PlaySound("blue"),
                                                t[e].getComponent(cc.Animation).play("NetAnimation"),
                                                t[e].runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                                    t[e].getChildByName("effect_star").active = !0,
                                                        n.self.PlaySound("S13")
                                                }), cc.spawn(cc.scaleTo(.3, 0), cc.jumpTo(.5, cc.v2(-322, -27), 100, 1)), cc.callFunc(function () {
                                                    n.self.addProgress(),
                                                        n.self.addRandomCharacter()
                                                }), cc.removeSelf())),
                                                "break";
                                        "2_2_ske" == t[e].name && n.self.PlaySound("red"),
                                            "2_3_ske" == t[e].name && n.self.PlaySound("yellow")
                                    }
                                }, i = 0; i < t.length; i++) {
                                if ("break" === a(i))
                                    break
                            }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation();
                            cc.v3(n.self.node.convertToNodeSpaceAR(o))
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            var o = e.getLocation();
                            cc.v3(n.self.node.convertToNodeSpaceAR(o))
                        }
                        ,
                        c.prototype.addProgress = function () {
                            this.Counter--,
                                cc.find("Canvas/testtube/5").getComponent(cc.Sprite).fillRange += .22,
                                cc.find("Canvas/Loader/" + this.Counter) && (cc.find("Canvas/testtube/Number").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/" + this.Counter).getComponent(cc.Sprite).spriteFrame),
                                0 == this.Counter && cc.find("Canvas/testtube/Number").runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.2, 0), cc.callFunc(function () {
                                    cc.find("Canvas/testtube").runAction(cc.sequence(cc.moveBy(.5, cc.v2(-300, 0)), cc.delayTime(1), cc.callFunc(function () {
                                        cc.find("Canvas/FinalScreen").active = !0,
                                            n.self.PlaySound("FinalScreen"),
                                            cc.find("Canvas/Next").active = !0
                                    })))
                                })))
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.update = function (e) {
                            var c = this;
                            cc.find("Canvas/Moving").childrenCount > 0 && cc.find("Canvas/Moving").children.forEach(function (e) {
                                if (0 == e.getNumberOfRunningActions() && 255 == e.opacity) {
                                    var n = c.getRandomInt(-300, 300)
                                        , o = c.getRandomInt(-100, 200)
                                        , t = c.getSpeed(e.position, cc.v3(n, o, 0));
                                    e.runAction(cc.moveTo(t, cc.v2(n, o)))
                                }
                            })
                        }
                        ,
                        c.prototype.getSpeed = function (e, c) {
                            return .01 * Math.sqrt(Math.pow(c.x - e.x, 2) + Math.pow(c.y - e.y, 2))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            cc.find("Canvas/Next").active = !1,
                                a.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function () {
                                    cc.director.loadScene("CollectColorRed")
                                })))
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    CollectColorRed: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "e0e57N/tmtLcaq+vDxLC0+f", "CollectColorRed");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.Counter = 3,
                            c.Character = [],
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                cc.director.preloadScene("CollectColorYellow")
                        }
                        ,
                        c.prototype.start = function () {
                            var e = this;
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                cc.find("Canvas/startscreen").getComponent(cc.Animation).on("finished", function () {
                                    cc.find("Canvas/startscreen").getComponent(cc.Animation).off("finished"),
                                        cc.find("Canvas/testtube").active = !0,
                                        cc.find("Canvas/testtube/Number").runAction(cc.scaleTo(.3, .75).easing(cc.easeBounceOut()))
                                });
                            for (var c = 0; c < 7; c++) {
                                cc.find("Canvas/Trees/" + (c + 1)).children.forEach(function (c) {
                                    if (c.getComponent(dragonBones.ArmatureDisplay)) {
                                        e.Character.push(c);
                                        var n = cc.instantiate(cc.find("Canvas/effect_star"));
                                        c.addChild(n),
                                            n.position = cc.Vec3.ZERO,
                                            n.active = !1
                                    }
                                })
                            }
                            this.Character.push(cc.find("Canvas/Trees/1_2_ske"));
                            for (c = 0; c < this.Character.length; c++)
                                this.Character[c].getComponent(dragonBones.ArmatureDisplay).playTimes = 1,
                                    this.Character[c].getComponent(dragonBones.ArmatureDisplay).playAnimation("idle", 50),
                                    this.Character[c].getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, this.animationCompleted, this);
                            n.self.PlaySound("3redapp")
                        }
                        ,
                        c.prototype.animationCompleted = function (e) {
                            console.log(e)
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            for (var o = e.getLocation(), t = (cc.v3(n.self.node.convertToNodeSpaceAR(o)),
                                function (e) {
                                    var c = n.self.Character[e];
                                    if (c && c.getBoundingBoxToWorld().contains(o)) {
                                        if ("1_2_ske" == c.name) {
                                            var t = cc.instantiate(c);
                                            return cc.find("Canvas/Moving").addChild(t),
                                                t.position = n.self.node.convertToNodeSpaceAR(cc.v3(c.getBoundingBoxToWorld().x, c.getBoundingBoxToWorld().y)),
                                                t.runAction(cc.sequence(cc.spawn(cc.scaleTo(.6, 0), cc.callFunc(function () {
                                                    t && t.children[0] && (t.children[0].active = !0),
                                                        n.self.PlaySound("S13")
                                                }), cc.jumpTo(.5, cc.v2(-348, -109), 100, 1)), cc.callFunc(function () {
                                                    n.self.addProgress()
                                                }), cc.removeSelf())),
                                                c.removeFromParent(),
                                                n.self.Character[e] = null,
                                                n.self.PlaySound("red"),
                                                "break"
                                        }
                                        2 == n.self.getRandomInt(1, 5) ? "1_1_ske" == c.name ? n.self.PlaySound("blue") : "1_3_ske" == c.name && n.self.PlaySound("yellow") : n.self.PlaySound("notred")
                                    }
                                }
                            ), a = 0; a < n.self.Character.length; a++) {
                                if ("break" === t(a))
                                    break
                            }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation();
                            cc.v3(n.self.node.convertToNodeSpaceAR(o))
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            var o = e.getLocation();
                            cc.v3(n.self.node.convertToNodeSpaceAR(o))
                        }
                        ,
                        c.prototype.addProgress = function () {
                            this.Counter--,
                                cc.find("Canvas/testtube/3").getComponent(cc.Sprite).fillRange += .25,
                                cc.find("Canvas/Loader/" + this.Counter) && (cc.find("Canvas/testtube/Number").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/" + this.Counter).getComponent(cc.Sprite).spriteFrame),
                                0 == this.Counter && cc.find("Canvas/testtube/Number").runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.2, 0), cc.callFunc(function () {
                                    cc.find("Canvas/testtube").runAction(cc.sequence(cc.moveBy(.5, cc.v2(-300, 0)), cc.delayTime(1), cc.callFunc(function () {
                                        cc.find("Canvas/FinalScreen").active = !0,
                                            n.self.PlaySound("FinalScreen"),
                                            cc.find("Canvas/Next").active = !0
                                    })))
                                })))
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.update = function (e) { }
                        ,
                        c.prototype.getSpeed = function (e, c) {
                            return .01 * Math.sqrt(Math.pow(c.x - e.x, 2) + Math.pow(c.y - e.y, 2))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            cc.find("Canvas/Next").active = !1,
                                a.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function () {
                                    cc.director.loadScene("CollectColorYellow")
                                })))
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    CollectColorYellow: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "b1bf0xzD11PUrOfS/vTBCMx", "CollectColorYellow");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.Counter = 3,
                            c.Character = [],
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                cc.director.preloadScene("LevelScene")
                        }
                        ,
                        c.prototype.start = function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                cc.find("Canvas/startscreen").getComponent(cc.Animation).on("finished", function () {
                                    cc.find("Canvas/startscreen").getComponent(cc.Animation).off("finished"),
                                        cc.find("Canvas/testtube").active = !0,
                                        cc.find("Canvas/testtube/Number").runAction(cc.scaleTo(.3, .75).easing(cc.easeBounceOut())),
                                        n.self.addCharacter(),
                                        n.self.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
                                            n.self.addCharacter()
                                        }))))
                                }),
                                cc.find("Canvas/startscreen").active = !0,
                                n.self.PlaySound("3yellowcolorneededhere")
                        }
                        ,
                        c.prototype.addCharacter = function () {
                            var e = cc.instantiate(cc.find("Canvas/Character/3_" + this.getRandomInt(1, 3) + "_ske"));
                            cc.find("Canvas/MoveCharacter").addChild(e),
                                e.position = cc.v3(e.position.x, this.getRandomInt(-200, 150)),
                                e.zIndex = (e.position.y,
                                    400 - e.position.y);
                            var c = this.getSpeed(e.position, cc.v3(700, e.position.y, 0));
                            e.runAction(cc.sequence(cc.moveBy(c, cc.v2(1300, 0)), cc.removeSelf()))
                        }
                        ,
                        c.prototype.animationCompleted = function (e) {
                            console.log(e)
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation();
                            cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (!cc.find("Canvas/net").active)
                                for (var t = cc.find("Canvas/MoveCharacter").children, a = function (e) {
                                    var c = t[e];
                                    if (c && c.getBoundingBoxToWorld().contains(o)) {
                                        if ("3_3_ske" == c.name)
                                            return n.self.PlaySound("S26"),
                                                n.self.PlaySound("yellow"),
                                                cc.find("Canvas/net").position = c.position,
                                                c.stopAllActions(),
                                                c.runAction(cc.sequence(cc.callFunc(function () {
                                                    c && c.children[0] && (c.children[0].active = !0),
                                                        n.self.PlaySound("S13")
                                                }), cc.spawn(cc.scaleTo(.6, 0), cc.jumpTo(.5, cc.v2(-348, -109), 100, 1)), cc.callFunc(function () {
                                                    n.self.addProgress()
                                                }), cc.removeSelf())),
                                                n.self.NetAnimation(c),
                                                "break";
                                        n.self.PlaySound("S25"),
                                            2 == n.self.getRandomInt(1, 2) && ("3_1_ske" == c.name ? n.self.PlaySound("blue") : "3_2_ske" == c.name && n.self.PlaySound("red")),
                                            cc.find("Canvas/net").position = c.position,
                                            n.self.NetAnimation(c)
                                    }
                                }, i = 0; i < t.length; i++) {
                                    if ("break" === a(i))
                                        break
                                }
                        }
                        ,
                        c.prototype.NetAnimation = function (e) {
                            cc.find("Canvas/net/Character").children.forEach(function (c) {
                                c.active = !1,
                                    c.name == e.name && (c.active = !0)
                            }),
                                e.active = !1,
                                cc.find("Canvas/net").active = !0,
                                cc.find("Canvas/net").getComponent(cc.Animation).play("NetAnimationYellow"),
                                cc.find("Canvas/net").getComponent(cc.Animation).on("finished", function () {
                                    cc.find("Canvas/net").getComponent(cc.Animation).off("finished"),
                                        cc.find("Canvas/net").active = !1,
                                        e.active = !0
                                })
                        }
                        ,
                        c.prototype.addProgress = function () {
                            this.Counter--,
                                cc.find("Canvas/testtube/6").getComponent(cc.Sprite).fillRange += .222,
                                cc.find("Canvas/Loader/" + this.Counter) && (cc.find("Canvas/testtube/Number").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/" + this.Counter).getComponent(cc.Sprite).spriteFrame),
                                0 == this.Counter && cc.find("Canvas/testtube/Number").runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.2, 0), cc.callFunc(function () {
                                    cc.find("Canvas/testtube").runAction(cc.sequence(cc.moveBy(.5, cc.v2(-300, 0)), cc.delayTime(1), cc.callFunc(function () {
                                        cc.find("Canvas/FinalScreen").active = !0,
                                            n.self.PlaySound("wecoolectedallcolor"),
                                            n.self.PlaySound("FinalScreen"),
                                            cc.find("Canvas/Next").active = !0
                                    })))
                                })))
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.update = function (e) { }
                        ,
                        c.prototype.getSpeed = function (e, c) {
                            return .02 * Math.sqrt(Math.pow(c.x - e.x, 2) + Math.pow(c.y - e.y, 2))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            cc.find("Canvas/Next").active = !1,
                                a.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function () {
                                    cc.director.loadScene("LevelScene")
                                })))
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    DrawPercentage: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "dbfc7Ck4kFKMptM278hqBc7", "DrawPercentage");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , i = a.ccclass
            , r = (a.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.UserImage = null,
                            c.UserTexture = null,
                            c.UserCanvas = null,
                            c.UserSpriteFrame = null,
                            c.UserContext = null,
                            c.UserImgData = null,
                            c.DrawNode = null,
                            c.CanvasWidth = 800,
                            c.CanvasHeight = 504,
                            c.OutlineNode = null,
                            c.BrushContent = 40,
                            c.TotalPixelToDraw = 0,
                            c
                    }
                    return o(c, e),
                        c.prototype.onLoadUser = function (e, c) {
                            this.OutlineNode = e,
                                this.DrawNode = c,
                                this.UserSpriteFrame = new cc.SpriteFrame,
                                this.UserTexture = new cc.Texture2D,
                                this.UserCanvas = document.createElement("canvas"),
                                this.UserContext = this.UserCanvas.getContext("2d"),
                                this.UserCanvas.width = this.CanvasWidth,
                                this.UserCanvas.height = this.CanvasHeight;
                            var n = new Image
                                , o = this;
                            n.onload = function () {
                                o.UserContext.drawImage(n, o.OutlineNode.position.x - o.OutlineNode.getContentSize().width / 2, 504 - o.OutlineNode.position.y - o.OutlineNode.getContentSize().height / 2),
                                    o.ProcessingData()
                            }
                                ,
                                n.src = this.OutlineNode.getComponent(cc.Sprite).spriteFrame.getTexture().url
                        }
                        ,
                        c.prototype.ProcessingData = function () {
                            var e = this.UserContext.getImageData(0, 0, this.CanvasWidth, this.CanvasHeight);
                            this.UserImgData = e.data;
                            for (var c = 0; c < this.UserImgData.length; c += 4)
                                this.UserImgData[c + 3] > 200 && this.TotalPixelToDraw++;
                            this.UserContext.globalCompositeOperation = "destination-out",
                                console.log("this.TotalPixelToDraw" + this.TotalPixelToDraw)
                        }
                        ,
                        c.prototype.TouchMove = function (e, c) {
                            var n = e.getLocation()
                                , o = e.getPreviousLocation();
                            n.y = 504 - n.y,
                                o.y = 504 - o.y;
                            for (var t, a = this.distanceBetween2Points(n, o), i = this.angleBetween2Points(n, o), r = 0, s = 0; s < a || 0 == s; s += 5) {
                                t = n.x + Math.sin(i) * s + c.x,
                                    r = n.y + Math.cos(i) * s + c.y;
                                var l = this.UserContext.createRadialGradient(t, r, 0, t, r, this.BrushContent);
                                l.addColorStop(.2, "rgba(255,0,0,0.5)"),
                                    l.addColorStop(.5, "rgba(255,0,0,0.2)"),
                                    l.addColorStop(1, "rgba(255,0,0,0.0)"),
                                    this.UserContext.fillStyle = l,
                                    this.UserContext.fillRect(t - this.BrushContent, r - this.BrushContent, t + this.BrushContent, r + this.BrushContent)
                            }
                        }
                        ,
                        c.prototype.getPercentage = function () {
                            var e, c = 0, n = this.UserContext.getImageData(0, 0, this.CanvasWidth, this.CanvasHeight);
                            this.UserImgData = n.data;
                            for (var o = 0; o < this.UserImgData.length; o += 4)
                                this.UserImgData[o + 3] > 200 && c++;
                            return e = 100 - 100 * c / this.TotalPixelToDraw,
                                console.log("pixel " + c),
                                e
                        }
                        ,
                        c.prototype.getangle = function (e, c, n, o) {
                            return Math.atan2(o - c, n - e)
                        }
                        ,
                        c.prototype.distanceBetween2Points = function (e, c) {
                            var n = c.x - e.x
                                , o = c.y - e.y;
                            return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
                        }
                        ,
                        c.prototype.angleBetween2Points = function (e, c) {
                            var n = c.x - e.x
                                , o = c.y - e.y;
                            return Math.atan2(n, o)
                        }
                        ,
                        c = t([i], c)
                }(cc.Component));
        n.default = r,
            cc._RF.pop()
    }
        , {}],
    FloodFill: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "e0990HoPUVL86kkmLQvzSOX", "FloodFill");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , i = a.ccclass
            , r = (a.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.UserImage = null,
                            c.UserTexture = null,
                            c.UserCanvas = null,
                            c.UserSpriteFrame = null,
                            c.UserContext = null,
                            c.UserImgData = null,
                            c.DrawNode = null,
                            c.CanvasWidth = 800,
                            c.CanvasHeight = 504,
                            c.BrushContent = 40,
                            c
                    }
                    return o(c, e),
                        c.prototype.onLoadUser = function (e) {
                            this.DrawNode = e,
                                this.CanvasWidth = this.DrawNode.width,
                                this.CanvasHeight = this.DrawNode.height,
                                this.UserSpriteFrame = new cc.SpriteFrame,
                                this.UserTexture = new cc.Texture2D,
                                this.UserCanvas = document.createElement("canvas"),
                                this.UserContext = this.UserCanvas.getContext("2d"),
                                this.UserCanvas.width = this.CanvasWidth,
                                this.UserCanvas.height = this.CanvasHeight
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c + 1),
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.setTexture = function (e) {
                            this.UserTexture.initWithData(e, cc.Texture2D.PixelFormat.RGBA8888, this.CanvasWidth, this.CanvasHeight),
                                this.UserSpriteFrame.setTexture(this.UserTexture),
                                this.DrawNode.getComponent(cc.Sprite).spriteFrame = this.UserSpriteFrame
                        }
                        ,
                        c.prototype.TouchMove = function (e, c, n) {
                            var o = e.getLocation()
                                , t = e.getPreviousLocation();
                            o.y = 504 - o.y,
                                t.y = 504 - t.y;
                            for (var a, i = this.distanceBetween2Points(o, t), r = this.angleBetween2Points(o, t), s = 0, l = 0; l < i || 0 == l; l += 5) {
                                a = o.x + Math.sin(r) * l + n.x,
                                    s = o.y + Math.cos(r) * l + n.y;
                                var d = this.UserContext.createRadialGradient(a, s, 0, a, s, this.BrushContent);
                                d.addColorStop(.5, "rgba(" + c.r + "," + c.g + "," + c.b + ",0.5)"),
                                    d.addColorStop(.7, "rgba(" + c.r + "," + c.g + "," + c.b + ",0.2)"),
                                    d.addColorStop(1, "rgba(" + c.r + "," + c.g + "," + c.b + ",0.0)"),
                                    this.UserContext.fillStyle = d,
                                    this.UserContext.fillRect(a - this.BrushContent, s - this.BrushContent, a + this.BrushContent, s + this.BrushContent)
                            }
                            this.UserTexture.initWithData(this.UserContext.getImageData(0, 0, this.CanvasWidth, this.CanvasHeight), cc.Texture2D.PixelFormat.RGBA8888, this.CanvasWidth, this.CanvasHeight),
                                this.UserSpriteFrame.setTexture(this.UserTexture),
                                this.DrawNode.getComponent(cc.Sprite).spriteFrame = this.UserSpriteFrame
                        }
                        ,
                        c.prototype.getangle = function (e, c, n, o) {
                            return Math.atan2(o - c, n - e)
                        }
                        ,
                        c.prototype.distanceBetween2Points = function (e, c) {
                            var n = c.x - e.x
                                , o = c.y - e.y;
                            return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2))
                        }
                        ,
                        c.prototype.angleBetween2Points = function (e, c) {
                            var n = c.x - e.x
                                , o = c.y - e.y;
                            return Math.atan2(n, o)
                        }
                        ,
                        c = t([i], c)
                }(cc.Component));
        n.default = r,
            cc._RF.pop()
    }
        , {}],
    Globe1: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "329752tQJdM+LFrQUzMpxeP", "Globe1");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.ColorCounter = 0,
                            c.PickItemName = null,
                            c.Arrow = null,
                            c.ISLOCKUSER = !1,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.Arrow = cc.find("Canvas/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, 20)), cc.moveBy(.2, cc.v2(0, -20))))),
                                this.Arrow.active = !1
                        }
                        ,
                        c.prototype.start = function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                                    n.self.PlaySound("S25")
                                }), cc.moveTo(1, cc.v2(-151, 165)))),
                                this.PlaySound("Globe1Start"),
                                this.node.runAction(cc.sequence(cc.delayTime(7), cc.callFunc(function () {
                                    n.self.PlaySound("choosetwocolortopour")
                                }))),
                                cc.find("Canvas/2").runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                                    n.self.PlaySound("S25")
                                }), cc.moveTo(1, cc.v2(240, -56)).easing(cc.easeBackOut())))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (!n.self.ISLOCKUSER && (0 == n.self.ToolSequence || 1 == n.self.ToolSequence && 0 == cc.find("Canvas/MoveTool").childrenCount))
                                for (var a = 0; a < 4; a++) {
                                    var i = cc.find("Canvas/2/TestTube_" + (a + 1));
                                    if (i && i.active && i.getBoundingBoxToWorld().contains(o) && 0 == cc.find("Canvas/MoveTool").childrenCount) {
                                        n.self.CanMove = !0,
                                            i.active = !1;
                                        var r = cc.instantiate(i);
                                        cc.find("Canvas/MoveTool").addChild(r),
                                            r.active = !0,
                                            r.position = t,
                                            n.self.MoveTool = r,
                                            r.scale = .5,
                                            n.self.PickItemName = i.name,
                                            n.self.PlaySound("Pick"),
                                            n.self.Arrow.active = !0;
                                        break
                                    }
                                }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence && n.self.CanMove) {
                                if (n.self.MoveTool.position = t,
                                    n.self.MoveTool.position.fuzzyEquals(cc.v3(-111, 45, 0), 80)) {
                                    n.self.CanMove = !1,
                                        n.self.Arrow.active = !1,
                                        cc.find("Canvas/1/TestTube_2").active = !0;
                                    var a = n.self.MoveTool.getChildByName("6").color;
                                    if (cc.find("Canvas/1/TestTube_2/6").color = a,
                                        cc.find("Canvas/1/TestTube_2/1").color = a,
                                        n.self.PlaySound("S32"),
                                        "TestTube_1" == n.self.MoveTool.name ? n.self.PlaySound("yellow") : "TestTube_2" == n.self.MoveTool.name ? n.self.PlaySound("red") : "TestTube_3" == n.self.MoveTool.name ? n.self.PlaySound("blue") : "TestTube_4" == n.self.MoveTool.name && n.self.PlaySound("white"),
                                        cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).play("PourLiquid"),
                                        cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).on("finished", function () {
                                            n.self.StopSound("S32"),
                                                cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).off("finished"),
                                                cc.find("Canvas/1/TestTube_2").active = !1,
                                                n.self.MoveTool.active = !0,
                                                n.self.MoveTool.getChildByName("6").removeFromParent(),
                                                n.self.MoveTool.runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)), cc.removeSelf()))
                                        }),
                                        0 == n.self.ColorCounter)
                                        n.self.ColorCounter = 1,
                                            cc.find("Canvas/1/3_2").color = a,
                                            cc.find("Canvas/1/3_2").active = !0,
                                            cc.find("Canvas/1/3_2").getComponent(cc.Sprite).fillRange = 0,
                                            cc.find("Canvas/1").getComponent(cc.Animation).play("Progress1"),
                                            cc.find("Canvas/board/colorsplash1").active = !0,
                                            cc.find("Canvas/board/colorsplash1").color = a;
                                    else {
                                        cc.find("Canvas/board/colorsplash2").active = !0,
                                            cc.find("Canvas/board/Plus").active = !0,
                                            cc.find("Canvas/board/Equal").active = !0,
                                            cc.find("Canvas/board/colorsplash2").color = a,
                                            n.self.ISLOCKUSER = !0;
                                        var i = cc.find("Canvas/1/3_2").color;
                                        cc.find("Canvas/1/2_2").active = !0,
                                            cc.find("Canvas/1/3_2").active = !1,
                                            cc.find("Canvas/1/2_2").color = i;
                                        var r = cc.color((i.r + a.r) / 2, (i.g + a.g) / 2, (i.b + a.b) / 2);
                                        cc.find("Canvas/FinalScreen/1/2_2").color = r,
                                            cc.find("Canvas/board/Answer").color = r,
                                            cc.find("Canvas/1/2_2").runAction(cc.sequence(cc.delayTime(.5), cc.tintTo(1, r.r, r.g, r.b), cc.callFunc(function () {
                                                cc.find("Canvas/board/Answer").active = !0,
                                                    cc.find("Canvas/Rain").active = !0,
                                                    cc.find("Canvas/1/BottleParticle").active = !0,
                                                    cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(.5), cc.moveBy(.5, cc.v2(0, 300)), cc.callFunc(function () {
                                                        cc.find("Canvas/1").getComponent(cc.Animation).play("AfterColorAnim"),
                                                            n.self.PlaySound("S23"),
                                                            cc.find("Canvas/board").children.forEach(function (e) {
                                                                e.active = !1
                                                            }),
                                                            cc.find("Canvas/1").getComponent(cc.Animation).on("finished", function () {
                                                                n.self.ColorCounter = 0,
                                                                    n.self.ToolSequence = 1,
                                                                    n.self.ISLOCKUSER = !1,
                                                                    cc.find("Canvas/1/BottleParticle").active = !1,
                                                                    cc.find("Canvas/1").getComponent(cc.Animation).off("finished"),
                                                                    cc.find("Canvas/2").getComponent(cc.Animation).play("EntryTestTube"),
                                                                    cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(2), cc.moveTo(1, cc.v2(-151, 165)))),
                                                                    cc.find("Canvas/2").getComponent(cc.Animation).on("finished", function () {
                                                                        n.self.PlaySound("choosetwocolortopour")
                                                                    })
                                                            })
                                                    })))
                                            }))),
                                            cc.find("Canvas/1").getComponent(cc.Animation).play("Progress2")
                                    }
                                    n.self.MoveTool.active = !1
                                }
                            } else if (1 == n.self.ToolSequence && n.self.CanMove && (n.self.MoveTool.position = t,
                                n.self.MoveTool.position.fuzzyEquals(cc.v3(-111, 45, 0), 80))) {
                                n.self.CanMove = !1,
                                    n.self.Arrow.active = !1,
                                    cc.find("Canvas/1/TestTube_2").active = !0;
                                a = n.self.MoveTool.getChildByName("6").color;
                                if (cc.find("Canvas/1/TestTube_2/6").color = a,
                                    cc.find("Canvas/1/TestTube_2/1").color = a,
                                    n.self.PlaySound("S32"),
                                    "TestTube_1" == n.self.MoveTool.name ? n.self.PlaySound("yellow") : "TestTube_2" == n.self.MoveTool.name ? n.self.PlaySound("red") : "TestTube_3" == n.self.MoveTool.name ? n.self.PlaySound("blue") : "TestTube_4" == n.self.MoveTool.name && n.self.PlaySound("white"),
                                    cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).play("PourLiquid"),
                                    cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).on("finished", function () {
                                        n.self.StopSound("S32"),
                                            cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).off("finished"),
                                            cc.find("Canvas/1/TestTube_2").active = !1,
                                            n.self.MoveTool.active = !0,
                                            n.self.MoveTool.getChildByName("6").removeFromParent(),
                                            n.self.MoveTool.runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)), cc.removeSelf()))
                                    }),
                                    0 == n.self.ColorCounter)
                                    n.self.ColorCounter = 1,
                                        cc.find("Canvas/1/3_2").color = a,
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("Progress1"),
                                        cc.find("Canvas/board/colorsplash1").active = !0,
                                        cc.find("Canvas/board/colorsplash1").color = a;
                                else {
                                    cc.find("Canvas/board/colorsplash2").active = !0,
                                        cc.find("Canvas/board/Plus").active = !0,
                                        cc.find("Canvas/board/Equal").active = !0,
                                        cc.find("Canvas/board/colorsplash2").color = a,
                                        n.self.ISLOCKUSER = !0;
                                    i = cc.find("Canvas/1/3_2").color;
                                    cc.find("Canvas/1/3_2").active = !1,
                                        cc.find("Canvas/1/2_2").color = i;
                                    r = cc.color((i.r + a.r) / 2, (i.g + a.g) / 2, (i.b + a.b) / 2);
                                    cc.find("Canvas/FinalScreen/2/2_2").color = r,
                                        cc.find("Canvas/board/Answer").color = r,
                                        cc.find("Canvas/1/2_2").runAction(cc.sequence(cc.tintTo(1.5, r.r, r.g, r.b), cc.callFunc(function () {
                                            cc.find("Canvas/board/Answer").active = !0,
                                                cc.find("Canvas/1/BottleParticle").active = !0,
                                                cc.find("Canvas/1/BottleParticle").getComponent(cc.ParticleSystem).resetSystem(),
                                                cc.find("Canvas/Rain").getComponent(cc.ParticleSystem).resetSystem(),
                                                cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(.5), cc.moveBy(.5, cc.v2(0, 300)), cc.callFunc(function () {
                                                    cc.find("Canvas/1").getComponent(cc.Animation).play("AfterColorLast"),
                                                        n.self.PlaySound("S23"),
                                                        cc.find("Canvas/1").getComponent(cc.Animation).on("finished", function () {
                                                            n.self.ColorCounter = 0,
                                                                cc.find("Canvas/FinalScreen").active = !0,
                                                                cc.find("Canvas/1/BottleParticle").active = !1,
                                                                n.self.PlaySound("FinalScreen"),
                                                                cc.find("Canvas/FinalScreen/Final2/1/3").color = cc.find("Canvas/FinalScreen/1/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/1/4").color = cc.find("Canvas/FinalScreen/1/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/2/3").color = cc.find("Canvas/FinalScreen/2/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/2/4").color = cc.find("Canvas/FinalScreen/2/2_2").color
                                                        })
                                                })))
                                        }))),
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("Progress2")
                                }
                                n.self.MoveTool.active = !1
                            }
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            n.self.CanMove && (n.self.CanMove = !1,
                                0 == n.self.ToolSequence ? (n.self.Arrow.active = !1,
                                    cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/2/" + n.self.PickItemName).active = !0) : 1 == n.self.ToolSequence && (n.self.Arrow.active = !1,
                                        cc.find("Canvas/MoveTool").removeAllChildren(),
                                        cc.find("Canvas/2/" + n.self.PickItemName).active = !0))
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                this.PlaySound("TapSound"),
                                a.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Globe_2")
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Globe2: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "044c6W1OpVKYIXOBJEP4Frv", "Globe2");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./FloodFill")
            , i = e("./DrawPercentage")
            , r = e("./Promotion")
            , s = cc._decorator
            , l = s.ccclass
            , d = (s.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.ColorCode = [],
                            c.StepPosition = [],
                            c.PictureColorNumber = [],
                            c.SelectedColorCode = null,
                            c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.DrawingObj = [],
                            c.DrawingPercentageObj = [],
                            c.SelectedStep = 0,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.SelectedColorCode = cc.Color.RED,
                                this.ColorCode[0] = cc.color(255, 105, 47),
                                this.ColorCode[1] = cc.color(0, 152, 36),
                                this.ColorCode[2] = cc.color(125, 10, 185),
                                this.ColorCode[3] = cc.color(255, 137, 200),
                                this.ColorCode[4] = cc.color(0, 217, 252),
                                this.ColorCode[5] = cc.color(255, 157, 44),
                                this.ColorCode[6] = cc.color(80, 250, 82),
                                this.ColorCode[7] = cc.color(227, 76, 245),
                                this.ColorCode[8] = cc.color(255, 255, 97),
                                this.ColorCode[9] = cc.color(46, 46, 46);
                            for (var e = 1; e <= 10; e++)
                                cc.find("Canvas/ColorPanel/view/content/" + e).getChildByName("3").color = this.ColorCode[e - 1],
                                    cc.find("Canvas/ColorPanel/view/content/" + e).getChildByName("4").color = this.ColorCode[e - 1];
                            for (e = 0; e < 6; e++)
                                this.StepPosition[e] = cc.v2(cc.find("Canvas/Step" + (e + 1)).position),
                                    this.DrawingObj[e] = new a.default,
                                    this.DrawingObj[e].onLoadUser(cc.find("Canvas/Step" + (e + 1) + "/2/Mask/Drawing")),
                                    this.DrawingPercentageObj[e] = new i.default,
                                    this.DrawingPercentageObj[e].onLoadUser(cc.find("Static/S" + (e + 1)), null);
                            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                                n.self.Entry(),
                                    n.self.PlaySound("GlobeColor"),
                                    cc.find("Canvas/bord").runAction(cc.sequence(cc.delayTime(.9), cc.moveTo(.3, cc.v2(142, 113)))),
                                    cc.find("Canvas/ColorPanel").runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.3, cc.v2(328, -44))))
                            })));
                            for (e = 0; e < 9; e++)
                                this.PictureColorNumber[e] = e;
                            this.shuffle(this.PictureColorNumber)
                        }
                        ,
                        c.prototype.shuffle = function (e) {
                            e.sort(function () {
                                return Math.random() - Math.random()
                            })
                        }
                        ,
                        c.prototype.start = function () {
                            cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd)
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence) {
                                n.self.SelectedColorCode;
                                for (var a = 1; a <= 10; a++)
                                    if (cc.find("Canvas/ColorPanel/view/content/" + a + "/3").getBoundingBoxToWorld().contains(o)) {
                                        if (!n.self.isPickTool(a))
                                            return cc.find("Canvas/ColorPanel/view/content/" + a).runAction(cc.repeat(cc.sequence(cc.rotateTo(.2, 5), cc.rotateTo(.2, -5)), 2)),
                                                void (2 == n.self.getRandomInt(1, 5) ? n.self.PlaySound("notcoreect") : n.self.PlaySound("S25"));
                                        n.self.PlaySound("Pick"),
                                            n.self.CanMove = !0,
                                            cc.find("Canvas/ColorPanel/view/content/" + a).active = !1,
                                            cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !1;
                                        var i = cc.instantiate(cc.find("Canvas/Loader/Gun"));
                                        cc.find("Canvas/MoveTool").addChild(i),
                                            i.position = t,
                                            i.getChildByName("3").color = n.self.ColorCode[a - 1],
                                            i.getChildByName("4").color = n.self.ColorCode[a - 1];
                                        var r = i.getChildByName("ColorSpray");
                                        r.getComponent(cc.ParticleSystem).startColor = n.self.ColorCode[a - 1],
                                            r.getComponent(cc.ParticleSystem).endColor = n.self.ColorCode[a - 1],
                                            i.name = a.toString(),
                                            n.self.MoveTool = i;
                                        break
                                    }
                            }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            0 == n.self.ToolSequence && n.self.CanMove && (0 == cc.find("Canvas/SoundNode/SprayColor").getComponent(cc.AudioSource).isPlaying && n.self.PlaySound("SprayColor"),
                                n.self.MoveTool.position = t,
                                n.self.DrawingObj[n.self.SelectedStep].TouchMove(e, n.self.SelectedColorCode, cc.v2(-100, 0)),
                                n.self.DrawingPercentageObj[n.self.SelectedStep].TouchMove(e, cc.v2(-100, 0)))
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            if (!n.self.CanMove)
                                return !1;
                            n.self.CanMove = !1,
                                0 == n.self.ToolSequence && (n.self.StopSound("SprayColor"),
                                    cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !0,
                                    cc.find("Canvas/ColorPanel/view/content").children.forEach(function (e) {
                                        e.active = !0
                                    }),
                                    n.self.DrawingPercentageObj[n.self.SelectedStep].getPercentage() > 95 && (n.self.addParticle(),
                                        n.self.PlaySound("S113"),
                                        n.self.ToolSequence = -1,
                                        cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 1)),
                                        cc.find("Canvas/Step" + (n.self.SelectedStep + 1)).runAction(cc.sequence(cc.delayTime(.5), cc.jumpBy(.5, cc.v2(0, -500), 300, 1), cc.callFunc(function () {
                                            cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)) && cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/2").runAction(cc.scaleTo(.2, 0)),
                                                n.self.Entry()
                                        })))))
                        }
                        ,
                        c.prototype.addParticle = function () {
                            var e = cc.instantiate(cc.find("Canvas/Loader/select"));
                            this.node.addChild(e),
                                e.position = cc.v3(-141, 0, 0),
                                e.active = !0
                        }
                        ,
                        c.prototype.isPickTool = function (e) {
                            var c = cc.find("Canvas/ColorPanel/view/content/" + e + "/3")
                                , o = cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/2/Mask/Drawing");
                            return c.color.r == o.color.r && c.color.g == o.color.g && c.color.b == o.color.b
                        }
                        ,
                        c.prototype.Entry = function () {
                            var e = this.getRandomInt(1, 6);
                            if (255 == cc.find("Canvas/Step" + e).opacity)
                                cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 0)),
                                    cc.find("Canvas/Step" + e).stopAllActions(),
                                    cc.find("Canvas/Step" + e).opacity = 254,
                                    cc.find("Canvas/Step" + e).active = !0,
                                    n.self.SelectedStep = e - 1,
                                    cc.find("Canvas/Step" + e).position = cc.v3(-500, this.StepPosition[e - 1].y),
                                    cc.find("Canvas/Step" + e).runAction(cc.sequence(cc.moveTo(.5, this.StepPosition[e - 1]), cc.callFunc(function () {
                                        n.self.EntryColor(e - 1),
                                            n.self.ToolSequence = 0
                                    })));
                            else {
                                for (var c = !1, o = 0; o < 6; o++)
                                    if (255 == cc.find("Canvas/Step" + (o + 1)).opacity) {
                                        cc.find("Canvas/Step" + (o + 1)).stopAllActions(),
                                            c = !0;
                                        break
                                    }
                                c ? this.Entry() : (console.log("done all"),
                                    this.PlaySound("ToolDone2"),
                                    cc.find("Canvas/ColorPanel").runAction(cc.moveBy(.5, cc.v2(500, 0))),
                                    cc.find("Canvas/bord").runAction(cc.moveBy(.5, cc.v2(0, 300))),
                                    cc.find("Canvas/bord/right").active = !1,
                                    cc.find("Canvas/Next").active = !0,
                                    cc.find("Canvas/StarParticle").active = !0)
                            }
                        }
                        ,
                        c.prototype.EntryColor = function (e) {
                            this.SelectedColorCode = this.ColorCode[e],
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)).active = !0,
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/2/Mask/Drawing").color = this.SelectedColorCode,
                                console.log(n.self.SelectedStep + 1),
                                cc.sys.localStorage.setItem("R_Step_" + (n.self.SelectedStep + 1), this.SelectedColorCode.r),
                                cc.sys.localStorage.setItem("G_Step_" + (n.self.SelectedStep + 1), this.SelectedColorCode.g),
                                cc.sys.localStorage.setItem("B_Step_" + (n.self.SelectedStep + 1), this.SelectedColorCode.b)
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                this.PlaySound("TapSound"),
                                r.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Globe_3")
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([l], c)
                }(cc.Component));
        n.default = d,
            cc._RF.pop()
    }
        , {
        "./DrawPercentage": "DrawPercentage",
        "./FloodFill": "FloodFill",
        "./Promotion": "Promotion"
    }],
    Globe3: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "e4aa3p5MuxDJ4bXqxspkZ4n", "Globe3");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , i = a.ccclass
            , r = (a.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.ColorCode = [],
                            c.SelectedSticker = 0,
                            c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = -1,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.ColorCode[0] = cc.color(255, 105, 47),
                                this.ColorCode[1] = cc.color(0, 152, 36),
                                this.ColorCode[2] = cc.color(125, 10, 185),
                                this.ColorCode[3] = cc.color(255, 137, 200),
                                this.ColorCode[4] = cc.color(0, 217, 252),
                                this.ColorCode[5] = cc.color(255, 157, 44),
                                this.ColorCode[6] = cc.color(80, 250, 82),
                                this.ColorCode[7] = cc.color(227, 76, 245),
                                this.ColorCode[8] = cc.color(255, 255, 97),
                                this.ColorCode[9] = cc.color(46, 46, 46),
                                this.shuffle(this.ColorCode);
                            for (var e = 1; e <= 6; e++) {
                                var c = parseInt(cc.sys.localStorage.getItem("R_Step_" + e))
                                    , o = parseInt(cc.sys.localStorage.getItem("G_Step_" + e))
                                    , t = parseInt(cc.sys.localStorage.getItem("B_Step_" + e));
                                cc.find("Canvas/Entry/Step" + e + "/Mask/Drawing").color = cc.color(c, o, t)
                            }
                        }
                        ,
                        c.prototype.shuffle = function (e) {
                            e.sort(function () {
                                return Math.random() - Math.random()
                            })
                        }
                        ,
                        c.prototype.start = function () {
                            cc.find("Canvas/panel").position.x = 600,
                                cc.find("Canvas/Entry").getComponent(cc.Animation).on("finished", function () {
                                    cc.find("Canvas/Entry").getComponent(cc.Animation).off("finished"),
                                        cc.find("Canvas/Entry").runAction(cc.sequence(cc.delayTime(.3), cc.moveTo(.5, cc.v2(-176, -32)), cc.callFunc(function () {
                                            n.self.PanelEntry(),
                                                n.self.PlaySound("decorate")
                                        })))
                                }),
                                this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd)
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence)
                                for (var a = 0; a < 3; a++) {
                                    var i = cc.find("Canvas/panel/" + n.self.SelectedSticker + "/" + (a + 1));
                                    if (i && i.getBoundingBoxToWorld().contains(o)) {
                                        if (!n.self.isPick(i))
                                            return n.self.PlaySound("wrong"),
                                                void i.runAction(cc.repeat(cc.sequence(cc.rotateTo(.2, 5), cc.rotateTo(.2, -5)), 2));
                                        n.self.PlaySound("Pick"),
                                            n.self.CanMove = !0,
                                            i.active = !1;
                                        var r = cc.instantiate(i);
                                        cc.find("Canvas/MoveTool").addChild(r),
                                            r.position = t,
                                            n.self.MoveTool = r,
                                            r.active = !0;
                                        break
                                    }
                                }
                            else
                                1 == n.self.ToolSequence && cc.find("Canvas/Monster/SwitchIntersect").getBoundingBoxToWorld().contains(o) && (n.self.CanMove = !0,
                                    cc.find("Canvas/Monster/Hand").active = !1,
                                    cc.find("Canvas/Entry").getComponent(cc.Animation).resume(),
                                    cc.find("Canvas/Monster").getComponent(cc.Animation).play("MonsterRunning"),
                                    cc.find("Canvas/Entry/Sticker/GlobePart1").active = !0,
                                    cc.find("Canvas/Entry/Sticker/GlobePart2").active = !0,
                                    cc.find("Canvas/Entry/Sticker/GlobePart3").active = !0,
                                    cc.find("Canvas/Entry/Sticker/GlobePart1").getComponent(cc.ParticleSystem).resetSystem(),
                                    cc.find("Canvas/Entry/Sticker/GlobePart2").getComponent(cc.ParticleSystem).resetSystem(),
                                    cc.find("Canvas/Entry/Sticker/GlobePart3").getComponent(cc.ParticleSystem).resetSystem(),
                                    n.self.PlaySound("S81"),
                                    cc.find("Canvas/Entry").getComponent(cc.Animation).on("finished", function () {
                                        n.self.StopSound("S81"),
                                            n.self.ToolSequence = 2,
                                            n.self.CanMove = !1,
                                            cc.find("Canvas/Entry/progress1").active = !1,
                                            cc.find("Canvas/Entry/Sticker/GlobePart1").getComponent(cc.ParticleSystem).stopSystem(),
                                            cc.find("Canvas/Entry/Sticker/GlobePart2").getComponent(cc.ParticleSystem).stopSystem(),
                                            cc.find("Canvas/Entry/Sticker/GlobePart3").getComponent(cc.ParticleSystem).stopSystem(),
                                            cc.find("Canvas/Monster").getComponent(cc.Animation).stop("MonsterRunning"),
                                            cc.find("Canvas/Monster").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/_0000s_0017_1").getComponent(cc.Sprite).spriteFrame,
                                            cc.find("Canvas/Monster").runAction(cc.moveTo(.5, cc.v2(700, 0)));
                                        var e = cc.instantiate(cc.find("Canvas/Entry"));
                                        cc.find("Canvas/FinalScreen").addChild(e),
                                            e.scale = .7,
                                            e.position = cc.Vec3.ZERO,
                                            e.removeComponent(cc.Animation),
                                            cc.find("Canvas/Entry").runAction(cc.sequence(cc.delayTime(1), cc.moveTo(.5, cc.v2(-800, 0)), cc.callFunc(function () {
                                                cc.find("Canvas/FinalScreen").active = !0,
                                                    n.self.PlaySound("FinalScreen"),
                                                    cc.find("Canvas/FinalScreen/effect_welldone_sahua").zIndex = 100,
                                                    cc.find("Canvas/promotion").position = cc.Vec3.ZERO,
                                                    cc.find("Canvas/logo").active = !1,
                                                    cc.find("Canvas/more").active = !1
                                            })))
                                    }))
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence && n.self.CanMove) {
                                n.self.MoveTool.position = t;
                                for (var a = 0; a < 4; a++) {
                                    var i = cc.find("Canvas/Entry/Hint/" + (a + 1));
                                    if (i.active && i.getBoundingBoxToWorld().contains(o)) {
                                        i.active = !1,
                                            n.self.CanMove = !1;
                                        var r = cc.instantiate(cc.find("Canvas/ItemStar"));
                                        r.position = i.position,
                                            i.parent.addChild(r),
                                            r.active = !0,
                                            n.self.PlaySound("ToolDone"),
                                            cc.find("Canvas/Entry/Sticker/" + (a + 1)).active = !0,
                                            cc.find("Canvas/Entry/Sticker/" + (a + 1)).getComponent(cc.Sprite).spriteFrame = n.self.MoveTool.getComponent(cc.Sprite).spriteFrame,
                                            cc.find("Canvas/Entry/Sticker/" + (a + 1)).color = n.self.MoveTool.color,
                                            cc.find("Canvas/Entry/Sticker/" + (a + 1)).getChildByName("1").getComponent(cc.Sprite).spriteFrame = n.self.MoveTool.getChildByName("1").getComponent(cc.Sprite).spriteFrame,
                                            cc.find("Canvas/MoveTool").removeAllChildren(),
                                            cc.find("Canvas/bord/right").active = !0,
                                            cc.find("Canvas/panel").runAction(cc.sequence(cc.moveTo(.5, cc.v2(500, -47)), cc.callFunc(function () {
                                                n.self.PanelEntry()
                                            })))
                                    }
                                }
                            }
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            var o = e.getLocation();
                            cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (n.self.CanMove)
                                if (n.self.CanMove = !1,
                                    0 == n.self.ToolSequence) {
                                    cc.find("Canvas/MoveTool").removeAllChildren();
                                    for (var t = 0; t < 3; t++) {
                                        cc.find("Canvas/panel/" + n.self.SelectedSticker + "/" + (t + 1)).active = !0
                                    }
                                } else
                                    1 == n.self.ToolSequence && (n.self.StopSound("S81"),
                                        cc.find("Canvas/Monster/Hand").active = !0,
                                        cc.find("Canvas/Entry/Sticker/GlobePart1").getComponent(cc.ParticleSystem).stopSystem(),
                                        cc.find("Canvas/Entry/Sticker/GlobePart2").getComponent(cc.ParticleSystem).stopSystem(),
                                        cc.find("Canvas/Entry/Sticker/GlobePart3").getComponent(cc.ParticleSystem).stopSystem(),
                                        cc.find("Canvas/Entry").getComponent(cc.Animation).pause(),
                                        cc.find("Canvas/Monster").getComponent(cc.Animation).stop("MonsterRunning"),
                                        cc.find("Canvas/Monster").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/_0000s_0011_7").getComponent(cc.Sprite).spriteFrame)
                        }
                        ,
                        c.prototype.isPick = function (e) {
                            var c = cc.find("Canvas/bord/" + this.SelectedSticker).color;
                            return c.r == e.color.r && c.g == e.color.g && c.b == e.color.b
                        }
                        ,
                        c.prototype.PanelEntry = function () {
                            cc.find("Canvas/bord/right").active = !1;
                            for (var e = !1, c = 0; c < 4; c++) {
                                cc.find("Canvas/Entry/Hint/" + (c + 1)).active && (e = !0)
                            }
                            if (!e)
                                return console.log("alldone"),
                                    n.self.ToolSequence = -1,
                                    cc.find("Canvas/panel").runAction(cc.moveTo(.5, cc.v2(500, -47))),
                                    cc.find("Canvas/bord").runAction(cc.scaleTo(.2, 0).easing(cc.easeBounceIn())),
                                    void cc.find("Canvas/Entry").runAction(cc.sequence(cc.moveTo(.4, cc.v2(-173, 0)), cc.callFunc(function () {
                                        cc.find("Canvas/Monster").active = !0,
                                            n.self.PlaySound("taponmonster"),
                                            cc.find("Canvas/Monster").runAction(cc.sequence(cc.moveTo(.3, cc.v2(180, -70)), cc.callFunc(function () {
                                                cc.find("Canvas/Monster").getComponent(cc.Animation).play("MonsterEntry"),
                                                    cc.find("Canvas/Monster").getComponent(cc.Animation).on("finished", function () {
                                                        cc.find("Canvas/Monster").getComponent(cc.Animation).off("finished"),
                                                            n.self.ToolSequence = 1,
                                                            cc.find("Canvas/Monster/Hand").active = !0,
                                                            cc.find("Canvas/Monster/Hand").getComponent(cc.Animation).play(),
                                                            cc.find("Canvas/Entry/progress1").active = !0,
                                                            cc.find("Canvas/Entry").getComponent(cc.Animation).play("ProgressGlobe"),
                                                            cc.find("Canvas/Entry").getComponent(cc.Animation).pause()
                                                    })
                                            })))
                                    })));
                            this.ShowPanelItem(),
                                n.self.PlaySound("S25"),
                                cc.find("Canvas/panel").runAction(cc.sequence(cc.moveTo(.5, cc.v2(325, -47)).easing(cc.easeBackOut()), cc.callFunc(function () {
                                    cc.find("Canvas/bord").runAction(cc.scaleTo(.2, 1).easing(cc.easeBounceOut())),
                                        cc.find("Canvas/Entry/Hint").active = !0,
                                        n.self.PlaySound("S16")
                                })))
                        }
                        ,
                        c.prototype.ShowPanelItem = function () {
                            this.shuffle(this.ColorCode);
                            var e = this.getRandomInt(1, 3);
                            this.SelectedSticker = e;
                            for (var c = 0; c < 3; c++)
                                cc.find("Canvas/panel/" + (c + 1)).active = !1;
                            cc.find("Canvas/panel/" + e).active = !0;
                            var o = 0;
                            cc.find("Canvas/panel/" + e).children.forEach(function (e) {
                                e.scale = 0,
                                    e.active = !0,
                                    e.runAction(cc.scaleTo(.5, .5)),
                                    e.color = n.self.ColorCode[o],
                                    e.children[0].color = cc.Color.WHITE,
                                    console.log(e.name),
                                    o++
                            });
                            for (c = 0; c < 3; c++)
                                cc.find("Canvas/bord/" + (c + 1)).scale = 0;
                            cc.find("Canvas/bord/" + e).active = !0,
                                cc.find("Canvas/bord/" + e).color = cc.find("Canvas/panel/" + e + "/" + this.getRandomInt(1, 3)).color,
                                cc.find("Canvas/bord/" + e).runAction(cc.scaleTo(.3, .6)),
                                this.ToolSequence = 0
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([i], c)
                }(cc.Component));
        n.default = r,
            cc._RF.pop()
    }
        , {}],
    LevelScene: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "59010CkQMtFoI9ZS5Fx9vis", "LevelScene");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.Popup = [],
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this
                        }
                        ,
                        c.prototype.start = function () {
                            if (this.Popup[0] = cc.find("Canvas/Popup/1"),
                                this.Popup[1] = cc.find("Canvas/Popup/2"),
                                this.Popup[2] = cc.find("Canvas/Popup/3"),
                                this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
                                    n.self.RandomPopupAction()
                                })))),
                                void 0 != cc.sys.localStorage.getItem("IsFromNeckless") && "true" == cc.sys.localStorage.getItem("IsFromNeckless")) {
                                cc.sys.localStorage.setItem("IsFromNeckless", !1),
                                    cc.find("Canvas/Popup").active = !1,
                                    this.node.getComponent(cc.Animation).stop("LevelSceneEntry"),
                                    cc.find("Canvas/wood1").active = !0,
                                    cc.find("Canvas/Character/monkey_ske").active = !1,
                                    cc.find("Canvas/Character/cat_ske").active = !1;
                                for (var e = 0; e < 6; e++) {
                                    cc.find("Canvas/wood1/Item" + (e + 1) + "/" + cc.sys.localStorage.getItem("SelectedObject" + e)).active = !0;
                                    var c = cc.sys.localStorage.getItem("selectedColor" + e).match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
                                    console.log(c[1], c[2], c[3]),
                                        cc.find("Canvas/wood1/Item" + (e + 1) + "/" + cc.sys.localStorage.getItem("SelectedObject" + e)).color = new cc.Color(c[1], c[2], c[3])
                                }
                                cc.find("Canvas/Character/rabbit_ske").setPosition(cc.v2(0, -150));
                                var o = cc.instantiate(cc.find("Canvas/wood1"));
                                o.scale = cc.find("Canvas/Character/rabbit_ske/wood1").scale,
                                    o.position = cc.find("Canvas/Character/rabbit_ske/wood1").position,
                                    o.parent = cc.find("Canvas/Character/rabbit_ske/wood1").parent,
                                    o.active = !1,
                                    cc.find("Canvas/wood1").runAction(cc.sequence(cc.jumpTo(1, cc.v2(0, -110), 100, 1), cc.hide(), cc.callFunc(function () {
                                        cc.find("Canvas/promotion").position = cc.Vec3.ZERO,
                                            cc.find("Canvas/logo").active = !1,
                                            cc.find("Canvas/more").active = !1,
                                            o.active = !0
                                    })))
                            } else
                                this.node.getComponent(cc.Animation).play("LevelSceneEntry"),
                                    cc.find("Canvas/wood1").active = !1
                        }
                        ,
                        c.prototype.RandomPopupAction = function () {
                            var e = this.getRandomInt(0, 2);
                            this.Popup[e].runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.2, 1)))
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.PopupAction = function (e) {
                            cc.find("Canvas/Popup").children.forEach(function (e) {
                                e.getComponent(cc.Button).interactable = !1
                            }),
                                console.log(e.target.name),
                                a.default.self.requestAds(),
                                this.PlaySound("TapSound");
                            var c = "Globe_1";
                            "1" == e.target.name ? c = "Globe_1" : "2" == e.target.name ? c = "Bird_1" : "3" == e.target.name && (c = "Neckless1"),
                                this.node.stopAllActions(),
                                this.node.runAction(cc.sequence(cc.delayTime(0), cc.callFunc(function () {
                                    cc.director.loadScene(c)
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    MainScreen: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "ed22fIAf1NO2reMbXz3O5Uw", "MainScreen");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.bgsoundElement = null,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                cc.director.preloadScene("CollectColorBlue"),
                                cc.debug.setDisplayStats(!1)
                        }
                        ,
                        c.prototype.start = function () {
                            0 == cc.audioEngine.getMusicVolume() && (cc.find("Canvas/SoundOn").active = !1,
                                cc.find("Canvas/SoundOff").active = !0),
                                this.node.getComponent(cc.Animation).on("finished", function () {
                                    n.self.node.getComponent(cc.Animation).off("finished"),
                                        n.self.node.getComponent(cc.Animation).play("MainsceneIdle")
                                })
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.playBTNClicked = function (e) {
                            this.PlaySound("Play"),
                                cc.find("Canvas/play/effect_shuiguoanniu01").active = !0,
                                e.target.getComponent(cc.Button).interactable = !1,
                                this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function () {
                                    cc.director.loadScene("CollectColorBlue")
                                }, this))),
                                a.default.self.requestAds()
                        }
                        ,
                        c.prototype.onSoundOffBtnClick = function (e) {
                            this.PlaySound("TapSound"),
                                cc.find("Canvas/SoundOn").active = !0,
                                cc.find("Canvas/SoundOff").active = !1,
                                cc.audioEngine.setMusicVolume(1),
                                cc.audioEngine.setEffectsVolume(1),
                                document.getElementById("bgsound") && document.getElementById("bgsound").play()
                        }
                        ,
                        c.prototype.onSoundOnBtnClick = function (e) {
                            this.PlaySound("TapSound"),
                                cc.find("Canvas/SoundOn").active = !1,
                                cc.find("Canvas/SoundOff").active = !0,
                                cc.audioEngine.setMusicVolume(0),
                                cc.audioEngine.setEffectsVolume(0),
                                document.getElementById("bgsound") && document.getElementById("bgsound").pause()
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Neckless1: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "349c8s31XxI6Im/8hu5EgnB", "Neckless1");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.SelectedStep = -1,
                            c.SelectedIndex = -1,
                            c.PickPOS = null,
                            c.Arrow = null,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                cc.director.preloadScene("Neckless2")
                        }
                        ,
                        c.prototype.start = function () {
                            cc.find("Canvas").on(cc.Node.EventType.TOUCH_START, n.self.tapStart),
                                cc.find("Canvas").on(cc.Node.EventType.TOUCH_MOVE, n.self.tapMove),
                                cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, n.self.tapEnd),
                                cc.find("Canvas").on(cc.Node.EventType.TOUCH_CANCEL, n.self.tapEnd),
                                cc.find("Canvas/Feather/bucket copy").zIndex = 2,
                                cc.find("Canvas/Feather2/bucket copy").zIndex = 2,
                                n.self.scheduleOnce(n.self.BagEnter, 1),
                                this.Arrow = cc.find("Canvas/Feather2/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, 20)), cc.moveBy(.2, cc.v2(0, -20))))),
                                this.Arrow.zIndex = 2,
                                this.Arrow.active = !1,
                                this.Arrow = cc.find("Canvas/Feather/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, 20)), cc.moveBy(.2, cc.v2(0, -20))))),
                                this.Arrow.zIndex = 2,
                                this.Arrow.active = !1
                        }
                        ,
                        c.prototype.BagEnter = function () {
                            this.PlaySound("S27"),
                                cc.find("Canvas/bag").getComponent(cc.Animation).play();
                            for (var e = function (e) {
                                cc.find("Canvas/Feather/" + e).setPosition(cc.v2(cc.find("Canvas/Feather/" + e).getPosition().x, cc.find("Canvas/Feather/" + e).getPosition().y + 100)),
                                    cc.find("Canvas/Feather/" + e).active = !0,
                                    cc.find("Canvas/Feather/" + e).runAction(cc.sequence(cc.delayTime(.15 * e + .5), cc.fadeIn(.1), cc.moveBy(.15, cc.v2(0, -100)), cc.callFunc(function () {
                                        8 == e && (n.self.StopSound("S27"),
                                            n.self.PlaySound("findoutimpactshell"),
                                            cc.find("Canvas/Feather/box").runAction(cc.moveTo(.2, cc.v2(-251, -166)).easing(cc.easeBackOut())),
                                            cc.find("Canvas/Feather/bucket copy").runAction(cc.moveTo(.2, cc.v2(-251, -166)).easing(cc.easeBackOut())),
                                            cc.find("Canvas/Feather/2").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, -.6, -.6), cc.scaleTo(.5, -.5, -.5)))))
                                    })))
                            }, c = 1; c <= 8; c++)
                                e(c)
                        }
                        ,
                        c.prototype.tapStart = function (e) {
                            for (var c = e.getLocation(), o = 1; o <= 8; o++)
                                if (cc.find("Canvas/Feather/" + o).getBoundingBoxToWorld().contains(c) && 255 == cc.find("Canvas/Feather/" + o).opacity) {
                                    n.self.Arrow.active = !0,
                                        n.self.SelectedStep = 3,
                                        n.self.SelectedIndex = o,
                                        n.self.PlaySound("TapSound"),
                                        n.self.PickPOS = cc.find("Canvas/Feather/" + n.self.SelectedIndex).getPosition(),
                                        cc.find("Canvas/Feather/" + n.self.SelectedIndex).zIndex = 10,
                                        cc.find("Canvas/Feather/" + n.self.SelectedIndex).stopAllActions(),
                                        cc.find("Canvas/Feather/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c));
                                    break
                                }
                            for (o = 1; o <= 8; o++)
                                if (cc.find("Canvas/Feather2/" + o).getBoundingBoxToWorld().contains(c) && 255 == cc.find("Canvas/Feather2/" + o).opacity) {
                                    n.self.Arrow.active = !0,
                                        n.self.SelectedStep = 4,
                                        n.self.SelectedIndex = o,
                                        n.self.PlaySound("TapSound"),
                                        n.self.PickPOS = cc.find("Canvas/Feather2/" + n.self.SelectedIndex).getPosition(),
                                        cc.find("Canvas/Feather2/" + n.self.SelectedIndex).zIndex = 10,
                                        cc.find("Canvas/Feather2/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c));
                                    break
                                }
                        }
                        ,
                        c.prototype.tapMove = function (e) {
                            var c = e.getLocation();
                            3 == n.self.SelectedStep ? cc.find("Canvas/Feather/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c)) : 4 == n.self.SelectedStep && cc.find("Canvas/Feather2/" + n.self.SelectedIndex).setPosition(cc.find("Canvas/Feather2/" + n.self.SelectedIndex).getParent().convertToNodeSpaceAR(c))
                        }
                        ,
                        c.prototype.tapEnd = function (e) {
                            var c = e.getLocation();
                            if (n.self.Arrow.active = !1,
                                3 == n.self.SelectedStep) {
                                var o = n.self.SelectedIndex;
                                if (cc.find("Canvas/Feather/box").getBoundingBoxToWorld().contains(c)) {
                                    if (2 == o || 5 == o || 6 == o) {
                                        var t = null;
                                        2 == o ? t = cc.v2(-267, -174) : 5 == o ? t = cc.v2(-216, -165) : 6 == o && (t = cc.v2(-254, -180)),
                                            n.self.addStarParticle(),
                                            cc.find("Canvas/Feather/" + o).stopAllActions(),
                                            cc.find("Canvas/Feather/" + o).opacity = 254,
                                            cc.find("Canvas/Feather/" + o).runAction(cc.sequence(cc.moveTo(.1, cc.v2(-276, -84)), cc.callFunc(function () {
                                                cc.find("Canvas/Feather/" + o).zIndex = 1
                                            }), cc.spawn(cc.moveTo(.1, t), cc.scaleTo(.2, .3))))
                                    } else
                                        n.self.PlaySound("wrong"),
                                            cc.find("Canvas/Feather/" + o).stopAllActions(),
                                            cc.find("Canvas/Feather/" + o).opacity = 254,
                                            cc.find("Canvas/Feather/" + o).runAction(cc.sequence(cc.repeat(cc.sequence(cc.rotateTo(.1, 5), cc.rotateTo(.1, -5)), 2), cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                                cc.find("Canvas/Feather/" + o).zIndex = 1,
                                                    cc.find("Canvas/Feather/" + o).opacity = 255
                                            })));
                                    for (var a = 0, i = 1; i <= 8; i++)
                                        if ((2 == i || 5 == i || 6 == i) && 254 != cc.find("Canvas/Feather/" + i).opacity) {
                                            a = 1;
                                            break
                                        }
                                    if (0 == a) {
                                        cc.find("Canvas/Feather/box").zIndex = 1;
                                        for (i = 1; i <= 8; i++)
                                            2 != i && 5 != i && 6 != i && cc.find("Canvas/Feather/" + i).runAction(cc.spawn(cc.rotateBy(1, -360), cc.moveBy(1, cc.v2(-1e3, 50)), cc.fadeOut(3)));
                                        cc.find("Canvas/Feather").runAction(cc.sequence(cc.delayTime(1), cc.moveBy(.3, cc.v2(0, -500)), cc.callFunc(function () {
                                            n.self.Arrow = cc.find("Canvas/Feather2/Arrow"),
                                                n.self.PlaySound("S27"),
                                                cc.find("Canvas/bag").getComponent(cc.Animation).play("BagAnim2");
                                            for (var e = function (e) {
                                                cc.find("Canvas/Feather2/" + e).setPosition(cc.v2(cc.find("Canvas/Feather2/" + e).getPosition().x, cc.find("Canvas/Feather2/" + e).getPosition().y + 100)),
                                                    cc.find("Canvas/Feather2/" + e).active = !0,
                                                    cc.find("Canvas/Feather2/" + e).runAction(cc.sequence(cc.delayTime(.15 * e + .3), cc.fadeIn(.1), cc.moveBy(.15, cc.v2(0, -100)), cc.callFunc(function () {
                                                        8 == e && (cc.find("Canvas/Feather2/box").runAction(cc.moveTo(.2, cc.v2(-251, -166)).easing(cc.easeBackOut())),
                                                            cc.find("Canvas/Feather2/bucket copy").runAction(cc.moveTo(.2, cc.v2(-251, -166)).easing(cc.easeBackOut())),
                                                            cc.find("Canvas/Feather2/5").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, -.6, -.6), cc.scaleTo(.5, -.5, -.5)))))
                                                    })))
                                            }, c = 1; c <= 8; c++)
                                                e(c)
                                        })))
                                    }
                                } else
                                    cc.find("Canvas/Feather/" + o).stopAllActions(),
                                        cc.find("Canvas/Feather/" + o).opacity = 254,
                                        cc.find("Canvas/Feather/" + o).runAction(cc.sequence(cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                            cc.find("Canvas/Feather/" + o).zIndex = 1,
                                                cc.find("Canvas/Feather/" + o).opacity = 255
                                        })))
                            } else if (4 == n.self.SelectedStep) {
                                var r = n.self.SelectedIndex;
                                if (cc.find("Canvas/Feather2/box").getBoundingBoxToWorld().contains(c)) {
                                    if (5 == r || 6 == r || 7 == r) {
                                        n.self.addStarParticle();
                                        t = null;
                                        5 == r ? t = cc.v2(-267, -174) : 6 == r ? t = cc.v2(-216, -165) : 7 == r && (t = cc.v2(-254, -180)),
                                            cc.find("Canvas/Feather2/" + r).stopAllActions(),
                                            cc.find("Canvas/Feather2/" + r).opacity = 254,
                                            cc.find("Canvas/Feather2/" + r).runAction(cc.sequence(cc.spawn(cc.moveTo(.1, t), cc.scaleTo(.1, .4)), cc.callFunc(function () {
                                                cc.find("Canvas/Feather2/" + r).zIndex = 1
                                            })))
                                    } else
                                        cc.find("Canvas/Feather2/" + r).stopAllActions(),
                                            cc.find("Canvas/Feather2/" + r).opacity = 254,
                                            cc.find("Canvas/Feather2/" + r).runAction(cc.sequence(cc.repeat(cc.sequence(cc.rotateTo(.1, 5), cc.rotateTo(.1, -5)), 2), cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                                cc.find("Canvas/Feather2/" + r).zIndex = 1,
                                                    cc.find("Canvas/Feather2/" + r).opacity = 255
                                            }))),
                                            n.self.PlaySound("wrong");
                                    for (a = 0,
                                        i = 1; i <= 8; i++)
                                        if ((5 == i || 6 == i || 7 == i) && 254 != cc.find("Canvas/Feather2/" + i).opacity) {
                                            a = 1;
                                            break
                                        }
                                    if (0 == a) {
                                        cc.find("Canvas/Feather2/box").zIndex = 1;
                                        for (i = 1; i <= 8; i++)
                                            5 != i && 6 != i && 7 != i && cc.find("Canvas/Feather2/" + i).runAction(cc.spawn(cc.rotateBy(1, -360), cc.moveBy(1, cc.v2(-1e3, 50)), cc.fadeOut(1)));
                                        cc.find("Canvas/Feather2").runAction(cc.sequence(cc.delayTime(2), cc.moveBy(.3, cc.v2(0, -500)), cc.callFunc(function () {
                                            console.log("done"),
                                                cc.find("Canvas/Feather").stopAllActions(),
                                                cc.find("Canvas/Feather").runAction(cc.moveTo(.5, cc.v2(70, 150))),
                                                cc.find("Canvas/Feather2").stopAllActions(),
                                                cc.find("Canvas/Feather2").setPosition(cc.v2(362, 0)),
                                                cc.find("Canvas/Feather2").runAction(cc.moveTo(.5, cc.v2(432, 150))),
                                                cc.find("Canvas/StarParticle").active = !0,
                                                cc.find("Canvas/Next").active = !0,
                                                n.self.PlaySound("ToolDone2")
                                        })))
                                    }
                                } else
                                    cc.find("Canvas/Feather2/" + r).stopAllActions(),
                                        cc.find("Canvas/Feather2/" + r).opacity = 254,
                                        cc.find("Canvas/Feather2/" + r).runAction(cc.sequence(cc.moveTo(.3, n.self.PickPOS), cc.callFunc(function () {
                                            cc.find("Canvas/Feather2/" + r).zIndex = 1,
                                                cc.find("Canvas/Feather2/" + r).opacity = 255
                                        })))
                            }
                            n.self.SelectedStep = -1
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.prototype.addStarParticle = function () {
                            var e = cc.instantiate(cc.find("Canvas/ItemStar"));
                            this.node.addChild(e),
                                e.active = !0,
                                this.PlaySound("ToolDone")
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                a.default.self.requestAds(),
                                this.PlaySound("TapSound"),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Neckless2")
                                })))
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Neckless2: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "691a1euqINLW4735cgG2KLC", "Neckless2");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.Shower = null,
                            c.Arrow = null,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.Shower = cc.find("Canvas/handle"),
                                cc.director.preloadScene("Neckless3")
                        }
                        ,
                        c.prototype.start = function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                n.self.node.getComponent(cc.Animation).play("BucketWaterFill"),
                                n.self.node.getComponent(cc.Animation).on("finished", function () {
                                    n.self.node.getComponent(cc.Animation).off("finished"),
                                        cc.find("Canvas/Items").opacity = 254,
                                        n.self.CanMove = !1,
                                        n.self.StopSound("S31"),
                                        n.self.Shower.runAction(cc.moveBy(.5, cc.v2(0, 700))),
                                        n.self.Arrow.active = !1,
                                        n.self.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
                                            n.self.AfterFillWaterAction()
                                        })))
                                }),
                                n.self.node.getComponent(cc.Animation).pause(),
                                this.Arrow = cc.find("Canvas/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(20, 0)), cc.moveBy(.2, cc.v2(-20, 0))))),
                                this.Arrow.zIndex = 2
                        }
                        ,
                        c.prototype.AfterFillWaterAction = function () {
                            cc.find("Canvas/Items").children.forEach(function (e) {
                                e.stopAllActions(),
                                    e.children[0].runAction(cc.fadeOut(.5))
                            }),
                                this.PlaySound("S32"),
                                cc.find("Canvas/boxwater").runAction(cc.sequence(cc.scaleTo(2, 0), cc.callFunc(function () {
                                    n.self.PlaySound("AllClean"),
                                        cc.find("Canvas/Next").active = !0,
                                        cc.find("Canvas/StarParticle").active = !0,
                                        n.self.PlaySound("ToolDone2")
                                }))),
                                cc.find("Canvas/water").runAction(cc.scaleTo(2, 0))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            cc.find("Canvas/handle/shower").getBoundingBoxToWorld().contains(o) && (n.self.Shower.position = t,
                                n.self.CanMove = !0,
                                n.self.PlaySound("S31"),
                                n.self.Arrow.active = !1,
                                cc.find("Canvas/handle/showerParticle4").active = !0,
                                cc.find("Canvas/handle/showerParticle4").getComponent(cc.ParticleSystem).resetSystem(),
                                n.self.node.getComponent(cc.Animation).resume())
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            n.self.CanMove && (n.self.Shower.position = t,
                                0 == cc.find("Canvas/SoundNode/S31").getComponent(cc.AudioSource).isPlaying && n.self.PlaySound("S31"),
                                t.x > -250 && t.x < 250 ? n.self.node.getComponent(cc.Animation).getAnimationState("BucketWaterFill").isPaused && n.self.node.getComponent(cc.Animation).resume() : 0 == n.self.node.getComponent(cc.Animation).getAnimationState("BucketWaterFill").isPaused && n.self.node.getComponent(cc.Animation).pause())
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            n.self.CanMove && (n.self.CanMove = !1,
                                n.self.Arrow.active = !0,
                                cc.find("Canvas/handle/showerParticle4").getComponent(cc.ParticleSystem).stopSystem(),
                                n.self.Shower.runAction(cc.moveTo(.5, cc.v2(0, 170))),
                                n.self.node.getComponent(cc.Animation).pause(),
                                n.self.StopSound("S31"))
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                a.default.self.requestAds(),
                                this.PlaySound("TapSound"),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Neckless3")
                                })))
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.update = function (e) {
                            var c = this;
                            cc.find("Canvas/boxwater").scale > .7 && 255 == cc.find("Canvas/Items").opacity && cc.find("Canvas/Items").children.forEach(function (e) {
                                if (0 == e.getNumberOfRunningActions()) {
                                    var n = c.getRandomInt(-3, 3)
                                        , o = c.getRandomInt(-3, 3);
                                    e.runAction(cc.sequence(cc.moveBy(1.5, cc.v2(n, o)), cc.moveBy(1.5, cc.v2(-n, -o))))
                                }
                            })
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Neckless3: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "ea96bQRhE1KM72JdpyIXO7E", "Neckless3");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.ColorCounter = 0,
                            c.PickItemName = null,
                            c.Arrow = null,
                            c.ISLOCKUSER = !1,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                cc.director.preloadScene("Neckless4"),
                                this.Arrow = cc.find("Canvas/Arrow"),
                                this.Arrow.active = !0,
                                this.Arrow.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, 20)), cc.moveBy(.2, cc.v2(0, -20))))),
                                this.Arrow.active = !1
                        }
                        ,
                        c.prototype.start = function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd),
                                cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                                    n.self.PlaySound("S25")
                                }), cc.moveTo(1, cc.v2(-151, 165)))),
                                this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
                                    n.self.PlaySound("choosetwocolortopour")
                                }))),
                                cc.find("Canvas/2").runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                                    n.self.PlaySound("S25")
                                }), cc.moveTo(1, cc.v2(240, -56)).easing(cc.easeBackOut())))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (!n.self.ISLOCKUSER && (0 == n.self.ToolSequence || 1 == n.self.ToolSequence && 0 == cc.find("Canvas/MoveTool").childrenCount))
                                for (var a = 0; a < 4; a++) {
                                    var i = cc.find("Canvas/2/TestTube_" + (a + 1));
                                    if (i && i.active && i.getBoundingBoxToWorld().contains(o)) {
                                        n.self.CanMove = !0,
                                            i.active = !1;
                                        var r = cc.instantiate(i);
                                        cc.find("Canvas/MoveTool").addChild(r),
                                            r.active = !0,
                                            r.position = t,
                                            n.self.MoveTool = r,
                                            r.scale = .5,
                                            n.self.PickItemName = i.name,
                                            n.self.PlaySound("Pick"),
                                            n.self.Arrow.active = !0;
                                        break
                                    }
                                }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence && n.self.CanMove) {
                                if (n.self.MoveTool.position = t,
                                    n.self.MoveTool.position.fuzzyEquals(cc.v3(-111, 45, 0), 80)) {
                                    n.self.CanMove = !1,
                                        n.self.Arrow.active = !1,
                                        n.self.ISLOCKUSER = !0,
                                        cc.find("Canvas/1/TestTube_2").active = !0;
                                    var a = n.self.MoveTool.getChildByName("6").color;
                                    if (cc.find("Canvas/1/TestTube_2/6").color = a,
                                        cc.find("Canvas/1/TestTube_2/1").color = a,
                                        n.self.PlaySound("S32"),
                                        "TestTube_1" == n.self.MoveTool.name ? n.self.PlaySound("yellow") : "TestTube_2" == n.self.MoveTool.name ? n.self.PlaySound("red") : "TestTube_3" == n.self.MoveTool.name ? n.self.PlaySound("blue") : "TestTube_4" == n.self.MoveTool.name && n.self.PlaySound("white"),
                                        cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).play("PourLiquid"),
                                        cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).on("finished", function () {
                                            n.self.StopSound("S32"),
                                                cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).off("finished"),
                                                cc.find("Canvas/1/TestTube_2").active = !1,
                                                n.self.MoveTool.active = !0,
                                                1 == n.self.ColorCounter && (n.self.ISLOCKUSER = !1),
                                                n.self.MoveTool.getChildByName("6").removeFromParent(),
                                                n.self.MoveTool.runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)), cc.removeSelf()))
                                        }),
                                        0 == n.self.ColorCounter)
                                        n.self.ColorCounter = 1,
                                            cc.find("Canvas/1/3_2").color = a,
                                            cc.find("Canvas/1/3_2").active = !0,
                                            cc.find("Canvas/1/3_2").getComponent(cc.Sprite).fillRange = 0,
                                            cc.find("Canvas/1").getComponent(cc.Animation).play("Progress1"),
                                            cc.find("Canvas/board/colorsplash1").active = !0,
                                            cc.find("Canvas/board/colorsplash1").color = a,
                                            n.self.ISLOCKUSER = !0;
                                    else {
                                        n.self.ColorCounter = 2,
                                            n.self.ISLOCKUSER = !0,
                                            cc.find("Canvas/board/colorsplash2").active = !0,
                                            cc.find("Canvas/board/Plus").active = !0,
                                            cc.find("Canvas/board/Equal").active = !0,
                                            cc.find("Canvas/board/colorsplash2").color = a;
                                        var i = cc.find("Canvas/1/3_2").color;
                                        cc.find("Canvas/1/2_2").active = !0,
                                            cc.find("Canvas/1/3_2").active = !1,
                                            cc.find("Canvas/1/2_2").color = i;
                                        var r = cc.color((i.r + a.r) / 2, (i.g + a.g) / 2, (i.b + a.b) / 2);
                                        cc.find("Canvas/FinalScreen/1/2_2").color = r,
                                            cc.find("Canvas/board/Answer").color = r,
                                            cc.find("Canvas/1/2_2").runAction(cc.sequence(cc.delayTime(.5), cc.tintTo(1, r.r, r.g, r.b), cc.callFunc(function () {
                                                cc.find("Canvas/board/Answer").active = !0,
                                                    cc.find("Canvas/Rain").active = !0,
                                                    cc.find("Canvas/1/BottleParticle").active = !0,
                                                    cc.find("Canvas/1/BottleParticle").getComponent(cc.ParticleSystem).resetSystem(),
                                                    cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(.5), cc.moveBy(.5, cc.v2(0, 300)), cc.callFunc(function () {
                                                        cc.find("Canvas/1").getComponent(cc.Animation).play("AfterColorAnim"),
                                                            n.self.PlaySound("S23"),
                                                            cc.find("Canvas/board").children.forEach(function (e) {
                                                                e.active = !1
                                                            }),
                                                            cc.find("Canvas/1").getComponent(cc.Animation).on("finished", function () {
                                                                n.self.ColorCounter = 0,
                                                                    cc.find("Canvas/1/BottleParticle").active = !1,
                                                                    n.self.ToolSequence = 1,
                                                                    n.self.ISLOCKUSER = !1,
                                                                    cc.find("Canvas/1").getComponent(cc.Animation).off("finished"),
                                                                    cc.find("Canvas/2").getComponent(cc.Animation).play("EntryTestTube"),
                                                                    cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(2), cc.moveTo(1, cc.v2(-151, 165)))),
                                                                    cc.find("Canvas/2").getComponent(cc.Animation).on("finished", function () {
                                                                        n.self.PlaySound("choosetwocolortopour")
                                                                    })
                                                            })
                                                    })))
                                            }))),
                                            cc.find("Canvas/1").getComponent(cc.Animation).play("Progress2")
                                    }
                                    n.self.MoveTool.active = !1
                                }
                            } else if (1 == n.self.ToolSequence && n.self.CanMove && (n.self.MoveTool.position = t,
                                n.self.MoveTool.position.fuzzyEquals(cc.v3(-111, 45, 0), 80))) {
                                n.self.CanMove = !1,
                                    n.self.Arrow.active = !1,
                                    cc.find("Canvas/1/TestTube_2").active = !0;
                                a = n.self.MoveTool.getChildByName("6").color;
                                if (cc.find("Canvas/1/TestTube_2/6").color = a,
                                    cc.find("Canvas/1/TestTube_2/1").color = a,
                                    n.self.PlaySound("S32"),
                                    "TestTube_1" == n.self.MoveTool.name ? n.self.PlaySound("yellow") : "TestTube_2" == n.self.MoveTool.name ? n.self.PlaySound("red") : "TestTube_3" == n.self.MoveTool.name ? n.self.PlaySound("blue") : "TestTube_4" == n.self.MoveTool.name && n.self.PlaySound("white"),
                                    cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).play("PourLiquid"),
                                    cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).on("finished", function () {
                                        n.self.StopSound("S32"),
                                            cc.find("Canvas/1/TestTube_2").getComponent(cc.Animation).off("finished"),
                                            cc.find("Canvas/1/TestTube_2").active = !1,
                                            n.self.MoveTool.active = !0,
                                            n.self.MoveTool.getChildByName("6").removeFromParent(),
                                            n.self.MoveTool.runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)), cc.removeSelf()))
                                    }),
                                    0 == n.self.ColorCounter)
                                    n.self.ColorCounter = 1,
                                        cc.find("Canvas/1/3_2").color = a,
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("Progress1"),
                                        cc.find("Canvas/board/colorsplash1").active = !0,
                                        cc.find("Canvas/board/colorsplash1").color = a;
                                else {
                                    n.self.ISLOCKUSER = !0,
                                        cc.find("Canvas/board/colorsplash2").active = !0,
                                        cc.find("Canvas/board/Plus").active = !0,
                                        cc.find("Canvas/board/Equal").active = !0,
                                        cc.find("Canvas/board/colorsplash2").color = a;
                                    i = cc.find("Canvas/1/3_2").color;
                                    cc.find("Canvas/1/3_2").active = !1,
                                        cc.find("Canvas/1/2_2").color = i;
                                    r = cc.color((i.r + a.r) / 2, (i.g + a.g) / 2, (i.b + a.b) / 2);
                                    cc.find("Canvas/FinalScreen/2/2_2").color = r,
                                        cc.find("Canvas/board/Answer").color = r,
                                        cc.find("Canvas/1/2_2").runAction(cc.sequence(cc.tintTo(1.5, r.r, r.g, r.b), cc.callFunc(function () {
                                            cc.find("Canvas/board/Answer").active = !0,
                                                cc.find("Canvas/Rain").getComponent(cc.ParticleSystem).resetSystem(),
                                                cc.find("Canvas/1/BottleParticle").active = !0,
                                                cc.find("Canvas/1/BottleParticle").getComponent(cc.ParticleSystem).resetSystem(),
                                                cc.find("Canvas/board").runAction(cc.sequence(cc.delayTime(.5), cc.moveBy(.5, cc.v2(0, 300)), cc.callFunc(function () {
                                                    cc.find("Canvas/1").getComponent(cc.Animation).play("AfterColorLast"),
                                                        n.self.PlaySound("S23"),
                                                        cc.find("Canvas/1").getComponent(cc.Animation).on("finished", function () {
                                                            n.self.ColorCounter = 0,
                                                                cc.find("Canvas/1/BottleParticle").active = !1,
                                                                cc.find("Canvas/FinalScreen").active = !0,
                                                                n.self.PlaySound("FinalScreen"),
                                                                cc.find("Canvas/FinalScreen/1/2_2").color = cc.find("Canvas/FinalScreen/1/2_2").color,
                                                                cc.find("Canvas/FinalScreen/2/2_2").color = cc.find("Canvas/FinalScreen/2/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/1/1").color = cc.find("Canvas/FinalScreen/1/2_2").color,
                                                                cc.find("Canvas/FinalScreen/Final2/2/1").color = cc.find("Canvas/FinalScreen/2/2_2").color
                                                        })
                                                })))
                                        }))),
                                        cc.find("Canvas/1").getComponent(cc.Animation).play("Progress2")
                                }
                                n.self.MoveTool.active = !1
                            }
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            n.self.CanMove && (n.self.CanMove = !1,
                                0 == n.self.ToolSequence ? (cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/2/" + n.self.PickItemName).active = !0,
                                    n.self.Arrow.active = !1) : 1 == n.self.ToolSequence && (cc.find("Canvas/MoveTool").removeAllChildren(),
                                        cc.find("Canvas/2/" + n.self.PickItemName).active = !0,
                                        n.self.Arrow.active = !1))
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                a.default.self.requestAds(),
                                this.PlaySound("TapSound"),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Neckless4")
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Neckless4: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "3f5dfUKdE5FIKedSqmelNtU", "Neckless4");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./FloodFill")
            , i = e("./DrawPercentage")
            , r = e("./Promotion")
            , s = cc._decorator
            , l = s.ccclass
            , d = (s.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.ColorCode = [],
                            c.StepPosition = [],
                            c.PictureColorNumber = [],
                            c.SelectedColorCode = null,
                            c.CanMove = !1,
                            c.MoveTool = null,
                            c.ToolSequence = 0,
                            c.DrawingObj = [],
                            c.DrawingPercentageObj = [],
                            c.SelectedStep = 0,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.SelectedColorCode = cc.Color.RED,
                                cc.director.preloadScene("Neckless5"),
                                this.ColorCode[0] = cc.color(234, 87, 240),
                                this.ColorCode[1] = cc.color(255, 117, 51),
                                this.ColorCode[2] = cc.color(0, 223, 250),
                                this.ColorCode[3] = cc.color(0, 163, 41),
                                this.ColorCode[4] = cc.color(255, 218, 58),
                                this.ColorCode[5] = cc.color(255, 147, 204),
                                this.ColorCode[6] = cc.color(250, 24, 38),
                                this.ColorCode[7] = cc.color(138, 10, 188);
                            for (var e = 1; e <= 8; e++)
                                cc.find("Canvas/ColorPanel/view/content/" + e + "/BrushBack/1").color = this.ColorCode[e - 1];
                            for (e = 0; e < 5; e++)
                                this.StepPosition[e] = cc.v2(cc.find("Canvas/Step" + (e + 1)).position),
                                    this.DrawingObj[e] = new a.default,
                                    this.DrawingObj[e].onLoadUser(cc.find("Canvas/Step" + (e + 1) + "/Mask/Drawing")),
                                    this.DrawingPercentageObj[e] = new i.default,
                                    this.DrawingPercentageObj[e].onLoadUser(cc.find("Static/S" + (e + 1)), null);
                            this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
                                n.self.Entry(),
                                    n.self.PlaySound("letcolortheshell"),
                                    cc.find("Canvas/bord").runAction(cc.sequence(cc.delayTime(.9), cc.moveTo(.3, cc.v2(142, 113)))),
                                    cc.find("Canvas/ColorPanel").runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.3, cc.v2(328, -44))))
                            })));
                            for (e = 0; e < 8; e++)
                                this.PictureColorNumber[e] = e;
                            this.shuffle(this.PictureColorNumber)
                        }
                        ,
                        c.prototype.shuffle = function (e) {
                            e.sort(function () {
                                return Math.random() - Math.random()
                            })
                        }
                        ,
                        c.prototype.start = function () {
                            cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                cc.find("Canvas/ColorPanel").on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd)
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 == n.self.ToolSequence) {
                                n.self.SelectedColorCode;
                                for (var a = 1; a <= 8; a++)
                                    if (cc.find("Canvas/ColorPanel/view/content/" + a + "/BrushBack").getBoundingBoxToWorld().contains(o)) {
                                        if (!n.self.isPickTool(a))
                                            return cc.find("Canvas/ColorPanel/view/content/" + a).runAction(cc.repeat(cc.sequence(cc.rotateTo(.2, 5), cc.rotateTo(.2, -5)), 2)),
                                                void n.self.PlaySound("wrong");
                                        n.self.PlaySound("PickRight"),
                                            n.self.CanMove = !0,
                                            cc.find("Canvas/ColorPanel/view/content/" + a).active = !1,
                                            cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !1;
                                        var i = cc.instantiate(cc.find("Canvas/Loader/BrushBack"));
                                        cc.find("Canvas/MoveTool").addChild(i),
                                            i.position = t,
                                            i.getChildByName("1").color = n.self.ColorCode[a - 1],
                                            i.name = a.toString(),
                                            n.self.MoveTool = i;
                                        break
                                    }
                            }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            0 == n.self.ToolSequence && n.self.CanMove && (n.self.MoveTool.position = t,
                                0 == cc.find("Canvas/SoundNode/S12").getComponent(cc.AudioSource).isPlaying && n.self.PlaySound("S12"),
                                n.self.DrawingObj[n.self.SelectedStep].TouchMove(e, n.self.SelectedColorCode, cc.v2(-40, 60)),
                                n.self.DrawingPercentageObj[n.self.SelectedStep].TouchMove(e, cc.v2(-40, 60)))
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            if (!n.self.CanMove)
                                return !1;
                            n.self.CanMove = !1,
                                0 == n.self.ToolSequence && (n.self.StopSound("S12"),
                                    cc.find("Canvas/MoveTool").removeAllChildren(),
                                    cc.find("Canvas/ColorPanel").getComponent(cc.ScrollView).enabled = !0,
                                    cc.find("Canvas/ColorPanel/view/content").children.forEach(function (e) {
                                        e.active = !0
                                    }),
                                    n.self.DrawingPercentageObj[n.self.SelectedStep].getPercentage() > 95 && (n.self.addParticle(),
                                        n.self.PlaySound("ToolDone2"),
                                        n.self.ToolSequence = -1,
                                        cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 1)),
                                        cc.find("Canvas/Step" + (n.self.SelectedStep + 1)).runAction(cc.sequence(cc.delayTime(.5), cc.jumpBy(.5, cc.v2(0, -500), 300, 1), cc.callFunc(function () {
                                            cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)) && cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)).runAction(cc.scaleTo(.2, 0)),
                                                n.self.Entry()
                                        })))))
                        }
                        ,
                        c.prototype.addParticle = function () {
                            var e = cc.instantiate(cc.find("Canvas/Loader/select"));
                            this.node.addChild(e),
                                e.position = cc.v3(-141, 0, 0),
                                e.active = !0
                        }
                        ,
                        c.prototype.isPickTool = function (e) {
                            var c = cc.find("Canvas/ColorPanel/view/content/" + e + "/BrushBack/1")
                                , o = cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/Drawing");
                            return c.color.r == o.color.r && c.color.g == o.color.g && c.color.b == o.color.b
                        }
                        ,
                        c.prototype.Entry = function () {
                            var e = this.getRandomInt(1, 5);
                            if (255 == cc.find("Canvas/Step" + e).opacity)
                                cc.find("Canvas/bord/right").runAction(cc.scaleTo(.2, 0)),
                                    cc.find("Canvas/Step" + e).stopAllActions(),
                                    cc.find("Canvas/Step" + e).opacity = 254,
                                    cc.find("Canvas/Step" + e).active = !0,
                                    n.self.SelectedStep = e - 1,
                                    cc.find("Canvas/Step" + e).position = cc.v3(-500, this.StepPosition[e - 1].y),
                                    cc.find("Canvas/Step" + e).runAction(cc.sequence(cc.moveTo(.5, this.StepPosition[e - 1]), cc.callFunc(function () {
                                        n.self.EntryColor(e - 1),
                                            n.self.ToolSequence = 0
                                    })));
                            else {
                                for (var c = !1, o = 0; o < 5; o++)
                                    if (255 == cc.find("Canvas/Step" + (o + 1)).opacity) {
                                        cc.find("Canvas/Step" + (o + 1)).stopAllActions(),
                                            c = !0;
                                        break
                                    }
                                c ? this.Entry() : (console.log("done all"),
                                    cc.find("Canvas/ColorPanel").runAction(cc.moveBy(.5, cc.v2(500, 0))),
                                    cc.find("Canvas/bord").runAction(cc.moveBy(.5, cc.v2(0, 300))),
                                    cc.find("Canvas/bord/right").active = !1,
                                    cc.find("Canvas/Next").active = !0,
                                    this.PlaySound("ToolDone"),
                                    cc.find("Canvas/StarParticle").active = !0)
                            }
                        }
                        ,
                        c.prototype.EntryColor = function (e) {
                            this.SelectedColorCode = this.ColorCode[e],
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1)).active = !0,
                                cc.find("Canvas/bord/Step" + (n.self.SelectedStep + 1) + "/Drawing").color = this.SelectedColorCode,
                                console.log(n.self.SelectedStep + 1),
                                cc.sys.localStorage.setItem("R_Step_" + (n.self.SelectedStep + 1), this.SelectedColorCode.r),
                                cc.sys.localStorage.setItem("G_Step_" + (n.self.SelectedStep + 1), this.SelectedColorCode.g),
                                cc.sys.localStorage.setItem("B_Step_" + (n.self.SelectedStep + 1), this.SelectedColorCode.b)
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                this.PlaySound("TapSound"),
                                r.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                                    cc.director.loadScene("Neckless5")
                                })))
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([l], c)
                }(cc.Component));
        n.default = d,
            cc._RF.pop()
    }
        , {
        "./DrawPercentage": "DrawPercentage",
        "./FloodFill": "FloodFill",
        "./Promotion": "Promotion"
    }],
    Neckless5: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "73400w6BwlKkaGgDdAZZXrU", "Neckless5");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Promotion")
            , i = cc._decorator
            , r = i.ccclass
            , s = (i.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.ColorCode = [],
                            c.CanMove = !1,
                            c.MoveTool = null,
                            c.SelectedStickerToMove = null,
                            c.SelectedPanel = 1,
                            c.SelectedColorCode = 0,
                            c.ToolSequence = 0,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            n.self = this,
                                this.ColorCode[0] = cc.color(234, 87, 240),
                                this.ColorCode[1] = cc.color(255, 117, 51),
                                this.ColorCode[2] = cc.color(0, 223, 250),
                                this.ColorCode[3] = cc.color(0, 163, 41),
                                this.ColorCode[4] = cc.color(255, 218, 58),
                                this.ColorCode[5] = cc.color(255, 147, 204),
                                this.ColorCode[6] = cc.color(250, 24, 38),
                                this.ColorCode[7] = cc.color(138, 10, 188),
                                this.shuffle(this.ColorCode),
                                cc.find("Canvas/wood2/wood1").opacity = 0,
                                cc.find("Canvas/wood2/wood1").runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(.5), cc.callFunc(function () {
                                    n.self.ShowPanel(1),
                                        n.self.PlaySound("decorate")
                                }))),
                                cc.find("Canvas/bord").runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () {
                                    n.self.PlaySound("PanelEntry")
                                }), cc.moveTo(.5, cc.v2(145, 120)).easing(cc.easeBackOut()))),
                                cc.find("Canvas/wood2/wood1/Hint").children.forEach(function (e) {
                                    e.runAction(cc.repeatForever(cc.rotateBy(.5, 100)))
                                })
                        }
                        ,
                        c.prototype.shuffle = function (e) {
                            e.sort(function () {
                                return Math.random() - Math.random()
                            })
                        }
                        ,
                        c.prototype.start = function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.CanvasTouchBegan),
                                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.CanvasTouchMove),
                                this.node.on(cc.Node.EventType.TOUCH_END, this.CanvasTouchEnd),
                                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.CanvasTouchEnd);
                            for (var e = 0; e < 6; e++)
                                console.log(cc.sys.localStorage.getItem("selectedColor" + e))
                        }
                        ,
                        c.prototype.CanvasTouchBegan = function (e, c) {
                            for (var o = e.getLocation(), t = cc.v3(n.self.node.convertToNodeSpaceAR(o)), a = 0; a < 3; a++) {
                                var i = cc.find("Canvas/panel/" + n.self.SelectedPanel + "/" + (a + 1));
                                if (i && i.getBoundingBoxToWorld().contains(o)) {
                                    if (0 == n.self.isPick(i))
                                        return i.runAction(cc.repeat(cc.sequence(cc.rotateTo(.1, 5), cc.rotateTo(.1, -5)), 3)),
                                            void n.self.PlaySound("wrong");
                                    n.self.PlaySound("S16"),
                                        n.self.CanMove = !0;
                                    var r = cc.instantiate(i);
                                    cc.find("Canvas/MoveTool").addChild(r),
                                        r.position = t,
                                        i.active = !1,
                                        n.self.SelectedStickerToMove = r;
                                    break
                                }
                            }
                        }
                        ,
                        c.prototype.CanvasTouchMove = function (e, c) {
                            var o = e.getLocation()
                                , t = cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            if (0 != n.self.CanMove && 0 == n.self.ToolSequence) {
                                n.self.SelectedStickerToMove.position = t;
                                for (var a = 0; a < 6; a++) {
                                    var i = cc.find("Canvas/wood2/wood1/Hint/" + (a + 1));
                                    if (i && i.active && i.getBoundingBoxToWorld().contains(o)) {
                                        i.active = !1;
                                        var r = cc.find("Canvas/wood2/wood1/Item" + (a + 1)).getChildByName(n.self.SelectedPanel.toString());
                                        r.active = !0,
                                            r.color = n.self.SelectedStickerToMove.color,
                                            cc.sys.localStorage.setItem("selectedColor" + a, r.color),
                                            cc.sys.localStorage.setItem("SelectedObject" + a, n.self.SelectedPanel.toString());
                                        var s = r.scale;
                                        r.runAction(cc.sequence(cc.scaleTo(.3, s).easing(cc.easeBounceOut()), cc.rotateBy(.2, -5), cc.rotateBy(.2, 5), cc.rotateBy(.2, -5), cc.rotateBy(.2, 5))),
                                            n.self.CanMove = !1,
                                            n.self.addparticle(r.position),
                                            cc.find("Canvas/MoveTool").removeAllChildren(),
                                            cc.find("Canvas/bord/right").active = !0,
                                            n.self.PlaySound("ToolDone"),
                                            n.self.HidePanel()
                                    }
                                }
                            }
                        }
                        ,
                        c.prototype.CanvasTouchEnd = function (e, c) {
                            var o = e.getLocation();
                            cc.v3(n.self.node.convertToNodeSpaceAR(o));
                            n.self.CanMove && (n.self.CanMove = !1,
                                0 == n.self.ToolSequence && (cc.find("Canvas/panel/" + n.self.SelectedPanel + "/" + n.self.SelectedStickerToMove.name).active = !0,
                                    cc.find("Canvas/MoveTool").removeAllChildren()))
                        }
                        ,
                        c.prototype.isPick = function (e) {
                            var c = cc.find("Canvas/bord/" + this.SelectedPanel).color;
                            return c.r == e.color.r && c.g == e.color.g && c.b == e.color.b
                        }
                        ,
                        c.prototype.HidePanel = function () {
                            cc.find("Canvas/panel").stopAllActions(),
                                cc.find("Canvas/panel").runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)).easing(cc.easeBackIn()), cc.callFunc(function () {
                                    n.self.SelectedPanel++,
                                        n.self.ShowPanel(n.self.SelectedPanel)
                                })))
                        }
                        ,
                        c.prototype.ShowPanel = function (e) {
                            var c = !0;
                            if (cc.find("Canvas/wood2/wood1/Hint").children.forEach(function (e) {
                                e.active && (c = !1)
                            }),
                                c) {
                                console.log("all done"),
                                    cc.find("Canvas/bord/right").active = !1;
                                for (var o = 0; o < 5; o++)
                                    cc.find("Canvas/bord/" + (o + 1)).scale = 0;
                                return cc.find("Canvas/bord").runAction(cc.moveBy(.5, cc.v2(0, 300))),
                                    void cc.find("Canvas/wood2").runAction(cc.sequence(cc.moveBy(.5, cc.v2(-500, 0)), cc.callFunc(function () {
                                        cc.find("Canvas/FinalScreen").active = !0,
                                            n.self.PlaySound("FinalScreen");
                                        var e = cc.instantiate(cc.find("Canvas/wood2"));
                                        cc.find("Canvas/FinalScreen").addChild(e),
                                            e.position = cc.v3(0, -0, 0),
                                            e.getComponent(cc.Sprite).enabled = !1,
                                            e.getChildByName("wood1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/FinalScreen/woodNeckless").getComponent(cc.Sprite).spriteFrame,
                                            e.scale = .5,
                                            cc.find("Canvas/FinalScreen/effect_welldone_sahua").zIndex = 10
                                    })))
                            }
                            cc.find("Canvas/bord/right").active = !1;
                            for (o = 0; o < 5; o++)
                                cc.find("Canvas/bord/" + (o + 1)).scale = 0;
                            this.shuffle(this.ColorCode);
                            for (o = 1; o <= 5; o++)
                                cc.find("Canvas/panel/" + o).active = !1;
                            e > 5 && (e = this.getRandomInt(1, 5)),
                                this.SelectedPanel = e;
                            var t = cc.find("Canvas/panel/" + e);
                            t.active = !0;
                            for (o = 0; o < 3; o++)
                                t.getChildByName((o + 1).toString()).active = !0,
                                    t.getChildByName((o + 1).toString()).color = this.ColorCode[o];
                            cc.find("Canvas/panel").runAction(cc.sequence(cc.moveTo(.5, cc.v2(322, -47)).easing(cc.easeBackOut()), cc.callFunc(function () {
                                n.self.ShowBoard(e)
                            })))
                        }
                        ,
                        c.prototype.NextAction = function (e) {
                            e.target.active = !1,
                                cc.sys.localStorage.setItem("IsFromNeckless", !0),
                                a.default.self.requestAds(),
                                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function () {
                                    cc.director.loadScene("LevelScene")
                                })))
                        }
                        ,
                        c.prototype.ShowBoard = function (e) {
                            for (var c = 0; c < 5; c++)
                                cc.find("Canvas/bord/" + (c + 1)).scale = 0;
                            this.SelectedColorCode = this.getRandomInt(0, 2),
                                cc.find("Canvas/bord/" + e).color = this.ColorCode[this.SelectedColorCode],
                                cc.find("Canvas/bord/" + e).runAction(cc.scaleTo(.3, .4))
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.addparticle = function (e) {
                            var c = cc.instantiate(cc.find("Canvas/Loader/effect_shuiguoanniu01"));
                            cc.find("Canvas/wood2/wood1").addChild(c),
                                c.position = e;
                            var n = cc.instantiate(cc.find("Canvas/Loader/effect_jindu"));
                            cc.find("Canvas/wood2/wood1").addChild(n),
                                n.position = e
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.StopSound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
                        }
                        ,
                        c.self = null,
                        c = n = t([r], c)
                }(cc.Component));
        n.default = s,
            cc._RF.pop()
    }
        , {
        "./Promotion": "Promotion"
    }],
    Promotion: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "45505tGjflKcZ+9FIVkGumJ", "Promotion");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , i = a.ccclass
            , r = (a.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.isAdRunnning = !1,
                            c.isSwitchTab = !1,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.start = function () {
                            n.self = this;
                            var e = this;
                            "promoBack" == e.node.name && this.setPromoThumb();
                            var c = "game";
                            "MainScene" == cc.director.getScene().name && (c = "mainscreen"),
                                this.node.on(cc.Node.EventType.TOUCH_END, function (n) {
                                    YYGGames && (console.log(e.node.name),
                                        "promoBack" == e.node.name ? (255 == e.node.parent.opacity && 
                                            YYGGames.navigate( "gameover", "relatedgames",
                                            YYGGames.forgames[window.relatedThumbNo].id),
                                            console.log("on tap " + window.relatedThumbNo)) :
                                            cc.find("Canvas/promotion") && 255 == cc.find("Canvas/promotion").opacity && 0 == cc.find("Canvas/promotion").position.x &&
                                                0 == cc.find("Canvas/promotion").position.y ? 
                                                YYGGames.navigate( "gameover", e.node.name) :
                                                YYGGames.navigate(c, e.node.name))
                                }),
                                cc.game.on(cc.game.EVENT_SHOW, this.gameResume, !1),
                                cc.game.on(cc.game.EVENT_HIDE, this.gamePause, !1)
                        }
                        ,
                        c.prototype.playSound = function (e) {
                            cc.loader.loadRes(e, cc.AudioClip, function (e, c) {
                                cc.audioEngine.playEffect(c, !1)
                            })
                        }
                        ,
                        c.prototype.setPromoThumb = function () {
                            "undefined" != typeof YYGGames && YYGGames.forgames.length > 0 && (window.relatedThumbNo = this.getRandomInt(0, YYGGames.forgames.length - 1),
                                cc.loader.load(YYGGames.forgames[window.relatedThumbNo].thumb, function (e, c) {
                                    cc.find("Canvas/promotion").opacity = 255,
                                        cc.find("Canvas/promotion/promoBack/tex").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c)
                                }))
                        }
                        ,
                        c.prototype.requestAds = function () {
                            //"undefined" != typeof YYGSDK && YYGSDK.forgames.length > 0 && (n.self.isAdRunnning = !0,
                            //n.self.MuteSound(),
                            //cc.game.pause(),
                            //YYGSDK.adsManager.request(YYG.TYPE.INTERSTITIAL, YYG.EventHandler.create(this, this.onSuccessCallback), YYG.EventHandler.create(this, this.//onFailCallback)))
                            if ("undefined" != typeof YYGGames && YYGGames.forgames.length > 0) {
                                var namearry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                var randomm = Math.round(Math.random() * 9)
                                var type = "next";
                                if (!window.newads) {
                                    type = "start";
                                }

                                YYGGames.showInterstitial({
                                    beforeBreak: () => {
                                        console.log("beforeBreak")
                                        n.self.isAdRunnning = !0,
                                            n.self.MuteSound()
                                    },  // You may also want to mute the game's sound.
                                    afterBreak: () => {
                                        window.newads = true;
                                        console.log("afterBreak");
                                        n.self.isAdRunnning = !1,
                                            0 == n.self.isSwitchTab && n.self.gameResume()
                                    }
                                })
                            }
                        }
                        ,
                        c.prototype.gameResume = function () {
                            n.self.isSwitchTab = !1,
                                n.self.isAdRunnning ? (cc.game.pause(),
                                    n.self.MuteSound()) : (cc.game.resume(),
                                        n.self.StartSound())
                        }
                        ,
                        c.prototype.gamePause = function () {
                            console.log("Pause Game"),
                                cc.game.pause(),
                                n.self.MuteSound(),
                                n.self.isSwitchTab = !0
                        }
                        ,
                        c.prototype.MuteSound = function () {
                            document.getElementById("bgsound") && (document.getElementById("bgsound").muted = !0),
                                cc.find("Canvas/SoundNode") && cc.find("Canvas/SoundNode").children.forEach(function (e) {
                                    e.getComponent(cc.AudioSource) && (e.getComponent(cc.AudioSource).mute = !0)
                                })
                        }
                        ,
                        c.prototype.StartSound = function () {
                            document.getElementById("bgsound") && (document.getElementById("bgsound").muted = !1),
                                cc.find("Canvas/SoundNode") && cc.find("Canvas/SoundNode").children.forEach(function (e) {
                                    e.getComponent(cc.AudioSource) && e.getComponent(cc.AudioSource).mute && (e.getComponent(cc.AudioSource).mute = !1)
                                })
                        }
                        ,
                        c.prototype.onSuccessCallback = function () {
                            n.self.isAdRunnning = !1,
                                0 == n.self.isSwitchTab && n.self.gameResume(),
                                console.log("onSuccessCallback")
                        }
                        ,
                        c.prototype.onFailCallback = function () {
                            this.isAdRunnning = !1,
                                0 == n.self.isSwitchTab && n.self.gameResume(),
                                console.log("onFailCallback")
                        }
                        ,
                        c.prototype.getRandomInt = function (e, c) {
                            return e = Math.ceil(e),
                                c = Math.floor(c) + 1,
                                Math.floor(Math.random() * (c - e)) + e
                        }
                        ,
                        c.prototype.onReplayClick = function (e) {
                            e.target.getComponent(cc.Button).interactable = !1,
                                n.self.requestAds(),
                                n.self.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function () {
                                    cc.director.loadScene("CollectColorBlue")
                                })))
                        }
                        ,
                        c.self = null,
                        c = n = t([i], c)
                }(cc.Component));
        n.default = r,
            cc._RF.pop()
    }
        , {}],
    SoundManager: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "07789gCg+pIC42x040jnMyL", "SoundManager");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , i = a.ccclass
            , r = (a.property,
                function (e) {
                    function c() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o(c, e),
                        c.prototype.start = function () { }
                        ,
                        c.prototype.PlayEntry = function () {
                            var e = this.node.parent.getChildByName("SoundNode");
                            e.getChildByName("PanelEntry") && cc.instantiate(e.getChildByName("PanelEntry")).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.PlaySound = function (e) {
                            cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.PopupOpen = function () {
                            var e = this.node.getChildByName("SoundNode");
                            e.getChildByName("S16") && cc.instantiate(e.getChildByName("S16")).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c.prototype.Entry = function (e) {
                            var c = this.node.getChildByName("SoundNode");
                            c.getChildByName(e) && cc.instantiate(c.getChildByName(e)).getComponent(cc.AudioSource).play()
                        }
                        ,
                        c = t([i], c)
                }(cc.Component));
        n.default = r,
            cc._RF.pop()
    }
        , {}],
    Splash: [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "c6bf7WCiyhLBp1EjaRYWXtR", "Splash");
        var o = this && this.__extends || function () {
            var e = function (c, n) {
                return (e = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, c) {
                    e.__proto__ = c
                }
                    || function (e, c) {
                        for (var n in c)
                            c.hasOwnProperty(n) && (e[n] = c[n])
                    }
                )(c, n)
            };
            return function (c, n) {
                function o() {
                    this.constructor = c
                }
                e(c, n),
                    c.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype,
                        new o)
            }
        }()
            , t = this && this.__decorate || function (e, c, n, o) {
                var t, a = arguments.length, i = a < 3 ? c : null === o ? o = Object.getOwnPropertyDescriptor(c, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    i = Reflect.decorate(e, c, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)
                        (t = e[r]) && (i = (a < 3 ? t(i) : a > 3 ? t(c, n, i) : t(c, n)) || i);
                return a > 3 && i && Object.defineProperty(c, n, i),
                    i
            }
            ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , i = a.ccclass
            , r = (a.property,
                function (e) {
                    function c() {
                        var c = null !== e && e.apply(this, arguments) || this;
                        return c.bgsoundElement = null,
                            c
                    }
                    var n;
                    return o(c, e),
                        n = c,
                        c.prototype.onLoad = function () {
                            cc.debug.setDisplayStats(!1),
                                cc.director.preloadScene("MainScene"),
                                n.self = this,
                                this.bgsoundElement = document.createElement("AUDIO"),
                                this.bgsoundElement.id = "bgsound",
                                this.bgsoundElement.loop = !0,
                                this.bgsoundElement.setAttribute("src", cc.find("Canvas/music").getComponent(cc.AudioSource).clip.url)
                        }
                        ,
                        c.prototype.start = function () { }
                        ,
                        c.prototype.PlayAction = function (e) {
                            document.body.appendChild(this.bgsoundElement);
                            var c = e.target;
                            c && (c.getComponent(cc.Button).interactable = !1),
                                document.getElementById("bgsound") && document.getElementById("bgsound").play(),
                                cc.director.loadScene("MainScene")
                        }
                        ,
                        c.prototype.OpenUrl = function () {
                            cc.sys.openURL("https://www.yiv.com/?utm_source=unknown&utm_medium=Loading-logo&utm_campaign=game-" + document.title.replace(/ /g, "-"))
                        }
                        ,
                        c.self = null,
                        c = n = t([i], c)
                }(cc.Component));
        n.default = r,
            cc._RF.pop()
    }
        , {}],
    "use_v2.1-2.2.1_cc.Toggle_event": [function (e, c, n) {
        "use strict";
        cc._RF.push(c, "ba039nxXRlFTLkSaiW0gQ8M", "use_v2.1-2.2.1_cc.Toggle_event"),
            cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0),
            cc._RF.pop()
    }
        , {}]
}, {}, ["Bird_1", "Bird_2", "Bird_3", "Bird_4", "CollectColorBlue", "CollectColorRed", "CollectColorYellow", "DrawPercentage", "FloodFill", "Globe1", "Globe2", "Globe3", "LevelScene", "MainScreen", "Neckless1", "Neckless2", "Neckless3", "Neckless4", "Neckless5", "Promotion", "SoundManager", "Splash", "use_v2.1-2.2.1_cc.Toggle_event"]);
