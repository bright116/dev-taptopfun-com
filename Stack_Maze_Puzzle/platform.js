!function () {
    class _0x69c5c5 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x1c7848, _0xbe3538) => {
                try {
                    this['musicAudio'] = new _0x17ae4a(), this['soundAudio'] = new _0x17ae4a(), window['document']['addEventLi' + 'stener']('mousedown', () => {
                        setTimeout(() => {
                            if (this['adShowing']) {
                            } else
                                this['tryToResum' + 'eAudioCont' + 'ext']();
                        }, 0x64);
                    }, !![]), window['document']['addEventLi' + 'stener']('touchstart', () => {
                        setTimeout(() => {
                            if (this['adShowing']) {
                            } else
                                this['tryToResum' + 'eAudioCont' + 'ext']();
                        }, 0x64);
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x1c7848(!![]);
                } catch (_0x2b8ecc) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x2b8ecc), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x1c7848(![]);
                }
            });
        }
        ['onVisibili' + 'tychange']() {
            if (this['adShowing'])
                return;
            if (document['visibility' + 'State'] == 'hidden')
                !this['isMuted'] && (this['isVisibili' + 'tyMuted'] = this['muted'] = !![]), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
            else
                document['visibility' + 'State'] == 'visible' && (this['isVisibili' + 'tyMuted'] && (this['isVisibili' + 'tyMuted'] = this['muted'] = ![]), Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']());
        }
        ['onDBInstan' + 'ceMuted']() {
        }
        ['tryToResum' + 'eAudioCont' + 'ext']() {
            if (this['adShowing'])
                return;
            if (this['isMuted'])
                return;
            this['musicAudio']['isSuspend']() && !this['bePauseMus' + 'ic'] && !this['isMuted'] && this['musicAudio']['resume'](), this['soundAudio']['isSuspend']() && !this['bePauseSou' + 'nd'] && !this['isMuted'] && this['soundAudio']['resume'](), (!this['musicAudio']['isSuspend']() || !this['soundAudio']['isSuspend']()) && (window['document']['removeEven' + 'tListener']('mousedown', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), window['document']['removeEven' + 'tListener']('touchstart', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), clearInterval(this['tryToResum' + 'eIntervalI' + 'd']), this['tryToResum' + 'eIntervalI' + 'd'] = -0x1);
        }
        ['onMusicSta' + 'techange']() {
            this['musicAudio']['isSuspend']() && !this['isMuted'] && !this['bePauseMus' + 'ic'] && this['tryToResum' + 'eIntervalI' + 'd'] === -0x1 && (window['document']['addEventLi' + 'stener']('mousedown', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), window['document']['addEventLi' + 'stener']('touchstart', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        ['onSoundSta' + 'techange']() {
            this['soundAudio']['isSuspend']() && !this['isMuted'] && !this['bePauseSou' + 'nd'] && this['tryToResum' + 'eIntervalI' + 'd'] === -0x1 && (window['document']['addEventLi' + 'stener']('mousedown', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), window['document']['addEventLi' + 'stener']('touchstart', this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), !![]), this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        set ['muted'](_0x104417) {
            this['isMuted'] = _0x104417, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x107b21) {
            this['pauseSound'] = _0x107b21, this['pauseMusic'] = _0x107b21, !_0x107b21 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x112521) {
            this['bePauseSou' + 'nd'] = _0x112521;
            if (this['bePauseSou' + 'nd'])
                this['soundAudio']['suspend']();
            else {
                if (this['isMuted'])
                    return;
                this['soundAudio']['resume']();
            }
        }
        get ['pauseSound']() {
            return this['bePauseSou' + 'nd'];
        }
        get ['pauseMusic']() {
            return this['bePauseMus' + 'ic'];
        }
        set ['pauseMusic'](_0x26f049) {
            this['bePauseMus' + 'ic'] = _0x26f049;
            if (this['bePauseMus' + 'ic'])
                this['musicAudio']['suspend']();
            else {
                if (this['isMuted'])
                    return;
                this['musicAudio']['resume']();
            }
        }
        ['stopAll']() {
            this['musicAudio']['stopAll'](), this['soundAudio']['stopAll']();
        }
        ['parse'](_0xaaffc8, _0x55e085, _0x455d33) {
            this['soundAudio']['parse'](_0xaaffc8, _0x55e085);
        }
        ['playMusic'](_0x3ec772) {
            console['log']('playMusic'), this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x3ec772);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x5ab882) {
            this['soundAudio']['stop'](_0x5ab882);
        }
        set ['musicVolum' + 'e'](_0x4c487f) {
            this['musicAudio']['musicVolum' + 'e'] = _0x4c487f;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x161a77, _0x2cd2dd = ![], _0x22bb59 = ![]) {
            var _0x15b624 = Laya['LocalStora' + 'ge']['getItem']('Stack_Maze' + '_Puzzle_is' + 'Music');
            if (!_0x15b624)
                _0x15b624 = 0x1, Laya['LocalStora' + 'ge']['setItem']('Stack_Maze' + '_Puzzle_is' + 'Music', _0x15b624);
            else {
                if (_0x15b624 == 0x0) {
                } else {
                    if (_0x15b624 == 0x1) {
                        if (!this['beEnabled'])
                            return;
                        this['soundAudio']['play'](_0x161a77, _0x2cd2dd, _0x22bb59);
                    }
                }
            }
        }
    }
    class _0x1d154f {
    }
    class _0x17ae4a {
        constructor() {
            this['volume'] = 0x64, this['_audioInst' + 'ances'] = new Map(), this['_musicVolu' + 'me'] = 0x64, window['AudioConte' + 'xt'] = window['AudioConte' + 'xt'] || window['webkitAudi' + 'oContext'], this['context'] = new AudioContext();
        }
        ['getContext']() {
            return this['context'];
        }
        ['isSuspend']() {
            return this['context']['state'] === 'suspended';
        }
        ['suspend']() {
            return this['context']['suspend']();
        }
        ['resume']() {
            return this['context']['resume']();
        }
        ['stopAllNoL' + 'oop']() {
            const _0x233b6b = this['_audioInst' + 'ances']['values']();
            for (const _0x56ac22 of _0x233b6b) {
                const _0x5bdaa3 = _0x56ac22['instance'];
                if (_0x5bdaa3['source']['buffer'] && !_0x5bdaa3['source']['loop']) {
                    try {
                        _0x5bdaa3['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x17b178) {
                        _0x5bdaa3['source']['disconnect']();
                    }
                    _0x5bdaa3['source']['onended'] = function () {
                    }, _0x5bdaa3['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x4cad6c = this['_audioInst' + 'ances']['values']();
            for (const _0x14b452 of _0x4cad6c) {
                const _0x1fefc7 = _0x14b452['instance'];
                if (_0x1fefc7['source']['buffer']) {
                    try {
                        _0x1fefc7['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x30c477) {
                        _0x1fefc7['source']['disconnect']();
                    }
                    _0x1fefc7['source']['onended'] = function () {
                    }, _0x1fefc7['setup']();
                }
            }
        }
        ['stop'](_0x49acb0) {
            if (this['_audioInst' + 'ances']['has'](_0x49acb0)) {
                const _0x1986c3 = this['_audioInst' + 'ances']['get'](_0x49acb0);
                this['_stopSound'](_0x1986c3);
            }
        }
        ['_stopSound'](_0x22f53e) {
            const _0x1ebb31 = _0x22f53e['instance'];
            if (_0x1ebb31['source']['buffer']) {
                try {
                    _0x1ebb31['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x3c0454) {
                    _0x1ebb31['source']['disconnect']();
                }
                _0x1ebb31['source']['onended'] = function () {
                }, _0x1ebb31['setup']();
            }
        }
        ['playMusic'](_0x5644a8) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x5644a8) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x5644a8), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x5644a8, !![])) : this['downloadAr' + 'rayBuffer'](_0x5644a8, () => {
                this['playMusic'](_0x5644a8);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x1be022) {
            this['_musicVolu' + 'me'] = _0x1be022, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0x31f52a, _0xc22e8d = ![], _0xf2ec1b = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0x31f52a)) {
                const _0xa82e08 = this['_audioInst' + 'ances']['get'](_0x31f52a), _0x11956b = _0xa82e08['instance'];
                if (_0xf2ec1b && !_0x11956b['ended'])
                    return;
                this['stop'](_0x31f52a);
                if (_0xa82e08['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0xc22e8d)
                            return;
                        _0x11956b['playBuffer'](this['context']['currentTim' + 'e'], _0xa82e08['buffer']), _0x11956b['source']['loop'] = _0xc22e8d;
                    } catch (_0x271033) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x271033);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0x31f52a, () => {
                    this['play'](_0x31f52a, _0xc22e8d);
                });
        }
        ['load'](_0x2555c7, _0x388b8f) {
            let _0x816dc7 = _0x2555c7['length'], _0x265d92 = 0x0;
            for (let _0x41d89d = 0x0; _0x41d89d < _0x2555c7['length']; _0x41d89d++) {
                const _0x246f89 = _0x2555c7[_0x41d89d];
                this['downloadAr' + 'rayBuffer'](_0x246f89, () => {
                    _0x265d92++, _0x265d92 >= _0x816dc7 && (_0x388b8f && _0x388b8f());
                });
            }
        }
        ['setThreeD'](_0x297ebf) {
            if (this['_audioInst' + 'ances']['has'](_0x297ebf)) {
                const _0x5d4164 = this['_audioInst' + 'ances']['get'](_0x297ebf);
                _0x5d4164['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x4aee55 = this['context'];
            const _0x30277d = {
                'gain': _0x4aee55['createGain'](),
                'panner': _0x4aee55['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x513bef, _0x15e320, _0xea0093) {
                    this['source']['buffer'] = _0x15e320;
                    var _0x456d48 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x456d48['setup'](), _0x456d48['ended'] = !![];
                    }, this['source']['start'](_0x513bef, _0xea0093);
                },
                'setup': function () {
                    this['source'] = _0x4aee55['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x30277d['panner']['rolloffFac' + 'tor'] = 0x0, _0x30277d['gain']['connect'](this['context']['destinatio' + 'n']), _0x30277d['setup'](), _0x30277d;
        }
        ['parse'](_0x251180, _0x5b7764, _0x141e26) {
            const _0x46c125 = new _0x1d154f();
            _0x46c125['url'] = _0x251180, _0x46c125['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x251180, _0x46c125), this['context']['decodeAudi' + 'oData'](_0x5b7764, function (_0x2c4998) {
                _0x46c125['buffer'] = _0x2c4998, _0x141e26 && _0x141e26();
            }, function (_0x24b1da) {
                _0x46c125['error'] = !![], _0x141e26 && _0x141e26(), console['log']('Decode\x20err' + 'or.' + _0x46c125['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x1c97f0, _0x41c21b) {
            if (this['_audioInst' + 'ances']['has'](_0x1c97f0)) {
                _0x41c21b && _0x41c21b();
                return;
            }
            const _0x37eeb0 = this;
            var _0xeecbae = new XMLHttpRequest();
            _0xeecbae['open']('GET', _0x1c97f0, !![]), _0xeecbae['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0xeecbae['onload'] = function () {
                if (_0xeecbae['status'] === 0xc8 || _0xeecbae['status'] === 0x0)
                    _0x37eeb0['parse'](_0x1c97f0, _0xeecbae['response'], _0x41c21b);
                else
                    throw 'no\x20respons' + 'e';
            }, _0xeecbae['onerror'] = function () {
                _0x41c21b && _0x41c21b();
                throw 'no\x20respons' + 'e';
            }, _0xeecbae['ontimeout'] = function () {
                _0x41c21b && _0x41c21b();
            }, _0xeecbae['onabort'] = function () {
                _0x41c21b && _0x41c21b();
            }, _0xeecbae['send'](null);
        }
    }
    const _0x33e0cf = window['WebAudioEn' + 'gine'] = new _0x69c5c5();
    class _0x1d19d7 {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x1d19d7()), this['_instance'];
        }
        ['initData']() {
            let _0x136ce2 = document['getElement' + 'ById']('layaCanvas');
            _0x136ce2 && (_0x136ce2['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x136ce2['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x5afc47) {
            let _0x32069d = null;
            try {
                let _0x12d793 = Laya['LocalStora' + 'ge']['getItem'](_0x5afc47);
                _0x32069d = JSON['parse'](_0x12d793);
            } catch (_0x219db3) {
            }
            return _0x32069d;
        }
        ['setStorage' + 'Sync'](_0x5f194e, _0x4f526f) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x5f194e, JSON['stringify'](_0x4f526f));
        }
        ['navigate'](_0x1d3972, _0x441122, _0x43a71b) {
            console['log']('%c\x20-------' + '----naviga' + 'te--------' + '---\x20', 'color:red;' + 'background' + ':yellow;', this['canNavigat' + 'eActive_']), this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x1d3972, this['action_'] = _0x441122, this['to_'] = _0x43a71b, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x33e0cf['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x33e0cf['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x5757f8) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x5757f8 && _0x5757f8();
            return;
            // YYGGames['showInters' + 'titial']({
            //     'beforeShowAd': () => {
            //         window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
            //     },
            //     'afterShowAd': () => {
            //         window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x5757f8 && _0x5757f8();
            //     }
            // });
        }
        ['showReward'](_0x857476, _0x225101, _0x255c5b) {
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                    _0x857476 && _0x857476(), _0x255c5b && _0x255c5b(), _0x255c5b = null, _0x857476 = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                  _0x225101 && (_0x225101(), _0x255c5b && _0x255c5b(), _0x255c5b = null, _0x225101 = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            );
            return;
            // if (!YYGGames['canShowRew' + 'ard']()) {
            //     this['prompt']('No\x20Availab' + 'le\x20Video'), _0x255c5b && _0x255c5b();
            //     return;
            // }
            // YYGGames['showReward']({
            //     'beforeShowAd': () => {
            //         window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
            //     },
            //     'afterShowAd': () => {
            //         window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
            //     },
            //     'rewardComplete': () => {
            //         _0x857476 && _0x857476(), _0x255c5b && _0x255c5b(), _0x255c5b = null, _0x857476 = null;
            //     },
            //     'rewardDismissed': () => {
            //         _0x225101 && (_0x225101(), _0x255c5b && _0x255c5b(), _0x255c5b = null, _0x225101 = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
            //     }
            // });
        }
        ['initList'](_0x1575ea) {
        }
        ['prompt'](_0x42e2cd, _0x4ab1b1) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:2' + '5px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x2a8865 = Laya['stage']['designWidt' + 'h'], _0x37ed43 = Laya['stage']['designHeig' + 'ht'];
            var _0x1248a2 = window['innerWidth'], _0x45b4f7 = window['innerHeigh' + 't'], _0x332c59, _0x71b9fa;
            _0x1248a2 / _0x45b4f7 > _0x2a8865 / _0x37ed43 ? (_0x332c59 = _0x45b4f7, _0x71b9fa = _0x332c59 * _0x2a8865 / _0x37ed43) : (_0x71b9fa = _0x1248a2, _0x332c59 = _0x71b9fa * _0x37ed43 / _0x2a8865), this['prompt_']['style']['width'] = _0x71b9fa - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x42e2cd, _0x4ab1b1 = isNaN(_0x4ab1b1) ? 0x7d0 : _0x4ab1b1, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0xaddeda = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0xaddeda + ('s\x20ease-in,' + '\x20opacity\x20') + _0xaddeda + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x4ab1b1);
        }
        ['getForgame' + 's']() {
            return []
            // let _0x13b0a9 = YYGGames['forgames'] || [], _0x4cc46b = _0x13b0a9['slice']();
            // for (let _0x1b6a21 = 0x0, _0x44f5b9 = _0x4cc46b['length']; _0x1b6a21 < _0x44f5b9; _0x1b6a21++) {
            //     const _0x4986d5 = Math['floor'](Math['random']() * (_0x1b6a21 + 0x1)), _0x46a87a = _0x4cc46b[_0x4986d5];
            //     _0x4cc46b[_0x4986d5] = _0x4cc46b[_0x1b6a21], _0x4cc46b[_0x1b6a21] = _0x46a87a;
            // }
            // return _0x4cc46b;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x31008d = new Laya['Image']();
                _0x31008d['skin'] = 'yad.png', _0x31008d['zOrder'] = 0x30d40, window['yad'] = _0x31008d;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x2ecd82, _0x19cab3) {
            !this['needStartU' + 'p'] && (_0x19cab3 && _0x19cab3());
            if (this['initialize' + 'd_'])
                return;
            _0x1d19d7['getInstanc' + 'e']()['showSplash'](), _0x1d19d7['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x1a79da) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x1a79da);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x3e7dd6, _0x5877bd = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x3e7dd6);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x3803b3) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x3803b3);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x4c6649 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x2ecd82,
                    'config': _0x4c6649,
                    'complete': () => {
                        const _0x2c3e74 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x2c3e74) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x3ce042 => {
                                _0x3ce042['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x19cab3 && _0x19cab3();
                    }
                });
            }));
        }
        ['showBanner'](_0x52a7d7) {
            // _0x52a7d7 ? YYGGames['showBanner'](_0x52a7d7) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            // YYGGames['hideBanner']();
        }
        ['showSplash'](_0x1f63c1) {
            // _0x1f63c1 ? YYGGames['showSplash'](_0x1f63c1) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            // YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0xcb110f, _0xce7510) {
            !this['needStartU' + 'p'] && (_0xce7510 && _0xce7510());
            if (this['initialize' + 'd_'])
                return;
            _0x1d19d7['getInstanc' + 'e']()['showSplash'](), _0x1d19d7['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x1349bf) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x1349bf);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x35637c, _0x2d566b = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x35637c);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x890b39) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x890b39);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x403d42 => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0xcb110f,
                    'config': _0x403d42,
                    'complete': () => {
                        const _0x2f88a3 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x2f88a3) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x5aa042 => {
                                _0x5aa042['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0xce7510 && _0xce7510();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x5c321e, _0x5cfa2d) {
            !this['needStartU' + 'p'] && (_0x5cfa2d && _0x5cfa2d());
            if (this['initialize' + 'd_'])
                return;
            _0x1d19d7['getInstanc' + 'e']()['showSplash'](), _0x1d19d7['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x5a28cb) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x5a28cb);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x8b6f3f) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x8b6f3f);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x3320a0) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x3d913a => {
                window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                this['needStartU' + 'p'] = ![], _0x5cfa2d && _0x5cfa2d();
                // YYGGames['startup']({
                //     'channel': 0x5,
                //     'appName': _0x5c321e,
                //     'config': _0x3d913a,
                //     'complete': () => {
                //         const _0x54cdb9 = YYGGames['getAdPlatf' + 'ormType']();
                //         window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                //         switch (_0x54cdb9) {
                //         case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                //         case AdPlatformType['en_XIAOMI']:
                //             window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                //             break;
                //         default:
                //             window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x277e8e => {
                //                 _0x277e8e['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                //             });
                //             break;
                //         }
                //         this['needStartU' + 'p'] = ![], _0x5cfa2d && _0x5cfa2d();
                //     }
                // });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x3d8482 = {
                'x': 0x0,
                'type': 'Box',
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': 'Box',
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': 'Box(NoVide' + 'o)',
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': 'Sprite',
                        'searchKey': 'Sprite,spr' + '_tip,spr_t' + 'ip',
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': 'spr_tip',
                            'presetID': 0x2,
                            'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': 'spr_tip',
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': 'spr_tip',
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': 'Rect',
                                'searchKey': 'Rect',
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0x21c,
                                    'fillColor': '#000000'
                                },
                                'nodeParent': 0x4,
                                'label': 'Rect(NoVid' + 'eo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'VIDEO',
                                    'presetID': 0x4,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': '#ffffff',
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVi' + 'deo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'No\x20Video\x20A' + 'vailable',
                                    'presetID': 0x5,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': '#ffffff',
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVi' + 'deo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'Click\x20anyw' + 'here\x20to\x20cl' + 'ose',
                                    'presetID': 0x6,
                                    'preset': 'laya/pages' + '/Prefab/No' + 'Video.pref' + 'ab',
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': '#ffffff',
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVi' + 'deo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x9,
                                'child': []
                            }
                        ]
                    }],
                'animations': [{
                        'nodes': [],
                        'name': 'ani1',
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }]
            };
            class _0x168600 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x1d19d7['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x3e5c27 = new Laya['Prefab']();
            _0x3e5c27['json'] = _0x3d8482, this['noVideoPer'] = _0x3e5c27['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x168600);
        }
        ['showNoVide' + 'o']() {
            this['noVideoPer'] && Laya['stage']['addChild'](this['noVideoPer']);
        }
        ['closeNoVid' + 'eo']() {
            this['noVideoPer'] && this['noVideoPer']['removeSelf']();
        }
        ['createLoad' + 'ing']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x275eda = {
                'x': 0xf,
                'type': 'Box',
                'searchKey': 'Box,box_cl' + 'ickLayer',
                'props': {
                    'var': 'box_clickL' + 'ayer',
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': 'box_clickL' + 'ayer',
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': 'Box',
                        'searchKey': 'Box',
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': '#000000',
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': 'Box',
                        'isOpen': !![],
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x84,
                        'child': []
                    },
                    {
                        'x': 0x1e,
                        'type': 'Label',
                        'searchKey': 'Label',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': 'middle',
                            'text': 'LOADING\x5cnP' + 'LEASE\x20WAIT' + '…',
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': '#ffffff',
                            'centerY': 0x0,
                            'align': 'center'
                        },
                        'nodeParent': 0x83,
                        'label': 'Label',
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x85,
                        'child': []
                    }
                ]
            };
            class _0x21653a extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x1d19d7['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x56991f = new Laya['Prefab']();
            _0x56991f['json'] = _0x275eda, this['loadingPer'] = _0x56991f['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x21653a);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x3850ee extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x234f49 = new Laya['List']();
            return _0x234f49['size'](0x320, 0x258), _0x234f49['itemRender'] = _0x3850ee, _0x234f49;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x4cded0 = new Laya['Box']();
            //     return _0x4cded0['setSize'] = function () {
            //     }, _0x4cded0;
            // }
            if (!this['_scrollLis' + 't']) {
                let _0x1db5ed = {
                    'x': 0x0,
                    'type': 'List',
                    'selectedBox': 0x90,
                    'selecteID': 0x78,
                    'searchKey': 'List,scrol' + 'lAdList',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x370,
                        'repeatY': 0x1,
                        'presetID': 0x1,
                        'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                        'name': 'scrollAdLi' + 'st',
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': 'scrollAdLi' + 'st',
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_' + 'ListBg',
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x384,
                                'skin': '',
                                'sizeGrid': '30,\x2030,\x2030' + ',\x2030',
                                'presetID': 0x2,
                                'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                'name': 'img_ListBg',
                                'height': 0xbe,
                                'centerY': 0x0,
                                'centerX': 0x0
                            },
                            'nodeParent': 0x90,
                            'label': 'img_ListBg',
                            'isDirectory': ![],
                            'isAniNode': ![],
                            'hasChild': ![],
                            'compId': 0x78,
                            'child': []
                        },
                        {
                            'x': 0xf,
                            'type': 'Box',
                            'searchKey': 'Box',
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': 'render',
                                'presetID': 0x3,
                                'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': 'Box(scroll' + 'List)',
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': 'Image,thum' + 'b',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                        'name': 'thumb',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'nodeParent': 0x77,
                                    'label': 'thumb',
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': ![],
                                    'hasChild': !![],
                                    'compId': 0x79,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': 'Image',
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': '',
                                                'sizeGrid': '30,30,30,3' + '0',
                                                'renderType': 'mask',
                                                'presetID': 0x5,
                                                'preset': 'laya/pages' + '/prefab/sc' + 'rollList.p' + 'refab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x79,
                                            'label': 'Image(scro' + 'llList)',
                                            'isDirectory': ![],
                                            'isAniNode': ![],
                                            'hasChild': ![],
                                            'compId': 0x7a,
                                            'child': []
                                        }]
                                }]
                        }
                    ],
                    'animations': [{
                            'nodes': [],
                            'name': 'ani1',
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x390127 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['scaleNum'] = [
                            0.83,
                            0.83
                        ], this['sizeTran'] = [
                            0xc8,
                            0xc8,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        this['img_ListBg'] = this['owner']['getChildBy' + 'Name']('img_ListBg'), this['owner']['visible'] = ![], !this['owner']['renderHand' + 'ler'] && (this['owner']['renderHand' + 'ler'] = new Laya['Handler'](this, this['itemRender' + 'Fun']));
                        if (this['imgArr']['length']) {
                            let _0x34707a = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x34707a);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x430f9d = _0x1d19d7['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x430f9d['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x430f9d)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x3b2c5b, _0x240058) {
                        let _0x3e269f = _0x3b2c5b['getChildBy' + 'Name']('thumb');
                        _0x3b2c5b['offAll'](), _0x3e269f['offAll'](), _0x3b2c5b['on'](Laya['Event']['MOUSE_OVER'], _0x3b2c5b, () => {
                            _0x3b2c5b['zOrder'] = 0x64;
                        }), _0x3b2c5b['on'](Laya['Event']['MOUSE_OUT'], _0x3b2c5b, () => {
                            _0x3b2c5b['zOrder'] = _0x240058;
                        }), _0x3e269f['on'](Laya['Event']['MOUSE_OVER'], _0x3b2c5b, () => {
                            _0x3e269f['scale'](1.1, 1.1), this['endAni']();
                        }), _0x3e269f['on'](Laya['Event']['MOUSE_OUT'], _0x3b2c5b, () => {
                            _0x3e269f['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x3e269f['on'](Laya['Event']['MOUSE_DOWN'], _0x3b2c5b, _0x30f13e => {
                            _0x30f13e['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3b2c5b['dataSource']['id']);
                        });
                        let _0x4ad11c = _0x3e269f['mask'];
                        _0x3b2c5b['width'] = this['sizeTran'][0x0] + 0x14, _0x3b2c5b['height'] = this['sizeTran'][0x1] + 0x14, _0x3b2c5b['x'] = (this['sizeTran'][0x0] + 0x14) * _0x240058;
                        if (this['sizeTran'][0x2])
                            _0x4ad11c['width'] = _0x3e269f['width'] = this['sizeTran'][0x0], _0x4ad11c['height'] = _0x3e269f['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x4f3518 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x3e269f['width'] = 0xc8 / _0x4f3518, _0x3e269f['height'] = 0x96 / _0x4f3518, _0x4ad11c['width'] = this['sizeTran'][0x0], _0x4ad11c['height'] = this['sizeTran'][0x1];
                        }
                        _0x4ad11c['x'] = _0x3e269f['width'] / 0x2, _0x4ad11c['y'] = _0x3e269f['height'] / 0x2;
                    }
                    ['setSize'](_0x36600f, _0x52cbb5, _0x18f4d9 = ![]) {
                        this['sizeTran'] = [
                            _0x36600f,
                            _0x52cbb5,
                            _0x18f4d9
                        ], this['img_ListBg'] && (this['owner']['width'] = 0x500, this['owner']['height'] = _0x52cbb5 + 0x14, this['img_ListBg']['width'] = 0x500, this['img_ListBg']['height'] = _0x52cbb5 + 0x14, this['owner']['array'] = [], this['owner']['array'] = this['listArray'], this['img_ListBg']['alpha'] = 0.5);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x11c561) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x31ae84 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x31ae84);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0xc52487 = new Laya['Prefab']();
                _0xc52487['json'] = _0x1db5ed, this['_scrollLis' + 't'] = _0xc52487['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x390127), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x390127)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x390127));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x210f41 = new Laya['Box']();
            //     return _0x210f41['setSpaceX'] = _0x210f41['setSize'] = function () {
            //     }, _0x210f41;
            // }
            if (!this['_box_adTwo']) {
                let _0x373687 = {
                    'x': 0x0,
                    'type': 'Box',
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': 'Box,box_ad' + 'Two',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                        'name': 'box_adTwo',
                        'isPresetRoot': !![],
                        'height': 0x1,
                        'centerX': 0x0,
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x99,
                    'label': 'box_adTwo',
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x92,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_' + 'ad0',
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': '',
                                'sizeGrid': '30,30,30,3' + '0',
                                'presetID': 0x2,
                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                'name': 'img_ad0',
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': 'img_ad0',
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': 'Image,img_' + 'adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                        'name': 'img_adImg',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': 'img_adImg',
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x95,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': 'Image',
                                            'props': {
                                                'width': 0xc8,
                                                'skin': '',
                                                'sizeGrid': '30,30,30,3' + '0',
                                                'renderType': 'mask',
                                                'presetID': 0x4,
                                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': 'Image(box_' + 'adTwo)',
                                            'isDirectory': ![],
                                            'isAniNode': !![],
                                            'hasChild': ![],
                                            'compId': 0x97,
                                            'child': []
                                        }]
                                }]
                        },
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_' + 'ad1',
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': '',
                                'sizeGrid': '30,30,30,3' + '0',
                                'presetID': 0x5,
                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                'name': 'img_ad1',
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': 'img_ad1',
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': 'Image,img_' + 'adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                        'name': 'img_adImg',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': 'img_adImg',
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x96,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': 'Image',
                                            'props': {
                                                'width': 0xc8,
                                                'skin': '',
                                                'sizeGrid': '30,30,30,3' + '0',
                                                'renderType': 'mask',
                                                'presetID': 0x7,
                                                'preset': 'laya/pages' + '/prefab/bo' + 'x_adTwo.pr' + 'efab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': 'Image(box_' + 'adTwo)',
                                            'isDirectory': ![],
                                            'isAniNode': !![],
                                            'hasChild': ![],
                                            'compId': 0x98,
                                            'child': []
                                        }]
                                }]
                        }
                    ],
                    'animations': [{
                            'nodes': [],
                            'name': 'ani1',
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x347dca extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x214904 = _0x1d19d7['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x214904['length'])
                            return;
                        let _0x3b96cd = JSON['parse'](JSON['stringify'](_0x214904));
                        if (this['imgArr']['length']) {
                            let _0x211bac = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x211bac);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x3b96cd[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x3b96cd[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x4d1ac3 => {
                            _0x4d1ac3['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3b96cd[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x352dc2 => {
                            _0x352dc2['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3b96cd[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x24fbb4) {
                        this['spaceNum'] = _0x24fbb4, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x3e41f4 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x3e41f4);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x4a8f2c, _0x5dcbde, _0x74ac56 = ![]) {
                        this['sizeTran'] = [
                            _0x4a8f2c,
                            _0x5dcbde,
                            _0x74ac56
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x4a8f2c + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x5dcbde + 0x14, console['log']('img_ad0', this['img_ad0']), console['log']('img_ad1', this['img_ad1']);
                            if (_0x74ac56)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x4a8f2c, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x5dcbde;
                            else {
                                let _0x2cd73a = 0xc8 / _0x4a8f2c < 0x96 / _0x5dcbde ? 0xc8 / _0x4a8f2c : 0x96 / _0x5dcbde;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x2cd73a, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x2cd73a, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x4a8f2c, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x5dcbde;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x2db9fe = new Laya['Prefab']();
                _0x2db9fe['json'] = _0x373687, this['_box_adTwo'] = _0x2db9fe['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x347dca), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x347dca)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x347dca)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x347dca)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x347dca));
            }
            return this['_box_adTwo'];
        }
    }
    _0x1d19d7['_instance'] = null, window['platform'] = _0x1d19d7;
    class _0x11ca6d {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x11ca6d['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x11ca6d['_inst'] && new _0x11ca6d(), _0x11ca6d['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x41b090 = new Laya['Box']();
                return _0x41b090['setSpaceX'] = _0x41b090['setSize'] = function () {
                }, _0x41b090;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x3bbe17 = new Laya['Image']();
                _0x3bbe17['name'] = 'leftAdBg', _0x3bbe17['sizeGrid'] = '30,30,30,3' + '0', _0x3bbe17['size'](0xdc, 0xaa), _0x3bbe17['skin'] = '';
                let _0x147ce9 = new Laya['Image']();
                _0x147ce9['name'] = 'leftAdMask', _0x147ce9['size'](0xc8, 0x96), _0x147ce9['sizeGrid'] = '30,30,30,3' + '0', _0x147ce9['anchorX'] = _0x147ce9['anchorY'] = 0.5, _0x147ce9['skin'] = '';
                let _0x46f154 = new Laya['Image']();
                _0x46f154['name'] = 'leftAd', _0x46f154['size'](0xc8, 0x96), _0x46f154['anchorX'] = _0x46f154['anchorY'] = 0.5, _0x46f154['skin'] = '', _0x46f154['mask'] = _0x147ce9, _0x3bbe17['addChild'](_0x46f154), _0x3bbe17['pos'](0x0, 0x0), _0x46f154['pos'](_0x3bbe17['width'] / 0x2, _0x3bbe17['height'] / 0x2), _0x147ce9['pos'](_0x46f154['width'] / 0x2, _0x46f154['height'] / 0x2);
                let _0x177eef = new Laya['Image']();
                _0x177eef['name'] = 'rightAdBg', _0x177eef['sizeGrid'] = '30,30,30,3' + '0', _0x177eef['size'](0xdc, 0xaa), _0x177eef['skin'] = '';
                let _0x5bbecf = new Laya['Image']();
                _0x5bbecf['name'] = 'rightAdMas' + 'k', _0x5bbecf['size'](0xc8, 0x96), _0x5bbecf['sizeGrid'] = '30,30,30,3' + '0', _0x5bbecf['anchorX'] = _0x5bbecf['anchorY'] = 0.5, _0x5bbecf['skin'] = '';
                let _0xa200be = new Laya['Image']();
                _0xa200be['name'] = 'rightAd', _0xa200be['size'](0xc8, 0x96), _0xa200be['anchorX'] = _0xa200be['anchorY'] = 0.5, _0xa200be['skin'] = '', _0xa200be['mask'] = _0x5bbecf, _0x177eef['addChild'](_0xa200be), _0x177eef['pos'](_0x3bbe17['width'], 0x0), _0xa200be['pos'](_0x177eef['width'] / 0x2, _0x177eef['height'] / 0x2), _0x5bbecf['pos'](_0xa200be['width'] / 0x2, _0xa200be['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x3bbe17['width'] + _0x177eef['width'], this['_box_adTwo' + '0']['addChild'](_0x3bbe17), this['_box_adTwo' + '0']['addChild'](_0x177eef), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x12a4cc = _0x1d19d7['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x12a4cc['length'])
                    return;
                let _0xcbdbff = JSON['parse'](JSON['stringify'](_0x12a4cc));
                _0x46f154['offAll'](), _0xa200be['offAll'](), _0x46f154['skin'] = _0xcbdbff[0x0]['thumb'], _0xa200be['skin'] = _0xcbdbff[0x1]['thumb'], _0x46f154['on'](Laya['Event']['MOUSE_DOWN'], this, _0x6a76f8 => {
                    _0x6a76f8['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0xcbdbff[0x0]['id']);
                }), _0xa200be['on'](Laya['Event']['MOUSE_DOWN'], this, _0x293ee3 => {
                    _0x293ee3['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0xcbdbff[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x53ab1f = 0xc8, _0x1b6441 = 0x96, _0x3d6590 = ![], _0x1661ab = !![]) {
            let _0x12546d = 0xc8;
            _0x53ab1f / 0xc8 > _0x1b6441 / 0x96 ? _0x12546d = _0x53ab1f / 0xc8 : _0x12546d = _0x1b6441 / 0x96;
            let _0x596c6a = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x10d179 = this['getChildBy' + 'Name']('leftAdBg'), _0x4ea8b6 = this['getChildBy' + 'Name']('rightAdBg'), _0x2eb96d = _0x10d179['getChildBy' + 'Name']('leftAd'), _0x4f7934 = _0x4ea8b6['getChildBy' + 'Name']('rightAd');
                _0x1661ab && (_0x10d179['size'](0xdc, 0xaa), _0x4ea8b6['size'](0xdc, 0xaa), _0x2eb96d['size'](0xc8, 0x96), _0x4f7934['size'](0xc8, 0x96), _0x2eb96d['mask']['size'](0xc8, 0x96), _0x4f7934['mask']['size'](0xc8, 0x96), _0x10d179['scale'](0x1, 0x1), _0x4ea8b6['scale'](0x1, 0x1), _0x2eb96d['scale'](0x1, 0x1), _0x4f7934['scale'](0x1, 0x1), _0x2eb96d['mask']['scale'](0x1, 0x1), _0x4f7934['mask']['scale'](0x1, 0x1));
                let _0x3c0b1a = 0xc8 * _0x1b6441 / _0x53ab1f;
                _0x10d179['size'](_0x596c6a + 0x14, _0x3c0b1a + 0x14), _0x4ea8b6['size'](_0x596c6a + 0x14, _0x3c0b1a + 0x14), _0x2eb96d['mask']['size'](_0x596c6a, _0x3c0b1a), _0x4f7934['mask']['size'](_0x596c6a, _0x3c0b1a), !_0x3d6590 ? (_0x2eb96d['size'](_0x596c6a, _0x3c0b1a), _0x4f7934['size'](_0x596c6a, _0x3c0b1a)) : (_0x2eb96d['size'](0xc8 * _0x12546d, 0x96 * _0x12546d), _0x4f7934['size'](0xc8 * _0x12546d, 0x96 * _0x12546d)), _0x2eb96d['pos'](_0x10d179['width'] / 0x2, _0x10d179['height'] / 0x2), _0x2eb96d['mask']['pos'](_0x2eb96d['width'] / 0x2, _0x2eb96d['height'] / 0x2), _0x4f7934['pos'](_0x4ea8b6['width'] / 0x2, _0x4ea8b6['height'] / 0x2), _0x4f7934['mask']['pos'](_0x4f7934['width'] / 0x2, _0x4f7934['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else
                this['name'] == '_scrollLis' + 't' && (this['sizeArr'] = [
                    _0x53ab1f,
                    _0x1b6441,
                    _0x3d6590,
                    _0x1661ab
                ]);
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x3261e7 = new Laya['Box']();
                return _0x3261e7['setSize'] = function () {
                }, _0x3261e7;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = '', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x1a641c extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = '', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x40c6dd = new Laya['List']();
                _0x40c6dd['hScrollBar' + 'Skin'] = '\x20', _0x40c6dd['name'] = 'listAd', _0x40c6dd['anchorX'] = _0x40c6dd['anchorY'] = 0.5, _0x40c6dd['size'](0x370, 0xaa), _0x40c6dd['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x40c6dd['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x40c6dd['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x40c6dd['itemRender'] = _0x1a641c, _0x40c6dd['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x40c6dd), _0x40c6dd['pos'](this['_scrollLis' + 't']['width'] / 0x2, this['_scrollLis' + 't']['height'] / 0x2);
                let _0x593b1e = _0x1d19d7['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x593b1e['length'])
                    return;
                let _0x5ee813 = JSON['parse'](JSON['stringify'](_0x593b1e));
                _0x5ee813 = _0x5ee813['concat'](_0x5ee813['slice'](0x0, 0x4)), _0x40c6dd['array'] = _0x5ee813, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x40c6dd['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0xfae9db, _0x3cc6f5) {
            let _0x58be12 = _0xfae9db['dataSource'], _0x10b93f = _0xfae9db['getChildBy' + 'Name']('img'), _0x1b57a4 = _0x10b93f['mask'];
            _0x10b93f['skin'] = _0x58be12['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0xfae9db['size'](0xdc, 0xaa), _0xfae9db['img']['size'](0xc8, 0x96), _0x1b57a4['size'](0xc8, 0x96), _0xfae9db['scale'](0x1, 0x1), _0xfae9db['scale'](0x1, 0x1), _0x1b57a4['scale'](0x1, 0x1));
            _0xfae9db['offAll'](), _0x10b93f['offAll'](), _0xfae9db['on'](Laya['Event']['MOUSE_OVER'], _0xfae9db, () => {
                _0xfae9db['zOrder'] = 0x64;
            }), _0xfae9db['on'](Laya['Event']['MOUSE_OUT'], _0xfae9db, () => {
                _0xfae9db['zOrder'] = _0x3cc6f5;
            }), _0x10b93f['on'](Laya['Event']['MOUSE_OVER'], _0xfae9db, () => {
                _0x10b93f['scale'](_0x10b93f['scaleX'] + 0.1, _0x10b93f['scaleY'] + 0.1), this['endAni']();
            }), _0x10b93f['on'](Laya['Event']['MOUSE_OUT'], _0xfae9db, () => {
                _0x10b93f['scale'](_0x10b93f['scaleX'] - 0.1, _0x10b93f['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x10b93f['on'](Laya['Event']['MOUSE_DOWN'], _0xfae9db, _0x12ec6f => {
                _0x12ec6f['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x58be12['id']);
            });
            let _0x5db555 = 0xc8;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x5db555 = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x5db555 = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x2c337d = 0xc8, _0x46d9c8 = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            _0xfae9db['size'](_0x2c337d + 0x14, _0x46d9c8 + 0x14), _0x1b57a4['size'](_0x2c337d, _0x46d9c8), !this['_scrollLis' + 't']['sizeArr'][0x2] ? _0xfae9db['img']['size'](_0x2c337d, _0x46d9c8) : (leftAd['size'](0xc8 * _0x5db555, 0x96 * _0x5db555), rightAd['size'](0xc8 * _0x5db555, 0x96 * _0x5db555)), _0x10b93f['pos'](_0xfae9db['width'] / 0x2, _0xfae9db['height'] / 0x2), _0x1b57a4['pos'](_0x10b93f['width'] / 0x2, _0x10b93f['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x1e1ae9 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x1e1ae9['scrollBar']['value'] += 0x1, _0x1e1ae9['scrollBar']['value'] >= _0x1e1ae9['scrollBar']['max'] && (_0x1e1ae9['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x3df21b) {
            if (_0x3df21b['name'] == '_box_adTwo' + '0') {
                let _0x2f363e = _0x3df21b['getChildBy' + 'Name']('leftAdBg'), _0x306790 = _0x3df21b['getChildBy' + 'Name']('rightAdBg'), _0x406649 = _0x1d19d7['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x406649['length'])
                    return;
                let _0x1371d4 = JSON['parse'](JSON['stringify'](_0x406649));
                _0x2f363e['offAll'](), _0x306790['offAll'](), _0x2f363e['getChildBy' + 'Name']('leftAd')['skin'] = _0x1371d4[0x0]['thumb'], _0x306790['getChildBy' + 'Name']('rightAd')['skin'] = _0x1371d4[0x1]['thumb'], _0x2f363e['on'](Laya['Event']['MOUSE_DOWN'], _0x3df21b, _0x16b85c => {
                    _0x16b85c['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x1371d4[0x0]['id']);
                }), _0x306790['on'](Laya['Event']['MOUSE_DOWN'], _0x3df21b, _0x2d6870 => {
                    _0x2d6870['stopPropag' + 'ation'](), _0x1d19d7['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x1371d4[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x4944e7) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x1d5e73 = this['getChildBy' + 'Name']('leftAdBg'), _0x4de8d4 = this['getChildBy' + 'Name']('rightAdBg');
                _0x4de8d4['pos'](_0x1d5e73['width'] + _0x4944e7, 0x0), this['width'] = _0x1d5e73['width'] + _0x4de8d4['width'] + _0x4944e7, this['spaceXNum'] = _0x4944e7;
            }
        }
    }
    _0x11ca6d['_inst'] = null;
}();