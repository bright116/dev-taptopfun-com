var _typeof2 = require('../@babel/' + 'runtime/he' + 'lpers/type' + 'of'), _classCallCheck2 = require('../@babel/' + 'runtime/he' + 'lpers/clas' + 'sCallCheck'), _createClass2 = require('../@babel/' + 'runtime/he' + 'lpers/crea' + 'teClass'), _inherits2 = require('../@babel/' + 'runtime/he' + 'lpers/inhe' + 'rits'), _createSuper2 = require('../@babel/' + 'runtime/he' + 'lpers/crea' + 'teSuper');
!function () {
    'use strict';
    var _0x3dd129 = function (_0x8ca08b) {
            _inherits2(_0x7878b0, _0x8ca08b);
            var _0x3b8d46 = _createSuper2(_0x7878b0);
            function _0x7878b0() {
                return _classCallCheck2(this, _0x7878b0), _0x3b8d46['apply'](this, arguments);
            }
            return _createClass2(_0x7878b0, [
                {
                    'key': 'onAwake',
                    'value': function _0x3d59a5() {
                        this['height'] = Laya['stage']['height'], this['init']();
                    }
                },
                {
                    'key': 'init',
                    'value': function _0x84b909() {
                    }
                }
            ]), _0x7878b0;
        }(Laya['Scene']), _0x83809 = function () {
            function _0x5bb292() {
                _classCallCheck2(this, _0x5bb292);
            }
            return _createClass2(_0x5bb292, null, [
                {
                    'key': 'GetPlayerD' + 'ata',
                    'value': function _0x1b1439() {
                        var _0x53670c;
                        return (_0x53670c = Laya['LocalStora' + 'ge']['getJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData')) || (_0x53670c = {
                            'ver': 0x1,
                            'grade': 0x1,
                            'coin': 0x0,
                            'nowPeople': 0x0,
                            'peopleActive': [
                                !0x0,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1
                            ],
                            'lockAxis': 0x0
                        }, Laya['LocalStora' + 'ge']['setJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData', _0x53670c), _0x53670c);
                    }
                },
                {
                    'key': 'SavePlayer' + 'Data',
                    'value': function _0x3100ac(_0x4900ee) {
                        Laya['LocalStora' + 'ge']['setJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData', _0x4900ee);
                    }
                },
                {
                    'key': 'clearPlaye' + 'rData',
                    'value': function _0x57d51a() {
                        Laya['LocalStora' + 'ge']['clear']();
                    }
                },
                {
                    'key': 'CheckPlaye' + 'rData',
                    'value': function _0x41d8b2() {
                        var _0x9295cc;
                        (_0x9295cc = Laya['LocalStora' + 'ge']['getJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData'))['ver'] && 0x1 == _0x9295cc['ver'] || (_0x9295cc = {
                            'ver': 0x1,
                            'grade': 0x1,
                            'coin': 0x0,
                            'nowPeople': 0x0,
                            'peopleActive': [
                                !0x0,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1,
                                !0x1
                            ],
                            'lockAxis': 0x0
                        }, Laya['LocalStora' + 'ge']['setJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData', _0x9295cc));
                    }
                }
            ]), _0x5bb292;
        }(), _0x58bdf8, _0x2a0327, _0x4633bf, _0x1e40f9, _0x4f5248, _0x3cd92e, _0x338ce2, _0x18ac62;
    !function (_0x1731c0) {
        _0x1731c0['Loading'] = 'UIScene/Lo' + 'ading.scen' + 'e', _0x1731c0['BusyLoadin' + 'g'] = 'UIScene/Bu' + 'syLoading.' + 'scene', _0x1731c0['Home'] = 'UIScene/Ho' + 'me.scene', _0x1731c0['Game'] = 'UIScene/Ga' + 'me.scene', _0x1731c0['Game3D'] = 'UIScene/Ga' + 'me3D.scene', _0x1731c0['Reborn'] = 'UIScene/Re' + 'born.scene', _0x1731c0['Settlement'] = 'UIScene/Se' + 'ttlement.s' + 'cene', _0x1731c0['Mission'] = 'UIScene/Mi' + 'ssion.scen' + 'e', _0x1731c0['Skin'] = 'UIScene/Sk' + 'in.scene', _0x1731c0['FreeSkin'] = 'UIScene/Fr' + 'eeSkin.sce' + 'ne', _0x1731c0['Sign'] = 'UIScene/Si' + 'gn.scene', _0x1731c0['Offline'] = 'UIScene/Of' + 'fline.scen' + 'e', _0x1731c0['Strength'] = 'UIScene/St' + 'rength.sce' + 'ne', _0x1731c0['SignTips'] = 'UIScene/Si' + 'gnTips.sce' + 'ne', _0x1731c0['Busy'] = 'UIScene/Bu' + 'sy.scene', _0x1731c0['Background'] = 'UIScene/Ba' + 'ckground.s' + 'cene', _0x1731c0['Box'] = 'UIScene/Bo' + 'x.scene', _0x1731c0['Clean'] = 'UIScene/Cl' + 'ean.scene';
    }(_0x58bdf8 || (_0x58bdf8 = {})), function (_0x1c5c2a) {
        _0x1c5c2a['BoxItem'] = 'prefab/Box' + 'Item.prefa' + 'b', _0x1c5c2a['FontDamage' + 'd'] = 'prefab/Fon' + 'tDamaged.p' + 'refab', _0x1c5c2a['CompoundIt' + 'em'] = 'prefab/Com' + 'poundItem.' + 'prefab';
    }(_0x2a0327 || (_0x2a0327 = {})), function (_0x1bc053) {
        _0x1bc053['BGM'] = 'Bgm', _0x1bc053['CLICK'] = 'Click', _0x1bc053['AddBrick'] = 'AddBrick', _0x1bc053['Chest'] = 'Chest', _0x1bc053['Finish'] = 'Finish', _0x1bc053['PutBrick'] = 'PutBrick';
    }(_0x4633bf || (_0x4633bf = {}));
    var _0x4ff7a0 = function () {
            function _0x137153() {
                _classCallCheck2(this, _0x137153), (this['tween'] = new Laya['Tween'](), this['tweens'] = []);
            }
            return _createClass2(_0x137153, [
                {
                    'key': 'getTimeByF' + 'rame',
                    'value': function _0x4487e0(_0x58b9ab) {
                        return Math['round'](0xa * _0x58b9ab);
                    }
                },
                {
                    'key': 'toTween',
                    'value': function _0x53960b(_0x2705ee, _0x501cae, _0x4fe9ab, _0x4ac200) {
                        var _0x209b3c = this, _0x4bc3bf = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : !0x0;
                        this['target'] = _0x2705ee, this['isLocal'] = _0x4bc3bf;
                        var _0x2c8280 = {}, _0x2b31b7 = {};
                        if (_0x501cae['pos']) {
                            var _0x2228f9 = _0x4bc3bf ? _0x2705ee['transform']['localPosit' + 'ion']['clone']() : _0x2705ee['transform']['position']['clone']();
                            _0x2c8280['posX'] = _0x2228f9['x'], _0x2c8280['posY'] = _0x2228f9['y'], _0x2c8280['posZ'] = _0x2228f9['z'], _0x2b31b7['posX'] = _0x501cae['pos']['x'], _0x2b31b7['posY'] = _0x501cae['pos']['y'], _0x2b31b7['posZ'] = _0x501cae['pos']['z'];
                        }
                        if (_0x501cae['rot']) {
                            var _0x51ed4b = _0x4bc3bf ? _0x2705ee['transform']['localRotat' + 'ionEuler']['clone']() : _0x2705ee['transform']['rotationEu' + 'ler']['clone']();
                            _0x2c8280['rotX'] = _0x51ed4b['x'], _0x2c8280['rotY'] = _0x51ed4b['y'], _0x2c8280['rotZ'] = _0x51ed4b['z'], _0x2b31b7['rotX'] = _0x501cae['rot']['x'], _0x2b31b7['rotY'] = _0x501cae['rot']['y'], _0x2b31b7['rotZ'] = _0x501cae['rot']['z'];
                        }
                        if (_0x501cae['sca']) {
                            var _0x33b5bb = _0x2705ee['transform']['getWorldLo' + 'ssyScale']()['clone']();
                            _0x2c8280['scaX'] = _0x33b5bb['x'], _0x2c8280['scaY'] = _0x33b5bb['y'], _0x2c8280['scaZ'] = _0x33b5bb['z'], _0x2b31b7['scaX'] = _0x501cae['sca']['x'], _0x2b31b7['scaY'] = _0x501cae['sca']['y'], _0x2b31b7['scaZ'] = _0x501cae['sca']['z'];
                        }
                        return this['tween']['to'](_0x2c8280, {
                            'posX': _0x2b31b7['posX'],
                            'posY': _0x2b31b7['posY'],
                            'posZ': _0x2b31b7['posZ'],
                            'rotX': _0x2b31b7['rotX'],
                            'rotY': _0x2b31b7['rotY'],
                            'rotZ': _0x2b31b7['rotZ'],
                            'scaX': _0x2b31b7['scaX'],
                            'scaY': _0x2b31b7['scaY'],
                            'scaZ': _0x2b31b7['scaZ']
                        }, _0x4fe9ab, null, Laya['Handler']['create'](this, function () {
                            _0x4ac200 && _0x4ac200();
                            var _0x449ee5 = _0x209b3c['tweens']['shift']();
                            _0x449ee5 && _0x209b3c['toTween'](_0x209b3c['target'], _0x449ee5['value'], _0x449ee5['time'], _0x449ee5['completeFu' + 'n']);
                        })), this['tween']['update'] = new Laya['Handler'](this, function () {
                            _0x501cae['pos'] && (_0x4bc3bf ? _0x2705ee['transform']['localPosit' + 'ion'] = new Laya['Vector3'](_0x2c8280['posX'], _0x2c8280['posY'], _0x2c8280['posZ']) : _0x2705ee['transform']['position'] = new Laya['Vector3'](_0x2c8280['posX'], _0x2c8280['posY'], _0x2c8280['posZ'])), _0x501cae['rot'] && (_0x4bc3bf ? _0x2705ee['transform']['localRotat' + 'ionEuler'] = new Laya['Vector3'](_0x2c8280['rotX'], _0x2c8280['rotY'], _0x2c8280['rotZ']) : _0x2705ee['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](_0x2c8280['rotX'], _0x2c8280['rotY'], _0x2c8280['rotZ'])), _0x501cae['sca'] && _0x2705ee['transform']['setWorldLo' + 'ssyScale'](new Laya['Vector3'](_0x2c8280['scaX'], _0x2c8280['scaY'], _0x2c8280['scaZ']));
                        }), this;
                    }
                },
                {
                    'key': 'clearTween',
                    'value': function _0x3f01d6(_0x16bf12) {
                        this['tweens'] = [], this['tween']['clear'](), this['target'] && _0x16bf12 && (_0x16bf12['pos'] && (this['isLocal'] ? this['target']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](_0x16bf12['pos']['x'], _0x16bf12['pos']['y'], _0x16bf12['pos']['z']) : this['target']['transform']['position'] = new Laya['Vector3'](_0x16bf12['pos']['x'], _0x16bf12['pos']['y'], _0x16bf12['pos']['z'])), _0x16bf12['rot'] && (this['target']['transform']['rotationEu' + 'ler'] = new Laya['Vector3'](_0x16bf12['rot']['x'], _0x16bf12['rot']['y'], _0x16bf12['rot']['z'])), _0x16bf12['sca'] && this['target']['transform']['setWorldLo' + 'ssyScale'](new Laya['Vector3'](_0x16bf12['sca']['x'], _0x16bf12['sca']['y'], _0x16bf12['sca']['z'])));
                    }
                },
                {
                    'key': 'then',
                    'value': function _0x333713(_0x7ad10, _0x75507f, _0x2c21a0) {
                        return this['tweens']['push']({
                            'value': _0x7ad10,
                            'time': _0x75507f,
                            'completeFun': _0x2c21a0
                        }), this;
                    }
                }
            ]), _0x137153;
        }(), _0x5afa76 = function () {
            function _0x21f44c() {
                _classCallCheck2(this, _0x21f44c);
            }
            return _createClass2(_0x21f44c, null, [
                {
                    'key': 'loadScene',
                    'value': function _0x49aa6e(_0x10210d) {
                        var _0x4650f1 = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : 0x0, _0xfb07e1 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : function () {
                            }, _0x3c9f21 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : null;
                        _0x10210d && Laya['Scene']['open'](_0x10210d, !0x1, _0x3c9f21, Laya['Handler']['create'](this, function (_0x88aee8) {
                            Laya['stage']['addChild'](_0x88aee8), _0x88aee8['zOrder'] = _0x4650f1, _0xfb07e1();
                        }));
                    }
                },
                {
                    'key': 'TouchOn',
                    'value': function _0x491659(_0x19ba80, _0x3ce015, _0x5c6c14, _0x34a0cb) {
                        Laya['stage']['on'](Laya['Event']['MOUSE_DOWN'], _0x34a0cb, _0x19ba80), Laya['stage']['on'](Laya['Event']['MOUSE_MOVE'], _0x34a0cb, _0x3ce015), Laya['stage']['on'](Laya['Event']['MOUSE_UP'], _0x34a0cb, _0x5c6c14), Laya['stage']['on'](Laya['Event']['MOUSE_OUT'], _0x34a0cb, _0x5c6c14);
                    }
                },
                {
                    'key': 'TouchOff',
                    'value': function _0x3b7f3e(_0x3668d4, _0xc364bf, _0x414fcc, _0x216635) {
                        Laya['stage']['off'](Laya['Event']['MOUSE_DOWN'], _0x216635, _0x3668d4), Laya['stage']['off'](Laya['Event']['MOUSE_MOVE'], _0x216635, _0xc364bf), Laya['stage']['off'](Laya['Event']['MOUSE_UP'], _0x216635, _0x414fcc), Laya['stage']['on'](Laya['Event']['MOUSE_OUT'], _0x216635, _0x414fcc);
                    }
                },
                {
                    'key': 'buttonInit',
                    'value': function _0x1ab5c5(_0x111d5c, _0x4add08, _0x56fe88, _0x2b3340, _0x490d71) {
                        if (_0x111d5c['offAllCall' + 'er'](_0x4add08), _0x111d5c instanceof Laya['Button'] && !_0x490d71) {
                            var _0x13fc19 = function _0x390e94(_0x886226) {
                                _0x33885f['soundContr' + 'oller']['play'](_0x4633bf['CLICK']), _0x56fe88 && _0x56fe88['call'](_0x4add08, _0x886226);
                            };
                            _0x111d5c['on'](Laya['Event']['CLICK'], _0x4add08, _0x13fc19, [_0x2b3340]);
                        } else {
                            var _0x13370e = 0x3c, _0x28b52b = 0x1, _0x1b1785 = _0x111d5c['scaleX'] * _0x28b52b, _0x1e3f7c = _0x111d5c['scaleY'] * _0x28b52b, _0x5aa3a2 = 0.9 * _0x28b52b, _0x6407ff = !0x1, _0x3be53f = function _0x523739(_0x45d42c) {
                                    _0x6407ff = !0x0, Laya['Tween']['to'](_0x111d5c, {
                                        'scaleX': _0x5aa3a2,
                                        'scaleY': _0x5aa3a2
                                    }, _0x13370e);
                                };
                            _0x111d5c['on'](Laya['Event']['MOUSE_DOWN'], _0x4add08, _0x3be53f, [_0x2b3340]);
                            var _0x21a46d = function _0xba6d51(_0x5184e9) {
                                0x0 != _0x6407ff && (_0x6407ff = !0x1, Laya['Tween']['to'](_0x111d5c, {
                                    'scaleX': _0x1b1785,
                                    'scaleY': _0x1e3f7c
                                }, _0x13370e), _0x56fe88 && _0x56fe88['call'](_0x4add08, _0x5184e9), _0x33885f['soundContr' + 'oller']['play'](_0x4633bf['CLICK']));
                            };
                            _0x111d5c['on'](Laya['Event']['MOUSE_UP'], _0x4add08, _0x21a46d, [_0x2b3340]);
                            var _0xd805f1 = function _0x23098c(_0x21158f) {
                                Laya['Tween']['to'](_0x111d5c, {
                                    'scaleX': _0x1b1785,
                                    'scaleY': _0x1e3f7c
                                }, _0x13370e);
                            };
                            _0x111d5c['on'](Laya['Event']['MOUSE_OUT'], _0x4add08, _0xd805f1, [_0x2b3340]);
                        }
                    }
                },
                {
                    'key': 'imageButto' + 'nInit',
                    'value': function _0x447d1f(_0x3aad50, _0x1cab30, _0x5e1526, _0x31f9a8) {
                        _0x3aad50['offAllCall' + 'er'](_0x1cab30), _0x3aad50['on'](Laya['Event']['MOUSE_UP'], _0x1cab30, function (_0x439a1a) {
                            _0x33885f['soundContr' + 'oller']['play'](_0x4633bf['CLICK']), _0x5e1526 && _0x5e1526['call'](_0x1cab30, _0x439a1a);
                        }, [_0x31f9a8]);
                    }
                },
                {
                    'key': 'gameButton' + 'On',
                    'value': function _0x79958(_0x18be13, _0x5bfe55, _0x203251, _0x16bbfb) {
                        _0x18be13['offAllCall' + 'er'](_0x5bfe55), _0x18be13['on'](Laya['Event']['MOUSE_DOWN'], _0x5bfe55, _0x203251), _0x18be13['on'](Laya['Event']['MOUSE_UP'], _0x5bfe55, _0x16bbfb), _0x18be13['on'](Laya['Event']['MOUSE_OUT'], _0x5bfe55, _0x16bbfb);
                    }
                },
                {
                    'key': 'Vector3Add',
                    'value': function _0xcfffd4(_0x3ea1d5, _0x2aad91) {
                        var _0x1e2c48 = new Laya['Vector3']();
                        return Laya['Vector3']['add'](_0x3ea1d5, _0x2aad91, _0x1e2c48), _0x1e2c48;
                    }
                },
                {
                    'key': 'Vector3Red' + 'uce',
                    'value': function _0x811b20(_0x248e90, _0x210988) {
                        var _0x2dc739 = new Laya['Vector3'](), _0x221a03 = _0x21f44c['Vector3Axi' + 's'](_0x210988, -0x1);
                        return _0x2dc739 = this['Vector3Add'](_0x248e90, _0x221a03);
                    }
                },
                {
                    'key': 'Vector2Add',
                    'value': function _0x2193bf(_0x108d37, _0x11c401) {
                        return new Laya['Vector2'](_0x108d37['x'] + _0x11c401['x'], _0x108d37['y'] + _0x11c401['y']);
                    }
                },
                {
                    'key': 'Vector2Red' + 'uce',
                    'value': function _0x276f80(_0x199ad4, _0x138a7f) {
                        return new Laya['Vector2'](_0x199ad4['x'] - _0x138a7f['x'], _0x199ad4['y'] - _0x138a7f['y']);
                    }
                },
                {
                    'key': 'Vector2Sca' + 'le',
                    'value': function _0xccee3e(_0x98d88d) {
                        return Math['sqrt'](Math['pow'](_0x98d88d['x'], 0x2) + Math['pow'](_0x98d88d['y'], 0x2));
                    }
                },
                {
                    'key': 'getTransfo' + 'rmForward',
                    'value': function _0x84f8c0(_0x578127) {
                        var _0x3b22ab = new Laya['Vector3']();
                        return _0x578127['getForward'](_0x3b22ab), _0x3b22ab = this['Vector3Axi' + 's'](_0x3b22ab, -0x1);
                    }
                },
                {
                    'key': 'Vector3Axi' + 's',
                    'value': function _0x213083(_0x3f2cb7, _0x519060) {
                        var _0x5a3151 = _0x3f2cb7['clone']();
                        return _0x5a3151['x'] *= _0x519060, _0x5a3151['y'] *= _0x519060, _0x5a3151['z'] *= _0x519060, _0x5a3151;
                    }
                },
                {
                    'key': 'setTransRo' + 'tEulerY',
                    'value': function _0x300d6d(_0x32a635, _0x1389f5) {
                        var _0x64ce8f = _0x32a635['localRotat' + 'ionEuler']['clone']();
                        _0x64ce8f['y'] = _0x1389f5, _0x32a635['localRotat' + 'ionEuler'] = _0x64ce8f;
                    }
                },
                {
                    'key': 'setTransRo' + 'tEulerX',
                    'value': function _0x41303c(_0xcf49f5, _0x14bac6) {
                        var _0x5eee60 = _0xcf49f5['localRotat' + 'ionEuler']['clone']();
                        _0x5eee60['x'] = _0x14bac6, _0xcf49f5['localRotat' + 'ionEuler'] = _0x5eee60;
                    }
                },
                {
                    'key': 'setTransRo' + 'tEulerZ',
                    'value': function _0x7c2bc2(_0x12df6c, _0x19f7b6) {
                        var _0x75c960 = _0x12df6c['localRotat' + 'ionEuler']['clone']();
                        _0x75c960['z'] = _0x19f7b6, _0x12df6c['localRotat' + 'ionEuler'] = _0x75c960;
                    }
                },
                {
                    'key': 'getRandomI' + 'nArray',
                    'value': function _0x48107d(_0x5824c7) {
                        if (_0x5824c7['length']) {
                            var _0x377128 = Math['random']() * _0x5824c7['length'];
                            return _0x5824c7[_0x377128 = Math['floor'](_0x377128)];
                        }
                        return console['log']('传入错误参数,返回空'), null;
                    }
                },
                {
                    'key': 'takeRandom' + 'InArray',
                    'value': function _0x4de4a6(_0x27544d) {
                        if (_0x27544d['length']) {
                            var _0x514460 = Math['random']() * _0x27544d['length'], _0x2b19b2 = _0x27544d[_0x514460 = Math['floor'](_0x514460)];
                            return _0x27544d['splice'](_0x514460, 0x1), _0x2b19b2;
                        }
                        return console['log']('传入错误参数,返回空'), null;
                    }
                },
                {
                    'key': 'getSpriteP' + 'osBySprite' + '3DPoint',
                    'value': function _0x5a03e8(_0x9bb35f) {
                        var _0x212ecc = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : new Laya['Vector2'](0x0, 0x0), _0x4bcb66 = _0x9bb35f['transform']['position']['clone'](), _0x137132 = new Laya['Vector4']();
                        _0x33885f['mainCam']['viewport']['project'](_0x4bcb66, _0x33885f['mainCam']['projection' + 'ViewMatrix'], _0x137132);
                        var _0x41d7f1 = new Laya['Vector2'](_0x137132['x'] / Laya['stage']['clientScal' + 'eX'], _0x137132['y'] / Laya['stage']['clientScal' + 'eY']);
                        return _0x41d7f1['x'] += _0x212ecc['x'], _0x41d7f1['y'] += _0x212ecc['y'], new Laya['Point'](_0x41d7f1['x'], _0x41d7f1['y']);
                    }
                },
                {
                    'key': 'coinCollec' + 'tAnim',
                    'value': function _0xcfbcb1(_0x147658, _0x23f131, _0x452c6e, _0x555d21) {
                        var _0x207702 = this, _0x34d5ef = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : 0xf, _0x1508f0 = arguments['length'] > 0x5 && arguments[0x5] !== undefined ? arguments[0x5] : null, _0x27638e = function _0x33fb7f() {
                                var _0x276d15 = Laya['Pool']['getItemByC' + 'lass']('coin', Laya['Image']);
                                _0x276d15['skin'] = _0x147658, _0x276d15['x'] = _0x23f131['x'], _0x276d15['y'] = _0x23f131['y'], _0x276d15['scale'](0.8, 0.8), _0x555d21['addChild'](_0x276d15);
                                var _0x503c41 = 0x12c + 0x64 * Math['random']() - 0x32;
                                Laya['Tween']['to'](_0x276d15, {
                                    'x': _0x276d15['x'] + 0xfa * Math['random']() - 0x7d,
                                    'y': _0x276d15['y'] + 0xfa * Math['random']() - 0x7d
                                }, _0x503c41), Laya['timer']['once'](_0x503c41 + 0x32, _0x207702, function () {
                                    Laya['Tween']['to'](_0x276d15, {
                                        'x': _0x452c6e['x'],
                                        'y': _0x452c6e['y']
                                    }, 0x190, null, new Laya['Handler'](this, function () {
                                        _0x555d21['removeChil' + 'd'](_0x276d15), Laya['Pool']['recover']('coin', _0x276d15), 0x0 == --_0x5d221f && _0x1508f0 && _0x1508f0(_0x555d21);
                                    }));
                                });
                            };
                        for (var _0x5d221f = _0x34d5ef, _0x353933 = 0x0; _0x353933 < _0x34d5ef; _0x353933++) {
                            _0x27638e();
                        }
                    }
                },
                {
                    'key': 'coinCollec' + 'tAnimAni',
                    'value': function _0x8f0e9e(_0xed8f8d, _0x5b9789, _0x42e378, _0x3786c9) {
                        var _0x159d93 = this;
                        window['isisis'] = ![];
                        var _0x436624 = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : 0xf, _0x3c48f3 = arguments['length'] > 0x5 && arguments[0x5] !== undefined ? arguments[0x5] : null, _0x464956 = function _0x28b2b1() {
                                var _0x5894c3 = Laya['Pool']['getItemByC' + 'lass']('coinAnim', Laya['Clip']);
                                _0x5894c3['skin'] = _0xed8f8d['skin'], _0x5894c3['index'] = _0xed8f8d['index'], _0x5894c3['clipX'] = _0xed8f8d['clipX'], _0x5894c3['clipY'] = _0xed8f8d['clipY'], _0x5894c3['autoPlay'] = _0xed8f8d['autoPlay'], _0x5894c3['x'] = _0x5b9789['x'], _0x5894c3['y'] = _0x5b9789['y'], _0x5894c3['scale'](0.8, 0.8), _0x3786c9['addChild'](_0x5894c3);
                                var _0xae24cb = 0x12c + 0x64 * Math['random']() - 0x32;
                                Laya['Tween']['to'](_0x5894c3, {
                                    'x': _0x5894c3['x'] + 0xfa * Math['random']() - 0x7d,
                                    'y': _0x5894c3['y'] + 0xfa * Math['random']() - 0x7d
                                }, _0xae24cb), Laya['timer']['once'](_0xae24cb + 0x32, _0x159d93, function () {
                                    Laya['Tween']['to'](_0x5894c3, {
                                        'x': _0x42e378['x'],
                                        'y': _0x42e378['y']
                                    }, 0x190, null, new Laya['Handler'](this, function () {
                                        window['isisis'] == ![] && (window['coinValue']['value'] = Laya['LocalStora' + 'ge']['getJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData')['coin'] += _0x33885f['endCoin'], window['isisis'] = !![]), _0x3786c9['removeChil' + 'd'](_0x5894c3), Laya['Pool']['recover']('coinAnim', _0x5894c3), 0x0 == --_0x5bc927 && _0x3c48f3 && _0x3c48f3(_0x3786c9);
                                    }));
                                });
                            };
                        for (var _0x5bc927 = _0x436624, _0x152a17 = 0x0; _0x152a17 < _0x436624; _0x152a17++) {
                            _0x464956();
                        }
                    }
                },
                {
                    'key': 'numberTo',
                    'value': function _0x1566fe(_0x35873c, _0x47f74d, _0x516d5b) {
                        return _0x35873c < _0x47f74d ? _0x35873c += _0x516d5b : _0x35873c > _0x47f74d && (_0x35873c -= _0x516d5b), Math['abs'](_0x47f74d - _0x35873c) < _0x516d5b && (_0x35873c = _0x47f74d), _0x35873c;
                    }
                },
                {
                    'key': 'findNodeBy' + 'Name',
                    'value': function _0xf5cf0b(_0xa389be, _0x13052c) {
                        var _0x784eef = null, _0x1b1632 = function _0x88b526(_0x1a0395) {
                                for (var _0x3396b8 = 0x0; _0x3396b8 < _0x1a0395['numChildre' + 'n']; _0x3396b8++) {
                                    if (_0x1a0395['getChildAt'](_0x3396b8)['name'] == _0x13052c)
                                        return void (_0x784eef = _0x1a0395['getChildAt'](_0x3396b8));
                                    _0x88b526(_0x1a0395['getChildAt'](_0x3396b8));
                                }
                            };
                        return _0x1b1632(_0xa389be), _0x784eef;
                    }
                },
                {
                    'key': 'loadJsonFi' + 'le',
                    'value': function _0x546956(_0x280e20, _0x5a122a) {
                        Laya['loader']['load'](_0x280e20, Laya['Handler']['create'](this, function (_0x5888dc) {
                            var _0x4c66d0 = Laya['loader']['getRes'](_0x280e20);
                            _0x5a122a(_0x4c66d0);
                        }), null, Laya['Loader']['JSON']);
                    }
                },
                {
                    'key': 'objectShak' + 'e',
                    'value': function _0x506020(_0x1532f3) {
                        var _0x41282a = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : 0x1, _0x7f3c4e = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0.7, _0x4c1382 = _0x41282a, _0x4af91e = 0x1, _0x2cd568 = _0x1532f3['transform']['localPosit' + 'ion']['clone']();
                        Laya['timer']['frameLoop'](0x1, this, function _0x3cbd6a() {
                            if (_0x4c1382 > 0x0) {
                                var _0x5323bb = new Laya['Vector3']();
                                Laya['Vector3']['scale']((_0x2fe926 = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), _0x344269 = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), new Laya['Vector3'](_0x2fe926, _0x344269, 0x0)), _0x7f3c4e, _0x5323bb), Laya['Vector3']['add'](_0x2cd568, _0x5323bb, _0x5323bb), _0x1532f3['transform']['localPosit' + 'ion'] = _0x5323bb, _0x4c1382 -= 0.02 * _0x4af91e;
                            } else
                                _0x4c1382 = 0x0, _0x1532f3['transform']['localPosit' + 'ion'] = _0x2cd568, Laya['timer']['clear'](this, _0x3cbd6a);
                            var _0x2fe926, _0x344269;
                        });
                    }
                },
                {
                    'key': 'objectScal' + 'eTips',
                    'value': function _0x193fe3(_0x106c77) {
                        var _0x1fbc5f = new _0x4ff7a0(), _0x3292de = _0x106c77['transform']['localScale']['clone'](), _0x32ab51 = _0x21f44c['Vector3Axi' + 's'](_0x3292de, 0.8), _0x1cbb55 = _0x21f44c['Vector3Axi' + 's'](_0x3292de, 1.2);
                        _0x1fbc5f['toTween'](_0x106c77, { 'sca': _0x32ab51 }, 0x32)['then']({ 'sca': _0x1cbb55 }, 0x32)['then']({ 'sca': _0x3292de }, 0x32);
                    }
                },
                {
                    'key': 'vibrateSho' + 'rt',
                    'value': function _0xb398e5() {
                        Laya['Browser']['onWeiXin'] && wx['vibrateSho' + 'rt']({
                            'success': function _0x642cfc() {
                            },
                            'fail': function _0x32bae7() {
                            },
                            'complete': function _0x34fb1b() {
                            }
                        });
                    }
                },
                {
                    'key': 'delayCall',
                    'value': function _0x484f88(_0x116b59, _0xcf3300) {
                        setTimeout(function () {
                            _0x116b59();
                        }, _0xcf3300);
                    }
                },
                {
                    'key': 'RotateWith' + 'Axis',
                    'value': function _0x5ac4cb(_0x2ff735, _0x9713ea, _0x5a18ac, _0x43ac40) {
                        var _0x480f0c = new Laya['Vector3'](), _0x4b8cdf = Laya['Vector3']['distance'](_0x2ff735, _0x9713ea), _0x45b01b = new Laya['Vector3']();
                        Laya['Vector3']['subtract'](_0x2ff735, _0x9713ea, _0x45b01b), Laya['Vector3']['normalize'](_0x45b01b, _0x45b01b);
                        var _0x315134 = new Laya['Quaternion']();
                        return Laya['Vector3']['normalize'](_0x5a18ac, _0x5a18ac), Laya['Quaternion']['createFrom' + 'AxisAngle'](_0x5a18ac, _0x43ac40 * Math['PI'] / 0xb4, _0x315134), Laya['Vector3']['transformQ' + 'uat'](_0x45b01b, _0x315134, _0x45b01b), Laya['Vector3']['scale'](_0x45b01b, _0x4b8cdf, _0x45b01b), Laya['Vector3']['add'](_0x9713ea, _0x45b01b, _0x480f0c), _0x480f0c;
                    }
                }
            ]), _0x21f44c;
        }(), _0x46fb76 = function (_0x48b5c6) {
            _inherits2(_0x9eede6, _0x48b5c6);
            var _0x1defa9 = _createSuper2(_0x9eede6);
            function _0x9eede6() {
                return _classCallCheck2(this, _0x9eede6), _0x1defa9['apply'](this, arguments);
            }
            return _createClass2(_0x9eede6, [{
                    'key': 'onUpdate',
                    'value': function _0x213290() {
                        _0xd81128['instance']['isStart'];
                    }
                }]), _0x9eede6;
        }(Laya['Script']), _0x2ad285 = function (_0x32df5f) {
            _inherits2(_0x18f471, _0x32df5f);
            var _0x24a707 = _createSuper2(_0x18f471);
            function _0x18f471() {
                var _0xbe504a;
                return _classCallCheck2(this, _0x18f471), (_0xbe504a = _0x24a707['apply'](this, arguments), _0xbe504a['calls'] = []), _0xbe504a;
            }
            return _createClass2(_0x18f471, [
                {
                    'key': 'onAwake',
                    'value': function _0x5617c7() {
                        this['init']();
                    }
                },
                {
                    'key': 'init',
                    'value': function _0x542118() {
                        Laya['timer']['frameLoop'](0x1, this, this['update']), Laya['stage']['on'](Event['KEY_DOWN'], this, this['onKeyDown']);
                    }
                },
                {
                    'key': 'update',
                    'value': function _0x47814f() {
                    }
                },
                {
                    'key': 'onKeyDown',
                    'value': function _0x26d072(_0x594ed7) {
                        console['log']('e', _0x594ed7['keyCode']);
                        var _0x59e383 = 'none';
                        switch (_0x594ed7['keyCode']) {
                        case 0x26:
                            _0x59e383 = 'up', ('none' != _0x59e383 && (this['calls']['length'] < 0x2 ? this['calls']['push'](_0x59e383) : _0xd81128['instance']['isCalling'] ? this['calls'][0x1] = _0x59e383 : (this['calls'][0x1] = this['calls'][0x0], this['calls'][0x0] = _0x59e383), _0xd81128['instance']['callUpdate']()), this['isDown'] = !0x1);
                            break;
                        case 0x28:
                            _0x59e383 = 'down', ('none' != _0x59e383 && (this['calls']['length'] < 0x2 ? this['calls']['push'](_0x59e383) : _0xd81128['instance']['isCalling'] ? this['calls'][0x1] = _0x59e383 : (this['calls'][0x1] = this['calls'][0x0], this['calls'][0x0] = _0x59e383), _0xd81128['instance']['callUpdate']()), this['isDown'] = !0x1);
                            break;
                        case 0x25:
                            _0x59e383 = 'left', ('none' != _0x59e383 && (this['calls']['length'] < 0x2 ? this['calls']['push'](_0x59e383) : _0xd81128['instance']['isCalling'] ? this['calls'][0x1] = _0x59e383 : (this['calls'][0x1] = this['calls'][0x0], this['calls'][0x0] = _0x59e383), _0xd81128['instance']['callUpdate']()), this['isDown'] = !0x1);
                            break;
                        case 0x27:
                            _0x59e383 = 'right', ('none' != _0x59e383 && (this['calls']['length'] < 0x2 ? this['calls']['push'](_0x59e383) : _0xd81128['instance']['isCalling'] ? this['calls'][0x1] = _0x59e383 : (this['calls'][0x1] = this['calls'][0x0], this['calls'][0x0] = _0x59e383), _0xd81128['instance']['callUpdate']()), this['isDown'] = !0x1);
                            break;
                        }
                    }
                },
                {
                    'key': 'onMouseDow' + 'n',
                    'value': function _0x2ee582(_0x248c78) {
                        var _0x65be94 = this;
                        this['touchTimer'] && clearTimeout(this['touchTimer']), this['isDown'] = !0x0, this['startPos'] = new Laya['Vector2'](_0x248c78['stageX'], _0x248c78['stageY']), this['nowPos'] = this['startPos'], this['touchTimer'] = setTimeout(function () {
                            _0x65be94['isDown'] = !0x1;
                        }, 0x3e8);
                    }
                },
                {
                    'key': 'onMouseMov' + 'e',
                    'value': function _0x41d873(_0x41a68f) {
                        this['isDown'] && (this['nowPos'] = new Laya['Vector2'](_0x41a68f['stageX'], _0x41a68f['stageY']), this['WayCheck']());
                    }
                },
                {
                    'key': 'onMouseUp',
                    'value': function _0x4bf4ff(_0x316a8e) {
                        this['isDown'] = !0x1;
                    }
                },
                {
                    'key': 'WayCheck',
                    'value': function _0x1589de() {
                        var _0x20b6bc = _0x5afa76['Vector2Red' + 'uce'](this['nowPos'], this['startPos']);
                        if (_0x5afa76['Vector2Sca' + 'le'](_0x20b6bc) > 0x1) {
                            var _0x5e540b = Math['atan2'](_0x20b6bc['y'], _0x20b6bc['x']) / Math['PI'] * 0xb4, _0x1de2a3 = 'none';
                            _0x5e540b > -0x87 && _0x5e540b < -0x2d ? _0x1de2a3 = 'up' : _0x5e540b > -0x2d && _0x5e540b < 0x2d ? _0x1de2a3 = 'right' : _0x5e540b < 0x87 && _0x5e540b > 0x2d ? _0x1de2a3 = 'down' : (_0x5e540b < -0x87 || _0x5e540b > 0x87) && (_0x1de2a3 = 'left'), 'none' != _0x1de2a3 && (this['calls']['length'] < 0x2 ? this['calls']['push'](_0x1de2a3) : _0xd81128['instance']['isCalling'] ? this['calls'][0x1] = _0x1de2a3 : (this['calls'][0x1] = this['calls'][0x0], this['calls'][0x0] = _0x1de2a3), _0xd81128['instance']['callUpdate']()), this['isDown'] = !0x1;
                        }
                        this['startPos'] = this['nowPos'];
                    }
                },
                {
                    'key': 'onDestroy',
                    'value': function _0x2f7aaa() {
                        this['touchTimer'] && clearTimeout(this['touchTimer']);
                    }
                }
            ]), _0x18f471;
        }(Laya['Script']);
    !function (_0x3f72d8) {
        _0x3f72d8['Idle'] = 'Idle', _0x3f72d8['Jump'] = 'Jump', _0x3f72d8['End'] = 'End', _0x3f72d8['Move'] = 'Move', _0x3f72d8['Dance'] = 'Dance';
    }(_0x1e40f9 || (_0x1e40f9 = {}));
    var _0x4f8bb7 = function () {
            function _0x4e054c() {
                _classCallCheck2(this, _0x4e054c);
            }
            return _createClass2(_0x4e054c, null, [
                {
                    'key': 'playAnim',
                    'value': function _0x1ed175(_0x5196f1) {
                        _0x33885f['anim']['getControl' + 'lerLayer'](0x0)['getCurrent' + 'PlayState']()['animatorSt' + 'ate']['name'] != _0x5196f1 && _0x33885f['anim']['play'](_0x5196f1, 0x0, 0x0);
                    }
                },
                {
                    'key': 'FadeIn',
                    'value': function _0x383d3b(_0x6d4bcb) {
                        _0x33885f['anim']['crossFade'](_0x6d4bcb, 0.2, 0x0, 0x0);
                    }
                }
            ]), _0x4e054c;
        }(), _0x4ae806 = function () {
            function _0x1db223() {
                _classCallCheck2(this, _0x1db223), (this['gridIdArr'] = [], this['gridAdArr'] = [], this['hadHide'] = !0x1, this['totalCount'] = 0x2, this['createInde' + 'x'] = 0x0);
            }
            return _createClass2(_0x1db223, [
                {
                    'key': 'sysInfo',
                    'get': function _0x11defd() {
                        return window['wx']['getSystemI' + 'nfoSync']();
                    }
                },
                {
                    'key': 'initCustom' + 'Ad',
                    'value': function _0x35096a() {
                        Laya['Browser']['onWeiXin'] && _0x3d1c55['instance']['dataConfig']['front_duil' + 'ian_gezi_s' + 'witch'] && (this['gridIdArr'] = _0x3d1c55['instance']['dataConfig']['front_duil' + 'ian_gezi_l' + 'ist'], this['gridIdArr'] && this['createCust' + 'omAd']());
                    }
                },
                {
                    'key': 'getCustomA' + 'd',
                    'value': function _0x3833e4(_0x21e2d7, _0x15800d) {
                        var _0x214c1a = this, _0x2be0c3 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : null, _0x37a615 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : null, _0x324991 = Laya['Browser']['window']['wx']['createCust' + 'omAd']({
                                'adUnitId': _0x21e2d7,
                                'adIntervals': _0x3d1c55['instance']['dataConfig']['front_more' + '_gezi_time'] / 0x3e8,
                                'style': _0x15800d
                            });
                        return _0x324991['onError'](function (_0x5b0863) {
                            console['log']('对联格子加载失败'), _0x37a615 && _0x37a615(), _0x324991['offError'](), _0x324991['offLoad']();
                        }), _0x324991['onLoad'](function () {
                            _0x214c1a['hadHide'] || _0x324991['show'](), _0x2be0c3 && _0x2be0c3(), _0x324991['offError'](), _0x324991['offLoad']();
                        }), _0x324991;
                    }
                },
                {
                    'key': 'createCust' + 'omAd',
                    'value': function _0x19cdfc() {
                        var _0x556ff3 = this;
                        if (this['createInde' + 'x'] >= this['gridIdArr']['length'] || this['gridAdArr']['length'] >= this['totalCount'])
                            return;
                        var _0x29ec9f = {
                                'left': 0x0 == this['gridAdArr']['length'] ? 0x0 : this['sysInfo']['screenWidt' + 'h'] - 0x41,
                                'top': 0x78
                            }, _0x365b8b = this['getCustomA' + 'd'](this['gridIdArr'][this['createInde' + 'x']], _0x29ec9f, function () {
                                _0x556ff3['gridAdArr']['push'](_0x365b8b), _0x556ff3['createInde' + 'x']++, _0x556ff3['createCust' + 'omAd']();
                            }, function () {
                                _0x556ff3['createInde' + 'x']++, _0x556ff3['createCust' + 'omAd']();
                            });
                    }
                },
                {
                    'key': 'showGrid',
                    'value': function _0x45f2d4() {
                        if (Laya['Browser']['onWeiXin'] && this['gridAdArr']['length'] > 0x0)
                            for (var _0x395c63 = 0x0; _0x395c63 < this['gridAdArr']['length']; _0x395c63++) {
                                this['gridAdArr'][_0x395c63]['show']();
                            }
                    }
                },
                {
                    'key': 'hideGrid',
                    'value': function _0x10fabb() {
                        if (this['hadHide'] = !0x0, Laya['Browser']['onWeiXin'] && this['gridAdArr']['length'] > 0x0)
                            for (var _0x2dcaa9 = 0x0; _0x2dcaa9 < this['gridAdArr']['length']; _0x2dcaa9++) {
                                this['gridAdArr'][_0x2dcaa9]['hide']();
                            }
                    }
                },
                {
                    'key': 'getIsError',
                    'value': function _0x4b3f6c() {
                        return this['gridAdArr']['length'] <= 0x0;
                    }
                }
            ], [{
                    'key': 'instance',
                    'get': function _0x3a6795() {
                        return this['_instance'] || (this['_instance'] = new _0x1db223()), this['_instance'];
                    }
                }]), _0x1db223;
        }(), _0x54e87a = function () {
            function _0x3cff66() {
                _classCallCheck2(this, _0x3cff66), (this['gridIdArr'] = [], this['gridAdArr'] = [], this['totalCount'] = 0x1, this['createInde' + 'x'] = 0x0);
            }
            return _createClass2(_0x3cff66, [
                {
                    'key': 'sysInfo',
                    'get': function _0x5859b5() {
                        return window['wx']['getSystemI' + 'nfoSync']();
                    }
                },
                {
                    'key': 'initCustom' + 'Ad',
                    'value': function _0x45dc29() {
                        Laya['Browser']['onWeiXin'] && (this['gridIdArr'] = ['adunit-a14' + '7c2689fcd6' + '181'], this['createCust' + 'omAd']());
                    }
                },
                {
                    'key': 'getCustomA' + 'd',
                    'value': function _0x3da501(_0x147b5f, _0x2bd772) {
                        var _0x45ad29 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : null, _0x2a9b18 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : null, _0xfe5ff = Laya['Browser']['window']['wx']['createCust' + 'omAd']({
                                'adUnitId': _0x147b5f,
                                'adIntervals': _0x3d1c55['instance']['dataConfig']['front_more' + '_gezi_time'] / 0x3e8,
                                'style': _0x2bd772
                            });
                        return _0xfe5ff['onError'](function (_0x39586d) {
                            console['log']('结算格子加载失败'), _0x2a9b18 && _0x2a9b18(), _0xfe5ff['offError'](), _0xfe5ff['offLoad']();
                        }), _0xfe5ff['onLoad'](function () {
                            _0x45ad29 && _0x45ad29(), _0xfe5ff['offError'](), _0xfe5ff['offLoad']();
                        }), _0xfe5ff;
                    }
                },
                {
                    'key': 'createCust' + 'omAd',
                    'value': function _0x98fa65() {
                        var _0x51083c = this;
                        if (this['createInde' + 'x'] >= this['gridIdArr']['length'] || this['gridAdArr']['length'] >= this['totalCount'])
                            return;
                        var _0x1cdd6e = {
                                'left': 0x0,
                                'top': this['sysInfo']['screenHeig' + 'ht'] / 0x2 - 0xdc,
                                'width': this['sysInfo']['screenWidt' + 'h']
                            }, _0x331796 = this['getCustomA' + 'd'](this['gridIdArr'][this['createInde' + 'x']], _0x1cdd6e, function () {
                                _0x51083c['gridAdArr']['push'](_0x331796), _0x51083c['createInde' + 'x']++, _0x51083c['createCust' + 'omAd']();
                            }, function () {
                                _0x51083c['createInde' + 'x']++, _0x51083c['createCust' + 'omAd']();
                            });
                    }
                },
                {
                    'key': 'showGrid',
                    'value': function _0x1ee5a7() {
                        Laya['Browser']['onWeiXin'] && this['gridAdArr']['length'] > 0x0 && this['gridAdArr'][0x0]['show']();
                    }
                },
                {
                    'key': 'hideGrid',
                    'value': function _0x2db696() {
                        Laya['Browser']['onWeiXin'] && this['gridAdArr']['length'] > 0x0 && this['gridAdArr'][0x0]['hide']();
                    }
                },
                {
                    'key': 'getIsError',
                    'value': function _0x52fe01() {
                        return this['gridAdArr']['length'] <= 0x0;
                    }
                }
            ], [{
                    'key': 'instance',
                    'get': function _0x2f8040() {
                        return this['_instance'] || (this['_instance'] = new _0x3cff66()), this['_instance'];
                    }
                }]), _0x3cff66;
        }(), _0x4432e8 = function () {
            function _0x3db945() {
                _classCallCheck2(this, _0x3db945), (this['bannerAdAr' + 'r'] = [], this['bannerTime' + 'Arr'] = [], this['bannerErro' + 'rArr'] = [], this['bannerCoun' + 'tArr'] = [], this['currentInd' + 'ex'] = 0x0, this['indexTime'] = 0x0);
            }
            return _createClass2(_0x3db945, [
                {
                    'key': 'sysInfo',
                    'get': function _0x263adf() {
                        return this['_sysInfo'] || (this['_sysInfo'] = wx['getSystemI' + 'nfoSync']()), this['_sysInfo'];
                    }
                },
                {
                    'key': 'initAd',
                    'value': function _0x7ed181() {
                        var _0x4e8b92 = arguments['length'] > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : [];
                        this['bannerIds'] = [], this['bannerIds'] = this['bannerIds']['concat'](_0x4e8b92), this['showBanner'] = this['showBanner' + 'Fun'], this['hideBanner'] = this['hideBanner' + 'Fun'], this['createBann' + 'erAd']();
                    }
                },
                {
                    'key': 'createBann' + 'erAd',
                    'value': function _0x7f7c4b() {
                        if (Laya['Browser']['onWeiXin']) {
                            this['bannerAdAr' + 'r'] = [], this['bannerTime' + 'Arr'] = [], this['bannerErro' + 'rArr'] = [], this['currentInd' + 'ex'] = 0x0;
                            for (var _0x56d700 = 0x0; _0x56d700 < this['bannerIds']['length']; _0x56d700++) {
                                this['bannerErro' + 'rArr']['push'](!0x1), this['bannerTime' + 'Arr']['push'](0x0), this['bannerCoun' + 'tArr']['push'](0x0);
                                var _0x15c75a = this['getBannerA' + 'd'](_0x56d700);
                                this['bannerAdAr' + 'r']['push'](_0x15c75a);
                            }
                        }
                    }
                },
                {
                    'key': 'getBannerA' + 'd',
                    'value': function _0x1f003a(_0x1383d4) {
                        var _0x179637 = this, _0xffab8f = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : !0x1, _0x54ebe2 = Laya['Browser']['window']['wx']['createBann' + 'erAd']({
                                'adUnitId': _0xffab8f ? _0x3d1c55['instance']['getRandomI' + 'temInArr'](this['bannerIds']) : this['bannerIds'][_0x1383d4],
                                'style': {
                                    'top': 0.8 * this['sysInfo']['screenHeig' + 'ht'],
                                    'width': 0xa,
                                    'left': this['sysInfo']['screenWidt' + 'h'] / 0x2 - 0x96
                                }
                            });
                        return _0x54ebe2['onError'](function () {
                            console['log']('banner加载失败' + '：', _0x1383d4), _0x179637['bannerErro' + 'rArr'][_0x1383d4] = !0x0;
                        }), _0x54ebe2['onLoad'](function () {
                            _0x179637['bannerErro' + 'rArr'][_0x1383d4] = !0x1;
                        }), _0x54ebe2['onResize'](function () {
                        }), _0x54ebe2;
                    }
                },
                {
                    'key': 'getIsAllEr' + 'ror',
                    'value': function _0x25b7c6() {
                        var _0x1d4617 = !0x0;
                        for (var _0x1ff305 = 0x0; _0x1ff305 < this['bannerErro' + 'rArr']['length']; _0x1ff305++) {
                            if (!this['bannerErro' + 'rArr'][_0x1ff305]) {
                                _0x1d4617 = !0x1;
                                break;
                            }
                        }
                        return _0x1d4617;
                    }
                },
                {
                    'key': 'showBanner' + 'Fun',
                    'value': function _0x2ca04c() {
                        if (!Laya['Browser']['onWeiXin'])
                            return !0x1;
                        this['currentInd' + 'ex'] >= this['bannerAdAr' + 'r']['length'] && (this['currentInd' + 'ex'] = 0x0), this['bannerCoun' + 'tArr'][this['currentInd' + 'ex']] >= _0x3d1c55['instance']['dataConfig']['front_bann' + 'er_refresh' + '_num'] && (this['bannerCoun' + 'tArr'][this['currentInd' + 'ex']] = 0x0, this['currentInd' + 'ex']++, console['log']('切换id:', this['currentInd' + 'ex']), this['currentInd' + 'ex'] >= this['bannerAdAr' + 'r']['length'] && (this['currentInd' + 'ex'] = 0x0));
                        var _0xcbe13a = !0x1;
                        for (var _0x491d58 = 0x0; _0x491d58 < this['bannerErro' + 'rArr']['length']; _0x491d58++) {
                            if (0x0 == this['bannerErro' + 'rArr'][_0x491d58]) {
                                _0xcbe13a = !0x0;
                                break;
                            }
                        }
                        return _0xcbe13a ? (this['bannerErro' + 'rArr'][this['currentInd' + 'ex']] && (this['currentInd' + 'ex']++, this['currentInd' + 'ex'] >= this['bannerAdAr' + 'r']['length'] && (this['currentInd' + 'ex'] = 0x0)), this['hideBanner' + 'Fun'](), this['bannerAdAr' + 'r'][this['currentInd' + 'ex']]['show'](), this['bannerCoun' + 'tArr'][this['currentInd' + 'ex']]++, Laya['timer']['clear'](this, this['updateBann' + 'erTime']), Laya['timer']['loop'](0x64, this, this['updateBann' + 'erTime']), !0x0) : (Laya['timer']['clear'](this, this['updateBann' + 'erTime']), this['createBann' + 'erAd'](), !0x1);
                    }
                },
                {
                    'key': 'hideBanner' + 'Fun',
                    'value': function _0x38cd81() {
                        if (Laya['Browser']['onWeiXin']) {
                            Laya['timer']['clear'](this, this['updateBann' + 'erTime']);
                            for (var _0x4969a7 = 0x0; _0x4969a7 < this['bannerAdAr' + 'r']['length']; _0x4969a7++) {
                                this['bannerAdAr' + 'r'][_0x4969a7] && this['bannerAdAr' + 'r'][_0x4969a7]['hide']();
                            }
                        }
                    }
                },
                {
                    'key': 'checkBanne' + 'rTimeOut',
                    'value': function _0x563c4a() {
                        Laya['Browser']['onWeiXin'] && this['bannerTime' + 'Arr'][this['currentInd' + 'ex']] >= _0x3d1c55['instance']['dataConfig']['front_bann' + 'er_refresh' + '_time'] / 0x3e8 && (Laya['timer']['clear'](this, this['updateBann' + 'erTime']), this['hideBanner' + 'Fun'](), this['bannerAdAr' + 'r'][this['currentInd' + 'ex']]['destroy'](), this['bannerTime' + 'Arr'][this['currentInd' + 'ex']] = 0x0, this['bannerErro' + 'rArr'][this['currentInd' + 'ex']] = !0x0, this['bannerAdAr' + 'r'][this['currentInd' + 'ex']] = this['getBannerA' + 'd'](this['currentInd' + 'ex']), this['bannerAdAr' + 'r'][this['currentInd' + 'ex']]['show'](), Laya['timer']['loop'](0x64, this, this['updateBann' + 'erTime']));
                    }
                },
                {
                    'key': 'updateBann' + 'erTime',
                    'value': function _0x3bd8c6() {
                        this['bannerTime' + 'Arr'][this['currentInd' + 'ex']] += 0.1, this['checkBanne' + 'rTimeOut']();
                    }
                },
                {
                    'key': 'countIndex' + 'Time',
                    'value': function _0x2aabf1() {
                        Laya['timer']['loop'](0x64, this, this['updateInde' + 'xTime']);
                    }
                },
                {
                    'key': 'updateInde' + 'xTime',
                    'value': function _0x649f0d() {
                        var _0x424e29 = this;
                        _0x424e29['indexTime'] += 0.1, _0x424e29['indexTime'] >= _0x3d1c55['instance']['dataConfig']['front_assi' + 'gn_banner_' + 'time'] / 0x3e8 && (_0x424e29['hideBanner' + 'Fun'](), _0x424e29['currentInd' + 'ex']++, _0x424e29['showBanner' + 'Fun'](), _0x424e29['indexTime'] = 0x0);
                    }
                },
                {
                    'key': 'stopCountI' + 'ndexTime',
                    'value': function _0xd36de() {
                        Laya['timer']['clear'](this, this['updateInde' + 'xTime']);
                    }
                },
                {
                    'key': 'showHideBa' + 'nner',
                    'value': function _0x61cad2() {
                        Laya['timer']['once'](_0x3d1c55['instance']['dataConfig']['front_gezi' + '_time'], this, this['showHideBa' + 'nnerShow']);
                    }
                },
                {
                    'key': 'showHideBa' + 'nnerShow',
                    'value': function _0x52aa9b() {
                        this['showBanner' + 'Fun'](), Laya['timer']['once'](0x3e8, this, this['showHideBa' + 'nnerHide']);
                    }
                },
                {
                    'key': 'showHideBa' + 'nnerHide',
                    'value': function _0x12eabe() {
                        this['hideBanner' + 'Fun'](), Laya['timer']['once'](_0x3d1c55['instance']['dataConfig']['front_gezi' + '_time'], this, this['showHideBa' + 'nnerShow']);
                    }
                },
                {
                    'key': 'showBanner',
                    'value': function _0x5787a4() {
                    }
                },
                {
                    'key': 'hideBanner',
                    'value': function _0x1f6f9b() {
                    }
                },
                {
                    'key': 'clearShowH' + 'ideBanner',
                    'value': function _0x3b9917() {
                        Laya['timer']['clear'](this, this['showHideBa' + 'nnerHide']), Laya['timer']['clear'](this, this['showHideBa' + 'nnerShow']), this['hideBanner' + 'Fun']();
                    }
                }
            ], [{
                    'key': 'Instance',
                    'get': function _0x217c1e() {
                        return _0x3db945['_instance'] || (_0x3db945['_instance'] = new _0x3db945()), _0x3db945['_instance'];
                    }
                }]), _0x3db945;
        }(), _0x57ad8e = function () {
            function _0x4f9766() {
                _classCallCheck2(this, _0x4f9766), this['videoIsErr' + 'or'] = !0x1;
            }
            return _createClass2(_0x4f9766, [
                {
                    'key': 'bannerLoad' + 'Error',
                    'get': function _0x33d86c() {
                        return _0x4432e8['Instance']['getIsAllEr' + 'ror']();
                    },
                    'set': function _0xcf9dc2(_0x5c0ceb) {
                    }
                },
                {
                    'key': 'init',
                    'value': function _0x81c6fc() {
                        Laya['Browser']['onWeiXin'] && (this['sysInfo'] = wx['getSystemI' + 'nfoSync'](), this['videoId'] = 'adunit-aef' + '080ac63693' + '7dd', this['interId'] = 'adunit-049' + 'bcf28b4cb1' + '527', this['gridId'] = [
                            'adunit-86d' + '937ab3bfd0' + '672',
                            'adunit-307' + '6e12edb94d' + '00f'
                        ]);
                    }
                },
                {
                    'key': 'loadVideoA' + 'd',
                    'value': function _0x502f97() {
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x174ade, _0x30042a = this;
                            null != (_0x174ade = this['videoAd']) && (_0x174ade['offLoad'](_0x19ad90), _0x174ade['offError'](_0x2fd6dd), _0x174ade['offClose'](_0x21896e)), (_0x174ade = Laya['Browser']['window']['wx']['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x30042a['videoId'] }))['onLoad'](_0x19ad90), _0x174ade['onError'](_0x2fd6dd), _0x174ade['onClose'](_0x21896e), this['videoAd'] = _0x174ade;
                        }
                        function _0x19ad90() {
                            console['log']('video\x20加载成功'), _0x30042a['existVideo' + 'Ad'] = !0x0;
                        }
                        function _0x2fd6dd(_0x3f67bf) {
                            this['videoIsErr' + 'or'] = !0x0, console['error']('video\x20加载错误', _0x3f67bf);
                        }
                        function _0x21896e(_0x2b7163) {
                            var _0x104cb4 = !!(_0x2b7163 && _0x2b7163['isEnded'] || void 0x0 === _0x2b7163);
                            _0x104cb4 && (_0x30042a['videoEndCa' + 'llback'] && _0x30042a['videoEndCa' + 'llback'](), _0x30042a['videoEndCa' + 'llback'] = null), _0x30042a['videoClose' + 'Callback'] && _0x30042a['videoClose' + 'Callback'](_0x104cb4), _0x30042a['videoClose' + 'Callback'] = null, _0x174ade['load']();
                        }
                    }
                },
                {
                    'key': 'showVideoA' + 'd',
                    'value': function _0x3d9f07(_0x28ca5d, _0x4dd184) {
                        var _0x10ae56 = this, _0x182760 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : !0x1;
                        if (!Laya['Browser']['onWeiXin'])
                            return _0x28ca5d && _0x28ca5d(), void (_0x4dd184 && _0x4dd184());
                        if (this['videoEndCa' + 'llback'] = _0x28ca5d, this['videoClose' + 'Callback'] = _0x4dd184, this['existVideo' + 'Ad'] || this['loadVideoA' + 'd'](), !_0x182760) {
                            if (Laya['Browser']['onWeiXin']) {
                                var _0x5ac2e4 = this['videoAd'];
                                _0x5ac2e4['show']()['then'](function () {
                                })['catch'](function (_0x138302) {
                                    _0x5ac2e4['load']()['then'](function () {
                                        return _0x5ac2e4['show']()['then'](function () {
                                        });
                                    })['catch'](function (_0x479c27) {
                                        _0x10ae56['videoEndCa' + 'llback'] && _0x10ae56['videoEndCa' + 'llback'](), _0x10ae56['videoEndCa' + 'llback'] = null, _0x10ae56['videoClose' + 'Callback'] && _0x10ae56['videoClose' + 'Callback'](!0x0), _0x10ae56['videoClose' + 'Callback'] = null;
                                    });
                                });
                            } else
                                this['videoEndCa' + 'llback'] && this['videoEndCa' + 'llback'](), this['videoEndCa' + 'llback'] = null, this['videoClose' + 'Callback'] && this['videoClose' + 'Callback'](!0x0), this['videoClose' + 'Callback'] = null;
                        }
                    }
                },
                {
                    'key': 'createInte' + 'rAd',
                    'value': function _0x17d844() {
                        var _0x384598 = this;
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x3587c0 = this;
                            this['interAd'] = wx['createInte' + 'rstitialAd']({ 'adUnitId': _0x3587c0['interId'] }), this['interAd']['onLoad'](function () {
                                console['log']('插屏广告加载成功');
                            }), this['interAd']['onError'](function (_0x4e55db) {
                                console['error']('插屏广告加载失败'), _0x384598['interAd'] = null;
                            });
                        }
                    }
                },
                {
                    'key': 'showInterA' + 'd',
                    'value': function _0x27a1cf() {
                        this['interAd'] && this['interAd']['show']();
                    }
                },
                {
                    'key': 'createGame' + 'CustomAd',
                    'value': function _0x2116d9() {
                        if (Laya['Browser']['onWeiXin'] && !this['gameGridAd'] && _0x3d1c55['instance']['dataConfig']['front_dang' + 'ezi_switch']) {
                            this['gameGridAd'] = [];
                            for (var _0x4968b9 = 0x0; _0x4968b9 < 0x2; _0x4968b9++) {
                                var _0x4f600a = this['getGridPos'](_0x4968b9, 0x50 * (Math['floor'](_0x4968b9 / 0x2) + 0x1)), _0x433b55 = wx['createCust' + 'omAd']({
                                        'adUnitId': this['gridId'][_0x4968b9],
                                        'adIntervals': 0x1e,
                                        'style': _0x4f600a
                                    });
                                this['gameGridAd']['push'](_0x433b55), _0x433b55['onLoad'](function () {
                                });
                            }
                        }
                    }
                },
                {
                    'key': 'hideGameCu' + 'stomAd',
                    'value': function _0x9e60b4() {
                        if (Laya['Browser']['onWeiXin'] && this['gameGridAd'])
                            for (var _0x292e0a = 0x0; _0x292e0a < 0x2; _0x292e0a++) {
                                this['gameGridAd'][_0x292e0a]['hide']();
                            }
                    }
                },
                {
                    'key': 'showGameCu' + 'stomAd',
                    'value': function _0x4093fd() {
                        if (Laya['Browser']['onWeiXin'] && this['gameGridAd'])
                            for (var _0xc236cb = 0x0; _0xc236cb < 0x2; _0xc236cb++) {
                                this['gameGridAd'][_0xc236cb]['show']();
                            }
                    }
                },
                {
                    'key': 'getGridPos',
                    'value': function _0x508d45(_0x475275) {
                        var _0x6bdb84 = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : 0x78, _0x4c3083 = {
                                'width': 0x14,
                                'height': 0x14
                            };
                        return _0x475275 % 0x2 == 0x0 ? (_0x4c3083['left'] = 0x14, _0x4c3083['top'] = _0x6bdb84) : (_0x4c3083['left'] = this['sysInfo']['windowWidt' + 'h'] - 0x5a, _0x4c3083['top'] = _0x6bdb84), _0x4c3083;
                    }
                }
            ], [{
                    'key': 'Instance',
                    'get': function _0x482536() {
                        return _0x4f9766['_instance'] || (_0x4f9766['_instance'] = new _0x4f9766()), _0x4f9766['_instance'];
                    }
                }]), _0x4f9766;
        }();
    !function (_0x4e6210) {
        _0x4e6210['SCENE_RECO' + 'MMENDUI'] = 'JJExport/R' + 'ecommendUI' + '.scene', _0x4e6210['SCENE_FULL' + 'GAMEUI'] = 'JJExport/F' + 'ullGameUI.' + 'scene', _0x4e6210['SCENE_FINI' + 'SHGAMEUI'] = 'JJExport/F' + 'inishGameU' + 'I.scene', _0x4e6210['SCENE_FINI' + 'SH2GAMEUI'] = 'JJExport/F' + 'inish2Game' + 'UI.scene', _0x4e6210['SCENE_BOX1'] = 'JJExport/B' + 'ox1.scene', _0x4e6210['SCENE_BOX2'] = 'JJExport/B' + 'ox2.scene', _0x4e6210['SCENE_BOX3'] = 'JJExport/B' + 'ox3.scene';
    }(_0x4f5248 || (_0x4f5248 = {})), function (_0x13ea35) {
        _0x13ea35['PORTRAIT'] = 'portrait', _0x13ea35['LANDSCAPE'] = 'landscape';
    }(_0x3cd92e || (_0x3cd92e = {}));
    var _0x3d1c55 = function () {
            function _0x113e4a() {
                _classCallCheck2(this, _0x113e4a), (this['screenOrie' + 'ntation'] = _0x3cd92e['PORTRAIT'], this['eventDispa' + 'tcher'] = new Laya['EventDispa' + 'tcher'](), this['navDataArr'] = [], this['closeCBSce' + 'nes'] = [], this['dataConfig'] = {});
            }
            return _createClass2(_0x113e4a, [
                {
                    'key': 'shareCount',
                    'get': function _0x1e4bd1() {
                        return this['dataConfig']['front_shar' + 'e_number'];
                    },
                    'set': function _0x56560d(_0x316cad) {
                        this['dataConfig']['front_shar' + 'e_number'] = _0x316cad;
                    }
                },
                {
                    'key': 'shareConte' + 'xt',
                    'get': function _0x2356c6() {
                        return this['shareConfi' + 'g'];
                    },
                    'set': function _0x4fcd1d(_0x4f5f27) {
                        this['shareConfi' + 'g'] = _0x4f5f27;
                    }
                },
                {
                    'key': 'initJJ',
                    'value': function _0x3fab39(_0xbda5ce) {
                        var _0xd9c9ac = this;
                        _0xbda5ce && _0xbda5ce(!0x0);
                    }
                },
                {
                    'key': 'openScene',
                    'value': function _0xd57116(_0x3a1c37) {
                        var _0x28c666 = this, _0x51d51b = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : !0x1, _0x31b3f5 = arguments['length'] > 0x2 ? arguments[0x2] : undefined, _0x3af2a3 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : function () {
                            }, _0x2b1de2 = arguments['length'] > 0x4 ? arguments[0x4] : undefined, _0x4d5c56 = arguments['length'] > 0x5 ? arguments[0x5] : undefined;
                        Laya['Scene']['open'](_0x3a1c37, _0x51d51b, _0x31b3f5, Laya['Handler']['create'](this, function (_0x2b221d) {
                            _0x2b1de2 ? _0x2b1de2['addChild'](_0x2b221d) : Laya['stage']['addChild'](_0x2b221d), _0x4d5c56 && _0x4d5c56(), _0x3af2a3 && _0x28c666['closeCBSce' + 'nes']['push']({
                                'scene': _0x2b221d,
                                'closeCB': _0x3af2a3
                            });
                        }));
                    }
                },
                {
                    'key': 'closeScene',
                    'value': function _0x2be263(_0x2bbdbe) {
                        if (_0x2bbdbe instanceof Laya['Scene']) {
                            Laya['Scene']['close'](_0x2bbdbe['url']);
                            var _0x34edb2 = this['closeCBSce' + 'nes']['filter'](function (_0x754cf3) {
                                return _0x754cf3['scene'] === _0x2bbdbe;
                            });
                            if (_0x34edb2 && _0x34edb2['length'] > 0x0) {
                                var _0x334c7d = _0x34edb2[0x0];
                                _0x334c7d['closeCB'](), this['closeCBSce' + 'nes']['splice'](this['closeCBSce' + 'nes']['indexOf'](_0x334c7d), 0x1);
                            }
                        } else
                            Laya['Scene']['close'](_0x2bbdbe);
                    }
                },
                {
                    'key': 'NavigateAp' + 'p',
                    'value': function _0x469c2e(_0x56ed30, _0x4cf559, _0x1b55a6) {
                        if (0x0 != this['navDataArr']['length']) {
                            if (console['log']('跳转', this['navDataArr'][_0x56ed30]['appid']), Laya['Browser']['onWeiXin']) {
                                var _0x4ae4d = this;
                                wx['JJNavigate' + 'ToMiniProg' + 'ram'](function () {
                                    return {
                                        'appId': _0x4ae4d['navDataArr'][_0x56ed30]['appid'],
                                        'path': _0x4ae4d['navDataArr'][_0x56ed30]['path'],
                                        'id': _0x4ae4d['navDataArr'][_0x56ed30]['id']
                                    };
                                })['then'](function (_0x531d8e) {
                                    console['log']('success'), _0x1b55a6 && _0x1b55a6(_0x531d8e);
                                }, function (_0xa65e76) {
                                    console['log']('fail', _0xa65e76), -0x1 != _0xa65e76['errMsg']['indexOf']('cancel') ? _0x4cf559 && _0x4cf559(!0x0) : _0x4cf559 && _0x4cf559(!0x1);
                                });
                            } else
                                _0x4cf559 && _0x4cf559(!0x1);
                        }
                    }
                },
                {
                    'key': 'getTitle',
                    'value': function _0x488b53(_0x305565) {
                        var _0x1bfa1c = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : !0x0;
                        return null == _0x305565 ? '\x20' : _0x1bfa1c && _0x305565['subtitle'] && '' != _0x305565['subtitle'] ? _0x305565['subtitle'] : _0x305565['title'];
                    }
                },
                {
                    'key': 'updateData' + 'Config',
                    'value': function _0x4492a0(_0x346c2f) {
                        var _0x564d62 = _0x346c2f['data'];
                        this['dataConfig']['is_allow_a' + 'rea'] = _0x346c2f['is_allow_a' + 'rea'], this['dataConfig']['is_allow_e' + 'xport'] = _0x346c2f['is_allow_e' + 'xport'], this['dataConfig']['front_wuch' + 'u_scene'] = _0x346c2f['front_wuch' + 'u_scene'];
                        for (var _0x349898 in _0x564d62) {
                            this['dataConfig'][_0x349898] = _0x564d62[_0x349898]['config_val'];
                        }
                        console['log'](this['dataConfig']);
                    }
                },
                {
                    'key': 'updateNavD' + 'ata',
                    'value': function _0x21aaf8(_0x19c83f) {
                        this['navDataArr'] = [];
                        for (var _0x196b97 = 0x0; _0x196b97 < _0x19c83f['length']; _0x196b97++) {
                            var _0x113a1c = _0x19c83f[_0x196b97], _0x42732c = new _0x56f491();
                            _0x42732c['appid'] = _0x113a1c['channel_ga' + 'me_appid'], _0x42732c['title'] = _0x113a1c['channel_ga' + 'me_name'], _0x42732c['path'] = _0x113a1c['path'], _0x42732c['subtitle'] = _0x113a1c['originalit' + 'y']['copywritin' + 'g'], _0x42732c['icon'] = _0x113a1c['originalit' + 'y']['material'], _0x42732c['id'] = _0x113a1c['originalit' + 'y']['id'], this['navDataArr']['push'](_0x42732c);
                        }
                    }
                },
                {
                    'key': 'allowScene',
                    'get': function _0x41292b() {
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x52c60b = wx['getLaunchO' + 'ptionsSync']();
                            console['log']('当前场景：', _0x52c60b['scene']);
                            var _0x114022 = !0x0, _0x202d95 = _0x113e4a['instance']['dataConfig']['front_wuch' + 'u_scene'];
                            (null == _0x202d95 && (_0x114022 = !0x0), -0x1 == _0x202d95['search']('|')) && (_0x114022 = parseInt(_0x202d95) != _0x52c60b['scene']);
                            var _0x5d1e97 = _0x202d95['split']('|');
                            for (var _0x5e34a4 = 0x0; _0x5e34a4 < _0x5d1e97['length']; _0x5e34a4++) {
                                parseInt(_0x5d1e97[_0x5e34a4]) == _0x52c60b['scene'] && (_0x114022 = !0x1);
                            }
                            return _0x114022;
                        }
                        return !0x0;
                    }
                },
                {
                    'key': 'shuffleArr',
                    'value': function _0x1ca962(_0x3c6fa6) {
                        var _0x4bf223 = _0x3c6fa6['length'];
                        for (; _0x4bf223;) {
                            var _0x1f9fd7 = Math['floor'](Math['random']() * _0x4bf223--), _0x442fea = [
                                    _0x3c6fa6[_0x4bf223],
                                    _0x3c6fa6[_0x1f9fd7]
                                ];
                            _0x3c6fa6[_0x1f9fd7] = _0x442fea[0x0], _0x3c6fa6[_0x4bf223] = _0x442fea[0x1];
                        }
                        return _0x3c6fa6;
                    }
                },
                {
                    'key': 'addClickEv' + 'ent',
                    'value': function _0x4566e8(_0x3f6342, _0x306841, _0x4adc9c, _0x4e815d, _0x4e1e66) {
                        if (_0x3f6342['offAllCall' + 'er'](_0x306841), _0x3f6342 instanceof Laya['Button'] && !_0x4e1e66) {
                            var _0x596d91 = function _0x36e790(_0x7b4633) {
                                _0x4adc9c && _0x4adc9c['call'](_0x306841, _0x7b4633);
                            };
                            _0x3f6342['on'](Laya['Event']['CLICK'], _0x306841, _0x596d91, [_0x4e815d]);
                        } else {
                            var _0x40690b = 0x3c, _0x4f8e1c = _0x3f6342['scaleX'], _0xaa1f52 = _0x3f6342['scaleY'], _0x534a85 = 0.9, _0x17c204 = !0x1, _0xebb8e6 = function _0x16276b(_0x315166) {
                                    _0x17c204 = !0x0, Laya['Tween']['to'](_0x3f6342, {
                                        'scaleX': _0x534a85,
                                        'scaleY': _0x534a85
                                    }, _0x40690b);
                                };
                            _0x3f6342['on'](Laya['Event']['MOUSE_DOWN'], _0x306841, _0xebb8e6, [_0x4e815d]);
                            var _0x75b902 = function _0x3aaedc(_0x24c8f1) {
                                0x0 != _0x17c204 && (_0x17c204 = !0x1, Laya['Tween']['to'](_0x3f6342, {
                                    'scaleX': _0x4f8e1c,
                                    'scaleY': _0xaa1f52
                                }, _0x40690b), _0x4adc9c && _0x4adc9c['call'](_0x306841, _0x24c8f1));
                            };
                            _0x3f6342['on'](Laya['Event']['MOUSE_UP'], _0x306841, _0x75b902, [_0x4e815d]);
                            var _0x378893 = function _0x11e029(_0x3ebb10) {
                                Laya['Tween']['to'](_0x3f6342, {
                                    'scaleX': _0x4f8e1c,
                                    'scaleY': _0xaa1f52
                                }, _0x40690b);
                            };
                            _0x3f6342['on'](Laya['Event']['MOUSE_OUT'], _0x306841, _0x378893, [_0x4e815d]);
                        }
                    }
                },
                {
                    'key': 'toRotaion',
                    'value': function _0x45ce67(_0xf1cac7, _0x2a7f5e, _0x3e6d05) {
                        var _0x79c573 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : !0x1, _0x3899a9 = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : !0x1, _0x185280 = arguments['length'] > 0x5 ? arguments[0x5] : undefined;
                        if (_0xf1cac7 && !_0xf1cac7['destroyed']) {
                            var _0x619fd4 = _0xf1cac7['rotation'];
                            !function () {
                                if (_0x79c573)
                                    var _0x35b3bd = new Laya['Handler'](this, _0x29ce78);
                                else {
                                    if (_0x3899a9)
                                        var _0x35b3bd = new Laya['Handler'](this, _0x2afafb);
                                }
                                Laya['Tween']['to'](_0xf1cac7, { 'rotation': _0x2a7f5e }, _0x3e6d05, null, _0x35b3bd);
                            }();
                        }
                        function _0x29ce78() {
                            _0xf1cac7 && !_0xf1cac7['destroyed'] && Laya['Tween']['to'](_0xf1cac7, { 'rotation': -_0x2a7f5e }, 0x2 * _0x3e6d05, null, Laya['Handler']['create'](this, _0x4828db));
                        }
                        function _0x4828db() {
                            _0xf1cac7 && !_0xf1cac7['destroyed'] && Laya['Tween']['to'](_0xf1cac7, { 'rotation': _0x2a7f5e }, 0x2 * _0x3e6d05, null, Laya['Handler']['create'](this, _0x29ce78));
                        }
                        function _0x2afafb() {
                            _0xf1cac7 && !_0xf1cac7['destroyed'] && Laya['Tween']['to'](_0xf1cac7, { 'rotation': _0x619fd4 }, _0x3e6d05, null, Laya['Handler']['create'](this, function () {
                                _0x185280 && _0x185280();
                            }));
                        }
                    }
                },
                {
                    'key': 'rewardClic' + 'k',
                    'value': function _0x40aa80(_0x3e8974, _0x426651, _0x211ab5) {
                        var _0x48f240 = this;
                        this['rewardCall' + 'back'] = _0x3e8974, this['cancelCall' + 'back'] = _0x426651, Laya['Browser']['onWeiXin'] ? _0x211ab5 || 0x0 == this['shareCount'] ? _0x57ad8e['Instance']['showVideoA' + 'd'](function (_0x487258) {
                            _0x487258 ? _0x3e8974() : _0x426651 && _0x426651();
                        }) : this['shareGame'](function (_0x3fee8a) {
                            _0x3fee8a ? (_0x3e8974(), _0x48f240['shareCount'] -= 0x1, Laya['LocalStora' + 'ge']['setItem']('shareCount', JSON['stringify'](_0x48f240['shareCount']))) : _0x48f240['showModal'](_0x48f240['shareFailC' + 'ontext']);
                        }) : this['rewardCall' + 'back']();
                    }
                },
                {
                    'key': 'shareFailC' + 'ontext',
                    'get': function _0x4973ab() {
                        return [
                            '请分享到活跃的群！',
                            '请分享到不同群！',
                            '请分享给好友！',
                            '请分享给20人以上的' + '群！'
                        ][Math['floor'](0x4 * Math['random']())];
                    }
                },
                {
                    'key': 'showModal',
                    'value': function _0x2eecf3(_0x3f40df) {
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x39b9d6 = this;
                            Laya['Browser']['window']['wx']['showModal']({
                                'title': '提示',
                                'content': _0x3f40df,
                                'showCancel': !0x0,
                                'confirmText': '重新分享',
                                'success': function _0x55e8a9(_0x346e50) {
                                    _0x346e50['confirm'] ? (console['log']('点击确定'), _0x39b9d6['shareGame'](_0x39b9d6['rewardCall' + 'back'])) : _0x346e50['cancel'] && (console['log']('点击取消'), _0x39b9d6['cancelCall' + 'back'] && _0x39b9d6['cancelCall' + 'back']());
                                }
                            });
                        }
                    }
                },
                {
                    'key': 'shareGame',
                    'value': function _0xeef254(_0x2d4baa) {
                        if (Laya['Browser']['onWeiXin']) {
                            console['log']('分享游戏');
                            var _0x34266e = _0x113e4a['instance']['shareConte' + 'xt'];
                            this['JJShareApp' + 'Message'](_0x34266e, _0x2d4baa);
                        }
                    }
                },
                {
                    'key': 'regisiterW' + 'xCallback',
                    'value': function _0x1a7732() {
                        Laya['Browser']['onWeiXin'] && (Laya['Browser']['window']['wx']['offShow'](this['onShowEven' + 't']), Laya['Browser']['window']['wx']['onShow'](this['onShowEven' + 't']), Laya['Browser']['window']['wx']['offHide'](this['onHideEven' + 't']), Laya['Browser']['window']['wx']['onHide'](this['onHideEven' + 't']));
                    }
                },
                {
                    'key': 'onShowEven' + 't',
                    'value': function _0x2dafb9(_0xceab0f) {
                        _0x113e4a['instance']['eventDispa' + 'tcher']['event']('wx_awake_e' + 'vent');
                    }
                },
                {
                    'key': 'onHideEven' + 't',
                    'value': function _0x9cc3fd(_0x22735c) {
                        _0x113e4a['instance']['eventDispa' + 'tcher']['event']('wx_sleep_e' + 'vent');
                    }
                },
                {
                    'key': 'showShareM' + 'enuWithTic' + 'ket',
                    'value': function _0x501692(_0xdf173d) {
                        Laya['Browser']['onWeiXin'] && wx['showShareM' + 'enu']({
                            'withShareTicket': _0xdf173d,
                            'success': function _0x31a96e() {
                            },
                            'fail': function _0x4accad() {
                            },
                            'complete': function _0x4bee63() {
                            }
                        });
                    }
                },
                {
                    'key': 'regisiterW' + 'XShareCall' + 'back',
                    'value': function _0x2b6825() {
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x32db6c = this['shareConte' + 'xt'];
                            Laya['Browser']['window']['wx']['onShareApp' + 'Message'](function () {
                                return console['log']('用户点击了转发按钮'), {
                                    'title': _0x32db6c['title'],
                                    'imageUrl': _0x32db6c['image'],
                                    'query': 'share_id=1',
                                    'success': function _0xcc498(_0x227921) {
                                    },
                                    'fail': function _0x5aec50() {
                                    }
                                };
                            });
                        }
                    }
                },
                {
                    'key': 'JJSendEven' + 't',
                    'value': function _0x3f5701(_0x171181, _0x581666) {
                        console['log']('埋点：', _0x171181), this['dataConfig']['front_repo' + 'rt_event_p' + 'oint_switc' + 'h'] && Laya['Browser']['onWeiXin'] && wx['JJSendEven' + 't'](function () {
                            return {
                                'name': _0x171181,
                                'param': _0x581666
                            };
                        });
                    }
                },
                {
                    'key': 'JJBannerAd' + 'ShowCount',
                    'value': function _0x2096cc() {
                        Laya['Browser']['onWeiXin'] && wx['JJBannerAd' + 'ShowCount'](function () {
                            return {
                                'adUnitId': '',
                                'adUnitName': 'banner',
                                'pageName': 'all'
                            };
                        });
                    }
                },
                {
                    'key': 'JJSendVide' + 'oAdCount',
                    'value': function _0x4d7168(_0x1a9fca, _0x185e23) {
                        Laya['Browser']['onWeiXin'] && wx['JJSendVide' + 'oAdCount'](function () {
                            return {
                                'adUnitId': _0x57ad8e['Instance']['videoId'],
                                'adUnitName': _0x185e23,
                                'isEnded': _0x1a9fca
                            };
                        });
                    }
                },
                {
                    'key': 'JJShareApp' + 'Message',
                    'value': function _0x1596d2(_0x2f98a3, _0x3879b0) {
                        wx['JJShareApp' + 'Message'](function () {
                            return {
                                'title': _0x2f98a3['title'],
                                'imageUrl': _0x2f98a3['imageUrl'],
                                'id': _0x2f98a3['id']
                            };
                        })['then'](function (_0x1c81a3) {
                            _0x3879b0(_0x1c81a3);
                        });
                    }
                },
                {
                    'key': 'JJOnShareA' + 'ppMessage',
                    'value': function _0x199c50(_0x2f72fa) {
                        wx['JJOnShareA' + 'ppMessage'](function () {
                            return {
                                'title': _0x2f72fa['title'],
                                'imageUrl': _0x2f72fa['imageUrl'],
                                'id': _0x2f72fa['id']
                            };
                        });
                    }
                },
                {
                    'key': 'refreshDat' + 'a',
                    'value': function _0x3cdd77() {
                        var _0x3b8ae3 = Laya['LocalStora' + 'ge']['getItem']('dayTime');
                        if (_0x3b8ae3)
                            var _0x25f905 = Number(JSON['parse'](_0x3b8ae3));
                        else
                            _0x25f905 = (new Date()['getTime']() - 0x5265c00) / 0x5265c00, Laya['LocalStora' + 'ge']['setItem']('dayTime', JSON['stringify'](_0x25f905));
                        var _0x3736dc = Math['floor'](new Date()['getTime']() / 0x5265c00);
                        _0x25f905 != _0x3736dc ? (console['log']('刷新缓存数据'), Laya['LocalStora' + 'ge']['setItem']('shareCount', JSON['stringify'](this['dataConfig']['front_shar' + 'e_number'])), Laya['LocalStora' + 'ge']['setItem']('dayTime', JSON['stringify'](_0x3736dc))) : this['dataConfig']['front_shar' + 'e_number'] = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('shareCount'));
                    }
                },
                {
                    'key': 'getRandomI' + 'temInArr',
                    'value': function _0x344d2c(_0x82b0a0) {
                        return _0x82b0a0[Math['floor'](Math['random']() * _0x82b0a0['length'])];
                    }
                }
            ], [{
                    'key': 'instance',
                    'get': function _0xb5a108() {
                        return this['_instance'] || (this['_instance'] = new _0x113e4a()), this['_instance'];
                    }
                }]), _0x113e4a;
        }(), _0x56f491 = function _0x3d77b0() {
            _classCallCheck2(this, _0x3d77b0);
        }, _0x44df11 = function () {
            function _0x8528b2() {
                _classCallCheck2(this, _0x8528b2), (this['gridIdArr'] = [], this['gridAdArr'] = [], this['totalCount'] = 0x1, this['createInde' + 'x'] = 0x0, this['showTimes'] = 0x0, this['currentInd' + 'ex'] = 0x0);
            }
            return _createClass2(_0x8528b2, [
                {
                    'key': 'sysInfo',
                    'get': function _0x34c044() {
                        return window['wx']['getSystemI' + 'nfoSync']();
                    }
                },
                {
                    'key': 'initCustom' + 'Ad',
                    'value': function _0x5991b8() {
                        Laya['Browser']['onWeiXin'] && (this['gridIdArr'] = _0x3d1c55['instance']['dataConfig']['front_more' + '_gezi_list'], this['gridIdArr'] && (this['gridIdArr'] = _0x3d1c55['instance']['shuffleArr'](this['gridIdArr']), this['totalCount'] = this['gridIdArr']['length'], this['createCust' + 'omAd']()));
                    }
                },
                {
                    'key': 'getCustomA' + 'd',
                    'value': function _0x2efc0b(_0x2bac86, _0x2b0e88) {
                        var _0x535c90 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : null, _0x56ca35 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : null, _0x26880c = Laya['Browser']['window']['wx']['createCust' + 'omAd']({
                                'adUnitId': _0x2bac86,
                                'adIntervals': _0x3d1c55['instance']['dataConfig']['front_more' + '_gezi_time'] / 0x3e8,
                                'style': _0x2b0e88
                            });
                        return _0x26880c['onError'](function (_0x2ae2b5) {
                            console['log']('全屏格子加载失败'), _0x56ca35 && _0x56ca35(), _0x26880c['offError'](), _0x26880c['offLoad']();
                        }), _0x26880c['onLoad'](function () {
                            _0x535c90 && _0x535c90(), _0x26880c['offError'](), _0x26880c['offLoad']();
                        }), _0x26880c;
                    }
                },
                {
                    'key': 'createCust' + 'omAd',
                    'value': function _0x215790() {
                        var _0x394924 = this;
                        if (this['createInde' + 'x'] >= this['gridIdArr']['length'] || this['gridAdArr']['length'] >= this['totalCount'])
                            return;
                        var _0x323c81 = this['getCustomA' + 'd'](this['gridIdArr'][this['createInde' + 'x']], {
                            'left': 0x0,
                            'top': 0x4b
                        }, function () {
                            _0x394924['gridAdArr']['push'](_0x323c81), _0x394924['createInde' + 'x']++, _0x394924['createCust' + 'omAd']();
                        }, function () {
                            _0x394924['createInde' + 'x']++, _0x394924['createCust' + 'omAd']();
                        });
                    }
                },
                {
                    'key': 'showGrid',
                    'value': function _0x198703() {
                        Laya['Browser']['onWeiXin'] && this['gridAdArr']['length'] > 0x0 && (this['gridAdArr'][this['currentInd' + 'ex']]['show'](), this['showTimes']++);
                    }
                },
                {
                    'key': 'hideGrid',
                    'value': function _0x3a543f() {
                        Laya['Browser']['onWeiXin'] && this['gridAdArr']['length'] > 0x0 && (this['gridAdArr'][this['currentInd' + 'ex']]['hide'](), this['showTimes'] >= _0x3d1c55['instance']['dataConfig']['front_more' + '_gezi_refr' + 'esh_num'] && (this['showTimes'] = 0x0, this['currentInd' + 'ex']++, this['currentInd' + 'ex'] >= this['gridAdArr']['length'] && (this['currentInd' + 'ex'] = 0x0)));
                    }
                },
                {
                    'key': 'getIsError',
                    'value': function _0x19702f() {
                        return this['gridAdArr']['length'] <= 0x0;
                    }
                }
            ], [{
                    'key': 'instance',
                    'get': function _0x1e3e55() {
                        return this['_instance'] || (this['_instance'] = new _0x8528b2()), this['_instance'];
                    }
                }]), _0x8528b2;
        }(), _0x20e367 = function () {
            function _0x2bb294() {
                _classCallCheck2(this, _0x2bb294), this['dataConfig'] = _0x3d1c55['instance']['dataConfig'];
            }
            return _createClass2(_0x2bb294, [
                {
                    'key': 'setLevel',
                    'value': function _0x4b7fdd(_0x16c302, _0x724828) {
                        this['storageDat' + 'a'] = _0x16c302, this['storageKey'] = _0x724828;
                    }
                },
                {
                    'key': 'NewWuchu',
                    'get': function _0x517f31() {
                        return _0x3d1c55['instance']['dataConfig']['is_allow_a' + 'rea'] && this['allowScene'];
                    }
                },
                {
                    'key': 'inHomePage',
                    'value': function _0x35ab16(_0x17cdba, _0x46145e) {
                        this['moreGameBt' + 'n'] = _0x17cdba, this['drawBtn'] = _0x46145e, _0x17cdba && Laya['timer']['loop'](0x64, this, this['updateMore' + 'GameBtn']), _0x46145e && Laya['timer']['loop'](0x64, this, this['updateDraw' + 'Btn']), _0x4432e8['Instance']['showBanner'](), _0x4ae806['instance']['showGrid']();
                    }
                },
                {
                    'key': 'updateMore' + 'GameBtn',
                    'value': function _0x5b7b0d() {
                        this['moreGameBt' + 'n']['visible'] = _0x2bb294['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_haow' + 'an_switch'] && !_0x44df11['instance']['getIsError']();
                    }
                },
                {
                    'key': 'updateDraw' + 'Btn',
                    'value': function _0x49a71d() {
                        this['drawBtn']['visible'] = _0x2bb294['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_chou' + 'ti_switch'] && !_0x44df11['instance']['getIsError']();
                    }
                },
                {
                    'key': 'clickShop',
                    'value': function _0x2f86ab() {
                        _0x4ae806['instance']['hideGrid'](), _0x4432e8['Instance']['hideBanner'](), Laya['timer']['clear'](this, this['updateMore' + 'GameBtn']), Laya['timer']['clear'](this, this['updateDraw' + 'Btn']);
                    }
                },
                {
                    'key': 'clickStart' + 'Game',
                    'value': function _0x52858b(_0x546e98) {
                        var _0x4f2186 = this;
                        _0x4ae806['instance']['hideGrid'](), _0x4432e8['Instance']['hideBanner'](), Laya['timer']['clear'](this, this['updateMore' + 'GameBtn']), Laya['timer']['clear'](this, this['updateDraw' + 'Btn']), this['showGridUI' + '3'](function () {
                            _0x4f2186['showRunUI'](function () {
                                _0x57ad8e['Instance']['showGameCu' + 'stomAd'](), _0x546e98 && _0x546e98();
                            });
                        });
                    }
                },
                {
                    'key': 'clickHomeM' + 'oreGame',
                    'value': function _0x23119b() {
                        _0x4ae806['instance']['hideGrid'](), _0x4432e8['Instance']['hideBanner'](), this['showGridUI'](function () {
                            _0x4ae806['instance']['showGrid'](), _0x4432e8['Instance']['showBanner']();
                        }, !0x1, !0x0);
                    }
                },
                {
                    'key': 'clickDraw',
                    'value': function _0x172cac() {
                        _0x4ae806['instance']['hideGrid'](), _0x4432e8['Instance']['hideBanner'](), this['showGridUI'](function () {
                            _0x4ae806['instance']['showGrid'](), _0x4432e8['Instance']['showBanner']();
                        }, !0x1, !0x0);
                    }
                },
                {
                    'key': 'clickFinis' + 'hMoreGame',
                    'value': function _0x3755ae() {
                        var _0x221e8a = this;
                        _0x54e87a['instance']['hideGrid'](), _0x57ad8e['Instance']['hideGameCu' + 'stomAd'](), _0x4432e8['Instance']['hideBanner'](), this['showGridUI'](function () {
                            _0x57ad8e['Instance']['showGameCu' + 'stomAd'](), _0x4432e8['Instance']['showBanner'](), _0x221e8a['dataConfig']['front_jies' + 'uanye_swit' + 'ch'] && _0x221e8a['NewWuchu'] && (0x64 * Math['random']() < _0x221e8a['dataConfig']['front_daoc' + 'hu_gezi_ch' + 'ance'] || _0x54e87a['instance']['showGrid']());
                        }, !0x1, !0x0);
                    }
                },
                {
                    'key': 'showGameBa' + 'nner',
                    'value': function _0x13d7de() {
                        this['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_game' + '_banner_sw' + 'itch'] && _0x4432e8['Instance']['showBanner']();
                    }
                },
                {
                    'key': 'showGameOv' + 'er',
                    'value': function _0x493e2f(_0xc55266) {
                        _0x57ad8e['Instance']['hideGameCu' + 'stomAd'](), _0x4432e8['Instance']['hideBanner'](), this['showGridUI'](_0xc55266, !0x0);
                    }
                },
                {
                    'key': 'showFinish' + 'UI',
                    'value': function _0xdd6592(_0x4101dd, _0x126a28) {
                        _0x4432e8['Instance']['hideBanner'](), _0x57ad8e['Instance']['showGameCu' + 'stomAd'](), _0x126a28['visible'] = _0x2bb294['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_chou' + 'ti_switch'] && !_0x44df11['instance']['getIsError'](), !_0x4432e8['Instance']['showBanner']() && this['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_daoc' + 'hulan_swit' + 'ch'] && this['showFinish' + 'Scroll'](_0x4101dd), this['dataConfig']['front_jies' + 'uanye_swit' + 'ch'] && this['NewWuchu'] && (0x64 * Math['random']() < this['dataConfig']['front_daoc' + 'hu_gezi_ch' + 'ance'] ? this['showFinish' + 'Export'](_0x4101dd) : _0x54e87a['instance']['showGrid']()), _0x2bb294['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_jies' + 'aunye_chap' + 'ing_switch'] && _0x57ad8e['Instance']['showInterA' + 'd']();
                    }
                },
                {
                    'key': 'closeFinis' + 'hUI',
                    'value': function _0x5f5b13(_0x1ff1cd) {
                        var _0x3a97c0 = this;
                        _0x57ad8e['Instance']['hideGameCu' + 'stomAd'](), _0x4432e8['Instance']['hideBanner'](), _0x54e87a['instance']['hideGrid'](), this['showGridUI' + '2'](function () {
                            _0x1ff1cd && _0x1ff1cd(), _0x3a97c0['dataConfig']['front_wx_a' + 'd_switch'] && _0x3a97c0['NewWuchu'] && _0x57ad8e['Instance']['showInterA' + 'd']();
                        }, !0x0);
                    }
                },
                {
                    'key': 'showGridUI',
                    'value': function _0x50d5c6(_0x4e7a60) {
                        var _0x482062 = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : !0x1, _0x154de1 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : !0x1;
                        Laya['Scene']['open']('JJExport/G' + 'ridUI.scen' + 'e', !0x1, {
                            'ccb': _0x4e7a60,
                            'isInterAd': _0x482062,
                            'isMoreGame': _0x154de1
                        }, Laya['Handler']['create'](this, function (_0x28caf5) {
                            Laya['stage']['addChild'](_0x28caf5);
                        }));
                    }
                },
                {
                    'key': 'showGridUI' + '2',
                    'value': function _0x217134(_0x5aa251) {
                        var _0x2f2c39 = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : !0x1;
                        Laya['Scene']['open']('JJExport/G' + 'ridUI2.sce' + 'ne', !0x1, {
                            'ccb': _0x5aa251,
                            'isFinishUI': _0x2f2c39
                        }, Laya['Handler']['create'](this, function (_0x45340e) {
                            Laya['stage']['addChild'](_0x45340e);
                        }));
                    }
                },
                {
                    'key': 'showGridUI' + '3',
                    'value': function _0x10bda8(_0x34d34c) {
                        Laya['Scene']['open']('JJExport/G' + 'ridUI3.sce' + 'ne', !0x1, { 'ccb': _0x34d34c }, Laya['Handler']['create'](this, function (_0x1b97fa) {
                            Laya['stage']['addChild'](_0x1b97fa);
                        }));
                    }
                },
                {
                    'key': 'showRunUI',
                    'value': function _0x56853f(_0x584bb8) {
                        Laya['Scene']['open']('JJExport/R' + 'unUI.scene', !0x1, { 'ccb': _0x584bb8 }, Laya['Handler']['create'](this, function (_0x25ea16) {
                            Laya['stage']['addChild'](_0x25ea16);
                        }));
                    }
                },
                {
                    'key': 'showFinish' + 'Export',
                    'value': function _0x117d15(_0x105da5) {
                        Laya['Scene']['open']('JJExport/F' + 'inishGameU' + 'I.scene', !0x1, null, Laya['Handler']['create'](this, function (_0x1d9102) {
                            _0x105da5['addChild'](_0x1d9102);
                        }));
                    }
                },
                {
                    'key': 'showFinish' + 'Scroll',
                    'value': function _0x1b1857(_0x4c86b8) {
                        Laya['Scene']['open']('JJExport/F' + 'inishScrol' + 'lUI.scene', !0x1, null, Laya['Handler']['create'](this, function (_0xceb481) {
                            _0x4c86b8['addChild'](_0xceb481);
                        }));
                    }
                },
                {
                    'key': 'getRandomI' + 'ndex',
                    'value': function _0x5e7101() {
                        return Math['floor'](Math['random']() * _0x3d1c55['instance']['navDataArr']['length']);
                    }
                },
                {
                    'key': 'getRandom0' + 'To100',
                    'get': function _0x313af2() {
                        return 0x64 * Math['random']();
                    }
                },
                {
                    'key': 'allowScene',
                    'get': function _0x14b074() {
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x49130c = wx['getLaunchO' + 'ptionsSync'](), _0x34394a = !0x0, _0x3b8c41 = this['dataConfig']['front_wuch' + 'u_scene'];
                            (null == _0x3b8c41 && (_0x34394a = !0x0), -0x1 == _0x3b8c41['search']('|')) && (_0x34394a = parseInt(_0x3b8c41) != _0x49130c['scene']);
                            var _0x50d3e6 = _0x3b8c41['split']('|');
                            for (var _0x3c85ff = 0x0; _0x3c85ff < _0x50d3e6['length']; _0x3c85ff++) {
                                parseInt(_0x50d3e6[_0x3c85ff]) == _0x49130c['scene'] && (_0x34394a = !0x1);
                            }
                            return _0x34394a;
                        }
                        return !0x0;
                    }
                },
                {
                    'key': 'switch',
                    'value': function _0x242f1e(_0x4e7d70) {
                        var _0x9b4502 = '';
                        for (var _0x3c4a31 = _0x4e7d70['length'] - 0x1; _0x3c4a31 >= 0x0; _0x3c4a31--) {
                            _0x9b4502 += _0x4e7d70[_0x3c4a31];
                        }
                        return _0x9b4502;
                    }
                },
                {
                    'key': 'addClickEv' + 'ent',
                    'value': function _0x1065b2(_0x58d0b7, _0x4a779d, _0x3e34a2, _0x2cb9b1, _0x4bfc63) {
                        if (_0x58d0b7['offAllCall' + 'er'](_0x4a779d), _0x58d0b7 instanceof Laya['Button'] && !_0x4bfc63) {
                            var _0x3d66d9 = function _0x444b26(_0x5a9ba5) {
                                _0x3e34a2 && _0x3e34a2['call'](_0x4a779d, _0x5a9ba5);
                            };
                            _0x58d0b7['on'](Laya['Event']['CLICK'], _0x4a779d, _0x3d66d9, [_0x2cb9b1]);
                        } else {
                            var _0x2601e1 = 0x3c, _0x8d0808 = 0x1, _0x36e041 = _0x58d0b7['scaleX'] * _0x8d0808, _0xde8ec3 = _0x58d0b7['scaleY'] * _0x8d0808, _0x55935d = 0.9 * _0x8d0808, _0x4d10a2 = !0x1, _0x4ac9cb = function _0x45ed1f(_0x305667) {
                                    _0x4d10a2 = !0x0, Laya['Tween']['to'](_0x58d0b7, {
                                        'scaleX': _0x55935d,
                                        'scaleY': _0x55935d
                                    }, _0x2601e1);
                                };
                            _0x58d0b7['on'](Laya['Event']['MOUSE_DOWN'], _0x4a779d, _0x4ac9cb, [_0x2cb9b1]);
                            var _0x1d6533 = function _0x232a04(_0x1ab349) {
                                0x0 != _0x4d10a2 && (_0x4d10a2 = !0x1, Laya['Tween']['to'](_0x58d0b7, {
                                    'scaleX': _0x36e041,
                                    'scaleY': _0xde8ec3
                                }, _0x2601e1, null, new Laya['Handler'](_0x4a779d, function () {
                                    _0x3e34a2 && _0x3e34a2['call'](_0x4a779d, _0x1ab349);
                                })));
                            };
                            _0x58d0b7['on'](Laya['Event']['MOUSE_UP'], _0x4a779d, _0x1d6533, [_0x2cb9b1]);
                            var _0x414900 = function _0x90d6fc(_0x41140e) {
                                Laya['Tween']['to'](_0x58d0b7, {
                                    'scaleX': _0x36e041,
                                    'scaleY': _0xde8ec3
                                }, _0x2601e1);
                            };
                            _0x58d0b7['on'](Laya['Event']['MOUSE_OUT'], _0x4a779d, _0x414900, [_0x2cb9b1]);
                        }
                    }
                }
            ], [{
                    'key': 'Instance',
                    'get': function _0x4d5040() {
                        return _0x2bb294['_instance'] || (_0x2bb294['_instance'] = new _0x2bb294()), _0x2bb294['_instance'];
                    }
                }]), _0x2bb294;
        }(), _0xd81128 = function (_0x100d66) {
            _inherits2(_0x513b68, _0x100d66);
            var _0x554081 = _createSuper2(_0x513b68);
            function _0x513b68() {
                var _0x3e85aa;
                return _classCallCheck2(this, _0x513b68), (_0x3e85aa = _0x554081['apply'](this, arguments), _0x3e85aa['isStart'] = !0x1, _0x3e85aa['isSuccess'] = !0x0, _0x3e85aa['isCalling'] = !0x1, _0x3e85aa['nowCube'] = [], _0x3e85aa['stageID'] = 0x0, _0x3e85aa['trailPos'] = [], _0x3e85aa['trailPosTi' + 'me'] = []), _0x3e85aa;
            }
            return _createClass2(_0x513b68, [
                {
                    'key': 'init',
                    'value': function _0x3a982f() {
                        _0x513b68['instance'] = this, this['update'] = this['getCompone' + 'nt'](_0x46fb76), _0x33885f['nowScene'] = 0x2, console['log']('Stage开始执行'), this['ButtonInit'](), this['ValueInit'](), this['GameInit']();
                        if (Laya['LocalStora' + 'ge']['getJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData')['grade'] == 0x1 && Laya['Browser']['onPC'])
                            this['TotarialUI']['set_visibl' + 'e'](!0x1), this['holePanel']['set_visibl' + 'e'](!0x1), this['beaconPane' + 'l']['set_visibl' + 'e'](!0x1), this['springPane' + 'l']['set_visibl' + 'e'](!0x0), this['collectAll' + 'UI']['set_visibl' + 'e'](!0x1), this['PCcontrol']['set_visibl' + 'e'](!0x0), Laya['stage']['on'](Laya['Event']['KEY_DOWN'], this, () => {
                                this['PCcontrol']['set_visibl' + 'e'](!0x1), this['springPane' + 'l']['set_visibl' + 'e'](!0x1);
                            }), Laya['stage']['on'](Laya['Event']['CLICK'], this, () => {
                                this['PCcontrol']['set_visibl' + 'e'](!0x1), this['springPane' + 'l']['set_visibl' + 'e'](!0x1);
                            });
                        else
                            Laya['LocalStora' + 'ge']['getJSON']('Stack-Maze' + '-Puzzle_Pl' + 'ayerData')['grade'] == 0x1 && !Laya['Browser']['onPC'] ? (this['PCcontrol']['set_visibl' + 'e'](!0x1), this['Totarial']()) : (this['collectAll' + 'UI']['set_visibl' + 'e'](!0x1), this['backCollec' + 'tUI']['set_visibl' + 'e'](!0x1), this['springPane' + 'l']['set_visibl' + 'e'](!0x1), this['beaconPane' + 'l']['set_visibl' + 'e'](!0x1), this['holePanel']['set_visibl' + 'e'](!0x1), _0x5afa76['TouchOff'](this['GameStart'], function () {
                            }, function () {
                            }, this), this['PCcontrol']['set_visibl' + 'e'](!0x1), this['TotarialUI']['destroy']());
                        this['GameStart']();
                    }
                },
                {
                    'key': 'ButtonInit',
                    'value': function _0x275f98() {
                    }
                },
                {
                    'key': 'ValueInit',
                    'value': function _0x133334() {
                        _0x83809['GetPlayerD' + 'ata']()['grade'], this['coinValue']['value'] = _0x33885f['readCoin']()['toString'](), console['log']('this', this), this['gradeValue'] = this['getChildBy' + 'Name']('gradeBack')['getChildAt'](0x0)['getChildBy' + 'Name']('gradeValue'), this['gradeValue']['value'] = _0x33885f['readGrade']()['toString']();
                    }
                },
                {
                    'key': 'Totarial',
                    'value': function _0x2635e7() {
                        var _0x373df3 = new Laya['Animation']();
                        _0x373df3['loadAnimat' + 'ion']('Anim/Totou' + 'rial.ani'), _0x373df3['x'] = this['scene']['width'] / 0x2, _0x373df3['y'] = this['scene']['height'] - 0x12c, this['scene']['addChild'](_0x373df3), _0x373df3['play'](), this['TotarialAn' + 'im'] = _0x373df3, this['collectAll' + 'UI']['set_visibl' + 'e'](!0x1), this['backCollec' + 'tUI']['set_visibl' + 'e'](!0x1), this['springPane' + 'l']['set_visibl' + 'e'](!0x1), this['beaconPane' + 'l']['set_visibl' + 'e'](!0x1), this['holePanel']['set_visibl' + 'e'](!0x1), 0x1 == _0x33885f['readGrade']() ? this['springPane' + 'l']['set_visibl' + 'e'](!0x0) : 0x3 == _0x33885f['readGrade']() ? this['beaconPane' + 'l']['set_visibl' + 'e'](!0x0) : 0x7 == _0x33885f['readGrade']() && this['holePanel']['set_visibl' + 'e'](!0x0), _0x5afa76['TouchOn'](this['TotarialEn' + 'd'], function () {
                        }, function () {
                        }, this);
                    }
                },
                {
                    'key': 'TotarialEn' + 'd',
                    'value': function _0x130273() {
                        this['collectAll' + 'UI']['set_visibl' + 'e'](!0x1), this['backCollec' + 'tUI']['set_visibl' + 'e'](!0x1), this['springPane' + 'l']['set_visibl' + 'e'](!0x1), this['beaconPane' + 'l']['set_visibl' + 'e'](!0x1), this['holePanel']['set_visibl' + 'e'](!0x1), _0x5afa76['TouchOff'](this['GameStart'], function () {
                        }, function () {
                        }, this), this['TotarialAn' + 'im']['destroy'](), this['TotarialUI']['destroy']();
                    }
                },
                {
                    'key': 'DrawUI',
                    'value': function _0xb80b53() {
                    }
                },
                {
                    'key': 'BackUI',
                    'value': function _0x48855f() {
                    }
                },
                {
                    'key': 'GameInit',
                    'value': function _0x328523() {
                        var _0x3775d9 = _0x33885f['scene3D']['getChildBy' + 'Name']('End')['getChildBy' + 'Name']('Chest'), _0x53768f = _0x3775d9['getCompone' + 'nt'](Laya['Animator']);
                        _0x33885f['fxControll' + 'er']['BornChestA' + 'llFx'](_0x3775d9['transform']['position']['clone']()), _0x53768f['play']('Idle');
                    }
                },
                {
                    'key': 'GameStart',
                    'value': function _0x4db3e1() {
                        console['log']('游戏正式开始'), this['isStart'] = !0x0, this['coinValue']['value'] = _0x33885f['readCoin']()['toString'](), this['PlayerStar' + 't'](), _0x20e367['Instance']['showGameBa' + 'nner']();
                    }
                },
                {
                    'key': 'GameEnd',
                    'value': function _0x3bb4d4() {
                        this['callDoneAn' + 'dCanel'](), this['touchWayCh' + 'eck']['destroy'](), console['log']('游戏结束'), console['log']('结算板子数：', this['nowCube']['length']), this['isStart'] = !0x1, this['getCompone' + 'nt'](_0x46fb76)['destroy'](), _0x33885f['isSuccess'] = this['isSuccess'], _0x33885f['mainCam']['getCompone' + 'nt'](_0x30c2d0)['destroy'](), this['EndAnim']();
                    }
                },
                {
                    'key': 'EndAnim',
                    'value': function _0x1e32a3() {
                        var _0x57baec = this, _0x417694 = new _0x4ff7a0(), _0x2c777c = _0x33885f['scene3D']['getChildBy' + 'Name']('End')['getChildBy' + 'Name']('Chest'), _0x190a89 = _0x2c777c['transform']['position']['clone']();
                        _0x33885f['fxControll' + 'er']['smokeFx']['transform']['localPosit' + 'ionY'] = 0x0, _0x190a89['y'] = 0x0;
                        var _0x453941 = Math['floor'](this['nowCube']['length'] / 0x5), _0x820475 = this['nowCube']['length'] % 0x5, _0xd03ff7 = 0x14 + 0x7 * _0x453941 + 0x1 + _0x820475, _0x2ff8bd = !0x1;
                        _0x453941 == _0x516ba4['endItemCou' + 'nt'] ? (_0x190a89['z'] -= 0.5, _0xd03ff7 = _0x190a89['z'] - _0x33885f['player']['transform']['position']['clone']()['z'], _0x820475 = 0x0, this['nowCube']['length'] == _0x516ba4['cubeCount'] - _0x516ba4['trailCubeC' + 'ount'] && (_0x2ff8bd = !0x0)) : _0x190a89['z'] = _0x33885f['player']['transform']['position']['clone']()['z'] + _0xd03ff7 - 0.5;
                        var _0x55740a = 0x32 * _0xd03ff7, _0x84d247 = new _0x4ff7a0(), _0x157c8d = _0x33885f['mainCam']['transform']['position']['clone'](), _0x4451ce = new Laya['Vector3'](_0x157c8d['x'] + 0x3e8 * (_0x190a89['x'] - _0x157c8d['x']) / _0x55740a - 0x5, _0x157c8d['y'] - 0x8, _0x157c8d['z'] + 0x3e8 * _0xd03ff7 / _0x55740a), _0x4e823c = new Laya['Vector3'](_0x190a89['x'] - 0x8, _0x157c8d['y'] - 0x8, _0x157c8d['z'] + _0xd03ff7), _0x46880e = new Laya['Vector3'](_0x190a89['x'], _0x157c8d['y'] - 0xa, _0x157c8d['z'] + _0xd03ff7 + 0x1), _0x1260fb = new Laya['Vector3'](-0x23, -0x96, 0x0), _0x26f8ec = new Laya['Vector3'](-0x28, -0xb4, 0x0);
                        _0x84d247['toTween'](_0x33885f['mainCam'], {
                            'pos': _0x4451ce,
                            'rot': _0x1260fb
                        }, 0x3e8)['then']({ 'pos': _0x4e823c }, _0x55740a - 0x3e8, function () {
                            _0x2ff8bd && _0x84d247['toTween'](_0x33885f['mainCam'], {
                                'pos': _0x46880e,
                                'rot': _0x26f8ec
                            }, 0x3e8);
                        }), _0x417694['toTween'](_0x33885f['player'], { 'pos': _0x190a89 }, _0x55740a, function () {
                            if (_0x33885f['fxControll' + 'er']['smokeFx']['transform']['localPosit' + 'ionY'] = -0x3e8, _0x2ff8bd) {
                                var _0x1f9f72 = _0x33885f['model']['transform']['localPosit' + 'ion']['clone']();
                                _0x1f9f72['z'] += 0x2, _0x4f8bb7['playAnim'](_0x1e40f9['End']), setTimeout(function () {
                                    _0x57baec['coinAnimGo'](_0x2c777c);
                                }, 0x3e8), _0x417694['toTween'](_0x33885f['model'], {
                                    'pos': _0x1f9f72,
                                    'rot': new Laya['Vector3'](0x0, 0x0, 0x0)
                                }, 0x3e8, function () {
                                    _0x4f8bb7['FadeIn'](_0x1e40f9['Dance']);
                                    var _0x16cbfb = _0x2c777c['getCompone' + 'nt'](Laya['Animator']);
                                    _0x16cbfb['speed'] = 0.5, _0x5afa76['vibrateSho' + 'rt'](), _0x16cbfb['play']('Play'), _0x417694['toTween'](_0x33885f['model'], { 'rot': new Laya['Vector3'](0x0, 0xb4, 0x0) }, 0x1f4), _0x33885f['fxControll' + 'er']['BornFireWo' + 'rksAlways'](new Laya['Vector3'](_0x33885f['player']['transform']['position']['clone']()['x'] + 0x3, 0x0, _0x33885f['player']['transform']['position']['clone']()['z'])), _0x33885f['fxControll' + 'er']['BornFireWo' + 'rksAlways'](new Laya['Vector3'](_0x33885f['player']['transform']['position']['clone']()['x'] - 0x3, 0x0, _0x33885f['player']['transform']['position']['clone']()['z'])), setTimeout(function () {
                                        _0x20e367['Instance']['showGameOv' + 'er'](function () {
                                            Laya['Scene']['destroy'](_0x338ce2['STAGEUI']), _0x5afa76['loadScene'](_0x338ce2['ENDMENU']);
                                        });
                                    }, 0x7d0);
                                });
                            } else
                                _0x33885f['fxControll' + 'er']['BornFireWo' + 'rksAlways'](new Laya['Vector3'](_0x33885f['player']['transform']['position']['clone']()['x'] + 0x3, 0x0, _0x33885f['player']['transform']['position']['clone']()['z'])), _0x33885f['fxControll' + 'er']['BornFireWo' + 'rksAlways'](new Laya['Vector3'](_0x33885f['player']['transform']['position']['clone']()['x'] - 0x3, 0x0, _0x33885f['player']['transform']['position']['clone']()['z'])), setTimeout(function () {
                                    _0x20e367['Instance']['showGameOv' + 'er'](function () {
                                        Laya['Scene']['destroy'](_0x338ce2['STAGEUI']), _0x5afa76['loadScene'](_0x338ce2['ENDMENU']);
                                    });
                                }, 0x7d0);
                        });
                        for (var _0x5a64df = 0x0; _0x5a64df < _0x453941; _0x5a64df++) {
                            for (var _0x250f81 = 0x1; _0x250f81 <= 0x5; _0x250f81++) {
                                var _0x3c4154 = 0x14 + 0x7 * _0x5a64df + 0.5 + _0x250f81, _0x1fa405 = new Laya['Vector3'](_0x33885f['player']['transform']['position']['clone']()['x'], 0x0, _0x33885f['player']['transform']['position']['clone']()['z'] + _0x3c4154), _0x100ca7 = 0x32 * _0x3c4154;
                                this['EndCubeSet'](_0x1fa405, _0x100ca7);
                            }
                        }
                        for (var _0x394095 = 0x0; _0x394095 < _0x820475; _0x394095++) {
                            var _0x2d90df = 0x14 + 0x7 * _0x453941 + 1.5 + _0x394095, _0x22a985 = new Laya['Vector3'](_0x33885f['player']['transform']['position']['clone']()['x'], 0x0, _0x33885f['player']['transform']['position']['clone']()['z'] + _0x2d90df), _0x5b8934 = 0x32 * _0x2d90df;
                            this['EndCubeSet'](_0x22a985, _0x5b8934);
                        }
                        _0x33885f['endAxis'] = 0x1 + 0.1 * _0x453941, _0x33885f['endCoin'] = 0xa * _0x33885f['endAxis'], _0x2ff8bd && (_0x33885f['endCoin'] += 0x1e), window['coinValue'] = this['coinValue'];
                    }
                },
                {
                    'key': 'coinAnimGo',
                    'value': function _0x536975(_0x41c0cc) {
                        (_0x41c0cc = _0x5afa76['getSpriteP' + 'osBySprite' + '3DPoint'](_0x41c0cc))['y'] -= 0x12c, _0x5afa76['coinCollec' + 'tAnimAni'](this['coinAnim'], _0x41c0cc, new Laya['Vector2'](this['coinValue']['x'], this['coinValue']['y']), this['scene'], 0x1e);
                    }
                },
                {
                    'key': 'EndCubeSet',
                    'value': function _0x217f8e(_0x4ebb08, _0x57411d) {
                        var _0x25845c = this;
                        return 0x0 == this['nowCube']['length'] || (setTimeout(function () {
                            _0x5afa76['vibrateSho' + 'rt']();
                            var _0x396e92 = _0x25845c['nowCube'][_0x25845c['nowCube']['length'] - 0x1];
                            _0x33885f['scene3D']['addChild'](_0x396e92), _0x396e92['transform']['position'] = _0x4ebb08, _0x25845c['putDownCub' + 'e'](_0x396e92), _0x25845c['nowCube']['splice'](_0x25845c['nowCube']['length'] - 0x1, 0x1), _0x33885f['model']['transform']['localPosit' + 'ionY'] = 0.3 + 0.3 * _0x25845c['nowCube']['length'];
                        }, _0x57411d), !0x1);
                    }
                },
                {
                    'key': 'PlayerStar' + 't',
                    'value': function _0x4f96a4() {
                        this['touchWayCh' + 'eck'] = this['addCompone' + 'nt'](_0x2ad285);
                    }
                },
                {
                    'key': 'callUpdate',
                    'value': function _0x3a961b() {
                        if (this['isCalling'])
                            return;
                        this['isCalling'] = !0x0;
                        var _0x6a0d15 = this['touchWayCh' + 'eck']['calls'][0x0];
                        this['doCall'](_0x6a0d15);
                    }
                },
                {
                    'key': 'doCall',
                    'value': function _0x3ca6df(_0x59c5f7) {
                        var _0x1d56d5 = this, _0x5b599a = _0x33885f['player']['transform']['position']['clone'](), _0x5e7c35 = _0x5b599a;
                        _0x5b599a['y'] = 0x0, this['trailPos'] = [], this['trailPosTi' + 'me'] = [], this['trailPos']['push'](_0x5e7c35), this['getNextPos'](_0x5b599a, _0x59c5f7);
                        var _0x4f0328 = [], _0x39df2f = 0x32;
                        _0x4f0328['push'](this['trailPos'][0x0]), this['trailPosTi' + 'me']['push'](0x0);
                        for (var _0x458a10 = 0x1; _0x458a10 < this['trailPos']['length'] - 0x1; _0x458a10++) {
                            '' != this['checkPosSp' + 'ecial'](this['trailPos'][_0x458a10]) && (_0x4f0328['push'](this['trailPos'][_0x458a10]), this['trailPosTi' + 'me']['push'](_0x39df2f), _0x39df2f = 0x0), _0x39df2f += 0x32;
                        }
                        if (_0x4f0328['push'](this['trailPos'][this['trailPos']['length'] - 0x1]), this['trailPosTi' + 'me']['push'](_0x39df2f), this['trailPos'] = _0x4f0328, this['trailPos']['length'] > 0x1) {
                            var _0x1ff4f3 = 0x0, _0x47cd4c = function _0x197264() {
                                    if (_0x1d56d5['pickPosCub' + 'e'](_0x1d56d5['trailPos'][_0x1ff4f3]) || _0x4f8bb7['FadeIn'](_0x1e40f9['Move']), Laya['Vector3']['equals'](_0x1d56d5['trailPos'][_0x1ff4f3], _0x516ba4['endPos'][_0x1d56d5['stageID']]))
                                        return console['log']('离开', _0x1d56d5['stageID']), _0x1d56d5['stageID']++, console['log']('去往', _0x1d56d5['stageID']), void (_0x1d56d5['stageID'] < _0x516ba4['roadCubes']['length'] ? _0x1d56d5['doCall'](_0x59c5f7) : _0x1d56d5['GameEnd']());
                                    if (Laya['Vector3']['equals'](_0x1d56d5['trailPos'][_0x1ff4f3], _0x516ba4['startPos'][_0x1d56d5['stageID']])) {
                                        if (console['log']('离开', _0x1d56d5['stageID']), _0x1d56d5['stageID']--, console['log']('去往', _0x1d56d5['stageID']), _0x1d56d5['stageID'] >= 0x0)
                                            return void _0x1d56d5['doCall'](_0x59c5f7);
                                        _0x1d56d5['stageID'] = 0x0, console['log']('已返回起始点');
                                    }
                                    if (0x0 != _0x1ff4f3) {
                                        if (!_0x1d56d5['checkPosTr' + 'ail'](_0x1d56d5['trailPos'][_0x1ff4f3]))
                                            return _0x1d56d5['backCollec' + 'tUI']['set_visibl' + 'e'](!0x0), setTimeout(function () {
                                                _0x1d56d5['backCollec' + 'tUI']['set_visibl' + 'e'](!0x1);
                                            }, 0x7d0), void _0x1d56d5['callDoneAn' + 'dCanel']();
                                        if (_0x1d56d5['checkPosWo' + 'rm'](_0x1d56d5['trailPos'][_0x1ff4f3]))
                                            return;
                                        if (_0x1d56d5['checkPosBe' + 'acon'](_0x1d56d5['trailPos'][_0x1ff4f3]))
                                            return;
                                        if (_0x1d56d5['checkPosSp' + 'ring'](_0x1d56d5['trailPos'][_0x1ff4f3], _0x59c5f7))
                                            return;
                                        if (_0x1d56d5['checkPosSt' + 'op'](_0x1d56d5['trailPos'][_0x1ff4f3]))
                                            return void _0x1d56d5['callDone']();
                                    } else {
                                        if (!_0x1d56d5['checkPosTr' + 'ail'](_0x1d56d5['trailPos'][_0x1ff4f3 + 0x1]))
                                            return _0x1d56d5['backCollec' + 'tUI']['set_visibl' + 'e'](!0x0), setTimeout(function () {
                                                _0x1d56d5['backCollec' + 'tUI']['set_visibl' + 'e'](!0x1);
                                            }, 0x7d0), void _0x1d56d5['callDoneAn' + 'dCanel']();
                                    }
                                    if (++_0x1ff4f3 < _0x1d56d5['trailPos']['length']) {
                                        var _0x3199d3 = new _0x4ff7a0();
                                        _0x33885f['fxControll' + 'er']['smokeFx']['transform']['localPosit' + 'ionY'] = 0x0, _0x3199d3['toTween'](_0x33885f['player'], { 'pos': _0x1d56d5['trailPos'][_0x1ff4f3] }, _0x1d56d5['trailPosTi' + 'me'][_0x1ff4f3], _0x197264);
                                    } else
                                        _0x1d56d5['callDone']();
                                };
                            _0x47cd4c();
                        } else
                            this['callDone']();
                    }
                },
                {
                    'key': 'callDone',
                    'value': function _0x41ab39() {
                        var _0x29ebc1 = this['touchWayCh' + 'eck']['calls'];
                        if (_0x29ebc1['splice'](0x0, 0x1), _0x5afa76['vibrateSho' + 'rt'](), _0x29ebc1['length'] > 0x0) {
                            var _0x101dfb = _0x29ebc1[0x0];
                            this['doCall'](_0x101dfb);
                        } else
                            this['isCalling'] = !0x1, _0x33885f['fxControll' + 'er']['smokeFx']['transform']['localPosit' + 'ionY'] = -0x3e8;
                    }
                },
                {
                    'key': 'callDoneAn' + 'dCanel',
                    'value': function _0x1b6ce4() {
                        _0x5afa76['vibrateSho' + 'rt'](), this['touchWayCh' + 'eck']['calls'] = [], this['isCalling'] = !0x1, _0x33885f['fxControll' + 'er']['smokeFx']['transform']['localPosit' + 'ionY'] = -0x3e8;
                    }
                },
                {
                    'key': 'getNextPos',
                    'value': function _0x13b260(_0x257a3e, _0x4db7fd) {
                        var _0x48fa1a = _0x516ba4['roadCubes'][this['stageID']], _0x18096c = _0x257a3e;
                        for (var _0x5cf265 = 0x0; _0x5cf265 < _0x48fa1a['length']; _0x5cf265++) {
                            var _0x141064 = _0x5afa76['Vector3Red' + 'uce'](_0x48fa1a[_0x5cf265], _0x257a3e);
                            if (0x1 == Laya['Vector3']['scalarLeng' + 'th'](_0x141064)) {
                                var _0x59a81b = Math['atan2'](_0x141064['z'], _0x141064['x']) / Math['PI'] * 0xb4, _0x3fcb7a = 'none';
                                if (0x5a == _0x59a81b ? _0x3fcb7a = 'up' : 0xb4 == _0x59a81b ? _0x3fcb7a = 'right' : -0x5a == _0x59a81b ? _0x3fcb7a = 'down' : 0x0 == _0x59a81b && (_0x3fcb7a = 'left'), _0x4db7fd == _0x3fcb7a) {
                                    _0x18096c = _0x48fa1a[_0x5cf265];
                                    break;
                                }
                            }
                        }
                        return _0x257a3e != _0x18096c && (this['trailPos']['push'](_0x18096c), _0x18096c = this['getNextPos'](_0x18096c, _0x4db7fd)), _0x18096c;
                    }
                },
                {
                    'key': 'getCanGoPo' + 's',
                    'value': function _0x120905(_0x225482) {
                    }
                },
                {
                    'key': 'checkPosSp' + 'ecial',
                    'value': function _0x1d562d(_0x1c3f0c) {
                        var _0x213b33 = _0x516ba4['canPickCub' + 'es'][this['stageID']];
                        for (var _0x1e191c = 0x0; _0x1e191c < _0x213b33['length']; _0x1e191c++) {
                            var _0x73e6ed = _0x213b33[_0x1e191c];
                            if (Laya['Vector3']['equals'](_0x73e6ed['transform']['position'], _0x1c3f0c))
                                return 'pick';
                        }
                        if (Laya['Vector3']['equals'](_0x1c3f0c, _0x516ba4['endPos'][this['stageID']]))
                            return 'end';
                        if (Laya['Vector3']['equals'](_0x1c3f0c, _0x516ba4['startPos'][this['stageID']]))
                            return 'start';
                        var _0x803635 = _0x516ba4['trailPos'][this['stageID']];
                        for (var _0x5d06e8 = 0x0; _0x5d06e8 < _0x803635['length']; _0x5d06e8++) {
                            if (Laya['Vector3']['equals'](_0x1c3f0c, _0x803635[_0x5d06e8]))
                                return 'trail';
                        }
                        var _0x14ac4d = _0x516ba4['spring'];
                        for (var _0x27fbb4 = 0x0; _0x27fbb4 < _0x14ac4d['length']; _0x27fbb4++) {
                            var _0xe2dfbb = _0x14ac4d[_0x27fbb4]['transform']['position'];
                            if (Laya['Vector3']['equals'](_0x1c3f0c, _0xe2dfbb))
                                return 'spring';
                        }
                        var _0x148f41 = _0x516ba4['beacon'];
                        for (var _0x516c88 = 0x0; _0x516c88 < _0x148f41['length']; _0x516c88++) {
                            var _0x522447 = _0x148f41[_0x516c88]['transform']['position'];
                            if (Laya['Vector3']['equals'](_0x1c3f0c, _0x522447))
                                return 'beacon';
                        }
                        var _0x303190 = _0x516ba4['wormHoleIn'], _0x25c2bd = _0x516ba4['wormHoleOu' + 't'];
                        for (var _0xee0d42 in _0x303190) {
                            var _0x3ab012 = _0x303190[_0xee0d42];
                            if (Laya['Vector3']['equals'](_0x1c3f0c, _0x3ab012))
                                return 'hole';
                        }
                        for (var _0x44e736 in _0x25c2bd) {
                            var _0x83bdea = _0x25c2bd[_0x44e736];
                            if (Laya['Vector3']['equals'](_0x1c3f0c, _0x83bdea))
                                return 'hole';
                        }
                        return '';
                    }
                },
                {
                    'key': 'pickPosCub' + 'e',
                    'value': function _0xc6744a(_0x41a73f) {
                        var _0x3f6dac = this, _0x49326c = _0x516ba4['canPickCub' + 'es'][this['stageID']];
                        for (var _0x284f4b = 0x0; _0x284f4b < _0x49326c['length']; _0x284f4b++) {
                            var _0x3ea846 = _0x49326c[_0x284f4b];
                            if (Laya['Vector3']['equals'](_0x3ea846['transform']['position'], _0x41a73f))
                                return _0x49326c['splice'](_0x284f4b, 0x1), _0x33885f['player']['addChild'](_0x3ea846), this['CubePickDo'](_0x3ea846), _0x4f8bb7['FadeIn'](_0x1e40f9['Jump']), 0x0 == _0x49326c['length'] && (this['collectAll' + 'UI']['set_visibl' + 'e'](!0x0), setTimeout(function () {
                                    Laya['Tween']['to'](_0x3f6dac['collectAll' + 'UI'], { 'alpha': 0x0 }, 0x12c), setTimeout(function () {
                                        _0x3f6dac['collectAll' + 'UI']['set_visibl' + 'e'](!0x1), _0x3f6dac['collectAll' + 'UI']['alpha'] = 0x1;
                                    }, 0x3e8);
                                }, 0x3e8), console['log']('该板块收集完毕', this['stageID']), _0x33885f['fxControll' + 'er']['BornFinish' + 'Fx'](_0x33885f['player']['transform']['position'])), !0x0;
                        }
                        return !0x1;
                    }
                },
                {
                    'key': 'CubePickDo',
                    'value': function _0x91ba16(_0x32068e) {
                        _0x5afa76['vibrateSho' + 'rt'](), this['nowCube']['push'](_0x32068e), _0x32068e['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0.3 * this['nowCube']['length'], 0x0), _0x33885f['model']['transform']['localPosit' + 'ionY'] = 0.3 + 0.3 * this['nowCube']['length'];
                        var _0x3e089d = _0x5afa76['getSpriteP' + 'osBySprite' + '3DPoint'](_0x33885f['model'], new Laya['Vector2'](0x0, 0x0)), _0x418e30 = new Laya['FontClip'](this['addOneUI']['skin'], '0123456789' + '*+');
                        _0x418e30['value'] = '+1', _0x418e30['x'] = _0x3e089d['x'] - 0x32, _0x418e30['y'] = _0x3e089d['y'] - 0x64, this['scene']['addChild'](_0x418e30), Laya['Tween']['to'](_0x418e30, {
                            'y': _0x418e30['y'] - 0x64,
                            'alpha': 0x0
                        }, 0x1f4, null, Laya['Handler']['create'](this, function () {
                            _0x418e30['destroy']();
                        }));
                    }
                },
                {
                    'key': 'checkPosTr' + 'ail',
                    'value': function _0x4914d6(_0x5bb566) {
                        var _0x265b19 = _0x516ba4['trailPos'][this['stageID']];
                        if (!_0x265b19)
                            return !0x0;
                        for (var _0x37c24b = 0x0; _0x37c24b < _0x265b19['length']; _0x37c24b++) {
                            if (Laya['Vector3']['equals'](_0x5bb566, _0x265b19[_0x37c24b])) {
                                if (this['nowCube']['length'] <= 0x1)
                                    return !0x1;
                                var _0x4736bd = this['nowCube'][this['nowCube']['length'] - 0x1];
                                return _0x33885f['scene3D']['addChild'](_0x4736bd), _0x4736bd['transform']['position'] = _0x5bb566, this['putDownCub' + 'e'](_0x4736bd), this['nowCube']['splice'](this['nowCube']['length'] - 0x1, 0x1), _0x516ba4['trailPos'][this['stageID']]['splice'](_0x37c24b, 0x1), _0x33885f['model']['transform']['localPosit' + 'ionY'] = 0.3 + 0.3 * this['nowCube']['length'], _0x5afa76['vibrateSho' + 'rt'](), !0x0;
                            }
                        }
                        return !0x0;
                    }
                },
                {
                    'key': 'checkPosSp' + 'ring',
                    'value': function _0x5216de(_0x4a11a4, _0x345d90) {
                        var _0x3bafc6 = _0x516ba4['spring'];
                        for (var _0x2ec31a = 0x0; _0x2ec31a < _0x3bafc6['length']; _0x2ec31a++) {
                            var _0x4fc807 = _0x3bafc6[_0x2ec31a]['transform']['position'];
                            if (Laya['Vector3']['equals'](_0x4a11a4, _0x4fc807)) {
                                _0x5afa76['objectScal' + 'eTips'](_0x3bafc6[_0x2ec31a]);
                                var _0x14c962 = _0x5afa76['getTransfo' + 'rmForward'](_0x3bafc6[_0x2ec31a]['transform']);
                                return Laya['Vector3']['normalize'](_0x14c962, _0x14c962), 0x1 == _0x14c962['z'] ? 'right' == _0x345d90 ? this['doCall']('down') : 'up' == _0x345d90 && this['doCall']('left') : 0x1 == _0x14c962['x'] ? 'left' == _0x345d90 ? this['doCall']('down') : 'up' == _0x345d90 && this['doCall']('right') : -0x1 == _0x14c962['x'] ? 'right' == _0x345d90 ? this['doCall']('up') : 'down' == _0x345d90 && this['doCall']('left') : -0x1 == _0x14c962['z'] && ('left' == _0x345d90 ? this['doCall']('up') : 'down' == _0x345d90 && this['doCall']('right')), !0x0;
                            }
                        }
                        return !0x1;
                    }
                },
                {
                    'key': 'checkPosBe' + 'acon',
                    'value': function _0x3dbf24(_0x5281d7) {
                        var _0x163278 = _0x516ba4['beacon'];
                        for (var _0xfa0089 = 0x0; _0xfa0089 < _0x163278['length']; _0xfa0089++) {
                            var _0x316e47 = _0x163278[_0xfa0089]['transform']['position'];
                            if (Laya['Vector3']['equals'](_0x5281d7, _0x316e47)) {
                                _0x5afa76['objectScal' + 'eTips'](_0x163278[_0xfa0089]);
                                var _0x31708b = _0x5afa76['getTransfo' + 'rmForward'](_0x163278[_0xfa0089]['transform']);
                                return Laya['Vector3']['normalize'](_0x31708b, _0x31708b), 0x1 == _0x31708b['z'] ? this['doCall']('left') : 0x1 == _0x31708b['x'] ? this['doCall']('down') : -0x1 == _0x31708b['x'] ? this['doCall']('up') : -0x1 == _0x31708b['z'] && this['doCall']('right'), !0x0;
                            }
                        }
                        return !0x1;
                    }
                },
                {
                    'key': 'checkPosWo' + 'rm',
                    'value': function _0x2c4fe4(_0x2cdfb2) {
                        var _0x512e62 = this, _0x2b80b1 = _0x516ba4['wormHoleIn'], _0x1e564e = _0x516ba4['wormHoleOu' + 't'];
                        for (var _0x3a9bd5 in _0x2b80b1) {
                            var _0x423ada = _0x2b80b1[_0x3a9bd5];
                            if (Laya['Vector3']['equals'](_0x2cdfb2, _0x423ada)) {
                                var _0x1fd88d = function () {
                                    var _0x1c318a = new _0x4ff7a0(), _0x4bb1b7 = _0x5afa76['Vector3Red' + 'uce'](_0x2cdfb2, new Laya['Vector3'](0x0, 0.3 * _0x512e62['nowCube']['length'] + 1.5, 0x0)), _0x23b7da = _0x512e62['GoOutWorm'](_0x3a9bd5), _0x4094f2 = _0x5afa76['Vector3Red' + 'uce'](_0x23b7da, new Laya['Vector3'](0x0, 0.3 * _0x512e62['nowCube']['length'] + 1.5, 0x0));
                                    return {
                                        'v': (_0x1c318a['toTween'](_0x33885f['player'], { 'pos': _0x4bb1b7 }, 0x3e8, function () {
                                            _0x33885f['player']['transform']['position'] = _0x4094f2;
                                        })['then']({ 'pos': _0x23b7da }, 0x3e8, function () {
                                            _0x512e62['callDoneAn' + 'dCanel']();
                                        }), !0x0)
                                    };
                                }();
                                if (_typeof2(_0x1fd88d) === 'object')
                                    return _0x1fd88d['v'];
                            }
                        }
                        for (var _0x3cac4f in _0x1e564e) {
                            var _0xecdb29 = _0x1e564e[_0x3cac4f];
                            if (Laya['Vector3']['equals'](_0x2cdfb2, _0xecdb29)) {
                                var _0x46690a = function () {
                                    var _0x33cebf = new _0x4ff7a0(), _0x5a2bac = _0x5afa76['Vector3Red' + 'uce'](_0x2cdfb2, new Laya['Vector3'](0x0, 0.3 * _0x512e62['nowCube']['length'] + 2.5, 0x0)), _0xe73897 = _0x512e62['GoInWorm'](_0x3cac4f), _0x4f2ec3 = _0x5afa76['Vector3Red' + 'uce'](_0xe73897, new Laya['Vector3'](0x0, 0.3 * _0x512e62['nowCube']['length'] + 2.5, 0x0));
                                    return {
                                        'v': (_0x33cebf['toTween'](_0x33885f['player'], { 'pos': _0x5a2bac }, 0x3e8, function () {
                                            _0x33885f['player']['transform']['position'] = _0x4f2ec3;
                                        })['then']({ 'pos': _0xe73897 }, 0x3e8, function () {
                                            _0x512e62['callDoneAn' + 'dCanel']();
                                        }), !0x0)
                                    };
                                }();
                                if (_typeof2(_0x46690a) === 'object')
                                    return _0x46690a['v'];
                            }
                        }
                        return !0x1;
                    }
                },
                {
                    'key': 'GoOutWorm',
                    'value': function _0x1ad827(_0x5544a7) {
                        return _0x516ba4['wormHoleOu' + 't'][_0x5544a7];
                    }
                },
                {
                    'key': 'GoInWorm',
                    'value': function _0x5da2f3(_0x2b57a4) {
                        return _0x516ba4['wormHoleIn'][_0x2b57a4];
                    }
                },
                {
                    'key': 'putDownCub' + 'e',
                    'value': function _0x37346a(_0x3c786f) {
                        var _0x36a17b = _0x3c786f['transform']['position']['clone'](), _0x57e5a = _0x3c786f['transform']['position']['clone']();
                        _0x57e5a['y'] += 0.3, _0x3c786f['transform']['position'] = _0x57e5a, _0x5afa76['setTransRo' + 'tEulerX'](_0x3c786f['transform'], 0x0), new _0x4ff7a0()['toTween'](_0x3c786f, {
                            'pos': _0x36a17b,
                            'rot': new Laya['Vector3'](0x0, 0x0, 0x0)
                        }, 0x1f4);
                    }
                },
                {
                    'key': 'checkPosSt' + 'op',
                    'value': function _0x5d1d40(_0x2ea19f) {
                        var _0x5f2fdd = _0x516ba4['stop'];
                        for (var _0x37b930 = 0x0; _0x37b930 < _0x5f2fdd['length']; _0x37b930++) {
                            if (Laya['Vector3']['equals'](_0x5f2fdd[_0x37b930], _0x2ea19f))
                                return !0x0;
                        }
                        return !0x1;
                    }
                }
            ]), _0x513b68;
        }(_0x3dd129), _0x30c2d0 = function (_0x31c45b) {
            _inherits2(_0x15d2a9, _0x31c45b);
            var _0x34747c = _createSuper2(_0x15d2a9);
            function _0x15d2a9() {
                var _0xcd14f6;
                return _classCallCheck2(this, _0x15d2a9), (_0xcd14f6 = _0x34747c['apply'](this, arguments), _0xcd14f6['offset'] = new Laya['Vector3'](-0.25, 0x12, -0x8), _0xcd14f6['offsetXmin'] = -0x1, _0xcd14f6['offsetXmax'] = 0.5), _0xcd14f6;
            }
            return _createClass2(_0x15d2a9, [
                {
                    'key': 'onAwake',
                    'value': function _0x17e26a() {
                        this['offset']['x'] = (this['offsetXmax'] - this['offsetXmin']) / 0x2 + this['offsetXmin'], this['self'] = this['owner'], this['target'] = _0x33885f['player'];
                        var _0x356367 = this['target']['transform']['position']['clone']();
                        this['self']['transform']['position'] = _0x5afa76['Vector3Add'](_0x356367, this['offset']), this['justGo']();
                    }
                },
                {
                    'key': 'onUpdate',
                    'value': function _0x190fc7() {
                        var _0x243709 = this['target']['transform']['position']['clone'](), _0x5782f9 = this['self']['transform']['position']['clone'](), _0x4874d3 = _0x5afa76['Vector3Red' + 'uce'](_0x5782f9, _0x243709);
                        _0x4874d3['x'] < this['offsetXmin'] ? _0x4874d3['x'] = this['offsetXmin'] : _0x4874d3['x'] > this['offsetXmax'] && (_0x4874d3['x'] = this['offsetXmax']), _0xd81128['instance'] && (_0xd81128['instance']['nowCube']['length'] > 0x1e ? _0x4874d3['y'] = this['offset']['y'] + 0x3 : _0x4874d3['y'] = this['offset']['y']), _0x4874d3['z'] = this['offset']['z'], _0x243709['y'] = 0x0;
                        var _0x17b359 = _0x5afa76['Vector3Add'](_0x243709, _0x4874d3), _0x5ab754 = new Laya['Vector3']();
                        Laya['Vector3']['lerp'](_0x5782f9, _0x17b359, 0.1, _0x5ab754), this['self']['transform']['position'] = _0x5ab754;
                    }
                },
                {
                    'key': 'justGo',
                    'value': function _0x373794() {
                        var _0x2589f7 = this['target']['transform']['position']['clone'](), _0x35b58f = this['self']['transform']['position']['clone'](), _0x2ac9a3 = _0x5afa76['Vector3Red' + 'uce'](_0x35b58f, _0x2589f7);
                        _0x2ac9a3['x'] < this['offsetXmin'] ? _0x2ac9a3['x'] = this['offsetXmin'] : _0x2ac9a3['x'] > this['offsetXmax'] && (_0x2ac9a3['x'] = this['offsetXmax']), _0xd81128['instance'] && (_0xd81128['instance']['nowCube']['length'] > 0x1e ? _0x2ac9a3['y'] = this['offset']['y'] + 0x3 : _0x2ac9a3['y'] = this['offset']['y']), _0x2ac9a3['z'] = this['offset']['z'], _0x2589f7['y'] = 0x0;
                        var _0x2b1ba8 = _0x5afa76['Vector3Add'](_0x2589f7, _0x2ac9a3);
                        this['self']['transform']['position'] = _0x2b1ba8;
                    }
                },
                {
                    'key': 'onDestroy',
                    'value': function _0x37959d() {
                        this['justGo']();
                    }
                }
            ]), _0x15d2a9;
        }(Laya['Script']), _0x516ba4 = function () {
            function _0x37bca0() {
                _classCallCheck2(this, _0x37bca0);
            }
            return _createClass2(_0x37bca0, null, [
                {
                    'key': 'Init',
                    'value': function _0x2040b4() {
                        Laya['timer']['clearAll'](this);
                        for (var _0x241009 = 0x0; _0x241009 < _0x33885f['usingPrefa' + 'bs']['length']; _0x241009++) {
                            _0x33885f['usingPrefa' + 'bs'][_0x241009]['destroy']();
                        }
                        this['canPickCub' + 'es'] = [], this['roadCubes'] = [], this['spring'] = [], this['beacon'] = [], this['endPos'] = [], this['startPos'] = [], this['wormHoleIn'] = {}, this['wormHoleOu' + 't'] = {}, this['trailPos'] = [], this['stageID'] = 0x0, this['stop'] = [], _0x33885f['collider']['ColliderIn' + 'it'](), this['loadStageC' + 'onfigs']();
                    }
                },
                {
                    'key': 'PlayerInit',
                    'value': function _0x2d7299() {
                        _0x33885f['model'] = _0x33885f['player']['getChildBy' + 'Name']('Model');
                        for (var _0x24d72c = 0x1; _0x24d72c < _0x33885f['model']['numChildre' + 'n']; _0x24d72c++) {
                            _0x33885f['model']['getChildAt'](_0x24d72c)['active'] = !0x1;
                        }
                        var _0x1a2470 = parseInt(_0x83809['GetPlayerD' + 'ata']()['nowPeople']);
                        _0x33885f['model']['getChildAt'](_0x1a2470 + 0x1)['active'] = !0x0, _0x33885f['model']['getChildAt'](_0x1a2470 + 0xa)['active'] = !0x0, _0x4f8bb7['playAnim'](_0x1e40f9['Idle']), _0x33885f['model']['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, 0.3, 0x0), _0x5afa76['setTransRo' + 'tEulerY'](_0x33885f['model']['transform'], -0x78), _0x33885f['mainCam']['addCompone' + 'nt'](_0x30c2d0)['justGo'](), _0x5afa76['setTransRo' + 'tEulerX'](_0x33885f['mainCam']['transform'], -0x41), _0x5afa76['setTransRo' + 'tEulerY'](_0x33885f['mainCam']['transform'], -0xb0), _0x33885f['fxControll' + 'er']['BornMoveSm' + 'okeFx']();
                    }
                },
                {
                    'key': 'loadStageC' + 'onfigs',
                    'value': function _0x2450d3() {
                        var _0x395fd5 = this, _0x3aba90 = _0x83809['GetPlayerD' + 'ata']()['grade'], _0x1d092d = (_0x3aba90 - 0x1) % 0xe + 0x1;
                        console['log']('grade:', _0x3aba90, 'level:', _0x1d092d);
                        var _0x30e6d6 = 'res/Stages' + '/Level' + _0x1d092d['toString']() + '.json', _0x528b00 = [
                                0x1,
                                0x2,
                                0x3
                            ], _0x2d0ba3 = [];
                        for (var _0x2bb41d = 0x0; _0x2bb41d < 0x3; _0x2bb41d++) {
                            _0x2d0ba3['push'](_0x5afa76['takeRandom' + 'InArray'](_0x528b00));
                        }
                        this['stageColor'] = _0x2d0ba3, _0x5afa76['loadJsonFi' + 'le'](_0x30e6d6, function (_0x2317e3) {
                            _0x83809['GetPlayerD' + 'ata']()['grade'];
                            var _0x468f97 = [
                                _0x2317e3[0x0],
                                _0x2317e3[0x1]
                            ];
                            _0x2317e3[0x2] && _0x468f97['push'](_0x2317e3[0x2]), _0x395fd5['roadCubes'] = new Array(_0x468f97['length']), _0x395fd5['endPos'] = new Array(_0x468f97['length']), _0x395fd5['startPos'] = new Array(_0x468f97['length']), _0x395fd5['canPickCub' + 'es'] = new Array(_0x468f97['length']), _0x395fd5['trailPos'] = new Array(_0x468f97['length']), _0x395fd5['cubeCount'] = 0x0, _0x395fd5['trailCubeC' + 'ount'] = 0x0;
                            for (var _0x136081 = 0x0; _0x136081 < _0x468f97['length']; _0x136081++) {
                                _0x395fd5['stageID'] = _0x136081, _0x395fd5['roadCubes'][_0x136081] = [], _0x395fd5['endPos'][_0x136081] = [], _0x395fd5['startPos'][_0x136081] = [], _0x395fd5['canPickCub' + 'es'][_0x136081] = [], _0x395fd5['trailPos'][_0x136081] = [], _0x395fd5['StageBornD' + 'o'](_0x468f97[_0x136081]['stage']);
                            }
                            var _0x56a8f7 = _0x33885f['scene3D']['getChildBy' + 'Name']('End'), _0x490500 = _0x395fd5['endPos'][_0x395fd5['endPos']['length'] - 0x1]['clone']();
                            _0x490500['z'] -= 0.5, _0x56a8f7['transform']['position'] = _0x490500;
                            var _0x21206f = _0x395fd5['cubeCount'] - _0x395fd5['trailCubeC' + 'ount'], _0x5354dd = Math['floor'](_0x21206f / 0x5), _0x3bab4b = _0x21206f % 0x5;
                            _0x395fd5['endItemCou' + 'nt'] = _0x5354dd, _0x395fd5['BornEndIte' + 'm'](_0x5354dd, _0x3bab4b), _0x395fd5['PlayerInit']();
                        });
                    }
                },
                {
                    'key': 'StageBornD' + 'o',
                    'value': function _0x498b4f(_0x27f54d) {
                        for (var _0x590f45 = 0x0; _0x590f45 < _0x27f54d['length']; _0x590f45++) {
                            var _0x534fdc = _0x27f54d[_0x590f45]['name']['split']('_'), _0x3167f4 = new Laya['Vector3'](parseFloat(_0x27f54d[_0x590f45]['position']['x']), parseFloat(_0x27f54d[_0x590f45]['position']['y']), parseFloat(_0x27f54d[_0x590f45]['position']['z'])), _0x181f4c = new Laya['Vector3'](parseFloat(_0x27f54d[_0x590f45]['rotation']['x']), parseFloat(_0x27f54d[_0x590f45]['rotation']['y']), parseFloat(_0x27f54d[_0x590f45]['rotation']['z'])), _0x148ed3 = new Laya['Vector3'](parseFloat(_0x27f54d[_0x590f45]['scale']['x']), parseFloat(_0x27f54d[_0x590f45]['scale']['y']), parseFloat(_0x27f54d[_0x590f45]['scale']['z']));
                            switch (_0x534fdc[0x0]) {
                            case 'Ground':
                                this['BornGround'](_0x3167f4, _0x181f4c, _0x148ed3);
                                break;
                            case 'BlockCube':
                                this['BornBlockC' + 'ube'](_0x3167f4, _0x181f4c, _0x148ed3);
                                break;
                            case 'PickCube':
                                this['BornPickCu' + 'be'](_0x3167f4);
                                break;
                            case 'StartPoint':
                                0x0 == this['stageID'] && this['SetPlayerP' + 'os'](_0x3167f4), this['startPos'][this['stageID']] = _0x3167f4, this['roadCubes'][this['stageID']]['push'](_0x3167f4);
                                break;
                            case 'Trail':
                                this['BornTrail'](_0x3167f4, _0x181f4c, _0x148ed3);
                                break;
                            case 'TrailGroun' + 'd':
                                this['BornTrailG' + 'round'](_0x3167f4);
                                break;
                            case 'EndPoint':
                                this['endPos'][this['stageID']] = _0x3167f4, this['roadCubes'][this['stageID']]['push'](_0x3167f4);
                                break;
                            case 'Spring':
                                this['BornSpring'](_0x3167f4, _0x181f4c);
                                break;
                            case 'Beacon':
                                this['BornBeacon'](_0x3167f4, _0x181f4c);
                                break;
                            case 'SpringStag' + 'e':
                                this['BornSpring' + 'Stage'](_0x3167f4, _0x181f4c);
                                break;
                            case 'Wormhole':
                                this['BornWormho' + 'le'](_0x3167f4, _0x534fdc[0x1], _0x534fdc[0x2]);
                                break;
                            case 'Stop':
                                this['BornStop'](_0x3167f4);
                            }
                        }
                    }
                },
                {
                    'key': 'BornGround',
                    'value': function _0x6d210e(_0x5b05fb, _0x5aa2e2, _0x42a114) {
                        var _0x3528a4 = 'Ground' + this['stageColor'][0x0]['toString'](), _0xd7496 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], _0x3528a4), _0x34d1c8 = this['BornObj'](_0xd7496, _0x5b05fb);
                        _0x34d1c8['transform']['localRotat' + 'ionEuler'] = _0x5aa2e2, _0x34d1c8['transform']['localScale'] = _0x42a114;
                    }
                },
                {
                    'key': 'BornBlockC' + 'ube',
                    'value': function _0x103e9d(_0x214af6, _0x371f23, _0x5551b3) {
                        var _0x7ae180 = 'BlockCube' + this['stageColor'][0x1]['toString'](), _0x3935a4 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], _0x7ae180), _0x5a8114 = this['BornObj'](_0x3935a4, _0x214af6);
                        _0x5a8114['transform']['localRotat' + 'ionEuler'] = _0x371f23, _0x5a8114['transform']['localScale'] = _0x5551b3;
                    }
                },
                {
                    'key': 'BornPickCu' + 'be',
                    'value': function _0x35ae2d(_0x4548e) {
                        for (var _0x4a3584 = 0x0; _0x4a3584 < this['canPickCub' + 'es'][this['stageID']]['length']; _0x4a3584++) {
                            if (Laya['Vector3']['equals'](this['canPickCub' + 'es'][this['stageID']][_0x4a3584]['transform']['position']['clone'](), _0x4548e))
                                return void console['log']('有相同');
                        }
                        var _0x432847 = 'PickCube' + this['stageColor'][0x2]['toString'](), _0x54965b = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], _0x432847), _0x2ed64e = this['BornObj'](_0x54965b, _0x4548e);
                        this['roadCubes'][this['stageID']]['push'](_0x2ed64e['transform']['position']['clone']()), this['canPickCub' + 'es'][this['stageID']]['push'](_0x2ed64e), this['cubeCount']++;
                    }
                },
                {
                    'key': 'BornTrail',
                    'value': function _0x59270f(_0x52fcec, _0x1596d6, _0x70127c) {
                        var _0x118469 = 'Trail' + this['stageColor'][0x1]['toString'](), _0x3acc15 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], _0x118469), _0x1c9908 = this['BornObj'](_0x3acc15, _0x52fcec);
                        _0x1c9908['transform']['localRotat' + 'ionEuler'] = _0x1596d6, _0x1c9908['transform']['localScale'] = _0x70127c;
                        var _0xc992e = _0x5afa76['getTransfo' + 'rmForward'](_0x1c9908['transform']);
                        if (Laya['Vector3']['normalize'](_0xc992e, _0xc992e), _0x52fcec['z'] % 0x1 == 0.5)
                            for (var _0x89ef30 = 0x0; _0x89ef30 <= _0x70127c['z']; _0x89ef30++) {
                                var _0x5ae261 = _0x5afa76['Vector3Axi' + 's'](_0xc992e, _0x89ef30), _0x58b9e2 = _0x5afa76['Vector3Add'](_0x52fcec, _0x5ae261);
                                this['addTrail'](_0x58b9e2);
                            }
                        else {
                            if (_0x52fcec['z'] % 0x1 == 0x0) {
                                var _0x1e9d40 = _0x70127c['z'] - 0.5, _0x5b2162 = _0x5afa76['Vector3Add'](_0x52fcec, _0x5afa76['Vector3Axi' + 's'](_0xc992e, 0.5));
                                for (var _0x11a7fa = 0x0; _0x11a7fa <= _0x1e9d40; _0x11a7fa++) {
                                    var _0x59c666 = _0x5afa76['Vector3Axi' + 's'](_0xc992e, _0x11a7fa), _0xc33e6c = _0x5afa76['Vector3Add'](_0x5b2162, _0x59c666);
                                    this['addTrail'](_0xc33e6c);
                                }
                            }
                        }
                    }
                },
                {
                    'key': 'addTrail',
                    'value': function _0x4b113c(_0x1431e2) {
                        for (var _0x29ca1e = 0x0; _0x29ca1e < this['trailPos'][this['stageID']]['length']; _0x29ca1e++) {
                            if (Laya['Vector3']['equals'](this['trailPos'][this['stageID']][_0x29ca1e], _0x1431e2))
                                return;
                        }
                        this['roadCubes'][this['stageID']]['push'](_0x1431e2), this['trailPos'][this['stageID']]['push'](_0x1431e2), this['trailCubeC' + 'ount']++;
                    }
                },
                {
                    'key': 'BornTrailG' + 'round',
                    'value': function _0x57a499(_0x290874) {
                        var _0x4f788d = 'TrailGroun' + 'd' + this['stageColor'][0x1]['toString'](), _0x12c114 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], _0x4f788d);
                        this['BornObj'](_0x12c114, _0x290874);
                    }
                },
                {
                    'key': 'BornSpring',
                    'value': function _0x19fa3e(_0x2d93b7, _0x773b19) {
                        var _0x303695 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], 'Spring'), _0x27ac1b = this['BornObj'](_0x303695, _0x2d93b7);
                        _0x27ac1b['transform']['localRotat' + 'ionEuler'] = _0x773b19, this['spring']['push'](_0x27ac1b);
                    }
                },
                {
                    'key': 'BornBeacon',
                    'value': function _0x8fb0f(_0x46b43a, _0x17843a) {
                        var _0x4055b8 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], 'Beacon'), _0x44239b = this['BornObj'](_0x4055b8, _0x46b43a);
                        _0x44239b['transform']['localRotat' + 'ionEuler'] = _0x17843a, this['beacon']['push'](_0x44239b);
                    }
                },
                {
                    'key': 'BornSpring' + 'Stage',
                    'value': function _0x40f144(_0x52996e, _0x104a2a) {
                        var _0x285ddb = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], 'SpringStag' + 'e'), _0x13f3bf = this['BornObj'](_0x285ddb, _0x52996e);
                        _0x13f3bf['transform']['localRotat' + 'ionEuler'] = _0x104a2a, this['spring']['push'](_0x13f3bf);
                    }
                },
                {
                    'key': 'BornWormho' + 'le',
                    'value': function _0x484d4e(_0x5e67f2, _0x4769e2, _0x1da641) {
                        var _0x5d6b35 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], 'Wormhole'), _0xcdeea5 = this['BornObj'](_0x5d6b35, _0x5e67f2);
                        'In' == _0x1da641 ? this['wormHoleIn'][_0x4769e2] = _0xcdeea5['transform']['position']['clone']() : 'Out' == _0x1da641 && (this['wormHoleOu' + 't'][_0x4769e2] = _0xcdeea5['transform']['position']['clone']());
                    }
                },
                {
                    'key': 'BornStop',
                    'value': function _0x3b7f54(_0x171001) {
                        var _0x74aa65 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], 'Stop'), _0xd3864 = this['BornObj'](_0x74aa65, _0x171001);
                        this['stop']['push'](_0xd3864['transform']['position']['clone']());
                    }
                },
                {
                    'key': 'BornEndIte' + 'm',
                    'value': function _0x229249(_0x3986c6, _0x329dbd) {
                        for (var _0x2423f0 = 0x0; _0x2423f0 < _0x3986c6; _0x2423f0++) {
                            var _0x4df345 = 'EndItem' + (_0x2423f0 % 0x7 + 0x1)['toString'](), _0x15eb62 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], _0x4df345), _0x5e0d22 = this['endPos'][this['endPos']['length'] - 0x1]['clone']();
                            _0x5e0d22['z'] += 0x14 + 0x7 * _0x2423f0;
                            var _0x2c7c11 = this['BornObj'](_0x15eb62, _0x5e0d22), _0x2601f7 = _0x2c7c11['getChildBy' + 'Name']('first'), _0x2d4e7f = _0x2c7c11['getChildBy' + 'Name']('second'), _0x9a5cec = _0x2c7c11['getChildBy' + 'Name']('point'), _0x4b0dc8 = _0x2c7c11['getChildBy' + 'Name']('x');
                            this['BornNumber'](0x1 + Math['floor'](_0x2423f0 / 0xa), _0x2601f7['transform']['position']['clone']()), this['BornNumber'](_0x2423f0 % 0xa, _0x2d4e7f['transform']['position']['clone']()), this['BornPoint'](_0x9a5cec['transform']['position']['clone']()), this['BornAxis'](_0x4b0dc8['transform']['position']['clone']()), _0x2601f7['destroy'](), _0x2d4e7f['destroy'](), _0x9a5cec['destroy'](), _0x4b0dc8['destroy']();
                        }
                        var _0x50a3ff = _0x33885f['scene3D']['getChildBy' + 'Name']('End')['getChildBy' + 'Name']('Chest'), _0x31731a = _0x50a3ff['transform']['localPosit' + 'ion']['clone']();
                        _0x31731a['z'] = 0x14 + 0x7 * _0x3986c6 + 0.5, _0x31731a['y'] = 0.31 + 0.3 * _0x329dbd, _0x50a3ff['transform']['localPosit' + 'ion'] = _0x31731a;
                    }
                },
                {
                    'key': 'BornNumber',
                    'value': function _0xa25a2(_0x147077, _0x49359b) {
                        var _0x1f2770 = _0x147077['toString'](), _0x32bf80 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], _0x1f2770);
                        this['BornObj'](_0x32bf80, _0x49359b);
                    }
                },
                {
                    'key': 'BornPoint',
                    'value': function _0x4c7168(_0x54079e) {
                        var _0x5a3db5 = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], 'point');
                        this['BornObj'](_0x5a3db5, _0x54079e);
                    }
                },
                {
                    'key': 'BornAxis',
                    'value': function _0x259499(_0x2b22b6) {
                        var _0x4f4aba = _0x5afa76['findNodeBy' + 'Name'](_0x33885f['prefabs'], 'axis');
                        this['BornObj'](_0x4f4aba, _0x2b22b6);
                    }
                },
                {
                    'key': 'SetPlayerP' + 'os',
                    'value': function _0x58036f(_0x6b13a8) {
                        _0x33885f['player']['transform']['position'] = _0x6b13a8;
                    }
                },
                {
                    'key': 'BornObj',
                    'value': function _0x44bcf8(_0x48b3d2) {
                        var _0x47d2cc = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : new Laya['Vector3'](0x0, 0x0, 0x0), _0x9f8385 = _0x48b3d2['clone']();
                        return _0x9f8385 && (_0x33885f['scene3D']['addChild'](_0x9f8385), _0x9f8385['transform']['position'] = _0x47d2cc, _0x33885f['usingPrefa' + 'bs']['push'](_0x9f8385)), _0x9f8385;
                    }
                }
            ]), _0x37bca0;
        }();
    _0x516ba4['wallBornCo' + 'unt'] = 0x0, _0x516ba4['roadCubes'] = [], _0x516ba4['canPickCub' + 'es'] = [], _0x516ba4['trailPos'] = [], _0x516ba4['spring'] = [], _0x516ba4['beacon'] = [], _0x516ba4['stageID'] = 0x0, _0x516ba4['endPos'] = [], _0x516ba4['startPos'] = [], _0x516ba4['wormHoleIn'] = {}, _0x516ba4['wormHoleOu' + 't'] = {}, _0x516ba4['stop'] = [], _0x516ba4['stageColor'] = [], _0x516ba4['cubeCount'] = 0x0, _0x516ba4['trailCubeC' + 'ount'] = 0x0, _0x516ba4['endItemCou' + 'nt'] = 0x0, function (_0x226b97) {
        _0x226b97['LOADING'] = 'Loading.sc' + 'ene', _0x226b97['STARTMENU'] = 'StartMenu.' + 'scene', _0x226b97['STAGEUI'] = 'StageUI.sc' + 'ene', _0x226b97['ENDMENU'] = 'EndMenu.sc' + 'ene', _0x226b97['SHOP'] = 'Shop.scene', _0x226b97['STAGELOADI' + 'NG'] = 'StageLoadi' + 'ng.scene', _0x226b97['SkinLock'] = 'SkinLock.s' + 'cene';
    }(_0x338ce2 || (_0x338ce2 = {}));
    var _0x33885f = function () {
        function _0x3ccc3f() {
            _classCallCheck2(this, _0x3ccc3f);
        }
        return _createClass2(_0x3ccc3f, null, [
            {
                'key': 'AddGrade',
                'value': function _0x280159() {
                    var _0x5c30c1 = _0x83809['GetPlayerD' + 'ata']();
                    _0x5c30c1['grade']++, 0x3 == parseInt(_0x5c30c1['grade']) ? _0x5c30c1['peopleActi' + 've'][0x1] = !0x0 : 0xa == parseInt(_0x5c30c1['grade']) ? _0x5c30c1['peopleActi' + 've'][0x2] = !0x0 : parseInt(_0x5c30c1['grade']) > 0x63 && (_0x5c30c1['grade'] = 0x63), _0x83809['SavePlayer' + 'Data'](_0x5c30c1);
                }
            },
            {
                'key': 'readGrade',
                'value': function _0x8fdf1b() {
                    var _0x406440 = _0x83809['GetPlayerD' + 'ata']();
                    return parseInt(_0x406440['grade']);
                }
            },
            {
                'key': 'AddCoin',
                'value': function _0x5d0d86(_0x1efe0e) {
                    var _0x6bc990 = _0x83809['GetPlayerD' + 'ata']();
                    _0x6bc990['coin'] += _0x1efe0e, _0x83809['SavePlayer' + 'Data'](_0x6bc990);
                }
            },
            {
                'key': 'readCoin',
                'value': function _0x5d3488() {
                    var _0x3de35d = _0x83809['GetPlayerD' + 'ata']();
                    return parseInt(_0x3de35d['coin']);
                }
            },
            {
                'key': 'unlock',
                'value': function _0x6ec2ff(_0x1ef8f2) {
                    console['log']('解锁', _0x1ef8f2);
                    var _0x49c4b6 = _0x83809['GetPlayerD' + 'ata']();
                    _0x49c4b6['peopleActi' + 've'][_0x1ef8f2] = !0x0, _0x83809['SavePlayer' + 'Data'](_0x49c4b6);
                }
            },
            {
                'key': 'choose',
                'value': function _0x50fda3(_0x5a92a0) {
                    var _0x5bf743 = _0x83809['GetPlayerD' + 'ata']();
                    _0x5bf743['nowPeople'] = _0x5a92a0, _0x83809['SavePlayer' + 'Data'](_0x5bf743), _0x516ba4['PlayerInit']();
                }
            }
        ]), _0x3ccc3f;
    }();
    _0x33885f['isPure'] = !0x1, _0x33885f['nowScene'] = 0x0, _0x33885f['usingPrefa' + 'bs'] = [], _0x33885f['isSuccess'] = !0x1, _0x33885f['endAxis'] = 0x0, _0x33885f['endCoin'] = 0x0;
    var _0x13c67a = function (_0x314519) {
            _inherits2(_0x3d4ae8, _0x314519);
            var _0x1b24b4 = _createSuper2(_0x3d4ae8);
            function _0x3d4ae8() {
                return _classCallCheck2(this, _0x3d4ae8), _0x1b24b4['apply'](this, arguments);
            }
            return _createClass2(_0x3d4ae8, [
                {
                    'key': 'init',
                    'value': function _0xf19f58() {
                        window['scrollList']['visible'] = !![], (_0x33885f['nowScene'] = 0x3, _0x5afa76['buttonInit'](this['restartBut' + 'ton'], this, this['restartGam' + 'e']), _0x5afa76['buttonInit'](this['videoButto' + 'n'], this, this['videoAward']), _0x5afa76['buttonInit'](this['drawBtn'], this, this['moreGame']));
                        var _0x5187e1 = _0x83809['GetPlayerD' + 'ata']();
                        this['nowCoinVal' + 'ue']['value'] = _0x33885f['endCoin']['toFixed'](0x0), this['gradeValue']['value'] = _0x5187e1['grade']['toString'](), this['combeAxis']['value'] = _0x33885f['endAxis']['toFixed'](0x1) + '*', _0x33885f['AddCoin'](_0x33885f['endCoin']), this['coinValue']['value'] = _0x33885f['readCoin']()['toString'](), _0x20e367['Instance']['showFinish' + 'UI'](this, this['drawBtn']), this['videoButto' + 'n']['visible'] = !![];
                    }
                },
                {
                    'key': 'moreGame',
                    'value': function _0x39ec5b() {
                        _0x20e367['Instance']['clickFinis' + 'hMoreGame']();
                    }
                },
                {
                    'key': 'restartGam' + 'e',
                    'value': function _0x28de26() {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            _0x33885f['AddGrade'](), _0x20e367['Instance']['closeFinis' + 'hUI'](function () {
                                window['scrollList']['visible'] = ![], (_0x516ba4['Init'](), Laya['Scene']['destroy'](_0x338ce2['ENDMENU']), _0x5afa76['loadScene'](_0x338ce2['STARTMENU']));
                            });
                        });
                    }
                },
                {
                    'key': 'videoAward',
                    'value': function _0x475b01() {
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            _0x33885f['AddCoin'](_0x33885f['endCoin']), this['coinValue']['value'] = _0x33885f['readCoin']()['toString'](), this['nowCoinVal' + 'ue']['value'] = (0x2 * _0x33885f['endCoin'])['toFixed'](0x0), this['combeAxis']['value'] = (0x2 * _0x33885f['endAxis'])['toFixed'](0x1) + '*', (_0x33885f['AddGrade'](), _0x20e367['Instance']['closeFinis' + 'hUI'](function () {
                                window['scrollList']['visible'] = ![], (_0x516ba4['Init'](), Laya['Scene']['destroy'](_0x338ce2['ENDMENU']), _0x5afa76['loadScene'](_0x338ce2['STARTMENU']));
                            }));
                        });
                    }
                }
            ]), _0x3d4ae8;
        }(_0x3dd129), _0x51168f = function (_0x12b90c) {
            _inherits2(_0xdeac83, _0x12b90c);
            var _0x468111 = _createSuper2(_0xdeac83);
            function _0xdeac83() {
                var _0x350590;
                return _classCallCheck2(this, _0xdeac83), (_0x350590 = _0x468111['apply'](this, arguments), _0x350590['navData'] = [], _0x350590['hotArr'] = [], _0x350590['fingerId'] = 0x0), _0x350590;
            }
            return _createClass2(_0xdeac83, [
                {
                    'key': 'onOpened',
                    'value': function _0x2c7002(_0x4b373b) {
                        this['size'](Laya['stage']['displayWid' + 'th'], Laya['stage']['displayHei' + 'ght']), _0x4b373b && _0x4b373b['posY'] && (this['navList']['y'] = _0x4b373b['posY']), this['initList']();
                    }
                },
                {
                    'key': 'updateNavD' + 'ata',
                    'value': function _0x4b7150() {
                        this['fingerId'] = Math['floor'](0x6 * Math['random']()), this['navData'] = []['concat'](_0x3d1c55['instance']['shuffleArr'](_0x3d1c55['instance']['navDataArr']))['slice'](0x0, 0x6), this['hotArr'] = [];
                        for (var _0x400711 = 0x0; _0x400711 < this['navData']['length']; _0x400711++) {
                            this['hotArr']['push'](_0x400711);
                        }
                        this['hotArr'] = this['getRandomI' + 'temInArrWi' + 'thoutSelf'](-0x1, this['hotArr'], 0x4), this['navList']['array'] = this['navData'];
                    }
                },
                {
                    'key': 'initList',
                    'value': function _0x505772() {
                        var _0x5be022 = this;
                        this['fingerId'] = Math['floor'](0x6 * Math['random']()), this['navData'] = []['concat'](_0x3d1c55['instance']['shuffleArr'](_0x3d1c55['instance']['navDataArr']))['slice'](0x0, 0x6), this['hotArr'] = [];
                        for (var _0x1bb63f = 0x0; _0x1bb63f < this['navData']['length']; _0x1bb63f++) {
                            this['hotArr']['push'](_0x1bb63f);
                        }
                        this['hotArr'] = this['getRandomI' + 'temInArrWi' + 'thoutSelf'](-0x1, this['hotArr'], 0x2), this['navList']['vScrollBar' + 'Skin'] = '', this['navList']['repeatX'] = 0x3, this['navList']['repeatY'] = 0x2, this['navList']['array'] = this['navData'], this['navList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), Laya['timer']['once'](0x3e8, this, function () {
                            _0x5be022['showTween']();
                        });
                    }
                },
                {
                    'key': 'onListRend' + 'er',
                    'value': function _0xd6fbf5(_0x43f6b3, _0x210b09) {
                        if (!(_0x210b09 >= this['navList']['array']['length'])) {
                            var _0x1bfcd3 = _0x43f6b3['getChildBy' + 'Name']('item'), _0x375bb5 = _0x1bfcd3['getChildBy' + 'Name']('icon');
                            _0x1bfcd3['getChildBy' + 'Name']('finger')['visible'] = _0x210b09 == this['fingerId'], _0x1bfcd3['getChildBy' + 'Name']('hot')['visible'] = -0x1 != this['hotArr']['indexOf'](_0x210b09), _0x375bb5['skin'] = this['navData'][_0x210b09]['icon'], _0x210b09 = _0x3d1c55['instance']['navDataArr']['indexOf'](this['navData'][_0x210b09]), _0x1bfcd3['off'](Laya['Event']['CLICK'], this, this['navCB'], [_0x210b09]), _0x1bfcd3['on'](Laya['Event']['CLICK'], this, this['navCB'], [_0x210b09]);
                        }
                    }
                },
                {
                    'key': 'navCB',
                    'value': function _0x97f01f(_0x132036) {
                        console['log']('click\x20id:', _0x132036), _0x3d1c55['instance']['NavigateAp' + 'p'](_0x132036, function () {
                            _0x20e367['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_quxi' + 'ao_switch'] && _0x20e367['Instance']['clickFinis' + 'hMoreGame']();
                        }, function () {
                        }), this['updateNavD' + 'ata']();
                    }
                },
                {
                    'key': 'showTween',
                    'value': function _0x6e6edc() {
                        var _0x5e0f8a = this, _0x434819 = Math['floor'](Math['random']() * this['navData']['length']), _0xe95312 = this['navList']['cells'][_0x434819];
                        _0xe95312['rotation'] = 0x0, _0x3d1c55['instance']['toRotaion'](_0xe95312, 0x14, 0x96, !0x1, !0x0), Laya['timer']['once'](0x12c, this, function () {
                            _0xe95312['rotation'] = 0x0, _0x3d1c55['instance']['toRotaion'](_0xe95312, -0x14, 0x96, !0x1, !0x0), Laya['timer']['once'](0x12c, _0x5e0f8a, function () {
                                _0xe95312['rotation'] = 0x0, _0x3d1c55['instance']['toRotaion'](_0xe95312, 0xa, 0x32, !0x1, !0x0), Laya['timer']['once'](0x64, _0x5e0f8a, function () {
                                    _0xe95312['rotation'] = 0x0, _0x3d1c55['instance']['toRotaion'](_0xe95312, -0xa, 0x32, !0x1, !0x0), Laya['timer']['once'](0x12c, _0x5e0f8a, function () {
                                        _0x5e0f8a['updateNavD' + 'ata']();
                                    });
                                });
                            });
                        }), Laya['timer']['once'](0xfa0, this, this['showTween']);
                    }
                },
                {
                    'key': 'onClosed',
                    'value': function _0x5b6967() {
                        Laya['timer']['clear'](this, this['showTween']);
                    }
                },
                {
                    'key': 'shuffleArr',
                    'value': function _0x448ff0(_0x3d1863) {
                        var _0x3619b5 = _0x3d1863['length'];
                        for (; _0x3619b5;) {
                            var _0x1a3029 = Math['floor'](Math['random']() * _0x3619b5--), _0x2cb27f = [
                                    _0x3d1863[_0x3619b5],
                                    _0x3d1863[_0x1a3029]
                                ];
                            _0x3d1863[_0x1a3029] = _0x2cb27f[0x0], _0x3d1863[_0x3619b5] = _0x2cb27f[0x1];
                        }
                        return _0x3d1863;
                    }
                },
                {
                    'key': 'getRandomI' + 'temInArrWi' + 'thoutSelf',
                    'value': function _0x37a4fa(_0x3920, _0x28e71d) {
                        var _0x4033b9 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0x1, _0x408bae = []['concat'](_0x28e71d);
                        return _0x408bae['splice'](_0x408bae['indexOf'](_0x3920), 0x1), (_0x408bae = this['shuffleArr'](_0x408bae))['slice'](0x0, _0x4033b9);
                    }
                }
            ]), _0xdeac83;
        }(Laya['Scene']), _0x4f2d19 = function (_0x10fbc3) {
            _inherits2(_0x5ed806, _0x10fbc3);
            var _0xf8450e = _createSuper2(_0x5ed806);
            function _0x5ed806() {
                var _0x5448ec;
                return _classCallCheck2(this, _0x5ed806), (_0x5448ec = _0xf8450e['call'](this), _0x5448ec['navList'] = _0x5448ec['navList'], _0x5448ec['navData'] = [], _0x5448ec['scrollDir'] = 0x1, _0x5448ec['preIndex'] = -0x1, _0x5448ec['hotArr'] = []), _0x5448ec;
            }
            return _createClass2(_0x5ed806, [
                {
                    'key': 'onOpened',
                    'value': function _0x1b7217() {
                        this['size'](Laya['stage']['displayWid' + 'th'], Laya['stage']['displayHei' + 'ght']), this['initList']();
                    }
                },
                {
                    'key': 'onClosed',
                    'value': function _0x256ad4() {
                        Laya['timer']['clearAll'](this);
                    }
                },
                {
                    'key': 'initList',
                    'value': function _0x289d6a() {
                        this['navData'] = []['concat'](_0x3d1c55['instance']['navDataArr']);
                        for (var _0x11a235 = 0x0; _0x11a235 < this['navData']['length']; _0x11a235++) {
                            this['hotArr']['push'](_0x11a235);
                        }
                        this['hotArr'] = this['getRandomI' + 'temInArrWi' + 'thoutSelf'](-0x1, this['hotArr'], 0x4), this['navList']['hScrollBar' + 'Skin'] = '', this['navList']['repeatX'] = this['navData']['length'], this['navList']['repeatY'] = 0x1, this['navList']['array'] = this['navData'], this['navList']['renderHand' + 'ler'] = Laya['Handler']['create'](this, this['onListRend' + 'er'], null, !0x1), this['navList']['mouseHandl' + 'er'] = new Laya['Handler'](this, this['mouseHandl' + 'er']), this['scrollLoop']();
                    }
                },
                {
                    'key': 'mouseHandl' + 'er',
                    'value': function _0xa6361a(_0x5c0ec0, _0x510f8a) {
                        Laya['timer']['clear'](this, this['scrollLoop']), Laya['timer']['once'](0x3e8, this, this['scrollLoop']);
                    }
                },
                {
                    'key': 'scrollLoop',
                    'value': function _0x5b53c6() {
                        var _0x9e3708 = this;
                        Laya['timer']['once'](0x3e8, this, function () {
                            var _0x4c8a5a = Math['floor'](_0x9e3708['navList']['startIndex']);
                            0x1 == _0x9e3708['scrollDir'] ? ++_0x4c8a5a >= _0x9e3708['navData']['length'] - 0x4 && (_0x9e3708['scrollDir'] = -_0x9e3708['scrollDir']) : --_0x4c8a5a < 0x0 && (_0x9e3708['scrollDir'] = -_0x9e3708['scrollDir']), _0x9e3708['navList']['tweenTo'](_0x4c8a5a, 0x3e8, Laya['Handler']['create'](_0x9e3708, _0x9e3708['scrollLoop']));
                        });
                    }
                },
                {
                    'key': 'onListRend' + 'er',
                    'value': function _0x5113b2(_0x17c3b7, _0x256e11) {
                        if (!(_0x256e11 >= this['navList']['array']['length'])) {
                            var _0x28636e = _0x17c3b7['getChildBy' + 'Name']('item');
                            _0x28636e['getChildBy' + 'Name']('hot')['visible'] = -0x1 != this['hotArr']['indexOf'](_0x256e11), _0x28636e['skin'] = this['navData'][_0x256e11]['icon'], _0x28636e['off'](Laya['Event']['CLICK'], this, this['navCB'], [_0x256e11]), _0x28636e['on'](Laya['Event']['CLICK'], this, this['navCB'], [_0x256e11]);
                        }
                    }
                },
                {
                    'key': 'navCB',
                    'value': function _0x4943a0(_0x576634) {
                        console['log']('click\x20id:', _0x576634), _0x3d1c55['instance']['NavigateAp' + 'p'](_0x576634, function () {
                            _0x20e367['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_quxi' + 'ao_switch'] && _0x20e367['Instance']['clickFinis' + 'hMoreGame']();
                        });
                    }
                },
                {
                    'key': 'shuffleArr',
                    'value': function _0x4bd9aa(_0x108754) {
                        var _0x52af6f = _0x108754['length'];
                        for (; _0x52af6f;) {
                            var _0x198938 = Math['floor'](Math['random']() * _0x52af6f--), _0x475889 = [
                                    _0x108754[_0x52af6f],
                                    _0x108754[_0x198938]
                                ];
                            _0x108754[_0x198938] = _0x475889[0x0], _0x108754[_0x52af6f] = _0x475889[0x1];
                        }
                        return _0x108754;
                    }
                },
                {
                    'key': 'getRandomI' + 'temInArrWi' + 'thoutSelf',
                    'value': function _0x4058bf(_0x13302c, _0x31ff84) {
                        var _0x5e1c4f = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0x1, _0x55205a = []['concat'](_0x31ff84);
                        return _0x55205a['splice'](_0x55205a['indexOf'](_0x13302c), 0x1), (_0x55205a = this['shuffleArr'](_0x55205a))['slice'](0x0, _0x5e1c4f);
                    }
                }
            ]), _0x5ed806;
        }(Laya['Scene']), _0x33b914 = function (_0x31de3d) {
            _inherits2(_0x346ca6, _0x31de3d);
            var _0x5755d3 = _createSuper2(_0x346ca6);
            function _0x346ca6() {
                var _0x56c876;
                return _classCallCheck2(this, _0x346ca6), (_0x56c876 = _0x5755d3['call'](this), _0x56c876['ccb'] = null, _0x56c876['hadClick'] = !0x1, _0x56c876['isShowHide'] = !0x1), _0x56c876;
            }
            return _createClass2(_0x346ca6, [
                {
                    'key': 'onAwake',
                    'value': function _0x613b79() {
                        this['size'](Laya['stage']['displayWid' + 'th'], Laya['stage']['displayHei' + 'ght']);
                    }
                },
                {
                    'key': 'onOpened',
                    'value': function _0x3fe8b3(_0xa44f15) {
                        var _0x1c681d = !0x1;
                        _0xa44f15 && (_0xa44f15['ccb'] && (this['ccb'] = _0xa44f15['ccb']), _0xa44f15['isMoreGame'] && (_0x1c681d = _0xa44f15['isMoreGame'])), Laya['Browser']['onWeiXin'] && _0x44df11['instance']['getIsError']() ? this['continueBt' + 'nCB']() : _0x1c681d || _0x20e367['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_all_' + 'gezi_switc' + 'h'] ? (_0x44df11['instance']['showGrid'](), _0xa44f15['isInterAd'] && _0x20e367['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_wx_c' + 'haping_swi' + 'tch'] && _0x57ad8e['Instance']['showInterA' + 'd'](), _0x20e367['Instance']['addClickEv' + 'ent'](this['continueBt' + 'n'], this, this['continueBt' + 'nCB']), this['isShowHide'] = 0x64 * Math['random']() < _0x3d1c55['instance']['dataConfig']['front_hot_' + 'youxi'], _0x20e367['Instance']['NewWuchu'] && this['isShowHide'] && _0x4432e8['Instance']['showHideBa' + 'nner']()) : this['continueBt' + 'nCB']();
                    }
                },
                {
                    'key': 'onClosed',
                    'value': function _0x124a94() {
                        _0x4432e8['Instance']['clearShowH' + 'ideBanner'](), Laya['timer']['clearAll'](this), this['ccb'] && this['ccb']();
                    }
                },
                {
                    'key': 'continueBt' + 'nCB',
                    'value': function _0x36c52d() {
                        var _0x1f9fa7 = this;
                        _0x20e367['Instance']['NewWuchu'] && this['isShowHide'] && !this['hadClick'] ? this['hadClick'] = !0x0 : (_0x44df11['instance']['hideGrid'](), this['visible'] = !0x1, Laya['timer']['once'](0x64, this, function () {
                            _0x1f9fa7['close']();
                        }));
                    }
                }
            ]), _0x346ca6;
        }(Laya['Scene']), _0x2d0087 = function (_0x39073d) {
            _inherits2(_0xe62bec, _0x39073d);
            var _0x1b2851 = _createSuper2(_0xe62bec);
            function _0xe62bec() {
                var _0x40bddc;
                return _classCallCheck2(this, _0xe62bec), (_0x40bddc = _0x1b2851['call'](this), _0x40bddc['ccb'] = null, _0x40bddc['hadClick'] = !0x1, _0x40bddc['isShowHide'] = !0x1), _0x40bddc;
            }
            return _createClass2(_0xe62bec, [
                {
                    'key': 'onAwake',
                    'value': function _0x56209a() {
                        this['size'](Laya['stage']['displayWid' + 'th'], Laya['stage']['displayHei' + 'ght']);
                    }
                },
                {
                    'key': 'onClosed',
                    'value': function _0x3a682f() {
                        Laya['timer']['clearAll'](this), this['ccb'] && this['ccb']();
                    }
                },
                {
                    'key': 'onOpened',
                    'value': function _0x51d173(_0x2883d4) {
                        var _0xfe4661 = this, _0x4f1176 = !0x1;
                        return _0x2883d4 && (_0x2883d4['ccb'] && (this['ccb'] = _0x2883d4['ccb']), _0x2883d4['isFinishUI'] && (_0x4f1176 = _0x2883d4['isFinishUI'])), Laya['Browser']['onWeiXin'] && _0x44df11['instance']['getIsError']() ? (this['visible'] = !0x1, void Laya['timer']['once'](0x64, this, function () {
                            _0xfe4661['close']();
                        })) : _0x20e367['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_gezi' + '_two_switc' + 'h'] ? (_0x44df11['instance']['showGrid'](), _0x20e367['Instance']['addClickEv' + 'ent'](this['giveupBtn'], this, this['continueBt' + 'nCB']), this['isShowHide'] = 0x64 * Math['random']() < _0x3d1c55['instance']['dataConfig']['front_hot_' + 'tuijian'], void (_0x20e367['Instance']['NewWuchu'] && this['isShowHide'] && _0x4432e8['Instance']['showHideBa' + 'nner']())) : (this['visible'] = !0x1, void Laya['timer']['once'](0x64, this, function () {
                            _0xfe4661['close']();
                        }));
                    }
                },
                {
                    'key': 'continueBt' + 'nCB',
                    'value': function _0x57622d() {
                        var _0x20f628 = this;
                        _0x20e367['Instance']['NewWuchu'] && this['isShowHide'] && !this['hadClick'] ? this['hadClick'] = !0x0 : (_0x4432e8['Instance']['clearShowH' + 'ideBanner'](), _0x44df11['instance']['hideGrid'](), this['visible'] = !0x1, Laya['timer']['once'](0x64, this, function () {
                            _0x20f628['close']();
                        }));
                    }
                },
                {
                    'key': 'adBtnCB',
                    'value': function _0x40560f() {
                        this['continueBt' + 'nCB']();
                    }
                }
            ]), _0xe62bec;
        }(Laya['Scene']), _0x3b7783 = function (_0xa1855a) {
            _inherits2(_0x1990b8, _0xa1855a);
            var _0xef227b = _createSuper2(_0x1990b8);
            function _0x1990b8() {
                var _0x2d8792;
                return _classCallCheck2(this, _0x1990b8), (_0x2d8792 = _0xef227b['call'](this), _0x2d8792['ccb'] = null, _0x2d8792['hadClick'] = !0x1, _0x2d8792['isShowHide'] = !0x1), _0x2d8792;
            }
            return _createClass2(_0x1990b8, [
                {
                    'key': 'onAwake',
                    'value': function _0x20c1df() {
                        this['size'](Laya['stage']['displayWid' + 'th'], Laya['stage']['displayHei' + 'ght']);
                    }
                },
                {
                    'key': 'onClosed',
                    'value': function _0x3e5e16() {
                        Laya['timer']['clearAll'](this), this['ccb'] && this['ccb']();
                    }
                },
                {
                    'key': 'onOpened',
                    'value': function _0x123078(_0x293c04) {
                        var _0x199282 = this;
                        return _0x293c04 && _0x293c04['ccb'] && (this['ccb'] = _0x293c04['ccb']), Laya['Browser']['onWeiXin'] && _0x44df11['instance']['getIsError']() ? (this['visible'] = !0x1, void Laya['timer']['once'](0x64, this, function () {
                            _0x199282['close']();
                        })) : _0x20e367['Instance']['NewWuchu'] && _0x3d1c55['instance']['dataConfig']['front_play' + '_gezi_swit' + 'ch'] ? (_0x44df11['instance']['showGrid'](), _0x20e367['Instance']['addClickEv' + 'ent'](this['adBtn'], this, this['adBtnCB']), this['isShowHide'] = 0x64 * Math['random']() < _0x3d1c55['instance']['dataConfig']['front_hot_' + 'xiaochengx' + 'u'], void (_0x20e367['Instance']['NewWuchu'] && this['isShowHide'] && _0x4432e8['Instance']['showHideBa' + 'nner']())) : (this['visible'] = !0x1, void Laya['timer']['once'](0x64, this, function () {
                            _0x199282['close']();
                        }));
                    }
                },
                {
                    'key': 'continueBt' + 'nCB',
                    'value': function _0x9c41f9() {
                        var _0x389c1d = this;
                        _0x20e367['Instance']['NewWuchu'] && this['isShowHide'] && !this['hadClick'] ? this['hadClick'] = !0x0 : (_0x4432e8['Instance']['clearShowH' + 'ideBanner'](), _0x44df11['instance']['hideGrid'](), this['visible'] = !0x1, Laya['timer']['once'](0x64, this, function () {
                            _0x389c1d['close']();
                        }));
                    }
                },
                {
                    'key': 'adBtnCB',
                    'value': function _0x234fdc() {
                        this['continueBt' + 'nCB']();
                    }
                }
            ]), _0x1990b8;
        }(Laya['Scene']), _0x14f067 = function (_0x46b483) {
            _inherits2(_0x46f359, _0x46b483);
            var _0x3f2c38 = _createSuper2(_0x46f359);
            function _0x46f359() {
                var _0x1143b2;
                return _classCallCheck2(this, _0x46f359), (_0x1143b2 = _0x3f2c38['call'](this), _0x1143b2['ccb'] = null, _0x1143b2['hadClick'] = !0x1), _0x1143b2;
            }
            return _createClass2(_0x46f359, [
                {
                    'key': 'onOpened',
                    'value': function _0x50bd44(_0x5f0a13) {
                        var _0x54cdfd = this;
                        if (_0x5f0a13 && _0x5f0a13['ccb'] && (this['ccb'] = _0x5f0a13['ccb']), !_0x20e367['Instance']['NewWuchu'] || !_0x3d1c55['instance']['dataConfig']['front_run_' + 'switch'])
                            return this['visible'] = !0x1, void Laya['timer']['once'](0x64, this, function () {
                                _0x54cdfd['close']();
                            });
                        _0x20e367['Instance']['addClickEv' + 'ent'](this['getBtn'], this, this['getBtnCB']), _0x20e367['Instance']['addClickEv' + 'ent'](this['adBtn'], this, this['adBtnCB']), this['gsMove'](), _0x4432e8['Instance']['showBanner']();
                    }
                },
                {
                    'key': 'onAwake',
                    'value': function _0x448a11() {
                        this['size'](Laya['stage']['displayWid' + 'th'], Laya['stage']['displayHei' + 'ght']);
                    }
                },
                {
                    'key': 'onClosed',
                    'value': function _0x426683() {
                        _0x4432e8['Instance']['hideBanner'](), Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['gsNode']), Laya['Tween']['clearAll'](this['renNode']), this['ccb'] && this['ccb']();
                    }
                },
                {
                    'key': 'gsMove',
                    'value': function _0x783fe0() {
                        var _0x264afb = this;
                        Laya['Tween']['to'](this['gsNode'], { 'x': 0x28a }, 0x1f4, null, new Laya['Handler'](this, function () {
                            Laya['Tween']['to'](_0x264afb['gsNode'], { 'x': 0x352 }, 0x3e8, null, new Laya['Handler'](_0x264afb, function () {
                                Laya['Tween']['to'](_0x264afb['gsNode'], { 'x': 0x2ee }, 0x1f4, null, new Laya['Handler'](_0x264afb, function () {
                                    _0x264afb['gsMove']();
                                }));
                            }));
                        }));
                    }
                },
                {
                    'key': 'renMove1',
                    'value': function _0x3ccc91() {
                        var _0x4d59aa = this;
                        Laya['Tween']['to'](this['renNode'], { 'x': 0x7c }, 0x1f4, null, new Laya['Handler'](this, function () {
                            Laya['Tween']['to'](_0x4d59aa['renNode'], { 'x': 0x144 }, 0x3e8, null, new Laya['Handler'](_0x4d59aa, function () {
                                Laya['Tween']['to'](_0x4d59aa['renNode'], { 'x': 0xe0 }, 0x1f4, null, new Laya['Handler'](_0x4d59aa, function () {
                                    _0x4d59aa['renMove1']();
                                }));
                            }));
                        }));
                    }
                },
                {
                    'key': 'renMove2',
                    'value': function _0x4d9532() {
                        var _0x544e52 = this, _0x15382a = arguments['length'] > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : !0x1;
                        _0x15382a && this['ren']['play'](0x0, !0x0, 'ani2'), Laya['Tween']['clearAll'](this['renNode']), this['renNode']['x'] = 0xe0, Laya['Tween']['to'](this['renNode'], { 'x': -0x114 }, _0x15382a ? 0x1f4 : 0x3e8, null, new Laya['Handler'](this, function () {
                            _0x544e52['close']();
                        }));
                    }
                },
                {
                    'key': 'getBtnCB',
                    'value': function _0x2bf84a() {
                        this['renMove2']();
                    }
                },
                {
                    'key': 'adBtnCB',
                    'value': function _0x40036e() {
                        var _0x22bad6 = this;
                        _0x57ad8e['Instance']['showVideoA' + 'd'](function () {
                            _0x22bad6['renMove2'](!0x0);
                        });
                    }
                }
            ]), _0x46f359;
        }(Laya['Scene']), _0xa9a828 = function () {
            function _0x4b10d6() {
                _classCallCheck2(this, _0x4b10d6), (this['enable'] = !0x1, this['rubbishPos'] = new Laya['Vector3'](-0x3e8, -0x3e8, -0x3e8), this['ColliderIn' + 'it']());
            }
            return _createClass2(_0x4b10d6, [
                {
                    'key': 'ColliderIn' + 'it',
                    'value': function _0x370c1d() {
                        this['enable'] = !0x0;
                    }
                },
                {
                    'key': 'ColliderUp' + 'date',
                    'value': function _0x2d2aea() {
                        this['enable'];
                    }
                },
                {
                    'key': 'NormalBoxC' + 'heck_2D',
                    'value': function _0x311a90(_0x2f829a, _0x1e90e7, _0x5902b5, _0x1f6382, _0x2b3bca, _0x7d4fb5) {
                        var _0x1b3154 = Math['abs'](_0x1f6382['x'] - _0x2f829a['x']), _0x5b64ba = Math['abs'](_0x1f6382['z'] - _0x2f829a['z']);
                        return _0x1b3154 < _0x1e90e7 + _0x2b3bca && _0x5b64ba < _0x5902b5 + _0x7d4fb5;
                    }
                }
            ]), _0x4b10d6;
        }(), _0x11459f = function () {
            function _0x33e7f4() {
                _classCallCheck2(this, _0x33e7f4);
            }
            return _createClass2(_0x33e7f4, [{
                    'key': 'vibrateSho' + 'rt',
                    'value': function _0x3e847b(_0x582322) {
                        _0x5afa76['objectShak' + 'e'](_0x582322, Laya['timer']['delta'] / 0x3e8, 0.1);
                    }
                }]), _0x33e7f4;
        }(), _0xabd044 = function () {
            function _0x40b88c() {
                _classCallCheck2(this, _0x40b88c), (this['fxs'] = [], this['fireWork'] = [], this['init']());
            }
            return _createClass2(_0x40b88c, [
                {
                    'key': 'init',
                    'value': function _0x5906ac() {
                        this['chestLight'] = _0x33885f['fxs']['getChildBy' + 'Name']('ChestLight' + 'FX'), this['fireWorkBo' + 'om'] = _0x33885f['fxs']['getChildBy' + 'Name']('FireworkFX'), this['fireWorkAl' + 'awys'] = _0x33885f['fxs']['getChildBy' + 'Name']('ConfettiSp' + 'lashFX'), this['fireWokrRa' + 'in'] = _0x33885f['fxs']['getChildBy' + 'Name']('ConfettiRa' + 'inFX'), this['moveSmokeF' + 'x'] = _0x33885f['fxs']['getChildBy' + 'Name']('MoveSmokeF' + 'X'), this['finishFx'] = _0x33885f['fxs']['getChildBy' + 'Name']('FinishFX');
                    }
                },
                {
                    'key': 'cleanFxs',
                    'value': function _0x49dfd3() {
                        for (var _0x56e2db = 0x0; _0x56e2db < this['fxs']['length']; _0x56e2db++) {
                            this['fxs'][_0x56e2db]['destroy']();
                        }
                    }
                },
                {
                    'key': 'BornFireWo' + 'rksAlways',
                    'value': function _0x46513c(_0x45e265) {
                        this['fireWork']['push'](this['BornFx'](_0x45e265, this['fireWorkAl' + 'awys']));
                    }
                },
                {
                    'key': 'clearFireW' + 'ork',
                    'value': function _0x37d966() {
                        for (var _0x3f2c78 = 0x0; _0x3f2c78 < this['fireWork']['length']; _0x3f2c78++) {
                            this['fireWork'][_0x3f2c78]['destroy']();
                        }
                    }
                },
                {
                    'key': 'BornChestA' + 'llFx',
                    'value': function _0x449a07(_0x20573a) {
                        this['BornFx'](_0x5afa76['Vector3Add'](_0x20573a, new Laya['Vector3'](0x0, 0x1, 6.5)), this['chestLight']);
                    }
                },
                {
                    'key': 'BornMoveSm' + 'okeFx',
                    'value': function _0x1eac43() {
                        if (this['smokeFx'])
                            return;
                        var _0x1ba66a = this['BornFxOnly'](_0x33885f['player']['transform']['position']['clone'](), this['moveSmokeF' + 'x']);
                        _0x33885f['player']['addChild'](_0x1ba66a), _0x1ba66a['transform']['localPosit' + 'ion'] = new Laya['Vector3'](0x0, -0x3e8, 0x0), this['smokeFx'] = _0x1ba66a;
                    }
                },
                {
                    'key': 'BornFinish' + 'Fx',
                    'value': function _0x58fd1c(_0x35699b) {
                        this['BornFx'](_0x35699b['clone'](), this['finishFx']);
                    }
                },
                {
                    'key': 'BornFx',
                    'value': function _0x2d7c43(_0x30bd4f, _0x5c4e0a) {
                        var _0x31d619 = _0x5c4e0a['clone']();
                        return _0x33885f['scene3D']['addChild'](_0x31d619), _0x31d619['transform']['position'] = _0x30bd4f, this['fxs']['push'](_0x31d619), _0x31d619;
                    }
                },
                {
                    'key': 'BornFxOnly',
                    'value': function _0x29ee14(_0x10c2b7, _0x1fb89c) {
                        var _0x152190 = _0x1fb89c['clone']();
                        return _0x33885f['scene3D']['addChild'](_0x152190), _0x152190['transform']['position'] = _0x10c2b7, _0x152190;
                    }
                }
            ]), _0x40b88c;
        }(), _0x59caee = function () {
            function _0x11e19e() {
                _classCallCheck2(this, _0x11e19e), (this['forceHide'] = !0x1, this['init']());
            }
            return _createClass2(_0x11e19e, [
                {
                    'key': 'init',
                    'value': function _0x28120f() {
                        this['scenes'] = [];
                    }
                },
                {
                    'key': 'getTopScen' + 'e',
                    'get': function _0x3fa95a() {
                        return this['topScene'];
                    }
                },
                {
                    'key': 'openScene',
                    'value': function _0x4ad33b(_0x5cdbc0) {
                        var _0x28374e = this, _0x2fe331 = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : !0x1, _0x4f7aa2 = arguments['length'] > 0x2 ? arguments[0x2] : undefined, _0x2d30e5 = arguments['length'] > 0x3 ? arguments[0x3] : undefined, _0xcb4089 = arguments['length'] > 0x4 ? arguments[0x4] : undefined;
                        Laya['Scene']['open'](_0x5cdbc0, _0x2fe331, _0x4f7aa2, Laya['Handler']['create'](this, function (_0x6d0200) {
                            var _0x2a8010 = _0x28374e['scenes']['filter'](function (_0x496fd5) {
                                return _0x496fd5['url'] == _0x5cdbc0;
                            });
                            _0x2a8010 && _0x2a8010['length'] > 0x0 ? (console['log']('已打开此场景', _0x2a8010), _0x2a8010[0x0]['close']()) : (_0x2d30e5 ? _0x2d30e5['addChild'](_0x6d0200) : Laya['stage']['addChild'](_0x6d0200), _0x28374e['scenes']['push'](_0x6d0200), _0x28374e['topScene'] = _0x28374e['scenes'][_0x28374e['scenes']['length'] - 0x1], _0xcb4089 && _0xcb4089(_0x6d0200));
                        }));
                    }
                },
                {
                    'key': 'closeScene',
                    'value': function _0x53df9b(_0x2a3f22) {
                        if (_0x2a3f22 ? 'string' == typeof _0x2a3f22 && this['scenes']['forEach'](function (_0x4540c1) {
                                _0x4540c1['url'] != _0x2a3f22 || (_0x2a3f22 = _0x4540c1);
                            }) : null != this['topScene'] && (_0x2a3f22 = this['topScene']), _0x2a3f22 && _0x2a3f22 instanceof Laya['Scene']) {
                            var _0x4e9c08 = this['scenes']['indexOf'](_0x2a3f22);
                            -0x1 != _0x4e9c08 && (this['scenes']['splice'](_0x4e9c08, 0x1), this['topScene'] = this['scenes'][this['scenes']['length'] - 0x1]), _0x2a3f22['close']();
                        }
                    }
                }
            ]), _0x11e19e;
        }(), _0x2f2328 = function () {
            function _0x4a5721() {
                _classCallCheck2(this, _0x4a5721), (this['appId'] = 'wxa49498a3' + '0cf837f6', this['gameVersio' + 'n'] = '1.0.4', this['gameType'] = '3D', this['sceneResUr' + 'l'] = 'res/scene/' + 'Convention' + 'al/ResScen' + 'e.ls', this['modelResUr' + 'l'] = 'res/model/' + 'Convention' + 'al/ResScen' + 'e.lh', this['rebornCoun' + 't'] = 0x0, this['playCount'] = 0x0);
            }
            return _createClass2(_0x4a5721, [{
                    'key': 'shareConte' + 'xt',
                    'get': function _0x23e741() {
                        return [
                            '请分享到活跃的群！',
                            '请分享到不同群！',
                            '请分享给好友！',
                            '请分享给20人以上的' + '群！'
                        ][Math['floor'](0x4 * Math['random']())];
                    }
                }]), _0x4a5721;
        }(), _0x5112a0 = function () {
            function _0x24a927() {
                _classCallCheck2(this, _0x24a927);
            }
            return _createClass2(_0x24a927, null, [
                {
                    'key': 'add',
                    'value': function _0x2a51b5(_0x3343d0, _0x448e81) {
                        var _0x20f598 = new Laya['Vector3']();
                        return Laya['Vector3']['add'](_0x3343d0, _0x448e81, _0x20f598), _0x20f598['clone']();
                    }
                },
                {
                    'key': 'subtract',
                    'value': function _0x4dd6dc(_0x5c179d, _0x4aa26c) {
                        var _0x226e16 = new Laya['Vector3']();
                        return Laya['Vector3']['subtract'](_0x5c179d, _0x4aa26c, _0x226e16), _0x226e16['clone']();
                    }
                },
                {
                    'key': 'mull',
                    'value': function _0x3ae924(_0x27c40f, _0x377644) {
                        var _0x1e9a6f = new Laya['Vector3']();
                        return Laya['Vector3']['scale'](_0x27c40f, _0x377644, _0x1e9a6f), _0x1e9a6f['clone']();
                    }
                },
                {
                    'key': 'dot',
                    'value': function _0x26f994(_0x4b90f0, _0x4c9cee) {
                        return Laya['Vector3']['dot'](_0x4b90f0, _0x4c9cee);
                    }
                },
                {
                    'key': 'cross',
                    'value': function _0x2c5af0(_0x1d881b, _0x4f6c37) {
                        var _0x1a0e11 = new Laya['Vector3']();
                        return Laya['Vector3']['cross'](_0x1d881b, _0x4f6c37, _0x1a0e11), _0x1a0e11['clone']();
                    }
                },
                {
                    'key': 'normalized',
                    'value': function _0x4c21f2(_0x5e5a3) {
                        var _0x298205 = new Laya['Vector3']();
                        return Laya['Vector3']['normalize'](_0x5e5a3, _0x298205), _0x298205['clone']();
                    }
                },
                {
                    'key': 'distance',
                    'value': function _0x18654e(_0x2212a4, _0x17ca1c) {
                        var _0x2be44a = _0x24a927['subtract'](_0x2212a4, _0x17ca1c);
                        return Laya['Vector3']['scalarLeng' + 'th'](_0x2be44a);
                    }
                }
            ]), _0x24a927;
        }(), _0x5837c0 = function () {
            function _0x1def36() {
                _classCallCheck2(this, _0x1def36);
            }
            return _createClass2(_0x1def36, [
                {
                    'key': 'addClickEv' + 'ent',
                    'value': function _0x500cab(_0x30d50e, _0x3fb463, _0x293792, _0xe7e75d, _0x21261c) {
                        if (_0x30d50e['offAllCall' + 'er'](_0x3fb463), _0x30d50e instanceof Laya['Button'] && !_0x21261c) {
                            var _0xf9b743 = function _0x51fea0(_0x55c3f2) {
                                _0x293792 && _0x293792['call'](_0x3fb463, _0x55c3f2);
                            };
                            _0x30d50e['on'](Laya['Event']['CLICK'], _0x3fb463, _0xf9b743, [_0xe7e75d]);
                        } else {
                            var _0x2aac74 = 0x3c, _0x3fb23f = 0x1, _0x6182a6 = _0x30d50e['scaleX'] * _0x3fb23f, _0x21222a = _0x30d50e['scaleY'] * _0x3fb23f, _0x418c0e = 0.9 * _0x3fb23f, _0x769d60 = !0x1, _0x23752e = function _0xd249c4(_0x9e9c9) {
                                    _0x769d60 = !0x0, Laya['Tween']['to'](_0x30d50e, {
                                        'scaleX': _0x418c0e,
                                        'scaleY': _0x418c0e
                                    }, _0x2aac74);
                                };
                            _0x30d50e['on'](Laya['Event']['MOUSE_DOWN'], _0x3fb463, _0x23752e, [_0xe7e75d]);
                            var _0x3074d1 = function _0x409da4(_0x501052) {
                                0x0 != _0x769d60 && (_0x769d60 = !0x1, Laya['Tween']['to'](_0x30d50e, {
                                    'scaleX': _0x6182a6,
                                    'scaleY': _0x21222a
                                }, _0x2aac74), _0x293792 && _0x293792['call'](_0x3fb463, _0x501052));
                            };
                            _0x30d50e['on'](Laya['Event']['MOUSE_UP'], _0x3fb463, _0x3074d1, [_0xe7e75d]);
                            var _0x48b85b = function _0x3845cc(_0x1d4a3b) {
                                Laya['Tween']['to'](_0x30d50e, {
                                    'scaleX': _0x6182a6,
                                    'scaleY': _0x21222a
                                }, _0x2aac74);
                            };
                            _0x30d50e['on'](Laya['Event']['MOUSE_OUT'], _0x3fb463, _0x48b85b, [_0xe7e75d]);
                        }
                    }
                },
                {
                    'key': 'getRGB',
                    'value': function _0x58c1f9(_0x3754ff) {
                        var _0x1c0048 = [], _0x3d9ff2 = [], _0x43e517 = _0x3754ff['replace'](/#/, '');
                        if (0x3 == _0x43e517['length']) {
                            for (var _0x15b15e = [], _0x281d50 = 0x0; _0x281d50 < 0x3; _0x281d50++) {
                                _0x15b15e['push'](_0x43e517['charAt'](_0x281d50) + _0x43e517['charAt'](_0x281d50));
                            }
                            _0x43e517 = _0x15b15e['join']('');
                        }
                        for (_0x281d50 = 0x0; _0x281d50 < 0x3; _0x281d50++) {
                            _0x1c0048[_0x281d50] = '0x' + _0x43e517['substr'](0x2 * _0x281d50, 0x2), _0x3d9ff2['push'](parseInt(_0x1c0048[_0x281d50]));
                        }
                        return new Laya['Vector3'](_0x3d9ff2[0x0] / 0xff, _0x3d9ff2[0x1] / 0xff, _0x3d9ff2[0x2] / 0xff);
                    }
                },
                {
                    'key': 'getColorSt' + 'ring',
                    'value': function _0x46089c(_0x3fb0a0) {
                        var _0xd2707e = 0xf & _0x3fb0a0, _0x27148a = _0xd2707e > 0x9 ? this['getHexValu' + 'e'](Number(_0xd2707e)) + '' : _0xd2707e + '';
                        return ((_0xd2707e = 0xf & _0x3fb0a0 >>> 0x4) > 0x9 ? this['getHexValu' + 'e'](Number(_0xd2707e)) + '' : _0xd2707e + '') + _0x27148a;
                    }
                },
                {
                    'key': 'getHexValu' + 'e',
                    'value': function _0x56378d(_0x1b8f0b) {
                        switch (_0x1b8f0b) {
                        case 0xa:
                            return 'A';
                        case 0xb:
                            return 'B';
                        case 0xc:
                            return 'C';
                        case 0xd:
                            return 'D';
                        case 0xe:
                            return 'E';
                        case 0xf:
                            return 'F';
                        }
                    }
                },
                {
                    'key': 'getCurrent' + 'Time',
                    'value': function _0x1dd355() {
                        return Math['floor'](Date['parse'](new Date()['toString']()) / 0x3e8);
                    }
                },
                {
                    'key': 'inverseLer' + 'p',
                    'value': function _0x38eaec(_0x3eb857, _0x1daebd, _0x38db23) {
                        return (_0x38db23 - _0x3eb857) / (_0x1daebd - _0x3eb857);
                    }
                },
                {
                    'key': 'linearEqua' + 'tion',
                    'value': function _0x4f6b14(_0x511ab5, _0x26c420) {
                        var _0x575c43 = (_0x511ab5['y'] - _0x26c420['y']) / (_0x511ab5['x'] - _0x511ab5['y']);
                        return [
                            _0x575c43,
                            _0x511ab5['y'] - _0x575c43 * _0x511ab5['x']
                        ];
                    }
                },
                {
                    'key': 'loadJsonFi' + 'le',
                    'value': function _0x29d005(_0x55ca54, _0x28d364) {
                        Laya['loader']['load'](_0x55ca54, Laya['Handler']['create'](this, function (_0xd2ba87) {
                            var _0x218c14 = Laya['loader']['getRes'](_0x55ca54);
                            _0x28d364(_0x218c14);
                        }), null, Laya['Loader']['JSON']);
                    }
                },
                {
                    'key': 'getRandomA' + 'rray',
                    'value': function _0x4c03a5(_0xbab89b, _0x70e646) {
                        var _0x197159 = [], _0x3e3483 = [];
                        _0x3e3483 = (_0x3e3483 = _0x3e3483['concat'](_0xbab89b))['sort'](function () {
                            return 0.5 - Math['random']();
                        });
                        for (var _0x577c50 = 0x0; _0x577c50 < _0x70e646; _0x577c50++) {
                            _0x197159['push'](_0x3e3483[_0x577c50]);
                        }
                        return _0x197159;
                    }
                },
                {
                    'key': 'loadSubpac' + 'kage',
                    'value': function _0x3327ac(_0x56ad74, _0x3304b4, _0x1e46e9) {
                        Laya['Browser']['onWeiXin'] && wx['loadSubpac' + 'kage']({
                            'name': _0x56ad74,
                            'success': function _0x378f88(_0x5343f8) {
                                console['log']('分包加载成功：', _0x56ad74), _0x1e46e9['call'](_0x5343f8, _0x3304b4, !0x0);
                            },
                            'fail': function _0x216179(_0x5a69ef) {
                                console['error']('分包加载失败：', _0x56ad74), _0x1e46e9['call'](_0x5a69ef, _0x3304b4, !0x1);
                            }
                        })['onProgress' + 'Update'](function (_0x56779e) {
                            console['log'](_0x56779e, '分包========' + '========');
                        });
                    }
                },
                {
                    'key': 'loadSubpac' + 'kagesSync',
                    'value': function _0x27841e(_0x2a79c1, _0x4083bd, _0x4df603) {
                        var _0x4152ea = this;
                        for (var _0x14d076 = _0x2a79c1['length'], _0x31110f = 0x0; _0x31110f < _0x14d076; _0x31110f++) {
                            this['loadSubpac' + 'kage'](_0x2a79c1[_0x31110f], _0x4083bd, function (_0x29ae02, _0x28fd64) {
                                _0x28fd64 && 0x0 == --_0x14d076 && (console['log']('全部分包加载完成'), _0x4df603['call'](_0x4152ea, _0x4083bd, !0x0));
                            });
                        }
                    }
                },
                {
                    'key': 'loadSubpac' + 'kages',
                    'value': function _0x1a4f44(_0xb5bdd5, _0x26c98b, _0x3dbc34) {
                        var _0x5c42ed = _0xb5bdd5['length'];
                        !function _0x53460e() {
                            var _0x15ac73 = _0xb5bdd5[_0x5c42ed - 0x1];
                            null != _0x15ac73 ? _0x176ebb['Utils']['loadSubpac' + 'kage'](_0x15ac73, _0x26c98b, function (_0x3e94c0, _0x4aac64) {
                                _0x4aac64 && (_0x5c42ed--, _0x53460e());
                            }) : (console['log']('全部分包加载完成'), 0x0 == _0x5c42ed ? _0x3dbc34['call'](this, _0x26c98b, !0x0) : _0x3dbc34['call'](this, _0x26c98b, !0x1));
                        }();
                    }
                },
                {
                    'key': 'getTimeLef' + 't2BySecond',
                    'value': function _0x1d7946(_0x478c73) {
                        var _0x2bca98 = Math['round']((_0x478c73 - 0x1e) / 0x3c) % 0x3c, _0x2092a0 = _0x478c73 % 0x3c;
                        return (_0x2bca98 > 0x0 ? _0x2bca98 > 0x9 ? _0x2bca98 + ':' : '0' + _0x2bca98 + ':' : '00:') + (_0x2092a0 > 0x0 ? (_0x2092a0 > 0x9 ? _0x2092a0 + '' : '0' + _0x2092a0) + '' : '00');
                    }
                },
                {
                    'key': 'objectShak' + 'e',
                    'value': function _0x1bb4ff(_0xfb2b89) {
                        var _0x17fe9f = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : 0x1, _0x26b198 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0.7, _0x1628a6 = _0x17fe9f, _0x4430bf = 0x1, _0x52381b = _0xfb2b89['transform']['localPosit' + 'ion']['clone']();
                        Laya['timer']['frameLoop'](0x1, this, function _0x3b734a() {
                            if (_0x1628a6 > 0x0) {
                                var _0x385b81 = new Laya['Vector3']();
                                Laya['Vector3']['scale']((_0x2b3d64 = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), _0x4ff451 = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), new Laya['Vector3'](_0x2b3d64, _0x4ff451, 0x0)), _0x26b198, _0x385b81), Laya['Vector3']['add'](_0x52381b, _0x385b81, _0x385b81), _0xfb2b89['transform']['localPosit' + 'ion'] = _0x385b81, _0x1628a6 -= 0.02 * _0x4430bf;
                            } else
                                _0x1628a6 = 0x0, _0xfb2b89['transform']['localPosit' + 'ion'] = _0x52381b, Laya['timer']['clear'](this, _0x3b734a);
                            var _0x2b3d64, _0x4ff451;
                        });
                    }
                },
                {
                    'key': 'objectShak' + 'e2D',
                    'value': function _0x81d515(_0x1bc845) {
                        var _0x57ee9e = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : 0x1, _0x3001fe = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0.7;
                        this['originPos'] && (Laya['timer']['clear'](this, this['updateShak' + 'e']), _0x1bc845['pos'](this['originPos']['x'], this['originPos']['y'])), this['shakeTime'] = _0x57ee9e, (this['originPos'] = new Laya['Vector2'](_0x1bc845['x'], _0x1bc845['y']), Laya['timer']['frameLoop'](0x1, this, this['updateShak' + 'e'], [
                            _0x3001fe,
                            _0x1bc845,
                            0x1
                        ]));
                    }
                },
                {
                    'key': 'randomPos',
                    'value': function _0x30d6ac() {
                        var _0x222753 = Math['random']() > 0.5 ? Math['random']() : -Math['random'](), _0x17940b = Math['random']() > 0.5 ? Math['random']() : -Math['random']();
                        return new Laya['Vector2'](_0x222753, _0x17940b);
                    }
                },
                {
                    'key': 'updateShak' + 'e',
                    'value': function _0x58110a(_0x2d6852, _0xc318cf, _0x3fb153) {
                        if (this['shakeTime'] > 0x0) {
                            var _0x5e74a8 = new Laya['Vector2']();
                            Laya['Vector2']['scale'](this['randomPos'](), _0x2d6852, _0x5e74a8), _0x5e74a8['setValue'](_0x5e74a8['x'] + this['originPos']['x'], _0x5e74a8['y'] + this['originPos']['y']), _0xc318cf['pos'](_0x5e74a8['x'], _0x5e74a8['y']), this['shakeTime'] -= 0.02 * _0x3fb153;
                        } else
                            this['shakeTime'] = 0x0, _0xc318cf['pos'](this['originPos']['x'], this['originPos']['y']), Laya['timer']['clear'](this, this['updateShak' + 'e']), this['originPos'] = null;
                    }
                },
                {
                    'key': 'sameSide',
                    'value': function _0x36473a(_0xda7501, _0x22d7e2, _0x191ac7, _0x4f9398) {
                        var _0x571e2f = _0x5112a0['subtract'](_0x22d7e2, _0xda7501), _0x264ff7 = _0x5112a0['subtract'](_0x191ac7, _0xda7501), _0x2af32f = _0x5112a0['subtract'](_0x4f9398, _0xda7501), _0x3a18f7 = _0x5112a0['cross'](_0x571e2f, _0x264ff7), _0x45318c = _0x5112a0['cross'](_0x571e2f, _0x2af32f);
                        return _0x5112a0['dot'](_0x3a18f7, _0x45318c) >= 0x0;
                    }
                },
                {
                    'key': 'pointInTri' + 'angle',
                    'value': function _0x2d4383(_0x447523, _0x1cb10f, _0x19e7cb, _0x406d8b) {
                        return this['sameSide'](_0x447523, _0x1cb10f, _0x19e7cb, _0x406d8b) && this['sameSide'](_0x1cb10f, _0x19e7cb, _0x447523, _0x406d8b) && this['sameSide'](_0x19e7cb, _0x447523, _0x1cb10f, _0x406d8b);
                    }
                },
                {
                    'key': 'findNodeBy' + 'Name',
                    'value': function _0x52758d(_0x5ea260, _0x2af3a1) {
                        var _0x110239 = null, _0x456919 = function _0xe33c41(_0x79fcdd) {
                                for (var _0x312616 = 0x0; _0x312616 < _0x79fcdd['numChildre' + 'n']; _0x312616++) {
                                    if (_0x79fcdd['getChildAt'](_0x312616)['name'] == _0x2af3a1)
                                        return void (_0x110239 = _0x79fcdd['getChildAt'](_0x312616));
                                    _0xe33c41(_0x79fcdd['getChildAt'](_0x312616));
                                }
                            };
                        return _0x456919(_0x5ea260), _0x110239;
                    }
                },
                {
                    'key': 'coinCollec' + 'tAnim',
                    'value': function _0x31f8fb(_0x43dcbb, _0x55450e, _0x231606) {
                        var _0x51a210 = this, _0x1ab3b7 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : 0xf, _0x1dd9bb = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : null, _0x2da8e0 = function _0x13fe36() {
                                var _0x48b2c4 = Laya['Pool']['getItemByC' + 'lass']('coin', Laya['Image']);
                                _0x48b2c4['skin'] = 'ui/sy_jb_0' + '1.png', _0x48b2c4['x'] = _0x43dcbb['x'], _0x48b2c4['y'] = _0x43dcbb['y'], _0x48b2c4['scale'](0.6, 0.6), _0x231606['addChild'](_0x48b2c4);
                                var _0x1af3fd = 0x12c + 0x64 * Math['random']() - 0x32;
                                Laya['Tween']['to'](_0x48b2c4, {
                                    'x': _0x48b2c4['x'] + 0xfa * Math['random']() - 0x7d,
                                    'y': _0x48b2c4['y'] + 0xfa * Math['random']() - 0x7d
                                }, _0x1af3fd), Laya['timer']['once'](_0x1af3fd + 0x32, _0x51a210, function () {
                                    Laya['Tween']['to'](_0x48b2c4, {
                                        'x': _0x55450e['x'],
                                        'y': _0x55450e['y']
                                    }, 0x190, null, new Laya['Handler'](this, function () {
                                        _0x231606['removeChil' + 'd'](_0x48b2c4), Laya['Pool']['recover']('coin', _0x48b2c4), 0x0 == --_0x448985 && _0x1dd9bb && _0x1dd9bb(_0x231606);
                                    }));
                                });
                            };
                        for (var _0x448985 = _0x1ab3b7, _0x50900a = 0x0; _0x50900a < _0x1ab3b7; _0x50900a++) {
                            _0x2da8e0();
                        }
                    }
                },
                {
                    'key': 'fixCameraF' + 'ield',
                    'value': function _0x49a6e9(_0x344437) {
                        var _0x582211 = (Laya['stage']['displayHei' + 'ght'] - 0x536 < 0x0 ? 0x0 : Laya['stage']['displayHei' + 'ght'] - 0x536) / 0x122 * 0xa;
                        _0x344437['fieldOfVie' + 'w'] += _0x582211;
                    }
                },
                {
                    'key': 'changeMatC' + 'olor',
                    'value': function _0x49b782(_0x5d1460, _0x4de62f) {
                        _0x5d1460['meshRender' + 'er'] && (_0x5d1460['meshRender' + 'er']['sharedMate' + 'rial']['albedoColo' + 'r'] = _0x4de62f);
                    }
                },
                {
                    'key': 'getSpriteP' + 'osBySprite' + '3DPoint',
                    'value': function _0x550186(_0x22335c) {
                        var _0x5ae5cb = _0x22335c['transform']['position']['clone']();
                        _0x5ae5cb['y'] = 'Npc1' == _0x22335c['name'] ? 0x2 : 0x1;
                        var _0x5e88c1 = new Laya['Vector4']();
                        _0x176ebb['CommonData']['mainCamera']['viewport']['project'](_0x5ae5cb, _0x176ebb['CommonData']['mainCamera']['projection' + 'ViewMatrix'], _0x5e88c1);
                        var _0x3d9466 = new Laya['Vector2'](_0x5e88c1['x'] / Laya['stage']['clientScal' + 'eX'], _0x5e88c1['y'] / Laya['stage']['clientScal' + 'eY']);
                        return new Laya['Point'](_0x3d9466['x'], _0x3d9466['y']);
                    }
                },
                {
                    'key': 'getRandom',
                    'value': function _0x196928() {
                        return this['getRandomA' + 'rray']([
                            0x0,
                            0.1,
                            0.2,
                            0.3,
                            0.4,
                            0.5,
                            0.6,
                            0.7,
                            0.8,
                            0.9,
                            0x1
                        ], 0x1)[0x0];
                    }
                },
                {
                    'key': 'getAngle',
                    'value': function _0x259300(_0x4bcf97, _0x193686) {
                        var _0x562ecb = Laya['Vector3']['dot'](_0x4bcf97, _0x193686), _0x5003cd = Laya['Vector3']['scalarLeng' + 'th'](_0x4bcf97) * Laya['Vector3']['scalarLeng' + 'th'](_0x193686);
                        if (0x0 == _0x5003cd) {
                            if (_0x4bcf97['z'] > _0x193686['z'])
                                return 0x0;
                            if (_0x4bcf97['z'] < _0x193686['z'])
                                return 0xb4;
                            if (_0x4bcf97['y'] > _0x193686['y'])
                                return 0x5a;
                            if (_0x4bcf97['y'] < _0x193686['y'])
                                return -0x5a;
                        }
                        var _0x5d7b1d = _0x562ecb / _0x5003cd;
                        return 0xb4 * Math['acos'](_0x5d7b1d) / Math['PI'];
                    }
                },
                {
                    'key': 'transform',
                    'value': function _0x27a88b(_0x2fdadb) {
                        var _0x127e42 = [
                                '',
                                '',
                                ''
                            ], _0x5e3ae2 = 0x3e8, _0x413876 = 0x3;
                        for (var _0x45e5a9 = 0x1; _0x2fdadb / _0x5e3ae2 >= 0x1;) {
                            _0x5e3ae2 *= 0xa, _0x413876 += 0x1;
                        }
                        if (_0x413876 <= 0x4)
                            _0x127e42[0x1] = 'k', _0x127e42[0x0] = (_0x2fdadb / 0x3e8)['toFixed'](0x2);
                        else {
                            if (_0x413876 <= 0x9) {
                                var _0x446605 = parseInt((_0x413876 - 0x4)['toFixed'](0x0)) / 0x2 > 0x1 ? 'm' : 'k';
                                _0x45e5a9 = 'k' === _0x446605 ? 0x3e8 : 0xf4240, _0x127e42[0x1] = _0x446605;
                                var _0x5c02ce = (_0x2fdadb / _0x45e5a9)['toFixed'](0x2);
                                _0x127e42[0x0] = _0x5c02ce + '';
                            } else {
                                if (_0x413876 <= 0x10) {
                                    var _0x4e9be3 = 'b', _0x27351d = 0x1;
                                    'm' === _0x4e9be3 ? _0x27351d = 0xf4240 : 'b' === _0x4e9be3 && (_0x27351d = 0x3b9aca00), _0x127e42[0x1] = _0x4e9be3, _0x127e42[0x0] = (_0x2fdadb / _0x27351d)['toFixed'](0x2);
                                }
                            }
                        }
                        return _0x2fdadb < 0x3e8 && (_0x127e42[0x1] = '', _0x127e42[0x0] = Number(_0x2fdadb)['toFixed'](0x0) + ''), _0x127e42['join']('');
                    }
                },
                {
                    'key': 'getNormal',
                    'value': function _0x160dca(_0x380efb, _0xb44e6c, _0x35b59c) {
                        var _0x592939 = _0x5112a0['subtract'](_0xb44e6c, _0x380efb), _0x3dc146 = _0x5112a0['subtract'](_0x35b59c, _0x380efb);
                        return _0x5112a0['normalized'](_0x5112a0['cross'](_0x3dc146, _0x592939));
                    }
                },
                {
                    'key': 'lerpVec3',
                    'value': function _0x68d86a(_0x2c7e17, _0x11545e, _0x160548) {
                        return _0x160548 = this['Clamp01'](_0x160548), new Laya['Vector3'](_0x2c7e17['x'] + (_0x11545e['x'] - _0x2c7e17['x']) * _0x160548, _0x2c7e17['y'] + (_0x11545e['y'] - _0x2c7e17['y']) * _0x160548, _0x2c7e17['z'] + (_0x11545e['z'] - _0x2c7e17['z']) * _0x160548);
                    }
                },
                {
                    'key': 'Clamp01',
                    'value': function _0x558bee(_0x4e94ce) {
                        return _0x4e94ce > 0x1 ? 0x1 : _0x4e94ce < 0x0 ? 0x0 : _0x4e94ce;
                    }
                }
            ], [{
                    'key': 'createTria' + 'ngle',
                    'value': function _0x44ccaa(_0x1e548f, _0x2359ec, _0x4616a5) {
                        void 0x0 === _0x1e548f && (_0x1e548f = 0x1), void 0x0 === _0x2359ec && (_0x2359ec = 0x1), void 0x0 === _0x4616a5 && (_0x4616a5 = 0x1), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION,N' + 'ORMAL,UV');
                        var _0x362754 = _0x1e548f / 0x2, _0x331eab = _0x2359ec / 0x2, _0x4d2b6b = _0x4616a5 / 0x2;
                        new Float32Array([
                            -_0x362754,
                            _0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x0,
                            0x0,
                            _0x362754,
                            _0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x1,
                            0x0,
                            _0x362754,
                            _0x331eab,
                            _0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x1,
                            0x1,
                            -_0x362754,
                            -_0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            -0x1,
                            0x0,
                            0x0,
                            0x0,
                            _0x362754,
                            -_0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            -0x1,
                            0x0,
                            -0x1,
                            0x0,
                            _0x362754,
                            -_0x331eab,
                            _0x4d2b6b,
                            0x0,
                            -0x1,
                            0x0,
                            -0x1,
                            -0x1,
                            -_0x362754,
                            _0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            -0x1,
                            0x0,
                            0x0,
                            0x0,
                            _0x362754,
                            _0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            -0x1,
                            0x0,
                            -0x1,
                            0x0,
                            _0x362754,
                            -_0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            -0x1,
                            0x0,
                            0x0,
                            -0x1,
                            -_0x362754,
                            -_0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            -0x1,
                            0x0,
                            -0x1,
                            -0x1,
                            _0x362754,
                            _0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x0,
                            0x0,
                            _0x362754,
                            _0x331eab,
                            _0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x1,
                            0x0,
                            _0x362754,
                            -_0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x0,
                            0x1,
                            _0x362754,
                            -_0x331eab,
                            _0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x1,
                            0x1,
                            -_0x362754,
                            _0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x0,
                            0x0,
                            _0x362754,
                            _0x331eab,
                            _0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x0,
                            0x0,
                            _0x362754,
                            -_0x331eab,
                            _0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x0,
                            0x1,
                            -_0x362754,
                            -_0x331eab,
                            -_0x4d2b6b,
                            0x0,
                            0x1,
                            0x0,
                            0x1,
                            0x1
                        ]), new Uint16Array([
                            0x0,
                            0x1,
                            0x2,
                            0x5,
                            0x4,
                            0x3,
                            0x6,
                            0x9,
                            0x8,
                            0x8,
                            0x7,
                            0x6,
                            0xb,
                            0xa,
                            0xc,
                            0xc,
                            0xd,
                            0xb,
                            0xe,
                            0xf,
                            0x10,
                            0x10,
                            0x11,
                            0xe
                        ]);
                    }
                }]), _0x1def36;
        }();
    _0x5837c0['showPoint'] = function (_0x1265cc, _0x57a753) {
        for (var _0x5dabfb = 0x0; _0x5dabfb < _0x1265cc['length']; _0x5dabfb++) {
            _0x1265cc[_0x5dabfb], _0x5837c0['createBox'](0.1, 0.1, 0.1);
            var _0x76a443 = new Laya['MeshSprite' + '3D']();
            _0x176ebb['CommonData']['mainScene']['addChild'](_0x76a443);
        }
    }, _0x5837c0['createMesh'] = function (_0x525b60, _0x59421b) {
        Laya['Resource']['destroyUnu' + 'sedResourc' + 'es'](), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION,N' + 'ORMAL');
        for (var _0x32c7a5 = [], _0x2929b0 = new Laya['Vector3'](-0x1, 0x0, 0x0), _0x65b6d5 = 0x0; _0x65b6d5 < _0x525b60['length']; _0x65b6d5++) {
            var _0x5b9063 = _0x525b60[_0x65b6d5];
            _0x32c7a5['push'](_0x5b9063['x']), _0x32c7a5['push'](_0x5b9063['y']), _0x32c7a5['push'](_0x5b9063['z']), _0x32c7a5['push'](_0x2929b0['x']), _0x32c7a5['push'](_0x2929b0['y']), _0x32c7a5['push'](_0x2929b0['z']);
        }
        new Float32Array(_0x32c7a5), new Uint16Array(_0x59421b);
    }, _0x5837c0['createBox2'] = function (_0x22e6de, _0x2a3ef6, _0x1d52db) {
        void 0x0 === _0x22e6de && (_0x22e6de = 0x1), void 0x0 === _0x2a3ef6 && (_0x2a3ef6 = 0x1), void 0x0 === _0x1d52db && (_0x1d52db = 0x1), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION');
        var _0x490fc7 = _0x22e6de / 0x2, _0xecc0db = _0x2a3ef6 / 0x2, _0x3c8e9c = _0x1d52db / 0x2;
        new Float32Array([
            -_0x490fc7,
            _0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            _0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            _0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            _0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            -_0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            -_0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            -_0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            -_0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            _0xecc0db,
            -_0x3c8e9c,
            -_0x490fc7,
            _0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            -_0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            -_0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            _0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            _0xecc0db,
            _0x3c8e9c,
            _0x490fc7,
            -_0xecc0db,
            _0x3c8e9c,
            _0x490fc7,
            -_0xecc0db,
            -_0x3c8e9c,
            -_0x490fc7,
            _0xecc0db,
            _0x3c8e9c,
            _0x490fc7,
            _0xecc0db,
            _0x3c8e9c,
            _0x490fc7,
            -_0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            -_0xecc0db,
            _0x3c8e9c,
            -_0x490fc7,
            _0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            _0xecc0db,
            -_0x3c8e9c,
            _0x490fc7,
            -_0xecc0db,
            -_0x3c8e9c,
            -_0x490fc7,
            -_0xecc0db,
            -_0x3c8e9c
        ]), new Uint16Array([
            0x0,
            0x1,
            0x2,
            0x2,
            0x3,
            0x0,
            0x4,
            0x7,
            0x6,
            0x6,
            0x5,
            0x4,
            0x8,
            0x9,
            0xa,
            0xa,
            0xb,
            0x8,
            0xc,
            0xf,
            0xe,
            0xe,
            0xd,
            0xc,
            0x10,
            0x11,
            0x12,
            0x12,
            0x13,
            0x10,
            0x14,
            0x17,
            0x16,
            0x16,
            0x15,
            0x14
        ]);
    }, _0x5837c0['createBox'] = function (_0x134ec4, _0x4f4e80, _0x42f5d1) {
        void 0x0 === _0x134ec4 && (_0x134ec4 = 0x1), void 0x0 === _0x4f4e80 && (_0x4f4e80 = 0x1), void 0x0 === _0x42f5d1 && (_0x42f5d1 = 0x1), Laya['VertexMesh']['getVertexD' + 'eclaration']('POSITION,N' + 'ORMAL,UV');
        var _0x23b0b7 = _0x134ec4 / 0x2, _0x14904e = _0x4f4e80 / 0x2, _0x3f10ba = _0x42f5d1 / 0x2;
        new Float32Array([
            -_0x23b0b7,
            _0x14904e,
            -_0x3f10ba,
            0x0,
            0x1,
            0x0,
            0x0,
            0x0,
            _0x23b0b7,
            _0x14904e,
            -_0x3f10ba,
            0x0,
            0x1,
            0x0,
            0x1,
            0x0,
            _0x23b0b7,
            _0x14904e,
            _0x3f10ba,
            0x0,
            0x1,
            0x0,
            0x1,
            0x1,
            -_0x23b0b7,
            _0x14904e,
            _0x3f10ba,
            0x0,
            0x1,
            0x0,
            0x0,
            0x1,
            -_0x23b0b7,
            -_0x14904e,
            -_0x3f10ba,
            0x0,
            -0x1,
            0x0,
            0x0,
            0x1,
            _0x23b0b7,
            -_0x14904e,
            -_0x3f10ba,
            0x0,
            -0x1,
            0x0,
            0x1,
            0x1,
            _0x23b0b7,
            -_0x14904e,
            _0x3f10ba,
            0x0,
            -0x1,
            0x0,
            0x1,
            0x0,
            -_0x23b0b7,
            -_0x14904e,
            _0x3f10ba,
            0x0,
            -0x1,
            0x0,
            0x0,
            0x0,
            -_0x23b0b7,
            _0x14904e,
            -_0x3f10ba,
            -0x1,
            0x0,
            0x0,
            0x0,
            0x0,
            -_0x23b0b7,
            _0x14904e,
            _0x3f10ba,
            -0x1,
            0x0,
            0x0,
            0x1,
            0x0,
            -_0x23b0b7,
            -_0x14904e,
            _0x3f10ba,
            -0x1,
            0x0,
            0x0,
            0x1,
            0x1,
            -_0x23b0b7,
            -_0x14904e,
            -_0x3f10ba,
            -0x1,
            0x0,
            0x0,
            0x0,
            0x1,
            _0x23b0b7,
            _0x14904e,
            -_0x3f10ba,
            0x1,
            0x0,
            0x0,
            0x1,
            0x0,
            _0x23b0b7,
            _0x14904e,
            _0x3f10ba,
            0x1,
            0x0,
            0x0,
            0x0,
            0x0,
            _0x23b0b7,
            -_0x14904e,
            _0x3f10ba,
            0x1,
            0x0,
            0x0,
            0x0,
            0x1,
            _0x23b0b7,
            -_0x14904e,
            -_0x3f10ba,
            0x1,
            0x0,
            0x0,
            0x1,
            0x1,
            -_0x23b0b7,
            _0x14904e,
            _0x3f10ba,
            0x0,
            0x0,
            0x1,
            0x0,
            0x0,
            _0x23b0b7,
            _0x14904e,
            _0x3f10ba,
            0x0,
            0x0,
            0x1,
            0x1,
            0x0,
            _0x23b0b7,
            -_0x14904e,
            _0x3f10ba,
            0x0,
            0x0,
            0x1,
            0x1,
            0x1,
            -_0x23b0b7,
            -_0x14904e,
            _0x3f10ba,
            0x0,
            0x0,
            0x1,
            0x0,
            0x1,
            -_0x23b0b7,
            _0x14904e,
            -_0x3f10ba,
            0x0,
            0x0,
            -0x1,
            0x1,
            0x0,
            _0x23b0b7,
            _0x14904e,
            -_0x3f10ba,
            0x0,
            0x0,
            -0x1,
            0x0,
            0x0,
            _0x23b0b7,
            -_0x14904e,
            -_0x3f10ba,
            0x0,
            0x0,
            -0x1,
            0x0,
            0x1,
            -_0x23b0b7,
            -_0x14904e,
            -_0x3f10ba,
            0x0,
            0x0,
            -0x1,
            0x1,
            0x1
        ]), new Uint16Array([
            0x0,
            0x1,
            0x2,
            0x2,
            0x3,
            0x0,
            0x4,
            0x7,
            0x6,
            0x6,
            0x5,
            0x4,
            0x8,
            0x9,
            0xa,
            0xa,
            0xb,
            0x8,
            0xc,
            0xf,
            0xe,
            0xe,
            0xd,
            0xc,
            0x10,
            0x11,
            0x12,
            0x12,
            0x13,
            0x10,
            0x14,
            0x17,
            0x16,
            0x16,
            0x15,
            0x14
        ]);
    };
    var _0x56cd0b = function _0x3d1393() {
        _classCallCheck2(this, _0x3d1393);
    };
    _0x56cd0b['AD_LOAD_EV' + 'ENT'] = '', _0x56cd0b['AD_SHOW_EV' + 'ENT'] = '', _0x56cd0b['AD_VIDEO_C' + 'LOSE_EVENT'] = '', _0x56cd0b['PLATFORM_W' + 'AKE_EVENT'] = '', _0x56cd0b['PLATFORM_S' + 'LEEP_EVENT'] = '', _0x56cd0b['LOAD_FINIS' + 'H_EVENT'] = '', _0x56cd0b['GAME_INIT_' + 'EVENT'] = '', _0x56cd0b['GAME_PLAY_' + 'EVENT'] = '', _0x56cd0b['GAME_REBOR' + 'N_EVENT'] = '', _0x56cd0b['GAME_OVER_' + 'EVENT'] = '', _0x56cd0b['MOUSE_EVEN' + 'T'] = '', _0x56cd0b['CHANGE_SKI' + 'N_EVENT'] = '', _0x56cd0b['CHANGE_BRI' + 'CK_EVENT'] = '', _0x56cd0b['CHANGE_LEV' + 'EL_EVENT'] = '', _0x56cd0b['CHANGE_COI' + 'N_EVENT'] = '', _0x56cd0b['SHOW_TIPS_' + 'EVENT'] = '', _0x56cd0b['UPDATE_SHA' + 'RE_COUNT'] = '', _0x56cd0b['UPDATE_CHE' + 'CK_SV'] = '', _0x56cd0b['LOGIN_EVEN' + 'T'] = '', _0x56cd0b['SHARE_BACK' + '_EVENT'] = '';
    var _0x579e02 = function () {
            function _0x20e1f1() {
                _classCallCheck2(this, _0x20e1f1), Laya['loader']['load'](this['url'], Laya['Handler']['create'](this, this['loadComple' + 'te']), Laya['Handler']['create'](this, this['loadProgre' + 'ss']), Laya['Loader']['PREFAB']);
            }
            return _createClass2(_0x20e1f1, [
                {
                    'key': 'getItem',
                    'value': function _0x4753b8(_0x5a6326) {
                        var _0x193790 = Laya['loader']['getRes'](_0x5a6326);
                        return _0x193790 ? Laya['Pool']['getItemByC' + 'reateFun'](_0x5a6326, _0x193790['create'], _0x193790) : null;
                    }
                },
                {
                    'key': 'recoverIte' + 'm',
                    'value': function _0x3cb646(_0xa71fb0, _0x308a59) {
                        Laya['Pool']['recover'](_0xa71fb0, _0x308a59), _0x308a59['parent']['removeChil' + 'd'](_0x308a59);
                    }
                },
                {
                    'key': 'loadProgre' + 'ss',
                    'value': function _0x124759(_0xc1c3b3) {
                        console['log']('预制体资源加载中..' + '.', _0xc1c3b3);
                    }
                },
                {
                    'key': 'loadComple' + 'te',
                    'value': function _0x556539() {
                        console['log']('预制体资源加载完成!');
                    }
                }
            ]), _0x20e1f1;
        }(), _0x58652c = function () {
            function _0x52f5c5() {
                _classCallCheck2(this, _0x52f5c5), (this['_isPlay'] = !0x1, this['_isOver'] = !0x1, this['_isPause'] = !0x1, this['_isPressed'] = !0x1, Laya['stage']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'nClick']), Laya['stage']['on'](Laya['Event']['MOUSE_UP'], this, this['onMouseUpC' + 'lick']), Laya['stage']['on'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMov' + 'eClick']));
            }
            return _createClass2(_0x52f5c5, [
                {
                    'key': 'isPressed',
                    'get': function _0xb0abc1() {
                        return this['_isPressed'];
                    },
                    'set': function _0x4ddf95(_0xd7c627) {
                        this['_isPressed'] = _0xd7c627;
                    }
                },
                {
                    'key': 'isPlay',
                    'get': function _0x21904a() {
                        return this['_isPlay'];
                    },
                    'set': function _0x32b3e7(_0xa59b05) {
                        this['_isPlay'] = _0xa59b05;
                    }
                },
                {
                    'key': 'isOver',
                    'get': function _0x594792() {
                        return this['_isOver'];
                    },
                    'set': function _0x242450(_0x415c91) {
                        this['_isOver'] = _0x415c91;
                    }
                },
                {
                    'key': 'isPause',
                    'get': function _0x7569cb() {
                        return this['_isPause'];
                    },
                    'set': function _0x518652(_0x1e3023) {
                        this['_isPause'] = _0x1e3023, Laya['timer']['scale'] = _0x1e3023 ? 0x0 : 0x1;
                    }
                },
                {
                    'key': 'gameScale',
                    'set': function _0x20ee7b(_0x63c3de) {
                        Laya['timer']['scale'] = _0x63c3de;
                    }
                },
                {
                    'key': 'onMouseDow' + 'nClick',
                    'value': function _0x18780c(_0x26532d) {
                        _0x176ebb['Event']['event'](_0x56cd0b['MOUSE_EVEN' + 'T'], {
                            'type': 'down',
                            'evt': _0x26532d
                        });
                    }
                },
                {
                    'key': 'onMouseUpC' + 'lick',
                    'value': function _0x3867aa(_0x2cd2a1) {
                        _0x176ebb['Event']['event'](_0x56cd0b['MOUSE_EVEN' + 'T'], {
                            'type': 'up',
                            'evt': _0x2cd2a1
                        });
                    }
                },
                {
                    'key': 'onMouseMov' + 'eClick',
                    'value': function _0x58725c(_0x13851b) {
                        console['log']('eeeeeeeeee' + 'eeee', _0x13851b), _0x176ebb['Event']['event'](_0x56cd0b['MOUSE_EVEN' + 'T'], {
                            'type': 'move',
                            'evt': _0x13851b
                        });
                    }
                },
                {
                    'key': 'getThrowX',
                    'value': function _0x4381a2(_0xd95b7d, _0x457773, _0x59715a, _0x4fd89d) {
                        return _0xd95b7d * Math['pow'](_0x4fd89d, 0x2) + _0x457773 * _0x4fd89d + _0x59715a;
                    }
                }
            ]), _0x52f5c5;
        }(), _0x36ee11 = function () {
            function _0x456161() {
                _classCallCheck2(this, _0x456161);
            }
            return _createClass2(_0x456161, [
                {
                    'key': 'toScale',
                    'value': function _0x49c7c4(_0x1ff638, _0x44b808, _0x185703, _0x447953, _0x5b2448) {
                        var _0x15512c = arguments['length'] > 0x5 && arguments[0x5] !== undefined ? arguments[0x5] : !0x1, _0x3fcf50 = arguments['length'] > 0x6 && arguments[0x6] !== undefined ? arguments[0x6] : null;
                        if (_0x1ff638) {
                            var _0x1e7c05 = null;
                            _0x1ff638['scale'](_0x44b808, _0x44b808), _0x3df7a4();
                        }
                        function _0x3df7a4() {
                            _0x1e7c05 = _0x15512c || _0x5b2448 ? new Laya['Handler'](this, _0x4e78bb) : null, Laya['Tween']['to'](_0x1ff638, {
                                'scaleX': _0x185703,
                                'scaleY': _0x185703
                            }, _0x447953, _0x3fcf50, _0x1e7c05);
                        }
                        function _0x4e78bb() {
                            _0x1e7c05 = _0x15512c ? new Laya['Handler'](this, _0x3df7a4) : null, Laya['Tween']['to'](_0x1ff638, {
                                'scaleX': _0x44b808,
                                'scaleY': _0x44b808
                            }, _0x447953, _0x3fcf50, _0x1e7c05);
                        }
                    }
                },
                {
                    'key': 'toAlpha',
                    'value': function _0xb1d9d4(_0x421f7e, _0x5010bd, _0x349943, _0x4f66e9, _0xdf7c7d) {
                        var _0x16fcd0 = arguments['length'] > 0x5 && arguments[0x5] !== undefined ? arguments[0x5] : !0x1, _0x321db8 = arguments['length'] > 0x6 && arguments[0x6] !== undefined ? arguments[0x6] : null;
                        if (_0x421f7e) {
                            var _0x308f3e = null;
                            _0x421f7e['alpha'] = _0x5010bd, _0x4b2d2c();
                        }
                        function _0x4b2d2c() {
                            _0x308f3e = _0x16fcd0 || _0xdf7c7d ? new Laya['Handler'](this, _0x38ebe2) : null, Laya['Tween']['to'](_0x421f7e, { 'alpha': _0x349943 }, _0x4f66e9, _0x321db8, _0x308f3e);
                        }
                        function _0x38ebe2() {
                            _0x308f3e = _0x16fcd0 ? new Laya['Handler'](this, _0x4b2d2c) : null, Laya['Tween']['to'](_0x421f7e, { 'alpha': _0x5010bd }, _0x4f66e9, _0x321db8, _0x308f3e);
                        }
                    }
                },
                {
                    'key': 'toPosition',
                    'value': function _0xbe4a85(_0x1e3a2e, _0x17ec0c, _0x4ab278) {
                        var _0x3c3a9c = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : !0x1, _0x22ae37 = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : 0x0, _0x3eca4c = new Laya['Vector2'](_0x1e3a2e['x'], _0x1e3a2e['y']);
                        function _0x4b52b5() {
                            if (_0x3c3a9c)
                                switch (_0x22ae37) {
                                case 0x0:
                                    var _0x47c406 = new Laya['Handler'](this, _0x5f2f78);
                                    break;
                                case 0x1:
                                    _0x47c406 = new Laya['Handler'](this, _0x51918e);
                                }
                            Laya['Tween']['to'](_0x1e3a2e, {
                                'x': _0x17ec0c['x'],
                                'y': _0x17ec0c['y']
                            }, _0x4ab278, null, _0x47c406);
                        }
                        function _0x5f2f78() {
                            Laya['Tween']['to'](_0x1e3a2e, {
                                'x': _0x3eca4c['x'],
                                'y': _0x3eca4c['y']
                            }, _0x4ab278, null, Laya['Handler']['create'](this, _0x4b52b5));
                        }
                        function _0x51918e() {
                            _0x1e3a2e['x'] = _0x3eca4c['x'], _0x1e3a2e['y'] = _0x3eca4c['y'], _0x4b52b5();
                        }
                        _0x4b52b5();
                    }
                },
                {
                    'key': 'toPosition' + '3D',
                    'value': function _0x1b7f5c(_0x119ae7, _0x1929bc, _0x18efef, _0x56a2e0, _0xc4a4b9, _0x5ec31d, _0x2f0ab5) {
                        _0xc4a4b9 && (_0x119ae7['transform']['position'] = _0xc4a4b9);
                        var _0x33ae73 = new Laya['Tween'](), _0x3d580d = _0x119ae7['transform']['position']['clone']();
                        _0x33ae73['to'](_0x3d580d, {
                            'x': _0x1929bc['x'],
                            'y': _0x1929bc['y'],
                            'z': _0x1929bc['z']
                        }, _0x18efef, _0x56a2e0, Laya['Handler']['create'](this, function () {
                            _0x119ae7['transform']['position'] = _0x1929bc, _0x5ec31d && _0x5ec31d();
                        })), _0x33ae73['update'] = new Laya['Handler'](this, function () {
                            _0x119ae7['transform']['position'] = _0x3d580d, _0x2f0ab5 && _0x2f0ab5(_0x119ae7, _0x3d580d);
                        });
                    }
                },
                {
                    'key': 'toRotaion',
                    'value': function _0x2b2249(_0x1902c0, _0x58f641, _0x4ace46) {
                        var _0xc0d3cc = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : !0x1, _0x8f63ac = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : !0x1, _0x721050 = _0x1902c0['rotation'];
                        function _0x291a52() {
                            Laya['Tween']['to'](_0x1902c0, { 'rotation': -_0x58f641 }, 0x2 * _0x4ace46, null, Laya['Handler']['create'](this, _0x4bcf32));
                        }
                        function _0x4bcf32() {
                            Laya['Tween']['to'](_0x1902c0, { 'rotation': _0x58f641 }, 0x2 * _0x4ace46, null, Laya['Handler']['create'](this, _0x291a52));
                        }
                        function _0x1b6a45() {
                            Laya['Tween']['to'](_0x1902c0, { 'rotation': _0x721050 }, _0x4ace46);
                        }
                        !function () {
                            if (_0xc0d3cc)
                                var _0x506e83 = new Laya['Handler'](this, _0x291a52);
                            else {
                                if (_0x8f63ac)
                                    var _0x506e83 = new Laya['Handler'](this, _0x1b6a45);
                            }
                            Laya['Tween']['to'](_0x1902c0, { 'rotation': _0x58f641 }, _0x4ace46, null, _0x506e83);
                        }();
                    }
                },
                {
                    'key': 'clear',
                    'value': function _0x442d4b(_0x4e482a) {
                        Laya['Tween']['clearAll'](_0x4e482a);
                    }
                }
            ]), _0x456161;
        }(), _0x164357 = function () {
            function _0x319eae() {
                _classCallCheck2(this, _0x319eae), (this['carStorage'] = {
                    'carConfig': { 'currentUseSkinId': 0x1 },
                    'carData': [{
                            'skinId': 0x1,
                            'level': 0x1
                        }]
                }, this['passMissio' + 'nCount'] = 0x0, this['missionCon' + 'fig'] = [
                    {
                        'type': 'video',
                        'reward': 0x2ee,
                        'totalCount': 0x1,
                        'currentCount': 0x0
                    },
                    {
                        'type': 'comboX3',
                        'reward': 0x1f4,
                        'totalCount': 0x1,
                        'currentCount': 0x0
                    },
                    {
                        'type': 'dontHit',
                        'reward': 0x1f4,
                        'totalCount': 0x1,
                        'currentCount': 0x0
                    },
                    {
                        'type': 'lowHpPass',
                        'reward': 0x1f4,
                        'totalCount': 0x1,
                        'currentCount': 0x0
                    },
                    {
                        'type': 'overtake20',
                        'reward': 0x1f4,
                        'totalCount': 0x14,
                        'currentCount': 0x0
                    },
                    {
                        'type': 'pass3level',
                        'reward': 0x1f4,
                        'totalCount': 0x3,
                        'currentCount': 0x0
                    }
                ], this['currentMis' + 'sion'] = [], this['totalMissi' + 'on'] = []);
            }
            return _createClass2(_0x319eae, [
                {
                    'key': 'createSmok' + 'e',
                    'value': function _0x79668b() {
                        return this['cloneObj'](this['carFx']['getChildBy' + 'Name']('TireSmoke1'));
                    }
                },
                {
                    'key': 'createDama' + 'geSmoke1',
                    'value': function _0x2c8397() {
                        return this['cloneObj'](this['carFx']['getChildBy' + 'Name']('DamageSmok' + 'e1'));
                    }
                },
                {
                    'key': 'createDama' + 'geSmoke2',
                    'value': function _0x4e323e() {
                        return this['cloneObj'](this['carFx']['getChildBy' + 'Name']('DamageSmok' + 'e2'));
                    }
                },
                {
                    'key': 'createBomb',
                    'value': function _0x1e7123() {
                        return this['cloneObj'](this['carFx']['getChildBy' + 'Name']('BoomFX'));
                    }
                },
                {
                    'key': 'createDash',
                    'value': function _0x53577e() {
                        return this['cloneObj'](this['carFx']['getChildBy' + 'Name']('DashFX'));
                    }
                },
                {
                    'key': 'cloneObj',
                    'value': function _0x4b68b9(_0x1ba9d7) {
                        return _0x1ba9d7['clone']();
                    }
                },
                {
                    'key': 'init',
                    'value': function _0x2c3aff(_0xaeb1d1, _0x28cf4e) {
                    }
                },
                {
                    'key': 'loadLevel',
                    'value': function _0x48ffc9() {
                        if (Math['random']() > 0.5)
                            var _0x2557df = [
                                    0x0,
                                    0x1
                                ], _0xc9befe = this['road1Mat']['clone']();
                        else
                            _0x2557df = [
                                0x2,
                                0x3
                            ], _0xc9befe = this['road2Mat']['clone']();
                        this['road']['getChildAt'](0x0)['meshRender' + 'er']['sharedMate' + 'rial'] = _0xc9befe;
                        for (var _0x4af34e = 0x0; _0x4af34e < 0x7; _0x4af34e++) {
                            var _0x345b3c = _0x176ebb['Utils']['getRandomA' + 'rray'](_0x2557df, 0x1)[0x0], _0x4c7e6d = this['cloneObj'](this['scenes']['getChildAt'](_0x345b3c));
                            this['parent']['addChild'](_0x4c7e6d), _0x4c7e6d['transform']['position'] = new Laya['Vector3'](0x0, 0x0, 0xa0 * _0x4af34e);
                            for (var _0x209546 = 0x0; _0x209546 < 0x10; _0x209546++) {
                                var _0x1e2df5 = this['cloneObj'](this['road']);
                                this['parent']['addChild'](_0x1e2df5), _0x1e2df5['transform']['position'] = new Laya['Vector3'](0x0, 0.1, 0xa0 * _0x4af34e + 0xa * _0x209546);
                            }
                        }
                        var _0x1a4a43 = this['cloneObj'](this['end']);
                        this['parent']['addChild'](_0x1a4a43), this['endPosZ'] = 0x2bc, _0x1a4a43['transform']['position'] = new Laya['Vector3'](0x0, 0.11, this['endPosZ']);
                    }
                },
                {
                    'key': 'saveCarSto' + 'rage',
                    'value': function _0x3f89fc() {
                    }
                },
                {
                    'key': 'upgradeCar',
                    'value': function _0x16f7d7(_0x1799dd) {
                        this['carStorage']['carData']['filter'](function (_0x165ec8) {
                            return _0x165ec8['skinId'] == _0x1799dd + 0x1;
                        })[0x0]['level']++, this['saveCarSto' + 'rage']();
                    }
                },
                {
                    'key': 'updateMiss' + 'ions',
                    'value': function _0x3d8802() {
                        this['totalMissi' + 'on']['push'](0x0), this['totalMissi' + 'on'] = this['totalMissi' + 'on']['concat'](_0x176ebb['Utils']['getRandomA' + 'rray']([
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ], 0x5));
                    }
                },
                {
                    'key': 'getCurrent' + 'Mission',
                    'value': function _0x190d5e(_0x47c079) {
                        if (null != _0x47c079) {
                            var _0x19ee9a = this['totalMissi' + 'on']['shift']();
                            return this['missionCon' + 'fig'][this['currentMis' + 'sion'][this['currentMis' + 'sion']['indexOf'](_0x47c079)]]['currentCou' + 'nt'] = 0x0, this['currentMis' + 'sion'][this['currentMis' + 'sion']['indexOf'](_0x47c079)] = _0x19ee9a, this['passMissio' + 'nCount']++, this['totalMissi' + 'on']['length'] < 0x3 && this['updateMiss' + 'ions'](), _0x176ebb['Event']['event']('Update_Mis' + 'sion_Event'), _0x19ee9a;
                        }
                        for (var _0x25786e = this['currentMis' + 'sion']['length']; _0x25786e < 0x3; _0x25786e++) {
                            this['currentMis' + 'sion']['push'](this['totalMissi' + 'on']['shift']()), 0x0 == this['totalMissi' + 'on']['length'] && this['updateMiss' + 'ions']();
                        }
                    }
                },
                {
                    'key': 'updateMiss' + 'ion',
                    'value': function _0x3badb6(_0x20f427, _0x4f421f) {
                        for (var _0x2f5ea9 = 0x0; _0x2f5ea9 < this['currentMis' + 'sion']['length']; _0x2f5ea9++) {
                            if (_0x20f427 == this['currentMis' + 'sion'][_0x2f5ea9]) {
                                var _0x1cc427 = this['missionCon' + 'fig'][_0x20f427];
                                _0x4f421f && _0x1cc427['currentCou' + 'nt'] < _0x1cc427['totalCount'] ? _0x1cc427['currentCou' + 'nt'] = 0x0 : _0x1cc427['currentCou' + 'nt']++;
                            }
                        }
                        _0x176ebb['Event']['event']('Update_Mis' + 'sion_Event');
                    }
                },
                {
                    'key': 'finishMiss' + 'ion',
                    'get': function _0x3afc0d() {
                        for (var _0x39d7bc = 0x0; _0x39d7bc < this['currentMis' + 'sion']['length']; _0x39d7bc++) {
                            var _0x585ec = this['missionCon' + 'fig'][this['currentMis' + 'sion'][_0x39d7bc]];
                            if (_0x585ec && _0x585ec['currentCou' + 'nt'] >= _0x585ec['totalCount'])
                                return !0x0;
                        }
                        return !0x1;
                    }
                }
            ]), _0x319eae;
        }(), _0x325126 = function () {
            function _0x1c9d67() {
                _classCallCheck2(this, _0x1c9d67), (this['bannerId'] = '', this['videoId'] = '', this['interId'] = '', this['existBanne' + 'rAd'] = !0x1, this['existVideo' + 'Ad'] = !0x1, this['existInter' + 'Ad'] = !0x1, this['init']());
            }
            return _createClass2(_0x1c9d67, [
                {
                    'key': 'init',
                    'value': function _0xd644e7() {
                        console['error']('初始化平台失败');
                    }
                },
                {
                    'key': 'loadBanner',
                    'value': function _0x14b2f6() {
                        console['error']('暂不支持调用接口:\x20' + 'loadBanner');
                    }
                },
                {
                    'key': 'showBanner',
                    'value': function _0x3611dd() {
                        console['error']('暂不支持调用接口:\x20' + 'showBanner');
                    }
                },
                {
                    'key': 'hideBanner',
                    'value': function _0x2738cd() {
                        console['error']('暂不支持调用接口:\x20' + 'hideBanner');
                    }
                },
                {
                    'key': 'loadVideoA' + 'd',
                    'value': function _0x2b0134() {
                        console['error']('暂不支持调用接口:\x20' + 'loadVideoA' + 'd');
                    }
                },
                {
                    'key': 'showVideoA' + 'd',
                    'value': function _0x2a207() {
                        console['error']('暂不支持调用接口:\x20' + 'showVideoA' + 'd');
                    }
                }
            ]), _0x1c9d67;
        }();
    !function (_0x5640ba) {
        _0x5640ba[_0x5640ba['WeiXin'] = 0x0] = 'WeiXin', _0x5640ba[_0x5640ba['Qq'] = 0x1] = 'Qq', _0x5640ba[_0x5640ba['Vivo'] = 0x2] = 'Vivo', _0x5640ba[_0x5640ba['Oppo'] = 0x3] = 'Oppo', _0x5640ba[_0x5640ba['ZiJieTiaoD' + 'ong'] = 0x4] = 'ZiJieTiaoD' + 'ong', _0x5640ba[_0x5640ba['Mgc'] = 0x5] = 'Mgc', _0x5640ba[_0x5640ba['Swan'] = 0x6] = 'Swan', _0x5640ba[_0x5640ba['Android'] = 0x7] = 'Android', _0x5640ba[_0x5640ba['Ios'] = 0x8] = 'Ios';
    }(_0x18ac62 || (_0x18ac62 = {}));
    var _0x1ae20b = function () {
            function _0x27e79d() {
                _classCallCheck2(this, _0x27e79d), this['currentInd' + 'ex'] = 0x0;
            }
            return _createClass2(_0x27e79d, [
                {
                    'key': 'sysInfo',
                    'get': function _0x59d4f5() {
                        return this['_sysInfo'] || (this['_sysInfo'] = wx['getSystemI' + 'nfoSync']()), this['_sysInfo'];
                    }
                },
                {
                    'key': 'initAd',
                    'value': function _0x483ffd(_0x2b3f82, _0x270b20) {
                        var _0x23e141 = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 0x5, _0x16c04c = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : 0x7530, _0x30ecac = arguments['length'] > 0x4 && arguments[0x4] !== undefined ? arguments[0x4] : 0x1, _0x137131 = arguments['length'] > 0x5 && arguments[0x5] !== undefined ? arguments[0x5] : 0x1, _0x5d892a = arguments['length'] > 0x6 && arguments[0x6] !== undefined ? arguments[0x6] : [], _0x11cb62 = arguments['length'] > 0x7 && arguments[0x7] !== undefined ? arguments[0x7] : [];
                        this['bannerIds'] = _0x11cb62, _0x2b3f82 && _0x270b20 ? (this['changeTime'] = _0x16c04c, this['refreshNum'] = _0x30ecac, this['bannerNum'] = _0x137131, this['bannerIds'] = this['bannerIds']['concat'](_0x5d892a), this['useInnovat' + 'ion'] = !0x0, this['loadBanner' + 'New'](), this['showBanner'] = this['showBanner' + 'New'], this['hideBanner'] = this['hideBanner' + 'New']) : (this['bannerCoun' + 't'] = _0x23e141, this['currentCou' + 'nt'] = _0x23e141, this['useInnovat' + 'ion'] = !0x1, this['loadBanner' + 'Old'](), this['showBanner'] = this['showBanner' + 'Old'], this['hideBanner'] = this['hideBanner' + 'Old']);
                    }
                },
                {
                    'key': 'getBannerI' + 'd',
                    'value': function _0x2f2f6c() {
                        var _0x46fe71 = Math['floor'](0x64 * Math['random']()) % this['bannerIds']['length'];
                        return this['currentBan' + 'nerId'] = this['bannerIds'][_0x46fe71], this['bannerIds'][_0x46fe71];
                    }
                },
                {
                    'key': 'setBannerT' + 'op',
                    'value': function _0x3da60b(_0x3be254) {
                        if (!this['currentBan' + 'ner'])
                            return;
                        var _0x2ec9b1 = this['sysInfo'];
                        if (this['useInnovat' + 'ion'])
                            var _0x54b417 = this['currentBan' + 'ner']['banner'];
                        else
                            _0x54b417 = this['currentBan' + 'ner'];
                        var _0x4dec4e = _0x54b417['style']['realHeight'] + 0.1;
                        _0x2ec9b1['model']['startsWith']('iPhone\x20X') && (_0x4dec4e += 0x28 / Laya['Browser']['height'] * _0x4b1729['height']), _0x54b417['style']['top'] = _0x2ec9b1['screenHeig' + 'ht'] - _0x4dec4e + _0x3be254;
                    }
                },
                {
                    'key': 'loadBanner' + 'Old',
                    'value': function _0x48d177() {
                        if (!Laya['Browser']['onWeiXin'])
                            return;
                        if (this['isLoading'])
                            return;
                        this['isLoading'] = !0x0, this['currentBan' + 'ner'] && (this['currentBan' + 'ner']['destroy'](), this['currentBan' + 'ner'] = null);
                        var _0x995242 = this['sysInfo'], _0x558c49 = this['getBannerI' + 'd'](), _0x257092 = wx['createBann' + 'erAd']({
                                'adUnitId': _0x558c49,
                                'style': {
                                    'top': 0.8 * _0x995242['screenHeig' + 'ht'],
                                    'width': 0x12c,
                                    'left': _0x995242['screenWidt' + 'h'] / 0x2 - 0x96
                                }
                            });
                        _0x257092['onLoad'](function () {
                            console['log']('create\x20ban' + 'ner\x20succes' + 's'), _0x27e79d['Instance']['currentBan' + 'ner'] = _0x257092, _0x27e79d['Instance']['isLoading'] = !0x1, _0x27e79d['Instance']['isLoadBann' + 'erError'] = !0x1, _0x27e79d['Instance']['isloadAndS' + 'how'] && (_0x27e79d['Instance']['isloadAndS' + 'how'] = !0x1, _0x27e79d['Instance']['showBanner' + 'Old']());
                        }), _0x257092['onError'](function (_0x3dac7d) {
                            console['log']('create\x20ban' + 'ner\x20error', _0x3dac7d), _0x27e79d['Instance']['isLoading'] = !0x1, _0x27e79d['Instance']['isLoadBann' + 'erError'] = !0x0, _0x176ebb['Event']['event']('Hide_Clear' + '_View');
                        }), _0x257092['onResize'](function (_0x3f0f86) {
                        });
                    }
                },
                {
                    'key': 'showBanner' + 'Old',
                    'value': function _0x2862ab() {
                        if (!this['currentBan' + 'ner'])
                            return this['isloadAndS' + 'how'] = !0x0, void this['loadBanner' + 'Old']();
                        if (Laya['Browser']['onWeiXin']) {
                            if (!this['currentBan' + 'ner'])
                                return;
                            if (this['isShowBann' + 'er'])
                                return;
                            this['isShowBann' + 'er'] = !0x0, this['currentBan' + 'ner']['show'](), console['log']('show\x20banne' + 'r'), this['setBannerT' + 'op'](0x0);
                        }
                    }
                },
                {
                    'key': 'hideBanner' + 'Old',
                    'value': function _0x3cb35e() {
                        if (Laya['Browser']['onWeiXin']) {
                            if (this['isloadAndS' + 'how'] = !0x1, 0x0 == this['isShowBann' + 'er'])
                                return;
                            if (this['isShowBann' + 'er'] = !0x1, !this['currentBan' + 'ner'])
                                return;
                            this['currentBan' + 'ner']['hide'](), console['log']('hide\x20banne' + 'r', this['isShowBann' + 'er'], this['currentBan' + 'ner']), this['countBanne' + 'r']();
                        }
                    }
                },
                {
                    'key': 'countBanne' + 'r',
                    'value': function _0x3b7641() {
                        this['currentBan' + 'ner'] && (0x0 == this['currentCou' + 'nt'] && (this['currentCou' + 'nt'] = this['bannerCoun' + 't'], this['loadBanner' + 'Old']()), this['currentCou' + 'nt']--, console['log']('banner剩余展示' + '次数', this['bannerCoun' + 't']));
                    }
                },
                {
                    'key': 'loadBanner' + 'New',
                    'value': function _0x28716b() {
                        var _0x1bd359 = this;
                        if (!Laya['Browser']['onWeiXin'])
                            return;
                        console['log']('create\x20ban' + 'ner'), this['banners'] = [];
                        var _0x4fc1d3 = this['sysInfo'], _0x2738b6 = this['bannerIds']['length'] * this['bannerNum'], _0x4f8b74 = _0x2738b6;
                        for (var _0x59130c = 0x0; _0x59130c < this['bannerIds']['length']; _0x59130c++) {
                            var _0x5215e2 = this['bannerIds'][_0x59130c], _0x1ce89f = function _0x32b4f7(_0x37ad77) {
                                    var _0x4f1d8e = wx['createBann' + 'erAd']({
                                        'adUnitId': _0x5215e2,
                                        'style': {
                                            'top': 0.8 * _0x4fc1d3['screenHeig' + 'ht'],
                                            'width': 0x12c,
                                            'left': _0x4fc1d3['screenWidt' + 'h'] / 0x2 - 0x96
                                        }
                                    });
                                    _0x4f1d8e['onLoad'](function () {
                                        var _0x415870 = {
                                            'banner': _0x4f1d8e,
                                            'showCount': 0x0
                                        };
                                        _0x27e79d['Instance']['banners']['push'](_0x415870), _0x27e79d['Instance']['isLoadBann' + 'erError'] = !0x1, 0x0 == --_0x2738b6 && (_0x27e79d['Instance']['isloadAndS' + 'how'] && _0x27e79d['Instance']['showBanner'](), console['log']('front_bann' + 'er_ids====' + '=====', _0x1bd359['banners']));
                                    }), _0x4f1d8e['onError'](function (_0x4edb37) {
                                        console['log']('create\x20ban' + 'ner\x20error', _0x4edb37), 0x0 == --_0x4f8b74 && (_0x27e79d['Instance']['isLoadBann' + 'erError'] = !0x0, _0x176ebb['Event']['event']('Hide_Clear' + '_View'));
                                    }), _0x4f1d8e['onResize'](function (_0x40b26d) {
                                    });
                                };
                            for (var _0x272c2b = 0x0; _0x272c2b < this['bannerNum']; _0x272c2b++) {
                                _0x1ce89f(_0x272c2b);
                            }
                        }
                    }
                },
                {
                    'key': 'showBanner' + 'New',
                    'value': function _0x1a43ed() {
                        if (Laya['Browser']['onWeiXin']) {
                            if (this['hideBanner' + 'New'](), !this['banners'] || 0x0 == this['banners']['length'])
                                return this['loadBanner' + 'New'](), void (this['isloadAndS' + 'how'] = !0x0);
                            this['currentInd' + 'ex'] >= this['banners']['length'] && (this['currentInd' + 'ex'] = 0x0);
                            var _0x4275e0 = this['banners'][this['currentInd' + 'ex']];
                            if (Laya['timer']['once'](this['changeTime'], this, this['showBanner' + 'New']), !_0x4275e0 || !_0x4275e0['banner'])
                                return;
                            this['currentInd' + 'ex']++, _0x4275e0['banner']['show'](), _0x4275e0['showCount']++, this['currentBan' + 'ner'] = _0x4275e0, console['log']('show\x20banne' + 'r', this['currentInd' + 'ex'] - 0x1), this['setBannerT' + 'op'](0x0);
                        }
                    }
                },
                {
                    'key': 'hideBanner' + 'New',
                    'value': function _0x428368() {
                        if (this['isloadAndS' + 'how'] = !0x1, Laya['Browser']['onWeiXin']) {
                            var _0x7c4b1 = this['currentBan' + 'ner'];
                            if (!_0x7c4b1)
                                return;
                            _0x7c4b1['banner']['hide'](), _0x7c4b1['showCount'] >= this['refreshNum'] && (_0x7c4b1['banner']['destroy'](), this['banners']['splice'](this['banners']['indexOf'](_0x7c4b1), 0x1), console['log']('destroy\x20ba' + 'nner')), console['log']('hide\x20banne' + 'r', this['currentInd' + 'ex'] - 0x1), this['currentBan' + 'ner'] = null, Laya['timer']['clear'](this, this['showBanner' + 'New']);
                        }
                    }
                }
            ], [{
                    'key': 'Instance',
                    'get': function _0x47c9cf() {
                        return _0x27e79d['_instance'] || (_0x27e79d['_instance'] = new _0x27e79d()), _0x27e79d['_instance'];
                    }
                }]), _0x27e79d;
        }(), _0x28c50a = function (_0x1c7c97) {
            _inherits2(_0x498430, _0x1c7c97);
            var _0x3c410a = _createSuper2(_0x498430);
            function _0x498430() {
                var _0x56da41;
                return _classCallCheck2(this, _0x498430), (_0x56da41 = _0x3c410a['apply'](this, arguments), _0x56da41['bannerTopF' + 'actor'] = 0x0, _0x56da41['isShowBann' + 'er'] = !0x1), _0x56da41;
            }
            return _createClass2(_0x498430, [
                {
                    'key': 'init',
                    'value': function _0x963958() {
                    }
                },
                {
                    'key': 'initAd',
                    'value': function _0x49e6e5() {
                        Laya['Browser']['onWeiXin'] && this['loadVideoA' + 'd']();
                    }
                },
                {
                    'key': 'getBannerI' + 'd',
                    'value': function _0x4d4251() {
                        var _0x517598 = Math['floor'](0x64 * Math['random']()) % this['bannerIds']['length'];
                        return this['currentBan' + 'nerId'] = this['bannerIds'][_0x517598], this['bannerIds'][_0x517598];
                    }
                },
                {
                    'key': 'setBannerT' + 'op',
                    'value': function _0x4e600d(_0x388251) {
                        _0x1ae20b['Instance']['setBannerT' + 'op'](_0x388251);
                    }
                },
                {
                    'key': 'countBanne' + 'r',
                    'value': function _0xa1470() {
                        this['existBanne' + 'rAd'] && (0x0 == this['bannerCoun' + 't'] && this['loadBanner'](), this['bannerCoun' + 't']--, console['log']('剩余展示次数', this['bannerCoun' + 't']));
                    }
                },
                {
                    'key': 'loadVideoA' + 'd',
                    'value': function _0x1bf961() {
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x4e680d, _0x31c966 = this;
                            null != (_0x4e680d = this['videoAd']) && (_0x4e680d['offLoad'](_0x4fef0b), _0x4e680d['offError'](_0x47a6a0), _0x4e680d['offClose'](_0x52f325)), (_0x4e680d = wx['createRewa' + 'rdedVideoA' + 'd']({ 'adUnitId': _0x31c966['videoId'] }))['onLoad'](_0x4fef0b), _0x4e680d['onError'](_0x47a6a0), _0x4e680d['onClose'](_0x52f325), this['videoAd'] = _0x4e680d;
                        }
                        function _0x4fef0b() {
                            console['log']('video\x20加载成功'), _0x31c966['existVideo' + 'Ad'] = !0x0;
                        }
                        function _0x47a6a0(_0x2a9e65) {
                            console['error']('video\x20加载错误', _0x2a9e65), _0x31c966['existVideo' + 'Ad'] = !0x1;
                        }
                        function _0x52f325(_0x1b3bf1) {
                            var _0x5bf88c = !!(_0x1b3bf1 && _0x1b3bf1['isEnded'] || void 0x0 === _0x1b3bf1);
                            _0x176ebb['Event']['event'](_0x56cd0b['AD_VIDEO_C' + 'LOSE_EVENT'], { 'isEnded': _0x5bf88c });
                        }
                    }
                },
                {
                    'key': 'showVideoA' + 'd',
                    'value': function _0x3b9a93() {
                        if (Laya['Browser']['onWeiXin']) {
                            if (!this['existVideo' + 'Ad'])
                                return _0x176ebb['Platform']['showToast']('暂无视频', 0x7d0), void this['videoAd']['load']();
                            if (Laya['Browser']['onWeiXin']) {
                                var _0x2517cd = this['videoAd'];
                                _0x2517cd['show']()['then'](function () {
                                })['catch'](function (_0x1210a5) {
                                    _0x2517cd['load']()['then'](function () {
                                        return _0x2517cd['show']();
                                    });
                                });
                            }
                        }
                    }
                },
                {
                    'key': 'loadBanner',
                    'value': function _0x5e1563(_0x2ea571) {
                        if (Laya['Browser']['onWeiXin'] && (_0x2ea571 && (this['isloadAndS' + 'how'] = _0x2ea571), !this['isLoading'])) {
                            this['isLoading'] = !0x0, this['existBanne' + 'rAd'] = !0x1;
                            var _0x21384b = this, _0xb1f25e = this['sysInfo'], _0x42ad2e = this['getBannerI' + 'd'](), _0x3fd977 = wx['createBann' + 'erAd']({
                                    'adUnitId': _0x42ad2e,
                                    'style': {
                                        'top': 0.8 * _0xb1f25e['screenHeig' + 'ht'],
                                        'width': 0x12c,
                                        'left': _0xb1f25e['screenWidt' + 'h'] / 0x2 - 0x96
                                    }
                                });
                            _0x3fd977['onError'](function (_0x138617) {
                                _0x21384b['existBanne' + 'rAd'] = !0x1, console['error']('Banner\x20加载错' + '误', _0x138617), _0x21384b['isLoading'] = !0x1, _0x21384b['bannerLoad' + 'Error'] = !0x0, _0x176ebb['Event']['event']('Hide_Clear' + '_View');
                            }), _0x3fd977['onResize'](function (_0x13d715) {
                            });
                        }
                    }
                },
                {
                    'key': 'showBanner',
                    'value': function _0x34c094(_0x4ce8d5, _0x553504) {
                        Laya['Browser']['onWeiXin'] && _0x1ae20b['Instance']['showBanner']();
                    }
                },
                {
                    'key': 'hideBanner',
                    'value': function _0x1f5e5d() {
                        if (Laya['Browser']['onWeiXin'] && (_0x1ae20b['Instance']['hideBanner'](), this['existBanne' + 'rAd'] && this['bannerItem'] && 0x0 != this['isShowBann' + 'er'] && Laya['Browser']['onWeiXin'])) {
                            this['isShowBann' + 'er'] = !0x1;
                            var _0x27f7b6 = this['bannerItem'];
                            if (!_0x27f7b6)
                                return;
                            _0x27f7b6['hide'](), console['log']('hide\x20banne' + 'r'), this['countBanne' + 'r']();
                        }
                    }
                },
                {
                    'key': 'getSystemI' + 'nfoSync',
                    'value': function _0x54566c() {
                        Laya['Browser']['onWeiXin'] && (this['sysInfo'] = wx['getSystemI' + 'nfoSync']());
                    }
                },
                {
                    'key': 'regisiterW' + 'xCallback',
                    'value': function _0x444f47() {
                        Laya['Browser']['onWeiXin'] && (wx['offShow'](this['onShowEven' + 't']), wx['onShow'](this['onShowEven' + 't']), wx['offHide'](this['onHideEven' + 't']), wx['onHide'](this['onHideEven' + 't']));
                    }
                },
                {
                    'key': 'onShowEven' + 't',
                    'value': function _0x5825bc(_0x255e78) {
                    }
                },
                {
                    'key': 'onHideEven' + 't',
                    'value': function _0x57cc8e() {
                        console['log']('onHide'), _0x176ebb['Event']['event'](_0x56cd0b['PLATFORM_S' + 'LEEP_EVENT']), _0x176ebb['Game']['isPlay'] && (_0x176ebb['Game']['isPlay'] = !0x1);
                    }
                },
                {
                    'key': 'showShareM' + 'enuWithTic' + 'ket',
                    'value': function _0x40637a(_0x5473c0) {
                        wx['showShareM' + 'enu']({
                            'withShareTicket': _0x5473c0,
                            'success': function _0x40909f() {
                            },
                            'fail': function _0x4585de() {
                            },
                            'complete': function _0x2424e1() {
                            }
                        });
                    }
                },
                {
                    'key': 'regisiterW' + 'XShareCall' + 'back',
                    'value': function _0x162bd0() {
                    }
                },
                {
                    'key': 'showToast',
                    'value': function _0x1aac74(_0x163a2f, _0xee7f2e) {
                        Laya['Browser']['onWeiXin'] && wx['showToast']({
                            'title': _0x163a2f,
                            'duration': _0xee7f2e,
                            'icon': 'none',
                            'success': function _0x67f372() {
                            },
                            'fail': function _0x563106() {
                            },
                            'complete': function _0x2a46ba() {
                            },
                            'image': '',
                            'mask': !0x1
                        });
                    }
                },
                {
                    'key': 'shareGame',
                    'value': function _0x45afc8(_0x6db3f3) {
                    }
                },
                {
                    'key': 'playVibrat' + 'eShort',
                    'value': function _0x44d7f0() {
                        Laya['Browser']['onWeiXin'] && wx['vibrateSho' + 'rt']({
                            'success': function _0xf95333() {
                            },
                            'fail': function _0x3cc5fd() {
                            },
                            'complete': function _0x2fcef4() {
                            }
                        });
                    }
                },
                {
                    'key': 'playVibrat' + 'eLong',
                    'value': function _0x426f1c() {
                        Laya['Browser']['onWeiXin'] && wx['vibrateLon' + 'g']({
                            'success': function _0x179685() {
                            },
                            'fail': function _0x99eef9() {
                            },
                            'complete': function _0x132912() {
                            }
                        });
                    }
                },
                {
                    'key': 'showModal',
                    'value': function _0x17dae4(_0x4f8252) {
                        if (Laya['Browser']['onWeiXin']) {
                            var _0x2f04bf = this;
                            wx['showModal']({
                                'title': '提示',
                                'content': _0x4f8252,
                                'showCancel': !0x0,
                                'confirmText': '重新分享',
                                'success': function _0x17a94d(_0x4dc83e) {
                                    _0x4dc83e['confirm'] ? (console['log']('点击确定'), _0x2f04bf['shareGame'](_0x2f04bf['shareCallB' + 'ack'])) : _0x4dc83e['cancel'] && console['log']('点击取消');
                                }
                            });
                        }
                    }
                },
                {
                    'key': 'aldSendEve' + 'nt',
                    'value': function _0x19a868(_0x2409b0, _0x1d7ea9) {
                    }
                },
                {
                    'key': 'aldSendOpe' + 'nid',
                    'value': function _0x481661(_0x5881e8) {
                    }
                },
                {
                    'key': 'JJBannerAd' + 'ShowCount',
                    'value': function _0x2ed828() {
                        var _0x5602d0 = this;
                        Laya['Browser']['onWeiXin'] && wx['JJBannerAd' + 'ShowCount'](function () {
                            return {
                                'adUnitId': _0x5602d0['currentBan' + 'nerId'],
                                'adUnitName': 'banner',
                                'pageName': 'all'
                            };
                        });
                    }
                },
                {
                    'key': 'JJSendVide' + 'oAdCount',
                    'value': function _0x4c9b31(_0x32f354, _0x15f2fb) {
                        var _0xe20e0d = this;
                        Laya['Browser']['onWeiXin'] && wx['JJSendVide' + 'oAdCount'](function () {
                            return {
                                'adUnitId': _0xe20e0d['videoId'],
                                'adUnitName': _0x15f2fb,
                                'isEnded': _0x32f354
                            };
                        });
                    }
                },
                {
                    'key': 'JJShareApp' + 'Message',
                    'value': function _0x249eee(_0x234a12, _0xe22b7b) {
                        wx['JJShareApp' + 'Message'](function () {
                            return {
                                'title': _0x234a12['title'],
                                'imageUrl': _0x234a12['imageUrl'],
                                'id': _0x234a12['id']
                            };
                        })['then'](function (_0x587b5c) {
                            _0xe22b7b(_0x587b5c);
                        });
                    }
                },
                {
                    'key': 'JJOnShareA' + 'ppMessage',
                    'value': function _0x5d34c5(_0x51a68d) {
                        wx['JJOnShareA' + 'ppMessage'](function () {
                            return {
                                'title': _0x51a68d['title'],
                                'imageUrl': _0x51a68d['imageUrl'],
                                'id': _0x51a68d['id']
                            };
                        });
                    }
                },
                {
                    'key': 'JJStageSta' + 'rt',
                    'value': function _0x1d33b0(_0x3bdb06, _0x198564) {
                        Laya['Browser']['onWeiXin'] && wx['JJStage']['onStart']({
                            'stageId': _0x3bdb06,
                            'stageName': _0x198564
                        });
                    }
                },
                {
                    'key': 'JJStageEnd',
                    'value': function _0x58c5e3(_0x13880a, _0x270c0f) {
                        var _0x4b3b8b = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : 'complete', _0xfd350 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : { 'desc': '关卡完成' };
                        Laya['Browser']['onWeiXin'] && wx['JJStage']['onEnd']({
                            'stageId': _0x13880a,
                            'stageName': _0x270c0f,
                            'event': _0x4b3b8b,
                            'params': _0xfd350
                        });
                    }
                },
                {
                    'key': 'bannerLoad' + 'Error',
                    'get': function _0x3c71c9() {
                        return _0x1ae20b['Instance']['isLoadBann' + 'erError'];
                    },
                    'set': function _0x5025dc(_0x477817) {
                    }
                }
            ]), _0x498430;
        }(_0x325126), _0xed81a9 = function (_0x52496d) {
            _inherits2(_0x50fded, _0x52496d);
            var _0x3a52f9 = _createSuper2(_0x50fded);
            function _0x50fded() {
                return _classCallCheck2(this, _0x50fded), _0x3a52f9['apply'](this, arguments);
            }
            return _0x50fded;
        }(_0x28c50a), _0x236380 = function () {
            function _0xba48bd() {
                _classCallCheck2(this, _0xba48bd);
                for (var _0x371522 in (this['_pathRoot'] = 'res/Sounds' + '/', this['_soundCtx'] = {}, this['_soundFile'] = [], _0x4633bf)) {
                    var _0x390fd4 = _0x4633bf[_0x371522];
                    this['_soundFile']['push'](_0x390fd4);
                }
                console['log'](this['_soundFile']), this['init']();
            }
            return _createClass2(_0xba48bd, [
                {
                    'key': 'init',
                    'value': function _0x38fcf2() {
                        var _0xa3a1b9 = this, _0x2c3838 = this['_pathRoot'], _0x48e33a = '', _0x4ce050 = this['_soundFile'], _0x58e79d = this['_soundFile']['length'];
                        for (var _0x5a7d5d = 0x0; _0x5a7d5d < _0x58e79d; ++_0x5a7d5d) {
                            _0x48e33a = _0x4ce050[_0x5a7d5d];
                            var _0x40930a = new Laya['SoundChann' + 'el']();
                            _0x40930a['url'] = _0x2c3838 + _0x48e33a + '.mp3', -0x1 != _0x48e33a['indexOf']('PoliceSire' + 'n') && (_0x40930a['loops'] = 0x0), Laya['SoundManag' + 'er']['addChannel'](_0x40930a), this['_soundCtx'][_0x48e33a] = !0x0;
                        }
                        Laya['loader']['load'](['res/Sounds' + '/Bgm.mp3'], Laya['Handler']['create'](this, function () {
                        })), Laya['SoundManag' + 'er']['autoReleas' + 'eSound'] = !0x1;
                    }
                },
                {
                    'key': 'play',
                    'value': function _0x58c773(_0x3f6134) {
                        this['_soundCtx'][_0x3f6134] && Laya['SoundManag' + 'er']['playSound'](this['_pathRoot'] + _0x3f6134 + '.mp3');
                    }
                },
                {
                    'key': 'playLoop',
                    'value': function _0x4fa547(_0x23cc1f) {
                        this['_soundCtx'][_0x23cc1f] && Laya['SoundManag' + 'er']['playSound'](this['_pathRoot'] + _0x23cc1f + '.mp3', 0x0);
                    }
                },
                {
                    'key': 'stop',
                    'value': function _0x562d43(_0x2e27a7) {
                        this['_soundCtx'][_0x2e27a7] && Laya['SoundManag' + 'er']['stopSound'](this['_pathRoot'] + _0x2e27a7 + '.mp3');
                    }
                },
                {
                    'key': 'playMusic',
                    'value': function _0x2e7b01(_0x27591a) {
                        Laya['SoundManag' + 'er']['stopMusic'](), _0x27591a ? (Laya['SoundManag' + 'er']['playMusic'](this['_pathRoot'] + _0x27591a + '.mp3', 0x0), this['currentMus' + 'ic'] = _0x27591a) : Laya['SoundManag' + 'er']['playMusic'](this['_pathRoot'] + this['currentMus' + 'ic'] + '.mp3', 0x0);
                    }
                },
                {
                    'key': 'stopMusic',
                    'value': function _0x1ef9de() {
                        Laya['SoundManag' + 'er']['stopMusic']();
                    }
                }
            ]), _0xba48bd;
        }(), _0x467cac = function () {
            function _0x4ea595() {
                _classCallCheck2(this, _0x4ea595), (this['host'] = '', this['appKey'] = '', this['gameConfig' + 's'] = {});
            }
            return _createClass2(_0x4ea595, [
                {
                    'key': 'request',
                    'value': function _0x34c386(_0x1870b6, _0x5b35f7, _0x140d03) {
                        var _0x226ff7 = arguments['length'] > 0x3 && arguments[0x3] !== undefined ? arguments[0x3] : 'get', _0x5cd4ec = new Laya['HttpReques' + 't']();
                        _0x5cd4ec['once'](Laya['Event']['COMPLETE'], this, _0x140d03), _0x5cd4ec['once'](Laya['Event']['ERROR'], this, this['errorHandl' + 'er']), _0x5cd4ec['on'](Laya['Event']['PROGRESS'], this, this['progressHa' + 'ndler']);
                        var _0x5714ff = this['host'] + _0x1870b6;
                        'get' == _0x226ff7 ? _0x5cd4ec['send'](_0x5714ff + _0x5b35f7, '', 'get', 'json') : 'post' == _0x226ff7 && _0x5cd4ec['send'](_0x5714ff, _0x5b35f7, 'post', 'json', [
                            'Content-Ty' + 'pe',
                            'applicatio' + 'n/json;cha' + 'rset=UTF-8'
                        ]);
                    }
                },
                {
                    'key': 'errorHandl' + 'er',
                    'value': function _0x2b4153(_0x34af82) {
                        console['error']('HTTP\x20错误：', _0x34af82);
                    }
                },
                {
                    'key': 'progressHa' + 'ndler',
                    'value': function _0x57849c(_0x3c11f5) {
                    }
                },
                {
                    'key': 'getJJGameC' + 'onfigs',
                    'value': function _0x2e24c5() {
                        var _0x2da5f0 = {};
                        _0x2da5f0['version'] = _0x176ebb['CommonData']['gameVersio' + 'n'], _0x2da5f0['app_key'] = this['appKey'], _0x2da5f0 = this['getParam'](_0x2da5f0), this['request']('game/confi' + 'gs', _0x2da5f0, function (_0x41fda7) {
                            console['log'](_0x41fda7);
                        });
                    }
                },
                {
                    'key': 'getJJGameA' + 'ds',
                    'value': function _0x4a609a() {
                        var _0x42b1ae = arguments['length'] > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : '', _0x5412c5 = {};
                        _0x5412c5['app_key'] = this['appKey'], _0x5412c5['position_i' + 'd'] = _0x42b1ae, _0x5412c5 = this['getParam'](_0x5412c5), this['request']('ads', _0x5412c5, function (_0x390c12) {
                            console['log'](_0x390c12);
                        });
                    }
                },
                {
                    'key': 'getParam',
                    'value': function _0x25c919(_0x202e9b) {
                        var _0x230fe6 = '?';
                        for (var _0x5590e7 in _0x202e9b) {
                            _0x230fe6 += _0x5590e7 + '=' + _0x202e9b[_0x5590e7] + '&';
                        }
                        return _0x230fe6;
                    }
                }
            ]), _0x4ea595;
        }(), _0x176ebb = function () {
            function _0x25c055() {
                _classCallCheck2(this, _0x25c055);
            }
            return _createClass2(_0x25c055, null, [
                {
                    'key': 'init',
                    'value': function _0x52d6e5() {
                        for (var _0x1b438f in _0x56cd0b) {
                            _0x56cd0b[_0x1b438f] = _0x1b438f;
                        }
                        _0x25c055['UI'], _0x25c055['Storage'], _0x25c055['Prefab'], _0x25c055['CommonData'], _0x25c055['Utils'], _0x25c055['Event'], _0x25c055['Game'], _0x25c055['Tween'], _0x25c055['Level'], _0x25c055['Platform'], _0x25c055['Streng'], _0x25c055['Sound'];
                    }
                },
                {
                    'key': 'UI',
                    'get': function _0x78b189() {
                        return this['uiManager'] || (this['uiManager'] = new _0x59caee()), this['uiManager'];
                    }
                },
                {
                    'key': 'Storage',
                    'get': function _0x48dc9c() {
                        return this['storageMan' + 'ager'] || (this['storageMan' + 'ager'] = new StorageManager()), this['storageMan' + 'ager'];
                    }
                },
                {
                    'key': 'Utils',
                    'get': function _0x4a4fad() {
                        return this['utils'] || (this['utils'] = new _0x5837c0()), this['utils'];
                    }
                },
                {
                    'key': 'CommonData',
                    'get': function _0x3f9e83() {
                        return this['commonData'] || (this['commonData'] = new _0x2f2328()), this['commonData'];
                    }
                },
                {
                    'key': 'Event',
                    'get': function _0x59fa63() {
                        return this['event'] || (this['event'] = new Laya['EventDispa' + 'tcher']()), this['event'];
                    }
                },
                {
                    'key': 'Prefab',
                    'get': function _0x5aecf7() {
                        return this['prefabMana' + 'ger'] || (this['prefabMana' + 'ger'] = new _0x579e02()), this['prefabMana' + 'ger'];
                    }
                },
                {
                    'key': 'Game',
                    'get': function _0x4c598d() {
                        return this['gameManage' + 'r'] || (this['gameManage' + 'r'] = new _0x58652c()), this['gameManage' + 'r'];
                    }
                },
                {
                    'key': 'Tween',
                    'get': function _0x3fba7a() {
                        return this['tweenManag' + 'er'] || (this['tweenManag' + 'er'] = new _0x36ee11()), this['tweenManag' + 'er'];
                    }
                },
                {
                    'key': 'Level',
                    'get': function _0x3d55f2() {
                        return this['levelManag' + 'er'] || (this['levelManag' + 'er'] = new _0x164357()), this['levelManag' + 'er'];
                    }
                },
                {
                    'key': 'Platform',
                    'get': function _0x767ac9() {
                        return this['platformMa' + 'nager'] || (this['platformMa' + 'nager'] = new _0xed81a9()), this['platformMa' + 'nager'];
                    }
                },
                {
                    'key': 'Streng',
                    'get': function _0x7f8cfe() {
                        return null;
                    }
                },
                {
                    'key': 'Sound',
                    'get': function _0x3ad50b() {
                        return this['soundManag' + 'er'] || (this['soundManag' + 'er'] = new _0x236380()), this['soundManag' + 'er'];
                    }
                },
                {
                    'key': 'Net',
                    'get': function _0x3d9d36() {
                        return this['netManager'] || (this['netManager'] = new _0x467cac()), this['netManager'];
                    }
                }
            ]), _0x25c055;
        }(), _0x5e7ca3 = function (_0x838dfe) {
            _inherits2(_0x28927d, _0x838dfe);
            var _0x20e873 = _createSuper2(_0x28927d);
            function _0x28927d() {
                var _0x4144d7;
                return _classCallCheck2(this, _0x28927d), (_0x4144d7 = _0x20e873['apply'](this, arguments), _0x4144d7['SceneDone'] = !0x1, _0x4144d7['FxDone'] = !0x1, _0x4144d7['isLoading'] = !0x0), _0x4144d7;
            }
            return _createClass2(_0x28927d, [
                {
                    'key': 'init',
                    'value': function _0xf568fc() {
                        var _0x1629be = this;
                        if (this['initLoadin' + 'g'](), this['updateLoad' + 'ing'](0x0), Laya['Browser']['onWeiXin']) {
                            var _0x257fe5 = function _0x23d18f() {
                                _0x176ebb['Utils']['loadSubpac' + 'kagesSync'](['res'], _0x1629be, function (_0x1ec98f, _0x5e4cd2) {
                                    _0x5e4cd2 ? (_0x1ec98f['init1'](), _0x176ebb['CommonData']['laodSubpac' + 'kageFinish'] = !0x0) : _0x23d18f();
                                });
                            };
                            _0x257fe5();
                        } else
                            this['init1']();
                    }
                },
                {
                    'key': 'init1',
                    'value': function _0x35dd32() {
                        this['bar']['bar']['x'] = 3.5, this['bar']['bar']['y'] = 3.8, this['updateLoad' + 'ing'](0.25), _0x33885f['isPure'];
                        var _0x4bf87f = _0x83809['GetPlayerD' + 'ata']();
                        _0x83809['CheckPlaye' + 'rData'](), console['log']('玩家存档信息：', _0x4bf87f), this['initGame']();
                    }
                },
                {
                    'key': 'initGame',
                    'value': function _0x44655f() {
                        this['updateLoad' + 'ing'](0.5), console['log']('加载声音'), _0x33885f['soundContr' + 'oller'] = new _0x236380(), _0x33885f['camShake'] = new _0x11459f(), console['log']('进入Loading界' + '面'), console['log']('开始加载场景'), (Laya['Scene3D']['load']('res/LayaSc' + 'ene_main/C' + 'onventiona' + 'l/main.ls', Laya['Handler']['create'](this, this['onComplete'])), Laya['Sprite3D']['load']('res/LayaSc' + 'ene_main/C' + 'onventiona' + 'l/main.lh', Laya['Handler']['create'](this, this['onFxComple' + 'te'])));
                    }
                },
                {
                    'key': 'StartGame',
                    'value': function _0x5a1993() {
                        platform['getInstanc' + 'e']()['puzzlegame' + 'startup']('Stack-Maze' + '-Puzzle', () => {
                            Laya['stage']['addChild'](window['box_adTwo']), window['box_adTwo']['setSpaceX'](0x96), window['box_adTwo']['bottom'] = 0xfa, window['box_adTwo']['visible'] = ![], window['yad']['scaleX'] = 0.7, window['yad']['scaleY'] = 0.7, window['yad']['right'] = 0x14, window['yad']['top'] = 0x14, platform['getInstanc' + 'e']()['hideSplash'](), platform['getInstanc' + 'e']()['showBanner'](), Laya['stage']['addChild'](window['scrollList']), window['scrollList']['scale'](0.8, 0.8), window['scrollList']['bottom'] = 0x3c, window['scrollList']['visible'] = ![];
                            var _0x2b7526 = this;
                            console['log']('this.scene' + 'down', this['SceneDone']), console['log']('this.bar', this['bar']), window['bar'] = this['bar']['bar'], this['SceneDone'] && this['FxDone'] && this['updateLoad' + 'ing'](0.988);
                        });
                    }
                },
                {
                    'key': 'SceneInit',
                    'value': function _0x2d2976() {
                        _0x33885f['player'] = _0x33885f['scene3D']['getChildBy' + 'Name']('Player'), _0x33885f['mainCam'] = _0x33885f['scene3D']['getChildBy' + 'Name']('Main\x20Camer' + 'a'), _0x33885f['anim'] = _0x33885f['player']['getChildBy' + 'Name']('Model')['getCompone' + 'nt'](Laya['Animator']), _0x33885f['collider'] = new _0xa9a828(), _0x33885f['fxControll' + 'er'] = new _0xabd044();
                        var _0x31a434 = _0x33885f['scene3D']['getChildBy' + 'Name']('Directiona' + 'l\x20Light');
                        _0x31a434['shadowMode'] = Laya['ShadowMode']['SoftLow'], _0x31a434['shadowDist' + 'ance'] = 0x32, _0x31a434['shadowReso' + 'lution'] = 0x800, _0x31a434['shadowCasc' + 'adesMode'] = Laya['ShadowCasc' + 'adesMode']['NoCascades'], Laya['timer']['frameLoop'](0x1, _0x33885f['scene3D'], function () {
                            var _0x568264 = _0x33885f['scene3D']['getChildBy' + 'Name']('Water');
                            for (var _0x512507 = 0x0; _0x512507 < _0x568264['numChildre' + 'n']; _0x512507++) {
                                var _0x3db45e = _0x568264['getChildAt'](_0x512507)['meshRender' + 'er']['material'];
                                _0x3db45e['tilingOffs' + 'etW'] += 0.002, _0x3db45e['tilingOffs' + 'etZ'] += 0.002;
                            }
                        }), _0x33885f['mainCam']['enableHDR'] = !0x1, Laya['stage']['useRetinal' + 'Canvas'] = !0x1;
                    }
                },
                {
                    'key': 'initLoadin' + 'g',
                    'value': function _0x256a91() {
                    }
                },
                {
                    'key': 'updateLoad' + 'ing',
                    'value': function _0x7aa9cd(_0x20b223) {
                        var _0x1a3597 = this;
                        console['log']('e', _0x20b223), Laya['Tween']['to'](this['bar'], { 'value': _0x20b223 }, 0x3e8, null, new Laya['Handler'](this, () => {
                            if (this['bar']['value'] >= 0.988) {
                                var _0x57f2d8 = function _0x11b42e() {
                                    console['log']('打开游戏场景'), Laya['stage']['addChild'](_0x33885f['scene3D']), console['log']('初始化场景信息'), _0x1a3597['SceneInit'](), _0x516ba4['Init'](), Laya['Scene']['destroy'](_0x338ce2['LOADING']), _0x5afa76['loadScene'](_0x338ce2['STARTMENU'], 0x0);
                                };
                                setTimeout(function () {
                                    _0x3d1c55['instance']['initJJ'](_0x57f2d8);
                                }, 0x1f4);
                            }
                        }));
                    }
                },
                {
                    'key': 'exitLoadin' + 'g',
                    'value': function _0x2f80e9() {
                        Laya['Tween']['clearTween'](this['tween']), this['isLoading'] = !0x1;
                    }
                },
                {
                    'key': 'onComplete',
                    'value': function _0x2c563e(_0x2b3b3c) {
                        this['updateLoad' + 'ing'](0.75), _0x33885f['scene3D'] = _0x2b3b3c, _0x33885f['prefabs'] = _0x33885f['scene3D']['getChildBy' + 'Name']('Prefabs'), this['SceneDone'] = !0x0, console['log']('场景加载完成'), this['StartGame']();
                    }
                },
                {
                    'key': 'onFxComple' + 'te',
                    'value': function _0x18484e(_0x539579) {
                        this['updateLoad' + 'ing'](0.75), _0x33885f['fxs'] = _0x539579['getChildBy' + 'Name']('Fx'), this['FxDone'] = !0x0, console['log']('额外道具加载完成'), this['StartGame']();
                    }
                }
            ]), _0x28927d;
        }(_0x3dd129), _0x53ad49 = function (_0x8d4ccf) {
            _inherits2(_0x1e07f5, _0x8d4ccf);
            var _0x8eb3ba = _createSuper2(_0x1e07f5);
            function _0x1e07f5() {
                return _classCallCheck2(this, _0x1e07f5), _0x8eb3ba['apply'](this, arguments);
            }
            return _createClass2(_0x1e07f5, [
                {
                    'key': 'init',
                    'value': function _0x3893af() {
                        this['init1']();
                    }
                },
                {
                    'key': 'init1',
                    'value': function _0x8e20f2() {
                        this['data'] = _0x83809['GetPlayerD' + 'ata'](), console['log']('玩家存档信息：', this['data']), this['initAllIte' + 'm'](), this['initButton' + 'Event'](), this['coinValue']['value'] = this['data']['coin'];
                    }
                },
                {
                    'key': 'initButton' + 'Event',
                    'value': function _0x1db020() {
                        _0x5afa76['imageButto' + 'nInit'](this['item1'], this, this['itemEvent'], 0x1), _0x5afa76['imageButto' + 'nInit'](this['item2'], this, this['itemEvent'], 0x2), _0x5afa76['imageButto' + 'nInit'](this['item3'], this, this['itemEvent'], 0x3), _0x5afa76['imageButto' + 'nInit'](this['item4'], this, this['itemEvent'], 0x4), _0x5afa76['imageButto' + 'nInit'](this['item5'], this, this['itemEvent'], 0x5), _0x5afa76['imageButto' + 'nInit'](this['item6'], this, this['itemEvent'], 0x6), _0x5afa76['imageButto' + 'nInit'](this['item7'], this, this['itemEvent'], 0x7), _0x5afa76['imageButto' + 'nInit'](this['item8'], this, this['itemEvent'], 0x8), _0x5afa76['imageButto' + 'nInit'](this['item9'], this, this['itemEvent'], 0x9), _0x5afa76['imageButto' + 'nInit'](this['videoButto' + 'n'], this, this['videoEvent']), _0x5afa76['imageButto' + 'nInit'](this['backButton'], this, this['backEvent']);
                    }
                },
                {
                    'key': 'closeAllSh' + 'owCar',
                    'value': function _0x13c599() {
                        var _0x5b40d3 = this['getChildAt'](0x1);
                        for (var _0x3e179a = 0x0; _0x3e179a < _0x5b40d3['numChildre' + 'n']; _0x3e179a++) {
                            _0x5b40d3['getChildAt'](_0x3e179a)['visible'] = !0x1;
                        }
                    }
                },
                {
                    'key': 'initAllIte' + 'm',
                    'value': function _0x5aaa48() {
                        var _0x485dae = [
                            this['item1'],
                            this['item2'],
                            this['item3'],
                            this['item4'],
                            this['item5'],
                            this['item6'],
                            this['item7'],
                            this['item8'],
                            this['item9']
                        ];
                        for (var _0x1b26b9 = 0x0; _0x1b26b9 < 0x9; _0x1b26b9++) {
                            var _0x3b632b = _0x485dae[_0x1b26b9], _0x5850bc = _0x3b632b['getChildBy' + 'Name']('choose'), _0x34dc81 = _0x3b632b['getChildBy' + 'Name']('lock'), _0xb47664 = _0x3b632b['getChildBy' + 'Name']('tips'), _0x1a0091 = _0x3b632b['getChildBy' + 'Name']('showOpen'), _0x5edc94 = _0x3b632b['getChildBy' + 'Name']('showClose');
                            _0x5850bc['set_visibl' + 'e'](_0x1b26b9 == this['data']['nowPeople']), _0x34dc81['set_visibl' + 'e'](!this['data']['peopleActi' + 've'][_0x1b26b9]), _0xb47664['set_visibl' + 'e'](!this['data']['peopleActi' + 've'][_0x1b26b9]), _0x1a0091['set_visibl' + 'e'](!0x0), _0x5edc94['set_visibl' + 'e'](!0x1);
                        }
                    }
                },
                {
                    'key': 'itemEvent',
                    'value': function _0xdf2ce8(_0x5a11b1) {
                        var _0x220740 = _0x5a11b1 - 0x1;
                        if (this['data']['peopleActi' + 've'][_0x220740])
                            _0x33885f['choose'](_0x220740), this['init1']();
                        else {
                            if (0x1 == _0x220740 || 0x2 == _0x220740)
                                console['log']('请打过更多关卡解锁');
                            else
                                switch (_0x220740) {
                                case 0x3:
                                    this['coinLock'](0x3, 0x120);
                                    break;
                                case 0x4:
                                    this['coinLock'](0x4, 0x184);
                                    break;
                                case 0x5:
                                    this['coinLock'](0x5, 0x1e8);
                                    break;
                                case 0x6:
                                    this['coinLock'](0x6, 0x24c);
                                    break;
                                case 0x7:
                                    this['coinLock'](0x7, 0x2b0);
                                    break;
                                case 0x8:
                                    this['coinLock'](0x8, 0x378);
                                }
                        }
                    }
                },
                {
                    'key': 'coinLock',
                    'value': function _0x124a9d(_0x5684b7, _0xc61b28) {
                        _0x33885f['readCoin']() >= _0xc61b28 ? (_0x33885f['AddCoin'](-_0xc61b28), _0x33885f['unlock'](_0x5684b7), _0x33885f['choose'](_0x5684b7), this['init1']()) : console['log']('金币不足');
                    }
                },
                {
                    'key': 'videoEvent',
                    'value': function _0x1893b5() {
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            var _0x4d0b80 = this;
                            _0x57ad8e['Instance']['showVideoA' + 'd'](function () {
                                _0x33885f['AddCoin'](0xc8), _0x4d0b80['init1']();
                            });
                        });
                    }
                },
                {
                    'key': 'backEvent',
                    'value': function _0x2e24e7() {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            window['scrollList']['visible'] = !![], (Laya['Scene']['destroy'](_0x338ce2['SHOP']), _0x5afa76['loadScene'](_0x338ce2['STARTMENU'], 0x1, function () {
                            }));
                        });
                    }
                }
            ]), _0x1e07f5;
        }(_0x3dd129), _0x5c0d96 = function (_0x561fd7) {
            _inherits2(_0x532a65, _0x561fd7);
            var _0x57f9b0 = _createSuper2(_0x532a65);
            function _0x532a65() {
                var _0x57bfd2;
                return _classCallCheck2(this, _0x532a65), (_0x57bfd2 = _0x57f9b0['apply'](this, arguments), _0x57bfd2['goLock'] = !0x1, _0x57bfd2['isDone'] = !0x0), _0x57bfd2;
            }
            return _createClass2(_0x532a65, [
                {
                    'key': 'init',
                    'value': function _0x4b6fa1() {
                        var _0x167cfc = this;
                        this['ButtonInit'](), this[0x3]['set_visibl' + 'e'](!0x1), this[0x4]['set_visibl' + 'e'](!0x1), this[0x5]['set_visibl' + 'e'](!0x1), this[0x6]['set_visibl' + 'e'](!0x1), this[0x7]['set_visibl' + 'e'](!0x1), this[0x8]['set_visibl' + 'e'](!0x1);
                        var _0x3ee968 = _0x83809['GetPlayerD' + 'ata'](), _0x5233ff = _0x3ee968['peopleActi' + 've'], _0x217108 = 0x3;
                        for (var _0x1544c6 = 0x3; _0x1544c6 < _0x5233ff['length']; _0x1544c6++) {
                            if (0x0 == _0x5233ff[_0x1544c6]) {
                                this[_0x217108 = _0x1544c6]['set_visibl' + 'e'](!0x0), this['isDone'] = !0x1;
                                break;
                            }
                        }
                        this['isDone'] ? setTimeout(function () {
                            _0x167cfc['restartGam' + 'e']();
                        }, 0x64) : (this['axis'] = Number(_0x3ee968['lockAxis']['toFixed'](0x2)), _0x3ee968['lockAxis'] = Number((this['axis'] + 0.2)['toFixed'](0x2)), _0x83809['SavePlayer' + 'Data'](_0x3ee968), this['updateBar'](this['axis'], _0x3ee968['lockAxis']), _0x3ee968['lockAxis'] >= 0x1 && (_0x3ee968['lockAxis'] = 0x0, _0x83809['SavePlayer' + 'Data'](_0x3ee968), _0x33885f['unlock'](_0x217108), _0x33885f['choose'](_0x217108), console['log']('成功解锁皮肤'), this['videoBtn']['set_visibl' + 'e'](!0x1)));
                    }
                },
                {
                    'key': 'updateBar',
                    'value': function _0x1f3c0f(_0x1ce4ca, _0x54f4ba) {
                        var _0x5868c9 = this;
                        clearInterval(this['barTimer']), this['bar']['value'] = _0x1ce4ca, _0x54f4ba >= 0x1 && (_0x54f4ba = 0x1);
                        var _0x43ab7d = (_0x54f4ba - _0x1ce4ca) / 0.01;
                        this['barValue']['value'] = (0x64 * _0x1ce4ca)['toString'](), Laya['Tween']['to'](this['bar'], { 'value': _0x54f4ba }, 0x32 * _0x43ab7d);
                        var _0x23e07e = 0x0;
                        this['barTimer'] = setInterval(function () {
                            _0x5868c9['barValue']['value'] = (0x64 * _0x1ce4ca + 0x1 * (_0x23e07e + 0x1))['toFixed'](0x0), ++_0x23e07e >= _0x43ab7d && clearInterval(_0x5868c9['barTimer']);
                        }, 0x32);
                    }
                },
                {
                    'key': 'videoEvent',
                    'value': function _0x593a2f() {
                        var _0x547d8e = this;
                        this['isDone'] = !0x0;
                        var _0x4ad752 = _0x83809['GetPlayerD' + 'ata'](), _0x49a3ac = _0x4ad752['peopleActi' + 've'], _0x52066c = 0x3;
                        this[0x3]['set_visibl' + 'e'](!0x1), this[0x4]['set_visibl' + 'e'](!0x1), this[0x5]['set_visibl' + 'e'](!0x1), this[0x6]['set_visibl' + 'e'](!0x1), this[0x7]['set_visibl' + 'e'](!0x1), this[0x8]['set_visibl' + 'e'](!0x1);
                        for (var _0x2ffb56 = 0x3; _0x2ffb56 < _0x49a3ac['length']; _0x2ffb56++) {
                            if (0x0 == _0x49a3ac[_0x2ffb56]) {
                                this[_0x52066c = _0x2ffb56]['set_visibl' + 'e'](!0x0), this['isDone'] = !0x1;
                                break;
                            }
                        }
                        this['isDone'] ? setTimeout(function () {
                            _0x547d8e['restartGam' + 'e']();
                        }, 0x64) : (this['axis'] = Number(_0x4ad752['lockAxis']), _0x4ad752['lockAxis'] = this['axis'] + 0.2, _0x83809['SavePlayer' + 'Data'](_0x4ad752), this['updateBar'](this['axis'], _0x4ad752['lockAxis']), _0x4ad752['lockAxis'] >= 0x1 && (_0x4ad752['lockAxis'] = 0x0, _0x83809['SavePlayer' + 'Data'](_0x4ad752), _0x33885f['unlock'](_0x52066c), _0x33885f['choose'](_0x52066c), console['log']('成功解锁')));
                    }
                },
                {
                    'key': 'restartGam' + 'e',
                    'value': function _0x17966b() {
                        _0x516ba4['Init'](), Laya['Scene']['destroy'](_0x338ce2['SkinLock']), _0x5afa76['loadScene'](_0x338ce2['STARTMENU']);
                    }
                },
                {
                    'key': 'ButtonInit',
                    'value': function _0x38d255() {
                        _0x5afa76['buttonInit'](this['restartBut' + 'ton'], this, this['restartGam' + 'e']), _0x5afa76['imageButto' + 'nInit'](this['videoBtn'], this, this['videoEvent']);
                    }
                },
                {
                    'key': 'DrawUI',
                    'value': function _0xd9293b() {
                    }
                },
                {
                    'key': 'BackUI',
                    'value': function _0x139d11() {
                    }
                }
            ]), _0x532a65;
        }(_0x3dd129), _0x148e04 = function (_0x36fef2) {
            _inherits2(_0x5106cb, _0x36fef2);
            var _0x2ec3e7 = _createSuper2(_0x5106cb);
            function _0x5106cb() {
                var _0x160a9f;
                return _classCallCheck2(this, _0x5106cb), (_0x160a9f = _0x2ec3e7['apply'](this, arguments), _0x160a9f['callback'] = function () {
                }), _0x160a9f;
            }
            return _createClass2(_0x5106cb, [
                {
                    'key': 'init',
                    'value': function _0x1849d5() {
                        _0x5106cb['instance'] = this;
                        var _0x264d92 = Laya['stage']['width'], _0x878e86 = Laya['stage']['height'];
                        this['bg']['width'] = _0x264d92, this['bg']['height'] = _0x878e86;
                    }
                },
                {
                    'key': 'start1',
                    'value': function _0x39ae4a() {
                    }
                },
                {
                    'key': 'start2',
                    'value': function _0xfe4335() {
                    }
                },
                {
                    'key': 'End',
                    'value': function _0x2a03ed() {
                        Laya['Scene']['destroy'](_0x338ce2['STAGELOADI' + 'NG']), this['callback']();
                    }
                }
            ]), _0x5106cb;
        }(_0x3dd129), _0x1ad306 = function (_0x4fe6f5) {
            _inherits2(_0x412c90, _0x4fe6f5);
            var _0x10f166 = _createSuper2(_0x412c90);
            function _0x412c90() {
                var _0x44e6ee;
                return _classCallCheck2(this, _0x412c90), (_0x44e6ee = _0x10f166['apply'](this, arguments), _0x44e6ee['fingerScal' + 'e'] = 0x1, _0x44e6ee['fingerAxis'] = 0x1), _0x44e6ee;
            }
            return _createClass2(_0x412c90, [
                {
                    'key': 'init',
                    'value': function _0x5b2222() {
                        var _0xe6fe0e = Laya['LocalStora' + 'ge']['getItem']('Stack_Maze' + '_Puzzle_is' + 'Music');
                        if (!_0xe6fe0e)
                            _0xe6fe0e = 0x1, Laya['LocalStora' + 'ge']['setItem']('Stack_Maze' + '_Puzzle_is' + 'Music', _0xe6fe0e);
                        else {
                            if (_0xe6fe0e == 0x0)
                                this['btnSound']['skin'] = 'btn_sound_' + 'off.png';
                            else
                                _0xe6fe0e == 0x1 && (this['btnSound']['skin'] = 'btn_sound_' + 'on.png', console['log']('window.mus' + 'ic', window['music']), (window['music'] == '' || !window['music']) && (Laya['SoundManag' + 'er']['playMusic']('res/Sounds' + '/Bgm.mp3'), window['music'] = 'res/Sounds' + '/Bgm.mp3'));
                        }
                        this['btnSound']['on'](Laya['Event']['CLICK'], this, this['SoundClick']), (_0x33885f['nowScene'] = 0x1, this['zOrder'] = 0x1, console['log']('初始化游戏开始界面按' + '钮'), _0x33885f['fxControll' + 'er']['cleanFxs'](), window['scrollList']['visible'] = !![]), (this['ButtonInit'](), this['coinValue']['value'] = _0x33885f['readCoin']()['toString'](), this['ShakeShop'](), this['moreGameBt' + 'nBreath'](), console['log'](_0x83809['GetPlayerD' + 'ata']()), _0x20e367['Instance']['inHomePage'](this['moreGameBu' + 'tton'], this['drawBtn']));
                    }
                },
                {
                    'key': 'SoundClick',
                    'value': function _0x4d307f() {
                        if (this['btnSound']['skin'] == 'btn_sound_' + 'on.png')
                            this['btnSound']['skin'] = 'btn_sound_' + 'off.png', Laya['LocalStora' + 'ge']['setItem']('Stack_Maze' + '_Puzzle_is' + 'Music', 0x0), Laya['SoundManag' + 'er']['stopMusic'](), window['music'] = '';
                        else
                            this['btnSound']['skin'] == 'btn_sound_' + 'off.png' && (this['btnSound']['skin'] = 'btn_sound_' + 'on.png', Laya['LocalStora' + 'ge']['setItem']('Stack_Maze' + '_Puzzle_is' + 'Music', 0x1), (window['music'] == '' || !window['music']) && (Laya['SoundManag' + 'er']['playMusic']('res/Sounds' + '/Bgm.mp3'), window['music'] = 'res/Sounds' + '/Bgm.mp3'));
                    }
                },
                {
                    'key': 'ButtonInit',
                    'value': function _0x3aaa1c() {
                        _0x5afa76['buttonInit'](this['startButto' + 'n'], this, this['StartGame']), _0x5afa76['buttonInit'](this['moreGameBu' + 'tton'], this, this['MoreGame']), _0x5afa76['buttonInit'](this['shopButton'], this, this['OpenShop']), _0x5afa76['buttonInit'](this['drawBtn'], this, this['DrawUI']);
                    }
                },
                {
                    'key': 'StartGame',
                    'value': function _0x36a14e() {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            var _0x43cbd2 = this;
                            window['scrollList']['visible'] = ![], (console['log']('点击开始游戏'), _0x20e367['Instance']['clickStart' + 'Game'](function () {
                                _0x43cbd2['ShakeShopE' + 'nd'](), _0x43cbd2['moreGameBt' + 'nBreathEnd'](), _0x33885f['collider']['enable'] = !0x0, Laya['Scene']['destroy'](_0x338ce2['STARTMENU']), _0x5afa76['loadScene'](_0x338ce2['STAGEUI']);
                            }));
                        });
                    }
                },
                {
                    'key': 'MoreGame',
                    'value': function _0x5cfeaf() {
                        _0x20e367['Instance']['clickHomeM' + 'oreGame']();
                    }
                },
                {
                    'key': 'DrawUI',
                    'value': function _0x247984() {
                        _0x20e367['Instance']['clickHomeM' + 'oreGame']();
                    }
                },
                {
                    'key': 'EndAnimIni' + 't',
                    'value': function _0xbe70bd() {
                    }
                },
                {
                    'key': 'OpenShop',
                    'value': function _0x40c128() {
                        platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                            window['scrollList']['visible'] = ![], (console['log']('打开商店'), _0x20e367['Instance']['clickShop'](), this['ShakeShopE' + 'nd'](), this['moreGameBt' + 'nBreathEnd'](), Laya['Scene']['destroy'](_0x338ce2['STARTMENU']), _0x5afa76['loadScene'](_0x338ce2['SHOP']));
                        });
                    }
                },
                {
                    'key': 'ShakeShop',
                    'value': function _0xb8358b() {
                        var _0x318f95 = this;
                        this['cb1'] = function () {
                            _0x318f95['shopButton']['rotation'] = 0x0, _0x318f95['shopTween'] = Laya['Tween']['to'](_0x318f95['shopButton'], { 'rotation': -0xa }, 0xfa), _0x318f95['shopTimer'] = setTimeout(function () {
                                _0x318f95['cb2']();
                            }, 0xfa);
                        }, this['cb2'] = function () {
                            _0x318f95['shopButton']['rotation'] = -0xa, _0x318f95['shopTween'] = Laya['Tween']['to'](_0x318f95['shopButton'], { 'rotation': 0xa }, 0x1f4), _0x318f95['shopTimer'] = setTimeout(function () {
                                _0x318f95['cb3']();
                            }, 0x1f4);
                        }, this['cb3'] = function () {
                            _0x318f95['shopButton']['rotation'] = 0xa, _0x318f95['shopTween'] = Laya['Tween']['to'](_0x318f95['shopButton'], { 'rotation': 0x0 }, 0xfa), _0x318f95['shopTimer'] = setTimeout(function () {
                                _0x318f95['cb4']();
                            }, 0xfa);
                        }, this['cb4'] = function () {
                            _0x318f95['shopButton']['rotation'] = 0x0, _0x318f95['shopTimer'] = setTimeout(function () {
                                _0x318f95['cb1']();
                            }, 0x3e8);
                        }, this['cb1']();
                    }
                },
                {
                    'key': 'ShakeShopE' + 'nd',
                    'value': function _0x58837f() {
                        this['shopTween']['clear'](), clearTimeout(this['shopTimer']);
                    }
                },
                {
                    'key': 'moreGameBt' + 'nBreath',
                    'value': function _0x18fa90() {
                        var _0x2dbedb = this, _0x510558 = function _0x5e5613() {
                                _0x2dbedb['moreGameTw' + 'een'] = Laya['Tween']['to'](_0x2dbedb['moreGameBu' + 'tton'], {
                                    'scaleX': 1.1,
                                    'scaleY': 1.1
                                }, 0xfa, null, Laya['Handler']['create'](_0x2dbedb, _0x2da3a9));
                            }, _0x2da3a9 = function _0x377a59() {
                                _0x2dbedb['moreGameTw' + 'een'] = Laya['Tween']['to'](_0x2dbedb['moreGameBu' + 'tton'], {
                                    'scaleX': 0.9,
                                    'scaleY': 0.9
                                }, 0x1f4, null, Laya['Handler']['create'](_0x2dbedb, _0x2ab89f));
                            }, _0x2ab89f = function _0x2b925a() {
                                _0x2dbedb['moreGameTw' + 'een'] = Laya['Tween']['to'](_0x2dbedb['moreGameBu' + 'tton'], {
                                    'scaleX': 0x1,
                                    'scaleY': 0x1
                                }, 0xfa, null, Laya['Handler']['create'](_0x2dbedb, _0x510558));
                            };
                        _0x510558();
                    }
                },
                {
                    'key': 'moreGameBt' + 'nBreathEnd',
                    'value': function _0xeab7eb() {
                        this['moreGameTw' + 'een']['clear']();
                    }
                }
            ]), _0x412c90;
        }(_0x3dd129), _0x4b1729 = function () {
            function _0x1defcc() {
                _classCallCheck2(this, _0x1defcc);
            }
            return _createClass2(_0x1defcc, null, [{
                    'key': 'init',
                    'value': function _0xc67151() {
                        var _0x388ae4 = Laya['ClassUtils']['regClass'];
                        _0x388ae4('scripts/En' + 'dMenu.ts', _0x13c67a), _0x388ae4('JJExport/V' + 'iew/Finish' + 'ExportUI.t' + 's', _0x51168f), _0x388ae4('JJExport/V' + 'iew/Finish' + 'ScrollUI.t' + 's', _0x4f2d19), _0x388ae4('JJExport/V' + 'iew/GridUI' + '.ts', _0x33b914), _0x388ae4('JJExport/V' + 'iew/GridUI' + '2.ts', _0x2d0087), _0x388ae4('JJExport/V' + 'iew/GridUI' + '3.ts', _0x3b7783), _0x388ae4('JJExport/V' + 'iew/RunUI.' + 'ts', _0x14f067), _0x388ae4('scripts/Lo' + 'ading.ts', _0x5e7ca3), _0x388ae4('scripts/Sh' + 'op.ts', _0x53ad49), _0x388ae4('scripts/Sk' + 'inLock.ts', _0x5c0d96), _0x388ae4('scripts/St' + 'ageLoading' + '.ts', _0x148e04), _0x388ae4('scripts/St' + 'age.ts', _0xd81128), _0x388ae4('scripts/St' + 'ageUpdate.' + 'ts', _0x46fb76), _0x388ae4('scripts/St' + 'artMenu.ts', _0x1ad306);
                    }
                }]), _0x1defcc;
        }();
    _0x4b1729['width'] = 0x2ee, _0x4b1729['height'] = 0x536, _0x4b1729['scaleMode'] = 'showall', _0x4b1729['screenMode'] = 'none', _0x4b1729['alignV'] = 'middle', _0x4b1729['alignH'] = 'center', _0x4b1729['startScene'] = 'Loading.sc' + 'ene', _0x4b1729['sceneRoot'] = '', _0x4b1729['debug'] = !0x1, _0x4b1729['stat'] = !0x1, _0x4b1729['physicsDeb' + 'ug'] = !0x1, _0x4b1729['exportScen' + 'eToJson'] = !0x0, _0x4b1729['init'](), new (function () {
        function _0x979636() {
            _classCallCheck2(this, _0x979636), window['Config']['useRetinal' + 'Canvas'] = ![], (window['Laya3D'] ? Laya3D['init'](_0x4b1729['width'], _0x4b1729['height']) : Laya['init'](_0x4b1729['width'], _0x4b1729['height'], Laya['WebGL']), Laya['Physics'] && Laya['Physics']['enable'](), Laya['DebugPanel'] && Laya['DebugPanel']['enable'](), Laya['stage']['scaleMode'] = _0x4b1729['scaleMode'], Laya['stage']['screenMode'] = _0x4b1729['screenMode'], Laya['stage']['alignV'] = _0x4b1729['alignV'], Laya['stage']['alignH'] = _0x4b1729['alignH'], Laya['URL']['exportScen' + 'eToJson'] = _0x4b1729['exportScen' + 'eToJson'], (_0x4b1729['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0x4b1729['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0x4b1729['stat'] && Laya['Stat']['show'](), Laya['alertGloba' + 'lError'](!0x0), Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']));
        }
        return _createClass2(_0x979636, [
            {
                'key': 'onVersionL' + 'oaded',
                'value': function _0x410510() {
                    Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
                }
            },
            {
                'key': 'onConfigLo' + 'aded',
                'value': function _0x169cc5() {
                    const _0x3f689e = new Laya['Image']();
                    _0x3f689e['skin'] = 'yad.png', _0x3f689e['zOrder'] = 0x30d40, _0x3f689e['scaleX'] = 0.7, _0x3f689e['scaleY'] = 0.7, _0x3f689e['right'] = 0x14, _0x3f689e['top'] = 0x14, Laya['stage']['addChild'](_0x3f689e), Laya['Scene']['open'](_0x338ce2['LOADING']);
                }
            }
        ]), _0x979636;
    }())();
}();