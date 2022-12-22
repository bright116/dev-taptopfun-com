var _typeof2 = typeof Symbol === 'function' && typeof Symbol['iterator'] === 'symbol' ? function (_0x8b4f6f) {
    return typeof _0x8b4f6f;
} : function (_0x34a1f8) {
    return _0x34a1f8 && typeof Symbol === 'function' && _0x34a1f8['constructo' + 'r'] === Symbol && _0x34a1f8 !== Symbol['prototype'] ? 'symbol' : typeof _0x34a1f8;
};
function _typeof(_0x3e5718) {
    return (_typeof = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol['iterator']) ? function (_0x2c6026) {
        return typeof _0x2c6026 === 'undefined' ? 'undefined' : _typeof2(_0x2c6026);
    } : function (_0x3abeeb) {
        return _0x3abeeb && 'function' == typeof Symbol && _0x3abeeb['constructo' + 'r'] === Symbol && _0x3abeeb !== Symbol['prototype'] ? 'symbol' : typeof _0x3abeeb === 'undefined' ? 'undefined' : _typeof2(_0x3abeeb);
    })(_0x3e5718);
}
function _possibleConstructorReturn(_0x42e387, _0x2fa5b2) {
    return !_0x2fa5b2 || 'object' !== _typeof(_0x2fa5b2) && 'function' != typeof _0x2fa5b2 ? _assertThisInitialized(_0x42e387) : _0x2fa5b2;
}
function _assertThisInitialized(_0x4666c0) {
    if (void 0x0 === _0x4666c0)
        throw new ReferenceError('this\x20hasn\x27' + 't\x20been\x20ini' + 'tialised\x20-' + '\x20super()\x20h' + 'asn\x27t\x20been' + '\x20called');
    return _0x4666c0;
}
function _get(_0x8c372f, _0x86be97, _0x41e81d) {
    return (_get = 'undefined' != typeof Reflect && Reflect['get'] ? Reflect['get'] : function (_0x48c1a3, _0x1f0281, _0x50a352) {
        var _0x14899b = _superPropBase(_0x48c1a3, _0x1f0281);
        if (_0x14899b) {
            var _0xcfd569 = Object['getOwnProp' + 'ertyDescri' + 'ptor'](_0x14899b, _0x1f0281);
            return _0xcfd569['get'] ? _0xcfd569['get']['call'](_0x50a352) : _0xcfd569['value'];
        }
    })(_0x8c372f, _0x86be97, _0x41e81d || _0x8c372f);
}
function _superPropBase(_0x197913, _0x11406c) {
    for (; !Object['prototype']['hasOwnProp' + 'erty']['call'](_0x197913, _0x11406c) && null !== (_0x197913 = _getPrototypeOf(_0x197913));) {
    }
    return _0x197913;
}
function _getPrototypeOf(_0x4c6a6b) {
    return (_getPrototypeOf = Object['setPrototy' + 'peOf'] ? Object['getPrototy' + 'peOf'] : function (_0x2ae660) {
        return _0x2ae660['__proto__'] || Object['getPrototy' + 'peOf'](_0x2ae660);
    })(_0x4c6a6b);
}
function _inherits(_0x85c79c, _0x27b13b) {
    if ('function' != typeof _0x27b13b && null !== _0x27b13b)
        throw new TypeError('Super\x20expr' + 'ession\x20mus' + 't\x20either\x20b' + 'e\x20null\x20or\x20' + 'a\x20function');
    _0x85c79c['prototype'] = Object['create'](_0x27b13b && _0x27b13b['prototype'], {
        'constructor': {
            'value': _0x85c79c,
            'writable': !0x0,
            'configurable': !0x0
        }
    }), _0x27b13b && _setPrototypeOf(_0x85c79c, _0x27b13b);
}
function _setPrototypeOf(_0x55f3b0, _0xdc3af3) {
    return (_setPrototypeOf = Object['setPrototy' + 'peOf'] || function (_0x5347c3, _0x465420) {
        return _0x5347c3['__proto__'] = _0x465420, _0x5347c3;
    })(_0x55f3b0, _0xdc3af3);
}
function _classCallCheck(_0x164213, _0x141ebe) {
    if (!(_0x164213 instanceof _0x141ebe))
        throw new TypeError('Cannot\x20cal' + 'l\x20a\x20class\x20' + 'as\x20a\x20funct' + 'ion');
}
function _defineProperties(_0x3c1386, _0x16d72f) {
    for (var _0x257f54 = 0x0; _0x257f54 < _0x16d72f['length']; _0x257f54++) {
        var _0x450f69 = _0x16d72f[_0x257f54];
        _0x450f69['enumerable'] = _0x450f69['enumerable'] || !0x1, _0x450f69['configurab' + 'le'] = !0x0, 'value' in _0x450f69 && (_0x450f69['writable'] = !0x0), Object['defineProp' + 'erty'](_0x3c1386, _0x450f69['key'], _0x450f69);
    }
}
function _createClass(_0x562469, _0x1d200e, _0x30182d) {
    return _0x1d200e && _defineProperties(_0x562469['prototype'], _0x1d200e), _0x30182d && _defineProperties(_0x562469, _0x30182d), _0x562469;
}
!function () {
    var _0xe53014 = function () {
        function _0x527462() {
            _classCallCheck(this, _0x527462);
        }
        return _createClass(_0x527462, null, [{
                'key': 'saveData',
                'value': function _0x41d042() {
                    var _0x111d77 = JSON['stringify'](_0x527462['allInfoIni' + 't']);
                    Laya['LocalStora' + 'ge']['setJSON'](_0x527462['KEY_NAME'], _0x111d77);
                }
            }]), _0x527462;
    }();
    _0xe53014['soundOn'] = !0x0, _0xe53014['shokeOn'] = !0x0, _0xe53014['Events'] = {
        'RELIVE': 'RELIVE',
        'REGAME': 'REGAME',
        'RETURN_MAIN': 'RETURN_MAI' + 'N',
        'RESTART': 'RESTART',
        'MOUSE_DOWN': 'MOUSE_DOWN',
        'MOUSE_UP': 'MOUSE_UP',
        'MONEY_CHANGE': 'MONEY_CHAN' + 'GE',
        'STAGE_PASS': 'STAGE_PASS',
        'BRIDGE_CHANGE': 'BRIDGE_CHA' + 'NGE',
        'USE_GOD_TOOL': 'USE_GOD_TO' + 'OL'
    }, _0xe53014['SEventDisp' + 'atcher'] = new Laya['Sprite'](), _0xe53014['SHOP_TYPE'] = [
        0x0,
        0x0,
        0x1,
        0x0,
        0x4e2,
        0x5dc,
        0x6d6,
        0x7d0,
        0x8ca,
        0x9c4
    ], _0xe53014['AV_COIN'] = 0xfa, _0xe53014['STAGE_COIN' + '_AWARD'] = 0x32, _0xe53014['allInfoIni' + 't'] = {
        'stage': 0x1,
        'coin': 0x0,
        'carid': 0x1,
        'shopOwnItem': [
            0x0,
            0x1,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ],
        'guide': 0x0
    }, _0xe53014['KEY_NAME'] = 'HAPPY_B_RI' + 'DGE';
    var _0x5ca23a, _0x1b774d = Laya['ClassUtils']['regClass'];
    !function (_0x24e51f) {
        !function (_0x15b3bb) {
            var _0x1d2a92 = function (_0x348f43) {
                function _0x46d001() {
                    return _classCallCheck(this, _0x46d001), _possibleConstructorReturn(this, _getPrototypeOf(_0x46d001)['call'](this));
                }
                return _inherits(_0x46d001, Laya['Scene']), _createClass(_0x46d001, [{
                        'key': 'createChil' + 'dren',
                        'value': function _0xe752d0() {
                            _get(_getPrototypeOf(_0x46d001['prototype']), 'createChil' + 'dren', this)['call'](this), this['loadScene']('test/TestS' + 'cene');
                        }
                    }]), _0x46d001;
            }();
            _0x15b3bb['TestSceneU' + 'I'] = _0x1d2a92, _0x1b774d('ui.test.Te' + 'stSceneUI', _0x1d2a92);
        }(_0x24e51f['test'] || (_0x24e51f['test'] = {}));
    }(_0x5ca23a || (_0x5ca23a = {}));
    var _0x4c592e = function (_0x2280e5) {
            function _0x372f58() {
                var _0x4aa964;
                return _classCallCheck(this, _0x372f58), (_0x4aa964 = _possibleConstructorReturn(this, _getPrototypeOf(_0x372f58)['apply'](this, arguments)))['_bridgepos'] = [
                    0x0,
                    0x0,
                    0x0
                ], _0x4aa964['_posVector'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x4aa964['_localScal' + 'e'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x4aa964['_rotationE' + 'uler'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x4aa964['_init'] = !0x1, _0x4aa964['_needMove'] = !0x1, _0x4aa964['_isRight'] = !0x1, _0x4aa964['_needClear'] = !0x1, _0x4aa964['_topRotati' + 'onEuler'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x4aa964['_canMove'] = !0x1, _0x4aa964;
            }
            return _inherits(_0x372f58, Laya['Script']), _createClass(_0x372f58, [
                {
                    'key': 'onEnable',
                    'value': function _0x482d48() {
                        this['_rotationE' + 'uler']['setValue'](0x0, 0xb4, 0x0), this['owner']['transform']['rotationEu' + 'ler'] = this['_rotationE' + 'uler'];
                        var _0x1f71ad = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/Assets/3d' + '/mesh_map_' + '1.png');
                        this['materialBi' + 'll2'] || (this['materialBi' + 'll2'] = new Laya['PBRStandar' + 'dMaterial'](), this['materialBi' + 'll2']['albedoText' + 'ure'] = _0x1f71ad, this['materialBi' + 'll2']['albedoColo' + 'r'] = new Laya['Vector4'](0x1, 0x1, 0x1, 1.2), this['materialBi' + 'll2']['renderMode'] = 0x3), this['owner']['getChildBy' + 'Name']('alt')['meshRender' + 'er']['material'] = this['materialBi' + 'll2'], this['top'] = this['owner']['getChildBy' + 'Name']('bridge2'), this['_topRotati' + 'onEuler'] = this['top']['transform']['rotationEu' + 'ler'], this['_init'] && (this['_topRotati' + 'onEuler']['y'] = -0x2d, this['top']['transform']['rotationEu' + 'ler'] = this['_topRotati' + 'onEuler']);
                    }
                },
                {
                    'key': 'init',
                    'value': function _0x4e2abd() {
                        this['_bridgepos'] = [
                            0x0,
                            1.15,
                            0x0
                        ], this['setPos'](), this['_init'] = !0x0;
                    }
                },
                {
                    'key': 'extendsPos',
                    'value': function _0x1cfaea() {
                        var _0xaab4b = this['owner']['transform']['position'];
                        this['_bridgepos'][0x0] = _0xaab4b['x'], this['_bridgepos'][0x1] = _0xaab4b['y'], this['_bridgepos'][0x2] = _0xaab4b['z'];
                    }
                },
                {
                    'key': 'changePos',
                    'value': function _0x516df5(_0x437fa6) {
                        this['_topRotati' + 'onEuler']['y'] = _0x437fa6 > 0x0 ? 0x2d : -0x2d, this['top']['transform']['rotationEu' + 'ler'] = this['_topRotati' + 'onEuler'], this['_bridgepos'][0x0] += _0x437fa6, this['_bridgepos'][0x2] -= Math['abs'](_0x437fa6), this['_isRight'] = _0x437fa6 > 0x0, this['setPos']();
                    }
                },
                {
                    'key': 'setScale',
                    'value': function _0x306a2c(_0xb5573d) {
                        this['_localScal' + 'e']['setValue'](_0xb5573d, 0x32, _0xb5573d), this['owner']['transform']['localScale'] = this['_localScal' + 'e'];
                    }
                },
                {
                    'key': 'setMove',
                    'value': function _0x3a56db(_0x2a4eb8) {
                        _0x2a4eb8 > 0x0 && (this['tweenBridg' + 'e'](0x0), this['canMove'] = !0x0);
                    }
                },
                {
                    'key': 'tweenBridg' + 'e',
                    'value': function _0x2310da() {
                        var _0x4f5064 = this, _0x3acf99 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : -0x1;
                        if (!this['_needClear']) {
                            if (-0x1 == _0x3acf99)
                                return Laya['Tween']['clearAll'](this['_pos']), void (this['owner']['transform']['position'] = this['_posVector']);
                            var _0xc6368a;
                            _0xc6368a = this['_isRight'] ? [
                                [
                                    0.5,
                                    0.5
                                ],
                                [
                                    -0.5,
                                    -0.5
                                ],
                                [
                                    -0.5,
                                    -0.5
                                ],
                                [
                                    0.5,
                                    0.5
                                ]
                            ] : [
                                [
                                    0.5,
                                    -0.5
                                ],
                                [
                                    -0.5,
                                    0.5
                                ],
                                [
                                    -0.5,
                                    0.5
                                ],
                                [
                                    0.5,
                                    -0.5
                                ]
                            ], this['_pos'] = this['owner']['transform']['position'];
                            var _0x113ac5 = this['_pos']['x'] + _0xc6368a[_0x3acf99][0x0], _0x370f16 = this['_pos']['y'], _0x11c360 = this['_pos']['z'] + _0xc6368a[_0x3acf99][0x1];
                            0x3 == _0x3acf99 ? _0x3acf99 = 0x0 : _0x3acf99++, Laya['Tween']['to'](this['_pos'], {
                                'x': _0x113ac5,
                                'y': _0x370f16,
                                'z': _0x11c360,
                                'update': new Laya['Handler'](this, function () {
                                    _0x4f5064['owner']['transform']['position'] = _0x4f5064['_pos'];
                                })
                            }, 0x3e8, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, function () {
                                _0x4f5064['tweenBridg' + 'e'](_0x3acf99);
                            }));
                        }
                    }
                },
                {
                    'key': 'setPos',
                    'value': function _0x4d9dd7() {
                        this['_posVector']['setValue'](this['_bridgepos'][0x0], this['_bridgepos'][0x1], this['_bridgepos'][0x2]), this['owner']['transform']['position'] = this['_posVector'];
                    }
                },
                {
                    'key': 'onDisable',
                    'value': function _0x311290() {
                        this['_needClear'] = !0x0;
                    }
                },
                {
                    'key': 'canMove',
                    'get': function _0x259044() {
                        return this['_canMove'];
                    },
                    'set': function _0x5008de(_0x38de91) {
                        this['_canMove'] = _0x38de91;
                    }
                }
            ]), _0x372f58;
        }(), _0x1220b2 = function () {
            function _0x4d3e5d() {
                _classCallCheck(this, _0x4d3e5d);
            }
            return _createClass(_0x4d3e5d, null, [
                {
                    'key': 'playMusic',
                    'value': function _0x4ae5e6(_0x523ccc) {
                        _0xe53014['soundOn'] && (0x0 == _0x523ccc ? Laya['SoundManag' + 'er']['playSound']('res/music/' + 'btn.mp3') : 0x1 == _0x523ccc ? Laya['SoundManag' + 'er']['playSound']('res/music/' + 'die.mp3') : 0x2 == _0x523ccc ? Laya['SoundManag' + 'er']['playSound']('res/music/' + 'fen2.mp3') : 0x3 == _0x523ccc ? Laya['SoundManag' + 'er']['playSound']('res/music/' + 'fen3.mp3') : 0x4 == _0x523ccc ? Laya['SoundManag' + 'er']['playSound']('res/music/' + 'fen4.mp3') : 0x5 == _0x523ccc && Laya['SoundManag' + 'er']['playSound']('res/music/' + 'long.mp3', 0x0));
                    }
                },
                {
                    'key': 'backGround' + 'Music',
                    'value': function _0x5b57d2() {
                    }
                },
                {
                    'key': 'closeMusic',
                    'value': function _0x499097() {
                        Laya['SoundManag' + 'er']['stopAll']();
                    }
                }
            ]), _0x4d3e5d;
        }(), _0x392ff1 = function (_0xc647d8) {
            function _0x5c600c() {
                var _0x25c56b;
                return _classCallCheck(this, _0x5c600c), (_0x25c56b = _possibleConstructorReturn(this, _getPrototypeOf(_0x5c600c)['apply'](this, arguments)))['carposVec'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x25c56b['carrotateV' + 'ec'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x25c56b['carRotatio' + 'n'] = [
                    [
                        0x0,
                        0x87,
                        0x0
                    ],
                    [
                        0x0,
                        0xe1,
                        0x0
                    ]
                ], _0x25c56b['_carpos'] = [
                    0x0,
                    2.5,
                    0.3
                ], _0x25c56b;
            }
            return _inherits(_0x5c600c, Laya['Script']), _createClass(_0x5c600c, [
                {
                    'key': 'onEnable',
                    'value': function _0x257473() {
                        this['owner']['transform']['localScale'] = new Laya['Vector3'](0x78, 0x78, 0x78), this['isdead'] = !0x1, this['materialBi' + 'll'] || (this['materialBi' + 'll'] = new Laya['BlinnPhong' + 'Material']()), this['owner']['getChildBy' + 'Name']('car0' + _0xe53014['allInfoIni' + 't']['carid'])['meshRender' + 'er']['material'] = this['materialBi' + 'll'];
                        var _0x3bc2fa = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/Assets/3d' + '/car01.fbm' + '/car_1.jpg');
                        this['materialBi' + 'll']['albedoText' + 'ure'] = _0x3bc2fa, this['setRotatio' + 'n'](this['carRotatio' + 'n'][0x0]);
                    }
                },
                {
                    'key': 'onDisable',
                    'value': function _0x4d4281() {
                    }
                },
                {
                    'key': 'init',
                    'value': function _0x435ce1() {
                        this['_carpos'] = [
                            0x0,
                            2.5,
                            0.3
                        ], this['setPos']();
                    }
                },
                {
                    'key': 'setPos',
                    'value': function _0x53fdad() {
                        var _0x4261ca = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : [];
                        _0x4261ca['length'] > 0x0 && (this['_carpos'][0x0] = _0x4261ca[0x0], this['_carpos'][0x1] = _0x4261ca[0x1], this['_carpos'][0x2] = _0x4261ca[0x2]), this['carposVec']['setValue'](this['_carpos'][0x0], this['_carpos'][0x1], this['_carpos'][0x2]), this['owner']['transform']['position'] = this['carposVec'];
                    }
                },
                {
                    'key': 'setRotatio' + 'n',
                    'value': function _0x5b70e2(_0x521ad6) {
                        this['carrotateV' + 'ec']['setValue'](_0x521ad6[0x0], _0x521ad6[0x1], _0x521ad6[0x2]), this['owner']['transform']['rotationEu' + 'ler'] = this['carrotateV' + 'ec'];
                    }
                },
                {
                    'key': 'carRun',
                    'value': function _0x5415fa(_0x305c4e, _0x3f6ee4, _0x22b91d, _0x1acc15, _0x24cd8a, _0x4b8920) {
                        var _0x333ac5 = this, _0x64f75a = Math['abs'](_0x3f6ee4), _0x178265 = _0x22b91d ? 0x1a0 : 0xda * _0x24cd8a / 0x64;
                        this['isdead'] = _0x305c4e > 0xda * _0x64f75a - 0x36 + _0x178265 / 0x2 || _0x305c4e < 0xda * _0x64f75a - 0x36 - _0x178265 / 0x2;
                        var _0x5c7f4b = 0x0, _0x2b2f07 = 0x0;
                        this['isdead'] || (_0x2b2f07 = Math['abs'](_0x305c4e - 0xda * _0x64f75a + 0x36) / _0x178265 * 0x2, _0x5c7f4b = _0x2b2f07 < 0.1 ? 0x4 : _0x2b2f07 < 0.3 ? 0x3 : _0x2b2f07 < 0.5 ? 0x2 : 0x1), _0x5c7f4b > 0x1 && _0x1220b2['playMusic'](_0x5c7f4b);
                        var _0x5c1a3e = (_0x305c4e + 0x96) / _0x64f75a / 0xda;
                        this['isdead'] || (_0x5c1a3e = 0x1);
                        var _0x4489d2 = _0x3f6ee4 * _0x5c1a3e, _0x354678 = -_0x64f75a * _0x5c1a3e;
                        this['dieCarPos'] = [
                            this['_carpos'][0x0],
                            this['_carpos'][0x1],
                            this['_carpos'][0x2]
                        ];
                        var _0x580424, _0x130e8d, _0x23d88f = this['owner']['transform']['position'], _0x35cb14 = this['owner']['transform']['rotationEu' + 'ler'];
                        this['dieCarRota' + 'te'] = [
                            _0x35cb14['x'],
                            _0x35cb14['y'],
                            _0x35cb14['z']
                        ], _0x1acc15 && (_0x580424 = _0x1acc15['transform']['position'], _0x130e8d = [
                            _0x580424['x'],
                            _0x580424['y'],
                            _0x580424['z']
                        ], this['dieLightPo' + 's'] = _0x130e8d, this['_pointLigh' + 't'] = _0x1acc15), Laya['Tween']['to'](_0x23d88f, {
                            'x': this['_carpos'][0x0] + _0x4489d2,
                            'y': this['_carpos'][0x1] + 0x0,
                            'z': this['_carpos'][0x2] + _0x354678,
                            'update': new Laya['Handler'](this, function () {
                                _0x333ac5['owner']['transform']['position'] = _0x23d88f, _0x1acc15 && (_0x580424['x'] = _0x130e8d[0x0] + _0x23d88f['x'] - _0x333ac5['_carpos'][0x0], _0x580424['y'] = _0x130e8d[0x1] + _0x23d88f['y'] - _0x333ac5['_carpos'][0x1], _0x580424['z'] = _0x130e8d[0x2] + _0x23d88f['z'] - _0x333ac5['_carpos'][0x2], _0x1acc15['transform']['position'] = _0x580424);
                            })
                        }, 0x1f4, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, function () {
                            _0x333ac5['_carpos'][0x0] += _0x4489d2, _0x333ac5['_carpos'][0x1] += 0x0, _0x333ac5['_carpos'][0x2] += _0x354678, _0x333ac5['isdead'] ? _0x333ac5['dieHander']() : _0x4b8920(), _0x333ac5['isdead'] || _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['ADD_GOLD'], [
                                _0x5c7f4b,
                                _0x4489d2
                            ]);
                        }));
                    }
                },
                {
                    'key': 'turnRotate',
                    'value': function _0x7cef01(_0x3f77a0, _0x345f5e) {
                        var _0x472ca8 = this, _0x922423 = _0x3f77a0 ? this['carRotatio' + 'n'][0x1] : this['carRotatio' + 'n'][0x0], _0x2486ab = this['owner']['transform']['rotationEu' + 'ler'];
                        Laya['Tween']['to'](_0x2486ab, {
                            'x': _0x922423[0x0],
                            'y': _0x922423[0x1],
                            'z': _0x922423[0x2],
                            'update': new Laya['Handler'](this, function () {
                                _0x472ca8['owner']['transform']['rotationEu' + 'ler'] = _0x2486ab;
                            })
                        }, 0x1f4, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, function () {
                            _0x345f5e();
                        }));
                    }
                },
                {
                    'key': 'relive',
                    'value': function _0x3b4017() {
                        var _0xb7d3a9 = this['owner']['transform']['position'];
                        Laya['Tween']['clearAll'](_0xb7d3a9), this['isdead'] && (this['setPos'](this['dieCarPos']), this['setRotatio' + 'n'](this['dieCarRota' + 'te'])), this['isdead'] = !0x1, this['_pointLigh' + 't'] && this['_pointLigh' + 't']['transform']['position']['setValue'](this['dieLightPo' + 's'][0x0], this['dieLightPo' + 's'][0x1], this['dieLightPo' + 's'][0x2]);
                    }
                },
                {
                    'key': 'dieHander',
                    'value': function _0x383284() {
                        var _0x1a6429, _0x47bd51 = this, _0x17e607 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0;
                        if (0x0 == _0x17e607 && _0x1220b2['playMusic'](0x1), 0x1 == _0x17e607)
                            return _0x1a6429 = this['owner']['transform']['position'], Laya['Tween']['to'](_0x1a6429, {
                                'y': this['owner']['transform']['position']['y'] - 0x14,
                                'update': new Laya['Handler'](this, function () {
                                    _0x47bd51['owner']['transform']['position'] = _0x1a6429;
                                })
                            }, 0x640, Laya['Ease']['linearNone']), void _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RELIVE']);
                        _0x1a6429 = this['owner']['transform']['rotationEu' + 'ler'], Laya['Tween']['to'](_0x1a6429, {
                            'x': _0x1a6429['x'] + 0x5a,
                            'y': _0x1a6429['y'],
                            'z': _0x1a6429['z'],
                            'update': new Laya['Handler'](this, function () {
                                _0x47bd51['owner']['transform']['rotationEu' + 'ler'] = _0x1a6429;
                            })
                        }, 0x12c, Laya['Ease']['strongInOu' + 't']), Laya['timer']['once'](0xc8, this, function () {
                            _0x47bd51['dieHander'](0x1);
                        });
                    }
                }
            ]), _0x5c600c;
        }(), _0x2986ae = function (_0x429f9d) {
            function _0x4b268c() {
                var _0xc29de;
                return _classCallCheck(this, _0x4b268c), (_0xc29de = _possibleConstructorReturn(this, _getPrototypeOf(_0x4b268c)['apply'](this, arguments)))['roadposVec'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0xc29de['roadrotate' + 'Vec'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0xc29de['roadRotati' + 'on'] = [
                    [
                        0xb4,
                        -0x2d,
                        0x0
                    ],
                    [
                        0x5a,
                        -0x2d,
                        0x0
                    ],
                    [
                        0xb4,
                        0x2d,
                        0x0
                    ],
                    [
                        0x5a,
                        0x2d,
                        0x0
                    ]
                ], _0xc29de['roadpos'] = [
                    0x0,
                    2.4,
                    -0.5
                ], _0xc29de['ridx'] = -0x1, _0xc29de['isTranspar' + 'ent'] = !0x1, _0xc29de;
            }
            return _inherits(_0x4b268c, Laya['Script']), _createClass(_0x4b268c, [
                {
                    'key': 'onEnable',
                    'value': function _0x22ad7d() {
                        this['owner']['transform']['localScale'] = new Laya['Vector3'](0xc8, 0x7d0, 0xc8), this['owner']['transform']['localScale' + 'Y'] = 0x0;
                    }
                },
                {
                    'key': 'onDisable',
                    'value': function _0x584937() {
                    }
                },
                {
                    'key': 'relive',
                    'value': function _0x1d88f3() {
                        this['setRotatio' + 'n'](), this['owner']['transform']['localScale' + 'Y'] = 0x0;
                    }
                },
                {
                    'key': 'extendsPos',
                    'value': function _0x4cb488() {
                        var _0x394a21 = this['owner']['transform']['position'];
                        this['roadpos'][0x0] = _0x394a21['x'], this['roadpos'][0x1] = _0x394a21['y'], this['roadpos'][0x2] = _0x394a21['z'];
                    }
                },
                {
                    'key': 'changePos',
                    'value': function _0x4ce0fc(_0x576353) {
                        this['roadpos'][0x0] += _0x576353, this['roadpos'][0x2] -= Math['abs'](_0x576353), this['setPos'](_0x576353);
                    }
                },
                {
                    'key': 'roadDown',
                    'value': function _0x17774e(_0x3b68bc) {
                        var _0x34da13 = this, _0x4cf7fd = this['roadRotati' + 'on'][this['ridx'] + 0x1], _0x5729e1 = this['owner']['transform']['rotationEu' + 'ler'];
                        Laya['Tween']['to'](_0x5729e1, {
                            'x': _0x4cf7fd[0x0],
                            'y': _0x4cf7fd[0x1],
                            'z': _0x4cf7fd[0x2],
                            'update': new Laya['Handler'](this, function () {
                                _0x34da13['owner']['transform']['rotationEu' + 'ler'] = _0x5729e1;
                            })
                        }, 0x1f4, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, function () {
                            _0x3b68bc();
                        }));
                    }
                },
                {
                    'key': 'changeRota' + 'tion',
                    'value': function _0x470391(_0x2510d8) {
                        var _0x320f40 = _0x2510d8 > 0x0 ? 0x2 : 0x0;
                        this['ridx'] = _0x320f40, this['setRotatio' + 'n']();
                    }
                },
                {
                    'key': 'init',
                    'value': function _0x498960() {
                        this['roadpos'] = [
                            0x0,
                            2.4,
                            -0.5
                        ], this['setPos'](), this['ridx'] = 0x0, this['setRotatio' + 'n']();
                    }
                },
                {
                    'key': 'setAlpha',
                    'value': function _0xb8eebe() {
                        var _0x42f9ab = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0;
                        this['pbrMater'] || (this['pbrMater'] = new Laya['PBRStandar' + 'dMaterial'](), this['pbrMater']['albedoColo' + 'r'] = new Laya['Vector4'](0x1, 0x1, 0x1, 0.2), this['pbrMater']['renderMode'] = 0x3), this['owner']['meshRender' + 'er']['material'] = this['pbrMater'], this['isTranspar' + 'ent'] = !0x0, this['setPos'](0x0, _0x42f9ab > 0x0);
                    }
                },
                {
                    'key': 'setPos',
                    'value': function _0x7d3a81() {
                        var _0x1bef71 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0, _0x27fba5 = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] && arguments[0x1];
                        (_0x1bef71 > 0x0 ? this['roadposVec']['setValue'](this['roadpos'][0x0] - 0.5, this['roadpos'][0x1], this['roadpos'][0x2] + 0.5) : _0x1bef71 < 0x0 ? this['roadposVec']['setValue'](this['roadpos'][0x0] + 0.5, this['roadpos'][0x1], this['roadpos'][0x2] - 0.5) : this['roadposVec']['setValue'](this['roadpos'][0x0], this['roadpos'][0x1], this['roadpos'][0x2]), this['isTranspar' + 'ent']) && (_0x27fba5 ? this['roadposVec']['setValue'](this['roadposVec']['x'] + 0.01, this['roadposVec']['y'], this['roadposVec']['z'] - 0.01) : this['roadposVec']['setValue'](this['roadposVec']['x'] - 0.01, this['roadposVec']['y'], this['roadposVec']['z'] - 0.01)), this['owner']['transform']['position'] = this['roadposVec'];
                    }
                },
                {
                    'key': 'setRotatio' + 'n',
                    'value': function _0x3b6ec6() {
                        var _0x18193b = this['roadRotati' + 'on'][this['ridx']];
                        this['roadrotate' + 'Vec']['setValue'](_0x18193b[0x0], _0x18193b[0x1], _0x18193b[0x2]), this['owner']['transform']['rotationEu' + 'ler'] = this['roadrotate' + 'Vec'];
                    }
                }
            ]), _0x4b268c;
        }(), _0x300c39 = function (_0x4e8148) {
            function _0x7b1170() {
                var _0x2ebd07;
                return _classCallCheck(this, _0x7b1170), (_0x2ebd07 = _possibleConstructorReturn(this, _getPrototypeOf(_0x7b1170)['apply'](this, arguments)))['roadRotati' + 'on'] = [
                    [
                        0x0,
                        -0x2d,
                        0x0
                    ],
                    [
                        0x0,
                        0x2d,
                        0x0
                    ]
                ], _0x2ebd07['posVec'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x2ebd07['rotateVec'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x2ebd07['scaleVec'] = new Laya['Vector3'](0x32, 0x32, 0x32), _0x2ebd07['hasSetPos'] = !0x1, _0x2ebd07['_needClear'] = !0x1, _0x2ebd07['_isRight'] = !0x1, _0x2ebd07['_canMove'] = !0x1, _0x2ebd07;
            }
            return _inherits(_0x7b1170, Laya['Script']), _createClass(_0x7b1170, [
                {
                    'key': 'onUpdate',
                    'value': function _0x19918e() {
                        this['hasSetPos'] && (this['rotateVec']['y'] += 0x2, this['owner']['transform']['rotationEu' + 'ler'] = this['rotateVec']);
                    }
                },
                {
                    'key': 'onEnable',
                    'value': function _0x389a85() {
                        this['owner']['transform']['localScale'] = this['scaleVec'], this['materialBi' + 'll'] || (this['materialBi' + 'll'] = new Laya['BlinnPhong' + 'Material']());
                        var _0x2c6d6c = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/Assets/3d' + '/gold.fbm/' + 'Pickup_Dif' + 'fuse.jpg');
                        this['materialBi' + 'll']['albedoText' + 'ure'] = _0x2c6d6c, this['owner']['getChildBy' + 'Name']('Coin_Mesh_' + '0')['meshRender' + 'er']['material'] = this['materialBi' + 'll'];
                    }
                },
                {
                    'key': 'setPos',
                    'value': function _0x1525e8(_0x49d2c3, _0xaa11f) {
                        this['_isRight'] = _0xaa11f, this['posVec']['setValue'](_0x49d2c3['x'], _0x49d2c3['y'] + 1.35, _0x49d2c3['z'] + 0.2), this['owner']['transform']['position'] = this['posVec'], _0xaa11f ? this['rotateVec']['setValue'](this['roadRotati' + 'on'][0x0][0x0], this['roadRotati' + 'on'][0x0][0x1], this['roadRotati' + 'on'][0x0][0x2]) : this['rotateVec']['setValue'](this['roadRotati' + 'on'][0x1][0x0], this['roadRotati' + 'on'][0x1][0x1], this['roadRotati' + 'on'][0x1][0x2]), this['owner']['transform']['rotationEu' + 'ler'] = this['rotateVec'], this['hasSetPos'] = !0x0;
                    }
                },
                {
                    'key': 'setMove',
                    'value': function _0x36ef78(_0x4f6b25) {
                        _0x4f6b25 > 0x0 && (this['tweenCoin'](0x0), this['canMove'] = !0x0);
                    }
                },
                {
                    'key': 'tweenCoin',
                    'value': function _0x2a02c5() {
                        var _0xb1165 = this, _0x1cdcbe = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : -0x1;
                        if (!this['_needClear']) {
                            if (-0x1 == _0x1cdcbe)
                                return Laya['Tween']['clearAll'](this['_pos']), void (this['owner']['transform']['position'] = this['posVec']);
                            var _0x517a04;
                            _0x517a04 = this['_isRight'] ? [
                                [
                                    0.5,
                                    0.5
                                ],
                                [
                                    -0.5,
                                    -0.5
                                ],
                                [
                                    -0.5,
                                    -0.5
                                ],
                                [
                                    0.5,
                                    0.5
                                ]
                            ] : [
                                [
                                    0.5,
                                    -0.5
                                ],
                                [
                                    -0.5,
                                    0.5
                                ],
                                [
                                    -0.5,
                                    0.5
                                ],
                                [
                                    0.5,
                                    -0.5
                                ]
                            ], this['_pos'] = this['owner']['transform']['position'];
                            var _0x3f44e4 = this['_pos']['x'] + _0x517a04[_0x1cdcbe][0x0], _0x3d49ff = this['_pos']['y'], _0x29efe1 = this['_pos']['z'] + _0x517a04[_0x1cdcbe][0x1];
                            0x3 == _0x1cdcbe ? _0x1cdcbe = 0x0 : _0x1cdcbe++, Laya['Tween']['to'](this['_pos'], {
                                'x': _0x3f44e4,
                                'y': _0x3d49ff,
                                'z': _0x29efe1,
                                'update': new Laya['Handler'](this, function () {
                                    _0xb1165['owner']['transform']['position'] = _0xb1165['_pos'];
                                })
                            }, 0x3e8, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, function () {
                                _0xb1165['tweenCoin'](_0x1cdcbe);
                            }));
                        }
                    }
                },
                {
                    'key': 'onDisable',
                    'value': function _0x28fd1d() {
                        this['_needClear'] = !0x0;
                    }
                },
                {
                    'key': 'canMove',
                    'get': function _0x55a498() {
                        return this['_canMove'];
                    },
                    'set': function _0x59b1e2(_0x4e3771) {
                        this['_canMove'] = _0x4e3771;
                    }
                }
            ]), _0x7b1170;
        }(), _0x5b3a27 = function (_0x21060f) {
            function _0x7936c6() {
                var _0x294f79;
                return _classCallCheck(this, _0x7936c6), (_0x294f79 = _possibleConstructorReturn(this, _getPrototypeOf(_0x7936c6)['apply'](this, arguments)))['_bridgepos'] = [
                    0x0,
                    0x0,
                    0x0
                ], _0x294f79['_posVector'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x294f79['_coinVecto' + 'r'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x294f79['_scaleVec'] = new Laya['Vector3'](0x64, 0x32, 0x64), _0x294f79['_rotationV' + 'ec'] = new Laya['Vector3'](0x0, 0xb4, 0x0), _0x294f79;
            }
            return _inherits(_0x7936c6, Laya['Script']), _createClass(_0x7936c6, [
                {
                    'key': 'onEnable',
                    'value': function _0x46d25e() {
                        this['owner']['transform']['localScale'] = this['_scaleVec'], this['owner']['transform']['rotationEu' + 'ler'] = this['_rotationV' + 'ec'];
                    }
                },
                {
                    'key': 'extendsPos',
                    'value': function _0x3786dc(_0x2654c5) {
                        this['_bridgepos'][0x0] = _0x2654c5['x'], this['_bridgepos'][0x1] = _0x2654c5['y'], this['_bridgepos'][0x2] = _0x2654c5['z'];
                    }
                },
                {
                    'key': 'changePos',
                    'value': function _0x269548(_0x1efffe) {
                        this['_bridgepos'][0x0] += _0x1efffe, this['_bridgepos'][0x2] -= Math['abs'](_0x1efffe), this['setPos'](), this['top'] = this['owner']['getChildBy' + 'Name']('bridge2'), this['_topRotati' + 'onVec'] = this['top']['transform']['rotationEu' + 'ler'], this['_topRotati' + 'onVec']['y'] = _0x1efffe > 0x0 ? 0x2d : -0x2d, this['top']['transform']['rotationEu' + 'ler'] = this['_topRotati' + 'onVec'];
                    }
                },
                {
                    'key': 'setPos',
                    'value': function _0x27b9cb() {
                        this['_posVector']['setValue'](this['_bridgepos'][0x0], this['_bridgepos'][0x1], this['_bridgepos'][0x2]), this['_coinVecto' + 'r']['setValue'](this['_bridgepos'][0x0], this['_bridgepos'][0x1] + 0x5, this['_bridgepos'][0x2]), this['owner']['transform']['position'] = this['_posVector'];
                    }
                },
                {
                    'key': 'onDisable',
                    'value': function _0x148bcd() {
                    }
                }
            ]), _0x7936c6;
        }(), _0x45f79b = Laya['Browser']['window']['wx'], _0x166d84 = function () {
            function _0x51f61f() {
                _classCallCheck(this, _0x51f61f);
            }
            return _createClass(_0x51f61f, null, [
                {
                    'key': 'adapterUi',
                    'value': function _0x209c60() {
                        if (Laya['Browser']['onMiniGame']) {
                            var _0x22dc31 = wx['getSystemI' + 'nfoSync']()['windowHeig' + 'ht'], _0x50b288 = Laya['stage']['height'] / _0x22dc31;
                            return _0x45f79b['getMenuBut' + 'tonBoundin' + 'gClientRec' + 't']()['top'] *= _0x50b288;
                        }
                        return 0x32;
                    }
                },
                {
                    'key': 'shareStart',
                    'value': function _0xdbc0a3() {
                        if (Laya['Browser']['onMiniGame']) {
                            var _0x3dec09 = this;
                            _0x45f79b['onHide'](function _0x1d37c8() {
                                _0x3dec09['shareStart' + 'TimeSecond'] = new Date()['getTime'](), _0x45f79b['offHide'](_0x1d37c8);
                            });
                        }
                    }
                },
                {
                    'key': 'shareResul' + 't',
                    'value': function _0xbd9def(_0x1ec8ce) {
                        if (Laya['Browser']['onMiniGame']) {
                            var _0x12a769 = this;
                            _0x45f79b['onShow'](function _0x58ef6d(_0x91006e) {
                                if (console['log']('分享回到前台'), _0x12a769['shareStart' + 'TimeSecond'] > 0x0) {
                                    var _0x440dc8 = (new Date()['getTime']() - _0x12a769['shareStart' + 'TimeSecond']) / 0x3e8;
                                    _0x12a769['shareStart' + 'TimeSecond'] = -0x1, _0x440dc8 >= 0x0 ? (_0x12a769['isShareSuc' + 'cess'] = !0x0, _0x12a769['shareToast']('分享成功！'), _0x1ec8ce && _0x1ec8ce()) : _0x12a769['shareToast']('分享失败！请重试');
                                }
                                _0x45f79b['offShow'](_0x58ef6d);
                            });
                        }
                    }
                },
                {
                    'key': 'shareToast',
                    'value': function _0x3f5b60(_0x260c7e) {
                        Laya['Browser']['onMiniGame'] ? _0x45f79b['showToast']({
                            'title': _0x260c7e,
                            'icon': 'none',
                            'duration': 0x5dc
                        }) : console['log']('---不在微信内');
                    }
                },
                {
                    'key': 'shareStage',
                    'value': function _0x392b95(_0x494c11, _0x1821a5) {
                        Laya['Browser']['onMiniGame'] && _0x51f61f['share'](_0x494c11, _0x1821a5);
                    }
                },
                {
                    'key': 'share',
                    'value': function _0x5b5146(_0x30af50, _0x378fce) {
                        Laya['Browser']['onMiniGame'] && (this['isShareSuc' + 'cess'] = !0x1, this['shareStart'](), this['shareResul' + 't'](_0x378fce), _0x45f79b['shareAppMe' + 'ssage']({
                            'title': _0x30af50,
                            'imageUrlId': '',
                            'imageUrl': ''
                        }));
                    }
                },
                {
                    'key': 'vibrateSho' + 'rt',
                    'value': function _0x294d7a() {
                        Laya['Browser']['onMiniGame'] ? _0x45f79b['vibrateSho' + 'rt'] && _0x45f79b['vibrateSho' + 'rt']() : console['log']('当前环境是微信小游戏' + '吗', Laya['Browser']['onMiniGame']);
                    }
                },
                {
                    'key': 'vibrateLon' + 'g',
                    'value': function _0x11c334() {
                        Laya['Browser']['onMiniGame'] ? _0x45f79b['vibrateLon' + 'g'] && _0x45f79b['vibrateLon' + 'g']() : console['log']('当前环境是微信小游戏' + '吗', Laya['Browser']['onMiniGame']);
                    }
                },
                {
                    'key': 'authorizat' + 'ion',
                    'value': function _0xfc5971(_0x4f1c11, _0x4f4541) {
                        Laya['Browser']['onMiniGame'] && _0x45f79b['getSetting']({
                            'success': function _0x517c04(_0x4892de) {
                                _0x4892de['authSettin' + 'g']['scope.' + _0x4f1c11] ? _0x4f4541() : _0x45f79b['showModal']({
                                    'title': '用户未授权',
                                    'content': '如需正常使用该功能，' + '请按确定并在授权管理' + '中选中“用户信息”，' + '然后点按确定。最后再' + '重新进入游戏即可正常' + '使用。',
                                    'showCancel': !0x1,
                                    'success': function _0x491395(_0x11de6c) {
                                        _0x11de6c['confirm'] && _0x45f79b['openSettin' + 'g']({
                                            'success': function _0x242bb8(_0x322b92) {
                                                _0x322b92['authSettin' + 'g']['scope.' + _0x4f1c11] && _0x4f4541();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                },
                {
                    'key': 'getUserInf' + 'o',
                    'value': function _0xd98c95() {
                        var _0x3e17d0 = {};
                        return _0x45f79b['getUserInf' + 'o']({
                            'success': function _0x5c46e0(_0x3cf8cb) {
                                _0x3e17d0 = _0x3cf8cb;
                            }
                        }), console['log']('用户信息', _0x3e17d0), _0x3e17d0;
                    }
                },
                {
                    'key': 'watchVideo' + 'GetAwrad',
                    'value': function _0x29cfa2(_0xbf3b58, _0x5e8238) {
                        _0x51f61f['shareToast']('暂时没有视频'), _0x5e8238();
                    }
                },
                {
                    'key': 'shareToFri' + 'ends',
                    'value': function _0x709f41() {
                        Laya['Browser']['onMiniGame'] && _0x45f79b['showShareM' + 'enu']({
                            'withShareTicket': !0x0,
                            'menus': [
                                'shareAppMe' + 'ssage',
                                'shareTimel' + 'ine'
                            ]
                        });
                    }
                },
                {
                    'key': 'shareOn',
                    'value': function _0x2f6c9e() {
                        Laya['Browser']['onMiniGame'] && _0x45f79b['onShareApp' + 'Message'](function () {
                            return {
                                'title': '这关连续搭出10个完' + '美的桥，就问问还有谁',
                                'imageUrlId': '9mt+/l83To' + 'CtlhPE+amz' + 'aw==',
                                'imageUrl': ''
                            };
                        });
                    }
                },
                {
                    'key': 'onshow',
                    'value': function _0x145f5c() {
                        Laya['Browser']['onMiniGame'] && _0x45f79b['onShow'](function () {
                            _0x1220b2['backGround' + 'Music']();
                        });
                    }
                },
                {
                    'key': 'setStageWi' + 'dthHeight',
                    'value': function _0x56b73b(_0x469988, _0x5ac6e8) {
                        window['stagew'] = _0x469988, window['stageh'] = _0x5ac6e8;
                    }
                },
                {
                    'key': 'addView',
                    'value': function _0x34a586(_0xe2b9da) {
                        _0xe2b9da['setSize'](window['fairygui']['GRoot']['inst']['width'], window['fairygui']['GRoot']['inst']['height']), window['fairygui']['GRoot']['inst']['addChild'](_0xe2b9da);
                    }
                },
                {
                    'key': 'removeView',
                    'value': function _0x230733(_0x452aac) {
                        window['fairygui']['GRoot']['inst']['removeChil' + 'd'](_0x452aac);
                    }
                }
            ]), _0x51f61f;
        }();
    _0x166d84['isShareSuc' + 'cess'] = !0x1, _0x166d84['shareStart' + 'TimeSecond'] = -0x1;
    var _0x3a3655 = function (_0x457bcf) {
            function _0x46b2ca() {
                var _0x426ce1;
                return _classCallCheck(this, _0x46b2ca), (_0x426ce1 = _possibleConstructorReturn(this, _getPrototypeOf(_0x46b2ca)['call'](this)))['_mouseNum'] = -0x1, _0x426ce1['isadd'] = !0x0, _0x426ce1['_pointVec'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x426ce1['_cameraPos'] = [], _0x426ce1['isload'] = !0x1, _0x426ce1['hasevent'] = !0x1, _0x426ce1['stageidx'] = -0x1, _0x426ce1['bridgeIdx'] = -0x1, _0x426ce1['BASE_NUM'] = 0x3, _0x426ce1['_scaleV'] = 0x0, _0x426ce1['_moveDis'] = -0x1, _0x426ce1['_centerV'] = 0x0, _0x426ce1['cameraPosV'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x426ce1['cameraRota' + 'teV'] = new Laya['Vector3'](0x0, 0x0, 0x0), _0x426ce1['initV'](), _0x426ce1;
            }
            return _inherits(_0x46b2ca, _0x5ca23a['test']['TestSceneU' + 'I']), _createClass(_0x46b2ca, [
                {
                    'key': 'initV',
                    'value': function _0x8932d6() {
                        this['newScene'] = new Laya['Scene3D'](), Laya['stage']['addChild'](this['newScene']), this['isload'] || Laya['loader']['create']([
                            'res/box/Co' + 'nventional' + '/car01.lh',
                            'res/box/Co' + 'nventional' + '/car02.lh',
                            'res/box/Co' + 'nventional' + '/car03.lh',
                            'res/box/Co' + 'nventional' + '/car04.lh',
                            'res/box/Co' + 'nventional' + '/car05.lh',
                            'res/box/Co' + 'nventional' + '/car06.lh',
                            'res/box/Co' + 'nventional' + '/car07.lh',
                            'res/box/Co' + 'nventional' + '/car08.lh',
                            'res/box/Co' + 'nventional' + '/car09.lh',
                            'res/box/Co' + 'nventional' + '/gold.lh',
                            'res/box/Co' + 'nventional' + '/road.lh',
                            'res/box/Co' + 'nventional' + '/finish.lh',
                            'res/box/Co' + 'nventional' + '/Assets/3d' + '/car01.fbm' + '/car_1.jpg',
                            'res/box/Co' + 'nventional' + '/Assets/3d' + '/mesh_map_' + '1.png',
                            'res/box/Co' + 'nventional' + '/bridge.lh',
                            'res/box/Co' + 'nventional' + '/Assets/3d' + '/gold.fbm/' + 'Pickup_Dif' + 'fuse.jpg'
                        ], Laya['Handler']['create'](this, this['onPreLoadF' + 'inish']));
                    }
                },
                {
                    'key': 'onPreLoadF' + 'inish',
                    'value': function _0x421fb3() {
                        console['log']('onPreLoadF' + 'inish');
                        window['onPreLoadF' + 'inish'] && (Laya['stage']['getChildAt'](0x2)['visible'] = !![], !window['btnSY'] && (window['btnSY'] = new Laya['Button'](), window['btnSY']['stateNum'] = 0x1, isSound == 0x1 ? (window['btnSY']['skin'] = 'btn_sound_' + 'on.png', Laya['SoundManag' + 'er']['playMusic']('res/music/' + 'background' + '2.mp3')) : window['btnSY']['skin'] = 'btn_sound_' + 'off.png', Laya['stage']['addChild'](window['btnSY']), window['btnSY']['x'] = 0x3c, window['btnSY']['y'] = 0x8c, window['btnSY']['on'](Laya['Event']['CLICK'], this, () => {
                            window['btnSY']['skin'] == 'btn_sound_' + 'on.png' ? (window['btnSY']['skin'] = 'btn_sound_' + 'off.png', isSound = 0x0, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x0), Laya['SoundManag' + 'er']['stopMusic']()) : (window['btnSY']['skin'] = 'btn_sound_' + 'on.png', isSound = 0x1, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x1), Laya['SoundManag' + 'er']['playMusic']('res/music/' + 'background' + '2.mp3'));
                        })));
                        this['isload'] = !0x0;
                        var _0x3bc2ec = this['newScene']['addChild'](new Laya['Camera'](0x0, 0.1, 0x64));
                        this['_camera'] = _0x3bc2ec, this['_camera']['orthograph' + 'ic'] = !0x0;
                        var _0x16d233 = this['newScene']['addChild'](new Laya['DirectionL' + 'ight']());
                        _0x16d233['color']['setValue'](0x1, 0x1, 0x1), _0x16d233['transform']['worldMatri' + 'x']['setForward'](new Laya['Vector3'](0x0, -0.2, -0.2));
                        var _0x4cce43 = this['newScene']['addChild'](new Laya['DirectionL' + 'ight']());
                        _0x4cce43['color']['setValue'](0.5, 0.5, 0.5), _0x4cce43['transform']['worldMatri' + 'x']['setForward'](new Laya['Vector3'](0x0, 0x0, -0x1)), this['hasevent'] || (this['hasevent'] = !0x0, _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['REGAME'], this, this['reGame']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['RETURN_MAI' + 'N'], this, this['returnMain']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['RESTART'], this, this['restart']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['USE_GOD_TO' + 'OL'], this, this['useGodTool']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['MOUSE_DOWN'], this, this['onDown']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['MOUSE_UP'], this, this['onUp']));
                    }
                },
                {
                    'key': 'returnMain',
                    'value': function _0xad937b() {
                        for (this['reGame'](), Laya['Tween']['clearAll'](this['_camera']), Laya['Tween']['clearAll'](this['_road']['transform']), Laya['Tween']['clearAll'](this['cameraPosV']); this['newScene']['numChildre' + 'n'] > this['BASE_NUM'];) {
                            this['newScene']['removeChil' + 'dAt'](this['newScene']['numChildre' + 'n'] - 0x1);
                        }
                    }
                },
                {
                    'key': 'useGodTool',
                    'value': function _0x1baab2() {
                        0x0 == _0xe53014['allInfoIni' + 't']['guide'] && this['reGame'](), -0x1 == this['_mouseNum'] ? (this['_mouseNum'] = 0x5, this['_road']['transform']['localScale' + 'Y'] = 0xda * (Math['abs'](this['_randdis']) + 0.5) - 0xa3, this['onroadDown']()) : _0x166d84['shareToast']('暂时无法操作');
                    }
                },
                {
                    'key': 'restart',
                    'value': function _0x105cb0() {
                        for (; this['newScene']['numChildre' + 'n'] > this['BASE_NUM'];) {
                            this['newScene']['removeChil' + 'dAt'](this['newScene']['numChildre' + 'n'] - 0x1);
                        }
                        this['_mouseNum'] = -0x1, this['isload'] && this['addtoScene']();
                    }
                },
                {
                    'key': 'reGame',
                    'value': function _0x2dae4c() {
                        if (this['_car']['getCompone' + 'nt'](_0x392ff1)['relive'](), this['_road']['getCompone' + 'nt'](_0x2986ae)['relive'](), this['_bridge']) {
                            var _0x450f5c = this['_bridge']['getCompone' + 'nt'](_0x4c592e);
                            _0x450f5c['canMove'] && _0x450f5c['setMove'](0x1);
                        }
                        if (this['_gold']) {
                            var _0x127770 = this['_gold']['getCompone' + 'nt'](_0x300c39);
                            _0x127770['canMove'] && _0x127770['setMove'](0x1);
                        }
                        this['_mouseNum'] = -0x1;
                    }
                },
                {
                    'key': 'createGold',
                    'value': function _0x3ae473(_0x3b7f1a) {
                        for (var _0x276a2e; this['goldlist']['length'] > 0x5;) {
                            _0x276a2e = this['goldlist']['shift'](), this['newScene']['removeChil' + 'd'](_0x276a2e);
                        }
                        var _0x17c614 = this['_bridge'] ? this['_bridge']['transform']['position'] : this['_end']['transform']['position'];
                        if (this['_gold']) {
                            var _0x73ff9c = Laya['Sprite3D']['instantiat' + 'e'](this['_gold'], this['newScene'], !0x1, _0x17c614);
                            this['_gold'] = _0x73ff9c;
                        } else
                            this['_gold'] = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/gold.lh'), this['_gold']['addCompone' + 'nt'](_0x300c39);
                        this['_gold']['getCompone' + 'nt'](_0x300c39)['setPos'](_0x17c614, this['isadd']), this['_gold']['getCompone' + 'nt'](_0x300c39)['setMove'](_0x3b7f1a ? 0x1 : -0x1), this['goldlist']['push'](_0x276a2e), this['newScene']['addChild'](this['_gold']);
                    }
                },
                {
                    'key': 'addCar',
                    'value': function _0x5b207b() {
                        var _0x377d70 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : -0x1, _0x38c51f = _0xe53014['allInfoIni' + 't']['carid'];
                        _0x377d70 > 0x0 && (_0x38c51f = _0x377d70), this['_car'] = null, this['_car'] = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/car0' + _0x38c51f + '.lh'), this['_car']['addCompone' + 'nt'](_0x392ff1), this['_car']['getCompone' + 'nt'](_0x392ff1)['init'](), this['newScene']['addChild'](this['_car']);
                    }
                },
                {
                    'key': 'addBridge',
                    'value': function _0x70fc59() {
                        var _0x4b673a;
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0];
                        if (this['_bridge']) {
                            var _0x15c40f = Laya['Sprite3D']['instantiat' + 'e'](this['_bridge'], this['newScene'], !0x1, this['_bridge']['transform']['position']);
                            _0x15c40f['getCompone' + 'nt'](_0x4c592e)['extendsPos'](), this['_bridge'] = _0x15c40f;
                        } else
                            this['_bridge'] = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/bridge.lh'), this['_bridge']['addCompone' + 'nt'](_0x4c592e), this['_bridge']['getCompone' + 'nt'](_0x4c592e)['init']();
                        for (; this['bridgelist']['length'] > 0x5;) {
                            _0x4b673a = this['bridgelist']['shift'](), this['newScene']['removeChil' + 'd'](_0x4b673a);
                        }
                        this['newScene']['addChild'](this['_bridge']), this['bridgelist']['push'](this['_bridge']), this['posHander'](++this['bridgeIdx']);
                    }
                },
                {
                    'key': 'addEnd',
                    'value': function _0xb986e1() {
                        this['_end'] = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/finish.lh'), this['_end']['addCompone' + 'nt'](_0x5b3a27), this['_end']['getCompone' + 'nt'](_0x5b3a27)['extendsPos'](this['_bridge']['transform']['position']), this['newScene']['addChild'](this['_end']), this['_bridge'] = null, this['posHander'](++this['bridgeIdx']);
                    }
                },
                {
                    'key': 'addRoad',
                    'value': function _0x53c2b8() {
                        for (var _0x322995; this['roadlist']['length'] > 0x5;) {
                            _0x322995 = this['roadlist']['shift'](), this['newScene']['removeChil' + 'd'](_0x322995);
                        }
                        if (this['_road']) {
                            var _0x374a31 = Laya['Sprite3D']['instantiat' + 'e'](this['_road'], this['newScene'], !0x1, this['_road']['transform']['position']);
                            _0x374a31['getCompone' + 'nt'](_0x2986ae)['extendsPos'](), this['_road'] = _0x374a31, this['_road']['getCompone' + 'nt'](_0x2986ae)['changePos'](this['_randdis']), this['_road']['getCompone' + 'nt'](_0x2986ae)['changeRota' + 'tion'](this['_randdis']), this['_road']['transform']['localScale' + 'Y'] = 0x0;
                        } else
                            this['_road'] = Laya['Loader']['getRes']('res/box/Co' + 'nventional' + '/road.lh'), this['_road']['addCompone' + 'nt'](_0x2986ae), this['_road']['getCompone' + 'nt'](_0x2986ae)['init']();
                        this['newScene']['addChild'](this['_road']), this['roadlist']['push'](this['_road']);
                    }
                },
                {
                    'key': 'createPotR' + 'oad',
                    'value': function _0x49999b(_0x474007) {
                        this['potRoad'] || (this['potRoad'] = Laya['Sprite3D']['instantiat' + 'e'](this['_road'], this['newScene'], !0x1, this['_road']['transform']['position']), this['potRoad']['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](0x0, 0x0, 0x0), this['potRoad']['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0x0)), this['newScene']['addChild'](this['potRoad']), this['potRoad']['transform']['position'] = this['_road']['transform']['position'], this['_road']['transform']['position'], (this['potRoad']['transform']['localScale' + 'Z'] = 0x1, this['potRoad']['transform']['localScale' + 'Y'] = _0x474007, this['potRoad']['getCompone' + 'nt'](_0x2986ae)['extendsPos'](this['_road']['transform']['position']), this['potRoad']['getCompone' + 'nt'](_0x2986ae)['setAlpha'](this['_randdis']), this['potRoad']['transform']['rotationEu' + 'ler'] = this['_road']['transform']['rotationEu' + 'ler']);
                    }
                },
                {
                    'key': 'addtoScene',
                    'value': function _0x5402ae() {
                        window['stagew'] && this['isload'] && (this['stageidx'] = _0xe53014['allInfoIni' + 't']['stage'], this['stageidx'] > 0x64 && (this['stageidx'] = this['stageidx'] % 0xa == 0x0 ? 0x64 : 0x5a + this['stageidx'] % 0xa), this['stageInfo'] = _0xe53014['STAGE_DATA'][this['stageidx'] - 0x1], this['roadlist'] = [], this['bridgelist'] = [], this['goldlist'] = [], this['_cameraPos'] = [], this['bridgeIdx'] = -0x1, this['_moveDis'] = -0x1, this['_bridge'] = null, this['_road'] = null, this['_end'] = null, this['_centerV'] = 0x0, this['addBridge'](!0x0), this['addBridge'](), this['addCar'](), this['addRoad']());
                    }
                },
                {
                    'key': 'posDis',
                    'value': function _0x5de05a() {
                        var _0x5d5c3b = 0x0, _0x4ff5f0 = Math['random']();
                        return _0x4ff5f0 < this['stageInfo']['rp1'] ? _0x5d5c3b = 1.5 : _0x4ff5f0 < this['stageInfo']['rp2'] ? _0x5d5c3b = 2.5 : _0x4ff5f0 < this['stageInfo']['rp3'] ? _0x5d5c3b = 3.5 : _0x4ff5f0 < this['stageInfo']['rp4'] && (_0x5d5c3b = 4.5), _0x5d5c3b += Math['random']();
                    }
                },
                {
                    'key': 'scaleDis',
                    'value': function _0x14109c() {
                        var _0x50134c = Math['random']();
                        return _0x50134c < this['stageInfo']['scale1'] ? 0x3c + 0xf * Math['random']() : _0x50134c < this['stageInfo']['scale2'] ? 0x4b + 0x14 * Math['random']() : _0x50134c < this['stageInfo']['scale3'] ? 0x5f + 0x19 * Math['random']() : _0x50134c < this['stageInfo']['scale4'] ? 0x78 + 0x1e * Math['random']() : 0x96;
                    }
                },
                {
                    'key': 'posHander',
                    'value': function _0x1ffdd8() {
                        var _0x76a009 = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0;
                        if (this['_scaleV'] = this['scaleDis'](), 0x0 == _0x76a009)
                            return this['_cameraPos'] = [
                                1.88,
                                0xa,
                                0x6
                            ], this['cameraPosV']['setValue'](this['_cameraPos'][0x0], this['_cameraPos'][0x1], this['_cameraPos'][0x2]), this['cameraRota' + 'teV']['setValue'](-0x24, -0x2, 0x3), this['_camera']['transform']['position'] = this['cameraPosV'], this['_camera']['transform']['rotationEu' + 'ler'] = this['cameraRota' + 'teV'], this['_pointVec']['setValue'](0x0, 0x4, -0x1), this['_bridge']['getCompone' + 'nt'](_0x4c592e)['setScale'](this['_scaleV']), void (this['_pointLigh' + 't'] && (this['_pointLigh' + 't']['transform']['position'] = this['_pointVec']));
                        this['isadd'] = _0x76a009 % 0x2 == 0x1;
                        var _0x429c5d, _0x2d7eb7 = this['_moveDis'] > 0x0 ? this['_moveDis'] : this['posDis']();
                        (_0x76a009 == this['stageInfo']['bridegeNum'] - 0x1 && (_0x2d7eb7 += 0.2), 0x1 == _0x76a009) && (this['_camera']['orthograph' + 'icVertical' + 'Size'] = _0x2d7eb7 > 0x3 ? 0xa + 0x2 * (_0x2d7eb7 - 0x3) : 0xa, _0x429c5d = (_0x2d7eb7 - 4.5) / 0x2, this['_cameraPos'][0x0] += _0x429c5d, this['cameraPosV']['setValue'](this['_cameraPos'][0x0], this['_cameraPos'][0x1], this['_cameraPos'][0x2]), this['_camera']['transform']['position'] = this['cameraPosV']), (_0x2d7eb7 = this['isadd'] ? _0x2d7eb7 : -_0x2d7eb7, this['_bridge'] ? this['_bridge']['getCompone' + 'nt'](_0x4c592e)['changePos'](_0x2d7eb7) : this['_end'] && this['_end']['getCompone' + 'nt'](_0x5b3a27)['changePos'](_0x2d7eb7));
                        var _0x17c813 = Math['random']() <= this['stageInfo']['moveRate'] && _0x76a009 != this['stageInfo']['bridegeNum'] - 0x1;
                        this['_bridge'] && (this['_bridge']['getCompone' + 'nt'](_0x4c592e)['setScale'](this['_scaleV']), this['_bridge']['getCompone' + 'nt'](_0x4c592e)['setMove'](_0x17c813 ? 0x1 : -0x1)), this['createGold'](_0x17c813), this['_cameraPos'][0x2] -= Math['abs'](_0x2d7eb7), this['_randdis'] = _0x2d7eb7;
                    }
                },
                {
                    'key': 'onDown',
                    'value': function _0x558a11() {
                        if (-0x1 == this['_mouseNum'] && this['_road']) {
                            this['_mouseNum'] = 0x0;
                            var _0x10c16c = 0xda * (Math['abs'](this['_randdis']) + 0.5) - 0xa3;
                            0x1 == _0xe53014['allInfoIni' + 't']['stage'] && this['createPotR' + 'oad'](_0x10c16c), this['_road']['transform']['localScale' + 'Y'] = 0x37, _0x1220b2['playMusic'](0x5), Laya['Tween']['to'](this['_road']['transform'], { 'localScaleY': 0x7d0 }, 0x7d0, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, this['onroadDown']));
                        }
                    }
                },
                {
                    'key': 'onroadDown',
                    'value': function _0x223f95() {
                        var _0x478a5f = this;
                        Laya['SoundManag' + 'er']['stopSound']('res/music/' + 'long.mp3'), this['potRoad'] && this['potRoad']['removeSelf'](), 0x1 != this['_mouseNum'] && 0x0 != this['_mouseNum'] && 0x5 != this['_mouseNum'] || (0x5 != this['_mouseNum'] && (this['_mouseNum'] = 0x2), this['_road']['getCompone' + 'nt'](_0x2986ae)['roadDown'](function () {
                            _0x478a5f['_bridge'] && _0x478a5f['_bridge']['getCompone' + 'nt'](_0x4c592e)['tweenBridg' + 'e'](), _0x478a5f['_gold'] && _0x478a5f['_gold']['getCompone' + 'nt'](_0x300c39)['tweenCoin'](), _0x478a5f['_car']['getCompone' + 'nt'](_0x392ff1)['carRun'](_0x478a5f['_road']['transform']['localScale' + 'Y'], _0x478a5f['_randdis'], null != _0x478a5f['_end'], _0x478a5f['_pointLigh' + 't'], _0x478a5f['_scaleV'], _0x478a5f['tweenCamer' + 'a']['bind'](_0x478a5f));
                        }));
                    }
                },
                {
                    'key': 'tweenCamer' + 'a',
                    'value': function _0x46b90b() {
                        var _0x465d55 = this;
                        this['_gold'] && this['_gold']['removeSelf'](), this['_moveDis'] = this['posDis']();
                        var _0x3234e8 = (this['_moveDis'] - Math['abs'](this['_randdis'])) / 0x2;
                        this['isadd'] && (_0x3234e8 = -_0x3234e8), this['cameraPosV'] = this['_camera']['transform']['position'], this['_cameraPos'][0x0] = this['cameraPosV']['x'] + _0x3234e8;
                        var _0x58d75a = this['_moveDis'] > 0x3 ? 0xa + 0x2 * (this['_moveDis'] - 0x3) : 0xa;
                        Laya['Tween']['to'](this['_camera'], { 'orthographicVerticalSize': _0x58d75a }, 0x1f4), Laya['Tween']['to'](this['cameraPosV'], {
                            'x': this['_cameraPos'][0x0],
                            'y': this['_cameraPos'][0x1],
                            'z': this['_cameraPos'][0x2],
                            'update': new Laya['Handler'](this, function () {
                                _0x465d55['_camera']['transform']['position'] = _0x465d55['cameraPosV'];
                            })
                        }, 0x1f4, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, function () {
                            _0x465d55['_car']['getCompone' + 'nt'](_0x392ff1)['turnRotate'](_0x465d55['isadd'], function () {
                                if (_0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['BRIDGE_CHA' + 'NGE'], [_0x465d55['bridgeIdx']]), _0x465d55['bridgeIdx'] == _0x465d55['stageInfo']['bridegeNum'] - 0x1)
                                    return console['log']('通关了，准备下一关'), void _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['STAGE_PASS']);
                                _0x465d55['addRoad'](), _0x465d55['bridgeIdx'] == _0x465d55['stageInfo']['bridegeNum'] - 0x2 ? _0x465d55['addEnd']() : _0x465d55['addBridge'](), _0x465d55['_mouseNum'] = -0x1;
                            });
                        }));
                    }
                },
                {
                    'key': 'onUp',
                    'value': function _0x4d9d48() {
                        0x0 == this['_mouseNum'] && (this['_mouseNum'] = 0x1, this['_road'] && Laya['Tween']['clearAll'](this['_road']['transform']), this['onroadDown']());
                    }
                }
            ]), _0x46b2ca;
        }(), _0x388182 = function () {
            function _0x2fd3d4() {
                _classCallCheck(this, _0x2fd3d4);
            }
            return _createClass(_0x2fd3d4, null, [{
                    'key': 'init',
                    'value': function _0x83fc1e() {
                        (0x0, Laya['ClassUtils']['regClass'])('script/Gam' + 'eUI.ts', _0x3a3655);
                    }
                }]), _0x2fd3d4;
        }();
    _0x388182['width'] = 0x2ee, _0x388182['height'] = 0x536, _0x388182['scaleMode'] = 'exactfit', _0x388182['screenMode'] = 'none', _0x388182['alignV'] = 'center', _0x388182['alignH'] = 'middle', _0x388182['startScene'] = 'test/TestS' + 'cene.scene', _0x388182['sceneRoot'] = '', _0x388182['debug'] = !0x1, _0x388182['stat'] = !0x1, _0x388182['physicsDeb' + 'ug'] = !0x1, _0x388182['exportScen' + 'eToJson'] = !0x0, _0x388182['init']();
    var _0x2b72aa = function (_0x3d33e0) {
            function _0x2baa76(_0x145901) {
                var _0x1c635a;
                _classCallCheck(this, _0x2baa76), _0x1c635a = _possibleConstructorReturn(this, _getPrototypeOf(_0x2baa76)['call'](this));
                var _0x598f6f = window['fairygui']['UIPackage']['createObje' + 'ct']('Bag', _0x145901)['asCom'];
                return _0x1c635a['_view'] = _0x598f6f, _0x1c635a['_main'] = _0x598f6f['getChild']('main')['asCom'], _0x1c635a['_main'] && _0x1c635a['_main']['getChild']('bclose') && (_0x1c635a['_bclose'] = _0x1c635a['_main']['getChild']('bclose')['asButton']), _0x1c635a;
            }
            return _inherits(_0x2baa76, fgui['GComponent']), _createClass(_0x2baa76, [
                {
                    'key': 'show',
                    'value': function _0x3a7db6() {
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0], (_0x166d84['addView'](this['_view']), this['_bclose'] && this['_bclose']['onClick'](this, this['onClose']));
                    }
                },
                {
                    'key': 'onClose',
                    'value': function _0x2e60d9() {
                        _0x1220b2['playMusic'](0x0), this['closeV']();
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x89f2f4() {
                        this['_bclose'] && this['_bclose']['offClick'](this, this['onClose']), _0x166d84['removeView'](this['_view']);
                    }
                },
                {
                    'key': 'onClick',
                    'value': function _0xae6fd5(_0x2d952e, _0x125fcc) {
                        for (var _0x42526a = _0x2d952e['length'], _0x2e956b = 0x0; _0x2e956b < _0x42526a; _0x2e956b++) {
                            _0x2d952e[_0x2e956b]['onClick'](this, _0x125fcc, [_0x2d952e[_0x2e956b]]);
                        }
                    }
                },
                {
                    'key': 'offClick',
                    'value': function _0x2cd0b9(_0x128172, _0x1617a6) {
                        for (var _0x5d0c92 = _0x128172['length'], _0x14b367 = 0x0; _0x14b367 < _0x5d0c92; _0x14b367++) {
                            _0x128172[_0x14b367]['offClick'](this, _0x1617a6);
                        }
                    }
                }
            ]), _0x2baa76;
        }(), _0x147cc7 = function (_0x3413c6) {
            function _0x8591d4() {
                var _0x1af945;
                return _classCallCheck(this, _0x8591d4), (_0x1af945 = _possibleConstructorReturn(this, _getPrototypeOf(_0x8591d4)['call'](this, 'SettingVie' + 'w')))['_bsound'] = _0x1af945['_main']['getChild']('bsound')['asButton'], _0x1af945['_bshake'] = _0x1af945['_main']['getChild']('bshake')['asButton'], _0x1af945;
            }
            return _inherits(_0x8591d4, _0x2b72aa), _createClass(_0x8591d4, [
                {
                    'key': 'btnClick',
                    'value': function _0x2a47ec(_0x1dd60f) {
                        switch (_0x1220b2['playMusic'](0x0), _0x1dd60f) {
                        case this['_bsound']:
                            _0xe53014['soundOn'] = !_0xe53014['soundOn'], this['_bsound']['selected'] = !_0xe53014['soundOn'], _0xe53014['soundOn'] ? _0x1220b2['backGround' + 'Music']() : _0x1220b2['closeMusic']();
                            break;
                        case this['_bshake']:
                            _0xe53014['shokeOn'] = !_0xe53014['shokeOn'], this['_bshake']['selected'] = !_0xe53014['shokeOn'];
                        }
                    }
                },
                {
                    'key': 'show',
                    'value': function _0x18f285() {
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0], (_get(_getPrototypeOf(_0x8591d4['prototype']), 'show', this)['call'](this), this['_bsound']['selected'] = !_0xe53014['soundOn'], this['_bshake']['selected'] = !_0xe53014['shokeOn'], _get(_getPrototypeOf(_0x8591d4['prototype']), 'onClick', this)['call'](this, [
                            this['_bsound'],
                            this['_bshake']
                        ], this['btnClick'])), this['_badd']['visible'] = ![];
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x51522f() {
                        _get(_getPrototypeOf(_0x8591d4['prototype']), 'offClick', this)['call'](this, [
                            this['_bsound'],
                            this['_bshake']
                        ], this['btnClick']), _get(_getPrototypeOf(_0x8591d4['prototype']), 'closeV', this)['call'](this);
                    }
                }
            ]), _0x8591d4;
        }(), _0xabca43 = function (_0x15647b) {
            function _0x5c7ffb() {
                var _0x16401f;
                _classCallCheck(this, _0x5c7ffb), (_0x16401f = _possibleConstructorReturn(this, _getPrototypeOf(_0x5c7ffb)['call'](this, 'ShopView')))['_init'] = !0x1, _0x16401f['_list'] = _0x16401f['_main']['getChild']('list')['asList'];
                var _0x4afe07 = _0x16401f['_main']['getChild']('maintop')['asCom'];
                return _0x16401f['_tmoeny'] = _0x4afe07['getChild']('tgold')['asTextFiel' + 'd'], _0x16401f['_badd'] = _0x4afe07['getChild']('badd')['asButton'], _0x4afe07['y'] = _0x166d84['adapterUi'](), _0x16401f['_list']['itemRender' + 'er'] = Laya['Handler']['create'](_assertThisInitialized(_0x16401f), _0x16401f['listRender'], null, !0x1), _0x16401f;
            }
            return _inherits(_0x5c7ffb, _0x2b72aa), _createClass(_0x5c7ffb, [
                {
                    'key': 'listRender',
                    'value': function _0x371fd8(_0x2e7e0c, _0x4ea630) {
                        var _0x2e318a = _0x4ea630['getControl' + 'ler']('c1'), _0x21192e = _0x4ea630['getChild']('lock')['asImage'], _0xb76c5c = _0x4ea630['getChild']('bavfree')['asButton'], _0x56b2be = _0x4ea630['getChild']('bsharefree')['asButton'], _0x1dac9 = _0x4ea630['getChild']('bmoney')['asButton'];
                        _0x2e318a['selectedIn' + 'dex'] = _0x2e7e0c, 0x0 == _0x2e7e0c && this['_init'] && (_0x4ea630['selected'] = !0x0, this['_init'] = !0x1), _0xe53014['allInfoIni' + 't']['shopOwnIte' + 'm'][_0x2e7e0c] > 0x0 ? (_0xb76c5c['visible'] = _0x56b2be['visible'] = _0x1dac9['visible'] = !0x1, _0x21192e['visible'] = !0x1) : (_0xb76c5c['visible'] = 0x0 == _0xe53014['SHOP_TYPE'][_0x2e7e0c], _0x56b2be['visible'] = 0x1 == _0xe53014['SHOP_TYPE'][_0x2e7e0c], _0x1dac9['visible'] = _0xe53014['SHOP_TYPE'][_0x2e7e0c] > 0x1, _0x21192e['visible'] = 0x0 != _0x2e7e0c, _0x1dac9['visible'] && (_0x1dac9['title'] = _0xe53014['SHOP_TYPE'][_0x2e7e0c] + '')), _0x1dac9['offClick'](this, this['btnClick']), _0x56b2be['offClick'](this, this['btnClick']), _0xb76c5c['offClick'](this, this['btnClick']), _0x4ea630['offClick'](this, this['baseClick']), _0x4ea630['onClick'](this, this['baseClick'], [_0x2e7e0c]), _0x1dac9['onClick'](this, this['btnClick'], [
                            _0x2e7e0c,
                            _0x4ea630
                        ]), _0x56b2be['onClick'](this, this['btnClick'], [
                            _0x2e7e0c,
                            _0x4ea630
                        ]), _0xb76c5c['onClick'](this, this['btnClick'], [
                            _0x2e7e0c,
                            _0x4ea630
                        ]);
                    }
                },
                {
                    'key': 'baseClick',
                    'value': function _0x55dc38(_0x58d994) {
                        0x1 == _0xe53014['allInfoIni' + 't']['shopOwnIte' + 'm'][_0x58d994] && (_0xe53014['allInfoIni' + 't']['carid'] = _0x58d994, _0xe53014['saveData']());
                    }
                },
                {
                    'key': 'btnClick',
                    'value': function _0x4f2724(_0x20c0c7, _0x963a87) {
                        console['log']('tttt', _0x20c0c7), console['log']('iiii', _0x963a87);
                        var _0x561ee6 = this;
                        _0x1220b2['playMusic'](0x0);
                        var _0x493f7a = _0xe53014['SHOP_TYPE'][_0x20c0c7] > 0x1 ? 0x2 : _0xe53014['SHOP_TYPE'][_0x20c0c7];
                        _0x493f7a == 0x1 && (_0x493f7a = 0x0);
                        console['log']('ooooooo', _0x493f7a);
                        if (0x0 == _0x493f7a)
                            //TODO showReward
                            HUHU_showRewardedVideoAd(
                                () => {
                                    // 用户观看广告完成，继续游戏
                                    0x0 == _0x20c0c7 ? (_0x166d84['shareToast']('金币+' + _0xe53014['AV_COIN']), _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['AV_COIN'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), this['updateMone' + 'y']()) : (_0xe53014['allInfoIni' + 't']['shopOwnIte' + 'm'][_0x20c0c7] = 0x1, _0xe53014['allInfoIni' + 't']['carid'] = _0x20c0c7, _0xe53014['saveData']()), 0x0 != _0x20c0c7 && 0x1 != _0x493f7a && this['listRender'](_0x20c0c7, _0x963a87);
                                },
                                () => {
                                  // 广告请求失败或者用户跳过广告                            
                                  promptMessage("Failed to get the reward, please watch the ads to the end.");
                                }
                              );
                            // YYGGames['showReward'](() => {
                            //     0x0 == _0x20c0c7 ? (_0x166d84['shareToast']('金币+' + _0xe53014['AV_COIN']), _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['AV_COIN'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), this['updateMone' + 'y']()) : (_0xe53014['allInfoIni' + 't']['shopOwnIte' + 'm'][_0x20c0c7] = 0x1, _0xe53014['allInfoIni' + 't']['carid'] = _0x20c0c7, _0xe53014['saveData']()), 0x0 != _0x20c0c7 && 0x1 != _0x493f7a && this['listRender'](_0x20c0c7, _0x963a87);
                            // });
                        else {
                            if (0x1 == _0x493f7a)
                                _0x166d84['share']('这关连续搭出10个完' + '美的桥，就问问还有谁', function () {
                                    _0xe53014['allInfoIni' + 't']['shopOwnIte' + 'm'][_0x20c0c7] = 0x1, _0xe53014['allInfoIni' + 't']['carid'] = _0x20c0c7, _0xe53014['saveData'](), _0x561ee6['listRender'](_0x20c0c7, _0x963a87);
                                });
                            else {
                                if (0x2 == _0x493f7a) {
                                    if (_0xe53014['allInfoIni' + 't']['coin'] < _0xe53014['SHOP_TYPE'][_0x20c0c7])
                                        return void _0x166d84['shareToast']('金币不足');
                                    _0xe53014['allInfoIni' + 't']['shopOwnIte' + 'm'][_0x20c0c7] = 0x1, _0xe53014['allInfoIni' + 't']['coin'] -= _0xe53014['SHOP_TYPE'][_0x20c0c7], _0xe53014['allInfoIni' + 't']['carid'] = _0x20c0c7, _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), this['updateMone' + 'y']();
                                }
                            }
                        }
                        0x0 != _0x20c0c7 && 0x1 != _0x493f7a && this['listRender'](_0x20c0c7, _0x963a87);
                    }
                },
                {
                    'key': 'show',
                    'value': function _0x1f49c8() {
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0], (_get(_getPrototypeOf(_0x5c7ffb['prototype']), 'show', this)['call'](this), this['_init'] = !0x0, this['_list']['numItems'] = 0xa, this['updateMone' + 'y'](), _get(_getPrototypeOf(_0x5c7ffb['prototype']), 'onClick', this)['call'](this, [this['_badd']], this['bclick'])), this['_badd']['visible'] = ![], this['_bclose']['scaleX'] = this['_bclose']['scaleY'] = 0.6;
                    }
                },
                {
                    'key': 'updateMone' + 'y',
                    'value': function _0x333fbc() {
                        this['_tmoeny']['text'] = _0xe53014['allInfoIni' + 't']['coin'] + '';
                    }
                },
                {
                    'key': 'bclick',
                    'value': function _0x367ebf(_0x211811) {
                        switch (_0x211811) {
                        case this['_badd']:
                            _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['AV_COIN'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), _0x166d84['shareToast']('金币+' + _0xe53014['AV_COIN']), this['updateMone' + 'y']();
                        }
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x29b9c6() {
                        //TODO showInterstitial
                        console.log("请求插屏广告");

                        // 展示插屏广告
                        HUHU_showInterstitialAd();
                    
                        // 继续游戏
                        _get(_getPrototypeOf(_0x5c7ffb['prototype']), 'offClick', this)['call'](this, [this['_badd']], this['bclick']), _get(_getPrototypeOf(_0x5c7ffb['prototype']), 'closeV', this)['call'](this);
                        // YYGGames['showInters' + 'titial'](() => {
                        //     _get(_getPrototypeOf(_0x5c7ffb['prototype']), 'offClick', this)['call'](this, [this['_badd']], this['bclick']), _get(_getPrototypeOf(_0x5c7ffb['prototype']), 'closeV', this)['call'](this);
                        //      window['scrollList']['visible'] = !![], 
                        //      window['btnSY']['visible'] = !![];
                        // });
                    }
                }
            ]), _0x5c7ffb;
        }(), _0x2bdef6 = function (_0x5ece1f) {
            function _0x139080() {
                var _0xfbe1ff;
                return _classCallCheck(this, _0x139080), (_0xfbe1ff = _possibleConstructorReturn(this, _getPrototypeOf(_0x139080)['call'](this, 'ReliveView')))['_brelive'] = _0xfbe1ff['_main']['getChild']('brelive')['asButton'], _0xfbe1ff['_circle'] = _0xfbe1ff['_main']['getChild']('circle')['asCom'], _0xfbe1ff['_tnum'] = _0xfbe1ff['_main']['getChild']('tnum')['asTextFiel' + 'd'], _0xfbe1ff['_bclose']['y'] = _0x166d84['adapterUi'](), _0xfbe1ff;
            }
            return _inherits(_0x139080, _0x2b72aa), _createClass(_0x139080, [
                {
                    'key': 'show',
                    'value': function _0x2c5413() {
                        // window['scrollList']['visible'] = !![], 
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0],
                         (_get(_getPrototypeOf(_0x139080['prototype']), 'show', this)['call'](this), _get(_getPrototypeOf(_0x139080['prototype']), 'onClick', this)['call'](this, [this['_brelive']], this['reliveDo']), this['_markS'] || (this['_markS'] = new Laya['Sprite']()), this['_time'] = 0x6, this['_angle'] = -0xa4, this['_circle']['mask'] = this['_markS'], this['updateV']()), window['reliveView'] = this, Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x4)['scaleX'] = Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x4)['scaleY'] = 1.3, Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x4)['x'] = 0xeb, Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x1)['visible'] = ![], Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x3)['y'] = 0x1a0, Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x6)['y'] = 0x1a0, Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x7)['y'] = 0x1a5, Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x2)['y'] = 0x2a8;
                        for (let _0x42a713 = 0x1; _0x42a713 < 0x8; _0x42a713++) {
                            Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](_0x42a713)['visible'] = !![];
                        }
                        Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](0x4)['visible'] = ![];
                        if (!window['closeText']) {
                            var _0x1cabd6 = new Laya['Text']();
                            _0x1cabd6['width'] = 0x143, _0x1cabd6['height'] = 0x5b, _0x1cabd6['fontSize'] = 0x1e, _0x1cabd6['text'] = 'No,thanks', _0x1cabd6['anchorX'] = _0x1cabd6['anchorY'] = 0.5, _0x1cabd6['x'] = 0x130, _0x1cabd6['y'] = 0x37b, _0x1cabd6['color'] = '#ffffff', Laya['stage']['addChild'](_0x1cabd6), window['closetText'] = _0x1cabd6;
                        } else
                            window['closeText']['visible'] = !![];
                        window['faileTitle' + 'Img'] ? window['faileTitle' + 'Img']['visible'] = ![] : (window['faileTitle' + 'Img'] = new Laya['Image'](), window['faileTitle' + 'Img']['x'] = 0x6e, window['faileTitle' + 'Img']['y'] = 0x104, window['faileTitle' + 'Img']['skin'] = 'failed.png', Laya['stage']['addChild'](window['faileTitle' + 'Img']), window['faileTitle' + 'Img']['visible'] = ![]), closetText['on'](Laya['Event']['CLICK'], this, () => {
                            //TODO showInterstitial
                            console.log("请求插屏广告");

                            // 展示插屏广告
                            HUHU_showInterstitialAd();
                        
                            // 继续游戏
                            this['closeV1'](), _0x1cabd6['visible'] = ![];
                            // YYGGames['showInters' + 'titial'](() => {
                            //     this['closeV1'](), _0x1cabd6['visible'] = ![];
                            // });
                        }), Laya['timer']['loop'](0x3e8, this, this['updateV']);
                        window['reliveImg'] && (window['reliveImg']['visible'] = !![]);
                        const _0x313736 = JSON['parse'](JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('HAPPY_B_RI' + 'DGE')));
                        window['coinbg'] ? window['coinbg']['visible'] = ![] : (window['coinbg'] = new Laya['Image'](), window['coinbg']['x'] = 0x14, window['coinbg']['y'] = 0x32, window['coinbg']['skin'] = 'res/coinbg' + '.png', Laya['stage']['addChild'](window['coinbg']), window['coinText'] = new Laya['Text'](), window['coinText']['text'] = _0x313736['coin'], window['coinText']['fontSize'] = 0x22, window['coinText']['x'] = 0x46, window['coinText']['y'] = 17.5, window['coinText']['color'] = '#ffffff', window['coinbg']['addChild'](window['coinText']), window['coinbg']['visible'] = ![]), window['coinText']['text'] = _0x313736['coin'];
                    }
                },
                {
                    'key': 'updateV',
                    'value': function _0x2ea097() {
                        this['_time'] -= 0x1, this['_angle'] += 0x4a, (this['_tnum']['text'] = '' + Math['ceil'](this['_time']), this['_markS']['graphics']['clear'](), this['_markS']['graphics']['drawPie'](0x65, 0x65, 0x78, this['_angle'], 0x10e, '#ffffff')), this['_angle'] >= 0x10e && this['closeV1']();
                    }
                },
                {
                    'key': 'reliveDo',
                    'value': function _0x2f1c3d() {
                        Laya['timer']['clear'](this, this['updateV']), 
                        //TODO showReward
                        HUHU_showRewardedVideoAd(
                            () => {
                                // 用户观看广告完成，继续游戏
                                console['log']('success'), (_0x1220b2['playMusic'](0x0), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['REGAME']), this['closeV2'](!0x1));
                            },
                            () => {
                                // 广告请求失败或者用户跳过广告                            
                                promptMessage("Failed to get the reward, please watch the ads to the end.");
                            }
                            );
                        // YYGGames['showReward'](() => {
                        //     console['log']('success'), (_0x1220b2['playMusic'](0x0), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['REGAME']), this['closeV2'](!0x1));
                        // }, () => {
                        //     console['log']('faile'), Laya['timer']['loop'](0x3e8, this, this['updateV']);
                        // });
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x1025a0() {
                        Laya['timer']['clear'](this, this['updateV']), 
                        //TODO showInterstitial
                        console.log("请求插屏广告");

                        // 展示插屏广告
                        HUHU_showInterstitialAd();
                    
                        // 继续游戏
                        // window['scrollList']['visible'] = ![], 
                        // window['closetText']['visible'] = ![],
                        window['reliveImg']['visible'] = ![], window['coinbg']['visible'] = ![], ((!(arguments['length'] > 0x0 && void 0x0 !== arguments[0x0]) || arguments[0x0]) && _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RETURN_MAI' + 'N']), Laya['Tween']['clearAll'](this), _get(_getPrototypeOf(_0x139080['prototype']), 'offClick', this)['call'](this, [this['_brelive']], this['reliveDo']), _get(_getPrototypeOf(_0x139080['prototype']), 'closeV', this)['call'](this));
                        // YYGGames['showInters' + 'titial'](() => {
                        //     // window['scrollList']['visible'] = ![], 
                        //     // window['closetText']['visible'] = ![],
                        //      window['reliveImg']['visible'] = ![], window['coinbg']['visible'] = ![], ((!(arguments['length'] > 0x0 && void 0x0 !== arguments[0x0]) || arguments[0x0]) && _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RETURN_MAI' + 'N']), Laya['Tween']['clearAll'](this), _get(_getPrototypeOf(_0x139080['prototype']), 'offClick', this)['call'](this, [this['_brelive']], this['reliveDo']), _get(_getPrototypeOf(_0x139080['prototype']), 'closeV', this)['call'](this));
                        // });
                    }
                },
                {
                    'key': 'closeV2',
                    'value': function _0x8e3ccc() {
                        Laya['timer']['clear'](this, this['updateV']), window['scrollList']['visible'] = ![], window['closetText']['visible'] = ![], window['reliveImg']['visible'] = ![], window['coinbg']['visible'] = ![], ((!(arguments['length'] > 0x0 && void 0x0 !== arguments[0x0]) || arguments[0x0]) && _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RETURN_MAI' + 'N']), Laya['Tween']['clearAll'](this), _get(_getPrototypeOf(_0x139080['prototype']), 'offClick', this)['call'](this, [this['_brelive']], this['reliveDo']), _get(_getPrototypeOf(_0x139080['prototype']), 'closeV', this)['call'](this));
                    }
                },
                {
                    'key': 'closeV1',
                    'value': function _0x230c1e() {
                        Laya['timer']['clear'](this, this['updateV']), window['closetText']['visible'] = ![], window['reliveImg']['visible'] = ![], window['coinbg']['visible'] = !![];
                        for (let _0x576f56 = 0x1; _0x576f56 < 0x8; _0x576f56++) {
                            Laya['stage']['getChildAt'](0x2)['getChildAt'](0x1)['getChildAt'](0x0)['getChildAt'](_0x576f56)['visible'] = ![];
                        }
                        window['faileTitle' + 'Img']['visible'] = !![], !window['Skiptext'] ? (window['Skiptext'] = new Laya['Text'](), window['Skiptext']['width'] = 0x143, window['Skiptext']['height'] = 0x5b, window['Skiptext']['fontSize'] = 0x3c, window['Skiptext']['text'] = 'Back', window['Skiptext']['anchorX'] = window['Skiptext']['anchorY'] = 0.5, window['Skiptext']['x'] = 0x139, window['Skiptext']['y'] = 0x33f, window['Skiptext']['color'] = '#ffffff', Laya['stage']['addChild'](window['Skiptext'])) : window['Skiptext']['visible'] = !![], window['Skiptext']['on'](Laya['Event']['CLICK'], this, () => {
                            window['Skiptext']['visible'] = ![], window['faileTitle' + 'Img']['visible'] = ![], this['closeV']();
                        });
                    }
                }
            ]), _0x139080;
        }(), _0x4afd8b = function (_0xdce83c) {
            function _0x241610() {
                var _0x2a633e;
                return _classCallCheck(this, _0x241610), (_0x2a633e = _possibleConstructorReturn(this, _getPrototypeOf(_0x241610)['call'](this, 'GodPassVie' + 'w')))['_buse'] = _0x2a633e['_main']['getChild']('buse')['asButton'], _0x2a633e;
            }
            return _inherits(_0x241610, _0x2b72aa), _createClass(_0x241610, [
                {
                    'key': 'btnClick',
                    'value': function _0x5e7565(_0x4091e2) {
                        switch (_0x1220b2['playMusic'](0x0), _0x4091e2) {
                        case this['_buse']:
                            //TODO showReward
                            HUHU_showRewardedVideoAd(
                                () => {
                                    // 用户观看广告完成，继续游戏
                                    _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['USE_GOD_TO' + 'OL']), this['closeV']();
                                },
                                () => {
                                    // 广告请求失败或者用户跳过广告                            
                                    promptMessage("Failed to get the reward, please watch the ads to the end.");
                                }
                                );
                            // YYGGames['showReward'](() => {
                            //     _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['USE_GOD_TO' + 'OL']), this['closeV']();
                            // });
                        }
                    }
                },
                {
                    'key': 'show',
                    'value': function _0x135e8d() {
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0], (_get(_getPrototypeOf(_0x241610['prototype']), 'show', this)['call'](this), _get(_getPrototypeOf(_0x241610['prototype']), 'onClick', this)['call'](this, [this['_buse']], this['btnClick']));
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x2a9f39() {
                        _get(_getPrototypeOf(_0x241610['prototype']), 'offClick', this)['call'](this, [this['_buse']], this['btnClick']), _get(_getPrototypeOf(_0x241610['prototype']), 'closeV', this)['call'](this);
                    }
                }
            ]), _0x241610;
        }(), _0x226b8a = function (_0x219575) {
            function _0x3dc7cf() {
                var _0x4a0938;
                _classCallCheck(this, _0x3dc7cf), (_0x4a0938 = _possibleConstructorReturn(this, _getPrototypeOf(_0x3dc7cf)['call'](this, 'InGameView')))['_bpass'] = _0x4a0938['_main']['getChild']('bpass')['asButton'], _0x4a0938['_bg'] = _0x4a0938['_main']['getChild']('bg')['asCom'];
                var _0x3f26bf = _0x4a0938['_main']['getChild']('maintop')['asCom'];
                return _0x3f26bf['y'] = _0x166d84['adapterUi'](), _0x4a0938['_tgold'] = _0x3f26bf['getChild']('tgold')['asTextFiel' + 'd'], _0x4a0938['_badd'] = _0x3f26bf['getChild']('badd')['asButton'], _0x4a0938['_tstage'] = _0x4a0938['_main']['getChild']('tstage')['asTextFiel' + 'd'], _0x4a0938['_tbridge'] = _0x4a0938['_main']['getChild']('tbridge')['asTextFiel' + 'd'], _0x4a0938['_iguide'] = _0x4a0938['_main']['getChild']('iguide')['asImage'], _0x4a0938['_bar'] = _0x4a0938['_main']['getChild']('bar')['asCom'], _0x4a0938['_mk'] = _0x4a0938['_bar']['getChild']('mk')['asImage'], _0x4a0938['_ctrl'] = _0x4a0938['_main']['getControl' + 'ler']('c1'), _0x4a0938['_ctrl2'] = _0x4a0938['_main']['getControl' + 'ler']('c2'), _0x4a0938['_llevelNam' + 'e'] = _0x4a0938['_main']['getChild']('llevelName')['asLoader'], _0x4a0938['_lscore'] = _0x4a0938['_main']['getChild']('lscore')['asLoader'], _0x4a0938['_breturn'] = _0x4a0938['_main']['getChild']('breturn')['asButton'], _0x4a0938;
            }
            return _inherits(_0x3dc7cf, _0x2b72aa), _createClass(_0x3dc7cf, [
                {
                    'key': 'show',
                    'value': function _0x5c4137() {
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0], (_get(_getPrototypeOf(_0x3dc7cf['prototype']), 'show', this)['call'](this), _get(_getPrototypeOf(_0x3dc7cf['prototype']), 'onClick', this)['call'](this, [
                            this['_bpass'],
                            this['_badd'],
                            this['_breturn']
                        ], this['btnClick']), this['_bg']['on'](Laya['Event']['MOUSE_DOWN'], this, this['bgDown']), this['_bg']['on'](Laya['Event']['MOUSE_UP'], this, this['bgUp']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['ADD_GOLD'], this, this['addGold']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['MONEY_CHAN' + 'GE'], this, this['updateGold']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['RESTART'], this, this['restart']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['BRIDGE_CHA' + 'NGE'], this, this['updateBrid' + 'egeTxt']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['RELIVE'], this, this['onDie']), this['updateGold'](), window['ingame'] = this), (this['_badd']['visible'] = ![], this['_bpass']['y'] = 0xf6), this['_breturn']['y'] = 0xf6, this['restart']();
                    }
                },
                {
                    'key': 'onDie',
                    'value': function _0x2cecdf() {
                        0x0 == _0xe53014['allInfoIni' + 't']['guide'] && (this['_ctrl2']['selectedIn' + 'dex'] = 0x1);
                    }
                },
                {
                    'key': 'updateBrid' + 'egeTxt',
                    'value': function _0x18b97a(_0x3136a0) {
                        var _0x373f07 = _0xe53014['allInfoIni' + 't']['stage'], _0x3e03c5 = _0xe53014['STAGE_DATA'][_0x373f07 - 0x1];
                        this['_tbridge']['text'] = _0x3136a0 + '/' + (_0x3e03c5['bridegeNum'] - 0x1), this['_mk']['x'] = 0x3 - this['_mk']['width'] + _0x3136a0 / (_0x3e03c5['bridegeNum'] - 0x1) * this['_mk']['width'], this['_tstage']['text'] = 'Level\x20' + _0x373f07, this['_iguide']['visible'] = 0x1 == _0x373f07;
                    }
                },
                {
                    'key': 'restart',
                    'value': function _0xf507bc() {
                        this['updateBrid' + 'egeTxt'](0x0);
                    }
                },
                {
                    'key': 'updateGold',
                    'value': function _0x3fbe16() {
                        this['_tgold']['text'] = _0xe53014['allInfoIni' + 't']['coin'] + '';
                    }
                },
                {
                    'key': 'addGold',
                    'value': function _0x3f5e7e(_0xbec39b, _0x55c92e) {
                        var _0x1deb98 = this;
                        Laya['Tween']['clearAll'](this);
                        var _0x4a3be0 = Math['floor'](_0xbec39b);
                        _0xbec39b >= 0x0 && _0xbec39b < 0x5 && (this['_ctrl']['selectedIn' + 'dex'] = _0x4a3be0), _0x55c92e < 0x0 ? (this['_llevelNam' + 'e']['x'] = 0x82, this['_lscore']['x'] = 0x96) : (this['_llevelNam' + 'e']['x'] = window['stagew'] - 0x82 - this['_llevelNam' + 'e']['width'], this['_lscore']['x'] = window['stagew'] - 0x96 - this['_lscore']['width']), this['_llevelNam' + 'e']['y'] = window['stageh'] - 0x2bc, this['_lscore']['y'] = window['stageh'] - 0x244, this['_llevelNam' + 'e']['alpha'] = 0x1, this['_lscore']['alpha'] = 0x1, _0xe53014['allInfoIni' + 't']['coin'] += 0x2 * _0xbec39b, _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), Laya['Tween']['to'](this['_lscore'], {
                            'alpha': 0.3,
                            'y': window['stageh'] - 0x276
                        }, 0x3e8, Laya['Ease']['linearNone'], Laya['Handler']['create'](this, function () {
                            _0x1deb98['_ctrl']['selectedIn' + 'dex'] = 0x0;
                        }));
                    }
                },
                {
                    'key': 'bgDown',
                    'value': function _0x5b7106() {
                        _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MOUSE_DOWN']);
                    }
                },
                {
                    'key': 'bgUp',
                    'value': function _0x2aa5d1() {
                        _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MOUSE_UP']);
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x1b931a() {
                        _get(_getPrototypeOf(_0x3dc7cf['prototype']), 'offClick', this)['call'](this, [
                            this['_bpass'],
                            this['_badd'],
                            this['_breturn']
                        ], this['btnClick']), this['_bg']['off'](Laya['Event']['MOUSE_DOWN'], this, this['bgDown']), this['_bg']['off'](Laya['Event']['MOUSE_UP'], this, this['bgUp']), _0xe53014['SEventDisp' + 'atcher']['off'](_0xe53014['Events']['ADD_GOLD'], this, this['addGold']), _0xe53014['SEventDisp' + 'atcher']['off'](_0xe53014['Events']['MONEY_CHAN' + 'GE'], this, this['updateGold']), _0xe53014['SEventDisp' + 'atcher']['off'](_0xe53014['Events']['RESTART'], this, this['restart']), _0xe53014['SEventDisp' + 'atcher']['off'](_0xe53014['Events']['BRIDGE_CHA' + 'NGE'], this, this['updateBrid' + 'egeTxt']), _get(_getPrototypeOf(_0x3dc7cf['prototype']), 'closeV', this)['call'](this);
                    }
                },
                {
                    'key': 'btnClick',
                    'value': function _0x5cce0d(_0x10881f) {
                        switch (_0x1220b2['playMusic'](0x0), _0x10881f) {
                        case this['_breturn']:
                            //TODO showInterstitial
                            console.log("请求插屏广告");

                            // 展示插屏广告
                            HUHU_showInterstitialAd();
                        
                            // 继续游戏
                            _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RETURN_MAI' + 'N']);
                            // YYGGames['showInters' + 'titial'](() => {
                            //     _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RETURN_MAI' + 'N']);
                            // });
                            break;
                        case this['_badd']:
                            _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['AV_COIN'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), _0x166d84['shareToast']('金币+' + _0xe53014['AV_COIN']);
                            break;
                        case this['_bpass']:
                            if (0x0 == _0xe53014['allInfoIni' + 't']['guide'] && 0x1 == this['_ctrl2']['selectedIn' + 'dex'])
                                return this['_ctrl2']['selectedIn' + 'dex'] = 0x0, _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['USE_GOD_TO' + 'OL']), _0xe53014['allInfoIni' + 't']['guide'] = 0x1, void _0xe53014['saveData']();
                            this['_godPassVi' + 'ew'] || (this['_godPassVi' + 'ew'] = new _0x4afd8b()), this['_godPassVi' + 'ew']['show']();
                        }
                    }
                }
            ]), _0x3dc7cf;
        }(), _0x2afa4c = function (_0x42e304) {
            function _0x53f36d() {
                var _0x3e3f0b;
                const _0xec6b90 = JSON['parse'](JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('HAPPY_B_RI' + 'DGE')));
                return _classCallCheck(this, _0x53f36d), (_0x3e3f0b = _possibleConstructorReturn(this, _getPrototypeOf(_0x53f36d)['call'](this, 'StagePassV' + 'iew')))['_bnext'] = _0x3e3f0b['_main']['getChild']('bnext')['asButton'], _0x3e3f0b['_bshare'] = _0x3e3f0b['_main']['getChild']('bshare')['asButton'], _0x3e3f0b['_btimesAwa' + 'rd'] = _0x3e3f0b['_main']['getChild']('btimesAwar' + 'd')['asButton'], _0x3e3f0b['_tstage'] = _0x3e3f0b['_main']['getChild']('tstage')['asTextFiel' + 'd'], _0x3e3f0b['_tcoin'] = _0x3e3f0b['_main']['getChild']('tcoin')['asTextFiel' + 'd'], this['_bshare']['visible'] = ![], window['passView'] = _0x3e3f0b, console['log'](window['titleimg']), window['titleimg'] ? window['titleimg']['visible'] = !![] : (window['titleimg'] = new Laya['Image'](), window['titleimg']['x'] = 0x50, window['titleimg']['y'] = 0xa0, window['titleimg']['skin'] = 'win.png', Laya['stage']['addChild'](window['titleimg'])), window['coinbg'] ? window['coinbg']['visible'] = !![] : (window['coinbg'] = new Laya['Image'](), window['coinbg']['x'] = 0x14, window['coinbg']['y'] = 0x32, window['coinbg']['skin'] = 'res/coinbg' + '.png', Laya['stage']['addChild'](window['coinbg']), window['coinText'] = new Laya['Text'](), window['coinText']['text'] = _0xec6b90['coin'], window['coinText']['fontSize'] = 0x22, window['coinText']['x'] = 0x46, window['coinText']['y'] = 17.5, window['coinText']['color'] = '#ffffff', window['coinbg']['addChild'](window['coinText'])), _0x3e3f0b['_main']['getChildAt'](0x1)['visible'] = ![], _0x3e3f0b['_main']['getChildAt'](0x3)['y'] = 0x315, _0x3e3f0b['_main']['getChildAt'](0x2)['y'] = 0x2a3, _0x3e3f0b['_main']['getChildAt'](0x2)['scaleX'] = _0x3e3f0b['_main']['getChildAt'](0x2)['scaleY'] = 1.3, _0x3e3f0b['_main']['getChildAt'](0x2)['x'] = 0x132, _0x3e3f0b['_main']['getChildAt'](0x7)['y'] = 0x2a3, _0x3e3f0b['_main']['getChildAt'](0x6)['y'] = 0x20a, _0x3e3f0b['_main']['getChildAt'](0x5)['getChildAt'](0x0)['fontSize'] = 0x2e, _0x3e3f0b['_main']['getChildAt'](0x5)['x'] = 0x11a, _0x3e3f0b['_main']['getChildAt'](0x5)['y'] = 0x3c8, _0x3e3f0b;
            }
            return _inherits(_0x53f36d, _0x2b72aa), _createClass(_0x53f36d, [
                {
                    'key': 'btnClick',
                    'value': function _0x3a75a1(_0x4a0174) {
                        switch (_0x1220b2['playMusic'](0x0), _0x4a0174) {
                        case this['_bnext']:
                            //TODO showInterstitial
                            console.log("请求插屏广告");

                            // 展示插屏广告
                            HUHU_showInterstitialAd();
                        
                            // 继续游戏
                            window['titleimg']['visible'] = ![], window['coinbg']['visible'] = ![], (_0x166d84['shareToast']('金币+' + _0xe53014['STAGE_COIN' + '_AWARD']), _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['STAGE_COIN' + '_AWARD'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), this['closeV'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RESTART'])
                            // window['scrollList']['visible'] = ![]
                            );
                            // YYGGames['showInters' + 'titial'](() => {
                            //     window['titleimg']['visible'] = ![], window['coinbg']['visible'] = ![], (_0x166d84['shareToast']('金币+' + _0xe53014['STAGE_COIN' + '_AWARD']), _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['STAGE_COIN' + '_AWARD'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), this['closeV'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RESTART']), window['scrollList']['visible'] = ![]);
                            // });
                            break;
                        case this['_bshare']:
                            _0x166d84['share']('这关连续搭出10个完' + '美的桥，就问问还有谁', function () {
                            });
                            break;
                        case this['_btimesAwa' + 'rd']:
                            //TODO showReward
                            HUHU_showRewardedVideoAd(
                                () => {
                                    // 用户观看广告完成，继续游戏
                                    window['titleimg']['visible'] = ![], window['coinbg']['visible'] = ![], (_0x166d84['shareToast']('金币+' + 0x5 * _0xe53014['STAGE_COIN' + '_AWARD']), _0xe53014['allInfoIni' + 't']['coin'] += 0x5 * _0xe53014['STAGE_COIN' + '_AWARD'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), this['closeV'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RESTART'])
                                    // window['scrollList']['visible'] = ![]
                                    );
                                },
                                () => {
                                  // 广告请求失败或者用户跳过广告
                            
                            
                                  promptMessage("Failed to get the reward, please watch the ads to the end.");
                                }
                              );
                            // YYGGames['showReward'](() => {
                            //     window['titleimg']['visible'] = ![], window['coinbg']['visible'] = ![], (_0x166d84['shareToast']('金币+' + 0x5 * _0xe53014['STAGE_COIN' + '_AWARD']), _0xe53014['allInfoIni' + 't']['coin'] += 0x5 * _0xe53014['STAGE_COIN' + '_AWARD'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']), this['closeV'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RESTART']), 
                            //     window['scrollList']['visible'] = ![]);
                            // });
                        }
                    }
                },
                {
                    'key': 'show',
                    'value': function _0x45239e() {
                        // window['scrollList']['visible'] = !![];
                        window['titleimg'] && (window['titleimg']['visible'] = !![]);
                        if (window['coinbg']) {
                            window['coinbg']['visible'] = !![];
                            const _0x1bb43b = JSON['parse'](JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('HAPPY_B_RI' + 'DGE')));
                            window['coinText']['text'] = _0x1bb43b['coin'];
                        }
                        arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0], (_get(_getPrototypeOf(_0x53f36d['prototype']), 'show', this)['call'](this), _get(_getPrototypeOf(_0x53f36d['prototype']), 'onClick', this)['call'](this, [
                            this['_bnext'],
                            this['_bshare'],
                            this['_btimesAwa' + 'rd']
                        ], this['btnClick']), this['_tstage']['text'] = 'Level\x20' + _0xe53014['allInfoIni' + 't']['stage'], this['_tcoin']['text'] = '' + _0xe53014['STAGE_COIN' + '_AWARD'], _0xe53014['allInfoIni' + 't']['stage']++, _0xe53014['saveData']());
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x223d46() {
                        _get(_getPrototypeOf(_0x53f36d['prototype']), 'offClick', this)['call'](this, [
                            this['_bnext'],
                            this['_bshare'],
                            this['_btimesAwa' + 'rd']
                        ], this['btnClick']), _get(_getPrototypeOf(_0x53f36d['prototype']), 'closeV', this)['call'](this);
                    }
                }
            ]), _0x53f36d;
        }(), _0x4225ab = function (_0x3ae5f0) {
            function _0x1515dd() {
                var _0x1e2190;
                _classCallCheck(this, _0x1515dd), (_0x1e2190 = _possibleConstructorReturn(this, _getPrototypeOf(_0x1515dd)['call'](this, 'GameMainVi' + 'ew')))['init'] = !0x1;
                var _0x583c85 = _0x1e2190['_main']['getChild']('maintop')['asCom'];
                return _0x583c85['y'] = _0x166d84['adapterUi'](), _0x1e2190['_badd'] = _0x583c85['getChild']('badd')['asButton'], _0x1e2190['_bset'] = _0x1e2190['_main']['getChild']('bset')['asButton'], _0x1e2190['_bfree'] = _0x1e2190['_main']['getChild']('bfree')['asButton'], _0x1e2190['_bstart'] = _0x1e2190['_main']['getChild']('bstart')['asButton'], _0x1e2190['_bcar'] = _0x1e2190['_main']['getChild']('bcar')['asButton'], _0x1e2190['_bshare'] = _0x1e2190['_main']['getChild']('bshare')['asButton'], _0x1e2190['_bcj'] = _0x1e2190['_main']['getChild']('bcj')['asButton'], _0x1e2190['_tgold'] = _0x583c85['getChild']('tgold')['asTextFiel' + 'd'], _0x1e2190['_tstage'] = _0x1e2190['_main']['getChild']('tstage')['asTextFiel' + 'd'], _0x1220b2['backGround' + 'Music'](), _0x1e2190['addEvent'](), this['_bshare']['visible'] = ![], this['_bcj']['visible'] = ![], this['_bset']['visible'] = ![], this['_badd']['visible'] = ![], window['gamemain'] = _0x1e2190['_main'], _0x1e2190['_main']['getChildAt'](0x1)['visible'] = ![], _0x1e2190['_main']['getChildAt'](0x2)['visible'] = ![], _0x1e2190;
            }
            return _inherits(_0x1515dd, _0x2b72aa), _createClass(_0x1515dd, [
                {
                    'key': 'btnClick',
                    'value': function _0xdc29e5(_0x206725) {
                        switch (_0x1220b2['playMusic'](0x0), _0x206725) {
                        case this['_badd']:
                            _0x166d84['shareToast']('金币+' + _0xe53014['AV_COIN']), _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['AV_COIN'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']);
                            break;
                        case this['_bset']:
                            this['_settingVi' + 'ew'] || (this['_settingVi' + 'ew'] = new _0x147cc7()), this['_settingVi' + 'ew']['show']();
                            break;
                        case this['_bfree']:
                            _0x166d84['shareToast']('金币+' + _0xe53014['AV_COIN']), _0xe53014['allInfoIni' + 't']['coin'] += _0xe53014['AV_COIN'], _0xe53014['saveData'](), _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['MONEY_CHAN' + 'GE']);
                            break;
                        case this['_bstart']:
                            //TODO showInterstitial
                            console.log("请求插屏广告");

                            // 展示插屏广告
                            HUHU_showInterstitialAd();
                        
                            // 继续游戏
                            // window['scrollList']['visible'] = ![], 
                            window['btnSY']['visible'] = ![], 
                            (this['closeV'](),
                            _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RESTART']),
                             this['_ingameVie' + 'w'] || (this['_ingameVie' + 'w'] = new _0x226b8a()), 
                             this['_ingameVie' + 'w']['show'](), this['_view']['visible'] = !0x1);
                            // YYGGames['showInters' + 'titial'](() => {
                            //     window['scrollList']['visible'] = ![], 
                            //     window['btnSY']['visible'] = ![], 
                            //     (this['closeV'](),
                            //     _0xe53014['SEventDisp' + 'atcher']['event'](_0xe53014['Events']['RESTART']),
                            //      this['_ingameVie' + 'w'] || (this['_ingameVie' + 'w'] = new _0x226b8a()), 
                            //      this['_ingameVie' + 'w']['show'](), this['_view']['visible'] = !0x1);
                            // });
                            break;
                        case this['_bcar']:
                            //TODO showInterstitial
                            console.log("请求插屏广告");

                            // 展示插屏广告
                            HUHU_showInterstitialAd();
                        
                            // 继续游戏
                            // window['scrollList']['visible'] = ![],
                            // window['btnSY']['visible'] = ![],
                            (this['_shopView'] || (this['_shopView'] = new _0xabca43()),
                             this['_shopView']['show']());
                            // YYGGames['showInters' + 'titial'](() => {
                            //     window['scrollList']['visible'] = ![],
                            //      window['btnSY']['visible'] = ![],
                            //      (this['_shopView'] || (this['_shopView'] = new _0xabca43()),
                            //       this['_shopView']['show']());
                            // });
                            break;
                        case this['_bshare']:
                            _0x166d84['share']('这关连续搭出10个完' + '美的桥，就问问还有谁', function () {
                            });
                            break;
                        case this['_bcj']:
                            _0x166d84['shareToast']('暂未开放');
                        }
                    }
                },
                {
                    'key': 'show',
                    'value': function _0x21ef3c() {
                        var _0x35a22e = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0];
                        this['init'] = _0x35a22e, _get(_getPrototypeOf(_0x1515dd['prototype']), 'show', this)['call'](this), this['_view']['visible'] = !0x0, _get(_getPrototypeOf(_0x1515dd['prototype']), 'onClick', this)['call'](this, [
                            this['_badd'],
                            this['_bset'],
                            this['_bfree'],
                            this['_bstart'],
                            this['_bcar'],
                            this['_bshare'],
                            this['_bcj']
                        ], this['btnClick']), this['_tstage']['text'] = 'Level\x20' + _0xe53014['allInfoIni' + 't']['stage'], this['moneyChang' + 'e'](), window['first'] = 0x1, window['scrollList'] && (window['scrollList']['visible'] = !![]), window['btnSY'] && (window['btnSY']['visible'] = !![]);
                    }
                },
                {
                    'key': 'moneyChang' + 'e',
                    'value': function _0xb7cba0() {
                        this['_tgold']['text'] = _0xe53014['allInfoIni' + 't']['coin'] + '';
                    }
                },
                {
                    'key': 'closeV',
                    'value': function _0x3205e8() {
                        _get(_getPrototypeOf(_0x1515dd['prototype']), 'offClick', this)['call'](this, [
                            this['_badd'],
                            this['_bset'],
                            this['_bfree'],
                            this['_bstart'],
                            this['_bcar'],
                            this['_bshare'],
                            this['_bcj']
                        ], this['btnClick']), _get(_getPrototypeOf(_0x1515dd['prototype']), 'closeV', this)['call'](this);
                    }
                },
                {
                    'key': 'addEvent',
                    'value': function _0x4fa5c6() {
                        _0xe53014['SEventDisp' + 'atcher'] = new Laya['Sprite'](), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['RELIVE'], this, this['onrelive']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['RETURN_MAI' + 'N'], this, this['returnMain']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['MONEY_CHAN' + 'GE'], this, this['moneyChang' + 'e']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['ADD_GOLD'], this, this['moneyChang' + 'e']), _0xe53014['SEventDisp' + 'atcher']['on'](_0xe53014['Events']['STAGE_PASS'], this, this['stagePass']);
                    }
                },
                {
                    'key': 'stagePass',
                    'value': function _0x3563f9() {
                        this['_stagePass' + 'View'] || (this['_stagePass' + 'View'] = new _0x2afa4c()), this['_stagePass' + 'View']['show']();
                    }
                },
                {
                    'key': 'returnMain',
                    'value': function _0x5dbd4d() {
                        this['show'](!0x0);
                    }
                },
                {
                    'key': 'onrelive',
                    'value': function _0x34d47a() {
                        0x0 != _0xe53014['allInfoIni' + 't']['guide'] && (this['_view']['visible'] || (this['_reliveVie' + 'w'] || (this['_reliveVie' + 'w'] = new _0x2bdef6()), this['_reliveVie' + 'w']['show']()));
                    }
                }
            ]), _0x1515dd;
        }(), _0x18daa7 = function () {
            function _0x55a3d7() {
                _classCallCheck(this, _0x55a3d7);
                var _0x3c0e45 = window['fairygui']['UIPackage']['createObje' + 'ct']('Bag', 'LoadView')['asCom'];
                _0x166d84['addView'](_0x3c0e45), this['_tper'] = _0x3c0e45['getChild']('tper')['asTextFiel' + 'd'], this['_bar'] = _0x3c0e45['getChild']('bar')['asImage'], this['showMain']();
            }
            return _createClass(_0x55a3d7, [
                {
                    'key': 'showMain',
                    'value': function _0x1fa829() {
                        window['fairygui']['GRoot']['inst']['removeChil' + 'dren'](), new _0x4225ab()['show'](!0x1);
                    }
                },
                {
                    'key': 'setpercent',
                    'value': function _0x13ad7f(_0x1b3056) {
                        console['log']('eeeee', _0x1b3056), (this['_percent'] = _0x1b3056, this['_bar']['scaleX'] = _0x1b3056, this['_tper']['text'] = (0x64 * _0x1b3056)['toFixed'](0x1) + '%'), Laya['Tween']['to'](this['_bar'], { 'scaleX': 0x1 }, 0x3e8, null, Laya['Handler']['create'](this, () => {
                            console['log']('ddd');
                        }));
                        const _0x2327a8 = function () {
                            _0x1b3056 = this['_bar']['scaleX'], _0x1b3056 == 0x1 && Laya['timer']['clear'](this, _0x2327a8);
                        };
                        Laya['timer']['frameLoop'](0x1, this, _0x2327a8);
                        const _0x5d49c8 = function () {
                            this['_tper']['text'] = (0x64 * _0x1b3056)['toFixed'](0x1) + '%', _0x1b3056 == 0x1 && (Laya['timer']['clear'](this, _0x5d49c8), this['showMain']());
                        };
                        Laya['timer']['frameLoop'](0x1, this, _0x5d49c8);
                    }
                },
                {
                    'key': 'addloading',
                    'value': function _0x3f5682() {
                    }
                }
            ]), _0x55a3d7;
        }(), _0x10a170 = function _0x373179() {
            _classCallCheck(this, _0x373179);
        };
    new (function () {
        function _0x3ed40a() {
            _classCallCheck(this, _0x3ed40a), window['Laya3D'] ? Laya3D['init'](_0x388182['width'], _0x388182['height']) : Laya['init'](_0x388182['width'], _0x388182['height'], Laya['WebGL']), Laya['Physics'] && Laya['Physics']['enable'](), Laya['DebugPanel'] && Laya['DebugPanel']['enable'](), Laya['stage']['scaleMode'] = _0x388182['scaleMode'], Laya['stage']['screenMode'] = _0x388182['screenMode'], Laya['stage']['alignV'] = _0x388182['alignV'], Laya['stage']['alignH'] = _0x388182['alignH'], Laya['URL']['exportScen' + 'eToJson'] = _0x388182['exportScen' + 'eToJson'], (_0x388182['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0x388182['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0x388182['stat'] && Laya['Stat']['show'](), Laya['alertGloba' + 'lError'](!0x0), Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']);
        }
        return _createClass(_0x3ed40a, [
            {
                'key': 'onVersionL' + 'oaded',
                'value': function _0x463da1() {
                    Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded'])), Laya['loader']['load']('lang.lang', Laya['Handler']['create'](this, this['onLoaded1']), null, Laya['Loader']['JSON']);
                }
            },
            {
                'key': 'onLoaded1',
                'value': function _0x844435() {
                    var _0x503d1a = Laya['loader']['getRes']('lang.lang');
                    Laya['Text']['langPacks'] = _0x503d1a;
                }
            },
            {
                'key': 'onConfigLo' + 'aded',
                'value': function _0x55b22c() {
                    Laya['loader']['load']('excel.json', Laya['Handler']['create'](this, this['onExcelLoa' + 'ded']), null, Laya['Loader']['JSON']), _0x388182['startScene'] && Laya['Scene']['open'](_0x388182['startScene']), Laya['loader']['load']([
                        {
                            'url': 'res/Bag_at' + 'las0.png',
                            'type': Laya['Loader']['IMAGE']
                        },
                        {
                            'url': 'res/Bag.xm' + 'l',
                            'type': Laya['Loader']['BUFFER']
                        }
                    ], Laya['Handler']['create'](this, this['onLoaded']));
                }
            },
            {
                'key': 'onExcelLoa' + 'ded',
                'value': function _0x857736(_0x196f13) {
                    var _0x2ba54a, _0x3487e6 = _0x196f13[0x0]['data'], _0x2f0390 = _0x3487e6['length'];
                    _0xe53014['STAGE_DATA'] = [];
                    for (var _0x10d95e = 0x0; _0x10d95e < _0x2f0390; _0x10d95e++) {
                        !isNaN(_0x3487e6[_0x10d95e][0x0]) && _0x3487e6[_0x10d95e][0x0] > 0x0 && (_0xe53014['STAGE_DATA'] || (_0xe53014['STAGE_DATA'] = []), (_0x2ba54a = new _0x10a170())['stageIdx'] = _0x3487e6[_0x10d95e][0x0], _0x2ba54a['moveRate'] = _0x3487e6[_0x10d95e][0x1], _0x2ba54a['bridegeNum'] = _0x3487e6[_0x10d95e][0x2], _0x2ba54a['rp1'] = _0x3487e6[_0x10d95e][0x3], _0x2ba54a['rp2'] = _0x3487e6[_0x10d95e][0x4], _0x2ba54a['rp3'] = _0x3487e6[_0x10d95e][0x5], _0x2ba54a['rp4'] = _0x3487e6[_0x10d95e][0x6], _0x2ba54a['scale1'] = _0x3487e6[_0x10d95e][0x7], _0x2ba54a['scale2'] = _0x3487e6[_0x10d95e][0x8], _0x2ba54a['scale3'] = _0x3487e6[_0x10d95e][0x9], _0x2ba54a['scale4'] = _0x3487e6[_0x10d95e][0xa] ? _0x3487e6[_0x10d95e][0xa] : _0x3487e6[_0x10d95e][0x9], _0xe53014['STAGE_DATA']['push'](_0x2ba54a));
                    }
                }
            },
            {
                'key': 'onLoaded',
                'value': function _0x3f975a() {
                    Laya['stage']['addChild'](window['fairygui']['GRoot']['inst']['displayObj' + 'ect']), window['fairygui']['UIPackage']['addPackage']('res/Bag'), _0x166d84['setStageWi' + 'dthHeight'](window['fairygui']['GRoot']['inst']['width'], window['fairygui']['GRoot']['inst']['height']), this['loadData']();
                }
            },
            {
                'key': 'loadData',
                'value': function _0x3317f4() {
                    var _0x204f5f = Laya['LocalStora' + 'ge']['getJSON'](_0xe53014['KEY_NAME']);
                    _0x204f5f && (_0xe53014['allInfoIni' + 't'] = JSON['parse'](_0x204f5f)), this['addloading'](), this['loadingPan' + 'el']();
                }
            },
            {
                'key': 'addloading',
                'value': function _0x2e2e9f() {
                    var _0x40621e = new Laya['Image']();
                    _0x40621e['skin'] = 'res/Loadin' + 'gBg.png', _0x40621e['width'] = Laya['stage']['width'], _0x40621e['height'] = Laya['stage']['height'], _0x40621e['anchorX'] = _0x40621e['anchorY'] = 0.5, _0x40621e['centerX'] = _0x40621e['centerY'] = 0x0, Laya['stage']['addChild'](_0x40621e);
                    var _0x3fa8ab = new Laya['Image']();
                    _0x3fa8ab['skin'] = 'res/Logo.p' + 'ng', _0x3fa8ab['anchorX'] = _0x3fa8ab['anchorY'] = 0.5, _0x3fa8ab['centerX'] = 0x0, _0x3fa8ab['centerY'] = -0x64, Laya['stage']['addChild'](_0x3fa8ab);
                    var _0x5e585c = new Laya['ProgressBa' + 'r']();
                    _0x5e585c['skin'] = 'res/Progre' + 'ssBg.png', _0x5e585c['anchorX'] = _0x5e585c['anchorY'] = 0.5, _0x5e585c['centerX'] = 0x0, _0x5e585c['centerY'] = 0x64, Laya['stage']['addChild'](_0x5e585c);
                    var _0x3de14d = new Laya['Image']();
                    _0x3de14d['skin'] = 'yad.png', _0x3de14d['right'] = 0xa, _0x3de14d['top'] = 0xa, Laya['stage']['addChild'](_0x3de14d), _0x5e585c['bar']['skin'] = 'res/Progre' + 'ssBg$bar.p' + 'ng', _0x5e585c['value'] = 0x0, 
                    window['isonPreLoa' + 'dFinish'] = !![], 
                    // window['scrollList'] = YYGGames['gameBanner'],
                    //  window['scrollList']['visible'] = ![], 
                    //  YYGGames['gameBox']['visible'] = ![], 
                    //  YYGGames['gameBanner']['bottom'] = 0x64,
                    //   YYGGames['icon']['right'] = 0xa,
                    //    YYGGames['icon']['top'] = 0xa, 
                    //    YYGGames['gameBanner']['setBannerS' + 'ize'](0xaf, 0xaf),
                        // YYGGames['gameBanner']['games']['spaceX'] = 12.5,
                         Laya['Tween']['to'](_0x5e585c, { 'value': 0x1 }, 0x7d0, null, new Laya['Handler']['create'](this, () => {
                        // window['scrollList']['visible'] = !![],
                         _0x40621e['removeSelf'](), 
                         _0x5e585c['removeSelf'](), _0x3fa8ab['removeSelf']();
                        var _0x52b13a = Laya['LocalStora' + 'ge']['getItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY');
                        !_0x52b13a && (_0x52b13a = 0x1, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x1)), window['btnSY'] ? window['btnSY']['visible'] = !![] : (window['btnSY'] = new Laya['Button'](), window['btnSY']['stateNum'] = 0x1, _0x52b13a == 0x1 ? (window['btnSY']['skin'] = 'btn_sound_' + 'on.png', Laya['SoundManag' + 'er']['playMusic']('res/music/' + 'background' + '2.mp3')) : window['btnSY']['skin'] = 'btn_sound_' + 'off.png', Laya['stage']['addChild'](window['btnSY']), window['btnSY']['x'] = 0x3c, window['btnSY']['y'] = 0x8c, window['btnSY']['on'](Laya['Event']['CLICK'], this, () => {
                            window['btnSY']['skin'] == 'btn_sound_' + 'on.png' ? (window['btnSY']['skin'] = 'btn_sound_' + 'off.png', _0x52b13a = 0x0, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x0), Laya['SoundManag' + 'er']['stopMusic']()) : (window['btnSY']['skin'] = 'btn_sound_' + 'on.png', _0x52b13a = 0x1, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x1), Laya['SoundManag' + 'er']['playMusic']('res/music/' + 'background' + '2.mp3'));
                        }));
                    }));
                    // YYGGames['init']('Bridge-Bui' + 'ld-Puzzle', 
                    // () => {
                    //     window['isonPreLoa' + 'dFinish'] = !![], 
                    //     // window['scrollList'] = YYGGames['gameBanner'],
                    //     //  window['scrollList']['visible'] = ![], 
                    //     //  YYGGames['gameBox']['visible'] = ![], 
                    //     //  YYGGames['gameBanner']['bottom'] = 0x64,
                    //     //   YYGGames['icon']['right'] = 0xa,
                    //     //    YYGGames['icon']['top'] = 0xa, 
                    //     //    YYGGames['gameBanner']['setBannerS' + 'ize'](0xaf, 0xaf),
                    //         // YYGGames['gameBanner']['games']['spaceX'] = 12.5,
                    //          Laya['Tween']['to'](_0x5e585c, { 'value': 0x1 }, 0x7d0, null, new Laya['Handler']['create'](this, () => {
                    //         window['scrollList']['visible'] = !![], _0x40621e['removeSelf'](), _0x5e585c['removeSelf'](), _0x3fa8ab['removeSelf']();
                    //         var _0x52b13a = Laya['LocalStora' + 'ge']['getItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY');
                    //         !_0x52b13a && (_0x52b13a = 0x1, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x1)), window['btnSY'] ? window['btnSY']['visible'] = !![] : (window['btnSY'] = new Laya['Button'](), window['btnSY']['stateNum'] = 0x1, _0x52b13a == 0x1 ? (window['btnSY']['skin'] = 'btn_sound_' + 'on.png', Laya['SoundManag' + 'er']['playMusic']('res/music/' + 'background' + '2.mp3')) : window['btnSY']['skin'] = 'btn_sound_' + 'off.png', Laya['stage']['addChild'](window['btnSY']), window['btnSY']['x'] = 0x3c, window['btnSY']['y'] = 0x8c, window['btnSY']['on'](Laya['Event']['CLICK'], this, () => {
                    //             window['btnSY']['skin'] == 'btn_sound_' + 'on.png' ? (window['btnSY']['skin'] = 'btn_sound_' + 'off.png', _0x52b13a = 0x0, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x0), Laya['SoundManag' + 'er']['stopMusic']()) : (window['btnSY']['skin'] = 'btn_sound_' + 'on.png', _0x52b13a = 0x1, Laya['LocalStora' + 'ge']['setItem']('Bridge-Bui' + 'ld-Puzzle_' + 'SY', 0x1), Laya['SoundManag' + 'er']['playMusic']('res/music/' + 'background' + '2.mp3'));
                    //         }));
                    //     }));
                    // }),
                     window['reliveImg'] ? window['reliveImg']['visible'] = ![] : (window['reliveImg'] = new Laya['Image'](), window['reliveImg']['x'] = 0x41, window['reliveImg']['y'] = 0xd2, window['reliveImg']['skin'] = 'fuhuo.png', Laya['stage']['addChild'](window['reliveImg']), window['reliveImg']['visible'] = ![]);
                }
            },
            {
                'key': 'ListRander',
                'value': function _0x4e021a(_0x7edd77, _0x61e12a) {
                    console['log']('cell', _0x7edd77), _0x7edd77['y'] = 112.5;
                }
            },
            {
                'key': 'loadingPan' + 'el',
                'value': function _0x3b019c() {
                    _0x166d84['shareToFri' + 'ends'](), _0x166d84['shareOn'](), _0x166d84['onshow'](), new _0x18daa7();
                }
            }
        ]), _0x3ed40a;
    }())();
}();