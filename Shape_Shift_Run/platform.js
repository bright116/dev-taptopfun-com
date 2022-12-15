!function () {
    class _0x15cb98 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x4ecea9, _0x36264b) => {
                try {
                    this['musicAudio'] = new _0x1056ef(), this['soundAudio'] = new _0x1056ef(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x4ecea9(!![]);
                } catch (_0x29b22d) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x29b22d), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x4ecea9(![]);
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
        set ['muted'](_0x1aff0a) {
            this['isMuted'] = _0x1aff0a, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x4a3049) {
            this['pauseSound'] = _0x4a3049, this['pauseMusic'] = _0x4a3049, !_0x4a3049 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x3dab55) {
            this['bePauseSou' + 'nd'] = _0x3dab55;
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
        set ['pauseMusic'](_0x113923) {
            this['bePauseMus' + 'ic'] = _0x113923;
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
        ['parse'](_0x39951c, _0x467718, _0x38ec5d) {
            this['soundAudio']['parse'](_0x39951c, _0x467718);
        }
        ['playMusic'](_0x1571ac) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x1571ac);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x1da6bf) {
            this['soundAudio']['stop'](_0x1da6bf);
        }
        set ['musicVolum' + 'e'](_0x5e2567) {
            this['musicAudio']['musicVolum' + 'e'] = _0x5e2567;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x23138b, _0x2c47b3 = ![], _0x478476 = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0x23138b, _0x2c47b3, _0x478476);
        }
    }
    class _0x31dc99 {
    }
    class _0x1056ef {
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
            const _0x21fb70 = this['_audioInst' + 'ances']['values']();
            for (const _0x34bf68 of _0x21fb70) {
                const _0x111f33 = _0x34bf68['instance'];
                if (_0x111f33['source']['buffer'] && !_0x111f33['source']['loop']) {
                    try {
                        _0x111f33['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x159320) {
                        _0x111f33['source']['disconnect']();
                    }
                    _0x111f33['source']['onended'] = function () {
                    }, _0x111f33['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x1034de = this['_audioInst' + 'ances']['values']();
            for (const _0x25aefa of _0x1034de) {
                const _0x5b89f7 = _0x25aefa['instance'];
                if (_0x5b89f7['source']['buffer']) {
                    try {
                        _0x5b89f7['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x3676e6) {
                        _0x5b89f7['source']['disconnect']();
                    }
                    _0x5b89f7['source']['onended'] = function () {
                    }, _0x5b89f7['setup']();
                }
            }
        }
        ['stop'](_0x1fcc41) {
            if (this['_audioInst' + 'ances']['has'](_0x1fcc41)) {
                const _0xa0d720 = this['_audioInst' + 'ances']['get'](_0x1fcc41);
                this['_stopSound'](_0xa0d720);
            }
        }
        ['_stopSound'](_0x5d95d6) {
            const _0x55aa3a = _0x5d95d6['instance'];
            if (_0x55aa3a['source']['buffer']) {
                try {
                    _0x55aa3a['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x2dc6d3) {
                    _0x55aa3a['source']['disconnect']();
                }
                _0x55aa3a['source']['onended'] = function () {
                }, _0x55aa3a['setup']();
            }
        }
        ['playMusic'](_0x4695fc) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x4695fc) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x4695fc), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x4695fc, !![])) : this['downloadAr' + 'rayBuffer'](_0x4695fc, () => {
                this['playMusic'](_0x4695fc);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x578a24) {
            this['_musicVolu' + 'me'] = _0x578a24, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0x41c16d, _0x59dbff = ![], _0x3fb951 = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0x41c16d)) {
                const _0x361b57 = this['_audioInst' + 'ances']['get'](_0x41c16d), _0x4bcf95 = _0x361b57['instance'];
                if (_0x3fb951 && !_0x4bcf95['ended'])
                    return;
                this['stop'](_0x41c16d);
                if (_0x361b57['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x59dbff)
                            return;
                        _0x4bcf95['playBuffer'](this['context']['currentTim' + 'e'], _0x361b57['buffer']), _0x4bcf95['source']['loop'] = _0x59dbff;
                    } catch (_0x4e8ed4) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x4e8ed4);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0x41c16d, () => {
                    this['play'](_0x41c16d, _0x59dbff);
                });
        }
        ['load'](_0x53f0ba, _0x57a3ff) {
            let _0x1c9ebf = _0x53f0ba['length'], _0x47f23d = 0x0;
            for (let _0x1a2a15 = 0x0; _0x1a2a15 < _0x53f0ba['length']; _0x1a2a15++) {
                const _0x386db4 = _0x53f0ba[_0x1a2a15];
                this['downloadAr' + 'rayBuffer'](_0x386db4, () => {
                    _0x47f23d++, _0x47f23d >= _0x1c9ebf && (_0x57a3ff && _0x57a3ff());
                });
            }
        }
        ['setThreeD'](_0x3ba50a) {
            if (this['_audioInst' + 'ances']['has'](_0x3ba50a)) {
                const _0x1fca3b = this['_audioInst' + 'ances']['get'](_0x3ba50a);
                _0x1fca3b['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x581f6d = this['context'];
            const _0x5eb2be = {
                'gain': _0x581f6d['createGain'](),
                'panner': _0x581f6d['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x52fe69, _0x531363, _0x52f843) {
                    this['source']['buffer'] = _0x531363;
                    var _0x20214c = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x20214c['setup'](), _0x20214c['ended'] = !![];
                    }, this['source']['start'](_0x52fe69, _0x52f843);
                },
                'setup': function () {
                    this['source'] = _0x581f6d['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x5eb2be['panner']['rolloffFac' + 'tor'] = 0x0, _0x5eb2be['gain']['connect'](this['context']['destinatio' + 'n']), _0x5eb2be['setup'](), _0x5eb2be;
        }
        ['parse'](_0x2efe7b, _0x1aa438, _0x28e0d1) {
            const _0x4c3d18 = new _0x31dc99();
            _0x4c3d18['url'] = _0x2efe7b, _0x4c3d18['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x2efe7b, _0x4c3d18), this['context']['decodeAudi' + 'oData'](_0x1aa438, function (_0x12c810) {
                _0x4c3d18['buffer'] = _0x12c810, _0x28e0d1 && _0x28e0d1();
            }, function (_0x131f5e) {
                _0x4c3d18['error'] = !![], _0x28e0d1 && _0x28e0d1(), console['log']('Decode\x20err' + 'or.' + _0x4c3d18['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x1ac0d1, _0x94c0d1) {
            if (this['_audioInst' + 'ances']['has'](_0x1ac0d1)) {
                _0x94c0d1 && _0x94c0d1();
                return;
            }
            const _0x438e29 = this;
            var _0x5280ac = new XMLHttpRequest();
            _0x5280ac['open']('GET', _0x1ac0d1, !![]), _0x5280ac['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x5280ac['onload'] = function () {
                if (_0x5280ac['status'] === 0xc8 || _0x5280ac['status'] === 0x0)
                    _0x438e29['parse'](_0x1ac0d1, _0x5280ac['response'], _0x94c0d1);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x5280ac['onerror'] = function () {
                _0x94c0d1 && _0x94c0d1();
                throw 'no\x20respons' + 'e';
            }, _0x5280ac['ontimeout'] = function () {
                _0x94c0d1 && _0x94c0d1();
            }, _0x5280ac['onabort'] = function () {
                _0x94c0d1 && _0x94c0d1();
            }, _0x5280ac['send'](null);
        }
    }
    const _0x3f0d3b = window['WebAudioEn' + 'gine'] = new _0x15cb98();
    class _0x4e8e7a {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x4e8e7a()), this['_instance'];
        }
        ['initData']() {
            let _0x48ba16 = document['getElement' + 'ById']('layaCanvas');
            _0x48ba16 && (_0x48ba16['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x48ba16['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x37a5ac) {
            let _0x1dbe5e = null;
            try {
                let _0x4e406f = Laya['LocalStora' + 'ge']['getItem'](_0x37a5ac);
                _0x1dbe5e = JSON['parse'](_0x4e406f);
            } catch (_0x4c4230) {
            }
            return _0x1dbe5e;
        }
        ['setStorage' + 'Sync'](_0x39ef67, _0x23eceb) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x39ef67, JSON['stringify'](_0x23eceb));
        }
        ['navigate'](_0x22cd81, _0x5d4c15, _0x4cc619) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x22cd81, this['action_'] = _0x5d4c15, this['to_'] = _0x4cc619, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x3f0d3b['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x3f0d3b['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x5ae31f) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x5ae31f && _0x5ae31f();
            return;
            // YYGGames['showInters' + 'titial']({
            //     'beforeShowAd': () => {
            //         window['WebAudioEn' + 'gine']['adShowing'] = !![], this['onblur'](), Laya['timer']['scale'] = 0x0, Laya['stage']['renderingE' + 'nabled'] = ![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['pause'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['pause']();
            //     },
            //     'afterShowAd': () => {
            //         window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x5ae31f && _0x5ae31f();
            //     }
            // });
        }
        ['showReward'](_0x12a19c, _0x325bcf, _0x54d51b) {
            //TODO showReward
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                    _0x12a19c && _0x12a19c(), _0x54d51b && _0x54d51b(), _0x54d51b = null, _0x12a19c = null;
                },
                () => {
                    // 广告请求失败或者用户跳过广告
                    _0x325bcf && (_0x325bcf(), _0x54d51b && _0x54d51b(), _0x54d51b = null, _0x325bcf = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            );
            return;
            // if (!YYGGames['canShowRew' + 'ard']()) {
            //     this['prompt']('No\x20Availab' + 'le\x20Video'), _0x54d51b && _0x54d51b();
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
            //         _0x12a19c && _0x12a19c(), _0x54d51b && _0x54d51b(), _0x54d51b = null, _0x12a19c = null;
            //     },
            //     'rewardDismissed': () => {
            //         _0x325bcf && (_0x325bcf(), _0x54d51b && _0x54d51b(), _0x54d51b = null, _0x325bcf = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
            //     }
            // });
        }
        ['initList'](_0x138f9e) {
        }
        ['prompt'](_0x701edb, _0x3d6103) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x5752b0 = Laya['stage']['designWidt' + 'h'], _0x332854 = Laya['stage']['designHeig' + 'ht'];
            var _0x20ffa8 = window['innerWidth'], _0x2d30d4 = window['innerHeigh' + 't'], _0x3e6cf4, _0x1be905;
            _0x20ffa8 / _0x2d30d4 > _0x5752b0 / _0x332854 ? (_0x3e6cf4 = _0x2d30d4, _0x1be905 = _0x3e6cf4 * _0x5752b0 / _0x332854) : (_0x1be905 = _0x20ffa8, _0x3e6cf4 = _0x1be905 * _0x332854 / _0x5752b0), this['prompt_']['style']['width'] = _0x1be905 - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x701edb, _0x3d6103 = isNaN(_0x3d6103) ? 0x7d0 : _0x3d6103, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x37793e = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x37793e + ('s\x20ease-in,' + '\x20opacity\x20') + _0x37793e + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x3d6103);
        }
        ['prompt0'](_0x2ecc12, _0x4a3be7 = 0xbb8) {
            if (!Laya)
                return;
            !this['labelInfo'] && (this['labelBg'] = new Laya['Box'](), this['labelBg']['bgColor'] = '#000000', this['labelBg']['alpha'] = 0.5, this['labelBg']['centerX'] = 0x0, this['labelBg']['centerY'] = -0x32, this['labelInfo'] = new Laya['Label'](), this['labelInfo']['align'] = 'center', this['labelInfo']['valign'] = 'middle', this['labelInfo']['color'] = '#ffffff', this['labelInfo']['fontSize'] = 0x1e, this['labelInfo']['centerX'] = 0x0, this['labelInfo']['centerY'] = -0x32, this['labelInfo']['zOrder'] = 0x174876e800), this['labelInfo']['width'] = null, this['labelInfo']['height'] = null, this['labelInfo']['wordWrap'] = ![], this['labelInfo']['visible'] = ![], this['labelInfo']['text'] = _0x2ecc12, this['labelInfo']['height'] += 0x28, this['labelInfo']['width'] > Laya['stage']['width'] - 0x64 && (this['labelInfo']['width'] = Laya['stage']['width'] - 0x64, this['labelInfo']['wordWrap'] = !![]), this['labelBg']['visible'] = this['labelInfo']['visible'] = !![], Laya['stage']['addChild'](this['labelBg']), Laya['stage']['addChild'](this['labelInfo']), Laya['timer']['clear'](this, this['clearLabel']), this['labelBg']['width'] = this['labelInfo']['width'] + 0x14, this['labelBg']['height'] = this['labelInfo']['height'], Laya['timer']['once'](_0x4a3be7, this, this['clearLabel']);
        }
        ['clearLabel']() {
            this['labelBg']['visible'] = this['labelInfo']['visible'] = ![];
        }
        ['getForgame' + 's']() {
            return []
            // let _0x5c670e = YYGGames['forgames'] || [], _0x519c0d = _0x5c670e['slice']();
            // for (let _0x567e6e = 0x0, _0x172d73 = _0x519c0d['length']; _0x567e6e < _0x172d73; _0x567e6e++) {
            //     const _0x2f051e = Math['floor'](Math['random']() * (_0x567e6e + 0x1)), _0x284a24 = _0x519c0d[_0x2f051e];
            //     _0x519c0d[_0x2f051e] = _0x519c0d[_0x567e6e], _0x519c0d[_0x567e6e] = _0x284a24;
            // }
            // return _0x519c0d;
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x1862b6 = new Laya['Image']();
                _0x1862b6['skin'] = 'yad.png', _0x1862b6['zOrder'] = 0x30d40, window['yad'] = _0x1862b6;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x264270, _0x1571f6) {
            !this['needStartU' + 'p'] && (_0x1571f6 && _0x1571f6());
            if (this['initialize' + 'd_'])
                return;
            _0x4e8e7a['getInstanc' + 'e']()['showSplash'](), _0x4e8e7a['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x12808e) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x12808e);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x20030d, _0x179cc1 = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x20030d);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x3fc44a) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x3fc44a);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x4ade43 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x264270,
                    'config': _0x4ade43,
                    'complete': () => {
                        const _0x71a245 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x71a245) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x44ebdc => {
                                _0x44ebdc['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x1571f6 && _0x1571f6();
                    }
                });
            }));
        }
        ['showBanner'](_0x4af1df) {
            // _0x4af1df ? YYGGames['showBanner'](_0x4af1df) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            // YYGGames['hideBanner']();
        }
        ['showSplash'](_0x23b4bd) {
            // _0x23b4bd ? YYGGames['showSplash'](_0x23b4bd) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            // YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x38f521, _0x5bfb9d) {
            !this['needStartU' + 'p'] && (_0x5bfb9d && _0x5bfb9d());
            if (this['initialize' + 'd_'])
                return;
            _0x4e8e7a['getInstanc' + 'e']()['showSplash'](), _0x4e8e7a['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x5448ed) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x5448ed);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x156c75, _0x1b5a5e = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x156c75);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x1455a7) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x1455a7);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x3c07cc => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x38f521,
                    'config': _0x3c07cc,
                    'complete': () => {
                        const _0x1f95b6 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x1f95b6) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x4b57c8 => {
                                _0x4b57c8['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x5bfb9d && _0x5bfb9d();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x333c6e, _0x3dd523) {
            !this['needStartU' + 'p'] && (_0x3dd523 && _0x3dd523());
            if (this['initialize' + 'd_'])
                return;
            _0x4e8e7a['getInstanc' + 'e']()['showSplash'](), _0x4e8e7a['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x30b140) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x30b140);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x1e0aa1) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x1e0aa1);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0xc87b8d) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x200938 => {
                window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                this['needStartU' + 'p'] = ![], _0x3dd523 && _0x3dd523();
                // YYGGames['startup']({
                //     'channel': 0x5,
                //     'appName': _0x333c6e,
                //     'config': _0x200938,
                //     'complete': () => {
                //         const _0x1123cd = YYGGames['getAdPlatf' + 'ormType']();
                //         window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                //         switch (_0x1123cd) {
                //         case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                //         case AdPlatformType['en_XIAOMI']:
                //             window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                //             break;
                //         default:
                //             window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0xf10d8f => {
                //                 _0xf10d8f['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                //             });
                //             break;
                //         }
                //         this['needStartU' + 'p'] = ![], _0x3dd523 && _0x3dd523();
                //     }
                // });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0xbdc74d = {
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
            class _0x18823d extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x4e8e7a['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x73d8fa = new Laya['Prefab']();
            _0x73d8fa['json'] = _0xbdc74d, this['noVideoPer'] = _0x73d8fa['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x18823d);
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
            let _0x29a45c = {
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
            class _0x5a1f16 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x4e8e7a['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x596807 = new Laya['Prefab']();
            _0x596807['json'] = _0x29a45c, this['loadingPer'] = _0x596807['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x5a1f16);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x6848ee extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x498186 = new Laya['List']();
            return _0x498186['size'](0x320, 0x258), _0x498186['itemRender'] = _0x6848ee, _0x498186;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x8a55a = new Laya['Box']();
            //     return _0x8a55a['setSize'] = function () {
            //     }, _0x8a55a;
            // }
            if (!this['_scrollLis' + 't']) {
                let _0x18b7d2 = {
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
                class _0x596df1 extends Laya['Script'] {
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
                            let _0x5559a3 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x5559a3);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x21be0c = _0x4e8e7a['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x21be0c['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x21be0c)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x9f0d3b, _0x455ca5) {
                        let _0x2af7c7 = _0x9f0d3b['getChildBy' + 'Name']('thumb');
                        _0x9f0d3b['offAll'](), _0x2af7c7['offAll'](), _0x9f0d3b['on'](Laya['Event']['MOUSE_OVER'], _0x9f0d3b, () => {
                            _0x9f0d3b['zOrder'] = 0x64;
                        }), _0x9f0d3b['on'](Laya['Event']['MOUSE_OUT'], _0x9f0d3b, () => {
                            _0x9f0d3b['zOrder'] = _0x455ca5;
                        }), _0x2af7c7['on'](Laya['Event']['MOUSE_OVER'], _0x9f0d3b, () => {
                            _0x2af7c7['scale'](1.1, 1.1), this['endAni']();
                        }), _0x2af7c7['on'](Laya['Event']['MOUSE_OUT'], _0x9f0d3b, () => {
                            _0x2af7c7['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x2af7c7['on'](Laya['Event']['MOUSE_DOWN'], _0x9f0d3b, _0x20219a => {
                            _0x20219a['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x9f0d3b['dataSource']['id']);
                        });
                        let _0x4f7db1 = _0x2af7c7['mask'];
                        _0x9f0d3b['width'] = this['sizeTran'][0x0] + 0x14, _0x9f0d3b['height'] = this['sizeTran'][0x1] + 0x14, _0x9f0d3b['x'] = (this['sizeTran'][0x0] + 0x14) * _0x455ca5;
                        if (this['sizeTran'][0x2])
                            _0x4f7db1['width'] = _0x2af7c7['width'] = this['sizeTran'][0x0], _0x4f7db1['height'] = _0x2af7c7['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x489027 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x2af7c7['width'] = 0xc8 / _0x489027, _0x2af7c7['height'] = 0x96 / _0x489027, _0x4f7db1['width'] = this['sizeTran'][0x0], _0x4f7db1['height'] = this['sizeTran'][0x1];
                        }
                        _0x4f7db1['x'] = _0x2af7c7['width'] / 0x2, _0x4f7db1['y'] = _0x2af7c7['height'] / 0x2;
                    }
                    ['setSize'](_0x451900, _0xdeb75e, _0x3b7d03 = ![]) {
                        this['sizeTran'] = [
                            _0x451900,
                            _0xdeb75e,
                            _0x3b7d03
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x451900 + 0x14) * 0x4, this['owner']['height'] = _0xdeb75e + 0x14, this['img_ListBg']['width'] = (_0x451900 + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0xdeb75e + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x26190d) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x477a08 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x477a08);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x22dee4 = new Laya['Prefab']();
                _0x22dee4['json'] = _0x18b7d2, this['_scrollLis' + 't'] = _0x22dee4['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x596df1), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x596df1)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x596df1));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x3ff22b = new Laya['Box']();
            //     return _0x3ff22b['setSpaceX'] = _0x3ff22b['setSize'] = function () {
            //     }, _0x3ff22b;
            // }
            if (!this['_box_adTwo']) {
                let _0xb74ee6 = {
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
                class _0x123b38 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x39b198 = _0x4e8e7a['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x39b198['length'])
                            return;
                        let _0x1b4a29 = JSON['parse'](JSON['stringify'](_0x39b198));
                        if (this['imgArr']['length']) {
                            let _0x3bfc1d = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x3bfc1d);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x1b4a29[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x1b4a29[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x2a8758 => {
                            _0x2a8758['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x1b4a29[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x43e4f5 => {
                            _0x43e4f5['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x1b4a29[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x34a50a) {
                        this['spaceNum'] = _0x34a50a, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x333efe = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x333efe);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x3e798b, _0x132db1, _0xaa490f = ![]) {
                        this['sizeTran'] = [
                            _0x3e798b,
                            _0x132db1,
                            _0xaa490f
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x3e798b + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x132db1 + 0x14;
                            if (_0xaa490f)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x3e798b, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x132db1;
                            else {
                                let _0x3ff874 = 0xc8 / _0x3e798b < 0x96 / _0x132db1 ? 0xc8 / _0x3e798b : 0x96 / _0x132db1;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x3ff874, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x3ff874, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x3e798b, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x132db1;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x410ea4 = new Laya['Prefab']();
                _0x410ea4['json'] = _0xb74ee6, this['_box_adTwo'] = _0x410ea4['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x123b38), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x123b38)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x123b38)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x123b38)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x123b38));
            }
            return this['_box_adTwo'];
        }
    }
    _0x4e8e7a['_instance'] = null, window['platform'] = _0x4e8e7a;
    class _0x2943a1 {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x2943a1['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x2943a1['_inst'] && new _0x2943a1(), _0x2943a1['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x13812c = new Laya['Box']();
                return _0x13812c['setSpaceX'] = _0x13812c['setSize'] = function () {
                }, _0x13812c;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x5a90ed = new Laya['Image']();
                _0x5a90ed['name'] = 'leftAdBg', _0x5a90ed['sizeGrid'] = '30,30,30,3' + '0', _0x5a90ed['size'](0xdc, 0xaa), _0x5a90ed['skin'] = '';
                let _0x2da36d = new Laya['Image']();
                _0x2da36d['name'] = 'leftAdMask', _0x2da36d['size'](0xc8, 0x96), _0x2da36d['sizeGrid'] = '30,30,30,3' + '0', _0x2da36d['anchorX'] = _0x2da36d['anchorY'] = 0.5, _0x2da36d['skin'] = '';
                let _0x6a9096 = new Laya['Image']();
                _0x6a9096['name'] = 'leftAd', _0x6a9096['size'](0xc8, 0x96), _0x6a9096['anchorX'] = _0x6a9096['anchorY'] = 0.5, _0x6a9096['skin'] = '', _0x6a9096['mask'] = _0x2da36d, _0x5a90ed['addChild'](_0x6a9096), _0x5a90ed['pos'](0x0, 0x0), _0x6a9096['pos'](_0x5a90ed['width'] / 0x2, _0x5a90ed['height'] / 0x2), _0x2da36d['pos'](_0x6a9096['width'] / 0x2, _0x6a9096['height'] / 0x2);
                let _0x4662a5 = new Laya['Image']();
                _0x4662a5['name'] = 'rightAdBg', _0x4662a5['sizeGrid'] = '30,30,30,3' + '0', _0x4662a5['size'](0xdc, 0xaa), _0x4662a5['skin'] = '';
                let _0x87bb6e = new Laya['Image']();
                _0x87bb6e['name'] = 'rightAdMas' + 'k', _0x87bb6e['size'](0xc8, 0x96), _0x87bb6e['sizeGrid'] = '30,30,30,3' + '0', _0x87bb6e['anchorX'] = _0x87bb6e['anchorY'] = 0.5, _0x87bb6e['skin'] = '';
                let _0x45fba5 = new Laya['Image']();
                _0x45fba5['name'] = 'rightAd', _0x45fba5['size'](0xc8, 0x96), _0x45fba5['anchorX'] = _0x45fba5['anchorY'] = 0.5, _0x45fba5['skin'] = '', _0x45fba5['mask'] = _0x87bb6e, _0x4662a5['addChild'](_0x45fba5), _0x4662a5['pos'](_0x5a90ed['width'], 0x0), _0x45fba5['pos'](_0x4662a5['width'] / 0x2, _0x4662a5['height'] / 0x2), _0x87bb6e['pos'](_0x45fba5['width'] / 0x2, _0x45fba5['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x5a90ed['width'] + _0x4662a5['width'], this['_box_adTwo' + '0']['addChild'](_0x5a90ed), this['_box_adTwo' + '0']['addChild'](_0x4662a5), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x44c0f8 = _0x4e8e7a['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x44c0f8['length'])
                    return;
                let _0x24be02 = JSON['parse'](JSON['stringify'](_0x44c0f8));
                _0x6a9096['offAll'](), _0x45fba5['offAll'](), _0x6a9096['skin'] = _0x24be02[0x0]['thumb'], _0x45fba5['skin'] = _0x24be02[0x1]['thumb'], _0x6a9096['on'](Laya['Event']['MOUSE_DOWN'], this, _0x685746 => {
                    _0x685746['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x24be02[0x0]['id']);
                }), _0x45fba5['on'](Laya['Event']['MOUSE_DOWN'], this, _0x3fb24a => {
                    _0x3fb24a['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x24be02[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x4bbda7 = 0xc8, _0x2eb913 = 0x96, _0x2f83e8 = ![], _0x498f19 = !![]) {
            let _0x29a5b4 = 0x1;
            _0x4bbda7 / 0xc8 > _0x2eb913 / 0x96 ? _0x29a5b4 = _0x4bbda7 / 0xc8 : _0x29a5b4 = _0x2eb913 / 0x96;
            let _0x7a94b1 = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x30e195 = this['getChildBy' + 'Name']('leftAdBg'), _0x1c2435 = this['getChildBy' + 'Name']('rightAdBg'), _0x1ae374 = _0x30e195['getChildBy' + 'Name']('leftAd'), _0x4c4975 = _0x1c2435['getChildBy' + 'Name']('rightAd');
                _0x498f19 && (_0x30e195['size'](0xdc, 0xaa), _0x1c2435['size'](0xdc, 0xaa), _0x1ae374['size'](0xc8, 0x96), _0x4c4975['size'](0xc8, 0x96), _0x1ae374['mask']['size'](0xc8, 0x96), _0x4c4975['mask']['size'](0xc8, 0x96), _0x30e195['scale'](0x1, 0x1), _0x1c2435['scale'](0x1, 0x1), _0x1ae374['scale'](0x1, 0x1), _0x4c4975['scale'](0x1, 0x1), _0x1ae374['mask']['scale'](0x1, 0x1), _0x4c4975['mask']['scale'](0x1, 0x1));
                let _0x318604 = 0xc8 * _0x2eb913 / _0x4bbda7;
                _0x30e195['size'](_0x7a94b1 + 0x14, _0x318604 + 0x14), _0x1c2435['size'](_0x7a94b1 + 0x14, _0x318604 + 0x14), _0x1ae374['mask']['size'](_0x7a94b1, _0x318604), _0x4c4975['mask']['size'](_0x7a94b1, _0x318604), !_0x2f83e8 ? (_0x1ae374['size'](_0x7a94b1, _0x318604), _0x4c4975['size'](_0x7a94b1, _0x318604)) : (_0x1ae374['size'](0xc8 * _0x29a5b4, 0x96 * _0x29a5b4), _0x4c4975['size'](0xc8 * _0x29a5b4, 0x96 * _0x29a5b4)), _0x1ae374['pos'](_0x30e195['width'] / 0x2, _0x30e195['height'] / 0x2), _0x1ae374['mask']['pos'](_0x1ae374['width'] / 0x2, _0x1ae374['height'] / 0x2), _0x4c4975['pos'](_0x1c2435['width'] / 0x2, _0x1c2435['height'] / 0x2), _0x4c4975['mask']['pos'](_0x4c4975['width'] / 0x2, _0x4c4975['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else {
                if (this['name'] == '_scrollLis' + 't') {
                    this['sizeArr'] = [
                        _0x4bbda7,
                        _0x2eb913,
                        _0x2f83e8,
                        _0x498f19
                    ];
                    let _0x25dad2 = 0x1;
                    this['sizeArr'][0x0] / 0xc8 > this['sizeArr'][0x1] / 0x96 ? _0x25dad2 = this['sizeArr'][0x0] / 0xc8 : _0x25dad2 = this['sizeArr'][0x1] / 0x96;
                    let _0x4b42d3 = 0xc8, _0x1bb1d1 = 0xc8 * this['sizeArr'][0x1] / this['sizeArr'][0x0];
                    !this['sizeArr'][0x2] ? (this['height'] = _0x1bb1d1 + 0x14, this['getChildBy' + 'Name']('listAd')['height'] = _0x1bb1d1 + 0x14) : (this['height'] = (_0x1bb1d1 + 0x14) * _0x25dad2, this['getChildBy' + 'Name']('listAd')['height'] = (_0x1bb1d1 + 0x14) * _0x25dad2);
                }
            }
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x234482 = new Laya['Box']();
                return _0x234482['setSize'] = function () {
                }, _0x234482;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = '', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x2b519a extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = '', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x5e9753 = new Laya['List']();
                _0x5e9753['hScrollBar' + 'Skin'] = '\x20', _0x5e9753['name'] = 'listAd', _0x5e9753['anchorX'] = _0x5e9753['anchorY'] = 0.5, _0x5e9753['size'](0x370, 0xaa), _0x5e9753['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x5e9753['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x5e9753['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x5e9753['itemRender'] = _0x2b519a, _0x5e9753['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x5e9753), _0x5e9753['centerX'] = _0x5e9753['centerY'] = 0x0;
                let _0x22fd8c = _0x4e8e7a['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x22fd8c['length'])
                    return;
                let _0x4a624c = JSON['parse'](JSON['stringify'](_0x22fd8c));
                _0x4a624c = _0x4a624c['concat'](_0x4a624c['slice'](0x0, 0x4)), _0x5e9753['array'] = _0x4a624c, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x5e9753['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x2f1c7a, _0x597aab) {
            let _0x1478d4 = _0x2f1c7a['dataSource'], _0x3be864 = _0x2f1c7a['getChildBy' + 'Name']('img'), _0x159a0e = _0x3be864['mask'];
            _0x3be864['skin'] = _0x1478d4['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x2f1c7a['size'](0xdc, 0xaa), _0x2f1c7a['img']['size'](0xc8, 0x96), _0x159a0e['size'](0xc8, 0x96), _0x2f1c7a['scale'](0x1, 0x1), _0x2f1c7a['scale'](0x1, 0x1), _0x159a0e['scale'](0x1, 0x1));
            _0x2f1c7a['offAll'](), _0x3be864['offAll'](), _0x2f1c7a['on'](Laya['Event']['MOUSE_OVER'], _0x2f1c7a, () => {
                _0x2f1c7a['zOrder'] = 0x64;
            }), _0x2f1c7a['on'](Laya['Event']['MOUSE_OUT'], _0x2f1c7a, () => {
                _0x2f1c7a['zOrder'] = _0x597aab;
            }), _0x3be864['on'](Laya['Event']['MOUSE_OVER'], _0x2f1c7a, () => {
                _0x3be864['scale'](_0x3be864['scaleX'] + 0.1, _0x3be864['scaleY'] + 0.1), this['endAni']();
            }), _0x3be864['on'](Laya['Event']['MOUSE_OUT'], _0x2f1c7a, () => {
                _0x3be864['scale'](_0x3be864['scaleX'] - 0.1, _0x3be864['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x3be864['on'](Laya['Event']['MOUSE_DOWN'], _0x2f1c7a, _0x31bd0f => {
                _0x31bd0f['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x1478d4['id']);
            });
            let _0x49ae62 = 0x1;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x49ae62 = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x49ae62 = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x2c7e0b = 0xc8, _0x596775 = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            !this['_scrollLis' + 't']['sizeArr'][0x2] ? (_0x2f1c7a['img']['size'](_0x2c7e0b, _0x596775), _0x2f1c7a['size'](_0x2c7e0b + 0x14, _0x596775 + 0x14), _0x159a0e['size'](_0x2c7e0b, _0x596775)) : (_0x2f1c7a['img']['size'](_0x2c7e0b * _0x49ae62, _0x596775 * _0x49ae62), _0x2f1c7a['size']((_0x2c7e0b + 0x14) * _0x49ae62, (_0x596775 + 0x14) * _0x49ae62), _0x159a0e['size'](_0x2c7e0b * _0x49ae62, _0x596775 * _0x49ae62)), _0x3be864['pos'](_0x2f1c7a['width'] / 0x2, _0x2f1c7a['height'] / 0x2), _0x159a0e['pos'](_0x3be864['width'] / 0x2, _0x3be864['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x574343 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x574343['scrollBar']['value'] += 0x1, _0x574343['scrollBar']['value'] >= _0x574343['scrollBar']['max'] && (_0x574343['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x191140) {
            if (_0x191140['name'] == '_box_adTwo' + '0') {
                let _0x1e828c = _0x191140['getChildBy' + 'Name']('leftAdBg'), _0x3b91e1 = _0x191140['getChildBy' + 'Name']('rightAdBg'), _0x3051db = _0x4e8e7a['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x3051db['length'])
                    return;
                let _0x3deda1 = JSON['parse'](JSON['stringify'](_0x3051db));
                _0x1e828c['offAll'](), _0x3b91e1['offAll'](), _0x1e828c['getChildBy' + 'Name']('leftAd')['skin'] = _0x3deda1[0x0]['thumb'], _0x3b91e1['getChildBy' + 'Name']('rightAd')['skin'] = _0x3deda1[0x1]['thumb'], _0x1e828c['on'](Laya['Event']['MOUSE_DOWN'], _0x191140, _0x2c2f15 => {
                    _0x2c2f15['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3deda1[0x0]['id']);
                }), _0x3b91e1['on'](Laya['Event']['MOUSE_DOWN'], _0x191140, _0x302dc2 => {
                    _0x302dc2['stopPropag' + 'ation'](), _0x4e8e7a['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3deda1[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x12fbcf) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x4df276 = this['getChildBy' + 'Name']('leftAdBg'), _0x2f1899 = this['getChildBy' + 'Name']('rightAdBg');
                _0x2f1899['pos'](_0x4df276['width'] + _0x12fbcf, 0x0), this['width'] = _0x4df276['width'] + _0x2f1899['width'] + _0x12fbcf, this['spaceXNum'] = _0x12fbcf;
            }
        }
    }
    _0x2943a1['_inst'] = null;
}();