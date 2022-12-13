!function () {
    'use strict';
    var _0x1b6eb0, _0x2df4a8, _0x3dba2d = Laya['ClassUtils']['regClass'];
    !function (_0xfd6fb1) {
        !function (_0x24c048) {
            class _0x28afc8 extends Laya['Scene'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['loadScene']('main/gameV' + 'iew');
                }
            }
            _0x24c048['gameViewUI'] = _0x28afc8, _0x3dba2d('ui.main.ga' + 'meViewUI', _0x28afc8);
            class _0x44b77a extends Laya['Scene'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['loadScene']('main/loadi' + 'ngView');
                }
            }
            _0x24c048['loadingVie' + 'wUI'] = _0x44b77a, _0x3dba2d('ui.main.lo' + 'adingViewU' + 'I', _0x44b77a);
            class _0x1185f4 extends Laya['Scene'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['loadScene']('main/menuV' + 'iew');
                }
            }
            _0x24c048['menuViewUI'] = _0x1185f4, _0x3dba2d('ui.main.me' + 'nuViewUI', _0x1185f4);
            class _0x207669 extends Laya['Scene'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['loadScene']('main/overV' + 'iew');
                }
            }
            _0x24c048['overViewUI'] = _0x207669, _0x3dba2d('ui.main.ov' + 'erViewUI', _0x207669);
        }(_0xfd6fb1['main'] || (_0xfd6fb1['main'] = {}));
    }(_0x1b6eb0 || (_0x1b6eb0 = {})), function (_0x143ddb) {
        class _0x29d3e4 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x29d3e4['uiView']);
            }
        }
        _0x29d3e4['uiView'] = {
            'type': 'View',
            'props': {
                'y': 0x0,
                'x': 0x0,
                'width': 0x2d0,
                'mouseThrough': !0x0,
                'height': 0x500
            },
            'compId': 0x1,
            'child': [{
                    'type': 'Box',
                    'props': {
                        'width': 0x2d0,
                        'mouseThrough': !0x0,
                        'height': 0x500,
                        'centerY': 0x0,
                        'centerX': 0x0
                    },
                    'compId': 0x4e,
                    'child': [
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0xdf,
                                'visible': !0x1,
                                'var': 'rankTop1',
                                'height': 0x78
                            },
                            'compId': 0x2f,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x23,
                                        'x': 0x0,
                                        'var': 'main_rankT' + 'op1',
                                        'skin': 'rank/rect1' + '.png',
                                        'sizeGrid': '20,20,20,2' + '0',
                                        'height': 0x53
                                    },
                                    'compId': 0x30,
                                    'child': [{
                                            'type': 'Text',
                                            'props': {
                                                'y': -0x12,
                                                'x': 0x23,
                                                'text': '查看完整排行榜>>',
                                                'fontSize': 0xf,
                                                'font': 'SimHei',
                                                'color': '#ffffff',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x31
                                        }]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x27,
                                        'x': 0x0,
                                        'width': 0xbe,
                                        'var': 'sub_rankTo' + 'p1',
                                        'height': 0x4e
                                    },
                                    'compId': 0x32,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x2,
                                                'x': 0x9,
                                                'width': 0x46,
                                                'skin': 'rank/defau' + 'lt.png',
                                                'name': 'iconHead',
                                                'height': 0x46
                                            },
                                            'compId': 0x33
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x9,
                                                'x': 0x52,
                                                'wordWrap': !0x0,
                                                'width': 0x88,
                                                'text': '虚位以待',
                                                'name': 'nickName',
                                                'height': 0x18,
                                                'fontSize': 0x18,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#4c4c4c',
                                                'align': 'left',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x35
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x28,
                                                'x': 0x53,
                                                'width': 0x83,
                                                'text': '得分:0',
                                                'name': 'txtExp',
                                                'height': 0x1e,
                                                'fontSize': 0x1e,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#ea516e',
                                                'bold': !0x0,
                                                'align': 'left',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x36
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x1,
                                'x': 0x0,
                                'width': 0x12c,
                                'visible': !0x1,
                                'var': 'rankTop2',
                                'height': 0xc8
                            },
                            'compId': 0x37,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x2b,
                                        'x': 0x0,
                                        'visible': !0x1,
                                        'var': 'main_rankT' + 'op2',
                                        'skin': 'rank/rect2' + '.png'
                                    },
                                    'compId': 0x38,
                                    'child': [{
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x78,
                                                'x': 0x40,
                                                'text': '查看完整排行榜>>',
                                                'fontSize': 0x16,
                                                'font': 'SimHei',
                                                'color': '#000000',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x39
                                        }]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x2f,
                                        'x': -0x1,
                                        'width': 0x125,
                                        'visible': !0x1,
                                        'var': 'sub_rankTo' + 'p2',
                                        'height': 0x87
                                    },
                                    'compId': 0x3a,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xb,
                                                'x': 0xba,
                                                'width': 0x5a,
                                                'skin': 'rank/defau' + 'lt.png',
                                                'name': 'iconHead',
                                                'height': 0x5a
                                            },
                                            'compId': 0x3b
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x27,
                                                'x': 0xd,
                                                'wordWrap': !0x0,
                                                'width': 0xa3,
                                                'text': '虚位以待',
                                                'name': 'nickName',
                                                'height': 0x30,
                                                'fontSize': 0x14,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#000000',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x3c
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x59,
                                                'x': 0x14,
                                                'width': 0x94,
                                                'text': '得分:0',
                                                'name': 'txtExp',
                                                'height': 0x16,
                                                'fontSize': 0x14,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#000000',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x3d
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0xa,
                                                'x': 0x2f,
                                                'width': 0x60,
                                                'text': '即将超越',
                                                'height': 0x1b,
                                                'fontSize': 0x14,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#000000',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x3e
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x1,
                                'x': 0x0,
                                'width': 0x2d0,
                                'visible': !0x1,
                                'var': 'rankEnd1',
                                'height': 0x500
                            },
                            'compId': 0x3f,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'width': 0x244,
                                        'visible': !0x1,
                                        'var': 'main_rankE' + 'nd1',
                                        'skin': 'rank/rect2' + '.png',
                                        'sizeGrid': '20,20,20,2' + '0',
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x40,
                                    'child': [{
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x2b,
                                                'x': 0x1f,
                                                'width': 0xa8,
                                                'text': '即将超越',
                                                'height': 0x36,
                                                'fontSize': 0x28,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#000000',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x46
                                        }]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'width': 0x23f,
                                        'visible': !0x1,
                                        'var': 'sub_rankEn' + 'd1',
                                        'height': 0x87,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x42,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'width': 0x64,
                                                'skin': 'rank/defau' + 'lt.png',
                                                'name': 'iconHead',
                                                'height': 0x64,
                                                'centerY': 0x0,
                                                'centerX': -0x16
                                            },
                                            'compId': 0x43
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x15,
                                                'x': 0x143,
                                                'wordWrap': !0x0,
                                                'width': 0xf6,
                                                'text': '虚位以待',
                                                'name': 'nickName',
                                                'height': 0x46,
                                                'fontSize': 0x1e,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#000000',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x44
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x5b,
                                                'x': 0x159,
                                                'width': 0xce,
                                                'text': '得分:0',
                                                'name': 'txtExp',
                                                'height': 0x29,
                                                'fontSize': 0x1e,
                                                'font': 'Microsoft\x20' + 'YaHei',
                                                'color': '#000000',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x45
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0xc3,
                                'x': 0x25c,
                                'width': 0xad,
                                'visible': !0x1,
                                'var': 'rankRight',
                                'height': 0xe0
                            },
                            'compId': 0x47,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x2,
                                        'x': 0xaa,
                                        'visible': !0x1,
                                        'var': 'bgRankRigh' + 't1',
                                        'skin': 'rank/rect3' + '.png',
                                        'scaleX': -0x1
                                    },
                                    'compId': 0x48,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x4,
                                                'x': 0x4c,
                                                'width': 0x32,
                                                'var': 'rankRight1',
                                                'skin': 'rank/defau' + 'lt.png',
                                                'height': 0x32
                                            },
                                            'compId': 0x4b
                                        }]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x51,
                                        'x': 0xbe,
                                        'visible': !0x1,
                                        'var': 'bgRankRigh' + 't2',
                                        'skin': 'rank/rect3' + '.png',
                                        'scaleX': -0x1
                                    },
                                    'compId': 0x49,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x4,
                                                'x': 0x4c,
                                                'width': 0x32,
                                                'var': 'rankRight2',
                                                'skin': 'rank/defau' + 'lt.png',
                                                'height': 0x32
                                            },
                                            'compId': 0x4c
                                        }]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x9f,
                                        'x': 0xbe,
                                        'visible': !0x1,
                                        'var': 'bgRankRigh' + 't3',
                                        'skin': 'rank/rect3' + '.png',
                                        'scaleX': -0x1
                                    },
                                    'compId': 0x4a,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x4,
                                                'x': 0x4c,
                                                'width': 0x32,
                                                'var': 'rankRight3',
                                                'skin': 'rank/defau' + 'lt.png',
                                                'height': 0x32
                                            },
                                            'compId': 0x4d
                                        }]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x14d,
                                'width': 0x2d0,
                                'visible': !0x1,
                                'var': 'rankEnd2',
                                'height': 0x1a2,
                                'centerX': 0x0
                            },
                            'compId': 0x4f,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x14,
                                        'x': 0x3c,
                                        'width': 0x258,
                                        'skin': 'rank/bg.pn' + 'g',
                                        'sizeGrid': '27,25,28,2' + '8',
                                        'height': 0x17c
                                    },
                                    'compId': 0x80
                                },
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x14,
                                        'x': 0x104,
                                        'texture': 'rank/title' + 'Rank.png'
                                    },
                                    'compId': 0x81
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x24,
                                        'x': 311.9697265625,
                                        'text': '排行榜',
                                        'fontSize': 0x24,
                                        'font': 'Microsoft\x20' + 'YaHei',
                                        'color': '#ffffff'
                                    },
                                    'compId': 0x82
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x98,
                                        'x': 0x98,
                                        'width': 0x64,
                                        'var': 'rankEnd2He' + 'ad1',
                                        'skin': 'rank/defau' + 'lt.png',
                                        'height': 0x64
                                    },
                                    'compId': 0x50,
                                    'child': [
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x77,
                                                'x': -0x33,
                                                'width': 0xce,
                                                'text': '虚位以待',
                                                'name': 'name',
                                                'height': 0x17,
                                                'fontSize': 0x18,
                                                'font': 'SimHei',
                                                'color': '#4c4c4c',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x51
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x9e,
                                                'x': -0x33,
                                                'width': 0xce,
                                                'text': '得分:0',
                                                'name': 'score',
                                                'height': 0x1d,
                                                'fontSize': 0x18,
                                                'font': 'SimHei',
                                                'color': '#4c4c4c',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x52
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x98,
                                        'x': 0x13c,
                                        'width': 0x64,
                                        'var': 'rankEnd2He' + 'ad2',
                                        'skin': 'rank/defau' + 'lt.png',
                                        'height': 0x64
                                    },
                                    'compId': 0x56,
                                    'child': [
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x77,
                                                'x': -0x33,
                                                'width': 0xce,
                                                'text': '虚位以待',
                                                'name': 'name',
                                                'height': 0x17,
                                                'fontSize': 0x18,
                                                'font': 'SimHei',
                                                'color': '#4c4c4c',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x57
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x9e,
                                                'x': -0x33,
                                                'width': 0xce,
                                                'text': '得分:0',
                                                'name': 'score',
                                                'height': 0x1d,
                                                'fontSize': 0x18,
                                                'font': 'SimHei',
                                                'color': '#4c4c4c',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x58
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x98,
                                        'x': 0x1e0,
                                        'width': 0x64,
                                        'var': 'rankEnd2He' + 'ad3',
                                        'skin': 'rank/defau' + 'lt.png',
                                        'height': 0x64
                                    },
                                    'compId': 0x53,
                                    'child': [
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x77,
                                                'x': -0x33,
                                                'width': 0xce,
                                                'text': '虚位以待',
                                                'name': 'name',
                                                'height': 0x17,
                                                'fontSize': 0x18,
                                                'font': 'SimHei',
                                                'color': '#4c4c4c',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x54
                                        },
                                        {
                                            'type': 'Text',
                                            'props': {
                                                'y': 0x9e,
                                                'x': -0x33,
                                                'width': 0xce,
                                                'text': '得分:0',
                                                'name': 'score',
                                                'height': 0x1d,
                                                'fontSize': 0x18,
                                                'font': 'SimHei',
                                                'color': '#4c4c4c',
                                                'align': 'center',
                                                'runtime': 'laya.displ' + 'ay.Text'
                                            },
                                            'compId': 0x55
                                        }
                                    ]
                                },
                                {
                                    'type': 'Text',
                                    'props': {
                                        'y': 0x176,
                                        'x': 0x1ca,
                                        'width': 0xb1,
                                        'var': 'showList',
                                        'text': '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
                                        'height': 0x1a,
                                        'color': '#ffffff',
                                        'runtime': 'laya.displ' + 'ay.Text'
                                    },
                                    'compId': 0x5b
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x1,
                                'x': 0x0,
                                'width': 0x2d0,
                                'visible': !0x1,
                                'var': 'rankList',
                                'mouseThrough': !0x0,
                                'height': 0x500
                            },
                            'compId': 0x4,
                            'child': [
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': -0x8c,
                                        'x': 0x0,
                                        'width': 0x2d0,
                                        'height': 0x618,
                                        'alpha': 0.5
                                    },
                                    'compId': 0x84,
                                    'child': [{
                                            'type': 'Rect',
                                            'props': {
                                                'width': 0x2d0,
                                                'lineWidth': 0x1,
                                                'height': 0x618,
                                                'fillColor': '#000000'
                                            },
                                            'compId': 0x85
                                        }]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x7f,
                                        'width': 0x258,
                                        'var': 'main_rankL' + 'ist',
                                        'skin': 'rank/bg.pn' + 'g',
                                        'sizeGrid': '22,22,27,2' + '7',
                                        'height': 0x2b8,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x3,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x0,
                                                'skin': 'rank/title' + 'Rank.png',
                                                'centerX': 0x7
                                            },
                                            'compId': 0x23,
                                            'child': [{
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0xd,
                                                        'x': 0x34,
                                                        'text': '排行榜',
                                                        'fontSize': 0x24,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#ffffff'
                                                    },
                                                    'compId': 0x5e
                                                }]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x27f,
                                                'x': 0xc4,
                                                'var': 'btnLeft',
                                                'skin': 'rank/jiant' + 'ou.png',
                                                'scaleX': -0x1
                                            },
                                            'compId': 0x2b
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x27f,
                                                'x': 0x19f,
                                                'var': 'btnRight',
                                                'skin': 'rank/jiant' + 'ou.png'
                                            },
                                            'compId': 0x2c
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x311,
                                                'var': 'btnBack',
                                                'skin': 'rank/butto' + 'n.png',
                                                'centerX': 0x0,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x2d,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x20,
                                                        'x': 0x17,
                                                        'skin': 'rank/img_b' + 'ack.png'
                                                    },
                                                    'compId': 0x60
                                                },
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x1c,
                                                        'x': 0x52,
                                                        'text': '返回游戏',
                                                        'fontSize': 0x30,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#ea516e',
                                                        'bold': !0x0
                                                    },
                                                    'compId': 0x61
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0xdd,
                                        'x': 0x5f,
                                        'width': 0x212,
                                        'var': 'sub_rankLi' + 'st',
                                        'height': 0x1b2
                                    },
                                    'compId': 0xd,
                                    'child': [
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': -0x9,
                                                'x': 0x0,
                                                'width': 0x212,
                                                'visible': !0x1,
                                                'var': 'rankCell0',
                                                'height': 0x64
                                            },
                                            'compId': 0x5,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x2,
                                                        'x': -0x22,
                                                        'width': 0x256,
                                                        'skin': 'rank/img_i' + 'tembg.png',
                                                        'height': 0x68
                                                    },
                                                    'compId': 0x62
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x6,
                                                        'x': 0x72,
                                                        'width': 0x59,
                                                        'skin': 'rank/defau' + 'lt.png',
                                                        'name': 'iconHead',
                                                        'height': 0x59
                                                    },
                                                    'compId': 0x6
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x22,
                                                        'x': 0x16,
                                                        'width': 0x28,
                                                        'visible': !0x0,
                                                        'skin': 'rank/rank1' + '.png',
                                                        'name': 'iconRank',
                                                        'height': 0x24
                                                    },
                                                    'compId': 0x7
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x26,
                                                        'x': 0xce,
                                                        'wordWrap': !0x0,
                                                        'width': 0xce,
                                                        'text': '虚位以待',
                                                        'name': 'nickName',
                                                        'height': 0x27,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x1,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x8
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x25,
                                                        'x': 0x15,
                                                        'wordWrap': !0x1,
                                                        'width': 0x2a,
                                                        'text': '1',
                                                        'name': 'txtRank',
                                                        'height': 0x24,
                                                        'fontSize': 0x24,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x0,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x9
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x27,
                                                        'x': 0x19b,
                                                        'width': 0x80,
                                                        'text': '得分:0',
                                                        'name': 'txtExp',
                                                        'height': 0x21,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'align': 'left',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0xa
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x62,
                                                'x': 0x0,
                                                'width': 0x212,
                                                'visible': !0x1,
                                                'var': 'rankCell1',
                                                'height': 0x64
                                            },
                                            'compId': 0x63,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x2,
                                                        'x': -0x22,
                                                        'width': 0x256,
                                                        'skin': 'rank/img_i' + 'tembg.png',
                                                        'height': 0x68
                                                    },
                                                    'compId': 0x64
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x6,
                                                        'x': 0x72,
                                                        'width': 0x59,
                                                        'skin': 'rank/defau' + 'lt.png',
                                                        'name': 'iconHead',
                                                        'height': 0x59
                                                    },
                                                    'compId': 0x65
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x22,
                                                        'x': 0x16,
                                                        'width': 0x28,
                                                        'visible': !0x0,
                                                        'skin': 'rank/rank1' + '.png',
                                                        'name': 'iconRank',
                                                        'height': 0x24
                                                    },
                                                    'compId': 0x66
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x26,
                                                        'x': 0xce,
                                                        'wordWrap': !0x0,
                                                        'width': 0xce,
                                                        'text': '虚位以待',
                                                        'name': 'nickName',
                                                        'height': 0x27,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x1,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x67
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x25,
                                                        'x': 0x15,
                                                        'wordWrap': !0x1,
                                                        'width': 0x2a,
                                                        'text': '1',
                                                        'name': 'txtRank',
                                                        'height': 0x24,
                                                        'fontSize': 0x24,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x0,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x68
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x27,
                                                        'x': 0x19b,
                                                        'width': 0x80,
                                                        'text': '得分:0',
                                                        'name': 'txtExp',
                                                        'height': 0x21,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'align': 'left',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x69
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0xcd,
                                                'x': 0x0,
                                                'width': 0x212,
                                                'visible': !0x1,
                                                'var': 'rankCell2',
                                                'height': 0x64
                                            },
                                            'compId': 0x6a,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x2,
                                                        'x': -0x22,
                                                        'width': 0x256,
                                                        'skin': 'rank/img_i' + 'tembg.png',
                                                        'height': 0x68
                                                    },
                                                    'compId': 0x6c
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x6,
                                                        'x': 0x72,
                                                        'width': 0x59,
                                                        'skin': 'rank/defau' + 'lt.png',
                                                        'name': 'iconHead',
                                                        'height': 0x59
                                                    },
                                                    'compId': 0x6d
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x22,
                                                        'x': 0x16,
                                                        'width': 0x28,
                                                        'visible': !0x0,
                                                        'skin': 'rank/rank3' + '.png',
                                                        'name': 'iconRank',
                                                        'height': 0x24
                                                    },
                                                    'compId': 0x6e
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x26,
                                                        'x': 0xce,
                                                        'wordWrap': !0x0,
                                                        'width': 0xce,
                                                        'text': '虚位以待',
                                                        'name': 'nickName',
                                                        'height': 0x27,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x1,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x6f
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x25,
                                                        'x': 0x15,
                                                        'wordWrap': !0x1,
                                                        'width': 0x2a,
                                                        'text': '3',
                                                        'name': 'txtRank',
                                                        'height': 0x24,
                                                        'fontSize': 0x24,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x0,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x70
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x27,
                                                        'x': 0x19b,
                                                        'width': 0x80,
                                                        'text': '得分:0',
                                                        'name': 'txtExp',
                                                        'height': 0x21,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'align': 'left',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x71
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x138,
                                                'x': 0x0,
                                                'width': 0x212,
                                                'visible': !0x1,
                                                'var': 'rankCell3',
                                                'height': 0x64
                                            },
                                            'compId': 0x6b,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x2,
                                                        'x': -0x22,
                                                        'width': 0x256,
                                                        'skin': 'rank/img_i' + 'tembg.png',
                                                        'height': 0x68
                                                    },
                                                    'compId': 0x72
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x6,
                                                        'x': 0x72,
                                                        'width': 0x59,
                                                        'skin': 'rank/defau' + 'lt.png',
                                                        'name': 'iconHead',
                                                        'height': 0x59
                                                    },
                                                    'compId': 0x73
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x22,
                                                        'x': 0x16,
                                                        'width': 0x28,
                                                        'visible': !0x0,
                                                        'skin': 'rank/rank2' + '.png',
                                                        'name': 'iconRank',
                                                        'height': 0x24
                                                    },
                                                    'compId': 0x74
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x26,
                                                        'x': 0xce,
                                                        'wordWrap': !0x0,
                                                        'width': 0xce,
                                                        'text': '虚位以待',
                                                        'name': 'nickName',
                                                        'height': 0x27,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x1,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x75
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x25,
                                                        'x': 0x15,
                                                        'wordWrap': !0x1,
                                                        'width': 0x2a,
                                                        'text': '4',
                                                        'name': 'txtRank',
                                                        'height': 0x24,
                                                        'fontSize': 0x24,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x0,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x76
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x27,
                                                        'x': 0x19b,
                                                        'width': 0x80,
                                                        'text': '得分:0',
                                                        'name': 'txtExp',
                                                        'height': 0x21,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'align': 'left',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x77
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x1a4,
                                                'x': 0x0,
                                                'width': 0x212,
                                                'visible': !0x1,
                                                'var': 'rankSelf',
                                                'height': 0x64
                                            },
                                            'compId': 0x78,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x2,
                                                        'x': -0x22,
                                                        'width': 0x256,
                                                        'skin': 'rank/img_i' + 'tembg.png',
                                                        'height': 0x68
                                                    },
                                                    'compId': 0x79
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x6,
                                                        'x': 0x72,
                                                        'width': 0x59,
                                                        'skin': 'rank/defau' + 'lt.png',
                                                        'name': 'iconHead',
                                                        'height': 0x59
                                                    },
                                                    'compId': 0x7a
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x22,
                                                        'x': 0x16,
                                                        'width': 0x28,
                                                        'visible': !0x0,
                                                        'skin': 'rank/rank2' + '.png',
                                                        'name': 'iconRank',
                                                        'height': 0x24
                                                    },
                                                    'compId': 0x7b
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x26,
                                                        'x': 0xce,
                                                        'wordWrap': !0x0,
                                                        'width': 0xce,
                                                        'text': '虚位以待',
                                                        'name': 'nickName',
                                                        'height': 0x27,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'bold': !0x1,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x7c
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x25,
                                                        'x': 0x15,
                                                        'wordWrap': !0x1,
                                                        'width': 0x2a,
                                                        'text': '1',
                                                        'name': 'txtRank',
                                                        'height': 0x24,
                                                        'fontSize': 0x24,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#ea516e',
                                                        'bold': !0x0,
                                                        'align': 'center',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x7d
                                                },
                                                {
                                                    'type': 'Text',
                                                    'props': {
                                                        'y': 0x27,
                                                        'x': 0x19b,
                                                        'width': 0x80,
                                                        'text': '得分:0',
                                                        'name': 'txtExp',
                                                        'height': 0x21,
                                                        'fontSize': 0x18,
                                                        'font': 'Microsoft\x20' + 'YaHei',
                                                        'color': '#4c4c4c',
                                                        'align': 'left',
                                                        'runtime': 'laya.displ' + 'ay.Text'
                                                    },
                                                    'compId': 0x7e
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }],
            'loadList': [
                'rank/rect1' + '.png',
                'rank/defau' + 'lt.png',
                'rank/rect2' + '.png',
                'rank/rect3' + '.png',
                'rank/bg.pn' + 'g',
                'rank/title' + 'Rank.png',
                'rank/jiant' + 'ou.png',
                'rank/butto' + 'n.png',
                'rank/img_b' + 'ack.png',
                'rank/img_i' + 'tembg.png',
                'rank/rank1' + '.png',
                'rank/rank3' + '.png',
                'rank/rank2' + '.png'
            ],
            'loadList3D': []
        }, _0x143ddb['RankUI'] = _0x29d3e4, _0x3dba2d('ui.RankUI', _0x29d3e4);
    }(_0x1b6eb0 || (_0x1b6eb0 = {}));
    class _0x101991 {
    }
    _0x101991['res_gameVi' + 'ew'] = 'main/gameV' + 'iew.scene', _0x101991['res_menuVi' + 'ew'] = 'main/menuV' + 'iew.scene', _0x101991['res_overVi' + 'ew'] = 'main/overV' + 'iew.scene', _0x101991['res_game3D' + 'Scene'] = 'h5/LayaSce' + 'ne_game/Co' + 'nventional' + '/game.ls', _0x101991['res_game3D' + 'Spr'] = 'h5/LayaSce' + 'ne_sprScen' + 'e/Conventi' + 'onal/sprSc' + 'ene.lh', _0x101991['sound_ding' + '1'] = 'sounds/din' + 'g1.m4a', _0x101991['sound_ding' + '23'] = 'sounds/din' + 'g23.m4a', _0x101991['sound_addS' + 'core'] = 'sounds/add' + 'Score.mp3', _0x101991['sound_game' + 'Over'] = 'sounds/gam' + 'eOver.m4a';
    class _0x1fe102 {
        static get ['randomColo' + 'rID']() {
            return this['_randomCol' + 'orID'];
        }
        static set ['randomColo' + 'rID'](_0x33b795) {
            this['_randomCol' + 'orID'] = _0x33b795 > 0x4 ? 0x0 : _0x33b795;
        }
    }
    _0x1fe102['maxScore'] = 0x0, _0x1fe102['addScore'] = 0x5, _0x1fe102['cubeNum'] = 0x6, _0x1fe102['maxSpeed'] = 0xc, _0x1fe102['distance'] = 0x64, _0x1fe102['changeTime'] = 0x3e8, _0x1fe102['jieDuanNum'] = 0xa, _0x1fe102['isCraeteZh' + 'angai'] = !0x0, _0x1fe102['isStartGam' + 'e'] = !0x1, _0x1fe102['isInvincib' + 'le'] = !0x1, _0x1fe102['isLoadingC' + 'omplete'] = !0x1, _0x1fe102['playerXOrZ'] = 0x0, _0x1fe102['zhangaiCol' + 'orArr'] = [
        {
            'r': 0xd8,
            'g': 0x56,
            'b': 0x56
        },
        {
            'r': 0xa4,
            'g': 0x55,
            'b': 0xd9
        },
        {
            'r': 0x7b,
            'g': 0xcd,
            'b': 0x3d
        },
        {
            'r': 0x58,
            'g': 0xb2,
            'b': 0xea
        },
        {
            'r': 0xf7,
            'g': 0xb2,
            'b': 0x11
        }
    ], _0x1fe102['qiangColor' + 'Arr1'] = [
        {
            'r': 0xc0,
            'g': 0xf4,
            'b': 0x2d
        },
        {
            'r': 0xf7,
            'g': 0xd5,
            'b': 0x12
        },
        {
            'r': 0xff,
            'g': 0x68,
            'b': 0x2f
        },
        {
            'r': 0xa8,
            'g': 0x42,
            'b': 0xd4
        },
        {
            'r': 0x59,
            'g': 0xb2,
            'b': 0xea
        }
    ], _0x1fe102['qiangColor' + 'Arr2'] = [
        {
            'r': 0x42,
            'g': 0xb7,
            'b': 0x14
        },
        {
            'r': 0xe2,
            'g': 0x76,
            'b': 0x1e
        },
        {
            'r': 0xbe,
            'g': 0x52,
            'b': 0x10
        },
        {
            'r': 0x64,
            'g': 0x3b,
            'b': 0xbd
        },
        {
            'r': 0x38,
            'g': 0x77,
            'b': 0xd4
        }
    ], _0x1fe102['qiangColor' + 'Arr3'] = [
        {
            'r': 0x5d,
            'g': 0xd6,
            'b': 0xa0
        },
        {
            'r': 0xc7,
            'g': 0xc3,
            'b': 0x45
        },
        {
            'r': 0xdd,
            'g': 0xb1,
            'b': 0x3c
        },
        {
            'r': 0x83,
            'g': 0x83,
            'b': 0xe3
        },
        {
            'r': 0x55,
            'g': 0xbe,
            'b': 0xeb
        }
    ], _0x1fe102['_randomCol' + 'orID'] = Math['floor'](0x5 * Math['random']()), _0x1fe102['isNewPlaye' + 'r'] = 0x0, _0x1fe102['rebrithTim' + 'es'] = 0x2, _0x1fe102['menuBtnID'] = 0x0, _0x1fe102['nowScore'] = 0x0, _0x1fe102['speed'] = 0x5, _0x1fe102['saveSpeed'] = 0x5, _0x1fe102['playerID'] = 0x0, _0x1fe102['zhangaiID0'] = 0x0, _0x1fe102['zhangaiID1'] = 0x1;
    class _0x2a6f30 {
        constructor() {
            this['_spr3dScen' + 'e'] = Laya['loader']['getRes'](_0x101991['res_game3D' + 'Spr']), this['diKuai'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('dikuai'), this['kuai_0'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('kuai1'), this['kuai_1'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('kuai2'), this['kuai_2'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('kuai3'), this['zhangai_0'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('zhangai1'), this['zhangai_1'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('zhangai2'), this['zhangai_2'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('zhangai3'), this['effTrail'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('effTrail'), this['effBoom'] = this['_spr3dScen' + 'e']['getChildBy' + 'Name']('effBoom'), this['effTrail']['trailFilte' + 'r']['alignment'] = 0x1;
        }
        static get ['I']() {
            return _0x2a6f30['_i'] || (_0x2a6f30['_i'] = new _0x2a6f30());
        }
    }
    class _0x40c3c4 extends Laya['EventDispa' + 'tcher'] {
        constructor() {
            super(), this['CHANGE_WAY'] = 'CHANGE_WAY', this['CHANGE_PLA' + 'YER_MESH'] = 'CHANGE_PLA' + 'YER_MESH', this['ADDSOCRE'] = 'ADDSOCRE', this['USE_PROP'] = 'USE_PROP', this['CHANGE_TRA' + 'IL'] = 'CHANGE_TRA' + 'IL', this['eff_OTHER_' + 'CLOSE'] = 'eff_OTHER_' + 'CLOSE';
        }
        static get ['I']() {
            return this['_i'] || (this['_i'] = new _0x40c3c4());
        }
    }
    class _0x20ff6e extends Laya['BlinnPhong' + 'Material'] {
        constructor() {
            super(), this['setShaderN' + 'ame']('CustomShad' + 'er');
        }
        get ['albedoText' + 'ure']() {
            return this['_shaderVal' + 'ues']['getTexture'](_0x20ff6e['ALBEDOTEXT' + 'URES']);
        }
        set ['albedoText' + 'ure'](_0x3ad552) {
            this['_shaderVal' + 'ues']['setTexture'](_0x20ff6e['ALBEDOTEXT' + 'URES'], _0x3ad552);
        }
        get ['lightDir']() {
            return this['_shaderVal' + 'ues']['getVector3'](_0x20ff6e['LIGHTDIR']);
        }
        set ['lightDir'](_0x4e4143) {
            this['_shaderVal' + 'ues']['setVector3'](_0x20ff6e['LIGHTDIR'], _0x4e4143);
        }
        get ['lightDir1']() {
            return this['_shaderVal' + 'ues']['getVector3'](_0x20ff6e['LIGHTDIR1']);
        }
        set ['lightDir1'](_0x177288) {
            this['_shaderVal' + 'ues']['setVector3'](_0x20ff6e['LIGHTDIR1'], _0x177288);
        }
        get ['lightDir2']() {
            return this['_shaderVal' + 'ues']['getVector3'](_0x20ff6e['LIGHTDIR2']);
        }
        set ['lightDir2'](_0x1be1e0) {
            this['_shaderVal' + 'ues']['setVector3'](_0x20ff6e['LIGHTDIR2'], _0x1be1e0);
        }
        ['onEnable']() {
        }
        ['onDisable']() {
        }
    }
    _0x20ff6e['LIGHTDIR'] = Laya['Shader3D']['propertyNa' + 'meToID']('lightDir'), _0x20ff6e['LIGHTDIR1'] = Laya['Shader3D']['propertyNa' + 'meToID']('lightDir1'), _0x20ff6e['LIGHTDIR2'] = Laya['Shader3D']['propertyNa' + 'meToID']('lightDir2'), _0x20ff6e['ALBEDOTEXT' + 'URES'] = Laya['Shader3D']['propertyNa' + 'meToID']('AlbedoText' + 'ure');
    class _0x157574 extends Laya['Script3D'] {
        constructor() {
            super(), this['_state'] = 0x0, this['_endID'] = 0x0, this['diX'] = 0x0, this['diZ'] = 0x0, this['xOrZ'] = 0x0, this['_nowTimes'] = 0x0, this['_pos'] = 0x0, this['_first'] = !0x1, this['_nullWayTi' + 'mes'] = 0x0, this['_nullWayNu' + 'm'] = 0x2, this['z_times'] = 0x0, this['saveRandom'] = 0x0, this['randomTime' + 's'] = 0x0;
        }
        ['onStart']() {
            this['_planeArr'] = [[]], this['diX'] = 0x0, this['diZ'] = 0x0, this['xOrZ'] = 0x0, this['_state'] = 0x0, this['_nowTimes'] = 0x0, this['_endID'] = 0x0;
            let _0x2d62c5 = _0x1fe102['randomColo' + 'rID'];
            this['_material'] = new _0x20ff6e();
            let _0xe83d79 = _0x1fe102['qiangColor' + 'Arr1'][_0x2d62c5], _0x5aaa6d = _0x1fe102['qiangColor' + 'Arr2'][_0x2d62c5], _0x311ccb = _0x1fe102['qiangColor' + 'Arr3'][_0x2d62c5];
            this['_material']['lightDir'] = new Laya['Vector3'](_0xe83d79['r'] / 0xff, _0xe83d79['g'] / 0xff, _0xe83d79['b'] / 0xff), this['_material']['lightDir1'] = new Laya['Vector3'](_0x5aaa6d['r'] / 0xff, _0x5aaa6d['g'] / 0xff, _0x5aaa6d['b'] / 0xff), this['_material']['lightDir2'] = new Laya['Vector3'](_0x311ccb['r'] / 0xff, _0x311ccb['g'] / 0xff, _0x311ccb['b'] / 0xff), this['_material']['albedoText' + 'ure'] = Laya['loader']['getRes']('h5/w.png'), _0x2a6f30['I']['diKuai']['meshRender' + 'er']['material'] = this['_material'];
            let _0x4bdb10 = _0x1fe102['zhangaiCol' + 'orArr'][_0x2d62c5]['r'] / 0xff, _0x4ebe34 = _0x1fe102['zhangaiCol' + 'orArr'][_0x2d62c5]['g'] / 0xff, _0x29cc80 = _0x1fe102['zhangaiCol' + 'orArr'][_0x2d62c5]['b'] / 0xff;
            _0x2a6f30['I']['zhangai_0']['meshRender' + 'er']['sharedMate' + 'rial']['albedoColo' + 'rR'] = _0x4bdb10, _0x2a6f30['I']['zhangai_0']['meshRender' + 'er']['sharedMate' + 'rial']['albedoColo' + 'rG'] = _0x4ebe34, _0x2a6f30['I']['zhangai_0']['meshRender' + 'er']['sharedMate' + 'rial']['albedoColo' + 'rB'] = _0x29cc80;
            for (let _0x54ae67 = 0x0; _0x54ae67 < 0x4; _0x54ae67++) {
                this['_planeArr'][_0x54ae67] = [];
                for (let _0x4916d4 = 0x0; _0x4916d4 < _0x1fe102['cubeNum']; _0x4916d4++) {
                    let _0x449342 = _0x2a6f30['I']['diKuai']['clone']();
                    this['_planeArr'][_0x54ae67][_0x4916d4] = _0x449342, this['owner']['addChild'](this['_planeArr'][_0x54ae67][_0x4916d4])['active'] = !0x1, this['_planeArr'][_0x54ae67][_0x4916d4]['transform']['localPosit' + 'ionX'] = this['diX'], this['_planeArr'][_0x54ae67][_0x4916d4]['transform']['localPosit' + 'ionY'] = 0x0, this['_planeArr'][_0x54ae67][_0x4916d4]['transform']['localPosit' + 'ionZ'] = this['diZ'], 0x0 == this['xOrZ'] ? (this['diZ'] += _0x1fe102['distance'], this['diZ'] = parseInt('' + this['diZ'])) : 0x1 == this['xOrZ'] && (this['diX'] += _0x1fe102['distance'], this['diX'] = parseInt('' + this['diX']));
                }
                this['xOrZ'] = 0x0 == this['xOrZ'] ? 0x1 : 0x0;
            }
            console['log']('进入板子脚本'), this['dikuaiInit'](), _0x40c3c4['I']['on'](_0x40c3c4['I']['CHANGE_WAY'], this, this['changeWay']), this['owner']['layer'] = 0x1;
        }
        ['changeWay']() {
            _0x1fe102['isCraeteZh' + 'angai'] = !0x0, Laya['timer']['frameOnce'](_0x1fe102['distance'] / _0x1fe102['speed'] * _0x1fe102['cubeNum'], this, () => {
                let _0x8e64f9 = _0x1fe102['randomColo' + 'rID'], _0x3340f7 = _0x1fe102['qiangColor' + 'Arr1'][_0x8e64f9], _0x334b15 = _0x1fe102['qiangColor' + 'Arr2'][_0x8e64f9], _0x59a4eb = _0x1fe102['qiangColor' + 'Arr3'][_0x8e64f9];
                Laya['Tween']['to'](this['_material']['lightDir'], {
                    'x': _0x3340f7['r'] / 0xff,
                    'y': _0x3340f7['g'] / 0xff,
                    'z': _0x3340f7['b'] / 0xff
                }, 0x7d0), Laya['Tween']['to'](this['_material']['lightDir1'], {
                    'x': _0x334b15['r'] / 0xff,
                    'y': _0x334b15['g'] / 0xff,
                    'z': _0x334b15['b'] / 0xff
                }, 0x7d0), Laya['Tween']['to'](this['_material']['lightDir2'], {
                    'x': _0x59a4eb['r'] / 0xff,
                    'y': _0x59a4eb['g'] / 0xff,
                    'z': _0x59a4eb['b'] / 0xff
                }, 0x7d0);
                let _0x2035e0 = _0x1fe102['zhangaiCol' + 'orArr'][_0x8e64f9]['r'] / 0xff, _0x2e5122 = _0x1fe102['zhangaiCol' + 'orArr'][_0x8e64f9]['g'] / 0xff, _0x23203b = _0x1fe102['zhangaiCol' + 'orArr'][_0x8e64f9]['b'] / 0xff;
                Laya['Tween']['to'](_0x2a6f30['I']['zhangai_0']['meshRender' + 'er']['sharedMate' + 'rial'], {
                    'albedoColorR': _0x2035e0,
                    'albedoColorG': _0x2e5122,
                    'albedoColorB': _0x23203b
                }, _0x1fe102['changeTime']);
            }), _0x1fe102['playerID'] != _0x1fe102['zhangaiID0'] ? _0x1fe102['zhangaiID0'] = this['changeZhan' + 'gai'](_0x1fe102['zhangaiID1'], _0x1fe102['zhangaiID0']) : _0x1fe102['playerID'] != _0x1fe102['zhangaiID1'] ? _0x1fe102['zhangaiID1'] = this['changeZhan' + 'gai'](_0x1fe102['zhangaiID0'], _0x1fe102['zhangaiID1']) : console['log']('错误！！！！');
        }
        ['changeZhan' + 'gai'](_0x166b93, _0x4b2965) {
            let _0x4d3379 = 0x0;
            if (_0x166b93 == _0x4b2965)
                return console['log']('错误！！！两个值不能' + '相同'), 0x0;
            switch (_0x166b93) {
            case 0x0:
                switch (_0x4b2965) {
                case 0x1:
                    _0x4d3379 = 0x2;
                    break;
                case 0x2:
                    _0x4d3379 = 0x1;
                }
                break;
            case 0x1:
                switch (_0x4b2965) {
                case 0x0:
                    _0x4d3379 = 0x2;
                    break;
                case 0x2:
                    _0x4d3379 = 0x0;
                }
                break;
            case 0x2:
                switch (_0x4b2965) {
                case 0x0:
                    _0x4d3379 = 0x1;
                    break;
                case 0x1:
                    _0x4d3379 = 0x0;
                }
            }
            return _0x4d3379;
        }
        ['dikuaiInit']() {
            for (let _0x1aed00 = 0x0; _0x1aed00 < 0x3; _0x1aed00++) {
                let _0x5b8da1;
                _0x5b8da1 = _0x1aed00 < 0x1 ? Math['floor'](Math['random']() + _0x1fe102['cubeNum'] - 0x2) : _0x1aed00 < 0x2 ? Math['floor'](0x2 * Math['random']() + _0x1fe102['cubeNum'] - 0x3) : Math['floor'](0x2 * Math['random']() + 0x2);
                for (let _0x140b3f = 0x0; _0x140b3f < this['_planeArr'][_0x1aed00]['length']; _0x140b3f++)
                    if (_0x1aed00 < 0x2 ? this['_planeArr'][_0x1aed00][_0x140b3f]['active'] = !0x0 : _0x140b3f < 0x4 && (this['_endID'] = _0x140b3f, this['_planeArr'][_0x1aed00][_0x140b3f]['active'] = !0x0), _0x5b8da1 == _0x140b3f && _0x1fe102['isCraeteZh' + 'angai']) {
                        let _0x42a82c = this['createZhan' + 'gAi']();
                        this['_planeArr'][_0x1aed00][_0x140b3f]['addChild'](_0x42a82c), _0x42a82c['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x0), 0x0 == _0x1aed00 ? _0x42a82c['transform']['localRotat' + 'ionEulerY'] = -0x5a : 0x1 == _0x1aed00 ? _0x42a82c['transform']['localRotat' + 'ionEulerY'] = 0x0 : 0x2 == _0x1aed00 && (_0x42a82c['transform']['localRotat' + 'ionEulerY'] = -0x5a);
                    }
            }
        }
        ['dikuaiStat' + 'eSwitch']() {
            switch (this['_state']) {
            case 0x0:
                this['dikuaiStat' + 'e0']();
                break;
            case 0x1:
                this['dikuaiStat' + 'e1']();
            }
        }
        ['dikuaiStat' + 'e0']() {
            this['_endID']++, this['_endID'] < _0x1fe102['cubeNum'] - 0x1 ? (this['_planeArr'][0x2][this['_endID']]['active'] = !0x0, this['_planeArr'][0x2][this['_endID']]['transform']['localPosit' + 'ionY'] = _0x1fe102['distance'], Laya['Tween']['to'](this['_planeArr'][0x2][this['_endID']]['transform'], { 'localPositionY': 0x0 }, 0x5 * parseInt(_0x1fe102['distance'] / _0x1fe102['speed'] + ''), Laya['Ease']['circOut'])) : this['_endID'] >= _0x1fe102['cubeNum'] - 0x1 && (this['_planeArr'][0x2][this['_endID']]['active'] = !0x0, this['_planeArr'][0x2][this['_endID']]['transform']['localPosit' + 'ionY'] = _0x1fe102['distance'], Laya['Tween']['to'](this['_planeArr'][0x2][this['_endID']]['transform'], { 'localPositionY': 0x0 }, 0x5 * parseInt(_0x1fe102['distance'] / _0x1fe102['speed'] + ''), Laya['Ease']['circIn']), this['_state'] = 0x1);
        }
        ['dikuaiStat' + 'e1']() {
            this['_planeArr'][this['_planeArr']['length'] - 0x1][this['_pos']]['transform']['localPosit' + 'ionY'] = _0x1fe102['distance'], this['_planeArr'][this['_planeArr']['length'] - 0x1][this['_pos']]['active'] = !0x0, Laya['Tween']['to'](this['_planeArr'][this['_planeArr']['length'] - 0x1][this['_pos']]['transform'], { 'localPositionY': 0x0 }, 0x5 * parseInt(_0x1fe102['distance'] / _0x1fe102['speed'] + ''), Laya['Ease']['circOut'], Laya['Handler']['create'](this, () => {
                this['_planeArr'][this['_planeArr']['length'] - 0x1][this['_pos']]['transform']['localPosit' + 'ionY'] = 0x0;
            })), Laya['Tween']['to'](this['_planeArr'][0x0][this['_pos']]['transform'], { 'localPositionY': -_0x1fe102['distance'] }, 0x5 * parseInt(_0x1fe102['distance'] / _0x1fe102['speed'] + ''), Laya['Ease']['circIn'], Laya['Handler']['create'](this, function () {
                if (this['_planeArr'][0x0][this['_pos']]['active'] = !0x1, this['_pos']++, this['_pos'] > _0x1fe102['cubeNum'] - 0x1) {
                    let _0x5588a1;
                    this['_pos'] = 0x0, this['_planeArr']['push'](this['_planeArr'][0x0]), _0x5588a1 = Math['floor'](Math['random']() * (_0x1fe102['cubeNum'] - 0x2) + 0x1);
                    for (let _0x321d5f = 0x0; _0x321d5f < _0x1fe102['cubeNum']; _0x321d5f++)
                        if (this['_planeArr'][this['_planeArr']['length'] - 0x1][_0x321d5f]['transform']['localPosit' + 'ionX'] = this['diX'], this['_planeArr'][this['_planeArr']['length'] - 0x1][_0x321d5f]['transform']['localPosit' + 'ionY'] = 0x0, this['_planeArr'][this['_planeArr']['length'] - 0x1][_0x321d5f]['transform']['localPosit' + 'ionZ'] = this['diZ'], 0x0 != this['_planeArr'][this['_planeArr']['length'] - 0x1][_0x321d5f]['numChildre' + 'n'] && this['_planeArr'][this['_planeArr']['length'] - 0x1][_0x321d5f]['destroyChi' + 'ldren'](), 0x0 == this['xOrZ'] ? (this['diZ'] += _0x1fe102['distance'], this['diZ'] = parseInt('' + this['diZ'])) : 0x1 == this['xOrZ'] && (this['diX'] += _0x1fe102['distance'], this['diX'] = parseInt('' + this['diX'])), _0x321d5f == _0x5588a1 && _0x1fe102['isCraeteZh' + 'angai']) {
                            let _0xc01200 = this['createZhan' + 'gAi']();
                            this['_planeArr'][this['_planeArr']['length'] - 0x1][_0x321d5f]['addChild'](_0xc01200), _0xc01200['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x0), 0x0 == this['xOrZ'] ? _0xc01200['transform']['localRotat' + 'ionEulerY'] = 0x5a : 0x1 == this['xOrZ'] && (_0xc01200['transform']['localRotat' + 'ionEulerY'] = 0x0);
                        }
                    this['xOrZ'] = 0x0 == this['xOrZ'] ? 0x1 : 0x0, this['_planeArr']['shift']();
                }
                if (!this['_first']) {
                    let _0x36e3e4 = Math['floor'](Math['random']() * (_0x1fe102['cubeNum'] - 0x2) + 0x1);
                    for (let _0x599d87 = 0x0; _0x599d87 < _0x1fe102['cubeNum']; _0x599d87++)
                        if (_0x599d87 == _0x36e3e4 && _0x1fe102['isCraeteZh' + 'angai']) {
                            this['_first'] = !0x0;
                            let _0x4636b5 = this['createZhan' + 'gAi']();
                            this['_planeArr'][this['_planeArr']['length'] - 0x1][_0x599d87]['addChild'](_0x4636b5), _0x4636b5['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0x0), 0x0 == this['xOrZ'] ? _0x4636b5['transform']['localRotat' + 'ionEulerY'] = 0x0 : 0x1 == this['xOrZ'] && (_0x4636b5['transform']['localRotat' + 'ionEulerY'] = 0x5a);
                        }
                }
            }['bind'](this)), null, !0x0);
        }
        ['createZhan' + 'gAi']() {
            if (_0x1fe102['isCraeteZh' + 'angai'] && (this['_nowTimes']++, this['_nowTimes'] >= _0x1fe102['jieDuanNum'] && (this['_nowTimes'] = 0x0, _0x1fe102['isCraeteZh' + 'angai'] = !0x1)), this['z_times']++, this['z_times'] <= 0x3)
                return _0x2a6f30['I']['zhangai_' + _0x1fe102['playerID']]['clone']();
            let _0x1613cc, _0x1cfb4d, _0x1e9266 = Math['floor'](0x2 * Math['random']());
            return _0x1e9266 == this['saveRandom'] ? (this['randomTime' + 's']++, this['randomTime' + 's'] >= 0x2 && (this['randomTime' + 's'] = 0x0, _0x1e9266 = 0x0 == _0x1e9266 ? 0x1 : 0x0)) : this['randomTime' + 's'] = 0x0, this['saveRandom'] = _0x1e9266, 0x0 == _0x1e9266 ? (0x0 == _0x1fe102['zhangaiID0'] ? _0x1613cc = _0x2a6f30['I']['zhangai_0']['clone']() : 0x1 == _0x1fe102['zhangaiID0'] ? _0x1613cc = _0x2a6f30['I']['zhangai_1']['clone']() : 0x2 == _0x1fe102['zhangaiID0'] && (_0x1613cc = _0x2a6f30['I']['zhangai_2']['clone']()), _0x1613cc) : 0x1 == _0x1e9266 ? (0x0 == _0x1fe102['zhangaiID1'] ? _0x1cfb4d = _0x2a6f30['I']['zhangai_0']['clone']() : 0x1 == _0x1fe102['zhangaiID1'] ? _0x1cfb4d = _0x2a6f30['I']['zhangai_1']['clone']() : 0x2 == _0x1fe102['zhangaiID1'] && (_0x1cfb4d = _0x2a6f30['I']['zhangai_2']['clone']()), _0x1cfb4d) : void 0x0;
        }
        ['onDisable']() {
            console['log']('板子清除111'), this['_planeArr']['length'] = 0x0, this['owner']['destroyChi' + 'ldren'](), _0x40c3c4['I']['off'](_0x40c3c4['I']['CHANGE_WAY'], this, this['changeWay']);
        }
    }
    class _0x290b53 extends Laya['Script3D'] {
        constructor() {
            super();
        }
        ['onStart']() {
            this['m_owner'] = this['owner'];
        }
        ['onUpdate']() {
        }
        ['onLateUpda' + 'te']() {
            _0x57f6b0['I']['m_player'] && (this['m_owner']['transform']['position'] = _0x57f6b0['I']['m_player']['transform']['position']);
        }
        ['onDisable']() {
        }
    }
    class _0x2be4f9 extends Laya['Script3D'] {
        constructor() {
            super(), this['_material'] = new Laya['UnlitMater' + 'ial'](), this['m_X'] = 0x0, this['m_Z'] = 0x0, this['xOrZ'] = 0x0, this['_times'] = 0x0, this['_zhuanXTim' + 'es'] = 0x0, this['_zhuanZTim' + 'es'] = 0x0, this['_kuai_Z'] = 0x1, this['_kuai_X'] = 0x1, this['_isColl'] = !0x1, this['_isFirstCo' + 'll'] = !0x0;
        }
        ['onStart']() {
            this['m_owner'] = this['owner'], this['m_meshNode'] = this['m_owner']['getChildBy' + 'Name']('mesh'), this['m_meshNode']['addChild'](_0x2a6f30['I']['kuai_0']['clone']()), this['m_owner']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['m_mesh'] = this['m_meshNode']['getChildAt'](0x0), this['m_mesh']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['eff_xue'] = this['m_owner']['getChildBy' + 'Name']('xue'), this['eff_chun'] = this['m_owner']['getChildBy' + 'Name']('chun'), this['eff_xia'] = this['m_owner']['getChildBy' + 'Name']('xia'), this['effSpr'] = this['m_owner']['getChildBy' + 'Name']('effSpr'), this['effL'] = this['effSpr']['getChildBy' + 'Name']('effL'), this['effR'] = this['effSpr']['getChildBy' + 'Name']('effR'), this['eff2'] = this['effSpr']['getChildBy' + 'Name']('eff2'), _0x2a6f30['I']['kuai_0']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x1fe102['playerID'] = 0x0, this['pass_times'] = 0x0, this['carTo2DPos'] = new Laya['Vector3'](), this['switchMesh'](), this['trailClone'] = _0x2a6f30['I']['effTrail']['clone'](), this['trailClone']['trailFilte' + 'r']['alignment'] = 0x1, this['trailClone']['name'] = 'trailClone', _0x57f6b0['I']['m_Scene3d']['addChild'](this['trailClone']), this['trailClone']['trailFilte' + 'r']['time'] = 0.5, _0x40c3c4['I']['on'](_0x40c3c4['I']['CHANGE_PLA' + 'YER_MESH'], this, this['changeMesh']), _0x40c3c4['I']['on'](_0x40c3c4['I']['CHANGE_TRA' + 'IL'], this, this['changeTrai' + 'l']), this['m_colorID'] = _0x1fe102['randomColo' + 'rID'] + 0x1, this['setSceneEf' + 'f'](_0x1fe102['randomColo' + 'rID']), this['changeFowr' + 'd'](0x0);
        }
        ['changeWay']() {
            Laya['timer']['frameOnce'](_0x1fe102['distance'] / _0x1fe102['speed'] * _0x1fe102['cubeNum'], this, () => {
                let _0x1c9e96 = Math['floor'](0x5 * Math['random']()), _0x2456c1 = 0x0;
                _0x1c9e96 == _0x2456c1 && (0x0 == _0x1c9e96 ? _0x1c9e96++ : _0x1c9e96--), _0x2456c1 = _0x1c9e96, this['setSceneEf' + 'f'](_0x1fe102['randomColo' + 'rID']);
            }), _0x1fe102['speed'] < _0x1fe102['maxSpeed'] && (_0x1fe102['speed'] += 0x1, _0x1fe102['saveSpeed'] = _0x1fe102['speed']);
        }
        ['setMeshRen' + 'der']() {
        }
        ['setSceneEf' + 'f'](_0x5b08e9) {
            switch (_0x5b08e9) {
            case 0x0:
                this['eff_chun']['particleSy' + 'stem']['play'](), this['eff_xia']['particleSy' + 'stem']['stop'](), this['eff_xue']['particleSy' + 'stem']['stop']();
                break;
            case 0x1:
                this['eff_chun']['particleSy' + 'stem']['stop'](), this['eff_xia']['particleSy' + 'stem']['play'](), this['eff_xue']['particleSy' + 'stem']['stop']();
                break;
            case 0x2:
            case 0x3:
                this['eff_chun']['particleSy' + 'stem']['stop'](), this['eff_xia']['particleSy' + 'stem']['stop'](), this['eff_xue']['particleSy' + 'stem']['stop']();
                break;
            case 0x4:
                this['eff_chun']['particleSy' + 'stem']['stop'](), this['eff_xia']['particleSy' + 'stem']['stop'](), this['eff_xue']['particleSy' + 'stem']['play']();
            }
            switch (this['m_colorID'] = _0x1fe102['randomColo' + 'rID'] + 0x1, _0x1fe102['playerID']) {
            case 0x0:
                var _0x5d616c = Laya['loader']['getRes']('tietu/kuai' + this['m_colorID'] + '_1.png');
                this['m_mesh']['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x5d616c;
                break;
            case 0x1:
                _0x5d616c = Laya['loader']['getRes']('tietu/kuai' + this['m_colorID'] + '_2.png'), this['m_mesh']['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x5d616c;
                break;
            case 0x2:
                _0x5d616c = Laya['loader']['getRes']('tietu/kuai' + this['m_colorID'] + '_3.png'), this['m_mesh']['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x5d616c;
            }
        }
        ['changeTrai' + 'l']() {
            this['trailClone']['trailFilte' + 'r'];
        }
        ['changeMesh']() {
            _0x1fe102['playerID'] = _0x1fe102['playerID'] == _0x1fe102['zhangaiID0'] ? _0x1fe102['zhangaiID1'] : _0x1fe102['zhangaiID0'], this['switchMesh']();
        }
        ['switchMesh']() {
            switch (_0x1fe102['playerID']) {
            case 0x0:
                this['m_mesh']['meshFilter']['sharedMesh'] = _0x2a6f30['I']['kuai_0']['meshFilter']['sharedMesh'];
                var _0x236c98 = Laya['loader']['getRes']('tietu/kuai' + this['m_colorID'] + '_1.png');
                this['m_mesh']['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x236c98, this['m_mesh']['transform']['localRotat' + 'ionEulerY'] = 0x87, this['m_mesh']['transform']['localRotat' + 'ionEulerX'] = -0x5a;
                break;
            case 0x1:
                this['m_mesh']['meshFilter']['sharedMesh'] = _0x2a6f30['I']['kuai_1']['meshFilter']['sharedMesh'], _0x236c98 = Laya['loader']['getRes']('tietu/kuai' + this['m_colorID'] + '_2.png'), (this['m_mesh']['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x236c98, this['m_mesh']['transform']['localRotat' + 'ionEulerY'] = 0x5a, this['m_mesh']['transform']['localRotat' + 'ionEulerX'] = -0x5a);
                break;
            case 0x2:
                this['m_mesh']['meshFilter']['sharedMesh'] = _0x2a6f30['I']['kuai_2']['meshFilter']['sharedMesh'], _0x236c98 = Laya['loader']['getRes']('tietu/kuai' + this['m_colorID'] + '_3.png'), (this['m_mesh']['meshRender' + 'er']['material']['albedoText' + 'ure'] = _0x236c98, this['m_mesh']['transform']['localRotat' + 'ionEulerY'] = 0xb4, this['m_mesh']['transform']['localRotat' + 'ionEulerX'] = -0x5a);
            }
        }
        ['changeFowr' + 'd'](_0x3acf22) {
            switch (_0x3acf22) {
            case 0x0:
                this['effL']['particleSy' + 'stem']['startRotat' + 'ionConstan' + 'tSeparate'] = new Laya['Vector3'](0x0, 1.57, 0x0), this['effR']['particleSy' + 'stem']['startRotat' + 'ionConstan' + 'tSeparate'] = new Laya['Vector3'](0x0, 1.57, 0x0), this['effL']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0xd, 0x0, 0x0), this['effR']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](-0xd, 0x0, 0x0), this['eff2']['particleSy' + 'stem']['startRotat' + 'ionConstan' + 'tSeparate'] = new Laya['Vector3'](-1.57, 3.14, 0x0);
                break;
            case 0x1:
                this['effL']['particleSy' + 'stem']['startRotat' + 'ionConstan' + 'tSeparate'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['effR']['particleSy' + 'stem']['startRotat' + 'ionConstan' + 'tSeparate'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['effL']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, 0xd), this['effR']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0x0, -0xd), this['eff2']['particleSy' + 'stem']['startRotat' + 'ionConstan' + 'tSeparate'] = new Laya['Vector3'](-1.57, -1.57, 0x0);
            }
        }
        ['onUpdate']() {
            _0x1fe102['isStartGam' + 'e'] && (0x0 == this['xOrZ'] ? (this['m_Z'] += _0x1fe102['speed'], this['m_Z'] >= _0x1fe102['distance'] * this['_kuai_Z'] && (_0x57f6b0['I']['m_plane']['getCompone' + 'nt'](_0x157574)['dikuaiStat' + 'eSwitch'](), this['_kuai_Z'] % _0x1fe102['cubeNum'] == 0x0 && (this['_zhuanZTim' + 'es']++, this['m_Z'] = this['_zhuanZTim' + 'es'] * _0x1fe102['cubeNum'] * _0x1fe102['distance'], this['xOrZ'] = 0x0 == this['xOrZ'] ? 0x1 : 0x0, _0x1fe102['playerXOrZ'] = this['xOrZ'], this['changeFowr' + 'd'](this['xOrZ'])), this['_kuai_Z']++), this['m_Z'] = parseInt('' + this['m_Z']), this['m_owner']['transform']['localPosit' + 'ionZ'] = this['m_Z']) : 0x1 == this['xOrZ'] && (this['m_X'] += _0x1fe102['speed'], this['m_X'] >= _0x1fe102['distance'] * this['_kuai_X'] && (_0x57f6b0['I']['m_plane']['getCompone' + 'nt'](_0x157574)['dikuaiStat' + 'eSwitch'](), this['_kuai_X'] % _0x1fe102['cubeNum'] == 0x0 && (this['_zhuanXTim' + 'es']++, this['m_X'] = this['_zhuanXTim' + 'es'] * _0x1fe102['cubeNum'] * _0x1fe102['distance'], this['xOrZ'] = 0x1 == this['xOrZ'] ? 0x0 : 0x1, _0x1fe102['playerXOrZ'] = this['xOrZ'], this['changeFowr' + 'd'](this['xOrZ'])), this['_kuai_X']++), this['m_X'] = parseInt('' + this['m_X']), this['m_owner']['transform']['localPosit' + 'ionX'] = this['m_X']), this['trailClone']['transform']['position'] = this['m_owner']['transform']['position'], this['trailClone']['transform']['localPosit' + 'ionY'] = 0x2);
        }
        ['onTriggerE' + 'nter'](_0x1723de) {
            'zhangai1' == _0x1723de['owner']['name'] ? 0x0 == _0x1fe102['playerID'] ? this['passFunc'](_0x1723de['owner']) : this['unPassFunc'](_0x1723de['owner']) : 'zhangai2' == _0x1723de['owner']['name'] ? 0x1 == _0x1fe102['playerID'] ? this['passFunc'](_0x1723de['owner']) : this['unPassFunc'](_0x1723de['owner']) : 'zhangai3' == _0x1723de['owner']['name'] && (0x2 == _0x1fe102['playerID'] ? this['passFunc'](_0x1723de['owner']) : this['unPassFunc'](_0x1723de['owner'])), _0x1fe102['isInvincib' + 'le'] || (this['_isColl'] = !0x0);
        }
        ['onTriggerE' + 'xit'](_0x4abbe6) {
            'z' == _0x4abbe6['owner']['name'][0x0] && 'h' == _0x4abbe6['owner']['name'][0x1] && 'a' == _0x4abbe6['owner']['name'][0x2] && (this['pass_times']++, this['pass_times'] >= _0x1fe102['jieDuanNum'] && (_0x1fe102['randomColo' + 'rID']++, _0x40c3c4['I']['event'](_0x40c3c4['I']['CHANGE_WAY']), this['pass_times'] = 0x0, this['changeWay']()), _0x1fe102['isInvincib' + 'le'] && this['_isFirstCo' + 'll'] && this['_isColl'] && (_0x40c3c4['I']['event'](_0x40c3c4['I']['ADDSOCRE'], _0x4abbe6['owner']), this['_isFirstCo' + 'll'] = !0x1));
        }
        ['passFunc'](_0x504078) {
            _0x40c3c4['I']['event'](_0x40c3c4['I']['ADDSOCRE'], _0x504078);
        }
        ['unPassFunc'](_0x355817) {
            _0x1fe102['isInvincib' + 'le'] ? _0x40c3c4['I']['event'](_0x40c3c4['I']['ADDSOCRE'], _0x355817) : _0x1fe102['isStartGam' + 'e'] && (this['_isFirstCo' + 'll'] = !0x0, _0x1fe102['isStartGam' + 'e'] = !0x1, _0x57f6b0['I']['score']['text'] = '\x20', _0x57f6b0['I']['box_start']['visible'] = ![], _0x57f6b0['I']['btn_music']['visible'] = ![], _0x57f6b0['I']['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', Laya['Scene']['open'](_0x101991['res_overVi' + 'ew'], !0x1));
        }
        ['onDisable']() {
            _0x40c3c4['I']['off'](_0x40c3c4['I']['CHANGE_PLA' + 'YER_MESH'], this, this['changeMesh']), this['m_meshNode']['destroyChi' + 'ldren'](), this['trailClone'] && this['trailClone']['removeSelf']();
        }
    }
    class _0x11d08b extends Laya['Script'] {
        constructor() {
            super();
        }
        ['onStart']() {
            this['m_owner'] = this['owner'], this['m_owner']['x'] = Math['random']() < 0.5 ? -(0x96 * Math['random']() + 0x64) : 0x96 * Math['random']() + 0x2d0, this['m_owner']['y'] = 0x47e * Math['random']() + 0x32, this['m_owner']['sizeGrid'] = '15,15,15,1' + '5,0', this['m_id'] = this['m_owner']['y'] < 0x168 ? 0x0 : 0x1, this['m_speed'] = Math['floor'](0xa * Math['random']() + 0x5), this['isStopEff'] = !0x0, _0x40c3c4['I']['on'](_0x40c3c4['I']['eff_OTHER_' + 'CLOSE'], this, this['closeEff']);
        }
        ['closeEff'](_0x6da864) {
            console['log']('????', _0x6da864), this['isStopEff'] = 0x2 != _0x6da864;
        }
        ['onUpdate']() {
            this['isStopEff'] || (0x0 == this['m_id'] ? (this['m_owner']['x'] += this['m_speed'], this['m_owner']['x'] > 0x2d0 && (this['m_owner']['x'] = -(0x96 * Math['random']() + 0x64), this['m_owner']['y'] = 0x47e * Math['random']() + 0x32, this['m_speed'] = Math['floor'](0x5 * Math['random']() + 0x5))) : (this['m_owner']['x'] -= this['m_speed'], this['m_owner']['x'] < -this['m_owner']['width'] && (this['m_owner']['x'] = 0x96 * Math['random']() + 0x2d0, this['m_owner']['y'] = 0x47e * Math['random']() + 0x32, this['m_speed'] = Math['floor'](0x5 * Math['random']() + 0x5))), _0x1fe102['isStartGam' + 'e'] && (this['m_owner']['y'] += _0x1fe102['speed'] / 0x3));
        }
        ['onDisable']() {
            _0x40c3c4['I']['off'](_0x40c3c4['I']['eff_OTHER_' + 'CLOSE'], this, this['closeEff']);
        }
    }
    class _0x4f2dc3 extends Laya['Script'] {
        constructor() {
            super();
        }
        ['onStart']() {
            this['m_owner'] = this['owner'], this['m_owner']['x'] = this['getPosX'](), this['m_owner']['y'] = this['getPosY']();
            let _0x26745f = 0x14 * Math['random']() + 0x10;
            this['m_owner']['width'] = _0x26745f, this['m_owner']['height'] = _0x26745f, this['m_speed'] = Math['random']() / 0x1e;
            let _0x4594b1 = Math['random']() - 0.5;
            this['m_owner']['alpha'] = _0x4594b1, this['m_stat'] = this['m_stat'] = _0x4594b1 < 0x0 ? 0x0 : 0x1, this['isStopEff'] = !0x0, _0x40c3c4['I']['on'](_0x40c3c4['I']['eff_OTHER_' + 'CLOSE'], this, this['closeEff']);
        }
        ['closeEff'](_0x32796a) {
            console['log']('????', _0x32796a), this['isStopEff'] = 0x4 != _0x32796a;
        }
        ['onUpdate']() {
            this['isStopEff'] || (0x0 == this['m_stat'] ? (this['m_owner']['alpha'] -= this['m_speed'], this['m_owner']['alpha'] <= 0x0 && (this['m_stat'] = 0x1, this['m_owner']['x'] = this['getPosX'](), this['m_owner']['y'] = this['getPosY']())) : (this['m_owner']['alpha'] += this['m_speed'], this['m_owner']['alpha'] >= 0x1 && (this['m_stat'] = 0x0)), _0x1fe102['isStartGam' + 'e'] && (0x0 == _0x1fe102['playerXOrZ'] ? (this['m_owner']['x'] -= _0x1fe102['speed'] / 0x2, this['m_owner']['y'] += _0x1fe102['speed'] / 0x3) : (this['m_owner']['x'] += _0x1fe102['speed'] / 0x2, this['m_owner']['y'] += _0x1fe102['speed'] / 0x3)));
        }
        ['getPosX']() {
            return 0x2a8 * Math['random']() + 0x14;
        }
        ['getPosY']() {
            return 0x384 * Math['random']() + 0x32;
        }
        ['onDisable']() {
            _0x40c3c4['I']['off'](_0x40c3c4['I']['eff_OTHER_' + 'CLOSE'], this, this['closeEff']);
        }
    }
    class _0x57f6b0 extends _0x1b6eb0['main']['gameViewUI'] {
        constructor() {
            super(), this['_Lab'] = new Laya['Label'](), this['_spr'] = new Laya['Sprite'](), this['propTime'] = 0x5, this['y'] = (Laya['stage']['height'] - this['height']) / 0x2;
        }
        ['onEnable']() {
            this['autoDestro' + 'yAtClosed'] = !0x0, _0x57f6b0['I'] || (_0x57f6b0['I'] = this), Laya['Scene']['open'](_0x101991['res_menuVi' + 'ew'], !0x1), 0x0 == _0x1fe102['isNewPlaye' + 'r'] && this['on'](Laya['Event']['CLICK'], this, this['startGameC' + 'LICK']), _0x40c3c4['I']['on'](_0x40c3c4['I']['ADDSOCRE'], this, this['addScore']), _0x40c3c4['I']['on'](_0x40c3c4['I']['USE_PROP'], this, this['propFunc']);
            let _0xae485c = _0x1fe102['randomColo' + 'rID'];
            this['_randomBG0' + 'ID'] = _0xae485c, this['_randomBG1' + 'ID'] = _0xae485c, this['bg0']['skin'] = 'res/bg' + this['_randomBG0' + 'ID'] + '.png', this['bg1']['skin'] = 'res/bg' + this['_randomBG1' + 'ID'] + '.png', this['bg0']['alpha'] = 0x0, this['bg1']['alpha'] = 0x1, this['score']['text'] = '\x20', this['onComplete'](), this['initEff'](), this['chooseEff'](), this['btn_music']['visible'] = this['spr_pause']['visible'] = this['lab_pause']['visible'] = this['box_start']['visible'] = ![], (this['img_pause']['on'](Laya['Event']['CLICK'], this, this['pauseGame']), this['img_ss']['on'](Laya['Event']['CLICK'], this, this['addSpeed'])), this['btn_music']['on'](Laya['Event']['CLICK'], this, this['changeMusi' + 'c']), this['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png';
        }
        ['changeMusi' + 'c']() {
            window['WebAudioEn' + 'gine']['pause'] = !window['WebAudioEn' + 'gine']['pause'], this['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', Laya['LocalStora' + 'ge']['setItem']('Shape-Shif' + 't-Run-musi' + 'cState', JSON['stringify'](window['WebAudioEn' + 'gine']['pause']));
        }
        ['pauseGame'](_0x35eb4b) {
            _0x35eb4b['stopPropag' + 'ation']();
            if (this['newPlayerI' + 'mg'])
                return;
            this['spr_pause']['visible'] = this['lab_pause']['visible'] = !this['spr_pause']['visible'], window['pauseGame'] = !![], this['img_pause']['skin'] = this['lab_pause']['visible'] ? 'res/Contin' + 'ue.png' : 'res/Pause.' + 'png', _0x1fe102['isStartGam' + 'e'] = !_0x1fe102['isStartGam' + 'e'];
        }
        ['addSpeed'](_0x5b0faa) {
            _0x5b0faa['stopPropag' + 'ation']();
            if (this['newPlayerI' + 'mg'])
                return;
            if (_0x1fe102['speed'] == _0x1fe102['maxSpeed']) {
                platform['getInstanc' + 'e']()['prompt0']('Accelerati' + 'ng!');
                return;
            }
            platform['getInstanc' + 'e']()['showReward'](() => {
                _0x1fe102['rebrithTim' + 'es']--, _0x4e8acf['hide'](_0x563e88['END2']), console['log']('无敌！！！'), _0x40c3c4['I']['event'](_0x40c3c4['I']['USE_PROP']);
            });
        }
        ['initEff']() {
            let _0x3a17a7 = Math['floor'](0x5 * Math['random']() + 0x5);
            for (let _0x56a17e = 0x0; _0x56a17e < _0x3a17a7; _0x56a17e++) {
                let _0x32c236 = new Laya['Image']();
                _0x32c236['skin'] = 'res/yun.pn' + 'g', this['effSpr']['addChild'](_0x32c236), _0x32c236['width'] = 0x82 * Math['random']() + 0x3c, _0x32c236['addCompone' + 'nt'](_0x11d08b);
            }
            this['effSpr']['visible'] = !0x1;
            let _0x1850c8 = Math['floor'](0xa * Math['random']() + 0x14);
            for (let _0x1d7deb = 0x0; _0x1d7deb < _0x1850c8; _0x1d7deb++) {
                let _0x5556fa = new Laya['Image']();
                _0x5556fa['skin'] = 'res/ye.png', this['effSpr_xin' + 'g']['addChild'](_0x5556fa), _0x5556fa['addCompone' + 'nt'](_0x4f2dc3);
            }
            this['effSpr_xin' + 'g']['visible'] = !0x1;
        }
        ['chooseEff']() {
            switch (_0x1fe102['randomColo' + 'rID']) {
            case 0x0:
            case 0x1:
                this['effSpr_xin' + 'g']['visible'] && (this['effSpr_xin' + 'g']['visible'] = !0x1), this['effSpr']['visible'] && (this['effSpr']['visible'] = !0x1);
                break;
            case 0x2:
                this['effSpr_xin' + 'g']['visible'] && (this['effSpr_xin' + 'g']['visible'] = !0x1), this['effSpr']['visible'] = !0x0, _0x40c3c4['I']['event'](_0x40c3c4['I']['eff_OTHER_' + 'CLOSE'], 0x2);
                break;
            case 0x3:
                this['effSpr_xin' + 'g']['visible'] = !0x0, this['effSpr']['visible'] && (this['effSpr']['visible'] = !0x1), _0x40c3c4['I']['event'](_0x40c3c4['I']['eff_OTHER_' + 'CLOSE'], 0x4);
                break;
            case 0x4:
                this['effSpr_xin' + 'g']['visible'] && (this['effSpr_xin' + 'g']['visible'] = !0x1), this['effSpr']['visible'] && (this['effSpr']['visible'] = !0x1);
            }
        }
        ['newPlayerV' + 'iew']() {
            this['newPlayerI' + 'mg'] = new Laya['Image'](), this['newPlayerI' + 'mg']['skin'] = 'res/tanchu' + 'ang.png', this['newPlayerI' + 'mg']['sizeGrid'] = '15,15,15,1' + '5,0', this['newPlayerI' + 'mg']['width'] = 0x258, this['newPlayerI' + 'mg']['height'] = 0x190, this['newPlayerI' + 'mg']['anchorX'] = 0.5, this['newPlayerI' + 'mg']['anchorY'] = 0.5, this['newPlayerI' + 'mg']['centerX'] = 0x0, this['newPlayerI' + 'mg']['centerY'] = 0x0;
            let _0x329b00 = new Laya['Label']();
            _0x329b00['text'] = 'Click\x20to\x20c' + 'hange\x20shap' + 'e', _0x329b00['fontSize'] = 0x2d, _0x329b00['centerX'] = 0x0, _0x329b00['y'] = 0x14, _0x329b00['bold'] = !0x0, this['newPlayerI' + 'mg']['addChild'](_0x329b00), this['addChild'](this['newPlayerI' + 'mg']), this['createAni'](this['newPlayerI' + 'mg']);
        }
        ['createAni'](_0x3679c4) {
            this['_skeleton'] = new Laya['Skeleton'](), this['_skeleton'] = _0x3a1c60['_templet0']['buildArmat' + 'ure'](0x0), this['_skeleton']['play'](0x0, !0x0), _0x3679c4['addChild'](this['_skeleton']), this['_skeleton']['pos'](_0x3679c4['width'] / 0x2, 0x17c);
        }
        ['clearAni'](_0x3dc53a) {
            this['_templet'] && this['_templet']['destroy'] && this['_templet']['destroy'](), this['_skeleton'] && (this['_skeleton']['stop'](), this['_skeleton']['destroy']()), _0x3dc53a['destroyChi' + 'ldren']();
        }
        ['addScore'](_0x4c450f) {
            _0x1fe102['nowScore'] += _0x1fe102['addScore'], this['score']['text'] = '' + _0x1fe102['nowScore'], this['carTo2DPos'] = new Laya['Vector3'](), Laya['SoundManag' + 'er']['setSoundVo' + 'lume'](0x1, _0x101991['sound_addS' + 'core']), Laya['SoundManag' + 'er']['playSound'](_0x101991['sound_addS' + 'core']), this['_spr']['visible'] = !0x0, this['_Lab']['text'] = '+\x20' + _0x1fe102['addScore'], this['_Lab']['color'] = '#FFFFFF', this['_Lab']['fontSize'] = 0x3c, this['_Lab']['bold'] = !0x0, this['_Lab']['scaleX'] = 0x0, this['_Lab']['scaleY'] = 0x0, this['_Lab']['anchorX'] = 0.5, this['_Lab']['anchorY'] = 0.5, this['_Lab']['alpha'] = 0x1, this['_Lab']['x'] = 0x0, this['_Lab']['y'] = 0x0, this['_spr']['addChild'](this['_Lab']), Laya['stage']['addChild'](this['_spr']), Laya['Tween']['to'](this['_Lab'], {
                'scaleX': 0x1,
                'scaleY': 0x1
            }, 0x190, Laya['Ease']['backOut']), Laya['Tween']['to'](this['_Lab'], {
                'alpha': 0x0,
                'y': this['_Lab']['y'] - 0xc8
            }, 0x258, null, Laya['Handler']['create'](this, function () {
                this['_spr']['visible'] = !0x1, Laya['timer']['clear'](this, this['onScoreLoo' + 'p']);
            })), Laya['timer']['frameLoop'](0x1, this, this['onScoreLoo' + 'p'], [_0x4c450f]), _0x1fe102['isInvincib' + 'le'] && this['playEff'](_0x4c450f);
        }
        ['onScoreLoo' + 'p'](_0x482d35) {
            _0x482d35 && (this['m_camera']['viewport']['project'](_0x482d35['transform']['position'], this['m_camera']['projection' + 'ViewMatrix'], this['carTo2DPos']), this['_spr']['x'] = this['carTo2DPos']['x'] / Laya['stage']['clientScal' + 'eX'], this['_spr']['y'] = this['carTo2DPos']['y'] / Laya['stage']['clientScal' + 'eY'] - 0x64);
        }
        ['startGameC' + 'LICK']() {
            this['score']['text'] = '0', this['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', (0x1 == _0x1fe102['menuBtnID'] && _0x40c3c4['I']['event'](_0x40c3c4['I']['USE_PROP']), this['newPlayerI' + 'mg'] && (this['clearAni'](this['newPlayerI' + 'mg']), this['newPlayerI' + 'mg']['destroy'](), this['newPlayerI' + 'mg'] = null), _0x1fe102['isNewPlaye' + 'r'] = 0x1, _0x1fe102['isStartGam' + 'e'] = !0x0, this['off'](Laya['Event']['CLICK'], this, this['startGameC' + 'LICK']));
        }
        ['onComplete']() {
            this['m_Scene3d'] = Laya['loader']['getRes'](_0x101991['res_game3D' + 'Scene']), this['m_plane'] = this['m_Scene3d']['getChildBy' + 'Name']('plane'), this['m_player'] = this['m_Scene3d']['getChildBy' + 'Name']('player'), this['m_cameraNo' + 'de'] = this['m_Scene3d']['getChildBy' + 'Name']('cameraNode'), this['m_camera'] = this['m_cameraNo' + 'de']['getChildBy' + 'Name']('Main\x20Camer' + 'a'), this['light'] = this['m_Scene3d']['getChildBy' + 'Name']('Directiona' + 'l\x20Light'), this['scene3dAdd' + 'Spr'](), _0x40c3c4['I']['on'](_0x40c3c4['I']['CHANGE_WAY'], this, this['changeWay']);
        }
        ['changeWay']() {
            Laya['timer']['frameOnce'](_0x1fe102['distance'] / _0x1fe102['speed'] * _0x1fe102['cubeNum'], this, () => {
                this['_randomBG0' + 'ID'] = _0x1fe102['randomColo' + 'rID'], this['bg0']['skin'] = 'res/bg' + this['_randomBG0' + 'ID'] + '.png', Laya['Tween']['to'](this['bg0'], { 'alpha': 0x1 }, 0x7d0), Laya['Tween']['to'](this['bg1'], { 'alpha': 0x0 }, 0x5dc, null, Laya['Handler']['create'](this, () => {
                    this['_randomBG1' + 'ID'] = this['_randomBG0' + 'ID'], this['bg1']['skin'] = 'res/bg' + this['_randomBG1' + 'ID'] + '.png', this['bg1']['alpha'] = 0x1, this['bg0']['alpha'] = 0x0;
                })), this['chooseEff']();
            }), console['log']('速度！！！', _0x1fe102['speed']);
        }
        ['scene3dAdd' + 'Spr']() {
            this['sceneSpr']['addChild'](this['m_Scene3d']), this['addCompone' + 'ntToSpr']();
        }
        ['playEff'](_0x170867) {
            if (_0x170867) {
                let _0x37c90c = _0x2a6f30['I']['effBoom']['clone']();
                this['m_Scene3d']['addChild'](_0x37c90c), _0x37c90c['transform']['position'] = _0x170867['transform']['position'], 0x0 == _0x170867['transform']['localRotat' + 'ionEulerY'] ? (_0x37c90c['transform']['localRotat' + 'ionEulerY'] = -0x5a, _0x37c90c['transform']['localPosit' + 'ionX'] += 0x14) : (_0x37c90c['transform']['localRotat' + 'ionEulerY'] = 0xb4, _0x37c90c['transform']['localPosit' + 'ionZ'] += 0x14);
                for (let _0xc145ed = 0x0; _0xc145ed < _0x37c90c['numChildre' + 'n']; _0xc145ed++)
                    _0x37c90c['getChildAt'](_0xc145ed)['particleSy' + 'stem']['play']();
                this['_effColneS' + 'ave'] && this['_effColneS' + 'ave']['destroy'](), this['_effColneS' + 'ave'] = _0x37c90c, _0x170867['removeSelf']();
            }
        }
        ['gameOver']() {
            _0x1fe102['nowScore'] = 0x0, this['score']['text'] = '\x20', _0x1fe102['speed'] = 0x5, _0x1fe102['saveSpeed'] = _0x1fe102['speed'], _0x1fe102['playerID'] = 0x0, _0x1fe102['zhangaiID0'] = 0x0, _0x1fe102['zhangaiID1'] = 0x1, _0x1fe102['isCraeteZh' + 'angai'] = !0x0, this['removeComp' + 'onentToSpr'](), this['addCompone' + 'ntToSpr'](), this['m_player']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['m_cameraNo' + 'de']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0);
        }
        ['addCompone' + 'ntToSpr']() {
            this['m_plane']['addCompone' + 'nt'](_0x157574), this['m_player']['addCompone' + 'nt'](_0x2be4f9), this['m_cameraNo' + 'de']['addCompone' + 'nt'](_0x290b53);
        }
        ['removeComp' + 'onentToSpr']() {
            this['m_plane']['getCompone' + 'nt'](_0x157574) && this['m_plane']['getCompone' + 'nt'](_0x157574)['destroy'](), this['m_player']['getCompone' + 'nt'](_0x2be4f9) && this['m_player']['getCompone' + 'nt'](_0x2be4f9)['destroy'](), this['m_cameraNo' + 'de']['getCompone' + 'nt'](_0x290b53) && this['m_cameraNo' + 'de']['getCompone' + 'nt'](_0x290b53)['destroy']();
        }
        ['propFunc']() {
            _0x1fe102['isStartGam' + 'e'] = !0x0, _0x1fe102['isInvincib' + 'le'] = !0x0, this['m_Scene3d']['getChildBy' + 'Name']('trailClone')['trailFilte' + 'r']['time'] = 0x0, this['m_Scene3d']['getChildBy' + 'Name']('trailClone')['active'] = !0x1, this['m_player']['getChildBy' + 'Name']('effSpr')['getChildBy' + 'Name']('effL')['particleSy' + 'stem']['play'](), this['m_player']['getChildBy' + 'Name']('effSpr')['getChildBy' + 'Name']('effR')['particleSy' + 'stem']['play'](), this['m_player']['getChildBy' + 'Name']('effSpr')['getChildBy' + 'Name']('eff2')['particleSy' + 'stem']['play'](), Laya['Tween']['to'](this['m_player']['transform'], {
                'localScaleX': 1.5,
                'localScaleY': 1.5,
                'localScaleZ': 1.5
            }, 0x3e8, Laya['Ease']['elasticOut']), _0x1fe102['speed'] = _0x1fe102['maxSpeed'], this['_countDown' + 'BG'] = new Laya['Image'](), this['_countDown' + 'BG']['skin'] = 'res/daojis' + 'hiBG.png', this['_countDown' + 'BG']['anchorX'] = 0.5, this['_countDown' + 'BG']['anchorY'] = 0.5, this['_countDown' + 'BG']['y'] = _0x2f35a0['height'] / 0x2 - 0xfa, this['_countDown' + 'BG']['visible'] = !0x1, this['addChild'](this['_countDown' + 'BG']), this['_countDown' + 'BG']['centerX'] = 0x0, this['_countDown' + 'Num'] = new Laya['Image'](), this['_countDown' + 'Num']['skin'] = 'res/daojis' + 'hi3.png', this['_countDown' + 'Num']['anchorX'] = 0.5, this['_countDown' + 'Num']['anchorY'] = 0.5, this['_countDown' + 'BG']['addChild'](this['_countDown' + 'Num']), this['_countDown' + 'Num']['centerX'] = 0x0, this['_countDown' + 'Num']['centerY'] = 0x0, Laya['timer']['loop'](0x3e8, this, this['propTimeLo' + 'op']), _0x40c3c4['I']['event'](_0x40c3c4['I']['CHANGE_TRA' + 'IL']);
        }
        ['propTimeLo' + 'op']() {
            if (!_0x1fe102['isStartGam' + 'e'])
                return;
            this['propTime'] <= 0x0 && (this['propTime'] = 0x5, Laya['Tween']['to'](this['m_player']['transform'], {
                'localScaleX': 0x1,
                'localScaleY': 0x1,
                'localScaleZ': 0x1
            }, 0x1f4, null, Laya['Handler']['create'](this, () => {
                Laya['timer']['clear'](this, this['propTimeLo' + 'op']), this['m_Scene3d']['getChildBy' + 'Name']('trailClone')['trailFilte' + 'r']['time'] = 0.5, this['m_Scene3d']['getChildBy' + 'Name']('trailClone')['active'] = !0x0, this['m_player']['getChildBy' + 'Name']('effSpr')['getChildBy' + 'Name']('effL')['particleSy' + 'stem']['stop'](), this['m_player']['getChildBy' + 'Name']('effSpr')['getChildBy' + 'Name']('effR')['particleSy' + 'stem']['stop'](), this['m_player']['getChildBy' + 'Name']('effSpr')['getChildBy' + 'Name']('eff2')['particleSy' + 'stem']['stop'](), _0x1fe102['speed'] = _0x1fe102['saveSpeed'], _0x40c3c4['I']['event'](_0x40c3c4['I']['CHANGE_TRA' + 'IL']), Laya['timer']['once'](0x64, this, () => {
                    _0x1fe102['isInvincib' + 'le'] = !0x1;
                });
            })), this['_countDown' + 'BG']['removeSelf']()), this['propTime'] <= 0x3 && (this['_countDown' + 'BG']['visible'] = !0x0, this['_countDown' + 'BG']['scaleX'] = 0x1, this['_countDown' + 'BG']['scaleY'] = 0x1, Laya['Tween']['to'](this['_countDown' + 'Num'], {
                'scaleX': 1.2,
                'scaleY': 1.2
            }, 0x64, null, Laya['Handler']['create'](this, () => {
                Laya['Tween']['to'](this['_countDown' + 'Num'], {
                    'scaleX': 0.2,
                    'scaleY': 0.2
                }, 0x320);
            })), this['propTime'] <= 0x1 ? Laya['SoundManag' + 'er']['playSound'](_0x101991['sound_ding' + '1'], 0x1) : Laya['SoundManag' + 'er']['playSound'](_0x101991['sound_ding' + '23'], 0x1), this['_countDown' + 'Num']['skin'] = 'res/daojis' + 'hi' + this['propTime'] + '.png'), this['propTime']--;
        }
        ['onDisable']() {
            this['off'](Laya['Event']['CLICK'], this, this['startGameC' + 'LICK']), _0x40c3c4['I']['off'](_0x40c3c4['I']['ADDSOCRE'], this, this['addScore']), _0x40c3c4['I']['off'](_0x40c3c4['I']['USE_PROP'], this, this['propFunc']);
        }
    }
    class _0x5c6cd2 extends Laya['Script'] {
        constructor() {
            super();
        }
        ['onStart']() {
        }
        ['onMouseDow' + 'n']() {
            _0x1fe102['isStartGam' + 'e'] && _0x40c3c4['I']['event'](_0x40c3c4['I']['CHANGE_PLA' + 'YER_MESH']);
        }
        ['onDisable']() {
        }
    }
    class _0x563e88 {
    }
    _0x563e88['LIST'] = 'rankList', _0x563e88['TOP1'] = 'rankTop1', _0x563e88['TOP2'] = 'rankTop2', _0x563e88['END1'] = 'rankEnd1', _0x563e88['END2'] = 'rankEnd2', _0x563e88['RIGHT'] = 'rankRight';
    class _0x4c5826 extends Laya['WXOpenData' + 'Viewer'] {
        constructor() {
            super(), this['is_refresh'] = !0x1, this['refresh_ra' + 'te'] = 0x0, this['fresh_Loop'] = function () {
                0x1 == this['is_refresh'] && this['texture']['bitmap']['loadImageS' + 'ource'](window['sharedCanv' + 'as']);
            }, this['fresh_one'] = function () {
                window['wx'] && window['sharedCanv' + 'as'] && Laya['timer']['once'](0x3e8, this, () => {
                    this['texture']['bitmap']['loadImageS' + 'ource'](window['sharedCanv' + 'as']);
                });
            };
        }
        ['onEnable']() {
            this['postMsg']({
                'type': 'display',
                'rate': Laya['stage']['frameRate']
            }), window['wx'] && window['sharedCanv' + 'as'] && Laya['timer']['frameLoop'](0x5, this, this['fresh_Loop']);
        }
        ['onDisable']() {
        }
    }
    class _0x240a89 {
        static ['init']() {
            Laya['timer']['loop'](0x1388, this, () => {
                this['saveData']();
            });
        }
        static ['getNumber'](_0xa2c32b, _0x27d202 = 0x0) {
            let _0xde6b78 = this['getItem'](_0xa2c32b);
            return _0xde6b78 ? parseFloat(_0xde6b78) : _0x27d202;
        }
        static ['addNumber'](_0x58dc55, _0x2262d9, _0x31968d) {
            let _0x5b5ee8 = this['getNumber'](_0x58dc55) + _0x2262d9;
            null != _0x31968d && (_0x5b5ee8 = Math['max'](Math['min'](_0x5b5ee8, _0x31968d), 0x0)), this['setNumber'](_0x58dc55, _0x5b5ee8);
        }
        static ['setNumber'](_0x2a821a, _0x464bee) {
            this['setItem'](_0x2a821a, _0x464bee['toString']());
        }
        static ['getBoolean'](_0x274eac, _0x53fcbb = !0x1) {
            let _0x360d93 = this['getItem'](_0x274eac);
            return '1' == _0x360d93 || '0' != _0x360d93 && _0x53fcbb;
        }
        static ['setBoolean'](_0x134dd7, _0x18763b) {
            _0x18763b ? this['setItem'](_0x134dd7, '1') : this['setItem'](_0x134dd7, '0');
        }
        static ['getString'](_0x5e5661, _0x1adcf2 = '') {
            let _0x167975 = this['getItem'](_0x5e5661);
            return _0x167975 || _0x1adcf2;
        }
        static ['setString'](_0x53ac33, _0x8543b8) {
            this['setItem'](_0x53ac33, _0x8543b8);
        }
        static ['setItem'](_0x34b82b, _0x335cff) {
            this['allDatas'][_0x34b82b] = _0x335cff;
        }
        static ['getItem'](_0x1f1018) {
            return this['allDatas'][_0x1f1018] ? this['allDatas'][_0x1f1018] : (this['allDatas'][_0x1f1018] = Laya['LocalStora' + 'ge']['getItem']('Shape-Shif' + 't-Run-' + _0x1f1018), this['cacheAllDa' + 'tas'][_0x1f1018] = this['allDatas'][_0x1f1018], this['allDatas'][_0x1f1018]);
        }
        static ['getObject'](_0x508870) {
            let _0x33c4ac = this['getString'](_0x508870);
            return null == _0x33c4ac || '' == _0x33c4ac ? null : JSON['parse'](_0x33c4ac);
        }
        static ['setObject'](_0x154635, _0x32d17e) {
            let _0xb30362 = JSON['stringify'](_0x32d17e);
            this['setString'](_0x154635, _0xb30362);
        }
        static ['saveData']() {
            for (let _0x551545 in this['allDatas'])
                this['cacheAllDa' + 'tas'][_0x551545] != this['allDatas'][_0x551545] && (this['cacheAllDa' + 'tas'][_0x551545] = this['allDatas'][_0x551545], Laya['LocalStora' + 'ge']['setItem']('Shape-Shif' + 't-Run-' + _0x551545, this['allDatas'][_0x551545]));
        }
    }
    _0x240a89['allDatas'] = {}, _0x240a89['cacheAllDa' + 'tas'] = {};
    class _0x1b521d extends _0x240a89 {
        static ['getPlayCou' + 'nt']() {
            return super['getNumber']('PlayCount');
        }
        static ['addPlayCou' + 'nt']() {
            super['addNumber']('PlayCount', 0x1);
        }
        static ['getScore']() {
            return super['getNumber']('Score');
        }
        static ['setScore'](_0x20d5bf) {
            super['setNumber']('Score', _0x20d5bf);
        }
        static ['addScore'](_0x528e65) {
            super['addNumber']('Score', _0x528e65), this['setMaxScor' + 'e'](this['getScore']());
        }
        static ['getMaxScor' + 'e']() {
            return super['getNumber']('MaxScore');
        }
        static ['setMaxScor' + 'e'](_0x358689) {
            let _0x3ba197 = this['getMaxScor' + 'e']();
            super['setNumber']('MaxScore', Math['max'](_0x3ba197, _0x358689));
        }
        static ['getGoods'](_0x322bbf, _0x2d6043 = 0x0) {
            return super['getNumber']('GoodsType' + _0x322bbf, _0x2d6043);
        }
        static ['setGoods'](_0x13a5f5, _0x796ab7 = 0x0) {
            super['setNumber']('GoodsType' + _0x13a5f5, _0x796ab7);
        }
        static ['addGoods'](_0x22ac4d, _0x415247, _0x154b15 = null) {
            return !(_0x415247 <= 0x0) && (super['addNumber']('GoodsType' + _0x22ac4d, _0x415247, _0x154b15), !0x0);
        }
        static ['subGoods'](_0x316c3f, _0xeb4d2d) {
            if (_0xeb4d2d <= 0x0)
                return !0x1;
            let _0x109143 = _0x1b521d['getGoods'](_0x316c3f);
            return !(_0x109143 < _0xeb4d2d) && (super['setNumber']('GoodsType' + _0x316c3f, _0x109143 - _0xeb4d2d), !0x0);
        }
    }
    class _0x1cf383 {
    }
    _0x1cf383['width'] = 0x2d0, _0x1cf383['height'] = 0x500, _0x1cf383['appName'] = 'ImageThrou' + 'gh', _0x1cf383['appId'] = 'wx555a1896' + '459c2a07', _0x1cf383['appSecret'] = '7a29aedccb' + 'fc7824868c' + '20998154bf' + 'f7', _0x1cf383['videoId'] = 'adunit-b6e' + '2bd36a151b' + 'd0a', _0x1cf383['bannerId'] = 'adunit-38b' + 'dc6bf1fb34' + '80b', _0x1cf383['bannerAppI' + 'ds'] = ['wx392f322b' + '348d818a'], _0x1cf383['version'] = '\x20', _0x1cf383['debug'] = !0x1, _0x1cf383['constName'] = '81_3dttt', _0x1cf383['host'] = '', _0x1cf383['defaultNam' + 'e'] = 'Player', _0x1cf383['defaultPho' + 'to'] = 'UI/default' + '.png';
    class _0x10e052 extends _0x240a89 {
        static ['setGameDat' + 'a'](_0x55f55e) {
            super['setString']('GameData', _0x55f55e);
        }
        static ['getGameDat' + 'a']() {
            let _0x3ba9a8 = super['getString']('GameData', '{\x22mode\x22:0,' + '\x22shareDivV' + 'edio\x22:999,' + '\x22force\x22:1,' + '\x22bannerMod' + 'e\x22:1,\x22adMo' + 'de\x22:0}');
            return JSON['parse'](_0x3ba9a8);
        }
        static ['getBannerM' + 'ode']() {
            let _0x380be8 = this['getGameDat' + 'a']()['bannerMode'];
            return void 0x0 === _0x380be8 ? 0x1 : _0x380be8;
        }
        static ['setFriends' + 'Data'](_0x170fd4) {
            super['setString']('FriendsDat' + 'a', _0x170fd4);
        }
        static ['getFriends' + 'Data']() {
            let _0x45a12a = super['getString']('FriendsDat' + 'a', '[]');
            return JSON['parse'](_0x45a12a);
        }
        static ['getOpenid']() {
            return super['getString']('Openid');
        }
        static ['setOpenid'](_0x3c83c9) {
            super['setString']('Openid', _0x3c83c9);
        }
        static ['getNicknam' + 'e']() {
            return super['getString']('Nickname', _0x1cf383['defaultNam' + 'e']);
        }
        static ['setNicknam' + 'e'](_0x41c97b) {
            super['setString']('Nickname', _0x41c97b);
        }
        static ['getPhoto']() {
            return super['getString']('Photo', _0x1cf383['defaultPho' + 'to']);
        }
        static ['setPhoto'](_0x287637) {
            super['setString']('Photo', _0x287637);
        }
        static ['getForce']() {
            return this['getGameDat' + 'a']()['force'];
        }
        static ['getGameMod' + 'e']() {
            return this['getGameDat' + 'a']()['mode'];
        }
        static ['setAuthori' + 'ze']() {
            super['setBoolean']('Authorize', !0x0);
        }
        static ['isAuthoriz' + 'e']() {
            return super['getBoolean']('Authorize');
        }
        static ['setMatchUs' + 'er'](_0x1dccfa) {
            super['setString']('MatchUser', _0x1dccfa);
        }
        static ['getSession' + 'Key']() {
            return super['getString']('SessionKey');
        }
        static ['setSession' + 'Key'](_0x1bc423) {
            super['setString']('SessionKey', _0x1bc423);
        }
        static ['getShareDi' + 'vVedio']() {
            return this['getGameDat' + 'a']()['shareDivVe' + 'dio'] + 0x1;
        }
        static ['setUsers'](_0x194310) {
            console['log'](_0x194310), super['setString']('Users', _0x194310);
        }
        static ['getUsers']() {
            return JSON['parse'](super['getString']('Users', '[]'));
        }
        static ['getAddMode']() {
            return this['getGameDat' + 'a']()['adMode'];
        }
        static ['set_FlowIc' + 'on_Data'](_0xf4ce6a) {
            let _0x5783e3 = JSON['stringify'](_0xf4ce6a);
            super['setString']('FlowIconDa' + 'ta', _0x5783e3);
        }
        static ['get_FlowIc' + 'on_Data']() {
            let _0xd61ffc = super['getString']('FlowIconDa' + 'ta', '[]'), _0x1b26e2 = JSON['parse'](_0xd61ffc);
            for (let _0x35e4ce = 0x1, _0x465691 = _0x1b26e2['length']; _0x35e4ce < _0x465691; _0x35e4ce++) {
                const _0x1741d5 = Math['floor'](Math['random']() * (_0x35e4ce + 0x1));
                [_0x1b26e2[_0x35e4ce], _0x1b26e2[_0x1741d5]] = [
                    _0x1b26e2[_0x1741d5],
                    _0x1b26e2[_0x35e4ce]
                ];
            }
            return _0x1b26e2;
        }
        static ['setBannerS' + 'tate'](_0xce65f0) {
            super['setBoolean']('BannerStat' + 'e', _0xce65f0);
        }
        static ['getBannerS' + 'tate']() {
            return super['getBoolean']('BannerStat' + 'e');
        }
    }
    class _0x18b2cc {
        ['request'](_0x29a7f4, _0x442da4, _0x5797be) {
        }
        static ['getGameDat' + 'a'](_0x495890 = null) {
        }
        static ['getSession' + 'Key'](_0x19693b, _0x1b1732) {
        }
        static ['userCalcIn'](_0x4ce4d0) {
        }
        static ['saveUser'](_0x1b5ca2, _0x52df69) {
        }
        static ['sharePoint'](_0x18b355, _0x11f4a8) {
        }
        static ['userCalcOu' + 't'](_0xbeaff7) {
        }
        static ['getFlowIco' + 'nData'](_0x176223 = null) {
        }
        static ['enterGameB' + 'yShare'](_0xc4f64c) {
        }
        static ['getInviteF' + 'riends'](_0xc92999) {
        }
        static ['getRandomU' + 'ser']() {
        }
        static ['getIp'](_0xf2c010) {
        }
        static ['getAddress'](_0x156663) {
        }
        static ['getUsers'](_0x37441a) {
        }
        static ['downloadDa' + 'ta'](_0x3ed1f6, _0x35c5fe, _0x3f72e0) {
        }
    }
    class _0x282dd5 {
        static ['onShareApp' + 'Message'](_0x3a75c5) {
            let _0x8c05a7 = window['wx'];
            null != _0x8c05a7 && _0x8c05a7['onShareApp' + 'Message'](_0x3a75c5);
        }
        static ['showShareM' + 'enu']() {
            let _0x33acf8 = window['wx'];
            null != _0x33acf8 && _0x33acf8['showShareM' + 'enu']();
        }
        static ['updateShar' + 'eMenu']() {
            let _0x4564d9 = window['wx'];
            null != _0x4564d9 && _0x4564d9['updateShar' + 'eMenu']({ 'withShareTicket': !0x0 });
        }
        static ['login'](_0xbb7059) {
            let _0x42d613 = window['wx'];
            null != _0x42d613 && _0x42d613['login'](_0xbb7059);
        }
        static ['getLaunchO' + 'ptionsSync']() {
            let _0xb0fec8 = window['wx'];
            if (null != _0xb0fec8)
                return _0xb0fec8['getLaunchO' + 'ptionsSync']();
        }
        static ['onShow'](_0x3fe01e) {
            let _0x5dfe8d = window['wx'];
            null != _0x5dfe8d && _0x5dfe8d['onShow'](_0x3fe01e);
        }
        static ['showToast'](_0x54eb00) {
            let _0x430a23 = window['wx'];
            null != _0x430a23 && _0x430a23['showToast'](_0x54eb00);
        }
        static ['updateMana' + 'ger']() {
            let _0x42c02f = window['wx'];
            if (null != _0x42c02f && 'function' == typeof _0x42c02f['getUpdateM' + 'anager']) {
                const _0x19b04c = _0x42c02f['getUpdateM' + 'anager']();
                _0x19b04c['onUpdateRe' + 'ady'](function () {
                    _0x19b04c['applyUpdat' + 'e']();
                });
            }
        }
        static ['showModal'](_0xeb8c31) {
            let _0x52a38d = window['wx'];
            null != _0x52a38d && _0x52a38d['showModal'](_0xeb8c31);
        }
        static ['createRewa' + 'rdedVideoA' + 'd'](_0x2d4e64) {
            let _0x644055 = window['wx'];
            if (null != _0x644055)
                return _0x644055['createRewa' + 'rdedVideoA' + 'd'](_0x2d4e64);
        }
        static ['shareAppMe' + 'ssage'](_0x130af5) {
            let _0x2c789e = window['wx'];
            null != _0x2c789e && _0x2c789e['shareAppMe' + 'ssage'](_0x130af5);
        }
        static ['setUserClo' + 'udStorage'](_0x50a21a) {
            let _0x1af5b0 = window['wx'];
            null != _0x1af5b0 && _0x1af5b0['setUserClo' + 'udStorage'](_0x50a21a);
        }
        static ['navigateTo' + 'MiniProgra' + 'm'](_0x46d8d9) {
            let _0x32502c = window['wx'];
            null != _0x32502c && _0x32502c['navigateTo' + 'MiniProgra' + 'm'](_0x46d8d9);
        }
        static ['createFeed' + 'backButton'](_0x4c547e) {
            let _0x344069 = window['wx'];
            if (null != _0x344069)
                return _0x344069['createFeed' + 'backButton'](_0x4c547e);
        }
        static ['getSetting'](_0x505206) {
            let _0x538b56 = window['wx'];
            null != _0x538b56 && _0x538b56['getSetting'](_0x505206);
        }
    }
    class _0x37b148 {
    }
    _0x37b148['shareConte' + 'nt'] = [
        [{
                'title': '墙来啦！',
                'image': 'UI/share0.' + 'jpg'
            }],
        [
            {
                'title': '墙来啦！',
                'image': 'UI/share0.' + 'jpg'
            },
            {
                'title': '看我72变！',
                'image': 'UI/share1.' + 'jpg'
            },
            {
                'title': '只有智商超过99.9' + '%的人才能玩儿好这款' + '游戏',
                'image': 'UI/share2.' + 'jpg'
            },
            {
                'title': '只有智商超过99.9' + '%的人才能玩儿好这款' + '游戏',
                'image': 'UI/share3.' + 'jpg'
            }
        ]
    ], _0x37b148['PointName'] = {
        'MenuProp_open': 'MenuProp_o' + 'pen',
        'MenuProp': 'MenuProp',
        'MenuProp_close': 'MenuProp_c' + 'lose',
        'OverShare_open': 'OverShare_' + 'open',
        'OverShare': 'OverShare',
        'OverShare_close': 'OverShare_' + 'close',
        'Rebirth_open': 'Rebirth_op' + 'en',
        'Rebirth': 'Rebirth',
        'Rebirth_close': 'Rebirth_cl' + 'ose'
    };
    class _0x38b5ec {
    }
    _0x38b5ec['AppIdToNam' + 'e'] = {
        'AppIdToName': {
            'wx06cb4e686383ea2f': {
                'appName': 'idioms',
                'id': 'wx06cb4e68' + '6383ea2f',
                'imgPath': 'navigate/n' + 'av5.png',
                'index': 0x7,
                'name': '孔子教成语'
            },
            'wx0b9ac84ef4a5b8c2': {
                'appName': 'CutFruit',
                'id': 'wx0b9ac84e' + 'f4a5b8c2',
                'imgPath': 'navigate/n' + 'av2.png',
                'index': 0x5,
                'name': '欢乐水果达人'
            },
            'wx0c8a05a116234731': {
                'appName': 'rocket',
                'id': 'wx0c8a05a1' + '16234731',
                'index': 0x1,
                'name': '北斗计划'
            },
            'wx10a5f01024a0c4ba': {
                'appName': 'kantu',
                'id': 'wx10a5f010' + '24a0c4ba',
                'imgPath': 'navigate/k' + 'antu.png',
                'index': 0x1a,
                'name': '看图教成语'
            },
            'wx144d1947d03dd036': {
                'appName': 'idioms11',
                'id': 'wx144d1947' + 'd03dd036',
                'imgPath': 'navigate/i' + 'dioms11.pn' + 'g',
                'index': 0x1f,
                'name': '成语小书童'
            },
            'wx14f1275803360f8d': {
                'appName': 'idioms14',
                'id': 'wx14f12758' + '03360f8d',
                'imgPath': 'navigate/i' + 'dioms14.pn' + 'g',
                'index': 0x25,
                'name': '大师教成语'
            },
            'wx1958bb1636a9a3ea': {
                'appName': 'PopStar',
                'id': 'wx1958bb16' + '36a9a3ea',
                'imgPath': 'navigate/n' + 'av4.png',
                'index': 0x2,
                'name': '最强消除星星'
            },
            'wx20902811020e103f': {
                'appName': 'xiehouyu3',
                'id': 'wx20902811' + '020e103f',
                'imgPath': 'navigate/x' + 'iehouyu3.p' + 'ng',
                'index': 0x26,
                'name': '歇后语答题'
            },
            'wx392f322b348d818a': {
                'appName': 'saiche',
                'id': 'wx392f322b' + '348d818a',
                'imgPath': 'navigate/n' + 'av1.png',
                'index': 0x3,
                'name': '板子赛车'
            },
            'wx47430bdfa314663d': {
                'appName': 'idioms12',
                'id': 'wx47430bdf' + 'a314663d',
                'imgPath': 'navigate/i' + 'dioms12.pn' + 'g',
                'index': 0x21,
                'name': '我要学成语'
            },
            'wx49174e5150043a54': {
                'appName': 'CutFruit2',
                'id': 'wx49174e51' + '50043a54',
                'imgPath': 'navigate/c' + 'utfruit2.p' + 'ng',
                'index': 0x11,
                'name': '最强切水果王者'
            },
            'wx6481968a6db93b6c': {
                'appName': 'block',
                'id': 'wx6481968a' + '6db93b6c',
                'imgPath': 'navigate/b' + 'lock.png',
                'index': 0x1b,
                'name': '快乐消方块'
            },
            'wx6ca4942f5e59eb62': {
                'appName': 'HitTheBall',
                'id': 'wx6ca4942f' + '5e59eb62',
                'imgPath': 'navigate/H' + 'itTheBall.' + 'png',
                'index': 0x27,
                'name': '地球防御战'
            },
            'wx6ec520953888efdc': {
                'appName': 'idioms7',
                'id': 'wx6ec52095' + '3888efdc',
                'imgPath': 'navigate/n' + 'av10.png',
                'index': 0x15,
                'name': '成语头脑大师'
            },
            'wx6feb94ff314bbe08': {
                'appName': 'saiche2',
                'id': 'wx6feb94ff' + '314bbe08',
                'imgPath': 'navigate/s' + 'aiche2.png',
                'index': 0x19,
                'name': '板子跑车'
            },
            'wx7a058cd59efeffc6': {
                'appName': 'idioms3',
                'id': 'wx7a058cd5' + '9efeffc6',
                'imgPath': 'navigate/i' + 'dioms3.png',
                'index': 0x10,
                'name': '填词闯关'
            },
            'wx80ed6c5a28354a31': {
                'appName': 'CutFruit4',
                'id': 'wx80ed6c5a' + '28354a31',
                'imgPath': 'navigate/c' + 'utfruit4.p' + 'ng',
                'index': 0x23,
                'name': '全民水果'
            },
            'wx82d5c8370c990e82': {
                'appName': 'CutFruit3',
                'id': 'wx82d5c837' + '0c990e82',
                'imgPath': 'navigate/c' + 'utfruit3.p' + 'ng',
                'index': 0x22,
                'name': '切水果作战'
            },
            'wx84b37372b73a04ca': {
                'appName': 'NumClear',
                'id': 'wx84b37372' + 'b73a04ca',
                'imgPath': 'navigate/N' + 'umClear.pn' + 'g',
                'index': 0x16,
                'name': '全民爱三消'
            },
            'wx8b3f11e0d739924e': {
                'appName': 'idioms13',
                'id': 'wx8b3f11e0' + 'd739924e',
                'imgPath': 'navigate/i' + 'dioms13.pn' + 'g',
                'index': 0x24,
                'name': '认字学词'
            },
            'wx9773e9a1a64dcb94': {
                'appName': 'idioms15',
                'id': 'wx9773e9a1' + 'a64dcb94',
                'imgPath': 'navigate/i' + 'dioms15.pn' + 'g',
                'index': 0x29,
                'name': '在线学成语'
            },
            'wxa3004ee6ba81dc05': {
                'appName': 'tangshi',
                'id': 'wxa3004ee6' + 'ba81dc05',
                'imgPath': 'navigate/n' + 'av12.png',
                'index': 0x18,
                'name': '唐诗大会'
            },
            'wxa78ff035b95803bc': {
                'appName': 'smallballs',
                'id': 'wxa78ff035' + 'b95803bc',
                'index': 0x8,
                'name': '一起弹球吧'
            },
            'wxa90719a65815a177': {
                'appName': 'idioms2',
                'id': 'wxa90719a6' + '5815a177',
                'imgPath': 'navigate/n' + 'av6.png',
                'index': 0xe,
                'name': '成语学院'
            },
            'wxaac3cac054540d1e': {
                'appName': 'idioms9',
                'id': 'wxaac3cac0' + '54540d1e',
                'imgPath': 'navigate/i' + 'dioms9.png',
                'index': 0x1d,
                'name': '成语小仙子'
            },
            'wxb523cb22cc01a481': {
                'appName': 'idioms6',
                'id': 'wxb523cb22' + 'cc01a481',
                'imgPath': 'navigate/n' + 'av9.png',
                'index': 0x14,
                'name': '成语秀才'
            },
            'wxb9be3700590e5b8f': {
                'appName': 'idioms5',
                'id': 'wxb9be3700' + '590e5b8f',
                'imgPath': 'navigate/n' + 'av8.png',
                'index': 0x13,
                'name': '成语天地'
            },
            'wxbbd3cdb29194dc7c': {
                'appName': 'xiehouyu2',
                'id': 'wxbbd3cdb2' + '9194dc7c',
                'imgPath': 'navigate/x' + 'iehouyu2.p' + 'ng',
                'index': 0x20,
                'name': '俏皮话大全'
            },
            'wxbd0c3745cf1536a8': {
                'appName': 'idioms4',
                'id': 'wxbd0c3745' + 'cf1536a8',
                'imgPath': 'navigate/n' + 'av7.png',
                'index': 0x12,
                'name': '成语大会2019'
            },
            'wxbe24a0d4b6eea1e7': {
                'appName': 'car',
                'id': 'wxbe24a0d4' + 'b6eea1e7',
                'index': 0x9,
                'name': '板子汽车'
            },
            'wxbeb8329a39684320': {
                'appName': 'xiehouyu',
                'id': 'wxbeb8329a' + '39684320',
                'imgPath': 'navigate/n' + 'av11.png',
                'index': 0x17,
                'name': '孔子教歇后语'
            },
            'wxc334a920024faa86': {
                'appName': 'NumMerge',
                'id': 'wxc334a920' + '024faa86',
                'imgPath': 'navigate/n' + 'av7.png',
                'index': 0xf,
                'name': '数字合并'
            },
            'wxc98889eca359c1e5': {
                'appName': 'wechatGame',
                'id': 'wxc98889ec' + 'a359c1e5',
                'index': 0xa,
                'name': '微信小游戏'
            },
            'wxcff7381e631cf54e': {
                'appName': 'wechatHelp' + 'er',
                'id': 'wxcff7381e' + '631cf54e',
                'index': 0xb,
                'name': '小程序助手'
            },
            'wxcffead387a8c33ec': {
                'appName': 'idioms10',
                'id': 'wxcffead38' + '7a8c33ec',
                'imgPath': 'navigate/i' + 'dioms10.pn' + 'g',
                'index': 0x1e,
                'name': '猜字大会'
            },
            'wxe4862ed7b0f09824': {
                'appName': 'idioms8',
                'id': 'wxe4862ed7' + 'b0f09824',
                'imgPath': 'navigate/n' + 'av13.png',
                'index': 0x1c,
                'name': '猜词填字'
            },
            'wxe5285b1528281178': {
                'appName': 'TableFight',
                'id': 'wxe5285b15' + '28281178',
                'imgPath': 'navigate/n' + 'av3.png',
                'index': 0x6,
                'name': '同桌大擂台'
            },
            'wxe5dc5227a42436fa': {
                'appName': 'BeatBrick',
                'id': 'wxe5dc5227' + 'a42436fa',
                'index': 0x28,
                'name': '打砖块达人'
            },
            'wxec4da2daa08cb84d': {
                'appName': 'chaopao',
                'id': 'wxec4da2da' + 'a08cb84d',
                'index': 0x4,
                'name': '板子超跑'
            }
        }
    };
    class _0x526de8 {
        static ['showBanner' + 'Ad'](_0xe9eff8 = 0x0) {
            this['isShow'] = !0x0, this['gameAd'] && (this['gameAd']['visible'] = !0x0), this['bannerAd1'] && (this['bannerAd1']['show'](), 0x0 == _0xe9eff8 && _0x10e052['setBannerS' + 'tate'](!0x0)), this['bannerAd2'] && (this['bannerAd2']['show'](), 0x0 == _0xe9eff8 && _0x10e052['setBannerS' + 'tate'](!0x0));
        }
        static ['hideBanner' + 'Ad'](_0x1888c4 = 0x0) {
            this['isShow'] = !0x1, this['gameAd'] && (this['gameAd']['visible'] = !0x1), this['bannerAd1'] && (this['bannerAd1']['hide'](), 0x0 == _0x1888c4 && _0x10e052['setBannerS' + 'tate'](!0x1)), this['bannerAd2'] && (this['bannerAd2']['hide'](), 0x0 == _0x1888c4 && _0x10e052['setBannerS' + 'tate'](!0x1));
        }
        static ['init'](_0x2a020c, _0x32f974 = 'center') {
            if (_0x1cf383['width'] > _0x1cf383['height'] ? this['screenMode'] = 'landscape' : this['screenMode'] = 'portrait', this['align'] = _0x32f974, this['isSmall']) {
                let _0x2cf3d5 = window['wx'];
                _0x2cf3d5 && 'portrait' == this['screenMode'] ? this['SCALE'] = 0x12c / _0x2cf3d5['getSystemI' + 'nfoSync']()['windowWidt' + 'h'] : this['SCALE'] = 0.75;
            }
            this['bannerAppI' + 'd'] = _0x1cf383['bannerAppI' + 'ds'][this['bannerAppI' + 'dIndex']], Laya['timer']['loop'](0x1388, this, () => {
                ++this['bannerAppI' + 'dIndex'], this['bannerAppI' + 'dIndex'] >= _0x1cf383['bannerAppI' + 'ds']['length'] && (this['bannerAppI' + 'dIndex'] = 0x0), this['bannerAppI' + 'd'] = _0x1cf383['bannerAppI' + 'ds'][this['bannerAppI' + 'dIndex']];
            }), this['createGame' + 'Ad'](_0x2a020c), this['show'](), Laya['timer']['loop'](0x2 * this['PERIOD'] * 0x3e8, this, this['update']);
        }
        static ['createGame' + 'Ad'](_0x672453) {
            if (!this['isShow'])
                return;
            this['gameAd'] = new Laya['Image'](), 0x0 == _0x10e052['getBannerM' + 'ode']() ? this['gameAd']['visible'] = !0x1 : 0x1 == _0x10e052['getBannerM' + 'ode']() ? (this['gameAd']['skin'] = '\x20', this['gameAd']['on'](Laya['Event']['CLICK'], this, () => {
                _0x109343['navigateTo' + 'MiniProgra' + 'm'](this['bannerAppI' + 'd']), _0x18b2cc['sharePoint']('BannerAd_m' + 'inigame', 0x67);
            })) : 0x2 == _0x10e052['getBannerM' + 'ode']() && (this['gameAd']['skin'] = '\x20');
            let _0x360dd0 = new Laya['Box']();
            _0x360dd0['width'] = _0x1cf383['width'], _0x360dd0['height'] = _0x1cf383['height'], _0x360dd0['anchorX'] = 0.5, _0x360dd0['anchorY'] = 0.5, _0x360dd0['x'] = _0x1cf383['width'] / 0x2, _0x360dd0['y'] = _0x1cf383['height'] / 0x2, _0x672453['addChild'](_0x360dd0), _0x360dd0['mouseThrou' + 'gh'] = !0x0, _0x360dd0['addChild'](this['gameAd']), this['resizeGame' + 'Ad']();
        }
        static ['resizeGame' + 'Ad']() {
            let _0x5eb8e0 = 0x0;
            'portrait' == this['screenMode'] ? _0x5eb8e0 = _0x1cf383['width'] * this['SCALE'] : 'landscape' == this['screenMode'] && (_0x5eb8e0 = 0x2bc * this['SCALE']);
            let _0x1fde7e = _0x5eb8e0 * this['H_DIV_W'];
            this['gameAd']['width'] = _0x5eb8e0, this['gameAd']['height'] = _0x1fde7e;
            let _0x2c0024 = new Laya['Panel']();
            if (_0x2c0024['width'] = _0x5eb8e0, _0x2c0024['height'] = _0x1fde7e, this['gameAd']['addChild'](_0x2c0024), 0x2 == _0x10e052['getBannerM' + 'ode']()) {
                let _0x1e9d6e = new Laya['Box']();
                _0x1e9d6e['height'] = this['gameAd']['height'];
                let _0x141fcb = _0x10e052['get_FlowIc' + 'on_Data']();
                _0x1e9d6e['width'] = _0x5eb8e0 / 0x5 * _0x141fcb['length'], _0x2c0024['addChild'](_0x1e9d6e);
                let _0x2c72ac = Math['min'](_0x141fcb['length'], 0x5), _0x5993f8 = [], _0x45ecd3 = [];
                for (let _0x59cd27 = 0x0; _0x59cd27 < _0x2c72ac; ++_0x59cd27) {
                    let _0x382b55 = _0x141fcb[_0x59cd27], _0x47aefb = _0x5eb8e0 / 0x5 / 0x2 + _0x59cd27 * _0x5eb8e0 / 0x5, _0x578fc7 = _0x1e9d6e['height'] / 0x2, _0x51da11 = new Laya['Image']();
                    _0x51da11['scale'](this['SCALE'], this['SCALE']), _0x51da11['skin'] = _0x382b55['icon'], _0x51da11['anchorX'] = 0.5, _0x51da11['anchorY'] = 0.5, _0x51da11['x'] = _0x47aefb, _0x51da11['y'] = _0x578fc7, _0x1e9d6e['addChild'](_0x51da11);
                    let _0x690584 = new Laya['Text']();
                    _0x690584['color'] = '#ffffff', _0x690584['font'] = 'SimHei', _0x38b5ec['AppIdToNam' + 'e']['AppIdToNam' + 'e'][_0x382b55['appId']] && _0x38b5ec['AppIdToNam' + 'e']['AppIdToNam' + 'e'][_0x382b55['appId']]['name'] ? _0x690584['text'] = _0x38b5ec['AppIdToNam' + 'e']['AppIdToNam' + 'e'][_0x382b55['appId']]['name'] : _0x690584['text'] = _0x382b55['appName'], _0x690584['fontSize'] = 0x14, _0x690584['align'] = 'center', _0x690584['width'] = _0x5eb8e0 / 0x5 / this['SCALE'], _0x690584['y'] = 0x69, _0x690584['x'] = -0x17, _0x51da11['addChild'](_0x690584), _0x51da11['offAll'](), _0x51da11['on'](Laya['Event']['CLICK'], this, () => {
                        _0x109343['navigateTo' + 'MiniProgra' + 'm'](_0x382b55['appId']);
                    }), _0x5993f8['push'](_0x51da11), _0x45ecd3['push'](_0x690584);
                }
                Laya['timer']['loop'](0x2710, this, () => {
                    let _0x81f6f3 = _0x10e052['get_FlowIc' + 'on_Data'](), _0x1df0e2 = Math['min'](_0x81f6f3['length'], 0x5);
                    for (let _0x25badd = 0x0; _0x25badd < _0x1df0e2; ++_0x25badd) {
                        let _0x1b22de = _0x81f6f3[_0x25badd], _0x4ca86f = _0x5993f8[_0x25badd];
                        _0x4ca86f && (_0x4ca86f['skin'] = _0x1b22de['icon'], _0x4ca86f['text'] = _0x1b22de['appName'], _0x4ca86f['offAll'](), _0x4ca86f['on'](Laya['Event']['CLICK'], this, () => {
                            _0x109343['navigateTo' + 'MiniProgra' + 'm'](_0x1b22de['appId']);
                        }));
                        let _0x34008e = _0x45ecd3[_0x25badd];
                        _0x34008e && (_0x34008e['text'] = _0x1b22de['appName']);
                    }
                });
            }
            if ('portrait' == this['screenMode']) {
                if (this['gameAd']['x'] = _0x1cf383['width'] - this['gameAd']['width'] >> 0x1, this['isBottom']) {
                    let _0x290491 = window['wx'];
                    if (null != _0x290491) {
                        let _0x759608 = _0x290491['getSystemI' + 'nfoSync'](), _0x24de07 = _0x1cf383['width'] / _0x759608['windowWidt' + 'h'], _0x3a469a = _0x759608['windowHeig' + 'ht'] * _0x24de07;
                        this['gameAd']['y'] = (_0x3a469a - _0x1cf383['height']) / 0x2 + _0x1cf383['height'] - this['gameAd']['height'];
                    } else
                        this['gameAd']['y'] = _0x1cf383['height'] - this['gameAd']['height'];
                } else
                    this['gameAd']['y'] = _0x1cf383['height'] - this['gameAd']['height'];
            } else
                'landscape' == this['screenMode'] && ('right' == this['align'] ? this['gameAd']['x'] = _0x1cf383['width'] - this['gameAd']['width'] : 'left' == this['align'] ? this['gameAd']['x'] = 0x0 : 'center' == this['align'] && (this['gameAd']['x'] = _0x1cf383['width'] / 0x2 - this['gameAd']['width'] / 0x2), this['gameAd']['y'] = _0x1cf383['height'] - this['gameAd']['height']);
        }
        static ['update']() {
            this['isShow'] && this['show']();
        }
        static ['show']() {
            if (this['autoRefres' + 'h']) {
                if (this['showCount'] >= this['MAX_SHOW_C' + 'OUNT'])
                    return this['showBanner'](), void Laya['timer']['clear'](this, this['update']);
                ++this['showCount'], this['createBann' + 'er']('bannerAd1'), this['bannerAd2'] && Laya['timer']['once'](0x7d0, this, () => {
                    this['bannerAd2']['hide']();
                }), Laya['timer']['once'](0x3e8 * this['PERIOD'], this, () => {
                    this['createBann' + 'er']('bannerAd2'), this['bannerAd1'] && Laya['timer']['once'](0x7d0, this, () => {
                        this['bannerAd1']['hide']();
                    });
                });
            }
        }
        static ['refreshBan' + 'ner']() {
            0x0 == this['refreshBan' + 'nerTime'] ? (this['refreshBan' + 'nerTime'] = new Date()['getTime'](), this['createBann' + 'er']('bannerAd1')) : new Date()['getTime']() - this['refreshBan' + 'nerTime'] > 0x7530 && (this['refreshBan' + 'nerTime'] = new Date()['getTime'](), this['createBann' + 'er']('bannerAd1'));
        }
        static ['showBanner']() {
            null != this['bannerAd1'] && null != this['bannerAd2'] && this['isShow'] && (this['isShowBann' + 'erAd1'] ? (this['bannerAd1']['show'](), this['bannerAd2']['hide']()) : (this['bannerAd1']['hide'](), this['bannerAd2']['show']()), this['isShowBann' + 'erAd1'] = !this['isShowBann' + 'erAd1'], Laya['timer']['once'](0x3e8 * this['PERIOD'], this, () => {
                this['showBanner']();
            }));
        }
        static ['createBann' + 'er'](_0x40479a) {
            if (!this['isShow'])
                return;
            this[_0x40479a] && (this[_0x40479a]['destroy'](), this[_0x40479a] = null);
            let _0x29ab04 = window['wx'];
            if (null == _0x29ab04)
                return;
            let _0x16a56b = _0x29ab04['getSystemI' + 'nfoSync']();
            if ('portrait' == this['screenMode']) {
                let _0x4a082c = _0x16a56b['windowWidt' + 'h'] * this['SCALE'], _0x1cf883 = _0x4a082c * this['H_DIV_W'], _0x18266d = 0x0;
                _0x16a56b['windowHeig' + 'ht'] / _0x16a56b['windowWidt' + 'h'] > _0x1cf383['height'] / _0x1cf383['width'] && !this['isBottom'] && (_0x18266d = (_0x16a56b['windowHeig' + 'ht'] - _0x16a56b['windowWidt' + 'h'] * _0x1cf383['height'] / _0x1cf383['width']) / 0x2);
                let _0x58b768 = _0x29ab04['createBann' + 'erAd']({
                    'adUnitId': _0x1cf383['bannerId'],
                    'style': {
                        'left': _0x16a56b['windowWidt' + 'h'] - _0x4a082c >> 0x1,
                        'top': _0x16a56b['windowHeig' + 'ht'] - _0x1cf883 - _0x18266d,
                        'width': _0x4a082c,
                        'height': _0x1cf883
                    }
                });
                _0x58b768['show'](), _0x58b768['onResize'](_0x3548ac => {
                    let _0x199b87 = _0x29ab04['getSystemI' + 'nfoSync']();
                    _0x58b768['style']['left'] = _0x199b87['windowWidt' + 'h'] - _0x58b768['style']['realWidth'] >> 0x1, _0x58b768['style']['top'] = _0x199b87['windowHeig' + 'ht'] - _0x1cf883 - _0x18266d;
                }), _0x58b768['onError'](_0x4e69d8 => {
                }), this[_0x40479a] = _0x58b768;
            } else {
                if ('landscape' == this['screenMode']) {
                    let _0x47d822 = 0x2bc * this['SCALE'], _0x5a48d8 = _0x47d822 * this['H_DIV_W'], _0xc24015 = _0x1cf383['height'] / _0x16a56b['windowHeig' + 'ht'], _0x3daf91 = _0x47d822 / _0xc24015, _0x2157a6 = _0x5a48d8 / _0xc24015, _0x6522ec = _0x1cf383['height'] / _0x29ab04['getSystemI' + 'nfoSync']()['windowHeig' + 'ht'] * _0x29ab04['getSystemI' + 'nfoSync']()['windowWidt' + 'h'], _0x720578 = _0x16a56b['windowHeig' + 'ht'] - _0x2157a6, _0x1a13cd = 0x0;
                    'right' == this['align'] ? _0x1a13cd = ((_0x6522ec - _0x1cf383['width']) / 0x2 + (_0x1cf383['width'] - _0x47d822)) / _0xc24015 : 'left' == this['align'] ? _0x1a13cd = (_0x6522ec - _0x1cf383['width']) / 0x2 / _0xc24015 : 'center' == this['align'] && (_0x1a13cd = ((_0x6522ec - _0x1cf383['width']) / 0x2 + (_0x1cf383['width'] - _0x47d822) / 0x2) / _0xc24015), this['gameAd']['y'] = _0x1cf383['height'] - this['gameAd']['height'];
                    let _0x2ed994 = _0x29ab04['createBann' + 'erAd']({
                        'adUnitId': _0x1cf383['bannerId'],
                        'style': {
                            'left': _0x1a13cd,
                            'top': _0x720578,
                            'width': _0x3daf91,
                            'height': _0x2157a6
                        }
                    });
                    _0x2ed994['show'](), _0x2ed994['onResize'](_0x470ae8 => {
                        let _0x33253c = _0x29ab04['getSystemI' + 'nfoSync'](), _0xd2940a = _0x1cf383['height'] / _0x29ab04['getSystemI' + 'nfoSync']()['windowHeig' + 'ht'] * _0x29ab04['getSystemI' + 'nfoSync']()['windowWidt' + 'h'], _0x949236 = _0x33253c['windowHeig' + 'ht'] - _0x2157a6, _0xdf805b = 0x0;
                        'right' == this['align'] ? _0xdf805b = ((_0xd2940a - _0x1cf383['width']) / 0x2 + (_0x1cf383['width'] - _0x47d822)) / _0xc24015 : 'left' == this['align'] ? _0xdf805b = (_0xd2940a - _0x1cf383['width']) / 0x2 / _0xc24015 : 'center' == this['align'] && (_0xdf805b = ((_0xd2940a - _0x1cf383['width']) / 0x2 + (_0x1cf383['width'] - _0x47d822) / 0x2) / _0xc24015), _0x2ed994['style']['left'] = _0xdf805b, _0x2ed994['style']['top'] = _0x949236;
                    }), _0x2ed994['onError'](_0x144066 => {
                    }), this[_0x40479a] = _0x2ed994;
                }
            }
        }
    }
    _0x526de8['showCount'] = 0x0, _0x526de8['MAX_SHOW_C' + 'OUNT'] = 0xa, _0x526de8['PERIOD'] = 0x1e, _0x526de8['SCALE'] = 0x1, _0x526de8['H_DIV_W'] = 0x68 / 0x12c, _0x526de8['bannerAd1'] = null, _0x526de8['bannerAd2'] = null, _0x526de8['isShowBann' + 'erAd1'] = !0x0, _0x526de8['gameAd'] = null, _0x526de8['isShow'] = !0x0, _0x526de8['bannerAppI' + 'd'] = '', _0x526de8['bannerAppI' + 'dIndex'] = 0x0, _0x526de8['refreshBan' + 'nerTime'] = 0x0, _0x526de8['isSmall'] = !0x0, _0x526de8['isBottom'] = !0x1, _0x526de8['autoRefres' + 'h'] = !0x0, _0x526de8['screenMode'] = 'portrait', _0x526de8['align'] = 'center', function (_0x3e158f) {
        _0x3e158f['LOGIN_SHAR' + 'E_NAME'] = 'LOGIN_SHAR' + 'E_NAME', _0x3e158f['LOGIN_FIRS' + 'T_TIMER'] = 'LOGIN_FIRS' + 'T_TIMER', _0x3e158f['LOGIN_LAST' + '_TIMER'] = 'LOGIN_LAST' + '_TIMER';
    }(_0x2df4a8 || (_0x2df4a8 = {}));
    class _0x53e669 {
        static ['shareImgPo' + 'int'](_0x183eb5) {
            let _0xd2f4eb = _0x1b521d['getString'](_0x2df4a8['LOGIN_SHAR' + 'E_NAME'], '0');
            if (null != _0x183eb5 && '0' == _0xd2f4eb) {
                _0x1b521d['setString'](_0x2df4a8['LOGIN_SHAR' + 'E_NAME'], _0x183eb5);
                let _0x564701 = new Date(new Date()['getFullYea' + 'r'](), new Date()['getMonth'](), new Date()['getDate'](), 0x0, 0x0, 0x0, 0x0);
                _0x1b521d['setString'](_0x2df4a8['LOGIN_LAST' + '_TIMER'], _0x564701['getTime']() + ''), _0x1b521d['setString'](_0x2df4a8['LOGIN_FIRS' + 'T_TIMER'], _0x564701['getTime']() + ''), console['log']('拉新');
            } else
                null == _0x183eb5 && '0' == _0xd2f4eb ? _0x1b521d['setString'](_0x2df4a8['LOGIN_SHAR' + 'E_NAME'], '1') : '0' != _0xd2f4eb && '1' != _0xd2f4eb && this['check_shar' + 'eImgPoint'](_0x183eb5);
        }
        static ['check_shar' + 'eImgPoint'](_0x3afcaf) {
            let _0x5d6271 = new Date(new Date()['getFullYea' + 'r'](), new Date()['getMonth'](), new Date()['getDate'](), new Date()['getHours'](), new Date()['getMinutes'](), 0x0, 0x0), _0xcce5b = parseInt(_0x1b521d['getString'](_0x2df4a8['LOGIN_FIRS' + 'T_TIMER'], '0')), _0x274e39 = _0x5d6271['getTime']() - _0xcce5b, _0x3c58ed = parseInt(_0x1b521d['getString'](_0x2df4a8['LOGIN_LAST' + '_TIMER'], '0'));
            if (_0x5d6271['getTime']() - _0x3c58ed > 0x5265c00) {
                let _0x588011 = new Date(new Date()['getFullYea' + 'r'](), new Date()['getMonth'](), new Date()['getDate'](), 0x0, 0x0, 0x0, 0x0);
                _0x274e39 > 0x5265c00 && _0x274e39 < 0xa4cb800 ? (_0x1b521d['setString'](_0x2df4a8['LOGIN_LAST' + '_TIMER'], _0x588011['getTime']() + ''), _0x18b2cc['sharePoint'](_0x3afcaf + '_next', 0x68)) : _0x274e39 > 0xf731400 && _0x274e39 < 0x14997000 ? (_0x1b521d['setString'](_0x2df4a8['LOGIN_LAST' + '_TIMER'], _0x588011['getTime']() + ''), _0x18b2cc['sharePoint'](_0x3afcaf + '_three', 0x68)) : _0x274e39 > 0x240c8400 && _0x274e39 < 0x2932e000 && (_0x1b521d['setString'](_0x2df4a8['LOGIN_LAST' + '_TIMER'], _0x588011['getTime']() + ''), _0x18b2cc['sharePoint'](_0x3afcaf + '_seven', 0x68));
            }
        }
    }
    class _0x109343 {
        static ['init'](_0x30f999) {
            this['_layer'] = _0x30f999, this['show_versi' + 'on'](), _0x240a89['init'](), _0x18b2cc['getGameDat' + 'a'](), this['onShareApp' + 'Message'](), this['login'](), this['onShow']();
        }
        static ['show_versi' + 'on']() {
            let _0x2ef91c = new Laya['Text']();
            Laya['timer']['once'](0x1f4, this, () => {
                _0x2ef91c['text'] = _0x1cf383['version'], _0x2ef91c['color'] = '#ffffff', this['_layer']['addChild'](_0x2ef91c);
            });
        }
        static ['onShareApp' + 'Message']() {
            null != window['wx'] && (_0x282dd5['onShareApp' + 'Message'](() => {
                let _0x22b233 = _0x37b148['shareConte' + 'nt'][0x0 == _0x10e052['getGameMod' + 'e']() ? 0x0 : 0x1], _0x39b667 = _0x22b233;
                return _0x22b233['length'] && (_0x39b667 = _0x22b233[Math['floor'](Math['random']() * _0x22b233['length'])]), {
                    'title': _0x39b667['title'],
                    'imageUrl': _0x39b667['image'],
                    'query': 'shareName=' + _0x39b667['name']
                };
            }), _0x282dd5['showShareM' + 'enu'](), _0x282dd5['updateShar' + 'eMenu']());
        }
        static ['login']() {
            _0x282dd5['login']({
                'success': _0x4854df => {
                    let _0x3c0ced = _0x4854df['code'];
                    console['log']('->\x20login\x20c' + 'ode:' + _0x3c0ced), _0x18b2cc['getSession' + 'Key'](_0x3c0ced, _0x784c47 => {
                        let _0x7c4b67 = JSON['parse'](_0x784c47);
                        _0x7c4b67 && _0x7c4b67['openid'] && _0x7c4b67['openid']['length'] > 0x0 ? (_0x10e052['setOpenid'](_0x7c4b67['openid']), console['log']('->\x20openid:' + _0x10e052['getOpenid']())) : 0x0 == _0x10e052['getOpenid']()['length'] && (_0x10e052['setOpenid']('ms' + new Date()['getTime']()), console['log']('->\x20openid:' + _0x10e052['getOpenid']())), _0x10e052['setSession' + 'Key'](_0x7c4b67['session_ke' + 'y']), (_0x3ad99f => {
                            console['log']('->\x20login\x20r' + 'es:' + JSON['stringify'](_0x3ad99f));
                            let _0x4bf583 = _0x3ad99f['query']['openid'], _0x1a16fb = _0x3ad99f['query']['name'];
                            _0x3ad99f['query']['type'], (null != _0x4bf583 && null != _0x1a16fb && (console['log']('login\x20----' + '----------' + '----------' + '-----'), console['log']('login\x20->\x20用' + '户\x20name:' + _0x10e052['getNicknam' + 'e']() + '(openid:' + _0x10e052['getOpenid']() + ')'), console['log']('login\x20->\x20点' + '了\x20name:' + _0x1a16fb + '(openid:' + _0x4bf583 + ')分享的小游戏'), console['log']('login\x20----' + '----------' + '----------' + '-----')), _0x18b2cc['userCalcIn'](_0x3ad99f), _0x18b2cc['saveUser'](_0x3ad99f['scene'], _0x3ad99f['referrerIn' + 'fo']));
                            let _0x551039 = _0x3ad99f['query']['shareName'];
                            _0x53e669['shareImgPo' + 'int'](_0x551039);
                        })(_0x282dd5['getLaunchO' + 'ptionsSync']());
                    });
                }
            });
        }
        static ['onShow']() {
            _0x282dd5['onShow'](_0x105968 => {
                console['log']('->\x20onShow\x20' + 'res:' + JSON['stringify'](_0x105968)), _0x282dd5['showToast']({
                    'title': '处理中',
                    'duration': 0x3e8,
                    'mask': !0x0,
                    'icon': 'loading'
                });
                let _0x64b507 = new Date()['getTime']() - this['shareTime'];
                Laya['timer']['once'](0x3e8, this, () => {
                    this['successCal' + 'lBack'] && (console['log']('->\x20wx.onSh' + 'ow\x20goneTim' + 'e:' + _0x64b507), this['shareHandl' + 'e'](_0x64b507, this['successCal' + 'lBack'], this['failCallBa' + 'ck']), this['successCal' + 'lBack'] = null, this['failCallBa' + 'ck'] = null);
                });
                let _0x1e60c8 = _0x105968['query']['openid'], _0x189c63 = _0x105968['query']['name'];
                null != _0x1e60c8 && null != _0x189c63 && (console['log']('onShow\x20---' + '----------' + '----------' + '------'), console['log']('onShow\x20->\x20' + '用户\x20name:' + _0x10e052['getNicknam' + 'e']() + '(openid:' + _0x10e052['getOpenid']() + ')'), console['log']('onShow\x20->\x20' + '点了\x20name:' + _0x189c63 + '(openid:' + _0x1e60c8 + ')分享的小游戏'), console['log']('onShow\x20---' + '----------' + '----------' + '------')), _0x282dd5['updateMana' + 'ger'](), _0x18b2cc['saveUser'](_0x105968['scene'], _0x105968['referrerIn' + 'fo']);
            });
        }
        static ['shareHandl' + 'e'](_0x199e49, _0x57aae5, _0x403d8d) {
            if (null == window['wx'])
                return;
            let _0x1a8052 = !0x1;
            _0x199e49 < 0x5dc ? 0x1 == _0x10e052['getForce']() && _0x282dd5['showModal']({
                'title': '提示',
                'content': '成功分享才有奖励~',
                'showCancel': !0x1,
                'success': () => {
                    this['sharePoint'](this['pointName'], !0x0, _0x57aae5, _0x403d8d, this['param']);
                }
            }) : (_0x199e49 > 0x2710 ? _0x1a8052 = !0x0 : 0x0 == this['shareSucce' + 'ssCount'] ? _0x199e49 < 0x7d0 && this['failCount'] < 0x3 ? 0x1 == _0x10e052['getForce']() && _0x282dd5['showModal']({
                'title': '提示',
                'content': '分享到群才有奖励~',
                'showCancel': !0x1,
                'success': () => {
                    this['sharePoint'](this['pointName'], !0x0, _0x57aae5, _0x403d8d, this['param']);
                }
            }) : (_0x1a8052 = !0x0, this['lastSucces' + 'sShareNeed' + 'Time'] = _0x199e49) : 0x1 == this['shareSucce' + 'ssCount'] ? _0x199e49 < this['lastSucces' + 'sShareNeed' + 'Time'] && this['failCount'] < 0x3 ? 0x1 == _0x10e052['getForce']() && _0x282dd5['showModal']({
                'title': '提示',
                'content': '分享到不同群才有奖励' + '~',
                'showCancel': !0x1,
                'success': () => {
                    this['sharePoint'](this['pointName'], !0x0, _0x57aae5, _0x403d8d, this['param']);
                }
            }) : (_0x1a8052 = !0x0, this['findGroupT' + 'ime'] = _0x199e49 - this['lastSucces' + 'sShareNeed' + 'Time'], this['findGroupT' + 'ime'] > 0x258 && (this['findGroupT' + 'ime'] = 0x258), this['lastSucces' + 'sShareNeed' + 'Time'] = _0x199e49) : this['shareSucce' + 'ssCount'] > 0x1 && (_0x199e49 < this['lastSucces' + 'sShareNeed' + 'Time'] + this['findGroupT' + 'ime'] && this['failCount'] < 0x2 ? 0x1 == _0x10e052['getForce']() && _0x282dd5['showModal']({
                'title': '提示',
                'content': '分享到不同群才有奖励' + '~',
                'showCancel': !0x1,
                'success': () => {
                    this['sharePoint'](this['pointName'], !0x0, _0x57aae5, _0x403d8d, this['param']);
                }
            }) : (_0x1a8052 = !0x0, this['lastSucces' + 'sShareNeed' + 'Time'] = _0x199e49)), _0x1a8052 ? (_0x18b2cc['sharePoint'](this['pointName'] + '-success', 0x1), _0x57aae5(), ++this['shareSucce' + 'ssCount'], ++this['successCou' + 'nt'], this['failCount'] = 0x0) : (++this['failCount'], _0x403d8d && _0x403d8d()));
        }
        static ['sharePoint'](_0x3aa2b7, _0x3d2c0e, _0x1f6d3a, _0x2665ed = null, _0x153211 = {
            'type': '',
            'img': null,
            'title': null
        }) {
            this['pointName'] = _0x3aa2b7, this['param'] = _0x153211, _0x18b2cc['sharePoint'](this['pointName'] + '-touch', 0x1), _0x1cf383['debug'] ? _0x1f6d3a() : 0x0 == _0x10e052['getGameMod' + 'e']() ? _0x1f6d3a() : 0x2 == _0x10e052['getGameMod' + 'e']() ? (console['log']('视频'), this['showVideo'](_0x1f6d3a, _0x2665ed)) : _0x3d2c0e ? (console['log']('分享'), this['share'](_0x1f6d3a, _0x2665ed, _0x153211['type'], _0x153211['img'], _0x153211['title'])) : (console['log']('视频'), this['showVideo'](_0x1f6d3a, _0x2665ed));
        }
        static ['showVideo'](_0xc273e1, _0x16e170 = null) {
            if (null == window['wx'])
                return void _0xc273e1();
            let _0x2cf0c4 = _0x282dd5['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x1cf383['videoId'] });
            if (null == _0x2cf0c4)
                return;
            _0x2cf0c4['load']()['then'](() => {
                _0x2cf0c4['show']();
            })['catch'](_0x15da3a => {
                console['log'](_0x15da3a), 'can\x27t\x20invo' + 'ke\x20load()\x20' + 'while\x20vide' + 'o-ad\x20is\x20sh' + 'owed' != _0x15da3a['errMsg'] ? (_0x2cf0c4['offClose'](_0x32b6d8), _0xc273e1 && (0x2 != _0x10e052['getGameMod' + 'e']() ? this['share'](_0xc273e1, _0x16e170) : _0xc273e1())) : _0x526de8['hideBanner' + 'Ad']();
            });
            let _0x32b6d8 = _0x263299 => {
                Laya['timer']['once'](0x2710, this, () => {
                    _0x526de8['showBanner' + 'Ad']();
                }), _0x2cf0c4['offClose'](_0x32b6d8), (_0x263299 && _0x263299['isEnded'] || void 0x0 === _0x263299) && (_0x18b2cc['sharePoint'](this['pointName'] + '-success', 0x1), _0xc273e1(), ++this['successCou' + 'nt']);
            };
            _0x2cf0c4['onClose'](_0x32b6d8), _0x2cf0c4['onError'](_0x329065 => {
            });
        }
        static ['share'](_0x13cbbf, _0x4851a1 = null, _0x1f3442 = '', _0x4daf62 = null, _0x1da4bf = null) {
            if (null == window['wx'])
                return void _0x13cbbf();
            this['shareTime'] = new Date()['getTime'](), this['successCal' + 'lBack'] = _0x13cbbf, this['failCallBa' + 'ck'] = _0x4851a1, 0x3 == _0x10e052['getGameMod' + 'e']() && (this['shareDone'] = !0x1, Laya['timer']['once'](0x1f4, this, () => {
                this['shareDone'] || this['showVideo'](_0x13cbbf, _0x4851a1);
            }));
            let _0xaf6f = _0x37b148['shareConte' + 'nt'][0x0 == _0x10e052['getGameMod' + 'e']() ? 0x0 : 0x1], _0x233e45 = _0xaf6f;
            _0xaf6f['length'] && (_0x233e45 = _0xaf6f[Math['floor'](Math['random']() * _0xaf6f['length'])]), _0x282dd5['shareAppMe' + 'ssage']({
                'title': _0x1da4bf || _0x233e45['title'],
                'imageUrl': _0x4daf62 || _0x233e45['image'],
                'query': 'photo=' + _0x10e052['getPhoto']() + '&openid=' + _0x10e052['getOpenid']() + '&name=' + _0x10e052['getNicknam' + 'e']() + '&type=' + _0x1f3442 + ('&shareName' + '=') + _0x233e45['name']
            });
        }
        static ['setRankDat' + 'a'](_0x1344b6) {
            null != window['wx'] && _0x282dd5['setUserClo' + 'udStorage']({
                'KVDataList': [{
                        'key': 'score',
                        'value': '' + _0x1344b6
                    }]
            });
        }
        static ['navigateTo' + 'MiniProgra' + 'm'](_0x2f5b88) {
            _0x282dd5['navigateTo' + 'MiniProgra' + 'm']({
                'appId': _0x2f5b88,
                'success': () => {
                    _0x18b2cc['userCalcOu' + 't'](_0x2f5b88);
                }
            });
        }
        static ['createFeed' + 'backButton'](_0x45f482, _0x4e9ce0) {
            let _0x45aaf4 = window['wx'];
            if (null != _0x45aaf4)
                return _0x282dd5['createFeed' + 'backButton']({
                    'type': 'image',
                    'text': '投诉',
                    'image': 'UI/feedbac' + 'k.png',
                    'style': {
                        'left': void 0x0 === _0x45f482 ? 0xa : _0x45f482,
                        'top': void 0x0 === _0x4e9ce0 ? _0x45aaf4['getSystemI' + 'nfoSync']()['windowHeig' + 'ht'] / 0x2 : _0x4e9ce0,
                        'width': 0x28,
                        'height': 0x28,
                        'lineHeight': 0x28,
                        'color': '#ffffff',
                        'textAlign': 'center',
                        'fontSize': 0x10,
                        'borderRadius': 0x4
                    }
                });
        }
        static ['isShare']() {
            return this['successCou' + 'nt'] % _0x10e052['getShareDi' + 'vVedio']() > 0x0;
        }
        static ['getUserInf' + 'o'](_0x2e6744, _0x199357) {
            let _0x2d9bdb = window['wx'];
            null != _0x2d9bdb ? _0x282dd5['getSetting']({
                'success': _0x53e0b9 => {
                    if (_0x53e0b9['authSettin' + 'g']['scope.user' + 'Info'])
                        console['log']('->\x20已经授权'), _0x2d9bdb['getUserInf' + 'o']({
                            'success': _0x37832b => {
                                _0x10e052['setAuthori' + 'ze'](), _0x37832b['userInfo']['type'] = 'authed', _0x2e6744(_0x37832b['userInfo']);
                            }
                        });
                    else {
                        console['log']('->\x20没有授权');
                        let _0x487469 = window['wx']['createUser' + 'InfoButton']({
                            'type': 'image',
                            'image': _0x199357,
                            'style': this['getAuthBtn' + 'Range']()
                        });
                        _0x487469['show'](), _0x487469['onTap'](_0x39b3e5 => {
                            'getUserInf' + 'o:ok' == _0x39b3e5['errMsg'] ? _0x39b3e5['userInfo'] && (_0x10e052['setNicknam' + 'e'](_0x39b3e5['userInfo']['nickName']), _0x10e052['setPhoto'](_0x39b3e5['userInfo']['avatarUrl']), _0x10e052['setAuthori' + 'ze'](), _0x39b3e5['userInfo']['type'] = 'auth', _0x2e6744(_0x39b3e5['userInfo'])) : _0x2e6744({ 'type': 'authFail' }), _0x487469['hide'](), _0x487469['destroy']();
                        }), _0x2e6744({
                            'type': 'button',
                            'button': _0x487469
                        });
                    }
                }
            }) : _0x2e6744({ 'type': null });
        }
        static ['getAuthBtn' + 'Range']() {
            let _0x50f7e9 = window['wx'];
            if (null == _0x50f7e9)
                return {};
            let _0x5625e5 = _0x50f7e9['getSystemI' + 'nfoSync']()['windowWidt' + 'h'] / Laya['stage']['designWidt' + 'h'];
            return {
                'left': 0x174 * _0x5625e5,
                'top': 0x36d * _0x5625e5 + (Laya['stage']['height'] - Laya['stage']['designHeig' + 'ht']) / 0x2 * _0x5625e5,
                'width': 0x139 * _0x5625e5,
                'height': 0x84 * _0x5625e5
            };
        }
        static ['showVideo_' + 'direct'](_0x17dba8, _0x3cc8ff, _0x346f2f = null) {
            this['pointName'] = _0x17dba8;
            let _0x21063f = window['wx'];
            if (null == _0x21063f)
                return void _0x3cc8ff();
            if (_0x1cf383['debug'])
                return void _0x3cc8ff();
            let _0x3027ad = _0x21063f['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x1cf383['videoId'] });
            if (null == _0x3027ad)
                return;
            _0x3027ad['load']()['then'](() => {
                _0x3027ad['show']();
            })['catch'](_0x129ffd => {
                console['log'](_0x129ffd), 'can\x27t\x20invo' + 'ke\x20load()\x20' + 'while\x20vide' + 'o-ad\x20is\x20sh' + 'owed' != _0x129ffd['errMsg'] ? (_0x3027ad['offClose'](_0x3fd44d), _0x3cc8ff && this['share'](_0x3cc8ff, _0x346f2f)) : _0x526de8['hideBanner' + 'Ad']();
            });
            let _0x3fd44d = _0x41380c => {
                Laya['timer']['once'](0x2710, this, () => {
                    _0x526de8['showBanner' + 'Ad']();
                }), _0x3027ad['offClose'](_0x3fd44d), (_0x41380c && _0x41380c['isEnded'] || void 0x0 === _0x41380c) && (_0x18b2cc['sharePoint'](this['pointName'] + '-success', 0x65), _0x3cc8ff(), ++this['successCou' + 'nt']);
            };
            _0x3027ad['onClose'](_0x3fd44d), _0x3027ad['onError'](_0x56deaf => {
            });
        }
    }
    _0x109343['_layer'] = null, _0x109343['shareTime'] = 0x0, _0x109343['successCal' + 'lBack'] = null, _0x109343['failCallBa' + 'ck'] = null, _0x109343['successCou' + 'nt'] = 0x1, _0x109343['pointName'] = '', _0x109343['param'] = {
        'type': null,
        'img': null,
        'title': null
    }, _0x109343['lastSucces' + 'sShareNeed' + 'Time'] = 0x0, _0x109343['findGroupT' + 'ime'] = 0x0, _0x109343['shareDone'] = !0x0, _0x109343['shareSucce' + 'ssCount'] = 0x0, _0x109343['failCount'] = 0x0;
    class _0x4e8acf extends _0x1b6eb0['RankUI'] {
        constructor() {
            super(), this['sharedText' + 'ure'] = null, this['frameIndex'] = 0x0, this['showRanks'] = {}, this['wxOpenData' + 'Viewer'] = null, this['platformBo' + 'xUI'] = null, this['is_show_li' + 'st'] = !0x1, _0x4e8acf['thiz'] = this, this['btnBack']['on'](Laya['Event']['CLICK'], this, () => {
                console['log']('返回点击事件'), this['rankList']['visible'] = !0x1, this['is_show_li' + 'st'] = !0x1, _0x4e8acf['list_mask']['visible'] = !0x1, _0x4e8acf['hide'](_0x563e88['LIST']);
            }), this['btnLeft']['on'](Laya['Event']['CLICK'], this, () => {
                null != window['wx'] && _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['postMsg']({ 'cmd': 'left' });
            }), this['btnRight']['on'](Laya['Event']['CLICK'], this, () => {
                null != window['wx'] && _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['postMsg']({ 'cmd': 'right' });
            }), this['rankTop1']['on'](Laya['Event']['CLICK'], this, () => {
                _0x4e8acf['show'](_0x563e88['LIST']);
            }), this['rankTop2']['on'](Laya['Event']['CLICK'], this, () => {
                _0x4e8acf['show'](_0x563e88['LIST']);
            }), this['rankRight']['on'](Laya['Event']['CLICK'], this, () => {
                _0x4e8acf['show'](_0x563e88['LIST']);
            });
        }
        ['isUpdate']() {
            for (let _0x1d38ef in this['showRanks'])
                if (this['showRanks'][_0x1d38ef])
                    return !0x0;
            return !0x1;
        }
        static ['init'](_0x150b65) {
            if (null == _0x4e8acf['thiz']) {
                this['init_mask'](_0x150b65);
                let _0x46bda1 = new _0x4e8acf();
                _0x46bda1['zOrder'] = 0x0, _0x150b65['addChild'](_0x46bda1), _0x4e8acf['thiz']['platformBo' + 'xUI'] = _0x150b65, null == _0x4e8acf['thiz']['wxOpenData' + 'Viewer'] && (_0x4e8acf['thiz']['wxOpenData' + 'Viewer'] = new _0x4c5826(), _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['width'] = 0x2d0, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['height'] = 0x500, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['x'] = 0x0, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['y'] = 0x0, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['mouseEnabl' + 'ed'] = !0x1, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['mouseThrou' + 'gh'] = !0x0, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['zOrder'] = 0x3e7, _0x4e8acf['thiz']['platformBo' + 'xUI']['addChild'](_0x4e8acf['thiz']['wxOpenData' + 'Viewer']), _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['is_refresh'] = !0x1);
            }
        }
        static ['init_mask'](_0x4cb3b4) {
            this['list_mask'] = new Laya['Image'](), this['list_mask']['size'](0x640, 0x640), this['list_mask']['anchorX'] = 0.5, this['list_mask']['anchorY'] = 0.5, this['list_mask']['skin'] = 'UI/mask.pn' + 'g', this['list_mask']['pos'](_0x1cf383['width'] / 0x2, _0x1cf383['height'] / 0x2), _0x4cb3b4['addChild'](this['list_mask']), this['list_mask']['visible'] = !0x1;
        }
        ['func'](_0x4c9d45) {
            this['showRanks'][_0x4c9d45] = !0x0, Laya['timer']['once'](0xbb8, this, () => {
                _0x4c9d45 == _0x563e88['LIST'] && this['rankList']['visible'] ? this['showRanks'][_0x4c9d45] = !0x0 : this['showRanks'][_0x4c9d45] = !0x1;
            });
        }
        static ['show'](_0x18f1cb, _0x38caee) {
            _0x109343['setRankDat' + 'a'](_0x1b521d['getMaxScor' + 'e']()), null != window['wx'] && (_0x4e8acf['thiz']['platformBo' + 'xUI']['visible'] = !0x0, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['postMsg']({
                'cmd': 'show',
                'type': _0x18f1cb,
                'curScore': void 0x0 === _0x38caee ? _0x1b521d['getMaxScor' + 'e']() : _0x38caee,
                'openid': _0x10e052['getOpenid']()
            }), _0x18f1cb == _0x563e88['LIST'] ? (this['thiz'][_0x18f1cb]['visible'] = !0x0, this['thiz']['mouseThrou' + 'gh'] = !0x1, this['thiz']['showRanks'][_0x18f1cb] = !0x0, this['thiz']['is_show_li' + 'st'] = !0x0, this['list_mask']['visible'] = !0x0) : _0x18f1cb == _0x563e88['TOP1'] ? (this['thiz'][_0x18f1cb]['visible'] = !0x0, this['thiz']['func'](_0x18f1cb), this['list_mask']['visible'] = !0x1) : _0x18f1cb == _0x563e88['TOP2'] ? (this['thiz'][_0x18f1cb]['visible'] = !0x0, this['thiz']['func'](_0x18f1cb), this['list_mask']['visible'] = !0x1) : _0x18f1cb == _0x563e88['END1'] ? this['thiz']['func'](_0x18f1cb) : _0x18f1cb == _0x563e88['END2'] ? (this['thiz']['func'](_0x18f1cb), this['list_mask']['visible'] = !0x1) : _0x18f1cb == _0x563e88['RIGHT'] && (this['thiz'][_0x18f1cb]['visible'] = !0x0, this['list_mask']['visible'] = !0x1, this['thiz']['func'](_0x18f1cb)), Laya['timer']['clear'](this, this['show_sched' + 'ule_callba' + 'ck']), Laya['timer']['clear'](this, this['hide_sched' + 'ule_callba' + 'ck']), _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['is_refresh'] = !0x0, _0x18f1cb == _0x563e88['TOP2'] || _0x18f1cb == _0x563e88['TOP1'] ? (_0x4e8acf['thiz']['wxOpenData' + 'Viewer']['is_refresh'] = !0x1, _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['fresh_one']()) : Laya['timer']['once'](0x5dc, this, this['show_sched' + 'ule_callba' + 'ck']));
        }
        static ['hide'](_0x19a2cf) {
            null != window['wx'] && (this['list_mask']['visible'] = !0x1, Laya['timer']['clear'](this, this['show_sched' + 'ule_callba' + 'ck']), Laya['timer']['clear'](this, this['hide_sched' + 'ule_callba' + 'ck']), _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['is_refresh'] = !0x0, Laya['timer']['once'](0x5dc, this, this['hide_sched' + 'ule_callba' + 'ck']), _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['postMsg']({
                'cmd': 'hide',
                'type': _0x19a2cf
            }), _0x19a2cf == _0x563e88['LIST'] && (this['thiz']['mouseThrou' + 'gh'] = !0x0), this['thiz'][_0x19a2cf]['visible'] = !0x1, this['thiz']['func'](_0x19a2cf));
        }
        static ['show_sched' + 'ule_callba' + 'ck']() {
            0x0 == this['thiz']['is_show_li' + 'st'] ? _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['is_refresh'] = !0x1 : _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['is_refresh'] = !0x0;
        }
        static ['hide_sched' + 'ule_callba' + 'ck']() {
            _0x4e8acf['thiz']['wxOpenData' + 'Viewer']['is_refresh'] = !0x1;
        }
    }
    _0x4e8acf['thiz'] = null, _0x4e8acf['list_mask'] = null;
    class _0x4d0fb4 extends Laya['Image'] {
        constructor() {
            super(), this['listData'] = [], this['curIndex'] = 0x0, this['curData'] = null, this['visible'] = !0x1, this['anchorX'] = 0.5, this['anchorY'] = 0.5, this['on'](Laya['Event']['CLICK'], this, () => {
                _0x109343['navigateTo' + 'MiniProgra' + 'm'](this['curData']['appId']), _0x18b2cc['sharePoint'](this['curData']['appName'], 0x67);
            }), Laya['timer']['clearAll'](this), Laya['timer']['loop'](0x1388, this, this['update']);
            let _0x5e85de = (_0x25be81, _0x3e3a0a, _0x196157) => {
                Laya['Tween']['to'](this, { 'rotation': _0x25be81 }, _0x3e3a0a, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, _0x196157));
            };
            Laya['timer']['loop'](0x5dc, this, () => {
                _0x5e85de(0xa, 0x32, () => {
                    _0x5e85de(-0xa, 0x64, () => {
                        _0x5e85de(0xa, 0x64, () => {
                            _0x5e85de(-0xa, 0x64, () => {
                                _0x5e85de(0x0, 0x32, () => {
                                });
                            });
                        });
                    });
                });
            });
        }
        ['update']() {
            this['listData']['length'] < 0x2 || (++this['curIndex'], this['curIndex'] >= this['listData']['length'] && (this['curIndex'] = 0x0), this['curData'] = this['listData'][this['curIndex']], this['skin'] = this['curData']['icon']);
        }
        ['setListDat' + 'a'](_0x45a8d9) {
            0x0 != _0x45a8d9['length'] ? (this['visible'] = !0x0, this['listData'] = _0x45a8d9, this['curIndex'] = Math['floor'](Math['random']() * this['listData']['length']), this['curData'] = this['listData'][this['curIndex']], this['skin'] = this['curData']['icon']) : this['visible'] = !0x1;
        }
        ['clean']() {
            Laya['timer']['clearAll'](this), this['removeSelf']();
        }
    }
    class _0x307eeb extends Laya['View'] {
        constructor() {
            super(), _0x307eeb['thiz'] = this;
        }
        static ['refresh']() {
            this['listAllDat' + 'a'] = [], _0x10e052['get_FlowIc' + 'on_Data']()['length'] > 0x0 && (this['listAllDat' + 'a'] = _0x10e052['get_FlowIc' + 'on_Data']()), this['listData1'] = [], this['listData2'] = [], _0x1cf383['bannerAppI' + 'ds'] = [];
            for (let _0x3bd110 = 0x0; _0x3bd110 < this['listAllDat' + 'a']['length']; ++_0x3bd110) {
                let _0x3a0c84 = this['listAllDat' + 'a'][_0x3bd110];
                if (null == _0x3a0c84)
                    continue;
                let _0x5823ba = _0x3bd110 % 0x2;
                _0x307eeb['showType'] == _0x307eeb['TYPE_ONE'] ? this['listData1']['push'](_0x3a0c84) : 0x0 == _0x5823ba ? this['listData1']['push'](_0x3a0c84) : 0x1 == _0x5823ba && this['listData2']['push'](_0x3a0c84), _0x1cf383['bannerAppI' + 'ds']['push'](_0x3a0c84['appId']);
            }
            this['icon1']['setListDat' + 'a'](this['listData1']), this['icon2']['setListDat' + 'a'](this['listData2']);
        }
        static ['init'](_0x16b3ca, _0x1113cd = _0x307eeb['TYPE_V']) {
            _0x307eeb['showType'] = _0x1113cd, _0x307eeb['thiz'] && (this['icon1']['clean'](), this['icon2']['clean'](), this['icon1'] = null, this['icon2'] = null, _0x307eeb['thiz']['removeSelf'](), _0x307eeb['thiz'] = null), _0x18b2cc['getFlowIco' + 'nData'](this['getFlowIco' + 'nData_call' + 'back']), _0x307eeb['thiz'] = new _0x307eeb(), _0x307eeb['thiz']['x'] = _0x16b3ca['x'] + 0x32, _0x307eeb['thiz']['y'] = _0x16b3ca['y'] + 0x32, _0x16b3ca['layer']['addChild'](_0x307eeb['thiz']), this['icon1'] = new _0x4d0fb4(), _0x307eeb['thiz']['addChild'](this['icon1']), this['icon2'] = new _0x4d0fb4(), _0x307eeb['thiz']['addChild'](this['icon2']), _0x307eeb['showType'] == _0x307eeb['TYPE_ONE'] && (this['icon2']['visible'] = !0x1), _0x307eeb['showType'] == _0x307eeb['TYPE_V'] ? (this['icon1']['x'] = 0x0, this['icon1']['y'] = 0x0, this['icon2']['x'] = 0x0, this['icon2']['y'] = 0x78) : (this['icon1']['x'] = 0x0, this['icon1']['y'] = 0x0, this['icon2']['x'] = 0x78, this['icon2']['y'] = 0x0), this['refresh']();
        }
        static ['getFlowIco' + 'nData_call' + 'back']() {
            _0x307eeb['refresh']();
        }
        static ['reset_Flow' + 'IconMgr_po' + 's'](_0x5336b3, _0x399f6b) {
            _0x307eeb['thiz']['x'] = _0x5336b3 + 0x32, _0x307eeb['thiz']['y'] = _0x399f6b + 0x32;
        }
    }
    _0x307eeb['TYPE_H'] = 0x0, _0x307eeb['TYPE_V'] = 0x1, _0x307eeb['TYPE_ONE'] = 0x3, _0x307eeb['showType'] = _0x307eeb['TYPE_V'], _0x307eeb['icon1'] = null, _0x307eeb['icon2'] = null, _0x307eeb['listAllDat' + 'a'] = [], _0x307eeb['thiz'] = null, _0x307eeb['listData1'] = [], _0x307eeb['listData2'] = [];
    class _0x5c3aae {
        static ['init']() {
            this['layer'](), _0x109343['init'](this['_layer']), this['init_rank'](), this['init_banne' + 'r']();
        }
        static ['layer']() {
            this['_layer'] = new Laya['Box'](), this['_layer']['width'] = 0x2d0, this['_layer']['height'] = 0x500, this['_layer']['mouseThrou' + 'gh'] = !0x0, this['_layer']['addCompone' + 'nt'](Laya['Widget']);
            let _0xc96f40 = this['_layer']['getCompone' + 'nt'](Laya['Widget']);
            _0xc96f40['centerX'] = 0x0, _0xc96f40['centerY'] = 0x0, this['_layer']['zOrder'] = 0x3e7, Laya['stage']['addChild'](this['_layer']);
        }
        static ['init_rank']() {
            window['wx'] && Laya['loader']['load'](['res/atlas/' + 'rank.atlas'], Laya['Handler']['create'](this, function () {
                Laya['MiniAdpter']['sendAtlasT' + 'oOpenDataC' + 'ontext']('res/atlas/' + 'rank.atlas'), Laya['timer']['once'](0x3e8, this, () => {
                    _0x4e8acf['init'](this['_layer']);
                });
            }));
        }
        static ['init_banne' + 'r']() {
            Laya['timer']['once'](0x3e8, this, () => {
                window['wx'] && (this['feedbackBu' + 'tton'] = _0x109343['createFeed' + 'backButton'](0x0, window['wx']['getSystemI' + 'nfoSync']()['windowHeig' + 'ht'] / 0x2 + 0xa)), _0x307eeb['init']({
                    'x': 0x26c,
                    'y': 0x64,
                    'layer': this['_layer']
                }, _0x307eeb['TYPE_V']), Laya['timer']['once'](0x3e8, this, () => {
                    _0x526de8['init'](this['_layer']);
                });
            });
        }
        static ['reset_feed' + 'backBt_pos'](_0x11c607, _0x27ab5b) {
            window['wx'] && (console['log'](this['feedbackBu' + 'tton']), this['feedbackBu' + 'tton']['style']['top'] = _0x27ab5b, this['feedbackBu' + 'tton']['style']['left'] = _0x11c607);
        }
        static ['reset_Flow' + 'IconMgr_po' + 's'](_0x320fb7, _0xc6b551) {
            _0x307eeb['reset_Flow' + 'IconMgr_po' + 's'](_0x320fb7, _0xc6b551);
        }
    }
    _0x5c3aae['_layer'] = null, _0x5c3aae['feedbackBu' + 'tton'] = null;
    class _0x3a1c60 extends _0x1b6eb0['main']['loadingVie' + 'wUI'] {
        constructor() {
            super(), this['autoDestro' + 'yAtClosed'] = !0x0, this['y'] = (Laya['stage']['height'] - this['height']) / 0x2;
        }
        ['onEnable']() {
            this['_jinduShow'] = 0x0, _0x3a1c60['_isComplet' + 'e'] = !0x1, Laya['timer']['frameLoop'](0x1, this, this['onLoop']), _0x1fe102['isLoadingC' + 'omplete'] = !0x0, platform['getInstanc' + 'e']()['puzzlegame' + 'startup']('Shape-Shif' + 't-Run', () => {
                Laya['stage']['addChild'](window['scrollList']), window['yad']['top'] = 0x14, window['yad']['right'] = 0x14, window['WebAudioEn' + 'gine']['pause'] = Laya['LocalStora' + 'ge']['getItem']('Shape-Shif' + 't-Run-musi' + 'cState') ? JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('Shape-Shif' + 't-Run-musi' + 'cState')) : ![], window['scrollList']['setSize'](0xc8, 0xc8, !![]), window['scrollList']['scale'](0.85, 0.85), window['scrollList']['bottom'] = 0xa, window['scrollList']['visible'] = ![], (_0x5c3aae['init'](), Laya['loader']['create']([
                    _0x101991['res_game3D' + 'Scene'],
                    _0x101991['res_game3D' + 'Spr'],
                    _0x101991['sound_addS' + 'core'],
                    'tietu/kuai' + '1_1.png',
                    'tietu/kuai' + '1_2.png',
                    'tietu/kuai' + '1_3.png',
                    'tietu/kuai' + '2_1.png',
                    'tietu/kuai' + '2_2.png',
                    'tietu/kuai' + '2_3.png',
                    'tietu/kuai' + '3_1.png',
                    'tietu/kuai' + '3_2.png',
                    'tietu/kuai' + '3_3.png',
                    'tietu/kuai' + '4_1.png',
                    'tietu/kuai' + '4_2.png',
                    'tietu/kuai' + '4_3.png',
                    'tietu/kuai' + '5_1.png',
                    'tietu/kuai' + '5_2.png',
                    'tietu/kuai' + '5_3.png'
                ], Laya['Handler']['create'](this, function () {
                    let _0x556c62 = ![], _0x66b774 = ![];
                    _0x3a1c60['_templet0'] = new Laya['Templet'](), _0x3a1c60['_templet'] = new Laya['Templet'](), _0x3a1c60['_templet']['on'](Laya['Event']['COMPLETE'], this, () => {
                        _0x66b774 = !![], _0x556c62 && (_0x3a1c60['_isComplet' + 'e'] = !0x0);
                    }), _0x3a1c60['_templet']['loadAni']('boneSkin/c' + 'hongci.sk'), (_0x3a1c60['_templet0']['on'](Laya['Event']['COMPLETE'], this, () => {
                        _0x556c62 = !![], _0x66b774 && (_0x3a1c60['_isComplet' + 'e'] = !0x0);
                    }), _0x3a1c60['_templet0']['loadAni']('boneSkin/g' + 'uide.sk'));
                }['bind'](this))));
            });
        }
        ['onLoop']() {
            this['_jinduShow'] < 0x62 ? (this['_jinduShow']++, this['jindu']['text'] = this['_jinduShow'] + '%') : _0x1fe102['isLoadingC' + 'omplete'] && _0x3a1c60['_isComplet' + 'e'] && (this['_jinduShow']++, this['_jinduShow'] >= 0x64 && (this['_jinduShow'] = 0x64, Laya['timer']['clear'](this, this['onLoop']), Laya['Scene']['open'](_0x101991['res_gameVi' + 'ew'])), this['jindu']['text'] = this['_jinduShow'] + '%');
        }
        ['onDisable']() {
        }
    }
    class _0x252ddd {
        static ['substr'](_0xc3f26f, _0xc975b9, _0x8e0b7a = '') {
            if (!_0xc3f26f || !_0xc975b9)
                return '';
            let _0x1c7403 = 0x0;
            var _0x137a67 = '';
            for (let _0x5b405f = 0x0; _0x5b405f < _0xc3f26f['length'] && (_0xc3f26f['charCodeAt'](_0x5b405f) > 0xff ? _0x1c7403 += 0x2 : _0x1c7403++, !(_0x1c7403 > _0xc975b9)); _0x5b405f++)
                _0x137a67 += _0xc3f26f['charAt'](_0x5b405f);
            return _0x137a67 == _0xc3f26f ? _0xc3f26f : _0x137a67 + _0x8e0b7a;
        }
        static ['playButton' + 'Click']() {
        }
        static ['playSound'](_0x35d38c) {
            Laya['SoundManag' + 'er']['playSound'](_0x35d38c);
        }
        static ['playMusic'](_0x4e3849, _0x1dadcd = 0x0, _0x14a21f, _0x1b04e1) {
            Laya['SoundManag' + 'er']['playMusic'](_0x4e3849, _0x1dadcd, _0x14a21f, _0x1b04e1);
        }
        static ['stopMusic']() {
            Laya['SoundManag' + 'er']['stopMusic']();
        }
        static ['setMusicVo' + 'lume'](_0x5799ba) {
            Laya['SoundManag' + 'er']['setMusicVo' + 'lume'](_0x5799ba);
        }
        static ['getTimeSta' + 'mp']() {
            return Math['floor'](new Date()['getTime']() / 0x3e8);
        }
        static ['isOtherDay'](_0x1bbca2) {
            return Math['floor'](this['getTimeSta' + 'mp']() / 0x15180) > Math['floor'](_0x1bbca2 / 0x15180);
        }
        static ['getTableSi' + 'ze'](_0x6fb667) {
            let _0x259cc6 = 0x0;
            for (let _0x5cc535 in _0x6fb667)
                ++_0x259cc6;
            return _0x259cc6;
        }
        static ['sharePoint'](_0x3b9085, _0x303002, _0x4ec147 = null, _0x48c2c8 = null, _0x1f3c54 = {
            'type': '',
            'img': null,
            'title': null
        }) {
            let _0x530e54 = null === _0x48c2c8 ? _0x109343['isShare']() : _0x48c2c8;
            _0x109343['sharePoint'](_0x3b9085, _0x530e54, _0x303002, _0x4ec147, _0x1f3c54);
        }
        static ['showVideo'](_0x3d826d, _0x48fe67, _0x26debf) {
            _0x109343['showVideo_' + 'direct'](_0x3d826d, _0x48fe67, _0x26debf);
        }
        static ['sharePoint' + 'Count'](_0x58aabb, _0x1f1ff2) {
            _0x18b2cc['sharePoint'](_0x58aabb, _0x1f1ff2);
        }
        static ['downloadDa' + 'ta'](_0xc8ffcf, _0x318ce0, _0x1f5e1d) {
            _0x18b2cc['downloadDa' + 'ta'](_0xc8ffcf, _0x318ce0, _0x1f5e1d);
        }
    }
    class _0x1005cc extends _0x1b6eb0['main']['menuViewUI'] {
        constructor() {
            super(), this['y'] = (Laya['stage']['height'] - this['height']) / 0x2;
        }
        ['onEnable']() {
            this['autoDestro' + 'yAtClosed'] = !0x0, _0x1fe102['isStartGam' + 'e'] = !0x1, _0x1fe102['isInvincib' + 'le'] = !0x1, this['propBtn']['on'](Laya['Event']['CLICK'], this, this['propClick']), this['startBtn']['on'](Laya['Event']['CLICK'], this, this['startClick']), _0x1fe102['rebrithTim' + 'es'] = 0x2, _0x252ddd['sharePoint' + 'Count'](_0x37b148['PointName']['MenuProp_o' + 'pen'], 0x65), Laya['timer']['once'](0x5dc, this, this['onceToTop1']), this['createAni'](), this['btn_music']['on'](Laya['Event']['CLICK'], this, this['changeMusi' + 'c']), this['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', window['scrollList']['visible'] = !![], this['lab_higest']['text'] = 'Highest\x20sc' + 'ore\x0a' + _0x1b521d['getMaxScor' + 'e']();
        }
        ['changeMusi' + 'c']() {
            window['WebAudioEn' + 'gine']['pause'] = !window['WebAudioEn' + 'gine']['pause'], this['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', Laya['LocalStora' + 'ge']['setItem']('Shape-Shif' + 't-Run-musi' + 'cState', JSON['stringify'](window['WebAudioEn' + 'gine']['pause']));
        }
        ['onceToTop1']() {
            _0x4e8acf['show'](_0x563e88['TOP1']);
        }
        ['createAni']() {
            this['_skeleton'] = new Laya['Skeleton'](), this['_skeleton'] = _0x3a1c60['_templet']['buildArmat' + 'ure'](0x0), this['_skeleton']['play'](0x0, !0x0), this['propBtn']['addChild'](this['_skeleton']), this['_skeleton']['pos'](this['propBtn']['width'] / 0x2, 0xdc);
        }
        ['clearAni']() {
            this['_templet'] && this['_templet']['destroy'] && this['_templet']['destroy'](), this['_skeleton'] && (this['_skeleton']['stop'](), this['_skeleton']['destroy']()), this['propBtn']['destroyChi' + 'ldren']();
        }
        ['showRank']() {
            _0x4e8acf['show'](_0x563e88['LIST']);
        }
        ['propClick']() {
            platform['getInstanc' + 'e']()['showReward'](() => {
                _0x40c3c4['I']['event'](_0x40c3c4['I']['USE_PROP']), _0x57f6b0['I']['score']['text'] = '0', _0x57f6b0['I']['box_start']['visible'] = !![], _0x57f6b0['I']['btn_music']['visible'] = !![], _0x57f6b0['I']['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', Laya['timer']['clear'](this, this['onceToTop1']), _0x4e8acf['hide'](_0x563e88['TOP1']), Laya['Scene']['close'](_0x101991['res_menuVi' + 'ew']), _0x252ddd['sharePoint' + 'Count'](_0x37b148['PointName']['MenuProp_c' + 'lose'], 0x65), Laya['LocalStora' + 'ge']['getItem']('Shape-Shif' + 't-Run-isFr' + 'istProp') || Laya['LocalStora' + 'ge']['setItem']('Shape-Shif' + 't-Run-isFr' + 'istProp', '1');
            });
        }
        ['startClick']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                _0x57f6b0['I']['score']['text'] = '0', _0x57f6b0['I']['box_start']['visible'] = !![], _0x57f6b0['I']['btn_music']['visible'] = !![], _0x57f6b0['I']['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', Laya['LocalStora' + 'ge']['getItem']('Shape-Shif' + 't-Run-isFr' + 'istProp') ? _0x1fe102['isStartGam' + 'e'] = !0x0 : (_0x1fe102['menuBtnID'] = 0x0, _0x57f6b0['I']['newPlayerV' + 'iew'](), Laya['LocalStora' + 'ge']['getItem']('Shape-Shif' + 't-Run-isFr' + 'istProp') || Laya['LocalStora' + 'ge']['setItem']('Shape-Shif' + 't-Run-isFr' + 'istProp', '1')), Laya['timer']['clear'](this, this['onceToTop1']), _0x4e8acf['hide'](_0x563e88['TOP1']), Laya['Scene']['close'](_0x101991['res_menuVi' + 'ew']), _0x252ddd['sharePoint' + 'Count'](_0x37b148['PointName']['MenuProp_c' + 'lose'], 0x65);
            });
        }
        ['onDisable']() {
            window['scrollList']['visible'] = ![], (this['clearAni'](), this['propBtn']['off'](Laya['Event']['CLICK'], this, this['propClick']), this['startBtn']['off'](Laya['Event']['CLICK'], this, this['startClick']));
        }
    }
    class _0x38257d extends _0x1b6eb0['main']['overViewUI'] {
        constructor() {
            super(), this['y'] = (Laya['stage']['height'] - this['height']) / 0x2;
        }
        ['onEnable']() {
            this['autoDestro' + 'yAtClosed'] = !0x0, this['socreLab']['text'] = '' + _0x1fe102['nowScore'], _0x1b521d['setMaxScor' + 'e'](_0x1fe102['nowScore']), _0x1fe102['rebrithTim' + 'es'] <= 0x0 ? (this['overSpr']['visible'] = !0x0, this['rebirthSpr']['visible'] = !0x1, _0x252ddd['sharePoint' + 'Count'](_0x37b148['PointName']['OverShare_' + 'open'], 0x65)) : (this['overSpr']['visible'] = !0x1, this['rebirthSpr']['visible'] = !0x0, _0x252ddd['sharePoint' + 'Count'](_0x37b148['PointName']['Rebirth_op' + 'en'], 0x65)), this['rebirthBtn']['on'](Laya['Event']['CLICK'], this, this['rebirthCLI' + 'CK']), this['goOverBtn']['on'](Laya['Event']['CLICK'], this, this['goOverCLIC' + 'K']), this['againBtn']['on'](Laya['Event']['CLICK'], this, this['againCLICK']), this['shareBtn']['on'](Laya['Event']['CLICK'], this, this['shareCLICK']), _0x4e8acf['show'](_0x563e88['END2']), window['scrollList']['visible'] = !![], this['lab_higest']['text'] = 'Highest\x20sc' + 'ore\x0a' + _0x1b521d['getMaxScor' + 'e'](), this['btn_music']['on'](Laya['Event']['CLICK'], this, this['changeMusi' + 'c']), this['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', this['img_title']['skin'] = this['overSpr']['visible'] ? 'res/go.png' : 'res/fh.png';
        }
        ['changeMusi' + 'c']() {
            window['WebAudioEn' + 'gine']['pause'] = !window['WebAudioEn' + 'gine']['pause'], this['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', Laya['LocalStora' + 'ge']['setItem']('Shape-Shif' + 't-Run-musi' + 'cState', JSON['stringify'](window['WebAudioEn' + 'gine']['pause']));
        }
        ['rebirthCLI' + 'CK']() {
            platform['getInstanc' + 'e']()['showReward'](() => {
                _0x57f6b0['I']['score']['text'] = '0', _0x57f6b0['I']['box_start']['visible'] = !![], _0x57f6b0['I']['btn_music']['visible'] = !![], _0x57f6b0['I']['btn_music']['skin'] = window['WebAudioEn' + 'gine']['pause'] ? 'res/btn_so' + 'und_off.pn' + 'g' : 'res/btn_so' + 'und_on.png', _0x1fe102['rebrithTim' + 'es']--, _0x4e8acf['hide'](_0x563e88['END2']), Laya['Scene']['close'](_0x101991['res_overVi' + 'ew']), console['log']('无敌！！！'), _0x40c3c4['I']['event'](_0x40c3c4['I']['USE_PROP']);
            });
        }
        ['goOverCLIC' + 'K']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                this['overSpr']['visible'] = !0x0, this['rebirthSpr']['visible'] = !0x1, this['img_title']['skin'] = this['overSpr']['visible'] ? 'res/go.png' : 'res/fh.png', Laya['SoundManag' + 'er']['playSound'](_0x101991['sound_game' + 'Over'], 0x1);
            });
        }
        ['againCLICK']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                _0x4e8acf['hide'](_0x563e88['END2']), Laya['Scene']['close'](_0x101991['res_overVi' + 'ew']), Laya['Scene']['open'](_0x101991['res_menuVi' + 'ew'], !0x1), _0x57f6b0['I']['gameOver']();
            });
        }
        ['shareCLICK']() {
        }
        ['onDisable']() {
            window['scrollList']['visible'] = ![], (console['log']('结束场景结束'), this['rebirthBtn']['off'](Laya['Event']['CLICK'], this, this['rebirthCLI' + 'CK']), this['goOverBtn']['off'](Laya['Event']['CLICK'], this, this['goOverCLIC' + 'K']), this['againBtn']['off'](Laya['Event']['CLICK'], this, this['againCLICK']), this['shareBtn']['off'](Laya['Event']['CLICK'], this, this['shareCLICK']));
        }
    }
    class _0x2f35a0 {
        constructor() {
        }
        static ['init']() {
            var _0x58a73f = Laya['ClassUtils']['regClass'];
            _0x58a73f('main/gameR' + 'untime.ts', _0x57f6b0), _0x58a73f('spr2dScrip' + 'ts/touchMa' + 'nger.ts', _0x5c6cd2), _0x58a73f('main/loadi' + 'ngRuntime.' + 'ts', _0x3a1c60), _0x58a73f('main/menuR' + 'untime.ts', _0x1005cc), _0x58a73f('main/overR' + 'untime.ts', _0x38257d);
        }
    }
    _0x2f35a0['width'] = 0x2d0, _0x2f35a0['height'] = 0x500, _0x2f35a0['scaleMode'] = 'showall', _0x2f35a0['screenMode'] = 'none', _0x2f35a0['alignV'] = 'middle', _0x2f35a0['alignH'] = 'center', _0x2f35a0['startScene'] = 'main/loadi' + 'ngView.sce' + 'ne', _0x2f35a0['sceneRoot'] = '', _0x2f35a0['debug'] = !0x1, _0x2f35a0['stat'] = !0x1, _0x2f35a0['physicsDeb' + 'ug'] = !0x1, _0x2f35a0['exportScen' + 'eToJson'] = !0x0, _0x2f35a0['init']();
    class _0x839ec0 {
        constructor() {
            this['bitmapFont' + '_Number'] = new Laya['BitmapFont'](), this['Number_mFo' + 'ntName'] = 'font1', this['bitmapFont' + '_Number']['loadFont']('bitFont/fo' + 'nt1.fnt', Laya['Handler']['create'](this, () => {
                this['bitmapFont' + '_Number']['autoScaleS' + 'ize'] = !0x1, this['bitmapFont' + '_Number']['letterSpac' + 'ing'] = -0x2, Laya['Text']['registerBi' + 'tmapFont'](this['Number_mFo' + 'ntName'], this['bitmapFont' + '_Number']);
            }));
        }
        static ['getInstanc' + 'es']() {
            return null == this['fontContro'] && (this['fontContro'] = new _0x839ec0()), this['fontContro'];
        }
    }
    _0x839ec0['fontContro'] = null, new class {
        constructor() {
            window['Laya3D'] ? Laya3D['init'](_0x2f35a0['width'], _0x2f35a0['height']) : Laya['init'](_0x2f35a0['width'], _0x2f35a0['height'], Laya['WebGL']), Laya['stage']['scaleMode'] = _0x2f35a0['scaleMode'], Laya['stage']['screenMode'] = _0x2f35a0['screenMode'], Laya['stage']['alignV'] = _0x2f35a0['alignV'], Laya['stage']['alignH'] = _0x2f35a0['alignH'], Laya['URL']['exportScen' + 'eToJson'] = _0x2f35a0['exportScen' + 'eToJson'], Laya['MouseManag' + 'er']['multiTouch' + 'Enabled'] = !0x1, _0x839ec0['getInstanc' + 'es'](), Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']);
        }
        ['onVersionL' + 'oaded']() {
            Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
        }
        ['onConfigLo' + 'aded']() {
            this['initShader'](), this['initShader' + '2'](), _0x2f35a0['startScene'] && Laya['Scene']['open'](_0x2f35a0['startScene']);
        }
        ['initShader']() {
            var _0x2564f5 = {
                    'a_Position': Laya['VertexMesh']['MESH_POSIT' + 'ION0'],
                    'a_Normal': Laya['VertexMesh']['MESH_NORMA' + 'L0'],
                    'a_Texcoord0': Laya['VertexMesh']['MESH_TEXTU' + 'RECOORDINA' + 'TE0']
                }, _0x1a244f = {
                    'u_MvpMatrix': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_WorldMat': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'AlbedoTexture': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'lightDir': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'lightDir1': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'lightDir2': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL']
                }, _0x2e0945 = {
                    's_Cull': Laya['Shader3D']['RENDER_STA' + 'TE_CULL'],
                    's_Blend': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND'],
                    's_BlendSrc': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_S' + 'RC'],
                    's_BlendDst': Laya['Shader3D']['RENDER_STA' + 'TE_BLEND_D' + 'ST'],
                    's_DepthTest': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_T' + 'EST'],
                    's_DepthWrite': Laya['Shader3D']['RENDER_STA' + 'TE_DEPTH_W' + 'RITE']
                }, _0x33d2b0 = Laya['Shader3D']['add']('CustomShad' + 'er'), _0x55683a = new Laya['SubShader'](_0x2564f5, _0x1a244f);
            _0x33d2b0['addSubShad' + 'er'](_0x55683a), _0x55683a['addShaderP' + 'ass']('\x0a\x09\x09#includ' + 'e\x20\x22Lightin' + 'g.glsl\x22;\x0a\x09' + '\x09attribute' + '\x20vec4\x20a_Po' + 'sition;\x20\x0a\x09' + '\x09attribute' + '\x20vec2\x20a_Te' + 'xcoord0;\x20\x0a' + '\x09\x09uniform\x20' + 'mat4\x20u_Mvp' + 'Matrix;\x20\x0a\x09' + '\x09uniform\x20m' + 'at4\x20u_Worl' + 'dMat;\x20\x0a\x09\x09\x0a' + '\x09\x09attribut' + 'e\x20vec3\x20a_N' + 'ormal;\x20\x0a\x09\x09' + '//varying\x20' + 'vec3\x20v_Nor' + 'mal;\x20\x0a\x09\x09va' + 'rying\x20vec2' + '\x20v_Texcoor' + 'd0;\x20\x0a\x09\x09//v' + 'arying\x20vec' + '4\x20color;\x0a\x09' + '\x09varying\x20v' + 'ec3\x20objpos' + ';\x0a\x09\x09void\x20m' + 'ain()\x20\x0a\x09\x09{' + '\x20\x0a\x09\x09\x09gl_Po' + 'sition\x20=\x20u' + '_MvpMatrix' + '\x20*\x20a_Posit' + 'ion;\x20\x0a\x09\x09\x09m' + 'at3\x20worldM' + 'at=mat3(u_' + 'WorldMat);' + '\x20\x0a\x09\x09\x09//v_N' + 'ormal=worl' + 'dMat*a_Nor' + 'mal;\x20\x0a\x09\x09\x09v' + '_Texcoord0' + '\x20=\x20a_Texco' + 'ord0;\x20\x0a\x09\x09\x09' + 'objpos\x20=\x20a' + '_Position.' + 'xyz;\x0a\x09\x09\x09//' + 'float\x20temp' + '\x20=\x20max(0.0' + ',\x20dot(norm' + 'alize(v_No' + 'rmal),\x20-li' + 'ghtDir))*2' + '.0-0.8;\x0a\x09\x09' + '\x09//color\x20=' + '\x20vec4(temp' + ',\x20temp,\x20te' + 'mp,\x201.0);\x0a' + '\x09\x09\x09gl_Posi' + 'tion=remap' + 'GLPosition' + 'Z(gl_Posit' + 'ion);\x20\x0a\x09\x09}' + '\x0a\x09\x09', '\x0a\x09\x09#ifdef\x20' + 'FSHIGHPREC' + 'ISION\x0a\x09\x09pr' + 'ecision\x20hi' + 'ghp\x20float;' + '\x0a\x09\x09#else\x0a\x09' + '\x09precision' + '\x20mediump\x20f' + 'loat;\x0a\x09\x09#e' + 'ndif\x0a\x09\x09var' + 'ying\x20vec2\x20' + 'v_Texcoord' + '0;\x0a\x09\x09//var' + 'ying\x20vec3\x20' + 'v_Normal;\x0a' + '\x09\x09varying\x20' + 'vec3\x20objpo' + 's;\x0a\x09\x09//var' + 'ying\x20vec4\x20' + 'color;\x0a\x09\x09u' + 'niform\x20sam' + 'pler2D\x20Alb' + 'edoTexture' + ';\x0a\x09\x09unifor' + 'm\x20vec3\x20lig' + 'htDir;\x0a\x09\x09u' + 'niform\x20vec' + '3\x20lightDir' + '1;\x0a\x09\x09unifo' + 'rm\x20vec3\x20li' + 'ghtDir2;\x0a\x09' + '\x09void\x20main' + '()\x0a\x09\x09{\x0a\x09\x09\x09' + 'vec4\x20albed' + 'oTextureCo' + 'lor\x20=\x20vec4' + '(1.0,1.0,1' + '.0,1.0);\x0a\x09' + '\x09\x09albedoTe' + 'xtureColor' + '\x20=\x20texture' + '2D(AlbedoT' + 'exture,\x20v_' + 'Texcoord0)' + ';\x0a\x09\x09\x09//alb' + 'edoTexture' + 'Color\x20*=\x20c' + 'olor;\x0a\x09\x09\x09i' + 'f(objpos.y' + '<0.0){\x0a\x09\x09\x09' + '\x09albedoTex' + 'tureColor.' + 'r\x20=\x20lightD' + 'ir2.r+((li' + 'ghtDir1.r-' + 'lightDir2.' + 'r)*(1.0+ob' + 'jpos.y));\x0a' + '\x09\x09\x09\x09albedo' + 'TextureCol' + 'or.g\x20=\x20lig' + 'htDir2.g+(' + '(lightDir1' + '.g-lightDi' + 'r2.g)*(1.0' + '+objpos.y)' + ');\x0a\x09\x09\x09\x09alb' + 'edoTexture' + 'Color.b\x20=\x20' + 'lightDir2.' + 'b+((lightD' + 'ir1.b-ligh' + 'tDir2.b)*(' + '1.0+objpos' + '.y));\x0a\x09\x09\x09}' + '\x0a\x09\x09\x09else{\x0a' + '\x09\x09\x09\x09albedo' + 'TextureCol' + 'or.rgb\x20=\x20l' + 'ightDir;\x0a\x09' + '\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09' + '\x09gl_FragCo' + 'lor=albedo' + 'TextureCol' + 'or;\x0a\x09\x09}\x0a\x09\x09', _0x2e0945);
        }
        ['initShader' + '2']() {
            var _0x1b4345 = {
                    'a_Position': Laya['VertexMesh']['MESH_POSIT' + 'ION0'],
                    'a_Normal': Laya['VertexMesh']['MESH_NORMA' + 'L0'],
                    'a_Texcoord0': Laya['VertexMesh']['MESH_TEXTU' + 'RECOORDINA' + 'TE0']
                }, _0x68bec9 = {
                    'u_MvpMatrix': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_WorldMat': Laya['Shader3D']['PERIOD_SPR' + 'ITE'],
                    'u_OutlineWidth': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_OutlineLightness': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_OutlineColor': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL'],
                    'u_AlbedoTexture': Laya['Shader3D']['PERIOD_MAT' + 'ERIAL']
                }, _0x5bdf4f = Laya['Shader3D']['add']('MultiplePa' + 'ssOutlineS' + 'hader'), _0x3243e8 = new Laya['SubShader'](_0x1b4345, _0x68bec9);
            _0x5bdf4f['addSubShad' + 'er'](_0x3243e8), _0x3243e8['addShaderP' + 'ass']('\x0a\x09\x09attribu' + 'te\x20vec4\x20a_' + 'Position;\x20' + '\x0a\x09attribut' + 'e\x20vec3\x20a_N' + 'ormal;\x0a\x09un' + 'iform\x20mat4' + '\x20u_MvpMatr' + 'ix;\x20\x0a\x09unif' + 'orm\x20float\x20' + 'u_OutlineW' + 'idth;\x0a\x09voi' + 'd\x20main()\x0a\x09' + '{\x0a\x09\x09vec4\x20p' + 'osition\x20=\x20' + 'vec4(a_Pos' + 'ition.xyz\x20' + '+\x20a_Normal' + '\x20*\x20u_Outli' + 'neWidth,\x201' + '.0);\x0a\x09\x09gl_' + 'Position\x20=' + '\x20u_MvpMatr' + 'ix\x20*\x20posit' + 'ion;\x0a\x09}\x0a\x09\x09', '\x0a\x09\x09#ifdef\x20' + 'FSHIGHPREC' + 'ISION\x0a\x09pre' + 'cision\x20hig' + 'hp\x20float;\x20' + '\x0a\x09#else\x20\x0a\x09' + '\x09precision' + '\x20mediump\x20f' + 'loat;\x20\x0a\x09#e' + 'ndif\x20\x0a\x09uni' + 'form\x20float' + '\x20u_Outline' + 'Lightness;' + '\x20\x0a\x09uniform' + '\x20vec4\x20u_Ou' + 'tlineColor' + ';\x0a\x09void\x20ma' + 'in()\x20\x0a\x09{\x20\x0a' + '\x09\x09vec3\x20fin' + 'alColor\x20=\x20' + 'u_OutlineC' + 'olor.rgb\x20*' + '\x20u_Outline' + 'Lightness;' + '\x20\x0a\x09\x09gl_Fra' + 'gColor\x20=\x20v' + 'ec4(finalC' + 'olor,0.0);' + '\x20\x0a\x09}')['renderStat' + 'e']['cull'] = Laya['RenderStat' + 'e']['CULL_FRONT'], _0x3243e8['addShaderP' + 'ass']('\x0a\x09#include' + '\x20\x22Lighting' + '.glsl\x22;\x0a\x09a' + 'ttribute\x20v' + 'ec4\x20a_Posi' + 'tion;\x20\x0a\x09at' + 'tribute\x20ve' + 'c2\x20a_Texco' + 'ord0;\x20\x0a\x09un' + 'iform\x20mat4' + '\x20u_MvpMatr' + 'ix;\x20\x0a\x09unif' + 'orm\x20mat4\x20u' + '_WorldMat;' + '\x20\x0a\x09attribu' + 'te\x20vec3\x20a_' + 'Normal;\x20\x0a\x09' + 'varying\x20ve' + 'c3\x20v_Norma' + 'l;\x20\x0a\x09varyi' + 'ng\x20vec2\x20v_' + 'Texcoord0;' + '\x20\x0a\x09void\x20ma' + 'in()\x20\x0a\x09{\x20\x0a' + '\x09\x09gl_Posit' + 'ion\x20=\x20u_Mv' + 'pMatrix\x20*\x20' + 'a_Position' + ';\x20\x0a\x09\x09mat3\x20' + 'worldMat=m' + 'at3(u_Worl' + 'dMat);\x20\x0a\x09\x09' + 'v_Normal=w' + 'orldMat*a_' + 'Normal;\x20\x0a\x09' + '\x09v_Texcoor' + 'd0\x20=\x20a_Tex' + 'coord0;\x20\x0a\x09' + '\x09gl_Positi' + 'on=remapGL' + 'PositionZ(' + 'gl_Positio' + 'n);\x20\x0a\x09}\x0a\x09', '\x0a\x09#ifdef\x20F' + 'SHIGHPRECI' + 'SION\x20\x0a\x09pre' + 'cision\x20hig' + 'hp\x20float;\x0a' + '\x09#else\x0a\x09pr' + 'ecision\x20me' + 'diump\x20floa' + 't;\x0a\x09#endif' + '\x0a\x09varying\x20' + 'vec2\x20v_Tex' + 'coord0;\x0a\x09v' + 'arying\x20vec' + '3\x20v_Normal' + ';\x0a\x09uniform' + '\x20sampler2D' + '\x20u_AlbedoT' + 'exture;\x0a\x09v' + 'oid\x20main()' + '\x0a\x09{\x0a\x09\x09vec4' + '\x20albedoTex' + 'tureColor\x20' + '=\x20vec4(1.0' + ');\x0a\x09\x09albed' + 'oTextureCo' + 'lor\x20=\x20text' + 'ure2D(u_Al' + 'bedoTextur' + 'e,\x20v_Texco' + 'ord0);\x0a\x09\x09g' + 'l_FragColo' + 'r=albedoTe' + 'xtureColor' + ';\x0a\x09}\x0a\x09');
        }
    }();
}();