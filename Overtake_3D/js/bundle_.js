class Sound{
    
}
/**
 * 音频管理系统
 */
class AudioEngine {
    constructor() {
        this._audioInstances  = new Map();
        this._audioContext = null;
        this._audioWebEnabled = false;
        this._audioInstances  = new Map();
        this._ismute = false;
        this.initialize();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new AudioEngine();
        }
        return this._instance;
    }
    initialize() {
        try {
            window.AudioContext = window.AudioContext || window["webkitAudioContext"];
            this._audioContext = new AudioContext;
            let t = this;
            function tryToResumeAudioContext() {
                if (t._audioContext.state === "suspended") {
                    t._audioContext.resume();
                }
                else {
                    clearInterval(resumeInterval);
                }
            }
            let resumeInterval = setInterval(tryToResumeAudioContext, 0.4e3);
            this._audioWebEnabled = true;
        }
        catch (e) {
            alert("Web Audio API is not supported in this browser");
        }
    }


    pause() {
        this._audioContext.suspend();
    }
    resume() {
        this._audioContext.resume();
    }
    stop(url) {
        if (this._audioInstances.has(url)) {
            const sound = this._audioInstances.get(url);
            const channel = sound.channel;
            if (channel.source.buffer) {
                try {
                    channel.source.stop(this._audioContext.currentTime);
                }
                catch (e) {
                    channel.source.disconnect();
                }
                channel.source.onended = (function () { });
                channel.setup();
            }
        }
    }
    play(url, loop = false) {
        if (!this._audioWebEnabled)
            return;
        if(this._isPaused)return;
        if (this._audioInstances.has(url)) {
            this.stop(url);
            const sound = this._audioInstances.get(url);
            const channel = sound.channel;
            if (sound.buffer) {
                try {
                    channel.playBuffer(this._audioContext.currentTime, sound.buffer);
                    channel.source.loop = loop;
                }
                catch (e) {
                    console.error("playBuffer error. Exception: " + e);
                }
            }
        }
        else {
            this.downloadArrayBuffer(url, () => {
                this.play(url, loop);
            });
        }
    }
    load(urls, onComplete) {
        let t = urls.length;
        let d = 0;
        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            this.downloadArrayBuffer(url, () => {
                d++;
                if (d >= t) {
                    onComplete && onComplete();
                }
            });
        }
    }
    setThreeD(url) {
        if (this._audioInstances.has(url)) {
            const sound = this._audioInstances.get(url);
            sound.channel.threeD = true;
        }
    }
    createChannel() {
        let audioContext = this._audioContext;
        let channel = {
            gain: audioContext.createGain(),
            panner: audioContext.createPanner(),
            threeD: false,
            playBuffer: (function (delay, buffer, offset) {
                this.source.buffer = buffer;
                var chan = this;
                this.source.onended = (function () {
                    chan.setup();
                });
                this.source.start(delay, offset);
            }),
            setup: (function () {
                this.source = audioContext.createBufferSource();
                this.setupPanning();
            }),
            setupPanning: (function () {
                if (this.threeD) {
                    this.source.disconnect();
                    this.source.connect(this.panner);
                    this.panner.connect(this.gain);
                }
                else {
                    this.panner.disconnect();
                    this.source.connect(this.gain);
                }
            })
        };
        channel.panner.rolloffFactor = 0;
        channel.gain.connect(this._audioContext.destination);
        channel.setup();
        return channel;
    }
    downloadArrayBuffer(url, onComplete) {
      
        if (this._audioInstances.has(url)){
            onComplete && onComplete();
            return;
        }
           
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 0) {
                const sound = new Sound();
                sound.url = url;
                sound.channel = this.createChannel();
                this._audioInstances.set(url, sound);
                this._audioContext.decodeAudioData(xhr.response, (function (buffer) {
                    sound.buffer = buffer;
                    onComplete && onComplete();
                }), (function () {
                    sound.error = true;
                    onComplete && onComplete();
                    console.log("Decode error.");
                }));
            }
            else {
                throw "no response";
            }
        };
        xhr.onerror = function () {
            onComplete && onComplete();
            throw "no response";
        };
        xhr.ontimeout = function () {
            onComplete && onComplete();
        };
        xhr.onabort = function () {
            onComplete && onComplete();
        };
        xhr.send(null);
    }
}
const AudioEngineInstance = AudioEngine.getInstance();

