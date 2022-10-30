(function() {
    'use strict';

    class GameUIControl extends Laya.Script {
        constructor() {
            super(...arguments);
            this._rankList = [];
            this.isHomepage = false;
        }
        static getInstance() {
            return this._instance;
        }
        onAwake() {
            GameUIControl._instance = this;
            this.owner.btnStart.on(Laya.Event.CLICK, this, this.onStartClick);
            this._rankList = [];
            for (let i = 1; i < 5; i++) {
                this._rankList.push(this.owner.gamePage.getChildByName("rank" + i).getChildByName("name"));
            }
            this.showHomepage();
        }
        showHomepage() {
            this.isHomepage = true;
            this.owner.new_skin_tip.y = Laya.stage.height - 760;
            this.owner.coin.y = 150,
                this.hidePages();
            this.owner.homePage.visible = true;
        }
        showGamepage() {
            this.owner.new_skin_tip.y = -1e3;
            this.owner.coin.visible = false;
            this.hidePages();
            this.owner.gamePage.visible = true;
        }
        hidePages() {
            this.owner.upgrade.visible =
                this.owner.homePage.visible =
                this.owner.endPage.visible =
                this.owner.gamePage.visible =
                this.owner.continue.visible =
                this.owner.coinPage.visible = false;
        }
        onStartClick() {
            this.showGamepage();
        }
        initPage() {}
        updateLevelName(level) {
            this.owner.level.text = "Level " + level;
        }
        updateRank(rank) {
            let t = [],
                a = [];
            for (let i in rank) {
                let s = 0;
                for (; s < t.length && rank[i] > t[s]; s++)
                ;
                t.splice(s, 0, rank[i]), a.splice(s, 0, i);
            }
            t.reverse(), a.reverse();
            for (let e = 0; e < 4; e++) {
                if (a[e]) {
                    this._rankList[e].text = a[e];
                    if ("我" === a[e]) {
                        this._rankList[e].color = "#ffff00";
                    } else {
                        if (-1 === t[e]) {
                            this._rankList[e].color = "#ff0000";
                        } else {
                            this._rankList[e].color = "#ffffff";
                        }
                    }
                } else {
                    this._rankList[e].text = "Wait";
                }
            }
            this.sortName = a;
        }
    }

    class ResouceManager {
        constructor() {
            this._totals = 0;
            this._loadeds = 0;
            this._dictionary = {};
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new ResouceManager();
            }
            return this._instance;
        }
        get(name) {
            let object = this._dictionary[name];
            if (object instanceof Laya.Sprite3D) {
                return object.clone();
            }
        }
        create(url, complete, progress) {
            this._totals = 0;
            this._loadeds = 0;
            let object;
            for (var i = 0; i < url.length; i++) {
                object = url[i];
                this._totals++;
                Laya.loader.create(object.url, Laya.Handler.create(this, this.onProgress, [complete, progress, object]), null, object.clas);
            }
        }
        onProgress(complete, progress, object, sprite) {
            this._loadeds++;
            progress && progress(this._loadeds / this._totals);
            if (object) {
                object.name && (this._dictionary[object.name] = sprite);
                object.complete && object.complete(sprite);
            }
            if (this._totals === this._loadeds) {
                complete && complete();
            }
        }
    }

    class IPlatform {
        filePath() {
            return "";
        }
        getStorageSync(key) {};
        setStorageSync(key, value) {};
        getFileSystemManager() {
            return {};
        };
        downloadFile(object) {
            return {};
        };
        showInterstitial(complete) {}
        showReward(success, failure) {}
        getForgames() {
            return [];
        }
        navigate(screenName, buttonName, gameId) {};
    }

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function(ui) {
        var scenes;
        (function(scenes) {
            class GameSceneUI extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(GameSceneUI.uiView);
                }
            }
            GameSceneUI.uiView = {
                "type": "Scene",
                "props": {
                    "width": 1080,
                    "height": 1920,
                    "bottom": 0
                },
                "compId": 2,
                "child": [{
                    "type": "Sprite",
                    "props": {
                        "var": "node3D",
                        "name": "node3D"
                    },
                    "compId": 3
                }, {
                    "type": "View",
                    "props": {
                        "visible": true,
                        "top": 0,
                        "right": 0,
                        "name": "UI",
                        "left": 0,
                        "bottom": 0
                    },
                    "compId": 107,
                    "child": [{
                        "type": "View",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 1080,
                            "var": "homePage",
                            "name": "homepage",
                            "height": 1920
                        },
                        "compId": 108,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "top": 0,
                                "skin": "background/lobby.jpg",
                                "right": 0,
                                "name": "bg",
                                "left": 0,
                                "bottom": 0
                            },
                            "compId": 109
                        }, {
                            "type": "Image",
                            "props": {
                                "top": 300,
                                "skin": "ui/firstpage_ico_slogan.png",
                                "name": "title",
                                "centerX": 0
                            },
                            "compId": 110
                        }, {
                            "type": "Image",
                            "props": {
                                "width": 641,
                                "skin": "ui/firstpage_ico_car.png",
                                "name": "skin",
                                "height": 526,
                                "centerY": -27,
                                "centerX": 0
                            },
                            "compId": 161
                        }, {
                            "type": "Button",
                            "props": {
                                "var": "btnStart",
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_begin.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "start_btn",
                                "centerX": 0,
                                "bottom": 327,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 111
                        }, {
                            "type": "Button",
                            "props": {
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_friendgame.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "moregame_btn",
                                "centerX": -300,
                                "bottom": 314,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 113
                        }, {
                            "type": "Button",
                            "props": {
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_skinstore.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "skin_btn",
                                "centerX": 312,
                                "bottom": 316,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 115
                        }, {
                            "type": "Button",
                            "props": {
                                "top": 100,
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_settings.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "setting_btn",
                                "left": 50,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 117
                        }, {
                            "type": "Button",
                            "props": {
                                "top": 100,
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_share.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "share_btn",
                                "left": 200,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 119
                        }]
                    }, {
                        "type": "View",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 1080,
                            "var": "gamePage",
                            "name": "gamepage",
                            "height": 1920
                        },
                        "compId": 121,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "top": 250,
                                "skin": "ui/gamepage_ico_timebg.png",
                                "right": 0,
                                "name": "time"
                            },
                            "compId": 122,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "y": 18.5,
                                    "x": 78.111328125,
                                    "text": "1:30",
                                    "name": "time_label",
                                    "fontSize": 60,
                                    "color": "#ffffff"
                                },
                                "compId": 123
                            }]
                        }, {
                            "type": "Label",
                            "props": {
                                "var": "level",
                                "top": 160,
                                "text": "第1关",
                                "fontSize": 100,
                                "centerX": 0
                            },
                            "compId": 124
                        }, {
                            "type": "Image",
                            "props": {
                                "top": 160,
                                "skin": "ui/gamepage_ico_rankbg_1.png",
                                "name": "rank1",
                                "left": 0
                            },
                            "compId": 125,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "y": 10,
                                    "x": 28.375,
                                    "text": "1",
                                    "name": "rank",
                                    "fontSize": 40,
                                    "color": "#ffffff"
                                },
                                "compId": 126
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 14,
                                    "x": 63,
                                    "text": "Waiting",
                                    "name": "name",
                                    "fontSize": 32,
                                    "color": "#ffffff",
                                    "align": "left"
                                },
                                "compId": 127
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "top": 240,
                                "skin": "ui/gamepage_ico_rankbg_1.png",
                                "name": "rank2",
                                "left": 0
                            },
                            "compId": 128,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "y": 10,
                                    "x": 28.375,
                                    "text": "2",
                                    "name": "rank",
                                    "fontSize": 40,
                                    "color": "#ffffff"
                                },
                                "compId": 129
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 10,
                                    "x": 63,
                                    "text": "Waiting",
                                    "name": "name",
                                    "fontSize": 40,
                                    "color": "#ffffff",
                                    "align": "left"
                                },
                                "compId": 130
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "top": 320,
                                "skin": "ui/gamepage_ico_rankbg_1.png",
                                "name": "rank3",
                                "left": 0
                            },
                            "compId": 131,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "y": 10,
                                    "x": 28.375,
                                    "text": "3",
                                    "name": "rank",
                                    "fontSize": 40,
                                    "color": "#ffffff"
                                },
                                "compId": 132
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 10,
                                    "x": 63,
                                    "text": "Waiting",
                                    "name": "name",
                                    "fontSize": 40,
                                    "color": "#ffffff",
                                    "align": "left"
                                },
                                "compId": 133
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "top": 400,
                                "skin": "ui/gamepage_ico_rankbg_1.png",
                                "name": "rank4",
                                "left": 0
                            },
                            "compId": 134,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "y": 10,
                                    "x": 28.375,
                                    "text": "4",
                                    "name": "rank",
                                    "fontSize": 40,
                                    "color": "#ffffff"
                                },
                                "compId": 135
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 10,
                                    "x": 63,
                                    "text": "Waiting",
                                    "name": "name",
                                    "fontSize": 40,
                                    "color": "#ffffff",
                                    "align": "left"
                                },
                                "compId": 136
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "skin": "ui/ico_hand2.png",
                                "name": "hand",
                                "centerX": 0,
                                "bottom": 350
                            },
                            "compId": 137
                        }, {
                            "type": "Image",
                            "props": {
                                "skin": "ui/playpage_ico_guideword.png",
                                "name": "ctrl_tip",
                                "centerX": 0,
                                "bottom": 200
                            },
                            "compId": 138
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 540,
                                "skin": "ui/win_title.png",
                                "name": "win_tip",
                                "centerY": 0,
                                "centerX": 0,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 139
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 540,
                                "skin": "ui/lose_title.png",
                                "name": "lose_tip",
                                "centerY": 0,
                                "centerX": 0,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 160
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "var": "count1",
                                "skin": "ui/1.png",
                                "name": "count1",
                                "centerY": 0,
                                "centerX": 0,
                                "bottom": 200
                            },
                            "compId": 140
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "var": "count2",
                                "skin": "ui/2.png",
                                "name": "count2",
                                "centerY": 0,
                                "centerX": 0,
                                "bottom": 200
                            },
                            "compId": 141
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "var": "count3",
                                "skin": "ui/3.png",
                                "name": "count3",
                                "centerY": 0,
                                "centerX": 0,
                                "bottom": 200
                            },
                            "compId": 142
                        }, {
                            "type": "Image",
                            "props": {
                                "skin": "ui/ico_guide_2.png",
                                "name": "matching",
                                "centerY": 250,
                                "centerX": 0
                            },
                            "compId": 162
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "skin": "ui/ico_guide_3.png",
                                "name": "game_tip",
                                "centerY": 250,
                                "centerX": 0
                            },
                            "compId": 163
                        }]
                    }, {
                        "type": "View",
                        "props": {
                            "y": 0,
                            "x": 0.5,
                            "width": 1080,
                            "var": "endPage",
                            "name": "endpage",
                            "height": 1920
                        },
                        "compId": 143,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "top": 0,
                                "skin": "ui/ico_adbg.png",
                                "right": 0,
                                "name": "bg",
                                "left": 0,
                                "bottom": 0
                            },
                            "compId": 157
                        }, {
                            "type": "Image",
                            "props": {
                                "top": 111,
                                "skin": "ui/win_title.png",
                                "scaleY": 0.7,
                                "scaleX": 0.7,
                                "name": "win_title",
                                "height": 200,
                                "centerX": 0
                            },
                            "compId": 144
                        }, {
                            "type": "Image",
                            "props": {
                                "top": 111,
                                "skin": "ui/lose_title.png",
                                "scaleY": 0.7,
                                "scaleX": 0.7,
                                "name": "lose_title",
                                "height": 200,
                                "centerX": 0
                            },
                            "compId": 145
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 1400,
                                "stateNum": 1,
                                "skin": "ui/btn_backhome.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "home_btn",
                                "centerX": -250,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 146
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 1400,
                                "stateNum": 1,
                                "skin": "ui/btn_nextlevel.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "next_btn",
                                "centerX": 250,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 148
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 1400,
                                "stateNum": 1,
                                "skin": "ui/btn_playagain.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "restart_btn",
                                "centerX": 250,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 150
                        }]
                    }, {
                        "type": "View",
                        "props": {
                            "y": 0,
                            "x": 0.5,
                            "width": 1080,
                            "visible": false,
                            "var": "continue",
                            "name": "continue",
                            "height": 1920
                        },
                        "compId": 152,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "top": 0,
                                "skin": "ui/mask.png",
                                "right": 0,
                                "name": "bg",
                                "left": 0,
                                "bottom": 0
                            },
                            "compId": 158
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "top": 150,
                                "skin": "ui/window_word_save.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "title",
                                "centerX": 0
                            },
                            "compId": 214
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 1338,
                                "visible": false,
                                "stateNum": 1,
                                "skin": "ui/savewindow_btn_coinsave.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "coin_continue_btn",
                                "centerX": -253,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 215,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "text": "0/100",
                                    "name": "text",
                                    "fontSize": 70,
                                    "color": "#ffffff",
                                    "centerY": 0,
                                    "centerX": 48
                                },
                                "compId": 219,
                                "child": [{
                                    "type": "Sprite",
                                    "props": {
                                        "y": -5,
                                        "x": -106,
                                        "width": 80,
                                        "texture": "ui/ico_coin.png",
                                        "height": 80
                                    },
                                    "compId": 220
                                }]
                            }]
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 1352,
                                "stateNum": 1,
                                "skin": "ui/savewindow_btn_adsave.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "ad_continue_btn",
                                "centerX": 0,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 217
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 1600,
                                "stateNum": 1,
                                "skin": "ui/btn_skip.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "skip_btn",
                                "centerX": 0,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 221
                        }]
                    }, {
                        "type": "View",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 1080,
                            "visible": false,
                            "var": "coinPage",
                            "name": "coinpage",
                            "height": 1920
                        },
                        "compId": 223,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "top": 0,
                                "skin": "ui/mask.png",
                                "right": 0,
                                "name": "bg",
                                "left": 0,
                                "bottom": 0
                            },
                            "compId": 224,
                            "child": [{
                                "type": "Image",
                                "props": {
                                    "y": 0,
                                    "x": 0,
                                    "top": 0,
                                    "skin": "ui/friendgift_bg.png",
                                    "right": 0,
                                    "name": "bg",
                                    "left": 0,
                                    "bottom": 0
                                },
                                "compId": 234
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "top": 111,
                                "skin": "ui/window_word_coinreward.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "title",
                                "centerX": 0
                            },
                            "compId": 225
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 306,
                                "skin": "ui/window_ico_cardbg.png",
                                "name": "carriage",
                                "centerX": -288
                            },
                            "compId": 235,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "text": "X0",
                                    "name": "text",
                                    "fontSize": 60,
                                    "color": "#ffffff",
                                    "centerY": 0,
                                    "centerX": 57
                                },
                                "compId": 236,
                                "child": [{
                                    "type": "Sprite",
                                    "props": {
                                        "y": -10,
                                        "x": -105,
                                        "width": 80,
                                        "texture": "ui/ico_ggoods.png",
                                        "height": 80
                                    },
                                    "compId": 237
                                }]
                            }]
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 426,
                                "skin": "ui/window_ico_arrow.png",
                                "rotation": -90,
                                "name": "convert",
                                "centerX": 0
                            },
                            "compId": 241
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 253,
                                "text": "金币收益X1.0",
                                "name": "coin_plus",
                                "fontSize": 40,
                                "color": "#ffff00",
                                "centerX": 12
                            },
                            "compId": 242
                        }, {
                            "type": "Image",
                            "props": {
                                "y": 306,
                                "skin": "ui/window_ico_cardbg.png",
                                "name": "coin",
                                "centerX": 303
                            },
                            "compId": 238,
                            "child": [{
                                "type": "Label",
                                "props": {
                                    "text": "X0",
                                    "name": "text",
                                    "fontSize": 60,
                                    "color": "#ffffff",
                                    "centerY": 0,
                                    "centerX": 47
                                },
                                "compId": 239,
                                "child": [{
                                    "type": "Sprite",
                                    "props": {
                                        "y": -10,
                                        "x": -103,
                                        "width": 80,
                                        "texture": "ui/ico_coin.png",
                                        "height": 80
                                    },
                                    "compId": 240
                                }]
                            }]
                        }, {
                            "type": "Button",
                            "props": {
                                "stateNum": 1,
                                "skin": "ui/window_btn_triblecoin.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "more_coin_btn",
                                "centerX": 260,
                                "bottom": 150,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 230
                        }, {
                            "type": "Button",
                            "props": {
                                "stateNum": 1,
                                "skin": "ui/window_btn_get.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "skip_btn",
                                "centerX": -260,
                                "bottom": 150,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 232
                        }]
                    }, {
                        "type": "Image",
                        "props": {
                            "visible": true,
                            "var": "new_skin_tip",
                            "skin": "ui/ico_newskinbg.png",
                            "name": "new_skin_tip",
                            "centerX": 0,
                            "bottom": 627
                        },
                        "compId": 153,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 8.5,
                                "width": 100,
                                "skin": "ui/firstpage_ico_car.png",
                                "name": "pic",
                                "height": 100,
                                "centerX": 232
                            },
                            "compId": 154
                        }, {
                            "type": "Label",
                            "props": {
                                "y": 31,
                                "x": 51,
                                "text": "2关后解锁新皮肤",
                                "name": "text",
                                "fontSize": 55,
                                "color": "#ffffff"
                            },
                            "compId": 155
                        }]
                    }, {
                        "type": "View",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 1080,
                            "visible": false,
                            "name": "shoppage",
                            "height": 1920
                        },
                        "compId": 164,
                        "child": [{
                            "type": "Image",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "top": 0,
                                "skin": "background/shop.jpg",
                                "right": 0,
                                "name": "bg",
                                "left": 0,
                                "bottom": 0
                            },
                            "compId": 165
                        }, {
                            "type": "Image",
                            "props": {
                                "top": 151,
                                "skin": "ui/skinpage_word_slogan.png",
                                "name": "title",
                                "centerX": 0
                            },
                            "compId": 168
                        }, {
                            "type": "Button",
                            "props": {
                                "x": 150,
                                "top": 181,
                                "stateNum": 1,
                                "skin": "ui/skinpage_btn_back.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "back_btn",
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 166
                        }, {
                            "type": "Label",
                            "props": {
                                "visible": false,
                                "text": "2关后解锁",
                                "name": "tip",
                                "fontSize": 80,
                                "color": "#ffffff",
                                "centerY": -300,
                                "centerX": 0
                            },
                            "compId": 177
                        }, {
                            "type": "List",
                            "props": {
                                "x": 0,
                                "width": 1080,
                                "repeatX": 26,
                                "name": "list",
                                "height": 360,
                                "centerY": 0
                            },
                            "compId": 179,
                            "child": [{
                                "type": "Box",
                                "props": {
                                    "width": 360,
                                    "renderType": "render",
                                    "height": 360
                                },
                                "compId": 180,
                                "child": [{
                                    "type": "Image",
                                    "props": {
                                        "y": 55,
                                        "x": 20,
                                        "width": 320,
                                        "name": "img",
                                        "height": 250
                                    },
                                    "compId": 181
                                }]
                            }, {
                                "type": "HScrollBar",
                                "props": {
                                    "name": "scrollBar"
                                },
                                "compId": 182
                            }]
                        }, {
                            "type": "Button",
                            "props": {
                                "visible": false,
                                "stateNum": 1,
                                "skin": "ui/skinpage_btn_use.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "use_btn",
                                "centerY": 350,
                                "centerX": 0,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 172
                        }, {
                            "type": "Image",
                            "props": {
                                "x": 0,
                                "skin": "ui/using.png",
                                "name": "using",
                                "centerY": 350,
                                "centerX": 0
                            },
                            "compId": 176
                        }]
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 125,
                            "x": 380,
                            "visible": true,
                            "var": "coin",
                            "top": 125,
                            "skin": "ui/firstpage_ico_coinbg.png",
                            "centerX": 0
                        },
                        "compId": 210,
                        "child": [{
                            "type": "Label",
                            "props": {
                                "text": "0",
                                "name": "text",
                                "fontSize": 60,
                                "color": "#ffffff",
                                "centerY": 0,
                                "centerX": 20
                            },
                            "compId": 212,
                            "child": [{
                                "type": "Sprite",
                                "props": {
                                    "y": 0,
                                    "x": -75,
                                    "width": 60,
                                    "texture": "ui/ico_coin.png",
                                    "height": 60
                                },
                                "compId": 213
                            }]
                        }]
                    }, {
                        "type": "Image",
                        "props": {
                            "y": 1544,
                            "x": 0,
                            "visible": true,
                            "var": "upgrade",
                            "skin": "ui/firstpage_ico_upgradebg.png",
                            "centerX": 0,
                            "bottom": 0
                        },
                        "compId": 183,
                        "child": [{
                            "type": "Button",
                            "props": {
                                "y": 188,
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_upgrade_1.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "move_speed",
                                "centerX": -300,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 186,
                            "child": [{
                                "type": "Sprite",
                                "props": {
                                    "texture": "ui/firstpage_btn_upgrade_2.png",
                                    "name": "disable"
                                },
                                "compId": 188
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 35,
                                    "x": 10,
                                    "width": 250,
                                    "text": "Move Speed",
                                    "name": "title",
                                    "fontSize": 36,
                                    "color": "#ffffff",
                                    "align": "center"
                                },
                                "compId": 189
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 103,
                                    "x": 73.9951171875,
                                    "text": "X1.0",
                                    "name": "value",
                                    "fontSize": 60,
                                    "color": "#ffffff"
                                },
                                "compId": 190
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 226,
                                    "text": "100",
                                    "name": "cost",
                                    "fontSize": 50,
                                    "color": "#ffffff",
                                    "centerX": 20
                                },
                                "compId": 191,
                                "child": [{
                                    "type": "Sprite",
                                    "props": {
                                        "y": 0,
                                        "x": -50,
                                        "width": 50,
                                        "texture": "ui/ico_coin.png",
                                        "height": 50
                                    },
                                    "compId": 192
                                }]
                            }, {
                                "type": "Sprite",
                                "props": {
                                    "y": -16,
                                    "x": 225,
                                    "width": 60,
                                    "texture": "ui/ico_levelup.png",
                                    "name": "tip",
                                    "height": 60
                                },
                                "compId": 244
                            }]
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 188,
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_upgrade_1.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "upgrade_speed",
                                "centerX": 0,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 193,
                            "child": [{
                                "type": "Sprite",
                                "props": {
                                    "texture": "ui/firstpage_btn_upgrade_2.png",
                                    "name": "disable"
                                },
                                "compId": 195
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 14,
                                    "x": 55.5,
                                    "text": "升级速度",
                                    "name": "title",
                                    "fontSize": 40,
                                    "color": "#ffffff"
                                },
                                "compId": 196
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 103,
                                    "x": 73.9951171875,
                                    "text": "X1.0",
                                    "name": "value",
                                    "fontSize": 60,
                                    "color": "#ffffff"
                                },
                                "compId": 197
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 226,
                                    "text": "100",
                                    "name": "cost",
                                    "fontSize": 50,
                                    "color": "#ffffff",
                                    "centerX": 20
                                },
                                "compId": 198,
                                "child": [{
                                    "type": "Sprite",
                                    "props": {
                                        "y": 0,
                                        "x": -50,
                                        "width": 50,
                                        "texture": "ui/ico_coin.png",
                                        "height": 50
                                    },
                                    "compId": 199
                                }]
                            }, {
                                "type": "Sprite",
                                "props": {
                                    "y": -16,
                                    "x": 225,
                                    "width": 60,
                                    "texture": "ui/ico_levelup.png",
                                    "name": "tip",
                                    "height": 60
                                },
                                "compId": 245
                            }]
                        }, {
                            "type": "Button",
                            "props": {
                                "y": 188,
                                "stateNum": 1,
                                "skin": "ui/firstpage_btn_upgrade_1.png",
                                "scaleY": 1,
                                "scaleX": 1,
                                "name": "coin_plus",
                                "centerX": 300,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "compId": 200,
                            "child": [{
                                "type": "Sprite",
                                "props": {
                                    "texture": "ui/firstpage_btn_upgrade_2.png",
                                    "name": "disable"
                                },
                                "compId": 202
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 14,
                                    "x": 55.5,
                                    "text": "金币收益",
                                    "name": "title",
                                    "fontSize": 40,
                                    "color": "#ffffff"
                                },
                                "compId": 203
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 103,
                                    "x": 73.9951171875,
                                    "text": "X1.0",
                                    "name": "value",
                                    "fontSize": 60,
                                    "color": "#ffffff"
                                },
                                "compId": 204
                            }, {
                                "type": "Label",
                                "props": {
                                    "y": 226,
                                    "text": "100",
                                    "name": "cost",
                                    "fontSize": 50,
                                    "color": "#ffffff",
                                    "centerX": 20
                                },
                                "compId": 205,
                                "child": [{
                                    "type": "Sprite",
                                    "props": {
                                        "y": 0,
                                        "x": -50,
                                        "width": 50,
                                        "texture": "ui/ico_coin.png",
                                        "height": 50
                                    },
                                    "compId": 206
                                }]
                            }, {
                                "type": "Sprite",
                                "props": {
                                    "y": -16,
                                    "x": 225,
                                    "width": 60,
                                    "texture": "ui/ico_levelup.png",
                                    "name": "tip",
                                    "height": 60
                                },
                                "compId": 246
                            }]
                        }]
                    }]
                }, {
                    "type": "Script",
                    "props": {
                        "runtime": "scenes/GameScene/GameUIControl.ts"
                    },
                    "compId": 247
                }],
                "loadList": ["ui/firstpage_ico_bg.jpg", "ui/firstpage_ico_slogan.png", "ui/firstpage_ico_car.png", "ui/firstpage_btn_begin.png", "ui/firstpage_btn_friendgame.png", "ui/firstpage_btn_skinstore.png", "ui/firstpage_btn_settings.png", "ui/firstpage_btn_share.png", "ui/gamepage_ico_timebg.png", "ui/gamepage_ico_rankbg_1.png", "ui/ico_hand2.png", "ui/playpage_ico_guideword.png", "ui/win_title.png", "ui/lose_title.png", "ui/1.png", "ui/2.png", "ui/3.png", "ui/ico_guide_2.png", "ui/ico_guide_3.png", "ui/ico_adbg.png", "ui/btn_backhome.png", "ui/btn_nextlevel.png", "ui/btn_playagain.png", "ui/mask.png", "ui/window_word_save.png", "ui/savewindow_btn_coinsave.png", "ui/ico_coin.png", "ui/savewindow_btn_adsave.png", "ui/btn_skip.png", "ui/friendgift_bg.png", "ui/window_word_coinreward.png", "ui/window_ico_cardbg.png", "ui/ico_ggoods.png", "ui/window_ico_arrow.png", "ui/window_btn_triblecoin.png", "ui/window_btn_get.png", "ui/ico_newskinbg.png", "ui/ico_bg.jpg", "ui/skinpage_word_slogan.png", "ui/skinpage_btn_back.png", "ui/skinpage_btn_use.png", "ui/using.png", "ui/firstpage_ico_coinbg.png", "ui/firstpage_ico_upgradebg.png", "ui/firstpage_btn_upgrade_1.png", "ui/firstpage_btn_upgrade_2.png", "ui/ico_levelup.png", "background/lobby.jpg", "background/shop.jpg"],
                "loadList3D": []
            };
            scenes.GameSceneUI = GameSceneUI;
            REG("ui.scenes.GameSceneUI", GameSceneUI);
            class LoadingSceneUI extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(LoadingSceneUI.uiView);
                }
            }
            LoadingSceneUI.uiView = {
                "type": "Scene",
                "props": {
                    "width": 1080,
                    "height": 1920
                },
                "compId": 2,
                "child": [{
                    "type": "Image",
                    "props": {
                        "var": "bg",
                        "top": 0,
                        "skin": "background/loading.jpg",
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "compId": 3
                }, {
                    "type": "Label",
                    "props": {
                        "var": "title",
                        "text": "游戏资源加载中",
                        "stroke": 10,
                        "fontSize": 80,
                        "color": "#ffffff",
                        "centerX": 0,
                        "bottom": 310
                    },
                    "compId": 4
                }, {
                    "type": "Label",
                    "props": {
                        "y": 0,
                        "x": 0,
                        "var": "progress",
                        "text": "0%",
                        "stroke": 10,
                        "fontSize": 80,
                        "color": "#ffffff",
                        "centerX": 0,
                        "bottom": 200
                    },
                    "compId": 5
                }, {
                    "type": "Script",
                    "props": {
                        "runtime": "scenes/LoadingScene/LoadingControl.ts"
                    },
                    "compId": 8
                }],
                "loadList": ["UI/ico_loading.jpg", "background/loading.jpg"],
                "loadList3D": []
            };
            scenes.LoadingSceneUI = LoadingSceneUI;
            REG("ui.scenes.LoadingSceneUI", LoadingSceneUI);
            class MessagePopupUI extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(MessagePopupUI.uiView);
                }
            }
            MessagePopupUI.uiView = {
                "type": "Dialog",
                "props": {
                    "width": 750,
                    "height": 300
                },
                "compId": 2,
                "child": [{
                    "type": "Image",
                    "props": {
                        "y": 91.5,
                        "x": 33.5,
                        "skin": "ui/ico_newskinbg.png"
                    },
                    "compId": 3,
                    "child": [{
                        "type": "Label",
                        "props": {
                            "y": 22.5,
                            "x": -38,
                            "wordWrap": true,
                            "width": 759,
                            "text": "Failed to get the reward, please watch the ads to the end.",
                            "height": 72,
                            "fontSize": 42,
                            "color": "#f9f3f3",
                            "bold": true,
                            "align": "center"
                        },
                        "compId": 4
                    }]
                }],
                "loadList": ["ui/ico_newskinbg.png"],
                "loadList3D": []
            };
            scenes.MessagePopupUI = MessagePopupUI;
            REG("ui.scenes.MessagePopupUI", MessagePopupUI);
        })(scenes = ui.scenes || (ui.scenes = {}));
    })(ui || (ui = {}));

    class MessagePopup extends ui.scenes.MessagePopupUI {
        constructor() {
            super();
        }
        onOpened() {
            Laya.timer.once(3e3, this, this.close);
        }
    }

    class WebPlatform extends IPlatform {
        constructor() {
            super();
            this.navigateActive = false;
            let canvas = document.getElementById("layaCanvas");
            canvas && canvas.addEventListener("mouseup", () => {
                if (this.navigateActive) {
                    this.navigateActive = false;
                    YYGSDK.navigate(this._screenName, this._buttonName, this._gameId);
                }
            });
            canvas && canvas.addEventListener("touchend", () => {
                if (this.navigateActive) {
                    this.navigateActive = false;
                    YYGSDK.navigate(this._screenName, this._buttonName, this._gameId);
                }
            });
        }
        navigate(screenName, buttonName, gameId) {
            if (this.navigateActive === false) {
                this.navigateActive = true;
                this._screenName = screenName;
                this._buttonName = buttonName;
                this._gameId = gameId;
            }
        }
        getStorageSync(key) {
            let v = Laya.LocalStorage.getItem(key);
            return JSON.parse(v);
        }
        setStorageSync(key, value) {
            return Laya.LocalStorage.setItem(key, JSON.stringify(value));
        }
        showReward(success, failure) {
            Laya.SoundManager.muted = true;
            YYGSDK.adsManager.request(YYG.TYPE.REWARD, YYG.EventHandler.create(this, () => {
                success && success();
                Laya.SoundManager.muted = false;
            }), YYG.EventHandler.create(this, (event) => {
                if (failure) {
                    failure();
                } else {
                    if (event === YYG.Event.AD_SKIPPED) {
                        new MessagePopup().popup();
                    }
                }
                Laya.SoundManager.muted = false;
            }));
        }
        showInterstitial(complete) {
            Laya.SoundManager.muted = true;
            YYGSDK.showInterstitial(() => {
                Laya.SoundManager.muted = false;
                complete && complete();
            });
        }
        getForgames() {
            let forgames = YYGSDK.forgames;
            forgames.sort(function(a, b) {
                return Math.random() - 0.5;
            });
            return forgames;
        }
        showLoading(title) {}
        hideLoading() {}
    }

    // class platform {
    //     static _init_() {
    //         this._platform = new WebPlatform();
    //     }
    //     static getInstance() {
    //         if (!this._platform) {
    //             this._init_();
    //         }
    //         return this._platform;
    //     }
    // }
    // platform._platform = null;
    // window["platform"] = platform;

    class BaseDao {
        constructor() {
            this.__className = "BaseDao";
        }
        setClassName(value) {
            this.__className = value;
        }
        getClassName() {
            return this.__className;
        }
        read() {
            let json = platform.getInstance().getStorageSync("DAO_" + this.getClassName()) || "{}";
            let cls = JSON.parse(json);
            for (var key in cls) {
                if (this.hasOwnProperty(key)) {
                    this[key] = cls[key];
                }
            }
            return this;
        }
        save() {
            let cls = {};
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    cls[key] = this[key];
                }
            }
            platform.getInstance().setStorageSync("DAO_" + this.getClassName(), JSON.stringify(cls));
        }
    }
    BaseDao.className = "BaseDao";

    class GameDao extends BaseDao {
        constructor() {
            super(...arguments);
            this.level = 0;
            this.skin = 0;
            this.unlockSkin = 0;
            this.coin = 0;
            this.moveSpeed = 100;
            this.upgradeSpeed = 100;
            this.coinPlus = 100;
            this.moveSpeedCost = 100;
            this.upgradeSpeedCost = 100;
            this.coinPlusCost = 100;
        }
    }
    GameDao.className = "GameDao";

    class LevelDao extends BaseDao {
        getConfigByLevel(level) {
            return LVELE_CONFIG[level % LVELE_CONFIG.length];
        }
    }
    LevelDao.className = "LevelDao";
    const LVELE_CONFIG = [
        [{
                x: 0,
                y: 0,
                crop: "grass1",
                size: 20,
                top: 1,
                left: 1
            },
            {
                x: 4,
                y: 4,
                crop: "grass1",
                size: 20,
                bottom: 1,
                right: 1
            },
            {
                x: 0,
                y: 4,
                crop: "grass1",
                size: 20,
                left: 1,
                bottom: 1
            },
            {
                x: 4,
                y: 0,
                crop: "grass1",
                size: 20,
                right: 1,
                top: 1
            }
        ],
        [{
                x: 0,
                y: 0,
                crop: "grass1",
                size: 20
            },
            {
                x: 4,
                y: 4,
                crop: "grass1",
                size: 20,
                right: 1,
                bottom: 1
            },
            {
                x: 0,
                y: 4,
                crop: "grass1",
                size: 20,
                bottom: 1
            },
            {
                x: -4,
                y: 4,
                crop: "grass1",
                size: 20,
                bottom: 1,
                left: 1
            },
            {
                x: -4,
                y: 0,
                crop: "grass1",
                size: 20,
                left: 1
            },
            {
                x: 4,
                y: 0,
                crop: "grass1",
                size: 20,
                right: 1
            },
            {
                x: -4,
                y: -4,
                crop: "grass1",
                size: 20,
                left: 1,
                top: 1
            },
            {
                x: 0,
                y: -4,
                crop: "grass1",
                size: 20,
                top: 1
            },
            {
                x: 4,
                y: -4,
                crop: "grass1",
                size: 20,
                top: 1,
                right: 1
            }
        ],
        [{
                x: 0,
                y: 0,
                crop: "grass1",
                size: 20,
                left: 1,
                right: 1
            },
            {
                x: 0,
                y: 4,
                crop: "grass1",
                size: 20,
                bottom: 1
            },
            {
                x: -4,
                y: 4,
                crop: "grass1",
                size: 20,
                top: 1,
                bottom: 1,
                left: 1
            },
            {
                x: 4,
                y: 4,
                crop: "grass1",
                size: 20,
                top: 1,
                bottom: 1,
                right: 1
            }, {
                x: 0,
                y: -4,
                crop: "grass1",
                size: 20,
                top: 1
            },
            {
                x: -4,
                y: -4,
                crop: "grass1",
                size: 20,
                left: 1,
                bottom: 1,
                top: 1
            },
            {
                x: 4,
                y: -4,
                crop: "grass1",
                size: 20,
                right: 1,
                top: 1,
                bottom: 1
            }
        ],
        [{
                x: 0,
                y: 0,
                crop: "grass1",
                size: 20,
                left: 1,
                top: 1
            },
            {
                x: 8,
                y: 8,
                crop: "grass1",
                size: 20,
                bottom: 1,
                right: 1
            },
            {
                x: 4,
                y: 8,
                crop: "grass1",
                size: 20,
                top: 1,
                bottom: 1
            },
            {
                x: 0,
                y: 8,
                crop: "grass1",
                size: 20,
                left: 1,
                bottom: 1
            },
            {
                x: 0,
                y: 4,
                crop: "grass1",
                size: 20,
                left: 1,
                right: 1
            },
            {
                x: 8,
                y: 4,
                crop: "grass1",
                size: 20,
                left: 1,
                right: 1
            },
            {
                x: 4,
                y: 0,
                crop: "grass1",
                size: 20,
                bottom: 1,
                top: 1
            },
            {
                x: 8,
                y: 0,
                crop: "grass1",
                size: 20,
                top: 1,
                right: 1
            }
        ],
        [{
                x: 0,
                y: 0,
                crop: "grass1",
                size: 20
            },
            {
                x: -4,
                y: 0,
                crop: "grass1",
                size: 20,
                top: 1,
                bottom: 1,
                left: 1
            },
            {
                x: 4,
                y: 0,
                crop: "grass1",
                size: 20,
                top: 1,
                right: 1,
                bottom: 1
            },
            {
                x: 0,
                y: 4,
                crop: "grass1",
                size: 20,
                bottom: 1,
                left: 1,
                right: 1
            },
            {
                x: 0,
                y: -4,
                crop: "grass1",
                size: 20,
                top: 1,
                left: 1,
                right: 1
            }
        ],
        [{
                x: 0,
                y: 0,
                crop: "grass1",
                size: 20,
                top: 1,
                bottom: 1
            },
            {
                x: 4,
                y: 0,
                crop: "grass1",
                size: 20,
                right: 1
            },
            {
                x: -4,
                y: 0,
                crop: "grass1",
                size: 20,
                left: 1
            },
            {
                x: -4,
                y: -4,
                crop: "grass1",
                size: 20,
                top: 1,
                left: 1,
                right: 1
            },
            {
                x: -4,
                y: 4,
                crop: "grass1",
                size: 20,
                left: 1,
                right: 1,
                bottom: 1
            },
            {
                x: 4,
                y: -4,
                crop: "grass1",
                size: 20,
                top: 1,
                left: 1,
                right: 1
            },
            {
                x: 4,
                y: 4,
                crop: "grass1",
                size: 20,
                left: 1,
                right: 1,
                bottom: 1
            }
        ]
    ];

    class SkinDao extends BaseDao {
        getSkin(skinId) {
            return SKIN[skinId];
        }
    }
    SkinDao.className = "SkinDao";
    const SKIN = [{
        mesh: "car1",
        mat: "car_1_1",
        color: new Laya.Vector3(.831, .226, .125)
    }, {
        mesh: "car1",
        mat: "car_1_2",
        color: new Laya.Vector3(.165, .78, .341)
    }, {
        mesh: "car1",
        mat: "car_1_3",
        color: new Laya.Vector3(.05, .541, .949)
    }, {
        mesh: "car1",
        mat: "car_1_4",
        color: new Laya.Vector3(.459, .372, .96)
    }, {
        mesh: "car2",
        mat: "car_2_1",
        color: new Laya.Vector3(.02, 1, .976)
    }, {
        mesh: "car2",
        mat: "car_2_2",
        color: new Laya.Vector3(.831, .226, .125)
    }, {
        mesh: "car2",
        mat: "car_2_3",
        color: new Laya.Vector3(.831, .226, .125)
    }, {
        mesh: "car3",
        mat: "car_3",
        color: new Laya.Vector3(.831, .226, .125)
    }, {
        mesh: "car4",
        mat: "car_4",
        color: new Laya.Vector3(.02, 1, .976)
    }, {
        mesh: "car5",
        mat: "car_5",
        color: new Laya.Vector3(.05, .541, .949)
    }, {
        mesh: "car6",
        mat: "car_6_1",
        color: new Laya.Vector3(.831, .226, .125)
    }, {
        mesh: "car6",
        mat: "car_6_2",
        color: new Laya.Vector3(.459, .372, .96)
    }, {
        mesh: "car6",
        mat: "car_6_3",
        color: new Laya.Vector3(.02, 1, .976)
    }, {
        mesh: "car7",
        mat: "car_7_1",
        color: new Laya.Vector3(.459, .372, .96)
    }, {
        mesh: "car7",
        mat: "car_7_2",
        color: new Laya.Vector3(.165, .78, .341)
    }, {
        mesh: "car7",
        mat: "car_7_3",
        color: new Laya.Vector3(.05, .541, .949)
    }, {
        mesh: "car7",
        mat: "car_7_4",
        color: new Laya.Vector3(.165, .78, .341)
    }, {
        mesh: "car8",
        mat: "car_8_1",
        color: new Laya.Vector3(.165, .78, .341)
    }, {
        mesh: "car8",
        mat: "car_8_2",
        color: new Laya.Vector3(.05, .541, .949)
    }, {
        mesh: "car8",
        mat: "car_8_3",
        color: new Laya.Vector3(.831, .226, .125)
    }, {
        mesh: "car9",
        mat: "car_9",
        color: new Laya.Vector3(.831, .226, .125)
    }, {
        mesh: "car10",
        mat: "car_10",
        color: new Laya.Vector3(.05, .541, .949)
    }, {
        mesh: "car11",
        mat: "car_11_1",
        color: new Laya.Vector3(.02, 1, .976)
    }, {
        mesh: "car11",
        mat: "car_11_2",
        color: new Laya.Vector3(.831, .226, .125)
    }];

    class PlayersDao extends BaseDao {
        findPlayers(num) {
            let file = Laya.loader.getRes("res/players.json");
            var temp_array = new Array();
            for (var index in file) {
                temp_array.push(file[index]);
            }
            var return_array = new Array();
            for (var i = 0; i < num; i++) {
                if (temp_array.length > 0) {
                    var arrIndex = Math.floor(Math.random() * temp_array.length);
                    return_array[i] = temp_array[arrIndex];
                    temp_array.splice(arrIndex, 1);
                } else {
                    break;
                }
            }
            return return_array;
        }
    }
    PlayersDao.className = "PlayersDao";

    class dao {
        static find(db) {
            if (!this.__DAO__[db.className]) {
                this.__DAO__[db.className] = new db();
                this.__DAO__[db.className].setClassName(db.className);
                this.__DAO__[db.className].read();
            }
            return this.__DAO__[db.className];
        }
        static get gameDao() {
            return dao.find(GameDao);
        }
        static get levelDao() {
            return dao.find(LevelDao);
        }
        static get skinDao() {
            return dao.find(SkinDao);
        }
        static get playersDao() {
            return dao.find(PlayersDao);
        }
    }
    dao.__DAO__ = [];
    window["dao"] = dao;

    class LoadingControl extends Laya.Script {
        constructor() {
            super(...arguments);
            this.progress = 0;
        }
        onEnable() {
            this.owner.width = Laya.stage.width;
            this.owner.height = Laya.stage.height;
            this.owner.bg.width = Laya.stage.width;
            this.owner.bg.height = Laya.stage.height;
            this.owner.title.text = "LOADING";

            platform.getInstance().showSplash();
            platform.getInstance().yadstartup("Farmers-Io", () => {
                ResouceManager.getInstance().create([{
                        url: "res/players.json",
                        class: Laya.Loader.JSON
                    },
                    {
                        url: "res/atlas/zhise.atlas",
                        class: Laya.Loader.ATLAS
                    },
                    {
                        url: "res/atlas/ui.atlas",
                        class: Laya.Loader.ATLAS
                    },
                    {
                        url: "res/grass_1.lh",
                        class: Laya.Sprite3D,
                        name: "grass1"
                    },
                    {
                        url: "res/grass_2.lh",
                        class: Laya.Sprite3D,
                        name: "grass2"
                    },
                    {
                        url: "res/grass_3.lh",
                        class: Laya.Sprite3D,
                        name: "grass3"
                    },
                    {
                        url: "res/grass_4.lh",
                        class: Laya.Sprite3D,
                        name: "grass4"
                    },
                    {
                        url: "res/grass_5.lh",
                        class: Laya.Sprite3D,
                        name: "grass5"
                    },
                    {
                        url: "res/border.lh",
                        class: Laya.Sprite3D,
                        name: "border"
                    },
                    {
                        url: "res/tree.lh",
                        class: Laya.Sprite3D,
                        name: "tree"
                    },
                    {
                        url: "res/explosionParticle.lh",
                        class: Laya.Sprite3D,
                        name: "explosionParticle"
                    },
                    {
                        url: "res/train_carriage.lh",
                        class: Laya.Sprite3D,
                        name: "trainCarriage",
                        complete: (sprite) => {
                            sprite.transform.position = new Laya.Vector3(0, .1, 0);
                            sprite.transform.rotationEuler = new Laya.Vector3(0, -90, 0);
                            sprite.transform.localScale = new Laya.Vector3(7, 7, 7);
                        }
                    },
                    {
                        url: "res/wheel.lh",
                        class: Laya.Sprite3D,
                        name: "cutter",
                        complete: (sprite) => {
                            sprite.transform.rotationEuler = new Laya.Vector3(90, 0, 0);
                            sprite.transform.localScale = new Laya.Vector3(12, 12, 12);
                        }
                    },
                    {
                        url: "res/goods.lh",
                        class: Laya.Sprite3D,
                        name: "goods",
                        complete: (sprite) => {
                            sprite.transform.localScale = new Laya.Vector3(8, 8, 8);
                        }
                    },
                    {
                        url: "res/cutParticle.lh",
                        class: Laya.Sprite3D,
                        name: "cutParticle",
                        complete: (sprite) => {
                            sprite.transform.rotationEuler = new Laya.Vector3(-150, 90, 0);
                            sprite.transform.position = new Laya.Vector3(.3, .1, 0);
                        }
                    },
                ], this.onComplete.bind(this), this.onProgress.bind(this));
            })
        }
        onProgress(value) {
            this.owner.progress.text = Math.floor(value * 100) + "%";
        }
        onComplete() {
            //   platform.getInstance();
            //   YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => {
            //       Laya.Scene.open("gameScene.scene");
            //   });
            //   let o = new YYG.Options();
            //   o.gameNameId = "Farmers-Io";
            //   YYGSDK.__init__(YYG.ChannelType.YAD, o);
            Laya.Scene.open("gameScene.scene");
            platform.getInstance().hideSplash();
            platform.getInstance().showBanner();
        }
        onDisable() {}
    }

    class GameConfig {
        constructor() {}
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("scenes/GameScene/GameUIControl.ts", GameUIControl);
            reg("scenes/LoadingScene/LoadingControl.ts", LoadingControl);
        }
    }
    GameConfig.width = 1080;
    GameConfig.height = 1920;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "scenes/MessagePopup.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class LoadingScene extends ui.scenes.LoadingSceneUI {}

    class Main {
        constructor() {
            Laya3D.init(1080, 1920);
            Laya.stage.scaleMode = Laya.Stage.EXACTFIT;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            new LoadingScene().open();
        }
    }
    new Main();

}());