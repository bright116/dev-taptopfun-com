!function () {
    'use strict';
    var _0x524f1e, _0x12caaf = Laya['ClassUtils']['regClass'];
    !function (_0x3a5ac6) {
        !function (_0x3f6b18) {
            class _0x208dcc extends Laya['Scene'] {
                constructor() {
                    super();
                }
                ['createChildren']() {
                    super['createChildren'](), this['loadScene']('MainScene/Main');
                }
            }
            _0x3f6b18['MainUI'] = _0x208dcc, _0x12caaf('ui.MainScene.MainUI', _0x208dcc);
        }(_0x3a5ac6['MainScene'] || (_0x3a5ac6['MainScene'] = {}));
    }(_0x524f1e || (_0x524f1e = {}));
    class _0x1f2936 {
        static ['getInstance']() {
            return this['Instance'] || (this['Instance'] = new _0x1f2936()), this['Instance'];
        }
        static ['init']() {
        }
        static ['playMusic'](..._0x39f002) {
            Laya['SoundManager']['playSound'](_0x39f002[0x0], 0x0);
        }
        static ['playSound'](..._0x5a2f58) {
            _0x1f2936['is_StopSund'] || Laya['SoundManager']['playSound'](_0x5a2f58[0x0], _0x5a2f58[0x1] && _0x5a2f58[0x1] || 0x1);
        }
        static ['stopSound'](_0x3bdefe) {
            Laya['SoundManager']['stopSound'](_0x3bdefe);
        }
        static ['StopMusic']() {
            Laya['SoundManager']['stopMusic']();
        }
        static ['SetSound'](_0x515e6b) {
            _0x1f2936['is_StopSund'] = _0x515e6b;
        }
        static ['setVolume'](_0x3e737b) {
            Laya['SoundManager']['setMusicVolume'](_0x3e737b);
        }
    }
    _0x1f2936['is_StopSund'] = !0x1;
    class _0x1a3086 {
    }
    _0x1a3086['LOCAL_KEY'] = { 'USERINFO': 'yibitongche' }, _0x1a3086['CHAPINGLEVEL'] = 0x6, _0x1a3086['CHAPINGPINLV'] = 0x3, _0x1a3086['BANNERNEILIANLEVEL'] = 0x2, _0x1a3086['BANERNEILIANPINLV'] = 0x1, _0x1a3086['SCENEURL'] = 'res/scene/LayaScene_UseScene/Conventional/UseScene.lh', _0x1a3086['CARDRIVINGSOUND'] = 'res/audio/run.mp3', _0x1a3086['COINSOUND'] = 'res/audio/coin.mp3', _0x1a3086['ENGUISOUND'] = 'res/audio/end.mp3', _0x1a3086['BTNSOUND'] = 'res/audio/btn.mp3', _0x1a3086['ROATEROADSOUND'] = 'res/audio/build.mp3', _0x1a3086['FALLSOUND'] = 'res/audio/fall.mp3', _0x1a3086['ARRIVESOUND'] = 'res/audio/arrive.mp3', _0x1a3086['MERGSOUND'] = 'res/audio/merg.mp3', _0x1a3086['ALLROADNUMBER'] = 0x0, _0x1a3086['ISONUI'] = !0x1, _0x1a3086['ISSKINUI'] = !0x1, _0x1a3086['ISSHAREUI'] = !0x1, _0x1a3086['RECORD_NUM'] = 0x0, _0x1a3086['CENTER_POINT'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x1a3086['ISMERGE'] = !0x1, _0x1a3086['ISCANDRIVE'] = !0x1, _0x1a3086['ISARIVETARGET'] = !0x1, _0x1a3086['LUPING'] = !0x1, _0x1a3086['TIPIDONE'] = !0x1, _0x1a3086['RECONRD_AD_TIMES'] = 0x0, _0x1a3086['TIPNUMBER'] = 0xa, _0x1a3086['COINLIST'] = [
        0x0,
        0x0,
        0x1,
        0x1
    ], _0x1a3086['ISCHEESTCLICK'] = !0x1, _0x1a3086['CHESTARRIVED'] = !0x1, _0x1a3086['BACKTIME'] = 0x0, _0x1a3086['ISCALCULATEBACKTIME'] = !0x0, _0x1a3086['STEPCOUNT'] = 0x0, _0x1a3086['STAYTHISLEVEL_NUM'] = 0x0, _0x1a3086['STAYTHISROAD_NUM'] = 0x0, _0x1a3086['CHANGECOLORNUM'] = 0x5, _0x1a3086['SCENENUM'] = 0x15, _0x1a3086['TIMEROADLOAD'] = 0x258, _0x1a3086['ISREST'] = !0x1, _0x1a3086['ISLOADALL'] = !0x1, _0x1a3086['READY'] = !0x1, _0x1a3086['ISSTARTDONE'] = !0x1, _0x1a3086['IS_SHOW_UNLOCKUI'] = !0x1, _0x1a3086['TEST'] = '6', _0x1a3086['LOADVIDEOTEXT'] = 'No\x20Ads', _0x1a3086['CANGETREDBAG'] = !0x1, _0x1a3086['NEILIANURL'] = 'perfab/neilian.prefab';
    class _0x4aeee2 {
        static ['load'](..._0x476248) {
            let _0x38fb11 = _0x476248[0x0], _0x5b4957 = _0x476248[0x1], _0x1bcc7c = _0x476248[0x2], _0x36f9b1 = _0x476248[0x3], _0x13a2d3 = _0x476248[0x4];
            Laya['loader']['create']('perfab/' + _0x38fb11 + '.prefab', Laya['Handler']['create'](this, function (_0x175828) {
                if (_0x175828) {
                    let _0x117f2c = _0x175828['create']();
                    _0x117f2c['pos'](_0x1bcc7c['x'], _0x1bcc7c['y']), _0x5b4957['addChild'](_0x117f2c), _0x13a2d3 && _0x13a2d3['call'](_0x36f9b1, _0x117f2c);
                }
            }));
        }
        static ['loadEffect'](..._0x255ab1) {
            let _0x41ab9e = _0x255ab1[0x0], _0x150931 = _0x255ab1[0x1], _0x18c194 = _0x255ab1[0x2], _0x520f92 = _0x255ab1[0x3], _0x3b663d = _0x255ab1[0x4];
            Laya['loader']['load'](_0x41ab9e + '.part', Laya['Handler']['create'](this, function (_0x93a6b3) {
                let _0x21173b = new Laya['Particle2D'](_0x93a6b3);
                _0x21173b['emitter']['start'](), _0x21173b['play'](), _0x21173b['pos'](_0x18c194['x'], _0x18c194['y']), _0x150931['addChild'](_0x21173b), _0x3b663d && _0x3b663d['call'](_0x520f92, _0x21173b);
            }), null, Laya['Loader']['JSON']);
        }
    }
    var _0x16970d = Laya['Vector2'], _0xfff175 = Laya['Tween'];
    class _0x41fc2f extends Laya['Script'] {
        constructor() {
            super(), this['addTimer']();
        }
        ['update']() {
        }
        ['_show']() {
            this['ui']['visible'] = !0x0;
        }
        ['_hide']() {
            this['ui']['visible'] = !0x1;
        }
        ['addTimer']() {
            Laya['timer']['loop'](0xa, this, function () {
                this['ui'] && this['ui']['visible'] && this['update']();
            });
        }
        ['_setFather'](_0x2ac5e4) {
            _0x2ac5e4['x'] = Laya['stage']['width'] / 0x2, _0x2ac5e4['y'] = Laya['stage']['height'] / 0x2;
        }
        ['_setSth'](_0x258def, _0x2b5567, _0x5b2387) {
        }
        ['_setSthDistaceDown'](_0x44369c, _0x8cb761) {
            let _0x3607c8 = (0x470 - _0x8cb761) / 0x470;
            _0x44369c['y'] = Laya['stage']['height'] - Laya['stage']['height'] * _0x3607c8;
        }
        ['playBtnEffect'](_0x266ef9, _0x375bf7) {
            _0x266ef9 ? 0x1 == _0x266ef9['scaleX'] && (_0x266ef9['scaleX'] = 0x1, _0x266ef9['scaleY'] = 0x1, Laya['Tween']['to'](_0x266ef9, {
                'scaleX': 0.7,
                'scaleY': 0.7
            }, 0x50, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x266ef9, {
                    'scaleX': 1.1,
                    'scaleY': 1.1
                }, 0x3c, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0x266ef9, {
                        'scaleX': 0x1,
                        'scaleY': 0x1
                    }, 0x28), _0x375bf7();
                }));
            }))) : console['error']('按钮名字没有传对！');
        }
        ['mouseDownEffect'](_0x323207) {
            Laya['Tween']['to'](_0x323207, {
                'scaleX': 0.9,
                'scaleY': 0.9
            }, 0x12c, null);
        }
        ['playBtnEffect2'](_0x5ccbf4, _0x571aec, _0x3d922c) {
            _0x5ccbf4 ? (_0x5ccbf4['scaleX'] = 0x1, _0x5ccbf4['scaleY'] = 0x1, Laya['Tween']['to'](_0x5ccbf4, {
                'scaleX': 0x1,
                'scaleY': 0x1
            }, 0x64, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x5ccbf4, {
                    'scaleX': 0.9,
                    'scaleY': 0.9
                }, 0x50, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0x5ccbf4, {
                        'scaleX': 0x1,
                        'scaleY': 0x1
                    }, 0x3c, null, Laya['Handler']['create'](this, function () {
                        Laya['Tween']['to'](_0x5ccbf4, {
                            'scaleX': 0.95,
                            'scaleY': 0.95
                        }, 0x46, null, Laya['Handler']['create'](this, function () {
                            Laya['Tween']['to'](_0x5ccbf4, {
                                'scaleX': 0x1,
                                'scaleY': 0x1
                            }, 0x32, null);
                        }));
                    }));
                })), _0x3d922c && _0x3d922c['call'](_0x571aec);
            }))) : console['error']('按钮名字没有传对！');
        }
        ['playUIEffect'](_0x372656, _0x20023a) {
            _0x372656 || console['error']('检查所传界面的名称'), _0x372656['scaleX'] = 0.6, _0x372656['scaleY'] = 0.6, _0x372656['alpha'] = 0x0, Laya['Tween']['to'](_0x372656, {
                'scaleX': 1.2,
                'scaleY': 1.2,
                'alpha': 0x1
            }, 0x78, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x372656, {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x8c, null, Laya['Handler']['create'](this, function () {
                    _0x20023a();
                }));
            }));
        }
        ['playUIEffect2'](_0x295b32, _0x110bcc) {
            _0x295b32 || console['error']('检查所传界面的名称'), _0x295b32['scaleX'] = 0.6, _0x295b32['scaleY'] = 0.6, _0x295b32['pos'](Laya['stage']['width'] / 0x2, Laya['stage']['height'] / 0x2), Laya['Tween']['to'](_0x295b32, {
                'scaleX': 1.2,
                'scaleY': 1.2
            }, 0x78, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x295b32, {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x8c, null, Laya['Handler']['create'](this, function () {
                    _0x110bcc();
                }));
            }));
        }
        ['playUIEffect3'](_0x2ce287, _0x3ae72d) {
            _0x2ce287 || console['error']('检查所传界面的名称'), Laya['Tween']['to'](_0x2ce287, {
                'scaleX': 1.2,
                'scaleY': 1.2
            }, 0x78, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x2ce287, {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x8c, null, Laya['Handler']['create'](this, function () {
                    _0x3ae72d();
                }));
            }));
        }
        ['playUIEffectUpIn'](_0x51b387, _0x20ea3c) {
            _0x51b387 || console['error']('检查所传界面的名称'), _0x51b387['alpha'] = 0x0;
            let _0x328b4f = _0x51b387['y'], _0x1247e3 = _0x51b387['y'] - 0x1f4, _0x1c41ed = _0x51b387['y'] + 0x64;
            _0x51b387['pos'](_0x51b387['x'], _0x1247e3), Laya['Tween']['to'](_0x51b387, {
                'y': _0x1c41ed,
                'alpha': 0x1
            }, 0xa0, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x51b387, {
                    'y': _0x328b4f,
                    'alpha': 0x1
                }, 0x8c, null, Laya['Handler']['create'](this, function () {
                    _0x20ea3c();
                }));
            }));
        }
        ['playButtonShowEffect'](_0x25146d, _0x4333d6, _0x5afcbd) {
            _0x25146d['visible'] = !0x0, _0x25146d['scaleX'] = 0x0, _0x25146d['scaleY'] = 0x0, _0x25146d['alpha'] = 0x0, Laya['Tween']['to'](_0x25146d, {
                'scaleX': 1.3,
                'scaleY': 1.3,
                'alpha': 0x1
            }, 0x78, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x25146d, {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x8c, null), _0x5afcbd && _0x5afcbd();
            }));
        }
        ['playUIHideEffect'](_0x4edeba, _0x4ba88a, _0x5d0721) {
            _0x4edeba || console['error']('检查所传界面的名称'), _0x4edeba['y'];
            let _0x29f64d = _0x4edeba['y'] - 0x78, _0x47bf2f = _0x4edeba['alpha'];
            Laya['Tween']['to'](_0x4edeba, {
                'y': _0x29f64d,
                'alpha': 0x0
            }, _0x4ba88a, null, Laya['Handler']['create'](this, function () {
                _0x5d0721 && _0x5d0721(), _0x4edeba['alpha'] = _0x47bf2f;
            }));
        }
        ['playUIEffeftChangeLong'](_0x1a2cbc, _0x352303) {
            _0x1a2cbc || console['error']('播放自定义动画“playUIEffeftChangeLong”出错，检查所传界面的名称'), _0x1a2cbc['scaleX'] = 0x0, _0x1a2cbc['scaleY'] = 0x1, Laya['Tween']['to'](_0x1a2cbc, { 'scaleX': 0x1 }, 0x78, null, Laya['Handler']['create'](this, function () {
                _0x352303 && _0x352303();
            }));
        }
        ['resetBg'](_0x519ae) {
            _0x519ae['width'] = Laya['stage']['width'], _0x519ae['height'] = Laya['stage']['height'];
        }
        ['fromAToB'](_0x272f06, _0x19d4b6, _0xf64bc4, _0x192bfb, _0x44ff89, _0x5045ae, _0x17441f) {
            _0x272f06['x'] = _0x19d4b6, _0x272f06['y'] = _0xf64bc4, Laya['Tween']['to'](_0x272f06, {
                'x': _0x192bfb,
                'y': _0x44ff89,
                'alpha': 0x1
            }, _0x5045ae, null, Laya['Handler']['create'](this, function () {
                _0x17441f();
            }));
        }
        ['showCoinsAndFly'](_0x579bd8, _0x33fb1b, _0x5f0495, _0x16c831, _0x2484d0, _0x29a466, _0xd2e4cb, _0x249a22) {
            for (let _0x4524b1 = 0x0; _0x4524b1 < _0x33fb1b; _0x4524b1++) {
                let _0x40f979 = {
                    'x': _0x2484d0['x'] + 0x2 * Math['random']() * _0x5f0495 - _0x5f0495,
                    'y': _0x2484d0['y'] + 0x2 * Math['random']() * _0x5f0495 - _0x5f0495
                };
                _0x4aeee2['load']('coin', _0x579bd8, _0x2484d0, this, function (_0x4f65a4) {
                    let _0x57854d = new _0x16970d(_0x40f979['x'] - _0x29a466['x'], _0x40f979['y'] - _0x29a466['y']), _0x292de5 = new _0x16970d(0x0, 0x0);
                    _0x16970d['normalize'](_0x57854d, _0x292de5), _0x292de5['x'] *= 0x14 * Math['random']() + 0x32, _0x292de5['y'] *= 0x14 * Math['random']() + 0x32;
                    let _0x41c178 = _0x40f979['x'] + _0x292de5['x'], _0x474169 = _0x40f979['y'] + _0x292de5['y'];
                    Math['random'](), (_0x4f65a4['alpha'] = 0x0, _0xfff175['to'](_0x4f65a4, { 'alpha': 0x1 }, 0x14 * _0x4524b1, null, Laya['Handler']['create'](this, function () {
                        _0xfff175['to'](_0x4f65a4, {
                            'x': _0x41c178,
                            'y': _0x474169
                        }, 0x28 + 0x28 * _0x4524b1, null, Laya['Handler']['create'](this, function () {
                            _0xfff175['to'](_0x4f65a4, {
                                'x': _0x29a466['x'],
                                'y': _0x29a466['y']
                            }, _0xd2e4cb + 0x1e * _0x4524b1, null, Laya['Handler']['create'](this, function () {
                                _0x1f2936['playSound']('res/audio/coin.mp3', 0x1), _0xfff175['clearAll'](_0x4f65a4), _0x4f65a4['removeSelf'](), _0x249a22 && _0x249a22();
                            }));
                        }));
                    })));
                });
            }
        }
        ['playBtnSound']() {
            _0x1f2936['playSound'](_0x1a3086['BTNSOUND'], 0x1);
        }
        ['showWarn'](_0xc61a6, _0x106166, _0x19a0e0) {
            _0x4aeee2['load']('warn', _0x19a0e0, {
                'x': Laya['stage']['width'] / 0x2,
                'y': Laya['stage']['height'] / 0x2
            }, this, function (_0x3ac762) {
                let _0x3af8e8, _0x399b52 = _0x3ac762['getChildByName']('state1'), _0x4252ce = _0x3ac762['getChildByName']('state2');
                0x1 == _0xc61a6 ? (_0x3af8e8 = _0x399b52, _0x399b52['visible'] = !0x0, _0x4252ce['visible'] = !0x1, _0x399b52['getChildByName']('txt')['text'] = _0x106166) : (_0x3af8e8 = _0x4252ce, _0x399b52['visible'] = !0x1, _0x4252ce['visible'] = !0x0, _0x4252ce['getChildByName']('txt')['text'] = _0x106166), this['playButtonShowEffect'](_0x3ac762, this, function () {
                    let _0x2f86b6 = _0x3ac762['y'] - 0xc8;
                    Laya['Tween']['to'](_0x3ac762, {
                        'y': _0x2f86b6,
                        'alpha': 0x0
                    }, 0x708, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                        _0x3ac762 && (_0x3ac762['visible'] = !0x1, Laya['Tween']['clearAll'](_0x3ac762), _0x3ac762['removeSelf']());
                    }));
                });
            });
        }
        ['showSliding_y'](_0x5a2322, _0xffc14d, _0x40cbc3, _0x14311a) {
            let _0x1817bb = Laya['stage']['height'] + _0x5a2322, _0x195c9e = Laya['stage']['height'] - _0xffc14d, _0x4779ce = Laya['stage']['height'] - _0x40cbc3, _0x259911 = _0x14311a['y'];
            _0x14311a['alpha'] = 0x1, _0x14311a['y'] = _0x1817bb, Laya['Tween']['to'](_0x14311a, { 'y': _0x195c9e }, 0x78, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x14311a, { 'y': _0x4779ce }, 0x50, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0x14311a, { 'y': _0x259911 }, 0x28, null);
                }));
            }));
        }
        ['closeSliding_y'](_0x41899c, _0x14f13a) {
            let _0x3adafd = _0x14f13a['y'], _0x23a05a = Laya['stage']['height'] + _0x41899c;
            Laya['Tween']['to'](_0x14f13a, { 'y': _0x23a05a }, 0x78, null, Laya['Handler']['create'](this, function () {
                _0x14f13a['y'] = _0x3adafd, _0x14f13a['alpha'] = 0x0;
            }));
        }
        ['showSliding_x'](_0xaccde0, _0x4dbe21, _0x15e179, _0x3a12fe) {
            let _0x1f511d = Laya['stage']['width'] + _0xaccde0, _0xefb2bf = Laya['stage']['width'] - _0x4dbe21, _0x910669 = Laya['stage']['width'] - _0x15e179, _0x4141ea = _0x3a12fe['x'];
            _0x3a12fe['alpha'] = 0x1, _0x3a12fe['x'] = _0x1f511d, Laya['Tween']['to'](_0x3a12fe, { 'x': _0xefb2bf }, 0x78, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x3a12fe, { 'x': _0x910669 }, 0x50, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0x3a12fe, { 'x': _0x4141ea }, 0x28, null);
                }));
            }));
        }
        ['closeSliding_x'](_0x5d40df, _0x3faaf6) {
            let _0xbe9846 = _0x3faaf6['x'], _0x20b27d = Laya['stage']['width'] + _0x5d40df;
            Laya['Tween']['to'](_0x3faaf6, { 'x': _0x20b27d }, 0x78, null, Laya['Handler']['create'](this, function () {
                _0x3faaf6['alpha'] = 0x0, _0x3faaf6['x'] = _0xbe9846;
            }));
        }
        ['showSliding_x2'](_0x45c634, _0x38de3d, _0xe3fc41, _0x4b1e67) {
            let _0x197da7 = 0x0 - _0x45c634, _0x5b6ddb = 0x0 + _0x38de3d, _0x208c43 = 0x0 + _0xe3fc41, _0x5cf7c7 = _0x4b1e67['x'];
            _0x4b1e67['x'] = _0x197da7, _0x4b1e67['alpha'] = 0x1, Laya['Tween']['to'](_0x4b1e67, { 'x': _0x5b6ddb }, 0x78, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x4b1e67, { 'x': _0x208c43 }, 0x50, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0x4b1e67, { 'x': _0x5cf7c7 }, 0x28, null);
                }));
            }));
        }
        ['closeSliding_x2'](_0x11c63d, _0x442d81) {
            let _0x3ce6d0 = _0x442d81['x'], _0x1e787f = 0x0 - _0x11c63d;
            Laya['Tween']['to'](_0x442d81, { 'x': _0x1e787f }, 0x78, null, Laya['Handler']['create'](this, function () {
                _0x442d81['alpha'] = 0x0, _0x442d81['x'] = _0x3ce6d0;
            }));
        }
    }
    class _0x142a9a {
        static ['GetInstance']() {
            return this['Instance'] || (this['Instance'] = new _0x142a9a()), this['Instance'];
        }
        ['load'](_0x18fd97, _0x54d615) {
            let _0x4533b6;
            Laya['loader']['create'](_0x18fd97, Laya['Handler']['create'](this, function () {
                _0x4533b6 = Laya['loader']['getRes'](_0x18fd97), _0x54d615(_0x4533b6);
            }));
        }
        static ['load2D'](..._0x1fe082) {
            let _0x15e3e6 = _0x1fe082[0x0], _0x2a362e = _0x1fe082[0x1], _0x24cd2b = _0x1fe082[0x2], _0x4b9144 = _0x1fe082[0x3], _0x42fff2 = _0x1fe082[0x4];
            Laya['loader']['create']('perfab/' + _0x15e3e6 + '.prefab', Laya['Handler']['create'](this, function (_0x69533c) {
                let _0x5e5e26 = _0x69533c['create']();
                _0x24cd2b && _0x5e5e26['pos'](_0x24cd2b['x'], _0x24cd2b['y']), _0x2a362e['addChild'](_0x5e5e26), _0x42fff2 && _0x42fff2['call'](_0x4b9144, _0x5e5e26);
            }));
        }
    }
    class _0x510c79 extends Laya['Script3D'] {
        constructor() {
            super(), this['cam'] = null, this['scene_all'] = _0x4280be['GetInstance']()['getScene_all']();
        }
        ['onAwake']() {
            this['centerPos'] = this['scene_all']['centerPos'], this['cam'] = this['owner'], this['diff_x'] = this['centerPos']['x'] - this['cam']['transform']['position']['x'], this['diff_y'] = this['centerPos']['y'] - this['cam']['transform']['position']['y'], this['diff_z'] = this['centerPos']['z'] - this['cam']['transform']['position']['z'];
        }
        ['Follow'](_0x263a8f, _0xbaf66, _0x871591) {
            let _0x368394 = 0x0, _0x3298d9 = 0x0;
            (_0xbaf66 > 0x4 || _0x871591 > 0x4) && (_0x368394 = -0xa, _0x3298d9 = 0xa), 0x6 != _0x871591 && 0x6 != _0x871591 || (_0x368394 = -0x5a, _0x3298d9 = 0xf), 0x7 != _0x871591 && 0x7 != _0x871591 || (_0x368394 = -0x5a, _0x3298d9 = 0xf), this['cam']['transform']['position'] = new Laya['Vector3'](_0x263a8f['x'] - this['diff_x'], _0x263a8f['y'] - (this['diff_y'] + _0x368394), _0x263a8f['z'] - (this['diff_z'] + _0x3298d9));
        }
    }
    class _0x1afc49 {
        constructor(..._0x143460) {
            let _0x171dfb;
            this['direc'] = '', this['isMerge'] = !0x1, this['roateDone'] = !0x0, this['isChanged'] = !0x1, this['num'] = 0x1, this['h_v'] = [], this['record_road'] = [], this['record_num'] = -0x1, this['isPush'] = !0x1, this['isStart'] = !0x1, this['rote_time'] = 0x96, this['shake'] = !0x1, this['isEndPoint'] = !0x1, this['isReplace'] = !0x1, this['isPoint'] = !0x1, this['userInfo'] = _0x161787['getInstance']()['getUserInfo'](), this['levelCfg'] = _0x161787['getInstance']()['getLevelCfg'](), this['scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['environmentcfg'] = _0x161787['getInstance']()['get_environmentcfg'](), this['camera'] = this['scene_all']['camera'], this['exampleRoad'] = _0x143460[0x0], this['index'] = _0x143460[0x1], this['pos'] = _0x143460[0x2], this['roa'] = _0x143460[0x3], this['scene_3d'] = _0x143460[0x4], this['h'] = _0x143460[0x6], this['v'] = _0x143460[0x7], this['exampleRoad1'] = _0x143460[0x8], this['delytime'] = _0x143460[0x9], this['active_num'] = _0x143460[0xa], _0x171dfb = this['userInfo']['encironment'], this['environmentcfg'][_0x171dfb] && (this['beforeColor'] = this['environmentcfg'][_0x171dfb]['road']['color1'], this['afterColor'] = this['environmentcfg'][_0x171dfb]['road']['color2']), (this['index'] + 0x1) % this['v'] == 0x0 ? this['h_point'] = (this['index'] + 0x1) / this['v'] : this['h_point'] = Math['floor']((this['index'] + 0x1) / this['v'] + 0x1), (this['index'] + 0x1) % this['v'] == 0x0 ? this['v_point'] = this['v'] : this['v_point'] = (this['index'] + 0x1) % this['v'], this['road'] = Laya['Sprite3D']['instantiate'](this['exampleRoad'], this['scene_3d'], !0x1, new Laya['Vector3'](this['pos']['x'], 0x1f4, this['pos']['z'])), this['road1'] = Laya['Sprite3D']['instantiate'](this['exampleRoad1'], this['scene_3d'], !0x1, new Laya['Vector3'](this['pos']['x'], 0x0, this['pos']['z'])), this['road2d'] = this['road']['getChildByName']('road2D'), this['road12d'] = this['road1']['getChildByName']('road2D'), this['qizi'] = this['road']['getChildByName']('qizi'), this['qizi']['active'] = !0x1, this['road2d']['transform']['localPositionY'] = 0.3, this['road12d']['transform']['localPositionY'] = 0.3, this['road1']['active'] = !0x1, this['road'] && this['road']['transform'] && (this['road']['transform']['localRotationEulerY'] = 0x0), this['road1'] && this['road1']['transform'] && (this['road1']['transform']['localRotationEulerY'] = 0x0), this['ring'] = this['road']['getChildByName']('ring'), this['ring']['active'] = !0x1, this['ring1'] = this['road1']['getChildByName']('ring'), this['ring1']['active'] = !0x1, this['light'] = this['road']['getChildByName']('light'), this['light']['active'] = !0x0, this['light_efect'] = this['light']['getChildByName']('lightning'), this['light_efect']['active'] = !0x1, this['build_efect'] = this['road']['getChildByName']('build'), this['build_efect']['active'] = !0x1, this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['setColorInit'](), 0x0 == this['levelCfg'][this['userInfo']['chooseLevel']]['set'][this['index']] ? this['road']['active'] = !0x0 : this['road']['active'] = !0x1, this['delytime'] || (this['delytime'] = 0x32), 0x1 == this['userInfo']['level'] && _0x2443ee['getInstance']()['loadLead'](), this['timerList'] = [], this['h_point'] == this['levelCfg'][this['userInfo']['chooseLevel']]['start_h'] && this['v_point'] == this['levelCfg'][this['userInfo']['chooseLevel']]['start_v'] && (this['isStart'] = !0x0), this['timerList'][0x0] = setTimeout(() => {
                if (Laya['Tween']['to'](this['road']['transform'], { 'localPositionY': this['pos']['y'] }, _0x1a3086['TIMEROADLOAD'], Laya['Ease']['quintOut'], Laya['Handler']['create'](this, function () {
                        _0x1f2936['playSound'](_0x1a3086['FALLSOUND'], 0x1);
                    })), this['index'] == this['h'] * this['v'] - 0x1 && (_0x4280be['GetInstance']()['showAirBalloon'](), _0x4280be['GetInstance']()['setcar'](), _0x1a3086['ISLOADALL'] = !0x0), this['isStart']) {
                    let _0x359c43 = this;
                    this['timerList'][0x1] = setTimeout(() => {
                        if (this['road']['transform']) {
                            if (_0x1a3086['ISSKINUI'] || _0x1a3086['ISSTARTDONE'])
                                return;
                            Laya['loader']['load']('perfab/startImage.json', Laya['Handler']['create'](this, function (_0x45c39e) {
                                let _0x219c6e = new Laya['Prefab']();
                                _0x219c6e['json'] = _0x45c39e, _0x359c43['slidingImage'] = Laya['Pool']['getItemByCreateFun']('sliding', _0x219c6e['create'], _0x219c6e);
                                let _0x454363 = new Laya['Vector3']();
                                this['road']['transform'] && _0x359c43['camera']['viewport']['project'](new Laya['Vector3'](_0x359c43['road']['transform']['position']['x'], 0x0, _0x359c43['road']['transform']['position']['z']), _0x359c43['camera']['projectionViewMatrix'], _0x454363), _0x359c43['slidingImage']['pos'](_0x454363['x'] / Laya['stage']['clientScaleX'], _0x454363['y'] / Laya['stage']['clientScaleY']), _0x2443ee['getInstance']()['getParent']()['addChild'](_0x359c43['slidingImage']);
                            }));
                        }
                    }, 0x5dc);
                }
            }, this['delytime']), this['road']['name'] = 'road_' + this['index']['toString'](), this['road1']['name'] = 'road1_' + this['index']['toString'](), this['name'] = 'road_' + this['index']['toString'](), this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['record_roa_y'] = this['road']['transform']['localRotationEulerY'];
            let _0x472efc = this['road']['addComponent'](Laya['PhysicsCollider']), _0x2820bf = new Laya['MeshColliderShape']();
            _0x2820bf['mesh'] = this['road']['meshFilter']['sharedMesh'], _0x472efc['colliderShape'] = _0x2820bf, this['h_v'] = [
                this['h_point'],
                this['v_point']
            ], this['record_road'] = [
                this['h_point'],
                this['v_point']
            ], this['getSeparate'](), this['getTar'](), this['isChanged'] = !0x1, this['environmentcfg'][_0x171dfb] && (Laya['loader']['load'](this['environmentcfg'][_0x171dfb]['road']['road_normal'], Laya['Handler']['create'](this, function (_0x68f2ee) {
                this['roadN'] = _0x68f2ee, this['road2d'] && this['road2d']['meshRenderer'] && (this['road2d']['meshRenderer']['materials'][0x0]['albedoTexture'] = this['roadN']);
            })), Laya['loader']['load'](this['environmentcfg'][_0x171dfb]['road']['road_choose'], Laya['Handler']['create'](this, function (_0xc5ee98) {
                this['roadC'] = _0xc5ee98;
            })), Laya['loader']['load'](this['environmentcfg'][_0x171dfb]['road']['road1_choose'], Laya['Handler']['create'](this, function (_0x4293d3) {
                this['road1C'] = _0x4293d3, this['road2d'] && this['road2d']['meshRenderer'] && (this['road12d']['meshRenderer']['materials'][0x0]['albedoTexture'] = this['road1C']);
            })));
        }
        ['setColorInit']() {
            this['road'] && this['road']['meshRenderer'] && (this['road']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x0][0x0] / 0xff, this['beforeColor'][0x0][0x1] / 0xff, this['beforeColor'][0x0][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x1]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x1][0x0] / 0xff, this['beforeColor'][0x1][0x1] / 0xff, this['beforeColor'][0x1][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x2]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x2][0x0] / 0xff, this['beforeColor'][0x2][0x1] / 0xff, this['beforeColor'][0x2][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x3]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x3][0x0] / 0xff, this['beforeColor'][0x3][0x1] / 0xff, this['beforeColor'][0x3][0x2] / 0xff, 0x1)), this['road1'] && this['road1']['meshRenderer'] && (this['road1']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x1][0x0] / 0xff, this['beforeColor'][0x1][0x1] / 0xff, this['beforeColor'][0x1][0x2] / 0xff, 0x1), this['road1']['meshRenderer']['materials'][0x1]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x0][0x0] / 0xff, this['beforeColor'][0x0][0x1] / 0xff, this['beforeColor'][0x0][0x2] / 0xff, 0x1), this['road1']['meshRenderer']['materials'][0x2]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x2][0x0] / 0xff, this['beforeColor'][0x2][0x1] / 0xff, this['beforeColor'][0x2][0x2] / 0xff, 0x1), this['road1']['meshRenderer']['materials'][0x3]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x3][0x0] / 0xff, this['beforeColor'][0x3][0x1] / 0xff, this['beforeColor'][0x3][0x2] / 0xff, 0x1));
        }
        ['getSeparate']() {
            if (this['h'] % 0x2 == 0x0) {
                let _0xe2efeb = 0.5 * this['h'], _0x339c91 = 0.5 * this['h'] + 0x1;
                this['h_point'] == _0xe2efeb ? this['separate_z'] = this['road']['transform']['localPositionZ'] + 0x5 : this['h_point'] == _0x339c91 ? this['separate_z'] = this['road']['transform']['localPositionZ'] - 0x5 : this['h_point'] < _0xe2efeb ? this['separate_z'] = this['road']['transform']['localPositionZ'] + (0xa * (_0xe2efeb - this['h_point']) + 0x5) : this['h_point'] > _0x339c91 && (this['separate_z'] = this['road']['transform']['localPositionZ'] - (0xa * (this['h_point'] - _0x339c91) + 0x5));
            } else {
                let _0x4b05e1 = 0.5 * (this['h'] + 0x1);
                this['h_point'] == _0x4b05e1 ? this['separate_z'] = this['road']['transform']['localPositionZ'] : this['h_point'] < _0x4b05e1 ? this['separate_z'] = this['road']['transform']['localPositionZ'] + 0xa * (_0x4b05e1 - this['h_point']) : this['h_point'] > _0x4b05e1 && (this['separate_z'] = this['road']['transform']['localPositionZ'] - 0xa * (this['h_point'] - _0x4b05e1));
            }
            if (this['v'] % 0x2 == 0x0) {
                let _0x4589ac = 0.5 * this['v'], _0x867e45 = 0.5 * this['v'] + 0x1;
                this['v_point'] == _0x4589ac ? this['separate_x'] = this['road']['transform']['localPositionX'] + 0x5 : this['v_point'] == _0x867e45 ? this['separate_x'] = this['road']['transform']['localPositionX'] - 0x5 : this['v_point'] < _0x4589ac ? this['separate_x'] = this['road']['transform']['localPositionX'] + (0xa * (_0x4589ac - this['v_point']) + 0x5) : this['v_point'] > _0x867e45 && (this['separate_x'] = this['road']['transform']['localPositionX'] - (0xa * (this['v_point'] - _0x867e45) + 0x5));
            } else {
                let _0x2dd592 = 0.5 * (this['v'] + 0x1);
                this['v_point'] == _0x2dd592 ? this['separate_x'] = this['road']['transform']['localPositionX'] : this['v_point'] < _0x2dd592 ? this['separate_x'] = this['road']['transform']['localPositionX'] + 0xa * (_0x2dd592 - this['v_point']) : this['v_point'] > _0x2dd592 && (this['separate_x'] = this['road']['transform']['localPositionX'] - 0xa * (this['v_point'] - _0x2dd592));
            }
        }
        ['getTar']() {
            if (this['h'] % 0x2 == 0x0) {
                let _0x28d908 = 0.5 * this['h'], _0x56e4e2 = 0.5 * this['h'] + 0x1;
                this['h_point'] == _0x28d908 ? this['tar_z'] = this['road']['transform']['localPositionZ'] - 0x1 : this['h_point'] == _0x56e4e2 ? this['tar_z'] = this['road']['transform']['localPositionZ'] + 0x1 : this['h_point'] < _0x28d908 ? this['tar_z'] = this['road']['transform']['localPositionZ'] - (0x2 * (_0x28d908 - this['h_point']) + 0x1) : this['h_point'] > _0x56e4e2 && (this['tar_z'] = this['road']['transform']['localPositionZ'] + (0x2 * (this['h_point'] - _0x56e4e2) + 0x1));
            } else {
                let _0x5ab9ce = 0.5 * (this['h'] + 0x1);
                this['h_point'] == _0x5ab9ce ? this['tar_z'] = this['road']['transform']['localPositionZ'] : this['h_point'] < _0x5ab9ce ? this['tar_z'] = this['road']['transform']['localPositionZ'] - 0x2 * (_0x5ab9ce - this['h_point']) : this['h_point'] > _0x5ab9ce && (this['tar_z'] = this['road']['transform']['localPositionZ'] + 0x2 * (this['h_point'] - _0x5ab9ce));
            }
            if (this['v'] % 0x2 == 0x0) {
                let _0xc762bf = 0.5 * this['v'], _0x517a8c = 0.5 * this['v'] + 0x1;
                this['v_point'] == _0xc762bf ? this['tar_x'] = this['road']['transform']['localPositionX'] - 0x1 : this['v_point'] == _0x517a8c ? this['tar_x'] = this['road']['transform']['localPositionX'] + 0x1 : this['v_point'] < _0xc762bf ? this['tar_x'] = this['road']['transform']['localPositionX'] - (0x2 * (_0xc762bf - this['v_point']) + 0x1) : this['v_point'] > _0x517a8c && (this['tar_x'] = this['road']['transform']['localPositionX'] + (0x2 * (this['v_point'] - _0x517a8c) + 0x1));
            } else {
                let _0x363d25 = 0.5 * (this['v'] + 0x1);
                this['v_point'] == _0x363d25 ? this['tar_x'] = this['road']['transform']['localPositionX'] : this['v_point'] < _0x363d25 ? this['tar_x'] = this['road']['transform']['localPositionX'] - 0x2 * (_0x363d25 - this['v_point']) : this['v_point'] > _0x363d25 && (this['tar_x'] = this['road']['transform']['localPositionX'] + 0x2 * (this['v_point'] - _0x363d25));
            }
            return this['target_pos'] = new Laya['Vector3'](this['tar_x'], 0x0, this['tar_z']), this['target_pos'];
        }
        ['RoateRight']() {
            if ('right' != this['direc']) {
                if ('right' != this['direc']) {
                    let _0x2534c8;
                    (this['direc'] = 'right', Math['abs'](0x5a - this['road']['transform']['localRotationEulerY']) < 0x5 || Math['abs'](0x0 - this['road']['transform']['localRotationEulerY']) < 0x5 || Math['abs'](0xb4 - this['road']['transform']['localRotationEulerY']) < 0x5 || Math['abs'](this['road']['transform']['localRotationEulerY'] + 0xb4) < 0x5 || Math['abs'](this['road']['transform']['localRotationEulerY'] + 0x0) < 0x5 || Math['abs'](this['road']['transform']['localRotationEulerY'] + 0x5a) < 0x5 ? (_0x2534c8 = -0x5a, this['qizi']['transform']['localRotationEulerY'] = -0x5a) : _0x2534c8 = 0x0, this['roateDone'] = !0x1, Laya['Tween']['to'](this['road']['transform'], { 'localRotationEulerY': _0x2534c8 }, this['rote_time'], null, Laya['Handler']['create'](this, function () {
                        this['roateDone'] = !0x0, this['recordRoateY'] = this['road']['transform']['localRotationEulerY'], this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['ChangeColor']();
                    })), _0x1a3086['RECORD_NUM'] > 0x0) && _0x2443ee['getUI']('gameUI');
                }
                _0x1f2936['playSound'](_0x1a3086['ROATEROADSOUND'], 0x1);
            }
        }
        ['Roateleft'](_0xf1d021) {
            if ('left' != this['direc']) {
                if ('left' != this['direc']) {
                    let _0x232498, _0x4fdce3;
                    this['road']['transform'] && (_0x4fdce3 = Math['abs'](this['road']['transform']['localRotationEulerY'] + 0x5a) < 0x5 || Math['abs'](0xb4 - this['road']['transform']['localRotationEulerY']) < 0x5 || Math['abs'](this['road']['transform']['localRotationEulerY'] + 0xb4) < 0x5 || Math['abs'](this['road']['transform']['localRotationEulerY'] + 0x0) < 0x5 ? 0x0 : 0x5a, this['roateDone'] = !0x1, _0x232498 = 0x1 == _0xf1d021 ? 0xc8 : 0x1, Laya['Tween']['to'](this['road']['transform'], { 'localRotationEulerY': _0x4fdce3 }, _0x232498, null, Laya['Handler']['create'](this, function () {
                        this['roateDone'] = !0x0, this['recordRoateY'] = this['road']['transform']['localRotationEulerY'], this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['ChangeColor']();
                    }))), this['direc'] = 'left';
                }
                _0x1f2936['playSound'](_0x1a3086['ROATEROADSOUND'], 0x1);
            }
        }
        ['RoateDown']() {
            if ('down' != this['direc']) {
                if ('down' != this['direc']) {
                    let _0x3dc088;
                    (this['direc'] = 'down', this['road']['transform'] && (_0x3dc088 = Math['abs'](0xb4 - this['road']['transform']['localRotationEulerY']) < 0x5 || this['road']['transform']['localRotationEulerY'] > 0x64 ? 0x0 : 0xb4, this['roateDone'] = !0x1, Laya['Tween']['to'](this['road']['transform'], { 'localRotationEulerY': _0x3dc088 }, this['rote_time'], null, Laya['Handler']['create'](this, function () {
                        this['roateDone'] = !0x0, this['recordRoateY'] = this['road']['transform']['localRotationEulerY'], this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['ChangeColor']();
                    }))), _0x1a3086['RECORD_NUM'] > 0x0) && _0x2443ee['getUI']('gameUI');
                }
                _0x1f2936['playSound'](_0x1a3086['ROATEROADSOUND'], 0x1);
            }
        }
        ['RoateUp'](_0x45d266) {
            if ('up' != this['direc']) {
                if ('up' != this['direc']) {
                    let _0x4bf4dd, _0x40b229;
                    this['direc'] = 'up', this['road']['transform'] && (_0x40b229 = Math['abs'](0xb4 - this['road']['transform']['localRotationEulerY']) < 0x5 || this['road']['transform']['localRotationEulerY'] < 0x64 ? 0x0 : 0xb4, _0x4bf4dd = 0x1 == _0x45d266 ? 0xc8 : 0x1, this['roateDone'] = !0x1, Laya['Tween']['to'](this['road']['transform'], { 'localRotationEulerY': _0x40b229 }, _0x4bf4dd, null, Laya['Handler']['create'](this, function () {
                        this['roateDone'] = !0x0, this['recordRoateY'] = this['road']['transform']['localRotationEulerY'], this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['ChangeColor']();
                    })));
                }
                _0x1f2936['playSound'](_0x1a3086['ROATEROADSOUND'], 0x1);
            }
        }
        ['Merge']() {
            this['isMerge'] || (this['isMerge'] = !0x0, _0x1a3086['ISMERGE'] = !0x0, 0x0 == this['index'] && _0x1f2936['playSound'](_0x1a3086['MERGSOUND'], 0x1), this['road'] && (this['ring']['active'] = !0x0, Laya['Tween']['to'](this['ring']['transform'], {
                'localScaleX': 0x14,
                'localScaleY': 0x7b,
                'localScaleZ': 0x14
            }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['ring']['transform'], {
                    'localScaleX': 0x12,
                    'localScaleY': 0x7b,
                    'localScaleZ': 0x14
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                    this['ring']['active'] = !0x1;
                }));
            })), Laya['Tween']['to'](this['road']['transform'], {
                'localPositionX': this['separate_x'],
                'localPositionY': 0x0,
                'localPositionZ': this['separate_z']
            }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['road']['transform'], {
                    'localPositionX': this['tar_x'],
                    'localPositionY': 0x0,
                    'localPositionZ': this['tar_z']
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                    this['isEndPoint'] && (this['scene_all']['endPoint2D']['transform']['localPositionX'] = this['road']['transform']['localPositionX'], this['scene_all']['endPoint2D']['transform']['localPositionY'] = this['road']['transform']['localPositionY'] + 0.5, this['scene_all']['endPoint2D']['transform']['localPositionZ'] = this['road']['transform']['localPositionZ'], this['scene_all']['endPoint2D']['transform']['localRotationEulerX'] = 0x5a, Math['abs'](0xb4 - this['road']['transform']['localRotationEulerY']) <= 0xa || Math['abs'](0x0 - this['road']['transform']['localRotationEulerY']) <= 0xa || Math['abs'](-0xb4 - this['road']['transform']['localRotationEulerY']) <= 0xa ? this['scene_all']['endPoint2D']['transform']['localRotationEulerY'] = 0x0 : this['scene_all']['endPoint2D']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['scene_all']['endPoint2D']['active'] = !0x0, this['qizi']['active'] = !0x0, Laya['Tween']['to'](this['qizi']['transform'], { 'localRotationEulerX': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    }))), this['index'] == this['h'] * this['v'] - 0x1 && (_0x4280be['GetInstance']()['playMergeEffect'](), this['timerList'][0x2] = setTimeout(() => {
                        _0x1a3086['ISCANDRIVE'] = !0x0;
                    }, 0x1f4));
                }));
            })), this['isStart'] && _0x4280be['GetInstance']()['carChangePosFollowRoad'](this['separate_x'], 0x0, this['separate_z'], this['tar_x'], 0x0, this['tar_z']), this['index'] == _0x1a3086['CHEST_ID'] && _0x1a3086['CHESTARRIVED'] && _0x4280be['GetInstance']()['chestChangePosFollowRoad'](this['separate_x'], 0x0, this['separate_z'], this['tar_x'], 0x0, this['tar_z'])), _0x4280be['GetInstance']()['coinChangePosFollowRoad'](this['separate_x'], 0x0, this['separate_z'], this['tar_x'], 0x0, this['tar_z'], this['index']), this['ring1']['active'] = !0x0, Laya['Tween']['to'](this['ring1']['transform'], {
                'localScaleX': 0x14,
                'localScaleY': 0x7b,
                'localScaleZ': 0x14
            }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['ring1']['transform'], {
                    'localScaleX': 0x12,
                    'localScaleY': 0x7b,
                    'localScaleZ': 0x14
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                    this['ring1']['active'] = !0x1;
                }));
            })), this['light_efect']['active'] = !0x0, Laya['Tween']['to'](this['road1']['transform'], {
                'localPositionX': this['separate_x'],
                'localPositionY': 0x0,
                'localPositionZ': this['separate_z']
            }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['road1']['transform'], {
                    'localPositionX': this['tar_x'],
                    'localPositionY': 0x0,
                    'localPositionZ': this['tar_z']
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                    this['index'] == this['h'] * this['v'] - 0x1 && (_0x4280be['GetInstance']()['playMergeEffect'](), this['timerList'][0x3] = setTimeout(() => {
                        _0x1a3086['ISCANDRIVE'] = !0x0;
                    }, 0x1f4)), this['light_efect']['active'] = !0x1;
                }));
            })));
        }
        ['ChangeColor']() {
            this['isChanged'] ? this['isChanged'] && (this['shake'] = !0x1, this['timerList'][0x4] = setTimeout(() => {
                this['road']['transform']['localRotationEulerY'] = this['recordRoateY'];
            }, 0xc8), this['isChanged'] = !0x1, this['road'] && this['road']['meshRenderer'] && (this['road']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x0][0x0] / 0xff, this['beforeColor'][0x0][0x1] / 0xff, this['beforeColor'][0x0][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x1]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x1][0x0] / 0xff, this['beforeColor'][0x1][0x1] / 0xff, this['beforeColor'][0x1][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x2]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x2][0x0] / 0xff, this['beforeColor'][0x2][0x1] / 0xff, this['beforeColor'][0x2][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x3]['albedoColor'] = new Laya['Vector4'](this['beforeColor'][0x3][0x0] / 0xff, this['beforeColor'][0x3][0x1] / 0xff, this['beforeColor'][0x3][0x2] / 0xff, 0x1)), this['road2d'] && this['road2d']['meshRenderer'] && (this['road2d']['meshRenderer']['materials'][0x0]['albedoTexture'] = this['roadN']), this['build_efect']['active'] = !0x1) : (this['isChanged'] = !0x0, this['road'] && this['road']['meshRenderer'] && (this['road']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x0][0x0] / 0xff, this['afterColor'][0x0][0x1] / 0xff, this['afterColor'][0x0][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x1]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x1][0x0] / 0xff, this['afterColor'][0x1][0x1] / 0xff, this['afterColor'][0x1][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x2]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x2][0x0] / 0xff, this['afterColor'][0x2][0x1] / 0xff, this['afterColor'][0x2][0x2] / 0xff, 0x1), this['road']['meshRenderer']['materials'][0x3]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x3][0x0] / 0xff, this['afterColor'][0x3][0x1] / 0xff, this['afterColor'][0x3][0x2] / 0xff, 0x1)), this['road1'] && this['road1']['meshRenderer'] && (this['road1']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x1][0x0] / 0xff, this['afterColor'][0x1][0x1] / 0xff, this['afterColor'][0x1][0x2] / 0xff, 0x1), this['road1']['meshRenderer']['materials'][0x1]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x0][0x0] / 0xff, this['afterColor'][0x0][0x1] / 0xff, this['afterColor'][0x0][0x2] / 0xff, 0x1), this['road1']['meshRenderer']['materials'][0x2]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x2][0x0] / 0xff, this['afterColor'][0x2][0x1] / 0xff, this['afterColor'][0x2][0x2] / 0xff, 0x1), this['road1']['meshRenderer']['materials'][0x3]['albedoColor'] = new Laya['Vector4'](this['afterColor'][0x3][0x0] / 0xff, this['afterColor'][0x3][0x1] / 0xff, this['afterColor'][0x3][0x2] / 0xff, 0x1)), this['road2d'] && this['road2d']['meshRenderer'] && (this['road2d']['meshRenderer']['materials'][0x0]['albedoTexture'] = this['roadC']), this['build_efect']['active'] = !0x0, this['isStart'] || (this['shake'] = !0x0, this['shaking_R'](), this['recordRoateY'] = this['road']['transform']['localRotationEulerY']));
        }
        ['get_h_v'](_0x1a5af9) {
            if (!this['isPush'])
                return this['isPush'] = !0x0, this['record_num'] = _0x1a3086['RECORD_NUM'], this['road']['transform'] && (this['record_roa_y'] = this['road']['transform']['localRotationEulerY'], 0x1 == _0x1a5af9 ? this['RoateRight']() : this['RoateDown'](), _0x1a3086['STAYTHISROAD_NUM'] = 0x0), _0x1a3086['RECORD_NUM'] += 0x1, _0x1a3086['ALLROADNUMBER'] += 0x1, _0x1a3086['ALLROADNUMBER'] == this['active_num'] && (this['isEndPoint'] = !0x0), this['h_v'];
        }
        ['cancel_h_v']() {
            if (this['isPush'])
                return this['isPush'] = !0x1, this['light_efect']['active'] = !0x1, this['road1'] && (this['road1']['active'] = !0x1), this['road']['meshRenderer'] && (this['road']['meshRenderer']['enable'] = !0x0, this['road2d']['active'] = !0x0), this['record_num'] = _0x1a3086['RECORD_NUM'], this['isReplace'] = !0x1, this['road']['transform'] && ('down' == this['direc'] ? this['RoateUp'](0x1) : this['Roateleft'](0x1), _0x1a3086['STAYTHISROAD_NUM'] = 0x0), _0x1a3086['RECORD_NUM'] -= 0x1, _0x1a3086['ALLROADNUMBER'] -= 0x1, _0x1a3086['NOWNUM'] = 0x3, this['h_v'];
        }
        ['cancelTurn']() {
            this['isReplace'] && (this['roateDone'] = !0x1, this['isReplace'] = !0x1, this['road1']['active'] = !0x1, this['road']['meshRenderer']['enable'] = !0x0, this['road2d']['active'] = !0x0, this['roateDone'] = !0x0, _0x1a3086['STAYTHISROAD_NUM'] = 0x0, this['road1']['transform']['localRotationEulerY'] = this['recordRoateY_1']);
        }
        ['get_record_route']() {
            return this['record_road'];
        }
        ['cancel_record_route']() {
            return this['record_road'];
        }
        ['turn'](_0x238f94) {
            this['isReplace'] || _0x1a3086['ISCANDRIVE'] || (this['isReplace'] = !0x0, this['roateDone'] = !0x1, this['road']['meshRenderer'] && (this['road']['meshRenderer']['enable'] = !0x1, this['road2d']['active'] = !0x1), this['road1']['transform'] && (this['road1']['transform']['localRotationEulerY'] = _0x238f94, this['recordRoateY_1'] = this['road1']['transform']['localRotationEulerY'], this['road1']['active'] = !0x0, this['shaking_R1'](), this['roateDone'] = !0x0), _0x1a3086['STAYTHISROAD_NUM'] = 0x0);
        }
        ['getAfterMergePointAndCarRoate'](_0x38e726, _0x2ca834, _0x119116) {
            if (!this['isPoint']) {
                if (!this['road']['transform'])
                    return;
                let _0x92726a;
                this['isPoint'] = !0x0;
                let _0x4a9439 = 0x0, _0x5a6906 = [], _0x4ece8a = this['tar_x'], _0x474b39 = 0x0, _0x21fa93 = this['tar_z'];
                if (_0x38e726)
                    return _0x92726a = new Laya['Vector3'](_0x4ece8a, _0x474b39, _0x21fa93), 'R' == _0x2ca834 && (_0x4a9439 = -0x5a), 'D' == _0x2ca834 && (_0x4a9439 = -0xb4), 'U' == _0x2ca834 && (_0x4a9439 = 0x0), 'L' == _0x2ca834 && (_0x4a9439 = -0x10e), _0x5a6906 = [
                        _0x92726a,
                        _0x4a9439
                    ];
                switch (_0x2ca834) {
                case 'R':
                    return '' != _0x119116 ? 'D' == _0x119116 ? (_0x92726a = new Laya['Vector3'](_0x4ece8a, _0x474b39, _0x21fa93 - 0xf), _0x4a9439 = -0xb4) : 'U' == _0x119116 && (_0x92726a = new Laya['Vector3'](_0x4ece8a, _0x474b39, _0x21fa93 + 0xf), _0x4a9439 = 0x0) : (_0x92726a = new Laya['Vector3'](_0x4ece8a - 0xf, _0x474b39, _0x21fa93), _0x4a9439 = -0x5a), _0x5a6906 = [
                        _0x92726a,
                        _0x4a9439
                    ];
                case 'L':
                    return '' != _0x119116 ? 'D' == _0x119116 ? (_0x92726a = new Laya['Vector3'](_0x4ece8a, _0x474b39, _0x21fa93 - 0xf), _0x4a9439 = -0xb4) : 'U' == _0x119116 && (_0x92726a = new Laya['Vector3'](_0x4ece8a, _0x474b39, _0x21fa93 + 0xf), _0x4a9439 = 0x0) : (_0x92726a = new Laya['Vector3'](_0x4ece8a + 0xf, _0x474b39, _0x21fa93), _0x4a9439 = -0x10e), _0x5a6906 = [
                        _0x92726a,
                        _0x4a9439
                    ];
                case 'U':
                    return '' != _0x119116 ? 'L' == _0x119116 ? (_0x92726a = new Laya['Vector3'](_0x4ece8a + 0xf, _0x474b39, _0x21fa93), _0x4a9439 = -0x10e) : 'R' == _0x119116 && (_0x92726a = new Laya['Vector3'](_0x4ece8a - 0xf, _0x474b39, _0x21fa93), _0x4a9439 = -0x5a) : (_0x92726a = new Laya['Vector3'](_0x4ece8a, _0x474b39, _0x21fa93 + 0xf), _0x4a9439 = 0x0), _0x5a6906 = [
                        _0x92726a,
                        _0x4a9439
                    ];
                case 'D':
                    return '' != _0x119116 ? 'L' == _0x119116 ? (_0x92726a = new Laya['Vector3'](_0x4ece8a + 0xf, _0x474b39, _0x21fa93), _0x4a9439 = -0x10e) : 'R' == _0x119116 && (_0x92726a = new Laya['Vector3'](_0x4ece8a - 0xf, _0x474b39, _0x21fa93), _0x4a9439 = -0x5a) : (_0x92726a = new Laya['Vector3'](_0x4ece8a, _0x474b39, _0x21fa93 - 0xf), _0x4a9439 = -0xb4), _0x5a6906 = [
                        _0x92726a,
                        _0x4a9439
                    ];
                }
            }
        }
        ['cancelAfterMergePoint']() {
            this['isPoint'] = !0x1;
        }
        ['clearSelf']() {
            for (let _0x257178 = 0x0; _0x257178 < this['timerList']['length']; _0x257178++) {
                clearTimeout(this['timerList'][_0x257178]);
            }
            Laya['Tween']['clearAll'](this['ring']['transform']), Laya['Tween']['clearAll'](this['ring1']['transform']), Laya['Tween']['clearAll'](this['road']['transform']), Laya['Tween']['clearAll'](this['road1']['transform']), (this['road']['destroy'](), this['road1']['destroy'](), this['road']['removeSelf'](), this['road1']['removeSelf'](), Laya['timer']['clearAll'](this));
        }
        ['shaking_R1']() {
            this['shake'] && Laya['Tween']['to'](this['road1']['transform'], { 'localRotationEulerY': this['recordRoateY_1'] + 0x2 }, 0x64, null, Laya['Handler']['create'](this, function () {
                this['shaking_L1']();
            }));
        }
        ['shaking_L1']() {
            this['shake'] && Laya['Tween']['to'](this['road1']['transform'], { 'localRotationEulerY': this['recordRoateY_1'] - 0x2 }, 0x64, null, Laya['Handler']['create'](this, function () {
                this['shaking_R1']();
            }));
        }
        ['shaking_R']() {
            this['shake'] && Laya['Tween']['to'](this['road']['transform'], { 'localRotationEulerY': this['recordRoateY'] + 0x2 }, 0x64, null, Laya['Handler']['create'](this, function () {
                this['shaking_L']();
            }));
        }
        ['shaking_L']() {
            this['shake'] && Laya['Tween']['to'](this['road']['transform'], { 'localRotationEulerY': this['recordRoateY'] - 0x2 }, 0x64, null, Laya['Handler']['create'](this, function () {
                this['shaking_R']();
            }));
        }
        ['huifujiaodu']() {
            this['road']['transform']['localRotationEulerY'] && (this['road']['transform']['localRotationEulerY'] = this['recordRoateY']), this['road1']['active'] && (this['road1']['transform']['localRotationEulerY'] = this['recordRoateY_1']);
        }
        ['setStart_1']() {
            this['road']['transform'] && (this['road']['transform']['localRotationEulerY'] = -0x5a, this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['recordRoateY'] = this['road']['transform']['localRotationEulerY']);
        }
        ['setStart_2']() {
            this['road']['transform'] && (this['road']['transform']['localRotationEulerY'] = 0x0, this['light']['transform']['localRotationEulerY'] = this['road']['transform']['localRotationEulerY'], this['recordRoateY'] = this['road']['transform']['localRotationEulerY']);
        }
    }
    class _0x4c598f {
        static ['show']() {
        }
        static ['hide']() {
        }
    }
    class _0x3fd623 {
        static ['getWxCode'](_0x510f9c) {
        }
    }
    class _0x23d119 {
        static ['show']() {
        }
        static ['hide']() {
        }
    }
    class _0x339f1b {
        static ['play'](_0x1e2e44) {
            if (Laya['Browser']['onMiniGame'])
                (function () {
                    let _0xe32865 = _0x2443ee['getInstance']()['getParent']();
                    _0x2c206a['ShowTipLabel'](_0xe32865, _0x1a3086['LOADVIDEOTEXT'], '\x20#ffe000'), Laya['Browser']['window']['videoad']['playVideo'](function (_0x4fa7bf) {
                        0x0 == _0x4fa7bf ? _0x1e2e44['success']() : 0x1 == _0x4fa7bf || 0x2 == _0x4fa7bf && _0x1e2e44['fail'] && _0x1e2e44['fail']();
                    });
                }());
            else
                _0x1e2e44['success']();
        }
    }
    class _0xd74264 {
        static ['init']() {
            Laya['Browser']['onMiniGame'];
        }
        static ['start']() {
            _0xd74264['can_luping'] = !0x1, Laya['Browser']['onMiniGame'];
        }
        static ['stop']() {
            _0xd74264['can_luping'] = !0x0, Laya['Browser']['onMiniGame'];
        }
        static ['share'](_0x504f67) {
        }
    }
    _0xd74264['can_luping'] = !0x0;
    class _0x2c206a {
        static ['shareOnShow'](..._0x4ba657) {
            if (Laya['Browser']['onMiniGame'])
                return window['WxGlobal']['shareOnShow'](..._0x4ba657);
        }
        static ['IsFullScreen']() {
            if (Laya['Browser']['onMiniGame'])
                return window['videoad']['IsFullScreen']();
        }
        static ['ISIphone']() {
            if (Laya['Browser']['onMiniGame'])
                return window['videoad']['ISIphone']();
        }
        static ['getWindowHeight']() {
            if (Laya['Browser']['onMiniGame'])
                return window['videoad']['getWindowHeight']();
        }
        static ['showEggUI']() {
            return !!Laya['Browser']['onMiniGame'] && !!Laya['Browser']['window']['cfg']['show_egg_ui'];
        }
        static ['showBannerOrNeiLian'](_0x56ff29) {
            if (_0x56ff29 >= _0x1a3086['BANNERNEILIANLEVEL'] && _0x56ff29 % _0x1a3086['BANERNEILIANPINLV'] == 0x0 && (_0x23d119['hide'](), Laya['Browser']['onMiniGame'])) {
                if (console['log']('111111111111111111111111\x20\x20\x20*'), Math['random']() > Laya['Browser']['window']['cfg']['banner_neilian'])
                    Math['random']() > Laya['Browser']['window']['cfg']['banner_chance'] ? console['log']('222222222222222222222\x20\x20\x20*') : console['log']('333333333333333333333\x20\x20\x20*');
                else
                    Laya['stage']['width'], Laya['stage']['height'], console['log']('444444444444444444444444\x20\x20\x20*');
            }
        }
        static ['hideBannerAndNeiLian'](_0x4ce2a9) {
            _0x4ce2a9 >= _0x1a3086['BANNERNEILIANLEVEL'] && _0x4ce2a9 % _0x1a3086['BANERNEILIANPINLV'] == 0x0 && Laya['Browser']['onMiniGame'] && _0x23d119['hide']();
        }
        static ['getshareOrVideo'](_0x46aa8c) {
            return !![];
        }
        static ['getshareOrVideo_L'](_0x935f92) {
            return !![];
        }
        static ['getshareOrVideo_R'](_0x3aedce) {
            return !![];
        }
        static ['zhendong'](_0x382cd0) {
            Laya['Browser']['onMiniGame'] && ('tt' == Laya['Browser']['window']['app'] ? window['RTS']['ZhenDong'](_0x382cd0) : 'wx' == Laya['Browser']['window']['app'] && window['videoad']['ZhenDong'](_0x382cd0));
        }
        static ['showLoading']() {
            Laya['Browser']['window']['showLoading']();
        }
        static ['hideLoading']() {
            Laya['Browser']['window']['hideLoading']();
        }
        static ['full_screen']() {
            return Laya['Browser']['window']['full_screen'];
        }
        static ['pingtai_name']() {
            return Laya['Browser']['window']['pingtai_name'];
        }
        static ['get_scene_id']() {
            return Laya['Browser']['window']['fuwan'](), Laya['Browser']['window']['fuwan_sceneid'] + '';
        }
        static ['showConfirm'](_0x3f432a) {
            Laya['Browser']['window']['getSkinConfirm'](_0x3f432a);
        }
        static ['showShareConfirm'](_0xe53825) {
            Laya['Browser']['window']['getShareConfirm'](_0xe53825);
        }
        static ['MaxMin']() {
            return ![];
        }
        static ['share'](_0x3b8c16) {
            Laya['Browser']['onMiniGame'] ? window['WxGlobal']['shareGame'](_0x3b8c16) : _0x3b8c16['success']();
        }
        static ['FileMessage']() {
        }
        static ['showChaPing']() {
            Laya['Browser']['onMiniGame'] && window['chapad']['showChap']();
        }
        static ['check_can_share']() {
        }
        static ['navigateTo'](_0x573ef9) {
            Laya['Browser']['window']['neilian']['navigateTo'](_0x573ef9);
        }
        static ['aldLevelStart'](_0x12e23c, _0x544cfc) {
            Laya['Browser']['onMiniGame'] && 'wx' == Laya['Browser']['window']['app'] && Laya['Browser']['window']['wx']['aldStage']['onStart']({
                'stageId': _0x12e23c['toString'](),
                'stageName': _0x544cfc
            });
        }
        static ['aldLevelSuccess'](_0x3ae54d, _0x4b7f97) {
        }
        static ['aldLevelFail'](_0x354d5d, _0x1806da) {
        }
        static ['ShowTipLabel'](_0x3b7d64, _0x1039a8, _0x23dba3, _0x84499e, _0x2aa9d2, _0x151a54, _0x2dc118, _0x24cf78) {
            let _0x23fb8a = new Laya['Label'](_0x1039a8);
            _0x3b7d64['addChild'](_0x23fb8a), _0x23fb8a['centerX'] = 0x0, _0x23fb8a['centerY'] = 0x0, _0x23fb8a['align'] = 'center', _0x23fb8a['valign'] = 'middle', _0x23fb8a['width'] = 0x280, _0x23fb8a['height'] = 0x64, _0x23fb8a['fontSize'] = _0x2dc118 || 0x23, _0x23fb8a['bold'] = _0x24cf78 || !0x1, _0x23fb8a['color'] = '#ffe000', _0x23fb8a['zOrder'] = 0xa, _0x23fb8a['bgColor'] = _0x84499e || '#000000', Laya['Tween']['to'](_0x23fb8a, { 'centerY': _0x23fb8a['centerY'] - 0x64 }, _0x2aa9d2 || 0x12c, null, Laya['Handler']['create'](this, () => {
                Laya['timer']['once'](_0x151a54 || 0x3e8, this, () => {
                    _0x23fb8a['removeSelf']();
                });
            }));
        }
        static ['getThereBtnUnlock']() {
            return 0x0;
        }
        static ['getSignUnlock']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['signUnlock'] ? Laya['Browser']['window']['cfg']['signUnlock'] : 0x4;
        }
        static ['getIsPauseUnclok']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['isPauseUnclok'] ? Laya['Browser']['window']['cfg']['isPauseUnclok'] : 0xa;
        }
        static ['getListLengh']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['listLengh'] ? Laya['Browser']['window']['cfg']['listLengh'] : 0x4;
        }
        static ['getEndList']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['endList'] ? Laya['Browser']['window']['cfg']['endList'] : [
                0x0,
                0x0,
                0x1,
                0x1
            ];
        }
        static ['getHomeUnLock']() {
            return 0x0;
        }
        static ['getchaPingUnlock']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['chaPingUnlock'] ? Laya['Browser']['window']['cfg']['chaPingUnlock'] : 0xa;
        }
        static ['getchaPingTime']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['chaPingTime'] ? Laya['Browser']['window']['cfg']['chaPingTime'] : 0x5;
        }
        static ['getskinUlock']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['skinUlock'] ? Laya['Browser']['window']['cfg']['skinUlock'] : 0xc;
        }
        static ['getskinTime']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['skinTime'] ? Laya['Browser']['window']['cfg']['skinTime'] : 0x5;
        }
        static ['getchestBoxUnlock']() {
            return 0x1388;
        }
        static ['getchestBoxTime']() {
            return 0x1388;
        }
        static ['getCoinItem']() {
            return 0x1388;
        }
        static ['getoldPlayerfreeTime']() {
            return Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['cfg']['oldPlayerfreeTime'] ? Laya['Browser']['window']['cfg']['oldPlayerfreeTime'] : 0x1;
        }
    }
    class _0xf0d828 {
        constructor(..._0x15ff7a) {
            this['carDrivingtime'] = 0x96, this['isrecord_route'] = !0x1, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['camera'] = this['scene_all']['camera'], this['scene_3d'] = _0x15ff7a[0x0], this['terrain'] = _0x15ff7a[0x1], this['pos'] = _0x15ff7a[0x2], this['roaY'] = _0x15ff7a[0x3], this['id'] = _0x15ff7a[0x4], this['exampleCar'] = this['terrain']['getChildByName']('car' + (this['id'] + 0x1)['toString']()), this['carSelf'] = Laya['Sprite3D']['instantiate'](this['exampleCar'], this['scene_3d'], !0x1, new Laya['Vector3'](this['pos']['x'], 0x12c, this['pos']['z'])), this['carSelf'] && this['carSelf']['transform'] && (this['carSelf']['transform']['localRotationEulerY'] = this['roaY']), this['userInfo']['now_car_id'] == this['id'] && (this['carSelf']['active'] = !0x0), this['exhaust'] = this['carSelf']['getChildByName']('exhaust'), this['exhaust']['active'] = !0x1, this['victory'] = this['carSelf']['getChildByName']('victory'), this['victory']['active'] = !0x1, this['shop'] = this['carSelf']['getChildByName']('shop'), this['shop']['active'] = !0x1, Laya['Tween']['to'](this['carSelf']['transform'], { 'localPositionY': this['pos']['y'] }, 0x32, Laya['Ease']['quintOut'], Laya['Handler']['create'](this, function () {
                _0x4280be['GetInstance']()['setStartRoad'](), this['id'], this['userInfo']['now_car_id'], this['id'], _0x1a3086['READY'] = !0x0;
            })), setTimeout(() => {
                _0x1a3086['READY'] = !0x0;
            }, 0x1f4), this['timeData'] = {
                'one': null,
                'tow': null,
                'three': null
            };
        }
        ['driving'](_0x1fccec) {
            if (this['isDriving'])
                return;
            for (let _0x8701f6 in this['timeData']) {
                this['timeData'][_0x8701f6] && (clearTimeout(this['timeData'][_0x8701f6]), this['timeData'][_0x8701f6] = null);
            }
            this['shop']['active'] = !0x1, this['isDriving'] = !0x0, _0x1f2936['playSound'](_0x1a3086['CARDRIVINGSOUND'], 0x1), this['userInfo'] = this['logic']['getUserInfo'](), this['timeData']['one'] = setTimeout(() => {
                this['exhaust']['active'] = !0x0;
                for (let _0x4da8c0 = 0x0; _0x4da8c0 < _0x1fccec['length']; _0x4da8c0++) {
                    let _0x1b923f = _0x1fccec[_0x4da8c0][0x0], _0x2db4cb = _0x1b923f['x'], _0x26b909 = 0x0, _0x4e40c6 = _0x1b923f['z'], _0x6dbd4 = _0x1fccec[_0x4da8c0][0x1];
                    0x0 == _0x4da8c0 ? (this['carSelf']['transform']['localPositionX'] = _0x2db4cb, this['carSelf']['transform']['localPositionY'] = _0x26b909, this['carSelf']['transform']['localPositionZ'] = _0x4e40c6, this['carSelf']['transform']['localRotationEulerY'] = _0x6dbd4, this['last_targetRoateY'] || (this['last_targetRoateY'] = _0x6dbd4)) : this['timeData']['two'] = setTimeout(() => {
                        0x168 == this['carSelf']['transform']['localRotationEulerY'] && (this['carSelf']['transform']['localRotationEulerY'] = 0x0);
                        let _0x23dd93 = this['carSelf']['transform']['localRotationEulerY'], _0x20f073 = _0x1fccec[_0x4da8c0][0x1];
                        Math['abs'](_0x23dd93 - _0x20f073) > 0xb4 && (0x0 == _0x20f073 && _0x23dd93 < -0xb4 ? (_0x20f073 = 0x0, this['carSelf']['transform']['localRotationEulerY'] = 0x5a, _0x6dbd4 = _0x20f073) : _0x6dbd4 = _0x20f073 += 0x168), this['carSelf']['transform']['localRotationEulerY'] != _0x6dbd4 && Laya['Tween']['to'](this['carSelf']['transform'], { 'localRotationEulerY': _0x6dbd4 }, this['carDrivingtime'], null, Laya['Handler']['create'](this, function () {
                            0x168 != this['carSelf']['transform']['localRotationEulerY'] && -0x168 != this['carSelf']['transform']['localRotationEulerY'] || (this['carSelf']['transform']['localRotationEulerY'] = 0x0);
                        })), Laya['Tween']['to'](this['carSelf']['transform'], {
                            'localPositionX': _0x2db4cb,
                            'localPositionY': _0x26b909,
                            'localPositionZ': _0x4e40c6
                        }, this['carDrivingtime'], null, Laya['Handler']['create'](this, function () {
                            _0x4da8c0 == _0x1fccec['length'] - 0x1 && (_0x1f2936['stopSound'](_0x1a3086['CARDRIVINGSOUND']), _0x1f2936['playSound'](_0x1a3086['ARRIVESOUND'], 0x1), this['exhaust']['active'] = !0x1, this['victory']['active'] = !0x0, Laya['Tween']['to'](this['carSelf']['transform'], { 'localPositionY': this['carSelf']['transform']['localPositionY'] + 0x1e }, 0x12c, null, Laya['Handler']['create'](this, function () {
                                Laya['Tween']['to'](this['carSelf']['transform'], { 'localPositionY': this['carSelf']['transform']['localPositionY'] - 0x1e }, 0x12c, null, Laya['Handler']['create'](this, function () {
                                    _0x1a3086['ISARIVETARGET'] = !0x0;
                                    let _0x428b6b = 0x320;
                                    if (0x0 == _0x1a3086['BACKTIME']) {
                                        _0x428b6b = 0x708;
                                        let _0x2a1ed4 = _0x2443ee['getUI']('gameUI');
                                        _0x2a1ed4['ui']['visible'] = !0x0, _0x2a1ed4['showPerfect']();
                                    }
                                    this['timeData']['three'] = setTimeout(() => {
                                        _0x2443ee['hide']('gameUI');
                                        let _0x199597 = _0x2443ee['getUI']('rewardUI');
                                        _0x199597 && (_0x199597['ui']['visible'] || _0x2443ee['show']('endUI')), this['victory']['active'] = !0x1;
                                    }, _0x428b6b);
                                }));
                            })));
                        }));
                    }, (_0x4da8c0 - 0x1) * this['carDrivingtime']);
                }
            }, 0xc8);
        }
        ['clearSelf']() {
            for (let _0x3d9e3c in this['timeData']) {
                this['timeData'][_0x3d9e3c] && (clearTimeout(this['timeData'][_0x3d9e3c]), this['timeData'][_0x3d9e3c] = null);
            }
            this['carSelf']['destroy'](), this['carSelf']['removeSelf']();
        }
        ['record_Road'](_0x3d021b) {
            if (!this['isrecord_route']) {
                this['isrecord_route'] = !0x0;
                for (let _0x5b7f34 = 0x0; _0x5b7f34 < _0x3d021b['length']; _0x5b7f34++);
            }
        }
        ['setAddDialogPerfab']() {
        }
        ['showDiaLogEffect']() {
        }
        ['BlingBling']() {
            this['light_1'] && (this['light_1']['visible'] = !0x0, setTimeout(() => {
                this['light_2'] && setTimeout(() => {
                    this['light_2']['visible'] = !0x0, this['light_3'] && setTimeout(() => {
                        this['light_3']['visible'] = !0x0, setTimeout(() => {
                            this['light_1']['visible'] = !0x1, this['light_2']['visible'] = !0x1, this['light_3']['visible'] = !0x1, setTimeout(() => {
                                this['BlingBling']();
                            }, 0x12c);
                        }, 0x12c);
                    }, 0x1f4);
                }, 0x1f4);
            }, 0x1f4));
        }
        ['dialogClick']() {
            _0x1a3086['ISMERGE'] || YYGGames['showReward'](() => {
                _0x1a3086['RECONRD_AD_TIMES'] += 0x1, _0x4280be['GetInstance']()['cancelAllRoute'](), _0x4280be['GetInstance']()['showArrow']();
            });
        }
        ['hideDialog']() {
        }
        ['showDialog']() {
        }
        ['clearDialog']() {
        }
        ['_setNewPlayeLead']() {
            if (0x0 == this['id'] && 0x1 == this['userInfo']['level'] && this['carSelf']['transform'] && !this['hand']) {
                let _0x444ab8 = this;
                Laya['loader']['load']('perfab/hand.json', Laya['Handler']['create'](this, function (_0x416fea) {
                    let _0x12f3ad = new Laya['Prefab']();
                    _0x12f3ad['json'] = _0x416fea, _0x444ab8['hand'] = Laya['Pool']['getItemByCreateFun']('hand', _0x12f3ad['create'], _0x12f3ad);
                    let _0x396e09 = new Laya['Vector3']();
                    _0x444ab8['carSelf']['transform'] && _0x444ab8['camera']['viewport']['project'](_0x444ab8['carSelf']['transform']['position'], _0x444ab8['camera']['projectionViewMatrix'], _0x396e09), _0x444ab8['hand']['pos'](_0x396e09['x'] / Laya['stage']['clientScaleX'], _0x396e09['y'] / Laya['stage']['clientScaleY'] + 0x23);
                    let _0x571999 = _0x2443ee['getInstance']()['getParent']();
                    _0x571999['addChild'](_0x444ab8['hand']), _0x444ab8['leadLable'] = new Laya['Label'](), _0x571999['addChild'](_0x444ab8['leadLable']);
                }));
            }
        }
        ['setShopEffect']() {
            this['shop'] && (this['shop']['active'] = !0x0);
        }
    }
    class _0xa8b540 {
        constructor() {
            this['gamestate'] = 0x0;
        }
        static ['getInstance']() {
            return this['instance'] || (this['instance'] = new _0xa8b540()), this['instance'];
        }
        ['setGameState'](_0x162373) {
            this['gamestate'] = _0x162373;
        }
        ['getGameState']() {
            return this['gamestate'];
        }
    }
    class _0x4d8d14 {
        constructor(..._0x2f4ab4) {
            this['userInfo'] = _0x161787['getInstance']()['getUserInfo'](), this['levelCfg'] = _0x161787['getInstance']()['getLevelCfg'](), this['exampleArrow'] = _0x2f4ab4[0x0], this['id'] = _0x2f4ab4[0x1];
            let _0x1e1e42 = _0x2f4ab4[0x2];
            this['scene_3d'] = _0x2f4ab4[0x3], this['arrowRouteID'] = _0x2f4ab4[0x4], this['pos'] = new Laya['Vector3'](_0x1e1e42['x'], 0x1, _0x1e1e42['z']), this['arrow'] = Laya['Sprite3D']['instantiate'](this['exampleArrow'], this['scene_3d'], !0x1, this['pos']), this['arrow']['transform']['localRotationEulerX'] = 0x5a, this['arrow']['active'] = !0x1, this['h'] = this['levelCfg'][this['userInfo']['chooseLevel']]['h'], this['v'] = this['levelCfg'][this['userInfo']['chooseLevel']]['v'], this['promptRoute'] = this['levelCfg'][this['userInfo']['chooseLevel']]['promptRoute'], this['setArrow']();
        }
        ['showArrow']() {
            0x0 == this['levelCfg'][this['userInfo']['chooseLevel']]['set'][this['id']] && (this['arrow']['active'] = !0x0);
        }
        ['setArrow']() {
            for (let _0x1ef578 = 0x0; _0x1ef578 < this['arrowRouteID']['length']; _0x1ef578++)
                this['id'] == this['arrowRouteID'][_0x1ef578] && (_0x1ef578 > 0x0 && _0x1ef578 < this['arrowRouteID']['length'] ? this['promptRoute'][_0x1ef578 - 0x1][0x0] == this['promptRoute'][_0x1ef578][0x0] ? this['promptRoute'][_0x1ef578 - 0x1][0x1] < this['promptRoute'][_0x1ef578][0x1] ? this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = 0x5a) : this['promptRoute'][_0x1ef578 - 0x1][0x1] > this['promptRoute'][_0x1ef578][0x1] && this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = -0x5a) : this['promptRoute'][_0x1ef578 - 0x1][0x1] == this['promptRoute'][_0x1ef578][0x1] && (this['promptRoute'][_0x1ef578 - 0x1][0x0] < this['promptRoute'][_0x1ef578][0x0] ? this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = 0x0) : this['promptRoute'][_0x1ef578 - 0x1][0x0] > this['promptRoute'][_0x1ef578][0x0] && this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = 0xb4)) : 0x0 == _0x1ef578 && (this['promptRoute'][_0x1ef578 + 0x1][0x0] == this['promptRoute'][_0x1ef578][0x0] ? this['promptRoute'][_0x1ef578 + 0x1][0x1] > this['promptRoute'][_0x1ef578][0x1] ? this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = 0x5a) : this['promptRoute'][_0x1ef578 + 0x1][0x1] < this['promptRoute'][_0x1ef578][0x1] && this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = -0x5a) : this['promptRoute'][_0x1ef578 + 0x1][0x1] == this['promptRoute'][_0x1ef578][0x1] && (this['promptRoute'][_0x1ef578 + 0x1][0x0] > this['promptRoute'][_0x1ef578][0x0] ? this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = 0x0) : this['promptRoute'][_0x1ef578 + 0x1][0x0] < this['promptRoute'][_0x1ef578][0x0] && this['arrow'] && this['arrow']['transform'] && (this['arrow']['transform']['localRotationEulerY'] = 0xb4))));
        }
        ['hideArrow']() {
            this['arrow']['active'] = !0x1;
        }
        ['clearSelf']() {
            this['arrow']['destroy'](), this['arrow']['removeSelf']();
        }
    }
    class _0x3f4207 {
        constructor(..._0x84115f) {
            this['userInfo'] = _0x161787['getInstance']()['getUserInfo'](), this['levelCfg'] = _0x161787['getInstance']()['getLevelCfg'](), this['scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['camera'] = this['scene_all']['camera'], this['exampleCoin'] = _0x84115f[0x0], this['index'] = _0x84115f[0x1], this['pos'] = _0x84115f[0x2], this['scene_3d'] = _0x84115f[0x3], this['delytime'] = _0x84115f[0x4], this['coin'] = Laya['Sprite3D']['instantiate'](this['exampleCoin'], this['scene_3d'], !0x1, new Laya['Vector3'](this['pos']['x'], 0x1fe, this['pos']['z'])), 0x0 == this['levelCfg'][this['userInfo']['chooseLevel']]['set'][this['index']] ? this['coin']['active'] = !0x0 : this['coin']['active'] = !0x1, this['delytime'] || (this['delytime'] = 0x32), setTimeout(() => {
                Laya['Tween']['to'](this['coin']['transform'], { 'localPositionY': this['pos']['y'] }, _0x1a3086['TIMEROADLOAD'], Laya['Ease']['quintOut'], Laya['Handler']['create'](this, function () {
                }));
            }, this['delytime']), this['coin']['transform']['localScale'] = new Laya['Vector3'](0xa, 0xa, 0xa), this['rotating'](), this['floating'](), this['coin'] && this['coin']['meshRenderer'] && (this['coin']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](0xa4 / 0xff, 0x9a / 0xff, 0x18 / 0xff, 0x7b / 0xff));
        }
        ['rotating']() {
            Laya['timer']['loop'](0xa, this, () => {
                this['coin'] && this['coin']['transform'] && (this['coin']['transform']['localRotationEulerY'] += 0x2);
            });
        }
        ['floating']() {
            Laya['timer']['loop'](0x3e8, this, () => {
                this['coin']['transform'] && Laya['Tween']['to'](this['coin']['transform'], { 'localPositionY': 0xf }, 0x1f4, null, Laya['Handler']['create'](this, function () {
                    this['coin']['transform'] && Laya['Tween']['to'](this['coin']['transform'], { 'localPositionY': 0xa }, 0x1f4);
                }));
            });
        }
        ['getCoin']() {
            this['coin'] && this['coin']['transform'] && this['setAddCoinPerfab']();
        }
        ['setAddCoinPerfab']() {
            if (this['coin']['transform']) {
                let _0x2d87e5 = this;
                Laya['loader']['load']('perfab/addCoin.json', Laya['Handler']['create'](this, function (_0x2d8744) {
                    let _0x330fe1 = new Laya['Prefab']();
                    _0x330fe1['json'] = _0x2d8744, _0x2d87e5['addCoin'] = Laya['Pool']['getItemByCreateFun']('addCoin', _0x330fe1['create'], _0x330fe1);
                    let _0x4b0d52 = new Laya['Vector3']();
                    this['coin']['transform'] && _0x2d87e5['camera']['viewport']['project'](_0x2d87e5['coin']['transform']['position'], _0x2d87e5['camera']['projectionViewMatrix'], _0x4b0d52), _0x2d87e5['addCoin']['pos'](_0x4b0d52['x'] / Laya['stage']['clientScaleX'], _0x4b0d52['y'] / Laya['stage']['clientScaleY']), _0x2d87e5['addCoin']['visible'] = !0x0, Laya['stage']['addChild'](_0x2d87e5['addCoin']);
                    let _0x4c5068 = _0x2d87e5['addCoin']['getChildByName']('addCoinText'), _0x15b210 = Math['floor'](0x13 * Math['random']() + 0x1);
                    _0x4c5068['text'] = '+' + _0x15b210['toString'](), _0x2d87e5['addCoin']['visible'] = !0x0, _0x2d87e5['clearSelf'](), Laya['Tween']['to'](_0x2d87e5['addCoin'], {
                        'y': _0x2d87e5['addCoin']['y'] - 0xc8,
                        'alpha': 0x0
                    }, 0x258, null, Laya['Handler']['create'](_0x2d87e5, function () {
                        _0x2d87e5['addCoin']['visible'] = !0x1, _0x161787['getInstance']()['addCoins'](_0x15b210), _0x2d87e5['addCoin']['removeSelf']();
                    }));
                }));
            }
        }
        ['clearSelf']() {
            _0x1f2936['playSound'](_0x1a3086['COINSOUND'], 0x1), this['coin']['destroy'](), this['coin']['removeSelf'](), Laya['timer']['clearAll'](this);
        }
        ['completeColor']() {
            this['coin']['meshRenderer'] && (this['coin']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](0xa4 / 0xff, 0x9a / 0xff, 0x18 / 0xff, 0x1));
        }
    }
    class _0x5bf093 {
        constructor(..._0x272470) {
            this['is_open'] = !0x1, this['haveTimer'] = !0x1, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['camera'] = this['scene_all']['camera'], this['ex_balloon'] = _0x272470[0x0], this['scene_3d'] = _0x272470[0x1], this['look_point'] = _0x272470[0x2], this['distance_x'] = _0x272470[0x3], (_0x272470[0x4], _0x272470[0x5]), (this['anther_pos'] = _0x272470[0x6], this['balloon'] = Laya['Sprite3D']['instantiate'](this['ex_balloon'], this['scene_3d'], !0x1, new Laya['Vector3'](this['look_point']['x'], 0xc8, 0x3c)), this['balloon'] && (this['chest'] = this['balloon']['getChildByName']('chest')));
        }
        ['showAirBalloon']() {
            Laya['timer']['loop'](0xf, this, () => {
                this['is_open'] || (this['is_open'] = !0x0, this['startTimer']());
            });
        }
        ['hide']() {
            this['balloon'] && (this['balloon']['active'] = !0x1), this['chest'] && (this['chest']['active'] = !0x1), this['chestImage'] && (this['chestImage']['visible'] = !0x1);
        }
        ['startTimer']() {
            this['startLanding']();
        }
        ['startLanding']() {
            Laya['timer']['clearAll'](this);
            let _0x5d48d7 = 0x0;
            this['balloon']['transform']['localRotationEulerZ'] = 0x0, Laya['timer']['loop'](0x28, this, () => {
                this['balloon']['transform']['localRotationEulerZ'] = 0xa * Math['sin'](Laya['Utils']['toRadian'](_0x5d48d7)), _0x5d48d7 = (_0x5d48d7 + 0x5) % 0x168;
            });
            let _0x5b9cae = this['balloon']['transform']['localRotationEulerX'], _0x164a07 = 0x12c, _0x3ee8d8 = this['look_point']['x'], _0x5b8bb0 = !0x1;
            Laya['timer']['loop'](0x28, this, () => {
                this['balloon']['transform']['localPositionX'] = _0x3ee8d8 + 0x64 * Math['sin'](Laya['Utils']['toRadian'](_0x5b9cae)), this['balloon']['transform']['localPositionY'] = _0x164a07, this['balloon']['active'] || (this['balloon']['active'] = !0x0), _0x5b9cae = (_0x5b9cae + 0x2) % 0x168, (_0x164a07 -= 0x2) < 0x64 && (_0x5b8bb0 || (_0x5b8bb0 = !0x0, this['showChest']())), _0x164a07 < 0x0 && this['tearDown']();
            });
        }
        ['tearDown']() {
            this['balloon']['active'] = !0x1;
        }
        ['showChest']() {
            this['scene_3d']['addChild'](this['chest']), this['chest']['transform']['localPosition'] = new Laya['Vector3'](this['look_point']['x'], 0x64, 0x3c), this['chest']['transform']['localScale'] = new Laya['Vector3'](0x14, 0x14, 0x14), Laya['Tween']['to'](this['chest']['transform'], {
                'localPositionX': this['anther_pos']['x'],
                'localPositionY': 0x4,
                'localPositionZ': this['anther_pos']['z']
            }, 0x1f4, null, Laya['Handler']['create'](this, function () {
                this['setchestImage'](), this['ShowShareBtn'](), _0x1a3086['CHESTARRIVED'] = !0x0;
            }));
        }
        ['setchestImage']() {
            if (this['chest']['transform'] && !this['chestImage']) {
                let _0x4f8eae = this;
                Laya['loader']['load']('perfab/chestImage.json', Laya['Handler']['create'](this, function (_0x2311d8) {
                    let _0x286204 = new Laya['Prefab']();
                    _0x286204['json'] = _0x2311d8, _0x4f8eae['chestImage'] = Laya['Pool']['getItemByCreateFun']('chestImage', _0x286204['create'], _0x286204);
                    let _0x1ac833 = new Laya['Vector3']();
                    this['chest']['transform'] && _0x4f8eae['camera']['viewport']['project'](_0x4f8eae['chest']['transform']['position'], _0x4f8eae['camera']['projectionViewMatrix'], _0x1ac833), _0x4f8eae['chestImage']['pos'](_0x1ac833['x'] / Laya['stage']['clientScaleX'], _0x1ac833['y'] / Laya['stage']['clientScaleY']), _0x2443ee['getInstance']()['getParent']()['addChild'](_0x4f8eae['chestImage']), _0x4f8eae['chestImage']['on'](Laya['Event']['MOUSE_UP'], _0x4f8eae, function () {
                        !_0x1a3086['ISMERGE'] && _0x1a3086['READY'] && (_0x1a3086['ISCHEESTCLICK'] = !0x0, _0x4f8eae['chestImageClick']());
                    });
                }));
            }
        }
        ['click_Chest']() {
            _0x1a3086['ISCHEESTCLICK'] = !0x0, this['chestImageClick']();
        }
        ['chestImageClick']() {
            0x1 == _0xa8b540['getInstance']()['getGameState']() || _0x2443ee['hide']('startUI'), _0x2443ee['show']('rewardUI'), this['hide']();
        }
        ['clearSelf']() {
            Laya['timer']['clearAll'](this), this['balloon'] && (this['balloon']['destroy'](), this['balloon']['removeSelf']()), this['chest'] && (this['chest']['destroy'](), this['chest']['removeSelf']()), this['chestImage'] && this['chestImage']['removeSelf'](), this['haveTimer'] = !0x1;
        }
        ['ShowShareBtn']() {
            if (0x0 == this['haveTimer']) {
                this['haveTimer'] = !0x0;
                let _0x299ed7 = 0x0, _0x48b88c = 0x5, _0x206629 = !0x1, _0x4b2355 = !0x0;
                Laya['timer']['loop'](0x3c, this, function () {
                    this['chest'] && (_0x4b2355 ? ((_0x206629 = !_0x206629) ? 0x5a == this['chest']['transform']['localRotationEulerY'] ? this['chest']['transform']['localRotationEulerY'] += _0x48b88c : this['chest']['transform']['localRotationEulerY'] += 0x2 * _0x48b88c : this['chest']['transform']['localRotationEulerY'] -= 0x2 * _0x48b88c, (_0x48b88c -= 0.2) <= 3.6 && (_0x48b88c = 0x5, this['chest']['transform']['localRotationEulerY'] = 0x5a, _0x4b2355 = !0x1)) : (_0x299ed7 += 0x32) >= 0x5dc && (_0x299ed7 = 0x0, _0x4b2355 = !0x0));
                });
            }
        }
    }
    class _0x4d7811 {
        static ['init']() {
            _0x4d7811['initHome']();
        }
        static ['initHome']() {
            Laya['loader']['load']('res/jsons/home.json', Laya['Handler']['create'](this, function (_0x5a522e) {
                _0x4d7811['home'] = _0x5a522e;
            }));
        }
        static ['initCfg']() {
            _0x4d7811['cfg'] = Laya['Browser']['window']['cfg'];
        }
        static ['getCanRank']() {
            _0x4d7811['can_rank'] = Laya['Browser']['window']['can_rank'];
        }
    }
    class _0x59d2cc {
        static ['init']() {
            if (_0x59d2cc['data'] = Laya['LocalStorage']['getJSON']('me_battle_fish'), _0x59d2cc['data'])
                _0x59d2cc['data']['today_data'] || _0x59d2cc['setData']('today_data', 0x0), _0x59d2cc['data']['signed_days'] || _0x59d2cc['setData']('signed_days', 0x0), _0x59d2cc['data']['home1_process'] || _0x59d2cc['setData']('home1_process', []), _0x59d2cc['data']['home1_process_wenhao'] || _0x59d2cc['setData']('home1_process_wenhao', [
                    0x1,
                    0x2,
                    0x3
                ]), _0x59d2cc['data']['home2_process'] || _0x59d2cc['setData']('home2_process', []), _0x59d2cc['data']['home2_process_wenhao'] || _0x59d2cc['setData']('home2_process_wenhao', [
                    0x1,
                    0x2,
                    0x3
                ]), _0x59d2cc['data']['home3_process'] || _0x59d2cc['setData']('home3_process', []), _0x59d2cc['data']['home3_process_wenhao'] || _0x59d2cc['setData']('home3_process_wenhao', [
                    0x1,
                    0x2,
                    0x3
                ]);
            else {
                let _0x2e336d = {
                    'today_data': -0x1,
                    'signed_days': 0x0,
                    'home1_process': [],
                    'home1_process_wenhao': [
                        0x1,
                        0x2,
                        0x3
                    ],
                    'home2_process': [],
                    'home2_process_wenhao': [
                        0x1,
                        0x2,
                        0x3
                    ],
                    'home3_process': [],
                    'home3_process_wenhao': [
                        0x1,
                        0x2,
                        0x3
                    ]
                };
                Laya['LocalStorage']['setJSON']('me_battle_fish', _0x2e336d);
            }
            _0x59d2cc['data'] = Laya['LocalStorage']['getJSON']('me_battle_fish');
        }
        static ['setData'](..._0x40af77) {
            _0x40af77[0x0] || console['error']('Lose\x20name\x20and\x20property\x20which\x20you\x20wanna\x20change'), _0x59d2cc['data'][_0x40af77[0x0]] = _0x40af77[0x1], Laya['LocalStorage']['setJSON']('me_battle_fish', _0x59d2cc['data']);
        }
        static ['check_new_day']() {
            let _0x26cc21 = new Date(), _0xca9c5e = parseInt(Laya['LocalStorage']['getItem']('qiecai_local_day'));
            if (!_0xca9c5e) {
                let _0x4fdb79 = _0x26cc21['getDate']();
                Laya['LocalStorage']['setItem']('qiecai_local_day', '' + _0x4fdb79), _0xca9c5e = parseInt(Laya['LocalStorage']['getItem']('qiecai_free_times'));
            }
            return _0x26cc21['getDate']() != _0xca9c5e && (Laya['LocalStorage']['setItem']('qiecai_local_day', '' + _0x26cc21['getDate']()), !0x0);
        }
    }
    var _0x300e47 = Laya['Vector3'], _0x3f5450 = Laya['MeshSprite3D'];
    class _0x4665e2 {
        constructor(..._0x2d2192) {
            this['cars'] = [], this['roadsList'] = [], this['arrowsList'] = [], this['coinList'] = [], this['arrowRouteID'] = [], this['h_v_list'] = [], this['record_route'] = [], this['record_route_index'] = [], this['record_pointAndcarRoate'] = [], this['recordnum'] = 0x0, this['all_pos'] = [], this['all_roa'] = [], this['alltar_pos'] = [], this['point'] = new Laya['Vector2'](), this['now_Chek_Name'] = '', this['chek_Name'] = '', this['help_time'] = 0x0, this['leadRoad'] = [], this['lead'] = !0x1, this['page'] = 0x1, this['home_camera_target_x'] = [
                -0x13,
                -0x2c,
                -0x45
            ], (this['logic'] = _0x161787['getInstance'](), this['levelCfg'] = this['logic']['getLevelCfg'](), this['userInfo'] = this['logic']['getUserInfo'](), this['scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['home1'] = this['scene_all']['home1'], this['home2'] = this['scene_all']['home2'], this['home3'] = this['scene_all']['home3'], this['prefabs'] = this['scene_all']['prefabs'], this['userInfo']['level'] <= 0x5 ? this['userInfo']['encironment'] = 0x1 : this['userInfo']['level'] % 0x5 == 0x0 ? (_0x4280be['GetInstance']()['color_Num'] = 0x0, this['userInfo']['encironment'] = Math['floor'](this['userInfo']['level'] / 0x5)) : (this['userInfo']['encironment'] = Math['floor'](this['userInfo']['level'] % 0x5) + 0x1, _0x4280be['GetInstance']()['color_Num'] = this['userInfo']['level'] % 0x5), this['_ray'] = new Laya['Ray'](new Laya['Vector3'](0x0, 0x0, 0x0), new Laya['Vector3'](0x0, 0x0, 0x0)), this['point'] = new Laya['Vector2'](), this['_outHitResult'] = new Laya['HitResult'](), this['plane'] = this['scene_all']['Plane'], this['road_1'] = this['scene_all']['road_1'], this['road_2'] = this['scene_all']['road_2'], this['arrow'] = this['scene_all']['arrow'], this['scene_3d'] = this['scene_all']['scene_3d'], this['camera'] = this['scene_all']['camera'], this['coin'] = this['scene_all']['coin'], this['buildEffect'] = this['scene_all']['buildEffect'], this['userInfo']['chooseLevel'] = this['userInfo']['level'], this['userInfo']['chooseLevel'] % _0x1a3086['CHANGECOLORNUM'] == 0x0 && (this['userInfo']['encironment'] < _0x1a3086['SCENENUM'] ? this['userInfo']['encironment'] += 0x1 : this['userInfo']['encironment'] == _0x1a3086['SCENENUM'] && (this['userInfo']['encironment'] = 0x1)), this['init']());
        }
        ['init']() {
            this['record_camera_pos'] = new Laya['Vector3'](), Laya['timer']['clearAll'](this), this['userInfo'] = this['logic']['getUserInfo'](), this['recordnum'] = 0x0, this['now_Chek_Name'] = '', this['roadsList'] = [], this['h_v_list'] = [], this['record_route'] = [], this['record_route_index'] = [], this['record_pointAndcarRoate'] = [], this['all_pos'] = [], this['all_roa'] = [], this['alltar_pos'] = [], this['arrowsList'] = [], this['arrowRouteID'] = [], this['cars'] = [], this['active_num'] = 0x0, _0x1a3086['ALLROADNUMBER'] = 0x0, _0x1a3086['RECORD_NUM'] = 0x0, _0x1a3086['RECONRD_AD_TIMES'] = 0x0, _0x1a3086['BACKTIME'] = 0x0, _0x1a3086['ISCANDRIVE'] = !0x1, _0x1a3086['ISMERGE'] = !0x1, _0x1a3086['ISARIVETARGET'] = !0x1, _0x1a3086['TIPIDONE'] = !0x1, _0x1a3086['CHEST_ID'] = null, _0x1a3086['ISCHEESTCLICK'] = !0x1, _0x1a3086['CHESTARRIVED'] = !0x1, this['chest'] = null, this['start_index'] = 0x0, this['help_time'] = 0x0, this['setArrowRoute'](), this['creatPos'](), this['setRoadTest'](), this['addMouseEvent'](), this['addTime'](), Laya['timer']['loop'](0x3e8, this, () => {
                0x1 != _0xa8b540['getInstance']()['getGameState']() || _0x1a3086['ISMERGE'] || (_0x1a3086['STAYTHISLEVEL_NUM'] += 0x1, 0x1e == _0x1a3086['STAYTHISLEVEL_NUM'] && this['car'] && this['userInfo']['chooseLevel'] > 0x4 && this['car']['setAddDialogPerfab']());
            }), Laya['timer']['loop'](0x3e8, this, () => {
                0x1 != _0xa8b540['getInstance']()['getGameState']() || _0x1a3086['ISMERGE'] || this['userInfo']['chooseLevel'] > 0x4 && (_0x1a3086['STAYTHISROAD_NUM'] += 0x1, 0x5 == _0x1a3086['STAYTHISROAD_NUM'] && this['car'] && this['car']['setAddDialogPerfab']());
            }), _0x2443ee['getUI']('gameUI');
        }
        ['creatPos']() {
            for (let _0x33ae0d = 0x1; _0x33ae0d < this['levelCfg'][this['userInfo']['chooseLevel']]['h'] + 0x1; _0x33ae0d++)
                for (let _0x205cf8 = 0x1; _0x205cf8 < this['levelCfg'][this['userInfo']['chooseLevel']]['v'] + 0x1; _0x205cf8++) {
                    let _0x67dee0 = 0x3c - 0x20 * (_0x205cf8 - 0x1), _0x41510b = 0x2c - 0x20 * (_0x33ae0d - 0x1), _0x34c512 = 0x5 - 0x2 * (_0x205cf8 - 0x1), _0x206993 = 0x2 * (_0x33ae0d - 0x1) - 0x4, _0x3633c2 = new Laya['Vector3'](_0x67dee0, 0x0, _0x41510b), _0x49fc3a = new Laya['Vector3'](_0x34c512, 0x0, _0x206993);
                    this['all_pos']['push'](_0x3633c2), this['alltar_pos']['push'](_0x49fc3a);
                    let _0x3d44e8 = new Laya['Vector4'](0x0, 0x0, 0x0, 0x1);
                    this['all_roa']['push'](_0x3d44e8);
                }
        }
        ['setArrowRoute']() {
            let _0x1cc863 = this['levelCfg'][this['userInfo']['chooseLevel']]['promptRoute'], _0x5485a0 = this['levelCfg'][this['userInfo']['chooseLevel']]['v'];
            for (let _0x4c9e86 = 0x0; _0x4c9e86 < _0x1cc863['length']; _0x4c9e86++) {
                let _0x328d5c = (_0x1cc863[_0x4c9e86][0x0] - 0x1) * _0x5485a0 + _0x1cc863[_0x4c9e86][0x1] - 0x1;
                this['arrowRouteID']['push'](_0x328d5c);
            }
        }
        ['setRoadTest']() {
            let _0x125fe0, _0x203fab, _0x92836a, _0x4c8a19, _0x58071f;
            this['levelCfg'] = this['logic']['getLevelCfg']();
            let _0x4d772b = this['levelCfg'][this['userInfo']['chooseLevel']]['h'], _0x1c6405 = this['levelCfg'][this['userInfo']['chooseLevel']]['v'], _0x2fde15 = this['levelCfg'][this['userInfo']['chooseLevel']]['start_h'], _0x5b3a10 = this['levelCfg'][this['userInfo']['chooseLevel']]['start_v'];
            this['start_index'] = (_0x2fde15 - 0x1) * _0x1c6405 + _0x5b3a10 - 0x1;
            let _0x14d560, _0x3ba4b5, _0x5b3f96, _0x16401e = 0x0, _0x41dc0c = this['levelCfg'][this['userInfo']['chooseLevel']]['set'];
            for (let _0x4bed3c = 0x0; _0x4bed3c < _0x41dc0c['length']; _0x4bed3c++)
                0x0 == _0x41dc0c[_0x4bed3c] && (_0x16401e += 0x1);
            this['active_num'] = _0x16401e;
            let _0x1e3f62, _0x1c4d3a = [], _0x580f89 = [];
            _0x1c4d3a['length'] > 0x0 && (_0x1c4d3a['splice'](0x0, _0x1c4d3a['length']), _0x580f89['splice'](0x0, _0x580f89['length']));
            for (let _0x41f2a3 = 0x0; _0x41f2a3 < _0x4d772b * _0x1c6405; _0x41f2a3++) {
                if (_0x14d560 = this['all_pos'][_0x41f2a3], _0x5b3f96 = this['alltar_pos'][_0x41f2a3], _0x3ba4b5 = this['all_roa'][_0x41f2a3], 0x0 == this['levelCfg'][this['userInfo']['chooseLevel']]['set'][_0x41f2a3] && (this['help_time'] += 0x1, _0x1e3f62 = 0x1 == this['userInfo']['chooseLevel'] ? this['help_time'] * (0x320 / (_0x4d772b * _0x1c6405)) : this['help_time'] * (0x5dc / (_0x4d772b * _0x1c6405))), this['roadsList']['push'](new _0x1afc49(this['road_2'], _0x41f2a3, _0x14d560, _0x3ba4b5, this['scene_3d'], _0x5b3f96, _0x4d772b, _0x1c6405, this['road_1'], _0x1e3f62, _0x16401e)), 0x0 == this['levelCfg'][this['userInfo']['chooseLevel']]['set'][_0x41f2a3] && _0x41f2a3 != this['start_index'] && (_0x1c4d3a['push'](_0x14d560), _0x580f89['push'](_0x41f2a3)), this['arrowsList']['push'](new _0x4d8d14(this['arrow'], _0x41f2a3, _0x14d560, this['scene_3d'], this['arrowRouteID'])), this['userInfo']['chooseLevel'] % _0x2c206a['getCoinItem']() == 0x0 && this['coinList']['push'](new _0x3f4207(this['coin'], _0x41f2a3, _0x14d560, this['scene_3d'], _0x1e3f62)), 0x0 == _0x41f2a3 && this['roadsList'][_0x41f2a3]['road']) {
                    let _0x3d0161 = this['roadsList'][_0x41f2a3]['road']['getChildByName']('pointUp'), _0x4cbec7 = this['roadsList'][_0x41f2a3]['road']['getChildByName']('pointDown');
                    this['frist_pointUp_pos'] = _0x3d0161['transform']['position'], this['frist_pointDown_pos'] = _0x4cbec7['transform']['position'], _0x125fe0 = new Laya['Vector3'](_0x3d0161['transform']['position']['x'] - 0x33, 0xa, _0x3d0161['transform']['position']['z'] + 0xa3);
                }
                if (_0x41f2a3 == _0x4d772b * _0x1c6405 - 0x1 && this['roadsList'][_0x41f2a3]['road']) {
                    let _0x444173 = this['roadsList'][_0x41f2a3]['road']['getChildByName']('pointUp'), _0x5cf979 = this['roadsList'][_0x41f2a3]['road']['getChildByName']('pointDown');
                    if (this['final_pointUp_pos'] = _0x444173['transform']['position'], this['final_pointDown_pos'] = _0x5cf979['transform']['position'], this['distance_X'] = Math['abs'](this['final_pointDown_pos']['x'] - this['frist_pointUp_pos']['x']), this['distance_Z'] = Math['abs'](this['final_pointDown_pos']['z'] - this['frist_pointUp_pos']['z']), this['look_point'] = new Laya['Vector3'](this['final_pointDown_pos']['x'] + 0.5 * this['distance_X'], 0x0, this['final_pointDown_pos']['z'] + 0.5 * this['distance_Z']), _0x1a3086['CENTER_POINT'] = this['look_point'], this['camera']['getComponent'](_0x510c79)['Follow'](this['look_point'], _0x4d772b, _0x1c6405), _0x203fab = new Laya['Vector3'](this['frist_pointUp_pos']['x'] + 0x17, 0x0, this['frist_pointUp_pos']['z'] + 0x25), _0x92836a = new Laya['Vector3'](this['final_pointDown_pos']['x'], 0x0, this['frist_pointUp_pos']['z'] + 0x25), _0x4c8a19 = new Laya['Vector3'](this['frist_pointUp_pos']['x'] + 0x17, 0x0, this['final_pointDown_pos']['z'] - 0x32), _0x58071f = new Laya['Vector3'](this['final_pointDown_pos']['x'] - 0x28, 0x0, this['final_pointDown_pos']['z'] - 0x32), _0x4280be['GetInstance']()['setGroupPos'](_0x125fe0, _0x203fab, _0x92836a, _0x4c8a19, _0x58071f), this['userInfo']['chooseLevel'] >= _0x2c206a['getchestBoxUnlock']() && ((this['userInfo']['chooseLevel'] - _0x2c206a['getchestBoxUnlock']()) % _0x2c206a['getchestBoxTime']() == 0x0 || this['userInfo']['chooseLevel'] == _0x2c206a['getchestBoxUnlock']())) {
                        let _0x5cf901;
                        if (_0x1c4d3a['length'] > 0x0) {
                            let _0x1476f2 = Math['floor'](Math['random']() * _0x1c4d3a['length']);
                            _0x5cf901 = _0x1c4d3a[_0x1476f2], _0x1a3086['CHEST_ID'] = _0x580f89[_0x1476f2];
                        } else
                            _0x5cf901 = new Laya['Vector3'](this['scene_all']['group_2']['transform']['localPositionX'], 0x4, this['look_point']['z']);
                        this['airBalloon'] = new _0x5bf093(this['scene_all']['reqiqiu'], this['scene_3d'], this['look_point'], this['distance_X'], this['frist_pointUp_pos'], this['final_pointDown_pos'], _0x5cf901), this['chest_addTime']();
                    }
                    this['record_camera_pos'] = new Laya['Vector3'](this['camera']['transform']['position']['x'], this['camera']['transform']['position']['y'], this['camera']['transform']['position']['z']);
                }
            }
        }
        ['setStartRoad']() {
            this['roadsList'][this['start_index']]['roateDone'] && (this['pushTo_h_v_list'](this['roadsList'][this['start_index']]['get_h_v'](0x1)), this['push_record_route'](this['roadsList'][this['start_index']]['get_record_route']()), this['record_route_index']['push'](this['roadsList'][this['start_index']]['index']));
        }
        ['setcar']() {
            this['userInfo'] = this['logic']['getUserInfo']();
            let _0x50c05e = this['all_pos'][this['start_index']], _0x4dbc4a = new Laya['Vector3'](_0x50c05e['x'], _0x50c05e['y'], _0x50c05e['z']), _0x2f6153 = this['scene_all']['terrain'];
            for (let _0x429f11 = 0x0; _0x429f11 < 0x6; _0x429f11++)
                this['cars']['push'](new _0xf0d828(this['scene_3d'], _0x2f6153, _0x4dbc4a, -0x5a, _0x429f11));
            0x1 == this['userInfo']['level'] ? this['setNowCar'](0x0) : this['setNowCar'](this['userInfo']['now_car_id']);
        }
        ['setNowCar'](_0x4231d6) {
            if (this['cars']) {
                for (let _0x326820 = 0x0; _0x326820 < this['cars']['length']; _0x326820++)
                    _0x4231d6 == _0x326820 ? (this['cars'][_0x326820]['carSelf']['active'] = !0x0, this['cars'][_0x326820]['setShopEffect'](), this['car'] = this['cars'][_0x326820]) : this['cars'][_0x326820]['carSelf']['active'] = !0x1;
            }
        }
        ['addMouseEvent']() {
            this['canMove'] = ![], (Laya['stage']['on'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMove']), Laya['stage']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDown']), Laya['stage']['on'](Laya['Event']['MOUSE_OUT'], this, this['onMouseOut']), Laya['stage']['on'](Laya['Event']['MOUSE_UP'], this, this['onMouseOut']));
        }
        ['onMouseOut']() {
            this['canMove'] = ![];
        }
        ['onMouseDown']() {
            this['canMove'] = !![], (this['point']['x'] = Laya['MouseManager']['instance']['mouseX'], this['point']['y'] = Laya['MouseManager']['instance']['mouseY'], this['camera']['viewportPointToRay'](this['point'], this['_ray']), this['scene_3d']['physicsSimulation']['rayCast'](this['_ray'], this['_outHitResult']), this['_outHitResult']['succeeded'] && (0x1 == _0xa8b540['getInstance']()['getGameState']() ? this['now_Chek_Name'] = this['_outHitResult']['collider']['owner']['name'] : this['now_Chek_Name'] = ''));
        }
        ['onMouseMove']() {
            if (!this['canMove'])
                return;
            this['point']['x'] = Laya['MouseManager']['instance']['mouseX'], this['point']['y'] = Laya['MouseManager']['instance']['mouseY'], this['camera']['viewportPointToRay'](this['point'], this['_ray']), this['scene_3d']['physicsSimulation']['rayCast'](this['_ray'], this['_outHitResult']), this['_outHitResult']['succeeded'] && (0x1 == _0xa8b540['getInstance']()['getGameState']() ? this['now_Chek_Name'] = this['_outHitResult']['collider']['owner']['name'] : this['now_Chek_Name'] = '');
        }
        ['addTime']() {
            Laya['timer']['loop'](0xa, this, () => {
                if (0x2 != _0xa8b540['getInstance']()['getGameState']() && !_0x1a3086['ISONUI'] && _0x1a3086['READY'] && 0x1 == _0xa8b540['getInstance']()['getGameState']()) {
                    if (this['roadsList'] && this['now_Chek_Name']) {
                        for (let _0x19147b = 0x0; _0x19147b < this['roadsList']['length']; _0x19147b++)
                            if (this['roadsList'][_0x19147b]['name'] == this['now_Chek_Name'] && (this['chek_Name'] = this['now_Chek_Name'], !this['roadsList'][_0x19147b]['isPush'] && _0x1a3086['ALLROADNUMBER'] < this['active_num'] ? this['h_v_list'] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] == this['roadsList'][_0x19147b]['h_point'] ? (0x1 == Math['abs'](this['roadsList'][_0x19147b]['v_point'] - this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1]) && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]]['isPush'] && this['roadsList'][_0x19147b]['roateDone'] && (this['pushTo_h_v_list'](this['roadsList'][_0x19147b]['get_h_v'](0x1)), this['push_record_route'](this['roadsList'][_0x19147b]['get_record_route']()), this['record_route_index']['push'](this['roadsList'][_0x19147b]['index'])), this['h_v_list']['length'] > 0x2 && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] - this['h_v_list'][this['h_v_list']['length'] - 0x2][0x1] > 0x0 ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'D', 'R')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'U', 'R')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] == this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'R', ''))) : this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'D', 'L')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'U', 'L')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] == this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'L', ''))))) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] == this['roadsList'][_0x19147b]['v_point'] && (0x1 == Math['abs'](this['roadsList'][_0x19147b]['h_point'] - this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0]) && this['roadsList'][_0x19147b]['roateDone'] && (this['pushTo_h_v_list'](this['roadsList'][_0x19147b]['get_h_v'](0x2)), this['push_record_route'](this['roadsList'][_0x19147b]['get_record_route']()), this['record_route_index']['push'](this['roadsList'][_0x19147b]['index'])), this['h_v_list']['length'] > 0x2 && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] - this['h_v_list'][this['h_v_list']['length'] - 0x2][0x0] > 0x0 ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'R', 'D')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'L', 'D')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] == this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'D', ''))) : this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'R', 'U')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'L', 'U')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] == this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'U', '')))))) : this['h_v_list']['length'] > 0x0 && (this['h_v_list']['length'] > 0x2 && 0x0 == this['recordnum'] && (this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] == this['h_v_list'][this['h_v_list']['length'] - 0x2][0x0] && this['h_v_list'][this['h_v_list']['length'] - 0x2][0x1] == this['roadsList'][_0x19147b]['v_point'] ? this['h_v_list'][this['h_v_list']['length'] - 0x2][0x1] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] ? (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](0x5a), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'R', 'D'))) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] && (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](0x0), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'R', 'U')))) : this['h_v_list'][this['h_v_list']['length'] - 0x2][0x1] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] ? (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](-0xb4), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'L', 'D'))) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] && (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](-0x5a), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'L', 'U')))) : this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] == this['h_v_list'][this['h_v_list']['length'] - 0x2][0x1] && this['h_v_list'][this['h_v_list']['length'] - 0x2][0x0] == this['roadsList'][_0x19147b]['h_point'] && (this['h_v_list'][this['h_v_list']['length'] - 0x2][0x0] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] ? (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](-0x5a), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'D', 'R'))) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] && (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](0x0), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'D', 'L')))) : this['h_v_list'][this['h_v_list']['length'] - 0x2][0x0] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x0] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] > this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] ? (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](-0xb4), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'U', 'R'))) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] < this['h_v_list'][this['h_v_list']['length'] - 0x3][0x1] && (this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['turn'](0x5a), this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x1, 'U', 'L')))))), this['h_v_list']['length'] > 0x2 && 0x0 == this['recordnum'] && this['record_route_index']['length'] >= 0x4 && (this['record_route'][this['record_route']['length'] - 0x4][0x0] == this['record_route'][this['record_route']['length'] - 0x3][0x0] && this['record_route'][this['record_route']['length'] - 0x3][0x1] == this['record_route'][this['record_route']['length'] - 0x2][0x1] ? this['record_route'][this['record_route']['length'] - 0x3][0x1] > this['record_route'][this['record_route']['length'] - 0x4][0x1] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]] && (this['record_route'][this['record_route']['length'] - 0x2][0x0] > this['record_route'][this['record_route']['length'] - 0x4][0x0] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](0x5a) : this['record_route'][this['record_route']['length'] - 0x2][0x0] < this['record_route'][this['record_route']['length'] - 0x4][0x0] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](0x0)) : this['record_route'][this['record_route']['length'] - 0x3][0x1] < this['record_route'][this['record_route']['length'] - 0x4][0x1] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]] && (this['record_route'][this['record_route']['length'] - 0x2][0x0] > this['record_route'][this['record_route']['length'] - 0x4][0x0] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](-0xb4) : this['record_route'][this['record_route']['length'] - 0x1][0x0] < this['record_route'][this['record_route']['length'] - 0x3][0x0] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](-0x5a)) : this['record_route'][this['record_route']['length'] - 0x4][0x1] == this['record_route'][this['record_route']['length'] - 0x3][0x1] && this['record_route'][this['record_route']['length'] - 0x3][0x0] == this['record_route'][this['record_route']['length'] - 0x2][0x0] && (this['record_route'][this['record_route']['length'] - 0x3][0x0] > this['record_route'][this['record_route']['length'] - 0x4][0x0] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]] && (this['record_route'][this['record_route']['length'] - 0x2][0x1] > this['record_route'][this['record_route']['length'] - 0x4][0x1] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](-0x5a) : this['record_route'][this['record_route']['length'] - 0x2][0x1] < this['record_route'][this['record_route']['length'] - 0x4][0x1] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](0x0)) : this['record_route'][this['record_route']['length'] - 0x3][0x0] < this['record_route'][this['record_route']['length'] - 0x4][0x0] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x4]] && (this['record_route'][this['record_route']['length'] - 0x2][0x1] > this['record_route'][this['record_route']['length'] - 0x4][0x1] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](-0xb4) : this['record_route'][this['record_route']['length'] - 0x2][0x1] < this['record_route'][this['record_route']['length'] - 0x4][0x1] && this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x3]]['turn'](0x5a)))), this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] != this['roadsList'][_0x19147b]['h_point'] || this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] != this['roadsList'][_0x19147b]['v_point'] ? _0x1a3086['ALLROADNUMBER'] < this['active_num'] && this['cancel'](_0x1a3086['RECORD_NUM'] - 0x1 - this['roadsList'][_0x19147b]['record_num']) : this['roadsList'][_0x19147b]['isReplace'] && this['roadsList'][_0x19147b]['cancelTurn'](), 0x2 == this['h_v_list']['length'] && this['h_v_list'][0x0][0x0] == this['record_route'][0x0][0x0] && this['h_v_list'][0x0][0x1] == this['record_route'][0x0][0x1] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] == this['record_route'][0x0][0x0] ? (this['roadsList'][this['record_route_index'][0x0]] && (this['roadsList'][this['record_route_index'][0x0]]['setStart_1'](), this['roadsList'][this['record_route_index'][0x0]]['light']['transform']['localRotationEulerY'] = -0x5a, this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] > this['record_route'][0x0][0x1] ? this['car'] && this['car']['carSelf'] && (this['car']['carSelf']['transform']['localRotationEulerY'] = -0x5a) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] < this['record_route'][0x0][0x1] && this['car'] && this['car']['carSelf'] && (this['car']['carSelf']['transform']['localRotationEulerY'] = 0x5a)), this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] > this['record_route'][0x0][0x1] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x0, 'R', '')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] < this['record_route'][0x0][0x1] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x0, 'L', '')))) : (this['roadsList'][this['record_route_index'][0x0]] && (this['roadsList'][this['record_route_index'][0x0]]['setStart_2'](), this['roadsList'][this['record_route_index'][0x0]]['light']['transform']['localRotationEulerY'] = 0x0, this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] > this['record_route'][0x0][0x0] ? this['car'] && this['car']['carSelf'] && this['car']['carSelf']['transform'] && (this['car']['carSelf']['transform']['localRotationEulerY'] = -0xb4) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] < this['record_route'][0x0][0x0] && this['car'] && this['car']['carSelf'] && this['car']['carSelf']['transform'] && (this['car']['carSelf']['transform']['localRotationEulerY'] = 0x0)), this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]] && (this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] > this['record_route'][0x0][0x0] ? this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x0, 'D', '')) : this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] < this['record_route'][0x0][0x0] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['getAfterMergePointAndCarRoate'](!0x0, 'U', ''))))))), _0x1a3086['ALLROADNUMBER'] >= this['active_num']) {
                                if (this['arrowsList']) {
                                    for (let _0x4ec5bd = 0x0; _0x4ec5bd < this['arrowsList']['length']; _0x4ec5bd++)
                                        this['arrowsList'][_0x4ec5bd]['hideArrow']();
                                }
                                this['h_v_list']['length'] > 0x1 && (this['h_v_list'][this['h_v_list']['length'] - 0x2][0x0] == this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] ? this['h_v_list'][this['h_v_list']['length'] - 0x2][0x1] < this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]]['getAfterMergePointAndCarRoate'](!0x0, 'R', '')) : this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]]['getAfterMergePointAndCarRoate'](!0x0, 'L', '')) : this['h_v_list'][this['h_v_list']['length'] - 0x2][0x1] == this['h_v_list'][this['h_v_list']['length'] - 0x1][0x1] && (this['h_v_list'][this['h_v_list']['length'] - 0x2][0x0] < this['h_v_list'][this['h_v_list']['length'] - 0x1][0x0] ? this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]]['getAfterMergePointAndCarRoate'](!0x0, 'D', '')) : this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]] && this['pushRecord_route_point'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]]['getAfterMergePointAndCarRoate'](!0x0, 'U', '')))), _0x2443ee['getInstance']()['hideDialog'](), this['roadsList'][_0x19147b]['shake'] = !0x1, this['roadsList'][_0x19147b]['huifujiaodu'](), this['roadsList'][_0x19147b]['Merge'](), _0x1a3086['ISCANDRIVE'] && this['car'] && this['car']['driving'](this['record_pointAndcarRoate']);
                            }
                    }
                    if (this['coinList']['length'] > 0x0) {
                        for (let _0x4adf7e = 0x0; _0x4adf7e < this['coinList']['length']; _0x4adf7e++)
                            if (this['car']['carSelf']['transform'] && this['coinList'][_0x4adf7e]['coin']['transform']) {
                                let _0x3e7dc5 = this['car']['carSelf']['transform']['localPositionX'], _0x3c8d1a = this['coinList'][_0x4adf7e]['coin']['transform']['localPositionX'], _0x3ada47 = this['car']['carSelf']['transform']['localPositionZ'], _0x3e3e1b = this['coinList'][_0x4adf7e]['coin']['transform']['localPositionZ'];
                                Math['abs'](_0x3e7dc5 - _0x3c8d1a) <= 0xf && Math['abs'](_0x3ada47 - _0x3e3e1b) <= 0xf && this['coinList'][_0x4adf7e]['getCoin']();
                            }
                    }
                }
            });
        }
        ['chest_addTime']() {
            Laya['timer']['loop'](0xa, this, () => {
                if (this['chest']) {
                    if (this['car']['carSelf']['transform'] && this['chest']['transform']) {
                        let _0x395b19 = this['car']['carSelf']['transform']['localPositionX'], _0x3707ca = this['chest']['transform']['localPositionX'], _0xd686f8 = this['car']['carSelf']['transform']['localPositionZ'], _0x2edb16 = this['chest']['transform']['localPositionZ'];
                        Math['abs'](_0x395b19 - _0x3707ca) <= 0xf && Math['abs'](_0xd686f8 - _0x2edb16) <= 0xf && _0x1a3086['ISMERGE'] && this['airBalloon'] && (_0x1a3086['ISCHEESTCLICK'] || this['chest']['active'] && this['airBalloon']['click_Chest']());
                    }
                } else
                    this['chest'] = this['scene_3d']['getChildByName']('chest');
            });
        }
        ['pushTo_h_v_list'](_0xd3f65) {
            this['h_v_list']['length'] < 0x3 ? this['h_v_list']['push'](_0xd3f65) : (this['h_v_list']['shift'](), this['pushTo_h_v_list'](_0xd3f65));
        }
        ['cancleTo_h_v_list'](_0x12346d) {
            for (let _0x3a3a41 = 0x0; _0x3a3a41 < this['h_v_list']['length']; _0x3a3a41++)
                this['h_v_list'][_0x3a3a41] == _0x12346d && this['h_v_list']['shift']();
        }
        ['push_record_route'](_0x18c9ea) {
            this['record_route']['push'](_0x18c9ea);
        }
        ['cancel_record_route']() {
            this['record_route']['shift']();
        }
        ['cancel'](_0x125345) {
            if (!(this['recordnum'] == _0x125345 || _0x125345 < 0x1 || _0x1a3086['ALLROADNUMBER'] >= this['active_num'])) {
                if (this['recordnum'] = _0x125345, this['record_route'])
                    for (let _0x4e58d1 = 0x0; _0x4e58d1 < _0x125345; _0x4e58d1++) {
                        if (this['record_route_index']['length'] > 0x0) {
                            this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x2]]['cancelAfterMergePoint'](), this['record_pointAndcarRoate']['splice'](this['record_pointAndcarRoate']['length'] - 0x1, 0x1);
                            let _0x5ccef5 = this['record_route_index'][this['record_route_index']['length'] - 0x1];
                            this['record_route_index'][this['record_route_index']['length']], (this['roadsList'][_0x5ccef5]['cancel_h_v'](), this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]]['cancelAfterMergePoint'](), this['record_route_index']['splice'](this['record_route_index']['length'] - 0x1, 0x1), this['record_route']['splice'](this['record_route']['length'] - 0x1, 0x1));
                        }
                        this['h_v_list'] && (this['h_v_list']['splice'](0x0, this['h_v_list']['length']), this['h_v_list'] = []), _0x4e58d1 == _0x125345 - 0x1 && (this['record_route']['length'] > 0x2 ? (this['h_v_list']['push'](this['record_route'][this['record_route']['length'] - 0x3]), this['h_v_list']['push'](this['record_route'][this['record_route']['length'] - 0x2]), this['h_v_list']['push'](this['record_route'][this['record_route']['length'] - 0x1])) : this['record_route']['length'] > 0x1 ? (this['h_v_list']['push'](this['record_route'][this['record_route']['length'] - 0x2]), this['h_v_list']['push'](this['record_route'][this['record_route']['length'] - 0x1])) : this['record_route']['length'] > 0x0 ? this['h_v_list']['push'](this['record_route'][this['record_route']['length'] - 0x1]) : this['h_v_list'] = [], this['recordnum'] = 0x0);
                    }
                _0x1a3086['BACKTIME'] += 0x1, _0x1a3086['BACKTIME'] > 0x3 && this['car'] && this['car']['setAddDialogPerfab'](), 0x3 == _0x1a3086['BACKTIME'] && _0x1a3086['ISREST'];
            }
        }
        ['pushRecord_route_point'](_0xe68e24) {
            _0xe68e24 && this['record_pointAndcarRoate']['push'](_0xe68e24);
        }
        ['cancelRecord_route_point']() {
            this['record_pointAndcarRoate']['pop']();
        }
        ['clearLastLevel']() {
            if (_0xa8b540['getInstance']()['setGameState'](0x2), this['cars']['length'] > 0x0) {
                for (let _0x2d16f2 = 0x0; _0x2d16f2 < this['cars']['length']; _0x2d16f2++)
                    this['cars'][_0x2d16f2]['clearSelf'](), _0x2d16f2 == this['cars']['length'] - 0x1 && this['cars']['splice'](0x0, this['cars']['length']);
            }
            for (let _0x454927 = 0x0; _0x454927 < this['roadsList']['length']; _0x454927++)
                this['roadsList'][_0x454927]['shake'] = !0x1, this['roadsList'][_0x454927]['clearSelf'](), this['coinList'][_0x454927] && this['coinList'][_0x454927]['clearSelf'](), _0x454927 == this['roadsList']['length'] - 0x1 && (this['roadsList']['splice'](0x0, this['roadsList']['length']), this['record_route']['splice'](0x0, this['record_route']['length']), this['record_pointAndcarRoate']['splice'](0x0, this['record_pointAndcarRoate']['length']), this['all_pos']['splice'](0x0, this['all_pos']['length']), this['all_roa']['splice'](0x0, this['all_roa']['length']), this['alltar_pos']['splice'](0x0, this['alltar_pos']['length']), this['h_v_list']['splice'](0x0, this['h_v_list']['length']), this['coinList'] && this['coinList']['splice'](0x0, this['coinList']['length']), Laya['timer']['clearAll'](this));
            this['record_route_index']['splice'](0x0, this['record_route_index']['length']), this['arrowRouteID']['splice'](0x0, this['arrowRouteID']['length']);
            for (let _0x38b32e = 0x0; _0x38b32e < this['arrowsList']['length']; _0x38b32e++)
                this['arrowsList'][_0x38b32e]['clearSelf'](), _0x38b32e == this['arrowsList']['length'] && this['arrowsList']['splice'](0x0, this['arrowsList']['length']);
            this['airBalloon'] && (this['airBalloon']['clearSelf'](), this['airBalloon'] = null);
        }
        ['carChangePosFollowRoad'](_0x587f72, _0x4ad045, _0x38a690, _0xced09, _0x34eebf, _0x35b267) {
            this['car'] && (this['car']['clearDialog'](), Laya['Tween']['to'](this['car']['carSelf']['transform'], {
                'localPositionX': _0x587f72,
                'localPositionY': _0x4ad045,
                'localPositionZ': _0x38a690
            }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['car']['carSelf']['transform'], {
                    'localPositionX': _0xced09,
                    'localPositionY': _0x34eebf,
                    'localPositionZ': _0x35b267
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                }));
            })));
        }
        ['chestChangePosFollowRoad'](_0xb9c42a, _0x3f8e04, _0x979d30, _0x3ddce2, _0xdc6693, _0x2c8dfe) {
            this['chest']['transform'] && Laya['Tween']['to'](this['chest']['transform'], {
                'localPositionX': _0xb9c42a,
                'localPositionY': _0x3f8e04,
                'localPositionZ': _0x979d30
            }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['chest']['transform'], {
                    'localPositionX': _0x3ddce2,
                    'localPositionY': _0xdc6693,
                    'localPositionZ': _0x2c8dfe
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                }));
            }));
        }
        ['coinChangePosFollowRoad'](_0x5607ad, _0x53e385, _0x35982c, _0x605216, _0x245a4a, _0xab653e, _0x55ae19) {
            this['coinList']['length'] > 0x0 && this['coinList'][_0x55ae19]['coin']['transform'] && (this['coinList'][_0x55ae19]['completeColor'](), Laya['Tween']['to'](this['coinList'][_0x55ae19]['coin']['transform'], {
                'localPositionX': _0x5607ad,
                'localPositionY': _0x53e385,
                'localPositionZ': _0x35982c
            }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                this['coinList'][_0x55ae19]['coin']['transform'] && Laya['Tween']['to'](this['coinList'][_0x55ae19]['coin']['transform'], {
                    'localPositionX': _0x605216,
                    'localPositionY': _0x245a4a,
                    'localPositionZ': _0xab653e
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                }));
            })));
        }
        ['showArrow']() {
            for (let _0x58b214 = 0x0; _0x58b214 < this['arrowRouteID']['length']; _0x58b214++)
                _0x58b214 < _0x1a3086['RECONRD_AD_TIMES'] * _0x1a3086['TIPNUMBER'] && this['arrowsList'][this['arrowRouteID'][_0x58b214]]['showArrow']();
        }
        ['cancelAllRoute']() {
            this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]] && this['cancel'](this['roadsList'][this['record_route_index'][this['record_route_index']['length'] - 0x1]]['record_num']);
        }
        ['showAirBalloon']() {
            this['airBalloon'] && this['airBalloon']['showAirBalloon']();
        }
        ['showHomeScene'](..._0x4c5156) {
            let _0x3452d8 = _0x4c5156[0x0], _0x52e548 = _0x4c5156[0x1], _0x276f47 = _0x4c5156[0x2];
            _0x3452d8 ? (this['home1']['active'] = !0x0, this['home2']['active'] = !0x0, this['home3']['active'] = !0x0, this['camera']['transform']['position'] = new _0x300e47(-0x13, 0x10e, -0x5a), this['createHomeItems'](!0x0, 0x1), this['home2']['transform']['position'] = new _0x300e47(-43.7, this['home2']['transform']['position']['y'], this['home2']['transform']['position']['z']), this['createHomeItems'](!0x0, 0x2), this['home3']['transform']['position'] = new _0x300e47(-69.7, this['home3']['transform']['position']['y'], this['home3']['transform']['position']['z']), this['createHomeItems'](!0x0, 0x3), _0x276f47 && _0x276f47['call'](_0x52e548), _0x4280be['GetInstance']()['homeLight']()) : (this['home1']['active'] = !0x1, this['home2']['active'] = !0x1, this['home3']['active'] = !0x1, this['createHomeItems'](!0x1, 0x1), this['createHomeItems'](!0x1, 0x2), this['createHomeItems'](!0x1, 0x3), _0x276f47 && _0x276f47['call'](_0x52e548), _0x4280be['GetInstance']()['mainSceneLight'](), this['camera']['transform']['position'] = new _0x300e47(this['record_camera_pos']['x'], this['record_camera_pos']['y'], this['record_camera_pos']['z']));
        }
        ['getWenHaoData'](_0x3a5249) {
            for (let _0x29254a = 0x0; _0x29254a < _0x3a5249['length']; _0x29254a++)
                if ('wenhao' == _0x3a5249[_0x29254a]['name'])
                    return _0x3a5249[_0x29254a];
        }
        ['createHomeItems'](..._0x2e34a7) {
            let _0x10c467 = _0x2e34a7[0x0], _0x13126d = _0x2e34a7[0x1];
            if (_0x10c467) {
                let _0x4d9dd4 = _0x4d7811['home'][_0x13126d]['data'];
                for (let _0x2b36fb = 0x0; _0x2b36fb < _0x4d9dd4['length']; _0x2b36fb++) {
                    let _0x291c1f = _0x4d9dd4[_0x2b36fb], _0x45ee74 = null;
                    for (let _0x5e0cc4 = 0x0; _0x5e0cc4 < _0x291c1f['length']; _0x5e0cc4++) {
                        let _0x25877d = _0x291c1f[_0x5e0cc4];
                        0x0 == _0x5e0cc4 && ((_0x45ee74 = _0x3f5450['instantiate'](this['prefabs']['empty'], this['home' + _0x13126d], !0x1, new _0x300e47(0x0, 0x0, 0x0)))['name'] = 'floor' + (_0x2b36fb + 0x1), _0x45ee74['active'] = !0x0, _0x45ee74['transform']['localPosition'] = new _0x300e47(0x0, 0x0, 0x0), _0x45ee74['transform']['localRotationEulerX'] = _0x25877d['rot'][0x0], _0x45ee74['transform']['localRotationEulerY'] = _0x25877d['rot'][0x1], _0x45ee74['transform']['localRotationEulerZ'] = _0x25877d['rot'][0x2], _0x45ee74['transform']['localScaleX'] = _0x25877d['sca'][0x0], _0x45ee74['transform']['localScaleY'] = _0x25877d['sca'][0x1], _0x45ee74['transform']['localScaleZ'] = _0x25877d['sca'][0x2]);
                    }
                }
                for (let _0x58e4d0 = 0x0; _0x58e4d0 < _0x59d2cc['data']['home' + _0x13126d + '_process']['length']; _0x58e4d0++) {
                    let _0x5cf403 = this['home' + _0x13126d]['getChildByName']('floor' + _0x59d2cc['data']['home' + _0x13126d + '_process'][_0x58e4d0]), _0x533b73 = _0x4d9dd4[_0x59d2cc['data']['home' + _0x13126d + '_process'][_0x58e4d0] - 0x1];
                    for (let _0x4c6969 = 0x0; _0x4c6969 < _0x533b73['length']; _0x4c6969++) {
                        let _0x4935dd = _0x533b73[_0x4c6969];
                        if (0x0 !== _0x4c6969 && _0x4935dd && 'wenhao' !== _0x4935dd['name']) {
                            let _0x45028d = _0x3f5450['instantiate'](this['prefabs'][_0x4935dd['name']], _0x5cf403, !0x1, new _0x300e47(0x0, 0x0, 0x0));
                            if (_0x45028d['active'] = !0x0, _0x45028d['transform']['localPosition'] = new _0x300e47(_0x4935dd['pos'][0x0], _0x4935dd['pos'][0x1], _0x4935dd['pos'][0x2]), _0x45028d['transform']['localRotationEulerX'] = _0x4935dd['rot'][0x0], _0x45028d['transform']['localRotationEulerY'] = _0x4935dd['rot'][0x1], _0x45028d['transform']['localRotationEulerZ'] = _0x4935dd['rot'][0x2], _0x45028d['transform']['localScaleX'] = _0x4935dd['sca'][0x0], _0x45028d['transform']['localScaleY'] = _0x4935dd['sca'][0x1], _0x45028d['transform']['localScaleZ'] = _0x4935dd['sca'][0x2], 'eyu' == _0x45028d['name']) {
                                let _0x44c7c9 = _0x45028d['getChildByName']('tanhao1'), _0x575c58 = _0x45028d['getChildByName']('tanhao2'), _0x3a2adc = _0x45028d['getChildByName']('shanxing');
                                _0x44c7c9['removeSelf'](), _0x575c58['removeSelf'](), _0x3a2adc['removeSelf'](), _0x45028d['getComponent'](Laya['Animator'])['play']('run');
                            } else {
                                if ('dog2' == _0x45028d['name']) {
                                    let _0x3827bd = _0x45028d['getChildByName']('tanhao1'), _0x1914a6 = _0x45028d['getChildByName']('tanhao2'), _0x296f2e = _0x45028d['getChildByName']('shanxing');
                                    _0x3827bd['removeSelf'](), _0x1914a6['removeSelf'](), _0x296f2e['removeSelf'](), _0x45028d['getComponent'](Laya['Animator'])['play']('idle');
                                }
                            }
                        }
                    }
                }
                let _0x500ef1 = _0x4d9dd4['length'];
                for (let _0x3e5dea = 0x0; _0x3e5dea < _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]['length']; _0x3e5dea++)
                    if (_0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')][_0x3e5dea] > _0x500ef1) {
                        _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]['splice'](_0x3e5dea, 0x1), _0x59d2cc['setData']('home' + _0x13126d + ('_process_wenhao'), _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]);
                        break;
                    }
                for (let _0x1f94c7 = 0x0; _0x1f94c7 < _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]['length']; _0x1f94c7++)
                    if (_0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')][_0x1f94c7] > _0x500ef1) {
                        _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]['splice'](_0x1f94c7, 0x1), _0x59d2cc['setData']('home' + _0x13126d + ('_process_wenhao'), _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]);
                        break;
                    }
                for (let _0x312417 = 0x0; _0x312417 < _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]['length']; _0x312417++)
                    if (_0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')][_0x312417] > _0x500ef1) {
                        _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]['splice'](_0x312417, 0x1), _0x59d2cc['setData']('home' + _0x13126d + ('_process_wenhao'), _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')]);
                        break;
                    }
                let _0x580533 = _0x59d2cc['data']['home' + _0x13126d + ('_process_wenhao')];
                for (let _0xb7a016 = 0x0; _0xb7a016 < _0x580533['length']; _0xb7a016++) {
                    let _0x12218b = _0x580533[_0xb7a016], _0x1575f6 = this['home' + _0x13126d]['getChildByName']('floor' + _0x12218b), _0x4e37ba = this['getWenHaoData'](_0x4d9dd4[_0x12218b - 0x1]), _0xf7ed01 = _0x1575f6['getChildByName']('wenhao');
                    _0xf7ed01 || ((_0xf7ed01 = _0x3f5450['instantiate'](this['prefabs']['wenhao'], _0x1575f6, !0x1, new _0x300e47(0x0, 0x0, 0x0)))['active'] = !0x0, _0xf7ed01['transform']['localPosition'] = new _0x300e47(_0x4e37ba['pos'][0x0], _0x4e37ba['pos'][0x1], _0x4e37ba['pos'][0x2]), _0xf7ed01['transform']['localRotationEulerX'] = _0x4e37ba['rot'][0x0], _0xf7ed01['transform']['localRotationEulerY'] = _0x4e37ba['rot'][0x1], _0xf7ed01['transform']['localRotationEulerZ'] = _0x4e37ba['rot'][0x2], _0xf7ed01['transform']['localScaleX'] = _0x4e37ba['sca'][0x0], _0xf7ed01['transform']['localScaleY'] = _0x4e37ba['sca'][0x1], _0xf7ed01['transform']['localScaleZ'] = _0x4e37ba['sca'][0x2]);
                    let _0x13972f = new Laya['Vector4'](0x0, 0x0, 0x0);
                    this['camera']['viewport']['project'](_0xf7ed01['transform']['position'], this['camera']['projectionViewMatrix'], _0x13972f);
                    let _0x498865 = {
                            'x': _0x13972f['x'],
                            'y': _0x13972f['y']
                        }, _0x365e21 = _0x2443ee['getUI']('HomeUI');
                    console['log']('\x20\x20生成按钮\x20\x20'), _0x365e21['creatBuildBtn'](_0x498865, _0x12218b, _0x13126d);
                }
            } else
                for (let _0x259e0e = 0x0; _0x259e0e < _0x4d7811['home'][_0x13126d]['data']['length']; _0x259e0e++) {
                    let _0x2635be = this['home' + _0x13126d]['getChildByName']('floor' + (_0x259e0e + 0x1));
                    _0x2635be && _0x2635be['removeSelf']();
                }
        }
        ['scaleItemsEffect'](_0xd7d65b) {
            let _0x1b1e45 = _0xd7d65b['transform']['localScaleX'], _0x73675 = _0xd7d65b['transform']['localScaleY'], _0x5144dd = _0xd7d65b['transform']['localScaleZ'], _0x5dca2f = 1.15 * _0xd7d65b['transform']['localScaleX'], _0x352fb9 = 1.15 * _0xd7d65b['transform']['localScaleX'], _0xdee67b = 1.15 * _0xd7d65b['transform']['localScaleX'];
            _0xd7d65b['transform']['localScaleX'] = 0x0, _0xd7d65b['transform']['localScaleY'] = 0x0, _0xd7d65b['transform']['localScaleZ'] = 0x0, Laya['timer']['once'](0x1f4, this, function () {
                Laya['Tween']['to'](_0xd7d65b['transform'], {
                    'localScaleX': _0x5dca2f,
                    'localScaleY': _0x352fb9,
                    'localScaleZ': _0xdee67b
                }, 0xf0, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0xd7d65b['transform'], {
                        'localScaleX': _0x1b1e45,
                        'localScaleY': _0x73675,
                        'localScaleZ': _0x5144dd
                    }, 0xa0, null);
                }));
            });
        }
        ['build_effect'](_0x27c9e4, _0x57f06c) {
        }
        ['build'](_0x5d977d, _0x3f548b) {
            let _0x291355 = _0x4d7811['home'][_0x5d977d]['data'], _0x418c61 = this['home' + _0x5d977d]['getChildByName']('floor' + _0x3f548b), _0xfc99a9 = _0x418c61['getChildByName']('wenhao'), _0x13a9e2 = this['buildEffect'], _0x1a1512 = _0x3f5450['instantiate'](_0x13a9e2, this['home' + _0x5d977d], !0x1, new _0x300e47(_0xfc99a9['transform']['position']['x'], _0xfc99a9['transform']['position']['y'], _0xfc99a9['transform']['position']['z']));
            _0x1a1512['active'] = !0x0, Laya['timer']['once'](0x320, this, function () {
                _0x1a1512['removeSelf']();
            }), _0xfc99a9['removeSelf']();
            for (let _0x32a652 = 0x0; _0x32a652 < _0x59d2cc['data']['home' + _0x5d977d + ('_process_wenhao')]['length']; _0x32a652++)
                if (_0x59d2cc['data']['home' + _0x5d977d + ('_process_wenhao')][_0x32a652] == _0x3f548b) {
                    _0x59d2cc['data']['home' + _0x5d977d + ('_process_wenhao')]['splice'](_0x32a652, 0x1);
                    break;
                }
            _0x59d2cc['setData']('home' + _0x5d977d + ('_process_wenhao'), _0x59d2cc['data']['home' + _0x5d977d + ('_process_wenhao')]);
            let _0x5d2b3e = _0x2443ee['getUI']('HomeUI');
            if (_0x5d2b3e['removeBtn'](_0x3f548b, _0x5d977d), _0x3f548b + 0x1 <= 0x16) {
                this['home' + _0x5d977d]['getChildByName']('floor' + (_0x3f548b + 0x1));
                let _0x478be4 = _0x291355[_0x3f548b - 0x1];
                if (_0x478be4)
                    for (let _0x1b3af0 = 0x0; _0x1b3af0 < _0x478be4['length']; _0x1b3af0++) {
                        let _0x38afed = _0x478be4[_0x1b3af0];
                        if (0x0 !== _0x1b3af0 && 'wenhao' !== _0x38afed['name']) {
                            let _0x2d9ba6 = _0x3f5450['instantiate'](this['prefabs'][_0x38afed['name']], _0x418c61, !0x1, new _0x300e47(0x0, 0x0, 0x0));
                            if (_0x2d9ba6['active'] = !0x0, _0x2d9ba6['transform']['localPosition'] = new _0x300e47(_0x38afed['pos'][0x0], _0x38afed['pos'][0x1], _0x38afed['pos'][0x2]), _0x2d9ba6['transform']['localRotationEulerX'] = _0x38afed['rot'][0x0], _0x2d9ba6['transform']['localRotationEulerY'] = _0x38afed['rot'][0x1], _0x2d9ba6['transform']['localRotationEulerZ'] = _0x38afed['rot'][0x2], _0x2d9ba6['transform']['localScaleX'] = _0x38afed['sca'][0x0], _0x2d9ba6['transform']['localScaleY'] = _0x38afed['sca'][0x1], _0x2d9ba6['transform']['localScaleZ'] = _0x38afed['sca'][0x2], this['scaleItemsEffect'](_0x2d9ba6), 'eyu' == _0x2d9ba6['name']) {
                                let _0x8f6837 = _0x2d9ba6['getChildByName']('tanhao1'), _0x452cc9 = _0x2d9ba6['getChildByName']('tanhao2'), _0x4887a3 = _0x2d9ba6['getChildByName']('shanxing');
                                _0x8f6837['removeSelf'](), _0x452cc9['removeSelf'](), _0x4887a3['removeSelf']();
                                let _0x5d0446 = _0x2d9ba6['getComponent'](Laya['Animator']);
                                _0x5d0446['play']('run'), _0x5d0446['speed'] = 0.5;
                            } else {
                                if ('dog2' == _0x2d9ba6['name']) {
                                    let _0x3395b2 = _0x2d9ba6['getChildByName']('tanhao1'), _0x18a503 = _0x2d9ba6['getChildByName']('tanhao2'), _0x56d91c = _0x2d9ba6['getChildByName']('shanxing');
                                    _0x3395b2['removeSelf'](), _0x18a503['removeSelf'](), _0x56d91c['removeSelf'](), _0x2d9ba6['getComponent'](Laya['Animator'])['play']('idle');
                                }
                            }
                        }
                    }
                _0x59d2cc['data']['home' + _0x5d977d + '_process']['push'](_0x3f548b);
                let _0x36d2f1 = _0x59d2cc['data']['home' + _0x5d977d + '_process'];
                _0x59d2cc['setData']('home' + _0x5d977d + '_process', _0x36d2f1), _0x5d2b3e['upBuildProcess'](), _0x36d2f1['length'] == _0x291355['length'] && (_0x1f2936['playSound']('res/audio/success.mp3', 0x1), _0x5d2b3e['celebrate']());
            }
            let _0x10c95c = _0x59d2cc['data']['home' + _0x5d977d + '_process']['length'] + 0x3;
            if (_0x59d2cc['data']['home' + _0x5d977d + ('_process_wenhao')]['push'](_0x10c95c), _0x59d2cc['setData']('home' + _0x5d977d + ('_process_wenhao'), _0x59d2cc['data']['home' + _0x5d977d + ('_process_wenhao')]), _0x10c95c <= 0x15) {
                let _0x572c43 = this['home' + _0x5d977d]['getChildByName']('floor' + _0x10c95c);
                if (_0x291355[_0x10c95c - 0x1]) {
                    let _0x342d2c = this['getWenHaoData'](_0x291355[_0x10c95c - 0x1]), _0x160ffe = _0x3f5450['instantiate'](this['prefabs']['wenhao'], _0x572c43, !0x1, new _0x300e47(0x0, 0x0, 0x0));
                    _0x160ffe['active'] = !0x0, _0x160ffe['transform']['localPosition'] = new _0x300e47(_0x342d2c['pos'][0x0], _0x342d2c['pos'][0x1], _0x342d2c['pos'][0x2]), _0x160ffe['transform']['localRotationEulerX'] = _0x342d2c['rot'][0x0], _0x160ffe['transform']['localRotationEulerY'] = _0x342d2c['rot'][0x1], _0x160ffe['transform']['localRotationEulerZ'] = _0x342d2c['rot'][0x2], _0x160ffe['transform']['localScaleX'] = _0x342d2c['sca'][0x0], _0x160ffe['transform']['localScaleY'] = _0x342d2c['sca'][0x1], _0x160ffe['transform']['localScaleZ'] = _0x342d2c['sca'][0x2];
                    let _0x2c660e = new Laya['Vector4'](0x0, 0x0, 0x0);
                    this['camera']['viewport']['project'](_0x160ffe['transform']['position'], this['camera']['projectionViewMatrix'], _0x2c660e);
                    let _0x3b3f89 = {
                        'x': _0x2c660e['x'],
                        'y': _0x2c660e['y']
                    };
                    _0x2443ee['getUI']('HomeUI')['creatBuildBtn'](_0x3b3f89, _0x10c95c, this['page']);
                }
            }
        }
        ['moveHomeCamera'](_0x2baac0) {
            this['page'] = _0x2baac0;
            let _0x421640 = this['home_camera_target_x'][this['page'] - 0x1], _0x231533 = _0x2443ee['getUI']('HomeUI');
            _0x231533['hidebuildBtns'](!0x0), Laya['Tween']['to'](this['camera']['transform'], { 'localPositionX': _0x421640 }, 0x3e8, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                _0x231533['hidebuildBtns'](!0x1), this['resetBuildBtnPos'](0x1), this['resetBuildBtnPos'](0x2), this['resetBuildBtnPos'](0x3);
            }));
        }
        ['resetBuildBtnPos'](_0x1b0e0c) {
            for (let _0x5b5354 = 0x0; _0x5b5354 < _0x59d2cc['data']['home' + _0x1b0e0c + ('_process_wenhao')]['length']; _0x5b5354++) {
                let _0x3a45f5 = this['home' + _0x1b0e0c]['getChildByName']('floor' + _0x59d2cc['data']['home' + _0x1b0e0c + ('_process_wenhao')][_0x5b5354]);
                if (_0x3a45f5) {
                    let _0x246234 = _0x3a45f5['getChildByName']('wenhao');
                    if (_0x246234) {
                        let _0xbc43d6 = new Laya['Vector4'](0x0, 0x0, 0x0);
                        this['camera']['viewport']['project'](_0x246234['transform']['position'], this['camera']['projectionViewMatrix'], _0xbc43d6);
                        let _0x126f5c = {
                            'x': _0xbc43d6['x'],
                            'y': _0xbc43d6['y']
                        };
                        _0x2443ee['getUI']('HomeUI')['setBuildBtnByCameraMove'](_0x126f5c, _0x59d2cc['data']['home' + _0x1b0e0c + ('_process_wenhao')][_0x5b5354], _0x1b0e0c);
                    }
                }
            }
        }
        ['huifu_camera']() {
            this['camera']['transform']['position'] = new _0x300e47(this['record_camera_pos']['x'], this['record_camera_pos']['y'], this['record_camera_pos']['z']);
        }
        ['lead_cancel2']() {
            this['roadsList'][0x1]['lead_roadCanel2'](), this['roadsList'][0x2]['lead_roadCanel2'](), this['roadsList'][0x3]['lead_roadCanel2']();
        }
    }
    class _0x45196f {
        constructor(..._0x36311a) {
            this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['environmentcfg'] = this['logic']['get_environmentcfg'](), this['examplePlane'] = _0x36311a[0x0], this['pos'] = new Laya['Vector3'](this['examplePlane']['transform']['localPositionX'], this['examplePlane']['transform']['localPositionY'], this['examplePlane']['transform']['localPositionZ']), this['plane'] = Laya['Sprite3D']['instantiate'](this['examplePlane'], this['scene_all']['scene_3d'], !0x1, this['pos']), this['plane']['active'] = !0x0, this['num'] = 0x1, this['init']();
        }
        ['init']() {
            let _0x4f00ff;
            if (this['userInfo'] = this['logic']['getUserInfo'](), (_0x4f00ff = this['userInfo']['encironment']) || (_0x4f00ff = 0x1), this['environmentcfg'] || (this['environmentcfg'] = this['logic']['load_environmentcfg']()), this['environmentcfg'][_0x4f00ff]) {
                let _0x30cee2 = this['environmentcfg'][_0x4f00ff]['plane']['color'];
                this['plane'] && this['plane']['meshRenderer'] && (this['plane']['meshRenderer']['materials'][0x0]['albedoColor'] = new Laya['Vector4'](_0x30cee2[0x0] / 0xff, _0x30cee2[0x1] / 0xff, _0x30cee2[0x2] / 0xff, _0x30cee2[0x3] / 0xff));
            }
        }
    }
    class _0x4280be {
        constructor() {
            this['scene_all'] = {
                'cls': null,
                'scene_3d': null,
                'terrain': null,
                'environment': null,
                'camera': null,
                'light': null,
                'plane': null,
                'road_1': null,
                'road_2': null,
                'arrow': null,
                'car': null,
                'centerPos': null,
                'merge_effect': null,
                'coin': null,
                'reqiqiu': null,
                'home1': null,
                'home2': null,
                'home3': null,
                'prefabs': null,
                'buildEffect': null,
                'endPoint2D': null
            }, this['color_Num'] = 0x0;
        }
        static ['GetInstance']() {
            return this['Instance'] || (this['Instance'] = new _0x4280be()), this['Instance'];
        }
        ['init_Scene']() {
            this['logic'] = _0x161787['getInstance'](), this['levelCfg'] = this['logic']['getLevelCfg'](), this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['playtimes'] += 0x1, this['userInfo']['doubletime'] = 0x0;
            let _0x2846e6 = this;
            _0x2846e6['scene_all']['scene_3d'] || (_0x2846e6['scene_all']['scene_3d'] = new Laya['Scene3D'](), Laya['stage']['addChildAt'](_0x2846e6['scene_all']['scene_3d'], 0x0), _0x142a9a['GetInstance']()['load'](_0x1a3086['SCENEURL'], function (_0x35d7cb) {
                _0x2846e6['closeLoading']();
                let _0x2f0c30 = _0x35d7cb['getChildByName']('centerPoint');
                _0x2846e6['scene_all']['centerPos'] = _0x2f0c30['transform']['position'], _0x2846e6['scene_all']['terrain'] = _0x35d7cb;
                let _0x409486 = _0x35d7cb['getChildByName']('Plane');
                _0x2846e6['scene_all']['plane'] = new _0x45196f(_0x409486);
                let _0xefda6b = _0x35d7cb['getChildByName']('Main\x20Camera');
                _0xefda6b['enableHDR'] = !0x1, _0x2846e6['scene_all']['camera'] = _0xefda6b, _0x2846e6['scene_all']['scene_3d']['addChild'](_0x2846e6['scene_all']['camera']), _0x2846e6['scene_all']['camera']['addComponent'](_0x510c79);
                let _0x504129 = _0x35d7cb['getChildByName']('Directional\x20Light');
                _0x2846e6['scene_all']['light'] = _0x504129, _0x2846e6['scene_all']['scene_3d']['addChild'](_0x2846e6['scene_all']['light']), _0x2846e6['scene_all']['road_1'] = _0x35d7cb['getChildByName']('road_1'), _0x2846e6['scene_all']['road_2'] = _0x35d7cb['getChildByName']('road_2'), _0x2846e6['scene_all']['arrow'] = _0x35d7cb['getChildByName']('arrow'), _0x2846e6['scene_all']['car'] = _0x35d7cb['getChildByName']('car1'), _0x2846e6['scene_all']['coin'] = _0x35d7cb['getChildByName']('coin'), _0x2846e6['scene_all']['reqiqiu'] = _0x35d7cb['getChildByName']('reqiqiu'), _0x2846e6['scene_all']['endPoint2D'] = _0x35d7cb['getChildByName']('endPoint2D'), _0x2846e6['scene_all']['endPoint2D']['active'] = !0x1, _0x2846e6['scene_all']['scene_3d']['addChild'](_0x2846e6['scene_all']['endPoint2D']), _0x2846e6['scene_all']['merge_effect'] = _0x35d7cb['getChildByName']('merge_effect'), _0x2846e6['scene_all']['merge_effect']['active'] = !0x1, _0x2846e6['scene_all']['scene_3d']['addChild'](_0x2846e6['scene_all']['merge_effect']), _0x2846e6['scene_all']['buildEffect'] = _0x35d7cb['getChildByName']('buildEffect'), _0x2846e6['scene_all']['buildEffect']['active'] = !0x1, _0x2846e6['scene_all']['cls'] = new _0x4665e2(_0x2846e6['scene_all']['road_1'], _0x2846e6['scene_all']['road_2'], _0x2846e6['scene_all'], _0x2846e6['userInfo']['level']);
            }));
        }
        ['closeLoading']() {
            Laya['Browser']['window']['pauseTimes'](), Laya['stage']['getChildByName']('LoadUIImg') && (Laya['stage']['getChildByName']('LoadUIImg')['destroy'](), setTimeout(() => {
                _0x2443ee['getInstance']()['gameStart']();
            }, 0x1f4));
        }
        ['showAirBalloon']() {
            this['scene_all']['cls'] && this['scene_all']['cls']['showAirBalloon']();
        }
        ['setStartRoad']() {
            this['scene_all']['cls']['setStartRoad']();
        }
        ['setcar']() {
            this['scene_all']['cls']['setcar']();
        }
        ['setNowCar'](_0x3a03da) {
            this['scene_all']['cls'] && this['scene_all']['cls']['setNowCar'](_0x3a03da);
        }
        ['showArrow']() {
            this['scene_all']['cls'] && this['scene_all']['cls']['showArrow']();
        }
        ['cancelAllRoute']() {
            this['scene_all']['cls'] && this['scene_all']['cls']['cancelAllRoute']();
        }
        ['playMergeEffect']() {
            this['scene_all']['merge_effect']['active'] = !0x1, this['scene_all']['merge_effect']['transform']['position'] = new Laya['Vector3'](this['scene_all']['cls']['look_point']['x'], this['scene_all']['cls']['look_point']['y'], this['scene_all']['cls']['look_point']['z']), this['scene_all']['merge_effect']['active'] = !0x0;
        }
        ['carChangePosFollowRoad'](_0x67d2f0, _0x9e11c6, _0x2763ba, _0x1b752e, _0x31ebfa, _0x3d1cb2) {
            this['scene_all']['cls']['carChangePosFollowRoad'](_0x67d2f0, _0x9e11c6, _0x2763ba, _0x1b752e, _0x31ebfa, _0x3d1cb2);
        }
        ['chestChangePosFollowRoad'](_0x29cf2e, _0x17ae82, _0x1bc1b6, _0x1fe52f, _0x83bb9f, _0x23c7bd) {
            this['scene_all']['cls']['chestChangePosFollowRoad'](_0x29cf2e, _0x17ae82, _0x1bc1b6, _0x1fe52f, _0x83bb9f, _0x23c7bd);
        }
        ['coinChangePosFollowRoad'](_0x243fb0, _0x860dda, _0x3d58da, _0x1dc7d2, _0xd2e10e, _0x4bdf94, _0x3f2ea0) {
            this['scene_all']['cls']['coinChangePosFollowRoad'](_0x243fb0, _0x860dda, _0x3d58da, _0x1dc7d2, _0xd2e10e, _0x4bdf94, _0x3f2ea0);
        }
        ['clearLastLevel']() {
            this['scene_all']['cls'] && (this['scene_all']['endPoint2D']['active'] = !0x1, this['scene_all']['cls']['clearLastLevel'](), _0x1a3086['ISLOADALL'] = !0x1);
        }
        ['nextLevel'](..._0x6af2d1) {
            _0x1a3086['ISLOADALL'] || (_0x1a3086['READY'] = !0x1, _0x1a3086['ISLOADALL'] = !0x0, _0x6af2d1[0x0] || (_0x1a3086['ISREST'] = !0x1, this['levelCfg'] = this['logic']['getLevelCfg'](), this['userInfo'] = this['logic']['getUserInfo'](), this['color_Num'] += 0x1, this['color_Num'] % 0x5 == 0x0 && this['userInfo']['chooseLevel'] > 0x5 ? (this['userInfo']['encironment'] >= _0x1a3086['SCENENUM'] ? this['userInfo']['encironment'] = 0x1 : this['userInfo']['encironment'] += 0x1, this['color_Num'] = 0x0) : this['userInfo']['chooseLevel'] <= 0x5 ? this['userInfo']['encironment'] = 0x1 : 0x6 == this['userInfo']['chooseLevel'] && (this['userInfo']['encironment'] = 0x2), this['scene_all']['plane']['init']()), this['scene_all']['cls']['init'](), _0x1a3086['IS_SHOW_UNLOCKUI'] = !0x1);
        }
        ['chooseLevel']() {
            _0x1a3086['READY'] = !0x1, this['levelCfg'] = this['logic']['getLevelCfg'](), this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['chooseLevel'] <= 0x5 ? this['userInfo']['encironment'] = 0x1 : this['userInfo']['chooseLevel'] % 0x5 == 0x0 ? this['userInfo']['encironment'] = Math['floor'](this['userInfo']['chooseLevel'] / 0x5) : this['userInfo']['encironment'] = Math['floor'](this['userInfo']['chooseLevel'] / 0x5) + 0x1, this['userInfo']['level'] < 0x5 ? this['color_Num'] = this['userInfo']['level'] - 0x1 : this['userInfo']['level'] % 0x5 == 0x0 ? this['color_Num'] = 0x0 : this['color_Num'] = this['userInfo']['chooseLevel'] % 0x5, this['scene_all']['cls']['init'](), this['scene_all']['plane']['init']();
        }
        ['setInitAll']() {
            this['userInfo']['chooseLevel'] % 0x2 == 0x0 && 0x2 != this['userInfo']['chooseLevel'] ? this['userInfo']['encironment'] < _0x1a3086['SCENENUM'] ? this['userInfo']['encironment'] += 0x1 : this['userInfo']['encironment'] == _0x1a3086['SCENENUM'] && (this['userInfo']['encironment'] = 0x1) : this['userInfo']['chooseLevel'] <= 0x2 ? this['userInfo']['encironment'] = 0x1 : this['userInfo']['encironment'] = Math['floor'](this['userInfo']['chooseLevel'] / 0x2) + 0x1, this['scene_all']['cls']['init'](), this['scene_all']['plane']['init']();
        }
        ['getScene_all']() {
            return this['scene_all'];
        }
        ['setGroupPos'](..._0x29cef0) {
        }
        ['clearGroup']() {
        }
        ['showHomeScene'](..._0x25a96e) {
            this['scene_all']['cls']['showHomeScene'](..._0x25a96e);
        }
        ['moveHomeCamera'](..._0x42de42) {
            this['scene_all']['cls']['moveHomeCamera'](..._0x42de42);
        }
        ['build'](..._0x444f89) {
            this['scene_all']['cls']['build'](..._0x444f89);
        }
        ['build_effect'](..._0x2a2963) {
            this['scene_all']['cls']['build_effect'](..._0x2a2963);
        }
        ['huifu_camera']() {
            this['scene_all']['cls']['huifu_camera']();
        }
        ['homeLight']() {
            this['scene_all']['light']['transform']['localRotationEulerX'] = -0x60, this['scene_all']['light']['transform']['localRotationEulerY'] = -0x9f, this['scene_all']['light']['transform']['localRotationEulerZ'] = -0x2;
        }
        ['mainSceneLight']() {
            this['scene_all']['light']['transform']['localRotationEulerX'] = -0x32, this['scene_all']['light']['transform']['localRotationEulerY'] = -0x96, this['scene_all']['light']['transform']['localRotationEulerZ'] = 0x0;
        }
    }
    class _0x229a8a {
        static ['inOrNot'](_0x3789aa, _0x28278c, _0x59fc7d, _0x33a650) {
            let _0x170daf = new Laya['Vector2'](_0x3789aa['x'] - _0x33a650['x'], _0x3789aa['y'] - _0x33a650['y']), _0x4a92e9 = new Laya['Vector2'](_0x28278c['x'] - _0x33a650['x'], _0x28278c['y'] - _0x33a650['y']), _0x11389e = new Laya['Vector2'](_0x59fc7d['x'] - _0x33a650['x'], _0x59fc7d['y'] - _0x33a650['y']), _0xe90858 = _0x170daf['x'] * _0x4a92e9['y'] - _0x170daf['y'] * _0x4a92e9['x'], _0x5cd03e = _0x4a92e9['x'] * _0x11389e['y'] - _0x4a92e9['y'] * _0x11389e['x'], _0x313cfe = _0x11389e['x'] * _0x170daf['y'] - _0x11389e['y'] * _0x170daf['x'];
            return _0xe90858 * _0x5cd03e >= 0x0 && _0x5cd03e * _0x313cfe >= 0x0;
        }
        static ['RandomFromArr'](..._0x4050e1) {
            let _0x4e800f = _0x4050e1[0x0], _0x1ecbb9 = _0x4050e1[0x1], _0x18c7ec = _0x4050e1[0x2], _0x3bf714 = _0x4050e1[0x3], _0x3d1b86 = [];
            for (; _0x3d1b86['length'] < _0x1ecbb9;) {
                var _0x560d64 = _0x4e800f[Math['round'](Math['random']() * (_0x4e800f['length'] - 0x1))];
                _0x3bf714 ? -0x1 === _0x3d1b86['indexOf'](_0x560d64) && _0x560d64 !== _0x18c7ec && _0x560d64 !== _0x3bf714 && _0x3d1b86['push'](_0x560d64) : -0x1 === _0x3d1b86['indexOf'](_0x560d64) && _0x560d64 !== _0x18c7ec && _0x3d1b86['push'](_0x560d64);
            }
            return 0x1 == _0x1ecbb9 && _0x3d1b86[0x0] || _0x3d1b86;
        }
        static ['Cos'](_0x481c37) {
            return Math['cos'](_0x481c37 * (Math['PI'] / 0xb4));
        }
        static ['Sin'](_0x544b36) {
            return Math['sin'](_0x544b36 * (Math['PI'] / 0xb4));
        }
        static ['Tan'](_0x21a1a3) {
            return Math['tan'](_0x21a1a3 * (Math['PI'] / 0xb4));
        }
        static ['GetCirlePoint'](..._0x502dde) {
            let _0xf0bb23 = _0x502dde[0x0], _0x3f9f8d = _0x502dde[0x1], _0x2f29d0 = _0x502dde[0x2], _0xe6cd3f = _0x502dde[0x3], _0x1392d7 = 0x0, _0x206d90 = [], _0x806ce3 = Math['PI'] / 0xb4 * Math['round'](0x168 / _0xe6cd3f);
            for (; _0x1392d7 < _0xe6cd3f; _0x1392d7++) {
                let _0x4bd4f7 = _0x3f9f8d + _0xf0bb23 * Math['sin'](_0x806ce3 * _0x1392d7), _0x4644db = _0x2f29d0 + _0xf0bb23 * Math['cos'](_0x806ce3 * _0x1392d7);
                _0x206d90['push']({
                    'x': _0x4bd4f7,
                    'y': _0x4644db
                });
            }
            return _0x206d90;
        }
        static ['GetXiaoShu'](_0x461857) {
            return _0x461857 % 0x1;
        }
        static ['GetZhengShu'](_0x30a72d) {
            return _0x30a72d - _0x30a72d % 0x1;
        }
        static ['GetAfterPointOne'](_0x1938e7) {
            return _0x1938e7['toFixed'](0x1);
        }
        static ['GetAfterPointTwo'](_0x6862ed) {
            return _0x6862ed['toFixed'](0x2);
        }
        static ['SortObject'](_0xcc0469, _0x136e54) {
            return Object['keys'](_0xcc0469)['sort']((_0x386bc6, _0xb66e37) => _0xcc0469[_0xb66e37][_0x136e54] - _0xcc0469[_0x386bc6][_0x136e54]);
        }
        static ['SortObject2'](_0x19b77a, _0x24d46f) {
            return Object['keys'](_0x19b77a)['sort']((_0x54a9f8, _0x107755) => _0x19b77a[_0x54a9f8][_0x24d46f] - _0x19b77a[_0x107755][_0x24d46f]);
        }
        static ['twoBsr'](_0x5e5b35, _0x37d153, _0x814b39, _0x4b9ebc) {
            return {
                'x': (0x1 - _0x5e5b35) * (0x1 - _0x5e5b35) * _0x37d153['x'] + 0x2 * _0x5e5b35 * (0x1 - _0x5e5b35) * _0x814b39['x'] + _0x5e5b35 * _0x5e5b35 * _0x4b9ebc['x'],
                'y': (0x1 - _0x5e5b35) * (0x1 - _0x5e5b35) * _0x37d153['y'] + 0x2 * _0x5e5b35 * (0x1 - _0x5e5b35) * _0x814b39['y'] + _0x5e5b35 * _0x5e5b35 * _0x4b9ebc['y']
            };
        }
        static ['threeBsr'](_0x51a5ef, _0x23c7c0, _0x57f207, _0x5e545e, _0x3d1c02) {
            return {
                'x': _0x23c7c0['x'] * (0x1 - _0x51a5ef) * (0x1 - _0x51a5ef) * (0x1 - _0x51a5ef) + 0x3 * _0x57f207['x'] * _0x51a5ef * (0x1 - _0x51a5ef) * (0x1 - _0x51a5ef) + 0x3 * _0x5e545e['x'] * _0x51a5ef * _0x51a5ef * (0x1 - _0x51a5ef) + _0x3d1c02['x'] * _0x51a5ef * _0x51a5ef * _0x51a5ef,
                'y': _0x23c7c0['y'] * (0x1 - _0x51a5ef) * (0x1 - _0x51a5ef) * (0x1 - _0x51a5ef) + 0x3 * _0x57f207['y'] * _0x51a5ef * (0x1 - _0x51a5ef) * (0x1 - _0x51a5ef) + 0x3 * _0x5e545e['y'] * _0x51a5ef * _0x51a5ef * (0x1 - _0x51a5ef) + _0x3d1c02['y'] * _0x51a5ef * _0x51a5ef * _0x51a5ef
            };
        }
        static ['getNowHaoMiao']() {
            return Date['parse'](new Date()['toString']());
        }
        static ['IsPointInCircularSector'](_0x11c904, _0x5b4ca7, _0x13d67b, _0x5bfb66, _0x2c8696, _0x180794, _0x442164, _0x3e3003) {
            let _0x4bd2b2 = _0x442164 - _0x11c904, _0xfff4be = _0x3e3003 - _0x5b4ca7, _0x261e3e = Math['sqrt'](_0x4bd2b2 * _0x4bd2b2 + _0xfff4be * _0xfff4be);
            return !(_0x261e3e > _0x2c8696) && (_0x4bd2b2 /= _0x261e3e, _0xfff4be /= _0x261e3e, Math['acos'](_0x4bd2b2 * _0x13d67b + _0xfff4be * _0x5bfb66) < _0x180794);
        }
        static ['findChild'](_0x5d6987, _0x43327f) {
            return _0x5d6987['name'] == _0x43327f ? _0x5d6987 : _0x229a8a['_findChild'](_0x5d6987['_children'], _0x43327f);
        }
        static ['_findChild'](_0x4c7f1c, _0x548d3f) {
            for (var _0x5bbcb9 = [], _0x5a445f = 0x0; _0x5a445f < _0x4c7f1c['length']; _0x5a445f++) {
                var _0x39b09c = _0x4c7f1c[_0x5a445f];
                if (_0x39b09c['name'] == _0x548d3f)
                    return _0x39b09c;
                _0x39b09c['numChildren'] && (_0x5bbcb9 = _0x5bbcb9['concat'](_0x39b09c['_children']));
            }
            return _0x5bbcb9['length'] ? _0x229a8a['_findChild'](_0x5bbcb9, _0x548d3f) : null;
        }
        static ['angle'](_0x47028a, _0x760724) {
            let _0x41de9d = _0x47028a['x'] * _0x760724['y'] - _0x760724['x'] * _0x47028a['y'], _0x4378af = _0x47028a['x'] * _0x760724['x'] + _0x47028a['y'] * _0x760724['y'];
            return Math['atan2'](_0x41de9d, _0x4378af) * (0xb4 / Math['PI']);
        }
        static ['angleBetweenX'](_0x1498f8, _0x95e676) {
            return Math['atan2'](_0x1498f8, _0x95e676) * (0xb4 / Math['PI']);
        }
        static ['getNumbersByWeishu'](_0xf3ed75) {
            return _0xf3ed75 >= 0x3e8 && _0xf3ed75 < 0x2710 ? [
                (_0xf3ed75 - _0xf3ed75 % 0x3e8) / 0x3e8,
                (_0xf3ed75 % 0x3e8 - _0xf3ed75 % 0x3e8 % 0x64) / 0x64,
                Math['floor'](_0xf3ed75 % 0x64 / 0xa),
                _0xf3ed75 % 0xa
            ] : _0xf3ed75 >= 0x64 && _0xf3ed75 < 0x3e8 ? [
                (_0xf3ed75 - _0xf3ed75 % 0x64) / 0x64,
                (_0xf3ed75 % 0x64 - _0xf3ed75 % 0xa) / 0xa,
                _0xf3ed75 % 0xa
            ] : _0xf3ed75 >= 0xa && _0xf3ed75 < 0x64 ? [
                (_0xf3ed75 - _0xf3ed75 % 0xa) / 0xa,
                _0xf3ed75 % 0xa
            ] : _0xf3ed75 < 0xa ? _0xf3ed75 : void 0x0;
        }
    }
    class _0x31c0d5 extends _0x41fc2f {
        constructor(_0x58a57b) {
            super(), this['coinNumber'] = 0x64, this['mask_low'] = 0x185, this['mask_high'] = 0xe3, this['countY'] = 0x0, this['carY'] = 0x27, _0x31c0d5['ins'] = this, _0x31c0d5['index'] = 0x0, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['Scene_all'] = _0x4280be['GetInstance']()['getScene_all']();
            let _0x593cb2 = this;
            this['ui'] = _0x58a57b, this['ui']['visible'] = !0x1, this['title'] = this['ui']['getChildByName']('title'), this['nextBtn'] = this['ui']['getChildByName']('nextBtn'), this['doubleBtn'] = this['ui']['getChildByName']('doubleBtn'), this['ad_Icon'] = this['doubleBtn']['getChildByName']('icon'), this['ad_Icon']['visible'] = !0x1, this['shareBtn'] = this['ui']['getChildByName']('shareBtn'), this['goBtn'] = this['ui']['getChildByName']('goBtn'), this['levelText'] = this['title']['getChildByName']('levelText'), this['nextBtn']['visible'] = !0x1, this['faterbg'] = this['ui']['getChildByName']('fater'), this['sihouetteEffect'] = this['ui']['getChildByName']('sihouetteEffect'), this['sihouette'] = this['ui']['getChildByName']('sihouette'), this['sihouetteFill'] = this['sihouetteEffect']['getChildByName']('sihouetteFill'), this['sihouetteMask'] = this['sihouetteEffect']['mask'], this['progressText'] = this['ui']['getChildByName']('progressText'), this['unlockText'] = this['ui']['getChildByName']('unlockText'), this['unlockText_text'] = this['unlockText']['getChildByName']('text'), this['unlockText_text']['visible'] = !0x0, this['unlockText_unlockText'] = this['unlockText']['getChildByName']('unlockText'), this['unlockText_unlockText']['visible'] = !0x1, this['unlockText_num'] = this['unlockText']['getChildByName']('num'), this['sihouetteMask']['y'] = this['mask_low'], this['progressText']['text'] = '0%', this['light'] = this['ui']['getChildByName']('light'), this['shareBtn']['visible'] = !0x1, this['ADV'] = this['ui']['getChildByName']('ADV'), this['nextBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                console.log("请求插屏广告");

                // 展示插屏广告
                HUHU_showInterstitialAd();
                _0x593cb2['nextBtnClick']();
                // YYGGames['showInterstitial'](() => {
                //     _0x593cb2['nextBtnClick']();
                // });
            }), this['goBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                userExport['ControllerOnOff']['WuChuClick']('reward', _0x31c0d5['index'], this['goBtn']) || this['playBtnEffect'](this['goBtn'], function () {
                    _0x593cb2['playBtnSound'](), _0x593cb2['nextBtnClick']();
                }), _0x31c0d5['index']++;
            }), this['doubleBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['doubleBtn'], function () {
                    _0x593cb2['playBtnSound'](), _0x593cb2['getDouble']();
                });
            }), this['shareBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['shareBtn'], function () {
                    _0x593cb2['playBtnSound'](), _0x593cb2['getDouble']();
                });
            }), Laya['timer']['loop'](0x64, this, function () {
                this['update']();
            });
        }
        ['setBtn']() {
            this['goBtn']['y'] = this['countY'];
        }
        ['update']() {
            let _0x5e9e02 = this['goBtn']['y'];
            console['log'](), this['shareBtn']['y'] = _0x5e9e02;
        }
        ['nextBtnClick']() {
            if (_0x2443ee['hide']('endUI'), this['chekSkin'](), this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['level'] >= _0x2c206a['getchaPingUnlock']() && (this['userInfo']['chooseLevel'], _0x2c206a['getchaPingTime']()), this['userInfo']['chooseLevel'] < this['userInfo']['level'] ? this['userInfo']['chooseLevel'] >= 0xc8 ? this['userInfo']['chooseLevel'] = 0x1 : this['userInfo']['chooseLevel'] += 0x1 : this['userInfo']['level'] >= 0xc8 ? this['userInfo']['level'] = 0x1 : (this['userInfo']['level'] += 0x1, this['userInfo']['chooseLevel'] = this['userInfo']['level']), this['userInfo']['level'] >= _0x2c206a['getSignUnlock']()) {
                let _0x3771f5 = new Date();
                _0x59d2cc['data']['today_data'] != _0x3771f5['getDate']() ? _0x2443ee['show']('SignUI') : (_0x4280be['GetInstance']()['nextLevel'](), _0x2443ee['show']('startUI'));
            } else
                _0x4280be['GetInstance']()['nextLevel'](), _0x2443ee['show']('startUI');
        }
        ['showLevelText']() {
        }
        ['share']() {
            _0x2c206a['share']({
                'success': function () {
                },
                'fail': function () {
                }
            });
        }
        ['getDouble']() {
            let _0x341355 = this;
            this['ad_Icon']['visible'] ? YYGGames['showReward'](() => {
                _0x341355['SccessCallBack']();
            }) : _0x341355['SccessCallBack']();
        }
        ['SccessCallBack']() {
            let _0x9caeab = this;
            _0x9caeab['userInfo']['doubletime'] += 0x1, _0x9caeab['doubleBtn']['visible'] = !0x1;
            for (let _0x4b1295 = 0x1; _0x4b1295 <= 0x14; _0x4b1295++)
                Laya['loader']['create']('perfab/coin.prefab', Laya['Handler']['create'](_0x9caeab, function (_0x16760a) {
                    let _0x39d504 = _0x16760a['create']();
                    _0x39d504['name'] = 'tigger_coin' + _0x4b1295, _0x9caeab['ui']['addChild'](_0x39d504), _0x39d504['pos'](0x1e6 + 0x1cc * Math['random']() - 0xe6, 0x36e + 0x21c * Math['random']() - 0xc8);
                }));
            setTimeout(() => {
                for (let _0x52c2fd = 0x1; _0x52c2fd <= 0x14; _0x52c2fd++) {
                    let _0x451dca = _0x9caeab['ui']['getChildByName']('tigger_coin' + _0x52c2fd);
                    Laya['Tween']['to'](_0x451dca, {
                        'scaleX': 0x1,
                        'scaleY': 0x1,
                        'x': 0x1b8,
                        'y': 0xb4
                    }, 0x15e + 0xa * _0x52c2fd, null, Laya['Handler']['create'](_0x9caeab, function () {
                        _0x451dca['removeSelf'](), 0x14 == _0x52c2fd && (this['ad_Icon']['visible'] ? _0x9caeab['logic']['addCoins'](0x2 * this['coinNumber']) : _0x9caeab['logic']['addCoins'](0x1 * this['coinNumber']), _0x9caeab['nextBtnClick']());
                    }));
                }
            }, 0xc8);
        }
        ['chekSkin']() {
            this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['carAd_times'][this['id']] > 0x0 && (this['userInfo']['now_car_id'] = this['userInfo']['last_car_id'], _0x4280be['GetInstance']()['setNowCar'](this['userInfo']['now_car_id']));
        }
        ['addCar3D']() {
            let _0x2f532c = this, _0x4311b2 = this['Scene_all']['terrain'];
            if (this['scene_3d']) {
                this['carMoudle'] && (this['carMoudle']['destroy'](), this['carMoudle']['removeSelf']());
                let _0xaeaabf = (this['userInfo']['now_car_id'] + 0x1)['toString'](), _0x13274b = _0x4311b2['getChildByName']('car' + _0xaeaabf);
                this['carMoudle'] = Laya['Sprite3D']['instantiate'](_0x13274b, _0x2f532c['scene_3d'], !0x1, new Laya['Vector3'](0x50, this['carY'], 0x3c)), this['carMoudle']['transform']['localRotationEulerZ'] = -0x5, this['carMoudle']['active'] = !0x0, this['scene_3d']['addChild'](this['carMoudle']);
            } else {
                this['scene_3d'] = new Laya['Scene3D']();
                let _0x201b4d = this['Scene_all']['camera'], _0x773711 = (this['Scene_all']['light'], Laya['Sprite3D']['instantiate'](_0x201b4d, _0x2f532c['scene_3d'], !0x1, new Laya['Vector3'](0xb4, 0x28, 0x3c)));
                _0x773711['transform']['localRotationEuler'] = new Laya['Vector3'](0x0, 0x5a, 0x0), _0x773711['clearFlag'] = Laya['BaseCamera']['CLEARFLAG_DEPTHONLY'];
                let _0x4284cb = new Laya['DirectionLight']();
                if (_0x4284cb['transform']['localRotationEulerX'] = 0x0, _0x4284cb['transform']['localRotationEulerY'] = 0x32, _0x4284cb['transform']['localRotationEulerZ'] = 0x0, _0x2f532c['scene_3d']['addChild'](_0x773711), _0x2f532c['scene_3d']['addChild'](_0x4284cb), _0x2f532c['ui']['addChild'](_0x2f532c['scene_3d']), _0x4311b2) {
                    this['userInfo'] = this['logic']['getUserInfo']();
                    let _0x2c3277 = (this['userInfo']['now_car_id'] + 0x1)['toString'](), _0x2b58b0 = _0x4311b2['getChildByName']('car' + _0x2c3277);
                    this['carMoudle'] = Laya['Sprite3D']['instantiate'](_0x2b58b0, _0x2f532c['scene_3d'], !0x1, new Laya['Vector3'](_0x2b58b0['transform']['localPositionX'], this['carY'], _0x2b58b0['transform']['localPositionZ'])), this['carMoudle']['transform']['localRotationEulerZ'] = -0x5, this['carMoudle']['active'] = !0x0, _0x2f532c['scene_3d']['addChild'](this['carMoudle']), Laya['loader']['create']('perfab/tree.json', Laya['Handler']['create'](this, function (_0x18f679) {
                        let _0x57e07b = new Laya['Prefab']();
                        _0x57e07b['json'] = _0x18f679, _0x2f532c['tree'] = Laya['Pool']['getItemByCreateFun']('tree', _0x57e07b['create'], _0x57e07b), _0x2f532c['ui']['addChild'](_0x2f532c['tree']), _0x2f532c['tree']['pos'](0x135, 0x23a), _0x2f532c['tree']['x'];
                        let _0x1618fe = (0x238 - _0x2f532c['tree']['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                        _0x2f532c['tree']['y'] = Laya['stage']['height'] / 0x2 - _0x1618fe;
                    }));
                }
            }
        }
        ['show_sihouetteEffect']() {
            let _0x5907f5 = this['mask_low'] - this['mask_high'];
            this['userInfo'] = this['logic']['getUserInfo']();
            let _0xc5ba7d = this['logic']['getUnLockCarLevel'](this['userInfo']['level']), _0x105fe6 = _0xc5ba7d[0x0], _0x330362 = _0xc5ba7d[0x1], _0x4d6b3e = _0x330362 - this['userInfo']['level'];
            this['userInfo']['chooseLevel'] < this['userInfo']['level'] ? (this['unlockText_num']['visible'] = !0x1, this['unlockText_text']['visible'] = !0x1, this['unlockText_unlockText']['visible'] = !0x1, this['unlockText_unlockText']['text'] = 'Continue\x20to\x20unlock') : _0x4d6b3e <= 0x0 ? (this['unlockText_num']['visible'] = !0x1, this['unlockText_text']['visible'] = !0x1, this['unlockText_unlockText']['visible'] = !0x1, this['unlockText_unlockText']['text'] = 'Congrats\x20on\x20unlocking\x20the\x20new\x20car') : (this['unlockText_num']['visible'] = !0x0, this['unlockText_text']['visible'] = !0x0, this['unlockText_unlockText']['visible'] = !0x1);
            let _0x3ea142 = _0xc5ba7d[0x2];
            this['sihouette']['skin'] = 'comp/carIcon/silhouette' + (_0x3ea142 + 0x1)['toString']() + '.png', this['sihouetteFill']['skin'] = 'comp/carIcon/car' + (_0x3ea142 + 0x1)['toString']() + '.png', this['logic']['chekCarIsDone'](_0x3ea142);
            let _0x487692, _0x56b30f, _0x31e47f, _0x181182 = this['userInfo']['chooseLevel'] - 0x1;
            _0x181182 == _0x105fe6 ? (this['sihouetteMask']['y'] = this['mask_low'], _0x487692 = 0x0, this['progressText']['text'] = '0%') : (_0x56b30f = (_0x487692 = (_0x181182 - _0x105fe6) / (_0x330362 - _0x105fe6)) * _0x5907f5, _0x31e47f = this['mask_low'] - _0x56b30f, this['sihouetteMask']['y'] = _0x31e47f, this['progressText']['text'] = Math['floor'](0x64 * _0x487692)['toString']() + '%');
            let _0x227f71 = (this['userInfo']['level'] - _0x105fe6) / (_0x330362 - _0x105fe6), _0x387643 = _0x227f71 * _0x5907f5, _0x18155b = this['mask_low'] - _0x387643;
            for (let _0xe12de5 = 0x0; _0xe12de5 < 0x3; _0xe12de5++)
                this['sihouette']['scale'](0x1, 0x1), setTimeout(() => {
                    Laya['Tween']['to'](this['sihouette'], {
                        'scaleX': 1.2,
                        'scaleY': 1.2
                    }, 0x1f4, null, Laya['Handler']['create'](this, () => {
                        Laya['Tween']['to'](this['sihouette'], {
                            'scaleX': 0x1,
                            'scaleY': 0x1
                        }, 0x1f4, null, Laya['Handler']['create'](this, () => {
                        }));
                    })), Laya['Tween']['to'](this['sihouetteFill'], {
                        'scaleX': 1.2,
                        'scaleY': 1.2
                    }, 0x1f4, null, Laya['Handler']['create'](this, () => {
                        Laya['Tween']['to'](this['sihouetteFill'], {
                            'scaleX': 0x1,
                            'scaleY': 0x1
                        }, 0x1f4, null, Laya['Handler']['create'](this, () => {
                        }));
                    }));
                }, 0x1f4 * _0xe12de5);
            Laya['Tween']['to'](this['sihouetteMask'], { 'y': _0x18155b }, 0x3e8, null, Laya['Handler']['create'](this, () => {
                this['progressText']['text'] = Math['floor'](0x64 * _0x227f71)['toString']() + '%';
            }));
        }
        ['hide']() {
            _0x2c206a['hideBannerAndNeiLian'](this['userInfo']['level']), this['nextBtn']['visible'] = !0x0, this['logic']['addCoins'](this['coinNumber']);
        }
        ['show']() {
            let _0x27dbe8 = this;
            this['userInfo'] = this['logic']['getUserInfo'](), this['IsVideo'] = _0x2c206a['getshareOrVideo'](this['userInfo']['level']), this['goBtn']['visible'] = !0x1, this['doubleBtn']['visible'] = !0x1, this['nextBtn']['visible'] = !0x0, this['shareBtn']['visible'] = !0x1, (this['IsVideo'] ? this['ad_Icon']['skin'] = 'comp/EndUI/video.png' : this['ad_Icon']['skin'] = 'comp/share.png', _0x4280be['GetInstance']()['clearLastLevel'](), _0x4280be['GetInstance']()['clearGroup'](), this['userInfo']['chooseLevel'] > 0x1 ? _0x1a3086['IS_SHOW_UNLOCKUI'] || (this['progressText']['fontSize'] = 0x2d, this['show_sihouetteEffect'](), _0x1a3086['IS_SHOW_UNLOCKUI'] = !0x0) : (this['progressText']['fontSize'] = 0x1e, this['progressText']['text'] = ''));
            let _0x3e9649, _0x5bc66b, _0x3228ad, _0xdc0021 = this['userInfo']['chooseLevel'] % _0x2c206a['getListLengh'](), _0x72b2ae = _0x2c206a['getEndList']();
            _0x3e9649 = 0x0 == _0xdc0021 ? 0x1 : _0x72b2ae[_0xdc0021 - 0x1], _0x5bc66b = 0x5dc, _0x3228ad = 0x6a4;
            let _0xa8942d, _0x3aecaf = this['doubleBtn']['getChildByName']('textImage');
            this['goBtn']['visible'] = !0x1, this['shareBtn']['visible'] = !0x1, _0xa8942d = this['userInfo']['playtimes'] <= 0x1 ? 0x2 : _0x2c206a['getoldPlayerfreeTime'](), this['ad_Icon']['visible'] = !0x0, _0x3aecaf['text'] = 'Reward\x20*3', (console['log']('误触关闭'), _0x31c0d5['isWuChu'] = !0x1, this['goBtn']['visible'] = !0x1, this['shareBtn']['visible'] = !0x1, Laya['timer']['once'](0xfa0, this, function () {
            })), _0x1f2936['playSound'](_0x1a3086['ENGUISOUND'], 0x1), this['showLevelText'](), _0x2c206a['showBannerOrNeiLian'](this['userInfo']['level']), this['reset']();
        }
        ['reset']() {
            for (let _0x1ea802 in this['ui_list2']) {
                this['ui_pos2' + _0x1ea802]['x'];
                let _0x580369 = (0x238 - this['ui_pos2' + _0x1ea802]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0x1ea802]['y'] = Laya['stage']['height'] / 0x2 - _0x580369;
            }
        }
        ['setAlpha_0']() {
            this['ui']['alpha'] = 0x0;
        }
        ['setAlpha_1']() {
            this['ui']['alpha'] = 0x1;
        }
    }
    _0x31c0d5['isWuChu'] = !0x1;
    class _0x1b2063 extends _0x41fc2f {
        constructor(_0x227b56) {
            super(), this['btn_state'] = 0x0, this['timer4'] = 0x0, this['bannerY'] = 0x0, this['isShowLog'] = !0x0, this['testData'] = {
                'appid': 'xldh',
                'token': '119085d16eda6c8bc24be45e2ae813e6',
                'gameid': 0x186f0,
                'uid': 0x1,
                'openid': 'odPlY5DNEzMlX-NVKs6VBJPuiKAA',
                'code': '',
                'ver': 0x0
            }, this['ui'] = _0x227b56, null == _0x1b2063['ins'] && (_0x1b2063['ins'] = this), this['banner'] = this['ui']['getChildByName']('banner'), this['icon'] = this['ui']['getChildByName']('icon'), this['flaseBtn'] = this['ui']['getChildByName']('flaseBtn'), this['hotMoney'] = this['ui']['getChildByName']('hotMoneny'), this['six'] = this['ui']['getChildByName']('six')['getChildAt'](0x0), this['recommend'] = this['ui']['getChildByName']('recommend'), this['banner']['pos'](0x0, Laya['stage']['height'] - 0xc8), this['recommend']['x'] = 0x0, this['recommend']['y'] = 0x0;
        }
        ['GetRet'](_0x5229ba) {
            userExport['JumpGameManager']['Inst']['initUserExportEvent'](this['testData']['token'], this['testData']['appid'], {
                'uid': null,
                'openid': null,
                'code': _0x5229ba
            }, this['testData']['gameid'], this['testData']['ver'], Laya['Handler']['create'](this, _0x554c07 => {
                console['log'](_0x554c07), this['ret'] = _0x554c07, this['onShowFakeCloseBtn']();
            }), this['isShowLog']);
        }
        ['onShowBannerList'](_0x15cca2) {
        }
        ['onShowDiversion'](_0x371f97) {
        }
        ['onShowFriendShare'](_0x59b3ce) {
        }
        ['onShowCloseBtn'](_0xdab602) {
        }
        ['onShowFakeCloseBtn']() {
            this['FakeCloseBtn'] ? (this['FakeCloseBtn']['removeSelf'](), this['FakeCloseBtn']['destroy'](!0x0), this['FakeCloseBtn'] = null) : (console['log']('ssssssssssssss'), this['FakeCloseBtn'] = userExport['FakeCloseBtn']['showFakeCloseBtn'](this['flaseBtn'], this['recommend'], 'friend_recom_push', Laya['Handler']['create'](this, () => {
                console['log']('flase展示回调'), this['recommend']['visible'] = !0x0, _0x4c598f['show']();
            }), Laya['Handler']['create'](this, () => {
                console['log']('flase关闭回调'), _0x4c598f['hide']();
            })));
        }
        ['onShowResult'](_0x1279e5) {
        }
        ['onShowHotList'](_0x5e1dd6) {
        }
        ['rotType2']() {
            switch (this['btn_state']) {
            case 0x0:
                this['icon']['rotation'] += 0x1, this['icon']['rotation'] >= 0x5 && (this['icon']['rotation'] = 0x5, this['btn_state'] = 0x1);
                break;
            case 0x1:
                this['icon']['rotation'] -= 0x1, this['icon']['rotation'] <= -0x5 && (this['icon']['rotation'] = -0x5, this['btn_state'] = 0x2);
                break;
            case 0x2:
                this['icon']['rotation'] += 0x1, this['icon']['rotation'] >= 0x5 && (this['icon']['rotation'] = 0x5, this['btn_state'] = 0x3);
                break;
            case 0x3:
                this['icon']['rotation'] -= 0x1, this['icon']['rotation'] <= -0x5 && (this['icon']['rotation'] = -0x5, this['btn_state'] = 0x4);
                break;
            case 0x4:
                this['icon']['rotation'] += 0x1, this['icon']['rotation'] >= 0x0 && (this['icon']['rotation'] = 0x0, this['btn_state'] = 0x5);
                break;
            case 0x5:
                this['timer4'] += 0xa, this['timer4'] >= 0x5dc && (this['timer4'] = 0x0, this['btn_state'] = 0x0);
            }
        }
        ['isPanel'](_0x22b506, _0x164aeb) {
            if (_0x22b506) {
                if (_0x164aeb['visible'])
                    return !0x1;
            } else {
                if (!_0x164aeb['visible'])
                    return !0x1;
            }
            return !0x0;
        }
        ['update']() {
            this['icon']['visible'] && this['rotType2']();
        }
    }
    class _0x124bc0 extends _0x41fc2f {
        constructor(_0x52ad13) {
            super(), this['roatePoints'] = [], this['total_time'] = 0x3, this['total_time_init'] = 0x3, this['haveTimer'] = !0x1, this['high_mask_y'] = 0xbc, this['low_mask_y'] = 0x16a, this['clickRest'] = !0x1, this['reward_time'] = 0x0, this['ischange'] = !0x0, this['record_reward_time'] = 0x0, this['_count'] = 0x14, this['scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['logic'] = _0x161787['getInstance']();
            let _0x9ef1a4 = this;
            this['ui'] = _0x52ad13, this['ui']['visible'] = !0x1, this['roatePoints'] = [
                0x5a,
                0x91,
                0xca,
                0x104,
                0x12c
            ], this['restBtn'] = this['ui']['getChildByName']('restBtn'), this['chooseBtn'] = this['ui']['getChildByName']('chooseBtn'), this['homeBtn'] = this['ui']['getChildByName']('homeBtn'), this['homeBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                if (this['scene_all']['cls']['car']['isDriving'] || this['perfect']['visible'] || _0x1a3086['ISMERGE'])
                    return;
                _0x1a3086['ISREST'] = ![], (_0x2443ee['getInstance']()['clearDialog'](), _0x4280be['GetInstance']()['clearLastLevel'](), this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['chooseLevel'] = this['userInfo']['level'], _0x4280be['GetInstance']()['nextLevel'](0x1), _0xa8b540['getInstance']()['setGameState'](0x2)), (_0x2443ee['hide']('gameUI'), _0x2443ee['hide']('titleUI')), _0x2443ee['show']('startUI');
                // YYGGames['showInterstitial'](() => {
                //     _0x1a3086['ISREST'] = ![], (_0x2443ee['getInstance']()['clearDialog'](), _0x4280be['GetInstance']()['clearLastLevel'](), this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['chooseLevel'] = this['userInfo']['level'], _0x4280be['GetInstance']()['nextLevel'](0x1), _0xa8b540['getInstance']()['setGameState'](0x2)), (_0x2443ee['hide']('gameUI'), _0x2443ee['hide']('titleUI')), _0x2443ee['show']('startUI');
                // });
            }), this['chooseBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                if (this['scene_all']['cls']['car']['isDriving'] || this['perfect']['visible'] || _0x1a3086['ISMERGE'])
                    return;
                _0x1a3086['ISREST'] = ![], (_0x2443ee['getInstance']()['clearDialog'](), _0x4280be['GetInstance']()['clearLastLevel'](), _0x4280be['GetInstance']()['nextLevel'](0x1), _0xa8b540['getInstance']()['setGameState'](0x2)), (_0x2443ee['hide']('gameUI'), _0x2443ee['hide']('titleUI'), _0x2443ee['show']('chooseUI'));
                // YYGGames['showInterstitial'](() => {
                //     _0x1a3086['ISREST'] = ![], (_0x2443ee['getInstance']()['clearDialog'](), _0x4280be['GetInstance']()['clearLastLevel'](), _0x4280be['GetInstance']()['nextLevel'](0x1), _0xa8b540['getInstance']()['setGameState'](0x2)), (_0x2443ee['hide']('gameUI'), _0x2443ee['hide']('titleUI'), _0x2443ee['show']('chooseUI'));
                // });
            }), this['tipBtn'] = this['ui']['getChildByName']('tipBtn'), this['helpBtn'] = this['ui']['getChildByName']('helpBtn'), this['helpIcon'] = this['helpBtn']['getChildByName']('helpIcon'), this['rewardBgBtn'] = this['ui']['getChildByName']('rewardBgBtn'), this['rewardBtn'] = this['ui']['getChildByName']('rewardBtn'), this['chestBox'] = this['rewardBtn']['getChildByName']('chestBox'), this['red'] = this['tipBtn']['getChildByName']('red'), this['timeText'] = this['red']['getChildByName']('timeText'), this['videoIcon'] = this['tipBtn']['getChildByName']('videoIcon'), this['reward_time_txt'] = this['rewardBtn']['getChildByName']('text'), this['rewardbg_time_txt'] = this['rewardBgBtn']['getChildByName']('text'), this['clickBtn'] = this['ui']['getChildByName']('clickBtn'), this['tipReward'] = this['ui']['getChildByName']('tipReward'), this['perfect'] = this['ui']['getChildByName']('perfect'), this['coins_star_anchor'] = this['ui']['getChildByName']('coins_star_anchor'), this['total_time'] = 0x0, this['reward_mask'] = this['rewardBtn']['mask'], this['reward_mask']['y'] = this['low_mask_y'];
            let _0x1fe752 = this['low_mask_y'] - this['high_mask_y'];
            this['restBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                if (this['scene_all']['cls']['car']['isDriving'] || this['perfect']['visible'] || _0x1a3086['ISMERGE'])
                    return;
                this['playBtnEffect'](this['restBtn'], function () {
                    _0x1a3086['ISMERGE'] || (_0x1a3086['ISREST'] = !0x0, 
                    _0x9ef1a4['restBtnClick'](),
                    // YYGGames['showInterstitial'](() => {
                    //     _0x9ef1a4['restBtnClick']();
                    // })
                     _0x1b2063['ins']['onShowHotList'](!0x0))
                });
            }), this['tipBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                _0x1a3086['ISMERGE'] || this['playBtnEffect'](this['tipBtn'], function () {
                    _0x9ef1a4['playBtnSound'](), _0x9ef1a4['tipBtnClick']();
                });
            }), this['helpBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                _0x1a3086['ISMERGE'] || (_0x9ef1a4['playBtnSound'](), this['helpBtnClick']());
            }), this['rewardBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                _0x1a3086['ISMERGE'] || (_0x9ef1a4['playBtnSound'](), _0x9ef1a4['rewardBtnClick']());
            }), this['clickBtn']['on'](Laya['Event']['MOUSE_MOVE'], this, function () {
                this['clickBtn']['visible'] = !0x1;
            }), Laya['timer']['loop'](0x3e8, this, () => {
                if (this['userInfo']) {
                    if (!this['userInfo']['is_newPlayer'] && this['ischange'] && this['userInfo']['level'] >= _0x2c206a['getThereBtnUnlock']()) {
                        if (this['reward_time'] >= this['total_time_init'])
                            this['reward_time_txt']['text'] = 'Available', this['rewardbg_time_txt']['text'] = 'Available', this['ischange'] = !0x1, this['ShowChestBox']();
                        else {
                            if (this['total_time'] > 0x0) {
                                this['reward_time'] += 0x1, this['total_time'] -= 0x1;
                                let _0xcd1824 = _0x1fe752 / this['total_time_init'];
                                this['reward_mask']['y'] -= _0xcd1824;
                                let _0x11c861 = Math['floor'](this['total_time'] / 0x3c), _0x47399a = Math['floor'](this['total_time'] % 0x3c);
                                _0x47399a <= 0x9 ? (this['reward_time_txt']['text'] = '0' + _0x11c861['toString']() + ':0' + _0x47399a['toString'](), this['rewardbg_time_txt']['text'] = this['reward_time_txt']['text']) : (this['reward_time_txt']['text'] = '0' + _0x11c861['toString']() + ':' + _0x47399a['toString'](), this['rewardbg_time_txt']['text'] = this['reward_time_txt']['text']), _0x2443ee['getInstance']()['changeRewardMask'](this['reward_time'], this['total_time']);
                            }
                        }
                    }
                } else
                    this['userInfo'] = this['logic']['getUserInfo']();
            }), this['tipBtn']['alpha'] = 0x1, this['helpBtn']['alpha'] = 0x0, this['rewardBtn']['alpha'] = 0x0, this['rewardBgBtn']['alpha'] = 0x0, this['restBtn']['alpha'] = 0x1, this['tipReward']['visible'] = !0x1, this['ui_list2'] = [], (this['musicBtn'] = this['ui']['getChildByName']('musicBtn'), this['musicBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                YYGGames['audio']['pause'] = !YYGGames['audio']['pause'], this['musicBtn']['getChildByName']('icon')['skin'] = YYGGames['audio']['pause'] ? 'comp/syg.png' : 'comp/syk.png', Laya['LocalStorage']['setItem']('Build-A-Road-musicState', JSON['stringify'](YYGGames['audio']['pause']));
            }));
        }
        ['restBtnClick']() {
            this['clickRest'] || (this['clickRest'] = !0x0, _0x2443ee['getInstance']()['clearDialog'](), _0x4280be['GetInstance']()['clearLastLevel'](), this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['chooseLevel'] = this['userInfo']['level'], _0x4280be['GetInstance']()['nextLevel'](0x1), _0xa8b540['getInstance']()['setGameState'](0x1), setTimeout(() => {
                this['clickRest'] = !0x1;
            }, 0xbb8));
        }
        ['updateTipNumber']() {
            this['timeText']['text'] = this['userInfo']['tip_times']['toString']();
        }
        ['tipBtnClick']() {
            this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['tip_times'] > 0x0 ? (this['userInfo']['tip_times'] -= 0x1, this['timeText']['text'] = this['userInfo']['tip_times']['toString'](), _0x1a3086['RECONRD_AD_TIMES'] += 0x1, _0x4280be['GetInstance']()['cancelAllRoute'](), _0x4280be['GetInstance']()['showArrow'](), this['userInfo']['tip_times'] <= 0x0 && (this['videoIcon']['visible'] = !0x0, this['red']['visible'] = !0x1)) : 
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    _0x1a3086['RECONRD_AD_TIMES'] += 0x1, _0x4280be['GetInstance']()['cancelAllRoute'](), _0x4280be['GetInstance']()['showArrow']();
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                //   if (failure) {
                //       failure();
                //   }
            
            
                  promptMessage("Failed to get the reward, please watch the ads to the end.");
                }
              );
            // YYGGames['showReward'](() => {
            //     _0x1a3086['RECONRD_AD_TIMES'] += 0x1, _0x4280be['GetInstance']()['cancelAllRoute'](), _0x4280be['GetInstance']()['showArrow']();
            // });
        }
        ['helpBtnClick']() {
            _0x2c206a['share']({
                'success': function () {
                    _0x1a3086['RECONRD_AD_TIMES'] += 0x1, _0x4280be['GetInstance']()['cancelAllRoute'](), _0x4280be['GetInstance']()['showArrow']();
                },
                'fail': function () {
                }
            });
        }
        ['rewardBtnClick']() {
            this['reward_time'] >= this['total_time_init'] ? (_0x2443ee['show']('rewardUI'), _0x2443ee['hide']('gameUI'), this['userInfo']['reward_time'] += 0x1, _0x2443ee['getInstance']()['restReward']()) : this['showWarn'](0x1, 'CD', this['ui']);
        }
        ['restReward']() {
            this['userInfo'] = this['logic']['getUserInfo'](), this['record_reward_time'] != this['userInfo']['reward_time'] && (0x1 == this['userInfo']['reward_time'] ? (this['total_time_init'] = 0x3c, this['record_reward_time'] = this['userInfo']['reward_time']) : 0x2 == this['userInfo']['reward_time'] ? (this['total_time_init'] = 0xb4, this['record_reward_time'] = this['userInfo']['reward_time']) : (this['total_time_init'] = 0x12c, this['record_reward_time'] = this['userInfo']['reward_time']), this['total_time'] = this['total_time_init'], this['reward_mask']['y'] = this['low_mask_y'], this['ischange'] = !0x0, this['reward_time'] = 0x0, this['total_time'] = this['total_time_init'], this['reward_time_txt']['text'] = 'CD', this['rewardbg_time_txt']['text'] = 'CD');
        }
        ['show']() {
            this['reset'](), this['userInfo'] = this['logic']['getUserInfo'](), this['perfect']['visible'] = !0x1, this['coins_star_anchor']['visible'] = !0x1, this['IsVideo'] = _0x2c206a['getshareOrVideo'](this['userInfo']['level']), this['IsVideo'] ? this['videoIcon']['skin'] = 'comp/tipvideoIcon.png' : this['videoIcon']['skin'] = 'comp/share.png', this['tipReward']['visible'] = !0x1, this['reward_mask']['y'] <= this['high_mask_y'] + 0x1 && (this['reward_time_txt']['text'] = 'Available', this['rewardbg_time_txt']['text'] = 'Available'), 0x0 == this['total_time'] && this['restReward'](), _0x2443ee['show']('titleUI'), 0x0 == this['userInfo']['level'] && (this['clickBtn']['visible'] = !0x0), this['userInfo']['tip_times'] > 0x0 ? (this['videoIcon']['visible'] = !0x1, this['red']['visible'] = !0x0) : (this['videoIcon']['visible'] = !0x0, this['red']['visible'] = !0x1), this['timeText']['text'] = this['userInfo']['tip_times']['toString'](), this['showBtn_Slid'](), console['log']('this.userInfo.level\x20\x20\x20：\x20\x20', this['userInfo']['level']), this['lead'] && (this['lead']['visible'] = !0x1), 0x1 == this['userInfo']['level'] ? (console['log']('展示新手引导'), this['lead']['visible'] = !0x0, this['showHandAnimation'](this['lead'])) : this['lead'] && (this['lead']['visible'] = !0x1), 
            this['musicBtn']['getChildByName']('icon')['skin'] =  'comp/syk.png';
            // this['musicBtn']['getChildByName']('icon')['skin'] = YYGGames['audio']['pause'] ? 'comp/syg.png' : 'comp/syk.png';

        }
        ['hide']() {
            _0x2443ee['hide']('titleUI'), this['haveTimer'] = !0x1, this['closeBtn_Slid'](), this['showChestBosTime'] && Laya['timer']['clear'](this, this['showChestBosTime']), this['perfect']['visible'] = !0x1, this['coins_star_anchor']['visible'] = !0x1;
        }
        ['reset']() {
        }
        ['ShowChestBox']() {
            if (0x0 == this['haveTimer']) {
                this['haveTimer'] = !0x0;
                let _0x3ab5d3 = 0x0, _0x62c4c1 = 2.4, _0x5e3c9f = !0x1, _0x1378a6 = !0x0;
                this['showChestBosTime'] = Laya['timer']['loop'](0x3c, this, function () {
                    this['chestBox'] && this['ui']['visible'] && 0x1 == this['chestBox']['visible'] && (_0x1378a6 ? ((_0x5e3c9f = !_0x5e3c9f) ? 0x0 == this['chestBox']['rotation'] ? this['chestBox']['rotation'] += _0x62c4c1 : this['chestBox']['rotation'] += 0x2 * _0x62c4c1 : this['chestBox']['rotation'] -= 0x2 * _0x62c4c1, (_0x62c4c1 -= 0.02) <= 0x2 && (_0x62c4c1 = 2.4, this['chestBox']['rotation'] = 0x0, _0x1378a6 = !0x1)) : (_0x3ab5d3 += 0x32) >= 0x5dc && (_0x3ab5d3 = 0x0, _0x1378a6 = !0x0));
                });
            }
        }
        ['helpIcon_L']() {
            let _0x51d0f6 = this;
            _0x51d0f6['ui']['visible'] && Laya['Tween']['to'](_0x51d0f6['helpIcon'], {
                'scaleX': 1.2,
                'scaleY': 1.2
            }, 0x12c, null, Laya['Handler']['create'](this, function () {
                _0x51d0f6['helpIcon_S']();
            }));
        }
        ['helpIcon_S']() {
            let _0x38db66 = this;
            _0x38db66['ui']['visible'] && Laya['Tween']['to'](_0x38db66['helpIcon'], {
                'scaleX': 0x1,
                'scaleY': 0x1
            }, 0x12c, null, Laya['Handler']['create'](this, function () {
                _0x38db66['helpIcon_L']();
            }));
        }
        ['showBtn_Slid']() {
        }
        ['closeBtn_Slid']() {
        }
        ['loadLead']() {
            _0x4aeee2['load']('lead', this['ui'], {
                'x': 0.5 * Laya['stage']['width'],
                'y': Laya['stage']['height'] * (0x23a / 0x470)
            }, this, function (_0x57665f) {
                this['lead'] = _0x57665f, this['lead']['visible'] = !0x1;
            });
        }
        ['showHandAnimation'](_0xaf8ddf) {
            this['hand'] = _0xaf8ddf['getChildByName']('hand'), this['hand_light'] = this['hand']['getChildByName']('light'), this['hand_light']['visible'] = !0x1, this['hand']['x'] = 0xa, this['hand_L']();
        }
        ['hand_L']() {
            this['lead']['visible'] && (this['hand']['skin'] = 'comp/StartUI/hand.png', this['hand']['x'] = 0xa, this['hand_light']['visible'] = !0x1, setTimeout(() => {
                this['hand']['skin'] = 'comp/StartUI/hand2.png', this['hand_light']['visible'] = !0x0, setTimeout(() => {
                    Laya['Tween']['to'](this['hand'], { 'x': 0x190 }, 0x7d0, null, Laya['Handler']['create'](this, function () {
                        setTimeout(() => {
                            this['hand_L']();
                        }, 0xc8);
                    }));
                }, 0x12c);
            }, 0x1f4));
        }
        ['resetStepLable']() {
        }
        ['showPerfect']() {
            this['perfect']['visible'] = !0x0, this['coins_star_anchor']['visible'] = !0x0;
            let _0x5460ed = this['perfect']['getChildByName']('textImage'), _0x2d3646 = this['perfect']['getChildByName']('star'), _0x4dbb0d = _0x5460ed['getChildByName']('shan');
            _0x4dbb0d['x'] = -0x15, this['starEffect'](), this['playUIEffect2'](this['perfect'], function () {
                setTimeout(() => {
                    Laya['Tween']['to'](_0x4dbb0d, { 'x': 0x152 }, 0x1f4, null, Laya['Handler']['create'](this, null));
                }, 0x1f4), _0x2d3646['visible'] = !0x0;
            });
        }
        ['starEffect']() {
            if (this['ui']['visible']) {
                if (this['coin_zan1']) {
                    for (let _0x59f866 = 0x1; _0x59f866 <= this['_count']; _0x59f866++)
                        this['starEffect2'](_0x59f866);
                } else {
                    for (let _0x42d2e9 = 0x1; _0x42d2e9 <= this['_count']; _0x42d2e9++)
                        _0x4aeee2['load']('zan', this['coins_star_anchor'], {
                            'x': 0x0,
                            'y': 0x0
                        }, this, function (_0x5cd91c) {
                            this['coin_zan' + _0x42d2e9] = _0x5cd91c, _0x42d2e9 == this['_count'] && this['starEffect']();
                        });
                }
            }
        }
        ['starEffect2'](_0x3805a7) {
            if (this['ui']['visible']) {
                let _0x2cb678 = this['coin_zan' + _0x3805a7];
                _0x2cb678['pos'](0x0, 0x0), _0x2cb678['scaleX'] = 0x1, _0x2cb678['scaleY'] = 0x1, _0x2cb678['skin'] = 'comp/zan.png';
                let _0x21536e = _0x229a8a['GetCirlePoint'](0xc8 * Math['random']() + 0x96, 0x0, 0x0, this['_count']), _0x598322 = _0x21536e[_0x3805a7 - 0x1]['x'], _0x5b0fba = _0x21536e[_0x3805a7 - 0x1]['y'];
                Laya['Tween']['to'](this['coin_zan' + _0x3805a7], {
                    'x': _0x598322,
                    'y': _0x5b0fba,
                    'scaleX': 0.5,
                    'scaleY': 0.5
                }, 0x3e8 * Math['random']() + 0x2bc, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                    this['starEffect2'](_0x3805a7);
                }));
            }
        }
    }
    class _0x425c8f extends _0x41fc2f {
        constructor(_0x1232ad) {
            super(), this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), (this['ui'] = _0x1232ad, this['ui']['visible'] = !0x1, this['levelBg'] = this['ui']['getChildByName']('levelBg'), this['showCoinBg'] = this['ui']['getChildByName']('showCoinBg'), this['levelText'] = this['levelBg']['getChildByName']('levelText'), this['scoreText'] = this['showCoinBg']['getChildByName']('scoreText'), this['coin'] = this['showCoinBg']['getChildByName']('coin'), this['levelBg']['y'] = -0x1e, this['showCoinBg']['y'] = -0x1e, this['ui_list2'] = []);
            for (let _0x53a827 in this['ui_list2'])
                this['ui_pos2' + _0x53a827] = {
                    'x': this['ui_list2'][_0x53a827]['x'],
                    'y': this['ui_list2'][_0x53a827]['y']
                };
        }
        ['showTitle']() {
            let _0x124693 = this;
            this['userInfo'] = this['logic']['getUserInfo'](), this['levelText']['text'] = 'LEVEL\x20' + this['userInfo']['chooseLevel'], this['scoreText']['text'] = this['userInfo']['coin'], this['fromAToB'](this['showCoinBg'], this['levelBg']['x'], -0x5f, this['showCoinBg']['x'], 0x41, 0x1f4, function () {
                _0x124693['_setSthDistaceDown'](_0x124693['levelBg'], 0x41);
            }), this['fromAToB'](this['showCoinBg'], this['showCoinBg']['x'], -0x1e, this['showCoinBg']['x'], 0x82, 0x1f4, function () {
                _0x124693['_setSthDistaceDown'](_0x124693['showCoinBg'], 0x82);
            });
        }
        ['updateCoin']() {
            this['userInfo'] = this['logic']['getUserInfo'](), this['scoreText']['text'] = this['userInfo']['coin'];
        }
        ['reset']() {
            for (let _0xb66657 in this['ui_list2']) {
                this['ui_pos2' + _0xb66657]['x'];
                let _0xbdfe1e = (0x238 - this['ui_pos2' + _0xb66657]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0xb66657]['y'] = Laya['stage']['height'] / 0x2 - _0xbdfe1e;
            }
        }
        ['show']() {
            this['reset'](), this['showTitle']();
        }
        ['hide']() {
            let _0x21a29e = this;
            this['fromAToB'](this['showCoinBg'], this['levelBg']['x'], 0x41, this['showCoinBg']['x'], -0x5f, 0x1f4, function () {
                _0x21a29e['levelBg']['y'] = -0x1e;
            }), this['fromAToB'](this['showCoinBg'], this['showCoinBg']['x'], 0x82, this['showCoinBg']['x'], -0x1e, 0x1f4, function () {
                _0x21a29e['showCoinBg']['y'] = -0x1e;
            });
        }
        ['getCoinEffect']() {
            let _0x14a492 = this;
            _0x14a492['showCoinsAndFly'](_0x14a492['ui'], 0xf, 0x50, 0xc8, {
                'x': 0x1fe,
                'y': Laya['stage']['height'] * (0x3b8 / 0x470)
            }, {
                'x': 0x113,
                'y': Laya['stage']['height'] * (0xa1 / 0x470)
            }, 0x1f4, function () {
                Laya['Tween']['to'](_0x14a492['coin'], {
                    'scaleX': 1.5,
                    'scaleY': 1.5
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0x14a492['coin'], {
                        'scaleX': 0x1,
                        'scaleY': 0x1
                    }, 0x1e, null), _0x14a492['logic']['addCoins'](0x28);
                }));
            });
        }
    }
    class _0x242f40 extends _0x41fc2f {
        constructor(_0x970f01) {
            super(), this['items'] = [], this['nowChooseId'] = 0x0, this['page'] = 0x1, this['clicked'] = !0x1, this['carY'] = 0x1e, this['Scene_all'] = _0x4280be['GetInstance']()['getScene_all'](), this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo']();
            let _0x2ebc56 = this;
            this['ui'] = _0x970f01, this['ui']['visible'] = !0x1, this['bg'] = this['ui']['getChildByName']('bg'), this['videoUnlockBtn'] = this['ui']['getChildByName']('videoUnlockBtn'), this['video_icon'] = this['videoUnlockBtn']['getChildByName']('icon1'), this['videoUnclokText'] = this['videoUnlockBtn']['getChildByName']('videoUnclokText'), this['closeBtn'] = this['ui']['getChildByName']('closeBtn'), this['skinList'] = this['ui']['getChildByName']('skinList'), this['point'] = this['ui']['getChildByName']('point'), this['tip'] = this['ui']['getChildByName']('tip'), this['tip']['visible'] = !0x1, this['showCarEffect'] = this['ui']['getChildByName']('showCarEffect'), this['road'] = this['showCarEffect']['getChildByName']('road'), this['left'] = this['ui']['getChildByName']('arrowL'), this['right'] = this['ui']['getChildByName']('arrowR'), this['line1'] = this['road']['getChildByName']('line1'), this['closeBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {

                console.log("请求插屏广告");

                // 展示插屏广告
                HUHU_showInterstitialAd();
                _0x2443ee['hide']('storeUI'), _0x2443ee['show']('startUI');
                // YYGGames['showInterstitial'](() => {
                //     _0x2443ee['hide']('storeUI'), _0x2443ee['show']('startUI');
                // });
            }), this['videoUnlockBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                _0x2ebc56['playBtnSound'](), this['videoUnlockBtnClick']();
            }), this['ui_list2'] = [];
            for (let _0x15c566 in this['ui_list2'])
                this['ui_pos2' + _0x15c566] = {
                    'x': this['ui_list2'][_0x15c566]['x'],
                    'y': this['ui_list2'][_0x15c566]['y']
                };
            this['ui']['on'](Laya['Event']['MOUSE_DOWN'], this, function () {
                this['start_down_x'] = Laya['stage']['mouseX'];
            }), this['ui']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['start_down_x'] = null, this['clicked'] = !0x1;
            }), this['bg']['on'](Laya['Event']['CLICK'], this, function () {
            }), (this['skinList']['itemRender'] = _0x5469e2, this['skinList']['spaceX'] = 0x14, this['skinList']['spaceY'] = 0x1e, this['skinList']['repeatX'] = 0x3, this['skinList']['repeatY'] = 0x2, this['skinList']['hScrollBarSkin'] = '', this['skinList']['selectEnable'] = !0x0, this['ui']['addChild'](this['skinList']));
        }
        ['itemClick'](_0x21c382, _0x394322) {
            for (let _0x517d0d = 0x0; _0x517d0d < this['skinList']['cells']['length'] - 0x2; _0x517d0d++) {
                this['skinList']['cells'][_0x517d0d]['getChildAt'](0x0) && (this['skinList']['cells'][_0x517d0d]['getChildAt'](0x0)['getChildAt'](0x1)['visible'] = !0x1);
            }
            for (let _0x89e98e = 0x0; _0x89e98e < 0x6; _0x89e98e++) {
                let _0xd9a3a8 = _0x394322, _0x21c53c = _0xd9a3a8['getChildByName']('lock');
                _0x89e98e == _0x21c382 ? _0xd9a3a8['getChildByName']('chooseImage')['visible'] = !0x0 : _0xd9a3a8['getChildByName']('chooseImage')['visible'] = !0x1, this['nowChooseId'] = _0x21c382 + 0x1, console['log'](this['nowChooseId'], this['userInfo']['now_car_id']), (_0x21c53c['visible'] ? this['video_icon']['visible'] = !0x0 : (this['video_icon']['visible'] = !0x1, this['videoUnlockBtn']['disabled'] = !0x1), _0x21c382 != 0x0 ? this['showAdTimes'](_0x21c382) : (this['tip']['visible'] = !0x1, this['video_icon']['visible'] = !0x1), this['show_Car_Out']());
            }
            _0x394322['getChildByName']('chooseImage')['visible'] = !0x0;
        }
        ['showAdTimes'](_0x437ee8) {
            let _0x100e8b = this['userInfo']['carAd_times'][_0x437ee8];
            _0x100e8b > 0x0 ? (this['tip']['text'] = 'Watch\x20' + _0x100e8b + (_0x100e8b > 0x1 ? '\x20Ads\x20to\x20get\x20the\x20skin' : '\x20Ad\x20to\x20get\x20the\x20skin'), this['tip']['visible'] = !0x0) : (this['tip']['visible'] = !0x1, this['video_icon']['visible'] = !0x1);
        }
        ['show_Line_Effect']() {
            this['ui']['visible'] && (this['line1']['x'] = 0x140, Laya['Tween']['to'](this['line1'], { 'x': 0x3c2 }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                this['show_Line_Effect']();
            })));
        }
        ['show_Tree_Effect']() {
            this['ui']['visible'] && (this['tree1']['x'] = 0xf1, Laya['Tween']['to'](this['tree1'], { 'x': 0x3ca }, 0x3e8, null, Laya['Handler']['create'](this, function () {
                this['show_Tree_Effect']();
            })));
        }
        ['show_Car_ComeIn']() {
            this['carMoudle']['transform']['localPositionZ'] = 0xf, Laya['Tween']['to'](this['carMoudle']['transform'], { 'localPositionZ': 0x3c }, 0x3e8, null, Laya['Handler']['create'](this, function () {
            }));
        }
        ['show_Car_Out']() {
            this['carMoudle'] && (this['carMoudle']['getChildByName']('exhaust')['active'] = !0x0, this['carMoudle']['transform']['localPositionZ'] = 0x3c, Laya['Tween']['to'](this['carMoudle']['transform'], { 'localPositionZ': 0x69 }, 0x1f4, null, Laya['Handler']['create'](this, function () {
                this['set_car']();
            })));
        }
        ['videoUnlockBtnClick']() {
            let _0x245f42 = this;
            _0x245f42['video_icon']['visible'] ? YYGGames['showReward'](() => {
                _0x245f42['userInfo']['carAd_times'][_0x245f42['nowChooseId'] - 0x1] > 0x0 && (_0x245f42['userInfo']['carAd_times'][_0x245f42['nowChooseId'] - 0x1] -= 0x1, _0x245f42['userInfo']['carAd_times'][_0x245f42['nowChooseId'] - 0x1] <= 0x0) && (_0x245f42['skinList']['cells'][_0x245f42['nowChooseId'] - 0x1]['getChildAt'](0x0)['getChildAt'](0x3)['visible'] = !0x1, _0x245f42['userInfo']['get_cars']['push'](_0x245f42['nowChooseId'] - 0x1), _0x245f42['userInfo']['now_car_id'] = _0x245f42['nowChooseId'] - 0x1), _0x4280be['GetInstance']()['setNowCar'](_0x245f42['nowChooseId'] - 0x1), _0x2443ee['hide']('storeUI'), _0x2443ee['show']('startUI');
            }) : (_0x245f42['userInfo']['last_car_id'] = _0x245f42['userInfo']['now_car_id'], _0x245f42['userInfo']['now_car_id'] = _0x245f42['nowChooseId'] - 0x1, _0x4280be['GetInstance']()['setNowCar'](_0x245f42['nowChooseId'] - 0x1), _0x2443ee['hide']('storeUI'), _0x2443ee['show']('startUI'));
        }
        ['show']() {
            this['reset'](), this['showList'](), this['upPageUI'](), this['addCar3D'](), this['userInfo'] = this['logic']['getUserInfo'](), this['IsVideo'] = _0x2c206a['getshareOrVideo'](this['userInfo']['Level']), this['IsVideo'] ? this['video_icon']['skin'] = 'comp/video.png' : this['video_icon']['skin'] = 'comp/share.png', this['playButtonShowEffect'](this['videoUnlockBtn'], null, null), setTimeout(() => {
                this['closeBtn']['visible'] = !0x0;
            }, 0x7d0);
        }
        ['hide']() {
            Laya['timer']['clearAll'](this);
        }
        ['addCar3D']() {
            let _0x3c4b12 = this;
            if (this['terrain'] = this['Scene_all']['terrain'], !this['scene_3d']) {
                this['scene_3d'] = new Laya['Scene3D']();
                let _0x5ccd4e, _0x51a882 = this['Scene_all']['camera'];
                (_0x5ccd4e = Laya['Sprite3D']['instantiate'](_0x51a882, _0x3c4b12['scene_3d'], !0x1, new Laya['Vector3'](0xb4, 0x8, 0x3c)))['transform']['localRotationEuler'] = new Laya['Vector3'](0x0, 0x5a, 0x0), _0x5ccd4e['clearFlag'] = Laya['BaseCamera']['CLEARFLAG_DEPTHONLY'];
                let _0x169d47 = new Laya['DirectionLight']();
                if (_0x169d47['transform']['localRotationEulerX'] = 0x0, _0x169d47['transform']['localRotationEulerY'] = 0x32, _0x169d47['transform']['localRotationEulerZ'] = 0x0, _0x3c4b12['scene_3d']['addChild'](_0x5ccd4e), _0x3c4b12['scene_3d']['addChild'](_0x169d47), _0x3c4b12['ui']['addChild'](_0x3c4b12['scene_3d']), this['terrain']) {
                    let _0x20411a = this['nowChooseId']['toString'](), _0x50755e = this['terrain']['getChildByName']('car' + _0x20411a);
                    this['carMoudle'] = Laya['Sprite3D']['instantiate'](_0x50755e, _0x3c4b12['scene_3d'], !0x1, new Laya['Vector3'](_0x50755e['transform']['localPositionX'], this['carY'], _0x50755e['transform']['localPositionZ'])), this['carMoudle']['getChildByName']('exhaust')['active'] = !0x1;
                    let _0x2404c3 = this['carMoudle']['getChildByName']('victory'), _0x42dca6 = this['carMoudle']['getChildByName']('shop');
                    _0x2404c3['active'] = !0x1, _0x42dca6['active'] = !0x1, this['carMoudle']['active'] = !0x0, this['carMoudle']['transform']['localRotationEulerZ'] = -0x14, _0x3c4b12['scene_3d']['addChild'](this['carMoudle']), Laya['loader']['create']('perfab/tree1.json', Laya['Handler']['create'](this, function (_0x484a6e) {
                        let _0x137c16 = new Laya['Prefab']();
                        _0x137c16['json'] = _0x484a6e, _0x3c4b12['tree'] = Laya['Pool']['getItemByCreateFun']('tree1', _0x137c16['create'], _0x137c16), _0x3c4b12['ui']['addChild'](_0x3c4b12['tree']), _0x3c4b12['tree']['pos'](0x141, 0x10e), _0x3c4b12['tree1'] = _0x3c4b12['ui']['getChildByName']('tree1')['getChildByName']('tree1'), _0x3c4b12['tree']['x'];
                        let _0x75e31b = (0x238 - _0x3c4b12['tree']['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                        _0x3c4b12['tree']['y'] = Laya['stage']['height'] / 0x2 - _0x75e31b, _0x3c4b12['show_Car_ComeIn']();
                    }));
                }
            }
        }
        ['set_car']() {
            this['carMoudle'] && (this['carMoudle']['destroy'](), this['carMoudle']['removeSelf']());
            let _0x152a7a = this['terrain']['getChildByName']('car' + this['nowChooseId']['toString']());
            console['log'](this['nowChooseId']);
            if (this['carMoudle'] = Laya['Sprite3D']['instantiate'](_0x152a7a, this['scene_3d'], !0x1, new Laya['Vector3'](0x50, this['carY'], 0xf)), this['carMoudle']) {
                this['carMoudle']['active'] = !0x0;
                let _0x13d94b = this['carMoudle']['getChildByName']('exhaust'), _0x21341b = this['carMoudle']['getChildByName']('victory'), _0x42e7df = this['carMoudle']['getChildByName']('shop');
                _0x21341b['active'] = !0x1, _0x42e7df['active'] = !0x1, this['carMoudle']['transform']['localRotationEulerZ'] = -0x14, this['scene_3d']['addChild'](this['carMoudle']), Laya['Tween']['to'](this['carMoudle']['transform'], { 'localPositionZ': 0x3c }, 0x1f4, null, Laya['Handler']['create'](this, function () {
                    setTimeout(() => {
                        _0x13d94b['active'] = !0x1;
                    }, 0xc8);
                }));
            }
        }
        ['reset']() {
            for (let _0xb06b04 in this['ui_list2']) {
                this['ui_pos2' + _0xb06b04]['x'];
                let _0x23deba = (0x238 - this['ui_pos2' + _0xb06b04]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0xb06b04]['y'] = Laya['stage']['height'] / 0x2 - _0x23deba;
            }
        }
        ['showList']() {
            if (this['skinList']['cells']['length'] > 0x0)
                for (let _0x2bf46e = 0x0; _0x2bf46e < this['skinList']['cells']['length'] - 0x2; _0x2bf46e++) {
                    if (this['userInfo']['now_car_id'] == _0x2bf46e && this['itemClick'](_0x2bf46e, this['skinList']['cells'][_0x2bf46e]['getChildAt'](0x0)), this['skinList']['cells'][_0x2bf46e]['getChildAt'](0x0)) {
                        let _0x386d43 = this['skinList']['cells'][_0x2bf46e]['getChildAt'](0x0)['getChildAt'](0x3);
                        if (0x0 == _0x2bf46e)
                            _0x386d43['visible'] = !0x1;
                        else
                            for (let _0x4cf9e6 = 0x0; _0x4cf9e6 < this['userInfo']['get_cars']['length']; _0x4cf9e6++) {
                                if (this['userInfo']['get_cars'][_0x4cf9e6] == _0x2bf46e) {
                                    _0x386d43['visible'] = !0x1;
                                    break;
                                } else
                                    _0x386d43['visible'] = !0x0;
                            }
                    }
                }
            this['skinList']['array'] = new Array(0x6), this['skinList']['refresh'](), this['itemClick'](this['userInfo']['now_car_id'], this['skinList']['cells'][this['userInfo']['now_car_id']]['getChildAt'](0x0));
        }
        ['onSelect'](_0x177b7f) {
        }
        ['updateItem'](_0x1d834f, _0x1996ab) {
        }
        ['upPageUI']() {
            for (let _0x1f2fc3 = 0x0; _0x1f2fc3 < this['point']['numChildren']; _0x1f2fc3++) {
                let _0xdc2311 = this['point']['getChildAt'](_0x1f2fc3);
                this['page'] == _0x1f2fc3 + 0x1 ? (_0xdc2311['skin'] = 'comp/ChooseUI/lansetuoyuan.png', _0xdc2311['scale'](0x1, 0x1)) : (_0xdc2311['skin'] = 'comp/ChooseUI/shenlansetuoyuan.png', _0xdc2311['scale'](0.7, 0.7));
            }
        }
        ['changePage'](_0x1ee525) {
            this['clicked'] || (this['clicked'] = !0x0, this['page'] += _0x1ee525, this['page'] <= 0x1 && (this['page'] = 0x1), this['page'] >= 0x2 && (this['page'] = 0x2), this['skinList']['tweenTo'](0x14 * (this['page'] - 0x1), 0x12c), this['upPageUI']());
        }
    }
    var _0x3bb85f = Laya['Box'], _0xd1680d = 0x0;
    class _0x5469e2 extends _0x3bb85f {
        constructor() {
            super(), (this['logic'] = _0x161787['getInstance'](), this['size'](_0x5469e2['WID'], _0x5469e2['HEI']), Laya['loader']['create']('perfab/skinItem.prefab', Laya['Handler']['create'](this, function (_0x5a7e45) {
                _0xd1680d < 0x6 && (_0xd1680d += 0x1, this['skinItem'] = _0x5a7e45['create'](), this['addChild'](this['skinItem']), this['skinItem']['pivotX'] = 0x0, this['skinItem']['pivotY'] = 0x0, this['bgImage'] = this['skinItem']['getChildByName']('bgImage'), this['chooseImage'] = this['skinItem']['getChildByName']('chooseImage'), this['car'] = this['skinItem']['getChildByName']('car'), this['lock'] = this['skinItem']['getChildByName']('lock'), this['setLevelNumber'](_0xd1680d - 0x1, this['skinItem']), this['chooseImage']['visible'] = ![]);
            })));
        }
        ['setLevelNumber'](_0x464ed1, _0x5e7124) {
            let _0x4cbb74 = _0x464ed1;
            this['userInfo'] = this['logic']['getUserInfo'](), this['car']['skin'] = 'comp/carIcon/car' + (_0x4cbb74 + 0x1)['toString']() + '.png';
            for (let _0x30207a = 0x0; _0x30207a < this['userInfo']['get_cars']['length']; _0x30207a++) {
                console['log'](this['userInfo']['get_cars'][_0x30207a], _0x464ed1);
                if (this['userInfo']['get_cars'][_0x30207a] == _0x464ed1) {
                    this['lock']['visible'] = !0x1;
                    break;
                } else
                    this['bgImage']['skin'] = 'comp/StoreUI/lanjuxing.png', this['lock']['visible'] = !0x0;
            }
            this['addBtnEvent'](_0x4cbb74, _0x5e7124);
        }
        ['addBtnEvent'](_0x4b0bd1, _0x5de0ec) {
            this['skinItem']['on'](Laya['Event']['CLICK'], this, function () {
                _0x2443ee['getInstance']()['itemClick'](_0x4b0bd1, _0x5de0ec), this['chooseImage']['visible'] = !0x0;
            }), 0x0 == _0x4b0bd1 && (this['chooseImage']['visible'] = !0x0, _0x2443ee['getInstance']()['itemClick'](0x0, _0x5de0ec));
        }
    }
    _0x5469e2['WID'] = 0x97, _0x5469e2['HEI'] = 0x97;
    class _0x233bc6 extends _0x41fc2f {
        constructor(_0x229e8d) {
            super(), this['clicked'] = !0x1, this['page'] = 0x1, this['logic'] = _0x161787['getInstance']();
            let _0x1a69fa = this;
            this['ui'] = _0x229e8d, this['ui']['visible'] = !0x1, this['closeBtn'] = this['ui']['getChildByName']('closeBtn'), this['left'] = this['ui']['getChildByName']('arrowL'), this['right'] = this['ui']['getChildByName']('arrowR'), this['leveList'] = this['ui']['getChildByName']('leveList'), this['point'] = this['ui']['getChildByName']('point'), this['title'] = this['ui']['getChildByName']('title'), this['closeBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                _0x2443ee['hide']('chooseUI'), _0x2443ee['show']('startUI');
                // YYGGames['showInterstitial'](() => {
                //     _0x2443ee['hide']('chooseUI'), _0x2443ee['show']('startUI');
                // });
            }), this['left']['on'](Laya['Event']['CLICK'], this, function () {
                this['playBtnEffect'](this['left'], function () {
                    _0x1a69fa['changePage'](-0x1);
                });
            }), this['right']['on'](Laya['Event']['CLICK'], this, function () {
                this['playBtnEffect'](this['right'], function () {
                    _0x1a69fa['changePage'](0x1);
                });
            }), this['ui']['on'](Laya['Event']['MOUSE_DOWN'], this, function () {
                this['start_down_x'] = Laya['stage']['mouseX'];
            }), this['ui']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['start_down_x'] = null, this['clicked'] = !0x1;
            }), this['ui']['on'](Laya['Event']['MOUSE_MOVE'], this, function () {
                this['start_down_x'] && (Laya['stage']['mouseX'] - this['start_down_x'] < -0x1 && this['changePage'](0x1), Laya['stage']['mouseX'] - this['start_down_x'] > 0x1 && this['changePage'](-0x1));
            }), this['ui_list2'] = [];
            for (let _0xbc36f4 in this['ui_list2'])
                this['ui_pos2' + _0xbc36f4] = {
                    'x': this['ui_list2'][_0xbc36f4]['x'],
                    'y': this['ui_list2'][_0xbc36f4]['y']
                };
        }
        ['show']() {
            let _0x16083a = this;
            this['userInfo'] = this['logic']['getUserInfo'](), this['title']['alpha'] = 0x0, this['title']['y'] = -0x100, (this['fromAToB'](this['title'], this['title']['x'], -0x100, this['title']['x'], 0x64, 0x12c, function () {
                Laya['Tween']['to'](_0x16083a['title'], { 'y': 0x32 }, 0x96);
            }), this['ui']['scale'](0x0, 0x0), this['reset'](), this['upPageUI'](), this['leveList']['itemRender'] = _0xa15ed0, setTimeout(() => {
                this['leveList']['spaceX'] = 0x19, this['leveList']['spaceY'] = 0xa, this['leveList']['repeatX'] = 0x4, this['leveList']['repeatY'] = 0x5, this['leveList']['hScrollBarSkin'] = '', this['leveList']['selectEnable'] = !0x0, this['leveList']['selectHandler'] = new Laya['Handler'](this, this['onSelect']), this['leveList']['renderHandler'] = new Laya['Handler'](this, this['updateItem']), this['ui']['addChild'](this['leveList']), this['ui']['scale'](0x1, 0x1), this['leveList']['array'] = new Array(0xc8);
            }, 0xc8));
        }
        ['onSelect'](_0xa01960) {
        }
        ['updateItem'](_0x3dc7ee, _0x11745f) {
            _0x3dc7ee['setLevelNumber'](_0x11745f, this['leveList']['repeatY'], this['leveList']['repeatX']);
        }
        ['hide']() {
        }
        ['reset']() {
            for (let _0x403182 in this['ui_list2']) {
                this['ui_pos2' + _0x403182]['x'];
                let _0x401175 = (0x238 - this['ui_pos2' + _0x403182]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0x403182]['y'] = Laya['stage']['height'] / 0x2 - _0x401175;
            }
        }
        ['changePage'](_0x77b2d5) {
            this['clicked'] || (this['clicked'] = !0x0, this['page'] += _0x77b2d5, this['page'] <= 0x1 && (this['page'] = 0x1), this['page'] >= 0xa && (this['page'] = 0xa), this['leveList']['tweenTo'](0x14 * (this['page'] - 0x1), 0x12c), this['upPageUI']());
        }
        ['upPageUI']() {
            for (let _0x428214 = 0x0; _0x428214 < this['point']['numChildren']; _0x428214++) {
                let _0x275300 = this['point']['getChildAt'](_0x428214);
                this['page'] == _0x428214 + 0x1 ? (_0x275300['skin'] = 'comp/ChooseUI/lansetuoyuan.png', _0x275300['scale'](0x1, 0x1)) : (_0x275300['skin'] = 'comp/ChooseUI/shenlansetuoyuan.png', _0x275300['scale'](0.7, 0.7));
            }
        }
    }
    var _0x5bad1d = Laya['Box'];
    class _0xa15ed0 extends _0x5bad1d {
        constructor() {
            super(), this['click_done'] = !0x1, (this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['size'](_0xa15ed0['WID'], _0xa15ed0['HEI']), Laya['loader']['create']('perfab/levelItem.prefab', Laya['Handler']['create'](this, function (_0x277b64) {
                this['levelItem'] = _0x277b64['create'](), this['addChild'](this['levelItem']), this['levelItem']['pivotX'] = 0x0, this['levelItem']['pivotY'] = 0x0, this['bg'] = this['levelItem']['getChildByName']('bg'), this['levelNumber'] = this['levelItem']['getChildByName']('levelNumber');
            })));
        }
        ['setLevelNumber'](_0x3724b3, _0x3cdd0d, _0x548c7e) {
            if (this['levelItem']) {
                let _0xb698c, _0x47f23a = this, _0x11ed30 = Math['floor'](_0x3724b3 / 0x14);
                _0xb698c = _0x11ed30 > 0x0 ? _0x3724b3 - 0x14 * _0x11ed30 : _0x3724b3;
                let _0x43c7bd = (Math['floor'](_0xb698c % _0x3cdd0d) + 0x1 - 0x1) * _0x548c7e + (Math['floor'](_0xb698c / _0x3cdd0d) + 0x1);
                this['use_levelnum'] = _0x43c7bd + 0x14 * _0x11ed30, this['levelNumber']['text'] = this['use_levelnum']['toString'](), this['use_levelnum'] <= this['userInfo']['level'] ? this['bg']['skin'] = 'comp/ChooseUI/shenlanjuxing.png' : this['bg']['skin'] = 'comp/ChooseUI/lanhuijuxing.png', this['levelItem']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                    this['use_levelnum'] <= this['userInfo']['level'] && YYGGames['showInterstitial'](() => {
                        this['click_done'] || (this['click_done'] = !0x0, this['userInfo']['chooseLevel'] = _0x47f23a['use_levelnum'], _0x4280be['GetInstance']()['clearLastLevel'](), _0x4280be['GetInstance']()['clearGroup'](), _0x2443ee['hide']('chooseUI'), _0x4280be['GetInstance']()['chooseLevel'](), setTimeout(() => {
                            this['click_done'] = !0x1, _0x2443ee['show']('gameUI'), _0xa8b540['getInstance']()['setGameState'](0x1);
                        }, 0x3e8));
                    });
                });
            }
        }
    }
    _0xa15ed0['WID'] = 0x70, _0xa15ed0['HEI'] = 0x72;
    class _0x51eebb extends _0x41fc2f {
        constructor(_0x3cef87) {
            super(), this['roatePoints'] = [], this['reward_time'] = 0x0, this['total_time'] = 0x3, this['total_time_init'] = 0x3, this['high_mask_y'] = 0xbc, this['low_mask_y'] = 0x16a, this['haveTimer'] = !0x1, this['is_click'] = !0x1, this['record_reward_time'] = 0x0, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['Scene_all'] = _0x4280be['GetInstance']()['getScene_all']();
            let _0x2197a9 = this;
            this['ui'] = _0x3cef87, this['ui']['visible'] = !0x1, this['roatePoints'] = [
                0x5a,
                0x91,
                0xca,
                0x104,
                0x12c
            ], this['logo'] = this['ui']['getChildByName']('logo'), this['rewardBgBtn'] = this['ui']['getChildByName']('rewardBgBtn'), this['rewardBtn'] = this['ui']['getChildByName']('rewardBtn'), this['chooseBtn'] = this['ui']['getChildByName']('chooseBtn'), this['musicBtn'] = this['ui']['getChildByName']('musicBtn'), this['signBtn'] = this['ui']['getChildByName']('signBtn'), this['carBtn'] = this['ui']['getChildByName']('carBtn'), this['homeBtn'] = this['ui']['getChildByName']('homeBtn'), this['clickBtn'] = this['ui']['getChildByName']('clickBtn'), this['startGameBtn'] = this['ui']['getChildByName']('startGameBtn'), this['startGameBtn']['visible'] = !0x1, this['tipText'] = this['ui']['getChildByName']('tipText'), this['reward_mask'] = this['rewardBtn']['mask'], this['reward_mask']['y'] = this['low_mask_y'], (this['low_mask_y'], this['high_mask_y']), (this['reward_time_txt'] = this['rewardBtn']['getChildByName']('text'), this['rewardbg_time_txt'] = this['rewardBgBtn']['getChildByName']('text'), this['total_time'] = 0x0, this['reward_time_txt']['text'] = 'CD', this['rewardbg_time_txt']['text'] = 'CD', this['tipReward'] = this['ui']['getChildByName']('tipReward'), this['ring'] = this['startGameBtn']['getChildByName']('ring'), this['rewardBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                _0x2197a9['playBtnSound'](), _0x2197a9['rewardBtnClick']();
            }), this['chooseBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['chooseBtn'], function () {
                    _0x2197a9['chooseBtnClick']();
                    // YYGGames['showInterstitial'](() => {
                    //     _0x2197a9['chooseBtnClick']();
                    // });
                });
            }), this['signBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['signBtn'], function () {
                    console.log("请求插屏广告");

                    // 展示插屏广告
                    HUHU_showInterstitialAd();
                    _0x2197a9['signBtnClick']();
                    // YYGGames['showInterstitial'](() => {
                    //     _0x2197a9['signBtnClick']();
                    // });
                });
            }), 
            this['musicBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                let musicOn = JSON.parse(Laya['LocalStorage']['getItem']('Build-A-Road-musicState'));
                
                musicOn = !musicOn;
                console.log('musicBtn clicked: ' + musicOn);

                // this['musicBtn']['getChildByName']('icon')['skin'] = musicOn ? 'comp/syg.png' : 'comp/syk.png';
                this['musicBtn']['getChildByName']('icon')['skin'] = musicOn ? 'comp/syk.png' : 'comp/syg.png';
                if (musicOn) {
                    Laya.SoundManager.playMusic('res/audio/bgm.mp3');
                }
                else {
                    Laya.SoundManager.stopMusic();
                }

                console.log('set music state: ' + musicOn);
                Laya['LocalStorage']['setItem']('Build-A-Road-musicState', JSON.stringify(musicOn));
                
                // YYGGames['audio']['pause'] = !YYGGames['audio']['pause'], 
                // this['musicBtn']['getChildByName']('icon')['skin'] =  'comp/syk.png',
                // this['musicBtn']['getChildByName']('icon')['skin'] = YYGGames['audio']['pause'] ? 'comp/syg.png' : 'comp/syk.png',
                //  Laya['LocalStorage']['setItem']('Build-A-Road-musicState', 
                //  "true"
                //  JSON['stringify'](YYGGames['audio']['pause'])
                //  );
            }), 
            this['carBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                _0x2197a9['playBtnSound'](), 
                console.log("请求插屏广告");

                // 展示插屏广告
                HUHU_showInterstitialAd();
                _0x2197a9['carBtnClick']();
                // YYGGames['showInterstitial'](() => {
                //     _0x2197a9['carBtnClick']();
                // });
            }), this['logo']['on'](Laya['Event']['MOUSE_UP'], this, function () {
            }), this['carBtn']['alpha'] = 0x1, this['rewardBgBtn']['alpha'] = 0x1, this['rewardBtn']['alpha'] = 0x1, this['chooseBtn']['alpha'] = 0x1, this['signBtn']['alpha'] = 0x1, this['clickBtn']['disabled'] = !0x0, this['clickBtn']['on'](Laya['Event']['MOUSE_DOWN'], this, function () {
            }), this['startGameBtn']['on'](Laya['Event']['MOUSE_DOWN'], this, function () {
                this['playBtnEffect'](this['startGameBtn'], function () {
                    _0x2197a9['playBtnSound'](), _0x2197a9['showRing'](), setTimeout(() => {
                        console.log("请求插屏广告");

                        // 展示插屏广告
                        HUHU_showInterstitialAd();
                        _0x2197a9['click']();
                        // YYGGames['showInterstitial'](() => {
                        //     _0x2197a9['click']();
                        // });
                    }, 0x12c);
                });
            }), this['ui_list2'] = []);
            for (let _0x56574c in this['ui_list2'])
                this['ui_pos2' + _0x56574c] = {
                    'x': this['ui_list2'][_0x56574c]['x'],
                    'y': this['ui_list2'][_0x56574c]['y']
                };
        }
        ['changeRewardMask'](_0x381e7b, _0x1584c0) {
            let _0x4042b7 = this['low_mask_y'] - this['high_mask_y'];
            this['reward_time'] = _0x381e7b, this['total_time'] = _0x1584c0;
            let _0x559a12 = _0x4042b7 / this['total_time_init'];
            this['reward_mask']['y'] > this['high_mask_y'] && (this['reward_mask']['y'] -= _0x559a12);
            let _0x102381 = Math['floor'](this['total_time'] / 0x3c), _0x18e774 = Math['floor'](this['total_time'] % 0x3c);
            _0x18e774 <= 0x9 ? (this['reward_time_txt']['text'] = '0' + _0x102381['toString']() + ':0' + _0x18e774['toString'](), this['rewardbg_time_txt']['text'] = this['reward_time_txt']['text']) : (this['reward_time_txt']['text'] = '0' + _0x102381['toString']() + ':' + _0x18e774['toString'](), this['rewardbg_time_txt']['text'] = this['reward_time_txt']['text']), Math['abs'](this['reward_mask']['y'] - this['high_mask_y']) < 0x1 && (this['reward_time_txt']['text'] = 'Available', this['rewardbg_time_txt']['text'] = 'Available', this['ShowChestBox']());
        }
        ['rewardBtnClick']() {
            this['reward_time'] >= this['total_time_init'] ? (_0x2443ee['show']('rewardUI'), _0x2443ee['hide']('startUI'), this['userInfo']['reward_time'] += 0x1, _0x2443ee['getInstance']()['restReward']()) : this['showWarn'](0x1, 'CD', this['ui']);
        }
        ['click']() {
            this['is_click'] || (_0x1a3086['ISSTARTDONE'] = !0x0, _0x2443ee['getInstance']()['clearSlidImage'](), this['is_click'] = !0x0, setTimeout(() => {
                this['is_click'] = !0x1;
            }, 0x5dc), this['userInfo']['is_newPlayer'] = !0x1, _0xa8b540['getInstance']()['setGameState'](0x1), this['closeStartUI'](), setTimeout(() => {
                (_0x2443ee['hide']('startUI'), this['userInfo']['level'] % 0x5 == 0x0) ? this['userInfo']['get_cars']['length'] < 0x6 ? _0x1a3086['ISREST'] || _0x2443ee['show']('skinUI') : (console['log'](0xcd57fc3e1c7), _0x2443ee['show']('gameUI')) : _0x2443ee['show']('gameUI');
            }, 0xc8));
        }
        ['chooseBtnClick']() {
            _0x2443ee['hide']('startUI'), _0x2443ee['hide']('titleUI'), _0x2443ee['show']('chooseUI');
        }
        ['signBtnClick']() {
            _0x2443ee['show']('SignUI');
        }
        ['carBtnClick']() {
            _0x2443ee['show']('storeUI');
        }
        ['homeBtnClick']() {
            _0x2443ee['hide']('startUI'), _0x4280be['GetInstance']()['showHomeScene'](!0x0, this, function () {
                _0x2443ee['show']('HomeUI');
            });
        }
        ['reset']() {
            for (let _0x562045 in this['ui_list2']) {
                this['ui_pos2' + _0x562045]['x'];
                let _0x251ecf = (0x238 - this['ui_pos2' + _0x562045]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0x562045]['y'] = Laya['stage']['height'] / 0x2 - _0x251ecf;
            }
        }
        ['restReward']() {
            this['userInfo'] = this['logic']['getUserInfo'](), this['record_reward_time'] != this['userInfo']['reward_time'] && (0x1 == this['userInfo']['reward_time'] ? (this['total_time_init'] = 0x3c, this['record_reward_time'] = this['userInfo']['reward_time']) : 0x2 == this['userInfo']['reward_time'] ? (this['total_time_init'] = 0xb4, this['record_reward_time'] = this['userInfo']['reward_time']) : (this['total_time_init'] = 0x12c, this['record_reward_time'] = this['userInfo']['reward_time']), this['total_time'] = this['total_time_init'], this['reward_mask']['y'] = this['low_mask_y'], this['reward_time'] = 0x0, this['total_time'] = this['total_time_init'], this['reward_time_txt']['text'] = 'CD', this['rewardbg_time_txt']['text'] = 'CD');
        }
        ['show']() {
            _0x1a3086['ISSTARTDONE'] = !0x1, this['tipText']['visible'] = !0x1, this['carBtn']['alpha'] = 0x1, this['rewardBgBtn']['alpha'] = 0x0, this['rewardBtn']['alpha'] = 0x0, this['chooseBtn']['alpha'] = 0x1, this['signBtn']['alpha'] = 0x1, this['carBtn']['visible'] = !0x0, this['homeBtn']['visible'] = !0x1, this['rewardBgBtn']['visible'] = !0x1, this['rewardBtn']['visible'] = !0x1, this['chooseBtn']['visible'] = !0x1, this['signBtn']['visible'] = !0x1, this['clickBtn']['disabled'] = !0x0, this['userInfo'] = this['logic']['getUserInfo'](), this['reset'](), Math['abs'](this['reward_mask']['y'] - this['high_mask_y']) < 0x1 && (this['reward_time_txt']['text'] = 'Available', this['rewardbg_time_txt']['text'] = 'Available', this['ShowChestBox']()), 0x0 == this['total_time'] && this['restReward'](), this['userInfo']['level'] >= _0x2c206a['getThereBtnUnlock']() && this['showBtn_Slid'](), this['playButtonShowEffect'](this['startGameBtn'], this, null),
            //  this['musicBtn']['getChildByName']('icon')['skin'] = YYGGames['audio']['pause'] ? 'comp/syg.png' : 'comp/syk.png';
            this['musicBtn']['getChildByName']('icon')['skin'] =  'comp/syk.png';

        }
        ['addRoad3D']() {
            let _0x4272ab = this;
            if (this['terrain'] = this['Scene_all']['terrain'], !this['scene_3d']) {
                this['scene_3d'] = new Laya['Scene3D']();
                let _0x14208e, _0x45cf6b = this['Scene_all']['camera'];
                (_0x14208e = Laya['Sprite3D']['instantiate'](_0x45cf6b, _0x4272ab['scene_3d'], !0x1, new Laya['Vector3'](0xb4, 0x8, 0x3c)))['transform']['localRotationEuler'] = new Laya['Vector3'](0x0, 0x5a, 0x0), _0x14208e['clearFlag'] = Laya['BaseCamera']['CLEARFLAG_DEPTHONLY'];
                let _0x3b2f40 = new Laya['DirectionLight']();
                if (_0x4272ab['scene_3d']['addChild'](_0x14208e), _0x4272ab['scene_3d']['addChild'](_0x3b2f40), _0x4272ab['ui']['addChild'](_0x4272ab['scene_3d']), this['terrain']) {
                    let _0x305a07 = this['terrain']['getChildByName']('road_1');
                    this['roadMoudle'] = Laya['Sprite3D']['instantiate'](_0x305a07, _0x4272ab['scene_3d'], !0x1, new Laya['Vector3'](_0x305a07['transform']['localPositionX'], 0x0, _0x305a07['transform']['localPositionZ'])), this['roadMoudle']['active'] = !0x0, _0x4272ab['scene_3d']['addChild'](this['roadMoudle']);
                }
            }
        }
        ['set_car']() {
        }
        ['homeRed']() {
            let _0x456345 = _0x2443ee['getUI']('HomeUI');
            return this['userInfo']['coin'] >= _0x456345['getMinPrice2'](0x1);
        }
        ['closeStartUI']() {
            this['userInfo']['level'] > 0x2 && this['closeBtn_Slid']();
        }
        ['hide']() {
            this['carBtn']['alpha'] = 0x1, this['rewardBgBtn']['alpha'] = 0x1, this['rewardBtn']['alpha'] = 0x1, this['chooseBtn']['alpha'] = 0x1, this['signBtn']['alpha'] = 0x1, this['haveTimer'] = !0x1, Laya['timer']['clearAll'](this);
        }
        ['set_total_time_init'](_0x4edd02) {
            this['total_time_init'] = _0x4edd02;
        }
        ['ShowChestBox']() {
            if (0x0 == this['haveTimer']) {
                this['haveTimer'] = !0x0;
                let _0x102082 = 0x0, _0x24062b = 2.4, _0x22e6f8 = !0x1, _0x5b0dd7 = !0x0;
                Laya['timer']['loop'](0x3c, this, function () {
                    this['rewardBtn'] && this['ui']['visible'] && 'Available' == this['reward_time_txt']['text'] && 0x1 == this['rewardBtn']['visible'] && (_0x5b0dd7 ? ((_0x22e6f8 = !_0x22e6f8) ? 0x0 == this['rewardBtn']['rotation'] ? this['rewardBtn']['rotation'] += _0x24062b : this['rewardBtn']['rotation'] += 0x2 * _0x24062b : this['rewardBtn']['rotation'] -= 0x2 * _0x24062b, (_0x24062b -= 0.02) <= 0x2 && (_0x24062b = 2.4, this['rewardBtn']['rotation'] = 0x0, _0x5b0dd7 = !0x1)) : (_0x102082 += 0x32) >= 0x5dc && (_0x102082 = 0x0, _0x5b0dd7 = !0x0));
                });
            }
        }
        ['showBtn_Slid']() {
            this['carBtn']['visible'] = !0x0, this['rewardBgBtn']['visible'] = !0x0, this['rewardBtn']['visible'] = !0x0, this['chooseBtn']['visible'] = !0x0, this['signBtn']['visible'] = !0x0;
        }
        ['closeBtn_Slid']() {
        }
        ['showRing']() {
            let _0x1568e4 = this['ring']['getChildByName']('ring1'), _0x182fa4 = this['ring']['getChildByName']('ring2'), _0x578f5b = this['ring']['getChildByName']('ring3');
            _0x1568e4['scaleX'] = 0x0, _0x1568e4['scaleY'] = 0x0, _0x1568e4['alpha'] = 0x1, _0x182fa4['scaleX'] = 0x0, _0x182fa4['scaleY'] = 0x0, _0x182fa4['alpha'] = 0x1, _0x578f5b['scaleX'] = 0x0, _0x578f5b['scaleY'] = 0x0, _0x578f5b['alpha'] = 0x1, Laya['Tween']['to'](_0x1568e4, {
                'scaleX': 0x5,
                'scaleY': 0x5,
                'alpha': 0x0
            }, 0x12c, null, Laya['Handler']['create'](this, function () {
                _0x1568e4['scaleX'] = 0x0, _0x1568e4['scaleY'] = 0x0, _0x1568e4['alpha'] = 0x1;
            })), setTimeout(() => {
                Laya['Tween']['to'](_0x182fa4, {
                    'scaleX': 0x5,
                    'scaleY': 0x5,
                    'alpha': 0x0
                }, 0x12c, null, Laya['Handler']['create'](this, function () {
                    _0x182fa4['scaleX'] = 0x0, _0x182fa4['scaleY'] = 0x0, _0x182fa4['alpha'] = 0x1;
                }));
            }, 0x1f4);
        }
    }
    class _0x1f3a4d extends _0x41fc2f {
        constructor(_0x11dc40) {
            super(), this['signed'] = !0x1, this['basis'] = 0x64, this['times'] = 0x1, this['isClick'] = !0x1, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['ui'] = _0x11dc40, this['ui']['visible'] = !0x1, this['bg'] = this['ui']['getChildByName']('bg'), this['sign_btn'] = this['bg']['getChildByName']('sign_btn'), this['sign_btn_txt'] = this['sign_btn']['getChildByName']('txt'), this['guang_yellow'] = this['bg']['getChildByName']('guang_yellow'), this['coin_bg'] = this['bg']['getChildByName']('coin_bg'), this['coin_target'] = this['bg']['getChildByName']('coin_target'), this['coin_num'] = this['bg']['getChildByName']('coin_num'), this['rewardCar'] = this['bg']['getChildByName']('rewardCar'), this['iconCar'] = this['rewardCar']['getChildByName']('iconCar'), this['iconLight'] = this['rewardCar']['getChildByName']('iconLight'), this['closeBtn'] = this['bg']['getChildByName']('closeBtn'), this['getDouble'] = this['bg']['getChildByName']('getDouble'), this['vidoIcon'] = this['getDouble']['getChildByName']('vidoIcon'), this['timeText'] = this['rewardCar']['getChildByName']('iconLight')['getChildByName']('red')['getChildByName']('timeText');
            for (let _0x545121 = 0x1; _0x545121 <= 0x7; _0x545121++)
                this['item' + _0x545121] = this['bg']['getChildByName']('item' + _0x545121), this['item_signed' + _0x545121] = this['item' + _0x545121]['getChildByName']('signed'), this['item_icon' + _0x545121] = this['item' + _0x545121]['getChildByName']('icon'), this['item_dia' + _0x545121] = this['item' + _0x545121]['getChildByName']('dia'), this['item_dui' + _0x545121] = this['item' + _0x545121]['getChildByName']('dui'), this['item_zhedang' + _0x545121] = this['item' + _0x545121]['getChildByName']('zhedang'), this['item_light' + _0x545121] = this['item' + _0x545121]['getChildByName']('light');
            let _0x208919 = this;
            this['sign_btn']['on'](Laya['Event']['CLICK'], this, function () {
                this['playBtnEffect'](this['sign_btn'], function () {
                    _0x208919['isClick'] || (_0x208919['isClick'] = !0x0, _0x208919['playBtnSound'](), _0x208919['signBtnClicked'](), setTimeout(() => {
                        _0x208919['isClick'] = !0x1;
                    }, 0x1f4));
                });
            }), this['ui_list2'] = [];
            for (let _0x331b72 in this['ui_list2'])
                this['ui_pos2' + _0x331b72] = {
                    'x': this['ui_list2'][_0x331b72]['x'],
                    'y': this['ui_list2'][_0x331b72]['y']
                };
            this['closeBtn']['on'](Laya['Event']['CLICK'], this, function () {
                this['playBtnEffect'](this['closeBtn'], function () {
                    _0x2443ee['hide']('SignUI');
                    // YYGGames['showInterstitial'](() => {
                    //     _0x2443ee['hide']('SignUI');
                    // });
                });
            }), this['closeBtn']['visible'] = !0x1, this['getDouble']['visible'] = !0x0, this['sign_btn']['x'] = 0x182, this['getDouble']['on'](Laya['Event']['CLICK'], this, function () {
                this['playBtnEffect'](this['getDouble'], function () {
                    _0x208919['isClick'] || (_0x208919['isClick'] = !0x0, _0x208919['getDoubleClick'](), setTimeout(() => {
                        _0x208919['isClick'] = !0x1;
                    }, 0x1f4));
                });
            }), this['basis'] = 0xc8, this['times'] = 0x2, this['timeText']['text'] = '2';
        }
        ['show'](..._0x1f04ac) {
            this['userInfo'] = this['logic']['getUserInfo'](), this['IsVideo'] = _0x2c206a['getshareOrVideo'](this['userInfo']['Level']), this['sign_btn']['visible'] = !0x0, this['getDouble']['visible'] = !0x1, this['sign_btn']['x'] = 0x107, this['closeBtn']['visible'] = !0x1, this['sign_btn']['x'] = 0x182, this['rewardCar']['visible'] = !0x1, this['basis'] = 0xc8, this['times'] = 0x2, this['timeText']['text'] = '2', this['reset'](), this['playUIEffect'](this['bg'], function () {
            }), this['upTodaySigned'](), this['showItems'](), setTimeout(() => {
                _0x2c206a['showBannerOrNeiLian'](this['userInfo']['level']);
            }, 0x3e8), this['coin_num']['text'] = this['userInfo']['coin'];
        }
        ['reset']() {
            for (let _0x537736 in this['ui_list2']) {
                this['ui_pos2' + _0x537736]['x'];
                let _0x1d89e7 = (0x238 - this['ui_pos2' + _0x537736]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0x537736]['y'] = Laya['stage']['height'] / 0x2 - _0x1d89e7;
            }
        }
        ['update']() {
            this['itemEffect']();
        }
        ['itemEffect']() {
            if ('Sign\x20in' == this['sign_btn_txt']['text']) {
                let _0xe7c69a = _0x59d2cc['data']['signed_days'] + 0x1;
                this['item' + _0xe7c69a] && (this['guang_yellow']['visible'] = !0x1, this['guang_yellow']['pos'](this['item' + _0xe7c69a]['x'], this['item' + _0xe7c69a]['y']));
            } else
                this['guang_yellow']['visible'] = !0x1;
        }
        ['hide']() {
            _0x2c206a['hideBannerAndNeiLian'](this['userInfo']['level']), _0x4280be['GetInstance']()['nextLevel'](), _0x2443ee['show']('startUI');
        }
        ['upTodaySigned']() {
            let _0x1d1e9c = new Date();
            _0x59d2cc['data']['today_data'] != _0x1d1e9c['getDate']() ? (this['signed'] = !0x1, this['sign_btn_txt']['text'] = 'Sign\x20in', this['getDouble']['visible'] || (this['playButtonShowEffect'](this['getDouble'], null, null), this['btnEffect2']()), this['sign_btn']['visible'] || setTimeout(() => {
            }, 0x7d0), this['closeBtn']['visible'] || setTimeout(() => {
                this['closeBtn']['visible'] = !0x0;
            }, 0xfa0)) : (this['signed'] = !0x0, this['sign_btn_txt']['text'] = 'Close', this['getDouble']['visible'] = !0x1, this['sign_btn']['x'] = 0x107, this['sign_btn']['visible'] || (this['sign_btn']['visible'] = !0x0), this['closeBtn']['visible'] || (this['closeBtn']['visible'] = !0x0));
        }
        ['showItems']() {
            console['log'](_0x59d2cc['data']['signed_days']);
            for (let _0x196638 = 0x1; _0x196638 <= 0x7; _0x196638++) {
                _0x59d2cc['data']['signed_days'] < _0x196638 ? (0x7 == _0x196638 ? this['item_signed' + _0x196638] && this['item_signed' + _0x196638]['skin'] && (this['item_signed' + _0x196638]['skin'] = 'UISign/seven.png') : this['item_signed' + _0x196638] && this['item_signed' + _0x196638]['skin'] && (this['item_signed' + _0x196638]['skin'] = 'UISign/unsign_bg.png'), this['item_dui' + _0x196638]['visible'] = !0x1, this['item_light' + _0x196638]['visible'] = !0x1, this['item_zhedang' + _0x196638]['visible'] = !0x0) : (this['item_signed' + _0x196638] && this['item_signed' + _0x196638]['skin'] && (this['item_signed' + _0x196638]['skin'] = 'UISign/selected_bg.png'), this['item_dui' + _0x196638]['visible'] = !0x0, this['item_light' + _0x196638]['visible'] = !0x0, this['item_zhedang' + _0x196638]['visible'] = !0x1, this['playButtonShowEffect'](this['item_dui' + _0x196638], null, null));
            }
            if (this['signed']) {
                let _0x50c5ba = _0x59d2cc['data']['signed_days'];
                this['item_signed' + _0x50c5ba] && this['item_signed' + _0x50c5ba]['skin'] && (this['item_signed' + _0x50c5ba]['skin'] = 'UISign/selected_bg.png'), this['item_dui' + _0x50c5ba]['visible'] = !0x0, this['item_light' + _0x50c5ba]['visible'] = !0x0, this['item_zhedang' + _0x50c5ba]['visible'] = !0x1;
            } else {
                let _0x12b2ab = _0x59d2cc['data']['signed_days'] + 0x1;
                this['item_signed' + _0x12b2ab] && this['item_signed' + _0x12b2ab]['skin'] && (this['item_signed' + _0x12b2ab]['skin'] = 'UISign/selected_bg.png'), this['item_light' + _0x12b2ab]['visible'] = !0x0, this['item_dui' + _0x12b2ab]['visible'] = !0x1, this['item_zhedang' + _0x12b2ab]['visible'] = !0x1;
            }
        }
        ['getDoubleClick']() {
            var _0x4ac077 = this;
            YYGGames['showReward'](() => {
                _0x4ac077['getDouble']['visible'] = !0x1, this['sign_btn']['x'] = 0x107, _0x59d2cc['setData']('signed_days', _0x59d2cc['data']['signed_days'] + 0x1), _0x59d2cc['setData']('today_data', new Date()['getDate']()), _0x4ac077['upTodaySigned'](), _0x4ac077['showItems'](), _0x4ac077['basis'] = 0xc8, _0x4ac077['times'] = 0x2, _0x4ac077['timeText']['text'] = '2', _0x4ac077['getReward'](_0x59d2cc['data']['signed_days']);
            });
        }
        ['signBtnClicked']() {
            'Sign\x20in' == this['sign_btn_txt']['text'] ? (_0x59d2cc['setData']('signed_days', _0x59d2cc['data']['signed_days'] + 0x1), _0x59d2cc['setData']('today_data', new Date()['getDate']()), this['upTodaySigned'](), this['showItems'](), this['basis'] = 0x64, this['times'] = 0x1, this['timeText']['text'] = '1', this['getReward'](_0x59d2cc['data']['signed_days'])) : setTimeout(() => {
                _0x2443ee['hide']('SignUI'), _0x2443ee['show']('startUI');
            }, 300);
        }
        ['getReward'](_0x5116e2) {
            switch (_0x5116e2) {
            case 0x1:
            case 0x2:
            case 0x3:
            case 0x4:
            case 0x5:
            case 0x6:
                this['iconLight']['visible'] = !0x0, this['iconCar']['visible'] = !0x1, this['rewardCar']['visible'] = !0x0, this['playUIEffect'](this['rewardCar'], function () {
                }), this['logic']['addTips'](this['times']);
                break;
            case 0x7:
                this['iconLight']['visible'] = !0x1, this['iconCar']['visible'] = !0x0, this['rewardCar']['visible'] = !0x0, this['playUIEffect'](this['rewardCar'], function () {
                }), this['userInfo']['last_car_id'] = this['userInfo']['now_car_id'], this['userInfo']['get_cars']['push'](0x7), this['userInfo']['now_car_id'] = 0x7, _0x4280be['GetInstance']()['setNowCar'](0x7);
            }
            this['getDouble']['visible'] = !0x1, this['sign_btn']['x'] = 0x107;
        }
        ['scaleCoinTarget']() {
            Laya['Tween']['to'](this['coin_target'], {
                'scaleX': 1.5,
                'scaleY': 1.5
            }, 0x32, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['coin_target'], {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x1e, null, Laya['Handler']['create'](this, function () {
                    this['upCoinsNum']();
                }));
            }));
        }
        ['upCoinsNum']() {
            this['logic']['addCoins'](this['basis'] * this['raio']), this['coin_num']['text'] = this['userInfo']['coin'];
        }
        ['updateCoin']() {
            this['userInfo'] = this['logic']['getUserInfo'](), this['coin_num']['text'] = this['userInfo']['coin'];
        }
        ['getdouble_L']() {
            this['getDouble']['visible'] && Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    this['getdouble_S']();
                }));
            }));
        }
        ['getdouble_S']() {
            this['getDouble']['visible'] && Laya['Tween']['to'](this['getDouble'], { 'rotation': -0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    this['getdouble_L']();
                }));
            }));
        }
        ['btnEffect2']() {
            this['getDouble']['visible'] && Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    Laya['timer']['once'](0x12c, this, function () {
                        Laya['Tween']['to'](this['getDouble'], { 'rotation': -0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                            Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                Laya['timer']['once'](0x12c, this, function () {
                                    Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                        Laya['Tween']['to'](this['getDouble'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                            Laya['Tween']['to'](this['getDouble'], {
                                                'scaleX': 1.2,
                                                'scaleY': 1.2
                                            }, 0x8c, null, Laya['Handler']['create'](this, function () {
                                                Laya['Tween']['to'](this['getDouble'], {
                                                    'scaleX': 0x1,
                                                    'scaleY': 0x1
                                                }, 0xa0, null, Laya['Handler']['create'](this, function () {
                                                    this['btnEffect2']();
                                                }));
                                            }));
                                        }));
                                    }));
                                });
                            }));
                        }));
                    });
                }));
            }));
        }
    }
    class _0x4f18b6 extends _0x41fc2f {
        constructor(_0x41509e) {
            super(), this['count'] = 0xa, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo']();
            let _0x2cb945 = this;
            this['ui'] = _0x41509e, this['ui']['visible'] = !0x1, this['bg'] = this['ui']['getChildByName']('bg'), this['getBtn'] = this['ui']['getChildByName']('getBtn'), this['get_video'] = this['getBtn']['getChildByName']('video'), this['getBtn_text'] = this['getBtn']['getChildByName']('textImage'), this['light'] = this['ui']['getChildByName']('light'), this['rewardIcon'] = this['ui']['getChildByName']('rewardIcon'), this['coin'] = this['rewardIcon']['getChildByName']('coin'), this['tip'] = this['rewardIcon']['getChildByName']('tip'), this['numtext'] = this['ui']['getChildByName']('numtext'), this['closeBtn'] = this['ui']['getChildByName']('closeBtn'), this['coin_bg'] = this['ui']['getChildByName']('coin_bg'), this['coin_target'] = this['ui']['getChildByName']('coin_target'), this['coin_num'] = this['ui']['getChildByName']('coin_num'), this['title'] = this['ui']['getChildByName']('title'), this['coins_parent'] = this['ui']['getChildByName']('coins_parent'), this['coins_star_anchor'] = this['ui']['getChildByName']('coins_star_anchor'), this['freeBtn'] = this['ui']['getChildByName']('freeBtn'), this['video'] = this['freeBtn']['getChildByName']('video'), this['freeBtn_text'] = this['freeBtn']['getChildByName']('textImage'), this['closeBtn_2'] = this['ui']['getChildByName']('close'), this['freeBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['freeBtn'], function () {
                    _0x2cb945['playBtnSound'](), _0x2cb945['freeBtnClick']();
                });
            }), this['closeBtn_2']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['closeBtn_2'], function () {
                    _0x2cb945['playBtnSound'](), _0x2cb945['closeBtn_2Click']();
                });
            }), this['closeBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['closeBtn'], function () {
                    _0x2cb945['playBtnSound'](), _0x2cb945['closeBtnClick']();
                });
            }), this['getBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['getBtn'], function () {
                    _0x2cb945['playBtnSound'](), _0x2cb945['getBtnClick']();
                });
            }), this['bg']['on'](Laya['Event']['MOUSE_MOVE'], this, function () {
            }), this['bg']['on'](Laya['Event']['CLICK'], this, function () {
            }), this['closeBtn']['visible'] = !0x1, this['title']['y'] = 0x0, this['ui_list2'] = [];
            for (let _0x1627bd in this['ui_list2'])
                this['ui_pos2' + _0x1627bd] = {
                    'x': this['ui_list2'][_0x1627bd]['x'],
                    'y': this['ui_list2'][_0x1627bd]['y']
                };
            for (let _0x4befcc = 0x0; _0x4befcc < this['coins_parent']['numChildren']; _0x4befcc++) {
                let _0x5f2b7f = this['coins_parent']['getChildAt'](_0x4befcc);
                this['coin_pos' + _0x4befcc] = {
                    'x': _0x5f2b7f['x'],
                    'y': _0x5f2b7f['y']
                };
            }
        }
        ['coinsEffect']() {
            for (let _0x7e006f = 0x0; _0x7e006f < this['coins_parent']['numChildren']; _0x7e006f++) {
                let _0x1abdce = this['coins_parent']['getChildAt'](_0x7e006f);
                'coin' == _0x1abdce['name'] && this['coinEffect'](_0x7e006f, _0x1abdce);
            }
        }
        ['coinEffect'](_0x373a42, _0x54898e) {
            if (this['ui']['visible']) {
                let _0x3eb388 = {
                    'x': this['coin_pos' + _0x373a42]['x'] + 0x8 * Math['random']() - 0x4,
                    'y': this['coin_pos' + _0x373a42]['y'] + 0x8 * Math['random']() - 0x4
                };
                Laya['Tween']['to'](_0x54898e, {
                    'x': _0x3eb388['x'],
                    'y': _0x3eb388['y']
                }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    this['coinEffect'](_0x373a42, _0x54898e);
                }));
            }
        }
        ['show']() {
            _0x1a3086['ISMERGE'] || (_0x1a3086['ISONUI'] = !0x0), this['userInfo'] = this['logic']['getUserInfo'](), _0x2c206a['showBannerOrNeiLian'](this['userInfo']['level']), this['IsVideo'] = _0x2c206a['getshareOrVideo'](this['userInfo']['Level']), this['get_IsVideo'] = _0x2c206a['getshareOrVideo'](this['userInfo']['Level']), this['IsVideo'] ? (this['video']['skin'] = 'comp/EndUI/video.png', this['freeBtn_text']['x'] = 0xcd) : (this['video']['skin'] = '', this['freeBtn_text']['x'] = 0xe1), this['get_IsVideo'] ? (this['get_video']['skin'] = 'comp/tipvideoIcon.png', this['getBtn_text']['x'] = 0xce) : (this['video']['skin'] = '', this['getBtn_text']['x'] = 0xe2), this['freeBtn']['visible'] = !0x1, this['closeBtn_2']['visible'] = !0x1, this['closeBtn']['visible'] = !0x1, this['getBtn']['visible'] = !0x1, this['coin_num']['text'] = this['userInfo']['coin'], this['reset'](), (_0x2443ee['getInstance']()['hideDialog'](), this['coin']['visible'] = Math['random']() > -0x1, this['tip']['visible'] = !this['coin']['visible'], this['updateText'](), this['playButtonShowEffect'](this['light'], null, null), this['showTitle'](), _0x1a3086['ISCHEESTCLICK'] ? (_0x1a3086['ISCHEESTCLICK'] = !0x1, this['playButtonShowEffect'](this['freeBtn'], null, null), setTimeout(() => {
                this['playButtonShowEffect'](this['closeBtn_2'], null, null);
            }, 0x7d0)) : (this['playButtonShowEffect'](this['getBtn'], null, null), setTimeout(() => {
                this['playButtonShowEffect'](this['closeBtn'], null, null);
            }, 0x7d0)), this['coinsEffect'](), this['starEffect']());
        }
        ['showTitle']() {
            this['title']['y'] = 0x0;
            let _0x3d69ef = this['title']['y'] - 0xc8, _0x319bfa = this['title']['y'] + 0x14, _0x206bbd = this['title']['y'];
            this['title']['y'] = _0x3d69ef, Laya['Tween']['to'](this['title'], { 'y': _0x319bfa }, 0xa0, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](this['title'], { 'y': _0x206bbd }, 0x50, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                }));
            }));
        }
        ['share_effect']() {
            this['ui'] && this['getBtn']['visible'] && (this['getBtn']['rotation'] = 0x0, Laya['Tween']['to'](this['getBtn'], { 'rotation': 0x5 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                this['getBtn']['rotation'] = 0x5, Laya['Tween']['to'](this['getBtn'], { 'rotation': -0x5 }, 0x190, null, Laya['Handler']['create'](this, function () {
                    this['getBtn']['rotation'] = -0x5, Laya['Tween']['to'](this['getBtn'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    }));
                }));
            })));
        }
        ['closeBtnClick']() {
            this['closeBtn']['visible'] = !0x1, this['freeBtn']['visible'] = !0x1, this['getBtn']['visible'] = !0x1;
            let _0x398982 = this;
            this['showCoinsAndFly'](this['ui'], 0xf, 0x50, 0xc8, {
                'x': this['rewardIcon']['x'],
                'y': this['rewardIcon']['y']
            }, {
                'x': this['coin_target']['x'],
                'y': this['coin_target']['y']
            }, 0x1f4, function () {
            }), setTimeout(() => {
                this['close'](), _0x398982['logic']['addCoins'](0x12c), _0x398982['coin_num']['text'] = this['userInfo']['coin'];
            }, 0x5dc);
        }
        ['close']() {
            _0x2443ee['hide']('rewardUI'), _0x1a3086['ISARIVETARGET'] ? (_0x2443ee['hide']('startUI'), _0x2443ee['show']('endUI')) : 0x1 == _0xa8b540['getInstance']()['getGameState']() ? _0x2443ee['show']('gameUI') : _0x2443ee['show']('startUI');
        }
        ['getBtnClick']() {
            let _0x407c39 = this;
            YYGGames['showReward'](() => {
                _0x407c39['coin']['visible'] ? (_0x407c39['getBtn']['visible'] = !0x1, _0x407c39['closeBtn']['visible'] = !0x1, _0x407c39['showCoinsAndFly'](_0x407c39['ui'], 0xf, 0x50, 0xc8, {
                    'x': _0x407c39['rewardIcon']['x'],
                    'y': _0x407c39['rewardIcon']['y']
                }, {
                    'x': _0x407c39['coin_target']['x'],
                    'y': _0x407c39['coin_target']['y']
                }, 0x1f4, function () {
                    Laya['Tween']['to'](_0x407c39['coin_target'], {
                        'scaleX': 1.5,
                        'scaleY': 1.5
                    }, 0x32, null, Laya['Handler']['create'](this, function () {
                        Laya['Tween']['to'](_0x407c39['coin_target'], {
                            'scaleX': 0x1,
                            'scaleY': 0x1
                        }, 0x1e, null), _0x407c39['logic']['addCoins'](0x28), _0x407c39['coin_num']['text'] = _0x407c39['userInfo']['coin'];
                    }));
                }), setTimeout(() => {
                    _0x407c39['close']();
                }, 0x5dc)) : _0x407c39['tip']['visible'] && setTimeout(() => {
                    _0x407c39['logic']['addTips'](0x3), _0x407c39['getBtn']['visible'] = !0x1, _0x407c39['close']();
                }, 0x3e8);
            });
        }
        ['updateText']() {
            this['coin']['visible'] ? this['numtext']['text'] = 'Coin\x20X300' : this['numtext']['text'] = 'Tip\x20X3';
        }
        ['hide']() {
            _0x1a3086['ISONUI'] = !0x1, _0x2c206a['hideBannerAndNeiLian'](this['userInfo']['level']), _0x2443ee['getInstance']()['showDialog'](), this['closeBtn']['visible'] = !0x1;
        }
        ['reset']() {
            for (let _0x551f41 in this['ui_list2']) {
                this['ui_pos2' + _0x551f41]['x'];
                let _0x1fa1ad = (0x238 - this['ui_pos2' + _0x551f41]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0x551f41]['y'] = Laya['stage']['height'] / 0x2 - _0x1fa1ad;
            }
        }
        ['updateCoin']() {
            this['userInfo'] = this['logic']['getUserInfo'](), this['coin_num']['text'] = this['userInfo']['coin'];
        }
        ['starEffect']() {
            if (this['ui']['visible']) {
                if (this['coin_star1']) {
                    for (let _0x557e84 = 0x1; _0x557e84 <= this['count']; _0x557e84++)
                        this['starEffect2'](_0x557e84);
                } else {
                    for (let _0x2594bb = 0x1; _0x2594bb <= this['count']; _0x2594bb++)
                        _0x4aeee2['load']('star', this['coins_star_anchor'], {
                            'x': 0x0,
                            'y': 0x0
                        }, this, function (_0x1bfc6b) {
                            this['coin_star' + _0x2594bb] = _0x1bfc6b, _0x2594bb == this['count'] && this['starEffect']();
                        });
                }
            }
        }
        ['starEffect2'](_0x413403) {
            if (this['ui']['visible']) {
                let _0x2b49cd = this['coin_star' + _0x413403];
                _0x2b49cd['pos'](0x0, 0x0), _0x2b49cd['scaleX'] = 1.2, _0x2b49cd['scaleY'] = 1.2, _0x2b49cd['rotation'] = 0x12c * Math['random'](), _0x2b49cd['skin'] = 'effect/star' + Math['floor'](0x4 * Math['random']() + 0x1) + '.png';
                let _0x5987e5 = _0x229a8a['GetCirlePoint'](0xc8 * Math['random']() + 0x96, 0x0, 0x0, this['count']), _0x4044e8 = _0x5987e5[_0x413403 - 0x1]['x'], _0x28866d = _0x5987e5[_0x413403 - 0x1]['y'];
                Laya['Tween']['to'](this['coin_star' + _0x413403], {
                    'x': _0x4044e8,
                    'y': _0x28866d,
                    'scaleX': 0x0,
                    'scaleY': 0x0,
                    'rotation': 0x12c * Math['random']()
                }, 0x3e8 * Math['random']() + 0x2bc, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                    this['starEffect2'](_0x413403);
                }));
            }
        }
        ['freeBtnClick']() {
            let _0x35f5f5 = this;
            YYGGames['showReward'](() => {
                _0x35f5f5['SccessCallBack']();
            });
        }
        ['SccessCallBack']() {
            let _0x24a6d7 = this;
            _0x24a6d7['coin']['visible'] ? (_0x24a6d7['freeBtn']['visible'] = !0x1, _0x24a6d7['closeBtn']['visible'] = !0x1, _0x24a6d7['showCoinsAndFly'](_0x24a6d7['ui'], 0xf, 0x50, 0xc8, {
                'x': _0x24a6d7['rewardIcon']['x'],
                'y': _0x24a6d7['rewardIcon']['y']
            }, {
                'x': _0x24a6d7['coin_target']['x'],
                'y': _0x24a6d7['coin_target']['y']
            }, 0x1f4, function () {
                Laya['Tween']['to'](_0x24a6d7['coin_target'], {
                    'scaleX': 1.5,
                    'scaleY': 1.5
                }, 0x32, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](_0x24a6d7['coin_target'], {
                        'scaleX': 0x1,
                        'scaleY': 0x1
                    }, 0x1e, null), _0x24a6d7['logic']['addCoins'](0x14), _0x24a6d7['coin_num']['text'] = _0x24a6d7['userInfo']['coin'];
                }));
            }), setTimeout(() => {
                _0x24a6d7['close'](), _0x24a6d7['userInfo']['reward_time'] += 0x1;
            }, 0x4b0)) : _0x24a6d7['tip']['visible'] && setTimeout(() => {
                _0x24a6d7['logic']['addTips'](0x3), _0x24a6d7['freeBtn']['visible'] = !0x1, _0x24a6d7['close'](), _0x24a6d7['userInfo']['reward_time'] += 0x1;
            }, 0x3e8);
        }
        ['closeBtn_2Click']() {
            this['close']();
        }
    }
    class _0x53e8c7 extends _0x41fc2f {
        constructor(_0x175d67) {
            super(), this['count'] = 0xa, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo']();
            let _0x2a48d4 = this;
            this['ui'] = _0x175d67, this['ui']['visible'] = !0x1, this['title'] = this['ui']['getChildByName']('title'), this['carIcon'] = this['ui']['getChildByName']('carIcon'), this['getCarBtn'] = this['ui']['getChildByName']('getCarBtn'), this['videoIcon'] = this['getCarBtn']['getChildByName']('videoIcon'), this['closeBtn'] = this['ui']['getChildByName']('closeBtn'), this['closeBtn']['visible'] = !0x1, this['coins_star_anchor'] = this['ui']['getChildByName']('coins_star_anchor'), this['light'] = this['ui']['getChildByName']('light'), this['getCarBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['getCarBtn'], function () {
                    _0x2a48d4['playBtnSound'](), _0x2a48d4['getCarBtnClick']();
                });
            }), this['closeBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['closeBtn'], function () {
                    _0x2443ee['hide']('UnLockUI');
                });
            }), this['ui_list2'] = [];
            for (let _0x15988b in this['ui_list2'])
                this['ui_pos2' + _0x15988b] = {
                    'x': this['ui_list2'][_0x15988b]['x'],
                    'y': this['ui_list2'][_0x15988b]['y']
                };
            this['title']['alpha'] = 0x0, this['title']['y'] = -0x100;
        }
        ['getCarBtnClick']() {
            let _0x336a3b = this;
            YYGGames['showReward'](() => {
                _0x336a3b['userInfo']['get_cars']['push'](_0x336a3b['carId']), _0x336a3b['userInfo']['last_car_id'] = _0x336a3b['userInfo']['now_car_id'], _0x336a3b['userInfo']['now_car_id'] = _0x336a3b['carId'], _0x2443ee['getInstance']()['setEndUIAlpha_1'](), _0x2443ee['hide']('UnLockUI'), _0x2443ee['show']('endUI');
            });
        }
        ['show']() {
            this['IsVideo'] = _0x2c206a['getshareOrVideo'](this['userInfo']['Level']), this['IsVideo'] ? this['videoIcon']['skin'] = 'comp/EndUI/video.png' : this['videoIcon']['skin'] = 'comp/share.png', _0x2443ee['getInstance']()['setEndUIAlpha_0'](), this['closeBtn']['visible'] = !0x1;
            let _0x20b03a = this;
            this['userInfo'] = this['logic']['getUserInfo'](), this['title']['alpha'] = 0x0, this['title']['y'] = -0x100, this['reset'](), this['fromAToB'](this['title'], this['title']['x'], -0x100, this['title']['x'], 0x32, 0x12c, function () {
                Laya['Tween']['to'](_0x20b03a['title'], { 'y': 0x0 }, 0x96);
            });
            let _0x2035d7 = this['logic']['getUnLockCarLevel'](this['userInfo']['chooseLevel']);
            this['carId'] = _0x2035d7[0x2], this['carIcon']['skin'] = 'comp/carIcon/car' + (this['carId'] + 0x1)['toString']() + '.png', setTimeout(() => {
                this['playButtonShowEffect'](this['closeBtn'], null, null);
            }, 0x7d0), this['starEffect']();
        }
        ['hide']() {
            _0x2443ee['getInstance']()['setEndUIAlpha_1']();
        }
        ['reset']() {
            for (let _0x1fa97f in this['ui_list2']) {
                this['ui_pos2' + _0x1fa97f]['x'];
                let _0x3e3f11 = (0x238 - this['ui_pos2' + _0x1fa97f]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0x1fa97f]['y'] = Laya['stage']['height'] / 0x2 - _0x3e3f11;
            }
        }
        ['starEffect']() {
            if (this['ui']['visible']) {
                if (this['coin_star1']) {
                    for (let _0x1f3e3c = 0x1; _0x1f3e3c <= this['count']; _0x1f3e3c++)
                        this['starEffect2'](_0x1f3e3c);
                } else {
                    for (let _0x3b8907 = 0x1; _0x3b8907 <= this['count']; _0x3b8907++)
                        _0x4aeee2['load']('star', this['coins_star_anchor'], {
                            'x': 0x0,
                            'y': 0x0
                        }, this, function (_0xd7df1) {
                            this['coin_star' + _0x3b8907] = _0xd7df1, _0x3b8907 == this['count'] && this['starEffect']();
                        });
                }
            }
        }
        ['starEffect2'](_0x209933) {
            if (this['ui']['visible']) {
                let _0x1ab4a5 = this['coin_star' + _0x209933];
                _0x1ab4a5['pos'](0x0, 0x0), _0x1ab4a5['scaleX'] = 0x1, _0x1ab4a5['scaleY'] = 0x1, _0x1ab4a5['rotation'] = 0x12c * Math['random'](), _0x1ab4a5['skin'] = 'effect/star4.png';
                let _0x5c908b = _0x229a8a['GetCirlePoint'](0xc8 * Math['random']() + 0x96, 0x0, 0x0, this['count']), _0x207f3e = _0x5c908b[_0x209933 - 0x1]['x'], _0x4eed1a = _0x5c908b[_0x209933 - 0x1]['y'];
                Laya['Tween']['to'](this['coin_star' + _0x209933], {
                    'x': _0x207f3e,
                    'y': _0x4eed1a,
                    'scaleX': 0x0,
                    'scaleY': 0x0,
                    'rotation': 0x12c * Math['random']()
                }, 0x3e8 * Math['random']() + 0x2bc, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                    this['starEffect2'](_0x209933);
                }));
            }
        }
    }
    class _0x23586d extends _0x41fc2f {
        constructor(_0x4607c6) {
            super(), this['numble_l'] = [
                0x6427,
                0x8e2a,
                0x12574,
                0x17405,
                0x9fac
            ], this['number_r'] = [
                0x5558,
                0xb317,
                0x889c,
                0x3c89,
                0x8b9d
            ], this['random_id_List'] = [], this['ex_carId_list'] = [
                0x0,
                0x1,
                0x2,
                0x3,
                0x4,
                0x5
            ], this['click_choose'] = !0x1, this['clickGet'] = !0x1, this['count_L'] = 0xa, this['count_R'] = 0xa, this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo']();
            let _0x2b4af6 = this;
            this['ui'] = _0x4607c6, this['ui']['visible'] = !0x1, this['title'] = this['ui']['getChildByName']('title'), this['titleAdd'] = this['ui']['getChildByName']('titleAdd'), this['left'] = this['ui']['getChildByName']('left'), this['coins_star_anchor_L'] = this['left']['getChildByName']('coins_star_anchor'), this['carIconL'] = this['left']['getChildByName']('carIconL'), this['chooseBtnL'] = this['left']['getChildByName']('chooseBtnL'), this['video_l'] = this['chooseBtnL']['getChildByName']('video'), this['right'] = this['ui']['getChildByName']('right'), this['coins_star_anchor_R'] = this['right']['getChildByName']('coins_star_anchor'), this['carIconR'] = this['right']['getChildByName']('carIconR'), this['chooseBtnR'] = this['right']['getChildByName']('chooseBtnR'), this['video_r'] = this['chooseBtnR']['getChildByName']('video'), this['randomChooseBtn'] = this['ui']['getChildByName']('randomChooseBtn'), this['random_video'] = this['randomChooseBtn']['getChildByName']('video'), this['closeBtn'] = this['ui']['getChildByName']('closeBtn'), this['hand'] = this['right']['getChildByName']('hand'), this['hand_light'] = this['hand']['getChildByName']('light'), this['bg'] = this['ui']['getChildByName']('bg'), this['numLable_L'] = this['left']['getChildByName']('numLable'), this['numLable_R'] = this['right']['getChildByName']('numLable'), this['lab_close'] = this['ui']['getChildByName']('lab_close'), this['bg']['on'](Laya['Event']['CLICK'], this, function () {
            }), this['closeBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['closeUI']();
            }), this['lab_close']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['closeUI']();
            }), this['chooseBtnL']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['chooseBtnL'], function () {
                    _0x2b4af6['chooseBtnL_click']();
                });
            }), this['chooseBtnR']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['chooseBtnR'], function () {
                    _0x2b4af6['chooseBtnR_click']();
                });
            }), this['left']['on'](Laya['Event']['MOUSE_UP'], this, function () {
            }), this['right']['on'](Laya['Event']['MOUSE_UP'], this, function () {
            }), this['randomChooseBtn']['on'](Laya['Event']['MOUSE_UP'], this, function () {
                this['playBtnEffect'](this['randomChooseBtn'], function () {
                    _0x2b4af6['randomChooseBtn_click']();
                });
            }), this['ui_list2'] = [];
            for (let _0x527e37 in this['ui_list2'])
                this['ui_pos2' + _0x527e37] = {
                    'x': this['ui_list2'][_0x527e37]['x'],
                    'y': this['ui_list2'][_0x527e37]['y']
                };
        }
        ['getAllRandomId']() {
            let _0x220107 = [];
            _0x220107 = this['userInfo']['get_cars'], this['random_id_List'] && this['random_id_List']['splice'](0x0, this['random_id_List']['length']);
            for (let _0x41f96f = 0x0; _0x41f96f < 0x6; _0x41f96f++) {
                for (let _0x211d14 = 0x0; _0x211d14 < _0x220107['length']; _0x211d14++)
                    this['ex_carId_list'][_0x41f96f] == _0x220107[_0x211d14] && (this['ex_carId_list']['splice'](_0x41f96f, 0x1), this['random_id_List'] = this['ex_carId_list']);
                if (0x5 == _0x41f96f) {
                    let _0x27d954 = Math['floor'](Math['random']() * this['random_id_List']['length']);
                    this['random_id_List']['length'] > 0x1 ? _0x27d954 == this['random_id_List']['length'] - 0x1 ? (this['useRandom_1'] = this['random_id_List'][_0x27d954], this['useRandom_2'] = this['random_id_List'][_0x27d954 - 0x1]) : (this['useRandom_1'] = this['random_id_List'][_0x27d954], this['useRandom_2'] = this['random_id_List'][_0x27d954 + 0x1]) : (this['useRandom_1'] = this['random_id_List'][0x0], this['useRandom_2'] = this['random_id_List'][0x0]), this['carIconL']['skin'] = 'comp/carIcon/car' + this['useRandom_1'] + '.png', this['carIconR']['skin'] = 'comp/carIcon/car' + this['useRandom_2'] + '.png';
                }
            }
        }
        ['closeUI']() {
            let _0x54ad35 = this;
            _0x54ad35['random_id_List'] && _0x54ad35['random_id_List']['splice'](0x0, _0x54ad35['random_id_List']['length']), _0x54ad35['titleAdd']['visible'] = !0x1, YYGGames['showInterstitial'](() => {
                _0x2443ee['hide']('skinUI'), _0x2443ee['show']('gameUI');
            });
        }
        ['getCar'](_0x2ea805, _0x5af148) {
            let _0x9b9135 = this;
            this['clickGet'] || (this['clickGet'] = !0x0, setTimeout(() => {
                this['clickGet'] = !0x1;
            }, 0x7d0), YYGGames['showReward'](() => {
                _0x9b9135['userInfo']['now_car_id'] = _0x2ea805 - 0x1, _0x4280be['GetInstance']()['setNowCar'](_0x2ea805 - 0x1), _0x9b9135['hand']['visible'] = !0x1, _0x9b9135['closeUI']();
            }));
        }
        ['chooseBtnL_click']() {
            this['click_choose'] || (this['getCar'](this['useRandom_1'], this['ISVideo_L']), this['click_choose'] = !0x0, setTimeout(() => {
                this['click_choose'] = !0x1;
            }, 0x7d0));
        }
        ['chooseBtnR_click']() {
            this['click_choose'] || (this['getCar'](this['useRandom_2'], this['ISVideo_R']), this['click_choose'] = !0x0, setTimeout(() => {
                this['click_choose'] = !0x1;
            }, 0x7d0));
        }
        ['randomChooseBtn_click']() {
            Math['random']() > 0.5 ? this['getCar'](this['useRandom_1'], this['ISVideo_random']) : this['getCar'](this['useRandom_2'], this['ISVideo_random']);
        }
        ['reset']() {
            for (let _0xafb56f in this['ui_list2']) {
                this['ui_pos2' + _0xafb56f]['x'];
                let _0x3fb0eb = (0x238 - this['ui_pos2' + _0xafb56f]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0xafb56f]['y'] = Laya['stage']['height'] / 0x2 - _0x3fb0eb;
            }
        }
        ['show']() {
            if (this['userInfo'] = this['logic']['getUserInfo'](), !_0x1a3086['ISSKINUI']) {
                _0x1a3086['ISSKINUI'] = !0x0, setTimeout(() => {
                    _0x1a3086['ISSKINUI'] = !0x1;
                }, 0x3a98), _0x1a3086['ISONUI'] = !0x0, this['ex_carId_list'] = [
                    0x0,
                    0x1,
                    0x2,
                    0x3,
                    0x4,
                    0x5
                ], setTimeout(() => {
                    this['ISVideo_L'] = _0x2c206a['getshareOrVideo_L'](this['userInfo']['Level']);
                }, 0xc8), setTimeout(() => {
                    this['ISVideo_R'] = _0x2c206a['getshareOrVideo_R'](this['userInfo']['Level']);
                }, 0x12c), this['ISVideo_random'] = _0x2c206a['getshareOrVideo'](this['userInfo']['Level']), this['ISVideo_random'] ? this['random_video']['skin'] = 'comp/EndUI/video.png' : this['random_video']['skin'] = 'comp/share.png', this['showNumner'](), _0xa8b540['getInstance']()['setGameState'](0x2), this['reset'](), _0x2443ee['getInstance']()['hideDialog'](), this['ui']['scaleX'] = 0.6, this['ui']['scaleY'] = 0.6, this['ui']['alpha'] = 0x0, Laya['Tween']['to'](this['ui'], {
                    'scaleX': 1.2,
                    'scaleY': 1.2,
                    'alpha': 0x1
                }, 0x78, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](this['ui'], {
                        'scaleX': 0x1,
                        'scaleY': 0x1
                    }, 0x8c, null, Laya['Handler']['create'](this, function () {
                        this['titleAdd']['visible'] = !0x0;
                    }));
                })), this['randomChooseBtn']['visible'] = !0x1, this['closeBtn']['visible'] = !0x1;
                let _0x2a843c = this;
                this['title']['alpha'] = 0x0, this['title']['y'] = -0x100;
                let _0x2fd313 = 0x12c, _0x365dcb = 0x96;
                this['getAllRandomId'](), this['fromAToB'](this['title'], this['title']['x'], -0x100, this['title']['x'], 0x32, _0x2fd313, function () {
                    Laya['Tween']['to'](_0x2a843c['title'], { 'y': 0x0 }, _0x365dcb);
                }), this['playButtonShowEffect'](this['chooseBtnL'], null, null), this['playButtonShowEffect'](this['chooseBtnR'], null, null), setTimeout(() => {
                    this['closeBtn']['visible'] = !0x0, this['randomChooseBtn']['visible'] = !0x0;
                }, 0x7d0), this['hand_light']['visible'] = !0x1, this['hand']['visible'] = !0x1, this['starEffect_L'](), this['starEffect_R']();
            }
        }
        ['hide']() {
            _0x2443ee['getUI']('rewardUI')['ui']['visible'] || (_0x1a3086['ISONUI'] = !0x1), _0x2443ee['getInstance']()['showDialog'](), _0xa8b540['getInstance']()['setGameState'](0x1), this['random_id_List'] && this['random_id_List']['splice'](0x0, this['random_id_List']['length']), this['ex_carId_list'] && this['ex_carId_list']['splice'](0x0, this['ex_carId_list']['length']);
        }
        ['showHand']() {
            Math['random']() > 0.5 ? this['hand']['x'] = 0xd2 : this['hand']['x'] = -0x8f, this['hand']['skin'] = 'comp/StartUI/hand.png', this['hand']['visible'] = !0x0, this['handAnimation']();
        }
        ['handAnimation']() {
            this['hand']['visible'] && setTimeout(() => {
                this['hand']['skin'] = 'comp/StartUI/hand2.png', this['hand_light']['visible'] = !0x0, setTimeout(() => {
                    this['hand']['skin'] = 'comp/StartUI/hand.png', this['hand_light']['visible'] = !0x1, this['handAnimation']();
                }, 0x1f4);
            }, 0x1f4);
        }
        ['starEffect_L']() {
            if (this['ui']['visible']) {
                if (this['coin_star_L1']) {
                    for (let _0x2d3d99 = 0x1; _0x2d3d99 <= this['count_L']; _0x2d3d99++)
                        this['starEffect2_L'](_0x2d3d99);
                } else {
                    for (let _0x2f06c2 = 0x1; _0x2f06c2 <= this['count_L']; _0x2f06c2++)
                        _0x4aeee2['load']('star', this['coins_star_anchor_L'], {
                            'x': 0x0,
                            'y': 0x0
                        }, this, function (_0x12b5ef) {
                            this['coin_star_L' + _0x2f06c2] = _0x12b5ef, _0x2f06c2 == this['count_L'] && this['starEffect_L']();
                        });
                }
            }
        }
        ['starEffect2_L'](_0x31d7a5) {
            if (this['ui']['visible']) {
                let _0x621ef5 = this['coin_star_L' + _0x31d7a5];
                _0x621ef5['pos'](0x0, 0x0), _0x621ef5['scaleX'] = 0.5, _0x621ef5['scaleY'] = 0.5, _0x621ef5['rotation'] = 0x12c * Math['random'](), _0x621ef5['skin'] = 'effect/star4.png';
                let _0x4b6953 = _0x229a8a['GetCirlePoint'](0xc8 * Math['random']() + 0x96, 0x0, 0x0, this['count_L']), _0x29c8ee = _0x4b6953[_0x31d7a5 - 0x1]['x'], _0x31dc2b = _0x4b6953[_0x31d7a5 - 0x1]['y'];
                Laya['Tween']['to'](this['coin_star_L' + _0x31d7a5], {
                    'x': _0x29c8ee,
                    'y': _0x31dc2b,
                    'scaleX': 0x0,
                    'scaleY': 0x0,
                    'rotation': 0x12c * Math['random']()
                }, 0x3e8 * Math['random']() + 0x2bc, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                    this['starEffect2_L'](_0x31d7a5);
                }));
            }
        }
        ['starEffect_R']() {
            if (this['ui']['visible']) {
                if (this['coin_star_R1']) {
                    for (let _0x16307d = 0x1; _0x16307d <= this['count_R']; _0x16307d++)
                        this['starEffect2_R'](_0x16307d);
                } else {
                    for (let _0x2a171b = 0x1; _0x2a171b <= this['count_R']; _0x2a171b++)
                        _0x4aeee2['load']('star', this['coins_star_anchor_R'], {
                            'x': 0x0,
                            'y': 0x0
                        }, this, function (_0x2c9a7e) {
                            this['coin_star_R' + _0x2a171b] = _0x2c9a7e, _0x2a171b == this['count_R'] && this['starEffect_R']();
                        });
                }
            }
        }
        ['starEffect2_R'](_0xaf8fa3) {
            if (this['ui']['visible']) {
                let _0x1b04b3 = this['coin_star_R' + _0xaf8fa3];
                _0x1b04b3['pos'](0x0, 0x0), _0x1b04b3['scaleX'] = 0.5, _0x1b04b3['scaleY'] = 0.5, _0x1b04b3['rotation'] = 0x12c * Math['random'](), _0x1b04b3['skin'] = 'effect/star4.png';
                let _0x465096 = _0x229a8a['GetCirlePoint'](0xc8 * Math['random']() + 0x96, 0x0, 0x0, this['count_R']), _0x4aaa6e = _0x465096[_0xaf8fa3 - 0x1]['x'], _0x172f70 = _0x465096[_0xaf8fa3 - 0x1]['y'];
                Laya['Tween']['to'](this['coin_star_R' + _0xaf8fa3], {
                    'x': _0x4aaa6e,
                    'y': _0x172f70,
                    'scaleX': 0x0,
                    'scaleY': 0x0,
                    'rotation': 0x12c * Math['random']()
                }, 0x3e8 * Math['random']() + 0x2bc, Laya['Ease']['quartOut'], Laya['Handler']['create'](this, function () {
                    this['starEffect2_R'](_0xaf8fa3);
                }));
            }
        }
        ['showNumner']() {
            let _0x501475 = Math['floor'](0x5 * Math['random']());
            this['numLable_L']['text'] = this['numble_l'][_0x501475]['toString'](), this['numLable_R']['text'] = this['number_r'][_0x501475]['toString']();
        }
    }
    class _0x18c494 extends _0x41fc2f {
        constructor(_0x2cbec2) {
            super();
            let _0x27e2f3 = this;
            this['logic'] = _0x161787['getInstance'](), this['userInfo'] = this['logic']['getUserInfo'](), this['ui'] = _0x2cbec2, this['ui']['visible'] = !0x1, this['bg'] = this['ui']['getChildByName']('bg'), this['closeBtn'] = this['ui']['getChildByName']('closeBtn'), this['clickBtn'] = this['ui']['getChildByName']('clickBtn'), this['helpBtn'] = this['ui']['getChildByName']('helpBtn'), this['dog'] = this['ui']['getChildByName']('dog'), this['titleAdd'] = this['ui']['getChildByName']('titleAdd'), this['title'] = this['ui']['getChildByName']('title'), this['eyes'] = this['dog']['getChildByName']('eyes'), this['ad_Icon'] = this['helpBtn']['getChildByName']('icon'), this['helpBtn']['on'](Laya['Event']['MOUSE_DOWN'], this, function () {
                this['playBtnEffect'](this['helpBtn'], function () {
                    _0x27e2f3['playBtnSound'](), _0x27e2f3['helpBtnClick']();
                });
            }), this['closeBtn']['on'](Laya['Event']['CLICK'], this, function () {
                _0x2443ee['hide']('ShareUI');
            }), this['ui_list2'] = [];
            for (let _0x53abae in this['ui_list2'])
                this['ui_pos2' + _0x53abae] = {
                    'x': this['ui_list2'][_0x53abae]['x'],
                    'y': this['ui_list2'][_0x53abae]['y']
                };
            this['eyes']['x'] = 0x17, this['closeBtn']['visible'] = !0x1, this['helpBtn']['visible'] = !0x1;
        }
        ['showEyes']() {
            this['ui']['visible'] && (this['eyes']['x'] = 0x17, setTimeout(() => {
                Laya['Tween']['to'](this['eyes'], { 'x': 0xd }, 0x64, null, Laya['Handler']['create'](this, function () {
                    Laya['Tween']['to'](this['eyes'], { 'x': 0x17 }, 0x64, null, Laya['Handler']['create'](this, function () {
                        this['showEyes']();
                    }));
                }));
            }, 0x3e8));
        }
        ['show']() {
            this['reset'](), this['closeBtn']['visible'] = !0x1, _0x1a3086['ISONUI'] = !0x0, this['eyes']['x'] = 0x17, this['helpBtn']['visible'] = !0x1, _0x2443ee['getInstance']()['hideDialog'](), this['showEyes'](), setTimeout(() => {
                this['closeBtn']['visible'] = !0x0;
            }, 0x7d0), this['btn__R'](this['helpBtn']);
        }
        ['hide']() {
            _0x1a3086['ISONUI'] = !0x1, _0x2443ee['getInstance']()['showDialog']();
        }
        ['reset']() {
            for (let _0x19a2db in this['ui_list2']) {
                this['ui_pos2' + _0x19a2db]['x'];
                let _0x4be6b1 = (0x238 - this['ui_pos2' + _0x19a2db]['y']) / 0x238 * (Laya['stage']['height'] / 0x2);
                this['ui_list2'][_0x19a2db]['y'] = Laya['stage']['height'] / 0x2 - _0x4be6b1;
            }
        }
        ['helpBtnClick']() {
            let _0x2557e4 = this;
            _0x2c206a['share']({
                'success': function () {
                    _0x2557e4['SccessCallBack']();
                },
                'fail': function () {
                }
            });
        }
        ['SccessCallBack']() {
            _0x2443ee['hide']('ShareUI'), _0x1a3086['RECONRD_AD_TIMES'] += 0x1, _0x4280be['GetInstance']()['cancelAllRoute'](), _0x4280be['GetInstance']()['showArrow']();
        }
        ['btn__R'](_0x14273d) {
            _0x14273d['visible'] && Laya['Tween']['to'](_0x14273d, { 'rotation': 0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x14273d, { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    this['btn_L'](_0x14273d);
                }));
            }));
        }
        ['btn_L'](_0x2b865d) {
            _0x2b865d['visible'] && Laya['Tween']['to'](_0x2b865d, { 'rotation': -0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                Laya['Tween']['to'](_0x2b865d, { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    this['btn__R'](_0x2b865d);
                }));
            }));
        }
    }
    class _0x2443ee {
        static ['getInstance']() {
            return this['Instance'] || (this['Instance'] = new _0x2443ee()), this['Instance'];
        }
        ['start'](_0x379f05) {
            this['init'](), this['parent'] = _0x379f05, this['gameUI'] = new _0x124bc0(_0x379f05['getChildByName']('GameUI')), this['titleUI'] = new _0x425c8f(_0x379f05['getChildByName']('TitleUI')), this['endUI'] = new _0x31c0d5(_0x379f05['getChildByName']('EndUI')), this['storeUI'] = new _0x242f40(_0x379f05['getChildByName']('StoreUI')), this['chooseUI'] = new _0x233bc6(_0x379f05['getChildByName']('ChooseUI')), this['startUI'] = new _0x51eebb(_0x379f05['getChildByName']('StartUI')), this['SignUI'] = new _0x1f3a4d(_0x379f05['getChildByName']('SignUI')), this['rewardUI'] = new _0x4f18b6(_0x379f05['getChildByName']('RewardUI')), this['UnLockUI'] = new _0x53e8c7(_0x379f05['getChildByName']('UnLockUI')), this['skinUI'] = new _0x23586d(_0x379f05['getChildByName']('SkinUI')), this['ShareUI'] = new _0x18c494(_0x379f05['getChildByName']('ShareUI')), this['ShenShouUI'] = new _0x1b2063(_0x379f05['getChildByName']('ShenShouUI')), _0x3fd623['getWxCode'](function (_0x91ad68) {
                console['log']('获取Code\x20\x20\x20\x20' + _0x91ad68), _0x1b2063['ins']['GetRet'](_0x91ad68);
            }['bind'](this));
        }
        ['itemClick'](_0x33354d, _0x4a24e3) {
            this['storeUI']['itemClick'](_0x33354d, _0x4a24e3);
        }
        ['getRewardUI']() {
            return this['parent']['getChildByName']('RewardUI');
        }
        ['getSkinUI']() {
            return this['parent']['getChildByName']('SkinUI');
        }
        ['loadLead']() {
            this['gameUI']['loadLead']();
        }
        ['updateTipNumber']() {
            this['gameUI']['updateTipNumber']();
        }
        ['restReward']() {
            this['gameUI']['restReward'](), this['startUI']['restReward']();
        }
        ['startGameClick']() {
            this['startUI']['click']();
        }
        ['changeRewardMask'](_0x528533, _0x19ce7b) {
            this['startUI']['changeRewardMask'](_0x528533, _0x19ce7b);
        }
        static ['getUISelf']() {
            return this;
        }
        static ['getUI'](_0x47765b) {
            return _0x2443ee['getInstance']()[_0x47765b];
        }
        ['startClick']() {
            this['startUI']['_startClick']();
        }
        ['setEndUIAlpha_0']() {
            this['endUI']['setAlpha_0']();
        }
        ['setEndUIAlpha_1']() {
            this['endUI']['setAlpha_1']();
        }
        ['getParent']() {
            return this['parent']['parent'];
        }
        ['init']() {
            new _0x41fc2f();
        }
        ['gameStart']() {
            _0x2443ee['show']('startUI');
        }
        ['updateCoin']() {
            this['titleUI']['updateCoin'](), this['SignUI']['updateCoin'](), this['rewardUI']['updateCoin']();
        }
        static ['show'](..._0x368afc) {
            console['log']('显示' + _0x368afc[0x0]);
            _0x2443ee['getInstance']()[_0x368afc[0x0]] /*&& (YYGGames['gameBanner']['visible'] = ![]*/, 
            _0x2443ee['getUI'](_0x368afc[0x0])['ui']['visible'] || (_0x2443ee['getInstance']()[_0x368afc[0x0]]['_show'](), _0x2443ee['getInstance']()[_0x368afc[0x0]]['show'](..._0x368afc)), 
            (_0x2443ee['getUI']('startUI') && _0x2443ee['getUI']('startUI')['ui']['visible'] || _0x2443ee['getUI']('endUI') && _0x2443ee['getUI']('endUI')['ui']['visible'] || _0x2443ee['getUI']('HomeUI') && _0x2443ee['getUI']('HomeUI')['ui']['visible']) && _0x368afc[0x0] != 'SignUI' && _0x368afc[0x0] != 'storeUI' /*&& (YYGGames['gameBanner']['visible'] = !![]))*/; 
            this['OffPanel'](_0x368afc, !0x0)
        }
        static ['OffPanel'](_0x368d25, _0x2ac022) {
            var _0x745ff = 0x0;
            if ('gameUI' == _0x368d25[0x0] && (_0x745ff = 0x1), 'endUI' == _0x368d25[0x0] && (_0x745ff = 0x2), 'startUI' == _0x368d25[0x0] && (_0x745ff = 0x3), 0x0 != _0x745ff) {
                switch (_0x745ff) {
                case 0x1:
                    console['log'](0x10f447), _0x1b2063['ins']['recommend']['width'] = 0x0, _0x1b2063['ins']['recommend']['height'] = 0x0, _0x1b2063['ins']['onShowCloseBtn'](_0x2ac022);
                    if (0x0 == _0x2443ee['index'])
                        break;
                    _0x4c598f['hide']();
                    break;
                case 0x2:
                    _0x1b2063['ins']['recommend']['width'] = 0x0, _0x1b2063['ins']['recommend']['height'] = 0x0, _0x31c0d5['ins']['setBtn'](), _0x1b2063['ins']['onShowCloseBtn'](_0x2ac022), _0x1b2063['ins']['onShowResult'](_0x2ac022);
                    break;
                case 0x3:
                    if (_0x1b2063['ins']['recommend']['width'] = 0x0, _0x1b2063['ins']['recommend']['height'] = 0x0, _0x1b2063['ins']['onShowCloseBtn'](_0x2ac022), 0x0 == _0x2443ee['index'])
                        break;
                    _0x4c598f['hide']();
                }
                _0x2443ee['index']++;
            }
        }
        static ['hide'](..._0x435405) {
            _0x2443ee['getInstance']()[_0x435405[0x0]] && (_0x2443ee['getInstance']()[_0x435405[0x0]]['_hide'](), 
            _0x2443ee['getInstance']()[_0x435405[0x0]]['hide']()), 
            this['OffPanel'](_0x435405, !0x1),
             console['log']('关闭' + _0x435405[0x0]);
        }
        ['showDialog']() {
        }
        ['hideDialog']() {
        }
        ['clearDialog']() {
        }
        ['clearSlidImage']() {
        }
    }
    _0x2443ee['index'] = 0x0;
    const _0x2e927d = { 'userinfo_key': 'Build-A-Road-userinfo' };
    class _0x161787 extends Laya['Script'] {
        constructor() {
            super(), this['is_environmentcfg'] = !0x1, this['is_hardlevelcfg'] = !0x1;
        }
        static ['getInstance']() {
            return this['instance'] || (this['instance'] = new _0x161787()), this['instance'];
        }
        ['loadConfig'](_0x46dc51) {
            Laya['loader']['load']('config/levelcfg.json', Laya['Handler']['create'](this, () => {
                this['levelCfg'] = Laya['Loader']['getRes']('config/levelcfg.json'), this['load_environmentcfg'](), this['Load_Local_Key'](), _0x46dc51 && _0x46dc51();
            }), null, Laya['Loader']['JSON']);
        }
        ['Load_Local_Key']() {
            localStorage['getItem'](_0x2e927d['userinfo_key']) || localStorage['setItem'](_0x2e927d['userinfo_key'], JSON['stringify']({
                'level': 0x1,
                'chooseLevel': 0x1,
                'hardlevel': 0x1,
                'coin': 0x0,
                'last_car_id': 0x0,
                'now_car_id': 0x0,
                'get_cars': [0x0],
                'carAd_times': [
                    0x0,
                    0x1,
                    0x1,
                    0x1,
                    0x1,
                    0x1,
                    0x1,
                    0x1,
                    0x1,
                    0x1,
                    0x1
                ],
                'tip_times': 0x0,
                'is_newPlayer': !0x0,
                'playtimes': 0x0,
                'reward_time': 0x1,
                'encironment': 0x1,
                'can_get_red_bag': !0x1,
                'doubletime': 0x0,
                'getCoinTime': 0x0
            })), this['userInfo'] = JSON['parse'](localStorage['getItem'](_0x2e927d['userinfo_key'])), console['log'](this['userInfo'] + '---'), Laya['timer']['loop'](0x3e8, this, this['upLoadUserInfo']);
        }
        ['upLoadUserInfo']() {
            localStorage['setItem'](_0x2e927d['userinfo_key'], JSON['stringify'](this['userInfo']));
        }
        ['getUserInfo']() {
            return this['userInfo'];
        }
        ['getLevelCfg']() {
            return this['levelCfg'];
        }
        ['getHardlevelcfg']() {
            return this['hardlevelcfg'];
        }
        ['load_environmentcfg']() {
            this['is_environmentcfg'] || (this['is_environmentcfg'] = !0x0, Laya['loader']['load']('config/environmentcfg.json', Laya['Handler']['create'](this, () => {
                this['environmentcfg'] = Laya['Loader']['getRes']('config/environmentcfg.json');
            }), null, Laya['Loader']['JSON']));
        }
        ['load_hardlevelcfg']() {
            this['is_hardlevelcfg'] || (this['is_hardlevelcfg'] = !0x0, Laya['loader']['load']('config/hardlevel.json', Laya['Handler']['create'](this, () => {
                this['hardlevelcfg'] = Laya['Loader']['getRes']('config/hardlevel.json');
            }), null, Laya['Loader']['JSON']));
        }
        ['get_environmentcfg']() {
            if (this['is_environmentcfg'])
                return this['environmentcfg'];
            this['is_environmentcfg'] = !0x0, Laya['loader']['load']('config/environmentcfg.json', Laya['Handler']['create'](this, () => (this['environmentcfg'] = Laya['Loader']['getRes']('config/environmentcfg.json'), this['environmentcfg'])), null, Laya['Loader']['JSON']);
        }
        ['addCoins'](_0x2abc02) {
            this['userInfo']['coin'] += _0x2abc02, _0x2443ee['getInstance']()['updateCoin']();
        }
        ['addTips'](_0x920d4e) {
            this['userInfo']['tip_times'] += _0x920d4e, _0x2443ee['getInstance']()['updateTipNumber']();
        }
        ['subCoins'](_0x1c72ad) {
            this['userInfo']['coin'] -= _0x1c72ad, _0x2443ee['getInstance']()['updateCoin']();
        }
        ['getUnLockCarLevel'](_0x4953fa) {
            let _0x160a7f, _0x2dfe9f, _0x4920c0, _0x3e112d = [];
            if (_0x4953fa <= 0x5 && _0x4953fa > 0x1)
                _0x160a7f = 0x1, _0x2dfe9f = 0x5, _0x4920c0 = 0x1;
            else {
                if (_0x4953fa <= 0xa && _0x4953fa > 0x5)
                    _0x160a7f = 0x5, _0x2dfe9f = 0xa, _0x4920c0 = 0x2;
                else {
                    if (_0x4953fa <= 0x14 && _0x4953fa > 0xa)
                        _0x160a7f = 0xa, _0x2dfe9f = 0x14, _0x4920c0 = 0x3;
                    else {
                        if (_0x4953fa > 0x14) {
                            let _0x25bfb7 = Math['floor'](_0x4953fa / 0x14);
                            _0x160a7f = 0x14 * _0x25bfb7, _0x2dfe9f = 0x14 * _0x25bfb7 + 0x14, _0x4920c0 = 0x4 + _0x25bfb7;
                        }
                    }
                }
            }
            return _0x3e112d = [
                _0x160a7f,
                _0x2dfe9f,
                _0x4920c0
            ];
        }
        ['chekCarIsDone'](_0x4c00ae) {
            for (let _0x42d977 = 0x0; _0x42d977 < this['userInfo']['get_cars']['length']; _0x42d977++)
                return _0x4c00ae == this['userInfo']['get_cars'][_0x42d977] || _0x4c00ae == this['userInfo']['now_car_id'];
        }
    }
    class _0x5e15f8 extends _0x524f1e['MainScene']['MainUI'] {
        constructor() {
            super(), this['one'] = !0x1, this['one'] || (this['one'] = !0x0, Laya['MouseManager']['multiTouchEnabled'] = !0x1, this['logic'] = _0x161787['getInstance'](), this['gameStart']());
        }
        ['gameStart']() {
            this['logic']['loadConfig'](() => {
                this['userInfo'] = this['logic']['getUserInfo'](), this['userInfo']['chooseLevel'] = this['userInfo']['level'], _0x59d2cc['init'](), _0x4d7811['init'](), _0x1f2936['init'](), _0x4280be['GetInstance']()['init_Scene'](), _0x2443ee['getInstance']()['start'](this);
            });
        }
    }
    class _0x4e9bec extends Laya['Script'] {
        constructor() {
            super(), this['start'] = !0x0, this['begin'] = !0x0;
        }
        ['startMove']() {
        }
        ['randomFrom'](_0x53fdc2, _0x4be6cc) {
            return Math['floor'](Math['random']() * (_0x4be6cc - _0x53fdc2 + 0x1) + _0x53fdc2);
        }
        ['onEnable']() {
        }
        ['getParent']() {
            this['object'] = this['owner'], this['object']['visible'] = !0x0, this['object']['width'] = 0x78, this['object']['height'] = 0x145, this['object']['pivot'](0x3c, 0xa3), this['object']['pos'](-0x26, 0x4e), Laya['Tween']['to'](this['object'], { 'x': 0x1d8 }, 0x320, null, Laya['Handler']['create'](this, this['moveOver']));
        }
        ['moveOver']() {
            Laya['timer']['clear'](this, this['getParent']), this['object']['pos'](-0x26, 0x4e), this['object']['visible'] = !0x1, this['start'] = !0x0, Laya['Tween']['clearAll'](this['object']);
        }
        ['onDisable']() {
        }
    }
    class _0x176e3e extends Laya['Script'] {
        ['onAwake']() {
            this['guang'] = this['owner'];
        }
        ['onUpdate']() {
            'purpleLight' == this['guang']['name'] ? this['guang']['rotation'] -= 0.5 : (this['guang']['name'], this['guang']['rotation'] += 0.5);
        }
    }
    class _0x5914f7 extends Laya['Script'] {
        constructor() {
            super(), this['start'] = !0x0, this['begin'] = !0x0, this['begin'] && (this['startMove'](), this['timerRandom'] = this['randomFrom'](0x5dc, 0x9c4), this['begin'] = !0x1);
        }
        ['onAwake']() {
            this['star'] = this['owner'];
        }
        ['startMove']() {
            Laya['timer']['loop'](0x1, this, () => {
                this['start'] && (this['timerRandom'] = this['randomFrom'](0x12c, 0x320), this['timerRandom'], (Laya['timer']['once'](0x32, this, () => {
                    this['getParent']();
                }), this['start'] = !0x1));
            });
        }
        ['randomFrom'](_0xfded6f, _0x407dc1) {
            return Math['floor'](Math['random']() * (_0x407dc1 - _0xfded6f + 0x1) + _0xfded6f);
        }
        ['getParent']() {
            this['object'] = this['owner'], Laya['Tween']['to'](this['object'], {
                'scaleX': 1.5,
                'scaleY': 1.5
            }, this['timerRandom'], null, Laya['Handler']['create'](this, this['moveOver']));
        }
        ['moveOver']() {
            Laya['Tween']['to'](this['object'], {
                'scaleX': 0.5,
                'scaleY': 0.5
            }, this['timerRandom'], null, Laya['Handler']['create'](this, function () {
                this['object']['scale'](0.2, 0.2), Laya['timer']['clear'](this, this['getParent']), this['start'] = !0x0, Laya['Tween']['clearAll'](this['object']);
            }));
        }
        ['onEnable']() {
        }
        ['onDisable']() {
        }
    }
    var _0x1c1f61 = Laya['Tween'];
    class _0x13edab extends Laya['Script'] {
        ['onAwake']() {
            this['btn'] = this['owner'], this['btn_effect'] || _0x4aeee2['load']('btn_effect', this['btn'], {
                'x': 0x0,
                'y': 0x0
            }, this, function (_0x1d8930) {
                this['btn_effect'] = _0x1d8930, this['btn_effect_white'] = this['btn_effect']['getChildByName']('white'), this['btn_effect_guang'] = this['btn_effect']['getChildByName']('guang'), this['btn_effect_guang']['visible'] = !0x1, this['btn_effect_white']['visible'] = !0x1, setTimeout(() => {
                    this['btnEffect']();
                }, 0x5dc);
            });
        }
        ['btnEffect']() {
            _0x1c1f61['to'](this['btn'], { 'rotation': 0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                _0x1c1f61['to'](this['btn'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                    Laya['timer']['once'](0x12c, this, function () {
                        _0x1c1f61['to'](this['btn'], { 'rotation': -0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                            _0x1c1f61['to'](this['btn'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                Laya['timer']['once'](0x12c, this, function () {
                                    _0x1c1f61['to'](this['btn'], { 'rotation': 0x7 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                        _0x1c1f61['to'](this['btn'], { 'rotation': 0x0 }, 0xc8, null, Laya['Handler']['create'](this, function () {
                                            _0x1c1f61['to'](this['btn'], {
                                                'scaleX': 1.2,
                                                'scaleY': 1.2
                                            }, 0x8c, null, Laya['Handler']['create'](this, function () {
                                                _0x1c1f61['to'](this['btn'], {
                                                    'scaleX': 0x1,
                                                    'scaleY': 0x1
                                                }, 0xa0, null, Laya['Handler']['create'](this, function () {
                                                    this['btnEffect']();
                                                }));
                                            }));
                                        }));
                                    }));
                                });
                            }));
                        }));
                    });
                }));
            }));
        }
    }
    class _0x4d5969 {
        constructor() {
        }
        static ['init']() {
            var _0x1d9653 = Laya['ClassUtils']['regClass'];
            _0x1d9653('Scripts/Enter.ts', _0x5e15f8), _0x1d9653('Scripts/LightTool/lightEffect.ts', _0x4e9bec), _0x1d9653('Scripts/LightTool/RotLight.ts', _0x176e3e), _0x1d9653('Scripts/LightTool/StarEffect.ts', _0x5914f7), _0x1d9653('Scripts/LightTool/ComBtnEffect2.ts', _0x13edab);
        }
    }
    _0x4d5969['width'] = 0x280, _0x4d5969['height'] = 0x470, _0x4d5969['scaleMode'] = 'showall', _0x4d5969['screenMode'] = 'none', _0x4d5969['alignV'] = 'middle', _0x4d5969['alignH'] = 'center', _0x4d5969['startScene'] = 'MainScene/Main.scene', _0x4d5969['sceneRoot'] = '', _0x4d5969['debug'] = !0x1, _0x4d5969['stat'] = !0x1, _0x4d5969['physicsDebug'] = !0x1, _0x4d5969['exportSceneToJson'] = !0x0, _0x4d5969['init']();
    class _0x867ad3 {
        constructor() {
            Laya['ResourceVersion']['enable']('version.json', Laya['Handler']['create'](this, this['onVersionLoaded']), Laya['ResourceVersion']['FILENAME_VERSION']);
        }
        ['onVersionLoaded']() {
            Laya['AtlasInfoManager']['enable']('fileconfig.json', Laya['Handler']['create'](this, this['onConfigLoaded']));
        }
        ['onConfigLoaded']() {
            _0x4d5969['startScene'] && Laya['Scene']['open'](_0x4d5969['startScene']);
        }
    }
    var _0x263233 = null, _0x23a41d = function () {
            var _0x3f3426 = {
                'width': 0x280,
                'height': 0x470,
                'scaleMode': 'showall',
                'screenMode': 'none',
                'alignV': 'middle',
                'alignH': 'center'
            };
            window['Laya3D'] ? Laya3D['init'](_0x4d5969['width'], _0x4d5969['height']) : Laya['init'](_0x4d5969['width'], _0x4d5969['height'], Laya['WebGL']), Laya['stage']['scaleMode'] = _0x3f3426['scaleMode'], Laya['stage']['screenMode'] = _0x3f3426['screenMode'], Laya['stage']['alignV'] = _0x3f3426['alignV'], Laya['stage']['alignH'] = _0x3f3426['alignH'], _0x263233 = new Laya['Timer'](), Laya['URL']['exportSceneToJson'] = _0x4d5969['exportSceneToJson'];
            var _0x30ab47 = new Laya['Image']('img_loadBG.png');
            _0x30ab47['name'] = 'LoadUIImg', Laya['stage']['addChild'](_0x30ab47);
            var _0x2ba2ce = new Laya['Image']('img_boll.png');
            _0x30ab47['addChild'](_0x2ba2ce), _0x2ba2ce['pivot'](0x100, 0x100), _0x2ba2ce['centerX'] = 0x0, _0x2ba2ce['y'] = Laya['stage']['height'] / 0x2;
            var _0x1f6a95 = new Laya['Image']('img_car.png');
            _0x2ba2ce['addChild'](_0x1f6a95), _0x1f6a95['pivot'](0x100, 0x100), _0x1f6a95['centerX'] = 0x0, _0x1f6a95['centerY'] = 0x0;
            var _0x526773 = new Laya['Image']('img_tree.png');
            _0x2ba2ce['addChild'](_0x526773);
            var _0x1b5ce7 = new Laya['Image']('progressBG.png');
            _0x30ab47['addChild'](_0x1b5ce7), _0x1b5ce7['width'] = 0x1e8, _0x1b5ce7['height'] = 0x24, _0x1b5ce7['centerX'] = 0x0, _0x1b5ce7['centerY'] = 0x12c;
            var _0x33df67 = new Laya['Panel']();
            _0x1b5ce7['addChild'](_0x33df67), _0x33df67['width'] = 0x1;
            var _0x2797af = new Laya['Image']('progress.png');
            _0x33df67['addChild'](_0x2797af), _0x2797af['pos'](0x6, 0x6);
            var _0x523336 = new Laya['Label']();
            _0x1b5ce7['addChild'](_0x523336), _0x523336['text'] = 'Loading...', _0x523336['fontSize'] = 0x20, _0x523336['color'] = '#FFFFFF', _0x523336['centerX'] = 0x0, _0x523336['y'] = 0x3c;
            var _0x12f554 = 0x0;
            _0x263233['frameLoop'](0x1, this, () => {
                (_0x33df67['width'] += 0x2, _0x1f6a95['rotation'] -= 0x2, _0x33df67['width'] > 0x1e0) && (_0x33df67['width'] = 0x1e0);
            });

            let musicOn = JSON.parse(Laya['LocalStorage']['getItem']('Build-A-Road-musicState')) || true;
            // let musicOn = Laya['LocalStorage']['getItem']('Build-A-Road-musicState');
            if (musicOn) {
                Laya['SoundManager']['playMusic']('res/audio/bgm.mp3');
            }
            else {
                Laya['SoundManager']['stopMusic']();
            }

            new _0x867ad3();
            // YYGGames['init']('Build-A-Road', () => {
            //     YYGGames['icon']['scale'](0.8, 0.8), 
            //     YYGGames['icon']['top'] = 0x14, 
            //     YYGGames['icon']['right'] = 0x14,
            //      YYGGames['gameBanner']['setBannerSize'](0x96, 0x96), 
            //      YYGGames['gameBanner']['games']['spaceX'] = 0xa, 
            //      YYGGames['gameBanner']['bottom'] = 0x32, 
            //      YYGGames['gameBanner']['visible'] = ![],
            //       YYGGames['gameBox']['visible'] = ![],
            //        YYGGames['audio']['pause'] = Laya['LocalStorage']['getItem']('Build-A-Road-musicState') ? JSON['parse'](Laya['LocalStorage']['getItem']('Build-A-Road-musicState')) : ![],
            //        Laya['SoundManager']['playMusic']('res/audio/bgm.mp3'),
            //         new _0x867ad3();
            // });
        };
    _0x23a41d(), window['pauseTimes'] = function () {
        _0x263233['pause']();
    };
}();