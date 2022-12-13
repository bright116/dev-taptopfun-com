!function () {
    class _0x4affd6 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x236064, _0xa083b4) => {
                try {
                    this['musicAudio'] = new _0x360f61(), this['soundAudio'] = new _0x360f61(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x236064(!![]);
                } catch (_0x149e9f) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x149e9f), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x236064(![]);
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
        set ['muted'](_0x119ff7) {
            this['isMuted'] = _0x119ff7, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x42fc99) {
            this['pauseSound'] = _0x42fc99, this['pauseMusic'] = _0x42fc99, !_0x42fc99 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x159631) {
            this['bePauseSou' + 'nd'] = _0x159631;
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
        set ['pauseMusic'](_0x4d8ccd) {
            this['bePauseMus' + 'ic'] = _0x4d8ccd;
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
        ['parse'](_0x415a26, _0x3670c2, _0x1d3c2c) {
            this['soundAudio']['parse'](_0x415a26, _0x3670c2);
        }
        ['playMusic'](_0x3d6572) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x3d6572);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x2c650f) {
            this['soundAudio']['stop'](_0x2c650f);
        }
        set ['musicVolum' + 'e'](_0x10cce2) {
            this['musicAudio']['musicVolum' + 'e'] = _0x10cce2;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0xb785a6, _0x5a6480 = ![], _0x235a34 = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0xb785a6, _0x5a6480, _0x235a34);
        }
    }
    class _0x2403b6 {
    }
    class _0x360f61 {
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
            const _0x4167fe = this['_audioInst' + 'ances']['values']();
            for (const _0x1d1fd1 of _0x4167fe) {
                const _0x3007c7 = _0x1d1fd1['instance'];
                if (_0x3007c7['source']['buffer'] && !_0x3007c7['source']['loop']) {
                    try {
                        _0x3007c7['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x58ff45) {
                        _0x3007c7['source']['disconnect']();
                    }
                    _0x3007c7['source']['onended'] = function () {
                    }, _0x3007c7['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x5f42cb = this['_audioInst' + 'ances']['values']();
            for (const _0x2ee283 of _0x5f42cb) {
                const _0xc5689 = _0x2ee283['instance'];
                if (_0xc5689['source']['buffer']) {
                    try {
                        _0xc5689['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x365a0f) {
                        _0xc5689['source']['disconnect']();
                    }
                    _0xc5689['source']['onended'] = function () {
                    }, _0xc5689['setup']();
                }
            }
        }
        ['stop'](_0x35d0e0) {
            if (this['_audioInst' + 'ances']['has'](_0x35d0e0)) {
                const _0x2d5e2f = this['_audioInst' + 'ances']['get'](_0x35d0e0);
                this['_stopSound'](_0x2d5e2f);
            }
        }
        ['_stopSound'](_0x1a1bae) {
            const _0x194db8 = _0x1a1bae['instance'];
            if (_0x194db8['source']['buffer']) {
                try {
                    _0x194db8['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x100801) {
                    _0x194db8['source']['disconnect']();
                }
                _0x194db8['source']['onended'] = function () {
                }, _0x194db8['setup']();
            }
        }
        ['playMusic'](_0x3c02b6) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x3c02b6) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x3c02b6), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x3c02b6, !![])) : this['downloadAr' + 'rayBuffer'](_0x3c02b6, () => {
                this['playMusic'](_0x3c02b6);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x1f8111) {
            this['_musicVolu' + 'me'] = _0x1f8111, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0x32fd6d, _0x33b441 = ![], _0x471ead = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0x32fd6d)) {
                const _0x1eaf74 = this['_audioInst' + 'ances']['get'](_0x32fd6d), _0x3dd879 = _0x1eaf74['instance'];
                if (_0x471ead && !_0x3dd879['ended'])
                    return;
                this['stop'](_0x32fd6d);
                if (_0x1eaf74['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x33b441)
                            return;
                        _0x3dd879['playBuffer'](this['context']['currentTim' + 'e'], _0x1eaf74['buffer']), _0x3dd879['source']['loop'] = _0x33b441;
                    } catch (_0x42df8c) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x42df8c);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0x32fd6d, () => {
                    this['play'](_0x32fd6d, _0x33b441);
                });
        }
        ['load'](_0x50a620, _0x2085d7) {
            let _0x53ff14 = _0x50a620['length'], _0x100ef7 = 0x0;
            for (let _0x23d1ae = 0x0; _0x23d1ae < _0x50a620['length']; _0x23d1ae++) {
                const _0x1fe377 = _0x50a620[_0x23d1ae];
                this['downloadAr' + 'rayBuffer'](_0x1fe377, () => {
                    _0x100ef7++, _0x100ef7 >= _0x53ff14 && (_0x2085d7 && _0x2085d7());
                });
            }
        }
        ['setThreeD'](_0x454407) {
            if (this['_audioInst' + 'ances']['has'](_0x454407)) {
                const _0x5bab25 = this['_audioInst' + 'ances']['get'](_0x454407);
                _0x5bab25['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x2ec0cd = this['context'];
            const _0x11a7eb = {
                'gain': _0x2ec0cd['createGain'](),
                'panner': _0x2ec0cd['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x29c524, _0x45890a, _0x3df9ec) {
                    this['source']['buffer'] = _0x45890a;
                    var _0x5828bf = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x5828bf['setup'](), _0x5828bf['ended'] = !![];
                    }, this['source']['start'](_0x29c524, _0x3df9ec);
                },
                'setup': function () {
                    this['source'] = _0x2ec0cd['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x11a7eb['panner']['rolloffFac' + 'tor'] = 0x0, _0x11a7eb['gain']['connect'](this['context']['destinatio' + 'n']), _0x11a7eb['setup'](), _0x11a7eb;
        }
        ['parse'](_0x3bd6a0, _0x8333c, _0x2441c5) {
            const _0x5938ed = new _0x2403b6();
            _0x5938ed['url'] = _0x3bd6a0, _0x5938ed['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x3bd6a0, _0x5938ed), this['context']['decodeAudi' + 'oData'](_0x8333c, function (_0x3a0f02) {
                _0x5938ed['buffer'] = _0x3a0f02, _0x2441c5 && _0x2441c5();
            }, function (_0x3b41a5) {
                _0x5938ed['error'] = !![], _0x2441c5 && _0x2441c5(), console['log']('Decode\x20err' + 'or.' + _0x5938ed['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0xdc50b7, _0x4cbf89) {
            if (this['_audioInst' + 'ances']['has'](_0xdc50b7)) {
                _0x4cbf89 && _0x4cbf89();
                return;
            }
            const _0x5c95b5 = this;
            var _0x14a0d = new XMLHttpRequest();
            _0x14a0d['open']('GET', _0xdc50b7, !![]), _0x14a0d['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x14a0d['onload'] = function () {
                if (_0x14a0d['status'] === 0xc8 || _0x14a0d['status'] === 0x0)
                    _0x5c95b5['parse'](_0xdc50b7, _0x14a0d['response'], _0x4cbf89);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x14a0d['onerror'] = function () {
                _0x4cbf89 && _0x4cbf89();
                throw 'no\x20respons' + 'e';
            }, _0x14a0d['ontimeout'] = function () {
                _0x4cbf89 && _0x4cbf89();
            }, _0x14a0d['onabort'] = function () {
                _0x4cbf89 && _0x4cbf89();
            }, _0x14a0d['send'](null);
        }
    }
    const _0x296bee = window['WebAudioEn' + 'gine'] = new _0x4affd6();
    class _0x527235 {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x527235()), this['_instance'];
        }
        ['initData']() {
            let _0x1fcb27 = document['getElement' + 'ById']('layaCanvas');
            _0x1fcb27 && (_0x1fcb27['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x1fcb27['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x6c6838) {
            let _0x184db0 = null;
            try {
                let _0x4e526b = Laya['LocalStora' + 'ge']['getItem'](_0x6c6838);
                _0x184db0 = JSON['parse'](_0x4e526b);
            } catch (_0x334e45) {
            }
            return _0x184db0;
        }
        ['setStorage' + 'Sync'](_0x346a14, _0x2678e3) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x346a14, JSON['stringify'](_0x2678e3));
        }
        ['navigate'](_0x5b27fe, _0x23d5f4, _0x5ca874) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x5b27fe, this['action_'] = _0x23d5f4, this['to_'] = _0x5ca874, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x296bee['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x296bee['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x28a856) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x28a856 && _0x28a856();
            return;
            // YYGGames['showInters' + 'titial']({
            //     'beforeShowAd': () => {
            //         window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
            //     },
            //     'afterShowAd': () => {
            //         window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x28a856 && _0x28a856();
            //     }
            // });
        }
        ['showReward'](_0x324c83, _0x4e5fce, _0x366e54) {
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                    _0x324c83 && _0x324c83(), _0x366e54 && _0x366e54(), _0x366e54 = null, _0x324c83 = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                  _0x4e5fce && (_0x4e5fce(), _0x366e54 && _0x366e54(), _0x366e54 = null, _0x4e5fce = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            );
            return;
            // if (!YYGGames['canShowRew' + 'ard']()) {
            //     this['prompt']('No\x20Availab' + 'le\x20Video'), _0x366e54 && _0x366e54();
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
            //         _0x324c83 && _0x324c83(), _0x366e54 && _0x366e54(), _0x366e54 = null, _0x324c83 = null;
            //     },
            //     'rewardDismissed': () => {
            //         _0x4e5fce && (_0x4e5fce(), _0x366e54 && _0x366e54(), _0x366e54 = null, _0x4e5fce = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
            //     }
            // });
        }
        ['initList'](_0x394e22) {
        }
        ['prompt'](_0x2ef89a, _0x7702fe) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x11a937 = Laya['stage']['designWidt' + 'h'], _0x4ba175 = Laya['stage']['designHeig' + 'ht'];
            var _0x1758c6 = window['innerWidth'], _0x9a8ed9 = window['innerHeigh' + 't'], _0x895577, _0x258e6c;
            _0x1758c6 / _0x9a8ed9 > _0x11a937 / _0x4ba175 ? (_0x895577 = _0x9a8ed9, _0x258e6c = _0x895577 * _0x11a937 / _0x4ba175) : (_0x258e6c = _0x1758c6, _0x895577 = _0x258e6c * _0x4ba175 / _0x11a937), this['prompt_']['style']['width'] = _0x258e6c - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x2ef89a, _0x7702fe = isNaN(_0x7702fe) ? 0x7d0 : _0x7702fe, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x5e469e = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x5e469e + ('s\x20ease-in,' + '\x20opacity\x20') + _0x5e469e + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x7702fe);
        }
        ['prompt0'](_0x48c8df, _0x3d5540 = 0xbb8) {
            if (!Laya)
                return;
            !this['labelInfo'] && (this['labelBg'] = new Laya['Box'](), this['labelBg']['bgColor'] = '#000000', this['labelBg']['alpha'] = 0.5, this['labelBg']['centerX'] = 0x0, this['labelBg']['centerY'] = -0x32, this['labelInfo'] = new Laya['Label'](), this['labelInfo']['align'] = 'center', this['labelInfo']['valign'] = 'middle', this['labelInfo']['color'] = '#ffffff', this['labelInfo']['fontSize'] = 0x1e, this['labelInfo']['centerX'] = 0x0, this['labelInfo']['centerY'] = -0x32, this['labelInfo']['zOrder'] = 0x174876e800), this['labelInfo']['width'] = null, this['labelInfo']['height'] = null, this['labelInfo']['wordWrap'] = ![], this['labelInfo']['visible'] = ![], this['labelInfo']['text'] = _0x48c8df, this['labelInfo']['height'] += 0x28, this['labelInfo']['width'] > Laya['stage']['width'] - 0x64 && (this['labelInfo']['width'] = Laya['stage']['width'] - 0x64, this['labelInfo']['wordWrap'] = !![]), this['labelBg']['visible'] = this['labelInfo']['visible'] = !![], Laya['stage']['addChild'](this['labelBg']), Laya['stage']['addChild'](this['labelInfo']), Laya['timer']['clear'](this, this['clearLabel']), this['labelBg']['width'] = this['labelInfo']['width'] + 0x14, this['labelBg']['height'] = this['labelInfo']['height'], Laya['timer']['once'](_0x3d5540, this, this['clearLabel']);
        }
        ['clearLabel']() {
            this['labelBg']['visible'] = this['labelInfo']['visible'] = ![];
        }
        ['getForgame' + 's']() {
            return []
            // let _0xc674cb = YYGGames['forgames'] || [], _0xecccc6 = _0xc674cb['slice']();
            // for (let _0x35bc59 = 0x0, _0x277df9 = _0xecccc6['length']; _0x35bc59 < _0x277df9; _0x35bc59++) {
            //     const _0x2bebb8 = Math['floor'](Math['random']() * (_0x35bc59 + 0x1)), _0xed01b8 = _0xecccc6[_0x2bebb8];
            //     _0xecccc6[_0x2bebb8] = _0xecccc6[_0x35bc59], _0xecccc6[_0x35bc59] = _0xed01b8;
            // }
            // return _0xecccc6;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x15dd7d = new Laya['Image']();
                _0x15dd7d['skin'] = 'yad.png', _0x15dd7d['zOrder'] = 0x30d40, window['yad'] = _0x15dd7d;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x47e644, _0x6fe46e) {
            !this['needStartU' + 'p'] && (_0x6fe46e && _0x6fe46e());
            if (this['initialize' + 'd_'])
                return;
            _0x527235['getInstanc' + 'e']()['showSplash'](), _0x527235['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x4e3069) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x4e3069);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0xec2af1, _0x5aaa9c = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0xec2af1);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x3e1153) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x3e1153);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x2c33b5 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x47e644,
                    'config': _0x2c33b5,
                    'complete': () => {
                        const _0x1e9a0f = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x1e9a0f) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x38b95c => {
                                _0x38b95c['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x6fe46e && _0x6fe46e();
                    }
                });
            }));
        }
        ['showBanner'](_0x5a8953) {
            // _0x5a8953 ? YYGGames['showBanner'](_0x5a8953) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            // YYGGames['hideBanner']();
        }
        ['showSplash'](_0x561cd4) {
            // _0x561cd4 ? YYGGames['showSplash'](_0x561cd4) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            // YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x51e2e7, _0x18cf68) {
            !this['needStartU' + 'p'] && (_0x18cf68 && _0x18cf68());
            if (this['initialize' + 'd_'])
                return;
            _0x527235['getInstanc' + 'e']()['showSplash'](), _0x527235['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x13eaec) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x13eaec);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x10fc05, _0xc9f5fd = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x10fc05);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x278815) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x278815);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x10190a => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x51e2e7,
                    'config': _0x10190a,
                    'complete': () => {
                        const _0x338109 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x338109) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x3196ee => {
                                _0x3196ee['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x18cf68 && _0x18cf68();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x3bf43e, _0x7d301a) {
            !this['needStartU' + 'p'] && (_0x7d301a && _0x7d301a());
            if (this['initialize' + 'd_'])
                return;
            _0x527235['getInstanc' + 'e']()['showSplash'](), _0x527235['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x4b7214) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x4b7214);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x30445f) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x30445f);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x347001) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x42a6e2 => {
                window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                this['needStartU' + 'p'] = ![], _0x7d301a && _0x7d301a();
                // YYGGames['startup']({
                //     'channel': 0x5,
                //     'appName': _0x3bf43e,
                //     'config': _0x42a6e2,
                //     'complete': () => {
                //         const _0x3386be = YYGGames['getAdPlatf' + 'ormType']();
                //         window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                //         switch (_0x3386be) {
                //         case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                //         case AdPlatformType['en_XIAOMI']:
                //             window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                //             break;
                //         default:
                //             window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x25294a => {
                //                 _0x25294a['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                //             });
                //             break;
                //         }
                //         this['needStartU' + 'p'] = ![], _0x7d301a && _0x7d301a();
                //     }
                // });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x3dc3d4 = {
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
            class _0x94fa87 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x527235['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x4bea22 = new Laya['Prefab']();
            _0x4bea22['json'] = _0x3dc3d4, this['noVideoPer'] = _0x4bea22['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x94fa87);
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
            let _0x245325 = {
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
            class _0x5cbeed extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x527235['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x2b7baf = new Laya['Prefab']();
            _0x2b7baf['json'] = _0x245325, this['loadingPer'] = _0x2b7baf['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x5cbeed);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x523715 extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x4a8bc5 = new Laya['List']();
            return _0x4a8bc5['size'](0x320, 0x258), _0x4a8bc5['itemRender'] = _0x523715, _0x4a8bc5;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x3a97cc = new Laya['Box']();
            //     return _0x3a97cc['setSize'] = function () {
            //     }, _0x3a97cc;
            // }
            if (!this['_scrollLis' + 't']) {
                let _0x53da52 = {
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
                class _0x2a52c8 extends Laya['Script'] {
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
                            let _0x20d4d0 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x20d4d0);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x10ea31 = _0x527235['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x10ea31['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x10ea31)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x49f63b, _0x3db91f) {
                        let _0x5969c6 = _0x49f63b['getChildBy' + 'Name']('thumb');
                        _0x49f63b['offAll'](), _0x5969c6['offAll'](), _0x49f63b['on'](Laya['Event']['MOUSE_OVER'], _0x49f63b, () => {
                            _0x49f63b['zOrder'] = 0x64;
                        }), _0x49f63b['on'](Laya['Event']['MOUSE_OUT'], _0x49f63b, () => {
                            _0x49f63b['zOrder'] = _0x3db91f;
                        }), _0x5969c6['on'](Laya['Event']['MOUSE_OVER'], _0x49f63b, () => {
                            _0x5969c6['scale'](1.1, 1.1), this['endAni']();
                        }), _0x5969c6['on'](Laya['Event']['MOUSE_OUT'], _0x49f63b, () => {
                            _0x5969c6['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x5969c6['on'](Laya['Event']['MOUSE_DOWN'], _0x49f63b, _0x599080 => {
                            _0x599080['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x49f63b['dataSource']['id']);
                        });
                        let _0x3348b0 = _0x5969c6['mask'];
                        _0x49f63b['width'] = this['sizeTran'][0x0] + 0x14, _0x49f63b['height'] = this['sizeTran'][0x1] + 0x14, _0x49f63b['x'] = (this['sizeTran'][0x0] + 0x14) * _0x3db91f;
                        if (this['sizeTran'][0x2])
                            _0x3348b0['width'] = _0x5969c6['width'] = this['sizeTran'][0x0], _0x3348b0['height'] = _0x5969c6['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x1bfe22 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x5969c6['width'] = 0xc8 / _0x1bfe22, _0x5969c6['height'] = 0x96 / _0x1bfe22, _0x3348b0['width'] = this['sizeTran'][0x0], _0x3348b0['height'] = this['sizeTran'][0x1];
                        }
                        _0x3348b0['x'] = _0x5969c6['width'] / 0x2, _0x3348b0['y'] = _0x5969c6['height'] / 0x2;
                    }
                    ['setSize'](_0x4ff85b, _0x4cbb80, _0x8fa556 = ![]) {
                        this['sizeTran'] = [
                            _0x4ff85b,
                            _0x4cbb80,
                            _0x8fa556
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x4ff85b + 0x14) * 0x4, this['owner']['height'] = _0x4cbb80 + 0x14, this['img_ListBg']['width'] = (_0x4ff85b + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0x4cbb80 + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x2d8928) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x59fa2a = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x59fa2a);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x32d6dc = new Laya['Prefab']();
                _0x32d6dc['json'] = _0x53da52, this['_scrollLis' + 't'] = _0x32d6dc['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x2a52c8), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x2a52c8)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x2a52c8));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x2d56f3 = new Laya['Box']();
            //     return _0x2d56f3['setSpaceX'] = _0x2d56f3['setSize'] = function () {
            //     }, _0x2d56f3;
            // }
            if (!this['_box_adTwo']) {
                let _0xa4c9eb = {
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
                class _0x4f4fa9 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x4b4dee = _0x527235['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x4b4dee['length'])
                            return;
                        let _0x29d1ae = JSON['parse'](JSON['stringify'](_0x4b4dee));
                        if (this['imgArr']['length']) {
                            let _0x386aef = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x386aef);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x29d1ae[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x29d1ae[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x2f5760 => {
                            _0x2f5760['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x29d1ae[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x216951 => {
                            _0x216951['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x29d1ae[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x2f92ed) {
                        this['spaceNum'] = _0x2f92ed, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x91a599 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x91a599);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x47d9e4, _0x2e7441, _0x34ff18 = ![]) {
                        this['sizeTran'] = [
                            _0x47d9e4,
                            _0x2e7441,
                            _0x34ff18
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x47d9e4 + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x2e7441 + 0x14;
                            if (_0x34ff18)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x47d9e4, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x2e7441;
                            else {
                                let _0x5164a1 = 0xc8 / _0x47d9e4 < 0x96 / _0x2e7441 ? 0xc8 / _0x47d9e4 : 0x96 / _0x2e7441;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x5164a1, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x5164a1, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x47d9e4, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x2e7441;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x9ee826 = new Laya['Prefab']();
                _0x9ee826['json'] = _0xa4c9eb, this['_box_adTwo'] = _0x9ee826['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x4f4fa9), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x4f4fa9)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x4f4fa9)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x4f4fa9)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x4f4fa9));
            }
            return this['_box_adTwo'];
        }
    }
    _0x527235['_instance'] = null, window['platform'] = _0x527235;
    class _0x3bc3df {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x3bc3df['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x3bc3df['_inst'] && new _0x3bc3df(), _0x3bc3df['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x54ee4b = new Laya['Box']();
                return _0x54ee4b['setSpaceX'] = _0x54ee4b['setSize'] = function () {
                }, _0x54ee4b;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x339dc5 = new Laya['Image']();
                _0x339dc5['name'] = 'leftAdBg', _0x339dc5['sizeGrid'] = '30,30,30,3' + '0', _0x339dc5['size'](0xdc, 0xaa), _0x339dc5['skin'] = '';
                let _0x19be5e = new Laya['Image']();
                _0x19be5e['name'] = 'leftAdMask', _0x19be5e['size'](0xc8, 0x96), _0x19be5e['sizeGrid'] = '30,30,30,3' + '0', _0x19be5e['anchorX'] = _0x19be5e['anchorY'] = 0.5, _0x19be5e['skin'] = '';
                let _0x1d58e7 = new Laya['Image']();
                _0x1d58e7['name'] = 'leftAd', _0x1d58e7['size'](0xc8, 0x96), _0x1d58e7['anchorX'] = _0x1d58e7['anchorY'] = 0.5, _0x1d58e7['skin'] = '', _0x1d58e7['mask'] = _0x19be5e, _0x339dc5['addChild'](_0x1d58e7), _0x339dc5['pos'](0x0, 0x0), _0x1d58e7['pos'](_0x339dc5['width'] / 0x2, _0x339dc5['height'] / 0x2), _0x19be5e['pos'](_0x1d58e7['width'] / 0x2, _0x1d58e7['height'] / 0x2);
                let _0x34a8e9 = new Laya['Image']();
                _0x34a8e9['name'] = 'rightAdBg', _0x34a8e9['sizeGrid'] = '30,30,30,3' + '0', _0x34a8e9['size'](0xdc, 0xaa), _0x34a8e9['skin'] = '';
                let _0x155ad7 = new Laya['Image']();
                _0x155ad7['name'] = 'rightAdMas' + 'k', _0x155ad7['size'](0xc8, 0x96), _0x155ad7['sizeGrid'] = '30,30,30,3' + '0', _0x155ad7['anchorX'] = _0x155ad7['anchorY'] = 0.5, _0x155ad7['skin'] = '';
                let _0x5090c6 = new Laya['Image']();
                _0x5090c6['name'] = 'rightAd', _0x5090c6['size'](0xc8, 0x96), _0x5090c6['anchorX'] = _0x5090c6['anchorY'] = 0.5, _0x5090c6['skin'] = '', _0x5090c6['mask'] = _0x155ad7, _0x34a8e9['addChild'](_0x5090c6), _0x34a8e9['pos'](_0x339dc5['width'], 0x0), _0x5090c6['pos'](_0x34a8e9['width'] / 0x2, _0x34a8e9['height'] / 0x2), _0x155ad7['pos'](_0x5090c6['width'] / 0x2, _0x5090c6['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x339dc5['width'] + _0x34a8e9['width'], this['_box_adTwo' + '0']['addChild'](_0x339dc5), this['_box_adTwo' + '0']['addChild'](_0x34a8e9), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x69c09c = _0x527235['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x69c09c['length'])
                    return;
                let _0x3d3a20 = JSON['parse'](JSON['stringify'](_0x69c09c));
                _0x1d58e7['offAll'](), _0x5090c6['offAll'](), _0x1d58e7['skin'] = _0x3d3a20[0x0]['thumb'], _0x5090c6['skin'] = _0x3d3a20[0x1]['thumb'], _0x1d58e7['on'](Laya['Event']['MOUSE_DOWN'], this, _0x146b1a => {
                    _0x146b1a['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3d3a20[0x0]['id']);
                }), _0x5090c6['on'](Laya['Event']['MOUSE_DOWN'], this, _0x1daf95 => {
                    _0x1daf95['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3d3a20[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x486c38 = 0xc8, _0x244e17 = 0x96, _0x244d5f = ![], _0x299bfe = !![]) {
            let _0x54e63d = 0x1;
            _0x486c38 / 0xc8 > _0x244e17 / 0x96 ? _0x54e63d = _0x486c38 / 0xc8 : _0x54e63d = _0x244e17 / 0x96;
            let _0x4b8f8f = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x5a8b0d = this['getChildBy' + 'Name']('leftAdBg'), _0x3f3625 = this['getChildBy' + 'Name']('rightAdBg'), _0x5853fb = _0x5a8b0d['getChildBy' + 'Name']('leftAd'), _0x2ea161 = _0x3f3625['getChildBy' + 'Name']('rightAd');
                _0x299bfe && (_0x5a8b0d['size'](0xdc, 0xaa), _0x3f3625['size'](0xdc, 0xaa), _0x5853fb['size'](0xc8, 0x96), _0x2ea161['size'](0xc8, 0x96), _0x5853fb['mask']['size'](0xc8, 0x96), _0x2ea161['mask']['size'](0xc8, 0x96), _0x5a8b0d['scale'](0x1, 0x1), _0x3f3625['scale'](0x1, 0x1), _0x5853fb['scale'](0x1, 0x1), _0x2ea161['scale'](0x1, 0x1), _0x5853fb['mask']['scale'](0x1, 0x1), _0x2ea161['mask']['scale'](0x1, 0x1));
                let _0x30e739 = 0xc8 * _0x244e17 / _0x486c38;
                _0x5a8b0d['size'](_0x4b8f8f + 0x14, _0x30e739 + 0x14), _0x3f3625['size'](_0x4b8f8f + 0x14, _0x30e739 + 0x14), _0x5853fb['mask']['size'](_0x4b8f8f, _0x30e739), _0x2ea161['mask']['size'](_0x4b8f8f, _0x30e739), !_0x244d5f ? (_0x5853fb['size'](_0x4b8f8f, _0x30e739), _0x2ea161['size'](_0x4b8f8f, _0x30e739)) : (_0x5853fb['size'](0xc8 * _0x54e63d, 0x96 * _0x54e63d), _0x2ea161['size'](0xc8 * _0x54e63d, 0x96 * _0x54e63d)), _0x5853fb['pos'](_0x5a8b0d['width'] / 0x2, _0x5a8b0d['height'] / 0x2), _0x5853fb['mask']['pos'](_0x5853fb['width'] / 0x2, _0x5853fb['height'] / 0x2), _0x2ea161['pos'](_0x3f3625['width'] / 0x2, _0x3f3625['height'] / 0x2), _0x2ea161['mask']['pos'](_0x2ea161['width'] / 0x2, _0x2ea161['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else {
                if (this['name'] == '_scrollLis' + 't') {
                    this['sizeArr'] = [
                        _0x486c38,
                        _0x244e17,
                        _0x244d5f,
                        _0x299bfe
                    ];
                    let _0x59def6 = 0x1;
                    this['sizeArr'][0x0] / 0xc8 > this['sizeArr'][0x1] / 0x96 ? _0x59def6 = this['sizeArr'][0x0] / 0xc8 : _0x59def6 = this['sizeArr'][0x1] / 0x96;
                    let _0x479e14 = 0xc8, _0x12a40b = 0xc8 * this['sizeArr'][0x1] / this['sizeArr'][0x0];
                    !this['sizeArr'][0x2] ? (this['height'] = _0x12a40b + 0x14, this['getChildBy' + 'Name']('listAd')['height'] = _0x12a40b + 0x14) : (this['height'] = (_0x12a40b + 0x14) * _0x59def6, this['getChildBy' + 'Name']('listAd')['height'] = (_0x12a40b + 0x14) * _0x59def6);
                }
            }
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x1feb18 = new Laya['Box']();
                return _0x1feb18['setSize'] = function () {
                }, _0x1feb18;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = '', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x5580ad extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = '', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x9451e = new Laya['List']();
                _0x9451e['hScrollBar' + 'Skin'] = '\x20', _0x9451e['name'] = 'listAd', _0x9451e['anchorX'] = _0x9451e['anchorY'] = 0.5, _0x9451e['size'](0x370, 0xaa), _0x9451e['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x9451e['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x9451e['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x9451e['itemRender'] = _0x5580ad, _0x9451e['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x9451e), _0x9451e['centerX'] = _0x9451e['centerY'] = 0x0;
                let _0x1869f3 = _0x527235['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x1869f3['length'])
                    return;
                let _0x24ac33 = JSON['parse'](JSON['stringify'](_0x1869f3));
                _0x24ac33 = _0x24ac33['concat'](_0x24ac33['slice'](0x0, 0x4)), _0x9451e['array'] = _0x24ac33, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x9451e['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x1dc34c, _0x2829aa) {
            let _0x243db6 = _0x1dc34c['dataSource'], _0xaff8b0 = _0x1dc34c['getChildBy' + 'Name']('img'), _0x3e64f9 = _0xaff8b0['mask'];
            _0xaff8b0['skin'] = _0x243db6['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x1dc34c['size'](0xdc, 0xaa), _0x1dc34c['img']['size'](0xc8, 0x96), _0x3e64f9['size'](0xc8, 0x96), _0x1dc34c['scale'](0x1, 0x1), _0x1dc34c['scale'](0x1, 0x1), _0x3e64f9['scale'](0x1, 0x1));
            _0x1dc34c['offAll'](), _0xaff8b0['offAll'](), _0x1dc34c['on'](Laya['Event']['MOUSE_OVER'], _0x1dc34c, () => {
                _0x1dc34c['zOrder'] = 0x64;
            }), _0x1dc34c['on'](Laya['Event']['MOUSE_OUT'], _0x1dc34c, () => {
                _0x1dc34c['zOrder'] = _0x2829aa;
            }), _0xaff8b0['on'](Laya['Event']['MOUSE_OVER'], _0x1dc34c, () => {
                _0xaff8b0['scale'](_0xaff8b0['scaleX'] + 0.1, _0xaff8b0['scaleY'] + 0.1), this['endAni']();
            }), _0xaff8b0['on'](Laya['Event']['MOUSE_OUT'], _0x1dc34c, () => {
                _0xaff8b0['scale'](_0xaff8b0['scaleX'] - 0.1, _0xaff8b0['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0xaff8b0['on'](Laya['Event']['MOUSE_DOWN'], _0x1dc34c, _0x2b89e4 => {
                _0x2b89e4['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x243db6['id']);
            });
            let _0x2f911b = 0x1;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x2f911b = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x2f911b = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x5b479b = 0xc8, _0xc0a3c2 = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            !this['_scrollLis' + 't']['sizeArr'][0x2] ? (_0x1dc34c['img']['size'](_0x5b479b, _0xc0a3c2), _0x1dc34c['size'](_0x5b479b + 0x14, _0xc0a3c2 + 0x14), _0x3e64f9['size'](_0x5b479b, _0xc0a3c2)) : (_0x1dc34c['img']['size'](_0x5b479b * _0x2f911b, _0xc0a3c2 * _0x2f911b), _0x1dc34c['size']((_0x5b479b + 0x14) * _0x2f911b, (_0xc0a3c2 + 0x14) * _0x2f911b), _0x3e64f9['size'](_0x5b479b * _0x2f911b, _0xc0a3c2 * _0x2f911b)), _0xaff8b0['pos'](_0x1dc34c['width'] / 0x2, _0x1dc34c['height'] / 0x2), _0x3e64f9['pos'](_0xaff8b0['width'] / 0x2, _0xaff8b0['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x412642 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x412642['scrollBar']['value'] += 0x1, _0x412642['scrollBar']['value'] >= _0x412642['scrollBar']['max'] && (_0x412642['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x42e4af) {
            if (_0x42e4af['name'] == '_box_adTwo' + '0') {
                let _0x267013 = _0x42e4af['getChildBy' + 'Name']('leftAdBg'), _0x25528a = _0x42e4af['getChildBy' + 'Name']('rightAdBg'), _0x26ab2b = _0x527235['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x26ab2b['length'])
                    return;
                let _0x468200 = JSON['parse'](JSON['stringify'](_0x26ab2b));
                _0x267013['offAll'](), _0x25528a['offAll'](), _0x267013['getChildBy' + 'Name']('leftAd')['skin'] = _0x468200[0x0]['thumb'], _0x25528a['getChildBy' + 'Name']('rightAd')['skin'] = _0x468200[0x1]['thumb'], _0x267013['on'](Laya['Event']['MOUSE_DOWN'], _0x42e4af, _0x5af1bd => {
                    _0x5af1bd['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x468200[0x0]['id']);
                }), _0x25528a['on'](Laya['Event']['MOUSE_DOWN'], _0x42e4af, _0x3aef6c => {
                    _0x3aef6c['stopPropag' + 'ation'](), _0x527235['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x468200[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x4e0222) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x1aa5fa = this['getChildBy' + 'Name']('leftAdBg'), _0x313f83 = this['getChildBy' + 'Name']('rightAdBg');
                _0x313f83['pos'](_0x1aa5fa['width'] + _0x4e0222, 0x0), this['width'] = _0x1aa5fa['width'] + _0x313f83['width'] + _0x4e0222, this['spaceXNum'] = _0x4e0222;
            }
        }
    }
    _0x3bc3df['_inst'] = null;
}();