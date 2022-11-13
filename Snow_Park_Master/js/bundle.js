!function() {
    "use strict";
    var e, t, i, n = Laya.ClassUtils.regClass;
    !function(e) {
        !function(t) {
            class i extends Laya.EffectAnimation {
                constructor() {
                    super(), this.effectData = e.effect.BtnScaleDownUI.uiView;
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    name: "BtnScaleDown"
                },
                compId: 1,
                child: [ {
                    type: "Image",
                    props: {
                        x: 0
                    },
                    compId: 2
                } ],
                animations: [ {
                    nodes: [ {
                        target: 2,
                        keyframes: {
                            x: [ {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            } ],
                            scaleY: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 1
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 5
                            } ],
                            scaleX: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 1
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 5
                            } ]
                        }
                    } ],
                    name: "PressDown",
                    id: 1,
                    frameRate: 24,
                    action: 0
                } ],
                loadList: [],
                loadList3D: []
            }, t.BtnScaleDownUI = i, n("ui.effect.BtnScaleDownUI", i);
            class s extends Laya.EffectAnimation {
                constructor() {
                    super(), this.effectData = e.effect.BtnScaleUpUI.uiView;
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    name: "BtnScaleUp"
                },
                compId: 1,
                child: [ {
                    type: "Image",
                    props: {},
                    compId: 2
                } ],
                animations: [ {
                    nodes: [ {
                        target: 2,
                        keyframes: {
                            x: [ {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            } ],
                            scaleY: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 1
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleY",
                                index: 5
                            } ],
                            scaleX: [ {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .92,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 1
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "scaleX",
                                index: 5
                            } ]
                        }
                    } ],
                    name: "PressUp",
                    id: 1,
                    frameRate: 24,
                    action: 0
                } ],
                loadList: [],
                loadList3D: []
            }, t.BtnScaleUpUI = s, n("ui.effect.BtnScaleUpUI", s);
        }(e.effect || (e.effect = {}));
    }(e || (e = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 104,
                    runtime: "view/item/DrawerItemView.ts",
                    mouseEnabled: !0,
                    height: 142
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        y: 0,
                        width: 104,
                        height: 104,
                        bgColor: "#67A6F2"
                    },
                    compId: 3,
                    child: [ {
                        type: "Image",
                        props: {
                            y: -8,
                            x: -8,
                            width: 120,
                            skin: "recommendrp/bg.png",
                            sizeGrid: "11,11,15,12",
                            height: 120,
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 7
                    }, {
                        type: "Image",
                        props: {
                            y: 5,
                            width: 94,
                            var: "drawerItemImageView",
                            height: 94,
                            centerX: 0
                        },
                        compId: 4
                    } ]
                }, {
                    type: "Label",
                    props: {
                        width: 104,
                        var: "drawerItemLabel",
                        valign: "middle",
                        text: "雪地车道",
                        height: 23,
                        fontSize: 20,
                        color: "#333333",
                        centerX: 0,
                        bottom: 5,
                        align: "center"
                    },
                    compId: 6
                } ],
                loadList: [ "recommendrp/bg.png" ],
                loadList3D: []
            }, e.DrawerItemViewUI = t, n("ui.item.DrawerItemViewUI", t);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView);
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    width: 160,
                    runtime: "view/item/DrawerItemView2.ts",
                    mouseEnabled: !0,
                    height: 200
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        width: 160,
                        height: 160
                    },
                    compId: 7,
                    child: [ {
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "recommendrp/bg.png",
                            sizeGrid: "11,11,15,12",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 8
                    }, {
                        type: "Image",
                        props: {
                            var: "drawerItemImageView",
                            top: 12,
                            right: 12,
                            left: 12,
                            bottom: 12
                        },
                        compId: 4
                    } ]
                }, {
                    type: "Label",
                    props: {
                        width: 170,
                        var: "drawerItemLabel",
                        valign: "middle",
                        text: "雪地车道",
                        right: 0,
                        left: 0,
                        height: 33,
                        fontSize: 25,
                        color: "#ffffff",
                        bottom: 3,
                        align: "center"
                    },
                    compId: 6
                } ],
                loadList: [ "recommendrp/bg.png" ],
                loadList3D: []
            }, e.DrawerItemView1UI = i, n("ui.item.DrawerItemView1UI", i);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView);
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    y: 103,
                    x: 79,
                    width: 158,
                    runtime: "view/item/FloatRecommendView.ts",
                    height: 206,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "recommendrp/round_rect2.png",
                        sizeGrid: "50,56,76,51",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5,
                    child: [ {
                        type: "Image",
                        props: {
                            width: 146,
                            var: "imageView",
                            top: 6,
                            left: 6,
                            height: 146
                        },
                        compId: 6
                    }, {
                        type: "Label",
                        props: {
                            width: 165,
                            var: "titleLabel",
                            valign: "middle",
                            text: "雪地车道",
                            height: 33,
                            fontSize: 27,
                            color: "#333333",
                            centerX: 0,
                            bottom: 10,
                            align: "center"
                        },
                        compId: 7
                    } ]
                } ],
                animations: [ {
                    nodes: [ {
                        target: 5,
                        keyframes: {
                            rotation: [ {
                                value: 30,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 5
                            }, {
                                value: -20,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 10
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 15
                            }, {
                                value: 10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 18
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 21
                            }, {
                                value: -10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 24
                            }, {
                                value: 0,
                                tweenMethod: "quadOut",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 27
                            } ]
                        }
                    } ],
                    name: "ani1",
                    id: 1,
                    frameRate: 60,
                    action: 0
                } ],
                loadList: [ "recommendrp/round_rect2.png" ],
                loadList3D: []
            }, e.FloatRecommendViewUI = s, n("ui.item.FloatRecommendViewUI", s);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    y: 103,
                    x: 79,
                    width: 158,
                    runtime: "view/item/FloatRecommendView1.ts",
                    height: 206,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "recommendrp/round_rect2.png",
                        sizeGrid: "50,56,76,51",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5,
                    child: [ {
                        type: "Image",
                        props: {
                            width: 146,
                            var: "imageView",
                            top: 6,
                            left: 6,
                            height: 146
                        },
                        compId: 6
                    }, {
                        type: "Label",
                        props: {
                            width: 165,
                            var: "titleLabel",
                            valign: "middle",
                            text: "雪地车道",
                            height: 33,
                            fontSize: 27,
                            color: "#333333",
                            centerX: 0,
                            bottom: 10,
                            align: "center"
                        },
                        compId: 7
                    } ]
                } ],
                animations: [ {
                    nodes: [ {
                        target: 5,
                        keyframes: {
                            rotation: [ {
                                value: 30,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 5
                            }, {
                                value: -20,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 10
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 15
                            }, {
                                value: 10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 18
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 21
                            }, {
                                value: -10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 24
                            }, {
                                value: 0,
                                tweenMethod: "quadOut",
                                tween: !0,
                                target: 5,
                                key: "rotation",
                                index: 27
                            } ]
                        }
                    } ],
                    name: "ani1",
                    id: 1,
                    frameRate: 60,
                    action: 0
                } ],
                loadList: [ "recommendrp/round_rect2.png" ],
                loadList3D: []
            }, e.FloatRecommendView1UI = a, n("ui.item.FloatRecommendView1UI", a);
            class o extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(o.uiView);
                }
            }
            o.uiView = {
                type: "View",
                props: {
                    y: 0,
                    x: 0,
                    width: 400,
                    runtime: "view/item/QuickNativeBannerAd.ts",
                    height: 200
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        width: 400,
                        var: "bg",
                        name: "bg",
                        height: 200,
                        bgColor: "#181d26"
                    },
                    compId: 3,
                    child: [ {
                        type: "Box",
                        props: {
                            width: 400,
                            visible: !1,
                            var: "bannerBox",
                            top: 0,
                            left: 0,
                            height: 200
                        },
                        compId: 5,
                        child: [ {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 400,
                                top: 0,
                                skin: "loading/rect_bg.png",
                                sizeGrid: "12,12,12,12",
                                renderType: "mask",
                                name: "mask",
                                left: 0,
                                height: 200
                            },
                            compId: 4
                        }, {
                            type: "Box",
                            props: {
                                width: 400,
                                height: 200
                            },
                            compId: 6,
                            child: [ {
                                type: "Image",
                                props: {
                                    var: "bannerImage",
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    width: 65,
                                    var: "bannerAd",
                                    right: 0,
                                    height: 27,
                                    bottom: 0
                                },
                                compId: 11
                            } ]
                        }, {
                            type: "Label",
                            props: {
                                x: 5,
                                visible: !1,
                                var: "bannerLabel",
                                valign: "middle",
                                right: 0,
                                left: 0,
                                height: 30,
                                fontSize: 18,
                                color: "#ffffff",
                                bottom: 2,
                                align: "center"
                            },
                            compId: 8
                        } ]
                    }, {
                        type: "Box",
                        props: {
                            y: 0,
                            width: 400,
                            visible: !1,
                            var: "iconBox",
                            top: 0,
                            left: 0,
                            height: 200
                        },
                        compId: 12,
                        child: [ {
                            type: "Box",
                            props: {
                                width: 160,
                                left: 21,
                                height: 160,
                                centerY: 0
                            },
                            compId: 13,
                            child: [ {
                                type: "Image",
                                props: {
                                    var: "iconImage",
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0
                                },
                                compId: 14
                            } ]
                        }, {
                            type: "Label",
                            props: {
                                y: 35,
                                x: 204,
                                width: 183,
                                var: "iconLabel",
                                valign: "middle",
                                text: "扳手会",
                                overflow: "hidden",
                                height: 30,
                                fontSize: 28,
                                color: "#ffffff",
                                align: "left"
                            },
                            compId: 16
                        }, {
                            type: "Label",
                            props: {
                                y: 165,
                                x: 204,
                                width: 180,
                                var: "iconLabel3",
                                valign: "middle",
                                text: "立即下载",
                                overflow: "hidden",
                                height: 30,
                                fontSize: 22,
                                color: "#ffffff",
                                align: "right"
                            },
                            compId: 20
                        }, {
                            type: "Label",
                            props: {
                                y: 75,
                                x: 207,
                                wordWrap: !0,
                                width: 180,
                                var: "iconLabel2",
                                valign: "middle",
                                text: "家电维修工每日实时更新派送",
                                overflow: "hidden",
                                leading: 10,
                                height: 80,
                                fontSize: 18,
                                color: "#ffffff",
                                align: "left"
                            },
                            compId: 18
                        }, {
                            type: "Image",
                            props: {
                                width: 65,
                                var: "iconAd",
                                top: 0,
                                right: 0,
                                height: 27
                            },
                            compId: 15
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 400,
                                top: 0,
                                skin: "loading/rect_bg.png",
                                sizeGrid: "12,12,12,12",
                                renderType: "mask",
                                name: "mask",
                                left: 0,
                                height: 200
                            },
                            compId: 17
                        } ]
                    }, {
                        type: "Button",
                        props: {
                            y: 25,
                            x: 25,
                            width: 30,
                            var: "closeBtn",
                            stateNum: 1,
                            skin: "comrp/close2.png",
                            name: "closeBtn",
                            height: 30,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 22
                    } ]
                } ],
                loadList: [ "loading/rect_bg.png", "comrp/close2.png" ],
                loadList3D: []
            }, e.QuickNativeBannerAdUI = o, n("ui.item.QuickNativeBannerAdUI", o);
            class r extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(r.uiView);
                }
            }
            r.uiView = {
                type: "View",
                props: {
                    y: 0,
                    x: 0,
                    width: 104,
                    runtime: "view/item/RecommendItemView.ts",
                    height: 104
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#FFFFFF"
                    },
                    compId: 3,
                    child: [ {
                        type: "Image",
                        props: {
                            var: "recommendIcon",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 4
                    } ]
                } ],
                loadList: [],
                loadList3D: []
            }, e.RecommendItemViewUI = r, n("ui.item.RecommendItemViewUI", r);
            class h extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(h.uiView);
                }
            }
            h.uiView = {
                type: "View",
                props: {
                    width: 660,
                    runtime: "view/item/SettlementRecommendView.ts",
                    height: 220
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        var: "bgImage",
                        top: 0,
                        skin: "comrp/settle_bg.png",
                        sizeGrid: "46,46,48,55",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 6
                }, {
                    type: "List",
                    props: {
                        y: 0,
                        x: 0,
                        width: 660,
                        var: "recommendList",
                        spaceY: 30,
                        spaceX: 0,
                        repeatY: 1,
                        repeatX: 4,
                        height: 220
                    },
                    compId: 3,
                    child: [ {
                        type: "DrawerItemView1",
                        props: {
                            y: 10,
                            x: 10,
                            width: 160,
                            runtime: "view/item/DrawerItemView2.ts",
                            renderType: "render",
                            height: 200
                        },
                        compId: 5
                    } ]
                } ],
                loadList: [ "comrp/settle_bg.png", "Item/DrawerItemView1.scene" ],
                loadList3D: []
            }, e.SettlementRecommendViewUI = h, n("ui.item.SettlementRecommendViewUI", h);
        }(e.item || (e.item = {}));
    }(e || (e = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("loadview/LoadingView");
                }
            }
            e.LoadingViewUI = t, n("ui.loadview.LoadingViewUI", t);
        }(e.loadview || (e.loadview = {}));
    }(e || (e = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tui/FyhdTuiView2");
                }
            }
            e.FyhdTuiView2UI = t, n("ui.tui.FyhdTuiView2UI", t);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tui/FyhdTuiView3");
                }
            }
            e.FyhdTuiView3UI = i, n("ui.tui.FyhdTuiView3UI", i);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView);
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        bgColor: "#F1F1F1"
                    },
                    compId: 3,
                    child: [ {
                        type: "Box",
                        props: {
                            width: 750,
                            top: 10,
                            runtime: "UIAdapter.ts",
                            left: 0,
                            bottom: 0
                        },
                        compId: 4,
                        child: [ {
                            type: "Box",
                            props: {
                                y: 0,
                                width: 750,
                                left: 0,
                                height: 88
                            },
                            compId: 5,
                            child: [ {
                                type: "Label",
                                props: {
                                    text: "小程序",
                                    fontSize: 45,
                                    color: "#000000",
                                    centerY: 0,
                                    centerX: 0,
                                    bold: !0
                                },
                                compId: 7
                            }, {
                                type: "Box",
                                props: {
                                    width: 100,
                                    var: "closeBtn",
                                    top: 0,
                                    bottom: 0
                                },
                                compId: 19,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        y: 17,
                                        x: 39,
                                        skin: "tuirp/img_matrix_back.png"
                                    },
                                    compId: 6
                                } ]
                            } ]
                        }, {
                            type: "List",
                            props: {
                                x: 0,
                                width: 750,
                                var: "listView",
                                top: 160,
                                bottom: 0
                            },
                            compId: 10,
                            child: [ {
                                type: "Box",
                                props: {
                                    width: 750,
                                    renderType: "render",
                                    height: 150,
                                    bgColor: "#FFFFFF"
                                },
                                compId: 11,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        skin: "tuirp/img_matrix_line.png",
                                        sizeGrid: "0,6,0,5",
                                        right: 5,
                                        left: 5,
                                        height: 2,
                                        bottom: 0
                                    },
                                    compId: 13
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 17,
                                        x: 31,
                                        width: 116,
                                        name: "appIcon",
                                        height: 116
                                    },
                                    compId: 14,
                                    child: [ {
                                        type: "Box",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            renderType: "mask"
                                        },
                                        compId: 15,
                                        child: [ {
                                            type: "Circle",
                                            props: {
                                                y: 58,
                                                x: 58,
                                                radius: 58,
                                                lineWidth: 1,
                                                fillColor: "#ff0000"
                                            },
                                            compId: 16
                                        } ]
                                    } ]
                                }, {
                                    type: "Label",
                                    props: {
                                        x: 191,
                                        width: 351,
                                        name: "appLabel",
                                        height: 57,
                                        fontSize: 35,
                                        centerY: 0
                                    },
                                    compId: 17
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 56,
                                        x: 646,
                                        skin: "tuirp/img_matrix_fav.png",
                                        name: "favImage"
                                    },
                                    compId: 18
                                } ]
                            } ]
                        }, {
                            type: "Box",
                            props: {
                                width: 750,
                                top: 88,
                                left: 0,
                                height: 75,
                                bgColor: "#FFFFFF"
                            },
                            compId: 8,
                            child: [ {
                                type: "Label",
                                props: {
                                    y: 19,
                                    x: 30,
                                    text: "最近使用",
                                    fontSize: 26,
                                    color: "#A3A3A3"
                                },
                                compId: 9
                            } ]
                        } ]
                    } ]
                } ],
                loadList: [ "tuirp/img_matrix_back.png", "tuirp/img_matrix_line.png", "tuirp/img_matrix_fav.png" ],
                loadList3D: []
            }, e.MatrixTuiViewUI = s, n("ui.tui.MatrixTuiViewUI", s);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    width: 166,
                    runtime: "view/tui/TuiExitBtn.ts",
                    height: 63
                },
                compId: 2,
                child: [ {
                    type: "Button",
                    props: {
                        var: "exitBtn",
                        stateNum: 1,
                        skin: "tuirp/ic_out.png"
                    },
                    compId: 3
                } ],
                loadList: [ "tuirp/ic_out.png" ],
                loadList3D: []
            }, e.TuiExitBtnUI = a, n("ui.tui.TuiExitBtnUI", a);
        }(e.tui || (e.tui = {}));
    }(e || (e = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/EggView");
                }
            }
            e.EggViewUI = t, n("ui.view.EggViewUI", t);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/GamePanelrp");
                }
            }
            e.GamePanelrpUI = i, n("ui.view.GamePanelrpUI", i);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/GoldPanelrp");
                }
            }
            e.GoldPanelrpUI = s, n("ui.view.GoldPanelrpUI", s);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/ReviewPanelrp");
                }
            }
            e.ReviewPanelrpUI = a, n("ui.view.ReviewPanelrpUI", a);
            class o extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/SettingPanelrp");
                }
            }
            e.SettingPanelrpUI = o, n("ui.view.SettingPanelrpUI", o);
            class r extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/SettlePanelrp");
                }
            }
            e.SettlePanelrpUI = r, n("ui.view.SettlePanelrpUI", r);
            class h extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(h.uiView);
                }
            }
            h.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        top: 0,
                        right: 0,
                        name: "bg",
                        left: 0,
                        bottom: 0,
                        bgColor: "#000000",
                        alpha: .5
                    },
                    compId: 25
                }, {
                    type: "Box",
                    props: {
                        width: 620,
                        var: "bgBox",
                        height: 400,
                        centerY: 0,
                        centerX: 0,
                        bgColor: "#f7f6fb"
                    },
                    compId: 3,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 620,
                            top: 0,
                            skin: "loading/rect_bg.png",
                            sizeGrid: "12,12,12,12",
                            renderType: "mask",
                            name: "mask",
                            left: 0,
                            height: 400
                        },
                        compId: 23
                    }, {
                        type: "Button",
                        props: {
                            var: "defaultBtn",
                            stateNum: 2,
                            skin: "loading/modal_btn.png",
                            right: 0,
                            left: 0,
                            labelSize: 40,
                            labelColors: "#000000",
                            labelBold: !0,
                            label: "知道了",
                            height: 110,
                            bottom: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 5
                    }, {
                        type: "Button",
                        props: {
                            y: 345,
                            x: 155,
                            width: 310,
                            var: "cancelBtn",
                            stateNum: 2,
                            skin: "loading/modal_btn.png",
                            left: 0,
                            labelSize: 40,
                            labelColors: "#000000",
                            labelBold: !0,
                            label: "取消",
                            height: 110,
                            bottom: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 8
                    }, {
                        type: "Button",
                        props: {
                            width: 310,
                            var: "okBtn",
                            stateNum: 2,
                            skin: "loading/modal_btn.png",
                            right: 0,
                            labelSize: 40,
                            labelColors: "#64c84d",
                            labelBold: !0,
                            label: "确定",
                            height: 110,
                            bottom: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 11
                    }, {
                        type: "Label",
                        props: {
                            y: 20,
                            wordWrap: !0,
                            width: 500,
                            var: "titleLab",
                            valign: "middle",
                            text: "提示",
                            leading: 2,
                            height: 102,
                            fontSize: 40,
                            color: "#000000",
                            centerX: 0,
                            bold: !0,
                            align: "center"
                        },
                        compId: 14
                    }, {
                        type: "Label",
                        props: {
                            y: 110,
                            wordWrap: !0,
                            var: "contentLab",
                            valign: "middle",
                            text: "content",
                            right: 60,
                            left: 60,
                            leading: 10,
                            height: 180,
                            fontSize: 36,
                            color: "#666666",
                            bold: !1,
                            align: "center"
                        },
                        compId: 15
                    }, {
                        type: "Box",
                        props: {
                            right: 0,
                            name: "line",
                            left: 0,
                            height: 1,
                            bottom: 111,
                            bgColor: "#000000"
                        },
                        compId: 19
                    } ]
                } ],
                loadList: [ "loading/rect_bg.png", "loading/modal_btn.png" ],
                loadList3D: []
            }, e.ShowModalViewUI = h, n("ui.view.ShowModalViewUI", h);
            class l extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/SignPanelrp");
                }
            }
            e.SignPanelrpUI = l, n("ui.view.SignPanelrpUI", l);
            class d extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(d.uiView);
                }
            }
            d.uiView = {
                type: "View",
                props: {
                    width: 200,
                    runtime: "view/SkinItem.ts",
                    height: 200
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        width: 174,
                        skin: "comrp/skin_box.png",
                        height: 174,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        width: 180,
                        var: "ball",
                        skin: "car/1.png",
                        scaleY: 1,
                        scaleX: 1,
                        name: "ball",
                        height: 180,
                        centerY: 0,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 10
                }, {
                    type: "Image",
                    props: {
                        y: 69,
                        x: 75,
                        width: 200,
                        var: "lock",
                        name: "lock",
                        height: 200,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 12,
                    child: [ {
                        type: "Image",
                        props: {
                            width: 174,
                            visible: !0,
                            skin: "comrp/lock.png",
                            name: "lock",
                            height: 174,
                            centerY: 0,
                            centerX: 0
                        },
                        compId: 13
                    } ]
                }, {
                    type: "Image",
                    props: {
                        width: 174,
                        var: "selected",
                        skin: "comrp/select.png",
                        sizeGrid: "20,20,20,20",
                        height: 174,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 6
                }, {
                    type: "Label",
                    props: {
                        y: 149,
                        wordWrap: !0,
                        width: 160,
                        var: "title",
                        valign: "middle",
                        stroke: 2,
                        padding: "5",
                        name: "title",
                        leading: 5,
                        height: 40,
                        fontSize: 28,
                        color: "#f3df4d",
                        centerX: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 15
                } ],
                loadList: [ "comrp/skin_box.png", "car/1.png", "comrp/lock.png", "comrp/select.png" ],
                loadList3D: []
            }, e.SkinItemUI = d, n("ui.view.SkinItemUI", d);
            class c extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/SkinLockPanelrp");
                }
            }
            e.SkinLockPanelrpUI = c, n("ui.view.SkinLockPanelrpUI", c);
            class u extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(u.uiView);
                }
            }
            u.uiView = {
                type: "View",
                props: {
                    width: 750,
                    runtime: "view/SkinPage.ts",
                    height: 600
                },
                compId: 2,
                child: [ {
                    type: "SkinItem",
                    props: {
                        y: 0,
                        x: 75,
                        var: "item1",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 10
                }, {
                    type: "SkinItem",
                    props: {
                        y: 0,
                        x: 275,
                        var: "item2",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 13
                }, {
                    type: "SkinItem",
                    props: {
                        y: 0,
                        x: 475,
                        var: "item3",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 17
                }, {
                    type: "SkinItem",
                    props: {
                        y: 200,
                        x: 75,
                        var: "item4",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 18
                }, {
                    type: "SkinItem",
                    props: {
                        y: 200,
                        x: 275,
                        var: "item5",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 19
                }, {
                    type: "SkinItem",
                    props: {
                        y: 200,
                        x: 475,
                        var: "item6",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 20
                }, {
                    type: "SkinItem",
                    props: {
                        y: 400,
                        x: 75,
                        visible: !0,
                        var: "item7",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 21
                }, {
                    type: "SkinItem",
                    props: {
                        y: 400,
                        x: 275,
                        visible: !0,
                        var: "item8",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 22
                }, {
                    type: "SkinItem",
                    props: {
                        y: 400,
                        x: 475,
                        visible: !0,
                        var: "item9",
                        runtime: "view/SkinItem.ts"
                    },
                    compId: 23
                } ],
                loadList: [],
                loadList3D: []
            }, e.SkinPageUI = u, n("ui.view.SkinPageUI", u);
            class p extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/SkinPanelrp");
                }
            }
            e.SkinPanelrpUI = p, n("ui.view.SkinPanelrpUI", p);
            class g extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/StartPanelrp");
                }
            }
            e.StartPanelrpUI = g, n("ui.view.StartPanelrpUI", g);
            class m extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("view/TrainPanelrp");
                }
            }
            e.TrainPanelrpUI = m, n("ui.view.TrainPanelrpUI", m);
        }(e.view || (e.view = {}));
    }(e || (e = {})), function(e) {
        e[e.Wechat = 1] = "Wechat", e[e.Oppo = 2] = "Oppo", e[e.QQ = 7] = "QQ", e[e.TouTiao = 9] = "TouTiao";
    }(t || (t = {})), function(e) {
        e[e.Normal = 1] = "Normal";
    }(i || (i = {}));
    var s, a = {
        isF: !1,
        closeLD: !0,
        bTimer: 120,
        bCount: 3,
        vsFailShareCount: 30,
        vsAllCount: 30,
        ttvsFailShareCount: 35,
        ttvsAllCount: 35,
        ttvAdCount: 29,
        videoFailMax: 20,
        sRecommend: 1,
        shareVideoGold: 50,
        maxLevel: 100,
        energy: {
            dCount: 5,
            vCount: 5,
            time: 60,
            tCount: 1,
            offCount: 5
        },
        tuiInfo: [],
        ttTuiInfo: [],
        oppoTuiInfo: [],
        opRecommend: 1,
        tRecommend: 1,
        tIosRecommend: !1,
        acv: "",
        ttacv: "",
        qqacv: "",
        oppoADInfo: {
            bannerCount: 3,
            bannerTime: 90,
            eInfo: {
                onLine: 180,
                dayGame: 3
            },
            showListJump: !0
        },
        eInfo: {
            onLine: 180,
            dayGame: 5
        },
        mpcv: "110,111",
        eggInfo: {
            aCount: 10,
            level: 999,
            gold: 500,
            delay: 300,
            eDelay: 1500
        },
        qqeggInfo: {
            aCount: 10,
            level: 999,
            gold: 500,
            delay: 300,
            eDelay: 1500
        }
    };
    !function(e) {
        e[e.Normal = 1] = "Normal", e[e.Check = 2] = "Check", e[e.Fission = 3] = "Fission";
    }(s || (s = {}));
    var o, r, h = [ {
        imgUrl: "",
        shareContent: "雪地挪车我最溜，不服来挑战！"
    } ], l = "com.lexun.roadpark", d = {
        IgnoreShare: !1,
        Platform: t.Wechat,
        PackageName: l,
        ClientVer: "1.0.8",
        tResVer: 1,
        useZip: !1,
        ClientName: "雪地车道",
        Apiversion: "1",
        SupportOpenDomain: !0,
        State: s.Normal,
        showRecommend: !1,
        ShareTickTimer: 3e3,
        host: "",
        Dev: !1,
        ShareInfoList: h,
        isLimitCity: !1,
        isLimitCityB: !1,
        appId: "wxbf37203f0d09ace1",
        isF: !1,
        vList: [],
        vsInfo: {
            type: 1,
            snum: 0,
            vnum: 8
        },
        vAdCount: 15,
        vGameInfo: Object.assign({}, a),
        recoverData: !0,
        isAnonymous: !1
    }, c = (t.TouTiao, s.Normal, Object.assign({}, a), t.QQ, s.Normal, Object.assign({}, a), 
    t.Oppo, s.Normal, Object.assign({}, a), d);
    !function(e) {
        e.UpdateGoldEvent = "UpdateGoldEvent", e.UpdateZuanEvent = "UpdateGoldEvent", e.JumpMiniAppCancel = "JumpMiniAppCancel", 
        e.JumpMiniAppSuccess = "JumpMiniAppSuccess", e.SkinChange = "SkinChange", e.ClickSkinItem = "ClickSkinItem", 
        e.ShowShareVideoCompleted = "ShowShareVideoCompleted", e.CloseShowShareViedo = "CloseShowShareViedo", 
        e.ShareFail = "ShareFail", e.userLoginFinish = "userLoginFinish", e.SubpackageLoadProgress = "SubpackageLoadProgress", 
        e.ShowBannerCompleted = "ShowBannerCompleted", e.RefreshRegionRank = "RefreshRegionRank", 
        e.HidenOverFriendRank = "HidenOverFriendRank", e.BannerPosChange = "BannerPosChange", 
        e.dataOverDayInfo = "dataOverDayInfo", e.RecommendDataUpdate = "RecommendDataUpdate", 
        e.GAME_START = "event_game_start", e.GAME_END = "event_game_end", e.ResLoadProgress = "ResLoadProgress", 
        e.StartLoadFinish = "StartLoadFinish", e.GetFocus = "GetFocus", e.LostFocus = "LostFocus", 
        e.ShareSuccess = "ShareSuccess", e.ShowAdCompleted = "ShowAdCompleted", e.FinishVideoAd = "FinishVideoAd", 
        e.CloseShowAd = "CloseShowAd", e.FetchVideoFail = "FetchVideoFail";
    }(o || (o = {}));
    class u {}
    u.windowWidth = 0, u.windowHeight = 0, u.version = "", u.fetchingVideoAd = !1, u.startCount = 0, 
    u.severTime = 0, u.scene = 0, u.chid = null, u.registerTime = 0, u.accountTime = 0, 
    u.isNewPlayer = !1, u.firstTimePlayer = !1, u.lastStartTime = 0, u.curStartTime = 0, 
    u.isOverDay = !1;
    class p extends Laya.EventDispatcher {
        static get Instance() {
            return null === p._instance && (p._instance = new p()), p._instance;
        }
    }
    p._instance = null;
    class g {
        constructor() {
            this.uid = 0, this.nickName = g.defaultName, this.avatar = g.defaultAvatar, this.token = "", 
            this.session_key = "", this.openid = "0", this.authorized = !1, this.city = "", 
            this.loadCacheData();
        }
        loadCacheData() {
            var e = Laya.LocalStorage.getJSON(this.dataKey());
            if (null == e || "" == e) return !1;
            for (var t in e) this[t] = e[t];
            return !0;
        }
        setUid(e) {
            this.uid = e;
        }
        dataKey() {
            return "user_info_" + c.PackageName;
        }
        saveToStorage() {
            Laya.LocalStorage.setJSON(this.dataKey(), this);
        }
    }
    g.defaultAvatar = "", g.defaultName = "玩家";
    class w {
        constructor() {}
        static setDataValue(e, t) {
            e && Laya.LocalStorage.setJSON(e, t);
        }
        static getDataValue(e) {
            if (e) {
                return Laya.LocalStorage.getJSON(e) || null;
            }
            return null;
        }
        static setBoolValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t ? "1" : "0");
        }
        static getBoolValue(e) {
            if (e) {
                let t = Laya.LocalStorage.getItem(e);
                if (null !== t) return "1" === t;
            }
            return !1;
        }
        static setNumberValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t + "");
        }
        static getNumberValue(e) {
            if (e) {
                let t = Laya.LocalStorage.getItem(e);
                if (null !== t) return parseFloat(t) || 0;
            }
            return 0;
        }
        static setStringValue(e, t) {
            e && Laya.LocalStorage.setItem(e, t);
        }
        static getStringValue(e) {
            if (e) {
                return Laya.LocalStorage.getItem(e) || "";
            }
            return "";
        }
    }
    w.signDaynfo = "signDaynfo", w.gameDayTime = "gameDayTime";
    class f {
        static isSameDay(e, t) {
            if (t - e >= 864e5) return !1;
            if (e - t >= 864e5) return !1;
            {
                let i = new Date();
                i.setTime(e);
                let n = new Date();
                if (n.setTime(t), i.getDate() === n.getDate()) return !0;
            }
            return !1;
        }
        static getCurrentTimeStamp() {
            return Date.now();
        }
        static currentYear() {
            new Date();
            return new Date().getFullYear();
        }
        static currentMonth() {
            new Date();
            return new Date().getMonth() + 1;
        }
        static currentDate() {
            new Date();
            return new Date().getDate();
        }
        static currentHours() {
            return new Date().getHours();
        }
        static currentDay() {
            return new Date().getDay();
        }
        static isToday(e) {
            return f.isSameDay(e, Date.now());
        }
    }
    class I {
        static getGameRes() {
            return [ {
                url: I.RES_COMMON_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: I.RES_Recommend_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: I.RES_Car_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: I.RES_Promt_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: I.RES_Sign_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: I.RES_egg_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: I.RES_fyhd_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: I.RES_tui_PATH,
                type: Laya.Loader.ATLAS
            } ];
        }
        static getGameConfig() {
            return [ {
                url: I.RES_videoShare_Cfg,
                type: Laya.Loader.JSON
            }, {
                url: I.RES_banner_Cfg,
                type: Laya.Loader.JSON
            }, {
                url: I.RES_Skin_Cfg,
                type: Laya.Loader.JSON
            }, {
                url: I.RES_bonus_Cfg,
                type: Laya.Loader.JSON
            }, {
                url: I.RES_level_Cfg,
                type: Laya.Loader.JSON
            } ];
        }
    }
    I.RES_scene = "res3d/scene2/Conventional/", I.lh = {
        scenes: I.RES_scene + "game.ls",
        models: I.RES_scene + "Model.lh",
        skin_scenes: I.RES_scene + "skin.ls"
    }, I.RES_COMMON_PATH = "res/atlas/comrp.atlas", I.RES_Recommend_PATH = "res/atlas/recommendrp.atlas", 
    I.RES_Sign_PATH = "res/atlas/signrp.atlas", I.RES_Car_PATH = "res/atlas/car.atlas", 
    I.RES_Promt_PATH = "res/atlas/tuirp.atlas", I.RES_egg_PATH = "res/atlas/egg.atlas", 
    I.RES_tui_PATH = "res/atlas/tuirp.atlas", I.RES_fyhd_PATH = "res/atlas/fyhd.atlas", 
    I.RES_Cfg = "res/data/cfg/", I.RES_bonus_Cfg = I.RES_Cfg + "bonus.json", I.RES_level_Cfg = I.RES_Cfg + "level.json", 
    I.RES_videoShare_Cfg = I.RES_Cfg + "videoShare.json", I.RES_banner_Cfg = I.RES_Cfg + "banner.json", 
    I.RES_Skin_Cfg = I.RES_Cfg + "skin.json";
    class y {
        constructor() {
            this.bannerCfg = null, this.allBannerAdUnitArr = [], this.videoCfg = null, this.skinCfg = null, 
            this.m_vsCount = 0, this.m_videoCount = 0, this.m_vsFailShareCount = 0, this.m_trainNoTipDay = 0, 
            this.m_videoFailCount = 0, this.m_videoLoadCount = 0, this.signRed = !0, this.getCheckDayTimerInfo(), 
            Laya.timer.loop(5e3, this, this.checkDayTimer);
        }
        static get Instance() {
            return null === y._instance && (y._instance = new y()), y._instance;
        }
        isOverSeverTime(e = 7200) {
            if (u.severTime > 0) {
                let t = new Date().getTime();
                if (Math.abs(t - u.severTime) < 1e3 * e) return !1;
            }
            return !0;
        }
        getCheckDayTimerInfo() {
            this.m_vsCount = w.getNumberValue("vsCount"), this.m_videoCount = w.getNumberValue("videoCount"), 
            this.m_vsFailShareCount = w.getNumberValue("vsFailShareCount"), this.m_trainNoTipDay = w.getNumberValue("trainNoTipDay"), 
            this.m_videoFailCount = w.getNumberValue("videoFailCount"), this.m_videoLoadCount = w.getNumberValue("videoLoadCount"), 
            this.checkDayTimer(), this.signRed = !this.todayIsSigned();
        }
        savecheckDayTimerInfo() {
            w.setNumberValue("vsCount", this.m_vsCount), w.setNumberValue("videoCount", this.m_videoCount), 
            w.setNumberValue("vsFailShareCount", this.m_vsFailShareCount), w.setNumberValue("trainNoTipDay", this.m_trainNoTipDay), 
            w.setNumberValue("videoFailCount", this.m_videoFailCount), w.setNumberValue("videoLoadCount", this.m_videoLoadCount);
        }
        checkDayTimer() {
            let e = Date.now(), t = parseInt(w.getStringValue(w.gameDayTime) || "0"), i = !1;
            t > 0 && (i = !f.isSameDay(e, t)), i && (this.m_vsCount = 0, this.m_videoCount = 0, 
            this.m_vsFailShareCount = 0, this.m_trainNoTipDay = 0, this.m_videoFailCount = 0, 
            this.m_videoLoadCount = 0, this.savecheckDayTimerInfo(), p.Instance.event(o.dataOverDayInfo)), 
            w.setStringValue(w.gameDayTime, e.toString());
        }
        loadData() {
            this.videoCfg = Laya.loader.getRes(I.RES_videoShare_Cfg), this.bannerCfg = Laya.loader.getRes(I.RES_banner_Cfg), 
            this.skinCfg = Laya.loader.getRes(I.RES_Skin_Cfg);
            for (let e = 0; e < this.bannerCfg.length; e++) {
                let t = this.bannerCfg[e];
                if (t) {
                    let e = t.adunit;
                    Se.IsTouTiao() && (e = t.tadunit), e && e.length && this.allBannerAdUnitArr.push(e);
                }
            }
        }
        loadDLDData(e) {}
        getStageCfg(e = 1) {
            return null;
        }
        getMaxStage() {
            return 99999;
        }
        doSignAction() {
            let e = w.getDataValue(w.signDaynfo);
            if (e) {
                let t = new Date(), i = e.signDay + 1;
                i > 7 && (i = 1), e.signDay = i;
                let n = t.getTime();
                e.ts = n;
            }
            this.signRed = !1, w.setDataValue(w.signDaynfo, e);
        }
        getVideoShareCfg(e) {
            if (null == this.videoCfg) return null;
            for (var t = 0; t < this.videoCfg.length; t++) if (this.videoCfg[t].pos == e) return this.videoCfg[t];
            return null;
        }
        getBannerCfg(e) {
            if (null == this.bannerCfg) return null;
            for (var t = 0; t < this.bannerCfg.length; t++) if (this.bannerCfg[t].pos == e) return this.bannerCfg[t];
            return null;
        }
        processData(e) {
            let t = this.uncompile(e);
            return JSON.parse(t);
        }
        uncompile(e) {
            for (var t = String.fromCharCode(e.charCodeAt(0) - 1), i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) - 1);
            return t;
        }
        getNextBannerAdUnitAnd() {
            let e = "adunit-2259531136e56768";
            if (Se.IsTouTiao() && (e = "9c1lot1ll77c10ga39"), this.allBannerAdUnitArr.length > 2) {
                let t = ve.nextNumber(0, this.allBannerAdUnitArr.length - 2);
                e = this.allBannerAdUnitArr[t], this.allBannerAdUnitArr.splice(t, 1), this.allBannerAdUnitArr.push(e);
            }
            return e;
        }
        getSignDayInfo() {
            let e = 0, t = 0, i = w.getDataValue(w.signDaynfo), n = !1, s = new Date(), a = s.getDate(), o = 0, r = 0;
            if (i) {
                if (t = i.showDay, r = i.ts, n = !0, i.ts > 0) {
                    let t = new Date();
                    if (t.setTime(i.ts), s.getTime() < i.ts + 864e5 && a == t.getDate()) o = 1, e = i.signDay, 
                    n = !1; else {
                        (t = new Date()).setTime(i.ts + 864e5), a == t.getDate() && (e = i.signDay, n = !1);
                    }
                }
            } else n = !0;
            n && ((i = {}).signDay = e, i.showDay = t, i.ts = r, w.setDataValue(w.signDaynfo, i)), 
            e >= 7 && (e = 0);
            let h = {
                signDay: e,
                signed: o,
                show: a == t ? 1 : 0
            };
            return this.signRed = !o, h;
        }
        todayIsSigned() {
            return this.getSignDayInfo().signed > 0;
        }
    }
    function m(e) {
        return (1 << e) - 1;
    }
    function pad(e, t) {
        return new Array(t + 1).join("0").substring(e.length) + e;
    }
    function C(e) {
        return String.fromCharCode(e + 19968);
    }
    function D(e, t) {
        return e.charCodeAt(t) - 19968;
    }
    y._instance = null;
    class S {
        static lzw_compress(e) {
            var t = new v();
            t.init();
            var i, n = -1, s = (e = e.replace(/[\u0100-\uFFFF]/g, function(e) {
                return "&#u" + function(e, t) {
                    return new Array(t + 1).join("0").substring(e.length) + e;
                }(e.charCodeAt(0).toString(16), 4) + ";";
            }), {}), a = [], o = 8;
            t.setBitLength(o);
            for (var r = 0; r < 258; r++) s[r] = ++n;
            a[0] = e.charCodeAt(0);
            for (r = 1; r < e.length; r++) a[1] = e.charCodeAt(r), null == s[i = a[0] << 16 | a[1]] ? (s[i] = ++n, 
            a[0] > (1 << o) - 1 && (t.write(128), t.setBitLength(++o)), t.write(a[0]), a[0] = a[1]) : a[0] = s[i];
            return t.write(a[0]), t.toCString();
        }
        static lzw_decompress(e) {
            for (var t = new function() {
                var t = [], i = 0, n = 0, s = 13, a = m(s), o = 4294967295;
                function m(e) {
                    return (1 << e) - 1;
                }
                this.r = function() {
                    var e;
                    return e = 32 - i % 32 < s ? ((t[i >> 5] & m(32 - i % 32)) << (i + s) % 32 | t[1 + (i >> 5)] >>> 32 - (i + s) % 32) & a : t[i >> 5] >>> 32 - (i + s) % 32 & a, 
                    i += s, e;
                }, this.w = function(e) {
                    e &= a, 32 - n % 32 < s ? (t[n >> 5] |= e >>> s - (32 - n % 32), t[1 + (n >> 5)] |= e << 32 - (n + s) % 32 & o) : t[n >> 5] |= e << 32 - (n + s) % 32 & o, 
                    n += s;
                }, this.e = function() {
                    return i >= n;
                }, this.l = function(e) {
                    s = Math.max(0 | e, 1), a = m(s);
                };
                for (var r = 2; r < e.length; r++) this.w(e.charCodeAt(r) - 19968);
                n = e.charCodeAt(0) - 19968 << 13 | e.charCodeAt(1) - 19968 & m(13), i = 0;
            }(), i = [], n = -1, s = {}, a = [], o = 8, r = 0; r < 2 + (1 << o); r++) s[r] = String.fromCharCode(++n);
            for (t.l(o), a[0] = t.r(); !t.e(); ) a[1] = t.r(), 128 == a[1] && (t.l(++o), a[1] = t.r()), 
            null == s[a[1]] ? s[++n] = s[a[0]] + s[a[0]].charAt(0) : s[++n] = s[a[0]] + s[a[1]].charAt(0), 
            i.push(s[a[0]]), a[0] = a[1];
            return i.push(s[a[0]]), i.join("").replace(/\&\#u[0-9a-fA-F]{4};/g, function(e) {
                return String.fromCharCode(parseInt(e.substring(3, 7), 16));
            });
        }
    }
    class v {
        init(e, t, i, n) {
            var s = e && e.constructor == Array ? e.slice() : [];
            this.p = 0 | t, this.l = 0 | i, this.bl = Math.max(0 | (n || 8), 1), this.mask = m(n), 
            this._m = 4294967295, this.data = function(e, t) {
                return isNaN(t) || (s[e] = 0 | t || 0), isNaN(e) ? s.slice() : s[e];
            };
        }
        read() {
            var e;
            return this.p >= this.l ? 0 : (e = 32 - this.p % 32 < this.bl ? ((this.data[this.p >> 5] & m(32 - this.p % 32)) << (this.p + this.bl) % 32 | this.data[1 + (this.p >> 5)] >>> 32 - (this.p + this.bl) % 32) & this.mask : this.data[this.p >> 5] >>> 32 - (this.p + this.bl) % 32 & this.mask, 
            this.p += this.bl, e);
        }
        write(e) {
            e &= this.mask, 32 - this.l % 32 < this.bl ? (this.data[this.l >> 5] |= e >>> this.bl - (32 - this.l % 32), 
            this.data[1 + (this.l >> 5)] |= e << 32 - (this.l + this.bl) % 32 & this._m) : this.data[this.l >> 5] |= e << 32 - (this.l + this.bl) % 32 & this._m, 
            this.l += this.bl;
        }
        eof() {
            return this.p >= this.l;
        }
        reset() {
            this.p = 0, this.mask = m(this.bl);
        }
        resetAll() {
            this.data = [], this.p = 0, this.l = 0, this.bl = 8, this.mask = m(this.bl), this._m = 4294967295;
        }
        setBitLength(e) {
            this.bl = Math.max(0 | e, 1), this.mask = m(this.bl);
        }
        toHexString() {
            for (var e = [], t = 0; t < this.data.length; t++) this.data[t] < 0 ? e.push(pad((this.data[t] >>> 16).toString(16), 4) + pad((65535 & this.data[t]).toString(16), 4)) : e.push(pad(this.data[t].toString(16), 8));
            return e.join("");
        }
        toBinaryString() {
            for (var e = [], t = 0; t < this.data.length; t++) this.data[t] < 0 ? e.push(pad((this.data[t] >>> 1).toString(2), 31) + (1 & this.data[t])) : e.push(pad(this.data[t].toString(2), 32));
            return e.join("").substring(0, this.l);
        }
        toCString() {
            var e = this.p, t = this.bl, i = [];
            for (this.setBitLength(13), this.reset(); this.p < this.l; ) i.push(C(this.read()));
            return this.setBitLength(t), this.p = e, C(this.l >>> 13) + C(this.l & m(13)) + i.join("");
        }
        fromCString(e) {
            this.resetAll(), this.setBitLength(13);
            for (var t = 2; t < e.length; t++) this.write(D(e, t));
            return this.l = D(e, 0) << 13 | D(e, 1) & m(13), this;
        }
        clone() {
            let e = new v();
            return e.init(this.data, this.p, this.l, this.bl), e;
        }
    }
    class L {
        constructor() {
            this.minStageId = 10, this.maxStageId = 18, this.minTrainId = 2, this.maxTrainId = 9;
        }
        static get Instance() {
            return null === L._instance && (L._instance = new L()), L._instance;
        }
        isStageSkin(e) {
            return e >= this.minStageId && e <= this.maxStageId;
        }
        getLockStageByIndex(e = 1, t = 10) {
            return x.Instance.getSkinInfoWithId(t).stage <= e;
        }
        haveUnlockStageSkin() {
            return !this.getLockStageByIndex(x.rp_data.stage, this.maxStageId);
        }
        getShowMaxSkin(e = 0) {
            return y.Instance.skinCfg.length - 2;
        }
        getSignSkin() {
            let e = [];
            {
                let t = 19, i = 0 == x.Instance.getSkinArr(t);
                e.push({
                    skinid: t,
                    isLock: i
                });
            }
            {
                let t = 20, i = 0 == x.Instance.getSkinArr(t);
                e.push({
                    skinid: t,
                    isLock: i
                });
            }
            return e;
        }
        getSkinRes(e) {
            return "car/" + e + ".png";
        }
        getUnLockValue(e) {
            let t = 1500;
            return x.rp_data.skinBuyC < 2 && (t = 1e3), x.rp_data.skinBuyC * t + 1e3;
        }
        static getRandomIndex(e) {
            let t = [], i = [];
            for (let i = 0; i < e; i++) t.push(i);
            let n = t.length;
            for (let e = 0; e < n; e++) {
                let e = Math.floor(Math.random() * t.length);
                i.push(t[e]), t.splice(e, 1);
            }
            return [ ...i, ...t ];
        }
        getRandomLockSkinId(e) {
            let t = [];
            for (let e = this.minTrainId; e <= this.maxTrainId; e++) {
                0 == x.Instance.getSkinArr(e) && t.push(e);
            }
            if (t.push(21), t.push(22), t.length > 0) {
                return t[Math.floor(Math.random() * (t.length - 1))];
            }
            return -1;
        }
        setShowUseSkinId(e) {
            x.rp_data.skinIndex = e;
        }
        getShowUseSkinId() {
            let e = x.rp_data.skinIndex;
            return e < 1 && (e = 1), e;
        }
        getShowSkinRes(e) {
            return this.getSkinRes(e);
        }
        getLockTip(e) {
            return "UNLOCKS AT LEVEL " + x.Instance.getSkinInfoWithId(e).stage;
        }
        getNowLockInfo(e = 30) {
            for (let t = this.maxStageId; t >= this.minStageId; t--) {
                let i = x.Instance.getSkinInfoWithId(t);
                if (e > i.stage) {
                    let n = t + 1;
                    if (t == this.maxStageId) return null;
                    let s = x.Instance.getSkinInfoWithId(t + 1), a = i.stage, o = s.stage, r = (e - 1 - a) / (o - a);
                    return r < 0 && (r = 0), {
                        skinId: n,
                        progress0: r,
                        progress: (e - a) / (o - a),
                        finish: e == o
                    };
                }
            }
            let t = x.Instance.getSkinInfoWithId(this.minStageId).stage, i = (e - 0) / (t - 0), n = e == t, s = (e - 1 - 0) / (t - 0);
            return s < 0 && (s = 0), {
                skinId: this.minStageId,
                progress0: s,
                progress: i,
                finish: n
            };
        }
    }
    L._instance = null;
    class k {}
    k.isReadData = !1, k.UpdateTime = 60, k.saveDataTime = 240, k.lastSendDataTime = Laya.Browser.now();
    class x {
        constructor() {
            this.saveTimerCall = null, this.inviteCount = 0, this.logined = !1, this.loginError = !1, 
            this.successLoginCb = null, this.onlineStartTime = 0, this.user = new g();
        }
        static get Instance() {
            return null == x._instance && (x._instance = new x()), x._instance;
        }
        registerEvent() {
            p.Instance.on(o.dataOverDayInfo, this, this.clearOverDayInfo);
        }
        static dataKey() {
            return "data_" + c.PackageName;
        }
        realSaveData(e = !1, t = 0) {
            this.saveTimerCall = null;
            let i = Laya.Browser.now();
            x.rp_data.save_time = i, x.rp_data.ver = c.ClientVer;
            let n = JSON.stringify(x.rp_data);
            Laya.LocalStorage.setItem(x.dataKey(), n), this.user.saveToStorage();
        }
        static readDataInfo(e) {
            k.isReadData || (c.recoverData || (e = null), x.isDefaultData ? e ? (x.initDefaultData(x.rp_data), 
            x.Instance.initReadDLDData(e, x.rp_data)) : x.initDefaultData(x.rp_data) : (x.initDefaultData(x.rp_data), 
            this.cache_data && x.Instance.initReadDLDData(this.cache_data, x.rp_data)), x.Instance.registerEvent(), 
            x.isDefaultData = !1, k.isReadData = !0);
        }
        static testData() {
            if ("".length) {
                let e = S.lzw_decompress("");
                if (e && "" !== e) {
                    return JSON.parse(e);
                }
            }
            return null;
        }
        static readDataInfo2() {
            let e = Laya.LocalStorage.getItem(x.dataKey()), t = null;
            return e && "" !== e && (t = JSON.parse(e)), t;
        }
        static readDLDData() {
            let e = x.readDataInfo2();
            e ? (this.isDefaultData = !1, this.cache_data = e) : (this.isDefaultData = !0, this.cache_data = null);
        }
        static saveData(e = !1, t = !1) {
            x.Instance.dosaveData(e, t);
        }
        static findSkinInfo(e) {
            let t = null;
            for (let i of x.rp_data.skinlist) i.n == e && (t = i);
            return t;
        }
        static addSkinInfo(e) {
            if (e) {
                let t = e.index;
                for (let e of x.rp_data.skinlist) if (e.n == t) {
                    x.rp_data.skinlist.splice(x.rp_data.skinlist.indexOf(e), 1);
                    break;
                }
                x.rp_data.skinlist.push(e);
            }
        }
        initReadDLDData(e, t, i = !0) {
            let n = e;
            if (n.login_date && (t.login_date = n.login_date), n.save_time && (t.save_time = n.save_time), 
            n.daygameCount && (t.daygameCount = n.daygameCount), n.onlineTime && (t.onlineTime = n.onlineTime), 
            n.higeScore && (t.higeScore = n.higeScore), n.gameCount && (t.gameCount = n.gameCount), 
            n.score && (t.score = n.score), n.gold && (t.gold = n.gold), n.zuan && (t.zuan = n.zuan), 
            n.stage && (t.stage = n.stage), n.skinIndex && (t.skinIndex = n.skinIndex), n.skinlist && (t.skinlist = n.skinlist), 
            n.skinBuyC && (t.skinBuyC = n.skinBuyC), i) {
                let e = n.login_date;
                0 == f.isToday(e) && x.Instance.clearOverDayInfo();
            }
        }
        clearOverDayInfo() {
            let e = Laya.Browser.now();
            x.rp_data.login_date = e, x.rp_data.daygameCount = 0;
        }
        getSkinInfoWithId(e) {
            let t = y.Instance.skinCfg;
            for (let i = 0; i < t.length; i++) {
                let n = t[i];
                if (n.id == e) return n;
            }
        }
        getSkinIndexWithId(e) {
            let t = y.Instance.skinCfg;
            for (let i = 0; i < t.length; i++) {
                if (t[i].id == e) return i;
            }
            return 0;
        }
        getSkinArr(e) {
            let t = this.getSkinInfoWithId(e);
            if (1 == e) return 1;
            if (1 == t.type) return L.Instance.getLockStageByIndex(x.rp_data.stage, e) ? 1 : 0;
            let i = x.findSkinInfo(e);
            return i && i.s ? 1 : 0;
        }
        setSkinArr(e, t) {
            let i = {
                n: e,
                s: t
            };
            x.addSkinInfo(i), x.saveData(!0);
        }
        static initDefaultData(e) {
            e.login_date = Number(Laya.Browser.now()), e.save_time = Number(Laya.Browser.now()), 
            e.gameCount = 0, e.daygameCount = 0, e.onlineTime = 0, e.higeScore = 0, e.score = 0, 
            e.gold = 100, e.zuan = 0, e.stage = 1, e.skinIndex = 1, e.skinlist = [], e.skinBuyC = 0;
        }
        dosaveData(e = !1, t = !1) {
            if (!k.isReadData) return;
            let i = t, n = Laya.Browser.now();
            n - k.lastSendDataTime > 1e3 * k.saveDataTime && (k.lastSendDataTime = n, i = !0), 
            i && (e = !0), this.saveTimerCall && (clearTimeout(this.saveTimerCall), this.saveTimerCall = null), 
            e ? this.realSaveData(i, n) : this.saveTimerCall = setTimeout(() => {
                this.realSaveData(i, n);
            }, 1e3);
        }
    }
    x.rp_data = {}, x.cache_data = null, x.isDefaultData = !0;
    class b {
        constructor(e) {
            this.httpCallback = null, this.url = "", this.httpCallback = e, this.url = "", this.http = new Laya.HttpRequest(), 
            this.http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress), this.http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete), 
            this.http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
        }
        onHttpRequestComplete(e) {
            if (this.httpCallback) {
                {
                    let e = this.http;
                    if (e._http && e._http.getResponseHeader) {
                        let i = new Date().getTime();
                        i > 0 && (u.severTime = i);
                    }
                }
                this.httpCallback(null, this.http.data);
            }
        }
        sendPost(e, t, i) {
            var n = this.parsToStr(t);
            this.url = e + "/" + i, this.http.send(this.url, n, "post", "json");
        }
        sendGet(e, t, i = "json", n = null) {
            var s = this.parsToStr(t);
            this.url = e + "?" + s, this.http.send(this.url, null, "GET", i, n);
        }
        sendGetWithUrl(e) {
            this.url = e, this.http.send(e, null, "get", "json");
        }
        sendPostWithUrl(e, t, i = "json", n = null) {
            this.url = e, this.http.send(e, t, "post", i || "json", n);
        }
        parsToStr(e) {
            if (Array.isArray(t)) {
                for (var t = "", i = 0; i < e.length; i++) t += e[i][0] + "=" + e[i][1], i < e.length - 1 && (t += "&");
                return t;
            }
            return this.parseParams(e);
        }
        onHttpRequestProgress(e) {}
        onHttpRequestError(e) {
            this.httpCallback && this.httpCallback(e, null);
        }
        parseParams(e) {
            var t = "";
            if (null != e) {
                for (var i in e) t += i + "=" + e[i] + "&";
                t = t.substring(0, t.length - 1);
            }
            return t;
        }
    }
    !function(e) {
        e[e.OK = 1e4] = "OK", e[e.FAIL = 10002] = "FAIL", e[e.LOGIN_PAR_ERROR = 1001] = "LOGIN_PAR_ERROR", 
        e[e.ENTRY_TOKEN_EXPIRE = 10005] = "ENTRY_TOKEN_EXPIRE", e[e.ENTRY_USER_NOT_EXIST = 10011] = "ENTRY_USER_NOT_EXIST";
    }(r || (r = {}));
    class A {
        constructor() {
            this.packageName = c.PackageName, this.mt = c.Platform, this.apiversion = c.Apiversion, 
            this.version = c.ClientVer, this.sessionID = "";
        }
        static get Instance() {
            return null === A._instance && (A._instance = new A()), A._instance;
        }
        loginUser(e) {
            let t = Object.assign(e, {
                packageName: this.packageName,
                inviteCode: x.Instance.inviteCode || ""
            });
            return this.post(this.qgPostUrl("/login"), t);
        }
        loginUser2(e, t) {
            let i = Object.assign(e, {
                iscommit: t ? "0" : "1",
                packageName: this.packageName,
                inviteCode: x.Instance.inviteCode || ""
            });
            return this.post(this.qgPostUrl("/2/login"), i);
        }
        getUserInfo(e = "", t = 0, i = "") {
            return this.get("/hd/userInfo", {
                packageName: this.packageName,
                kid: e || "",
                isClick: t,
                isvs: i
            });
        }
        getRankList(e) {
            return this.get("/hd/RankList", {
                packageName: this.packageName,
                type: e
            });
        }
        getAppConfig() {
            return this.get("/hd/config", {
                packageName: this.packageName
            });
        }
        getInviteList() {
            return this.get("/getInvitedList", {
                packageName: this.packageName
            });
        }
        setInviteState(e) {
            return this.post(this.qgPostUrl("/inviteState"), {
                packageName: this.packageName,
                id: e
            });
        }
        updataInfo(e) {
            let t = Object.assign({
                packageName: this.packageName,
                gender: -1,
                sessionID: this.sessionID
            }, e);
            return this.post(this.qgPostUrl("/hd/update/info"), t);
        }
        updateUserInfo(e, t = null, i = null, n = null) {
            return this.updataInfo({
                nickName: e,
                avatar: t,
                gender: i,
                city: n
            });
        }
        updataDLDData(e) {
            let t = {
                b: x.rp_data.gold,
                c: 0
            }, i = {
                b: x.rp_data.higeScore,
                c: 0
            }, n = x.rp_data.stage;
            return this.updataInfo({
                gamedata: e,
                cgold: t,
                cpower: i,
                stage: n
            });
        }
        buildUrl(e) {
            return c.host + e;
        }
        buildParas(e, t) {
            let i = e;
            return t && (i = Object.assign(e, {
                sessionID: this.sessionID,
                apiversion: this.apiversion,
                version: this.version,
                mt: this.mt,
                packageName: this.packageName
            })), i;
        }
        get(e, t = {}, i = !0) {
            let n = this.buildUrl(e), s = this.buildParas(t, i);
            return new Promise((e, t) => {
                new b((i, n) => {
                    this.handleResult(i, n, e, t);
                }).sendGet(n, s);
            });
        }
        post(e, t = {}, i = !0) {
            let n = this.buildUrl(e), s = this.buildParas(t, i);
            return new Promise((e, t) => {
                new b((i, n) => {
                    this.handleResult(i, n, e, t);
                }).sendPostWithUrl(n, this.qgPostData(s));
            });
        }
        handleResult(e, t, i, n) {
            e ? n(e) : t.code === r.OK ? i(t.result) : n(t);
        }
        addTsParas(e, t) {
            return e;
        }
        qgPostUrl(e) {
            return Se.isQG ? "/data" + e : e;
        }
        qgPostData(e) {
            return Se.isQG && (e = "data=" + JSON.stringify(e)), e;
        }
    }
    A._instance = null;
    class B {
        constructor() {}
        static callLater(e, t, i) {
            Laya.timer.callLater(e, t, i);
        }
        static runCallLater(e, t) {
            Laya.timer.runCallLater(e, t);
        }
        static runTimer(e, t) {
            Laya.timer.runTimer(e, t);
        }
        static currTimer() {
            return Laya.timer.currTimer;
        }
        static scale() {
            return Laya.timer.scale;
        }
        static currFrame() {
            return Laya.timer.currFrame;
        }
        static delta() {
            return Laya.timer.delta;
        }
        static once(e, t, i, n = [], s = !0) {
            Laya.timer.once(e, t, i, n, s);
        }
        static loop(e, t, i, n = [], s = !0, a = !1) {
            Laya.timer.loop(e, t, i, n, s, a);
        }
        static frameOnce(e, t, i, n, s) {
            Laya.timer.frameOnce(e, t, i, n, s);
        }
        static frameLoop(e, t, i, n = null, s = !0) {
            Laya.timer.frameLoop(e, t, i, n, s);
        }
        static clear(e, t) {
            Laya.timer.clear(e, t);
        }
        static clearAll(e) {
            Laya.timer.clearAll(e);
        }
    }
    class P {
        constructor() {
            this.doKilled = !1, this.startTime = 0, this.recordTime = 0, this.recorder = null, 
            this.videoPath = null, this.recording = !1, Se.IsTouTiao() && "undefined" != typeof wx && wx.getGameRecorderManager && (this.recorder = wx.getGameRecorderManager(), 
            this.initRecord());
        }
        static get Instance() {
            return null == P._instance && (P._instance = new P()), P._instance;
        }
        canShareVideo() {
            return !!(this.videoPath && this.videoPath.length && this.recordTime > 3500);
        }
        shareVideo(e) {
            this.recording && this.stop(), Se.Instance.shareVideo(e);
        }
        start(e = 300) {
            this.recorder && (this.recordTime = 0, this.addRecordTime(!1, !0), this.recording && (this.recorder.stop(), 
            this.recording = !1), this.recorder.start({
                duration: e
            }), this.recording = !0, this.doKilled = !1);
        }
        canShowShareVideo() {
            return !!this.videoPath;
        }
        pause() {
            this.recorder && (this.addRecordTime(!0, !1), this.recorder.pause());
        }
        resume() {
            this.recorder && (this.addRecordTime(!1, !0), this.recorder.resume());
        }
        addRecordTime(e = !0, t = !0) {
            let i = Date.now();
            e && this.startTime > 0 && (this.recordTime += i - this.startTime), this.startTime = t ? i : 0;
        }
        stop() {
            this.recorder && this.recording && (this.addRecordTime(!0, !1), this.recorder.stop(), 
            this.recording = !1);
        }
        initRecord() {
            this.recorder && (this.recorder.onStart(e => {}), this.recorder.onStop(e => {
                this.videoPath = e.videoPath;
            }), this.recorder.onPause(() => {}), this.recorder.onResume(() => {}), this.recorder.onError(e => {}), 
            this.recorder.onInterruptionBegin(e => {}), this.recorder.onInterruptionEnd(e => {}));
        }
    }
    P._instance = null;
    var V = {
        Bgm: "music/bgm.mp3",
        Button: "music/button.mp3",
        Crash: "music/crash.mp3",
        Hit: "music/hit.mp3",
        Target: "music/target.mp3",
        Gold: "music/gold.mp3",
        Fail: "music/fail.mp3",
        Success: "music/upgrade.mp3",
        Win_success: "music/win.mp3",
        Egg: "music/egg.mp3",
        Progress: "music/progress.mp3"
    };
    class T {
        constructor() {
            this.curBgmName = null, this.bgMusic = null, this.vibrateMuted = 0, this.init(), 
            p.Instance.on(o.GetFocus, this, this.onGetFocus), p.Instance.on(o.LostFocus, this, this.onLostFocus), 
            this.curBgmName = null;
        }
        static get Instance() {
            return null == T._instance && (T._instance = new T()), T._instance;
        }
        onLostFocus() {
            this.stopAll();
        }
        onGetFocus() {
            this.startAll();
        }
        startAll() {
            null != this.curBgmName && setTimeout(() => {
                null != this.curBgmName && Laya.SoundManager.playMusic(this.curBgmName);
            }, 1e3);
        }
        playBgm() {
            this.stopMusic(), this.curBgmName = V.Bgm, this.playMusic(V.Bgm);
        }
        stopSound(e) {
            Laya.SoundManager.stopSound(e);
        }
        stopMusic() {
            this.curBgmName && (this.curBgmName = null, Laya.SoundManager.stopMusic());
        }
        playUIClick() {
            this.playSound(V.Button);
        }
        playMusic(e) {
            Laya.SoundManager.playMusic(e);
        }
        playSound(e, t = 1) {
            Laya.SoundManager.soundMuted || Laya.SoundManager.playSound(e, t);
        }
        setMusicMute(e) {
            Laya.SoundManager.musicMuted = e;
        }
        isMusicMuted() {
            return Laya.SoundManager.musicMuted;
        }
        setMusicVolume(e) {
            Laya.SoundManager.setMusicVolume(e), Laya.LocalStorage.setItem("musicVolume", e), 
            this.bgMusic && (this.bgMusic.volume = e);
        }
        getMusicVolume() {
            return Laya.SoundManager.musicVolume;
        }
        setSoundMute(e) {
            Laya.SoundManager.soundMuted = e;
        }
        isSoundMuted() {
            return Laya.SoundManager.soundMuted;
        }
        setSoundVolume(e) {
            Laya.SoundManager.setSoundVolume(e), Laya.LocalStorage.setItem("soundVolume", e);
        }
        getSoundVolume() {
            return Laya.SoundManager.soundVolume;
        }
        stopAll() {
            Laya.SoundManager.stopAll();
        }
        stopAllSound() {
            Laya.SoundManager.stopAllSound();
        }
        vibrateShort() {
            if (!this.vibrateMuted) {
                let e = Se.getPlatform();
                e && e.vibrateShort && e.vibrateShort({
                    success: null,
                    fail: null,
                    complete: null
                });
            }
        }
        vibrateLong() {
            if (!this.vibrateMuted) {
                let e = Se.getPlatform();
                e && e.vibrateShort && e.vibrateLong({
                    success: null,
                    fail: null,
                    complete: null
                });
            }
        }
        setVibrateMuted(e) {
            this.vibrateMuted = e, Laya.LocalStorage.setItem("vibrateMuted", e + "");
        }
        init() {
            Laya.SoundManager.autoStopMusic = !1;
            var e = Laya.LocalStorage.getItem("musicVolume"), t = 1;
            null !== e && "" !== e && "NaN" !== e && (t = parseFloat(e + "")), this.setMusicVolume(t), 
            this.setMusicMute(0 == t);
            var i = Laya.LocalStorage.getItem("soundVolume"), n = 1;
            null !== i && "" !== i && "NaN" !== i && (n = parseFloat(i + "")), this.setSoundVolume(n), 
            this.setSoundMute(0 == n), "1" === Laya.LocalStorage.getItem("vibrateMuted") && (this.vibrateMuted = 1);
        }
    }
    var M, E, _, R = {
        videoFail: "视频获取失败",
        videoSuccess: "视频获取成功",
        videoLoadCount: "视频请求次数",
        bannerFail: "banner获取失败",
        bannerSuccess: "banner获取成功",
        bannerClick: "banner点击",
        showAD: "showAD",
        doShare: "doShare",
        watchADComplete: "watchADComplete",
        watchADExit: "watchADExit",
        LoginSuccess: "LoginSuccess",
        LoginFail: "LoginFail",
        AuthLogin: "AuthLogin",
        MyRecommendJump: "自有矩阵导出",
        Node1: "N1游戏启动",
        Node2: "N2加载分包",
        Node3: "N3加载资源",
        Node4: "N4进入主界面",
        Node5: "N5开始第几关",
        hitedEgg: "hitedEgg",
        showEgg: "showEgg"
    };
    class U {
        constructor() {
            this.loadingRes = !1, this.templet = null, this.loaded = !1, this.loadResCallback = null, 
            this.threeDResDir = "", this.reset();
        }
        static get Instance() {
            return null == U._instance && (U._instance = new U()), U._instance;
        }
        reset() {
            if (this.loadingRes = !1, this.templet = null, this.loaded = !1, "undefined" != typeof wx && c.useZip) {
                let e = wx;
                this.threeDResDir = e.env.USER_DATA_PATH + "/DRes" + c.tResVer + "/";
            }
        }
        loadRes(e) {
            this.loadingRes || (this.loadResCallback = e, this.loadingRes = !0, this.loadAllRes());
        }
        loadGRes() {
            let e = this.threeDResDir, t = [ {
                url: e + I.lh.scenes,
                type: Laya.Loader.HIERARCHY
            }, {
                url: e + I.lh.models,
                type: Laya.Loader.HIERARCHY
            } ], i = I.getGameRes();
            i = i.concat(t), Laya.loader.create(i, Laya.Handler.create(this, this.onLoadResComplete), Laya.Handler.create(this, this.onProgress, null, !1));
        }
        loadAllRes() {
            c.useZip ? this.unzipThreeDRes().then(e => {
                this.deleteOldThreeDResDir(), this.loadGRes();
            }).catch(e => {}) : this.loadGRes();
        }
        onProgress(e) {
            p.Instance.event(o.ResLoadProgress, e);
        }
        onLoad() {
            this.loadingRes = !1;
        }
        onLoadResComplete() {
            this.loadResCallback && this.loadResCallback.run(), this.loadingRes = !1, this.loaded = !0, 
            p.Instance.event(o.StartLoadFinish);
        }
        onError() {}
        clear() {}
        unzipThreeDRes() {
            if ("undefined" == typeof wx || !c.useZip) return new Promise((e, t) => {
                e("");
            });
            let e = wx;
            var t = e.getFileSystemManager();
            c.tResVer;
            let i = this.threeDResDir;
            return new Promise((e, n) => {
                t.access({
                    path: i,
                    success: t => {
                        e(t);
                    },
                    fail: () => {
                        n("res directory not exist. upziping...");
                    }
                });
            }).then(e => {}).catch(i => new Promise((i, n) => {
                t.unzip({
                    zipFilePath: "res3d/DRes.zip",
                    targetPath: e.env.USER_DATA_PATH,
                    success: function(e) {
                        i();
                    },
                    fail: function(e) {
                        n("assets unzip fail");
                    }
                });
            }));
        }
        deleteOldThreeDResDir() {
            if ("undefined" == typeof wx || !c.useZip) return;
            let e = wx;
            var t = e.getFileSystemManager();
            let i = e.env.USER_DATA_PATH, n = "DRes" + c.tResVer;
            t.readdir({
                dirPath: i,
                success: i => {
                    let s = i.files;
                    for (let i = 0; i < s.length; i++) {
                        let a = s[i];
                        a !== n && 0 == a.indexOf("DRes") && t.rmdir({
                            dirPath: e.env.USER_DATA_PATH + "/" + a,
                            recursive: !0
                        });
                    }
                }
            });
        }
    }
    U._instance = null;
    class O extends Laya.Script3D {
        constructor() {
            super(), this.moveT = 800, this.tweenAni = null;
        }
        onAwake() {
            this.camera = this.owner;
        }
        onUpdate() {}
        onLateUpdate() {}
        init() {
            this.camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, this.camera.nearPlane = .3, 
            this.camera.farPlane = 1e3;
        }
        cameraReset(e = null) {
            this.changeType(1, e);
        }
        startGame(e = null) {
            this.changeType(2, e, !0);
        }
        changeType(e = 1, t = null, i = !1) {
            this.stopMove();
            let n = 2 * (1 == e ? 11.8 : 15), s = 2 * (1 == e ? 15 : 11.8);
            i ? (this.camera.orthographicVerticalSize = n, this.tweenAni = Laya.Tween.to(this.camera, {
                orthographicVerticalSize: s
            }, this.moveT, Laya.Ease.sineOut, Laya.Handler.create(this, () => {
                this.tweenAni = null, t && t();
            }))) : this.camera.orthographicVerticalSize = s;
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
    }
    class N extends Laya.Script {
        constructor() {
            super(...arguments), this.isTest = !1, this.isOpen = !0, this.recommendData = null, 
            this.tuiInfo = [], this.openId = "", this.isValueuser = !1, this.is_white = 0;
        }
        static get Instance() {
            return null == N._instance && (N._instance = new N()), N._instance;
        }
        initSDK() {
            this.isTest && this.onFyhdTuiInfo(), this.isOpenSDK() && (window.fyhd ? (this.fyhdSdk = window.fyhd, 
            this.fyhdSdk.getFyhd().startSdk(), this.is_white = parseInt(Laya.LocalStorage.getItem("is_white") || "0"), 
            this.getFyhdUserInfo()) : this.isOpen = !1);
        }
        onFyhdTuiInfo() {
        }
        loginData() {
            if (!this.isTest && this.isOpenSDK() && "" != this.openId) {
                var e = {
                    openid: this.openId
                };
                this.fyhdSdk.getFyhd().loginData(e, e => {});
            }
        }
        valueuser() {
            if (!this.isTest && this.isOpenSDK() && !this.isValueuser && "" != this.openId) {
                var e = {
                    openid: this.openId
                };
                this.isValueuser = !0, this.fyhdSdk.getFyhd().valueuser(e, e => {});
            }
        }
        getFyhdUserInfo() {
            this.isTest || this.isOpenSDK() && this.fyhdSdk.getFyhd().getFyhdUserInfo(null, !1, e => {
                e && e.result && e.result.user ? (this.openId = e.result.user.openid || "", x.Instance.user.openid = this.openId, 
                1 !== this.is_white && this.isWhiteConfig(), this.loginData(), this.shareRecommend(), 
                x.Instance.logined = !0, A.Instance.sessionID.length || (A.Instance.sessionID = x.Instance.user.session_key), 
                x.readDataInfo(null), !this.isValueuser && pe.Instance.isUIOpen(ce.LoadingView) && this.valueuser(), 
                p.Instance.event(o.userLoginFinish, !0)) : (x.Instance.loginError = !0, p.Instance.event(o.userLoginFinish, !1));
            });
        }
        isWhiteConfig() {
            this.isTest || this.isOpenSDK() && this.fyhdSdk.getFyhd().whiteConfig(e => {
                e.data.is_white ? this.is_white = 1 : this.is_white = 0, Laya.LocalStorage.setItem("is_white", this.is_white.toString());
            });
        }
        advertisement(e) {
            if (!this.isTest && this.isOpenSDK() && "" != this.openId) {
                var t = {
                    ad_type: e,
                    openid: this.openId
                };
                this.fyhdSdk.getFyhd().advertisement(t, e => {});
            }
        }
        bannerClickCheck(e) {
            null != e && (8 == e.targetAction || 9 == e.targetAction || 10 == e.targetAction) && e.targetPagePath.length > 50 && this.advertisement("banner");
        }
        shareRecommend() {
            this.isTest || this.isOpenSDK() && "" != this.openId && this.fyhdSdk.getFyhd().shareRecommend({
                openid: this.openId
            }, e => {
                e && e.data && (this.recommendData = e.data, this.createTuiInfo(e.data));
            });
        }
        createTuiInfo(e) {
            if (e) {
                let t = 0;
                for (let i = 0; i < e.length; i++) {
                    let n = e[i];
                    if (2 == n.jump_type) continue;
                    let s = n.togame_name, a = n.to_appid, o = n.jump_path, r = n.icon, h = n.sort;
                    0 == n.jump_type && (a = n.platform_appid), this.tuiInfo[t] = {
                        name: s,
                        pid: a,
                        path: o,
                        url: r,
                        sort: h
                    }, t++;
                }
            }
        }
        sharePlay(e, t) {
            if (!this.isTest && this.isOpenSDK() && "" != this.openId) {
                var i = {
                    openid: this.openId,
                    to_appid: e,
                    sort: t
                };
                this.fyhdSdk.getFyhd().sharePlay(i, e => {});
            }
        }
        isOpenSDK() {
            return !!this.isTest || Se.IsWeChat() && this.isOpen;
        }
        checkShowEggView() {
            return 1 === this.is_white && (!Se.wxCheck() && (!Se.adCheck() && !(u.isNewPlayer && x.rp_data.daygameCount < 2)));
        }
        initETouch() {
            return this.checkShowEggView();
        }
        ShowTuiMBanner() {
            return this.checkShowEggView();
        }
        showtuichu() {
            return 1 === this.is_white && (!Se.wxCheck() && !Se.adCheck());
        }
        shouwmoresuijibtn() {
            return !(u.isNewPlayer && x.rp_data.daygameCount < 4);
        }
    }
    N._instance = null, function(e) {
        e.JumpSuccess = "跳转成功", e.JumpFail = "跳转失败";
    }(M || (M = {})), function(e) {
        e.Unkonw = "未知", e.HomeIcon = "首页抖动Icon", e.HomeBottom = "首页底部横向滚动", e.GameIcon = "游戏页面抖动Icon", 
        e.ReviveBottom = "复活页底部", e.ReviveCenter = "复活页中部", e.ReviveLR = "复活页左右", e.GradeUp = "段位升级页面", 
        e.Offline = "离线收益页面", e.receiveFree = "免费领取金币页面", e.BeforeSettle = "结算页面之前弹出页面", 
        e.NoTouch = "静止插屏页面", e.HomeGift = "首页礼包", e.HomeRight = "首页侧拉热门按钮", e.HomeOut = "首页退出按钮", 
        e.GameOut = "游戏中退出按钮", e.BackHome = "游戏中小屋按钮", e.JumpFail = "icon跳转失败后页面", e.GradeupClose = "段位升级界面关闭", 
        e.RoleProgressClose = "解锁界面关闭", e.mainGame = "游戏主界面", e.AfterSettle = "结算界面后", e.HomeMoreGame = "点击首页更多游戏";
    }(E || (E = {}));
    class F extends e.view.GamePanelrpUI {
        constructor() {
            super(...arguments), this.matchFinish = !1, this.saveWXTimerCall = null, this.point = new Laya.Vector2(), 
            this.bannered = !1, this.isDown = !1, this.callBack = null, this.videoCallBack = null;
        }
        addMouseEvent(e = !0) {
            e ? (Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), 
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseOutEvent)) : (Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpEvent), 
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownEvent), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveEvent), 
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseOutEvent));
        }
        onMouseDownEvent(e) {
            if (te.Instance.isPlay && !te.Instance.isOver && !te.Instance.isBacking) {
                this.point.x = Laya.MouseManager.instance.mouseX, this.point.y = Laya.MouseManager.instance.mouseY;
                let e = this.rayCheck(this.point, !0);
                this.isDown = !0, this.moveMapPath(e, 1);
            }
        }
        onMouseMoveEvent(e) {
            if (te.Instance.isPlay && !te.Instance.isOver && !te.Instance.isBacking && this.isDown) {
                if (this.point.x = Laya.MouseManager.instance.mouseX, this.point.y = Laya.MouseManager.instance.mouseY, 
                1 == te.Instance.sceneMgr.drawType) {
                    let e = this.rayCheck(this.point);
                    this.moveMapPath(e, 2);
                }
            }
        }
        onMouseOutEvent(e) {
            this.onMouseUpEvent(e);
        }
        onMouseUpEvent(e) {
            !te.Instance.isPlay || te.Instance.isOver || te.Instance.isBacking || (this.isDown = !1, 
            this.moveMapPath(null, 3));
        }
        initView() {
            this.showInfo(!1), this.resetGameInfo(), this.addMouseEvent();
        }
        loadGameScene() {
            let e = Laya.loader.getRes(U.Instance.threeDResDir + I.lh.scenes);
            this.addChild(e), e.zOrder = -1, this.mainScene = e, this.gameSp = e.getChildByName("Game"), 
            this.mainCamera = this.mainScene.getChildByName("Main Camera"), this.mainCamera.enableHDR = !1, 
            this.mainCamera.fieldOfView = Se.isLong() ? 65 : 60, this.cameraComp = this.mainCamera.addComponent(O), 
            this.cameraComp.init(), te.Instance.sceneMgr.init(this.mainScene, this.gameSp, this.mainCamera), 
            this.loadLevelMap(this.callBack);
        }
        changeBg(e) {
            this.bgImage.skin = "res/big/bg_" + e + ".png";
        }
        showTipTutorial(e = !1) {
            (!e || x.rp_data.stage < 3) && te.Instance.sceneMgr.showTutorial(!0);
        }
        showInfo(e) {
            this.infoView.visible = e;
        }
        loadLevelMap(e = null) {
            x.rp_data.daygameCount++;
            let t = x.rp_data.stage;
            this.stageLab.text = "LEVEL:" + t, te.Instance.sceneMgr.loadLevelMap(t, (t = !1) => {
                let i = t ? 500 : 1;
                Laya.timer.once(i, this, () => {
                    e && e(), te.Instance.showLoadAni(!1);
                });
            }) && te.Instance.showLoadAni(!0);
        }
        initzsTui() {
            if (N.Instance.isOpenSDK()) {
                this.bottomTuiView.visible = !0;
                let e = N.Instance.tuiInfo;
                if (e && e.length > 0) {
                    let t = [].concat(e);
                    this.tuiList.visible = !0, this.tuiList.hScrollBarSkin = "", this.tuiList.updateDataSource(t), 
                    this.tuiList.selectEnable = !0, this.tuiList.renderHandler = new Laya.Handler(this, function(e, i) {
                        let n = i % t.length, s = t[n];
                        if (!s) return;
                        let a = e.getChildByName("itemImg"), o = e.getChildByName("itemName");
                        e.getChildByName("itemRed").visible = !1, a.skin = s.url, o.text = s.name, e.offAll(null), 
                        e.on(Laya.Event.CLICK, this, function() {
                            Le.navigateToMiniProgram(s, this.from, function(e) {
                                !e && N.Instance.isOpenSDK() && pe.Instance.openUIUnique(ce.FyhdTui2, {
                                    cb: function() {},
                                    from: E.JumpFail
                                });
                            });
                        });
                    });
                }
            }
        }
        startGame(e = _.stage, t = !0) {
            this.onPlayGameEvent(e);
        }
        playGame(e = 0) {
            e > 0 && (te.Instance.mData.tmpTrainSkin = e, te.Instance.sceneMgr.usePlayerSkin()), 
            te.Instance.mData.gameCount += 1, te.Instance.mData.goonCount = 0, this.showInfo(!0), 
            te.Instance.isPlay = !0, this.showGameBanner(), Se.IsWeChat() && this.initzsTui();
        }
        showGameBanner() {}
        onPlayGameEvent(e = _.stage, t = !0) {
            this.cameraComp.startGame(), te.Instance.hideStartView(), te.gameType = e, Se.nodeReport(R.Node5, {
                gLevel: "" + x.rp_data.stage
            }), F.addTag("开始游戏");
            let i = e => {
                this.playGame(e);
            };
            if (t && te.Instance.mData.isShowTrain && !y.Instance.m_trainNoTipDay && te.Instance.mData.canShowVideo) {
                let e = L.Instance.getRandomLockSkinId(0);
                if (e > 0 && 0 == te.Instance.mData.tmpTrainSkin && x.rp_data.gameCount % 3 == 2) return te.Instance.mData.isShowTrain = !1, 
                void pe.Instance.openUI(ce.TrainView, {
                    callBack: i,
                    skinId: e
                });
            }
            i(0);
        }
        onSkinChange(e) {
            te.Instance.mData.tmpTrainSkin = 0, te.Instance.sceneMgr.usePlayerSkin();
        }
        getUserSkinId() {
            let e = x.rp_data.skinIndex;
            return te.Instance.mData.tmpTrainSkin > 0 && (e = te.Instance.mData.tmpTrainSkin), 
            e;
        }
        static addTag(e) {
            {
                let t = u.isNewPlayer ? "1" : "0", i = x.rp_data.gameCount, n = {
                    aLevel: i,
                    new: t,
                    gc: x.rp_data.gameCount
                };
                u.isNewPlayer && (n.gLevel = i), Se.Instance.report(e, n);
            }
        }
        endStageGame() {
            te.Instance.mData.finish = !0, te.Instance.isPlay = !1, B.once(1e3, this, () => {
                this.overGameSettle(), this.showSettleView();
            });
        }
        showSettleView() {
            Se.IsTouTiao() && P.Instance.stop();
            let e = e => {
                let t = te.Instance.checkShowSignView(1);
                if (t || 0 == e) {
                    te.Instance.isPlay = !1;
                    let e = () => {
                        t && te.Instance.showSignView();
                    };
                    te.Instance.showStartView({
                        autoLeftTui: !0
                    }, null), this.initGameEvent({
                        isPlay: !1
                    }, e);
                } else 1 == e && this.initGameEvent({
                    isPlay: !0
                });
            };
            Laya.timer.once(500, this, () => {
                (() => {
                    x.rp_data.gameCount++;
                    let t = () => {
                        pe.Instance.openUI(ce.SettleView, {
                            callBack: e
                        });
                    };
                    N.Instance.isOpenSDK() && Se.IsWeChat() ? (ve.nextNumber(0, 100), N.Instance.showtuichu() && u.isNewPlayer ? pe.Instance.openUI(ce.FyhdTui3, {
                        cb: t,
                        from: E.AfterSettle
                    }) : t()) : t();
                })();
            });
        }
        overGameSettle() {
            Se.IsTouTiao() && P.Instance.pause(), te.Instance.isOver = !0, this.showInfo(!1);
        }
        overGameEvent(e = 1) {
            this.overGameSettle();
            let t = 50;
            Se.IsTouTiao() && (t = 600), Laya.timer.once(t, this, () => {
                T.Instance.playSound(V.Fail), T.Instance.vibrateLong(), Laya.timer.once(t, this, () => {
                    let t = e => {
                        te.Instance.mData.tmpTrainSkin = 0, e ? (Se.IsTouTiao() && P.Instance.resume(), 
                        te.Instance.isOver = !1, this.onSkipGameEvent(2)) : (te.Instance.isPlay = !1, te.Instance.showStartView({
                            autoLeftTui: !0
                        }, null), this.initGameEvent({
                            isPlay: !1
                        }));
                    };
                    x.rp_data.gameCount++, pe.Instance.openUI(ce.ReviewView, {
                        callBack: t,
                        state: e
                    });
                });
            });
        }
        resetGameInfo() {
            te.Instance.mData.finish = !1, te.Instance.isPlay = !1, te.Instance.isOver = !1;
        }
        initGameEvent(e, t = null) {
            if (te.Instance.mData.isShowTrain = !0, this.showInfo(e.isPlay), this.resetGameInfo(), 
            e.isPlay) {
                let e = () => {
                    t && t(), this.onPlayGameEvent(te.gameType);
                };
                this.loadLevelMap(e), this.cameraComp.init();
            } else this.loadLevelMap(t), this.cameraComp.init();
            te.collect();
        }
        savePowerToWX(e = !1) {}
        realSavePowerToWX() {}
        init(e) {
            e && (this.callBack = e.cb || null), this.initData(), this.initView(), this.registerEvent();
        }
        uninit() {
            this.unregisterEvent();
        }
        didShow() {}
        didHide() {}
        onRestartBtn() {
            te.Instance.isPlay && (T.Instance.playUIClick(), te.Instance.isOver = !1, te.Instance.sceneMgr.reStart());
        }
        onSkipGameEvent(e = 1) {
            e && (x.rp_data.stage < y.Instance.getMaxStage() && (x.rp_data.stage += 1), F.addTag("跳过关卡")), 
            x.saveData(!0, !0), this.initGameEvent({
                isPlay: !0
            });
        }
        onSkipBtn() {
            if (te.Instance.isPlay) {
                T.Instance.playUIClick();
                platform.getInstance().showReward(()=>{
                    this.onSkipGameEvent();
                })
            }
        }
        onBackBtn() {
            te.Instance.sceneMgr.onBackBtn();
        }
        onShowAdCompleted(e) {
            e === this.curShareADPos && (this.videoCallBack && this.videoCallBack(), this.videoCallBack = null);
        }
        registerEvent() {
            this.restartBtn.on(Laya.Event.CLICK, this, this.onRestartBtn), this.skipBtn.on(Laya.Event.CLICK, this, this.onSkipBtn), 
            this.backBtn.on(Laya.Event.CLICK, this, this.onBackBtn), p.Instance.on(o.SkinChange, this, this.onSkinChange), 
            p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        unregisterEvent() {
            this.restartBtn.off(Laya.Event.CLICK, this, this.onRestartBtn), this.skipBtn.off(Laya.Event.CLICK, this, this.onSkipBtn), 
            this.backBtn.off(Laya.Event.CLICK, this, this.onBackBtn), p.Instance.off(o.SkinChange, this, this.onSkinChange), 
            p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        initData() {
            te.Instance.mData.isShowTrain = !0, te.skinIndex = x.rp_data.skinIndex, this.loadGameScene();
        }
        moveMapPath(e, t) {
            te.Instance.sceneMgr.moveMapPath(e, t);
        }
        rayCheck(e, t = !1) {
            this.mainCamera.viewportPointToRay(this.point, this._ray);
            let i = null, n = [];
            this.mainScene.physicsSimulation.rayCastAll(this._ray, n);
            let s = 0, a = null;
            if (n.length) {
                let e = null;
                e || (e = this.findRaySp(n, "Snowplow")) && (s = 1), e || (e = this.findRaySp(n, "LogisticalSource")) && (s = 2), 
                e || (e = this.findRaySp(n, "LogisticalDestination")) && (s = 3), e || (e = this.findRaySp(n, "TerrainBase")) && (s = 4), 
                e || (e = this.findRaySp(n, "ColliderBlock")) && (s = 5), e && (a = e.collider.owner, 
                i = new Laya.Vector3(e.point.x, e.point.y, e.point.z));
            }
            return {
                pos: i,
                type: s,
                sp: a
            };
        }
        findRaySp(e, t) {
            for (let i = e.length - 1; i >= 0; i--) {
                let n = e[i];
                if (n.succeeded && -1 != n.collider.owner.name.indexOf(t)) return n;
            }
            return null;
        }
        loadLevelFinish() {
            this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)), 
            this.point = new Laya.Vector2();
        }
    }
    class G extends Laya.Script3D {
        constructor() {
            super(...arguments), this.collisionCallback = null, this.triggerCallback = null, 
            this.owerName = "", this.showLog2 = !1;
        }
        onDestroy() {
            Laya.timer.clearAll(this);
        }
        ownerSp() {
            return this.owner;
        }
        showLog() {}
        ownerTransform() {
            return this.owner ? this.owner.transform : null;
        }
        onTriggerEnter(e) {
            this.showLog2, e && this.triggerCallback && this.triggerCallback(e.owner, !1, this);
        }
        onTriggerStay(e) {
            this.showLog2;
        }
        onTriggerExit(e) {
            this.showLog2, e && this.triggerCallback && this.triggerCallback(e.owner, !0, this);
        }
        onCollisionEnter(e) {
            this.showLog2, e && e.other && this.collisionCallback && this.collisionCallback(e.other.owner, !1, e.contacts, this);
        }
        onCollisionStay(e) {
            this.showLog2;
        }
        onCollisionExit(e) {
            this.showLog2, e && e.other && this.collisionCallback && this.collisionCallback(e.other.owner, !0, e.contacts, this);
        }
    }
    class W {
        constructor() {
            this.cmp = null, this.type = 1, this.pts = [], this.finish = !1, this.reachEnd = !1, 
            this.color = null, this.midColor = null, this.lineW = 1.2, this.midLineW = .6, this.tmpPixels1 = null, 
            this.tmpPixels2 = null;
        }
        init(e, t) {
            this.cmp = e, this.type = t, this.color = new Laya.Vector4(137 / 255, 98 / 255, 59 / 255, 1), 
            this.midColor = e.color || new Laya.Vector4(1, 225 / 255, 0, 1);
        }
        clearPath() {
            this.pts = [], this.finish = !1, te.Instance.sceneMgr.drawPathClear(this), 2 == this.type && this.cmp.endCmp.showCircleEf(!1), 
            te.Instance.sceneMgr.updateFinishState(this, !0), this.tmpPixels1 = null, this.tmpPixels2 = null;
        }
        finishPath() {
            if (2 == this.type) {
                let e = this.cmp.endCmp.ownerSp().transform.position;
                this.addMovePos(e, !0, !0);
            }
            this.finish = !0, this.updateDraw();
            let e = te.Instance.sceneMgr.checkCarMove();
            te.Instance.sceneMgr.updateFinishState(this, !1), e || te.Instance.sceneMgr.saveTmpPixels();
        }
        static changeToLocalPos(e, t) {
            return new Laya.Vector3(t.x + e.x, t.y + e.y, t.z + e.z);
        }
        static calRotateByPt(e, t) {
            let i = Math.abs(t.y - e.y), n = Math.abs(t.x - e.x), s = 0, a = 180 * Math.atan(n / i) / Math.PI;
            return -(s = i < 1e-5 ? t.x - e.x > 0 ? -90 : 90 : n < 1e-5 ? t.y - e.y > 0 ? 0 : -180 : t.x - e.x > 0 ? t.y - e.y > 0 ? -a : -(180 - a) : t.y - e.y > 0 ? a : 180 - a);
        }
        static distancePt(e, t) {
            let i = Math.abs(e.x - t.x), n = Math.abs(e.y - t.y);
            return Math.sqrt(i * i + n * n);
        }
        static distanceInMin(e, t, i = .5) {
            let n = Math.abs(e.x - t.x), s = Math.abs(e.z - t.z);
            return n * n + s * s < i * i;
        }
        addMovePos(e, t = !0, i = !1) {
            if (this.pts.length > 0) {
                let n = this.pts[this.pts.length - 1];
                if (!W.distanceInMin(n, e) || i) {
                    let i = e.clone();
                    return this.pts.push(i), t && te.Instance.sceneMgr.drawPathPoint(this, n, i), !0;
                }
            }
            return !1;
        }
        startPos(e, t) {
            let i = this.cmp.ownerSp().transform.position;
            this.pts.push(i.clone()), this.addMovePos(e);
        }
        movePos(e, t) {
            Math.abs(e.x) > 10 || Math.abs(e.y) > 10 || Math.abs(e.z) > 10 || this.addMovePos(e);
        }
        updateDraw() {
            te.Instance.sceneMgr.drawAllPaths();
        }
    }
    class z {
        constructor() {
            this.type = 0, this.lineCapRound = !1, this.pixelsInfo = null, this.pixelsInfo1 = null, 
            this.pixelsInfo2 = null, this.width = 10, this.height = 20, this.pixelW = 500, this.pixelH = 1e3, 
            this.scale = 60, this.leftPos = null, this.themePixels = null, this.themeW = 512, 
            this.themeH = 512, this.moveX = 0, this.moveZ = 0;
        }
        clearInfo() {
            this.pixelsInfo = null, this.pixelsInfo1 = null, this.pixelsInfo2 = null;
        }
        showLayer(e, t, i = new Laya.Vector4(255, 255, 255, 255), n, s = .1, a = 0, o = 0) {
            this.moveX = o, this.moveZ = a, this.scale = z.s_textScale;
            let r = n.l, h = n.r, l = Math.abs(h - r), d = Math.abs(n.t - n.b), c = new Laya.Vector3(h - l / 2 + o, s, n.t - d / 2 + a);
            this.width = l, this.height = d, this.pixelW = Math.floor(this.width * this.scale), 
            this.pixelH = Math.floor(this.height * this.scale), this.color = i;
            let u = new Laya.Vector4(255, 255, 255, 0);
            if (u = i, 1 == this.type) {
                this.plane = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(l, d)), e.addChild(this.plane);
                let t = .5;
                c.y += t, this.plane.transform.localPosition = c, this.plane.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                this.leftPos = {
                    x: c.x + l / 2,
                    z: c.z + d / 2
                }, this.mat = new Laya.UnlitMaterial(), this.plane.meshRenderer.sharedMaterial = this.mat, 
                this.mat.renderMode = Laya.UnlitMaterial.RENDERMODE_CUTOUT, this.mat.alphaTest = !0, 
                this.mat.alphaTestValue = .2;
                {
                    this.downBox = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(l, d)), e.addChild(this.downBox);
                    let i = c.clone();
                    i.x -= .2, i.y -= t, this.downBox.transform.localPosition = i, this.downBox.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                    this.mat2 = new Laya.UnlitMaterial(), this.downBox.meshRenderer.sharedMaterial = this.mat2, 
                    this.mat2.renderMode = Laya.UnlitMaterial.RENDERMODE_CUTOUT, this.mat2.alphaTest = !0, 
                    this.mat2.alphaTestValue = .2, this.mat2.albedoColor = new Laya.Vector4(.8, .8, .8, 1);
                }
            } else this.plane = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(l, d)), 
            e.addChild(this.plane), this.plane.transform.localPosition = c, this.plane.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
            this.leftPos = {
                x: c.x + l / 2,
                z: c.z + d / 2
            }, this.mat = new Laya.UnlitMaterial(), this.plane.meshRenderer.sharedMaterial = this.mat, 
            this.mat.renderMode = Laya.UnlitMaterial.RENDERMODE_CUTOUT, this.mat.alphaTest = !0, 
            this.mat.alphaTestValue = .2;
        }
        setPixelsWithEdgesPath(e, t, i, n = !1) {
            t && (this.themeW = t.themeW, this.themeH = t.themeH, this.themePixels = t.themePixels);
            let s = this.pixelW, a = this.pixelH, o = this.color;
            {
                let e = Laya.Browser.createElement("canvas");
                var r = e.getContext("2d");
                e.width = s, e.height = a, r.lineWidth = 1, r.fillStyle = "rgb(" + o.x + "," + o.y + "," + o.z + ")", 
                r.strokeStyle = r.fillStyle, r.fillRect(0, 0, s, a), r.stroke(), 1 == this.type ? (this.texture2D = new Laya.Texture2D(s, a, 1, !1, n), 
                this.texture2D.loadImageSource(e), this.mat.albedoTexture = this.texture2D, this.mat2.albedoTexture = this.texture2D, 
                n && (this.pixelsInfo = z.newCreatePixels(this.texture2D.getPixels()))) : (this.texture2D = new Laya.Texture2D(s, a, 1, !1, n), 
                this.texture2D.loadImageSource(e), this.mat.albedoTexture = this.texture2D, n && (this.pixelsInfo = z.newCreatePixels(this.texture2D.getPixels()))), 
                0 == this.type || 1 == this.type ? (this.addThemePixels(), this.trimPixelsShapBounds(i)) : this.clearAll();
            }
        }
        clearAll() {
            let e = this.pixelH, t = this.pixelW, i = 4 * this.pixelW;
            for (let n = 0; n < e; n++) for (let e = 0; e < t; e++) this.pixelsInfo[4 * e + n * i + 3] = 0;
        }
        trimPixelsShapBounds(e) {
            let t = new Uint8Array(this.pixelW * this.pixelH), i = t.length;
            for (let e = 0; e < i; e++) t[e] = 0;
            let n = e.length;
            for (let i = 0; i < n; i++) {
                let n = e[i], s = this.width + n.x, a = this.pixelW - Math.floor((-s + this.leftPos.x) * this.scale), o = this.pixelH - Math.floor((-n.z + this.leftPos.z) * this.scale), r = Math.floor(n.w * this.scale) + a;
                for (let e = o - Math.floor(n.h * this.scale); e < o; e++) for (let i = a; i < r; i++) t[i + e * this.pixelW] = 1;
            }
            {
                let e = this.pixelW, i = this.pixelH, n = this.pixelsInfo, s = 4 * e, a = e;
                for (let o = 0; o < i; o++) for (let i = 0; i < e; i++) 0 == t[i + a * o] && (n[4 * i + s * o + 3] = 0);
            }
        }
        relacePixelsWithAlpha(e, t, i = 10) {
            let n = e.pixelsInfo, s = this.pixelW - Math.floor((-t.x + this.leftPos.x) * this.scale), a = this.pixelH - Math.floor((-t.z + this.leftPos.z) * this.scale), o = e.w, r = e.h, h = 4 * o, l = 4 * this.pixelW;
            for (let e = 0; e < r; e++) for (let t = 0; t < o; t++) {
                let o = t + s, r = e + a;
                o >= 0 && o < this.pixelW && r >= 0 && r < this.pixelH && n[4 * t + h * e + 3] > i && (this.pixelsInfo[4 * (t + s) + (e + a) * l + 3] = 0);
            }
        }
        relacePixelsWithAlpha2(e, t, i, n = 10, s = !0, a = !1) {
            let o = e.pixelsInfo, r = this.pixelW - Math.floor((-t.x + this.leftPos.x) * this.scale), h = this.pixelH - Math.floor((-t.z + this.leftPos.z) * this.scale);
            a && (r = 0, h = 0);
            let l = e.w, d = e.h, c = 4 * l, u = 4 * this.pixelW;
            for (let e = 0; e < d; e++) for (let t = 0; t < l; t++) {
                let a = t + r, l = e + h;
                if (a >= 0 && a < this.pixelW && l >= 0 && l < this.pixelH) {
                    let a = 4 * t + c * e, l = 4 * (t + r) + (e + h) * u;
                    s ? o[a + 3] > n && (i[l + 3] = 0) : o[a + 3] > n && (i[l + 0] = o[a + 0], i[l + 1] = o[a + 1], 
                    i[l + 2] = o[a + 2], i[l + 3] = o[a + 3]);
                }
            }
        }
        static trimRectPathPiexl(e, t, i = 0) {
            let n = Math.round(i * z.s_textScale), s = Math.round(e * z.s_textScale), a = Math.round(t * z.s_textScale), o = Laya.Browser.createElement("canvas"), r = o.getContext("2d");
            o.width = s, o.height = a, r.fillStyle = "rgb(0,0,0)", r.strokeStyle = r.fillStyle, 
            r.lineWidth = 1;
            {
                let e = s, t = a, i = n;
                (2 * i > e || 2 * i > t) && (i = 0), i > 0 ? (r.beginPath(0), r.arc(e - i, t - i, i, 0, Math.PI / 2), 
                r.lineTo(i, t), r.arc(i, t - i, i, Math.PI / 2, Math.PI), r.lineTo(0, i), r.arc(i, i, i, Math.PI, 3 * Math.PI / 2), 
                r.lineTo(e - i, 0), r.arc(e - i, i, i, 3 * Math.PI / 2, 2 * Math.PI), r.lineTo(e, t - i), 
                r.closePath(), r.fill()) : r.fillRect(0, 0, e, t);
            }
            let h = new Laya.Texture2D(s, a, 1, !1, !0);
            return h.loadImageSource(o), {
                pixelsInfo: z.newCreatePixels(h.getPixels()),
                w: s,
                h: a
            };
        }
        static trimCirclePathPiexl(e) {
            let t = Math.round(e * z.s_textScale), i = 2 * t, n = 2 * t, s = Laya.Browser.createElement("canvas"), a = s.getContext("2d");
            s.width = 2 * t, s.height = 2 * t, a.fillStyle = "rgb(0,0,0)", a.strokeStyle = a.fillStyle, 
            a.lineWidth = 1, a.beginPath(), a.arc(t, t, t, 0, 2 * Math.PI), a.fill(), a.closePath();
            let o = new Laya.Texture2D(i, n, 1, !1, !0);
            return o.loadImageSource(s), {
                pixelsInfo: z.newCreatePixels(o.getPixels()),
                w: i,
                h: n
            };
        }
        setSubPixels(e, t, i, n, s) {
            this.texture2D.setSubPixels(e, t, i, n, s);
        }
        reSetLayerPiexls() {
            this.pixelsInfo1 = z.newCreatePixels(this.pixelsInfo, this.pixelsInfo1), this.setSubPixels(0, 0, this.pixelW, this.pixelH, this.pixelsInfo);
        }
        addThemePixels() {
            let e = this.themePixels, t = this.pixelsInfo;
            if (!e) return;
            let i = this.pixelW, n = this.pixelH;
            for (let s = 0; s < i; ) {
                for (let a = 0; a < n; ) {
                    let o = this.themeW, r = this.themeH, h = !1;
                    s + o > i && (o = i - s, h = !0), a + r > n && (r = n - a, h = !0);
                    {
                        let n = 4 * i, h = 4 * this.themeW;
                        for (let i = 0; i < o; i++) for (let o = 0; o < r; o++) {
                            let r = 4 * i + h * o, l = 4 * (s + i) + n * (a + o);
                            t[l] = e[r], t[l + 1] = e[r + 1], t[l + 2] = e[r + 2], t[l + 3] = e[r + 3];
                        }
                    }
                    a += this.themeH;
                }
                s += this.themeW;
            }
        }
        static creatThemePixels(e) {
            if (e) {
                return {
                    themeW: e.width,
                    themeH: e.height,
                    themePixels: z.newCreatePixels(e.getPixels())
                };
            }
            return null;
        }
        changePixelPos(e) {
            return {
                x: Math.floor((e.x + this.leftPos.x) * this.scale),
                y: this.pixelH - Math.floor((-e.z + this.leftPos.z) * this.scale)
            };
        }
        calBorderRange(e, t) {
            t.l < e.x && (t.l = e.x), t.r > e.x && (t.r = e.x), t.t < e.z && (t.t = e.z), t.b > e.z && (t.b = e.z);
        }
        changeBorderRangePt(e, t) {
            return {
                x: Math.floor(-(e.x - t.l) * this.scale),
                y: Math.floor(-(e.z - t.t) * this.scale)
            };
        }
        drawPathPoint(e, t, i) {
            let n = !1;
            i || (n = !0, i = t);
            let s = [ t, i ];
            if (this.type, 0 == this.type) {
                {
                    let t = this.drawPathPoint2(e.lineW, s, n, e.color, !1);
                    this.relacePixelsPts(t.ret, t.position, t.clear);
                }
                {
                    let t = this.drawPathPoint2(e.midLineW, s, n, e.midColor, !1);
                    this.relacePixelsPts(t.ret, t.position, t.clear);
                }
            } else if (1 == this.type) {
                let t = this.drawPathPoint2(e.lineW, s, n, e.color, !0);
                this.relacePixelsPts(t.ret, t.position, t.clear);
            } else if (2 == this.type) {
                let t = this.drawPathPoint3(e.midLineW, s, n, e.midColor, !1);
                this.relacePixelsPts(t.ret, t.position, t.clear);
            }
            this.setSubPixels(0, 0, this.pixelW, this.pixelH, this.pixelsInfo);
        }
        relacePixelsPts(e, t, i) {
            this.relacePixelsWithAlpha2(e, t, this.pixelsInfo, 10, i), e.pixelsInfo = null;
        }
        drawlineCapRoundCicle(e, t, i, n) {
            let s = n / 2;
            e.beginPath(), e.arc(t, i, s, 0, 2 * Math.PI), e.fill(), e.closePath();
        }
        drawPathPoint3(e, t, i, n, s) {
            let a = new Laya.Vector4(200 / 255, 200 / 255, 200 / 255, 1), o = {
                l: -1e4,
                t: -1e4,
                r: 1e4,
                b: 1e4
            };
            for (let e = 0; e < t.length; e++) this.calBorderRange(t[e], o);
            o.l += e / 2, o.r -= e / 2, o.t += e / 2, o.b -= e / 2;
            let r = Math.abs(o.r - o.l), h = Math.abs(o.t - o.b), l = Math.round(r * this.scale), d = Math.round(h * this.scale), c = Math.floor(e * this.scale), u = Laya.Browser.createElement("canvas"), p = u.getContext("2d");
            u.width = l, u.height = d;
            {
                let e = n;
                if (p.lineWidth = c, p.fillStyle = "rgb(" + Math.floor(255 * e.x) + "," + Math.floor(255 * e.y) + "," + Math.floor(255 * e.z) + ")", 
                p.strokeStyle = p.fillStyle, i) {
                    let e = c / 2;
                    p.beginPath(), p.arc(l / 2, d / 2, e, 0, 2 * Math.PI), p.fill(), p.closePath();
                    let i = new Laya.Texture2D(l, d, 1, !1, !0);
                    i.loadImageSource(u);
                    let n = {
                        pixelsInfo: z.newCreatePixels(i.getPixels()),
                        w: l,
                        h: d
                    }, a = t[0].clone();
                    return a.x = o.r, a.z = o.b, {
                        ret: n,
                        position: a,
                        clear: s
                    };
                }
                {
                    p.beginPath(), this.lineCapRound && (p.lineCap = "round"), p.lineJoin = "round";
                    let e = this.changeBorderRangePt(t[0], o);
                    p.moveTo(e.x, e.y);
                    let i = 0, n = 0;
                    for (let e = 1; e < t.length; e++) {
                        let s = this.changeBorderRangePt(t[e], o);
                        p.lineTo(s.x, s.y), e == t.length - 1 && (i = s.x, n = s.y);
                    }
                    p.stroke(), p.closePath(), this.lineCapRound || (this.drawlineCapRoundCicle(p, e.x, e.y, p.lineWidth), 
                    this.drawlineCapRoundCicle(p, i, n, p.lineWidth));
                    {
                        let e = a;
                        p.lineWidth = Math.floor(.1 * this.scale), p.fillStyle = "rgb(" + Math.floor(255 * e.x) + "," + Math.floor(255 * e.y) + "," + Math.floor(255 * e.z) + ")", 
                        p.strokeStyle = p.fillStyle, p.beginPath();
                        let i = this.changeBorderRangePt(t[0], o);
                        p.moveTo(i.x, i.y);
                        let n = 0, s = 0;
                        for (let e = 1; e < t.length; e++) {
                            let i = this.changeBorderRangePt(t[e], o);
                            p.lineTo(i.x, i.y), e == t.length - 1 && (n = i.x, s = i.y);
                        }
                        p.stroke(), p.closePath(), this.lineCapRound || (this.drawlineCapRoundCicle(p, i.x, i.y, p.lineWidth), 
                        this.drawlineCapRoundCicle(p, n, s, p.lineWidth));
                    }
                    let r = new Laya.Texture2D(l, d, 1, !1, !0);
                    r.loadImageSource(u);
                    let h = {
                        pixelsInfo: z.newCreatePixels(r.getPixels()),
                        w: l,
                        h: d
                    }, c = t[0].clone();
                    return c.x = o.r, c.z = o.b, {
                        ret: h,
                        position: c,
                        clear: s
                    };
                }
            }
        }
        drawPathPoint2(e, t, i, n, s) {
            let a = {
                l: -1e4,
                t: -1e4,
                r: 1e4,
                b: 1e4
            };
            for (let e = 0; e < t.length; e++) this.calBorderRange(t[e], a);
            a.l += e / 2, a.r -= e / 2, a.t += e / 2, a.b -= e / 2;
            let o = Math.abs(a.r - a.l), r = Math.abs(a.t - a.b), h = Math.round(o * this.scale), l = Math.round(r * this.scale), d = Math.floor(e * this.scale), c = Laya.Browser.createElement("canvas"), u = c.getContext("2d");
            c.width = h, c.height = l;
            {
                let e = n;
                if (u.lineWidth = d, u.fillStyle = "rgb(" + Math.floor(255 * e.x) + "," + Math.floor(255 * e.y) + "," + Math.floor(255 * e.z) + ")", 
                u.strokeStyle = u.fillStyle, i) {
                    let e = d / 2;
                    u.beginPath(), u.arc(h / 2, l / 2, e, 0, 2 * Math.PI), u.fill(), u.closePath();
                    let i = new Laya.Texture2D(h, l, 1, !1, !0);
                    i.loadImageSource(c);
                    let n = {
                        pixelsInfo: z.newCreatePixels(i.getPixels()),
                        w: h,
                        h: l
                    }, o = t[0].clone();
                    return o.x = a.r, o.z = a.b, {
                        ret: n,
                        position: o,
                        clear: s
                    };
                }
                {
                    u.beginPath(), this.lineCapRound && (u.lineCap = "round"), u.lineJoin = "round";
                    let e = this.changeBorderRangePt(t[0], a);
                    u.moveTo(e.x, e.y);
                    let i = 0, n = 0;
                    for (let e = 1; e < t.length; e++) {
                        let s = this.changeBorderRangePt(t[e], a);
                        u.lineTo(s.x, s.y), e == t.length - 1 && (i = s.x, n = s.y);
                    }
                    u.stroke(), u.closePath(), this.lineCapRound || (this.drawlineCapRoundCicle(u, e.x, e.y, u.lineWidth), 
                    this.drawlineCapRoundCicle(u, i, n, u.lineWidth));
                    let o = new Laya.Texture2D(h, l, 1, !1, !0);
                    o.loadImageSource(c);
                    let r = {
                        pixelsInfo: z.newCreatePixels(o.getPixels()),
                        w: h,
                        h: l
                    }, d = t[0].clone();
                    return d.x = a.r, d.z = a.b, {
                        ret: r,
                        position: d,
                        clear: s
                    };
                }
            }
        }
        clearCanvas() {}
        drawAllPaths(e) {
            this.drawAllPathsDelay2(e);
        }
        drawAllPathsDelay(e) {
            let t = !1;
            if (this.pixelsInfo = z.newCreatePixels(this.pixelsInfo1, this.pixelsInfo), 0 == this.type) ; else if (1 == this.type) {
                t = !0;
                let i = this.drawAllPaths2(e, !1, t);
                i && this.relacePixelsPts(i.ret, i.position, i.clear);
            } else if (2 == this.type) {
                let i = this.drawAllPaths2(e, !0, t);
                i && this.relacePixelsPts(i.ret, i.position, i.clear);
            }
            this.setSubPixels(0, 0, this.pixelW, this.pixelH, this.pixelsInfo);
        }
        drawAllPaths2(e, t, i) {
            let n = e[0], s = n.lineW;
            t && (s = n.midLineW);
            let a = {
                l: -1e4,
                t: -1e4,
                r: 1e4,
                b: 1e4
            }, o = !1;
            for (let t = 0; t < e.length; t++) {
                let i = e[t].pts, n = i.length;
                if (n > 1) for (let e = 0; e < n; e++) this.calBorderRange(i[e], a), o = !0;
            }
            if (!o) return null;
            a.l += s / 2, a.r -= s / 2, a.t += s / 2, a.b -= s / 2;
            let r = Math.abs(a.r - a.l), h = Math.abs(a.t - a.b), l = Math.round(r * this.scale), d = Math.round(h * this.scale), c = Math.floor(s * this.scale), u = Laya.Browser.createElement("canvas"), p = u.getContext("2d");
            p.lineWidth = c, u.width = l, u.height = d;
            for (let t = 0; t < e.length; t++) {
                let i = e[t], n = i.pts, s = n.length;
                if (s > 1) {
                    let e = i.color;
                    p.fillStyle = "rgb(" + Math.floor(255 * e.x) + "," + Math.floor(255 * e.y) + "," + Math.floor(255 * e.z) + ")", 
                    p.strokeStyle = p.fillStyle;
                    {
                        p.beginPath(), this.lineCapRound && (p.lineCap = "round"), p.lineJoin = "round";
                        let e = this.changeBorderRangePt(n[0], a);
                        p.moveTo(e.x, e.y);
                        let t = 0, i = 0;
                        for (let e = 1; e < s; e++) {
                            let s = this.changeBorderRangePt(n[e], a);
                            p.lineTo(s.x, s.y), e == n.length - 1 && (t = s.x, i = s.y);
                        }
                        p.stroke(), p.closePath(), this.lineCapRound || (this.drawlineCapRoundCicle(p, e.x, e.y, p.lineWidth), 
                        this.drawlineCapRoundCicle(p, t, i, p.lineWidth));
                    }
                }
            }
            let g = new Laya.Texture2D(l, d, 1, !1, !0);
            g.loadImageSource(u);
            let m = {
                pixelsInfo: z.newCreatePixels(g.getPixels()),
                w: l,
                h: d
            }, w = new Laya.Vector3();
            return w.x = a.r, w.z = a.b, {
                ret: m,
                position: w,
                clear: i
            };
        }
        drawAllPathsDelay2(e) {
            Date.now();
            let t = this.pixelW, i = this.pixelH, n = Laya.Browser.createElement("canvas"), s = n.getContext("2d");
            n.width = t, n.height = i, s.clearRect(0, 0, t, i);
            let a = !1;
            0 == this.type ? (this.drawAllPaths3(s, e, !1), this.drawAllPaths3(s, e, !0)) : 1 == this.type ? (a = !0, 
            this.drawAllPaths3(s, e, !1)) : 2 == this.type && this.drawAllPaths3(s, e, !0);
            Date.now();
            let o = new Laya.Texture2D(t, i, 1, !1, !0);
            o.loadImageSource(n);
            Date.now();
            this.pixelsInfo2 = z.newCreatePixels(o.getPixels(), this.pixelsInfo2);
            let r = {
                pixelsInfo: this.pixelsInfo2,
                w: t,
                h: i
            }, h = new Laya.Vector3(-this.leftPos.x, 0, this.leftPos.z);
            Date.now();
            this.pixelsInfo = z.newCreatePixels(this.pixelsInfo1, this.pixelsInfo);
            Date.now();
            this.relacePixelsWithAlpha2(r, h, this.pixelsInfo, 10, a, !0), r.pixelsInfo = null;
            Date.now();
            this.setSubPixels(0, 0, this.pixelW, this.pixelH, this.pixelsInfo);
            Date.now();
        }
        drawAllPaths3(e, t, i) {
            for (let n = 0; n < t.length; n++) {
                let s = t[n], a = s.pts, o = s.color, r = s.lineW;
                if (i && (o = s.midColor, r = s.midLineW), e.lineWidth = r * this.scale, e.fillStyle = "rgb(" + Math.floor(255 * o.x) + "," + Math.floor(255 * o.y) + "," + Math.floor(255 * o.z) + ")", 
                e.strokeStyle = e.fillStyle, a.length > 1) {
                    e.beginPath(), this.lineCapRound && (e.lineCap = "round"), e.lineJoin = "round";
                    let t = this.changePixelPos(a[0]);
                    e.moveTo(t.x, t.y);
                    let i = 0, n = 0;
                    for (let t = 1; t < a.length; t++) {
                        let s = this.changePixelPos(a[t]);
                        e.lineTo(s.x, s.y), t == a.length - 1 && (i = s.x, n = s.y);
                    }
                    e.stroke(), e.closePath(), this.lineCapRound || (this.drawlineCapRoundCicle(e, t.x, t.y, e.lineWidth), 
                    this.drawlineCapRoundCicle(e, i, n, e.lineWidth));
                } else if (1 == a.length) {
                    let t = this.changePixelPos(a[0]), i = e.lineWidth / 2;
                    e.beginPath(), e.arc(t.x, t.y, i, 0, 2 * Math.PI), e.fill(), e.closePath();
                }
            }
        }
        static newCreatePixels(e, t = null) {
            t || (t = new Uint8Array(e.length));
            let i = e.length;
            for (let n = 0; n < i; n++) t[n] = e[n];
            return t;
        }
    }
    z.s_textScale = 60;
    class H extends G {
        constructor() {
            super(), this.tweenAni = null, this.shakeAni = null, this.scale1 = null, this.carSp = null, 
            this.car = null, this.speed = 5, this.resPath = [], this.stepIndex = 0, this.steping = !1, 
            this.reachEnd = !1, this.lived = !0, this.moveSp3D = null, this.tmpSp = null;
        }
        destroy() {
            super.destroy(), this.stopMove(), this.stopShake(!1);
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {}
        changeCarSkin(e = 0) {}
        init(e = null) {
            ee.assignSpByInfo(this.ownerSp(), e);
            {
                let e = this.ownerSp().getChildAt(0), t = e.getChildAt(0);
                this.carSp = t.getChildAt(t.numChildren - 1), this.car = t, this.tmpSp = new Laya.Sprite3D(), 
                e.addChild(this.tmpSp), this.tmpSp.transform.localPosition = new Laya.Vector3(0, 0, 0);
            }
            let t = this.car.addComponent(G);
            t.collisionCallback = ((e, t, i, n) => {
                te.Instance.sceneMgr.collisionCallback(e, t, i, n, this);
            }), t.triggerCallback = ((e, t, i) => {
                te.Instance.sceneMgr.triggerCallback(e, t, i, this);
            }), this.doShakeAni();
        }
        addTriggerCar() {
            let e = te.Instance.sceneMgr.addModelSp(this.car, "triggerSnowCar").addComponent(G);
            e.collisionCallback = ((e, t, i, n) => {
                te.Instance.sceneMgr.collisionCallback(e, t, i, n, this);
            }), e.triggerCallback = ((e, t, i) => {
                te.Instance.sceneMgr.triggerCallback(e, t, i, this);
            });
        }
        stopShake(e = !0) {
            this.shakeAni && (this.shakeAni.clear(), this.shakeAni = null), Laya.timer.clear(this, this.doShakeAni), 
            e && this.scale1 && this.ownerSp().transform.setWorldLossyScale(this.scale1);
        }
        doShakeAni(e = !0, t = !1) {
            let i = this.carSp;
            this.scale1 || (this.scale1 = i.transform.getWorldLossyScale().clone());
            let n = 1.03, s = new Laya.Vector3(this.scale1.x, this.scale1.x, this.scale1.x), a = new Laya.Vector3(this.scale1.x * n, this.scale1.x * n, this.scale1.x * n), o = e ? a : s, r = i.transform.getWorldLossyScale().clone();
            this.stopShake(!1), t ? (this.shakeAni = Laya.Tween.to(r, {
                x: o.x,
                y: o.y,
                z: o.z
            }, 100, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                this.shakeAni = null, Laya.timer.once(100, this, this.doShakeAni, [ !e, t ]);
            })), this.shakeAni.update = new Laya.Handler(this, () => {
                i.transform.setWorldLossyScale(r);
            })) : (i.transform.setWorldLossyScale(o), Laya.timer.once(100, this, this.doShakeAni, [ !e, t ]));
        }
        usePhysicsCollider(e = !0) {
            this.car.getComponent(Laya.Rigidbody3D).enabled = e;
            this.ownerSp().getComponent(Laya.PhysicsCollider).enabled = !e;
        }
        showBg(e = !0) {
            this.ownerSp().getChildByName("bg").active = e;
        }
        startMove(e = !0, t = []) {
            if (e) {
                if (this.stopShake(!1), this.showBg(!1), this.resPath = [], this.stepIndex = 0, 
                this.moveSp3D = this.car, t.length > 1) {
                    let e = this.moveSp3D.transform.position, i = this.moveSp3D.transform.localPosition, n = (new Laya.Vector3(i.x - e.x, i.y - e.y, i.z - e.z), 
                    null);
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        0 == e ? (this.resPath.push(i), n = i) : e == t.length - 1 ? (this.resPath.push(i), 
                        n = i) : W.distanceInMin(n, i, .5) || (this.resPath.push(i), n = i);
                    }
                }
                this.addTriggerCar(), this.stepFun();
            } else this.stopMove(), this.car.transform.localPosition = new Laya.Vector3(0, 0, 0);
        }
        stepFun() {
            if (this.lived && this.resPath && this.stepIndex < this.resPath.length) {
                this.steping = !0;
                let e = new Laya.Vector3(0, 0, 0);
                if (e.x = this.resPath[this.stepIndex].x, e.y = this.resPath[this.stepIndex].y, 
                e.z = this.resPath[this.stepIndex++].z, this.moveSp3D) {
                    let t = this.moveSp3D;
                    {
                        let i = t.transform.localPosition, n = e;
                        this.tmpSp.transform.position = e.clone(), n = this.tmpSp.transform.localPosition;
                        let s = new Laya.Point(i.x, i.z), a = new Laya.Point(n.x, n.z), o = 100;
                        o = W.distancePt(s, a) / this.speed * 1e3;
                        if (o > 100) {
                            let r = W.calRotateByPt(s, a) + 90;
                            t.transform.localRotationEuler = new Laya.Vector3(0, r, 0);
                            let h = i.clone();
                            e.y = h.y, this.stopMove(), this.tweenAni = Laya.Tween.to(h, {
                                x: n.x,
                                y: n.y,
                                z: n.z
                            }, o, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                                this.tweenAni = null, this.finishOneStep();
                            })), this.tweenAni.update = new Laya.Handler(this, () => {
                                t.transform.localPosition = h;
                            });
                        } else this.finishOneStep();
                    }
                }
            }
        }
        finishOneStep() {
            if (this.stepIndex == this.resPath.length) return this.steping = !1, this.reachEnd = !0, 
            void te.Instance.sceneMgr.checkCarFinish();
            this.stepFun();
        }
        doColllisionAni(e, t = 1, i = !0, n = 50) {
            this.stopMove();
            let s = this.car.transform.position.clone(), a = e.transform.position.clone();
            a.y = s.y;
            let o = s.clone();
            if (o.x = s.x + (a.x - s.x) / 2, o.z = s.z + (a.z - s.z) / 2, i) {
                let e = te.Instance.sceneMgr.gameSp, i = new Laya.Vector3(o.x, 2, o.z), n = "peng2";
                1 == t || 2 == t ? (n = "peng1", T.Instance.playSound(V.Crash)) : T.Instance.playSound(V.Hit);
                let s = te.Instance.sceneMgr.addEffect(e, n, i);
                Laya.timer.once(2e3, this, () => {
                    s.destroy();
                }), T.Instance.vibrateShort();
            }
            let r = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(s, a, r), Laya.Vector3.normalize(r, r), Laya.Vector3.scale(r, n, r), 
            r.y = 3 * n;
            let h = this.setSpKinematic(!1), l = r, d = new Laya.Vector3(.05, 0, 0);
            this.tmpSp.transform.position = o.clone(), d = this.tmpSp.transform.localPosition, 
            Laya.Vector3.normalize(d, d), Laya.Vector3.scale(d, .1, d), h.applyForce(l, d);
        }
        setSpKinematic(e) {
            let t = this.car.getComponent(Laya.Rigidbody3D);
            return t.isKinematic = e, t;
        }
        colllisionWithItem(e, t = 1, i = !0) {
            if (this.lived) {
                if (1 == t || 2 == t) this.lived = !1, this.doColllisionAni(e.car, t, i); else {
                    if (4 == t) return this.lived = !1, this.doColllisionAni(e.ownerSp(), t, i, 30), 
                    !0;
                    if (3 == t) return !e.doUpAni() && (this.lived = !1, this.doColllisionAni(e.ownerSp(), t, i, 30), 
                    !0);
                }
                return this.lived = !1, !0;
            }
            return !1;
        }
    }
    class K extends G {
        constructor() {
            super(), this.tweenAni = null, this.shakeAni = null, this.scale1 = null, this.car = null, 
            this.carSp = null, this.colorType = 1, this.endCmp = null, this.color = null, this.smokeSp = null, 
            this.speed = 5, this.resPath = [], this.stepIndex = 0, this.steping = !1, this.reachEnd = !1, 
            this.lived = !0, this.moveSp3D = null, this.tmpSp = null;
        }
        destroy() {
            super.destroy(), this.stopMove(), this.stopShake(!1);
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {}
        init(e = null, t = 1, i = 0) {
            this.colorType = t, ee.assignSpByInfo(this.ownerSp(), e), this.addCarSp(i), this.showLog();
        }
        changeCarSkin(e = 0) {
            this.addCarSp(e);
        }
        addCarSp(e = 0) {
            let t = this.ownerSp().getChildAt(0);
            t.removeChildren();
            let i = te.Instance.sceneMgr.getCarSpByIndex(e);
            t.addChild(i), i.transform.localPosition = new Laya.Vector3(0, 0, 0), i.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
            this.carSp = i.getChildAt(i.numChildren - 1), this.car = i, this.tmpSp = new Laya.Sprite3D(), 
            t.addChild(this.tmpSp), this.tmpSp.transform.localPosition = new Laya.Vector3(0, 0, 0), 
            this.changeMatColor(this.carSp, this.colorType, e), this.stopShake(), this.doShakeAni();
        }
        changeMatColor(e, t, i) {
            let n = e.meshRenderer.materials, s = [ "0" ], a = i + 1;
            3 == a || 16 == a ? s = [ "0", "3" ] : 14 == a || 22 == a ? s = [ "0", "6" ] : 17 == a ? s = [ "0", "4" ] : 10 == a ? s = [ "0", "7" ] : 8 == a || 19 == a || 20 == a ? s = [ "1" ] : 15 == a ? s = [ "0", "8" ] : 12 == a && (s = [ "0", "9" ]);
            let o = ee.getMatColorByType(t);
            for (let e = 0; e < s.length; e++) {
                let t = parseInt(s[e]);
                if (t >= 0 && t < n.length) {
                    n[t].albedoColor = o;
                }
            }
            this.color = o;
        }
        addTriggerCar() {
            let e = te.Instance.sceneMgr.addModelSp(this.car, "triggerCar").addComponent(G);
            e.collisionCallback = ((e, t, i, n) => {
                te.Instance.sceneMgr.collisionCallback(e, t, i, n, this);
            }), e.triggerCallback = ((e, t, i) => {
                te.Instance.sceneMgr.triggerCallback(e, t, i, this);
            });
        }
        stopShake(e = !0) {
            this.shakeAni && (this.shakeAni.clear(), this.shakeAni = null), Laya.timer.clear(this, this.doShakeAni), 
            e && this.scale1 && this.ownerSp().transform.setWorldLossyScale(this.scale1);
        }
        doShakeAni(e = !0, t = !1) {
            let i = this.carSp;
            this.scale1 || (this.scale1 = i.transform.getWorldLossyScale().clone());
            let n = 1.03, s = new Laya.Vector3(this.scale1.x, this.scale1.x, this.scale1.x), a = new Laya.Vector3(this.scale1.x * n, this.scale1.x * n, this.scale1.x * n), o = e ? a : s, r = i.transform.getWorldLossyScale().clone();
            this.stopShake(!1), t ? (this.shakeAni = Laya.Tween.to(r, {
                x: o.x,
                y: o.y,
                z: o.z
            }, 100, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                this.shakeAni = null, Laya.timer.once(100, this, this.doShakeAni, [ !e, t ]);
            })), this.shakeAni.update = new Laya.Handler(this, () => {
                i.transform.setWorldLossyScale(r);
            })) : (i.transform.setWorldLossyScale(o), Laya.timer.once(100, this, this.doShakeAni, [ !e, t ]));
        }
        usePhysicsCollider(e = !0) {
            this.car.getComponent(Laya.Rigidbody3D).enabled = e;
            this.ownerSp().getComponent(Laya.PhysicsCollider).enabled = !e;
        }
        showBg(e = !0) {
            this.ownerSp().getChildByName("bg").active = e;
        }
        showSmoke(e = !0) {
            if (e) {
                if (!this.smokeSp) {
                    let e = this.ownerSp().getChildAt(0).getChildAt(0);
                    this.smokeSp = te.Instance.sceneMgr.addEffect(e, "SmokePs"), this.smokeSp.particleSystem.play();
                }
            } else this.smokeSp && (this.smokeSp.destroy(), this.smokeSp = null);
        }
        startMove(e = !0, t = []) {
            if (e) {
                if (this.stopShake(!1), this.showSmoke(!0), this.showBg(!1), this.resPath = [], 
                this.stepIndex = 0, this.moveSp3D = this.car, t.length > 1) {
                    let e = this.moveSp3D.transform.position, i = this.moveSp3D.transform.localPosition, n = (new Laya.Vector3(i.x - e.x, i.y - e.y, i.z - e.z), 
                    null);
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        0 == e ? (this.resPath.push(i), n = i) : e == t.length - 1 ? (this.resPath.push(i), 
                        n = i) : W.distanceInMin(n, i, .5) || (this.resPath.push(i), n = i);
                    }
                }
                this.endCmp.hideEndSp(), this.endCmp.showCircleEf(!1), this.addTriggerCar(), this.stepFun();
            } else this.stopMove(), this.showSmoke(!1), this.car.transform.localPosition = new Laya.Vector3(0, 0, 0);
        }
        stepFun() {
            if (this.lived && this.resPath && this.stepIndex < this.resPath.length) {
                this.steping = !0;
                let e = new Laya.Vector3(0, 0, 0);
                if (e.x = this.resPath[this.stepIndex].x, e.y = this.resPath[this.stepIndex].y, 
                e.z = this.resPath[this.stepIndex++].z, this.moveSp3D) {
                    let t = this.moveSp3D;
                    {
                        let i = t.transform.localPosition, n = e;
                        this.tmpSp.transform.position = e.clone(), n = this.tmpSp.transform.localPosition;
                        let s = new Laya.Point(i.x, i.z), a = new Laya.Point(n.x, n.z), o = 100;
                        o = W.distancePt(s, a) / this.speed * 1e3;
                        if (o > 100) {
                            let r = W.calRotateByPt(s, a) + 90;
                            t.transform.localRotationEuler = new Laya.Vector3(0, r, 0);
                            let h = i.clone();
                            e.y = h.y, this.stopMove(), this.tweenAni = Laya.Tween.to(h, {
                                x: n.x,
                                y: n.y,
                                z: n.z
                            }, o, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                                this.tweenAni = null, this.finishOneStep();
                            })), this.tweenAni.update = new Laya.Handler(this, () => {
                                t.transform.localPosition = h;
                            });
                        } else this.finishOneStep();
                    }
                }
            }
        }
        finishOneStep() {
            if (this.stepIndex == this.resPath.length) return this.steping = !1, this.reachEnd = !0, 
            this.showSmoke(!1), this.endCmp.showEndEf(), te.Instance.sceneMgr.checkCarFinish(), 
            T.Instance.playSound(V.Target), void T.Instance.vibrateShort();
            this.stepFun();
        }
        doColllisionAni(e, t = 1, i = !0, n = 100) {
            this.stopMove();
            let s = this.car.transform.position.clone(), a = e.transform.position.clone();
            a.y = s.y;
            let o = s.clone();
            if (o.x = s.x + (a.x - s.x) / 2, o.z = s.z + (a.z - s.z) / 2, i) {
                let e = te.Instance.sceneMgr.gameSp, i = new Laya.Vector3(o.x, 2, o.z), n = "peng2";
                1 == t || 2 == t ? (n = "peng1", T.Instance.playSound(V.Crash)) : T.Instance.playSound(V.Hit);
                let s = te.Instance.sceneMgr.addEffect(e, n, i);
                Laya.timer.once(2e3, this, () => {
                    s.destroy();
                }), T.Instance.vibrateShort();
            }
            let r = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(s, a, r), Laya.Vector3.normalize(r, r), Laya.Vector3.scale(r, n, r), 
            r.y = 3 * n;
            let h = this.setSpKinematic(!1), l = r, d = new Laya.Vector3(.05, 0, 0);
            this.tmpSp.transform.position = o.clone(), d = this.tmpSp.transform.localPosition, 
            Laya.Vector3.normalize(d, d), Laya.Vector3.scale(d, .1, d), h.applyForce(l, d), 
            te.Instance.sceneMgr.stageFail(this);
        }
        setSpKinematic(e) {
            let t = this.car.getComponent(Laya.Rigidbody3D);
            return t.isKinematic = e, t;
        }
        colllisionWithItem(e, t = 1, i = !0) {
            if (this.lived) {
                if (1 == t || 2 == t) this.lived = !1, this.doColllisionAni(e.car, t, i); else {
                    if (4 == t) return this.lived = !1, this.doColllisionAni(e.ownerSp(), t, i, 50), 
                    !0;
                    if (3 == t) return !e.doUpAni() && (this.lived = !1, this.doColllisionAni(e.ownerSp(), t, i, 50), 
                    !0);
                }
                return this.lived = !1, !0;
            }
            return !1;
        }
    }
    class Y extends G {
        constructor() {
            super(), this.tweenAni = null, this.endSp = null, this.colorType = 1, this.carCmp = null, 
            this.circleEf = null;
        }
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {
            this.doRotationAni();
        }
        init(e = null, t = 1) {
            this.colorType = t, ee.assignSpByInfo(this.ownerSp(), e), this.endSp = this.ownerSp().getChildAt(0).getChildAt(0).getChildAt(0).getChildAt(0), 
            this.changeMatColor(this.endSp, t), this.doDownAni();
            let i = "c_" + this.getCAniName(t), n = te.Instance.sceneMgr.addEffect(this.ownerSp(), i);
            n.transform.setWorldLossyScale(new Laya.Vector3(.5, .5, .5)), n.transform.localPosition = new Laya.Vector3(0, .25, 0), 
            this.circleEf = n.getChildAt(1), this.showCircleEf(!1), this.showLog();
        }
        getCAniName(e) {
            let t = "red";
            return 1 == e ? t = "red" : 2 == e ? t = "yellow" : 3 == e ? t = "blue" : 4 == e && (t = "green"), 
            t;
        }
        changeMatColor(e, t) {
            let i = ee.getMatColorByType(t);
            e.meshRenderer.material.albedoColor = i;
        }
        doRotationAni() {
            this.endSp.parent.transform.rotate(new Laya.Vector3(0, 1, 0), !0, !1);
        }
        hideEndSp() {
            this.stopMove(), this.endSp.active = !1;
        }
        doDownAni(e = !0) {
            let t = new Laya.Vector3(0, 0, 0), i = new Laya.Vector3(-.25, -1, -.1), n = e ? i : t, s = this.ownerSp().getChildAt(0), a = s.transform.localPosition.clone();
            this.stopMove(), this.tweenAni = Laya.Tween.to(a, {
                x: n.x,
                y: n.y,
                z: n.z
            }, 2e3, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                this.tweenAni = null, Laya.timer.once(10, this, () => {
                    this.doDownAni(!e);
                });
            })), this.tweenAni.update = new Laya.Handler(this, () => {
                s.transform.localPosition = a;
            });
        }
        showCircleEf(e = !0) {
            this.circleEf.active = e;
        }
        showEndEf() {
            let e = "e_" + this.getCAniName(this.colorType), t = te.Instance.sceneMgr.addEffect(this.ownerSp(), e);
            t.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1)), t.transform.localPosition = new Laya.Vector3(0, .25, 0);
        }
    }
    class q extends G {
        constructor() {
            super(), this.tweenAni = null, this.canCheck = !0, this.glowSp = null;
        }
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {
            if (this.canCheck && (this.doRotationAni(), te.Instance.isPlay)) {
                let e = 1, t = this.ownerTransform().position, i = te.Instance.sceneMgr.carCmps;
                for (let n = 0; n < i.length; n++) {
                    let s = i[n].car.transform.position;
                    if (i[n].lived && s.x > t.x - e && s.x < t.x + e && s.z > t.z - e && s.z < t.z + e) {
                        this.eatCoin();
                        break;
                    }
                }
            }
        }
        init(e = null) {
            ee.assignSpByInfo(this.ownerSp(), e), this.glowSp = this.ownerSp().getChildByName("RubyGlow");
        }
        doRotationAni() {
            this.ownerSp().getChildAt(0).getChildAt(0).transform.rotate(new Laya.Vector3(0, 2, 0), !0, !1);
        }
        eatCoin() {
            this.ownerSp().getChildAt(0);
            te.Instance.sceneMgr.eatReward(0), te.Instance.sceneMgr.addEffect(this.ownerSp(), "CollectRuby"), 
            this.canCheck = !1, this.glowSp.destroy(), Laya.timer.once(30, this, () => {
                this.ownerSp().getChildAt(0).active = !1;
            });
        }
        anim(e) {
            let t = e.transform;
            Laya.Tween.to(t, {
                localPositionZ: t.localPositionZ + 10,
                localPositionX: t.localPositionX + 2
            }, 200);
            let i = e.transform.getWorldLossyScale();
            Laya.Tween.to(i, {
                x: 0,
                y: 0,
                z: 0
            }, 200, null, Laya.Handler.create(this, () => {
                te.Instance.sceneMgr.clearBoxItem(this);
            })).update = new Laya.Handler(this, () => {
                e.transform.setWorldLossyScale(i);
            });
        }
    }
    class X extends G {
        constructor() {
            super(), this.tweenAni = null, this.canCheck = !0;
        }
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {
            if (this.canCheck && (this.doRotationAni(), te.Instance.isPlay)) {
                let e = 1, t = this.ownerTransform().position, i = te.Instance.sceneMgr.carCmps;
                for (let n = 0; n < i.length; n++) {
                    let s = i[n].car.transform.position;
                    if (i[n].lived && s.x > t.x - e && s.x < t.x + e && s.z > t.z - e && s.z < t.z + e) {
                        this.eatCoin();
                        break;
                    }
                }
            }
        }
        init(e = null) {
            ee.assignSpByInfo(this.ownerSp(), e);
        }
        doRotationAni() {
            this.ownerSp().getChildAt(0).getChildAt(0).transform.rotate(new Laya.Vector3(1, 0, 0), !0, !1);
        }
        eatCoin() {
            this.ownerSp().getChildAt(0);
            te.Instance.sceneMgr.eatReward(1), te.Instance.sceneMgr.addEffect(this.ownerSp(), "CollectRuby"), 
            this.canCheck = !1, Laya.timer.once(30, this, () => {
                this.ownerSp().getChildAt(0).active = !1;
            });
        }
        anim(e) {
            let t = e.transform;
            Laya.Tween.to(t, {
                localPositionZ: t.localPositionZ + 10,
                localPositionX: t.localPositionX + 2
            }, 200);
            let i = e.transform.getWorldLossyScale();
            Laya.Tween.to(i, {
                x: 0,
                y: 0,
                z: 0
            }, 200, null, Laya.Handler.create(this, () => {
                te.Instance.sceneMgr.clearBoxItem(this);
            })).update = new Laya.Handler(this, () => {
                e.transform.setWorldLossyScale(i);
            });
        }
    }
    class J extends G {
        constructor() {
            super(), this.tweenAni = null, this.boxSp = null, this.isUp = !1, this.uping = !1;
        }
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {}
        init(e = null) {
            ee.assignSpByInfo(this.ownerSp(), e);
            let t = this.ownerSp();
            this.boxSp = t.getChildAt(t.numChildren - 1);
            let i = this.boxSp.addComponent(G);
            i.collisionCallback = ((e, t, i, n) => {
                te.Instance.sceneMgr.collisionCallback(e, t, i, n, this);
            }), i.triggerCallback = ((e, t, i) => {
                te.Instance.sceneMgr.triggerCallback(e, t, i, this);
            });
        }
        usePhysicsCollider(e = !0) {
            this.boxSp.getComponent(Laya.Rigidbody3D).enabled = e;
        }
        doUpAni() {
            return !this.isUp && (this.uping || (this.startUpAni(), this.doUpGroupLine()), !0);
        }
        doUpGroupLine() {
            let e = this.ownerSp().parent;
            if (-1 != e.name.indexOf("Line")) for (let t = 0; t < e.numChildren; t++) {
                e.getChildAt(t).getComponent(J).startUpAni();
            }
        }
        startUpAni() {
            if (this.isUp || this.uping) ; else {
                this.uping = !0;
                let e = this.boxSp, t = e.transform.localPosition.clone(), i = t.clone();
                i.y += 1, this.tweenAni = Laya.Tween.to(t, {
                    x: i.x,
                    y: i.y,
                    z: i.z
                }, 500, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                    this.isUp = !0, this.uping = !1, this.tweenAni = null;
                }), 500), this.tweenAni.update = new Laya.Handler(this, () => {
                    e.transform.localPosition = t;
                });
            }
        }
    }
    class j extends G {
        constructor() {
            super(), this.tweenAni = null, this.boxSp = null;
        }
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {}
        init(e = null) {
            ee.assignSpByInfo(this.ownerSp(), e);
            let t = this.ownerSp();
            this.boxSp = t.getChildAt(t.numChildren - 1);
        }
        usePhysicsCollider(e = !0) {
            this.boxSp.getComponent(Laya.Rigidbody3D).enabled = e;
        }
    }
    class Z extends G {
        constructor() {
            super(), this.tweenAni = null, this.boxSp = null;
        }
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {}
        init(e = null) {
            ee.assignSpByInfo(this.ownerSp(), e);
            let t = this.ownerSp();
            this.boxSp = t.getChildAt(t.numChildren - 1);
            let i = this.boxSp.addComponent(G);
            i.collisionCallback = ((e, t, i, n) => {
                te.Instance.sceneMgr.collisionCallback(e, t, i, n, this);
            }), i.triggerCallback = ((e, t, i) => {
                te.Instance.sceneMgr.triggerCallback(e, t, i, this);
            });
        }
        usePhysicsCollider(e = !0) {
            this.boxSp.getComponent(Laya.Rigidbody3D).enabled = e;
        }
    }
    class Q extends G {
        constructor() {
            super(), this.tweenAni = null, this.shapeBound = {
                x: 0,
                z: 0,
                w: 0,
                h: 0
            };
        }
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        onAwake() {}
        onUpdate() {}
        init(e = null) {
            ee.assignSpByInfo(this.ownerSp(), e);
            let t = this.ownerSp().transform.getWorldLossyScale(), i = this.ownerSp().transform.position;
            this.shapeBound.w = 10 * Math.abs(t.x), this.shapeBound.h = 10 * Math.abs(t.z), 
            this.shapeBound.x = i.x - this.shapeBound.w / 2, this.shapeBound.z = i.z + this.shapeBound.h / 2, 
            this.ownerSp().getChildAt(0).transform.localPositionX = 1 / t.x * -.2, this.showLog();
        }
    }
    class $ extends G {
        constructor() {
            super(), this.tweenAni = null, this.pt1 = null, this.pt2 = null;
        }
        onAwake() {}
        destroy() {
            super.destroy(), this.stopMove();
        }
        stopMove() {
            this.tweenAni && (this.tweenAni.clear(), this.tweenAni = null);
        }
        init(e, t, i) {
            this.pt1 = e, this.pt2 = t, this.pt1 && (this.pt1.y = i, this.ownerTransform().localPosition = new Laya.Vector3(this.pt1.x, this.pt1.y, this.pt1.z)), 
            this.pt2 && (this.pt2.y = i, this.showAniMove());
        }
        showAniMove(e = !1) {
            let t = this.ownerSp(), i = e ? this.pt2 : this.pt1, n = e ? this.pt1 : this.pt2;
            t.transform.localPosition = new Laya.Vector3(i.x, i.y, i.z);
            let s = t.transform.localPosition.clone();
            this.stopMove(), this.tweenAni = Laya.Tween.to(s, {
                x: n.x,
                y: n.y,
                z: n.z
            }, 2e3, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                this.tweenAni = null, Laya.timer.once(1e3, this, () => {
                    this.showAniMove(!1);
                });
            })), this.tweenAni.update = new Laya.Handler(this, () => {
                t.transform.localPosition = s;
            });
        }
        onUpdate() {}
    }
    class ee extends Laya.Script3D {
        constructor() {
            super(), this.mStage = 1, this.spCmps = [], this.carCmps = [], this.shapBounds = [], 
            this.layerView = null, this.layerView2 = null, this.showLine = !0, this.borderRange = {
                l: 0,
                t: 0,
                r: 0,
                b: 0
            }, this.levelInfo = null, this.bounesInfo = null, this.levelJson = null, this.isBonusLevel = !1, 
            this.stage = 0, this.levelTag = 0, this.bonusStep = 6, this.teststage = 0, this.mData = {
                fetchGoldC: 0,
                fetchKeyC: 0
            }, this.drawType = 0, this.paths = [], this.finishPaths = [], this.cPath = null, 
            this.themeTexInfo = {
                themeW: 0,
                themeH: 0,
                themePixels: null
            }, this.themeTexIndex = -1;
        }
        usePlayerSkin() {
            let e = te.gameUi.getUserSkinId(), t = x.Instance.getSkinIndexWithId(e);
            this.showPlayerSkin(t);
        }
        showPlayerSkin(e) {
            for (let t = 0; t < this.carCmps.length; t++) {
                this.carCmps[t].changeCarSkin(e);
            }
        }
        init(e, t, i, n = null) {
            this.mScene = e, this.gameSp = t, this.mCamera = i, n || (n = Laya.loader.getRes(U.Instance.threeDResDir + I.lh.models)), 
            this.modelsSp = n, this.levelInfo = Laya.loader.getRes(I.RES_level_Cfg), this.bounesInfo = Laya.loader.getRes(I.RES_bonus_Cfg), 
            Se.isLowDevice ? z.s_textScale = 45 : z.s_textScale = 60;
        }
        reStart() {
            this.startMove(!1), this.resetGame();
        }
        loadLevelMap(e, t) {
            if (this.teststage > 0 && (e = this.teststage), this.isBonusLevel = !1, e % this.bonusStep == 0 && (this.isBonusLevel = !0), 
            this.stage = e, this.levelTag = e, this.isBonusLevel) this.levelTag = ve.nextNumber(0, this.bounesInfo.length - 1); else {
                let e = 100;
                if (this.stage > e) {
                    let t = ve.nextNumber(1, e);
                    t % this.bonusStep == 0 && (t -= 1), 14 == this.levelTag && (this.levelTag = 64), 
                    this.levelTag = t;
                }
            }
            if (this.levelJson = null, this.isBonusLevel) this.levelJson = this.bounesInfo[this.levelTag].v; else {
                for (let e = 0; e < this.levelInfo.length; e++) {
                    let t = this.levelInfo[e];
                    t.t == this.levelTag && (this.levelJson = t.v);
                }
                if (!this.levelJson) {
                    let e = this.levelInfo[ve.nextNumber(0, this.levelInfo.length - 1)];
                    this.levelJson = e.v;
                }
            }
            return te.gameUi.cameraComp.cameraReset(), this.resetGame(t), !1;
        }
        getCarSpByIndex(e) {
            let t = this.modelsSp.getChildByName("cars");
            e >= t.numChildren && (e = 0);
            let i = t.getChildAt(e);
            return Laya.Sprite3D.instantiate(i);
        }
        onBackBtn() {
            if (!te.Instance.isBacking && this.finishPaths.length) {
                T.Instance.playUIClick(), this.finishPaths[this.finishPaths.length - 1].clearPath(), 
                this.reStoreTmpPixels();
            }
        }
        updateFinishState(e, t = !1) {
            this.cPath = null;
            let i = this.finishPaths.indexOf(e);
            i >= 0 && this.finishPaths.splice(i, 1), e.finish && this.finishPaths.push(e), this.updateBackBtn();
        }
        updateBackBtn() {
            let e = !!this.finishPaths.length;
            te.Instance.isBacking && (e = !1), te.gameUi.backBtn.disabled = !e;
        }
        resetGame(e = null) {
            this.mData.fetchGoldC = 0, this.mData.fetchKeyC = 0, te.Instance.isBacking = !1, 
            this.showTutorial(!1), this.gameSp.removeChildren(), this.spCmps = [], this.carCmps = [], 
            this.shapBounds = [], this.paths = [], this.finishPaths = [], this.cPath = null, 
            this.updateBackBtn(), this.layerView && (this.layerView.clearInfo(), this.layerView = null), 
            te.collect();
            this.loadSpWithJson(this.levelJson, () => {
                te.gameUi.loadLevelFinish(), te.gameUi.showTipTutorial(!0), e && e();
            });
        }
        update() {}
        static getMatColorByType(e) {
            let t = new Laya.Vector4(1, 0, 0, 1);
            return 1 == e ? t = new Laya.Vector4(184 / 255, 0, 0, 1) : 2 == e ? t = new Laya.Vector4(242 / 255, 225 / 255, 67 / 255, 1) : 3 == e ? t = new Laya.Vector4(0, 41 / 255, 161 / 255, 1) : 4 == e && (t = new Laya.Vector4(0, 174 / 255, 0, 1)), 
            t;
        }
        static creatOneSpByInfo(e) {
            let t = new Laya.Sprite3D();
            return ee.assignSpByInfo(t, e);
        }
        static assignSpByInfo(e, t) {
            return e.name = t.name, e.transform.localPosition = new Laya.Vector3(t.position[0], t.position[1], t.position[2]), 
            e.transform.localRotation = new Laya.Quaternion(t.rotation[0], t.rotation[1], t.rotation[2], t.rotation[3]), 
            e.transform.setWorldLossyScale(new Laya.Vector3(t.scale[0], t.scale[1], t.scale[2])), 
            e;
        }
        addEffect(e, t, i = null) {
            let n = this.modelsSp.getChildByName("effect").getChildByName(t);
            return n = e.addChild(Laya.Sprite3D.instantiate(n)), i && (n.transform.localPosition = i), 
            n;
        }
        addModelSp(e, t, i = null) {
            let n = this.modelsSp.getChildByName(t);
            return n = e.addChild(Laya.Sprite3D.instantiate(n)), i && (n.transform.localPosition = i), 
            n;
        }
        checkCarMove() {
            if (te.Instance.isBacking) return !1;
            let e = !0;
            for (let t = 0; t < this.paths.length; t++) if (2 == this.paths[t].type && !this.paths[t].finish) return e = !1, 
            !1;
            return !!e && (this.useItemPhysicsCollider(!0), this.startMove(!0), te.Instance.isBacking = !0, 
            !0);
        }
        checkCarFinish() {
            let e = !0;
            for (let t = 0; t < this.paths.length; t++) if (!(2 != this.paths[t].type || this.paths[t].cmp.reachEnd && this.paths[t].cmp.lived)) return void (e = !1);
            e && this.stageFinish();
        }
        eatReward(e = 0) {
            T.Instance.vibrateShort(), T.Instance.playSound(V.Gold), 0 == e ? this.mData.fetchGoldC += 1 : this.mData.fetchKeyC += 1;
        }
        stageFail(e) {
            te.Instance.isOver || (te.Instance.isOver = !0, Laya.timer.once(1e3, this, () => {
                te.gameUi.overGameEvent(2);
            }));
        }
        stageFinish() {
            te.Instance.mData.finish || (T.Instance.playSound(V.Win_success), this.addEffect(this.gameSp, "sahua"), 
            te.gameUi.endStageGame());
        }
        triggerCallback(e, t = !1, i = null, n = null) {
            let s = e.name;
            if (!t) {
                if (!te.Instance.isPlay) return;
                {
                    let a = i.ownerSp().name;
                    if (-1 != s.indexOf("triggerSnowCar")) if (-1 != a.indexOf("Car")) {
                        let t = e.parent, n = i.ownerSp();
                        if (t != n) {
                            let e = t.parent.parent, i = n.parent.parent;
                            this.checkTwoCarCollision(e, i, 1);
                        }
                    } else this.triggerCallbackOb(s, a, e, t, i, n); else if (-1 != a.indexOf("triggerCar")) if (-1 != s.indexOf("Car")) {
                        let t = e, n = i.ownerSp().parent;
                        if (t != n) {
                            let e = t.parent.parent, i = n.parent.parent;
                            this.checkTwoCarCollision(e, i, 2);
                        }
                    } else this.triggerCallbackOb(s, a, e, t, i, n); else this.triggerCallbackOb(s, a, e, t, i, n);
                }
            }
        }
        triggerCallbackOb(e, t, i, n = !1, s = null, a = null) {
            if (-1 != e.indexOf("ObstacleBollard")) {
                if (-1 != t.indexOf("triggerSnowCar") || -1 != t.indexOf("triggerCar")) {
                    let t = i.parent.getComponent(J), n = s.ownerSp().parent;
                    this.checkCollisionObstacle(e, n, t);
                }
            } else if (-1 != e.indexOf("ObstacleBrickWall") && (-1 != t.indexOf("triggerSnowCar") || -1 != t.indexOf("triggerCar"))) {
                let t = i.parent.getComponent(j), n = s.ownerSp().parent;
                this.checkCollisionObstacle(e, n, t);
            }
        }
        collisionCallback(e, t = !1, i = null, n = null, s = null) {
            let a = e.name;
            if (!t) {
                if (!te.Instance.isPlay) return;
                {
                    let t = n.ownerSp().name;
                    -1 != a.indexOf("SnowCar") ? this.checkCollisionObstacle(t, e, s) : -1 != a.indexOf("Car") && this.checkCollisionObstacle(t, e, s);
                }
            }
        }
        checkCollisionObstacle(e, t, i) {
            if (-1 != e.indexOf("ObstacleBollard")) {
                let e = t.parent.parent;
                this.getCarComp(e).cmp.colllisionWithItem(i, 3);
            } else if (-1 != e.indexOf("ObstacleBarrierBox")) ; else if (-1 != e.indexOf("ObstacleBrickWall")) {
                let e = t.parent.parent;
                this.getCarComp(e).cmp.colllisionWithItem(i, 4);
            }
        }
        getCarComp(e) {
            let t = 1, i = null;
            return -1 != e.name.indexOf("Snowplow") ? (t = 1, i = e.getComponent(H)) : (t = 2, 
            i = e.getComponent(K)), {
                cmp: i,
                type: t
            };
        }
        checkTwoCarCollision(e, t, i = 1) {
            let n = this.getCarComp(e), s = this.getCarComp(t), a = n.cmp, o = s.cmp, r = a.colllisionWithItem(o, s.type, !0);
            o.colllisionWithItem(a, n.type, !r);
        }
        useItemPhysicsCollider(e) {
            for (let t = 0; t < this.spCmps.length; t++) {
                let i = this.spCmps[t];
                i.usePhysicsCollider && i.usePhysicsCollider(e);
            }
        }
        startMove(e) {
            for (let t = 0; t < this.paths.length; t++) {
                let i = this.paths[t];
                1 != i.type && 2 != i.type || i.cmp.startMove(e, i.pts);
            }
        }
        addRubySp(e, t) {
            for (let i = 0; i < t.child.length; i++) {
                let n = t.child[i], s = n.name;
                if (-1 != s.indexOf("Ruby") || -1 != s.indexOf("Key")) {
                    let t = this.modelsSp.getChildByName("Ruby"), i = (t = e.addChild(Laya.Sprite3D.instantiate(t))).addComponent(q);
                    this.spCmps.push(i), i.init(n);
                } else if (-1 != s.indexOf("Key")) {
                    let t = this.modelsSp.getChildByName("Key"), i = (t = e.addChild(Laya.Sprite3D.instantiate(t))).addComponent(X);
                    this.spCmps.push(i), i.init(n);
                }
            }
        }
        addDestSp(e, t) {
            for (let i = 0; i < t.child.length; i++) {
                let n = t.child[i], s = n.name;
                {
                    let t = 0;
                    if (-1 != s.indexOf("Red") ? t = 1 : -1 != s.indexOf("Yellow") ? t = 2 : -1 != s.indexOf("Blue") ? t = 3 : -1 != s.indexOf("Green") && (t = 4), 
                    t > 0) {
                        let i = this.modelsSp.getChildByName("DestEnd"), s = (i = e.addChild(Laya.Sprite3D.instantiate(i))).addComponent(Y);
                        this.spCmps.push(s), s.init(n, t);
                    }
                }
            }
        }
        addSourceSp(e, t) {
            for (let i = 0; i < t.child.length; i++) {
                let n = t.child[i], s = n.name;
                if (-1 != s.indexOf("Snowplow")) {
                    let t = this.modelsSp.getChildByName("Snowplow"), i = (t = e.addChild(Laya.Sprite3D.instantiate(t))).addComponent(H);
                    i.init(n), this.spCmps.push(i), this.carCmps.push(i);
                } else {
                    let t = 0;
                    if (-1 != s.indexOf("Red") ? t = 1 : -1 != s.indexOf("Yellow") ? t = 2 : -1 != s.indexOf("Blue") ? t = 3 : -1 != s.indexOf("Green") && (t = 4), 
                    t > 0) {
                        let i = this.modelsSp.getChildByName("SourceCar"), s = (i = e.addChild(Laya.Sprite3D.instantiate(i))).addComponent(K);
                        this.spCmps.push(s), this.carCmps.push(s);
                        let a = te.gameUi.getUserSkinId(), o = x.Instance.getSkinIndexWithId(a);
                        s.init(n, t, o);
                    }
                }
            }
        }
        addObstaclesSp(e, t) {
            let i = (e, t) => {
                let i = t.name, n = this.modelsSp.getChildByName("Obstacles");
                if (-1 != i.indexOf("ObstacleTriggered")) {
                    let i = n.getChildByName("ObstacleTriggered"), s = (i = e.addChild(Laya.Sprite3D.instantiate(i))).addComponent(J);
                    this.spCmps.push(s), s.init(t);
                } else if (-1 != i.indexOf("ObstacleBrickWall")) {
                    let i = n.getChildByName("ObstacleBrickWall"), s = (i = e.addChild(Laya.Sprite3D.instantiate(i))).addComponent(j);
                    this.spCmps.push(s), s.init(t);
                } else if (-1 != i.indexOf("ObstacleBarrier1")) {
                    let i = n.getChildByName("ObstacleBarrierBox"), s = (i = e.addChild(Laya.Sprite3D.instantiate(i))).addComponent(Z);
                    this.spCmps.push(s), s.init(t);
                }
            }, n = [ "ObstacleTriggered", "ObstacleBrickWall", "ObstacleBarrier1", "ObstacleBarrier2" ];
            for (let s = 0; s < t.child.length; s++) {
                let a = t.child[s], o = a.name;
                if (this.inSubNames(o, n)) i(e, a); else {
                    let t = e.addChild(ee.creatOneSpByInfo(a)), s = a;
                    for (let e = 0; e < s.child.length; e++) {
                        let a = s.child[e], o = a.name;
                        this.inSubNames(o, n) && i(t, a);
                    }
                }
            }
        }
        addShap(e, t) {
            if (-1 != t.name.indexOf("TerrainBase")) {
                let i = this.modelsSp.getChildByName("TerrainBase"), n = (i = e.addChild(Laya.Sprite3D.instantiate(i))).addComponent(Q);
                this.spCmps.push(n), n.init(t), this.shapBounds.push(n.shapeBound);
            }
        }
        addShapSp(e, t) {
            let i = [ "TerrainBase" ];
            for (let n = 0; n < t.child.length; n++) {
                let s = t.child[n], a = s.name;
                if (this.inSubNames(a, i)) this.addShap(e, s); else {
                    let t = e.addChild(ee.creatOneSpByInfo(s)), n = s;
                    for (let e = 0; e < n.child.length; e++) {
                        let s = n.child[e], a = s.name;
                        this.inSubNames(a, i) && this.addShap(t, s);
                    }
                }
            }
        }
        calBorderRange(e) {
            this.borderRange.l > e.x && (this.borderRange.l = e.x), this.borderRange.r < e.x && (this.borderRange.r = e.x), 
            this.borderRange.t < e.z && (this.borderRange.t = e.z), this.borderRange.b > e.z && (this.borderRange.b = e.z);
        }
        doLoadImgae(e, t, i) {
            let n = e;
            if (this.themeTexInfo) return void (i && i(t, n, this.themeTexInfo));
            let s = new Laya.Browser.window.Image();
            s.crossOrigin = "", s.onload = (() => {
                let e = new Laya.Texture2D(s.width, s.height, 1, !1, !0);
                e.loadImageSource(s, !0), this.themeTexInfo = z.creatThemePixels(e), i && i(t, n, this.themeTexInfo);
            }), s.onerror = (() => {
                i && i(t, n, null);
            }), s.src = n;
        }
        addThemeShape(e) {
            for (let e = 0; e < this.shapBounds.length; e++) {
                let t = this.shapBounds[e];
                this.calBorderRange({
                    x: t.x,
                    z: t.z
                }), this.calBorderRange({
                    x: t.x + t.w,
                    z: t.z
                }), this.calBorderRange({
                    x: t.x,
                    z: t.z - t.h
                }), this.calBorderRange({
                    x: t.x + t.w,
                    z: t.z - t.h
                });
            }
            {
                let t = (Math.ceil(this.stage / 10) - 1) % 9;
                (t < 0 || t > 9) && (t = 0), this.stage % this.bonusStep == 0 && (t = 9), this.themeTexIndex != t && this.themeTexInfo && (this.themeTexInfo.themePixels = null, 
                this.themeTexInfo = null), this.themeTexIndex = t;
                let i = "res/theme/t" + t + ".jpg", n = 0;
                0 == t ? n = 0 : 7 == t ? n = 1 : 6 == t ? n = 2 : 3 == t ? n = 4 : 5 == t ? n = 3 : 1 != t && 2 != t && 4 != t && 8 != t && 9 != t || (n = 5), 
                te.gameUi.changeBg(n);
                let s = (t, i, n) => {
                    this.initLayerView(n), e && e();
                };
                !0 ? this.doLoadImgae(i, t, s) : s(t, null, null);
            }
        }
        relaceCicleBgPixels(e, t = 2) {
            let i = e.ownerSp(), n = z.trimCirclePathPiexl(t / 2), s = i.transform.position.clone();
            s.x -= t / 2, s.z -= t / 2, this.layerView.relacePixelsWithAlpha(n, s);
        }
        relaceObBoxBgPixels() {
            let e = this.getCmpByName2(Z);
            for (let t = 0; t < e.length; t++) {
                let i = 1.5, n = .2 * i, s = e[t].ownerSp(), a = Math.abs(s.transform.getWorldLossyScale().x) * i, o = Math.abs(s.transform.getWorldLossyScale().z) * i, r = z.trimRectPathPiexl(a, o, n), h = s.transform.position.clone();
                h.x -= a / 2, h.z -= o / 2, this.layerView.relacePixelsWithAlpha(r, h);
            }
        }
        relaceObWallBgPixels() {
            let e = this.getCmpByName2(j);
            for (let t = 0; t < e.length; t++) {
                let i = 2.52, n = .1 * i, s = e[t].ownerSp(), a = Math.abs(s.transform.getWorldLossyScale().x) * i, o = Math.abs(s.transform.getWorldLossyScale().z) * i;
                90 == s.transform.rotationEuler.y && (a = Math.abs(s.transform.getWorldLossyScale().z) * i, 
                o = Math.abs(s.transform.getWorldLossyScale().x) * i);
                let r = z.trimRectPathPiexl(a, o, n), h = s.transform.position.clone();
                h.x -= a / 2, h.z -= o / 2, this.layerView.relacePixelsWithAlpha(r, h);
            }
        }
        relaceObTriBgPixels() {
            let e = this.getCmpByName2(J);
            for (let t = 0; t < e.length; t++) {
                let i = 1.25, n = e[t].ownerSp(), s = Math.abs(n.transform.getWorldLossyScale().x) * i, a = z.trimCirclePathPiexl(s / 2), o = n.transform.position.clone();
                o.x -= s / 2, o.z -= s / 2, this.layerView.relacePixelsWithAlpha(a, o);
            }
        }
        relaceObBgPixels() {
            this.relaceObBoxBgPixels(), this.relaceObWallBgPixels(), this.relaceObTriBgPixels();
        }
        initLayerView(e) {
            let t = new Laya.Vector4(128, 0, 0, 255), i = new z();
            if (i.type = this.showLine ? 1 : 0, i.showLayer(this.gameSp, null, t, this.borderRange, .2, .1, 0), 
            i.setPixelsWithEdgesPath(null, e, this.shapBounds, !0), this.layerView = i, this.showLine) {
                let e = new z();
                e.type = 2, t = new Laya.Vector4(255, 255, 255, 0), e.showLayer(this.gameSp, null, t, this.borderRange, .19, .1, 0), 
                e.setPixelsWithEdgesPath(null, null, this.shapBounds, !0), this.layerView2 = e, 
                this.layerView2.reSetLayerPiexls();
            }
            {
                let e = this.getCmpByName2(K);
                for (let t = 0; t < e.length; t++) this.relaceCicleBgPixels(e[t], 2.6);
                let t = this.getCmpByName2(H);
                for (let e = 0; e < t.length; e++) this.relaceCicleBgPixels(t[e], 2.6);
                let i = this.getCmpByName2(Y);
                for (let e = 0; e < i.length; e++) this.relaceCicleBgPixels(i[e], 2.4);
                this.relaceObBgPixels();
            }
            this.layerView.reSetLayerPiexls();
        }
        findParentSpByName(e, t) {
            return -1 != e.name.indexOf(t) ? e : e.parent ? this.findParentSpByName(e.parent, t) : null;
        }
        moveMapPath(e, t = 1) {
            if (!te.Instance.isBacking) {
                if (3 == t) return this.cPath && 1 == this.cPath.type ? (this.finishPath(this.cPath), 
                this.cPath = null) : (this.clearCurrentPath(), this.reStoreTmpPixels()), void (this.drawType = 0);
                if (e && e.pos && e.sp) {
                    let i = e.type, n = e.pos, s = e.sp;
                    if (1 == t) 1 == i ? this.startDrawPot(n, s) : 2 == i && (this.tFingerComp && this.showTutorial(!1), 
                    this.startDrawCar(n, s)); else if (2 == t) {
                        if (3 == i && this.checkEndPath(n, s)) return;
                        if (5 == i) return void (this.drawType = 0);
                        this.continueDrawPath(n, s);
                    }
                }
            }
        }
        finishPath(e) {
            e.finishPath();
        }
        clearCurrentPath() {
            this.cPath && (this.cPath.clearPath(), this.cPath = null);
        }
        getPathByCmp(e) {
            for (let t = 0; t < this.paths.length; t++) {
                let i = this.paths[t];
                if (i.cmp == e) return i;
            }
            return null;
        }
        startDrawCar(e, t) {
            this.cPath && (this.cPath.clearPath(), this.cPath = null);
            let i = t.getComponent(K), n = this.getPathByCmp(i);
            if (n) {
                if (n.finish) {
                    if (ee.useTemp) return;
                    n.clearPath();
                }
                n.startPos(e, t), i.endCmp.showCircleEf(!0), this.cPath = n, this.drawType = 1;
            }
        }
        startDrawPot(e, t) {
            this.cPath && (this.cPath.clearPath(), this.cPath = null);
            let i = t.getComponent(H), n = this.getPathByCmp(i);
            n && (n.finish && n.clearPath(), n.startPos(e, t), this.cPath = n, this.drawType = 1);
        }
        continueDrawPath(e, t) {
            this.cPath && !this.cPath.finish && this.cPath.movePos(e, t);
        }
        checkEndPath(e, t) {
            if (this.cPath && 2 == this.cPath.type) {
                let e = t.getComponent(Y);
                if (this.cPath.cmp.endCmp == e) return this.cPath.finishPath(), this.cPath = null, 
                this.drawType = 0, !0;
            }
            return !1;
        }
        saveTmpPixels() {
            if (ee.useTemp && this.finishPaths.length) {
                let e = this.finishPaths[this.finishPaths.length - 1];
                e.tmpPixels1 = z.newCreatePixels(this.layerView.pixelsInfo, e.tmpPixels1), e.tmpPixels2 = z.newCreatePixels(this.layerView2.pixelsInfo, e.tmpPixels2);
            }
        }
        reStoreTmpPixels() {
            if (ee.useTemp) if (this.finishPaths.length) {
                let e = this.finishPaths[this.finishPaths.length - 1];
                if (e.tmpPixels1) {
                    let t = this.layerView;
                    t.pixelsInfo = z.newCreatePixels(e.tmpPixels1, t.pixelsInfo), t.setSubPixels(0, 0, t.pixelW, t.pixelH, t.pixelsInfo);
                }
                if (e.tmpPixels2) {
                    let t = this.layerView2;
                    t.pixelsInfo = z.newCreatePixels(e.tmpPixels2, t.pixelsInfo), t.setSubPixels(0, 0, t.pixelW, t.pixelH, t.pixelsInfo);
                }
            } else {
                {
                    let e = this.layerView;
                    e.pixelsInfo = z.newCreatePixels(e.pixelsInfo1, e.pixelsInfo), e.setSubPixels(0, 0, e.pixelW, e.pixelH, e.pixelsInfo);
                }
                {
                    let e = this.layerView2;
                    e.pixelsInfo = z.newCreatePixels(e.pixelsInfo1, e.pixelsInfo), e.setSubPixels(0, 0, e.pixelW, e.pixelH, e.pixelsInfo);
                }
            }
        }
        drawAllPaths() {
            ee.useTemp || (this.layerView.drawAllPaths(this.paths), this.showLine && this.layerView2.drawAllPaths(this.paths));
        }
        drawPathPoint(e, t, i) {
            this.layerView.drawPathPoint(e, t, i), this.showLine && this.layerView2.drawPathPoint(e, t, i);
        }
        drawPathClear(e) {
            if (!ee.useTemp) {
                let t = e.cmp.ownerSp().transform.position;
                this.layerView.drawPathPoint(e, t, null), this.showLine && this.layerView2.drawPathPoint(e, t, null), 
                this.layerView.drawAllPaths(this.paths), this.showLine && this.layerView2.drawAllPaths(this.paths);
            }
        }
        addColliderBlock() {
            let e = Math.abs(this.borderRange.r - this.borderRange.l), t = Math.abs(this.borderRange.t - this.borderRange.b), i = new Laya.Vector3(this.borderRange.l + e / 2, -.1, this.borderRange.t - t / 2), n = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(e + 30, .01, t + 30)), s = null;
            {
                let e = new Laya.BlinnPhongMaterial();
                e.albedoColor = new Laya.Vector4(1, 0, 0, 0), e.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, 
                s = e;
            }
            n.meshRenderer.material = s, n.name = "ColliderBlock", this.gameSp.addChild(n), 
            n.transform.position = i;
            {
                let i = n.addComponent(Laya.PhysicsCollider), s = new Laya.BoxColliderShape(e + 30, 1.11, t + 30);
                i.colliderShape = s, i.isTrigger = !0;
            }
        }
        initMapInfo(e = null) {
            this.addColliderBlock();
            let t = this.getCmpByName2(K), i = this.getCmpByName2(Y), n = this.getCmpByName2(H);
            if (t.length == i.length) {
                let e = (e, t) => {
                    for (let i = 0; i < e.length; i++) if (e[i].colorType == t) return e[i];
                    return null;
                };
                for (let n = 0; n < t.length; n++) {
                    let s = t[n], a = e(i, s.colorType);
                    a && (s.endCmp = a, a.carCmp = s);
                }
            }
            for (let e = 0; e < t.length; e++) {
                let i = new W();
                i.init(t[e], 2), this.paths.push(i);
            }
            for (let e = 0; e < n.length; e++) {
                let t = new W();
                t.init(n[e], 1), this.paths.push(t);
            }
            this.addThemeShape(e), Laya.timer.once(300, this, () => {
                this.useItemPhysicsCollider(!1);
            });
        }
        loadSpWithJson(e, t = null) {
            for (let t = 0; t < e.length; t++) {
                let i = e[t], n = i.name, s = this.gameSp.addChild(ee.creatOneSpByInfo(i));
                0 == n.indexOf("Source") ? this.addSourceSp(s, i) : 0 == n.indexOf("Dest") ? this.addDestSp(s, i) : 0 == n.indexOf("Ruby") ? this.addRubySp(s, i) : 0 == n.indexOf("Shape") ? this.addShapSp(s, i) : 0 == n.indexOf("Obstacles") && this.addObstaclesSp(s, i);
            }
            this.initMapInfo(t);
        }
        inSubNames(e, t) {
            for (let i = 0; i < t.length; i++) if (0 == e.indexOf(t[i])) return !0;
            return !1;
        }
        getCmpByName(e) {
            if (this.spCmps.length) for (let t of this.spCmps) if (t instanceof e) return t;
            return null;
        }
        getCmpByName2(e) {
            let t = [];
            if (this.spCmps.length) for (let i of this.spCmps) i instanceof e && t.push(i);
            return t;
        }
        getCmpSpByName(e) {
            let t = this.getCmpByName(e);
            return t ? t.owner : null;
        }
        clearBoxItem(e) {
            Laya.timer.clearAll(e), e.owner.removeSelf();
            let t = this.spCmps.indexOf(e);
            t >= 0 && this.spCmps.splice(t, 1);
        }
        showTutorial(e = !0) {
            if (e && !this.tFingerComp) {
                if (this.paths.length) {
                    let e = this.paths[0].cmp;
                    if (e && e.endCmp) {
                        let t = e.ownerSp().transform.position.clone(), i = e.endCmp.ownerSp().transform.position.clone(), n = "tFinger", s = this.modelsSp.getChildByName(n), a = (s = this.gameSp.addChild(Laya.Sprite3D.instantiate(s))).addComponent($);
                        a.init(t, i, 2), this.tFingerComp = a;
                    }
                }
            } else this.tFingerComp && (this.tFingerComp.ownerSp().destroy(), this.tFingerComp.destroy(), 
            this.tFingerComp = null);
        }
        testLoadText() {
            let e = "res3d/scene2/Conventional/Level", t = [];
            for (let i = 1; i < 102; i++) {
                let n = {
                    url: e + i + ".ls",
                    type: Laya.Loader.JSON
                };
                t.push(n);
            }
            Laya.loader.load(t, Laya.Handler.create(this, () => {
                let t = [];
                for (let i = 1; i < 102; i++) {
                    let n = e + i + ".ls", s = Laya.loader.getRes(n);
                    if (s) {
                        let e = this.getSimpleJsonForm(s.data.child);
                        t.push({
                            t: i,
                            v: e
                        });
                    }
                }
                JSON.stringify(t);
            }));
        }
        getJsonSpName(e) {
            return e.props.name;
        }
        trimMinValue(e) {
            return e.length > 0 && Math.abs(e[0]) < 1e-6 && (e[0] = 0), e.length > 1 && Math.abs(e[1]) < 1e-6 && (e[1] = 0), 
            e.length > 2 && Math.abs(e[2]) < 1e-6 && (e[2] = 0), e.length > 3 && Math.abs(e[3]) < 1e-6 && (e[3] = 0), 
            e;
        }
        addJsonItemByInfo(e, t) {
            let i = {};
            return i.name = e, i.child = [], i.position = this.trimMinValue(t.props.position), 
            i.rotation = this.trimMinValue(t.props.rotation), i.scale = this.trimMinValue(t.props.scale), 
            i;
        }
        addOneSubSps(e, t, i) {
            let n = this.addJsonItemByInfo(t, i);
            e.push(n);
            for (let e = 0; e < i.child.length; e++) {
                let t = i.child[e], s = this.addJsonItemByInfo(t.props.name, t);
                n.child.push(s);
            }
        }
        addTwoSubSps(e, t, i, n) {
            let s = this.addJsonItemByInfo(t, i);
            e.push(s);
            for (let e = 0; e < i.child.length; e++) {
                let t = i.child[e], a = this.addJsonItemByInfo(t.props.name, t);
                if (s.child.push(a), !this.inSubNames(a.name, n)) for (let e = 0; e < t.child.length; e++) {
                    let i = t.child[e], n = this.addJsonItemByInfo(i.props.name, i);
                    a.child.push(n);
                }
            }
        }
        getSimpleJsonForm(e) {
            let t = [];
            for (let i = 0; i < e.length; i++) {
                let n = e[i], s = n.props.name;
                0 == s.indexOf("Source") ? this.addOneSubSps(t, s, n) : 0 == s.indexOf("Dest") ? this.addOneSubSps(t, s, n) : 0 == s.indexOf("Ruby") ? this.addOneSubSps(t, s, n) : 0 == s.indexOf("Shape") ? this.addTwoSubSps(t, s, n, [ "TerrainBase" ]) : 0 == s.indexOf("Obstacles") && this.addTwoSubSps(t, s, n, [ "ObstacleTriggered", "ObstacleBrickWall", "ObstacleBarrier1", "ObstacleBarrier2" ]);
            }
            return t;
        }
    }
    ee.useTemp = !0, function(e) {
        e[e.stage = 0] = "stage", e[e.endless = 1] = "endless";
    }(_ || (_ = {}));
    class te {
        constructor() {
            this.loadAniView = null, this.sceneMgr = null, this.isPlay = !1, this.isBacking = !1, 
            this.isOver = !1, this.tipSign = !1, this.energyTick = 0, this.aiName = "", this.aiHead = "", 
            this.mData = {
                isShowTrain: !0,
                canShowVideo: !0,
                gameCount: 0,
                goonCount: 0,
                finish: !1,
                tmpTrainSkin: 0
            }, this.sceneMgr = new ee();
        }
        static get Instance() {
            return null === te._instance && (te._instance = new te()), te._instance;
        }
        static reStart() {}
        showStartView(e = {}, t = null) {
            pe.Instance.openUI(ce.StartView, e, !0, t);
        }
        hideStartView(e = {}) {
            pe.Instance.closeUI(ce.StartView);
        }
        update() {
            te.Instance.sceneMgr && te.Instance.sceneMgr.update();
        }
        showGoldView() {
            pe.Instance.openUI(ce.GoldView);
        }
        addGoldAndZuan(e, t) {
            x.rp_data.gold += e, x.rp_data.zuan += t, p.Instance.event(o.UpdateGoldEvent), x.saveData(!0);
        }
        addGold(e) {
            x.rp_data.gold += e, p.Instance.event(o.UpdateGoldEvent), x.saveData(!0);
        }
        showSignView() {
            pe.Instance.openUI(ce.SignView);
        }
        checkShowSignView(e = 0) {
            if (!y.Instance.signRed) return !1;
            let t = x.rp_data.gameCount;
            return 1 == e && u.isNewPlayer && t >= 3 && !this.tipSign ? (this.tipSign = !0, 
            !0) : 0 == e && !u.isNewPlayer;
        }
        static didShow() {}
        static didHide() {}
        static collect() {
            let e = Se.getPlatform();
            e && e.triggerGC && e.triggerGC();
        }
        showLoadAni(e = !0) {
            e ? (this.loadAniView || (this.loadAniView = new Laya.Box(), this.loadAniView.width = Laya.stage.width, 
            this.loadAniView.height = Laya.stage.height, Laya.stage.addChild(this.loadAniView), 
            this.loadAniView.zOrder = 1e5), this.loadAniView.visible = !0) : this.loadAniView && (this.loadAniView.visible = !1);
        }
        showGameView(e = null) {
            let t = ce.GameView;
            Laya.loader.load(t.res, Laya.Handler.create(null, () => {
                te.gameUi = new F(), te.gameUi.zOrder = -1, Laya.stage.addChild(te.gameUi);
                te.gameUi.init({
                    cb: () => {
                        this.showStartView({}, () => {
                            e && e(), this.checkShowSignView(0) && this.showSignView();
                        });
                    }
                }), te.gameUi.didShow(), Laya.timer.frameLoop(1, this, this.update);
            }), null);
        }
    }
    te._instance = null, te.gameUi = null, te.startView = null, te.gameType = _.stage, 
    te.skinIndex = 0, te.onHide = !1;
    class ie extends e.view.EggViewUI {
        constructor() {
            super(...arguments), this.count = 30, this.finish = !1, this.isFirst = !0, this.tapTimeArr = [], 
            this.totalCount = 0, this.sampleCount = 0, this.coin = 0, this.startTime = 0, this.maskHeight = 0, 
            this.banner = null, this.bannerPinY = 0, this.bannerTop = 0, this.styleTop = 0;
        }
        init(e) {
            this.regiestEvent(), this.count = 20 + Math.floor(10 * Math.random()), this.totalCount = this.count, 
            this.tapTimeArr = [], this.sampleCount = Math.floor(4 * Math.random() + 4), this.hitActionView.visible = !0, 
            this.hitInfoView.visible = !0, this.awardActionView.visible = !1, this.awardInfoView.visible = !1, 
            this.ani1.play(0, !0), this.ani5.play(0, !0);
        }
        uninit() {
            this.unregiestEvent();
        }
        regiestEvent() {
            this.hitBtn.on(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.on(Laya.Event.CLICK, this, this.clickWatchADBtn), 
            this.closeBtn.on(Laya.Event.CLICK, this, this.clickCloseBtn), p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted), 
            p.Instance.on(o.BannerPosChange, this, this.onADBannerChange), Laya.timer.frameLoop(1, this, this.updateMaskHeight);
        }
        unregiestEvent() {
            this.hitBtn.off(Laya.Event.CLICK, this, this.clickHitBtn), this.watchADBtn.off(Laya.Event.CLICK, this, this.clickWatchADBtn), 
            this.closeBtn.off(Laya.Event.CLICK, this, this.clickCloseBtn), p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted), 
            p.Instance.off(o.BannerPosChange, this, this.onADBannerChange), Laya.timer.clear(this, this.updateMaskHeight);
        }
        updateMaskHeight() {
            this.maskHeight -= 2, this.maskHeight < 0 && (this.maskHeight = 0), this.updateMask();
        }
        updateMask() {
            let e = this.maskHeight;
            this.maskView.graphics.clear(), this.maskView.graphics.drawRect(0, this.maskView.height - e, this.maskView.width, e, "#FF0000");
        }
        clickHitBtn() {
            this.isFirst && (this.startTime = new Date().getTime(), this.isFirst = !1), this.hitAni.visible = !0, 
            this.hitAni.play(0, !1), this.ani5.play(0, !1);
            let e = 0, t = !1, i = new Date().getTime();
            if (this.tapTimeArr.push(i), this.tapTimeArr.length < this.sampleCount ? (e = this.tapTimeArr.length / (i - this.tapTimeArr[0]), 
            e = Math.min(e, .001 * this.tapTimeArr.length)) : e = this.sampleCount / (i - this.tapTimeArr[this.tapTimeArr.length - this.sampleCount]), 
            e *= 125, t = (e = Math.min(1, e)) > .9, this.maskHeight = this.maskView.height * e, 
            this.updateMask(), T.Instance.playSound(V.Egg), !this.finish && (this.count--, 0 === this.count || t)) {
                let e = c.vGameInfo && c.vGameInfo.eggInfo.delay || 300;
                if (0 === this.count) {
                    e = (c.vGameInfo && c.vGameInfo.eggInfo.eDelay || 1500) + Math.floor(500 * Math.random());
                }
                this.finish = !0, Se.IsWeChat() && this.banner && this.banner.style && (this.banner.style.top = this.styleTop || 3e3), 
                this.banner && this.banner.show && this.banner.show(), Laya.timer.once(e, this, () => {
                    Laya.timer.clear(this, this.updateMaskHeight), this.hitInfoView.visible = !1, this.hitActionView.visible = !1, 
                    this.awardActionView.visible = !0, this.awardInfoView.visible = !0, this.ani1.stop(), 
                    this.ani2.play(0, !0), this.ani4.play(0, !0);
                    let e = new Date().getTime() - this.startTime, t = this.totalCount / e;
                    t = Math.max(t, .003), t = (1e3 * Math.min(t, .008) - 3) / 10 + .3, this.coin = Math.ceil(c.vGameInfo.eggInfo.gold * t), 
                    this.coinLabel.text = "" + this.coin, Se.Instance.report(R.hitedEgg, {
                        hitCount: this.totalCount - this.count,
                        totalCount: this.totalCount,
                        timeDiff: e / 1e3,
                        showBanner: null !== this.banner && void 0 !== this.banner,
                        heigthInfo: `${this.bannerPinY}-${this.bannerTop}-${this.stage.height}`
                    });
                }), Laya.timer.once(1e3, this, () => {
                    Ce.Instance.showBanner(ce.EggView.id, this.getPinY());
                });
            }
        }
        clickWatchADBtn() {
            this.curSharePos = de.eggAdVideo, Ce.Instance.showVideoOrShare(this.curSharePos);
        }
        clickCloseBtn() {
            te.Instance.addGold(this.coin), pe.Instance.showTips(`恭喜你获得了${this.coin}个钻石`), T.Instance.playSound(V.Gold), 
            this.closeView(), this.startLevel();
        }
        closeView() {
            pe.Instance.closeUI(ce.EggView);
        }
        onShowAdCompleted(e) {
            this.curSharePos === e && (this.coin = 5 * this.coin, te.Instance.addGoldAndZuan(this.coin, this.coin), 
            pe.Instance.showTips(`恭喜你获得了${this.coin}个钻石`), T.Instance.playSound(V.Gold), this.curSharePos = de.Unknow, 
            this.closeView(), this.startLevel());
        }
        static checkShowEggView() {
            return !!N.Instance.checkShowEggView() && (pe.Instance.openUI(ce.EggView), Se.Instance.report(R.showEgg), 
            !0);
        }
        onADBannerChange(e) {
            this.banner || e.ADPos === ce.EggView.id && e.BannerAD && (this.bannerTop = e.top, 
            this.banner = e.BannerAD, this.banner && this.banner.hide && this.banner.hide(), 
            Laya.timer.once(10, this, () => {
                this.banner && this.banner.hide && this.banner.hide();
            }), Laya.timer.once(20, this, () => {
                this.banner && this.banner.hide && this.banner.hide();
            }), Laya.timer.once(30, this, () => {
                this.banner && this.banner.hide && this.banner.hide();
            }), this.banner && this.banner.style ? (this.styleTop = this.banner.style.top, this.banner.style.top = 3e3) : this.styleTop = 3e3);
        }
        getPinY() {
            let e = this.hitBtn.localToGlobal(new Laya.Point(0, -10));
            return this.bannerPinY = e.y, e.y - Se.bannerMoveY() - 60;
        }
        startLevel() {
            te.gameUi.onPlayGameEvent();
        }
    }
    class ne extends e.loadview.LoadingViewUI {
        constructor() {
            super(...arguments), this.loadSubpackage = !1, this.loadCompleted = !1, this.retryCount = 0;
        }
        closeLoadingView() {
            N.Instance.valueuser(), Laya.Scene.close(this.url);
        }
        showMainView() {
            let e = () => {
                this.closeLoadingView();
            };
            platform.getInstance().cargamesstartup("Snow-Park-Master",()=>{
                let cargames     = new Laya.Image();
                cargames.scale(0.8,0.8);
                cargames.skin    = "common/cargames.png";
                cargames.centerX = 0;
                cargames.bottom  = 10;
                cargames.zOrder  = 2e3;
                cargames.on(Laya.Event.MOUSE_DOWN,cargames,()=>{platform.getInstance().navigate("GAME","LOGO")})
                Laya.stage.addChild(cargames);
                window.cargames  = cargames;
                te.Instance.showGameView(e);
            })
          
        }
        onLoadCompleted() {
            this.loadCompleted = !0;
            let e = x.Instance.logined;
            Se.Instance.setLoadingProgress(100);

            e ? this.showMainView() : x.Instance.loginError && this.showReTryBtn();
        }
        userLoginFinish(e) {
            e ? this.onStart() : this.loadCompleted && this.showReTryBtn();
        }
        showReTryBtn() {
            this.retryCount > 0 ? Laya.timer.once(1e3, this, () => {
                this.retryCount--, window.GameMain.doLoginAction();
            }) : (x.Instance.logined = !0, A.Instance.sessionID.length || (A.Instance.sessionID = x.Instance.user.session_key), 
            x.readDataInfo(null), this.onStart());
        }
        onStart() {
            this.loadCompleted && (x.Instance.logined ? this.showMainView() : x.Instance.loginError && window.GameMain && window.GameMain.doLoginAction());
        }
        onAwake() {}
        onOpened(e) {
            this.init(e);
        }
        onClosed() {
            this.uninit();
        }
        init(e) {
            this.loadSubpackage = e.loadSubpackage || !1, this.registerEvent(), this.updateProgress(0);
        }
        uninit() {
            this.unregisterEvent();
        }
        registerEvent() {
            p.Instance.on(o.ResLoadProgress, this, this.onRefreshProgress), p.Instance.on(o.StartLoadFinish, this, this.onLoadCompleted), 
            p.Instance.on(o.userLoginFinish, this, this.userLoginFinish), p.Instance.on(o.SubpackageLoadProgress, this, this.onSubpackageLoadProgress);
        }
        unregisterEvent() {
            p.Instance.off(o.ResLoadProgress, this, this.onRefreshProgress), p.Instance.off(o.StartLoadFinish, this, this.onLoadCompleted), 
            p.Instance.off(o.userLoginFinish, this, this.userLoginFinish), p.Instance.off(o.SubpackageLoadProgress, this, this.onSubpackageLoadProgress);
        }
        onRefreshProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1), this.loadSubpackage ? this.updateProgress(.5 + e / 2) : this.updateProgress(e);
        }
        onSubpackageLoadProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1), this.updateProgress(e / 2);
        }
        updateProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1), this.loadingLabel.text = (100 * e).toFixed(0) + "%", 
            this.progressBar.value = e, Se.Instance.setLoadingProgress((100 * e).toFixed(0));
        }
    }
    class se {
        constructor() {
            this.roleSpPos = null;
        }
        uninit() {
            this.removeModels(), Laya.timer.clear(this, this.showAni);
        }
        removeModels() {
            this.mainScene && (this.mainScene.destroy(), this.mainScene = null);
        }
        showModel(e) {
            let t = x.Instance.getSkinIndexWithId(e);
            if (this.gameSp) {
                this.roleSp && (this.roleSp.destroy(), this.roleSp = null), this.roleSp = this.gameSp.addChild(te.Instance.sceneMgr.getCarSpByIndex(t)), 
                this.roleSp.transform.position = this.roleSpPos, this.roleSp.transform.rotationEuler = new Laya.Vector3(0, 80, 0);
                let e = .8;
                this.roleSp.transform.setWorldLossyScale(new Laya.Vector3(e, e, e)), Laya.timer.clear(this, this.showAni), 
                this.showAni(), Laya.timer.loop(100, this, this.showAni);
            }
        }
        showAni() {
            this.roleSp.transform.rotate(new Laya.Vector3(0, .04, 0), !1, !0);
        }
        init(e, t, i = new Laya.Vector3(0, 1.2, 4)) {
            if (!this.mainScene) {
                let n = new Laya.Scene3D(), s = new Laya.Camera();
                {
                    let e = new Laya.DirectionLight();
                    n.addChild(e), n.addChild(s), s.fieldOfView = 60, s.nearPlane = .3, s.farPlane = 1e3, 
                    s.orthographic = !0, s.orthographicVerticalSize = 10, s.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, 
                    s.name = "Main Camera";
                    let t = new Laya.Sprite3D();
                    n.addChild(t), t.name = "game";
                }
                let a = n;
                e.addChild(a), this.mainScene = a, this.mainCamera = s, this.mainCamera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, 
                this.mainCamera.transform.localPosition = i, this.mainCamera.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                let o = a.getChildByName("game");
                this.gameSp = o;
                {
                    let t = 750 / Laya.stage.width, i = 1334 / Laya.stage.height, n = new Laya.Vector3(0, 0, 0), a = new Laya.Vector3(0, 0, 0), o = new Laya.Vector3(0, 0, 0);
                    s.convertScreenCoordToOrthographicCoord(o, n), o.setValue(t, i, 0), s.convertScreenCoordToOrthographicCoord(o, a);
                    let r = new Laya.Vector2(a.x - n.x, a.y - n.y), h = e, l = h.localToGlobal(new Laya.Point(h.width / 2, h.height / 2));
                    this.roleSpPos = new Laya.Vector3((l.x - Laya.stage.width / 2 + s.transform.position.x) * r.x, (l.y - Laya.stage.height / 2 + s.transform.position.y) * r.y, 0);
                }
                this.roleSp || this.showModel(t);
            }
        }
    }
    var ae, oe, re, he, le, de;
    class ce {}
    ce.GameView = {
        id: 0,
        cls: F,
        res: [ {
            url: "view/GamePanelrp.json",
            type: Laya.Loader.JSON
        }, {
            url: "view/StartPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.LoadingView = {
        id: 1,
        cls: ne,
        res: null
    }, ce.StartView = {
        id: 2,
        cls: class extends e.view.StartPanelrpUI {
            constructor() {
                super(...arguments), this.btnTimeLine = null, this.lastUpTime = 0, this.videoCallBack = null, 
                this.userInfoTag = 0, this.gameShowed = !0;
            }
            init(e) {
                this.initView(), this.registerEvent(), te.startView = this;
            }
            uninit() {
                this.unregisterEvent(), te.startView = null;
            }
            didShow() {
                this.gameShowed = !0, this.hidenAllWXInfoButton(!1), this.updateRedPoint();
            }
            didHide() {
                this.gameShowed = !1, this.hidenAllWXInfoButton(!0);
            }
            onUpdateGoldEvent() {
                this.goldLab1.text = x.rp_data.gold;
            }
            onGoldBoxClick() {
                T.Instance.playUIClick(), pe.Instance.openUI(ce.GoldView);
            }
            showAllWXInfoButton() {}
            hidenAllWXInfoButton(e, t = !1) {}
            updateRedPoint() {
                let e = x.rp_data.gameCount;
                this.signBtn.visible = e > 0, this.signRed.visible = y.Instance.signRed;
            }
            onSignBtnClick() {
                T.Instance.playUIClick(), te.Instance.showSignView();
            }
            onSkinBtnClick() {
                T.Instance.playUIClick(), pe.Instance.openUI(ce.SkinView);
            }
            initView() {
                 N.Instance.shouwmoresuijibtn() && (
                this.ani2.play(0, !0));
                let e = x.rp_data.stage;
                this.onUpdateGoldEvent(), this.stageLab.text = "LEVEL:" + e , this.bottomBox.bottom = 0;
            }
            onShortBtn() {
                Se.installShortCut(!0);
            }
            onStartBtnClick0() {
                T.Instance.playUIClick();
                platform.getInstance().showInterstitial(()=>{
                    te.gameUi.startGame(_.stage);
                })
            }
            onRank() {
                T.Instance.playUIClick(), this.onClickRankBtn();
            }
            onShareBtnClick() {
                T.Instance.playUIClick(), Ce.Instance.showVideoOrShare(de.HomeShare);
            }
            onSetBtnClick() {
                T.Instance.playUIClick(), pe.Instance.openUI(ce.SettingView);
            }
            onShowAdCompleted(e) {
                e === this.curShareADPos && (this.videoCallBack && this.videoCallBack(), this.videoCallBack = null);
            }
            onClickRankBtn() {}
            onRankBtnClick() {}
            userLoginFinish(e) {
                if (e) {
                    if (!this.gameShowed) return;
                    0 == this.userInfoTag && this.onRankBtnClick();
                }
            }
            registerEvent() {
                this.startBox.on(Laya.Event.MOUSE_DOWN, this, this.onStartBtnClick0), 
                this.setBtn.on(Laya.Event.CLICK, this, this.onSetBtnClick), 
                this.signBtn.on(Laya.Event.CLICK, this, this.onSignBtnClick), 
                this.skinBtn.on(Laya.Event.CLICK, this, this.onSkinBtnClick), 
                this.goldBox1.on(Laya.Event.CLICK, this, this.onGoldBoxClick), 
                p.Instance.on(o.UpdateGoldEvent, this, this.onUpdateGoldEvent), p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.on(o.userLoginFinish, this, this.userLoginFinish);
            }
            onMoreBtnClick() {
                T.Instance.playUIClick(), pe.Instance.openUI(ce.FyhdTui2, {
                    cb: function() {},
                    from: E.HomeMoreGame
                });
            }
            unregisterEvent() {
                this.startBox.off(Laya.Event.MOUSE_DOWN, this, this.onStartBtnClick0), 
                this.setBtn.off(Laya.Event.CLICK, this, this.onSetBtnClick), 
                this.signBtn.off(Laya.Event.CLICK, this, this.onSignBtnClick), this.skinBtn.off(Laya.Event.CLICK, this, this.onSkinBtnClick), 
                this.goldBox1.off(Laya.Event.CLICK, this, this.onGoldBoxClick), 
                p.Instance.off(o.UpdateGoldEvent, this, this.onUpdateGoldEvent), p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.off(o.userLoginFinish, this, this.userLoginFinish);
            }
            initzsTui() {
                if (N.Instance.isOpenSDK()) {
                    this.bottomTuiView.visible = !0;
                    let e = N.Instance.tuiInfo;
                    if (e && e.length > 0) {
                        let t = [].concat(e);
                        this.tuiList.visible = !0, this.tuiList.hScrollBarSkin = "", this.tuiList.updateDataSource(t), 
                        this.tuiList.selectEnable = !0, this.tuiList.renderHandler = new Laya.Handler(this, function(e, i) {
                            let n = i % t.length, s = t[n];
                            if (!s) return;
                            let a = e.getChildByName("itemImg"), o = e.getChildByName("itemName");
                            e.getChildByName("itemRed"), a.skin = s.url, o.text = s.name, e.offAll(null), e.on(Laya.Event.CLICK, this, function() {
                                Le.navigateToMiniProgram(s, this.from, function(e) {
                                    !e && N.Instance.isOpenSDK() && pe.Instance.openUIUnique(ce.FyhdTui2, {
                                        cb: function() {},
                                        from: E.JumpFail
                                    });
                                });
                            });
                        });
                    }
                }
            }
        },
        res: [ {
            url: "view/StartPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.TrainView = {
        id: 3,
        cls: class extends e.view.TrainPanelrpUI {
            constructor() {
                super(...arguments), this.callBack = null, this.videoCallBack = null, this.skinId = 0, 
                this.goldAni = null, this.skinPlayer3d = null;
            }
            init(e) {
                e && (this.callBack = e.callBack || null, this.skinId = e.skinId || 0), this.initView(), 
                this.registerEvent();
            }
            removeModels() {
                this.skinPlayer3d && (this.skinPlayer3d.uninit(), this.skinPlayer3d = null);
            }
            uninit() {
                this.removeModels(), this.unregisterEvent(), this.goldAni && (this.goldAni.destroy(), 
                this.goldAni = null);
            }
            initView() {
                let e = this.lightImage;
                this.goldAni = new Laya.TimeLine(), this.goldAni.to(e, {
                    rotation: 360
                }, 8e3), this.goldAni.play(0, !0), this.skinPlayer3d || (this.skinPlayer3d = new se(), 
                this.skinPlayer3d.init(this.itemBox, this.skinId, new Laya.Vector3(0, .5, 4)));
            }
            onTipBtnImg() {
                T.Instance.playUIClick(), 0 == y.Instance.m_trainNoTipDay ? (y.Instance.m_trainNoTipDay = 1, 
                this.tipBtnImg.skin = "comrp/check.png") : (y.Instance.m_trainNoTipDay = 0, this.tipBtnImg.skin = "comrp/uncheck.png"), 
                y.Instance.savecheckDayTimerInfo();
            }
            onCloseBtnClick() {
                T.Instance.playUIClick(), this.useSkinWithIndex(-1);
            }
            closeView() {
                pe.Instance.closeUI(ce.TrainView);
            }
            onStartBtnClick() {
                T.Instance.playUIClick(), this.trainUseSkinWithIndex(this.skinId);
            }
            trainUseSkinWithIndex(e) {
                let t = -1;
                e >= 0 && (t = e);
                platform.getInstance().showReward(()=>{
                    this.useSkinWithIndex(t);
                })

            }
            onShowAdCompleted(e) {
            }
            useSkinWithIndex(e = -1) {
                this.closeView(), 
                this.callBack && this.callBack(e);
            }
            registerEvent() {
                this.startBtn.on(Laya.Event.CLICK, this, this.onStartBtnClick), 
                this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtnClick), 
                this.tipBtnImg.on(Laya.Event.CLICK, this, this.onTipBtnImg), p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted);
            }
            unregisterEvent() {
                this.startBtn.off(Laya.Event.CLICK, this, this.onStartBtnClick), this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtnClick), 
                this.tipBtnImg.off(Laya.Event.CLICK, this, this.onTipBtnImg), p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted);
            }
        },
        res: [ {
            url: "view/TrainPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.ReviewView = {
        id: 5,
        cls: class extends e.view.ReviewPanelrpUI {
            constructor() {
                super(...arguments), this.countDown = 8, this.callBack = null, this.videoCallBack = null, 
                this.waitMoving = !1, this.isETouch = !1, this.state = 1;
            }
            init(e) {
                e && (this.callBack = e.callBack || null, this.state = e.state || 1), this.initView(), 
                this.registerEvent();
            }
            initView() {
                this.initETouch(), this.showRecomend();
                this.reviewBtn.visible = !0, this.closeBtn2.visible = !1, this.closeBtn.visible = !0;
                platform.getInstance().initList(this.tuiList);
            }
            onReviewBtnClick() {
                T.Instance.playUIClick(), 

                platform.getInstance().showReward(()=>{
                    this.closeWithState(!0);
                })
            }
            onShowAdCompleted(e) {
            }
            closeWithState(e = !1) {
                this.closeView(), this.callBack && this.callBack(e);
            }
            getPinY() {
            }
            hasETouch() {
                return this.isETouch;
            }
            initETouch() {
            }
            onShowBannerCompleted(e) {
            }
            delayShowCloseBtn() {
            }
            updateBtnBox(e = !1, t = !1) {
            }
            uninit() {
                Laya.timer.clearAll(this), this.unregisterEvent();
            }
            registerEvent() {
                this.reviewBtn.on(Laya.Event.CLICK, this, this.onReviewBtnClick), this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtnClick), 
                this.closeBtn2.on(Laya.Event.CLICK, this, this.onCloseBtnClick), p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.on(o.ShowBannerCompleted, this, this.onShowBannerCompleted);
            }
            unregisterEvent() {
                this.reviewBtn.off(Laya.Event.CLICK, this, this.onReviewBtnClick), this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtnClick), 
                this.closeBtn2.off(Laya.Event.CLICK, this, this.onCloseBtnClick), p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.off(o.ShowBannerCompleted, this, this.onShowBannerCompleted);
            }
            onCloseBtnClick() {
                this.waitMoving || (T.Instance.playUIClick(), this.closeWithState());
            }
            closeView() {
                pe.Instance.closeUI(ce.ReviewView);
            }
            showRecomend() {
            }
            initzsTui() {
            }
        },
        res: [ {
            url: "view/ReviewPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.SettleView = {
        id: 6,
        cls: class extends e.view.SettlePanelrpUI {
            constructor() {
                super(...arguments), this.doublebtnTimeLine = null, this.sharebtnTimeLine = null, 
                this.callBack = null, this.videoCallBack = null, this.totalGold = 0, this.totalZuan = 0, 
                this.isETouch = !1, this.isSuccess = !1, this.waitMoving = !1, this.canClick = !0;
            }
            initView() {
                let e = te.Instance.mData.finish;
                if (this.isSuccess = e, this.totalGold = 0, e) {
                    let e = 30;
                    this.totalGold += e;
                    let t = te.Instance.sceneMgr.mData.fetchGoldC;
                    this.totalGold += 10 * t;
                }

                platform.getInstance().initList(this.tuiList);





                if (this.goldLab1.text = "+" + this.totalGold, (this.totalGold > 0 || this.totalZuan > 0) && (this.goldInfoBox1.visible = this.totalGold > 0, 
                this.goldBox.visible = !0), te.Instance.addGoldAndZuan(this.totalGold, this.totalZuan), 
                e && (x.rp_data.stage < y.Instance.getMaxStage() && (x.rp_data.stage += 1), this.continueBtnLab.text = "CONTINUE"), 
                this.stageTopBg1.visible = e, x.saveData(!0, !0), te.gameUi.savePowerToWX(), this.showRecomend(), 
                Se.IsTouTiao()) {
                }
                {
                    let e = new Laya.TimeLine();
                    e.to(this.doubleBtn, {
                        scaleX: 1.05,
                        scaleY: 1.05
                    }, 300).to(this.doubleBtn, {
                        scaleX: .95,
                        scaleY: .95
                    }, 300), e.play(0, !0), this.doublebtnTimeLine = e;
                }
                this.initETouch();
                let t = this.hasETouch(), i = !t;
                t ? (this.updateBtnBox(!0), this.updateBtnBox1(!0), this.canClick = !1, Laya.timer.once(2500, this, () => {
                    this.updateBtnBox(!1), this.canClick = !0
                })) : (this.canClick = !0, this.updateBtnBox(!1)), this.totalGold > 0 ? this.showNextLater(i) : this.showNext(!1, i);
            }
            init(e) {
                e && (this.callBack = e.callBack || null), this.initView(), this.registerEvent();
            }
            uninit() {
                Laya.timer.clearAll(this), this.unregisterEvent();
            }
            didShow() {}
            didHide() {
                Laya.timer.clearAll(this), this.isSuccess && T.Instance.stopSound(V.Win_success);
            }
            closeView() {
                pe.Instance.closeUI(ce.SettleView);
            }
            showNextLater(e = !0) {
                this.doubleBtn.visible = true, this.nextBtn.visible = true;
            }
            checkShowVideo() {
                let e = !1;
                return Se.IsTouTiao() && P.Instance.canShareVideo() && (e = !0), e;
            }
            onDoubleBtnClick() {

                T.Instance.playUIClick(), 
                platform.getInstance().showReward(()=>{
                    this.showAddGoldTip(5 * this.totalGold, 5 * this.totalZuan, !0), this.showNext(!0);
                })
                
                // this.curShareADPos = de.goldAdVideo, this.videoCallBack = (() => {
                   
                // }), Ce.Instance.showVideoOrShare(this.curShareADPos);
            }
            onNextBtnClick() {
                this.canClick && (Laya.timer.once(2e3, this, () => {
                    this.updateBtnBox1(!1);
                }), this.showAddGoldTip(0, 0, !0), this.showNext(!0));
            }
            showNext(e = !1, t = !0) {
                this.doubleBtn.visible = !1, this.nextBtn.visible = !1, this.backBtn.visible = !0, 
                this.checkShowVideo() ? (this.continueBtn.visible = !0) : this.continueBtn.visible = !0;
            }
            onShareBtnClick() {
                T.Instance.playUIClick(), Se.IsTouTiao() ? P.Instance.shareVideo(1) : Ce.Instance.showVideoOrShare(de.SettleShare);
            }
            onBackBtnClick() {
                this.onContinueBtnClick(0);
            }
            onContinueBtnClick(e = 1) {
                T.Instance.playUIClick();
                let t = () => {
                    0 == e ? this.closeWithState(0) : this.closeWithState(1);
                }, i = () => {
                    e = 0, t();
                };
                N.Instance.isOpenSDK() && Se.IsWeChat() ? pe.Instance.openUI(ce.FyhdTui2, {
                    cb: i,
                    from: E.AfterSettle
                }) : i();
            }
            onShowAdCompleted(e) {
                e === this.curShareADPos && (this.videoCallBack && this.videoCallBack(), this.videoCallBack = null);
            }
            onShowShareVideoCompleted(e) {
                Se.IsTouTiao() && (this.showAddGoldTip(c.vGameInfo.shareVideoGold, 0, !0), this.shareBtn.visible = !1);
            }
            initzsTui() {
                if (N.Instance.isOpenSDK()) {
                    let e = N.Instance.tuiInfo;
                    if (e && e.length > 0) {
                        let t = [].concat(e);
                        this.tuiList.visible = !0, this.tuiList.vScrollBarSkin = "", this.tuiList.autoAnimate = !0, 
                        this.tuiList.updateDataSource(t);
                        let i = () => {
                            this.tuiList.updateDataSource(t), this.tuiList.refresh();
                        };
                        Laya.timer.loop(6e3, this, () => {
                            i();
                        }), this.tuiList.selectEnable = !0, this.tuiList.renderHandler = new Laya.Handler(this, function(e, t) {
                            let i = this.tuiList.array, n = i[t % i.length];
                            n && (e.getChildByName("itemImg").skin = n.url, e.getChildByName("itemName").text = n.name, 
                            e.offAll(null), e.on(Laya.Event.CLICK, this, function() {
                                Le.navigateToMiniProgram(n, this.from);
                            }));
                        });
                    }
                }
            }
            getPinY() {
                return this.hasETouch() && !Se.adCheck() && this.nextBtn ? this.nextBtn.localToGlobal(new Laya.Point(0, this.nextBtn.height)).y + Se.bannerMoveY() : -1;
            }
            getPinY1() {
                return this.hasETouch() && !Se.adCheck() && this.continueBtn ? this.continueBtn.localToGlobal(new Laya.Point(0, this.continueBtn.height)).y + Se.bannerMoveY() : -1;
            }
            hasETouch() {
                return this.isETouch;
            }
            initETouch() {
                Se.IsWeChat() && (this.isETouch = N.Instance.initETouch());
            }
            updateBtnBox(e = !1) {
                // let t = this.countdowPos(e);
                // this.btnBox.bottom = t;
            }
            countdowPos(e) {
                let t = 0;
                return e ? t = 120 : (t = 220, Se.isLong() && (t += 90)), t;
            }
            updateBtnBox1(e = !1) {
            }
            onShowBannerCompleted(e) {
                e == ce.SettleView.id && this.hasETouch();
            }
            showRecomend() {
                let e = !1;
                Se.IsWeChat() && (e = !0), e ? this.initzsTui() : this.settleTuiView && (this.settleTuiView.destroy(), 
                this.settleTuiView = null);
            }
            closeWithState(e = 0) {
                this.closeView(), this.callBack && this.callBack(e);
            }
            showAddGoldTip(e = 0, t = 0, i = !1) {
                T.Instance.playSound(V.Gold), e > 0 && (te.Instance.addGoldAndZuan(e, t), x.saveData(), 
                i && pe.Instance.showTips("SUCCESS"));
            }
            registerEvent() {
                this.backBtn.on(Laya.Event.CLICK, this, this.onBackBtnClick), this.doubleBtn.on(Laya.Event.CLICK, this, this.onDoubleBtnClick), 
                this.nextBtn.on(Laya.Event.CLICK, this, this.onNextBtnClick), this.continueBtn.on(Laya.Event.CLICK, this, this.onContinueBtnClick), 
                p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.on(o.ShowShareVideoCompleted, this, this.onShowShareVideoCompleted), 
                p.Instance.on(o.ShowBannerCompleted, this, this.onShowBannerCompleted);
            }
            unregisterEvent() {
                this.backBtn.off(Laya.Event.CLICK, this, this.onBackBtnClick), 
                this.doubleBtn.off(Laya.Event.CLICK, this, this.onDoubleBtnClick), 
                this.nextBtn.off(Laya.Event.CLICK, this, this.onNextBtnClick), 
                this.continueBtn.off(Laya.Event.CLICK, this, this.onContinueBtnClick), 
                p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.off(o.ShowShareVideoCompleted, this, this.onShowShareVideoCompleted), 
                p.Instance.off(o.ShowBannerCompleted, this, this.onShowBannerCompleted), this.doublebtnTimeLine && this.doublebtnTimeLine.destroy(), 
                this.sharebtnTimeLine && this.sharebtnTimeLine.destroy();
            }
        },
        res: [ {
            url: "view/SettlePanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.SettingView = {
        id: 7,
        cls: class extends e.view.SettingPanelrpUI {
            init(e) {
                this.initView(), this.registerEvent();
            }
            uninit() {
                this.unregisterEvent();
            }
            closeView() {
                T.Instance.playUIClick(), pe.Instance.closeUI(ce.SettingView);
            }
            initView() {}
            registerEvent() {
                this.closeBtn.on(Laya.Event.CLICK, this, this.closeView), 
                this.soundBtn.on(Laya.Event.CLICK, this, this.onSoundBtnClick);
            }
            unregisterEvent() {}
            onSoundBtnClick() {
                T.Instance.playUIClick();
                let e = 0 == T.Instance.getSoundVolume() ? 1 : 0;
                T.Instance.setSoundVolume(e), T.Instance.setSoundMute(0 == e), T.Instance.setMusicVolume(e), 
                T.Instance.setMusicMute(0 == e), this.updateView();
            }
            onVibrateBtnClick() {
            }
            updateView() {
                let e = T.Instance.getSoundVolume();
                this.soundImage.skin = 0 == e ? "comrp/uncheck.png" : "comrp/check.png";
            }
        },
        res: [ {
            url: "view/SettingPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.SkinView = {
        id: 8,
        cls: class extends e.view.SkinPanelrpUI {
            constructor() {
                super(...arguments), this.callBack = null, this.videoCallBack = null, this.curPage = 1, 
                this.curMaxPage = 1, this.curMaxSkin = 0, this.lastPoint = new Laya.Point(0, 0), 
                this.pressed = !1, this.sliderPageDis = 100, this.curSkin = 1, this.pageSize = 9, 
                this.lastPressPoint = null, this.type = 0, this.showType = 0, this.pageDiamondNum = 1e3, 
                this.videoCoin = 500, this.skinPlayer3d = null;
            }
            init(e) {
                e && (this.callBack = e.callBack || null), this.curMaxSkin = L.Instance.getShowMaxSkin(this.type), 
                this.curMaxPage = Math.floor((this.curMaxSkin - 1) / this.pageSize) + 1, this.curSkin = x.rp_data.skinIndex, 
                this.curPage = Math.floor(this.curSkin % this.pageSize == 0 ? this.curSkin / this.pageSize : this.curSkin / this.pageSize + 1), 
                this.initView(), this.registerEvent();
            }
            uninit() {
                this.unregisterEvent(), this.removeModels();
            }
            udpatePagaView() {
                this.updateSkinBtn();
            }
            onLeftBtn() {
                this.curPage > 1 && this.curPage--, this.udpatePagaView(), this.udpateLeftRight();
            }
            onRightBtn() {
                this.curPage < this.curMaxPage && this.curPage++, this.udpatePagaView(), this.udpateLeftRight();
            }
            udpateLeftRight() {
                this.leftBtn.visible = !(1 == this.curPage), this.rightBtn.visible = !(this.curPage == this.curMaxPage);
            }
            registerEvent() {
                window.cargames.visible = false;
                this.leftBtn.on(Laya.Event.CLICK, this, this.onLeftBtn), this.rightBtn.on(Laya.Event.CLICK, this, this.onRightBtn), 
                this.closeBtn.on(Laya.Event.CLICK, this, this.onClose), this.vedioBtn.on(Laya.Event.CLICK, this, this.onVedio), 
                this.unlockBtn.on(Laya.Event.CLICK, this, this.onUnLockBtn), this.containerPlant.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
                this.containerPlant.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.containerPlant.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
                this.containerPlant.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut), p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.on(o.CloseShowAd, this, this.onCloseShowAd), p.Instance.on(o.SkinChange, this, this.onSkinChange), 
                p.Instance.on(o.UpdateGoldEvent, this, this.onUpdateGoldEvent), p.Instance.on(o.ClickSkinItem, this, this.onClickSkinItem);
            }
            unregisterEvent() {
                window.cargames.visible = true;
                this.leftBtn.off(Laya.Event.CLICK, this, this.onLeftBtn), this.rightBtn.off(Laya.Event.CLICK, this, this.onRightBtn), 
                this.closeBtn.off(Laya.Event.CLICK, this, this.onClose), this.vedioBtn.off(Laya.Event.CLICK, this, this.onVedio), 
                this.unlockBtn.off(Laya.Event.CLICK, this, this.onUnLockBtn), this.containerPlant.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), 
                this.containerPlant.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), this.containerPlant.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), 
                this.containerPlant.off(Laya.Event.MOUSE_OUT, this, this.onMouseOut), p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted), 
                p.Instance.off(o.CloseShowAd, this, this.onCloseShowAd), p.Instance.off(o.SkinChange, this, this.onSkinChange), 
                p.Instance.off(o.UpdateGoldEvent, this, this.onUpdateGoldEvent), p.Instance.off(o.ClickSkinItem, this, this.onClickSkinItem);
            }
            initView() {
                this.loadModels(), this.updateSkinBtn(), this.updateSkinBox(), this.udpateLeftRight(), 
                this.onUpdateGoldEvent();
            }
            onClose() {
                this.callBack && this.callBack(), T.Instance.playUIClick(), pe.Instance.closeUI(ce.SkinView);
            }
            onClickSkinItem(e) {
                let t = 0 == x.Instance.getSkinArr(e);
                if (L.Instance.isStageSkin(e)) {
                    let i = "";
                    L.Instance.getLockStageByIndex(x.rp_data.stage, e) || (i = L.Instance.getLockTip(e)), 
                    this.lockLab.text = i, this.lockLab.visible = t;
                }
                !t && this.showPlayerById(e);
            }
            showPlayerById(e) {
                this.showRoleModel(e);
            }
            updateSkinBtn() {
                this.showType = this.curPage - 1;
                let e = this.curPage - 1, t = this.curPage + 1;
                e > 0 ? (this.leftView.visible = !0, this.leftView.updateView(e, this.pageSize, this.curMaxSkin)) : this.leftView.visible = !1, 
                this.centerView.updateView(this.curPage, this.pageSize, this.curMaxSkin), t <= this.curMaxPage ? (this.rightView.updateView(t, this.pageSize, this.curMaxSkin), 
                this.rightView.visible = !0) : this.rightView.visible = !1;
                let i = this.curPage * this.pageSize;
                i > this.curMaxSkin && (i = this.curMaxSkin), this.dot1.visible = 1 == this.curPage, 
                this.dot2.visible = 2 == this.curPage, this.dot3.visible = 3 == this.curPage, this.updateUnlockValue();
            }
            updateUnlockValue() {
                this.lockLab.visible = !1, 0 == this.showType ? (this.pageDiamondNum = L.Instance.getUnLockValue(this.curPage), 
                this.videoCoin = 500, this.unlockBtn.disabled = !this.centerView.hasLockSkin(), 
                this.unlockBtn.visible = !0, this.vedioBtn.visible = !0) : (this.unlockBtn.visible = !1, 
                this.vedioBtn.visible = !1), this.unlockValue.text = "" + this.pageDiamondNum, this.labCoin2.text = "" + this.videoCoin;
            }
            onUpdateGoldEvent() {
                this.goldLab1.text = x.rp_data.gold;
            }
            updateSkinBox() {}
            onSkinChange() {
                this.updateSkinBox();
            }
            onUnLockBtn() {
                0 == this.showType && (this.pageDiamondNum <= x.rp_data.gold ? (te.Instance.addGold(-this.pageDiamondNum), 
                this.centerView.unlock(e => {
                    this.unlockBtn.disabled = !0, e >= 0 && (x.rp_data.skinIndex = e, x.rp_data.skinBuyC += 1, 
                    x.Instance.setSkinArr(e, 1), p.Instance.event(o.SkinChange, 0), this.updateSkinBtn(), 
                    pe.Instance.showTips("SUCCESS!"), T.Instance.playSound(V.Success));
                }), this.unlockBtn.disabled = !0) : pe.Instance.showTips("Diamonds is not enough!"));
            }
            onVedio() {
                T.Instance.playUIClick(), 


                platform.getInstance().showReward(()=>{
                    T.Instance.playSound(V.Gold), te.Instance.addGold(this.videoCoin), 
                     pe.Instance.showTips("Diamond x " + this.videoCoin , 1500)
                })
                
            }
            onShowAdCompleted(e) {
            }
            onCloseShowAd(e) {
            }
            removeModels() {
                this.skinPlayer3d && (this.skinPlayer3d.uninit(), this.skinPlayer3d = null);
            }
            loadModels() {
                if (!this.skinPlayer3d) {
                    this.skinPlayer3d = new se();
                    let e = L.Instance.getShowUseSkinId();
                    this.skinPlayer3d.init(this.itemBox, e);
                }
            }
            showRoleModel(e) {
                this.skinPlayer3d && this.skinPlayer3d.showModel(e);
            }
            onMouseDown(e) {
                this.pressed = !0, this.lastPressPoint = new Laya.Point(e.stageX, e.stageY), this.lastPoint = new Laya.Point(e.stageX, e.stageY);
            }
            onMouseMove(e) {
                if (this.pressed) {
                    let e = Laya.stage.mouseX - this.lastPoint.x, t = Laya.stage.mouseY - this.lastPoint.y;
                    this.lastPoint.x = Laya.stage.mouseX, this.lastPoint.y = Laya.stage.mouseY;
                    let i = e * e, n = t * t, s = 180 * Math.atan2(e, t) / Math.PI;
                    s < 0 && (s += 360), s = Math.round(s);
                    let a = Math.PI / 180 * s, o = Math.sqrt(i + n), r = Math.floor(Math.sin(a) * o);
                    this.containerPlant.centerX = this.containerPlant.centerX + r, Math.abs(r) > 10 && (this.centerView.mouseEnabled = !1);
                }
            }
            onMouseUp(e) {
                this.centerView.mouseEnabled = !0, this.pressed && null !== this.lastPressPoint && (ve.distancePoint(new Laya.Point(e.stageX, e.stageY), this.lastPressPoint) > this.sliderPageDis && (e.stageX < this.lastPressPoint.x ? this.curPage++ : this.curPage--, 
                this.curPage < 1 ? this.curPage = 1 : this.curPage > this.curMaxPage && (this.curPage = this.curMaxPage), 
                this.updateSkinBtn(), this.containerPlant.centerX = 0), this.udpateLeftRight()), 
                this.lastPressPoint = null, this.lastPoint = null, this.pressed = null;
            }
            onMouseOut(e) {
                this.pressed = !1, this.containerPlant.centerX = 0, this.centerView.mouseEnabled = !0;
            }
        },
        res: [ {
            url: "view/SkinPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.GoldView = {
        id: 9,
        cls: class extends e.view.GoldPanelrpUI {
            constructor() {
                super(...arguments), this.gold = 500, this.doublebtnTimeLine = null, this.videoCallBack = null;
            }
            onCloseView() {
                T.Instance.playUIClick(), this.closeView();
            }
            closeView() {
                pe.Instance.closeUI(ce.GoldView);
            }
            initView() {
                this.gold = 500, this.goldLab.text = "+" + this.gold + "宝石";
                {
                    let e = new Laya.TimeLine();
                    e.to(this.doubleBtn, {
                        scaleX: 1.05,
                        scaleY: 1.05
                    }, 300).to(this.doubleBtn, {
                        scaleX: .95,
                        scaleY: .95
                    }, 300), e.play(0, !0), this.doublebtnTimeLine = e;
                }
            }
            onDoubleBtnClick() {
                T.Instance.playUIClick(), this.curShareADPos = de.goldAdVideo, this.videoCallBack = (() => {
                    T.Instance.playSound(V.Gold), te.Instance.addGold(this.gold), x.saveData(), pe.Instance.showTips("领取宝石成功！"), 
                    this.closeView();
                }), Ce.Instance.showVideoOrShare(this.curShareADPos);
            }
            onShowAdCompleted(e) {
                e === this.curShareADPos && (this.videoCallBack && this.videoCallBack(), this.videoCallBack = null);
            }
            init(e) {
                this.initView(), this.registerEvent();
            }
            uninit() {
                this.unregisterEvent();
            }
            registerEvent() {
                this.closeBtn.on(Laya.Event.CLICK, this, this.closeView), this.doubleBtn.on(Laya.Event.CLICK, this, this.onDoubleBtnClick), 
                p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted);
            }
            unregisterEvent() {
                this.closeBtn.off(Laya.Event.CLICK, this, this.closeView), this.doubleBtn.off(Laya.Event.CLICK, this, this.onDoubleBtnClick), 
                p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted), this.doublebtnTimeLine.destroy();
            }
        },
        res: [ {
            url: "view/GoldPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.SignView = {
        id: 10,
        cls: class extends e.view.SignPanelrpUI {
            constructor() {
                super(...arguments), this.callBack = null, this.videoCallBack = null, this.dataInfo = null, 
                this.day7Info = null;
            }
            init(e) {
                e && (this.callBack = e.callBack || null);
                let t = L.Instance.getSignSkin();
                2 == t.length && (this.day2_Skin = t[0], this.day7_Skin = t[1]), this.dataInfo = [ {
                    title: "DAY 1",
                    type: 1,
                    count: 300
                }, {
                    title: "DAY 2",
                    type: 2,
                    count: 600,
                    skin: this.day2_Skin
                }, {
                    title: "DAY 3",
                    type: 1,
                    count: 900
                }, {
                    title: "DAY 4",
                    type: 1,
                    count: 1200
                }, {
                    title: "DAY 5",
                    type: 1,
                    count: 1500
                }, {
                    title: "DAY 5",
                    type: 1,
                    count: 2100
                } ], this.day7Info = {
                    title: "DAY 7",
                    type: 2,
                    count: 2700,
                    skin: this.day7_Skin
                }, this.initView(), this.registerEvent();
                let i = "", n = this.getNowSignIndex();
                n > 0 && (i = ""), this.titleLab.text = i;
            }
            uninit() {
                this.unregisterEvent();
            }
            removeLightAni(e) {
                if (e) {
                    let t = e.getChildByName("ballBox");
                    if (t) {
                        let e = t.getChildByName("light");
                        e && e.goldAni && (e.goldAni.destroy(), e.goldAni = null);
                    }
                }
            }
            removeAllAni() {
                this.removeLightAni(this.day7_item);
                for (let e = 0; e < this.signlist.array.length; e++) {
                    let t = this.signlist.getCell(e);
                    this.removeLightAni(t);
                }
            }
            onCloseBtnClick() {
                T.Instance.playUIClick(), this.closeView();
            }
            closeView() {
                this.removeAllAni(), pe.Instance.closeUI(ce.SignView);
            }
            initView() {
                this.signlist.array = this.dataInfo, this.signlist.renderHandler = new Laya.Handler(this, this.onRankListRender), 
                this.updateList(), this.canDoSign() && pe.Instance.delayShowClose(this.closeBtn, this);
            }
            useFreeBtn() {
                return 0 == this.getNowSignIndex();
            }
            onSignFinish() {
                let e = !1, t = null;
                if (this.m_actionInfo) {
                    let i = this.m_actionInfo, n = !0;
                    if (2 == i.type && i.skin && i.skin.isLock && (n = !1), n) {
                        let t = i.count;
                        te.Instance.addGold(t), T.Instance.playSound(V.Success), x.saveData(), pe.Instance.showTips("SUCCESS！"), 
                        e = !0;
                    } else {
                        let n = i.skin, s = n.skinid;
                        x.rp_data.skinIndex = s, x.Instance.setSkinArr(s, 1), p.Instance.event(o.SkinChange), 
                        T.Instance.playSound(V.Success), e = !0, t = n;
                    }
                }
                e && (y.Instance.doSignAction(), this.closeView(), t && pe.Instance.showTips("SUCCESS!"));
            }
            onAwardBtnClick() {
                if (T.Instance.playUIClick(), this.m_actionInfo, this.useFreeBtn()) return void this.onSignFinish();
                let e = Ce.getShowType(re.vsignAdVideo);
                this.curShareADPos = 1 == e ? de.signShare : de.signAdVideo, Ce.Instance.showVideoOrShare(this.curShareADPos);
            }
            onShowAdCompleted(e) {
                e === this.curShareADPos && this.onSignFinish();
            }
            getSignInfoWithIndex(e) {
                return e < 0 && (e = 0), e < this.dataInfo.length ? this.dataInfo[e] : this.day7Info;
            }
            canDoSign() {
                return !(this.m_signInfo.signed > 0);
            }
            getNowSignIndex() {
                let e = this.m_signInfo.signDay;
                return e < 0 ? 0 : e;
            }
            registerEvent() {
                this.awardBtn.on(Laya.Event.CLICK, this, this.onAwardBtnClick), this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtnClick), 
                p.Instance.on(o.ShowAdCompleted, this, this.onShowAdCompleted);
            }
            unregisterEvent() {
                this.awardBtn.off(Laya.Event.CLICK, this, this.onAwardBtnClick), this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtnClick), 
                p.Instance.off(o.ShowAdCompleted, this, this.onShowAdCompleted);
            }
            updateList() {
                this.removeAllAni(), this.m_signInfo = y.Instance.getSignDayInfo(), this.m_actionInfo = this.getSignInfoWithIndex(this.getNowSignIndex());
                {
                    let e = this.day7Info, t = this.day7_item, i = t.getChildByName("coinBox"), n = t.getChildByName("ballBox"), s = t.getChildByName("signed"), a = t.getChildByName("select");
                    i.visible = !1, n.visible = !1, s.visible = !1, a.visible = !1;
                    let o = !1, r = !1;
                    if ((6 < this.m_signInfo.signDay || 0 == this.m_signInfo.signDay && this.m_signInfo.signed) && (o = !0), 
                    this.canDoSign() && 6 == this.getNowSignIndex() && (r = !0), o) s.visible = !0, 
                    t.gray = !0; else {
                        t.gray = !1;
                        let s = !0;
                        if (2 == e.type && e.skin && e.skin.isLock && (s = !1), s) i.visible = !0, i.getChildByName("lbgoods").text = "x" + e.count; else {
                            n.visible = !0;
                            let e = n.getChildByName("light");
                            e.goldAni || (e.goldAni = new Laya.TimeLine(), e.goldAni.to(e, {
                                rotation: 360
                            }, 8e3)), e.goldAni.play(0, !0);
                        }
                        a.visible = r;
                    }
                }
                this.awardBtn.disabled = this.m_signInfo.signed;
                let e = "CLAIM";
                this.canDoSign() || (e = "RECEIVED",this.video_icon.visible = false);
                let t = this.awardBtn.getChildByName("box2");
                t.getChildByName("lab").text = e, this.useFreeBtn() && (this.awardBtn.getChildByName("box1").visible = !0, 
                t.visible = !1), this.signlist.refresh();
            }
            onRankListRender(e, t) {
                let i = e.dataSource, n = e.getChildByName("coinBox"), s = e.getChildByName("ballBox"), a = e.getChildByName("signed"), o = e.getChildByName("select"), r = e.getChildByName("lbday");
                n.visible = !1, s.visible = !1, a.visible = !1, o.visible = !1;
                let h = !1, l = !1;
                if (t < this.m_signInfo.signDay && (h = !0), this.canDoSign() && t == this.getNowSignIndex() && (l = !0), 
                r.text = i.title, h) a.visible = !0, e.gray = !0; else {
                    e.gray = !1;
                    let t = !0;
                    if (2 == i.type && i.skin && i.skin.isLock && (t = !1), t) n.visible = !0, n.getChildByName("lbgoods").text = "x" + i.count; else {
                        s.visible = !0;
                        let e = s.getChildByName("light");
                        e.goldAni || (e.goldAni = new Laya.TimeLine(), e.goldAni.to(e, {
                            rotation: 360
                        }, 8e3)), e.goldAni.play(0, !0);
                    }
                    o.visible = l;
                }
            }
        },
        res: [ {
            url: "view/SignPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.EggView = {
        id: 13,
        cls: ie,
        res: [ {
            url: "view/EggView.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.SkinLockView = {
        id: 15,
        cls: class extends e.view.SkinLockPanelrpUI {
            constructor() {
                super(...arguments), this.callBack = null, this.tweenAni = null, this.goldAni = null, 
                this.skinPlayer3d = null;
            }
            initView() {
                let e = x.rp_data.stage, t = L.Instance.getNowLockInfo(e);
                if (t) {
                    let e = t.progress0;
                    e < 0 && (e = 0), e > 1 && (e = 1);
                    let i = t.progress;
                    i < 0 && (i = 0), i > 1 && (i = 1), this.progressBar.value = e;
                    let n = this.progressBar;
                    this.tweenAni = Laya.Tween.to(n, {
                        value: i
                    }, 1500, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                        this.tweenAni = null;
                    })), this.tweenAni.update = new Laya.Handler(this, () => {
                        this.loadingLabel.text = (100 * n.value).toFixed(0) + "%";
                    }), T.Instance.playSound(V.Progress);
                    let s = t.skinId;
                    t.finish && (T.Instance.playSound(V.Success),  this.shareBtn.centerX = -160, 
                    this.closeBtn.centerX = 160, this.closeLab.text = "立即使用", x.rp_data.skinIndex = s, 
                    x.saveData(!0), p.Instance.event(o.SkinChange));
                    let a = this.lightImage;
                    this.goldAni = new Laya.TimeLine(), this.goldAni.to(a, {
                        rotation: 360
                    }, 8e3), this.goldAni.play(0, !0), Se.IsOppo() && (this.shareBtn.visible = !1, this.closeBtn.centerX = 0), 
                    this.skinPlayer3d || (this.skinPlayer3d = new se(), this.skinPlayer3d.init(this.itemBox, s, new Laya.Vector3(0, .5, 4)));
                }
            }
            init(e) {
                e && (this.callBack = e.callBack || null), this.initView(), this.registerEvent();
            }
            removeModels() {
                this.skinPlayer3d && (this.skinPlayer3d.uninit(), this.skinPlayer3d = null);
            }
            uninit() {
                this.removeModels(), this.unregisterEvent(), this.tweenAni && (this.tweenAni.clear(), 
                this.tweenAni = null), this.goldAni && (this.goldAni.destroy(), this.goldAni = null);
            }
            registerEvent() {
                this.closeBtn.on(Laya.Event.CLICK, this, this.closeView), this.shareBtn.on(Laya.Event.CLICK, this, this.onShareBtnClick);
            }
            unregisterEvent() {
                this.closeBtn.off(Laya.Event.CLICK, this, this.closeView), this.shareBtn.off(Laya.Event.CLICK, this, this.onShareBtnClick);
            }
            onShareBtnClick() {
                T.Instance.playUIClick(), Ce.Instance.showVideoOrShare(de.HomeShare);
            }
            onCloseView() {
                T.Instance.playUIClick(), this.closeView();
            }
            closeView() {
                pe.Instance.closeUI(ce.SkinLockView), this.callBack && this.callBack();
            }
        },
        res: [ {
            url: "view/SkinLockPanelrp.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.FyhdTui2 = {
        id: 16,
        cls: class extends e.tui.FyhdTuiView2UI {
            constructor() {
                super(), this.tuiData = [], this.listData = [], this.from = E.Unkonw, this.isETouch = !1, 
                this.clicknum = 0;
            }
            init(e) {
                this.cb = e.cb, this.from = e.from, this.clicknum = 0, this.regiestEvent(), this.initETouch(), 
                this.initFyhdTui(), this.hasETouch() && Laya.timer.once(500, this, () => {
                }) || (this.clicknum = 1);
            }
            hasETouch() {
                return this.isETouch;
            }
            initETouch() {
                Se.IsWeChat() && (this.isETouch = N.Instance.ShowTuiMBanner());
            }
            uninit() {
                this.unregiestEvent();
            }
            regiestEvent() {
                this.continueBtn.on(Laya.Event.CLICK, this, this.onBackClose), p.Instance.on(o.BannerPosChange, this, this.onADBannerChange);
            }
            unregiestEvent() {
                this.continueBtn.off(Laya.Event.CLICK, this, this.onBackClose), p.Instance.off(o.BannerPosChange, this, this.onADBannerChange);
            }
            onADBannerChange(e) {
                e.ADPos === ce.FyhdTui2.id && Laya.timer.once(1500, this, () => {
                    Ce.Instance.hideBanner(ce.FyhdTui2.id);
                });
            }
            getPinY() {
                return this.continueBtn.localToGlobal(new Laya.Point(0, -10)).y - Se.bannerMoveY();
            }
            onBackClose() {
                if (T.Instance.playUIClick(), u.isNewPlayer) {
                    let e = w.getNumberValue("isNewPlayeronBackNum");
                    if (e <= 0) return this.doBack(), void w.setNumberValue("isNewPlayeronBackNum", e + 1);
                }
                if (this.clicknum > 0) this.doBack(); else {
                    this.clicknum++;
                    let e = N.Instance.tuiInfo, t = e[ve.nextNumber(0, e.length)];
                    if (!t) return;
                    Le.navigateToMiniProgram(t, this.from);
                }
            }
            doBack() {
                this.cb && this.cb(), pe.Instance.closeUI(ce.FyhdTui2);
            }
            initFyhdTui() {
                if (N.Instance.isOpenSDK() && N.Instance.tuiInfo && N.Instance.tuiInfo.length > 0) {
                    let e = N.Instance.tuiInfo;
                    this.tuiData = e.slice(0, 4);
                    for (let e = 0; e < this.tuiBox.numChildren; e++) {
                        let t = this.tuiBox.getChildAt(e), i = e % this.tuiData.length, n = this.tuiData[i];
                        if (!n) return;
                        t.skin = n.url, t.offAll(null), t.on(Laya.Event.CLICK, this, function() {
                            Le.navigateToMiniProgram(n, this.from);
                        });
                    }
                    return this.listData = e.slice(4), this.tuiList.visible = !0, this.tuiList.vScrollBarSkin = "", 
                    this.tuiList.autoAnimate = !0, this.tuiList.updateDataSource(Le.getScorllData(this.listData)), 
                    this.tuiList.selectEnable = !0, void (this.tuiList.renderHandler = new Laya.Handler(this, function(e, t) {
                        let i = t % this.listData.length, n = this.listData[i];
                        if (!n) return;
                        let s = e.getChildByName("img"), a = e.getChildByName("nameBg"), o = a.getChildByName("name");
                        s.skin = n.url, a.skin = "fyhd/name_bg_" + t % 5 + ".png", o.text = n.name, e.offAll(null), 
                        e.on(Laya.Event.CLICK, this, function() {
                            Le.navigateToMiniProgram(n, this.from);
                        });
                    }));
                }
                this.doBack();
            }
        },
        res: [ {
            url: "tui/FyhdTuiView2.json",
            type: Laya.Loader.JSON
        } ]
    }, ce.FyhdTui3 = {
        id: 17,
        cls: class extends e.tui.FyhdTuiView3UI {
            constructor() {
                super(), this.from = E.Unkonw;
            }
            init(e) {
                this.cb = e.cb, this.from = e.from, this.regiestEvent(), this.initFyhdTui();
            }
            uninit() {
                this.unregiestEvent();
            }
            regiestEvent() {
                this.btnback.on(Laya.Event.CLICK, this, this.onBackClose);
            }
            unregiestEvent() {
                this.btnback.off(Laya.Event.CLICK, this, this.onBackClose);
            }
            onBackClose() {
                this.doBack();
            }
            doBack() {
                this.cb && this.cb(), pe.Instance.closeUI(ce.FyhdTui3);
            }
            initFyhdTui() {
                if (N.Instance.isOpenSDK() && N.Instance.tuiInfo && N.Instance.tuiInfo.length > 0) {
                    let e = N.Instance.tuiInfo, t = e.length;
                    this.index = ve.nextNumber(0, t);
                    for (let i = 0; i < this.tuiBox.numChildren; i++) {
                        let n = this.tuiBox.getChildAt(i), s = e[this.index % t];
                        if (this.index++, !s) return;
                        n.getChildByName("img").skin = s.url, n.getChildByName("name").text = s.name, n.offAll(null), 
                        n.on(Laya.Event.CLICK, this, function() {
                            Le.navigateToMiniProgram(s, this.from);
                        });
                    }
                    for (let i = 0; i < this.tuiBox1.numChildren; i++) {
                        let n = this.tuiBox1.getChildAt(i), s = e[this.index % t];
                        if (this.index++, !s) return;
                        n.getChildByName("img").skin = s.url, n.getChildByName("name").text = s.name, n.offAll(null), 
                        n.on(Laya.Event.CLICK, this, function() {
                            Le.navigateToMiniProgram(s, this.from);
                        });
                    }
                }
            }
        },
        res: [ {
            url: "tui/FyhdTuiView3.json",
            type: Laya.Loader.JSON
        } ]
    };
    class ue extends e.view.ShowModalViewUI {
        constructor(e) {
            super(), this.m_title = "", this.m_content = "", this.m_showArr = [], this.m_title = e.title || "", 
            this.m_content = e.content || "", this.m_showArr = e.btnArr || [], this.init(), 
            this.showView();
        }
        getMsgValueInfo(e) {
            let t = "", i = null;
            if (e < this.m_showArr.length) {
                let n = this.m_showArr[e];
                t = n.title || "", i = n.callback || null;
            }
            return {
                title: t,
                callback: i
            };
        }
        showView() {
            this.defaultBtn.visible = !1, this.okBtn.visible = !1, this.cancelBtn.visible = !1;
            let e = this.m_showArr.length;
            if (this.titleLab.text = this.m_title, this.contentLab.text = this.m_content, e <= 1) {
                let e = this.getMsgValueInfo(0);
                this.defaultBtn.visible = !0, this.defaultBtn.label = e.title;
            } else if (e >= 2) {
                let e = this.getMsgValueInfo(0), t = this.getMsgValueInfo(1);
                this.cancelBtn.visible = !0, this.cancelBtn.label = e.title, this.okBtn.visible = !0, 
                this.okBtn.label = t.title;
            }
        }
        onCancelBtnClick() {
            this.closeView();
            let e = this.getMsgValueInfo(0);
            e.callback && e.callback();
        }
        onOkBtnClick() {
            this.closeView();
            let e = this.getMsgValueInfo(1);
            e.callback && e.callback();
        }
        onDefaultBtnClick() {
            this.closeView();
            let e = this.getMsgValueInfo(0);
            e.callback && e.callback();
        }
        init() {
            this.registerEvent();
        }
        uninit() {
            this.unregisterEvent();
        }
        static showModal(e) {
            pe.Instance.showModal(e);
        }
        closeView() {
            this.uninit(), this.destroy();
        }
        registerEvent() {
            this.cancelBtn.on(Laya.Event.CLICK, this, this.onCancelBtnClick), this.okBtn.on(Laya.Event.CLICK, this, this.onOkBtnClick), 
            this.defaultBtn.on(Laya.Event.CLICK, this, this.onDefaultBtnClick);
        }
        unregisterEvent() {
            this.cancelBtn.off(Laya.Event.CLICK, this, this.onCancelBtnClick), this.okBtn.off(Laya.Event.CLICK, this, this.onOkBtnClick), 
            this.defaultBtn.off(Laya.Event.CLICK, this, this.onDefaultBtnClick);
        }
    }
    class pe {
        constructor() {
            this.hideBanner = !1, this.adpaterArray = [], this.uiArray = [], this.maskView = null, 
            this.arrTips = null, this.guessView = null, this.reset(), this.hideBanner = !1;
        }
        static get Instance() {
            return null == pe._instance && (pe._instance = new pe(), pe._instance.init()), pe._instance;
        }
        init() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onScreenResize), p.Instance.on(o.BannerPosChange, this, this.onADBannerChange);
        }
        delayShowClose(e, t, i = 1500) {
            Se.IsOppo() && (i = 300), e.visible = !1, Laya.timer.once(i, t, () => {
                e.visible = !0;
            });
        }
        addAdapter(e) {
            this.adpaterArray.push(e);
        }
        clearAdapterOnUI(e) {
            for (var t = e.uiname, i = this.adpaterArray.length - 1; i >= 0; i--) this.adpaterArray[i].uiname == t && this.adpaterArray.splice(i, 1);
        }
        onScreenResize() {
            for (var e = this.adpaterArray.length - 1; e >= 0; e--) this.adpaterArray[e].adapter();
        }
        reset() {
            this.uiArray = [], this.adpaterArray = [];
        }
        pushUI(e) {
            this.uiArray.push(e);
        }
        toUI(e, t) {
            for (var i = this.uiArray.length - 1; i >= 0; i--) {
                var n = this.uiArray[i];
                this.uninitUI(n);
            }
            this.uiArray.length = 0, this.openUI(e, t);
        }
        openUIUnique(e, t, i = !0) {
            0 == this.isUIOpen(e) && this.openUI(e, t, i);
        }
        checkBanner() {
            Ce.Instance.isShowingBanner() && (Ce.Instance.hideBanner(), this.hideBanner = !0);
        }
        openUI(e, t, i = !0, n = null) {
            this.checkBanner(), null != e.res ? Laya.loader.load(e.res, Laya.Handler.create(null, function() {
                pe.Instance.createUI(e, t, i), n && n();
            }), null) : (this.createUI(e, t, i), n && n());
        }
        createUI(e, t, i = !0) {
            var n = new e.cls();
            if (null != n) {
                switch (n.uiname = e, e) {
                  case ce.LoadingView:
                    n.zOrder = pe._loadingViewZorder;
                    break;

                  default:
                    n.zOrder = pe._viewZorder++;
                }
                if (this.uiArray.length > 0) {
                    let e = this.uiArray[this.uiArray.length - 1];
                    e.visible && null !== e.didHide && void 0 !== e.didHide && e.didHide();
                }
                te.didHide(), Laya.stage.addChild(n), this.pushUI(n), n.visible = i, null != n.init && i && n.init(t), 
                this.checkGussViewInit(n);
                let s = this.canShowBaner(n), a = 0;
                n.getPinY && (a = this.getPinY(n)), i && s && Ce.Instance.showBanner(e.id, a) && n.willAppearBanner && n.willAppearBanner(e.id), 
                null !== n.didShow && void 0 !== n.didShow && i && (n.didShow(), this.checkGussViewShow(n));
            }
        }
        closeUI(e) {
            let t = !1;
            for (var i = this.uiArray.length - 1; i >= 0; i--) {
                var n = this.uiArray[i];
                if (n.uiname == e) {
                    this.uninitUI(n), this.uiArray.splice(i, 1), t = !0;
                    break;
                }
            }
            if (t) {
                if (this.hideBanner && 1 == this.uiArray.length) {
                    let e = this.uiArray[0], t = 0;
                    e.getPinY && (t = this.getPinY(e));
                    let i = e.uiname && e.uiname.id || 0;
                    Ce.Instance.restoreBanner(i, t), this.hideBanner = !1;
                }
                for (let e = this.uiArray.length - 1; e >= 0; e--) {
                    let t = this.uiArray[e];
                    if (t.visible) {
                        null !== t.didShow && void 0 !== t.didShow && (t.didShow(), this.checkGussViewShow(t));
                        break;
                    }
                }
            }
            return 0 == this.uiArray.length && te.didShow(), t;
        }
        isUIOpen(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                if (this.uiArray[t].uiname === e) return !0;
            }
            return !1;
        }
        showUI(e, t) {
            for (var i = this.uiArray.length - 1; i >= 0; i--) {
                var n = this.uiArray[i];
                if (n.uiname == e) {
                    null != n.init && n.init(t), this.checkGussViewInit(n), n.visible = !0, n.zOrder = pe._viewZorder++;
                    let i = 0;
                    return n.getPinY && (i = this.getPinY(n)), Ce.Instance.showBanner(e.id, i) && n.willAppearBanner && n.willAppearBanner(e.id), 
                    !0;
                }
            }
            return !1;
        }
        hideUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var i = this.uiArray[t];
                if (i.uiname == e) {
                    i.visible = !1, null !== i.uninit && i.uninit(), this.checkGussViewunInit(i), this.checkBanner();
                    break;
                }
            }
        }
        findUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var i = this.uiArray[t];
                if (i.uiname == e) return i;
            }
            return null;
        }
        uninitUI(e) {
            this.clearAdapterOnUI(e), null != e.uninit && e.uninit(), this.checkGussViewunInit(e), 
            Laya.timer.clearAll(e), Ce.Instance.hideBanner(e.uiname.id), e.removeSelf(), e.destroy();
        }
        update() {
            for (var e = this.uiArray.length - 1; e >= 0; e--) {
                var t = this.uiArray[e];
                null != t.update && t.update();
            }
        }
        showModal(e) {
            var t = new ue(e);
            Laya.stage.addChild(t), t.zOrder = pe._dialogZorder + 1;
        }
        showMask(e) {
            if (e && null == this.maskView) {
                var t = new Laya.Sprite();
                this.maskView = t, t.graphics.drawRect(-530, -180, 2340, 1080, "#949494"), t.alpha = .5, 
                t.mouseThrough = !1, t.mouseEnabled = !0;
                var i = new Laya.HitArea();
                i.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), t.hitArea = i, 
                t.zOrder = pe._dialogZorder, Laya.stage.addChild(this.maskView);
            } else e || null == this.maskView || (this.maskView.removeSelf(), this.maskView.destroy(), 
            this.maskView = null);
        }
        showTips(e, t, i, n) {
            var s = this.arrTips;
            let a = null;
            if (null == s) {
                s = [];
                var o = new Laya.Box();
                Laya.stage.addChild(o), o.zOrder = pe._tipsZorder;
                for (var r = 0; r < 3; r++) {
                    (a = new Laya.Box()).width = 600, a.height = 114, a.visible = !1;
                    {
                        let e = new Laya.Image();
                        e.skin = "comrp/toast-bg.png", e.width = 600, e.height = 114, a.addChild(e);
                        let t = new Laya.Text();
                        t.name = "txt", t.fontSize = 30, t.color = "#FFFFFF", t.width = 600, t.height = 114, 
                        t.align = "center", t.valign = "middle", a.addChild(t);
                    }
                    s.push(a), o.addChild(a);
                }
                this.arrTips = s, o.width = 600, o.centerX = 0, o.centerY = 0;
            }
            if (0 != s.length) {
                {
                    let t = (a = s.shift()).getChildByName("txt");
                    t.text = e, t.fontSize = i || 30, t.color = n || "#FFFFFF";
                }
                t = t || 600, a.visible = !0, a.alpha = 1, Laya.Tween.to(a, {
                    alpha: 0
                }, t, null, Laya.Handler.create(this, function(e) {
                    e.visible = !1, s.push(e);
                }, [ a ]), 1e3);
            }
        }
        checkGussViewInit(e) {}
        checkGussViewunInit(e) {}
        checkGussViewShow(e) {}
        onADBannerChange(e) {}
        canShowBaner(e) {
            return e && e.hasETouch && (e.uiname == ce.ReviewView || e.uiname == ce.SettleView) ? !e.hasETouch() : e.uiname != ce.FyhdTui2;
        }
        showTipsView(e) {
            Laya.stage.addChild(e), e.zOrder = pe._tipsZorder;
        }
        getPinY(e) {
            if (Se.IsTouTiao()) return 0;
            let t = e.skipLab || null;
            if (t) {
                return t.localToGlobal(new Laya.Point(0, t.height)).y - Se.bannerMoveY();
            }
            return e.getPinY ? e.getPinY() : 0;
        }
    }
    pe._viewZorder = 1e3, pe._loadingViewZorder = 2999, pe._tipsZorder = 3e3, pe._tipsAniZorder = 3e3, 
    pe._dialogZorder = 3100, pe._maskZorder = 3100, pe._instance = null, pe._debugTxt = null;
    class ge {
        constructor() {
            this.useThirdJudge = !1, this.isThirdLimitCt = !0;
        }
        init() {}
        queryRank(e, t, i) {
            A.Instance.getRankList(e).then(e => {
                i.runWith({
                    res: e
                });
            }).catch(e => {});
        }
        uploadGradeData(e) {}
        showFriendRank(e, t) {}
        hideFriendRank(e) {}
        showFriendRankPage(e, t) {}
        report(e, t) {}
        sdkLogin(e, t) {
            x.Instance.logined = !0, x.readDataInfo(null), p.Instance.event(o.userLoginFinish, !0);
        }
        showBannerAd(e, t, i, n, s, a = 0, o = 0, r = 0) {}
        hideBannerAd(e) {}
        showVideoAd(e, t, i) {
            ve.finishShare(e);
        }
        share(e, t, i, n, s, a, o) {
            ve.finishShare(e);
        }
        shareVideo(e) {
            ve.finishShare(e);
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        onShow(e, t) {
            if ("undefined" != typeof wx) return Laya.MiniAdpter.window.wx.onShow(e), void Laya.MiniAdpter.window.wx.onHide(t);
        }
        setLoadingProgress(e) {
            Se.IsOppo() && "undefined" != typeof qg && (e >= 100 ? qg.loadingComplete && qg.loadingComplete({
                complete: function(e) {}
            }) : qg.setLoadingProgress && qg.setLoadingProgress({
                progress: e
            }));
        }
        showModal(e) {
            if ("undefined" != typeof wx && wx.showModal) wx.showModal(e); else if (e) {
                let t = [], i = e => {};
                if (e.success && (i = e.success), e.showCancel) {
                    let n = {
                        title: e.cancelText || "取消",
                        callback: () => {
                            i({
                                cancel: !0
                            });
                        }
                    };
                    t.push(n);
                }
                let n = {
                    title: e.confirmText || "确定",
                    callback: () => {
                        i({
                            confirm: !0
                        });
                    }
                };
                t.push(n), pe.Instance.showModal({
                    title: e.title || "提示",
                    content: e.content || "",
                    btnArr: t
                });
            }
        }
    }
    class me extends ge {
        constructor() {
            super(), this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, 
            this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, 
            this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, this.curShareTimer = null, 
            this.mta = null, this.lastEndVideoAdTime = 0, this.bannerAd = null, this.bannerAdPre = null, 
            this.bannerShowInfo = {}, this.bannerError = !1, this.bannerLoadFinish = !1, this.checkShared = !0, 
            this.info = me.sInfo, this.loginParams = null, "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.onShareAppMessage(e => this.onShareAppMessage(e)), 
            Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), p.Instance.on(o.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = de.DefaultShare, i = y.Instance.getVideoShareCfg(de.DefaultShare), n = ve.getShareInfoByCfg(i), s = n.shareContent, a = n.imgUrl, r = 0, h = "";
            return null != x.Instance && null != x.Instance.user && (h = x.Instance.user.openid, 
            r = x.Instance.user.uid), {
                title: s,
                imageUrl: a,
                query: "inviteName=" + x.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    p.Instance.event(o.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            if ("undefined" != typeof wx) {
                var i = t => {
                    me.sInfo.encryptedData = t.encryptedData, me.sInfo.iv = t.iv, me.sInfo.nickName = t.userInfo.nickName, 
                    me.sInfo.avatar = t.userInfo.avatarUrl, me.sInfo.sex = t.userInfo.gender, me.sInfo.city = t.userInfo.city, 
                    e.runWith(me.sInfo);
                }, n = t => {
                    e.runWith(me.sInfo);
                };
                wx.login({
                    success: e => {
                        me.sInfo.wxCode = e.code, wx.getSetting({
                            success: e => {
                                let t = e.authSetting["scope.userInfo"];
                                !0 === t ? wx.getUserInfo({
                                    withCredentials: !0,
                                    lang: "zh_CN",
                                    success: i,
                                    fail: n,
                                    complete: null
                                }) : n && n();
                            },
                            fail: () => {
                                n && n();
                            },
                            complete: null
                        });
                    },
                    fail: () => {
                        x.Instance.loginError = !0, p.Instance.event(o.userLoginFinish, !1);
                    },
                    complete: null
                });
            } else {
                x.Instance.user.loadCacheData();
            }
        }
        getSetting(e, t) {
            wx.getSetting({
                success: i => {
                    var n = i.authSetting;
                    !0 === n["scope.userInfo"] ? this.sdkLogin(e, t) : !1 === n["scope.userInfo"] ? this.openSetting() : n["scope.record"] ? n["scope.writePhotosAlbum"] ? n["scope.camera"] || this.sdkAuthorize("scope.camera") : this.sdkAuthorize("scope.writePhotosAlbum") : this.sdkAuthorize("scope.record");
                },
                fail: null,
                complete: null
            });
        }
        openSetting() {
            wx.openSetting({
                success: function(e) {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: e => {},
                fail: () => {},
                complete: null
            });
        }
        share(e, t, i, n, s, a, r = "") {
            if (c.IgnoreShare) return void p.Instance.event(o.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var h = i, l = "";
            null != x.Instance && null != x.Instance.user && (l = x.Instance.user.openid);
            let d = "inviteName=" + x.Instance.user.nickName + "&openid=" + l + "&pos=" + this.sharePos + "&shareTime=" + a + "&inviteCode=" + x.Instance.user.uid + "&shareScene=" + this.sharePos, u = n;
            wx.shareAppMessage({
                title: s,
                imageUrl: u,
                query: d,
                path: d,
                success: e => {
                    p.Instance.event(o.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    p.Instance.event(o.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    "undefined" == typeof wx || Se.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "请完成分享!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            });
        }
        shareVideo(e) {}
        showBannerAd(e, t, i, n, s, a = 0, r = 0, h = 0) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var l = !1;
            this.bannerShowCount >= c.vGameInfo.bCount ? l = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * c.vGameInfo.bTimer && (l = !0), 
            (l || this.bannerError || !this.bannerLoadFinish) && null != this.bannerAd && (this.bannerAd.lxbannerLoadFinish ? (this.bannerAd.hide(), 
            this.bannerAdPre = this.bannerAd) : this.bannerAd.destroy(), this.bannerAd = null, 
            this.bannerRes = null), this.bannerError = !1, this.showBannerPos = e;
            let d = 375;
            Se.adCheck() && (d = 300), u.windowWidth > 375 && (a = a / 375 * u.windowWidth, 
            r = r / 375 * u.windowWidth);
            let g = 10;
            u.windowHeight, Laya.stage.height;
            h = h * u.windowWidth / Laya.stage.width, this.bannerShowInfo.hAlign = i, this.bannerShowInfo.vAlign = n, 
            this.bannerShowInfo.pinY = h, this.bannerShowInfo.xOffset = a, this.bannerShowInfo.yOffset = r;
            let m = (t, i) => {
                t.show().then(() => {
                    setTimeout(() => {
                        p.Instance.event(o.ShowBannerCompleted, e);
                    }, i), Se.Instance.report(R.bannerSuccess);
                }).catch(e => {});
            };
            if (null == this.bannerAd) {
                this.bannerShowCount = 1, this.lastFetchBannerTime = Date.now();
                let e = y.Instance.getNextBannerAdUnitAnd();
                this.bannerAd = wx.createBannerAd({
                    adUnitId: e,
                    style: {
                        left: 0,
                        top: 0,
                        width: d
                    }
                }), this.bannerAd.lxHide = !1, this.bannerAd.onError(e => {
                    let t = "code=" + (e.errCode ? e.errCode : "0") + ":msg=" + (e.errMsg || "");
                    Se.Instance.report(R.bannerFail, {
                        info: t
                    }), this.bannerAdPre ? (this.bannerAd.destroy(), this.bannerAd = this.bannerAdPre, 
                    this.bannerAd.lxHide = !1, this.bannerError = !1, this.bannerLoadFinish = !0, g = 0, 
                    m(this.bannerAd, g), this.adjustBanner()) : this.bannerError = !0;
                }), this.bannerAd.onResize(e => {
                    this.bannerRes = e, this.adjustBanner();
                }), this.bannerLoadFinish = !1, this.bannerAd.lxbannerLoadFinish = !1, this.bannerAd.onLoad(() => {
                    this.bannerLoadFinish = !0, this.bannerAd.lxbannerLoadFinish = !0, this.bannerAd.lxHide || m(this.bannerAd, g);
                });
            } else {
                this.bannerAd.lxHide = !1, this.bannerRes && this.adjustBanner(), g = 0, m(this.bannerAd, g), 
                this.bannerShowCount++;
            }
            this.bannerAd.style && (this.bannerAd.style.width = d);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign, t = this.bannerShowInfo.vAlign, i = this.bannerShowInfo.pinY, n = this.bannerShowInfo.xOffset, s = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let a = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == e ? this.bannerAd.style.left = 0 + n : 1 == e ? this.bannerAd.style.left = .5 * (u.windowWidth - a.width) + n : 2 == e && (this.bannerAd.style.left = u.windowWidth - a.width + n), 
            0 == t) this.bannerAd.style.top = 0 + s; else if (1 == t) this.bannerAd.style.top = .5 * (u.windowHeight - a.height) + s; else if (2 == t) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 50 / 2436 * Laya.stage.width), 
                this.bannerAd.style.top = u.windowHeight - a.height + s - e, i > 0 && i < this.bannerAd.style.top && (this.bannerAd.style.top = i + 2);
            }
            let r = (this.bannerAd.style.top + a.height) * Laya.stage.width / u.windowWidth, h = this.bannerAd.style.top * Laya.stage.width / u.windowWidth;
            p.Instance.event(o.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: r,
                top: h,
                BannerAD: this.bannerAd
            });
        }
        hideBannerAd() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        showFriendRank(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rank",
                type: e,
                openid: x.Instance.user.openid,
                info: t
            });
        }
        hideFriendRank(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "hideRank",
                type: e,
                openid: x.Instance.user.openid,
                info: ""
            });
        }
        showFriendRankPage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rankPage",
                type: e,
                openid: x.Instance.user.openid,
                info: t
            });
        }
        queryRank(e, t, i) {
            A.Instance.getRankList(e).then(e => {
                i.runWith({
                    res: e
                });
            }).catch(e => {});
        }
        uploadGradeData(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "gradeData",
                type: "send",
                openid: x.Instance.user.openid,
                info: e
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= c.ShareTickTimer) {
                    let e = !(!Ce.Instance.m_callShareCfg || !Ce.Instance.m_callShareCfg.fromVideoFail);
                    ve.finishShare(Ce.Instance.m_callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !Se.wxCheck()) {
                    let e = "请完成分享!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "请完成分享!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 10);
        }
        isLowDevice() {
            return Se.isAndroid && Se.isLowDevice;
        }
        reportAnalytics(e) {}
        showVideoAd(e, t, i = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void pe.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return Ce.Instance.onShowAdCompleted(e), p.Instance.event(o.ShowAdCompleted, e), 
            void p.Instance.event(o.CloseShowAd, e);
            var n = "adunit-49ab9ec6714f298f";
            null !== t && t.length && (n = t), this.showPos = e;
            wx.getSystemInfoSync().SDKVersion;
            if (wx.createRewardedVideoAd) {
                null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: n
                }), this.rewardedVideoAd.onClose(t => {
                    u.fetchingVideoAd = !1, t && t.isEnded || void 0 === t ? (Ce.Instance.onShowAdCompleted(e), 
                    p.Instance.event(o.ShowAdCompleted, this.showPos), p.Instance.event(o.CloseShowAd, this.showPos), 
                    this.lastEndVideoAdTime = Date.now(), p.Instance.event(o.FinishVideoAd, this.showPos), 
                    this.report(R.watchADComplete)) : (p.Instance.event(o.CloseShowAd, this.showPos), 
                    this.report(R.watchADExit)), T.Instance.startAll();
                }), this.rewardedVideoAd.onError(e => {
                    if (!u.fetchingVideoAd) return;
                    u.fetchingVideoAd = !1, p.Instance.event(o.FetchVideoFail, this.showPos);
                    let t = y.Instance.m_videoCount, i = "cnt=" + t + ":code=" + (e.errCode ? e.errCode : "0") + ":msg=" + (e.errMsg || "");
                    Se.Instance.report(R.videoFail, {
                        info: i,
                        count: t
                    });
                }), this.rewardedVideoAd.onLoad(() => {
                    u.fetchingVideoAd = !1;
                    let e = y.Instance.m_videoCount;
                    Se.Instance.report(R.videoSuccess, {
                        info: e
                    });
                })), this.rewardedVideoAd.adUnitId = n;
                {
                    let e = y.Instance.m_videoLoadCount++;
                    y.Instance.savecheckDayTimerInfo(), Se.Instance.report(R.videoLoadCount, {
                        count: e,
                        ok: y.Instance.m_videoCount,
                        fail: y.Instance.m_videoFailCount
                    });
                }
                u.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                    u.fetchingVideoAd = !1, this.rewardedVideoAd.show(), T.Instance.stopAll();
                }).catch(function(e) {
                    u.fetchingVideoAd = !1;
                });
            }
        }
    }
    me.sInfo = {};
    class we extends ge {
        constructor() {
            super(), this.checkShared = !0, this.curShareTimer = 0, this.checkSharedVideo = !0, 
            this.curShareVideoTimer = 0, this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, 
            this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, 
            this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, this.mta = null, this.lastEndVideoAdTime = 0, 
            this.bannerAd = null, this.bannerAdPre = null, this.bannerZeroHeightCount = 0, this.bannerShowInfo = {}, 
            this.bannerError = !1, this.bannerLoadFinish = !1, this.info = we.sInfo, this.loginParams = null, 
            "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.aldOnShareAppMessage(e => this.onShareAppMessage(e)), 
            Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), p.Instance.on(o.GetFocus, this, this.onGameFocus), wx);
        }
        onShareAppMessage(e) {
            let t = de.DefaultShare, i = y.Instance.getVideoShareCfg(de.DefaultShare), n = ve.getShareInfoByCfg(i), s = n.shareContent, a = n.imgUrl, r = 0, h = "";
            return null != x.Instance && null != x.Instance.user && (h = x.Instance.user.openid, 
            r = x.Instance.user.uid), {
                title: s,
                imageUrl: a,
                query: "inviteName=" + x.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    p.Instance.event(o.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            if ("undefined" != typeof wx) {
                var i = t => {
                    we.sInfo.encryptedData = t.encryptedData, we.sInfo.iv = t.iv, we.sInfo.nickName = t.userInfo.nickName, 
                    we.sInfo.avatar = t.userInfo.avatarUrl, we.sInfo.sex = t.userInfo.gender, we.sInfo.city = t.userInfo.city, 
                    e.runWith(we.sInfo);
                }, n = t => {
                    e.runWith(we.sInfo);
                };
                wx.login({
                    force: !1,
                    success: e => {
                        let t = null == e.code ? "" : e.code, s = null == e.anonymousCode ? "" : e.anonymousCode, a = !0;
                        t.length > 5 ? a = !1 : s.length, we.sInfo.wxCode = t, we.sInfo.nCode = s, c.isAnonymous = a, 
                        wx.getSetting({
                            success: e => {
                                let t = e.authSetting["scope.userInfo"];
                                !0 === t ? wx.getUserInfo({
                                    withCredentials: !0,
                                    lang: "zh_CN",
                                    success: i,
                                    fail: n,
                                    complete: null
                                }) : n && n();
                            },
                            fail: () => {
                                n && n();
                            },
                            complete: null
                        });
                    },
                    fail: () => {
                        x.Instance.loginError = !0, p.Instance.event(o.userLoginFinish, !1);
                    },
                    complete: null
                });
            } else {
                x.Instance.user.loadCacheData();
            }
        }
        getSetting(e, t) {
            wx.getSetting({
                success: i => {
                    var n = i.authSetting;
                    !0 === n["scope.userInfo"] ? this.sdkLogin(e, t) : !1 === n["scope.userInfo"] ? this.openSetting() : n["scope.record"] ? n["scope.writePhotosAlbum"] ? n["scope.camera"] || this.sdkAuthorize("scope.camera") : this.sdkAuthorize("scope.writePhotosAlbum") : this.sdkAuthorize("scope.record");
                },
                fail: null,
                complete: null
            });
        }
        openSetting() {
            wx.openSetting({
                success: function(e) {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: e => {},
                fail: () => {},
                complete: null
            });
        }
        share(e, t, i, n, s, a, r = "") {
            if (c.IgnoreShare) return void p.Instance.event(o.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var h = i, l = "";
            null != x.Instance && null != x.Instance.user && (l = x.Instance.user.openid);
            let d = "inviteName=" + x.Instance.user.nickName + "&openid=" + l + "&pos=" + this.sharePos + "&shareTime=" + a + "&inviteCode=" + x.Instance.user.uid + "&shareScene=" + this.sharePos, u = n;
            wx.aldShareAppMessage({
                title: s,
                imageUrl: u,
                query: d,
                path: d,
                success: e => {
                    p.Instance.event(o.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: h
                    }), this.checkShared = !1, this.curShareTimer = 0, ve.finishShare(Ce.Instance.m_callShareCfg.pos, !0);
                },
                fail: () => {
                    p.Instance.event(o.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    pe.Instance.showTips("请完成分享", 2e3), this.checkShared = !1, this.curShareTimer = 0;
                }
            });
        }
        shareVideo(e) {
            var t = Date.now(), i = "";
            this.sharePos = e, null != x.Instance && null != x.Instance.user && (i = x.Instance.user.openid);
            let n = "inviteName=" + x.Instance.user.nickName + "&openid=" + i + "&pos=" + this.sharePos + "&shareTime=" + t + "&inviteCode=" + x.Instance.user.uid, s = P.Instance.videoPath;
            if (s && s.length) {
                let e = !1;
                "Douyin" === wx.getSystemInfoSync().appName && (e = !0), this.checkSharedVideo = !0, 
                this.curShareVideoTimer = Date.now(), wx.shareAppMessage({
                    channel: "video",
                    query: n,
                    path: n,
                    extra: {
                        videoPath: s,
                        videoTopics: [ c.ClientName ]
                    },
                    success: e => {
                        this.checkSharedVideo && (setTimeout(() => {
                            ve.finishShareVideo(this.sharePos);
                        }, 100), this.checkSharedVideo = !1, this.curShareVideoTimer = 0);
                    },
                    fail: e => {
                        if (this.checkSharedVideo) {
                            let t = "请完成视频分享";
                            e && e.errMsg && -1 === e.errMsg.indexOf("cancel") && (t = "分享视频失败"), pe.Instance.showTips(t, 2e3), 
                            this.checkSharedVideo = !1, this.curShareVideoTimer = 0;
                        }
                    },
                    cancel: e => {
                        this.checkSharedVideo && (pe.Instance.showTips("请完成视频分享", 2e3), this.checkSharedVideo = !1, 
                        this.curShareVideoTimer = 0);
                    }
                });
            } else pe.Instance.showTips("录制视频错误，请重新录制");
        }
        showBannerAd(e, t, i, n, s, a = 0, r = 0, h = 0) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var l = !1;
            this.bannerShowCount >= c.vGameInfo.bCount ? l = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * c.vGameInfo.bTimer && (l = !0), 
            (l || this.bannerError || !this.bannerLoadFinish) && null != this.bannerAd && (this.bannerAd.lxbannerLoadFinish ? (this.bannerAd.hide(), 
            this.bannerAdPre = this.bannerAd) : this.bannerAd.destroy(), this.bannerAd = null, 
            this.bannerRes = null), this.bannerError = !1, this.showBannerPos = e;
            u.windowHeight > 375 && (a = a / 375 * u.windowHeight, r = r / 375 * u.windowHeight);
            let d = 10;
            h = h * (2 * u.windowHeight / Laya.stage.height) / 2, this.bannerShowInfo.hAlign = i, 
            this.bannerShowInfo.vAlign = n, this.bannerShowInfo.pinY = h, this.bannerShowInfo.xOffset = a, 
            this.bannerShowInfo.yOffset = r;
            let g = (t, i) => {
                t.show().then(() => {
                    setTimeout(() => {
                        p.Instance.event(o.ShowBannerCompleted, e);
                    }, i);
                }).catch(e => {});
            };
            if (null == this.bannerAd) {
                let e = y.Instance.getNextBannerAdUnitAnd();
                this.bannerShowCount = 1, this.lastFetchBannerTime = Date.now(), this.bannerZeroHeightCount = 0, 
                this.bannerAd = wx.createBannerAd({
                    adUnitId: e,
                    style: {
                        left: 0,
                        top: 2e3,
                        width: 208
                    }
                }), this.bannerAd.lxHide = !1, this.bannerAd.onError(e => {
                    this.bannerAdPre ? (this.bannerAd.destroy(), this.bannerAd = this.bannerAdPre, this.bannerAd.lxHide = !1, 
                    this.bannerError = !1, this.bannerLoadFinish = !0, d = 0, g(this.bannerAd, d), this.adjustBanner()) : this.bannerError = !0;
                }), this.bannerAd.onResize(e => {
                    this.bannerRes = e, this.adjustBanner();
                }), this.bannerLoadFinish = !1, this.bannerAd.lxbannerLoadFinish = !1, this.bannerAd.onLoad(() => {
                    this.bannerLoadFinish = !0, this.bannerAd.lxbannerLoadFinish = !0, this.bannerAd.lxHide || g(this.bannerAd, d);
                });
            } else {
                this.bannerAd.lxHide = !1, this.bannerRes && this.adjustBanner(), d = 0, g(this.bannerAd, d), 
                this.bannerShowCount++;
            }
            this.bannerAd.style && (this.bannerAd.style.width = 208);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign, t = this.bannerShowInfo.vAlign, i = this.bannerShowInfo.pinY, n = this.bannerShowInfo.xOffset, s = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let a = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            let o = this.bannerAd.style.left, r = this.bannerAd.style.top, h = a.width, l = a.height;
            h < 128 && (l = (h = 208) / 16 * 9), l < 1 && (l = h / 16 * 9), 0 == e ? o = 0 + n : 1 == e ? o = .5 * (u.windowWidth - h) + n : 2 == e && (o = u.windowWidth - h + n), 
            0 == t ? r = 0 + s : 1 == t ? r = .5 * (u.windowHeight - l) + s : 2 == t && (r = u.windowHeight - l + s, 
            i > 0 && i < r && (r = i + 2)), o == this.bannerAd.style.left && r == this.bannerAd.style.top || (this.bannerAd.style.left = o, 
            this.bannerAd.style.top = r);
        }
        hideBannerAd() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        showFriendRank(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rank",
                type: e,
                openid: x.Instance.user.openid,
                info: t
            });
        }
        hideFriendRank(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "hideRank",
                type: e,
                openid: x.Instance.user.openid,
                info: ""
            });
        }
        showFriendRankPage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rankPage",
                type: e,
                openid: x.Instance.user.openid,
                info: t
            });
        }
        queryRank(e, t, i) {
            A.Instance.getRankList(e).then(e => {
                i.runWith({
                    res: e
                });
            }).catch(e => {});
        }
        uploadGradeData(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "gradeData",
                type: "send",
                openid: x.Instance.user.openid,
                info: e
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= c.ShareTickTimer) {
                    let e = !(!Ce.Instance.m_callShareCfg || !Ce.Instance.m_callShareCfg.fromVideoFail);
                    ve.finishShare(Ce.Instance.m_callShareCfg.pos, !0, e);
                } else pe.Instance.showTips("请完成分享", 2e3);
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onCheckShareVideo() {
            if (this.checkSharedVideo && this.curShareVideoTimer > 0) {
                Date.now() - this.curShareVideoTimer >= c.ShareTickTimer ? ve.finishShareVideo(this.sharePos) : pe.Instance.showTips("请完成视频分享", 2e3), 
                this.curShareVideoTimer = 0, this.checkSharedVideo = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare(), this.onCheckShareVideo();
            }, 10);
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        showVideoAd(e, t, i = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void pe.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return Ce.Instance.onShowAdCompleted(e), p.Instance.event(o.ShowAdCompleted, e), 
            void p.Instance.event(o.CloseShowAd, e);
            var n = "g70pni83j9j7almb3l";
            null !== t && t.length && (n = t), this.showPos = e;
            wx.getSystemInfoSync().SDKVersion;
            if (wx.createRewardedVideoAd) {
                null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: n
                }), this.rewardedVideoAd.onClose(t => {
                    u.fetchingVideoAd = !1, t && t.isEnded || void 0 === t ? (Ce.Instance.onShowAdCompleted(e), 
                    p.Instance.event(o.ShowAdCompleted, this.showPos), p.Instance.event(o.CloseShowAd, this.showPos), 
                    this.lastEndVideoAdTime = Date.now(), p.Instance.event(o.FinishVideoAd, this.showPos), 
                    this.report(R.watchADComplete)) : (p.Instance.event(o.CloseShowAd, this.showPos), 
                    this.report(R.watchADExit)), T.Instance.startAll();
                }), this.rewardedVideoAd.onError(e => {
                    if (!u.fetchingVideoAd) return y.Instance.m_videoFailCount++, void y.Instance.savecheckDayTimerInfo();
                    u.fetchingVideoAd = !1, p.Instance.event(o.FetchVideoFail, this.showPos);
                    let t = y.Instance.m_videoCount, i = "cnt=" + t + ":code=" + (e.errCode ? e.errCode : "0") + ":msg=" + (e.errMsg || "");
                    Se.Instance.report(R.videoFail, {
                        info: i,
                        count: t
                    });
                }), this.rewardedVideoAd.onLoad(() => {
                    u.fetchingVideoAd = !1;
                    let e = y.Instance.m_videoCount;
                    Se.Instance.report(R.videoSuccess, {
                        info: e
                    });
                })), this.rewardedVideoAd.adUnitId = n;
                {
                    let e = y.Instance.m_videoLoadCount++;
                    y.Instance.savecheckDayTimerInfo(), Se.Instance.report(R.videoLoadCount, {
                        count: e,
                        ok: y.Instance.m_videoCount,
                        fail: y.Instance.m_videoFailCount
                    });
                }
                u.fetchingVideoAd = !0, this.rewardedVideoAd.show().then(() => {
                    u.fetchingVideoAd = !1, T.Instance.stopAll();
                }).catch(e => {
                    this.rewardedVideoAd.load().then(() => {
                        this.rewardedVideoAd.show().then(() => {
                            u.fetchingVideoAd = !1, T.Instance.stopAll();
                        });
                    });
                });
            }
        }
    }
    we.sInfo = {};
    class fe extends ge {
        constructor() {
            super(), this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, 
            this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, 
            this.lastFetchBannerTime = 0, this.rewardedVideoAd = null, this.curShareTimer = null, 
            this.mta = null, this.lastEndVideoAdTime = 0, this.bannerAd = null, this.bannerAdPre = null, 
            this.bannerShowInfo = {}, this.bannerError = !1, this.bannerLoadFinish = !1, this.bannerOnErrorCB = null, 
            this.bannerOnResizeCB = null, this.bannerOnLoadCB = null, this.checkShared = !0, 
            this.info = fe.sInfo, this.loginParams = null, "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.onShareAppMessage(e => this.onShareAppMessage(e)), 
            Laya.MiniAdpter.window.wx.showShareMenu({
                withShareTicket: !0,
                success: function() {},
                fail: function() {}
            }), p.Instance.on(o.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = de.DefaultShare, i = y.Instance.getVideoShareCfg(de.DefaultShare), n = ve.getShareInfoByCfg(i), s = n.shareContent, a = n.imgUrl, r = 0, h = "";
            return null != x.Instance && null != x.Instance.user && (h = x.Instance.user.openid, 
            r = x.Instance.user.uid), {
                title: s,
                imageUrl: a,
                query: "inviteName=" + x.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    p.Instance.event(o.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            if ("undefined" != typeof wx) {
                var i = t => {
                    fe.sInfo.encryptedData = t.encryptedData, fe.sInfo.iv = t.iv, fe.sInfo.nickName = t.userInfo.nickName, 
                    fe.sInfo.avatar = t.userInfo.avatarUrl, fe.sInfo.sex = t.userInfo.gender, fe.sInfo.city = t.userInfo.city, 
                    e.runWith(fe.sInfo);
                }, n = t => {
                    e.runWith(fe.sInfo);
                };
                wx.login({
                    success: e => {
                        fe.sInfo.wxCode = e.code, wx.getSetting({
                            success: e => {
                                let t = e.authSetting["scope.userInfo"];
                                !0 === t ? wx.getUserInfo({
                                    withCredentials: !0,
                                    lang: "zh_CN",
                                    success: i,
                                    fail: n,
                                    complete: null
                                }) : n && n();
                            },
                            fail: () => {
                                n && n();
                            },
                            complete: null
                        });
                    },
                    fail: () => {
                        x.Instance.loginError = !0, p.Instance.event(o.userLoginFinish, !1);
                    },
                    complete: null
                });
            } else {
                x.Instance.user.loadCacheData();
            }
        }
        getSetting(e, t) {
            wx.getSetting({
                success: i => {
                    var n = i.authSetting;
                    !0 === n["scope.userInfo"] ? this.sdkLogin(e, t) : !1 === n["scope.userInfo"] ? this.openSetting() : n["scope.record"] ? n["scope.writePhotosAlbum"] ? n["scope.camera"] || this.sdkAuthorize("scope.camera") : this.sdkAuthorize("scope.writePhotosAlbum") : this.sdkAuthorize("scope.record");
                },
                fail: null,
                complete: null
            });
        }
        openSetting() {
            wx.openSetting({
                success: function(e) {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: e => {},
                fail: () => {},
                complete: null
            });
        }
        share(e, t, i, n, s, a, r = "") {
            if (c.IgnoreShare) return void p.Instance.event(o.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var h = i, l = "";
            null != x.Instance && null != x.Instance.user && (l = x.Instance.user.openid);
            let d = "inviteName=" + x.Instance.user.nickName + "&openid=" + l + "&pos=" + this.sharePos + "&shareTime=" + a + "&inviteCode=" + x.Instance.user.uid + "&shareScene=" + this.sharePos, u = n;
            wx.shareAppMessage({
                title: s,
                imageUrl: u,
                query: d,
                path: d,
                success: e => {
                    p.Instance.event(o.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: h
                    });
                },
                fail: () => {
                    p.Instance.event(o.ShareFail, {
                        pos: this.sharePos,
                        from: h
                    });
                },
                cancel: e => {
                    "undefined" == typeof wx || Se.wxCheck() || wx.showModal({
                        title: "提示",
                        content: "请完成分享!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    }), this.checkShared = !1, this.curShareTimer = 0;
                }
            });
        }
        shareVideo(e) {}
        showBannerAd(e, t, i, n, s, a = 0, r = 0, h = 0) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var l = !1;
            this.bannerShowCount >= c.vGameInfo.bCount ? l = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * c.vGameInfo.bTimer && (l = !0), 
            (l || this.bannerError || !this.bannerLoadFinish) && null != this.bannerAd && (this.bannerAd.lxbannerLoadFinish ? (this.bannerAd.hide(), 
            this.bannerAdPre && (this.bannerAdPre.destroy(), this.bannerAdPre.offError(this.bannerOnErrorCB), 
            this.bannerAdPre.offResize(this.bannerOnResizeCB), this.bannerAdPre.offLoad(this.bannerOnLoadCB), 
            this.bannerAdPre = null), this.bannerAdPre = this.bannerAd) : (this.bannerAd.destroy(), 
            this.bannerAd.offError(this.bannerOnErrorCB), this.bannerAd.offResize(this.bannerOnResizeCB), 
            this.bannerAd.offLoad(this.bannerOnLoadCB)), this.bannerAd = null, this.bannerRes = null), 
            this.bannerError = !1, this.showBannerPos = e;
            let d = s || 300;
            (d = d / 375 * u.windowWidth) > 300 && (d = 300), u.windowWidth > 375 && (a = a / 375 * u.windowWidth, 
            r = r / 375 * u.windowWidth);
            let g = 10;
            u.windowHeight, Laya.stage.height;
            h = h * u.windowWidth / Laya.stage.width, this.bannerShowInfo.hAlign = i, this.bannerShowInfo.vAlign = n, 
            this.bannerShowInfo.pinY = h, this.bannerShowInfo.xOffset = a, this.bannerShowInfo.yOffset = r;
            let m = (t, i) => {
                t.show().then(() => {
                    setTimeout(() => {
                        p.Instance.event(o.ShowBannerCompleted, e);
                    }, i), Se.Instance.report(R.bannerSuccess);
                }).catch(e => {});
            }, w = this;
            if (null === this.bannerOnErrorCB && (this.bannerOnErrorCB = (e => {
                let t = "code=" + (e.errCode ? e.errCode : "0") + ":msg=" + (e.errMsg || "");
                Se.Instance.report(R.bannerFail, {
                    info: t
                }), w.bannerAdPre ? (w.bannerAd.destroy(), w.bannerAd = w.bannerAdPre, w.bannerAd.lxHide = !1, 
                w.bannerError = !1, w.bannerLoadFinish = !0, g = 0, w.adjustBanner(), m(w.bannerAd, g)) : w.bannerError = !0;
            })), null === this.bannerOnResizeCB && (this.bannerOnResizeCB = (e => {
                w.bannerRes = e, w.adjustBanner(), w.bannerAd.lxHide;
            })), null === this.bannerOnLoadCB && (this.bannerOnLoadCB = (() => {
                w.bannerLoadFinish = !0, w.bannerAd.lxbannerLoadFinish = !0, w.bannerAd.lxHide || m(w.bannerAd, g);
            })), null == this.bannerAd) {
                this.bannerShowCount = 1, this.lastFetchBannerTime = Date.now();
                let e = "800382f49bbfd8e7dbe73ab12b71598b", t = 0, i = 0;
                d = 300, i = .5 * (u.windowWidth - d), t = u.windowHeight - 72;
                let n = 0;
                Laya.stage.height / Laya.stage.width > 2 && (n = 100 / 2436 * Laya.stage.width), 
                t -= n, this.bannerAd = wx.createBannerAd({
                    adUnitId: e,
                    style: {
                        left: i,
                        top: t,
                        width: d
                    }
                }), this.bannerAd.lxHide = !1, this.bannerAd.onError(this.bannerOnErrorCB), this.bannerAd.onResize(this.bannerOnResizeCB), 
                this.bannerLoadFinish = !1, this.bannerAd.lxbannerLoadFinish = !1, this.bannerAd.onLoad(this.bannerOnLoadCB);
            } else {
                this.bannerAd.lxHide = !1, this.bannerRes && this.adjustBanner(), g = 0, m(this.bannerAd, g), 
                this.bannerShowCount++;
            }
            this.bannerAd.style && (this.bannerAd.style.width = d);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign, t = this.bannerShowInfo.vAlign, i = this.bannerShowInfo.pinY, n = this.bannerShowInfo.xOffset, s = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let a = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == e ? this.bannerAd.style.left = 0 + n : 1 == e ? this.bannerAd.style.left = .5 * (u.windowWidth - a.width) + n : 2 == e && (this.bannerAd.style.left = u.windowWidth - a.width + n), 
            0 == t) this.bannerAd.style.top = 0 + s; else if (1 == t) this.bannerAd.style.top = .5 * (u.windowHeight - a.height) + s; else if (2 == t) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 100 / 2436 * Laya.stage.width), 
                this.bannerAd.style.top = u.windowHeight - a.height + s - e, i > 0 && i < this.bannerAd.style.top && (this.bannerAd.style.top = i + 2);
            }
            let r = (this.bannerAd.style.top + a.height) * Laya.stage.width / u.windowWidth, h = this.bannerAd.style.top * Laya.stage.width / u.windowWidth;
            p.Instance.event(o.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: r,
                top: h,
                BannerAD: this.bannerAd
            });
        }
        hideBannerAd() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        showFriendRank(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rank",
                type: e,
                openid: x.Instance.user.openid,
                info: t
            });
        }
        hideFriendRank(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "hideRank",
                type: e,
                openid: x.Instance.user.openid,
                info: ""
            });
        }
        showFriendRankPage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "rankPage",
                type: e,
                openid: x.Instance.user.openid,
                info: t
            });
        }
        queryRank(e, t, i) {
            A.Instance.getRankList(e).then(e => {
                i.runWith({
                    res: e
                });
            }).catch(e => {});
        }
        uploadGradeData(e) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "gradeData",
                type: "send",
                openid: x.Instance.user.openid,
                info: e
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= c.ShareTickTimer) {
                    let e = !(!Ce.Instance.m_callShareCfg || !Ce.Instance.m_callShareCfg.fromVideoFail);
                    ve.finishShare(Ce.Instance.m_callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !Se.wxCheck()) {
                    let e = "请完成分享!";
                    0 === this.sharePos && (e = ""), e.length && wx.showModal({
                        title: "提示",
                        content: "请完成分享!",
                        showCancel: !0,
                        cancelText: "取消",
                        cancelColor: "#000000",
                        confirmText: "确定",
                        confirmColor: "#3CC51F",
                        success: e => {},
                        fail: () => {},
                        complete: () => {}
                    });
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 10);
        }
        isLowDevice() {
            return Se.isAndroid && Se.isLowDevice;
        }
        reportAnalytics(e) {}
        showVideoAd(e, t, i = "") {
            if (this.lastEndVideoAdTime > 0) {
                let e = 1e3 * 7 - (Date.now() - this.lastEndVideoAdTime);
                if (e > 0) return e = Math.ceil(e / 1e3), void pe.Instance.showTips("间隔时间太短，请等待" + e + "秒");
            }
            if ("undefined" == typeof wx) return Ce.Instance.onShowAdCompleted(e), p.Instance.event(o.ShowAdCompleted, e), 
            void p.Instance.event(o.CloseShowAd, e);
            var n = "f8451b2b0942a1961ca8ae97488998ff";
            if (this.showPos = e, wx.createRewardedVideoAd) {
                null == this.rewardedVideoAd && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: n
                }), this.rewardedVideoAd.onClose(t => {
                    u.fetchingVideoAd = !1, t && t.isEnded || void 0 === t ? (Ce.Instance.onShowAdCompleted(e), 
                    p.Instance.event(o.ShowAdCompleted, this.showPos), p.Instance.event(o.CloseShowAd, this.showPos), 
                    this.lastEndVideoAdTime = Date.now(), p.Instance.event(o.FinishVideoAd, this.showPos), 
                    this.report(R.watchADComplete)) : (p.Instance.event(o.CloseShowAd, this.showPos), 
                    this.report(R.watchADExit)), T.Instance.startAll();
                }), this.rewardedVideoAd.onError(e => {
                    if (!u.fetchingVideoAd) return;
                    u.fetchingVideoAd = !1, p.Instance.event(o.FetchVideoFail, this.showPos);
                    let t = y.Instance.m_videoCount, i = "cnt=" + t + ":code=" + (e.errCode ? e.errCode : "0") + ":msg=" + (e.errMsg || "");
                    Se.Instance.report(R.videoFail, {
                        info: i,
                        count: t
                    });
                }), this.rewardedVideoAd.onLoad(() => {
                    u.fetchingVideoAd = !1;
                    let e = y.Instance.m_videoCount;
                    Se.Instance.report(R.videoSuccess, {
                        info: e
                    });
                })), this.rewardedVideoAd.adUnitId = n;
                {
                    let e = y.Instance.m_videoLoadCount++;
                    y.Instance.savecheckDayTimerInfo(), Se.Instance.report(R.videoLoadCount, {
                        count: e,
                        ok: y.Instance.m_videoCount,
                        fail: y.Instance.m_videoFailCount
                    });
                }
                u.fetchingVideoAd = !0, this.rewardedVideoAd.load().then(() => {
                    u.fetchingVideoAd = !1, this.rewardedVideoAd.show(), T.Instance.stopAll();
                }).catch(function(e) {
                    u.fetchingVideoAd = !1;
                });
            }
        }
    }
    fe.sInfo = {}, function(e) {
        e.BigAdDataChange = "BigAdDataChange", e.nativeBannerChange = "nativeBannerChange", 
        e.ADBannerShow = "ADBannerShow", e.IconADDataChange = "IconADDataChange";
    }(ae || (ae = {}));
    class Ie {
        constructor() {
            this.unitIdPre = null, this.nativeAd = null, this.bigAD = null, this.iconAD = null, 
            this.bigUnitIdPre = null, this.showBannerCount = 0, this.lastShowTime = 0, this.closeADCount = 0, 
            this.retryNativeTime = 0, this.retryBigTime = 0, this.retryIconTime = 0;
        }
        static get Instance() {
            return null === Ie._instance && (Ie._instance = new Ie(), Ie._instance.lastShowTime = Date.now()), 
            Ie._instance;
        }
        reportAdShow(e, t) {
            this.canShowOppoAD() && t && t.length && (1 === e ? this.nativeAd && this.nativeAd.reportAdShow({
                adId: t
            }) : 2 === e && this.bigAD && this.bigAD.reportAdShow({
                adId: t
            }));
        }
        reportAdClick(e, t) {
            this.canShowOppoAD() && t && t.length && (1 === e ? this.nativeAd && this.nativeAd.reportAdClick({
                adId: t
            }) : 2 === e && this.bigAD && this.bigAD.reportAdClick({
                adId: t
            }));
        }
        canShowOppoAD() {
            return !(this.closeADCount > 5) && ("undefined" != typeof qg && Se.IsOppo());
        }
        doShowAD() {
            this.showBannerCount++, this.lastShowTime = Date.now();
        }
        checkUpdateADData() {
            return !this.canShowOppoAD() || !!(this.nativeAd && this.nativeAd.adClick || this.showBannerCount > c.vGameInfo.oppoADInfo.bannerCount || Date.now() - this.lastShowTime > 1e3 * c.vGameInfo.oppoADInfo.bannerTime) && (this.refreashADData(!0), 
            !0);
        }
        preloadADData() {
            this.refreashADData(!0), this.refeashBigADData(!0);
        }
        refreashADData(e = !1) {
            if (!this.canShowOppoAD()) return;
            if (e && (this.retryNativeTime = 0), !e && this.retryNativeTime > 3) return;
            let t = this.getNextPosId([ "159999", "160000", "160001" ], this.unitIdPre);
            if (this.nativeAd) {
                if (this.nativeAd.isLoading) return;
                this.nativeAd.destroy();
            }
            this.nativeAd = qg.createNativeAd({
                posId: t
            }), this.nativeAd.onLoad(e => {
                this.retryNativeTime = 0, this.showBannerCount = 0, this.unitIdPre = t, this.nativeAd.isLoading = !1, 
                this.nativeAd.adList = e.adList, p.Instance.event(ae.nativeBannerChange);
            }), this.nativeAd.onError(e => {
                this.nativeAd.isLoading = !1, this.nativeAd && (this.nativeAd.destroy(), this.nativeAd = null, 
                Laya.timer.once(100, this, this.refreashADData));
            }), this.nativeAd.posId = t, this.nativeAd.isLoading = !0, this.retryNativeTime++, 
            this.nativeAd.load();
        }
        refeashBigADData(e = !1) {}
        refeashIconADData(e = !1) {}
        getNextPosId(e, t) {
            if (t) for (let i = 0; i < e.length; i++) if (e[i] == t) {
                e.splice(i, 1);
                break;
            }
            return e[ve.nextNumber(0, e.length - 1)];
        }
        doCloseByUser() {
            this.closeADCount += 1;
        }
    }
    Ie._instance = null;
    class ye extends ge {
        constructor() {
            if (super(), this.info = {}, this.loginParams = {}, this.setNickNameCallback = null, 
            this.setHeadCallback = null, this.showPos = 0, this.sharePos = 0, this.showBannerPos = 0, 
            this.lastFetchBannerTime = 0, this.rewardedVideoAd1 = null, this.curShareTimer = null, 
            this.mta = null, this.lastEndVideoAdTime = 0, this.reVideoPreCount = 0, this.rewardedVideoAd = null, 
            this.rewardedVideoAdPre = null, this.interstitialAd = null, this.lastInterstitialAdTime = 0, 
            this.adInit = -1, this.nativeAd = null, this.bannerAd = null, this.bannerAdPre = null, 
            this.bannerShowInfo = {}, this.bannerError = !1, this.bannerLoadFinish = !1, this.bannerOnErrorCB = null, 
            this.bannerOnResizeCB = null, this.bannerOnLoadCB = null, this.checkShared = !0, 
            this.bannerCloseByUserCount = 0, this.showInAdCount = 0, this.info = ye.sInfo, this.loginParams = null, 
            "undefined" == typeof qg) return;
            p.Instance.on(o.GetFocus, this, this.onGameFocus), p.Instance.on(o.dataOverDayInfo, this, this.resetOverDay), 
            this.initAd(), this.loadOppoData();
            let e = u.curStartTime;
            !1 === f.isToday(e) && this.resetOverDay();
        }
        initAd() {
            return this.adInit > 0 || 0 != this.adInit && ("undefined" != typeof qg && qg.initAdService({
                appId: "30247023",
                isDebug: !0,
                success: e => {
                    this.adInit = 1, B.once(2e3, this, () => {
                        this.doAdPreLoad();
                    });
                },
                fail: e => {
                    this.adInit = -1;
                },
                complete: e => {}
            }), this.adInit = 0, !1);
        }
        saveOppoData() {
            let e = Laya.LocalStorage.getJSON("OppoADData");
            e && (this.bannerCloseByUserCount = e.bannerCloseByUserCount, this.showInAdCount = e.showInAdCount);
        }
        loadOppoData() {
            Laya.LocalStorage.setJSON("OppoADData", {
                bannerCloseByUserCount: this.bannerCloseByUserCount,
                showInAdCount: this.showInAdCount
            });
        }
        resetOverDay() {
            this.showInAdCount = 0, this.lastInterstitialAdTime = 0, this.bannerCloseByUserCount = 0;
        }
        doAdPreLoad() {
            this.adInit > 0 && (this.showVideoAd(0, 0, "", !0), Ie.Instance.preloadADData());
        }
        onShareAppMessage(e) {}
        sdkLogin(e, t) {
            if ("undefined" != typeof qg) {
                qg.login({
                    pkgName: "",
                    success: t => {
                        let i = t.data, n = "";
                        i && i.token ? n = i.token : t.token && (n = i.token), ye.sInfo.wxCode = n, (t => {
                            ye.sInfo.iv = t.uid || "", ye.sInfo.nickName = t.nickName || "", ye.sInfo.avatar = t.avatar || "";
                            let i = x.Instance.user;
                            t.nickName && t.nickName.length && (i.nickName = t.nickName), t.avatar && t.avatar.length && (i.avatar = t.avatar);
                            let n = 0;
                            t.sex && ("m" == t.sex.toLowerCase() ? n = 1 : "f" == t.sex.toLowerCase() && (n = 2)), 
                            ye.sInfo.sex = n, e.runWith(ye.sInfo);
                        })(t);
                    },
                    fail: () => {
                        x.Instance.loginError = !0, p.Instance.event(o.userLoginFinish, !1);
                        {
                            let e = {
                                title: "温馨提示",
                                showCancel: !1,
                                content: "您还没有登录帐号，请先完成登录哦~",
                                confirmText: "确定",
                                success: e => {
                                    window.GameMain.doLoginAction();
                                }
                            };
                            Se.Instance.showModal(e);
                        }
                    },
                    complete: null
                });
            } else {
                x.Instance.user.loadCacheData();
            }
        }
        getSetting(e, t) {}
        openSetting() {}
        sdkAuthorize(e) {}
        share(e, t, i, n, s, a, o = "") {}
        shareVideo(e) {}
        showInterstitialAd(e, t = "", i = "") {
        }
        getNextPosId(e, t) {
            if (t) for (let i = 0; i < e.length; i++) if (e[i] == t) {
                e.splice(i, 1);
                break;
            }
            return e[ve.nextNumber(0, e.length - 1)];
        }
        showBannerAd2() {
            if ("undefined" != typeof qg && qg.createBannerAd) {
                let e = "159995";
                this.bannerAd || (this.bannerAd = qg.createBannerAd({
                    posId: e
                }), this.bannerAd.onError(e => {}), this.bannerAd.onHide(() => {}), this.bannerAd.onShow(() => {
                    this.bannerAd.lxHide && (this.bannerAd.destroy(), this.bannerAd = null);
                })), this.bannerAd.lxHide = !1, this.bannerAd.adUnitId = e, this.bannerAd && this.bannerAd.show();
            }
        }
        showBannerAd(e, t, i, n, s, a = 0, o = 0, r = 0) {
            this.showBannerAd2();
        }
        adjustBanner() {}
        hideBannerAd() {
            null != this.bannerAd && (this.bannerAd.hide(), this.bannerAd.lxHide = !0);
        }
        report(e, t) {
            "undefined" != typeof qg && qg.aldSendEvent && qg.aldSendEvent(e, t);
        }
        showFriendRank(e, t) {}
        hideFriendRank(e) {}
        showFriendRankPage(e, t) {}
        queryRank(e, t, i) {
            A.Instance.getRankList(e).then(e => {
                i.runWith({
                    res: e
                });
            }).catch(e => {});
        }
        uploadGradeData(e) {}
        onCheckShare() {}
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 10);
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        showVideoAd(e, t, i = "", n = !1) {
            if (qg.createRewardedVideoAd) {
                let t = [ "159996", "159997", "159998" ];
                if (n) {
                    if (this.rewardedVideoAd || this.rewardedVideoAdPre) return;
                    let e = this.getNextPosId(t, null);
                    return this.rewardedVideoAd1 = qg.createRewardedVideoAd({
                        posId: e
                    }), this.rewardedVideoAd1.onError(e => {
                        this.reVideoPreCount += 1, this.reVideoPreCount < 5 && B.once(2e3, this, () => {
                            this.showVideoAd(0, 0, "", !0);
                        });
                    }), this.rewardedVideoAd1.posId = e, this.rewardedVideoAd1.onLoad(() => {
                        this.rewardedVideoAdPre = this.rewardedVideoAd1;
                    }), void this.rewardedVideoAd1.load();
                }
                if (!this.initAd()) return void pe.Instance.showTips("获取视频失败");
                if ("undefined" == typeof qg) return p.Instance.event(o.ShowAdCompleted, e), void p.Instance.event(o.CloseShowAd, e);
                this.showPos = e;
                let i = () => {
                    this.rewardedVideoAd && this.rewardedVideoAd.show(), T.Instance.stopAll();
                }, s = e => {
                    u.fetchingVideoAd = !1, this.rewardedVideoAdPre ? (this.rewardedVideoAdPre.show(), 
                    T.Instance.stopAll()) : p.Instance.event(o.FetchVideoFail, this.showPos);
                }, a = e => {
                    e && e.isEnded || void 0 === e ? (p.Instance.event(o.ShowAdCompleted, this.showPos), 
                    p.Instance.event(o.CloseShowAd, this.showPos)) : p.Instance.event(o.CloseShowAd, this.showPos), 
                    T.Instance.startAll();
                };
                if (null == this.rewardedVideoAd && this.rewardedVideoAdPre) return this.rewardedVideoAd = this.rewardedVideoAdPre, 
                this.rewardedVideoAd.onClose(a), this.rewardedVideoAd.onError(s), void i();
                this.rewardedVideoAd && (this.rewardedVideoAd != this.rewardedVideoAdPre && (this.rewardedVideoAd.offLoad(), 
                this.rewardedVideoAd.offError(), this.rewardedVideoAd.offClose(), this.rewardedVideoAd.destroy()), 
                this.rewardedVideoAd = null);
                let r = null;
                this.rewardedVideoAdPre && this.rewardedVideoAdPre.posId && (r = this.rewardedVideoAdPre.posId);
                let h = this.getNextPosId(t, r);
                null == this.rewardedVideoAd && (this.rewardedVideoAd = qg.createRewardedVideoAd({
                    posId: h
                }), this.rewardedVideoAd.onClose(a), this.rewardedVideoAd.onError(s), this.rewardedVideoAd.onLoad(() => {
                    i(), u.fetchingVideoAd = !1, this.rewardedVideoAdPre = this.rewardedVideoAd;
                })), this.rewardedVideoAd.posId = h, u.fetchingVideoAd = !0, this.rewardedVideoAd.load();
            }
        }
    }
    ye.sInfo = {};
    class Se {
        static IsTencentGame() {
            return c.Platform == t.Wechat || c.Platform == t.QQ;
        }
        static IsWeChat() {
            return c.Platform == t.Wechat;
        }
        static IsTouTiao() {
            return c.Platform == t.TouTiao;
        }
        static IsQQ() {
            return c.Platform == t.QQ;
        }
        static IsOppo() {
            return c.Platform == t.Oppo;
        }
        static canShowWXOpenDomain() {
            return !(!Se.IsTencentGame() || !c.SupportOpenDomain) && "undefined" != typeof wx;
        }
        static wxCheck() {
            return !c.Dev && c.State == s.Check;
        }
        static adCheck() {
            return Se.IsQQ() ? Se.wxCheck() || c.vGameInfo.qqacv === c.ClientVer : Se.IsTouTiao() ? Se.wxCheck() || c.vGameInfo.ttacv === c.ClientVer : Se.IsWeChat() ? Se.wxCheck() || c.vGameInfo.acv === c.ClientVer : Se.wxCheck();
        }
        static showRecommendBox2() {
            return !(!Se.IsWeChat() || Se.wxCheck() || !c.vGameInfo.sRecommend || !N.Instance.tuiInfo);
        }
        static showRecommendBoxOppo() {
        }
        static showRecommendBoxTT() {
            return !1;
        }
        static IsNative() {
            return !!Se.AppConch();
        }
        static AppConch() {
            return window.conch;
        }
        static nodeReport(e, t) {
            u.isNewPlayer && Se.Instance.report(e, t);
        }
        static getNormalBannerOffset() {
            return 40 / u.windowWidth * Laya.stage.width;
        }
        static bannerMoveY(e = 0) {
            return Se.getNormalBannerOffset() + e;
        }
        static getPlatform() {
            return "undefined" != typeof qg ? qg : "undefined" != typeof wx ? wx : null;
        }
        static registerQGAldRequest() {
        }
        static installShortCut(e = !0) {
            "undefined" != typeof qg && qg.installShortcut({
                success: () => {
                    e && pe.Instance.showTips("添加成功下次可以在直接在桌面图标打开了!");
                },
                fail: t => {
                    e && pe.Instance.showTips("添加桌面图标失败");
                },
                complete: function() {}
            });
        }
        static isLong() {
            return !(Laya.stage.height / Laya.stage.width < 2);
        }
        static get Instance() {
            if (null == Se._instance) switch (c.Platform) {
              case t.Wechat:
                "undefined" != typeof wx ? Se._instance = new me() : Se._instance = new ge();
                break;

              case t.TouTiao:
                "undefined" != typeof wx ? Se._instance = new we() : Se._instance = new ge();
                break;

              case t.QQ:
                "undefined" != typeof wx ? Se._instance = new fe() : Se._instance = new ge();
                break;

              case t.Oppo:
                "undefined" != typeof qg ? (Se.isQG = !0, Se._instance = new ye()) : Se._instance = new ge();
                break;

              default:
                Se._instance = new ge();
            }
            return Se._instance;
        }
    }
    Se.appName = "", Se.isQG = !1, function(e) {
        e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(oe || (oe = {})), function(e) {
        e[e.vhechengAdVideo = 1] = "vhechengAdVideo", e[e.vbuildAdVideo = 2] = "vbuildAdVideo", 
        e[e.vsignAdVideo = 3] = "vsignAdVideo", e[e.vofflineAdVideo = 4] = "vofflineAdVideo";
    }(re || (re = {})), function(e) {
        e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(he || (he = {})), function(e) {
        e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
    }(le || (le = {})), function(e) {
        e[e.Unknow = -1] = "Unknow", e[e.DefaultShare = 0] = "DefaultShare", e[e.HomeShare = 1] = "HomeShare", 
        e[e.InviteShare = 2] = "InviteShare", e[e.RankShare = 3] = "RankShare", e[e.SettleShare = 4] = "SettleShare", 
        e[e.trainAdVideo = 30] = "trainAdVideo", e[e.skinAdVideo = 31] = "skinAdVideo", 
        e[e.goldAdVideo = 32] = "goldAdVideo", e[e.upgradeAdVideo = 33] = "upgradeAdVideo", 
        e[e.eggAdVideo = 34] = "eggAdVideo", e[e.hintAdVideo = 35] = "hintAdVideo", e[e.shareVideoSwitchPosBegin = 40] = "shareVideoSwitchPosBegin", 
        e[e.reviewAdVideo = 41] = "reviewAdVideo", e[e.reviewShare = 42] = "reviewShare", 
        e[e.signAdVideo = 43] = "signAdVideo", e[e.signShare = 44] = "signShare", e[e.shareVideoSwitchPosEnd = 60] = "shareVideoSwitchPosEnd";
    }(de || (de = {}));
    class Ce {
        constructor() {
            this.m_lastCallTime = 0, this.m_videoMapping = {}, this.m_shareMapping = {}, this.m_clickShareCnts = {}, 
            this.m_canFetchVideo = !0, this.m_useVideoMaxTime = null, this.m_isShowingBanner = !1, 
            this.m_inited = !1, this.m_callShare = !1, this.m_callShareReward = !1, this.m_dailyShareMapping = {}, 
            this.m_lastCallTime = 0, this.m_videoMapping = {}, this.m_shareMapping = {}, this.m_clickShareCnts = {}, 
            this.m_canFetchVideo = !0, this.m_useVideoMaxTime = null, this.m_isShowingBanner = !1, 
            this.m_dailyShareMapping = {}, this.m_inited = !1, this.m_callShare = !1, this.m_callShareReward = !1, 
            this.registerEvent(), this.readVideoCache();
        }
        static get Instance() {
            return null == Ce._instance && (Ce._instance = new Ce()), Ce._instance;
        }
        static canShowVideoADByCount() {
            return !(!Se.IsTouTiao() && !Se.IsOppo()) || y.Instance.m_videoCount < c.vAdCount;
        }
        fetchVideoFailed() {
            return !this.m_canFetchVideo;
        }
        isFetchVideoFailCountOver() {
            return y.Instance.m_videoFailCount > c.vGameInfo.videoFailMax;
        }
        canShowVideo() {
            return !this.isFetchVideoFailCountOver();
        }
        onFetchVideoFail(e) {
            if (y.Instance.m_videoFailCount++, y.Instance.savecheckDayTimerInfo(), this.m_canFetchVideo = !1, 
            this.m_useVideoMaxTime = new Date().toString(), this.saveVideoCache(), Se.wxCheck() || this.isForceVideoWithError(e) || !this.checkShowShareAfterVideoFail(e)) {
                pe.Instance.showTips("获取视频失败");
                y.Instance.getVideoShareCfg(e);
            }
        }
        onCheckVideoCntTimer() {
            if (!this.m_canFetchVideo) {
                var e = new Date(this.m_useVideoMaxTime), t = e.getFullYear(), i = e.getMonth(), n = e.getDate(), s = new Date(), a = s.getFullYear(), o = s.getMonth(), r = s.getDate();
                (a > t || a == t && (o > i || o == i && r > n)) && (this.m_canFetchVideo = !0, this.m_useVideoMaxTime = null, 
                this.saveVideoCache());
            }
        }
        saveShareCache(e, t) {
            this.m_dailyShareMapping[e] = {
                shared: !0,
                shareTime: t
            }, Laya.LocalStorage.setJSON("dailySharedMapping", this.m_dailyShareMapping);
        }
        saveVideoCache() {
            Laya.LocalStorage.setItem("canFetchVideo", (this.m_canFetchVideo ? 1 : 0).toString()), 
            Laya.LocalStorage.setItem("useVideoMaxTime", this.m_useVideoMaxTime);
        }
        readVideoCache() {
            var e = new Date(), t = e.getFullYear(), i = e.getMonth(), n = e.getDate(), s = Laya.LocalStorage.getJSON("dailySharedMapping");
            for (var a in s) {
                var o = s[a], r = o.shared, h = o.shareTime, l = new Date(h), d = l.getFullYear(), c = l.getMonth(), u = l.getDate();
                (t > d || t == d && (i > c || i == c && n > u)) && (r = !1, h = null), this.m_dailyShareMapping[a] = {
                    shared: r,
                    shareTime: h
                };
            }
            if (s = Laya.LocalStorage.getItem("canFetchVideo") || 0, this.m_canFetchVideo = 1 == (parseInt(s) || 0), 
            this.m_useVideoMaxTime = Laya.LocalStorage.getItem("useVideoMaxTime"), null != this.m_useVideoMaxTime && "" != this.m_useVideoMaxTime.toString().trim()) {
                var p = new Date(this.m_useVideoMaxTime);
                d = p.getFullYear(), c = p.getMonth(), u = p.getDate();
                (t > d || t == d && (i > c || i == c && n > u)) && (this.m_canFetchVideo = !0, this.m_useVideoMaxTime = null, 
                this.saveVideoCache());
            } else this.m_canFetchVideo = !0;
        }
        getVideoCnt(e) {
            var t = this.m_videoMapping[e];
            return null == t ? 0 : t;
        }
        getShareClickCnt(e) {
            var t = this.m_clickShareCnts[e];
            return null == t ? 0 : t;
        }
        addShareClickCnt(e) {
            var t = this.m_clickShareCnts[e];
            null == t ? t = 1 : t++, this.m_clickShareCnts[e] = t;
        }
        showBanner(e, t = -1) {
            if (!this.shouldShowForBanner(e)) return !1;
            Se.IsOppo() && (e == ce.StartView.id ? e = ce.ReviewView.id : e != ce.ReviewView.id && e != ce.SettleView.id || (e = ce.StartView.id));
            var i = y.Instance.getBannerCfg(e);
            if (null == i) return !1;
            if (Se.adCheck()) {
                if (e == ce.ReviewView.id || e == ce.GoldView.id) return !1;
                if (!Se.isLong() && e == ce.SettleView.id) return !1;
            }
            this.m_isShowingBanner = !0;
            let n = i.hAlign, s = i.vAlign, a = i.xOffset;
            return (Se.wxCheck() || !c.isF || c.isLimitCityB) && t > 0 && (t += ve.getNormalBannerOffset()), 
            Se.Instance.showBannerAd(e, i.adunit, n, s, i.w, a, i.yOffset, t), !0;
        }
        hideBanner(e = 0) {
            this.m_isShowingBanner = !1, Se.Instance.hideBannerAd(e);
        }
        isShowingBanner() {
            return this.m_isShowingBanner;
        }
        restoreBanner(e, t = 0) {
            this.showBanner(e, t);
        }
        showVideoOrShare(e, t) {
            if (this.m_lastCallTime > 0 && Date.now() - this.m_lastCallTime < 300) return;
            let i = 1e4;
            if (Se.IsTouTiao() && (i = 5e3), u.fetchingVideoAd && Date.now() - this.m_lastCallTime < i) pe.Instance.showTips("正在拉取视频", 2e3); else {
                this.m_callShareReward = !1, this.m_callShare = !1, this.m_lastCallTime = Date.now();
                var n = y.Instance.getVideoShareCfg(e);
                null != n && (n.type == oe.Video ? this.handleVideo(n) : this.handleShare(n, !0));
            }
        }
        isForceVideo(e) {
            return e === de.trainAdVideo || e === de.skinAdVideo || e === de.goldAdVideo || e === de.upgradeAdVideo || e === de.eggAdVideo || e === de.hintAdVideo;
        }
        isForceVideoWithError(e) {
            return e === de.trainAdVideo || e === de.skinAdVideo || e === de.goldAdVideo || e === de.upgradeAdVideo || e === de.eggAdVideo || e === de.hintAdVideo;
        }
        checkShowShareAfterVideoFail(e, t = !1) {
            let i = !1;
            if (y.Instance.m_vsFailShareCount + y.Instance.m_videoCount >= c.vGameInfo.vsAllCount && (i = !0), 
            i || y.Instance.m_vsFailShareCount >= c.vGameInfo.vsFailShareCount) return !1;
            if (t) return !0;
            this.m_callShareReward = !1, this.m_callShare = !1, this.m_lastCallTime = Date.now();
            var n = Date.now();
            let s = ve.getShareInfoByCfg(null);
            return Se.Instance.share(e, !1, 1, s.imgUrl, s.shareContent, n, ""), this.m_callShareReward = !0, 
            this.m_callShare = !0, this.m_callShareCfg = {
                pos: e,
                fromVideoFail: !0
            }, !0;
        }
        preCheckHandleVideo(e) {
            return !this.canShowVideo() && !this.isForceVideo(e) || (!!Ce.canShowVideoADByCount() || !(Se.wxCheck() || !this.checkShowShareAfterVideoFail(e, !0)));
        }
        handleVideo(e) {
        }
        handleShare(e, t) {
        }
        hasDailyShared(e) {
            var t = this.m_dailyShareMapping[e];
            return null != t && t.shared;
        }
        isVideoShareSwitchPos(e) {
            return e >= de.shareVideoSwitchPosBegin && e <= de.shareVideoSwitchPosEnd;
        }
        onShowAdCompleted(e, t = !1) {
            let i = this.m_videoMapping[e];
            if (null == i ? i = 1 : i++, this.m_videoMapping[e] = i, t) return y.Instance.m_vsFailShareCount++, 
            void y.Instance.savecheckDayTimerInfo();
            this.isVideoShareSwitchPos(e) && (y.Instance.m_vsCount++, y.Instance.savecheckDayTimerInfo());
        }
        onFinishVideoAd(e) {
            y.Instance.m_videoCount++, y.Instance.savecheckDayTimerInfo();
        }
        onGameFocus() {
            this.m_callShare = !1;
        }
        getVSShowType() {
            if (!c.vsInfo) return le.Default;
            let e = c.vsInfo.type, t = c.vsInfo.snum, i = c.vsInfo.vnum, n = t + i;
            if (e === he.Default || 0 === t && 0 === i) return le.Default;
            if (0 === t && i > 0) return le.Video;
            if (t > 0 && 0 === i) return le.Share;
            if (e === he.Share) {
                return y.Instance.m_vsCount % n < t ? le.Share : le.Video;
            }
            if (e === he.Video) {
                return y.Instance.m_vsCount % n < i ? le.Video : le.Share;
            }
            return le.Default;
        }
        static getShowType(e) {
            if (Se.wxCheck()) return 2;
            let t = Ce.Instance.getVSShowType();
            if (t !== le.Default) return t === le.Video && c.vsInfo.snum > 0 && !Ce.canShowVideoADByCount() ? le.Share : t;
            {
                let t = c.vList;
                if (t.length) for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if (n && n.pos == e) return n.type || 0;
                }
            }
            return 0;
        }
        static showAdBtnStatus(e, t, i = !1) {
            let n = e.getChildByName("icon");
            1 == t ? (n.skin = "comrp/share_icon.png", n.width = 30, n.height = 30) : 2 == t && (n.skin = "comrp/video_icon.png", 
            n.width = 30, n.height = 30);
        }
        shouldShowForBanner(e) {
            return !0;
        }
        registerEvent() {
            p.Instance.on(o.FetchVideoFail, this, this.onFetchVideoFail), p.Instance.on(o.GetFocus, this, this.onGameFocus), 
            p.Instance.on(o.FinishVideoAd, this, this.onFinishVideoAd), Laya.timer.loop(36e5, this, this.onCheckVideoCntTimer);
        }
        unregisterEvent() {
            p.Instance.off(o.FetchVideoFail, this, this.onFetchVideoFail), p.Instance.off(o.FinishVideoAd, this, this.onFinishVideoAd), 
            p.Instance.off(o.GetFocus, this, this.onGameFocus);
        }
    }
    Ce._instance = null;
    class ve {
        static compareVersion(e, t) {
            e = e.split("."), t = t.split(".");
            const i = Math.max(e.length, t.length);
            for (;e.length < i; ) e.push("0");
            for (;t.length < i; ) t.push("0");
            for (let n = 0; n < i; n++) {
                const i = parseInt(e[n]), s = parseInt(t[n]);
                if (i > s) return 1;
                if (i < s) return -1;
            }
            return 0;
        }
        static showTime(e) {
            let t = Math.floor(e / 60), i = e - 60 * t, n = "" + t;
            10 > t && (n = "0" + t);
            let s = "" + i;
            return 10 > i && (s = "0" + i), n + ":" + s;
        }
        static arry_indexOf(e, t, i) {
            for (var n = -1, s = 0; s < i; s++) {
                var a = e[s];
                if (a[0] == t[0] && a[1] == t[1]) {
                    n = s;
                    break;
                }
            }
            return n;
        }
        static makeRandomInt(e, t = 0) {
            return Math.floor(Math.random() * (e - t)) + t;
        }
        static nextNumber(e, t) {
            if (e == t) return e;
            var i = Math.random();
            return Math.floor(i * t + (1 - i) * e + i);
        }
        static getPercentTrue(e) {
            return Math.random() < e;
        }
        static split(e, t) {
            var i = [];
            return e.split(t).forEach(e => {
                "" != e && i.push(e);
            }), i;
        }
        static stringSplit(e) {
            var t = [];
            e.split("|").forEach(e => {
                t.push(e.split(","));
            });
            var i = [];
            return t.forEach(e => {
                for (var t = 0; t < e[1]; t++) i.push(e[0]);
            }), i;
        }
        static distancePoint(e, t) {
            return this.getDistance(e.x, e.y, t.x, t.y);
        }
        static getDistance(e, t, i, n) {
            var s = i - e, a = n - t;
            return Math.sqrt(s * s + a * a);
        }
        static getShareInfoByCfg(e) {
            if (e && e.imgUrl && e.imgUrl.length && e.shareContent && e.shareContent.length) return {
                imgUrl: e.imgUrl,
                shareContent: e.shareContent
            };
            let t = c.ShareInfoList.length;
            if (t > 0) {
                let e = Math.floor(Math.random() * t);
                if (Se.IsTouTiao() && (e = 0), e < t) return c.ShareInfoList[e];
            }
            return {
                imgUrl: "",
                shareContent: ""
            };
        }
        static finishShare(e, t = !1, i = !1) {
            Ce.Instance.onShowAdCompleted(e, i), p.Instance.event(o.ShowAdCompleted, e), p.Instance.event(o.CloseShowAd, e);
        }
        static finishShareVideo(e) {
            pe.Instance.showTips("分享成功！", 2e3), p.Instance.event(o.ShowShareVideoCompleted, e), 
            p.Instance.event(o.CloseShowShareViedo, e);
        }
        static getSafeAreaOffset() {
            return Laya.stage.height / Laya.stage.width > 2 ? 190 / 2436 * Laya.stage.width : 0;
        }
        static getBannerOffset() {
            return 20;
        }
        static getNormalBannerOffset() {
            return 40 / u.windowWidth * Laya.stage.width;
        }
    }
    class Le {
        static isEmpty(e) {
            return !e || 0 == e.length;
        }
        static subString(e, t, i) {
            for (var n = 0, s = "", a = /[^\x00-\xff]/g, o = "", r = e.replace(a, "**").length, h = 0; h < r && (null == (o = e.charAt(h).toString()).match(a) ? n++ : n += 2, 
            !(n > t)); h++) s += o;
            return i && r > t && (s += "..."), s;
        }
        static navigateToMiniProgram(e, t, i = null) {
            if ("undefined" == typeof wx) return;
            if (!e) return;
            let n = {
                appId: e.pid,
                path: e.path,
                extraData: {},
                envVersion: "release",
                success(n) {
                    N.Instance.sharePlay(e.pid, e.sort), i && i(!0), Le.report(e, M.JumpSuccess, t);
                },
                fail(n) {
                    i && i(!1), Le.report(e, M.JumpFail, t);
                }
            };
            wx.navigateToMiniProgram && wx.navigateToMiniProgram(n), N.Instance.advertisement("icon_click");
        }
        static report(e, t, i) {
            let n = {
                "游戏": e.name,
                "跳转来源": i
            };
            Se.Instance.report(t, n);
        }
        static getScorllData(e) {
            if (e) {
                let t = [].concat(e), i = [];
                for (;t.length < 18; ) {
                    0 === i.length && (i = [].concat(e));
                    let n = ve.nextNumber(0, i.length - 1);
                    n > i.length && (n = 0), t.push(i[n]), i.splice(n, 1);
                }
                return t;
            }
            return [];
        }
    }
    class ke extends e.item.DrawerItemViewUI {
        constructor() {
            super(...arguments), this.itemData = null;
        }
        onEnable() {
            this.registerEvent();
        }
        onDisable() {
            this.unregisterEvent();
        }
        updateData(e) {
            this.itemData = e, e && e.app_icon && e.app_icon.length && this.drawerItemImageView.loadImage(e.app_icon), 
            this.drawerItemLabel.text = e.app_title;
        }
        registerEvent() {
            this.on(Laya.Event.CLICK, this, this.clickItem);
        }
        unregisterEvent() {
            this.off(Laya.Event.CLICK, this, this.clickItem);
        }
        clickItem() {
            let e = E.Unkonw;
            Le.navigateToMiniProgram(this.itemData, e, function(e) {
                !e && N.Instance.isOpenSDK() && pe.Instance.openUIUnique(ce.FyhdTui2, {
                    cb: function() {},
                    from: E.JumpFail
                });
            });
        }
    }
    class xe extends e.item.DrawerItemView1UI {
        constructor() {
            super(...arguments), this.itemData = null;
        }
        onEnable() {
            this.registerEvent();
        }
        onDisable() {
            this.unregisterEvent();
        }
        updateData(e) {
            this.itemData = e, e && e.app_icon && e.app_icon.length && this.drawerItemImageView.loadImage(e.app_icon), 
            this.drawerItemLabel.text = e.app_title;
        }
        registerEvent() {
            this.on(Laya.Event.CLICK, this, this.clickItem);
        }
        unregisterEvent() {
            this.off(Laya.Event.CLICK, this, this.clickItem);
        }
        clickItem() {
            let e = E.Unkonw;
            Le.navigateToMiniProgram(this.itemData, e, function(e) {
                !e && N.Instance.isOpenSDK() && pe.Instance.openUIUnique(ce.FyhdTui2, {
                    cb: function() {},
                    from: E.JumpFail
                });
            });
        }
    }
    class be extends e.item.FloatRecommendViewUI {
        constructor() {
            super(...arguments), this.currentIndex = -1;
        }
        updateView() {
            let e = N.Instance.tuiInfo;
            if (e && e.length) {
                this.visible = !0;
                let t = ve.makeRandomInt(e.length, 0);
                if (t === this.currentIndex) this.updateView(); else {
                    this.currentIndex = t;
                    let i = e[t];
                    this.imageView.loadImage(i.url), this.titleLabel.text = i.name, Laya.timer.once(500, this, () => {
                        this.ani1.play(0, !1);
                    });
                }
            } else this.visible = !1;
        }
        onEnable() {
            this.registerEvent(), this.visible = !1, this.updateView(), this.startUpdate();
        }
        onDisable() {
            this.unregisterEvent();
        }
        startUpdate() {
            Laya.timer.loop(6e3, this, this.updateView);
        }
        stopUpdate() {
            Laya.timer.clear(this, this.updateView), Laya.timer.clearAll(this);
        }
        registerEvent() {
            this.on(Laya.Event.CLICK, this, this.clickItem), p.Instance.on(o.RecommendDataUpdate, this, this.updateView);
        }
        unregisterEvent() {
            this.off(Laya.Event.CLICK, this, this.clickItem), p.Instance.off(o.RecommendDataUpdate, this, this.updateView);
        }
        clickItem() {
            let e = N.Instance.tuiInfo, t = E.Unkonw;
            if (e && this.currentIndex < e.length) {
                let i = e[this.currentIndex];
                Le.navigateToMiniProgram(i, t, function(e) {
                    !e && N.Instance.isOpenSDK() && pe.Instance.openUIUnique(ce.FyhdTui2, {
                        cb: function() {},
                        from: E.JumpFail
                    });
                });
            }
        }
    }
    class Ae extends e.item.FloatRecommendView1UI {
        constructor() {
            super(...arguments), this.currentIndex = -1;
        }
        updateView() {
            if (Se.IsWeChat() || (this.visible = !1), Se.wxCheck()) return void (this.visible = !1);
            let e = N.Instance.tuiInfo;
            if (e && e.length) {
                this.visible = !0;
                let t = ve.makeRandomInt(e.length, 0);
                if (t === this.currentIndex) this.updateView(); else {
                    this.currentIndex = t;
                    let i = e[t];
                    this.imageView = i.url, this.titleLabel.text = i.name, Laya.timer.once(500, this, () => {
                        this.ani1.play(0, !1);
                    });
                }
            } else this.visible = !1;
        }
        onEnable() {
            this.registerEvent(), this.visible = !1, this.updateView(), this.startUpdate();
        }
        onDisable() {
            this.unregisterEvent();
        }
        startUpdate() {
            Laya.timer.loop(6e3, this, this.updateView);
        }
        stopUpdate() {
            Laya.timer.clear(this, this.updateView), Laya.timer.clearAll(this);
        }
        registerEvent() {
            this.on(Laya.Event.CLICK, this, this.clickItem), p.Instance.on(o.RecommendDataUpdate, this, this.updateView);
        }
        unregisterEvent() {
            this.off(Laya.Event.CLICK, this, this.clickItem), p.Instance.off(o.RecommendDataUpdate, this, this.updateView);
        }
        clickItem() {
            let e = N.Instance.tuiInfo;
            if (e && this.currentIndex < e.length) {
                let t = e[this.currentIndex], i = E.Unkonw;
                Le.navigateToMiniProgram(t, i, function(e) {
                    !e && N.Instance.isOpenSDK() && pe.Instance.openUIUnique(ce.FyhdTui2, {
                        cb: function() {},
                        from: E.JumpFail
                    });
                });
            }
        }
    }
    class Be extends e.item.QuickNativeBannerAdUI {
        constructor() {
            super(...arguments), this.currentIndex = 0, this.nativeAd = null, this.adList = null, 
            this.canShow = !0;
        }
        getImageListUrl(e) {
            let t = null;
            return e.imgUrlList && e.imgUrlList.length && (t = e.imgUrlList[0]), t && t.length ? t : null;
        }
        getImageIconUrl(e) {
            let t = null;
            return e.iconUrlList && e.iconUrlList.length && (t = e.iconUrlList[0]), t && t.length ? t : null;
        }
        getImageText(e) {
            let t = "";
            return e.desc && e.desc.length ? t = e.desc : e.title && e.title.length && (t = e.title), 
            t;
        }
        getImageAdId(e) {
            let t = "";
            return e.adId && e.adId.length && (t = e.adId), t;
        }
        updateView() {
            let e = this.adList[this.currentIndex], t = this.getImageListUrl(e), i = this.getImageText(e), n = this.getImageIconUrl(e), s = e.logoUrl || "", a = e.title || "";
            if (t) this.bannerBox.visible = !0, this.iconBox.visible = !1, this.bannerLabel.text = i, 
            this.bannerImage.skin = t, this.bannerAd.skin = s; else {
                let t = e.clickBtnTxt || "";
                this.bannerBox.visible = !1, this.iconBox.visible = !0, this.iconLabel.text = a, 
                this.iconLabel2.text = i, this.iconLabel3.text = t, this.iconImage.skin = n, this.iconAd.skin = s;
            }
            let o = this.getImageAdId(e);
            o.length && (this.nativeAd.reportAdShow({
                adId: o
            }), p.Instance.event(ae.ADBannerShow, this));
        }
        showWithInfo(e) {
            let t = e ? e.lxAdList : null;
            t && t.length && (this.visible = !0, this.nativeAd = e, this.adList = t, this.currentIndex = 0, 
            this.updateView());
        }
        onChangeData() {
            if (!this.canShow) return void (this.visible = !1);
            let e = Ie.Instance.nativeAd;
            if (!e) return this.visible = !1, void Ie.Instance.refreashADData();
            let t = e.adList;
            t && t.length ? (Ie.Instance.doShowAD(), this.visible = !0, this.nativeAd = e, this.adList = t, 
            this.currentIndex = 0, this.updateView()) : (this.visible = !1, Ie.Instance.refreashADData());
        }
        onEnable() {
            this.registerEvent(), this.visible = !1, Laya.timer.once(100, this, () => {
                Ie.Instance.checkUpdateADData() || this.onChangeData();
            });
        }
        onDisable() {
            Laya.timer.clearAll(this), this.unregisterEvent();
        }
        registerEvent() {
            this.iconBox.on(Laya.Event.CLICK, this, this.clickItem), this.bannerBox.on(Laya.Event.CLICK, this, this.clickItem), 
            this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtnClick), p.Instance.on(ae.nativeBannerChange, this, this.onChangeData);
        }
        unregisterEvent() {
            this.iconBox.off(Laya.Event.CLICK, this, this.clickItem), this.bannerBox.off(Laya.Event.CLICK, this, this.clickItem), 
            this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtnClick), p.Instance.off(ae.nativeBannerChange, this, this.onChangeData);
        }
        onCloseBtnClick() {
            this.nativeAd.adClick = !0, this.visible = !1, Ie.Instance.doCloseByUser();
        }
        clickItem() {
            let e = this.adList[this.currentIndex], t = this.getImageAdId(e);
            t.length && (this.nativeAd.reportAdClick({
                adId: t
            }), this.nativeAd.adClick = !0);
        }
    }
    class Pe extends e.item.RecommendItemViewUI {
        constructor() {
            super(...arguments), this.itemData = null;
        }
        registerEvent() {
            this.on(Laya.Event.CLICK, this, this.clickItem);
        }
        unregisterEvent() {
            this.off(Laya.Event.CLICK, this, this.clickItem);
        }
        updateData(e) {
            this.itemData = e, e && e.app_icon && e.app_icon.length && this.recommendIcon.loadImage(e.app_icon);
        }
        clickItem() {
            let e = E.Unkonw;
            Le.navigateToMiniProgram(this.itemData, e, function(e) {
                !e && N.Instance.isOpenSDK() && pe.Instance.openUIUnique(ce.FyhdTui2, {
                    cb: function() {},
                    from: E.JumpFail
                });
            });
        }
        onEnable() {
            this.registerEvent();
        }
        onDisable() {
            this.unregisterEvent();
        }
    }
    class Ve extends e.item.SettlementRecommendViewUI {
        registerEvent() {
            p.Instance.on(o.RecommendDataUpdate, this, this.updateDataSource);
        }
        unregisterEvent() {
            p.Instance.off(o.RecommendDataUpdate, this, this.updateDataSource);
        }
        updateDataSource() {
            let e = N.Instance.tuiInfo;
            if (!e) return;
            let t = [].concat(e);
            for (;t.length > 6; ) {
                let e = Math.ceil(Math.random() * t.length);
                t.splice(e, 1);
            }
            this.recommendList.array = t, this.recommendList.renderHandler = new Laya.Handler(this, this.onListRender);
        }
        onListRender(e, t) {
            let i = e.dataSource;
            e.updateData(i);
        }
        onEnable() {
            this.registerEvent(), this.updateDataSource();
        }
        onDisable() {
            this.unregisterEvent();
        }
    }
    class Te extends Laya.List {
        constructor() {
            super(...arguments), this.isForward = !0, this.autoAnimate = !0;
        }
        onEnable() {
            this.on(Laya.Event.MOUSE_UP, this, this.doAnimate), this.on(Laya.Event.MOUSE_OUT, this, this.doAnimate);
        }
        onDisable() {
            Laya.timer.clear(this, this.doAnimate), Laya.timer.clearAll(this), this.off(Laya.Event.MOUSE_UP, this, this.doAnimate), 
            this.off(Laya.Event.MOUSE_OUT, this, this.doAnimate);
        }
        doAnimate() {
            // if (!this.destroyed && this.autoAnimate && this.array && this.array.length > 0) {
            //     let e = this._isVertical ? this.repeatX : this.repeatY, t = Math.floor(this._scrollBar.value / this._cellSize), i = 0;
            //     if (this.isForward) {
            //         let t = 0;
            //         t = this._isVertical ? Math.ceil(this.displayHeight / this._cellSize) * e : Math.ceil(this.displayWidth / this._cellSize) * e, 
            //         i = this.array.length - t;
            //     }
            //     let n = Math.abs(t - Math.ceil(i / e)), s = 15 * this._cellSize * n;
            //     this.tweenTo(i, s, Laya.Handler.create(this, () => {
            //         this.destroyed || (this.isForward = !this.isForward, this.autoAnimate && Laya.timer.once(100, this, this.doAnimate));
            //     }));
            // }
        }
        updateDataSource(e) {
            this.array = e, this.autoAnimate && Laya.timer.once(500, this, this.doAnimate);
        }
    }
    class De extends Laya.Box {
        constructor() {
            super(), this.uiname = "", this.uiname = null, Laya.timer.once(20, this, this.adapter);
        }
        static isLong() {
            return !(Laya.stage.height / Laya.stage.width < 2);
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
        static getBangSafeOffY() {
            return Laya.stage.height / Laya.stage.width < 2 ? 0 : 132 / 2436 * Laya.stage.height;
        }
        adapter() {
            Laya.stage.designHeight, Laya.stage.designWidth;
            if (!(Laya.stage.height / Laya.stage.width < 2)) {
                var e = 132 / 2436 * Laya.stage.height;
                isNaN(this.top) || (this.top = e + this.top);
            }
        }
    }
    class Me extends e.tui.TuiExitBtnUI {
        onAwake() {
            Se.showRecommendBox2() || (this.visible = !1), this.visible = !1, N.Instance.showtuichu() && (this.visible = !0);
        }
        onEnable() {
            this.regiestEvent();
        }
        onDisable() {
            this.unregiestEvent();
        }
        onBtnClick() {
            T.Instance.playUIClick(), pe.Instance.openUI(ce.FyhdTui3, {
                cb: function() {},
                from: E.JumpFail
            });
        }
        regiestEvent() {
            this.exitBtn.on(Laya.Event.CLICK, this, this.onBtnClick);
        }
        unregiestEvent() {
            this.exitBtn.off(Laya.Event.CLICK, this, this.onBtnClick);
        }
    }
    class Ee extends Laya.Button {
        onEnable() {
            super.onEnable(), this.registerEvent();
        }
        onDestroy() {
            this.destoryButton(), this.timer.clearAll(this), super.onDestroy();
        }
        showButton() {
            if (c.vGameInfo.ttTuiInfo.length < 4) return void (this.visible = !1);
            let e = c.vGameInfo.ttTuiInfo.map(e => ({
                appId: String(e.pid),
                query: "",
                extraData: {}
            }));
            if ("undefined" != typeof wx && wx.createMoreGamesButton) if (this.moreButton) this.moreButton.show(); else {
                let t = this.width * u.windowWidth / Laya.stage.width, i = this.height * u.windowHeight / Laya.stage.height, n = this.localToGlobal(new Laya.Point(0, 0)), s = n.y * u.windowHeight / Laya.stage.height, a = n.x * u.windowWidth / Laya.stage.width;
                this.moreButton = wx.createMoreGamesButton({
                    type: "text",
                    text: "",
                    style: {
                        left: a,
                        top: s,
                        width: t,
                        height: i,
                        lineHeight: 40,
                        backgroundColor: "#00000000",
                        textAlign: "center",
                        fontSize: 18,
                        textColor: "#ffffff",
                        borderRadius: 4,
                        borderWidth: 0,
                        borderColor: "#ff0000"
                    },
                    appLaunchOptions: e,
                    onNavigateToMiniGame: e => {
                        if (e && 0 === e.errCode) {
                            let e = R.MyRecommendJump, t = {
                                new: u.isNewPlayer ? 1 : 0,
                                user_id: x.Instance.user.openid,
                                from_id: c.appId,
                                timestamp: Math.floor(Date.now() / 1e3)
                            };
                            Se.Instance.report(e, t);
                        }
                    }
                }), this.moreButton && (this.moreButton.show(), this.moreButton.onTap(e => {
                    this.tapMoreGame(e);
                }));
            }
        }
        registerEvent() {}
        unregiseterEvent() {}
        checkShowButton() {
            Se.showRecommendBoxTT() ? Se.IsTouTiao() ? this.showButton() : this.destoryButton() : this.visible = !1;
        }
        hideButton() {
            this.moreButton && this.moreButton.hide();
        }
        destoryButton() {
            this.moreButton && (this.moreButton.destroy(), this.moreButton = null);
        }
        tapMoreGame(e) {}
    }
    class _e extends e.view.SkinItemUI {
        constructor() {
            super(...arguments), this.skinId = 0, this.type = 0, this.isLock = !1;
        }
        createChildren() {
            super.createChildren(), p.Instance.on(o.SkinChange, this, this.onSkinChange);
        }
        clickItem() {
            this.isLock || (L.Instance.setShowUseSkinId(this.skinId), p.Instance.event(o.SkinChange, this.skinId)), 
            p.Instance.event(o.ClickSkinItem, this.skinId);
        }
        onSkinChange(e) {
            this.skinId == e ? this.selected.visible = !0 : this.selected.visible = !1;
        }
        doSelected(e) {
            this.selected.visible = e;
        }
        updateItem(e, t, i) {
            this.skinId = e, this.type = i, this.isLock = t, this.on(Laya.Event.CLICK, this, this.clickItem), 
            this.ball.skin = L.Instance.getShowSkinRes(this.skinId), this.lock.visible = this.isLock;
            let n = L.Instance.getShowUseSkinId();
            this.selected.visible = n == e, this.title.text = "", 2 == this.type && t && (this.title.text = "DAILY GIFT");
        }
    }
    class Re extends e.view.SkinPageUI {
        constructor() {
            super(...arguments), this.lockViews = [];
        }
        doSelectAni(e, t, i) {
            if (e && e.length > 0) {
                let n = this.lockViews[e[0]];
                i = n.skinId, e.splice(0, 1), n.doSelected(!0), B.once(300, this, () => {
                    n.doSelected(!1), this.doSelectAni(e, t, i);
                });
            } else t && t(i);
        }
        updateView(e, t, i) {
            this.lockViews = [];
            for (let n = 0; n < t; n++) {
                let s = (e - 1) * t + n, a = "item" + (n + 1);
                if (s >= i) this[a].visible = !1; else {
                    this[a].visible = !0;
                    let e = y.Instance.skinCfg[s], t = e.id, i = 0 == x.Instance.getSkinArr(t);
                    this[a].updateItem(t, i, e.type), i && 0 == e.type && this.lockViews.push(this[a]);
                }
            }
        }
        hasLockSkin() {
            return (this.lockViews.length || 0) > 0;
        }
        unlock(e) {
            if (this.lockViews) {
                let t = L.getRandomIndex(this.lockViews.length);
                this.doSelectAni(t, e, -1);
            }
        }
    }
    class Ue {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("view/item/DrawerItemView.ts", ke), e("view/item/DrawerItemView2.ts", xe), e("view/item/FloatRecommendView.ts", be), 
            e("view/item/FloatRecommendView1.ts", Ae), e("view/item/QuickNativeBannerAd.ts", Be), 
            e("view/item/RecommendItemView.ts", Pe), e("view/item/SettlementRecommendView.ts", Ve), 
            e("view/LoadingView.ts", ne), e("view/AutoScorllView.ts", Te), e("UIAdapter.ts", De), 
            e("view/tui/TuiExitBtn.ts", Me), e("view/item/MoreGameButton.ts", Ee), e("view/SkinItem.ts", _e), 
            e("view/SkinPage.ts", Re);
        }
    }
    Ue.width = 750, Ue.height = 1334, Ue.scaleMode = "fixedwidth", Ue.screenMode = "none", 
    Ue.alignV = "top", Ue.alignH = "left", Ue.startScene = "item/DrawerItemView.scene", 
    Ue.sceneRoot = "", Ue.debug = !1, Ue.stat = !1, Ue.physicsDebug = !1, Ue.exportSceneToJson = !0, 
    Ue.init();
    class Oe {
        constructor() {
            this.sdkParams = null;
        }
        static get Instance() {
            return null === Oe._instance && (Oe._instance = new Oe()), Oe._instance;
        }
        clear() {}
        sdkLogin(e) {
            A.Instance.loginUser(e).then(e => {
                let t = e.sessionID;
                if (t) {
                    return x.Instance.user.session_key = t, A.Instance.sessionID = t, c.isLimitCity = e.isL || !1, 
                    c.isLimitCityB = e.isLB || !1, Se.IsTouTiao(), Se.Instance.report(R.LoginSuccess, {
                        new: u.isNewPlayer ? 1 : 0,
                        appName: Se.appName,
                        scene: u.scene
                    }), this.updateUserInfo();
                }
            }).then(e => {
                x.Instance.logined = !0, p.Instance.event(o.userLoginFinish, !0);
            }).catch(e => {
                x.Instance.logined || Se.Instance.report(R.LoginFail, {});
            });
        }
        sdkLogin2(e, t = !0) {
            A.Instance.loginUser2(e, t).then(e => {
                e.openid;
                {
                    let i = x.Instance.user;
                    t && (i.openid = e.openid), c.isLimitCity = e.isL || !1, c.isLimitCityB = e.isLB || !1, 
                    Se.Instance.report(R.LoginSuccess, {
                        new: u.isNewPlayer ? 1 : 0,
                        appName: Se.appName,
                        scene: u.scene
                    });
                }
            }).catch(e => {
                x.Instance.logined || (x.Instance.loginError = !0, p.Instance.event(o.userLoginFinish, !1), 
                Se.Instance.report(R.LoginFail, {
                    new: u.isNewPlayer ? 1 : 0,
                    appName: Se.appName,
                    scene: u.scene
                }));
            });
        }
        updateUserInfo() {
            return A.Instance.getUserInfo().then(e => {
                let t = e.uid;
                if (t) {
                    let i = x.Instance.user;
                    if (i.setUid(t), i.openid = e.openid, i.city = e.city, i.avatar = e.avatar, i.nickName = e.nickName, 
                    Se.IsTouTiao() && c.isAnonymous && (i.avatar = g.defaultAvatar, i.nickName = g.defaultName), 
                    x.Instance.inviteCount = e.invitationNum || 0, i.authorized = e.authorized, e.openid && "undefined" != typeof wx && Se.IsWeChat(), 
                    !k.isReadData) if (x.isDefaultData) {
                        let t = null;
                        if (e.gamedata) {
                            let i = e.gamedata;
                            if ("" !== i) {
                                let e = JSON.parse(i);
                                if (e.lzw) {
                                    let i = S.lzw_decompress(e.lzw);
                                    i && "" !== i && (t = JSON.parse(i));
                                }
                            }
                        }
                        x.readDataInfo(t);
                    } else x.readDataInfo(null);
                    x.saveData(!0);
                }
            });
        }
    }
    Oe._instance = null;
    window.GameMain = new class {
        constructor() {
            this.curSubPacketLoadProgress = 0, this.loadProgress = 0, this.updateManager = null, 
            this.curHideTimer = null, this.sdkInited = !1, Se.registerQGAldRequest(), c.Dev || Se.IsTouTiao(), 
            Config.isAntialias = !0, Laya.isWXPosMsg = !0, Laya.isWXOpenDataContext = !1, Se.IsWeChat(); 
            let e = new Config3D();
            e.isAntialias = !0, window.Laya3D ? Laya3D.init(Ue.width, Ue.height, e) : Laya.init(Ue.width, Ue.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = "exactfit", Laya.stage.screenMode = Ue.screenMode, Laya.stage.alignV = Ue.alignV, 
            Laya.stage.alignH = "center", Laya.URL.exportSceneToJson = Ue.exportSceneToJson, 
            (Ue.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            Ue.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), Ue.stat && Laya.Stat.show(), 
            Laya.alertGlobalError = !0, Se.Instance.init();
            {
                let e = e => {
                    this.onShowWX(e);
                }, t = e => {
                    this.onHideWX(e);
                };
                Se.Instance.onShow(e, t);
            }
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            let t = parseInt(Laya.LocalStorage.getItem("wxRegisterTime") || "0");
            0 === t && (t = Date.now(), Laya.LocalStorage.setItem("wxRegisterTime", t.toString()), 
            u.firstTimePlayer = !0), u.registerTime = t;
            let i = Date.now();
            u.accountTime = i - t;
            {
                let e = parseInt(Laya.LocalStorage.getItem("lastStartLoadTime") || "0");
                u.lastStartTime = e, Laya.LocalStorage.setItem("lastStartLoadTime", i.toString()), 
                e > 0 && (u.isOverDay = !f.isSameDay(i, e)), u.curStartTime = i;
                let t = parseInt(Laya.LocalStorage.getItem("appStartCount") || "0");
                u.startCount = t + 1, Laya.LocalStorage.setItem("appStartCount", u.startCount.toString());
            }
            u.isNewPlayer = f.isSameDay(i, t);
            {
                let e = null, t = Se.getPlatform();
                t && t.getSystemInfoSync && (e = t.getSystemInfoSync()), e && (u.windowHeight = e.windowHeight, 
                u.windowWidth = e.windowWidth, u.version = e.version || u.version, e.platform && -1 != e.platform.toLowerCase().indexOf("android") && (Se.isAndroid = !0), 
                e.platform && -1 != e.platform.toLowerCase().indexOf("ios") && (Se.isIos = !0), 
                e.appName && (Se.appName = e.appName), e.benchmarkLevel && e.benchmarkLevel >= 1 && e.benchmarkLevel < 20 && (Se.isLowDevice = !0));
            }
            Se.nodeReport(R.Node1), this.checkForUpdate(), Se.Instance.setLoadingProgress(0);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            let e = this.canLoadSubpackage();
            Laya.Scene.open("loadview/LoadingView.scene", !0, {
                loadSubpackage: e
            }, Laya.Handler.create(this, t => {
                (e => {
                    e();
                })(() => {
                    e ? this.loadSubpackage() : this.loadSubpackageFinish();
                });
            })), N.Instance.initSDK();
        }
        canLoadSubpackage() {
            return !1;
        }
        loadSubpackageFinish() {
            Se.nodeReport(R.Node2), U.Instance.loadRes(null), x.readDLDData();
            let e = I.getGameConfig();
            Laya.loader.load(e, Laya.Handler.create(this, this.onLoadComplete));
        }
        onLoadComplete() {
            Se.nodeReport(R.Node3), y.Instance.loadData(), this.doLoginAction();
        }
        loadSubpackage() {
            // let e = Se.getPlatform();
            // if (e && e.loadSubpackage) {
            //     let t = e.loadSubpackage({
            //         name: "res3d",
            //         success: e => {
            //             this.loadSubpackage3(), Laya.timer.clear(this, this.updateLoad);
            //         },
            //         fail: e => {
            //             Laya.timer.clear(this, this.updateLoad);
            //         }
            //     });
            //     t && (t.onProgressUpdate(e => {
            //         this.curSubPacketLoadProgress = e.progress / 100;
            //     }), Laya.timer.once(500, this, this.updateLoad));
            // }
        }
        loadSubpackage3() {
            let e = Se.getPlatform();
            if (e && e.loadSubpackage) {
                let t = e.loadSubpackage({
                    name: "res",
                    success: e => {
                        this.loadSubpackageFinish();
                    },
                    fail: e => {}
                });
                t && t.onProgressUpdate(e => {});
            }
        }
        loadSubpackage2(e, t) {
            return t(), !1;
        }
        connectSdkLoginSrv(e) {
            if (null === e) ; else {
                x.readDataInfo(null);
                let t = !1;
                Oe.Instance.sdkLogin2(e, t);
            }
        }
        onShowWX(e) {
            if (te.onHide = !1, x.Instance.onlineStartTime = new Date().getTime(), e) {
                e.path, e.referrerInfo && e.referrerInfo.appId;
                let t = e.query;
                t && this.updateLoadInfoFromWX(t), e.scene && (u.scene = e.scene);
            }
            let t = 0;
            this.curHideTimer && (t = Date.now() - this.curHideTimer) < 0 && (t = 0), this.curHideTimer = null, 
            p.Instance.event(o.GetFocus, {
                hideTime: t
            }), te.reStart();
        }
        bannerClickCheck(e) {
            null != e && Se.IsWeChat() && (8 == e.targetAction || 9 == e.targetAction || 10 == e.targetAction) && e.targetPagePath.length > 50 && Se.Instance.report(R.bannerClick);
        }
        onHideWX(e) {
            te.onHide = !0;
            let t = new Date().getTime() - x.Instance.onlineStartTime;
            x.rp_data.onlineTime += t, e && this.bannerClickCheck(e), this.curHideTimer = Date.now(), 
            p.Instance.event(o.LostFocus), N.Instance.bannerClickCheck(e), x.saveData(!0, !0), 
            te.gameUi && te.gameUi.savePowerToWX && te.gameUi.savePowerToWX(!0);
        }
        updateLoadInfoFromWX(e) {
            if (null !== e && (null !== e.inviteName || null !== e.openid || null !== e.inviteCode)) {
                e.inviteName, e.openid, e.pos, e.shareTime;
                let t = e.inviteCode;
                t && (x.Instance.inviteCode = t);
            }
            null !== e && null !== e.chid && (u.chid = e.chid);
        }
        updateLoad() {
            this.loadProgress += .05, this.loadProgress >= 1 ? (Laya.timer.clear(this, this.updateLoad), 
            this.loadProgress = 1) : Laya.timer.once(500, this, this.updateLoad), this.updateSubPacketLoad();
        }
        updateSubPacketLoad() {
            let e = this.curSubPacketLoadProgress;
            e < .9 || Laya.timer.clear(this, this.updateLoad), e = .1 * this.curSubPacketLoadProgress + .9 * this.loadProgress, 
            p.Instance.event(o.SubpackageLoadProgress, e);
        }
        checkForUpdate() {
            "undefined" != typeof wx && wx.getUpdateManager && (this.updateManager = wx.getUpdateManager(), 
            this.updateManager.onCheckForUpdate(function(e) {}), this.updateManager.onUpdateReady(() => {
                let e = {
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    success: e => {
                        e.confirm && this.updateManager.applyUpdate();
                    },
                    fail: null,
                    complete: null,
                    confirmText: "重启",
                    confirmColor: "#3CC51F",
                    showCancel: !0,
                    cancelText: "取消",
                    cancelColor: "#000000"
                };
                Se.Instance.showModal(e);
            }), this.updateManager.onUpdateFailed(() => {}));
        }
        getAppCfg(e = null) {
            let t = () => {
                e && e();
            };

            t();
        }
        doLoginAction() {
            let e = () => {
                x.Instance.loginError = !1, Se.Instance.sdkLogin(Laya.Handler.create(this, e => {
                    Se.Instance.loginParams = e, this.connectSdkLoginSrv(Se.Instance.loginParams);
                }), null);
            };
            this.getAppCfg(), e && e();
        }
    }();
}();