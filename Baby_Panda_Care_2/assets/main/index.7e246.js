window.__require = function e(n, t, c) {
    function o(i, s) {
        if (!t[i]) {
            if (!n[i]) {
                var l = i.split("/");
                if (l = l[l.length - 1],
                !n[l]) {
                    var r = "function" == typeof __require && __require;
                    if (!s && r)
                        return r(l, !0);
                    if (a)
                        return a(l, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
                i = l
            }
            var f = t[i] = {
                exports: {}
            };
            n[i][0].call(f.exports, function(e) {
                return o(n[i][1][e] || e)
            }, f, f.exports, e, n, t, c)
        }
        return t[i].exports
    }
    for (var a = "function" == typeof __require && __require, i = 0; i < c.length; i++)
        o(c[i]);
    return o
}({
    BabySelection: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "3f584jwGQJIIYvQhxSc1hoe", "BabySelection");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Promotion")
          , s = cc._decorator
          , l = s.ccclass
          , r = (s.property,
        function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                cc.director.preloadScene("LevelScene")
            }
            ,
            n.prototype.start = function() {}
            ,
            n.prototype.LevelAction = function(e) {
                var n = e.target.name;
                console.log(n),
                cc.sys.localStorage.setItem("SelectedCharacter", n),
                i.default.self.requestAds(),
                this.PlaySound("Particle"),
                cc.director.preloadScene("LevelScene"),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    cc.director.loadScene("LevelScene")
                })))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.self = null,
            t = a([l], n)
        }(cc.Component));
        t.default = r,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    Bathroom: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "8ed7edgZ9JItad8VYe+B7Z9", "Bathroom");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s = e("./Character"), l = e("./Promotion"), r = cc._decorator, f = r.ccclass;
        r.property,
        function(e) {
            e[e.NONE = -1] = "NONE",
            e[e.TOWEL = 0] = "TOWEL",
            e[e.TEETHCLEANER = 1] = "TEETHCLEANER",
            e[e.BLUE_VALVE = 2] = "BLUE_VALVE",
            e[e.RED_VALVE = 3] = "RED_VALVE",
            e[e.BELT = 4] = "BELT",
            e[e.CHARBTB = 5] = "CHARBTB",
            e[e.SHAMPOO_BAND = 6] = "SHAMPOO_BAND",
            e[e.SPONGE = 7] = "SPONGE",
            e[e.WATER_TUB = 8] = "WATER_TUB",
            e[e.HAND_CLEANING = 9] = "HAND_CLEANING",
            e[e.LEG_CLEAN = 10] = "LEG_CLEAN",
            e[e.TOWEL2 = 11] = "TOWEL2",
            e[e.CLOTH = 12] = "CLOTH",
            e[e.DRESSPOUP = 13] = "DRESSPOUP"
        }(i || (i = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.Hand = null,
                n.ToolSequence = 0,
                n.Tools = [],
                n.CanMove = !1,
                n.MoveItem = null,
                n.BeganPoint = null,
                n.SelectedCharacter = 1,
                n.Dirt = null,
                n.TeethDirt = null,
                n.CapCharacter = null,
                n.SelectedCharacterObj = null,
                n.BathCharacterObj = null,
                n.TowelCharacterObj = null,
                n.Bubble = null,
                n.WaterBubble = [],
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                var e = this;
                t.self = this,
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.director.preloadScene("Dressup"),
                this.Hand = cc.find("Canvas/Hand"),
                this.ShowTool(i.TOWEL),
                this.Tools[0] = cc.find("Canvas/Hand/Towel"),
                this.Tools[1] = cc.find("Canvas/Hand/ToothCleaner"),
                this.Tools[2] = cc.find("Canvas/Bath/Popup/1/Btn"),
                this.Tools[3] = cc.find("Canvas/Bath/Popup/2/Btn"),
                this.Tools[4] = cc.find("Canvas/Bath/Belt2"),
                this.Tools[5] = cc.find("Canvas/Bath/BathCharacterBottom"),
                this.Tools[6] = cc.find("Canvas/Hand/Cap"),
                this.Tools[i.SPONGE] = cc.find("Canvas/Bath/Sponge1"),
                this.Tools[i.WATER_TUB] = cc.find("Canvas/Bath/WaterTub1"),
                this.Tools[i.HAND_CLEANING] = cc.find("Canvas/Bath/HandLegSponge"),
                this.Tools[i.LEG_CLEAN] = cc.find("Canvas/Hand/Brush"),
                this.Tools[i.TOWEL2] = cc.find("Canvas/Hand/Towel"),
                this.Tools[i.CLOTH] = cc.find("Canvas/DropCleaningTowel/Dress"),
                cc.find("Canvas/Layer/Chair/char_ske1").active = !1,
                cc.find("Canvas/Layer/Chair/char_ske2").active = !1,
                cc.find("Canvas/Layer/Chair/char_ske3").active = !1,
                this.SelectedCharacterObj = cc.find("Canvas/Layer/Chair/char_ske" + this.SelectedCharacter),
                this.SelectedCharacterObj.active = !0,
                this.SelectedCharacterObj.getComponent(s.default).HideSlots("dirt1"),
                this.SelectedCharacterObj.getComponent(s.default).HideSlots("dirt2"),
                cc.find("Canvas/Bath/BathCharacter").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Bath/BathCharacterBottom").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/DropCleaningTowel/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/DropCleaningTowel/Character2").children.forEach(function(e) {
                    e.active = !1
                }),
                this.BathCharacterObj = cc.find("Canvas/Bath/BathCharacter/charbath_ske" + this.SelectedCharacter),
                this.BathCharacterObj.active = !0,
                cc.find("Canvas/Bath/BathCharacterBottom/charbath_ske" + this.SelectedCharacter).active = !0,
                cc.find("Canvas/DropCleaningTowel/Character/charbath_ske" + this.SelectedCharacter).active = !0,
                cc.find("Canvas/DropCleaningTowel/Character2/charbath_ske" + this.SelectedCharacter).active = !0,
                cc.find("Canvas/DropCleaningTowel/Character2/charbath_ske" + this.SelectedCharacter).getComponent(s.default).HideSlots("dirt1"),
                cc.find("Canvas/DropCleaningTowel/Character2/charbath_ske" + this.SelectedCharacter).getComponent(s.default).HideSlots("dirt2"),
                cc.find("Canvas/DropCleaningTowel/Character2").active = !1,
                1 == this.SelectedCharacter ? (this.Dirt = cc.find("Canvas/Layer/Chair/char_ske1/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Dirt"),
                this.TeethDirt = cc.find("Canvas/Layer/Chair/char_ske1/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/TeethDirt"),
                this.CapCharacter = cc.find("Canvas/Bath/BathCharacter/charbath_ske1/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Cap"),
                this.Bubble = cc.find("Canvas/Bath/BathCharacter/charbath_ske1/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Bubble"),
                this.WaterBubble.push(cc.find("Canvas/DropCleaningTowel/Character/charbath_ske1/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:UpperArm_L/ATTACHED_NODE:LowerArm_L/3 copy")),
                this.WaterBubble.push(cc.find("Canvas/DropCleaningTowel/Character/charbath_ske1/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:UpperArm_R/ATTACHED_NODE:LowerArm_R/3")),
                cc.find("Canvas/DropCleaningTowel/Character/charbath_ske1/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/WaterBubble").children.forEach(function(n) {
                    e.WaterBubble.push(n)
                }),
                this.TowelCharacterObj = cc.find("Canvas/DropCleaningTowel/Character/charbath_ske1")) : 2 == this.SelectedCharacter ? (this.Dirt = cc.find("Canvas/Layer/Chair/char_ske2/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Dirt"),
                this.TeethDirt = cc.find("Canvas/Layer/Chair/char_ske2/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/TeethDirt"),
                this.CapCharacter = cc.find("Canvas/Bath/BathCharacter/charbath_ske2/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Cap"),
                this.Bubble = cc.find("Canvas/Bath/BathCharacter/charbath_ske2/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Bubble"),
                this.WaterBubble.push(cc.find("Canvas/DropCleaningTowel/Character/charbath_ske2/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:UpperArm_L/ATTACHED_NODE:LowerArm_L/3 copy")),
                this.WaterBubble.push(cc.find("Canvas/DropCleaningTowel/Character/charbath_ske2/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:UpperArm_R/ATTACHED_NODE:LowerArm_R/3")),
                cc.find("Canvas/DropCleaningTowel/Character/charbath_ske2/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/WaterBubble").children.forEach(function(n) {
                    e.WaterBubble.push(n)
                }),
                this.TowelCharacterObj = cc.find("Canvas/DropCleaningTowel/Character/charbath_ske2"),
                cc.find("Canvas/Bath/ArmL").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/Arm2").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/ArmR").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/Arm2").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/ArmL/ArmDirt").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/ArmDirt2").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/ArmR/ArmDirt").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/ArmDirt2").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/LegClean/Leg").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/LegBlack").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/LegClean/Leg/LegDirt1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/LD1").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/LegClean/Leg/LegDirt1 copy").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/LD1").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/LegClean/Leg/LegDirt3").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/LD3").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/LegClean/Leg/LegDirt2").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/LD2").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/LegClean/Leg/LegDirt4").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/LD4").getComponent(cc.Sprite).spriteFrame,
                cc.find("Canvas/Bath/LegClean/Leg/LegDirt3 copy").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/LD3").getComponent(cc.Sprite).spriteFrame) : 3 == this.SelectedCharacter && (this.Dirt = cc.find("Canvas/Layer/Chair/char_ske3/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Dirt"),
                this.TeethDirt = cc.find("Canvas/Layer/Chair/char_ske3/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/TeethDirt"),
                this.CapCharacter = cc.find("Canvas/Bath/BathCharacter/charbath_ske3/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Cap"),
                this.Bubble = cc.find("Canvas/Bath/BathCharacter/charbath_ske3/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/Bubble"),
                this.WaterBubble.push(cc.find("Canvas/DropCleaningTowel/Character/charbath_ske3/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:UpperArm_L/ATTACHED_NODE:LowerArm_L/3 copy")),
                this.WaterBubble.push(cc.find("Canvas/DropCleaningTowel/Character/charbath_ske3/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:UpperArm_R/ATTACHED_NODE:LowerArm_R/3")),
                cc.find("Canvas/DropCleaningTowel/Character/charbath_ske3/ATTACHED_NODE_TREE/ATTACHED_NODE:root/ATTACHED_NODE:body/ATTACHED_NODE:Face/WaterBubble").children.forEach(function(n) {
                    e.WaterBubble.push(n)
                }),
                this.TowelCharacterObj = cc.find("Canvas/DropCleaningTowel/Character/charbath_ske3")),
                cc.find("Canvas/Bath/SideCharacter").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Bath/SideCharacter/characterside_ske" + this.SelectedCharacter).active = !0,
                this.CapCharacter.active = !1,
                this.Bubble.children.forEach(function(e) {
                    e.opacity = 0
                })
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                this.PlaySound("face is dirty"),
                this.scheduleOnce(this.HandEntry, 3),
                cc.find("Canvas/Bath").active = !1,
                cc.find("Canvas/DropCleaningTowel").active = !1,
                cc.find("Canvas/Layer").active = !0
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation()
                  , c = t.self.node.convertToNodeSpaceAR(n);
                if (t.self.ToolSequence == i.TOWEL)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.HideHand(),
                    t.self.SelectedCharacterObj.getComponent(s.default).PlayAnimation("sad_rub", -1),
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.TEETHCLEANER)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.HideHand(),
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.BLUE_VALVE) {
                    if (t.self.isTapped(t.self.Tools[t.self.ToolSequence], n)) {
                        t.self.Tools[t.self.ToolSequence].runAction(cc.rotateBy(.3, 720));
                        var o = 0;
                        t.self.HideHint();
                        var a = cc.find("Canvas/Bath/Popup/1/1");
                        a.runAction(cc.sequence(cc.repeat(cc.sequence(cc.callFunc(function() {
                            a.getComponent(cc.Sprite).fillRange = o,
                            o += .01
                        }), cc.delayTime(.01)), 65), cc.callFunc(function() {
                            t.self.ToolSequence = i.RED_VALVE,
                            t.self.ShowHint(t.self.ToolSequence)
                        }))),
                        t.self.PlaySound("Put_E")
                    }
                } else if (t.self.ToolSequence == i.RED_VALVE) {
                    if (t.self.isTapped(t.self.Tools[t.self.ToolSequence], n)) {
                        t.self.Tools[t.self.ToolSequence].runAction(cc.rotateBy(.3, 720));
                        var l = 0
                          , r = cc.find("Canvas/Bath/Popup/2/1");
                        t.self.PlaySound("Put_E"),
                        t.self.HideHint(),
                        r.runAction(cc.sequence(cc.repeat(cc.sequence(cc.callFunc(function() {
                            r.getComponent(cc.Sprite).fillRange = l,
                            l += .01
                        }), cc.delayTime(.01)), 75), cc.callFunc(function() {
                            cc.find("Canvas/Bath/Popup").runAction(cc.scaleTo(.5, 0).easing(cc.easeBounceIn())),
                            cc.find("Canvas/Bath/ShowerParticle").active = !0,
                            t.self.PlaySound("Tap_E"),
                            cc.find("Canvas/Bath").getComponent(cc.Animation).play("WaterFillBath"),
                            cc.find("Canvas/Bath").getComponent(cc.Animation).on("finished", function() {
                                cc.find("Canvas/Bath").getComponent(cc.Animation).off("finished");
                                var e = cc.find("Canvas/Bath/Belt2");
                                t.self.StopSound("Tap_E"),
                                e.active = !0,
                                e.runAction(cc.sequence(cc.moveTo(.5, cc.v2(22, 0)).easing(cc.easeBackOut()), cc.callFunc(function() {
                                    t.self.ToolSequence = i.BELT,
                                    t.self.ShowHint(t.self.ToolSequence),
                                    t.self.PlaySound("ohh its the little bear")
                                })))
                            })
                        }))),
                        t.self.ToolSequence = i.NONE
                    }
                } else if (t.self.ToolSequence == i.BELT)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.ToolSequence = i.NONE,
                    t.self.PlaySound("Put_E"),
                    cc.find("Canvas/Bath/BeltPart_3").active = !0,
                    cc.find("Canvas/Bath/Belt").active = !0,
                    cc.find("Canvas/Bath/BeltPart_1").active = !0,
                    cc.find("Canvas/Bath/BeltPart_2").active = !0,
                    t.self.HideHint(),
                    cc.find("Canvas/Bath").getComponent(cc.Animation).play("BathSideCharEntry"),
                    cc.find("Canvas/Bath").getComponent(cc.Animation).on("finished", function() {
                        cc.find("Canvas/Bath").getComponent(cc.Animation).off("finished"),
                        t.self.ToolSequence = i.CHARBTB,
                        t.self.ShowHint(t.self.ToolSequence)
                    }));
                else if (t.self.ToolSequence == i.CHARBTB)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.SHAMPOO_BAND)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.HideHand(),
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.SPONGE)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.BathCharacterObj.getComponent(s.default).PlayAnimation("sad_rub", -1),
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.WATER_TUB)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.HAND_CLEANING)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.LEG_CLEAN)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint(),
                    t.self.HideHand());
                else if (t.self.ToolSequence == i.TOWEL2)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.HideHand(),
                    t.self.TowelCharacterObj.getComponent(s.default).PlayAnimation("sad_rub", -1),
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.CLOTH)
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.MoveItem = cc.instantiate(t.self.Tools[t.self.ToolSequence]),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.CanMove = !0,
                    t.self.BeganPoint = c,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.PlaySound("Put_E"),
                    t.self.HideHint());
                else if (t.self.ToolSequence == i.DRESSPOUP)
                    if (cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1").active) {
                        var f = cc.find("Canvas/DropCleaningTowel/DressPopup/Loader");
                        t.self.isTapped(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn1"), n) ? (t.self.PlaySound("Put_E"),
                        t.self.HideHint(),
                        cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn1").active = !1,
                        t.self.ShowHint(t.self.ToolSequence),
                        0 == cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn2").active ? (cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("4").getComponent(cc.Sprite).spriteFrame,
                        t.self.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1").active = !1,
                            cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2").active = !0
                        })))) : cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("3").getComponent(cc.Sprite).spriteFrame) : t.self.isTapped(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn2"), n) && (cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn2").active = !1,
                        t.self.PlaySound("Put_E"),
                        t.self.HideHint(),
                        0 == cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn1").active ? (cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("4").getComponent(cc.Sprite).spriteFrame,
                        t.self.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1").active = !1,
                            cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2").active = !0
                        })))) : cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("2").getComponent(cc.Sprite).spriteFrame,
                        t.self.ShowHint(t.self.ToolSequence))
                    } else
                        cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2").active && (f = cc.find("Canvas/DropCleaningTowel/DressPopup/Loader"),
                        t.self.isTapped(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn1"), n) ? (t.self.PlaySound("Put_E"),
                        t.self.HideHint(),
                        cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn1").active = !1,
                        0 == cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn2").active ? (cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("4").getComponent(cc.Sprite).spriteFrame,
                        t.self.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2").active = !1,
                            cc.find("Canvas/DropCleaningTowel/Character").active = !1,
                            cc.find("Canvas/DropCleaningTowel/Character2").active = !0,
                            cc.find("Canvas/DropCleaningTowel/Character2/charbath_ske" + t.self.SelectedCharacter).getComponent(s.default).StartAnimation(),
                            cc.find("Canvas/DropCleaningTowel/Character2/charbath_ske" + t.self.SelectedCharacter).getComponent(s.default).PlayAnimation("thumbsup", 1),
                            t.self.ViewDoneEffect()
                        })))) : (t.self.ShowHint(t.self.ToolSequence),
                        cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("3").getComponent(cc.Sprite).spriteFrame)) : t.self.isTapped(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn2"), n) && (cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn2").active = !1,
                        t.self.PlaySound("Put_E"),
                        t.self.HideHint(),
                        0 == cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn1").active ? (cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("4").getComponent(cc.Sprite).spriteFrame,
                        t.self.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                            cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2").active = !1,
                            cc.find("Canvas/DropCleaningTowel/Character").active = !1,
                            cc.find("Canvas/DropCleaningTowel/Character2").active = !0,
                            cc.find("Canvas/DropCleaningTowel/Character2/charbath_ske" + t.self.SelectedCharacter).getComponent(s.default).StartAnimation(),
                            cc.find("Canvas/DropCleaningTowel/Character2/charbath_ske" + t.self.SelectedCharacter).getComponent(s.default).PlayAnimation("thumbsup", 1),
                            t.self.ViewDoneEffect()
                        })))) : (t.self.ShowHint(t.self.ToolSequence),
                        cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/1").getComponent(cc.Sprite).spriteFrame = f.getChildByName("2").getComponent(cc.Sprite).spriteFrame)))
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation()
                  , c = t.self.node.convertToNodeSpaceAR(n);
                if (0 != t.self.CanMove)
                    if (t.self.ToolSequence == i.TOWEL)
                        t.self.MoveItem.position = cc.v3(c),
                        t.self.Dirt.children.forEach(function(e) {
                            if (e.opacity >= 5 && e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && (e.opacity -= 5,
                            0 == e.childrenCount)) {
                                var n = cc.instantiate(cc.find("Canvas/Layer/Dirt2"));
                                e.addChild(n),
                                n.position = cc.Vec3.ZERO,
                                n.active = !0
                            }
                        });
                    else if (t.self.ToolSequence == i.TEETHCLEANER)
                        t.self.MoveItem.position = cc.v3(c),
                        t.self.TeethDirt.children.forEach(function(e) {
                            if (e.opacity >= 2 && e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && (e.opacity -= 2,
                            t.self.SelectedCharacterObj.getComponent(s.default).SlotOpacity(e.name, e.opacity),
                            0 == e.childrenCount)) {
                                var n = cc.instantiate(cc.find("Canvas/Layer/TeethDirt"));
                                e.addChild(n),
                                n.position = cc.Vec3.ZERO,
                                n.active = !0
                            }
                        });
                    else if (t.self.ToolSequence == i.CHARBTB)
                        t.self.MoveItem.position = cc.v3(c),
                        cc.v2(0, 0).fuzzyEquals(c, 50) && (t.self.ToolSequence = i.NONE,
                        t.self.CanMove = !1,
                        t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, cc.Vec2.ZERO, 100, 1), cc.callFunc(function() {
                            cc.find("Canvas/Bath/BathCharacter").active = !0,
                            cc.find("Canvas/Bath/WaterTop").active = !0,
                            t.self.ToolSequence = i.SHAMPOO_BAND,
                            t.self.ShowTool(i.SHAMPOO_BAND),
                            t.self.HandEntry(),
                            t.self.PlaySound("put on water proof Hat")
                        }), cc.removeSelf())));
                    else if (t.self.ToolSequence == i.SHAMPOO_BAND)
                        t.self.MoveItem.position = cc.v3(c),
                        cc.v2(22, 156).fuzzyEquals(c, 50) && (t.self.ToolSequence = i.NONE,
                        t.self.CanMove = !1,
                        t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, cc.v2(22, 152), 100, 1), cc.callFunc(function() {
                            t.self.CapCharacter.active = !0,
                            t.self.ShowTool(i.SPONGE),
                            t.self.ExtraEntry(i.SPONGE)
                        }), cc.removeSelf())));
                    else if (t.self.ToolSequence == i.SPONGE)
                        t.self.MoveItem.position = cc.v3(c),
                        t.self.Bubble.children.forEach(function(e) {
                            if (0 == e.opacity && 0 == e.getNumberOfRunningActions() && e.getBoundingBoxToWorld().contains(n)) {
                                e.scale = 0,
                                e.opacity = 0;
                                var t = Math.random() + 1.5;
                                e.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, t), cc.fadeTo(.3, 255)), cc.repeat(cc.sequence(cc.scaleTo(.3, 1.1 * t), cc.scaleTo(.3, t)), 1e4)))
                            }
                        });
                    else if (t.self.ToolSequence == i.WATER_TUB)
                        t.self.MoveItem.position = cc.v3(c),
                        cc.v2(48, 210).fuzzyEquals(c, 40) && (t.self.CanMove = !1,
                        t.self.ToolSequence = i.NONE,
                        t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, cc.v2(48, 210), 100, 1), cc.callFunc(function() {
                            t.self.Bubble.children.forEach(function(e) {
                                var n = 1 * Math.random();
                                e.stopAllActions(),
                                e.runAction(cc.sequence(cc.delayTime(2 * Math.random()), cc.spawn(cc.scaleTo(n, 0), cc.moveBy(n, cc.v2(200 * -Math.random(), 0)), cc.fadeTo(n, 255)), cc.hide()))
                            }),
                            cc.find("Canvas/Bath").getComponent(cc.Animation).play("BathShower"),
                            cc.find("Canvas/Bath").getComponent(cc.Animation).on("finished", function() {
                                cc.find("Canvas/Bath").getComponent(cc.Animation).off("finished"),
                                t.self.BathCharacterObj.getComponent(s.default).PlayAnimation("idle", -1),
                                t.self.ExtraEntry(i.HAND_CLEANING),
                                t.self.ShowHint(t.self.ToolSequence),
                                t.self.PlaySound("wash your little hands")
                            })
                        }), cc.removeSelf())));
                    else if (t.self.ToolSequence == i.HAND_CLEANING) {
                        t.self.MoveItem.position = cc.v3(c);
                        var o = cc.find("Canvas/Bath/ArmL").children[0]
                          , a = cc.find("Canvas/Bath/ArmR").children[0];
                        if (o.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && o.opacity >= 5 && (o.opacity -= 5),
                        a.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && a.opacity >= 5 && (a.opacity -= 5),
                        cc.find("Canvas/Bath/ArmL/Bubble").children.forEach(function(e) {
                            0 == e.opacity && e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && e.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 1), cc.fadeTo(.3, 255)), cc.repeat(cc.sequence(cc.scaleTo(.3, 1.1), cc.scaleTo(.2, 1)), 1e3)))
                        }),
                        cc.find("Canvas/Bath/ArmR/Bubble").children.forEach(function(e) {
                            0 == e.opacity && e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && e.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 1), cc.fadeTo(.3, 255)), cc.repeat(cc.sequence(cc.scaleTo(.3, 1.1), cc.scaleTo(.2, 1)), 1e3)))
                        }),
                        0 == o.opacity && 0 == a.opacity) {
                            t.self.CanMove = !1,
                            t.self.ToolSequence = i.NONE,
                            t.self.MoveItem.runAction(cc.sequence(cc.moveBy(.3, cc.v2(800, 0)), cc.callFunc(function() {
                                t.self.ToolSequence = i.LEG_CLEAN,
                                cc.find("Canvas/Bath/LegClean").active = !0,
                                cc.find("Canvas/Bath/LegClean").scale = 0,
                                cc.find("Canvas/Bath/LegClean").runAction(cc.sequence(cc.delayTime(2), cc.scaleTo(.5, 1).easing(cc.easeBounceOut()), cc.delayTime(.5), cc.callFunc(function() {
                                    t.self.HandEntry()
                                }))),
                                t.self.ShowTool(i.LEG_CLEAN),
                                t.self.PlaySound("then wipe her little feet")
                            }), cc.removeSelf()));
                            var l = t.self.BathCharacterObj.getComponent(s.default);
                            l.ShowSlots("LowerArm_L"),
                            l.ShowSlots("LowerArm_R"),
                            l.ShowSlots("Hand1L"),
                            l.ShowSlots("Hand1R"),
                            l.ShowSlots("UpperArm_L"),
                            l.ShowSlots("UpperArm_R"),
                            l.PlayAnimation("bounce", 1),
                            cc.find("Canvas/Bath/ArmL").runAction(cc.scaleTo(.5, .4, 0)),
                            cc.find("Canvas/Bath/ArmR").runAction(cc.scaleTo(.5, -.4, 0)),
                            cc.find("Canvas/Bath/ArmL/Bubble").children.forEach(function(e) {
                                e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && e.runAction(cc.spawn(cc.moveBy(.3, cc.v2(0, -100)), cc.scaleTo(.3, 0)))
                            }),
                            cc.find("Canvas/Bath/ArmR/Bubble").children.forEach(function(e) {
                                e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && e.runAction(cc.spawn(cc.moveBy(.3, cc.v2(0, -100)), cc.scaleTo(.3, 0)))
                            })
                        }
                    } else
                        t.self.ToolSequence == i.LEG_CLEAN ? (t.self.MoveItem.position = cc.v3(c),
                        (o = cc.find("Canvas/Bath/LegClean/Leg")).children.forEach(function(e) {
                            e.opacity >= 5 && e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getChildByName("Intersect").getBoundingBoxToWorld()) && (e.opacity -= 5)
                        }),
                        cc.find("Canvas/Bath/LegClean/BubbleL").children.forEach(function(e) {
                            e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getChildByName("Intersect").getBoundingBoxToWorld()) && (0 == e.getNumberOfRunningActions() && e.runAction(cc.sequence(cc.scaleTo(.3, 1), cc.repeat(cc.sequence(cc.scaleTo(.3, 1.1), cc.scaleTo(.2, 1)), 1e3))),
                            e.opacity <= 250 && (e.opacity += 5))
                        }),
                        cc.find("Canvas/Bath/LegClean/BubbleR").children.forEach(function(e) {
                            e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getChildByName("Intersect").getBoundingBoxToWorld()) && (0 == e.getNumberOfRunningActions() && e.runAction(cc.sequence(cc.scaleTo(.3, 1), cc.repeat(cc.sequence(cc.scaleTo(.3, 1.1), cc.scaleTo(.2, 1)), 1e3))),
                            e.opacity <= 250 && (e.opacity += 5))
                        })) : t.self.ToolSequence == i.TOWEL2 ? (t.self.MoveItem.position = cc.v3(c),
                        t.self.WaterBubble.forEach(function(e) {
                            e.opacity >= 5 && e.getBoundingBoxToWorld().intersects(t.self.MoveItem.getBoundingBoxToWorld()) && (e.opacity -= 5)
                        })) : t.self.ToolSequence == i.CLOTH && (t.self.MoveItem.position = cc.v3(c),
                        cc.v2(0, 25).fuzzyEquals(c, 80) && (t.self.CanMove = !1,
                        t.self.ToolSequence = i.NONE,
                        t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, cc.v2(0, 25), 100, 1), cc.callFunc(function() {
                            cc.find("Canvas/DropCleaningTowel/DressPopup").active = !0,
                            t.self.ToolSequence = i.DRESSPOUP,
                            t.self.ShowHint(t.self.ToolSequence)
                        }), cc.removeSelf()))))
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n),
                0 != t.self.CanMove && (t.self.CanMove = !1,
                t.self.ToolSequence == i.TOWEL ? (t.self.HandEntry(),
                t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0;
                    var e = !0;
                    t.self.Dirt.children.forEach(function(n) {
                        n.opacity >= 5 && (e = !1)
                    }),
                    e ? (t.self.HideHand(),
                    t.self.ToolSequence = i.TEETHCLEANER,
                    t.self.SelectedCharacterObj.getComponent(s.default).StartAnimation(),
                    t.self.SelectedCharacterObj.getComponent(s.default).PlayAnimation("happy2", 1),
                    t.self.SelectedCharacterObj.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                        t.self.SelectedCharacterObj.getComponent(s.default).PlayAnimation("mouthcleaning", -1),
                        t.self.SelectedCharacterObj.getComponent(s.default).ShowSlots("dirt1"),
                        t.self.SelectedCharacterObj.getComponent(s.default).ShowSlots("dirt2"),
                        t.self.ShowTool(i.TEETHCLEANER),
                        t.self.HandEntry(),
                        t.self.PlaySound("clean teeth")
                    })))) : t.self.SelectedCharacterObj.getComponent(s.default).PlayAnimation("sad", -1)
                }), cc.removeSelf()))) : t.self.ToolSequence == i.TEETHCLEANER ? (t.self.HandEntry(),
                t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0;
                    var e = !0;
                    t.self.TeethDirt.children.forEach(function(n) {
                        n.opacity > 2 && (e = !1)
                    }),
                    e && (t.self.HideHand(),
                    t.self.Scene2Entry())
                }), cc.removeSelf()))) : t.self.ToolSequence == i.CHARBTB ? t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0,
                    t.self.ShowHint(t.self.ToolSequence)
                }), cc.removeSelf())) : t.self.ToolSequence == i.SHAMPOO_BAND ? (t.self.HandEntry(),
                t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0,
                    t.self.ShowHint(t.self.ToolSequence)
                }), cc.removeSelf()))) : t.self.ToolSequence == i.SPONGE ? t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0;
                    var e = !0;
                    t.self.BathCharacterObj.getComponent(s.default).PlayAnimation("idle", -1),
                    t.self.Bubble.children.forEach(function(n) {
                        0 == n.opacity && (e = !1)
                    }),
                    e ? (t.self.Tools[t.self.ToolSequence].runAction(cc.moveBy(.3, cc.v2(500, 0))),
                    t.self.ToolSequence = i.NONE,
                    t.self.BathCharacterObj.getComponent(s.default).PlayAnimation("happy1", 1),
                    t.self.ExtraEntry(i.WATER_TUB),
                    t.self.ShowHint(t.self.ToolSequence)) : t.self.ShowHint(t.self.ToolSequence)
                }), cc.removeSelf())) : t.self.ToolSequence == i.WATER_TUB ? t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0,
                    t.self.ShowHint(t.self.ToolSequence)
                }), cc.removeSelf())) : t.self.ToolSequence == i.HAND_CLEANING ? t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0,
                    t.self.ShowHint(t.self.ToolSequence)
                }), cc.removeSelf())) : t.self.ToolSequence == i.LEG_CLEAN ? (t.self.HandEntry(),
                t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0;
                    var e = !0;
                    cc.find("Canvas/Bath/LegClean/Leg").children.forEach(function(n) {
                        n.opacity >= 2 && (e = !1)
                    }),
                    e ? (t.self.HideHand(),
                    cc.find("Canvas/Bath/LegClean/BubbleL").children.forEach(function(e) {
                        e.runAction(cc.fadeOut(.3))
                    }),
                    cc.find("Canvas/Bath/LegClean/BubbleR").children.forEach(function(e) {
                        e.runAction(cc.fadeOut(.3))
                    }),
                    cc.find("Canvas/Bath/LegClean").runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.5, 0).easing(cc.easeBounceIn()), cc.callFunc(function() {
                        var e = cc.find("Canvas/DropCleaningTowel");
                        t.self.BathCharacterObj.getComponent(s.default).PlayAnimation("happy1", 1),
                        e.opacity = 0,
                        e.active = !0,
                        e.runAction(cc.sequence(cc.delayTime(2), cc.fadeIn(.5), cc.callFunc(function() {
                            t.self.ShowTool(i.TOWEL2),
                            t.self.HandEntry(),
                            t.self.ToolSequence = i.TOWEL2,
                            t.self.ShowHint(t.self.ToolSequence),
                            t.self.PlaySound("wipe her face")
                        })))
                    })))) : t.self.ShowHint(t.self.ToolSequence)
                }), cc.removeSelf()))) : t.self.ToolSequence == i.TOWEL2 ? (t.self.HandEntry(),
                t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0;
                    var e = !0;
                    t.self.WaterBubble.forEach(function(n) {
                        n.opacity >= 5 && (e = !1)
                    }),
                    e ? (t.self.HideHand(),
                    t.self.TowelCharacterObj.getComponent(s.default).StartAnimation(),
                    t.self.TowelCharacterObj.getComponent(s.default).PlayAnimation("bouncing", 1),
                    t.self.ToolSequence = i.NONE,
                    t.self.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                        t.self.ExtraEntry(i.CLOTH),
                        t.self.ShowHint(t.self.ToolSequence),
                        t.self.PlaySound("cute look cloth")
                    })))) : (t.self.TowelCharacterObj.getComponent(s.default).PlayAnimation("sad", -1),
                    t.self.ShowHint(t.self.ToolSequence))
                }), cc.removeSelf()))) : t.self.ToolSequence == i.CLOTH && t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0,
                    t.self.ShowHint(t.self.ToolSequence)
                }), cc.removeSelf())))
            }
            ,
            n.prototype.Scene2Entry = function() {
                t.self.ToolSequence = i.BLUE_VALVE,
                t.self.SelectedCharacterObj.getComponent(s.default).StartAnimation(),
                t.self.SelectedCharacterObj.getComponent(s.default).PlayAnimation("happy1", 1),
                t.self.SelectedCharacterObj.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    t.self.HideHand(),
                    t.self.node.getComponent(cc.Animation).play("BathSlide1"),
                    t.self.node.getComponent(cc.Animation).on("finished", function() {
                        t.self.node.getComponent(cc.Animation).off("finished");
                        var e = cc.find("Canvas/Bath/Popup");
                        e.active = !0,
                        e.scale = 0,
                        e.runAction(cc.sequence(cc.scaleTo(.5, 1).easing(cc.easeBounceOut()), cc.callFunc(function() {
                            t.self.ShowHint(t.self.ToolSequence),
                            t.self.PlaySound("water temprature first")
                        })))
                    })
                })))
            }
            ,
            n.prototype.HandEntry = function() {
                this.Hand.stopAllActions(),
                this.PlaySound("Entry"),
                this.Hand.runAction(cc.sequence(cc.moveTo(.3, cc.v2(319, -193)), cc.callFunc(function() {
                    t.self.ShowHint(t.self.ToolSequence)
                })))
            }
            ,
            n.prototype.HideHand = function() {
                this.HideHint(),
                this.Hand.stopAllActions(),
                this.Hand.runAction(cc.moveTo(.3, cc.v2(319, -493)))
            }
            ,
            n.prototype.isTapped = function(e, n) {
                return !!e.getBoundingBoxToWorld().contains(n)
            }
            ,
            n.prototype.ExtraEntry = function(e) {
                switch (e) {
                case i.SPONGE:
                    var n = cc.find("Canvas/Bath/Sponge1");
                    n.position = cc.v3(600, 7, 0),
                    cc.tween(n).to(.5, {
                        position: cc.v3(246, 7, 0)
                    }).call(function() {
                        cc.find("Canvas/Bath").getComponent(cc.Animation).play("ShampooInSponge"),
                        cc.find("Canvas/Bath").getComponent(cc.Animation).on("finished", function() {
                            cc.find("Canvas/Bath").getComponent(cc.Animation).off("finished"),
                            t.self.ToolSequence = i.SPONGE,
                            t.self.ShowHint(t.self.ToolSequence)
                        })
                    }).start();
                    break;
                case i.WATER_TUB:
                    this.Tools[i.WATER_TUB].position = cc.v3(500, -22, 0),
                    cc.tween(this.Tools[i.WATER_TUB]).to(.5, {
                        position: cc.v3(294, -22, 0)
                    }).call(function() {
                        t.self.ToolSequence = i.WATER_TUB,
                        t.self.ShowHint(t.self.ToolSequence)
                    }).start();
                    break;
                case i.HAND_CLEANING:
                    cc.find("Canvas/Bath/ArmL").runAction(cc.scaleTo(.5, .4, .5)),
                    cc.find("Canvas/Bath/ArmR").runAction(cc.scaleTo(.5, -.4, .5)),
                    this.Tools[i.HAND_CLEANING].position = cc.v3(500, -125, 0);
                    var c = this.BathCharacterObj.getComponent(s.default);
                    c.HideSlots("LowerArm_L"),
                    c.HideSlots("LowerArm_R"),
                    c.HideSlots("Hand1L"),
                    c.HideSlots("Hand1R"),
                    c.HideSlots("UpperArm_L"),
                    c.HideSlots("UpperArm_R"),
                    cc.tween(this.Tools[i.HAND_CLEANING]).to(.5, {
                        position: cc.v3(89, -125, 0)
                    }).call(function() {
                        t.self.ToolSequence = i.HAND_CLEANING,
                        t.self.ShowHint(t.self.ToolSequence)
                    }).start();
                    break;
                case i.CLOTH:
                    var o = cc.v2(289, -82);
                    this.Tools[i.CLOTH].active = !0,
                    this.Tools[i.CLOTH].position = cc.v3(o.x + 800, o.y, 0),
                    this.Tools[i.CLOTH].runAction(cc.sequence(cc.moveTo(.3, cc.v2(o)), cc.callFunc(function() {
                        t.self.ToolSequence = i.CLOTH,
                        t.self.ShowHint(t.self.ToolSequence)
                    })))
                }
            }
            ,
            n.prototype.ShowTool = function(e) {
                switch (this.Hand.children.forEach(function(e) {
                    e.active = !1
                }),
                e) {
                case i.TOWEL:
                    this.Hand.getChildByName("Towel").active = !0;
                    break;
                case i.TEETHCLEANER:
                    this.Hand.getChildByName("ToothCleaner").active = !0;
                    break;
                case i.SHAMPOO_BAND:
                    this.Hand.getChildByName("Cap").active = !0;
                    break;
                case i.SPONGE:
                    cc.find("Canvas/Bath/Sponge1").active = !0;
                    break;
                case i.LEG_CLEAN:
                    cc.find("Canvas/Hand/Brush").active = !0;
                    break;
                case i.TOWEL2:
                    this.Hand.getChildByName("Towel").active = !0
                }
            }
            ,
            n.prototype.ShowHint = function(e) {
                var n = cc.find("Canvas/hint2");
                n.stopAllActions();
                var c = cc.v2(565655, 66)
                  , o = cc.v2(565655, 66);
                switch (n.active = !0,
                n.position = cc.v3(5656, 56565, 0),
                e) {
                case i.TOWEL:
                    c = this.getPosition(this.Hand.getChildByName("Towel")),
                    c = cc.v2(c.x - 40, c.y - 40),
                    o = cc.v2(22, 66),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.TEETHCLEANER:
                    c = this.getPosition(this.Hand.getChildByName("ToothCleaner")),
                    c = cc.v2(c.x - 40, c.y - 40),
                    o = cc.v2(22, 30),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.BLUE_VALVE:
                    c = this.getPosition(cc.find("Canvas/Bath/Popup/1/Btn")),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.callFunc(function() {
                        n.getComponent(cc.Animation).play()
                    }), cc.delayTime(1)), 5));
                    break;
                case i.RED_VALVE:
                    c = this.getPosition(cc.find("Canvas/Bath/Popup/2/Btn")),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.callFunc(function() {
                        n.getComponent(cc.Animation).play()
                    }), cc.delayTime(1)), 5));
                    break;
                case i.BELT:
                    c = this.getPosition(t.self.Tools[t.self.ToolSequence]),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.callFunc(function() {
                        n.getComponent(cc.Animation).play()
                    }), cc.delayTime(1)), 5));
                    break;
                case i.CHARBTB:
                    c = cc.v2(-294, -119),
                    o = cc.v2(22, 30),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.SHAMPOO_BAND:
                    c = this.getPosition(this.Hand.getChildByName("Cap")),
                    c = cc.v2(c.x - 40, c.y - 40),
                    o = cc.v2(18, 186.5),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.SPONGE:
                    c = cc.v2(242, 10),
                    o = cc.v2(11, 187.5),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.WATER_TUB:
                    c = cc.v2(257, -11.5),
                    o = cc.v2(13, 211.5),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.HAND_CLEANING:
                    c = cc.v2(89, -116.5),
                    o = cc.v2(8, 17.5),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.LEG_CLEAN:
                    c = cc.v2(321, -96.5),
                    o = cc.v2(-112, -5.5),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.TOWEL2:
                    c = cc.v2(321, -100.5),
                    o = cc.v2(0, 40),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.CLOTH:
                    c = cc.v2(288, -72.5),
                    o = cc.v2(0, 0),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, o), cc.hide(), cc.delayTime(1)), 5));
                    break;
                case i.DRESSPOUP:
                    cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1").active ? cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn1").active ? (c = this.getPosition(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn1")),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.callFunc(function() {
                        n.getComponent(cc.Animation).play()
                    }), cc.delayTime(1)), 5))) : cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn2").active && (c = this.getPosition(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose1/Btn2")),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.callFunc(function() {
                        n.getComponent(cc.Animation).play()
                    }), cc.delayTime(1)), 5))) : cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn1").active ? (c = this.getPosition(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn1")),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.callFunc(function() {
                        n.getComponent(cc.Animation).play()
                    }), cc.delayTime(1)), 5))) : cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn2").active && (c = this.getPosition(cc.find("Canvas/DropCleaningTowel/DressPopup/Pose2/Btn2")),
                    n.runAction(cc.repeat(cc.sequence(cc.place(c), cc.hide(), cc.delayTime(1), cc.show(), cc.callFunc(function() {
                        n.getComponent(cc.Animation).play()
                    }), cc.delayTime(1)), 5)))
                }
            }
            ,
            n.prototype.HideHint = function() {
                var e = cc.find("Canvas/hint2");
                e.stopAllActions(),
                e.active = !1
            }
            ,
            n.prototype.getPosition = function(e) {
                var n = cc.v2(e.getBoundingBoxToWorld().xMin + e.getContentSize().width / 2, e.getBoundingBoxToWorld().yMin + e.getContentSize().height / 2);
                return this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))
            }
            ,
            n.prototype.ViewDoneEffect = function() {
                cc.find("Canvas/Done").active = !0,
                this.FinishParticle()
            }
            ,
            n.prototype.DoneAction = function(e) {
                e.target.getComponent(cc.Button).interactable = !1,
                l.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene("Dressup"),
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    cc.director.loadScene("Dressup")
                })))
            }
            ,
            n.prototype.PlaySound = function(e) {
                var n = cc.find("Canvas/SoundNode/" + e);
                n && n.getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.StopSound = function(e) {
                var n = cc.find("Canvas/SoundNode/" + e);
                n && n.getComponent(cc.AudioSource).stop()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([f], n)
        }(cc.Component);
        t.default = d,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    Character: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "8856edxxTtPjKFBxuoCFbjg", "Character");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s = e("./DresUp"), l = e("./Picnic4"), r = cc._decorator, f = r.ccclass;
        r.property,
        function(e) {
            e[e.NORMAL = 0] = "NORMAL",
            e[e.HAPPY = 1] = "HAPPY",
            e[e.SAD = 2] = "SAD",
            e[e.ANGRY = 3] = "ANGRY"
        }(i || (i = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.NormalAnimation = [],
                n.HappyAnimation = [],
                n.SadAnimation = [],
                n.AngryAnimation = [],
                n.Extra = [],
                n.AnimationName = [],
                n.CharacterObj = null,
                n.AnimationCounter = 0,
                n.AnimationState = i.NORMAL,
                n.SceneName = "",
                n.isInit = !1,
                n.Stack = [],
                n.TempStack = [],
                n.Counter = 0,
                n
            }
            return o(n, e),
            n.prototype.onLoad = function() {
                this.CharacterObj = this.node.getComponent(dragonBones.ArmatureDisplay),
                this.NormalAnimation.push("idle"),
                this.HappyAnimation.push("happy1"),
                this.SadAnimation.push("sad"),
                this.AngryAnimation.push("angry"),
                this.SceneName = cc.director.getScene().name,
                this.HideSlots("dirt1"),
                this.HideSlots("dirt2"),
                this.HideSlots("apron"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("looking"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("lookingright"),
                this.AnimationName.push("lookingleft"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("happy2"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("lookingleft"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("lookingleft"),
                this.AnimationName.push("lookingright"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("clap"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("lookingright"),
                this.AnimationName.push("lookingleft"),
                this.AnimationName.push("idle"),
                this.AnimationName.push("idle")
            }
            ,
            n.prototype.addAnimationStack = function(e, n) {
                e == i.NORMAL ? this.NormalAnimation.push(n) : e == i.HAPPY ? this.HappyAnimation.push(n) : e == i.SAD ? this.SadAnimation.push(n) : e == i.ANGRY && this.AngryAnimation.push(n)
            }
            ,
            n.prototype.start = function() {}
            ,
            n.prototype.RegisterIdle = function() {
                this.CharacterObj.playAnimation("idle", 1),
                this.CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, this.PlayIdle.bind(this))
            }
            ,
            n.prototype.StartAnimation = function() {
                0 == this.isInit && (this.CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, this.FinishAnimation.bind(this)),
                this.isInit = !0)
            }
            ,
            n.prototype.Register = function(e) {
                0 == this.isInit && (this.CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, e.AnimationFinishCallback.bind(this)),
                this.isInit = !0)
            }
            ,
            n.prototype.DeRegister = function(e) {
                this.isInit && (this.CharacterObj.removeEventListener(dragonBones.EventObject.COMPLETE, e.AnimationFinishCallback.bind(this)),
                this.isInit = !1)
            }
            ,
            n.prototype.RemoveAnimationCallBack = function() {
                this.CharacterObj.removeEventListener(dragonBones.EventObject.COMPLETE, this.FinishAnimation.bind(this))
            }
            ,
            n.prototype.HideSlots = function(e) {
                this.CharacterObj && this.CharacterObj.armature() && this.CharacterObj.armature()._slots.forEach(function(n) {
                    n.name == e && (n._color.a = 0)
                })
            }
            ,
            n.prototype.ShowSlots = function(e) {
                this.CharacterObj.armature() && this.CharacterObj.armature()._slots.forEach(function(n) {
                    n.name == e && (n._color.a = 255)
                })
            }
            ,
            n.prototype.SlotOpacity = function(e, n) {
                this.CharacterObj.armature()._slots.forEach(function(t) {
                    t.name == e && (t._color.a = n)
                })
            }
            ,
            n.prototype.FinishAnimation = function() {
                "Dressup" == this.SceneName ? (s.default.self.SplashAnimation(),
                this.RemoveAnimationCallBack()) : "Picnic4" == this.SceneName ? l.default.self.AnimationFinishCallback() : this.AnimationState == i.HAPPY ? (this.AnimationCounter % 3 == 0 ? this.CharacterObj.playAnimation(this.HappyAnimation[this.getRandomInt(0, this.HappyAnimation.length - 1)], 1) : this.CharacterObj.playAnimation(this.NormalAnimation[this.getRandomInt(0, this.NormalAnimation.length - 1)], 1),
                this.AnimationCounter++,
                this.AnimationCounter > 20 && (this.AnimationState = i.NORMAL,
                this.AnimationCounter = 0)) : this.AnimationState == i.SAD || 0 == this.AngryAnimation.length ? (this.CharacterObj.playAnimation(this.SadAnimation[this.getRandomInt(0, this.SadAnimation.length - 1)], 1),
                this.AnimationCounter++,
                this.AnimationCounter > 30 && (this.AnimationState = i.ANGRY)) : this.AnimationState == i.ANGRY ? (this.AnimationCounter % 3 == 0 ? this.CharacterObj.playAnimation(this.AngryAnimation[this.getRandomInt(0, this.AngryAnimation.length - 1)], 1) : this.CharacterObj.playAnimation(this.NormalAnimation[this.getRandomInt(0, this.NormalAnimation.length - 1)], 1),
                this.AnimationCounter++) : (this.CharacterObj.playAnimation(this.NormalAnimation[this.getRandomInt(0, this.NormalAnimation.length - 1)], 1),
                this.AnimationCounter++,
                this.AnimationCounter > 10 && (this.AnimationState = i.HAPPY))
            }
            ,
            n.prototype.PlayAnimation = function(e, n) {
                this.CharacterObj && this.CharacterObj.playAnimation(e, n)
            }
            ,
            n.prototype.getRandomInt = function(e, n) {
                return e = Math.ceil(e),
                n = Math.floor(n) + 1,
                Math.floor(Math.random() * (n - e)) + e
            }
            ,
            n.prototype.PrintAllAnimationsName = function() {
                for (var e = this.CharacterObj.getAnimationNames(this.CharacterObj.armatureName), n = 0; n < e.length; n++)
                    console.log(e[n])
            }
            ,
            n.prototype.PrintAllSlotName = function() {
                this.CharacterObj.armature()._slots.forEach(function(e) {
                    console.log(e.name)
                })
            }
            ,
            n.prototype.shuffle = function(e) {
                for (var n, t, c = e.length; 0 !== c; )
                    t = Math.floor(Math.random() * c),
                    n = e[c -= 1],
                    e[c] = e[t],
                    e[t] = n;
                return e
            }
            ,
            n.prototype.PlayIdle = function() {
                this.Counter++,
                this.Counter >= this.AnimationName.length && (this.Counter = 0),
                this.CharacterObj.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.AnimationName[this.Counter], 1)
            }
            ,
            a([f], n)
        }(cc.Component);
        t.default = d,
        cc._RF.pop()
    }
    , {
        "./DresUp": "DresUp",
        "./Picnic4": "Picnic4"
    }],
    DresUp: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "5d669rYSQZGGIoJaW+RRPzV", "DresUp");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.CanMove = !1,
                n.MoveItem = null,
                n.BeganPoint = null,
                n.SelectedCharacter = 1,
                n.SelectedCharacterObj = null,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                cc.find("Canvas/Character/dressupcharacter_ske1").active = !1,
                cc.find("Canvas/Character/dressupcharacter_ske2").active = !1,
                cc.find("Canvas/Character/dressupcharacter_ske3").active = !1,
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                console.log(this.SelectedCharacter),
                cc.find("Canvas/Character/dressupcharacter_ske" + this.SelectedCharacter).active = !0,
                this.SelectedCharacterObj = cc.find("Canvas/Character/dressupcharacter_ske" + this.SelectedCharacter),
                this.SelectedCharacterObj.active = !0,
                this.Hint = cc.find("Canvas/hint2")
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.ShowHint()
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                var e = cc.v2(-22, -40.5)
                  , n = cc.v2(-242, -90.5);
                this.Hint.active = !0,
                this.Hint.stopAllActions(),
                this.Hint.runAction(cc.repeat(cc.sequence(cc.place(e), cc.hide(), cc.delayTime(1), cc.show(), cc.moveTo(1.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(1)), 5))
            }
            ,
            n.prototype.HideHint = function() {
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation()
                  , c = t.self.node.convertToNodeSpaceAR(n);
                cc.find("Canvas/MoveNode").childrenCount > 0 || cc.find("Canvas/Cupboard").children.forEach(function(e) {
                    0 == t.self.CanMove && t.self.isTapped(e, n) && (t.self.MoveItem = cc.instantiate(e),
                    cc.find("Canvas/MoveNode").addChild(t.self.MoveItem),
                    t.self.MoveItem.position = cc.v3(c),
                    t.self.BeganPoint = c,
                    t.self.CanMove = !0,
                    e.active = !1,
                    t.self.HideHint(),
                    t.self.PlaySound("Click"))
                })
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation()
                  , c = t.self.node.convertToNodeSpaceAR(n);
                0 != t.self.CanMove && (t.self.MoveItem.position = cc.v3(c),
                cc.find("Canvas/Intersect").getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !1,
                t.self.Hint.opacity = 0,
                t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, cc.v2(-241, -44), 200, 1), cc.callFunc(function() {
                    cc.find("Canvas/Cupboard").getChildByName(t.self.MoveItem.name).active = !0,
                    t.self.SelectedCharacterObj.getComponent(i.default).StartAnimation(),
                    t.self.SelectedCharacterObj.getComponent(i.default).PlayAnimation("dress" + t.self.MoveItem.name, 1),
                    "1" == t.self.MoveItem.name || "2" == t.self.MoveItem.name ? t.self.PlaySound("1 2") : t.self.PlaySound(t.self.MoveItem.name)
                }), cc.removeSelf()))))
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n),
                0 != t.self.CanMove && (t.self.CanMove = !1,
                t.self.MoveItem.runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    cc.find("Canvas/Cupboard").getChildByName(t.self.MoveItem.name).active = !0,
                    t.self.node.stopAllActions(),
                    t.self.PlaySound("sfx24902021"),
                    t.self.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
                        t.self.ShowHint()
                    })))
                }), cc.removeSelf())))
            }
            ,
            n.prototype.isTapped = function(e, n) {
                return !!e.getBoundingBoxToWorld().contains(n)
            }
            ,
            n.prototype.SplashAnimation = function() {
                cc.find("Canvas/Splash").active = !0,
                cc.find("Canvas/Splash").getComponent(cc.Animation).play(),
                cc.find("Canvas/Splash").getComponent(cc.Animation).on("finished", function() {
                    cc.find("Canvas/Splash").getComponent(cc.Animation).off("finished"),
                    t.self.SelectedCharacterObj.getComponent(i.default).PlayAnimation("idle", -1),
                    cc.find("Canvas/Done").active = !0
                })
            }
            ,
            n.prototype.DoneAction = function(e) {
                e.target.getComponent(cc.Button).interactable = !1,
                s.default.self.requestAds(),
                cc.sys.localStorage.setItem("SelectedView", "2"),
                cc.sys.localStorage.setItem("isViewDone1", 1),
                this.PlaySound("Click"),
                this.FinishParticle(),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.loadScene("LevelScene")
                })))
            }
            ,
            n.prototype.PlaySound = function(e) {
                var n = cc.find("Canvas/SoundNode/" + e);
                n && n.getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    FeedTheBaby2: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "34120Bhh4VFOJMK+4gfIse3", "FeedTheBaby2");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s = e("./Promotion"), l = cc._decorator, r = l.ccclass, f = l.property;
        (function(e) {
            e[e.APRON = 0] = "APRON",
            e[e.MILKBOTTLE = 1] = "MILKBOTTLE",
            e[e.DONE = 2] = "DONE"
        }
        )(i || (i = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.ToolSequence = 0,
                n.CanMove = !1,
                n.SelectedCharacter = 1,
                n.Tools = [],
                n.hint = null,
                n.char = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this
            }
            ,
            n.prototype.getRandomInt = function(e, n) {
                return e = Math.ceil(e),
                n = Math.floor(n) + 1,
                Math.floor(Math.random() * (n - e)) + e
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                this.SelectedCharacter > 3 && (this.SelectedCharacter = 1),
                cc.find("Canvas/Chair/char_ske" + this.SelectedCharacter).active = !0,
                t.self.char = cc.find("Canvas/Chair/char_ske" + this.SelectedCharacter).getComponent(dragonBones.ArmatureDisplay),
                this.char.armature().getSlot("dirt1")._color.a = 0,
                this.char.armature().getSlot("dirt2")._color.a = 0,
                this.char.armature().getSlot("apron")._color.a = 0,
                this.char.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                    switch (t.self.getRandomInt(1, 20)) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                    case 11:
                        t.self.char.armature().animation.fadeIn("idle", .2, 1);
                        break;
                    case 2:
                        t.self.char.armature().animation.fadeIn("bouncing", .2, 1);
                        break;
                    case 4:
                        t.self.char.armature().animation.fadeIn("lookingright", .2, 1);
                        break;
                    case 6:
                        t.self.char.armature().animation.fadeIn("looking", .2, 1);
                        break;
                    case 8:
                        t.self.ToolSequence == i.DONE ? t.self.char.armature().animation.fadeIn("happy1", .2, 1) : t.self.char.armature().animation.fadeIn("hungry", .2, 1);
                        break;
                    case 10:
                        t.self.ToolSequence == i.DONE ? t.self.char.armature().animation.fadeIn("happy2", .2, 1) : t.self.char.armature().animation.fadeIn("angry", .2, 1);
                        break;
                    case 12:
                        t.self.ToolSequence == i.DONE ? t.self.char.armature().animation.fadeIn("happy2", .2, 1) : t.self.char.armature().animation.fadeIn("sad", .2, 1);
                        break;
                    default:
                        t.self.char.armature().animation.fadeIn("idle", .2, 1)
                    }
                }, t.self.char),
                this.showHint(.2),
                this.playaudio("put on a bed", !1)
            }
            ,
            n.prototype.toolCompleteAnimation = function() {
                switch (t.self.getRandomInt(0, 2)) {
                case 0:
                    t.self.char.armature().animation.fadeIn("clap", .2, 1);
                    break;
                case 1:
                    t.self.char.armature().animation.fadeIn("thumbsup", .2, 1)
                }
            }
            ,
            n.prototype.isTapped = function(e, n) {
                return !!e.getBoundingBoxToWorld().contains(n)
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation();
                switch (t.self.node.convertToNodeSpaceAR(n),
                t.self.ToolSequence) {
                case i.APRON:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.CanMove = !0,
                    cc.Tween.stopAllByTarget(t.self.Tools[t.self.ToolSequence]),
                    t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(700, 0))),
                    t.self.resetHint());
                    break;
                case i.MILKBOTTLE:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && 0 == t.self.Tools[t.self.ToolSequence].getNumberOfRunningActions() && (t.self.CanMove = !0,
                    cc.Tween.stopAllByTarget(t.self.Tools[t.self.ToolSequence]),
                    t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 252))),
                    t.self.resetHint())
                }
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation();
                if (t.self.node.convertToNodeSpaceAR(n),
                t.self.CanMove)
                    switch (t.self.ToolSequence) {
                    case i.APRON:
                        t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(700, 0)));
                        break;
                    case i.MILKBOTTLE:
                        t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 252)))
                    }
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                if (t.self.node.convertToNodeSpaceAR(n),
                t.self.CanMove)
                    switch (t.self.ToolSequence) {
                    case i.APRON:
                        t.self.CanMove = !1,
                        t.self.isTapped(cc.find("Canvas/babyactivearea"), n) ? (t.self.Tools[t.self.ToolSequence].active = !1,
                        t.self.ToolSequence = i.MILKBOTTLE,
                        t.self.char.armature().getSlot("apron")._color.a = 255,
                        cc.tween(cc.find("Canvas/Hand")).by(1, {
                            position: cc.v3(0, -180, 0)
                        }, {
                            easing: "backOut"
                        }).start(),
                        t.self.resetHint(),
                        t.self.showHint(1),
                        t.self.toolCompleteAnimation()) : cc.tween(t.self.Tools[t.self.ToolSequence]).to(1, {
                            position: cc.v3(-5, 80, 0)
                        }, {
                            easing: "backOut"
                        }).start();
                        break;
                    case i.MILKBOTTLE:
                        t.self.CanMove = !1,
                        t.self.isTapped(cc.find("Canvas/babyactivearea"), n) ? (t.self.playaudio("drinkmilk", !1),
                        t.self.char.playAnimation("milkeating", 1),
                        t.self.Tools[t.self.ToolSequence].active = !1,
                        cc.tween(t.self.Tools[t.self.ToolSequence]).delay(3.25).set({
                            active: !0
                        }).set({
                            position: cc.v3(10, -133, 0)
                        }).call(function() {
                            t.self.Tools[t.self.ToolSequence].getComponent(cc.Sprite).spriteFrame = t.self.Tools[t.self.ToolSequence].children[0].getComponent(cc.Sprite).spriteFrame
                        }).to(1, {
                            position: cc.v3(-2, -170, 0)
                        }, {
                            easing: "backOut"
                        }).call(function() {
                            cc.find("Canvas/Done").active = !0,
                            t.self.toolCompleteAnimation(),
                            t.self.FinishParticle(),
                            t.self.playaudio("baby sweety likes you", !1),
                            t.self.ToolSequence = i.DONE
                        }).start(),
                        t.self.resetHint()) : cc.tween(t.self.Tools[t.self.ToolSequence]).to(1, {
                            position: cc.v3(-2, -170, 0)
                        }, {
                            easing: "backOut"
                        }).start()
                    }
            }
            ,
            n.prototype.doneAction = function() {
                s.default.self.requestAds(),
                this.playaudio("Click", !1),
                cc.sys.localStorage.setItem("SelectedView", "3"),
                cc.sys.localStorage.setItem("isViewDone2", 1),
                this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
                    cc.director.loadScene("LevelScene")
                })))
            }
            ,
            n.prototype.playaudio = function(e, n) {
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).loop = n,
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.stopAudio = function(e) {
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).loop = !1,
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
            }
            ,
            n.prototype.resetHint = function() {
                t.self.hint.getComponent(cc.Animation).stop("TapHint"),
                cc.Tween.stopAllByTarget(this.hint),
                this.hint.active = !0,
                this.hint.opacity = 255,
                this.hint.position = cc.v3(1e3, 1e3, 0)
            }
            ,
            n.prototype.showHint = function(e) {
                switch (this.ToolSequence) {
                case i.APRON:
                    this.resetHint();
                    var n = cc.tween(this.hint).hide().set({
                        position: cc.v3(317, -198, 0)
                    }).set({
                        opacity: 0
                    }).show().delay(.2).to(.5, {
                        opacity: 255
                    })
                      , t = cc.tween(this.hint).to(1, {
                        position: cc.v3(50, -100, 0)
                    }, {
                        easing: "backOut"
                    });
                    cc.tween(this.hint).delay(e).sequence(n, t).repeatForever().start();
                    break;
                case i.MILKBOTTLE:
                    this.resetHint(),
                    n = cc.tween(this.hint).hide().set({
                        position: cc.v3(50, -180, 0)
                    }).set({
                        opacity: 0
                    }).show().delay(.2).to(.5, {
                        opacity: 255
                    }),
                    t = cc.tween(this.hint).to(1, {
                        position: cc.v3(50, -100, 0)
                    }, {
                        easing: "backOut"
                    }),
                    cc.tween(this.hint).delay(e).sequence(n, t).repeatForever().start()
                }
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.playaudio("EndingParticle", !1)
            }
            ,
            n.self = null,
            a([f([cc.Node])], n.prototype, "Tools", void 0),
            a([f(cc.Node)], n.prototype, "hint", void 0),
            t = a([r], n)
        }(cc.Component);
        t.default = d,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    FeedTheBaby: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "109aayo7GNPjLyCPa978Xu4", "FeedTheBaby");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s = e("./Promotion"), l = cc._decorator, r = l.ccclass, f = l.property;
        (function(e) {
            e[e.OVEN = 0] = "OVEN",
            e[e.OVENSTART = 1] = "OVENSTART",
            e[e.OPENMILKBOTTLE = 2] = "OPENMILKBOTTLE",
            e[e.JUG = 3] = "JUG",
            e[e.FOODPOWDER = 4] = "FOODPOWDER",
            e[e.CLOSEMILKBOTTLE = 5] = "CLOSEMILKBOTTLE",
            e[e.MIXMILKR = 6] = "MIXMILKR",
            e[e.MIXMILKL = 7] = "MIXMILKL"
        }
        )(i || (i = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.ToolSequence = 0,
                n.CanMove = !1,
                n.char = null,
                n.SelectedCharacter = 1,
                n.previousLoc = cc.Vec2.ZERO,
                n.Tools = [],
                n.hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this
            }
            ,
            n.prototype.getRandomInt = function(e, n) {
                return e = Math.ceil(e),
                n = Math.floor(n) + 1,
                Math.floor(Math.random() * (n - e)) + e
            }
            ,
            n.prototype.start = function() {
                this.showHint(1),
                t.self.playaudio("bay is hungry let food first", !1),
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                this.SelectedCharacter > 3 && (this.SelectedCharacter = 1),
                cc.find("Canvas/Chair/char_ske" + this.SelectedCharacter).active = !0,
                t.self.char = cc.find("Canvas/Chair/char_ske" + this.SelectedCharacter).getComponent(dragonBones.ArmatureDisplay),
                this.char.armature().getSlot("dirt1")._color.a = 0,
                this.char.armature().getSlot("dirt2")._color.a = 0,
                this.char.armature().getSlot("apron")._color.a = 0,
                this.char.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                    switch (t.self.getRandomInt(1, 20)) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 9:
                    case 11:
                        t.self.char.armature().animation.fadeIn("idle", .2, 1);
                        break;
                    case 2:
                        t.self.char.armature().animation.fadeIn("bouncing", .2, 1);
                        break;
                    case 4:
                        t.self.char.armature().animation.fadeIn("lookingright", .2, 1);
                        break;
                    case 6:
                        t.self.char.armature().animation.fadeIn("looking", .2, 1);
                        break;
                    case 8:
                        t.self.char.armature().animation.fadeIn("happy1", .2, 1);
                        break;
                    case 10:
                        t.self.char.armature().animation.fadeIn("happy2", .2, 1);
                        break;
                    case 12:
                        t.self.char.armature().animation.fadeIn("sad", .2, 1);
                        break;
                    default:
                        t.self.char.armature().animation.fadeIn("idle", .2, 1)
                    }
                }, t.self.char)
            }
            ,
            n.prototype.toolCompleteAnimation = function() {
                switch (t.self.getRandomInt(0, 2)) {
                case 0:
                    t.self.char.armature().animation.fadeIn("clap", .2, 1);
                    break;
                case 1:
                    t.self.char.armature().animation.fadeIn("thumbsup", .2, 1)
                }
            }
            ,
            n.prototype.playaudio = function(e, n) {
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).loop = n,
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.stopAudio = function(e) {
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).loop = !1,
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
            }
            ,
            n.prototype.isTapped = function(e, n) {
                return !!e.getBoundingBoxToWorld().contains(n)
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation();
                switch (t.self.node.convertToNodeSpaceAR(n),
                t.self.ToolSequence) {
                case i.OVEN:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.resetHint(),
                    t.self.CanMove = !0,
                    t.self.playaudio("ovendooropen", !1),
                    cc.Tween.stopAllByTarget(cc.tween(cc.find("Canvas/Oven1/Oven2"))),
                    cc.tween(cc.find("Canvas/Oven1/Oven2")).to(.1, {
                        scale: 1.1
                    }).to(.3, {
                        position: cc.v3(-250, 8, 0)
                    }).start(),
                    cc.Tween.stopAllByTarget(t.self.Tools[t.self.ToolSequence]),
                    t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 252))));
                    break;
                case i.OVENSTART:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && 0 == t.self.Tools[t.self.ToolSequence].getNumberOfRunningActions() && (t.self.resetHint(),
                    t.self.playaudio("ovenbuttontap", !1),
                    cc.tween(t.self.Tools[t.self.ToolSequence]).to(1, {
                        angle: -90
                    }).call(function() {
                        cc.tween(cc.find("Canvas/Popup")).to(1, {
                            scale: 0
                        }).call(function() {
                            cc.find("Canvas/Oven1/mask/Oven5").active = !0,
                            t.self.playaudio("ovenanimation", !0)
                        }).start(),
                        cc.tween(cc.find("Canvas/Oven1/Oven1/Oven7")).to(1, {
                            angle: -90
                        }).start()
                    }).delay(5).call(function() {
                        t.self.playaudio("ovenanimation", !1),
                        cc.find("Canvas/Milkbottle").active = !0,
                        cc.find("Canvas/Milkbottle").opacity = 0,
                        cc.find("Canvas/Milkbottle").position = cc.v3(15, -100, 0),
                        cc.tween(cc.find("Canvas/Milkbottle")).show().to(.5, {
                            scale: 1,
                            opacity: 255
                        }).call(function() {
                            t.self.toolCompleteAnimation(),
                            t.self.ToolSequence = i.OPENMILKBOTTLE
                        }).start(),
                        cc.tween(cc.find("Canvas/Oven1")).to(.5, {
                            opacity: 0
                        }).call(function() {
                            t.self.showHint(1)
                        }).start()
                    }).start(),
                    cc.tween(cc.find("Canvas/Popup/Oven9")).to(1, {
                        angle: -90
                    }).start());
                    break;
                case i.OPENMILKBOTTLE:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && 0 == t.self.Tools[t.self.ToolSequence].getNumberOfRunningActions() && (t.self.resetHint(),
                    t.self.playaudio("milkbottleopen", !1),
                    t.self.Tools[t.self.ToolSequence].opacity > 250 ? (t.self.Tools[t.self.ToolSequence].parent.getComponent(cc.Animation).play("CapOpen"),
                    t.self.Tools[t.self.ToolSequence].opacity -= 1,
                    cc.tween(t.self.Tools[t.self.ToolSequence]).by(.2, {
                        position: cc.v3(0, 5, 0)
                    }).start(),
                    251 == t.self.Tools[t.self.ToolSequence].opacity && cc.tween(cc.find("Canvas/CapStand")).to(.5, {
                        position: cc.v3(-256, -143, 0)
                    }).start()) : 250 == t.self.Tools[t.self.ToolSequence].opacity && (cc.tween(t.self.Tools[t.self.ToolSequence]).to(.5, {
                        position: cc.v3(-256, 0, 0)
                    }).start(),
                    cc.tween(cc.find("Canvas/jug")).to(.5, {
                        position: cc.v3(215, 54, 0)
                    }).call(function() {
                        t.self.toolCompleteAnimation(),
                        t.self.ToolSequence = i.JUG,
                        t.self.showHint(.2)
                    }).start(),
                    t.self.Tools[t.self.ToolSequence].opacity -= 1));
                    break;
                case i.JUG:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && 255 == t.self.Tools[t.self.ToolSequence].opacity && (t.self.CanMove = !0,
                    t.self.resetHint(),
                    cc.Tween.stopAllByTarget(t.self.Tools[t.self.ToolSequence]),
                    t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(450, 100))));
                    break;
                case i.FOODPOWDER:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.CanMove = !0,
                    cc.Tween.stopAllByTarget(cc.tween(t.self.Tools[t.self.ToolSequence])),
                    t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 252))));
                    break;
                case i.CLOSEMILKBOTTLE:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && 0 == t.self.Tools[t.self.ToolSequence].getNumberOfRunningActions() && (t.self.resetHint(),
                    t.self.playaudio("milkbottleopen", !1),
                    t.self.Tools[t.self.ToolSequence].opacity < 255 ? (t.self.Tools[t.self.ToolSequence].parent.getComponent(cc.Animation).play("CapOpen").wrapMode = cc.WrapMode.Reverse,
                    t.self.Tools[t.self.ToolSequence].opacity += 1,
                    cc.tween(t.self.Tools[t.self.ToolSequence]).by(.2, {
                        position: cc.v3(0, -5, 0)
                    }).start()) : 255 == t.self.Tools[t.self.ToolSequence].opacity && (t.self.ToolSequence = i.MIXMILKR,
                    t.self.toolCompleteAnimation(),
                    t.self.playaudio("Entry", !1),
                    t.self.playaudio("shake poweder well", !1),
                    cc.find("Canvas/MilkPopup").active = !0,
                    cc.tween(cc.find("Canvas/MilkPopup")).to(.5, {
                        scale: 1
                    }, {
                        easing: "backOut"
                    }).start()));
                    break;
                case i.MIXMILKR:
                case i.MIXMILKL:
                    255 == cc.find("Canvas/MilkPopup").opacity && t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.CanMove = !0,
                    t.self.previousLoc = cc.v2(t.self.Tools[t.self.ToolSequence].x, t.self.Tools[t.self.ToolSequence].y))
                }
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation();
                if (t.self.node.convertToNodeSpaceAR(n),
                t.self.CanMove)
                    switch (t.self.ToolSequence) {
                    case i.OVEN:
                        t.self.CanMove && (t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 252))),
                        t.self.isTapped(cc.find("Canvas/Oven1/Oven4"), t.self.getIntersectPos(t.self.Tools[t.self.ToolSequence])) && (t.self.CanMove = !1,
                        t.self.playaudio("ovendooropen", !1),
                        t.self.Tools[t.self.ToolSequence].setPosition(cc.v3(16, -6, 0)),
                        cc.tween(t.self.Tools[t.self.ToolSequence]).by(.2, {
                            position: cc.v3(0, -10, 0),
                            scale: -.1
                        }).hide().call(function() {
                            t.self.Tools[t.self.ToolSequence].active = !1,
                            cc.find("Canvas/Oven1/Milkbottle_1").active = !0,
                            cc.tween(cc.find("Canvas/Oven1/Oven2")).delay(.2).to(.3, {
                                position: cc.v3(0, 8, 0)
                            }).to(.1, {
                                scale: 1
                            }).start(),
                            cc.tween(cc.find("Canvas/Popup")).delay(.5).to(.5, {
                                scale: 1
                            }, {
                                easing: "backOut"
                            }).call(function() {
                                t.self.showHint(0)
                            }).start(),
                            t.self.toolCompleteAnimation(),
                            t.self.ToolSequence = i.OVENSTART,
                            t.self.playaudio("Entry", !1)
                        }).start()));
                        break;
                    case i.JUG:
                        t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(450, 100))),
                        cc.find("Canvas/Milkbottle").getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !1,
                        t.self.Tools[t.self.ToolSequence].opacity = 254,
                        t.self.Tools[t.self.ToolSequence].setPosition(cc.v2(85, 170)),
                        t.self.Tools[t.self.ToolSequence].getComponent(cc.Animation).play("JugAnim"),
                        cc.tween(t.self.Tools[t.self.ToolSequence]).delay(.4).call(function() {
                            t.self.playaudio("pourwater", !1),
                            cc.tween(cc.find("Canvas/Milkbottle/4")).to(1, {
                                position: cc.v3(0, 24, 0)
                            }).start(),
                            cc.tween(cc.find("Canvas/Milkbottle/3")).to(1, {
                                scaleY: 1
                            }).start();
                            var e = cc.instantiate(cc.find("Canvas/Milkbottle"));
                            e.name = "tempnode",
                            e.children.forEach(function(n) {
                                "1" != n.name && e.removeChild(n)
                            }),
                            cc.find("Canvas").addChild(e)
                        }).delay(1).call(function() {
                            cc.find("Canvas/tempnode").removeFromParent(),
                            cc.tween(t.self.Tools[t.self.ToolSequence]).to(1, {
                                position: cc.v3(215, 54, 0)
                            }, {
                                easing: "backOut"
                            }).by(.5, {
                                position: cc.v3(500, 0, 0)
                            }).start(),
                            cc.tween(cc.find("Canvas/FoodJar")).delay(1).to(1, {
                                position: cc.v3(294, -83, 0)
                            }, {
                                easing: "backOut"
                            }).call(function() {
                                t.self.ToolSequence = i.FOODPOWDER,
                                t.self.toolCompleteAnimation(),
                                t.self.showHint(.5)
                            }).start(),
                            cc.tween(cc.find("Canvas/Spoon")).delay(1).to(.5, {
                                position: cc.v3(300, 54, 0)
                            }, {
                                easing: "backOut"
                            }).start()
                        }).start());
                        break;
                    case i.FOODPOWDER:
                        t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 252))),
                        255 == t.self.Tools[t.self.ToolSequence].opacity ? t.self.isTapped(cc.find("Canvas/FoodJar"), n) && (t.self.Tools[t.self.ToolSequence].opacity = 254,
                        t.self.Tools[t.self.ToolSequence].getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/FoodJar").children[0].getComponent(cc.Sprite).spriteFrame,
                        0 == cc.find("Canvas/Milkbottle/5").opacity ? (t.self.showHint(0),
                        cc.find("Canvas/FoodJar").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/loader/foodjar/FoodJar_2").getComponent(cc.Sprite).spriteFrame) : 85 == cc.find("Canvas/Milkbottle/5").opacity ? cc.find("Canvas/FoodJar").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/loader/foodjar/FoodJar_3").getComponent(cc.Sprite).spriteFrame : 170 == cc.find("Canvas/Milkbottle/5").opacity && (cc.find("Canvas/FoodJar").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/loader/foodjar/FoodJar_4").getComponent(cc.Sprite).spriteFrame)) : 254 == t.self.Tools[t.self.ToolSequence].opacity && t.self.isTapped(cc.find("Canvas/Milkbottle"), n) && (t.self.playaudio("pourmilkpowder", !1),
                        t.self.CanMove = !1,
                        t.self.Tools[t.self.ToolSequence].opacity = 255,
                        cc.tween(cc.find("Canvas/Milkbottle/5")).by(.5, {
                            opacity: 85
                        }).start(),
                        t.self.Tools[t.self.ToolSequence].getComponent(cc.Animation).play("Spoon"),
                        170 == cc.find("Canvas/Milkbottle/5").opacity && cc.tween(cc.find("Canvas/Milkbottle/Milkbottle_Cap_1")).delay(1).call(function() {
                            cc.tween(t.self.Tools[t.self.ToolSequence]).by(.5, {
                                position: cc.v3(400, 0, 0)
                            }).start(),
                            cc.tween(cc.find("Canvas/FoodJar")).by(.5, {
                                position: cc.v3(200, 0, 0)
                            }).start()
                        }).to(.5, {
                            position: cc.v3(0, 173, 0)
                        }).call(function() {
                            t.self.ToolSequence = i.CLOSEMILKBOTTLE,
                            t.self.toolCompleteAnimation(),
                            t.self.resetHint(),
                            t.self.showHint(.1)
                        }).start());
                        break;
                    case i.MIXMILKR:
                        if (t.self.Tools[t.self.ToolSequence].y < 112) {
                            if (n.y > t.self.previousLoc.y) {
                                var c = cc.find("Canvas/MilkPopup/right").convertToNodeSpaceAR(e.getLocation());
                                t.self.Tools[t.self.ToolSequence].y = c.y,
                                console.log(c.y);
                                var o = (100 - 100 * (112 - t.self.Tools[t.self.ToolSequence].y) / 224) / 100;
                                c.y < -60 ? cc.find("Canvas/MilkPopup/right/Progress").getComponent(cc.Sprite).fillRange = o + .08 : c.y > 60 ? cc.find("Canvas/MilkPopup/right/Progress").getComponent(cc.Sprite).fillRange = o - .08 : cc.find("Canvas/MilkPopup/right/Progress").getComponent(cc.Sprite).fillRange = o
                            }
                        } else
                            t.self.CanMove = !1,
                            t.self.playaudio("milkmixpopup", !1),
                            cc.find("Canvas/MilkPopup").getComponent(cc.Animation).play("MilkBottle"),
                            cc.find("Canvas/MilkPopup").opacity = 254,
                            cc.tween(cc.find("Canvas/MilkPopup")).delay(3).call(function() {
                                t.self.ToolSequence = i.MIXMILKL,
                                t.self.toolCompleteAnimation()
                            }).set({
                                opacity: 255
                            }).start();
                        t.self.previousLoc = n;
                        break;
                    case i.MIXMILKL:
                        t.self.Tools[t.self.ToolSequence].y < 112 ? n.y < t.self.previousLoc.y && (c = cc.find("Canvas/MilkPopup/left").convertToNodeSpaceAR(e.getLocation()),
                        t.self.Tools[t.self.ToolSequence].y = c.y,
                        console.log(c.y),
                        o = (100 - 100 * (112 - t.self.Tools[t.self.ToolSequence].y) / 224) / 100,
                        c.y < -60 ? cc.find("Canvas/MilkPopup/left/Progress").getComponent(cc.Sprite).fillRange = o + .08 : c.y > 60 ? cc.find("Canvas/MilkPopup/left/Progress").getComponent(cc.Sprite).fillRange = o - .08 : cc.find("Canvas/MilkPopup/left/Progress").getComponent(cc.Sprite).fillRange = o) : (t.self.CanMove = !1,
                        t.self.playaudio("milkmixpopup", !1),
                        cc.find("Canvas/MilkPopup").getComponent(cc.Animation).play("MilkBottleL"),
                        cc.find("Canvas/MilkPopup").opacity = 254,
                        cc.tween(cc.find("Canvas/MilkPopup")).delay(3).call(function() {
                            cc.find("Canvas/Done").active = !0,
                            t.self.FinishParticle()
                        }).start()),
                        t.self.previousLoc = n
                    }
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                if (t.self.node.convertToNodeSpaceAR(n),
                t.self.CanMove)
                    switch (t.self.ToolSequence) {
                    case i.OVEN:
                        t.self.playaudio("ovendooropen", !1),
                        t.self.CanMove = !1,
                        cc.tween(t.self.Tools[t.self.ToolSequence]).to(1, {
                            position: cc.v3(310, -110, 0)
                        }, {
                            easing: "backOut"
                        }).start(),
                        cc.Tween.stopAllByTarget(cc.tween(cc.find("Canvas/Oven1/Oven2"))),
                        cc.tween(cc.find("Canvas/Oven1/Oven2")).to(.3, {
                            position: cc.v3(0, 8, 0)
                        }).to(.1, {
                            scale: 1
                        }).start();
                        break;
                    case i.JUG:
                        t.self.CanMove = !1,
                        cc.tween(t.self.Tools[t.self.ToolSequence]).to(1, {
                            position: cc.v3(215, 54, 0)
                        }, {
                            easing: "backOut"
                        }).start();
                        break;
                    case i.FOODPOWDER:
                        t.self.CanMove = !1,
                        cc.tween(t.self.Tools[t.self.ToolSequence]).to(1, {
                            position: cc.v3(300, 24, 0)
                        }, {
                            easing: "backOut"
                        }).start();
                        break;
                    case i.MIXMILKR:
                        t.self.CanMove = !1
                    }
            }
            ,
            n.prototype.getDistance = function(e, n) {
                return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
            }
            ,
            n.prototype.getIntersectPos = function(e) {
                return cc.v2(e.getBoundingBoxToWorld().x, e.getBoundingBoxToWorld().y)
            }
            ,
            n.prototype.doneAction = function() {
                s.default.self.requestAds(),
                this.playaudio("Click", !1),
                this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
                    cc.director.loadScene("FeedTheBaby3")
                })))
            }
            ,
            n.prototype.resetHint = function() {
                t.self.hint.getComponent(cc.Animation).stop("TapHint"),
                cc.Tween.stopAllByTarget(this.hint),
                this.hint.active = !0,
                this.hint.opacity = 255,
                this.hint.position = cc.v3(1e3, 1e3, 0)
            }
            ,
            n.prototype.showHint = function(e) {
                switch (this.ToolSequence) {
                case i.OVEN:
                    this.resetHint();
                    var n = cc.tween(this.hint).hide().set({
                        position: cc.v3(364, -156, 0)
                    }).set({
                        opacity: 0
                    }).show().delay(.2).to(.5, {
                        opacity: 255
                    })
                      , c = cc.tween(this.hint).to(1, {
                        position: cc.v3(64, -30, 0)
                    }, {
                        easing: "backOut"
                    });
                    cc.tween(this.hint).delay(e).sequence(n, c).repeatForever().start();
                    break;
                case i.OVENSTART:
                case i.OPENMILKBOTTLE:
                    this.hint.position = cc.v3(72, 50, 0),
                    this.hint.getComponent(cc.Animation).play("TapHint");
                    break;
                case i.JUG:
                    this.resetHint(),
                    n = cc.tween(this.hint).hide().set({
                        position: cc.v3(364, -156, 0)
                    }).set({
                        opacity: 0
                    }).show().delay(.2).to(.5, {
                        opacity: 255
                    }),
                    c = cc.tween(this.hint).to(1, {
                        position: cc.v3(64, -30, 0)
                    }, {
                        easing: "backOut"
                    }),
                    cc.tween(this.hint).delay(e).sequence(n, c).repeatForever().start();
                    break;
                case i.FOODPOWDER:
                    255 == t.self.Tools[t.self.ToolSequence].opacity ? (this.resetHint(),
                    n = cc.tween(this.hint).hide().set({
                        position: cc.v3(364, 50, 0)
                    }).set({
                        opacity: 0
                    }).show().delay(.2).to(.5, {
                        opacity: 255
                    }),
                    c = cc.tween(this.hint).to(1, {
                        position: cc.v3(364, -50, 0)
                    }, {
                        easing: "backOut"
                    }),
                    cc.tween(this.hint).delay(e).sequence(n, c).repeatForever().start()) : (this.resetHint(),
                    n = cc.tween(this.hint).hide().set({
                        position: t.self.Tools[t.self.ToolSequence].position
                    }).set({
                        opacity: 0
                    }).show().delay(.2).to(.5, {
                        opacity: 255
                    }),
                    c = cc.tween(this.hint).to(1, {
                        position: cc.v3(64, 50, 0)
                    }, {
                        easing: "backOut"
                    }).set({
                        active: !1
                    }),
                    cc.tween(this.hint).delay(e).sequence(n, c).start());
                    break;
                case i.CLOSEMILKBOTTLE:
                    this.hint.position = cc.v3(72, 50, 0),
                    this.hint.getComponent(cc.Animation).play("TapHint");
                    break;
                case i.MIXMILKR:
                case i.MIXMILKL:
                }
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.playaudio("EndingParticle", !1)
            }
            ,
            n.self = null,
            a([f([cc.Node])], n.prototype, "Tools", void 0),
            a([f(cc.Node)], n.prototype, "hint", void 0),
            t = a([r], n)
        }(cc.Component);
        t.default = d,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    LevelScene: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "eaa6cSR6K5NP4NT8rsE2/wT", "LevelScene");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.Items = [],
                n.ItemCounter = 0,
                n.AnimationName = [],
                n.Counter = 0,
                n.SelectedCharacter = 1,
                n.CharacterObj = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Charater").children.forEach(function(e) {
                    e.active = !1
                }),
                this.CharacterObj = cc.find("Canvas/Charater/char_ske" + this.SelectedCharacter),
                this.CharacterObj.active = !0,
                this.CharacterObj.getComponent(i.default).RegisterIdle(),
                this.CharacterObj.getComponent(dragonBones.ArmatureDisplay).playAnimation("idle", 3),
                cc.director.preloadScene("Bathroom"),
                cc.director.preloadScene("FeedTheBaby"),
                cc.director.preloadScene("Picnic"),
                cc.director.preloadScene("PlayRoom"),
                cc.director.preloadScene("Sleeping"),
                parseInt(cc.sys.localStorage.getItem("SelectedView")),
                this.Items[0] = cc.find("Canvas/Bathroom"),
                this.Items[1] = cc.find("Canvas/FeedTheBaby"),
                this.Items[2] = cc.find("Canvas/PlayRoom"),
                this.Items[3] = cc.find("Canvas/Picnic"),
                this.Items[4] = cc.find("Canvas/Sleeping");
                for (var e = 1; e <= 5; e++)
                    "1" == cc.sys.localStorage.getItem("isViewDone" + e) ? (this.Items[e - 1].getChildByName("donelevel").active = !0,
                    this.Items[e - 1].getChildByName("lock").active = !1,
                    this.Items[e - 1].getComponent(cc.Button).interactable = !1) : (this.Items[e - 1].getComponent(cc.Button).interactable = !0,
                    this.Items[e - 1].getChildByName("donelevel").active = !1,
                    this.Items[e - 1].getChildByName("lock").active = !1);
                "6" == cc.sys.localStorage.getItem("SelectedView") ? (cc.find("Canvas/promotion").position = cc.Vec3.ZERO,
                cc.find("Canvas/logo").active = !1,
                cc.find("Canvas/more").active = !1,
                cc.find("Canvas/GameOver").active = !0) : (cc.find("Canvas/GameOver").active = !1,
                this.RandomEffects(),
                "1" == cc.sys.localStorage.getItem("isPlayVocal") && this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.PlaySound("level scene vocal")
                }))))
            }
            ,
            n.prototype.start = function() {}
            ,
            n.prototype.LevelAction = function(e) {
                var n = e.target.name;
                console.log(n),
                this.PlaySound(e.target.name),
                s.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene(n),
                this.addParticle(e.target),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    cc.director.loadScene(n)
                })))
            }
            ,
            n.prototype.addParticle = function(e) {
                var n = cc.instantiate(cc.find("Canvas/TapParticle"));
                e.addChild(n),
                n.position = cc.Vec3.ZERO,
                n.active = !0,
                this.PlaySound("Particle")
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.RandomEffects = function() {
                "6" != cc.sys.localStorage.getItem("SelectedView") && (this.Items[this.ItemCounter].getComponent(cc.Button).interactable ? (this.Items[this.ItemCounter].children[0].runAction(cc.jumpBy(.5, cc.Vec2.ZERO, -10, 1)),
                this.Items[this.ItemCounter].runAction(cc.sequence(cc.jumpBy(.5, cc.Vec2.ZERO, 30, 1), cc.callFunc(function() {
                    t.self.RandomEffects()
                }))),
                this.ItemCounter++,
                this.ItemCounter >= this.Items.length && (this.ItemCounter = 0)) : (this.ItemCounter++,
                this.ItemCounter >= this.Items.length && (this.ItemCounter = 0),
                this.RandomEffects()))
            }
            ,
            n.prototype.getRandomInt = function(e, n) {
                return e = Math.ceil(e),
                n = Math.floor(n) + 1,
                Math.floor(Math.random() * (n - e)) + e
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    MainScene: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "2bf36Qwg+ZPrbVL+KfMs0tS", "MainScene");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Promotion")
          , s = cc._decorator
          , l = s.ccclass
          , r = (s.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.bgsoundElement = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                cc.director.preloadScene("BabySelection"),
                cc.director.preloadScene("LevelScene"),
                cc.debug.setDisplayStats(!1),
                cc.sys.localStorage.setItem("SelectedView", 1),
                cc.sys.localStorage.setItem("SelectedCharacter", 1),
                cc.sys.localStorage.setItem("isPlayVocal", 1),
                cc.sys.localStorage.setItem("isViewDone1", 0),
                cc.sys.localStorage.setItem("isViewDone2", 0),
                cc.sys.localStorage.setItem("isViewDone3", 0),
                cc.sys.localStorage.setItem("isViewDone4", 0),
                cc.sys.localStorage.setItem("isViewDone5", 0)
            }
            ,
            n.prototype.start = function() {
                0 == cc.audioEngine.getMusicVolume() ? (cc.find("Canvas/SoundOn").active = !1,
                cc.find("Canvas/SoundOff").active = !0) : (cc.find("Canvas/SoundOn").active = !0,
                cc.find("Canvas/SoundOff").active = !1),
                this.node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function() {
                    t.self.node.getComponent(cc.Animation).off(cc.Animation.EventType.FINISHED),
                    t.self.node.getComponent(cc.Animation).play("MainSceneIdle")
                }),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.PlaySound("title")
                })))
            }
            ,
            n.prototype.getRandomInt = function(e, n) {
                return e = Math.ceil(e),
                n = Math.floor(n) + 1,
                Math.floor(Math.random() * (n - e)) + e
            }
            ,
            n.prototype.playBTNClicked = function(e) {
                this.PlaySound("Put_E"),
                e.target.getComponent(cc.Button).interactable = !1,
                i.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("BabySelection")
                }, this)))
            }
            ,
            n.prototype.onSoundOffBtnClick = function() {
                this.PlaySound("Click"),
                cc.find("Canvas/SoundOn").active = !0,
                cc.find("Canvas/SoundOff").active = !1,
                cc.audioEngine.setMusicVolume(1),
                cc.audioEngine.setEffectsVolume(1),
                document.getElementById("bgsound") && document.getElementById("bgsound").play()
            }
            ,
            n.prototype.onSoundOnBtnClick = function() {
                this.PlaySound("Click"),
                cc.find("Canvas/SoundOn").active = !1,
                cc.find("Canvas/SoundOff").active = !0,
                cc.audioEngine.setMusicVolume(0),
                cc.audioEngine.setEffectsVolume(0),
                document.getElementById("bgsound") && document.getElementById("bgsound").pause()
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.self = null,
            t = a([l], n)
        }(cc.Component));
        t.default = r,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    Picnic2: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "b057fOZrOdOrYiA0sbWeEtJ", "Picnic2");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.Tools = [],
                n.CanMove = !1,
                n.BeganPoint = null,
                n.SelectedCharacter = 1,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                this.Hint = cc.find("Canvas/hint2"),
                cc.director.preloadScene("Picnic3"),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Character/char_ske" + this.SelectedCharacter).active = !0
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                this.PlaySound("put the stuff on bag"),
                t.self.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                    t.self.ShowHint()
                })))
            }
            ,
            n.prototype.AdjustScaling = function(e, n) {
                var t = e.getContentSize();
                if (t.width > t.height) {
                    var c = n / t.width;
                    e.scale = c
                } else
                    c = n / t.height,
                    e.scale = c
            }
            ,
            n.prototype.shuffle = function(e) {
                for (var n, t, c = e.length; 0 !== c; )
                    t = Math.floor(Math.random() * c),
                    n = e[c -= 1],
                    e[c] = e[t],
                    e[t] = n;
                return e
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                if (!(cc.find("Canvas/Temp").childrenCount > 0))
                    for (var o = cc.find("Canvas/Popup"), a = function(e) {
                        if (o.children[e].active && o.children[e].getBoundingBoxToWorld().contains(n)) {
                            var a = cc.instantiate(o.children[e]);
                            a.position = c,
                            cc.find("Canvas/Temp").addChild(a),
                            o.children[e].active = !1,
                            t.self.CanMove = !0,
                            t.self.BeganPoint = cc.v2(c),
                            cc.find("Canvas/Bag").children.forEach(function(e) {
                                e.name == a.name && (a.scaleX = e.scaleX,
                                a.scaleY = e.scaleY)
                            }),
                            t.self.PlaySound("sfx24903003"),
                            t.self.HideHint()
                        }
                    }, i = 0; i < o.children.length; i++)
                        a(i)
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                0 != t.self.CanMove && (cc.find("Canvas/Temp").children[0].position = c,
                cc.find("Canvas/Bag").children.forEach(function(e) {
                    if (e.getBoundingBoxToWorld().contains(n) && t.self.CanMove && e.name == cc.find("Canvas/Temp").children[0].name) {
                        t.self.CanMove = !1,
                        e.opacity = 255,
                        cc.find("Canvas/Temp").removeAllChildren();
                        var c = !0;
                        cc.find("Canvas/Bag").children.forEach(function(e) {
                            255 != e.opacity && e.active && (c = !1)
                        }),
                        t.self.PlaySound("sfx24902021"),
                        c ? (cc.find("Canvas/Bag/BagTop").active = !0,
                        cc.find("Canvas/Bag/BagTop").runAction(cc.sequence(cc.fadeIn(.5), cc.callFunc(function() {
                            cc.find("Canvas/Done").active = !0,
                            t.self.FinishParticle()
                        }))),
                        cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter).getComponent(i.default).StartAnimation(),
                        cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter).getComponent(i.default).PlayAnimation("clap", 1),
                        cc.find("Canvas/Popup").runAction(cc.moveBy(.5, cc.v2(0, -500)).easing(cc.easeBackInOut()))) : (t.self.node.stopAllActions(),
                        t.self.node.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(function() {
                            t.self.ShowHint()
                        }))))
                    }
                }))
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n),
                0 != t.self.CanMove && (t.self.CanMove = !1,
                t.self.PlaySound("sfx24903002"),
                cc.find("Canvas/Temp").children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    cc.find("Canvas/Popup").getChildByName(cc.find("Canvas/Temp").children[0].name).active = !0,
                    t.self.node.stopAllActions(),
                    t.self.node.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(function() {
                        t.self.ShowHint()
                    })))
                }), cc.removeSelf())))
            }
            ,
            n.prototype.getSpriteFrameName = function(e) {
                return e.getComponent(cc.Sprite).spriteFrame.name
            }
            ,
            n.prototype.DoneAction = function() {
                s.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene("Picnic3"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("Picnic3")
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                var e = cc.v2(0, 0)
                  , n = "";
                if (cc.find("Canvas/Popup").children.forEach(function(c) {
                    c.active && (e = t.self.getPosition(c),
                    n = c.name)
                }),
                0 != n.length) {
                    var c = this.getPosition(cc.find("Canvas/Bag/" + n));
                    console.log(e),
                    this.Hint.active = !0,
                    this.Hint.stopAllActions(),
                    this.Hint.runAction(cc.repeat(cc.sequence(cc.show(), cc.place(e), cc.moveTo(.8, c).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))
                }
            }
            ,
            n.prototype.HideHint = function() {
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.getPosition = function(e) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                return this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    Picnic3: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "c8de1JIX0RLk5lOtaK9Wf1J", "Picnic3");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s = e("./Character"), l = e("./Promotion"), r = cc._decorator, f = r.ccclass;
        r.property,
        function(e) {
            e[e.NONE = -1] = "NONE",
            e[e.FAN = 0] = "FAN",
            e[e.FANPOPUP = 1] = "FANPOPUP",
            e[e.TUBE = 2] = "TUBE",
            e[e.BAG = 3] = "BAG"
        }(i || (i = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.CanMove = !1,
                n.BeganPoint = null,
                n.SelectedCharacter = 1,
                n.ToolSequence = i.NONE,
                n.MoveNode = null,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                this.Hint = cc.find("Canvas/hint2"),
                cc.director.preloadScene("Picnic4"),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Bed/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Bed/Character/char_ske" + this.SelectedCharacter).active = !0,
                this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
                    t.self.FanPanelEntry()
                }))),
                this.MoveNode = cc.find("Canvas/Temp"),
                cc.find("Canvas/CreamPopup/Popup").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/CreamPopup/Popup/Character" + this.SelectedCharacter).active = !0
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).play("FanOpen"),
                cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).pause(),
                cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).on("finished", function() {
                    t.self.ToolSequence = i.NONE,
                    cc.find("Canvas/FanPopup/Popup/Hint").active = !1,
                    cc.find("Canvas/Bed/BedUsed_1").active = !0;
                    var e = cc.find("Canvas/FanPopup");
                    e.active = !0,
                    e.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeBounceIn()), cc.callFunc(function() {
                        t.self.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                            var e = cc.find("Canvas/CreamPopup");
                            e.active = !0,
                            e.scale = 0,
                            t.self.PlaySound("baby skin is sun protection"),
                            e.runAction(cc.scaleTo(.3, 1).easing(cc.easeBounceOut())),
                            e.getComponent(cc.Animation).play("facecreambottle"),
                            e.getComponent(cc.Animation).on("finished", function() {
                                e.getComponent(cc.Animation).off("finished"),
                                t.self.ToolSequence = i.TUBE,
                                t.self.ShowHint()
                            })
                        })))
                    })))
                }),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.ShowHint()
                })))
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                if (t.self.ToolSequence == i.FAN)
                    for (var o = 0; o < 3; o++) {
                        var a = cc.find("Canvas/PanelFan/PanelFan/" + (o + 1));
                        if (a.active && a.getBoundingBoxToWorld().contains(n)) {
                            t.self.CanMove = !0;
                            var s = cc.instantiate(cc.find("Canvas/Loader/mount" + (o + 1)));
                            t.self.MoveNode.addChild(s),
                            s.position = c,
                            a.active = !1,
                            s.name = (o + 1).toString(),
                            t.self.BeganPoint = cc.v2(c),
                            t.self.HideHint(),
                            t.self.PlaySound("sfx24903003");
                            break
                        }
                    }
                else
                    t.self.ToolSequence == i.FANPOPUP ? cc.find("Canvas/FanPopup/Popup/Slider_1").getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !0,
                    cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).resume(),
                    t.self.HideHint()) : t.self.ToolSequence == i.TUBE ? cc.find("Canvas/CreamPopup/creamuesd").getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !0,
                    s = cc.instantiate(cc.find("Canvas/CreamPopup/creamuesd")),
                    t.self.MoveNode.addChild(s),
                    s.position = c,
                    t.self.BeganPoint = cc.v2(c),
                    cc.find("Canvas/CreamPopup/creamuesd").active = !1,
                    t.self.HideHint()) : t.self.ToolSequence == i.BAG && cc.find("Canvas/BagTop").getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !0,
                    s = cc.instantiate(cc.find("Canvas/BagTop")),
                    t.self.MoveNode.addChild(s),
                    s.position = c,
                    t.self.BeganPoint = cc.v2(c),
                    cc.find("Canvas/BagTop").active = !1,
                    t.self.HideHint(),
                    t.self.PlaySound("sfx24903003"))
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                if (!t.self.CanMove)
                    return !1;
                if (t.self.CanMove && t.self.ToolSequence == i.FAN) {
                    if (t.self.MoveNode.children[0].position = c,
                    cc.v2(0, 0).fuzzyEquals(cc.v2(c), 100)) {
                        t.self.ToolSequence = i.NONE,
                        t.self.CanMove = !1;
                        var o = t.self.MoveNode.children[0].name;
                        t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.5, cc.v2(11, 86), 100, 1), cc.delayTime(.5), cc.removeSelf()));
                        var a = cc.find("Canvas/FanPopup");
                        a.scale = 0,
                        a.active = !0,
                        a.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.3, 1).easing(cc.easeBounceOut()), cc.callFunc(function() {
                            t.self.ShowHint(),
                            t.self.PlaySound("open the sunset")
                        }))),
                        t.self.ToolSequence = i.FANPOPUP,
                        t.self.FanPanelExit(),
                        cc.sys.localStorage.setItem("SelectedFan", o),
                        cc.find("Canvas/Bed/BedUsed_1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/Bed3_" + o).getComponent(cc.Sprite).spriteFrame,
                        cc.find("Canvas/FanPopup/Popup/Used_1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/cloth" + o).getComponent(cc.Sprite).spriteFrame,
                        cc.find("Canvas/FanPopup/Popup/Slider_1").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/" + o).getComponent(cc.Sprite).spriteFrame,
                        cc.find("Canvas/FanPopup/Popup/Slider_2").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Loader/stick" + o).getComponent(cc.Sprite).spriteFrame
                    }
                } else if (t.self.ToolSequence == i.FANPOPUP)
                    cc.find("Canvas/FanPopup/Popup/Slider_1").getBoundingBoxToWorld().contains(n) ? cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).getAnimationState("FanOpen").isPaused && cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).resume() : cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).getAnimationState("FanOpen").isPlaying && cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).pause();
                else if (t.self.CanMove && t.self.ToolSequence == i.TUBE) {
                    t.self.MoveNode.children[0].position = c;
                    var l = cc.find("Canvas/CreamPopup/Popup/Character" + t.self.SelectedCharacter + "/Cream");
                    l.opacity <= 254 && l.getBoundingBoxToWorld().contains(n) ? (l.opacity += .5,
                    0 == cc.find("Canvas/SoundNode/sfx24906017").getComponent(cc.AudioSource).isPlaying && cc.find("Canvas/SoundNode/sfx24906017").getComponent(cc.AudioSource).play()) : l.opacity > 253 && (cc.find("Canvas/SoundNode/sfx24906017").getComponent(cc.AudioSource).stop(),
                    t.self.CanMove = !1,
                    t.self.MoveNode.removeAllChildren(),
                    t.self.ToolSequence = i.NONE,
                    cc.find("Canvas/CreamPopup/Popup/Character" + t.self.SelectedCharacter + "/MaskHint").active = !1,
                    l.runAction(cc.sequence(cc.fadeOut(2), cc.callFunc(function() {
                        cc.find("Canvas/CreamPopup").runAction(cc.scaleTo(.3, 0)),
                        cc.find("Canvas/Bed/Character/char_ske" + t.self.SelectedCharacter).getComponent(s.default).StartAnimation(),
                        cc.find("Canvas/Bed/Character/char_ske" + t.self.SelectedCharacter).getComponent(s.default).PlayAnimation("happy1", 1),
                        cc.find("Canvas/Bed/Character/char_ske" + t.self.SelectedCharacter).getComponent(s.default).CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, t.self.FinishAnimation.bind(t.self))
                    }))))
                } else
                    t.self.CanMove && t.self.ToolSequence == i.BAG && (t.self.MoveNode.children[0].position = c,
                    cc.v2(-117, -123).fuzzyEquals(cc.v2(c), 100) && (t.self.CanMove = !1,
                    t.self.ToolSequence = i.NONE,
                    t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.5, cc.v2(-117, -123), 100, 1), cc.callFunc(function() {
                        cc.find("Canvas/Bed/bagtrolly").active = !0,
                        cc.find("Canvas/Done").active = !0,
                        t.self.FinishParticle(),
                        t.self.PlaySound("sfx24902021")
                    }), cc.removeSelf()))))
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                if (t.self.node.convertToNodeSpaceAR(n),
                !t.self.CanMove)
                    return !1;
                t.self.CanMove = !1,
                t.self.ToolSequence == i.FAN ? t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.PlaySound("sfx24903002");
                    for (var e = 0; e < 3; e++)
                        cc.find("Canvas/PanelFan/PanelFan/" + (e + 1)).active = !0;
                    t.self.ShowHint()
                }), cc.removeSelf())) : t.self.ToolSequence == i.FANPOPUP ? (cc.find("Canvas/FanPopup/Popup").getComponent(cc.Animation).pause(),
                t.self.CanMove = !1) : t.self.ToolSequence == i.TUBE ? (cc.find("Canvas/SoundNode/sfx24906017").getComponent(cc.AudioSource).stop(),
                t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    cc.find("Canvas/CreamPopup/creamuesd").active = !0,
                    t.self.ShowHint()
                }), cc.removeSelf()))) : t.self.ToolSequence == i.BAG && (t.self.PlaySound("sfx24903002"),
                t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    cc.find("Canvas/BagTop").active = !0,
                    t.self.ShowHint()
                }), cc.removeSelf())))
            }
            ,
            n.prototype.FinishAnimation = function() {
                cc.find("Canvas/Bed/Character/char_ske" + this.SelectedCharacter).getComponent(s.default).CharacterObj.removeEventListener(dragonBones.EventObject.COMPLETE),
                cc.find("Canvas/Bed/Character/char_ske" + this.SelectedCharacter).getComponent(s.default).PlayAnimation("idle", -1),
                this.node.getComponent(cc.Animation).play("TrollySmall"),
                this.ToolSequence = i.BAG,
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.ShowHint()
                })))
            }
            ,
            n.prototype.FanPanelEntry = function() {
                var e = cc.find("Canvas/PanelFan/PanelFan");
                e.active = !0,
                e.position = cc.v3(e.position.x + 200, e.position.y, 0),
                e.runAction(cc.sequence(cc.moveTo(.3, cc.v2(345, -35)), cc.callFunc(function() {
                    t.self.ToolSequence = i.FAN
                })))
            }
            ,
            n.prototype.FanPanelExit = function() {
                cc.find("Canvas/PanelFan/PanelFan").runAction(cc.moveBy(.3, cc.v2(500, 0)))
            }
            ,
            n.prototype.getSpriteFrameName = function(e) {
                return e.getComponent(cc.Sprite).spriteFrame.name
            }
            ,
            n.prototype.DoneAction = function() {
                l.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene("Picnic4"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("Picnic4")
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                if (t.self.ToolSequence == i.FAN) {
                    var e = cc.v2(359, 68.5)
                      , n = cc.v2(0, 0);
                    this.Hint.active = !0,
                    this.Hint.stopAllActions(),
                    this.Hint.runAction(cc.repeat(cc.sequence(cc.show(), cc.place(e), cc.moveTo(1.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))
                } else
                    t.self.ToolSequence == i.FANPOPUP ? (e = cc.v2(-118, -122.5),
                    n = cc.v2(122, 128.5),
                    this.Hint.active = !0,
                    this.Hint.stopAllActions(),
                    this.Hint.runAction(cc.repeat(cc.sequence(cc.show(), cc.place(e), cc.moveTo(2, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))) : t.self.ToolSequence == i.TUBE ? (e = cc.v2(110, -73.5),
                    n = cc.v2(-16, 53.5),
                    this.Hint.active = !0,
                    this.Hint.stopAllActions(),
                    this.Hint.runAction(cc.repeat(cc.sequence(cc.show(), cc.place(e), cc.moveTo(1.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))) : t.self.ToolSequence == i.BAG && (e = cc.v2(242, -88.5),
                    n = cc.v2(-110, -115.5),
                    this.Hint.active = !0,
                    this.Hint.stopAllActions(),
                    this.Hint.runAction(cc.repeat(cc.sequence(cc.show(), cc.place(e), cc.moveTo(1.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50)))
            }
            ,
            n.prototype.HideHint = function() {
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.getPosition = function(e) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                return this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([f], n)
        }(cc.Component);
        t.default = d,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    Picnic4: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "9aa0c5Y3z9JA7Llm0eSS+3Y", "Picnic4");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TOOLSQ = void 0;
        var i, s = e("./Character"), l = e("./Promotion"), r = cc._decorator, f = r.ccclass;
        r.property,
        function(e) {
            e[e.NONE = -1] = "NONE",
            e[e.CHARCTER = 0] = "CHARCTER",
            e[e.TOY = 1] = "TOY"
        }(i = t.TOOLSQ || (t.TOOLSQ = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.CanMove = !1,
                n.BeganPoint = null,
                n.SelectedCharacter = 1,
                n.Tools = [],
                n.ToolSequence = i.NONE,
                n.MoveNode = null,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                this.Hint = cc.find("Canvas/hint2"),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Bed/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Bed/Character/char_ske" + this.SelectedCharacter).active = !0,
                cc.find("Canvas/Character/char_ske" + this.SelectedCharacter).active = !0,
                this.Tools[0] = cc.find("Canvas/Bed/Character/char_ske" + this.SelectedCharacter),
                this.MoveNode = cc.find("Canvas/Temp"),
                this.node.getComponent(cc.Animation).on("finished", function() {
                    t.self.node.getComponent(cc.Animation).off("finished"),
                    t.self.ToolSequence = i.CHARCTER,
                    t.self.PlaySound("let take out side first"),
                    t.self.ShowHint()
                })
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded)
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                if (console.log("cc.v2(" + c.x + "," + c.y + ")"),
                t.self.ToolSequence == i.CHARCTER) {
                    if (t.self.Tools[t.self.ToolSequence].getBoundingBoxToWorld().contains(n)) {
                        t.self.CanMove = !0;
                        var o = cc.instantiate(t.self.Tools[t.self.ToolSequence]);
                        t.self.MoveNode.addChild(o),
                        o.position = c,
                        o.scale = .75 * o.scale,
                        t.self.Tools[t.self.ToolSequence].active = !1,
                        t.self.BeganPoint = cc.v2(c),
                        t.self.HideHint(),
                        t.self.PlaySound("sfx24903003")
                    }
                } else if (t.self.ToolSequence == i.TOY)
                    for (var a = 0; a < 4; a++) {
                        var s = cc.find("Canvas/Object" + (a + 1));
                        s.active && s.getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !0,
                        o = cc.instantiate(s),
                        t.self.MoveNode.addChild(o),
                        o.position = c,
                        s.active = !1,
                        t.self.BeganPoint = cc.v2(c),
                        t.self.HideHint(),
                        t.self.PlaySound("sfx24903003"))
                    }
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                if (0 != t.self.CanMove)
                    if (t.self.ToolSequence == i.CHARCTER)
                        t.self.MoveNode.children[0].position = c,
                        cc.find("Canvas/Character/char_ske3").getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !1,
                        t.self.ToolSequence = i.NONE,
                        t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, cc.v2(-102, -79), 100, 1), cc.callFunc(function() {
                            cc.find("Canvas/Character").active = !0,
                            t.self.PlaySound("sfx24902021"),
                            t.self.node.getComponent(cc.Animation).play("BagOpenToys"),
                            t.self.node.getComponent(cc.Animation).on("finished", function() {
                                t.self.node.getComponent(cc.Animation).off("finished"),
                                t.self.ToolSequence = i.TOY,
                                t.self.ShowHint()
                            })
                        }), cc.removeSelf())));
                    else if (t.self.ToolSequence == i.TOY && (t.self.MoveNode.children[0].position = c,
                    cc.v2(-100, 0).fuzzyEquals(cc.v2(c), 50))) {
                        t.self.ToolSequence = i.NONE,
                        cc.find("Canvas/" + t.self.MoveNode.children[0].name).opacity = 254,
                        t.self.CanMove = !1;
                        var o = t.self.MoveNode.children[0].name;
                        t.self.MoveNode.removeAllChildren();
                        var a = cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter);
                        "Object1" == o ? (a.getComponent(s.default).Register(t.self),
                        a.getComponent(s.default).PlayAnimation("toy2", 1)) : "Object2" == o ? (a.getComponent(s.default).Register(t.self),
                        a.getComponent(s.default).PlayAnimation("toy4", 1)) : "Object3" == o ? (a.getComponent(s.default).Register(t.self),
                        a.getComponent(s.default).PlayAnimation("toy3", 1)) : "Object4" == o && (a.getComponent(s.default).Register(t.self),
                        a.getComponent(s.default).PlayAnimation("toy6", 1))
                    }
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n),
                0 != t.self.CanMove && (t.self.CanMove = !1,
                t.self.ToolSequence == i.CHARCTER ? (t.self.PlaySound("sfx24903002"),
                t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.Tools[t.self.ToolSequence].active = !0,
                    t.self.ShowHint()
                }), cc.removeSelf()))) : t.self.ToolSequence == i.TOY && (t.self.PlaySound("sfx24903002"),
                t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    for (var e = 0; e < 4; e++) {
                        var n = cc.find("Canvas/Object" + (e + 1));
                        if (n.name == t.self.MoveNode.children[0].name) {
                            n.active = !0,
                            t.self.ShowHint();
                            break
                        }
                    }
                }), cc.removeSelf()))))
            }
            ,
            n.prototype.getSpriteFrameName = function(e) {
                return e.getComponent(cc.Sprite).spriteFrame.name
            }
            ,
            n.prototype.AnimationFinishCallback = function() {
                for (var e = 0; e < 4; e++)
                    if ((c = cc.find("Canvas/Object" + (e + 1))).active) {
                        t.self.ToolSequence = i.TOY;
                        break
                    }
                var n = !0;
                for (e = 0; e < 4; e++) {
                    var c;
                    if (0 == (c = cc.find("Canvas/Object" + (e + 1))).active) {
                        c.active = !0;
                        var o = c.scale;
                        c.scale = 0,
                        c.runAction(cc.scaleTo(.4, o).easing(cc.easeBounceOut()))
                    }
                    255 == c.opacity && (n = !1)
                }
                var a = cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter);
                n && 0 == cc.find("Canvas/Done").active ? (a.getComponent(s.default).DeRegister(t.self),
                a.getComponent(s.default).StartAnimation(),
                a.getComponent(s.default).PlayAnimation("bouncing", 3),
                cc.find("Canvas/Done").active = !0,
                t.self.FinishParticle()) : a.getComponent(s.default).PlayAnimation("idle", -1)
            }
            ,
            n.prototype.DoneAction = function() {
                l.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.sys.localStorage.setItem("SelectedView", "5"),
                cc.sys.localStorage.setItem("isViewDone4", 1),
                cc.director.preloadScene("LevelScene"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("LevelScene")
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                if (t.self.ToolSequence == i.CHARCTER) {
                    var e = cc.v2(283, 46.5)
                      , n = cc.v2(-119, -21.5);
                    this.Hint.active = !0,
                    this.Hint.stopAllActions(),
                    this.Hint.runAction(cc.repeat(cc.sequence(cc.hide(), cc.delayTime(1), cc.show(), cc.place(e), cc.moveTo(1.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))
                } else if (t.self.ToolSequence == i.TOY) {
                    e = cc.v2(-118, -122.5);
                    for (var c = 1; c <= 4; c++) {
                        var o = cc.find("Canvas/Object" + c);
                        if (o.active) {
                            e = this.getPosition(o);
                            break
                        }
                    }
                    n = cc.v2(-100, -18.5),
                    this.Hint.active = !0,
                    this.Hint.stopAllActions(),
                    this.Hint.runAction(cc.repeat(cc.sequence(cc.hide(), cc.delayTime(1), cc.show(), cc.place(e), cc.moveTo(2, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))
                }
            }
            ,
            n.prototype.HideHint = function() {
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.getPosition = function(e) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                return this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([f], n)
        }(cc.Component);
        t.default = d,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    Picnic: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "fcdb7WDoShOKbVIkLNE3d85", "Picnic");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.Tools = [],
                n.SelectedCharacter = 1,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                cc.director.preloadScene("Picnic2"),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Character/char_ske" + this.SelectedCharacter).active = !0,
                this.Hint = cc.find("Canvas/hint2"),
                t.self = this,
                this.Tools.push(cc.find("Canvas/Object1")),
                this.Tools.push(cc.find("Canvas/Object2")),
                this.Tools.push(cc.find("Canvas/Object3")),
                this.Tools.push(cc.find("Canvas/Object4")),
                this.Tools.push(cc.find("Canvas/Object5")),
                this.Tools.push(cc.find("Canvas/Object6")),
                this.Tools.push(cc.find("Canvas/Object7")),
                this.GeneratePanelItems()
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                t.self.PlaySound("now baby wnat to play outside"),
                t.self.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    t.self.ShowHint(),
                    t.self.PlaySound("lets get all the stuff needed")
                })))
            }
            ,
            n.prototype.GeneratePanelItems = function() {
                this.Tools = this.shuffle(this.Tools),
                console.log(this.Tools);
                for (var e = 0; e < 4; e++) {
                    var n = cc.find("Canvas/Popup/Object" + (e + 1));
                    this.AdjustScaling(n, 70)
                }
            }
            ,
            n.prototype.AdjustScaling = function(e, n) {
                var t = e.getContentSize();
                if (t.width > t.height) {
                    var c = n / t.width;
                    e.scale = c
                } else
                    c = n / t.height,
                    e.scale = c
            }
            ,
            n.prototype.shuffle = function(e) {
                for (var n, t, c = e.length; 0 !== c; )
                    t = Math.floor(Math.random() * c),
                    n = e[c -= 1],
                    e[c] = e[t],
                    e[t] = n;
                return e
            }
            ,
            n.prototype.TouchBegan = function(e) {
                for (var n = e.getLocation(), c = (t.self.node.convertToNodeSpaceAR(n),
                0); c < t.self.Tools.length; c++)
                    if (t.self.Tools[c].getBoundingBoxToWorld().contains(n))
                        for (var o = 0; o < 4; o++)
                            if (t.self.getSpriteFrameName(t.self.Tools[c]) == t.self.getSpriteFrameName(cc.find("Canvas/Popup/Object" + (o + 1)))) {
                                t.self.Tools[c].active = !1,
                                t.self.HideHint(),
                                t.self.addItemEffect(t.self.Tools[c], cc.find("Canvas/Popup/Object" + (o + 1))),
                                t.self.node.stopAllActions(),
                                t.self.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
                                    t.self.ShowHint()
                                })));
                                break
                            }
            }
            ,
            n.prototype.addItemEffect = function(e, n) {
                var c = cc.instantiate(e);
                cc.find("Canvas/Temp").addChild(c),
                c.active = !0,
                this.PlaySound("sfx24903002"),
                c.position = cc.v3(this.node.convertToNodeSpaceAR(cc.v2(e.getBoundingBoxToWorld().xMin + e.getContentSize().width / 2, e.getBoundingBoxToWorld().yMin + e.getContentSize().height / 2)));
                var o = cc.v2(this.node.convertToNodeSpaceAR(cc.v2(n.getBoundingBoxToWorld().xMin + n.getContentSize().width / 2, n.getBoundingBoxToWorld().yMin + n.getContentSize().height / 2)));
                c.runAction(cc.sequence(cc.jumpTo(.5, o, 100, 1), cc.callFunc(function() {
                    n.opacity = 255,
                    t.self.PlaySound("sfx24902021"),
                    cc.sys.localStorage.setItem(e.name, t.self.getSpriteFrameName(n));
                    var c = n.parent;
                    cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter).getComponent(i.default).StartAnimation(),
                    Math.random() > .5 && cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter).getComponent(i.default).PlayAnimation("happy1", 1),
                    Math.random() > .5 ? cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter).getComponent(i.default).PlayAnimation("happy2", 1) : cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter).getComponent(i.default).PlayAnimation("clap", 1);
                    for (var o = 0; o < 4 && 255 == c.children[o].opacity; o++)
                        3 == o && (cc.find("Canvas/Character/char_ske" + t.self.SelectedCharacter).getComponent(i.default).PlayAnimation("clap", 1),
                        cc.find("Canvas/Done").active = !0,
                        t.self.FinishParticle())
                }), cc.removeSelf()))
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n)
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n)
            }
            ,
            n.prototype.getSpriteFrameName = function(e) {
                return e.getComponent(cc.Sprite).spriteFrame.name
            }
            ,
            n.prototype.DoneAction = function() {
                s.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene("Picnic2"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("Picnic2")
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                for (var e = cc.v2(-200002, -40.5), n = 0; n < t.self.Tools.length; n++)
                    for (var c = 0; c < 4; c++)
                        if (t.self.Tools[n].active && t.self.getSpriteFrameName(t.self.Tools[n]) == t.self.getSpriteFrameName(cc.find("Canvas/Popup/Object" + (c + 1)))) {
                            e = cc.v2(t.self.Tools[n].position);
                            break
                        }
                this.Hint.active = !0,
                this.Hint.stopAllActions(),
                this.Hint.position = cc.v3(e),
                t.self.Hint.getComponent(cc.Animation).play("TapHint"),
                this.Hint.runAction(cc.repeat(cc.sequence(cc.place(e), cc.hide(), cc.delayTime(.5), cc.show(), cc.delayTime(1)), 5))
            }
            ,
            n.prototype.HideHint = function() {
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    PlayRoom2: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "6de42HHr4NCVLSp3f43YCPu", "PlayRoom2");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.SelectedCharacter = 1,
                n.CanMove = !1,
                n.HiddenObjects = [],
                n.SideCharacter = null,
                n.FrontCharacter = null,
                n.Indexing = [],
                n.CurrentAnimationIndex = null,
                n.isFind = !1,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                cc.director.preloadScene("PlayRoom3"),
                this.Hint = cc.find("Canvas/hint2"),
                this.Hint.zIndex = 50,
                this.Hint.scale = .7,
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Front").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Side").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Front/char_ske" + this.SelectedCharacter).active = !0,
                cc.find("Canvas/Side/characterside2_ske" + this.SelectedCharacter).active = !0,
                this.FrontCharacter = cc.find("Canvas/Front"),
                this.SideCharacter = cc.find("Canvas/Side"),
                this.FrontCharacter.zIndex = 4,
                this.SideCharacter.zIndex = 4,
                this.HiddenObjects.push(cc.find("Canvas/1")),
                this.HiddenObjects.push(cc.find("Canvas/2")),
                this.HiddenObjects.push(cc.find("Canvas/3")),
                this.HiddenObjects.push(cc.find("Canvas/4")),
                this.HiddenObjects.push(cc.find("Canvas/5")),
                this.HiddenObjects[3].zIndex = 2,
                this.HiddenObjects[2].zIndex = 2,
                this.HiddenObjects[0].zIndex = 5,
                this.HiddenObjects[1].zIndex = 5,
                this.HiddenObjects[4].zIndex = 5,
                this.Indexing.push(1),
                this.Indexing.push(2),
                this.Indexing.push(3),
                this.Indexing.push(4),
                this.Indexing.push(5),
                this.shuffleArray(this.Indexing)
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                t.self.PlaySound("its kids keep time let play hide and seek"),
                this.node.runAction(cc.sequence(cc.delayTime(4), cc.callFunc(function() {
                    t.self.HideAnimation()
                })))
            }
            ,
            n.prototype.shuffleArray = function(e) {
                for (var n, t = e.length - 1; t > 0; t--) {
                    var c = Math.floor(Math.random() * (t + 1));
                    n = [e[c], e[t]],
                    e[t] = n[0],
                    e[c] = n[1]
                }
            }
            ,
            n.prototype.HideAnimation = function() {
                this.CurrentAnimationIndex = this.Indexing[this.Indexing.length - 1].toString(),
                this.Indexing.pop();
                var e = 0;
                "1" == this.CurrentAnimationIndex ? e = 3 : "2" == this.CurrentAnimationIndex ? e = 3 : "3" == this.CurrentAnimationIndex ? e = 0 : "4" == this.CurrentAnimationIndex ? e = 0 : "5" == this.CurrentAnimationIndex && (e = 3),
                this.node.getComponent(cc.Animation).play("Hide" + this.CurrentAnimationIndex),
                this.node.getComponent(cc.Animation).on("finished", function() {
                    t.self.node.getComponent(cc.Animation).off("finished"),
                    t.self.SideCharacter.zIndex = e,
                    t.self.isFind = !0,
                    t.self.ShowHint(),
                    0 == cc.find("Canvas/SoundNode/its kids keep time let play hide and seek").getComponent(cc.AudioSource).isPlaying && Math.random() > .5 && t.self.PlaySound("where is baby hidding")
                })
            }
            ,
            n.prototype.SeekCharacter = function() {
                this.node.getComponent(cc.Animation).play("Seek" + this.CurrentAnimationIndex),
                this.node.getComponent(cc.Animation).on("finished", function() {
                    t.self.node.getComponent(cc.Animation).off("finished"),
                    t.self.isFind = !1,
                    t.self.PlaySound("Particle");
                    var e = cc.find("Canvas/Front/char_ske" + t.self.SelectedCharacter).getComponent(i.default);
                    e.CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, t.self.FinishAnimation.bind(t.self)),
                    Math.random() > .8 ? e.PlayAnimation("happy2", 1) : Math.random() > .8 ? e.PlayAnimation("happy1", 1) : e.PlayAnimation("bouncing", 1)
                })
            }
            ,
            n.prototype.FinishAnimation = function() {
                var e = cc.find("Canvas/Front/char_ske" + this.SelectedCharacter).getComponent(i.default);
                e.CharacterObj.removeEventListener(dragonBones.EventObject.COMPLETE),
                e.PlayAnimation("idle", -1),
                this.Indexing.length > 0 ? this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.HideAnimation()
                }))) : (cc.find("Canvas/Done").active = !0,
                t.self.FinishParticle())
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n),
                t.self.isFind && t.self.SideCharacter.active && t.self.SideCharacter.getBoundingBoxToWorld().contains(n) && (t.self.isFind = !1,
                t.self.SeekCharacter(),
                t.self.Hint.opacity = 0)
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n)
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n)
            }
            ,
            n.prototype.DoneAction = function() {
                s.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene("PlayRoom3"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("PlayRoom3")
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                var e = cc.v2(cc.find("Canvas/Side").position);
                e.y += 60,
                this.Hint.active = !0,
                this.Hint.stopAllActions(),
                this.Hint.getComponent(cc.Animation).play(),
                this.Hint.runAction(cc.repeat(cc.sequence(cc.hide(), cc.delayTime(1), cc.show(), cc.place(e), cc.delayTime(2), cc.hide(), cc.delayTime(3)), 50))
            }
            ,
            n.prototype.HideHint = function() {
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    PlayRoom3: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "a891bdWxG9HhrxFq0bWxvGW", "PlayRoom3");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.SelectedCharacter = 1,
                n.CanMove = !1,
                n.MoveNode = null,
                n.BeganPoint = null,
                n.CharacterObj = null,
                n.Hint = null,
                n.Indexing = [],
                n.SelectedItem = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                cc.director.preloadScene("PlayRoom4"),
                this.Hint = cc.find("Canvas/hint2"),
                this.Hint.zIndex = 50,
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Front").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Front/char_ske" + this.SelectedCharacter).active = !0,
                this.CharacterObj = cc.find("Canvas/Front/char_ske" + this.SelectedCharacter),
                t.self.MoveNode = cc.find("Canvas/MoveNode"),
                cc.find("Canvas/1").zIndex = 1,
                cc.find("Canvas/1up").zIndex = 3,
                cc.find("Canvas/4").zIndex = 2,
                cc.find("Canvas/3").zIndex = 4,
                cc.find("Canvas/2").zIndex = 4
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.ShowThinking(),
                    t.self.PlaySound("which block she need"),
                    t.self.ShowHint()
                }))),
                this.Indexing.push(2),
                this.Indexing.push(3),
                this.Indexing.push(4),
                this.shuffleArray(this.Indexing)
            }
            ,
            n.prototype.shuffleArray = function(e) {
                for (var n, t = e.length - 1; t > 0; t--) {
                    var c = Math.floor(Math.random() * (t + 1));
                    n = [e[c], e[t]],
                    e[t] = n[0],
                    e[c] = n[1]
                }
            }
            ,
            n.prototype.ShowThinking = function() {
                if (0 != this.Indexing.length) {
                    var e = cc.find("Canvas/Thinking");
                    e.children.forEach(function(e) {
                        e.active = !1
                    }),
                    e.getChildByName(this.Indexing[this.Indexing.length - 1].toString()).active = !0,
                    e.stopAllActions(),
                    e.runAction(cc.scaleTo(.3, 1).easing(cc.easeBounceOut())),
                    this.SelectedItem = this.Indexing[this.Indexing.length - 1].toString(),
                    this.Indexing.pop()
                } else
                    this.HideThinking()
            }
            ,
            n.prototype.HideThinking = function() {
                var e = cc.find("Canvas/Thinking");
                e.stopAllActions(),
                e.runAction(cc.scaleTo(.3, 0).easing(cc.easeBounceOut()))
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation()
                  , c = t.self.node.convertToNodeSpaceAR(n);
                t.self.MoveNode.childrenCount > 0 || cc.find("Canvas/panel").children.forEach(function(e) {
                    if (0 == t.self.CanMove && e.getBoundingBoxToWorld().contains(n)) {
                        t.self.CanMove = !0;
                        var o = cc.instantiate(e);
                        t.self.MoveNode.addChild(o),
                        o.position = cc.v3(c),
                        o.runAction(cc.scaleTo(.3, 1)),
                        t.self.BeganPoint = cc.v2(c),
                        e.active = !1,
                        t.self.MoveNode.zIndex = 5,
                        t.self.HideHint(),
                        t.self.PlaySound("sfx24903003")
                    }
                })
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                if (t.self.CanMove && (t.self.MoveNode.children[0].position = c,
                cc.v2(-54, 52).fuzzyEquals(cc.v2(c), 50))) {
                    t.self.CanMove = !1;
                    var o = t.self.MoveNode.children[0].name;
                    o == t.self.SelectedItem ? (t.self.HideThinking(),
                    t.self.PlaySound("sfx24902021"),
                    t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, cc.v2(-54, 52), 100, 1), cc.callFunc(function() {
                        if (t.self.CharacterObj.getComponent(i.default).PlayAnimation("looking", 1),
                        t.self.CharacterObj.getComponent(i.default).CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, t.self.FinishAnimation.bind(t.self)),
                        "2" == o) {
                            t.self.getComponent(cc.Animation).play("PutItem" + o);
                            var e = cc.find("Canvas/" + o)
                              , n = e.zIndex;
                            e.zIndex = 0,
                            t.self.getComponent(cc.Animation).on("finished", function() {
                                t.self.getComponent(cc.Animation).off("finished"),
                                e.zIndex = n
                            })
                        } else if ("3" == o) {
                            t.self.getComponent(cc.Animation).play("PutItem" + o);
                            var c = cc.find("Canvas/" + o)
                              , a = c.zIndex;
                            c.zIndex = 0,
                            t.self.getComponent(cc.Animation).on("finished", function() {
                                t.self.getComponent(cc.Animation).off("finished"),
                                c.zIndex = a
                            })
                        } else if ("4" == o) {
                            t.self.getComponent(cc.Animation).play("PutItem" + o);
                            var s = cc.find("Canvas/" + o)
                              , l = s.zIndex;
                            s.zIndex = 0,
                            t.self.getComponent(cc.Animation).on("finished", function() {
                                t.self.getComponent(cc.Animation).off("finished"),
                                s.zIndex = l
                            })
                        }
                    }), cc.removeSelf()))) : (t.self.PlaySound("she does not need this block"),
                    t.self.CharacterObj.getComponent(i.default).StartAnimation(),
                    t.self.CharacterObj.getComponent(i.default).PlayAnimation("angry", 1),
                    t.self.MoveNode.children[0].runAction(cc.sequence(cc.repeat(cc.sequence(cc.rotateBy(.02, 5), cc.rotateBy(.04, -10), cc.rotateBy(.01, 5)), 5), cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                        cc.find("Canvas/panel").getChildByName(t.self.MoveNode.children[0].name).active = !0,
                        t.self.node.stopAllActions(),
                        t.self.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                            t.self.ShowHint()
                        })))
                    }), cc.removeSelf())))
                }
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                cc.v3(t.self.node.convertToNodeSpaceAR(n)),
                t.self.CanMove && (t.self.CanMove = !1,
                t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    cc.find("Canvas/panel").getChildByName(t.self.MoveNode.children[0].name).active = !0,
                    t.self.node.stopAllActions(),
                    t.self.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                        t.self.ShowHint()
                    })))
                }), cc.removeSelf())))
            }
            ,
            n.prototype.FinishAnimation = function() {
                var e = this.CharacterObj.getComponent(i.default);
                e.CharacterObj.removeEventListener(dragonBones.EventObject.COMPLETE),
                e.PlayAnimation("idle", -1);
                var n = !0;
                t.self.ShowThinking(),
                cc.find("Canvas/panel").children.forEach(function(e) {
                    e.active && (n = !1)
                }),
                this.MoveNode.childrenCount > 0 && (n = !1),
                n && (cc.find("Canvas/Done").active = !0,
                t.self.FinishParticle(),
                t.self.CharacterObj.getComponent(i.default).StartAnimation(),
                t.self.CharacterObj.getComponent(i.default).PlayAnimation("clap", 1),
                cc.find("Canvas/panel").runAction(cc.moveBy(.5, cc.v2(500, 0))))
            }
            ,
            n.prototype.DoneAction = function() {
                s.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene("PlayRoom4"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("PlayRoom4")
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                var e = cc.v2(-57, -160.5);
                e = t.self.getPosition(cc.find("Canvas/panel").getChildByName(this.SelectedItem));
                var n = cc.v2(-51, 42.5);
                this.Hint.active = !0,
                this.Hint.stopAllActions(),
                this.Hint.runAction(cc.repeat(cc.sequence(cc.hide(), cc.delayTime(1), cc.show(), cc.place(e), cc.moveTo(2.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))
            }
            ,
            n.prototype.HideHint = function() {
                t.self.node.stopAllActions(),
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.getPosition = function(e) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                return this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    PlayRoom4: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "65f86i0hP9G1KLzsGDWm/ag", "PlayRoom4");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.SelectedCharacter = 1,
                n.CanMove = !1,
                n.AnimationName = [],
                n.CharacterObj = null,
                n.Index = 0,
                n.isPick = !1,
                n.BeganPoint = null,
                n.MoveNode = null,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this,
                this.Hint = cc.find("Canvas/hint2"),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/Front").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Front/char_ske" + this.SelectedCharacter).active = !0,
                this.AnimationName[0] = "10",
                this.AnimationName[1] = "1",
                this.AnimationName[2] = "2",
                this.AnimationName[3] = "6",
                this.AnimationName[4] = "3",
                this.AnimationName[5] = "4",
                this.AnimationName[6] = "7",
                this.AnimationName[7] = "9",
                this.CharacterObj = cc.find("Canvas/Front/char_ske" + this.SelectedCharacter),
                this.MoveNode = cc.find("Canvas/MoveNode")
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.PlayAnimationClass(),
                    t.self.PlaySound("be sure to put the toys away after playing")
                })))
            }
            ,
            n.prototype.FinishAnimation = function() {
                this.CharacterObj.getComponent(i.default).CharacterObj.removeEventListener(dragonBones.EventObject.COMPLETE),
                t.self.CharacterObj.getComponent(i.default).PlayAnimation("idletoy" + t.self.AnimationName[t.self.Index], -1),
                this.isPick = !0,
                this.node.stopAllActions(),
                this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                    t.self.ShowHint()
                })))
            }
            ,
            n.prototype.PlayAnimationClass = function() {
                this.Index >= this.AnimationName.length ? (cc.find("Canvas/Done").active = !0,
                t.self.FinishParticle(),
                t.self.CharacterObj.getComponent(i.default).StartAnimation(),
                t.self.CharacterObj.getComponent(i.default).PlayAnimation("clap", 1)) : (t.self.CharacterObj.getComponent(i.default).PlayAnimation("bringtoy" + t.self.AnimationName[t.self.Index], 1),
                t.self.CharacterObj.getComponent(i.default).CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, t.self.FinishAnimation.bind(t.self)))
            }
            ,
            n.prototype.shuffleArray = function(e) {
                for (var n, t = e.length - 1; t > 0; t--) {
                    var c = Math.floor(Math.random() * (t + 1));
                    n = [e[c], e[t]],
                    e[t] = n[0],
                    e[c] = n[1]
                }
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation()
                  , c = t.self.node.convertToNodeSpaceAR(n);
                if (console.log("cc.v2(" + c.x + "," + c.y + ")"),
                0 != t.self.isPick && cc.find("Canvas/Front/Pick").getBoundingBoxToWorld().contains(n) && 0 == t.self.CanMove) {
                    t.self.CanMove = !0;
                    var o = cc.find("Canvas/" + (t.self.Index + 1))
                      , a = cc.instantiate(o);
                    t.self.MoveNode.addChild(a),
                    a.position = cc.v3(c),
                    a.active = !0,
                    t.self.BeganPoint = cc.v2(c),
                    t.self.CharacterObj.getComponent(i.default).PlayAnimation("idle", -1),
                    t.self.HideHint(),
                    t.self.PlaySound("sfx24903003"),
                    t.self.ShowArrowHint(cc.find("Canvas/" + a.name).position)
                }
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation()
                  , c = cc.v3(t.self.node.convertToNodeSpaceAR(n));
                if (t.self.CanMove) {
                    t.self.MoveNode.children[0].position = c;
                    var o = t.self.MoveNode.children[0].name;
                    if (cc.find("Canvas/" + o).getBoundingBoxToWorld().contains(n)) {
                        t.self.CanMove = !1;
                        var a = cc.v2(cc.find("Canvas/" + o).position);
                        t.self.isPick = !1,
                        t.self.HideArrow(),
                        t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, a, 100, 1), cc.callFunc(function() {
                            cc.find("Canvas/" + o).active = !0,
                            t.self.PlaySound("sfx24902021"),
                            t.self.Index++,
                            t.self.PlayAnimationClass()
                        }), cc.removeSelf()))
                    }
                }
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                cc.v3(t.self.node.convertToNodeSpaceAR(n)),
                t.self.CanMove && (t.self.CanMove = !1,
                t.self.HideArrow(),
                t.self.MoveNode.children[0].runAction(cc.sequence(cc.jumpTo(.3, t.self.BeganPoint, 100, 1), cc.callFunc(function() {
                    t.self.CharacterObj.getComponent(i.default).PlayAnimation("idletoy" + t.self.AnimationName[t.self.Index], -1),
                    t.self.node.stopAllActions(),
                    t.self.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                        t.self.ShowHint()
                    })))
                }), cc.removeSelf())))
            }
            ,
            n.prototype.DoneAction = function() {
                s.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.sys.localStorage.setItem("SelectedView", "4"),
                cc.sys.localStorage.setItem("isViewDone3", 1),
                cc.director.preloadScene("LevelScene"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("LevelScene")
                })))
            }
            ,
            n.prototype.ShowArrowHint = function(e) {
                var n = cc.find("Canvas/Arrow");
                n.stopAllActions(),
                n.position = e,
                n.active = !0,
                n.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.3, cc.v2(0, 30)), cc.moveBy(.2, cc.v2(0, -30)))))
            }
            ,
            n.prototype.HideArrow = function() {
                var e = cc.find("Canvas/Arrow");
                e.stopAllActions(),
                e.active = !1
            }
            ,
            n.prototype.ShowHint = function() {
                for (var e = cc.v2(305, -108.5), n = cc.v2(-51e3, 42.5), c = 1; c <= 8; c++) {
                    var o = cc.find("Canvas/" + c);
                    if (0 == o.active) {
                        n = t.self.getPosition(o);
                        break
                    }
                }
                this.Hint.active = !0,
                this.Hint.stopAllActions(),
                this.Hint.runAction(cc.repeat(cc.sequence(cc.hide(), cc.delayTime(1), cc.show(), cc.place(e), cc.moveTo(2.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))
            }
            ,
            n.prototype.HideHint = function() {
                t.self.node.stopAllActions(),
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.getPosition = function(e) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                return this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    PlayRoom: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "7da263FYhdPv4whC+74JiaI", "PlayRoom");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = e("./Character")
          , s = e("./Promotion")
          , l = cc._decorator
          , r = l.ccclass
          , f = (l.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.SelectedCharacter = 1,
                n.Ring = null,
                n.CanMove = !1,
                n.PopupName = [],
                n.ThinkingObject = null,
                n.Hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                var e;
                t.self = this,
                this.Hint = cc.find("Canvas/hint2"),
                cc.director.preloadScene("PlayRoom2"),
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                cc.find("Canvas/frot/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/frot/Character/characterside2_ske" + this.SelectedCharacter).active = !0,
                cc.find("Canvas/Character").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/Character/characterside2_ske" + this.SelectedCharacter).active = !0,
                cc.find("Canvas/FrontCharacter").children.forEach(function(e) {
                    e.active = !1
                }),
                cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).active = !0,
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                    t.self.node.getComponent(cc.Animation).play("PlayRoomEntry"),
                    t.self.node.getComponent(cc.Animation).on("finished", function() {
                        t.self.node.getComponent(cc.Animation).off("finished"),
                        t.self.node.getComponent(cc.Animation).play("PlayRoomCharacterEntry"),
                        t.self.node.getComponent(cc.Animation).on("finished", function() {
                            t.self.node.getComponent(cc.Animation).off("finished"),
                            t.self.node.getComponent(cc.Animation).play("PlayRoomHandEntry"),
                            t.self.node.getComponent(cc.Animation).off("finished"),
                            t.self.ShowThinking(),
                            cc.find("Canvas/HintRing").active = !0,
                            cc.find("Canvas/FrontCharacter/char_ske" + t.self.SelectedCharacter).getComponent(i.default).RegisterIdle(),
                            cc.find("Canvas/SoundNode").runAction(cc.repeatForever(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
                                t.self.PlaySound("let go toy which want to her")
                            }), cc.delayTime(5))))
                        })
                    })
                }))),
                this.Ring = cc.find("Canvas/Ring2");
                for (var n = 0; n < 7; n++)
                    this.PopupName.push(n + 1);
                for (this.shuffleArray(this.PopupName),
                this.Hint.zIndex = 50,
                n = 0; n < 7; n++)
                    if (4 == this.PopupName[n]) {
                        e = [this.PopupName[this.PopupName.length - 1], this.PopupName[n]],
                        this.PopupName[n] = e[0],
                        this.PopupName[this.PopupName.length - 1] = e[1];
                        break
                    }
            }
            ,
            n.prototype.start = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded)
            }
            ,
            n.prototype.shuffleArray = function(e) {
                for (var n, t = e.length - 1; t > 0; t--) {
                    var c = Math.floor(Math.random() * (t + 1));
                    n = [e[c], e[t]],
                    e[t] = n[0],
                    e[c] = n[1]
                }
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n),
                cc.find("Canvas/HintRing").active && (cc.find("Canvas/HintRing").active = !1),
                t.self.Ring.active && t.self.Ring.getBoundingBoxToWorld().contains(n) && (t.self.CanMove = !0,
                t.self.HideHint(),
                t.self.node.stopAllActions())
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation();
                t.self.node.convertToNodeSpaceAR(n)
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                if (t.self.node.convertToNodeSpaceAR(n),
                0 != t.self.CanMove) {
                    t.self.CanMove = !1;
                    for (var c = 0; c < 7; c++) {
                        var o = cc.find("Canvas/" + (c + 1));
                        o.zIndex = 1,
                        o.active && o.getBoundingBoxToWorld().contains(n) && (t.self.GotoAtPosition(o.name),
                        t.self.HideHint())
                    }
                }
            }
            ,
            n.prototype.GotoAtPosition = function(e) {
                var n = cc.find("Canvas/" + e)
                  , c = cc.v2(n.position.x, n.position.y - n.getContentSize().height / 4)
                  , o = cc.instantiate(cc.find("Canvas/Ring2Move"));
                o.position = this.Ring.position,
                this.Ring.parent.addChild(o),
                this.Ring.active = !1,
                o.active = !0,
                o.zIndex = 5,
                t.self.PlaySound("sfx24902011"),
                cc.find("Canvas/FrontCharacter/Popup").stopAllActions(),
                o.runAction(cc.sequence(cc.jumpTo(.5, cc.v2(c), 200, 1), cc.callFunc(function() {
                    o.zIndex = 0,
                    t.self.PlaySound("sfx24902021"),
                    o.getComponent(cc.Animation).play("RingFit"),
                    cc.find("Canvas/SoundNode").stopAllActions(),
                    o.getComponent(cc.Animation).on("finished", function() {
                        o.getComponent(cc.Animation).off("finished"),
                        t.self.ThinkingObject == e ? (t.self.HidePopup(),
                        n.zIndex = 5,
                        n.runAction(cc.sequence(cc.jumpTo(.5, cc.v2(333, -200), 100, 1), cc.callFunc(function() {
                            t.self.PlayAnimation(n.name),
                            n.active = !1
                        })))) : (cc.find("Canvas/FrontCharacter/char_ske" + t.self.SelectedCharacter).getComponent(i.default).PlayAnimation("angry", 1),
                        t.self.node.getComponent(cc.Animation).play("PlayRoomHandEntry"),
                        t.self.node.stopAllActions(),
                        t.self.PlaySound("not this one try another one"),
                        t.self.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
                            t.self.ShowHint()
                        })))),
                        o.removeFromParent()
                    })
                })))
            }
            ,
            n.prototype.PlayAnimation = function(e) {
                cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).getComponent(i.default).StartAnimation(),
                cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).getComponent(i.default).PlayAnimation("toy" + e, 1),
                cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).getComponent(i.default).CharacterObj.addEventListener(dragonBones.EventObject.COMPLETE, this.FinishAnimation.bind(this))
            }
            ,
            n.prototype.FinishAnimation = function() {
                this.PopupName.length > 0 ? (cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).getComponent(i.default).PlayAnimation("idle", -1),
                cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).getComponent(i.default).CharacterObj.removeEventListener(dragonBones.EventObject.COMPLETE),
                t.self.node.getComponent(cc.Animation).play("PlayRoomHandEntry"),
                this.ShowThinking()) : (t.self.node.stopAllActions(),
                t.self.HideHint(),
                cc.find("Canvas/Done").active = !0,
                t.self.FinishParticle(),
                cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).getComponent(i.default).StartAnimation(),
                cc.find("Canvas/FrontCharacter/char_ske" + this.SelectedCharacter).getComponent(i.default).PlayAnimation("bouncing", 2))
            }
            ,
            n.prototype.ShowThinking = function() {
                var e = cc.find("Canvas/FrontCharacter/Popup");
                e.children.forEach(function(e) {
                    e.active = !1
                }),
                e.active = !0,
                this.ThinkingObject = this.PopupName[this.PopupName.length - 1].toString(),
                e.getChildByName(this.ThinkingObject).active = !0,
                this.PopupName.pop(),
                this.PlaySound("POpupOpen"),
                e.stopAllActions(),
                e.runAction(cc.sequence(cc.scaleTo(.3, 1).easing(cc.easeBounceOut()), cc.delayTime(3), cc.callFunc(function() {
                    t.self.ShowHint()
                })))
            }
            ,
            n.prototype.HidePopup = function() {
                this.HideHint(),
                cc.find("Canvas/FrontCharacter/Popup").runAction(cc.scaleTo(.3, 0).easing(cc.easeBounceOut()))
            }
            ,
            n.prototype.DoneAction = function() {
                s.default.self.requestAds(),
                this.PlaySound("Click"),
                cc.director.preloadScene("PlayRoom2"),
                this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
                    cc.director.loadScene("PlayRoom2")
                })))
            }
            ,
            n.prototype.ShowHint = function() {
                var e = cc.v2(-57, -160.5)
                  , n = cc.v2(-119, -21.5);
                cc.find("Canvas/" + this.ThinkingObject) && (n = this.getPosition(cc.find("Canvas/" + this.ThinkingObject))),
                this.Hint.active = !0,
                this.Hint.stopAllActions(),
                this.Hint.runAction(cc.repeat(cc.sequence(cc.hide(), cc.delayTime(1), cc.show(), cc.place(e), cc.moveTo(1.5, n).easing(cc.easeBackOut()), cc.hide(), cc.delayTime(3)), 50))
            }
            ,
            n.prototype.HideHint = function() {
                this.Hint.stopAllActions(),
                this.Hint.active = !1
            }
            ,
            n.prototype.getPosition = function(e) {
                var n = e.parent.convertToWorldSpaceAR(e.position);
                return this.node.convertToNodeSpaceAR(cc.v2(n.x, n.y))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.PlaySound("EndingParticle")
            }
            ,
            n.self = null,
            t = a([r], n)
        }(cc.Component));
        t.default = f,
        cc._RF.pop()
    }
    , {
        "./Character": "Character",
        "./Promotion": "Promotion"
    }],
    Promotion: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "7cd78MqVEVMNIYZBnI41Va4", "Promotion");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = cc._decorator
          , s = i.ccclass
          , l = (i.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.isAdRunnning = !1,
                n.isSwitchTab = !1,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.start = function() {
                t.self = this;
                var e = this;
                "promoBack" == e.node.name && this.setPromoThumb();
                var n = "game";
                "MainScene" == cc.director.getScene().name && (n = "mainscreen"),
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    YYGGames && (console.log(e.node.name),
                    "promoBack" == e.node.name ? 255 == e.node.parent.opacity && YYGGames.navigate( "gameover", "relatedgames", YYGGames.forgames[window.relatedThumbNo].id) : cc.find("Canvas/promotion") && 255 == cc.find("Canvas/promotion").opacity && 0 == cc.find("Canvas/promotion").position.x && 0 == cc.find("Canvas/promotion").position.y ? YYGGames.navigate( "gameover", e.node.name) : YYGGames.navigate( n, e.node.name))
                }),
                cc.game.on(cc.game.EVENT_SHOW, this.gameResume, !1),
                cc.game.on(cc.game.EVENT_HIDE, this.gamePause, !1)
            }
            ,
            n.prototype.playSound = function(e) {
                cc.loader.loadRes(e, cc.AudioClip, function(e, n) {
                    cc.audioEngine.playEffect(n, !1)
                })
            }
            ,
            n.prototype.onReplayClick = function(e) {
                e.target.getComponent(cc.Button).interactable = !1,
                t.self.requestAds(),
                cc.sys.localStorage.setItem("SelectedView", "1"),
                cc.sys.localStorage.setItem("isPlayVocal", 1),
                cc.sys.localStorage.setItem("isViewDone1", 0),
                cc.sys.localStorage.setItem("isViewDone2", 0),
                cc.sys.localStorage.setItem("isViewDone3", 0),
                cc.sys.localStorage.setItem("isViewDone4", 0),
                cc.sys.localStorage.setItem("isViewDone5", 0),
                t.self.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
                    cc.director.loadScene("BabySelection")
                })))
            }
            ,
            n.prototype.setPromoThumb = function() {
                "undefined" != typeof YYGGames && YYGGames.forgames.length > 0 && (window.relatedThumbNo = this.getRandomInt(0, YYGGames.forgames.length - 1),
                cc.loader.load(YYGGames.forgames[window.relatedThumbNo].thumb, function(e, n) {
                    cc.find("Canvas/promotion").opacity = 255,
                    cc.find("Canvas/promotion/promoBack/tex").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n)
                }))
            }
            ,
            n.prototype.requestAds = function() {
                // "undefined" != typeof YYGGames && YYGGames.forgames.length > 0 && (t.self.isAdRunnning = !0,
                t.self.MuteSound(),
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
                //YYGSDK.adsManager.request(YYG.TYPE.INTERSTITIAL, YYG.EventHandler.create(this, this.onSuccessCallback), YYG.EventHandler.create(this, this.onFailCallback)))
            }
            ,
            n.prototype.gameResume = function() {
                console.log("Resume Game"),
                t.self.isSwitchTab = !1,
                t.self.isAdRunnning ? (cc.game.pause(),
                t.self.MuteSound()) : (cc.game.resume(),
                t.self.StartSound())
            }
            ,
            n.prototype.gamePause = function() {
                console.log("Pause Game"),
                cc.game.pause(),
                t.self.isSwitchTab = !0,
                t.self.MuteSound()
            }
            ,
            n.prototype.MuteSound = function() {
                document.getElementById("bgsound") && (document.getElementById("bgsound").muted = !0),
                cc.find("Canvas/SoundNode") && cc.find("Canvas/SoundNode").children.forEach(function(e) {
                    e.getComponent(cc.AudioSource) && (e.getComponent(cc.AudioSource).mute = !0)
                })
            }
            ,
            n.prototype.StartSound = function() {
                t.self.isSwitchTab || (document.getElementById("bgsound") && (document.getElementById("bgsound").muted = !1),
                cc.find("Canvas/SoundNode") && cc.find("Canvas/SoundNode").children.forEach(function(e) {
                    e.getComponent(cc.AudioSource) && e.getComponent(cc.AudioSource).mute && (e.getComponent(cc.AudioSource).mute = !1)
                }))
            }
            ,
            n.prototype.onSuccessCallback = function() {
                t.self.isAdRunnning = !1,
                0 == t.self.isSwitchTab && t.self.gameResume(),
                console.log("onSuccessCallback")
            }
            ,
            n.prototype.onFailCallback = function() {
                t.self.isAdRunnning = !1,
                0 == t.self.isSwitchTab && t.self.gameResume(),
                console.log("onFailCallback")
            }
            ,
            n.prototype.getRandomInt = function(e, n) {
                return e = Math.ceil(e),
                n = Math.floor(n) + 1,
                Math.floor(Math.random() * (n - e)) + e
            }
            ,
            n.self = null,
            t = a([s], n)
        }(cc.Component));
        t.default = l,
        cc._RF.pop()
    }
    , {}],
    Sleeping: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "4ae191Bgw5CnbtS508uMN+Z", "Sleeping");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, s = e("./Promotion"), l = cc._decorator, r = l.ccclass, f = l.property;
        (function(e) {
            e[e.BLANKET = 0] = "BLANKET",
            e[e.MOSQUITO = 1] = "MOSQUITO",
            e[e.SWING = 2] = "SWING",
            e[e.SHEEP = 3] = "SHEEP",
            e[e.TAPBLANKET1 = 4] = "TAPBLANKET1",
            e[e.TAPBLANKET2 = 5] = "TAPBLANKET2",
            e[e.TAPBLANKET3 = 6] = "TAPBLANKET3",
            e[e.TAPBLANKET4 = 7] = "TAPBLANKET4",
            e[e.CURTAIN = 8] = "CURTAIN",
            e[e.LAMP = 9] = "LAMP",
            e[e.DONE = 10] = "DONE"
        }
        )(i || (i = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.ToolSequence = 0,
                n.CanMove = !1,
                n.MoveItem = null,
                n.char = null,
                n.SelectedCharacter = 1,
                n.isSwinging = !1,
                n.swingingCounter = 0,
                n.sheepStartPos = cc.Vec2.ZERO,
                n.correctSheepData = [4, 5, 6, 7, 0, 1, 2, 3],
                n.selectedSheep = 1,
                n.Tools = [],
                n.hint = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                t.self = this
            }
            ,
            n.prototype.playaudio = function(e, n) {
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).loop = n,
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.prototype.stopAudio = function(e) {
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).loop = !1,
                cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).stop()
            }
            ,
            n.prototype.start = function() {
                this.playaudio("baby is sleeping", !1),
                this.node.on(cc.Node.EventType.TOUCH_START, this.TouchBegan),
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TouchEnded),
                this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnded),
                cc.tween(cc.find("Canvas/Bg/BlanketThumb")).to(1, {
                    position: cc.v3(276, 70, 0)
                }, {
                    easing: "backOut"
                }).start(),
                this.showHint(1),
                cc.find("Canvas/sheepgame/drawing2").getComponent(cc.Graphics).strokeColor = new cc.Color(156,127,13),
                cc.find("Canvas/sheepgame/drawing2").getComponent(cc.Graphics).lineWidth = 20,
                cc.find("Canvas/sheepgame/drawing1").getComponent(cc.Graphics).strokeColor = new cc.Color(250,214,72),
                cc.find("Canvas/sheepgame/drawing1").getComponent(cc.Graphics).lineWidth = 15,
                null != cc.sys.localStorage.getItem("SelectedCharacter") && (this.SelectedCharacter = parseInt(cc.sys.localStorage.getItem("SelectedCharacter"))),
                this.SelectedCharacter > 3 && (this.SelectedCharacter = 1),
                cc.find("Canvas/Bg/Bed/sleeping_ske" + this.SelectedCharacter).active = !0,
                t.self.char = cc.find("Canvas/Bg/Bed/sleeping_ske" + this.SelectedCharacter).getComponent(dragonBones.ArmatureDisplay),
                console.log(t.self.char.getAnimationNames(t.self.char.armature().name)),
                this.char.addEventListener(dragonBones.EventObject.COMPLETE, function() {
                    t.self.char.armature().animation.fadeIn("idle", .5, 1)
                }, this.char),
                cc.find("Canvas/sheepgame/sheeps").children.forEach(function(e) {
                    e.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, function() {
                        0 == t.self.getRandomInt(0, 5) ? e.getComponent(dragonBones.ArmatureDisplay).armature().animation.fadeIn("jump", .5, 1) : e.getComponent(dragonBones.ArmatureDisplay).armature().animation.fadeIn("idle", .5, 1)
                    })
                })
            }
            ,
            n.prototype.getRandomInt = function(e, n) {
                return e = Math.ceil(e),
                n = Math.floor(n) + 1,
                Math.floor(Math.random() * (n - e)) + e
            }
            ,
            n.prototype.TouchBegan = function(e) {
                var n = e.getLocation();
                switch (t.self.node.convertToNodeSpaceAR(n),
                t.self.ToolSequence) {
                case i.BLANKET:
                    t.self.isTapped(t.self.Tools[t.self.ToolSequence], n) && (t.self.resetHint(),
                    cc.Tween.stopAllByTarget(t.self.Tools[t.self.ToolSequence]),
                    t.self.CanMove = !0,
                    t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 0))));
                    break;
                case i.MOSQUITO:
                    cc.find("Canvas/Bg/mosquito").children.forEach(function(e) {
                        t.self.isTapped(e, n) && (cc.Tween.stopAllByTarget(e),
                        e.getComponent(cc.Animation).stop(),
                        e.getComponent(dragonBones.ArmatureDisplay).playAnimation("die", 1),
                        t.self.playaudio("mosquitokill", !1),
                        cc.tween(e).to(1.5, {
                            position: cc.v3(e.x, -300, 0),
                            angle: 360
                        }).to(.1, {
                            scale: 0
                        }).call(function() {
                            var e = 0;
                            cc.find("Canvas/Bg/mosquito").children.forEach(function(n) {
                                0 == n.scale && e++
                            }),
                            4 == e && (t.self.stopAudio("musquitoambiance"),
                            t.self.playaudio("swing the cradle", !1),
                            t.self.ToolSequence = i.SWING,
                            t.self.showHint(1),
                            cc.tween(cc.find("Canvas/Bg/Bed/hitn")).to(1, {
                                scale: 1
                            }, {
                                easing: "backOut"
                            }).start())
                        }).start())
                    });
                    break;
                case i.SWING:
                    t.self.resetHint();
                    break;
                case i.SHEEP:
                    for (var c = 0; c < cc.find("Canvas/sheepgame/sheeps").childrenCount; c++) {
                        var o = cc.find("Canvas/sheepgame/sheeps").children[c]
                          , a = cc.rect(o.getBoundingBoxToWorld().x + 50, o.getBoundingBoxToWorld().y, 100, 80);
                        if (1 == o.active && a.contains(n)) {
                            t.self.sheepStartPos = o.getPosition(),
                            t.self.CanMove = !0,
                            t.self.selectedSheep = c,
                            t.self.playaudio("sheep", !1);
                            break
                        }
                    }
                    break;
                case i.TAPBLANKET1:
                    t.self.isTapped(cc.find("Canvas/Bg/Bed/BlanketFull"), n) && 0 == cc.find("Canvas/Bg/Bed/BlanketFull").getNumberOfRunningActions() && (t.self.hint.getComponent(cc.Animation).stop("TapHint"),
                    t.self.resetHint(),
                    t.self.playaudio("blanketon", !1),
                    cc.find("Canvas/Bg/Bed/BlanketFull").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Bg/Bed/BlanketFull").getChildByName("BlanketFull").getComponent(cc.Sprite).spriteFrame,
                    cc.tween(cc.find("Canvas/Bg/Bed/BlanketFull")).tag(2).call(function() {
                        t.self.char.armature().animation.fadeIn("asleepidle", 1, -1)
                    }).delay(2).call(function() {
                        cc.find("Canvas/Bg/Bed/BlanketFull").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Bg/Bed/BlanketFull").getChildByName("Blanket2").getComponent(cc.Sprite).spriteFrame,
                        cc.find("Canvas/Bg/Bed/BlanketFull"),
                        t.self.char.armature().animation.fadeIn("asleepHand2", .2, -1),
                        t.self.ToolSequence = i.TAPBLANKET2,
                        t.self.showHint(1),
                        t.self.playaudio("blanketoff", !1)
                    }).start());
                    break;
                case i.TAPBLANKET2:
                    t.self.isTapped(cc.find("Canvas/Bg/Bed/BlanketFull"), n) && 0 == cc.find("Canvas/Bg/Bed/BlanketFull").getNumberOfRunningActions() && (t.self.hint.getComponent(cc.Animation).stop("TapHint"),
                    t.self.resetHint(),
                    t.self.playaudio("blanketon", !1),
                    cc.find("Canvas/Bg/Bed/BlanketFull").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Bg/Bed/BlanketFull").getChildByName("BlanketFull").getComponent(cc.Sprite).spriteFrame,
                    cc.tween(cc.find("Canvas/Bg/Bed/BlanketFull")).call(function() {
                        t.self.char.armature().animation.fadeIn("asleepidle", 1, -1)
                    }).delay(2).call(function() {
                        cc.find("Canvas/Bg/Bed/BlanketFull").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Bg/Bed/BlanketFull").getChildByName("Blanket3").getComponent(cc.Sprite).spriteFrame,
                        cc.find("Canvas/Bg/Bed/BlanketFull"),
                        t.self.char.armature().animation.fadeIn("asleepLeg1", .2, -1),
                        t.self.ToolSequence = i.TAPBLANKET3,
                        t.self.showHint(1),
                        t.self.playaudio("blanketoff", !1)
                    }).start());
                    break;
                case i.TAPBLANKET3:
                    t.self.isTapped(cc.find("Canvas/Bg/Bed/BlanketFull"), n) && 0 == cc.find("Canvas/Bg/Bed/BlanketFull").getNumberOfRunningActions() && (t.self.hint.getComponent(cc.Animation).stop("TapHint"),
                    t.self.resetHint(),
                    t.self.playaudio("blanketon", !1),
                    cc.find("Canvas/Bg/Bed/BlanketFull").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Bg/Bed/BlanketFull").getChildByName("BlanketFull").getComponent(cc.Sprite).spriteFrame,
                    cc.tween(cc.find("Canvas/Bg/Bed/BlanketFull")).call(function() {
                        t.self.char.armature().animation.fadeIn("asleepidle", 1, -1),
                        t.self.getComponent(cc.Animation).play("curtainentry"),
                        t.self.getComponent(cc.Animation).on("finished", function() {
                            t.self.getComponent(cc.Animation).off("finished"),
                            t.self.playaudio("draw the mosquito net", !1),
                            t.self.ToolSequence = i.CURTAIN,
                            t.self.showHint(1)
                        }, t.self)
                    }).start());
                    break;
                case i.CURTAIN:
                    1 == cc.find("Canvas/Bg/Curtain/right/3").active && 0 == cc.find("Canvas/Bg/Curtain/left/3").active && t.self.isTapped(cc.find("Canvas/Bg/Curtain/left"), n) ? (cc.find("Canvas/Bg/Curtain/left/3").active = !0,
                    cc.tween(cc.find("Canvas/Bg/Curtain/left/3")).to(.5, {
                        scaleX: 1,
                        scaleY: 1
                    }).start(),
                    t.self.playaudio("curtainon", !1)) : 0 == cc.find("Canvas/Bg/Curtain/right/3").active && t.self.isTapped(cc.find("Canvas/Bg/Curtain/right"), n) && (cc.find("Canvas/Bg/Curtain/right/3").active = !0,
                    t.self.hint.getComponent(cc.Animation).stop("TapHint"),
                    t.self.resetHint(),
                    t.self.playaudio("curtainon", !1),
                    cc.tween(cc.find("Canvas/Bg/Curtain/right/3")).to(.5, {
                        scaleX: 1,
                        scaleY: 1
                    }).call(function() {
                        t.self.showHint(1)
                    }).start()),
                    1 == cc.find("Canvas/Bg/Curtain/left/3").active && 1 == cc.find("Canvas/Bg/Curtain/right/3").active && (t.self.ToolSequence = i.LAMP,
                    t.self.playaudio("lightentry", !1),
                    t.self.hint.getComponent(cc.Animation).stop("TapHint"),
                    t.self.resetHint(),
                    t.self.showHint(1),
                    cc.tween(cc.find("Canvas/Handle")).sequence(cc.tween(cc.find("Canvas/Handle")).to(.5, {
                        position: cc.v3(260, 390, 0)
                    }), cc.tween(cc.find("Canvas/Handle")).to(.5, {
                        position: cc.v3(260, 400, 0)
                    })).tag(55).repeatForever().start());
                    break;
                case i.LAMP:
                    t.self.isTapped(cc.find("Canvas/Handle"), n) && (t.self.playaudio("lightoff", !1),
                    t.self.resetHint(),
                    cc.Tween.stopAllByTag(55),
                    cc.tween(cc.find("Canvas/Handle")).to(.2, {
                        position: cc.v3(260, 255, 0)
                    }).delay(1).call(function() {
                        t.self.playaudio("starsanim", !1)
                    }).start(),
                    cc.find("Canvas/StarMoon").active = !0,
                    t.self.ToolSequence = i.DONE,
                    cc.tween(cc.find("Canvas/Done")).delay(5).call(function() {
                        cc.find("Canvas/Done").active = !0,
                        t.self.FinishParticle(),
                        t.self.playaudio("gn my sweet baby", !1)
                    }).start())
                }
            }
            ,
            n.prototype.TouchMove = function(e) {
                var n = e.getLocation();
                switch (t.self.node.convertToNodeSpaceAR(n),
                t.self.ToolSequence) {
                case i.BLANKET:
                    t.self.CanMove && (t.self.Tools[t.self.ToolSequence].setPosition(n.sub(cc.v2(400, 0))),
                    t.self.Tools[t.self.ToolSequence].getBoundingBoxToWorld().contains(t.self.getIntersectPos(cc.find("Canvas/Bg/Bed/BlanketFull"))) && (t.self.CanMove = !1,
                    t.self.Tools[t.self.ToolSequence].active = !1,
                    t.self.playaudio("blanket", !1),
                    cc.tween(cc.find("Canvas/Bg/Bed/BlanketFull")).to(1, {
                        scale: 1
                    }, {
                        easing: "backOut"
                    }).call(function() {
                        t.self.ToolSequence = i.MOSQUITO,
                        t.self.char.armature().animation.fadeIn("idle", 1, 1),
                        t.self.playaudio("musquitoambiance", !0),
                        cc.find("Canvas/Bg/mosquito").children.forEach(function(e) {
                            e.active = !0,
                            e.getComponent(cc.Animation).on("finished", function() {
                                e.getComponent(cc.Animation).off("finished"),
                                t.self.char.armature().animation.fadeIn("sad_mosquito", 1, -1),
                                e.getComponent(dragonBones.ArmatureDisplay).playAnimation("bite", 1),
                                e.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, function() {
                                    e.getComponent(dragonBones.ArmatureDisplay).playAnimation("bite_Idle", -1),
                                    e.getComponent(dragonBones.ArmatureDisplay).removeEventListener(dragonBones.EventObject.COMPLETE)
                                }, e)
                            }, e)
                        })
                    }).start()));
                    break;
                case i.SWING:
                    t.self.getDistance(e.getStartLocation(), n) > 100 && Math.abs(e.getStartLocation().y - e.getLocation().y) < 50 && 0 == t.self.isSwinging && (t.self.isSwinging = !0,
                    cc.tween(cc.find("Canvas/Bg/Bed")).to(.6, {
                        angle: 2
                    }).to(.6, {
                        angle: 0
                    }).to(.6, {
                        angle: -2
                    }).to(.6, {
                        angle: 0
                    }).to(.6, {
                        angle: 2
                    }).to(.6, {
                        angle: 0
                    }).to(.6, {
                        angle: -2
                    }).to(.6, {
                        angle: 0
                    }).call(function() {
                        t.self.swingingCounter++,
                        4 == t.self.swingingCounter ? (cc.find("Canvas/sheepgame").getComponent(cc.Animation).on("finished", function() {
                            t.self.ToolSequence = i.SHEEP,
                            cc.find("Canvas/sheepgame").getComponent(cc.Animation).off("finished"),
                            cc.find("Canvas/sheepgame/HintSheep").active = !0
                        }, cc.find("Canvas/sheepgame")),
                        cc.find("Canvas/sheepgame").active = !0,
                        t.self.playaudio("Entry", !1),
                        cc.tween(cc.find("Canvas/Bg/Bed/hitn")).to(.5, {
                            scale: 0
                        }, {
                            easing: "backIn"
                        }).start(),
                        cc.tween(cc.find("Canvas/Bg")).to(2, {
                            scale: 1,
                            position: cc.v3(0, -365, 0)
                        }).start(),
                        t.self.char.armature().animation.fadeIn("sleepyIdle", .3, -1)) : t.self.char.armature().animation.fadeIn("feelsleepy", .3, 1),
                        t.self.resetHint(),
                        t.self.isSwinging = !1
                    }).start());
                    break;
                case i.SHEEP:
                    1 == t.self.CanMove && (cc.find("Canvas/sheepgame/drawing1").getComponent(cc.Graphics).clear(!0),
                    cc.find("Canvas/sheepgame/drawing2").getComponent(cc.Graphics).clear(!0),
                    cc.find("Canvas/sheepgame/drawing2").getComponent(cc.Graphics).moveTo(t.self.sheepStartPos.x, t.self.sheepStartPos.y + 30),
                    cc.find("Canvas/sheepgame/drawing2").getComponent(cc.Graphics).lineTo(n.x - 400, n.y - 252),
                    cc.find("Canvas/sheepgame/drawing2").getComponent(cc.Graphics).stroke(),
                    cc.find("Canvas/sheepgame/drawing1").getComponent(cc.Graphics).moveTo(t.self.sheepStartPos.x, t.self.sheepStartPos.y + 30),
                    cc.find("Canvas/sheepgame/drawing1").getComponent(cc.Graphics).lineTo(n.x - 400, n.y - 252),
                    cc.find("Canvas/sheepgame/drawing1").getComponent(cc.Graphics).stroke())
                }
            }
            ,
            n.prototype.TouchEnded = function(e) {
                var n = e.getLocation();
                if (t.self.node.convertToNodeSpaceAR(n),
                t.self.CanMove)
                    switch (t.self.ToolSequence) {
                    case i.BLANKET:
                        t.self.showHint(1),
                        t.self.CanMove = !1,
                        cc.tween(cc.find("Canvas/Bg/BlanketThumb")).to(1, {
                            position: cc.v3(276, 70, 0)
                        }, {
                            easing: "backOut"
                        }).start();
                        break;
                    case i.SWING:
                        t.self.showHint(1);
                        break;
                    case i.SHEEP:
                        if (1 == t.self.CanMove) {
                            t.self.CanMove = !1,
                            cc.find("Canvas/sheepgame/drawing1").getComponent(cc.Graphics).clear(!0),
                            cc.find("Canvas/sheepgame/drawing2").getComponent(cc.Graphics).clear(!0);
                            for (var c = function(e) {
                                var c = cc.find("Canvas/sheepgame/sheeps").children[e];
                                cc.rect(c.getBoundingBoxToWorld().x + 50, c.getBoundingBoxToWorld().y, 100, 80).contains(n) && t.self.correctSheepData[t.self.selectedSheep] == e && (t.self.playaudio("sheep", !1),
                                cc.find("Canvas/sheepgame/HintSheep").active = !1,
                                cc.tween(cc.find("Canvas/sheepgame/sheeps").children[t.self.selectedSheep]).to(.2, {
                                    scaleX: 0,
                                    scaleY: 0
                                }).call(function() {
                                    cc.find("Canvas/sheepgame/sheeps").children[t.self.selectedSheep].active = !1
                                }).start(),
                                cc.tween(c).to(.2, {
                                    scaleX: 0,
                                    scaleY: 0
                                }).call(function() {
                                    c.active = !1
                                }).start(),
                                cc.tween(t.self).delay(.3).call(function() {
                                    var e = 0;
                                    cc.find("Canvas/sheepgame/sheeps").children.forEach(function(n) {
                                        0 == n.active && e++
                                    }),
                                    console.log("sheepcount" + e),
                                    8 == e && (cc.tween(cc.find("Canvas/Bg")).to(2, {
                                        scale: 1.1,
                                        position: cc.v3(0, -252, 0)
                                    }).start(),
                                    cc.tween(cc.find("Canvas/sheepgame")).to(.5, {
                                        scaleX: 0,
                                        scaleY: 0
                                    }).call(function() {
                                        t.self.char.armature().animation.fadeIn("asleepidle", 1, -1)
                                    }).delay(2).call(function() {
                                        cc.find("Canvas/Bg/Bed/BlanketFull").getComponent(cc.Sprite).spriteFrame = cc.find("Canvas/Bg/Bed/BlanketFull").getChildByName("Blanket1").getComponent(cc.Sprite).spriteFrame,
                                        cc.find("Canvas/Bg/Bed/BlanketFull"),
                                        t.self.char.armature().animation.fadeIn("asleepHand1", .2, -1),
                                        t.self.ToolSequence = i.TAPBLANKET1,
                                        t.self.playaudio("blanketoff", !1),
                                        t.self.showHint(1)
                                    }).start())
                                }).start())
                            }, o = 0; o < cc.find("Canvas/sheepgame/sheeps").childrenCount; o++)
                                c(o)
                        }
                    }
            }
            ,
            n.prototype.getDistance = function(e, n) {
                return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
            }
            ,
            n.prototype.getIntersectPos = function(e) {
                return cc.v2(e.getBoundingBoxToWorld().x, e.getBoundingBoxToWorld().y)
            }
            ,
            n.prototype.isTapped = function(e, n) {
                return !!e.getBoundingBoxToWorld().contains(n)
            }
            ,
            n.prototype.doneAction = function() {
                this.playaudio("Click", !1),
                cc.sys.localStorage.setItem("SelectedView", "6"),
                cc.sys.localStorage.setItem("isViewDone5", 1),
                s.default.self.requestAds(),
                this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
                    cc.director.loadScene("LevelScene")
                })))
            }
            ,
            n.prototype.resetHint = function() {
                cc.Tween.stopAllByTarget(this.hint),
                this.hint.active = !0,
                this.hint.opacity = 255,
                this.hint.position = cc.v3(1e3, 1e3, 0)
            }
            ,
            n.prototype.showHint = function(e) {
                switch (this.ToolSequence) {
                case i.BLANKET:
                    this.resetHint();
                    var n = cc.tween(this.hint).hide().set({
                        position: cc.v3(340, -190, 0)
                    }).set({
                        opacity: 0
                    }).show().delay(.2).to(.5, {
                        opacity: 255
                    })
                      , t = cc.tween(this.hint).to(1, {
                        position: cc.v3(60, -214, 0)
                    }, {
                        easing: "backOut"
                    });
                    cc.tween(this.hint).delay(e).sequence(n, t).repeatForever().start();
                    break;
                case i.MOSQUITO:
                    break;
                case i.SWING:
                    this.resetHint();
                    var c = cc.tween(this.hint).set({
                        position: cc.v3(164, 33, 0)
                    }).to(1, {
                        position: cc.v3(-102, 33, 0)
                    })
                      , o = cc.tween(this.hint).to(1, {
                        position: cc.v3(164, 33, 0)
                    });
                    cc.tween(this.hint).delay(e).sequence(c, o).repeatForever().start();
                    break;
                case i.SHEEP:
                    break;
                case i.TAPBLANKET1:
                case i.TAPBLANKET2:
                case i.TAPBLANKET3:
                case i.TAPBLANKET4:
                    this.hint.position = cc.v3(60, -214, 0),
                    this.hint.getComponent(cc.Animation).play("TapHint");
                    break;
                case i.CURTAIN:
                    1 == cc.find("Canvas/Bg/Curtain/right/3").active ? (this.hint.position = cc.v3(-280, -130, 0),
                    this.hint.getComponent(cc.Animation).play("TapHint")) : (this.hint.position = cc.v3(280, -130, 0),
                    this.hint.getComponent(cc.Animation).play("TapHint"));
                    break;
                case i.LAMP:
                    this.hint.position = cc.v3(310, 157, 0),
                    this.hint.getComponent(cc.Animation).play("TapHint")
                }
            }
            ,
            n.prototype.FinishParticle = function() {
                var e = cc.instantiate(cc.find("Canvas/ParticleEnd"));
                this.node.addChild(e),
                e.active = !0,
                e.zIndex = 50,
                this.playaudio("EndingParticle", !1)
            }
            ,
            n.self = null,
            a([f([cc.Node])], n.prototype, "Tools", void 0),
            a([f(cc.Node)], n.prototype, "hint", void 0),
            t = a([r], n)
        }(cc.Component);
        t.default = d,
        cc._RF.pop()
    }
    , {
        "./Promotion": "Promotion"
    }],
    Splash: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "c6bf7WCiyhLBp1EjaRYWXtR", "Splash");
        var c, o = this && this.__extends || (c = function(e, n) {
            return (c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, n) {
                e.__proto__ = n
            }
            || function(e, n) {
                for (var t in n)
                    n.hasOwnProperty(t) && (e[t] = n[t])
            }
            )(e, n)
        }
        ,
        function(e, n) {
            function t() {
                this.constructor = e
            }
            c(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }
        ), a = this && this.__decorate || function(e, n, t, c) {
            var o, a = arguments.length, i = a < 3 ? n : null === c ? c = Object.getOwnPropertyDescriptor(n, t) : c;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, n, t, c);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(n, t, i) : o(n, t)) || i);
            return a > 3 && i && Object.defineProperty(n, t, i),
            i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = cc._decorator
          , s = i.ccclass
          , l = (i.property,
        function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.bgsoundElement = null,
                n
            }
            var t;
            return o(n, e),
            t = n,
            n.prototype.onLoad = function() {
                cc.debug.setDisplayStats(!1),
                cc.director.preloadScene("MainScene"),
                t.self = this,
                this.bgsoundElement = document.createElement("AUDIO"),
                this.bgsoundElement.id = "bgsound",
                this.bgsoundElement.loop = !0,
                this.bgsoundElement.setAttribute("src", cc.find("Canvas/music").getComponent(cc.AudioSource).clip.url)
            }
            ,
            n.prototype.start = function() {}
            ,
            n.prototype.PlayAction = function(e) {
                document.body.appendChild(this.bgsoundElement);
                var n = e.target;
                n && (n.getComponent(cc.Button).interactable = !1),
                this.PlaySound("SingleClick"),
                document.getElementById("bgsound") && document.getElementById("bgsound").play(),
                cc.director.loadScene("MainScene")
            }
            ,
            n.prototype.OpenUrl = function() {
                cc.sys.openURL("https://www.yiv.com/?utm_source=unknown&utm_medium=Loading-logo&utm_campaign=game-" + document.title.replace(/ /g, "-"))
            }
            ,
            n.prototype.PlaySound = function(e) {
                cc.find("Canvas/SoundNode/" + e) && cc.find("Canvas/SoundNode/" + e).getComponent(cc.AudioSource).play()
            }
            ,
            n.self = null,
            t = a([s], n)
        }(cc.Component));
        t.default = l,
        cc._RF.pop()
    }
    , {}]
}, {}, ["BabySelection", "Bathroom", "Character", "DresUp", "FeedTheBaby", "FeedTheBaby2", "LevelScene", "MainScene", "Picnic", "Picnic2", "Picnic3", "Picnic4", "PlayRoom", "PlayRoom2", "PlayRoom3", "PlayRoom4", "Promotion", "Sleeping", "Splash"]);
