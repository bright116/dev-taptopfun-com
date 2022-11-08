!function () {
    class _0x3098d3 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x3c51a0, _0x306a77) => {
                try {
                    this['musicAudio'] = new _0x488d4f(), this['soundAudio'] = new _0x488d4f(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x3c51a0(!![]);
                } catch (_0x5a1a85) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x5a1a85), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x3c51a0(![]);
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
        set ['muted'](_0x5ce8d5) {
            this['isMuted'] = _0x5ce8d5, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x6b5e8b) {
            this['pauseSound'] = _0x6b5e8b, this['pauseMusic'] = _0x6b5e8b, !_0x6b5e8b && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0xc0962d) {
            this['bePauseSou' + 'nd'] = _0xc0962d;
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
        set ['pauseMusic'](_0x2ab92d) {
            this['bePauseMus' + 'ic'] = _0x2ab92d;
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
        ['parse'](_0x5f01b0, _0x81b05, _0x131bce) {
            this['soundAudio']['parse'](_0x5f01b0, _0x81b05);
        }
        ['playMusic'](_0x17ef96) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x17ef96);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x5c6838) {
            this['soundAudio']['stop'](_0x5c6838);
        }
        set ['musicVolum' + 'e'](_0x236e95) {
            this['musicAudio']['musicVolum' + 'e'] = _0x236e95;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x516162, _0x576a4c = ![], _0x384a06 = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0x516162, _0x576a4c, _0x384a06);
        }
    }
    class _0x56b66c {
    }
    class _0x488d4f {
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
            const _0x3ca943 = this['_audioInst' + 'ances']['values']();
            for (const _0x36aa71 of _0x3ca943) {
                const _0x3159d7 = _0x36aa71['instance'];
                if (_0x3159d7['source']['buffer'] && !_0x3159d7['source']['loop']) {
                    try {
                        _0x3159d7['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x514e7e) {
                        _0x3159d7['source']['disconnect']();
                    }
                    _0x3159d7['source']['onended'] = function () {
                    }, _0x3159d7['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x386e54 = this['_audioInst' + 'ances']['values']();
            for (const _0x5de511 of _0x386e54) {
                const _0x39f5c2 = _0x5de511['instance'];
                if (_0x39f5c2['source']['buffer']) {
                    try {
                        _0x39f5c2['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x1fb3c4) {
                        _0x39f5c2['source']['disconnect']();
                    }
                    _0x39f5c2['source']['onended'] = function () {
                    }, _0x39f5c2['setup']();
                }
            }
        }
        ['stop'](_0x19fa07) {
            if (this['_audioInst' + 'ances']['has'](_0x19fa07)) {
                const _0x3a3f31 = this['_audioInst' + 'ances']['get'](_0x19fa07);
                this['_stopSound'](_0x3a3f31);
            }
        }
        ['_stopSound'](_0x15d437) {
            const _0x5ebbe1 = _0x15d437['instance'];
            if (_0x5ebbe1['source']['buffer']) {
                try {
                    _0x5ebbe1['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x265378) {
                    _0x5ebbe1['source']['disconnect']();
                }
                _0x5ebbe1['source']['onended'] = function () {
                }, _0x5ebbe1['setup']();
            }
        }
        ['playMusic'](_0x2c38ff) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x2c38ff) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x2c38ff), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x2c38ff, !![])) : this['downloadAr' + 'rayBuffer'](_0x2c38ff, () => {
                this['playMusic'](_0x2c38ff);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0xd09bfa) {
            this['_musicVolu' + 'me'] = _0xd09bfa, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0xd9ff8e, _0x4f8002 = ![], _0x131ec2 = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0xd9ff8e)) {
                const _0x24ea3d = this['_audioInst' + 'ances']['get'](_0xd9ff8e), _0x20eac8 = _0x24ea3d['instance'];
                if (_0x131ec2 && !_0x20eac8['ended'])
                    return;
                this['stop'](_0xd9ff8e);
                if (_0x24ea3d['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x4f8002)
                            return;
                        _0x20eac8['playBuffer'](this['context']['currentTim' + 'e'], _0x24ea3d['buffer']), _0x20eac8['source']['loop'] = _0x4f8002;
                    } catch (_0x4c892e) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x4c892e);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0xd9ff8e, () => {
                    this['play'](_0xd9ff8e, _0x4f8002);
                });
        }
        ['load'](_0xeda18b, _0x5a15b6) {
            let _0xc09bc = _0xeda18b['length'], _0x57cae0 = 0x0;
            for (let _0x321db3 = 0x0; _0x321db3 < _0xeda18b['length']; _0x321db3++) {
                const _0x1cb6f9 = _0xeda18b[_0x321db3];
                this['downloadAr' + 'rayBuffer'](_0x1cb6f9, () => {
                    _0x57cae0++, _0x57cae0 >= _0xc09bc && (_0x5a15b6 && _0x5a15b6());
                });
            }
        }
        ['setThreeD'](_0x156f86) {
            if (this['_audioInst' + 'ances']['has'](_0x156f86)) {
                const _0x5f2761 = this['_audioInst' + 'ances']['get'](_0x156f86);
                _0x5f2761['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x15b535 = this['context'];
            const _0x23429b = {
                'gain': _0x15b535['createGain'](),
                'panner': _0x15b535['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x3dbaa0, _0x519ce1, _0x313d78) {
                    this['source']['buffer'] = _0x519ce1;
                    var _0x31fb89 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x31fb89['setup'](), _0x31fb89['ended'] = !![];
                    }, this['source']['start'](_0x3dbaa0, _0x313d78);
                },
                'setup': function () {
                    this['source'] = _0x15b535['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x23429b['panner']['rolloffFac' + 'tor'] = 0x0, _0x23429b['gain']['connect'](this['context']['destinatio' + 'n']), _0x23429b['setup'](), _0x23429b;
        }
        ['parse'](_0x57b08a, _0x4f87b2, _0x263053) {
            const _0xf6abb5 = new _0x56b66c();
            _0xf6abb5['url'] = _0x57b08a, _0xf6abb5['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x57b08a, _0xf6abb5), this['context']['decodeAudi' + 'oData'](_0x4f87b2, function (_0x35b781) {
                _0xf6abb5['buffer'] = _0x35b781, _0x263053 && _0x263053();
            }, function (_0x229898) {
                _0xf6abb5['error'] = !![], _0x263053 && _0x263053(), console['log']('Decode\x20err' + 'or.' + _0xf6abb5['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x23cf25, _0x531f1b) {
            if (this['_audioInst' + 'ances']['has'](_0x23cf25)) {
                _0x531f1b && _0x531f1b();
                return;
            }
            const _0x478461 = this;
            var _0x1eab29 = new XMLHttpRequest();
            _0x1eab29['open']('GET', _0x23cf25, !![]), _0x1eab29['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x1eab29['onload'] = function () {
                if (_0x1eab29['status'] === 0xc8 || _0x1eab29['status'] === 0x0)
                    _0x478461['parse'](_0x23cf25, _0x1eab29['response'], _0x531f1b);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x1eab29['onerror'] = function () {
                _0x531f1b && _0x531f1b();
                throw 'no\x20respons' + 'e';
            }, _0x1eab29['ontimeout'] = function () {
                _0x531f1b && _0x531f1b();
            }, _0x1eab29['onabort'] = function () {
                _0x531f1b && _0x531f1b();
            }, _0x1eab29['send'](null);
        }
    }
    const _0x129fef = window['WebAudioEn' + 'gine'] = new _0x3098d3();
    class _0x50a4cd {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x50a4cd()), this['_instance'];
        }
        ['initData']() {
            let _0x557200 = document['getElement' + 'ById']('layaCanvas');
            _0x557200 && (_0x557200['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x557200['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x3ed305) {
            let _0x3024fc = null;
            try {
                let _0x5cb904 = Laya['LocalStora' + 'ge']['getItem'](_0x3ed305);
                _0x3024fc = JSON['parse'](_0x5cb904);
            } catch (_0x472942) {
            }
            return _0x3024fc;
        }
        ['setStorage' + 'Sync'](_0x281ae8, _0x56ddae) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x281ae8, JSON['stringify'](_0x56ddae));
        }
        ['navigate'](_0x72876e, _0x4b26c4, _0x505a28) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x72876e, this['action_'] = _0x4b26c4, this['to_'] = _0x505a28, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x129fef['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x129fef['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x339c24) {
            YYGGames['showInters' + 'titial']({
                'beforeShowAd': () => {
                    window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
                },
                'afterShowAd': () => {
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x339c24 && _0x339c24();
                }
            });
        }
        ['showReward'](_0x45c24b, _0x3c34d5, _0x22e40f) {
            if (!YYGGames['canShowRew' + 'ard']()) {
                this['prompt']('No\x20Availab' + 'le\x20Video'), _0x22e40f && _0x22e40f();
                return;
            }
            YYGGames['showReward']({
                'beforeShowAd': () => {
                    window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
                },
                'afterShowAd': () => {
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                },
                'rewardComplete': () => {
                    _0x45c24b && _0x45c24b(), _0x22e40f && _0x22e40f(), _0x22e40f = null, _0x45c24b = null;
                },
                'rewardDismissed': () => {
                    _0x3c34d5 && (_0x3c34d5(), _0x22e40f && _0x22e40f(), _0x22e40f = null, _0x3c34d5 = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            });
        }
        ['initList'](_0x110b17) {
        }
        ['prompt'](_0x2c1869, _0x1d348c) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x8ad4af = Laya['stage']['designWidt' + 'h'], _0x48ea94 = Laya['stage']['designHeig' + 'ht'];
            var _0x5bfaa0 = window['innerWidth'], _0x1a28a9 = window['innerHeigh' + 't'], _0x5daf5c, _0x16e46f;
            _0x5bfaa0 / _0x1a28a9 > _0x8ad4af / _0x48ea94 ? (_0x5daf5c = _0x1a28a9, _0x16e46f = _0x5daf5c * _0x8ad4af / _0x48ea94) : (_0x16e46f = _0x5bfaa0, _0x5daf5c = _0x16e46f * _0x48ea94 / _0x8ad4af), this['prompt_']['style']['width'] = _0x16e46f - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x2c1869, _0x1d348c = isNaN(_0x1d348c) ? 0x7d0 : _0x1d348c, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0xd58210 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0xd58210 + ('s\x20ease-in,' + '\x20opacity\x20') + _0xd58210 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x1d348c);
        }
        ['prompt0'](_0x211c5e, _0x4d2401 = 0xbb8) {
            if (!Laya)
                return;
            !this['labelInfo'] && (this['labelBg'] = new Laya['Box'](), this['labelBg']['bgColor'] = '#000000', this['labelBg']['alpha'] = 0.5, this['labelBg']['centerX'] = 0x0, this['labelBg']['centerY'] = -0x32, this['labelInfo'] = new Laya['Label'](), this['labelInfo']['align'] = 'center', this['labelInfo']['valign'] = 'middle', this['labelInfo']['color'] = '#ffffff', this['labelInfo']['fontSize'] = 0x1e, this['labelInfo']['centerX'] = 0x0, this['labelInfo']['centerY'] = -0x32, this['labelInfo']['zOrder'] = 0x174876e800), this['labelInfo']['width'] = null, this['labelInfo']['height'] = null, this['labelInfo']['wordWrap'] = ![], this['labelInfo']['visible'] = ![], this['labelInfo']['text'] = _0x211c5e, this['labelInfo']['height'] += 0x28, this['labelInfo']['width'] > Laya['stage']['width'] - 0x64 && (this['labelInfo']['width'] = Laya['stage']['width'] - 0x64, this['labelInfo']['wordWrap'] = !![]), this['labelBg']['visible'] = this['labelInfo']['visible'] = !![], Laya['stage']['addChild'](this['labelBg']), Laya['stage']['addChild'](this['labelInfo']), Laya['timer']['clear'](this, this['clearLabel']), this['labelBg']['width'] = this['labelInfo']['width'] + 0x14, this['labelBg']['height'] = this['labelInfo']['height'], Laya['timer']['once'](_0x4d2401, this, this['clearLabel']);
        }
        ['clearLabel']() {
            this['labelBg']['visible'] = this['labelInfo']['visible'] = ![];
        }
        ['getForgame' + 's']() {
            let _0x772d08 = YYGGames['forgames'] || [], _0x397e11 = _0x772d08['slice']();
            for (let _0x1e5233 = 0x0, _0x10ebd3 = _0x397e11['length']; _0x1e5233 < _0x10ebd3; _0x1e5233++) {
                const _0x300ccf = Math['floor'](Math['random']() * (_0x1e5233 + 0x1)), _0x1b1abe = _0x397e11[_0x300ccf];
                _0x397e11[_0x300ccf] = _0x397e11[_0x1e5233], _0x397e11[_0x1e5233] = _0x1b1abe;
            }
            return _0x397e11;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x165e3b = new Laya['Image']();
                _0x165e3b['skin'] = 'yad.png', _0x165e3b['zOrder'] = 0x30d40, window['yad'] = _0x165e3b;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x27ff38, _0x1b9e51) {
            !this['needStartU' + 'p'] && (_0x1b9e51 && _0x1b9e51());
            if (this['initialize' + 'd_'])
                return;
            _0x50a4cd['getInstanc' + 'e']()['showSplash'](), _0x50a4cd['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x10d0d2) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x10d0d2);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x5d85ea, _0x6bdcb9 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x5d85ea);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x32ce56) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x32ce56);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x53bac0 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x27ff38,
                    'config': _0x53bac0,
                    'complete': () => {
                        const _0x5518ee = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x5518ee) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0xa44943 => {
                                _0xa44943['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x1b9e51 && _0x1b9e51();
                    }
                });
            }));
        }
        ['showBanner'](_0x40006f) {
            _0x40006f ? YYGGames['showBanner'](_0x40006f) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            YYGGames['hideBanner']();
        }
        ['showSplash'](_0x4eb8df) {
            _0x4eb8df ? YYGGames['showSplash'](_0x4eb8df) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x2faf30, _0x2b0960) {
            !this['needStartU' + 'p'] && (_0x2b0960 && _0x2b0960());
            if (this['initialize' + 'd_'])
                return;
            _0x50a4cd['getInstanc' + 'e']()['showSplash'](), _0x50a4cd['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x4f3e0f) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x4f3e0f);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x44f3f0, _0x39487f = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x44f3f0);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x1411a7) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x1411a7);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x5146c9 => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x2faf30,
                    'config': _0x5146c9,
                    'complete': () => {
                        const _0x1792f7 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x1792f7) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x35bbaa => {
                                _0x35bbaa['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x2b0960 && _0x2b0960();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x330cde, _0x30f3e8) {
            !this['needStartU' + 'p'] && (_0x30f3e8 && _0x30f3e8());
            if (this['initialize' + 'd_'])
                return;
            _0x50a4cd['getInstanc' + 'e']()['showSplash'](), _0x50a4cd['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x506ccf) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x506ccf);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x55b62e) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x55b62e);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x1e9b96) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x511c1a => {
                YYGGames['startup']({
                    'channel': 0x5,
                    'appName': _0x330cde,
                    'config': _0x511c1a,
                    'complete': () => {
                        const _0x30b2ff = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x30b2ff) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x5af5d2 => {
                                _0x5af5d2['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x30f3e8 && _0x30f3e8();
                    }
                });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x2ed573 = {
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
            class _0x516bc8 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x50a4cd['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x393675 = new Laya['Prefab']();
            _0x393675['json'] = _0x2ed573, this['noVideoPer'] = _0x393675['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x516bc8);
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
            let _0xc8d173 = {
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
            class _0x2bb81f extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x50a4cd['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x5cf753 = new Laya['Prefab']();
            _0x5cf753['json'] = _0xc8d173, this['loadingPer'] = _0x5cf753['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x2bb81f);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x4299bf extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x130be2 = new Laya['List']();
            return _0x130be2['size'](0x320, 0x258), _0x130be2['itemRender'] = _0x4299bf, _0x130be2;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x278b6a = new Laya['Box']();
                return _0x278b6a['setSize'] = function () {
                }, _0x278b6a;
            }
            if (!this['_scrollLis' + 't']) {
                let _0x3e3bea = {
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
                                'skin': 'di2.png',
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
                                                'skin': 'di1.png',
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
                class _0xc8ad4b extends Laya['Script'] {
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
                            let _0x4b3414 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x4b3414);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x576df9 = _0x50a4cd['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x576df9['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x576df9)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0xe5f423, _0x4e9cd8) {
                        let _0x24ae18 = _0xe5f423['getChildBy' + 'Name']('thumb');
                        _0xe5f423['offAll'](), _0x24ae18['offAll'](), _0xe5f423['on'](Laya['Event']['MOUSE_OVER'], _0xe5f423, () => {
                            _0xe5f423['zOrder'] = 0x64;
                        }), _0xe5f423['on'](Laya['Event']['MOUSE_OUT'], _0xe5f423, () => {
                            _0xe5f423['zOrder'] = _0x4e9cd8;
                        }), _0x24ae18['on'](Laya['Event']['MOUSE_OVER'], _0xe5f423, () => {
                            _0x24ae18['scale'](1.1, 1.1), this['endAni']();
                        }), _0x24ae18['on'](Laya['Event']['MOUSE_OUT'], _0xe5f423, () => {
                            _0x24ae18['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x24ae18['on'](Laya['Event']['MOUSE_DOWN'], _0xe5f423, _0x266c14 => {
                            _0x266c14['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0xe5f423['dataSource']['id']);
                        });
                        let _0x24f416 = _0x24ae18['mask'];
                        _0xe5f423['width'] = this['sizeTran'][0x0] + 0x14, _0xe5f423['height'] = this['sizeTran'][0x1] + 0x14, _0xe5f423['x'] = (this['sizeTran'][0x0] + 0x14) * _0x4e9cd8;
                        if (this['sizeTran'][0x2])
                            _0x24f416['width'] = _0x24ae18['width'] = this['sizeTran'][0x0], _0x24f416['height'] = _0x24ae18['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x2389f5 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x24ae18['width'] = 0xc8 / _0x2389f5, _0x24ae18['height'] = 0x96 / _0x2389f5, _0x24f416['width'] = this['sizeTran'][0x0], _0x24f416['height'] = this['sizeTran'][0x1];
                        }
                        _0x24f416['x'] = _0x24ae18['width'] / 0x2, _0x24f416['y'] = _0x24ae18['height'] / 0x2;
                    }
                    ['setSize'](_0x532db6, _0x49b950, _0x83dfb8 = ![]) {
                        this['sizeTran'] = [
                            _0x532db6,
                            _0x49b950,
                            _0x83dfb8
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x532db6 + 0x14) * 0x4, this['owner']['height'] = _0x49b950 + 0x14, this['img_ListBg']['width'] = (_0x532db6 + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0x49b950 + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x2d913a) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x4d9b14 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x4d9b14);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x1e5420 = new Laya['Prefab']();
                _0x1e5420['json'] = _0x3e3bea, this['_scrollLis' + 't'] = _0x1e5420['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0xc8ad4b), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0xc8ad4b)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0xc8ad4b));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x419cb7 = new Laya['Box']();
                return _0x419cb7['setSpaceX'] = _0x419cb7['setSize'] = function () {
                }, _0x419cb7;
            }
            if (!this['_box_adTwo']) {
                let _0x5b4cbc = {
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
                                'skin': 'di1.png',
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
                                                'skin': 'di1.png',
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
                                'skin': 'di1.png',
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
                                                'skin': 'di1.png',
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
                class _0x459499 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x378bac = _0x50a4cd['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x378bac['length'])
                            return;
                        let _0x3f3471 = JSON['parse'](JSON['stringify'](_0x378bac));
                        if (this['imgArr']['length']) {
                            let _0x5b4edf = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x5b4edf);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x3f3471[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x3f3471[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x2148c8 => {
                            _0x2148c8['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3f3471[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x56e760 => {
                            _0x56e760['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3f3471[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x3cd5fe) {
                        this['spaceNum'] = _0x3cd5fe, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x14d82c = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x14d82c);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0xb69c58, _0xf1ac5c, _0x5c6d6e = ![]) {
                        this['sizeTran'] = [
                            _0xb69c58,
                            _0xf1ac5c,
                            _0x5c6d6e
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0xb69c58 + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0xf1ac5c + 0x14;
                            if (_0x5c6d6e)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0xb69c58, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0xf1ac5c;
                            else {
                                let _0x187e38 = 0xc8 / _0xb69c58 < 0x96 / _0xf1ac5c ? 0xc8 / _0xb69c58 : 0x96 / _0xf1ac5c;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x187e38, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x187e38, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0xb69c58, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0xf1ac5c;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x298087 = new Laya['Prefab']();
                _0x298087['json'] = _0x5b4cbc, this['_box_adTwo'] = _0x298087['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x459499), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x459499)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x459499)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x459499)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x459499));
            }
            return this['_box_adTwo'];
        }
    }
    _0x50a4cd['_instance'] = null, window['platform'] = _0x50a4cd;
    class _0x399aa2 {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x399aa2['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x399aa2['_inst'] && new _0x399aa2(), _0x399aa2['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x4eaa80 = new Laya['Box']();
                return _0x4eaa80['setSpaceX'] = _0x4eaa80['setSize'] = function () {
                }, _0x4eaa80;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x31cd09 = new Laya['Image']();
                _0x31cd09['name'] = 'leftAdBg', _0x31cd09['sizeGrid'] = '30,30,30,3' + '0', _0x31cd09['size'](0xdc, 0xaa), _0x31cd09['skin'] = 'di1.png';
                let _0x4d00e3 = new Laya['Image']();
                _0x4d00e3['name'] = 'leftAdMask', _0x4d00e3['size'](0xc8, 0x96), _0x4d00e3['sizeGrid'] = '30,30,30,3' + '0', _0x4d00e3['anchorX'] = _0x4d00e3['anchorY'] = 0.5, _0x4d00e3['skin'] = 'di1.png';
                let _0x19b316 = new Laya['Image']();
                _0x19b316['name'] = 'leftAd', _0x19b316['size'](0xc8, 0x96), _0x19b316['anchorX'] = _0x19b316['anchorY'] = 0.5, _0x19b316['skin'] = '', _0x19b316['mask'] = _0x4d00e3, _0x31cd09['addChild'](_0x19b316), _0x31cd09['pos'](0x0, 0x0), _0x19b316['pos'](_0x31cd09['width'] / 0x2, _0x31cd09['height'] / 0x2), _0x4d00e3['pos'](_0x19b316['width'] / 0x2, _0x19b316['height'] / 0x2);
                let _0x17ea91 = new Laya['Image']();
                _0x17ea91['name'] = 'rightAdBg', _0x17ea91['sizeGrid'] = '30,30,30,3' + '0', _0x17ea91['size'](0xdc, 0xaa), _0x17ea91['skin'] = 'di1.png';
                let _0x498bab = new Laya['Image']();
                _0x498bab['name'] = 'rightAdMas' + 'k', _0x498bab['size'](0xc8, 0x96), _0x498bab['sizeGrid'] = '30,30,30,3' + '0', _0x498bab['anchorX'] = _0x498bab['anchorY'] = 0.5, _0x498bab['skin'] = 'di1.png';
                let _0x903dd0 = new Laya['Image']();
                _0x903dd0['name'] = 'rightAd', _0x903dd0['size'](0xc8, 0x96), _0x903dd0['anchorX'] = _0x903dd0['anchorY'] = 0.5, _0x903dd0['skin'] = '', _0x903dd0['mask'] = _0x498bab, _0x17ea91['addChild'](_0x903dd0), _0x17ea91['pos'](_0x31cd09['width'], 0x0), _0x903dd0['pos'](_0x17ea91['width'] / 0x2, _0x17ea91['height'] / 0x2), _0x498bab['pos'](_0x903dd0['width'] / 0x2, _0x903dd0['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x31cd09['width'] + _0x17ea91['width'], this['_box_adTwo' + '0']['addChild'](_0x31cd09), this['_box_adTwo' + '0']['addChild'](_0x17ea91), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x4d0d7e = _0x50a4cd['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x4d0d7e['length'])
                    return;
                let _0x2b5138 = JSON['parse'](JSON['stringify'](_0x4d0d7e));
                _0x19b316['offAll'](), _0x903dd0['offAll'](), _0x19b316['skin'] = _0x2b5138[0x0]['thumb'], _0x903dd0['skin'] = _0x2b5138[0x1]['thumb'], _0x19b316['on'](Laya['Event']['MOUSE_DOWN'], this, _0x45a6f4 => {
                    _0x45a6f4['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x2b5138[0x0]['id']);
                }), _0x903dd0['on'](Laya['Event']['MOUSE_DOWN'], this, _0x16fbd3 => {
                    _0x16fbd3['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x2b5138[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x526954 = 0xc8, _0x8e8373 = 0x96, _0x1a375c = ![], _0x2a98a7 = !![]) {
            let _0x496a2f = 0x1;
            _0x526954 / 0xc8 > _0x8e8373 / 0x96 ? _0x496a2f = _0x526954 / 0xc8 : _0x496a2f = _0x8e8373 / 0x96;
            let _0x8f7c4e = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x4eb8a9 = this['getChildBy' + 'Name']('leftAdBg'), _0x2da9dd = this['getChildBy' + 'Name']('rightAdBg'), _0x1c83d8 = _0x4eb8a9['getChildBy' + 'Name']('leftAd'), _0x23e5f8 = _0x2da9dd['getChildBy' + 'Name']('rightAd');
                _0x2a98a7 && (_0x4eb8a9['size'](0xdc, 0xaa), _0x2da9dd['size'](0xdc, 0xaa), _0x1c83d8['size'](0xc8, 0x96), _0x23e5f8['size'](0xc8, 0x96), _0x1c83d8['mask']['size'](0xc8, 0x96), _0x23e5f8['mask']['size'](0xc8, 0x96), _0x4eb8a9['scale'](0x1, 0x1), _0x2da9dd['scale'](0x1, 0x1), _0x1c83d8['scale'](0x1, 0x1), _0x23e5f8['scale'](0x1, 0x1), _0x1c83d8['mask']['scale'](0x1, 0x1), _0x23e5f8['mask']['scale'](0x1, 0x1));
                let _0x16a3b5 = 0xc8 * _0x8e8373 / _0x526954;
                _0x4eb8a9['size'](_0x8f7c4e + 0x14, _0x16a3b5 + 0x14), _0x2da9dd['size'](_0x8f7c4e + 0x14, _0x16a3b5 + 0x14), _0x1c83d8['mask']['size'](_0x8f7c4e, _0x16a3b5), _0x23e5f8['mask']['size'](_0x8f7c4e, _0x16a3b5), !_0x1a375c ? (_0x1c83d8['size'](_0x8f7c4e, _0x16a3b5), _0x23e5f8['size'](_0x8f7c4e, _0x16a3b5)) : (_0x1c83d8['size'](0xc8 * _0x496a2f, 0x96 * _0x496a2f), _0x23e5f8['size'](0xc8 * _0x496a2f, 0x96 * _0x496a2f)), _0x1c83d8['pos'](_0x4eb8a9['width'] / 0x2, _0x4eb8a9['height'] / 0x2), _0x1c83d8['mask']['pos'](_0x1c83d8['width'] / 0x2, _0x1c83d8['height'] / 0x2), _0x23e5f8['pos'](_0x2da9dd['width'] / 0x2, _0x2da9dd['height'] / 0x2), _0x23e5f8['mask']['pos'](_0x23e5f8['width'] / 0x2, _0x23e5f8['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else {
                if (this['name'] == '_scrollLis' + 't') {
                    this['sizeArr'] = [
                        _0x526954,
                        _0x8e8373,
                        _0x1a375c,
                        _0x2a98a7
                    ];
                    let _0x2a4cea = 0x1;
                    this['sizeArr'][0x0] / 0xc8 > this['sizeArr'][0x1] / 0x96 ? _0x2a4cea = this['sizeArr'][0x0] / 0xc8 : _0x2a4cea = this['sizeArr'][0x1] / 0x96;
                    let _0x439f86 = 0xc8, _0x58806f = 0xc8 * this['sizeArr'][0x1] / this['sizeArr'][0x0];
                    !this['sizeArr'][0x2] ? (this['height'] = _0x58806f + 0x14, this['getChildBy' + 'Name']('listAd')['height'] = _0x58806f + 0x14) : (this['height'] = (_0x58806f + 0x14) * _0x2a4cea, this['getChildBy' + 'Name']('listAd')['height'] = (_0x58806f + 0x14) * _0x2a4cea);
                }
            }
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x38255a = new Laya['Box']();
                return _0x38255a['setSize'] = function () {
                }, _0x38255a;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = 'di2.png', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x18eaf5 extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = 'di1.png', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x34db88 = new Laya['List']();
                _0x34db88['hScrollBar' + 'Skin'] = '\x20', _0x34db88['name'] = 'listAd', _0x34db88['anchorX'] = _0x34db88['anchorY'] = 0.5, _0x34db88['size'](0x370, 0xaa), _0x34db88['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x34db88['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x34db88['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x34db88['itemRender'] = _0x18eaf5, _0x34db88['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x34db88), _0x34db88['centerX'] = _0x34db88['centerY'] = 0x0;
                let _0x1d4649 = _0x50a4cd['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x1d4649['length'])
                    return;
                let _0x29cd9c = JSON['parse'](JSON['stringify'](_0x1d4649));
                _0x29cd9c = _0x29cd9c['concat'](_0x29cd9c['slice'](0x0, 0x4)), _0x34db88['array'] = _0x29cd9c, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x34db88['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x24d022, _0x8376a9) {
            let _0x308b31 = _0x24d022['dataSource'], _0x404959 = _0x24d022['getChildBy' + 'Name']('img'), _0x1c487c = _0x404959['mask'];
            _0x404959['skin'] = _0x308b31['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x24d022['size'](0xdc, 0xaa), _0x24d022['img']['size'](0xc8, 0x96), _0x1c487c['size'](0xc8, 0x96), _0x24d022['scale'](0x1, 0x1), _0x24d022['scale'](0x1, 0x1), _0x1c487c['scale'](0x1, 0x1));
            _0x24d022['offAll'](), _0x404959['offAll'](), _0x24d022['on'](Laya['Event']['MOUSE_OVER'], _0x24d022, () => {
                _0x24d022['zOrder'] = 0x64;
            }), _0x24d022['on'](Laya['Event']['MOUSE_OUT'], _0x24d022, () => {
                _0x24d022['zOrder'] = _0x8376a9;
            }), _0x404959['on'](Laya['Event']['MOUSE_OVER'], _0x24d022, () => {
                _0x404959['scale'](_0x404959['scaleX'] + 0.1, _0x404959['scaleY'] + 0.1), this['endAni']();
            }), _0x404959['on'](Laya['Event']['MOUSE_OUT'], _0x24d022, () => {
                _0x404959['scale'](_0x404959['scaleX'] - 0.1, _0x404959['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x404959['on'](Laya['Event']['MOUSE_DOWN'], _0x24d022, _0xbefc04 => {
                _0xbefc04['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x308b31['id']);
            });
            let _0x7a8fbe = 0x1;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x7a8fbe = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x7a8fbe = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x5810a3 = 0xc8, _0x4e306a = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            !this['_scrollLis' + 't']['sizeArr'][0x2] ? (_0x24d022['img']['size'](_0x5810a3, _0x4e306a), _0x24d022['size'](_0x5810a3 + 0x14, _0x4e306a + 0x14), _0x1c487c['size'](_0x5810a3, _0x4e306a)) : (_0x24d022['img']['size'](_0x5810a3 * _0x7a8fbe, _0x4e306a * _0x7a8fbe), _0x24d022['size']((_0x5810a3 + 0x14) * _0x7a8fbe, (_0x4e306a + 0x14) * _0x7a8fbe), _0x1c487c['size'](_0x5810a3 * _0x7a8fbe, _0x4e306a * _0x7a8fbe)), _0x404959['pos'](_0x24d022['width'] / 0x2, _0x24d022['height'] / 0x2), _0x1c487c['pos'](_0x404959['width'] / 0x2, _0x404959['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x55e934 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x55e934['scrollBar']['value'] += 0x1, _0x55e934['scrollBar']['value'] >= _0x55e934['scrollBar']['max'] && (_0x55e934['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x6e2237) {
            if (_0x6e2237['name'] == '_box_adTwo' + '0') {
                let _0x27e115 = _0x6e2237['getChildBy' + 'Name']('leftAdBg'), _0x234264 = _0x6e2237['getChildBy' + 'Name']('rightAdBg'), _0x6ee433 = _0x50a4cd['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x6ee433['length'])
                    return;
                let _0x507acf = JSON['parse'](JSON['stringify'](_0x6ee433));
                _0x27e115['offAll'](), _0x234264['offAll'](), _0x27e115['getChildBy' + 'Name']('leftAd')['skin'] = _0x507acf[0x0]['thumb'], _0x234264['getChildBy' + 'Name']('rightAd')['skin'] = _0x507acf[0x1]['thumb'], _0x27e115['on'](Laya['Event']['MOUSE_DOWN'], _0x6e2237, _0x58c196 => {
                    _0x58c196['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x507acf[0x0]['id']);
                }), _0x234264['on'](Laya['Event']['MOUSE_DOWN'], _0x6e2237, _0x23efbe => {
                    _0x23efbe['stopPropag' + 'ation'](), _0x50a4cd['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x507acf[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x216279) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x2df55e = this['getChildBy' + 'Name']('leftAdBg'), _0x4194f2 = this['getChildBy' + 'Name']('rightAdBg');
                _0x4194f2['pos'](_0x2df55e['width'] + _0x216279, 0x0), this['width'] = _0x2df55e['width'] + _0x4194f2['width'] + _0x216279, this['spaceXNum'] = _0x216279;
            }
        }
    }
    _0x399aa2['_inst'] = null;
}();