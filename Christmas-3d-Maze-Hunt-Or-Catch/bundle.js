! function () {
    "use strict";
    var e, t = Laya.ClassUtils.regClass;
    ! function (e) {
        ! function (e) {
            class i extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView)
                }
            }
            i.uiView = {
                type: "Scene",
                props: {
                    y: 88,
                    x: 88,
                    width: 177,
                    pivotY: 88,
                    pivotX: 88,
                    height: 177
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 89,
                        x: 88,
                        width: 176,
                        var: "bg1",
                        skin: "Images/kbx_dik1.png",
                        pivotY: 89,
                        pivotX: 88,
                        height: 177
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 89,
                        x: 88,
                        width: 176,
                        var: "bg2",
                        skin: "Images/kbx_dik2.png",
                        pivotY: 89,
                        pivotX: 88,
                        height: 177
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 89,
                        x: 88,
                        var: "bxtp",
                        skin: "Images/box.png",
                        pivotY: 60,
                        pivotX: 81
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 87.5,
                        x: 89,
                        var: "videobxtp",
                        skin: "Images/1111111.png",
                        pivotY: 60,
                        pivotX: 81
                    },
                    compId: 9
                }, {
                    type: "Image",
                    props: {
                        y: 70,
                        x: 87,
                        width: 116,
                        var: "jbtp",
                        skin: "Images/icon_jindi2.png",
                        pivotY: 48,
                        pivotX: 58,
                        height: 96
                    },
                    compId: 6
                }, {
                    type: "Label",
                    props: {
                        y: 140,
                        x: 88,
                        width: 157,
                        var: "awardlabel",
                        valign: "middle",
                        strokeColor: "#000000",
                        stroke: 3,
                        pivotY: 13,
                        pivotX: 79,
                        height: 26,
                        fontSize: 30,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 7
                }],
                loadList: ["Images/kbx_dik1.png", "Images/kbx_dik2.png", "Images/box.png", "Images/1111111.png",
                    "Images/icon_jindi2.png"
                ],
                loadList3D: []
            }, e.ChestItemUI = i, t("ui.Scene.ChestItemUI", i);
            class a extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/ChestPanel")
                }
            }
            e.ChestPanelUI = a, t("ui.Scene.ChestPanelUI", a);
            class s extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/CoursePanel")
                }
            }
            e.CoursePanelUI = s, t("ui.Scene.CoursePanelUI", s);
            class n extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/DayGiftPanel")
                }
            }
            e.DayGiftPanelUI = n, t("ui.Scene.DayGiftPanelUI", n);
            class l extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(l.uiView)
                }
            }
            l.uiView = {
                "x": 0,
                "type": "Scene",
                "selectedBox": 2,
                "selecteID": 11,
                "searchKey": "Scene",
                "props": { "width": 375, "height": 140 },
                "nodeParent": -1,
                "maxID": 21,
                "loadList3D": [
                ],
                "loadList": [
                    "Images/icon_sudu.png",
                    "Images/icon_juli.png",
                    "Images/icon_jinbi.png",
                    "Images/sj_jindu2.png",
                    "Images/sj_jindu1.png",
                    "Images/btn_yellow.png",
                    "Images/icon_sp.png",
                    "Images/text_btn_ls10.png",
                    "Images/text_btn_shengj.png",
                    "Images/text_btn_ymanji.png"],
                "label": "Scene",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,SpeedTP",
                        "props": { "y": 74, "x": 60, "width": 148, "var": "SpeedTP", "skin": "Images/icon_sudu.png", "scaleY": 0.8, "scaleX": 0.8, "pivotY": 74, "pivotX": 74, "height": 148 },
                        "nodeParent": 2,
                        "label": "SpeedTP",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 3,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,AtkDirTP",
                        "props": { "y": 74, "x": 60, "width": 148, "var": "AtkDirTP", "skin": "Images/icon_juli.png", "scaleY": 0.8, "scaleX": 0.8, "pivotY": 74, "pivotX": 74, "height": 148 },
                        "nodeParent": 2,
                        "label": "AtkDirTP",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 15,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite,xhzstp",
                        "props": { "y": 100, "x": 145.5, "width": 50, "var": "xhzstp", "texture": "Images/icon_jinbi.png", "scaleY": 0.8, "scaleX": 0.8, "pivotY": 27, "pivotX": 25, "height": 53 },
                        "nodeParent": 2,
                        "label": "xhzstp",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 6,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 52, "x": 220, "width": 180, "skin": "Images/sj_jindu2.png", "sizeGrid": "0,20,0,20", "pivotY": 10, "pivotX": 90, "height": 20 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 8,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,DowerBar",
                        "props": { "y": 52, "x": 220, "width": 0, "var": "DowerBar", "skin": "Images/sj_jindu1.png", "sizeGrid": "0,16,0,14", "pivotY": 10, "pivotX": 90, "height": 20 },
                        "nodeParent": 2,
                        "label": "DowerBar",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 9,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,TipsLabel",
                        "props": { "y": 22, "x": 165, "wordWrap": true, "width": 114, "var": "TipsLabel", "valign": "middle", "pivotY": 20, "pivotX": 57, "height": 39, "fontSize": 20, "font": "Microsoft YaHei", "color": "#ffffff", "align": "center" },
                        "nodeParent": 2,
                        "label": "TipsLabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,LvLabel",
                        "props": { "y": 21, "x": 267, "width": 88, "var": "LvLabel", "valign": "middle", "pivotY": 10, "pivotX": 44, "height": 20, "fontSize": 20, "font": "Microsoft YaHei", "color": "#feb300", "align": "left" },
                        "nodeParent": 2,
                        "label": "LvLabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 5,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,xhzsLabel",
                        "props": { "y": 101, "x": 213, "width": 88, "var": "xhzsLabel", "valign": "middle", "pivotY": 10, "pivotX": 44, "height": 20, "fontSize": 20, "font": "Microsoft YaHei", "color": "#feb300", "align": "left" },
                        "nodeParent": 2,
                        "label": "xhzsLabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 7,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,barLabel",
                        "props": { "y": 54, "x": 360, "width": 88, "var": "barLabel", "valign": "middle", "pivotY": 10, "pivotX": 44, "height": 20, "fontSize": 20, "font": "Microsoft YaHei", "color": "#ffffff", "align": "left" },
                        "nodeParent": 2,
                        "label": "barLabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 10,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,dowerLabel",
                        "props": { "y": 21, "x": 327, "width": 88, "var": "dowerLabel", "valign": "middle", "pivotY": 10, "pivotX": 44, "height": 20, "fontSize": 20, "font": "Microsoft YaHei", "color": "#FF51E4", "align": "left" },
                        "nodeParent": 2,
                        "label": "dowerLabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 17,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,UpLvBtn",
                        "props": { "y": 105, "x": 289, "width": 140, "var": "UpLvBtn", "skin": "Images/btn_yellow.png", "sizeGrid": "28,30,34,29", "pivotY": 28, "pivotX": 70, "height": 55 },
                        "nodeParent": 2,
                        "label": "UpLvBtn",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 11,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,videotp",
                                "props": { "y": 22, "x": 24, "width": 45, "var": "videotp", "skin": "Images/icon_sp.png", "scaleY": 0.6, "scaleX": 0.6, "pivotY": 22, "pivotX": 23, "height": 43 },
                                "nodeParent": 11,
                                "label": "videotp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 19,
                                "child": [
                                ],
                                "$HIDDEN": true
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,lssjtp",
                                "props": { "y": 23, "x": 86, "width": 89, "var": "lssjtp", "skin": "Images/text_btn_ls10.png", "pivotY": 13, "pivotX": 45, "height": 25 },
                                "nodeParent": 11,
                                "label": "lssjtp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 20,
                                "child": [
                                ],
                                "$HIDDEN": true
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,sjtp",
                                "props": { "y": 19, "x": 70, "width": 90, "var": "sjtp", "skin": "Images/text_btn_shengj.png", "pivotY": 21, "pivotX": 45, "height": 42 },
                                "nodeParent": 11,
                                "label": "sjtp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 16,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,ymjtp",
                                "props": { "y": 22.5, "x": 70, "width": 79, "var": "ymjtp", "skin": "Images/text_btn_ymanji.png", "pivotY": 15, "pivotX": 40, "height": 30 },
                                "nodeParent": 11,
                                "label": "ymjtp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 18,
                                "child": [
                                ],
                                "$HIDDEN": true
                            }]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.DowerItemUI = l, t("ui.Scene.DowerItemUI", l);
            class r extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/EasterEggPanel")
                }
            }
            e.EasterEggPanelUI = r, t("ui.Scene.EasterEggPanelUI", r);
            class o extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(o.uiView)
                }
            }
            o.uiView = {
                "x": 0,
                "type": "Scene",
                "selectedBox": 8,
                "selecteID": 10,
                "searchKey": "Scene",
                "props": { "width": 300, "height": 112 },
                "nodeParent": -1,
                "maxID": 13,
                "loadList3D": [
                ],
                "loadList": [
                    "Images/shop_spk.png",
                    "Images/btn_yellow.png",
                    "Images/icon_sp.png",
                    "Images/btn_text_xiexia.png",
                    "Images/btn_text_jiesuo.png",
                    "Images/btn_text_zhuangb.png"],
                "label": "Scene",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 0, "x": 0, "width": 112, "skin": "Images/shop_spk.png", "height": 112 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 3,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,equiptp",
                        "props": { "y": 56, "x": 56, "width": 89, "var": "equiptp", "pivotY": 45, "pivotX": 45, "height": 89 },
                        "nodeParent": 2,
                        "label": "equiptp",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,UserBtn",
                        "props": { "y": 87, "x": 184, "width": 125, "var": "UserBtn", "skin": "Images/btn_yellow.png", "sizeGrid": "23,20,29,17", "pivotY": 28, "pivotX": 63, "height": 55 },
                        "nodeParent": 2,
                        "label": "UserBtn",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 8,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,videotp",
                                "props": { "y": 21.5, "x": 35.5, "width": 45, "var": "videotp", "skin": "Images/icon_sp.png", "scaleY": 0.7, "scaleX": 0.7, "pivotY": 22, "pivotX": 23, "height": 43 },
                                "nodeParent": 8,
                                "label": "videotp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 9,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,xxtp",
                                "props": { "y": 21, "x": 62.5, "width": 48, "var": "xxtp", "skin": "Images/btn_text_xiexia.png", "scaleY": 1.5, "scaleX": 1.5, "pivotY": 13, "pivotX": 24, "height": 25 },
                                "nodeParent": 8,
                                "label": "xxtp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 10,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,jstp",
                                "props": { "y": 21, "x": 81, "width": 48, "var": "jstp", "skin": "Images/btn_text_jiesuo.png", "scaleY": 1.5, "scaleX": 1.5, "pivotY": 13, "pivotX": 24, "height": 26 },
                                "nodeParent": 8,
                                "label": "jstp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 11,
                                "child": [
                                ],
                                "$HIDDEN": true
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,zbtp",
                                "props": { "y": 21, "x": 62.5, "var": "zbtp", "skin": "Images/btn_text_zhuangb.png", "scaleY": 1.5, "scaleX": 1.5, "pivotY": 13, "pivotX": 24 },
                                "nodeParent": 8,
                                "label": "zbtp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 12,
                                "child": [
                                ],
                                "$HIDDEN": true
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,namelabel",
                        "props": { "y": 18, "x": 160, "width": 80, "var": "namelabel", "valign": "middle", "pivotY": 15, "pivotX": 40, "height": 30, "fontSize": 23, "font": "Microsoft YaHei", "color": "#ff9703", "align": "left" },
                        "nodeParent": 2,
                        "label": "namelabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 5,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,tipslabel",
                        "props": { "y": 45, "x": 205, "width": 170, "var": "tipslabel", "valign": "middle", "pivotY": 15, "pivotX": 85, "height": 30, "fontSize": 18, "font": "Microsoft YaHei", "color": "#5f3f0e", "align": "left" },
                        "nodeParent": 2,
                        "label": "tipslabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 6,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,timelabel",
                        "props": { "y": 95, "x": 56, "width": 90, "var": "timelabel", "valign": "middle", "strokeColor": "#000000", "stroke": 2, "pivotY": 9, "pivotX": 45, "height": 18, "fontSize": 18, "color": "#ffffff", "align": "center" },
                        "nodeParent": 2,
                        "label": "timelabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 7,
                        "child": [
                        ]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.EquipItemUI = o, t("ui.Scene.EquipItemUI", o);
            class h extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(h.uiView)
                }
            }
            h.uiView = {
                type: "Scene",
                props: {
                    y: 343,
                    x: 0,
                    width: 280,
                    pivotY: 343,
                    pivotX: 0,
                    height: 343
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 172,
                        x: 140,
                        width: 280,
                        skin: "Images/gg_di.png",
                        pivotY: 172,
                        pivotX: 140,
                        height: 343
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 301,
                        x: 140,
                        width: 260,
                        var: "exportbg",
                        pivotY: 31,
                        pivotX: 130,
                        height: 62
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 140,
                        x: 140,
                        width: 260,
                        var: "exporticon",
                        pivotY: 130,
                        pivotX: 130,
                        height: 260
                    },
                    compId: 7
                }, {
                    type: "Label",
                    props: {
                        y: 304,
                        x: 140,
                        width: 260,
                        var: "exportlabel",
                        valign: "middle",
                        pivotY: 19,
                        pivotX: 130,
                        overflow: "hidden",
                        height: 38,
                        fontSize: 38,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 8
                }],
                loadList: ["Images/gg_di.png"],
                loadList3D: []
            }, e.ExportBigItemUI = h, t("ui.Scene.ExportBigItemUI", h);
            class c extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(c.uiView)
                }
            }
            c.uiView = {
                type: "Scene",
                props: {
                    y: 127,
                    x: 105,
                    width: 210,
                    pivotY: 127.5,
                    pivotX: 105,
                    height: 255
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 128,
                        x: 105,
                        width: 210,
                        skin: "Images/gg_di.png",
                        pivotY: 128,
                        pivotX: 105,
                        height: 255
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 222.6,
                        x: 105,
                        width: 190,
                        var: "exportbg",
                        pivotY: 23,
                        pivotX: 95,
                        height: 45
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 105,
                        x: 105,
                        width: 190,
                        var: "exporticon",
                        pivotY: 95,
                        pivotX: 95,
                        height: 190
                    },
                    compId: 7
                }, {
                    type: "Label",
                    props: {
                        y: 225,
                        x: 105,
                        width: 190,
                        var: "exportlabel",
                        valign: "middle",
                        pivotY: 14,
                        pivotX: 95,
                        overflow: "hidden",
                        height: 28,
                        fontSize: 28,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 8
                }],
                loadList: ["Images/gg_di.png"],
                loadList3D: []
            }, e.ExportMedItemUI = c, t("ui.Scene.ExportMedItemUI", c);
            class d extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/ExportPanel")
                }
            }
            e.ExportPanelUI = d, t("ui.Scene.ExportPanelUI", d);
            class p extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(p.uiView)
                }
            }
            p.uiView = {
                type: "Scene",
                props: {
                    y: 127,
                    x: 105,
                    width: 130,
                    pivotY: 127.5,
                    pivotX: 105,
                    height: 158
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 80,
                        x: 65,
                        width: 130,
                        skin: "Images/gg_di.png",
                        pivotY: 79,
                        pivotX: 65,
                        height: 158
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 139,
                        x: 65,
                        width: 120,
                        var: "exportbg",
                        pivotY: 14,
                        pivotX: 60,
                        height: 28
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 66,
                        x: 65,
                        width: 120,
                        var: "exporticon",
                        pivotY: 60,
                        pivotX: 60,
                        height: 120
                    },
                    compId: 7
                }, {
                    type: "Label",
                    props: {
                        y: 141,
                        x: 65,
                        width: 120,
                        var: "exportlabel",
                        valign: "middle",
                        pivotY: 9,
                        pivotX: 60,
                        overflow: "hidden",
                        height: 18,
                        fontSize: 18,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 8
                }],
                loadList: ["Images/gg_di.png"],
                loadList3D: []
            }, e.ExportSmallItemUI = p, t("ui.Scene.ExportSmallItemUI", p);
            class m extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/FullExportPanel")
                }
            }
            e.FullExportPanelUI = m, t("ui.Scene.FullExportPanelUI", m);
            class y extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/GamePanel")
                }
            }
            e.GamePanelUI = y, t("ui.Scene.GamePanelUI", y);
            class S extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/GetAwardPanel")
                }
            }
            e.GetAwardPanelUI = S, t("ui.Scene.GetAwardPanelUI", S);
            class I extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(I.uiView)
                }
            }
            I.uiView = {
                type: "Scene",
                props: {
                    y: 100,
                    x: 375,
                    width: 750,
                    pivotY: 100,
                    pivotX: 375,
                    height: 200
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 90,
                        x: 150,
                        width: 180,
                        var: "ExportIcon",
                        pivotY: 90,
                        pivotX: 90,
                        height: 180
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 90,
                        x: 150,
                        width: 180,
                        skin: "Images/icon_txk4.png",
                        pivotY: 90,
                        pivotX: 90,
                        height: 180
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 97,
                        x: 638,
                        width: 170,
                        skin: "Images/btn_green.png",
                        sizeGrid: "20,23,36,25",
                        pivotY: 40,
                        pivotX: 85,
                        height: 80
                    },
                    compId: 8,
                    child: [{
                        type: "Image",
                        props: {
                            y: 33,
                            x: 85,
                            width: 110,
                            skin: "Images/btn_text_lijiwan.png",
                            pivotY: 20,
                            pivotX: 55,
                            height: 39
                        },
                        compId: 9
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 190,
                        x: 375,
                        width: 700,
                        skin: "Images/xt.png",
                        pivotX: 350,
                        height: 2
                    },
                    compId: 10
                }, {
                    type: "Label",
                    props: {
                        y: 90,
                        x: 30,
                        width: 50,
                        var: "IdxLabel",
                        valign: "middle",
                        pivotY: 20,
                        pivotX: 25,
                        height: 40,
                        fontSize: 40,
                        font: "Microsoft YaHei",
                        color: "#383838",
                        align: "center"
                    },
                    compId: 5
                }, {
                    type: "Label",
                    props: {
                        y: 60,
                        x: 380,
                        width: 250,
                        var: "ExportNameLabel",
                        valign: "middle",
                        pivotY: 23,
                        pivotX: 125,
                        overflow: "hidden",
                        height: 45,
                        fontSize: 45,
                        font: "Microsoft YaHei",
                        color: "#383838",
                        align: "left"
                    },
                    compId: 6
                }, {
                    type: "Label",
                    props: {
                        y: 130,
                        x: 380,
                        width: 250,
                        var: "TipsLabel",
                        valign: "middle",
                        pivotY: 15,
                        pivotX: 125,
                        height: 30,
                        fontSize: 30,
                        font: "Microsoft YaHei",
                        color: "#383838",
                        align: "left"
                    },
                    compId: 7
                }],
                loadList: ["Images/icon_txk4.png", "Images/btn_green.png", "Images/btn_text_lijiwan.png",
                    "Images/xt.png"
                ],
                loadList3D: []
            }, e.HotExportItemUI = I, t("ui.Scene.HotExportItemUI", I);
            class g extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/HotExportPanel")
                }
            }
            e.HotExportPanelUI = g, t("ui.Scene.HotExportPanelUI", g);
            class u extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(u.uiView)
                }
            }
            u.uiView = {
                type: "Scene",
                props: {
                    width: 680,
                    height: 120
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 60,
                        x: 340,
                        width: 680,
                        skin: "Images/phb_dik1.png",
                        sizeGrid: "15,25,32,24",
                        pivotY: 60,
                        pivotX: 340,
                        height: 120
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 55,
                        x: 56,
                        width: 62,
                        var: "rankicon",
                        pivotY: 43,
                        pivotX: 31,
                        height: 85
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 55,
                        x: 145,
                        width: 90,
                        var: "icon",
                        pivotY: 45,
                        pivotX: 45,
                        name: "",
                        height: 90
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 53,
                        x: 565,
                        width: 157,
                        var: "titletp",
                        pivotY: 19,
                        pivotX: 79,
                        name: "",
                        height: 38
                    },
                    compId: 11
                }, {
                    type: "Image",
                    props: {
                        y: 55,
                        x: 145,
                        width: 90,
                        skin: "Images/phb_txk1.png",
                        sizeGrid: "27,24,23,19",
                        pivotY: 45,
                        pivotX: 45,
                        name: "",
                        height: 90
                    },
                    compId: 7
                }, {
                    type: "Label",
                    props: {
                        y: 56,
                        x: 280,
                        width: 160,
                        var: "namelabel",
                        valign: "middle",
                        pivotY: 13,
                        pivotX: 80,
                        overflow: "hidden",
                        height: 25,
                        fontSize: 24,
                        font: "Microsoft YaHei",
                        color: "#7d4115",
                        align: "left"
                    },
                    compId: 9
                }, {
                    type: "Label",
                    props: {
                        y: 56,
                        x: 410,
                        width: 113,
                        var: "killlabel",
                        valign: "middle",
                        pivotY: 15,
                        pivotX: 57,
                        name: "",
                        height: 30,
                        fontSize: 30,
                        font: "Microsoft YaHei",
                        color: "#ff960d",
                        align: "right"
                    },
                    compId: 10
                }, {
                    type: "Label",
                    props: {
                        y: 60,
                        x: 56,
                        width: 78,
                        var: "ranklabel",
                        valign: "middle",
                        pivotY: 26,
                        pivotX: 39,
                        name: "",
                        height: 51,
                        fontSize: 50,
                        font: "Microsoft YaHei",
                        color: "#7d4115",
                        align: "center"
                    },
                    compId: 12
                }],
                loadList: ["Images/phb_dik1.png", "Images/phb_txk1.png"],
                loadList3D: []
            }, e.KillRankItemUI = u, t("ui.Scene.KillRankItemUI", u);
            class k extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/KillRankPanel")
                }
            }
            e.KillRankPanelUI = k, t("ui.Scene.KillRankPanelUI", k);
            class L extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/LateChestPanel")
                }
            }
            e.LateChestPanelUI = L, t("ui.Scene.LateChestPanelUI", L);
            class w extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/LoadingExportPanel")
                }
            }
            e.LoadingExportPanelUI = w, t("ui.Scene.LoadingExportPanelUI", w);
            class f extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/LoadingPanel")
                }
            }
            e.LoadingPanelUI = f, t("ui.Scene.LoadingPanelUI", f);
            class v extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/LotteryPanel")
                }
            }
            e.LotteryPanelUI = v, t("ui.Scene.LotteryPanelUI", v);
            class C extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/NewExportPanel")
                }
            }
            e.NewExportPanelUI = C, t("ui.Scene.NewExportPanelUI", C);
            class T extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/OverPanel")
                }
            }
            e.OverPanelUI = T, t("ui.Scene.OverPanelUI", T);
            class b extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(b.uiView)
                }
            }
            b.uiView = {
                type: "Scene",
                props: {
                    y: 47,
                    x: 45,
                    width: 90,
                    pivotY: 47.5,
                    pivotX: 45,
                    height: 95
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 50,
                        x: 45,
                        width: 90,
                        var: "bg",
                        skin: "Images/jineng_di.png",
                        pivotY: 45,
                        pivotX: 45,
                        height: 90
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 45,
                        x: 45,
                        width: 85,
                        var: "proptp",
                        scaleY: .8,
                        scaleX: .8,
                        pivotY: 38,
                        pivotX: 43,
                        height: 75
                    },
                    compId: 4
                }, {
                    type: "Label",
                    props: {
                        y: 70,
                        x: 75,
                        width: 57,
                        var: "propnumlabel",
                        valign: "middle",
                        strokeColor: "#000000",
                        stroke: 3,
                        pivotY: 9,
                        pivotX: 29,
                        height: 18,
                        fontSize: 22,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "left"
                    },
                    compId: 5
                }],
                loadList: ["Images/jineng_di.png"],
                loadList3D: []
            }, e.PropItemUI = b, t("ui.Scene.PropItemUI", b);
            class x extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/SetPanel")
                }
            }
            e.SetPanelUI = x, t("ui.Scene.SetPanelUI", x);
            class M extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/SettlePanel")
                }
            }
            e.SettlePanelUI = M, t("ui.Scene.SettlePanelUI", M);
            class D extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(D.uiView)
                }
            }
            D.uiView = {
                "x": 0,
                "type": "Scene",
                "selectedBox": 2,
                "selecteID": 23,
                "searchKey": "Scene",
                "props": { "width": 600, "height": 185 },
                "nodeParent": -1,
                "maxID": 27,
                "loadList3D": [
                ],
                "loadList": [
                    "Images/shop_dik3.png",
                    "Images/shop_dise.png",
                    "Images/icon_jinb.png",
                    "Images/icon_baosx.png",
                    "Images/daojubox.png",
                    "Images/shop_spk.png",
                    "Images/btn_yellow.png",
                    "Images/icon_sp.png",
                    "Images/text_btn_lingq.png"],
                "label": "Scene",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 0, "x": 0, "width": 600, "skin": "Images/shop_dik3.png", "sizeGrid": "46,50,56,49", "height": 185 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 3,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 84, "x": 97, "width": 155, "skin": "Images/shop_dise.png", "pivotY": 72, "pivotX": 78, "height": 144 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,JBTP",
                        "props": { "y": 84, "x": 97, "var": "JBTP", "skin": "Images/icon_jinb.png", "pivotY": 61, "pivotX": 71 },
                        "nodeParent": 2,
                        "label": "JBTP",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 5,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,ZSTP",
                        "props": { "y": 84, "x": 97, "width": 149, "var": "ZSTP", "skin": "Images/icon_baosx.png", "pivotY": 74, "pivotX": 75, "height": 148 },
                        "nodeParent": 2,
                        "label": "ZSTP",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 12,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,GiftTP",
                        "props": { "y": 84, "x": 97, "width": 103, "var": "GiftTP", "skin": "Images/daojubox.png", "pivotY": 61, "pivotX": 52, "height": 122 },
                        "nodeParent": 2,
                        "label": "GiftTP",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 13,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Box",
                        "searchKey": "Box,GiftBox",
                        "props": { "y": 116, "x": 300, "width": 250, "var": "GiftBox", "pivotY": 30, "pivotX": 125, "height": 60 },
                        "nodeParent": 2,
                        "label": "GiftBox",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 23,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 30, "x": 34, "width": 112, "skin": "Images/shop_spk.png", "scaleY": 0.5, "scaleX": 0.5, "pivotY": 56, "pivotX": 56, "height": 112 },
                                "nodeParent": 23,
                                "label": "Image",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 14,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 56, "x": 56, "width": 85, "pivotY": 38, "pivotX": 43, "height": 75 },
                                        "nodeParent": 14,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 16,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 30, "x": 95, "width": 112, "skin": "Images/shop_spk.png", "scaleY": 0.5, "scaleX": 0.5, "pivotY": 56, "pivotX": 56, "height": 112 },
                                "nodeParent": 23,
                                "label": "Image",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 17,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 56, "x": 56, "width": 85, "pivotY": 38, "pivotX": 43, "height": 75 },
                                        "nodeParent": 17,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 24,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 30, "x": 155, "width": 112, "skin": "Images/shop_spk.png", "scaleY": 0.5, "scaleX": 0.5, "pivotY": 56, "pivotX": 56, "height": 112 },
                                "nodeParent": 23,
                                "label": "Image",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 19,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 56, "x": 56, "width": 85, "pivotY": 38, "pivotX": 43, "height": 75 },
                                        "nodeParent": 19,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 25,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 30, "x": 216, "width": 112, "skin": "Images/shop_spk.png", "scaleY": 0.5, "scaleX": 0.5, "pivotY": 56, "pivotX": 56, "height": 112 },
                                "nodeParent": 23,
                                "label": "Image",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 21,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 56, "x": 56, "width": 85, "pivotY": 38, "pivotX": 43, "height": 75 },
                                        "nodeParent": 21,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 26,
                                        "child": [
                                        ]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,VideoBtn",
                        "props": { "y": 119, "x": 500, "width": 150, "var": "VideoBtn", "skin": "Images/btn_yellow.png", "sizeGrid": "27,25,36,30", "pivotY": 35, "pivotX": 75, "height": 70 },
                        "nodeParent": 2,
                        "label": "VideoBtn",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 9,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 30, "x": 38, "width": 45, "skin": "Images/icon_sp.png", "scaleY": 0.8, "scaleX": 0.8, "pivotY": 22, "pivotX": 23, "height": 43 },
                                "nodeParent": 9,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 10,
                                "child": [
                                ]
                            },
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 28, "x": 94, "width": 67, "skin": "Images/text_btn_lingq.png", "pivotY": 15, "pivotX": 34, "height": 30 },
                                "nodeParent": 9,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 11,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,NameLabel",
                        "props": { "y": 35, "x": 298, "width": 220, "var": "NameLabel", "valign": "middle", "pivotY": 16, "pivotX": 110, "height": 32, "fontSize": 32, "font": "Microsoft YaHei", "color": "#ff9703", "align": "left" },
                        "nodeParent": 2,
                        "label": "NameLabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 7,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,TipsLabel",
                        "props": { "y": 107, "x": 298, "wordWrap": true, "width": 220, "var": "TipsLabel", "valign": "top", "pivotY": 48, "pivotX": 110, "height": 95, "fontSize": 24, "font": "Microsoft YaHei", "color": "#5f3f0e", "align": "left" },
                        "nodeParent": 2,
                        "label": "TipsLabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 8,
                        "child": [
                        ]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.ShopItemUI = D, t("ui.Scene.ShopItemUI", D);
            class B extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/ShopPanel")
                }
            }
            e.ShopPanelUI = B, t("ui.Scene.ShopPanelUI", B);
            class _ extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(_.uiView)
                }
            }
            _.uiView = {
                "x": 0,
                "type": "Scene",
                "selectedBox": 2,
                "selecteID": 6,
                "searchKey": "Scene",
                "props": { "width": 135, "height": 220 },
                "nodeParent": -1,
                "maxID": 14,
                "loadList3D": [
                ],
                "loadList": [
                    "Images/shop_spk.png",
                    "Images/shul_dik.png",
                    "Images/btn_yellow.png",
                    "Images/icon_jinbi.png"],
                "label": "Scene",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 51, "x": 67.5, "width": 112, "skin": "Images/shop_spk.png", "pivotY": 56, "pivotX": 56, "height": 112 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 3,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,proptp",
                        "props": { "y": 51, "x": 68, "width": 85, "var": "proptp", "pivotY": 38, "pivotX": 43, "height": 75 },
                        "nodeParent": 2,
                        "label": "proptp",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 0, "x": 112, "width": 45, "skin": "Images/shul_dik.png", "pivotY": 15, "pivotX": 23, "height": 30 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 5,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,BuyBtn",
                        "props": { "y": 196, "x": 68, "width": 130, "var": "BuyBtn", "skin": "Images/btn_yellow.png", "sizeGrid": "19,23,32,26", "pivotY": 30, "pivotX": 65, "height": 60 },
                        "nodeParent": 2,
                        "label": "BuyBtn",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 8,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 24, "x": 89, "width": 50, "skin": "Images/icon_jinbi.png", "scaleY": 0.6, "scaleX": 0.6, "pivotY": 27, "pivotX": 25, "height": 53 },
                                "nodeParent": 8,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 12,
                                "child": [
                                ]
                            },
                            {
                                "type": "Label",
                                "searchKey": "Label,goldlabel",
                                "props": { "y": 26.5, "x": 41, "width": 56, "var": "goldlabel", "valign": "middle", "pivotY": 12, "pivotX": 28, "height": 24, "fontSize": 24, "font": "Microsoft YaHei", "color": "#181818", "align": "right" },
                                "nodeParent": 8,
                                "label": "goldlabel",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 13,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,tipslabel",
                        "props": { "y": 136, "x": 68, "wordWrap": true, "width": 135, "var": "tipslabel", "valign": "middle", "pivotY": 28, "pivotX": 68, "height": 55, "fontSize": 20, "font": "Microsoft YaHei", "color": "#181818", "align": "center" },
                        "nodeParent": 2,
                        "label": "tipslabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 6,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,propnumlabel",
                        "props": { "y": 2, "x": 112, "width": 50, "var": "propnumlabel", "valign": "middle", "pivotY": 10, "pivotX": 25, "height": 20, "fontSize": 22, "font": "Microsoft YaHei", "color": "#ffffff", "align": "center" },
                        "nodeParent": 2,
                        "label": "propnumlabel",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 7,
                        "child": [
                        ]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.ShopPropItemUI = _, t("ui.Scene.ShopPropItemUI", _);
            class P extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(P.uiView)
                }
            }
            P.uiView = {
                type: "Scene",
                props: {
                    width: 580,
                    height: 210
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 105,
                        x: 105,
                        width: 180,
                        var: "bg1",
                        skin: "Images/jiangli_dik.png",
                        pivotY: 90,
                        pivotX: 90,
                        height: 180
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 90,
                        x: 305,
                        width: 444,
                        var: "bg2",
                        skin: "Images/qd_dik2.png",
                        pivotY: 75,
                        pivotX: 222,
                        height: 150
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 93,
                        x: 105,
                        width: 141,
                        var: "jbtp1",
                        skin: "Images/icon_jinb.png",
                        pivotY: 61,
                        pivotX: 71,
                        height: 121
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        y: 75,
                        x: 235,
                        var: "jbtp2",
                        skin: "Images/icon_jinb.png",
                        scaleY: .8,
                        scaleX: .8,
                        pivotY: 61,
                        pivotX: 71
                    },
                    compId: 12
                }, {
                    type: "Image",
                    props: {
                        y: 110,
                        x: 105,
                        width: 149,
                        var: "zstp",
                        skin: "Images/icon_baosx.png",
                        pivotY: 74,
                        pivotX: 75,
                        height: 148
                    },
                    compId: 15
                }, {
                    type: "Image",
                    props: {
                        y: 87,
                        x: 105,
                        width: 688,
                        var: "pftp1",
                        scaleY: .3,
                        scaleX: .3,
                        pivotY: 238,
                        pivotX: 344,
                        height: 475
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 75,
                        x: 385,
                        width: 77,
                        var: "pftp2",
                        skin: "Images/icon_smpf.png",
                        pivotY: 47,
                        pivotX: 39,
                        height: 94
                    },
                    compId: 13
                }, {
                    type: "Label",
                    props: {
                        y: 178,
                        x: 105,
                        width: 160,
                        var: "awardlabel1",
                        valign: "middle",
                        pivotY: 14,
                        pivotX: 80,
                        height: 28,
                        fontSize: 28,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 7
                }, {
                    type: "Label",
                    props: {
                        y: 145,
                        x: 385,
                        width: 160,
                        var: "awardlabel2",
                        valign: "middle",
                        text: "Mystery skin",
                        pivotY: 14,
                        pivotX: 80,
                        height: 28,
                        fontSize: 28,
                        font: "Microsoft YaHei",
                        color: "#ffffff",
                        align: "center"
                    },
                    compId: 14
                }, {
                    type: "Image",
                    props: {
                        y: 15,
                        x: 15,
                        width: 61,
                        var: "daytp",
                        height: 78
                    },
                    compId: 8
                }, {
                    type: "Image",
                    props: {
                        y: 15,
                        x: 15,
                        width: 180,
                        var: "zztp",
                        skin: "Images/yqd_zhez.png",
                        sizeGrid: "25,23,19,27",
                        height: 180
                    },
                    compId: 9
                }, {
                    type: "Image",
                    props: {
                        y: 105,
                        x: 105,
                        width: 91,
                        var: "yqdtp",
                        skin: "Images/icon_yqd.png",
                        pivotY: 60,
                        pivotX: 46,
                        height: 119
                    },
                    compId: 10
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 210,
                        var: "xzktp",
                        skin: "Images/xz_dik.png",
                        sizeGrid: "42,39,35,45",
                        height: 210
                    },
                    compId: 11
                }],
                loadList: ["Images/jiangli_dik.png", "Images/qd_dik2.png", "Images/icon_jinb.png",
                    "Images/icon_baosx.png", "Images/icon_smpf.png", "Images/yqd_zhez.png",
                    "Images/icon_yqd.png", "Images/xz_dik.png"
                ],
                loadList3D: []
            }, e.SignItemUI = P, t("ui.Scene.SignItemUI", P);
            class R extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/SignPanel")
                }
            }
            e.SignPanelUI = R, t("ui.Scene.SignPanelUI", R);
            class E extends Laya.Scene {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.createView(E.uiView)
                }
            }
            E.uiView = {
                type: "Scene",
                props: {
                    y: 129,
                    x: 113,
                    width: 226,
                    pivotY: 129,
                    pivotX: 113,
                    height: 258
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 132,
                        x: 114,
                        width: 221,
                        var: "Bg1",
                        skin: "Images/renwu_di.png",
                        pivotY: 129,
                        pivotX: 111,
                        height: 258
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 132,
                        x: 114,
                        width: 221,
                        var: "Bg2",
                        skin: "Images/111.png",
                        pivotY: 129,
                        pivotX: 111,
                        height: 258
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 129,
                        x: 113,
                        width: 226,
                        var: "SelectTP",
                        skin: "Images/choose_k.png",
                        sizeGrid: "54,49,42,50",
                        pivotY: 129,
                        pivotX: 113,
                        name: "SelectTP",
                        height: 258
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 113,
                        x: 113,
                        width: 191,
                        var: "SkinTP",
                        pivotY: 109,
                        pivotX: 96,
                        height: 218
                    },
                    compId: 5
                }],
                loadList: ["Images/renwu_di.png", "Images/111.png", "Images/choose_k.png"],
                loadList3D: []
            }, e.SkinItemUI = E, t("ui.Scene.SkinItemUI", E);
            class A extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/SkinPanel")
                }
            }
            e.SkinPanelUI = A, t("ui.Scene.SkinPanelUI", A);
            class K extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/StartPanel")
                }
            }
            e.StartPanelUI = K, t("ui.Scene.StartPanelUI", K);
            class N extends Laya.View {
                constructor() {
                    super()
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Scene/TrySkinPanel")
                }
            }
            e.TrySkinPanelUI = N, t("ui.Scene.TrySkinPanelUI", N)
        }(e.Scene || (e.Scene = {}))
    }(e || (e = {}));
    class i { }
    i.IsIphoneX = !1, i.IsIphone = !1, i.PhoneMsg = {}, i.ServerUrl = "",//https://tking.52zthy.cn/trdApi/fairygameApi.aspx
        i.apiKey = "zI8Etcc86eF0cu6u", i.apiSecret = "8e73bab666419069f9271e3c6f8a872f",
        i.apiSign = "", i.version = "1.0", i.LoginCode = "", i.SceneId = 0, i.Query = {},
        i.ReferrerInfo = {}, i.EncryptedData = "", i.Iv = "", i.channel = 1;
    class a {
        static TopUIMatch(e, t) {
            let a = 0;
            if (Laya.Browser.onMiniGame) {
                let s = i.PhoneMsg;
                20 == s.statusBarHeight || (40 == s.statusBarHeight || 44 == s.statusBarHeight || 48 == s
                    .statusBarHeight || 29 == s.statusBarHeight || Laya.stage.height / Laya.stage.width > 2.1
                ) && (a += 65), e.top = a + t
            } else Laya.stage.height / Laya.stage.width > 2.1 && (a += 65), e.top = a + t
        }
        static MatchScreen(e, t) {
            e.autoDestroyAtClosed = !0, e.width = Laya.stage.width, e.height = Laya.stage.height, t && (t.width =
                Laya.stage.width, t.height = Laya.stage.height)
        }
        static SetBtnBottom(e, t) {
            i.IsIphoneX ? e.bottom = t + 40 : e.bottom = t
        }
        static AddBtnAnimation(e) {
            for (let t = 0; t < e.length; t++) e[t].off(Laya.Event.MOUSE_DOWN, this, this.ScaleBig), e[t].off(Laya
                .Event.MOUSE_UP, this, this.ScaleSmall), e[t].off(Laya.Event.MOUSE_OUT, this, this.ScaleSmall),
                e[t].on(Laya.Event.MOUSE_DOWN, this, this.ScaleBig, [e[t]]), e[t].on(Laya.Event.MOUSE_UP, this, this
                    .ScaleSmall, [e[t]]), e[t].on(Laya.Event.MOUSE_OUT, this, this.ScaleSmall, [e[t]])
        }
        static ScaleBig(e) {
            Laya.Tween.to(e, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 50), e.zOrder = 1
        }
        static ScaleSmall(e) {
            Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 50), e.zOrder = 0
        }
        static flyDiamondAni(e, t, i, a, s, n, l) {
            for (var r = n.parent || Laya.stage, o = 0; o < 10; o++) {
                let n = new Laya.Image(e);
                r.addChild(n), n.x = t, n.y = i, n.name = "" + o;
                var h = 150 + 10 * [-1, 1][Math.round(Math.random())],
                    c = t + Math.cos(Math.PI / 5 * o) * h,
                    d = i + Math.sin(Math.PI / 5 * o) * h,
                    p = Math.sqrt((t - c) * (t - c) + (i - d) * (i - d)),
                    m = Math.floor(p / 4) / .5;
                Laya.Tween.to(n, {
                    x: c,
                    y: d
                }, m, Laya.Ease.sineIn);
                var y = Math.sqrt((a - c) * (a - c) + (s - d) * (s - d)),
                    S = 2.5 * Math.floor(y / 4);
                Laya.Tween.to(n, {
                    x: a,
                    y: s
                }, S, Laya.Ease.sineIn, Laya.Handler.create(this, function () {
                    "9" == n.name && l && (l.run(), l = null), n.destroy()
                }), m + 100)
            }
        }
    }
    class s { }
    s.Token = "", s.OpenId = "", s.UId = 0, s.uid = 0, s.IsAuthor = !1, s.Name = "You", s.Head = "res/yktp.jpg", s
        .ShareList = [{
            title: "",
            imageUrl: ""
        }], s.IsMusic = !0, s.IsSound = !0, s.IsVibrate = !0, s.Boxbottom = 280, s.IsNewUser = 0, s.IsReportStat = !1, s
            .IsStartBanner = !1, s.OverExportData = [], s.ExportData = [], s.SettleExportData = [], s.FullExportData = [], s
                .ShakeExportData = [], s.HotExportData = [], s.SettleFullExportData = [], s.NewExportData = [], s
                    .LoadingExportData = [], s.DownExportData = [], s.ReExportData = [], s.ExportIndex = 0, s.MaxLevel = 1, s.Gold =
        0, s.Diamond = 0, s.GetDiamond = 0, s.CurrentLevel = 0, s.LoadingNum = 0, s.OpenLateChestNum = 0, s
            .OpenHomeLvNum = 0, s.RoleMatData = [], s.RoleMaskMatData = [], s.KillerMatData = [], s.KillerMaskMatData = [],
        s.WallMatData = [], s.PropMatData = [], s.KillerSkinId = 1, s.KillerSkinData = [1], s.RoleSkinId = 1, s
            .RoleSkinData = [1], s.LevelIndex = 0, s.DowerData = [{
                dowertype: 1,
                dowerlv: 0,
                dowerclicklv: 0
            }, {
                dowertype: 2,
                dowerlv: 0,
                dowerclicklv: 0
            }], s.RoleTaskIndex = 0, s.ShowNewSkinIndex = 0, s.RoleSkin4VideoNum = 0, s.KillerSkin4VideoNum = 0, s
                .RoleSkin7VideoNum = 0, s.RoleSkin8VideoNum = 0, s.PropData = [{
                    propid: 1,
                    proptips: "Stuck the enemy for 6 seconds",
                    proptype: 3,
                    propnum: 1,
                    propgold: 200
                }, {
                    propid: 2,
                    proptips: "Invisible for 5 seconds",
                    proptype: 2,
                    propnum: 1,
                    propgold: 200
                }, {
                    propid: 3,
                    proptips: "Show all escapees",
                    proptype: 1,
                    propnum: 1,
                    propgold: 200
                }, {
                    propid: 4,
                    proptips: "Speed up for 5 seconds",
                    proptype: 3,
                    propnum: 1,
                    propgold: 200
                }], s.EquipData = [{
                    equipid: 1,
                    equipname: "Christmas tree",
                    equiptips: "Attack range +10%",
                    equiptype: 1,
                    equipstate: 0,
                    equiptime: 3600,
                    equiptimestamp: 0
                }, {
                    equipid: 2,
                    equipname: "Pumpkin head",
                    equiptips: "Ignore the defense",
                    equiptype: 1,
                    equipstate: 0,
                    equiptime: 3600,
                    equiptimestamp: 0
                }, {
                    equipid: 3,
                    equipname: "Hopter",
                    equiptips: "+10% speed",
                    equiptype: 2,
                    equipstate: 0,
                    equiptime: 3600,
                    equiptimestamp: 0
                }, {
                    equipid: 4,
                    equipname: "A raccoon head",
                    equiptips: "Resist an arrest",
                    equiptype: 2,
                    equipstate: 0,
                    equiptime: 3600,
                    equiptimestamp: 0
                }], s.KillerWeapId = 0, s.KillerMaskId = 0, s.RoleWeapId = 0, s.RoleMaskId = 0, s.LotteryNum = 0, s
                    .LotteryTimeStamp = 0, s.IsOneGift = 0, s.GiftTimeStamp = 0, s.SignTimeStamp = 0, s.CurrSignDay = 1, s
                        .NextSignDay = 1, s.IsSign = 0, s.IsSevenDay = 0, s.KillRank = 999, s.IsKillRankAward = 0, s
                            .KillRankAwardTimeStamp = 0, s.KillRankData = [], s.EnemyNameData = ['Valley',
                                'Roy', 'Godwin', 'Fenton', 'Gift-Brave', 'Beguiling', 'Eliot', 'Roderick', 'Jimmy', 'Morton', 'Deborah', 'Jane', 'Joan', 'Jasmine', 'Wenda', 'Hayley', 'Hilda', 'Katrina',
                                'Hope', 'Eileen', 'Olin', 'Elijah', 'Egbert', 'Joey', 'Joseph', 'Torrent', 'Keaton', 'Dion', 'Darcy', 'Half-Dane', 'Lulu', 'Luna', 'Ula', 'Nadine', 'Beauty', 'Glynnis',
                                'Light', 'Nursing', 'Bound', 'Kyla', 'Ethanael', 'Ferris', 'Will', 'Wylie', 'Keegan', 'Neville', 'Joshua', 'Quade', 'Faithful', 'Peacemaker', 'Egbert', 'Howard',
                                'Zachary', 'Leroy', 'Exalted', 'Thomas', 'Lewis', 'Meadow', 'Lewis', 'Tobias'],
        s.StartVideoIndex = 0, s.TotalSwitch = 0, s.BannerSwitch = 0, s.BannerObbs = 0, s.EggObbs = 0, s
            .OverEggObbs = 0, s.EggBannerObbs = 0, s.LoadingExportBannerDelay = 1e3, s.BannerDelayTime = 900, s
                .ButtonDelay = 0, s.ExportSwitch = !1, s.IsOpenChest = 5, s.SettleVideoAwardOdds = 0, s.VictoryVideoOdds = 0, s
                    .IsCreateBanner = !0;
    class n {
        static PlaySound(e, t = 1) {
            s.IsSound && (Laya.SoundManager.autoReleaseSound = !1, Laya.SoundManager.playSound("GameScene/Sound/" +
                e + ".mp3", t))
        }
        static PlayBGM(e, t) {
            if (s.IsMusic) {
                if (t == n.CurrBgm) return;
                n.CurrBgm = t, Laya.SoundManager.autoReleaseSound = !1, Laya.SoundManager.playMusic(
                    "GameScene/Sound/" + e + ".mp3", 0)
            }
        }
        static PlayVibrateShort() {
            s.IsVibrate && window.wx && window.wx.vibrateShort()
        }
        static PlayVibrateLong() {
            s.IsVibrate && window.wx && window.wx.vibrateLong()
        }
    }
    n.CurrBgm = 0;
    class l {
        static getAngle(e, t, i, a) {
            return Math.atan2(e - t, i - a)
        }
        static getDistance(e, t, i, a) {
            var s = t - e,
                n = a - i;
            return Math.pow(s * s + n * n, .5)
        }
        static getDistanceSquare(e, t, i, a) {
            var s = t - e,
                n = a - i;
            return s * s + n * n
        }
        static GetRandFloat(e, t) {
            return Math.random() * (t - e) + e
        }
        static GetRandInt(e, t) {
            return Math.round(Math.random() * (t - e) + e)
        }
        static GetCheckBingo(e) {
            return this.GetRandInt(1, 100) <= e
        }
        static RangeArray(e, t, i, a) {
            if (e >= t) return null;
            if (i > t - e + 1) return null;
            var s = new Array;
            if (a)
                for (; s.length < i;) s.push(this.GetRandInt(e, t));
            else
                for (; s.length < i;) {
                    var n = this.GetRandInt(e, t); - 1 == s.indexOf(n) && s.push(n)
                }
            return s
        }
        static GetDataRandom(e) {
            var t = e.arry,
                i = e.range;
            i = i > t.length ? t.length : i;
            for (var a = [].concat(t), s = [], n = 0; n < i; n++) {
                var l = Math.floor(Math.random() * a.length);
                s.push(a[l]), a.splice(l, 1)
            }
            return s
        }
        static GetArrDifference(e, t) {
            return e.concat(t).filter(function (e, t, i) {
                return i.indexOf(e) === i.lastIndexOf(e)
            })
        }
        static DataOutRep(e) {
            for (var t = [], i = 0, a = e.length; i < a; i++) {
                for (var s = i + 1; s < a; s++) e[i].app_id == e[s].app_id && ++i;
                t.push(e[i])
            }
            return t
        }
        static mixArray(e) {
            for (var t = 0, i = Math.round(e.length / 2); t < i; t++) {
                var a = this.GetRandInt(0, e.length),
                    s = this.GetRandInt(0, e.length),
                    n = e[a];
                e[a] = e[s], e[s] = n
            }
            return e
        }
        static isToday(e, t = 0) {
            t = t || Laya.Browser.now();
            var i = new Date(e),
                a = new Date(t);
            return i.getFullYear() == a.getFullYear() && i.getMonth() == a.getMonth() && i.getDate() == a.getDate()
        }
        static Addo(e) {
            return e < 10 ? "0" + e : e
        }
    }
    class r {
        static MoveTo(e, t, i, a, s, n = 0, l = !0, r, o) {
            let h = e.transform.position.clone();
            if (0 == i || null == i) return void (e.transform.position = t.clone());
            (o <= 0 || null == o) && (o = this.frame);
            let c = function () {
                e.transform && (e.transform.position = h), r && r()
            };
            Laya.timer.once(n, e, function () {
                Laya.timer.frameLoop(o, e, c)
            });
            let d = Laya.Tween.to(h, {
                x: t.x,
                y: t.y,
                z: t.z
            }, i, a, Laya.Handler.create(e, function () {
                e.transform && (e.transform.position = t.clone(), Laya.timer.clear(e, c)), s && s.run()
            }), n, l);
            this.tweenMap[e.id] || (this.tweenMap[e.id] = []), this.tweenMap[e.id].push(d)
        }
        static LocalMoveTo(e, t, i, a, s, n = 0, l = !0, r, o) {
            let h = e.transform.localPosition.clone();
            if (0 == i || null == i) return void (e.transform.localPosition = t.clone());
            (o <= 0 || null == o) && (o = this.frame);
            let c = function () {
                e.transform && (e.transform.localPosition = h), r && r()
            };
            Laya.timer.once(n, e, function () {
                Laya.timer.frameLoop(o, e, c)
            });
            let d = Laya.Tween.to(h, {
                x: t.x,
                y: t.y,
                z: t.z
            }, i, a, Laya.Handler.create(e, function () {
                e.transform && (e.transform.localPosition = t.clone(), Laya.timer.clear(e, c)), s && s
                    .run()
            }), n, l);
            this.tweenMap[e.id] || (this.tweenMap[e.id] = []), this.tweenMap[e.id].push(d)
        }
        static RotateTo(e, t, i, a, s, n, l = !0, r, o) {
            let h = e.transform.rotationEuler.clone();
            if (0 == i || null == i) return void (e.transform.rotationEuler = t.clone());
            (o <= 0 || null == o) && (o = this.frame);
            let c = function () {
                e.transform && (e.transform.rotationEuler = h), r && r()
            };
            Laya.timer.once(n, e, function () {
                Laya.timer.frameLoop(o, e, c)
            });
            let d = Laya.Tween.to(h, {
                x: t.x,
                y: t.y,
                z: t.z
            }, i, a, Laya.Handler.create(e, function () {
                e.transform && (e.transform.rotationEuler = t.clone(), Laya.timer.clear(e, c)), s && s
                    .run()
            }), n, l);
            this.tweenMap[e.id] || (this.tweenMap[e.id] = []), this.tweenMap[e.id].push(d)
        }
        static LocalRotateTo(e, t, i, a, s, n, l = !0, r, o) {
            let h = e.transform.localRotationEuler.clone();
            if (0 == i || null == i) return void (e.transform.localRotationEuler = t.clone());
            (o <= 0 || null == o) && (o = this.frame);
            let c = function () {
                e.transform && (e.transform.localRotationEuler = h), r && r()
            };
            Laya.timer.once(n, e, function () {
                Laya.timer.frameLoop(o, e, c)
            });
            let d = Laya.Tween.to(h, {
                x: t.x,
                y: t.y,
                z: t.z
            }, i, a, Laya.Handler.create(e, function () {
                e.transform && (e.transform.localRotationEuler = t.clone(), Laya.timer.clear(e, c)),
                    s && s.run()
            }), n, l);
            this.tweenMap[e.id] || (this.tweenMap[e.id] = []), this.tweenMap[e.id].push(d)
        }
        static ScaleTo(e, t, i, a, s, n, l = !0, r, o) {
            let h = e.transform.localScale.clone();
            if (0 == i || null == i) return void (e.transform.localScale = t.clone());
            (o <= 0 || null == o) && (o = this.frame);
            let c = function () {
                e.transform.localScale = h.clone(), r && r()
            };
            Laya.timer.once(n, this, function () {
                Laya.timer.frameLoop(o, e, c)
            });
            let d = Laya.Tween.to(h, {
                x: t.x,
                y: t.y,
                z: t.z
            }, i, a, Laya.Handler.create(e, function () {
                e.transform.localScale = t.clone(), Laya.timer.clear(e, c), s && s.run()
            }), n, l);
            this.tweenMap[e.id] || (this.tweenMap[e.id] = []), this.tweenMap[e.id].push(d)
        }
        static ClearTween(e) {
            let t = this.tweenMap[e.id];
            if (t && t.length)
                for (; t.length > 0;) {
                    t.pop().clear()
                }
            Laya.timer.clearAll(e)
        }
    }
    r.tweenMap = {}, r.frame = 1;
    class o extends Laya.Script {
        constructor() {
            super()
        }
        static Init() {
            Laya.loader.create(["GameScene/Effect/Conventional/Effect.lh"], Laya.Handler.create(this, this
                .LoadRes))
        }
        static LoadRes() {
            this.EffectData = Laya.loader.getRes("GameScene/Effect/Conventional/Effect.lh"), s.LoadingNum++,
                console.log("特效资源加载成功！", this.EffectData)
        }
        static SelectEffect(e) {
            return Laya.Sprite3D.instantiate(this.EffectData.getChildByName(e))
        }
    }
    class h extends Laya.Script {
        constructor() {
            super(), this.owner = this.owner, this.EffectType = 0, this.TargetRotY = 0, this.MyId = 0, this
                .ReMoveIndex = 0, this.ReMoveMaxIndex = 0
        }
        onAwake() {
            this.owner.name == c.Name_Effect_BianShen ? this.ReMoveMaxIndex = 70 : this.owner.name == c
                .Name_Effect_Gold ? this.ReMoveMaxIndex = 65 : this.owner.name == c.Name_Effect_XuanYun ? this
                    .ReMoveMaxIndex = 180 : this.owner.name == c.Name_Effect_Help ? this.ReMoveMaxIndex = 180 : this
                        .owner.name == c.Name_Effect_ShiQu ? this.ReMoveMaxIndex = 40 : this.owner.name == c
                            .Name_Effect_JiaoYin ? this.ReMoveMaxIndex = 900 : this.owner.name == c.Name_Effect_JianSu ?
                        this.ReMoveMaxIndex = 900 : this.owner.name == c.Name_Effect_JiaSu ? this.ReMoveMaxIndex = 300 :
                            this.owner.name == c.Name_Effect_Diamond ? this.ReMoveMaxIndex = 65 : this.owner.name == c
                                .Name_Effect_Lamp ? this.ReMoveMaxIndex = 900 : this.owner.name == c.Name_Effect_Bing && (this
                                    .ReMoveMaxIndex = 80)
        }
        onUpdate() {
            this.owner.name == c.Name_Effect_BianShen || this.owner.name == c.Name_Effect_Gold || this.owner
                .name == c.Name_Effect_Help || this.owner.name == c.Name_Effect_JiaoYin || this.owner.name == c
                    .Name_Effect_JianSu || this.owner.name == c.Name_Effect_JiaSu || this.owner.name == c
                        .Name_Effect_XuanYun || this.owner.name == c.Name_Effect_Lamp ? this.Target && (this.owner
                            .name == c.Name_Effect_XuanYun ? this.owner.transform.position = new Laya.Vector3(this
                                .Target.transform.position.x, this.Target.transform.position.y + 2.2, this.Target
                                    .transform.position.z) : this.owner.name == c.Name_Effect_JiaoYin || this.owner.name ==
                                        c.Name_Effect_JianSu ? this.owner.transform.position = new Laya.Vector3(this.Target
                                            .transform.position.x, this.Target.transform.position.y + .04, this.Target.transform
                                                .position.z) : this.owner.name == c.Name_Effect_JiaSu ? this.owner.transform.position =
                                                    new Laya.Vector3(this.Target.transform.position.x, this.Target.transform.position.y + 1,
                                                        this.Target.transform.position.z) : this.owner.transform.position = this.Target
                                                            .transform.position, 0 != this.ReMoveMaxIndex && ((D._Instance.IsStartGame || 1 == this
                                                                .EffectType) && this.ReMoveIndex++, this.ReMoveIndex >= this.ReMoveMaxIndex && c
                                                                    ._Instance.recover(this.owner.name, this.owner))) : this.owner.name != c
                                                                        .Name_Effect_ShiQu && this.owner.name != c.Name_Effect_Bing && this.owner.name != c
                                                                            .Name_Effect_Diamond || this.TargetPos && (this.owner.transform.position = this.TargetPos, 0 !=
                                                                                this.ReMoveMaxIndex && (D._Instance.IsStartGame && this.ReMoveIndex++, this.ReMoveIndex >=
                                                                                    this.ReMoveMaxIndex && c._Instance.recover(this.owner.name, this.owner)))
        }
    }
    class c {
        static get _Instance() {
            if (!c._instance) {
                let e = new c;
                c._instance = e
            }
            return c._instance
        }
        init() {
            this._effect_bianshen = o.SelectEffect("BianShen"), this._effect_gold = o.SelectEffect("Gold"), this
                ._effect_xuanyun = o.SelectEffect("XuanYun"), this._effect_help = o.SelectEffect("Help"), this
                    ._effect_shiqu = o.SelectEffect("ShiQu"), this._effect_jiaoyin = o.SelectEffect("JiaoYin"), this
                        ._effect_jiasu = o.SelectEffect("JiaSu"), this._effect_yanwu = o.SelectEffect("YanWu"), this
                            ._effect_diamond = o.SelectEffect("Diamond"), this._effect_lamp = o.SelectEffect("Lamp"), this
                                ._effect_jiansu = o.SelectEffect("JianSu"), this._effect_bing = o.SelectEffect("Bing")
        }
        get effect_bianshen() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_BianShen, () => {
                let e = this._effect_bianshen.clone();
                return e.name = c.Name_Effect_BianShen, e
            })
        }
        get effect_gold() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_Gold, () => {
                let e = this._effect_gold.clone();
                return e.name = c.Name_Effect_Gold, e
            })
        }
        get effect_xuanyun() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_XuanYun, () => {
                let e = this._effect_xuanyun.clone();
                return e.name = c.Name_Effect_XuanYun, e
            })
        }
        get effect_help() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_Help, () => {
                let e = this._effect_help.clone();
                return e.name = c.Name_Effect_Help, e
            })
        }
        get effect_shiqu() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_ShiQu, () => {
                let e = this._effect_shiqu.clone();
                return e.name = c.Name_Effect_ShiQu, e
            })
        }
        get effect_jiaoyin() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_JiaoYin, () => {
                let e = this._effect_jiaoyin.clone();
                return e.name = c.Name_Effect_JiaoYin, e
            })
        }
        get effect_jiasu() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_JiaSu, () => {
                let e = this._effect_jiasu.clone();
                return e.name = c.Name_Effect_JiaSu, e
            })
        }
        get effect_yanwu() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_YanWu, () => {
                let e = this._effect_yanwu.clone();
                return e.name = c.Name_Effect_YanWu, e
            })
        }
        get effect_diamond() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_Diamond, () => {
                let e = this._effect_diamond.clone();
                return e.name = c.Name_Effect_Diamond, e
            })
        }
        get effect_lamp() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_Lamp, () => {
                let e = this._effect_lamp.clone();
                return e.name = c.Name_Effect_Lamp, e
            })
        }
        get effect_jiansu() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_JianSu, () => {
                let e = this._effect_jiansu.clone();
                return e.name = c.Name_Effect_JianSu, e
            })
        }
        get effect_bing() {
            return Laya.Pool.getItemByCreateFun(c.Name_Effect_Bing, () => {
                let e = this._effect_bing.clone();
                return e.name = c.Name_Effect_Bing, e
            })
        }
        recover(e, t, i) {
            t.getComponent(h) && t.getComponent(h).destroy(), t.removeSelf(), Laya.Pool.recover(e, t)
        }
        initrecover(e, t) {
            t.removeSelf(), Laya.Pool.recover(e, t)
        }
    }
    c.Name_Effect_BianShen = "Name_Effect_BianShen", c.Name_Effect_Gold = "Name_Effect_Gold", c.Name_Effect_XuanYun =
        "Name_Effect_XuanYun", c.Name_Effect_Help = "Name_Effect_Help", c.Name_Effect_ShiQu = "Name_Effect_ShiQu", c
            .Name_Effect_JiaoYin = "Name_Effect_JiaoYin", c.Name_Effect_JiaSu = "Name_Effect_JiaSu", c.Name_Effect_YanWu =
        "Name_Effect_YanWu", c.Name_Effect_Diamond = "Name_Effect_Diamond", c.Name_Effect_Lamp = "Name_Effect_Lamp", c
            .Name_Effect_JianSu = "Name_Effect_JianSu", c.Name_Effect_Bing = "Name_Effect_Bing";
    class d {
        static getKey(e) {
            return "Christmas-3d-Maze-Hunt-or-Catch-" + e
        }
        static removeKey(e) {
            e = this.getKey(e), localStorage.removeItem(e)
        }
        static save_int(e, t) {
            e = this.getKey(e), localStorage.setItem(e, t.toString())
        }
        static load_int(e) {
            return e = this.getKey(e), parseInt(localStorage.getItem(e))
        }
        static save_float(e, t) {
            e = this.getKey(e), localStorage.setItem(e, t.toString())
        }
        static load_float(e) {
            return e = this.getKey(e), parseFloat(localStorage.getItem(e))
        }
        static save_string(e, t) {
            e = this.getKey(e), localStorage.setItem(e, t)
        }
        static load_string(e) {
            return e = this.getKey(e), localStorage.getItem(e)
        }
        static save_boolean(e, t) {
            e = this.getKey(e), t ? this.save_int(e, 1) : this.save_int(e, 0)
        }
        static load_boolean(e) {
            return e = this.getKey(e), 1 == this.load_int(e)
        }
    }
    var p = 8;

    function hex_md5(e) {
        return function (e) {
            for (var t = "", i = 0; i < 4 * e.length; i++) t += "0123456789abcdef".charAt(e[i >> 2] >> i % 4 * 8 +
                4 & 15) + "0123456789abcdef".charAt(e[i >> 2] >> i % 4 * 8 & 15);
            return t
        }(function (e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var i = 1732584193, a = -271733879, s = -1732584194, n = 271733878, l = 0; l < e.length; l +=
                16) {
                var r = i,
                    o = a,
                    h = s,
                    c = n;
                i = md5_ff(i, a, s, n, e[l + 0], 7, -680876936), n = md5_ff(n, i, a, s, e[l + 1], 12, -
                    389564586), s = md5_ff(s, n, i, a, e[l + 2], 17, 606105819), a = md5_ff(a, s, n, i, e[
                        l + 3], 22, -1044525330), i = md5_ff(i, a, s, n, e[l + 4], 7, -176418897), n = md5_ff(n,
                            i, a, s, e[l + 5], 12, 1200080426), s = md5_ff(s, n, i, a, e[l + 6], 17, -1473231341),
                    a = md5_ff(a, s, n, i, e[l + 7], 22, -45705983), i = md5_ff(i, a, s, n, e[l + 8], 7,
                        1770035416), n = md5_ff(n, i, a, s, e[l + 9], 12, -1958414417), s = md5_ff(s, n, i, a,
                            e[l + 10], 17, -42063), a = md5_ff(a, s, n, i, e[l + 11], 22, -1990404162), i = md5_ff(
                                i, a, s, n, e[l + 12], 7, 1804603682), n = md5_ff(n, i, a, s, e[l + 13], 12, -40341101),
                    s = md5_ff(s, n, i, a, e[l + 14], 17, -1502002290), a = md5_ff(a, s, n, i, e[l + 15], 22,
                        1236535329), i = md5_gg(i, a, s, n, e[l + 1], 5, -165796510), n = md5_gg(n, i, a, s, e[
                            l + 6], 9, -1069501632), s = md5_gg(s, n, i, a, e[l + 11], 14, 643717713), a = md5_gg(a,
                                s, n, i, e[l + 0], 20, -373897302), i = md5_gg(i, a, s, n, e[l + 5], 5, -701558691), n =
                    md5_gg(n, i, a, s, e[l + 10], 9, 38016083), s = md5_gg(s, n, i, a, e[l + 15], 14, -
                        660478335), a = md5_gg(a, s, n, i, e[l + 4], 20, -405537848), i = md5_gg(i, a, s, n, e[
                            l + 9], 5, 568446438), n = md5_gg(n, i, a, s, e[l + 14], 9, -1019803690), s = md5_gg(s,
                                n, i, a, e[l + 3], 14, -187363961), a = md5_gg(a, s, n, i, e[l + 8], 20, 1163531501),
                    i = md5_gg(i, a, s, n, e[l + 13], 5, -1444681467), n = md5_gg(n, i, a, s, e[l + 2], 9, -
                        51403784), s = md5_gg(s, n, i, a, e[l + 7], 14, 1735328473), a = md5_gg(a, s, n, i, e[
                            l + 12], 20, -1926607734), i = md5_hh(i, a, s, n, e[l + 5], 4, -378558), n = md5_hh(n,
                                i, a, s, e[l + 8], 11, -2022574463), s = md5_hh(s, n, i, a, e[l + 11], 16, 1839030562),
                    a = md5_hh(a, s, n, i, e[l + 14], 23, -35309556), i = md5_hh(i, a, s, n, e[l + 1], 4, -
                        1530992060), n = md5_hh(n, i, a, s, e[l + 4], 11, 1272893353), s = md5_hh(s, n, i, a, e[
                            l + 7], 16, -155497632), a = md5_hh(a, s, n, i, e[l + 10], 23, -1094730640), i = md5_hh(
                                i, a, s, n, e[l + 13], 4, 681279174), n = md5_hh(n, i, a, s, e[l + 0], 11, -358537222),
                    s = md5_hh(s, n, i, a, e[l + 3], 16, -722521979), a = md5_hh(a, s, n, i, e[l + 6], 23,
                        76029189), i = md5_hh(i, a, s, n, e[l + 9], 4, -640364487), n = md5_hh(n, i, a, s, e[l +
                            12], 11, -421815835), s = md5_hh(s, n, i, a, e[l + 15], 16, 530742520), a = md5_hh(a, s,
                                n, i, e[l + 2], 23, -995338651), i = md5_ii(i, a, s, n, e[l + 0], 6, -198630844), n =
                    md5_ii(n, i, a, s, e[l + 7], 10, 1126891415), s = md5_ii(s, n, i, a, e[l + 14], 15, -
                        1416354905), a = md5_ii(a, s, n, i, e[l + 5], 21, -57434055), i = md5_ii(i, a, s, n, e[
                            l + 12], 6, 1700485571), n = md5_ii(n, i, a, s, e[l + 3], 10, -1894986606), s = md5_ii(
                                s, n, i, a, e[l + 10], 15, -1051523), a = md5_ii(a, s, n, i, e[l + 1], 21, -2054922799),
                    i = md5_ii(i, a, s, n, e[l + 8], 6, 1873313359), n = md5_ii(n, i, a, s, e[l + 15], 10, -
                        30611744), s = md5_ii(s, n, i, a, e[l + 6], 15, -1560198380), a = md5_ii(a, s, n, i, e[
                            l + 13], 21, 1309151649), i = md5_ii(i, a, s, n, e[l + 4], 6, -145523070), n = md5_ii(n,
                                i, a, s, e[l + 11], 10, -1120210379), s = md5_ii(s, n, i, a, e[l + 2], 15, 718787259),
                    a = md5_ii(a, s, n, i, e[l + 9], 21, -343485551), i = safe_add(i, r), a = safe_add(a, o),
                    s = safe_add(s, h), n = safe_add(n, c)
            }
            return Array(i, a, s, n)
        }(function (e) {
            for (var t = Array(), i = (1 << p) - 1, a = 0; a < e.length * p; a += p) t[a >> 5] |= (e
                .charCodeAt(a / p) & i) << a % 32;
            return t
        }(e), e.length * p))
    }

    function md5_cmn(e, t, i, a, s, n) {
        return safe_add((l = safe_add(safe_add(t, e), safe_add(a, n))) << (r = s) | l >>> 32 - r, i);
        var l, r
    }

    function md5_ff(e, t, i, a, s, n, l) {
        return md5_cmn(t & i | ~t & a, e, t, s, n, l)
    }

    function md5_gg(e, t, i, a, s, n, l) {
        return md5_cmn(t & a | i & ~a, e, t, s, n, l)
    }

    function md5_hh(e, t, i, a, s, n, l) {
        return md5_cmn(t ^ i ^ a, e, t, s, n, l)
    }

    function md5_ii(e, t, i, a, s, n, l) {
        return md5_cmn(i ^ (t | ~a), e, t, s, n, l)
    }

    function safe_add(e, t) {
        var i = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
    }
    class m {
        static createInitBanner() {
            if (1 == s.TotalSwitch && 1 == s.BannerSwitch)
                for (let e = 0; e < m.BannerAdIdList.length; e++) this.createBannerAd(m.BannerAdIdList[e]);
            else this.createBannerAd(m.BannerAdIdList[0])
        }
        static createBannerAd(e, t, a) {
            if (s.IsCreateBanner) {
                if (window.wx) {
                    let s = window.wx.createBannerAd({
                        adUnitId: e,
                        style: {
                            left: 0,
                            top: i.PhoneMsg.screenHeight,
                            width: i.PhoneMsg.screenWidth
                        }
                    });
                    s.onLoad(function () {
                        s.hide(), m.bannerId++;
                        let i = m.getBannerAdtype(e),
                            a = !1;
                        for (let t = 0; t < m.BannerAdList.length; t++) {
                            let n = m.BannerAdList[t];
                            if (1 != n.adtype && n.adtype == i) {
                                a = !0, n.id = m.bannerId, n.bannerid = e, n.adtype = i, n.isshow = !1, n
                                    .click = 0, n.showstate = 0, n.banner = s;
                                break
                            }
                        }
                        if (!a) {
                            let t = {};
                            t.id = m.bannerId, t.bannerid = e, t.adtype = i, t.isshow = !1, t.click = 0, t
                                .showstate = 0, t.banner = s, m.BannerAdList.push(t)
                        }
                        t && t.run()
                    }), s.onError(function (e) {
                        a && a.run()
                    }), s.onResize(function (e) {
                        i.IsIphoneX ? s.style.top = i.PhoneMsg.screenHeight - 20 - e.height : s.style.top =
                            i.PhoneMsg.screenHeight - e.height
                    })
                }
            } else t && t.run()
        }
        static getnotshoworclickBannerAd(e) {
            for (let t = 0; t < m.BannerAdList.length; t++) {
                let i = m.BannerAdList[t];
                if (i.adtype == e) switch (e) {
                    case 1:
                        if (!i.isshow) return i;
                        break;
                    case 2:
                    case 3:
                        return i
                }
            }
            return !1
        }
        static getclickleastBannerAd() {
            let e = !1,
                t = 99999;
            for (let i = 0; i < m.BannerAdList.length; i++) {
                let a = m.BannerAdList[i];
                1 == a.adtype && a.click < t && (t = a.click, e = a)
            }
            return e
        }
        static compareclickleastBannerAd(e) {
            for (let t = 0; t < m.BannerAdList.length; t++) {
                let i = m.BannerAdList[t];
                if (1 == i.adtype && i.click < e.click) return i
            }
            return e
        }
        static getIsclickBannerAd(e) {
            for (let t = 0; t < m.BannerAdList.length; t++) {
                let i = m.BannerAdList[t];
                if (i.adtype == e) return !(i.click <= 0)
            }
            return !0
        }
        static setbannerAdclick(e) {
            for (let t = 0; t < m.BannerAdList.length; t++) {
                let i = m.BannerAdList[t];
                if (i.id == e) {
                    i.click++;
                    break
                }
            }
        }
        static getBannerAdtype(e) {
            switch (e) {
                case "adunit-b63756e0adeb0513":
                    return 1;
                case "adunit-fe151314628b2c04":
                    return 2;
                case "adunit-a05d64eec3b40001":
                    return 3
            }
        }
        static CreateVideoAd(e, t, i, a, n = !0) {
            // if (s.IsCreateBanner && window.wx)
            //     if (m.isPlay)
            //         if (m.isPlay = !1, m.VideoAdList[e]) m.PlayVideoAd(e, t, i, a, n);
            //         else {
            //             let s = window.wx.createRewardedVideoAd({
            //                 adUnitId: m.VideoAdIdList[e]
            //             });
            //             s.load().then(() => {
            //                 console.log("视频广告创建成功，广告位:" + m.VideoAdNameList[e] + "，id：", m.VideoAdIdList[
            //                     e]), m.VideoAdList[e] = s, m.PlayVideoAd(e, t, i, a, n)
            //             }).catch(t => {
            //                 console.log("视频广告创建失败，广告位:" + m.VideoAdNameList[e] + "，id：", m.VideoAdIdList[e],
            //                     "错误信息：", t), a && a.run(), n && I.OpenTips("视频加载失败！请稍后再试！"), m
            //                         .isPlay = !0
            //             }), s.onLoad(() => {
            //                 s.offLoad()
            //             }), s.onError(() => {
            //                 s.offError()
            //             })
            //         }
            //     else n && I.OpenTips("你点的太快了，视频还在加载中！");
            // else t && t.run()
            platform.getInstance().showReward(() => {
                t && t.run();
            }, () => {
                i && i.run();
            })
        }
        static PlayVideoAd(e, t, i, a, s = !0) {
            m.VideoAdList[e] ? (m.VideoAdList[e].show().then(() => {
                console.log("视频广告展示成功，广告位:" + m.VideoAdNameList[e] + "，id：", m.VideoAdIdList[e])
            }).catch(t => {
                console.log("视频广告展示失败，广告位:" + m.VideoAdNameList[e] + "，id：", m.VideoAdIdList[e],
                    "错误信息：", t), a && a.run(), s && I.OpenTips("视频加载失败！请稍后再试！"), m.isPlay = !0
            }), m.VideoAdList[e].onClose(a => {
                m.VideoAdList[e].offClose(), a.isEnded ? t && t.run() : (s && I.OpenTips("获取失败！请看完视频！"),
                    i && i.run()), m.ReCreateVideoAd(e)
            })) : (a && a.run(), s && I.OpenTips("视频加载失败！请稍后再试！"), m.isPlay = !0)
        }
        static ReCreateVideoAd(e) {
            let t = window.wx.createRewardedVideoAd({
                adUnitId: m.VideoAdIdList[e]
            });
            t.load().then(() => {
                console.log("视频广告创建成功，广告位:" + m.VideoAdNameList[e] + "，id：", m.VideoAdIdList[e]), m
                    .VideoAdList[e] = t, m.isPlay = !0
            }).catch(t => {
                console.log("视频广告创建失败，广告位:" + m.VideoAdNameList[e] + "，id：", m.VideoAdIdList[e], "错误信息：",
                    t), m.isPlay = !0
            }), t.onLoad(() => {
                t.offLoad()
            }), t.onError(() => {
                t.offError()
            })
        }
    }
    m.BannerAdIdList = ["adunit-b63756e0adeb0513", "adunit-fe151314628b2c04", "adunit-a05d64eec3b40001"], m
        .BannerAdList = [], m.VideoAdIdList = ["adunit-648cc53780249f0c", "adunit-87c35d04b120cbae",
            "adunit-2a4433d8475742cd"
        ], m.VideoAdList = [!1, !1, !1], m.VideoAdNameList = ["共用视频", "误点视频", "用户主动点击视频"], m.bannerId = 0, m.isPlay = !
        0;
    class y {
        static SendMsgToServer(e, t, a) {
            // let n, l = {},
            //     r = [];
            // switch (e) {
            //     case "analysis_user_info":
            //         r = [{
            //             key: "encryptedData",
            //             value: encodeURIComponent(i.EncryptedData)
            //         }, {
            //             key: "iv",
            //             value: i.Iv
            //         }];
            //         break;
            //     case "get_user_base_info":
            //         r = [];
            //         break;
            //     case "settle_game":
            //         r = [{
            //             key: "killer",
            //             value: t[0]
            //         }];
            //         break;
            //     case "user_rank":
            //         r = []
            // }
            // l = this.GetParam(r), n = this.ParamJoint(l, e);
            // let o = new Laya.HttpRequest;
            // o.http.timeout = 1e4, o.once(Laya.Event.COMPLETE, this, t => {
            //     if (t) switch (e) {
            //         case "analysis_user_info":
            //             console.log("授权", t);
            //             break;
            //         case "get_user_base_info":
            //             console.log("玩家基础数据:", t);
            //             let i = t.data.area_switch;
            //             s.KillRank = t.data.user_killer_rank_history;
            //             let n = t.data.modular_switch;
            //             for (let e = 0; e < n.length; e++) {
            //                 let t = n[e].modular_code,
            //                     i = n[e].switch;
            //                 switch (t) {
            //                     case "fairygame_approve_switch":
            //                         s.TotalSwitch = i;
            //                         break;
            //                     case "fairygame_golden_eggs_probability":
            //                         s.EggObbs = i;
            //                         break;
            //                     case "vx_fairygame_open_chest_banner_switch":
            //                         s.EggBannerObbs = i;
            //                         break;
            //                     case "fairygame_banner_shot_switch":
            //                         s.BannerObbs = i;
            //                         break;
            //                     case "fairygame_export_approve_switch":
            //                         s.ExportSwitch = 1 == i;
            //                         break;
            //                     case "fairygame_open_chest_approve_switch":
            //                         s.IsOpenChest = i;
            //                         break;
            //                     case "vx_fairygame_settle_rate_switch":
            //                         s.SettleVideoAwardOdds = i;
            //                         break;
            //                     case "vx_fairygame_next_check_video_switch":
            //                         s.VictoryVideoOdds = i;
            //                         break;
            //                     case "fairygame_loading_banner_switch":
            //                         s.LoadingExportBannerDelay = i;
            //                         break;
            //                     case "fairygame_delay_banner_switch":
            //                         s.BannerDelayTime = i;
            //                         break;
            //                     case "fairygame_shot_chest_switch":
            //                         s.OverEggObbs = i
            //                 }
            //             }
            //             I.IsBannerSwitch(i), s.ButtonDelay = 1 == s.TotalSwitch ? 2e3 : 0, m
            //                 .createInitBanner(), console.log("UserData.TotalSwitch:", s.TotalSwitch),
            //                 console.log("UserData.BannerSwitch:", s.BannerSwitch), console.log(
            //                     "UserData.EggObbs:", s.EggObbs), console.log("UserData.EggBannerObbs:",
            //                         s.EggBannerObbs), console.log("UserData.BannerObbs:", s.BannerObbs),
            //                 console.log("UserData.ExportSwitch:", s.ExportSwitch), console.log(
            //                     "UserData.IsOpenChest:", s.IsOpenChest), console.log(
            //                         "UserData.SettleVideoAwardOdds:", s.SettleVideoAwardOdds), console.log(
            //                             "UserData.VictoryVideoOdds:", s.VictoryVideoOdds), console.log(
            //                                 "UserData.ButtonDelay:", s.ButtonDelay), console.log(
            //                                     "UserData.LoadingExportBannerDelay:", s.LoadingExportBannerDelay),
            //                 console.log("UserData.BannerDelayTime:", s.BannerDelayTime), console.log(
            //                     "UserData.OverEggObbs:", s.OverEggObbs);
            //             break;
            //         case "settle_game":
            //             console.log("结算游戏", t);
            //             break;
            //         case "user_rank":
            //             console.log("击杀排行榜", t), s.KillRankData = t.data, a && a.run()
            //     }
            // }), o.once(Laya.Event.ERROR, this, t => {
            //     console.log("请求失败：", t), y.ErrorTimes++, y.ErrorTimes < 3 ? y.SendMsgToServer(e) : y
            //         .ErrorTimes = 0
            // }), o.send(i.ServerUrl + n, null, "post", "json"), console.log("我请求服务器的链接是：", i.ServerUrl + n)
        }
        static GetTimestamp() {
            let e = new Date,
                t = e.getFullYear(),
                i = e.getMonth() + 1,
                a = e.getDate(),
                s = e.getHours();
            return new Date(t + "/" + i + "/" + a + " " + s + ":00:00").getTime() / 1e3
        }
        static GetParam(e) {
            var t = {};
            t.uid = s.UId, t.sign = hex_md5(i.apiKey + s.UId + this.GetTimestamp());
            for (let i = 0; i < e.length; i++) t[e[i].key] = e[i].value;
            return t
        }
        static ParamJoint(e, t) {
            let i = "?action=" + t + "&";
            for (var a in e) i += a += "=" + e[a] + "&";
            return i = i.substring(0, i.length - 1)
        }
        static buildQueryString(e) {
            return Object.keys(e).map(t => encodeURIComponent(t) + "=" + encodeURIComponent(e[t])).join("&")
        }
    }
    y.ErrorTimes = 0;
    class S {
        static SendMsgToServer(e, t, a) {
            let n, l = {},
                r = [];
            switch (e) {
                case "export_game":
                    r = [{
                        key: "ghid",
                        value: S.ghid
                    }, {
                        key: "list_type",
                        value: t[0]
                    }, {
                        key: "channel",
                        value: i.channel
                    }];
                    break;
                case "game_event":
                    r = [{
                        key: "ghid",
                        value: S.ghid
                    }, {
                        key: "list_type",
                        value: t[0]
                    }, {
                        key: "location_index",
                        value: t[1]
                    }, {
                        key: "event_code",
                        value: t[2]
                    }, {
                        key: "channel",
                        value: i.channel
                    }]
            }
            l = this.GetParam(r), n = this.ParamJoint(l, e);
            let o = new Laya.HttpRequest;
            o.http.timeout = 1e4, o.once(Laya.Event.COMPLETE, this, i => {
                if (i) switch (e) {
                    case "export_game":
                        switch (t[0]) {
                            case 1:
                                s.OverExportData = i.data, console.log("UserData.OverExportData", s
                                    .OverExportData);
                                break;
                            case 2:
                                s.ExportData = i.data, console.log("UserData.ExportData", s.ExportData);
                                break;
                            case 3:
                                s.SettleExportData = i.data, console.log("UserData.SettleExportData", s
                                    .SettleExportData);
                                break;
                            case 4:
                                s.FullExportData = i.data, console.log("UserData.FullExportData", s
                                    .FullExportData);
                                break;
                            case 6:
                                s.HotExportData = i.data, console.log("UserData.HotExportData", s
                                    .HotExportData);
                                break;
                            case 7:
                                s.ShakeExportData = i.data, console.log("UserData.ShakeExportData", s
                                    .ShakeExportData);
                                break;
                            case 8:
                                s.SettleFullExportData = i.data, console.log(
                                    "UserData.SettleFullExportData", s.SettleFullExportData);
                                break;
                            case 9:
                                s.NewExportData = i.data, console.log("UserData.NewExportData", s
                                    .NewExportData);
                                break;
                            case 10:
                                s.LoadingExportData = i.data, console.log("UserData.LoadingExportData",
                                    s.LoadingExportData);
                                break;
                            case 11:
                                s.DownExportData = i.data, console.log("UserData.DownExportData", s
                                    .DownExportData)
                        }
                        a && a.run()
                }
            }), o.once(Laya.Event.ERROR, this, i => {
                switch (e) {
                    case "export_game":
                        S.SendMsgToServer("export_game", [t[0]])
                }
            }), o.send(S.ServerUrl + n, null, "post", "json")
        }
        static GetTimestamp() {
            let e = new Date,
                t = e.getFullYear(),
                i = e.getMonth() + 1,
                a = e.getDate(),
                s = e.getHours();
            return new Date(t + "/" + i + "/" + a + " " + s + ":00:00").getTime() / 1e3
        }
        static GetParam(e) {
            var t = {};
            t.uid = s.UId, t.sign = hex_md5(S.apiKey + s.UId + this.GetTimestamp());
            for (let i = 0; i < e.length; i++) t[e[i].key] = e[i].value;
            return t
        }
        static ParamJoint(e, t) {
            let i = "?action=" + t + "&";
            for (var a in e) i += a += "=" + e[a] + "&";
            return i = i.substring(0, i.length - 1)
        }
        static buildQueryString(e) {
            return Object.keys(e).map(t => encodeURIComponent(t) + "=" + encodeURIComponent(e[t])).join("&")
        }
    }
    S.ServerUrl = "",//https://egame.52zthy.cn/trdApi/playballApi.ashx
        S.apiKey = "6BEAOZ8BTB1IRLpb", S.ghid = "gh_65caf5915c0a";
    class I {
        static GetPhoneMsg() {
            // window.wx && (i.PhoneMsg = window.wx.getSystemInfoSync(), console.log(i.PhoneMsg)), i.PhoneMsg && i
            //     .PhoneMsg.model && (i.PhoneMsg.model.startsWith("iPhone X") || i.PhoneMsg.model.startsWith(
            //         "iPhone 1")) && (i.IsIphoneX = !0), Laya.Browser.onIOS && Laya.Browser.onIPad && Laya.Browser
            //             .onIPhone && (i.IsIphone = !0)
        }
        static GetInitMsg() {
            s.LoadingNum++
            // if (window.wx) {
            //     var e = window.wx.getLaunchOptionsSync();
            //     console.log("getLaunchOptionsSync:", e), i.SceneId = e.scene, i.Query = e.query, i.ReferrerInfo = e
            //         .referrerInfo, e && e.query && e.query.channel && (i.channel = e.query.channel), I.LoginInit()
            // }
        }
        static IsBannerSwitch(e) {
            if (1 == e) s.BannerSwitch = 0;
            else {
                d.load_int("IsLastSceneId") ? 1037 == i.SceneId || 1044 == i.SceneId || 1007 == i.SceneId || 1104 ==
                    i.SceneId || 1008 == i.SceneId || 1001 == i.SceneId || 1038 == i.SceneId || 1090 == i.SceneId ||
                    1103 == i.SceneId || 1089 == i.SceneId || 1095 == i.SceneId ? s.BannerSwitch = 1 : s
                        .BannerSwitch = 0 : 1095 == i.SceneId || 1037 == i.SceneId || 1058 == i.SceneId ? (d.save_int(
                            "IsLastSceneId", 1), s.BannerSwitch = 1) : s.BannerSwitch = 0
            }
        }
        static LoginInit() {
            s.LoadingNum++
            // window.wx && window.wx.login({
            //     success: function (e) {
            //         i.LoginCode = e.code, console.log("获取code成功！", e);
            //         let t = new Laya.HttpRequest;
            //         t.http.timeout = 1e4, t.once(Laya.Event.COMPLETE, this, e => {
            //             e && (console.log("获取服务器数据是：", e), s.UId = e.data.uid, s.OpenId = e.data
            //                 .open_id, y.SendMsgToServer("get_user_base_info"), S
            //                     .SendMsgToServer("export_game", [1]), S.SendMsgToServer(
            //                         "export_game", [2]), S.SendMsgToServer("export_game", [3]),
            //                 S.SendMsgToServer("export_game", [4]), S.SendMsgToServer(
            //                     "export_game", [6]), S.SendMsgToServer("export_game", [7]),
            //                 S.SendMsgToServer("export_game", [8]), S.SendMsgToServer(
            //                     "export_game", [9]), S.SendMsgToServer("export_game", [10]),
            //                 S.SendMsgToServer("export_game", [11]), s.LoadingNum++, console
            //                     .log("服务器数据加载成功！当前进度：" + s.LoadingNum))
            //         }), t.once(Laya.Event.ERROR, this, e => {
            //             console.log("请求失败：", e), t.send(
            //                 "https://tking.52zthy.cn/trdApi/fairygameLogin.aspx?code=" + i
            //                     .LoginCode + "&channel=" + i.channel, null, "post", "json")
            //         }), t.send("https://tking.52zthy.cn/trdApi/fairygameLogin.aspx?code=" + i
            //             .LoginCode + "&channel=" + i.channel, null, "post", "json"), console.log(
            //                 "我请求服务器的链接是：", "https://tking.52zthy.cn/trdApi/fairygameLogin.aspx?code=" +
            //                 i.LoginCode + "&channel=" + i.channel)
            //     },
            //     fail: function (e) {
            //         console.log("微信code码获取失败！"), I.LoginInit()
            //     }
            // })
        }
        static CreateAuthorBtn() {

        }
        static GetIvMsg() {

        }
        static ShareApp(e, t) {
            this.ShareAppMsg(), e && (this.onShow(e, t), this.onHide())
        }
        static ShareAppMsg() {

        }
        static onShow(e, t) {

        }
        static onHide() {

        }
        static SkipMiniGame(e, t, i, a) {

        }
        static OpenShareMenu() {

        }
        static CreateGameClubBtn() {

        }
        static OpenTips(e) {
            platform.getInstance().prompt0(e);
        }
    }
    I.ShareMsgData = [""], I.ShareNum = 0, I.ShowTime = 0, I.HideTime = 0;
    class g extends e.Scene.GamePanelUI {
        constructor() {
            super(), this.PropData = [], this.endAngle = -90, this.IsShowLead = !1, this.LastSkinId = 0, this
                .IsShowProp = !1, this.CurrSusBannerIndex = 100, this.CurrSusBannerIndex1 = 200
        }
        onAwake() {
            n.PlayBGM("bgm2", 2), g._Instance = this, a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this
                .HomeBtn
            ]), a.TopUIMatch(this.TopBox, 0), a.TopUIMatch(this.RoleBox, 350), a.TopUIMatch(this.SwitchBox,
                350), this.HomeBtn.on(Laya.Event.CLICK, this, this.Home), Laya.timer.frameLoop(1, this, this
                    .Update), this.ListBg.visible = !1, this.PropList.visible = !1, this.GameRefresh(), this
                        .Pie = new Laya.Sprite, this.Pie.pos(75, 75), this.NeiQuan.mask = this.Pie, D._Instance
                            .NameLabelCtrl(!0),
                this.Bg.on(Laya.Event.MOUSE_DOWN, D._Instance, D._Instance.onMouseCtrl),
                this.Bg.on(Laya.Event.MOUSE_MOVE, D._Instance, D._Instance.onMouseCtrl),
                this.Bg.on(Laya.Event.MOUSE_UP, D._Instance, D._Instance.onMouseCtrl),
                this.Bg.on(Laya.Event.MOUSE_OUT, D._Instance, D._Instance.onMouseCtrl),
                Laya.stage.on(Laya.Event.KEY_DOWN, D._Instance, D._Instance.onKeyDown),
                Laya.stage.on(Laya.Event.KEY_UP, D._Instance, D._Instance.onKeyUp),
                s.ExportSwitch && s.ShakeExportData.length > 0 ? (this.AlterApp(), Laya.timer.loop(2e3, this, this.SusTween1))
                    : (this.SusBannerBtn.visible = !1, this.SusBannerBtn1.visible = !1)
        }
        onOpened(e) {
            e && (1 == e[0] ? D._Instance.CountDownGame() : 2 == e[0] && (this.LeadReportTP.scale(1, 1), this
                .LeadReportLabel.color = "#FF2AA7", this.LeadReportLabel.text = "Goal: Find out all RED buttons!", this
                    .LeadReportTP.visible = !0, this.CountDownRefresh()))
            if (s.MaxLevel == 1 && Laya.Browser.onPC) {
                platform.getInstance().prompt0("Use WSAD or arrow keys to move", 3000)
            }
        }
        onEnable() { }
        GameRefresh() {
            if (this.RoleBox && this.RoleBox.height) {
                this.RoleBox.height = 78 * D._Instance.MaxRoleLiveNum + 35;
                for (let e = 0; e < this.RoleBox.numChildren; e++) 0 != e && e <= D._Instance.MaxRoleLiveNum &&
                    (this.RoleBox.getChildAt(e).visible = !0, e <= D._Instance.RoleLiveNum ?
                        this.RoleBox.getChildAt(e).skin = "res/Game/rolelive.png"
                        : this.RoleBox.getChildAt(e).skin = "res/Game/roledie.png")
            }
            if (this.SwitchBox && this.SwitchBox.height) {
                this.SwitchBox.height = 78 * D._Instance.MaxSwitchNum + 35;
                for (let e = 0; e < this.SwitchBox.numChildren; e++) 0 != e && e <= D._Instance.MaxSwitchNum &&
                    (this.SwitchBox.getChildAt(e + (5 - D._Instance.MaxSwitchNum)).visible = !0, e <= D
                        ._Instance.SwitchNum ? this.SwitchBox.getChildAt(e + (5 - D._Instance.MaxSwitchNum))
                            .skin = "res/Game/switchon.png" : this.SwitchBox.getChildAt(e + (5 - D._Instance
                                .MaxSwitchNum)).skin = "res/Game/switchoff.png")
            }
        }
        CountDownRefresh() {
            this.CountDownTP.visible = !0, this.TimeTP.visible = !1, this.TimeLabel.visible = !1, this
                .StartTimeCountDown(), Laya.timer.loop(100, this, this.StartTimeCountDown)
        }
        StartTimeCountDown() {
            this.CountLabel.text = D._Instance.StartGameTime.toString(), D._Instance.IsStartGame && (this
                .endAngle += 12, this.Pie.graphics.drawPie(0, 0, 180, -90, this.endAngle, "#ffffff")), D
                    ._Instance.StartGameTime <= 0 && (this.TimeLabel.text = l.Addo(Math.floor(D._Instance
                        .CountTime / 60)) + ":" + l.Addo(D._Instance.CountTime % 60), Laya.timer.loop(1e3, this,
                            this.CountDown), this.CountDownTP.visible = !1, this.TimeTP.visible = !0, this.TimeLabel
                                .visible = !0, Laya.timer.clear(this, this.StartTimeCountDown))
        }
        Home() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    D._Instance.ReGame(!1), Laya.View.open("Scene/StartPanel.scene", !0, [1, 1])
                })
        }
        PropSet() {
            let e = D._Instance.IsKiller,
                t = [];
            for (let i = 0; i < s.PropData.length; i++) e ? 1 != s.PropData[i].proptype && 3 != s.PropData[i]
                .proptype || t.push(s.PropData[i]) : 2 != s.PropData[i].proptype && 3 != s.PropData[i]
                    .proptype || t.push(s.PropData[i]);
            this.PropData = t, this.PropList.itemRender = u, this.PropList.array = this.PropData, this.PropList
                .renderHandler = Laya.Handler.create(this, this.freshList1, null, !1), this.ListBg.visible = !0,
                this.PropList.visible = !0
        }
        freshList1(e, t) {
            e.setShow(this.PropData[t])
        }
        Update() {
            if (D._Instance.IsCountDown && !this.IsShowProp && (this.IsShowProp = !0, this.PropSet()), this
                .GoldLabel.text = (10 * D._Instance.OpenSwitchNum + 20 * D._Instance.RescueNum + 20 * D
                    ._Instance.KillNum).toString(), this.DiamondLabel.text = s.GetDiamond.toString(), D
                        ._Instance.GameLeadData.length > 0 && !this.IsShowLead && (this.IsShowLead = !0, this
                            .ShowGameLead()), this.HelpTarget) {
                let e = this.HelpTarget.transform.position.clone(),
                    t = new Laya.Vector3(0, 0, 0);
                D._Instance.Camera.viewport.project(e, D._Instance.Camera.projectionViewMatrix, t), this.HelpTP
                    .pos(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY - 20)
            }
            D._Instance.IsKiller || 3 != D._Instance.PlayerCtrl.RoleSkinId && 4 != D._Instance.PlayerCtrl
                .RoleSkinId && 5 != D._Instance.PlayerCtrl.RoleSkinId && 6 != D._Instance.PlayerCtrl
                    .RoleSkinId && 7 != D._Instance.PlayerCtrl.RoleSkinId && 8 != D._Instance.PlayerCtrl
                        .RoleSkinId ? D._Instance.IsKiller ? (D._Instance.IsKiller && D._Instance.PlayerCtrl
                            .MoveSpeedTime > 0 ? (this.SkillTP.skin || (this.SkillTP.skin = "res/Skill/killer4.png"),
                                this.SkillDD.visible = !0, this.SkillTP.visible = !0, this.SkillLabel.visible = !0, this
                                    .SkillLabel.text = l.Addo(Math.floor(D._Instance.PlayerCtrl.MoveSpeedTime / 60)) + ":" +
                                l.Addo(D._Instance.PlayerCtrl.MoveSpeedTime % 60), this.SkillTipsLabel.text =
                                "Magic slow...", this.SkillTipsLabel.visible = !0) : (this.SkillDD.visible = !1, this.SkillTP
                                    .visible = !1, this.SkillLabel.visible = !1, this.SkillTP.skin = void 0, this
                                        .SkillTipsLabel.visible = !1), 7 == D._Instance.PlayerCtrl.KillerSkinId && (this
                                            .KillerSkillTP.skin = "res/Skill/killer" + D._Instance.PlayerCtrl.KillerSkinId + ".png",
                                            this.KillerSkillDD.visible = !0, this.KillerSkillTP.visible = !0, 0 == D._Instance
                                                .PlayerCtrl.IsKillerSkillSpeedState ? (this.KillerSkillDD.gray = !1, this.KillerSkillTP
                                                    .gray = !1, this.KillerSkillLabel.visible = !1, this.KillerSkillTipsLabel
                                                        .visible = !1) : 1 == D._Instance.PlayerCtrl.IsKillerSkillSpeedState ? (this
                                                            .KillerSkillDD.gray = !0, this.KillerSkillTP.gray = !0, this.KillerSkillLabel
                                                                .visible = !0, this.KillerSkillLabel.text = l.Addo(Math.floor(D._Instance.PlayerCtrl
                                                                    .IsKillerSkillUserTime / 60)) + ":" + l.Addo(D._Instance.PlayerCtrl
                                                                        .IsKillerSkillUserTime % 60), this.KillerSkillLabel.color = "#ff0028", this
                                                                            .KillerSkillTipsLabel.visible = !0, this.KillerSkillTipsLabel.text = "Accelerating...") : (
                                                this.KillerSkillDD.gray = !0, this.KillerSkillTP.gray = !0, this.KillerSkillLabel
                                                    .visible = !0, this.KillerSkillLabel.text = l.Addo(Math.floor(D._Instance.PlayerCtrl
                                                        .IsKillerSkillTime / 60)) + ":" + l.Addo(D._Instance.PlayerCtrl
                                                            .IsKillerSkillTime % 60), this.KillerSkillLabel.color = "#ff0028", this
                                                                .KillerSkillTipsLabel.visible = !0, this.KillerSkillTipsLabel.text = "Cooling..."))) : (
                this.SkillDD.visible = !1, this.SkillTP.visible = !1, this.SkillLabel.visible = !1, this
                    .SkillTP.skin = void 0, this.SkillTipsLabel.visible = !1, this.KillerSkillDD.visible = !1,
                this.KillerSkillTP.visible = !1, this.KillerSkillLabel.visible = !1, this.KillerSkillTP
                    .skin = void 0, this.KillerSkillTipsLabel.visible = !1) : (this.KillerSkillDD.visible = !1,
                        this.KillerSkillTP.visible = !1, this.KillerSkillLabel.visible = !1, this.KillerSkillTP
                            .skin = void 0, this.KillerSkillTipsLabel.visible = !1, this.SkillTP.skin && D._Instance
                                .PlayerCtrl.RoleSkinId == this.LastSkinId || (this.LastSkinId = D._Instance.PlayerCtrl
                                    .RoleSkinId, this.SkillTP.skin = "res/Skill/role" + D._Instance.PlayerCtrl.RoleSkinId +
                                    ".png"), this.SkillDD.visible = !0, this.SkillTP.visible = !0, 3 == D._Instance
                                        .PlayerCtrl.RoleSkinId || 4 == D._Instance.PlayerCtrl.RoleSkinId || 7 == D._Instance
                                            .PlayerCtrl.RoleSkinId ? D._Instance.PlayerCtrl.IsAtkTime > 0 ? (this.SkillLabel.visible = !
                                                0, this.SkillDD.gray = !0, this.SkillTP.gray = !0, this.SkillLabel.text = l.Addo(Math
                                                    .floor(D._Instance.PlayerCtrl.IsAtkTime / 60)) + ":" + l.Addo(D._Instance.PlayerCtrl
                                                        .IsAtkTime % 60), this.SkillTipsLabel.text = "Cooling...", this.SkillTipsLabel
                                                            .visible = !0) : (this.SkillDD.gray = !1, this.SkillTP.gray = !1, this.SkillLabel
                                                                .visible = !1, this.SkillTipsLabel.visible = !1) : 5 == D._Instance.PlayerCtrl
                                                                    .RoleSkinId ? (this.SkillLabel.visible = !1, this.SkillTipsLabel.visible = !1, this.SkillTP
                                                                        .gray = !D._Instance.PlayerCtrl.IsShield) : 6 == D._Instance.PlayerCtrl.RoleSkinId ?
                            0 == D._Instance.PlayerCtrl.IsSkillSpeedState ? (this.SkillDD.gray = !1, this.SkillTP
                                .gray = !1, this.SkillLabel.visible = !1, this.SkillTipsLabel.visible = !1) : 1 == D
                                    ._Instance.PlayerCtrl.IsSkillSpeedState ? (this.SkillDD.gray = !0, this.SkillTP.gray = !0,
                                        this.SkillLabel.visible = !0, this.SkillLabel.text = l.Addo(Math.floor(D._Instance
                                            .PlayerCtrl.IsSkillUserTime / 60)) + ":" + l.Addo(D._Instance.PlayerCtrl
                                                .IsSkillUserTime % 60), this.SkillTipsLabel.visible = !0, this.SkillTipsLabel.text =
                                        "Accelerating...") : (this.SkillDD.gray = !0, this.SkillTP.gray = !0, this.SkillLabel.visible = !
                                            0, this.SkillLabel.text = l.Addo(Math.floor(D._Instance.PlayerCtrl.IsSkillTime / 60)) +
                                            ":" + l.Addo(D._Instance.PlayerCtrl.IsSkillTime % 60), this.SkillTipsLabel.visible = !0,
                                            this.SkillTipsLabel.text = "Cooling...") : 8 == D._Instance.PlayerCtrl.RoleSkinId && (0 == D
                                                ._Instance.PlayerCtrl.Role8SkillState ? (this.SkillDD.gray = !1, this.SkillTP.gray = !1,
                                                    this.SkillLabel.visible = !1, this.SkillTipsLabel.visible = !1) : 1 == D._Instance
                                                        .PlayerCtrl.Role8SkillState ? (this.SkillDD.gray = !0, this.SkillTP.gray = !0, this
                                                            .SkillLabel.visible = !0, this.SkillLabel.text = l.Addo(Math.floor(D._Instance
                                                                .PlayerCtrl.Role8SkillUserTime / 60)) + ":" + l.Addo(D._Instance.PlayerCtrl
                                                                    .Role8SkillUserTime % 60), this.SkillTipsLabel.visible = !0, this.SkillTipsLabel
                                                                        .text = "In stealth...") : (this.SkillDD.gray = !0, this.SkillTP.gray = !0, this.SkillLabel
                                                                            .visible = !0, this.SkillLabel.text = l.Addo(Math.floor(D._Instance.PlayerCtrl
                                                                                .Role8SkillLQTime / 60)) + ":" + l.Addo(D._Instance.PlayerCtrl
                                                                                    .Role8SkillLQTime % 60), this.SkillTipsLabel.visible = !0, this.SkillTipsLabel
                                                                                        .text = "Cooling...")))
        }
        ShowGameLead() {
            this.GameLeadReportTP.scale(0, 0), this.GameLeadReportTP.visible = !0, this.GameNameLabel.text = D
                ._Instance.GameLeadData[0].name + " " + D._Instance.GameLeadData[0].type, this.GameKillLabel.text = ""// D._Instance.GameLeadData[0].type,
            Laya.Tween.to(this.GameLeadReportTP, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.GameLeadReportTP, {
                    scaleX: 0,
                    scaleY: 0
                }, 500, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                    D._Instance.GameLeadData.splice(0, 1), this.IsShowLead = !1, this
                        .GameLeadReportTP.scale(0, 0), this.GameLeadReportTP.visible = !
                        1
                }), 1e3)
            }))
        }
        ShowLead() {
            this.LeadReportTP.scale(0, 0), this.LeadReportTP.visible = !0, this.LeadReportLabel.color = "#FF2525",
                this.LeadReportLabel.text = "Catcher has been exposed!", Laya.Tween.to(this.LeadReportTP, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.LeadReportTP, {
                        scaleX: 0,
                        scaleY: 0
                    }, 500, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                        this.LeadReportLabel.color = D._Instance.IsKiller ? "#FF2525" :
                            "#0AFF00", this.LeadReportLabel.text = D._Instance.IsKiller ?
                                "You are the catcher!" : "You are a escapee!", Laya.Tween.to(this.LeadReportTP, {
                                    scaleX: 1,
                                    scaleY: 1
                                }, 500, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                                    Laya.Tween.to(this.LeadReportTP, {
                                        scaleX: 0,
                                        scaleY: 0
                                    }, 500, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                                        this.LeadReportLabel.color = "#FF2AA7", this.LeadReportLabel.text = D._Instance.IsKiller ?
                                            "Goal: Stop the escapee from escaping!" : "Goal: Find out all RED buttons!",
                                            Laya.Tween.to(this
                                                .LeadReportTP, {
                                                scaleX: 1,
                                                scaleY: 1
                                            }, 500)
                                    }), 500)
                                }))
                    }), 1500)
                }), 2e3)
        }
        ShowHelp(e) {
            this.HelpTarget = e, this.HelpTP.scale(0, 0), this.HelpTP.visible = !0, Laya.Tween.to(this.HelpTP, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.HelpTP, {
                    scaleX: 0,
                    scaleY: 0
                }, 500, Laya.Ease.backIn, Laya.Handler.create(this, () => {
                    this.HelpTP.scale(0, 0), this.HelpTP.visible = !1, this.HelpTarget =
                        null
                }), 2e3)
            }))
        }
        ShowHelpBar(e, t, i, a) {
            if (this.HelpBarTP && this.HelpBar && this.HelpBar.width) {
                this.HelpBarTP.visible = a, this.HelpBar.width = (i - t) / i * 300;
                let s = e.transform.position.clone(),
                    n = new Laya.Vector3(0, 0, 0);
                D._Instance.Camera.viewport.project(s, D._Instance.Camera.projectionViewMatrix, n), this
                    .HelpBarTP.pos(n.x / Laya.stage.clientScaleX, n.y / Laya.stage.clientScaleY - 0)
            }
        }
        CountDown() {
            this.TimeLabel.text = l.Addo(Math.floor(D._Instance.CountTime / 60)) + ":" + l.Addo(D._Instance
                .CountTime % 60), D._Instance.IsStartGame && D._Instance.IsCountDown && (D._Instance
                    .CountTime--, D._Instance.CountTime < 0 && (D._Instance.CountTime = 0, D._Instance
                        .IsStartGame = !1, D._Instance.IsCountDown = !1, D._Instance.IsKiller ?
                            (console.log("游戏结束，胜利！"), n.PlaySound("victory"), D._Instance.IsWin = !0, Math.random() >
                                .5 ? D._Instance.PlayerCtrl.PlayMyAni("win2") : D._Instance.PlayerCtrl.PlayMyAni(
                                    "win3"), Laya.timer.once(2300, this, () => {
                                        1 == s.TotalSwitch && 1 == s.BannerSwitch && 100 * Math.random() < s
                                            .EggObbs ? Laya.View.open("Scene/LateChestPanel.scene", !0, [3]) : s
                                                .MaxLevel % s.IsOpenChest == 0 ? Laya.View.open(
                                                    "Scene/ChestPanel.scene") : Laya.View.open(
                                                        "Scene/SettlePanel.scene")
                                    })) : (console.log("平民失败！"), D._Instance.PlayerCtrl.PlayMyAni("die"), n.PlaySound(
                                        "fail"), Laya.timer.once(2300, this, () => {
                                            D._Instance.IsRevive ? s.MaxLevel % s.IsOpenChest == 0 ? Laya.View.open(
                                                "Scene/ChestPanel.scene") : Laya.View.open(
                                                    "Scene/SettlePanel.scene") : (D._Instance.IsRevive = !0, Laya.View.open("Scene/OverPanel.scene"))
                                        }))))
        }
        AlterApp() {
            let e = l.GetDataRandom({
                arry: s.ShakeExportData,
                range: 1
            })[0],
                t = l.GetDataRandom({
                    arry: s.ShakeExportData,
                    range: 1
                })[0];
            e.location_index == this.CurrSusBannerIndex || e.location_index == this.CurrSusBannerIndex1 || t
                .location_index == this.CurrSusBannerIndex || t.location_index == this.CurrSusBannerIndex1 || e
                    .location_index == t.location_index ? this.AlterApp() : (this.CurrSusBannerIndex = e
                        .location_index, this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this
                            .exporticon.skin = e.pathName, this.exportlabel.text = e.name, this.SusBannerBtn.on(Laya
                                .Event.MOUSE_DOWN, this, this.SkipApp, [e]), this.CurrSusBannerIndex1 = t
                                    .location_index, this.exportbg1.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this
                                        .exporticon1.skin = t.pathName, this.exportlabel1.text = t.name, this.SusBannerBtn1.on(Laya
                                            .Event.MOUSE_DOWN, this, this.SkipApp, [t]))
        }
        SkipApp(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
        SusTween1() {
            Laya.Tween.to(this.SusBannerBtn, {
                rotation: 10
            }, 50, null, Laya.Handler.create(this, this.SusTween2)), this.SusTween5()
        }
        SusTween2() {
            Laya.Tween.to(this.SusBannerBtn, {
                rotation: -10
            }, 100, null, Laya.Handler.create(this, this.SusTween3))
        }
        SusTween3() {
            Laya.Tween.to(this.SusBannerBtn, {
                rotation: 10
            }, 100, null, Laya.Handler.create(this, this.SusTween4))
        }
        SusTween4() {
            Laya.Tween.to(this.SusBannerBtn, {
                rotation: 0
            }, 50, null, Laya.Handler.create(this, this.AlterApp))
        }
        SusTween5() {
            Laya.Tween.to(this.SusBannerBtn1, {
                rotation: 10
            }, 50, null, Laya.Handler.create(this, this.SusTween6))
        }
        SusTween6() {
            Laya.Tween.to(this.SusBannerBtn1, {
                rotation: -10
            }, 100, null, Laya.Handler.create(this, this.SusTween7))
        }
        SusTween7() {
            Laya.Tween.to(this.SusBannerBtn1, {
                rotation: 10
            }, 100, null, Laya.Handler.create(this, this.SusTween8))
        }
        SusTween8() {
            Laya.Tween.to(this.SusBannerBtn1, {
                rotation: 0
            }, 50, null)
        }
        onDisable() {
            Laya.timer.clearAll(this), D._Instance.NameLabelCtrl(!1), this.Bg.off(Laya.Event.MOUSE_DOWN, D._Instance, D._Instance.onMouseCtrl),
                this.Bg.off(Laya.Event.MOUSE_MOVE, D._Instance, D._Instance.onMouseCtrl),
                this.Bg.off(Laya.Event.MOUSE_UP, D._Instance, D._Instance.onMouseCtrl),
                this.Bg.off(Laya.Event.MOUSE_OUT, D._Instance, D._Instance.onMouseCtrl),
                Laya.stage.off(Laya.Event.KEY_DOWN, D._Instance, D._Instance.onKeyDown),
                Laya.stage.off(Laya.Event.KEY_UP, D._Instance, D._Instance.onKeyUp)
        }
    }
    class u extends e.Scene.PropItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.bg.gray = !(e.propnum > 0), this.proptp.gray = !(e.propnum > 0), this.propnumlabel
                .gray = !(e.propnum > 0), this.proptp.skin = "res/Prop/prop" + e.propid + ".png", this
                    .propnumlabel.text = "x" + e.propnum, this.on(Laya.Event.MOUSE_DOWN, this, this.UserProp, [
                        e]))
        }
        UserProp(e) {
            if (n.PlaySound("click"), e.propnum > 0) {
                D._Instance.UserProp(e.propid);
                let t = D._Instance.Player,
                    i = D._Instance.PlayerCtrl;
                switch (e.propid) {
                    case 1:
                        t && i && D._Instance.CreateJiaZi(t.transform.position, i.IsKiller);
                        break;
                    case 2:
                        t && i && i.Cloaking(300);
                        break;
                    case 3:
                        t && i && i.ShowAllEnemy();
                        break;
                    case 4:
                        t && i && i.AddSpeed(!0)
                }
                g._Instance.PropSet()
            } else I.OpenTips("Not enough items!")
        }
    }
    class k extends Laya.Script {
        constructor() {
            super(), this.owner = this.owner, this.IsKiller = !1, this.MyId = 0, this.IsRun = !1
        }
        onAwake() {
            "JiaZi" == this.owner.name && (this.Animator = this.owner.getComponent(Laya.Animator), this.Animator
                .play("idle"))
        }
        AlterSwitch(e = !0) {
            if (!this.IsRun) {
                this.IsRun = !0, n.PlaySound("mechanism"), this.owner.meshRenderer.material.albedoTexture = s
                    .PropMatData[0], e && (n.PlayVibrateShort(), D._Instance.OpenSwitchNum++, D._Instance
                        .CreateEffect("Gold", this.owner));
                let t = D._Instance.SwitchData;
                for (let e = 0; e < t.length; e++)
                    if (t[e].id == this.MyId) {
                        t[e].isrun = !0;
                        break
                    } if (D._Instance.SwitchNum++, g && g._Instance && g._Instance.GameRefresh(), D._Instance
                        .SwitchNum >= D._Instance.MaxSwitchNum) {
                    console.log("门开了"), D._Instance.IsOpenDoor = !0, D._Instance.IsStartGame = !1, D._Instance
                        .CameraCtrl.IsLerp = !1, D._Instance.PlayerCtrl.IsKiller ? 2 != D._Instance.PlayerCtrl
                            .KillerSkinId && 7 != D._Instance.PlayerCtrl.KillerSkinId ? D._Instance.PlayerCtrl
                                .PlayMyAni("ssidle", 1, .3) : D._Instance.PlayerCtrl.PlayMyAni("ssidle1", 1, .3) : D
                                    ._Instance.PlayerCtrl.IsDie || D._Instance.PlayerCtrl.PlayMyAni("roleidle", 1, .3), D
                                        ._Instance.PlayerCtrl.IsMove = !1;
                    let e = D._Instance.EnemyBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let i = e.getChildAt(t).getComponent(w);
                        i.IsDie || (i.IsKiller ? 2 != i.KillerSkinId && 7 != i.KillerSkinId ? i.PlayMyAni(
                            "ssidle", 1, .3) : i.PlayMyAni("ssidle1", 1, .3) : i.PlayMyAni("roleidle",
                                1, .3))
                    }
                    let t = D._Instance.ExitData,
                        i = l.GetDataRandom({
                            arry: t,
                            range: 1
                        })[0];
                    r.MoveTo(D._Instance.Camera, new Laya.Vector3(i.transform.position.x, i.transform.position
                        .y + 10, i.transform.position.z - 6), 1e3, Laya.Ease.sineOut, Laya.Handler
                            .create(this, () => {
                                r.ClearTween(D._Instance.Camera), n.PlaySound("open"), D._Instance
                                    .CreateDoorEffect();
                                for (let e = 0; e < t.length; e++) {
                                    let i = t[e];
                                    i.getComponent(Laya.PhysicsCollider).isTrigger = !0, r.MoveTo(i,
                                        new Laya.Vector3(i.transform.position.x, -2, i.transform
                                            .position.z), 1e3, Laya.Ease.sineOut, Laya.Handler.create(
                                                this, () => {
                                                    r.ClearTween(i)
                                                }))
                                }
                                r.MoveTo(D._Instance.Camera, new Laya.Vector3(D._Instance.Player.transform
                                    .position.x, D._Instance.Player.transform.position.y + 9, D
                                        ._Instance.Player.transform.position.z - 5.5), 1e3, Laya.Ease
                                    .sineOut, Laya.Handler.create(this, () => {
                                        r.ClearTween(D._Instance.Camera), D._Instance
                                            .IsStartGame = !0, D._Instance.CameraCtrl.IsLerp = !0
                                    }), 1e3)
                            }))
                }
            }
        }
        GetDiamond() {
            s.GetDiamond += 10, D._Instance.EffectBox.addChild(c._Instance.effect_shiqu).addComponent(h)
                .TargetPos = new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y +
                    1, this.owner.transform.position.z), D._Instance.CreateEffect("Diamond", this.owner), this
                        .owner.removeSelf()
        }
        Clamp() {
            this.IsRun || (this.IsRun = !0, this.Animator.play("jiazi"))
        }
    }
    class L extends Laya.Script {
        static Init() {
            Laya.loader.create(["GameScene/Prop/Conventional/Prop.lh"], Laya.Handler.create(this, this.LoadRes))
        }
        static LoadRes() {
            this.PropData = Laya.loader.getRes("GameScene/Prop/Conventional/Prop.lh"), s.LoadingNum++, console
                .log("道具资源加载成功:", this.PropData)
        }
        static SelectProp(e) {
            return Laya.Sprite3D.instantiate(this.PropData.getChildByName(e))
        }
    }
    class w extends Laya.Script3D {
        constructor() {
            super(), this.owner = this.owner, this.KillerSkinId = 1, this.RoleSkinId = 1, this.MyId = 1, this
                .MyName = "", this.IsKiller = !1, this.IsMove = !0, this.IsWin = !1, this.IsDie = !1, this
                    .IsAtk = !1, this.IsAtkTime = 0, this.IsHaveIndex = 0, this.IsChase = !1, this.IsDiz = !1, this
                        .IsDizTime = 0, this.IsClamp = !1, this.IsClampTime = 0, this.IsHelp = !1, this.IsInitHelpTime =
                0, this.IsHelpTime = 0, this.IsShield = !1, this.IsALi = !1, this.IsLamp = !1, this.LampIndex =
                0, this.IsWater = !1, this.IsWaterTime = 0, this.IsSpeed = !1, this.IsSpeedTime = 0, this
                    .IsFleeTime = 0, this.IsHide = !1, this.IsHideTime = 0, this.IsCloak = !1, this.IsCloakTime = 0,
                this.IsShowAll = !1, this.IsShowAllTime = 0, this.IsSkillSpeedState = 0, this.IsSkillUserTime =
                0, this.IsSkillTime = 0, this.AtkIndex = 0, this.MaxAtkIndex = 30, this.DetRangeValue = 3, this
                    .AtkRangeValue = 1.4, this.LampRangeValue = 5, this.MoveSpeedDowerLv = 0, this.InitMoveSpeed =
                5e-4 * this.MoveSpeedDowerLv + .05, this.MoveSpeed = this.InitMoveSpeed, this.MoveSpeedTime = 0,
                this.IsNoTreat = !1, this.Role8SkillState = 0, this.Role8SkillUserTime = 0, this
                    .Role8SkillLQTime = 0, this.IsKillerSkillSpeedState = 0, this.IsKillerSkillUserTime = 0, this
                        .IsKillerSkillTime = 0, this.IsPlayAtkSound = !1, this.Aniname = "", this.ToRot = null, this
                            .DetIndex = 0, this.MaxDetIndex = 60, this.IsDet = !0, this.NoDetIndex = 0, this.MaxNoDetIndex =
                0, this.CutIndex = 0, this.MaxCutIndex = 100, this.ShowIndex = 0, this.MaxShowIndex = 30, this
                    .InitPos = new Laya.Vector3(0, 0, 0), this.FleeIndex = 0, this.FleeTargetPos = new Laya.Vector3(
                        0, 0, 0)
        }
        onAwake() {
            this.MoveSpeedCtrl(), this.Rig3D = this.owner.getComponent(Laya.Rigidbody3D), this.Rig3D
                .angularFactor = new Laya.Vector3(0, 0, 0), this.Rig3D.friction = 10, this.Rig3D
                    .collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2, this.Rig3D
                        .canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1 | Laya.Physics3DUtils
                            .COLLISIONFILTERGROUP_CUSTOMFILTER2 | Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3 |
                Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, this.MyAni = this.owner.getComponent(
                    Laya.Animator), this.PlayMyAni("roleidle"), this.Role = this.owner.getChildByName(
                        "zhuyaojiaose"), this.AtkRange = this.owner.getChildByName("AtkRange"), this.DetRange = this
                            .owner.getChildByName("DetRange"), this.Halo = this.owner.getChildByName("Halo"), this
                                .TargetPos = new Laya.Vector3(18 * Math.random() - 9, 0, 18 * Math.random() - 9)
        }
        MoveSpeedCtrl() {
            this.InitMoveSpeed = 5e-4 * this.MoveSpeedDowerLv + .05, this.MoveSpeed = this.InitMoveSpeed
        }
        PlayMyAni(e, t = 1, i = 0) {
            e != this.Aniname && (this.Aniname = e, this.MyAni.crossFade(e, i), this.MyAni.speed = t)
        }
        PropertyCtrl() {
            if (this.IsKiller) switch (this.KillerSkinId) {
                case 1:
                case 2:
                case 4:
                case 5:
                case 7:
                    this.MaxAtkIndex = 30, this.AtkRangeValue = 1.4;
                    break;
                case 3:
                    this.MaxAtkIndex = 30, this.AtkRangeValue = 1.68;
                    break;
                case 6:
                    this.MaxAtkIndex = 60, this.AtkRangeValue = 2
            } else switch (this.RoleSkinId) {
                case 1:
                case 2:
                case 3:
                case 6:
                case 7:
                case 8:
                    this.AtkRangeValue = 1.4;
                    break;
                case 5:
                    this.IsShield = !0, this.AtkRangeValue = 1.4;
                    break;
                case 4:
                    this.AtkRangeValue = 5
            }
        }
        AtkRangeCtrl(e, t) {
            this.IsKiller = e, this.PropertyCtrl(), this.AtkRange.active = e, this.DetRange.active = e, this
                .AtkRange.meshRenderer.material.albedoColor = new Laya.Vector4(250 / 255, 90 / 255, 90 / 255,
                    1), this.DetRange.meshRenderer.material.albedoColor = new Laya.Vector4(250 / 255, 90 / 255, 90 /
                        255, 1);
            let i = 1 / 1.4 * this.AtkRangeValue;
            this.AtkRange.transform.scale = new Laya.Vector3(i, i, i), this.Halo.active = !1, t && this
                .RestSkin()
        }
        RestSkin() {
            if (this.IsKiller) {
                for (let e = 0; e < this.owner.numChildren; e++) {
                    let t = this.owner.getChildAt(e);
                    if ("AtkRange" == t.name || "DetRange" == t.name || "Halo" == t.name) break;
                    t.active = !1, "KillerMask" == t.name.substring(0, 10) && parseInt(t.name[10]) == this
                        .KillerSkinId && (t.meshRenderer.material.albedoTexture = s.KillerMaskMatData[this
                            .KillerSkinId - 1], t.active = !0), "KillerWeap" == t.name.substring(0, 10) &&
                            parseInt(t.name[10]) == this.KillerSkinId && (t.active = !0)
                }
                switch (this.KillerSkinId) {
                    case 1:
                    case 2:
                    case 3:
                    case 5:
                    case 6:
                    case 7:
                        this.owner.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s
                            .KillerMatData[this.KillerSkinId - 1], this.owner.getChildByName("zhuyaojiaose")
                                .active = !0, this.Role = this.owner.getChildByName("zhuyaojiaose");
                        break;
                    case 4:
                        this.owner.getChildByName("nvhuang").skinnedMeshRenderer.material.albedoTexture = s
                            .KillerMatData[this.KillerSkinId - 1], this.owner.getChildByName("nvhuang")
                                .active = !0, this.Role = this.owner.getChildByName("nvhuang")
                }
            } else {
                this.Mask && (this.Mask = null), this.Weap && (this.Weap = null);
                for (let e = 0; e < this.owner.numChildren; e++) {
                    let t = this.owner.getChildAt(e);
                    if ("AtkRange" == t.name || "DetRange" == t.name || "Halo" == t.name) break;
                    t.active = !1, "RoleMask" == t.name.substring(0, 8) && parseInt(t.name[8]) == this
                        .RoleSkinId && (t.meshRenderer.material.albedoTexture = s.RoleMaskMatData[this
                            .RoleSkinId - 1], t.active = !0, this.Mask = t), "RoleWeap" == t.name.substring(0,
                                8) && parseInt(t.name[8]) == this.RoleSkinId && (t.active = !0, this.Weap = t)
                }
                switch (this.RoleSkinId) {
                    case 1:
                    case 2:
                    case 3:
                    case 5:
                    case 7:
                        this.owner.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s
                            .RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("zhuyaojiaose")
                                .active = !0, this.Role = this.owner.getChildByName("zhuyaojiaose");
                        break;
                    case 4:
                        this.owner.getChildByName("baixuegongzhu").skinnedMeshRenderer.material.albedoTexture =
                            s.RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("baixuegongzhu")
                                .active = !0, this.Role = this.owner.getChildByName("baixuegongzhu");
                        break;
                    case 6:
                        this.owner.getChildByName("yvtu").skinnedMeshRenderer.material.albedoTexture = s
                            .RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("yvtu").active = !0,
                            this.Role = this.owner.getChildByName("yvtu");
                        break;
                    case 8:
                        this.owner.getChildByName("xiaohongmao").skinnedMeshRenderer.material.albedoTexture = s
                            .RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("xiaohongmao")
                                .active = !0, this.Role = this.owner.getChildByName("xiaohongmao")
                }
            }
        }
        onTriggerEnter(e) {
            let t, i = e.owner;
            if (this.IsKiller || "Switch" != i.name || (t = i.getComponent(k)).AlterSwitch(!1), "men" == i.name
                .substring(0, 3) && !this.IsDie && !this.IsKiller) {
                this.IsWin = !0;
                let e = 0,
                    t = new Laya.Vector3(0, 0, 0);
                switch (i.name) {
                    case "men1":
                        e = this.owner.transform.rotationEuler.y < 0 ? -180 : 180, t = new Laya.Vector3(this
                            .owner.transform.position.x, this.owner.transform.position.y, this.owner
                                .transform.position.z - 3);
                        break;
                    case "men2":
                        e = -90, t = new Laya.Vector3(this.owner.transform.position.x - 3, this.owner.transform
                            .position.y, this.owner.transform.position.z);
                        break;
                    case "men3":
                        e = 0, t = new Laya.Vector3(this.owner.transform.position.x, this.owner.transform
                            .position.y, this.owner.transform.position.z + 3);
                        break;
                    case "men4":
                        e = 90, t = new Laya.Vector3(this.owner.transform.position.x + 3, this.owner.transform
                            .position.y, this.owner.transform.position.z);
                        break;
                    case "men6":
                        e = -120, t = new Laya.Vector3(this.owner.transform.position.x - 2.6, this.owner
                            .transform.position.y, this.owner.transform.position.z - 1.5);
                        break;
                    case "men7":
                        e = -60, t = new Laya.Vector3(this.owner.transform.position.x - 2.6, this.owner
                            .transform.position.y, this.owner.transform.position.z + 1.5);
                        break;
                    case "men10":
                        e = 120, t = new Laya.Vector3(this.owner.transform.position.x + 2.6, this.owner
                            .transform.position.y, this.owner.transform.position.z - 1.5);
                        break;
                    case "men12":
                        e = -45, t = new Laya.Vector3(this.owner.transform.position.x - 2.12, this.owner
                            .transform.position.y, this.owner.transform.position.z + 2.12);
                        break;
                    case "men13":
                        e = 135, t = new Laya.Vector3(this.owner.transform.position.x + 2.12, this.owner
                            .transform.position.y, this.owner.transform.position.z - 2.12)
                }
                this.PlayMyAni("rolerun", 1.5), r.RotateTo(this.owner, new Laya.Vector3(0, e, 0), 200), r
                    .MoveTo(this.owner, t, 1e3, null, Laya.Handler.create(this, () => {
                        Math.random() > .5 ? this.PlayMyAni("win1") : this.PlayMyAni("win2"), 1 == this
                            .KillerTargetCtrl.MyId && D._Instance.IsStartGame && (D._Instance
                                .IsStartGame = !1, D._Instance.CameraCtrl.IsLerp = !1, r.MoveTo(D
                                    ._Instance.Camera, new Laya.Vector3(this.owner.transform.position.x,
                                        this.owner.transform.position.y + 6, this.owner.transform
                                            .position.z - 3.6), 1e3, Laya.Ease.sineOut, Laya.Handler.create(
                                                this, () => {
                                                    r.MoveTo(D._Instance.Camera, new Laya.Vector3(D._Instance
                                                        .Player.transform.position.x, D._Instance.Player
                                                            .transform.position.y + 9, D._Instance.Player
                                                                .transform.position.z - 5.5), 1e3, Laya.Ease
                                                        .sineOut, Laya.Handler.create(this, () => {
                                                            D._Instance.CameraCtrl.IsLerp = !0, n
                                                                .PlaySound("fail"), this
                                                                    .KillerTargetCtrl.PlayMyAni("die"), Laya
                                                                        .timer.once(1300, this, () => {
                                                                            Laya.View.open(
                                                                                "Scene/SettlePanel.scene"
                                                                            )
                                                                        })
                                                        }), 1e3)
                                                })))
                    }));
                let a = {};
                a.name = this.MyName, a.type = a.name == "You" ? "get away" : "gets away", D._Instance.GameLeadData.push(a)
            }
            if ("Lamp" == i.name) {
                if (this.IsInCamera() && n.PlaySound("Light"), this.LampIndex = 900, this.IsLamp) {
                    let e = D._Instance.EffectBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let i = e.getChildAt(t),
                            a = i.getComponent(h);
                        if (a && i.name == c.Name_Effect_Lamp && a.MyId == this.MyId) {
                            a.ReMoveMaxIndex = 900;
                            break
                        }
                    }
                } else this.IsLamp = !0, D._Instance.CreateEffect("Lamp", this.owner, 900, this.MyId);
                if (this.IsInCamera()) {
                    D._Instance.EffectBox.addChild(c._Instance.effect_shiqu).addComponent(h).TargetPos =
                        new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y + 1,
                            this.owner.transform.position.z)
                }
                i.removeSelf(), this.IsHide && (this.IsHide = !1, this.IsHideTime = 0)
            }
            if ("Box" == i.name && !this.IsKiller && (this.IsInCamera() && n.PlaySound("hide"), i.getComponent(
                Laya.PhysicsCollider).enabled = !1, !(t = i.getComponent(k)).IsRun)) {
                if (this.IsHide = !0, this.IsHideTime = 600, this.IsInCamera()) {
                    D._Instance.EffectBox.addChild(c._Instance.effect_shiqu).addComponent(h).TargetPos =
                        new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y + 1,
                            this.owner.transform.position.z)
                }
                if (i.removeSelf(), this.IsLamp) {
                    this.IsLamp = !1, this.LampIndex = 0;
                    let e = D._Instance.EffectBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let i = e.getChildAt(t),
                            a = i.getComponent(h);
                        if (a && i.name == c.Name_Effect_Lamp && a.MyId == this.MyId) {
                            c._Instance.recover(i.name, i);
                            break
                        }
                    }
                }
            }
            if ("qiaoqiaoban1" == i.name) {
                let e = i.parent;
                Math.round(e.transform.rotationEuler.z) <= -20 && (r.ClearTween(e), r.RotateTo(e, new Laya
                    .Vector3(0, 0, 20), 300, null))
            }
            if ("qiaoqiaoban2" == i.name) {
                let e = i.parent;
                Math.round(e.transform.rotationEuler.z) >= 20 && (r.ClearTween(e), r.RotateTo(e, new Laya
                    .Vector3(0, 0, -20), 300, null))
            }
            if ("Water" == i.name && !this.IsKiller && !this.IsHide) {
                this.IsWater = !0, this.IsWaterTime = 900;
                let e = !0,
                    t = D._Instance.EffectBox;
                for (let i = 0; i < t.numChildren; i++) {
                    let a = t.getChildAt(i),
                        s = a.getComponent(h);
                    if (s && a.name == c.Name_Effect_JiaoYin && s.MyId == this.MyId) {
                        e = !1;
                        break
                    }
                }
                e && D._Instance.CreateEffect("JiaoYin", this.owner, 900, this.MyId)
            }
            if ("Speed" == i.name) {
                if (this.IsInCamera() && n.PlaySound("speed"), this.IsSpeedTime = 300, this.MoveSpeed *= 1.5,
                    this.IsSpeed) {
                    let e = D._Instance.EffectBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let i = e.getChildAt(t),
                            a = i.getComponent(h);
                        if (a && i.name == c.Name_Effect_JiaSu && a.MyId == this.MyId) {
                            a.ReMoveMaxIndex = 300;
                            break
                        }
                    }
                } else this.IsSpeed = !0, D._Instance.CreateEffect("JiaSu", this.owner, 300, this.MyId);
                if (this.IsInCamera()) {
                    D._Instance.EffectBox.addChild(c._Instance.effect_shiqu).addComponent(h).TargetPos =
                        new Laya.Vector3(this.owner.transform.position.x, this.owner.transform.position.y + 1,
                            this.owner.transform.position.z)
                }
                i.removeSelf()
            }
            if ("JiaZi" == i.name) {
                let e = i.getComponent(k);
                e.IsKiller == this.IsKiller || e.IsRun || this.IsClamp || (this.IsClamp = !0, this.IsClampTime =
                    360, this.IsKiller ? 2 == this.KillerSkinId || 7 == this.KillerSkinId ? this.PlayMyAni(
                        "ssidle1", 1) : this.PlayMyAni("ssidle", 1) : this.PlayMyAni("roleidle", 1), D
                            ._Instance.CreateEffect("XuanYun", this.owner, this.IsClampTime), this.MeetJiaZi = i, e
                                .Clamp())
            }
            if (!this.IsDie && !this.IsClamp && !this.IsKiller && "Enemy" == i.name) {
                let e = i.getComponent(w);
                !e.IsKiller && e.IsDie && e.IsHelpTime > 0 && !e.HelpTargetCtrl && !e.IsNoTreat && (this
                    .IsMove = !1, e.HelpTargetCtrl || (e.HelpTargetCtrl = this), this.PlayMyAni("jiuren", 1,
                        .3), e.IsHelp = !0, D._Instance.CreateEffect("Help", this.owner, e.IsInitHelpTime,
                            this.MyId))
            }
        }
        onTriggerStay(e) {
            let t = e.owner;
            if (!this.IsKiller && "Enemy" == t.name) {
                let e = t.getComponent(w);
                if (this.IsDie || this.IsClamp) {
                    if (e.IsHelp && e.HelpTargetCtrl && e.HelpTargetCtrl.MyId == this.MyId && !e.IsNoTreat) {
                        e.IsHelp = !1, e.IsHelpTime = e.IsInitHelpTime, e.HelpTargetCtrl = null;
                        let t = D._Instance.EffectBox;
                        for (let e = 0; e < t.numChildren; e++) {
                            let i = t.getChildAt(e),
                                a = i.getComponent(h);
                            if (a && a.MyId == this.MyId) {
                                c._Instance.recover(i.name, i);
                                break
                            }
                        }
                    }
                } else !e.IsKiller && e.IsDie && e.IsHelpTime > 0 && e.HelpTargetCtrl && e.HelpTargetCtrl
                    .MyId == this.MyId && !e.IsNoTreat && (this.IsMove = !1, e.HelpTargetCtrl || (e
                        .HelpTargetCtrl = this), this.PlayMyAni("jiuren", 1, .3), e.IsHelp = !0)
            }
        }
        onTriggerExit(e) {
            let t = e.owner;
            if (!this.IsDie && !this.IsClamp && !this.IsKiller && "Enemy" == t.name) {
                let e = t.getComponent(w);
                if (!e.IsKiller && e.IsDie && e.IsHelpTime > 0 && e.HelpTargetCtrl && e.HelpTargetCtrl.MyId ==
                    this.MyId && !e.IsNoTreat) {
                    e.HelpTargetCtrl = null, e.IsHelp = !1, e.IsHelpTime = e.IsInitHelpTime;
                    let t = D._Instance.EffectBox;
                    for (let e = 0; e < t.numChildren; e++) {
                        let i = t.getChildAt(e),
                            a = i.getComponent(h);
                        if (a && a.MyId == this.MyId) {
                            c._Instance.recover(i.name, i);
                            break
                        }
                    }
                }
            }
        }
        onCollisionEnter(e) {
            if ("barrier" == e.other.owner.name)
                if (this.IsKiller) !this.IsChase && this.IsDet && (this.IsMove = !1, this.DetIndex = 0, this
                    .MaxDetIndex = 60, this.NoDetIndex = 0, this.MaxNoDetIndex = this.MaxDetIndex + 30);
                else if ((this.KillerTargetCtrl && this.KillerTargetCtrl.AtkTargetCtrl && this.KillerTargetCtrl
                    .AtkTargetCtrl.MyId != this.MyId || !this.KillerTargetCtrl || !this.KillerTargetCtrl
                        .AtkTargetCtrl) && this.IsDet) {
                    this.IsMove = !1, this.DetIndex = 0, this.MaxDetIndex = 60, this.NoDetIndex = 0, this
                        .MaxNoDetIndex = this.MaxDetIndex + 30;
                    let e = this.owner.transform.rotationEuler.y + (180 * Math.random() + 90);
                    if (this.ToRot = e, e > 180 && (this.ToRot = e - 360), e < -180 && (this.ToRot = e + 360), Math
                        .random() > .5)
                        if (Math.random() > .5 && D._Instance.IsOpenDoor) this.GoDoor(!1, this.ToRot);
                        else {
                            let e = Math.random();
                            e >= 0 && e < .9 ? this.GoSwitch(!1, this.ToRot) : this.GoHelp(!1, this.ToRot)
                        }
                }
        }
        onUpdate() {
            if (this.MyNameLabel) {
                this.IsKiller ? this.MyNameLabel.color = "#ff0014" : this.MyNameLabel.color = "#0aff00";
                let e = this.owner.transform.position.clone(),
                    t = new Laya.Vector3(0, 0, 0);
                D._Instance.Camera.viewport.project(e, D._Instance.Camera.projectionViewMatrix, t), this
                    .MyNameLabel.pos(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY - 170)
            }
            if (D._Instance.PlayerCtrl && D._Instance.PlayerCtrl.IsKiller && !this.IsWin && !this.IsLamp ? this
                .IsDie || this.IsShowAll || ("jiuren" == this.Aniname || this.IsClamp) && !this.IsHide ? (this
                    .Role.skinnedMeshRenderer.enable = !0, this.Mask && (this.Mask.active = !0), this.Weap && (
                        5 != this.RoleSkinId || 5 == this.RoleSkinId && this.IsShield ? this.Weap.active = !0 :
                            this.Weap.active = !1), D._Instance.CameraCtrl.IsLerp ? D._Instance.IsStartGame && (this
                                .MyNameLabel.visible = !0) : this.MyNameLabel.visible = !1) : (this.ShowIndex++, this
                                    .ShowIndex >= this.MaxShowIndex || this.IsHide ? (this.Role.skinnedMeshRenderer.enable = !1,
                                        this.Mask && (this.Mask.active = !1), this.Weap && (this.Weap.active = !1), this
                                            .MyNameLabel.visible = !1) : (this.Role.skinnedMeshRenderer.enable = !0, this.Mask && (
                                                this.Mask.active = !0), this.Weap && (5 != this.RoleSkinId || 5 == this
                                                    .RoleSkinId && this.IsShield ? this.Weap.active = !0 : this.Weap.active = !1), D
                                                        ._Instance.CameraCtrl.IsLerp ? D._Instance.IsStartGame && (this.MyNameLabel.visible = !
                                                            0) : this.MyNameLabel.visible = !1)) : (this.Role.skinnedMeshRenderer.enable = !0,
                                                                this.IsKiller || (this.Mask && (this.Mask.active = !0), this.Weap && (5 != this
                                                                    .RoleSkinId || 5 == this.RoleSkinId && this.IsShield ? this.Weap.active = !0 : this
                                                                        .Weap.active = !1)), D._Instance.CameraCtrl.IsLerp ? D._Instance.IsStartGame && (this
                                                                            .MyNameLabel.visible = !0) : this.MyNameLabel.visible = !1), D._Instance.IsStartGame &&
                                                                            this.IsHelp && (this.IsHelpTime--, this.HelpTargetCtrl && 1 == this.HelpTargetCtrl.MyId && g
                                                                                ._Instance.ShowHelpBar(this.owner, this.IsHelpTime, this.IsInitHelpTime, !0), this
                                                                                    .IsHelpTime <= 0)) {
                this.IsHelpTime = 0, this.IsHelp = !1, D._Instance.RoleLiveNum++, g && g._Instance && g
                    ._Instance.GameRefresh(), this.HelpTargetCtrl && ("jiuren" == this.HelpTargetCtrl.Aniname &&
                        this.HelpTargetCtrl.PlayMyAni("roleidle"), 1 == this.HelpTargetCtrl.MyId && (g._Instance
                            .ShowHelpBar(this.owner, this.IsHelpTime, this.IsInitHelpTime, !1), n
                                .PlayVibrateLong(), D._Instance.RescueNum++, D._Instance.CreateEffect("Gold", this
                                    .owner))), this.Help();
                let e = {};
                e.name = this.MyName, e.type = e.name == "You" ? "were rescued" : "was rescued", D._Instance.GameLeadData.push(e)
            }
            if (D._Instance.IsStartGame && (this.IsClamp && this.IsClampTime > 0 && (this.IsClampTime--, this
                .IsClampTime <= 0 && (this.IsClampTime = 0, this.IsClamp = !1, this.AtkIndex = 0, this
                    .IsAtk = !1, this.MeetJiaZi && (this.MeetJiaZi.removeSelf(), this.MeetJiaZi = null))
            ), this.IsShowAll && this.IsShowAllTime > 0 && (this.IsShowAllTime--, this
                .IsShowAllTime <= 0 && (this.IsShowAllTime = 0, this.IsShowAll = !1))), D._Instance
                    .IsStartGame && !this.IsDie && !this.IsWin) {
                if (this.IsSkillUserTime > 0 ? this.IsSkillUserTime-- : (this.IsSkillUserTime = 0, 1 == this
                    .IsSkillSpeedState && (this.IsSkillTime = 900, this.IsSkillSpeedState = 2, this
                        .MoveSpeed /= 1.3)), this.IsSkillTime > 0 ? this.IsSkillTime-- : (this.IsSkillTime =
                            0, 2 == this.IsSkillSpeedState && (this.IsSkillSpeedState = 0)), this
                                .Role8SkillUserTime > 0 ? this.Role8SkillUserTime-- : (this.Role8SkillUserTime = 0, 1 ==
                                    this.Role8SkillState && (this.Role8SkillState = 2, this.Role8SkillLQTime = 1800)), this
                                        .Role8SkillLQTime > 0 ? this.Role8SkillLQTime-- : (this.Role8SkillLQTime = 0, 2 == this
                                            .Role8SkillState && (this.Role8SkillState = 0)), this.IsKillerSkillUserTime > 0 ? this
                                                .IsKillerSkillUserTime-- : (this.IsKillerSkillUserTime = 0, 1 == this
                                                    .IsKillerSkillSpeedState && (this.IsKillerSkillTime = 1500, this
                                                        .IsKillerSkillSpeedState = 2, this.MoveSpeed /= 1.5)), this.IsKillerSkillTime > 0 ?
                        this.IsKillerSkillTime-- : (this.IsKillerSkillTime = 0, 2 == this.IsKillerSkillSpeedState &&
                            (this.IsKillerSkillSpeedState = 0)), this.FleeIndex > 0 ? this.FleeIndex-- : this
                                .FleeIndex = 0, this.IsFleeTime > 0 ? this.IsFleeTime-- : this.IsFleeTime = 0, this
                                    .IsSpeedTime > 0 ? this.IsSpeedTime-- : (this.IsSpeedTime = 0, this.IsSpeed = !1, this
                                        .MoveSpeedTime <= 0 && this.IsSkillUserTime <= 0 && this.IsKillerSkillUserTime <= 0 && (
                                            this.MoveSpeed = this.InitMoveSpeed)), this.IsHideTime > 0 ? this.IsHideTime-- : (
                                                this.IsHideTime = 0, this.IsHide = !1), this.IsWaterTime > 0 ? this.IsWaterTime-- : (
                                                    this.IsWaterTime = 0, this.IsWater = !1), this.LampIndex > 0) this.LampIndex--, this
                                                        .AtkRange.transform.scale = new Laya.Vector3(3.7, 3.7, 3.7);
                else {
                    this.LampIndex = 0, this.IsLamp = !1;
                    let e = 1 / 1.4 * this.AtkRangeValue;
                    this.AtkRange.transform.scale = new Laya.Vector3(e, e, e)
                }
                if (this.IsHaveIndex > 0 ? this.IsHaveIndex-- : this.IsHaveIndex = 0, this.MoveSpeedTime > 0 ?
                    this.MoveSpeedTime-- : (!this.IsSpeed && this.IsSkillUserTime <= 0 && this
                        .IsKillerSkillUserTime <= 0 && (this.MoveSpeed = this.InitMoveSpeed), this
                            .MoveSpeedTime = 0), this.IsAtkTime > 0 ? this.IsAtkTime-- : this.IsAtkTime = 0, this
                                .NoDetIndex++, this.NoDetIndex >= this.MaxNoDetIndex ? this.IsDet = !0 : this.IsDet = !1,
                    this.DetIndex++, this.DetIndex >= this.MaxDetIndex)
                    if ("jiuren" != this.Aniname && (this.IsMove = !0), this.InitPos = this.owner.transform
                        .position, this.IsKiller) this.TargetPos = new Laya.Vector3(18 * Math.random() - 9, 0,
                            18 * Math.random() - 9);
                    else if (this.ToRot) this.TargetPos = new Laya.Vector3(18 * Math.random() - 9, 0, 18 * Math
                        .random() - 9);
                    else if (Math.random() > .5 && D._Instance.IsOpenDoor) this.GoDoor(!0, new Laya.Vector3(18 *
                        Math.random() - 9, 0, 18 * Math.random() - 9));
                    else {
                        let e = Math.random();
                        e >= 0 && e < .2 ? this.TargetPos = new Laya.Vector3(18 * Math.random() - 9, 0, 18 * Math
                            .random() - 9) : e >= .2 && e < .9 ? this.GoSwitch(!0, new Laya.Vector3(18 * Math
                                .random() - 9, 0, 18 * Math.random() - 9)) : this.GoHelp(!0, new Laya.Vector3(18 *
                                    Math.random() - 9, 0, 18 * Math.random() - 9))
                    }
                if (this.KillerTarget && this.KillerTargetCtrl && !this.IsKiller && Laya.Vector3.distance(this
                    .owner.transform.position, this.KillerTarget.transform.position) <= this
                        .KillerTargetCtrl.DetRangeValue && (this.IsMove || "ssatk" == this.Aniname || "shifa" ==
                            this.Aniname || "kaiqiang" == this.Aniname || (this.IsMove = !0), this.KillerTargetCtrl
                                .IsHaveIndex = 30), this.IsDiz) this.IsDizTime--, this.IsDizTime <= 0 && (this
                                    .IsDizTime = 0, this.AtkIndex = 0, this.IsAtk = !1, this.IsDiz = !1);
                else if (this.IsMove)
                    if (this.IsClamp ? this.IsAtk || (this.IsKiller ? 2 != this.KillerSkinId && 7 != this
                        .KillerSkinId ? this.PlayMyAni("ssidle", 1, .3) : this.PlayMyAni("ssidle1", 1, .3) :
                        "jiuren" != this.Aniname && this.PlayMyAni("roleidle", 1, .3)) : this.IsAtk ? (!this
                            .AtkTargetId && this.AtkTargetCtrl && (this.AtkTargetId = this.AtkTargetCtrl.MyId),
                            this.IsInCamera() && !this.IsPlayAtkSound && (this.IsPlayAtkSound = !0, 4 == this
                                .KillerSkinId ? n.PlaySound("magic") : n.PlaySound("attack")), !this.IsKiller &&
                                (this.IsKiller || 3 != this.RoleSkinId && 7 != this.RoleSkinId) || (6 == this
                                    .KillerSkinId && this.IsKiller ? this.PlayMyAni("kaiqiang", 1) : this.PlayMyAni(
                                        "ssatk", 1.5))) : this.IsKiller ? 2 != this.KillerSkinId && 7 != this
                                            .KillerSkinId ? this.PlayMyAni("ssrun", 1.5) : this.PlayMyAni("ssrun1", 1.5) : this
                                                .IsFleeTime <= 0 ? this.PlayMyAni("rolerun", 1.5) : this.PlayMyAni("roletaopao", 1.5),
                        this.IsKiller)
                        if (this.IsClamp) 2 != this.KillerSkinId && 7 != this.KillerSkinId ? this.PlayMyAni(
                            "ssidle", 1) : this.PlayMyAni("ssidle1", 1);
                        else if (this.AtkTarget && this.AtkTargetCtrl && !this.AtkTargetCtrl.IsHide && !this
                            .AtkTargetCtrl.IsCloak) {
                            let e = this.owner.transform.position.clone(),
                                t = this.AtkTarget.transform.position.clone(),
                                i = this.TwoPointRotation3D(e, t);
                            if (!isNaN(i)) {
                                let e = new Laya.Vector3(0, 0, 0),
                                    t = new Laya.Vector3(0, i, 0);
                                Laya.Vector3.lerp(this.owner.transform.rotationEuler, t, 1, e), this.owner.transform
                                    .rotationEuler = e
                            }
                            this.owner.transform.translate(new Laya.Vector3(0, 0, this.MoveSpeed), !0), Laya.Vector3
                                .distance(this.owner.transform.position, this.AtkTarget.transform.position) > this
                                    .DetRangeValue && !this.IsChase ? (this.CutIndex++, this.CutIndex >= this.MaxCutIndex &&
                                        (this.CutIndex = 0, Math.random() > .5 ? this.KillerLookTarget() : (this.IsAtk || (
                                            this.AtkTarget = null, this.AtkTargetCtrl = null), this.ToRot = this
                                                .owner.transform.rotationEuler.y + (180 * Math.random() + 90)))) : this
                                                    .CutIndex = 0
                        } else if (Math.random() > .5) {
                            this.IsAtk || (this.AtkTarget = null, this.AtkTargetCtrl = null);
                            let e = 0;
                            if (this.ToRot) e = this.ToRot, this.TargetPos = null;
                            else {
                                this.DetIndex = 0;
                                let t = this.InitPos.clone(),
                                    i = this.TargetPos.clone();
                                e = this.TwoPointRotation3D(t, i)
                            }
                            let t = new Laya.Vector3(0, 0, 0),
                                i = new Laya.Vector3(0, e, 0);
                            Laya.Vector3.lerp(this.owner.transform.rotationEuler, i, .3, t), this.owner.transform
                                .rotationEuler = t, this.owner.transform.translate(new Laya.Vector3(0, 0, this
                                    .MoveSpeed), !0), (this.TargetPos && Laya.Vector3.distance(this.owner.transform
                                        .position, this.TargetPos) < 1 || this.DetIndex >= this.MaxDetIndex + 300) && (this
                                            .IsMove = !1, this.ToRot = null, this.DetIndex = 0, this.MaxDetIndex = 60)
                        } else this.KillerLookTarget();
                    else {
                        this.KillerTarget && this.KillerTargetCtrl && Laya.Vector3.distance(this.owner.transform
                            .position, this.KillerTarget.transform.position) <= this.KillerTargetCtrl
                                .AtkRangeValue && (this.ShowIndex = 0, this.KillerTargetCtrl.IsChase = !0), this
                                    .KillerTarget && this.KillerTargetCtrl && this.KillerTargetCtrl.IsLamp && Laya.Vector3
                                        .distance(this.owner.transform.position, this.KillerTarget.transform.position) <= this
                                            .KillerTargetCtrl.LampRangeValue && (this.ShowIndex = 0, this.KillerTargetCtrl
                                                .IsChase = !0);
                        let e = !1;
                        if (this.KillerTarget && this.KillerTargetCtrl && !this.KillerTargetCtrl.IsDiz && !this
                            .KillerTargetCtrl.IsClamp && !this.IsHide && Laya.Vector3.distance(this.owner.transform
                                .position, this.KillerTarget.transform.position) <= this.KillerTargetCtrl
                                .DetRangeValue ? (1 != this.KillerTargetCtrl.MyId && this.KillerTargetCtrl.IsChase ||
                                    1 == this.KillerTargetCtrl.MyId && this.KillerTargetCtrl.IsChase) && (e = !0) :
                            e = !1, e) {
                            if (this.DetIndex = 0, this.KillerTargetCtrl.IsAtk || 1 == this.KillerTargetCtrl.MyId ||
                                this.IsHide || (this.KillerTargetCtrl.AtkTarget = this.owner, this.KillerTargetCtrl
                                    .AtkTargetCtrl = this), this.IsClamp) this.PlayMyAni("roleidle", 1, .3);
                            else {
                                this.KillerTargetCtrl.AtkTargetCtrl && this.KillerTargetCtrl.AtkTargetCtrl.MyId ==
                                    this.MyId && 8 == this.RoleSkinId && 0 == this.Role8SkillState && (this
                                        .IsHide = !0, this.IsHideTime = 900, this.Role8SkillState = 1, this
                                            .Role8SkillUserTime = 900), this.KillerTargetCtrl.AtkTargetCtrl && this
                                                .KillerTargetCtrl.AtkTargetCtrl.MyId == this.MyId && 6 == this.RoleSkinId &&
                                            0 == this.IsSkillSpeedState && (this.IsSkillUserTime = 600, this
                                                .IsSkillSpeedState = 1, this.MoveSpeed *= 1.3, D._Instance.CreateEffect(
                                                    "JiaSu", this.owner, 600, this.MyId + 100));
                                let e = new Laya.Vector3(0, 0, 0);
                                this.FleeIndex <= 0 ? (this.FleeIndex = 100, e = this.KillerTarget.transform
                                    .position.clone(), this.FleeTargetPos = e) : e = this.FleeTargetPos.clone();
                                let t = this.owner.transform.position.clone(),
                                    i = this.TwoPointRotation3D(e, t);
                                if (!isNaN(i)) {
                                    let e = new Laya.Vector3(0, 0, 0),
                                        t = new Laya.Vector3(0, i, 0);
                                    Laya.Vector3.lerp(this.owner.transform.rotationEuler, t, .3, e), this.owner
                                        .transform.rotationEuler = e
                                }
                                if (this.owner.transform.translate(new Laya.Vector3(0, 0, this.MoveSpeed), !0), (
                                    3 == this.RoleSkinId || 4 == this.RoleSkinId || 7 == this.RoleSkinId) && !
                                    this.IsAtk && this.IsAtkTime <= 0 && Laya.Vector3.distance(this.owner.transform
                                        .position, this.KillerTarget.transform.position) <= this.AtkRangeValue) {
                                    this.IsMove = !1, this.IsAtk = !0;
                                    let e = this.owner.transform.position.clone(),
                                        t = this.KillerTarget.transform.position.clone(),
                                        i = this.TwoPointRotation3D(e, t);
                                    if (isNaN(i) || (this.owner.transform.rotationEuler = new Laya.Vector3(0, i,
                                        0)), 3 == this.RoleSkinId) this.IsInCamera() && n.PlaySound("club"), this
                                            .PlayMyAni("ssatk", 2);
                                    else if (4 == this.RoleSkinId) {
                                        this.IsInCamera() && n.PlaySound("magic"), D._Instance.CreateEffect("Bing",
                                            this.owner), this.PlayMyAni("shifa", 1), this.KillerTargetCtrl
                                                .MoveSpeed *= .8, this.KillerTargetCtrl.MoveSpeedTime = 900;
                                        let e = !0,
                                            t = D._Instance.EffectBox;
                                        for (let i = 0; i < t.numChildren; i++) {
                                            let a = t.getChildAt(i),
                                                s = a.getComponent(h);
                                            if (s && a.name == c.Name_Effect_JianSu && s.MyId == this
                                                .KillerTargetCtrl.MyId) {
                                                e = !1;
                                                break
                                            }
                                        }
                                        e && D._Instance.CreateEffect("JianSu", this.KillerTarget, 900, this
                                            .KillerTargetCtrl.MyId)
                                    } else 7 == this.RoleSkinId && (n.PlaySound("club"), this.PlayMyAni("ssatk", 2))
                                }
                            }
                            Laya.Vector3.distance(this.owner.transform.position, this.KillerTarget.transform
                                .position) <= this.KillerTargetCtrl.AtkRangeValue && (this.KillerTargetCtrl
                                    .IsAtk || this.IsHide || (this.KillerTargetCtrl.AtkTarget = this.owner, this
                                        .KillerTargetCtrl.AtkTargetCtrl = this)), Laya.Vector3.distance(this.owner
                                            .transform.position, this.KillerTarget.transform.position) <= this
                                                .KillerTargetCtrl.AtkRangeValue && !this.KillerTargetCtrl.IsDiz && !this
                                                    .KillerTargetCtrl.IsClamp && this.KillerTargetCtrl.AtkTargetCtrl && this
                                                        .KillerTargetCtrl.AtkTargetCtrl.MyId == this.MyId ? (this.KillerTargetCtrl
                                                            .AtkIndex++, this.KillerTargetCtrl.AtkIndex > this.KillerTargetCtrl
                                                                .MaxAtkIndex && !this.IsDie && !this.IsWin && !this.KillerTargetCtrl.IsAtk && (
                                                                this.KillerTargetCtrl.IsAtk = !0)) : this.KillerTargetCtrl && this
                                                                    .KillerTargetCtrl.AtkTargetCtrl && this.KillerTargetCtrl.AtkTargetCtrl.MyId == this
                                                                        .MyId && (this.KillerTargetCtrl.AtkIndex = 0)
                        } else if (this.IsClamp) this.PlayMyAni("roleidle", 1, .3);
                        else {
                            let e = 0;
                            if (this.ToRot) e = this.ToRot, this.TargetPos = null;
                            else if (this.DetIndex = 0, this.TargetPos) {
                                let t = this.InitPos.clone(),
                                    i = this.TargetPos.clone();
                                e = this.TwoPointRotation3D(t, i)
                            }
                            if (!isNaN(e)) {
                                let t = new Laya.Vector3(0, 0, 0),
                                    i = new Laya.Vector3(0, e, 0);
                                Laya.Vector3.lerp(this.owner.transform.rotationEuler, i, .3, t), this.owner
                                    .transform.rotationEuler = t
                            }
                            this.owner.transform.translate(new Laya.Vector3(0, 0, this.MoveSpeed), !0), (this
                                .TargetPos && Laya.Vector3.distance(this.owner.transform.position, this
                                    .TargetPos) < .5 || this.DetIndex >= this.MaxDetIndex + 300) && (this
                                        .IsMove = !1, this.ToRot = null, this.DetIndex = 0, this.MaxDetIndex = 60)
                        }
                    } else this.IsAtk || (this.IsKiller ? 2 != this.KillerSkinId && 7 != this.KillerSkinId ? this
                        .PlayMyAni("ssidle", 1, .3) : this.PlayMyAni("ssidle1", 1, .3) : "jiuren" != this
                            .Aniname && this.PlayMyAni("roleidle", 1, .3));
                this.IsKiller && this.Hitresult1 && this.Hitresult2 && this.Hitresult3 && this.StartPos1 && this
                    .OverPos1 && this.StartPos2 && this.OverPos2 && this.StartPos3 && this.OverPos3 && (D
                        ._Instance.owner.physicsSimulation.raycastFromTo(this.StartPos1.transform.position, this
                            .OverPos1.transform.position, this.Hitresult1), D._Instance.owner.physicsSimulation
                                .raycastFromTo(this.StartPos2.transform.position, this.OverPos2.transform.position, this
                                    .Hitresult2), D._Instance.owner.physicsSimulation.raycastFromTo(this.StartPos3
                                        .transform.position, this.OverPos3.transform.position, this.Hitresult3), this
                                            .IsChase = !1, (this.Hitresult1.succeeded && ("You" == this.Hitresult1.collider.owner
                                                .name || "Enemy" == this.Hitresult1.collider.owner.name) || this.Hitresult2
                                                    .succeeded && ("You" == this.Hitresult2.collider.owner.name || "Enemy" == this
                                                        .Hitresult2.collider.owner.name) || this.Hitresult3.succeeded && ("You" ==
                                                            this.Hitresult3.collider.owner.name || "Enemy" == this.Hitresult3.collider.owner
                                                                .name)) && (this.IsChase = !0, 7 == this.KillerSkinId && 0 == this
                                                                    .IsKillerSkillSpeedState && (this.IsKillerSkillUserTime = 600, this
                                                                        .IsKillerSkillSpeedState = 1, this.MoveSpeed *= 1.5, D._Instance.CreateEffect(
                                                                            "JiaSu", this.owner, 600, this.MyId + 105))), this.Hitresult1.succeeded && (
                                                                                "You" == this.Hitresult1.collider.owner.name && (this.Hitresult1.collider.owner
                                                                                    .getComponent(f).IsFleeTime = 20), "Enemy" == this.Hitresult1.collider.owner
                                                                                        .name && (this.Hitresult1.collider.owner.getComponent(w).IsFleeTime = 20)), this
                                                                                            .Hitresult2.succeeded && ("You" == this.Hitresult2.collider.owner.name && (this
                                                                                                .Hitresult2.collider.owner.getComponent(f).IsFleeTime = 20), "Enemy" == this
                                                                                                    .Hitresult2.collider.owner.name && (this.Hitresult2.collider.owner.getComponent(w)
                                                                                                        .IsFleeTime = 20)), this.Hitresult3.succeeded && ("You" == this.Hitresult3
                                                                                                            .collider.owner.name && (this.Hitresult3.collider.owner.getComponent(f).IsFleeTime =
                                                                                                                20), "Enemy" == this.Hitresult3.collider.owner.name && (this.Hitresult3.collider
                                                                                                                    .owner.getComponent(w).IsFleeTime = 20)))
            }
        }
        GoDoor(e, t) {
            let i = [],
                a = D._Instance.ExitData;
            for (let e = 0; e < a.length; e++) {
                let t = a[e],
                    s = {};
                s.men = t, s.dir = Laya.Vector3.distance(this.owner.transform.position, t.transform.position), i
                    .push(s)
            }
            if (i.length > 0)
                if (i.sort((e, t) => e.dir < t.dir ? -1 : e.dir > t.dir ? 1 : 0), e) this.TargetPos = i[0].men
                    .transform.position;
                else {
                    let e = this.owner.transform.position.clone(),
                        a = i[0].men.transform.position.clone(),
                        s = this.TwoPointRotation3D(e, a);
                    isNaN(s) ? this.ToRot = t : this.ToRot = s
                }
            else e ? this.TargetPos = t : this.ToRot = t
        }
        GoSwitch(e, t) {
            let i = [],
                a = D._Instance.SwitchData;
            for (let e = 0; e < a.length; e++)
                if (!a[e].isrun) {
                    let t = {};
                    t.switch = a[e].switch, t.dir = Laya.Vector3.distance(this.owner.transform.position, a[e]
                        .switch.transform.position), i.push(t)
                } if (i.length > 0)
                if (i.sort((e, t) => e.dir < t.dir ? -1 : e.dir > t.dir ? 1 : 0), e) this.TargetPos = i[0]
                    .switch.transform.position;
                else {
                    let e = this.owner.transform.position.clone(),
                        a = i[0].switch.transform.position.clone(),
                        s = this.TwoPointRotation3D(e, a);
                    isNaN(s) ? this.ToRot = t : this.ToRot = s
                }
            else e ? this.TargetPos = t : this.ToRot = t
        }
        GoHelp(e, t) {
            let i = [],
                a = D._Instance.EnemyBox;
            for (let e = 0; e < a.numChildren; e++) {
                let t = a.getChildAt(e),
                    s = t.getComponent(w);
                if (s.IsDie && !s.IsHelp && !s.IsNoTreat) {
                    let e = {};
                    e.enemy = t, e.dir = Laya.Vector3.distance(this.owner.transform.position, t.transform
                        .position), i.push(e)
                }
            }
            if (i.length > 0)
                if (i.sort((e, t) => e.dir < t.dir ? -1 : e.dir > t.dir ? 1 : 0), e) this.TargetPos = i[0].enemy
                    .transform.position;
                else {
                    let e = this.owner.transform.position.clone(),
                        a = i[0].enemy.transform.position.clone(),
                        s = this.TwoPointRotation3D(e, a);
                    isNaN(s) ? this.ToRot = t : this.ToRot = s
                }
            else e ? this.TargetPos = t : this.ToRot = t
        }
        KillerLookTarget() {
            let e = [],
                t = {};
            D._Instance.PlayerCtrl.IsDie || D._Instance.PlayerCtrl.IsHide || D._Instance.PlayerCtrl.IsCloak || (
                t.obj = D._Instance.Player, t.dir = Laya.Vector3.distance(this.owner.transform.position, D
                    ._Instance.Player.transform.position), e.push(t));
            let i = D._Instance.EnemyBox;
            for (let t = 0; t < i.numChildren; t++) {
                let a = i.getChildAt(t),
                    s = a.getComponent(w);
                if (!(s.IsKiller || s.IsDie || s.IsWin || s.IsHide || s.IsCloak)) {
                    let t = {};
                    t.obj = a, t.dir = Laya.Vector3.distance(this.owner.transform.position, a.transform
                        .position), e.push(t)
                }
            }
            e.sort(() => .5 - Math.random()), e.length > 0 ? this.IsAtk || (this.AtkTarget = e[0].obj,
                "You" == this.AtkTarget.name ? this.AtkTargetCtrl = this.AtkTarget.getComponent(f) : this
                    .AtkTargetCtrl = this.AtkTarget.getComponent(w)) : this.IsAtk || (this.AtkTarget = null,
                        this.AtkTargetCtrl = null)
        }
        RayDetectionCtrl() {
            this.Hitresult1 = new Laya.HitResult, this.Hitresult2 = new Laya.HitResult, this.Hitresult3 =
                new Laya.HitResult, this.StartPos1 = this.owner.addChild(new Laya.Sprite3D("StartPos1")), this
                    .StartPos1.transform.localPosition = new Laya.Vector3(.2, .5, 0), this.OverPos1 = this.owner
                        .addChild(new Laya.Sprite3D("OverPos1")), this.OverPos1.transform.localPosition = new Laya
                            .Vector3(1.65, .5, 4.3), this.StartPos2 = this.owner.addChild(new Laya.Sprite3D("StartPos2")),
                this.StartPos2.transform.localPosition = new Laya.Vector3(0, .5, 0), this.OverPos2 = this.owner
                    .addChild(new Laya.Sprite3D("OverPos2")), this.OverPos2.transform.localPosition = new Laya
                        .Vector3(0, .5, 5.1), this.StartPos3 = this.owner.addChild(new Laya.Sprite3D("StartPos3")), this
                            .StartPos3.transform.localPosition = new Laya.Vector3(-.2, .5, 0), this.OverPos3 = this.owner
                                .addChild(new Laya.Sprite3D("OverPos3")), this.OverPos3.transform.localPosition = new Laya
                                    .Vector3(-.2, .5, 4.3)
        }
        Help() {
            this.Rig3D.isTrigger = !1, this.Rig3D.isKinematic = !1, this.IsDie = !1;
            let e = D._Instance.PropBox;
            for (let t = 0; t < e.numChildren; t++) {
                let i = e.getChildAt(t);
                if ("JinGu" == i.name) {
                    if (i.getComponent(k).MyId == this.MyId + 1e3) {
                        i.removeSelf();
                        break
                    }
                }
            }
        }
        KaiQiangEnter() {
            if (this.AtkTarget && this.AtkTargetCtrl && this.AtkTargetCtrl.MyId == this.AtkTargetId) {
                this.IsMove = !1;
                let e = this.owner.transform.position.clone(),
                    t = this.AtkTarget.transform.position.clone(),
                    i = this.TwoPointRotation3D(e, t);
                isNaN(i) || (this.owner.transform.rotationEuler = new Laya.Vector3(0, i, 0)), this.KillerAtkFun(
                    !0)
            }
        }
        ShiFa() {
            this.IsAtk = !1, this.IsMove = !0, this.IsAtkTime = 1500, this.PlayMyAni("roleidle", 1)
        }
        KillerAtk() {
            if (this.IsKiller) this.AtkTarget && this.AtkTargetCtrl && this.AtkTargetCtrl.MyId == this
                .AtkTargetId && this.KillerAtkFun(!1);
            else if (this.KillerTarget && this.KillerTargetCtrl) {
                let e = this.KillerTargetCtrl.IsDiz;
                this.KillerTargetCtrl.IsDiz = !0;
                let t = 0,
                    i = !1;
                if (3 == this.RoleSkinId ? 2 == this.KillerTargetCtrl.KillerSkinId ? this.KillerTargetCtrl
                    .IsDizTime = 90 : this.KillerTargetCtrl.IsDizTime = 180 : 7 == this.RoleSkinId && (2 == this
                        .KillerTargetCtrl.KillerSkinId ? this.KillerTargetCtrl.IsDizTime = 330 : this
                            .KillerTargetCtrl.IsDizTime = 420), this.KillerTargetCtrl.IsDizTime < t && (this
                                .KillerTargetCtrl.IsDizTime = t, i = !0), 1 == this.KillerTargetCtrl.MyId && (this
                                    .KillerTargetCtrl.IsMove = !1), 2 != this.KillerTargetCtrl.KillerSkinId && 7 != this
                                        .KillerTargetCtrl.KillerSkinId ? this.KillerTargetCtrl.PlayMyAni("ssidle", 1) : this
                                            .KillerTargetCtrl.PlayMyAni("ssidle1", 1), e) {
                    let e = D._Instance.EffectBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let a = e.getChildAt(t),
                            s = a.getComponent(h);
                        if (i && s && a.name == c.Name_Effect_XuanYun && s.MyId == this.MyId) {
                            s.ReMoveIndex = 0, s.ReMoveMaxIndex = this.KillerTargetCtrl.IsDizTime;
                            break
                        }
                    }
                } else D._Instance.CreateEffect("XuanYun", this.KillerTarget, this.KillerTargetCtrl.IsDizTime,
                    this.MyId)
            }
        }
        KillerAtkFun(e) {
            if (this.IsOnceDie()) {
                this.IsInCamera() && (4 == this.AtkTargetCtrl.RoleSkinId || 6 == this.AtkTargetCtrl.RoleSkinId ?
                    n.PlaySound("b_attack_01") : n.PlaySound("b_attack_02")), this.AtkTargetCtrl.IsNoTreat =
                    e, 4 == this.KillerSkinId ? this.AtkTargetCtrl.IsHelpTime = 480 : this.AtkTargetCtrl
                        .IsHelpTime = 180, D._Instance.RoleLiveNum--, g && g._Instance && g._Instance.GameRefresh(),
                    this.AtkTargetCtrl.IsInitHelpTime = this.AtkTargetCtrl.IsHelpTime, this.AtkTargetCtrl
                        .IsDie = !0, this.AtkTargetCtrl.Rig3D.isTrigger = !0, this.AtkTargetCtrl.Rig3D
                            .isKinematic = !0, this.AtkTargetCtrl.HelpTargetCtrl = null, this.AtkTargetCtrl.PlayMyAni(
                                "ssidle"), this.AtkTargetCtrl.DieResult(this.KillerSkinId), this.AtkTargetCtrl
                                    .IsWaterTime = 0, this.AtkTargetCtrl.IsWater = !1;
                let t = D._Instance.EffectBox;
                for (let e = 0; e < t.numChildren; e++) {
                    let i = t.getChildAt(e),
                        a = i.getComponent(h);
                    if (a && i.name == c.Name_Effect_JiaoYin && a.MyId == this.AtkTargetCtrl.MyId) {
                        c._Instance.recover(i.name, i);
                        break
                    }
                }
                1 == this.AtkTargetCtrl.MyId && (console.log("平民失败！"), n.PlayVibrateLong(), D._Instance
                    .IsStartGame = !1, n.PlaySound("fail"), Laya.timer.once(2300, this, () => {
                        D._Instance.IsRevive ? Laya.View.open("Scene/SettlePanel.scene") : (D._Instance
                            .IsRevive = !0, Laya.View.open("Scene/OverPanel.scene"))
                    }));
                let i = {};
                i.name = this.AtkTargetCtrl.MyName, i.type = i.name == "You" ? "were caught" : "was caught", D._Instance.GameLeadData.push(i)
            }
        }
        KillerAtkEnd() {
            this.IsKiller ? (this.IsAtk = !1, this.IsPlayAtkSound = !1, this.AtkIndex = 0, this.AtkTargetId =
                null, this.KillerLookTarget()) : (this.IsAtk = !1, this.IsMove = !0, this.IsAtkTime = 3 ==
                    this.RoleSkinId ? 1200 : 1500, this.PlayMyAni("roleidle", 1))
        }
        IsOnceDie() {
            return this.AtkTargetCtrl.IsALi ? (this.AtkTargetCtrl.IsALi = !1, this.AtkTargetCtrl.MianJu && (this
                .AtkTargetCtrl.MianJu.active = !1), !1) : 5 != this.AtkTargetCtrl.RoleSkinId || !this
                    .AtkTargetCtrl.IsShield || 5 == this.KillerSkinId || (this.AtkTargetCtrl.IsShield = !1, this
                        .AtkTargetCtrl.Weap.active = !1, this.IsInCamera() && (n.PlaySound("broken"), n.PlaySound(
                            "b_attack_02")), !1)
        }
        DieResult(e) {
            let t, i = D._Instance.PropBox;
            if (0 != s.KillerWeapId) t = i.addChild(L.SelectProp("ShuYe"));
            else switch (e) {
                case 1:
                    t = i.addChild(L.SelectProp("LaMian"));
                    break;
                case 2:
                    (t = i.addChild(L.SelectProp("DaiZi"))).getChildAt(0).meshRenderer.material.renderMode =
                        2, t.getChildAt(0).meshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1,
                            150 / 255);
                    break;
                case 3:
                    t = i.addChild(L.SelectProp("LianZi"));
                    break;
                case 4:
                    t = i.addChild(L.SelectProp("BingKuai"));
                    break;
                case 5:
                    t = i.addChild(L.SelectProp("Wang"));
                    break;
                case 6:
                    t = i.addChild(L.SelectProp("PaoPao"));
                    break;
                case 7:
                    (t = i.addChild(L.SelectProp("WPDaiZi"))).getChildAt(0).meshRenderer.material
                        .renderMode = 2, t.getChildAt(0).meshRenderer.material.albedoColor = new Laya
                            .Vector4(1, 1, 1, 150 / 255)
            }
            t.name = "JinGu", t.transform.position = new Laya.Vector3(this.owner.transform.position.x, 0, this
                .owner.transform.position.z), 6 == e && 0 == s.KillerWeapId && (t.transform.rotationEuler =
                    new Laya.Vector3(0, -210, 0)), t.addComponent(k).MyId = this.MyId + 1e3
        }
        CreateMyName() {
            this.MyNameLabel = Laya.stage.addChild(Laya.Pool.getItemByClass("MyNameLabel", Laya.Label)), this
                .MyNameLabel.width = 300, this.MyNameLabel.height = 25, this.MyNameLabel.pivot(150, 13), this
                    .MyNameLabel.pos(1e4, 1e4), this.MyNameLabel.fontSize = 24, this.MyNameLabel.font =
                "Microsoft YaHei", this.MyNameLabel.align = "center", this.MyNameLabel.valign = "middle", this
                    .MyNameLabel.overflow = "hidden", this.MyNameLabel.color = "#0aff00", this.MyNameLabel.name =
                "MyNameLabel", this.MyNameLabel.text = this.MyName, this.MyNameLabel.visible = !0
        }
        IsInCamera() {
            let e = this.owner.transform.position.clone(),
                t = new Laya.Vector3(0, 0, 0);
            D._Instance.Camera.viewport.project(e, D._Instance.Camera.projectionViewMatrix, t);
            let i = new Laya.Vector2(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY);
            return !(i.x <= 0 || i.y <= 0 || i.x >= Laya.stage.width || i.y >= Laya.stage.height)
        }
        TwoPointRotation3D(e, t) {
            t.x -= e.x, t.z -= e.z;
            var i = 0;
            if (0 == t.x && 0 == t.z) return 0;
            if (t.x > 0 && t.z > 0) i = 0;
            else {
                if (t.x > 0 && 0 == t.z) return 90;
                if (t.x > 0 && t.z < 0) i = 180;
                else {
                    if (0 == t.x && t.z < 0) return 180;
                    if (t.x < 0 && t.z < 0) i = -180;
                    else {
                        if (t.x < 0 && 0 == t.z) return -90;
                        t.x < 0 && t.z > 0 && (i = 0)
                    }
                }
            }
            return Math.atan(t.x / t.z) * (360 / (2 * Math.PI)) + i
        }
    }
    class f extends Laya.Script3D {
        constructor() {
            super(), this.owner = this.owner, this.KillerSkinId = 1, this.RoleSkinId = 1, this.MyId = 1, this
                .MyName = "", this.IsKiller = !1, this.IsMove = !1, this.ToRot = 0, this.IsDie = !1, this
                    .IsAtk = !1, this.IsAtkTime = 0, this.IsHaveIndex = 0, this.IsChase = !1, this.IsDiz = !1, this
                        .IsDizTime = 0, this.IsClamp = !1, this.IsClampTime = 0, this.IsHelp = !1, this.IsInitHelpTime =
                0, this.IsHelpTime = 0, this.IsShield = !1, this.IsALi = !1, this.IsLamp = !1, this.LampIndex =
                0, this.IsWater = !1, this.IsWaterTime = 0, this.IsSpeed = !1, this.IsSpeedTime = 0, this
                    .IsFleeTime = 0, this.ShowHelpTime = 0, this.IsHide = !1, this.IsHideTime = 0, this.IsCloak = !
                    1, this.IsCloakTime = 0, this.IsSkillSpeedState = 0, this.IsSkillUserTime = 0, this
                        .IsSkillTime = 0, this.AtkIndex = 0, this.MaxAtkIndex = 30, this.DetRangeValue = 3, this
                            .AtkRangeValue = 1.4, this.LampRangeValue = 5, this.InitMoveSpeed = 0 != s.RoleWeapId ? 1.1 * (
                                5e-4 * s.DowerData[0].dowerlv + .05) : 5e-4 * s.DowerData[0].dowerlv + .05, this.MoveSpeed =
                this.InitMoveSpeed, this.MoveSpeedTime = 0, this.IsNoTreat = !1, this.Role8SkillState = 0, this
                    .Role8SkillUserTime = 0, this.Role8SkillLQTime = 0, this.IsKillerSkillSpeedState = 0, this
                        .IsKillerSkillUserTime = 0, this.IsKillerSkillTime = 0, this.IsPlayAtkSound = !1, this
                            .IsPlaySTSound = !1, this.IsPlayXTSound = !1, this.IsPlayJXTSound = !1, this.IsPlayXSSoundTime =
                0, this.Aniname = "", this.IsShowAll = !1, this.IsShowAllTime = 0
        }
        onAwake() {
            this.InitMoveSpeed = 0 != s.RoleWeapId ? 1.1 * (5e-4 * s.DowerData[0].dowerlv + .05) : 5e-4 * s
                .DowerData[0].dowerlv + .05, this.MoveSpeed = this.InitMoveSpeed, console.log("我的移动速度是：", this
                    .MoveSpeed), this.Rig3D = this.owner.getComponent(Laya.Rigidbody3D), this.Rig3D
                        .angularFactor = new Laya.Vector3(0, 0, 0), this.Rig3D.friction = 10, this.Rig3D
                            .collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1, this.Rig3D
                                .canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2 | Laya.Physics3DUtils
                                    .COLLISIONFILTERGROUP_CUSTOMFILTER3 | Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4 |
                Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, this.MyAni = this.owner.getComponent(
                    Laya.Animator), this.PlayMyAni("roleidle"), this.Role = this.owner.getChildByName(
                        "zhuyaojiaose"), this.AtkRange = this.owner.getChildByName("AtkRange"), this.DetRange = this
                            .owner.getChildByName("DetRange"), this.Halo = this.owner.getChildByName("Halo")
        }
        PlayMyAni(e, t = 1, i = 0) {
            e != this.Aniname && (this.Aniname = e, this.MyAni.crossFade(e, i), this.MyAni.speed = t)
        }
        PropertyCtrl() {
            if (this.IsKiller) switch (this.KillerSkinId) {
                case 1:
                case 2:
                case 4:
                case 5:
                case 7:
                    this.MaxAtkIndex = 30, this.AtkRangeValue = 0 != s.KillerWeapId ? 1.1 * (1.4 + .014 * s
                        .DowerData[1].dowerlv) : 1.4 + .014 * s.DowerData[1].dowerlv;
                    break;
                case 3:
                    this.MaxAtkIndex = 30, this.AtkRangeValue = 0 != s.KillerWeapId ? 1.2 * (1.4 + .014 * s
                        .DowerData[1].dowerlv) * 1.1 : 1.2 * (1.4 + .014 * s.DowerData[1].dowerlv);
                    break;
                case 6:
                    0 != s.KillerWeapId ? (this.MaxAtkIndex = 30, this.AtkRangeValue = 0 != s.KillerWeapId ?
                        1.2 * (1.4 + .014 * s.DowerData[1].dowerlv) * 1.1 : 1.2 * (1.4 + .014 * s
                            .DowerData[1].dowerlv)) : (this.MaxAtkIndex = 60, this.AtkRangeValue = 0 !=
                                s.KillerWeapId ? 1.2 * (2 + .014 * s.DowerData[1].dowerlv) * 1.1 : 1.2 * (2 +
                                    .014 * s.DowerData[1].dowerlv))
            } else {
                switch (this.RoleSkinId) {
                    case 1:
                    case 2:
                    case 3:
                    case 6:
                    case 7:
                    case 8:
                        this.AtkRangeValue = 1.4 + .014 * s.DowerData[1].dowerlv;
                        break;
                    case 5:
                        this.IsShield = !0, this.AtkRangeValue = 1.4 + .014 * s.DowerData[1].dowerlv;
                        break;
                    case 4:
                        this.AtkRangeValue = 5 + .014 * s.DowerData[1].dowerlv
                }
                this.IsALi = 0 != s.RoleMaskId
            }
            console.log("我的攻击距离是：", this.AtkRangeValue)
        }
        AtkRangeCtrl(e, t) {
            this.IsKiller = e, this.PropertyCtrl(), this.AtkRange.active = e, this.DetRange.active = e, this
                .AtkRange.meshRenderer.material.albedoColor = new Laya.Vector4(90 / 255, 250 / 255, 90 / 255,
                    1), this.DetRange.meshRenderer.material.albedoColor = new Laya.Vector4(90 / 255, 250 / 255, 90 /
                        255, 1);
            let i = 1 / 1.4 * this.AtkRangeValue;
            this.AtkRange.transform.scale = new Laya.Vector3(i, i, i), this.Halo.active = !e, t && (this
                .EquipRefresh(), this.RestSkin())
        }
        EquipRefresh() {
            for (let e = 0; e < s.EquipData.length; e++) {
                let t = s.EquipData[e];
                Math.floor(t.equiptime - (parseInt(((new Date).getTime() / 1e3).toString()) - t
                    .equiptimestamp)) <= 0 && 0 != t.equipstate && (D._Instance.AlterEquipState(t.equipid, 0), I
                        .OpenTips(t.equipname + "Time up!"))
            }
        }
        RestSkin() {
            if (this.IsKiller) {
                for (let e = 0; e < this.owner.numChildren; e++) {
                    let t = this.owner.getChildAt(e);
                    if ("AtkRange" == t.name || "DetRange" == t.name || "Halo" == t.name) break;
                    t.active = !1, 0 != s.KillerMaskId ? "KillerMJ2" == t.name && (t.active = !0) :
                        "KillerMask" == t.name.substring(0, 10) && parseInt(t.name[10]) == this.KillerSkinId &&
                        (t.meshRenderer.material.albedoTexture = s.KillerMaskMatData[this.KillerSkinId - 1], t
                            .active = !0), 0 != s.KillerWeapId ? "KillerWQ1" == t.name && (t.active = !0) :
                            "KillerWeap" == t.name.substring(0, 10) && parseInt(t.name[10]) == this.KillerSkinId &&
                            (t.active = !0)
                }
                switch (this.KillerSkinId) {
                    case 1:
                    case 2:
                    case 3:
                    case 5:
                    case 6:
                    case 7:
                        this.owner.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s
                            .KillerMatData[this.KillerSkinId - 1], this.owner.getChildByName("zhuyaojiaose")
                                .active = !0, this.Role = this.owner.getChildByName("zhuyaojiaose");
                        break;
                    case 4:
                        this.owner.getChildByName("nvhuang").skinnedMeshRenderer.material.albedoTexture = s
                            .KillerMatData[this.KillerSkinId - 1], this.owner.getChildByName("nvhuang")
                                .active = !0, this.Role = this.owner.getChildByName("nvhuang")
                }
            } else {
                this.Mask && (this.Mask = null), this.Weap && (this.Weap = null), this.ZhuQingTing && (this
                    .ZhuQingTing = null), this.MianJu && (this.MianJu = null);
                for (let e = 0; e < this.owner.numChildren; e++) {
                    let t = this.owner.getChildAt(e);
                    if ("AtkRange" == t.name || "DetRange" == t.name || "Halo" == t.name) break;
                    if (t.active = !1, 0 != s.RoleMaskId) {
                        let e = "RoleMJ41";
                        switch (this.RoleSkinId) {
                            case 1:
                            case 2:
                            case 3:
                            case 7:
                                e = "RoleMJ42";
                                break;
                            case 4:
                            case 6:
                            case 8:
                                e = "RoleMJ41";
                                break;
                            case 5:
                                e = "RoleMJ43"
                        }
                        t.name == e && (t.active = !0, this.MianJu = t)
                    }
                    0 != s.RoleWeapId && "RoleWQ3" == t.name && (t.active = !0, this.ZhuQingTing = t),
                        "RoleMask" == t.name.substring(0, 8) && parseInt(t.name[8]) == this.RoleSkinId && (t
                            .meshRenderer.material.albedoTexture = s.RoleMaskMatData[this.RoleSkinId - 1], t
                                .active = !0, this.Mask = t), "RoleWeap" == t.name.substring(0, 8) && parseInt(t
                                    .name[8]) == this.RoleSkinId && (t.active = !0, this.Weap = t)
                }
                switch (this.RoleSkinId) {
                    case 1:
                    case 2:
                    case 3:
                    case 5:
                    case 7:
                        this.owner.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s
                            .RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("zhuyaojiaose")
                                .active = !0, this.Role = this.owner.getChildByName("zhuyaojiaose");
                        break;
                    case 4:
                        this.owner.getChildByName("baixuegongzhu").skinnedMeshRenderer.material.albedoTexture =
                            s.RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("baixuegongzhu")
                                .active = !0, this.Role = this.owner.getChildByName("baixuegongzhu");
                        break;
                    case 6:
                        this.owner.getChildByName("yvtu").skinnedMeshRenderer.material.albedoTexture = s
                            .RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("yvtu").active = !0,
                            this.Role = this.owner.getChildByName("yvtu");
                        break;
                    case 8:
                        this.owner.getChildByName("xiaohongmao").skinnedMeshRenderer.material.albedoTexture = s
                            .RoleMatData[this.RoleSkinId - 1], this.owner.getChildByName("xiaohongmao")
                                .active = !0, this.Role = this.owner.getChildByName("xiaohongmao")
                }
            }
        }
        onTriggerEnter(e) {
            let t, i = e.owner;
            if (this.IsKiller || "Switch" != i.name || (t = i.getComponent(k)).AlterSwitch(), "men" == i.name
                .substring(0, 3) && !this.IsDie && !this.IsKiller) {
                console.log("平民胜利！"), D._Instance.IsStartGame = !1, D._Instance.IsWin = !0;
                let e = 0,
                    t = 0,
                    a = new Laya.Vector3(0, 0, 0),
                    l = new Laya.Vector3(0, 0, 0);
                switch (i.name) {
                    case "men1":
                        e = this.owner.transform.rotationEuler.y < 0 ? -180 : 180, t = 0, a = new Laya.Vector3(
                            this.owner.transform.position.x, this.owner.transform.position.y, this.owner
                                .transform.position.z - 3), l = new Laya.Vector3(a.x, 4, a.z + 4);
                        break;
                    case "men2":
                        e = -90, t = 90, a = new Laya.Vector3(this.owner.transform.position.x - 3, this.owner
                            .transform.position.y, this.owner.transform.position.z), l = new Laya.Vector3(a
                                .x + 4, 4, a.z);
                        break;
                    case "men3":
                        e = 0, t = 180, a = new Laya.Vector3(this.owner.transform.position.x, this.owner
                            .transform.position.y, this.owner.transform.position.z + 3), l = new Laya
                                .Vector3(a.x, 4, a.z - 4);
                        break;
                    case "men4":
                        e = 90, t = -90, a = new Laya.Vector3(this.owner.transform.position.x + 3, this.owner
                            .transform.position.y, this.owner.transform.position.z), l = new Laya.Vector3(a
                                .x - 4, 4, a.z);
                        break;
                    case "men6":
                        e = -120, t = 60, a = new Laya.Vector3(this.owner.transform.position.x - 2.6, this.owner
                            .transform.position.y, this.owner.transform.position.z - 1.5), l = new Laya
                                .Vector3(a.x + 3.5, 4, a.z + 2);
                        break;
                    case "men7":
                        e = -60, t = 120, a = new Laya.Vector3(this.owner.transform.position.x - 2.6, this.owner
                            .transform.position.y, this.owner.transform.position.z + 1.5), l = new Laya
                                .Vector3(a.x + 3.5, 4, a.z - 2);
                        break;
                    case "men10":
                        e = 120, t = 300, a = new Laya.Vector3(this.owner.transform.position.x + 2.6, this.owner
                            .transform.position.y, this.owner.transform.position.z - 1.5), l = new Laya
                                .Vector3(a.x - 3.5, 4, a.z + 2);
                        break;
                    case "men12":
                        e = -45, t = 135, a = new Laya.Vector3(this.owner.transform.position.x - 2.12, this
                            .owner.transform.position.y, this.owner.transform.position.z + 2.12), l =
                            new Laya.Vector3(a.x + 2.82, 4, a.z - 2.82);
                        break;
                    case "men13":
                    case "men14":
                        e = 135, t = 315, a = new Laya.Vector3(this.owner.transform.position.x + 2.12, this
                            .owner.transform.position.y, this.owner.transform.position.z - 2.12), l =
                            new Laya.Vector3(a.x - 2.82, 4, a.z + 2.82)
                }
                this.PlayMyAni("rolerun", 1.5), r.RotateTo(this.owner, new Laya.Vector3(0, e, 0), 200), r
                    .MoveTo(this.owner, a, 1e3, null, Laya.Handler.create(this, () => {
                        n.PlayVibrateLong(), n.PlaySound("victory"), Math.random() > .5 ? this
                            .PlayMyAni("win1") : this.PlayMyAni("win2"), Laya.timer.once(2300, this,
                                () => {
                                    1 == s.TotalSwitch && 1 == s.BannerSwitch && 100 * Math.random() < s
                                        .EggObbs ? Laya.View.open("Scene/LateChestPanel.scene", !0, [
                                            3]) : s.MaxLevel % s.IsOpenChest == 0 ? Laya.View.open(
                                                "Scene/ChestPanel.scene") : Laya.View.open(
                                                    "Scene/SettlePanel.scene")
                                })
                    })), D._Instance.CameraCtrl.IsLerp = !1, r.RotateTo(D._Instance.Camera, new Laya.Vector3(-
                        35, t, 0), 1e3), r.MoveTo(D._Instance.Camera, l, 1e3);
                let o = {};
                o.name = this.MyName, o.type = o.name == "You" ? "get away" : "gets away", D._Instance.GameLeadData.push(o)
            }
            if ("Diamond" == i.name && (n.PlayVibrateShort(), n.PlaySound("Diamonds"), (t = i.getComponent(k))
                .GetDiamond()), "Lamp" == i.name) {
                if (n.PlayVibrateShort(), n.PlaySound("Light"), this.LampIndex = 900, this.IsLamp) {
                    let e = D._Instance.EffectBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let i = e.getChildAt(t),
                            a = i.getComponent(h);
                        if (a && i.name == c.Name_Effect_Lamp && a.MyId == this.MyId) {
                            a.ReMoveMaxIndex = 900;
                            break
                        }
                    }
                } else this.IsLamp = !0, D._Instance.CreateEffect("Lamp", this.owner, 900, this.MyId);
                D._Instance.EffectBox.addChild(c._Instance.effect_shiqu).addComponent(h).TargetPos = new Laya
                    .Vector3(this.owner.transform.position.x, this.owner.transform.position.y + 1, this.owner
                        .transform.position.z), i.removeSelf(), this.IsHide && (this.IsHide = !1, this
                            .IsHideTime = 0, this.owner.getChildByName("Box") && this.owner.getChildByName("Box")
                                .removeSelf())
            }
            if ("Box" == i.name && !this.IsKiller && (n.PlaySound("hide"), i.getComponent(Laya.PhysicsCollider)
                .enabled = !1, !(t = i.getComponent(k)).IsRun)) {
                if (t.IsRun = !0, n.PlayVibrateShort(), this.IsHide = !0, this.IsHideTime = 600, D._Instance
                    .EffectBox.addChild(c._Instance.effect_shiqu).addComponent(h).TargetPos = new Laya.Vector3(
                        this.owner.transform.position.x, this.owner.transform.position.y + 1, this.owner
                            .transform.position.z), this.owner.getChildByName("Box")) i.removeSelf();
                else {
                    let e = this.owner.addChild(i);
                    e.transform.localPosition = new Laya.Vector3(0, 0, 0), e.transform.localRotationEuler =
                        new Laya.Vector3(0, 0, 0)
                }
                if (this.IsLamp) {
                    this.IsLamp = !1, this.LampIndex = 0;
                    let e = D._Instance.EffectBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let i = e.getChildAt(t),
                            a = i.getComponent(h);
                        if (a && i.name == c.Name_Effect_Lamp && a.MyId == this.MyId) {
                            c._Instance.recover(i.name, i);
                            break
                        }
                    }
                }
            }
            if ("qiaoqiaoban1" == i.name) {
                let e = i.parent;
                Math.round(e.transform.rotationEuler.z) <= -20 && (r.ClearTween(e), r.RotateTo(e, new Laya
                    .Vector3(0, 0, 20), 300, null))
            }
            if ("qiaoqiaoban2" == i.name) {
                let e = i.parent;
                Math.round(e.transform.rotationEuler.z) >= 20 && (r.ClearTween(e), r.RotateTo(e, new Laya
                    .Vector3(0, 0, -20), 300, null))
            }
            if ("Water" == i.name && !this.IsKiller && !this.IsHide && !this.IsCloak) {
                n.PlaySound("water"), this.IsWater = !0, this.IsWaterTime = 900;
                let e = !0,
                    t = D._Instance.EffectBox;
                for (let i = 0; i < t.numChildren; i++) {
                    let a = t.getChildAt(i),
                        s = a.getComponent(h);
                    if (s && a.name == c.Name_Effect_JiaoYin && s.MyId == this.MyId) {
                        e = !1;
                        break
                    }
                }
                e && D._Instance.CreateEffect("JiaoYin", this.owner, 900, this.MyId)
            }
            if ("Speed" == i.name) {
                D._Instance.EffectBox.addChild(c._Instance.effect_shiqu).addComponent(h).TargetPos = new Laya
                    .Vector3(this.owner.transform.position.x, this.owner.transform.position.y + 1, this.owner
                        .transform.position.z), this.AddSpeed(!1), i.removeSelf()
            }
            if (!this.IsDie && !this.IsKiller && "Enemy" == i.name) {
                let e = i.getComponent(w);
                !e.IsKiller && e.IsDie && e.IsHelpTime > 0 && !e.HelpTargetCtrl && !e.IsNoTreat && (e
                    .HelpTargetCtrl || (e.HelpTargetCtrl = this), this.PlayMyAni("jiuren", 1, .3), e
                        .IsHelp = !0, D._Instance.CreateEffect("Help", this.owner, e.IsInitHelpTime, this.MyId))
            }
        }
        onTriggerStay(e) {
            let t = e.owner;
            if (!this.IsKiller && "Enemy" == t.name) {
                let e = t.getComponent(w);
                if (this.IsDie) {
                    if (e.IsHelp && e.HelpTargetCtrl && e.HelpTargetCtrl.MyId == this.MyId && !e.IsNoTreat) {
                        e.IsHelp = !1, e.IsHelpTime = e.IsInitHelpTime, e.HelpTargetCtrl = null;
                        let t = D._Instance.EffectBox;
                        for (let e = 0; e < t.numChildren; e++) {
                            let i = t.getChildAt(e),
                                a = i.getComponent(h);
                            if (a && a.MyId == this.MyId) {
                                c._Instance.recover(i.name, i);
                                break
                            }
                        }
                    }
                } else !e.IsKiller && e.IsDie && e.IsHelpTime > 0 && e.HelpTargetCtrl && e.HelpTargetCtrl
                    .MyId == this.MyId && !e.IsNoTreat && (e.HelpTargetCtrl || (e.HelpTargetCtrl = this), this
                        .PlayMyAni("jiuren", 1, .3), e.IsHelp = !0)
            }
        }
        onTriggerExit(e) {
            let t = e.owner;
            if (!this.IsDie && !this.IsKiller && "Enemy" == t.name) {
                let e = t.getComponent(w);
                if (!e.IsKiller && e.IsDie && e.IsHelpTime > 0 && e.HelpTargetCtrl && e.HelpTargetCtrl.MyId ==
                    this.MyId && !e.IsNoTreat) {
                    e.HelpTargetCtrl = null, e.IsHelp = !1, e.IsHelpTime = e.IsInitHelpTime;
                    let t = D._Instance.EffectBox;
                    for (let e = 0; e < t.numChildren; e++) {
                        let i = t.getChildAt(e),
                            a = i.getComponent(h);
                        if (a && a.MyId == this.MyId) {
                            c._Instance.recover(i.name, i);
                            break
                        }
                    }
                }
                g._Instance.ShowHelpBar(this.owner, this.IsHelpTime, this.IsInitHelpTime, !1)
            }
        }
        AddSpeed(e) {
            if (n.PlayVibrateShort(), n.PlaySound("speed"), this.IsSpeedTime = 300, e && (this.MoveSpeed = this
                .InitMoveSpeed), this.MoveSpeed *= 1.5, this.IsSpeed) {
                let e = D._Instance.EffectBox;
                for (let t = 0; t < e.numChildren; t++) {
                    let i = e.getChildAt(t),
                        a = i.getComponent(h);
                    if (a && i.name == c.Name_Effect_JiaSu && a.MyId == this.MyId) {
                        a.ReMoveIndex = 0, a.ReMoveMaxIndex = 300;
                        break
                    }
                }
            } else this.IsSpeed = !0, D._Instance.CreateEffect("JiaSu", this.owner, 300, this.MyId)
        }
        Cloaking(e) {
            if (this.IsCloak = !0, this.IsCloakTime = e > this.IsCloakTime ? e : this.IsCloakTime, this.Role) {
                this.Role.skinnedMeshRenderer.material.renderMode = 2;
                let e = this.Role.skinnedMeshRenderer.material.albedoColor;
                this.Role.skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, .6)
            }
            if (this.Mask) {
                this.Mask.meshRenderer.material.renderMode = 2;
                let e = this.Mask.meshRenderer.material.albedoColor;
                this.Mask.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, .6)
            }
            if (this.Weap) {
                this.Weap.meshRenderer.material.renderMode = 2;
                let e = this.Weap.meshRenderer.material.albedoColor;
                this.Weap.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, .6)
            }
            if (this.ZhuQingTing) {
                this.ZhuQingTing.meshRenderer.material.renderMode = 2;
                let e = this.ZhuQingTing.meshRenderer.material.albedoColor;
                this.ZhuQingTing.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, .6)
            }
            if (this.MianJu) {
                this.MianJu.meshRenderer.material.renderMode = 2;
                let e = this.MianJu.meshRenderer.material.albedoColor;
                this.MianJu.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, .6)
            }
        }
        ShowAllEnemy() {
            if (this.IsShowAll) {
                let e = D._Instance.EffectBox;
                for (let t = 0; t < e.numChildren; t++) {
                    let i = e.getChildAt(t),
                        a = i.getComponent(h);
                    if (a && i.name == c.Name_Effect_Lamp && a.MyId == this.MyId + 10) {
                        a.ReMoveMaxIndex = 180;
                        break
                    }
                }
            } else D._Instance.CreateEffect("Lamp", this.owner, 180, this.MyId + 10);
            this.IsShowAll = !0, this.IsShowAllTime = 180;
            let e = D._Instance.EnemyBox;
            for (let t = 0; t < e.numChildren; t++) {
                let i = e.getChildAt(t).getComponent(w);
                i.IsShowAll = !0, i.IsShowAllTime = 180
            }
        }
        onUpdate() {
            if (!this.IsKiller && this.IsHide ? (this.Role.skinnedMeshRenderer.enable = !1, this.Mask && (this
                .Mask.active = !1), this.Weap && (this.Weap.active = !1), this.ZhuQingTing && (this
                    .ZhuQingTing.active = !1), this.MianJu && (this.MianJu.active = !1)) : (this.Role
                        .skinnedMeshRenderer.enable = !0, this.IsKiller || (this.Mask && (this.Mask.active = !0),
                            this.Weap && (5 != this.RoleSkinId || 5 == this.RoleSkinId && this.IsShield ? this.Weap
                                .active = !0 : this.Weap.active = !1), this.ZhuQingTing && (this.ZhuQingTing
                                    .active = !0), this.MianJu && (this.IsALi ? this.MianJu.active = !0 : this.MianJu
                                        .active = !1))), D._Instance.IsStartGame && this.IsShowAll && this.IsShowAllTime >
                                        0 && (this.IsShowAllTime--, this.IsShowAllTime <= 0 && (this.IsShowAllTime = 0, this
                                            .IsShowAll = !1)), D._Instance.IsStartGame && !this.IsDie) {
                if (!this.IsKiller)
                    if (this.ShowHelpTime < 600) this.ShowHelpTime++;
                    else {
                        this.ShowHelpTime = 0;
                        let e = [],
                            t = D._Instance.EnemyBox;
                        for (let i = 0; i < t.numChildren; i++) {
                            let a = t.getChildAt(i),
                                s = a.getComponent(w);
                            if (s.IsDie && !s.IsHelp) {
                                let t = {};
                                t.enemy = a, t.dir = Laya.Vector3.distance(this.owner.transform.position, a
                                    .transform.position), e.push(t)
                            }
                        }
                        e.length > 0 && (e.sort((e, t) => e.dir < t.dir ? -1 : e.dir > t.dir ? 1 : 0), g
                            ._Instance.ShowHelp(e[0].enemy))
                    } if (this.IsSkillUserTime > 0 ? this.IsSkillUserTime-- : (this.IsSkillUserTime = 0, 1 ==
                        this.IsSkillSpeedState && (this.IsSkillTime = 900, this.IsSkillSpeedState = 2, this
                            .MoveSpeed /= 1.3)), this.IsSkillTime > 0 ? this.IsSkillTime-- : (this.IsSkillTime =
                                0, 2 == this.IsSkillSpeedState && (this.IsSkillSpeedState = 0)), this
                                    .Role8SkillUserTime > 0 ? this.Role8SkillUserTime-- : (this.Role8SkillUserTime = 0, 1 ==
                                        this.Role8SkillState && (this.Role8SkillState = 2, this.Role8SkillLQTime = 1800)), this
                                            .Role8SkillLQTime > 0 ? this.Role8SkillLQTime-- : (this.Role8SkillLQTime = 0, 2 == this
                                                .Role8SkillState && (this.Role8SkillState = 0)), this.IsKillerSkillUserTime > 0 ? this
                                                    .IsKillerSkillUserTime-- : (this.IsKillerSkillUserTime = 0, 1 == this
                                                        .IsKillerSkillSpeedState && (this.IsKillerSkillTime = 1500, this
                                                            .IsKillerSkillSpeedState = 2, this.MoveSpeed /= 1.5)), this.IsKillerSkillTime > 0 ?
                            this.IsKillerSkillTime-- : (this.IsKillerSkillTime = 0, 2 == this.IsKillerSkillSpeedState &&
                                (this.IsKillerSkillSpeedState = 0)), this.IsPlayXSSoundTime > 0 ? this
                                    .IsPlayXSSoundTime-- : this.IsPlayXSSoundTime = 0, this.IsFleeTime > 0 ? this.IsFleeTime-- :
                            this.IsFleeTime = 0, this.IsSpeedTime > 0 ? this.IsSpeedTime-- : (this.IsSpeedTime = 0, this
                                .IsSpeed = !1, this.MoveSpeedTime <= 0 && this.IsSkillUserTime <= 0 && this
                                    .IsKillerSkillUserTime <= 0 && (this.MoveSpeed = this.InitMoveSpeed)), this.IsHideTime >
                                        0 ? this.IsHideTime-- : (this.IsHideTime = 0, this.IsHide && (this.IsHide = !1, this.owner
                                            .getChildByName("Box") && this.owner.getChildByName("Box").removeSelf())), this
                                                .IsCloakTime > 0) this.IsCloakTime--;
                else if (this.IsCloakTime = 0, this.IsCloak) {
                    if (this.IsCloak = !1, this.Role) {
                        this.Role.skinnedMeshRenderer.material.renderMode = 0;
                        let e = this.Role.skinnedMeshRenderer.material.albedoColor;
                        this.Role.skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, 1)
                    }
                    if (this.Mask) {
                        this.Mask.meshRenderer.material.renderMode = 0;
                        let e = this.Mask.meshRenderer.material.albedoColor;
                        this.Mask.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, 1)
                    }
                    if (this.Weap) {
                        this.Weap.meshRenderer.material.renderMode = 0;
                        let e = this.Weap.meshRenderer.material.albedoColor;
                        this.Weap.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, 1)
                    }
                    if (this.ZhuQingTing) {
                        this.ZhuQingTing.meshRenderer.material.renderMode = 0;
                        let e = this.ZhuQingTing.meshRenderer.material.albedoColor;
                        this.ZhuQingTing.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, 1)
                    }
                    if (this.MianJu) {
                        this.MianJu.meshRenderer.material.renderMode = 0;
                        let e = this.MianJu.meshRenderer.material.albedoColor;
                        this.MianJu.meshRenderer.material.albedoColor = new Laya.Vector4(e.x, e.y, e.z, 1)
                    }
                }
                if (this.IsWaterTime > 0 ? this.IsWaterTime-- : (this.IsWaterTime = 0, this.IsWater = !1), this
                    .LampIndex > 0) this.LampIndex--, this.AtkRange.transform.scale = new Laya.Vector3(3.7, 3.7,
                        3.7);
                else {
                    this.LampIndex = 0, this.IsLamp = !1;
                    let e = 1 / 1.4 * this.AtkRangeValue;
                    this.AtkRange.transform.scale = new Laya.Vector3(e, e, e)
                }
                if (this.IsHaveIndex > 0 ? this.IsHaveIndex-- : this.IsHaveIndex = 0, this.MoveSpeedTime > 0 ?
                    this.MoveSpeedTime-- : (!this.IsSpeed && this.IsSkillUserTime <= 0 && this
                        .IsKillerSkillUserTime <= 0 && (this.MoveSpeed = this.InitMoveSpeed), this
                            .MoveSpeedTime = 0), this.IsAtkTime > 0 ? (this.IsAtkTime--, this.IsPlaySTSound = !1) :
                        (this.IsKiller || 4 != this.RoleSkinId || this.IsPlaySTSound || (this.IsPlaySTSound = !0),
                            this.IsAtkTime = 0), this.IsDiz ? (this.IsDizTime--, this.IsDizTime <= 0 && (this
                                .IsDizTime = 0, this.AtkIndex = 0, this.IsAtk = !1, this.IsDiz = !1)) : this.IsMove &&
                    this.owner.transform.translate(new Laya.Vector3(0, 0, this.MoveSpeed), !0), this.IsKiller &&
                    this.IsAtk && (this.IsPlayAtkSound || (this.IsPlayAtkSound = !0, 0 != s.KillerWeapId ? n
                        .PlaySound("attack") : 4 == this.KillerSkinId ? n.PlaySound("magic") : 6 == this
                            .KillerSkinId ? n.PlaySound("gun") : n.PlaySound("attack")), 6 == this
                                .KillerSkinId && 0 == s.KillerWeapId ? this.PlayMyAni("kaiqiang", 1) : this.PlayMyAni(
                                    "ssatk", 1.5)), !this.IsKiller && this.KillerTarget && this.KillerTargetCtrl && !
                                    this.IsHide && Laya.Vector3.distance(this.owner.transform.position, this.KillerTarget
                                        .transform.position) <= this.KillerTargetCtrl.DetRangeValue) {
                    if (this.KillerTargetCtrl.IsHaveIndex = 30, this.KillerTargetCtrl.IsAtk || this.IsHide ||
                        this.IsCloak || (this.KillerTargetCtrl.AtkTarget = this.owner, this.KillerTargetCtrl
                            .AtkTargetCtrl = this), this.KillerTargetCtrl.AtkTargetCtrl && this.KillerTargetCtrl
                                .AtkTargetCtrl.MyId == this.MyId && 8 == this.RoleSkinId && 0 == this.Role8SkillState &&
                        (this.Cloaking(900), this.Role8SkillState = 1, this.Role8SkillUserTime = 900), this
                            .KillerTargetCtrl.AtkTargetCtrl && this.KillerTargetCtrl.AtkTargetCtrl.MyId == this
                                .MyId && !this.IsCloak && (this.IsPlayXSSoundTime <= 0 && (this.IsPlayXSSoundTime = 600
                                    // ,n.PlaySound("laugh2")
                                ), 6 == this.RoleSkinId && 0 == this.IsSkillSpeedState && (
                                    this.IsSkillUserTime = 600, this.IsSkillSpeedState = 1, this.MoveSpeed *= 1.3, D
                                        ._Instance.CreateEffect("JiaSu", this.owner, 600, this.MyId + 100))), (3 == this
                                            .RoleSkinId || 4 == this.RoleSkinId || 7 == this.RoleSkinId) && !this.IsAtk && this
                                                .IsAtkTime <= 0 && Laya.Vector3.distance(this.owner.transform.position, this
                                                    .KillerTarget.transform.position) <= this.AtkRangeValue) {
                        this.IsMove = !1, this.IsAtk = !0;
                        let e = this.owner.transform.position.clone(),
                            t = this.KillerTarget.transform.position.clone(),
                            i = this.TwoPointRotation3D(e, t);
                        if (isNaN(i) || (this.owner.transform.rotationEuler = new Laya.Vector3(0, i, 0)), 3 ==
                            this.RoleSkinId) n.PlaySound("club"), this.PlayMyAni("ssatk", 2);
                        else if (4 == this.RoleSkinId) {
                            n.PlaySound("magic"), D._Instance.CreateEffect("Bing", this.owner), this.PlayMyAni(
                                "shifa", 1), this.KillerTargetCtrl.MoveSpeed *= .8, this.KillerTargetCtrl
                                    .MoveSpeedTime = 900;
                            let e = !0,
                                t = D._Instance.EffectBox;
                            for (let i = 0; i < t.numChildren; i++) {
                                let a = t.getChildAt(i),
                                    s = a.getComponent(h);
                                if (s && a.name == c.Name_Effect_JianSu && s.MyId == this.KillerTargetCtrl
                                    .MyId) {
                                    e = !1;
                                    break
                                }
                            }
                            e && D._Instance.CreateEffect("JianSu", this.KillerTarget, 900, this
                                .KillerTargetCtrl.MyId)
                        } else 7 == this.RoleSkinId && (n.PlaySound("club"), this.PlayMyAni("ssatk", 2))
                    }
                    Laya.Vector3.distance(this.owner.transform.position, this.KillerTarget.transform
                        .position) <= this.KillerTargetCtrl.AtkRangeValue && !this.KillerTargetCtrl.IsDiz && !
                        this.KillerTargetCtrl.IsClamp && !this.IsHide && this.KillerTargetCtrl.AtkTargetCtrl &&
                        this.KillerTargetCtrl.AtkTargetCtrl.MyId == this.MyId ? (this.KillerTargetCtrl
                            .AtkIndex++, this.KillerTargetCtrl.AtkIndex > this.KillerTargetCtrl.MaxAtkIndex && !
                            this.IsDie && !this.KillerTargetCtrl.IsAtk && (this.KillerTargetCtrl.IsAtk = !0),
                            this.IsPlayJXTSound || (this.IsPlayJXTSound = !0, this.IsPlayXTSound = !1, n
                                .PlaySound("heartbeat2"))) : (this.IsPlayXTSound || (this.IsPlayXTSound = !0,
                                    this.IsPlayJXTSound = !1, n.PlaySound("heartbeat")), this.KillerTargetCtrl &&
                                    this.KillerTargetCtrl.AtkTargetCtrl && this.KillerTargetCtrl.AtkTargetCtrl.MyId ==
                                    this.MyId && (this.KillerTargetCtrl.AtkIndex = 0))
                }
                if (this.IsKiller && this.Hitresult1 && this.Hitresult2 && this.Hitresult3 && this.StartPos1 &&
                    this.OverPos1 && this.StartPos2 && this.OverPos2 && this.StartPos3 && this.OverPos3 && (D
                        ._Instance.owner.physicsSimulation.raycastFromTo(this.StartPos1.transform.position, this
                            .OverPos1.transform.position, this.Hitresult1), D._Instance.owner.physicsSimulation
                                .raycastFromTo(this.StartPos2.transform.position, this.OverPos2.transform.position, this
                                    .Hitresult2), D._Instance.owner.physicsSimulation.raycastFromTo(this.StartPos3
                                        .transform.position, this.OverPos3.transform.position, this.Hitresult3), this
                                            .IsChase = !1, this.Hitresult1.succeeded && "Enemy" == this.Hitresult1.collider.owner
                                                .name || this.Hitresult2.succeeded && "Enemy" == this.Hitresult2.collider.owner.name ||
                        this.Hitresult3.succeeded && "Enemy" == this.Hitresult3.collider.owner.name)) {
                    if (this.IsChase = !0, 7 == this.KillerSkinId && 0 == this.IsKillerSkillSpeedState && (this
                        .IsKillerSkillUserTime = 600, this.IsKillerSkillSpeedState = 1, this.MoveSpeed *=
                        1.5, D._Instance.CreateEffect("JiaSu", this.owner, 600, this.MyId + 105)), this
                            .Hitresult1.succeeded && "Enemy" == this.Hitresult1.collider.owner.name) {
                        let e = this.Hitresult1.collider.owner.getComponent(w);
                        e.ShowIndex = 0, e.IsFleeTime = 20
                    }
                    if (this.Hitresult2.succeeded && "Enemy" == this.Hitresult2.collider.owner.name) {
                        let e = this.Hitresult2.collider.owner.getComponent(w);
                        e.ShowIndex = 0, e.IsFleeTime = 20, this.IsAtk || e.IsHide || e.IsCloak || (this
                            .AtkTarget = this.Hitresult2.collider.owner, this.AtkTargetCtrl = this
                                .Hitresult2.collider.owner.getComponent(w))
                    }
                    if (this.Hitresult3.succeeded && "Enemy" == this.Hitresult3.collider.owner.name) {
                        let e = this.Hitresult3.collider.owner.getComponent(w);
                        e.ShowIndex = 0, e.IsFleeTime = 20
                    }
                }
            }
            if (D._Instance.CameraCtrl.IsLerp && (D._Instance.Camera.transform.position = new Laya.Vector3(this
                .owner.transform.position.x, this.owner.transform.position.y + 9, this.owner.transform
                    .position.z - 5.5)), this.MyNameLabel)
                if (D._Instance.CameraCtrl.IsLerp) {
                    this.IsKiller ? this.MyNameLabel.color = "#ff0014" : this.MyNameLabel.color = "#0aff00", D
                        ._Instance.IsStartGame && (this.MyNameLabel.visible = !0);
                    let e = this.owner.transform.position.clone(),
                        t = new Laya.Vector3(0, 0, 0);
                    D._Instance.Camera.viewport.project(e, D._Instance.Camera.projectionViewMatrix, t), this
                        .MyNameLabel.pos(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY - 170)
                } else this.MyNameLabel.visible = !1;
            if (this.MyBadge)
                if (D._Instance.CameraCtrl.IsLerp) {
                    D._Instance.IsStartGame && (this.MyBadge.visible = !0);
                    let e = this.owner.transform.position.clone(),
                        t = new Laya.Vector3(0, 0, 0);
                    D._Instance.Camera.viewport.project(e, D._Instance.Camera.projectionViewMatrix, t), this
                        .MyBadge.pos(t.x / Laya.stage.clientScaleX, t.y / Laya.stage.clientScaleY - 220)
                } else this.MyBadge.visible = !1
        }
        RayDetectionCtrl() {
            this.Hitresult1 = new Laya.HitResult, this.Hitresult2 = new Laya.HitResult, this.Hitresult3 =
                new Laya.HitResult, this.StartPos1 = this.owner.addChild(new Laya.Sprite3D("StartPos1")), this
                    .StartPos1.transform.localPosition = new Laya.Vector3(.2, .5, 0), this.OverPos1 = this.owner
                        .addChild(new Laya.Sprite3D("OverPos1")), this.OverPos1.transform.localPosition = new Laya
                            .Vector3(1.65, .5, 4.3), this.StartPos2 = this.owner.addChild(new Laya.Sprite3D("StartPos2")),
                this.StartPos2.transform.localPosition = new Laya.Vector3(0, .5, 0), this.OverPos2 = this.owner
                    .addChild(new Laya.Sprite3D("OverPos2")), this.OverPos2.transform.localPosition = new Laya
                        .Vector3(0, .5, 5.1), this.StartPos3 = this.owner.addChild(new Laya.Sprite3D("StartPos3")), this
                            .StartPos3.transform.localPosition = new Laya.Vector3(-.2, .5, 0), this.OverPos3 = this.owner
                                .addChild(new Laya.Sprite3D("OverPos3")), this.OverPos3.transform.localPosition = new Laya
                                    .Vector3(-.2, .5, 4.3)
        }
        Help() {
            D._Instance.RoleLiveNum++, this.Rig3D.isTrigger = !1, this.Rig3D.isKinematic = !1, this.IsDie = !1,
                this.IsMove = !1, this.PlayMyAni("roleidle");
            let e = D._Instance.PropBox;
            for (let t = 0; t < e.numChildren; t++) {
                let i = e.getChildAt(t);
                if ("JinGu" == i.name) {
                    if (i.getComponent(k).MyId == this.MyId + 1e3) {
                        i.removeSelf();
                        break
                    }
                }
            }
        }
        KaiQiangEnter() {
            if (this.AtkTarget) {
                let e = this.owner.transform.position.clone(),
                    t = this.AtkTarget.transform.position.clone(),
                    i = this.TwoPointRotation3D(e, t);
                isNaN(i) || (this.owner.transform.rotationEuler = new Laya.Vector3(0, i, 0))
            }
            this.IsMove = !1, this.KillerAtkFun(!0)
        }
        ShiFa() {
            this.IsAtk = !1, this.IsAtkTime = 1500, this.IsMove ? this.PlayMyAni("rolerun", 1.5) : (this
                .IsFleeTime, this.PlayMyAni("roleidle", 1))
        }
        KillerAtk() {
            if (this.IsKiller) this.KillerAtkFun(!1);
            else if (this.KillerTarget && this.KillerTargetCtrl) {
                let e = this.KillerTargetCtrl.IsDiz;
                this.KillerTargetCtrl.IsDiz = !0;
                let t = 0,
                    i = !1;
                if (3 == this.RoleSkinId ? 2 == this.KillerTargetCtrl.KillerSkinId ? this.KillerTargetCtrl
                    .IsDizTime = 90 : this.KillerTargetCtrl.IsDizTime = 180 : 7 == this.RoleSkinId && (2 == this
                        .KillerTargetCtrl.KillerSkinId ? this.KillerTargetCtrl.IsDizTime = 330 : this
                            .KillerTargetCtrl.IsDizTime = 420), this.KillerTargetCtrl.IsDizTime < t && (this
                                .KillerTargetCtrl.IsDizTime = t, i = !0), 2 != this.KillerTargetCtrl.KillerSkinId &&
                                    7 != this.KillerTargetCtrl.KillerSkinId ? this.KillerTargetCtrl.PlayMyAni("ssidle", 1) :
                        this.KillerTargetCtrl.PlayMyAni("ssidle1", 1), e) {
                    let e = D._Instance.EffectBox;
                    for (let t = 0; t < e.numChildren; t++) {
                        let a = e.getChildAt(t),
                            s = a.getComponent(h);
                        if (i && s && a.name == c.Name_Effect_XuanYun && s.MyId == this.MyId) {
                            s.ReMoveIndex = 0, s.ReMoveMaxIndex = this.KillerTargetCtrl.IsDizTime;
                            break
                        }
                    }
                } else D._Instance.CreateEffect("XuanYun", this.KillerTarget, this.KillerTargetCtrl.IsDizTime,
                    this.MyId)
            }
        }
        KillerAtkFun(e) {
            if (this.IsOnceDie()) {
                n.PlayVibrateLong(),
                    4 == this.AtkTargetCtrl.RoleSkinId ||
                        6 == this.AtkTargetCtrl.RoleSkinId ?
                        n.PlaySound("b_attack_01") :
                        n.PlaySound("b_attack_02"),
                    D._Instance.KillNum++,
                    D._Instance.CreateEffect("Gold", this.AtkTarget),
                    this.AtkTargetCtrl.IsNoTreat = e,
                    4 == this.KillerSkinId ?
                        this.AtkTargetCtrl.IsHelpTime = 480 :
                        this.AtkTargetCtrl.IsHelpTime = 180,
                    D._Instance.RoleLiveNum--,
                    g && g._Instance && g._Instance.GameRefresh(),
                    this.AtkTargetCtrl.IsInitHelpTime = this.AtkTargetCtrl.IsHelpTime,
                    this.AtkTargetCtrl.IsDie = !0,
                    this.AtkTargetCtrl.Rig3D.isTrigger = !0,
                    this.AtkTargetCtrl.Rig3D.isKinematic = !0,
                    this.AtkTargetCtrl.HelpTargetCtrl = null,
                    this.AtkTargetCtrl.PlayMyAni("ssidle"),
                    this.AtkTargetCtrl.DieResult(this.KillerSkinId),
                    this.AtkTargetCtrl.IsWaterTime = 0,
                    this.AtkTargetCtrl.IsWater = !1;
                let t = D._Instance.EffectBox;
                for (let e = 0; e < t.numChildren; e++) {
                    let i = t.getChildAt(e),
                        a = i.getComponent(h);
                    if (a && i.name == c.Name_Effect_JiaoYin && a.MyId == this.AtkTargetCtrl.MyId) {
                        c._Instance.recover(i.name, i);
                        break
                    }
                }
                let i = {};
                i.name = this.AtkTargetCtrl.MyName, i.type = i.name == "You" ? "were caught" : "was caught", D._Instance.GameLeadData.push(i), 6 == this
                    .AtkTargetCtrl.RoleSkinId && s.RoleTaskIndex < 5 && (s.RoleTaskIndex++, d.save_int(
                        "RoleTaskIndex", s.RoleTaskIndex))
            }
        }
        KillerAtkEnd() {
            if (this.IsKiller) {
                this.IsAtk = !1, this.IsPlayAtkSound = !1, this.AtkIndex = 0, this.IsMove ? 2 != this
                    .KillerSkinId && 7 != this.KillerSkinId ? this.PlayMyAni("ssrun", 1.5) : this.PlayMyAni(
                        "ssrun1", 1.5) : 2 != this.KillerSkinId && 7 != this.KillerSkinId ? this.PlayMyAni(
                            "ssidle", 1) : this.PlayMyAni("ssidle1", 1);
                let e = !0,
                    t = D._Instance.EnemyBox;
                for (let i = 0; i < t.numChildren; i++) {
                    if (!t.getChildAt(i).getComponent(w).IsDie) {
                        e = !1;
                        break
                    }
                }
                e && (D._Instance.IsStartGame = !1, D._Instance.IsWin = !0, n.PlaySound("victory"), Math
                    .random() > .5 ? this.PlayMyAni("win2") : this.PlayMyAni("win3"), Laya.timer.once(2300,
                        this, () => {
                            1 == s.TotalSwitch && 1 == s.BannerSwitch && 100 * Math.random() < s.EggObbs ?
                                Laya.View.open("Scene/LateChestPanel.scene", !0, [3]) : s.MaxLevel % s
                                    .IsOpenChest == 0 ? Laya.View.open("Scene/ChestPanel.scene") : Laya.View
                                        .open("Scene/SettlePanel.scene")
                        }))
            } else this.IsAtk = !1, this.IsAtkTime = 3 == this.RoleSkinId ? 1200 : 1500, this.IsMove ? this
                .PlayMyAni("rolerun", 1.5) : (this.IsFleeTime, this.PlayMyAni("roleidle", 1))
        }
        IsOnceDie() {
            return 0 != s.KillerMaskId || (!this.AtkTargetCtrl || 5 != this.AtkTargetCtrl.RoleSkinId || !this
                .AtkTargetCtrl.IsShield || 5 == this.KillerSkinId || (this.AtkTargetCtrl.IsShield = !1, this
                    .AtkTargetCtrl.Weap.active = !1, n.PlayVibrateShort(), n.PlaySound("broken"), n
                        .PlaySound("b_attack_02"), !1))
        }
        DieResult(e) {
            let t, i = D._Instance.PropBox;
            switch (e) {
                case 1:
                    t = i.addChild(L.SelectProp("LaMian"));
                    break;
                case 2:
                    (t = i.addChild(L.SelectProp("DaiZi"))).getChildAt(0).meshRenderer.material.renderMode = 2,
                        t.getChildAt(0).meshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 150 /
                            255);
                    break;
                case 3:
                    t = i.addChild(L.SelectProp("LianZi"));
                    break;
                case 4:
                    t = i.addChild(L.SelectProp("BingKuai"));
                    break;
                case 5:
                    t = i.addChild(L.SelectProp("Wang"));
                    break;
                case 6:
                    t = i.addChild(L.SelectProp("PaoPao"));
                    break;
                case 7:
                    (t = i.addChild(L.SelectProp("WPDaiZi"))).getChildAt(0).meshRenderer.material.renderMode =
                        2, t.getChildAt(0).meshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 150 /
                            255)
            }
            t.name = "JinGu", t.transform.position = new Laya.Vector3(this.owner.transform.position.x, 0, this
                .owner.transform.position.z), 6 == e && (t.transform.rotationEuler = new Laya.Vector3(0, -
                    210, 0)), t.addComponent(k).MyId = this.MyId + 1e3
        }
        CreateMyName() {
            this.MyNameLabel = Laya.stage.addChild(Laya.Pool.getItemByClass("MyNameLabel", Laya.Label)), this
                .MyNameLabel.width = 300, this.MyNameLabel.height = 25, this.MyNameLabel.pivot(150, 13), this
                    .MyNameLabel.pos(1e4, 1e4), this.MyNameLabel.fontSize = 24, this.MyNameLabel.font =
                "Microsoft YaHei", this.MyNameLabel.align = "center", this.MyNameLabel.valign = "middle", this
                    .MyNameLabel.overflow = "hidden", this.MyNameLabel.color = "#0aff00", this.MyNameLabel.name =
                "MyNameLabel", this.MyNameLabel.text = this.MyName, this.MyNameLabel.visible = !0
        }
        CreateMyBadge() {
            s.KillRank > 3 || 0 == s.KillRank || (this.MyBadge = Laya.stage.addChild(Laya.Pool.getItemByClass(
                "MyBadge", Laya.Image)), this.MyBadge.width = 157, this.MyBadge.height = 38, this
                    .MyBadge.pivot(79, 19), this.MyBadge.pos(1e4, 1e4), this.MyBadge.name = "MyBadge", this
                        .MyBadge.skin = "res/KillRank/killrank" + s.KillRank + ".png", this.MyBadge.visible = !0)
        }
        TwoPointRotation3D(e, t) {
            t.x -= e.x, t.z -= e.z;
            var i = 0;
            if (0 == t.x && 0 == t.z) return 0;
            if (t.x > 0 && t.z > 0) i = 0;
            else {
                if (t.x > 0 && 0 == t.z) return 90;
                if (t.x > 0 && t.z < 0) i = 180;
                else {
                    if (0 == t.x && t.z < 0) return 180;
                    if (t.x < 0 && t.z < 0) i = -180;
                    else {
                        if (t.x < 0 && 0 == t.z) return -90;
                        t.x < 0 && t.z > 0 && (i = 0)
                    }
                }
            }
            return Math.atan(t.x / t.z) * (360 / (2 * Math.PI)) + i
        }
    }
    class v extends Laya.Script {
        constructor() {
            super(), this.owner = this.owner, this.IsLerp = !0
        }
        onAwake() { }
        onUpdate() { }
    }
    class C extends Laya.Script {
        static Init() {
            Laya.loader.create(["GameScene/Role/Conventional/Role.lh"], Laya.Handler.create(this, this.LoadRes))
        }
        static LoadRes() {
            this.RoleData = Laya.loader.getRes("GameScene/Role/Conventional/Role.lh"), Laya.Texture2D.load(
                "res/RoleMat/Role1.jpg", Laya.Handler.create(this, function (e) {
                    s.RoleMatData.push(e), Laya.Texture2D.load("res/RoleMat/Role2.jpg", Laya.Handler
                        .create(this, function (e) {
                            s.RoleMatData.push(e), Laya.Texture2D.load("res/RoleMat/Role3.jpg",
                                Laya.Handler.create(this, function (e) {
                                    s.RoleMatData.push(e), Laya.Texture2D.load(
                                        "res/RoleMat/Role4.jpg", Laya.Handler
                                            .create(this, function (e) {
                                                s.RoleMatData.push(e), Laya
                                                    .Texture2D.load(
                                                        "res/RoleMat/Role5.jpg",
                                                        Laya.Handler.create(this,
                                                            function (e) {
                                                                s.RoleMatData.push(
                                                                    e), Laya
                                                                        .Texture2D.load(
                                                                            "res/RoleMat/Role6.jpg",
                                                                            Laya.Handler
                                                                                .create(
                                                                                    this,
                                                                                    function (
                                                                                        e) {
                                                                                        s.RoleMatData
                                                                                            .push(
                                                                                                e
                                                                                            ),
                                                                                            Laya
                                                                                                .Texture2D
                                                                                                .load(
                                                                                                    "res/RoleMat/Role7.jpg",
                                                                                                    Laya
                                                                                                        .Handler
                                                                                                        .create(
                                                                                                            this,
                                                                                                            function (
                                                                                                                e
                                                                                                            ) {
                                                                                                                s.RoleMatData
                                                                                                                    .push(
                                                                                                                        e
                                                                                                                    ),
                                                                                                                    Laya
                                                                                                                        .Texture2D
                                                                                                                        .load(
                                                                                                                            "res/RoleMat/Role8.jpg",
                                                                                                                            Laya
                                                                                                                                .Handler
                                                                                                                                .create(
                                                                                                                                    this,
                                                                                                                                    function (
                                                                                                                                        e
                                                                                                                                    ) {
                                                                                                                                        s.RoleMatData
                                                                                                                                            .push(
                                                                                                                                                e
                                                                                                                                            ),
                                                                                                                                            Laya
                                                                                                                                                .Texture2D
                                                                                                                                                .load(
                                                                                                                                                    "res/RoleMaskMat/Mask1.jpg",
                                                                                                                                                    Laya
                                                                                                                                                        .Handler
                                                                                                                                                        .create(
                                                                                                                                                            this,
                                                                                                                                                            function (
                                                                                                                                                                e
                                                                                                                                                            ) {
                                                                                                                                                                s.RoleMaskMatData
                                                                                                                                                                    .push(
                                                                                                                                                                        e
                                                                                                                                                                    ),
                                                                                                                                                                    Laya
                                                                                                                                                                        .Texture2D
                                                                                                                                                                        .load(
                                                                                                                                                                            "res/RoleMaskMat/Mask2.jpg",
                                                                                                                                                                            Laya
                                                                                                                                                                                .Handler
                                                                                                                                                                                .create(
                                                                                                                                                                                    this,
                                                                                                                                                                                    function (
                                                                                                                                                                                        e
                                                                                                                                                                                    ) {
                                                                                                                                                                                        s.RoleMaskMatData
                                                                                                                                                                                            .push(
                                                                                                                                                                                                e
                                                                                                                                                                                            ),
                                                                                                                                                                                            Laya
                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                .load(
                                                                                                                                                                                                    "res/RoleMaskMat/Mask3.jpg",
                                                                                                                                                                                                    Laya
                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                        .create(
                                                                                                                                                                                                            this,
                                                                                                                                                                                                            function (
                                                                                                                                                                                                                e
                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                s.RoleMaskMatData
                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                        e
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                            "res/RoleMaskMat/Mask5.jpg",
                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                        s.RoleMaskMatData
                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                null
                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                            s
                                                                                                                                                                                                                                                .RoleMaskMatData
                                                                                                                                                                                                                                                .push(
                                                                                                                                                                                                                                                    e
                                                                                                                                                                                                                                                ),
                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                                                                .load(
                                                                                                                                                                                                                                                    "res/RoleMaskMat/Mask7.jpg",
                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                                                                        .create(
                                                                                                                                                                                                                                                            this,
                                                                                                                                                                                                                                                            function (
                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                s.RoleMaskMatData
                                                                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                                                                        null
                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                    s
                                                                                                                                                                                                                                                                        .RoleMaskMatData
                                                                                                                                                                                                                                                                        .push(
                                                                                                                                                                                                                                                                            e
                                                                                                                                                                                                                                                                        ),
                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                                                                            "res/KillerMat/Killer1.jpg",
                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                                        s.KillerMatData
                                                                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                                                                                                                .load(
                                                                                                                                                                                                                                                                                                    "res/KillerMat/Killer2.jpg",
                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                                                                                                                        .create(
                                                                                                                                                                                                                                                                                                            this,
                                                                                                                                                                                                                                                                                                            function (
                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                                                                s.KillerMatData
                                                                                                                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                                                                                                                            "res/KillerMat/Killer3.jpg",
                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                                                                                        s.KillerMatData
                                                                                                                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                                                                                                                                                                .load(
                                                                                                                                                                                                                                                                                                                                                    "res/KillerMat/Killer4.jpg",
                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                                                                                                                                                                        .create(
                                                                                                                                                                                                                                                                                                                                                            this,
                                                                                                                                                                                                                                                                                                                                                            function (
                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                                                                                                                s.KillerMatData
                                                                                                                                                                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                                                                                                                                                                            "res/KillerMat/Killer5.jpg",
                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                                                                                                                                        s.KillerMatData
                                                                                                                                                                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                .load(
                                                                                                                                                                                                                                                                                                                                                                                                    "res/KillerMat/Killer6.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                                                                                                                                                                                                                        .create(
                                                                                                                                                                                                                                                                                                                                                                                                            this,
                                                                                                                                                                                                                                                                                                                                                                                                            function (
                                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                                                                                                                                                                s.KillerMatData
                                                                                                                                                                                                                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                                                                                                                                                                                                                            "res/KillerMat/Killer7.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                                                                                                                                                                                        s.KillerMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                                                                .load(
                                                                                                                                                                                                                                                                                                                                                                                                                                                    "res/KillerMaskMat/Mask1.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                                                                                                                                                                                                                                                                        .create(
                                                                                                                                                                                                                                                                                                                                                                                                                                                            this,
                                                                                                                                                                                                                                                                                                                                                                                                                                                            function (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                s.KillerMaskMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "res/KillerMaskMat/Mask2.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        s.KillerMaskMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .load(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "res/KillerMaskMat/Mask3.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .create(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            this,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            function (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                s.KillerMaskMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "res/KillerMaskMat/Mask5.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        s.KillerMaskMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                null
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .KillerMaskMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .load(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "res/KillerMaskMat/Mask6.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .Handler
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .create(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            this,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            function (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                s.KillerMaskMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .Texture2D
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .load(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "res/KillerMaskMat/Mask7.jpg",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Laya
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .Handler
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .create(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    this,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    function (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        s.KillerMaskMatData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            .push(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .LoadingNum++,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            console
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .log(
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "人物资源加载成功:",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    this
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .RoleData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                )
                                                                                                                                                                                                                        )
                                                                                                                                                                                                            }
                                                                                                                                                                                                        )
                                                                                                                                                                                                )
                                                                                                                                                                                    }
                                                                                                                                                                                )
                                                                                                                                                                        )
                                                                                                                                                            }
                                                                                                                                                        )
                                                                                                                                                )
                                                                                                                                    }
                                                                                                                                )
                                                                                                                        )
                                                                                                            }
                                                                                                        )
                                                                                                )
                                                                                    }))
                                                            }))
                                            }))
                                }))
                        }))
                })), console.log("this.RoleData:", this.RoleData)
        }
        static SelectRole(e = "Role") {
            return Laya.Sprite3D.instantiate(this.RoleData.getChildByName(e))
        }
    }
    class T extends Laya.Script {
        constructor() {
            super()
        }
        static Init() {
            Laya.loader.create(["json/level.json", "json/skin.json"], Laya.Handler.create(this, this.LoadRes))
        }
        static LoadRes() {
            this.LevelData = Laya.loader.getRes("json/level.json"), this.SkinData = Laya.loader.getRes("json/skin.json"),
                s.LoadingNum++, console.log("json数据加载成功:", this.LevelData)
        }
    }
    T.LevelData = [], T.SkinData = [];
    class b extends Laya.Script {
        static Init() {
            Laya.loader.create(["GameScene/Level/Conventional/Level.lh"], Laya.Handler.create(this, this
                .LoadRes))
        }
        static LoadRes() {
            this.LevelData = Laya.loader.getRes("GameScene/Level/Conventional/Level.lh"), Laya.Texture2D.load(
                "res/PropMat/Switch.jpg", Laya.Handler.create(this, e => {
                    s.PropMatData.push(e), Laya.Texture2D.load("res/WallMat/qiang1.jpg", Laya.Handler
                        .create(this, e => {
                            s.WallMatData.push(e), Laya.Texture2D.load("res/WallMat/qiang2.jpg",
                                Laya.Handler.create(this, e => {
                                    s.WallMatData.push(e), Laya.Texture2D.load(
                                        "res/WallMat/qiang3.jpg", Laya.Handler
                                            .create(this, e => {
                                                s.WallMatData.push(e), Laya
                                                    .Texture2D.load(
                                                        "res/WallMat/qiang4.jpg",
                                                        Laya.Handler.create(this,
                                                            e => {
                                                                s.WallMatData.push(
                                                                    e), Laya
                                                                        .Texture2D.load(
                                                                            "res/WallMat/qiang5.jpg",
                                                                            Laya.Handler
                                                                                .create(
                                                                                    this,
                                                                                    e => {
                                                                                        s.WallMatData
                                                                                            .push(
                                                                                                e
                                                                                            ),
                                                                                            Laya
                                                                                                .BaseMaterial
                                                                                                .load(
                                                                                                    "GameScene/Level/Conventional/Assets/Materin/diban.lmat",
                                                                                                    Laya
                                                                                                        .Handler
                                                                                                        .create(
                                                                                                            this,
                                                                                                            e => {
                                                                                                                this.DiMianMat =
                                                                                                                    e,
                                                                                                                    Laya
                                                                                                                        .BaseMaterial
                                                                                                                        .load(
                                                                                                                            "GameScene/Level/Conventional/Assets/Materin/qiang.lmat",
                                                                                                                            Laya
                                                                                                                                .Handler
                                                                                                                                .create(
                                                                                                                                    this,
                                                                                                                                    e => {
                                                                                                                                        this.BarrierMat =
                                                                                                                                            e,
                                                                                                                                            s
                                                                                                                                                .LoadingNum++,
                                                                                                                                            console
                                                                                                                                                .log(
                                                                                                                                                    "关卡资源加载成功:",
                                                                                                                                                    this
                                                                                                                                                        .LevelData
                                                                                                                                                )
                                                                                                                                    }
                                                                                                                                )
                                                                                                                        )
                                                                                                            }
                                                                                                        )
                                                                                                )
                                                                                    }))
                                                            }))
                                            }))
                                }))
                        }))
                }))
        }
        static SelectLevel(e) {
            return Laya.Sprite3D.instantiate(this.LevelData.getChildByName("Level" + e))
        }
    }
    class x {
        static init() {
            for (let e in x) "init" !== e && (laya.utils.Tween.prototype[e] = x[e])
        }
        static _initProps(e, t, i) {
            for (let a in t) {
                if ("number" == typeof e[a]) {
                    let s = i ? e[a] : t[a],
                        n = i ? t[a] : e[a];
                    this._props.push([a, s, n - s]), i || (e[a] = s)
                }
                if (e[a] instanceof Laya.Vector4) {
                    let s = new Laya.Vector4,
                        n = i ? e[a].clone() : t[a],
                        l = i ? t[a] : e[a].clone();
                    n instanceof Laya.Vector4 || (n = new Laya.Vector4(n.x, n.y, n.z, n.w)), l = new Laya.Vector4(l
                        .x, l.y, l.z, l.w), Laya.Vector4.subtract(l, n, s), this._props.push([a, n, s, l]), i ||
                        (e[a] = n)
                }
                if (e.transform && e.transform[a] instanceof Laya.Vector3) {
                    let s = new Laya.Vector3,
                        n = i ? e.transform[a].clone() : t[a],
                        l = i ? t[a] : e.transform[a].clone();
                    n instanceof Laya.Vector3 || (n = new Laya.Vector3(n.x, n.y, n.z)), l = new Laya.Vector3(l.x, l
                        .y, l.z), Laya.Vector3.subtract(l, n, s), this._props.push([a, n, s, l]), i || (e[a] =
                            n)
                }
            }
        }
        static _updateEase(e) {
            var t = this._target;
            if (t) {
                if (t.destroyed) return this.clearTween(t);
                var i = this._usedTimer = e - this._startTimer - this._delay;
                if (!(i < 0)) {
                    if (i >= this._duration) return this.complete();
                    for (var a = i > 0 ? this._ease(i, 0, 1, this._duration) : 0, s = this._props, n = 0, l = s
                        .length; n < l; n++) {
                        var r = s[n];
                        if ("number" == typeof t[r[0]] && (t[r[0]] = r[1] + a * r[2]), t[r[0]] instanceof Laya
                            .Vector4) {
                            let e = r[1].x + a * r[2].x,
                                i = r[1].y + a * r[2].y,
                                s = r[1].z + a * r[2].z,
                                n = r[1].w + a * r[2].w;
                            t[r[0]] = new Laya.Vector4(e, i, s, n)
                        }
                        if (t[r[0]] instanceof Laya.Vector3) {
                            let e = r[1].x + a * r[2].x,
                                i = r[1].y + a * r[2].y,
                                s = r[1].z + a * r[2].z;
                            t[r[0]] = new Laya.Vector3(e, i, s)
                        }
                        if (t.transform && t.transform[r[0]] instanceof Laya.Vector3) {
                            let e = r[1].x + a * r[2].x,
                                i = r[1].y + a * r[2].y,
                                s = r[1].z + a * r[2].z;
                            t.transform[r[0]] = new Laya.Vector3(e, i, s)
                        }
                    }
                    this.update && this.update.run()
                }
            }
        }
        static complete() {
            if (this._target) {
                Laya.timer.runTimer(this, this.firstStart);
                var e = this._complete;
                this.completData(), this.update && this.update.run(), this._count++, 0 != this.repeat && this
                    ._count >= this.repeat ? (this.clear(), e && e.run()) : this.restart()
            }
        }
        static completData() {
            for (var e = this._target, t = this._props, i = 0, a = t.length; i < a; i++) {
                var s = t[i];
                "number" == typeof e[s[0]] && (e[s[0]] = s[1] + s[2]), e[s[0]] instanceof Laya.Vector4 && (e[s[0]] =
                    s[3]), e[s[0]] instanceof Laya.Vector3 && (e[s[0]] = s[3]), e.transform && e.transform[s[
                    0]] instanceof Laya.Vector3 && (e.transform[s[0]] = s[3])
            }
        }
    }
    class M extends Laya.Script {
        constructor() {
            super(), this.owner = this.owner
        }
        onAwake() {
            this.YiWenHao = this.owner.getChildByName("YiWenHao"), this.YiWenHao.active = !1, this.GanTanHao =
                this.owner.getChildByName("GanTanHao"), this.GanTanHao.active = !1
        }
        onUpdate() {
            this.Target && this.TargetCtrl && (this.owner.transform.position = new Laya.Vector3(this.Target
                .transform.position.x, this.Target.transform.position.y + 2.3, this.Target.transform
                    .position.z), this.TargetCtrl.IsChase ? (this.YiWenHao.active = !1, this.GanTanHao
                        .active = !0) : this.TargetCtrl.IsHaveIndex > 0 ? (this.YiWenHao.active = !0, this
                            .GanTanHao.active = !1) : (this.YiWenHao.active = !1, this.GanTanHao.active = !1))
        }
    }
    class D extends Laya.Script {
        constructor() {
            super(), this.owner = this.owner, this.IsStartGame = !0, this.IsWin = !1, this.IsRevive = !1, this
                .InitPos = new Laya.Vector2(0, 0), this.LastRot = 0, this.GameLeadData = [], this
                    .StartGameTime = 3, this.IsCountDown = !1, this.CountTime = 40, this.MaxRoleLiveNum = 0, this
                        .RoleLiveNum = 0, this.OpenSwitchNum = 0, this.RescueNum = 0, this.KillNum = 0, this.SwitchNum =
                0, this.MaxSwitchNum = 0, this.SwitchData = [], this.IsOpenDoor = !1, this.ExitData = [], this
                    .YanWuPosData = [], this.IsKiller = !1, this.KillerId = 1, this.TryKillerId = 1, this
                        .ColorData = [{
                            dimianx: 15,
                            dimiany: 115,
                            dimianz: 183,
                            qiangx: 143,
                            qiangy: 142,
                            qiangz: 144
                        }, {
                            dimianx: 163,
                            dimiany: 163,
                            dimianz: 163,
                            qiangx: 155,
                            qiangy: 117,
                            qiangz: 178
                        }, {
                            dimianx: 210,
                            dimiany: 131,
                            dimianz: 99,
                            qiangx: 209,
                            qiangy: 177,
                            qiangz: 115
                        }, {
                            dimianx: 73,
                            dimiany: 204,
                            dimianz: 146,
                            qiangx: 241,
                            qiangy: 251,
                            qiangz: 143
                        }, {
                            dimianx: 73,
                            dimiany: 204,
                            dimianz: 79,
                            qiangx: 183,
                            qiangy: 142,
                            qiangz: 242
                        }], this.BgColorData = [{
                            bgx: 111,
                            bgy: 248,
                            bgz: 231
                        }, {
                            bgx: 229,
                            bgy: 111,
                            bgz: 248
                        }, {
                            bgx: 248,
                            bgy: 238,
                            bgz: 111
                        }, {
                            bgx: 248,
                            bgy: 111,
                            bgz: 111
                        }, {
                            bgx: 66,
                            bgy: 255,
                            bgz: 64
                        }], this.JiaZiId = 1
        }
        onAwake() {
            this.mouseMove = false;
            this.keyDown = false;
            this.keyNumArr = [];
            D._Instance = this, x.init(), c._Instance.init(), this.Camera = this.owner.getChildByName(
                "Main Camera"), this.CameraCtrl = this.Camera.addComponent(v), this.DirectionalLight = this
                    .owner.getChildByName("Directional Light"), this.Bg = this.owner.getChildByName("Bg"), this
                        .EnemyBox = this.owner.getChildByName("EnemyBox"), this.PropBox = this.owner.getChildByName(
                            "PropBox"), this.EffectBox = this.owner.getChildByName("EffectBox"), s.LoadingNum++, console
                                .log("打开场景成功！")
        }
        onMouseCtrl(e) {
            if (!this.IsStartGame) {
                window.moveBg.removeSelf();
                this.mouseMove = false;
                this.keyDown = false;
                this.keyNumArr = [];
                return;
            }
            if (this.Player && this.PlayerCtrl && !this.PlayerCtrl.IsDie && !this.PlayerCtrl.IsDiz &&
                (this.PlayerCtrl.IsKiller || !this.PlayerCtrl.IsKiller && !this.PlayerCtrl.IsAtk) && this.IsStartGame && !this.keyDown) {
                switch (e.type) {
                    case Laya.Event.MOUSE_DOWN:
                        this.InitPos = new Laya.Vector2(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY);
                        this.mouseMove = true;
                        window.moveBg.pos(Laya.MouseManager.instance.mouseX / Laya.stage.clientScaleX,
                            Laya.MouseManager.instance.mouseY / Laya.stage.clientScaleY);
                        Laya.stage.addChild(window.moveBg);
                        break;
                    case Laya.Event.MOUSE_MOVE:
                        if (!this.mouseMove) {
                            break;
                        }
                        let t = new Laya.Vector2(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY),
                            i = this.TwoPointRotation2D(t, this.InitPos);
                        let b = new Laya.Vector2((t.x - this.InitPos.x) / Laya.stage.clientScaleX,
                            (t.y - this.InitPos.y) / Laya.stage.clientScaleY);
                        let blengt = Laya.Vector2.scalarLength(b);
                        let scaleVc2 = 1;
                        if (blengt > 88) {
                            scaleVc2 = 88 / blengt;
                        }
                        Laya.Vector2.scale(b, scaleVc2, b);
                        window.moveug.pos(b.x + 88, b.y + 88);
                        isNaN(i) || (this.Player.transform.rotationEuler = new Laya.Vector3(0, i, 0)),
                            this.PlayerCtrl.IsAtk || (this.PlayerCtrl.IsKiller ? 2 != this.PlayerCtrl
                                .KillerSkinId && 7 != this.PlayerCtrl.KillerSkinId ? this.PlayerCtrl.PlayMyAni(
                                    "ssrun", 1.5) : this.PlayerCtrl.PlayMyAni("ssrun1", 1.5) : this.PlayerCtrl
                                        .IsFleeTime <= 0 ? this.PlayerCtrl.PlayMyAni("rolerun", 1.5) : this.PlayerCtrl
                                            .PlayMyAni("roletaopao", 1.5)), "kaiqiang" != this.PlayerCtrl.Aniname && (this.PlayerCtrl.IsMove = !0);
                        break;
                    case Laya.Event.MOUSE_UP:
                    case Laya.Event.MOUSE_OUT:
                        window.moveBg.removeSelf();
                        this.mouseMove = false;
                        this.PlayerCtrl.IsMove = !1, this.PlayerCtrl.IsAtk || (this.PlayerCtrl.IsKiller ? 2 !=
                            this.PlayerCtrl.KillerSkinId && 7 != this.PlayerCtrl.KillerSkinId ? this
                                .PlayerCtrl.PlayMyAni("ssidle", 1, .3) :
                            this.PlayerCtrl.PlayMyAni("ssidle1", 1, .3) :
                            (this.PlayerCtrl.IsFleeTime, this.PlayerCtrl.PlayMyAni("roleidle", 1, .3)))
                }
            }
        }

        onKeyDown(e) {
            if (!this.IsStartGame) {
                window.moveBg.removeSelf();
                this.mouseMove = false;
                this.keyDown = false;
                this.keyNumArr = [];
                return;
            }
            let keyCode = e.keyCode;
            if (e.keyCode == 37) {
                keyCode = 65;
            } else if (e.keyCode == 39) {
                keyCode = 68;
            } else if (e.keyCode == 38) {
                keyCode = 87;
            } else if (e.keyCode == 40) {
                keyCode = 83;
            }
            if (this.Player && this.PlayerCtrl && !this.PlayerCtrl.IsDie && !this.PlayerCtrl.IsDiz &&
                (this.PlayerCtrl.IsKiller || !this.PlayerCtrl.IsKiller && !this.PlayerCtrl.IsAtk) && this.IsStartGame && !this.mouseMove
                && this.keyNumArr.indexOf(keyCode) == -1 && (keyCode == 65 || keyCode == 68 || keyCode == 87 || keyCode == 83)) {
                this.keyDown = true;
                this.keyNumArr.push(keyCode);
                this.clickKey();
            }
        }
        onKeyUp(e) {
            if (!this.IsStartGame) {
                window.moveBg.removeSelf();
                this.mouseMove = false;
                this.keyDown = false;
                this.keyNumArr = [];
                return;
            }
            let keyCode = e.keyCode;
            if (e.keyCode == 37) {
                keyCode = 65;
            } else if (e.keyCode == 39) {
                keyCode = 68;
            } else if (e.keyCode == 38) {
                keyCode = 87;
            } else if (e.keyCode == 40) {
                keyCode = 83;
            }
            // Qi.A = 65,Qi.D = 68,Qi.W = 87,Qi.S = 83
            // Qi.LEFT = 37, Qi.UP = 38,Qi.RIGHT = 39, Qi.DOWN = 40
            if (this.keyNumArr.indexOf(keyCode) != -1) {
                this.keyNumArr.splice(this.keyNumArr.indexOf(keyCode), 1);
                this.clickKey();
            }
        }

        clickKey() {
            let keyLength = this.keyNumArr.length;
            if (keyLength == 0) {
                this.keyDown = false;
                this.PlayerCtrl.IsMove = !1, this.PlayerCtrl.IsAtk || (this.PlayerCtrl.IsKiller ? 2 !=
                    this.PlayerCtrl.KillerSkinId && 7 != this.PlayerCtrl.KillerSkinId ? this
                        .PlayerCtrl.PlayMyAni("ssidle", 1, .3) :
                    this.PlayerCtrl.PlayMyAni("ssidle1", 1, .3) :
                    (this.PlayerCtrl.IsFleeTime, this.PlayerCtrl.PlayMyAni("roleidle", 1, .3)))
                return;
            }
            this.InitPos = new Laya.Vector2(0, 0)
            let t = new Laya.Vector2(0, 0)
            for (let i = keyLength - 1; i > -1; i--) {
                let keyNum = this.keyNumArr[i];
                if (keyNum == 65 && t.x == 0) {
                    t.x = -1;
                } else if (keyNum == 68 && t.x == 0) {
                    t.x = 1;
                } else if (keyNum == 87 && t.y == 0) {
                    t.y = -1;
                } else if (keyNum == 83 && t.y == 0) {
                    t.y = 1;
                }
                if (t.x != 0 && t.y != 0) {
                    break;
                }
            }
            let i = this.TwoPointRotation2D(t, this.InitPos);
            isNaN(i) || (this.Player.transform.rotationEuler = new Laya.Vector3(0, i, 0)), this
                .PlayerCtrl.IsAtk || (this.PlayerCtrl.IsKiller ? 2 != this.PlayerCtrl
                    .KillerSkinId && 7 != this.PlayerCtrl.KillerSkinId ? this.PlayerCtrl.PlayMyAni(
                        "ssrun", 1.5) : this.PlayerCtrl.PlayMyAni("ssrun1", 1.5) : this.PlayerCtrl
                            .IsFleeTime <= 0 ? this.PlayerCtrl.PlayMyAni("rolerun", 1.5) : this.PlayerCtrl
                                .PlayMyAni("roletaopao", 1.5)), "kaiqiang" != this.PlayerCtrl.Aniname && (this.PlayerCtrl.IsMove = !0);
        }

        ReGame(e = !0) {
            this.IsStartGame = e, this.IsWin = !1, this.IsRevive = !1, this.RoleLiveNum = 0, this
                .MaxRoleLiveNum = 0, this.SwitchNum = 0, this.MaxSwitchNum = 0, this.SwitchData = [], this
                    .IsOpenDoor = !1, this.ExitData = [], this.YanWuPosData = [], this.IsKiller = !1, this
                        .KillerId = 1, this.TryKillerId = 1, this.OpenSwitchNum = 0, this.RescueNum = 0, this.KillNum =
                0, this.IsCountDown = !1, this.CountTime = 40, this.StartGameTime = 3, this.JiaZiId = 1, s
                    .GetDiamond = 0, this.CameraCtrl.IsLerp = !0, this.GameLeadData = [], this.Player && (r
                        .ClearTween(this.Player), Laya.timer.clearAll(this.PlayerCtrl), this.Player.removeSelf(),
                        this.PlayerCtrl = null), this.owner.getChildByName("Level") && this.owner.getChildByName(
                            "Level").removeSelf();
            for (let e = 0; e < this.EnemyBox.numChildren; e++) {
                let t = this.EnemyBox.getChildAt(e);
                r.ClearTween(t);
                let i = t.getComponent(w);
                i && Laya.timer.clearAll(i), t.removeSelf(), e--
            }
            for (let e = 0; e < this.PropBox.numChildren; e++) {
                this.PropBox.getChildAt(e).removeSelf(), e--
            }
            for (let e = 0; e < this.EffectBox.numChildren; e++) {
                let t = this.EffectBox.getChildAt(e);
                c._Instance.recover(t.name, t), e--
            }
            for (let e = 0; e < Laya.stage.numChildren; e++) {
                let t = Laya.stage.getChildAt(e);
                "MyNameLabel" != t.name && "MyBadge" != t.name || (Laya.Pool.recover(t.name, t), t.removeSelf(),
                    e--)
            }
            r.ClearTween(this.Camera), Laya.timer.clearAll(this)
        }
        StartGame() {
            this.ReGame(), this.CreateScene(), this.IsStartGame = !1
        }
        CountDownGame() {
            g._Instance.CountDownRefresh(), this.IsStartGame = !0, Laya.timer.loop(1e3, this, () => {
                if (this.StartGameTime--, this.StartGameTime <= 0) {
                    Laya.timer.clearAll(this), this.IsStartGame = !1;
                    for (let e = 0; e < this.PropBox.numChildren; e++) {
                        let t = this.PropBox.getChildAt(e);
                        "Switch" == t.name && r.MoveTo(t, new Laya.Vector3(t.transform.position.x, 0, t
                            .transform.position.z), 2500, Laya.Ease.sineOut, Laya.Handler
                                .create(this, () => {
                                    r.ClearTween(t)
                                }))
                    }
                    let e, t;
                    this.PlayerCtrl.PlayMyAni("roleidle", 1, .3), this.PlayerCtrl.MyId == this
                        .KillerId && (this.IsKiller = !0, e = this.Player, t = this.PlayerCtrl);
                    for (let i = 0; i < this.EnemyBox.numChildren; i++) {
                        let a = this.EnemyBox.getChildAt(i),
                            n = a.getComponent(w);
                        n.PlayMyAni("roleidle", 1, .3), n.MyId == this.KillerId && (e = a, t = n, Math
                            .random() > .5 && (t.MoveSpeedDowerLv = s.DowerData[0].dowerlv + 2, t
                                .MoveSpeedCtrl()))
                    }
                    g._Instance.ShowLead();
                    let i = this.PropBox.addChild(L.SelectProp("HintTarget")).addComponent(M);
                    i.Target = e, i.TargetCtrl = t, this.CameraCtrl.IsLerp = !1;
                    let a = e.transform.rotationEuler.y < 0 ? -180 : 180;
                    r.MoveTo(this.Camera, new Laya.Vector3(e.transform.position.x, e.transform.position
                        .y + 5, e.transform.position.z - 3), 1500, Laya.Ease.sineOut, Laya
                            .Handler.create(this, () => {
                                r.ClearTween(this.Camera)
                            })), r.RotateTo(e, new Laya.Vector3(0, a, 0), 500, Laya.Ease.sineOut, Laya
                                .Handler.create(this, () => {
                                    n.PlaySound("howl"), this.CreateEffect("BianShen", e), t.PlayMyAni(
                                        "bianshen"), t.IsKiller = !0, t.RestSkin(), Laya.timer.once(
                                            1500, this, () => {
                                                r.ClearTween(this.Camera), r.ClearTween(e), this
                                                    .PlayerCtrl.IsMove = !1, t.AtkRangeCtrl(!0, !1), t
                                                        .RayDetectionCtrl(), this.PlayerCtrl.IsKiller ? 2 !=
                                                            this.PlayerCtrl.KillerSkinId && 7 != this.PlayerCtrl
                                                                .KillerSkinId ? this.PlayerCtrl.PlayMyAni("ssidle",
                                                                    1, .3) : this.PlayerCtrl.PlayMyAni("ssidle1", 1,
                                                                        .3) : (this.PlayerCtrl.KillerTarget = e, this
                                                                            .PlayerCtrl.KillerTargetCtrl = t, this
                                                                                .PlayerCtrl.PlayMyAni("roleidle", 1, .3));
                                                for (let i = 0; i < this.EnemyBox.numChildren; i++) {
                                                    let a = this.EnemyBox.getChildAt(i).getComponent(w);
                                                    a.IsKiller ? 2 != a.KillerSkinId && 7 != a
                                                        .KillerSkinId ? a.PlayMyAni("ssidle", 1, .3) : a
                                                            .PlayMyAni("ssidle1", 1, .3) : (a.KillerTarget =
                                                                e, a.KillerTargetCtrl = t, a.PlayMyAni(
                                                                    "roleidle", 1, .3))
                                                }
                                                r.MoveTo(this.Camera, new Laya.Vector3(this.Player
                                                    .transform.position.x, this.Player.transform
                                                        .position.y + 9, this.Player.transform
                                                            .position.z - 5.5), 1e3, Laya.Ease.sineOut,
                                                    Laya.Handler.create(this, () => {
                                                        r.ClearTween(this.Camera), this
                                                            .IsStartGame = !0, this.CameraCtrl
                                                                .IsLerp = !0, D._Instance
                                                                    .IsCountDown = !0;
                                                        for (let e = 0; e < this.PropBox
                                                            .numChildren; e++) {
                                                            let t = this.PropBox.getChildAt(e);
                                                            t.getComponent(Laya
                                                                .PhysicsCollider) && (t
                                                                    .getComponent(Laya
                                                                        .PhysicsCollider)
                                                                    .enabled = !0)
                                                        }
                                                        let e = this.owner.getChildByName(
                                                            "Level");
                                                        for (let i = 0; i < e
                                                            .numChildren; i++) {
                                                            let a = e.getChildAt(i),
                                                                s = a.getComponent(Laya
                                                                    .PhysicsCollider);
                                                            s && "killermen" == a.name && (s
                                                                .collisionGroup = Laya
                                                                    .Physics3DUtils
                                                                    .COLLISIONFILTERGROUP_CUSTOMFILTER6,
                                                                this.IsKiller ? (t.Rig3D
                                                                    .collisionGroup = Laya
                                                                        .Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER1,
                                                                    t.Rig3D.canCollideWith =
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER2 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER3 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER4 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER5 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER6,
                                                                    s.canCollideWith = Laya
                                                                        .Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER1
                                                                ) : (t.Rig3D
                                                                    .collisionGroup = Laya
                                                                        .Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER2,
                                                                    t.Rig3D.canCollideWith =
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER1 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER2 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER3 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER5 |
                                                                    Laya.Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER6,
                                                                    s.canCollideWith = Laya
                                                                        .Physics3DUtils
                                                                        .COLLISIONFILTERGROUP_CUSTOMFILTER2
                                                                ))
                                                        }
                                                    }))
                                            })
                                }), 1300)
                }
            })
        }
        CreateScene() {
            let e = 1;
            e = s.MaxLevel > 20 ? Math.round(19 * Math.random() + 1) : s.MaxLevel;
            let t = T.LevelData;
            for (let i = 0; i < t.length; i++)
                if (t[i].level == e) {
                    t[i].mapid;
                    let a = this.owner.addChild(b.SelectLevel(e));
                    a.name = "Level", a.transform.position = new Laya.Vector3(0, 0, 0), a.transform
                        .rotationEuler = new Laya.Vector3(0, 0, 0);
                    for (let e = 0; e < a.numChildren; e++) {
                        let t = a.getChildAt(e),
                            i = t.getComponent(Laya.PhysicsCollider);
                        i && (i.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3, i
                            .canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1 | Laya
                                .Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2);
                        for (let e = 0; e < t.numChildren; e++) {
                            let i = t.getChildAt(e).getComponent(Laya.PhysicsCollider);
                            i && (i.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3, i
                                .canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1 |
                                Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2)
                        }
                    }
                    for (let e = 0; e < a.numChildren; e++) {
                        let t = a.getChildAt(e);
                        "men" == t.name.substring(0, 3) && this.ExitData.push(t)
                    }
                    let n = t[i].rolenum,
                        r = t[i].roleposdata;
                    this.KillerId = t[i].killerid, e > 10 && (r.sort(() => .5 - Math.random()), Math.random() >
                        .7 ? this.KillerId = 1 : this.KillerId = Math.round(Math.random() * (n - 1) + 2)),
                        this.TryKillerId = Math.round(Math.random() * (n - 1) + 2), this.CreatePlayer(r[0]);
                    let o = [Math.round(6 * Math.random() + 1), Math.round(6 * Math.random() + 1), Math.round(
                        6 * Math.random() + 1), Math.round(6 * Math.random() + 1), Math.round(6 * Math
                            .random() + 1)];
                    o.sort(() => .5 - Math.random());
                    let h = [Math.round(7 * Math.random() + 1), Math.round(7 * Math.random() + 1), Math.round(
                        7 * Math.random() + 1), Math.round(7 * Math.random() + 1), Math.round(7 * Math
                            .random() + 1)],
                        c = !1;
                    for (let e = 0; e < s.RoleSkinData.length; e++)
                        if (6 == s.RoleSkinData[e]) {
                            c = !0;
                            break
                        } 1 != this.KillerId || c ? (h = [Math.round(7 * Math.random() + 1), Math.round(7 * Math
                            .random() + 1), Math.round(7 * Math.random() + 1), Math.round(7 * Math
                                .random() + 1), Math.round(7 * Math.random() + 1)]).sort(() => .5 - Math.random()) :
                            ((h = [Math.round(7 * Math.random() + 1), Math.round(7 * Math.random() + 1), Math.round(
                                7 * Math.random() + 1), Math.round(7 * Math.random() + 1), Math.round(
                                    7 * Math.random() + 1)])[0] = 6, h[1] = 6);
                    let d = [];
                    d = 1 == this.KillerId ? Math.random() > .5 ? [s.DowerData[0].dowerlv + 1, 0, 0, 0, 0, 0,
                        0] : [s.DowerData[0].dowerlv + 1, s.DowerData[0].dowerlv + 1, 0, 0, 0, 0, 0] : 2 != this
                            .KillerId ? [s.DowerData[0].dowerlv, 0, 0, 0, 0, 0, 0] : [0, s.DowerData[0].dowerlv, 0,
                        0, 0, 0, 0, 0
                    ];
                    let p = l.GetDataRandom({
                        arry: s.EnemyNameData,
                        range: n
                    });
                    for (let e = 0; e < n; e++) this.CreateEnemy(r[e + 1], e + 2, o[e], h[e], p[e], d[e]);
                    this.MaxRoleLiveNum = n, this.RoleLiveNum = n;
                    let m = t[i].waterposdata;
                    for (let e = 0; e < m.length; e++) this.CreateProp("Water", m[e]);
                    let y = t[i].diamondposdata;
                    for (let e = 0; e < y.length; e++) this.CreateProp("Diamond", y[e]);
                    let S = t[i].lampposdata;
                    for (let e = 0; e < S.length; e++) this.CreateProp("Lamp", S[e]);
                    let I = t[i].boxposdata;
                    for (let e = 0; e < I.length; e++) this.CreateProp("Box", I[e]);
                    let g = t[i].switchposdata;
                    this.MaxSwitchNum = g.length, this.SwitchNum = 0;
                    for (let e = 0; e < g.length; e++) this.CreateProp("Switch", g[e], 0, e);
                    let u = t[i].speedposdata;
                    for (let e = 0; e < u.length; e++) this.CreateProp("Speed", u[e]);
                    let k = t[i].keyposdata;
                    for (let e = 0; e < k.length; e++) this.CreateProp("Key", k[e]);
                    let L = ["Lamp", "Water", "Speed", "Box"],
                        w = t[i].randompropposdata;
                    for (let e = 0; e < w.length; e++) {
                        let t = l.GetDataRandom({
                            arry: L,
                            range: 1
                        })[0];
                        this.CreateProp(t, w[e])
                    }
                    this.YanWuPosData = t[i].dooreffectposdata;
                    let f = l.GetDataRandom({
                        arry: s.WallMatData,
                        range: 2
                    });
                    b.DiMianMat.albedoTexture = f[0], b.BarrierMat.albedoTexture = f[1];
                    let v = l.GetDataRandom({
                        arry: this.BgColorData,
                        range: 1
                    })[0];
                    this.Bg.meshRenderer.material.albedoColor = new Laya.Vector4(v.bgx / 255, v.bgy / 255, v
                        .bgz / 255, 1);
                    break
                }
        }
        CreatePlayer(e) {
            let t = parseInt(e.split(",")[0]),
                i = parseInt(e.split(",")[1]);
            this.Player = this.owner.addChild(C.SelectRole()), this.Player.name = "You", this.Player
                .transform.position = new Laya.Vector3(-t, 0, i), this.Player.transform.rotationEuler = new Laya
                    .Vector3(0, -180, 0), this.PlayerCtrl = this.Player.addComponent(f), this.PlayerCtrl.MyId = 1,
                this.PlayerCtrl.MyName = s.Name, this.PlayerCtrl.KillerSkinId = s.KillerSkinId, this.PlayerCtrl
                    .RoleSkinId = s.RoleSkinId, this.PlayerCtrl.AtkRangeCtrl(!1, !0), this.PlayerCtrl
                        .CreateMyName(), this.PlayerCtrl.CreateMyBadge(), this.Camera.transform.position = new Laya.Vector3(
                            D._Instance.Player.transform.position.x, D._Instance.Player.transform.position.y + 9, D
                                ._Instance.Player.transform.position.z - 5.5), this.Camera.transform.rotationEuler =
                new Laya.Vector3(-55, 180, 0)
        }
        CreateEnemy(e, t, i, a, s, n) {
            let l = parseInt(e.split(",")[0]),
                r = parseInt(e.split(",")[1]),
                o = this.EnemyBox.addChild(C.SelectRole());
            o.name = "Enemy", o.transform.position = new Laya.Vector3(-l, 0, r), o.transform.rotationEuler =
                new Laya.Vector3(0, 360 * Math.random(), 0);
            let h = o.addComponent(w);
            h.MyId = t, h.MyName = s, h.KillerSkinId = i, h.RoleSkinId = a, h.AtkRangeCtrl(!1, !0), h
                .CreateMyName(), h.MoveSpeedDowerLv = n, h.MoveSpeedCtrl()
        }
        CreateProp(e, t, i = 360 * Math.random(), a = 0) {
            let s = parseInt(t.split(",")[0]),
                n = parseInt(t.split(",")[1]),
                l = this.PropBox.addChild(L.SelectProp(e));
            if (l.name = e, l.transform.position = new Laya.Vector3(-s, .01, n), l.transform.rotationEuler =
                new Laya.Vector3(0, i, 0), l.getComponent(Laya.PhysicsCollider) && (l.getComponent(Laya
                    .PhysicsCollider).enabled = !1), l.addComponent(k).MyId = a, "Switch" == e) {
                l.getComponent(Laya.PhysicsCollider).enabled = !1, l.transform.position = new Laya.Vector3(-s, -
                    .25, n);
                let e = {};
                e.switch = l, e.id = a, e.isrun = !1, this.SwitchData.push(e)
            } else "Water" == e && (l.transform.position = new Laya.Vector3(-s, .03, n));
            let r = l.getComponent(Laya.PhysicsCollider);
            r && ("Diamond" == e ? (r.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4, r
                .canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1) : (r
                    .collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, r
                        .canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1 | Laya
                            .Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2))
        }
        CreateJiaZi(e, t) {
            let i = this.PropBox.addChild(L.SelectProp("JiaZi"));
            i.transform.position = new Laya.Vector3(e.x, 0, e.z), i.transform.rotationEuler = new Laya.Vector3(
                0, 360 * Math.random(), 0);
            let a = i.addComponent(k);
            a.IsKiller = t, a.MyId = this.JiaZiId, this.JiaZiId++;
            let s = i.getComponent(Laya.PhysicsCollider);
            s.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5, s.canCollideWith = Laya
                .Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2
        }
        CreateEffect(e, t, i, a, s) {
            switch (e) {
                case "BianShen":
                    this.EffectBox.addChild(c._Instance.effect_bianshen).addComponent(h).Target = t;
                    break;
                case "Gold":
                    n.PlaySound("cion"), this.EffectBox.addChild(c._Instance.effect_gold).addComponent(h)
                        .Target = t;
                    break;
                case "Diamond":
                    this.EffectBox.addChild(c._Instance.effect_diamond).addComponent(h).TargetPos = t.transform
                        .position;
                    break;
                case "XuanYun":
                    let s = this.EffectBox.addChild(c._Instance.effect_xuanyun).addComponent(h);
                    s.ReMoveMaxIndex = i, s.Target = t, s.MyId = a;
                    break;
                case "Help":
                    let l = this.EffectBox.addChild(c._Instance.effect_help).addComponent(h);
                    l.ReMoveMaxIndex = i, l.Target = t, l.MyId = a;
                    break;
                case "JiaoYin":
                    let r = this.EffectBox.addChild(c._Instance.effect_jiaoyin).addComponent(h);
                    r.ReMoveMaxIndex = i, r.Target = t, r.MyId = a;
                    break;
                case "JianSu":
                    let o = this.EffectBox.addChild(c._Instance.effect_jiansu).addComponent(h);
                    o.ReMoveMaxIndex = i, o.Target = t, o.MyId = a;
                    break;
                case "JiaSu":
                    let d = this.EffectBox.addChild(c._Instance.effect_jiasu).addComponent(h);
                    d.ReMoveMaxIndex = i, d.Target = t;
                    break;
                case "Lamp":
                    let p = this.EffectBox.addChild(c._Instance.effect_lamp).addComponent(h);
                    p.ReMoveMaxIndex = i, p.Target = t, p.MyId = a;
                    break;
                case "Bing":
                    this.EffectBox.addChild(c._Instance.effect_bing).addComponent(h).TargetPos = new Laya
                        .Vector3(t.transform.position.x, .02, t.transform.position.z)
            }
        }
        CreateDoorEffect() {
            for (let e = 0; e < this.YanWuPosData.length; e++) {
                let t = parseFloat(this.YanWuPosData[e].split(",")[0]),
                    i = parseFloat(this.YanWuPosData[e].split(",")[1]);
                D._Instance.EffectBox.addChild(c._Instance.effect_yanwu).transform.position = new Laya.Vector3(-
                    t, .02, i)
            }
        }
        NameLabelCtrl(e) {
            for (let t = 0; t < Laya.stage.numChildren; t++) {
                let i = Laya.stage.getChildAt(t);
                "MyNameLabel" != i.name && "MyBadge" != i.name || (i.visible = e)
            }
        }
        UpdateLevel() {
            s.MaxLevel++, console.log("更新关卡", s.MaxLevel), d.save_int("MaxLevel", s.MaxLevel)
        }
        UpdateGold(e) {
            s.Gold += e, d.save_int("Gold", s.Gold)
        }
        UpdateDiamond(e) {
            s.Diamond += e, d.save_int("Diamond", s.Diamond)
        }
        UnLockSkin(e, t) {
            let i = "";
            switch (e) {
                case 1:
                    s.RoleSkinData.push(t), i = JSON.stringify(s.RoleSkinData), d.save_string("RoleSkinData",
                        i);
                    break;
                case 2:
                    s.KillerSkinData.push(t), i = JSON.stringify(s.KillerSkinData), d.save_string(
                        "KillerSkinData", i)
            }
        }
        AlterSkin(e, t) {
            switch (e) {
                case 1:
                    s.RoleSkinId = t, d.save_int("RoleSkinId", s.RoleSkinId);
                    break;
                case 2:
                    s.KillerSkinId = t, d.save_int("KillerSkinId", s.KillerSkinId)
            }
        }
        UpdateDowerLv(e, t = !0) {
            for (let i = 0; i < s.DowerData.length; i++)
                if (s.DowerData[i].dowertype == e) {
                    s.DowerData[i].dowerclicklv++, s.DowerData[i].dowerclicklv > 5 && (s.DowerData[i]
                        .dowerclicklv = 1, s.DowerData[i].dowerlv++, s.DowerData[i].dowerlv >= 100 && (s
                            .DowerData[i].dowerlv = 100), t && I.OpenTips("upgrade successful!"));
                    break
                } let i = JSON.stringify(s.DowerData);
            d.save_string("DowerData", i)
        }
        UpdateSignData() {
            s.IsSign = 1, s.SignTimeStamp = new Date((new Date).toLocaleDateString()).getTime() / 1e3 + 86400, d
                .save_int("SignTimeStamp", s.SignTimeStamp), s.NextSignDay++, d.save_int("NextSignDay", s
                    .NextSignDay)
        }
        BuyProp(e) {
            for (let t = 0; t < s.PropData.length; t++)
                if (s.PropData[t].propid == e) {
                    s.PropData[t].propnum++;
                    break
                } let t = JSON.stringify(s.PropData);
            d.save_string("PropData", t)
        }
        UserProp(e) {
            for (let t = 0; t < s.PropData.length; t++)
                if (s.PropData[t].propid == e) {
                    s.PropData[t].propnum--;
                    break
                } let t = JSON.stringify(s.PropData);
            d.save_string("PropData", t)
        }
        AlterEquipState(e, t, i) {
            for (let a = 0; a < s.EquipData.length; a++)
                if (s.EquipData[a].equipid == e) {
                    s.EquipData[a].equipstate = t;
                    let e = s.EquipData[a].equipid,
                        n = s.EquipData[a].equiptype;
                    0 == t ? (s.EquipData[a].equiptimestamp = 0, 1 == n ? 1 == e ? s.KillerWeapId = 0 : s
                        .KillerMaskId = 0 : 3 == e ? s.RoleWeapId = 0 : s.RoleMaskId = 0) : 1 == t ? (i && (
                            s.EquipData[a].equiptimestamp = (new Date).getTime() / 1e3), 1 == n ? 1 == e ? s
                                .KillerWeapId = 0 : s.KillerMaskId = 0 : 3 == e ? s.RoleWeapId = 0 : s.RoleMaskId =
                                    0) : 2 == t && (1 == n ? 1 == e ? s.KillerWeapId = e : s.KillerMaskId = e : 3 == e ?
                                        s.RoleWeapId = e : s.RoleMaskId = e);
                    break
                } let a = JSON.stringify(s.EquipData);
            d.save_string("EquipData", a)
        }
        TwoPointRotation2D(e, t) {
            let i = t.x - e.x,
                a = t.y - e.y,
                s = Math.abs(a) / Math.abs(i),
                n = 0;
            return a >= 0 && i <= 0 ? n = 180 * Math.atan(s) / Math.PI - 90 : a >= 0 && i >= 0 ? n = 90 - 180 *
                Math.atan(s) / Math.PI : a <= 0 && i <= 0 ? n = 180 * -Math.atan(s) / Math.PI - 90 : a <= 0 &&
                    i >= 0 && (n = 180 * Math.atan(s) / Math.PI + 90), n
        }
    }
    class B extends e.Scene.ChestPanelUI {
        constructor() {
            super(), this.ChestAwardData = [68, 68, 88, 88, 88, 100, 100, 100, 100, 188, 188, 188, 188, 200,
                200, 288, 288, 388, 588, 688
            ], this.ChestData = [{
                id: 1,
                isvideo: 0,
                awardnum: 68,
                isget: 0
            }, {
                id: 2,
                isvideo: 0,
                awardnum: 88,
                isget: 0
            }, {
                id: 3,
                isvideo: 0,
                awardnum: 100,
                isget: 0
            }, {
                id: 4,
                isvideo: 0,
                awardnum: 188,
                isget: 0
            }, {
                id: 5,
                isvideo: 0,
                awardnum: 200,
                isget: 0
            }, {
                id: 6,
                isvideo: 0,
                awardnum: 288,
                isget: 0
            }, {
                id: 7,
                isvideo: 0,
                awardnum: 388,
                isget: 0
            }, {
                id: 8,
                isvideo: 0,
                awardnum: 588,
                isget: 0
            }, {
                id: 9,
                isvideo: 0,
                awardnum: 688,
                isget: 0
            }], this.KeyNum = 3
        }
        onAwake() {
            B._Instance = this, a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.GetKeyBtn, this
                .GetKeyBtn1, this.SkipBtn, this.SkipBtn1
            ]), this.GetKeyBtn.on(Laya.Event.MOUSE_DOWN, this, this.GetKey), this.GetKeyBtn1.on(Laya.Event
                .MOUSE_DOWN, this, this.GetKey), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), this
                    .SkipBtn1.on(Laya.Event.CLICK, this, this.Skip), this.KuangBtn.on(Laya.Event.CLICK, this, this
                        .Kuang), this.GouBtn.on(Laya.Event.CLICK, this, this.Gou), a.SetBtnBottom(this.BottomBox,
                            280);
            let e = l.GetDataRandom({
                arry: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                range: 6
            });
            for (let t = 0; t < this.ChestData.length; t++)
                for (let i = 0; i < e.length; i++) this.ChestData[t].id == e[i] && (this.ChestData[t].isvideo =
                    1);
            this.SkipBtn1.visible = !1, this.KeyRefresh(), this.ChestSet()
        }
        KeyRefresh() {
            if (this.ChestAwardData.length > 0)
                if (this.KeyNum > 0) {
                    this.BottomBox.visible = !1, this.KeyBox.visible = !0;
                    for (let e = 0; e < this.KeyBox.numChildren; e++) {
                        let t = this.KeyBox.getChildAt(e);
                        e <= this.KeyNum - 1 ? t.skin = "res/Key/yaoshi1.png" : t.skin = "res/Key/yaoshi2.png"
                    }
                } else this.SkipBtn1.visible = !1, this.BottomBox.visible = !0, this.KeyBox.visible = !1, 1 == s
                    .BannerSwitch && 1 == s.TotalSwitch ? (this.ChestBox.visible = !1, this.GetKeyBtn1
                        .visible = !1, this.SkipBtn.visible = !1, Laya.timer.once(s.ButtonDelay, this, () => {
                            this.ChestBox.visible = !0, this.GetKeyBtn1.visible = !0
                        })) : (this.ChestBox.visible = !1, this.GetKeyBtn1.visible = !1, this.SkipBtn
                            .visible = !1, Laya.timer.once(s.ButtonDelay, this, () => {
                                this.SkipBtn.visible = !0
                            }));
            else this.BottomBox.visible = !0, this.KeyBox.visible = !1, this.ChestBox.visible = !1, this
                .GetKeyBtn1.visible = !1, this.GetKeyBtn.visible = !1, this.SkipBtn1.visible = !1, this.SkipBtn
                    .visible = !0
        }
        ChestSet() {
            this.ChestList.itemRender = _, this.ChestList.array = this.ChestData, this.ChestList.renderHandler =
                Laya.Handler.create(this, this.freshList1, null, !1)
        }
        freshList1(e, t) {
            e.setShow(this.ChestData[t])
        }
        onEnable() { }
        GetKey() {
            n.PlaySound("click"), m.CreateVideoAd(1, Laya.Handler.create(this, this.GetKeyCallBack), Laya
                .Handler.create(this, this.GetKeyFailCallBack), Laya.Handler.create(this, () => {
                    I.ShareApp(Laya.Handler.create(this, this.GetKeyCallBack), Laya.Handler.create(this,
                        this.GetKeyFailCallBack))
                }))
        }
        GetKeyCallBack() {
            this.SkipBtn1.visible = !0, this.KeyNum = 3, this.KeyRefresh(), n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        GetKeyFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        Skip() {
            n.PlaySound("click"), Laya.View.open("Scene/SettlePanel.scene")
        }
        Kuang() {
            n.PlaySound("click"), this.KuangBtn.visible = !1, this.GouBtn.visible = !0, this.GouTP.visible = !0,
                this.GetKeyBtn1.visible = !0, this.SkipBtn.visible = !1
        }
        Gou() {
            n.PlaySound("click"), this.KuangBtn.visible = !0, this.GouBtn.visible = !1, this.GouTP.visible = !1,
                this.GetKeyBtn1.visible = !1, this.SkipBtn.visible = !0
        }
        onDisable() { }
    }
    class _ extends e.Scene.ChestItemUI {
        constructor() {
            super()
        }
        onAwake() {
            this.AddBtnAnimation([this])
        }
        setShow(e) {
            e && (1 == e.isget ? (this.bg1.visible = !1, this.bxtp.visible = !1, this.bg2.visible = !0, this
                .jbtp.visible = !0, this.awardlabel.visible = !0, this.awardlabel.text = "x" + e
                    .awardnum) : (this.bg1.visible = !0, 1 == e.isvideo && 1 == s.BannerSwitch && 1 == s
                        .TotalSwitch ? (this.bxtp.visible = !1, this.videobxtp.visible = !0) : (this.bxtp
                            .visible = !0, this.videobxtp.visible = !1), this.bg2.visible = !1, this.jbtp
                                .visible = !1, this.awardlabel.visible = !1), this.on(Laya.Event.MOUSE_DOWN, this, this
                                    .OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), 0 == e.isget ? B._Instance.KeyNum > 0 ? 1 == e.isvideo && 1 == s
                .BannerSwitch && 1 == s.TotalSwitch ? m.CreateVideoAd(1, Laya.Handler.create(this, this
                    .OpenChestCallBack, [e])) : this.OpenChestCallBack(e) : I.OpenTips("Not enough keys!") : I.OpenTips(
                        "The reward has been won!")
        }
        OpenChestCallBack(e) {
            B._Instance.KeyNum--;
            let t = l.GetDataRandom({
                arry: B._Instance.ChestAwardData,
                range: 1
            })[0];
            D._Instance.UpdateGold(t), I.OpenTips("Coins +" + t);
            for (let i = 0; i < B._Instance.ChestData.length; i++)
                if (B._Instance.ChestData[i].id == e.id) {
                    B._Instance.ChestData[i].awardnum = t, B._Instance.ChestData[i].isget = 1;
                    break
                } let i = [];
            for (let e = 0; e < B._Instance.ChestAwardData.length; e++) B._Instance.ChestAwardData[e] != t && i
                .push(B._Instance.ChestAwardData[e]);
            B._Instance.ChestAwardData = i, B._Instance.KeyRefresh(), B._Instance.ChestSet()
        }
        AddBtnAnimation(e) {
            for (let t = 0; t < e.length; t++) e[t].off(Laya.Event.MOUSE_DOWN, this, this.ScaleBig), e[t].off(
                Laya.Event.MOUSE_UP, this, this.ScaleSmall), e[t].off(Laya.Event.MOUSE_OUT, this, this
                    .ScaleSmall), e[t].on(Laya.Event.MOUSE_DOWN, this, this.ScaleBig, [e[t]]), e[t].on(Laya
                        .Event.MOUSE_UP, this, this.ScaleSmall, [e[t]]), e[t].on(Laya.Event.MOUSE_OUT, this, this
                            .ScaleSmall, [e[t]])
        }
        ScaleBig(e) {
            Laya.Tween.to(e, {
                scaleX: .9,
                scaleY: .9
            }, 50), e.zOrder = 1
        }
        ScaleSmall(e) {
            Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 50), e.zOrder = 0
        }
    }
    class P extends Laya.Script {
        constructor() {
            super(), this.isshowbannerAd = !0, this.BtnBottom = 280, this.ToBottom = 280, this.ConfigList = [.9,
                .8, .3
            ], this.BannerObbs = 0, this.IsUplv = !0, this.MiniData = [], this.scroll = 0, this.IsMove = 60
        }
        onAwake() {
            if (this.onHide(), this.BannerObbs = 100 * Math.random(), i.IsIphoneX ? this.ToBottom = 320 : this
                .ToBottom = 280, 1 == s.BannerSwitch && 1 == s.TotalSwitch && this.BannerObbs < s.BannerObbs)
                switch (this.owner.name) {
                    case "OverPanel":
                        this.BtnBottom = 120;
                        break;
                    default:
                        i.IsIphoneX ? this.BtnBottom = 320 : this.BtnBottom = 280
                } else i.IsIphoneX ? this.BtnBottom = 320 : this.BtnBottom = 280;
            switch (this.owner.name) {
                case "LoadingExportPanel":
                    if (1 == s.BannerSwitch && 1 == s.TotalSwitch) {
                        let e = m.getnotshoworclickBannerAd(3);
                        e ? (this.bannerConfig = m.compareclickleastBannerAd(e), Laya.timer.once(s
                            .LoadingExportBannerDelay + 2e3, this, this.showbannerAd)) : (this
                                .bannerConfig = m.getclickleastBannerAd(), this.bannerConfig && Laya.timer.once(
                                    s.LoadingExportBannerDelay + 2e3, this, this.showbannerAd))
                    }
                    break;
                case "StartPanel":
                    break;
                case "OverPanel":
                    if (this.SkipBtn = this.owner.getChildByName("SkipBtn"), this.SkipBtn.bottom = this
                        .BtnBottom, 1 == s.BannerSwitch && 1 == s.TotalSwitch && this.BannerObbs < s.BannerObbs
                    ) {
                        let e = m.getnotshoworclickBannerAd(3);
                        e ? (this.bannerConfig = m.compareclickleastBannerAd(e), Laya.timer.once(s
                            .BannerDelayTime, this, this.showbannerAd)) : (this.bannerConfig = m
                                .getclickleastBannerAd(), this.bannerConfig && Laya.timer.once(s
                                    .BannerDelayTime, this, this.showbannerAd), !this.bannerConfig && this
                                        .showExport())
                    } else this.ConfigList = [0, 0, 0], this.bannerConfig = m.getnotshoworclickBannerAd(1), this
                        .bannerConfig ? this.showbannerAd() : m.createBannerAd(m.BannerAdIdList[0], Laya.Handler
                            .create(this, this.createbannerAdcallback, [1]), Laya.Handler.create(this, this
                                .createbannerAdfailcallback));
                    break;
                case "ChestPanel":
                case "DayGiftPanel":
                case "EasterEggPanel":
                case "ExportPanel":
                case "GetAwardPanel":
                case "HotExportPanel":
                case "LotteryPanel":
                case "SetPanel":
                case "SettlePanel":
                case "ShopPanel":
                case "SignPanel":
                case "TrySkinPanel":
                    this.bannerConfig = m.getnotshoworclickBannerAd(1), this.bannerConfig ? this
                        .showbannerAd() : m.createBannerAd(m.BannerAdIdList[0], Laya.Handler.create(this, this
                            .createbannerAdcallback, [1]), Laya.Handler.create(this, this
                                .createbannerAdfailcallback))
            }
        }
        createbannerAdcallback(e) {
            this.bannerConfig = m.getnotshoworclickBannerAd(e), this.showbannerAd()
        }
        createbannerAdfailcallback() {
            this.bannerConfig = m.getclickleastBannerAd(), this.bannerConfig ? this.showbannerAd() : this
                .showExport()
        }
        showlatebannerAd(e) {
            let t = m.getnotshoworclickBannerAd(e);
            this.bannerConfig = t ? m.compareclickleastBannerAd(t) : m.getclickleastBannerAd(), this
                .showbannerAd(), Laya.timer.once(2e3, this, this.hidebannerAd)
        }
        showbannerAd() {
            this.bannerConfig && this.isshowbannerAd && (this.bannerConfig.banner.show(), this.bannerConfig
                .isshow = !0, this.bannerConfig.showstate = 1, "LoadingExportPanel" == this.owner.name &&
                Laya.timer.once(2e3, this, this.hidebannerAd), "OverPanel" == this.owner.name && Laya.Tween
                    .to(this.SkipBtn, {
                        bottom: this.ToBottom
                    }, 1e3 * this.ConfigList[2], null, null, 1e3 * this.ConfigList[1]), console.log(this
                        .bannerConfig), console.log(m.BannerAdList))
        }
        hidebannerAd() {
            this.bannerConfig && (this.bannerConfig.banner.hide(), this.bannerConfig.showstate = 0, console.log(
                this.bannerConfig), console.log(m.BannerAdList))
        }
        onHide() {
            window.wx && window.wx.onHide(this.onHidecallback.bind(this))
        }
        onHidecallback() {
            !this.bannerConfig || this.bannerConfig && 1 != this.bannerConfig.showstate || (m.setbannerAdclick(
                this.bannerConfig.id), console.log(this.bannerConfig), console.log(m.BannerAdList))
        }
        showExport() {
            s.ExportSwitch && "StartPanel" != this.owner.name && s.DownExportData.length > 0 && (this
                .DownExportTP = this.owner.getChildByName("DownExportTP"), this.DownExportTP.visible = !0,
                this.MiniSet())
        }
        MiniSet() {
            this.DownExportList = this.owner.getChildByName("DownExportTP").getChildByName("DownExportList"),
                this.MiniData = s.DownExportData, this.DownExportList.itemRender = R, this.DownExportList
                    .hScrollBarSkin = null, this.DownExportList.array = this.MiniData, this.DownExportList
                        .renderHandler = Laya.Handler.create(this, this.freshList1, null, !1), this.MiniScoll()
        }
        freshList1(e, t) {
            e.setShow(this.MiniData[t])
        }
        MiniScoll() {
            this.DownExportList.length <= 5 || (Laya.timer.loop(30, this, this.MiniScollLoop), this
                .DownExportList.on(Laya.Event.MOUSE_DOWN, this, () => {
                    this.IsMove = 0
                }))
        }
        MiniScollLoop() {
            this.DownExportList.scrollBar.max && (this.IsMove >= 60 ? 0 == this.scroll ? (this.DownExportList
                .scrollBar.value += 2, this.DownExportList.scrollBar.value >= this.DownExportList
                    .scrollBar.max && (this.scroll = this.DownExportList.scrollBar.max)) : (this
                        .DownExportList.scrollBar.value -= 2, this.DownExportList.scrollBar.value <= 0 && (this
                            .scroll = 0)) : this.IsMove++)
        }
        onDisable() {
            switch (this.isshowbannerAd = !1, Laya.timer.clearAll(this), window.wx && window.wx.offHide(), this
                .owner.name) {
                case "LoadingExportPanel":
                    if (1 == s.BannerSwitch && 1 == s.TotalSwitch) {
                        this.hidebannerAd();
                        let e = m.getnotshoworclickBannerAd(3);
                        (!e || e && m.getIsclickBannerAd(e.adtype)) && m.createBannerAd(m.BannerAdIdList[2])
                    }
                    break;
                case "StartPanel":
                    break;
                case "OverPanel":
                    if (this.hidebannerAd(), 1 == s.BannerSwitch && 1 == s.TotalSwitch && this.BannerObbs < s
                        .BannerObbs) {
                        let e = m.getnotshoworclickBannerAd(3);
                        (!e || e && m.getIsclickBannerAd(e.adtype)) && m.createBannerAd(m.BannerAdIdList[2])
                    }
                    break;
                case "LateChestPanel":
                    this.hidebannerAd();
                    let e = m.getnotshoworclickBannerAd(2);
                    (!e || e && m.getIsclickBannerAd(e.adtype)) && m.createBannerAd(m.BannerAdIdList[1]);
                    break;
                case "ChestPanel":
                case "DayGiftPanel":
                case "EasterEggPanel":
                case "ExportPanel":
                case "GetAwardPanel":
                case "HotExportPanel":
                case "LotteryPanel":
                case "SetPanel":
                case "SettlePanel":
                case "ShopPanel":
                case "SignPanel":
                case "TrySkinPanel":
                    this.hidebannerAd()
            }
        }
    }
    class R extends e.Scene.ExportSmallItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this.exporticon.skin = e
                .pathName, this.exportlabel.text = e.name, this.on(Laya.Event.MOUSE_DOWN, this, this
                    .OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class E extends e.Scene.StartPanelUI {
        constructor() {
            super(), this.KillerId = 1, this.RoleId = 1, this.KillerData = {}, this.RoleData = {}, this
                .AlterBuffer = 0, this.IsGiftConutTimer = !1, this.EasterEggIndex = 120, this.ClickNum = 0, this
                    .DowerData = {}, this.currlv = 0
        }
        onAwake() {
            n.PlayBGM("bgm", 1), E._Instance = this, s.IsAuthor || "You" != s.Name || "res/yktp.jpg" != s.Head ||
                (s.IsAuthor = !0, I.CreateAuthorBtn()), this.GameClubBtn = I.CreateGameClubBtn(), a.MatchScreen(
                    this), a.AddBtnAnimation([this.SetBtn, this.btn_music, this.HotGameBtn, this.CourseBtn, this.MoreGameBtn,
                    this.KillerRankBtn, this.LeftBtn, this.RightBtn, this.KillerBtn, this.RoleBtn, this
                        .LotteryBtn, this.SignBtn, this.GiftBtn, this.StartGameBtn, this.ShopBtn, this.SkinBtn,
                    this.EasterEggBtn
                    ]), a.TopUIMatch(this.TopBox, 0);
            let e = Laya.stage.height / 1334,
                t = Laya.stage.width / 750;
            e >= t ? this.BgBox.scale(e, e) : this.BgBox.scale(t, t),
                this.SetBtn.on(Laya.Event.CLICK, this, this.Set),
                this.SkinBtn.on(Laya.Event.CLICK, this, this.Skin),
                this.ShopBtn.on(Laya.Event.CLICK, this, this.Shop),
                this.CourseBtn.on(Laya.Event.CLICK, this, this.Course),
                this.StartGameBtn.on(Laya.Event.CLICK, this, this.StartGame),
                this.EasterEggBtn.on(Laya.Event.CLICK, this, this.EasterEgg),
                this.GiftBtn.on(Laya.Event.CLICK, this, this.Gift),
                this.LotteryBtn.on(Laya.Event.CLICK, this, this.Lottery),
                this.SignBtn.on(Laya.Event.CLICK, this, this.Sign),
                this.LeftBtn.on(Laya.Event.CLICK, this, this.Left),
                this.RightBtn.on(Laya.Event.CLICK, this, this.Right),
                this.KillerBtn.on(Laya.Event.MOUSE_DOWN, this, this.KillerUser),
                this.RoleBtn.on(Laya.Event.MOUSE_DOWN, this, this.RoleUser),
                this.KillerRankBtn.on(Laya.Event.CLICK, this, this.KillerRank),
                this.HotGameBtn.on(Laya.Event.CLICK, this, this.HotGame),
                this.MoreGameBtn.on(Laya.Event.CLICK, this, this.MoreGame),
                this.btn_music.on(Laya.Event.CLICK, this, this.changeMusic),
                Laya.timer.frameLoop(1, this, this.Update),
                this.HotGameBtnTween(),
                this.ZhiZhenTween(),
                this.GiftRefresh(),
                this.EquipRefresh(),
                this.CreateScene3D(),
                this.LeftBtnTween(),
                this.RightBtnTween(),
                this.DowerData = s.DowerData[0].dowerlv <= s.DowerData[1].dowerlv ? s.DowerData[0] : s.DowerData[1], this.UpLvTP.visible = !0,
                this.DowerSet(), this.BottomSet(), this.MoreGameBtn.visible = s.ExportSwitch, this.HotGameBtn.visible = s.ExportSwitch;
            this.btn_music.skin = window.WebAudioEngine.pause ? "Images/btn_sound_off.png" : "Images/btn_sound_on.png";
        }
        BottomSet() {
            this.GiftBtn.bottom = this.SignBtn.bottom = this.ShopBtn.bottom = 185, this.EasterEggBtn.bottom =
                470, this.jrcdtp.bottom = 455, this.KillerRankBtn.bottom = 460, this.HotGameBtn.bottom = 400,
                this.StartGameBtn.bottom = 330, this.LotteryBtn.bottom = 315, this.SkinBtn.bottom = 315, this
                    .RestPos()
        }
        onOpened(e) {
            e && e[0] && 2 == e[0] && this.EasterEgg()
            window.box_adTwo.visible = true;
            this.addChild(window.box_adTwo);
        }
        onClosed() {
            window.box_adTwo.removeSelf();
        }
        changeMusic() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            Laya.LocalStorage.setItem("Christmas-3d-Maze-Hunt-Or-Catch-musicState", JSON.stringify(window.WebAudioEngine.pause));
            this.btn_music.skin = window.WebAudioEngine.pause ? "Images/btn_sound_off.png" : "Images/btn_sound_on.png";
        }
        onEnable() { }
        EquipRefresh() {
            for (let e = 0; e < s.EquipData.length; e++) {
                let t = s.EquipData[e];
                Math.floor(t.equiptime - (parseInt(((new Date).getTime() / 1e3).toString()) - t
                    .equiptimestamp)) <= 0 && 0 != t.equipstate && (D._Instance.AlterEquipState(t.equipid, 0), I
                        .OpenTips(t.equipname + "Time up!"))
            }
        }
        CreateScene3D() {
            this.Scene3D = Laya.stage.addChild(new Laya.Scene3D), this.Camera = this.Scene3D.addChild(new Laya
                .Camera), this.Camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, this.Camera.transform
                    .position = new Laya.Vector3(0, .1, 6.5), this.Camera.transform.rotationEuler = new Laya
                        .Vector3(0, 0, 0), this.DirectionalLight = this.Scene3D.addChild(new Laya.DirectionLight), this
                            .DirectionalLight.transform.position = new Laya.Vector3(0, 0, 0), this.DirectionalLight
                                .transform.rotationEuler = new Laya.Vector3(0, 0, 180), this.DirectionalLight.color = new Laya
                                    .Vector3(1, 1, 1), this.DirectionalLight.intensity = 1.1, this.Killer = this.Scene3D.addChild(C
                                        .SelectRole("Skin")), this.Killer.transform.rotationEuler = new Laya.Vector3(0, 5, 0), this
                                            .Role = this.Scene3D.addChild(C.SelectRole("Skin")), this.Role.transform.rotationEuler =
                new Laya.Vector3(0, -5, 0), this.RestPos(), this.RefreshBtn(s.KillerSkinId, !0)
        }
        RefreshBtn(e, t) {
            this.KillerId = e, this.RoleId = this.KillerId <= 5 ? this.KillerId : this.KillerId + 1, this
                .RestKillerSkin(this.Killer, this.KillerId, t), this.RestRoleSkin(this.Role, this.RoleId, t);
            let i = T.SkinData;
            for (let e = 0; e < i.length; e++)
                if (i[e].islock = 0, i[e].isuser = 0, 1 == i[e].skintype)
                    for (let t = 0; t < s.RoleSkinData.length; t++) i[e].skinid == s.RoleSkinData[t] && (i[e]
                        .islock = 1), i[e].skinid == s.RoleSkinId && (i[e].isuser = 1), i[e].skinid == this
                            .RoleId && (this.RoleData = i[e]);
                else
                    for (let t = 0; t < s.KillerSkinData.length; t++) i[e].skinid == s.KillerSkinData[t] && (i[
                        e].islock = 1), i[e].skinid == s.KillerSkinId && (i[e].isuser = 1), i[e].skinid ==
                        this.KillerId && (this.KillerData = i[e]);
            if (this.KillerBtn.gray = !1, this.killergoldtp.visible = !1, this.killerzstp.visible = !1, this
                .killervideotp.visible = !1, this.killersytp.visible = !1, this.killerbuylabel.visible = !1,
                this.RoleBtn.gray = !1, this.rolegoldtp.visible = !1, this.rolezstp.visible = !1, this
                    .rolevideotp.visible = !1, this.rolesytp.visible = !1, this.rolebuylabel.visible = !1, 1 == this
                        .KillerData.islock) 1 == this.KillerData.isuser ? (this.killersytp.visible = !0, this.KillerBtn
                            .gray = !0) : (this.killersytp.visible = !0, this.KillerBtn.gray = !1);
            else if (1 == this.KillerData.unlocktype) this.killergoldtp.visible = !0, this.killerbuylabel.text =
                this.KillerData.unlocknum, this.killerbuylabel.visible = !0;
            else if (2 == this.KillerData.unlocktype) this.killerzstp.visible = !0, this.killerbuylabel.text =
                this.KillerData.unlocknum, this.killerbuylabel.visible = !0;
            else if (3 == this.KillerData.unlocktype) switch (this.killervideotp.visible = !0,
                this.killerbuylabel.visible = !0,
                this.KillerData.skinid) {
                    case 2:
                        this.killerbuylabel.text = "0/1";
                        break;
                    case 4:
                        this.killerbuylabel.text = s.KillerSkin4VideoNum + "/" + this.KillerData.unlocknum
                }
            if (1 == this.RoleData.islock) 1 == this.RoleData.isuser ? (this.rolesytp.visible = !0, this.RoleBtn
                .gray = !0) : (this.rolesytp.visible = !0, this.RoleBtn.gray = !1);
            else if (1 == this.RoleData.unlocktype) this.rolegoldtp.visible = !0, this.rolebuylabel.text = this
                .RoleData.unlocknum, this.rolebuylabel.visible = !0;
            else if (2 == this.RoleData.unlocktype) this.rolezstp.visible = !0, this.rolebuylabel.text = this
                .RoleData.unlocknum, this.rolebuylabel.visible = !0;
            else if (3 == this.RoleData.unlocktype) switch (this.rolevideotp.visible = !0, this.rolebuylabel
                .visible = !0, this.RoleData.skinid) {
                    case 2:
                        this.rolebuylabel.text = "0/1";
                        break;
                    case 4:
                        this.rolebuylabel.text = s.RoleSkin4VideoNum + "/" + this.RoleData.unlocknum;
                        break;
                    case 7:
                        this.rolebuylabel.text = s.RoleSkin7VideoNum + "/" + this.RoleData.unlocknum;
                        break;
                    case 8:
                        this.rolebuylabel.text = s.RoleSkin8VideoNum + "/" + this.RoleData.unlocknum
                }
        }
        RestKillerSkin(e, t, i) {
            if (i) {
                let i = l.GetDataRandom({
                    arry: ["win1", "win2", "win3", "ssidle"],
                    range: 1
                })[0];
                2 != t && 7 != t || "ssidle" != i ? e.getComponent(Laya.Animator).play(i) : e.getComponent(Laya
                    .Animator).play("ssidle1")
            }
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                a.active = !1, 0 != s.KillerMaskId ? "KillerMJ2" == a.name && (a.active = !0) : "KillerMask" ==
                    a.name.substring(0, 10) && parseInt(a.name[10]) == t && (a.meshRenderer.material
                        .albedoTexture = s.KillerMaskMatData[t - 1], a.active = !0), 0 != s.KillerWeapId ?
                        "KillerWQ1" == a.name && (a.active = !0) : "KillerWeap" == a.name.substring(0, 10) &&
                        parseInt(a.name[10]) == t && (a.active = !0)
            }
            switch (t) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 6:
                case 7:
                    e.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s
                        .KillerMatData[t - 1], e.getChildByName("zhuyaojiaose").active = !0;
                    break;
                case 4:
                    e.getChildByName("nvhuang").skinnedMeshRenderer.material.albedoTexture = s.KillerMatData[t -
                        1], e.getChildByName("nvhuang").active = !0
            }
        }
        RestRoleSkin(e, t, i) {
            if (i) {
                let t = l.GetDataRandom({
                    arry: ["win1", "win2", "win3", "roleidle"],
                    range: 1
                })[0];
                e.getComponent(Laya.Animator).play(t)
            }
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                if (a.active = !1, 0 != s.RoleMaskId) {
                    let e = "RoleMJ41";
                    switch (t) {
                        case 1:
                        case 2:
                        case 3:
                        case 7:
                            e = "RoleMJ42";
                            break;
                        case 4:
                        case 6:
                        case 8:
                            e = "RoleMJ41";
                            break;
                        case 5:
                            e = "RoleMJ43"
                    }
                    a.name == e && (a.active = !0)
                }
                0 != s.RoleWeapId && "RoleWQ3" == a.name && (a.active = !0), "RoleMask" == a.name.substring(0,
                    8) && parseInt(a.name[8]) == t && (a.meshRenderer.material.albedoTexture = s
                        .RoleMaskMatData[t - 1], a.active = !0), "RoleWeap" == a.name.substring(0, 8) &&
                        parseInt(a.name[8]) == t && (a.active = !0)
            }
            switch (t) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 7:
                    e.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s.RoleMatData[
                        t - 1], e.getChildByName("zhuyaojiaose").active = !0;
                    break;
                case 4:
                    e.getChildByName("baixuegongzhu").skinnedMeshRenderer.material.albedoTexture = s
                        .RoleMatData[t - 1], e.getChildByName("baixuegongzhu").active = !0;
                    break;
                case 6:
                    e.getChildByName("yvtu").skinnedMeshRenderer.material.albedoTexture = s.RoleMatData[t - 1],
                        e.getChildByName("yvtu").active = !0;
                    break;
                case 8:
                    e.getChildByName("xiaohongmao").skinnedMeshRenderer.material.albedoTexture = s.RoleMatData[
                        t - 1], e.getChildByName("xiaohongmao").active = !0
            }
        }
        RestPos(e = 0) {
            this.Killer.transform.position = new Laya.Vector3(-.9, e, 0);
            let t = this.Killer.transform.position.clone(),
                i = new Laya.Vector3(0, 0, 0);
            this.Camera.viewport.project(t, this.Camera.projectionViewMatrix, i), this.KillerDP.pos(i.x / Laya
                .stage.clientScaleX, i.y / Laya.stage.clientScaleY + 10), this.MoreGameBtn.y = this.KillerDP
                    .y - 55, this.Role.transform.position = new Laya.Vector3(.9, e, 0);
            let a = this.Role.transform.position.clone(),
                s = new Laya.Vector3(0, 0, 0);
            this.Camera.viewport.project(a, this.Camera.projectionViewMatrix, s), this.RoleDP.pos(s.x / Laya
                .stage.clientScaleX, s.y / Laya.stage.clientScaleY + 10)
        }
        RoleActiveCtrl(e) {
            if (this.Killer.active = e, e) {
                let e = l.GetDataRandom({
                    arry: ["win1", "win2", "win3", "ssidle"],
                    range: 1
                })[0];
                2 != this.KillerId && 7 != this.KillerId || "ssidle" != e ? this.Killer.getComponent(Laya
                    .Animator).play(e) : this.Killer.getComponent(Laya.Animator).play("ssidle1")
            }
            if (this.Role.active = e, e) {
                let e = l.GetDataRandom({
                    arry: ["win1", "win2", "win3", "roleidle"],
                    range: 1
                })[0];
                this.Role.getComponent(Laya.Animator).play(e)
            }
            this.GameClubBtn && (e ? this.GameClubBtn.show() : this.GameClubBtn.hide())
        }
        CreateEffect() {
            for (let e = 0; e < this.Scene3D.numChildren; e++) {
                let t = this.Scene3D.getChildAt(e);
                t.name == c.Name_Effect_BianShen && (c._Instance.recover(t.name, t), e--)
            }
            let e = this.Scene3D.addChild(c._Instance.effect_bianshen).addComponent(h);
            e.Target = this.Killer, e.EffectType = 1;
            let t = this.Scene3D.addChild(c._Instance.effect_bianshen).addComponent(h);
            t.Target = this.Role, t.EffectType = 1
        }
        StartGame() {
            n.PlaySound("click"), 1 == s.TotalSwitch && 1 == s.BannerSwitch ? (s.StartVideoIndex++, s
                .StartVideoIndex % 2 == 1 ? m.CreateVideoAd(1, Laya.Handler.create(this, this
                    .StartGameCallBack, [s.OverEggObbs]), Laya.Handler.create(this, this
                        .StartGameCallBack, [s.OverEggObbs]), Laya.Handler.create(this, this
                            .StartGameCallBack, [s.EggObbs]), !1) : this.StartGameCallBack(s.EggObbs)) : this
                                .PlayGame()
        }
        StartGameCallBack(e) {
            100 * Math.random() <= e ? Laya.View.open("Scene/LateChestPanel.scene", !0, [1]) : this.PlayGame()
        }
        PlayGame() {
            platform.getInstance().showInterstitial(() => {
                if (D._Instance.StartGame(), s.MaxLevel > 3) {
                    let e = !0,
                        t = 1,
                        i = l.GetArrDifference(s.KillerSkinData, [1, 2, 3, 4, 5, 6, 7]);
                    console.log("trykillerdata:", i), i.length <= 0 ? e = !1 : t = l.GetDataRandom({
                        arry: i,
                        range: 1
                    })[0];
                    let a = !0,
                        n = 1,
                        r = l.GetArrDifference(s.RoleSkinData, [1, 2, 3, 4, 5, 6, 7, 8]);
                    console.log("roledata:", r), r.length <= 0 ? a = !1 : n = l.GetDataRandom({
                        arry: r,
                        range: 1
                    })[0], e || a ? (Laya.View.open("Scene/GamePanel.scene"), Laya.View.open(
                        "Scene/TrySkinPanel.scene", !1, [a, n, e, t])) : Laya.View.open("Scene/GamePanel.scene",
                            !0, [1])
                } else Laya.View.open("Scene/GamePanel.scene", !0, [1])
            })
        }
        Shop() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    // window.box_adTwo.visible = false;
                    window.yad.right = NaN;
                    window.yad.top = NaN;
                    window.yad.centerX = 0;
                    window.yad.bottom = 0;
                    this.RoleActiveCtrl(!1), Laya.View.open("Scene/ShopPanel.scene", !1, {
                        closeFun: Laya.Handler.create(this, () => {
                            // window.box_adTwo.visible = true;
                            window.yad.centerX = NaN;
                            window.yad.bottom = NaN;
                            window.yad.top = 0;
                            window.yad.right = 0;
                        })
                    })
                })
            // this.RoleActiveCtrl(!1), Laya.View.open("Scene/ShopPanel.scene", !1, [1])
        }
        Skin() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    Laya.View.open("Scene/SkinPanel.scene");
                })
        }
        Set() {
            n.PlaySound("click"), platform.getInstance().showInterstitial(() => {
                // window.box_adTwo.visible = false;
                this.RoleActiveCtrl(!1), Laya.View.open("Scene/SetPanel.scene", !1, {
                    closeFun: Laya.Handler.create(this, () => {
                        // window.box_adTwo.visible = true;
                    })
                })
            })
            // this.RoleActiveCtrl(!1), Laya.View.open("Scene/SetPanel.scene", !1)
        }
        Course() {
            n.PlaySound("click"),



                // platform.getInstance().showInterstitial(() => {
                // window.box_adTwo.visible = false;
                this.RoleActiveCtrl(!1), Laya.View.open("Scene/CoursePanel.scene", !1, {
                    closeFun: Laya.Handler.create(this, () => {
                        // window.box_adTwo.visible = true;
                    })
                })
            // })




            // this.RoleActiveCtrl(!1), Laya.View.open("Scene/CoursePanel.scene", !1)
        }
        EasterEgg() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    // window.box_adTwo.visible = false;
                    this.RoleActiveCtrl(!1), Laya.View.open("Scene/EasterEggPanel.scene", !1, {
                        closeFun: Laya.Handler.create(this, () => {
                            // window.box_adTwo.visible = true;
                        })
                    })
                })
        }
        Gift() {
            n.PlaySound("click"), (new Date).getTime() / 1e3 >= s.GiftTimeStamp ? (this.RoleActiveCtrl(!1),
                // platform.getInstance().showInterstitial(() => {
                // window.box_adTwo.visible = false;
                Laya.View.open("Scene/DayGiftPanel.scene", !1, {
                    closeFun: Laya.Handler.create(this, () => {
                        // window.box_adTwo.visible = true;
                    })
                })
                // })
            ) : null;//I.OpenTips("")
        }
        GiftRefresh() {
            if ((new Date).getTime() / 1e3 >= s.GiftTimeStamp) this.GiftTimeLabel.text = "Available", this
                .IsGiftConutTimer = !1;
            else {
                this.IsGiftConutTimer = !0;
                let e = Math.round(s.GiftTimeStamp - parseInt(((new Date).getTime() / 1e3).toString())),
                    t = Math.floor(e % 3600);
                this.GiftTimeLabel.text = l.Addo(parseInt((e / 3600).toString())) + ":" + l.Addo(parseInt((t /
                    60).toString())) + ":" + l.Addo(e % 60), Laya.timer.loop(1e3, this, this.GiftCountDown)
            }
        }
        GiftCountDown() {
            if (this.IsGiftConutTimer) {
                let e = Math.round(s.GiftTimeStamp - parseInt(((new Date).getTime() / 1e3).toString())),
                    t = Math.floor(e % 3600);
                this.GiftTimeLabel.text = l.Addo(parseInt((e / 3600).toString())) + ":" + l.Addo(parseInt((t /
                    60).toString())) + ":" + l.Addo(e % 60), e <= 0 && (this.GiftTimeLabel.text = "Available",
                        this.IsGiftConutTimer = !1)
            }
        }
        Lottery() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    // window.box_adTwo.visible = false;
                    this.RoleActiveCtrl(!1), Laya.View.open("Scene/LotteryPanel.scene", !1, {
                        closeFun: Laya.Handler.create(this, () => {
                            // window.box_adTwo.visible = true;
                        })
                    })
                })
        }
        Sign() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    // window.box_adTwo.visible = false;
                    this.RoleActiveCtrl(!1), Laya.View.open("Scene/SignPanel.scene", !1, {
                        closeFun: Laya.Handler.create(this, () => {
                            // window.box_adTwo.visible = true;
                        })
                    })
                })
        }
        KillerRank() {
            // n.PlaySound("click"), "You" == s.Name && "res/yktp.jpg" == s.Head ? I.CreateAuthorBtn() : (this
            //     .RoleActiveCtrl(!1), Laya.View.open("Scene/KillRankPanel.scene", !1))
        }
        HotGame() {
            // n.PlaySound("click"), Laya.View.open("Scene/FullExportPanel.scene", !0, [1])
        }
        MoreGame() {
            // n.PlaySound("click"), this.RoleActiveCtrl(!1), Laya.View.open("Scene/NewExportPanel.scene", !1)
        }
        Left() {
            if (n.PlaySound("click"), this.AlterBuffer <= 0) {
                this.AlterBuffer = 100;
                let e = this.KillerId - 1 <= 0 ? 7 : this.KillerId - 1;
                this.RefreshBtn(e, !0), this.CreateEffect()
            } else I.OpenTips("click too fast!")
        }
        Right() {
            if (n.PlaySound("click"), this.AlterBuffer <= 0) {
                this.AlterBuffer = 100;
                let e = this.KillerId + 1 >= 8 ? 1 : this.KillerId + 1;
                this.RefreshBtn(e, !0), this.CreateEffect()
            } else I.OpenTips("click too fast!")
        }
        KillerUser() {
            n.PlaySound("click"), 1 == this.KillerData.islock ? 1 == this.KillerData.isuser ?
                I.OpenTips("The character has been used!") :
                (D._Instance.AlterSkin(this.KillerData.skintype, this.KillerData.skinid), this
                    .RefreshBtn(this.KillerId, !1)) : 1 == this.KillerData.unlocktype ? s.Gold >= this
                        .KillerData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance.UpdateGold(-this.KillerData
                            .unlocknum), D._Instance.UnLockSkin(this.KillerData.skintype, this.KillerData.skinid), this
                                .RefreshBtn(this.KillerId, !1)) : (I.OpenTips("Coins Are Not Enough!"), this.RoleActiveCtrl(!1), Laya.View
                                    .open("Scene/ShopPanel.scene", !1, [1])) : 2 == this.KillerData.unlocktype ? s.Diamond >=
                                        this.KillerData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance.UpdateDiamond(-this.KillerData
                                            .unlocknum), D._Instance.UnLockSkin(this.KillerData.skintype, this.KillerData.skinid),
                                            this.RefreshBtn(this.KillerId, !1)) : (I.OpenTips("Diamonds Are Not Enough!"), this.RoleActiveCtrl(!1), Laya
                                                .View.open("Scene/ShopPanel.scene", !1, [1])) : 3 == this.KillerData.unlocktype && m
                                                    .CreateVideoAd(2, Laya.Handler.create(this, this.SkinCallBack, [this.KillerData]), Laya.Handler
                                                        .create(this, this.SkinFailCallBack), Laya.Handler.create(this, () => {
                                                            I.ShareApp(Laya.Handler.create(this, this.SkinCallBack, [this.KillerData]), Laya
                                                                .Handler.create(this, this.SkinFailCallBack))
                                                        }))
        }
        RoleUser() {
            n.PlaySound("click"), 1 == this.RoleData.islock ? 1 == this.RoleData.isuser ? I.OpenTips(
                "The character has been used!") : (D._Instance.AlterSkin(this.RoleData.skintype, this.RoleData.skinid), this
                    .RefreshBtn(this.KillerId, !1)) : 1 == this.RoleData.unlocktype ? s.Gold >= this.RoleData
                        .unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance.UpdateGold(-this.RoleData.unlocknum), D._Instance
                            .UnLockSkin(this.RoleData.skintype, this.RoleData.skinid), this.RefreshBtn(this.KillerId, !
                                1)) : (I.OpenTips("Coins Are Not Enough!"), this.RoleActiveCtrl(!1), Laya.View.open(
                                    "Scene/ShopPanel.scene", !1, [1])) : 2 == this.RoleData.unlocktype ? s.Diamond >= this
                                        .RoleData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance.UpdateDiamond(-this.RoleData.unlocknum),
                                            D._Instance.UnLockSkin(this.RoleData.skintype, this.RoleData.skinid), this.RefreshBtn(this
                                                .KillerId, !1)) : (I.OpenTips("Diamonds Are Not Enough!"), this.RoleActiveCtrl(!1), Laya.View.open(
                                                    "Scene/ShopPanel.scene", !1, [1])) : 3 == this.RoleData.unlocktype && m.CreateVideoAd(2,
                                                        Laya.Handler.create(this, this.SkinCallBack, [this.RoleData]), Laya.Handler.create(this,
                                                            this.SkinFailCallBack), Laya.Handler.create(this, () => {
                                                                I.ShareApp(Laya.Handler.create(this, this.SkinCallBack, [this.RoleData]), Laya
                                                                    .Handler.create(this, this.SkinFailCallBack))
                                                            }))
        }
        SkinCallBack(e) {
            switch (e.skintype) {
                case 1:
                    switch (e.skinid) {
                        case 2:
                            I.OpenTips("Successfully unlocked!"), D._Instance.UnLockSkin(e.skintype, e.skinid);
                            break;
                        case 4:
                            s.RoleSkin4VideoNum++, d.save_int("RoleSkin4VideoNum", s.RoleSkin4VideoNum), s
                                .RoleSkin4VideoNum >= e.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance
                                    .UnLockSkin(e.skintype, e.skinid)) : I.OpenTips("Watch the video " + (e.unlocknum - s
                                        .RoleSkin4VideoNum) + " more times to unlock!");
                            break;
                        case 7:
                            s.RoleSkin7VideoNum++, d.save_int("RoleSkin7VideoNum", s.RoleSkin7VideoNum), s
                                .RoleSkin7VideoNum >= e.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance
                                    .UnLockSkin(e.skintype, e.skinid)) : I.OpenTips("Watch the video " + (e.unlocknum - s
                                        .RoleSkin7VideoNum) + " more times to unlock!");
                            break;
                        case 8:
                            s.RoleSkin8VideoNum++, d.save_int("RoleSkin8VideoNum", s.RoleSkin8VideoNum), s
                                .RoleSkin8VideoNum >= e.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance
                                    .UnLockSkin(e.skintype, e.skinid)) : I.OpenTips("Watch the video " + (e.unlocknum - s
                                        .RoleSkin8VideoNum) + " more times to unlock!")
                    }
                    break;
                case 2:
                    switch (e.skinid) {
                        case 2:
                            I.OpenTips("Successfully unlocked!"), D._Instance.UnLockSkin(e.skintype, e.skinid);
                            break;
                        case 4:
                            s.KillerSkin4VideoNum++, d.save_int("KillerSkin4VideoNum", s.KillerSkin4VideoNum), s
                                .KillerSkin4VideoNum >= e.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance
                                    .UnLockSkin(e.skintype, e.skinid)) : I.OpenTips("Watch the video " + (e.unlocknum - s
                                        .KillerSkin4VideoNum) + " more times to unlock!")
                    }
            }
            this.RefreshBtn(this.KillerId, !1), n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        SkinFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        Update() {
            this.GoldLabel.text = s.Gold.toString(), this.DiamondLabel.text = s.Diamond.toString(), this
                .LevelLabel.text = "Level " + s.MaxLevel, this.EasterEggIndex++, this.EasterEggIndex >= 120 &&
                (this.EasterEggIndex = 0, this.EasterEggBtnTween()), this.AlterBuffer > 0 ? (this.AlterBuffer--,
                    this.LeftBtn.gray = !0, this.RightBtn.gray = !0) : (this.LeftBtn.gray = !1, this.RightBtn
                        .gray = !1)
        }
        HotGameBtnTween() {
            Laya.Tween.to(this.HotGameBtn, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 500, null, Laya.Handler.create(this, this.HotGameBtnTween1))
        }
        HotGameBtnTween1() {
            Laya.Tween.to(this.HotGameBtn, {
                scaleX: 1,
                scaleY: 1
            }, 500, null, Laya.Handler.create(this, this.HotGameBtnTween))
        }
        EasterEggBtnTween() {
            Laya.Tween.to(this.EasterEggBtn, {
                rotation: 10
            }, 50, null, Laya.Handler.create(this, this.EasterEggBtnTween1))
        }
        EasterEggBtnTween1() {
            Laya.Tween.to(this.EasterEggBtn, {
                rotation: -10
            }, 100, null, Laya.Handler.create(this, this.EasterEggBtnTween2))
        }
        EasterEggBtnTween2() {
            Laya.Tween.to(this.EasterEggBtn, {
                rotation: 10
            }, 100, null, Laya.Handler.create(this, this.EasterEggBtnTween3))
        }
        EasterEggBtnTween3() {
            Laya.Tween.to(this.EasterEggBtn, {
                rotation: 0
            }, 50, null)
        }
        ZhiZhenTween() {
            Laya.Tween.to(this.ZhiZhen, {
                rotation: -45
            }, 200, null, Laya.Handler.create(this, this.ZhiZhenTween1), 1e3)
        }
        ZhiZhenTween1() {
            Laya.Tween.to(this.ZhiZhen, {
                rotation: 45
            }, 400, null, Laya.Handler.create(this, this.ZhiZhenTween2))
        }
        ZhiZhenTween2() {
            Laya.Tween.to(this.ZhiZhen, {
                rotation: -45
            }, 400, null, Laya.Handler.create(this, this.ZhiZhenTween3))
        }
        ZhiZhenTween3() {
            Laya.Tween.to(this.ZhiZhen, {
                rotation: 0
            }, 200, null, Laya.Handler.create(this, this.ZhiZhenTween))
        }
        LeftBtnTween() {
            Laya.Tween.to(this.LeftBtn, {
                x: 3
            }, 500, null, Laya.Handler.create(this, this.LeftBtnTween1))
        }
        LeftBtnTween1() {
            Laya.Tween.to(this.LeftBtn, {
                x: 13
            }, 500, null, Laya.Handler.create(this, this.LeftBtnTween))
        }
        RightBtnTween() {
            Laya.Tween.to(this.RightBtn, {
                x: 263
            }, 500, null, Laya.Handler.create(this, this.RightBtnTween1))
        }
        RightBtnTween1() {
            Laya.Tween.to(this.RightBtn, {
                x: 253
            }, 500, null, Laya.Handler.create(this, this.RightBtnTween))
        }
        onDisable() {
            // window.box_adTwo.visible = false;
            if (s.IsStartBanner = !0, Laya.timer.clearAll(this), this.Scene3D) {
                for (let e = 0; e < this.Scene3D.numChildren; e++) {
                    let t = this.Scene3D.getChildAt(e);
                    t.name == c.Name_Effect_BianShen && (c._Instance.recover(t.name, t), e--)
                }
                this.Scene3D.destroy()
            }
            this.GameClubBtn && this.GameClubBtn.destroy()
        }
        DowerSet() {
            if (1 == this.DowerData.dowertype ? (this.SpeedTP.visible = !0, this.AtkDirTP.visible = !1, this
                .TipsLabel.text = "Movement speed") : (this.SpeedTP.visible = !1, this.AtkDirTP.visible = !0, this
                    .TipsLabel.text = "Attack distance"), this.LvLabel.text = "Lv." + this.DowerData.dowerlv, this
                        .dowerLabel.text = "+" + this.DowerData.dowerlv + "%", this.DowerData.dowerlv >= 100) this
                            .UpLvBtn.pos(650, 175), this.UpLvBtn.gray = !0, this.xhzstp.visible = !1, this.xhzsLabel
                                .visible = !1, this.barLabel.text = "Max", this.DowerBar.width = 250, this.videotp.visible = !1,
                            this.lssjtp.visible = !1, this.sjtp.visible = !1, this.ymjtp.visible = !0;
            else {
                this.UpLvBtn.pos(650, 200), this.UpLvBtn.gray = !1, this.xhzstp.visible = !0, this.ymjtp
                    .visible = !1, this.xhzsLabel.visible = !0, this.barLabel.text = this.DowerData
                        .dowerclicklv / 5 * 100 + "%", this.DowerBar.width = this.DowerData.dowerclicklv / 5 * 250;
                let t = this.DowerData.dowerlv - 1 < 0 ? 0 : this.DowerData.dowerlv - 1;
                var e = 10 + 15 * Math.floor(t / 10);
                this.xhzsLabel.text = "-" + e.toString(), s.Diamond < e && 1 == s.TotalSwitch && 1 == s
                    .BannerSwitch || 10 == this.ClickNum && 1 == s.TotalSwitch && 1 == s.BannerSwitch ? (this
                        .videotp.visible = !0, this.lssjtp.visible = !0, this.sjtp.visible = !1) : (this.videotp
                            .visible = !1, this.lssjtp.visible = !1, this.sjtp.visible = !0)
            }
            this.UpLvBtn.on(Laya.Event.MOUSE_DOWN, this, this.UpLv, [this.DowerData, e])
        }
        UpLv(e, t) {
            n.PlaySound("click"),
                e.dowerlv >= 100 ? I.OpenTips("The attribute is full!") :
                    s.Diamond >= t && 10 != this.ClickNum ? (D._Instance.UpdateDiamond(-t), D._Instance.UpdateDowerLv(e.dowertype), 1 == s
                        .TotalSwitch && 1 == s.BannerSwitch && (this.ClickNum++, 5 == this.ClickNum && this
                            .getComponent(P).showlatebannerAd(3)), this.DowerSet())
                        : 1 == s.TotalSwitch && 1 == s.BannerSwitch ? m.CreateVideoAd(1, Laya.Handler.create(this, this.TenLvCallBack, [e]), Laya
                            .Handler.create(this, this.TenLvFailCallBack)) : I.OpenTips("Diamonds Are Not Enough!")
        }
        TenLvCallBack(e) {
            I.OpenTips("Successfully upgraded to ten levels!"), Laya.timer.loop(10, this, this.DowerTenLv, [e]), n.CurrBgm = 0, n.PlayBGM(
                "bgm", 1)
        }
        TenLvFailCallBack() {
            this.ClickNum = 11, this.DowerSet(), n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        DowerTenLv(e) {
            D._Instance.UpdateDowerLv(e.dowertype, !1), this.currlv++, this.currlv >= 50 && (this.currlv = 0,
                Laya.timer.clear(this, this.DowerTenLv)), this.DowerSet()
        }
    }
    class A extends e.Scene.CoursePanelUI {
        constructor() {
            super()
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SkipBtn]), this.SkipBtn.on(Laya.Event.CLICK,
                this, this.Skip)
        }
        onEnable() { }
        onOpened(data) {
            this.dataFun = data || {}
        }
        Skip() {
            n.PlaySound("click"), this.close(), E._Instance.RoleActiveCtrl(!0)
        }
        onDisable() {
            if (this.dataFun.closeFun) {
                this.dataFun.closeFun.run();
            }
        }
    }
    class K extends e.Scene.DayGiftPanelUI {
        constructor() {
            super(), this.AwardNum = 0, this.IsShowVideo = !1
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.GetAwardBtn, this.SkipBtn]), this.GetAwardBtn
                .on(Laya.Event.MOUSE_DOWN, this, this.GetAward), this.GetAwardBtn1.on(Laya.Event.MOUSE_DOWN,
                    this, this.GetAward), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), this.KuangBtn.on(
                        Laya.Event.CLICK, this, this.Kuang), this.GouBtn.on(Laya.Event.MOUSE_DOWN, this, this.Gou),
                1 != s.IsOneGift ? this.AwardNum = 888 : this.AwardNum = 688, this.GoldLabel.text = "x" + this
                    .AwardNum, a.SetBtnBottom(this.SkipBtn, 280), a.SetBtnBottom(this.GetAwardBtn1, 280), a
                        .SetBtnBottom(this.GetAwardBtn, 350), a.SetBtnBottom(this.GiftBox, 480), Laya.timer.frameLoop(1,
                            this, this.Update), 1 == s.TotalSwitch && 1 == s.BannerSwitch ? (this.GiftBox.visible = !1,
                                this.SkipBtn.visible = !1, this.GetAwardBtn1.visible = !1, Laya.timer.once(s.ButtonDelay,
                                    this, () => {
                                        this.GiftBox.visible = !0, this.GetAwardBtn1.visible = !0
                                    })) : (this.GiftBox.visible = !1, this.SkipBtn.visible = !0, this.GetAwardBtn1
                                        .visible = !1)
        }
        onEnable() { }
        GetAward() {
            n.PlaySound("click"), m.CreateVideoAd(1, Laya.Handler.create(this, this.GetAwardCallBack, [3 * this
                .AwardNum, !0
            ]), Laya.Handler.create(this, this.GetAwardFailCallBack), Laya.Handler.create(this, () => {
                I.ShareApp(Laya.Handler.create(this, this.GetAwardCallBack, [3 * this.AwardNum, !
                    0]), Laya.Handler.create(this, this.GetAwardFailCallBack))
            }))
        }
        Skip() {
            n.PlaySound("click"), this.GetAwardCallBack(this.AwardNum, !1)
        }
        GetAwardCallBack(e, t) {
            s.IsOneGift = 1, d.save_int("IsOneGift", s.IsOneGift), s.GiftTimeStamp = (new Date).getTime() /
                1e3 + 28800, d.save_int("GiftTimeStamp", s.GiftTimeStamp), D._Instance.UpdateGold(e), I
                    .OpenTips("Coins +" + e), this.close(), E._Instance.RoleActiveCtrl(!0), E._Instance
                        .GiftRefresh(), t && (n.CurrBgm = 0, n.PlayBGM("bgm", 1))
        }
        GetAwardFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        Kuang() {
            n.PlaySound("click"), this.KuangBtn.visible = !1, this.GouBtn.visible = !0, this.GouTP.visible = !0,
                this.SkipBtn.visible = !1, this.GetAwardBtn1.visible = !0
        }
        Gou() {
            n.PlaySound("click"), this.KuangBtn.visible = !0, this.GouBtn.visible = !1, this.GouTP.visible = !1,
                this.IsShowVideo ? this.CloseGouCallBack() : (this.IsShowVideo = !0, m.CreateVideoAd(1, Laya
                    .Handler.create(this, this.CloseGouCallBack), Laya.Handler.create(this, this
                        .CloseGouCallBack), Laya.Handler.create(this, this.CloseGouCallBack), !1))
        }
        CloseGouCallBack() {
            this.SkipBtn.visible = !0, this.GetAwardBtn1.visible = !1
        }
        Update() {
            this.ZZTP.rotation += 2
        }
        onOpened(data) {
            this.dataFun = data || {};
        }
        onDisable() {
            Laya.timer.clearAll(this)
            if (this.dataFun.closeFun) {
                this.dataFun.closeFun.run();
            }
        }
    }
    class N extends e.Scene.EasterEggPanelUI {
        constructor() {
            super()
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.GetAwardBtn, this.YetGetBtn, this.SkipBtn]),
                this.GetAwardBtn.on(Laya.Event.MOUSE_DOWN, this, this.GetAward), this.YetGetBtn.on(Laya.Event
                    .CLICK, this, this.YetGet), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), a
                        .SetBtnBottom(this.SkipBtn, 280), this.Refresh()
        }
        onOpened(data) {
            // window.box_adTwo.visible = false;
            this.dataFun = data || {};
        }
        onEnable() { }
        Refresh() {
            this.SkinTP.skin = "res/TrySkin/role6.png";
            let e = s.RoleTaskIndex,
                t = e > 5 ? 5 : e;
            this.task1label.text = "1. Use the hunter to catch the Rabbit girl 5 times. (" + t + "/5)", this.task1label.color = t >= 5 ?
                "#188206" : "#582c7a";
            let i = e > 5 ? e - 5 : 0;
            this.task2label.text = "2. Feed moon cakes twice. (" + i + "/2)", this.task2label.color = i >= 2 ? "#188206" :
                "#582c7a", e < 7 ? (this.GetAwardBtn.visible = !0, this.YetGetBtn.visible = !1, e < 5 ? (this
                    .qzttp.visible = !0, this.videotp.visible = !1, this.wtybtp.visible = !1, this.tasklabel
                        .visible = !1) : (this.qzttp.visible = !1, this.videotp.visible = !0, this.wtybtp
                            .visible = !0, this.tasklabel.visible = !0, this.tasklabel.text = "(" + (e - 5) + "/2)"
                )) : (this.GetAwardBtn.visible = !1, this.YetGetBtn.visible = !0)
        }
        GetAward() {
            n.PlaySound("click"), s.RoleTaskIndex < 5 ? (this.close(), E._Instance.RoleActiveCtrl(!0), E
                ._Instance.StartGame()) : m.CreateVideoAd(0, Laya.Handler.create(this, this
                    .GetAwardCallBack), Laya.Handler.create(this, this.GetAwardFailCallBack), Laya.Handler
                        .create(this, () => {
                            I.ShareApp(Laya.Handler.create(this, this.GetAwardCallBack), Laya.Handler.create(
                                this, this.GetAwardFailCallBack))
                        }))
        }
        GetAwardCallBack() {
            I.OpenTips("Successfully fed moon cakes!"), s.RoleTaskIndex++, d.save_int("RoleTaskIndex", s.RoleTaskIndex),
                this.Refresh(), s.RoleTaskIndex >= 7 && (D._Instance.UnLockSkin(1, 6),
                    I.OpenTips("Congratulations on getting the Rabbit girl! Please check it out in the character!")),
                n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        GetAwardFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        YetGet() {
            n.PlaySound("click"), I.OpenTips("The role has been obtained!")
        }
        Skip() {
            n.PlaySound("click"), this.close(), E._Instance.RoleActiveCtrl(!0)
        }
        onDisable() {
            if (this.dataFun.closeFun) {
                this.dataFun.closeFun.run();
            }
        }
    }
    class G extends e.Scene.ExportPanelUI {
        constructor() {
            super(), this.MiniData = []
        }
        onAwake() {
            n.CurrBgm = 0, Laya.SoundManager.stopMusic(), n.PlaySound("Popup"), a.MatchScreen(this, this.Bg), a
                .AddBtnAnimation([this.SkipBtn]), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), a
                    .SetBtnBottom(this.SkipBtn, 280), this.WinTP.visible = !0, this.ExportList.visible = s
                        .ExportSwitch, s.ExportSwitch && this.MiniSet()
        }
        onEnable() { }
        Skip() {
            n.PlaySound("click"), 1 == s.TotalSwitch && 1 == s.BannerSwitch && 100 * Math.random() < s.EggObbs ?
                Laya.View.open("Scene/LateChestPanel.scene", !0, [3]) : s.MaxLevel % s.IsOpenChest == 0 ? Laya
                    .View.open("Scene/ChestPanel.scene") : Laya.View.open("Scene/SettlePanel.scene")
        }
        onDisable() { }
        MiniSet() {
            this.ExportList.itemRender = O, this.MiniData = s.ExportData, this.ExportList.array = this.MiniData,
                this.ExportList.renderHandler = Laya.Handler.create(this, this.freshList1, null, !1)
        }
        freshList1(e, t) {
            e.setShow(this.MiniData[t])
        }
    }
    class O extends e.Scene.ExportBigItemUI {
        constructor() {
            super()
        }
        onAwake() {
            this.rotation = -90
        }
        setShow(e) {
            e && (this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this.exporticon.skin = e
                .pathName, this.exportlabel.text = e.name, this.on(Laya.Event.MOUSE_DOWN, this, this
                    .OnClick, [e]), Laya.Tween.to(this, {
                        rotation: 0
                    }, 300, null))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class H extends e.Scene.FullExportPanelUI {
        constructor() {
            super(), this.OpenType = 1, this.UpMiniData = [], this.MiniData = [], this.scroll = 0, this.IsMove =
                60, this.scroll1 = 0, this.IsMove1 = 60
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SkipBtn, this.SkipGameBtn]), this.SkipBtn.on(
                Laya.Event.CLICK, this, this.Skip), this.SkipGameBtn.on(Laya.Event.CLICK, this, this
                    .SkipGame), this.img_listbg.visible = s.ExportSwitch, this.ExportList.visible = s
                        .ExportSwitch, this.UpExportList.visible = s.ExportSwitch, this.SkipGameBtn.visible = s
                            .ExportSwitch
        }
        onOpened(e) {
            e && (this.OpenType = e[0], this.MiniData = 1 == this.OpenType ? s.FullExportData : s
                .SettleFullExportData, this.UpMiniData = 1 == this.OpenType ? s.FullExportData : s
                    .SettleFullExportData, s.ExportSwitch && (this.MiniSet(), this.SkipGame(!1)))
        }
        onEnable() { }
        Skip() {
            switch (n.PlaySound("click"), this.OpenType) {
                case 1:
                    Laya.View.open("Scene/StartPanel.scene");
                    break;
                case 2:
                    Laya.View.open("Scene/SettlePanel.scene")
            }
        }
        SkipGame(e = !0) {
            e && n.PlaySound("click");
            let t = l.GetDataRandom({
                arry: this.MiniData,
                range: 1
            })[0];
            t && (S.SendMsgToServer("game_event", [t.list_type, t.location_index, 1]), I.SkipMiniGame(t.appId, t
                .path, t.list_type, t.location_index))
        }
        MiniSet() {
            this.UpExportList.itemRender = V, this.UpExportList.hScrollBarSkin = null, this.UpExportList.array =
                this.UpMiniData, this.UpExportList.renderHandler = Laya.Handler.create(this, this.freshList1,
                    null, !1), this.MiniScoll(), this.ExportList.height = Laya.stage.height - 309, this
                        .ExportList.repeatY = Math.floor(Laya.stage.height / 255), this.ExportList.itemRender = U, this
                            .ExportList.vScrollBarSkin = null, this.ExportList.array = this.MiniData, this.ExportList
                                .renderHandler = Laya.Handler.create(this, this.freshList2, null, !1), this.MiniScoll1()
        }
        freshList1(e, t) {
            e.setShow(this.UpMiniData[t])
        }
        freshList2(e, t) {
            e.setShow(this.MiniData[t])
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
        MiniScoll() {
            this.UpMiniData.length <= 5 || (Laya.timer.loop(30, this, this.MiniScollLoop), this.UpExportList.on(
                Laya.Event.MOUSE_DOWN, this, () => {
                    this.IsMove = 0
                }))
        }
        MiniScollLoop() {
            this.UpExportList.scrollBar.max && (this.IsMove >= 60 ? 0 == this.scroll ? (this.UpExportList
                .scrollBar.value += 2, this.UpExportList.scrollBar.value >= this.UpExportList.scrollBar
                    .max && (this.scroll = this.UpExportList.scrollBar.max)) : (this.UpExportList.scrollBar
                        .value -= 2, this.UpExportList.scrollBar.value <= 0 && (this.scroll = 0)) : this
                            .IsMove++)
        }
        MiniScoll1() {
            this.MiniData.length <= Math.floor(Laya.stage.height / 255) * this.ExportList.repeatX || (Laya.timer
                .loop(30, this, this.MiniScollLoop1), this.ExportList.on(Laya.Event.MOUSE_DOWN, this,
                    () => {
                        this.IsMove1 = 0
                    }))
        }
        MiniScollLoop1() {
            this.ExportList.scrollBar.max && (this.IsMove1 >= 60 ? 0 == this.scroll1 ? (this.ExportList
                .scrollBar.value += 2, this.ExportList.scrollBar.value >= this.ExportList.scrollBar
                    .max && (this.scroll1 = this.ExportList.scrollBar.max)) : (this.ExportList.scrollBar
                        .value -= 2, this.ExportList.scrollBar.value <= 0 && (this.scroll1 = 0)) : this
                            .IsMove1++)
        }
    }
    class U extends e.Scene.ExportMedItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this.exporticon.skin = e
                .pathName, this.exportlabel.text = e.name, this.on(Laya.Event.MOUSE_DOWN, this, this
                    .OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class V extends e.Scene.ExportSmallItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this.exporticon.skin = e
                .pathName, this.exportlabel.text = e.name, this.on(Laya.Event.MOUSE_DOWN, this, this
                    .OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class z extends e.Scene.GetAwardPanelUI {
        constructor() {
            super(), this.AwardType = 1, this.AwardNum = 0, this.IsGetAward = !1
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.GetAwardBtn, this.SkipBtn]), this.GetAwardBtn
                .on(Laya.Event.MOUSE_DOWN, this, this.GetAward), this.SkipBtn.on(Laya.Event.CLICK, this, this
                    .Skip), a.SetBtnBottom(this.GetAwardBtn, 370), a.SetBtnBottom(this.SkipBtn, 280), Laya.timer
                        .frameLoop(1, this, this.Update), this.GetAwardBtnTween()
        }
        onOpened(e) {
            e && (this.AwardType = e[0], this.AwardNum = e[1], 1 == this.AwardType ? (this.goldtp.visible = !0,
                this.zstp.visible = !1) : (this.goldtp.visible = !1, this.zstp.visible = !0), this
                    .AwardLabel.text = "x" + this.AwardNum)
        }
        onEnable() { }
        GetAward() {
            n.PlaySound("click"), this.IsGetAward || m.CreateVideoAd(0, Laya.Handler.create(this, this
                .AwardCallBack), Laya.Handler.create(this, this.AwardFailCallBack), Laya.Handler.create(
                    this, () => {
                        I.ShareApp(Laya.Handler.create(this, this.AwardCallBack), Laya.Handler.create(this,
                            this.AwardFailCallBack))
                    }))
        }
        AwardCallBack() {
            this.IsGetAward = !0, I.OpenTips("Double claim!");
            let e = 1 == this.AwardType ? "res/Game/gold.png" : "res/Game/diamond.png",
                t = 1 == this.AwardType ? this.Gold.x : this.Diamond.x,
                i = 1 == this.AwardType ? this.Gold.y : this.Diamond.y;
            a.flyDiamondAni(e, 375, 600, t, i, this, Laya.Handler.create(this, () => {
                1 == this.AwardType ? D._Instance.UpdateGold(2 * this.AwardNum) : D._Instance
                    .UpdateDiamond(2 * this.AwardNum), Laya.timer.once(500, this, () => {
                        this.close()
                    })
            })), n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        AwardFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        Skip() {
            if (n.PlaySound("click"), !this.IsGetAward) {
                this.IsGetAward = !0, I.OpenTips("Received!");
                let e = 1 == this.AwardType ? "res/Game/gold.png" : "res/Game/diamond.png",
                    t = 1 == this.AwardType ? this.Gold.x : this.Diamond.x,
                    i = 1 == this.AwardType ? this.Gold.y : this.Diamond.y;
                a.flyDiamondAni(e, 375, 600, t, i, this, Laya.Handler.create(this, () => {
                    1 == this.AwardType ? D._Instance.UpdateGold(this.AwardNum) : D._Instance
                        .UpdateDiamond(this.AwardNum), Laya.timer.once(500, this, () => {
                            this.close()
                        })
                }))
            }
        }
        Update() {
            this.ZZTP.rotation += 2, this.GoldLabel.text = s.Gold.toString(), this.DiamondLabel.text = s.Diamond
                .toString()
        }
        GetAwardBtnTween() {
            Laya.Tween.to(this.GetAwardBtn, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 500, null, Laya.Handler.create(this, this.GetAwardBtnTween1))
        }
        GetAwardBtnTween1() {
            Laya.Tween.to(this.GetAwardBtn, {
                scaleX: 1,
                scaleY: 1
            }, 500, null, Laya.Handler.create(this, this.GetAwardBtnTween))
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class Y extends e.Scene.HotExportPanelUI {
        constructor() {
            super(), this.IsShow = !1, this.MiniData = [], this.OpenType = 1, this.isWin = !1, this.currLevel =
                1, this.scroll = 0, this.IsMove = 60
        }
        onAwake() {
            a.MatchScreen(this), this.Bg.width = Laya.stage.width, this.Bg.height = Laya.stage.height - 34, a
                .AddBtnAnimation([this.SkipBtn]), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), a
                    .SetBtnBottom(this.ExportList, 280), this.TopBox.visible = !1, this.ExportList.visible = !1,
                Laya.timer.frameLoop(1, this, this.Update)
        }
        onOpened(e) {
            e && (this.OpenType = e[0], this.isWin = e[1], this.currLevel = e[2])
        }
        onEnable() { }
        Skip() {
            switch (n.PlaySound("click"), this.OpenType) {
                case 1:
                    Laya.View.open("Scene/StartPanel.scene");
                    break;
                case 2:
                    Laya.View.open("Scene/SkinPanel.scene");
                    break;
                case 3:
                    Laya.View.open("Scene/StartPanel.scene")
            }
        }
        Refresh() {
            this.TopBox.visible = !0, this.ExportList.visible = !0;
            let e = s.HotExportData;
            this.ExportIcon1.skin = e[0].pathName, this.ExportName1.text = e[0].name, this.ExportBtn1.on(Laya
                .Event.MOUSE_DOWN, this, this.Export, [e[0]]), this.ExportIcon2.skin = e[1].pathName, this
                    .ExportName2.text = e[1].name, this.ExportBtn2.on(Laya.Event.MOUSE_DOWN, this, this.Export, [e[
                        1]]), this.ExportIcon3.skin = e[2].pathName, this.ExportName3.text = e[2].name, this
                            .ExportBtn3.on(Laya.Event.MOUSE_DOWN, this, this.Export, [e[2]]);
            for (let t = 0; t < e.length; t++) t >= 3 && this.MiniData.push(e[t]);
            this.MiniSet()
        }
        Export(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
        MiniSet() {
            this.ExportList.height = i.IsIphoneX ? Laya.stage.height - 774 : Laya.stage.height - 734, this
                .ExportList.repeatY = Math.floor(Laya.stage.height / 200), this.ExportList.itemRender = q, this
                    .ExportList.vScrollBarSkin = null, this.ExportList.array = this.MiniData, this.ExportList
                        .renderHandler = Laya.Handler.create(this, this.freshList1, null, !1), this.MiniScoll()
        }
        freshList1(e, t) {
            e.setShow(this.MiniData[t])
        }
        MiniScoll() {
            this.MiniData.length <= Math.floor(Laya.stage.height / 255) * this.ExportList.repeatX || (Laya.timer
                .loop(30, this, this.MiniScollLoop), this.ExportList.on(Laya.Event.MOUSE_DOWN, this, () => {
                    this.IsMove = 0
                }))
        }
        MiniScollLoop() {
            this.ExportList.scrollBar.max && (this.IsMove >= 60 ? 0 == this.scroll ? (this.ExportList.scrollBar
                .value += 2, this.ExportList.scrollBar.value >= this.ExportList.scrollBar.max && (this
                    .scroll = this.ExportList.scrollBar.max)) : (this.ExportList.scrollBar.value -= 2,
                        this.ExportList.scrollBar.value <= 0 && (this.scroll = 0)) : this.IsMove++)
        }
        Update() {
            s.ExportSwitch && s.HotExportData.length > 3 && !this.IsShow && (this.IsShow = !0, this.Refresh())
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class q extends e.Scene.HotExportItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.ExportIcon.skin = e.pathName, this.ExportNameLabel.text = e.name, this.IdxLabel.text = e
                .location_index, this.TipsLabel.text = Math.round(20 * Math.random() + 10) + "位好友在玩", this
                    .on(Laya.Event.MOUSE_DOWN, this, this.OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class W extends e.Scene.KillRankPanelUI {
        constructor() {
            super(), this.KillRankData = [], this.GoldNum = 0, this.GiftNum = 0
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SkipBtn, this.GetAwardBtn]), this.GetAwardBtn
                .on(Laya.Event.CLICK, this, this.GetAward), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip),
                y.SendMsgToServer("user_rank", [], Laya.Handler.create(this, () => {
                    this.RankSet()
                })), this.Refresh()
        }
        onEnable() { }
        Refresh() {
            this.GiftNum = 1 == s.KillRank ? 3 : 2 == s.KillRank ? 2 : 3 == s.KillRank ? 1 : 0, this.GoldNum = s
                .KillRank >= 4 && s.KillRank <= 10 ? 600 : 0, this.GoldLabel.text = this.GoldNum.toString(),
                this.GiftLabel.text = this.GiftNum.toString(), 0 == this.GoldNum && 0 == this.GiftNum || 1 == s
                    .IsKillRankAward ? this.GetAwardBtn.gray = !0 : this.GetAwardBtn.gray = !1
        }
        MyRankRefresh(e) {
            e.rank <= 3 ? (this.rankicon.visible = !0, this.rankicon.skin = "res/Rank/No" + e.rank + ".png",
                this.ranklabel.visible = !1, this.titletp.visible = !0, this.titletp.skin =
                "res/KillRank/killrank" + e.rank + ".png") : (this.rankicon.visible = !1, this.ranklabel
                    .visible = !0, this.ranklabel.text = e.rank, this.ranklabel.fontSize = "未上榜" == e.rank ?
                        25 : 50, this.titletp.visible = !1), this.icon.skin = e.head, this.namelabel.text = e
                            .nick_name, this.killlabel.text = e.killer_total + "人"
        }
        RankSet() {
            let e = s.KillRankData.pop(),
                t = s.KillRankData,
                i = !1;
            for (let a = 0; a < t.length; a++) t[a].rank = a + 1, t[a].uid == e.uid && t[a].rank <= 50 && (i = !
                0, e.rank = t[a].rank);
            i || (e.rank = "未上榜"), this.KillRankData = s.KillRankData, this.KillRankList.itemRender = F, this
                .KillRankList.vScrollBarSkin = null, this.KillRankList.array = this.KillRankData, this
                    .KillRankList.renderHandler = Laya.Handler.create(this, this.freshList1, null, !1), this
                        .MyRankRefresh(e)
        }
        freshList1(e, t) {
            e.setShow(this.KillRankData[t])
        }
        GetAward() {
            if (n.PlaySound("click"), 0 == this.GoldNum && 0 == this.GiftNum) I.OpenTips("当前排名无奖励的哦！");
            else if (0 != s.IsKillRankAward) I.OpenTips("今日排行奖励已领取！");
            else {
                if (s.IsKillRankAward = 1, d.save_int("IsKillRankAward", s.IsKillRankAward), s
                    .KillRankAwardTimeStamp = new Date((new Date).toLocaleDateString()).getTime() / 1e3 + 86400,
                    d.save_int("KillRankAwardTimeStamp", s.KillRankAwardTimeStamp), this.GiftNum > 0) {
                    I.OpenTips("领取成功！所有道具数量+" + this.GiftNum);
                    for (let e = 0; e < this.GiftNum; e++) D._Instance.BuyProp(1), D._Instance.BuyProp(2), D
                        ._Instance.BuyProp(3), D._Instance.BuyProp(4)
                } else I.OpenTips("恭喜获得" + this.GoldNum + "金币！"), D._Instance.UpdateGold(this.GoldNum);
                this.Refresh()
            }
        }
        Skip() {
            n.PlaySound("click"), this.close(), E._Instance.RoleActiveCtrl(!0)
        }
        onDisable() { }
    }
    class F extends e.Scene.KillRankItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (e.rank <= 3 ? (this.rankicon.visible = !0, this.rankicon.skin = "res/Rank/No" + e.rank +
                ".png", this.ranklabel.visible = !1, this.titletp.visible = !0, this.titletp.skin =
                "res/KillRank/killrank" + e.rank + ".png") : (this.rankicon.visible = !1, this.ranklabel
                    .visible = !0, this.ranklabel.text = e.rank, this.titletp.visible = !1), this.icon
                        .skin = e.head, this.namelabel.text = e.nick_name, this.killlabel.text = e.killer_total +
                        "人")
        }
    }
    class X extends e.Scene.LateChestPanelUI {
        constructor() {
            super(), this.IsTween = !0, this.IsBanner = !0, this.CurBar = 0, this.MaxBar = .8, this.IsOpen = !1,
                this.OpenType = 1, this.isWin = !1, this.currLevel = 1
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.OpenBtn]), this.OpenBtn.on(Laya.Event
                .MOUSE_DOWN, this, this.OpenChest), this.tipstpTween(), Laya.timer.frameLoop(1, this, this
                    .Update), this.MaxBar = .1 * Math.random() + .2
        }
        onOpened(e) {
            e && (this.OpenType = e[0], this.isWin = e[1], this.currLevel = e[2])
        }
        onEnable() { }
        OpenChest() {
            n.PlaySound("click"), this.IsTween && (this.IsTween = !1, this.chestTween()), this.CurBar += .17,
                this.CurBar >= 1 && (this.CurBar = 1), this.CurBar >= this.MaxBar && !this.IsOpen && (this
                    .IsOpen = !0, Laya.timer.once(300, this, () => {
                        this.getComponent(P).showlatebannerAd(2), Laya.timer.once(2e3, this, this
                            .OpenChestCallBack)
                    }))
        }
        OpenChestCallBack() {
            let e = l.GetDataRandom({
                arry: [88, 168, 188, 288],
                range: 1
            })[0];
            switch (I.OpenTips("Diamonds +" + e), D._Instance.UpdateDiamond(e), this.OpenType) {
                case 1:
                    this.StartGame();
                    break;
                case 2:
                case 3:
                    s.MaxLevel % s.IsOpenChest == 0 ? Laya.View.open("Scene/ChestPanel.scene") : Laya.View.open(
                        "Scene/SettlePanel.scene")
            }
        }
        StartGame() {
            if (D._Instance.StartGame(), s.MaxLevel > 3) {
                let e = !0,
                    t = 1,
                    i = l.GetArrDifference(s.KillerSkinData, [1, 2, 3, 4, 5, 6, 7]);
                console.log("trykillerdata:", i), i.length <= 0 ? e = !1 : t = l.GetDataRandom({
                    arry: i,
                    range: 1
                })[0];
                let a = !0,
                    n = 1,
                    r = l.GetArrDifference(s.RoleSkinData, [1, 2, 3, 4, 5, 6, 7, 8]);
                console.log("roledata:", r), r.length <= 0 ? a = !1 : n = l.GetDataRandom({
                    arry: r,
                    range: 1
                })[0], e || a ? (Laya.View.open("Scene/GamePanel.scene"),
                    Laya.View.open("Scene/TrySkinPanel.scene", !1, [a, n, e, t])) :
                        Laya.View.open("Scene/GamePanel.scene", !0, [1])
            } else Laya.View.open("Scene/GamePanel.scene", !0, [1])
        }
        Update() {
            this.zztp.rotation += 3, this.CurBar > 0 && (this.CurBar -= .006), this.chestbar.width = 600 * this
                .CurBar
        }
        chestTween() {
            Laya.Tween.to(this.chesttp, {
                rotation: 15
            }, 50, null, Laya.Handler.create(this, this.chestTween1))
        }
        chestTween1() {
            Laya.Tween.to(this.chesttp, {
                rotation: -15
            }, 100, null, Laya.Handler.create(this, this.chestTween2))
        }
        chestTween2() {
            Laya.Tween.to(this.chesttp, {
                rotation: 15
            }, 100, null, Laya.Handler.create(this, this.chestTween3))
        }
        chestTween3() {
            Laya.Tween.to(this.chesttp, {
                rotation: 0
            }, 50, null, Laya.Handler.create(this, function () {
                this.IsTween = !0
            }))
        }
        tipstpTween() {
            Laya.Tween.to(this.tipstp, {
                scaleX: 1.2,
                scaleY: 1.2
            }, 500, null, Laya.Handler.create(this, this.tipstpTween1))
        }
        tipstpTween1() {
            Laya.Tween.to(this.tipstp, {
                scaleX: 1,
                scaleY: 1
            }, 500, null, Laya.Handler.create(this, this.tipstpTween))
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class j extends e.Scene.LoadingExportPanelUI {
        constructor() {
            super(), this.IsShow = !1, this.MiniData = [], this.scroll = 0, this.IsMove = 60, this
                .LoadingIndex = 0, this.IsLoading = !1
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SkipBtn]), this.SkipBtn.on(Laya.Event.CLICK,
                this, this.Skip), this.LoadingBg.visible = !0, this.LoadingLabel.visible = !0, this.SkipBtn
                    .visible = !1, Laya.timer.frameLoop(1, this, this.Update), Laya.timer.loop(20, this, this
                        .Loading)
        }
        onEnable() { }
        Skip() {
            n.PlaySound("click"), Laya.View.open("Scene/HotExportPanel.scene", !0, [1])
        }
        MiniSet() {
            this.ExportList.height = Laya.stage.height - 230, this.ExportList.repeatY = Math.floor(Laya.stage
                .height / 255), this.ExportList.itemRender = J, this.ExportList.vScrollBarSkin = null, this
                    .MiniData = s.LoadingExportData, this.ExportList.array = this.MiniData, this.ExportList
                        .renderHandler = Laya.Handler.create(this, this.freshList1, null, !1), this.MiniScoll()
        }
        freshList1(e, t) {
            e.setShow(this.MiniData[t])
        }
        MiniScoll() {
            this.MiniData.length <= Math.floor(Laya.stage.height / 255) * this.ExportList.repeatX || (Laya.timer
                .loop(30, this, this.MiniScollLoop), this.ExportList.on(Laya.Event.MOUSE_DOWN, this, () => {
                    this.IsMove = 0
                }))
        }
        MiniScollLoop() {
            this.ExportList.scrollBar.max && (this.IsMove >= 60 ? 0 == this.scroll ? (this.ExportList.scrollBar
                .value += 2, this.ExportList.scrollBar.value >= this.ExportList.scrollBar.max && (this
                    .scroll = this.ExportList.scrollBar.max)) : (this.ExportList.scrollBar.value -= 2,
                        this.ExportList.scrollBar.value <= 0 && (this.scroll = 0)) : this.IsMove++)
        }
        Update() {
            s.ExportSwitch && s.LoadingExportData.length > 0 && !this.IsShow && (this.IsShow = !0, this
                .MiniSet()), this.LoadingBar.width = this.LoadingIndex / 100 * 690
        }
        Loading() {
            this.IsLoading || (this.LoadingIndex++, this.LoadingIndex >= 100 && (this.IsLoading = !0, this
                .LoadingBg.visible = !1, this.LoadingLabel.visible = !1, this.SkipBtn.visible = !0))
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class J extends e.Scene.ExportMedItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this.exporticon.skin = e
                .pathName, this.exportlabel.text = e.name, this.on(Laya.Event.MOUSE_DOWN, this, this
                    .OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class Z extends Laya.Script {
        constructor() {
            super()
        }
        static Init() {
            let e = d.load_string("Name");
            s.Name = e || "You";
            let t = d.load_string("Head");
            s.Head = t || "res/yktp.jpg";
            let i = d.load_int("MaxLevel");
            s.MaxLevel = i || 1;
            let a = d.load_int("Gold");
            s.Gold = a || 0;
            let n = d.load_int("Diamond");
            s.Diamond = n || 0;
            let l = d.load_int("RoleSkinId");
            s.RoleSkinId = l || 1;
            let r = d.load_string("RoleSkinData");
            if (r) {
                let e = JSON.parse(r);
                s.RoleSkinData = e
            } else s.RoleSkinData = [1];
            let o = d.load_int("KillerSkinId");
            s.KillerSkinId = o || 1;
            let h = d.load_string("KillerSkinData");
            if (h) {
                let e = JSON.parse(h);
                s.KillerSkinData = e
            } else s.KillerSkinData = [1];
            let c = d.load_string("DowerData");
            if (c) {
                let e = JSON.parse(c);
                s.DowerData = e
            } else s.DowerData = [{
                dowertype: 1,
                dowerlv: 0,
                dowerclicklv: 0
            }, {
                dowertype: 2,
                dowerlv: 0,
                dowerclicklv: 0
            }];
            let p = d.load_int("IsNewUser");
            s.IsNewUser = p || 0;
            let m = d.load_int("RoleTaskIndex");
            s.RoleTaskIndex = m || 0;
            let y = d.load_int("ShowNewSkinIndex");
            s.ShowNewSkinIndex = y || 0;
            d.load_int("RoleSkin4VideoNum");
            s.RoleSkin4VideoNum = 0;
            d.load_int("KillerSkin4VideoNum");
            s.KillerSkin4VideoNum = 0;
            d.load_int("RoleSkin7VideoNum");
            s.RoleSkin7VideoNum = 0;
            d.load_int("RoleSkin8VideoNum");
            s.RoleSkin8VideoNum = 0;
            let S = d.load_int("LotteryNum");
            S ? s.LotteryNum = S : 0 == S ? s.LotteryNum = 0 : (s.LotteryNum = 7, s.LotteryTimeStamp = 0);
            let I = d.load_int("LotteryTimeStamp");
            if (I) {
                s.LotteryTimeStamp = I, (new Date).getTime() / 1e3 >= s.LotteryTimeStamp && (s.LotteryNum = 7, d
                    .save_int("LotteryNum", s.LotteryNum))
            } else s.LotteryTimeStamp = 0;
            let g = d.load_int("IsOneGift");
            s.IsOneGift = g || 0;
            let u = d.load_int("GiftTimeStamp");
            s.GiftTimeStamp = u || 0;
            let k = d.load_int("IsSevenDay");
            s.IsSevenDay = k || 0;
            let L = d.load_int("CurrSignDay");
            s.CurrSignDay = L || 1;
            let w = d.load_int("NextSignDay");
            s.NextSignDay = w || 1;
            let f = d.load_int("SignTimeStamp");
            if (f) {
                if (s.SignTimeStamp = f, (new Date).getTime() / 1e3 >= s.SignTimeStamp) {
                    s.IsSign = 0;
                    let e = 1;
                    e = s.NextSignDay % 7 == 0 ? 7 : s.NextSignDay % 7, s.NextSignDay > 7 && (s.IsSevenDay = 1,
                        d.save_int("IsSevenDay", s.IsSevenDay)), s.CurrSignDay = e, d.save_int(
                            "CurrSignDay", s.CurrSignDay)
                } else s.IsSign = 1
            } else s.SignTimeStamp = 0, s.IsSign = 0;
            let v = d.load_string("PropData");
            if (v) {
                let e = JSON.parse(v);
                s.PropData = e
            } else s.PropData = [{
                propid: 1,
                proptips: "Stuck the enemy for 6 seconds",
                proptype: 3,
                propnum: 1,
                propgold: 200
            }, {
                propid: 2,
                proptips: "Invisible for 5 seconds",
                proptype: 2,
                propnum: 1,
                propgold: 200
            }, {
                propid: 3,
                proptips: "Show all escapees",
                proptype: 1,
                propnum: 1,
                propgold: 200
            }, {
                propid: 4,
                proptips: "Speed up for 5 seconds",
                proptype: 3,
                propnum: 1,
                propgold: 200
            }];
            let C = d.load_string("EquipData");
            if (C) {
                let e = JSON.parse(C),
                    t = (new Date).getTime() / 1e3;
                for (let i = 0; i < e.length; i++)
                    if (0 != e[i].equipstate)
                        if (t - e[i].equiptimestamp >= e[i].equiptime) e[i].equipstate = 0;
                        else switch (e[i].equipstate) {
                            case 1:
                                switch (e[i].equiptype) {
                                    case 1:
                                        switch (e[i].equipid) {
                                            case 1:
                                                s.KillerWeapId = 0;
                                                break;
                                            case 2:
                                                s.KillerMaskId = 0
                                        }
                                        break;
                                    case 2:
                                        switch (e[i].equipid) {
                                            case 3:
                                                s.RoleWeapId = 0;
                                                break;
                                            case 4:
                                                s.RoleMaskId = 0
                                        }
                                }
                                break;
                            case 2:
                                switch (e[i].equiptype) {
                                    case 1:
                                        switch (e[i].equipid) {
                                            case 1:
                                                s.KillerWeapId = e[i].equipid;
                                                break;
                                            case 2:
                                                s.KillerMaskId = e[i].equipid
                                        }
                                        break;
                                    case 2:
                                        switch (e[i].equipid) {
                                            case 3:
                                                s.RoleWeapId = e[i].equipid;
                                                break;
                                            case 4:
                                                s.RoleMaskId = e[i].equipid
                                        }
                                }
                        }
                s.EquipData = e
            } else s.EquipData = [{
                equipid: 1,
                equipname: "Christmas tree",
                equiptips: "Attack range +10%",
                equiptype: 1,
                equipstate: 0,
                equiptime: 3600,
                equiptimestamp: 0
            }, {
                equipid: 2,
                equipname: "Pumpkin head",
                equiptips: "Ignore the defense",
                equiptype: 1,
                equipstate: 0,
                equiptime: 3600,
                equiptimestamp: 0
            }, {
                equipid: 3,
                equipname: "Hopter",
                equiptips: "+10% speed",
                equiptype: 2,
                equipstate: 0,
                equiptime: 3600,
                equiptimestamp: 0
            }, {
                equipid: 4,
                equipname: "A raccoon head",
                equiptips: "Resist an arrest",
                equiptype: 2,
                equipstate: 0,
                equiptime: 3600,
                equiptimestamp: 0
            }];
            let T = d.load_int("KillRankAwardTimeStamp");
            if (T) {
                s.KillRankAwardTimeStamp = T, (new Date).getTime() / 1e3 >= s.KillRankAwardTimeStamp ? s
                    .IsKillRankAward = 0 : s.IsKillRankAward = 1
            } else s.KillRankAwardTimeStamp = 0, s.IsKillRankAward = 0;
            s.LoadingNum++, console.log("本地数据加载成功！")
        }
    }
    class Q extends Laya.Script {
        static Init() {
            I.GetPhoneMsg(), I.GetInitMsg(), Z.Init(), T.Init()
        }
        static LoadMsgData() {
            // window.wx.loadSubpackage({
            //     name: "GameScene",
            //     success: function (e) {
            b.Init(), C.Init(), L.Init(), o.Init()
            //     },
            //     fail: function (e) {
            //         console.log("分包失败"), Q.LoadMsgData()
            //     }
            // })
        }
        static LoadScene() {
            var e = Laya.stage.addChild(Laya.loader.getRes("GameScene/Scene/Conventional/Scene.ls"));
            Laya.stage.setChildIndex(e, 0), e.addComponent(D)
        }
    }
    class $ extends e.Scene.LoadingPanelUI {
        constructor() {
            super(), this.IsLoadRes = !0, this.IsLoadScene = !0, this.IsOpenUI = !0
        }
        onAwake() {
            a.MatchScreen(this);
            let e = Laya.stage.height / 1334,
                t = Laya.stage.width / 750;
            e >= t ? this.Bg.scale(e, e) : this.Bg.scale(t, t), Laya.timer.frameLoop(1, this, this.Update), I
                .OpenShareMenu(), I.GetIvMsg()
            this.statrLoading = false;
            window.loadIngShow = true;
            platform.getInstance().yadstartup("Christmas-3d-Maze-Hunt-Or-Catch", () => {
                window.yad.scale(0.8, 0.8);
                window.yad.right = 0;
                Laya.stage.addChild(window.scrollList);
                Laya.stage.addChild(window.box_adTwo);
                window.box_adTwo.bottom = 540;
                window.box_adTwo.scale(0.8, 0.8);
                window.box_adTwo.setSpaceX(-210)
                window.scrollList.bottom = 80;
                window.box_adTwo.visible = window.scrollList.visible = false;
                window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Christmas-3d-Maze-Hunt-Or-Catch-musicState") ?
                    JSON.parse(Laya.LocalStorage.getItem("Christmas-3d-Maze-Hunt-Or-Catch-musicState")) : false;
                this.LoadingBar.width = 510;
                this.statrLoading = true;
            })
        }
        onEnable() { }
        Update() {
            if (!this.statrLoading) {
                return;
            }
            this.LoadingBar.width = 63.75 * s.LoadingNum,
                3 == s.LoadingNum && this.IsLoadRes ? (this.IsLoadRes = !1, Q.LoadMsgData()) :
                    7 == s.LoadingNum && this.IsLoadScene ? (this.IsLoadScene = !1,
                        Laya.loader.create("GameScene/Scene/Conventional/Scene.ls",
                            Laya.Handler.create(Q, Q.LoadScene)))
                        : 8 == s.LoadingNum &&
                        this.IsOpenUI &&
                        (this.IsOpenUI = !1,
                            Laya.View.open("Scene/StartPanel.scene"),
                            platform.getInstance().hideSplash(),
                            platform.getInstance().showBanner())
        }
        onDisable() {
            window.loadIngShow = false;
            Laya.timer.clearAll(this);
        }
    }
    class ee extends e.Scene.LotteryPanelUI {
        constructor() {
            super(), this.LotteryData = [{
                id: 1,
                type: 1,
                typenum: 1888
            }, {
                id: 2,
                type: 4,
                typenum: 588
            }, {
                id: 3,
                type: 1,
                typenum: 188
            }, {
                id: 4,
                type: 4,
                typenum: 888
            }, {
                id: 5,
                type: 1,
                typenum: 288
            }, {
                id: 6,
                type: 1,
                typenum: 688
            }, {
                id: 7,
                type: 4,
                typenum: 1388
            }, {
                id: 8,
                type: 1,
                typenum: 1388
            }], this.SkinName = "", this.IsLottery = !1, this.TurntableId = 1
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.LotteryBtn, this.SkipBtn]), this.LotteryBtn
                .on(Laya.Event.MOUSE_DOWN, this, this.Lottery), this.SkipBtn.on(Laya.Event.CLICK, this, this
                    .Skip), this.RefreshLottery(), a.SetBtnBottom(this.LotteryTipsLabel, 470), a.SetBtnBottom(
                        this.LotteryBtn, 340), a.SetBtnBottom(this.SkipBtn, 280), Laya.timer.frameLoop(1, this, this
                            .Update)
        }
        RefreshLottery() {
            for (let e = 0; e < this.LotteryData.length; e++)
                if (2 == this.LotteryData[e].type) {
                    for (let t = 0; t < s.RoleSkinData.length; t++)
                        if (5 == s.RoleSkinData[t]) {
                            this.LotteryData[e].type = 1, this.LotteryData[e].typenum = 888;
                            break
                        }
                } else if (3 == this.LotteryData[e].type)
                    for (let t = 0; t < s.KillerSkinData.length; t++) s.KillerSkinData[t] == this.LotteryData[e]
                        .typenum && (this.LotteryData[e].type = 1, this.LotteryData[e].typenum = 588);
            for (let e = 0; e < this.LotteryData.length; e++) {
                let t = this.ZPTP.getChildAt(e),
                    i = t.getChildAt(0),
                    a = t.getChildAt(1),
                    s = t.getChildAt(2),
                    n = t.getChildAt(3);
                switch (this.LotteryData[e].type) {
                    case 1:
                        i.visible = !1, a.visible = !0, s.visible = !1, n.text = "x" + this.LotteryData[e]
                            .typenum;
                        break;
                    case 2:
                        i.skin = "res/TrySkin/role" + this.LotteryData[e].typenum + ".png", i.visible = !0, a
                            .visible = !1, s.visible = !1, n.text = "x1";
                        break;
                    case 3:
                        i.skin = "res/TrySkin/killer" + this.LotteryData[e].typenum + ".png", i.visible = !0, a
                            .visible = !1, s.visible = !1, n.text = "x1";
                        break;
                    case 4:
                        i.visible = !1, a.visible = !1, s.visible = !0, n.text = "x" + this.LotteryData[e]
                            .typenum
                }
                t.visible = !0
            }
            this.RefreshUI()
        }
        RefreshUI() {
            7 == s.LotteryNum ? (this.videotp.visible = !1, this.cjtp.visible = !1, this.mfcjtp.visible = !0) :
                (this.videotp.visible = !0, this.cjtp.visible = !0, this.mfcjtp.visible = !1)
        }
        GetSkinName() {
            let e = !1,
                t = !1,
                i = !1;
            for (let i = 0; i < s.KillerSkinData.length; i++) 6 == s.KillerSkinData[i] && (e = !0), 7 == s
                .KillerSkinData[i] && (t = !0);
            for (let e = 0; e < s.RoleSkinData.length; e++) 5 == s.RoleSkinData[e] && (i = !0);
            e ? t ? i || (this.SkinName = "Protector") : this.SkinName = "Cheetah" : this.SkinName = "Wolf"
        }
        onEnable() { }
        Lottery() {
            n.PlaySound("click"), this.IsLottery ? I.OpenTips("Lottery in progress...") : s.LotteryNum > 0 ? s.LotteryNum >=
                7 ? this.LotteryCallBack() : m.CreateVideoAd(0, Laya.Handler.create(this, this.LotteryCallBack),
                    Laya.Handler.create(this, this.LotteryFailCallBack), Laya.Handler.create(this, () => {
                        I.ShareApp(Laya.Handler.create(this, this.LotteryCallBack), Laya.Handler.create(
                            this, this.LotteryFailCallBack))
                    })) : I.OpenTips("Please come back tomorrow!")
        }
        LotteryCallBack() {
            this.IsLottery = !0, this.RefreshLottery(), s.LotteryNum--, d.save_int("LotteryNum", s.LotteryNum),
                s.LotteryTimeStamp = new Date((new Date).toLocaleDateString()).getTime() / 1e3 + 86400, d
                    .save_int("LotteryTimeStamp", s.LotteryTimeStamp), this.ZPTP.rotation = 0;
            let e = 3600;
            this.TurntableId = Math.round(7 * Math.random() + 1), e += 35 * Math.random() + (320 - 45 * (this
                .TurntableId - 1)), Laya.Tween.to(this.ZPTP, {
                    rotation: e
                }, 4500, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                    this.IsLottery = !1, this.RefreshUI();
                    for (let e = 0; e < this.LotteryData.length; e++)
                        if (this.LotteryData[e].id == this.TurntableId) switch (this.LotteryData[e]
                            .type) {
                                case 1:
                                    D._Instance.UpdateGold(this.LotteryData[e].typenum), I.OpenTips(
                                        "Coins +" + this.LotteryData[e].typenum);
                                    break;
                                case 2:
                                    D._Instance.UnLockSkin(1, 5), I.OpenTips("Congratulations on getting the new skin! Please check it out in the character!");
                                    break;
                                case 3:
                                    D._Instance.UnLockSkin(2, this.LotteryData[e].typenum), I.OpenTips(
                                        "Congratulations on getting the new skin! Please check it out in the character!");
                                    break;
                                case 4:
                                    D._Instance.UpdateDiamond(this.LotteryData[e].typenum), I.OpenTips(
                                        "Diamonds +" + this.LotteryData[e].typenum)
                            }
                })), n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        LotteryFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        Skip() {
            n.PlaySound("click"), this.IsLottery ? I.OpenTips("Lottery in progress...") : (this.close(), E._Instance
                .RoleActiveCtrl(!0))
        }
        Update() {
            this.LotteryTipsLabel.text = "Remaining of draws times: " + s.LotteryNum + "/7", this.LotteryLabel.visible = !1
        }
        onOpened(data) {
            this.dataFun = data || {};
        }
        onDisable() {
            Laya.timer.clearAll(this);
            if (this.dataFun.closeFun) {
                this.dataFun.closeFun.run();
            }
        }
    }
    class te extends e.Scene.NewExportPanelUI {
        constructor() {
            super(), this.MiniData = [], this.scroll = 0, this.IsMove = 60
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SkipBtn]), this.SkipBtn.on(Laya.Event.CLICK,
                this, this.Skip), s.ExportSwitch && s.NewExportData.length > 0 && this.MiniSet(), this
                    .SkipBtn.visible = !1, Laya.timer.once(1e3, this, () => {
                        this.SkipBtn.visible = !0
                    })
        }
        Skip() {
            n.PlaySound("click"), this.close(), E._Instance.RoleActiveCtrl(!0)
        }
        onEnable() { }
        MiniSet() {
            this.ExportList.itemRender = ie, this.ExportList.vScrollBarSkin = null, this.MiniData = s
                .NewExportData, this.ExportList.array = this.MiniData, this.ExportList.renderHandler = Laya
                    .Handler.create(this, this.freshList1, null, !1), this.MiniScoll()
        }
        freshList1(e, t) {
            e.setShow(this.MiniData[t])
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
        MiniScoll() {
            this.MiniData.length <= Math.floor(Laya.stage.height / 255) * this.ExportList.repeatX || (Laya.timer
                .loop(30, this, this.MiniScollLoop), this.ExportList.on(Laya.Event.MOUSE_DOWN, this, () => {
                    this.IsMove = 0
                }))
        }
        MiniScollLoop() {
            this.ExportList.scrollBar.max && (this.IsMove >= 60 ? 0 == this.scroll ? (this.ExportList.scrollBar
                .value += 2, this.ExportList.scrollBar.value >= this.ExportList.scrollBar.max && (this
                    .scroll = this.ExportList.scrollBar.max)) : (this.ExportList.scrollBar.value -= 2,
                        this.ExportList.scrollBar.value <= 0 && (this.scroll = 0)) : this.IsMove++)
        }
    }
    class ie extends e.Scene.ExportMedItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this.exporticon.skin = e
                .pathName, this.exportlabel.text = e.name, this.on(Laya.Event.MOUSE_DOWN, this, this
                    .OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class ae extends e.Scene.OverPanelUI {
        constructor() {
            super(), this.IsCountDown = !0, this.CountDownTime = 9, this.MiniData = []
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.ReviveBtn, this.SkipBtn]), this.ReviveBtn.on(
                Laya.Event.MOUSE_DOWN, this, this.Revive), this.SkipBtn.on(Laya.Event.CLICK, this, this
                    .Skip), this.CountDownLabel.text = this.CountDownTime.toString(), Laya.timer.loop(1e3, this,
                        this.CountDown), D._Instance.NameLabelCtrl(!1), this.ExportList.visible = s.ExportSwitch, s
                            .ExportSwitch && this.MiniSet()
            window.scrollList.visible = true;
        }
        onEnable() { }
        Revive() {
            n.PlaySound("click"), this.IsCountDown = !1, m.CreateVideoAd(2, Laya.Handler.create(this, this
                .ReviveCallBack), Laya.Handler.create(this, this.ReviveFailCallBack), Laya.Handler
                    .create(this, () => {
                        I.ShareApp(Laya.Handler.create(this, this.ReviveCallBack), Laya.Handler.create(this,
                            this.ReviveFailCallBack))
                    }))
        }
        ReviveCallBack() {
            D._Instance.IsStartGame = !0, D._Instance.IsCountDown = !0, D._Instance.CountTime += 30;
            let e = D._Instance.Player.getComponent(f);
            e.IsDie ? (e.KillerTargetCtrl.IsDiz = !0, e.KillerTargetCtrl.IsDizTime = 300, 2 != e
                .KillerTargetCtrl.KillerSkinId && 7 != e.KillerTargetCtrl.KillerSkinId ? e.KillerTargetCtrl
                    .PlayMyAni("ssidle", 1) : e.KillerTargetCtrl.PlayMyAni("ssidle1", 1), D._Instance
                        .CreateEffect("XuanYun", e.KillerTarget, e.KillerTargetCtrl.IsDizTime), e.Help()) : e
                            .PlayMyAni("roleidle"), n.CurrBgm = 0, Laya.View.open("Scene/GamePanel.scene", !0, [2]);
            let t = {};
            t.name = e.MyName, t.type = t.name == "You" ? "were rescued" : "was rescued", D._Instance.GameLeadData.push(t), D._Instance.NameLabelCtrl(!0),
                n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        ReviveFailCallBack() {
            this.IsCountDown = !0, n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        ReviveErrCallBack() {
            this.IsCountDown = !0
        }
        Skip() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    100 * Math.random() <= s.OverEggObbs && 1 == s.TotalSwitch && 1 == s
                        .BannerSwitch ? Laya.View.open("Scene/LateChestPanel.scene", !0, [2]) : s.MaxLevel % s.IsOpenChest == 0 ?
                        Laya.View.open("Scene/ChestPanel.scene") :
                        Laya.View.open("Scene/SettlePanel.scene")
                })
        }
        CountDown() {
            this.IsCountDown && (this.CountDownTime--, this.CountDownLabel.text = this.CountDownTime.toString(),
                this.CountDownTime <= 0 && this.Skip())
        }
        MiniSet() {
            this.ExportList.itemRender = se;
            let e = l.GetDataRandom({
                arry: s.OverExportData,
                range: 6
            });
            this.MiniData = e, this.ExportList.array = this.MiniData, this.ExportList.renderHandler = Laya
                .Handler.create(this, this.freshList1, null, !1)
        }
        freshList1(e, t) {
            e.setShow(this.MiniData[t])
        }
        onDisable() {
            window.scrollList.visible = false;
            Laya.timer.clearAll(this)
        }
    }
    class se extends e.Scene.ExportMedItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            e && (this.exportbg.skin = "res/Export/bg" + l.GetRandInt(1, 4) + ".png", this.exporticon.skin = e
                .pathName, this.exportlabel.text = e.name, this.on(Laya.Event.MOUSE_DOWN, this, this
                    .OnClick, [e]))
        }
        OnClick(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
    }
    class ne extends e.Scene.SetPanelUI {
        constructor() {
            super()
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SkipBtn, this.YinYueGuanBtn, this
                .YinYueKaiBtn, this.YinXiaoGuanBtn, this.YinXiaoKaiBtn, this.ZhenDongGuanBtn, this
                .ZhenDongKaiBtn
            ]), this.YinYueGuanBtn.on(Laya.Event.CLICK, this, this.YinYueGuan), this.YinYueKaiBtn.on(Laya
                .Event.CLICK, this, this.YinYueKai), this.YinXiaoGuanBtn.on(Laya.Event.CLICK, this, this
                    .YinXiaoGuan), this.YinXiaoKaiBtn.on(Laya.Event.CLICK, this, this.YinXiaoKai), this
                        .ZhenDongGuanBtn.on(Laya.Event.CLICK, this, this.ZhenDongGuan), this.ZhenDongKaiBtn.on(Laya
                            .Event.CLICK, this, this.ZhenDongKai), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), s
                                .IsMusic ? (this.YinYueGuanBtn.visible = !1, this.YinYueKaiBtn.visible = !0) : (this
                                    .YinYueGuanBtn.visible = !0, this.YinYueKaiBtn.visible = !1), s.IsSound ? (this
                                        .YinXiaoGuanBtn.visible = !1, this.YinXiaoKaiBtn.visible = !0) : (this.YinXiaoGuanBtn
                                            .visible = !0, this.YinXiaoKaiBtn.visible = !1), s.IsVibrate ? (this.ZhenDongGuanBtn
                                                .visible = !1, this.ZhenDongKaiBtn.visible = !0) : (this.ZhenDongGuanBtn.visible = !0, this
                                                    .ZhenDongKaiBtn.visible = !1)
        }
        onEnable() { }
        YinYueGuan() {
            n.PlaySound("click"), s.IsMusic = !0, n.PlayBGM("bgm", 1), this.YinYueGuanBtn.visible = !1, this
                .YinYueKaiBtn.visible = !0
        }
        YinYueKai() {
            n.PlaySound("click"), s.IsMusic = !1, Laya.SoundManager.stopMusic(), n.CurrBgm = 0, this
                .YinYueGuanBtn.visible = !0, this.YinYueKaiBtn.visible = !1
        }
        YinXiaoGuan() {
            n.PlaySound("click"), s.IsSound = !0, this.YinXiaoGuanBtn.visible = !1, this.YinXiaoKaiBtn
                .visible = !0
        }
        YinXiaoKai() {
            n.PlaySound("click"), s.IsSound = !1, this.YinXiaoGuanBtn.visible = !0, this.YinXiaoKaiBtn
                .visible = !1
        }
        ZhenDongGuan() {
            n.PlaySound("click"), s.IsVibrate = !0, this.ZhenDongGuanBtn.visible = !1, this.ZhenDongKaiBtn
                .visible = !0
        }
        ZhenDongKai() {
            n.PlaySound("click"), s.IsVibrate = !1, this.ZhenDongGuanBtn.visible = !0, this.ZhenDongKaiBtn
                .visible = !1
        }
        Skip() {
            n.PlaySound("click"), this.close(), E._Instance.RoleActiveCtrl(!0)
        }
        onOpened(data) {
            this.dataFun = data || {};
        }
        onDisable() {
            if (this.dataFun.closeFun) {
                this.dataFun.closeFun.run();
            }
        }
    }
    class le extends e.Scene.SettlePanelUI {
        constructor() {
            super(), this.IsGetAward = !1, this.IsVideoGetAward = !1, this.MiniData = []
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.HomeBtn, this.GetAwardBtn, this.NextLevelBtn,
            this.ReGameBtn, this.GoHomeBtn, this.ShareBtn]), this.HomeBtn.on(Laya.Event.CLICK, this, this.Home),
                this.GetAwardBtn.on(Laya.Event.MOUSE_DOWN, this, this.GetAward),
                this.NextLevelBtn.on(Laya.Event.MOUSE_DOWN, this, this.NextLevel),
                this.ReGameBtn.on(Laya.Event.CLICK, this, this.ReGame),
                this.GoHomeBtn.on(Laya.Event.CLICK, this, this.GoHome),
                this.ShareBtn.on(Laya.Event.MOUSE_DOWN, this, this.Share),
                a.SetBtnBottom(this.SettleBox, 280),
                this.BtnSet(D._Instance.IsWin), D._Instance.IsWin ?
                    (s.LevelIndex++, D._Instance.UpdateLevel(),
                        D._Instance.UpdateGold(10 * D._Instance.OpenSwitchNum + 20 * D._Instance.RescueNum + 20 * D._Instance.KillNum + 60),
                        console.log("Coins +", 10 * D._Instance.OpenSwitchNum + 20 * D._Instance.RescueNum + 20 * D._Instance.KillNum + 60),
                        D._Instance.UpdateDiamond(s.GetDiamond), console.log("Diamonds +", s.GetDiamond),
                        this.WinTP.visible = !0, this.WinBox.visible = !0, this.FailTP.visible = !1,
                        this.FailBox.visible = !1, D._Instance.IsKiller ? (this.WinBox.getChildAt(3).visible = !0,
                            this.WinBox.getChildAt(3).getChildAt(0).text = D._Instance.KillNum
                                .toString(), this.WinBox.getChildAt(3).getChildAt(1).text = (20 * D._Instance.KillNum)
                                    .toString(), this.WinBox.getChildAt(4).visible = !0) : (this.WinBox.getChildAt(0)
                                        .visible = !0, this.WinBox.getChildAt(0).getChildAt(0).text = D._Instance.OpenSwitchNum
                                            .toString(), this.WinBox.getChildAt(0).getChildAt(1).text = (10 * D._Instance
                                                .OpenSwitchNum).toString(), this.WinBox.getChildAt(1).visible = !0, this.WinBox
                                                    .getChildAt(1).getChildAt(0).text = D._Instance.RescueNum.toString(), this.WinBox
                                                        .getChildAt(1).getChildAt(1).text = (20 * D._Instance.RescueNum).toString(), this.WinBox
                                                            .getChildAt(2).visible = !0)) : (this.WinTP.visible = !1, this.WinBox.visible = !1, this
                                                                .FailTP.visible = !0, this.FailBox.visible = !0, D._Instance.IsKiller ? this.TipsLabel
                                                                    .text = "Someone escaped" : this.TipsLabel.text = "Fail to escape", this.TipsTP.scale(0, 0), D._Instance
                                                                        .IsKiller && s.DowerData[1].dowerlv < 30 && (this.tipslabel.text = "Attack distance +5 level", Laya.Tween.to(
                                                                            this.TipsTP, {
                                                                            scaleX: 1,
                                                                            scaleY: 1
                                                                        }, 500, Laya.Ease.backOut)), !D._Instance.IsKiller && s.DowerData[0].dowerlv < 30 && (
                                                                            this.tipslabel.text = "Movement speed +5 level", Laya.Tween.to(this.TipsTP, {
                                                                                scaleX: 1,
                                                                                scaleY: 1
                                                                            }, 500, Laya.Ease.backOut))), y.SendMsgToServer("settle_game", [D._Instance.KillNum]),
                this.ExportBox.visible = s.ExportSwitch, s.ExportSwitch && this.MiniSet()
            window.scrollList.visible = true;
        }
        BtnSet(e) {
            this.HomeBtn.visible = e, this.GetAwardBtn.visible = e, this.NextLevelBtn.visible = e, this
                .ReGameBtn.visible = !e, this.GoHomeBtn.visible = !e, this.ShareBtn.visible = !e, e && (this
                    .IsVideoGetAward = !(1 == s.BannerSwitch && 1 == s.TotalSwitch && 100 * Math.random() > s
                        .SettleVideoAwardOdds), 1 == s.BannerSwitch && 1 == s.TotalSwitch ? (this.videotp
                            .visible = !1, this.sbjltp.pos(140, 47),
                            this.sbjltp.visible = !0
                        ) : (this.videotp
                            .visible = !0, this.sbjltp.pos(166, 47),
                            this.sbjltp.visible = !0
                    ))
        }
        onEnable() { }
        GetAward() {
            n.PlaySound("click"),
                m.CreateVideoAd(1, Laya.Handler.create(this, this.AwardCallBack), Laya.Handler.create(this, this.AwardFailCallBack))
        }
        AwardCallBack() {
            this.IsGetAward = !0;
            let e = 10 * D._Instance.OpenSwitchNum + 20 * D._Instance.RescueNum + 20 * D._Instance.KillNum + 60;
            I.OpenTips("Coins +" + 2 * e), D._Instance.UpdateGold(e), this.ReGame0(), n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        AwardFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        NextLevel() {
            n.PlaySound("click"), 1 == s.TotalSwitch && 1 == s.BannerSwitch && 100 * Math.random() < s
                .VictoryVideoOdds ? m.CreateVideoAd(1, Laya.Handler.create(this, this.NextLevelCallBack), Laya
                    .Handler.create(this, this.NextLevelCallBack), Laya.Handler.create(this, this
                        .NextLevelCallBack), !1) : platform.getInstance().showInterstitial(() => { this.NextLevelCallBack() })
        }
        NextLevelCallBack() {
            D._Instance.ReGame(!1), Laya.View.open("Scene/StartPanel.scene")
        }
        ReGame0() {
            n.PlaySound("click"), D._Instance.StartGame(), this.OpenTrySkin()
        }
        ReGame() {
            n.PlaySound("click"), platform.getInstance().showInterstitial(() => { D._Instance.StartGame(), this.OpenTrySkin() })
        }
        Home() {
            n.PlaySound("click"), platform.getInstance().showInterstitial(() => { D._Instance.ReGame(!1), Laya.View.open("Scene/StartPanel.scene") })
        }
        GoHome() {
            n.PlaySound("click"),
                platform.getInstance().showInterstitial(() => {
                    D._Instance.ReGame(!1), Laya.View.open("Scene/SkinPanel.scene"), n.CurrBgm =
                        0, n.PlayBGM("bgm", 1)
                })
        }
        Share() {
            n.PlaySound("click"), I.ShareApp(Laya.Handler.create(this, () => {
                if (D._Instance.IsKiller && s.DowerData[1].dowerlv < 30) {
                    s.DowerData[1].dowerlv += 5;
                    let e = JSON.stringify(s.DowerData);
                    d.save_string("DowerData", e), this.ShareBtn.visible = !1, I.OpenTips(
                        "分享成功！攻击距离+5级！")
                }
                if (!D._Instance.IsKiller && s.DowerData[0].dowerlv < 30) {
                    s.DowerData[0].dowerlv += 5;
                    let e = JSON.stringify(s.DowerData);
                    d.save_string("DowerData", e), this.ShareBtn.visible = !1, I.OpenTips(
                        "分享成功！移动速度+5级！")
                }
                n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
            }), Laya.Handler.create(this, () => {
                n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
            }))
        }
        OpenTrySkin() {
            if (D._Instance.StartGame(), s.MaxLevel > 3) {
                let e = !0,
                    t = 1,
                    i = l.GetArrDifference(s.KillerSkinData, [1, 2, 3, 4, 5, 6, 7]);
                console.log("trykillerdata:", i), i.length <= 0 ? e = !1 : t = l.GetDataRandom({
                    arry: i,
                    range: 1
                })[0];
                let a = !0,
                    n = 1,
                    r = l.GetArrDifference(s.RoleSkinData, [1, 2, 3, 4, 5, 6, 7, 8]);
                console.log("roledata:", r), r.length <= 0 ? a = !1 : n = l.GetDataRandom({
                    arry: r,
                    range: 1
                })[0], e || a ? (Laya.View.open("Scene/GamePanel.scene"), Laya.View.open(
                    "Scene/TrySkinPanel.scene", !1, [a, n, e, t])) : Laya.View.open("Scene/GamePanel.scene",
                        !0, [1])
            } else Laya.View.open("Scene/GamePanel.scene", !0, [1])
        }
        MiniSet() {
            let e = s.SettleExportData;
            this.ExportBox.visible = e.length >= 3, this.MiniData = l.GetDataRandom({
                arry: e,
                range: 3
            }), this.MiniData.length >= 3 && (this.ExportIcon1.skin = this.MiniData[0].pathName, this
                .ExportName1.text = this.MiniData[0].name, this.ExportBtn1.on(Laya.Event.MOUSE_DOWN, this,
                    this.Export, [this.MiniData[0]]), this.ExportIcon2.skin = this.MiniData[1].pathName,
                this.ExportName2.text = this.MiniData[1].name, this.ExportBtn2.on(Laya.Event.MOUSE_DOWN,
                    this, this.Export, [this.MiniData[1]]), this.ExportIcon3.skin = this.MiniData[2]
                        .pathName, this.ExportName3.text = this.MiniData[2].name, this.ExportBtn3.on(Laya.Event
                            .MOUSE_DOWN, this, this.Export, [this.MiniData[2]]))
        }
        Export(e) {
            n.PlaySound("click"), S.SendMsgToServer("game_event", [e.list_type, e.location_index, 1]), I
                .SkipMiniGame(e.appId, e.path, e.list_type, e.location_index)
        }
        onDisable() {
            window.scrollList.visible = false;
        }
    }
    class re extends e.Scene.SkinPanelUI {
        constructor() {
            super(), this.OpenType = 0, this.RoleSkinData = [], this.KillerSkinData = [], this.SkinData = {},
                this.SelectSkinId = 1, this.EquipData = [], this.DowerData = [], this.IsClick = !1, this
                    .scrollBar = 0
        }
        onAwake() {
            re._Instance = this, a.MatchScreen(this), a.AddBtnAnimation([this.SkipBtn, this.BuySkinBtn, this
                .RoleBtn, this.KillerBtn
            ]), a.TopUIMatch(this.TopBox, 0);
            let e = Laya.stage.height / 1334,
                t = Laya.stage.width / 750;
            e >= t ? this.BgBox.scale(e, e) : this.BgBox.scale(t, t), this.SkipBtn.on(Laya.Event.CLICK, this,
                this.Skip), this.BuySkinBtn.on(Laya.Event.MOUSE_DOWN, this, this.BuySkin), this.RoleBtn.on(
                    Laya.Event.CLICK, this, this.Role), this.KillerBtn.on(Laya.Event.CLICK, this, this.Killer),
                Laya.timer.frameLoop(1, this, this.Update), this.CreateScene3D(), this.SkinCutSet(!0, !0), this
                    .DowerSet(), this.TipsTP.scale(0, 0), Laya.Tween.to(this.TipsTP, {
                        scaleX: 1,
                        scaleY: 1
                    }, 500, Laya.Ease.backOut)
        }
        onOpened(e) {
            e && (this.OpenType = e[0])
            window.yad.visible = false;
        }
        onEnable() { }
        EquipRefresh() {
            for (let e = 0; e < s.EquipData.length; e++) {
                let t = s.EquipData[e];
                Math.floor(t.equiptime - (parseInt(((new Date).getTime() / 1e3).toString()) - t
                    .equiptimestamp)) <= 0 && 0 != t.equipstate && (D._Instance.AlterEquipState(t.equipid, 0), I
                        .OpenTips(t.equipname + "Time up!"))
            }
        }
        CreateScene3D() {
            this.Scene3D = Laya.stage.addChild(new Laya.Scene3D), this.Camera = this.Scene3D.addChild(new Laya
                .Camera), this.Camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, this.Camera.transform
                    .position = new Laya.Vector3(0, .5, 6.5), this.Camera.transform.rotationEuler = new Laya
                        .Vector3(0, 0, 0), this.DirectionalLight = this.Scene3D.addChild(new Laya.DirectionLight), this
                            .DirectionalLight.transform.position = new Laya.Vector3(0, 0, 0), this.DirectionalLight
                                .transform.rotationEuler = new Laya.Vector3(0, 0, 180), this.DirectionalLight.color = new Laya
                                    .Vector3(1, 1, 1), this.DirectionalLight.intensity = 1.1, this.SkinRole = this.Scene3D.addChild(
                                        C.SelectRole("Skin")), this.SkinRole.transform.position = new Laya.Vector3(-1, 1.4, 0), this
                                            .SkinRole.transform.rotationEuler = new Laya.Vector3(12, 10, 0), this.SkinRole.getComponent(Laya
                                                .Animator).play("roleidle"), this.RestRoleSkin(this.SkinRole, s.RoleSkinId);
            let e = this.SkinRole.transform.position.clone(),
                t = new Laya.Vector3(0, 0, 0);
            this.Camera.viewport.project(e, this.Camera.projectionViewMatrix, t), this.RoleDP.pos(t.x / Laya
                .stage.clientScaleX, t.y / Laya.stage.clientScaleY - 5), this.Bgtp.y = t.y / Laya.stage
                    .clientScaleY + 80, this.SkinList.height = Laya.stage.height - (this.RoleDP.y + 332), this
                        .SkinList.repeatY = Math.ceil(this.SkinList.height / 258)
        }
        RestKillerSkin(e, t) {
            2 != t && 7 != t ? this.SkinRole.getComponent(Laya.Animator).play("roleidle") : this.SkinRole
                .getComponent(Laya.Animator).play("ssidle1");
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                a.active = !1, 0 != s.KillerMaskId ? "KillerMJ2" == a.name && (a.active = !0) : "KillerMask" ==
                    a.name.substring(0, 10) && parseInt(a.name[10]) == t && (a.meshRenderer.material
                        .albedoTexture = s.KillerMaskMatData[t - 1], a.active = !0), 0 != s.KillerWeapId ?
                        "KillerWQ1" == a.name && (a.active = !0) : "KillerWeap" == a.name.substring(0, 10) &&
                        parseInt(a.name[10]) == t && (a.active = !0)
            }
            switch (t) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 6:
                case 7:
                    e.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s
                        .KillerMatData[t - 1], e.getChildByName("zhuyaojiaose").active = !0;
                    break;
                case 4:
                    e.getChildByName("nvhuang").skinnedMeshRenderer.material.albedoTexture = s.KillerMatData[t -
                        1], e.getChildByName("nvhuang").active = !0
            }
        }
        RestRoleSkin(e, t) {
            this.SkinRole.getComponent(Laya.Animator).play("roleidle");
            for (let i = 0; i < e.numChildren; i++) {
                let a = e.getChildAt(i);
                if (a.active = !1, 0 != s.RoleMaskId) {
                    let e = "RoleMJ41";
                    switch (t) {
                        case 1:
                        case 2:
                        case 3:
                        case 7:
                            e = "RoleMJ42";
                            break;
                        case 4:
                        case 6:
                        case 8:
                            e = "RoleMJ41";
                            break;
                        case 5:
                            e = "RoleMJ43"
                    }
                    a.name == e && (a.active = !0)
                }
                0 != s.RoleWeapId && "RoleWQ3" == a.name && (a.active = !0), "RoleMask" == a.name.substring(0,
                    8) && parseInt(a.name[8]) == t && (a.meshRenderer.material.albedoTexture = s
                        .RoleMaskMatData[t - 1], a.active = !0), "RoleWeap" == a.name.substring(0, 8) &&
                        parseInt(a.name[8]) == t && (a.active = !0)
            }
            switch (t) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 7:
                    e.getChildByName("zhuyaojiaose").skinnedMeshRenderer.material.albedoTexture = s.RoleMatData[
                        t - 1], e.getChildByName("zhuyaojiaose").active = !0;
                    break;
                case 4:
                    e.getChildByName("baixuegongzhu").skinnedMeshRenderer.material.albedoTexture = s
                        .RoleMatData[t - 1], e.getChildByName("baixuegongzhu").active = !0;
                    break;
                case 6:
                    e.getChildByName("yvtu").skinnedMeshRenderer.material.albedoTexture = s.RoleMatData[t - 1],
                        e.getChildByName("yvtu").active = !0;
                    break;
                case 8:
                    e.getChildByName("xiaohongmao").skinnedMeshRenderer.material.albedoTexture = s.RoleMatData[
                        t - 1], e.getChildByName("xiaohongmao").active = !0
            }
        }
        SkinCutSet(e, t) {
            this.RoleTP.visible = e, this.RoleBtn.visible = !e, this.KillerBtn.visible = e, this.KillerTP
                .visible = !e, e ? (t && (this.SelectSkinId = s.RoleSkinId), this.SkinRefresh(e), this.RoleSet(
                    t), this.EquipSet(e)) : (t && (this.SelectSkinId = s.KillerSkinId), this.SkinRefresh(e),
                        this.KillerSet(t), this.EquipSet(e)), this.Refresh()
        }
        SkinRefresh(e) {
            let t = T.SkinData,
                i = [],
                a = [];
            for (let n = 0; n < t.length; n++)
                if (t[n].islock = 0, t[n].isuser = 0, 1 == t[n].skintype) {
                    for (let i = 0; i < s.RoleSkinData.length; i++) t[n].skinid == s.RoleSkinData[i] && (t[n]
                        .islock = 1), t[n].skinid == s.RoleSkinId && (t[n].isuser = 1), t[n].skinid == this
                            .SelectSkinId && e && (this.SkinData = t[n]);
                    i.push(t[n])
                } else {
                    for (let i = 0; i < s.KillerSkinData.length; i++) t[n].skinid == s.KillerSkinData[i] && (t[
                        n].islock = 1), t[n].skinid == s.KillerSkinId && (t[n].isuser = 1), t[n].skinid !=
                        this.SelectSkinId || e || (this.SkinData = t[n]);
                    a.push(t[n])
                } this.RoleSkinData = i, this.KillerSkinData = a
        }
        Refresh() {
            if (1 == this.SkinData.skintype ? (this.RestRoleSkin(this.SkinRole, this.SkinData.skinid), this
                .SkinData.skinid <= 2 ? this.WeapTP.skin = "res/Skill/jnw.png" : this.WeapTP.skin =
            "res/Skill/role" + this.SkinData.skinid + ".png") : (this.RestKillerSkin(this.SkinRole, this
                .SkinData.skinid), this.SkinData.skinid <= 1 ? this.WeapTP.skin = "res/Skill/jnw.png" :
                    this.WeapTP.skin = "res/Skill/killer" + this.SkinData.skinid + ".png"), this.NameLabel
                        .text = this.SkinData.skinname,// this.NameTP.width = 25 * this.SkinData.skinname.length + 65,
                this.WeapNameLabel.text = this.SkinData.skinskillname, this.WeapSkillLabel.text = this.SkinData
                    .skinskilltips, this.WeapTipsLabel.text = this.SkinData.skintips, 1 == this.SkinData.islock)
                this.BuyLabel.visible = !1, this.qhqtp.visible = !1, 1 == this.SkinData.isuser ? (this
                    .BuySkinBtn.gray = !0, this.goldtp.visible = !1, this.zstp.visible = !1, this.videotp
                        .visible = !1, this.sytp.visible = !0) : (this.BuySkinBtn.gray = !1, this.goldtp.visible = !
                            1, this.zstp.visible = !1, this.videotp.visible = !1, this.sytp.visible = !0);
            else if (this.BuySkinBtn.gray = !1, this.BuyLabel.visible = !0, 1 == this.SkinData.unlocktype) this
                .goldtp.visible = !0, this.zstp.visible = !1, this.videotp.visible = !1, this.sytp.visible = !1,
                this.BuyLabel.text = this.SkinData.unlocknum, this.qhqtp.visible = !1;
            else if (2 == this.SkinData.unlocktype) this.goldtp.visible = !1, this.zstp.visible = !0, this
                .videotp.visible = !1, this.sytp.visible = !1, this.BuyLabel.text = this.SkinData.unlocknum,
                this.qhqtp.visible = !1;
            else if (3 == this.SkinData.unlocktype) {
                switch (this.goldtp.visible = !1, this.zstp.visible = !1, this.videotp.visible = !0, this.sytp
                    .visible = !1, this.SkinData.skintype) {
                    case 1:
                        switch (this.SkinData.skinid) {
                            case 2:
                                this.BuyLabel.text = "0/1";
                                break;
                            case 4:
                                this.BuyLabel.text = s.RoleSkin4VideoNum + "/" + this.SkinData.unlocknum;
                                break;
                            case 7:
                                this.BuyLabel.text = s.RoleSkin7VideoNum + "/" + this.SkinData.unlocknum;
                                break;
                            case 8:
                                this.BuyLabel.text = s.RoleSkin8VideoNum + "/" + this.SkinData.unlocknum
                        }
                        break;
                    case 2:
                        switch (this.SkinData.skinid) {
                            case 2:
                                this.BuyLabel.text = "0/1";
                                break;
                            case 4:
                                this.BuyLabel.text = s.KillerSkin4VideoNum + "/" + this.SkinData.unlocknum
                        }
                }
                this.qhqtp.visible = !1
            } else 4 == this.SkinData.unlocktype && (this.goldtp.visible = !1, this.zstp.visible = !1, this
                .videotp.visible = !1, this.sytp.visible = !1, this.BuyLabel.visible = !1, this.qhqtp
                    .visible = !0)
        }
        RoleSet(e) {
            let t = this.scrollBar;
            this.SkinList.itemRender = oe, this.SkinList.vScrollBarSkin = null, this.SkinList.array = this
                .RoleSkinData, this.SkinList.renderHandler = Laya.Handler.create(this, this.freshList1, null, !
                    1), e || (this.SkinList.scrollBar.value = t)
        }
        freshList1(e, t) {
            e.setShow(this.RoleSkinData[t])
        }
        KillerSet(e) {
            let t = this.scrollBar;
            this.SkinList.itemRender = oe, this.SkinList.vScrollBarSkin = null, this.SkinList.array = this
                .KillerSkinData, this.SkinList.renderHandler = Laya.Handler.create(this, this.freshList2, null,
                    !1), e || (this.SkinList.scrollBar.value = t)
        }
        freshList2(e, t) {
            e.setShow(this.KillerSkinData[t])
        }
        BuySkin() {
            n.PlaySound("click"), 1 == this.SkinData.islock ? 1 == this.SkinData.isuser ? I.OpenTips(
                "The character has been used!") : (D._Instance.AlterSkin(this.SkinData.skintype, this.SkinData.skinid), 1 == this
                    .SkinData.skintype ? this.SkinCutSet(!0, !1) : this.SkinCutSet(!1, !1)) : 1 == this.SkinData
                        .unlocktype ? s.Gold >= this.SkinData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance.UpdateGold(-
                            this.SkinData.unlocknum), D._Instance.UnLockSkin(this.SkinData.skintype, this.SkinData
                                .skinid), this.SkinCutSet(!0, !1), this.DowerSet()) : (I.OpenTips("Coins Are Not Enough!"), this
                                    .RoleActiveCtrl(!1), Laya.View.open("Scene/ShopPanel.scene", !1, [2])) : 2 == this.SkinData
                                        .unlocktype ? s.Diamond >= this.SkinData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D._Instance
                                            .UpdateDiamond(-this.SkinData.unlocknum), D._Instance.UnLockSkin(this.SkinData.skintype,
                                                this.SkinData.skinid), this.SkinCutSet(!1, !1), this.DowerSet()) : (I.OpenTips("Diamonds Are Not Enough!"),
                                                    this.RoleActiveCtrl(!1), Laya.View.open("Scene/ShopPanel.scene", !1, [2])) : 3 == this
                                                        .SkinData.unlocktype ? m.CreateVideoAd(2, Laya.Handler.create(this, this.SkinCallBack), Laya
                                                            .Handler.create(this, this.SkinFailCallBack), Laya.Handler.create(this, () => {
                                                                I.ShareApp(Laya.Handler.create(this, this.SkinCallBack), Laya.Handler.create(this,
                                                                    this.SkinFailCallBack))
                                                            })) : 4 == this.SkinData.unlocktype && Laya.View.open("Scene/StartPanel.scene", !0, [2])
        }
        SkinCallBack() {
            switch (this.SkinData.skintype) {
                case 1:
                    switch (this.SkinData.skinid) {
                        case 2:
                            I.OpenTips("Successfully unlocked!"), D._Instance.UnLockSkin(this.SkinData.skintype, this.SkinData
                                .skinid);
                            break;
                        case 4:
                            s.RoleSkin4VideoNum++, d.save_int("RoleSkin4VideoNum", s.RoleSkin4VideoNum), s
                                .RoleSkin4VideoNum >= this.SkinData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D
                                    ._Instance.UnLockSkin(this.SkinData.skintype, this.SkinData.skinid)) : I
                                        .OpenTips("Watch the video " + (this.SkinData.unlocknum - s.RoleSkin4VideoNum) + " more times to unlock!");
                            break;
                        case 7:
                            s.RoleSkin7VideoNum++, d.save_int("RoleSkin7VideoNum", s.RoleSkin7VideoNum), s
                                .RoleSkin7VideoNum >= this.SkinData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D
                                    ._Instance.UnLockSkin(this.SkinData.skintype, this.SkinData.skinid)) : I
                                        .OpenTips("Watch the video " + (this.SkinData.unlocknum - s.RoleSkin7VideoNum) + " more times to unlock!");
                            break;
                        case 8:
                            s.RoleSkin8VideoNum++, d.save_int("RoleSkin8VideoNum", s.RoleSkin8VideoNum), s
                                .RoleSkin8VideoNum >= this.SkinData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D
                                    ._Instance.UnLockSkin(this.SkinData.skintype, this.SkinData.skinid)) : I
                                        .OpenTips("Watch the video " + (this.SkinData.unlocknum - s.RoleSkin8VideoNum) + " more times to unlock!")
                    }
                    break;
                case 2:
                    switch (this.SkinData.skinid) {
                        case 2:
                            I.OpenTips("Successfully unlocked!"), D._Instance.UnLockSkin(this.SkinData.skintype, this.SkinData
                                .skinid);
                            break;
                        case 4:
                            s.KillerSkin4VideoNum++, d.save_int("KillerSkin4VideoNum", s.KillerSkin4VideoNum), s
                                .KillerSkin4VideoNum >= this.SkinData.unlocknum ? (I.OpenTips("Successfully unlocked!"), D
                                    ._Instance.UnLockSkin(this.SkinData.skintype, this.SkinData.skinid)) : I
                                        .OpenTips("Watch the video " + (this.SkinData.unlocknum - s.KillerSkin4VideoNum) + " more times to unlock!")
                    }
            }
            1 == this.SkinData.skintype ? this.SkinCutSet(!0, !1) : this.SkinCutSet(!1, !1), n.CurrBgm = 0, n
                .PlayBGM("bgm", 1)
        }
        SkinFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        Role() {
            n.PlaySound("click"), this.RoleTP.visible || this.SkinCutSet(!0, !0)
        }
        Killer() {
            n.PlaySound("click"), this.KillerTP.visible || (this.SkinCutSet(!1, !0), this.IsClick || (this
                .IsClick = !0, Laya.Tween.clearAll(this.TipsTP), Laya.Tween.to(this.TipsTP, {
                    scaleX: 0,
                    scaleY: 0
                }, 500, Laya.Ease.backIn)))
        }
        Skip() {
            n.PlaySound("click"), Laya.View.open("Scene/StartPanel.scene")
        }
        DowerSet() {
            this.DowerData = s.DowerData, this.DowerList.itemRender = he, this.DowerList.array = this.DowerData,
                this.DowerList.renderHandler = Laya.Handler.create(this, this.freshList3, null, !1)
        }
        freshList3(e, t) {
            e.setShow(this.DowerData[t])
        }
        EquipSet(e) {
            this.EquipRefresh();
            let t = [];
            for (let i = 0; i < s.EquipData.length; i++) e ? 2 == s.EquipData[i].equiptype && t.push(s
                .EquipData[i]) : 1 == s.EquipData[i].equiptype && t.push(s.EquipData[i]);
            this.EquipData = t, this.EquipList.itemRender = ce, this.EquipList.array = this.EquipData, this
                .EquipList.renderHandler = Laya.Handler.create(this, this.freshList4, null, !1)
        }
        freshList4(e, t) {
            e.setShow(this.EquipData[t])
        }
        Update() {
            this.GoldLabel.text = s.Gold.toString(), this.DiamondLabel.text = s.Diamond.toString(), this
                .SkinList && this.SkinList.scrollBar && (this.scrollBar = this.SkinList.scrollBar.value)
        }
        RoleActiveCtrl(e) {
            this.SkinRole && (this.SkinRole.transform.scale = e ? new Laya.Vector3(1, 1, 1) : new Laya.Vector3(
                0, 0, 0))
        }
        onDisable() {
            window.yad.visible = true;
            Laya.timer.clearAll(this), this.Scene3D && this.Scene3D.destroy()
        }
    }
    class oe extends e.Scene.SkinItemUI {
        constructor() {
            super()
        }
        onAwake() {
            this.AddBtnAnimation([this])
        }
        setShow(e) {
            e && (1 == e.skintype ? (this.SkinTP.skin = "res/Skin/role" + e.skinid + ".png", 6 == e.skinid ? (
                this.Bg1.visible = !1, this.Bg2.visible = !0) : (this.Bg1.visible = !0, this.Bg2
                    .visible = !1)) : (this.Bg1.visible = !0, this.Bg2.visible = !1, this.SkinTP.skin =
                        "res/Skin/killer" + e.skinid + ".png"), e.skinid == re._Instance.SelectSkinId ? this
                            .SelectTP.visible = !0 : this.SelectTP.visible = !1, this.on(Laya.Event.CLICK, this, this
                                .SkinCtrl, [e]))
        }
        SkinCtrl(e) {
            n.PlaySound("click");
            for (let e = 0; e < this.parent.numChildren; e++) this.parent.getChildAt(e).name == this.name ? this
                .parent.getChildAt(e).getChildByName("SelectTP").visible = !0 : this.parent.getChildAt(e)
                    .getChildByName("SelectTP").visible = !1;
            re._Instance.SelectSkinId = e.skinid, re._Instance.SkinData = e, re._Instance.Refresh()
        }
        AddBtnAnimation(e) {
            for (let t = 0; t < e.length; t++) e[t].off(Laya.Event.MOUSE_DOWN, this, this.ScaleBig), e[t].off(
                Laya.Event.MOUSE_UP, this, this.ScaleSmall), e[t].off(Laya.Event.MOUSE_OUT, this, this
                    .ScaleSmall), e[t].on(Laya.Event.MOUSE_DOWN, this, this.ScaleBig, [e[t]]), e[t].on(Laya
                        .Event.MOUSE_UP, this, this.ScaleSmall, [e[t]]), e[t].on(Laya.Event.MOUSE_OUT, this, this
                            .ScaleSmall, [e[t]])
        }
        ScaleBig(e) {
            Laya.Tween.to(e, {
                scaleX: .95,
                scaleY: .95
            }, 50)
        }
        ScaleSmall(e) {
            Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 50)
        }
    }
    class he extends e.Scene.DowerItemUI {
        constructor() {
            super(), this.currlv = 0
        }
        onAwake() {
            this.AddBtnAnimation([this.UpLvBtn])
        }
        setShow(e) {
            if (e) {
                if (1 == e.dowertype ? (this.SpeedTP.visible = !0, this.AtkDirTP.visible = !1, this.TipsLabel
                    .text = "Movement speed") : (this.SpeedTP.visible = !1, this.AtkDirTP.visible = !0, this.TipsLabel
                        .text = "Attack distance"), this.LvLabel.text = "Lv." + e.dowerlv, this.dowerLabel.text = "+" + e
                            .dowerlv + "%", e.dowerlv >= 100) this.UpLvBtn.gray = !0, this.xhzstp.visible = !1, this
                                .xhzsLabel.visible = !1, this.barLabel.text = "Max", this.DowerBar.width = 180, this.sjtp
                                    .visible = !1, this.ymjtp.visible = !0;
                else {
                    this.UpLvBtn.gray = !1, this.xhzstp.visible = !0, this.ymjtp.visible = !1, this.xhzsLabel
                        .visible = !0, this.barLabel.text = e.dowerclicklv / 5 * 100 + "%", this.DowerBar
                            .width = e.dowerclicklv / 5 * 180;
                    let i = e.dowerlv - 1 < 0 ? 0 : e.dowerlv - 1;
                    var t = 15 + 15 * Math.floor(i / 5);
                    this.xhzsLabel.text = "-" + t.toString(), s.Gold < t && 1 == s.TotalSwitch && 1 == s
                        .BannerSwitch ? (this.videotp.visible = !0, this.lssjtp.visible = !0, this.sjtp
                            .visible = !1) : (this.videotp.visible = !1, this.lssjtp.visible = !1, this.sjtp
                                .visible = !0)
                }
                this.UpLvBtn.on(Laya.Event.MOUSE_DOWN, this, this.UpLv, [e, t])
            }
        }
        UpLv(e, t) {
            n.PlaySound("click"), e.dowerlv >= 100 ? I.OpenTips("The attribute is full!") : s.Gold >= t ? (D._Instance
                .UpdateGold(-t), D._Instance.UpdateDowerLv(e.dowertype), re._Instance.DowerSet()) : 1 == s
                    .TotalSwitch && 1 == s.BannerSwitch ? m.CreateVideoAd(1, Laya.Handler.create(this, this
                        .TenLvCallBack, [e]), Laya.Handler.create(this, this.TenLvFailCallBack), Laya.Handler
                            .create(this, () => {
                                I.ShareApp(Laya.Handler.create(this, this.TenLvCallBack, [e]), Laya.Handler.create(
                                    this, this.TenLvFailCallBack))
                            })) : I.OpenTips("Coins Are Not Enough!")
        }
        TenLvCallBack(e) {
            I.OpenTips("Successfully upgraded to ten levels!"), Laya.timer.loop(10, this, this.DowerTenLv, [e]), n.CurrBgm = 0, n.PlayBGM(
                "bgm", 1)
        }
        TenLvFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        DowerTenLv(e) {
            D._Instance.UpdateDowerLv(e.dowertype, !1), this.currlv++, this.currlv >= 50 && (this.currlv = 0,
                Laya.timer.clear(this, this.DowerTenLv)), re._Instance.DowerSet()
        }
        AddBtnAnimation(e) {
            for (let t = 0; t < e.length; t++) e[t].off(Laya.Event.MOUSE_DOWN, this, this.ScaleBig), e[t].off(
                Laya.Event.MOUSE_UP, this, this.ScaleSmall), e[t].off(Laya.Event.MOUSE_OUT, this, this
                    .ScaleSmall), e[t].on(Laya.Event.MOUSE_DOWN, this, this.ScaleBig, [e[t]]), e[t].on(Laya
                        .Event.MOUSE_UP, this, this.ScaleSmall, [e[t]]), e[t].on(Laya.Event.MOUSE_OUT, this, this
                            .ScaleSmall, [e[t]])
        }
        ScaleBig(e) {
            Laya.Tween.to(e, {
                scaleX: .95,
                scaleY: .95
            }, 50)
        }
        ScaleSmall(e) {
            Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 50)
        }
    }
    class ce extends e.Scene.EquipItemUI {
        constructor() {
            super(), this.IsConutTimer = !1
        }
        onAwake() {
            this.AddBtnAnimation([this.UserBtn])
        }
        setShow(e) {
            if (e) {
                switch (this.equiptp.skin = "res/Equip/equip" + e.equipid + ".png", this.namelabel.text = e
                    .equipname, this.tipslabel.text = e.equiptips, e.equipstate) {
                    case 0:
                        this.timelabel.visible = !1, this.xxtp.visible = !1, this.zbtp.visible = !1, this.jstp
                            .visible = !0, this.videotp.visible = !0;
                        break;
                    case 1:
                        this.timelabel.visible = !0, this.xxtp.visible = !1, this.zbtp.visible = !0, this.jstp
                            .visible = !1, this.videotp.visible = !1;
                        let t = Math.floor(e.equiptime - (parseInt(((new Date).getTime() / 1e3).toString()) - e
                            .equiptimestamp)),
                            i = Math.floor(t % 3600);
                        this.timelabel.text = l.Addo(parseInt((t / 3600).toString())) + ":" + l.Addo(parseInt((
                            i / 60).toString())) + ":" + l.Addo(t % 60), this.IsConutTimer = !0, Laya.timer
                                .loop(1e3, this, this.CountDown, [e]);
                        break;
                    case 2:
                        this.timelabel.visible = !0, this.xxtp.visible = !0, this.zbtp.visible = !1, this.jstp
                            .visible = !1, this.videotp.visible = !1;
                        let a = Math.floor(e.equiptime - (parseInt(((new Date).getTime() / 1e3).toString()) - e
                            .equiptimestamp)),
                            s = Math.floor(a % 3600);
                        this.timelabel.text = l.Addo(parseInt((a / 3600).toString())) + ":" + l.Addo(parseInt((
                            s / 60).toString())) + ":" + l.Addo(a % 60), this.IsConutTimer = !0, Laya.timer
                                .loop(1e3, this, this.CountDown, [e])
                }
                this.UserBtn.on(Laya.Event.MOUSE_DOWN, this, this.User, [e])
            }
        }
        User(e) {
            switch (n.PlaySound("click"), e.equipstate) {
                case 0:
                    m.CreateVideoAd(0, Laya.Handler.create(this, this.UserCallBack, [e]), Laya.Handler.create(
                        this, this.UserFailCallBack), Laya.Handler.create(this, () => {
                            I.ShareApp(Laya.Handler.create(this, this.UserCallBack, [e]), Laya.Handler
                                .create(this, this.UserFailCallBack))
                        }));
                    break;
                case 1:
                    I.OpenTips("Equipped!"), D._Instance.AlterEquipState(e.equipid, 2), 2 == e.equiptype ? re
                        ._Instance.EquipSet(!0) : re._Instance.EquipSet(!1);
                    break;
                case 2:
                    I.OpenTips("Unloaded!"), D._Instance.AlterEquipState(e.equipid, 1), 2 == e.equiptype ? re
                        ._Instance.EquipSet(!0) : re._Instance.EquipSet(!1)
            }
            re._Instance.Refresh()
        }
        UserCallBack(e) {
            I.OpenTips("Successfully unlocked!"), D._Instance.AlterEquipState(e.equipid, 1, !0), 2 == e.equiptype ? re._Instance
                .EquipSet(!0) : re._Instance.EquipSet(!1), n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        UserFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        CountDown(e) {
            if (this.IsConutTimer) {
                let t = Math.floor(e.equiptime - (parseInt(((new Date).getTime() / 1e3).toString()) - e
                    .equiptimestamp)),
                    i = Math.floor(t % 3600);
                this.timelabel.text = l.Addo(parseInt((t / 3600).toString())) + ":" + l.Addo(parseInt((i / 60)
                    .toString())) + ":" + l.Addo(t % 60), t <= 0 && (this.IsConutTimer = !1, Laya.timer
                        .clear(this, this.CountDown), D._Instance.AlterEquipState(e.equipid, 0), 2 == e
                            .equiptype ? 1 == re._Instance.SkinData.skintype && re._Instance.EquipSet(!0) : 2 == re
                                ._Instance.SkinData.skintype && re._Instance.EquipSet(!1), re._Instance.Refresh(), I
                                    .OpenTips(e.equipname + "Time up!"))
            }
        }
        AddBtnAnimation(e) {
            for (let t = 0; t < e.length; t++) e[t].off(Laya.Event.MOUSE_DOWN, this, this.ScaleBig), e[t].off(
                Laya.Event.MOUSE_UP, this, this.ScaleSmall), e[t].off(Laya.Event.MOUSE_OUT, this, this
                    .ScaleSmall), e[t].on(Laya.Event.MOUSE_DOWN, this, this.ScaleBig, [e[t]]), e[t].on(Laya
                        .Event.MOUSE_UP, this, this.ScaleSmall, [e[t]]), e[t].on(Laya.Event.MOUSE_OUT, this, this
                            .ScaleSmall, [e[t]])
        }
        ScaleBig(e) {
            Laya.Tween.to(e, {
                scaleX: .95,
                scaleY: .95
            }, 50)
        }
        ScaleSmall(e) {
            Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 50)
        }
        onDisable() {
            Laya.timer.clearAll(this)
        }
    }
    class de extends e.Scene.ShopPanelUI {
        constructor() {
            super(), this.ShopData = [{
                shoptype: 1,
                shopname: "A bag of gold coins",
                shoptips: "Randomly draw out 200~2000 gold coins"
            }, {
                shoptype: 2,
                shopname: "Diamond box",
                shoptips: "Randomly draw 100~1000 diamonds"
            }, {
                shoptype: 3,
                shopname: "Props spree",
                shoptips: ""
            }], this.PropData = [], this.OpenType = 1, this.gold = s.Gold, this.diamond = s.Diamond
        }
        onAwake() {
            de._Instance = this, a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SkipBtn]), this.SkipBtn
                .on(Laya.Event.CLICK, this, this.Skip), this.ShopSet(), this.PropSet()
        }
        onOpened(e) {
            this.dataFun = {}
            if (e.closeFun) {
                this.dataFun = e;
                return;
            }
            e && (this.OpenType = e[0])
            window.yad.right = NaN;
            window.yad.top = NaN;
            window.yad.centerX = 0;
            window.yad.bottom = 0;
        }
        onEnable() { }
        Skip() {
            n.PlaySound("click"), this.close()
        }
        ShopSet() {
            this.ShopList.itemRender = pe, this.ShopList.vScrollBarSkin = null, this.ShopList.array = this
                .ShopData, this.ShopList.renderHandler = Laya.Handler.create(this, this.freshList1, null, !1)
        }
        freshList1(e, t) {
            e.setShow(this.ShopData[t])
        }
        PropSet() {
            this.PropData = s.PropData, this.PropList.itemRender = me, this.PropList.array = this.PropData, this
                .PropList.renderHandler = Laya.Handler.create(this, this.freshList2, null, !1)
        }
        freshList2(e, t) {
            e.setShow(this.PropData[t])
        }
        onDisable() {
            if (this.dataFun.closeFun) {
                this.dataFun.closeFun.run();
            }
            window.yad.centerX = NaN;
            window.yad.bottom = NaN;
            window.yad.top = 0;
            window.yad.right = 0;
            1 == this.OpenType ? E._Instance.RoleActiveCtrl(!0) : re._Instance.RoleActiveCtrl(!0)
        }
    }
    class pe extends e.Scene.ShopItemUI {
        constructor() {
            super()
        }
        onAwake() {
            a.AddBtnAnimation([this.VideoBtn])
        }
        setShow(e) {
            if (e) {
                if (1 == e.shoptype) this.JBTP.visible = !0, this.ZSTP.visible = !1, this.GiftTP.visible = !1,
                    this.TipsLabel.visible = !0, this.GiftBox.visible = !1;
                else if (2 == e.shoptype) this.JBTP.visible = !1, this.ZSTP.visible = !0, this.GiftTP
                    .visible = !1, this.TipsLabel.visible = !0, this.GiftBox.visible = !1;
                else if (3 == e.shoptype) {
                    this.JBTP.visible = !1, this.ZSTP.visible = !1, this.GiftTP.visible = !0, this.TipsLabel
                        .visible = !1, this.GiftBox.visible = !0;
                    for (let e = 0; e < this.GiftBox.numChildren; e++) {
                        this.GiftBox.getChildAt(e).getChildAt(0).skin = "res/Prop/prop" + (e + 1) + ".png"
                    }
                }
                this.NameLabel.text = e.shopname, this.TipsLabel.text = e.shoptips, this.VideoBtn.on(Laya.Event
                    .MOUSE_DOWN, this, this.Video, [e])
            }
        }
        Video(e) {
            n.PlaySound("click"), m.CreateVideoAd(0, Laya.Handler.create(this, this.AwardCallBack, [e]), Laya
                .Handler.create(this, this.AwardFailCallBack), Laya.Handler.create(this, () => {
                    I.ShareApp(Laya.Handler.create(this, this.AwardCallBack, [e]), Laya.Handler.create(
                        this, this.AwardFailCallBack))
                }))
        }
        AwardCallBack(e) {
            if (1 == e.shoptype) {
                let t = Math.round(800 * Math.random() + 200);
                I.OpenTips("Coins +" + t), Laya.View.open("Scene/GetAwardPanel.scene", !1, [e.shoptype,
                    t])
            } else if (2 == e.shoptype) {
                let t = Math.round(400 * Math.random() + 100);
                I.OpenTips("Diamonds +" + t), Laya.View.open("Scene/GetAwardPanel.scene", !1, [e.shoptype,
                    t])
            } else 3 == e.shoptype && (I.OpenTips("Successfully purchased! +1 for each item!"), D._Instance.BuyProp(1), D._Instance.BuyProp(
                2), D._Instance.BuyProp(3), D._Instance.BuyProp(4), de._Instance.PropSet());
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        AwardFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
    }
    class me extends e.Scene.ShopPropItemUI {
        constructor() {
            super()
        }
        onAwake() {
            a.AddBtnAnimation([this.BuyBtn])
        }
        setShow(e) {
            e && (this.proptp.skin = "res/Prop/prop" + e.propid + ".png", this.propnumlabel.text = e.propnum +
                "", this.tipslabel.text = e.proptips, this.goldlabel.text = e.propgold, this.BuyBtn.on(Laya
                    .Event.CLICK, this, this.BuyProp, [e]))
        }
        BuyProp(e) {
            n.PlaySound("click"), s.Gold >= e.propgold ? (I.OpenTips("Successfully purchased!"), D._Instance.UpdateGold(-e
                .propgold), D._Instance.BuyProp(e.propid), de._Instance.PropSet()) : I.OpenTips("Coins Are Not Enough!")
        }
    }
    class ye extends e.Scene.SignPanelUI {
        constructor() {
            super(), this.SignData = [], this.IsDouble = !0, this.IsSkin = !1
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.SignBtn, this.GetBtn, this.SkipBtn]), this
                .SignBtn.on(Laya.Event.MOUSE_DOWN, this, this.Sign), this.GetBtn.on(Laya.Event.MOUSE_DOWN, this,
                    this.Get), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), this.KuangBtn.on(Laya.Event
                        .CLICK, this, this.Kuang), this.GouBtn.on(Laya.Event.CLICK, this, this.Gou), a.SetBtnBottom(
                            this.SkipBtn, 280), a.SetBtnBottom(this.GetBtn, 280), this.Refresh()
        }
        onEnable() { }
        Refresh() {
            this.SignData = [];
            for (let e = 1; e <= 7; e++) {
                let t = {};
                switch (t.day = e, e) {
                    case 1:
                        t.isdouble = 1, t.award = [1], t.awardnum = [188];
                        break;
                    case 2:
                        t.isdouble = 1, t.award = [4], t.awardnum = [588];
                        break;
                    case 3:
                        t.isdouble = 1, t.award = [1], t.awardnum = [388];
                        break;
                    case 4:
                        t.isdouble = 1, t.award = [1], t.awardnum = [488];
                        break;
                    case 5:
                        t.isdouble = 1, t.award = [1], t.awardnum = [588];
                        break;
                    case 6:
                        t.isdouble = 1, t.award = [1], t.awardnum = [688];
                        break;
                    case 7:
                        let i = !1;
                        (s.RoleSkinData.length < 8 || s.KillerSkinData.length < 7) && (i = !0), 1 != s
                            .IsSevenDay && i ? (t.isdouble = 0, t.award = [1, 3], t.awardnum = [888, 1], s
                                .CurrSignDay == t.day && (this.IsSkin = !0)) : (t.isdouble = 1, t.award = [1], t
                                    .awardnum = [1388])
                }
                e < s.CurrSignDay ? t.issign = 1 : t.issign = 0, e == s.CurrSignDay ? (t.iscurrsign = 1, 1 == s
                    .IsSign && (t.issign = 1)) : t.iscurrsign = 0, this.SignData.push(t)
            }
            for (let e = 0; e < this.SignData.length; e++)
                if (1 == this.SignData[e].iscurrsign) {
                    1 == this.SignData[e].isdouble ? this.IsDouble = !0 : this.IsDouble = !1;
                    break
                } 1 == s.IsSign ? (this.SignBg.height = 730, this.SignBox.visible = !1, this.videotp.visible = !
                    1, this.sbjltp.visible = !1, this.ylqtp.visible = !0, this.lqtp.visible = !1, this.SignBtn
                        .visible = !0, this.SignBtn.gray = !0, this.GetBtn.visible = !1, this.SkipBtn.visible = !1,
                    Laya.timer.once(s.ButtonDelay, this, () => {
                        this.SkipBtn.visible = !0
                    })) : (this.SignBtn.gray = !1, 1 == s.BannerSwitch && 1 == s.TotalSwitch ? this.IsDouble ? (
                        this.SignBg.height = 770, this.SignBox.visible = !0, this.videotp.visible = !0, this
                            .sbjltp.visible = !0, this.ylqtp.visible = !1, this.lqtp.visible = !1, this.SignBtn
                                .visible = !0, this.GetBtn.visible = !0, this.SkipBtn.visible = !1) : (this.SignBg
                                    .height = 740, this.SignBox.visible = !1, this.videotp.visible = !0, this.sbjltp
                                        .visible = !1, this.ylqtp.visible = !1, this.lqtp.visible = !0, this.SignBtn.visible = !
                                        0, this.GetBtn.visible = !1, this.SkipBtn.visible = !1, Laya.timer.once(s.ButtonDelay,
                                            this, () => {
                                                this.SkipBtn.visible = !0
                                            })) : this.IsDouble ? (this.SignBg.height = 740, this.SignBox.visible = !1, this
                                                .videotp.visible = !0, this.sbjltp.visible = !0, this.ylqtp.visible = !1, this.lqtp
                                                    .visible = !1, this.SignBtn.visible = !0, this.GetBtn.visible = !0, this.SkipBtn
                                                        .visible = !1) : (this.SignBg.height = 740, this.SignBox.visible = !1, this.videotp
                                                            .visible = !0, this.sbjltp.visible = !1, this.ylqtp.visible = !1, this.lqtp.visible = !
                                                            0, this.SignBtn.visible = !0, this.GetBtn.visible = !1, this.SkipBtn.visible = !1, Laya
                                                                .timer.once(s.ButtonDelay, this, () => {
                                                                    this.SkipBtn.visible = !0
                                                                }))), this.SignSet()
        }
        SignSet() {
            this.SignList.itemRender = Se, this.SignList.vScrollBarSkin = null, this.SignList.array = this
                .SignData, this.SignList.renderHandler = Laya.Handler.create(this, this.freshList1, null, !1)
        }
        freshList1(e, t) {
            e.setShow(this.SignData[t])
        }
        Sign() {
            n.PlaySound("click"), 1 == s.IsSign ? I.OpenTips("Received today!") : this.IsSkin ? (console.log("看视频领皮肤"), m
                .CreateVideoAd(1, Laya.Handler.create(this, this.SignCallBack, [!1]), Laya.Handler.create(
                    this, this.SignFailCallBack), Laya.Handler.create(this, () => {
                        I.ShareApp(Laya.Handler.create(this, this.SignCallBack, [!1]), Laya.Handler
                            .create(this, this.SignFailCallBack))
                    }))) : (console.log("双倍领取奖励"), m.CreateVideoAd(1, Laya.Handler.create(this, this
                        .SignCallBack, [!0]), Laya.Handler.create(this, this.SignFailCallBack), Laya.Handler
                            .create(this, () => {
                                I.ShareApp(Laya.Handler.create(this, this.SignCallBack, [!0]), Laya.Handler
                                    .create(this, this.SignFailCallBack))
                            })))
        }
        Get() {
            n.PlaySound("click"), 1 == s.BannerSwitch && 1 == s.TotalSwitch && this.IsDouble ? (console.log(
                "双倍领取奖励"), m.CreateVideoAd(1, Laya.Handler.create(this, this.SignCallBack, [!0]), Laya
                    .Handler.create(this, this.SignFailCallBack), Laya.Handler.create(this, () => {
                        I.ShareApp(Laya.Handler.create(this, this.SignCallBack, [!0]), Laya.Handler
                            .create(this, this.SignFailCallBack))
                    }))) : (console.log("直接领取奖励"), this.SignCallBack(!1))
        }
        SignCallBack(e) {
            let t = {},
                i = 0;
            for (let e = 0; e < this.SignData.length; e++)
                if (this.SignData[e].day == s.CurrSignDay) {
                    t = this.SignData[e];
                    break
                } switch (t.day) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        i = e ? 2 * t.awardnum[0] : t.awardnum[0], I.OpenTips("Coins +" + i), D._Instance
                            .UpdateGold(i);
                        break;
                    case 2:
                        i = e ? 2 * t.awardnum[0] : t.awardnum[0], I.OpenTips("Diamonds +" + i), D._Instance
                            .UpdateDiamond(i);
                        break;
                    case 7:
                        if (1 == t.award.length) i = e ? 2 * t.awardnum[0] : t.awardnum[0], I.OpenTips("Coins +" +
                            i), D._Instance.UpdateGold(i);
                        else {
                            console.log("领取皮肤和888金币成功！"), D._Instance.UpdateGold(t.awardnum[0]);
                            let e = l.GetArrDifference(s.KillerSkinData, [1, 2, 3, 4, 5, 6, 7]),
                                i = l.GetArrDifference(s.RoleSkinData, [1, 2, 3, 4, 5, 6, 7, 8]);
                            if (i.length > 0 && Math.random() >= .5 || e.length <= 0) {
                                i.sort(() => .5 - Math.random()), D._Instance.UnLockSkin(1, i[0]);
                                let e = "",
                                    t = T.SkinData;
                                for (let a = 0; a < t.length; a++)
                                    if (1 == t[a].skintype && t[a].skinid == i[0]) {
                                        e = t[a].skinname;
                                        break
                                    } I.OpenTips("Congratulations on getting the " + e + "! Please check it out in the character!")
                            } else {
                                e.sort(() => .5 - Math.random()), D._Instance.UnLockSkin(2, e[0]);
                                let t = "",
                                    i = T.SkinData;
                                for (let a = 0; a < i.length; a++)
                                    if (2 == i[a].skintype && i[a].skinid == e[0]) {
                                        t = i[a].skinname;
                                        break
                                    } I.OpenTips("Congratulations on getting the " + e + "! Please check it out in the character!")
                            }
                        }
                }
            D._Instance.UpdateSignData(), this.Refresh(), n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        SignFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm", 1)
        }
        Skip() {
            n.PlaySound("click"), this.close(), E._Instance.RoleActiveCtrl(!0)
        }
        Kuang() {
            n.PlaySound("click"), this.IsDouble = !0, this.KuangBtn.visible = !1, this.GouBtn.visible = !0, this
                .GouTP.visible = !0
        }
        Gou() {
            n.PlaySound("click"), this.IsDouble = !1, this.KuangBtn.visible = !0, this.GouBtn.visible = !1, this
                .GouTP.visible = !1
        }
        onOpened(data) {
            this.dataFun = data || {};
        }
        onDisable() {
            if (this.dataFun.closeFun) {
                this.dataFun.closeFun.run();
            }
        }
    }
    class Se extends e.Scene.SignItemUI {
        constructor() {
            super()
        }
        setShow(e) {
            if (e) {
                for (let e = 0; e < this.numChildren; e++) this.getChildAt(e).visible = !1;
                if (7 == e.day ? (this.daytp.pos(83, 15), 1 == e.iscurrsign ? (this.xzktp.width = 475, this
                    .xzktp.height = 180, this.xzktp.pos(67, 0), this.xzktp.visible = !0) : this.xzktp
                        .visible = !1, 1 == e.issign && (this.zztp.width = 445, this.zztp.height = 150, this
                            .zztp.pos(82, 15), this.zztp.visible = !0, this.yqdtp.pos(305, 90), this.yqdtp
                                .visible = !0)) : (this.daytp.pos(15, 15), 1 == e.iscurrsign ? (this.xzktp.width =
                                    210, this.xzktp.height = 210, this.xzktp.pos(0, 0), this.xzktp.visible = !0) : this
                                        .xzktp.visible = !1, 1 == e.issign && (this.zztp.width = 180, this.zztp.height = 180,
                                            this.zztp.pos(15, 15), this.zztp.visible = !0, this.yqdtp.pos(105, 105), this.yqdtp
                                                .visible = !0)), this.daytp.skin = "res/Sign/day" + e.day + ".png", this.daytp
                                                    .visible = !0, 7 != e.day) switch (this.bg1.visible = !0, this.bg2.visible = !1, this.jbtp2
                                                        .visible = !1, this.pftp2.visible = !1, this.awardlabel2.visible = !1, this.awardlabel1
                                                            .pos(105, 178), e.award[0]) {
                        case 1:
                            this.jbtp1.visible = !0, this.zstp.visible = !1, this.pftp1.visible = !1, this
                                .awardlabel1.text = "x" + e.awardnum[0], this.awardlabel1.visible = !0;
                            break;
                        case 2:
                            this.jbtp1.visible = !1, this.zstp.visible = !1, this.pftp1.skin =
                                "res/TrySkin/role7.png", this.pftp1.visible = !0, this.awardlabel1.text = "lamb",
                                this.awardlabel1.visible = !0;
                            break;
                        case 4:
                            this.jbtp1.visible = !1, this.zstp.visible = !0, this.pftp1.visible = !1, this
                                .awardlabel1.text = "x" + e.awardnum[0], this.awardlabel1.visible = !0
                    } else e.award.length >= 2 ? (this.bg1.visible = !1, this.bg2.visible = !0, this.jbtp1
                        .visible = !1, this.pftp1.visible = !1, this.zstp.visible = !1, this.awardlabel2
                            .visible = !0, this.awardlabel1.pos(235, 145), this.awardlabel1.visible = !0, this
                                .jbtp2.pos(235, 75), this.jbtp2.visible = !0, this.pftp2.visible = !0, this
                                    .awardlabel1.text = "x" + e.awardnum[0]) : (this.bg1.visible = !1, this.bg2
                                        .visible = !0, this.jbtp1.visible = !1, this.pftp1.visible = !1, this.awardlabel2
                                            .visible = !1, this.awardlabel1.pos(305, 145), this.awardlabel1.visible = !0, this
                                                .jbtp2.pos(305, 75), this.jbtp2.visible = !0, this.pftp2.visible = !1, this
                                                    .awardlabel1.text = "x" + e.awardnum[0])
            }
        }
    }
    class Ie extends e.Scene.TrySkinPanelUI {
        constructor() {
            super(), this.TrySkinType = 0, this.IsRole = !1, this.RoleId = 1, this.IsKiller = !1, this
                .KillerId = 1
        }
        onAwake() {
            a.MatchScreen(this, this.Bg), a.AddBtnAnimation([this.TrySkinBtn, this.SkipBtn, this.TrySkinBtn]),
                this.TryBtn.on(Laya.Event.MOUSE_DOWN, this, this.TrySkin), this.TrySkinBtn.on(Laya.Event
                    .MOUSE_DOWN, this, this.TrySkin), this.SkipBtn.on(Laya.Event.CLICK, this, this.Skip), this
                        .KuangBtn.on(Laya.Event.CLICK, this, this.Kuang), this.GouBtn.on(Laya.Event.CLICK, this, this
                            .Gou), a.SetBtnBottom(this.SkipBtn, 280), a.SetBtnBottom(this.TrySkinBtn, 280), this
                                .GetAwardBtnTween(), D._Instance.NameLabelCtrl(!1), 1 == s.BannerSwitch && 1 == s.TotalSwitch ?
                    (this.TryBtn.pos(375, 690), this.TryBox.visible = !1, this.TrySkinBtn.visible = !1, this.SkipBtn
                        .visible = !1, Laya.timer.once(s.ButtonDelay, this, () => {
                            this.TryBox.visible = !0, this.TrySkinBtn.visible = !0
                        })) : (this.TryBox.visible = !1, this.TryBtn.pos(375, 670), this.TrySkinBtn.visible = !1,
                            this.SkipBtn.visible = !1, Laya.timer.once(s.ButtonDelay, this, () => {
                                this.SkipBtn.visible = !0
                            }))
        }
        onOpened(e) {
            e && (this.IsRole = e[0], this.RoleId = e[1], this.IsKiller = e[2], this.KillerId = e[3], this
                .IsRole && this.IsKiller ? (this.TrySkin1.pos(230, 160), this.TrySkin1.visible = !0, this
                    .TrySkin2.pos(520, 160), this.TrySkin2.visible = !0, this.SkinIcon1.skin =
                    "res/TrySkin/role" + this.RoleId + ".png", this.SkinIcon2.skin = "res/TrySkin/killer" +
                    this.KillerId + ".png", this.TrySkinType = Math.round(Math.random() + 1)) : this
                        .IsRole && !this.IsKiller ? (this.TrySkin1.pos(375, 160), this.TrySkin1.visible = !0, this
                            .TrySkin2.visible = !1, this.SkinIcon1.skin = "res/TrySkin/role" + this.RoleId + ".png",
                            this.TrySkinType = 1) : (this.TrySkin1.visible = !1, this.TrySkin2.pos(375, 160), this
                                .TrySkin2.visible = !0, this.SkinIcon2.skin = "res/TrySkin/killer" + this.KillerId +
                                ".png", this.TrySkinType = 2))
        }
        onEnable() { }
        TrySkin() {
            n.PlaySound("click"), m.CreateVideoAd(1, Laya.Handler.create(this, this.TrySkinCallBack), Laya
                .Handler.create(this, this.TrySkinFailCallBack), Laya.Handler.create(this, () => {
                    I.ShareApp(Laya.Handler.create(this, this.TrySkinCallBack), Laya.Handler.create(
                        this, this.TrySkinFailCallBack))
                }))
        }
        TrySkinCallBack() {
            I.OpenTips("Successful skin trial!"), 2 == this.TrySkinType ? (D._Instance.KillerId = 1, D._Instance.PlayerCtrl
                .KillerSkinId = this.KillerId) : (D._Instance.KillerId = D._Instance.TryKillerId, D
                    ._Instance.PlayerCtrl.RoleSkinId = this.RoleId, D._Instance.PlayerCtrl.AtkRangeCtrl(!1, !0)
            ), this.close(), D._Instance.CountDownGame(), n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        TrySkinFailCallBack() {
            n.CurrBgm = 0, n.PlayBGM("bgm2", 2)
        }
        Skip() {
            n.PlaySound("click"), this.close(), D._Instance.CountDownGame()
        }
        Kuang() {
            n.PlaySound("click"), this.KuangBtn.visible = !1, this.GouBtn.visible = !0, this.GouTP.visible = !0,
                this.SkipBtn.visible = !1, this.TrySkinBtn.visible = !0
        }
        Gou() {
            n.PlaySound("click"), this.KuangBtn.visible = !0, this.GouBtn.visible = !1, this.GouTP.visible = !1,
                this.SkipBtn.visible = !0, this.TrySkinBtn.visible = !1
        }
        GetAwardBtnTween() {
            Laya.Tween.to(this.TryBtn, {
                scaleX: 1.1,
                scaleY: 1.1
            }, 500, null, Laya.Handler.create(this, this.GetAwardBtnTween1))
        }
        GetAwardBtnTween1() {
            Laya.Tween.to(this.TryBtn, {
                scaleX: 1,
                scaleY: 1
            }, 500, null, Laya.Handler.create(this, this.GetAwardBtnTween))
        }
        onDisable() {
            D._Instance.NameLabelCtrl(!0)
        }
    }
    class ge {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("Scripts/UI/ChestPanel.ts", B), e("Scripts/Http/ADControl.ts", P), e("Scripts/UI/CoursePanel.ts", A),
                e("Scripts/UI/DayGiftPanel.ts", K), e("Scripts/UI/EasterEggPanel.ts", N), e(
                    "Scripts/UI/ExportPanel.ts", G), e("Scripts/UI/FullExportPanel.ts", H), e(
                        "Scripts/UI/GamePanel.ts", g), e("Scripts/UI/GetAwardPanel.ts", z), e(
                            "Scripts/UI/HotExportPanel.ts", Y), e("Scripts/UI/KillerRankPanel.ts", W), e(
                                "Scripts/UI/LateChestPanel.ts", X), e("Scripts/UI/LoadingExportPanel.ts", j), e(
                                    "Scripts/UI/LoadingPanel.ts", $), e("Scripts/UI/LotteryPanel.ts", ee), e(
                                        "Scripts/UI/NewExportPanel.ts", te), e("Scripts/UI/OverPanel.ts", ae), e(
                                            "Scripts/UI/SetPanel.ts", ne), e("Scripts/UI/SettlePanel.ts", le), e("Scripts/UI/ShopPanel.ts",
                                                de), e("Scripts/UI/SignPanel.ts", ye), e("Scripts/UI/SkinPanel.ts", re), e(
                                                    "Scripts/UI/StartPanel.ts", E), e("Scripts/UI/TrySkinPanel.ts", Ie)
        }
    }
    ge.width = 750, ge.height = 1334, ge.scaleMode = "showall", ge.screenMode = "none", ge.alignV = "middle", ge
        .alignH = "center", ge.startScene = "Scene/LoadingPanel.scene", ge.sceneRoot = "", ge.debug = !1, ge.stat = !1, ge
            .physicsDebug = !1, ge.exportSceneToJson = !0, ge.init();
    new class {
        constructor() {
            if (window.navigator.userAgent.indexOf("iPhone OS 15_1") > -1) {
                Config.useWebGL2 = false;
            }
            window.Laya3D ? Laya3D.init(ge.width, ge.height) : Laya.init(ge.width, ge.height, Laya.WebGL),
                Laya.stage.scaleMode = ge.scaleMode, Laya.stage.screenMode = ge.screenMode, Laya.stage.alignV = ge.alignV,
                Laya.stage.alignH = ge.alignH, Laya.URL.exportSceneToJson = ge.exportSceneToJson,
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
            window.moveBg = new Laya.Image();
            window.moveBg.skin = "Images/gj0.png";
            window.moveBg.size(176, 176);
            window.moveBg.anchorX = window.moveBg.anchorY = 0.5;
            window.moveBg.zOrder = 500;
            window.moveug = new Laya.Image();
            window.moveug.skin = "Images/gj2.png";
            window.moveug.size(84, 84);
            window.moveug.anchorX = window.moveug.anchorY = 0.5;
            window.moveBg.addChild(window.moveug);
            // htmlfs.saveui();
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            ge.startScene && Laya.Scene.open(ge.startScene), Q.Init()
        }
    }
}();
