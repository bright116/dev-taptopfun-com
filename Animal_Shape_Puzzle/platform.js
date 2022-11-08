!function () {
    class _0x30d5a1 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x53db0d, _0x42c6c6) => {
                try {
                    this['musicAudio'] = new _0x12a552(), this['soundAudio'] = new _0x12a552(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x53db0d(!![]);
                } catch (_0x4a945b) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x4a945b), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x53db0d(![]);
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
        set ['muted'](_0x29034c) {
            this['isMuted'] = _0x29034c, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x4087d5) {
            this['pauseSound'] = _0x4087d5, this['pauseMusic'] = _0x4087d5, !_0x4087d5 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x557abd) {
            this['bePauseSou' + 'nd'] = _0x557abd;
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
        set ['pauseMusic'](_0x3735fe) {
            this['bePauseMus' + 'ic'] = _0x3735fe;
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
        ['parse'](_0x241626, _0x27d7b0, _0x286e63) {
            this['soundAudio']['parse'](_0x241626, _0x27d7b0);
        }
        ['playMusic'](_0x28606a) {
            console['log']('playMusic'), this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x28606a);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x3c5356) {
            this['soundAudio']['stop'](_0x3c5356);
        }
        set ['musicVolum' + 'e'](_0x4c2d7e) {
            this['musicAudio']['musicVolum' + 'e'] = _0x4c2d7e;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x346efa, _0x20588d = ![], _0x4e20a5 = ![]) {
            let _0x504c59 = Laya['LocalStora' + 'ge']['getItem']('Animal_Sha' + 'p_Puzzle_i' + 'sMusic');
            if (!_0x504c59) {
                _0x504c59 = 'true';
                if (!this['beEnabled'])
                    return;
                this['soundAudio']['play'](_0x346efa, _0x20588d, _0x4e20a5), Laya['LocalStora' + 'ge']['setItem']('Animal_Sha' + 'p_Puzzle_i' + 'sMusic', _0x504c59);
            } else {
                if (_0x504c59 == 'true') {
                    if (!this['beEnabled'])
                        return;
                    this['soundAudio']['play'](_0x346efa, _0x20588d, _0x4e20a5);
                }
            }
        }
    }
    class _0x46e82b {
    }
    class _0x12a552 {
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
            const _0x157ca1 = this['_audioInst' + 'ances']['values']();
            for (const _0x1ae2bd of _0x157ca1) {
                const _0x5a4440 = _0x1ae2bd['instance'];
                if (_0x5a4440['source']['buffer'] && !_0x5a4440['source']['loop']) {
                    try {
                        _0x5a4440['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x3fe6eb) {
                        _0x5a4440['source']['disconnect']();
                    }
                    _0x5a4440['source']['onended'] = function () {
                    }, _0x5a4440['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x1e3d0a = this['_audioInst' + 'ances']['values']();
            for (const _0x376678 of _0x1e3d0a) {
                const _0x136c8a = _0x376678['instance'];
                if (_0x136c8a['source']['buffer']) {
                    try {
                        _0x136c8a['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0xac769) {
                        _0x136c8a['source']['disconnect']();
                    }
                    _0x136c8a['source']['onended'] = function () {
                    }, _0x136c8a['setup']();
                }
            }
        }
        ['stop'](_0x46e8f4) {
            if (this['_audioInst' + 'ances']['has'](_0x46e8f4)) {
                const _0xb95c48 = this['_audioInst' + 'ances']['get'](_0x46e8f4);
                this['_stopSound'](_0xb95c48);
            }
        }
        ['_stopSound'](_0x1f55f9) {
            const _0x12deda = _0x1f55f9['instance'];
            if (_0x12deda['source']['buffer']) {
                try {
                    _0x12deda['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x338940) {
                    _0x12deda['source']['disconnect']();
                }
                _0x12deda['source']['onended'] = function () {
                }, _0x12deda['setup']();
            }
        }
        ['playMusic'](_0x3970b4) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x3970b4) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x3970b4), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x3970b4, !![])) : this['downloadAr' + 'rayBuffer'](_0x3970b4, () => {
                this['playMusic'](_0x3970b4);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x4b880e) {
            this['_musicVolu' + 'me'] = _0x4b880e, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0xb3ad9e, _0x274e0c = ![], _0x4f43eb = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0xb3ad9e)) {
                const _0x2bd358 = this['_audioInst' + 'ances']['get'](_0xb3ad9e), _0x17e7bf = _0x2bd358['instance'];
                if (_0x4f43eb && !_0x17e7bf['ended'])
                    return;
                this['stop'](_0xb3ad9e);
                if (_0x2bd358['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x274e0c)
                            return;
                        _0x17e7bf['playBuffer'](this['context']['currentTim' + 'e'], _0x2bd358['buffer']), _0x17e7bf['source']['loop'] = _0x274e0c;
                    } catch (_0x17709f) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x17709f);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0xb3ad9e, () => {
                    this['play'](_0xb3ad9e, _0x274e0c);
                });
        }
        ['load'](_0x377e23, _0x42d1bf) {
            let _0xef98ac = _0x377e23['length'], _0x4b1a29 = 0x0;
            for (let _0x228a6b = 0x0; _0x228a6b < _0x377e23['length']; _0x228a6b++) {
                const _0x468144 = _0x377e23[_0x228a6b];
                this['downloadAr' + 'rayBuffer'](_0x468144, () => {
                    _0x4b1a29++, _0x4b1a29 >= _0xef98ac && (_0x42d1bf && _0x42d1bf());
                });
            }
        }
        ['setThreeD'](_0xf5b0e3) {
            if (this['_audioInst' + 'ances']['has'](_0xf5b0e3)) {
                const _0x3d8242 = this['_audioInst' + 'ances']['get'](_0xf5b0e3);
                _0x3d8242['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x3a84ee = this['context'];
            const _0x23a84d = {
                'gain': _0x3a84ee['createGain'](),
                'panner': _0x3a84ee['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x3c61c4, _0xc238e3, _0x2c1642) {
                    this['source']['buffer'] = _0xc238e3;
                    var _0x38f98b = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x38f98b['setup'](), _0x38f98b['ended'] = !![];
                    }, this['source']['start'](_0x3c61c4, _0x2c1642);
                },
                'setup': function () {
                    this['source'] = _0x3a84ee['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x23a84d['panner']['rolloffFac' + 'tor'] = 0x0, _0x23a84d['gain']['connect'](this['context']['destinatio' + 'n']), _0x23a84d['setup'](), _0x23a84d;
        }
        ['parse'](_0x2bede5, _0x39d9d2, _0x9904be) {
            const _0x26aefe = new _0x46e82b();
            _0x26aefe['url'] = _0x2bede5, _0x26aefe['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x2bede5, _0x26aefe), this['context']['decodeAudi' + 'oData'](_0x39d9d2, function (_0x242a58) {
                _0x26aefe['buffer'] = _0x242a58, _0x9904be && _0x9904be();
            }, function (_0x3fe1ee) {
                _0x26aefe['error'] = !![], _0x9904be && _0x9904be(), console['log']('Decode\x20err' + 'or.' + _0x26aefe['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x34cc02, _0x3d5522) {
            if (this['_audioInst' + 'ances']['has'](_0x34cc02)) {
                _0x3d5522 && _0x3d5522();
                return;
            }
            const _0x532488 = this;
            var _0x359d10 = new XMLHttpRequest();
            _0x359d10['open']('GET', _0x34cc02, !![]), _0x359d10['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x359d10['onload'] = function () {
                if (_0x359d10['status'] === 0xc8 || _0x359d10['status'] === 0x0)
                    _0x532488['parse'](_0x34cc02, _0x359d10['response'], _0x3d5522);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x359d10['onerror'] = function () {
                _0x3d5522 && _0x3d5522();
                throw 'no\x20respons' + 'e';
            }, _0x359d10['ontimeout'] = function () {
                _0x3d5522 && _0x3d5522();
            }, _0x359d10['onabort'] = function () {
                _0x3d5522 && _0x3d5522();
            }, _0x359d10['send'](null);
        }
    }
    const _0x4d3cb4 = window['WebAudioEn' + 'gine'] = new _0x30d5a1();
    class _0x146b9c {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x146b9c()), this['_instance'];
        }
        ['initData']() {
            let _0x234563 = document['getElement' + 'ById']('layaCanvas');
            _0x234563 && (_0x234563['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x234563['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x48771d) {
            let _0x2f71a6 = null;
            try {
                let _0x94f7d8 = Laya['LocalStora' + 'ge']['getItem'](_0x48771d);
                _0x2f71a6 = JSON['parse'](_0x94f7d8);
            } catch (_0x11e128) {
            }
            return _0x2f71a6;
        }
        ['setStorage' + 'Sync'](_0xcfaab2, _0x2597e2) {
            return Laya['LocalStora' + 'ge']['setItem'](_0xcfaab2, JSON['stringify'](_0x2597e2));
        }
        ['navigate'](_0x3473fc, _0x4d026e, _0x38296f) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x3473fc, this['action_'] = _0x4d026e, this['to_'] = _0x38296f, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x4d3cb4['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x4d3cb4['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x185ee0) {
            YYGGames['showInters' + 'titial']({
                'beforeShowAd': () => {
                    window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
                },
                'afterShowAd': () => {
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x185ee0 && _0x185ee0();
                }
            });
        }
        ['showReward'](_0x59da5a, _0x290fac, _0x20c5f6) {
            if (!YYGGames['canShowRew' + 'ard']()) {
                this['prompt']('No\x20Availab' + 'le\x20Video'), _0x20c5f6 && _0x20c5f6();
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
                    _0x59da5a && _0x59da5a(), _0x20c5f6 && _0x20c5f6(), _0x20c5f6 = null, _0x59da5a = null;
                },
                'rewardDismissed': () => {
                    _0x290fac && (_0x290fac(), _0x20c5f6 && _0x20c5f6(), _0x20c5f6 = null, _0x290fac = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            });
        }
        ['initList'](_0x4feae9) {
        }
        ['prompt'](_0x133027, _0x37da84) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:2' + '5px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x53ec29 = Laya['stage']['designWidt' + 'h'], _0x13eb9a = Laya['stage']['designHeig' + 'ht'];
            var _0x89b673 = window['innerWidth'], _0xe8e048 = window['innerHeigh' + 't'], _0x462968, _0x2220d7;
            _0x89b673 / _0xe8e048 > _0x53ec29 / _0x13eb9a ? (_0x462968 = _0xe8e048, _0x2220d7 = _0x462968 * _0x53ec29 / _0x13eb9a) : (_0x2220d7 = _0x89b673, _0x462968 = _0x2220d7 * _0x13eb9a / _0x53ec29), this['prompt_']['style']['width'] = _0x2220d7 - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x133027, _0x37da84 = isNaN(_0x37da84) ? 0x7d0 : _0x37da84, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x21ff71 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x21ff71 + ('s\x20ease-in,' + '\x20opacity\x20') + _0x21ff71 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x37da84);
        }
        ['getForgame' + 's']() {
            let _0x32bd4e = YYGGames['forgames'] || [], _0x40d4f3 = _0x32bd4e['slice']();
            for (let _0x4f3c84 = 0x0, _0x2ac530 = _0x40d4f3['length']; _0x4f3c84 < _0x2ac530; _0x4f3c84++) {
                const _0x20f845 = Math['floor'](Math['random']() * (_0x4f3c84 + 0x1)), _0xe28368 = _0x40d4f3[_0x20f845];
                _0x40d4f3[_0x20f845] = _0x40d4f3[_0x4f3c84], _0x40d4f3[_0x4f3c84] = _0xe28368;
            }
            return _0x40d4f3;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x17f898 = new Laya['Image']();
                _0x17f898['skin'] = '512-1.png', _0x17f898['zOrder'] = 0x30d40, window['yad'] = _0x17f898;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x1ae07d, _0x3aaf5e) {
            !this['needStartU' + 'p'] && (_0x3aaf5e && _0x3aaf5e());
            if (this['initialize' + 'd_'])
                return;
            _0x146b9c['getInstanc' + 'e']()['showSplash'](), _0x146b9c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x5cc418) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x5cc418);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x67d716, _0x591e99 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x67d716);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x3b43ac) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x3b43ac);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x3aaff3 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x1ae07d,
                    'config': _0x3aaff3,
                    'complete': () => {
                        const _0x144bf7 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x144bf7) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x405b23 => {
                                _0x405b23['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x3aaf5e && _0x3aaf5e();
                    }
                });
            }));
        }
        ['showBanner'](_0x50bf0f) {
            _0x50bf0f ? YYGGames['showBanner'](_0x50bf0f) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            YYGGames['hideBanner']();
        }
        ['showSplash'](_0x573fc6) {
            _0x573fc6 ? YYGGames['showSplash'](_0x573fc6) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x1b3a3b, _0x322ff1) {
            !this['needStartU' + 'p'] && (_0x322ff1 && _0x322ff1());
            if (this['initialize' + 'd_'])
                return;
            _0x146b9c['getInstanc' + 'e']()['showSplash'](), _0x146b9c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x57deb5) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x57deb5);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0xec6ff9, _0x1d49e7 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0xec6ff9);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x2c9075) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x2c9075);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0xd96ef3 => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x1b3a3b,
                    'config': _0xd96ef3,
                    'complete': () => {
                        const _0x97d3f9 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x97d3f9) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x1dea41 => {
                                _0x1dea41['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x322ff1 && _0x322ff1();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x24f6ea, _0xc958ad) {
            !this['needStartU' + 'p'] && (_0xc958ad && _0xc958ad());
            if (this['initialize' + 'd_'])
                return;
            _0x146b9c['getInstanc' + 'e']()['showSplash'](), _0x146b9c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x1d70d7) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x1d70d7);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x555821) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x555821);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x57b8e9) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x40c729 => {
                YYGGames['startup']({
                    'channel': 0x5,
                    'appName': _0x24f6ea,
                    'config': _0x40c729,
                    'complete': () => {
                        const _0x513c0d = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x513c0d) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x1c1d0b => {
                                _0x1c1d0b['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0xc958ad && _0xc958ad();
                    }
                });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x595be4 = {
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
            class _0x139529 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x146b9c['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x48a6ca = new Laya['Prefab']();
            _0x48a6ca['json'] = _0x595be4, this['noVideoPer'] = _0x48a6ca['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x139529);
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
            let _0x22206a = {
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
            class _0xfe161a extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x146b9c['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0xa6d1b8 = new Laya['Prefab']();
            _0xa6d1b8['json'] = _0x22206a, this['loadingPer'] = _0xa6d1b8['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0xfe161a);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x41a00f extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x23de62 = new Laya['List']();
            return _0x23de62['size'](0x320, 0x258), _0x23de62['itemRender'] = _0x41a00f, _0x23de62;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x4ba001 = new Laya['Box']();
                return _0x4ba001['setSize'] = function () {
                }, _0x4ba001;
            }
            if (!this['_scrollLis' + 't']) {
                let _0x54a026 = {
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
                class _0x2a8386 extends Laya['Script'] {
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
                            let _0x2bb335 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x2bb335);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x10c878 = _0x146b9c['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x10c878['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x10c878)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x3d2bdf, _0x4ec9ff) {
                        let _0x5eb115 = _0x3d2bdf['getChildBy' + 'Name']('thumb');
                        _0x3d2bdf['offAll'](), _0x5eb115['offAll'](), _0x3d2bdf['on'](Laya['Event']['MOUSE_OVER'], _0x3d2bdf, () => {
                            _0x3d2bdf['zOrder'] = 0x64;
                        }), _0x3d2bdf['on'](Laya['Event']['MOUSE_OUT'], _0x3d2bdf, () => {
                            _0x3d2bdf['zOrder'] = _0x4ec9ff;
                        }), _0x5eb115['on'](Laya['Event']['MOUSE_OVER'], _0x3d2bdf, () => {
                            _0x5eb115['scale'](1.1, 1.1), this['endAni']();
                        }), _0x5eb115['on'](Laya['Event']['MOUSE_OUT'], _0x3d2bdf, () => {
                            _0x5eb115['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x5eb115['on'](Laya['Event']['MOUSE_DOWN'], _0x3d2bdf, _0x47b3b0 => {
                            _0x47b3b0['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3d2bdf['dataSource']['id']);
                        });
                        let _0x18e34c = _0x5eb115['mask'];
                        _0x3d2bdf['width'] = this['sizeTran'][0x0] + 0x14, _0x3d2bdf['height'] = this['sizeTran'][0x1] + 0x14, _0x3d2bdf['x'] = (this['sizeTran'][0x0] + 0x14) * _0x4ec9ff;
                        if (this['sizeTran'][0x2])
                            _0x18e34c['width'] = _0x5eb115['width'] = this['sizeTran'][0x0], _0x18e34c['height'] = _0x5eb115['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x17c318 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x5eb115['width'] = 0xc8 / _0x17c318, _0x5eb115['height'] = 0x96 / _0x17c318, _0x18e34c['width'] = this['sizeTran'][0x0], _0x18e34c['height'] = this['sizeTran'][0x1];
                        }
                        _0x18e34c['x'] = _0x5eb115['width'] / 0x2, _0x18e34c['y'] = _0x5eb115['height'] / 0x2;
                    }
                    ['setSize'](_0x5cc3c7, _0x19b457, _0x59a973 = ![]) {
                        this['sizeTran'] = [
                            _0x5cc3c7,
                            _0x19b457,
                            _0x59a973
                        ], this['img_ListBg'] && (this['owner']['width'] = 0x500, this['owner']['height'] = _0x19b457 + 0x14, this['img_ListBg']['width'] = 0x500, this['img_ListBg']['height'] = _0x19b457 + 0x14, this['owner']['array'] = [], this['owner']['array'] = this['listArray'], this['img_ListBg']['alpha'] = 0.5);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x5e2f9b) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0xa17f97 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0xa17f97);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x4fc667 = new Laya['Prefab']();
                _0x4fc667['json'] = _0x54a026, this['_scrollLis' + 't'] = _0x4fc667['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x2a8386), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x2a8386)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x2a8386));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x4f2cdb = new Laya['Box']();
                return _0x4f2cdb['setSpaceX'] = _0x4f2cdb['setSize'] = function () {
                }, _0x4f2cdb;
            }
            if (!this['_box_adTwo']) {
                let _0x1b2978 = {
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
                class _0x1ffbe0 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x1c6429 = _0x146b9c['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x1c6429['length'])
                            return;
                        let _0x242183 = JSON['parse'](JSON['stringify'](_0x1c6429));
                        if (this['imgArr']['length']) {
                            let _0x4effd1 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x4effd1);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x242183[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x242183[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x3c7cf3 => {
                            _0x3c7cf3['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x242183[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x31bf81 => {
                            _0x31bf81['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x242183[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x4f6bd6) {
                        this['spaceNum'] = _0x4f6bd6, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x324681 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x324681);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x569be6, _0x10cb99, _0x2ba44a = ![]) {
                        this['sizeTran'] = [
                            _0x569be6,
                            _0x10cb99,
                            _0x2ba44a
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x569be6 + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x10cb99 + 0x14, console['log']('img_ad0', this['img_ad0']), console['log']('img_ad1', this['img_ad1']);
                            if (_0x2ba44a)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x569be6, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x10cb99;
                            else {
                                let _0x1f95cb = 0xc8 / _0x569be6 < 0x96 / _0x10cb99 ? 0xc8 / _0x569be6 : 0x96 / _0x10cb99;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x1f95cb, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x1f95cb, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x569be6, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x10cb99;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x375917 = new Laya['Prefab']();
                _0x375917['json'] = _0x1b2978, this['_box_adTwo'] = _0x375917['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x1ffbe0), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x1ffbe0)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x1ffbe0)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x1ffbe0)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x1ffbe0));
            }
            return this['_box_adTwo'];
        }
    }
    _0x146b9c['_instance'] = null, window['platform'] = _0x146b9c;
    class _0x146fed {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x146fed['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x146fed['_inst'] && new _0x146fed(), _0x146fed['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x14f070 = new Laya['Box']();
                return _0x14f070['setSpaceX'] = _0x14f070['setSize'] = function () {
                }, _0x14f070;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x4a37f5 = new Laya['Image']();
                _0x4a37f5['name'] = 'leftAdBg', _0x4a37f5['sizeGrid'] = '30,30,30,3' + '0', _0x4a37f5['size'](0xdc, 0xaa), _0x4a37f5['skin'] = 'di1.png';
                let _0x387dd9 = new Laya['Image']();
                _0x387dd9['name'] = 'leftAdMask', _0x387dd9['size'](0xc8, 0x96), _0x387dd9['sizeGrid'] = '30,30,30,3' + '0', _0x387dd9['anchorX'] = _0x387dd9['anchorY'] = 0.5, _0x387dd9['skin'] = 'di1.png';
                let _0x2c20ae = new Laya['Image']();
                _0x2c20ae['name'] = 'leftAd', _0x2c20ae['size'](0xc8, 0x96), _0x2c20ae['anchorX'] = _0x2c20ae['anchorY'] = 0.5, _0x2c20ae['skin'] = '', _0x2c20ae['mask'] = _0x387dd9, _0x4a37f5['addChild'](_0x2c20ae), _0x4a37f5['pos'](0x0, 0x0), _0x2c20ae['pos'](_0x4a37f5['width'] / 0x2, _0x4a37f5['height'] / 0x2), _0x387dd9['pos'](_0x2c20ae['width'] / 0x2, _0x2c20ae['height'] / 0x2);
                let _0x25886e = new Laya['Image']();
                _0x25886e['name'] = 'rightAdBg', _0x25886e['sizeGrid'] = '30,30,30,3' + '0', _0x25886e['size'](0xdc, 0xaa), _0x25886e['skin'] = 'di1.png';
                let _0x78f767 = new Laya['Image']();
                _0x78f767['name'] = 'rightAdMas' + 'k', _0x78f767['size'](0xc8, 0x96), _0x78f767['sizeGrid'] = '30,30,30,3' + '0', _0x78f767['anchorX'] = _0x78f767['anchorY'] = 0.5, _0x78f767['skin'] = 'di1.png';
                let _0x30c001 = new Laya['Image']();
                _0x30c001['name'] = 'rightAd', _0x30c001['size'](0xc8, 0x96), _0x30c001['anchorX'] = _0x30c001['anchorY'] = 0.5, _0x30c001['skin'] = '', _0x30c001['mask'] = _0x78f767, _0x25886e['addChild'](_0x30c001), _0x25886e['pos'](_0x4a37f5['width'], 0x0), _0x30c001['pos'](_0x25886e['width'] / 0x2, _0x25886e['height'] / 0x2), _0x78f767['pos'](_0x30c001['width'] / 0x2, _0x30c001['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x4a37f5['width'] + _0x25886e['width'], this['_box_adTwo' + '0']['addChild'](_0x4a37f5), this['_box_adTwo' + '0']['addChild'](_0x25886e), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x24eff6 = _0x146b9c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x24eff6['length'])
                    return;
                let _0x140361 = JSON['parse'](JSON['stringify'](_0x24eff6));
                _0x2c20ae['offAll'](), _0x30c001['offAll'](), _0x2c20ae['skin'] = _0x140361[0x0]['thumb'], _0x30c001['skin'] = _0x140361[0x1]['thumb'], _0x2c20ae['on'](Laya['Event']['MOUSE_DOWN'], this, _0x4d4194 => {
                    _0x4d4194['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x140361[0x0]['id']);
                }), _0x30c001['on'](Laya['Event']['MOUSE_DOWN'], this, _0x37ac61 => {
                    _0x37ac61['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x140361[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x578e49 = 0xc8, _0x4e4653 = 0x96, _0x38a572 = ![], _0x2645bf = !![]) {
            let _0x3e6283 = 0xc8;
            _0x578e49 / 0xc8 > _0x4e4653 / 0x96 ? _0x3e6283 = _0x578e49 / 0xc8 : _0x3e6283 = _0x4e4653 / 0x96;
            let _0x4cc2c5 = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x1b94d9 = this['getChildBy' + 'Name']('leftAdBg'), _0x5eb9e9 = this['getChildBy' + 'Name']('rightAdBg'), _0x190a1f = _0x1b94d9['getChildBy' + 'Name']('leftAd'), _0x4f1c36 = _0x5eb9e9['getChildBy' + 'Name']('rightAd');
                _0x2645bf && (_0x1b94d9['size'](0xdc, 0xaa), _0x5eb9e9['size'](0xdc, 0xaa), _0x190a1f['size'](0xc8, 0x96), _0x4f1c36['size'](0xc8, 0x96), _0x190a1f['mask']['size'](0xc8, 0x96), _0x4f1c36['mask']['size'](0xc8, 0x96), _0x1b94d9['scale'](0x1, 0x1), _0x5eb9e9['scale'](0x1, 0x1), _0x190a1f['scale'](0x1, 0x1), _0x4f1c36['scale'](0x1, 0x1), _0x190a1f['mask']['scale'](0x1, 0x1), _0x4f1c36['mask']['scale'](0x1, 0x1));
                let _0x5936ca = 0xc8 * _0x4e4653 / _0x578e49;
                _0x1b94d9['size'](_0x4cc2c5 + 0x14, _0x5936ca + 0x14), _0x5eb9e9['size'](_0x4cc2c5 + 0x14, _0x5936ca + 0x14), _0x190a1f['mask']['size'](_0x4cc2c5, _0x5936ca), _0x4f1c36['mask']['size'](_0x4cc2c5, _0x5936ca), !_0x38a572 ? (_0x190a1f['size'](_0x4cc2c5, _0x5936ca), _0x4f1c36['size'](_0x4cc2c5, _0x5936ca)) : (_0x190a1f['size'](0xc8 * _0x3e6283, 0x96 * _0x3e6283), _0x4f1c36['size'](0xc8 * _0x3e6283, 0x96 * _0x3e6283)), _0x190a1f['pos'](_0x1b94d9['width'] / 0x2, _0x1b94d9['height'] / 0x2), _0x190a1f['mask']['pos'](_0x190a1f['width'] / 0x2, _0x190a1f['height'] / 0x2), _0x4f1c36['pos'](_0x5eb9e9['width'] / 0x2, _0x5eb9e9['height'] / 0x2), _0x4f1c36['mask']['pos'](_0x4f1c36['width'] / 0x2, _0x4f1c36['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else
                this['name'] == '_scrollLis' + 't' && (this['sizeArr'] = [
                    _0x578e49,
                    _0x4e4653,
                    _0x38a572,
                    _0x2645bf
                ]);
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x10a3be = new Laya['Box']();
                return _0x10a3be['setSize'] = function () {
                }, _0x10a3be;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = 'di2.png', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x222147 extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = 'di1.png', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x3eac0b = new Laya['List']();
                _0x3eac0b['hScrollBar' + 'Skin'] = '\x20', _0x3eac0b['name'] = 'listAd', _0x3eac0b['anchorX'] = _0x3eac0b['anchorY'] = 0.5, _0x3eac0b['size'](0x370, 0xaa), _0x3eac0b['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x3eac0b['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x3eac0b['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x3eac0b['itemRender'] = _0x222147, _0x3eac0b['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x3eac0b), _0x3eac0b['pos'](this['_scrollLis' + 't']['width'] / 0x2, this['_scrollLis' + 't']['height'] / 0x2);
                let _0x79121 = _0x146b9c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x79121['length'])
                    return;
                let _0x26147c = JSON['parse'](JSON['stringify'](_0x79121));
                _0x26147c = _0x26147c['concat'](_0x26147c['slice'](0x0, 0x4)), _0x3eac0b['array'] = _0x26147c, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x3eac0b['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x91e97b, _0x4715ef) {
            let _0xfe951a = _0x91e97b['dataSource'], _0x596596 = _0x91e97b['getChildBy' + 'Name']('img'), _0xff953b = _0x596596['mask'];
            _0x596596['skin'] = _0xfe951a['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x91e97b['size'](0xdc, 0xaa), _0x91e97b['img']['size'](0xc8, 0x96), _0xff953b['size'](0xc8, 0x96), _0x91e97b['scale'](0x1, 0x1), _0x91e97b['scale'](0x1, 0x1), _0xff953b['scale'](0x1, 0x1));
            _0x91e97b['offAll'](), _0x596596['offAll'](), _0x91e97b['on'](Laya['Event']['MOUSE_OVER'], _0x91e97b, () => {
                _0x91e97b['zOrder'] = 0x64;
            }), _0x91e97b['on'](Laya['Event']['MOUSE_OUT'], _0x91e97b, () => {
                _0x91e97b['zOrder'] = _0x4715ef;
            }), _0x596596['on'](Laya['Event']['MOUSE_OVER'], _0x91e97b, () => {
                _0x596596['scale'](_0x596596['scaleX'] + 0.1, _0x596596['scaleY'] + 0.1), this['endAni']();
            }), _0x596596['on'](Laya['Event']['MOUSE_OUT'], _0x91e97b, () => {
                _0x596596['scale'](_0x596596['scaleX'] - 0.1, _0x596596['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x596596['on'](Laya['Event']['MOUSE_DOWN'], _0x91e97b, _0x583812 => {
                _0x583812['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0xfe951a['id']);
            });
            let _0x1f0813 = 0xc8;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x1f0813 = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x1f0813 = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x5868eb = 0xc8, _0x155604 = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            _0x91e97b['size'](_0x5868eb + 0x14, _0x155604 + 0x14), _0xff953b['size'](_0x5868eb, _0x155604), !this['_scrollLis' + 't']['sizeArr'][0x2] ? _0x91e97b['img']['size'](_0x5868eb, _0x155604) : (leftAd['size'](0xc8 * _0x1f0813, 0x96 * _0x1f0813), rightAd['size'](0xc8 * _0x1f0813, 0x96 * _0x1f0813)), _0x596596['pos'](_0x91e97b['width'] / 0x2, _0x91e97b['height'] / 0x2), _0xff953b['pos'](_0x596596['width'] / 0x2, _0x596596['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x5b9ba9 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x5b9ba9['scrollBar']['value'] += 0x1, _0x5b9ba9['scrollBar']['value'] >= _0x5b9ba9['scrollBar']['max'] && (_0x5b9ba9['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x30b662) {
            if (_0x30b662['name'] == '_box_adTwo' + '0') {
                let _0x28db9e = _0x30b662['getChildBy' + 'Name']('leftAdBg'), _0x37a175 = _0x30b662['getChildBy' + 'Name']('rightAdBg'), _0x571a53 = _0x146b9c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x571a53['length'])
                    return;
                let _0x3ce4de = JSON['parse'](JSON['stringify'](_0x571a53));
                _0x28db9e['offAll'](), _0x37a175['offAll'](), _0x28db9e['getChildBy' + 'Name']('leftAd')['skin'] = _0x3ce4de[0x0]['thumb'], _0x37a175['getChildBy' + 'Name']('rightAd')['skin'] = _0x3ce4de[0x1]['thumb'], _0x28db9e['on'](Laya['Event']['MOUSE_DOWN'], _0x30b662, _0x54d5bf => {
                    _0x54d5bf['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3ce4de[0x0]['id']);
                }), _0x37a175['on'](Laya['Event']['MOUSE_DOWN'], _0x30b662, _0x1a8401 => {
                    _0x1a8401['stopPropag' + 'ation'](), _0x146b9c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3ce4de[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x51f7e1) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0xe60446 = this['getChildBy' + 'Name']('leftAdBg'), _0x8a343f = this['getChildBy' + 'Name']('rightAdBg');
                _0x8a343f['pos'](_0xe60446['width'] + _0x51f7e1, 0x0), this['width'] = _0xe60446['width'] + _0x8a343f['width'] + _0x51f7e1, this['spaceXNum'] = _0x51f7e1;
            }
        }
    }
    _0x146fed['_inst'] = null;
}();