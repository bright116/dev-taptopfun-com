!function () {
    class _0x4b4c23 {
        constructor() {
            this['beEnabled'] = ![], this['isMuted'] = ![], this['bePauseSou' + 'nd'] = ![], this['bePauseMus' + 'ic'] = ![], this['tryToResum' + 'eIntervalI' + 'd'] = -0x1, this['isVisibili' + 'tyMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x3ae1df, _0x6eac53) => {
                try {
                    this['musicAudio'] = new _0x5ed037(), this['soundAudio'] = new _0x5ed037(), window['document']['addEventLi' + 'stener']('mousedown', () => {
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
                    }, !![]), window['document']['addEventLi' + 'stener']('visibility' + 'change', this['onVisibili' + 'tychange']['bind'](this)), this['musicAudio']['getContext']()['onstatecha' + 'nge'] = this['onMusicSta' + 'techange']['bind'](this), this['soundAudio']['getContext']()['onstatecha' + 'nge'] = this['onSoundSta' + 'techange']['bind'](this), this['beEnabled'] = !![], this['musicVolum' + 'e'] = 0x3c, this['isFocusOn'] = ![], this['tryToResum' + 'eAudioCont' + 'ext'](), _0x3ae1df(!![]);
                } catch (_0x1ccc01) {
                    console['log']('Web\x20Audio\x20' + 'API', _0x1ccc01), alert('Web\x20Audio\x20' + 'API\x20is\x20not' + '\x20supported' + '\x20in\x20this\x20b' + 'rowser'), _0x3ae1df(![]);
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
        set ['muted'](_0x5f5452) {
            this['isMuted'] = _0x5f5452, this['isMuted'] ? (this['musicAudio']['suspend'](), this['soundAudio']['suspend']()) : this['tryToResum' + 'eIntervalI' + 'd'] == -0x1 && (this['tryToResum' + 'eIntervalI' + 'd'] = setInterval(this['tryToResum' + 'eAudioCont' + 'ext']['bind'](this), 0xc8));
        }
        get ['muted']() {
            return this['isMuted'];
        }
        set ['pause'](_0x5089c3) {
            this['pauseSound'] = _0x5089c3, this['pauseMusic'] = _0x5089c3, !_0x5089c3 && this['soundAudio']['stopAllNoL' + 'oop']();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set ['pauseSound'](_0x1c26fa) {
            this['bePauseSou' + 'nd'] = _0x1c26fa;
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
        set ['pauseMusic'](_0x20fc1b) {
            this['bePauseMus' + 'ic'] = _0x20fc1b;
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
        ['parse'](_0x56c4a0, _0x372a46, _0x2ee889) {
            this['soundAudio']['parse'](_0x56c4a0, _0x372a46);
        }
        ['playMusic'](_0x532e55) {
            this['musicAudio']['stopAll'](), this['musicAudio']['playMusic'](_0x532e55);
        }
        ['stopMusic']() {
            this['musicAudio']['stopAll']();
        }
        ['stopSound'](_0x4d5081) {
            this['soundAudio']['stop'](_0x4d5081);
        }
        set ['musicVolum' + 'e'](_0x5cbf53) {
            this['musicAudio']['musicVolum' + 'e'] = _0x5cbf53;
        }
        get ['musicVolum' + 'e']() {
            return this['musicAudio']['musicVolum' + 'e'];
        }
        ['playSound'](_0x53f0c7, _0x4c8e4c = ![], _0x5e19e5 = ![]) {
            if (!this['beEnabled'])
                return;
            this['soundAudio']['play'](_0x53f0c7, _0x4c8e4c, _0x5e19e5);
        }
    }
    class _0x1ab458 {
    }
    class _0x5ed037 {
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
            const _0x553fae = this['_audioInst' + 'ances']['values']();
            for (const _0xd95dce of _0x553fae) {
                const _0x5b92bb = _0xd95dce['instance'];
                if (_0x5b92bb['source']['buffer'] && !_0x5b92bb['source']['loop']) {
                    try {
                        _0x5b92bb['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x33316b) {
                        _0x5b92bb['source']['disconnect']();
                    }
                    _0x5b92bb['source']['onended'] = function () {
                    }, _0x5b92bb['setup']();
                }
            }
        }
        ['stopAll']() {
            const _0x36e595 = this['_audioInst' + 'ances']['values']();
            for (const _0x19114a of _0x36e595) {
                const _0x280910 = _0x19114a['instance'];
                if (_0x280910['source']['buffer']) {
                    try {
                        _0x280910['source']['stop'](this['context']['currentTim' + 'e']);
                    } catch (_0x319aa9) {
                        _0x280910['source']['disconnect']();
                    }
                    _0x280910['source']['onended'] = function () {
                    }, _0x280910['setup']();
                }
            }
        }
        ['stop'](_0x4011db) {
            if (this['_audioInst' + 'ances']['has'](_0x4011db)) {
                const _0x505856 = this['_audioInst' + 'ances']['get'](_0x4011db);
                this['_stopSound'](_0x505856);
            }
        }
        ['_stopSound'](_0x167567) {
            const _0x2d86e4 = _0x167567['instance'];
            if (_0x2d86e4['source']['buffer']) {
                try {
                    _0x2d86e4['source']['stop'](this['context']['currentTim' + 'e']);
                } catch (_0x52af63) {
                    _0x2d86e4['source']['disconnect']();
                }
                _0x2d86e4['source']['onended'] = function () {
                }, _0x2d86e4['setup']();
            }
        }
        ['playMusic'](_0x5b7100) {
            this['_music'] && this['_stopSound'](this['_music']), this['_audioInst' + 'ances']['has'](_0x5b7100) ? (this['_music'] = this['_audioInst' + 'ances']['get'](_0x5b7100), this['musicVolum' + 'e'] = this['_musicVolu' + 'me'], this['play'](_0x5b7100, !![])) : this['downloadAr' + 'rayBuffer'](_0x5b7100, () => {
                this['playMusic'](_0x5b7100);
            });
        }
        ['stopMusic']() {
            this['_music'] && this['_stopSound'](this['_music']);
        }
        set ['musicVolum' + 'e'](_0x24e350) {
            this['_musicVolu' + 'me'] = _0x24e350, this['_music'] && (this['_music']['instance']['gain']['gain']['value'] = this['_musicVolu' + 'me'] / 0x64);
        }
        get ['musicVolum' + 'e']() {
            return this['_musicVolu' + 'me'];
        }
        ['play'](_0x5b775b, _0x4f6d9e = ![], _0x3920eb = ![]) {
            if (this['_audioInst' + 'ances']['has'](_0x5b775b)) {
                const _0x2b5f50 = this['_audioInst' + 'ances']['get'](_0x5b775b), _0x2beaa9 = _0x2b5f50['instance'];
                if (_0x3920eb && !_0x2beaa9['ended'])
                    return;
                this['stop'](_0x5b775b);
                if (_0x2b5f50['buffer'])
                    try {
                        if (window['WebAudioEn' + 'gine']['pause'] && !_0x4f6d9e)
                            return;
                        _0x2beaa9['playBuffer'](this['context']['currentTim' + 'e'], _0x2b5f50['buffer']), _0x2beaa9['source']['loop'] = _0x4f6d9e;
                    } catch (_0x402497) {
                        console['error']('playBuffer' + '\x20error.\x20Ex' + 'ception:\x20' + _0x402497);
                    }
            } else
                this['downloadAr' + 'rayBuffer'](_0x5b775b, () => {
                    this['play'](_0x5b775b, _0x4f6d9e);
                });
        }
        ['load'](_0x5cb0aa, _0xd3a08d) {
            let _0x351c6f = _0x5cb0aa['length'], _0x3e0475 = 0x0;
            for (let _0x2fcede = 0x0; _0x2fcede < _0x5cb0aa['length']; _0x2fcede++) {
                const _0x2f6b3a = _0x5cb0aa[_0x2fcede];
                this['downloadAr' + 'rayBuffer'](_0x2f6b3a, () => {
                    _0x3e0475++, _0x3e0475 >= _0x351c6f && (_0xd3a08d && _0xd3a08d());
                });
            }
        }
        ['setThreeD'](_0x48e600) {
            if (this['_audioInst' + 'ances']['has'](_0x48e600)) {
                const _0xfd7504 = this['_audioInst' + 'ances']['get'](_0x48e600);
                _0xfd7504['instance']['threeD'] = !![];
            }
        }
        ['createSoun' + 'dInstance']() {
            let _0x463500 = this['context'];
            const _0x468fb7 = {
                'gain': _0x463500['createGain'](),
                'panner': _0x463500['createPann' + 'er'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x407485, _0xb9132, _0x5c9014) {
                    this['source']['buffer'] = _0xb9132;
                    var _0x3c9d92 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        _0x3c9d92['setup'](), _0x3c9d92['ended'] = !![];
                    }, this['source']['start'](_0x407485, _0x5c9014);
                },
                'setup': function () {
                    this['source'] = _0x463500['createBuff' + 'erSource'](), this['setupPanni' + 'ng']();
                },
                'setupPanning': function () {
                    this['threeD'] ? (this['source']['disconnect'](), this['source']['connect'](this['panner']), this['panner']['connect'](this['gain'])) : (this['panner']['disconnect'](), this['source']['connect'](this['gain']));
                }
            };
            return _0x468fb7['panner']['rolloffFac' + 'tor'] = 0x0, _0x468fb7['gain']['connect'](this['context']['destinatio' + 'n']), _0x468fb7['setup'](), _0x468fb7;
        }
        ['parse'](_0xc85efd, _0x44b2d9, _0x4339dc) {
            const _0x229715 = new _0x1ab458();
            _0x229715['url'] = _0xc85efd, _0x229715['instance'] = this['createSoun' + 'dInstance'](), this['_audioInst' + 'ances']['set'](_0xc85efd, _0x229715), this['context']['decodeAudi' + 'oData'](_0x44b2d9, function (_0x4ada8e) {
                _0x229715['buffer'] = _0x4ada8e, _0x4339dc && _0x4339dc();
            }, function (_0x1860d8) {
                _0x229715['error'] = !![], _0x4339dc && _0x4339dc(), console['log']('Decode\x20err' + 'or.' + _0x229715['url']);
            });
        }
        ['downloadAr' + 'rayBuffer'](_0x572a4a, _0x2dd0e3) {
            if (this['_audioInst' + 'ances']['has'](_0x572a4a)) {
                _0x2dd0e3 && _0x2dd0e3();
                return;
            }
            const _0x2a311d = this;
            var _0x3ef634 = new XMLHttpRequest();
            _0x3ef634['open']('GET', _0x572a4a, !![]), _0x3ef634['responseTy' + 'pe'] = 'arraybuffe' + 'r', _0x3ef634['onload'] = function () {
                if (_0x3ef634['status'] === 0xc8 || _0x3ef634['status'] === 0x0)
                    _0x2a311d['parse'](_0x572a4a, _0x3ef634['response'], _0x2dd0e3);
                else
                    throw 'no\x20respons' + 'e';
            }, _0x3ef634['onerror'] = function () {
                _0x2dd0e3 && _0x2dd0e3();
                throw 'no\x20respons' + 'e';
            }, _0x3ef634['ontimeout'] = function () {
                _0x2dd0e3 && _0x2dd0e3();
            }, _0x3ef634['onabort'] = function () {
                _0x2dd0e3 && _0x2dd0e3();
            }, _0x3ef634['send'](null);
        }
    }
    const _0x548e57 = window['WebAudioEn' + 'gine'] = new _0x4b4c23();
    class _0x539d47 {
        constructor() {
            this['canNavigat' + 'eActive_'] = ![], this['screen_'] = '', this['action_'] = '', this['to_'] = '', this['prompt_'] = null, this['initialize' + 'd_'] = ![], this['needStartU' + 'p'] = !![], this['initData']();
        }
        static ['getInstanc' + 'e']() {
            return !this['_instance'] && (this['_instance'] = new _0x539d47()), this['_instance'];
        }
        ['initData']() {
            let _0x19f2a3 = document['getElement' + 'ById']('layaCanvas');
            _0x19f2a3 && (_0x19f2a3['addEventLi' + 'stener']('mouseup', this['onNavigate' + '_']['bind'](this)), _0x19f2a3['addEventLi' + 'stener']('touchend', this['onNavigate' + '_']['bind'](this)));
        }
        ['onNavigate' + '_']() {
            this['canNavigat' + 'eActive_'] && YYGGames['navigate'](this['screen_'], this['action_'], this['to_']), this['canNavigat' + 'eActive_'] = ![];
        }
        ['getStorage' + 'Sync'](_0x33383a) {
            let _0xe2360b = null;
            try {
                let _0x126ebd = Laya['LocalStora' + 'ge']['getItem'](_0x33383a);
                _0xe2360b = JSON['parse'](_0x126ebd);
            } catch (_0x494060) {
            }
            return _0xe2360b;
        }
        ['setStorage' + 'Sync'](_0x4ea2f3, _0x2a021d) {
            return Laya['LocalStora' + 'ge']['setItem'](_0x4ea2f3, JSON['stringify'](_0x2a021d));
        }
        ['navigate'](_0x2805e9, _0x251626, _0xf96811) {
            this['canNavigat' + 'eActive_'] === ![] && (this['screen_'] = _0x2805e9, this['action_'] = _0x251626, this['to_'] = _0xf96811, this['canNavigat' + 'eActive_'] = !![]);
        }
        ['onblur']() {
            setTimeout(() => {
                _0x548e57['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x548e57['muted'] = ![];
            }, 0x64);
        }
        ['showInters' + 'titial'](_0x25e0af) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume'](), _0x25e0af && _0x25e0af();
            return;
        }
        ['showReward'](_0x182660, _0x373c7f, _0xeb94a) {
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    window['focus'](), this['onfocus'](), window['WebAudioEn' + 'gine']['adShowing'] = ![], Laya['timer']['scale'] = 0x1, Laya['stage']['renderingE' + 'nabled'] = !![], Laya['updateTime' + 'r'] && Laya['updateTime' + 'r']['resume'](), Laya['physicsTim' + 'er'] && Laya['physicsTim' + 'er']['resume']();
                    _0x182660 && _0x182660(), _0xeb94a && _0xeb94a(), _0xeb94a = null, _0x182660 = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                  _0x373c7f && (_0x373c7f(), _0xeb94a && _0xeb94a(), _0xeb94a = null, _0x373c7f = null), this['prompt']('Pls\x20watch\x20' + 'the\x20ad\x20com' + 'pletely,\x20s' + 'o\x20that\x20you' + '\x20can\x20claim' + '\x20your\x20rewa' + 'rd');
                }
            );
            return;
        }
        ['initList'](_0x948608) {
        }
        ['prompt'](_0x3ec559, _0x4f0d73) {
            !this['prompt_'] && (this['prompt_'] = document['createElem' + 'ent']('div'), this['prompt_']['style']['cssText'] = 'overflow:\x20' + 'hidden;wor' + 'd-break:\x20b' + 'reak-all;w' + 'ord-wrap:\x20' + 'break-word' + ';font-fami' + 'ly:siyuan;' + 'padding:10' + 'px\x2010px\x2010' + 'px\x2010px;mi' + 'n-height:4' + '0px;color:' + '\x20rgb(255,\x20' + '255,\x20255);' + 'line-heigh' + 't:\x2020px;te' + 'xt-align:c' + 'enter;bord' + 'er-radius:' + '\x204px;posit' + 'ion:\x20fixed' + ';top:\x2040%;' + 'left:\x2050%;' + 'transform:' + '\x20translate' + '(-50%,\x20-50' + '%);z-index' + ':\x20999999;b' + 'ackground:' + '\x20rgba(0,\x200' + ',\x200,.7);fo' + 'nt-size:\x201' + '6px;', document['body']['appendChil' + 'd'](this['prompt_']));
            const _0x35d14a = Laya['stage']['designWidt' + 'h'], _0x463138 = Laya['stage']['designHeig' + 'ht'];
            var _0x1a95d7 = window['innerWidth'], _0x547886 = window['innerHeigh' + 't'], _0x13098d, _0x4457ad;
            _0x1a95d7 / _0x547886 > _0x35d14a / _0x463138 ? (_0x13098d = _0x547886, _0x4457ad = _0x13098d * _0x35d14a / _0x463138) : (_0x4457ad = _0x1a95d7, _0x13098d = _0x4457ad * _0x463138 / _0x35d14a), this['prompt_']['style']['width'] = _0x4457ad - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x3ec559, _0x4f0d73 = isNaN(_0x4f0d73) ? 0x7d0 : _0x4f0d73, this['prompt_']['style']['display'] = 'inline', this['prompt_']['style']['opacity'] = '1', setTimeout(function () {
                var _0x27fcc7 = 0.5;
                this['prompt_']['style']['webkitTran' + 'sition'] = '-webkit-tr' + 'ansform\x20' + _0x27fcc7 + ('s\x20ease-in,' + '\x20opacity\x20') + _0x27fcc7 + 's\x20ease-in', this['prompt_']['style']['opacity'] = '0', this['prompt_']['style']['display'] = 'none';
            }['bind'](this), _0x4f0d73);
        }
        ['prompt0'](_0x179496, _0x379906 = 0xbb8) {
            if (!Laya)
                return;
            !this['labelInfo'] && (this['labelBg'] = new Laya['Box'](), this['labelBg']['bgColor'] = '#000000', this['labelBg']['alpha'] = 0.5, this['labelBg']['centerX'] = 0x0, this['labelBg']['centerY'] = -0x32, this['labelInfo'] = new Laya['Label'](), this['labelInfo']['align'] = 'center', this['labelInfo']['valign'] = 'middle', this['labelInfo']['color'] = '#ffffff', this['labelInfo']['fontSize'] = 0x1e, this['labelInfo']['centerX'] = 0x0, this['labelInfo']['centerY'] = -0x32, this['labelInfo']['zOrder'] = 0x174876e800), this['labelInfo']['width'] = null, this['labelInfo']['height'] = null, this['labelInfo']['wordWrap'] = ![], this['labelInfo']['visible'] = ![], this['labelInfo']['text'] = _0x179496, this['labelInfo']['height'] += 0x28, this['labelInfo']['width'] > Laya['stage']['width'] - 0x64 && (this['labelInfo']['width'] = Laya['stage']['width'] - 0x64, this['labelInfo']['wordWrap'] = !![]), this['labelBg']['visible'] = this['labelInfo']['visible'] = !![], Laya['stage']['addChild'](this['labelBg']), Laya['stage']['addChild'](this['labelInfo']), Laya['timer']['clear'](this, this['clearLabel']), this['labelBg']['width'] = this['labelInfo']['width'] + 0x14, this['labelBg']['height'] = this['labelInfo']['height'], Laya['timer']['once'](_0x379906, this, this['clearLabel']);
        }
        ['clearLabel']() {
            this['labelBg']['visible'] = this['labelInfo']['visible'] = ![];
        }
        ['getForgame' + 's']() {
            return [];
        }
        ['createLogo']() {
            if (!Laya || !Laya['Image'])
                return null;
            if (!window['yad']) {
                const _0x38b22f = new Laya['Image']();
                _0x38b22f['skin'] = 'yad.png', _0x38b22f['zOrder'] = 0x30d40, window['yad'] = _0x38b22f;
            }
            return window['yad'];
        }
        ['yadstartup'](_0x449cdc, _0xce343f) {
            !this['needStartU' + 'p'] && (_0xce343f && _0xce343f());
            if (this['initialize' + 'd_'])
                return;
            _0x539d47['getInstanc' + 'e']()['showSplash'](), _0x539d47['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x5b8528) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x5b8528);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x1c76e1, _0x80ddbc = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x1c76e1);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x29ebd8) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x29ebd8);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x2dd331 => {
                YYGGames['startupByY' + 'ad']({
                    'appName': _0x449cdc,
                    'config': _0x2dd331,
                    'complete': () => {
                        const _0x16e916 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x16e916) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x242726 => {
                                _0x242726['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0xce343f && _0xce343f();
                    }
                });
            }));
        }
        ['showBanner'](_0xcb374f) {
            // _0xcb374f ? YYGGames['showBanner'](_0xcb374f) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            // YYGGames['hideBanner']();
        }
        ['showSplash'](_0x27b878) {
            // _0x27b878 ? YYGGames['showSplash'](_0x27b878) : YYGGames['showSplash']();
        }
        ['hideSplash']() {
            // YYGGames['hideSplash']();
        }
        ['cargamesst' + 'artup'](_0x509923, _0x1c4136) {
            !this['needStartU' + 'p'] && (_0x1c4136 && _0x1c4136());
            if (this['initialize' + 'd_'])
                return;
            _0x539d47['getInstanc' + 'e']()['showSplash'](), _0x539d47['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x49af67) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x49af67);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x2df66c, _0x4712fd = ![]) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x2df66c);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function () {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                }, Laya['SoundManag' + 'er']['stopSound'] = function (_0x195559) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopSound'](_0x195559);
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x5767ab => {
                YYGGames['startupByC' + 'argames']({
                    'appName': _0x509923,
                    'config': _0x5767ab,
                    'complete': () => {
                        const _0x3a5dd8 = YYGGames['getAdPlatf' + 'ormType']();
                        window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                        switch (_0x3a5dd8) {
                        case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                            break;
                        default:
                            window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x50111c => {
                                _0x50111c['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                            });
                            break;
                        }
                        this['needStartU' + 'p'] = ![], _0x1c4136 && _0x1c4136();
                    }
                });
            }));
        }
        ['puzzlegame' + 'startup'](_0x2fb830, _0x9a6d92) {
            !this['needStartU' + 'p'] && (_0x9a6d92 && _0x9a6d92());
            if (this['initialize' + 'd_'])
                return;
            _0x539d47['getInstanc' + 'e']()['showSplash'](), _0x539d47['getInstanc' + 'e']()['createLogo'](), this['createNoVi' + 'deo'](), this['createLoad' + 'ing'](), window['WebAudioEn' + 'gine']['init']()['then'](() => {
                Laya['SoundManag' + 'er']['playMusic'] = function (_0x27c883) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playMusic'](_0x27c883);
                }, Laya['SoundManag' + 'er']['playSound'] = function (_0x410400) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['playSound'](_0x410400);
                }, Laya['SoundManag' + 'er']['stopMusic'] = function (_0x45afcf) {
                    window['WebAudioEn' + 'gine'] && window['WebAudioEn' + 'gine']['stopMusic']();
                };
            }), this['initialize' + 'd_'] = !![], Laya['loader']['load']('cnf.json', Laya['Handler']['create'](this, _0x416d13 => {
                window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                this['needStartU' + 'p'] = ![], _0x9a6d92 && _0x9a6d92();
                // YYGGames['startup']({
                //     'channel': 0x5,
                //     'appName': _0x2fb830,
                //     'config': _0x416d13,
                //     'complete': () => {
                //         const _0x3aca88 = YYGGames['getAdPlatf' + 'ormType']();
                //         window['scrollList'] = this['scrollList'](), window['box_adTwo'] = this['box_adTwo']();
                //         switch (_0x3aca88) {
                //         case AdPlatformType['en_GAMEDIS' + 'TRIBUTION']:
                //         case AdPlatformType['en_XIAOMI']:
                //             window['yad'] && (window['yad']['scale'](0x0, 0x0), window['yad']['removeSelf']());
                //             break;
                //         default:
                //             window['yad'] && Laya['stage']['addChild'](window['yad']), window['yad']['on'](Laya['Event']['MOUSE_DOWN'], window['yad'], _0x2d9694 => {
                //                 _0x2d9694['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'LOGO');
                //             });
                //             break;
                //         }
                //         this['needStartU' + 'p'] = ![], _0x9a6d92 && _0x9a6d92();
                //     }
                // });
            }));
        }
        ['createNoVi' + 'deo']() {
            if (!Laya['Prefab'] || !Laya['Script'])
                return;
            let _0x578542 = {
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
            class _0xed2e2c extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    this['owner']['top'] = 0x0, this['owner']['bottom'] = 0x0, this['owner']['left'] = 0x0, this['owner']['right'] = 0x0, this['spr_tip'] = this['owner']['getChildBy' + 'Name']('spr_tip'), this['owner']['width'] > this['owner']['height'] ? this['spr_tip']['scale'](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this['spr_tip']['scale'](this['owner']['width'] / 0x438, this['owner']['width'] / 0x438), this['spr_tip']['pos'](this['owner']['width'] / 0x2, this['owner']['height'] / 0x2), this['owner']['on'](Laya['Event']['CLICK'], this, this['closePer']);
                }
                ['closePer']() {
                    _0x539d47['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x1e6f7d = new Laya['Prefab']();
            _0x1e6f7d['json'] = _0x578542, this['noVideoPer'] = _0x1e6f7d['create'](), this['noVideoPer']['zOrder'] = 0x30d3f, this['noVideoPer']['addCompone' + 'nt'](_0xed2e2c);
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
            let _0x5b35b3 = {
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
            class _0x377a6d extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    _0x539d47['getInstanc' + 'e']()['closeNoVid' + 'eo']();
                }
            }
            let _0x1b8fe9 = new Laya['Prefab']();
            _0x1b8fe9['json'] = _0x5b35b3, this['loadingPer'] = _0x1b8fe9['create'](), this['loadingPer']['zOrder'] = 0x30d3e, this['loadingPer']['addCompone' + 'nt'](_0x377a6d);
        }
        ['showLoadin' + 'g']() {
            this['loadingPer'] && Laya['stage']['addChild'](this['loadingPer']);
        }
        ['closeLoadi' + 'ng']() {
            this['loadingPer'] && this['loadingPer']['removeSelf']();
        }
        ['createList']() {
            class _0x4ddcee extends Laya['Box'] {
                constructor() {
                    super(), this['img'] = new Laya['Image'](), this['img']['name'] = 'thumb', this['size'](0x190, 0x12c), this['img']['size'](0x190, 0x12c), this['addChild'](this['img']);
                }
            }
            let _0x3f564d = new Laya['List']();
            return _0x3f564d['size'](0x320, 0x258), _0x3f564d['itemRender'] = _0x4ddcee, _0x3f564d;
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x816f07 = new Laya['Box']();
            //     return _0x816f07['setSize'] = function () {
            //     }, _0x816f07;
            // }
            if (!this['_scrollLis' + 't']) {
                let _0x4cf892 = {
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
                class _0x49bf21 extends Laya['Script'] {
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
                            let _0x4c080c = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x4c080c);
                        }
                        this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['owner']['scrollBar']['mouseWheel' + 'Enable'] = ![], this['owner']['scrollBar']['mouseEnabl' + 'ed'] = ![], this['owner']['scrollBar']['touchScrol' + 'lEnable'] = ![];
                        let _0x917abb = _0x539d47['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x917abb['length'])
                            return;
                        this['listArray'] = JSON['parse'](JSON['stringify'](_0x917abb)), this['listArray'] = this['listArray']['concat'](this['listArray']['slice'](0x0, 0x4)), this['owner']['centerX'] = 0x0, this['owner']['array'] = this['listArray'], Laya['timer']['frameLoop'](0x1, this, this['loopList']), this['owner']['visible'] = !![];
                    }
                    ['itemRender' + 'Fun'](_0x5c5286, _0x34bebc) {
                        let _0x3ab19b = _0x5c5286['getChildBy' + 'Name']('thumb');
                        _0x5c5286['offAll'](), _0x3ab19b['offAll'](), _0x5c5286['on'](Laya['Event']['MOUSE_OVER'], _0x5c5286, () => {
                            _0x5c5286['zOrder'] = 0x64;
                        }), _0x5c5286['on'](Laya['Event']['MOUSE_OUT'], _0x5c5286, () => {
                            _0x5c5286['zOrder'] = _0x34bebc;
                        }), _0x3ab19b['on'](Laya['Event']['MOUSE_OVER'], _0x5c5286, () => {
                            _0x3ab19b['scale'](1.1, 1.1), this['endAni']();
                        }), _0x3ab19b['on'](Laya['Event']['MOUSE_OUT'], _0x5c5286, () => {
                            _0x3ab19b['scale'](0x1, 0x1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
                        }), _0x3ab19b['on'](Laya['Event']['MOUSE_DOWN'], _0x5c5286, _0x163373 => {
                            _0x163373['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x5c5286['dataSource']['id']);
                        });
                        let _0x235313 = _0x3ab19b['mask'];
                        _0x5c5286['width'] = this['sizeTran'][0x0] + 0x14, _0x5c5286['height'] = this['sizeTran'][0x1] + 0x14, _0x5c5286['x'] = (this['sizeTran'][0x0] + 0x14) * _0x34bebc;
                        if (this['sizeTran'][0x2])
                            _0x235313['width'] = _0x3ab19b['width'] = this['sizeTran'][0x0], _0x235313['height'] = _0x3ab19b['height'] = this['sizeTran'][0x1];
                        else {
                            let _0x4bd126 = 0xc8 / this['sizeTran'][0x0] < 0x96 / this['sizeTran'][0x1] ? 0xc8 / this['sizeTran'][0x0] : 0x96 / this['sizeTran'][0x1];
                            _0x3ab19b['width'] = 0xc8 / _0x4bd126, _0x3ab19b['height'] = 0x96 / _0x4bd126, _0x235313['width'] = this['sizeTran'][0x0], _0x235313['height'] = this['sizeTran'][0x1];
                        }
                        _0x235313['x'] = _0x3ab19b['width'] / 0x2, _0x235313['y'] = _0x3ab19b['height'] / 0x2;
                    }
                    ['setSize'](_0x1f152a, _0x48f47d, _0x2e4cda = ![]) {
                        this['sizeTran'] = [
                            _0x1f152a,
                            _0x48f47d,
                            _0x2e4cda
                        ], this['img_ListBg'] && (this['owner']['width'] = (_0x1f152a + 0x14) * 0x4, this['owner']['height'] = _0x48f47d + 0x14, this['img_ListBg']['width'] = (_0x1f152a + 0x14) * 0x4 + 0x14, this['img_ListBg']['height'] = _0x48f47d + 0x28, this['owner']['array'] = [], this['owner']['array'] = this['listArray']);
                    }
                    ['loopList']() {
                        this['owner']['scrollBar']['value'] += 0x1, this['owner']['scrollBar']['value'] >= this['owner']['scrollBar']['max'] && (this['owner']['scrollBar']['value'] = 0x0);
                    }
                    ['endAni']() {
                        Laya['timer']['clearAll'](this), Laya['Tween']['clearAll'](this['owner']['scrollBar']);
                    }
                    ['checkPoint' + 's'](_0x2b4dc9) {
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x217132 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x217132);
                        }
                        this['imgArr'] = [], this['endAni'](), this['owner']['array'] = [];
                    }
                }
                let _0x2456a2 = new Laya['Prefab']();
                _0x2456a2['json'] = _0x4cf892, this['_scrollLis' + 't'] = _0x2456a2['create'](), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['addCompone' + 'nt'](_0x49bf21), this['_scrollLis' + 't']['setSize'] = this['_scrollLis' + 't']['getCompone' + 'nt'](_0x49bf21)['setSize']['bind'](this['_scrollLis' + 't']['getCompone' + 'nt'](_0x49bf21));
            }
            return this['_scrollLis' + 't'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x5acc7d = new Laya['Box']();
            //     return _0x5acc7d['setSpaceX'] = _0x5acc7d['setSize'] = function () {
            //     }, _0x5acc7d;
            // }
            if (!this['_box_adTwo']) {
                let _0x12ad58 = {
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
                class _0x5f501d extends Laya['Script'] {
                    constructor() {
                        super(), this['imgArr'] = [], this['spaceNum'] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        !this['img_ad0'] && (this['img_ad0'] = this['owner']['getChildBy' + 'Name']('img_ad0')), !this['img_ad1'] && (this['img_ad1'] = this['owner']['getChildBy' + 'Name']('img_ad1')), !this['img_ad0Ad'] && (this['img_ad0Ad'] = this['img_ad0']['getChildBy' + 'Name']('img_adImg')), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this['img_ad1']['getChildBy' + 'Name']('img_adImg')), !this['img_ad0AdM' + 'ask'] && (this['img_ad0AdM' + 'ask'] = this['img_ad0Ad']['mask']), !this['img_ad1AdM' + 'ask'] && (this['img_ad1AdM' + 'ask'] = this['img_ad1Ad']['mask']), this['owner']['visible'] = ![];
                        let _0x1d4485 = _0x539d47['getInstanc' + 'e']()['getForgame' + 's']();
                        if (!_0x1d4485['length'])
                            return;
                        let _0x584c45 = JSON['parse'](JSON['stringify'](_0x1d4485));
                        if (this['imgArr']['length']) {
                            let _0x4e3c37 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x4e3c37);
                        }
                        this['setSpaceX'](this['spaceNum']), this['setSize'](this['sizeTran'][0x0], this['sizeTran'][0x1], this['sizeTran'][0x2]), this['img_ad0']['offAll'](), this['img_ad1']['offAll'](), this['owner']['visible'] = !![], this['img_ad0']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x584c45[0x0]['thumb'], this['img_ad1']['getChildBy' + 'Name']('img_adImg')['skin'] = _0x584c45[0x1]['thumb'], this['img_ad0']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x5a087a => {
                            _0x5a087a['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x584c45[0x0]['id']);
                        }), this['img_ad1']['on'](Laya['Event']['MOUSE_DOWN'], this, _0x349f50 => {
                            _0x349f50['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x584c45[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x17d036) {
                        this['spaceNum'] = _0x17d036, this['img_ad0'] && (this['img_ad0']['x'] = -this['img_ad0']['width'] - this['spaceNum'] / 0x2, this['img_ad1']['x'] = this['spaceNum'] / 0x2);
                    }
                    ['onDisable']() {
                        if (this['imgArr']['length']) {
                            let _0x550f82 = JSON['parse'](JSON['stringify'](this['imgArr']));
                            Laya['loader']['clearRes'](_0x550f82);
                        }
                        this['imgArr'] = [];
                    }
                    ['setSize'](_0x5bbca6, _0x1e750f, _0x36acd3 = ![]) {
                        this['sizeTran'] = [
                            _0x5bbca6,
                            _0x1e750f,
                            _0x36acd3
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1']['width'] = _0x5bbca6 + 0x14, this['img_ad0']['height'] = this['img_ad1']['height'] = _0x1e750f + 0x14;
                            if (_0x36acd3)
                                this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = _0x5bbca6, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = _0x1e750f;
                            else {
                                let _0x4af8dd = 0xc8 / _0x5bbca6 < 0x96 / _0x1e750f ? 0xc8 / _0x5bbca6 : 0x96 / _0x1e750f;
                                this['img_ad0Ad']['width'] = this['img_ad1Ad']['width'] = 0xc8 / _0x4af8dd, this['img_ad0Ad']['height'] = this['img_ad1Ad']['height'] = 0x96 / _0x4af8dd, this['img_ad0AdM' + 'ask']['width'] = this['img_ad1AdM' + 'ask']['width'] = _0x5bbca6, this['img_ad0AdM' + 'ask']['height'] = this['img_ad1AdM' + 'ask']['height'] = _0x1e750f;
                            }
                            this['img_ad0AdM' + 'ask']['x'] = this['img_ad1AdM' + 'ask']['x'] = this['img_ad0Ad']['width'] / 0x2, this['img_ad0AdM' + 'ask']['y'] = this['img_ad1AdM' + 'ask']['y'] = this['img_ad0Ad']['height'] / 0x2, this['setSpaceX'](this['spaceNum']);
                        }
                    }
                }
                let _0x454d97 = new Laya['Prefab']();
                _0x454d97['json'] = _0x12ad58, this['_box_adTwo'] = _0x454d97['create'](), this['_box_adTwo']['zOrder'] = 0x30d3f, this['_box_adTwo']['addCompone' + 'nt'](_0x5f501d), this['_box_adTwo']['setSpaceX'] = this['_box_adTwo']['getCompone' + 'nt'](_0x5f501d)['setSpaceX']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x5f501d)), this['_box_adTwo']['setSize'] = this['_box_adTwo']['getCompone' + 'nt'](_0x5f501d)['setSize']['bind'](this['_box_adTwo']['getCompone' + 'nt'](_0x5f501d));
            }
            return this['_box_adTwo'];
        }
    }
    _0x539d47['_instance'] = null, window['platform'] = _0x539d47;
    class _0x40c174 {
        constructor() {
            this['_box_adTwo' + '0'] = null, this['_scrollLis' + 't'] = null, _0x40c174['_inst'] = this;
        }
        static get ['inst']() {
            return !_0x40c174['_inst'] && new _0x40c174(), _0x40c174['_inst'];
        }
        ['box_adTwo']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x4a7491 = new Laya['Box']();
                return _0x4a7491['setSpaceX'] = _0x4a7491['setSize'] = function () {
                }, _0x4a7491;
            }
            if (!this['_box_adTwo' + '0']) {
                this['_box_adTwo' + '0'] = new Laya['Box'](), this['_box_adTwo' + '0']['name'] = '_box_adTwo' + '0', this['_box_adTwo' + '0']['anchorX'] = this['_box_adTwo' + '0']['anchorY'] = 0.5, this['_box_adTwo' + '0']['zOrder'] = 0x30d3f, this['_box_adTwo' + '0']['spaceXNum'] = 0x0;
                let _0x253c5d = new Laya['Image']();
                _0x253c5d['name'] = 'leftAdBg', _0x253c5d['sizeGrid'] = '30,30,30,3' + '0', _0x253c5d['size'](0xdc, 0xaa), _0x253c5d['skin'] = '';
                let _0x1fb44f = new Laya['Image']();
                _0x1fb44f['name'] = 'leftAdMask', _0x1fb44f['size'](0xc8, 0x96), _0x1fb44f['sizeGrid'] = '30,30,30,3' + '0', _0x1fb44f['anchorX'] = _0x1fb44f['anchorY'] = 0.5, _0x1fb44f['skin'] = '';
                let _0xd1597c = new Laya['Image']();
                _0xd1597c['name'] = 'leftAd', _0xd1597c['size'](0xc8, 0x96), _0xd1597c['anchorX'] = _0xd1597c['anchorY'] = 0.5, _0xd1597c['skin'] = '', _0xd1597c['mask'] = _0x1fb44f, _0x253c5d['addChild'](_0xd1597c), _0x253c5d['pos'](0x0, 0x0), _0xd1597c['pos'](_0x253c5d['width'] / 0x2, _0x253c5d['height'] / 0x2), _0x1fb44f['pos'](_0xd1597c['width'] / 0x2, _0xd1597c['height'] / 0x2);
                let _0x14cc84 = new Laya['Image']();
                _0x14cc84['name'] = 'rightAdBg', _0x14cc84['sizeGrid'] = '30,30,30,3' + '0', _0x14cc84['size'](0xdc, 0xaa), _0x14cc84['skin'] = '';
                let _0x5640ed = new Laya['Image']();
                _0x5640ed['name'] = 'rightAdMas' + 'k', _0x5640ed['size'](0xc8, 0x96), _0x5640ed['sizeGrid'] = '30,30,30,3' + '0', _0x5640ed['anchorX'] = _0x5640ed['anchorY'] = 0.5, _0x5640ed['skin'] = '';
                let _0x17bb5c = new Laya['Image']();
                _0x17bb5c['name'] = 'rightAd', _0x17bb5c['size'](0xc8, 0x96), _0x17bb5c['anchorX'] = _0x17bb5c['anchorY'] = 0.5, _0x17bb5c['skin'] = '', _0x17bb5c['mask'] = _0x5640ed, _0x14cc84['addChild'](_0x17bb5c), _0x14cc84['pos'](_0x253c5d['width'], 0x0), _0x17bb5c['pos'](_0x14cc84['width'] / 0x2, _0x14cc84['height'] / 0x2), _0x5640ed['pos'](_0x17bb5c['width'] / 0x2, _0x17bb5c['height'] / 0x2), this['_box_adTwo' + '0']['centerX'] = 0x0, this['_box_adTwo' + '0']['width'] = _0x253c5d['width'] + _0x14cc84['width'], this['_box_adTwo' + '0']['addChild'](_0x253c5d), this['_box_adTwo' + '0']['addChild'](_0x14cc84), this['_box_adTwo' + '0']['setSpaceX'] = this['setSpaceX']['bind'](this['_box_adTwo' + '0']), this['_box_adTwo' + '0']['setSize'] = this['setSize']['bind'](this['_box_adTwo' + '0']);
                let _0x1ca8f2 = _0x539d47['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x1ca8f2['length'])
                    return;
                let _0x43861c = JSON['parse'](JSON['stringify'](_0x1ca8f2));
                _0xd1597c['offAll'](), _0x17bb5c['offAll'](), _0xd1597c['skin'] = _0x43861c[0x0]['thumb'], _0x17bb5c['skin'] = _0x43861c[0x1]['thumb'], _0xd1597c['on'](Laya['Event']['MOUSE_DOWN'], this, _0x3fedfb => {
                    _0x3fedfb['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x43861c[0x0]['id']);
                }), _0x17bb5c['on'](Laya['Event']['MOUSE_DOWN'], this, _0x1dfebe => {
                    _0x1dfebe['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x43861c[0x1]['id']);
                }), this['_box_adTwo' + '0']['visible'] = ![];
            }
            return this['_box_adTwo' + '0'];
        }
        ['setSize'](_0x4d01a6 = 0xc8, _0x153953 = 0x96, _0x1401c9 = ![], _0x63ae2e = !![]) {
            let _0x3c36bc = 0xc8;
            _0x4d01a6 / 0xc8 > _0x153953 / 0x96 ? _0x3c36bc = _0x4d01a6 / 0xc8 : _0x3c36bc = _0x153953 / 0x96;
            let _0x191a52 = 0xc8;
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x13d402 = this['getChildBy' + 'Name']('leftAdBg'), _0x44a387 = this['getChildBy' + 'Name']('rightAdBg'), _0x15a010 = _0x13d402['getChildBy' + 'Name']('leftAd'), _0x3909ed = _0x44a387['getChildBy' + 'Name']('rightAd');
                _0x63ae2e && (_0x13d402['size'](0xdc, 0xaa), _0x44a387['size'](0xdc, 0xaa), _0x15a010['size'](0xc8, 0x96), _0x3909ed['size'](0xc8, 0x96), _0x15a010['mask']['size'](0xc8, 0x96), _0x3909ed['mask']['size'](0xc8, 0x96), _0x13d402['scale'](0x1, 0x1), _0x44a387['scale'](0x1, 0x1), _0x15a010['scale'](0x1, 0x1), _0x3909ed['scale'](0x1, 0x1), _0x15a010['mask']['scale'](0x1, 0x1), _0x3909ed['mask']['scale'](0x1, 0x1));
                let _0x307de5 = 0xc8 * _0x153953 / _0x4d01a6;
                _0x13d402['size'](_0x191a52 + 0x14, _0x307de5 + 0x14), _0x44a387['size'](_0x191a52 + 0x14, _0x307de5 + 0x14), _0x15a010['mask']['size'](_0x191a52, _0x307de5), _0x3909ed['mask']['size'](_0x191a52, _0x307de5), !_0x1401c9 ? (_0x15a010['size'](_0x191a52, _0x307de5), _0x3909ed['size'](_0x191a52, _0x307de5)) : (_0x15a010['size'](0xc8 * _0x3c36bc, 0x96 * _0x3c36bc), _0x3909ed['size'](0xc8 * _0x3c36bc, 0x96 * _0x3c36bc)), _0x15a010['pos'](_0x13d402['width'] / 0x2, _0x13d402['height'] / 0x2), _0x15a010['mask']['pos'](_0x15a010['width'] / 0x2, _0x15a010['height'] / 0x2), _0x3909ed['pos'](_0x44a387['width'] / 0x2, _0x44a387['height'] / 0x2), _0x3909ed['mask']['pos'](_0x3909ed['width'] / 0x2, _0x3909ed['height'] / 0x2), this['setSpaceX'](this['spaceXNum']);
            } else
                this['name'] == '_scrollLis' + 't' && (this['sizeArr'] = [
                    _0x4d01a6,
                    _0x153953,
                    _0x1401c9,
                    _0x63ae2e
                ]);
        }
        ['scrollList']() {
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_GAMEDIS' + 'TRIBUTION'] || YYGGames['getAdPlatf' + 'ormType']() == AdPlatformType['en_XIAOMI']) {
                let _0x360e0d = new Laya['Box']();
                return _0x360e0d['setSize'] = function () {
                }, _0x360e0d;
            }
            if (!this['_scrollLis' + 't']) {
                this['_scrollLis' + 't'] = new Laya['Image'](), this['_scrollLis' + 't']['name'] = '_scrollLis' + 't', this['_scrollLis' + 't']['skin'] = '', this['_scrollLis' + 't']['sizeGrid'] = '30,30,30,3' + '0', this['_scrollLis' + 't']['size'](0x384, 0xbe), this['_scrollLis' + 't']['zOrder'] = 0x30d3f, this['_scrollLis' + 't']['centerX'] = 0x0, this['_scrollLis' + 't']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x1af58b extends Laya['Box'] {
                    constructor() {
                        super(), this['centerY'] = 0x0, this['img'] = new Laya['Image'](), this['img']['name'] = 'img', this['img']['anchorX'] = this['img']['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this['img']['size'](0xc8, 0x96), this['addChild'](this['img']), this['imgMask'] = new Laya['Image'](), this['imgMask']['sizeGrid'] = '30,30,30,3' + '0', this['imgMask']['name'] = 'imgMask', this['imgMask']['anchorX'] = this['imgMask']['anchorY'] = 0.5, this['imgMask']['skin'] = '', this['imgMask']['size'](0xc8, 0x96), this['img']['mask'] = this['imgMask'], this['img']['pos'](this['width'] / 0x2, this['height'] / 0x2), this['imgMask']['pos'](this['img']['width'] / 0x2, this['img']['height'] / 0x2);
                    }
                }
                let _0x14bf40 = new Laya['List']();
                _0x14bf40['hScrollBar' + 'Skin'] = '\x20', _0x14bf40['name'] = 'listAd', _0x14bf40['anchorX'] = _0x14bf40['anchorY'] = 0.5, _0x14bf40['size'](0x370, 0xaa), _0x14bf40['scrollBar']['mouseWheel' + 'Enable'] = ![], _0x14bf40['scrollBar']['mouseEnabl' + 'ed'] = ![], _0x14bf40['scrollBar']['touchScrol' + 'lEnable'] = ![], _0x14bf40['itemRender'] = _0x1af58b, _0x14bf40['renderHand' + 'ler'] = new Laya['Handler'](this, this['renderADHa' + 'ndler']), this['_scrollLis' + 't']['addChild'](_0x14bf40), _0x14bf40['pos'](this['_scrollLis' + 't']['width'] / 0x2, this['_scrollLis' + 't']['height'] / 0x2);
                let _0x589dbe = _0x539d47['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x589dbe['length'])
                    return;
                let _0x5071b2 = JSON['parse'](JSON['stringify'](_0x589dbe));
                _0x5071b2 = _0x5071b2['concat'](_0x5071b2['slice'](0x0, 0x4)), _0x14bf40['array'] = _0x5071b2, Laya['timer']['frameLoop'](0x1, this, this['loopList']), Laya['timer']['once'](0x64, this, () => {
                    _0x14bf40['refresh']();
                }), this['_scrollLis' + 't']['visible'] = ![], this['_scrollLis' + 't']['setSize'] = this['setSize']['bind'](this['_scrollLis' + 't']);
            }
            return this['_scrollLis' + 't'];
        }
        ['renderADHa' + 'ndler'](_0x5e86fb, _0x1b0ed2) {
            let _0x3b8e0e = _0x5e86fb['dataSource'], _0x5cf1b7 = _0x5e86fb['getChildBy' + 'Name']('img'), _0x2dac1e = _0x5cf1b7['mask'];
            _0x5cf1b7['skin'] = _0x3b8e0e['thumb'];
            this['_scrollLis' + 't']['sizeArr'][0x3] && (_0x5e86fb['size'](0xdc, 0xaa), _0x5e86fb['img']['size'](0xc8, 0x96), _0x2dac1e['size'](0xc8, 0x96), _0x5e86fb['scale'](0x1, 0x1), _0x5e86fb['scale'](0x1, 0x1), _0x2dac1e['scale'](0x1, 0x1));
            _0x5e86fb['offAll'](), _0x5cf1b7['offAll'](), _0x5e86fb['on'](Laya['Event']['MOUSE_OVER'], _0x5e86fb, () => {
                _0x5e86fb['zOrder'] = 0x64;
            }), _0x5e86fb['on'](Laya['Event']['MOUSE_OUT'], _0x5e86fb, () => {
                _0x5e86fb['zOrder'] = _0x1b0ed2;
            }), _0x5cf1b7['on'](Laya['Event']['MOUSE_OVER'], _0x5e86fb, () => {
                _0x5cf1b7['scale'](_0x5cf1b7['scaleX'] + 0.1, _0x5cf1b7['scaleY'] + 0.1), this['endAni']();
            }), _0x5cf1b7['on'](Laya['Event']['MOUSE_OUT'], _0x5e86fb, () => {
                _0x5cf1b7['scale'](_0x5cf1b7['scaleX'] - 0.1, _0x5cf1b7['scaleY'] - 0.1), Laya['timer']['frameLoop'](0x1, this, this['loopList']);
            }), _0x5cf1b7['on'](Laya['Event']['MOUSE_DOWN'], _0x5e86fb, _0x354a19 => {
                _0x354a19['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x3b8e0e['id']);
            });
            let _0x46100b = 0xc8;
            this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 > this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96 ? _0x46100b = this['_scrollLis' + 't']['sizeArr'][0x0] / 0xc8 : _0x46100b = this['_scrollLis' + 't']['sizeArr'][0x1] / 0x96;
            let _0x54e9fa = 0xc8, _0xde75ed = 0xc8 * this['_scrollLis' + 't']['sizeArr'][0x1] / this['_scrollLis' + 't']['sizeArr'][0x0];
            _0x5e86fb['size'](_0x54e9fa + 0x14, _0xde75ed + 0x14), _0x2dac1e['size'](_0x54e9fa, _0xde75ed), !this['_scrollLis' + 't']['sizeArr'][0x2] ? _0x5e86fb['img']['size'](_0x54e9fa, _0xde75ed) : (leftAd['size'](0xc8 * _0x46100b, 0x96 * _0x46100b), rightAd['size'](0xc8 * _0x46100b, 0x96 * _0x46100b)), _0x5cf1b7['pos'](_0x5e86fb['width'] / 0x2, _0x5e86fb['height'] / 0x2), _0x2dac1e['pos'](_0x5cf1b7['width'] / 0x2, _0x5cf1b7['height'] / 0x2);
        }
        ['endAni']() {
            Laya['timer']['clearAll'](this, this['loopList']);
        }
        ['loopList']() {
            if (!this['_scrollLis' + 't']) {
                this['endAni']();
                return;
            }
            let _0x4dda0a = this['_scrollLis' + 't']['getChildBy' + 'Name']('listAd');
            _0x4dda0a['scrollBar']['value'] += 0x1, _0x4dda0a['scrollBar']['value'] >= _0x4dda0a['scrollBar']['max'] && (_0x4dda0a['scrollBar']['value'] = 0x0);
        }
        ['visibleCha' + 'ngeFun'](_0x326e39) {
            if (_0x326e39['name'] == '_box_adTwo' + '0') {
                let _0x5cc0a2 = _0x326e39['getChildBy' + 'Name']('leftAdBg'), _0x442ac8 = _0x326e39['getChildBy' + 'Name']('rightAdBg'), _0x575c6e = _0x539d47['getInstanc' + 'e']()['getForgame' + 's']();
                if (!_0x575c6e['length'])
                    return;
                let _0x22cc51 = JSON['parse'](JSON['stringify'](_0x575c6e));
                _0x5cc0a2['offAll'](), _0x442ac8['offAll'](), _0x5cc0a2['getChildBy' + 'Name']('leftAd')['skin'] = _0x22cc51[0x0]['thumb'], _0x442ac8['getChildBy' + 'Name']('rightAd')['skin'] = _0x22cc51[0x1]['thumb'], _0x5cc0a2['on'](Laya['Event']['MOUSE_DOWN'], _0x326e39, _0x4473e3 => {
                    _0x4473e3['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x22cc51[0x0]['id']);
                }), _0x442ac8['on'](Laya['Event']['MOUSE_DOWN'], _0x326e39, _0x43949c => {
                    _0x43949c['stopPropag' + 'ation'](), _0x539d47['getInstanc' + 'e']()['navigate']('GAME', 'MORE', _0x22cc51[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x2f92c3) {
            if (this['name'] == '_box_adTwo' + '0') {
                let _0x243037 = this['getChildBy' + 'Name']('leftAdBg'), _0x5e2531 = this['getChildBy' + 'Name']('rightAdBg');
                _0x5e2531['pos'](_0x243037['width'] + _0x2f92c3, 0x0), this['width'] = _0x243037['width'] + _0x5e2531['width'] + _0x2f92c3, this['spaceXNum'] = _0x2f92c3;
            }
        }
    }
    _0x40c174['_inst'] = null;
}();