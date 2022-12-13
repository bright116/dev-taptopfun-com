!function () {
    class _0x55f1b1 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x3d6365, _0x46d1fa) => {
                try {
                    this['musicAudio'] = new _0x306f5d(), this['soundAudio'] = new _0x306f5d(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x3d6365(!![]);
                } catch (_0x5d0391) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x5d0391), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x3d6365(![]);
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
        set ['muted'](_0x39bffa) {
            this['isMuted'] = _0x39bffa, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x2af10c) {
            this['pauseSound'] = _0x2af10c, this['pauseMusic'] = _0x2af10c, !_0x2af10c && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x195e3c) {
            this['bePauseSou' + 'nd'] = _0x195e3c;
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
        set ['pauseMusic'](_0x393b6a) {
            this['bePauseMus' + 'ic'] = _0x393b6a;
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
        ['parse'](_0x50c31a, _0x2f2835, _0x41fe17) {
            this['soundAudio']['parse'](_0x50c31a, _0x2f2835);
        }
        ['playMusic'](_0x47b966) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x47b966);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0xc7e898) {
            this['soundAudio']['stop'](_0xc7e898);
        }
        set ['musicVolum' + 'e'](_0xa2e64a) {
            this['musicAudio']['musicVolum' + 'e'] = _0xa2e64a;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x11ef61, _0x19d2f2 = ![], _0x125d6d = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0x11ef61, _0x19d2f2, _0x125d6d);
        }
    }
    class _0x272f27 {
    }
    class _0x306f5d {
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
            const _0x3ecca1 = this['_audioInst' + 'ances']['values']();
            for (const _0x47b053 of _0x3ecca1) {
                const _0xd0594e = _0x47b053['instance'];
                if (_0xd0594e['source']['buffer'] && !_0xd0594e['source']['loop']) {
                    try {
                        _0xd0594e['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x491e74) {
                        _0xd0594e['source']['disconnect']();
                    }
                    _0xd0594e['source']['onended'] = function () {
                    }, _0xd0594e['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x370ac4 = this['_audioInst' + 'ances']['values']();
            for (const _0x2d1f1c of _0x370ac4) {
                const _0x542e4a = _0x2d1f1c['instance'];
                if (_0x542e4a['source']['buffer']) {
                    try {
                        _0x542e4a['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x53805f) {
                        _0x542e4a['source']['disconnect']();
                    }
                    _0x542e4a['source']['onended'] = function () {
                    }, _0x542e4a['setup']();
                }
            }
        }
        ['stop'](_0x4a4930) {
            if (this['_audioInst' + 'ances']['has'](_0x4a4930)) {
                const _0x296d40 = this['_audioInst' + 'ances']['get'](_0x4a4930);
                this['_stopSound'](_0x296d40);
            }
        }
        ['_stopSound'](_0x547c47) {
            const _0x113b0c = _0x547c47['instance'];
            if (_0x113b0c['source']['buffer']) {
                try {
                    _0x113b0c['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x3e9677) {
                    _0x113b0c['source']['disconnect']();
                }
                _0x113b0c['source']['onended'] = function () {
                }, _0x113b0c['setup']();
            }
        }
        ['playMusic'](_0x18d053) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x18d053) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x18d053), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x18d053, !![])) : this['downloadAr' + 'rayBuffer'](_0x18d053, () => {
                this['playMusic'](_0x18d053);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x467ae6) {
            this['_musicVolu' + 'me'] = _0x467ae6, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0x4d0c6b, _0x56d2c0 = ![], _0x4bdc8a = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0x4d0c6b)) {
                const _0x23ba58 = this['_audioInst' + 'ances']['get'](_0x4d0c6b), _0x39764c = _0x23ba58['instance'];
                if (_0x4bdc8a && !_0x39764c['ended'])
                    return;
                this['stop'](_0x4d0c6b);
                if (_0x23ba58['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x56d2c0)
                            return;
                        _0x39764c['playBuffer'](this['context']['currentTim' + 'e'], _0x23ba58['buffer']), _0x39764c['source']['loop'] = _0x56d2c0;
                    } catch (_0x12ad18) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x12ad18);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0x4d0c6b, () => {
                    this['play'](_0x4d0c6b, _0x56d2c0);
                });
        }
        ['load'](_0x51708b, _0x46e563) {
            let _0x33af13 = _0x51708b['length'], _0x5e06fe = 0x0;
            for (let _0x3727ab = 0x0; _0x3727ab < _0x51708b['length']; _0x3727ab++) {
                const _0x5a6fe2 = _0x51708b[_0x3727ab];
                this['downloadAr' + 'rayBuffer'](_0x5a6fe2, () => {
                    _0x5e06fe++, _0x5e06fe >= _0x33af13 && (_0x46e563 && _0x46e563());
                });
            }
        }
        ['setThreeD'](_0x3ec351) {
            if (this['_audioInst' + 'ances']['has'](_0x3ec351)) {
                const _0x4f87a1 = this['_audioInst' + 'ances']['get'](_0x3ec351);
                _0x4f87a1['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x3538c8 = this['context'];
            const _0x564bd4 = {
                'gain': _0x3538c8['createGain'](),
                'panner': _0x3538c8['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x1ca109, _0x345423, _0x553461) {
                    this['source']['buffer'] = _0x345423;
                    var _0x1dd389 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x1dd389['setup'](), _0x1dd389['ended'] = !![];
                    }, this['source']['start'](_0x1ca109, _0x553461);
                },
                'setup': function () {
                    this['source'] = _0x3538c8['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x564bd4['panner']['rolloffFac' + 'tor'] = 0x0, _0x564bd4['gain']['connect'](this['context']['destinatio' + 'n']), _0x564bd4['setup'](), _0x564bd4;
        }
        ['parse'](_0x10345a, _0x46a4f8, _0x41dbe8) {
            const _0x38c490 = new _0x272f27();
            _0x38c490['url'] = _0x10345a, _0x38c490['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x10345a, _0x38c490), this['context']['decodeAudi' + 'oData'](_0x46a4f8, function (_0xc7a911) {
                _0x38c490['buffer'] = _0xc7a911, _0x41dbe8 && _0x41dbe8();
            }, function (_0x4ea64f) {
                _0x38c490['error'] = !![], _0x41dbe8 && _0x41dbe8(), console['log']('Decode\x20err' + 'or.' + _0x38c490['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x26d7dd, _0xcc5b85) {
            if (this['_audioInst' + 'ances']['has'](_0x26d7dd)) {
                _0xcc5b85 && _0xcc5b85();
                return;
            }
            const _0x55d603 = this;
            var _0x1ffaed = new XMLHttpRequest();
            _0x1ffaed['open']('GET', _0x26d7dd, !![]), _0x1ffaed['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x1ffaed['onload'] = function () {
                if (_0x1ffaed['status'] === 0xc8 || _0x1ffaed['status'] === 0x0)
                    _0x55d603['parse'](_0x26d7dd, _0x1ffaed['response'], _0xcc5b85);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x1ffaed['onerror'] = function () {
                _0xcc5b85 && _0xcc5b85();
                throw 'no\x20respons' + 'e';
            }, _0x1ffaed['ontimeout'] = function () {
                _0xcc5b85 && _0xcc5b85();
            }, _0x1ffaed['onabort'] = function () {
                _0xcc5b85 && _0xcc5b85();
            }, _0x1ffaed['send'](null);
        }
    }
    const _0x2bda53 = window['WebAudioEn' + 'gine'] = new _0x55f1b1();
    class _0x11f49c {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x11f49c()), this['_instance'];
        }
        ['initData']() {
            let _0x1b865f = document['getElement' + 'ById']('layaCanvas');
            _0x1b865f && (_0x1b865f['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x1b865f['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x8fabb) {
            let _0x3bfb97 = null;
            try {
                let _0x2a58b9 = Laya['LocalStora' + 'ge']['getItem'](_0x8fabb);
                _0x3bfb97 = JSON['parse'](_0x2a58b9);
            } catch (_0x349155) {
            }
            return _0x3bfb97;
        }
        ['setStorage' + 'Sync'](_0x3acac2, _0x28b0b7) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x3acac2, JSON['stringify'](_0x28b0b7));
        }
        ['navigate'](_0x1420dd, _0x1a9d3e, _0x105523) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x1420dd, this['action_'] = _0x1a9d3e, this['to_'] = _0x105523, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x2bda53['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x2bda53['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x37eb75) {
            YYGGames['showInters' + 'titial']({
                'beforeShowAd': () => {
                    window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
                },
                'afterShowAd': () => {
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x37eb75 && _0x37eb75();
                }
            });
        }
        ['showReward'](_0x32faa7, _0x4e6aa7, _0x4368b0) {
            if (!YYGGames['canShowRew' + 'ard']()) {
                this['prompt']('No\x20Availab' + 'le\x20Video'), _0x4368b0 && _0x4368b0();
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
                    _0x32faa7 && _0x32faa7(), _0x4368b0 && _0x4368b0(), _0x4368b0 = null, _0x32faa7 = null;
                },
                'rewardDismissed': () => {
                    _0x4e6aa7 && (_0x4e6aa7(), _0x4368b0 && _0x4368b0(), _0x4368b0 = null, _0x4e6aa7 = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            });
        }
        ['initList'](_0x3e12f2) {
        }
        ['prompt'](_0x53f967, _0x2436bc) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x47e0c6 = Laya['stage']['designWidt' + 'h'], _0x30a671 = Laya['stage']['designHeig' + 'ht'];
            var _0xfc3a51 = window['innerWidth'], _0x300f85 = window['innerHeigh' + 't'], _0x1a8ff1, _0x1f6ad7;
            _0xfc3a51 / _0x300f85 > _0x47e0c6 / _0x30a671 ? (_0x1a8ff1 = _0x300f85, _0x1f6ad7 = _0x1a8ff1 * _0x47e0c6 / _0x30a671) : (_0x1f6ad7 = _0xfc3a51, _0x1a8ff1 = _0x1f6ad7 * _0x30a671 / _0x47e0c6), this['prompt_']['style']['width'] = _0x1f6ad7 - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x53f967, _0x2436bc = isNaN(_0x2436bc) ? 0x7d0 : _0x2436bc, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x42cfe9 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x42cfe9 + ('s\x20ease-in,' + '\x20opacity\x20') + _0x42cfe9 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x2436bc);
        }
        ['prompt0'](_0x5eee8e, _0x1187f8 = 0xbb8) {
            !this['labelInfo'] && (this['labelBg'] = new Laya['Box'](), this['labelInfo'] = new Laya['Label'](), this['labelInfo']['align'] = 'center', this['labelInfo']['valign'] = 'middle', this['labelInfo']['bgColor'] = '#00C3D5', this['labelInfo']['color'] = '#ffffff', this['labelInfo']['fontSize'] = 0x2d, this['labelInfo']['centerX'] = 0x0, this['labelInfo']['centerY'] = -0x32, this['labelInfo']['zOrder'] = 0x174876e800), this['labelInfo']['width'] = null, this['labelInfo']['height'] = null, this['labelInfo']['wordWrap'] = ![], this['labelInfo']['visible'] = ![], this['labelInfo']['text'] = _0x5eee8e, this['labelInfo']['height'] += 0x28, this['labelInfo']['width'] > Laya['stage']['width'] - 0x64 && (this['labelInfo']['width'] = Laya['stage']['width'] - 0x64, this['labelInfo']['wordWrap'] = !![]), this['labelBg']['visible'] = this['labelInfo']['visible'] = !![], Laya['stage']['addChild'](this['labelBg']), Laya['stage']['addChild'](this['labelInfo']), Laya['timer']['clear'](this, this['clearLabel']), this['labelInfo']['width'] += 0x28, Laya['timer']['once'](_0x1187f8, this, this['clearLabel']);
        }
        ['clearLabel']() {
            this['labelInfo'] && this['labelBg'] && (this['labelBg']['visible'] = this['labelInfo']['visible'] = ![]);
        }
        ['getForgame' + 's']() {
            let _0xb50d88 = YYGGames['forgames'] || [], _0x230140 = _0xb50d88['slice']();
            for (let _0xb4447c = 0x0, _0x4598be = _0x230140['length']; _0xb4447c < _0x4598be; _0xb4447c++) {
                const _0x593eab = Math['floor'](Math['random']() * (_0xb4447c + 0x1)), _0x25536c = _0x230140[_0x593eab];
                _0x230140[_0x593eab] = _0x230140[_0xb4447c], _0x230140[_0xb4447c] = _0x25536c;
            }
            return _0x230140;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x2fb238 = new Laya['Image']();
                _0x2fb238['skin'] = 'yad.png', _0x2fb238['zOrder'] = 0x30d40, window['yad'] = _0x2fb238;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x2d02ba, _0x906059) {
            !this['needStartU' + 'p'] && (_0x906059 && _0x906059());
            if (this['initialize' + 'd_'])
                return;
            _0x11f49c['getInstanc' + 'e']()['showSplash'](), _0x11f49c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0xd7654a) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0xd7654a);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x4cd7ea, _0x248407 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x4cd7ea);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x4691f9) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x4691f9);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x321f64 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x2d02ba,
                    'config': _0x321f64,
                    'complete': () => {
                        const _0x306f32 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x306f32) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x1d4887 => {
                                _0x1d4887['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x906059 && _0x906059();
                    }
                });
            }));
        }
        ['showBanner'](_0x2fb696) {
            _0x2fb696 ? YYGGames['showBanner'](_0x2fb696) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            YYGGames['hideBanner']();
        }
        ['showSplash'](_0x2aa797) {
            _0x2aa797 ? YYGGames['showSplash'](_0x2aa797) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x5a0bdb, _0x135fcc) {
            !this['needStartU' + 'p'] && (_0x135fcc && _0x135fcc());
            if (this['initialize' + 'd_'])
                return;
            _0x11f49c['getInstanc' + 'e']()['showSplash'](), _0x11f49c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x503be8) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x503be8);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x134c95, _0x17c077 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x134c95);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x5e5539) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x5e5539);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x2a05d6 => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x5a0bdb,
                    'config': _0x2a05d6,
                    'complete': () => {
                        const _0x85e2fc = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x85e2fc) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x42a466 => {
                                _0x42a466['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x135fcc && _0x135fcc();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x3fc2a9, _0xf4903f) {
            !this['needStartU' + 'p'] && (_0xf4903f && _0xf4903f());
            if (this['initialize' + 'd_'])
                return;
            _0x11f49c['getInstanc' + 'e']()['showSplash'](), _0x11f49c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x5e0ec3) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x5e0ec3);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x5bc223) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x5bc223);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0xf9dc40) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x4ccdc8 => {
                YYGGames['startup']({
                    'channel': 0x5,
                    'appName': _0x3fc2a9,
                    'config': _0x4ccdc8,
                    'complete': () => {
                        const _0x142a2d = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = _0x12412b['inst']['scrollList'](), window['box_adTwo'] = _0x12412b['inst']['box_adTwo']();
                        switch (_0x142a2d) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x586204 => {
                                _0x586204['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0xf4903f && _0xf4903f();
                    }
                });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x19989d = {
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
            class _0x3fbcac extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x11f49c['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0xbaaee7 = new Laya['Prefab']();
            _0xbaaee7['json'] = _0x19989d, this['noVideoPer'] = _0xbaaee7['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x3fbcac);
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
            let _0x5393ea = {
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
            class _0x2f883b extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x11f49c['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x4e75e2 = new Laya['Prefab']();
            _0x4e75e2['json'] = _0x5393ea, this['loadingPer'] = _0x4e75e2['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x2f883b);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x771086 extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x5256a2 = new Laya['List']();
            return _0x5256a2['size'](0x320, 0x258), _0x5256a2['itemRender'] = _0x771086, _0x5256a2;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x3c04ad = new Laya['Box']();
                return _0x3c04ad['setSize'] = function () {
                }, _0x3c04ad;
            }
            if (!this['_scrollLis' + 't']) {
                let _0x30c5c1 = {
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
                class _0xbed8d2 extends Laya['Script'] {
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
                            let _0x5adeb3 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x5adeb3);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x409d31 = _0x11f49c['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x409d31['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x409d31)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x1eae1d, _0x11a25e) {
                        let _0x1dd716 = _0x1eae1d['getChildBy' + 'Name']('thumb');
                        _0x1eae1d['offAll'](), _0x1dd716['offAll'](), _0x1eae1d['on'](Laya['Event']['MOUSE_OVER'], _0x1eae1d, () => {
                            _0x1eae1d['zOrder'] = 0x64;
                        }), _0x1eae1d['on'](Laya['Event']['MOUSE_OUT'], _0x1eae1d, () => {
                            _0x1eae1d['zOrder'] = _0x11a25e;
                        }), _0x1dd716['on'](Laya['Event']['MOUSE_OVER'], _0x1eae1d, () => {
                            _0x1dd716['scale'](1.1, 1.1), this['endAni']();
                        }), _0x1dd716['on'](Laya['Event']['MOUSE_OUT'], _0x1eae1d, () => {
                            _0x1dd716['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x1dd716['on'](Laya['Event']['MOUSE_DOWN'], _0x1eae1d, _0x17e58c => {
                            _0x17e58c['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x1eae1d['dataSource']['id']);
                        });
                        let _0x43eb6f = _0x1dd716['mask'];
                        _0x1eae1d['width'] = this['sizeTran'][0x0] + 0x14, _0x1eae1d['height'] = this['sizeTran'][0x1] + 0x14, _0x1eae1d['x'] = (this['sizeTran'][0x0] + 0x14) * _0x11a25e;
                        if (this['sizeTran'][0x2])
                            _0x43eb6f['width'] = _0x1dd716['width'] = this['sizeTran'][0x0], _0x43eb6f['height'] = _0x1dd716['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x1cd962 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x1dd716['width'] = 0xc8 / _0x1cd962, _0x1dd716['height'] = 0x96 / _0x1cd962, _0x43eb6f['width'] = this['sizeTran'][0x0], _0x43eb6f['height'] = this['sizeTran'][0x1];
                        }
                        _0x43eb6f['x'] = _0x1dd716['width'] / 0x2, _0x43eb6f['y'] = _0x1dd716['height'] / 0x2;
                    }
                    ['setSize'](_0x1288f0, _0x37718e, _0x46922a = ![]) {
                        this['sizeTran'] = [
                            _0x1288f0,
                            _0x37718e,
                            _0x46922a
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x1288f0 + 0x14) * 0x4, this['owner']['height'] = _0x37718e + 0x14, this['img_ListBg']['width'] = (_0x1288f0 + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0x37718e + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x347166) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x15607a = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x15607a);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x4aabfb = new Laya['Prefab']();
                _0x4aabfb['json'] = _0x30c5c1, this['_scrollLis' + 't'] = _0x4aabfb['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0xbed8d2), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0xbed8d2)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0xbed8d2));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x2f32d9 = new Laya['Box']();
                return _0x2f32d9['setSpaceX'] = _0x2f32d9['setSize'] = function () {
                }, _0x2f32d9;
            }
            if (!this['_box_adTwo']) {
                let _0x309b01 = {
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
                class _0xf37127 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x9d8cf9 = _0x11f49c['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x9d8cf9['length'])
                            return;
                        let _0x3bcbe5 = JSON['parse'](JSON['stringify'](_0x9d8cf9));
                        if (this['imgArr']['length']) {
                            let _0x396599 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x396599);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x3bcbe5[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x3bcbe5[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x44c14c => {
                            _0x44c14c['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3bcbe5[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x2db040 => {
                            _0x2db040['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3bcbe5[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x4f3539) {
                        this['spaceNum'] = _0x4f3539, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x32e8f0 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x32e8f0);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x1dc1a1, _0x287c94, _0x757ff6 = ![]) {
                        this['sizeTran'] = [
                            _0x1dc1a1,
                            _0x287c94,
                            _0x757ff6
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x1dc1a1 + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x287c94 + 0x14;
                            if (_0x757ff6)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x1dc1a1, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x287c94;
                            else {
                                let _0x262f60 = 0xc8 / _0x1dc1a1 < 0x96 / _0x287c94 ? 0xc8 / _0x1dc1a1 : 0x96 / _0x287c94;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x262f60, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x262f60, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x1dc1a1, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x287c94;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x269c05 = new Laya['Prefab']();
                _0x269c05['json'] = _0x309b01, this['_box_adTwo'] = _0x269c05['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0xf37127), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0xf37127)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0xf37127)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0xf37127)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0xf37127));
            }
            return this['_box_adTwo'];
        }
    }
    _0x11f49c['_instance'] = null, window['platform'] = _0x11f49c;
    class _0x12412b {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x12412b['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x12412b['_inst'] && new _0x12412b(), _0x12412b['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x8c44cb = new Laya['Box']();
                return _0x8c44cb['setSpaceX'] = _0x8c44cb['setSize'] = function () {
                }, _0x8c44cb;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x5e3907 = new Laya['Image']();
                _0x5e3907['name'] = 'leftAdBg', _0x5e3907['sizeGrid'] = '30,30,30,3' + '0', _0x5e3907['size'](0xdc, 0xaa), _0x5e3907['skin'] = 'di1.png';
                let _0x24a520 = new Laya['Image']();
                _0x24a520['name'] = 'leftAdMask', _0x24a520['size'](0xc8, 0x96), _0x24a520['sizeGrid'] = '30,30,30,3' + '0', _0x24a520['anchorX'] = _0x24a520['anchorY'] = 0.5, _0x24a520['skin'] = 'di1.png';
                let _0x2ae2a2 = new Laya['Image']();
                _0x2ae2a2['name'] = 'leftAd', _0x2ae2a2['size'](0xc8, 0x96), _0x2ae2a2['anchorX'] = _0x2ae2a2['anchorY'] = 0.5, _0x2ae2a2['skin'] = '', _0x2ae2a2['mask'] = _0x24a520, _0x5e3907['addChild'](_0x2ae2a2), _0x5e3907['pos'](0x0, 0x0), _0x2ae2a2['pos'](_0x5e3907['width'] / 0x2, _0x5e3907['height'] / 0x2), _0x24a520['pos'](_0x2ae2a2['width'] / 0x2, _0x2ae2a2['height'] / 0x2);
                let _0x5577b4 = new Laya['Image']();
                _0x5577b4['name'] = 'rightAdBg', _0x5577b4['sizeGrid'] = '30,30,30,3' + '0', _0x5577b4['size'](0xdc, 0xaa), _0x5577b4['skin'] = 'di1.png';
                let _0x43c15a = new Laya['Image']();
                _0x43c15a['name'] = 'rightAdMas' + 'k', _0x43c15a['size'](0xc8, 0x96), _0x43c15a['sizeGrid'] = '30,30,30,3' + '0', _0x43c15a['anchorX'] = _0x43c15a['anchorY'] = 0.5, _0x43c15a['skin'] = 'di1.png';
                let _0x276e99 = new Laya['Image']();
                _0x276e99['name'] = 'rightAd', _0x276e99['size'](0xc8, 0x96), _0x276e99['anchorX'] = _0x276e99['anchorY'] = 0.5, _0x276e99['skin'] = '', _0x276e99['mask'] = _0x43c15a, _0x5577b4['addChild'](_0x276e99), _0x5577b4['pos'](_0x5e3907['width'], 0x0), _0x276e99['pos'](_0x5577b4['width'] / 0x2, _0x5577b4['height'] / 0x2), _0x43c15a['pos'](_0x276e99['width'] / 0x2, _0x276e99['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x5e3907['width'] + _0x5577b4['width'], this['_box_adTwo' + '0']['addChild'](_0x5e3907), this['_box_adTwo' + '0']['addChild'](_0x5577b4), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x4b126a = _0x11f49c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x4b126a['length'])
                    return;
                let _0x39d84b = JSON['parse'](JSON['stringify'](_0x4b126a));
                _0x2ae2a2['offAll'](), _0x276e99['offAll'](), _0x2ae2a2['skin'] = _0x39d84b[0x0]['thumb'], _0x276e99['skin'] = _0x39d84b[0x1]['thumb'], _0x2ae2a2['on'](Laya['Event']['MOUSE_DOWN'], this, _0x5b545e => {
                    _0x5b545e['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x39d84b[0x0]['id']);
                }), _0x276e99['on'](Laya['Event']['MOUSE_DOWN'], this, _0x12da56 => {
                    _0x12da56['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x39d84b[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x1f88f8 = 0xc8, _0x17f136 = 0x96, _0x38b31d = ![], _0x3ef681 = !![]) {
            let _0x29f935 = 0x1;
            _0x1f88f8 / 0xc8 > _0x17f136 / 0x96 ? _0x29f935 = _0x1f88f8 / 0xc8 : _0x29f935 = _0x17f136 / 0x96;
            let _0x52ddcd = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x3901e1 = this['getChildBy' + 'Name']('leftAdBg'), _0x53ceee = this['getChildBy' + 'Name']('rightAdBg'), _0x4d0dc4 = _0x3901e1['getChildBy' + 'Name']('leftAd'), _0x290e2c = _0x53ceee['getChildBy' + 'Name']('rightAd');
                _0x3ef681 && (_0x3901e1['size'](0xdc, 0xaa), _0x53ceee['size'](0xdc, 0xaa), _0x4d0dc4['size'](0xc8, 0x96), _0x290e2c['size'](0xc8, 0x96), _0x4d0dc4['mask']['size'](0xc8, 0x96), _0x290e2c['mask']['size'](0xc8, 0x96), _0x3901e1['scale'](0x1, 0x1), _0x53ceee['scale'](0x1, 0x1), _0x4d0dc4['scale'](0x1, 0x1), _0x290e2c['scale'](0x1, 0x1), _0x4d0dc4['mask']['scale'](0x1, 0x1), _0x290e2c['mask']['scale'](0x1, 0x1));
                let _0x3e48a8 = 0xc8 * _0x17f136 / _0x1f88f8;
                _0x3901e1['size'](_0x52ddcd + 0x14, _0x3e48a8 + 0x14), _0x53ceee['size'](_0x52ddcd + 0x14, _0x3e48a8 + 0x14), _0x4d0dc4['mask']['size'](_0x52ddcd, _0x3e48a8), _0x290e2c['mask']['size'](_0x52ddcd, _0x3e48a8), !_0x38b31d ? (_0x4d0dc4['size'](_0x52ddcd, _0x3e48a8), _0x290e2c['size'](_0x52ddcd, _0x3e48a8)) : (_0x4d0dc4['size'](0xc8 * _0x29f935, 0x96 * _0x29f935), _0x290e2c['size'](0xc8 * _0x29f935, 0x96 * _0x29f935)), _0x4d0dc4['pos'](_0x3901e1['width'] / 0x2, _0x3901e1['height'] / 0x2), _0x4d0dc4['mask']['pos'](_0x4d0dc4['width'] / 0x2, _0x4d0dc4['height'] / 0x2), _0x290e2c['pos'](_0x53ceee['width'] / 0x2, _0x53ceee['height'] / 0x2), _0x290e2c['mask']['pos'](_0x290e2c['width'] / 0x2, _0x290e2c['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else {
                if (this['name'] == '_scrollLis' + 't') {
                    this['sizeArr'] = [
                        _0x1f88f8,
                        _0x17f136,
                        _0x38b31d,
                        _0x3ef681
                    ];
                    let _0x407e4a = 0x1;
                    this['sizeArr'][0x0] / 0xc8 > this['sizeArr'][0x1] / 0x96 ? _0x407e4a = this['sizeArr'][0x0] / 0xc8 : _0x407e4a = this['sizeArr'][0x1] / 0x96;
                    let _0x4cb08a = 0xc8, _0x100378 = 0xc8 * this['sizeArr'][0x1] / this['sizeArr'][0x0];
                    !this['sizeArr'][0x2] ? (this['height'] = _0x100378 + 0x14, this['getChildBy' + 'Name']('listAd')['height'] = _0x100378 + 0x14) : (this['height'] = (_0x100378 + 0x14) * _0x407e4a, this['getChildBy' + 'Name']('listAd')['height'] = (_0x100378 + 0x14) * _0x407e4a);
                }
            }
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (!YYGGames['canShowFor' + 'games']()) {
                let _0x4030f2 = new Laya['Box']();
                return _0x4030f2['setSize'] = function () {
                }, _0x4030f2;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = 'di2.png', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x127f6f extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = 'di1.png', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x56a90d = new Laya['List']();
                _0x56a90d['hScrollBar' + 'Skin'] = '\x20', _0x56a90d['name'] = 'listAd', _0x56a90d['anchorX'] = _0x56a90d['anchorY'] = 0.5, _0x56a90d['size'](0x370, 0xaa), _0x56a90d['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x56a90d['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x56a90d['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x56a90d['itemRender'] = _0x127f6f, _0x56a90d['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x56a90d), _0x56a90d['centerX'] = _0x56a90d['centerY'] = 0x0;
                let _0x2b0601 = _0x11f49c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x2b0601['length'])
                    return;
                let _0x586434 = JSON['parse'](JSON['stringify'](_0x2b0601));
                _0x586434 = _0x586434['concat'](_0x586434['slice'](0x0, 0x4)), _0x56a90d['array'] = _0x586434, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x56a90d['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x53fb12, _0x3b45ff) {
            let _0x4da54b = _0x53fb12['dataSource'], _0x3aec59 = _0x53fb12['getChildBy' + 'Name']('img'), _0x4464af = _0x3aec59['mask'];
            _0x3aec59['skin'] = _0x4da54b['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x53fb12['size'](0xdc, 0xaa), _0x53fb12['img']['size'](0xc8, 0x96), _0x4464af['size'](0xc8, 0x96), _0x53fb12['scale'](0x1, 0x1), _0x53fb12['scale'](0x1, 0x1), _0x4464af['scale'](0x1, 0x1));
            _0x53fb12['offAll'](), _0x3aec59['offAll'](), _0x53fb12['on'](Laya['Event']['MOUSE_OVER'], _0x53fb12, () => {
                _0x53fb12['zOrder'] = 0x64;
            }), _0x53fb12['on'](Laya['Event']['MOUSE_OUT'], _0x53fb12, () => {
                _0x53fb12['zOrder'] = _0x3b45ff;
            }), _0x3aec59['on'](Laya['Event']['MOUSE_OVER'], _0x53fb12, () => {
                _0x3aec59['scale'](_0x3aec59['scaleX'] + 0.1, _0x3aec59['scaleY'] + 0.1), this['endAni']();
            }), _0x3aec59['on'](Laya['Event']['MOUSE_OUT'], _0x53fb12, () => {
                _0x3aec59['scale'](_0x3aec59['scaleX'] - 0.1, _0x3aec59['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x3aec59['on'](Laya['Event']['MOUSE_DOWN'], _0x53fb12, _0x3e2bd2 => {
                _0x3e2bd2['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x4da54b['id']);
            });
            let _0x2ee682 = 0x1;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x2ee682 = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x2ee682 = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x30a695 = 0xc8, _0xe5a2dc = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            !this['_scrollLis' + 't']['sizeArr'][0x2] ? (_0x53fb12['img']['size'](_0x30a695, _0xe5a2dc), _0x53fb12['size'](_0x30a695 + 0x14, _0xe5a2dc + 0x14), _0x4464af['size'](_0x30a695, _0xe5a2dc)) : (_0x53fb12['img']['size'](_0x30a695 * _0x2ee682, _0xe5a2dc * _0x2ee682), _0x53fb12['size']((_0x30a695 + 0x14) * _0x2ee682, (_0xe5a2dc + 0x14) * _0x2ee682), _0x4464af['size'](_0x30a695 * _0x2ee682, _0xe5a2dc * _0x2ee682)), _0x3aec59['pos'](_0x53fb12['width'] / 0x2, _0x53fb12['height'] / 0x2), _0x4464af['pos'](_0x3aec59['width'] / 0x2, _0x3aec59['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x2e3401 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x2e3401['scrollBar']['value'] += 0x1, _0x2e3401['scrollBar']['value'] >= _0x2e3401['scrollBar']['max'] && (_0x2e3401['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x288251) {
            if (_0x288251['name'] == '_box_adTwo' + '0') {
                let _0x1d780c = _0x288251['getChildBy' + 'Name']('leftAdBg'), _0xf620db = _0x288251['getChildBy' + 'Name']('rightAdBg'), _0x48870a = _0x11f49c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x48870a['length'])
                    return;
                let _0x5c43d0 = JSON['parse'](JSON['stringify'](_0x48870a));
                _0x1d780c['offAll'](), _0xf620db['offAll'](), _0x1d780c['getChildBy' + 'Name']('leftAd')['skin'] = _0x5c43d0[0x0]['thumb'], _0xf620db['getChildBy' + 'Name']('rightAd')['skin'] = _0x5c43d0[0x1]['thumb'], _0x1d780c['on'](Laya['Event']['MOUSE_DOWN'], _0x288251, _0x5e63b8 => {
                    _0x5e63b8['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x5c43d0[0x0]['id']);
                }), _0xf620db['on'](Laya['Event']['MOUSE_DOWN'], _0x288251, _0x4a86b4 => {
                    _0x4a86b4['stopPropag' + 'ation'](), _0x11f49c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x5c43d0[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x6909e4) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x5aeec8 = this['getChildBy' + 'Name']('leftAdBg'), _0x2a03f4 = this['getChildBy' + 'Name']('rightAdBg');
                _0x2a03f4['pos'](_0x5aeec8['width'] + _0x6909e4, 0x0), this['width'] = _0x5aeec8['width'] + _0x2a03f4['width'] + _0x6909e4, this['spaceXNum'] = _0x6909e4;
            }
        }
    }
    _0x12412b['_inst'] = null;
}();