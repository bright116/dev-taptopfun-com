! function() {
    "use strict";
    var e, t, i, n = Laya.ClassUtils.regClass;
    ! function(e) {
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
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .8
                },
                compId: 28
            }, {
                type: "Box",
                props: {
                    width: 678,
                    scaleY: .9,
                    scaleX: .9,
                    height: 900,
                    centerY: -65,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "game/chess_mid_bg.png",
                        sizeGrid: "50,50,50,50",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 5
                }, {
                    type: "Button",
                    props: {
                        var: "closeBtn",
                        top: -48,
                        stateNum: 1,
                        skin: "game/close.png",
                        right: 0
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        y: -160,
                        skin: "sign/sign_title.png",
                        centerX: 0
                    },
                    compId: 6
                }, {
                    type: "List",
                    props: {
                        y: 55,
                        width: 648,
                        var: "signList",
                        spaceY: 24,
                        spaceX: 12,
                        repeatY: 2,
                        repeatX: 3,
                        height: 440,
                        centerX: 0
                    },
                    compId: 9,
                    child: [{
                        type: "SignItemView",
                        props: {
                            renderType: "render",
                            runtime: "views/item/DaySignItemView.ts"
                        },
                        compId: 10
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 508,
                        width: 641,
                        var: "sevenBox",
                        height: 202,
                        centerX: 2
                    },
                    compId: 11,
                    child: [{
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "sign/seven_bg.png",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 12
                    }, {
                        type: "Label",
                        props: {
                            y: 21,
                            x: 56,
                            text: "DAY 7",
                            fontSize: 70,
                            color: "#FFFFFF",
                            bold: !0
                        },
                        compId: 13
                    }, {
                        type: "Image",
                        props: {
                            top: -10,
                            skin: "sign/1.png",
                            right: -10,
                            left: -10,
                            bottom: -10
                        },
                        compId: 14
                    }, {
                        type: "Box",
                        props: {
                            y: -39,
                            x: -10,
                            var: "skinBox"
                        },
                        compId: 15,
                        child: [{
                            type: "Image",
                            props: {
                                y: 135,
                                x: 46.75,
                                skin: "sign/sevent_tip.png"
                            },
                            compId: 16
                        }, {
                            type: "Image",
                            props: {
                                y: 121,
                                x: 411,
                                var: "skinImageView",
                                skin: "x/s_skin27.png",
                                scaleY: .5,
                                scaleX: .5,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 17
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 33,
                            x: 262,
                            var: "coinBox"
                        },
                        compId: 21,
                        child: [{
                            type: "Image",
                            props: {
                                y: 65,
                                x: 128.361328125,
                                skin: "game/gold2.png",
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 22
                        }, {
                            type: "Label",
                            props: {
                                y: 37,
                                x: 194,
                                var: "coinLabel",
                                text: "x100",
                                fontSize: 70,
                                color: "#FFFFFF",
                                bold: !0
                            },
                            compId: 23
                        }]
                    }, {
                        type: "Image",
                        props: {
                            var: "sevenSignedView",
                            skin: "sign/sign_item_get.png",
                            centerY: -1,
                            centerX: 73,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 24
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 793,
                        width: 400,
                        var: "signBtn",
                        stateNum: 1,
                        skin: "game/r_btn.png",
                        sizeGrid: "0,60,0,60",
                        labelStrokeColor: "#854428",
                        labelStroke: 6,
                        labelSize: 50,
                        labelColors: "#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF",
                        labelBold: !0,
                        label: "CLAIM",
                        height: 135,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 25,
                    child: []
                }]
            }],
            animations: [{
                nodes: [{
                    target: 14,
                    keyframes: {
                        skin: [{
                            value: "sign/1.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 14,
                            key: "skin",
                            index: 0
                        }, {
                            value: "sign/2.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 14,
                            key: "skin",
                            index: 3
                        }, {
                            value: "sign/3.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 14,
                            key: "skin",
                            index: 6
                        }, {
                            value: "sign/4.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 14,
                            key: "skin",
                            index: 9
                        }, {
                            value: "sign/5.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 14,
                            key: "skin",
                            index: 12
                        }, {
                            value: "sign/5.png",
                            tweenMethod: "linearNone",
                            tween: !1,
                            target: 14,
                            key: "skin",
                            index: 22
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 0
            }, {
                nodes: [{
                    target: 25,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleY",
                            index: 30
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 25,
                            key: "scaleX",
                            index: 30
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 24,
                action: 0
            }],
            loadList: ["game/chess_mid_bg.png", "game/close.png", "sign/sign_title.png", "sign/seven_bg.png", "sign/1.png", "sign/sevent_tip.png", "x/s_skin27.png", "game/gold2.png", "sign/sign_item_get.png", "game/r_btn.png", "common/ic_vedio1.png", "sign/2.png", "sign/3.png", "sign/4.png", "sign/5.png"],
            loadList3D: []
        }, e.DaySignViewUI = t, n("ui.DaySignViewUI", t);
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
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .7
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    var: "hitInfoView",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 17,
                child: [{
                    type: "Box",
                    props: {
                        width: 530,
                        var: "dg",
                        height: 460,
                        centerY: 0,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 55
                }, {
                    type: "Image",
                    props: {
                        top: 219,
                        skin: "common/big_title.png",
                        centerX: -6
                    },
                    compId: 4
                }, {
                    type: "Sprite",
                    props: {
                        y: 350,
                        x: 142,
                        texture: "common/dingdandaojishi.png"
                    },
                    compId: 36
                }, {
                    type: "Image",
                    props: {
                        y: 342,
                        x: 400,
                        var: "coundDownImg",
                        skin: "common/num_5.png"
                    },
                    compId: 37
                }, {
                    type: "Image",
                    props: {
                        width: 359,
                        skin: "egg/board.png",
                        left: 190,
                        centerY: 327,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 6,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            width: 359,
                            texture: "egg/bar.png",
                            height: 51
                        },
                        compId: 7,
                        child: [{
                            type: "Box",
                            props: {
                                width: 359,
                                var: "maskView",
                                top: 0,
                                renderType: "mask",
                                left: 0,
                                height: 51
                            },
                            compId: 9
                        }]
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "hitActionView",
                    right: 0,
                    left: 0,
                    height: 344,
                    bottom: -10
                },
                compId: 16,
                child: [{
                    type: "Button",
                    props: {
                        y: 134,
                        x: 375,
                        width: 516,
                        var: "hitBtn",
                        stateNum: 1,
                        skin: "game/r_btn.png",
                        sizeGrid: "0,60,0,60",
                        labelSize: 65,
                        labelColors: "#84442a,#84442a,#84442a,#84442a",
                        labelBold: !0,
                        label: "疯狂搅拌",
                        height: 150,
                        centerX: 0,
                        bottom: 125,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 38,
                    child: [{
                        type: "Script",
                        props: {
                            playEvent: "mousedown",
                            runtime: "ui.effect.BtnScaleDownUI"
                        },
                        compId: 39
                    }, {
                        type: "Script",
                        props: {
                            playEvent: "mouseup",
                            runtime: "ui.effect.BtnScaleUpUI"
                        },
                        compId: 40
                    }]
                }, {
                    type: "Sprite",
                    props: {
                        y: 148,
                        x: 510.5,
                        texture: "egg/ico_hand.png"
                    },
                    compId: 13
                }, {
                    type: "Sprite",
                    props: {
                        y: -26,
                        x: 548,
                        texture: "egg/ico_press_label.png"
                    },
                    compId: 14
                }]
            }],
            animations: [{
                nodes: [{
                    target: 13,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 5
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 5
                        }]
                    }
                }, {
                    target: 14,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleY",
                            index: 5
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 14,
                            key: "scaleX",
                            index: 5
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 12,
                action: 0
            }, {
                nodes: [{
                    target: 19,
                    keyframes: {
                        rotation: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 360,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 19,
                            key: "rotation",
                            index: 10
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 12,
                action: 0
            }, {
                nodes: [{
                    target: 23,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleY",
                            index: 40
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 20
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 23,
                            key: "scaleX",
                            index: 40
                        }]
                    }
                }],
                name: "ani4",
                id: 4,
                frameRate: 24,
                action: 0
            }, {
                nodes: [],
                name: "ani5",
                id: 5,
                frameRate: 24,
                action: 0
            }],
            loadList: ["common/big_title.png", "common/dingdandaojishi.png", "common/num_5.png", "egg/board.png", "egg/bar.png", "game/r_btn.png", "egg/ico_hand.png", "egg/ico_press_label.png"],
            loadList3D: []
        }, e.EggViewUI = i, n("ui.EggViewUI", i);
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
                width: 720,
                top: 0,
                right: 0,
                name: "gameBox",
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    name: "UI",
                    left: 0,
                    bottom: 0
                },
                compId: 14,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        visible: !0,
                        top: 0,
                        skin: "common/m_bg2.png",
                        right: 0,
                        name: "bg",
                        left: 0,
                        bottom: 0
                    },
                    compId: 89
                }, {
                    type: "Box",
                    props: {
                        y: 1,
                        x: 0,
                        visible: !1,
                        var: "ResultBox",
                        top: 1,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 483,
                    child: [{
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "common/m_bg2.png",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 484
                    }, {
                        type: "Image",
                        props: {
                            width: 320,
                            var: "NextBtn",
                            skin: "game/m_btn2.png",
                            height: 100,
                            centerY: 400,
                            centerX: 0
                        },
                        compId: 532,
                        child: [{
                            type: "Label",
                            props: {
                                y: 8,
                                x: 13,
                                width: 287,
                                visible: !0,
                                var: "NextLabel",
                                valign: "middle",
                                text: "CONTINUE",
                                height: 77,
                                fontSize: 40,
                                font: "Arial",
                                color: "#ffffff",
                                align: "center"
                            },
                            compId: 533
                        }, {
                            type: "Image",
                            props: {
                                y: 8,
                                x: 13,
                                visible: !1,
                                var: "NextBox",
                                skin: "game/chessbrut.png"
                            },
                            compId: 719,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 22,
                                    x: 123,
                                    text: "幸运宝箱",
                                    fontSize: 40,
                                    color: "#ffffff",
                                    bold: !0
                                },
                                compId: 720
                            }]
                        }, {
                            type: "Image",
                            props: {
                                y: 11,
                                x: 30,
                                visible: !1,
                                var: "StarBox"
                            },
                            compId: 721,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 20,
                                    x: 60,
                                    text: "CHALLENGE",
                                    fontSize: 35,
                                    color: "#ffffff",
                                    bold: !0
                                },
                                compId: 722
                            }]
                        }]
                    }, {
                        type: "Box",
                        props: {
                            var: "WinBox",
                            top: 1,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 515,
                        child: [{
                            type: "Image",
                            props: {
                                top: 1,
                                skin: "game/m_bg1.png",
                                sizeGrid: "27,0,57,0",
                                runtime: "views/runtime/UIAdapter.ts",
                                right: 0,
                                left: 0,
                                height: 220
                            },
                            compId: 516,
                            child: [{
                                type: "Box",
                                props: {
                                    y: 75.5,
                                    left: 0,
                                    height: 67
                                },
                                compId: 517,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 18,
                                        x: 20,
                                        var: "resultkey1",
                                        skin: "game/m_gold.png"
                                    },
                                    compId: 518
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 18,
                                        x: 79,
                                        var: "resultkey2",
                                        skin: "game/m_gray.png"
                                    },
                                    compId: 519
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 18,
                                        x: 141,
                                        var: "resultkey3",
                                        skin: "game/m_gray.png"
                                    },
                                    compId: 520
                                }]
                            }, {
                                type: "Box",
                                props: {
                                    y: 42,
                                    width: 152,
                                    right: 542,
                                    height: 67
                                },
                                compId: 523,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 10,
                                        x: 10,
                                        skin: "game/gold2.png",
                                        scaleY: .5,
                                        scaleX: .5
                                    },
                                    compId: 524
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 17,
                                        x: 63,
                                        width: 73,
                                        var: "ResultGold",
                                        valign: "middle",
                                        text: "275",
                                        height: 32,
                                        fontSize: 35,
                                        font: "Arial",
                                        color: "#ffffff",
                                        align: "center"
                                    },
                                    compId: 525
                                }]
                            }, {
                                type: "Label",
                                props: {
                                    y: 75.5,
                                    x: 234.5,
                                    width: 251,
                                    var: "ResultLevel",
                                    text: "关卡4",
                                    stroke: 3,
                                    height: 52,
                                    fontSize: 45,
                                    font: "Arial",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 521
                            }, {
                                type: "Label",
                                props: {
                                    y: 142.5,
                                    x: 149,
                                    width: 422,
                                    var: "WinTitle",
                                    valign: "middle",
                                    text: "WIN",
                                    stroke: 3,
                                    height: 71,
                                    fontSize: 70,
                                    font: "Arial",
                                    color: "#ffffff",
                                    bold: !0,
                                    align: "center"
                                },
                                compId: 522
                            }]
                        }, {
                            type: "Box",
                            props: {
                                x: 213,
                                width: 214,
                                height: 54,
                                centerY: 299
                            },
                            compId: 784,
                            child: [{
                                type: "Label",
                                props: {
                                    x: -39,
                                    width: 200,
                                    var: "OrderUpgradeTitle",
                                    valign: "middle",
                                    text: "订单升级奖励",
                                    height: 54,
                                    fontSize: 35,
                                    color: "#f89808",
                                    centerY: 0,
                                    align: "center"
                                },
                                compId: 785
                            }, {
                                type: "Label",
                                props: {
                                    x: 199,
                                    width: 200,
                                    var: "OrderUpgradeGlod",
                                    valign: "middle",
                                    height: 54,
                                    fontSize: 40,
                                    color: "#f89808",
                                    centerY: 2,
                                    align: "left"
                                },
                                compId: 786
                            }]
                        }, {
                            type: "Box",
                            props: {
                                x: 212,
                                width: 214,
                                height: 54,
                                centerY: 260
                            },
                            compId: 513,
                            child: [{
                                type: "Label",
                                props: {
                                    x: 0,
                                    width: 200,
                                    var: "ResultRank",
                                    valign: "middle",
                                    text: "点评 S+",
                                    height: 54,
                                    fontSize: 35,
                                    color: "#f89808",
                                    centerY: 1,
                                    align: "center"
                                },
                                compId: 514
                            }, {
                                type: "Label",
                                props: {
                                    x: 199,
                                    width: 200,
                                    var: "ResultAddGold",
                                    valign: "middle",
                                    text: "+300",
                                    height: 54,
                                    fontSize: 40,
                                    color: "#f89808",
                                    centerY: 2,
                                    align: "left"
                                },
                                compId: 600
                            }]
                        }, {
                            type: "Image",
                            props: {
                                x: 159,
                                skin: "game/m_gamepress.png",
                                centerY: 200,
                                centerX: 0
                            },
                            compId: 526
                        }, {
                            type: "Image",
                            props: {
                                x: 202,
                                width: 210,
                                var: "ResultImg",
                                skin: "game/m_gamePressGreen.png",
                                height: 14,
                                centerY: 205
                            },
                            compId: 527
                        }, {
                            type: "Image",
                            props: {
                                var: "WinLevel3",
                                skin: "game/m_ready1.png",
                                centerY: 205,
                                centerX: -16
                            },
                            compId: 530
                        }, {
                            type: "Image",
                            props: {
                                var: "WinLevel4",
                                skin: "game/m_ready1.png",
                                centerY: 205,
                                centerX: 67
                            },
                            compId: 531
                        }, {
                            type: "Image",
                            props: {
                                var: "WinLevel2",
                                skin: "game/m_ready1.png",
                                centerY: 205,
                                centerX: -97
                            },
                            compId: 528
                        }, {
                            type: "Box",
                            props: {
                                width: 84,
                                var: "WinLevel5",
                                height: 81,
                                centerY: 202,
                                centerX: 164
                            },
                            compId: 702,
                            child: [{
                                type: "Image",
                                props: {
                                    y: -19,
                                    x: -17,
                                    var: "WinLevel5light",
                                    skin: "game/m_light.png",
                                    scaleY: .6,
                                    scaleX: .6
                                },
                                compId: 704
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 82,
                                    var: "WinLevel5box",
                                    skin: "game/chessbrut.png",
                                    height: 78
                                },
                                compId: 703
                            }]
                        }]
                    }, {
                        type: "Box",
                        props: {
                            var: "LostBox",
                            top: 1,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 598,
                        child: [{
                            type: "Label",
                            props: {
                                y: 296,
                                x: 229,
                                var: "ResultLostMatch",
                                valign: "middle",
                                text: "匹配:3%",
                                strokeColor: "#000000",
                                stroke: 5,
                                fontSize: 70,
                                font: "Arial",
                                color: "#ffffff",
                                centerY: -309,
                                centerX: 12,
                                align: "center"
                            },
                            compId: 534
                        }, {
                            type: "Box",
                            props: {
                                y: 407,
                                x: 50.814453125,
                                width: 643,
                                var: "showResultBox",
                                height: 582
                            },
                            compId: 498
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        x: 360,
                        width: 264,
                        var: "cupBox",
                        name: "cupBox",
                        height: 281,
                        centerX: 0,
                        bottom: 438,
                        anchorY: 1,
                        anchorX: .5
                    },
                    compId: 108,
                    child: [{
                        type: "Box",
                        props: {
                            y: 282,
                            x: 130,
                            width: 261,
                            visible: !0,
                            var: "TeaImgBox",
                            height: 282,
                            anchorY: 1,
                            anchorX: .5
                        },
                        compId: 136,
                        child: [{
                            type: "Image",
                            props: {
                                var: "TeaImg1",
                                scaleY: 1,
                                scaleX: 1,
                                pivotY: 343,
                                pivotX: 176,
                                centerX: -1,
                                bottom: 0
                            },
                            compId: 154
                        }, {
                            type: "Box",
                            props: {
                                y: 277,
                                x: 133,
                                width: 241,
                                var: "NextTeaBox",
                                height: 281,
                                anchorY: 1,
                                anchorX: .5
                            },
                            compId: 699
                        }, {
                            type: "Image",
                            props: {
                                x: 0,
                                var: "TeaMaskImg1",
                                skin: "game/w_0.png",
                                renderType: "mask",
                                bottom: 0
                            },
                            compId: 712
                        }]
                    }, {
                        type: "Image",
                        props: {
                            visible: !0,
                            var: "cup",
                            skin: "game/m_cuple.png",
                            centerY: 3,
                            centerX: -2
                        },
                        compId: 39
                    }, {
                        type: "Image",
                        props: {
                            y: -36,
                            x: -118.5,
                            visible: !0,
                            var: "MoveTeaMask",
                            skin: "game/cupBG.png",
                            rotation: 0
                        },
                        compId: 714,
                        child: [{
                            type: "Image",
                            props: {
                                y: 43,
                                x: 120,
                                width: 261,
                                visible: !1,
                                var: "MoveTeaMaskImg",
                                skin: "game/m_cuple.png",
                                height: 275
                            },
                            compId: 718
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 15,
                            x: -12.5,
                            width: 285,
                            visible: !1,
                            var: "gaiziImg",
                            skin: "x/s_skin1.png",
                            rotation: -20,
                            pivotY: 238,
                            height: 238
                        },
                        compId: 481
                    }, {
                        type: "Box",
                        props: {
                            y: -751,
                            x: -228,
                            width: 720,
                            var: "gameBox",
                            name: "gameBox",
                            height: 1280
                        },
                        compId: 106
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        var: "MainBox",
                        top: 0,
                        right: 0,
                        name: "MainBox",
                        left: 0,
                        bottom: 0
                    },
                    compId: 57,
                    child: [{
                        type: "Image",
                        props: {
                            var: "bg",
                            top: 0,
                            right: 0,
                            name: "bg",
                            left: 0,
                            bottom: 0
                        },
                        compId: 740
                    }, {
                        type: "Box",
                        props: {
                            top: 1,
                            runtime: "views/runtime/UIAdapter.ts",
                            right: 0,
                            left: 0
                        },
                        compId: 262,
                        child: [{
                            type: "Image",
                            props: {
                                y: 51,
                                x: 146,
                                var: "TeaImgBtn",
                                skin: "game/m_go.png",
                                centerX: 0
                            },
                            compId: 264
                        }, {
                            type: "Box",
                            props: {
                                y: -1,
                                x: -27,
                                var: "keybox"
                            },
                            compId: 273,
                            child: [{
                                type: "Image",
                                props: {
                                    y: -161,
                                    x: 0,
                                    width: 130,
                                    skin: "game/m_bg4.png",
                                    sizeGrid: "22,0,70,0",
                                    height: 289
                                },
                                compId: 256
                            }, {
                                type: "Image",
                                props: {
                                    y: -161,
                                    x: 129,
                                    width: 130,
                                    skin: "game/m_bg4.png",
                                    sizeGrid: "13,0,70,0",
                                    height: 289
                                },
                                compId: 257
                            }, {
                                type: "Image",
                                props: {
                                    y: -161,
                                    x: 258,
                                    width: 130,
                                    skin: "game/m_bg4.png",
                                    sizeGrid: "22,0,70,0",
                                    height: 289
                                },
                                compId: 274
                            }, {
                                type: "Image",
                                props: {
                                    y: -161,
                                    x: 384,
                                    width: 130,
                                    skin: "game/m_bg4.png",
                                    sizeGrid: "13,0,70,0",
                                    height: 289
                                },
                                compId: 275
                            }, {
                                type: "Image",
                                props: {
                                    y: -161,
                                    x: 513,
                                    width: 130,
                                    skin: "game/m_bg4.png",
                                    sizeGrid: "22,0,70,0",
                                    height: 289
                                },
                                compId: 276
                            }, {
                                type: "Image",
                                props: {
                                    y: -161,
                                    x: 639,
                                    width: 130,
                                    skin: "game/m_bg4.png",
                                    sizeGrid: "13,0,70,0",
                                    height: 289
                                },
                                compId: 277
                            }, {
                                type: "Image",
                                props: {
                                    y: 71,
                                    x: 564,
                                    var: "Goldimg",
                                    skin: "game/gold2.png",
                                    scaleY: .5,
                                    scaleX: .5
                                },
                                compId: 266
                            }, {
                                type: "Label",
                                props: {
                                    y: 75,
                                    x: 631,
                                    width: 73,
                                    var: "GoldCnt",
                                    valign: "middle",
                                    text: "275",
                                    height: 32,
                                    fontSize: 35,
                                    font: "Arial",
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 267
                            }, {
                                type: "Image",
                                props: {
                                    y: 172,
                                    x: 27,
                                    visible: !1,
                                    var: "flyKey",
                                    skin: "game/chessKey.png"
                                },
                                compId: 597
                            }, {
                                type: "Box",
                                props: {
                                    y: 118,
                                    left: 542,
                                    height: 43
                                },
                                compId: 268,
                                child: [{
                                    type: "Image",
                                    props: {
                                        x: 20,
                                        width: 46,
                                        var: "key1",
                                        skin: "game/m_gray.png",
                                        height: 43
                                    },
                                    compId: 269
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 79,
                                        width: 46,
                                        var: "key2",
                                        skin: "game/m_gray.png",
                                        height: 43
                                    },
                                    compId: 271
                                }, {
                                    type: "Image",
                                    props: {
                                        x: 141,
                                        width: 46,
                                        var: "key3",
                                        skin: "game/m_gray.png",
                                        height: 43
                                    },
                                    compId: 272
                                }]
                            }]
                        }, {
                            type: "Label",
                            props: {
                                y: 9,
                                x: 276.5,
                                width: 167,
                                var: "LevelName",
                                valign: "middle",
                                text: "CHALLENGE 1",
                                strokeColor: "#000000",
                                stroke: 1,
                                height: 66,
                                fontSize: 35,
                                font: "Arial",
                                color: "#ffffff",
                                bold: !0,
                                align: "center"
                            },
                            compId: 391
                        }]
                    }, {
                        type: "Box",
                        props: {
                            width: 720,
                            var: "box1",
                            right: 0,
                            left: 0,
                            height: 248,
                            bottom: 190
                        },
                        compId: 278,
                        child: [{
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "game/m_table.png",
                                sizeGrid: "45,11,31,19",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 279
                        }, {
                            type: "Box",
                            props: {
                                y: 36,
                                x: 71,
                                width: 600,
                                var: "BottomBtnBox",
                                height: 209
                            },
                            compId: 315,
                            child: [{
                                type: "Box",
                                props: {
                                    width: 500,
                                    var: "HBox1",
                                    space: 20,
                                    height: 100,
                                    centerY: 0,
                                    centerX: 0
                                },
                                compId: 307
                            }, {
                                type: "Box",
                                props: {
                                    width: 500,
                                    var: "HBox2",
                                    space: 150,
                                    height: 100,
                                    centerY: 60,
                                    centerX: 0,
                                    align: "middle"
                                },
                                compId: 311
                            }]
                        }]
                    }, {
                        type: "Box",
                        props: {
                            width: 171,
                            left: 0,
                            height: 430,
                            bottom: 506
                        },
                        compId: 284,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                var: "SignBtn",
                                skin: "game/m_bg.png",
                                scaleY: .7,
                                scaleX: .7
                            },
                            compId: 770,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 50,
                                    x: 31,
                                    skin: "common/sign.png"
                                },
                                compId: 771
                            }, {
                                type: "Image",
                                props: {
                                    y: 11,
                                    x: 89,
                                    var: "signRed",
                                    skin: "tui/redPoint.png"
                                },
                                compId: 772
                            }]
                        }, {
                            type: "Image",
                            props: {
                                y: 150,
                                x: 0,
                                var: "SkinBtn",
                                skin: "game/m_buttonBg.png",
                                scaleY: .7,
                                scaleX: .7
                            },
                            compId: 290,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 31,
                                    x: 19,
                                    var: "UseSkinImg",
                                    skin: "game/s_skin1.png"
                                },
                                compId: 291
                            }, {
                                type: "Label",
                                props: {
                                    y: 120,
                                    x: 19,
                                    width: 94,
                                    var: "SkinCntLab",
                                    valign: "middle",
                                    text: "1/25",
                                    stroke: 2,
                                    height: 24,
                                    fontSize: 30,
                                    font: "Arial",
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 292
                            }]
                        }, {
                            type: "Image",
                            props: {
                                y: 303,
                                x: 0,
                                var: "ResetBtn",
                                skin: "game/m_bg.png",
                                scaleY: .7,
                                scaleX: .7
                            },
                            compId: 285,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 50,
                                    x: 31,
                                    skin: "common/m_delete1.png"
                                },
                                compId: 286
                            }]
                        }]
                    }, {
                        type: "Box",
                        props: {
                            width: 116,
                            var: "morePic",
                            right: 0,
                            height: 271,
                            bottom: 506
                        },
                        compId: 783,
                        child: [{
                            type: "Image",
                            props: {
                                y: 135,
                                width: 161,
                                var: "Ready",
                                skin: "game/m_bg.png",
                                scaleY: .7,
                                scaleX: -.7,
                                right: 113,
                                height: 178
                            },
                            compId: 281,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 49,
                                    x: 104,
                                    width: 80,
                                    skin: "game/m_bg11.png",
                                    scaleX: -1,
                                    height: 80
                                },
                                compId: 289
                            }]
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 63,
                        var: "box2",
                        height: 346,
                        centerX: -104,
                        bottom: 378
                    },
                    compId: 510,
                    child: [{
                        type: "Sprite",
                        props: {
                            x: 0,
                            width: 13,
                            var: "leftCollider",
                            rotation: -8,
                            height: 264
                        },
                        compId: 123,
                        child: [{
                            type: "Script",
                            props: {
                                width: 13,
                                label: "cupground",
                                height: 350,
                                runtime: "laya.physics.BoxCollider"
                            },
                            compId: 745
                        }, {
                            type: "Script",
                            props: {
                                type: "kinematic",
                                label: "cupground",
                                gravityScale: 0,
                                category: 128,
                                runtime: "laya.physics.RigidBody"
                            },
                            compId: 746
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 60,
                        var: "box3",
                        height: 338,
                        centerX: 102,
                        bottom: 382
                    },
                    compId: 511,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 45,
                            width: 13,
                            var: "rightCollider",
                            rotation: 9,
                            height: 264
                        },
                        compId: 124,
                        child: [{
                            type: "Script",
                            props: {
                                width: 13,
                                label: "cupground",
                                height: 350,
                                runtime: "laya.physics.BoxCollider"
                            },
                            compId: 747
                        }, {
                            type: "Script",
                            props: {
                                type: "kinematic",
                                label: "cupground",
                                gravityScale: 0,
                                category: 128,
                                runtime: "laya.physics.RigidBody"
                            },
                            compId: 748
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 274,
                        var: "box4",
                        height: 56,
                        centerX: -5,
                        bottom: 419
                    },
                    compId: 601,
                    child: [{
                        type: "Sprite",
                        props: {
                            x: 274,
                            width: 38,
                            var: "waterChangeGround",
                            rotation: 90,
                            height: 249
                        },
                        compId: 602,
                        child: [{
                            type: "Script",
                            props: {
                                width: 38,
                                label: "waterground",
                                height: 249,
                                runtime: "laya.physics.BoxCollider"
                            },
                            compId: 749
                        }, {
                            type: "Script",
                            props: {
                                type: "kinematic",
                                mask: 4,
                                label: "waterground",
                                gravityScale: 0,
                                runtime: "laya.physics.RigidBody"
                            },
                            compId: 750
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 274,
                        var: "box5",
                        height: 56,
                        centerX: -12,
                        bottom: 391
                    },
                    compId: 512,
                    child: [{
                        type: "Sprite",
                        props: {
                            x: 274,
                            width: 38,
                            var: "downCollider",
                            rotation: 90,
                            height: 249
                        },
                        compId: 125,
                        child: [{
                            type: "Script",
                            props: {
                                width: 38,
                                label: "cupground",
                                height: 249,
                                runtime: "laya.physics.BoxCollider"
                            },
                            compId: 751
                        }, {
                            type: "Script",
                            props: {
                                type: "kinematic",
                                label: "cupground",
                                gravityScale: 0,
                                category: 128,
                                runtime: "laya.physics.RigidBody"
                            },
                            compId: 752
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 200,
                        var: "ShowCupBox",
                        height: 200,
                        centerY: -260,
                        centerX: 250
                    },
                    compId: 280,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 104,
                            width: 207,
                            var: "showCupBg",
                            skin: "game/m_showbg.png",
                            pivotX: 104,
                            height: 207
                        },
                        compId: 361
                    }, {
                        type: "Image",
                        props: {
                            x: 0,
                            var: "showCupTitle",
                            top: -50,
                            skin: "common/dingdanshencheng.png"
                        },
                        compId: 769
                    }, {
                        type: "Box",
                        props: {
                            y: 15,
                            x: 45,
                            width: 120,
                            height: 180
                        },
                        compId: 393,
                        child: [{
                            type: "Image",
                            props: {
                                y: 47,
                                x: 0,
                                var: "levelcolor",
                                skin: "game/m_showWater.png",
                                scaleY: .8,
                                scaleX: .8
                            },
                            compId: 389
                        }, {
                            type: "Image",
                            props: {
                                y: 42,
                                x: 10,
                                var: "IceShow1",
                                skin: "game/m_showIce1.png",
                                scaleY: .3,
                                scaleX: .3
                            },
                            compId: 394
                        }, {
                            type: "Image",
                            props: {
                                y: 37,
                                x: 8,
                                var: "IceShow2",
                                skin: "game/m_showIce2.png",
                                scaleY: .3,
                                scaleX: .3
                            },
                            compId: 395
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                skin: "game/m_showCup.png",
                                scaleY: .8,
                                scaleX: .8
                            },
                            compId: 392
                        }, {
                            type: "Box",
                            props: {
                                y: 71,
                                x: 13,
                                width: 92,
                                var: "ZZpanel",
                                height: 103
                            },
                            compId: 396,
                            child: [{
                                type: "Box",
                                props: {
                                    y: 39,
                                    width: 64,
                                    var: "zzBox",
                                    height: 64,
                                    centerX: 0
                                },
                                compId: 469
                            }]
                        }]
                    }, {
                        type: "Sprite",
                        props: {
                            y: 20,
                            x: 174,
                            width: 6,
                            var: "FailColor1",
                            height: 66
                        },
                        compId: 595
                    }, {
                        type: "Sprite",
                        props: {
                            y: 20,
                            x: 184,
                            width: 6,
                            var: "FailColor2",
                            height: 66
                        },
                        compId: 596
                    }]
                }, {
                    type: "Box",
                    props: {
                        x: 234,
                        width: 258,
                        var: "box6",
                        height: 248,
                        bottom: 190
                    },
                    compId: 249,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            width: 258,
                            var: "IceGround",
                            height: 274
                        },
                        compId: 250,
                        child: [{
                            type: "Script",
                            props: {
                                width: 258,
                                label: "iceground",
                                height: 254,
                                runtime: "laya.physics.BoxCollider"
                            },
                            compId: 753
                        }, {
                            type: "Script",
                            props: {
                                type: "static",
                                mask: 10,
                                linearDamping: .9,
                                label: "iceground",
                                group: 1,
                                gravityScale: 0,
                                category: 2,
                                bullet: !0,
                                runtime: "laya.physics.RigidBody"
                            },
                            compId: 754
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        x: 0,
                        width: 720,
                        var: "ground",
                        height: 248,
                        bottom: 190
                    },
                    compId: 30,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 40,
                            x: 0,
                            width: 720,
                            name: "ground",
                            height: 248
                        },
                        compId: 3,
                        child: [{
                            type: "Script",
                            props: {
                                width: 720,
                                label: "ground",
                                height: 214,
                                runtime: "laya.physics.BoxCollider"
                            },
                            compId: 755
                        }, {
                            type: "Script",
                            props: {
                                type: "static",
                                linearDamping: .9,
                                label: "ground",
                                gravityScale: 0,
                                bullet: !0,
                                runtime: "laya.physics.RigidBody"
                            },
                            compId: 756
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        var: "zzsdkBox",
                        top: 0,
                        right: 0,
                        mouseThrough: !0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 773
                }]
            }, {
                type: "Script",
                props: {
                    shortResult: "@Prefab:prefab/shortResult.json",
                    longResult: "@Prefab:prefab/longResult.json",
                    dropWater: "@Prefab:prefab/DropWater.json",
                    dropBoxSugar: "@Prefab:prefab/DropBoxSuger.json",
                    dropBoxIce: "@Prefab:prefab/DropBoxIce.json",
                    dropBox: "@Prefab:prefab/DropBox.json",
                    btnMask: "@Prefab:prefab/btnMask.json",
                    runtime: "script/GameControl.ts"
                },
                compId: 757
            }],
            animations: [{
                nodes: [{
                    target: 787,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleY",
                            index: 5
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleY",
                            index: 10
                        }, {
                            value: 1.2,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleY",
                            index: 20
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleX",
                            index: 5
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleX",
                            index: 10
                        }, {
                            value: 1.2,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 787,
                            key: "scaleX",
                            index: 20
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["common/m_bg2.png", "game/m_btn2.png", "game/chessbrut.png", "common/friendsbtn.png", "game/m_bg1.png", "game/m_gold.png", "game/m_gray.png", "game/gold2.png", "game/m_gamepress.png", "game/m_gamePressGreen.png", "game/m_ready1.png", "game/m_light.png", "game/w_0.png", "game/m_cuple.png", "game/cupBG.png", "x/s_skin1.png", "game/m_go.png", "game/m_bg4.png", "game/chessKey.png", "game/m_table.png", "game/m_bg.png", "common/sign.png", "tui/redPoint.png", "game/m_buttonBg.png", "game/s_skin1.png", "common/m_delete1.png", "common/bgmore.png", "game/m_bg11.png", "game/m_showbg.png", "common/dingdanshencheng.png", "game/m_showWater.png", "game/m_showIce1.png", "game/m_showIce2.png", "game/m_showCup.png", "prefab/shortResult.json", "prefab/longResult.json", "prefab/DropWater.json", "prefab/DropBoxSuger.json", "prefab/DropBoxIce.json", "prefab/DropBox.json", "prefab/btnMask.json"],
            loadList3D: []
        }, e.gamemainUI = s, n("ui.gamemainUI", s);
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
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1228,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    top: 0,
                    right: 0,
                    name: "bg",
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .5
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    x: 0,
                    right: 0,
                    left: 0,
                    height: 450,
                    centerY: -20
                },
                compId: 26,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "game/chess_mid_bg.png",
                        sizeGrid: "60,40,60,40",
                        right: 50,
                        left: 50,
                        bottom: 0
                    },
                    compId: 27
                }, {
                    type: "Label",
                    props: {
                        y: 28,
                        width: 500,
                        var: "titleLab",
                        valign: "middle",
                        text: "FREE COIN",
                        name: "titleLab",
                        height: 70,
                        fontSize: 50,
                        color: "#333333",
                        centerX: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 28
                }, {
                    type: "Image",
                    props: {
                        var: "goldImage",
                        skin: "common/golds.png",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 48
                }, {
                    type: "Label",
                    props: {
                        width: 300,
                        var: "goldLab",
                        valign: "middle",
                        text: "COIN+200",
                        strokeColor: "#000000",
                        stroke: 1.5,
                        height: 50,
                        fontSize: 45,
                        color: "#f4bc08",
                        centerX: 0,
                        bottom: 58,
                        anchorY: .5,
                        anchorX: .5,
                        align: "center"
                    },
                    compId: 44
                }, {
                    type: "Button",
                    props: {
                        var: "closeBtn",
                        top: 30,
                        stateNum: 1,
                        skin: "game/close.png",
                        sizeGrid: "10,10,10,10",
                        right: 66,
                        name: "closeBtn",
                        labelSize: 30,
                        labelColors: "#FFFFFF",
                        labelBold: !0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 45,
                    child: [{
                        type: "Script",
                        props: {
                            y: 14,
                            x: 0,
                            playEvent: "mouseup",
                            runtime: "ui.effect.BtnScaleUpUI"
                        },
                        compId: 46
                    }, {
                        type: "Script",
                        props: {
                            y: 0,
                            x: 0,
                            playEvent: "mousedown",
                            runtime: "ui.effect.BtnScaleDownUI"
                        },
                        compId: 47
                    }]
                }, {
                    type: "Button",
                    props: {
                        width: 260,
                        visible: !0,
                        var: "doubleBtn",
                        stateNum: 1,
                        skin: "game/greenbtn.png",
                        sizeGrid: "31,48,32,41",
                        name: "doubleBtn",
                        labelSize: 30,
                        labelColors: "#FFFFFF",
                        labelBold: !0,
                        height: 100,
                        centerX: 0,
                        bottom: -120,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 49,
                    child: [{
                        type: "Script",
                        props: {
                            y: 14,
                            x: 0,
                            playEvent: "mouseup",
                            runtime: "ui.effect.BtnScaleUpUI"
                        },
                        compId: 50
                    }, {
                        type: "Script",
                        props: {
                            y: 0,
                            x: 0,
                            playEvent: "mousedown",
                            runtime: "ui.effect.BtnScaleDownUI"
                        },
                        compId: 51
                    }, {
                        type: "Image",
                        props: {
                            width: 56,
                            skin: "common/ic_vedio.png",
                            scaleY: .6,
                            scaleX: .6,
                            name: "video_icon",
                            left: 29,
                            height: 53,
                            centerY: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 52
                    }, {
                        type: "Label",
                        props: {
                            wordWrap: !0,
                            width: 207,
                            valign: "middle",
                            text: "FREE",
                            strokeColor: "#000000",
                            stroke: 1,
                            padding: "5",
                            name: "lab",
                            leading: 5,
                            height: 62,
                            fontSize: 40,
                            color: "#ffffff",
                            centerY: 0,
                            centerX: 19,
                            bold: !0,
                            align: "center"
                        },
                        compId: 53
                    }]
                }]
            }],
            loadList: ["game/chess_mid_bg.png", "common/golds.png", "game/close.png", "game/greenbtn.png", "common/ic_vedio.png"],
            loadList3D: []
        }, e.GoldViewUI = a, n("ui.GoldViewUI", a);
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
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    skin: "loading/load_bg.jpg",
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 4
            }, {
                type: "Box",
                props: {
                    width: 407,
                    height: 40,
                    centerX: 0,
                    bottom: 147
                },
                compId: 9,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 407,
                        skin: "loading/loading_progress_bg.png",
                        height: 40
                    },
                    compId: 15
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 407,
                        skin: "loading/loading_progress.png",
                        sizeGrid: "17,51,22,40",
                        height: 40
                    },
                    compId: 8,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 1,
                            x: 0,
                            width: 395,
                            var: "progressImageMask",
                            renderType: "mask",
                            height: 36
                        },
                        compId: 10
                    }]
                }, {
                    type: "Label",
                    props: {
                        width: 410,
                        var: "loadingLabel",
                        valign: "middle",
                        text: "0%",
                        strokeColor: "#549FE4",
                        stroke: 4,
                        right: 0,
                        left: -3,
                        height: 40,
                        fontSize: 40,
                        color: "#FFFFFF",
                        bottom: -40,
                        align: "center"
                    },
                    compId: 11
                }, {
                    type: "Label",
                    props: {
                        y: -56,
                        x: 2.5,
                        width: 402,
                        valign: "middle",
                        text: "LOADING...",
                        strokeColor: "#549FE4",
                        stroke: 2,
                        height: 67,
                        fontSize: 30,
                        color: "#FFFFFF",
                        align: "center"
                    },
                    compId: 12
                }]
            }, {
                type: "Image",
                props: {
                    y: 105,
                    skin: "loading/logo.png",
                    centerX: 0
                },
                compId: 14
            }],
            loadList: ["loading/load_bg.jpg", "loading/loading_progress_bg.png", "loading/loading_progress.png", "loading/logo.png"],
            loadList3D: []
        }, e.LoadingViewUI = o, n("ui.LoadingViewUI", o);
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
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .8
                },
                compId: 28
            }, {
                type: "Box",
                props: {
                    width: 690,
                    var: "contentBox",
                    top: 165,
                    height: 897,
                    centerX: 0
                },
                compId: 4,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 690,
                        skin: "game/chess_mid_bg.png",
                        sizeGrid: "42,59,52,47",
                        height: 808
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: -81,
                        x: 171,
                        skin: "common/lxsytitle.png",
                        scaleY: .8,
                        scaleX: .8
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        x: 214,
                        skin: "game/gold2.png",
                        scaleY: .5,
                        scaleX: .5,
                        bottom: 268,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 8
                }, {
                    type: "Label",
                    props: {
                        width: 349,
                        var: "coinLabel",
                        valign: "middle",
                        text: "COIN+100",
                        strokeColor: "#C07400",
                        stroke: 10,
                        height: 54,
                        fontSize: 50,
                        color: "#FDEC5A",
                        centerX: 90,
                        bottom: 265,
                        bold: !0,
                        align: "left"
                    },
                    compId: 9
                }, {
                    type: "Button",
                    props: {
                        y: 715,
                        x: 345,
                        width: 278,
                        var: "btn",
                        stateNum: 1,
                        skin: "game/greenbtn.png",
                        scaleY: 1,
                        scaleX: 1,
                        pivotY: 35,
                        pivotX: 139,
                        height: 104,
                        centerX: -6,
                        bottom: 113
                    },
                    compId: 10,
                    child: [{
                        type: "Image",
                        props: {
                            width: 35,
                            skin: "common/ic_vedio.png",
                            left: 35,
                            height: 35,
                            centerY: 0
                        },
                        compId: 11
                    }, {
                        type: "Label",
                        props: {
                            valign: "middle",
                            text: "三倍领取x",
                            right: 27,
                            fontSize: 40,
                            color: "#84442a",
                            centerY: 0,
                            align: "center"
                        },
                        compId: 12
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 810,
                        x: 238,
                        width: 213,
                        var: "closeBtn",
                        height: 75,
                        bottom: 12
                    },
                    compId: 13,
                    child: [{
                        type: "Image",
                        props: {
                            x: -.71875,
                            width: 214,
                            skin: "game/m_btn2.png",
                            name: "btnBg",
                            height: 69
                        },
                        compId: 14
                    }, {
                        type: "Script",
                        props: {
                            runtime: "views/item/CloseBtnScript.ts"
                        },
                        compId: 16
                    }, {
                        type: "Label",
                        props: {
                            y: 0,
                            x: 0,
                            width: 210,
                            valign: "middle",
                            text: "普通领取",
                            stroke: 4,
                            height: 68,
                            fontSize: 30,
                            color: "#FFFFFF",
                            bold: !0,
                            align: "center"
                        },
                        compId: 20
                    }]
                }, {
                    type: "Label",
                    props: {
                        width: 163,
                        visible: !1,
                        var: "upTip",
                        valign: "middle",
                        text: "(收益已达上限)",
                        height: 40,
                        fontSize: 25,
                        color: "#2f195f",
                        centerX: 232,
                        bottom: 272,
                        bold: !0,
                        align: "center"
                    },
                    compId: 19
                }, {
                    type: "Label",
                    props: {
                        y: 632,
                        x: 170,
                        width: 349,
                        var: "offlineTip",
                        valign: "middle",
                        text: "COIN+100",
                        height: 44,
                        fontSize: 25,
                        color: "#2f195f",
                        centerX: 6,
                        bottom: 221,
                        bold: !0,
                        align: "center"
                    },
                    compId: 18
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "zzsdkBox",
                    top: 0,
                    right: 0,
                    mouseThrough: !0,
                    left: 0,
                    bottom: 0
                },
                compId: 23,
                child: [{
                    type: "Box",
                    props: {
                        y: 80,
                        width: 720,
                        var: "ztuiBox",
                        mouseThrough: !0,
                        height: 900
                    },
                    compId: 25,
                    child: [{
                        type: "Box",
                        props: {
                            y: 110,
                            x: 35,
                            width: 650,
                            var: "a3xbox",
                            height: 550,
                            centerX: 0
                        },
                        compId: 26,
                        child: [{
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "tui/index-box.png",
                                sizeGrid: "20,20,20,20",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 27
                        }]
                    }]
                }]
            }],
            animations: [{
                nodes: [{
                    target: 10,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            label: null,
                            key: "scaleY",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 30
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            label: null,
                            key: "scaleX",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 30
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["game/chess_mid_bg.png", "common/lxsytitle.png", "game/gold2.png", "game/greenbtn.png", "common/ic_vedio.png", "game/m_btn2.png", "tui/index-box.png"],
            loadList3D: []
        }, e.OfflineViewUI = r, n("ui.OfflineViewUI", r);
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
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 34,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .8
                },
                compId: 40
            }, {
                type: "Box",
                props: {
                    x: 0,
                    width: 720,
                    var: "window",
                    top: 240,
                    height: 850
                },
                compId: 33,
                child: [{
                    type: "Box",
                    props: {
                        x: 0,
                        top: -100,
                        name: "title"
                    },
                    compId: 36,
                    child: [{
                        type: "Image",
                        props: {
                            width: 720,
                            skin: "game/chess_titlebg.png",
                            scaleY: .8,
                            left: 0
                        },
                        compId: 6
                    }, {
                        type: "Sprite",
                        props: {
                            y: 8,
                            x: 207,
                            texture: "common/title.png",
                            scaleY: .7,
                            scaleX: .7
                        },
                        compId: 7
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 107,
                        x: 0,
                        width: 720,
                        skin: "game/chess_mid_bg.png",
                        height: 577
                    },
                    compId: 14
                }, {
                    type: "Sprite",
                    props: {
                        y: 41.5,
                        x: 542,
                        texture: "game/gold2.png",
                        scaleY: .5,
                        scaleX: .5,
                        name: "gold"
                    },
                    compId: 9
                }, {
                    type: "Text",
                    props: {
                        y: 42,
                        x: 592,
                        width: 116,
                        var: "goldCount",
                        valign: "middle",
                        text: "1300",
                        runtime: "laya.display.Text",
                        height: 51,
                        fontSize: 35,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        bold: !0,
                        align: "left"
                    },
                    compId: 10
                }, {
                    type: "Sprite",
                    props: {
                        y: 46,
                        x: 211,
                        texture: "game/chess_hign.png",
                        name: "text"
                    },
                    compId: 11
                }, {
                    type: "Image",
                    props: {
                        y: 8,
                        x: 388.5693359375,
                        var: "bestReward",
                        skin: "game/s_skin10.png"
                    },
                    compId: 12
                }, {
                    type: "Box",
                    props: {
                        y: 131,
                        x: 92,
                        var: "rewardObj",
                        styleSkin: "game/s_skin8.png"
                    },
                    compId: 15
                }, {
                    type: "Box",
                    props: {
                        y: 684,
                        x: 78,
                        var: "grade",
                        height: 100
                    },
                    compId: 17,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 23,
                            centerX: 0,
                            texture: "game/chesstext.png"
                        },
                        compId: 18
                    }, {
                        type: "Box",
                        props: {
                            centerX: 0,
                            y: 100,
                        },
                        compId: 37,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                var: "key1",
                                skin: "game/chessKey.png",
                                scaleY: .8,
                                scaleX: .8
                            },
                            compId: 16
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 109,
                                var: "key2",
                                skin: "game/chessKey.png",
                                scaleY: .8,
                                scaleX: .8
                            },
                            compId: 19
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: 218,
                                var: "key3",
                                skin: "game/chessKey.png",
                                scaleY: .8,
                                scaleX: .8
                            },
                            compId: 20
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 695,
                        x: 175,
                        width: 370,
                        visible: !1,
                        var: "getchance",
                        skin: "game/r_btn.png",
                        sizeGrid: "26,26,26,26",
                        height: 100
                    },
                    compId: 21,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 17,
                            x: 37,
                            texture: "game/m_AD.png"
                        },
                        compId: 22
                    }, {
                        type: "Sprite",
                        props: {
                            y: 16,
                            x: 268,
                            width: 62,
                            texture: "game/chessKey.png",
                            height: 67
                        },
                        compId: 23
                    }, {
                        type: "Label",
                        props: {
                            y: 20,
                            x: 154,
                            text: "+3",
                            styleSkin: "game/chess_hign.png",
                            fontSize: 60,
                            font: "Microsoft YaHei",
                            color: "#ffffff",
                            bold: !0
                        },
                        compId: 24
                    }]
                }, {
                    type: "Label",
                    props: {
                        y: 825,
                        centerX: 0,
                        visible: !1,
                        var: "back",
                        text: "NO,THANKS",
                        styleSkin: "game/chess_hign.png",
                        fontSize: 40,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        bold: !1
                    },
                    compId: 25
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "zzsdkBox",
                    top: 0,
                    right: 0,
                    mouseThrough: !0,
                    left: 0,
                    bottom: 0
                },
                compId: 38
            }],
            loadList: ["game/chess_titlebg.png", "common/title.png", "game/chess_mid_bg.png", "game/gold2.png", "game/chess_hign.png", "game/s_skin10.png", "game/s_skin8.png", "game/chesstext.png", "game/chessKey.png", "game/r_btn.png", "game/m_AD.png"],
            loadList3D: []
        }, e.OpenRewardUI = h, n("ui.OpenRewardUI", h);
        class l extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(l.uiView);
            }
        }
        l.uiView = {
            type: "View",
            props: {
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 66,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .8
                },
                compId: 67
            }, {
                type: "Box",
                props: {
                    right: 0,
                    left: 0,
                    height: 900,
                    centerY: -40
                },
                compId: 22,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        skin: "game/chess_titlebg.png",
                        sizeGrid: "0,94,0,77",
                        height: 181
                    },
                    compId: 23,
                    child: [{
                        type: "Label",
                        props: {
                            y: 43,
                            x: 240,
                            text: "CHALLENGE",
                            strokeColor: "#000000",
                            stroke: 3,
                            fontSize: 60,
                            centerX: 0,
                            color: "#ffffff",
                            bold: !0
                        },
                        compId: 62
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 259,
                        x: 219,
                        width: 23,
                        skin: "game/r_bg7.png",
                        height: 447
                    },
                    compId: 56
                }, {
                    type: "Box",
                    props: {
                        y: 185,
                        width: 311,
                        var: "box1",
                        height: 88,
                        centerX: 14
                    },
                    compId: 25,
                    child: [{
                        type: "Image",
                        props: {
                            y: 5,
                            x: 0,
                            width: 383,
                            skin: "game/r_bg3.png",
                            sizeGrid: "0,41,0,47",
                            name: "bg",
                            height: 76
                        },
                        compId: 26,
                        child: [{
                            type: "Label",
                            props: {
                                y: 18,
                                x: 95,
                                width: 229,
                                text: "REWARD！",
                                height: 40,
                                fontSize: 40,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 28
                        }, {
                            type: "Image",
                            props: {
                                y: 10,
                                x: 397,
                                width: 48,
                                visible: !1,
                                skin: "game/m_ready.png",
                                name: "bgright",
                                height: 48
                            },
                            compId: 59
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: -42,
                            skin: "game/chessbrut.png",
                            name: "openbox"
                        },
                        compId: 24
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 332,
                        width: 311,
                        var: "box2",
                        height: 88,
                        centerX: -20
                    },
                    compId: 29,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 38,
                            width: 341,
                            skin: "game/r_bg3.png",
                            sizeGrid: "0,41,0,47",
                            name: "bg",
                            height: 76
                        },
                        compId: 30,
                        child: [{
                            type: "Label",
                            props: {
                                y: 22,
                                x: 103,
                                text: "+1000",
                                fontSize: 30,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 31
                        }, {
                            type: "Image",
                            props: {
                                y: 14.5,
                                x: 197,
                                skin: "game/gold2.png",
                                scaleY: .5,
                                scaleX: .5
                            },
                            compId: 41
                        }, {
                            type: "Image",
                            props: {
                                y: 13,
                                x: 349,
                                width: 48,
                                visible: !1,
                                skin: "game/m_ready.png",
                                name: "bgright",
                                height: 48
                            },
                            compId: 60
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: -14,
                            x: -5,
                            skin: "game/r_bgstar.png",
                            name: "openbox"
                        },
                        compId: 32,
                        child: [{
                            type: "Label",
                            props: {
                                y: 35,
                                x: 44,
                                text: "3",
                                name: "openlabel",
                                fontSize: 45,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 43
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 483,
                        width: 311,
                        var: "box3",
                        height: 88,
                        centerX: 0
                    },
                    compId: 44,
                    child: [{
                        type: "Image",
                        props: {
                            y: 6,
                            x: 23,
                            width: 323,
                            skin: "game/r_bg3.png",
                            sizeGrid: "0,41,0,47",
                            name: "bg",
                            height: 76
                        },
                        compId: 45,
                        child: [{
                            type: "Label",
                            props: {
                                y: 23,
                                x: 104,
                                text: "+750",
                                fontSize: 30,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 46
                        }, {
                            type: "Image",
                            props: {
                                y: 14,
                                x: 191,
                                skin: "game/gold2.png",
                                scaleY: .5,
                                scaleX: .5
                            },
                            compId: 47
                        }, {
                            type: "Image",
                            props: {
                                y: 14,
                                x: 335,
                                width: 48,
                                visible: !1,
                                skin: "game/m_ready.png",
                                name: "bgright",
                                height: 48
                            },
                            compId: 58
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: -13.5,
                            x: -22,
                            skin: "game/r_bgstar.png",
                            name: "openbox"
                        },
                        compId: 48,
                        child: [{
                            type: "Label",
                            props: {
                                y: 35,
                                x: 44,
                                text: "2",
                                name: "openlabel",
                                fontSize: 45,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 50
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 635,
                        width: 311,
                        var: "box4",
                        height: 88,
                        centerX: -30
                    },
                    compId: 37,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 57.5,
                            width: 266,
                            skin: "game/r_bg.png",
                            sizeGrid: "0,41,0,47",
                            height: 76
                        },
                        compId: 38,
                        child: [{
                            type: "Label",
                            props: {
                                y: 22,
                                x: 99.21337890625,
                                text: "+500",
                                fontSize: 30,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 39
                        }, {
                            type: "Image",
                            props: {
                                y: 14,
                                x: 185,
                                skin: "game/gold2.png",
                                scaleY: .5,
                                scaleX: .5
                            },
                            compId: 53
                        }, {
                            type: "Image",
                            props: {
                                y: 14,
                                x: 287,
                                width: 48,
                                skin: "game/m_ready.png",
                                height: 48
                            },
                            compId: 57
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: -19.5,
                            x: 12,
                            skin: "game/r_bg4.png"
                        },
                        compId: 40,
                        child: [{
                            type: "Label",
                            props: {
                                y: 35,
                                x: 44,
                                text: "1",
                                fontSize: 45,
                                color: "#ffffff",
                                bold: !0
                            },
                            compId: 52
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 742,
                        var: "CloseBtn",
                        skin: "game/r_btn.png",
                        height: 100,
                        centerX: 0
                    },
                    compId: 54,
                    child: [{
                        type: "Label",
                        props: {
                            y: 20,
                            x: 85,
                            text: "NEXT",
                            fontSize: 60,
                            color: "#ffffff"
                        },
                        compId: 55
                    }]
                }, {
                    type: "Box",
                    props: {
                        x: 0,
                        width: 200,
                        top: -100,
                        height: 100
                    },
                    compId: 63,
                    child: [{
                        type: "Image",
                        props: {
                            y: 50,
                            x: 50,
                            width: 50,
                            skin: "game/gold2.png",
                            height: 50
                        },
                        compId: 64
                    }, {
                        type: "Label",
                        props: {
                            y: 54,
                            x: 111.015625,
                            var: "goldCnt",
                            text: "3865",
                            fontSize: 40,
                            color: "#ffffff"
                        },
                        compId: 65
                    }]
                }]
            }],
            loadList: ["game/chess_titlebg.png", "game/r_bg7.png", "game/r_bg3.png", "game/m_ready.png", "game/chessbrut.png", "game/gold2.png", "game/r_bgstar.png", "game/r_bg.png", "game/r_bg4.png", "game/r_btn.png"],
            loadList3D: []
        }, e.RandomLevelUI = l, n("ui.RandomLevelUI", l);
        class c extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(c.uiView);
            }
        }
        c.uiView = {
            type: "View",
            props: {
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .8
                },
                compId: 28
            }, {
                type: "Box",
                props: {
                    var: "btnShow",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 33,
                child: [{
                    type: "Label",
                    props: {
                        y: 755,
                        x: 156,
                        text: "点任意处开始游戏",
                        fontSize: 50,
                        color: "#ffffff",
                        bold: !0
                    },
                    compId: 35
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "zzsdkBox",
                    top: 0,
                    right: 0,
                    mouseThrough: !0,
                    left: 0,
                    bottom: 0
                },
                compId: 23,
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        width: 116,
                        var: "morePic",
                        right: 0,
                        height: 271,
                        bottom: 506
                    },
                    compId: 29,
                    child: [{
                        type: "Image",
                        props: {
                            var: "moreGame",
                            skin: "common/bgmore.png",
                            scaleY: .8,
                            scaleX: .8,
                            right: 0
                        },
                        compId: 30
                    }]
                }]
            }],
            animations: [{
                nodes: [{
                    target: 10,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            label: null,
                            key: "scaleY",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleY",
                            index: 30
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            label: null,
                            key: "scaleX",
                            index: 18
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 10,
                            key: "scaleX",
                            index: 30
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }],
            loadList: ["common/bgmore.png"],
            loadList3D: []
        }, e.ShiPinViewUI = c, n("ui.ShiPinViewUI", c);
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
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 22,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .8
                },
                compId: 26
            }, {
                type: "Box",
                props: {
                    x: 36,
                    var: "window",
                    top: 218,
                    styleSkin: "game/m_AD.png"
                },
                compId: 5,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 648,
                        skin: "game/bg2.png",
                        sizeGrid: "33,30,35,28",
                        name: "bg",
                        height: 900
                    },
                    compId: 6
                }, {
                    type: "Sprite",
                    props: {
                        y: 21,
                        x: 551,
                        var: "closebtn",
                        texture: "game/close.png"
                    },
                    compId: 7
                }, {
                    type: "Box",
                    props: {
                        y: 137,
                        x: 28,
                        var: "skinobj",
                        styleSkin: "game/m_AD.png"
                    },
                    compId: 9
                }, {
                    type: "HBox",
                    props: {
                        y: 744,
                        x: 324,
                        width: 0,
                        var: "pageObj",
                        styleSkin: "game/m_AD.png",
                        space: 20,
                        height: 0,
                        anchorY: .5,
                        anchorX: .5,
                        align: "middle"
                    },
                    compId: 10
                }, {
                    type: "Image",
                    props: {
                        y: 764,
                        x: 143,
                        width: 361,
                        var: "unlockbtn",
                        skin: "game/greenbtn.png",
                        sizeGrid: "53,81,53,86",
                        height: 110
                    },
                    compId: 11,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 31,
                            x: 24,
                            texture: "game/gold2.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 12
                    }, {
                        type: "Text",
                        props: {
                            y: 30,
                            x: 76,
                            width: 180,
                            var: "unlockCoin",
                            valign: "middle",
                            text: "500",
                            height: 45,
                            fontSize: 45,
                            font: "Microsoft YaHei",
                            color: "#ffffff",
                            bold: !0,
                            align: "right",
                            runtime: "laya.display.Text"
                        },
                        compId: 13
                    }, {
                        type: "Text",
                        props: {
                            y: 30,
                            x: 219,
                            width: 110,
                            valign: "middle",
                            text: "",
                            runtime: "laya.display.Text",
                            height: 50,
                            fontSize: 45,
                            font: "Microsoft YaHei",
                            color: "#ffffff",
                            bold: !0,
                            align: "center"
                        },
                        compId: 14
                    }]
                }, {
                    type: "Sprite",
                    props: {
                        y: 137,
                        x: 28,
                        visible: !1,
                        var: "selectIcon",
                        texture: "game/skin_select.png"
                    },
                    compId: 21
                }, {
                    type: "Sprite",
                    props: {
                        y: -46.5,
                        x: 436,
                        texture: "game/gold2.png",
                        scaleY: .5,
                        scaleX: .5,
                        name: "coinobj"
                    },
                    compId: 19
                }, {
                    type: "Text",
                    props: {
                        y: -54,
                        x: 487,
                        width: 232,
                        var: "coinCount",
                        valign: "middle",
                        text: "1000",
                        runtime: "laya.display.Text",
                        height: 73,
                        fontSize: 40,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "left"
                    },
                    compId: 20
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "zzsdkBox",
                    top: 0,
                    right: 0,
                    mouseThrough: !0,
                    left: 0,
                    bottom: 0
                },
                compId: 23
            }],
            loadList: ["game/m_AD.png", "game/bg2.png", "game/close.png", "game/greenbtn.png", "game/gold2.png", "game/skin_select.png"],
            loadList3D: []
        }, e.SkinUI = d, n("ui.SkinUI", d);
        class p extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(p.uiView);
            }
        }
        p.uiView = {
            type: "View",
            props: {
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    right: 0,
                    name: "bg",
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .85
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    width: 750,
                    right: 0,
                    left: 0,
                    height: 832,
                    centerY: -22
                },
                compId: 4,
                child: [{
                    type: "Box",
                    props: {
                        y: 265,
                        x: 375,
                        width: 530,
                        height: 530,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 5,
                    child: [{
                        type: "Animation",
                        props: {
                            y: 405,
                            x: 276,
                            var: "bgAni",
                            source: "ani/Light.ani",
                            autoPlay: !0
                        },
                        compId: 7
                    }, {
                        type: "Image",
                        props: {
                            var: "carImg",
                            skin: "x/s_skin17.png",
                            scaleY: 1,
                            scaleX: 1,
                            centerY: 100,
                            centerX: 11,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 28
                    }, {
                        type: "Button",
                        props: {
                            y: 678,
                            x: 265,
                            width: 360,
                            var: "btn",
                            top: 618,
                            stateNum: 1,
                            skin: "game/r_btn.png",
                            sizeGrid: "0,75,0,75",
                            scaleY: 1,
                            scaleX: 1,
                            height: 120,
                            centerX: 11,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 13,
                        child: [{
                            type: "Image",
                            props: {
                                width: 60,
                                skin: "common/ic_vedio1.png",
                                scaleY: .8,
                                scaleX: .8,
                                height: 60,
                                centerY: 0,
                                centerX: -115,
                                anchorY: .5,
                                anchorX: .5
                            },
                            compId: 16
                        }, {
                            type: "Label",
                            props: {
                                text: "立即试用",
                                strokeColor: "#854428",
                                stroke: 6,
                                fontSize: 50,
                                color: "#FFFFFF",
                                centerY: 0,
                                centerX: 40,
                                bold: !0
                            },
                            compId: 17
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        width: 250,
                        var: "closeBtn",
                        top: 747,
                        height: 97,
                        centerX: 0
                    },
                    compId: 18,
                    child: [{
                        type: "Button",
                        props: {
                            top: 0,
                            stateNum: 1,
                            skin: "game/m_btn2.png",
                            sizeGrid: "0,52,0,62",
                            scaleY: 1,
                            scaleX: 1,
                            right: 0,
                            name: "btnBg",
                            left: 0,
                            bottom: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 19
                    }, {
                        type: "Label",
                        props: {
                            y: 30,
                            text: "放弃使用",
                            stroke: 4,
                            fontSize: 40,
                            color: "#FFFFFF",
                            centerY: 0,
                            centerX: 0,
                            bold: !0
                        },
                        compId: 27
                    }, {
                        type: "Script",
                        props: {
                            runtime: "views/item/CloseBtnScript.ts"
                        },
                        compId: 25
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    var: "zzsdkBox",
                    top: 0,
                    right: 0,
                    mouseThrough: !0,
                    left: 0,
                    bottom: 0
                },
                compId: 29
            }],
            animations: [{
                nodes: [{
                    target: 13,
                    keyframes: {
                        scaleY: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 3
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 9
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 12
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleY",
                            index: 25
                        }],
                        scaleX: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1.1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 3
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 9
                        }, {
                            value: 1.05,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 12
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 13,
                            key: "scaleX",
                            index: 25
                        }]
                    }
                }],
                name: "heartAni",
                id: 1,
                frameRate: 24,
                action: 0
            }],
            loadList: ["ani/Light.ani", "x/s_skin17.png", "game/r_btn.png", "common/ic_vedio1.png", "game/m_btn2.png"],
            loadList3D: []
        }, e.TryViewUI = p, n("ui.TryViewUI", p);
        class g extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(g.uiView);
            }
        }
        g.uiView = {
            type: "View",
            props: {
                width: 720,
                top: 0,
                right: 0,
                left: 0,
                height: 1280,
                bottom: 0
            },
            compId: 735,
            child: [{
                type: "Box",
                props: {
                    visible: !0,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    bgColor: "#000000",
                    alpha: .8
                },
                compId: 751
            }, {
                type: "Box",
                props: {
                    width: 720,
                    var: "window",
                    styleSkin: "game/m_AD.png",
                    height: 900,
                    centerY: -50,
                    centerX: 0
                },
                compId: 5,
                child: [{
                    type: "Image",
                    props: {
                        var: "title",
                        skin: "common/successt.png",
                        scaleY: .8,
                        scaleX: .8,
                        centerX: .5
                    },
                    compId: 738
                }, {
                    type: "Label",
                    props: {
                        y: -95,
                        x: 543,
                        width: 177,
                        var: "GoldCnt",
                        text: "123",
                        height: 45,
                        fontSize: 45,
                        color: "#ffffff"
                    },
                    compId: 38
                }, {
                    type: "Image",
                    props: {
                        y: -95,
                        x: 490,
                        skin: "game/gold2.png",
                        scaleY: .5,
                        scaleX: .5
                    },
                    compId: 37
                }, {
                    type: "Label",
                    props: {
                        y: 105,
                        x: 208,
                        var: "resultVal",
                        text: "88",
                        fontSize: 30,
                        color: "#ffffff",
                        align: "center",
                        centerX: 0
                    },
                    compId: 40
                }]
            }, {
                type: "Box",
                props: {
                    width: 720,
                    right: 0,
                    name: "windowCenter",
                    left: 0,
                    height: 442,
                    centerY: 345
                },
                compId: 747,
                child: [{
                    type: "Label",
                    props: {
                        x: 293.5,
                        width: 133,
                        var: "NormalBtn",
                        valign: "middle",
                        underline: !0,
                        text: "CLAIM",
                        height: 49,
                        fontSize: 30,
                        font: "Arial",
                        color: "#ffffff",
                        centerY: 35,
                        bold: !0,
                        align: "center"
                    },
                    compId: 8
                }, {
                    type: "Label",
                    props: {
                        x: 296.5,
                        width: 133,
                        var: "NormalBtn2",
                        valign: "middle",
                        underline: !0,
                        text: "CLAIM",
                        height: 49,
                        fontSize: 30,
                        font: "Arial",
                        color: "#ffffff",
                        centerY: 118,
                        bold: !0,
                        align: "center"
                    },
                    compId: 742
                }, {
                    type: "Button",
                    props: {
                        y: 100,
                        width: 370,
                        var: "NextBtn",
                        stateNum: 1,
                        skin: "game/r_btn.png",
                        sizeGrid: "24,29,24,29",
                        height: 110,
                        centerX: 3
                    },
                    compId: 41,
                    child: [{
                        type: "Label",
                        props: {
                            y: 16,
                            x: 139,
                            width: 187,
                            visible: !0,
                            var: "NextLabel",
                            valign: "middle",
                            text: "COIN x 3",
                            height: 77,
                            fontSize: 40,
                            font: "Arial",
                            align: "center"
                        },
                        compId: 533,
                        child: [{
                            type: "Image",
                            props: {
                                y: 6,
                                x: -97,
                                skin: "game/m_AD.png"
                            },
                            compId: 727
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 13,
                            x: 18,
                            visible: !1,
                            var: "NextBox",
                            skin: "game/chessbrut.png"
                        },
                        compId: 719,
                        child: [{
                            type: "Label",
                            props: {
                                y: 24.5,
                                x: 156,
                                text: "OPEN",
                                fontSize: 35,
                                color: "#000000",
                                bold: !0
                            },
                            compId: 722
                        }]
                    }, {
                        type: "Label",
                        props: {
                            y: 35,
                            x: 103,
                            var: "StarBox",
                            text: "CHALLENGE",
                            centerX: 0,
                            fontSize: 40,
                            color: "#000000",
                            bold: !0
                        },
                        compId: 720
                    }]
                }, {
                    type: "Label",
                    props: {
                        y: 58,
                        x: 209,
                        text: "COIN:",
                        fontSize: 35,
                        color: "#ffffff"
                    },
                    compId: 723,
                    child: [{
                        type: "Image",
                        props: {
                            y: -5.5,
                            x: 187,
                            skin: "game/gold2.png",
                            scaleY: .5,
                            scaleX: .5
                        },
                        compId: 724
                    }, {
                        type: "Label",
                        props: {
                            y: 3.5,
                            x: 243,
                            width: 116,
                            var: "resultReward",
                            text: "123",
                            height: 28,
                            fontSize: 25,
                            color: "#ffffff"
                        },
                        compId: 725
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 100,
                        x: 0,
                        width: 370,
                        var: "NextBtnnew",
                        stateNum: 1,
                        skin: "game/r_btn.png",
                        sizeGrid: "24,29,24,29",
                        height: 110,
                        centerX: 3
                    },
                    compId: 752,
                    child: [{
                        type: "Label",
                        props: {
                            y: 35,
                            x: 123,
                            text: "下一关",
                            fontSize: 40,
                            color: "#000000",
                            bold: !0
                        },
                        compId: 757
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    var: "zzsdkBox",
                    top: 0,
                    mouseThrough: !0,
                    left: 0,
                    bottom: 0
                },
                compId: 744,
                child: [{
                    type: "Box",
                    props: {
                        width: 720,
                        mouseThrough: !0,
                        left: 0,
                        height: 900,
                        centerY: -115
                    },
                    compId: 748,
                    child: [{
                        type: "Box",
                        props: {
                            width: 650,
                            var: "a3xbox",
                            height: 490,
                            centerY: 20,
                            centerX: 0
                        },
                        child: [{
                            "x": 60,
                            "type": "List",
                            "searchKey": "List,gamelist",
                            "props": {
                                "y": 6,
                                "x": 11,
                                "width": 629,
                                "var": "gamelist",
                                "spaceY": 10,
                                "spaceX": 10,
                                "repeatY": 3,
                                "repeatX": 3,
                                "height": 478
                            },
                            "nodeParent": 749,
                            "label": "gamelist",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 758,
                            "child": [{
                                "x": 75,
                                "type": "Box",
                                "searchKey": "Box,render",
                                "props": {
                                    "width": 200,
                                    "name": "render",
                                    "height": 150
                                },
                                "nodeParent": 758,
                                "label": "render",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": false,
                                "hasChild": true,
                                "compId": 760,
                                "child": [{
                                    "x": 90,
                                    "type": "Image",
                                    "searchKey": "Image,thumb",
                                    "props": {
                                        "y": 0,
                                        "x": 0,
                                        "width": 200,
                                        "name": "thumb",
                                        "height": 150
                                    },
                                    "nodeParent": 760,
                                    "label": "thumb",
                                    "isDirectory": false,
                                    "isAniNode": false,
                                    "hasChild": false,
                                    "compId": 759,
                                    "child": []
                                }]
                            }]
                        }],
                        compId: 749
                    }]
                }]
            }],
            loadList: ["game/m_AD.png", "common/successt.png", "game/gold2.png", "game/r_btn.png", "game/chessbrut.png"],
            loadList3D: []
        }, e.ZSResultUI = g, n("ui.ZSResultUI", g);

    }(e || (e = {})),
    function(e) {
        ! function(t) {
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
                child: [{
                    type: "Image",
                    props: {
                        x: 0
                    },
                    compId: 2
                }],
                animations: [{
                    nodes: [{
                        target: 2,
                        keyframes: {
                            x: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            }],
                            scaleY: [{
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
                            }],
                            scaleX: [{
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
                            }]
                        }
                    }],
                    name: "PressDown",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }],
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
                child: [{
                    type: "Image",
                    props: {},
                    compId: 2
                }],
                animations: [{
                    nodes: [{
                        target: 2,
                        keyframes: {
                            x: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 2,
                                key: "x",
                                index: 0
                            }],
                            scaleY: [{
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
                            }],
                            scaleX: [{
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
                            }]
                        }
                    }],
                    name: "PressUp",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }],
                loadList: [],
                loadList3D: []
            }, t.BtnScaleUpUI = s, n("ui.effect.BtnScaleUpUI", s);
        }(e.effect || (e.effect = {}));
    }(e || (e = {})),
    function(e) {
        ! function(e) {
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
                    width: 200,
                    height: 118
                },
                loadList: [],
                loadList3D: []
            }, e.AttributeButtonUI = t, n("ui.item.AttributeButtonUI", t);
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
                    width: 208,
                    runtime: "views/item/DaySignItemView.ts",
                    height: 208
                },
                compId: 2,
                child: [{
                    type: "Box",
                    props: {
                        var: "containBox",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            var: "bgImage",
                            skin: "sign/item_bg.png"
                        },
                        compId: 4
                    }, {
                        type: "Label",
                        props: {
                            y: 23,
                            width: 204,
                            var: "titleLabel",
                            valign: "middle",
                            text: "第一天",
                            height: 40,
                            fontSize: 28,
                            color: "#3b4482",
                            centerX: 0,
                            bold: !0,
                            anchorY: .5,
                            anchorX: .5,
                            align: "center"
                        },
                        compId: 5
                    }, {
                        type: "Label",
                        props: {
                            y: 186,
                            width: 204,
                            var: "descLabel",
                            valign: "middle",
                            text: "X300",
                            stroke: 2,
                            height: 40,
                            fontSize: 40,
                            color: "#FFFFFF",
                            centerX: 0,
                            bold: !0,
                            anchorY: .5,
                            anchorX: .5,
                            align: "center"
                        },
                        compId: 6
                    }, {
                        type: "Image",
                        props: {
                            var: "shineImage",
                            skin: "sign/shine.png",
                            rotation: 720,
                            centerY: 0,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 7
                    }, {
                        type: "Image",
                        props: {
                            var: "itemImageView",
                            skin: "game/gold2.png",
                            centerY: 0,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 8
                    }, {
                        type: "Image",
                        props: {
                            var: "signedImage",
                            skin: "sign/sign_item_get.png",
                            centerY: 0,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 9
                    }]
                }],
                animations: [{
                    nodes: [{
                        target: 7,
                        keyframes: {
                            rotation: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 7,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 720,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 7,
                                key: "rotation",
                                index: 30
                            }]
                        }
                    }],
                    name: "ani1",
                    id: 1,
                    frameRate: 12,
                    action: 0
                }],
                loadList: ["sign/item_bg.png", "sign/shine.png", "game/gold2.png", "sign/sign_item_get.png"],
                loadList3D: []
            }, e.SignItemViewUI = i, n("ui.item.SignItemViewUI", i);
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
                child: [{
                    type: "Box",
                    props: {
                        y: 0,
                        x: 0,
                        visible: !0,
                        top: 0,
                        right: 0,
                        name: "bg",
                        left: 0,
                        bottom: 0,
                        bgColor: "#484848",
                        alpha: 1
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        var: "fullBox",
                        top: 100,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 4
                }, {
                    type: "Button",
                    props: {
                        y: 1158,
                        x: 279,
                        var: "continueBtn",
                        stateNum: 1,
                        skin: "game/greenbtn.png",
                        sizeGrid: "35,39,36,36",
                        name: "continueBtn",
                        labelSize: 30,
                        labelColors: "#FFFFFF",
                        labelBold: !0,
                        centerX: 0,
                        bottom: 126,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 6,
                    child: [{
                        type: "Script",
                        props: {
                            y: 14,
                            x: 0,
                            playEvent: "mouseup",
                            runtime: "ui.effect.BtnScaleUpUI"
                        },
                        compId: 7
                    }, {
                        type: "Script",
                        props: {
                            y: 0,
                            x: 0,
                            playEvent: "mousedown",
                            runtime: "ui.effect.BtnScaleDownUI"
                        },
                        compId: 8
                    }, {
                        type: "Label",
                        props: {
                            wordWrap: !1,
                            var: "continueBtnLab",
                            valign: "middle",
                            text: "继续游戏",
                            stroke: 3,
                            padding: "5",
                            name: "continueBtnLab",
                            leading: 5,
                            fontSize: 50,
                            color: "#ffffff",
                            centerY: 0,
                            centerX: 0,
                            bold: !1,
                            align: "center"
                        },
                        compId: 9
                    }]
                }],
                loadList: ["game/greenbtn.png"],
                loadList3D: []
            }, e.ZZSDKFullUI = s, n("ui.item.ZZSDKFullUI", s);
        }(e.item || (e.item = {}));
    }(e || (e = {})),
    function(e) {
        ! function(e) {
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
                    width: 750,
                    runtime: "Tui/BottomTuiView.ts",
                    height: 218
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "tui/index-box.png",
                        sizeGrid: "50,50,50,50",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 5
                }, {
                    type: "List",
                    props: {
                        var: "tuiList",
                        spaceY: 0,
                        spaceX: 20,
                        runtime: "Tui/AutoScorllView.ts",
                        right: 15,
                        repeatY: 1,
                        left: 15,
                        centerY: 0
                    },
                    compId: 6,
                    child: [{
                        type: "Box",
                        props: {
                            width: 165,
                            renderType: "render",
                            name: "item",
                            height: 190
                        },
                        compId: 7,
                        child: [{
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "tui/bg.png",
                                sizeGrid: "30,30,30,30",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 8
                        }, {
                            type: "Image",
                            props: {
                                width: 150,
                                top: 4,
                                runtime: "Tui/GifImageView.ts",
                                name: "itemImg",
                                height: 150,
                                centerX: 0
                            },
                            compId: 9
                        }, {
                            type: "Label",
                            props: {
                                width: 180,
                                valign: "middle",
                                text: "游戏名称六字",
                                overflow: "hidden",
                                name: "itemName",
                                height: 30,
                                fontSize: 26,
                                color: "#000000",
                                centerX: 0,
                                bottom: 3,
                                align: "center"
                            },
                            compId: 10
                        }, {
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "tui/icon-hot.png",
                                right: 0,
                                name: "itemRed"
                            },
                            compId: 11
                        }]
                    }]
                }],
                loadList: ["tui/index-box.png", "tui/bg.png", "tui/icon-hot.png"],
                loadList3D: []
            }, e.BottomTuiViewUI = t, n("ui.tui.BottomTuiViewUI", t);
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
                    width: 750,
                    top: 0,
                    runtime: "Tui/LeftTuiView.ts",
                    right: 0,
                    mouseThrough: !0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Button",
                    props: {
                        visible: !1,
                        var: "tuiBgTap",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        width: 580,
                        var: "tuiBox",
                        height: 900,
                        centerY: 0
                    },
                    compId: 4,
                    child: [{
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "tui/index-box.png",
                            sizeGrid: "15,15,15,15",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 5
                    }, {
                        type: "List",
                        props: {
                            var: "tuilistLeft",
                            top: 20,
                            spaceY: 30,
                            spaceX: 20,
                            runtime: "Tui/AutoScorllView.ts",
                            right: 20,
                            repeatX: 3,
                            left: 20,
                            bottom: 20
                        },
                        compId: 7,
                        child: [{
                            type: "Box",
                            props: {
                                width: 165,
                                renderType: "render",
                                name: "item",
                                height: 190
                            },
                            compId: 8,
                            child: [{
                                type: "Image",
                                props: {
                                    width: 165,
                                    top: 0,
                                    runtime: "Tui/GifImageView.ts",
                                    name: "itemImg",
                                    left: 0,
                                    height: 165
                                },
                                compId: 9
                            }, {
                                type: "Label",
                                props: {
                                    width: 175,
                                    valign: "middle",
                                    top: 170,
                                    text: "游戏名称六字",
                                    overflow: "hidden",
                                    name: "itemName",
                                    fontSize: 28,
                                    color: "#FFFFFF",
                                    centerX: 0,
                                    align: "center"
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    top: 0,
                                    skin: "tui/icon-hot.png",
                                    right: 0,
                                    name: "itemRed"
                                },
                                compId: 11
                            }]
                        }]
                    }, {
                        type: "Box",
                        props: {
                            y: 450,
                            x: 625,
                            width: 90,
                            var: "leftTuiTab",
                            scaleY: .8,
                            scaleX: .8,
                            left: 580,
                            height: 273,
                            centerY: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 12,
                        child: [{
                            type: "Image",
                            props: {
                                skin: "tui/more.png"
                            },
                            compId: 13
                        }]
                    }]
                }],
                loadList: ["tui/index-box.png", "tui/icon-hot.png", "tui/more.png"],
                loadList3D: []
            }, e.LeftTuiViewUI = i, n("ui.tui.LeftTuiViewUI", i);
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
                    width: 96,
                    runtime: "Tui/TuiBtn.ts",
                    height: 116
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 58,
                        x: 48,
                        top: 0,
                        skin: "tui/bg.png",
                        sizeGrid: "15,15,15,15",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 47,
                            width: 90,
                            var: "iconImage",
                            runtime: "Tui/GifImageView.ts",
                            height: 90,
                            centerX: 0,
                            anchorY: .5,
                            anchorX: .5
                        },
                        compId: 4
                    }, {
                        type: "Label",
                        props: {
                            width: 100,
                            var: "titleLabel",
                            valign: "middle",
                            text: "label",
                            overflow: "hidden",
                            height: 24,
                            fontSize: 16,
                            color: "#000000",
                            centerX: 0,
                            bottom: 0,
                            bold: !1,
                            align: "center"
                        },
                        compId: 5
                    }]
                }, {
                    type: "Button",
                    props: {
                        top: 0,
                        runtime: "Tui/MoreGameButton.ts",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 6
                }],
                animations: [{
                    nodes: [{
                        target: 3,
                        keyframes: {
                            rotation: [{
                                value: 30,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 5
                            }, {
                                value: -20,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 10
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 15
                            }, {
                                value: 10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 18
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 21
                            }, {
                                value: -10,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 24
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 3,
                                key: "rotation",
                                index: 27
                            }]
                        }
                    }],
                    name: "tuiAni",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }],
                loadList: ["tui/bg.png"],
                loadList3D: []
            }, e.TuiBtnUI = s, n("ui.tui.TuiBtnUI", s);
        }(e.tui || (e.tui = {}));
    }(e || (e = {})),
    function(e) {
        e[e.Wechat = 1] = "Wechat", e[e.Oppo = 2] = "Oppo", e[e.Vivo = 3] = "Vivo", e[e.Huawei = 4] = "Huawei",
            e[e.Xiaomi = 5] = "Xiaomi", e[e.QQ = 7] = "QQ", e[e.TouTiao = 9] = "TouTiao", e[e.Baidu = 10] = "Baidu",
            e[e.Qutoutiao = 11] = "Qutoutiao";
    }(t || (t = {})),
    function(e) {
        e[e.Normal = 1] = "Normal", e[e.Check = 2] = "Check", e[e.Fission = 3] = "Fission";
    }(i || (i = {}));
    var s, a = [{
            imgUrl: "",
            shareContent: "!"
        }],
        o = {
            sRecommend: !0,
            acv: "",
            ttacv: "",
            qqacv: "",
            ttTuiInfo: [],
            oppoTuiInfo: [],
            vsAllCount: 60,
            vsFailShareCount: 60,
            tRecommend: !0,
            tIosRecommend: !0,
            showInAd: !0,
            attrAd: !0,
            eInfo: {
                onLine: 180,
                dayGame: 3
            },
            taskAd: !0,
            showInADC: 3,
            showCheckBox: 3,
            bTimer: 90,
            bCount: 4,
            meteorInfo: {
                count: 3,
                level: 2,
                time: 20
            },
            eggInfo: {
                aCount: 3,
                level: 0,
                gold: 500,
                delay: 300,
                eDelay: 1500
            },
            recent: {
                show: !0,
                con: [{
                    count: 1,
                    prob: 100
                }, {
                    count: 2,
                    prob: 50
                }]
            },
            reliveInfo: {
                dCount: 1
            },
            gameTui: {
                show: !0,
                time: 90
            },
            canE: !1,
            mpcv: "110,111",
            qqAppBox: !1,
            qqADInfo: {
                bannerCount: 3,
                bannerTime: 90,
                eggInfo: {
                    aCount: 9999999,
                    level: 9999999,
                    delay: 300,
                    eDelay: 1500
                },
                eInfo: {
                    onLine: 180,
                    dayGame: 3
                },
                showListJump: !0
            },
            wxshowbtntime: 2,
            wxADInfo: {
                checkScene: !0,
                sceneList: ["2054"]
            },
            qSmall: !1,
            showHdStart: 1,
            showHdCount: 5
        },
        r = {
            IgnoreShare: !1,
            Platform: t.Wechat,
            packageName: "lbnjc",
            ClientVer: "1.0.38",
            Apiversion: "1",
            SupportOpenDomain: !0,
            State: i.Normal,
            showRecommend: !1,
            ShareTickTimer: 3e3,
            host: "https://gameb.oss-cn-hangzhou.aliyuncs.com/lbnjc",
            Dev: !1,
            ShareInfoList: a,
            isLimitCity: !1,
            isLimitCityB: !1,
            appId: "wx7732fb4278767d0a",
            closeLD: !1,
            isF: !1,
            vList: [],
            UseRemoteRes: !1,
            resHost: "",
            vsInfo: {
                type: 0,
                snum: 0,
                vnum: 0
            },
            vGameInfo: Object.assign({}, o),
            recoverData: !0,
            vAdCount: 0,
            isAnonymous: !1,
            aiCount: 27,
            videoTopics: ["来杯奶加茶"],
            hasAD: !0,
            hasLogin: !1,
            useZip: !1,
            tResVer: 2
        },
        h = (t.Qutoutiao, i.Normal, Object.assign({}, o), r);
    class l {
        constructor() {
            this.uid = 0, this.nickName = "玩家", this.avatar = "", this.token = "", this.session_key = "",
                this.openid = "", this.authorized = !1, this.city = "", this.gender = 0, this.playerInfo = {},
                this.isDefaultData = !0, this.resumePlayerInfoDefault(), this.loadCacheData();
        }
        setUid(e) {
            this.uid = e;
        }
        loadCacheData() {
            if (!this.uid) {
                let e = Laya.LocalStorage.getJSON("uid");
                e && (this.uid = e.uid);
            }
            var e = null;
            if (null !== (e = h.recoverData ? Laya.LocalStorage.getJSON("user_" + this.uid) : Laya.LocalStorage.getJSON("user_r_" + this.uid)) && "" != e || (e = Laya.LocalStorage.getJSON("user_0")),
                null == e || "" == e) return !1;
            for (var t in this.isDefaultData = !1, e) this[t] = e[t];
            return !0;
        }
        saveToStorage() {
            h.recoverData ? Laya.LocalStorage.setJSON("user_" + this.uid, this) : Laya.LocalStorage.setJSON("user_r_" + this.uid, this),
                Laya.LocalStorage.setJSON("uid", {
                    uid: this.uid || 0
                });
        }
        resumePlayerInfoDefault() {
            this.playerInfo = {
                diamond: 0,
                gold: 0,
                level: 1,
                skinArr: {
                    1: !0
                }
            };
        }
        getPlayerInfo() {
            return this.playerInfo;
        }
    }
    class c {
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
        static isSameDay(e, t) {
            if (t - e >= 864e5) return !1;
            if (e - t >= 864e5) return !1; {
                let i = new Date();
                i.setTime(e);
                let n = new Date();
                if (n.setTime(t), i.getDate() === n.getDate()) return !0;
            }
            return !1;
        }
        static showTime(e) {
            let t = Math.floor(e / 60),
                i = e - 60 * t,
                n = "" + t;
            10 > t && (n = "0" + t);
            let s = "" + i;
            return 10 > i && (s = "0" + i), n + ":" + s;
        }
        static isToday(e) {
            return this.isSameDay(e, Date.now());
        }
        static timestampToDay(e) {
            var t = new Date(e);
            return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + (t.getDate() + " ");
        }
    }! function(e) {
        e.ResLoadProgress = "ResLoadProgress", e.StartLoadFinish = "StartLoadFinish", e.GetFocus = "GetFocus",
            e.LostFocus = "LostFocus", e.ShareSuccess = "ShareSuccess", e.ShowAdCompleted = "ShowAdCompleted",
            e.CloseShowAd = "CloseShowAd", e.FetchVideoFail = "FetchVideoFail", e.ShareFail = "ShareFail",
            e.userLoginFinish = "userLoginFinish", e.SubpackageLoadProgress = "SubpackageLoadProgress",
            e.ShowBannerCompleted = "ShowBannerCompleted", e.FinishVideoAd = "FinishVideoAd",
            e.ShowShareVideoCompleted = "ShowShareVideoCompleted", e.CloseShowShareViedo = "CloseShowShareViedo",
            e.BannerPosChange = "BannerPosChange", e.DestoryUserInfoButton = "DestoryUserInfoButton",
            e.OverDayEvent = "OverDayEvent", e.OpenView = "OpenView", e.CloseView = "CloseView",
            e.loadMapFinish = "loadMapFinish", e.gameStartCDEnd = "gameStartCDEnd", e.ShowView = "showView",
            e.HideView = "hideView", e.UpdateRecordBtn = "UpdateRecordBtn", e.PlayerGoodsUpdate = "PlayerGoodsUpdate",
            e.UserInfoChange = "UserInfoChange", e.RoleDie = "RoleDie", e.GameSceneReady = "GameSceneReady",
            e.BattleTimeChange = "BattleTimeChange", e.ReliveViewShow = "ReliveViewShow", e.onAddEnergy = "onAddEnergy",
            e.UpdateCropsItem = "UpdateCropsItem", e.moveInputChange = "moveInputChange", e.SkinUsedChange = "SkinUsedChange",
            e.killNumChange = "killNumChange", e.LevelUp = "LevelUp", e.Switch_Page = "Switch_Page",
            e.Skin_ClickItem = "Skin_ClickItem", e.zsResultItem_ClickItem = "zsResultItem_ClickItem",
            e.Reward_ClickItem = "Reward_ClickItem", e.Reward_UpdateInfo = "Reward_UpdateInfo",
            e.RefZZSDKManager = "RefZZSDKManager";
    }(s || (s = {}));
    class d extends Laya.EventDispatcher {
        static get Instance() {
            return null === d._instance && (d._instance = new d()), d._instance;
        }
    }
    d._instance = null;
    class p {}
    p.windowWidth = 0, p.windowHeight = 0, p.screenWidth = 0, p.screenHeight = 0, p.fetchingVideoAd = !1,
        p.registerTime = 0, p.accountTime = 0, p.isNewPlayer = !1, p.firstTimePlayer = !1,
        p.teachMode = !1, p.lastStartTime = 0, p.isOverDay = !1, p.severTime = 0, p.scene = 0,
        p.registerDayString = "", p.canE = !1, p.chid = null, p.chidState = !1, p.channel = null,
        p.isshowShiPin = !1;
    class g {
        constructor() {
            this.game_name = "来杯奶加茶", this.isplaymuisc = !1;
        }
        static get Instance() {
            return null === g._instance && (g._instance = new g()), g._instance;
        }
        reportData(e) {
            "undefined" != typeof qttGame && qttGame.reportData && qttGame.reportData({
                type: e,
                open_id: Me.Instance.getUUID(),
                app_id: h.appId,
                game_name: this.game_name
            });
        }
        loadComplete() {
            Be.IsQutoutiao() && this.reportData("ready");
        }
        loginsuccess() {
            Be.IsQutoutiao() && this.reportData("login");
        }
        loadingFinished() {
            Be.IsQutoutiao() && this.reportData("load");
        }
        showPasterAD(e, t, i, n) {}
        hidePasterAd() {
            Be.isIos ? qttGame.hidePaster() : qttGame.hideInterstitialAd();
        }
        showHDAD() {
            let e = !1,
                t = Me.Instance.dayBattleCount,
                i = h.vGameInfo.showHdStart,
                n = h.vGameInfo.showHdCount;
            i && n && t >= i && (t % n != 0 && 1 != t || (e = !0)), e && qttGame.showHDAD({
                index: 3,
                gametype: 3,
                rewardtype: 1,
                data: {},
                title: "刷新道具",
                url: "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png",
                callback: e => {}
            });
        }
    }
    g._instance = null;
    var u = {
        Bgm: "music/bgm.mp3",
        Button: "music/button.mp3",
        Fail: "music/over.mp3",
        Gold: "music/coin.mp3",
        egg: "music/egg.mp3",
        water: "music/water.mp3",
        destroy: "music/destroy.mp3",
        yaohuang: "music/yaohuang.mp3",
        victory: "music/Victory.mp3",
        success: "music/success.mp3",
        LevelUpdate: "music/got.mp3"
    };
    class m {
        constructor() {
            this.curBgmName = null, this.canPlay = !0, this.init(), d.Instance.on(s.GetFocus, this, this.onGetFocus),
                d.Instance.on(s.LostFocus, this, this.onLostFocus), this.curBgmName = null;
        }
        static get Instance() {
            return null == m._instance && (m._instance = new m()), m._instance;
        }
        init() {
            Laya.SoundManager.autoStopMusic = !1;
            var e = Laya.LocalStorage.getItem("musicVolume"),
                t = 1;
            null !== e && "" !== e && (t = parseFloat(e + "")), this.setMusicVolume(t), this.setMusicMute(0 == t);
            var i = Laya.LocalStorage.getItem("soundVolume"),
                n = 1;
            null !== i && "" !== i && (n = parseFloat(i)), this.setSoundVolume(n), this.setSoundMute(0 == n);
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
            this.curBgmName = u.Bgm, this.playMusic(u.Bgm);
        }
        playBattleBgm() {}
        stopSound(e) {
            Laya.SoundManager.stopSound(e);
        }
        stopMusic() {
            Laya.SoundManager.stopMusic();
        }
        playUIClick() {
            this.playSound(u.Button);
        }
        playMusic(e) {
            this.canPlay && (this.stopMusic(), Laya.SoundManager.playMusic(e));
        }
        playSound(e, t = 1, i) {
            Laya.SoundManager.soundMuted || this.canPlay && Laya.SoundManager.playSound(e, t, i);
        }
        playGameSound(e, t = 1, i) {
            if (!e || 0 === e.length) return;
            if (Laya.SoundManager.soundMuted) return;
            let n = `music/${e}`;
            Laya.SoundManager.playSound(n, t, i);
        }
        setMusicMute(e) {
            Laya.SoundManager.musicMuted = e;
        }
        isMusicMuted() {
            return Laya.SoundManager.musicMuted;
        }
        setMusicVolume(e) {
            Laya.SoundManager.setMusicVolume(.5 * e), Laya.LocalStorage.setItem("musicVolume", e);
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
    }
    class I {
        constructor() {
            this.showBannerPos = 0;
        }
        showBanner(e, t, i, n, s, a = 0, o = 0, r = 0) {}
        hideBanner(e) {}
        showVideo(e, t, i) {
            _e.finishVideo(e);
        }
        shareM(e, t, i, n, s, a, o) {
            _e.finishVideo(e);
        }
        postToOpenDataMessage(e, t) {}
        report(e, t) {}
        sdkLogin(e, t) {
            var i = Me.Instance;
            i.user.resumePlayerInfoDefault(), i.user.loadCacheData(), i.user.nickName = "玩家10001",
                Me.Instance.logined = !0, d.Instance.event(s.userLoginFinish, {
                    logined: !0
                });
        }
        isLowDevice() {
            return !1;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {}
        shareVideo(e) {
            _e.finishShare(e);
        }
        hasOpenAD() {
            return !0;
        }
        showModal(e) {}
        setLoadingProgress(e) {
            Be.IsOppo() && "undefined" != typeof qg && (e >= 100 ? qg.loadingComplete && qg.loadingComplete({
                complete: function(e) {}
            }) : qg.setLoadingProgress && qg.setLoadingProgress({
                progress: e
            }));
        }
        hideheziAd() {}
        showheziAd() {}
    }
    class f {
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
        static setDataValue(e, t) {
            e && Laya.LocalStorage.setJSON(e, t);
        }
        static getDataValue(e) {
            if (e) {
                return Laya.LocalStorage.getJSON(e) || null;
            }
            return null;
        }
    }
    var w, y, b, v, S, C, x, k, L, B, _, A, D = {
        showAD: "showAD",
        doShare: "doShare",
        watchADComplete: "watchADComplete",
        watchADExit: "watchADExit",
        showBanner: "showBanner",
        loadBanner: "loadBanner",
        loadBannerError: "loadBannerError",
        loadVideoError: "loadVideoError",
        Login: "Login",
        newLogin: "newLogin",
        LoginFail: "LoginFail",
        videoSuccess: "videoSuccess",
        gameStart: "gameStart",
        loadRes: "loadRes",
        showStart: "showStart",
        MyRecommendJump: "自有产品导出",
        BattleInfo: "battleInfo",
        BattleEnd: "BattleEnd",
        BannerJump: "BannerJump",
        showEgg: "showEgg",
        hitedEgg: "hitedEgg",
        showBig: "showBig",
        hitedBig: "hitedBig"
    };
    class T {
        static getGameConfig() {
            let e = T.RES_GAME_DATA;
            return h.UseRemoteRes && (e = "/" + e), [{
                url: e,
                type: Laya.Loader.TEXT
            }];
        }
        static getGameRes() {
            return [{
                url: T.RES_COMMON_CONFIG,
                type: Laya.Loader.ATLAS
            }, {
                url: T.RES_x,
                type: Laya.Loader.ATLAS
            }, {
                url: T.RES_Game,
                type: Laya.Loader.ATLAS
            }, {
                url: T.RES_sign,
                type: Laya.Loader.ATLAS
            }, {
                url: T.RES_egg,
                type: Laya.Loader.ATLAS
            }, {
                url: T.RES_ADVER_PATH,
                type: Laya.Loader.ATLAS
            }, {
                url: T.RES_DropWaterAniItem,
                type: Laya.Loader.PREFAB
            }, {
                url: T.RES_WaterFullAniItem,
                type: Laya.Loader.PREFAB
            }, {
                url: T.RES_BtnMask,
                type: Laya.Loader.PREFAB
            }, {
                url: T.RES_SkinItem,
                type: Laya.Loader.PREFAB
            }, {
                url: T.RES_rewardItem,
                type: Laya.Loader.PREFAB
            }];
        }
    }
    T.RES_COMMON_CONFIG = "res/atlas/common.atlas", T.RES_GAME_DATA = "res/data/gameData.json",
        T.RES_Game = "res/atlas/game.atlas", T.RES_x = "res/atlas/x.atlas", T.RES_sign = "res/atlas/sign.atlas",
        T.RES_egg = "res/atlas/egg.atlas", T.RES_ADVER_PATH = "res/atlas/adver.atlas", T.RES_DropWaterAniItem = "prefab/DropWaterAni.json",
        T.RES_WaterFullAniItem = "prefab/WaterFullAni.json", T.RES_BtnMask = "prefab/btnMask.json",
        T.RES_SkinItem = "prefab/SkinItem.json", T.RES_rewardItem = "prefab/rewardItem.json";
    class M {
        static getRadian2(e, t, i, n) {
            let s = i - e,
                a = n - t;
            return Math.atan2(a, s);
        }
        static getRandom(e, t) {
            if (e == t) return e;
            var i = Math.random();
            return Math.floor(i * t + (1 - i) * e + i);
        }
        static getRandomItem(e) {
            if (e && e.length) {
                let t = M.getRandom(0, e.length - 1);
                return t > e.length - 1 && (t = 0), e[t];
            }
            return null;
        }
        static getAngle(e, t, i, n) {
            var s = i - e,
                a = n - t;
            if (0 == a) return s > 0 ? 0 : 180;
            var o = 180 * Math.atan(s / a) / Math.PI;
            return a < 0 && (o = s < 0 ? 180 + Math.abs(o) : 180 - Math.abs(o)), o = 90 - o;
        }
        static getDistance(e, t, i, n) {
            var s = i - e,
                a = n - t;
            return Math.sqrt(s * s + a * a);
        }
        static getDistanceSqr(e, t, i, n) {
            var s = i - e,
                a = n - t;
            return s * s + a * a;
        }
        static degToRad(e) {
            return e * Math.PI / 180;
        }
        static radToDeg(e) {
            return 180 * e / Math.PI;
        }
        static isCircleCollision(e, t, i, n, s, a) {
            var o = e - n,
                r = t - s,
                h = i + a;
            return o * o + r * r < h * h;
        }
        static clamp(e, t, i) {
            return e < t ? t : e > i ? i : e;
        }
        static nextNumber(e, t) {
            if (e == t) return e;
            var i = Math.random();
            return Math.floor(i * t + (1 - i) * e + i);
        }
        static validPos(e, t, i, n, s, a) {
            var o = e - i;
            if (o < -s || o > s) return !1;
            var r = t - n;
            return !(r < -a || r > a);
        }
        static getInt(e) {
            return Math.floor(e);
        }
        static clearDictionary(e) {
            for (var t in e) delete e[t];
        }
        static getCos(e) {
            return e < 0 && (e += 360), e = Math.floor(e % 360), this.cosVals[e];
        }
        static getSin(e) {
            return e < 0 && (e += 360), e = Math.floor(e % 360), this.sinVals[e];
        }
        static ptInRect(e, t, i, n, s, a, o = 0) {
            return !(e + o < i || e - o > i + s || t + o < n || t - o > n + a);
        }
        static initSinCosVal() {
            this.sinVals = {}, this.cosVals = {};
            for (var e = 0; e < 360; e++) {
                var t = e * Math.PI / 180;
                this.cosVals[e] = Math.cos(t), this.sinVals[e] = Math.sin(t);
            }
        }
        static isRectIntersetWithLine(e, t, i, n, s) {
            if (t < e.x && n < e.x || t > e.x && n > e.x) return !1;
            if (i < e.y && s < e.y || i > e.y && s > e.y) return !1;
            let a = {
                    x: e.x,
                    y: e.y
                },
                o = {
                    x: e.x,
                    y: e.bottom
                },
                r = {
                    x: e.right,
                    y: e.y
                },
                h = {
                    x: e.right,
                    y: e.bottom
                },
                l = o,
                c = h,
                d = a,
                p = r,
                g = a,
                u = h,
                m = u,
                I = r;
            do {
                if (this.isLineCollisionLine(t, i, n, s, a.x, a.y, o.x, o.y)) break;
                if (this.isLineCollisionLine(t, i, n, s, r.x, r.y, h.x, h.y)) break;
                if (this.isLineCollisionLine(t, i, n, s, d.x, d.y, p.x, p.y)) break;
                if (this.isLineCollisionLine(t, i, n, s, l.x, l.y, c.x, c.y)) break;
                if (this.isLineCollisionLine(t, i, n, s, g.x, g.y, u.x, u.y)) break;
                if (this.isLineCollisionLine(t, i, n, s, m.x, m.y, I.x, I.y)) break;
                return !1;
            } while (0);
            return !0;
        }
        static mult(e, t, i, n, s, a) {
            return (e - s) * (n - a) - (i - s) * (t - a);
        }
        static isLineCollisionLine(e, t, i, n, s, a, o, r) {
            return !(Math.max(e, i) < Math.min(s, o)) && (!(Math.max(t, n) < Math.min(a, r)) && (!(Math.max(s, o) < Math.min(e, i)) && (!(Math.max(a, r) < Math.min(t, n)) && (!(this.mult(s, a, i, n, e, t) * this.mult(i, n, o, r, e, t) < 1e-4) && !(this.mult(e, t, o, r, s, a) * this.mult(o, r, i, n, s, a) < 1e-4)))));
        }
        static getTidyAngle(e) {
            return .01 * Math.floor(100 * e % 36e3);
        }
        static isInRange(e, t, i, n, s, a) {
            return s > e && s < t && a > i && a < n;
        }
        static getMoveTargetAngle(e, t, i, n) {
            var s = i - e,
                a = n - t;
            return a ? s ? Math.atan2(a, s) * this.angle1rad : 0 < a ? 90 : -90 : 0 < s ? 0 : 180;
        }
        static fixPoint(e, t, i) {
            return t;
        }
        static fixFormRadian(e) {
            for (; e > Math.PI;) e -= 2 * Math.PI;
            for (; e < -Math.PI;) e += 2 * Math.PI;
            return e;
        }
        static fixFormAngle(e) {
            for (; e > 180;) e -= 360;
            for (; e < -180;) e += 360;
            return e;
        }
    }
    M.cosVals = {}, M.sinVals = {}, M.rad1Angle = Math.PI / 180, M.angle1rad = 180 / Math.PI,
        M.isPtInPolygon = function(e, t, i) {
            var n, s = 0,
                a = NaN,
                o = NaN,
                r = NaN,
                h = NaN;
            n = i.length;
            for (var l = 0; l < n; l += 2) {
                if (a = i[l], o = i[l + 1], r = i[(l + 2) % n], o != (h = i[(l + 3) % n]))
                    if (!(t < Math.min(o, h)))
                        if (!(t >= Math.max(o, h)))(t - o) * (r - a) / (h - o) + a > e && s++;
            }
            return s % 2 == 1;
        };
    class V {
        constructor() {
            this.skinCfg = null, this.videoCfgData = null, this.bannerCfgData = null, this.signCfgData = {},
                this.randomBannerCfgData = null, this.signRed = !0, this.playerCfgData = null, this.ainameCfgData = {},
                this.userGradeCfgData = {}, this.cropsCfgData = {}, this.levelConfigData = {}, this.itemsConfigData = {},
                this.rewardConfigData = {}, this.signDaynfo = "signDaynfo", this.maxUserGrade = 0,
                this.usedAINames = [], this.aiPlayerInfos = [], this.cropsPreCar = {}, this.loadData(),
                this.signRed = !this.todayIsSigned(), Laya.timer.loop(1e4, this, this.checkOverDay);
        }
        static get Instance() {
            return null === V._instance && (V._instance = new V()), V._instance;
        }
        loadData() {
            let e = T.RES_GAME_DATA;
            // h.UseRemoteRes && (e = "/" + e);

            let t = Laya.loader.getRes(e);
            let i = JSON.parse(t)
            // i = this.processData(t || "");
            // console.log("i=", JSON.stringify(i));
            if (i) {
                if (this.videoCfgData = i.videoShareCfg, this.bannerCfgData = i.bannerCfg, Be.IsQutoutiao() && this.bannerCfgData.push({}),
                    this.signCfgData = i.sign,
                    this.skinCfg = i.skinCfg, this.userGradeCfgData = i.gradeConfig,
                    this.cropsCfgData = i.cropConfig, this.levelConfigData = i.levelConfig, this.itemsConfigData = i.itemsConfig,
                    this.rewardConfigData = i.rewardConfig, this.cropsCfgData) {
                    let e = 1;
                    Be.isIos && (e = .6);
                    let t = 1 / e;
                    for (let i in this.cropsCfgData) {
                        if (this.cropsCfgData[i] && this.cropsCfgData[i].color) {
                            let e = this.cropsCfgData[i].color.split(",");
                            e && e.length >= 3 && (this.cropsCfgData[i].colorVec = new Laya.Vector4(parseFloat(e[0]) / 100, parseFloat(e[1]) / 100, parseFloat(e[2]) / 100, 1));
                        }
                        this.cropsCfgData[i] && (this.cropsCfgData[i].offset = Math.floor(this.cropsCfgData[i].offset * t),
                            this.cropsCfgData[i].cropsPreCar = Math.floor(this.cropsCfgData[i].cropsPreCar * e));
                    }
                }
                if (this.bannerCfgData && this.bannerCfgData.length) {
                    this.randomBannerCfgData = [];
                    for (let e in this.bannerCfgData) {
                        let t = this.bannerCfgData[e];
                        this.randomBannerCfgData.push(t);
                    }
                }
                this.ainameCfgData = i.aiName;
            }
            Laya.Loader.clearRes(e), this.init();
        }
        init() {
            M.initSinCosVal();
        }
        getVideoShareCfg(e) {
            if (null == this.videoCfgData) return null;
            for (var t = 0; t < this.videoCfgData.length; t++)
                if (this.videoCfgData[t].pos == e) return this.videoCfgData[t];
            return null;
        }
        getBannerCfg(e) {
            if (null == this.bannerCfgData) return null;
            for (var t = 0; t < this.bannerCfgData.length; t++)
                if (this.bannerCfgData[t].pos == e) return this.bannerCfgData[t];
            return null;
        }
        saveAutoShowSign() {
            let e = f.getDataValue(this.signDaynfo) || {},
                t = new Date().getDate();
            e.showDay = t, f.setDataValue(this.signDaynfo, e);
        }
        doSignAction() {
            let e = f.getDataValue(this.signDaynfo);
            if (e) {
                let t = new Date(),
                    i = e.signDay + 1;
                e.signDay = i;
                let n = t.getTime();
                e.ts = n;
            }
            this.signRed = !1, f.setDataValue(this.signDaynfo, e);
        }
        getSignDayInfo() {
            let e = 0,
                t = 0,
                i = f.getDataValue(this.signDaynfo),
                n = !1,
                s = new Date(),
                a = s.getDate(),
                o = 0,
                r = 0;
            if (i) {
                if (t = i.showDay, r = i.ts, n = !0, i.ts > 0) {
                    let t = new Date();
                    if (t.setTime(i.ts), s.getTime() < i.ts + 864e5 && a == t.getDate()) o = 1, e = i.signDay,
                        n = !1;
                    else {
                        (t = new Date()).setTime(i.ts + 864e5), a == t.getDate() && (e = i.signDay, n = !1);
                    }
                }
            } else n = !0;
            n && ((i = {}).signDay = e, i.showDay = t, i.ts = r, f.setDataValue(this.signDaynfo, i));
            let h = {
                signDay: e,
                signed: o,
                show: a == t ? 1 : 0
            };
            return this.signRed = !o, h;
        }
        processData(e) {
            let t = this.uncompile(e);
            return JSON.parse(t);
        }
        uncompile(e) {
            for (var t = String.fromCharCode(e.charCodeAt(0) - 1), i = 1; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) - 1);
            return t;
        }
        checkOverDay() {
            _e.checkOverDay() && d.Instance.event(s.OverDayEvent);
        }
        getRandomBannerCfg() {
            let e = this.randomBannerCfgData.length,
                t = Math.floor(Math.random() * (e - 1));
            if (t >= 0 && t < e) {
                let e = this.randomBannerCfgData[t];
                if (e && e.adunit && e.adunit.length) return this.randomBannerCfgData.splice(t, 1),
                    this.randomBannerCfgData.push(e), e;
            }
            return null;
        }
        isOverSeverTime(e = 7200) {
            if (p.severTime > 0) {
                let t = new Date().getTime();
                if (Math.abs(t - p.severTime) < 1e3 * e) return !1;
            }
            return !0;
        }
        todayIsSigned() {
            return this.getSignDayInfo().signed > 0;
        }
        getAIPlayerInfo(e) {
            return e >= 0 && e < this.ainameCfgData.length ? this.ainameCfgData[e] : null;
        }
        getAINameCount() {
            return null == this.ainameCfgData ? 0 : this.ainameCfgData.length;
        }
        getRandomAIPlayerInfo() {
            var e = this.getAINameCount() - 1;
            let t, i;
            for (;;)
                if (i = Math.round(Math.random() * e), (t = this.getAIPlayerInfo(i)) && null == this.usedAINames[t.name]) {
                    this.usedAINames[t.name] = t.name;
                    break;
                }
            return t;
        }
        generateAIPlayerList(e) {
            if (this.aiPlayerInfos.length < e)
                for (; this.aiPlayerInfos.length < e;) {
                    let e = this.getRandomAIPlayerInfo();
                    e && this.aiPlayerInfos.push(e);
                }
            return this.aiPlayerInfos;
        }
        clearAIInfo() {
            _e.clearDictionary(this.usedAINames), this.aiPlayerInfos.length = 0;
        }
        getCropsInfoByGrade(e) {
            return (this.userGradeCfgData[`${e}`].crops || []).map(e => Object.assign({
                curNum: 0
            }, e));
        }
        getRewardCfglength() {
            return this.rewardConfigData.length;
        }
        getRewardCfg(e) {
            return this.rewardConfigData[e];
        }
        getLevelCfg(e) {
            return e > 106 && (e = (e - 106) % 57 + 50), this.levelConfigData[e];
        }
        getPassCfg(e, t) {
            e > 106 && (e = (e - 106) % 57 + 50);
            let i = this.levelConfigData[e];
            null != t && (i = t);
            let n = 0,
                s = 0,
                a = 0,
                o = 0,
                r = 0,
                h = 0,
                l = 0,
                c = 0,
                d = 0,
                p = 0,
                g = 0;
            if (n = i.RedColorNumber, s = i.YellowColorNumber, a = i.BlueColorNumber, g = i.IceNumber,
                null == i.PearlType) {
                return [o, r, h, l, c, d, p, g, n, s, a];
            }
            for (let e = i.PearlType.length - 1; e >= 0; e--) switch (i.PearlType[e].type) {
                case 1:
                    o = i.PearlType[e].num || 0;
                    break;

                case 2:
                    r = i.PearlType[e].num || 0;
                    break;

                case 3:
                    h = i.PearlType[e].num || 0;
                    break;

                case 4:
                    l = i.PearlType[e].num || 0;
                    break;

                case 5:
                    c = i.PearlType[e].num || 0;
                    break;

                case 6:
                    d = i.PearlType[e].num || 0;
                    break;

                case 7:
                    p = i.PearlType[e].num || 0;
            }
            return [o, r, h, l, c, d, p, g, n, s, a];
        }
    }
    V.isLarger = !1, V._instance = null,
        function(e) {
            e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
        }(w || (w = {})),
        function(e) {
            e[e.Unknow = -1] = "Unknow", e[e.DefaultShare = 0] = "DefaultShare", e[e.HomeShare = 1] = "HomeShare",
                e[e.FreeTryAD = 206] = "FreeTryAD", e[e.OfflineAD = 207] = "OfflineAD", e[e.SignAD = 208] = "SignAD",
                e[e.ZSResultAD = 209] = "ZSResultAD", e[e.OpenRewardAD = 210] = "OpenRewardAD",
                e[e.goldAdVideoAD = 211] = "goldAdVideoAD", e[e.ShiPinAD = 212] = "ShiPinAD";
        }(y || (y = {})), b || (b = {}),
        function(e) {
            e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
        }(v || (v = {})),
        function(e) {
            e[e.Default = 0] = "Default", e[e.Share = 1] = "Share", e[e.Video = 2] = "Video";
        }(S || (S = {}));
    class R {
        constructor() {
            this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {}, this.clickShareCnts = {},
                this.canFetchVideo = !0, this._isShowingBanner = !1, this._inited = !1, this._callShare = !1,
                this._callShareReward = !1, this._dailyShareMapping = {}, this._vsCount = 0, this._videoCount = 0,
                this._vsFailShareCount = 0, this._lastCallTime = 0, this.videoMapping = {}, this.shareMapping = {},
                this.clickShareCnts = {}, this.canFetchVideo = !0, this._isShowingBanner = !1, this._dailyShareMapping = {},
                this._inited = !1, this._callShare = !1, this._callShareReward = !1, this.registerEvent(),
                this.readVideoCache();
        }
        static get Instance() {
            return null == R._instance && (R._instance = new R()), R._instance;
        }
        registerEvent() {
            d.Instance.on(s.FetchVideoFail, this, this.onFetchVideoFail), d.Instance.on(s.GetFocus, this, this.onGameFocus),
                d.Instance.on(s.OverDayEvent, this, this.resetByOverDay), d.Instance.on(s.FinishVideoAd, this, this.onFinishVideoAd);
        }
        unregisterEvent() {
            d.Instance.off(s.FetchVideoFail, this, this.onFetchVideoFail), d.Instance.off(s.GetFocus, this, this.onGameFocus),
                d.Instance.off(s.FinishVideoAd, this, this.onFinishVideoAd);
        }
        canShowVideo() {
            return !0;
        }
        onFetchVideoFail(e) {}
        saveShareCache(e, t) {}
        saveVideoCache() {}
        readVideoCache() {}
        wxCheck() {}
        aCheck() {}
        getVideoCnt(e) {}
        getShareClickCnt(e) {}
        addShareClickCnt(e) {}
        showADBanner(e, t = -1) {}
        hideBanner(e = 0) {}
        isShowingBanner() {}
        restoreBanner(e, t = 0) {}
        showVideoOrrShare(e, t) {}
        isForceVideo(e) {}
        isForceVideoWithError(e) {}
        checkShowShareAfterVideoFail(e) {}
        handleVideo(e) {}
        handleShare(e, t) {}
        hasDailyShared(e) {}
        onShowAdCompleted(e, t = !1) {}
        onGameFocus() {}
        getVSShowType() {}
        static getShowType(e) {
            if (R.Instance.wxCheck()) return 2;
            if (Be.IsOppo()) return 2;
            let t = R.Instance.getVSShowType();
            if (t !== S.Default) return t === S.Video && h.vsInfo.snum > 0 && !R.Instance.canShowVideoADByCount() ? S.Share : t; {
                let t = h.vList;
                if (t.length)
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if (n && n.pos == e) return n.type || 0;
                    }
            }
            return 0;
        }
        shouldShowForBanner(e) {}
        resetByOverDay() {}
        canAddVSCount(e) {}
        canShowVideoADByCount() {}
        onFinishVideoAd(e) {}
        updateViewWithPos(e, t) {}
        static canE() {
            return false
        }
    }
    R._instance = null;
    class P {
        constructor() {
            this.hideBanner = !1, this.adpaterArray = [], this.uiArray = [], this.debugStr = "",
                this.maskView = null, this.arrTips = null, this.reset(), this.hideBanner = !1;
        }
        static get Instance() {
            return null == P._instance && (P._instance = new P(), P._instance.init()), P._instance;
        }
        init() {
            Laya.stage.on(Laya.Event.RESIZE, this, this.onScreenResize);
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
            R.Instance.isShowingBanner() && (R.Instance.hideBanner(), this.hideBanner = !0);
        }
        restoreBanner() {
            if (this.hideBanner)
                for (let e = this.uiArray.length - 1; e >= 0; e--) {
                    let t = this.uiArray[e];
                    if (t.visible) {
                        let e = 0;
                        t.getPinY && (e = t.getPinY());
                        let i = t.uiname && t.uiname.id || 0;
                        R.Instance.restoreBanner(i, e), this.hideBanner = !1;
                        break;
                    }
                }
        }
        openUI(e, t = null, i = !0) {
            this.checkBanner(), null != e.res ? Laya.loader.load(e.res, Laya.Handler.create(null, function() {
                P.Instance.createUI(e, t, i);
            }), null) : this.createUI(e, t, i);
        }
        createUI(e, t, i = !0) {
            var n = new e.cls();
            if (null != n) {
                n.uiname = e;
                let a = !0;
                switch (e) {
                    case be.Load:
                        n.zOrder = P._loadingViewZorder;
                        break;

                    default:
                        n.zOrder = P._viewZorder++;
                }
                if (i && this.uiArray.length > 0) {
                    let e = this.uiArray[this.uiArray.length - 1];
                    e.visible && (null !== e.didHide && void 0 !== e.didHide && e.didHide(), d.Instance.event(s.HideView, e));
                }
                Laya.stage.addChild(n), this.pushUI(n), n.visible = i;
                let o = 0;
                n.getPinY && (o = n.getPinY()), d.Instance.event(s.OpenView, e), null != n.init && i && n.init(t),
                    a = this.canShowBaner(n), e === be.Load && (a = !1), i && a && R.Instance.showADBanner(e.id, o),
                    i && (d.Instance.event(s.ShowView, n), null !== n.didShow && void 0 !== n.didShow && i && n.didShow());
            }
        }
        closeUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var i = this.uiArray[t];
                if (i.uiname == e) {
                    this.uninitUI(i), this.uiArray.splice(t, 1);
                    break;
                }
            }
            for (let e = this.uiArray.length - 1; e >= 0; e--) {
                let t = this.uiArray[e];
                if (t.visible) {
                    if (null !== t.didShow && void 0 !== t.didShow && t.didShow(), d.Instance.event(s.ShowView, t),
                        this.hideBanner) {
                        let e = 0;
                        t.getPinY && (e = t.getPinY());
                        let i = t.uiname && t.uiname.id || 0;
                        R.Instance.restoreBanner(i, e), this.hideBanner = !1;
                    }
                    break;
                }
            }
        }
        isUIOpen(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                if (this.uiArray[t].uiname === e) return !0;
            }
            return !1;
        }
        isTopUI(e) {
            for (let t = this.uiArray.length - 1; t >= 0; t--) {
                let i = this.uiArray[t];
                if (i.visible) return i.uiname === e;
            }
            return !1;
        }
        showUI(e, t) {
            for (var i = this.uiArray.length - 1; i >= 0; i--) {
                var n = this.uiArray[i];
                if (n.uiname == e) {
                    null != n.init && n.init(t), null !== n.didShow && n.didShow(), d.Instance.event(s.ShowView, n),
                        n.visible = !0, n.zOrder = P._viewZorder++;
                    let i = 0;
                    return n.getPinY && (i = n.getPinY()), this.canShowBaner(n) && R.Instance.showADBanner(e.id, i),
                        d.Instance.event(s.OpenView, e), !0;
                }
            }
            return !1;
        }
        hideUI(e) {
            for (var t = this.uiArray.length - 1; t >= 0; t--) {
                var i = this.uiArray[t];
                if (i.uiname == e) {
                    i.visible = !1, null !== i.didHide && i.didHide(), d.Instance.event(s.HideView, i),
                        null !== i.uninit && i.uninit(), this.checkBanner();
                    break;
                }
            }
            for (let e = this.uiArray.length - 1; e >= 0; e--) {
                let t = this.uiArray[e];
                if (t.visible) {
                    if (this.hideBanner) {
                        let e = 0;
                        t.getPinY && (e = t.getPinY());
                        let i = t.uiname && t.uiname.id || 0;
                        R.Instance.restoreBanner(i, e);
                    }
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
            this.clearAdapterOnUI(e), null != e.uninit && e.uninit(), Laya.timer.clearAll(e),
                R.Instance.hideBanner(e.uiname.id), e.removeSelf(), e.destroy();
        }
        update() {
            for (var e = this.uiArray.length - 1; e >= 0; e--) {
                var t = this.uiArray[e];
                null != t.update && t.update();
            }
        }
        showDialog(e) {}
        showMask(e) {
            if (e && null == this.maskView) {
                var t = new Laya.Sprite();
                this.maskView = t, t.graphics.drawRect(-530, -180, 2340, 1080, "#949494"), t.alpha = .5,
                    t.mouseThrough = !1, t.mouseEnabled = !0;
                var i = new Laya.HitArea();
                i.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), t.hitArea = i,
                    t.zOrder = P._dialogZorder, Laya.stage.addChild(this.maskView);
            } else e || null == this.maskView || (this.maskView.removeSelf(), this.maskView.destroy(),
                this.maskView = null);
        }
        showTips(e, t = 1e3, i = 30, n = "#FFFFFF") {
            var s = this.arrTips;
            let a = null;
            if (null == s) {
                s = [];
                var o = new Laya.Box();
                Laya.stage.addChild(o), o.zOrder = P._tipsZorder;
                for (var r = 0; r < 3; r++) {
                    (a = new Laya.Box()).width = 600, a.height = 114, a.visible = !1; {
                        let e = new Laya.Image();
                        e.skin = "common/bg_toast.png", e.width = 600, e.height = 114, a.addChild(e);
                        let t = new Laya.Label();
                        t.wordWrap = true
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
                }, [a]), 1e3);
            }
        }
        canShowBaner(e) {
            return !e || !e.hasETouch || e.uiname != be.Result || !e.hasETouch();
        }
    }
    P._viewZorder = 1e3, P._loadingViewZorder = 2999, P._tipsZorder = 3e3, P._dialogZorder = 3100,
        P._maskZorder = 3100, P._instance = null, P._debugTxt = null;
    class F {
        constructor() {}
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
        static callLater(e, t, i) {
            Laya.timer.callLater(e, t, i);
        }
        static runCallLater(e, t) {
            Laya.timer.runCallLater(e, t);
        }
        static runTimer(e, t) {
            Laya.timer.runTimer(e, t);
        }
    }
    class E {
        constructor() {
            this.mainScene = null, this.hasInited = null;
        }
        static get Instance() {
            return null === E._instance && (E._instance = new E()), E._instance;
        }
        static getResPath(e) {
            return e;
        }
        loadHomeScene() {
            return new Promise((e, t) => {
                e(!0);
            });
        }
        loadGameObject() {
            return new Promise((e, t) => {
                this.hasInited, e(!0);
            });
        }
        get homeScene() {
            return this.mainScene;
        }
    }
    E._instance = null;
    class N {
        constructor() {
            this.loadingRes = !1, this.loaded = !1, this.loadResCallback = null, this.templet = null,
                this.bitmapFont = null, this.threeDResDir = "", this.reset();
        }
        static get Instance() {
            return null == N._instance && (N._instance = new N()), N._instance;
        }
        reset() {
            this.loadingRes = !1, this.loaded = !1, "undefined" != typeof wx && h.useZip && (this.threeDResDir = wx.env.USER_DATA_PATH + "/DRes" + h.tResVer + "/");
        }
        loadRes(e) {
            this.loadingRes || (this.loadResCallback = e, this.loadingRes = !0, this.templet = new Laya.Templet(),
                this.templet.on(Laya.Event.COMPLETE, this, this.onLoadAnimComplete), this.templet.on(Laya.Event.ERROR, this, this.onError),
                this.templet.loadAni("dg/tea.sk"), this.loadAllRes());
        }
        onLoadAnimComplete() {}
        onProgress(e) {
            d.Instance.event(s.ResLoadProgress, e);
        }
        onLoad() {
            this.loadingRes = !1;
        }
        onLoadResComplete() {
            this.loadResCallback && this.loadResCallback.run(), this.loadingRes = !1, this.loaded = !0,
                this.sentResToOpenContext(), d.Instance.event(s.StartLoadFinish), Be.nodeReport(D.loadRes);
        }
        loadAllRes() {
            "undefined" == typeof wx || h.UseRemoteRes, h.useZip ? this.unzipThreeDRes().then(e => {
                this.deleteOldThreeDResDir(), this.loadGRes();
            }).catch(e => {}) : this.loadGRes(), g.Instance.loadComplete();
        }
        loadGRes() {
            let e = T.getGameRes();
            Laya.loader.load(e, Laya.Handler.create(this, this.loadHomeScene), Laya.Handler.create(this, this.onProgress, null, !1), null, 1, !0);
        }
        onError() {}
        clear() {}
        getSkeleton() {
            var e = this.templet.buildArmature(1);
            return e.pos(0, 0), e;
        }
        sentResToOpenContext() {
            Laya.Browser.onMiniGame;
        }
        deleteOldThreeDResDir() {
            if ("undefined" == typeof wx || !h.useZip) return;
            var e = wx.getFileSystemManager();
            let t = wx.env.USER_DATA_PATH,
                i = "DRes" + h.tResVer;
            e.readdir({
                dirPath: t,
                success: t => {
                    let n = t.files;
                    for (let t = 0; t < n.length; t++) {
                        let s = n[t];
                        s !== i && 0 == s.indexOf("DRes") && e.rmdir({
                            dirPath: wx.env.USER_DATA_PATH + "/" + s,
                            recursive: !0
                        });
                    }
                }
            });
        }
        unzipThreeDRes() {
            if ("undefined" == typeof wx || !h.useZip) return new Promise((e, t) => {
                e("");
            });
            var e = wx.getFileSystemManager();
            h.tResVer;
            let t = this.threeDResDir;
            return new Promise((i, n) => {
                e.access({
                    path: t,
                    success: e => {
                        i(e);
                    },
                    fail: () => {
                        n("res directory not exist. upziping...");
                    }
                });
            }).then(e => {}).catch(t => new Promise((t, i) => {
                e.unzip({
                    zipFilePath: "res/DRes.zip",
                    targetPath: wx.env.USER_DATA_PATH,
                    success: function(e) {
                        t();
                    },
                    fail: function(e) {
                        i("assets unzip fail");
                    }
                });
            }));
        }
        loadHomeScene() {
            E.Instance.loadHomeScene().then(e => E.Instance.loadGameObject()).then(e => {
                this.onLoadResComplete();
            });
        }
    }
    N._instance = null;
    class z extends e.EggViewUI {
        constructor() {
            super(...arguments), this.count = 30, this.finish = !1, this.isFirst = !0, this.tapTimeArr = [],
                this.totalCount = 0, this.sampleCount = 0, this.coin = 0, this.startTime = 0, this.maskWidth = 0,
                this.banner = null, this.bannerPinY = 0, this.bannerTop = 0, this._scene = null,
                this.rank = 0, this.styleTop = 0, this.countDown = 5, this.skeleton = null, this.ishitsuccess = !1,
                this.isShow = !1;
        }
        init(e) {
            this._scene = e.se, this.rank = e.rank, this.ishitsuccess = !1, this.regiestEvent(),
                this.count = 20 + Math.floor(10 * Math.random()), this.totalCount = this.count,
                this.tapTimeArr = [], this.sampleCount = Math.floor(4 * Math.random() + 4), this.ani1.play(0, !0),
                this.skeleton = N.Instance.getSkeleton(), this.skeleton.pos(265, 324), this.dg.addChild(this.skeleton),
                this.skeleton.play("2", !0, !0), this.skeleton.paused(), this.countDown = 5, this.coundDownImg.skin = "common/num_" + this.countDown + ".png",
                this.coundDownImg.visible = !0;
        }
        startCountDown() {
            this.stopCountDown(), Laya.timer.loop(1e3, this, this.updateCountDown);
        }
        stopCountDown() {
            Laya.timer.clear(this, this.updateCountDown);
        }
        updateCountDown() {
            if (this.ishitsuccess) F.clear(this, this.updateCountDown);
            else if (this.countDown -= 1,
                this.coundDownImg.skin = "common/num_" + this.countDown + ".png", 0 === this.countDown) return F.clear(this, this.updateCountDown),
                void Laya.timer.loop(500, this, this.closeView);
        }
        uninit() {
            this.unregiestEvent();
        }
        regiestEvent() {
            this.hitBtn.on(Laya.Event.CLICK, this, this.clickHitBtn), d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted),
                d.Instance.on(s.BannerPosChange, this, this.onADBannerChange), Laya.timer.frameLoop(1, this, this.updatemaskWidth);
        }
        unregiestEvent() {
            this.hitBtn.off(Laya.Event.CLICK, this, this.clickHitBtn), d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted),
                d.Instance.off(s.BannerPosChange, this, this.onADBannerChange), Laya.timer.clear(this, this.updatemaskWidth);
        }
        updatemaskWidth() {
            this.maskWidth -= 2, this.maskWidth < 0 && (this.maskWidth = 0), this.updateMask();
        }
        updateMask() {
            let e = this.maskWidth;
            this.maskView.graphics.clear(), this.maskView.graphics.drawRect(0, 0, e, this.maskView.height, "#FF0000");
        }
        clickHitBtn() {
            this.skeleton.resume(), this.isFirst && (this.startTime = new Date().getTime(),
                this.isFirst = !1, this.startCountDown());
            let e = 0,
                t = !1,
                i = new Date().getTime();
            if (this.tapTimeArr.push(i), this.tapTimeArr.length < this.sampleCount ? (e = this.tapTimeArr.length / (i - this.tapTimeArr[0]),
                    e = Math.min(e, .001 * this.tapTimeArr.length)) : e = this.sampleCount / (i - this.tapTimeArr[this.tapTimeArr.length - this.sampleCount]),
                e *= 125, t = (e = Math.min(1, e)) > .9, e >= .15 && e <= .4 && Math.random() <= .4 && (this.banner && this.banner.show && this.banner.show(),
                    this.isShow = !0, t = !0), !this.isShow && e >= .41 && e <= .6 && Math.random() <= .8 && (this.banner && this.banner.show && this.banner.show(),
                    this.isShow = !0, t = !0), !this.isShow && e >= .61 && (this.banner && this.banner.show && this.banner.show(),
                    this.isShow = !0, t = !0), this.maskWidth = this.maskView.width * e, this.updateMask(),
                m.Instance.playSound(u.egg), this.finish) return this.maskWidth = this.maskView.width,
                this.updateMask(), void Laya.timer.clear(this, this.updatemaskWidth);
            if (this.count--, 0 === this.count || t) {
                let e = h.vGameInfo && h.vGameInfo.eggInfo.delay || 300;
                if (0 === this.count) {
                    e = (h.vGameInfo && h.vGameInfo.eggInfo.eDelay || 1500) + Math.floor(500 * Math.random());
                }
                this.finish = !0, Laya.timer.once(e, this, () => {
                    Laya.timer.clear(this, this.updatemaskWidth), this.ani1.stop(), this.ani2.play(0, !0),
                        this.ani4.play(0, !0);
                    let e = new Date().getTime() - this.startTime,
                        t = this.totalCount / e;
                    t = Math.max(t, .003), t = (1e3 * Math.min(t, .008) - 3) / 10 + .3, this.coin = Math.ceil(h.vGameInfo.eggInfo.gold * t),
                        Be.IsQQ() && this.banner && this.banner.style && (this.banner.style.top = this.styleTop || 3e3),
                        this.isFirst || this.banner && this.banner.show && this.banner.show(), Be.Instance.report(D.hitedEgg, {
                            hitCount: this.totalCount - this.count,
                            totalCount: this.totalCount,
                            timeDiff: e / 1e3,
                            showBanner: null !== this.banner && void 0 !== this.banner,
                            heigthInfo: `${this.bannerPinY}-${this.bannerTop}-${this.stage.height}`
                        }), this.banner && this.banner.show && this.banner.show(), this.ishitsuccess = !0,
                        Laya.timer.loop(2e3, this, this.closeView);
                });
            }
        }
        clickCloseBtn() {}
        closeView() {
            P.Instance.closeUI(be.EggView), this._scene.showWinResultBoxViewDo(this.rank, this.ishitsuccess, this.ishitsuccess ? this.coin : 0);
        }
        onShowAdCompleted(e) {}
        onADBannerChange(e) {
            e.ADPos === be.EggView.id && e.BannerAD && (this.bannerTop = e.top, this.banner = e.BannerAD,
                this.banner && this.banner.hide && this.banner.hide(), Laya.timer.once(10, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }), Laya.timer.once(20, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }), Laya.timer.once(30, this, () => {
                    this.banner && this.banner.hide && this.banner.hide();
                }), Be.IsQQ() && (this.banner && this.banner.style ? (this.styleTop = this.banner.style.top,
                    this.banner.style.top = 3e3) : this.styleTop = 3e3));
        }
        getPinY() {
            let e = this.hitBtn.localToGlobal(new Laya.Point(0));
            return this.bannerPinY = e.y, e.y;
        }
    }
    class U extends e.RandomLevelUI {
        constructor() {
            super(), this._randomId = 0, this._skinDrag = null, this._skinMap = [], this._skinPageArr = [],
                this._skinItemArr = [], this._scene = null, this._control = null;
        }
        regiestEvent() {
            this.CloseBtn.on("click", this, this.closeClickHandle);
        }
        unregiesterEvent() {
            this.CloseBtn.off("click", this, this.closeClickHandle);
        }
        uninit() {
            this.unregiesterEvent(), this.timer.clearAll(this);
        }
        init(e) {
            this._scene = e.se, this._control = e.cot, this.regiestEvent();
            let t = this;
            this.CloseBtn.visible = false
            if (Laya.timer.once(500, null, function() {
                    t.CloseBtn.visible = !0;
                }), t.CloseBtn.y = 742, this.goldCnt.text = Me.Instance.gold, this._scene.ChildSceneCnt >= 2)
                for (let e = 1; e <= 3; e++) {
                    let t = this["box" + e].getChildByName("bg"),
                        i = t.getChildByName("bgright"),
                        n = this["box" + e].getChildByName("openbox");
                    e > 4 - this._scene.ChildSceneCnt ? (t.skin = "game/r_bg.png", i.visible = !0, 1 == e ? (
                        n.skin = "game/chessbrut_opened.png", P.Instance.showTips("You finished all challenges and you’ve got the coin reward!")
                    ) : n.skin = "game/r_bg4.png") : i.visible = !1;
                }
        }
        closeClickHandle() {
            this._control.NextGame();
            this.close();
        }
        close() {
            P.Instance.closeUI(be.Rand);
        }
    }
    class G {
        constructor(e) {
            this.httpCallback = null, this.url = "", this.httpCallback = e, this.url = "", this.http = new Laya.HttpRequest(),
                this.http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress), this.http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete),
                this.http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
        }
        sendPost(e, t, i) {
            var n = this.parsToStr(t);
            this.url = e + "/" + i, this.http.send(this.url, n, "post", "json");
        }
        sendGet(e, t, i = "json", n = null) {
            var s = this.parsToStr(t);
            this.url = e + "?" + s, this.http.send(this.url, null, "GET", i, n);
        }
        sendGetWithUrl(e, t = "json", i = null) {
            this.url = e, this.http.send(e, null, "get", t || "json", i);
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
        onHttpRequestComplete(e) {
            if (this.httpCallback) {
                {
                    let e = this.http;
                    if (e._http && e._http.getResponseHeader) {
                        let t = new Date();
                        if (!Be.IsQutoutiao()) {
                            let i = e._http.getResponseHeader("Date");
                            t = new Date(i);
                        }
                        let i = t.getTime();
                        i > 0 && (p.severTime = i);
                    }
                }
                this.httpCallback(null, this.http.data);
            }
        }
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
    }! function(e) {
        e[e.OK = 1e4] = "OK", e[e.FAIL = 10002] = "FAIL", e[e.LOGIN_PAR_ERROR = 1001] = "LOGIN_PAR_ERROR",
            e[e.ENTRY_TOKEN_EXPIRE = 10005] = "ENTRY_TOKEN_EXPIRE", e[e.ENTRY_USER_NOT_EXIST = 10011] = "ENTRY_USER_NOT_EXIST";
    }(C || (C = {}));
    class Y {
        constructor() {
            this.packageName = h.packageName, this.mt = h.Platform, this.apiversion = h.Apiversion,
                this.version = h.ClientVer, this.sessionID = "";
        }
        static get Instance() {
            return null === Y._instance && (Y._instance = new Y()), Y._instance;
        }
        addTsParas(e, t) {
            return e;
        }
        qgPostUrl(e) {
            return Be.isQG || Be.IsQutoutiao() ? "/data" + e : e;
        }
        qgPostData(e) {
            return (Be.isQG || Be.IsQutoutiao()) && (e = "data=" + JSON.stringify(e)), e;
        }
        loginUser(e) {
            let t = Object.assign(e, {
                packageName: this.packageName,
                inviteCode: Me.Instance.inviteCode || ""
            });
            return this.post(this.qgPostUrl("/login"), t);
        }
        login2User(e) {
            let t = Object.assign(e, {
                packageName: this.packageName,
                inviteCode: Me.Instance.inviteCode || ""
            });
            return this.post(this.qgPostUrl("/2/login"), t);
        }
        getUserInfo(e = "", t = 0, i = "") {
            return this.get("/hd/userInfo", {
                packageName: this.packageName,
                kid: e || "",
                isClick: t,
                isvs: i
            });
        }
        getAppConfig() {
            // return this.get("/config.json", {
            //     packageName: this.packageName
            // });
        }
        updateInfo(e) {
            let t = Object.assign({
                packageName: this.packageName,
                gender: -1,
                sessionID: this.sessionID
            }, e);
            return this.post(this.qgPostUrl("/hd/update/info"), t);
        }
        updataGameData(e) {
            let t = {
                    b: Me.Instance.gold.base,
                    c: Me.Instance.gold.power
                },
                i = {
                    b: Me.Instance.gold,
                    c: 1
                };
            return this.updateInfo({
                gamedata: e,
                gold: t,
                diamond: 0,
                cgold: i,
                cpower: {
                    b: 0,
                    c: 1
                },
                militaryId: 0,
                plunderNum: 0,
                stage: 0
            });
        }
        buildUrl(e) {
            return h.host + e;
        }
        buildParas(e, t) {
            let i = e;
            return t && (i = Object.assign(e, {
                sessionID: this.sessionID,
                apiversion: this.apiversion,
                version: this.version,
                mt: this.mt,
                a: Date.now()
            })), i;
        }
        get(e, t = {}, i = !0) {
            let n = this.buildUrl(e),
                s = this.buildParas(t, i);
            return new Promise((e, t) => {
                new G((i, n) => {
                    this.handleResult(i, n, e, t);
                }).sendGet(n, s);
            });
        }
        post(e, t = {}, i = !0) {
            let n = this.buildUrl(e),
                s = this.buildParas(t, i);
            return new Promise((e, t) => {
                new G((i, n) => {
                    this.handleResult(i, n, e, t);
                }).sendPostWithUrl(n, this.qgPostData(s));
            });
        }
        handleResult(e, t, i, n) {
            if (e) return Be.Instance.report("NetworkError", {
                error: e
            }), void n(e);
            t.code === C.OK ? i(t.result) : (Be.Instance.report("NetworkError", {
                code: t.code
            }), n(t));
        }
    }
    Y._instance = null;
    class X {
        constructor() {
            this.sdkParams = null;
        }
        static get Instance() {
            return null === X._instance && (X._instance = new X()), X._instance;
        }
        clear() {}
        sdkLogin(e, t) {
            h.hasLogin ? this.sdkLogin1(e, t) : this.sdkLogin2(e, t);
        }
        sdkLogin1(e, t) {
            Y.Instance.loginUser(e).then(e => {
                let i = e.sessionID;
                if (i) {
                    return Me.Instance.user.session_key = i, Y.Instance.sessionID = i, h.isLimitCity = e.isL || !1,
                        h.isLimitCityB = e.isLB || !1, h.closeLD = e.closeLD || !1, h.isF = e.isF || !1,
                        Be.IsTouTiao() && (h.closeLD = !0), Be.Instance.report(D.Login, {
                            register: p.registerDayString
                        }), this.updateUserInfo(t);
                }
            }).then(e => {
                Me.Instance.logined = !0, d.Instance.event(s.userLoginFinish, {
                    logined: !0,
                    caller: t
                });
            }).catch(e => {
                Me.Instance.logined || (Me.Instance.loginError = !0, Be.Instance.report(D.LoginFail, {}),
                    d.Instance.event(s.userLoginFinish, {
                        logined: !1,
                        caller: t
                    }));
            });
        }
        sdkLogin2(e, t) {
            e.iscommit = 1, Be.Instance.report(D.newLogin, {
                register: p.registerDayString
            }), this.doDefaultLoginAction(t);
        }
        updateUserInfo(e = null) {
            return Y.Instance.getUserInfo().then(e => {
                let t = e.uid;
                if (t) {
                    let i = Me.Instance.user;
                    if (i.resumePlayerInfoDefault(), i.setUid(t), i.loadCacheData(), i.openid = e.openid,
                        i.city = e.city, i.avatar = e.avatar, i.nickName = e.nickName, i.gender = e.gender,
                        i.setUid(t), Be.IsTouTiao() && h.isAnonymous && (i.avatar = "", i.nickName = "玩家"),
                        i.authorized = e.authorized, i.authorized && d.Instance.event(s.DestoryUserInfoButton),
                        e.openid && "undefined" != typeof wx && Be.IsWeChat(), !Me.Instance.isReadData)
                        if (i.isDefaultData) {
                            let t = null;
                            e.gamedata && (t = JSON.parse(e.gamedata)), Me.Instance.readDataInfo(t);
                        } else Me.Instance.readDataInfo(null);
                    d.Instance.event(s.UserInfoChange);
                }
            });
        }
        doFailLogin() {
            this.doDefaultLoginAction();
        }
        doDefaultLoginAction(e = null) {
            Be.IsTouTiao() && (h.closeLD = !0);
            let t = Me.Instance.user;
            Y.Instance.sessionID = t.session_key, Me.Instance.readDataInfo(null), d.Instance.event(s.UserInfoChange),
                Me.Instance.logined = !0, d.Instance.event(s.userLoginFinish, {
                    logined: !0,
                    caller: e
                });
        }
    }
    X._instance = null,
        function(e) {
            e.JumpSuccess = "JumpSuccess", e.JumpFail = "JumpFail", e.JumpCancel = "JumpCancel",
                e.UpdateData = "UpdateData";
        }(x || (x = {})),
        function(e) {
            e.JumpSuccess = "跳转成功", e.JumpFail = "跳转失败", e.Vedio = "拉取视频";
        }(k || (k = {})),
        function(e) {
            e.unkonw = "未知", e.gameIcon = "游戏界面抖动Icon", e.settlementClose = "结算界面关闭", e.gradeupClose = "段位升级界面关闭",
                e.jumpFail = "icon跳转失败后界面", e.homeGift = "首页礼包", e.homeIcon = "首页抖动Icon", e.homeList = "首页底部滚动横幅",
                e.homeLeft = "首页侧拉热门按钮", e.backHome = "游戏中小屋按钮", e.reliveList = "复活界面", e.settlementIcon = "结算界面抖动Icon",
                e.settlementList = "结算界面滚动列表", e.box = "宝箱界面", e.notEnough = "coin is not enough", e.offline = "",
                e.banner = "", e.recent = "", e.noTouch = "", e.homeOut = "",
                e.gameOut = "游戏中退出按钮";
        }(L || (L = {}));
    class O {
        constructor() {
            this.appTitle = "", this.appName = "", this.appID = "", this.advID = "", this.appIcon1 = "",
                this.linkPath = "", this.appIconArray = [], this.fav = !1, this.isQy = !1;
        }
        get appIcon() {
            if (this.appIconArray && this.appIconArray instanceof Array) {
                let e = M.getRandom(0, this.appIconArray.length - 1);
                return e > this.appIconArray.length - 1 && (e = 0), this.appIconArray[e];
            }
            return this.appIcon1;
        }
    }
    class W {
        constructor() {
            this.qyInfo = null, this.tuiData = [], this.qyTuiData = {};
        }
        static get Instance() {
            return null === W._instance && (W._instance = new W()), W._instance;
        }
        static qySdk() {
            return window.G_AdvMgr;
        }
        getQySdk(e) {
            let t = [{
                    index: "8f0a566d374213a260cd13c9e4cf0524"
                }, {
                    lunbo: "71c46d1b325d8b30d02edb036013571b"
                }, {
                    fail: "06d93ca88e1318cf816cdf19eb4bdf4a"
                }, {
                    settle: "d6968583364b8e0f86e645b0c6b48269"
                }, {
                    out: "1144bcdebfd4cb65a5046e0998e04648"
                }, {
                    friend: "5896970d8ccd729c4e6f5f2758014a6b"
                }, {
                    fubiao: "b102cc9de9d4df5e35d39f3b0a08130f"
                }],
                i = W.qySdk() || null;
            i ? i.getIconButtons(t, t => {
                this.qyInfo = Object.assign({}, t), this.referashQyData(), e && e();
            }) : e && e();
        }
        referashQyData() {
            this.qyInfo && (this.qyTuiData = {}, this.setQyItems("index"), this.setQyItems("lunbo"),
                this.setQyItems("fail"), this.setQyItems("settle"), this.setQyItems("out"), this.setQyItems("friend"),
                this.setQyItems("fubiao"));
        }
        setQyItems(e) {
            if (this.qyInfo) {
                let t = this.qyInfo[e];
                if (t) {
                    let i = t.map(e => {
                        let t = new O();
                        return t.appTitle = e.title || "", t.appName = e.title || "", t.appID = e.appid || "",
                            t.appIcon1 = e.logo_url || "", t.linkPath = e.path || "", t.appIconArray = e.logo_url || [],
                            t.fav = !1, t.advID = e.adv_id, t.isQy = !0, t;
                    });
                    this.qyTuiData[e] = i;
                }
            }
        }
        static getQyJudgeRegion(e, t, i = null) {
            let n = {
                appid: e,
                scene: "" + t
            };
            return new Promise((e, t) => {
                new G((i, n) => {
                    i ? t(i) : 200 === n.Status ? e(n.Result) : t(n);
                }).sendPostWithUrl("https://api.game.hnquyou.com/api/Product/judgeRegion.html", n, "json", {
                    "content-type": "application/x-www-form-urlencoded"
                });
            });
        }
        get canShowWXRecommend() {
            return Be.IsWeChat() && this.canShowRecommend;
        }
        get canShowRecommend() {
            return (!Be.IsWeChat() || !p.chidState) && (!Be.IsQQ() && (Be.IsTouTiao() ? Be.shouldShowTReommend() : !R.Instance.wxCheck() && h.vGameInfo.sRecommend));
        }
        getInfo(e) {
            let t = [];
            return Be.IsWeChat() ? t = this.qyTuiData[e] || [] : (Be.IsTouTiao() || Be.IsOppo()) && (t = this.tuiData),
                t;
        }
        getShowInfo(e) {
            return this.qyInfo && this.qyInfo[e] ? this.qyInfo[e] : null;
        }
        getShowName(e) {
            return e.title;
        }
        getShowUrl(e) {
            if (e.logo_url) {
                if (e.logo_url instanceof Array) {
                    let t = M.nextNumber(0, e.logo_url.length - 1);
                    return e.logo_url[t];
                }
                return e.logo_url;
            }
            return null;
        }
        static getShowUrl2(e) {
            if (e.logo_attr && e.logo_attr instanceof Array && e.logo_attr.length) {
                let t = M.nextNumber(0, e.logo_attr.length - 1);
                return e.logo_attr[t];
            }
            if (e.logo_url) {
                if (e.logo_url instanceof Array) {
                    let t = M.nextNumber(0, e.logo_url.length - 1);
                    return e.logo_url[t];
                }
                return e.logo_url;
            }
            return null;
        }
        referashData() {
            return new Promise((e, t) => {
                let i = [];
                Be.IsWeChat() || (Be.IsTouTiao() ? i = h.vGameInfo.ttTuiInfo : Be.IsOppo() && (i = h.vGameInfo.oppoTuiInfo));
                let n = i.map(e => {
                    let t = new O();
                    return t.appTitle = e.name || "", t.appName = e.name_true || "", t.appID = e.pid || "",
                        t.appIcon1 = e.url || "", t.linkPath = e.path || "", t.appIconArray = e.urls || [],
                        t.fav = e.fav || !1, t.advID = "", t.isQy = !1, t;
                });
                this.tuiData = n, d.Instance.event(x.UpdateData), e({
                    tuiData: this.tuiData
                });
            });
        }
        static getScorllData(e, t = 60) {
            if (e) {
                let i = [].concat(e),
                    n = [];
                for (; i.length < t;) {
                    0 === n.length && (n = [].concat(e));
                    let t = M.nextNumber(0, n.length - 1);
                    t > n.length && (t = 0), i.push(n[t]), n.splice(t, 1);
                }
                return i;
            }
            return [];
        }
        static checkTuiItemRed(e, t = -1) {
            e && (-1 == t && (t = M.nextNumber(0, 100) < 20 ? 1 : 0), t && t > 0 ? (e.skin = 1 == t ? "tui/icon-hot.png" : "tui/icon-new.png",
                e.visible = !0) : e.visible = !1);
        }
        jumpApp(e, t) {
            if (e && e.appID && e.isQy) {
                let i = {
                        adv_id: e.advID,
                        appId: e.appID,
                        path: e.linkPath,
                        success: i => {
                            let n = e.appName && e.appName.length ? e.appName : e.appTitle;
                            Be.IsWeChat() || Be.Instance.report(D.MyRecommendJump, {
                                new: p.isNewPlayer ? 1 : 0,
                                userID: Me.Instance.user.openid,
                                fromAPPID: h.appId,
                                toAPPID: e.appID,
                                name: n
                            }), d.Instance.event(x.JumpSuccess), this.doJumpSuccess(e, t);
                        },
                        fail: i => {
                            i.errMsg && i.errMsg.indexOf("fail cancel") ? d.Instance.event(x.JumpCancel) : d.Instance.event(x.JumpFail),
                                this.doJumpFail(e, t);
                        },
                        complete: () => {}
                    },
                    n = wx;
                n && n.h_ToMinProgram && n.h_ToMinProgram(i);
            }
        }
        doJumpSuccess(e, t) {
            let i = k.JumpSuccess,
                n = {
                    "游戏": e.appTitle,
                    "跳转来源": t
                };
            this.report(i, n);
        }
        doJumpFail(e, t) {
            let i = k.JumpFail,
                n = {
                    "游戏": e.appTitle,
                    "跳转来源": t
                };
            this.report(i, n), this.canFailOpen(t) && P.Instance.openUIUnique(be.TuiView, {
                cb: null,
                from: L.jumpFail
            });
        }
        report(e, t) {
            Be.IsWeChat() && Be.Instance.report(`qy-${e}`, t);
        }
        canFailOpen(e) {
            return e == L.homeGift || e == L.homeIcon || e == L.homeList || e == L.homeLeft || e == L.backHome || e == L.reliveList || e == L.settlementIcon || e == L.settlementList || e == L.box || e == L.notEnough || e == L.offline;
        }
    }
    W.useThirdJudge = !1, W._instance = null;
    class H {
        constructor() {
            this.hasShow = !1, this.m_offlineTime = 0;
        }
        static get Instance() {
            return null === H._instance && (H._instance = new H()), H._instance;
        }
        init() {
            let e = this.getOfflineTime();
            this.m_offlineTime = e > 0 ? new Date().getTime() - this.getOfflineTime() : 0;
        }
        getOfflineTime() {
            return f.getNumberValue("offlineTime");
        }
        setOfflineTime(e) {
            f.setNumberValue("offlineTime", e);
        }
        getOfflineTimeCoin() {
            let e = 0;
            if (!this.hasShow) {
                let t = Math.floor(this.m_offlineTime / 6e4),
                    i = 120;
                t >= 3 && (t > i && (t = i), e = 5 * t);
            }
            return e;
        }
    }
    H._instance = null;
    class K {
        constructor() {
            this.curSubPacketLoadProgress = 0, this.loadProgress = 0, this.updateManager = null,
                this.subPackageName = "res", this.curHideTimer = 0;
        }
        static get Instance() {
            return null === K._instance && (K._instance = new K()), K._instance;
        }
        onConfigLoaded() {
            P.Instance.openUI(be.Load, {
                    loadSubpackage: !1
                }),
                this.loadSubpackageFinish();
        }
        initEnv() {
            be.initConfig(), Be.registerQGAldRequest(), Be.onShow(e => {
                this.onShowWX(e);
            }, e => {
                this.onHideWX(e);
            });
            let e = parseInt(Laya.LocalStorage.getItem("wxRegisterTime") || "0");
            0 === e && (e = Date.now(), Laya.LocalStorage.setItem("wxRegisterTime", e.toString()),
                Laya.LocalStorage.removeItem("canFetchVideo"), Laya.LocalStorage.removeItem("useVideoMaxTime"),
                p.firstTimePlayer = !0), p.registerTime = e;
            let t = Date.now();
            p.accountTime = t - e; {
                let e = parseInt(Laya.LocalStorage.getItem("lastStartLoadTime") || "0");
                p.lastStartTime = e, Laya.LocalStorage.setItem("lastStartLoadTime", t.toString());
            }
            if (p.registerDayString = c.timestampToDay(p.registerTime), p.isOverDay = _e.checkOverDay(),
                p.isNewPlayer = c.isSameDay(t, e), h.recoverData || (p.isNewPlayer = !0), p.isNewPlayer) {
                let e = "curbannerreshipin",
                    t = parseInt(Laya.LocalStorage.getItem(e) || "0");
                t += 1, Laya.LocalStorage.setItem(e, t.toString());
            }
            if (Be.IsTencentGame() || Be.IsTouTiao()) {
                let e = null,
                    t = Be.getPlatform();
                t && t.getSystemInfoSync && (e = t.getSystemInfoSync()), e && (p.windowHeight = e.windowHeight,
                    p.windowWidth = e.windowWidth, p.screenHeight = e.screenHeight, p.screenWidth = e.screenWidth,
                    e.platform && "android" === e.platform.toLowerCase() ? Be.isAndroid = !0 : e.platform && "ios" === e.platform.toLowerCase() && (Be.isIos = !0),
                    e.benchmarkLevel && e.benchmarkLevel >= 1 && e.benchmarkLevel < 20 && (Be.isLowDevice = !0));
            }
            Be.Instance.setLoadingProgress(0), Be.nodeReport(D.gameStart), Be.IsOppo() && this.onShowWX(null);
        }
        onLoadComplete() {
            this.doLoginAction(null);
        }
        canLoadSubpackage() {
            if (!this.subPackageName || !this.subPackageName.length) return !1;
            if (h.UseRemoteRes) return !1;
            let e = Be.getPlatform();
            return !(!e || !e.loadSubpackage);
        }
        loadSubpackageFinish() {
            N.Instance.loadRes(null), Laya.loader.load(T.getGameConfig(), Laya.Handler.create(this, this.onLoadComplete));
        }
        loadSubpackage() {}
        loadMusicSubPackage() {
            if (!this.canLoadSubpackage()) return;
            let e = Be.getPlatform();
            if (e && e.loadSubpackage) {
                m.Instance.canPlay = !1;
                e.loadSubpackage({
                    name: "music",
                    success: e => {
                        m.Instance.canPlay = !0, m.Instance.playBgm();
                    },
                    fail: e => {}
                });
            }
        }
        doLoginAction(e = null) {
            ve.Instance.init(null), this.getAppCfg(),
                W.useThirdJudge && W.getQyJudgeRegion(h.appId, p.scene).then(e => {
                    e && (1 == e.Status ? h.isLimitCityB = !0 : 0 == e.Status && (h.isLimitCityB = !1));
                }).catch(e => {});
            let t = () => {
                Me.Instance.loginError = !1, Be.Instance.sdkLogin(Laya.Handler.create(this, t => {
                    Be.Instance.loginParams = t, this.connectSdkLoginSrv(Be.Instance.loginParams, e);
                }), null);
            };
            t && t();
        }
        connectSdkLoginSrv(e, t) {
            null !== e && X.Instance.sdkLogin(e, t);
        }
        onShowWX(e) {
            if (Me.Instance.onlineStartTime = new Date().getTime(), e) {
                e.path;
                e && e.referrerInfo && e.referrerInfo.appId;
                let t = e.query;
                if (t && this.updateLoadInfoFromWX(t), e.scene) {
                    p.scene = e.scene, Be.Instance.report("GameScene", {
                        scene: e.scene
                    });
                    let t = e.scene;
                    p.canE = !0, "1005" != t && "1006" != t && "1011" != t && "1012" != t && "1013" != t && "1025" != t && "1027" != t && "1031" != t && "1032" != t && "1042" != t && "1047" != t && "1048" != t && "1049" != t && "1053" != t && "1054" != t && "1079" != t && "1096" != t && "1007" != t && "1008" != t || (p.canE = !1);
                }
            }
            let t = 0;
            this.curHideTimer && (t = Date.now() - this.curHideTimer) < 0 && (t = 0), this.curHideTimer = null,
                H.Instance.init(), d.Instance.event(s.GetFocus, {
                    hideTime: t
                });
        }
        onHideWX(e) {
            let t = new Date().getTime(),
                i = t - Me.Instance.onlineStartTime;
            Me.Instance.onlineTime += i, H.Instance.hasShow = !1, H.Instance.setOfflineTime(t),
                Me.saveGameData(!0, !0), this.curHideTimer = Date.now(), d.Instance.event(s.LostFocus),
                this.bannerClickCheck(e);
        }
        bannerClickCheck(e) {
            null != e && (Be.Instance.report(D.BannerJump, {
                pos: Be.Instance.showBannerPos
            }), Be.shouldReBuild = !0);
        }
        updateLoadInfoFromWX(e) {
            if (null !== e && (null !== e.inviteName || null !== e.openid || null !== e.inviteCode)) {
                e.inviteName, e.openid, e.pos, e.shareTime;
                let t = e.inviteCode;
                t && (Me.Instance.inviteCode = t);
            }
            null !== e && null !== e.chid && (p.chid = e.chid);
        }
        getAppCfg() {
            // Y.Instance.getAppConfig().then(e => {
            //     if (e.checkv == h.ClientVer ? h.State = i.Check : h.State = i.Normal, h.showRecommend = e.showRecommend || !1, 
            //     h.ShareTickTimer = e.shareTimer || 3e3, h.vGameInfo = Object.assign({}, o, e.vGameInfo), 
            //     h.State == i.Check) h.vAdCount = 3e3; else {
            //         let t = e.shareList || [];
            //         if (t.length > 0 && (Be.IsTouTiao() || (h.ShareInfoList = t)), h.vList = e.vList || [], 
            //         h.vsInfo = e.vsInfo || {
            //             type: 0,
            //             snu: 6,
            //             vnum: 8
            //         }, h.vAdCount = e.vAdCount || h.vAdCount, Be.IsQQ() && h.vGameInfo.qqADInfo.eInfo && (h.vGameInfo.eInfo = h.vGameInfo.qqADInfo.eInfo), 
            //         p.chid && p.chid.length && h.vGameInfo.mpcv && h.vGameInfo.mpcv.length) {
            //             let e = h.vGameInfo.mpcv.split(",");
            //             for (let t = 0; t < e.length; t++) if (e[t] == p.chid) {
            //                 p.chidState = !0;
            //                 break;
            //             }
            //         }
            //     }
            // }).catch(e => {});
        }
        updateLoad() {
            this.loadProgress += .05, this.loadProgress >= 1 ? (Laya.timer.clear(this, this.updateLoad),
                this.loadProgress = 1) : Laya.timer.once(500, this, this.updateLoad), this.updateSubPacketLoad();
        }
        updateSubPacketLoad() {
            let e = this.curSubPacketLoadProgress;
            e < .9 || Laya.timer.clear(this, this.updateLoad), e = .1 * this.curSubPacketLoadProgress + .9 * this.loadProgress,
                d.Instance.event(s.SubpackageLoadProgress, e);
        }
        checkForUpdate() {}
    }
    K._instance = null,
        function(e) {}(B || (B = {}));
    class q {
        static get Instance() {
            return null === q._instance && (q._instance = new q()), q._instance;
        }
        onBack(e) {}
        onReceive(e) {}
        onSign(e) {}
        onCark() {}
        onTrain(e) {}
        onBtn(e) {}
        onVideo(e) {}
        onNewPlayer(e) {}
        report(e, t) {}
    }
    q._instance = null;
    class Z extends e.LoadingViewUI {
        constructor() {
            super(...arguments), this.loadSubpackage = !1, this.loadCompleted = !1, this.retryCount = 0;
        }
        init(e) {
            this.loadSubpackage = e.loadSubpackage || !1, this.registerEvent();
        }
        uninit() {
            Laya.timer.clearAll(this), this.unregisterEvent();
        }
        registerEvent() {
            d.Instance.on(s.ResLoadProgress, this, this.onRefreshProgress), d.Instance.on(s.StartLoadFinish, this, this.onLoadCompleted),
                d.Instance.on(s.userLoginFinish, this, this.userLoginFinish), d.Instance.on(s.SubpackageLoadProgress, this, this.onSubpackageLoadProgress);
        }
        unregisterEvent() {
            d.Instance.off(s.ResLoadProgress, this, this.onRefreshProgress), d.Instance.off(s.StartLoadFinish, this, this.onLoadCompleted),
                d.Instance.off(s.userLoginFinish, this, this.userLoginFinish), d.Instance.off(s.SubpackageLoadProgress, this, this.onSubpackageLoadProgress);
        }
        onRefreshProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1), this.loadSubpackage ? this.updateProgress(.5 + e / 2) : this.updateProgress(e);
        }
        onSubpackageLoadProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1), this.updateProgress(e / 2);
        }
        updateProgress(e) {
            e < 0 && (e = 0), e > 1 && (e = 1);
            let t = (100 * e).toFixed(0) + "%";
            this.loadingLabel.changeText(t || "");
            let i = Math.floor(369 * e);
            this.progressImageMask.graphics.clear(), this.progressImageMask.graphics.drawRect(0, 0, i, 40, "#FF0000"),
                Be.Instance.setLoadingProgress((100 * e).toFixed(0));
        }
        closeLoadingView() {
            P.Instance.closeUI(be.Load);
        }
        showMainView() {
            platform.getInstance().yadstartup("Bubble-Tea", () => {

                let yad = new Laya.Image();
                yad.skin = "common/yad.png";
                yad.left = 10;
                yad.bottom = 10;
                yad.zOrder = 2e3;
                yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                    platform.getInstance().navigate("GAME", "LOGO")
                })
                Laya.stage.addChild(yad);



                this.closeLoadingView();
                K.Instance.loadMusicSubPackage(),
                    m.Instance.playBgm(),
                    g.Instance.loadingFinished(),
                    P.Instance.openUI(be.Game),
                    q.Instance.onNewPlayer(B.loaded);
            })
        }
        onLoadCompleted() {
            this.loadCompleted = !0;
            let e = Me.Instance.logined;
            Be.Instance.setLoadingProgress(100), e ? this.showMainView() : Me.Instance.loginError && this.showtReTryBtn();
        }
        userLoginFinish(e) {
            e.logined ? this.onStart() : this.loadCompleted && this.showtReTryBtn();
        }
        onStart() {
            this.loadCompleted && this.showMainView();
        }
        showtReTryBtn() {
            X.Instance.doFailLogin();
        }
        reLogin() {
            K.Instance.doLoginAction(null);
        }
    }
    class j {
        constructor() {
            this.showEggViewCountDown = 0, this.showedEggViewCount = 0, this.nextInterval = 0;
        }
        static get Instance() {
            return null === j._instance && (j._instance = new j()), j._instance;
        }
        checkShowEggView() {
            return !!(Be.IsWeChat() || Be.IsOppo() || Be.IsQQ()) && (!R.Instance.aCheck() && (!R.Instance.wxCheck() && !h.isLimitCityB && (!!ve.Instance.checkPianDianE() && (Me.saveGameData(),
                Be.Instance.report(D.showBig), !0))));
        }
    }
    j._instance = null;
    class Q extends Laya.Script {
        constructor() {
            super(), this.level = 1, this.restitutionCnt = 2, this.addscore = 0, this.IsAdd = !1,
                this.IsRemove = !1, this._rig = null, this._cir = null, this.data = null, this._control = null;
        }
        onEnable() {
            this._rig = this.owner.getComponent(Laya.RigidBody), this._cir = this.owner.getComponent(Laya.CircleCollider);
        }
        initDate(e, t) {
            let i = this.owner.getChildByName("img");
            switch (this._control = t, e) {
                case 1:
                    i.skin = "game/m_dropwriteZZ.png";
                    break;

                case 2:
                    i.skin = "game/m_dropblackZZ.png";
                    break;

                case 3:
                    i.skin = "game/m_dropyellowZZ.png";
                    break;

                case 4:
                    i.skin = "game/m_dropredZZ.png";
                    break;

                case 5:
                    i.skin = "game/m_dropgreedZZ.png";
            }
            this.data = {
                type: 2,
                chilidtype: e
            };
        }
        onUpdate() {}
        onTriggerEnter(e, t, i) {
            let n = this.owner;
            "cupground" != e.label && "iceground" != e.label && "itembox" != e.label || 0 != this.IsAdd ? "ground" == e.label && 0 == this.IsRemove && (Be.vibrateShort(),
                this.IsRemove = !0, n.removeSelf()) : (Be.vibrateShort(), this.IsAdd = !0, this._control.GameDate.push(this.data),
                this._control.SpDate.push(this.owner));
        }
        onDisable() {}
    }
    class J extends Laya.Script {
        constructor() {
            super(), this.level = 1, this.restitutionCnt = 2, this.addscore = 0, this.IsRemove = !1,
                this.IsAdd = !1, this._rig = null, this._cir = null, this.data = null, this._control = null;
        }
        onEnable() {
            this._rig = this.owner.getComponent(Laya.RigidBody), this._cir = this.owner.getComponent(Laya.BoxCollider);
        }
        initDate(e) {
            this._control = e, this.owner.getChildByName("img").skin = "game/m_dropIce.png",
                this.data = {
                    type: 3,
                    chilidtype: 1
                };
        }
        onUpdate() {}
        onTriggerEnter(e, t, i) {
            let n = this.owner;
            "cupground" != e.label && "iceground" != e.label && "itembox" != e.label || 0 != this.IsAdd ? "ground" == e.label && 0 == this.IsRemove && (Be.vibrateShort(),
                n.removeSelf(), this.IsRemove = !0) : (Be.vibrateShort(), this.IsAdd = !0, this._control.GameDate.push(this.data),
                this._control.SpDate.push(this.owner));
        }
        onDisable() {}
    }
    class $ extends Laya.Script {
        constructor() {
            super(), this.level = 1, this.restitutionCnt = 2, this.addscore = 0, this.IsAdd = !1,
                this.IsRemove = !1, this._rig = null, this._cir = null, this.data = null, this._control = null;
        }
        onEnable() {
            this._rig = this.owner.getComponent(Laya.RigidBody), this._cir = this.owner.getComponent(Laya.BoxCollider);
        }
        initDate(e, t) {
            this._control = t;
            let i = this.owner.getChildByName("img");
            6 == e && (i.skin = "game/m_dropblackSugar.png"), 7 == e && (i.skin = "game/m_dropredSugar.png"),
                this.data = {
                    type: 2,
                    chilidtype: e
                };
        }
        onUpdate() {}
        onTriggerEnter(e, t, i) {
            let n = this.owner;
            "cupground" != e.label && "iceground" != e.label && "itembox" != e.label || 0 != this.IsAdd ? "ground" == e.label && 0 == this.IsRemove && (Be.vibrateShort(),
                n.removeSelf(), this.IsRemove = !0) : (Be.vibrateShort(), this.IsAdd = !0, this._control.GameDate.push(this.data),
                this._control.SpDate.push(this.owner));
        }
        destroyBox() {
            var e = this.owner;
            let t = Laya.Pool.getItemByCreateFun("effect", this.createEffect, this);
            t.pos(e.x, e.y), e.parent.addChild(t), t.play(0, !0);
            let i = this._control.BoxList.indexOf(e);
            this._control.BoxList.splice(i, 1), e.removeSelf(), m.Instance.playSound(u.destroy);
        }
        createEffect() {
            let e = new Laya.Animation();
            return e.loadAnimation("test/TestAni.ani"), e.on(Laya.Event.COMPLETE, null, function() {
                e.removeSelf(), Laya.Pool.recover("effect", e);
            }), e;
        }
        onDisable() {}
    }
    class ee {
        constructor(e) {
            this.gameobject = null, this.AniIndex = 0, this.MaxIndex = 15, this.addX = 0, this.addY = 0,
                this.posX = 0, this.posY = 0, this.IsLeft = 1, this._Img = null;
            let t = Laya.loader.getRes(T.RES_WaterFullAniItem);
            this.gameobject = t.create(), Math.random() > .5 ? (this.IsLeft = -1, this.MaxIndex = -10 * Math.random() - 100) : this.MaxIndex = 10 * Math.random() + 60,
                this.AniIndex = 100 * Math.random() + 100, this._Img = this.gameobject.getChildAt(0),
                this.changeColorFilter(this._Img, e);
            let i = .5 * Math.random() + .5;
            this._Img.scale(i, i), Laya.timer.frameLoop(1, this, this.showAni);
        }
        setPos(e, t) {
            this.gameobject.pos(e + this.MaxIndex, t, !0), this.posX = e + this.MaxIndex, this.posY = t;
        }
        changeColorFilter(e, t) {
            let i;
            switch (t) {
                case 1:
                    i = [255, 0, 0];
                    break;

                case 2:
                    i = [255, 229, 0];
                    break;

                case 3:
                    i = [0, 122, 195];
            }
            this.showColorFilter(e, i);
        }
        showColorFilter(e, t) {
            var i = [t[0] / 255, 0, 0, 0, 0, t[1] / 255, 0, 0, 0, 0, t[2] / 255, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                n = new Laya.ColorFilter(i);
            e.filters = [n];
        }
        showAni() {
            this.addX += 15 * this.IsLeft, this.addY = this.addX * this.addX / this.AniIndex,
                this.gameobject.pos(this.posX + this.addX, this.posY + this.addY), this.addY <= 0 && (Laya.timer.clear(this, this.showAni),
                    this.destroy());
        }
        destroy() {
            this.gameobject.removeSelf(), this.gameobject.destroy();
        }
    }
    class te {
        constructor(e) {
            this.gameobject = null, this.AniIndex = 0;
            let t = Laya.loader.getRes(T.RES_DropWaterAniItem);
            this.gameobject = t.create();
            for (let t = 0; t < 7; t++) {
                let i = this.gameobject.getChildAt(t);
                i.visible = !1, this.changeColorFilter(i, e);
            }
            Laya.timer.frameLoop(1, this, this.showAni);
        }
        setPos(e, t) {
            this.gameobject.pos(e, t, !0);
        }
        changeColorFilter(e, t) {
            let i;
            switch (t) {
                case 1:
                    i = [255, 0, 0];
                    break;

                case 2:
                    i = [255, 229, 0];
                    break;

                case 3:
                    i = [0, 122, 195];
            }
            this.showColorFilter(e, i);
        }
        showColorFilter(e, t) {
            var i = [t[0] / 255, 0, 0, 0, 0, t[1] / 255, 0, 0, 0, 0, t[2] / 255, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                n = new Laya.ColorFilter(i);
            e.filters = [n];
        }
        showAni() {
            if (0 != this.AniIndex) {
                this.gameobject.getChildAt(this.AniIndex - 1).visible = !1;
            }
            let e = this.gameobject.getChildAt(this.AniIndex);
            this.AniIndex++, e.visible = !0, this.AniIndex >= 7 && (Laya.timer.clear(this, this.showAni),
                this.destroy());
        }
        destroy() {
            this.gameobject.removeSelf(), this.gameobject.destroy();
        }
    }
    class ie extends Laya.Script {
        constructor() {
            super(), this.level = 1, this.restitutionCnt = 2, this.Color = 0, this._rig = null,
                this._cir = null, this.waterImg = null, this.data = null, this._scene = null, this._control = null;
        }
        onEnable() {
            this._rig = this.owner.getComponent(Laya.RigidBody), this._cir = this.owner.getComponent(Laya.CircleCollider);
        }
        onUpdate() {}
        initDate(e, t, i) {
            this.Color = e, this._control = i, this._scene = t, this.waterImg = this.owner.getChildByName("img"),
                1 == e && (this.waterImg.skin = "game/m_waterred.png"), 2 == e && (this.waterImg.skin = "game/m_wateryellow.png"),
                3 == e && (this.waterImg.skin = "game/m_waterbule.png"), this.data = {
                    type: 1,
                    chilidtype: e
                }, this._scene.createDropWaterCnt++;
        }
        onTriggerEnter(e, t, i) {
            Date.now() > this._scene.PlayWaterSoundTime && (m.Instance.playSound(u.water), this._scene.PlayWaterSoundTime = Date.now() + 1e3);
            let n = this.owner;
            "cupground" == e.label || "iceground" == e.label || "waterground" == e.label ? (Be.vibrateShort(),
                n.removeSelf(), this._scene._addTea += 1, 10 === this._scene._addTea && Laya.timer.frameLoop(1, this._scene, this._scene.updateAni),
                this._scene._addTea <= 59 ? (this._control.GameDate.push(this.data), this._control.SpDate.push(n),
                    this._scene.ValCnt = 60, this.Color != this._scene.NowColor && this._scene.IsFirstColor ? this._scene.addChangeWater(this.Color) : this._scene.ChangeWaterColor = this.Color,
                    2 == Me.Instance.level && this._scene.createDropWaterCnt >= 30 && this._scene.fingerImg.visible && (this._scene.openBtnInBottom(),
                        this._scene.BottomBtnArr[0].off(Laya.Event.MOUSE_DOWN, this._control, this._control.onMouseDownBtn),
                        this._scene.BottomBtnArr[0].off(Laya.Event.MOUSE_UP, this._control, this._control.onMouseUpBtn),
                        this._control.onMouseUpBtn(), this._scene.fingerImg.visible = !1, this._scene.showfinger2())) : (Date.now() > this._scene.createFullWaterTime && (this._scene.ValCnt = 60,
                        this.creatFullWater()), 1 == Me.Instance.level && this._scene.fingerImg.visible && (this._scene.fingerImg.visible = !1,
                        this._scene.showfingerReady(), this._scene.Ready.on(Laya.Event.CLICK, this._scene, this._scene.ReadyGame)),
                    2 == Me.Instance.level && this._scene.fingerImg2.visible && (this._scene.fingerImg2.visible = !1,
                        this._scene.showfingerReady(), this._scene.Ready.on(Laya.Event.CLICK, this._scene, this._scene.ReadyGame))),
                this._scene._addTea = Math.min(this._scene._addTea, 59), this._scene.addColorImg(this.Color),
                this._scene.IsFirstColor || (this._scene.IsFirstColor = !0, this._scene.NowColor = this.Color,
                    this._scene.changeColorFilter(this.Color, this._scene.TeaImg1)), Date.now() > this._scene.createDropWaterTime && this._scene._addTea >= 10 && this.destroyBox()) : "ground" == e.label && (n.removeSelf(),
                Be.vibrateShort());
        }
        creatFullWater() {
            let e = this.owner,
                t = new ee(this.Color);
            t.setPos(e.x, e.y), this._scene.gameBox.addChild(t.gameobject);
        }
        destroyBox() {
            this.owner;
            let e = new te(this.Color);
            e.setPos(this._scene.cup.x, this._scene.waterChangeGround.y + Laya.stage.height - 229 - 70),
                this._scene.createDropWaterTime = Date.now() + 200, this._scene.gameBox.addChild(e.gameobject);
        }
        onDisable() {}
    }
    class ne extends Laya.Script {
        constructor() {
            super(), this.createBoxInterval = 1e3, this._time = 0, this._started = !1, this.BoxList = [],
                this.outLineTime = 0, this.ComboCnt = 0, this.GameDate = [], this.SpDate = [], this.MouseDownTime = 0,
                this.CreatBoxTime = 0, this.IsCreatBox = !1, this.CurBoxType = 0, this.MoveSpeed = .5,
                this.IsMove = !1, this.MovePos = 0, this.GameTime = 0, this.gameKeyBoxCnt = 0, this.ShowKeyBox = !1,
                this._gameBox = null, this.dropBox = null, this.dropBoxIce = null, this.dropWater = null,
                this.dropBoxSugar = null, this.btnMask = null, this.longResult = null, this.shortResult = null,
                this._scene = null;
        }
        initDate(e) {
            this._scene = e;
        }
        onEnable() {
            this._time = Date.now(), this._gameBox = this.owner.getChildByName("UI").getChildByName("cupBox").getChildByName("gameBox"),
                this._gameBox.height = Laya.stage.height, this._gameBox.y = this._gameBox.y - Laya.stage.height + 1280;
        }
        onUpdate() {}
        createWaterBox(e) {
            if (this.dropWater) {
                let t = this.dropWater.create();
                t.getComponent(ie).initDate(e, this._scene, this);
                let i = this.randomPos();
                t.pos(this._scene.TeaImgBtn.x + 214 + i - this._scene.RandomSenceMovePos + this.MovePos - 228, this._scene.TeaImgBtn.y + 129),
                    this._gameBox.addChild(t);
            }
        }
        randomPos() {
            let e = 30 * Math.random(),
                t = 1;
            return Math.random() > .5 && (t = -1), e *= t;
        }
        createBox(e) {
            let t = this.dropBox.create();
            t.getComponent(Q).initDate(e, this);
            let i = this.randomPos();
            t.pos(this._scene.TeaImgBtn.x + 214 + i - this._scene.RandomSenceMovePos + this.MovePos - 228, this._scene.TeaImgBtn.y + 129),
                this._gameBox.addChild(t);
        }
        createIceBox() {
            let e = this.dropBoxIce.create();
            e.getComponent(J).initDate(this);
            let t = this.randomPos();
            e.pos(this._scene.TeaImgBtn.x + 214 + t - this._scene.RandomSenceMovePos + this.MovePos - 228, this._scene.TeaImgBtn.y + 129),
                this._gameBox.addChild(e);
        }
        createSugarBox(e) {
            let t = this.dropBoxSugar.create();
            t.getComponent($).initDate(e, this);
            let i = this.randomPos();
            t.pos(this._scene.TeaImgBtn.x + 214 + i - this._scene.RandomSenceMovePos + this.MovePos - 228, this._scene.TeaImgBtn.y + 129),
                this._gameBox.addChild(t);
        }
        createRedWater() {
            this.createWaterBox(1), this._scene.Color = 1;
        }
        createYellowWater() {
            this.createWaterBox(2), this._scene.Color = 2;
        }
        createBuleWater() {
            this.createWaterBox(3), this._scene.Color = 3;
        }
        IceBox() {
            this.createIceBox();
        }
        onMouseDownBtn(e) {
            m.Instance.playUIClick(), this.createTea(e), this.IsCreatBox = !0, this.CurBoxType = e,
                this.CreatBoxTime = 0;
        }
        onMouseUpBtn() {
            this.IsCreatBox = !1;
        }
        createTea(e) {
            switch (e) {
                case A.black:
                    this.createBox(e);
                    break;

                case A.blacksugar:
                    this.createSugarBox(e);
                    break;

                case A.bluewater:
                    this.createBuleWater();
                    break;

                case A.green:
                    this.createBox(e);
                    break;

                case A.ice:
                    this.createIceBox();
                    break;

                case A.red:
                    this.createBox(e);
                    break;

                case A.redsugar:
                    this.createSugarBox(e);
                    break;

                case A.redwater:
                    this.createRedWater();
                    break;

                case A.write:
                    this.createBox(e);
                    break;

                case A.yellowwater:
                    this.createYellowWater();
                    break;

                case A.yellow:
                    this.createBox(e);
            }
        }
        createEffect() {
            let e = new Laya.Animation();
            return e.loadAnimation("test/TestAni.ani"), e.on(Laya.Event.COMPLETE, null, function() {
                e.removeSelf(), Laya.Pool.recover("effect", e);
            }), e;
        }
        NextGame() {
            if (this._scene.chooseBox) {
                this._scene.KeyCnt = 0,
                    this._scene.showKeyBox(), this._scene.chooseBox = !1, P.Instance.openUI(be.Reward)
            }
            this._scene.ResultBox.visible = !1,
                this._scene.MainBox.visible = !0;
            Laya.timer.clear(this._scene, this._scene.updateAni), this.restGame();
        }
        clearGame() {
            Laya.timer.clear(this, this.update), this._scene.flyKey.off("click", this._scene, this._scene.addflyBox),
                this._scene.flyKey.visible = !1, this._scene.flyKey.x = 0, this._scene.flyKey.y = 180;
        }
        restGame() {
            this.clearGame(), this.IsMove = !1, this._scene.zzBox.removeChildren(), this._scene.HBox1.removeChildren(),
                this._scene.HBox2.removeChildren(), this._scene.NextTeaBox.removeChildren(), this._scene.ChangeWaterCnt = 0,
                this._scene.ChangeWaterImgCnt = 0, this._scene.ChangeWaterColor = 0, this._scene.waterChangeGround.y = 0,
                this._scene.IsFirstColor = !1;
            for (let e = this._scene.BottomBtnArr.length - 1; e >= 0; e--) this._scene.BottomBtnArr[e].destroy();
            for (let e = this._scene.ShowZZCfg.length - 1; e >= 0; e--) this._scene.ShowZZCfg[e].destroy();
            if (this._scene.ShowZZCfg = [], this._scene.BottomBtnArr = [], this._gameBox.removeChildren(),
                this.GameDate = [], this._scene.TeaCnt = 0, this._scene._addTea = 0, this._scene.TeaImg1.skin = "",
                this._scene.ChangeWaterImgArr.length > 0) {
                for (let e = this._scene.ChangeWaterImgArr.length - 1; e > 0; e--) this._scene.ChangeWaterImgArr[e].destroy();
                this._scene.ChangeWaterImgArr = [];
            }
            this.onMouseUpBtn(), Laya.timer.once(1e3, this, this.stopGame), this.gameKeyBoxCnt = 0,
                this._scene.showResultBox.removeChildren(), this._scene.IceGround.y = 0, this._scene.loadScene();
        }
        clearrig() {
            if (0 == this.SpDate.length) return;
            this._gameBox.removeChildren(), this.MovePos = 0;
            let e, t = null,
                i = null;
            for (let n = this.SpDate.length - 1; n >= 0; n--) {
                if (i = "DropWater" == this.SpDate[n].name || "DropBox" == this.SpDate[n].name ? this.SpDate[n].getComponent(Laya.CircleCollider) : this.SpDate[n].getComponent(Laya.BoxCollider),
                    t = this.SpDate[n].getComponent(Laya.RigidBody), i.destroy(), t.destroy(), Laya.Physics.I.world.DestroyBody(t.body),
                    "DropWater" != this.SpDate[n].name && ("DropBox" == this.SpDate[n].name ? e = this.SpDate[n].getComponent(Q) : "DropBoxIce" == this.SpDate[n].name ? e = this.SpDate[n].getComponent(J) : "DropBoxSuger" == this.SpDate[n].name && (e = this.SpDate[n].getComponent($)),
                        0 == e.IsRemove && this.SpDate[n].y > Laya.stage.height - 248 - 275 - 50)) {
                    let e = this.SpDate[n].getChildByName("img");
                    e.x = this.SpDate[n].x, e.y = this.SpDate[n].y, e.rotation = this.SpDate[n].rotation,
                        this._gameBox.addChild(e);
                }
                this.SpDate[n].destroy();
            }
            this.SpDate = [];
        }
        startGame() {
            this._started = !0, this.MovePos = 0, this.IsMove = !0, Laya.timer.frameLoop(1, this, this.update)
        }
        update() {
            this.ShowKeyBox ? (this._scene.flyKey.x++, this._scene.flyKey.y = 20 * Math.sinh(Math.sin(this._scene.flyKey.x / 20)) + 180,
                this._scene.flyKey.x > Laya.stage.width - 100 && (this.ShowKeyBox = !1, this._scene.flyKey.x = 0,
                    this._scene.flyKey.visible = !1)) : (this.GameTime++, this.GameTime % 300 == 0 && this.gameKeyBoxCnt <= 3 && (this.gameKeyBoxCnt++,
                this.ShowKeyBox = !0, this._scene.createKeyBox(0))), this.IsCreatBox && (this.CreatBoxTime++,
                this.CreatBoxTime % 3 == 0 && this.createTea(this.CurBoxType)), Me.Instance.IsRandomScene && this.IsMove && (this.MovePos += this.MoveSpeed,
                this._scene.cupBox.centerX -= this.MoveSpeed, this._scene.IceGround.x -= this.MoveSpeed,
                this._scene.downCollider.x -= this.MoveSpeed, this._scene.leftCollider.x -= this.MoveSpeed,
                this._scene.rightCollider.x -= this.MoveSpeed, this._scene.waterChangeGround.x -= this.MoveSpeed,
                this.MovePos >= Laya.stage.width - this._scene.cup.width && (Laya.timer.clear(this, this.update),
                    this._scene.ReadyGame()));
        }
        stopGame() {
            this._started = !1;
        }
    }
    ne._instance = null;
    class se {
        static CloneJson(e, t = 0, i = e.length) {
            var n = [];
            for (let s = t; s < i; s++) n.push(e[s]);
            return n;
        }
        static SplitToStr(e, t) {
            var i = [],
                n = e.toString().split(t);
            for (let e = 0; e < n.length; e++) i.push(n[e]);
            return i;
        }
        static deltaTime() {
            var e = Laya.timer.delta / 1e3;
            return e > .5 ? .03 : e;
        }
        static NumberInRange(e, t, i) {
            return e <= i && e >= t;
        }
        static getCurrentDate() {
            var e = new Date();
            return e.getFullYear() + "年" + (e.getMonth() + 1) + "月" + e.getDate() + "日";
        }
        static Clamp(e, t, i) {
            return e >= i ? i : e <= t ? t : e;
        }
        static Clamp01(e) {
            return e < 0 ? 0 : e > 1 ? 1 : e;
        }
        static Angle(e, t) {
            var i = new Laya.Vector3(),
                n = new Laya.Vector3();
            return Laya.Vector3.normalize(e, i), Laya.Vector3.normalize(t, n), 57.29578 * Math.acos(this.Clamp(this.Dot(this.Normalized(e), this.Normalized(t)), -1, 1));
        }
        static Distance(e, t) {
            return Laya.Vector3.distance(e, t);
        }
        static Add(e, t) {
            var i = new Laya.Vector3();
            return Laya.Vector3.add(e, t, i), i;
        }
        static Less(e, t) {
            return new Laya.Vector3(e.x - t.x, e.y - t.y, e.z - t.z);
        }
        static Multiply(e, t) {
            return new Laya.Vector3(e.x * t, e.y * t, e.z * t);
        }
        static Lerp(e, t, i) {
            var n = new Laya.Vector3();
            return Laya.Vector3.lerp(e, t, i, n), n;
        }
        static Divide(e, t) {
            return new Laya.Vector3(e.x / t, e.y / t, e.z / t);
        }
        static Normalized(e) {
            var t = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.normalize(e, t), t;
        }
        static magnitude(e) {
            return Math.sqrt(this.sqrMagnitude(e));
        }
        static sqrMagnitude(e) {
            var t = e.x * e.x + e.y * e.y;
            return t += e.z * e.z;
        }
        static clampMagnitude(e, t) {
            return this.sqrMagnitude(e) > t * t ? (e = this.Normalized(e), this.Multiply(e, t)) : e;
        }
        static random(e, t) {
            Math.random();
            return Math.round(e + Math.random() * (t - e));
        }
        static RandomPositionUnitSphere() {
            var e = this.RandomRange(-1, 1),
                t = this.RandomRange(-1, 1),
                i = this.RandomRange(-1, 1);
            return new Laya.Vector3(e, t, i);
        }
        static RandomRange(e, t) {
            Math.random();
            return e + Math.random() * (t - e);
        }
        static sortHandle(e, t) {
            return e > t ? 1 : -1;
        }
        static AddingZero(e, t) {
            var i = e.toString().length,
                n = Math.max(0, t - i),
                s = "";
            for (let e = 0; e < n; e++) s += "0";
            return s + e;
        }
        static isEmpty(e) {
            return void 0 === e || null == e || "" == e;
        }
        static Dot(e, t) {
            return Laya.Vector3.dot(e, t);
        }
        static showResultColor(e) {
            let t = "#000000";
            switch (e) {
                case 1:
                    t = "#3d2929";
                    break;

                case 2:
                    t = "#b9b9b9";
                    break;

                case 3:
                    t = "#3d2929";
                    break;

                case 4:
                    t = "#ffa4a4";
                    break;

                case 5:
                    t = "#d3eb64";
                    break;

                case 6:
                    t = "#533535";
                    break;

                case 7:
                    t = "#1e8d0c";
                    break;

                case 8:
                    t = "#45e3ff";
                    break;

                case 9:
                    t = "#ff0000";
                    break;

                case 10:
                    t = "#ffe500";
                    break;

                case 11:
                    t = "#007ac2";
            }
            return t;
        }
        static doUp(e, t, i, n, s, a, o) {
            e.needStop || Laya.Tween.to(i, {
                x: i.x + s,
                y: i.y + a
            }, n, null, Laya.Handler.create(this, this.doDown, [e, t, i, n, s, a, o], !0));
        }
        static doDown(e, t, i, n, s, a, o) {
            Laya.timer.once(o, this, (() => {
                Laya.Tween.to(i, {
                    x: i.x - s,
                    y: i.y - a
                }, n, null, Laya.Handler.create(this, this.doUp, [e, t, i, n, s, a, o], !0));
            }).bind(this));
        }
        static drawCupWater(e, t, i) {
            let n = [67, 55, 55];
            if (e + t + i == 0) return n;
            let s = 0,
                a = e + t + i,
                o = Math.floor(100 * e / a),
                r = Math.floor(100 * t / a),
                h = Math.floor(100 * i / a);
            return o < 15 && (n = (s = r / h) > 5.7 ? [0, 122, 195] : s > 1.5 ? [161, 190, 72] : s > .7 ? [70, 175, 160] : s > .17 ? [64, 160, 88] : [255, 229, 0]),
                r < 15 && (n = (s = o / h) > 5.7 ? [255, 0, 0] : s > 1.5 ? [228, 100, 51] : s > .7 ? [245, 191, 59] : s > .17 ? [232, 138, 50] : [255, 229, 0]),
                h < 15 && (n = (s = o / r) > 5.7 ? [255, 0, 0] : s > 1.5 ? [100, 56, 180] : s > .7 ? [207, 46, 140] : s > .17 ? [140, 82, 156] : [0, 122, 195]),
                n;
        }
        static TransferStringToStrArr(e) {
            return e.toString().split(",");
        }
        static TransformPoint(e, t) {
            var i = new Laya.Vector3();
            return Laya.Vector3.transformQuat(t, e.rotation, i), Laya.Vector3.add(i, e.position, i),
                i;
        }
        static InverseTransformPoint(e, t) {
            var i = new Laya.Vector3();
            e.getRight(i);
            var n = new Laya.Vector3();
            e.getUp(n);
            var s = new Laya.Vector3();
            e.getForward(s);
            var a = new Laya.Vector3(-s.x, -s.y, -s.z),
                o = this.ProjectDistance(t, e.position, i),
                r = this.ProjectDistance(t, e.position, n),
                h = this.ProjectDistance(t, e.position, a);
            return new Laya.Vector3(o, r, h);
        }
        static ProjectDistance(e, t, i) {
            var n = new Laya.Vector3();
            Laya.Vector3.subtract(e, t, n);
            var s = this.Angle2(n, i) * Math.PI / 180,
                a = Laya.Vector3.distance(e, t);
            return a *= Math.cos(s);
        }
        static Angle2(e, t) {
            var i = (e.x * t.x + e.y * t.y + e.z * t.z) / (Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z) * Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z));
            return i < -1 && (i = -1), i > 1 && (i = 1), 180 * Math.acos(i) / Math.PI;
        }
        static TransferStringToNumberArr(e) {
            var t = [],
                i = e.toString().split(",");
            for (let e = 0; e < i.length; e++) t.push(parseFloat(i[e]));
            return t;
        }
        static ScoreToString(e) {
            var t = Math.ceil(e).toString();
            if (4 == t.length) t = (t = t.substring(0, 3)).substring(0, 1) + "." + t.substring(1, 3),
                t = parseFloat(t).toString() + "K";
            else if (5 == t.length) t = (t = t.substring(0, 3)).substring(0, 2) + "." + t.substring(2, 3),
                t = parseFloat(t).toString() + "K";
            else if (6 == t.length) t = (t = t.substring(0, 4)).substring(0, 3) + "." + t.substring(3, 4),
                t = parseFloat(t).toString() + "K";
            else if (t.length >= 7) {
                var i = t.length;
                t = (t = t.substring(0, i - 3)).substring(0, i - 6) + "." + t.substring(i - 6, i - 5),
                    t = parseFloat(t).toString() + "M";
            }
            return t;
        }
        static doSmall(e, t, i, n) {
            Laya.Tween.to(t, {
                scaleX: 1,
                scaleY: 1
            }, i, null, Laya.Handler.create(this, this.doLager, [e, t, i, n], !0));
        }
        static doLager(e, t, i, n) {
            Laya.Tween.to(t, {
                scaleX: n,
                scaleY: n
            }, i, null, Laya.Handler.create(this, this.doSmall, [e, t, i, n], !0));
        }
        static doScale(e, t) {
            Laya.Tween.to(e, {
                scaleX: t,
                scaleY: t
            }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, 100);
            }));
        }
        static UIdoScale(e) {
            Laya.Tween.from(e, {
                scaleX: 0,
                scaleY: 0
            }, 500, Laya.Ease.elasticOut);
        }
        static onClickWatchTV(e, t, i) {}
        static getCurrentTime() {
            return Date.parse(new Date().toString());
        }
        static transferSecondToDHM(e) {
            var t = Math.floor(e / 86400);
            e -= 86400 * t;
            var i = Math.floor(e / 3600);
            e -= 3600 * i;
            var n = Math.floor(e / 60),
                s = t > 0 ? " " + t + "天 " : "";
            return s += i > 0 ? i + "小时 " : "", s += n > 0 ? n + "分钟 " : "";
        }
        static quadEquationGetX(e, t, i) {
            let n = [],
                s = Math.pow(t, 2) - 4 * e * i;
            return s > 0 ? (n.push((-t + Math.sqrt(s)) / (2 * e)), n.push((-t - Math.sqrt(s)) / (2 * e))) : 0 == s && n.push(-t / (2 * e)),
                n;
        }
        static binaryEquationGetKB(e, t, i, n) {
            return [(t - n) / (e - i), (e * n - i * t) / (e - i)];
        }
        static getInsertPointBetweenCircleAndLine(e, t, i, n, s, a, o) {
            let r = se.binaryEquationGetKB(e, t, i, n),
                h = r[0],
                l = r[1],
                c = 1 + h * h,
                d = 2 * h * (l - a) - 2 * s,
                p = s * s + (l - a) * (l - a) - o * o,
                g = [];
            return se.quadEquationGetX(c, d, p).forEach(e => {
                let t = h * e + l;
                g.push({
                    x: e,
                    y: t
                });
            }), g;
        }
        static QuaternionXVector3(e, t) {
            var i = 2 * e.x,
                n = 2 * e.y,
                s = 2 * e.z,
                a = e.x * i,
                o = e.y * n,
                r = e.z * s,
                h = e.x * n,
                l = e.x * s,
                c = e.y * s,
                d = e.w * i,
                p = e.w * n,
                g = e.w * s,
                u = new Laya.Vector3();
            return u.x = (1 - (o + r)) * t.x + (h - g) * t.y + (l + p) * t.z, u.y = (h + g) * t.x + (1 - (a + r)) * t.y + (c - d) * t.z,
                u.z = (l - p) * t.x + (c + d) * t.y + (1 - (a + o)) * t.z, u;
        }
        static getCirclePosByAngle(e, t, i, n) {
            var s = new Laya.Vector2();
            return s.x = t + n * Math.sin(e * Math.PI / 180), s.y = i + n * Math.cos(e * Math.PI / 180),
                s;
        }
        static GetStageViewCrossPoint(e, t) {
            var i = new Laya.Point(0, 0),
                n = new Laya.Point(Laya.stage.width, 0),
                s = new Laya.Point(Laya.stage.width, Laya.stage.height),
                a = new Laya.Point(0, Laya.stage.height),
                o = this.GetIntersection(e, t, i, n);
            return null == o && (o = this.GetIntersection(e, t, n, s)), null == o && (o = this.GetIntersection(e, t, s, a)),
                null == o && (o = this.GetIntersection(e, t, a, i)), o;
        }
        static isInStageView(e, t) {
            return e >= 0 && e <= Laya.stage.width && t >= 0 && t <= Laya.stage.height;
        }
        static GetIntersection(e, t, i, n) {
            var s, a, o = e.x,
                r = e.y,
                h = t.x,
                l = t.y,
                c = i.x,
                d = i.y,
                p = n.x,
                g = n.y;
            if (o == h && c == p && o == c) return null;
            if (r == l && d == g && r == d) return null;
            if (o == h && c == p) return null;
            if (r == l && d == g) return null;
            if (o == h) s = o, a = (I = -(m = (g - d) / (p - c)) * c + d) + m * o;
            else if (c == p) {
                s = c, a = -(u = (l - r) / (h - o)) * o + r + u * c;
            } else {
                var u, m, I;
                a = (I = -(m = (g - d) / (p - c)) * c + d) + m * (s = (-(u = (l - r) / (h - o)) * o + r - I) / (m - u));
            }
            return this.IsInsideLine(e, t, s, a) && this.IsInsideLine(i, n, s, a) ? new Laya.Point(s, a) : null;
        }
        static IsInsideLine(e, t, i, n) {
            return (i >= e.x && i <= t.x || i >= t.x && i <= e.x) && (n >= e.y && n <= t.y || n >= t.y && n <= e.y);
        }
    }
    class ae extends Laya.Script {
        constructor() {
            super(), this.duquanColorSpeed = 3, this.duquanColor = 0, this.duquanColorImg = "",
                this.showWidth = 0, this.width = 389, this.height = 53, this.Passwidth = 0, this.lockwidth = 0,
                this.sprite = null, this.Locksprite = null, this.pass = null, this.passimg = null,
                this.iconImg = null;
        }
        onEnable() {
            this.sprite = this.owner.getChildByName("SP"), this.Locksprite = this.owner.getChildByName("LockSp"),
                this.pass = this.owner.getChildByName("pass"), this.passimg = this.owner.getChildByName("passimg"),
                this.iconImg = this.owner.getChildByName("img");
        }
        showReult(e, t) {
            this.sprite = this.owner.getChildByName("SP"), this.Locksprite = this.owner.getChildByName("LockSP"),
                this.pass = this.owner.getChildByName("pass"), this.passimg = this.owner.getChildByName("passimg"),
                this.iconImg = this.owner.getChildByName("img");
            let i = t.AllNum + t.AllwaterNum / 5 + t.AlliceNum;
            e > 8 && (i = t.AllwaterNum);
            let n = t.levelPassCfg[e - 1],
                s = t.ResultCfg[e - 1];
            this.iconImg.skin = t.choseImgInResultEum(e), this.Locksprite.width = this.width * s / i,
                this.Locksprite.width = Math.min(this.Locksprite.width, this.width), this.sprite.width = this.width * n / i,
                this.passimg.x = 170 + this.sprite.width, this.showWidth = Math.abs(this.sprite.width - this.Locksprite.width),
                this.showWidth = Math.min(this.showWidth, this.width), this.sprite.width - this.Locksprite.width >= 0 ? this.lockwidth = this.Locksprite.width : this.lockwidth = this.sprite.width,
                0 != n ? Math.abs((n - s) / n) < .2 ? (this.pass.skin = "game/m_ready.png", this.pass.size(61, 61)) : this.pass.skin = n - s > 0 ? "game/m_missing.png" : "game/m_toomuch.png" : s > 8 ? this.pass.skin = "game/m_toomuch.png" : (this.pass.skin = "game/m_ready.png",
                    this.pass.size(61, 61));
            let a = se.showResultColor(e);
            this.Locksprite.width = Math.min(this.Locksprite.width, this.width), this.Locksprite.graphics.clear(),
                this.Locksprite.graphics.drawRect(0, 0, this.Locksprite.width, 53, a), Laya.timer.frameLoop(1, this, this.update);
        }
        onUpdate() {}
        update() {
            this.duquanColor += this.duquanColorSpeed, this.duquanColor > 180 && (this.duquanColor = 180,
                    this.duquanColorSpeed *= -1), this.duquanColor <= 0 && (this.duquanColor = 0, this.duquanColorSpeed *= -1),
                this.syncDuquan("#" + this.duquanColor.toString(16) + "0000");
        }
        syncDuquan(e) {
            this.sprite.graphics.clear(), this.sprite.graphics.drawRect(this.lockwidth, 0, this.showWidth, 53, e);
        }
        onDisable() {
            Laya.timer.clear(this, this.update);
        }
    }
    class oe extends Laya.Script {
        constructor() {
            super(), this.duquanColorSpeed = 2, this.duquanColor = 0, this.duquanColorImg = "",
                this.showWidth = 0, this.width = 112, this.height = 39, this.Passwidth = 0, this.lockwidth = 0,
                this.sprite = null, this.Locksprite = null, this.pass = null, this.passimg = null,
                this.iconImg = null;
        }
        onEnable() {
            this.sprite = this.owner.getChildByName("SP"), this.Locksprite = this.owner.getChildByName("LockSp"),
                this.pass = this.owner.getChildByName("pass"), this.passimg = this.owner.getChildByName("passimg"),
                this.iconImg = this.owner.getChildByName("img");
        }
        showReult(e, t) {
            this.sprite = this.owner.getChildByName("SP"), this.Locksprite = this.owner.getChildByName("LockSp"),
                this.pass = this.owner.getChildByName("pass"), this.passimg = this.owner.getChildByName("passimg"),
                this.iconImg = this.owner.getChildByName("img");
            let i = t.AllNum + t.AllwaterNum / 5 + t.AlliceNum;
            e > 8 && (i = t.AllwaterNum);
            let n = t.levelPassCfg[e - 1],
                s = t.ResultCfg[e - 1];
            this.iconImg.skin = t.choseImgInResultEum(e), this.Locksprite.width = this.width * s / i,
                this.sprite.width = this.width * n / i, this.Locksprite.width = Math.min(this.Locksprite.width, this.width),
                this.passimg.x = 102 + this.sprite.width, this.showWidth = Math.abs(this.sprite.width - this.Locksprite.width),
                this.showWidth = Math.min(this.showWidth, this.width), this.sprite.width - this.Locksprite.width >= 0 ? this.lockwidth = this.Locksprite.width : this.lockwidth = this.sprite.width,
                0 != n ? Math.abs((n - s) / n) < .2 ? this.pass.skin = "game/m_ready.png" : (this.pass.skin = "game/m_cross2.png",
                    this.pass.size(40, 40)) : s > 8 ? (this.pass.skin = "game/m_cross2.png", this.pass.size(40, 40)) : this.pass.skin = "game/m_ready.png";
            let a = se.showResultColor(e);
            this.Locksprite.width = Math.min(this.Locksprite.width, this.width), this.Locksprite.graphics.clear(),
                this.Locksprite.graphics.drawRect(0, 0, this.Locksprite.width, 37, a), Laya.timer.frameLoop(1, this, this.update);
        }
        onUpdate() {}
        update() {
            this.duquanColor += this.duquanColorSpeed, this.duquanColor > 180 && (this.duquanColor = 180,
                    this.duquanColorSpeed *= -1), this.duquanColor <= 0 && (this.duquanColor = 0, this.duquanColorSpeed *= -1),
                this.syncDuquan("#" + this.duquanColor.toString(16) + "0000");
        }
        syncDuquan(e) {
            this.sprite.graphics.clear(), this.sprite.graphics.drawRect(this.lockwidth, 0, this.showWidth, 37, e);
        }
        onDisable() {
            Laya.timer.clear(this, this.update);
        }
    }
    class re extends e.gamemainUI {
        constructor() {
            super(), this._addscore = 0, this._addTea = 0, this.CanAddscore = !1, this.Color = 0,
                this.NowColor = 0, this.TeaCnt = 0, this.leftpos = 0, this.downpos = 0, this.down = !0,
                this.Val = .001, this.MoveXVal = .3, this.Val2 = 2e-4, this.ValCnt = 0, this.goLeft = 120,
                this.BottomBtnArr = [], this.BottomBtnCnt = 3, this.zzleft = 1, this.zzleftnum = 1,
                this.startReady = !1, this.movetime = 0, this.levelCfg = [A.redwater, A.bluewater, A.yellowwater, A.black],
                this.ResultCfg = [], this.levelPassCfg = [], this.AllNum = 0, this.AllwaterNum = 0,
                this.AlliceNum = 0, this.firstGame = !0, this.ChildSceneCnt = 1, this.ShowZZCfg = [],
                this.RandomSenceMovePos = 0, this.KeyCnt = 0, this.rankcfg = {
                    rank: 0,
                    name: null,
                    gold: 0,
                    val: 0
                }, this.chooseBox = !1, this.IsFirstColor = !1, this.createDropWaterTime = 0, this.createDropWaterCnt = 0,
                this.ChangeWaterCnt = 0, this.ChangeWaterColor = 0, this.ChangeWaterImgCnt = 0,
                this.ChangeWaterImgArr = [], this.createFullWaterTime = 0, this.PlayWaterSoundTime = 0,
                this.needStop = !1, this.zsConfig = null, this.zsbannerConfig = 0, this.zsjumpConfig = 0,
                this.zsnativeConfig = 0, this.zsShownativeConfig = 0, this.zs_banner_show_time = 0,
                this.zs_banner_banner_time = 0, this.IceGroundBox = null, this._control = null,
                this.levelCfg1 = null, this.isget1 = !1, this.isget2 = !1, this.zzFloat = null,
                this.zzYoulike = null, this.zzPic = null, this.fingerImg = null, this.fingerReadImg = null,
                this.fingerImg2 = null, Laya.MouseManager.multiTouchEnabled = !1;
        }
        init(e) {
            this.regiesterEvent(), ve.Instance.init(null), this._control = this.getComponent(ne),
                this._control.initDate(this), this.IceGroundBox = this.IceGround.getComponent(Laya.BoxCollider),
                this.isget1 = !1, this.loadScene(), this.showSkin(), Be.IsQutoutiao() && (this.moreGame.visible = !1,
                    this.box1.bottom = 150, this.box2.bottom = 338, this.box3.bottom = 342, this.box4.bottom = 379,
                    this.box5.bottom = 351, this.box6.bottom = 150, this.ground.bottom = 150, this.SharBtn.visible = !1,
                    this.NextBtn.centerX = 0);
        }
        showSkin() {
            let e = Re.Instance.getGameSkinId();
            this.SkinCntLab.text = Re.Instance.getUnlockSkinCount() + "/" + Re.Instance.getItemCfgLength();
            let t = Re.Instance.getItemCfg(e);
            this.gaiziImg.skin = t.ResIcon.replace(/game/g, "x"), this.UseSkinImg.skin = t.ResIcon;
        }
        loadScene() {
            this.MoveXVal = .3, this.goLeft = 60, this.IceGround.x = 0, this.MoveTeaMaskImg.pos(0, 0),
                this.MoveTeaMaskImg.size(501, 318), this.MoveTeaMaskImg.skin = "common/m_bg2.png",
                this.TeaMaskImg1.pos(-46, -64), this.TeaMaskImg1.size(351, 343), this.TeaMaskImg1.skin = "game/w_1.png",
                this.TeaImgBox.x = 130, this.TeaImgBox.scaleX = 1, this.TeaImgBox.scaleY = 1, this.downCollider.x = 274,
                this.leftCollider.x = 0, this.rightCollider.x = 45, this.MoveTeaMask.x = -123, this.waterChangeGround.x = 274,
                this.gaiziImg.visible = !1, this.gaiziImg.rotation = -20, this.SkinBtn.x = 0, this.RandomSenceMovePos = 0,
                this.ShowCupBox.visible = !0, this.showCupBg.visible = !0, this.ShowCupBox.centerX = 250,
                this.ShowCupBox.centerY = -260, this.showCupTitle.visible = !0, this.gameBox.scale(1, 1),
                this.gameBox.x = 0, this.cupBox.scale(1, 1), Be.IsQutoutiao() ? this.cupBox.bottom = 398 : this.cupBox.bottom = 438,
                this.cupBox.centerX = 0, this.levelCfg1 = V.Instance.getLevelCfg([Me.Instance.level - 1]),
                this.levelPassCfg = V.Instance.getPassCfg(Me.Instance.level - 1, null), this.createDropWaterCnt = 0,
                this.LevelName.text = "LEVEL " + Me.Instance.level, Me.Instance.IsRandomScene && this.loadrandomScene(),
                this.AllNum = 0, this.AllwaterNum = 0, this.AlliceNum = 0;
            for (let e = this.levelPassCfg.length - 1; e >= 0; e--) e >= 8 ? this.AllwaterNum += this.levelPassCfg[e] : 7 == e ? this.AlliceNum += this.levelPassCfg[e] : this.AllNum += this.levelPassCfg[e];
            this.GoldCnt.text = "" + Me.Instance.gold, this.BottomBtnCnt = this.levelCfg1.BtnType.length,
                1 == Me.Instance.level && (this.BottomBtnCnt = 1);
            let e = se.drawCupWater(this.levelPassCfg[8], this.levelPassCfg[10], this.levelPassCfg[9]);
            this.showColorFilter(this.levelcolor, e);
            let t = this.levelCfg1.IceNumber;
            0 == t ? (this.IceShow1.visible = !1, this.IceShow2.visible = !1) : t <= 11 ? (this.IceShow1.visible = !0,
                    this.IceShow2.visible = !1) : (this.IceShow1.visible = !1, this.IceShow2.visible = !0),
                this.drawZZInCup(), this.showBtnListPos(), this.FailColor1.graphics.clear(), this.FailColor2.graphics.clear(),
                this.showfailBox(), this._control._started = !1, this.showZZSDK(),

                Laya.stage.on(Laya.Event.CLICK, this, this.onTipClick);
            // this.onTipClick();
        }
        initallZZSDK() {}
        showinitZz() {
            if (ve.Instance.isOpenSDK()) {
                this.isget1 = !0;
                let e = Be.isLong() ? 200 : 170;
                this.zzFloat || (this.zzFloat = ve.Instance.addFloat(this.zzsdkBox, 0, e)), this.zzYoulike || (this.zzYoulike = ve.Instance.addYoulike(this.zzsdkBox, B.youlike1, 0));
            }
        }
        showshipinPage() {
            p.isshowShiPin || ve.Instance.checkbannerreshipin() && (p.isshowShiPin = !0, P.Instance.openUI(be.ShiPinView, {
                se: this
            }));
        }
        showZZSDK() {
            let e = this;
            this.showshipinPage(), ve.Instance.isOpenSDK() ? (e.zzsdkBox.visible = !0, e.moreGame.visible = ve.Instance._validAd,
                e.zzFloat && (e.zzFloat.visible = !0), e.zzYoulike && (e.zzYoulike.visible = !0)) : e.zzsdkBox.visible = !1;
        }
        loadrandomScene() {
            let e = Laya.stage.width / 2 - 132;
            this.RandomSenceMovePos = e, this.cupBox.centerX = e, this.IceGround.x = e, this.downCollider.x = 274 + e,
                this.leftCollider.x = e, this.rightCollider.x = 45 + e, this.waterChangeGround.x = 274 + e,
                this.LevelName.text = "CHALLENGE " + this.ChildSceneCnt;
            let t = [0, 0, 0],
                i = [9, 10, 11],
                n = 0,
                s = [],
                a = [1, 2, 3, 4, 5, 6, 7, 8],
                o = null;
            if (1 == this.ChildSceneCnt) t[Math.floor(3 * Math.random())] = 60;
            else {
                let e = Math.floor(3 * Math.random()),
                    i = 20 * (Math.floor(2 * Math.random()) + 1);
                0 == e && (t[1] = i, t[2] = 60 - i), 1 == e && (t[0] = i, t[2] = 60 - i), 2 == e && (t[0] = i,
                    t[1] = 60 - i);
            }
            for (let e = 0; e < 3; e++)
                if (Math.random() < .9) {
                    let e = Math.floor(Math.random() * a.length) + 1,
                        t = a[e - 1];
                    if (i.push(t), 8 == t) n = 11 * (Math.floor(2 * Math.random()) + 1);
                    else {
                        let e = {
                            type: t,
                            num: 8 * (Math.floor(2 * Math.random()) + 1)
                        };
                        s.push(e);
                    }
                    a.splice(e - 1, 1);
                }
            o = {
                BtnType: i,
                RedColorNumber: t[0],
                YellowColorNumber: t[1],
                BlueColorNumber: t[2],
                PearlType: s,
                IceNumber: n
            }, this.levelCfg1 = o, this.levelPassCfg = V.Instance.getPassCfg(Me.Instance.level - 1, o);
        }
        showfailBox() {
            let e = this.levelPassCfg[8],
                t = this.levelPassCfg[9],
                i = e / 60 * 66,
                n = t / 60 * 66,
                s = this.levelPassCfg[10] / 60 * 66;
            0 == e ? 0 == t ? this.FailColor1.graphics.drawRect(0, 0, 8, s, "#007ac2") : (this.FailColor1.graphics.drawRect(0, 66 - n, 8, n, "#ffe500"),
                this.FailColor2.graphics.drawRect(0, 66 - s, 8, s, "#007ac2")) : 0 == t ? (this.FailColor1.graphics.drawRect(0, 66 - i, 8, i, "#ff0000"),
                this.FailColor2.graphics.drawRect(0, 66 - s, 8, s, "#007ac2")) : (this.FailColor1.graphics.drawRect(0, 66 - i, 8, i, "#ff0000"),
                this.FailColor2.graphics.drawRect(0, 66 - n, 8, n, "#ffe500"));
        }
        choseDropImgInResultEum(e) {
            let t = Ae,
                i = "game/m_blackZZ.png";
            for (let n = 0; n < t.length; n++)
                if (e == n + 1) return i = t[n];
            return i;
        }
        showBtnListPos() {
            let e = this.BottomBtnCnt;
            if (e <= 3 ? (this.HBox2.visible = !1, this.HBox1.centerY = 0) : (this.HBox2.visible = !0,
                    this.HBox1.centerY = -60, this.HBox2.centerY = 50), 1 == e) {
                let e = this.levelCfg1.BtnType[0],
                    t = this.createBtn(e);
                t.centerX = 0, this.HBox1.addChild(t), this.BottomBtnArr.push(t);
            }
            2 == e && this.addTwoImageInBox(this.HBox1), 3 == e && this.addThreeImageInBox(this.HBox1),
                4 == e && (this.addTwoImageInBox(this.HBox1), this.addTwoImageInBox(this.HBox2)),
                5 == e && (this.addThreeImageInBox(this.HBox1), this.addTwoImageInBox(this.HBox2)),
                6 == e && (this.addThreeImageInBox(this.HBox1), this.addThreeImageInBox(this.HBox2)),
                1 == Me.Instance.level && this.showfinger(276), 2 == Me.Instance.level && this.showfinger(176);
        }
        addThreeImageInBox(e) {
            let t, i = !1;
            e == this.HBox2 && (i = !0);
            for (let n = 0; n < 3; n++) {
                t = i ? this.levelCfg1.BtnType[n + 3] : this.levelCfg1.BtnType[n];
                let s = this.createBtn(t);
                e.addChild(s), this.BottomBtnArr.push(s), s.centerX = 0 == n ? -200 : 1 == n ? 0 : 200;
            }
        }
        createBtn(e) {
            if (e >= 9) {
                let t = Laya.loader.getRes(T.RES_BtnMask).create(),
                    i = t.getChildByName("img");
                return t.dataSource = e, i.skin = this.choseImgInEum(e), t;
            }
            let t = new Laya.Image(),
                i = new Laya.Image();
            return i.skin = "game/m_btnBg.png", i.addChild(t), i.dataSource = e, t.skin = this.choseImgInEum(e),
                t.pos(7.25, 2.25), i;
        }
        choseImgInEum(e) {
            let t = Te,
                i = "game/m_blackZZ.png";
            for (let n = 0; n < t.length; n++)
                if (e == n + 1) return i = t[n];
        }
        addTwoImageInBox(e) {
            let t, i = !1,
                n = this.BottomBtnCnt - 2;
            e == this.HBox2 && (i = !0);
            for (let s = 0; s < 2; s++) {
                t = i ? this.levelCfg1.BtnType[s + n] : this.levelCfg1.BtnType[s];
                let a = this.createBtn(t);
                e.addChild(a), this.BottomBtnArr.push(a), a.centerX = 0 == s ? -100 : 100;
            }
        }
        addzzInCup(e, t, i) {
            if (null == e) return;
            let n = e.type,
                s = new Laya.Image();
            s.skin = this.choseDropImgInResultEum(n), s.size(8, 8), t <= 24 ? (s.centerY = 28 - 8 * Math.floor(t / 8),
                    s.centerX = t % 8 >= 4 ? 8 * Math.floor(t % 8 - 4) + 4 : -1 * (8 * Math.floor(t % 8) + 4)) : (s.centerY = 28 - 8 * Math.floor((t - 25) / 9 + 3),
                    s.centerX = (t - 25) % 9 > 4 ? 8 * Math.floor((t - 25) % 9 - 4) : 8 * Math.floor((t - 25) % 9) * -1),
                this.zzBox.addChild(s), this.ShowZZCfg.push(s);
        }
        drawZZInCup() {
            let e = this.levelCfg1.PearlType;
            if (null == e || 0 == e.length) return;
            let t = 0,
                i = 0,
                n = 0,
                s = 0,
                a = 0,
                o = Math.min(3, e.length),
                r = null,
                h = null,
                l = null;
            for (let c = 0; c < o; c++) {
                let o = e[c];
                s += o.num, 0 == c && (t = o.num, r = o, a++), 1 == c && (i = o.num, h = o, a++),
                    2 == c && (n = o.num, l = o, a++);
            }
            for (let e = 0; e < s; e++) {
                let s = e % a;
                0 == s && (t > 0 ? (t--, this.addzzInCup(r, e, this.zzBox)) : i > 0 ? (i--, this.addzzInCup(h, e, this.zzBox)) : (n--,
                        this.addzzInCup(l, e, this.zzBox))), 1 == s && (i > 0 ? (i--, this.addzzInCup(h, e, this.zzBox)) : t > 0 ? (t--,
                        this.addzzInCup(r, e, this.zzBox)) : (n--, this.addzzInCup(l, e, this.zzBox))),
                    2 == s && (n > 0 ? (n--, this.addzzInCup(l, e, this.zzBox)) : t > 0 ? (t--, this.addzzInCup(r, e, this.zzBox)) : (i--,
                        this.addzzInCup(h, e, this.zzBox)));
            }
        }
        showColorFilter(e, t) {
            var i = [t[0] / 255, 0, 0, 0, 0, t[1] / 255, 0, 0, 0, 0, t[2] / 255, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                n = new Laya.ColorFilter(i);
            e.filters = [n];
        }
        uninit() {
            this.unregiesterEvent(), this.timer.clearAll(this), this.zzFloat && this.zzFloat.clear(),
                this.zzYoulike && this.zzYoulike.clear();
        }
        updateAni() {
            if (this.ValCnt > 0) return this.ValCnt--, void(this.ValCnt > 45 ? (this.TeaImgBox.scaleX += 6 * this.Val,
                this.TeaImgBox.scaleY -= 6 * this.Val2, this.TeaImgBox.scaleX = Math.min(this.TeaImgBox.scaleX, 1 + 6 * this.Val * 30),
                this.TeaImgBox.scaleY = Math.max(this.TeaImgBox.scaleY, 1 - 6 * this.Val2 * 30)) : (this.TeaImgBox.scaleX -= 2 * this.Val,
                this.TeaImgBox.scaleY += 2 * this.Val2, this.TeaImgBox.scaleX = Math.max(this.TeaImgBox.scaleX, 1),
                this.TeaImgBox.scaleY = Math.min(this.TeaImgBox.scaleY, 1)));
            this.down ? (this.TeaImgBox.x -= this.MoveXVal, this.TeaImgBox.scaleX += 2 * this.Val,
                this.TeaImgBox.scaleY -= 2 * this.Val2, this.downpos++, this.downpos >= this.goLeft && (120 != this.goLeft && (this.goLeft = 120),
                    this.down = !1, this.downpos = 0)) : (this.downpos++, this.TeaImgBox.x += this.MoveXVal,
                this.TeaImgBox.scaleX -= 2 * this.Val, this.TeaImgBox.scaleY += 2 * this.Val2, this.downpos >= this.goLeft && (this.down = !0,
                    this.downpos = 0));
        }
        regiesterEvent() {
            d.Instance.on(s.RefZZSDKManager, this, this.initallZZSDK),
                Laya.MouseManager.multiTouchEnabled = !1,
                this.NextBtn.on(Laya.Event.CLICK, this, this.openZsReult),
                this.SkinBtn.on(Laya.Event.CLICK, this, this.skinClickHandle),
                this.SignBtn.on(Laya.Event.CLICK, this, this.SignClickHandle);
            d.Instance.on(s.PlayerGoodsUpdate, this, this.onPlayerGoodsUpdate);
        }
        onPlayerGoodsUpdate() {
            // console.log(" Me.Instance.gold", Me.Instance.gold);
            // this.ResultGold.text = "" + Me.Instance.gold;
            this.GoldCnt.text = "" + Me.Instance.gold
        }
        unregiesterEvent() {
            d.Instance.off(s.PlayerGoodsUpdate, this, this.onPlayerGoodsUpdate);
            d.Instance.off(s.RefZZSDKManager, this, this.initallZZSDK),
                this.NextBtn.off(Laya.Event.CLICK, this, this.openZsReult),
                this.SkinBtn.off(Laya.Event.CLICK, this, this.skinClickHandle),
                this.SignBtn.off(Laya.Event.CLICK, this, this.SignClickHandle);
        }
        onSharBtn() {
            m.Instance.playUIClick(), R.Instance.showVideoOrrShare(y.HomeShare);
        }
        onTuiBack() {
            m.Instance.playUIClick(), ve.Instance.addInterFullList(this.zzsdkBox, B.back3),
                q.Instance.onBack(B.back3);
        }
        onMoreGame() {
            m.Instance.playUIClick(), ve.Instance.openInterFull(), q.Instance.onBtn(B.coin4);
        }
        restGame() {
            m.Instance.playUIClick(), this._control.restGame();
        }
        openZsReult() {
            m.Instance.playUIClick(), P.Instance.openUI(be.Result, {
                se: this,
                cot: this._control
            });
        }
        update() {}
        didShow() {
            this.timer.once(100, this, this.doShowView);
        }
        didHide() {
            this.timer.clear(this, this.doShowView);
        }
        doShowView() {
            let e = this.checkOffline();
            e = this.updateSignTip(!e);
        }
        onShowWX() {
            Laya.timer.frameOnce(1, this, this.checkOffline);
        }
        checkOffline() {
            let e = H.Instance.getOfflineTimeCoin();
            return e > 0 && (P.Instance.openUI(be.Offline, {
                coin: e,
                se: this
            }), !0);
        }
        updateSignTip(e = !0) {
            let t = V.Instance.getSignDayInfo(),
                i = t.signed > 0;
            this.signRed.visible = !i;
            let n = !1;
            return t.show && (n = !0), !(!e || n || i || R.Instance.wxCheck() || p.firstTimePlayer) && (V.Instance.saveAutoShowSign(),
                P.Instance.openUI(be.DaySign, this), !0);
        }
        SignClickHandle() {
            m.Instance.playUIClick(), P.Instance.openUI(be.DaySign, this), q.Instance.onBtn(B.coin1);
        }
        skinClickHandle() {
            m.Instance.playUIClick(), P.Instance.openUI(be.Skin, this), q.Instance.onBtn(B.coin2);
        }
        onTipClick() {
            Laya.stage.off(Laya.Event.CLICK, this, this.onTipClick);
            m.Instance.playUIClick();
            if (this._control._started) {} else {
                platform.getInstance().showInterstitial(() => {
                    q.Instance.onNewPlayer(B.level),
                        this._control.startGame(),
                        this.openBtnInBottom(), this.ResetBtn.on(Laya.Event.CLICK, this, this.restGame),
                        this.Ready.on(Laya.Event.CLICK, this, this.ReadyGame)
                })
            }


        }
        openBtnInBottom() {
            if (0 != this.BottomBtnArr.length)
                for (let e = 0; e < this.BottomBtnArr.length; e++) {
                    let t = this.BottomBtnArr[e].dataSource;
                    this.BottomBtnArr[e].on(Laya.Event.MOUSE_DOWN, this._control, this._control.onMouseDownBtn, [t]),
                        this.BottomBtnArr[e].on(Laya.Event.MOUSE_UP, this._control, this._control.onMouseUpBtn);
                }
        }
        addChangeWater(e) {
            let t = new Laya.Image();
            t.anchorX = .5, t.anchorY = 1, this.ChangeWaterColor != e && (this.ChangeWaterColor = e,
                    this.ChangeWaterCnt = 0, this.ChangeWaterImgCnt++, this.ChangeWaterImgArr.push(t)),
                0 == this.ChangeWaterCnt ? (t.centerX = 0, t.bottom = -this.waterChangeGround.y,
                    this.changeColorFilter(e, t), this.NextTeaBox.addChild(t), t.y = this.waterChangeGround.y + 295,
                    t.skin = "game/h_1.png", this.ChangeWaterCnt++, this.ChangeWaterCnt = Math.min(this.ChangeWaterCnt, 59)) : (this.ChangeWaterCnt++,
                    this.ChangeWaterCnt = Math.min(this.ChangeWaterCnt, 59), this.changeColorFilter(e, this.ChangeWaterImgArr[this.ChangeWaterImgCnt - 1]),
                    this.ChangeWaterImgArr[this.ChangeWaterImgCnt - 1].y = this.waterChangeGround.y + 586,
                    this.ChangeWaterImgArr[this.ChangeWaterImgCnt - 1].skin = "game/h_" + this.ChangeWaterCnt + ".png");
        }
        addColorImg(e) {
            this.IceGround.y > -240 && (this.IceGround.y -= 5), this.waterChangeGround.y > -300 && this._addTea > 9 && (this.waterChangeGround.y -= 6.5,
                    this.waterChangeGround.y > -250 && (this.MoveXVal = 0)), this.TeaImg1.skin = "game/w_" + this._addTea + ".png",
                this.TeaMaskImg1.skin = "game/w_" + this._addTea + ".png";
        }
        changeColorFilter(e, t) {
            let i;
            switch (e) {
                case 1:
                    i = [255, 0, 0];
                    break;

                case 2:
                    i = [255, 229, 0];
                    break;

                case 3:
                    i = [0, 122, 195];
            }
            this.showColorFilter(t, i);
        }
        closeBtnInBottom() {
            if (0 != this.BottomBtnArr.length) {
                for (let e = 0; e < this.BottomBtnArr.length; e++) {
                    this.BottomBtnArr[e].dataSource;
                    this.BottomBtnArr[e].off(Laya.Event.MOUSE_DOWN, this._control, this._control.onMouseDownBtn),
                        this.BottomBtnArr[e].off(Laya.Event.MOUSE_UP, this._control, this._control.onMouseUpBtn);
                }
                this.Ready.off(Laya.Event.CLICK, this, this.ReadyGame), this.ResetBtn.off(Laya.Event.CLICK, this, this.restGame);
            }
        }
        showfinger(e) {
            this.needStop = !1, this.fingerImg = new Laya.Image("game/TutorialHand.png"), this.fingerImg.scale(-1, -1),
                this.fingerImg.pos(e, 8), this.HBox1.addChild(this.fingerImg), se.doUp(this, null, this.fingerImg, 500, 0, 20, 0);
        }
        showfinger2() {
            this.needStop = !1, this.fingerImg2 = new Laya.Image("game/TutorialHand.png"), this.fingerImg2.scale(-1, -1),
                this.fingerImg2.pos(376, 8), this.HBox1.addChild(this.fingerImg2), se.doUp(this, null, this.fingerImg2, 500, 0, 20, 0);
        }
        showfingerReady() {
            this.fingerReadImg = new Laya.Image("game/TutorialHand.png"), this.fingerReadImg.scale(1, 1),
                this.fingerReadImg.rotation = -90, this.fingerReadImg.pos(121, 119), this.Ready.addChild(this.fingerReadImg),
                se.doUp(this, null, this.fingerReadImg, 500, -20, 0, 0);
        }
        ReadyGameDo() {
            m.Instance.playSound(u.yaohuang), q.Instance.onBtn(B.coin5), Be.vibrateShort(),
                1 != Me.Instance.level && 2 != Me.Instance.level || (this.fingerReadImg && (this.fingerReadImg.visible = !1),
                    this.needStop = !0), Me.Instance.battleCount = Me.Instance.battleCount + 1, Me.Instance.dayBattleCount = Me.Instance.dayBattleCount + 1,
                Laya.timer.clear(this, this.updateAni), this.closeBtnInBottom(), this.gaiziImg.visible = !0,
                this._control.IsMove = !1, this._control.onMouseUpBtn(), this.TeaImgBox.scale(1, 1),
                this.TeaImgBox.x = 130, this.TeaMaskImg1.pos(5, -33), this.TeaMaskImg1.size(251, 314),
                this.TeaMaskImg1.skin = "game/w_0.png", this.MoveTeaMaskImg.pos(120, 43), this.MoveTeaMaskImg.size(261, 275),
                this.MoveTeaMaskImg.skin = "game/m_cuple.png", this._control.clearrig(), Laya.timer.frameLoop(1, this, this.cupRot),
                this._control.clearGame();
        }
        ReadyGame() {
            platform.getInstance().showInterstitial(() => {
                Re.Instance.resetTempSkin(), this.WinTitle.color = "#ffffff", this.WinTitle.text = "WIN";
                let e = !1,
                    t = null;
                Me.Instance.level >= 3 && Me.Instance.level % 2 == 1 && ve.Instance.checkPiFuE() && (null == (t = Re.Instance.getRandomLockSkinCfg()) || Me.Instance.battleCount < 1 || (e = !0)),
                    e && null != t ? P.Instance.openUI(be.TryView, {
                        se: this,
                        skinCfg: t
                    }) : this.ReadyGameDo();
            })

        }
        choseImgInResultEum(e) {
            let t = De,
                i = "game/m_blackZZ.png";
            for (let n = 0; n < t.length; n++)
                if (e == n + 1) return i = t[n];
            return i;
        }
        cupRot() {
            this.gaiziImg.rotation < 0 ? this.gaiziImg.rotation++ : (this.movetime++, this.movetime > 40 ? this.ResultColor() : this.startReady ? (this.cupBox.rotation += 1.5,
                this.leftCollider.rotation += 1.5, this.rightCollider.rotation += 1.5, this.downCollider.rotation += 1.5,
                this.IceGround.rotation += 1.5, this.cupBox.rotation > 3 && (this.startReady = !1)) : (this.cupBox.rotation -= 1.5,
                this.leftCollider.rotation -= 1.5, this.rightCollider.rotation -= 1.5, this.downCollider.rotation -= 1.5,
                this.IceGround.rotation -= 1.5, this.cupBox.rotation < -3 && (this.startReady = !0)));
        }
        ResultColor() {
            this.NextBtn.centerY = 400, Laya.timer.clear(this, this.cupRot), this.gaiziImg.rotation = -20;
            let e = 0,
                t = 0,
                i = .2,
                n = 0,
                s = 0,
                a = 0,
                o = 0,
                r = 0,
                h = 0,
                l = 0,
                c = 0,
                d = 0,
                p = 0,
                g = 0,
                I = 0,
                f = !1;
            this.movetime = 0, this.showCupBg.visible = !1, this.cupBox.rotation = 0, this.leftCollider.rotation = -8,
                this.rightCollider.rotation = 9, this.downCollider.rotation = 90, this.IceGround.rotation = 0;
            for (let e = this._control.GameDate.length - 1; e > 0; e--) 1 === this._control.GameDate[e].type && (1 == this._control.GameDate[e].chilidtype && s++,
                    2 == this._control.GameDate[e].chilidtype && o++, 3 == this._control.GameDate[e].chilidtype && a++),
                2 === this._control.GameDate[e].type && (1 == this._control.GameDate[e].chilidtype && r++,
                    2 == this._control.GameDate[e].chilidtype && h++, 3 == this._control.GameDate[e].chilidtype && d++,
                    4 == this._control.GameDate[e].chilidtype && l++, 5 == this._control.GameDate[e].chilidtype && c++,
                    6 == this._control.GameDate[e].chilidtype && g++, 7 == this._control.GameDate[e].chilidtype && I++),
                3 === this._control.GameDate[e].type && p++;
            this.ResultCfg = [r, h, d, l, c, g, I, p, s, o, a];
            let w = se.drawCupWater(s, a, o);
            w[0] == this.levelPassCfg[8] && w[1] == this.levelPassCfg[10] && w[2] == this.levelPassCfg[9] && this._addTea >= 42 && (f = !0);
            for (let s = this.BottomBtnCnt; s > 0; s--) {
                let a = this.BottomBtnArr[s - 1].dataSource;
                n += 100 * (i = a >= 9 ? .8 : .2), 0 == this.levelPassCfg[a - 1] ? this.ResultCfg[a - 1] > 8 ? e += 0 : e += 100 * i : ((t = 100 - Math.abs(Math.floor((this.ResultCfg[a - 1] - this.levelPassCfg[a - 1]) / this.levelPassCfg[a - 1] * 100))) < 0 && (t = 20),
                    f && a >= 9 && (t = Math.max(t, 80)), e += t * i);
            }
            let y = Math.floor(e / n * 100);
            Me.Instance.level <= 10 && !Me.Instance.IsRandomScene && (y += 20, y = Math.min(y, 100));
            let b = this.Resultrank(y);
            if (this.rankcfg = b, this.NextTeaBox.removeChildren(), this.ChangeWaterImgArr.length > 0) {
                for (let e = this.ChangeWaterImgArr.length - 1; e > 0; e--) this.ChangeWaterImgArr[e].destroy();
                this.ChangeWaterImgArr = [];
            }
            this.MainBox.visible = !1, this.ResultBox.visible = !0, ve.Instance.isOpenSDK() && (this.zzFloat && (this.zzFloat.visible = !1),
                this.moreGame.visible = !1, this.zzYoulike && (this.zzYoulike.visible = !0)), b.rank <= 6 ? (m.Instance.playSound(u.Gold),
                this.firstGame = !0, Me.Instance.IsRandomScene ? (this.ChildSceneCnt < 4 ? (Me.Instance.updateWithChangeData({
                        gold: 250 * this.ChildSceneCnt + 250
                    }), P.Instance.openUI(be.Rand, {
                        se: this,
                        cot: this._control
                    }), this.ChildSceneCnt++) : (Me.Instance.updateWithChangeData({
                        gold: 250 * this.ChildSceneCnt + 250
                    }), P.Instance.openUI(be.Rand, {
                        se: this,
                        cot: this._control
                    }), this.ChildSceneCnt = 0, Me.Instance.IsRandomScene = !1), this.MainBox.visible = !0,
                    this.ResultBox.visible = !1) : this.showWinResultBoxView(b), m.Instance.playSound(u.victory)) : (m.Instance.playSound(u.Fail),
                this.showResultBoxView(y)), s + a + o != 0 && (this.TeaImg1.skin = "game/w_" + this._addTea + ".png",
                this.showColorFilter(this.TeaImg1, w));
        }
        showWinResultBoxViewDo(e, t = null, i = 0) {
            let n = (Laya.stage.height - 358) / 2 - 248;
            this.LostBox.visible = !1, Laya.Tween.to(this.cupBox, {
                centerX: 0,
                bottom: n + 278
            }, 500), this.WinBox.visible = !0;
            let s = Me.Instance.level;
            this.ResultLevel.text = "LEVEL " + s, this.ShowCupBox.visible = !1, this.ResultGold.text = "" + Me.Instance.gold,
                this.ResultRank.text = "GRADE " + e.name, this.ResultAddGold.text = "+" + e.gold;
            let a = s % 5;
            this.showWinLevel(a), this.OrderUpgradeGlod.visible = !1, this.OrderUpgradeTitle.visible = !1,
                null != t && (this.WinTitle.color = "#690a09", t ? (this.NextBtn.centerY = 400,
                    this.OrderUpgradeGlod.visible = !0, this.OrderUpgradeTitle.visible = !0, this.rankcfg.gold += i,
                    this.OrderUpgradeGlod.text = "+" + i.toString(), this.WinTitle.text = "订单升级成功",
                    this.WinTitle.color = "#690a09") : this.WinTitle.text = "订单升级失败"), this.ResultImg.width = 1 == a ? 0 : 0 == a ? 280 : 40 + 80 * (a - 2),
                ++s % 5 == 1 && (Me.Instance.IsRandomScene = !0);
            for (let e = 1; e <= 3; e++) this.KeyCnt >= e ? this["resultkey" + e].skin = "game/m_gold.png" : this["resultkey" + e].skin = "game/m_gray.png";
            Laya.timer.once(500, this, function() {
                Me.Instance.updateWithChangeData({
                    level: 1
                });
            });
        }
        showWinResultBoxView(e) {
            Me.Instance.level >= 2 && Me.Instance.level % 2 == 0 && j.Instance.checkShowEggView() ? P.Instance.openUI(be.EggView, {
                se: this,
                rank: e
            }) : this.showWinResultBoxViewDo(e);
        }
        showWinLevel(e) {
            0 == e && (e = 5), this.WinLevel5light.visible = !1, this.WinLevel5box.skin = "game/chessbrut.png";
            for (let t = 2; t <= 4; t++) this["WinLevel" + t].visible = e > t - 1;
            e > 4 && (this.WinLevel5light.visible = !0, this.WinLevel5box.skin = "game/chessbrut_opened.png");
        }
        showResultBoxView(e) {
            Me.Instance.IsRandomScene ? (Me.Instance.IsRandomScene = !1, this.ChildSceneCnt = 1) : this.firstGame = !1,
                this.WinBox.visible = !1,
                this.LostBox.visible = !0,
                this.ResultLostMatch.text = "Similarity:" + e + "%";
            let t = this.BottomBtnCnt;
            this.ShowCupBox.centerX = 150, this.ShowCupBox.centerY = -460;
            let i = Laya.stage.height / 2 - 460 + 100 - 10;
            this.showCupTitle.visible = !1;
            let n = Laya.stage.height - i - 248;
            this.NextLabel.visible = !0, this.StarBox.visible = !1, Laya.Tween.to(this.cupBox, {
                scaleX: .4,
                scaleY: .4,
                bottom: n + 248,
                centerX: -150
            }, 1), Laya.timer.once(1, this, function() {
                if (t <= 3)
                    for (let e = t; e > 0; e--) {
                        let i = this._control.longResult.create(),
                            n = this.BottomBtnArr[e - 1].dataSource;
                        i.getComponent(ae).showReult(n, this), this.showResultBox.addChild(i), i.centerX = 0,
                            1 == t && (i.centerY = 0), 2 == t && (i.centerY = 80 * (2 * e - 3)), 3 == t && (i.centerY = 120 * (e - 2));
                    } else
                        for (let e = t; e > 0; e--) {
                            let i = this._control.shortResult.create(),
                                n = this.BottomBtnArr[e - 1].dataSource;
                            i.getComponent(oe).showReult(n, this), this.showResultBox.addChild(i), i.centerX = -150 * (e % 2 * 2 - 1) + 5,
                                i.centerY = 4 == t ? 80 * (2 * Math.floor((e - 1) / 2) - 1) : 120 * (Math.floor((e - 1) / 2) - 1);
                        }
            });
        }
        Resultrank(e) {
            let t = 0,
                i = "",
                n = e;
            return e > 95 ? (t = 1, i = "S+", n = 310) : e > 92 ? (t = 2, i = "S", n = 270) : e > 89 ? (t = 3,
                i = "S-", n = 240) : e > 86 ? (t = 4, i = "A+", n = 210) : e > 83 ? (t = 5, i = "A",
                n = 180) : e >= 80 ? (t = 6, i = "A-", n = 150) : e > 70 ? (t = 7, i = "B") : e > 60 ? (t = 8,
                i = "C") : e > 50 ? (t = 9, i = "D") : e > 40 ? (t = 10, i = "E") : (t = 11, i = "F"), {
                rank: t,
                name: i,
                gold: n,
                val: e
            };
        }
        createKeyBox(e) {
            this.flyKey.visible = !0, this.flyKey.skin = 0 == e ? "game/chessKey.png" : "game/gold2.png",
                this.flyKey.on("click", this, this.addflyBox, [e]);
        }
        showKeyBox() {
            for (let e = 1; e <= 3; e++) this.KeyCnt >= e ? this["key" + e].skin = "game/chessKey.png" : this["key" + e].skin = "game/chessKey2.png";
        }
        addflyBox(e) {
            this._control.ShowKeyBox = !1;
            let t = this;
            0 == e && (this.KeyCnt++, this.KeyCnt = Math.min(this.KeyCnt, 3), Laya.Tween.to(this.flyKey, {
                x: this["key" + this.KeyCnt].x + 119,
                y: this["key" + this.KeyCnt].y
            }, 500, null, Laya.Handler.create(null, function() {
                t.showKeyBox(), t.flyKey.visible = !1;
            })));
        }
    }
    class he {
        constructor(e) {
            this.gameobject = null, this.isUnlock = !1, this._info = null, this._selected = null,
                this._icon = null, this._mask = null, this._info = e;
            let t = Laya.loader.getRes(T.RES_SkinItem);
            this.gameobject = t.create(), this._selected = this.gameobject.getChildByName("Selected"),
                this._icon = this.gameobject.getChildByName("icon"), this._mask = this.gameobject.getChildByName("skinMask"),
                this._icon.skin = e.ResIcon, this.gameobject.on(Laya.Event.CLICK, this, this.onClickHandle),
                this.updateData(e.Id);
        }
        setPos(e, t) {
            this.gameobject.pos(e, t, !0);
        }
        onClickHandle() {
            d.Instance.event(s.Skin_ClickItem, [this._info, this.isUnlock]);
        }
        updateData(e) {
            var t = Re.Instance.getItemCfg(e);
            this.isUnlock = Re.Instance.getSkinInfo(t.Id), this.isUnlock ? this._mask.visible = !1 : this._mask.visible = !0;
        }
        showSelected(e) {
            this._selected.visible = e;
        }
        destroy() {
            this.gameobject.off(Laya.Event.CLICK, this, this.onClickHandle), this.gameobject.removeSelf();
        }
    }
    class le extends Laya.Script {
        constructor() {
            super(), this._newIndex = -1, this._space = 0, this._startX = 0, this._initX = 0,
                this._startIndex = 0, this.dragFlag = !1, this.isHasBox = null, this.dragBox = null,
                this._maxIndex = 3, this.gameObject = null, this.downFlag = null, this._firstX = null,
                this._offX = null;
        }
        onEnable() {}
        addEvent(e = !0) {
            this.isHasBox = e, e ? (this.dragBox.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownHandle),
                this.dragBox.on(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), this.dragBox.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveHandle)) : (Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownHandle),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveHandle));
        }
        init(e) {
            this._space = e.space, this._startX = e.startX, this._startIndex = e.startIndex,
                this._maxIndex = e.len - 1, this._newIndex = e.curIndex, this.dragBox = e.dragBox,
                this.gameObject = this.owner, this.bouceBack(!1);
        }
        onMouseDownHandle() {
            this.downFlag = !0, this._firstX = Laya.stage.mouseX, this._initX = this._firstX;
        }
        onMouseMoveHandle() {
            this.downFlag && (this._offX = Laya.stage.mouseX - this._firstX, this.drag(this._offX),
                this._firstX = Laya.stage.mouseX);
        }
        onMouseUpHandle() {
            this._firstX - this._initX > 1 ? (this._newIndex--, this.dragFlag = !0) : this._firstX - this._initX < -1 ? (this.dragFlag = !0,
                    this._newIndex++) : this.dragFlag = !1, this._newIndex = se.Clamp(this._newIndex, this._startIndex, this._maxIndex),
                this.bouceBack(), this.downFlag = !1;
        }
        drag(e) {
            this.gameObject.x += e;
        }
        bouceBack(e = !0) {
            e ? Laya.Tween.to(this.gameObject, {
                    x: this._startX + this._newIndex * this._space * -1
                }, 100) : this.gameObject.x = this._startX + this._newIndex * this._space * -1,
                d.Instance.event(s.Switch_Page, [this._newIndex, this.dragFlag]);
        }
        removeEvent() {
            this.isHasBox ? (this.dragBox.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownHandle),
                this.dragBox.off(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), this.dragBox.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveHandle)) : (Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownHandle),
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveHandle));
        }
    }
    class ce extends e.SkinUI {
        constructor(e) {
            super(), this._randomId = 0, this._skinDrag = null, this._skinMap = [], this._skinPageArr = [],
                this._skinItemArr = [], this._curPage = 0, this._preSelectId = 0, this._dragFlag = null,
                this._pageArr = [], this.zzYoulike = null, this._scene = null;
        }
        init(e) {
            this._scene = e, this.initView(), this.regiesterEvent();
        }
        regiesterEvent() {
            this.unlockbtn.on(Laya.Event.CLICK, this, this.unlockClickHandle), this.closebtn.on(Laya.Event.CLICK, this, this.closeClickHandle),
                d.Instance.on(s.Switch_Page, this, this.switchPageHandle), d.Instance.on(s.Skin_ClickItem, this, this.skinClickHandle);
        }
        unregiesterEvent() {
            d.Instance.off(s.Switch_Page, this, this.switchPageHandle), d.Instance.off(s.Skin_ClickItem, this, this.skinClickHandle),
                this.unlockbtn.off(Laya.Event.CLICK, this, this.unlockClickHandle), this.closebtn.off(Laya.Event.CLICK, this, this.closeClickHandle);
        }
        uninit() {
            Laya.timer.clearAll(this), this.unregiesterEvent();
        }
        onTuiBack() {
            m.Instance.playUIClick(), ve.Instance.addInterFullList(this.zzsdkBox, B.back5),
                q.Instance.onBack(B.back5);
        }
        refglod() {
            this.coinCount.text = se.ScoreToString(Me.Instance.gold);
        }
        initView() {
            this.refglod(), this._skinDrag = this.addItemInfo(this.skinobj, this._skinMap, this._skinPageArr),
                this.switchTabView();
            var e = Be.isLong() ? 80 : 25;
            if (this.zzsdkBox.visible = !1, ve.Instance.isOpenSDK()) {
                this.zzsdkBox.visible = !0;
                let e = Laya.stage.height / 2 + (Be.isLong() ? 560 : 420);
                this.zzYoulike = ve.Instance.addYoulike(this.zzsdkBox, B.youlike3, e);
            } else this.zzsdkBox.visible = !1;
            this.window.top = 218 - (155 - (e + 70));
        }
        unlockClickHandle() {
            if (m.Instance.playUIClick(), Me.Instance.gold < parseInt(this.unlockCoin.text)) P.Instance.showTips("Coin is not enough"),
                P.Instance.openUI(be.GoldView, this);
            else {
                this.unlockbtn.mouseEnabled = !1, this.closebtn.mouseEnabled = !1, Me.Instance.updateWithChangeData({
                    gold: -parseInt(this.unlockCoin.text)
                }), this.coinCount.text = se.ScoreToString(Me.Instance.gold), this._scene.GoldCnt.text = "" + Me.Instance.gold;
                var e = this.getUnlockIndex();
                this._skinDrag.removeEvent(), Laya.timer.loop(200, this, this.randomItem, [e]),
                    e.length > 1 ? Laya.timer.once(3e3, this, this.stopRandomTimer, [e]) : Laya.timer.once(300, this, this.stopRandomTimer, [e]),
                    q.Instance.onCark();
            }
        }
        randomItem(e) {
            this._randomId++, this._randomId >= e.length && (this._randomId = 0);
            var t = e[this._randomId] % 9 - 1;
            e[this._randomId] % 9 == 0 && (t = 8), this.setSelectIconPos(t);
        }
        stopRandomTimer(e) {
            Laya.timer.clear(this, this.randomItem), Laya.timer.clear(this, this.stopRandomTimer);
            var t = e[se.random(0, e.length - 1)];
            Re.Instance.setSkinInfo(t, !0), this._skinMap[t] && this._skinMap[t].updateData(t), this._skinDrag.addEvent(!1),
                this.unlockbtn.mouseEnabled = !0, this.closebtn.mouseEnabled = !0, this.selectIcon.visible = !1,
                m.Instance.playSound(u.success), this.skinClickHandle({
                    Id: t
                }, !0), this.switchPageHandle(this._curPage, !1);
        }
        setSelectIconPos(e) {
            var t = e % 3,
                i = parseInt((e / 3).toString());
            this.selectIcon.pos(200 * t + 28, 200 * i + 137), this.selectIcon.visible = !0;
        }
        getUnlockIndex() {
            var e = [],
                t = 9 * this._curPage + 1,
                i = 9 * (this._curPage + 1),
                n = this._skinMap,
                s = null;
            for (let a = t; a <= i; a++) n[(s = Re.Instance.getItemCfg(a)).Id].isUnlock || e.push(s.Id);
            return e;
        }
        skinClickHandle(e, t) {
            t ? (this._skinMap[this._preSelectId].showSelected(!1), this._skinMap[e.Id].showSelected(!0),
                this._preSelectId = e.Id, Re.Instance.curSkin = e.Id) : this._dragFlag;
        }
        addItemInfo(e, t, i) {
            var n = V.Instance.itemsConfigData,
                s = n.length / 9,
                a = 0;
            for (let i = 0; i < s; i++) {
                var o = new Laya.Sprite();
                e.addChild(o), o.pos(700 * i, 0, !0);
                for (let e = 0; e < 3; e++)
                    for (let i = 0; i < 3; i++)
                        if (a < n.length) {
                            var r = new he(n[a]);
                            r.setPos(200 * i, 200 * e), o.addChild(r.gameobject), t[n[a].Id] = r, this._skinItemArr.push(r),
                                a++;
                        }
            }
            for (let e = 0; e < s; e++) {
                var h = new Laya.Image(0 == e ? "game/skin_dot1.png" : "game/skin_dot2.png");
                i.push(h);
            }
            var l = e.addComponent(le);
            return l.init({
                len: s,
                space: 700,
                startX: e.x,
                startIndex: 0,
                curIndex: 0
            }), l;
        }
        switchPageHandle(e, t) {
            this._curPage = e, this._dragFlag = t;
            for (let t = 0; t < this._pageArr.length; t++) this._pageArr[t].skin = t == e ? "game/skin_dot1.png" : "game/skin_dot2.png";
            if (this.getUnlockIndex().length > 0) {
                this.unlockbtn.visible = !0;
                var i = 1e3;
                switch (e) {
                    case 1:
                        i = 3e3;
                        break;

                    case 2:
                        i = 6e3;
                }
                this.unlockCoin.text = i.toString();
            } else this.unlockbtn.visible = !1;
        }
        switchTabView() {
            this.pageObj.removeChildren(0, this.pageObj.numChildren - 1), this._pageArr = this._skinPageArr,
                this._skinDrag.addEvent(!1), this._preSelectId = Re.Instance.curSkin, this._skinMap[this._preSelectId].showSelected(!0);
            for (let e = 0; e < this._pageArr.length; e++) this.pageObj.addChild(this._pageArr[e]);
            this.switchPageHandle(0, !1);
        }
        closeClickHandle() {
            this._scene.showSkin(), this._scene.SkinBtn.x = 1, this.close();
        }
        close() {
            this.zzYoulike && this.zzYoulike.clear(), P.Instance.closeUI(be.Skin);
        }
    }
    class de extends e.ZSResultUI {
        constructor(e) {
            super(), this.downpanely = 0, this.ZsAdCnt = 0, this.maxsdown = !1, this.maxsdownCnt = 0,
                this._skinMap = [], this._skinPageArr = [], this._skinItemArr = [], this._scene = null,
                this.curSharePos = y.Unknow, this._control = null, this.addgold = 0, this.isETouch = !1,
                this.canbtn = !0, this.gettype = 0, this.a3xView = null, this.wxshowbtntime = 0;
        }
        init(e) {
            if (this._scene = e.se, this._control = e.cot, this.hidebtn(-1), this.addgold = this._scene.rankcfg.gold,
                Be.IsWeChat() && (this.initETouch(), this.wxshowbtntime = 1e3 * h.vGameInfo.wxshowbtntime),
                this._scene.rankcfg.rank <= 6 && 0 != this._scene.rankcfg.rank ? (this.title.skin = "common/successt.png",
                    q.Instance.onNewPlayer(B.winLevel)) : this.title.skin = "common/failt.png", this.resultVal.text = "Similarity " + this._scene.rankcfg.val + "%",
                this.resultReward.text = "" + this.addgold, this.showGoldCnt(), this._scene.KeyCnt >= 3 ? (this._scene.chooseBox = !0,
                    this.NextBox.visible = !0, this.NextLabel.visible = !1, this.StarBox.visible = !1) : (this.NextBox.visible = !1,
                    Me.Instance.IsRandomScene ? (this.NextLabel.visible = !1, this.StarBox.visible = !0) : (this.gettype = 1,
                        this.NextLabel.visible = !0, this.StarBox.visible = !1)), this.NormalBtn.visible = this.NextLabel.visible,
                this.NormalBtn2.visible = !1,
                this.hasETouch() && (this.NormalBtn.visible = !1, this.NormalBtn2.visible = !0,
                    this.canbtn = !1, Laya.timer.once(2e3, this, () => {
                        this.canbtn = !0;
                    })), Be.IsQutoutiao()) {}


            this.gamelist.renderHandler = new Laya.Handler(this, function(e) {
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN, e, () => {
                    platform.getInstance().navigate("GAME", "MORE", e.dataSource.id)
                });
            })
            this.gamelist.array = platform.getInstance().getForgames();


            this.regiestEvent();
        }
        showGoldCnt() {
            this.GoldCnt.text = "" + Me.Instance.gold, this._scene.GoldCnt.text = "" + Me.Instance.gold;
        }
        uninit() {
            Be.IsQutoutiao() && g.Instance.hidePasterAd(), Laya.timer.clearAll(this), this.unregiestEvent();
        }
        regiestEvent() {
            this.NormalBtn.on(Laya.Event.CLICK, this, this.closeClickHandle),
                this.NormalBtn2.on(Laya.Event.CLICK, this, this.closeClickHandle),
                this.NextBtn.on(Laya.Event.CLICK, this, this.NextGame),
                d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted),
                d.Instance.on(s.ShowBannerCompleted, this, this.onShowBannerCompleted),
                this.NextBtnnew.on(Laya.Event.CLICK, this, this.btncloseNextHandle);
        }
        unregiestEvent() {
            this.NormalBtn.off(Laya.Event.CLICK, this, this.closeClickHandle), this.NextBtn.off(Laya.Event.CLICK, this, this.NextGame),
                this.NormalBtn2.off(Laya.Event.CLICK, this, this.closeClickHandle), d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted),
                d.Instance.off(s.ShowBannerCompleted, this, this.onShowBannerCompleted), this.NextBtnnew.off(Laya.Event.CLICK, this, this.btncloseNextHandle);
        }
        onTuiBack() {
            m.Instance.playUIClick(), ve.Instance.addInterFullList(this.zzsdkBox, B.back4),
                q.Instance.onBack(B.back4);
        }
        onShowAdCompleted(e) {
            e === this.curSharePos && (m.Instance.playSound(u.Gold), this.hidebtn(0), Me.Instance.updateWithChangeData({
                gold: 3 * this.addgold
            }), q.Instance.onReceive(B.winReceive), this.showGoldCnt(), Be.IsWeChat() ? F.once(this.wxshowbtntime, this, () => {
                this.hidebtn(1);
            }) : this.btncloseNextHandle());
        }
        onShowBannerCompleted(e) {}
        NextGame() {
            m.Instance.playUIClick();
            if (1 === this.gettype) {
                platform.getInstance().showReward(() => {
                    m.Instance.playSound(u.Gold);
                    Me.Instance.updateWithChangeData({
                        gold: 3 * this.addgold
                    });
                    this.showGoldCnt(),
                        this.btncloseNextHandle()
                })
            } else {
                m.Instance.playSound(u.Gold),
                    Me.Instance.updateWithChangeData({
                        gold: this.addgold
                    }),
                    this.showGoldCnt(),
                    this.btncloseNextHandle()
            }
            this._scene.GoldCnt.text = "" + Me.Instance.gold;


        }
        closeClickHandle() {

            if (this.canbtn) {
                m.Instance.playSound(u.Gold),
                    this.hidebtn(0),
                    Me.Instance.updateWithChangeData({
                        gold: this.addgold
                    }),
                    this.showGoldCnt(),
                    this.btncloseNextHandle()
            }

        }
        btncloseNextHandle() {
            this._control.NextGame();
            Laya.timer.once(0.5e3, this, this.close);
            // this.close();
        }
        hidebtn(e) {
            -1 == e ? (this.NextBtn.visible = !0, this.NormalBtn.visible = !0, this.NormalBtn2.visible = !0,
                this.NextBtnnew.visible = !1) : 0 == e ? (this.NextBtn.visible = !1, this.NormalBtn.visible = !1,
                this.NormalBtn2.visible = !1, this.NextBtnnew.visible = !1) : 1 == e && (this.NextBtnnew.visible = !0);
        }
        close() {
            this.a3xView && this.a3xView.clear(), this.closewindow();
        }
        closewindow() {
            P.Instance.closeUI(be.Result);
        }
        getPinY() {}
        hasETouch() {
            return this.isETouch;
        }
        initETouch() {
            R.Instance.wxCheck() || R.Instance.aCheck() || Be.IsWeChat() && Me.Instance.level > 2 && ve.Instance.checkBannerE() && (this.isETouch = !0);
        }
    }
    class pe {
        constructor(e) {
            this.gameobject = null, this._boxicon = null, this._isOpen = !1, this._index = -1,
                this._icon = null, this._gold = null, this._goldCount = null, this._videobtn = null,
                this._index = e;
            let t = Laya.loader.getRes(T.RES_rewardItem);
            this.gameobject = t.create(), this._boxicon = this.gameobject.getChildByName("boxicon"),
                this._icon = this.gameobject.getChildByName("icon"), this._gold = this.gameobject.getChildByName("gold"),
                this._goldCount = this._gold.getChildByName("goldCount"), this._videobtn = this.gameobject.getChildByName("videoIcon"),
                this._gold.visible = !1, this.gameobject.on(Laya.Event.CLICK, this, this.onClickHandle);
        }
        setPos(e, t) {
            this.gameobject.pos(e, t, !0);
        }
        onClickHandle() {
            // if( this._videobtn.visible)return;
            if (this._isOpen) return;
            this._isOpen = true;
            d.Instance.event(s.Reward_ClickItem, [this._index])
        }
        watchTvCallback(e, t = null, i = null) {
            // t ? i.errCode : e ? (this._videobtn.visible = !1, this.onClickHandle()) : P.Instance.showTips("看完视频才能获得奖励！");
        }
        showReward(e) {
            this._boxicon.visible = !1, -5 == e[0] ? (this._gold.visible = !0, this._goldCount.text = e[1].toString(),
                Me.Instance.updateWithChangeData({
                    glod: e[1]
                }), d.Instance.event(s.Reward_UpdateInfo)) : (this._icon.visible = !0, this._icon.skin = Re.Instance.getItemCfg(e[0]).ResIcon,
                Re.Instance.curSkin = e[0]);
        }
        showVideobtn(e) {}
        destroy() {
            this.gameobject.off(Laya.Event.CLICK, this, this.onClickHandle), this.gameobject.removeSelf();
        }
    }
    class ge extends e.OpenRewardUI {
        constructor() {
            super(), this._rewardMap = [], this._rewardInfo = null, this._openCount = 3, this._rewardArr = [],
                this._randomArr = null, this._randomTotalNum = 0, this._getChanceCount = 0, this._info = null,
                this.curSharePos = y.Unknow, this.zzYoulike = null;
        }
        init(e) {
            this.regiesterEvent(), this.goldCount.text = se.ScoreToString(Me.Instance.gold),
                this.initView();
        }
        initView() {
            for (let t = 0; t < 9; t++) {
                var e = new pe(t);
                e.setPos(t % 3 * 200, 178 * parseInt((t / 3).toString())), this.rewardObj.addChild(e.gameobject),
                    this._rewardMap[t] = e;
            }
            var t = V.Instance.getRewardCfglength();
            for (let e = 1; e <= t; e++) {
                var i = V.Instance.getRewardCfg(e);
                if (null == Re.Instance.getSkinCfg(i.ItemId)) {
                    this._rewardInfo = i;
                    break;
                }
            }
            this._rewardInfo && this._rewardInfo.ItemId > 0 ? this.bestReward.skin = Re.Instance.getItemCfg(this._rewardInfo.ItemId).ResIcon : this.bestReward.visible = !1,
                this.addRewardList();
            var n = Be.isLong() ? 80 : 25;
            this.zzsdkBox.visible = !1;
            this.window.top = 240 - (155 - (n + 70));
        }
        regiesterEvent() {
            this.back.on(Laya.Event.CLICK, this, this.backClickHandle),
                this.getchance.on(Laya.Event.CLICK, this, this.getchanceHandle),
                d.Instance.on(s.Reward_ClickItem, this, this.rewardClickHandle),
                d.Instance.on(s.Reward_UpdateInfo, this, this.updateGoldHandle);
            // d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        uninit() {
            this.unregiesterEvent(), this.timer.clearAll(this);
        }
        unregiesterEvent() {
            this.back.off(Laya.Event.CLICK, this, this.backClickHandle), this.getchance.off(Laya.Event.CLICK, this, this.getchanceHandle),
                d.Instance.off(s.Reward_ClickItem, this, this.rewardClickHandle),
                d.Instance.off(s.Reward_UpdateInfo, this, this.updateGoldHandle);
            // d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        updateData(e) {
            this._info = e;
        }
        updateGoldHandle() {
            this.goldCount.text = se.ScoreToString(Me.Instance.gold);
        }
        addRewardList() {
            var e = this._rewardInfo.Reward.split("|");
            for (let i = 0; i < e.length; i++) {
                var t = se.TransferStringToNumberArr(e[i]);
                this._rewardArr[i] = t;
            }
        }
        rewardClickHandle(e) {
            let t = this;
            var i = this.randomReward(),
                n = this._rewardArr[i];
            if (this._openCount > 0) {
                if (this._rewardArr.splice(i, 1), this._rewardMap[e].showReward(n), this["key" + this._openCount].skin = "game/chessKey2.png",
                    this._openCount--, 0 == this._openCount) {
                    for (let e = 0; e < 9; e++) this._rewardMap[e].showVideobtn(!0);
                    this.grade.visible = !1,
                        this.getchance.visible = this._getChanceCount < 1,
                        t.back.visible = !0;
                }
            }
            //  else P.Instance.showTips("抽奖机会已用完");
        }
        randomReward() {
            this._randomArr = [], this._randomTotalNum = 0;
            for (let e = 0; e < this._rewardArr.length; e++) this._randomArr[e] = this._randomTotalNum,
                this._randomTotalNum += this._rewardArr[e][2];
            var e = se.random(0, this._randomTotalNum),
                t = 0;
            for (let i = 0; i < this._randomArr.length; i++) this._randomArr[i] > t && this._randomArr[i] < e && (t = this._randomArr[i]);
            return this._randomArr.indexOf(t);
        }
        getchanceHandle() {
            m.Instance.playUIClick();
            platform.getInstance().showReward(() => {
                this.watchTvCallback()
            });
            // m.Instance.playUIClick(), this.curSharePos = y.OpenRewardAD, R.Instance.showVideoOrrShare(this.curSharePos);
        }
        onShowAdCompleted(e) {
            e === this.curSharePos && this.watchTvCallback();
        }
        watchTvCallback() {
            this._openCount = 3,
                this.key1.skin = "game/chessKey.png",
                this.key2.skin = "game/chessKey.png",
                this.key3.skin = "game/chessKey.png";
            for (let e = 0; e < 9; e++) this._rewardMap[e].showVideobtn(!1);
            this.grade.visible = !0,
                this.getchance.visible = !1,
                this.back.visible = false,
                this._getChanceCount++;
        }
        backClickHandle() {
            for (let e = 0; e < this._rewardMap.length; e++) this._rewardMap[e].destroy();
            this.close();
        }
        close() {
            this.zzYoulike && this.zzYoulike.clear(), P.Instance.closeUI(be.Reward);
        }
    }
    class ue extends e.DaySignViewUI {
        constructor() {
            super(...arguments), this.curSharePos = y.Unknow, this.signInfo = null, this.actionInfo = null,
                this.dataInfo = null, this.seventInfo = null, this._scene = null;
        }
        init(e) {
            this._scene = e, this.regiestEvent(), this.signList.renderHandler = new Laya.Handler(this, this.onListRender),
                this.updateList();
        }
        uninit() {
            this.unRegiestEvent();
        }
        regiestEvent() {
            d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted),
                this.signBtn.on(Laya.Event.CLICK, this, this.onDaySignItemClick),
                this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseBtn);
        }
        unRegiestEvent() {
            d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), this.signBtn.off(Laya.Event.CLICK, this, this.onDaySignItemClick),
                this.closeBtn.off(Laya.Event.CLICK, this, this.onCloseBtn);
        }
        onDaySignItemClick() {
            this.onSignFinish(2 === this.actionInfo.d)
            // || R.Instance.wxCheck() || Be.IsOppo() ? this.onSignFinish(!1) : (this.curSharePos = y.SignAD, 
            // R.Instance.showVideoOrrShare(this.curSharePos));
        }
        onShowAdCompleted(e) {
            e === this.curSharePos && (this.onSignFinish(2 === this.actionInfo.d), this.curSharePos = y.Unknow);
        }
        onSignFinish(e = !0) {
            let t = !1;
            if (this.actionInfo)
                if (1 == this.actionInfo.goodstype) {
                    let i = 1;
                    e && (i = 2);
                    let n = this.actionInfo.count * i;
                    Me.Instance.updateWithChangeData({
                        gold: n
                    }), m.Instance.playSound(u.Gold), P.Instance.showTips(`COIN x ${n}`), t = !0;
                } else this.actionInfo.skinid && (m.Instance.playSound(u.LevelUpdate), Re.Instance.curSkin = this.actionInfo.skinid,
                    Re.Instance.setSkinInfo(this.actionInfo.skinid, !0), P.Instance.showTips("SUCCESS"),
                    t = !0);
            t && (V.Instance.doSignAction(), q.Instance.onSign(B.winSign), this._scene.showSkin(),
                P.Instance.closeUI(be.DaySign));
        }
        onCloseBtn() {
            m.Instance.playUIClick(), this._scene.showSkin(), P.Instance.closeUI(be.DaySign);
        }
        onListRender(e, t) {
            let i = e.dataSource;
            e.updateSignItem(i);
        }
        updateList() {
            this.signInfo = V.Instance.getSignDayInfo(),
                this.generalDataInfo(),
                this.actionInfo = this.getSignInfoWithIndex(this.getNowSignIndex());
            let e = this.getNowSignIndex();
            0 !== e && R.Instance.wxCheck();
            e %= 7;
            let t = this.canDoSign();
            this.signList.dataSource = this.dataInfo.map((i, n) => {
                let s = new Pe();
                return s.coin = i.count, s.title = i.title, s.isDouble = i.d, s.skinId = i.skinid,
                    s.highlight = n === e, s.signed = n < e || n === e && !t, s;
            }), this.seventInfo = this.signList.dataSource[6], this.updateSevenBox(), this.updateSignBtn();
        }
        updateSevenBox() {
            let e = this.seventInfo;
            if (e)
                if (this.sevenSignedView.visible = e.signed, this.sevenBox.disabled = e.signed,
                    e.coin > 0) this.skinBox.visible = !1, this.coinBox.visible = !0, this.coinLabel.text = `X ${e.coin}`;
                else if (this.skinBox.visible = !0,
                this.coinBox.visible = !1, e.dinsID) {
                let t = Re.Instance.getSkinCfg(e.dinsID);
                this.skinImageView.skin = t && t.img || "";
            }
        }
        updateSignBtn() {
            if (this.canDoSign()) {
                this.signBtn.disabled = false;
            } else {
                this.signBtn.label = "RECEIVED",
                    this.signBtn.disabled = true
            }
        }
        getSignInfoWithIndex(e) {
            if (e < 0 && (e = 0), e > 6 && (e %= 7), e < this.dataInfo.length) {
                return this.dataInfo[e];
            }
            return null;
        }
        canDoSign() {
            return !(this.signInfo.signed > 0);
        }
        getNowSignIndex() {
            let e = this.signInfo.signDay;
            return this.canDoSign() || (e -= 1), Math.max(0, e);
        }
        generalDataInfo() {
            let e = V.Instance.signCfgData,
                t = this.signInfo.signDay;
            e && (this.dataInfo = e.map((e, i) => {
                if (0 === i && 0 === t && (e.d = 0), 2 === e.goodstype) {
                    let i = !1;
                    if (e.skinid, t > 7 || i) return {
                        id: e.id,
                        title: e.title,
                        goodstype: e.goodstype2,
                        count: e.count2,
                        skinid: 0,
                        d: 2
                    };
                }
                return e;
            }));
        }
    }
    class me extends e.OfflineViewUI {
        constructor() {
            super(...arguments), this.coin = 0, this.curSharePos = y.Unknow, this._scene = null,
                this.a3xView = null, this.isinit = !1;
        }
        init(e) {
            e && (this.coin = e.coin || 0, this._scene = e.se), this.regiestEvent(), this.initView();
        }
        initView() {
            let e = this;
            if (this.closeBtn.visible = !1, Laya.timer.once(1500, this, function() {
                    e.closeBtn.visible = !0;
                }), Be.IsQutoutiao()) {
                let e = this.a3xbox.localToGlobal(new Laya.Point(0, 0));
                g.Instance.showPasterAD(e.x, e.y + 100, this.a3xbox.width, this.a3xbox.height);
            }
            H.Instance.hasShow = !0, this.coinLabel.text = `Coin+${this.coin || 0}`;
            let t = H.Instance.m_offlineTime,
                i = Math.floor(t / 6e4),
                n = Math.floor(i % 60),
                s = Math.floor(i / 60),
                a = Math.floor(s / 24);
            s -= 24 * a, this.offlineTip.text = a > 0 ? `您已离开${a}天${s}小时${n}分钟，欢迎回来！` : `您已离开${s}小时${n}分钟，欢迎回来！`,
                this.upTip.visible = s >= 2;
            var o = Be.isLong() ? 155 : 90;
            this.zzsdkBox.visible = !1, this.contentBox.top = 230 - (155 - o), this.initallZZSDK();
        }
        initallZZSDK() {
            if (ve.Instance.isOpenSDK()) {
                this.zzsdkBox.visible = !0;
                let e = 145 - (155 - (Be.isLong() ? 155 : 90));
                this.ztuiBox.y = e, this.a3xView || (this.a3xView = ve.Instance.add3x(this.a3xbox, 0, 0, B.lixianjiesuan));
            } else this.zzsdkBox.visible = !1;
        }
        uninit() {
            Be.IsQutoutiao() && g.Instance.hidePasterAd(), Laya.timer.clearAll(this), this.unregiestEvent();
        }
        regiestEvent() {
            d.Instance.on(s.RefZZSDKManager, this, this.initallZZSDK), this.closeBtn.on(Laya.Event.CLICK, this, this.onClosed),
                this.btn.on(Laya.Event.CLICK, this, this.onVedioBtn), d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted),
                d.Instance.on(s.CloseShowAd, this, this.onCloseShowAd);
        }
        unregiestEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.onClosed), this.btn.off(Laya.Event.CLICK, this, this.onVedioBtn),
                d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), d.Instance.off(s.CloseShowAd, this, this.onCloseShowAd),
                d.Instance.off(s.RefZZSDKManager, this, this.initallZZSDK);
        }
        onTuiBack1() {
            m.Instance.playUIClick(), ve.Instance.addInterFullList(this.zzsdkBox, B.back6),
                q.Instance.onBack(B.back6);
        }
        onClosed() {
            m.Instance.playUIClick(), P.Instance.showTips("SUCCESS"), m.Instance.playSound(u.Gold),
                Me.Instance.updateWithChangeData({
                    gold: this.coin
                }), P.Instance.closeUI(be.Offline), this._scene.showSkin();
        }
        onVedioBtn() {
            m.Instance.playUIClick(), this.curSharePos = y.OfflineAD, R.Instance.showVideoOrrShare(this.curSharePos);
        }
        onShowAdCompleted(e) {
            e === this.curSharePos && (P.Instance.showTips("SUCCESS"), m.Instance.playSound(u.Gold),
                Me.Instance.updateWithChangeData({
                    gold: 3 * this.coin
                }), this.a3xView && this.a3xView.clear(), this.curSharePos = y.Unknow, P.Instance.closeUI(be.Offline));
        }
        onCloseShowAd(e) {}
        getPinY() {
            if (Be.IsWeChat() && !R.Instance.aCheck() && this.closeBtn) {
                return this.closeBtn.localToGlobal(new Laya.Point(0, this.closeBtn.height)).y + _e.bannerMoveY();
            }
            return -1;
        }
    }
    class Ie extends e.item.ZZSDKFullUI {
        constructor() {
            super(...arguments), this.cb = null, this.fullscroll = null;
        }
        init(e) {
            this.cb = e.cb, this.regiestEvent(), this.continueBtn.visible = !1, this.initView(),
                F.once(1e3 * h.vGameInfo.wxshowbtntime, this, () => {
                    this.continueBtn.visible = !0;
                });
        }
        uninit() {
            this.unregiestEvent();
        }
        regiestEvent() {
            this.continueBtn.on(Laya.Event.CLICK, this, this.onContinue);
        }
        unregiestEvent() {
            this.continueBtn.off(Laya.Event.CLICK, this, this.onContinue);
        }
        initView() {
            this.fullBox.top = Be.isLong() ? 100 : 35, this.fullscroll = ve.Instance.addInterFulllarge(this.fullBox);
        }
        onTuiBack() {
            m.Instance.playUIClick(), ve.Instance.addInterFullList(this, B.back2), q.Instance.onBack(B.back2);
        }
        onContinue() {
            m.Instance.playUIClick(), this.fullscroll && this.fullscroll.clear(), this.cb && this.cb(),
                P.Instance.closeUI(be.ZZSDKFullView);
        }
    }
    class fe extends e.TryViewUI {
        constructor() {
            super(...arguments), this.cfg = null, this._scene = null, this.curSharePos = y.Unknow,
                this.zzYoulike = null;
        }
        init(e) {
            this.cfg = e.skinCfg, this._scene = e.se, this.registerEvent(), this.initView();
            let t = this;
            this.closeBtn.visible = !1, Laya.timer.once(1500, this, function() {
                t.closeBtn.visible = !0;
            });
            var i = Be.isLong() ? 80 : 25;
            ve.Instance.isOpenSDK() && (this.zzYoulike || (this.zzYoulike = ve.Instance.addYoulike(this.zzsdkBox, 0, B.youlike4, i + 70 + 50))),
                this.updateDayNotTryCheck();
        }
        onTuiBack() {
            m.Instance.playUIClick(), ve.Instance.addInterFullList(this.zzsdkBox, B.back7),
                q.Instance.onBack(B.back7);
        }
        uninit() {
            this.zzYoulike && this.zzYoulike.clear(), Laya.timer.clearAll(this), this.unregisterEvent();
        }
        registerEvent() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.onClosed), this.btn.on(Laya.Event.CLICK, this, this.onBtn),
                d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted), d.Instance.on(s.CloseShowAd, this, this.onCloseShowAd);
        }
        unregisterEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.onClosed), this.btn.off(Laya.Event.CLICK, this, this.onBtn),
                d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), d.Instance.off(s.CloseShowAd, this, this.onCloseShowAd);
        }
        initView() {
            m.Instance.playSound(u.LevelUpdate), this.carImg.skin = this.cfg.ResIcon.replace(/game/g, "x"),
                this.bgAni.play(0, !0), this.heartAni.play(0, !0);
        }
        onClosed() {
            m.Instance.playUIClick(), this.doClose();
        }
        onBtn() {
            m.Instance.playUIClick(), this.curSharePos = y.FreeTryAD, R.Instance.showVideoOrrShare(this.curSharePos);
        }
        onShowAdCompleted(e) {
            e === this.curSharePos && (Re.Instance.setTempSkin(this.cfg.Id), this.curSharePos = y.Unknow,
                this.doClose());
        }
        doClose() {
            P.Instance.closeUI(be.TryView), this._scene.showSkin(), this._scene.ReadyGameDo();
        }
        onCloseShowAd(e) {}
        onDayNot() {
            Me.Instance.dayNotTry = !Me.Instance.dayNotTry, this.updateDayNotTryCheck();
        }
        updateDayNotTryCheck() {}
    }
    class we extends e.GoldViewUI {
        constructor() {
            super(...arguments), this.gold = 200, this.doublebtnTimeLine = null, this.videoCallBack = null,
                this.skinpage = null;
        }
        init(e) {
            this.skinpage = e, this.initView(), this.registerEvent();
        }
        uninit() {
            this.unregisterEvent();
        }
        registerEvent() {
            this.closeBtn.on(Laya.Event.CLICK, this, this.closeView), this.doubleBtn.on(Laya.Event.CLICK, this, this.onDoubleBtnClick),
                d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted);
        }
        unregisterEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.closeView), this.doubleBtn.off(Laya.Event.CLICK, this, this.onDoubleBtnClick),
                d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), this.doublebtnTimeLine.destroy();
        }
        onCloseView() {
            m.Instance.playUIClick(), this.closeView();
        }
        closeView() {
            this.skinpage.refglod(), P.Instance.closeUI(be.GoldView);
        }
        initView() {
            this.gold = 200;
            let e = 100 * Math.floor(Me.Instance.level / 10) + 200;
            e > 1e3 && (e = 1e3), this.gold = e, this.goldLab.text = "COIN+" + e; {
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
            m.Instance.playUIClick();
            platform.getInstance().showReward(() => {
                m.Instance.playSound(u.Gold);
                Me.Instance.updateWithChangeData({
                    gold: this.gold
                });
                P.Instance.showTips("SUCCESS"), this.closeView();
            });

            // this.curShareADPos = y.goldAdVideoAD, this.videoCallBack = (() => {
            //     m.Instance.playSound(u.Gold), Me.Instance.updateWithChangeData({
            //         gold: this.gold
            //     }), P.Instance.showTips("SUCCESS"), this.closeView();
            // }), R.Instance.showVideoOrrShare(this.curShareADPos);
        }
        onShowAdCompleted(e) {
            e === this.curShareADPos && (this.videoCallBack && this.videoCallBack(), this.videoCallBack = null);
        }
    }
    class ye extends e.ShiPinViewUI {
        constructor() {
            super(...arguments), this.coin = 0, this.curSharePos = y.Unknow, this._scene = null,
                this.a3xView = null, this.isinit = !1, this.zzYoulike = null;
        }
        init(e) {
            this._scene = e, this.regiestEvent(), this.initView();
        }
        initView() {
            if (ve.Instance.isOpenSDK()) {
                Be.isLong();
                this.zzYoulike || (this.zzYoulike = ve.Instance.addYoulike(this.zzsdkBox, B.youlike5, 0));
            }
        }
        uninit() {
            Be.IsQutoutiao() && g.Instance.hidePasterAd(), this.zzYoulike && this.zzYoulike.clear(),
                Laya.timer.clearAll(this), this.unregiestEvent();
        }
        regiestEvent() {
            d.Instance.on(s.ShowAdCompleted, this, this.onShowAdCompleted), d.Instance.on(s.CloseShowAd, this, this.onCloseShowAd),
                this.moreGame.on(Laya.Event.CLICK, this, this.onMoreGame), this.btnShow.on(Laya.Event.CLICK, this, this.onbtnShow);
        }
        onMoreGame() {
            m.Instance.playUIClick(), ve.Instance.openInterFull(), q.Instance.onBtn(B.coin6);
        }
        unregiestEvent() {
            d.Instance.off(s.ShowAdCompleted, this, this.onShowAdCompleted), d.Instance.off(s.CloseShowAd, this, this.onCloseShowAd),
                this.moreGame.off(Laya.Event.CLICK, this, this.onMoreGame), this.btnShow.off(Laya.Event.CLICK, this, this.onbtnShow);
        }
        onbtnShow() {
            m.Instance.playUIClick(), this.curSharePos = y.ShiPinAD, R.Instance.showVideoOrrShare(this.curSharePos);
        }
        onTuiBack1() {
            m.Instance.playUIClick(), ve.Instance.addInterFullList(this.zzsdkBox, B.back8),
                q.Instance.onBack(B.back6);
        }
        onShowAdCompleted(e) {
            e === this.curSharePos && (this.curSharePos = y.Unknow, this.close());
        }
        onCloseShowAd(e) {
            e === this.curSharePos && (this.curSharePos = y.Unknow, this.close());
        }
        close() {
            P.Instance.closeUI(be.ShiPinView);
        }
    }
    class be {
        static initConfig() {
            be.Load.cls = Z, be.Game.cls = re, be.Skin.cls = ce, be.Rand.cls = U, be.Result.cls = de,
                be.Reward.cls = ge, be.DaySign.cls = ue, be.Offline.cls = me, be.ZZSDKFullView.cls = Ie,
                be.TryView.cls = fe, be.EggView.cls = z, be.GoldView.cls = we, be.ShiPinView.cls = ye;
        }
    }
    be.Load = {
        id: 1,
        cls: null,
        res: null
    }, be.Game = {
        id: 2,
        cls: null,
        res: null
    }, be.TuiView = {
        id: 3,
        cls: null,
        res: null
    }, be.Skin = {
        id: 4,
        cls: null,
        res: null
    }, be.Rand = {
        id: 5,
        cls: null,
        res: null
    }, be.Result = {
        id: 6,
        cls: null,
        res: null
    }, be.Reward = {
        id: 7,
        cls: null,
        res: null
    }, be.DaySign = {
        id: 8,
        cls: null,
        res: null
    }, be.Offline = {
        id: 9,
        cls: null,
        res: null
    }, be.ZZSDKFullView = {
        id: 10,
        cls: null,
        res: null
    }, be.TryView = {
        id: 11,
        cls: null,
        res: null
    }, be.EggView = {
        id: 12,
        cls: null,
        res: null
    }, be.GoldView = {
        id: 13,
        cls: null,
        res: null
    }, be.ZZSDKPicView = {
        id: 14,
        cls: null,
        res: null
    }, be.ShiPinView = {
        id: 15,
        cls: null,
        res: null
    };
    class ve {
        constructor() {
            this.isOpen = !0, this._adSwitch = !1, this._validAd = !1, this._bannerE = !1, this._bannerMode = null,
                this._piandianE = !1, this._piandianMode = null, this._pifuE = !1, this._pifuMode = null,
                this._bannerrefE = !1, this._bannerrefMode = null, this._bannerreshipin = !1, this._bannerreshipinMode = null,
                this._cb = null;
        }
        static get Instance() {
            return null === ve._instance && (ve._instance = new ve()), ve._instance;
        }
        init(e) {
            if (this._cb = e, !this.isOpenSDK(!0)) return;
            let t = h.ClientVer;
            this.onComlete();
        }
        onComlete(e) {
            // ve.getAdCfg().then(e => {
            //     if (e) {
            //         if (ve.Instance._adSwitch = 1 === e.adSwitch, ve.Instance._validAd = 1 === e.validAd, 
            //         e.disFunc) {
            //             let t = e.disFunc[1];
            //             t && (ve.Instance._bannerE = 1 === t.status, ve.Instance._bannerMode = t);
            //             let i = e.disFunc[2];
            //             i && (ve.Instance._piandianE = 1 === i.status, ve.Instance._piandianMode = i);
            //             let n = e.disFunc[3];
            //             n && (ve.Instance._pifuE = 1 === n.status, ve.Instance._pifuMode = n);
            //             let s = e.disFunc[4];
            //             s && (ve.Instance._bannerrefE = 1 === s.status, ve.Instance._bannerrefMode = s);
            //             let a = e.disFunc[5];
            //             a && (ve.Instance._bannerreshipin = 1 === a.status, ve.Instance._bannerreshipinMode = a);
            //         }
            //         d.Instance.event(s.RefZZSDKManager);
            //     }
            // }).catch(e => {});
        }
        static getAdCfg() {
            let e = p.scene || "",
                t = p.channel || "",
                i = "https://wxa.639311.com/api/ban?scene=" + e + "&reviewVer=" + h.ClientVer + "&channel=" + t;
            return new Promise((e, t) => {
                let n = {
                    "content-type": "application/json;charset-UTF-8",
                    referer: "https://servicewechat.com/wx7732fb4278767d0a/30/page-frame.html"
                };
                new G((i, n) => {
                    i ? t(i) : 200 === n.code ? e(n.data) : t(n);
                }).sendGetWithUrl(i, "json", n);
            });
        }
        isOpenSDK(e = !1) {
            return e ? this.isOpen && Be.IsWeChat() : this.isOpen && Be.IsWeChat() && this.adSwitch();
        }
        adSwitch() {
            return this._adSwitch;
        }
        validAd() {
            return this._validAd;
        }
        checkBannerRefE() {
            return !!(this.isOpen && Be.IsWeChat() && this._bannerrefMode) && this.getERandData(this._bannerrefMode, "curBannerRef");
        }
        checkbannerreshipin() {
            if (this.isOpen && Be.IsWeChat() && this._bannerreshipin) {
                if (p.isNewPlayer) {
                    let e = "curbannerreshipin";
                    if (parseInt(Laya.LocalStorage.getItem(e) || "0") <= 1) return !1;
                    if (this._bannerreshipinMode && "" != this._bannerreshipinMode.show_per)
                        if (Math.random() <= this._bannerreshipinMode.show_per) return !1;
                }
                return !0;
            }
            return !1;
        }
        checkBannerE() {
            return !!(this.isOpen && Be.IsWeChat() && this._bannerMode) && this.getERandData(this._bannerMode, "curBanner");
        }
        checkPianDianE() {
            return !!(this.isOpen && Be.IsWeChat() && this._piandianE) && this.getERandData(this._piandianMode, "curPianDian");
        }
        getERandData(e, t) {
            let i = parseInt(Laya.LocalStorage.getItem(t) || "0"),
                n = se.random(1, 100);
            if ("" != e.show_per) {
                if ("" != e.show_num && i <= e.show_num && n <= 100 * e.show_per) return i += 1,
                    Laya.LocalStorage.setItem(t, i.toString()), !0;
            } else if (i <= e.show_num) return i += 1, Laya.LocalStorage.setItem(t, i.toString()), !0;
            return !1;
        }
        checkPiFuE() {
            return !!(this.isOpen && Be.IsWeChat() && this._pifuE) && this.getERandData(this._pifuMode, "curpifu");
        }
        addYoulike(e, t, i, n = null) {
            if (this.isOpenSDK()) {
                if (e) {
                    let t = window.zzsdkui.createYoulike(null, n, i, function() {
                        ve.Instance.openInterFull();
                    });
                    return t && e.addChild(t), t;
                }
                return null;
            }
        }
        addDrawer(e) {
            if (this.isOpenSDK() && this.validAd) {
                if (e) {
                    let t = window.zzsdkui.createDrawer("drawer_pic", null, function() {
                        ve.Instance.openInterFull();
                    }, null, .5 * Laya.stage.height, null, null, function(e) {});
                    return t && e.addChild(t), t;
                }
                return null;
            }
        }
        aliEvent(e, t) {}
        addFloat(e, t, i) {
            if (this.isOpenSDK()) {
                if (e) {
                    let n = window.zzsdkui.createFloat(t, i, null, function() {
                        ve.Instance.openInterFull();
                    });
                    return n && e.addChild(n), n;
                }
                return null;
            }
        }
        openInterFull(e = null) {
            this.isOpenSDK() && this.validAd && parent ? P.Instance.openUI(be.ZZSDKFullView, {
                cb: e
            }) : e && e();
        }
        addInterFull(e) {
            if (this.isOpenSDK() && this.validAd) {
                if (e) {
                    let t = Be.isLong() ? 100 : 35,
                        i = window.zzsdkui.createFullscroll("inter_full", Laya.stage.height - t, 0, null, function() {});
                    return i && e.addChild(i), i;
                }
                return null;
            }
        }
        addInterFulllarge(e, t = null) {
            if (this.isOpenSDK() && this.validAd) {
                if (e) {
                    let i = Be.isLong() ? 100 : 35,
                        n = window.zzsdkui.createFullscroll("inter_full_large", null, Laya.stage.height - i, t, function() {});
                    return n && e.addChild(n), n;
                }
                return null;
            }
        }
        openInterPic(e = null) {
            this.isOpenSDK() && this.validAd && parent ? P.Instance.openUI(be.ZZSDKPicView, {
                cb: e
            }) : e && e();
        }
        addInterFullList(e, t) {
            this.isOpenSDK() && ve.Instance.openInterFull();
        }
        add3x(e, t, i, n, s = "x") {
            if (this.isOpenSDK()) {
                if (e) {
                    let a = window.zzsdkui.createInterScroll("inter_" + s, 550, t, i, n, function() {
                        ve.Instance.openInterFull();
                    });
                    return a && e.addChild(a), a;
                }
                return null;
            }
        }
        add3Num(e, t, i, n, s = "3*2") {
            if (this.isOpenSDK()) {
                if (e) {
                    let a = window.zzsdkui.createInter(s, t, i, n, function() {
                        ve.Instance.openInterFull();
                    });
                    return a && (a.refreshInter(), e.addChild(a)), a;
                }
                return null;
            }
        }
    }
    ve._instance = null,
        function(e) {
            e.showFriendRank = "showFriendRank", e.hideFriendRank = "hideFriendRank", e.showFriendRankNextPage = "showFriendRankNextPage",
                e.showFrientRnakPrevPage = "showFrientRnakPrevPage", e.updateGradeList = "updateGradeList",
                e.updataScoreInfo = "updataScoreInfo", e.showFriendShareInfo = "showFriendShareInfo",
                e.targetShare = "targetShare";
        }(_ || (_ = {}));
    class Se {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1,
                this.lastInterstitialAdTime = 0, this.interstitialAd = null, this.info = {}, this.loginParams = {},
                this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0,
                this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null,
                this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = Se.sInfo, this.loginParams = null,
                "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.onShareAppMessage(e => this.onShareAppMessage(e)),
                    Laya.MiniAdpter.window.wx.showShareMenu({
                        withShareTicket: !0,
                        success: function() {},
                        fail: function() {}
                    }), d.Instance.on(s.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = y.DefaultShare,
                i = V.Instance.getVideoShareCfg(y.DefaultShare),
                n = _e.getShareInfoByCfg(i),
                a = n.shareContent,
                o = n.imgUrl,
                r = 0,
                h = "";
            return null != Me.Instance && null != Me.Instance.user && (h = Me.Instance.user.openid,
                r = Me.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + Me.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    d.Instance.event(s.ShareSuccess, {
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
                        Se.sInfo.encryptedData = t.encryptedData, Se.sInfo.iv = t.iv, Se.sInfo.nickName = t.userInfo.nickName,
                            Se.sInfo.avatar = t.userInfo.avatarUrl, Se.sInfo.sex = t.userInfo.gender, Se.sInfo.city = t.userInfo.city,
                            e.runWith(Se.sInfo);
                    },
                    n = t => {
                        e.runWith(Se.sInfo);
                    };
                wx.login({
                    success: e => {
                        Se.sInfo.wxCode = e.code, wx.getUserInfo({
                            withCredentials: !0,
                            lang: "zh_CN",
                            success: i,
                            fail: n,
                            complete: null
                        });
                    },
                    fail: () => {
                        Me.Instance.loginError = !0, d.Instance.event(s.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null,
                    pkgName: h.packageName
                });
            } else {
                Me.Instance.user.loadCacheData();
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
        shareM(e, t, i, n, a, o, r = "") {
            if (h.IgnoreShare) return void d.Instance.event(s.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var l = i,
                c = "";
            null != Me.Instance && null != Me.Instance.user && (c = Me.Instance.user.openid);
            let p = "inviteName=" + Me.Instance.user.nickName + "&openid=" + c + "&pos=" + this.sharePos + "&shareTime=" + o + "&inviteCode=" + Me.Instance.user.uid + "&shareScene=" + this.sharePos,
                g = n;
            t && (g = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: a,
                imageUrl: g,
                query: p,
                path: p,
                ald_desc: r || "",
                success: e => {
                    d.Instance.event(s.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: l
                    });
                },
                fail: () => {
                    d.Instance.event(s.ShareFail, {
                        pos: this.sharePos,
                        from: l
                    });
                },
                cancel: e => {}
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(e, t, i = "") {}
        onTotal(e) {
            if (e) switch (e) {
                case y.OfflineAD:
                    q.Instance.onVideo(B.video1);
                    break;

                case y.OpenRewardAD:
                    q.Instance.onVideo(B.video2);
                    break;

                case y.SignAD:
                    q.Instance.onVideo(B.video3);
                    break;

                case y.ZSResultAD:
                    q.Instance.onVideo(B.video4);
            }
        }
        showBanner(e, t, i, n, a, o = 0, r = 0, l = 0, c = !1) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            var g = "adunit-1cdb539c9bb2ffcb";
            null != t && (g = t);
            var u = !1;
            Be.IsWeChat() ? e === be.EggView.id ? u = !0 : ve.Instance.checkBannerRefE() && (u = !0) : this.bannerShowCount >= h.vGameInfo.bCount ? u = !0 : Date.now() - this.lastFetchBannerTime >= 1e3 * h.vGameInfo.bTimer && (u = !0),
                Be.shouldReBuild && (u = !0, Be.shouldReBuild = !1), (u || this.bannerLoadError) && null != this.bannerAd && (this.bannerAd.destroy(),
                    this.bannerAd = null, this.bannerRes = null), this.bannerLoadError = !1, this.showBannerPos = e;
            let m = a || 375;
            m = m / 375 * p.windowWidth, p.windowWidth > 375 && (o = o / 375 * p.windowWidth,
                r = r / 375 * p.windowWidth);
            let I = 10;
            if (l = l * (2 * p.windowHeight / Laya.stage.height) / 2, this.bannerShowInfo.hAlign = i,
                this.bannerShowInfo.vAlign = n, this.bannerShowInfo.pinY = l, this.bannerShowInfo.xOffset = o,
                this.bannerShowInfo.yOffset = r, null == this.bannerAd) this.bannerShowCount = 1,
                this.lastFetchBannerTime = Date.now(), this.bannerAd = wx.createBannerAd({
                    adUnitId: g,
                    style: {
                        left: 0,
                        top: 0,
                        width: m
                    }
                }), this.bannerAd.onError(e => {
                    this.report(D.loadBannerError, {
                        errorCode: e.errCode,
                        errMsg: e.errMsg
                    }), this.bannerLoadError = !0;
                }), this.bannerAd.onResize(e => {
                    this.report(D.loadBanner, {
                        duration: (Date.now() - this.lastFetchBannerTime) / 1e3
                    }), this.bannerRes = e, this.adjustBanner();
                });
            else {
                I = 0, this.bannerShowCount++, this.bannerRes && Laya.timer.once(1, this, this.adjustBanner);
            }
            this.bannerAd.show().then(() => {
                this.report(D.showBanner, {
                    bannerPos: e,
                    adUnitID: this.bannerAd.adUnitId
                }), setTimeout(() => {
                    d.Instance.event(s.ShowBannerCompleted, e);
                }, I);
            }).catch(e => {
                this.report(D.loadBannerError, {
                    errorCode: e.errCode,
                    errMsg: e.errMsg
                }), this.bannerLoadError = !0;
            }), this.bannerAd.style && (this.bannerAd.style.width = m);
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign,
                t = this.bannerShowInfo.vAlign,
                i = this.bannerShowInfo.pinY,
                n = this.bannerShowInfo.xOffset,
                a = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let o = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == e ? this.bannerAd.style.left = 0 + n + (_e.getDeviceRatio() > 2 ? 20 : 0) : 1 == e ? this.bannerAd.style.left = .5 * (p.windowWidth - o.width) + n : 2 == e && (this.bannerAd.style.left = p.windowWidth - o.width + n - (_e.getDeviceRatio() > 2 ? 20 : 0)),
                0 == t) this.bannerAd.style.top = 0 + a;
            else if (1 == t) this.bannerAd.style.top = .5 * (p.windowHeight - o.height) + a;
            else if (2 == t) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 50 / 2436 * Laya.stage.width),
                    this.bannerAd.style.top = p.windowHeight - o.height + a - e, i > 0 && i < this.bannerAd.style.top && (this.bannerAd.style.top = i + 2);
            }
            let r = (this.bannerAd.style.top + o.height) * Laya.stage.width / p.windowWidth,
                h = this.bannerAd.style.top * Laya.stage.width / p.windowWidth;
            d.Instance.event(s.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: r,
                top: h,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            null != this.bannerAd && this.bannerAd.hide();
        }
        report(e, t) {
            wx.aldSendEvent && wx.aldSendEvent(e, t);
        }
        postToOpenDataMessage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "",
                type: e,
                data: t,
                openid: Me.Instance.user.openid
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= h.ShareTickTimer) {
                    let e = !(!R.Instance._callShareCfg || !R.Instance._callShareCfg.fromVideoFail);
                    _e.finishShare(R.Instance._callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !R.Instance.wxCheck()) {
                    let e = "分享到不同群才能获得奖励!";
                    0 === this.sharePos && (e = "");
                }
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return Be.isAndroid && Be.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(_.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        setLoadingProgress(e) {}
        showModal(e) {}
        hideheziAd() {}
        showheziAd() {}
    }
    Se.sInfo = {};
    class Ce {
        constructor() {
            this.recorder = null, this.videoPath = null, this.recording = !1, this.doKilled = !1,
                this.pausing = !1, this.recordTime = 0, this.maxRecordTime = 0, Be.IsTouTiao() && "undefined" != typeof wx && (this.recorder = wx.getGameRecorderManager(),
                    this.initRecord());
        }
        static get Instance() {
            return null == Ce._instance && (Ce._instance = new Ce()), Ce._instance;
        }
        start(e = 120) {
            this.recorder && (this.recording && (this.recorder.stop(), this.recording = !1,
                    this.pausing = !1), this.recorder.start({
                    duration: e
                }), this.maxRecordTime = e, this.recording = !0, this.doKilled = !1, this.pausing = !1,
                Laya.timer.clearAll(this), this.recordTime = 0, Laya.timer.loop(1e3, this, this.updateRecordTime),
                d.Instance.event(s.UpdateRecordBtn));
        }
        updateRecordTime() {
            this.recording && !this.pausing && (this.recordTime += 1, this.recordTime + 1 >= this.maxRecordTime && this.stop());
        }
        canShowShareVideo() {
            return !!this.videoPath;
        }
        pause() {
            this.recorder && this.recorder.recording && (this.recorder.pause(), this.pausing = !0);
        }
        resume() {
            this.recorder && this.recorder.recording && this.pausing && this.recorder.resume();
        }
        stop() {
            this.recorder && this.recording && (Laya.timer.clearAll(this), this.recorder.stop(),
                this.recording = !1, d.Instance.event(s.UpdateRecordBtn));
        }
        initRecord() {
            this.recorder && (this.recorder.onStart(e => {}), this.recorder.onStop(e => {
                    let t = e.videoPath;
                    this.recordTime <= 3 && (t = null), this.videoPath = t;
                }), this.recorder.onPause(() => {}), this.recorder.onResume(() => {}), this.recorder.onError(e => {}),
                this.recorder.onInterruptionBegin(e => {}), this.recorder.onInterruptionEnd(e => {}));
        }
        shareVideo(e) {
            this.recording && this.stop(), Be.Instance.shareVideo(e);
        }
    }
    Ce._instance = null;
    class xe {
        constructor() {
            this.bannerAd = null, this.bannerAdPre = null, this.bannerZeroHeightCount = 0, this.bannerShowInfo = {},
                this.bannerError = !1, this.bannerLoadFinish = !1, this.checkShared = !0, this.curShareTimer = 0,
                this.checkSharedVideo = !0, this.curShareVideoTimer = 0, this.info = {}, this.loginParams = {},
                this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0,
                this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null,
                this.mta = null, this.lastEndVideoAdTime = 0, this.info = xe.sInfo, this.loginParams = null,
                "undefined" != typeof wx && (Laya.MiniAdpter.window.wx.aldOnShareAppMessage(e => this.onShareAppMessage(e)),
                    Laya.MiniAdpter.window.wx.showShareMenu({
                        withShareTicket: !0,
                        success: function() {},
                        fail: function() {}
                    }), d.Instance.on(s.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = y.DefaultShare,
                i = V.Instance.getVideoShareCfg(y.DefaultShare),
                n = _e.getShareInfoByCfg(i),
                a = n.shareContent,
                o = n.imgUrl,
                r = 0;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = 0, R.Instance._callShareCfg = null;
            let h = "";
            return null != Me.Instance && null != Me.Instance.user && (h = Me.Instance.user.openid,
                r = Me.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + Me.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: function(e) {
                    d.Instance.event(s.ShareSuccess, {
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
                        xe.sInfo.encryptedData = t.encryptedData, xe.sInfo.iv = t.iv, xe.sInfo.nickName = t.userInfo.nickName,
                            xe.sInfo.avatar = t.userInfo.avatarUrl, xe.sInfo.sex = t.userInfo.gender, xe.sInfo.city = t.userInfo.city,
                            e.runWith(xe.sInfo);
                    },
                    n = t => {
                        e.runWith(xe.sInfo);
                    };
                wx.login({
                    pkgName: "",
                    force: !1,
                    success: e => {
                        let t = null == e.code ? "" : e.code,
                            s = null == e.anonymousCode ? "" : e.anonymousCode,
                            a = !0;
                        t.length > 5 ? a = !1 : s.length, xe.sInfo.wxCode = t, xe.sInfo.nCode = s, h.isAnonymous = a,
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
                        Me.Instance.loginError = !0, d.Instance.event(s.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null
                });
            } else {
                Me.Instance.user.loadCacheData();
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
        shareM(e, t, i, n, a, o, r = "") {}
        shareVideo(e) {}
        showVideo(e, t, i = "") {}
        showBanner(e, t, i, n, a, o = 0, r = 0, l = 0) {}
        adjustBanner() {}
        hideBanner() {}
        report(e, t) {}
        showFriendRank(e, t) {}
        hideFriendRank(e) {}
        showFriendRankPage(e, t) {}
        queryRank(e, t, i) {}
        uploadGradeData(e) {}
        onCheckShare() {}
        onCheckShareVideo() {}
        onGameFocus() {}
        isLowDevice() {}
        reportAnalytics(e) {}
        postToOpenDataMessage(e, t) {}
        updataScoreInfo() {}
        hasOpenAD() {}
        setLoadingProgress(e) {}
        showModal(e) {}
        hideheziAd() {}
        showheziAd() {}
    }
    xe.sInfo = {};
    class ke {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1,
                this.appBox = null, this.appBoxHide = !1, this.maskBox = null, this.info = {}, this.loginParams = {},
                this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0,
                this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null,
                this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = ke.sInfo, this.loginParams = null,
                "undefined" != typeof wx && (wx.onShareAppMessage(e => this.onShareAppMessage(e)),
                    wx.showShareMenu({
                        withShareTicket: !0,
                        success: function() {},
                        fail: function() {}
                    }), d.Instance.on(s.GetFocus, this, this.onGameFocus));
        }
        onShareAppMessage(e) {
            let t = y.DefaultShare,
                i = V.Instance.getVideoShareCfg(y.DefaultShare),
                n = _e.getShareInfoByCfg(i),
                a = n.shareContent,
                o = n.imgUrl,
                r = 0,
                h = "";
            return null != Me.Instance && null != Me.Instance.user && (h = Me.Instance.user.openid,
                r = Me.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + Me.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    d.Instance.event(s.ShareSuccess, {
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
                        ke.sInfo.encryptedData = t.encryptedData, ke.sInfo.iv = t.iv, ke.sInfo.nickName = t.userInfo.nickName,
                            ke.sInfo.avatar = t.userInfo.avatarUrl, ke.sInfo.sex = t.userInfo.gender, ke.sInfo.city = t.userInfo.city,
                            e.runWith(ke.sInfo);
                    },
                    n = t => {
                        e.runWith(ke.sInfo);
                    };
                wx.login({
                    success: e => {
                        ke.sInfo.wxCode = e.code, wx.getSetting({
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
                        Me.Instance.loginError = !0, d.Instance.event(s.userLoginFinish, {
                            logined: !1
                        });
                    },
                    complete: null,
                    pkgName: h.packageName
                });
            } else {
                Me.Instance.user.loadCacheData();
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
                success: function() {},
                fail: null,
                complete: null
            });
        }
        sdkAuthorize(e) {
            wx.authorize({
                scope: e,
                success: () => {},
                fail: () => {},
                complete: null
            });
        }
        shareM(e, t, i, n, a, o, r = "") {
            if (h.IgnoreShare) return void d.Instance.event(s.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var l = i,
                c = "";
            null != Me.Instance && null != Me.Instance.user && (c = Me.Instance.user.openid);
            let p = "inviteName=" + Me.Instance.user.nickName + "&openid=" + c + "&pos=" + this.sharePos + "&shareTime=" + o + "&inviteCode=" + Me.Instance.user.uid + "&shareScene=" + this.sharePos,
                g = n;
            t && (g = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: a,
                imageUrl: g,
                query: p,
                path: p,
                ald_desc: r || "",
                success: e => {
                    d.Instance.event(s.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: l
                    });
                },
                fail: () => {
                    d.Instance.event(s.ShareFail, {
                        pos: this.sharePos,
                        from: l
                    });
                },
                cancel: () => {}
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(e, t, i = "") {}
        showBanner(e, t, i, n, a, o = 0, r = 0, l = 0, c = !1) {}
        adjustBanner() {}
        hideBanner() {}
        report(e, t) {}
        postToOpenDataMessage(e, t) {}
        onCheckShare() {}
        onGameFocus() {}
        isLowDevice() {}
        reportAnalytics(e) {}
        updataScoreInfo(e) {}
        shareVideo(e) {}
        hasOpenAD() {}
        setLoadingProgress(e) {}
        showModal(e) {}
        hideheziAd() {}
        showheziAd() {}
        onMaskClick(e) {}
    }
    ke.sInfo = {};
    class Le {
        constructor() {
            this.bannerAd = null, this.bannerShowInfo = {}, this.checkShared = !0, this.bannerLoadError = !1,
                this.lastInterstitialAdTime = 0, this.interstitialAd = null, this.info = {}, this.loginParams = {},
                this.setNickNameCallback = null, this.setHeadCallback = null, this.showPos = 0,
                this.sharePos = 0, this.showBannerPos = 0, this.lastFetchBannerTime = 0, this.rewardedVideoAd = null,
                this.curShareTimer = null, this.lastEndVideoAdTime = 0, this.info = Le.sInfo, this.loginParams = null;
        }
        onShareAppMessage(e) {
            let t = y.DefaultShare,
                i = V.Instance.getVideoShareCfg(y.DefaultShare),
                n = _e.getShareInfoByCfg(i),
                a = n.shareContent,
                o = n.imgUrl,
                r = 0,
                h = "";
            return null != Me.Instance && null != Me.Instance.user && (h = Me.Instance.user.openid,
                r = Me.Instance.user.uid), {
                title: a,
                imageUrl: o,
                query: "inviteName=" + Me.Instance.user.nickName + "&openid=" + h + "&pos=" + t + "&shareTime=" + Date.now() + "&inviteCode=" + (r > 0 ? r : ""),
                success: e => {
                    d.Instance.event(s.ShareSuccess, {
                        pos: 0,
                        shareTickets: e.shareTickets,
                        from: 1
                    });
                }
            };
        }
        sdkLogin(e, t) {
            e.runWith(Le.sInfo);
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
        shareM(e, t, i, n, a, o, r = "") {
            if (h.IgnoreShare) return void d.Instance.event(s.ShareSuccess, {
                pos: e
            });
            if ("undefined" == typeof wx) return;
            this.checkShared = !0, this.curShareTimer = Date.now(), this.sharePos = e;
            var l = i,
                c = "";
            null != Me.Instance && null != Me.Instance.user && (c = Me.Instance.user.openid);
            let p = "inviteName=" + Me.Instance.user.nickName + "&openid=" + c + "&pos=" + this.sharePos + "&shareTime=" + o + "&inviteCode=" + Me.Instance.user.uid + "&shareScene=" + this.sharePos,
                g = n;
            t && (g = canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })), wx.aldShareAppMessage({
                title: a,
                imageUrl: g,
                query: p,
                path: p,
                ald_desc: r || "",
                success: e => {
                    d.Instance.event(s.ShareSuccess, {
                        pos: this.sharePos,
                        shareTickets: e.shareTickets,
                        from: l
                    });
                },
                fail: () => {
                    d.Instance.event(s.ShareFail, {
                        pos: this.sharePos,
                        from: l
                    });
                },
                cancel: e => {}
            }), Laya.timer.clear(this, this.onCheckShare);
        }
        showVideo(e, t, i = "") {
            if ("undefined" == typeof qttGame || !qttGame.showVideo) return;
            let n = {};
            n.index = e, n.gametype = 1, n.rewardtype = 1, m.Instance.stopMusic(), g.Instance.isplaymuisc = !0,
                qttGame.showVideo(t => {
                    m.Instance.playBgm(), g.Instance.isplaymuisc = !1, 1 == t ? (R.Instance.onShowAdCompleted(e),
                        d.Instance.event(s.ShowAdCompleted, e), d.Instance.event(s.CloseShowAd, e), this.lastEndVideoAdTime = Date.now(),
                        d.Instance.event(s.FinishVideoAd, e)) : d.Instance.event(s.CloseShowAd, e);
                }, n);
        }
        showBanner(e, t, i, n, s, a = 0, o = 0, r = 0, h = !1) {
            "undefined" != typeof qttGame && qttGame.showBanner && qttGame.showBanner({
                index: e,
                x: 100,
                y: 100,
                w: 100,
                stage_width: p.windowWidth,
                stage_height: p.windowHeight
            });
        }
        adjustBanner() {
            let e = this.bannerShowInfo.hAlign,
                t = this.bannerShowInfo.vAlign,
                i = this.bannerShowInfo.pinY,
                n = this.bannerShowInfo.xOffset,
                a = this.bannerShowInfo.yOffset;
            if (!this.bannerRes) return;
            let o = this.bannerRes;
            if (null == this.bannerAd || null == this.bannerAd.style) return;
            if (0 == e ? this.bannerAd.style.left = 0 + n + (_e.getDeviceRatio() > 2 ? 20 : 0) : 1 == e ? this.bannerAd.style.left = .5 * (p.windowWidth - o.width) + n : 2 == e && (this.bannerAd.style.left = p.windowWidth - o.width + n - (_e.getDeviceRatio() > 2 ? 20 : 0)),
                0 == t) this.bannerAd.style.top = 0 + a;
            else if (1 == t) this.bannerAd.style.top = .5 * (p.windowHeight - o.height) + a;
            else if (2 == t) {
                let e = 0;
                Laya.stage.height / Laya.stage.width > 2 && (e = 50 / 2436 * Laya.stage.width),
                    this.bannerAd.style.top = p.windowHeight - o.height + a - e, i > 0 && i < this.bannerAd.style.top && (this.bannerAd.style.top = i + 2);
            }
            let r = (this.bannerAd.style.top + o.height) * Laya.stage.width / p.windowWidth,
                h = this.bannerAd.style.top * Laya.stage.width / p.windowWidth;
            d.Instance.event(s.BannerPosChange, {
                ADPos: this.showBannerPos,
                bottom: r,
                top: h,
                BannerAD: this.bannerAd
            });
        }
        hideBanner() {
            "undefined" != typeof qttGame && qttGame.showBanner && qttGame.hideBanner();
        }
        report(e, t) {}
        postToOpenDataMessage(e, t) {
            "undefined" != typeof wx && wx.getOpenDataContext && wx.getOpenDataContext().postMessage({
                text: "",
                type: e,
                data: t,
                openid: Me.Instance.user.openid
            });
        }
        onCheckShare() {
            if (this.checkShared && this.curShareTimer > 0) {
                if (Date.now() - this.curShareTimer >= h.ShareTickTimer) {
                    let e = !(!R.Instance._callShareCfg || !R.Instance._callShareCfg.fromVideoFail);
                    _e.finishShare(R.Instance._callShareCfg.pos, !0, e);
                } else if ("undefined" != typeof wx && !R.Instance.wxCheck()) {}
                this.curShareTimer = 0, this.checkShared = !1;
            }
        }
        onGameFocus() {
            setTimeout(() => {
                this.onCheckShare();
            }, 100);
        }
        isLowDevice() {
            return Be.isAndroid && Be.isLowDevice;
        }
        reportAnalytics(e) {}
        updataScoreInfo(e) {
            this.postToOpenDataMessage(_.updataScoreInfo, e);
        }
        shareVideo(e) {}
        hasOpenAD() {
            return !0;
        }
        setLoadingProgress(e) {}
        showModal(e) {}
        hideheziAd() {}
        showheziAd() {}
    }
    Le.sInfo = {};
    class Be {
        static get Instance() {
            if (null == Be._instance) switch (h.Platform) {
                case t.Wechat:
                    "undefined" != typeof wx ? Be._instance = new Se() : Be._instance = new I();
                    break;

                case t.TouTiao:
                    "undefined" != typeof wx ? Be._instance = new xe() : Be._instance = new I();
                    break;

                case t.QQ:
                    "undefined" != typeof wx ? Be._instance = new ke() : Be._instance = new I();
                    break;

                case t.Qutoutiao:
                    "undefined" != typeof qttGame ? Be._instance = new Le() : Be._instance = new I();
                    break;

                default:
                    Be._instance = new I();
            }
            return Be._instance;
        }
        static IsTencentGame() {
            return h.Platform == t.Wechat || h.Platform == t.QQ;
        }
        static IsWeChat() {
            return h.Platform == t.Wechat;
        }
        static IsTouTiao() {
            return h.Platform == t.TouTiao;
        }
        static IsQQ() {
            return h.Platform == t.QQ;
        }
        static IsOppo() {
            return h.Platform == t.Oppo;
        }
        static IsQutoutiao() {
            return h.Platform == t.Qutoutiao;
        }
        static canShowWXOpenDomain() {
            return !!_e.onMobile() && (!(!Be.IsTencentGame() || !h.SupportOpenDomain) && "undefined" != typeof wx);
        }
        static isLong() {
            return !(Laya.stage.height / Laya.stage.width < 2);
        }
        static nodeReport(e, t) {
            p.isNewPlayer && Be.Instance.report(e, t);
        }
        static shouldShowTReommend() {
            return !!this.IsTouTiao() && ("undefined" != typeof wx && void 0 !== wx.createMoreGamesButton && !(this.isIos && !h.vGameInfo.tIosRecommend));
        }
        static getPlatform() {
            return "undefined" != typeof qg ? qg : "undefined" != typeof wx ? wx : null;
        }
        static registerQGAldRequest() {
            if ("undefined" != typeof qg && !qg.aldRequest) {
                qg.aldRequest = (e => {
                    let t = e.url,
                        i = e.data;
                    return new Promise((n, s) => {
                        new G((t, i) => {
                            t ? e.fail() : e.success({
                                statusCode: 200,
                                data: i
                            });
                        }).sendGet(t, i, "text", e.header);
                    });
                }); {
                    let e = {},
                        t = "https://glog.aldwx.com/config/app.json";
                    new G((e, t) => {}).sendGet(t, e, "text");
                }
            }
        }
        static onShow(e, t) {
            return Be.IsQutoutiao() && window.document.addEventListener("visibilitychange", e => {
                window.document.hidden ? m.Instance.stopMusic() : g.Instance.isplaymuisc || m.Instance.playBgm();
            }), "undefined" != typeof qg ? (qg.onShow && qg.onShow(e), void(qg.onHide && qg.onHide(t))) : "undefined" != typeof qq ? (qq.onShow && qq.onShow(e),
                void(qq.onHide && qq.onHide(t))) : "undefined" != typeof wx ? (Laya.MiniAdpter.window.wx.onShow(e),
                void Laya.MiniAdpter.window.wx.onHide(t)) : void 0;
        }
        static vibrateShort() {
            "undefined" == typeof wx || wx.vibrateShort({
                success: null,
                fail: null,
                complete: null
            });
        }
    }
    Be.isQG = !1, Be.shouldReBuild = !1;
    class _e {
        static onMobile() {
            return Laya.Browser.onIOS || Laya.Browser.onAndroid || Laya.Browser.onMobile;
        }
        static finishVideo(e) {
            d.Instance.event(s.ShowAdCompleted, e), d.Instance.event(s.CloseShowAd, e);
        }
        static getShareInfoByCfg(e) {
            if (e && e.imgUrl && e.imgUrl.length && e.shareContent && e.shareContent.length) return {
                imgUrl: e.imgUrl,
                shareContent: e.shareContent
            };
            let t = h.ShareInfoList.length;
            if (t > 0) {
                let e = Math.floor(Math.random() * t);
                if (Be.IsTouTiao() && (e = 0), e < t) return h.ShareInfoList[e];
            }
            return {
                imgUrl: "",
                shareContent: ""
            };
        }
        static getDeviceRatio() {
            return Laya.stage.height / Laya.stage.width;
        }
        static getBannerOffset() {
            return 20;
        }
        static getNormalBannerOffset() {
            return 40 / p.windowWidth * Laya.stage.width;
        }
        static bannerMoveY(e = 0) {
            return _e.getNormalBannerOffset() + e;
        }
        static checkOverDay() {
            let e = parseInt(Laya.LocalStorage.getItem("curPlayDay") || "0"),
                t = Date.now(),
                i = !c.isSameDay(t, e);
            return i && Laya.LocalStorage.setItem("curPlayDay", t.toString()), i;
        }
        static finishShare(e, t = !1, i = !1) {
            R.Instance.onShowAdCompleted(e, i), d.Instance.event(s.ShowAdCompleted, e), d.Instance.event(s.CloseShowAd, e);
        }
        static finishShareVideo(e) {
            d.Instance.event(s.ShowShareVideoCompleted, e), d.Instance.event(s.CloseShowShareViedo, e);
        }
        static subString(e, t, i) {
            for (var n = 0, s = "", a = /[^\x00-\xff]/g, o = "", r = e.replace(a, "**").length, h = 0; h < r && (null == (o = e.charAt(h).toString()).match(a) ? n++ : n += 2, !(n > t)); h++) s += o;
            return i && r > t && (s += "..."), s;
        }
        static clearDictionary(e) {
            for (var t in e) delete e[t];
        }
        static arrayRemove(e, t) {
            let i = e.indexOf(t);
            i > -1 && e.splice(i, 1);
        }
        static setVector3(e, t, i, n) {
            e.x = t, e.y = i, e.z = n;
        }
        static Vector3MulNumber(e, t) {
            return new Laya.Vector3(e.x * t, e.y * t, e.z * t);
        }
        static uuid() {
            var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                i = [];
            for (e = 0; e < 32; e++) i[e] = t[0 | 16 * Math.random()];
            return i.join("");
        }
    }! function(e) {
        e[e.write = 1] = "write", e[e.black = 2] = "black", e[e.green = 3] = "green", e[e.yellow = 4] = "yellow",
            e[e.red = 5] = "red", e[e.blacksugar = 6] = "blacksugar", e[e.redsugar = 7] = "redsugar",
            e[e.ice = 8] = "ice", e[e.redwater = 9] = "redwater", e[e.yellowwater = 10] = "yellowwater",
            e[e.bluewater = 11] = "bluewater";
    }(A || (A = {}));
    let Ae = ["game/m_dropwriteZZ.png", "game/m_dropblackZZ.png", "game/m_dropyellowZZ.png", "game/m_dropredZZ.png", "game/m_dropgreedZZ.png", "game/m_dropblackSugar.png", "game/m_dropredSugar.png", "game/m_dropIce.png"],
        De = ["game/m_showwaitezz.png", "game/m_showblackzz.png", "game/m_showwaitezz.png", "game/m_showredzz.png", "game/m_showgreedzz.png", "game/m_showblacksugar.png", "game/m_showredsugar.png", "game/m_showice.png", "game/m_showredwater.png", "game/m_showyellowwater.png", "game/m_showbulewater.png"],
        Te = ["game/m_writeZZ.png", "game/m_blackZZ.png", "game/m_yellowZZ.png", "game/m_redZZ.png", "game/m_greedZZ.png", "game/m_blacksugar.png", "game/m_redsugar.png", "game/m_ice.png", "game/m_redwater.png", "game/m_yellowwater.png", "game/m_bulewater.png"];
    class Me {
        constructor() {
            this.inviteCode = "", this.headIconUrl = "", this.logined = !1, this.loginError = !1,
                this.successLoginCb = null, this.updateInfoData = null, this.isReadData = !1, this.lastSendDataTime = 0,
                this.saveDataTime = 240, this.flushSaveDataTime = 20, this.IsRandomScene = !1, this.m_onlineStartTime = 0,
                this.user = new l(), this.headIconUrl = "", Laya.timer.loop(1e3 * this.flushSaveDataTime, this, this.doSaveGameData),
                d.Instance.on(s.OverDayEvent, this, this.resetByOverDay);
        }
        static get Instance() {
            return null == Me._instance && (Me._instance = new Me()), Me._instance;
        }
        resetByOverDay() {
            let e = Laya.Browser.now(),
                t = this.user.playerInfo;
            t.login_date = e, t.dayBattleCount = 0, t.dayNotTry = !1;
        }
        doSaveGameData(e = !1, t = !1) {
            let i = t,
                n = Laya.Browser.now();
            this.realSaveData();
        }
        realSaveData(e = !1, t = 0) {
            Laya.timer.clear(this, this.realSaveData);
            let i = Laya.Browser.now();
            this.user.playerInfo.save_time = i, this.user.playerInfo.ver = h.ClientVer, this.user.saveToStorage();
        }
        static saveGameData(e = !1, t = !1) {
            Me.Instance.doSaveGameData(e, t);
        }
        readDataInfo(e) {
            if (this.isReadData) return;
            h.recoverData || (e = null), this.user.isDefaultData && e && (this.user.playerInfo = Object.assign({}, e)),
                this.user.isDefaultData = !1, this.isReadData = !0;
            let t = this.user.playerInfo.login_date;
            !1 === c.isToday(t) && this.resetByOverDay(), this.doSaveGameData();
        }
        get gold() {
            return this.user.playerInfo.gold || (this.user.playerInfo.gold = 0), this.user.playerInfo.gold || 0;
        }
        set gold(e) {
            this.user.playerInfo.gold = e;
        }
        get playerInfo() {
            return this.user && !this.user.playerInfo && (this.user.playerInfo = {}), this.user.playerInfo;
        }
        updateWithChangeData(e) {
            if (!this.playerInfo) return;
            let t = this.playerInfo;
            for (let i in e) {
                t[i] += e[i];
            }
            if (this.playerInfo.gold) {
                this.user.playerInfo.gold = this.playerInfo.gold;
            }
            d.Instance.event(s.PlayerGoodsUpdate);
            this.doSaveGameData();

        }
        get battleCount() {
            return this.playerInfo.battleCount || 0;
        }
        set battleCount(e) {
            this.playerInfo.battleCount = e || 0;
        }
        get dayBattleCount() {
            return this.playerInfo.dayBattleCount || 0;
        }
        set dayBattleCount(e) {
            this.playerInfo.dayBattleCount = e || 0;
        }
        get grade() {
            return this.playerInfo.grade || 1;
        }
        set grade(e) {
            this.playerInfo.grade = e;
        }
        get level() {
            return this.user.playerInfo.level || 1;
        }
        set level(e) {
            this.user.playerInfo.level = e;
        }
        get onlineStartTime() {
            return this.m_onlineStartTime || 0;
        }
        set onlineStartTime(e) {
            this.m_onlineStartTime = e;
        }
        get onlineTime() {
            return this.playerInfo.onlineTime || 0;
        }
        set onlineTime(e) {
            this.playerInfo.onlineTime = e;
        }
        get dayNotTry() {
            return this.playerInfo.dayNotTry || !1;
        }
        set dayNotTry(e) {
            this.playerInfo.dayNotTry = e;
        }
        getUUID() {
            let e = Laya.LocalStorage.getJSON("useruuid");
            return e || (e = _e.uuid()) && Laya.LocalStorage.setJSON("useruuid", e), e;
        }
    }
    var Ve;
    Me._instance = null, Me.taskRed = !1,
        function(e) {
            e[e.free = 0] = "free", e[e.vedio = 1] = "vedio", e[e.grade = 2] = "grade", e[e.sign = 3] = "sign";
        }(Ve || (Ve = {}));
    class Re {
        constructor() {
            this.tempSkin = -1;
        }
        static get Instance() {
            return null === Re._instance && (Re._instance = new Re()), Re._instance;
        }
        get curSkin() {
            return Me.Instance.playerInfo.curSkin || 1;
        }
        set curSkin(e) {
            Me.Instance.playerInfo.curSkin = e;
        }
        getSkinCfg(e) {
            return e > V.Instance.skinCfg.length && (e = 1), V.Instance.skinCfg[e - 1];
        }
        hasComplete(e) {
            return !1;
        }
        getSkinInfo(e) {
            return (Me.Instance.playerInfo.skinArr || [])[e] || !1;
        }
        setSkinInfo(e, t) {
            Me.Instance.playerInfo.skinArr[e] = t, Me.Instance.doSaveGameData();
        }
        setTempSkin(e) {
            this.tempSkin = e;
        }
        resetTempSkin() {
            this.tempSkin = -1;
        }
        getGameSkinId() {
            let e = this.curSkin;
            return this.tempSkin >= 0 && (e = this.tempSkin), e;
        }
        getRandomSkinId() {
            return M.getRandom(1, 5);
        }
        getRandomLockSkinCfg() {
            let e = [],
                t = V.Instance.itemsConfigData;
            if (t)
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    Re.Instance.getSkinInfo(n.Id) || e.push(n);
                }
            if (e.length > 0) {
                return e[Math.floor(Math.random() * (e.length - 1))];
            }
            return null;
        }
        getItemCfg(e) {
            return V.Instance.itemsConfigData[e - 1];
        }
        getItemCfgLength() {
            return V.Instance.itemsConfigData.length;
        }
        getUnlockSkinCount() {
            var e = 0,
                t = V.Instance.itemsConfigData;
            for (let i = 0; i < t.length; i++) this.getSkinInfo(t[i].Id) && e++;
            return e;
        }
    }
    Re._instance = null;
    class Pe {
        constructor() {
            this.coin = 0, this.title = "", this.skinId = 0, this.isDouble = !1, this.highlight = !1,
                this.signed = !1;
        }
    }
    class Fe extends e.item.SignItemViewUI {
        constructor() {
            super(...arguments), this.item = null;
        }
        onEnable() {}
        onDisable() {}
        updateSignItem(e) {
            if (this.item = e, this.bgImage.skin = e.highlight ? "sign/cur_item_bg.png" : "sign/item_bg.png",
                this.titleLabel.color = e.highlight ? "#AF7302" : "#343D72", e.skinId > 0) {
                this.shineImage.visible = !0, this.ani1.play(0, !0);
                let t = Re.Instance.getSkinCfg(e.skinId);
                this.itemImageView.skin = t && t.img || "", this.descLabel.text = "";
            } else this.shineImage.visible = !1, this.ani1.stop(), this.descLabel.text = `X${e.coin || 0}`,
                this.itemImageView.skin = "game/gold2.png";
            this.titleLabel.text = e.title, this.signedImage.visible = e.signed, this.containBox.disabled = e.signed;
        }
    }
    class Ee extends Laya.Box {
        constructor() {
            super(), this.uiname = "", this.uiname = null, Laya.timer.once(20, this, this.adapter);
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
        static getBangSafeOffX() {
            return Laya.stage.width / Laya.stage.height < 2 ? 0 : 132 / 2436 * Laya.stage.width;
        }
        adapter() {
            if ("scale" === this.name) {
                var e = Laya.stage.width / Laya.stage.designWidth,
                    t = Laya.stage.height / Laya.stage.designHeight,
                    i = e > t ? e : t;
                return this.scaleX = i, this.scaleY = i, this.uiname = this.parent.uiname, void P.Instance.addAdapter(this);
            }
            Laya.stage.designHeight, Laya.stage.designWidth;
            if (!(Laya.stage.height / Laya.stage.width < 2)) {
                var n = 132 / 2436 * Laya.stage.height;
                isNaN(this.top) || (this.top = n + this.top);
            }
        }
    }
    class Ne extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            if (this.owner) {
                let e = this.owner.getChildByName("btnBg");
                Be.IsTouTiao() || Be.IsOppo() ? e.visible = !0 : e.visible = !1;
            }
        }
        onDisable() {}
    }
    class ze extends e.tui.BottomTuiViewUI {
        constructor() {
            super();
        }
        onEnable() {
            W.Instance.canShowWXRecommend ? (this.registerEvent(), this.updateDataSource()) : this.visible = !1;
        }
        onDisable() {
            this.unregisterEvent(), Laya.timer.clearAll(this);
        }
        registerEvent() {
            d.Instance.on(x.UpdateData, this, this.updateDataSource);
        }
        unregisterEvent() {
            d.Instance.off(x.UpdateData, this, this.updateDataSource);
        }
        updateDataSource() {
            let e = W.Instance.getInfo("lunbo");
            if (e && e.length > 0) {
                let t = [].concat(e);
                this.tuiList.visible = !0, this.tuiList.hScrollBarSkin = "", this.tuiList.updateDataSource(W.getScorllData(t)),
                    this.tuiList.selectEnable = !0;
                let i = Math.floor(Math.random() * t.length);
                this.tuiList.renderHandler = new Laya.Handler(this, function(e, n) {
                    let s = (n + i) % t.length,
                        a = t[s];
                    if (!a) return;
                    let o = e.getChildByName("itemImg"),
                        r = e.getChildByName("itemName"),
                        h = e.getChildByName("itemRed");
                    W.checkTuiItemRed(h), o.updateImage(a.appIcon), r.text = a.appName, e.offAll(null),
                        e.on(Laya.Event.CLICK, this, function() {
                            W.Instance.jumpApp(a, L.homeList);
                        });
                });
            }
        }
    }
    class Ue extends Laya.List {
        constructor() {
            super(...arguments), this.isForward = !0;
        }
        onEnable() {
            this.on(Laya.Event.MOUSE_UP, this, this.doAnimate), this.on(Laya.Event.MOUSE_OUT, this, this.doAnimate);
        }
        onDisable() {
            Laya.timer.clear(this, this.doAnimate), Laya.timer.clearAll(this), this.off(Laya.Event.MOUSE_UP, this, this.doAnimate),
                this.off(Laya.Event.MOUSE_OUT, this, this.doAnimate);
        }
        updateDataSource(e) {
            this.array = e, Laya.timer.once(500, this, this.doAnimate);
        }
        doAnimate() {
            if (!this.destroyed && this.array.length > 0) {
                let e = this._isVertical ? this.repeatX : this.repeatY,
                    t = Math.floor(this._scrollBar.value / this._cellSize),
                    i = 0;
                if (this.isForward) {
                    let t = 0;
                    t = this._isVertical ? Math.ceil(this.displayHeight / this._cellSize) * e : Math.ceil(this.displayWidth / this._cellSize) * e,
                        i = this.array.length - t;
                }
                let n = Math.abs(t - Math.ceil(i / e)),
                    s = 20 * this._cellSize * n;
                this.tweenTo(i, s, Laya.Handler.create(this, () => {
                    this.destroyed || (this.isForward = !this.isForward, Laya.timer.once(100, this, this.doAnimate));
                }));
            }
        }
    }
    class Ge extends Laya.Image {
        constructor() {
            super(...arguments), this.gifAni = null, this.url = null;
        }
        updateImage(e) {
            -1 != e.indexOf(".json") ? (this.gifAni && this.gifAni.stop(), this.gifAni || (this.gifAni = new Laya.Animation(),
                this.gifAni.interval = 150, this.addChild(this.gifAni)), this.gifAni && (this.gifAni.visible = !0,
                this.gifAni.loadAtlas(e, null, e), this.gifAni.play(0, !0), this.gifAni.scale(this.width / 120, this.height / 120),
                this.skin = "")) : (this.gifAni && (this.gifAni.stop(), this.gifAni.visible = !1),
                this.skin = e), this.url = e;
        }
    }
    class Ye extends e.tui.LeftTuiViewUI {
        constructor() {
            super(), this.showLeftTui = !1;
        }
        onEnable() {
            W.Instance.canShowWXRecommend ? (this.registerEvent(), this.updateDataSource()) : this.visible = !1;
        }
        onDisable() {
            this.unregisterEvent(), Laya.timer.clearAll(this);
        }
        registerEvent() {
            this.tuiBgTap.on(Laya.Event.CLICK, this, this.onleftTuiClick), this.leftTuiTab.on(Laya.Event.CLICK, this, this.onleftTuiTabClick),
                d.Instance.on(x.UpdateData, this, this.updateDataSource);
        }
        unregisterEvent() {
            this.tuiBgTap.off(Laya.Event.CLICK, this, this.onleftTuiClick), this.leftTuiTab.off(Laya.Event.CLICK, this, this.onleftTuiTabClick),
                d.Instance.off(x.UpdateData, this, this.updateDataSource);
        }
        updateDataSource() {
            let e = W.Instance.getInfo("index");
            if (e && e.length > 0) {
                let t = [].concat(e);
                this.tuilistLeft.visible = !0, this.tuilistLeft.vScrollBarSkin = "", this.tuilistLeft.updateDataSource(W.getScorllData(t)),
                    this.tuilistLeft.selectEnable = !0;
                let i = Math.floor(Math.random() * t.length);
                this.tuilistLeft.renderHandler = new Laya.Handler(this, function(e, n) {
                    let s = (n + i) % t.length,
                        a = t[s];
                    if (!a) return;
                    let o = e.getChildByName("itemImg"),
                        r = e.getChildByName("itemName"),
                        h = e.getChildByName("itemRed");
                    W.checkTuiItemRed(h), o.updateImage(a.appIcon), r.text = a.appName, e.offAll(null),
                        e.on(Laya.Event.CLICK, this, function() {
                            W.Instance.jumpApp(a, L.homeLeft);
                        });
                });
            }
        }
        onleftTuiClick() {
            this.showLeftTui && this.showLeftTuiAni(!1);
        }
        showLeftTuiAni(e = !0) {
            let t = e ? -580 : 0,
                i = e ? 0 : -580;
            this.left = t, this.tuiBgTap.visible = !1, Laya.timer.clearAll(this), Laya.Tween.to(this, {
                left: i
            }, 300, Laya.Ease.linearIn, new Laya.Handler(this, () => {
                this.tuiBgTap.visible = e, this.showLeftTui = e;
            }));
        }
        onleftTuiTabClick() {
            this.showLeftTui ? this.showLeftTuiAni(!1) : this.showLeftTuiAni(!0);
        }
    }
    class Xe extends e.tui.TuiBtnUI {
        constructor() {
            super(), this.tuiInfo = null, this.fromUI = null, this.canShow = !0;
        }
        onEnable() {
            this.timer.loop(6e3, this, this.updateTuiBtn), this.on(Laya.Event.CLICK, this, this.onClickTuiBtn),
                d.Instance.on(x.UpdateData, this, this.updateTuiBtn), this.updateTuiBtn();
        }
        onDisable() {
            this.tuiAni.stop(), this.timer.clear(this, this.updateTuiBtn), this.off(Laya.Event.CLICK, this, this.onClickTuiBtn),
                d.Instance.off(x.UpdateData, this, this.updateTuiBtn);
        }
        updateTuiBtn() {
            if (!this.canShow) return void(this.visible = !1);
            if (!W.Instance.canShowRecommend) return void(this.visible = !1);
            let e = W.Instance.getInfo("fubiao");
            if (this.visible = !0, Xe.tuiIndex < 0 && (Xe.tuiIndex = Math.floor(e.length * Math.random())),
                Xe.tuiIndex += 1, Xe.tuiIndex >= e.length && (Xe.tuiIndex = 0), Xe.tuiIndex < 0 && (Xe.tuiIndex = 0),
                this.tuiInfo = e[Xe.tuiIndex], this.tuiInfo) {
                if (this.destroyed) return;
                this.visible = !0, this.iconImage.updateImage(this.tuiInfo.appIcon && this.tuiInfo.appIcon.length > 0 ? this.tuiInfo.appIcon : null),
                    this.titleLabel.text = this.tuiInfo.appTitle || "", this.tuiAni.play(0, !1);
            } else this.visible = !1;
        }
        onClickTuiBtn() {
            let e = L.unkonw;
            this.fromUI === be.Game && (e = L.gameIcon), W.Instance.jumpApp(this.tuiInfo, e);
        }
        setFromUI(e) {
            this.fromUI = e;
        }
    }
    Xe.tuiIndex = -1;
    class Oe extends Laya.Button {
        onEnable() {
            super.onEnable(), this.registerEvent();
        }
        onDisable() {
            this.destoryButton(), Laya.timer.clear(this, this.checkShowButton), super.onDestroy();
        }
        registerEvent() {
            d.Instance.on(s.ShowView, this, this.onViewShow), d.Instance.on(s.HideView, this, this.onViewHide);
        }
        unregiseterEvent() {
            d.Instance.off(s.ShowView, this, this.onViewShow), d.Instance.off(s.HideView, this, this.onViewHide);
        }
        checkShowButton() {
            h.vGameInfo.tRecommend ? Be.IsTouTiao() ? this.showButton() : this.destoryButton() : this.visible = !1;
        }
        showButton() {
            if (h.vGameInfo.ttTuiInfo.length < 4) return void(this.visible = !1);
            if (!Be.shouldShowTReommend()) return;
            let e = h.vGameInfo.ttTuiInfo.map(e => ({
                appId: String(e.pid),
                query: "",
                extraData: {}
            }));
            if ("undefined" != typeof wx && wx.createMoreGamesButton)
                if (this.moreButton) this.moreButton.show();
                else {
                    let t = this.width * p.windowWidth / Laya.stage.width,
                        i = this.height * p.windowHeight / Laya.stage.height,
                        n = this.localToGlobal(new Laya.Point(0, 0)),
                        s = n.y * p.windowHeight / Laya.stage.height,
                        a = n.x * p.windowWidth / Laya.stage.width;
                    this.moreButton = wx.createMoreGamesButton({
                        type: "image",
                        image: "tui/more_games_btn1.png",
                        style: {
                            left: a,
                            top: s,
                            width: t,
                            height: i,
                            lineHeight: 40,
                            backgroundColor: "#FFFFFF00",
                            textAlign: "center",
                            fontSize: 18,
                            textColor: "#ffffff",
                            borderRadius: 4,
                            borderWidth: 0,
                            borderColor: "#ff0000"
                        },
                        appLaunchOptions: e,
                        onNavigateToMiniGame: e => {}
                    }), this.moreButton && (this.moreButton.show(), this.moreButton.onTap(e => {
                        this.tapMoreGame(e);
                    }));
                }
        }
        hideButton() {
            this.moreButton && this.moreButton.hide(), Laya.timer.clear(this, this.checkShowButton);
        }
        destoryButton() {
            this.moreButton && (this.moreButton.destroy(), this.moreButton = null), this.visible = !1;
        }
        tapMoreGame(e) {}
        onViewHide(e) {
            this.checkIsParentView(e) && this.hideButton();
        }
        onViewShow(e) {
            this.checkIsParentView(e) && Laya.timer.once(1e3, this, this.checkShowButton);
        }
        checkIsParentView(e) {
            let t = this;
            for (; t && t.parent;) {
                if (t.parent === e) return !0;
                t = t.parent;
            }
            return !1;
        }
    }
    class We extends Laya.Script {
        constructor() {
            super(), this.moveleft = !0, this.mask = null;
        }
        onEnable() {
            let e = this.owner.getChildByName("img");
            this.mask = e.mask, Laya.timer.frameLoop(1, this, this.update);
        }
        onUpdate() {}
        update() {
            this.mask.x++, this.mask.x > 0 && (this.mask.x = -147);
        }
        onDisable() {
            Laya.timer.clear(this, this.update);
        }
    }
    class He {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("views/item/DaySignItemView.ts", Fe), e("views/runtime/UIAdapter.ts", Ee), e("script/GameControl.ts", ne),
                e("views/item/CloseBtnScript.ts", Ne), e("Tui/BottomTuiView.ts", ze), e("Tui/AutoScorllView.ts", Ue),
                e("Tui/GifImageView.ts", Ge), e("Tui/LeftTuiView.ts", Ye), e("Tui/TuiBtn.ts", Xe),
                e("Tui/MoreGameButton.ts", Oe), e("script/BtnMask.ts", We), e("script/DropBox.ts", Q),
                e("script/DropBoxIce.ts", J), e("script/DropBoxSuger.ts", $), e("script/DropWater.ts", ie),
                e("script/longResult.ts", ae), e("script/shortResult.ts", oe);
        }
    }
    He.width = 720, He.height = 1280, He.scaleMode = "exactfit", He.screenMode = "vertical",
        He.alignV = "center", He.alignH = "center", He.startScene = "ShiPinView.scene", He.sceneRoot = "",
        He.debug = !1, He.stat = !1, He.physicsDebug = !1, He.exportSceneToJson = !1, He.init();
    new class {
        constructor() {
            (Be.IsTouTiao() || Be.IsOppo || Be.IsQQ) && (Laya.Config.useWebGL2 = !1), window.Laya3D ? Laya3D.init(He.width, He.height) : Laya.init(He.width, He.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = He.scaleMode,
                // Laya.stage.screenMode = He.screenMode,
                Laya.stage.alignV = He.alignV,
                Laya.stage.alignH = He.alignH, Laya.URL.exportSceneToJson = He.exportSceneToJson,
                (He.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                He.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), He.stat && Laya.Stat.show(),
                Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION),
                K.Instance.initEnv();
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            K.Instance.onConfigLoaded();
        }
    }();
}();