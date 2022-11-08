var __extends = this && this['__extends'] || function () {
    var _0x20ce9e = Object['setPrototy' + 'peOf'] || { '__proto__': [] } instanceof Array && function (_0x3eab00, _0x575f6e) {
        _0x3eab00['__proto__'] = _0x575f6e;
    } || function (_0x3cc324, _0x55ed39) {
        for (var _0x376b73 in _0x55ed39)
            _0x55ed39['hasOwnProp' + 'erty'](_0x376b73) && (_0x3cc324[_0x376b73] = _0x55ed39[_0x376b73]);
    };
    return function (_0x56995b, _0x678e28) {
        function _0x5670d5() {
            this['constructo' + 'r'] = _0x56995b;
        }
        _0x20ce9e(_0x56995b, _0x678e28), _0x56995b['prototype'] = null === _0x678e28 ? Object['create'](_0x678e28) : (_0x5670d5['prototype'] = _0x678e28['prototype'], new _0x5670d5());
    };
}();
!function () {
    return function _0x3ac617(_0x5636d3, _0x15834b, _0x9717f4) {
        function _0x175fdc(_0x2375b9, _0x3a0984) {
            if (!_0x15834b[_0x2375b9]) {
                if (!_0x5636d3[_0x2375b9]) {
                    var _0x4da0ec = 'function' == typeof require && require;
                    if (!_0x3a0984 && _0x4da0ec)
                        return _0x4da0ec(_0x2375b9, !0x0);
                    if (_0x1a49f3)
                        return _0x1a49f3(_0x2375b9, !0x0);
                    var _0x4bf711 = new Error('Cannot\x20fin' + 'd\x20module\x20\x27' + _0x2375b9 + '\x27');
                    throw _0x4bf711['code'] = 'MODULE_NOT' + '_FOUND', _0x4bf711;
                }
                var _0x475fd3 = _0x15834b[_0x2375b9] = { 'exports': {} };
                _0x5636d3[_0x2375b9][0x0]['call'](_0x475fd3['exports'], function (_0x153adf) {
                    return _0x175fdc(_0x5636d3[_0x2375b9][0x1][_0x153adf] || _0x153adf);
                }, _0x475fd3, _0x475fd3['exports'], _0x3ac617, _0x5636d3, _0x15834b, _0x9717f4);
            }
            return _0x15834b[_0x2375b9]['exports'];
        }
        for (var _0x1a49f3 = 'function' == typeof require && require, _0x4037e2 = 0x0; _0x4037e2 < _0x9717f4['length']; _0x4037e2++)
            _0x175fdc(_0x9717f4[_0x4037e2]);
        return _0x175fdc;
    };
}()({
    0x1: [
        function (_0x23a3f0, _0x4babdf, _0x5d730b) {
            'use strict';
            Object['defineProp' + 'erty'](_0x5d730b, '__esModule', { 'value': !0x0 }), function (_0x5521e8) {
                _0x5521e8[_0x5521e8['None'] = 0x0] = 'None', _0x5521e8[_0x5521e8['Game_OnLev' + 'elStart'] = 0x3e8] = 'Game_OnLev' + 'elStart', _0x5521e8[_0x5521e8['Game_OnLev' + 'elComplate'] = 0x3e9] = 'Game_OnLev' + 'elComplate', _0x5521e8[_0x5521e8['Game_OnUse' + 'rMoneyChan' + 'ge'] = 0x2bd] = 'Game_OnUse' + 'rMoneyChan' + 'ge', _0x5521e8[_0x5521e8['App_CloseF' + 'irstLoadin' + 'gView'] = 0x1f4] = 'App_CloseF' + 'irstLoadin' + 'gView', _0x5521e8[_0x5521e8['Game_OnVie' + 'wOpen'] = 0x258] = 'Game_OnVie' + 'wOpen', _0x5521e8[_0x5521e8['Game_OnVie' + 'wClose'] = 0x259] = 'Game_OnVie' + 'wClose';
            }(_0x5d730b['EventDef'] || (_0x5d730b['EventDef'] = {}));
        },
        {}
    ],
    0x2: [
        function (_0x56667f, _0x1f8954, _0x33c8fd) {
            'use strict';
            Object['defineProp' + 'erty'](_0x33c8fd, '__esModule', { 'value': !0x0 });
            var _0x161c51 = Laya['EventDispa' + 'tcher'], _0x1836a7 = function (_0x10adf2) {
                    function _0x5df329() {
                        return _0x10adf2['call'](this) || this;
                    }
                    return __extends(_0x5df329, _0x10adf2), _0x5df329['prototype']['removeEven' + 't'] = function (_0x131248, _0x5b0239, _0xf5c1d8, _0x2243cb) {
                        _0x5df329['eventDispa' + 'tcher']['off'](_0x131248, _0x5b0239, _0xf5c1d8);
                    }, _0x5df329['prototype']['dispatch'] = function (_0x136004, _0x192b1d) {
                        _0x5df329['eventDispa' + 'tcher']['event'](_0x136004, _0x192b1d);
                    }, _0x5df329['prototype']['regOnceEve' + 'nt'] = function (_0x31cffb, _0x40ce85, _0x275865, _0x234c79) {
                        _0x5df329['eventDispa' + 'tcher']['once'](_0x31cffb, _0x40ce85, _0x275865, null == _0x234c79 ? null : [_0x234c79]);
                    }, _0x5df329['prototype']['regEvemt'] = function (_0x58df06, _0x2efb60, _0x2e410f, _0xf4a724) {
                        _0x5df329['eventDispa' + 'tcher']['on'](_0x58df06, _0x2efb60, _0x2e410f, null == _0xf4a724 ? null : [_0xf4a724]);
                    }, _0x5df329['eventDispa' + 'tcher'] = new _0x161c51(), _0x5df329['instance'] = new _0x5df329(), _0x5df329;
                }(_0x161c51);
            _0x33c8fd['default'] = _0x1836a7;
        },
        {}
    ],
    0x3: [
        function (_0x20a857, _0x4928a0, _0x118561) {
            'use strict';
            Object['defineProp' + 'erty'](_0x118561, '__esModule', { 'value': !0x0 });
            var _0x1faa48 = _0x20a857('./Mgr/Game' + 'Mgr'), _0x3e4937 = _0x20a857('./myGameSc' + 'ript/view/' + 'gameView'), _0x42f7d5 = _0x20a857('./View/But' + 'tonAnim'), _0x1f4736 = _0x20a857('./myGameSc' + 'ript/view/' + 'videoBtnEf' + 'fect'), _0xc91ddb = _0x20a857('./View/Loa' + 'dingView/L' + 'oadingView'), _0x29915d = _0x20a857('MenuScene'), _0x14e786 = _0x20a857('LevelScene'), _0x56f7b2 = _0x20a857('WinScene'), _0x3327d9 = function () {
                    function _0x5a840f() {
                    }
                    return _0x5a840f['init'] = function () {
                        var _0x314539 = Laya['ClassUtils']['regClass'];
                        _0x314539('Mgr/GameMg' + 'r.ts', _0x1faa48['default']), _0x314539('myGameScri' + 'pt/view/ga' + 'meView.ts', _0x3e4937['default']), _0x314539('View/Butto' + 'nAnim.ts', _0x42f7d5['default']), _0x314539('myGameScri' + 'pt/view/vi' + 'deoBtnEffe' + 'ct.ts', _0x1f4736['default']), _0x314539('View/Loadi' + 'ngView/Loa' + 'dingView.t' + 's', _0xc91ddb['default']), _0x314539('MenuScene.' + 'ts', _0x29915d['default']), _0x314539('LevelScene' + '.ts', _0x14e786['default']), _0x314539('WinScene.t' + 's', _0x56f7b2['default']);
                    }, _0x5a840f['width'] = 0x2ee, _0x5a840f['height'] = 0x536, _0x5a840f['scaleMode'] = 'showall', _0x5a840f['screenMode'] = 'none', _0x5a840f['alignV'] = 'center', _0x5a840f['alignH'] = 'middle', _0x5a840f['startScene'] = 'GameMain.s' + 'cene', _0x5a840f['sceneRoot'] = '', _0x5a840f['debug'] = !0x1, _0x5a840f['stat'] = !0x1, _0x5a840f['physicsDeb' + 'ug'] = !0x1, _0x5a840f['exportScen' + 'eToJson'] = !0x0, _0x5a840f;
                }();
            _0x118561['default'] = _0x3327d9, _0x3327d9['init']();
        },
        {
            './Mgr/GameMgr': 0x6,
            './View/ButtonAnim': 0xc,
            './View/LoadingView/LoadingView': 0xe,
            './myGameScript/view/gameView': 0x15,
            './myGameScript/view/videoBtnEffect': 0x16,
            'MenuScene': 0x18,
            'LevelScene': 0x19,
            'WinScene': 0x1a
        }
    ],
    0x4: [
        function (_0xc92a1b, _0x2c58aa, _0x253c42) {
            'use strict';
            Object['defineProp' + 'erty'](_0x253c42, '__esModule', { 'value': !0x0 });
            var _0x37a775 = _0xc92a1b('./Event/Ev' + 'entDef'), _0x3ad8e3 = _0xc92a1b('./Event/Ev' + 'entMgr'), _0x369a1d = _0xc92a1b('./GameConf' + 'ig'), _0x12a505 = _0xc92a1b('./ui/layaM' + 'axUI'), _0x2fc30e = _0xc92a1b('./View/Loa' + 'dingView/L' + 'oadingView');
            new (function () {
                function _0x532ec7() {
                    this['_loadingUI'] = null, this['_loadingVi' + 'ew'] = null, this['_preLoadRe' + 's'] = new Array(), this['sdkLo_chao' + 'jiguoshang' + 'che_aded'] = !0x0, this['subpkgLo_c' + 'haojiguosh' + 'angche_ade' + 'd'] = !0x1, window['Laya3D'] ? Laya3D['init'](_0x369a1d['default']['width'], _0x369a1d['default']['height']) : Laya['init'](_0x369a1d['default']['width'], _0x369a1d['default']['height'], Laya['WebGL']);
                    var _0x2f5218 = this;
                    Laya['Browser']['onMiniGame'] && (_0x2f5218['sdkLo_chao' + 'jiguoshang' + 'che_aded'] = !0x1, webuzzSDK['init']({
                        'appid': 'wx58d84703' + '3c62fc2a',
                        'version': '5.0.0',
                        'debug': !0x1,
                        'bannerId': 'adunit-958' + 'f23c67dd06' + 'ca0',
                        'videoId': 'adunit-e8a' + '8c217a6ff8' + 'a6e',
                        'interId': 'adunit-4fd' + '7b1f6b1f9d' + '427'
                    }, function (_0x4a2253) {
                        console['log']('init\x20statu' + 's\x20=', _0x4a2253), 0x1 == _0x4a2253 && (_0x2f5218['sdkLo_chao' + 'jiguoshang' + 'che_aded'] = !0x0, _0x2f5218['onLoadResC' + 'omplate']());
                    })), Laya['Physics'] && Laya['Physics']['enable'](), Laya['DebugPanel'] && Laya['DebugPanel']['enable'](), Laya['stage']['scaleMode'] = _0x369a1d['default']['scaleMode'], Laya['stage']['screenMode'] = _0x369a1d['default']['screenMode'], Laya['stage']['alignV'] = 'center', Laya['stage']['alignH'] = 'middle', (Laya['URL']['exportScen' + 'eToJson'] = _0x369a1d['default']['exportScen' + 'eToJson'], (_0x369a1d['default']['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0x369a1d['default']['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0x369a1d['default']['stat'] && Laya['Stat']['show'](), Laya['alertGloba' + 'lError'] = !0x0, Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']));
                }
                return _0x532ec7['prototype']['onVersionL' + 'oaded'] = function () {
                    Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
                }, _0x532ec7['prototype']['onConfigLo' + 'aded'] = function () {
                    Laya['loader']['maxLoader'] = 0x32, this['initLoadin' + 'gView'](), this['loadRes'](), _0x3ad8e3['default']['instance']['regEvemt'](_0x37a775['EventDef']['App_CloseF' + 'irstLoadin' + 'gView'], this, this['closeloadi' + 'ngUI']);
                }, _0x532ec7['prototype']['initLoadin' + 'gView'] = function () {
                    this['_loadingUI'] = new _0x12a505['ui']['View']['LoadingUI'](), Laya['stage']['addChild'](this['_loadingUI']), this['_loadingUI']['width'] = Laya['stage']['width'], this['_loadingUI']['height'] = Laya['stage']['height'], this['_loadingVi' + 'ew'] = this['_loadingUI']['getCompone' + 'nt'](_0x2fc30e['default']), this['_loadingVi' + 'ew']['setProcess'](0x0);
                }, _0x532ec7['prototype']['onLoadResC' + 'omplate'] = function () {
                    platform['getInstanc' + 'e']()['puzzlegame' + 'startup']('Animal-Sha' + 'pe-Puzzle', () => {
                        Laya['stage']['addChild'](window['box_adTwo']), window['box_adTwo']['setSpaceX'](0x96), window['box_adTwo']['bottom'] = 0xfa, window['box_adTwo']['visible'] = ![], window['yad']['centerX'] = 0x0;
                        window['yad'] && (window['yad']['skin'] = '512-1.png');
                        platform['getInstanc' + 'e']()['hideSplash'](), platform['getInstanc' + 'e']()['showBanner'](), Laya['stage']['addChild'](window['scrollList']), window['scrollList']['scale'](0x1, 0x1), window['scrollList']['bottom'] = 0x1e, window['scrollList']['width'] = Laya['stage']['width'];
                        if (JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))) {
                            var _0x5a31ea = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum'];
                            window['array'] = [];
                            for (let _0x17092b = _0x5a31ea; _0x17092b < 0x79; _0x17092b++) {
                                window['array']['push'](_0x17092b);
                            }
                        } else {
                            var _0x5a31ea = 0x1;
                            window['array'] = [];
                            for (let _0x2c451b = _0x5a31ea; _0x2c451b < 0x79; _0x2c451b++) {
                                window['array']['push'](_0x2c451b);
                            }
                        }
                        window['scrollList']['visible'] = ![], this['subpkgLo_c' + 'haojiguosh' + 'angche_ade' + 'd'] && this['sdkLo_chao' + 'jiguoshang' + 'che_aded'] && _0x369a1d['default']['startScene'] && Laya['Scene']['open']('MenuScene.' + 'scene');
                    });
                }, _0x532ec7['prototype']['loadRes'] = function () {
                    var _0x593204 = this, _0x4ee1d7 = this['_preLoadRe' + 's'], _0x4523ab = this;
                    Laya['Browser']['onMiniGame'] ? (_0x4523ab['subpkgLo_c' + 'haojiguosh' + 'angche_ade' + 'd'] = !0x1, Laya['Browser']['window']['wx']['loadSubpac' + 'kage']({
                        'name': 'subRes',
                        'success': function (_0x562b14) {
                            _0x4ee1d7['length'] > 0x0 ? Laya['loader']['load'](_0x4ee1d7, Laya['Handler']['create'](_0x593204, function () {
                                _0x4523ab['subpkgLo_c' + 'haojiguosh' + 'angche_ade' + 'd'] = !0x0, _0x4523ab['onLoadResC' + 'omplate']();
                            }), Laya['Handler']['create'](_0x593204, function (_0x293937) {
                                _0x4523ab['_loadingVi' + 'ew']['setProcess'](_0x293937 / 0x2 + 0.5);
                            })) : (_0x4523ab['subpkgLo_c' + 'haojiguosh' + 'angche_ade' + 'd'] = !0x0, _0x4523ab['onLoadResC' + 'omplate']());
                        },
                        'fail': function (_0x55a15c) {
                            _0x593204['loadRes']();
                        }
                    })['onProgress' + 'Update'](function (_0xc66562) {
                        _0x4523ab['_loadingVi' + 'ew']['setProcess'](_0xc66562 / 0x2);
                    })) : (_0x4523ab['subpkgLo_c' + 'haojiguosh' + 'angche_ade' + 'd'] = !0x0, _0x4523ab['onLoadResC' + 'omplate']());
                }, _0x532ec7['prototype']['closeloadi' + 'ngUI'] = function () {
                    this['_loadingUI'] && !this['_loadingUI']['destroyed'] && (this['_loadingUI']['destroy'](), this['_loadingUI'] = null);
                }, _0x532ec7;
            }())();
        },
        {
            './Event/EventDef': 0x1,
            './Event/EventMgr': 0x2,
            './GameConfig': 0x3,
            './View/LoadingView/LoadingView': 0xe,
            './ui/layaMaxUI': 0x17
        }
    ],
    0x5: [
        function (_0x27d14a, _0x75d512, _0x15f10e) {
            'use strict';
            Object['defineProp' + 'erty'](_0x15f10e, '__esModule', { 'value': !0x0 });
            var _0x4cb8af = _0x27d14a('../User/Us' + 'er'), _0x12b27f = function () {
                    function _0x33c7ca() {
                    }
                    return _0x33c7ca['saveGameDa' + 'te'] = function () {
                        var _0x3fe7b3 = _0x4cb8af['default']['getSaveDat' + 'a']();
                        console['log']('保存数据', _0x3fe7b3), Laya['LocalStora' + 'ge']['setItem']('ptxns', _0x3fe7b3);
                    }, _0x33c7ca['getGameDat' + 'e'] = function () {
                        var _0x238ea7 = Laya['LocalStora' + 'ge']['getItem']('ptxns');
                        return _0x238ea7 ? JSON['parse'](_0x238ea7) : null;
                    }, _0x33c7ca;
                }();
            _0x15f10e['GameDefine'] = _0x12b27f;
        },
        { '../User/User': 0xa }
    ],
    0x6: [
        function (_0xc2f2af, _0x70e280, _0x3a8616) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3a8616, '__esModule', { 'value': !0x0 });
            var _0x19fe25 = _0xc2f2af('../Event/E' + 'ventDef'), _0x404f35 = _0xc2f2af('../Event/E' + 'ventMgr'), _0x4194f2 = _0xc2f2af('../myGameS' + 'cript/appR' + 'un'), _0x4a67aa = _0xc2f2af('../myGameS' + 'cript/data' + '/gameData'), _0x51350a = _0xc2f2af('../myGameS' + 'cript/hub/' + 'gameCtrl'), _0xfc95ea = _0xc2f2af('../User/Us' + 'er'), _0x31ef2f = _0xc2f2af('./GameDefi' + 'ne'), _0x262891 = _0xc2f2af('./ViewMgr'), _0x22ce64 = function (_0x1a50e9) {
                    function _0xcfa1af() {
                        var _0x3485c4 = _0x1a50e9['call'](this) || this;
                        return _0xcfa1af['_instance'] = _0x3485c4, _0x3485c4;
                    }
                    return __extends(_0xcfa1af, _0x1a50e9), _0xcfa1af['getInstanc' + 'e'] = function () {
                        return _0xcfa1af['_instance'];
                    }, _0xcfa1af['prototype']['endGame'] = function () {
                        _0x262891['default']['instance']['closeView'](_0x262891['ViewDef']['gameView']), _0x51350a['default']['Instance']['toNextLeve' + 'l'](), Laya['Browser']['onMiniGame'] ? webuzzSDK['endGame'](function () {
                            webuzzSDK['startGame'](function () {
                                webuzzSDK['showBonus'](function (_0x239711) {
                                    _0x262891['default']['instance']['openView'](_0x262891['ViewDef']['gameView']);
                                });
                            });
                        }) : _0x262891['default']['instance']['openView'](_0x262891['ViewDef']['gameView']);
                    }, _0xcfa1af['prototype']['endGame1'] = function () {
                        console['log']('endGameend' + 'Game'), _0x262891['default']['instance']['closeView'](_0x262891['ViewDef']['gameView']);
                    }, _0xcfa1af['prototype']['onStart'] = function () {
                        this['preCreateG' + 'ame']();
                    }, _0xcfa1af['prototype']['SetShareMe' + 'nu'] = function (_0x4712cf, _0x3f2d22, _0x4a809e, _0x4d4887, _0x46d14a) {
                        Laya['Browser']['onMiniGame'] && (console['log']('小游戏设置转发按钮'), Laya['Browser']['window']['wx']['showShareM' + 'enu']({
                            'withShareTicket': !0x1,
                            'success': _0x4a809e,
                            'fail': _0x4d4887,
                            'complete': _0x46d14a
                        }), Laya['Browser']['window']['wx']['onShareApp' + 'Message'](function () {
                            return {
                                'title': _0x4712cf,
                                'imageUrl': _0x3f2d22
                            };
                        }));
                    }, _0xcfa1af['prototype']['preCreateG' + 'ame'] = function () {
                        Laya['MouseManag' + 'er']['multiTouch' + 'Enabled'] = !0x1, _0x4a67aa['default']['isSceneLoa' + 'dedSuc'] = !0x1, _0x4194f2['default']['Instance']['init'](function () {
                            _0x404f35['default']['instance']['dispatch'](_0x19fe25['EventDef']['App_CloseF' + 'irstLoadin' + 'gView']), Laya['Browser']['onMiniGame'] ? webuzzSDK['startGame'](function () {
                                webuzzSDK['showBonus'](function (_0x5d76b3) {
                                    _0x262891['default']['instance']['openView'](_0x262891['ViewDef']['gameView'], null, function () {
                                    });
                                });
                            }) : _0x262891['default']['instance']['openView'](_0x262891['ViewDef']['gameView'], null, function () {
                            });
                        });
                    }, _0xcfa1af['prototype']['onAwake'] = function () {
                        Laya['Browser']['onMiniGame'] && wx['onShow'](function () {
                            webuzzSDK['onShow']();
                        }), _0xfc95ea['default']['initiUser'](_0x31ef2f['GameDefine']['getGameDat' + 'e']()), this['SetShareMe' + 'nu']('天天爱拼图', 'subRes/fen' + 'xiang.png', function () {
                        }, function () {
                        }, function () {
                        });
                    }, _0xcfa1af['_instance'] = null, _0xcfa1af;
                }(Laya['Script']);
            _0x3a8616['default'] = _0x22ce64;
        },
        {
            '../Event/EventDef': 0x1,
            '../Event/EventMgr': 0x2,
            '../User/User': 0xa,
            '../myGameScript/appRun': 0x10,
            '../myGameScript/data/gameData': 0x11,
            '../myGameScript/hub/gameCtrl': 0x13,
            './GameDefine': 0x5,
            './ViewMgr': 0x9
        }
    ],
    0x7: [
        function (_0x3ad76, _0x5d483e, _0x51a9c7) {
            'use strict';
            Object['defineProp' + 'erty'](_0x51a9c7, '__esModule', { 'value': !0x0 });
            var _0x43fc0d = function () {
                function _0x405b32() {
                    this['_enabled'] = !0x0;
                }
                return Object['defineProp' + 'erty'](_0x405b32['prototype'], 'Enabled', {
                    'get': function () {
                        return this['_enabled'];
                    },
                    'set': function (_0x15c2d4) {
                        _0x15c2d4 || this['stopBGM'](), this['_enabled'] = _0x15c2d4;
                    },
                    'enumerable': !0x0,
                    'configurable': !0x0
                }), _0x405b32['prototype']['playBGM'] = function (_0x21de96) {
                    if (this['_enabled']) {
                        var _0x2b0a6e = this['getSoundUr' + 'l'](_0x21de96);
                        Laya['Browser']['onMiniGame'] ? (this['bgm'] || (this['bgm'] = wx['createInne' + 'rAudioCont' + 'ext']()), this['bgm']['pause'](), this['bgm']['src'] = _0x2b0a6e, this['bgm']['loop'] = !0x0, this['bgm']['play']()) : Laya['SoundManag' + 'er']['playMusic'](_0x2b0a6e, 0x0);
                    }
                }, _0x405b32['prototype']['getSoundUr' + 'l'] = function (_0x17a811) {
                    return _0x405b32['soundResPa' + 'th'] + _0x17a811 + '.mp3';
                }, _0x405b32['prototype']['stopBGM'] = function () {
                    Laya['Browser']['onMiniGame'] ? this['bgm'] && this['bgm']['pause']() : Laya['SoundManag' + 'er']['stopMusic']();
                }, _0x405b32['prototype']['playSound'] = function (_0x1a9ff0) {
                    if (this['_enabled']) {
                        var _0x2a74c1 = this['getSoundUr' + 'l'](_0x1a9ff0);
                        if (Laya['Browser']['onMiniGame']) {
                            var _0x2a30c4 = laya['utils']['Pool']['getItem'](_0x1a9ff0);
                            null == _0x2a30c4 && ((_0x2a30c4 = wx['createInne' + 'rAudioCont' + 'ext']())['src'] = _0x405b32['soundResPa' + 'th'] + _0x1a9ff0 + '.mp3', _0x2a30c4['onEnded'](function () {
                                laya['utils']['Pool']['recover'](_0x1a9ff0, _0x2a30c4), _0x2a30c4['offEnded']();
                            })), _0x2a30c4['play']();
                        } else
                            Laya['SoundManag' + 'er']['playSound'](_0x2a74c1, 0x1);
                    }
                }, _0x405b32['soundResPa' + 'th'] = 'subRes/sou' + 'nd/', _0x405b32['instance'] = new _0x405b32(), _0x405b32;
            }();
            _0x51a9c7['default'] = _0x43fc0d;
        },
        {}
    ],
    0x8: [
        function (_0xd6b4dc, _0x598330, _0x1665e4) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1665e4, '__esModule', { 'value': !0x0 });
            var _0x1f52b5 = function () {
                function _0x1c5f85() {
                }
                return _0x1c5f85['vibrateLon' + 'g'] = function () {
                    _0x1c5f85['isEnable'] && Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['wx']['vibrateLon' + 'g']();
                }, _0x1c5f85['vibrate'] = function (_0x12b4db) {
                    if (Laya['Browser']['onMiniGame']) {
                        var _0x47a800 = _0x12b4db / 0xf, _0xd702e0 = 0x0, _0x59321a = {
                                'count': _0x47a800,
                                'index': _0xd702e0
                            };
                        Laya['timer']['loop'](0x10, _0x59321a, function () {
                            _0x1c5f85['vibrateSho' + 'rt'](), ++_0xd702e0 > _0x47a800 && Laya['timer']['clearAll'](_0x59321a);
                        });
                    }
                }, _0x1c5f85['vibrateSho' + 'rt'] = function () {
                    _0x1c5f85['isEnable'] && Laya['Browser']['onMiniGame'] && Laya['Browser']['window']['wx']['vibrateSho' + 'rt']();
                }, _0x1c5f85['isEnable'] = !0x0, _0x1c5f85;
            }();
            _0x1665e4['default'] = _0x1f52b5;
        },
        {}
    ],
    0x9: [
        function (_0x4bdc19, _0x4c9e4e, _0x2b31d1) {
            'use strict';
            var _0x4a40d4, _0x1bc1db;
            Object['defineProp' + 'erty'](_0x2b31d1, '__esModule', { 'value': !0x0 }), function (_0xdc8710) {
                _0xdc8710['None'] = '', _0xdc8710['TipsView'] = 'View/TipsV' + 'iew.json', _0xdc8710['gameView'] = 'View/GameV' + 'iew.json';
            }(_0x4a40d4 = _0x2b31d1['ViewDef'] || (_0x2b31d1['ViewDef'] = {})), function (_0x30719d) {
                _0x30719d['gameView'] = '游戏页';
            }(_0x1bc1db = _0x2b31d1['ViewName'] || (_0x2b31d1['ViewName'] = {}));
            var _0x33d0d5 = function () {
                function _0x2382a6() {
                    this['_views'] = {}, this['_loadingLi' + 'st'] = new Array(), this['curView'] = [];
                }
                return _0x2382a6['prototype']['openView'] = function (_0x10d8bb, _0x267461, _0x1b2a22) {
                    if (this['_views'][_0x10d8bb]) {
                        var _0x521a7d = this['_views'][_0x10d8bb]['_component' + 's'], _0x53b585 = null;
                        if (_0x521a7d)
                            for (var _0x161ddb = 0x0; _0x161ddb < _0x521a7d['length']; _0x161ddb++) {
                                var _0x357614 = _0x521a7d[_0x161ddb];
                                if (_0x357614['_viewBase']) {
                                    (_0x53b585 = _0x357614)['openView'](_0x267461);
                                    break;
                                }
                            }
                        _0x1b2a22 && _0x1b2a22(_0x53b585);
                    } else {
                        for (var _0x17c4c9 = 0x0; _0x17c4c9 < this['_loadingLi' + 'st']['length']; ++_0x17c4c9) {
                            var _0x174eba = this['_loadingLi' + 'st'][_0x17c4c9];
                            if (_0x174eba == _0x10d8bb)
                                return void console['log']('界面\x20:\x20' + String(_0x174eba) + ('\x20正在加载中，请不要' + '重复加载'));
                        }
                        var _0x40b4db = this['GetViewNam' + 'e'](_0x10d8bb);
                        _0x40b4db && '' != _0x40b4db && this['curView']['push'](_0x40b4db);
                        var _0xecfe58 = String(_0x10d8bb), _0x513620 = this;
                        this['_loadingLi' + 'st']['push'](_0x10d8bb), Laya['Scene']['load'](_0xecfe58, Laya['Handler']['create'](this, function (_0x53c639) {
                            Laya['stage']['addChild'](_0x53c639);
                            var _0xc301d2 = _0x53c639;
                            _0x513620['_views'][_0x10d8bb] = _0xc301d2;
                            var _0x5698ee = _0x53c639['_component' + 's'], _0x267c59 = null;
                            if (_0x5698ee)
                                for (var _0x174bd7 = 0x0; _0x174bd7 < _0x5698ee['length']; _0x174bd7++) {
                                    var _0x438b04 = _0x5698ee[_0x174bd7];
                                    if (_0x438b04['_viewBase']) {
                                        _0x267c59 = _0x438b04, _0x438b04['_viewDef'] = _0x10d8bb, _0x267c59['openView'](_0x267461);
                                        break;
                                    }
                                }
                            for (var _0x46b006 = 0x0; _0x46b006 < _0x513620['_loadingLi' + 'st']['length']; ++_0x46b006) {
                                if (_0x513620['_loadingLi' + 'st'][_0x46b006] == _0x10d8bb) {
                                    _0x513620['_loadingLi' + 'st']['splice'](_0x46b006, 0x1);
                                    break;
                                }
                            }
                            _0x1b2a22 && _0x1b2a22(_0x267c59);
                        }));
                    }
                }, _0x2382a6['prototype']['addContiue' + 'View'] = function (_0x3bbc8a) {
                    return -0x1 == this['curView'][this['curView']['length'] - 0x1]['indexOf']('大导页') && (this['curView']['push'](_0x3bbc8a), !0x0);
                }, _0x2382a6['prototype']['showTips'] = function (_0x59d326) {
                    this['openView'](_0x4a40d4['TipsView'], _0x59d326);
                }, _0x2382a6['prototype']['ShowView'] = function (_0x5e73de) {
                    var _0x5a4ee2 = this['_views'][_0x5e73de];
                    if (_0x5a4ee2) {
                        var _0x116df5 = _0x5a4ee2['_component' + 's'];
                        if (_0x116df5)
                            for (var _0x53f596 = 0x0; _0x53f596 < _0x116df5['length']; _0x53f596++) {
                                var _0xa2b739 = _0x116df5[_0x53f596];
                                if (_0xa2b739['_viewBase']) {
                                    _0xa2b739['show']();
                                    break;
                                }
                            }
                    }
                }, _0x2382a6['prototype']['GetViewNam' + 'e'] = function (_0x3ea308) {
                    var _0x298875 = '';
                    switch (_0x3ea308) {
                    case _0x4a40d4['gameView']:
                        _0x298875 = _0x1bc1db['gameView'];
                    }
                    return _0x298875;
                }, _0x2382a6['prototype']['removeCurV' + 'iew'] = function (_0x1d5d41) {
                    var _0x237d92 = '';
                    switch (_0x1d5d41) {
                    case _0x4a40d4['gameView']:
                        _0x237d92 = _0x1bc1db['gameView'];
                    }
                    for (var _0x25f94f = 0x0; _0x25f94f < this['curView']['length']; _0x25f94f++)
                        if (this['curView'][_0x25f94f] === _0x237d92) {
                            this['curView']['splice'](_0x25f94f, 0x1);
                            break;
                        }
                }, _0x2382a6['prototype']['hideView'] = function (_0x3a0d48) {
                    var _0x54e965 = this['_views'][_0x3a0d48];
                    if (_0x54e965) {
                        var _0x78c82b = _0x54e965['_component' + 's'];
                        if (_0x78c82b)
                            for (var _0x1a8cf7 = 0x0; _0x1a8cf7 < _0x78c82b['length']; _0x1a8cf7++) {
                                var _0x26fc89 = _0x78c82b[_0x1a8cf7];
                                if (_0x26fc89['_viewBase']) {
                                    _0x26fc89['hide']();
                                    break;
                                }
                            }
                    }
                }, _0x2382a6['prototype']['getView'] = function (_0x3f7066) {
                    return this['_views'][_0x3f7066];
                }, _0x2382a6['prototype']['getCurView' + 'Name'] = function () {
                    return 0x0 == this['curView']['length'] ? '未知' : this['curView'][this['curView']['length'] - 0x1];
                }, _0x2382a6['prototype']['closeView'] = function (_0x1f3067) {
                    var _0x5b9f62 = this['_views'][_0x1f3067];
                    if (_0x5b9f62) {
                        var _0x34d74e = _0x5b9f62['_component' + 's'];
                        if (_0x34d74e)
                            for (var _0x29051f = 0x0; _0x29051f < _0x34d74e['length']; _0x29051f++) {
                                var _0x18b429 = _0x34d74e[_0x29051f];
                                if (_0x18b429['_viewBase']) {
                                    _0x18b429['onClose']();
                                    break;
                                }
                            }
                        _0x5b9f62['removeSelf'](), _0x5b9f62['destroy'](), this['_views'][_0x1f3067] = null, this['removeCurV' + 'iew'](_0x1f3067);
                    }
                }, _0x2382a6['instance'] = new _0x2382a6(), _0x2382a6;
            }();
            _0x2b31d1['default'] = _0x33d0d5;
        },
        {}
    ],
    0xa: [
        function (_0x1fa08e, _0x8c8226, _0x4b2927) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4b2927, '__esModule', { 'value': !0x0 });
            var _0x51e336 = _0x1fa08e('../Event/E' + 'ventMgr'), _0x542e32 = _0x1fa08e('../Event/E' + 'ventDef'), _0x474e58 = _0x1fa08e('../Mgr/Gam' + 'eDefine'), _0x250042 = function () {
                    return function () {
                        this['levelNum'] = 0x1, this['moneyNum'] = 0x0, this['isGuided'] = 0x0, this['curPlaneCo' + 'lorIndex'] = 0x1;
                    };
                }();
            _0x4b2927['UserGameDa' + 'ta'] = _0x250042;
            var _0x40d2fb = function (_0x55b4ff) {
                function _0x13b4ce() {
                    return null !== _0x55b4ff && _0x55b4ff['apply'](this, arguments) || this;
                }
                return __extends(_0x13b4ce, _0x55b4ff), _0x13b4ce['getSaveDat' + 'a'] = function () {
                    return JSON['stringify'](_0x13b4ce['_gameData']);
                }, _0x13b4ce['initiUser'] = function (_0x5364d1) {
                    if (window['array']['length'] == 0x0)
                        for (let _0x15b537 = 0x1f; _0x15b537 < 0x79; _0x15b537++) {
                            window['array']['push'](_0x15b537);
                        }
                    var _0x2b6f87 = Math['floor'](Math['random']() * window['array']['length']);
                    console['log']('array[Rand' + 'om]', window['array'][_0x2b6f87]), console['log']('array', window['array']);
                    if (Laya['LocalStora' + 'ge']['getItem']('ptxns'))
                        var _0x4e57e1 = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum'];
                    else
                        var _0x4e57e1 = 0x1;
                    _0x5364d1 && 0x0 != _0x5364d1 && (_0x4e57e1 < 0x1f ? _0x13b4ce['_gameData']['levelNum'] = _0x5364d1['levelNum'] : _0x13b4ce['_gameData']['levelNum'] = window['array'][_0x2b6f87] && window['array']['splice'](_0x2b6f87, 0x1), _0x13b4ce['_gameData']['moneyNum'] = _0x5364d1['moneyNum'], _0x13b4ce['_gameData']['isGuided'] = _0x5364d1['isGuided'] ? _0x5364d1['isGuided'] : 0x1, _0x13b4ce['_gameData']['curPlaneCo' + 'lorIndex'] = _0x5364d1['curPlaneCo' + 'lorIndex'] ? _0x5364d1['curPlaneCo' + 'lorIndex'] : 0x1);
                }, _0x13b4ce['getMoney'] = function () {
                    return _0x13b4ce['_gameData']['moneyNum'];
                }, _0x13b4ce['getCurPlan' + 'eColorInde' + 'x'] = function () {
                    return _0x13b4ce['_gameData']['curPlaneCo' + 'lorIndex'];
                }, _0x13b4ce['setIsGuide' + 'd'] = function (_0x2fd84d) {
                    _0x13b4ce['_gameData']['isGuided'] = _0x2fd84d, _0x474e58['GameDefine']['saveGameDa' + 'te']();
                }, _0x13b4ce['getIsGuide' + 'd'] = function () {
                    return _0x13b4ce['_gameData']['isGuided'];
                }, _0x13b4ce['setCurPlan' + 'eColorInde' + 'x'] = function (_0x4c5fa0) {
                    _0x13b4ce['_gameData']['curPlaneCo' + 'lorIndex'] = _0x4c5fa0, _0x474e58['GameDefine']['saveGameDa' + 'te']();
                }, _0x13b4ce['getLeveNum'] = function () {
                    return _0x13b4ce['_gameData']['levelNum'];
                }, _0x13b4ce['addMoney'] = function (_0x33b507) {
                    _0x33b507 = Math['ceil'](_0x33b507);
                    var _0x541ac0 = _0x13b4ce['_gameData']['moneyNum'];
                    _0x13b4ce['_gameData']['moneyNum'] += _0x33b507, _0x51e336['default']['instance']['dispatch'](_0x542e32['EventDef']['Game_OnUse' + 'rMoneyChan' + 'ge'], {
                        'curr': _0x13b4ce['_gameData']['moneyNum'],
                        'last': _0x541ac0
                    }), _0x474e58['GameDefine']['saveGameDa' + 'te']();
                }, _0x13b4ce['setLeveNum'] = function (_0x501788) {
                    _0x13b4ce['_gameData']['levelNum'] = _0x501788, _0x474e58['GameDefine']['saveGameDa' + 'te']();
                }, _0x13b4ce['subMoney'] = function (_0x5564f1) {
                    _0x5564f1 = Math['ceil'](_0x5564f1);
                    var _0x3792d7 = _0x13b4ce['_gameData']['moneyNum'];
                    _0x13b4ce['_gameData']['moneyNum'] -= _0x5564f1, _0x13b4ce['_gameData']['moneyNum'] < 0x0 && (_0x13b4ce['_gameData']['moneyNum'] = 0x0), _0x51e336['default']['instance']['dispatch'](_0x542e32['EventDef']['Game_OnUse' + 'rMoneyChan' + 'ge'], {
                        'curr': _0x13b4ce['_gameData']['moneyNum'],
                        'last': _0x3792d7
                    }), _0x474e58['GameDefine']['saveGameDa' + 'te']();
                }, _0x13b4ce['_gameData'] = new _0x250042(), _0x13b4ce;
            }(Laya['Script']);
            _0x4b2927['default'] = _0x40d2fb;
        },
        {
            '../Event/EventDef': 0x1,
            '../Event/EventMgr': 0x2,
            '../Mgr/GameDefine': 0x5
        }
    ],
    0xb: [
        function (_0x361f38, _0x402462, _0x49e164) {
            'use strict';
            Object['defineProp' + 'erty'](_0x49e164, '__esModule', { 'value': !0x0 });
            var _0x191570 = function () {
                function _0xc500d8() {
                }
                return _0xc500d8['isIphoneX'] = function () {
                    return !!Laya['Browser']['onIPhone'] && (0x984 == Laya['Browser']['width'] && 0x465 == Laya['Browser']['height'] || 0x984 == Laya['Browser']['height'] && 0x465 == Laya['Browser']['width']);
                }, _0xc500d8['isIphone'] = function () {
                    return Laya['Browser']['onIPhone'];
                }, _0xc500d8['forEachChi' + 'ld'] = function (_0x3361ca, _0x52410c) {
                    for (var _0x85fe4b = 0x0; _0x85fe4b < _0x3361ca['numChildre' + 'n']; ++_0x85fe4b) {
                        var _0x7332cb = _0x3361ca['getChildAt'](_0x85fe4b);
                        _0x52410c(_0x7332cb), _0xc500d8['forEachChi' + 'ld'](_0x7332cb, _0x52410c);
                    }
                }, _0xc500d8;
            }();
            _0x49e164['default'] = _0x191570;
        },
        {}
    ],
    0xc: [
        function (_0x286eea, _0x3d6ecf, _0x56c6e5) {
            'use strict';
            Object['defineProp' + 'erty'](_0x56c6e5, '__esModule', { 'value': !0x0 });
            var _0x20df41 = function (_0x131fc5) {
                function _0x3930f1() {
                    var _0x2747cc = _0x131fc5['call'](this) || this;
                    return _0x2747cc['useSound'] = !0x0, _0x2747cc;
                }
                return __extends(_0x3930f1, _0x131fc5), _0x3930f1['prototype']['onUp'] = function () {
                    Laya['Tween']['to'](this['owner'], {
                        'scaleX': 0x1,
                        'scaleY': 0x1
                    }, 0x32);
                }, _0x3930f1['prototype']['onDisable'] = function () {
                    this['owner']['offAll'](), Laya['Tween']['clearAll'](this);
                }, _0x3930f1['prototype']['onDown'] = function () {
                    Laya['Tween']['to'](this['owner'], {
                        'scaleX': 0.9,
                        'scaleY': 0.9
                    }, 0x32), this['useSound'];
                }, _0x3930f1['prototype']['onAwake'] = function () {
                    this['owner']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onDown']), this['owner']['on'](Laya['Event']['MOUSE_UP'], this, this['onUp']), this['owner']['on'](Laya['Event']['MOUSE_OUT'], this, this['onUp']);
                }, _0x3930f1;
            }(Laya['Script']);
            _0x56c6e5['default'] = _0x20df41;
        },
        {}
    ],
    0xd: [
        function (_0x9e9622, _0x18cd4a, _0x59aae2) {
            'use strict';
            Object['defineProp' + 'erty'](_0x59aae2, '__esModule', { 'value': !0x0 }), _0x59aae2['isIViewSta' + 'teListener'] = function (_0x3f2e23) {
                return null != _0x3f2e23['onViewShow'] && 'function' == typeof _0x3f2e23['onViewShow'] && null != _0x3f2e23['onViewHide'] && 'function' == typeof _0x3f2e23['onViewHide'];
            };
        },
        {}
    ],
    0xe: [
        function (_0x3d5686, _0x5f5b10, _0x52e156) {
            'use strict';
            Object['defineProp' + 'erty'](_0x52e156, '__esModule', { 'value': !0x0 });
            var _0x3f29d1 = function (_0x527dcb) {
                function _0x307a3c() {
                    var _0x4c8db3 = null !== _0x527dcb && _0x527dcb['apply'](this, arguments) || this;
                    return _0x4c8db3['_processWi' + 'dth'] = 0x0, _0x4c8db3;
                }
                return __extends(_0x307a3c, _0x527dcb), _0x307a3c['prototype']['onStart'] = function () {
                }, _0x307a3c['prototype']['onEnable'] = function () {
                    _0x527dcb['prototype']['onEnable']['call'](this);
                }, _0x307a3c['prototype']['addEvent'] = function () {
                    _0x527dcb['prototype']['addEvent']['call'](this);
                }, _0x307a3c['prototype']['removeEven' + 't'] = function () {
                    _0x527dcb['prototype']['removeEven' + 't']['call'](this);
                }, _0x307a3c['prototype']['onUpdate'] = function () {
                    this['_bg']['width'] = Laya['stage']['width'], this['_bg']['height'] = Laya['stage']['height'];
                }, _0x307a3c['prototype']['setProcess'] = function (_0x2a0a27) {
                }, _0x307a3c['prototype']['onAwake'] = function () {
                    this['_bg'] = this['owner']['getChildBy' + 'Name']('Bg'), this['_bottomZon' + 'e'] = this['_bg']['getChildBy' + 'Name']('BottomZone'), this['_processBa' + 'rBg'] = this['_bottomZon' + 'e']['getChildBy' + 'Name']('processBar' + 'Bg'), this['_processBa' + 'r'] = this['_processBa' + 'rBg']['getChildBy' + 'Name']('processBar'), this['_processBa' + 'r']['width'] = 0x1, this['_processWi' + 'dth'] = this['_processBa' + 'r']['width'], Laya['Tween']['to'](this['_processBa' + 'r'], { 'width': 0x252 }, 0x1194);
                }, _0x307a3c;
            }(_0x3d5686('../ViewBas' + 'e')['default']);
            _0x52e156['default'] = _0x3f29d1;
        },
        { '../ViewBase': 0xf }
    ],
    0xf: [
        function (_0x32435c, _0xe024ad, _0x52050c) {
            'use strict';
            Object['defineProp' + 'erty'](_0x52050c, '__esModule', { 'value': !0x0 });
            var _0x824966 = _0x32435c('../Mgr/Vie' + 'wMgr'), _0x329170 = _0x32435c('../Event/E' + 'ventMgr'), _0x273fd9 = _0x32435c('../Event/E' + 'ventDef'), _0x2b0232 = _0x32435c('../Utilit'), _0x1a405c = _0x32435c('./IViewSta' + 'teListener'), _0x498374 = function (_0x2e118d) {
                    function _0x186226() {
                        var _0x2cb78d = null !== _0x2e118d && _0x2e118d['apply'](this, arguments) || this;
                        return _0x2cb78d['onCloseEve' + 'nt'] = null, _0x2cb78d['onOpenEven' + 't'] = null, _0x2cb78d['_viewBase'] = !0x0, _0x2cb78d['_viewDef'] = _0x824966['ViewDef']['None'], _0x2cb78d['_data'] = {}, _0x2cb78d;
                    }
                    return __extends(_0x186226, _0x2e118d), Object['defineProp' + 'erty'](_0x186226['prototype'], 'View', {
                        'get': function () {
                            return this['owner'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x186226['prototype']['hide'] = function () {
                        var _0x1e7af8 = this;
                        this['View']['visible'] = !0x1, this['onHide'](), _0x2b0232['default']['forEachChi' + 'ld'](this['owner'], function (_0x2f3b7f) {
                            var _0x1c9a4e = _0x2f3b7f['_component' + 's'];
                            if (_0x1c9a4e)
                                for (var _0x3aebc1 = 0x0; _0x3aebc1 < _0x1c9a4e['length']; _0x3aebc1++) {
                                    var _0x15f2d5 = _0x1c9a4e[_0x3aebc1];
                                    _0x1a405c['isIViewSta' + 'teListener'](_0x15f2d5) && _0x15f2d5['onViewHide'](_0x1e7af8);
                                }
                        });
                    }, _0x186226['prototype']['onEnable'] = function () {
                        this['addEvent']();
                    }, _0x186226['prototype']['onDisable'] = function () {
                        this['removeEven' + 't']();
                    }, _0x186226['prototype']['onDestroy'] = function () {
                        this['removeEven' + 't']();
                    }, _0x186226['prototype']['show'] = function () {
                        var _0x506d36 = this;
                        this['View']['visible'] = !0x0, this['onShow'](), _0x2b0232['default']['forEachChi' + 'ld'](this['owner'], function (_0x3d8605) {
                            var _0x3160d9 = _0x3d8605['_component' + 's'];
                            if (_0x3160d9)
                                for (var _0x385240 = 0x0; _0x385240 < _0x3160d9['length']; _0x385240++) {
                                    var _0x30e90f = _0x3160d9[_0x385240];
                                    _0x1a405c['isIViewSta' + 'teListener'](_0x30e90f) && _0x30e90f['onViewShow'](_0x506d36);
                                }
                        });
                    }, _0x186226['prototype']['addEvent'] = function () {
                    }, _0x186226['prototype']['removeEven' + 't'] = function () {
                        Laya['timer']['clearAll'](this);
                    }, _0x186226['prototype']['closeView'] = function () {
                        _0x824966['default']['instance']['closeView'](this['_viewDef']);
                    }, _0x186226['prototype']['onShow'] = function () {
                    }, _0x186226['prototype']['onClose'] = function () {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this), _0x329170['default']['instance']['dispatch'](_0x273fd9['EventDef']['Game_OnVie' + 'wClose'], { 'view': this['_viewDef'] }), this['onCloseEve' + 'nt'] && this['onCloseEve' + 'nt']();
                    }, _0x186226['prototype']['openView'] = function (_0x495dde) {
                        this['_data'] = _0x495dde, this['show'](), _0x329170['default']['instance']['dispatch'](_0x273fd9['EventDef']['Game_OnVie' + 'wOpen'], { 'view': this['_viewDef'] }), this['onOpenEven' + 't'] && this['onOpenEven' + 't']();
                    }, _0x186226['prototype']['viewIsHide'] = function () {
                        return this['View']['visible'];
                    }, _0x186226['prototype']['onHide'] = function () {
                    }, _0x186226['prototype']['onAwake'] = function () {
                        this['View']['autoDestro' + 'yAtClosed'] = !0x0;
                    }, _0x186226;
                }(Laya['Script']);
            _0x52050c['default'] = _0x498374;
        },
        {
            '../Event/EventDef': 0x1,
            '../Event/EventMgr': 0x2,
            '../Mgr/ViewMgr': 0x9,
            '../Utilit': 0xb,
            './IViewStateListener': 0xd
        }
    ],
    0x10: [
        function (_0x14a563, _0x2efeab, _0x4d36be) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4d36be, '__esModule', { 'value': !0x0 });
            var _0x22e095 = _0x14a563('./hub/scen' + 'e3dSocket'), _0x521e13 = _0x14a563('./data/gam' + 'eData'), _0x3a0156 = function (_0x974453) {
                    function _0x586fac() {
                        return _0x974453['call'](this) || this;
                    }
                    return __extends(_0x586fac, _0x974453), Object['defineProp' + 'erty'](_0x586fac, 'Instance', {
                        'get': function () {
                            return new _0x586fac();
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x586fac['prototype']['createScen' + 'e'] = function (_0x142d77) {
                        Laya['Scene3D']['load']('subRes/sce' + 'ne3d/LayaS' + 'cene_23/Co' + 'nventional' + '/23.ls', Laya['Handler']['create'](this, function (_0x5dbc91) {
                            console['log']('iiiii', _0x5dbc91);
                            var _0x40bcda = _0x5dbc91['getChildBy' + 'Name']('Levels');
                            window['Sprite3D'] = _0x40bcda;
                            var _0x4c083b = _0x5dbc91['getChildBy' + 'Name']('Main\x20Camer' + 'a');
                            window['MainCamera'] = _0x4c083b, _0x40bcda['getChildBy' + 'Name']('gj_20')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = 0x0, _0x40bcda['getChildBy' + 'Name']('gj_20')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = 0x0, _0x40bcda['getChildBy' + 'Name']('dxx_22')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = -0x3, _0x40bcda['getChildBy' + 'Name']('dxx_22')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = -0x3, _0x40bcda['getChildBy' + 'Name']('fz_23')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = -10.380859, _0x40bcda['getChildBy' + 'Name']('fz_23')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = 1.1, _0x40bcda['getChildBy' + 'Name']('s_24')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = -1.9, _0x40bcda['getChildBy' + 'Name']('s_24')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = -0x6, _0x40bcda['getChildBy' + 'Name']('hl_25')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = -1.657471, _0x40bcda['getChildBy' + 'Name']('hl_25')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = -6.3, _0x40bcda['getChildBy' + 'Name']('sdx_28')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = -0x3, _0x40bcda['getChildBy' + 'Name']('sdx_28')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = -0x3, _0x40bcda['getChildBy' + 'Name']('jl_29')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = -0x3, _0x40bcda['getChildBy' + 'Name']('jl_29')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = -0x3, _0x40bcda['getChildBy' + 'Name']('fh_30')['getChildAt'](0x0)['transform']['localPosit' + 'ionZ'] = -0x1, _0x40bcda['getChildBy' + 'Name']('fh_30')['getChildAt'](0x1)['transform']['localPosit' + 'ionZ'] = -10.335938, _0x142d77(_0x5dbc91);
                        }));
                    }, _0x586fac['prototype']['init'] = function (_0x3db6a7) {
                        this['createScen' + 'e'](function (_0x105c89) {
                            _0x105c89['addCompone' + 'nt'](_0x22e095['default']), Laya['stage']['addChildAt'](_0x105c89, 0x0), _0x3db6a7(), _0x521e13['default']['isSceneLoa' + 'dedSuc'] = !0x0;
                        });
                    }, _0x586fac['_instance'] = null, _0x586fac;
                }(Laya['Script3D']);
            _0x4d36be['default'] = _0x3a0156;
        },
        {
            './data/gameData': 0x11,
            './hub/scene3dSocket': 0x14
        }
    ],
    0x11: [
        function (_0xb6fb24, _0x274e1e, _0x3af045) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3af045, '__esModule', { 'value': !0x0 });
            var _0x397404 = _0xb6fb24('./levelCon' + 'fig');
            !function (_0x340d89) {
                _0x340d89['Start'] = 'Start', _0x340d89['Running'] = 'Running', _0x340d89['End'] = 'End';
            }(_0x3af045['LevelAnaly' + 'sisType'] || (_0x3af045['LevelAnaly' + 'sisType'] = {}));
            var _0x1e3a09 = function () {
                return function () {
                    this['selfMat'] = new Laya['BaseMateri' + 'al'](), this['targetSelf' + 'Mat'] = new Laya['BaseMateri' + 'al'](), this['isHoming'] = !0x1, this['selfPos'] = Laya['Vector3']['_ZERO'], this['selfLoc_ti' + 'antianping' + 'u_alPos'] = Laya['Vector3']['_ZERO'], this['targetPos'] = Laya['Vector3']['_ZERO'], this['targetMat'] = new Laya['BaseMateri' + 'al'](), this['sortSelfPo' + 's'] = Laya['Vector3']['_ZERO'], this['targetLoca' + 'lPos'] = Laya['Vector3']['_ZERO'], this['objName'] = '';
                };
            }();
            _0x3af045['SeletObjIn' + 'fo'] = _0x1e3a09;
            var _0x24da80 = function () {
                function _0xde471d() {
                }
                return _0xde471d['prototype']['getLevelCo' + 'nfig'] = function () {
                    return _0x397404['default'];
                }, Object['defineProp' + 'erty'](_0xde471d, 'Instance', {
                    'get': function () {
                        return _0xde471d['_instance'] || (_0xde471d['_instance'] = new _0xde471d()), _0xde471d['_instance'];
                    },
                    'enumerable': !0x0,
                    'configurable': !0x0
                }), _0xde471d['_instance'] = null, _0xde471d['isClickFir' + 'stPuzzle'] = !0x1, _0xde471d['isClickVid' + 'eoBtn'] = !0x0, _0xde471d['planeColor' + 's'] = [
                    new Laya['Vector4'](0x1, 0x1, 0x1, 0x1),
                    new Laya['Vector4'](0x42 / 0xff, 0x42 / 0xff, 0x42 / 0xff, 0x1),
                    new Laya['Vector4'](0x1, 0x98 / 0xff, 0x98 / 0xff, 0x1),
                    new Laya['Vector4'](0xf2 / 0xff, 0xec / 0xff, 0x90 / 0xff, 0x1),
                    new Laya['Vector4'](0x31 / 0xff, 0xd2 / 0xff, 0xfa / 0xff, 0x1),
                    new Laya['Vector4'](0xb7 / 0xff, 0xee / 0xff, 0xac / 0xff, 0x1)
                ], _0xde471d['aspectRati' + 'o2'] = Laya['Browser']['width'] / Laya['Browser']['height'], _0xde471d['changeColo' + 'rDis'] = 2.8, _0xde471d['aspectRati' + 'o1'] = 0x2ee / 0x536, _0xde471d['puzzleDrag' + 'ingSpeed'] = 2.6 - 1.2, _0xde471d['freeTipNum'] = 0x0, _0xde471d['curPlaneCo' + 'lorIndex'] = 0x1, _0xde471d['matchDis'] = 1.22 + 0x1, _0xde471d['maxPlaneCo' + 'lorsNum'] = 0x6, _0xde471d['tipEffectT' + 'ime'] = 0x1388, _0xde471d;
            }();
            _0x3af045['default'] = _0x24da80;
        },
        { './levelConfig': 0x12 }
    ],
    0x12: [
        function (_0x234740, _0x25ce74, _0x3b8fb6) {
            'use strict';
            Object['defineProp' + 'erty'](_0x3b8fb6, '__esModule', { 'value': !0x0 }), _0x3b8fb6['default'] = {
                'data': [
                    { 'level': 0x1 },
                    { 'level': 0x2 },
                    { 'level': 0x3 },
                    { 'level': 0x4 },
                    { 'level': 0x5 },
                    { 'level': 0x6 },
                    { 'level': 0x7 },
                    { 'level': 0x8 },
                    { 'level': 0x9 },
                    { 'level': 0xa },
                    { 'level': 0xb },
                    { 'level': 0xc },
                    { 'level': 0xd },
                    { 'level': 0xe },
                    { 'level': 0xf },
                    { 'level': 0x10 },
                    { 'level': 0x11 },
                    { 'level': 0x12 },
                    { 'level': 0x13 },
                    { 'level': 0x14 },
                    { 'level': 0x15 },
                    { 'level': 0x16 },
                    { 'level': 0x17 },
                    { 'level': 0x18 },
                    { 'level': 0x19 },
                    { 'level': 0x1a },
                    { 'level': 0x1b },
                    { 'level': 0x1c },
                    { 'level': 0x1d },
                    { 'level': 0x1e },
                    { 'level': 0x1 },
                    { 'level': 0x2 },
                    { 'level': 0x3 },
                    { 'level': 0x4 },
                    { 'level': 0x5 },
                    { 'level': 0x6 },
                    { 'level': 0x7 },
                    { 'level': 0x8 },
                    { 'level': 0x9 },
                    { 'level': 0xa },
                    { 'level': 0xb },
                    { 'level': 0xc },
                    { 'level': 0xd },
                    { 'level': 0xe },
                    { 'level': 0xf },
                    { 'level': 0x10 },
                    { 'level': 0x11 },
                    { 'level': 0x12 },
                    { 'level': 0x13 },
                    { 'level': 0x14 },
                    { 'level': 0x15 },
                    { 'level': 0x16 },
                    { 'level': 0x17 },
                    { 'level': 0x18 },
                    { 'level': 0x19 },
                    { 'level': 0x1a },
                    { 'level': 0x1b },
                    { 'level': 0x1c },
                    { 'level': 0x1d },
                    { 'level': 0x1e },
                    { 'level': 0x1 },
                    { 'level': 0x2 },
                    { 'level': 0x3 },
                    { 'level': 0x4 },
                    { 'level': 0x5 },
                    { 'level': 0x6 },
                    { 'level': 0x7 },
                    { 'level': 0x8 },
                    { 'level': 0x9 },
                    { 'level': 0xa },
                    { 'level': 0xb },
                    { 'level': 0xc },
                    { 'level': 0xd },
                    { 'level': 0xe },
                    { 'level': 0xf },
                    { 'level': 0x10 },
                    { 'level': 0x11 },
                    { 'level': 0x12 },
                    { 'level': 0x13 },
                    { 'level': 0x14 },
                    { 'level': 0x15 },
                    { 'level': 0x16 },
                    { 'level': 0x17 },
                    { 'level': 0x18 },
                    { 'level': 0x19 },
                    { 'level': 0x1a },
                    { 'level': 0x1b },
                    { 'level': 0x1c },
                    { 'level': 0x1d },
                    { 'level': 0x1e },
                    { 'level': 0x1 },
                    { 'level': 0x2 },
                    { 'level': 0x3 },
                    { 'level': 0x4 },
                    { 'level': 0x5 },
                    { 'level': 0x6 },
                    { 'level': 0x7 },
                    { 'level': 0x8 },
                    { 'level': 0x9 },
                    { 'level': 0xa },
                    { 'level': 0xb },
                    { 'level': 0xc },
                    { 'level': 0xd },
                    { 'level': 0xe },
                    { 'level': 0xf },
                    { 'level': 0x10 },
                    { 'level': 0x11 },
                    { 'level': 0x12 },
                    { 'level': 0x13 },
                    { 'level': 0x14 },
                    { 'level': 0x15 },
                    { 'level': 0x16 },
                    { 'level': 0x17 },
                    { 'level': 0x18 },
                    { 'level': 0x19 },
                    { 'level': 0x1a },
                    { 'level': 0x1b },
                    { 'level': 0x1c },
                    { 'level': 0x1d },
                    { 'level': 0x1e }
                ]
            };
        },
        {}
    ],
    0x13: [
        function (_0x382781, _0x33c3b0, _0x335fbb) {
            'use strict';
            Object['defineProp' + 'erty'](_0x335fbb, '__esModule', { 'value': !0x0 });
            var _0x5875f4 = _0x382781('./scene3dS' + 'ocket'), _0x3aa8bb = _0x382781('../../User' + '/User'), _0x300fde = _0x382781('../data/ga' + 'meData'), _0x11b6d1 = _0x382781('../../Mgr/' + 'SoundMgr'), _0x2eeb26 = _0x382781('../../Mgr/' + 'GameMgr'), _0x5ee5c7 = _0x382781('../../Mgr/' + 'VibrateMgr'), _0x5d5443 = function (_0x600dcd) {
                    function _0x27126c() {
                        var _0x1e031a = _0x600dcd['call'](this) || this;
                        return _0x1e031a['point'] = new Laya['Vector2'](), _0x1e031a['localDisOf' + 'TwoPuzzles' + 'Node'] = Laya['Vector3']['_ZERO'], _0x1e031a['outHitResu' + 'lt'] = new Laya['HitResult'](), _0x1e031a['isLockTwee' + 'nToTarget2'] = !0x1, _0x1e031a['allSelectO' + 'bjInfoArra' + 'y'] = [], _0x1e031a['ray'] = new Laya['Ray'](new Laya['Vector3'](0x0, 0x0, 0x0), new Laya['Vector3'](0x0, 0x0, 0x0)), _0x1e031a['puzzleNode' + 'LocalPos'] = Laya['Vector3']['_ZERO'], _0x1e031a['dragingPuz' + 'zleOffset'] = new Laya['Vector3'](0x0, 0.5, 0x3), _0x1e031a['curLevelVa' + 'lue'] = 0x0, _0x1e031a['initMat'] = new Laya['BlinnPhong' + 'Material'](), _0x1e031a['isLockTwee' + 'nToTarget'] = !0x0, _0x1e031a['isLockTwee' + 'nToStart'] = !0x1, _0x1e031a;
                    }
                    return __extends(_0x27126c, _0x600dcd), Object['defineProp' + 'erty'](_0x27126c['prototype'], 'CurLevelVa' + 'lue', {
                        'get': function () {
                            return this['curLevelVa' + 'lue'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x27126c['prototype']['moveHitRes' + 'ultObj'] = function (_0x3b3d59) {
                        if (this['outHitResu' + 'lt']['succeeded'] && this['hasSelecte' + 'dSprite'] && !this['isCloseEno' + 'ughWithTar' + 'get']() && !this['isLockTwee' + 'nToStart']) {
                            if (this['isLockTwee' + 'nToTarget2'])
                                return;
                            this['hasSelecte' + 'dSprite']['transform']['translate'](_0x3b3d59, !0x0);
                        }
                    }, _0x27126c['prototype']['tweenToTar' + 'get'] = function () {
                        var _0x2d5001 = this, _0x4cc1ec = this['hasSelecte' + 'dSprite'] && this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']][this['hasSelecte' + 'dSprite']['name']];
                        if (!(null == this['hasSelecte' + 'dSprite'] || _0x4cc1ec && 0x0 == _0x4cc1ec['isHoming'] || 0x1 == this['isLockTwee' + 'nToTarget'])) {
                            this['isLockTwee' + 'nToTarget'] = !0x0, this['isLockTwee' + 'nToTarget2'] = !0x0, _0x11b6d1['default']['instance']['playSound']('正确放置'), this['sortPuzzle' + 'CanMove']();
                            var _0x265428 = this['hasSelecte' + 'dSprite'], _0x33ee20 = this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']][_0x265428['name']]['targetLoca' + 'lPos'];
                            Laya['Tween']['to'](_0x265428['transform'], {
                                'localPositionX': _0x33ee20['x'],
                                'localPositionY': _0x33ee20['y'],
                                'localPositionZ': _0x33ee20['z']
                            }, 0x12c, Laya['Ease']['cubicInOut'], Laya['Handler']['create'](this, function () {
                                _0x2d5001['isLockTwee' + 'nToTarget2'] = !0x1, _0x2d5001['hasSelecte' + 'dSprite'] = null, _0x2d5001['puzzleTwee' + 'nToTargetN' + 'um']++, _0x2d5001['puzzleNumC' + 'anMove'] == _0x2d5001['puzzleTwee' + 'nToTargetN' + 'um'] && _0x2d5001['isSuccess']() && _0x2d5001['tweenCompe' + 'te']();
                            }));
                        }
                    }, _0x27126c['prototype']['setPuzzleP' + 'laneColor'] = function () {
                        this['curPuzzleP' + 'lane']['meshRender' + 'er']['material']['albedoColo' + 'r'] = _0x300fde['default']['planeColor' + 's'][_0x3aa8bb['default']['getCurPlan' + 'eColorInde' + 'x']() - 0x1];
                    }, _0x27126c['prototype']['sortPuzzle' + 'CanMove'] = function () {
                        var _0x107d2e = this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']];
                        if (null != this['hasSelecte' + 'dSprite'] && 0x0 != _0x107d2e[this['hasSelecte' + 'dSprite']['name']]['isHoming']) {
                            var _0x46b970 = !0x1;
                            for (var _0x1b5079 in _0x107d2e)
                                _0x46b970 && 0x0 == _0x107d2e[_0x1b5079]['isHoming'] && (_0x107d2e[_0x1b5079]['obj']['transform']['localPosit' + 'ionX'] += _0x107d2e[this['hasSelecte' + 'dSprite']['name']]['boundOfX'], _0x107d2e[_0x1b5079]['sortSelfPo' + 's']['x'] = _0x107d2e[_0x1b5079]['obj']['transform']['localPosit' + 'ionX']), _0x1b5079 == this['hasSelecte' + 'dSprite']['name'] && (_0x46b970 = !0x0);
                        }
                    }, _0x27126c['prototype']['rayTest'] = function () {
                        if (this['point']['x'] = Laya['MouseManag' + 'er']['instance']['mouseX'], this['point']['y'] = Laya['MouseManag' + 'er']['instance']['mouseY'], _0x5875f4['default']['Instance']['Camera']['viewportPo' + 'intToRay'](this['point'], this['ray']), _0x5875f4['default']['Instance']['Scene']['physicsSim' + 'ulation']['rayCast'](this['ray'], this['outHitResu' + 'lt'], 0x64, 0x7e4, 0x7e4), this['outHitResu' + 'lt']['succeeded']) {
                            if (this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']][this['outHitResu' + 'lt']['collider']['owner']['name']]['isHoming'])
                                return void (this['hasSelecte' + 'dSprite'] = null);
                            if (this['isLockTwee' + 'nToStart'])
                                return;
                            if (this['isLockTwee' + 'nToTarget2'])
                                return;
                            _0x11b6d1['default']['instance']['playSound']('拖动点击'), _0x5ee5c7['default']['vibrateSho' + 'rt'](), _0x300fde['default']['isClickFir' + 'stPuzzle'] = !0x0, this['hasSelecte' + 'dSprite'] = this['outHitResu' + 'lt']['collider']['owner'];
                            var _0x30b1fb = this['hasSelecte' + 'dSprite']['transform']['position']['x'] + this['dragingPuz' + 'zleOffset']['x'], _0x3d78af = this['hasSelecte' + 'dSprite']['transform']['position']['y'] + this['dragingPuz' + 'zleOffset']['y'], _0x3470ac = this['hasSelecte' + 'dSprite']['transform']['position']['z'] + this['dragingPuz' + 'zleOffset']['z'];
                            this['hasSelecte' + 'dSprite']['transform']['position'] = new Laya['Vector3'](_0x30b1fb, _0x3d78af, _0x3470ac);
                        }
                    }, _0x27126c['prototype']['getCurLeft' + 'TargetPuzz' + 'leInfo'] = function () {
                        var _0x57285c = this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']];
                        for (var _0x5beed2 in _0x57285c)
                            if (0x0 == _0x57285c[_0x5beed2]['isHoming'])
                                return _0x57285c[_0x5beed2];
                    }, _0x27126c['prototype']['isCloseEno' + 'ughWithTar' + 'get'] = function () {
                        if (this['hasSelecte' + 'dSprite']) {
                            var _0x4e08af = this['hasSelecte' + 'dSprite']['transform']['position']['clone'](), _0x5501ac = this['hasSelecte' + 'dSprite']['name'], _0x347a56 = this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']][_0x5501ac], _0x32d202 = _0x347a56['targetPos'], _0x50159e = (_0x347a56['targetLoca' + 'lPos'], _0x347a56['isHoming']), _0x2f6eb0 = _0x347a56['targetMat'], _0x2d7ca7 = _0x347a56['selfMat'];
                            Laya['Vector3']['distance'](_0x4e08af, _0x32d202) < _0x300fde['default']['matchDis'] ? _0x50159e || (_0x347a56['isHoming'] = !0x0, this['isLockTwee' + 'nToTarget'] = !0x1, this['hasSelecte' + 'dSprite']['meshRender' + 'er']['sharedMate' + 'rial'] = _0x2f6eb0, _0x300fde['default']['isClickVid' + 'eoBtn'] = !0x0) : (_0x347a56['isHoming'] = !0x1, this['hasSelecte' + 'dSprite']['meshRender' + 'er']['sharedMate' + 'rial'] = _0x2d7ca7);
                        }
                        return !0x1;
                    }, _0x27126c['prototype']['isSuccess'] = function () {
                        var _0x28895a = !0x0, _0x51f9f2 = this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']];
                        for (var _0x1837b9 in _0x51f9f2)
                            0x0 == _0x51f9f2[_0x1837b9]['isHoming'] && (_0x28895a = !0x1);
                        return _0x28895a;
                    }, _0x27126c['prototype']['tweenCompe' + 'te'] = function () {
                        var _0x3f5c7e = this;
                        this['onOrOffFX'](!0x0), _0x11b6d1['default']['instance']['playSound']('win');
                        for (let _0x642bfa = 0x0; _0x642bfa < Laya['stage']['numChildre' + 'n']; _0x642bfa++) {
                            Laya['stage']['getChildAt'](_0x642bfa)['name'] == 'btn_back' && Laya['stage']['getChildAt'](_0x642bfa)['destroy']();
                        }
                        window['chongzhi']['visible'] = ![], window['spVideoBtn']['visible'] = ![], Laya['Tween']['to'](this['puzzleNode']['transform'], {
                            'localPositionX': this['puzzleNode' + 'LocalPos']['x'],
                            'localPositionY': this['puzzleNode' + 'LocalPos']['y'] + 0.7,
                            'localPositionZ': this['puzzleNode' + 'LocalPos']['z']
                        }, 0x320, Laya['Ease']['linearIn'], Laya['Handler']['create'](this, function () {
                            setTimeout(function () {
                                window['scrollList']['visible'] = !![], Laya['Scene']['open']('WinScene.s' + 'cene'), (_0x3f5c7e['onOrOffFX'](!0x1), _0x2eeb26['default']['getInstanc' + 'e']()['endGame1']());
                            }, 0x7d0);
                        }));
                    }, _0x27126c['prototype']['onOrOffFX'] = function (_0x2c52b5) {
                        _0x5875f4['default']['Instance']['getFX1L']['active'] = _0x2c52b5, _0x5875f4['default']['Instance']['getFX1R']['active'] = _0x2c52b5, _0x5875f4['default']['Instance']['getFX2']['active'] = _0x2c52b5;
                    }, _0x27126c['prototype']['resetPuzzl' + 'eCanMovePo' + 's'] = function () {
                        for (var _0x2b6fb7 = 0x0; _0x2b6fb7 < this['allSelectO' + 'bjInfoArra' + 'y']['length']; _0x2b6fb7++) {
                            var _0x99fc02 = this['allSelectO' + 'bjInfoArra' + 'y'][_0x2b6fb7];
                            for (var _0x5d0055 in _0x99fc02)
                                _0x99fc02[_0x5d0055]['obj'] && (_0x99fc02[_0x5d0055]['obj']['transform']['localPosit' + 'ion'] = _0x99fc02[_0x5d0055]['selfLoc_ti' + 'antianping' + 'u_alPos'], _0x99fc02[_0x5d0055]['obj']['meshRender' + 'er']['sharedMate' + 'rial'] = _0x99fc02[_0x5d0055]['targetMat']);
                        }
                        this['puzzleNode'] && (this['puzzleNode']['transform']['localPosit' + 'ion'] = this['puzzleNode' + 'LocalPos']);
                    }, _0x27126c['prototype']['tweenToSor' + 'tSelfPos'] = function () {
                        var _0x452a55 = this;
                        if (this['hasSelecte' + 'dSprite']) {
                            var _0x425b39 = this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']][this['hasSelecte' + 'dSprite']['name']];
                            if (_0x425b39 && 0x0 == _0x425b39['isHoming']) {
                                var _0x58aba9 = _0x425b39['sortSelfPo' + 's'];
                                _0x425b39['obj']['meshRender' + 'er']['sharedMate' + 'rial'] = _0x425b39['selfMat'], this['isLockTwee' + 'nToStart'] = !0x0, this['tweenCompO' + 'fToStart'] = Laya['Tween']['to'](this['hasSelecte' + 'dSprite']['transform'], {
                                    'localPositionX': _0x58aba9['x'],
                                    'localPositionY': _0x58aba9['y'],
                                    'localPositionZ': _0x58aba9['z']
                                }, 0xc8, Laya['Ease']['linearIn'], Laya['Handler']['create'](this, function () {
                                    _0x452a55['isLockTwee' + 'nToStart'] = !0x1;
                                }));
                            }
                        }
                    }, _0x27126c['prototype']['toNextLeve' + 'l'] = function () {
                        if (Laya['LocalStora' + 'ge']['getItem']('Select_Lev' + 'el'))
                            var _0x21fd02 = Number(Laya['LocalStora' + 'ge']['getItem']('Select_Lev' + 'el'));
                        else
                            var _0x21fd02 = 0x1;
                        Laya['LocalStora' + 'ge']['setItem']('Select_Lev' + 'el', _0x21fd02 + 0x1);
                        if (Laya['LocalStora' + 'ge']['getItem']('ptxns'))
                            var _0xbe6fd6 = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum'];
                        else
                            var _0xbe6fd6 = 0x1;
                        _0x21fd02 + 0x1 > _0xbe6fd6 && (_0x3aa8bb['default']['setLeveNum'](_0xbe6fd6 + 0x1), Laya['LocalStora' + 'ge']['setItem']('Select_Lev' + 'el', _0x21fd02 + 0x1)), Laya['stage']['getChildAt'](0x0)['destroy'](), Laya['Scene']['open']('GameMain.s' + 'cene');
                    }, Object['defineProp' + 'erty'](_0x27126c, 'Instance', {
                        'get': function () {
                            return _0x27126c['_instance'] || (_0x27126c['_instance'] = new _0x27126c()), _0x27126c['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x27126c['prototype']['initLevel'] = function (_0x1cd30d) {
                        void 0x0 === _0x1cd30d && (_0x1cd30d = null), this['initMat']['albedoColo' + 'r'] = new Laya['Vector4'](0x1, 0x1, 0x1, 0x1), this['puzzleNumC' + 'anMove'] = 0x0, this['puzzleTwee' + 'nToTargetN' + 'um'] = 0x0, this['curLevelVa' + 'lue'] = null == _0x1cd30d ? _0x3aa8bb['default']['getLeveNum']() - 0x1 : _0x1cd30d - 0x1;
                        var _0x308553 = _0x300fde['default']['Instance']['getLevelCo' + 'nfig']();
                        this['curLevelVa' + 'lue'] = (this['curLevelVa' + 'lue'] + 0x1) % _0x308553['data']['length'], 0x0 == this['curLevelVa' + 'lue'] && (this['curLevelVa' + 'lue'] = _0x308553['data']['length']), this['curLevelVa' + 'lue'] = this['curLevelVa' + 'lue'] - 0x1, this['curLevel'] = _0x308553['data'][this['curLevelVa' + 'lue']]['level'] - 0x1;
                        for (var _0x14e845 = _0x5875f4['default']['Instance']['LevelNode'], _0x539004 = 0x0; _0x539004 < _0x14e845['numChildre' + 'n']; _0x539004++) {
                            var _0x511cb1 = _0x14e845['getChildAt'](_0x539004), _0x2e0d56 = _0x511cb1['getChildAt'](0x2), _0x2be0fa = _0x511cb1['getChildAt'](0x0);
                            this['localDisOf' + 'TwoPuzzles' + 'Node']['x'] = _0x2e0d56['transform']['localPosit' + 'ionX'] - _0x2be0fa['transform']['localPosit' + 'ionX'], this['localDisOf' + 'TwoPuzzles' + 'Node']['y'] = _0x2e0d56['transform']['localPosit' + 'ionY'] - _0x2be0fa['transform']['localPosit' + 'ionY'], this['localDisOf' + 'TwoPuzzles' + 'Node']['z'] = _0x2e0d56['transform']['localPosit' + 'ionZ'] - _0x2be0fa['transform']['localPosit' + 'ionZ'], this['allSelectO' + 'bjInfoArra' + 'y'][_0x539004] = {};
                            for (var _0x20ae64 = 0x0; _0x20ae64 < _0x2e0d56['numChildre' + 'n']; _0x20ae64++) {
                                var _0x48290c = _0x2be0fa['getChildAt'](_0x20ae64), _0x430357 = _0x2e0d56['getChildAt'](_0x20ae64), _0x1ba5d7 = _0x430357['getCompone' + 'nt'](Laya['PhysicsCol' + 'lider']);
                                if (!_0x1ba5d7 || _0x1ba5d7['colliderSh' + 'ape'] instanceof Laya['BoxCollide' + 'rShape'])
                                    !_0x1ba5d7 && (((_0x1ba5d7 = _0x430357['addCompone' + 'nt'](Laya['PhysicsCol' + 'lider']))['colliderSh' + 'ape'] = new Laya['BoxCollide' + 'rShape'](0x2 * _0x430357['meshFilter']['sharedMesh']['bounds']['getExtent']()['x'], 0x2 * _0x430357['meshFilter']['sharedMesh']['bounds']['getExtent']()['y'], 0x2 * _0x430357['meshFilter']['sharedMesh']['bounds']['getExtent']()['z']))['localOffse' + 't'] = new Laya['Vector3'](_0x430357['meshFilter']['sharedMesh']['bounds']['getCenter']()['x'], _0x430357['meshFilter']['sharedMesh']['bounds']['getCenter']()['y'], _0x430357['meshFilter']['sharedMesh']['bounds']['getCenter']()['z']), _0x1ba5d7['collisionG' + 'roup'] = 0x7e4);
                                else
                                    _0x430357['_destroyCo' + 'mponent'](_0x1ba5d7), ((_0x1ba5d7 = _0x430357['addCompone' + 'nt'](Laya['PhysicsCol' + 'lider']))['colliderSh' + 'ape'] = new Laya['BoxCollide' + 'rShape'](0x2 * _0x430357['meshFilter']['sharedMesh']['bounds']['getExtent']()['x'], 0x2 * _0x430357['meshFilter']['sharedMesh']['bounds']['getExtent']()['y'], 0x2 * _0x430357['meshFilter']['sharedMesh']['bounds']['getExtent']()['z']))['localOffse' + 't'] = new Laya['Vector3'](_0x430357['meshFilter']['sharedMesh']['bounds']['getCenter']()['x'], _0x430357['meshFilter']['sharedMesh']['bounds']['getCenter']()['y'], _0x430357['meshFilter']['sharedMesh']['bounds']['getCenter']()['z']), _0x1ba5d7['collisionG' + 'roup'] = 0x7e4;
                                var _0x3904f0 = new _0x300fde['SeletObjIn' + 'fo']();
                                _0x3904f0['obj'] = _0x430357, _0x3904f0['boundOfX'] = 0x2 * _0x430357['meshFilter']['sharedMesh']['bounds']['getExtent']()['x'] * _0x430357['transform']['localScale' + 'X'], _0x3904f0['objName'] = _0x430357['name'], _0x3904f0['targetLoca' + 'lPos'] = _0x48290c['transform']['localPosit' + 'ion']['clone'](), _0x3904f0['targetLoca' + 'lPos']['x'] -= this['localDisOf' + 'TwoPuzzles' + 'Node']['x'], 0x13 == _0x539004 && (_0x3904f0['targetLoca' + 'lPos']['y'] += 0.7), _0x3904f0['targetLoca' + 'lPos']['z'] -= this['localDisOf' + 'TwoPuzzles' + 'Node']['z'], _0x3904f0['targetPos'] = _0x48290c['transform']['position']['clone'](), _0x3904f0['targetMat'] = _0x430357['meshRender' + 'er']['sharedMate' + 'rial']['clone'](), _0x3904f0['targetSelf' + 'Mat'] = _0x48290c['meshRender' + 'er']['sharedMate' + 'rial']['clone'](), _0x3904f0['selfLoc_ti' + 'antianping' + 'u_alPos'] = _0x430357['transform']['localPosit' + 'ion']['clone'](), _0x3904f0['selfPos'] = _0x430357['transform']['position']['clone'](), _0x3904f0['sortSelfPo' + 's'] = _0x430357['transform']['localPosit' + 'ion']['clone'](), _0x3904f0['selfMat'] = this['initMat'], _0x3904f0['isHoming'] = !0x1, _0x3904f0['targetObj'] = _0x48290c, this['allSelectO' + 'bjInfoArra' + 'y'][_0x539004][_0x3904f0['objName']] = _0x3904f0, _0x430357['meshRender' + 'er']['sharedMate' + 'rial'] = this['initMat'];
                            }
                            _0x539004 == this['curLevel'] ? (_0x511cb1['active'] = !0x0, this['puzzleNode'] = _0x2e0d56, this['puzzleNode' + 'LocalPos'] = this['puzzleNode']['transform']['localPosit' + 'ion']['clone'](), this['curPuzzleP' + 'lane'] = this['puzzleNode']['parent']['getChildAt'](0x1)['getChildAt'](0x0)) : _0x511cb1['active'] = !0x1;
                        }
                        for (var _0x2c10fb in this['allSelectO' + 'bjInfoArra' + 'y'][this['curLevel']])
                            this['puzzleNumC' + 'anMove']++;
                    }, _0x27126c['isPlaySucc' + 'essedLevel'] = !0x1, _0x27126c['_instance'] = null, _0x27126c;
                }(Laya['Script3D']);
            _0x335fbb['default'] = _0x5d5443;
        },
        {
            '../../Mgr/GameMgr': 0x6,
            '../../Mgr/SoundMgr': 0x7,
            '../../Mgr/VibrateMgr': 0x8,
            '../../User/User': 0xa,
            '../data/gameData': 0x11,
            './scene3dSocket': 0x14
        }
    ],
    0x14: [
        function (_0x4b992c, _0x557bf8, _0x1700f4) {
            'use strict';
            Object['defineProp' + 'erty'](_0x1700f4, '__esModule', { 'value': !0x0 });
            var _0x5e82b8 = _0x4b992c('./gameCtrl'), _0x134ce0 = _0x4b992c('../data/ga' + 'meData'), _0x28a3c4 = function (_0xd29622) {
                    function _0x464670() {
                        return _0xd29622['call'](this) || this;
                    }
                    return __extends(_0x464670, _0xd29622), Object['defineProp' + 'erty'](_0x464670['prototype'], 'getFX2', {
                        'get': function () {
                            return this['fx2'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670['prototype'], 'Plane2', {
                        'get': function () {
                            return this['plane2'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670['prototype'], 'LevelNode', {
                        'get': function () {
                            return this['levelNode'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670['prototype'], 'Scene', {
                        'get': function () {
                            return this['scene'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670['prototype'], 'getFX1L', {
                        'get': function () {
                            return this['fx1L'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670['prototype'], 'getFX1R', {
                        'get': function () {
                            return this['fx1R'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670['prototype'], 'Camera', {
                        'get': function () {
                            return this['camera'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670['prototype'], 'Plane', {
                        'get': function () {
                            return this['plane'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), Object['defineProp' + 'erty'](_0x464670, 'Instance', {
                        'get': function () {
                            return _0x464670['_instance'];
                        },
                        'enumerable': !0x0,
                        'configurable': !0x0
                    }), _0x464670['prototype']['onAwake'] = function () {
                        _0x464670['_instance'] = this, this['scene'] = this['owner'], this['camera'] = this['owner']['getChildBy' + 'Name']('Main\x20Camer' + 'a'), this['camera']['fieldOfVie' + 'w'] *= _0x134ce0['default']['aspectRati' + 'o1'] - _0x134ce0['default']['aspectRati' + 'o2'] + 0x1, this['camera']['fieldOfVie' + 'w'] < 0x3c && (this['camera']['fieldOfVie' + 'w'] = 66.4), this['levelNode'] = this['owner']['getChildBy' + 'Name']('Levels'), this['plane'] = this['owner']['getChildBy' + 'Name']('Plane'), this['plane2'] = this['owner']['getChildBy' + 'Name']('Plane2'), this['fx1L'] = this['owner']['getChildBy' + 'Name']('FX')['getChildBy' + 'Name']('FX_Caidai_' + 'A_L'), this['fx1R'] = this['owner']['getChildBy' + 'Name']('FX')['getChildBy' + 'Name']('FX_Caidai_' + 'A_R'), this['fx2'] = this['owner']['getChildBy' + 'Name']('FX')['getChildBy' + 'Name']('FX_Caidai_' + 'B'), this['fx1L']['active'] = !0x1, this['fx1R']['active'] = !0x1, this['fx2']['active'] = !0x1, _0x5e82b8['default']['Instance']['initLevel']();
                    }, _0x464670['_instance'] = null, _0x464670;
                }(Laya['Script3D']);
            _0x1700f4['default'] = _0x28a3c4;
        },
        {
            '../data/gameData': 0x11,
            './gameCtrl': 0x13
        }
    ],
    0x15: [
        function (_0x2aec3d, _0x5e0f7f, _0x214c8b) {
            'use strict';
            Object['defineProp' + 'erty'](_0x214c8b, '__esModule', { 'value': !0x0 });
            var _0x3b89cc = _0x2aec3d('../data/ga' + 'meData'), _0x1b4f66 = _0x2aec3d('../hub/gam' + 'eCtrl'), _0x2fdc2b = _0x2aec3d('../../User' + '/User'), _0x6a9112 = _0x2aec3d('../hub/sce' + 'ne3dSocket'), _0x19e103 = _0x2aec3d('../../Mgr/' + 'GameMgr'), _0x42c9b1 = function (_0x598536) {
                    function _0x310ff1() {
                        var _0x515e07 = _0x598536['call'](this) || this;
                        return _0x515e07['mounseMove' + 'Change'] = new Laya['Vector2'](0x0, 0x0), _0x515e07['mouseClick' + 'SpaceTime'] = 0x12c, _0x515e07['passTime'] = 0x0, _0x515e07['changeMatS' + 'witch'] = !0x1, _0x515e07['mounseMove' + 'Start'] = new Laya['Vector2'](0x0, 0x0), _0x515e07;
                    }
                    return __extends(_0x310ff1, _0x598536), _0x310ff1['prototype']['onMounseMo' + 'veEvent'] = function (_0x37e363) {
                        var _0x5645ca = new Laya['Vector2'](0x0, 0x0);
                        _0x5645ca['x'] = _0x37e363['stageX'], _0x5645ca['y'] = _0x37e363['stageY'], this['mounseMove' + 'Change']['x'] = _0x5645ca['x'] - this['mounseMove' + 'Start']['x'], this['mounseMove' + 'Change']['y'] = _0x5645ca['y'] - this['mounseMove' + 'Start']['y'], this['mounseMove' + 'Start']['x'] = _0x5645ca['x'], this['mounseMove' + 'Start']['y'] = _0x5645ca['y'];
                        var _0x1b1f85 = Laya['timer']['delta'] / 0x3e8, _0x39cd48 = -this['mounseMove' + 'Change']['x'] * _0x1b1f85 * _0x3b89cc['default']['puzzleDrag' + 'ingSpeed'], _0x32a394 = -this['mounseMove' + 'Change']['y'] * _0x1b1f85 * _0x3b89cc['default']['puzzleDrag' + 'ingSpeed'], _0x4e25de = new Laya['Vector3'](_0x39cd48, 0x0, _0x32a394);
                        _0x1b4f66['default']['Instance']['moveHitRes' + 'ultObj'](_0x4e25de);
                    }, _0x310ff1['prototype']['removeEven' + 't'] = function () {
                        _0x598536['prototype']['removeEven' + 't']['call'](this), this['imgBg']['offAll'](), this['spVideoBtn']['off'](Laya['Event']['CLICK'], this, this['showTip']), Laya['timer']['clear'](this, this['changeTarg' + 'etMatColor']), Laya['Browser']['onMiniGame'] && webuzzSDK['hideGame']();
                    }, _0x310ff1['prototype']['addEvent'] = function () {
                        _0x598536['prototype']['addEvent']['call'](this), this['imgBg']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMounseEv' + 'ent']), this['imgBg']['on'](Laya['Event']['MOUSE_UP'], this, this['onMounseEv' + 'ent']), this['imgBg']['on'](Laya['Event']['MOUSE_OUT'], this, this['onMounseEv' + 'ent']), this['spVideoBtn']['on'](Laya['Event']['CLICK'], this, this['showTip']), Laya['timer']['loop'](0x190, this, this['changeTarg' + 'etMatColor']);
                    }, _0x310ff1['prototype']['showGuide'] = function () {
                        var _0xd4c365 = this;
                        this['imgGuide']['visible'] = !0x0, this['imgGuide']['bottom'] = 0xaa, this['imgGuide']['left'] = -0x28, Laya['Tween']['to'](this['imgGuide'], {
                            'bottom': 0x237,
                            'left': 0xb5
                        }, 0x3e8, Laya['Ease']['linearIn'], Laya['Handler']['create'](this, function () {
                            _0x3b89cc['default']['isClickFir' + 'stPuzzle'] && _0x3b89cc['default']['isClickVid' + 'eoBtn'] ? _0xd4c365['imgGuide']['visible'] = !0x1 : _0xd4c365['showGuide']();
                        }));
                    }, _0x310ff1['prototype']['videoBtnCl' + 'ick'] = function () {
                        _0x2fdc2b['default']['getLeveNum']();
                        if (_0x3b89cc['default']['freeTipNum'] > 0x0)
                            return _0x3b89cc['default']['freeTipNum']--, void this['showTip']();
                        var _0x24b540 = this;
                    }, _0x310ff1['prototype']['setVideoBt' + 'nInfo'] = function () {
                    }, _0x310ff1['prototype']['showTip'] = function () {
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            console['log']('ddddd'), _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']() && _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']()['targetObj'] && (_0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']()['targetObj'] && (_0x3b89cc['default']['isClickVid' + 'eoBtn'] = !0x1));
                        });
                    }, _0x310ff1['prototype']['changeTarg' + 'etMatColor'] = function () {
                        0x0 == _0x3b89cc['default']['isClickVid' + 'eoBtn'] && _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']() && _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']()['targetObj'] && (0x0 == this['changeMatS' + 'witch'] ? (this['changeMatS' + 'witch'] = !0x0, _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']()['targetObj']['meshRender' + 'er']['sharedMate' + 'rial'] = _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']()['targetMat']) : (this['changeMatS' + 'witch'] = !0x1, _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']()['targetObj']['meshRender' + 'er']['sharedMate' + 'rial'] = _0x1b4f66['default']['Instance']['getCurLeft' + 'TargetPuzz' + 'leInfo']()['targetSelf' + 'Mat']));
                    }, _0x310ff1['prototype']['setVideoBt' + 'nPos'] = function () {
                        var _0x5ea6ed = new Laya['Vector3']();
                        _0x6a9112['default']['Instance']['Camera']['viewport']['project'](_0x6a9112['default']['Instance']['Plane2']['transform']['position'], _0x6a9112['default']['Instance']['Camera']['projection' + 'ViewMatrix'], _0x5ea6ed);
                    }, _0x310ff1['prototype']['onMounseEv' + 'ent'] = function (_0x2a643e) {
                        _0x2a643e['type'] == Laya['Event']['MOUSE_DOWN'] ? (this['mounseMove' + 'Start']['x'] = _0x2a643e['stageX'], this['mounseMove' + 'Start']['y'] = _0x2a643e['stageY'], _0x1b4f66['default']['Instance']['rayTest'](), this['imgBg']['on'](Laya['Event']['MOUSE_MOVE'], this, this['onMounseMo' + 'veEvent'])) : _0x2a643e['type'] != Laya['Event']['MOUSE_UP'] && _0x2a643e['type'] != Laya['Event']['MOUSE_OUT'] || (_0x1b4f66['default']['Instance']['tweenToSor' + 'tSelfPos'](), _0x1b4f66['default']['Instance']['tweenToTar' + 'get'](), this['imgBg']['off'](Laya['Event']['MOUSE_MOVE'], this, this['onMounseMo' + 'veEvent']));
                    }, _0x310ff1['prototype']['onDestroy'] = function () {
                        _0x598536['prototype']['onDestroy']['call'](this);
                    }, _0x310ff1['prototype']['onAwake'] = function () {
                        var _0xed9633 = this;
                        _0x2fdc2b['default']['getLeveNum']()['toString'](), (_0x598536['prototype']['onAwake']['call'](this), this['fcLevelNum'] = this['owner']['getChildBy' + 'Name']('TopZone')['getChildBy' + 'Name']('LevelInfo')['getChildBy' + 'Name']('levelBg')['getChildBy' + 'Name']('LevelNum')), window['yad']['skin'] = 'yad.png', window['yad']['scaleX'] = 0.7, window['yad']['scaleY'] = 0.7, window['yad']['centerX'] = 0x12c, console['log']('sdfsdfsfsd' + 'fsfd');
                        Laya['LocalStora' + 'ge']['getItem']('ptxns') ? this['fcLevelNum']['text'] = 'Level\x20' + String(JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum']) : this['fcLevelNum']['text'] = 'Level\x201';
                        this['btn_back'] = new Laya['Button'](), this['btn_back']['skin'] = 'back.png', this['btn_back']['anchorX'] = this['btn_back']['anchorY'] = 0.5, window['btn_back'] = this['btn_back'], this['btn_back']['x'] = 0x3c, this['btn_back']['y'] = 0x64, this['btn_back']['name'] = 'btn_back', this['btn_back']['stateNum'] = 0x1, this['btn_back']['width'] = this['btn_back']['height'] = 0x64, Laya['stage']['addChild'](this['btn_back']), this['btn_back']['on'](Laya['Event']['CLICK'], this, () => {
                            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                Laya['stage']['getChildAt'](0x0)['destroy'](), _0x19e103['default']['getInstanc' + 'e']()['endGame1'](), _0x3b89cc['default']['isClickVid' + 'eoBtn'] = !0x0, Laya['Scene']['open']('MenuScene.' + 'scene'), this['btn_back']['removeSelf']();
                            });
                        }), (this['imgBg'] = this['owner']['getChildBy' + 'Name']('imgBg'), this['imgGuide'] = this['imgBg']['getChildBy' + 'Name']('imgGuide'), this['imgGuide']['visible'] = !0x1, this['spVideoBtn'] = this['imgBg']['getChildBy' + 'Name']('spVideoBtn'), window['spVideoBtn'] = this['spVideoBtn']), (this['imgVideoBt' + 'n'] = this['spVideoBtn']['getChildBy' + 'Name']('imgVideoBt' + 'n'), window['imgVideoBt' + 'n'] = this['imgVideoBt' + 'n']), (this['spTip'] = this['spVideoBtn']['getChildBy' + 'Name']('spTip'), this['spTip']['visible'] = !0x1, Laya['timer']['once'](0x2710, this, function () {
                            _0xed9633['spTip'] && (_0xed9633['spTip']['visible'] = !0x0);
                        }));
                        var _0x587b00 = _0x2fdc2b['default']['getIsGuide' + 'd'](), _0x3a2388 = _0x1b4f66['default']['Instance']['CurLevelVa' + 'lue'] + 0x1;
                        (0x0 != _0x587b00 || 0x1 != _0x3a2388 || _0x3b89cc['default']['isClickFir' + 'stPuzzle'] || this['showGuide'](), this['setVideoBt' + 'nPos'](), 0x0 == _0x1b4f66['default']['Instance']['CurLevelVa' + 'lue'], Laya['Browser']['onMiniGame']) && (Laya['stage']['width'] / Laya['stage']['height'] < 0.5 ? webuzzSDK['showGame']({
                            'naviY': Laya['stage']['height'] - 0.25 * Laya['stage']['width'],
                            'bannerY': -0x1,
                            'gridY': 0x258,
                            'drawerY': 0x1f4,
                            'level': _0x2fdc2b['default']['getLeveNum']()
                        }) : webuzzSDK['showGame']({
                            'naviY': 0x14,
                            'bannerY': -0x1,
                            'gridY': 0x258,
                            'drawerY': 0x1f4,
                            'level': _0x2fdc2b['default']['getLeveNum']()
                        })), this['owner']['getChildBy' + 'Name']('TopZone')['getChildBy' + 'Name']('LevelInfo')['getChildBy' + 'Name']('chongzhi')['on'](Laya['Event']['CLICK'], this, this['onChongzhi']), window['chongzhi'] = this['owner']['getChildBy' + 'Name']('TopZone')['getChildBy' + 'Name']('LevelInfo')['getChildBy' + 'Name']('chongzhi');
                    }, _0x310ff1['prototype']['onChongzhi'] = function () {
                        platform['getInstanc' + 'e']()['showReward'](() => {
                            var _0x4ce688 = this;
                            Laya['Browser']['onMiniGame'] ? webuzzSDK['pay'](function (_0x1ffd46) {
                                0x0 == _0x1ffd46 ? Laya['Browser']['window']['wx']['showToast']({
                                    'title': '暂时没有视频可观看，' + '请稍后再试',
                                    'icon': 'none',
                                    'duration': 0x7d0,
                                    'mask': !0x1
                                }) : 0x1 == _0x1ffd46 ? (_0x1b4f66['default']['Instance']['toNextLeve' + 'l'](), _0x4ce688['fcLevelNum']['text'] = 'Level\x20' + String(JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum'])) : 0x2 == _0x1ffd46 && Laya['Browser']['window']['wx']['showToast']({
                                    'title': '视频没有看完，无法跳' + '过关卡',
                                    'icon': 'none',
                                    'duration': 0x7d0,
                                    'mask': !0x1
                                });
                            }) : (_0x1b4f66['default']['Instance']['toNextLeve' + 'l'](), Laya['LocalStora' + 'ge']['getItem']('ptxns') ? _0x4ce688['fcLevelNum']['text'] = 'Level\x20' + String(JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum']) : _0x4ce688['fcLevelNum']['text'] = 'Level\x202');
                        });
                    }, _0x310ff1;
                }(_0x2aec3d('../../View' + '/ViewBase')['default']);
            _0x214c8b['default'] = _0x42c9b1;
        },
        {
            '../../User/User': 0xa,
            '../../View/ViewBase': 0xf,
            '../data/gameData': 0x11,
            '../hub/gameCtrl': 0x13,
            '../hub/scene3dSocket': 0x14,
            '../../Mgr/GameMgr': 0x6
        }
    ],
    0x16: [
        function (_0x3f6f96, _0x4a5044, _0x40f77c) {
            'use strict';
            Object['defineProp' + 'erty'](_0x40f77c, '__esModule', { 'value': !0x0 });
            var _0x284f6a = _0x3f6f96('../data/ga' + 'meData'), _0x22ceeb = function (_0x37e1fe) {
                    function _0xa736d5() {
                        return _0x37e1fe['call'](this) || this;
                    }
                    return __extends(_0xa736d5, _0x37e1fe), _0xa736d5['prototype']['onDestroy'] = function () {
                        Laya['timer']['clear'](this, this['playAni']);
                    }, _0xa736d5['prototype']['playAni'] = function () {
                        var _0x2a6d30 = this, _0x38f46e = this;
                        this['sprite']['rotation'] = 0x0, Laya['Tween']['to'](this['sprite'], { 'rotation': -0x14 }, 0x96, Laya['Ease']['linearNone'], Laya['Handler']['create'](_0x38f46e, function () {
                            Laya['Tween']['to'](_0x2a6d30['sprite'], { 'rotation': 0x0 }, 0x96, Laya['Ease']['linearNone'], Laya['Handler']['create'](_0x38f46e, function () {
                                Laya['Tween']['to'](_0x2a6d30['sprite'], { 'rotation': 0x14 }, 0x96, Laya['Ease']['linearNone'], Laya['Handler']['create'](_0x38f46e, function () {
                                    Laya['Tween']['to'](_0x2a6d30['sprite'], { 'rotation': 0x0 }, 0x96, Laya['Ease']['linearNone'], Laya['Handler']['create'](_0x38f46e, function () {
                                        _0x2a6d30['sprite']['rotation'] = 0x0;
                                    }));
                                }));
                            }));
                        }));
                    }, _0xa736d5['prototype']['onAwake'] = function () {
                        this['sprite'] = this['owner'], Laya['timer']['loop'](_0x284f6a['default']['tipEffectT' + 'ime'], this, this['playAni']);
                    }, _0xa736d5;
                }(Laya['Script']);
            _0x40f77c['default'] = _0x22ceeb;
        },
        { '../data/gameData': 0x11 }
    ],
    0x17: [
        function (_0x203002, _0x44c758, _0x508eea) {
            'use strict';
            Object['defineProp' + 'erty'](_0x508eea, '__esModule', { 'value': !0x0 });
            var _0x46016c = Laya['ClassUtils']['regClass'];
            !function (_0x3c0e2e) {
                !function (_0x2a8ccf) {
                    var _0x2d1a42 = function (_0x9ce139) {
                        function _0x1b8058() {
                            return _0x9ce139['call'](this) || this;
                        }
                        return __extends(_0x1b8058, _0x9ce139), _0x1b8058['prototype']['createChil' + 'dren'] = function () {
                            _0x9ce139['prototype']['createChil' + 'dren']['call'](this), this['createView'](_0x1b8058['uiView']);
                        }, _0x1b8058['uiView'] = {
                            'type': 'View',
                            'props': {
                                'width': 0x2ee,
                                'top': 0x0,
                                'right': 0x0,
                                'left': 0x0,
                                'height': 0x536,
                                'bottom': 0x0
                            },
                            'compId': 0x2,
                            'child': [
                                {
                                    'type': 'Box',
                                    'props': {
                                        'top': 0x0,
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x1a
                                },
                                {
                                    'type': 'Clip',
                                    'props': {
                                        'width': 0x2ee,
                                        'top': 0x0,
                                        'name': 'Bg',
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x6,
                                    'child': [
                                        {
                                            'x': 0xf,
                                            'type': 'Sprite',
                                            'searchKey': 'Sprite',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0x0,
                                                'width': 0x2ee,
                                                'texture': 'aa/bg1.png',
                                                'height': 0x536
                                            },
                                            'nodeParent': 0x2,
                                            'label': 'Sprite',
                                            'isDirectory': ![],
                                            'isAniNode': !![],
                                            'hasChild': ![],
                                            'compId': 0x4,
                                            'child': [],
                                            '$LOCKED': !![]
                                        },
                                        {
                                            'type': 'Clip',
                                            'props': {
                                                'width': 0x2ee,
                                                'name': 'BottomZone',
                                                'left': 0x0,
                                                'height': 0x23a,
                                                'bottom': 0x64
                                            },
                                            'compId': 0x17,
                                            'child': [{
                                                    'type': 'Clip',
                                                    'props': {
                                                        'y': 0x146,
                                                        'x': 0x178,
                                                        'width': 0x267,
                                                        'skin': 'Loading/lo' + 'adingxiati' + 'ao.png',
                                                        'pivotY': 0x16,
                                                        'pivotX': 0x134,
                                                        'name': 'processBar' + 'Bg',
                                                        'height': 0x2c
                                                    },
                                                    'compId': 0x8,
                                                    'child': [
                                                        {
                                                            'type': 'Clip',
                                                            'props': {
                                                                'y': 0x16,
                                                                'x': 0xa,
                                                                'width': 0x252,
                                                                'skin': 'Loading/lo' + 'adingshang' + 'tiao.png',
                                                                'sizeGrid': '9,22,7,19',
                                                                'pivotY': 0xd,
                                                                'name': 'processBar',
                                                                'left': 0xb,
                                                                'height': 0x1a,
                                                                'bottom': 0x9
                                                            },
                                                            'compId': 0x5
                                                        },
                                                        {
                                                            'type': 'Sprite',
                                                            'props': {
                                                                'y': 0x47,
                                                                'x': 0x124,
                                                                'texture': 'Loading/zi' + 'yuanjiazai' + 'zhong.png',
                                                                'pivotY': 0xc,
                                                                'pivotX': 0x48
                                                            },
                                                            'compId': 0xa
                                                        }
                                                    ]
                                                }]
                                        },
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x13b,
                                                'x': 0x19f,
                                                'width': 0x1de,
                                                'text': '',
                                                'strokeColor': '#000000',
                                                'stroke': 0x5,
                                                'pivotY': 0x32,
                                                'pivotX': 0x117,
                                                'height': 0x64,
                                                'fontSize': 0x78,
                                                'color': '#f6eeee',
                                                'bold': !0x0
                                            },
                                            'compId': 0x1b
                                        }
                                    ]
                                },
                                {
                                    'type': 'Script',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'runtime': 'View/Loadi' + 'ngView/Loa' + 'dingView.t' + 's'
                                    },
                                    'compId': 0x7
                                }
                            ],
                            'loadList': [
                                'Loading/lo' + 'adingxiati' + 'ao.png',
                                'Loading/lo' + 'adingshang' + 'tiao.png',
                                'Loading/zi' + 'yuanjiazai' + 'zhong.png'
                            ],
                            'loadList3D': []
                        }, _0x1b8058;
                    }(Laya['View']);
                    _0x2a8ccf['LoadingUI'] = _0x2d1a42, _0x46016c('ui.View.Lo' + 'adingUI', _0x2d1a42);
                }(_0x3c0e2e['View'] || (_0x3c0e2e['View'] = {}));
            }(_0x508eea['ui'] || (_0x508eea['ui'] = {}));
        },
        {}
    ],
    0x18: [
        function (_0x28dc08, _0x3a26fc, _0x14f4d6) {
            'use strict';
            Object['defineProp' + 'erty'](_0x14f4d6, '__esModule', { 'value': !0x0 });
            var _0x42dcc1 = _0x28dc08('../data/ga' + 'meData'), _0x496793 = function (_0x27c651) {
                    function _0x49294d() {
                        return _0x27c651['call'](this) || this;
                    }
                    return __extends(_0x49294d, _0x27c651), _0x49294d['prototype']['onDestroy'] = function () {
                        Laya['timer']['clear'](this, this['playAni']);
                    }, _0x49294d['prototype']['onAwake'] = function () {
                        window['scrollList']['visible'] = !![], this['btn_start'] = this['owner']['getChildBy' + 'Name']('btn_start'), this['btn_start']['on'](Laya['Event']['CLICK'], this, () => {
                            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                window['scrollList']['visible'] = ![], Laya['Scene']['open']('GameMain.s' + 'cene');
                            });
                        }), this['btn_Music'] = this['owner']['getChildBy' + 'Name']('btn_Music');
                        let _0x48449c = Laya['LocalStora' + 'ge']['getItem']('Animal_Sha' + 'p_Puzzle_i' + 'sMusic');
                        if (!_0x48449c)
                            _0x48449c = 'true', this['btn_Music']['skin'] = 'sy.png', Laya['SoundManag' + 'er']['playMusic']('Bg.mp3'), Laya['LocalStora' + 'ge']['setItem']('Animal_Sha' + 'p_Puzzle_i' + 'sMusic', _0x48449c);
                        else {
                            if (_0x48449c == 'true')
                                this['btn_Music']['skin'] = 'sy.png', Laya['SoundManag' + 'er']['playMusic']('Bg.mp3');
                            else
                                _0x48449c == 'false' && (this['btn_Music']['skin'] = 'syg.png');
                        }
                        this['btn_Music']['on'](Laya['Event']['CLICK'], this, () => {
                            if (_0x48449c == 'true')
                                Laya['SoundManag' + 'er']['stopMusic'](), this['btn_Music']['skin'] = 'syg.png', _0x48449c = 'false', Laya['LocalStora' + 'ge']['setItem']('Animal_Sha' + 'p_Puzzle_i' + 'sMusic', _0x48449c);
                            else
                                _0x48449c == 'false' && (Laya['SoundManag' + 'er']['playMusic']('Bg.mp3'), this['btn_Music']['skin'] = 'sy.png', _0x48449c = 'true', Laya['LocalStora' + 'ge']['setItem']('Animal_Sha' + 'p_Puzzle_i' + 'sMusic', _0x48449c));
                        });
                    }, _0x49294d;
                }(Laya['Script']);
            _0x14f4d6['default'] = _0x496793;
        },
        { '../data/gameData': 0x11 }
    ],
    0x19: [
        function (_0x1b6634, _0x337c45, _0x4ca599) {
            'use strict';
            Object['defineProp' + 'erty'](_0x4ca599, '__esModule', { 'value': !0x0 });
            var _0x1b9440 = _0x1b6634('../data/ga' + 'meData'), _0x44b031 = _0x1b6634('./GameConf' + 'ig'), _0x54f56b = _0x1b6634('./myGameSc' + 'ript/view/' + 'gameView'), _0x2607cd = _0x1b6634('../../User' + '/User'), _0x248916 = function (_0x2288bd) {
                    function _0xe789a5() {
                        return _0x2288bd['call'](this) || this;
                    }
                    return __extends(_0xe789a5, _0x2288bd), _0xe789a5['prototype']['onDestroy'] = function () {
                        Laya['timer']['clear'](this, this['playAni']);
                    }, _0xe789a5['prototype']['onSelect'] = function (_0x415bcb) {
                        console['log']('index', _0x415bcb);
                        var _0x83f18d = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum'];
                        _0x415bcb + 0x1 <= _0x83f18d && (this['owner']['close'](), Laya['LocalStora' + 'ge']['setItem']('Select_Lev' + 'el', _0x415bcb + 0x1), console['log']('_.default.' + 'startScene', _0x44b031['default']['startScene']), Laya['Scene']['open']('GameMain.s' + 'cene'));
                    }, _0xe789a5['prototype']['updateItem'] = function (_0x5635be, _0x11e6f8) {
                        var _0x2f9d1d = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'));
                        if (!_0x2f9d1d) {
                            var _0x416f7e = 0x1;
                            _0x11e6f8 + 0x1 > _0x416f7e && (_0x5635be['getChildBy' + 'Name']('LevelLock')['visible'] = !![], _0x5635be['getChildBy' + 'Name']('LevelTxt')['text'] = ''), _0x2607cd['default']['setLeveNum'](_0x416f7e);
                        } else {
                            var _0x416f7e = _0x2f9d1d['levelNum'];
                            _0x11e6f8 + 0x1 > _0x416f7e && (_0x5635be['getChildBy' + 'Name']('LevelLock')['visible'] = !![], _0x5635be['getChildBy' + 'Name']('LevelTxt')['text'] = '');
                        }
                    }, _0xe789a5['prototype']['onAwake'] = function () {
                        console['log']('aaaaa'), this['LevelList'] = this['owner']['getChildBy' + 'Name']('LevelList'), this['btn_Back'] = this['owner']['getChildBy' + 'Name']('btn_Back'), this['btn_Back']['on'](Laya['Event']['CLICK'], this, () => {
                            Laya['Scene']['open']('MenuScene.' + 'scene');
                        }), this['LevelList']['vScrollBar' + 'Skin'] = '';
                        var _0x1610d0 = [];
                        this['LevelList']['dataSource'] = [];
                        for (let _0x308ce6 = 0x1; _0x308ce6 < 0x1f; _0x308ce6++) {
                            let _0x4e78c4 = null;
                            _0x4e78c4 = {
                                'LevelTxt': {
                                    'text': _0x308ce6,
                                    'fontSize': 0x28
                                },
                                'LevelLock': { 'visible': ![] }
                            }, _0x1610d0['push'](_0x4e78c4);
                        }
                        this['LevelList']['dataSource'] = _0x1610d0, this['LevelList']['selectEnab' + 'le'] = !![], this['LevelList']['selectHand' + 'ler'] = new Laya['Handler'](this, this['onSelect']), this['LevelList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['updateItem']);
                    }, _0xe789a5;
                }(Laya['Script']);
            _0x4ca599['default'] = _0x248916;
        },
        {
            '../data/gameData': 0x11,
            './GameConfig': 0x3,
            './myGameScript/view/gameView': 0x15,
            '../../User/User': 0xa
        }
    ],
    0x1a: [
        function (_0x475c22, _0x8da6f0, _0x2125c5) {
            'use strict';
            Object['defineProp' + 'erty'](_0x2125c5, '__esModule', { 'value': !0x0 });
            var _0x49d243 = _0x475c22('../hub/gam' + 'eCtrl'), _0x1e9bf1 = _0x475c22('../../User' + '/User'), _0x26a7de = _0x475c22('../../Mgr/' + 'GameMgr'), _0x2ef66d = function (_0x44b36f) {
                    function _0x41d730() {
                        return _0x44b36f['call'](this) || this;
                    }
                    return __extends(_0x41d730, _0x44b36f), _0x41d730['prototype']['onDestroy'] = function () {
                        Laya['timer']['clear'](this, this['playAni']);
                    }, _0x41d730['prototype']['playAni'] = function () {
                    }, _0x41d730['prototype']['onAwake'] = function () {
                        this['zOrder'] = 0x3e8, window['yad']['scaleX'] = window['yad']['scaleY'] = 0x1, window['yad']['centerX'] = 0x0, window['yad'] && (window['yad']['skin'] = '512-1.png'), this['btn_Next'] = this['owner']['getChildBy' + 'Name']('btn_Next'), this['btn_Home'] = this['owner']['getChildBy' + 'Name']('btn_Home'), this['btn_Home']['on'](Laya['Event']['CLICK'], this, () => {
                            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                window['scrollList']['visible'] = ![];
                                var _0x186234 = Number(Laya['LocalStora' + 'ge']['getItem']('Select_Lev' + 'el'));
                                Laya['LocalStora' + 'ge']['setItem']('Select_Lev' + 'el', _0x186234 + 0x1);
                                if (Laya['LocalStora' + 'ge']['getItem']('ptxns'))
                                    var _0x5d321d = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum'];
                                else
                                    var _0x5d321d = 0x1;
                                _0x186234 + 0x1 > _0x5d321d && (_0x1e9bf1['default']['setLeveNum'](_0x5d321d + 0x1), Laya['LocalStora' + 'ge']['setItem']('Select_Lev' + 'el', _0x186234 + 0x1)), Laya['stage']['getChildAt'](0x0)['destroy'](), Laya['Scene']['open']('MenuScene.' + 'scene');
                            });
                        }), this['btn_Next']['on'](Laya['Event']['CLICK'], this, () => {
                            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                                window['scrollList']['visible'] = ![];
                                if (Laya['LocalStora' + 'ge']['getItem']('Select_Lev' + 'el'))
                                    var _0x175c8f = Number(Laya['LocalStora' + 'ge']['getItem']('Select_Lev' + 'el'));
                                else
                                    var _0x175c8f = 0x1;
                                Laya['LocalStora' + 'ge']['setItem']('Select_Lev' + 'el', _0x175c8f + 0x1);
                                if (Laya['LocalStora' + 'ge']['getItem']('ptxns'))
                                    var _0x3c202c = JSON['parse'](Laya['LocalStora' + 'ge']['getItem']('ptxns'))['levelNum'];
                                else
                                    var _0x3c202c = 0x1;
                                _0x175c8f + 0x1 > _0x3c202c && (_0x1e9bf1['default']['setLeveNum'](_0x3c202c + 0x1), Laya['LocalStora' + 'ge']['setItem']('Select_Lev' + 'el', _0x175c8f + 0x1)), Laya['stage']['getChildAt'](0x0)['destroy'](), Laya['Scene']['open']('GameMain.s' + 'cene');
                            });
                        });
                    }, _0x41d730;
                }(Laya['Script']);
            _0x2125c5['default'] = _0x2ef66d;
        },
        {
            '../hub/gameCtrl': 0x13,
            '../../Mgr/GameMgr': 0x6,
            '../../User/User': 0xa
        }
    ]
}, {}, [0x4]);