!function() {
    "use strict";
    class t {
        constructor() {}
        static init() {
            Laya.ClassUtils.regClass;
        }
    }
    t.width = 720, t.height = 1280, t.scaleMode = "exactfit", t.screenMode = "none", 
    t.alignV = "middle", t.alignH = "center", t.startScene = "View/Settle.scene", t.sceneRoot = "", 
    t.debug = !1, t.stat = !1, t.physicsDebug = !1, t.exportSceneToJson = !1, t.init();
    var e, i = Laya.ClassUtils.regClass;
    !function(t) {
        !function(t) {
            class e extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(e.uiView);
                }
            }
            e.uiView = {
                type: "View",
                props: {
                    width: 720,
                    height: 1280
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 120,
                        x: 530.5,
                        width: 180,
                        var: "coin_g",
                        skin: "ui/color_02.png",
                        sizeGrid: "10,10,10,10",
                        rotation: 0,
                        height: 104
                    },
                    compId: 8,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: -44,
                            x: 51,
                            width: 77,
                            texture: "ui/icon_gold.png",
                            height: 85
                        },
                        compId: 9
                    }, {
                        type: "Text",
                        props: {
                            y: 43,
                            x: 6,
                            width: 173,
                            var: "coin",
                            valign: "middle",
                            text: "888888",
                            strokeColor: "#2a2a2a",
                            stroke: 2,
                            height: 54,
                            fontSize: 50,
                            color: "#ffd600",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 10
                    } ]
                }, {
                    type: "Button",
                    props: {
                        y: 70,
                        x: 31,
                        var: "btn_back",
                        stateNum: 1,
                        skin: "ui/btn_arrow.png"
                    },
                    compId: 5
                }, {
                    type: "Box",
                    props: {
                        x: 31,
                        bottom: 260
                    },
                    compId: 14,
                    child: [ {
                        type: "Button",
                        props: {
                            y: 9,
                            var: "btn_left",
                            stateNum: 1,
                            skin: "ui/btn_orientation.png"
                        },
                        compId: 3
                    }, {
                        type: "Button",
                        props: {
                            y: 9,
                            x: 566,
                            var: "btn_right",
                            stateNum: 1,
                            skin: "ui/btn_orientation_r.png"
                        },
                        compId: 4
                    }, {
                        type: "Button",
                        props: {
                            x: 163,
                            var: "btn_use",
                            stateNum: 1,
                            skin: "ui/btn_select .png"
                        },
                        compId: 6
                    }, {
                        type: "Button",
                        props: {
                            x: 163,
                            var: "btn_buy",
                            stateNum: 1,
                            skin: "ui/btn_org.png"
                        },
                        compId: 7,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: 41,
                                x: 228,
                                texture: "ui/icon_gold.png"
                            },
                            compId: 13
                        }, {
                            type: "Text",
                            props: {
                                y: 43,
                                x: 14,
                                width: 213,
                                var: "price",
                                text: "888",
                                strokeColor: "#866b00",
                                stroke: 3,
                                height: 90,
                                fontSize: 90,
                                color: "#ffffff",
                                bold: !0,
                                align: "center",
                                runtime: "laya.display.Text"
                            },
                            compId: 12
                        } ]
                    } ]
                } ],
                loadList: [ "ui/color_02.png", "ui/icon_gold.png", "ui/btn_arrow.png", "ui/btn_orientation.png", "ui/btn_orientation_r.png", "ui/btn_select .png", "ui/btn_org.png" ],
                loadList3D: []
            }, t.CarportUI = e, i("ui.View.CarportUI", e);
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
                    height: 1280
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: -2,
                        skin: "ui/Sky2.png",
                        sizeGrid: "2,2,2,2",
                        right: -2,
                        left: -2,
                        bottom: -2
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        width: 670,
                        top: 150,
                        skin: "ui/50r15.png",
                        sizeGrid: "10,10,10,10",
                        left: 25,
                        height: 797,
                        bottom: 333,
                        alpha: 1
                    },
                    compId: 26,
                    child: [ {
                        type: "List",
                        props: {
                            x: 14,
                            width: 643,
                            var: "list",
                            top: 10,
                            spaceY: 20,
                            spaceX: 20,
                            repeatX: 3,
                            bottom: 10
                        },
                        compId: 12,
                        child: [ {
                            type: "Image",
                            props: {
                                x: 0,
                                width: 200,
                                skin: "ui/adframe.png",
                                sizeGrid: "20,20,20,20",
                                renderType: "render",
                                height: 250,
                                alpha: 1
                            },
                            compId: 7,
                            child: [ {
                                type: "Image",
                                props: {
                                    y: 5,
                                    width: 190,
                                    name: "icon",
                                    left: 5,
                                    height: 190
                                },
                                compId: 9,
                                child: [ {
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 190,
                                        skin: "ui/mask_0.png",
                                        sizeGrid: "20,20,10,20",
                                        renderType: "mask",
                                        name: "mask",
                                        height: 190
                                    },
                                    compId: 16
                                } ]
                            }, {
                                type: "Text",
                                props: {
                                    y: 201,
                                    x: 5,
                                    width: 181,
                                    valign: "middle",
                                    text: "冲鸭彩虹屁",
                                    name: "title",
                                    height: 40,
                                    fontSize: 30,
                                    color: "#f8f3f3",
                                    align: "center",
                                    runtime: "laya.display.Text"
                                },
                                compId: 10
                            } ]
                        } ]
                    }, {
                        type: "Text",
                        props: {
                            y: -64,
                            x: 231,
                            text: "猜你喜欢",
                            fontSize: 52,
                            color: "#f9f900",
                            bold: !0,
                            runtime: "laya.display.Text"
                        },
                        compId: 25
                    } ]
                }, {
                    type: "Button",
                    props: {
                        y: 1057,
                        x: 246,
                        width: 228,
                        var: "back",
                        stateNum: 1,
                        skin: "ui/btn_home0.png",
                        height: 123,
                        centerX: 0,
                        bottom: 100
                    },
                    compId: 5
                } ],
                loadList: [ "ui/Sky2.png", "ui/50r15.png", "ui/adframe.png", "ui/mask_0.png", "ui/btn_home0.png" ],
                loadList3D: []
            }, t.CnxhUI = s, i("ui.View.CnxhUI", s);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 720,
                    height: 1280
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "ui/color_01.png",
                        sizeGrid: "2,2,2,2",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: 1
                    },
                    compId: 3
                }, {
                    type: "Button",
                    props: {
                        y: 1057,
                        x: 203,
                        var: "btn_fix",
                        stateNum: 1,
                        skin: "ui/btn_repair.png",
                        bottom: 100
                    },
                    compId: 4,
                    child: [ {
                        type: "Text",
                        props: {
                            y: -58,
                            x: -12,
                            text: "连续点击修车复活",
                            fontSize: 42,
                            color: "#ffffff",
                            runtime: "laya.display.Text"
                        },
                        compId: 5
                    }, {
                        type: "Animation",
                        props: {
                            y: 35,
                            x: 150,
                            source: "View/finger.ani",
                            autoPlay: !0
                        },
                        compId: 25
                    } ]
                }, {
                    type: "Box",
                    props: {
                        x: 0,
                        width: 720,
                        height: 569,
                        centerY: -325
                    },
                    compId: 14,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 1,
                            x: 213,
                            skin: "ui/title_repair.png"
                        },
                        compId: 7
                    }, {
                        type: "ProgressBar",
                        props: {
                            y: 535,
                            var: "progress",
                            value: .2,
                            skin: "ui/progress_l.png",
                            sizeGrid: "0,0,0,0,1",
                            centerX: 0
                        },
                        compId: 6
                    }, {
                        type: "Sprite",
                        props: {
                            y: 394,
                            x: 17.5,
                            width: 627,
                            texture: "ui/shop_color01.png",
                            rotation: -11,
                            height: 201
                        },
                        compId: 13
                    }, {
                        type: "Image",
                        props: {
                            y: 231,
                            x: 60,
                            width: 600,
                            var: "car",
                            scaleY: 1,
                            scaleX: 1,
                            height: 300
                        },
                        compId: 12
                    }, {
                        type: "Image",
                        props: {
                            y: 221,
                            x: 578,
                            width: 70,
                            skin: "ui/Cicle100.png",
                            height: 70
                        },
                        compId: 23,
                        child: [ {
                            type: "Text",
                            props: {
                                y: 6,
                                x: -2,
                                width: 75,
                                var: "cd",
                                valign: "middle",
                                text: "10",
                                height: 61,
                                fontSize: 50,
                                align: "center",
                                runtime: "laya.display.Text"
                            },
                            compId: 24
                        } ]
                    } ]
                }, {
                    type: "Image",
                    props: {
                        width: 720,
                        var: "zsad",
                        skin: "ui/8x8_wight.png",
                        sizeGrid: "2,2,2,2",
                        height: 175,
                        centerY: 151,
                        centerX: 0
                    },
                    compId: 17,
                    child: [ {
                        type: "List",
                        props: {
                            var: "list1",
                            top: 10,
                            spaceX: -2,
                            right: 0,
                            repeatY: 1,
                            left: 0,
                            bottom: 10
                        },
                        compId: 18,
                        child: [ {
                            type: "Box",
                            props: {
                                y: 1,
                                x: 0,
                                renderType: "render"
                            },
                            compId: 19,
                            child: [ {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 5,
                                    width: 120,
                                    skin: "ui/Sky2.png",
                                    name: "icon",
                                    height: 120
                                },
                                compId: 20
                            }, {
                                type: "Text",
                                props: {
                                    y: 125,
                                    x: 0,
                                    width: 130,
                                    valign: "middle",
                                    text: "冲鸭彩虹屁",
                                    name: "title",
                                    height: 30,
                                    fontSize: 22,
                                    color: "#000000",
                                    align: "center",
                                    runtime: "laya.display.Text"
                                },
                                compId: 21
                            } ]
                        } ]
                    } ]
                } ],
                loadList: [ "ui/color_01.png", "ui/btn_repair.png", "View/finger.ani", "ui/title_repair.png", "ui/progress_l.png", "ui/shop_color01.png", "ui/Cicle100.png", "ui/8x8_wight.png", "ui/Sky2.png" ],
                loadList3D: []
            }, t.FixCarUI = n, i("ui.View.FixCarUI", n);
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
                    height: 1280
                },
                compId: 2,
                child: [ {
                    type: "Box",
                    props: {
                        x: 2,
                        width: 720,
                        height: 300,
                        centerY: -100
                    },
                    compId: 34,
                    child: [ {
                        type: "WXOpenDataViewer",
                        props: {
                            x: 0,
                            width: 720,
                            iconSign: "wx",
                            height: 300,
                            runtime: "laya.ui.WXOpenDataViewer"
                        },
                        compId: 11
                    } ]
                }, {
                    type: "Box",
                    props: {
                        y: 52,
                        x: 10,
                        width: 214,
                        var: "ovinfo"
                    },
                    compId: 12,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 10,
                            width: 194,
                            skin: "ui/color_02.png",
                            sizeGrid: "10,10,10,10",
                            height: 106
                        },
                        compId: 13,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: -17,
                                x: 35,
                                texture: "ui/icon_car.png"
                            },
                            compId: 14
                        }, {
                            type: "Text",
                            props: {
                                y: 39,
                                x: 17,
                                width: 160,
                                var: "ov_num",
                                text: "20",
                                strokeColor: "#2f2f2f",
                                stroke: 2,
                                height: 59,
                                fontSize: 60,
                                color: "#ffffff",
                                bold: !0,
                                align: "center",
                                runtime: "laya.display.Text"
                            },
                            compId: 15
                        } ]
                    } ]
                }, {
                    type: "Image",
                    props: {
                        y: 52,
                        x: 538,
                        width: 179,
                        var: "coin_g",
                        skin: "ui/color_02.png",
                        sizeGrid: "10,10,10,10",
                        height: 105
                    },
                    compId: 18,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: -42,
                            x: 46,
                            texture: "ui/icon_gold.png"
                        },
                        compId: 19
                    }, {
                        type: "Text",
                        props: {
                            y: 50,
                            x: -1,
                            width: 179,
                            var: "get_coin",
                            text: "300000",
                            overflow: "hidden",
                            height: 52,
                            fontSize: 56,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 20
                    } ]
                }, {
                    type: "Box",
                    props: {
                        x: -8,
                        var: "speed_tip",
                        centerY: 100
                    },
                    compId: 23,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 357,
                            skin: "ui/color_05.png",
                            skewX: -38,
                            sizeGrid: "12,12,12,12",
                            height: 79,
                            alpha: .7
                        },
                        compId: 21
                    }, {
                        type: "Text",
                        props: {
                            y: 12,
                            x: 25,
                            var: "speed_info",
                            text: "Invincible 4.8s",
                            strokeColor: "#939393",
                            stroke: 2,
                            italic: !0,
                            fontSize: 42,
                            color: "#ffffff",
                            runtime: "laya.display.Text"
                        },
                        compId: 22
                    } ]
                }, {
                    type: "Text",
                    props: {
                        y: 640,
                        x: 360,
                        width: 160,
                        var: "traffic_ifo",
                        text: "Crash",
                        strokeColor: "#afafaf",
                        stroke: 2,
                        pivotY: 40,
                        pivotX: 80,
                        height: 80,
                        fontSize: 80,
                        color: "#ffffff",
                        runtime: "laya.display.Text"
                    },
                    compId: 25
                }, {
                    type: "Text",
                    props: {
                        y: 640,
                        x: 360,
                        width: 160,
                        var: "get_coin_info",
                        text: "+10",
                        strokeColor: "#bb8e00",
                        stroke: 2,
                        pivotY: 40,
                        pivotX: 80,
                        height: 80,
                        fontSize: 80,
                        color: "#ffc100",
                        runtime: "laya.display.Text"
                    },
                    compId: 26
                }, {
                    type: "Animation",
                    props: {
                        y: 416,
                        x: 118,
                        width: 483,
                        var: "guide",
                        source: "View/guide.ani",
                        height: 64,
                        autoPlay: !0
                    },
                    compId: 29
                }, {
                    type: "Box",
                    props: {
                        y: 542,
                        x: 380,
                        width: 90,
                        var: "cd",
                        pivotY: 20,
                        pivotX: 45,
                        height: 40
                    },
                    compId: 33,
                    child: [ {
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "ui/8x8_wight.png",
                            sizeGrid: "2,2,2,2",
                            right: 0,
                            left: 0,
                            bottom: 0,
                            alpha: .3
                        },
                        compId: 31
                    }, {
                        type: "Text",
                        props: {
                            y: 2,
                            x: -1,
                            width: 91,
                            var: "cdv",
                            valign: "middle",
                            text: "5.2s",
                            strokeColor: "#8d3a02",
                            stroke: 2,
                            height: 36,
                            fontSize: 36,
                            color: "#ffa300",
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 32
                    } ]
                } ],
                loadList: [ "ui/color_02.png", "ui/icon_car.png", "ui/icon_gold.png", "ui/color_05.png", "View/guide.ani", "ui/8x8_wight.png" ],
                loadList3D: []
            }, t.GameUI = a, i("ui.View.GameUI", a);
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
                    height: 1280
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        y: 776,
                        x: 118,
                        var: "guide",
                        skin: "ui/btn_start.png",
                        bottom: 440
                    },
                    compId: 24
                }, {
                    type: "Button",
                    props: {
                        x: 0,
                        var: "btn_start",
                        top: 0,
                        stateNum: 1,
                        skin: "ui/color_05.png",
                        right: 0,
                        left: 0,
                        label: "label",
                        bottom: 0,
                        alpha: 0
                    },
                    compId: 19
                }, {
                    type: "Box",
                    props: {
                        y: 52,
                        x: 10,
                        width: 214,
                        var: "ovinfo"
                    },
                    compId: 10,
                    child: [ {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 10,
                            width: 194,
                            skin: "ui/color_02.png",
                            sizeGrid: "10,10,10,10",
                            height: 106
                        },
                        compId: 5,
                        child: [ {
                            type: "Sprite",
                            props: {
                                y: -17,
                                x: 35,
                                texture: "ui/icon_car.png"
                            },
                            compId: 6
                        }, {
                            type: "Text",
                            props: {
                                y: 39,
                                x: 17,
                                width: 160,
                                var: "best",
                                text: "20",
                                strokeColor: "#2f2f2f",
                                stroke: 2,
                                height: 59,
                                fontSize: 60,
                                color: "#ffffff",
                                bold: !0,
                                align: "center",
                                runtime: "laya.display.Text"
                            },
                            compId: 7
                        } ]
                    }, {
                        type: "Image",
                        props: {
                            y: 117,
                            x: 0,
                            width: 214,
                            skin: "ui/color_02.png",
                            sizeGrid: "10,10,10,10",
                            height: 60
                        },
                        compId: 9,
                        child: [ {
                            type: "Text",
                            props: {
                                y: 10.5,
                                x: 68.5,
                                text: "Best",
                                strokeColor: "#323232",
                                stroke: 2,
                                fontSize: 38,
                                color: "#ffffff",
                                runtime: "laya.display.Text"
                            },
                            compId: 11
                        } ]
                    } ]
                }, {
                    type: "Image",
                    props: {
                        y: 52,
                        x: 538,
                        width: 179,
                        var: "coin_g",
                        skin: "ui/color_02.png",
                        sizeGrid: "10,10,10,10",
                        height: 105
                    },
                    compId: 12,
                    child: [ {
                        type: "Sprite",
                        props: {
                            y: -42,
                            x: 46,
                            texture: "ui/icon_gold.png"
                        },
                        compId: 13
                    }, {
                        type: "Text",
                        props: {
                            y: 50,
                            x: -1,
                            width: 179,
                            var: "coin",
                            text: "300000",
                            overflow: "hidden",
                            height: 52,
                            fontSize: 56,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                            runtime: "laya.display.Text"
                        },
                        compId: 14
                    } ]
                }, {
                    type: "Box",
                    props: {
                        x: 630,
                        bottom: 1010
                    },
                    compId: 18,
                    child: [ {
                        type: "Radio",
                        props: {
                            y: 95,
                            var: "btn_vibrate",
                            stateNum: 2,
                            skin: "ui/btn_shock_.png"
                        },
                        compId: 16
                    }, {
                        type: "Radio",
                        props: {
                            var: "btn_sound",
                            stateNum: 2,
                            skin: "ui/btn_voice.png"
                        },
                        compId: 17
                    } ]
                }, {
                    type: "Box",
                    props: {
                        x: 57,
                        bottom: 120
                    },
                    compId: 23,
                    child: [ {
                        type: "Button",
                        props: {
                            var: "btn_share",
                            stateNum: 1,
                            skin: "ui/btn_sinvite.png"
                        },
                        compId: 20
                    }, {
                        type: "Button",
                        props: {
                            x: 428,
                            var: "btn_rank",
                            stateNum: 1,
                            skin: "ui/btn_ranking.png"
                        },
                        compId: 21
                    }, {
                        type: "Button",
                        props: {
                            x: 215,
                            var: "btn_carport",
                            stateNum: 1,
                            skin: "ui/btn_shoping.png"
                        },
                        compId: 22
                    } ]
                }, {
                    type: "Button",
                    props: {
                        x: 0,
                        var: "btn_cnxh",
                        stateNum: 1,
                        skin: "ui/cnxh_blue.png",
                        bottom: 364
                    },
                    compId: 25
                } ],
                loadList: [ "ui/btn_start.png", "ui/color_05.png", "ui/color_02.png", "ui/icon_car.png", "ui/icon_gold.png", "ui/btn_shock_.png", "ui/btn_voice.png", "ui/btn_sinvite.png", "ui/btn_ranking.png", "ui/btn_shoping.png", "ui/cnxh_blue.png" ],
                loadList3D: []
            }, t.HomeUI = o, i("ui.View.HomeUI", o);
            class r extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(r.uiView);
                }
            }
            r.uiView = {
                "type": "View",
                "props": {
                    "width": 720,
                    "height": 1280
                },
                "compId": 2,
                "child": [
                    {
                        "type": "Image",
                        "props": {
                            "top": 0,
                            "skin": "ui/color_01.png",
                            "sizeGrid": "2,2,2,2",
                            "right": 0,
                            "left": 0,
                            "bottom": 0
                        },
                        "compId": 4
                    },
                    {
                        "type": "Image",
                        "props": {
                            "skin": "ui/loading_logo.png",
                            "centerY": -238,
                            "centerX": 0
                        },
                        "compId": 6
                    },
                    {
                        "type": "Box",
                        "props": {
                            "x": 282.5,
                            "centerY": 23
                        },
                        "compId": 10,
                        "child": [
                            {
                                "type": "Text",
                                "props": {
                                    "y": -1,
                                    "x": 31,
                                    "var": "pgs_v",
                                    "text": "100%",
                                    "strokeColor": "#281d00",
                                    "stroke": 2,
                                    "runtime": "laya.display.Text",
                                    "fontSize": 36,
                                    "color": "#ffffff",
                                    "bold": true
                                },
                                "compId": 9
                            },
                            {
                                "type": "ProgressBar",
                                "props": {
                                    "y": 43,
                                    "x": -0.5,
                                    "var": "pgs",
                                    "value": 0.4,
                                    "skin": "ui/progress_loading.png",
                                    "sizeGrid": "0,0,0,0,1"
                                },
                                "compId": 8
                            }
                        ]
                    }
                ],
                "loadList": [
                    "ui/color_01.png",
                    "ui/loading_logo.png",
                    "ui/progress_loading.png",
                    "ui/color_05.png",
                    "ui/color_03.png",
                    "ui/btn_sure.png"
                ],
                "loadList3D": []
            }, t.LoadingUI = r, i("ui.View.LoadingUI", r);
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
                    height: 1280
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        top: -2,
                        skin: "ui/toast.png",
                        sizeGrid: "2,2,2,2",
                        right: -2,
                        left: -2,
                        bottom: -2,
                        alpha: .7
                    },
                    compId: 3
                }, {
                    type: "WXOpenDataViewer",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        var: "op",
                        iconSign: "wx",
                        height: 1280,
                        runtime: "laya.ui.WXOpenDataViewer"
                    },
                    compId: 5
                }, {
                    type: "Button",
                    props: {
                        y: 90,
                        x: 26,
                        var: "btn_back",
                        stateNum: 1,
                        skin: "ui/btn_arrow.png"
                    },
                    compId: 4
                } ],
                loadList: [ "ui/toast.png", "ui/btn_arrow.png" ],
                loadList3D: []
            }, t.RankUI = h, i("ui.View.RankUI", h);
            class _ extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(_.uiView);
                }
            }
            _.uiView = {
                "type": "View",
                "props": {
                    "width": 720,
                    "height": 1280
                },
                "compId": 2,
                "child": [
                    {
                        "type": "Image",
                        "props": {
                            "top": -2,
                            "skin": "ui/color_05.png",
                            "sizeGrid": "6,6,6,6",
                            "right": -2,
                            "left": -2,
                            "bottom": -2,
                            "alpha": 0.5
                        },
                        "compId": 5
                    },
                    {
                        "type": "Box",
                        "props": {
                            "y": 100,
                            "x": 170
                        },
                        "compId": 11,
                        "child": [
                            {
                                "type": "Text",
                                "props": {
                                    "width": 380,
                                    "var": "ov_num",
                                    "text": "Overtake 100",
                                    "strokeColor": "#ffbb0d",
                                    "stroke": 2,
                                    "runtime": "laya.display.Text",
                                    "height": 60,
                                    "fontSize": 60,
                                    "color": "#ffe000",
                                    "align": "center"
                                },
                                "compId": 6
                            },
                            {
                                "type": "Text",
                                "props": {
                                    "y": 96.5,
                                    "x": -20,
                                    "width": 238,
                                    "var": "get_coin",
                                    "text": "888",
                                    "runtime": "laya.display.Text",
                                    "height": 60,
                                    "fontSize": 60,
                                    "color": "#ffffff",
                                    "align": "right"
                                },
                                "compId": 8
                            },
                            {
                                "type": "Image",
                                "props": {
                                    "y": 79,
                                    "x": 240,
                                    "skin": "ui/icon_gold.png"
                                },
                                "compId": 7
                            }
                        ]
                    },
                    {
                        "type": "Box",
                        "props": {
                            "y": 947,
                            "x": 190,
                            "var": "btns",
                            "bottom": 150
                        },
                        "compId": 9,
                        "child": [
                            {
                                "type": "Button",
                                "props": {
                                    "var": "btn_relife",
                                    "stateNum": 1,
                                    "skin": "ui/btn_vido again.png"
                                },
                                "compId": 3
                            },
                            {
                                "type": "Button",
                                "props": {
                                    "y": 155,
                                    "x": 86.5,
                                    "width": 140,
                                    "var": "btn_skip",
                                    "stateNum": 1,
                                    "labelSize": 32,
                                    "labelColors": "#ffffff",
                                    "labelAlign": "center",
                                    "label": "SKIP",
                                    "height": 41
                                },
                                "compId": 4
                            }
                        ]
                    },
                    {
                        "type": "List",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "width": 652,
                            "var": "list",
                            "spaceY": 10,
                            "spaceX": 12,
                            "height": 500,
                            "centerY": -43,
                            "centerX": 0
                        },
                        "compId": 25,
                        "child": [
                            {
                                "type": "Box",
                                "props": {
                                    "y": 8,
                                    "x": 0,
                                    "width": 320,
                                    "renderType": "render",
                                    "name": "render",
                                    "height": 240
                                },
                                "compId": 26,
                                "child": [
                                    {
                                        "type": "Image",
                                        "props": {
                                            "width": 200,
                                            "top": 0,
                                            "skin": "",
                                            "sizeGrid": "10,10,10,10",
                                            "right": 0,
                                            "name": "thumb",
                                            "left": 0,
                                            "height": 260,
                                            "bottom": 0
                                        },
                                        "compId": 27
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "loadList": [
                    "ui/color_05.png",
                    "ui/icon_gold.png",
                    "ui/color_09.png",
                    "ui/color_10.png",
                    "ui/color_01.png",
                    "ui/btn_vido again.png"
                ],
                "loadList3D": []
            }, t.RelifeUI = _, i("ui.View.RelifeUI", _);
            class l extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(l.uiView);
                }
            }
            l.uiView = {
                "type": "View",
                "props": {
                    "width": 720,
                    "height": 1280
                },
                "compId": 2,
                "child": [
                    {
                        "type": "Image",
                        "props": {
                            "top": -2,
                            "skin": "ui/color_05.png",
                            "sizeGrid": "6,6,6,6",
                            "right": -2,
                            "left": -2,
                            "bottom": -2,
                            "alpha": 0.5
                        },
                        "compId": 10
                    },
                    {
                        "type": "Box",
                        "props": {
                            "x": 164.5,
                            "top": 100
                        },
                        "compId": 12,
                        "child": [
                            {
                                "type": "Text",
                                "props": {
                                    "y": 0,
                                    "x": 64,
                                    "text": "Finish!",
                                    "runtime": "laya.display.Text",
                                    "fontSize": 76,
                                    "color": "#ffd600",
                                    "bold": true,
                                    "align": "center"
                                },
                                "compId": 11
                            },
                            {
                                "type": "Text",
                                "props": {
                                    "y": 86,
                                    "x": -2,
                                    "width": 380,
                                    "var": "ov_num",
                                    "text": "Overtake 100",
                                    "strokeColor": "#ffbb0d",
                                    "stroke": 2,
                                    "runtime": "laya.display.Text",
                                    "height": 60,
                                    "fontSize": 60,
                                    "color": "#ffe000",
                                    "align": "center"
                                },
                                "compId": 13
                            },
                            {
                                "type": "Image",
                                "props": {
                                    "y": 157,
                                    "x": 206,
                                    "width": 60,
                                    "skin": "ui/icon_gold.png",
                                    "height": 67
                                },
                                "compId": 15,
                                "child": [
                                    {
                                        "type": "Text",
                                        "props": {
                                            "y": 4,
                                            "x": -247,
                                            "width": 238,
                                            "var": "get_coin",
                                            "text": "888",
                                            "runtime": "laya.display.Text",
                                            "height": 60,
                                            "fontSize": 60,
                                            "color": "#ffffff",
                                            "align": "right"
                                        },
                                        "compId": 14
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "List",
                        "props": {
                            "width": 652,
                            "var": "list",
                            "spaceY": 10,
                            "spaceX": 12,
                            "height": 500,
                            "centerY": -43,
                            "centerX": 0
                        },
                        "compId": 17,
                        "child": [
                            {
                                "type": "Box",
                                "props": {
                                    "y": 8,
                                    "x": 0,
                                    "width": 320,
                                    "renderType": "render",
                                    "name": "render",
                                    "height": 240
                                },
                                "compId": 23,
                                "child": [
                                    {
                                        "type": "Image",
                                        "props": {
                                            "width": 200,
                                            "top": 0,
                                            "skin": "",
                                            "sizeGrid": "10,10,10,10",
                                            "right": 0,
                                            "name": "thumb",
                                            "left": 0,
                                            "height": 260,
                                            "bottom": 0
                                        },
                                        "compId": 24
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Box",
                        "props": {
                            "x": 24,
                            "var": "btns",
                            "bottom": 120
                        },
                        "compId": 7,
                        "child": [
                            {
                                "type": "Button",
                                "props": {
                                    "y": 163,
                                    "x": 233,
                                    "var": "btn_home",
                                    "stateNum": 1,
                                    "skin": "ui/btn_home0.png"
                                },
                                "compId": 4
                            },
                            {
                                "type": "Button",
                                "props": {
                                    "y": 163,
                                    "x": 0,
                                    "var": "btn_rank",
                                    "stateNum": 1,
                                    "skin": "ui/btn_ranking1.png"
                                },
                                "compId": 5
                            },
                            {
                                "type": "Button",
                                "props": {
                                    "y": 163,
                                    "x": 468,
                                    "var": "btn_share",
                                    "stateNum": 1,
                                    "skin": "ui/btn_share.png"
                                },
                                "compId": 6
                            },
                            {
                                "type": "Button",
                                "props": {
                                    "y": 0,
                                    "x": 179,
                                    "var": "btn_video",
                                    "stateNum": 1,
                                    "skin": "ui/btn_vido5x.png"
                                },
                                "compId": 3
                            }
                        ]
                    }
                ],
                "loadList": [
                    "ui/color_05.png",
                    "ui/icon_gold.png",
                    "ui/color_09.png",
                    "ui/color_10.png",
                    "ui/color_01.png",
                    "ui/btn_home0.png",
                    "ui/btn_ranking1.png",
                    "ui/btn_share.png",
                    "ui/btn_vido5x.png"
                ],
                "loadList3D": []
            }, t.SettleUI = l, i("ui.View.SettleUI", l);
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
                    height: 1280
                },
                compId: 2,
                child: [ {
                    type: "Image",
                    props: {
                        width: 303,
                        var: "tbg",
                        skin: "ui/toast.png",
                        sizeGrid: "4,4,4,4",
                        height: 69,
                        centerY: 100,
                        centerX: 0
                    },
                    compId: 3,
                    child: [ {
                        type: "Text",
                        props: {
                            y: 18,
                            x: 23,
                            var: "info",
                            text: "Message Info中文",
                            fontSize: 32,
                            color: "#e2e2e2",
                            runtime: "laya.display.Text"
                        },
                        compId: 4
                    } ]
                } ],
                loadList: [ "ui/toast.png" ],
                loadList3D: []
            }, t.ToastUI = d, i("ui.View.ToastUI", d);
        }(t.View || (t.View = {}));
    }(e || (e = {}));
    class s extends e.View.ToastUI {
        constructor() {
            super(...arguments), this.xpadding = 100;
        }
        onOpened(t) {
            this.info.text = t.msg, this.tbg.width = this.info.textWidth + this.xpadding, this.info.x = .5 * this.xpadding, 
            this.timer.once(t.t, this, this.close);
        }
    }
    class n {
        static open(t, e = !0, i) {
            let s = t.name;
            for (let t = 0; t < n.list.length; t++) {
                if (n.list[t].name == s) return;
            }
            if (this.initLayer(), e) {
                for (;n.list.length > 0; ) {
                    let t = n.list.shift();
                    t && t.close();
                }
            }
            let a = new t();
            a.name = s,
            a.size(Laya.stage.width, Laya.stage.height), 
            a.autoDestroyAtClosed = !0, 
            n.uiLayer.addChild(a), 
            n.list.push(a), 
            a.onOpened(i);
        }
        static close(t) {
            for (let e = 0; e < n.list.length; e++) if (t.name == n.list[e].name) {
                n.list.splice(e, 1)[0].close();
                break;
            }
        }
        static showToast(t, e = 2e3) {
            let i = new s();
            i.size(Laya.stage.width, Laya.stage.height), i.autoDestroyAtClosed = !0, this.initLayer(), 
            n.toastLayer.zOrder = 1, n.toastLayer.addChild(i), i.onOpened({
                msg: t,
                t: e
            });
        }
        static initLayer() {
            n.uiLayer || (n.uiLayer = new Laya.Sprite(), n.uiLayer.size(Laya.stage.width, Laya.stage.height), 
            Laya.stage.addChild(n.uiLayer)), n.toastLayer || (n.toastLayer = new Laya.Sprite(), 
            n.toastLayer.size(Laya.stage.width, Laya.stage.height), Laya.stage.addChild(n.toastLayer));
        }
    }
    n.list = [];
    class a extends Laya.EventDispatcher {
        static get ins() {
            return this.eventDispatcher || (this.eventDispatcher = new Laya.EventDispatcher()), 
            this.eventDispatcher;
        }
    }
    a.GAME_START = "GAME_START", a.GAME_OVER = "GAME_OVER", a.GAME_RELIFE = "GAME_RELIFE", 
    a.GAME_RESERT = "GAME_RESERT", a.PLALYER_SPEED_CHANGE = "PLALYER_SPEED_CHANGE", 
    a.OPEN_CARPORT = "OPEN_CARPORT", a.CLOSE_CARPORT = "CLOSE_CARPORT", a.CARPORT_USE_CAR = "CARPORT_SHOW_CAR", 
    a.GET_GOLD = "GET_GOLD", a.MODEL_GET_COIN = "MODEL_GET_COIN", a.MODEL_OV_CAR = "MODEL_OV_CAR", 
    a.MODEL_USER_DATA_CHANGE = "MODEL_USER_DATA_CHANGE";
    class o {
        constructor() {
            this.gameState = 0, 
            this._life_num = 1, 
            this.play_times = 0, 
            this._get_coin = 0, 
            this._ov_num = 0, 
            this.isCalled = !1, 
            this._user_data = {
                user_id: "",
                coin: 0,
                best: 0,
                equ_car: "car_0",
                has_cars: [ "car_0" ]
            }, 
            this.loadData(),
            this._carport = [ {
                car_name: "car_0",
                car_price: 0
            },{
                car_name: "car_1",
                car_price: 380
            },{
                car_name: "car_2",
                car_price: 460
            },{
                car_name: "car_3",
                car_price: 660
            },{
                car_name: "car_4",
                car_price: 680
            },{
                car_name: "car_5",
                car_price: 1500
            },{
                car_name: "car_6",
                car_price: 1800
            },{
                car_name: "car_7",
                car_price: 3000
            },{
                car_name: "car_8",
                car_price: 780
            },{
                car_name: "car_9",
                car_price: 2600
            },{
                car_name: "car_10",
                car_price: 3800
            },{
                car_name: "car_11",
                car_price: 900
            } ];
        }
        get life_num() {
            return this._life_num;
        }
        set life_num(t) {
            this._life_num = t;
        }
        get get_coin() {
            return this._get_coin;
        }
        set get_coin(t) {
            this._get_coin = t, a.ins.event(a.MODEL_GET_COIN);
        }
        get ov_num() {
            return this._ov_num;
        }
        set ov_num(t) {
            this._ov_num = t, a.ins.event(a.MODEL_OV_CAR);
        }
        reset() {
            this.gameState = 0, 
            this._life_num = 1, 
            this._get_coin = 0, 
            this._ov_num = 0;
        }
        get isNewUser() {
            if (!this.isCalled) {
                this.isCalled = !0;
                let t = "isnewuser";
                return !Laya.LocalStorage.getItem(t) && (Laya.LocalStorage.setItem(t, "false"), 
                !0);
            }
            return !0;
        }

        saveData(){
            Laya.LocalStorage.setJSON("user", this.user_data);
        }

        loadData(){
            if(Laya.LocalStorage.getJSON("user")!=null)
                this.user_data = Laya.LocalStorage.getJSON("user");
        }

        static get ins() {
            return null == this._ins && (this._ins = new o()), this._ins;
        }
        get user_data() {
            return this._user_data;
        }
        set user_data(t) {
            this._user_data = t, 
            a.ins.event(a.MODEL_USER_DATA_CHANGE);
            this.saveData();
        }
        get carport() {
            return this._carport;
        }
        set carport(t) {
            this._carport = t;
        }
        get game_config() {
            return this._game_config;
        }
        set game_config(t) {
            this._game_config = t;
        }
        get v_config() {
            return this._v_config;
        }
        set v_config(t) {
            this._v_config = t;
        }
    }
    o.road_center = 1.24, 
    o.car_speed = 10, 
    o.car_ov_speed = 20, 
    o.car_wudi_speed = 30, 
    o.car_ov_acc = 5, 
    o.car_ov_dec = 5, 
    o.car_wudi_acc = 10, 
    o.car_wudi_dec = 10, 
    o.fov_normal = 55, 
    o.fov_ov = 60, 
    o.fov_wudi = 70, 
    o.fov_cs_normal = 1, 
    o.fov_cs_ov = 1.4, 
    o.fov_cs_wudi = 2, 
    o.camera_target_dis = 1, 
    o.camera_target_ov_dis = 4.8, 
    o.wudi_time = 5, 
    o.road_range = new Laya.Vector2(10, 200), 
    o.car_range = new Laya.Vector2(0, 100), 
    o.gravity = new Laya.Vector3(0, -9.8, 0), 
    o.zeroGravity = new Laya.Vector3(0, 0, 0), 
    o.carportIsOpen = !1;

    class r extends e.View.ToastUI {
        constructor() {
            super(...arguments), this.xpadding = 100;
        }
        onOpened(t) {
            this.info.text = t.msg, this.tbg.width = this.info.textWidth + this.xpadding, this.info.x = .5 * this.xpadding, 
            this.timer.once(t.t, this, this.close);
        }
    }
    class h {
        static open(t, e = !0, i) {
            let s = t.name;
            for (let t = 0; t < h.list.length; t++) if (h.list[t].name == s) return;
            if (this.initLayer(), e) for (;h.list.length > 0; ) {
                let t = h.list.shift();
                t && t.close();
            }
            let n = new t();
            n.name = s, n.size(Laya.stage.width, Laya.stage.height), n.autoDestroyAtClosed = !0, 
            h.uiLayer.addChild(n), h.list.push(n), n.onOpened(i);
        }
        static close(t) {
            for (let e = 0; e < h.list.length; e++) if (t.name == h.list[e].name) {
                h.list.splice(e, 1)[0].close();
                break;
            }
        }
        static showToast(t, e = 2e3) {
            let i = new r();
            i.size(Laya.stage.width, Laya.stage.height), i.autoDestroyAtClosed = !0, this.initLayer(), 
            h.toastLayer.zOrder = 1, h.toastLayer.addChild(i), i.onOpened({
                msg: t,
                t: e
            });
        }
        static initLayer() {
            h.uiLayer || (h.uiLayer = new Laya.Sprite(), h.uiLayer.size(Laya.stage.width, Laya.stage.height), 
            Laya.stage.addChild(h.uiLayer)), h.toastLayer || (h.toastLayer = new Laya.Sprite(), 
            h.toastLayer.size(Laya.stage.width, Laya.stage.height), Laya.stage.addChild(h.toastLayer));
        }
    }
    h.list = [];
    class _ {
        constructor() {
            if (this.adId = {
                bid: "adunit-d35eaf5f4aaacd27",
                vid: "adunit-42b95f2eafb1cbe5",
                iid: "adunit-d0194c51a6449046",
                gid: "adunit-524ad0001cf165a0"
            }, this.bannerCount = 10, this.banner = [], this.bannerIsShow = !1, this._vad_load_done = !1, 
            this.interstitialAd = null, this.insertAdOk = !1, this.wx = Laya.Browser.window.wx, 
            this.timer = new Laya.Timer(), this.wx) {
                let t = this.wx.getSystemInfoSync();
                this.screenWidth = t.screenWidth, this.screenHeight = t.screenHeight;
            }
        }
        static get ins() {
            return this._ins || (this._ins = new _()), this._ins;
        }
        init() {
            Laya.Browser.onMiniGame && (this.loadBannerAD(), this.loadVideoAD());
        }
        loadBannerAD() {
            if (!this.wx) return;
            console.log("loadBannerAD,", this.screenWidth, l.ins.wudian);
            let t = this.adId.bid, e = this.wx.createBannerAd({
                adUnitId: t,
                style: {
                    left: 0,
                    top: 0,
                    width: this.screenWidth * (l.ins.wudian ? 1 : .6)
                }
            });
            e.onError(t => {
                console.log("bannerAd 拉取失败", t);
            }), e.onLoad(() => {
                console.log("AD:", e), e.style.top = this.screenHeight - e.style.realHeight + .01, 
                e.style.left = .5 * (this.screenWidth - e.style.realWidth) + .01, this.banner.push(e);
            });
        }
        showBanner(t = null) {
            return this.bannerIsShow = !0, this.hideBanner(), this.timer.clear(this, this.wudian_show_banner), 
            l.ins.wudian && t ? (t.y = Laya.stage.height - t.height - 70, this.timer.once(l.ins.wudian_time, this, this.wudian_show_banner, [ t ])) : t ? (t.visible = !1, 
            Laya.timer.frameOnce(1, this, () => {
                t.visible = !0, this.wudian_show_banner(t);
            })) : this._showBanner(), this.banner.length > 0;
        }
        wudian_show_banner(t) {
            if (t) {
                let e = this._showBanner();
                0 != e && (t.y = e - t.height - 10);
            }
        }
        hideBanner() {
            this.bannerIsShow = !1, this._hideBanner(), this.timer.clear(this, this.wudian_show_banner);
        }
        _showBanner() {
            return this.wx ? (this.curShowBanner && this.curShowBanner.hide(), this.banner.length < this.bannerCount && this.loadBannerAD(), 
            this.banner.length > 0 && (this.curShowBanner = this.banner[Math.round(Math.random() * (this.banner.length - 1))]), 
            this.curShowBanner ? (this.curShowBanner.show(), Laya.stage.height - Laya.stage.height * (this.curShowBanner.style.realHeight / this.screenHeight)) : 0) : Laya.stage.height - 180;
        }
        _hideBanner() {
            this.curShowBanner && this.curShowBanner.hide();
        }
        loadVideoAD() {
            if (!this.wx) return;
            let t = this.adId.vid;
            this.videoAd = this.wx.createRewardedVideoAd({
                adUnitId: t
            }), this.videoAd.onLoad(() => {
                this._vad_load_done = !0;
            }), this.videoAd.onError(t => {
                console.log("激励视屏拉去失败:", t), this._vad_load_done = !1, this.videoAd.load();
            }), this.videoAd.onClose(t => {
                t && t.isEnded || void 0 === t ? this.handle && this.handle.runWith(!0) : this.handle && this.handle.runWith(!1);
            });
        }
        get vadLoaded() {
            return !this.wx || (this._vad_load_done || this.videoAd && this.videoAd.load(), 
            this._vad_load_done);
        }
        showVideo(t) {
            this.wx ? (this.handle = t, this._vad_load_done ? (this.videoAd.show(), this._vad_load_done = !1) : this.videoAd.load()) : t && t.runWith(!0);
        }
        loadInsertAd() {
            if (!this.wx) return;
            let t = this.adId.iid;
            this.wx.createInterstitialAd && (this.interstitialAd = this.wx.createInterstitialAd({
                adUnitId: t
            }), this.interstitialAd.onLoad(() => {
                this.insertAdOk = !0;
            }), this.interstitialAd.onError(t => {
                this.insertAdOk = !1;
            }), this.interstitialAd.onClose(t => {
                console.log("插屏 广告关闭");
            }));
        }
        showInsert() {
            this.insertAdOk && (this.interstitialAd.show().catch(t => {
                console.error("显示插屏ad失败:", t);
            }), this.insertAdOk = !1);
        }
    }
    class l {
        constructor() {
            this.gameCfgVersion = "0.1", 
            this.api_local = "", 
            this.api_r = "", 
            this._zs_config_version = "4.27", 
            this.canOpenFullScreenJump = !1, 
            this.wudian = !1, 
            this.wudian_time = 600;
            let t = this.api_r;
            this.url_login = t + "login", 
            this.url_equ_car = t + "equ_car", 
            this.url_buy_car = t + "buy_car", 
            this.url_get_coin = t + "get_coin", 
            this.url_new_score = t + "new_score";
        }
        static get ins() {
            return this._ins || (this._ins = new l()), this._ins;
        }
        post(t, e, i) {
            this.token && ((e = e || {}).token = this.token);
            let s = new Laya.HttpRequest();
            s.http.timeout = 5e3, s.http.ontimeout = (t => {
                s.offAll(Laya.Event.COMPLETE), s.offAll(Laya.Event.ERROR);
                i && i({
                    code: -101,
                    msg: "访问服务器超时"
                });
            }), s.once(Laya.Event.ERROR, this, t => {
                console.error("http error:", t);
                i && i({
                    code: -100,
                    msg: "网络访问失败"
                });
            }), s.once(Laya.Event.COMPLETE, this, t => {
                console.log("http response:", t), i && i(t);
            }), s.send(t, JSON.stringify(e), "post", "json", [ "Content-Type", "application/json" ]);
        }
        login(t) {
            let e = e => {
                let i = {
                    code: e,
                    v: this.gameCfgVersion
                };
                this.post(this.url_login, i, e => {
                    0 == e.code ? (this.token = e.data.token, o.ins.user_data = e.data.user_data, o.ins.carport = e.data.carport, 
                    o.ins.game_config = e.data.game_config, o.ins.v_config = e.data.v_config, t && t.runWith(!0)) : t && t.runWith(!1);
                });
            };
            Laya.Browser.onWeiXin ? Laya.Browser.window.wx.login({
                success: i => {
                    i.code ? e(i.code) : (t && t.runWith(!1), console.log("wx login fail, no code:", i));
                },
                fail: e => {
                    console.log("wx login fail:", e), t && t.runWith(!1);
                }
            }) : e("000000");
        }
        equCar(t, e, i) {
            // let s = {
            //     car_id: t
            // };
            // this.post(this.url_equ_car, s, t => 
            // {
            //     0 == t.code ? (
            //         o.ins.user_data = t.data.user_data, 
            //         i && e && i.call(e, !0)
            //     ) : (
            //         h.showToast(t.msg), 
            //         i && e && i.call(e, !1)
            //     );
            // });
            o.ins.user_data.equ_car = t;
        }
        buyCar(t, e, i) {
            // let s = {
            //     car_id: t
            // };
            // this.post(this.url_buy_car, s, t => {
            //     0 == t.code ? (o.ins.user_data = t.data.user_data, i && e && i.call(e, !0)) : (h.showToast(t.msg), 
            //     i && e && i.call(e, !1));
            // });
            o.ins.user_data.has_cars.push(t);
        }
        get_coin(t, e, i) {
            let s = {
                coin_num: t
            };
            this.post(this.url_get_coin, s, t => {
                0 == t.code ? (o.ins.user_data = t.data.user_data, i && e && i.call(e, !0)) : (h.showToast(t.msg), 
                i && e && i.call(e, !1));
            });
        }
        new_score(t, e, i) {
            let s = {
                ov_num: t
            };
            this.post(this.url_new_score, s, t => {
                0 == t.code ? (o.ins.user_data = t.data.user_data, i && e && i.call(e, !0)) : (h.showToast(t.msg), 
                i && e && i.call(e, !1));
            });
        }
        request_zs_config() {
            // let t = "" + l.appid, 
            // e = new Laya.HttpRequest();
            // e.once(Laya.Event.COMPLETE, this, t => {
            //     console.log("request_zs_config:", t), 
            //     t && 200 == t.code && t.data && 
            //     (
            //         this.wudian_time = t.data.zs_banner_banner_time || 600, 
            //         t.data.zs_version == this._zs_config_version 
            //         ? (
            //             this.wudian = !1, 
            //             this.canOpenFullScreenJump = !1
            //         ) : (
            //             this.wudian = 1 == t.data.zs_switch && 1 == t.data.zs_banner_city, 
            //             this.canOpenFullScreenJump = 1 == t.data.zs_full_screen_jump
            //         )
            //     ), 
            //     _.ins.init();
            // }), 
            // e.send(t, null, "get", "json");
        }
    }
    l.appid = "wx1622359d440d9f73", 
    l.cdn_url = "";
    class d {
        static getItemByid(t, e) {
            for (let i = 0; i < t.length; i++) if (e == t[i].id) return t[i];
            console.log("错误： 无法根据id从该数据获取元素");
        }
        static getIdxByid(t, e) {
            for (let i = 0; i < t.length; i++) if (t[i].id == e) return i;
            console.log("错误： 获取idx失败， 数据未包含id对应的数据, id：" + e);
        }
        static get onwx() {
            return Laya.Browser.onMiniGame;
        }
        static wan_10(t) {
            return Math.abs(t) >= 1e5 ? t / 1e4 + "万" : t.toString();
        }
        static wan_1(t) {
            return Math.abs(t) >= 1e4 ? t / 1e4 + "万" : t.toString();
        }
        static splitStr(t, e = 8, i = "...") {
            let s = 0, n = "";
            for (let a = 0; a < t.length; a++) if (t.charCodeAt(a) > 127 || 94 == t.charCodeAt(a) ? s += 2 : s += 1, 
            s <= e && (n += t[a]), s > e) {
                n += i;
                break;
            }
            return n;
        }
        static randomInt(t, e) {
            return Math.round(Laya.MathUtil.lerp(t, e, Math.random()));
        }
        static random(t, e) {
            return Laya.MathUtil.lerp(t, e, Math.random());
        }
    }
    d.pointerOnUI = !1;
    class c {
        constructor() {
            if (this._key = "overtaking", this.wx = Laya.Browser.window.wx, this.wx) {
                let t = this;
                this.wx.getSystemInfo({
                    success: e => {
                        console.log("getSystemInfo:", e), t.systemInfo = e;
                    }
                });
            }
        }
        static get ins() {
            return this._ins || (this._ins = new c()), this._ins;
        }
        init() {
            this.wx && (this.wx.showShareMenu({}), this.wx.onShareAppMessage(this.shareInfo), 
            this.wx.setKeepScreenOn({
                keepScreenOn: !0
            }), this.wx.onShow(t => {
                Laya.stage.event(c.WX_ON_SHOW), this.wx.setKeepScreenOn({
                    keepScreenOn: !0
                });
            }), this.wx.onHide(() => {
                Laya.stage.event(c.WX_ON_HIDE);
            }));
        }
        get menuInfo() {
            return null == this._menuInfo && (this.wx ? (this._menuInfo = this.wx.getMenuButtonBoundingClientRect(), 
            console.log("getMenuButtonBoundingClientRect:", this._menuInfo), this._menuInfo.left = this._menuInfo.left * Laya.stage.width / this.systemInfo.screenWidth, 
            this._menuInfo.top = this._menuInfo.top * Laya.stage.height / this.systemInfo.screenHeight) : this._menuInfo = {
                top: 20,
                left: 500
            }), this._menuInfo;
        }
        shareInfo() {
            let t = o.ins.game_config.share_info, e = t[d.randomInt(0, t.length - 1)];
            return {
                title: e.title,
                imageUrl: l.cdn_url + "res/share/" + e.img
            };
        }
        share() {
            this.wx && this.wx.shareAppMessage(this.shareInfo());
        }
        op_set_openid(t) {
            if (this.wx) {
                this.wx.getOpenDataContext().postMessage({
                    cmd: "openid",
                    openid: t
                });
            }
        }
        op_show_rank() {
            if (this.wx) {
                this.wx.getOpenDataContext().postMessage({
                    cmd: "show_rank"
                });
            }
        }
        op_hide_rank() {
            if (this.wx) {
                this.wx.getOpenDataContext().postMessage({
                    cmd: "hide_rank"
                });
            }
        }
        op_surpass(t) {
            if (this.wx) {
                this.wx.getOpenDataContext().postMessage({
                    cmd: "surpass",
                    score: t
                });
            }
        }
        op_will_surpass(t) {
            if (this.wx) {
                this.wx.getOpenDataContext().postMessage({
                    cmd: "will_surpass",
                    score: t
                });
            }
        }
        op_hide_will_surpass() {
            if (this.wx) {
                this.wx.getOpenDataContext().postMessage({
                    cmd: "hide_will_surpass"
                });
            }
        }
        op_game_start() {
            if (this.wx) {
                this.wx.getOpenDataContext().postMessage({
                    cmd: "game_start"
                });
            }
        }
        setUserCloudStorage(t) {
            if (this.wx) {
                var e = [], i = {
                    wxgame: {}
                };
                i.wxgame.score = t, i.wxgame.update_time = Laya.Browser.now(), e.push({
                    key: this._key,
                    value: JSON.stringify(i)
                }), wx.setUserCloudStorage({
                    KVDataList: e,
                    success: t => {
                        console.log("setUserCloudStorage success:" + JSON.stringify(t));
                    },
                    fail: t => {
                        console.log("setUserCloudStorage fail:" + JSON.stringify(t));
                    }
                });
            }
        }
    }
    c.WX_ON_SHOW = "WX_ON_SHOW", c.WX_ON_HIDE = "WX_ON_HIDE";
    class p extends e.View.RankUI {
        onOpened() {
            this.btn_back.on(Laya.Event.CLICK, this, this.btnBackHandle), this.callLater(() => {
                this.op.x = this.op.y = 0, this.op.height = Laya.stage.height, c.ins.op_show_rank();
            }), _.ins.showBanner();
        }
        btnBackHandle() {
            n.close(this);
        }
        onClosed() {
            c.ins.op_hide_rank(), this.btn_back.off(Laya.Event.CLICK, this, this.btnBackHandle), 
            _.ins.hideBanner();
        }
    }
    class u extends e.View.CnxhUI {
        onOpened(t) {
            this.next = t, u.isOpen = !0, m.setupList(this.list, this.timer, 3, "v", 6e3, 300), 
            this.back.on(Laya.Event.CLICK, this, this.backHandle);
            let e = 0, i = 0;
            this.list.on(Laya.Event.MOUSE_DOWN, this, () => {
                e = Laya.stage.mouseX, i = Laya.stage.mouseY;
            }), this.list.on(Laya.Event.MOUSE_UP, this, () => {
                (Math.abs(Laya.stage.mouseX - e) > 10 || Math.abs(Laya.stage.mouseY - i) > 10) && m.navigateToOther(m.ad_data_home[d.randomInt(0, m.ad_data_home.length - 1)]);
            }), _.ins.showBanner(this.back);
        }
        backHandle() {
            n.close(this);
        }
        onClosed() {
            this.list.offAll(Laya.Event.MOUSE_DOWN), this.list.offAll(Laya.Event.MOUSE_UP), 
            this.back.off(Laya.Event.CLICK, this, this.backHandle), _.ins.hideBanner(), u.isOpen = !1, 
            this.next && this.next.run();
        }
    }
    u.ON_CNXH_CLOSED = "ON_CNXH_CLOSED", u.isOpen = !1;
    class f {
        constructor() {
            this.hexcase = 0, this.b64pad = "";
        }
        static get Instance() {
            return null == this._instance && (this._instance = new f()), this._instance;
        }
        hex_md5(t) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)));
        }
        b64_md5(t) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)));
        }
        any_md5(t, e) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e);
        }
        hex_hmac_md5(t, e) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
        }
        b64_hmac_md5(t, e) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
        }
        any_hmac_md5(t, e, i) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), i);
        }
        rstr_md5(t) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length));
        }
        rstr_hmac_md5(t, e) {
            var i = this.rstr2binl(t);
            i.length > 16 && (i = this.binl_md5(i, 8 * t.length));
            for (var s = Array(16), n = Array(16), a = 0; a < 16; a++) s[a] = 909522486 ^ i[a], 
            n[a] = 1549556828 ^ i[a];
            var o = this.binl_md5(s.concat(this.rstr2binl(e)), 512 + 8 * e.length);
            return this.binl2rstr(this.binl_md5(n.concat(o), 640));
        }
        rstr2hex(t) {
            try {
                this.hexcase;
            } catch (t) {
                this.hexcase = 0;
            }
            for (var e, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", n = 0; n < t.length; n++) e = t.charCodeAt(n), 
            s += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
            return s;
        }
        rstr2b64(t) {
            try {
                this.b64pad;
            } catch (t) {
                this.b64pad = "";
            }
            for (var e = "", i = t.length, s = 0; s < i; s += 3) for (var n = t.charCodeAt(s) << 16 | (s + 1 < i ? t.charCodeAt(s + 1) << 8 : 0) | (s + 2 < i ? t.charCodeAt(s + 2) : 0), a = 0; a < 4; a++) 8 * s + 6 * a > 8 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - a) & 63);
            return e;
        }
        rstr2any(t, e) {
            var i, s, n, a, o, r = e.length, h = Array(Math.ceil(t.length / 2));
            for (i = 0; i < h.length; i++) h[i] = t.charCodeAt(2 * i) << 8 | t.charCodeAt(2 * i + 1);
            var _ = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))), l = Array(_);
            for (s = 0; s < _; s++) {
                for (o = Array(), a = 0, i = 0; i < h.length; i++) a = (a << 16) + h[i], a -= (n = Math.floor(a / r)) * r, 
                (o.length > 0 || n > 0) && (o[o.length] = n);
                l[s] = a, h = o;
            }
            var d = "";
            for (i = l.length - 1; i >= 0; i--) d += e.charAt(l[i]);
            return d;
        }
        str2rstr_utf8(t) {
            for (var e, i, s = "", n = -1; ++n < t.length; ) e = t.charCodeAt(n), i = n + 1 < t.length ? t.charCodeAt(n + 1) : 0, 
            55296 <= e && e <= 56319 && 56320 <= i && i <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & i), 
            n++), e <= 127 ? s += String.fromCharCode(e) : e <= 2047 ? s += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? s += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (s += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
            return s;
        }
        str2rstr_utf16le(t) {
            for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(255 & t.charCodeAt(i), t.charCodeAt(i) >>> 8 & 255);
            return e;
        }
        str2rstr_utf16be(t) {
            for (var e = "", i = 0; i < t.length; i++) e += String.fromCharCode(t.charCodeAt(i) >>> 8 & 255, 255 & t.charCodeAt(i));
            return e;
        }
        rstr2binl(t) {
            for (var e = Array(t.length >> 2), i = 0; i < e.length; i++) e[i] = 0;
            for (i = 0; i < 8 * t.length; i += 8) e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
            return e;
        }
        binl2rstr(t) {
            for (var e = "", i = 0; i < 32 * t.length; i += 8) e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
            return e;
        }
        binl_md5(t, e) {
            t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var i = 1732584193, s = -271733879, n = -1732584194, a = 271733878, o = 0; o < t.length; o += 16) {
                var r = i, h = s, _ = n, l = a;
                i = this.md5_ff(i, s, n, a, t[o + 0], 7, -680876936), a = this.md5_ff(a, i, s, n, t[o + 1], 12, -389564586), 
                n = this.md5_ff(n, a, i, s, t[o + 2], 17, 606105819), s = this.md5_ff(s, n, a, i, t[o + 3], 22, -1044525330), 
                i = this.md5_ff(i, s, n, a, t[o + 4], 7, -176418897), a = this.md5_ff(a, i, s, n, t[o + 5], 12, 1200080426), 
                n = this.md5_ff(n, a, i, s, t[o + 6], 17, -1473231341), s = this.md5_ff(s, n, a, i, t[o + 7], 22, -45705983), 
                i = this.md5_ff(i, s, n, a, t[o + 8], 7, 1770035416), a = this.md5_ff(a, i, s, n, t[o + 9], 12, -1958414417), 
                n = this.md5_ff(n, a, i, s, t[o + 10], 17, -42063), s = this.md5_ff(s, n, a, i, t[o + 11], 22, -1990404162), 
                i = this.md5_ff(i, s, n, a, t[o + 12], 7, 1804603682), a = this.md5_ff(a, i, s, n, t[o + 13], 12, -40341101), 
                n = this.md5_ff(n, a, i, s, t[o + 14], 17, -1502002290), s = this.md5_ff(s, n, a, i, t[o + 15], 22, 1236535329), 
                i = this.md5_gg(i, s, n, a, t[o + 1], 5, -165796510), a = this.md5_gg(a, i, s, n, t[o + 6], 9, -1069501632), 
                n = this.md5_gg(n, a, i, s, t[o + 11], 14, 643717713), s = this.md5_gg(s, n, a, i, t[o + 0], 20, -373897302), 
                i = this.md5_gg(i, s, n, a, t[o + 5], 5, -701558691), a = this.md5_gg(a, i, s, n, t[o + 10], 9, 38016083), 
                n = this.md5_gg(n, a, i, s, t[o + 15], 14, -660478335), s = this.md5_gg(s, n, a, i, t[o + 4], 20, -405537848), 
                i = this.md5_gg(i, s, n, a, t[o + 9], 5, 568446438), a = this.md5_gg(a, i, s, n, t[o + 14], 9, -1019803690), 
                n = this.md5_gg(n, a, i, s, t[o + 3], 14, -187363961), s = this.md5_gg(s, n, a, i, t[o + 8], 20, 1163531501), 
                i = this.md5_gg(i, s, n, a, t[o + 13], 5, -1444681467), a = this.md5_gg(a, i, s, n, t[o + 2], 9, -51403784), 
                n = this.md5_gg(n, a, i, s, t[o + 7], 14, 1735328473), s = this.md5_gg(s, n, a, i, t[o + 12], 20, -1926607734), 
                i = this.md5_hh(i, s, n, a, t[o + 5], 4, -378558), a = this.md5_hh(a, i, s, n, t[o + 8], 11, -2022574463), 
                n = this.md5_hh(n, a, i, s, t[o + 11], 16, 1839030562), s = this.md5_hh(s, n, a, i, t[o + 14], 23, -35309556), 
                i = this.md5_hh(i, s, n, a, t[o + 1], 4, -1530992060), a = this.md5_hh(a, i, s, n, t[o + 4], 11, 1272893353), 
                n = this.md5_hh(n, a, i, s, t[o + 7], 16, -155497632), s = this.md5_hh(s, n, a, i, t[o + 10], 23, -1094730640), 
                i = this.md5_hh(i, s, n, a, t[o + 13], 4, 681279174), a = this.md5_hh(a, i, s, n, t[o + 0], 11, -358537222), 
                n = this.md5_hh(n, a, i, s, t[o + 3], 16, -722521979), s = this.md5_hh(s, n, a, i, t[o + 6], 23, 76029189), 
                i = this.md5_hh(i, s, n, a, t[o + 9], 4, -640364487), a = this.md5_hh(a, i, s, n, t[o + 12], 11, -421815835), 
                n = this.md5_hh(n, a, i, s, t[o + 15], 16, 530742520), s = this.md5_hh(s, n, a, i, t[o + 2], 23, -995338651), 
                i = this.md5_ii(i, s, n, a, t[o + 0], 6, -198630844), a = this.md5_ii(a, i, s, n, t[o + 7], 10, 1126891415), 
                n = this.md5_ii(n, a, i, s, t[o + 14], 15, -1416354905), s = this.md5_ii(s, n, a, i, t[o + 5], 21, -57434055), 
                i = this.md5_ii(i, s, n, a, t[o + 12], 6, 1700485571), a = this.md5_ii(a, i, s, n, t[o + 3], 10, -1894986606), 
                n = this.md5_ii(n, a, i, s, t[o + 10], 15, -1051523), s = this.md5_ii(s, n, a, i, t[o + 1], 21, -2054922799), 
                i = this.md5_ii(i, s, n, a, t[o + 8], 6, 1873313359), a = this.md5_ii(a, i, s, n, t[o + 15], 10, -30611744), 
                n = this.md5_ii(n, a, i, s, t[o + 6], 15, -1560198380), s = this.md5_ii(s, n, a, i, t[o + 13], 21, 1309151649), 
                i = this.md5_ii(i, s, n, a, t[o + 4], 6, -145523070), a = this.md5_ii(a, i, s, n, t[o + 11], 10, -1120210379), 
                n = this.md5_ii(n, a, i, s, t[o + 2], 15, 718787259), s = this.md5_ii(s, n, a, i, t[o + 9], 21, -343485551), 
                i = this.safe_add(i, r), s = this.safe_add(s, h), n = this.safe_add(n, _), a = this.safe_add(a, l);
            }
            return [ i, s, n, a ];
        }
        md5_cmn(t, e, i, s, n, a) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(s, a)), n), i);
        }
        md5_ff(t, e, i, s, n, a, o) {
            return this.md5_cmn(e & i | ~e & s, t, e, n, a, o);
        }
        md5_gg(t, e, i, s, n, a, o) {
            return this.md5_cmn(e & s | i & ~s, t, e, n, a, o);
        }
        md5_hh(t, e, i, s, n, a, o) {
            return this.md5_cmn(e ^ i ^ s, t, e, n, a, o);
        }
        md5_ii(t, e, i, s, n, a, o) {
            return this.md5_cmn(i ^ (e | ~s), t, e, n, a, o);
        }
        safe_add(t, e) {
            var i = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i;
        }
        bit_rol(t, e) {
            return t << e | t >>> 32 - e;
        }
    }
    class m {
        static get ad_data_home() {
            return this._ad_data_home;
        }
        static pullZSData() {
            let t = new Laya.HttpRequest();
            t.once(Laya.Event.ERROR, this, t => {
                console.log("拉取zsad 失败", t);
            }), t.once(Laya.Event.COMPLETE, this, () => {
                console.log("pull zsad:", t.data), 200 == t.data.code ? t.data.data["position-2"] && (this._ad_data_home = t.data.data["position-2"]) : console.log("拉取zsad 失败", t.data);
            });
            let e = Math.round(.001 * Date.now()), i = "appid:" + l.appid + "timestamp:" + e + this.key, s = new f().hex_md5(i), n = {
                appid: l.appid,
                timestamp: e,
                sign: s
            };
            t.send(this.zs_ad_url, JSON.stringify(n), "post", "json", [ "Content-Type", "application/json" ]);
        }
        static jumpCollect(t) {
            let e = new Laya.HttpRequest();
            e.once(Laya.Event.ERROR, this, t => {
                console.log("JumpCollect 失败:", t);
            }), e.once(Laya.Event.COMPLETE, this, () => {
                console.log("zs 跳转统计:", e.data);
            });
            let i = o.ins.user_data.user_id, s = Math.round(.001 * Date.now()), n = "from_id:" + l.appid + "timestamp:" + s + "to_id:" + t + "user_id:" + i + this.key, a = new f().hex_md5(n), r = {
                user_id: i,
                from_id: l.appid,
                to_id: t,
                sign: a,
                timestamp: s
            }, h = JSON.stringify(r);
            console.log("上报紫色跳转数据：", h), e.send(this.zs_collect_url, h, "post", "json", [ "Content-Type", "application/json" ]);
        }
        static navigateToOther(t) {
            Laya.Browser.onMiniGame && t ? Laya.Browser.window.wx.navigateToMiniProgram({
                appId: t.appid,
                path: t.link_path,
                success: () => {
                    m.jumpCollect(t.app_id);
                },
                fail: () => {
                    l.ins.canOpenFullScreenJump && n.open(u, !1);
                }
            }) : l.ins.canOpenFullScreenJump && n.open(u, !1);
        }
        static setupList(t, e, i, s, n, a) {
            if (!m.ad_data_home) return void (t.parent.visible = !1);
            let o = m.ad_data_home;
            if ("v" == s && (t.vScrollBarSkin = ""), "h" == s && (t.hScrollBarSkin = ""), t.renderHandler = Laya.Handler.create(this, (t, e) => {
                t.getChildByName("icon").skin = o[e].app_icon, t.getChildByName("title").text = d.splitStr(o[e].app_title, 10, "..");
            }, null, !1), t.array = o, t.selectEnable = !0, t.selectHandler = Laya.Handler.create(this, t => {
                t >= 0 && t < o.length && m.navigateToOther(o[t]);
            }, null, !1), e) {
                let s = 0;
                i < 0 ? (i *= -1, t.tweenTo(i)) : s = i, Laya.timer.once(1e3, this, () => {
                    let o = () => {
                        t && t.tweenTo(s, n, Laya.Handler.create(this, () => {
                            s = s == i ? 0 : i, e.once(a, this, o);
                        }));
                    };
                    o();
                });
            }
        }
        static registerCnxhBtn(t) {
            this.ad_data_home ? t.on(Laya.Event.CLICK, this, this.openCnxhView) : t.visible = !1;
        }
        static unRegisterCnxhBtn(t) {
            t.off(Laya.Event.CLICK, this, this.openCnxhView);
        }
        static openCnxhView() {
            n.open(u, !1);
        }
    }
    m.key = "sHArIVdt89zGFGxE", 
    m.zs_ad_url = "", 
    m.zs_collect_url = "";
    class g extends e.View.SettleUI {
        constructor() {
            super(...arguments), this.get_coin_mul = 1;
        }
        onOpened() {
            o.ins.ov_num > o.ins.user_data.best && (
                // c.ins.setUserCloudStorage(o.ins.ov_num), 
                // l.ins.new_score(o.ins.ov_num)
                o.ins.user_data.best = o.ins.ov_num,
                o.ins.user_data = o.ins.user_data
            ), 
            this.setInfo(), 
            this.btn_home.on(Laya.Event.CLICK, this, this.btnHomeHandle), 
            this.btn_share.on(Laya.Event.CLICK, this, this.btnShareHandle), 
            this.btn_rank.on(Laya.Event.CLICK, this, this.btnRankHandle), 
            this.btn_video.on(Laya.Event.CLICK, this, this.btnVideoGetCoinHandle), 
            this.btn_rank.visible = !1;
            this.btn_share.visible = !1;
            //m.setupList(this.list, this.timer, 8, "v", 8e3, 300), 
            platform.getInstance().initList(this.list);
            //_.ins.showBanner(this.btns);
        }
        setInfo() {
            this.ov_num.text = "overtake " + o.ins.ov_num, this.get_coin.text = o.ins.get_coin.toString();
        }
        btnHomeHandle() {
            n.open($);
        }
        btnShareHandle() {
            c.ins.share();
        }
        btnRankHandle() {
            n.open(p, !1);
        }
        btnVideoGetCoinHandle() {
            // _.ins.vadLoaded ? _.ins.showVideo(Laya.Handler.create(this, t => {
            //     t ? (this.btn_video.visible = !1, this.get_coin_mul = 5, this.get_coin.text = (o.ins.get_coin * this.get_coin_mul).toString()) : n.showToast("视频播放完才可以领取🌹");
            // })) : n.showToast("暂时没有视频 稍后再试☹️", 3e3);
            platform.getInstance().showReward(()=>{
                this.btn_video.visible = !1, 
                this.get_coin_mul = 5, 
                this.get_coin.text = (o.ins.get_coin * this.get_coin_mul).toString()
            });
        }
        onClosed() {
            //l.ins.get_coin(o.ins.get_coin * this.get_coin_mul), 
            o.ins.user_data.coin += o.ins.get_coin * this.get_coin_mul,
            o.ins.user_data = o.ins.user_data,
            this.btn_home.off(Laya.Event.CLICK, this, this.btnHomeHandle), 
            this.btn_share.off(Laya.Event.CLICK, this, this.btnShareHandle), 
            this.btn_rank.off(Laya.Event.CLICK, this, this.btnRankHandle), 
            this.btn_video.off(Laya.Event.CLICK, this, this.btnVideoGetCoinHandle);
        }
    }
    class E extends e.View.RelifeUI {
        onOpened() {
            this.setInfo(), c.ins.op_will_surpass(o.ins.ov_num), 
            this.btn_relife.on(Laya.Event.CLICK, this, this.btnRelifeHandle), 
            this.btn_skip.on(Laya.Event.CLICK, this, this.btnSkipHandle), 
            //m.setupList(this.list, this.timer, 8, "v", 8e3, 300), 
            //_.ins.showBanner(this.btns);
            platform.getInstance().initList(this.list);
        }
        setInfo() {
            this.ov_num.text = "overtake " + o.ins.ov_num, this.get_coin.text = o.ins.get_coin.toString();
        }
        btnRelifeHandle() {
            // _.ins.vadLoaded ? _.ins.showVideo(Laya.Handler.create(this, t => {
            //     t ? (a.ins.event(a.GAME_RELIFE), n.open(Q)) : n.showToast("视频播放完才可以复活🌹");
            // })) : n.showToast("暂时没有视频 稍后再试☹️", 3e3);
            platform.getInstance().showReward(()=>{
                a.ins.event(a.GAME_RELIFE), n.open(Q)
            })
        }
        btnSkipHandle() {
            n.open(g);
        }
        onClosed() {
            c.ins.op_hide_will_surpass(), this.btn_relife.off(Laya.Event.CLICK, this, this.btnRelifeHandle), 
            this.btn_skip.off(Laya.Event.CLICK, this, this.btnSkipHandle);
        }
    }
    class L extends Laya.Script3D {
        static get delta() {
            return this._delta;
        }
        onUpdate() {
            L._delta = Laya.MathUtil.lerp(L.delta, .001 * Laya.timer.delta, .001 * Laya.timer.delta), 
            L._delta = Math.min(.032, L._delta);
        }
    }
    L._delta = 0;
    class S {}
    S.mainScene_url = "wxlocal/subpackage0/scene/main/Conventional/main.ls", S.config_url = "res/config.json";
    var y = Laya.Handler;
    class T {
        constructor() {
            this._car_prefab_list = [];
            this.progress = 0;
        }
        static get ins() {
            return this._ins || (this._ins = new T()), this._ins;
        }
        get main_scene() {
            return this._main_scene;
        }
        get car_config() {
            return this._car_config;
        }
        get_new_car(t) {
            let e = this._car_prefab_list.find(e => e.name == t);
            return e ? Laya.Sprite3D.instantiate(e) : null;
        }
        load(t, e) {
            // let i = [ (i, s) => {
            //     //Laya.Browser.onMiniGame ? 
            //     // Laya.Browser.window.wx.loadSubpackage({
            //     //     name: "subpackage0",
            //     //     success(t) {
            //     //         Laya.timer.frameOnce(1, this, n);
            //     //     },
            //     //     fail(t) {
            //     //         e.runWith(!1);
            //     //     }
            //     // }).onProgressUpdate(e => {
            //     //     t && t.runWith([ "加载3d资源... ", Laya.MathUtil.lerp(i, s, .01 * e.progress) ]);
            //     // }) 
            //     //: n();
            //     let res3DArray = [
            //         "wxlocal/subpackage0/scene/main/Conventional/main.ls",
            //     ];
            //     console.log("main.ls资源加载");
            //     Laya.loader.create(res3DArray, Laya.Handler.create(this,()=>{
            //         console.log("main.ls资源加载完成");
            //         Laya.timer.frameOnce(1, this, n);
            //         t&&t.runWith(["",0.3]);
            //     }))
            // }, (i, s) => {
            //     Laya.loader.create(S.mainScene_url, y.create(this, t => {
            //         if (t) {
            //             this._main_scene = t;
            //             let e = t.getChildByName("CarMgr");
            //             for (let t = e.numChildren - 1; t >= 0; t--) {
            //                 let i = e.getChildAt(t);
            //                 i.removeSelf(), this._car_prefab_list.push(i);
            //             }
            //             n();
            //         } else e.runWith(!1);
            //     }), 
            //     y.create(this, e => {
            //         t && t.runWith([ "加载3d资源... ", 0.4 ]);
            //     }, null, !1));
            // }, () => {
            //     Laya.loader.create(S.config_url, y.create(this, t => {
            //         t ? (this._car_config = t, n()) : e.runWith(!1);
            //     }), y.create(this, e => {
            //         t && t.runWith([ "加载配置... ", 0.6 ]);
            //     }, null, !1));
            // }], 
            // s = i.length, 
            // n = () => {
            //     if (i.length > 0) {
            //         let t = i.length, 
            //         e = i.shift(), 
            //         n = i.length;
            //         e((s - t) / s, (s - n) / s);
            //     } else e.runWith(!0);
            // };
            
            // n();
            this.loadMain(t);
            this.load3D(t);
            this.loadConfig(t);
            Laya.loader.load("cnf.json",Laya.Handler.create(this,(res)=>{
                platform.getInstance().startup("OverTake-3d", res["id"], () => 
                {
                    let yad     = new Laya.Image();
                    yad.scale(0.8,0.8);
                    yad.skin    = "cargames.png";
                    yad.bottom  = 0;
                    yad.centerX = 0;
                    //yad.top   = 10;
                    yad.zOrder  = 1e3;
                    yad.on(Laya.Event.MOUSE_DOWN,yad,()=>{platform.getInstance().navigate("GAME","LOGO")})
                    Laya.stage.addChild(yad);
                    window.yad  = yad;
                    this.loadAudio(t);
                });
            })) 
        }
        loadMain(t){
            let res3DArray = [
                "wxlocal/subpackage0/scene/main/Conventional/main.ls",
            ];
            console.log("main.ls资源加载");
            Laya.loader.create(res3DArray, Laya.Handler.create(this,()=>{
                console.log("main.ls资源加载完成");
                //Laya.timer.frameOnce(1, this, n);
                this.loadFinished(t,0.125);
            }))
        }
        loadAudio(t){
            let resSoundArray = [
                "wxlocal/subpackage1/sound/bg.mp3",
                "wxlocal/subpackage1/sound/click.mp3",
                "wxlocal/subpackage1/sound/coin.mp3",
                "wxlocal/subpackage1/sound/crash1.mp3",
                "wxlocal/subpackage1/sound/crash2.mp3",
                "wxlocal/subpackage1/sound/crash3.mp3",
                "wxlocal/subpackage1/sound/didi.mp3",
                "wxlocal/subpackage1/sound/engine.mp3",
                "wxlocal/subpackage1/sound/impact_0.mp3",
                "wxlocal/subpackage1/sound/impact_1.mp3",
                "wxlocal/subpackage1/sound/impact_2.mp3",
                "wxlocal/subpackage1/sound/impact_3.mp3",
                "wxlocal/subpackage1/sound/impact_4.mp3",
                "wxlocal/subpackage1/sound/ov_0.mp3",
            ];
            console.log("sound资源加载");
            AudioEngineInstance.load(resSoundArray,()=>{
                console.log("sound资源加载完成");
                this.loadFinished(t,0.125);
            })
        }
        load3D(t){
            Laya.loader.create(S.mainScene_url, y.create(this, t => {
                if (t) {
                    this._main_scene = t;
                    let e = t.getChildByName("CarMgr");
                    for (let t = e.numChildren - 1; t >= 0; t--) {
                        let i = e.getChildAt(t);
                        i.removeSelf(), this._car_prefab_list.push(i);
                    }
                    //n();
                } else e.runWith(!1);
            }), 
            y.create(this, e => {
                console.log("3D资源加载完成");
                this.loadFinished(t,0.125);
            }, null, !1));
        }
        loadConfig(t){
            Laya.loader.create(S.config_url, y.create(this, t => {
                t ? (this._car_config = t//, 
                    //n()
                    ) : e.runWith(!1);
            }), y.create(this, e => {
                console.log("配置加载完成");
                this.loadFinished(t,0.125);
            }, null, !1));
        }
        loadFinished(t,e){
            this.progress+=e;
            console.log("Progress Value:"+this.progress,e);
            t && t.runWith(["", this.progress ]);
        }
    }
    class I extends Laya.Script3D {
        constructor() {
            super(...arguments), this.segment_list = [], this.cur_builded_zpos = -10, this.cur_idx = 0, 
            this._camera_zpos = 0, this._road_type = "beach_0", this.matIsInit = !1;
        }
        set camera_zpos(t) {
            this._camera_zpos = t;
        }
        set road_type(t) {
            this._road_type = t, this.cur_idx = 0;
        }
        set mat(t) {
            this._mat = t;
        }
        gameReset() {
            this.cur_idx = 0, this.cur_builded_zpos = -10, this.segment_list.forEach(t => {
                t.removeSelf(), Laya.Pool.recover(t.name, t);
            }), this.segment_list.length = 0;
        }
        onAwake() {
            this.beach_0 = this.owner.getChildByName(I.type_beach_0), this.beach_0.removeSelf();
        }
        onUpdate() {
            this.cur_builded_zpos <= this._camera_zpos + o.road_range.y && this.buildRoad(), 
            this.recoverRoad();
        }
        buildRoad() {
            let t = null;
            switch (this._road_type) {
              case I.type_beach_0:
                this.cur_idx >= this.beach_0.numChildren && (this.cur_idx = 0), t = this.beach_0.getChildAt(this.cur_idx), 
                this.cur_idx++;
            }
            let e = Laya.Pool.getItemByCreateFun(t.name, () => {
                if (!this.matIsInit && this._mat && (this._mat.setArgFromMat(t.meshRenderer.sharedMaterial), 
                this.matIsInit = !0), this._mat) {
                    let e = t => {
                        t instanceof Laya.MeshSprite3D && (t.meshRenderer.sharedMaterial = this._mat);
                        for (let i = 0; i < t.numChildren; i++) e(t.getChildAt(i));
                    };
                    e(t);
                }
                return Laya.Sprite3D.instantiate(t);
            }, this);
            this.owner.addChild(e), e.transform.position.x = e.transform.position.y = 0, e.transform.position.z = this.cur_builded_zpos, 
            e.transform.position = e.transform.position, e.__l = parseFloat(t.name.split("_")[2]) - .01, 
            this.cur_builded_zpos += e.__l, this.segment_list.push(e);
        }
        recoverRoad() {
            if (this.segment_list.length > 0) {
                let t = this.segment_list[0];
                t.transform.localPositionZ + t.__l < this._camera_zpos - (o.road_range.x + (o.carportIsOpen ? 80 : 0)) && (this.segment_list.shift(), 
                t.removeSelf(), Laya.Pool.recover(t.name, t));
            }
        }
        onDestroy() {}
    }
    I.type_beach_0 = "beach_0";
    class C {
        constructor() {
            this.key = "overtaking_setting", this.data = {
                sound: !0,
                vibrate: !0
            }, this.data = Laya.LocalStorage.getJSON(this.key), this.data || (this.data = {
                sound: !0,
                vibrate: !0
            });
        }
        static get ins() {
            return this._ins || (this._ins = new C()), this._ins;
        }
        get settingData() {
            return this.data;
        }
        setSoundBtn(t) {
            this._radioSound && this._radioSound.offAll(Laya.Event.CLICK), 
            t && (
                this._radioSound = t, 
                this._radioSound.selected = this.data.sound, 
                this._radioSound.on(Laya.Event.CLICK, this, this.radioSoundHandle)
            );
        }
        radioSoundHandle() {
            this._radioSound.selected = this.data.sound = !this.data.sound, 
            Laya.LocalStorage.setJSON(this.key, this.data), 
            this.data.sound ? v.ins.playBg() : v.ins.stopBg();
        }
        setVibrateBtn(t) {
            this._radioVibrate && this._radioVibrate.offAll(Laya.Event.CLICK), t && (this._radioVibrate = t, 
            this._radioVibrate.selected = this.data.vibrate, this._radioVibrate.on(Laya.Event.CLICK, this, this.radioVibrateHandle));
        }
        radioVibrateHandle() {
            this._radioVibrate.selected = this.data.vibrate = !this.data.vibrate, Laya.LocalStorage.setJSON(this.key, this.data);
        }
        clearSettingBtnEvent() {
            this._radioSound && this._radioSound.offAll(Laya.Event.CLICK), this._radioVibrate && this._radioVibrate.offAll(Laya.Event.CLICK);
        }
    }
    class v {
        constructor() {
            this.base_url = "wxlocal/subpackage1/sound/", this.ovVolume = 0, this.ovPlaying = !1, 
            v.bg = this.base_url + "bg.mp3", v.click = this.base_url + "click.mp3", v.crash = this.base_url + "crash", 
            v.impact = this.base_url + "impact_", v.didi = this.base_url + "didi.mp3", v.engine = this.base_url + "engine.mp3", 
            v.coin = this.base_url + "coin.mp3", v.ov_0 = this.base_url + "ov_0.mp3", Laya.SoundManager.autoReleaseSound = !1, 
            Laya.stage.on(Laya.Event.MOUSE_UP, this, t => {
                t.target && t.target instanceof Laya.Button && C.ins.settingData.sound && AudioEngineInstance.play(v.click);
            }), Laya.stage.on(c.WX_ON_SHOW, this, () => {
                this.playBg();
            });
        }
        static get ins() {
            return this._ins || (this._ins = new v()), this._ins;
        }
        playBg() {
            AudioEngineInstance._ismute = false;
            C.ins.settingData.sound && AudioEngineInstance.play(v.bg, true);
        }
        stopBg() {
            AudioEngineInstance._ismute = true;
            AudioEngineInstance.stop(v.bg);
        }
        playGetCoin() {
            C.ins.settingData.sound && AudioEngineInstance.play(v.coin);
        }
        playOv() {
            C.ins.settingData.sound && !this.ovPlaying && (
                Laya.timer.clear(this, this.setOvVolumeDown), 
                Laya.timer.clear(this, this.ovLoopPlay), 
                this.ovLoopPlay(), 
                this.ovVolume = 1, 
                Laya.SoundManager.setSoundVolume(1, v.ov_0), 
                AudioEngineInstance.play(v.ov_0),
                this.ovPlaying = !0
            );
        }
        ovLoopPlay() {
            AudioEngineInstance.play(v.ov_0), Laya.timer.once(4800, this, this.ovLoopPlay);
        }
        stopOv() {
            this.ovPlaying = !1, 
            Laya.timer.clear(this, this.setOvVolumeDown), 
            Laya.timer.clear(this, this.ovLoopPlay), 
            Laya.timer.frameLoop(1, this, this.setOvVolumeDown);
        }
        setOvVolumeDown() {
            AudioEngineInstance.stop(v.ov_0),
            Laya.SoundManager.setSoundVolume(this.ovVolume, v.ov_0), 
            this.ovVolume -= L.delta, 
            this.ovVolume <= 0 && (Laya.timer.clear(this, this.setOvVolumeDown), 
            Laya.SoundManager.stopSound(v.ov_0));
        }
        playCrash() {
            if (C.ins.settingData.sound) {
                let t = v.crash + d.randomInt(1, 3) + ".mp3";
                AudioEngineInstance.play(t);
            }
        }
        playImpact() {
            if (C.ins.settingData.sound) {
                let t = v.impact + d.randomInt(0, 4) + ".mp3";
                AudioEngineInstance.play(t);
            }
        }
    }
    class R extends Laya.Script3D {
        constructor() {
            super(...arguments), this._dir = 1, this.relife_zpos = 0, this._moving = !1, this.isBeOv = !1, 
            this.isBeHit = !1, this.fly_spos = new Laya.Vector3(), this.fly_tpos = new Laya.Vector3(), 
            this.fly_t = 0, this.fly_r = 1;
        }
        get dir() {
            return this._dir;
        }
        get transform() {
            return this._transform;
        }
        setup(t, e) {
            this._dir = t, this._transform = this.owner.transform, this._transform.position.x = t > 0 ? -o.road_center : o.road_center, 
            this._transform.position.y = 0, this._transform.position.z = e, this._transform.position = this._transform.position, 
            this.transform.localRotationEulerX = this.transform.localRotationEulerZ = 0, this._transform.localRotationEulerY = t > 0 ? 0 : 180, 
            this.isBeOv = !1, this.isBeHit = !1, this._moving = !0;
        }
        gameOver() {
            this._moving = !1, this.relife_zpos = this._transform.position.z;
        }
        relife() {
            this._transform.position.x = this._dir > 0 ? -o.road_center : o.road_center, this._transform.position.y = 0, 
            this._transform.position.z = this.relife_zpos, this._transform.position = this._transform.position, 
            this._transform.localRotationEulerX = this._transform.localRotationEulerZ = 0, this._transform.localRotationEulerY = this._dir > 0 ? 0 : 180, 
            this.isBeOv = !1, this._moving = !0;
        }
        collision(t) {
            t && (this.isBeOv = !0), this.addForce(t), this._moving = !1;
        }
        addForce(t) {
            this.fly_t = 0, this.fly_r = d.random(3, 6) * (Math.random() > .5 ? 1 : -1), this.fly_spos.setValue(this._transform.position.x, this._transform.position.y, this._transform.position.z), 
            this.fly_tpos.x = d.random(-3, 3), this.fly_tpos.z = t ? this._transform.position.z + d.random(-10, 20) : this._transform.position.z + d.random(10, 30), 
            this.fly_tpos.y = 5, this.owner.frameLoop(1, this, this.fly);
        }
        fly() {
            this.fly_t += .5 * L.delta, this._transform.position.x = Laya.MathUtil.lerp(this.fly_spos.x, this.fly_tpos.x, this.fly_t), 
            this._transform.position.z = Laya.MathUtil.lerp(this.fly_spos.z, this.fly_tpos.z, this.fly_t), 
            this._transform.position.y = Math.sin(this.fly_t * Math.PI) * this.fly_tpos.y + this.fly_t, 
            this._transform.position = this._transform.position, this._transform.localRotationEulerX += this.fly_r, 
            this._transform.localRotationEulerY += this.fly_r, this.fly_t >= 1 && this.owner.clearTimer(this, this.fly);
        }
        onUpdate() {
            this._moving && (this._transform.localPositionZ += this._dir * o.car_speed * L.delta);
        }
        onCollisionEnter(t) {
            0 != o.ins.gameState && v.ins.playImpact();
        }
    }
    class w extends Laya.Script3D {
        constructor() {
            super(...arguments), this.car_list_l = [], this.car_list_r = [], this._camera_zpos = 0, 
            this.l_z = 0, this.r_z = 0, this.cur_level = 0, this.cur_part_l_idx = 0, this.cur_part_r_idx = 0, 
            this.temp_zpos = 0, this.temp_cur_part_l_moved_lenth = 0, this.temp_cur_part_r_moved_lenth = 0, 
            this.matIsInit = !1;
        }
        get carListL() {
            return this.car_list_l;
        }
        get carListR() {
            return this.car_list_r;
        }
        set camera_zpos(t) {
            this._camera_zpos = t;
        }
        set mat(t) {
            this._mat = t;
        }
        onAwake() {
            this.config = T.ins.car_config, this.refreshPartData();
        }
        refreshPartData() {
            this.cur_level == this.config.length && this.cur_level--;
            let t = this.config[this.cur_level].data, e = d.randomInt(0, t.length - 1);
            this.cur_part = t[e], this.cur_level++;
        }
        onUpdate() {
            1 == o.ins.gameState && (this.l_z -= L.delta * o.car_speed, this.cur_part_l_idx == this.cur_part.l.length && (this.temp_cur_part_l_moved_lenth += this.cur_part.l[this.cur_part_l_idx - 1].z, 
            this.cur_part_l_idx = 0), this.temp_config_car = this.cur_part.l[this.cur_part_l_idx], 
            this.temp_zpos = this.temp_cur_part_l_moved_lenth + this.temp_config_car.z + this.l_z, 
            this.temp_zpos <= this._camera_zpos + o.car_range.y && (this.addCar(this.temp_config_car, this.temp_zpos, -1), 
            this.cur_part_l_idx++)), -1 != o.ins.gameState && (this.cur_part_r_idx == this.cur_part.r.length && (this.temp_cur_part_r_moved_lenth += this.cur_part.r[this.cur_part_r_idx - 1].z, 
            this.cur_part_r_idx = 0, this.refreshPartData()), this.r_z += L.delta * o.car_speed, 
            this.temp_config_car = this.cur_part.r[this.cur_part_r_idx], this.temp_zpos = this.temp_cur_part_r_moved_lenth + this.temp_config_car.z + this.r_z, 
            this.temp_zpos <= this._camera_zpos + o.car_range.y && (this.addCar(this.temp_config_car, this.temp_zpos, 1), 
            this.cur_part_r_idx++), this.recoverCar());
        }
        getCar(t) {
            let e = Laya.Pool.getItemByCreateFun(t, () => {
                let e = T.ins.get_new_car(t);
                return !this.matIsInit && this._mat && (this._mat.setArgFromMat(e.getChildByName("body").meshRenderer.sharedMaterial), 
                this.matIsInit = !0), this._mat && (e.getChildByName("back").meshRenderer.sharedMaterial = this._mat, 
                e.getChildByName("front").meshRenderer.sharedMaterial = this._mat, e.getChildByName("body").meshRenderer.sharedMaterial = this._mat), 
                e.addComponent(R), e;
            }, this);
            if (e) return e.getComponent(R);
            console.log("GetCar 对象池创建car失败 -> " + t);
        }
        addCar(t, e, i) {
            let s = !1, n = t.cid;
            n.endsWith("_p") && (n = n.slice(0, n.length - 2), s = !0);
            let a = this.getCar(n);
            s && j.ins.prop_mgr.addPropAcce(a.owner), this.owner.addChild(a.owner), a.setup(i, e), 
            i < 0 ? this.car_list_l.push(a) : this.car_list_r.push(a);
        }
        recoverCar() {
            if (this.car_list_l.length > 0) {
                let t = this.car_list_l[0];
                t.transform.position.z < this._camera_zpos - o.car_range.x && (j.ins.prop_mgr.recoverPropAcce(t.owner), 
                this.car_list_l.shift(), t.owner.removeSelf(), Laya.Pool.recover(t.owner.name, t.owner));
            }
            if (this.car_list_r.length > 0) {
                let t = this.car_list_r[0];
                t.transform.position.z < this._camera_zpos - o.car_range.x && (j.ins.prop_mgr.recoverPropAcce(t.owner), 
                this.car_list_r.shift(), t.owner.removeSelf(), Laya.Pool.recover(t.owner.name, t.owner));
            }
        }
        relifeZpos() {
            return this.car_list_r[0].transform.position.z - 5;
        }
        overtakingCheck(t) {
            for (let e = 0; e < this.car_list_r.length; e++) if (!this.car_list_r[e].isBeOv && t - this.car_list_r[e].transform.position.z > 2) return this.car_list_r[e].isBeOv = !0, 
            !0;
        }
        gameReset() {
            this._camera_zpos = 0, this.cur_level = 0, this.l_z = this.r_z = 0, this.cur_part_l_idx = this.cur_part_r_idx = 0, 
            this.temp_cur_part_l_moved_lenth = this.temp_cur_part_r_moved_lenth = 0, this.refreshPartData(), 
            this.car_list_l.forEach(t => {
                j.ins.prop_mgr.recoverPropAcce(t.owner), t.owner.removeSelf(), Laya.Pool.recover(t.owner.name, t.owner);
            }), this.car_list_l.length = 0, this.car_list_r.forEach(t => {
                j.ins.prop_mgr.recoverPropAcce(t.owner), t.owner.removeSelf(), Laya.Pool.recover(t.owner.name, t.owner);
            }), this.car_list_r.length = 0;
        }
        gameStart() {
            this.temp_cur_part_l_moved_lenth = this._camera_zpos + o.car_range.y;
        }
        gameRelife() {
            this.car_list_l.forEach(t => {
                t.relife();
            }), this.car_list_r.forEach(t => {
                t.relife();
            }), console.log(" this.car_list_r lenght:", this.car_list_r.length);
        }
        gameOver() {
            this.car_list_l.forEach(t => {
                t.gameOver();
            }), this.car_list_r.forEach(t => {
                t.gameOver();
            });
        }
    }
    var A = Laya.Vector3, x = Laya.MathUtil;
    class O extends Laya.Script3D {
        constructor() {
            super(...arguments), this._target = new A(), this.posC_rx = 0, this.posC_ry = 0, 
            this.isCarport = !1, this.follow_0 = 3, this.follow_1 = 5, this.follow_cp = 3, this.cur_pos = new A(), 
            this.cur_ry = 180, this.cur_fov = 50, this.cur_fov_cahnge_speed = 5, this.temp = 0;
        }
        get camera() {
            return this._camera;
        }
        get zpos() {
            return this.cameraTrans.position.z;
        }
        set target(t) {
            -1 != o.ins.gameState && this._target.setValue(t.x, t.y, t.z);
        }
        onAwake() {
            let t = this.owner.getChildByName("Camera_0");
            this.pos0 = t.transform.localPosition.clone(), this.pos0_rx = t.transform.localRotationEulerX, 
            this._camera = t, this.cameraTrans = this._camera.transform, this.cur_fov = o.fov_normal;
            let e = this.owner.getChildByName("Camera_1");
            this.pos1 = e.transform.localPosition, this.pos1_rx = e.transform.localRotationEulerX, 
            e.destroy(!0);
            let i = this.owner.getChildByName("Camera_2");
            this.pos2 = i.transform.localPosition, this.pos2_rx = i.transform.localRotationEulerX, 
            i.destroy(!0);
            let s = this.owner.getChildByName("Camera_3");
            this.pos3 = s.transform.localPosition, this.pos3_rx = s.transform.localRotationEulerX, 
            s.destroy(!0);
            let n = this.owner.getChildByName("Camera_carport");
            this.posC = n.transform.localPosition, this.posC_rx = n.transform.localRotationEulerX, 
            this.posC_ry = n.transform.localRotationEulerY, n.destroy(!0), this.gameReset(), 
            a.ins.on(a.PLALYER_SPEED_CHANGE, this, this.onPlayerSpeedChange);
        }
        onOpenCarport() {
            this.cur_pos.setValue(this.posC.x, this.posC.y, this.posC.z + 2.8), this.cur_rx = this.posC_rx, 
            this.cur_ry = this.posC_ry, this.cur_fllow = this.follow_cp, this.isCarport = !0;
        }
        onCloseCarport() {
            this.gameStart();
        }
        gameReset() {
            this.cur_pos.setValue(this.pos0.x, this.pos0.y, this.pos0.z), this.cur_rx = this.pos0_rx, 
            this.cur_ry = 180, this.cur_fllow = this.follow_1, this.cameraTrans.localPositionZ = 0, 
            this.isCarport = !1;
        }
        gameStart() {
            this.cur_pos.setValue(this.pos1.x, this.pos1.y, this.pos1.z), this.cur_rx = this.pos1_rx, 
            this.cur_ry = 180, this.cur_fllow = this.follow_1, this.isCarport = !1;
        }
        gameOver() {
            this.cur_pos.setValue(this.pos3.x, this.pos3.y, this.pos3.z), this.cur_rx = this.pos3_rx, 
            this.cur_ry = 180, this.cur_fllow = this.follow_0, this.isCarport = !1;
        }
        gameRevie() {
            this.cur_pos.setValue(this.pos1.x, this.pos1.y, this.pos1.z), this.cur_rx = this.pos1_rx, 
            this.cur_ry = 180, this.cur_fllow = this.follow_1, this.isCarport = !1;
        }
        onStartOvertaking() {
            this.cur_pos.setValue(this.pos2.x, this.pos2.y, this.pos2.z), this.cur_rx = this.pos2_rx, 
            this.cur_ry = 180, this.cur_fllow = this.follow_1, this.isCarport = !1;
        }
        onFinishOvertaking() {
            this.cur_pos.setValue(this.pos1.x, this.pos1.y, this.pos1.z), this.cur_rx = this.pos1_rx, 
            this.cur_ry = 180, this.cur_fllow = this.follow_1, this.isCarport = !1;
        }
        onPlayerSpeedChange(t) {
            switch (t) {
              case 0:
                this.cur_pos.setValue(this.pos1.x, this.pos1.y, this.pos1.z), this.cur_rx = this.pos1_rx, 
                this.cur_ry = 180, this.cur_fllow = this.follow_0, this.cur_fov = o.fov_normal, 
                this.cur_fov_cahnge_speed = o.fov_cs_normal;
                break;

              case 1:
                this.cur_pos.setValue(this.pos1.x, this.pos1.y, this.pos1.z), this.cur_rx = this.pos1_rx, 
                this.cur_ry = 180, this.cur_fllow = this.follow_0, this.isCarport = !1, this.cur_fov = o.fov_ov, 
                this.cur_fov_cahnge_speed = o.fov_cs_ov;
                break;

              case 2:
                this.cur_pos.setValue(this.pos1.x, this.pos1.y, this.pos1.z), this.cur_rx = this.pos1_rx, 
                this.cur_ry = 180, this.cur_fllow = this.follow_1, this.isCarport = !1, this.cur_fov = o.fov_wudi, 
                this.cur_fov_cahnge_speed = o.fov_cs_wudi;
            }
        }
        onUpdate() {
            this.temp = L.delta * this.cur_fllow, this.isCarport ? (this.cameraTrans.localPositionX = x.lerp(this.cameraTrans.localPositionX, this._target.x + this.cur_pos.x, this.temp), 
            this.cameraTrans.localPositionY = x.lerp(this.cameraTrans.localPositionY, this._target.y + this.cur_pos.y, this.temp), 
            this.cameraTrans.localPositionZ = x.lerp(this.cameraTrans.localPositionZ, this._target.z + this.cur_pos.z, this.temp), 
            this.cameraTrans.localRotationEulerX = x.lerp(this.cameraTrans.localRotationEulerX, this.cur_rx, .68 * this.temp), 
            this.cameraTrans.localRotationEulerY = x.lerp(this.cameraTrans.localRotationEulerY, this.cur_ry, .68 * this.temp)) : (this.cameraTrans.localPositionX = x.lerp(this.cameraTrans.localPositionX, this._target.x, this.temp), 
            this.cameraTrans.localPositionY = x.lerp(this.cameraTrans.localPositionY, this._target.y + this.cur_pos.y, this.temp), 
            this.cameraTrans.localPositionZ = x.lerp(this.cameraTrans.localPositionZ, this._target.z + this.cur_pos.z, this.temp), 
            this.cameraTrans.localRotationEulerX = x.lerp(this.cameraTrans.localRotationEulerX, this.cur_rx, this.temp), 
            this.cameraTrans.localRotationEulerY = x.lerp(this.cameraTrans.localRotationEulerY, this.cur_ry, this.temp), 
            this._camera.fieldOfView = x.lerp(this._camera.fieldOfView, this.cur_fov, L.delta * this.cur_fov_cahnge_speed));
        }
        onDestroy() {
            a.ins.off(a.PLALYER_SPEED_CHANGE, this, this.onPlayerSpeedChange);
        }
    }
    class D extends Laya.Script3D {
        constructor() {
            super(...arguments), this.sky_list = [], this._camera_zpos = 0;
        }
        set camera_zpos(t) {
            this._camera_zpos = t;
        }
        onAwake() {
            for (let t = this.owner.numChildren - 1; t >= 0; t--) {
                let e = this.owner.getChildAt(t);
                e.removeSelf(), this.sky_list.push(e);
            }
        }
        setSky(t) {
            this.cur_sky && this.cur_sky.removeSelf(), this.cur_sky = this.sky_list.find(e => e.name == t), 
            this.owner.addChild(this.cur_sky), this.cur_sky.transform.localPositionX = this.cur_sky.transform.localPositionY = this.cur_sky.transform.localPositionZ = 0;
        }
        onUpdate() {
            this.cur_sky && (this.cur_sky.transform.localPositionZ = this._camera_zpos);
        }
    }
    var b = '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n\n#include "Lighting.glsl";\n\nuniform vec4 u_DiffuseColor;\n\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n\tvarying vec4 v_Color;\n#endif\n\n#ifdef ALPHATEST\n\tuniform float u_AlphaTestValue;\n#endif\n\n#ifdef DIFFUSEMAP\n\tuniform sampler2D u_DiffuseTexture;\n#endif\n\n\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\n\tvarying vec2 v_Texcoord0;\n#endif\n\n#ifdef LIGHTMAP\n\tvarying vec2 v_LightMapUV;\n\tuniform sampler2D u_LightMap;\n#endif\n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\tvarying vec3 v_Normal;\n\tvarying vec3 v_ViewDir; \n\n\tuniform vec3 u_MaterialSpecular;\n\tuniform float u_Shininess;\n\n\t#ifdef LEGACYSINGLELIGHTING\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tuniform DirectionLight u_DirectionLight;\n\t\t#endif\n\t\t#ifdef POINTLIGHT\n\t\t\tuniform PointLight u_PointLight;\n\t\t#endif\n\t\t#ifdef SPOTLIGHT\n\t\t\tuniform SpotLight u_SpotLight;\n\t\t#endif\n\t#else\n\t\tuniform mat4 u_View;\n\t\tuniform vec4 u_ProjectionParams;\n\t\tuniform vec4 u_Viewport;\n\t\tuniform int u_DirationLightCount;\n\t\tuniform sampler2D u_LightBuffer;\n\t\tuniform sampler2D u_LightClusterBuffer;\n\t#endif\n\n\t#ifdef SPECULARMAP \n\t\tuniform sampler2D u_SpecularTexture;\n\t#endif\n\t#ifdef NORMALMAP \n\t\tuniform sampler2D u_NormalTexture;\n\t\tvarying vec3 v_Tangent;\n\t\tvarying vec3 v_Binormal;\n\t#endif\n#endif\n\n#ifdef FOG\n\tuniform float u_FogStart;\n\tuniform float u_FogRange;\n\tuniform vec3 u_FogColor;\n#endif\n\n\nuniform vec3 u_AmbientColor;\n\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\n\tvarying vec3 v_PositionWorld;\n#endif\n\n#include "ShadowHelper.glsl"\nvarying float v_posViewZ;\n#ifdef RECEIVESHADOW\n\t#if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\n\t\tuniform mat4 u_lightShadowVP[4];\n\t#endif\n\t#ifdef SHADOWMAP_PSSM1 \n\t\tvarying vec4 v_lightMVPPos;\n\t#endif\n#endif\n\nvoid main_castShadow()\n{\n\t//gl_FragColor=vec4(v_posViewZ,0.0,0.0,1.0);\n\tgl_FragColor=packDepth(v_posViewZ);\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\t\tfloat alpha = texture2D(u_DiffuseTexture,v_Texcoord0).w;\n\t\tif( alpha < u_AlphaTestValue )\n\t\t{\n\t\t\tdiscard;\n\t\t}\n\t#endif\n}\nvoid main_normal()\n{\n\tvec3 globalDiffuse=u_AmbientColor;\n\t#ifdef LIGHTMAP\t\n\t\tglobalDiffuse += DecodeLightmap(texture2D(u_LightMap, v_LightMapUV));\n\t#endif\n\t\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\tvec3 normal;\n\t\t#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\n\t\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\n\t\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\n\t\t#else\n\t\t\tnormal = normalize(v_Normal);\n\t\t#endif\n\t\tvec3 viewDir= normalize(v_ViewDir);\n\t#endif\n\t\n\tvec4 mainColor=u_DiffuseColor;\n\t#ifdef DIFFUSEMAP\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\n\t\tmainColor=mainColor*difTexColor;\n\t#endif \n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n\t\tmainColor=mainColor*v_Color;\n\t#endif \n    \n\t#ifdef ALPHATEST\n\t\tif(mainColor.a<u_AlphaTestValue)\n\t\t\tdiscard;\n\t#endif\n  \n\t\n\tvec3 diffuse = vec3(0.0);\n\tvec3 specular= vec3(0.0);\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\tvec3 dif,spe;\n\t\t#ifdef SPECULARMAP\n\t\t\tvec3 gloss=texture2D(u_SpecularTexture, v_Texcoord0).rgb;\n\t\t#else\n\t\t\t#ifdef DIFFUSEMAP\n\t\t\t\tvec3 gloss=vec3(difTexColor.a);\n\t\t\t#else\n\t\t\t\tvec3 gloss=vec3(1.0);\n\t\t\t#endif\n\t\t#endif\n\t#endif\n\n\t#ifdef LEGACYSINGLELIGHTING\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_DirectionLight,dif,spe);\n\t\t\tdiffuse+=dif;\n\t\t\tspecular+=spe;\n\t\t#endif\n\t\n\t\t#ifdef POINTLIGHT\n\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_PointLight,dif,spe);\n\t\t\tdiffuse+=dif;\n\t\t\tspecular+=spe;\n\t\t#endif\n\n\t\t#ifdef SPOTLIGHT\n\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_SpotLight,dif,spe);\n\t\t\tdiffuse+=dif;\n\t\t\tspecular+=spe;\n\t\t#endif\n\t#else\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t{\n\t\t\t\tif(i >= u_DirationLightCount)\n\t\t\t\t\tbreak;\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\n\t\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,directionLight,dif,spe);\n\t\t\t\tdiffuse+=dif;\n\t\t\t\tspecular+=spe;\n\t\t\t}\n\t\t#endif\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\n\t\t\t#ifdef POINTLIGHT\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t\t{\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\n\t\t\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,pointLight,dif,spe);\n\t\t\t\t\tdiffuse+=dif;\n\t\t\t\t\tspecular+=spe;\n\t\t\t\t}\n\t\t\t#endif\n\t\t\t#ifdef SPOTLIGHT\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t\t{\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\n\t\t\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,spotLight,dif,spe);\n\t\t\t\t\tdiffuse+=dif;\n\t\t\t\t\tspecular+=spe;\n\t\t\t\t}\n\t\t\t#endif\n\t\t#endif\n\t#endif\n\n\t#ifdef RECEIVESHADOW\n\t\tfloat shadowValue = 1.0;\n\t\t#ifdef SHADOWMAP_PSSM3\n\t\t\tshadowValue = getShadowPSSM3(u_shadowMap1,u_shadowMap2,u_shadowMap3,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\n\t\t#endif\n\t\t#ifdef SHADOWMAP_PSSM2\n\t\t\tshadowValue = getShadowPSSM2(u_shadowMap1,u_shadowMap2,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\n\t\t#endif \n\t\t#ifdef SHADOWMAP_PSSM1\n\t\t\tshadowValue = getShadowPSSM1(u_shadowMap1,v_lightMVPPos,u_shadowPSSMDistance,u_shadowPCFoffset,v_posViewZ,0.001);\n\t\t#endif\n\t\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse*shadowValue),mainColor.a);\n\t#else\n\t\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse),mainColor.a);\n\t#endif\n\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\t#ifdef RECEIVESHADOW\n\t\t\tgl_FragColor.rgb+=specular*shadowValue;\n\t\t#else\n\t\t\tgl_FragColor.rgb+=specular;\n\t\t#endif\n\t#endif\n\t  \n\t#ifdef FOG\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\n\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\n\t#endif\n}\n\nvoid main()\n{\n\t#ifdef CASTSHADOW\t\t\n\t\tmain_castShadow();\n\t#else\n\t\tmain_normal();\n\t#endif  \n}\n', P = '#include "Lighting.glsl";\n\nattribute vec4 a_Position;\n\n#ifdef GPU_INSTANCE\n\tattribute mat4 a_MvpMatrix;\n#else\n\tuniform mat4 u_MvpMatrix;\n#endif\n\n\n#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\n\tattribute vec2 a_Texcoord0;\n\tvarying vec2 v_Texcoord0;\n#endif\n\n#if defined(LIGHTMAP)&&defined(UV1)\n\tattribute vec2 a_Texcoord1;\n#endif\n\n#ifdef LIGHTMAP\n\tuniform vec4 u_LightmapScaleOffset;\n\tvarying vec2 v_LightMapUV;\n#endif\n\n#ifdef COLOR\n\tattribute vec4 a_Color;\n\tvarying vec4 v_Color;\n#endif\n\n#ifdef BONE\n\tconst int c_MaxBoneCount = 24;\n\tattribute vec4 a_BoneIndices;\n\tattribute vec4 a_BoneWeights;\n\tuniform mat4 u_Bones[c_MaxBoneCount];\n#endif\n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\tattribute vec3 a_Normal;\n\tvarying vec3 v_Normal; \n\tuniform vec3 u_CameraPos;\n\tvarying vec3 v_ViewDir; \n#endif\n\n#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\n\tattribute vec4 a_Tangent0;\n\tvarying vec3 v_Tangent;\n\tvarying vec3 v_Binormal;\n#endif\n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\n\t#ifdef GPU_INSTANCE\n\t\tattribute mat4 a_WorldMat;\n\t#else\n\t\tuniform mat4 u_WorldMat;\n\t#endif\n\tvarying vec3 v_PositionWorld;\n#endif\n\nvarying float v_posViewZ;\n#ifdef RECEIVESHADOW\n  #ifdef SHADOWMAP_PSSM1 \n  varying vec4 v_lightMVPPos;\n  uniform mat4 u_lightShadowVP[4];\n  #endif\n#endif\n\n#ifdef TILINGOFFSET\n\tuniform vec4 u_TilingOffset;\n#endif\n\nuniform mat4 u_ViewProjection;\nuniform vec4 u_bend;\n\nvoid main_castShadow()\n{\n\tvec4 position;\n\t#ifdef BONE\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n\t\tposition=skinTransform*a_Position;\n\t#else\n\t\tposition=a_Position;\n\t#endif\n\t#ifdef GPU_INSTANCE\n\t\tgl_Position = a_MvpMatrix * position;\n\t#else\n\t\tgl_Position = u_MvpMatrix * position;\n\t#endif\n\t\n\t//TODO没考虑UV动画呢\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\t\tv_Texcoord0=a_Texcoord0;\n\t#endif\n\tgl_Position=remapGLPositionZ(gl_Position);\n\tv_posViewZ = gl_Position.z;\n}\n\nvoid main_normal()\n{\n\tvec4 position;\n\t#ifdef BONE\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n\t\tposition=skinTransform*a_Position;\n\t#else\n\t\tposition=a_Position;\n\t#endif\n\t// #ifdef GPU_INSTANCE\n\t// \tgl_Position = a_MvpMatrix * position;\n\t// #else\n\t// \tgl_Position = u_MvpMatrix * position;\n\t// #endif\n\n\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\n\t\tmat4 worldMat;\n\t\t#ifdef GPU_INSTANCE\n\t\t\tworldMat = a_WorldMat;\n\t\t#else\n\t\t\tworldMat = u_WorldMat;\n\t\t#endif\n\t#endif\n\n\t//bend\n\tvec4 wpos = worldMat * position;\n\tfloat z = wpos.z - u_bend.w;\n\tz = max(0.0, z);\n\tfloat x = pow(u_bend.z * z, 3.0);\n\twpos.x = wpos.x + u_bend.x * x;\n\twpos.y = wpos.y + u_bend.y * x;\n\tgl_Position = u_ViewProjection * wpos;\n\t\n\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\tmat3 worldInvMat;\n\t\t#ifdef BONE\n\t\t\tworldInvMat=inverse(mat3(worldMat*skinTransform));\n\t\t#else\n\t\t\tworldInvMat=inverse(mat3(worldMat));\n\t\t#endif  \n\t\tv_Normal=a_Normal*worldInvMat;\n\t\t#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&defined(NORMALMAP)\n\t\t\tv_Tangent=a_Tangent0.xyz*worldInvMat;\n\t\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\n\t\t#endif\n\t#endif\n\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)\n\t\tv_PositionWorld=(worldMat*position).xyz;\n\t#endif\n\t\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\tv_ViewDir=u_CameraPos-v_PositionWorld;\n\t#endif\n\n\t#if defined(DIFFUSEMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\n\t\t#ifdef TILINGOFFSET\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\n\t\t#else\n\t\t\tv_Texcoord0=a_Texcoord0;\n\t\t#endif\n\t#endif\n\n\t#ifdef LIGHTMAP\n\t\t#ifdef SCALEOFFSETLIGHTINGMAPUV\n\t\t\t#ifdef UV1\n\t\t\t\tv_LightMapUV=vec2(a_Texcoord1.x,1.0-a_Texcoord1.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\n\t\t\t#else\n\t\t\t\tv_LightMapUV=vec2(a_Texcoord0.x,1.0-a_Texcoord0.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\n\t\t\t#endif \n\t\t\tv_LightMapUV.y=1.0-v_LightMapUV.y;\n\t\t#else\n\t\t\t#ifdef UV1\n\t\t\t\tv_LightMapUV=a_Texcoord1;\n\t\t\t#else\n\t\t\t\tv_LightMapUV=a_Texcoord0;\n\t\t\t#endif \n\t\t#endif \n\t#endif\n\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n\t\tv_Color=a_Color;\n\t#endif\n\n\t#ifdef RECEIVESHADOW\n\t\tv_posViewZ = gl_Position.w;\n\t\t#ifdef SHADOWMAP_PSSM1 \n\t\t\tv_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\n\t\t#endif\n\t#endif\n\tgl_Position=remapGLPositionZ(gl_Position);\n}\n\nvoid main()\n{\n\t#ifdef CASTSHADOW\n\t\tmain_castShadow();\n\t#else\n\t\tmain_normal();\n\t#endif\n}\n', N = Laya.Vector4, M = Laya.Shader3D, V = Laya.Material, B = Laya.VertexMesh, H = Laya.RenderState, G = Laya.Scene3DShaderDeclaration;
    class U extends Laya.Material {
        constructor() {
            super(), this._enableVertexColor = !1, this._albedoIntensity = 1, this._albedoColor = new N(1, 1, 1, 1), 
            this._enableLighting = !0, this._enableVertexColor = !1, this.setShaderName("M_BLINNPHONG"), 
            this._albedoIntensity = 1, this._albedoColor = new N(1, 1, 1, 1);
            var t = this._shaderValues;
            t.setVector(U.ALBEDOCOLOR, new N(1, 1, 1, 1)), t.setVector(U.MATERIALSPECULAR, new N(1, 1, 1, 1)), 
            t.setNumber(U.SHININESS, .078125), t.setNumber(V.ALPHATESTVALUE, .5), t.setVector(U.TILINGOFFSET, new N(1, 1, 0, 0)), 
            this._enableLighting = !0, this.renderMode = U.RENDERMODE_OPAQUE;
        }
        static __initShader__() {
            let t = {
                a_Position: B.MESH_POSITION0,
                a_Color: B.MESH_COLOR0,
                a_Normal: B.MESH_NORMAL0,
                a_Texcoord0: B.MESH_TEXTURECOORDINATE0,
                a_Texcoord1: B.MESH_TEXTURECOORDINATE1,
                a_BoneWeights: B.MESH_BLENDWEIGHT0,
                a_BoneIndices: B.MESH_BLENDINDICES0,
                a_Tangent0: B.MESH_TANGENT0,
                a_MvpMatrix: B.MESH_MVPMATRIX_ROW0,
                a_WorldMat: B.MESH_WORLDMATRIX_ROW0
            }, e = {
                u_Bones: M.PERIOD_CUSTOM,
                u_DiffuseTexture: M.PERIOD_MATERIAL,
                u_SpecularTexture: M.PERIOD_MATERIAL,
                u_NormalTexture: M.PERIOD_MATERIAL,
                u_AlphaTestValue: M.PERIOD_MATERIAL,
                u_DiffuseColor: M.PERIOD_MATERIAL,
                u_MaterialSpecular: M.PERIOD_MATERIAL,
                u_Shininess: M.PERIOD_MATERIAL,
                u_TilingOffset: M.PERIOD_MATERIAL,
                u_WorldMat: M.PERIOD_SPRITE,
                u_MvpMatrix: M.PERIOD_SPRITE,
                u_ViewProjection: M.PERIOD_CAMERA,
                u_LightmapScaleOffset: M.PERIOD_SPRITE,
                u_LightMap: M.PERIOD_SPRITE,
                u_CameraPos: M.PERIOD_CAMERA,
                u_Viewport: M.PERIOD_CAMERA,
                u_ProjectionParams: M.PERIOD_CAMERA,
                u_View: M.PERIOD_CAMERA,
                u_ReflectTexture: M.PERIOD_SCENE,
                u_ReflectIntensity: M.PERIOD_SCENE,
                u_FogStart: M.PERIOD_SCENE,
                u_FogRange: M.PERIOD_SCENE,
                u_FogColor: M.PERIOD_SCENE,
                u_DirationLightCount: M.PERIOD_SCENE,
                u_LightBuffer: M.PERIOD_SCENE,
                u_LightClusterBuffer: M.PERIOD_SCENE,
                u_AmbientColor: M.PERIOD_SCENE,
                u_shadowMap1: M.PERIOD_SCENE,
                u_shadowMap2: M.PERIOD_SCENE,
                u_shadowMap3: M.PERIOD_SCENE,
                u_shadowPSSMDistance: M.PERIOD_SCENE,
                u_lightShadowVP: M.PERIOD_SCENE,
                u_shadowPCFoffset: M.PERIOD_SCENE,
                "u_DirectionLight.color": M.PERIOD_SCENE,
                "u_DirectionLight.direction": M.PERIOD_SCENE,
                "u_PointLight.position": M.PERIOD_SCENE,
                "u_PointLight.range": M.PERIOD_SCENE,
                "u_PointLight.color": M.PERIOD_SCENE,
                "u_SpotLight.position": M.PERIOD_SCENE,
                "u_SpotLight.direction": M.PERIOD_SCENE,
                "u_SpotLight.range": M.PERIOD_SCENE,
                "u_SpotLight.spot": M.PERIOD_SCENE,
                "u_SpotLight.color": M.PERIOD_SCENE,
                u_bend: M.PERIOD_MATERIAL
            }, i = {
                s_Cull: M.RENDER_STATE_CULL,
                s_Blend: M.RENDER_STATE_BLEND,
                s_BlendSrc: M.RENDER_STATE_BLEND_SRC,
                s_BlendDst: M.RENDER_STATE_BLEND_DST,
                s_DepthTest: M.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: M.RENDER_STATE_DEPTH_WRITE
            }, s = M.add("M_BLINNPHONG", null, null, !0), n = new Laya.SubShader(t, e);
            s.addSubShader(n), n.addShaderPass(P, b, i), this.SHADERDEFINE_DIFFUSEMAP = M.getDefineByName("DIFFUSEMAP"), 
            this.SHADERDEFINE_NORMALMAP = M.getDefineByName("NORMALMAP"), this.SHADERDEFINE_SPECULARMAP = M.getDefineByName("SPECULARMAP"), 
            this.SHADERDEFINE_TILINGOFFSET = M.getDefineByName("TILINGOFFSET"), this.SHADERDEFINE_ENABLEVERTEXCOLOR = M.getDefineByName("ENABLEVERTEXCOLOR");
        }
        get _ColorR() {
            return this._albedoColor.x;
        }
        set _ColorR(t) {
            this._albedoColor.x = t, this.albedoColor = this._albedoColor;
        }
        get _ColorG() {
            return this._albedoColor.y;
        }
        set _ColorG(t) {
            this._albedoColor.y = t, this.albedoColor = this._albedoColor;
        }
        get _ColorB() {
            return this._albedoColor.z;
        }
        set _ColorB(t) {
            this._albedoColor.z = t, this.albedoColor = this._albedoColor;
        }
        get _ColorA() {
            return this._albedoColor.w;
        }
        set _ColorA(t) {
            this._albedoColor.w = t, this.albedoColor = this._albedoColor;
        }
        get _SpecColorR() {
            return this._shaderValues.getVector(U.MATERIALSPECULAR).x;
        }
        set _SpecColorR(t) {
            this._shaderValues.getVector(U.MATERIALSPECULAR).x = t;
        }
        get _SpecColorG() {
            return this._shaderValues.getVector(U.MATERIALSPECULAR).y;
        }
        set _SpecColorG(t) {
            this._shaderValues.getVector(U.MATERIALSPECULAR).y = t;
        }
        get _SpecColorB() {
            return this._shaderValues.getVector(U.MATERIALSPECULAR).z;
        }
        set _SpecColorB(t) {
            this._shaderValues.getVector(U.MATERIALSPECULAR).z = t;
        }
        get _SpecColorA() {
            return this._shaderValues.getVector(U.MATERIALSPECULAR).w;
        }
        set _SpecColorA(t) {
            this._shaderValues.getVector(U.MATERIALSPECULAR).w = t;
        }
        get _AlbedoIntensity() {
            return this._albedoIntensity;
        }
        set _AlbedoIntensity(t) {
            if (this._albedoIntensity !== t) {
                var e = this._shaderValues.getVector(U.ALBEDOCOLOR);
                N.scale(this._albedoColor, t, e), this._albedoIntensity = t, this._shaderValues.setVector(U.ALBEDOCOLOR, e);
            }
        }
        get _Shininess() {
            return this._shaderValues.getNumber(U.SHININESS);
        }
        set _Shininess(t) {
            t = Math.max(0, Math.min(1, t)), this._shaderValues.setNumber(U.SHININESS, t);
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(U.TILINGOFFSET).x;
        }
        set _MainTex_STX(t) {
            var e = this._shaderValues.getVector(U.TILINGOFFSET);
            e.x = t, this.tilingOffset = e;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(U.TILINGOFFSET).y;
        }
        set _MainTex_STY(t) {
            var e = this._shaderValues.getVector(U.TILINGOFFSET);
            e.y = t, this.tilingOffset = e;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(U.TILINGOFFSET).z;
        }
        set _MainTex_STZ(t) {
            var e = this._shaderValues.getVector(U.TILINGOFFSET);
            e.z = t, this.tilingOffset = e;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(U.TILINGOFFSET).w;
        }
        set _MainTex_STW(t) {
            var e = this._shaderValues.getVector(U.TILINGOFFSET);
            e.w = t, this.tilingOffset = e;
        }
        get _Cutoff() {
            return this.alphaTestValue;
        }
        set _Cutoff(t) {
            this.alphaTestValue = t;
        }
        set renderMode(t) {
            switch (t) {
              case U.RENDERMODE_OPAQUE:
                this.alphaTest = !1, this.renderQueue = V.RENDERQUEUE_OPAQUE, this.depthWrite = !0, 
                this.cull = H.CULL_BACK, this.blend = H.BLEND_DISABLE, this.depthTest = H.DEPTHTEST_LESS;
                break;

              case U.RENDERMODE_CUTOUT:
                this.renderQueue = V.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, 
                this.cull = H.CULL_BACK, this.blend = H.BLEND_DISABLE, this.depthTest = H.DEPTHTEST_LESS;
                break;

              case U.RENDERMODE_TRANSPARENT:
                this.renderQueue = V.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = H.CULL_BACK, this.blend = H.BLEND_ENABLE_ALL, this.blendSrc = H.BLENDPARAM_SRC_ALPHA, 
                this.blendDst = H.BLENDPARAM_ONE_MINUS_SRC_ALPHA, this.depthTest = H.DEPTHTEST_LESS;
                break;

              default:
                throw new Error("Material:renderMode value error.");
            }
        }
        get enableVertexColor() {
            return this._enableVertexColor;
        }
        set enableVertexColor(t) {
            this._enableVertexColor = t, t ? this._shaderValues.addDefine(U.SHADERDEFINE_ENABLEVERTEXCOLOR) : this._shaderValues.removeDefine(U.SHADERDEFINE_ENABLEVERTEXCOLOR);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(t) {
            this._MainTex_STX = t;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(t) {
            this._MainTex_STY = t;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(t) {
            this._MainTex_STZ = t;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(t) {
            this._MainTex_STW = t;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(U.TILINGOFFSET);
        }
        set tilingOffset(t) {
            t && (1 != t.x || 1 != t.y || 0 != t.z || 0 != t.w) ? this._shaderValues.addDefine(U.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(U.SHADERDEFINE_TILINGOFFSET), 
            this._shaderValues.setVector(U.TILINGOFFSET, t);
        }
        get albedoColorR() {
            return this._ColorR;
        }
        set albedoColorR(t) {
            this._ColorR = t;
        }
        get albedoColorG() {
            return this._ColorG;
        }
        set albedoColorG(t) {
            this._ColorG = t;
        }
        get albedoColorB() {
            return this._ColorB;
        }
        set albedoColorB(t) {
            this._ColorB = t;
        }
        get albedoColorA() {
            return this._ColorA;
        }
        set albedoColorA(t) {
            this._ColorA = t;
        }
        get albedoColor() {
            return this._albedoColor;
        }
        set albedoColor(t) {
            var e = this._shaderValues.getVector(U.ALBEDOCOLOR);
            N.scale(t, this._albedoIntensity, e), this._albedoColor = t, this._shaderValues.setVector(U.ALBEDOCOLOR, e);
        }
        get albedoIntensity() {
            return this._albedoIntensity;
        }
        set albedoIntensity(t) {
            this._AlbedoIntensity = t;
        }
        get specularColorR() {
            return this._SpecColorR;
        }
        set specularColorR(t) {
            this._SpecColorR = t;
        }
        get specularColorG() {
            return this._SpecColorG;
        }
        set specularColorG(t) {
            this._SpecColorG = t;
        }
        get specularColorB() {
            return this._SpecColorB;
        }
        set specularColorB(t) {
            this._SpecColorB = t;
        }
        get specularColorA() {
            return this._SpecColorA;
        }
        set specularColorA(t) {
            this._SpecColorA = t;
        }
        get specularColor() {
            return this._shaderValues.getVector(U.MATERIALSPECULAR);
        }
        set specularColor(t) {
            this._shaderValues.setVector(U.MATERIALSPECULAR, t);
        }
        get shininess() {
            return this._Shininess;
        }
        set shininess(t) {
            this._Shininess = t;
        }
        get albedoTexture() {
            return this._shaderValues.getTexture(U.ALBEDOTEXTURE);
        }
        set albedoTexture(t) {
            t ? this._shaderValues.addDefine(U.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(U.SHADERDEFINE_DIFFUSEMAP), 
            this._shaderValues.setTexture(U.ALBEDOTEXTURE, t);
        }
        get normalTexture() {
            return this._shaderValues.getTexture(U.NORMALTEXTURE);
        }
        set normalTexture(t) {
            t ? this._shaderValues.addDefine(U.SHADERDEFINE_NORMALMAP) : this._shaderValues.removeDefine(U.SHADERDEFINE_NORMALMAP), 
            this._shaderValues.setTexture(U.NORMALTEXTURE, t);
        }
        get specularTexture() {
            return this._shaderValues.getTexture(U.SPECULARTEXTURE);
        }
        set specularTexture(t) {
            t ? this._shaderValues.addDefine(U.SHADERDEFINE_SPECULARMAP) : this._shaderValues.removeDefine(U.SHADERDEFINE_SPECULARMAP), 
            this._shaderValues.setTexture(U.SPECULARTEXTURE, t);
        }
        get enableLighting() {
            return this._enableLighting;
        }
        set enableLighting(t) {
            this._enableLighting !== t && (t ? (this._disablePublicDefineDatas.remove(G.SHADERDEFINE_POINTLIGHT), 
            this._disablePublicDefineDatas.remove(G.SHADERDEFINE_SPOTLIGHT), this._disablePublicDefineDatas.remove(G.SHADERDEFINE_DIRECTIONLIGHT)) : (this._disablePublicDefineDatas.add(G.SHADERDEFINE_POINTLIGHT), 
            this._disablePublicDefineDatas.add(G.SHADERDEFINE_SPOTLIGHT), this._disablePublicDefineDatas.add(G.SHADERDEFINE_DIRECTIONLIGHT)), 
            this._enableLighting = t);
        }
        get depthWrite() {
            return this._shaderValues.getBool(U.DEPTH_WRITE);
        }
        set depthWrite(t) {
            this._shaderValues.setBool(U.DEPTH_WRITE, t);
        }
        get cull() {
            return this._shaderValues.getInt(U.CULL);
        }
        set cull(t) {
            this._shaderValues.setInt(U.CULL, t);
        }
        get blend() {
            return this._shaderValues.getInt(U.BLEND);
        }
        set blend(t) {
            this._shaderValues.setInt(U.BLEND, t);
        }
        get blendSrc() {
            return this._shaderValues.getInt(U.BLEND_SRC);
        }
        set blendSrc(t) {
            this._shaderValues.setInt(U.BLEND_SRC, t);
        }
        get blendDst() {
            return this._shaderValues.getInt(U.BLEND_DST);
        }
        set blendDst(t) {
            this._shaderValues.setInt(U.BLEND_DST, t);
        }
        get depthTest() {
            return this._shaderValues.getInt(U.DEPTH_TEST);
        }
        set depthTest(t) {
            this._shaderValues.setInt(U.DEPTH_TEST, t);
        }
        get bend() {
            return this._shaderValues.getVector(U.BEND);
        }
        set bend(t) {
            this._shaderValues.setVector(U.BEND, t);
        }
        clone() {
            var t = new U();
            return this.cloneTo(t), t;
        }
        cloneTo(t) {
            super.cloneTo(t);
            var e = t;
            e._enableLighting = this._enableLighting, e._albedoIntensity = this._albedoIntensity, 
            e._enableVertexColor = this._enableVertexColor, this._albedoColor.cloneTo(e._albedoColor);
        }
        setArgFromMat(t) {
            this.renderMode = t.renderMode || 0, this.enableLighting = t.enableLighting, this.albedoColor = t.albedoColor, 
            this.albedoTexture = t.albedoTexture, this.albedoIntensity = t.albedoIntensity, 
            this.specularColor = t.specularColor, this.specularTexture = t.specularTexture, 
            this.shininess = t.shininess, this.normalTexture = t.normalTexture, this.tilingOffset = t.tilingOffset;
        }
    }
    U.RENDERMODE_OPAQUE = 0, U.RENDERMODE_CUTOUT = 1, U.RENDERMODE_TRANSPARENT = 2, 
    U.ALBEDOTEXTURE = M.propertyNameToID("u_DiffuseTexture"), U.NORMALTEXTURE = M.propertyNameToID("u_NormalTexture"), 
    U.SPECULARTEXTURE = M.propertyNameToID("u_SpecularTexture"), U.ALBEDOCOLOR = M.propertyNameToID("u_DiffuseColor"), 
    U.MATERIALSPECULAR = M.propertyNameToID("u_MaterialSpecular"), U.SHININESS = M.propertyNameToID("u_Shininess"), 
    U.TILINGOFFSET = M.propertyNameToID("u_TilingOffset"), U.CULL = M.propertyNameToID("s_Cull"), 
    U.BLEND = M.propertyNameToID("s_Blend"), U.BLEND_SRC = M.propertyNameToID("s_BlendSrc"), 
    U.BLEND_DST = M.propertyNameToID("s_BlendDst"), U.DEPTH_TEST = M.propertyNameToID("s_DepthTest"), 
    U.DEPTH_WRITE = M.propertyNameToID("s_DepthWrite"), U.BEND = M.propertyNameToID("u_bend");
    class k {
        constructor() {
            this.wx = Laya.Browser.window.wx;
        }
        static get ins() {
            return this._ins || (this._ins = new k()), this._ins;
        }
        short() {
            console.log("vibrate short:" + C.ins.settingData.vibrate), C.ins.settingData.vibrate && this.wx && this.wx.vibrateShort();
        }
        long() {
            C.ins.settingData.vibrate && this.wx && this.wx.vibrateLong();
        }
    }
    var F = Laya.MathUtil;
    class z extends Laya.Script3D {
        constructor() {
            super(...arguments), 
            this.overtaking = !1, 
            this.cur_speed = 0, 
            this.want_speed = 0, 
            this.want_x = 0, 
            this.want_gradient = 0, 
            this.mt = 0, 
            this.wudi = !1, 
            this.wudi_time = 0, 
            this.fnum = 0, 
            this.fly_spos = new Laya.Vector3(), 
            this.fly_tpos = new Laya.Vector3(), 
            this.fly_t = 0, 
            this.fly_r = 1;
            this.isOnce = true;
        }
        get position() {
            return this._transfrom.position;
        }
        set position(t) {
            this._transfrom.position = t.clone();
        }
        onAwake() {
            this.wheel_f = this.owner.getChildByName("front"), this.wheel_b = this.owner.getChildByName("back"), 
            this._transfrom = this.owner.transform, this._transfrom.position.x = -o.road_center, 
            this._transfrom.position.y = 0, this._transfrom.position.z = 0, this._transfrom.position = this._transfrom.position, 
            this.cur_speed = o.car_speed;
        }
        onUpdate() {
            this.fnum++, 1 == o.ins.gameState && (this.cur_speed = F.lerp(this.cur_speed, this.want_speed, L.delta * this.want_gradient), 
            this._transfrom.position.x = F.lerp(this._transfrom.position.x, this.overtaking ? o.road_center : -o.road_center, L.delta * this.want_gradient)), 
            -1 != o.ins.gameState && (this._transfrom.position.z += L.delta * this.cur_speed, 
            this._transfrom.position = this._transfrom.position), this.mt += L.delta, this._transfrom.localScaleY = 1 + .01 * Math.sin(50 * this.mt), 
            o.carportIsOpen && (this.wheel_f.transform.localRotationEulerX += 8, this.wheel_b.transform.localRotationEulerX += 8), 
            this.wudi && (this.wudi_time -= L.delta, this.wudi_time <= 0 && this.finishWudi()), 
            1 == o.ins.gameState && (this.findPropAcce(), this.overtakingCheck(), this.collisionDetection());
        }
        findPropAcce() {
            1 == o.ins.gameState && (null == this.propAcce ? (this.fnum++, this.fnum % 5 == 0 && (this.propAcce = j.ins.prop_mgr.getProp(this._transfrom.position.z))) : this.propAcce.refreshXPos(this._transfrom.position) && (this.propAcce = null, 
            this.startWudi()));
        }
        startWudi() {
            this.want_speed = o.car_wudi_speed, this.want_gradient = o.car_wudi_acc, this.wudi = !0, 
            this.wudi_time = o.wudi_time, a.ins.event(a.PLALYER_SPEED_CHANGE, 2), this.playFire(), 
            this.overtaking || v.ins.playOv();
        }
        finishWudi() {
            this.overtaking ? (this.want_speed = o.car_ov_speed, this.want_gradient = o.car_wudi_dec, 
            a.ins.event(a.PLALYER_SPEED_CHANGE, 1)) : (this.want_speed = o.car_speed, this.want_gradient = o.car_wudi_dec, 
            a.ins.event(a.PLALYER_SPEED_CHANGE, 0), v.ins.stopOv(), this.stopFire()), this.wudi = !1;
        }
        startOvertaking() {
            u.isOpen || (
                this.wudi || (
                    this.want_speed = o.car_ov_speed, 
                    this.want_gradient = o.car_ov_acc, 
                    a.ins.event(a.PLALYER_SPEED_CHANGE, 1), 
                    v.ins.playOv()
                ), 
                this.playFire(), 
                this.overtaking = !0
            );
        }
        finishOvertaking() {
            this.wudi || (this.want_speed = o.car_speed, this.want_gradient = o.car_ov_dec, 
            a.ins.event(a.PLALYER_SPEED_CHANGE, 0), v.ins.stopOv(), this.stopFire()), this.overtaking = !1;
        }
        collisionDetection() {
            let t = t => !t.isBeHit && Math.abs(t.transform.position.z - this._transfrom.position.z) < 1.8 && Math.abs(t.transform.position.x - this._transfrom.position.x) < 1 && (t.isBeHit = !0, 
            !0);
            for (let e = 0; e < j.ins.car_mgr.carListL.length; e++) if (t(j.ins.car_mgr.carListL[e])) return void this.onCollision(j.ins.car_mgr.carListL[e]);
            for (let e = 0; e < j.ins.car_mgr.carListR.length; e++) if (t(j.ins.car_mgr.carListR[e])) return void this.onCollision(j.ins.car_mgr.carListR[e]);
        }
        onCollision(t) {
            k.ins.short(), 1 == o.ins.gameState && (this.wudi ? (t.collision(!0), 1 == t.dir && this.onOvCar(), 
            this.getGold(1)) : (o.ins.gameState = -1, a.ins.event(a.GAME_OVER), this.removeMouseEvent(), 
            t.collision(!1), this.addForce(), k.ins.long(), v.ins.stopOv(), this.stopFire()), 
            v.ins.playCrash());
        }
        addForce() {
            this.fly_t = 0, this.fly_r = d.random(3, 6) * (Math.random() > .5 ? 1 : -1), this.fly_spos.setValue(this._transfrom.position.x, this._transfrom.position.y, this._transfrom.position.z), 
            this.fly_tpos.x = d.random(-3, 3), this.fly_tpos.z = this._transfrom.position.z + d.random(20, 50), 
            this.fly_tpos.y = 5, this.owner.frameLoop(1, this, this.fly);
        }
        fly() {
            this.fly_t += .5 * L.delta, this._transfrom.position.x = F.lerp(this.fly_spos.x, this.fly_tpos.x, this.fly_t), 
            this._transfrom.position.z = F.lerp(this.fly_spos.z, this.fly_tpos.z, this.fly_t), 
            this._transfrom.position.y = Math.sin(this.fly_t * Math.PI) * this.fly_tpos.y + this.fly_t, 
            this._transfrom.position = this._transfrom.position, this._transfrom.localRotationEulerX += this.fly_r, 
            this._transfrom.localRotationEulerY += this.fly_r, this.fly_t >= 1 && this.owner.clearTimer(this, this.fly);
        }
        addMouseEvent() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startOvertaking), 
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.finishOvertaking);
        }
        removeMouseEvent() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.startOvertaking), 
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.finishOvertaking);
        }
        onDestroy() {
            this.removeMouseEvent();
        }
        gameReset() {
            this.cur_speed = this.want_speed = o.car_speed, this.overtaking = !1, this.wudi = !1, 
            this.wudi_time = 0, this._transfrom.localRotationEuler = new Laya.Vector3(0, 0, 0), 
            this._transfrom.position.x = -o.road_center, this._transfrom.position.y = 0, this._transfrom.position.z = 0, 
            this._transfrom.position = this._transfrom.position, this.propAcce = null;
        }
        gameStart() {
            this.addMouseEvent(), this.startOvertaking();
        }
        gameRelife(t) {
            this.cur_speed = this.want_speed = o.car_speed, this.overtaking = !1, this.wudi = !1, 
            this.wudi_time = 0, this._transfrom.localRotationEuler = new Laya.Vector3(0, 0, 0), 
            this._transfrom.position.x = -o.road_center, this._transfrom.position.y = 0, this._transfrom.position.z = t, 
            this._transfrom.position = this._transfrom.position, this.propAcce = null, this.addMouseEvent();
        }
        overtakingCheck() {
            1 == o.ins.gameState && this.fnum % 3 == 0 && j.ins.car_mgr.overtakingCheck(this._transfrom.position.z) && (this.getGold(0), 
            this.onOvCar(), k.ins.short());
        }
        getGold(t) {
            v.ins.playGetCoin(), a.ins.event(a.GET_GOLD, [ t, this._transfrom.position ]);
        }
        onOvCar() {
            o.ins.ov_num++, c.ins.op_surpass(o.ins.ov_num);
        }
        setFire(t, e) {
            this._fire0 = t, this._fire1 = e, this.owner.addChild(this._fire0), this.owner.addChild(this._fire1), 
            this._fire0.transform.localPosition = new Laya.Vector3(.35, .1, -1), this._fire1.transform.localPosition = new Laya.Vector3(-.35, .1, -1);
        }
        playFire() {
            this._fire0 && this._fire0.particleSystem.play(), this._fire1 && this._fire1.particleSystem.play();
        }
        stopFire() {
            this._fire0 && this._fire0.particleSystem.isPlaying && (this._fire0.particleSystem.stop(), 
            this._fire1.particleSystem.stop());
        }
    }
    class W {
        constructor(t) {
            this._trail0_time = 0, this._trail1_time = 0, this._scene = t, this._trail0 = this._scene.getChildByName("Trail"), 
            this._trail0.trailFilter.alignment = 1, this._trail0.removeSelf(), this._trail1 = this._trail0.clone(), 
            this._trail0.name = "trail0", this._trail1.name = "trail1", this._fire0 = this._scene.getChildByName("speed_0"), 
            this._fire0.removeSelf(), this._fire1 = this._fire0.clone(), this._trail0_time = this._trail0.trailFilter.time, 
            this._trail1_time = this._trail1.trailFilter.time, a.ins.on(a.GAME_OVER, this, this.onGameOver), 
            a.ins.on(a.GAME_RELIFE, this, this.onGameRelife), a.ins.on(a.GAME_RESERT, this, this.onGameRelife);
        }
        createPlayer(t) {
            if (this._cur_car_name != t) {
                this._cur_car_name = t;
                let e = null;
                this._cur_palyer && (e = this._cur_palyer.position, this._trail0.removeSelf(), this._trail1.removeSelf(), 
                this._fire0.removeSelf(), this._fire1.removeSelf(), this._cur_palyer.owner.destroy(!0));
                let i = T.ins.get_new_car(t);
                this._scene.addChild(i), this._cur_palyer = i.addComponent(z), e && (this._cur_palyer.position = e), 
                i.addChild(this._trail0), i.addChild(this._trail1), this._trail0.transform.localPositionY = this._trail1.transform.localPositionY = .1, 
                this._trail0.transform.localPositionX = .4, this._trail1.transform.localPositionX = -.4, 
                this._cur_palyer.setFire(this._fire0, this._fire1);
            }
            return this._cur_palyer;
        }
        onGameOver() {
            this._trail0.trailFilter.time = 0, this._trail1.trailFilter.time = 0;
        }
        onGameRelife() {
            this._trail0.trailFilter.time = this._trail0_time, this._trail1.trailFilter.time = this._trail1_time;
        }
    }
    class X extends Laya.Script3D {
        constructor() {
            super(...arguments), this.l = 0;
        }
        init() {
            this.transform = this.owner.transform, this.transform.localPositionX = this.transform.localPositionZ = 0, 
            this.transform.localPositionY = 1.78, this.transform.localRotationEulerY = 180 * Math.random();
        }
        onUpdate() {
            this.transform.localRotationEulerY += 2;
        }
        refreshXPos(t) {
            return this.l = this.transform.position.z - t.z, this.l = Math.max(this.l, 0), this.transform.localPositionX = Laya.MathUtil.lerp(0, t.x, (3 - this.l) / 3), 
            0 == this.l && (j.ins.prop_mgr.recoverPropAcce(this.owner.parent), !0);
        }
    }
    class Y {
        constructor(t, e) {
            this.prop_acce_list = [], this.prop_acce_name = "prop_acce", this.prop_acce_prefab = t.getChildByName(this.prop_acce_name), 
            this.prop_acce_prefab.removeSelf(), this._mat = e;
            let i = this.prop_acce_prefab.meshRenderer.sharedMaterial;
            this._mat.setArgFromMat(i), this.prop_acce_prefab.meshRenderer.sharedMaterial = this._mat;
        }
        addPropAcce(t) {
            let e = Laya.Pool.getItemByCreateFun(this.prop_acce_name, () => {
                let e = Laya.Sprite3D.instantiate(this.prop_acce_prefab, t);
                return e.addComponent(X), e;
            });
            t.addChild(e), e.getComponent(X).init(), this.prop_acce_list.push(e);
        }
        recoverPropAcce(t) {
            if (t && t.numChildren > 0) {
                let e = t.getChildByName(this.prop_acce_name);
                if (e) {
                    let t = this.prop_acce_list.findIndex(t => t.id == e.id);
                    -1 != t ? this.prop_acce_list.splice(t, 1) : console.log("prop acce: recover error !!!!!!!"), 
                    e.removeSelf(), Laya.Pool.recover(this.prop_acce_name, e);
                }
            }
        }
        gameRelife() {
            this.prop_acce_list.forEach(t => {
                t.getComponent(X).init();
            });
        }
        getProp(t) {
            for (let e = 0; e < this.prop_acce_list.length; e++) if (t < this.prop_acce_list[e].transform.position.z && this.prop_acce_list[e].transform.position.z - t < 3) return this.prop_acce_list[e].getComponent(X);
            return null;
        }
    }
    class K extends Laya.Script3D {
        constructor() {
            super(...arguments), this.x = 0, this.lerp = 0, this.randR = 0;
        }
        init(t) {
            this.transform = this.owner.transform, this.transform.position.setValue(t.x, t.y, t.z), 
            this.transform.position = this.transform.position, this.playerPos = t, this.x = t.x, 
            this.randR = d.random(-8, 8), this.tagetPos = new Laya.Vector3(), this.tagetPos.x = d.random(-2, 2), 
            this.tagetPos.z = d.random(-2, 2), this.tagetPos.y = 2, this.lerp = 0;
        }
        onUpdate() {
            this.lerp += 1.2 * L.delta, this.transform.position.x = this.x + this.tagetPos.x * this.lerp, 
            this.transform.position.z = this.playerPos.z + this.tagetPos.z * this.lerp, this.transform.position.y = this.playerPos.y + .8 + this.tagetPos.y * Math.sin(this.lerp * Math.PI), 
            this.transform.position = this.transform.position, this.transform.localRotationEulerX += this.randR, 
            this.transform.localRotationEulerY += this.randR, this.lerp >= 1 && (this.owner.removeSelf(), 
            Laya.Pool.recover(K.signName, this.owner));
        }
    }
    K.signName = "gold";
    class Z {
        constructor(t) {
            this.gold_refab = t.getChildByName("gold"), this.gold_refab.removeSelf(), this.gold_root = new Laya.Sprite3D("gold_root"), 
            t.addChild(this.gold_root), this.gold_root.transform.position = new Laya.Vector3(0, 0, 0), 
            a.ins.on(a.GET_GOLD, this, this.onGetGold);
        }
        onGetGold(t, e) {
            let i = 0;
            0 == t && (i = 3, o.ins.get_coin += 10), 1 == t && (i = 6, o.ins.get_coin += 20);
            let s = () => Laya.Pool.getItemByCreateFun(K.signName, () => {
                let t = Laya.Sprite3D.instantiate(this.gold_refab);
                return t.addComponent(K), t;
            });
            for (let t = 0; t < i; t++) {
                let t = s();
                this.gold_root.addChild(t), t.getComponent(K).init(e);
            }
        }
    }
    class j extends Laya.Script3D {
        constructor() {
            super(...arguments), 
            this.mat_bend = new Laya.Vector4(.5, .007, -.03, 0), 
            this._screenPos = new Laya.Vector3(), 
            this.bend_x = 0, 
            this.bend_x_sign = 1, 
            this.isReset = !1;
        }
        static get ins() {
            if (null == this._ins) {
                let t = T.ins.main_scene;
                this._ins = t.addComponent(j), 
                this._ins._m_scene = t;
            }
            return this._ins;
        }
        get road_mgr() {
            return this._road_mgr;
        }
        get car_mgr() {
            return this._car_mgr;
        }
        get camera_mgr() {
            return this._camera_mgr;
        }
        get prop_mgr() {
            return this._prop_mgr;
        }
        get player_screen_pos() {
            return this._camera_mgr.camera.worldToViewportPoint(this._player.position, this._screenPos), 
            this._screenPos;
        }
        init() {
            this.car_mat  = new U(), 
            this.road_mat = new U(), 
            this.prop_mat = new U(), 
            Laya.stage.addChildAt(this._m_scene, 0), 
            this._m_scene.addComponent(L), 
            this._camera_mgr    = this._m_scene.getChildByName("CameraMgr").addComponent(O), 
            this._road_mgr      = this._m_scene.getChildByName("RoadMgr").addComponent(I),  this._road_mgr.mat = this.road_mat, 
            this._car_mgr       = this._m_scene.getChildByName("CarMgr").addComponent(w),   this._car_mgr.mat  = this.car_mat, 
            this._sky_mgr       = this._m_scene.getChildByName("SkyMgr").addComponent(D),   this._sky_mgr.setSky("sky1"), 
            this.fog(), 
            this._carport = new W(this._m_scene), 
            this.showPlayerCar(o.ins.user_data.equ_car), 
            this._prop_mgr = new Y(this._m_scene, this.prop_mat), 
            this._gold_mgr = new Z(this._m_scene), 
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.test), 
            a.ins.on(a.GAME_START, this, this.onGameStart), 
            a.ins.on(a.GAME_RELIFE, this, this.onGameRelife), 
            a.ins.on(a.GAME_OVER, this, this.onGameOver), 
            a.ins.on(a.GAME_RESERT, this, this.onGameReset), 
            a.ins.on(a.OPEN_CARPORT, this, this.onOpenCarport), 
            a.ins.on(a.CLOSE_CARPORT, this, this.onCloseCarport), 
            a.ins.on(a.CARPORT_USE_CAR, this, this.showPlayerCar);
        }
        fog() {
            this._m_scene.enableFog = !0;
        }
        showPlayerCar(t) {
            this._player = this._carport.createPlayer(t);
        }
        onUpdate() {
            this._camera_mgr.target     = this._player.position, 
            this._road_mgr.camera_zpos  = this._camera_mgr.zpos, 
            this._car_mgr.camera_zpos   = this._camera_mgr.zpos, 
            this._sky_mgr.camera_zpos   = this._camera_mgr.zpos, 
            this.mat_bend.w     = this._camera_mgr.zpos, 
            this.prop_mat.bend  = this.car_mat.bend = this.road_mat.bend = this.mat_bend, 
            this.bend();
        }
        bend() {
            1 == o.ins.gameState && 
            (
                this.mat_bend.x += L.delta * this.bend_x_sign * .02, 
                (this.bend_x_sign > 0 && this.mat_bend.x >= this.bend_x || this.bend_x_sign < 0 && this.mat_bend.x <= this.bend_x) 
                && (this.bend_x = d.random(.4, .5) * (Math.random() > .5 ? 1 : -1), 
                this.bend_x_sign = Math.sign(this.bend_x))
            );
        }
        onGameReset() {
            this.isReset || (
                this.isReset = !0, 
                o.ins.reset(), 
                this._player.gameReset(), 
                this._camera_mgr.gameReset(), 
                this._car_mgr.gameReset(), 
                this._road_mgr.gameReset()
            );
        }
        onGameStart() {
            this.isReset = !1, 
            this._player.gameStart(), 
            this._car_mgr.gameStart(), 
            this._camera_mgr.gameStart(), 
            o.ins.gameState = 1, 
            c.ins.op_game_start();
        }
        onGameRelife() {
            this._car_mgr.gameRelife(), 
            this._player.gameRelife(this._car_mgr.relifeZpos()), 
            this._prop_mgr.gameRelife(), 
            o.ins.gameState = 1, 
            o.ins.life_num--;
        }
        onGameOver() {
            o.ins.gameState = -1, 
            this._car_mgr.gameOver(), 
            this._camera_mgr.gameOver();
        }
        onOpenCarport() {
            this._camera_mgr.onOpenCarport(), 
            o.carportIsOpen = !0;
        }
        onCloseCarport() {
            this._camera_mgr.onCloseCarport(), 
            o.carportIsOpen = !1;
        }
        onDestroy() {
            a.ins.off(a.GAME_START, this, this.onGameStart), 
            a.ins.off(a.GAME_RELIFE, this, this.onGameRelife), 
            a.ins.off(a.GAME_OVER, this, this.onGameOver), 
            a.ins.off(a.GAME_RESERT, this, this.onGameReset), 
            a.ins.off(a.OPEN_CARPORT, this, this.onOpenCarport), 
            a.ins.off(a.CLOSE_CARPORT, this, this.onCloseCarport), 
            a.ins.off(a.CARPORT_USE_CAR, this, this.showPlayerCar);
        }
        test(t) {
            switch (t.keyCode) {
              case Laya.Keyboard.LEFT:
                this.mat_bend.x += .02;
                break;

              case Laya.Keyboard.RIGHT:
                this.mat_bend.x -= .02;
            }
        }
    }
    class J extends e.View.FixCarUI {
        constructor() {
            super(...arguments), this.cd_num = 10, this.bannerisShow = !1, this._v = 0;
        }
        set v(t) {
            this._v = Math.max(0, t), this.progress.value = this._v;
        }
        get v() {
            return this._v;
        }
        onOpened() {
            this.createScene(), this.v = 0, this.btn_fix.on(Laya.Event.CLICK, this, this.btnFixHandle), 
            this.timer.frameLoop(1, this, this.progressHnadle), Laya.stage.on(c.WX_ON_SHOW, this, this.onShowHandle), 
            this.cd.text = this.cd_num.toString(), this.timerLoop(1e3, this, this._cd), _.ins.hideBanner(), 
            m.ad_data_home ? m.setupList(this.list1, this.timer, m.ad_data_home.length - 4, "h", 15e3, 3e3) : this.zsad.visible = !1;
        }
        _cd() {
            this.cd_num--, this.cd.text = this.cd_num.toString(), this.cd_num < 0 && (n.close(this), 
            a.ins.event(J.FIXCAR_CLOSED));
        }
        progressHnadle() {
            this.v -= .025 * this.v;
        }
        btnFixHandle() {
            k.ins.short(), this.v += .25 * (1 - this.v), this.v >= .5 && (this.bannerisShow = _.ins.showBanner(), 
            this.bannerisShow || (n.close(this), a.ins.event(J.FIXCAR_CLOSED)), this.btn_fix.visible = !1, 
            this.btn_fix.y = Laya.stage.height - 380, this.timer.once(1500, this, () => {
                this.btn_fix.visible = !0;
            }));
        }
        onShowHandle() {
            this.bannerisShow && (n.close(this), a.ins.event(J.FIXCAR_CLOSED, !0));
        }
        createScene() {
            let t = T.ins.get_new_car(o.ins.user_data.equ_car);
            if (t) {
                this.skinScene = new Laya.Scene3D(), this.skinScene.ambientColor = new Laya.Vector3(.6, .6, .6);
                let e = this.skinScene.addChild(new Laya.Camera());
                e.clearFlag = Laya.Camera.CLEARFLAG_DEPTHONLY;
                let i = Laya.stage.clientScaleX, s = Laya.stage.clientScaleY, n = new Laya.Point(0, 0);
                this.car.localToGlobal(n, !1, this), e.viewport = new Laya.Viewport(n.x * i, n.y * s, this.car.width * i, this.car.height * s), 
                this.skinScene.addChild(new Laya.DirectionLight()).transform.localRotationEuler = new Laya.Vector3(-45, 0, 0), 
                e.transform.position = new Laya.Vector3(0, .8, 2), e.transform.localRotationEulerX = -20, 
                this.skinScene.addChild(t), this.addChild(this.skinScene), t.transform.localPositionX = 0, 
                t.transform.localPositionY = 0, t.transform.localPositionZ = 0, t.transform.localRotationEulerY = -50;
            } else console.log("------ get cmode faile");
        }
        onClosed() {
            this.skinScene.destroy(!0), this.timer.clear(this, this._cd), this.btn_fix.off(Laya.Event.CLICK, this, this.btnFixHandle), 
            Laya.stage.off(c.WX_ON_SHOW, this, this.onShowHandle), this.timer.clear(this, this.progressHnadle);
        }
    }
    J.FIXCAR_CLOSED = "FIXCAR_CLOSED";
    class Q extends e.View.GameUI {
        constructor() {
            super(...arguments), this.cur_wudi_time = 0, this.cur_get_coin = 0, this.pool_sign_getcoin = "on_get_coin", 
            this.temp_player_pos = new Laya.Vector3();
        }
        onOpened(t) {
            this.setGuidePos(t), 
            this.onOvCar(), 
            // this.coin_g.y = c.ins.menuInfo.top + 110, 
            // this.ovinfo.y = c.ins.menuInfo.top + 110, 
            this.cur_get_coin = o.ins.get_coin, 
            this.get_coin.text = this.cur_get_coin.toString(), 
            this.get_coin_info.visible = !1, 
            this.traffic_ifo.visible = !1, 
            this.cd.visible = !1, 
            this.speed_tip.visible = !1, 
            a.ins.on(a.PLALYER_SPEED_CHANGE, this, this.onSpeedChangeHandle), 
            a.ins.on(a.GAME_OVER, this, this.onGameOver), 
            a.ins.on(a.MODEL_GET_COIN, this, this.onGetCoin), 
            a.ins.on(a.MODEL_OV_CAR, this, this.onOvCar), 
            a.ins.on(J.FIXCAR_CLOSED, this, this.onFixCarClose), 
            Laya.stage.once(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), 
            l.ins.wudian && _.ins.showBanner();
        }
        onGetCoin() {
            let t = Laya.Pool.getItemByCreateFun(this.pool_sign_getcoin, () => {
                let t = new Laya.Text();
                return t.color = this.get_coin_info.color, t.fontSize = this.get_coin_info.fontSize, 
                t.stroke = this.get_coin_info.stroke, t.strokeColor = this.get_coin_info.strokeColor, 
                t.width = this.get_coin_info.width, t.height = this.get_coin_info.height, t.pivotX = this.get_coin_info.pivotX, 
                t.pivotY = this.get_coin_info.pivotY, t;
            });
            this.addChild(t), t.text = "+" + (o.ins.get_coin - this.cur_get_coin), this.cur_get_coin = o.ins.get_coin;
            let e = j.ins.player_screen_pos;
            t.pos(e.x, e.y - 50), t.alpha = .6, t.scale(.6, .6);
            let i = t.x + 100 * d.random(-1, 1), s = t.y - 50 * d.random(1, 2);
            Laya.Tween.to(t, {
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
                x: i,
                y: s
            }, 800, Laya.Ease.expoOut, Laya.Handler.create(this, () => {
                t.removeSelf(), Laya.Pool.recover(this.pool_sign_getcoin, t);
            })), this.get_coin.text = o.ins.get_coin.toString();
        }
        onOvCar() {
            this.ov_num.text = o.ins.ov_num.toString();
        }
        onGameOver() {
            this.traffic_ifo.scale(.5, .5), this.traffic_ifo.alpha = .5, this.traffic_ifo.visible = !0;
            let t = j.ins.player_screen_pos;
            this.traffic_ifo.pos(t.x, t.y - 100), Laya.Tween.to(this.traffic_ifo, {
                scaleX: 1.2,
                scaleY: 1.2,
                alpha: 1
            }, 1e3, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                this.traffic_ifo.visible = !1;
            })), this.timerOnce(1e3, this, this.jumpView);
        }
        jumpView() {
            if (l.ins.wudian && 0 == o.ins.play_times) return o.ins.play_times++, void n.open(J, !1);
            o.ins.play_times++, 3 == o.ins.play_times && (o.ins.play_times = 0), this.jumpView_next();
        }
        jumpView_next() {
            let t = () => {
                o.ins.life_num > 0 ? n.open(E) : n.open(g);
            };
            l.ins.canOpenFullScreenJump ? n.open(u, !0, Laya.Handler.create(this, t)) : t();
        }
        onSpeedChangeHandle(t) {
            2 == t && (this.cur_wudi_time = o.wudi_time, this.speed_tip.visible || (this.cd.visible = !0, 
            this.speed_tip.x = 770, this.speed_tip.visible = !0, Laya.Tween.to(this.speed_tip, {
                x: -8
            }, 500, Laya.Ease.cubicIn), this.timer.frameLoop(1, this, this.wudiTimer)));
        }
        wudiTimer() {
            this.cdv.text = this.cur_wudi_time.toFixed(1) + "s", this.temp_player_pos = j.ins.player_screen_pos, 
            this.cd.x = this.temp_player_pos.x, this.cd.y = this.temp_player_pos.y - 80, this.speed_info.text = "Invincible " + this.cur_wudi_time.toFixed(1) + "s", 
            this.cur_wudi_time -= L.delta, this.cur_wudi_time < 0 && (this.timer.clear(this, this.wudiTimer), 
            this.speed_tip.visible = !1, this.cd.visible = !1);
        }
        setGuidePos(t) {
            this.guide.y = t, Laya.Tween.to(this.guide, {
                y: j.ins.player_screen_pos.y + 50
            }, 600, Laya.Ease.sineOut);
        }
        onMouseUpHandle() {
            this.guide.destroy(!0);
        }
        onFixCarClose(t = !1) {
            t ? a.ins.event(a.GAME_RELIFE) : this.jumpView_next();
        }
        onClosed() {
            this.clearTimer(this, this.jumpView), this.timer.clear(this, this.wudiTimer), a.ins.off(a.PLALYER_SPEED_CHANGE, this, this.onSpeedChangeHandle), 
            a.ins.off(a.GAME_OVER, this, this.onGameOver), a.ins.off(a.MODEL_GET_COIN, this, this.onGetCoin), 
            a.ins.off(a.MODEL_OV_CAR, this, this.onOvCar), a.ins.off(J.FIXCAR_CLOSED, this, this.onFixCarClose), 
            Laya.stage.once(Laya.Event.MOUSE_UP, this, this.onMouseUpHandle), Laya.Pool.clearBySign(this.pool_sign_getcoin);
        }
    }
    class q extends e.View.CarportUI {
        constructor() {
            super(...arguments), this.m_idx = 0;
        }
        onOpened() {
            this.m_data = o.ins.carport, 
            this.m_idx = this.m_data.findIndex(t => t.car_name == o.ins.user_data.equ_car), 
            this.refreshBtnState(), 
            // this.coin_g.y = c.ins.menuInfo.top + 100, 
            this.setInfo(), 
            a.ins.on(a.MODEL_USER_DATA_CHANGE, this, this.setInfo), 
            this.btn_back.on(Laya.Event.CLICK, this, this.btnBackHandle), 
            this.btn_use.on(Laya.Event.CLICK, this, this.btnUseHandle), 
            this.btn_buy.on(Laya.Event.CLICK, this, this.btnBuyHandle), 
            this.btn_left.on(Laya.Event.CLICK, this, this.btnLeftHandle), 
            this.btn_right.on(Laya.Event.CLICK, this, this.btnRightHandle), 
            a.ins.event(a.OPEN_CARPORT), _.ins.showBanner();
        }
        setInfo() {
            this.coin.text = o.ins.user_data.coin.toString();
        }
        refreshBtnState() {
            0 == this.m_idx ? (
                this.btn_left.visible = !1, 
                this.btn_right.visible = !0
            ) : 
                this.m_idx == this.m_data.length - 1 ? (
                    this.btn_right.visible = !1, 
                    this.btn_left.visible = !0
                ) : (
                    this.btn_right.visible = !0, 
                    this.btn_left.visible = !0
                );
            console.log(this.m_idx);
            let t = this.m_data[this.m_idx];
            this.isOwnedCar(t.car_name) ? (
                this.btn_buy.visible = !1, 
                this.btn_use.visible = !0
            ) : (
                this.price.text = t.car_price.toString(), 
                this.btn_buy.visible = !0, 
                this.btn_use.visible = !1
            ), 
            a.ins.event(a.CARPORT_USE_CAR, t.car_name);
        }
        isOwnedCar(t) {
            return -1 != o.ins.user_data.has_cars.indexOf(t);
        }
        btnBackHandle() {
            a.ins.event(a.CLOSE_CARPORT), n.open($);
        }
        btnUseHandle() {
            let t = this.m_data[this.m_idx];
            if (o.ins.user_data.equ_car != t.car_name) {
                //l.ins.equCar(t.car_name);
                o.ins.user_data.equ_car = t;
                let e = o.ins.user_data;
                e.equ_car = t.car_name, o.ins.user_data = e, this.btnBackHandle();
            } else this.btnBackHandle();
        }
        btnBuyHandle() {
            let t = this.m_data[this.m_idx];
            o.ins.user_data.coin >= t.car_price ?
                // l.ins.buyCar(t.car_name, this, () => {
                //     (n.showToast("购买成功"), this.refreshBtnState());
                // }) 
                (o.ins.user_data.has_cars.push(t.car_name),
                o.ins.user_data.coin -= t.car_price,
                o.ins.user_data = o.ins.user_data,
                this.refreshBtnState())
            :   
            n.showToast("金币不足");
        }
        btnLeftHandle() {
            this.m_idx--, this.refreshBtnState();
        }
        btnRightHandle() {
            this.m_idx++, this.refreshBtnState();
        }
        onClosed() {
            this.btn_back.off(Laya.Event.CLICK, this, this.btnBackHandle), this.btn_use.off(Laya.Event.CLICK, this, this.btnUseHandle), 
            this.btn_buy.off(Laya.Event.CLICK, this, this.btnBuyHandle), this.btn_left.off(Laya.Event.CLICK, this, this.btnLeftHandle), 
            this.btn_right.off(Laya.Event.CLICK, this, this.btnRightHandle), a.ins.off(a.MODEL_USER_DATA_CHANGE, this, this.setInfo), 
            a.ins.event(a.CARPORT_USE_CAR, o.ins.user_data.equ_car), _.ins.hideBanner();
        }
    }
    class $ extends e.View.HomeUI {
        onOpened() {
            this.setInfo(), 
            // this.coin_g.y = c.ins.menuInfo.top + 110, 
            // this.ovinfo.y = c.ins.menuInfo.top + 110, 
            a.ins.on(a.MODEL_USER_DATA_CHANGE, this, this.setInfo), 
            C.ins.setSoundBtn(this.btn_sound), 
            //C.ins.setVibrateBtn(this.btn_vibrate), 
            a.ins.event(a.GAME_RESERT), 
            this.btn_start.on(Laya.Event.MOUSE_DOWN, this, this.btnStartDownHandle), 
            this.btn_start.on(Laya.Event.MOUSE_UP, this, this.btnStartUpHandle), 
            this.btn_carport.on(Laya.Event.CLICK, this, this.btnCarpostHandle), 
            this.btn_share.on(Laya.Event.CLICK, this, this.btnSharehandle), 
            this.btn_rank.on(Laya.Event.CLICK, this, this.btnRankHandle), 
            this.btn_rank.visible = !1;
            this.btn_share.visible = !1;
            this.btn_vibrate.visible = !1;
            this.isOnce = true;
            m.registerCnxhBtn(this.btn_cnxh), 
            _.ins.hideBanner(), 
            l.ins.canOpenFullScreenJump && !o.ins.isNewUser && n.open(u, !1);
        }
        setInfo() {
            this.best.text = o.ins.user_data.best.toString(), this.coin.text = o.ins.user_data.coin.toString();
        }
        btnStartDownHandle() {
            console.log("MouseDown:-------")
            if(this.isOnce){
                platform.getInstance().showInterstitial(()=>{
                    this.isOnce = false;
                })
                return;
            }
            this.timer.clear(this, this.startGame), this.timer.once(200, this, this.startGame);
        }
        btnStartUpHandle() {
            this.timer.clear(this, this.startGame);
        }
        startGame() {
            n.open(Q, !0, this.guide.y), a.ins.event(a.GAME_START);
        }
        btnCarpostHandle() {
            n.open(q);
        }
        btnSharehandle() {
            c.ins.share();
        }
        btnRankHandle() {
            n.open(p, !1);
        }
        btnCnxhHandle() {
            n.open(u, !1);
        }
        onClosed() {
            this.timer.clear(this, this.startGame), C.ins.clearSettingBtnEvent(), a.ins.off(a.MODEL_USER_DATA_CHANGE, this, this.setInfo), 
            this.btn_start.on(Laya.Event.MOUSE_DOWN, this, this.btnStartDownHandle), this.btn_start.on(Laya.Event.MOUSE_UP, this, this.btnStartUpHandle), 
            this.btn_carport.off(Laya.Event.CLICK, this, this.btnCarpostHandle), this.btn_share.off(Laya.Event.CLICK, this, this.btnSharehandle), 
            this.btn_rank.off(Laya.Event.CLICK, this, this.btnRankHandle), this.btn_cnxh.off(Laya.Event.CLICK, this, this.btnCnxhHandle), 
            m.unRegisterCnxhBtn(this.btn_cnxh);
        }
    }
    class tt extends e.View.LoadingUI {
        constructor() {
            super(...arguments), 
            this.login_ok = !1, 
            this.load_ok = !1;
        }
        onOpened() {
            //this.btn_retry.on(Laya.Event.CLICK, this, this.btnRetryHandle), 
            this.btnRetryHandle();
        }
        openTipes() {
            //this.tips.visible || (this.tips.visible = !0);
        }
        btnRetryHandle() {
            console.log("LoadingUI Opened");
            //this.tips.visible = !1, 
            this.pgs.value = 0,
            this.pgs_v.text = Math.round(100 * this.pgs.value) + "%";
            //this.login_ok || l.ins.login(Laya.Handler.create(this, this.loginHandle)), 
            this.load_ok  || T.ins.load(Laya.Handler.create(this, this.progressHandle, null, !1), 
            Laya.Handler.create(this, this.finishHandle));
        }
        loginHandle(t) {
            // t ? (
            //     this.login_ok = !0, 
            //     c.ins.op_set_openid(o.ins.user_data.user_id), 
                this.okCheck()
                // ) : 
                // this.openTipes();
        }
        finishHandle(t) {
            // t ? (this.load_ok = !0, 
                //this.okCheck()
                // ) : this.openTipes();
        }
        progressHandle(t, e) {
            this.pgs.value = e, 
            this.pgs_v.text = Math.round(100 * e) + "%";
            if(e>=1){
                this.okCheck()
            }
        }
        okCheck() {
            console.log("okCheck OpenHomeUI");
            //this.login_ok && this.load_ok && 
            Laya.timer.frameOnce(1, this, () => {
                j.ins.init(), 
                n.open($), 
                v.ins.playBg();
            });
        }
        onClosed() {
            //this.btn_retry.off(Laya.Event.CLICK, this, this.btnRetryHandle);
        }
    }
    var et = '#ifdef GL_FRAGMENT_PRECISION_HIGH\n\tprecision highp float;\n#else\n\tprecision mediump float;\n#endif\n\nvarying vec2 v_Texcoord0;\nvarying vec3 v_Normal;\nvarying vec3 v_Tangent;\nvarying vec3 v_Binormal;\nvarying vec3 v_ViewDir;\nvarying vec3 v_PositionWorld;\n\nuniform vec3 u_AmbientColor;\nuniform vec4 u_AlbedoColor;\n\n#ifdef ALBEDOTEXTURE\n\tuniform sampler2D u_AlbedoTexture;\n#endif\n#ifdef METALLICGLOSSTEXTURE\n\tuniform sampler2D u_MetallicGlossTexture;\n#endif\n#ifdef NORMALTEXTURE\n\tuniform sampler2D u_NormalTexture;\n\tuniform float u_normalScale;\n#endif\n#ifdef PARALLAXTEXTURE\n\tuniform sampler2D u_ParallaxTexture;\n\tuniform float u_parallaxScale;\n#endif\n#ifdef OCCLUSIONTEXTURE\n\tuniform sampler2D u_OcclusionTexture;\n\tuniform float u_occlusionStrength;\n#endif\n#ifdef EMISSION\n\t#ifdef EMISSIONTEXTURE\n\t\tuniform sampler2D u_EmissionTexture;\n\t#endif\n\tuniform vec4 u_EmissionColor;\n#endif\n#ifdef REFLECTMAP\n\tuniform samplerCube u_ReflectTexture;\n\tuniform float u_ReflectIntensity;\n#endif\n\nuniform float u_AlphaTestValue;\nuniform float u_metallic;\nuniform float u_smoothness;\nuniform float u_smoothnessScale;\n\n\n\n\n#include "Lighting.glsl";\n#include "PBRStandardLighting.glsl"\n#include "ShadowHelper.glsl"\n\nvarying float v_posViewZ;\n#ifdef RECEIVESHADOW\n\t#if defined(SHADOWMAP_PSSM2)||defined(SHADOWMAP_PSSM3)\n\t\tuniform mat4 u_lightShadowVP[4];\n\t#endif\n\t#ifdef SHADOWMAP_PSSM1 \n\t\tvarying vec4 v_lightMVPPos;\n\t#endif\n#endif\n\n#ifdef LEGACYSINGLELIGHTING\n\t#ifdef DIRECTIONLIGHT\n\t\tuniform DirectionLight u_DirectionLight;\n\t#endif\n\t#ifdef POINTLIGHT\n\t\tuniform PointLight u_PointLight;\n\t#endif\n\t#ifdef SPOTLIGHT\n\t\tuniform SpotLight u_SpotLight;\n\t#endif\n#else\n\t\tuniform mat4 u_View;\n\t\tuniform vec4 u_ProjectionParams;\n\t\tuniform vec4 u_Viewport;\n\t\tuniform int u_DirationLightCount;\n\t\tuniform sampler2D u_LightBuffer;\n\t\tuniform sampler2D u_LightClusterBuffer;\n#endif\n\n#ifdef FOG\n\tuniform float u_FogStart;\n\tuniform float u_FogRange;\n\tuniform vec3 u_FogColor;\n#endif\n\nvoid main_castShadow()\n{\n\tgl_FragColor=packDepth(v_posViewZ);\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\t\tfloat alpha = texture2D(u_AlbedoTexture,v_Texcoord0).w;\n\t\tif( alpha < u_AlphaTestValue )\n\t\t{\n\t\t\tdiscard;\n\t\t}\n\t#endif\n}\n\nvoid main_normal()\n{\t\n\tvec3 viewDir = normalize(v_ViewDir);\n\t\n\tvec2 uv0 = ParallaxOffset(viewDir);\n\t\n\tvec2 mg;\n\tvec4 albedoColor;\n\t#ifdef ALBEDOTEXTURE\n\t\tvec4 abledoTextureColor = texture2D(u_AlbedoTexture, uv0);\n\t\talbedoColor = abledoTextureColor * u_AlbedoColor;\n\t\tmg = MetallicGloss(abledoTextureColor.a, uv0);\n\t#else\n\t\talbedoColor = u_AlbedoColor;\n\t\tmg = MetallicGloss(1.0, uv0);\n\t#endif\n\t\n\t#ifdef ALPHATEST\n\t\tif(albedoColor.a < u_AlphaTestValue)\n\t\t\tdiscard;\n\t#endif\n\t\n\tvec3 normal = UnpackScaleNormal(uv0);\n  \n\tLayaGI gi;\n\tgi.diffuse = u_AmbientColor * Occlusion(uv0).rgb;\n\tgi.specular = ReflectCubeMap(viewDir, normal);\n  \n  \tfloat shadowValue = 1.0;\n\t#ifdef RECEIVESHADOW\n\t\n\t\t#ifdef SHADOWMAP_PSSM3\n\t\t\tshadowValue = getShadowPSSM3( u_shadowMap1,u_shadowMap2,u_shadowMap3,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\n\t\t#endif\n\t\t#ifdef SHADOWMAP_PSSM2\n\t\t\tshadowValue = getShadowPSSM2( u_shadowMap1,u_shadowMap2,u_lightShadowVP,u_shadowPSSMDistance,u_shadowPCFoffset,v_PositionWorld,v_posViewZ,0.001);\n\t\t#endif \n\t\t#ifdef SHADOWMAP_PSSM1\n\t\t\tshadowValue = getShadowPSSM1( u_shadowMap1,v_lightMVPPos,u_shadowPSSMDistance,u_shadowPCFoffset,v_posViewZ,0.001);\n\t\t#endif\n\t#endif\n\n\tvec4 color = vec4(0.0);\n\t#ifdef LEGACYSINGLELIGHTING\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tcolor += PBRStandardDiectionLight(albedoColor, mg.r, mg.g, normal, viewDir, u_DirectionLight, gi,shadowValue);\n\t\t#endif\n\t\n\t\t#ifdef POINTLIGHT\n\t\t\tcolor.a = 0.0;\n\t\t\tcolor += PBRStandardPointLight(albedoColor, mg.r, mg.g, normal, viewDir, u_PointLight, v_PositionWorld, gi,shadowValue);\n\t\t#endif\n\t\t\n\t\t#ifdef SPOTLIGHT\n\t\t\tcolor.a = 0.0;\n\t\t\tcolor += PBRStandardSpotLight(albedoColor, mg.r, mg.g, normal, viewDir, u_SpotLight, v_PositionWorld, gi,shadowValue);\n\t\t#endif\n\t#else\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t{\n\t\t\t\tif(i >= u_DirationLightCount)\n\t\t\t\t\tbreak;\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\n\t\t\t\tcolor.a = 0.0;\n\t\t\t\tcolor += PBRStandardDiectionLight(albedoColor, mg.r, mg.g, normal, viewDir, directionLight, gi,shadowValue);\n\t\t\t}\n\t\t#endif\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\n\t\t\t#ifdef POINTLIGHT\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t\t{\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\n\t\t\t\t\tcolor.a = 0.0;\n\t\t\t\t\tcolor += PBRStandardPointLight(albedoColor, mg.r, mg.g, normal, viewDir, pointLight, v_PositionWorld, gi,shadowValue);\n\t\t\t\t}\n\t\t\t#endif\n\t\t\t#ifdef SPOTLIGHT\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t\t{\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\n\t\t\t\t\tcolor.a = 0.0;\n\t\t\t\t\tcolor += PBRStandardSpotLight(albedoColor, mg.r, mg.g, normal, viewDir, spotLight, v_PositionWorld, gi,shadowValue);\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t#endif\n\t\t#endif\n\t#endif\n\n\t\n\t#ifdef REFLECTMAP\n\t \tcolor += LayaAirStandardReflect(albedoColor,mg.r,mg.g,gi);\n\t#endif\n\n\t#ifdef EMISSION\n\t\tvec4 emissionColor = u_EmissionColor;\n\t\t#ifdef EMISSIONTEXTURE\n\t\t\temissionColor *=  texture2D(u_EmissionTexture, uv0);\n\t\t#endif\n\t\tcolor.rgb += emissionColor.rgb;\n\t#endif\n\t\n\t\tgl_FragColor = color;\n\t#ifdef FOG\n\t\tfloat lerpFact = clamp((1.0 / gl_FragCoord.w - u_FogStart) / u_FogRange, 0.0, 1.0);\n\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, lerpFact);\n\t#endif\n}\n\nvoid main()\n{\n\t#ifdef CASTSHADOW\t\t\n\t\tmain_castShadow();\n\t#else\n\t\tmain_normal();\n\t#endif  \n}\n', it = '#include "Lighting.glsl";\n\nattribute vec4 a_Position;\nattribute vec3 a_Normal;\nattribute vec4 a_Tangent0;\nattribute vec2 a_Texcoord0;\n\n#ifdef GPU_INSTANCE\n\tattribute mat4 a_MvpMatrix;\n#else\n\tuniform mat4 u_MvpMatrix;\n#endif\n\n#ifdef GPU_INSTANCE\n\tattribute mat4 a_WorldMat;\n#else\n\tuniform mat4 u_WorldMat;\n#endif\n\nuniform mat4 u_ViewProjection;\n\nuniform vec3 u_CameraPos;\n\nuniform vec4 u_bend;\nuniform vec3 u_scale;\n\n\nvarying vec2 v_Texcoord0;\nvarying vec3 v_Normal;\nvarying vec3 v_Tangent;\nvarying vec3 v_Binormal;\nvarying vec3 v_ViewDir;\nvarying vec3 v_PositionWorld;\n\n#ifdef TILINGOFFSET\n\tuniform vec4 u_TilingOffset;\n#endif\n\nvarying float v_posViewZ;\n#ifdef RECEIVESHADOW\n  #ifdef SHADOWMAP_PSSM1 \n\t  varying vec4 v_lightMVPPos;\n\t  uniform mat4 u_lightShadowVP[4];\n  #endif\n#endif\n\n#ifdef BONE\n\tconst int c_MaxBoneCount = 24;\n\tattribute vec4 a_BoneIndices;\n\tattribute vec4 a_BoneWeights;\n\tuniform mat4 u_Bones[c_MaxBoneCount];\n#endif\n\nvoid main_castShadow()\n{\n\tvec4 position;\n\t#ifdef BONE\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n\t\tposition=skinTransform*a_Position;\n\t#else\n\t\tposition=a_Position;\n\t#endif\n\t#ifdef GPU_INSTANCE\n\t\tgl_Position = a_MvpMatrix * position;\n\t#else\n\t\tgl_Position = u_MvpMatrix * position;\n\t#endif\n\t \n\t//TODO没考虑UV动画呢\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\t\tv_Texcoord0 = a_Texcoord0;\n\t#endif\n\tgl_Position=remapGLPositionZ(gl_Position);\n\tv_posViewZ = gl_Position.z;\n}\n\nvoid main_normal()\n{\n\tvec4 position;\n\t#ifdef BONE\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n\t\tposition=skinTransform*a_Position;\n\t#else\n\t\tposition=a_Position;\n\t#endif\n\t\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)||defined(REFLECTMAP)\n\t\tmat4 worldMat;\n\t\t#ifdef GPU_INSTANCE\n\t\t\tworldMat = a_WorldMat;\n\t\t#else\n\t\t\tworldMat = u_WorldMat;\n\t\t#endif\n\t#endif\n\n\t//scale\n\tvec4 wpos = worldMat * position;\n\t// float z = wz - u_scale.z;\n\t// z = max(0.0, z);\n\t// z = 1.0 + pow(u_scale.x * z, u_scale.y);\n\t// position.x = position.x * z;\n\t// position.y = position.y * z;\n\n\t//bend\n\tfloat z = wpos.z - u_bend.w;\n\tz = max(0.0, z);\n\tfloat x = pow(u_bend.z * z, 3.0);\n\twpos.x = wpos.x + u_bend.x * x;\n\twpos.y = wpos.y + u_bend.y * x;\n\n\tgl_Position = u_ViewProjection * wpos;\n\n\n\t// #ifdef GPU_INSTANCE\n\t// \tgl_Position = a_MvpMatrix * position;\n\t// #else\n\t// \tgl_Position = u_MvpMatrix * position;\n\t// #endif\n\t\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(REFLECTMAP)\n\t\tmat3 worldInvMat;\n\t\t#ifdef BONE\n\t\t\tworldInvMat=inverse(mat3(worldMat*skinTransform));\n\t\t#else\n\t\t\tworldInvMat=inverse(mat3(worldMat));\n\t\t#endif  \n\t\tv_Normal=a_Normal*worldInvMat;\n\t\t#if (defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))\n\t\t\tv_Tangent=a_Tangent0.xyz*worldInvMat;\n\t\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\n\t\t#endif\n\t#endif\n\t\n\t\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(RECEIVESHADOW)||defined(REFLECTMAP)\n\t\tv_PositionWorld=(worldMat*position).xyz;\n\t#endif\n\t\n  \n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||defined(REFLECTMAP)||defined(REFLECTMAP)\n\t\tv_ViewDir=u_CameraPos-v_PositionWorld;\n\t#endif\n\n\t#ifdef TILINGOFFSET\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\n\t#else\n\t\tv_Texcoord0=a_Texcoord0;\n\t#endif\n  \n\t#ifdef RECEIVESHADOW\n\t\tv_posViewZ = gl_Position.w;\n\t\t#ifdef SHADOWMAP_PSSM1 \n\t\t\tv_lightMVPPos = u_lightShadowVP[0] * vec4(v_PositionWorld,1.0);\n\t\t#endif\n\t#endif\n\tgl_Position=remapGLPositionZ(gl_Position);\n}\n\nvoid main()\n{\n\t#ifdef CASTSHADOW\n\t\tmain_castShadow();\n\t#else\n\t\tmain_normal();\n\t#endif\n}\n', st = Laya.Vector4, nt = Laya.Shader3D, at = Laya.Material, ot = Laya.Scene3DShaderDeclaration;
    class rt extends Laya.Material {
        constructor() {
            super(), this.setShaderName("M_PBRStandardMaterial"), this._albedoColor = new st(1, 1, 1, 1), 
            this._shaderValues.setVector(rt.ALBEDOCOLOR, new st(1, 1, 1, 1)), this._emissionColor = new st(0, 0, 0, 0), 
            this._shaderValues.setVector(rt.EMISSIONCOLOR, new st(0, 0, 0, 0)), this._shaderValues.setNumber(rt.METALLIC, 0), 
            this._shaderValues.setNumber(rt.SMOOTHNESS, .5), this._shaderValues.setNumber(rt.SMOOTHNESSSCALE, 1), 
            this._shaderValues.setNumber(rt.SMOOTHNESSSOURCE, 0), this._shaderValues.setNumber(rt.OCCLUSIONSTRENGTH, 1), 
            this._shaderValues.setNumber(rt.NORMALSCALE, 1), this._shaderValues.setNumber(rt.PARALLAXSCALE, .001), 
            this._shaderValues.setBool(rt.ENABLEEMISSION, !1), this._shaderValues.setBool(rt.ENABLEREFLECT, !0), 
            this._shaderValues.setNumber(at.ALPHATESTVALUE, .5), this._disablePublicDefineDatas.remove(ot.SHADERDEFINE_REFLECTMAP), 
            this.renderMode = rt.RENDERMODE_OPAQUE;
        }
        static __initShader__() {
            let t = {
                a_Position: Laya.VertexMesh.MESH_POSITION0,
                a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                a_Tangent0: Laya.VertexMesh.MESH_TANGENT0,
                a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                a_BoneWeights: Laya.VertexMesh.MESH_BLENDWEIGHT0,
                a_BoneIndices: Laya.VertexMesh.MESH_BLENDINDICES0,
                a_MvpMatrix: Laya.VertexMesh.MESH_MVPMATRIX_ROW0,
                a_WorldMat: Laya.VertexMesh.MESH_WORLDMATRIX_ROW0
            }, e = {
                u_Bones: nt.PERIOD_CUSTOM,
                u_MvpMatrix: nt.PERIOD_SPRITE,
                u_WorldMat: nt.PERIOD_SPRITE,
                u_ViewProjection: nt.PERIOD_CAMERA,
                u_CameraPos: nt.PERIOD_CAMERA,
                u_View: nt.PERIOD_CAMERA,
                u_ProjectionParams: nt.PERIOD_CAMERA,
                u_Viewport: nt.PERIOD_CAMERA,
                u_AlphaTestValue: nt.PERIOD_MATERIAL,
                u_AlbedoColor: nt.PERIOD_MATERIAL,
                u_EmissionColor: nt.PERIOD_MATERIAL,
                u_AlbedoTexture: nt.PERIOD_MATERIAL,
                u_NormalTexture: nt.PERIOD_MATERIAL,
                u_ParallaxTexture: nt.PERIOD_MATERIAL,
                u_MetallicGlossTexture: nt.PERIOD_MATERIAL,
                u_OcclusionTexture: nt.PERIOD_MATERIAL,
                u_EmissionTexture: nt.PERIOD_MATERIAL,
                u_metallic: nt.PERIOD_MATERIAL,
                u_smoothness: nt.PERIOD_MATERIAL,
                u_smoothnessScale: nt.PERIOD_MATERIAL,
                u_occlusionStrength: nt.PERIOD_MATERIAL,
                u_normalScale: nt.PERIOD_MATERIAL,
                u_parallaxScale: nt.PERIOD_MATERIAL,
                u_TilingOffset: nt.PERIOD_MATERIAL,
                u_ReflectTexture: nt.PERIOD_SCENE,
                u_ReflectIntensity: nt.PERIOD_SCENE,
                u_AmbientColor: nt.PERIOD_SCENE,
                u_shadowMap1: nt.PERIOD_SCENE,
                u_shadowMap2: nt.PERIOD_SCENE,
                u_shadowMap3: nt.PERIOD_SCENE,
                u_shadowPSSMDistance: nt.PERIOD_SCENE,
                u_lightShadowVP: nt.PERIOD_SCENE,
                u_shadowPCFoffset: nt.PERIOD_SCENE,
                u_FogStart: nt.PERIOD_SCENE,
                u_FogRange: nt.PERIOD_SCENE,
                u_FogColor: nt.PERIOD_SCENE,
                u_DirationLightCount: nt.PERIOD_SCENE,
                u_LightBuffer: nt.PERIOD_SCENE,
                u_LightClusterBuffer: nt.PERIOD_SCENE,
                "u_DirectionLight.direction": nt.PERIOD_SCENE,
                "u_DirectionLight.color": nt.PERIOD_SCENE,
                "u_PointLight.position": nt.PERIOD_SCENE,
                "u_PointLight.range": nt.PERIOD_SCENE,
                "u_PointLight.color": nt.PERIOD_SCENE,
                "u_SpotLight.position": nt.PERIOD_SCENE,
                "u_SpotLight.direction": nt.PERIOD_SCENE,
                "u_SpotLight.range": nt.PERIOD_SCENE,
                "u_SpotLight.spot": nt.PERIOD_SCENE,
                "u_SpotLight.color": nt.PERIOD_SCENE,
                u_bend: nt.PERIOD_MATERIAL,
                u_scale: nt.PERIOD_MATERIAL
            }, i = {
                s_Cull: nt.RENDER_STATE_CULL,
                s_Blend: nt.RENDER_STATE_BLEND,
                s_BlendSrc: nt.RENDER_STATE_BLEND_SRC,
                s_BlendDst: nt.RENDER_STATE_BLEND_DST,
                s_DepthTest: nt.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: nt.RENDER_STATE_DEPTH_WRITE
            }, s = nt.add("M_PBRStandardMaterial", null, null, !0), n = new Laya.SubShader(t, e);
            s.addSubShader(n), n.addShaderPass(it, et, i), this.SHADERDEFINE_ALBEDOTEXTURE = nt.getDefineByName("ALBEDOTEXTURE"), 
            this.SHADERDEFINE_METALLICGLOSSTEXTURE = nt.getDefineByName("METALLICGLOSSTEXTURE"), 
            this.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA = nt.getDefineByName("SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA"), 
            this.SHADERDEFINE_NORMALTEXTURE = nt.getDefineByName("NORMALTEXTURE"), 
            this.SHADERDEFINE_PARALLAXTEXTURE = nt.getDefineByName("PARALLAXTEXTURE"), 
            this.SHADERDEFINE_OCCLUSIONTEXTURE = nt.getDefineByName("OCCLUSIONTEXTURE"), 
            this.SHADERDEFINE_EMISSION = nt.getDefineByName("EMISSION"), 
            this.SHADERDEFINE_EMISSIONTEXTURE = nt.getDefineByName("EMISSIONTEXTURE"), 
            this.SHADERDEFINE_REFLECTMAP = nt.getDefineByName("REFLECTMAP"), 
            this.SHADERDEFINE_TILINGOFFSET = nt.getDefineByName("TILINGOFFSET"), 
            this.SHADERDEFINE_ALPHAPREMULTIPLY = nt.getDefineByName("ALPHAPREMULTIPLY");
        }
        get _ColorR() {
            return this._albedoColor.x;
        }
        set _ColorR(t) {
            this._albedoColor.x = t, this.albedoColor = this._albedoColor;
        }
        get _ColorG() {
            return this._albedoColor.y;
        }
        set _ColorG(t) {
            this._albedoColor.y = t, this.albedoColor = this._albedoColor;
        }
        get _ColorB() {
            return this._albedoColor.z;
        }
        set _ColorB(t) {
            this._albedoColor.z = t, this.albedoColor = this._albedoColor;
        }
        get _ColorA() {
            return this._albedoColor.w;
        }
        set _ColorA(t) {
            this._albedoColor.w = t, this.albedoColor = this._albedoColor;
        }
        get _Metallic() {
            return this._shaderValues.getNumber(rt.METALLIC);
        }
        set _Metallic(t) {
            this._shaderValues.setNumber(rt.METALLIC, t);
        }
        get _Glossiness() {
            return this._shaderValues.getNumber(rt.SMOOTHNESS);
        }
        set _Glossiness(t) {
            this._shaderValues.setNumber(rt.SMOOTHNESS, t);
        }
        get _GlossMapScale() {
            return this._shaderValues.getNumber(rt.SMOOTHNESSSCALE);
        }
        set _GlossMapScale(t) {
            this._shaderValues.setNumber(rt.SMOOTHNESSSCALE, t);
        }
        get _BumpScale() {
            return this._shaderValues.getNumber(rt.NORMALSCALE);
        }
        set _BumpScale(t) {
            this._shaderValues.setNumber(rt.NORMALSCALE, t);
        }
        get _Parallax() {
            return this._shaderValues.getNumber(rt.PARALLAXSCALE);
        }
        set _Parallax(t) {
            this._shaderValues.setNumber(rt.PARALLAXSCALE, t);
        }
        get _OcclusionStrength() {
            return this._shaderValues.getNumber(rt.OCCLUSIONSTRENGTH);
        }
        set _OcclusionStrength(t) {
            this._shaderValues.setNumber(rt.OCCLUSIONSTRENGTH, t);
        }
        get _EmissionColorR() {
            return this._emissionColor.x;
        }
        set _EmissionColorR(t) {
            this._emissionColor.x = t, this.emissionColor = this._emissionColor;
        }
        get _EmissionColorG() {
            return this._emissionColor.y;
        }
        set _EmissionColorG(t) {
            this._emissionColor.y = t, this.emissionColor = this._emissionColor;
        }
        get _EmissionColorB() {
            return this._emissionColor.z;
        }
        set _EmissionColorB(t) {
            this._emissionColor.z = t, this.emissionColor = this._emissionColor;
        }
        get _EmissionColorA() {
            return this._emissionColor.w;
        }
        set _EmissionColorA(t) {
            this._emissionColor.w = t, this.emissionColor = this._emissionColor;
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(rt.TILINGOFFSET).x;
        }
        set _MainTex_STX(t) {
            var e = this._shaderValues.getVector(rt.TILINGOFFSET);
            e.x = t, this.tilingOffset = e;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(rt.TILINGOFFSET).y;
        }
        set _MainTex_STY(t) {
            var e = this._shaderValues.getVector(rt.TILINGOFFSET);
            e.y = t, this.tilingOffset = e;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(rt.TILINGOFFSET).z;
        }
        set _MainTex_STZ(t) {
            var e = this._shaderValues.getVector(rt.TILINGOFFSET);
            e.z = t, this.tilingOffset = e;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(rt.TILINGOFFSET).w;
        }
        set _MainTex_STW(t) {
            var e = this._shaderValues.getVector(rt.TILINGOFFSET);
            e.w = t, this.tilingOffset = e;
        }
        get _Cutoff() {
            return this.alphaTestValue;
        }
        set _Cutoff(t) {
            this.alphaTestValue = t;
        }
        get albedoColorR() {
            return this._ColorR;
        }
        set albedoColorR(t) {
            this._ColorR = t;
        }
        get albedoColorG() {
            return this._ColorG;
        }
        set albedoColorG(t) {
            this._ColorG = t;
        }
        get albedoColorB() {
            return this._ColorB;
        }
        set albedoColorB(t) {
            this._ColorB = t;
        }
        get albedoColorA() {
            return this._ColorA;
        }
        set albedoColorA(t) {
            this._ColorA = t;
        }
        get albedoColor() {
            return this._albedoColor;
        }
        set albedoColor(t) {
            this._albedoColor = t, this._shaderValues.setVector(rt.ALBEDOCOLOR, t);
        }
        get albedoTexture() {
            return this._shaderValues.getTexture(rt.ALBEDOTEXTURE);
        }
        set albedoTexture(t) {
            t ? this._shaderValues.addDefine(rt.SHADERDEFINE_ALBEDOTEXTURE) : this._shaderValues.removeDefine(rt.SHADERDEFINE_ALBEDOTEXTURE), 
            this._shaderValues.setTexture(rt.ALBEDOTEXTURE, t);
        }
        get normalTexture() {
            return this._shaderValues.getTexture(rt.NORMALTEXTURE);
        }
        set normalTexture(t) {
            t ? this._shaderValues.addDefine(rt.SHADERDEFINE_NORMALTEXTURE) : this._shaderValues.removeDefine(rt.SHADERDEFINE_NORMALTEXTURE), 
            this._shaderValues.setTexture(rt.NORMALTEXTURE, t);
        }
        get normalTextureScale() {
            return this._BumpScale;
        }
        set normalTextureScale(t) {
            this._BumpScale = t;
        }
        get parallaxTexture() {
            return this._shaderValues.getTexture(rt.PARALLAXTEXTURE);
        }
        set parallaxTexture(t) {
            t ? this._shaderValues.addDefine(rt.SHADERDEFINE_PARALLAXTEXTURE) : this._shaderValues.removeDefine(rt.SHADERDEFINE_PARALLAXTEXTURE), 
            this._shaderValues.setTexture(rt.PARALLAXTEXTURE, t);
        }
        get parallaxTextureScale() {
            return this._Parallax;
        }
        set parallaxTextureScale(t) {
            this._Parallax = Math.max(.005, Math.min(.08, t));
        }
        get occlusionTexture() {
            return this._shaderValues.getTexture(rt.OCCLUSIONTEXTURE);
        }
        set occlusionTexture(t) {
            t ? this._shaderValues.addDefine(rt.SHADERDEFINE_OCCLUSIONTEXTURE) : this._shaderValues.removeDefine(rt.SHADERDEFINE_OCCLUSIONTEXTURE), 
            this._shaderValues.setTexture(rt.OCCLUSIONTEXTURE, t);
        }
        get occlusionTextureStrength() {
            return this._OcclusionStrength;
        }
        set occlusionTextureStrength(t) {
            this._OcclusionStrength = Math.max(0, Math.min(1, t));
        }
        get metallicGlossTexture() {
            return this._shaderValues.getTexture(rt.METALLICGLOSSTEXTURE);
        }
        set metallicGlossTexture(t) {
            t ? this._shaderValues.addDefine(rt.SHADERDEFINE_METALLICGLOSSTEXTURE) : this._shaderValues.removeDefine(rt.SHADERDEFINE_METALLICGLOSSTEXTURE), 
            this._shaderValues.setTexture(rt.METALLICGLOSSTEXTURE, t);
        }
        get metallic() {
            return this._Metallic;
        }
        set metallic(t) {
            this._Metallic = Math.max(0, Math.min(1, t));
        }
        get smoothness() {
            return this._Glossiness;
        }
        set smoothness(t) {
            this._Glossiness = Math.max(0, Math.min(1, t));
        }
        get smoothnessTextureScale() {
            return this._GlossMapScale;
        }
        set smoothnessTextureScale(t) {
            this._GlossMapScale = Math.max(0, Math.min(1, t));
        }
        get smoothnessSource() {
            return this._shaderValues.getInt(rt.SMOOTHNESSSOURCE);
        }
        set smoothnessSource(t) {
            t ? (this._shaderValues.addDefine(rt.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), 
            this._shaderValues.setInt(rt.SMOOTHNESSSOURCE, 1)) : (this._shaderValues.removeDefine(rt.SHADERDEFINE_SMOOTHNESSSOURCE_ALBEDOTEXTURE_ALPHA), 
            this._shaderValues.setInt(rt.SMOOTHNESSSOURCE, 0));
        }
        get enableEmission() {
            return this._shaderValues.getBool(rt.ENABLEEMISSION);
        }
        set enableEmission(t) {
            t ? this._shaderValues.addDefine(rt.SHADERDEFINE_EMISSION) : this._shaderValues.removeDefine(rt.SHADERDEFINE_EMISSION), 
            this._shaderValues.setBool(rt.ENABLEEMISSION, t);
        }
        get emissionColorR() {
            return this._EmissionColorR;
        }
        set emissionColorR(t) {
            this._EmissionColorR = t;
        }
        get emissionColorG() {
            return this._EmissionColorG;
        }
        set emissionColorG(t) {
            this._EmissionColorG = t;
        }
        get emissionColorB() {
            return this._EmissionColorB;
        }
        set emissionColorB(t) {
            this._EmissionColorB = t;
        }
        get emissionColorA() {
            return this._EmissionColorA;
        }
        set emissionColorA(t) {
            this._EmissionColorA = t;
        }
        get emissionColor() {
            return this._shaderValues.getVector(rt.EMISSIONCOLOR);
        }
        set emissionColor(t) {
            this._shaderValues.setVector(rt.EMISSIONCOLOR, t);
        }
        get emissionTexture() {
            return this._shaderValues.getTexture(rt.EMISSIONTEXTURE);
        }
        set emissionTexture(t) {
            t ? this._shaderValues.addDefine(rt.SHADERDEFINE_EMISSIONTEXTURE) : this._shaderValues.removeDefine(rt.SHADERDEFINE_EMISSIONTEXTURE), 
            this._shaderValues.setTexture(rt.EMISSIONTEXTURE, t);
        }
        get enableReflection() {
            return this._shaderValues.getBool(rt.ENABLEREFLECT);
        }
        set enableReflection(t) {
            this._shaderValues.setBool(rt.ENABLEREFLECT, !0), t ? this._disablePublicDefineDatas.remove(ot.SHADERDEFINE_REFLECTMAP) : this._disablePublicDefineDatas.add(ot.SHADERDEFINE_REFLECTMAP);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(t) {
            this._MainTex_STX = t;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(t) {
            this._MainTex_STY = t;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(t) {
            this._MainTex_STZ = t;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(t) {
            this._MainTex_STW = t;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(rt.TILINGOFFSET);
        }
        set tilingOffset(t) {
            t && (1 != t.x || 1 != t.y || 0 != t.z || 0 != t.w) ? this._shaderValues.addDefine(rt.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(rt.SHADERDEFINE_TILINGOFFSET), 
            this._shaderValues.setVector(rt.TILINGOFFSET, t);
        }
        set renderMode(t) {
            switch (t) {
              case rt.RENDERMODE_OPAQUE:
                this.alphaTest = !1, this.renderQueue = at.RENDERQUEUE_OPAQUE, this.depthWrite = !0, 
                this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE, 
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS, this._shaderValues.removeDefine(rt.SHADERDEFINE_ALPHAPREMULTIPLY);
                break;

              case rt.RENDERMODE_CUTOUT:
                this.renderQueue = at.RENDERQUEUE_ALPHATEST, this.alphaTest = !0, this.depthWrite = !0, 
                this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_DISABLE, 
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS, this._shaderValues.removeDefine(rt.SHADERDEFINE_ALPHAPREMULTIPLY);
                break;

              case rt.RENDERMODE_FADE:
                this.renderQueue = at.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_ENABLE_ALL, 
                this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA, 
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS, this._shaderValues.removeDefine(rt.SHADERDEFINE_ALPHAPREMULTIPLY);
                break;

              case rt.RENDERMODE_TRANSPARENT:
                this.renderQueue = at.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1, 
                this.cull = Laya.RenderState.CULL_BACK, this.blend = Laya.RenderState.BLEND_ENABLE_ALL, 
                this.blendSrc = Laya.RenderState.BLENDPARAM_ONE, this.blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA, 
                this.depthTest = Laya.RenderState.DEPTHTEST_LESS, this._shaderValues.addDefine(rt.SHADERDEFINE_ALPHAPREMULTIPLY);
                break;

              default:
                throw new Error("PBRSpecularMaterial : renderMode value error.");
            }
        }
        get depthWrite() {
            return this._shaderValues.getBool(rt.DEPTH_WRITE);
        }
        set depthWrite(t) {
            this._shaderValues.setBool(rt.DEPTH_WRITE, t);
        }
        get cull() {
            return this._shaderValues.getInt(rt.CULL);
        }
        set cull(t) {
            this._shaderValues.setInt(rt.CULL, t);
        }
        get blend() {
            return this._shaderValues.getInt(rt.BLEND);
        }
        set blend(t) {
            this._shaderValues.setInt(rt.BLEND, t);
        }
        get blendSrc() {
            return this._shaderValues.getInt(rt.BLEND_SRC);
        }
        set blendSrc(t) {
            this._shaderValues.setInt(rt.BLEND_SRC, t);
        }
        get blendDst() {
            return this._shaderValues.getInt(rt.BLEND_DST);
        }
        set blendDst(t) {
            this._shaderValues.setInt(rt.BLEND_DST, t);
        }
        get depthTest() {
            return this._shaderValues.getInt(rt.DEPTH_TEST);
        }
        set depthTest(t) {
            this._shaderValues.setInt(rt.DEPTH_TEST, t);
        }
        get bend() {
            return this._shaderValues.getVector(rt.BEND);
        }
        set bend(t) {
            this._shaderValues.setVector(rt.BEND, t);
        }
        get scale() {
            return this._shaderValues.getVector3(rt.SCALE);
        }
        set scale(t) {
            this._shaderValues.setVector3(rt.SCALE, t);
        }
        clone() {
            var t = new rt();
            return this.cloneTo(t), t;
        }
        cloneTo(t) {
            super.cloneTo(t);
            var e = t;
            this._albedoColor.cloneTo(e._albedoColor), this._emissionColor.cloneTo(e._emissionColor);
        }
    }
    rt.SmoothnessSource_MetallicGlossTexture_Alpha = 0, 
    rt.SmoothnessSource_AlbedoTexture_Alpha = 1, 
    rt.RENDERMODE_OPAQUE = 0, 
    rt.RENDERMODE_CUTOUT = 1, 
    rt.RENDERMODE_FADE = 2,
    rt.RENDERMODE_TRANSPARENT = 3, 
    rt.ALBEDOTEXTURE = nt.propertyNameToID("u_AlbedoTexture"), 
    rt.METALLICGLOSSTEXTURE = nt.propertyNameToID("u_MetallicGlossTexture"), 
    rt.NORMALTEXTURE = nt.propertyNameToID("u_NormalTexture"), 
    rt.PARALLAXTEXTURE = nt.propertyNameToID("u_ParallaxTexture"), 
    rt.OCCLUSIONTEXTURE = nt.propertyNameToID("u_OcclusionTexture"), 
    rt.EMISSIONTEXTURE = nt.propertyNameToID("u_EmissionTexture"), 
    rt.ALBEDOCOLOR = nt.propertyNameToID("u_AlbedoColor"), 
    rt.EMISSIONCOLOR = nt.propertyNameToID("u_EmissionColor"), 
    rt.METALLIC = nt.propertyNameToID("u_metallic"), 
    rt.SMOOTHNESS = nt.propertyNameToID("u_smoothness"), 
    rt.SMOOTHNESSSCALE = nt.propertyNameToID("u_smoothnessScale"), 
    rt.SMOOTHNESSSOURCE = -1, 
    rt.OCCLUSIONSTRENGTH = nt.propertyNameToID("u_occlusionStrength"), 
    rt.NORMALSCALE = nt.propertyNameToID("u_normalScale"), 
    rt.PARALLAXSCALE = nt.propertyNameToID("u_parallaxScale"), 
    rt.ENABLEEMISSION = -1, 
    rt.ENABLEREFLECT = -1, 
    rt.TILINGOFFSET = nt.propertyNameToID("u_TilingOffset"), 
    rt.CULL = nt.propertyNameToID("s_Cull"), 
    rt.BLEND = nt.propertyNameToID("s_Blend"), 
    rt.BLEND_SRC = nt.propertyNameToID("s_BlendSrc"), 
    rt.BLEND_DST = nt.propertyNameToID("s_BlendDst"), 
    rt.DEPTH_TEST = nt.propertyNameToID("s_DepthTest"), 
    rt.DEPTH_WRITE = nt.propertyNameToID("s_DepthWrite"), 
    rt.BEND = nt.propertyNameToID("u_bend"), 
    rt.SCALE = nt.propertyNameToID("u_scale");
    class ht {
        static fix() {
            this.addTrailByNextPosition();
        }
        static overrideLayaFunction() {
            let t = Laya.Loader.prototype, e = Laya.Loader, i = Laya.Browser, s = Laya.HttpRequest, n = Laya.Event, a = Laya.Browser.window, o = Laya.Utils3D;
            t._loadHttpRequest = function(t, o, r, h, _, l, d, c) {
                var p = t.substr(t.lastIndexOf("/") + 1);
                if (a.zip_files && a.zip_files[p]) {
                    var u = o;
                    switch (o) {
                      case e.JSON:
                        u = "string";
                    }
                    a.zip_files[p].async(u).then(t => {
                        switch (l.apply(d, [ 1 ]), o) {
                          case e.JSON:
                            h.apply(r, [ JSON.parse(t) ]);
                            break;

                          default:
                            h.apply(r, [ t ]);
                        }
                    });
                } else i.onVVMiniGame ? this._http = new s() : this._http || (this._http = new s()), 
                l && this._http.on(n.PROGRESS, _, l), h && this._http.on(n.COMPLETE, r, h), this._http.on(n.ERROR, d, c), 
                this._http.send(t, null, "get", o);
            }, Laya3D._onMaterilLmatLoaded = function(t, e) {
                var i, s = t.url, n = o.getURLVerion(s), r = Laya.URL.getPath(s), h = [], _ = [];
                e.customProps;
                switch (e.version) {
                  case "LAYAMATERIAL:01":
                  case "LAYAMATERIAL:02":
                    var l, d, c = e.props.textures;
                    if (c) for (l = 0, d = c.length; l < d; l++) {
                        var p = c[l], u = p.path;
                        if (u) {
                            var f = u.substr(u.lastIndexOf("/") + 1);
                            i = a.texture_path && a.texture_path[f] ? a.texture_path[f] : Laya3D.formatRelativePath(r, u), 
                            n && (i += n), h.push({
                                url: i,
                                constructParams: p.constructParams,
                                propertyParams: p.propertyParams
                            }), _.push(i), p.path = i;
                        }
                    }
                    break;

                  default:
                    throw new Error("Laya3D:unkonwn version.");
                }
                var m = h.length, g = m + 1, E = 1 / g;
                if (Laya3D._onProcessChange(t, 0, E, 1), m > 0) {
                    var L = Laya.Handler.create(null, Laya3D._onProcessChange, [ t, E, m / g ], !1);
                    Laya3D._innerFourthLevelLoaderManager._create(h, !1, Laya.Handler.create(null, Laya3D._onMateialTexturesLoaded, [ t, L, e, _ ]), L, null, null, null, 1, !0);
                } else Laya3D._onMateialTexturesLoaded(t, null, e, null);
            };
        }
        static layaBugfix_SingletonList() {
            Laya.SimpleSingletonList.prototype.add = function(t) {
                try {
                    if (-1 !== t._getIndexInList()) return;
                    this._add(t), t._setIndexInList(this.length++);
                } catch (t) {}
            }, Laya.SimpleSingletonList.prototype.remove = function(t) {
                try {
                    var e = t._getIndexInList();
                    if (this.length--, e !== this.length) {
                        var i = this.elements[this.length];
                        this.elements[e] = i, i._setIndexInList(e);
                    }
                    t._setIndexInList(-1);
                } catch (t) {}
            };
        }
        static addTrailByNextPosition() {
            let t = Laya.TrailGeometry.prototype, e = Laya.TrailGeometry, i = Laya.Vector3, s = Laya.MathUtils3D;
            t._addTrailByNextPosition = function(t, n) {
                var a = e._tempVector30, o = e._tempVector31;
                switch (this._owner.alignment) {
                  case 0:
                    var r = t.viewMatrix;
                    i.transformCoordinate(n, r, e._tempVector33), i.transformCoordinate(this._lastFixedVertexPosition, r, e._tempVector34), 
                    i.subtract(e._tempVector33, e._tempVector34, a), i.cross(e._tempVector33, a, o);
                    break;

                  case 1:
                    i.subtract(n, this._lastFixedVertexPosition, a), o.setValue(1, 0, 0);
                }
                i.normalize(o, o), i.scale(o, this._owner.widthMultiplier / 2, o);
                var h, _, l = i.scalarLength(a);
                this._needAddFirstVertex && (this._updateVerticesByPositionData(n, o, this._endIndex - 1), 
                this._needAddFirstVertex = !1), l - this._owner.minVertexDistance >= s.zeroTolerance ? (this._isTempEndVertex ? (h = this._endIndex - 1, 
                _ = l - this._subDistance[h], this._updateVerticesByPosition(n, o, l, h), this._owner._totalLength += _) : (this._endIndex === this._segementCount && this._resetData(), 
                this._updateVerticesByPosition(n, o, l, this._endIndex), this._owner._totalLength += l, 
                this._endIndex++), n.cloneTo(this._lastFixedVertexPosition), this._isTempEndVertex = !1) : (this._isTempEndVertex ? (h = this._endIndex - 1, 
                _ = l - this._subDistance[h], this._updateVerticesByPosition(n, o, l, h), this._owner._totalLength += _) : (this._endIndex === this._segementCount && this._resetData(), 
                this._updateVerticesByPosition(n, o, l, this._endIndex), this._owner._totalLength += l, 
                this._endIndex++), this._isTempEndVertex = !0);
            };
        }
    }
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(t.width, t.height) : Laya.init(t.width, t.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), 
            Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = t.scaleMode, 
            Laya.stage.screenMode = t.screenMode, 
            Laya.stage.alignV = t.alignV, 
            Laya.stage.alignH = t.alignH, 
            Laya.URL.exportSceneToJson = t.exportSceneToJson, 
            (t.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            t.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), 
            Laya.alertGlobalError = !0, 
            Laya.stage.useRetinalCanvas = !1, 
            Laya.ResourceVersion.enable("version.json", 
                Laya.Handler.create(this, this.onVersionLoaded), 
                Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            ht.fix(), 
            U.__initShader__(), 
            rt.__initShader__(), 
            //v.ins.playBg(), 
            c.ins.init(), 
            //m.pullZSData(), 
            //l.ins.request_zs_config(), 
            Laya.timer.frameOnce(1, this, () => {
                n.open(tt);
            });
        }
    }();
}();