!function () {
    class _0x4c1894 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x17c015, _0x2f1b47) => {
                try {
                    this['musicAudio'] = new _0x30043b(), this['soundAudio'] = new _0x30043b(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x17c015(!![]);
                } catch (_0x227481) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x227481), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x17c015(![]);
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
        set ['muted'](_0x42ebb9) {
            this['isMuted'] = _0x42ebb9, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x47fdf0) {
            this['pauseSound'] = _0x47fdf0, this['pauseMusic'] = _0x47fdf0, !_0x47fdf0 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x431a79) {
            this['bePauseSou' + 'nd'] = _0x431a79;
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
        set ['pauseMusic'](_0x26b5c3) {
            this['bePauseMus' + 'ic'] = _0x26b5c3;
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
        ['parse'](_0x311478, _0x3a4a66, _0x3e76ec) {
            this['soundAudio']['parse'](_0x311478, _0x3a4a66);
        }
        ['playMusic'](_0x2c5e92) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x2c5e92);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x5ec718) {
            this['soundAudio']['stop'](_0x5ec718);
        }
        set ['musicVolum' + 'e'](_0x1f30f6) {
            this['musicAudio']['musicVolum' + 'e'] = _0x1f30f6;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x3d4928, _0x574f6e = ![], _0x21c8e5 = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0x3d4928, _0x574f6e, _0x21c8e5);
        }
    }
    class _0x5d9dda {
    }
    class _0x30043b {
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
            const _0x4e32a0 = this['_audioInst' + 'ances']['values']();
            for (const _0x1481dc of _0x4e32a0) {
                const _0x4217ae = _0x1481dc['instance'];
                if (_0x4217ae['source']['buffer'] && !_0x4217ae['source']['loop']) {
                    try {
                        _0x4217ae['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x183ac0) {
                        _0x4217ae['source']['disconnect']();
                    }
                    _0x4217ae['source']['onended'] = function () {
                    }, _0x4217ae['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x4ed62d = this['_audioInst' + 'ances']['values']();
            for (const _0x134dfd of _0x4ed62d) {
                const _0x377cf2 = _0x134dfd['instance'];
                if (_0x377cf2['source']['buffer']) {
                    try {
                        _0x377cf2['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x59405b) {
                        _0x377cf2['source']['disconnect']();
                    }
                    _0x377cf2['source']['onended'] = function () {
                    }, _0x377cf2['setup']();
                }
            }
        }
        ['stop'](_0x4e4784) {
            if (this['_audioInst' + 'ances']['has'](_0x4e4784)) {
                const _0x5391e0 = this['_audioInst' + 'ances']['get'](_0x4e4784);
                this['_stopSound'](_0x5391e0);
            }
        }
        ['_stopSound'](_0x141423) {
            const _0x24c681 = _0x141423['instance'];
            if (_0x24c681['source']['buffer']) {
                try {
                    _0x24c681['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x38daad) {
                    _0x24c681['source']['disconnect']();
                }
                _0x24c681['source']['onended'] = function () {
                }, _0x24c681['setup']();
            }
        }
        ['playMusic'](_0x3edf9f) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x3edf9f) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x3edf9f), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x3edf9f, !![])) : this['downloadAr' + 'rayBuffer'](_0x3edf9f, () => {
                this['playMusic'](_0x3edf9f);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x53ff7a) {
            this['_musicVolu' + 'me'] = _0x53ff7a, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0x370d90, _0x594081 = ![], _0x379da1 = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0x370d90)) {
                const _0x1d6ab5 = this['_audioInst' + 'ances']['get'](_0x370d90), _0x22181a = _0x1d6ab5['instance'];
                if (_0x379da1 && !_0x22181a['ended'])
                    return;
                this['stop'](_0x370d90);
                if (_0x1d6ab5['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x594081)
                            return;
                        _0x22181a['playBuffer'](this['context']['currentTim' + 'e'], _0x1d6ab5['buffer']), _0x22181a['source']['loop'] = _0x594081;
                    } catch (_0x4b7f05) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x4b7f05);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0x370d90, () => {
                    this['play'](_0x370d90, _0x594081);
                });
        }
        ['load'](_0x4b165b, _0x2c4d05) {
            let _0x3b3731 = _0x4b165b['length'], _0x133454 = 0x0;
            for (let _0x11c995 = 0x0; _0x11c995 < _0x4b165b['length']; _0x11c995++) {
                const _0x3a0e47 = _0x4b165b[_0x11c995];
                this['downloadAr' + 'rayBuffer'](_0x3a0e47, () => {
                    _0x133454++, _0x133454 >= _0x3b3731 && (_0x2c4d05 && _0x2c4d05());
                });
            }
        }
        ['setThreeD'](_0x16f26d) {
            if (this['_audioInst' + 'ances']['has'](_0x16f26d)) {
                const _0x4b313c = this['_audioInst' + 'ances']['get'](_0x16f26d);
                _0x4b313c['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x12a5f5 = this['context'];
            const _0x42010d = {
                'gain': _0x12a5f5['createGain'](),
                'panner': _0x12a5f5['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x295c17, _0x283d22, _0x55687d) {
                    this['source']['buffer'] = _0x283d22;
                    var _0x4e1296 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x4e1296['setup'](), _0x4e1296['ended'] = !![];
                    }, this['source']['start'](_0x295c17, _0x55687d);
                },
                'setup': function () {
                    this['source'] = _0x12a5f5['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x42010d['panner']['rolloffFac' + 'tor'] = 0x0, _0x42010d['gain']['connect'](this['context']['destinatio' + 'n']), _0x42010d['setup'](), _0x42010d;
        }
        ['parse'](_0x214efa, _0x4249d9, _0x4d70d1) {
            const _0x69310e = new _0x5d9dda();
            _0x69310e['url'] = _0x214efa, _0x69310e['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0x214efa, _0x69310e), this['context']['decodeAudi' + 'oData'](_0x4249d9, function (_0x2a168c) {
                _0x69310e['buffer'] = _0x2a168c, _0x4d70d1 && _0x4d70d1();
            }, function (_0x5bb7e1) {
                _0x69310e['error'] = !![], _0x4d70d1 && _0x4d70d1(), console['log']('Decode\x20err' + 'or.' + _0x69310e['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x4c8937, _0x13598c) {
            if (this['_audioInst' + 'ances']['has'](_0x4c8937)) {
                _0x13598c && _0x13598c();
                return;
            }
            const _0x4ab38b = this;
            var _0x3148b4 = new XMLHttpRequest();
            _0x3148b4['open']('GET', _0x4c8937, !![]), _0x3148b4['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x3148b4['onload'] = function () {
                if (_0x3148b4['status'] === 0xc8 || _0x3148b4['status'] === 0x0)
                    _0x4ab38b['parse'](_0x4c8937, _0x3148b4['response'], _0x13598c);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x3148b4['onerror'] = function () {
                _0x13598c && _0x13598c();
                throw 'no\x20respons' + 'e';
            }, _0x3148b4['ontimeout'] = function () {
                _0x13598c && _0x13598c();
            }, _0x3148b4['onabort'] = function () {
                _0x13598c && _0x13598c();
            }, _0x3148b4['send'](null);
        }
    }
    const _0x32ad3c = window['WebAudioEn' + 'gine'] = new _0x4c1894();
    class _0x2df99c {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x2df99c()), this['_instance'];
        }
        ['initData']() {
            let _0x304234 = document['getElement' + 'ById']('layaCanvas');
            _0x304234 && (_0x304234['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x304234['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x29e5db) {
            let _0x281ae2 = null;
            try {
                let _0x27b816 = Laya['LocalStora' + 'ge']['getItem'](_0x29e5db);
                _0x281ae2 = JSON['parse'](_0x27b816);
            } catch (_0x45ef5e) {
            }
            return _0x281ae2;
        }
        ['setStorage' + 'Sync'](_0x15afb6, _0x2dbc09) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x15afb6, JSON['stringify'](_0x2dbc09));
        }
        ['navigate'](_0x9156c3, _0x398713, _0x393dad) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x9156c3, this['action_'] = _0x398713, this['to_'] = _0x393dad, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x32ad3c['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x32ad3c['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x5613fd) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x5613fd && _0x5613fd();
            return;

        }
        ['showReward'](_0x4c08f2, _0x5579f0, _0x7161f7) {
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                    _0x4c08f2 && _0x4c08f2(), _0x7161f7 && _0x7161f7(), _0x7161f7 = null, _0x4c08f2 = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                  _0x5579f0 && (_0x5579f0(), _0x7161f7 && _0x7161f7(), _0x7161f7 = null, _0x5579f0 = null);
                  promptMessage("Failed to get the reward, please watch the ads to the end.");
                }
            );
            return;

        }
        ['initList'](_0x706787) {
        }
        ['prompt'](_0x402570, _0xf83bea) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x23f151 = Laya['stage']['designWidt' + 'h'], _0x5a6888 = Laya['stage']['designHeig' + 'ht'];
            var _0x5a4862 = window['innerWidth'], _0x195522 = window['innerHeigh' + 't'], _0x1a8630, _0x15a563;
            _0x5a4862 / _0x195522 > _0x23f151 / _0x5a6888 ? (_0x1a8630 = _0x195522, _0x15a563 = _0x1a8630 * _0x23f151 / _0x5a6888) : (_0x15a563 = _0x5a4862, _0x1a8630 = _0x15a563 * _0x5a6888 / _0x23f151), this['prompt_']['style']['width'] = _0x15a563 - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x402570, _0xf83bea = isNaN(_0xf83bea) ? 0x7d0 : _0xf83bea, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x43fa04 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x43fa04 + ('s\x20ease-in,' + '\x20opacity\x20') + _0x43fa04 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0xf83bea);
        }
        ['prompt0'](_0x2f7fa7, _0x4e0330 = 0xbb8) {
            if (!Laya)
                return;
            !this['labelInfo'] && (this['labelInfo'] = new Laya['Label'](), this['labelInfo']['align'] = 'center', this['labelInfo']['valign'] = 'middle', this['labelInfo']['bgColor'] = '#000000', this['labelInfo']['color'] = '#ffffff', this['labelInfo']['fontSize'] = 0x1e, this['labelInfo']['centerX'] = 0x0, this['labelInfo']['centerY'] = -0x32, this['labelInfo']['zOrder'] = 0x174876e800), this['labelInfo']['width'] = null, this['labelInfo']['height'] = null, this['labelInfo']['wordWrap'] = ![], this['labelInfo']['visible'] = ![], this['labelInfo']['text'] = _0x2f7fa7, this['labelInfo']['height'] += 0x28, this['labelInfo']['width'] > Laya['stage']['width'] - 0x64 && (this['labelInfo']['width'] = Laya['stage']['width'] - 0x64, this['labelInfo']['wordWrap'] = !![]), this['labelInfo']['visible'] = !![], Laya['stage']['addChild'](this['labelInfo']), Laya['timer']['clear'](this, this['clearLabel']), Laya['timer']['once'](_0x4e0330, this, this['clearLabel']);
        }
        ['clearLabel']() {
            this['labelInfo']['visible'] = ![];
        }
        ['getForgame' + 's']() {
            // ZL: 这个和以前一样，直接返回个空数组就行
            return [];

        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x1245f0 = new Laya['Image']();
                _0x1245f0['skin'] = 'yad.png', _0x1245f0['zOrder'] = 0x30d40, window['yad'] = _0x1245f0;
            }
            return window['yad'];
        }
        ['yadstartup'](_0xc858a3, _0x45375e) {
            !this['needStartU' + 'p'] && (_0x45375e && _0x45375e());
            if (this['initialize' + 'd_'])
                return;
            _0x2df99c['getInstanc' + 'e']()['showSplash'](), _0x2df99c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x5db8e7) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x5db8e7);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x27a287, _0x24e4db = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x27a287);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x30e3fa) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x30e3fa);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x4b80a4 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0xc858a3,
                    'config': _0x4b80a4,
                    'complete': () => {
                        const _0x5a60db = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x5a60db) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x1308f1 => {
                                _0x1308f1['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x45375e && _0x45375e();
                    }
                });
            }));
        }
        ['showBanner'](_0x1a4373) {
            // _0x1a4373 ? YYGGames['showBanner'](_0x1a4373) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            // YYGGames['hideBanner']();
        }
        ['showSplash'](_0x579343) {
            // _0x579343 ? YYGGames['showSplash'](_0x579343) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            // YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x16b109, _0x261eea) {
            !this['needStartU' + 'p'] && (_0x261eea && _0x261eea());
            if (this['initialize' + 'd_'])
                return;
            _0x2df99c['getInstanc' + 'e']()['showSplash'](), _0x2df99c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x23d52d) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x23d52d);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x3183c5, _0x3f159a = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x3183c5);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x267f25) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x267f25);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x2f838d => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x16b109,
                    'config': _0x2f838d,
                    'complete': () => {
                        const _0x1d21cf = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x1d21cf) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x3b9a30 => {
                                _0x3b9a30['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x261eea && _0x261eea();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x2206ce, _0x44bc8f) { // ZL: puzzlegamestartup
            !this['needStartU' + 'p'] && (_0x44bc8f && _0x44bc8f());
            if (this['initialize' + 'd_'])
                return;
            _0x2df99c['getInstanc' + 'e']()['showSplash'](), _0x2df99c['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x51cfb0) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x51cfb0);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x353a77) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x353a77);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x1d0b36) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], 
            Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x4bfd99 => {
                // ZL: 主要找到这个加载cnf.json的回调
                window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                this['needStartU' + 'p'] = ![], _0x44bc8f && _0x44bc8f(); 
                
                // YYGGames['startup']({
                //     'channel': 0x5,
                //     'appName': _0x2206ce,
                //     'config': _0x4bfd99,
                //     'complete': () => {
                //         const _0x3e929e = YYGGames['getAdPlatf' + 'ormType']();
                //         // ZL: 下面一行这个是加scrollList和box_adTwo的片段，拷贝上去
                //         window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                //         switch (_0x3e929e) {
                //         case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                //         case AdPlatformType['en_XIAOMI']:
                //             window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                //             break;
                //         default:
                //             window['yad'] && Laya['stage']['addChild'](window['yad']), 
                //             window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x1ffefc => {
                //                 _0x1ffefc['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                //             });
                //             break;
                //         }
                //         // ZL: 下面一行这个就是 this.needStartUp = false; complete && complete(); 直接拷贝上去
                //         this['needStartU' + 'p'] = ![], _0x44bc8f && _0x44bc8f(); 
                //     }
                // });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x36ce07 = {
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
            class _0x12ebc7 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x2df99c['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x9e2b19 = new Laya['Prefab']();
            _0x9e2b19['json'] = _0x36ce07, this['noVideoPer'] = _0x9e2b19['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0x12ebc7);
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
            let _0x27ee71 = {
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
            class _0x26c97 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x2df99c['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x382c92 = new Laya['Prefab']();
            _0x382c92['json'] = _0x27ee71, this['loadingPer'] = _0x382c92['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x26c97);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x4f2ffc extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0xab2153 = new Laya['List']();
            return _0xab2153['size'](0x320, 0x258), _0xab2153['itemRender'] = _0x4f2ffc, _0xab2153;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x38f3eb = new Laya['Box']();
            //     return _0x38f3eb['setSize'] = function () {
            //     }, _0x38f3eb;
            // }
            if (!this['_scrollLis' + 't']) {
                let _0x8de1fa = {
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
                class _0x573c41 extends Laya['Script'] {
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
                            let _0x5ced7e = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x5ced7e);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x15e117 = _0x2df99c['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x15e117['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x15e117)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x2cf60a, _0x2defd6) {
                        let _0x347d13 = _0x2cf60a['getChildBy' + 'Name']('thumb');
                        _0x2cf60a['offAll'](), _0x347d13['offAll'](), _0x2cf60a['on'](Laya['Event']['MOUSE_OVER'], _0x2cf60a, () => {
                            _0x2cf60a['zOrder'] = 0x64;
                        }), _0x2cf60a['on'](Laya['Event']['MOUSE_OUT'], _0x2cf60a, () => {
                            _0x2cf60a['zOrder'] = _0x2defd6;
                        }), _0x347d13['on'](Laya['Event']['MOUSE_OVER'], _0x2cf60a, () => {
                            _0x347d13['scale'](1.1, 1.1), this['endAni']();
                        }), _0x347d13['on'](Laya['Event']['MOUSE_OUT'], _0x2cf60a, () => {
                            _0x347d13['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x347d13['on'](Laya['Event']['MOUSE_DOWN'], _0x2cf60a, _0x1599f6 => {
                            _0x1599f6['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x2cf60a['dataSource']['id']);
                        });
                        let _0x4d4d02 = _0x347d13['mask'];
                        _0x2cf60a['width'] = this['sizeTran'][0x0] + 0x14, _0x2cf60a['height'] = this['sizeTran'][0x1] + 0x14, _0x2cf60a['x'] = (this['sizeTran'][0x0] + 0x14) * _0x2defd6;
                        if (this['sizeTran'][0x2])
                            _0x4d4d02['width'] = _0x347d13['width'] = this['sizeTran'][0x0], _0x4d4d02['height'] = _0x347d13['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x34e847 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x347d13['width'] = 0xc8 / _0x34e847, _0x347d13['height'] = 0x96 / _0x34e847, _0x4d4d02['width'] = this['sizeTran'][0x0], _0x4d4d02['height'] = this['sizeTran'][0x1];
                        }
                        _0x4d4d02['x'] = _0x347d13['width'] / 0x2, _0x4d4d02['y'] = _0x347d13['height'] / 0x2;
                    }
                    ['setSize'](_0x43c7e1, _0x22d601, _0x2cb70f = ![]) {
                        this['sizeTran'] = [
                            _0x43c7e1,
                            _0x22d601,
                            _0x2cb70f
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x43c7e1 + 0x14) * 0x4, this['owner']['height'] = _0x22d601 + 0x14, this['img_ListBg']['width'] = (_0x43c7e1 + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0x22d601 + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x42e9fc) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x223780 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x223780);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x1691fc = new Laya['Prefab']();
                _0x1691fc['json'] = _0x8de1fa, this['_scrollLis' + 't'] = _0x1691fc['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x573c41), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x573c41)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x573c41));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x4e11b7 = new Laya['Box']();
            //     return _0x4e11b7['setSpaceX'] = _0x4e11b7['setSize'] = function () {
            //     }, _0x4e11b7;
            // }
            if (!this['_box_adTwo']) {
                let _0x31ec41 = {
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
                class _0x46beb0 extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x2543dc = _0x2df99c['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x2543dc['length'])
                            return;
                        let _0x911006 = JSON['parse'](JSON['stringify'](_0x2543dc));
                        if (this['imgArr']['length']) {
                            let _0x48150f = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x48150f);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x911006[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x911006[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x448128 => {
                            _0x448128['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x911006[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0xd68235 => {
                            _0xd68235['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x911006[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x48ac4b) {
                        this['spaceNum'] = _0x48ac4b, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x2e1a1b = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x2e1a1b);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x4fdf84, _0x178641, _0x3858d5 = ![]) {
                        this['sizeTran'] = [
                            _0x4fdf84,
                            _0x178641,
                            _0x3858d5
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x4fdf84 + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x178641 + 0x14;
                            if (_0x3858d5)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x4fdf84, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x178641;
                            else {
                                let _0x1f1d4e = 0xc8 / _0x4fdf84 < 0x96 / _0x178641 ? 0xc8 / _0x4fdf84 : 0x96 / _0x178641;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x1f1d4e, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x1f1d4e, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x4fdf84, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x178641;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x4306c2 = new Laya['Prefab']();
                _0x4306c2['json'] = _0x31ec41, this['_box_adTwo'] = _0x4306c2['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x46beb0), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x46beb0)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x46beb0)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x46beb0)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x46beb0));
            }
            return this['_box_adTwo'];
        }
    }
    _0x2df99c['_instance'] = null, window['platform'] = _0x2df99c;
    class _0x57d4d7 {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x57d4d7['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x57d4d7['_inst'] && new _0x57d4d7(), _0x57d4d7['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x29bd3e = new Laya['Box']();
                return _0x29bd3e['setSpaceX'] = _0x29bd3e['setSize'] = function () {
                }, _0x29bd3e;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x2e6f4e = new Laya['Image']();
                _0x2e6f4e['name'] = 'leftAdBg', _0x2e6f4e['sizeGrid'] = '30,30,30,3' + '0', _0x2e6f4e['size'](0xdc, 0xaa), _0x2e6f4e['skin'] = '';
                let _0x45d49a = new Laya['Image']();
                _0x45d49a['name'] = 'leftAdMask', _0x45d49a['size'](0xc8, 0x96), _0x45d49a['sizeGrid'] = '30,30,30,3' + '0', _0x45d49a['anchorX'] = _0x45d49a['anchorY'] = 0.5, _0x45d49a['skin'] = '';
                let _0x3581ce = new Laya['Image']();
                _0x3581ce['name'] = 'leftAd', _0x3581ce['size'](0xc8, 0x96), _0x3581ce['anchorX'] = _0x3581ce['anchorY'] = 0.5, _0x3581ce['skin'] = '', _0x3581ce['mask'] = _0x45d49a, _0x2e6f4e['addChild'](_0x3581ce), _0x2e6f4e['pos'](0x0, 0x0), _0x3581ce['pos'](_0x2e6f4e['width'] / 0x2, _0x2e6f4e['height'] / 0x2), _0x45d49a['pos'](_0x3581ce['width'] / 0x2, _0x3581ce['height'] / 0x2);
                let _0x4d5751 = new Laya['Image']();
                _0x4d5751['name'] = 'rightAdBg', _0x4d5751['sizeGrid'] = '30,30,30,3' + '0', _0x4d5751['size'](0xdc, 0xaa), _0x4d5751['skin'] = '';
                let _0x2b49fe = new Laya['Image']();
                _0x2b49fe['name'] = 'rightAdMas' + 'k', _0x2b49fe['size'](0xc8, 0x96), _0x2b49fe['sizeGrid'] = '30,30,30,3' + '0', _0x2b49fe['anchorX'] = _0x2b49fe['anchorY'] = 0.5, _0x2b49fe['skin'] = '';
                let _0x876da8 = new Laya['Image']();
                _0x876da8['name'] = 'rightAd', _0x876da8['size'](0xc8, 0x96), _0x876da8['anchorX'] = _0x876da8['anchorY'] = 0.5, _0x876da8['skin'] = '', _0x876da8['mask'] = _0x2b49fe, _0x4d5751['addChild'](_0x876da8), _0x4d5751['pos'](_0x2e6f4e['width'], 0x0), _0x876da8['pos'](_0x4d5751['width'] / 0x2, _0x4d5751['height'] / 0x2), _0x2b49fe['pos'](_0x876da8['width'] / 0x2, _0x876da8['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x2e6f4e['width'] + _0x4d5751['width'], this['_box_adTwo' + '0']['addChild'](_0x2e6f4e), this['_box_adTwo' + '0']['addChild'](_0x4d5751), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x136154 = _0x2df99c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x136154['length'])
                    return;
                let _0x428328 = JSON['parse'](JSON['stringify'](_0x136154));
                _0x3581ce['offAll'](), _0x876da8['offAll'](), _0x3581ce['skin'] = _0x428328[0x0]['thumb'], _0x876da8['skin'] = _0x428328[0x1]['thumb'], _0x3581ce['on'](Laya['Event']['MOUSE_DOWN'], this, _0xc2798d => {
                    _0xc2798d['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x428328[0x0]['id']);
                }), _0x876da8['on'](Laya['Event']['MOUSE_DOWN'], this, _0x4d5df0 => {
                    _0x4d5df0['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x428328[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x420892 = 0xc8, _0x559892 = 0x96, _0x5e7bf5 = ![], _0x180a3e = !![]) {
            let _0x13c33a = 0x1;
            _0x420892 / 0xc8 > _0x559892 / 0x96 ? _0x13c33a = _0x420892 / 0xc8 : _0x13c33a = _0x559892 / 0x96;
            let _0x5a6988 = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x203807 = this['getChildBy' + 'Name']('leftAdBg'), _0x5108a3 = this['getChildBy' + 'Name']('rightAdBg'), _0x3111be = _0x203807['getChildBy' + 'Name']('leftAd'), _0x28536c = _0x5108a3['getChildBy' + 'Name']('rightAd');
                _0x180a3e && (_0x203807['size'](0xdc, 0xaa), _0x5108a3['size'](0xdc, 0xaa), _0x3111be['size'](0xc8, 0x96), _0x28536c['size'](0xc8, 0x96), _0x3111be['mask']['size'](0xc8, 0x96), _0x28536c['mask']['size'](0xc8, 0x96), _0x203807['scale'](0x1, 0x1), _0x5108a3['scale'](0x1, 0x1), _0x3111be['scale'](0x1, 0x1), _0x28536c['scale'](0x1, 0x1), _0x3111be['mask']['scale'](0x1, 0x1), _0x28536c['mask']['scale'](0x1, 0x1));
                let _0x51739c = 0xc8 * _0x559892 / _0x420892;
                _0x203807['size'](_0x5a6988 + 0x14, _0x51739c + 0x14), _0x5108a3['size'](_0x5a6988 + 0x14, _0x51739c + 0x14), _0x3111be['mask']['size'](_0x5a6988, _0x51739c), _0x28536c['mask']['size'](_0x5a6988, _0x51739c), !_0x5e7bf5 ? (_0x3111be['size'](_0x5a6988, _0x51739c), _0x28536c['size'](_0x5a6988, _0x51739c)) : (_0x3111be['size'](0xc8 * _0x13c33a, 0x96 * _0x13c33a), _0x28536c['size'](0xc8 * _0x13c33a, 0x96 * _0x13c33a)), _0x3111be['pos'](_0x203807['width'] / 0x2, _0x203807['height'] / 0x2), _0x3111be['mask']['pos'](_0x3111be['width'] / 0x2, _0x3111be['height'] / 0x2), _0x28536c['pos'](_0x5108a3['width'] / 0x2, _0x5108a3['height'] / 0x2), _0x28536c['mask']['pos'](_0x28536c['width'] / 0x2, _0x28536c['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else {
                if (this['name'] == '_scrollLis' + 't') {
                    this['sizeArr'] = [
                        _0x420892,
                        _0x559892,
                        _0x5e7bf5,
                        _0x180a3e
                    ];
                    let _0x6b41c0 = 0x1;
                    this['sizeArr'][0x0] / 0xc8 > this['sizeArr'][0x1] / 0x96 ? _0x6b41c0 = this['sizeArr'][0x0] / 0xc8 : _0x6b41c0 = this['sizeArr'][0x1] / 0x96;
                    let _0x4465fd = 0xc8, _0x348e62 = 0xc8 * this['sizeArr'][0x1] / this['sizeArr'][0x0];
                    !this['sizeArr'][0x2] ? (this['height'] = _0x348e62 + 0x14, this['getChildBy' + 'Name']('listAd')['height'] = _0x348e62 + 0x14) : (this['height'] = (_0x348e62 + 0x14) * _0x6b41c0, this['getChildBy' + 'Name']('listAd')['height'] = (_0x348e62 + 0x14) * _0x6b41c0);
                }
            }
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x1154a4 = new Laya['Box']();
                return _0x1154a4['setSize'] = function () {
                }, _0x1154a4;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = '', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x12e334 extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = '', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x564f2a = new Laya['List']();
                _0x564f2a['hScrollBar' + 'Skin'] = '\x20', _0x564f2a['name'] = 'listAd', _0x564f2a['anchorX'] = _0x564f2a['anchorY'] = 0.5, _0x564f2a['size'](0x370, 0xaa), _0x564f2a['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x564f2a['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x564f2a['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x564f2a['itemRender'] = _0x12e334, _0x564f2a['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x564f2a), _0x564f2a['centerX'] = _0x564f2a['centerY'] = 0x0;
                let _0x188fa0 = _0x2df99c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x188fa0['length'])
                    return;
                let _0x6f0b76 = JSON['parse'](JSON['stringify'](_0x188fa0));
                _0x6f0b76 = _0x6f0b76['concat'](_0x6f0b76['slice'](0x0, 0x4)), _0x564f2a['array'] = _0x6f0b76, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x564f2a['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x36a0e1, _0x18d023) {
            let _0x574acb = _0x36a0e1['dataSource'], _0x34095e = _0x36a0e1['getChildBy' + 'Name']('img'), _0x3fd57f = _0x34095e['mask'];
            _0x34095e['skin'] = _0x574acb['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x36a0e1['size'](0xdc, 0xaa), _0x36a0e1['img']['size'](0xc8, 0x96), _0x3fd57f['size'](0xc8, 0x96), _0x36a0e1['scale'](0x1, 0x1), _0x36a0e1['scale'](0x1, 0x1), _0x3fd57f['scale'](0x1, 0x1));
            _0x36a0e1['offAll'](), _0x34095e['offAll'](), _0x36a0e1['on'](Laya['Event']['MOUSE_OVER'], _0x36a0e1, () => {
                _0x36a0e1['zOrder'] = 0x64;
            }), _0x36a0e1['on'](Laya['Event']['MOUSE_OUT'], _0x36a0e1, () => {
                _0x36a0e1['zOrder'] = _0x18d023;
            }), _0x34095e['on'](Laya['Event']['MOUSE_OVER'], _0x36a0e1, () => {
                _0x34095e['scale'](_0x34095e['scaleX'] + 0.1, _0x34095e['scaleY'] + 0.1), this['endAni']();
            }), _0x34095e['on'](Laya['Event']['MOUSE_OUT'], _0x36a0e1, () => {
                _0x34095e['scale'](_0x34095e['scaleX'] - 0.1, _0x34095e['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x34095e['on'](Laya['Event']['MOUSE_DOWN'], _0x36a0e1, _0x7d4fba => {
                _0x7d4fba['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x574acb['id']);
            });
            let _0x1413d0 = 0x1;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x1413d0 = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x1413d0 = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x356a9d = 0xc8, _0x5e3f73 = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            !this['_scrollLis' + 't']['sizeArr'][0x2] ? (_0x36a0e1['img']['size'](_0x356a9d, _0x5e3f73), _0x36a0e1['size'](_0x356a9d + 0x14, _0x5e3f73 + 0x14), _0x3fd57f['size'](_0x356a9d, _0x5e3f73)) : (_0x36a0e1['img']['size'](_0x356a9d * _0x1413d0, _0x5e3f73 * _0x1413d0), _0x36a0e1['size']((_0x356a9d + 0x14) * _0x1413d0, (_0x5e3f73 + 0x14) * _0x1413d0), _0x3fd57f['size'](_0x356a9d * _0x1413d0, _0x5e3f73 * _0x1413d0)), _0x34095e['pos'](_0x36a0e1['width'] / 0x2, _0x36a0e1['height'] / 0x2), _0x3fd57f['pos'](_0x34095e['width'] / 0x2, _0x34095e['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x4bea99 = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x4bea99['scrollBar']['value'] += 0x1, _0x4bea99['scrollBar']['value'] >= _0x4bea99['scrollBar']['max'] && (_0x4bea99['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x40ed12) {
            if (_0x40ed12['name'] == '_box_adTwo' + '0') {
                let _0x38906f = _0x40ed12['getChildBy' + 'Name']('leftAdBg'), _0x53fa35 = _0x40ed12['getChildBy' + 'Name']('rightAdBg'), _0x1d2cf5 = _0x2df99c['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x1d2cf5['length'])
                    return;
                let _0x171792 = JSON['parse'](JSON['stringify'](_0x1d2cf5));
                _0x38906f['offAll'](), _0x53fa35['offAll'](), _0x38906f['getChildBy' + 'Name']('leftAd')['skin'] = _0x171792[0x0]['thumb'], _0x53fa35['getChildBy' + 'Name']('rightAd')['skin'] = _0x171792[0x1]['thumb'], _0x38906f['on'](Laya['Event']['MOUSE_DOWN'], _0x40ed12, _0x1a302c => {
                    _0x1a302c['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x171792[0x0]['id']);
                }), _0x53fa35['on'](Laya['Event']['MOUSE_DOWN'], _0x40ed12, _0x47682c => {
                    _0x47682c['stopPropag' + 'ation'](), _0x2df99c['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x171792[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x4b9220) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x3a3ad7 = this['getChildBy' + 'Name']('leftAdBg'), _0x1b5126 = this['getChildBy' + 'Name']('rightAdBg');
                _0x1b5126['pos'](_0x3a3ad7['width'] + _0x4b9220, 0x0), this['width'] = _0x3a3ad7['width'] + _0x1b5126['width'] + _0x4b9220, this['spaceXNum'] = _0x4b9220;
            }
        }
    }
    _0x57d4d7['_inst'] = null;
}();