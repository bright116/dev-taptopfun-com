!function () {
    class _0x6cd6d5 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x7206d7, _0x562257) => {
                try {
                    this['musicAudio'] = new _0x29480a(), this['soundAudio'] = new _0x29480a(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x7206d7(!![]);
                } catch (_0x420054) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x420054), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x7206d7(![]);
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
        set ['muted'](_0x518da9) {
            this['isMuted'] = _0x518da9, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x478dc3) {
            this['pauseSound'] = _0x478dc3, this['pauseMusic'] = _0x478dc3, !_0x478dc3 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x490ca3) {
            this['bePauseSou' + 'nd'] = _0x490ca3;
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
        set ['pauseMusic'](_0x560188) {
            this['bePauseMus' + 'ic'] = _0x560188;
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
        ['parse'](_0xd48cd1, _0x4e71a9, _0x2602a4) {
            this['soundAudio']['parse'](_0xd48cd1, _0x4e71a9);
        }
        ['playMusic'](_0x58cd3c) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x58cd3c);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x475806) {
            this['soundAudio']['stop'](_0x475806);
        }
        set ['musicVolum' + 'e'](_0x573ccf) {
            this['musicAudio']['musicVolum' + 'e'] = _0x573ccf;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0xd6b47d, _0xf54ba8 = ![], _0x57c201 = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0xd6b47d, _0xf54ba8, _0x57c201);
        }
    }
    class _0xf04b3d {
    }
    class _0x29480a {
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
            const _0x5960ad = this['_audioInst' + 'ances']['values']();
            for (const _0x27af01 of _0x5960ad) {
                const _0x339f9a = _0x27af01['instance'];
                if (_0x339f9a['source']['buffer'] && !_0x339f9a['source']['loop']) {
                    try {
                        _0x339f9a['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x1a0791) {
                        _0x339f9a['source']['disconnect']();
                    }
                    _0x339f9a['source']['onended'] = function () {
                    }, _0x339f9a['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x4b51a4 = this['_audioInst' + 'ances']['values']();
            for (const _0x1b584c of _0x4b51a4) {
                const _0x277a71 = _0x1b584c['instance'];
                if (_0x277a71['source']['buffer']) {
                    try {
                        _0x277a71['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x121f99) {
                        _0x277a71['source']['disconnect']();
                    }
                    _0x277a71['source']['onended'] = function () {
                    }, _0x277a71['setup']();
                }
            }
        }
        ['stop'](_0xd57365) {
            if (this['_audioInst' + 'ances']['has'](_0xd57365)) {
                const _0x51efdc = this['_audioInst' + 'ances']['get'](_0xd57365);
                this['_stopSound'](_0x51efdc);
            }
        }
        ['_stopSound'](_0x319f20) {
            const _0x58cdbd = _0x319f20['instance'];
            if (_0x58cdbd['source']['buffer']) {
                try {
                    _0x58cdbd['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x57df65) {
                    _0x58cdbd['source']['disconnect']();
                }
                _0x58cdbd['source']['onended'] = function () {
                }, _0x58cdbd['setup']();
            }
        }
        ['playMusic'](_0x34f5ac) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x34f5ac) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x34f5ac), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x34f5ac, !![])) : this['downloadAr' + 'rayBuffer'](_0x34f5ac, () => {
                this['playMusic'](_0x34f5ac);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x121ff7) {
            this['_musicVolu' + 'me'] = _0x121ff7, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0x5a668d, _0x374a62 = ![], _0x274612 = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0x5a668d)) {
                const _0x3288a6 = this['_audioInst' + 'ances']['get'](_0x5a668d), _0x2879c2 = _0x3288a6['instance'];
                if (_0x274612 && !_0x2879c2['ended'])
                    return;
                this['stop'](_0x5a668d);
                if (_0x3288a6['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x374a62)
                            return;
                        _0x2879c2['playBuffer'](this['context']['currentTim' + 'e'], _0x3288a6['buffer']), _0x2879c2['source']['loop'] = _0x374a62;
                    } catch (_0x3586a8) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x3586a8);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0x5a668d, () => {
                    this['play'](_0x5a668d, _0x374a62);
                });
        }
        ['load'](_0x68e6c4, _0x538f5a) {
            let _0x370eba = _0x68e6c4['length'], _0x4c847e = 0x0;
            for (let _0x1b14e7 = 0x0; _0x1b14e7 < _0x68e6c4['length']; _0x1b14e7++) {
                const _0x2be7bf = _0x68e6c4[_0x1b14e7];
                this['downloadAr' + 'rayBuffer'](_0x2be7bf, () => {
                    _0x4c847e++, _0x4c847e >= _0x370eba && (_0x538f5a && _0x538f5a());
                });
            }
        }
        ['setThreeD'](_0x1b2620) {
            if (this['_audioInst' + 'ances']['has'](_0x1b2620)) {
                const _0xfa0b9c = this['_audioInst' + 'ances']['get'](_0x1b2620);
                _0xfa0b9c['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x528903 = this['context'];
            const _0xc5f02 = {
                'gain': _0x528903['createGain'](),
                'panner': _0x528903['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x33903a, _0x5ac1c8, _0x1a3fe3) {
                    this['source']['buffer'] = _0x5ac1c8;
                    var _0x2deb89 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x2deb89['setup'](), _0x2deb89['ended'] = !![];
                    }, this['source']['start'](_0x33903a, _0x1a3fe3);
                },
                'setup': function () {
                    this['source'] = _0x528903['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0xc5f02['panner']['rolloffFac' + 'tor'] = 0x0, _0xc5f02['gain']['connect'](this['context']['destinatio' + 'n']), _0xc5f02['setup'](), _0xc5f02;
        }
        ['parse'](_0x5a559, _0x39ea0e, _0x597732) {
            const _0x4704f7 = new _0xf04b3d();
            _0x4704f7['url'] = _0x5a559, _0x4704f7['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x5a559, _0x4704f7), this['context']['decodeAudi' + 'oData'](_0x39ea0e, function (_0x413147) {
                _0x4704f7['buffer'] = _0x413147, _0x597732 && _0x597732();
            }, function (_0x3aa8a9) {
                _0x4704f7['error'] = !![], _0x597732 && _0x597732(), console['log']('Decode\x20err' + 'or.' + _0x4704f7['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x528093, _0x4242a5) {
            if (this['_audioInst' + 'ances']['has'](_0x528093)) {
                _0x4242a5 && _0x4242a5();
                return;
            }
            const _0x4a686f = this;
            var _0x511ebd = new XMLHttpRequest();
            _0x511ebd['open']('GET', _0x528093, !![]), _0x511ebd['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x511ebd['onload'] = function () {
                if (_0x511ebd['status'] === 0xc8 || _0x511ebd['status'] === 0x0)
                    _0x4a686f['parse'](_0x528093, _0x511ebd['response'], _0x4242a5);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x511ebd['onerror'] = function () {
                _0x4242a5 && _0x4242a5();
                throw 'no\x20respons' + 'e';
            }, _0x511ebd['ontimeout'] = function () {
                _0x4242a5 && _0x4242a5();
            }, _0x511ebd['onabort'] = function () {
                _0x4242a5 && _0x4242a5();
            }, _0x511ebd['send'](null);
        }
    }
    const _0x298565 = window['WebAudioEn' + 'gine'] = new _0x6cd6d5();
    class _0x553307 {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x553307()), this['_instance'];
        }
        ['initData']() {
            let _0x25f864 = document['getElement' + 'ById']('layaCanvas');
            _0x25f864 && (_0x25f864['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x25f864['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x9c2b6a) {
            let _0x237e87 = null;
            try {
                let _0x504f82 = Laya['LocalStora' + 'ge']['getItem'](_0x9c2b6a);
                _0x237e87 = JSON['parse'](_0x504f82);
            } catch (_0x3da96b) {
            }
            return _0x237e87;
        }
        ['setStorage' + 'Sync'](_0x5eddf5, _0x56420b) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x5eddf5, JSON['stringify'](_0x56420b));
        }
        ['navigate'](_0x53342b, _0x99bad5, _0x5bd360) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x53342b, this['action_'] = _0x99bad5, this['to_'] = _0x5bd360, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x298565['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x298565['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x3ae8f7) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x3ae8f7 && _0x3ae8f7();
            return;
            // YYGGames['showInters' + 'titial']({
            //     'beforeShowAd': () => {
            //         window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
            //     },
            //     'afterShowAd': () => {
            //         window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x3ae8f7 && _0x3ae8f7();
            //     }
            // });
        }
        ['showReward'](_0x3a644a, _0x471aa5, _0x41c349) {
            //TODO showReward
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                    _0x3a644a && _0x3a644a(), _0x41c349 && _0x41c349(), _0x41c349 = null, _0x3a644a = null;
                },
                () => {
                    // 广告请求失败或者用户跳过广告
                    _0x471aa5 && (_0x471aa5(), _0x41c349 && _0x41c349(), _0x41c349 = null, _0x471aa5 = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            );
            return;
            // if (!YYGGames['canShowRew' + 'ard']()) {
            //     this['prompt']('No\x20Availab' + 'le\x20Video'), _0x41c349 && _0x41c349();
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
            //         _0x3a644a && _0x3a644a(), _0x41c349 && _0x41c349(), _0x41c349 = null, _0x3a644a = null;
            //     },
            //     'rewardDismissed': () => {
            //         _0x471aa5 && (_0x471aa5(), _0x41c349 && _0x41c349(), _0x41c349 = null, _0x471aa5 = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
            //     }
            // });
        }
        ['initList'](_0x454e44) {
        }
        ['prompt'](_0x1107c3, _0x52eb87) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x571ece = Laya['stage']['designWidt' + 'h'], _0x4295b0 = Laya['stage']['designHeig' + 'ht'];
            var _0x505162 = window['innerWidth'], _0x18d1b2 = window['innerHeigh' + 't'], _0xaf424e, _0x10ef85;
            _0x505162 / _0x18d1b2 > _0x571ece / _0x4295b0 ? (_0xaf424e = _0x18d1b2, _0x10ef85 = _0xaf424e * _0x571ece / _0x4295b0) : (_0x10ef85 = _0x505162, _0xaf424e = _0x10ef85 * _0x4295b0 / _0x571ece), this['prompt_']['style']['width'] = _0x10ef85 - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x1107c3, _0x52eb87 = isNaN(_0x52eb87) ? 0x7d0 : _0x52eb87, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x15746c = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x15746c + ('s\x20ease-in,' + '\x20opacity\x20') + _0x15746c + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x52eb87);
        }
        ['prompt0'](_0x4c450c, _0x1902f8 = 0xbb8) {
            if (!Laya)
                return;
            !this['labelInfo'] && (this['labelBg'] = new Laya['Box'](), this['labelBg']['bgColor'] = '#000000', this['labelBg']['alpha'] = 0.5, this['labelBg']['centerX'] = 0x0, this['labelBg']['centerY'] = -0x32, this['labelInfo'] = new Laya['Label'](), this['labelInfo']['align'] = 'center', this['labelInfo']['valign'] = 'middle', this['labelInfo']['color'] = '#ffffff', this['labelInfo']['fontSize'] = 0x1e, this['labelInfo']['centerX'] = 0x0, this['labelInfo']['centerY'] = -0x32, this['labelInfo']['zOrder'] = 0x174876e800), this['labelInfo']['width'] = null, this['labelInfo']['height'] = null, this['labelInfo']['wordWrap'] = ![], this['labelInfo']['visible'] = ![], this['labelInfo']['text'] = _0x4c450c, this['labelInfo']['height'] += 0x28, this['labelInfo']['width'] > Laya['stage']['width'] - 0x64 && (this['labelInfo']['width'] = Laya['stage']['width'] - 0x64, this['labelInfo']['wordWrap'] = !![]), this['labelBg']['visible'] = this['labelInfo']['visible'] = !![], Laya['stage']['addChild'](this['labelBg']), Laya['stage']['addChild'](this['labelInfo']), Laya['timer']['clear'](this, this['clearLabel']), this['labelBg']['width'] = this['labelInfo']['width'] + 0x14, this['labelBg']['height'] = this['labelInfo']['height'], Laya['timer']['once'](_0x1902f8, this, this['clearLabel']);
        }
        ['clearLabel']() {
            this['labelBg']['visible'] = this['labelInfo']['visible'] = ![];
        }
        ['getForgame' + 's']() {
            return []
            // let _0x80b09d = YYGGames['forgames'] || [], _0x1e3c5f = _0x80b09d['slice']();
            // for (let _0x382d1c = 0x0, _0x5cdb67 = _0x1e3c5f['length']; _0x382d1c < _0x5cdb67; _0x382d1c++) {
            //     const _0x129281 = Math['floor'](Math['random']() * (_0x382d1c + 0x1)), _0x2d7166 = _0x1e3c5f[_0x129281];
            //     _0x1e3c5f[_0x129281] = _0x1e3c5f[_0x382d1c], _0x1e3c5f[_0x382d1c] = _0x2d7166;
            // }
            // return _0x1e3c5f;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x386cb0 = new Laya['Image']();
                _0x386cb0['skin'] = 'yad.png', _0x386cb0['zOrder'] = 0x30d40, window['yad'] = _0x386cb0;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x489bd5, _0x28bdac) {
            !this['needStartU' + 'p'] && (_0x28bdac && _0x28bdac());
            if (this['initialize' + 'd_'])
                return;
            _0x553307['getInstanc' + 'e']()['showSplash'](), _0x553307['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x9cd931) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x9cd931);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0xee8cbe, _0x63f441 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0xee8cbe);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x3165ef) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x3165ef);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0xf2b4de => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x489bd5,
                    'config': _0xf2b4de,
                    'complete': () => {
                        const _0x380530 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x380530) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x4870d0 => {
                                _0x4870d0['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x28bdac && _0x28bdac();
                    }
                });
            }));
        }
        ['showBanner'](_0x317fbc) {
            // _0x317fbc ? YYGGames['showBanner'](_0x317fbc) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            // YYGGames['hideBanner']();
        }
        ['showSplash'](_0xbd0773) {
            // _0xbd0773 ? YYGGames['showSplash'](_0xbd0773) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            // YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x3c3039, _0x1300b0) {
            !this['needStartU' + 'p'] && (_0x1300b0 && _0x1300b0());
            if (this['initialize' + 'd_'])
                return;
            _0x553307['getInstanc' + 'e']()['showSplash'](), _0x553307['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x2dc416) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x2dc416);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x596b96, _0x583e92 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x596b96);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x3fb5ff) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x3fb5ff);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x261619 => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x3c3039,
                    'config': _0x261619,
                    'complete': () => {
                        const _0x53adb7 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x53adb7) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x48ab4a => {
                                _0x48ab4a['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x1300b0 && _0x1300b0();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x499a1f, _0x151754) {
            !this['needStartU' + 'p'] && (_0x151754 && _0x151754());
            if (this['initialize' + 'd_'])
                return;
            _0x553307['getInstanc' + 'e']()['showSplash'](), _0x553307['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x344951) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x344951);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x33439b) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x33439b);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x2f9d86) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0xd8496 => {
                window['scrollList'] = _0x4c1462['inst']['scrollList'](), window['box_adTwo'] = _0x4c1462['inst']['box_adTwo']();
                this['needStartU' + 'p'] = ![], _0x151754 && _0x151754();
                // YYGGames['startup']({
                //     'channel': 0x5,
                //     'appName': _0x499a1f,
                //     'config': _0xd8496,
                //     'complete': () => {
                //         const _0x30bd45 = YYGGames['getAdPlatf' + 'ormType']();
                //         window['scrollList'] = _0x4c1462['inst']['scrollList'](), window['box_adTwo'] = _0x4c1462['inst']['box_adTwo']();
                //         switch (_0x30bd45) {
                //         case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                //         case AdPlatformType['en_XIAOMI']:
                //             window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                //             break;
                //         default:
                //             window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x13d0c3 => {
                //                 _0x13d0c3['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                //             });
                //             break;
                //         }
                //         this['needStartU' + 'p'] = ![], _0x151754 && _0x151754();
                //     }
                // });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x2f9733 = {
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
            class _0x2a009d extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x553307['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x2ed617 = new Laya['Prefab']();
            _0x2ed617['json'] = _0x2f9733, this['noVideoPer'] = _0x2ed617['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x2a009d);
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
            let _0x497ffa = {
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
            class _0x2a3415 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x553307['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x225c52 = new Laya['Prefab']();
            _0x225c52['json'] = _0x497ffa, this['loadingPer'] = _0x225c52['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x2a3415);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x52bd6d extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x47ff5b = new Laya['List']();
            return _0x47ff5b['size'](0x320, 0x258), _0x47ff5b['itemRender'] = _0x52bd6d, _0x47ff5b;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x4da5e2 = new Laya['Box']();
            //     return _0x4da5e2['setSize'] = function () {
            //     }, _0x4da5e2;
            // }
            if (!this['_scrollLis' + 't']) {
                let _0x3ff433 = {
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
                class _0x1c1c17 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['scaleNum'] = [
                            0.83,
                            0.83
                        ], this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        this['img_ListBg'] = this['owner']['getChildBy' + 'Name']('img_ListBg'), this['owner']['visible'] = ![], !this['owner']['renderHand' + 'ler'] && (this['owner']['renderHand' + 'ler'] = new Laya['Handler'](this, this['itemRender' + 'Fun']));
                        if (this['imgArr']['length']) {
                            let _0x3262b4 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x3262b4);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x5008fa = _0x553307['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x5008fa['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x5008fa)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x3592dc, _0x19b481) {
                        let _0x2a7688 = _0x3592dc['getChildBy' + 'Name']('thumb');
                        _0x3592dc['offAll'](), _0x2a7688['offAll'](), _0x3592dc['on'](Laya['Event']['MOUSE_OVER'], _0x3592dc, () => {
                            _0x3592dc['zOrder'] = 0x64;
                        }), _0x3592dc['on'](Laya['Event']['MOUSE_OUT'], _0x3592dc, () => {
                            _0x3592dc['zOrder'] = _0x19b481;
                        }), _0x2a7688['on'](Laya['Event']['MOUSE_OVER'], _0x3592dc, () => {
                            _0x2a7688['scale'](1.1, 1.1), this['endAni']();
                        }), _0x2a7688['on'](Laya['Event']['MOUSE_OUT'], _0x3592dc, () => {
                            _0x2a7688['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x2a7688['on'](Laya['Event']['MOUSE_DOWN'], _0x3592dc, _0x4b3fe8 => {
                            _0x4b3fe8['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3592dc['dataSource']['id']);
                        });
                        let _0x2f8faa = _0x2a7688['mask'];
                        _0x3592dc['width'] = this['sizeTran'][0x0] + 0x14, _0x3592dc['height'] = this['sizeTran'][0x1] + 0x14, _0x3592dc['x'] = (this['sizeTran'][0x0] + 0x14) * _0x19b481;
                        if (this['sizeTran'][0x2])
                            _0x2f8faa['width'] = _0x2a7688['width'] = this['sizeTran'][0x0], _0x2f8faa['height'] = _0x2a7688['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x4c15f3 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x2a7688['width'] = 0xc8 / _0x4c15f3, _0x2a7688['height'] = 0x96 / _0x4c15f3, _0x2f8faa['width'] = this['sizeTran'][0x0], _0x2f8faa['height'] = this['sizeTran'][0x1];
                        }
                        _0x2f8faa['x'] = _0x2a7688['width'] / 0x2, _0x2f8faa['y'] = _0x2a7688['height'] / 0x2;
                    }
                    ['setSize'](_0x28f96e, _0x29a90d, _0x44bdbc = ![]) {
                        this['sizeTran'] = [
                            _0x28f96e,
                            _0x29a90d,
                            _0x44bdbc
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x28f96e + 0x14) * 0x4, this['owner']['height'] = _0x29a90d + 0x14, this['img_ListBg']['width'] = (_0x28f96e + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0x29a90d + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x52e1e8) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x469c23 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x469c23);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x3f4c21 = new Laya['Prefab']();
                _0x3f4c21['json'] = _0x3ff433, this['_scrollLis' + 't'] = _0x3f4c21['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x1c1c17), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x1c1c17)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x1c1c17));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x3d9a01 = new Laya['Box']();
            //     return _0x3d9a01['setSpaceX'] = _0x3d9a01['setSize'] = function () {
            //     }, _0x3d9a01;
            // }
            if (!this['_box_adTwo']) {
                let _0x2c79e7 = {
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
                class _0x4014b2 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x13d690 = _0x553307['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x13d690['length'])
                            return;
                        let _0x2566c3 = JSON['parse'](JSON['stringify'](_0x13d690));
                        if (this['imgArr']['length']) {
                            let _0x5b99cb = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x5b99cb);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x2566c3[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x2566c3[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x30a47a => {
                            _0x30a47a['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x2566c3[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x499c8b => {
                            _0x499c8b['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x2566c3[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x469c64) {
                        this['spaceNum'] = _0x469c64, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x57cf2b = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x57cf2b);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x4a2d61, _0x4aec53, _0xb7f063 = ![]) {
                        this['sizeTran'] = [
                            _0x4a2d61,
                            _0x4aec53,
                            _0xb7f063
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x4a2d61 + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x4aec53 + 0x14;
                            if (_0xb7f063)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x4a2d61, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x4aec53;
                            else {
                                let _0x1915e0 = 0xc8 / _0x4a2d61 < 0x96 / _0x4aec53 ? 0xc8 / _0x4a2d61 : 0x96 / _0x4aec53;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x1915e0, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x1915e0, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x4a2d61, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x4aec53;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x2adfc6 = new Laya['Prefab']();
                _0x2adfc6['json'] = _0x2c79e7, this['_box_adTwo'] = _0x2adfc6['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x4014b2), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x4014b2)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x4014b2)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x4014b2)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x4014b2));
            }
            return this['_box_adTwo'];
        }
    }
    _0x553307['_instance'] = null, window['platform'] = _0x553307;
    class _0x4c1462 {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x4c1462['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x4c1462['_inst'] && new _0x4c1462(), _0x4c1462['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x3ef7ab = new Laya['Box']();
            //     return _0x3ef7ab['setSpaceX'] = _0x3ef7ab['setSize'] = function () {
            //     }, _0x3ef7ab;
            // }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x12dffc = new Laya['Image']();
                _0x12dffc['name'] = 'leftAdBg', _0x12dffc['sizeGrid'] = '30,30,30,3' + '0', _0x12dffc['size'](0xdc, 0xaa), _0x12dffc['skin'] = '';
                let _0x15bd7f = new Laya['Image']();
                _0x15bd7f['name'] = 'leftAdMask', _0x15bd7f['size'](0xc8, 0x96), _0x15bd7f['sizeGrid'] = '30,30,30,3' + '0', _0x15bd7f['anchorX'] = _0x15bd7f['anchorY'] = 0.5, _0x15bd7f['skin'] = '';
                let _0x3e7b13 = new Laya['Image']();
                _0x3e7b13['name'] = 'leftAd', _0x3e7b13['size'](0xc8, 0x96), _0x3e7b13['anchorX'] = _0x3e7b13['anchorY'] = 0.5, _0x3e7b13['skin'] = '', _0x3e7b13['mask'] = _0x15bd7f, _0x12dffc['addChild'](_0x3e7b13), _0x12dffc['pos'](0x0, 0x0), _0x3e7b13['pos'](_0x12dffc['width'] / 0x2, _0x12dffc['height'] / 0x2), _0x15bd7f['pos'](_0x3e7b13['width'] / 0x2, _0x3e7b13['height'] / 0x2);
                let _0x382281 = new Laya['Image']();
                _0x382281['name'] = 'rightAdBg', _0x382281['sizeGrid'] = '30,30,30,3' + '0', _0x382281['size'](0xdc, 0xaa), _0x382281['skin'] = '';
                let _0x19d907 = new Laya['Image']();
                _0x19d907['name'] = 'rightAdMas' + 'k', _0x19d907['size'](0xc8, 0x96), _0x19d907['sizeGrid'] = '30,30,30,3' + '0', _0x19d907['anchorX'] = _0x19d907['anchorY'] = 0.5, _0x19d907['skin'] = '';
                let _0x11dd57 = new Laya['Image']();
                _0x11dd57['name'] = 'rightAd', _0x11dd57['size'](0xc8, 0x96), _0x11dd57['anchorX'] = _0x11dd57['anchorY'] = 0.5, _0x11dd57['skin'] = '', _0x11dd57['mask'] = _0x19d907, _0x382281['addChild'](_0x11dd57), _0x382281['pos'](_0x12dffc['width'], 0x0), _0x11dd57['pos'](_0x382281['width'] / 0x2, _0x382281['height'] / 0x2), _0x19d907['pos'](_0x11dd57['width'] / 0x2, _0x11dd57['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x12dffc['width'] + _0x382281['width'], this['_box_adTwo' + '0']['addChild'](_0x12dffc), this['_box_adTwo' + '0']['addChild'](_0x382281), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0xd2faa4 = _0x553307['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0xd2faa4['length'])
                    return;
                let _0x4af215 = JSON['parse'](JSON['stringify'](_0xd2faa4));
                _0x3e7b13['offAll'](), _0x11dd57['offAll'](), _0x3e7b13['skin'] = _0x4af215[0x0]['thumb'], _0x11dd57['skin'] = _0x4af215[0x1]['thumb'], _0x3e7b13['on'](Laya['Event']['MOUSE_DOWN'], this, _0x3c41fa => {
                    _0x3c41fa['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x4af215[0x0]['id']);
                }), _0x11dd57['on'](Laya['Event']['MOUSE_DOWN'], this, _0x533e8e => {
                    _0x533e8e['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x4af215[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x38c102 = 0xc8, _0x336b89 = 0x96, _0x51a5fd = ![], _0x2656ca = !![]) {
            let _0x5de328 = 0x1;
            _0x38c102 / 0xc8 > _0x336b89 / 0x96 ? _0x5de328 = _0x38c102 / 0xc8 : _0x5de328 = _0x336b89 / 0x96;
            let _0x226d4b = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x1a9f75 = this['getChildBy' + 'Name']('leftAdBg'), _0x44054d = this['getChildBy' + 'Name']('rightAdBg'), _0x498a22 = _0x1a9f75['getChildBy' + 'Name']('leftAd'), _0x26cf7e = _0x44054d['getChildBy' + 'Name']('rightAd');
                _0x2656ca && (_0x1a9f75['size'](0xdc, 0xaa), _0x44054d['size'](0xdc, 0xaa), _0x498a22['size'](0xc8, 0x96), _0x26cf7e['size'](0xc8, 0x96), _0x498a22['mask']['size'](0xc8, 0x96), _0x26cf7e['mask']['size'](0xc8, 0x96), _0x1a9f75['scale'](0x1, 0x1), _0x44054d['scale'](0x1, 0x1), _0x498a22['scale'](0x1, 0x1), _0x26cf7e['scale'](0x1, 0x1), _0x498a22['mask']['scale'](0x1, 0x1), _0x26cf7e['mask']['scale'](0x1, 0x1));
                let _0x2a93f0 = 0xc8 * _0x336b89 / _0x38c102;
                _0x1a9f75['size'](_0x226d4b + 0x14, _0x2a93f0 + 0x14), _0x44054d['size'](_0x226d4b + 0x14, _0x2a93f0 + 0x14), _0x498a22['mask']['size'](_0x226d4b, _0x2a93f0), _0x26cf7e['mask']['size'](_0x226d4b, _0x2a93f0), !_0x51a5fd ? (_0x498a22['size'](_0x226d4b, _0x2a93f0), _0x26cf7e['size'](_0x226d4b, _0x2a93f0)) : (_0x498a22['size'](0xc8 * _0x5de328, 0x96 * _0x5de328), _0x26cf7e['size'](0xc8 * _0x5de328, 0x96 * _0x5de328)), _0x498a22['pos'](_0x1a9f75['width'] / 0x2, _0x1a9f75['height'] / 0x2), _0x498a22['mask']['pos'](_0x498a22['width'] / 0x2, _0x498a22['height'] / 0x2), _0x26cf7e['pos'](_0x44054d['width'] / 0x2, _0x44054d['height'] / 0x2), _0x26cf7e['mask']['pos'](_0x26cf7e['width'] / 0x2, _0x26cf7e['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else {
                if (this['name'] == '_scrollLis' + 't') {
                    this['sizeArr'] = [
                        _0x38c102,
                        _0x336b89,
                        _0x51a5fd,
                        _0x2656ca
                    ];
                    let _0x2c2510 = 0x1;
                    this['sizeArr'][0x0] / 0xc8 > this['sizeArr'][0x1] / 0x96 ? _0x2c2510 = this['sizeArr'][0x0] / 0xc8 : _0x2c2510 = this['sizeArr'][0x1] / 0x96;
                    let _0x3baca0 = 0xc8, _0x5bd7d5 = 0xc8 * this['sizeArr'][0x1] / this['sizeArr'][0x0];
                    !this['sizeArr'][0x2] ? (this['height'] = _0x5bd7d5 + 0x14, this['getChildBy' + 'Name']('listAd')['height'] = _0x5bd7d5 + 0x14) : (this['height'] = (_0x5bd7d5 + 0x14) * _0x2c2510, this['getChildBy' + 'Name']('listAd')['height'] = (_0x5bd7d5 + 0x14) * _0x2c2510);
                }
            }
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x33b778 = new Laya['Box']();
            //     return _0x33b778['setSize'] = function () {
            //     }, _0x33b778;
            // }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = '', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x20c657 extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = '', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x3499b5 = new Laya['List']();
                _0x3499b5['hScrollBar' + 'Skin'] = '\x20', _0x3499b5['name'] = 'listAd', _0x3499b5['anchorX'] = _0x3499b5['anchorY'] = 0.5, _0x3499b5['size'](0x370, 0xaa), _0x3499b5['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x3499b5['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x3499b5['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x3499b5['itemRender'] = _0x20c657, _0x3499b5['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x3499b5), _0x3499b5['centerX'] = _0x3499b5['centerY'] = 0x0;
                let _0x4de9ce = _0x553307['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x4de9ce['length'])
                    return;
                let _0x23f265 = JSON['parse'](JSON['stringify'](_0x4de9ce));
                _0x23f265 = _0x23f265['concat'](_0x23f265['slice'](0x0, 0x4)), _0x3499b5['array'] = _0x23f265, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x3499b5['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x3c08b0, _0x197c2b) {
            let _0x4aa028 = _0x3c08b0['dataSource'], _0x4c1159 = _0x3c08b0['getChildBy' + 'Name']('img'), _0x17ee48 = _0x4c1159['mask'];
            _0x4c1159['skin'] = _0x4aa028['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x3c08b0['size'](0xdc, 0xaa), _0x3c08b0['img']['size'](0xc8, 0x96), _0x17ee48['size'](0xc8, 0x96), _0x3c08b0['scale'](0x1, 0x1), _0x3c08b0['scale'](0x1, 0x1), _0x17ee48['scale'](0x1, 0x1));
            _0x3c08b0['offAll'](), _0x4c1159['offAll'](), _0x3c08b0['on'](Laya['Event']['MOUSE_OVER'], _0x3c08b0, () => {
                _0x3c08b0['zOrder'] = 0x64;
            }), _0x3c08b0['on'](Laya['Event']['MOUSE_OUT'], _0x3c08b0, () => {
                _0x3c08b0['zOrder'] = _0x197c2b;
            }), _0x4c1159['on'](Laya['Event']['MOUSE_OVER'], _0x3c08b0, () => {
                _0x4c1159['scale'](_0x4c1159['scaleX'] + 0.1, _0x4c1159['scaleY'] + 0.1), this['endAni']();
            }), _0x4c1159['on'](Laya['Event']['MOUSE_OUT'], _0x3c08b0, () => {
                _0x4c1159['scale'](_0x4c1159['scaleX'] - 0.1, _0x4c1159['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x4c1159['on'](Laya['Event']['MOUSE_DOWN'], _0x3c08b0, _0x53a192 => {
                _0x53a192['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x4aa028['id']);
            });
            let _0x16298e = 0x1;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x16298e = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x16298e = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x594957 = 0xc8, _0x196502 = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            !this['_scrollLis' + 't']['sizeArr'][0x2] ? (_0x3c08b0['img']['size'](_0x594957, _0x196502), _0x3c08b0['size'](_0x594957 + 0x14, _0x196502 + 0x14), _0x17ee48['size'](_0x594957, _0x196502)) : (_0x3c08b0['img']['size'](_0x594957 * _0x16298e, _0x196502 * _0x16298e), _0x3c08b0['size']((_0x594957 + 0x14) * _0x16298e, (_0x196502 + 0x14) * _0x16298e), _0x17ee48['size'](_0x594957 * _0x16298e, _0x196502 * _0x16298e)), _0x4c1159['pos'](_0x3c08b0['width'] / 0x2, _0x3c08b0['height'] / 0x2), _0x17ee48['pos'](_0x4c1159['width'] / 0x2, _0x4c1159['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x55bc17 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x55bc17['scrollBar']['value'] += 0x1, _0x55bc17['scrollBar']['value'] >= _0x55bc17['scrollBar']['max'] && (_0x55bc17['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x5505de) {
            if (_0x5505de['name'] == '_box_adTwo' + '0') {
                let _0x8ae2ba = _0x5505de['getChildBy' + 'Name']('leftAdBg'), _0xb030d5 = _0x5505de['getChildBy' + 'Name']('rightAdBg'), _0x3230d9 = _0x553307['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x3230d9['length'])
                    return;
                let _0x5e0b2a = JSON['parse'](JSON['stringify'](_0x3230d9));
                _0x8ae2ba['offAll'](), _0xb030d5['offAll'](), _0x8ae2ba['getChildBy' + 'Name']('leftAd')['skin'] = _0x5e0b2a[0x0]['thumb'], _0xb030d5['getChildBy' + 'Name']('rightAd')['skin'] = _0x5e0b2a[0x1]['thumb'], _0x8ae2ba['on'](Laya['Event']['MOUSE_DOWN'], _0x5505de, _0x4143a3 => {
                    _0x4143a3['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x5e0b2a[0x0]['id']);
                }), _0xb030d5['on'](Laya['Event']['MOUSE_DOWN'], _0x5505de, _0x45961e => {
                    _0x45961e['stopPropag' + 'ation'](), _0x553307['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x5e0b2a[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x4910d6) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x55fbd7 = this['getChildBy' + 'Name']('leftAdBg'), _0x39d71b = this['getChildBy' + 'Name']('rightAdBg');
                _0x39d71b['pos'](_0x55fbd7['width'] + _0x4910d6, 0x0), this['width'] = _0x55fbd7['width'] + _0x39d71b['width'] + _0x4910d6, this['spaceXNum'] = _0x4910d6;
            }
        }
    }
    _0x4c1462['_inst'] = null;
}();