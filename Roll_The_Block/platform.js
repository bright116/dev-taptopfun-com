(function (_0x288593, _0x3ff314) {
    const _0x5a8ed9 = _0x4a85, _0x141b40 = _0x288593();
    while (!![]) {
        try {
            const _0x2a04f4 = parseInt(_0x5a8ed9(0x1b8)) / 0x1 * (parseInt(_0x5a8ed9(0x1b9)) / 0x2) + parseInt(_0x5a8ed9(0x1ba)) / 0x3 * (parseInt(_0x5a8ed9(0x1bb)) / 0x4) + parseInt(_0x5a8ed9(0x1bc)) / 0x5 + parseInt(_0x5a8ed9(0x1bd)) / 0x6 * (-parseInt(_0x5a8ed9(0x1be)) / 0x7) + -parseInt(_0x5a8ed9(0x1bf)) / 0x8 * (parseInt(_0x5a8ed9(0x1c0)) / 0x9) + -parseInt(_0x5a8ed9(0x1c1)) / 0xa + -parseInt(_0x5a8ed9(0x1c2)) / 0xb * (-parseInt(_0x5a8ed9(0x1c3)) / 0xc);
            if (_0x2a04f4 === _0x3ff314)
                break;
            else
                _0x141b40['push'](_0x141b40['shift']());
        } catch (_0x216e36) {
            _0x141b40['push'](_0x141b40['shift']());
        }
    }
}(_0x4ee2, 0x81646), !function () {
    const _0x5d5c72 = _0x4a85;
    class _0x2283a7 {
        constructor() {
            const _0x150cd6 = _0x4a85;
            this[_0x150cd6(0x1c4)] = ![], this['isMuted'] = ![], this[_0x150cd6(0x1c5)] = ![], this[_0x150cd6(0x1c6)] = ![], this[_0x150cd6(0x1c7)] = -0x1, this[_0x150cd6(0x1c8)] = ![], this[_0x150cd6(0x1c9)] = ![];
        }
        [_0x5d5c72(0x1ca)]() {
            return new Promise((_0x4f5a0b, _0x49b9e7) => {
                const _0x571e24 = _0x4a85;
                try {
                    this[_0x571e24(0x1cb)] = new _0x8be9b0(), this[_0x571e24(0x1cc)] = new _0x8be9b0(), window[_0x571e24(0x1cd)]['addEventListener'](_0x571e24(0x1ce), () => {
                        setTimeout(() => {
                            const _0x592e30 = _0x4a85;
                            if (this['adShowing']) {
                            } else
                                this[_0x592e30(0x1cf)]();
                        }, 0x64);
                    }, !![]), window[_0x571e24(0x1cd)]['addEventListener'](_0x571e24(0x1d0), () => {
                        setTimeout(() => {
                            const _0x760a45 = _0x4a85;
                            if (this[_0x760a45(0x1c9)]) {
                            } else
                                this['tryToResumeAudioContext']();
                        }, 0x64);
                    }, !![]), window[_0x571e24(0x1cd)]['addEventListener'](_0x571e24(0x1d1), this['onVisibilitychange'][_0x571e24(0x1d2)](this)), this[_0x571e24(0x1cb)]['getContext']()[_0x571e24(0x1d3)] = this[_0x571e24(0x1d4)][_0x571e24(0x1d2)](this), this[_0x571e24(0x1cc)][_0x571e24(0x1d5)]()[_0x571e24(0x1d3)] = this['onSoundStatechange'][_0x571e24(0x1d2)](this), this[_0x571e24(0x1c4)] = !![], this['musicVolume'] = 0x3c, this['isFocusOn'] = ![], this[_0x571e24(0x1cf)](), _0x4f5a0b(!![]);
                } catch (_0x4cf1e7) {
                    console[_0x571e24(0x1d6)](_0x571e24(0x1d7), _0x4cf1e7), alert(_0x571e24(0x1d8)), _0x4f5a0b(![]);
                }
            });
        }
        [_0x5d5c72(0x1d9)]() {
            const _0x13f097 = _0x5d5c72;
            if (this[_0x13f097(0x1c9)])
                return;
            if (document[_0x13f097(0x1da)] == 'hidden')
                !this[_0x13f097(0x1db)] && (this['isVisibilityMuted'] = this[_0x13f097(0x1dc)] = !![]), Laya[_0x13f097(0x1dd)][_0x13f097(0x1de)] = 0x0, Laya[_0x13f097(0x1df)]['renderingEnabled'] = ![], Laya[_0x13f097(0x1e0)] && Laya[_0x13f097(0x1e0)][_0x13f097(0x1e1)](), Laya[_0x13f097(0x1e2)] && Laya[_0x13f097(0x1e2)][_0x13f097(0x1e1)]();
            else
                document[_0x13f097(0x1da)] == _0x13f097(0x1e3) && (this['isVisibilityMuted'] && (this['isVisibilityMuted'] = this[_0x13f097(0x1dc)] = ![]), Laya['timer'][_0x13f097(0x1de)] = 0x1, Laya[_0x13f097(0x1df)][_0x13f097(0x1e4)] = !![], Laya[_0x13f097(0x1e0)] && Laya[_0x13f097(0x1e0)][_0x13f097(0x1e5)](), Laya['physicsTimer'] && Laya[_0x13f097(0x1e2)][_0x13f097(0x1e5)]());
        }
        [_0x5d5c72(0x1e6)]() {
        }
        [_0x5d5c72(0x1cf)]() {
            const _0xcae520 = _0x5d5c72;
            if (this['adShowing'])
                return;
            if (this[_0xcae520(0x1db)])
                return;
            this[_0xcae520(0x1cb)][_0xcae520(0x1e7)]() && !this['bePauseMusic'] && this[_0xcae520(0x1cb)]['resume'](), this[_0xcae520(0x1cc)][_0xcae520(0x1e7)]() && !this[_0xcae520(0x1c5)] && this[_0xcae520(0x1cc)]['resume'](), (!this[_0xcae520(0x1cb)][_0xcae520(0x1e7)]() || !this[_0xcae520(0x1cc)]['isSuspend']()) && (window['document'][_0xcae520(0x1e8)](_0xcae520(0x1ce), this[_0xcae520(0x1cf)][_0xcae520(0x1d2)](this), !![]), window[_0xcae520(0x1cd)][_0xcae520(0x1e8)](_0xcae520(0x1d0), this[_0xcae520(0x1cf)][_0xcae520(0x1d2)](this), !![]), clearInterval(this[_0xcae520(0x1c7)]), this[_0xcae520(0x1c7)] = -0x1);
        }
        [_0x5d5c72(0x1d4)]() {
            const _0x3d20ce = _0x5d5c72;
            this[_0x3d20ce(0x1cb)]['isSuspend']() && !this['isMuted'] && !this[_0x3d20ce(0x1c6)] && this[_0x3d20ce(0x1c7)] === -0x1 && (window['document'][_0x3d20ce(0x1e9)](_0x3d20ce(0x1ce), this[_0x3d20ce(0x1cf)]['bind'](this), !![]), window[_0x3d20ce(0x1cd)][_0x3d20ce(0x1e9)](_0x3d20ce(0x1d0), this[_0x3d20ce(0x1cf)][_0x3d20ce(0x1d2)](this), !![]), this[_0x3d20ce(0x1c7)] = setInterval(this['tryToResumeAudioContext'][_0x3d20ce(0x1d2)](this), 0xc8));
        }
        [_0x5d5c72(0x1ea)]() {
            const _0x30232d = _0x5d5c72;
            this['soundAudio'][_0x30232d(0x1e7)]() && !this[_0x30232d(0x1db)] && !this[_0x30232d(0x1c5)] && this[_0x30232d(0x1c7)] === -0x1 && (window['document'][_0x30232d(0x1e9)](_0x30232d(0x1ce), this['tryToResumeAudioContext']['bind'](this), !![]), window[_0x30232d(0x1cd)]['addEventListener']('touchstart', this[_0x30232d(0x1cf)][_0x30232d(0x1d2)](this), !![]), this[_0x30232d(0x1c7)] = setInterval(this[_0x30232d(0x1cf)]['bind'](this), 0xc8));
        }
        set [_0x5d5c72(0x1dc)](_0x309f21) {
            const _0x15c035 = _0x5d5c72;
            this[_0x15c035(0x1db)] = _0x309f21, this[_0x15c035(0x1db)] ? (this[_0x15c035(0x1cb)]['suspend'](), this[_0x15c035(0x1cc)][_0x15c035(0x1eb)]()) : this['tryToResumeIntervalId'] == -0x1 && (this['tryToResumeIntervalId'] = setInterval(this[_0x15c035(0x1cf)][_0x15c035(0x1d2)](this), 0xc8));
        }
        get [_0x5d5c72(0x1dc)]() {
            return this['isMuted'];
        }
        set [_0x5d5c72(0x1e1)](_0x47aec5) {
            const _0x50938f = _0x5d5c72;
            this[_0x50938f(0x1ec)] = _0x47aec5, this[_0x50938f(0x1ed)] = _0x47aec5, !_0x47aec5 && this[_0x50938f(0x1cc)][_0x50938f(0x1ee)]();
        }
        get [_0x5d5c72(0x1e1)]() {
            const _0x27b10d = _0x5d5c72;
            return this[_0x27b10d(0x1ec)] || this[_0x27b10d(0x1ed)];
        }
        set [_0x5d5c72(0x1ec)](_0x26fcdb) {
            const _0x2cace5 = _0x5d5c72;
            this['bePauseSound'] = _0x26fcdb;
            if (this['bePauseSound'])
                this['soundAudio']['suspend']();
            else {
                if (this[_0x2cace5(0x1db)])
                    return;
                this[_0x2cace5(0x1cc)][_0x2cace5(0x1e5)]();
            }
        }
        get [_0x5d5c72(0x1ec)]() {
            const _0x3c00ef = _0x5d5c72;
            return this[_0x3c00ef(0x1c5)];
        }
        get ['pauseMusic']() {
            return this['bePauseMusic'];
        }
        set ['pauseMusic'](_0x4352a0) {
            const _0x40221c = _0x5d5c72;
            this[_0x40221c(0x1c6)] = _0x4352a0;
            if (this['bePauseMusic'])
                this[_0x40221c(0x1cb)][_0x40221c(0x1eb)]();
            else {
                if (this['isMuted'])
                    return;
                this[_0x40221c(0x1cb)][_0x40221c(0x1e5)]();
            }
        }
        [_0x5d5c72(0x1ef)]() {
            const _0x16a420 = _0x5d5c72;
            this[_0x16a420(0x1cb)][_0x16a420(0x1ef)](), this[_0x16a420(0x1cc)][_0x16a420(0x1ef)]();
        }
        [_0x5d5c72(0x1f0)](_0x3c97c3, _0x5f428b, _0x1949a4) {
            this['soundAudio']['parse'](_0x3c97c3, _0x5f428b);
        }
        ['playMusic'](_0x288562) {
            const _0x2319ab = _0x5d5c72;
            this[_0x2319ab(0x1cb)]['stopAll'](), this[_0x2319ab(0x1cb)][_0x2319ab(0x1f1)](_0x288562);
        }
        [_0x5d5c72(0x1f2)]() {
            const _0x1eadaf = _0x5d5c72;
            this['musicAudio'][_0x1eadaf(0x1ef)]();
        }
        [_0x5d5c72(0x1f3)](_0x22b937) {
            const _0x4ab363 = _0x5d5c72;
            this[_0x4ab363(0x1cc)]['stop'](_0x22b937);
        }
        set [_0x5d5c72(0x1f4)](_0xf0e205) {
            const _0x32ad52 = _0x5d5c72;
            this[_0x32ad52(0x1cb)][_0x32ad52(0x1f4)] = _0xf0e205;
        }
        get [_0x5d5c72(0x1f4)]() {
            const _0x111380 = _0x5d5c72;
            return this[_0x111380(0x1cb)][_0x111380(0x1f4)];
        }
        [_0x5d5c72(0x1f5)](_0x489935, _0x580809 = ![], _0x12e4b2 = ![]) {
            const _0x860263 = _0x5d5c72;
            if (!this['beEnabled'])
                return;
            this[_0x860263(0x1cc)][_0x860263(0x1f6)](_0x489935, _0x580809, _0x12e4b2);
        }
    }
    class _0x4e5198 {
    }
    class _0x8be9b0 {
        constructor() {
            const _0x41453b = _0x5d5c72;
            this[_0x41453b(0x1f7)] = 0x64, this[_0x41453b(0x1f8)] = new Map(), this['_musicVolume'] = 0x64, window['AudioContext'] = window[_0x41453b(0x1f9)] || window[_0x41453b(0x1fa)], this['context'] = new AudioContext();
        }
        [_0x5d5c72(0x1d5)]() {
            return this['context'];
        }
        [_0x5d5c72(0x1e7)]() {
            const _0x3ba189 = _0x5d5c72;
            return this[_0x3ba189(0x1fb)][_0x3ba189(0x1fc)] === 'suspended';
        }
        [_0x5d5c72(0x1eb)]() {
            const _0x2a46d6 = _0x5d5c72;
            return this[_0x2a46d6(0x1fb)][_0x2a46d6(0x1eb)]();
        }
        [_0x5d5c72(0x1e5)]() {
            const _0x7d372 = _0x5d5c72;
            return this[_0x7d372(0x1fb)][_0x7d372(0x1e5)]();
        }
        ['stopAllNoLoop']() {
            const _0x140ee3 = _0x5d5c72, _0x237b33 = this[_0x140ee3(0x1f8)][_0x140ee3(0x1fd)]();
            for (const _0x212d30 of _0x237b33) {
                const _0x35997a = _0x212d30[_0x140ee3(0x1fe)];
                if (_0x35997a[_0x140ee3(0x1ff)][_0x140ee3(0x200)] && !_0x35997a['source'][_0x140ee3(0x201)]) {
                    try {
                        _0x35997a[_0x140ee3(0x1ff)][_0x140ee3(0x202)](this[_0x140ee3(0x1fb)][_0x140ee3(0x203)]);
                    } catch (_0x291246) {
                        _0x35997a[_0x140ee3(0x1ff)][_0x140ee3(0x204)]();
                    }
                    _0x35997a[_0x140ee3(0x1ff)][_0x140ee3(0x205)] = function () {
                    }, _0x35997a[_0x140ee3(0x206)]();
                }
            }
        }
        [_0x5d5c72(0x1ef)]() {
            const _0x31a158 = _0x5d5c72, _0x2ee250 = this['_audioInstances'][_0x31a158(0x1fd)]();
            for (const _0x5093a5 of _0x2ee250) {
                const _0x277b12 = _0x5093a5[_0x31a158(0x1fe)];
                if (_0x277b12[_0x31a158(0x1ff)][_0x31a158(0x200)]) {
                    try {
                        _0x277b12[_0x31a158(0x1ff)][_0x31a158(0x202)](this[_0x31a158(0x1fb)][_0x31a158(0x203)]);
                    } catch (_0x3f8c77) {
                        _0x277b12[_0x31a158(0x1ff)][_0x31a158(0x204)]();
                    }
                    _0x277b12['source'][_0x31a158(0x205)] = function () {
                    }, _0x277b12[_0x31a158(0x206)]();
                }
            }
        }
        [_0x5d5c72(0x202)](_0x13cf25) {
            const _0x4d576b = _0x5d5c72;
            if (this[_0x4d576b(0x1f8)]['has'](_0x13cf25)) {
                const _0x2d3443 = this['_audioInstances']['get'](_0x13cf25);
                this[_0x4d576b(0x207)](_0x2d3443);
            }
        }
        ['_stopSound'](_0xebe3b) {
            const _0x17aee9 = _0x5d5c72, _0x2b209b = _0xebe3b[_0x17aee9(0x1fe)];
            if (_0x2b209b[_0x17aee9(0x1ff)][_0x17aee9(0x200)]) {
                try {
                    _0x2b209b[_0x17aee9(0x1ff)]['stop'](this[_0x17aee9(0x1fb)][_0x17aee9(0x203)]);
                } catch (_0x3952c7) {
                    _0x2b209b[_0x17aee9(0x1ff)][_0x17aee9(0x204)]();
                }
                _0x2b209b[_0x17aee9(0x1ff)]['onended'] = function () {
                }, _0x2b209b[_0x17aee9(0x206)]();
            }
        }
        ['playMusic'](_0x38c0ea) {
            const _0x52c039 = _0x5d5c72;
            this['_music'] && this[_0x52c039(0x207)](this[_0x52c039(0x208)]), this['_audioInstances'][_0x52c039(0x209)](_0x38c0ea) ? (this[_0x52c039(0x208)] = this[_0x52c039(0x1f8)][_0x52c039(0x20a)](_0x38c0ea), this[_0x52c039(0x1f4)] = this['_musicVolume'], this[_0x52c039(0x1f6)](_0x38c0ea, !![])) : this[_0x52c039(0x20b)](_0x38c0ea, () => {
                const _0x3ed940 = _0x52c039;
                this[_0x3ed940(0x1f1)](_0x38c0ea);
            });
        }
        [_0x5d5c72(0x1f2)]() {
            const _0x1a2c95 = _0x5d5c72;
            this[_0x1a2c95(0x208)] && this['_stopSound'](this[_0x1a2c95(0x208)]);
        }
        set ['musicVolume'](_0x3061a9) {
            const _0x526f3d = _0x5d5c72;
            this[_0x526f3d(0x20c)] = _0x3061a9, this['_music'] && (this[_0x526f3d(0x208)][_0x526f3d(0x1fe)][_0x526f3d(0x20d)][_0x526f3d(0x20d)][_0x526f3d(0x20e)] = this[_0x526f3d(0x20c)] / 0x64);
        }
        get [_0x5d5c72(0x1f4)]() {
            const _0x49f02f = _0x5d5c72;
            return this[_0x49f02f(0x20c)];
        }
        ['play'](_0x5ecd32, _0x1a5a0e = ![], _0x14347c = ![]) {
            const _0x346872 = _0x5d5c72;
            if (this[_0x346872(0x1f8)][_0x346872(0x209)](_0x5ecd32)) {
                const _0x210f3b = this[_0x346872(0x1f8)][_0x346872(0x20a)](_0x5ecd32), _0x426978 = _0x210f3b['instance'];
                if (_0x14347c && !_0x426978[_0x346872(0x20f)])
                    return;
                this[_0x346872(0x202)](_0x5ecd32);
                if (_0x210f3b['buffer'])
                    try {
                        if (window[_0x346872(0x210)][_0x346872(0x1e1)] && !_0x1a5a0e)
                            return;
                        _0x426978[_0x346872(0x211)](this['context'][_0x346872(0x203)], _0x210f3b['buffer']), _0x426978[_0x346872(0x1ff)][_0x346872(0x201)] = _0x1a5a0e;
                    } catch (_0x169c5a) {
                        console[_0x346872(0x212)](_0x346872(0x213) + _0x169c5a);
                    }
            } else
                this['downloadArrayBuffer'](_0x5ecd32, () => {
                    const _0xdc3e42 = _0x346872;
                    this[_0xdc3e42(0x1f6)](_0x5ecd32, _0x1a5a0e);
                });
        }
        [_0x5d5c72(0x214)](_0x433695, _0x56df6f) {
            const _0xaf3ff7 = _0x5d5c72;
            let _0x4bfc1d = _0x433695[_0xaf3ff7(0x215)], _0x1614df = 0x0;
            for (let _0x4d1fd0 = 0x0; _0x4d1fd0 < _0x433695[_0xaf3ff7(0x215)]; _0x4d1fd0++) {
                const _0x1528e5 = _0x433695[_0x4d1fd0];
                this['downloadArrayBuffer'](_0x1528e5, () => {
                    _0x1614df++, _0x1614df >= _0x4bfc1d && (_0x56df6f && _0x56df6f());
                });
            }
        }
        [_0x5d5c72(0x216)](_0x7fb0de) {
            const _0x59de2d = _0x5d5c72;
            if (this[_0x59de2d(0x1f8)][_0x59de2d(0x209)](_0x7fb0de)) {
                const _0x15df57 = this['_audioInstances'][_0x59de2d(0x20a)](_0x7fb0de);
                _0x15df57[_0x59de2d(0x1fe)][_0x59de2d(0x217)] = !![];
            }
        }
        [_0x5d5c72(0x218)]() {
            const _0x2ae6a4 = _0x5d5c72;
            let _0x559798 = this['context'];
            const _0x119807 = {
                'gain': _0x559798['createGain'](),
                'panner': _0x559798[_0x2ae6a4(0x219)](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x2743de, _0x2e2d86, _0x7921f6) {
                    const _0x5173ff = _0x2ae6a4;
                    this[_0x5173ff(0x1ff)][_0x5173ff(0x200)] = _0x2e2d86;
                    var _0x3b5d90 = this;
                    this[_0x5173ff(0x20f)] = ![], this[_0x5173ff(0x1ff)][_0x5173ff(0x205)] = function () {
                        const _0x4cb789 = _0x5173ff;
                        _0x3b5d90['setup'](), _0x3b5d90[_0x4cb789(0x20f)] = !![];
                    }, this[_0x5173ff(0x1ff)]['start'](_0x2743de, _0x7921f6);
                },
                'setup': function () {
                    const _0xc6ebf6 = _0x2ae6a4;
                    this[_0xc6ebf6(0x1ff)] = _0x559798['createBufferSource'](), this[_0xc6ebf6(0x21a)]();
                },
                'setupPanning': function () {
                    const _0x5a1506 = _0x2ae6a4;
                    this[_0x5a1506(0x217)] ? (this[_0x5a1506(0x1ff)][_0x5a1506(0x204)](), this[_0x5a1506(0x1ff)][_0x5a1506(0x21b)](this[_0x5a1506(0x21c)]), this[_0x5a1506(0x21c)][_0x5a1506(0x21b)](this['gain'])) : (this[_0x5a1506(0x21c)][_0x5a1506(0x204)](), this[_0x5a1506(0x1ff)][_0x5a1506(0x21b)](this[_0x5a1506(0x20d)]));
                }
            };
            return _0x119807[_0x2ae6a4(0x21c)]['rolloffFactor'] = 0x0, _0x119807[_0x2ae6a4(0x20d)][_0x2ae6a4(0x21b)](this[_0x2ae6a4(0x1fb)][_0x2ae6a4(0x21d)]), _0x119807[_0x2ae6a4(0x206)](), _0x119807;
        }
        ['parse'](_0x2c9095, _0x2281cd, _0xa39889) {
            const _0x322af7 = _0x5d5c72, _0x15b558 = new _0x4e5198();
            _0x15b558['url'] = _0x2c9095, _0x15b558[_0x322af7(0x1fe)] = this['createSoundInstance'](), this[_0x322af7(0x1f8)]['set'](_0x2c9095, _0x15b558), this[_0x322af7(0x1fb)][_0x322af7(0x21e)](_0x2281cd, function (_0x175ccf) {
                const _0x432be9 = _0x322af7;
                _0x15b558[_0x432be9(0x200)] = _0x175ccf, _0xa39889 && _0xa39889();
            }, function (_0x2de4ff) {
                const _0x57e4f4 = _0x322af7;
                _0x15b558[_0x57e4f4(0x212)] = !![], _0xa39889 && _0xa39889(), console['log'](_0x57e4f4(0x21f) + _0x15b558[_0x57e4f4(0x220)]);
            });
        }
        [_0x5d5c72(0x20b)](_0x27351a, _0x42f188) {
            const _0x385eaf = _0x5d5c72;
            if (this[_0x385eaf(0x1f8)]['has'](_0x27351a)) {
                _0x42f188 && _0x42f188();
                return;
            }
            const _0x3706ec = this;
            var _0x18cdb1 = new XMLHttpRequest();
            _0x18cdb1['open'](_0x385eaf(0x221), _0x27351a, !![]), _0x18cdb1[_0x385eaf(0x222)] = _0x385eaf(0x223), _0x18cdb1[_0x385eaf(0x224)] = function () {
                const _0x3f224d = _0x385eaf;
                if (_0x18cdb1['status'] === 0xc8 || _0x18cdb1[_0x3f224d(0x225)] === 0x0)
                    _0x3706ec[_0x3f224d(0x1f0)](_0x27351a, _0x18cdb1['response'], _0x42f188);
                else
                    throw _0x3f224d(0x226);
            }, _0x18cdb1['onerror'] = function () {
                const _0x54dde3 = _0x385eaf;
                _0x42f188 && _0x42f188();
                throw _0x54dde3(0x226);
            }, _0x18cdb1['ontimeout'] = function () {
                _0x42f188 && _0x42f188();
            }, _0x18cdb1[_0x385eaf(0x227)] = function () {
                _0x42f188 && _0x42f188();
            }, _0x18cdb1[_0x385eaf(0x228)](null);
        }
    }
    const _0x5a5dfe = window[_0x5d5c72(0x210)] = new _0x2283a7();
    class _0x481469 {
        constructor() {
            const _0x4f2238 = _0x5d5c72;
            this[_0x4f2238(0x229)] = ![], this['screen_'] = '', this[_0x4f2238(0x22a)] = '', this[_0x4f2238(0x22b)] = '', this['prompt_'] = null, this[_0x4f2238(0x22c)] = ![], this[_0x4f2238(0x22d)] = !![], this[_0x4f2238(0x22e)]();
        }
        static [_0x5d5c72(0x22f)]() {
            const _0x1bc81a = _0x5d5c72;
            return !this[_0x1bc81a(0x230)] && (this[_0x1bc81a(0x230)] = new _0x481469()), this[_0x1bc81a(0x230)];
        }
        [_0x5d5c72(0x22e)]() {
            const _0x1dc9d0 = _0x5d5c72;
            let _0x16d0a1 = document[_0x1dc9d0(0x231)]('layaCanvas');
            _0x16d0a1 && (_0x16d0a1[_0x1dc9d0(0x1e9)](_0x1dc9d0(0x232), this[_0x1dc9d0(0x233)][_0x1dc9d0(0x1d2)](this)), _0x16d0a1['addEventListener'](_0x1dc9d0(0x234), this['onNavigate_']['bind'](this)));
        }
        [_0x5d5c72(0x233)]() {
            const _0x3ea9c2 = _0x5d5c72;
            this[_0x3ea9c2(0x229)] && YYGGames[_0x3ea9c2(0x235)](this['screen_'], this[_0x3ea9c2(0x22a)], this[_0x3ea9c2(0x22b)]), this[_0x3ea9c2(0x229)] = ![];
        }
        [_0x5d5c72(0x236)](_0x4bc4ad) {
            const _0x2c1b7c = _0x5d5c72;
            let _0x524606 = null;
            try {
                let _0x3b4f71 = Laya[_0x2c1b7c(0x237)][_0x2c1b7c(0x238)](_0x4bc4ad);
                _0x524606 = JSON[_0x2c1b7c(0x1f0)](_0x3b4f71);
            } catch (_0x2fe47a) {
            }
            return _0x524606;
        }
        [_0x5d5c72(0x239)](_0x5e777e, _0x439326) {
            const _0x563e71 = _0x5d5c72;
            return Laya[_0x563e71(0x237)][_0x563e71(0x23a)](_0x5e777e, JSON[_0x563e71(0x23b)](_0x439326));
        }
        [_0x5d5c72(0x235)](_0x37ba29, _0x160b4a, _0x3588ca) {
            const _0x38b2a2 = _0x5d5c72;
            this[_0x38b2a2(0x229)] === ![] && (this[_0x38b2a2(0x23c)] = _0x37ba29, this[_0x38b2a2(0x22a)] = _0x160b4a, this[_0x38b2a2(0x22b)] = _0x3588ca, this[_0x38b2a2(0x229)] = !![]);
        }
        [_0x5d5c72(0x23d)]() {
            setTimeout(() => {
                const _0x4e1acc = _0x4a85;
                _0x5a5dfe[_0x4e1acc(0x1dc)] = !![];
            }, 0x64);
        }
        [_0x5d5c72(0x23e)]() {
            setTimeout(() => {
                const _0x2d06df = _0x4a85;
                _0x5a5dfe[_0x2d06df(0x1dc)] = ![];
            }, 0x64);
        }
        ['showInterstitial'](_0x460d20) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            const _0x1e2b7d = _0x4a85;
            window[_0x1e2b7d(0x23f)](), this['onfocus'](), window[_0x1e2b7d(0x210)][_0x1e2b7d(0x1c9)] = ![], Laya[_0x1e2b7d(0x1dd)]['scale'] = 0x1, Laya[_0x1e2b7d(0x1df)][_0x1e2b7d(0x1e4)] = !![], Laya[_0x1e2b7d(0x1e0)] && Laya['updateTimer'][_0x1e2b7d(0x1e5)](), Laya['physicsTimer'] && Laya[_0x1e2b7d(0x1e2)]['resume'](), _0x460d20 && _0x460d20();
            return;
            // YYGGames['showInterstitial']({
            //     'beforeShowAd': () => {
            //         const _0x41e0e0 = _0x4a85;
            //         window[_0x41e0e0(0x210)][_0x41e0e0(0x1c9)] = !![], this[_0x41e0e0(0x23d)](), Laya[_0x41e0e0(0x1dd)][_0x41e0e0(0x1de)] = 0x0, Laya[_0x41e0e0(0x1df)][_0x41e0e0(0x1e4)] = ![], Laya[_0x41e0e0(0x1e0)] && Laya[_0x41e0e0(0x1e0)][_0x41e0e0(0x1e1)](), Laya[_0x41e0e0(0x1e2)] && Laya[_0x41e0e0(0x1e2)][_0x41e0e0(0x1e1)]();
            //     },
            //     'afterShowAd': () => {
            //         const _0x1e2b7d = _0x4a85;
            //         window[_0x1e2b7d(0x23f)](), this['onfocus'](), window[_0x1e2b7d(0x210)][_0x1e2b7d(0x1c9)] = ![], Laya[_0x1e2b7d(0x1dd)]['scale'] = 0x1, Laya[_0x1e2b7d(0x1df)][_0x1e2b7d(0x1e4)] = !![], Laya[_0x1e2b7d(0x1e0)] && Laya['updateTimer'][_0x1e2b7d(0x1e5)](), Laya['physicsTimer'] && Laya[_0x1e2b7d(0x1e2)]['resume'](), _0x460d20 && _0x460d20();
            //     }
            // });
        }
        [_0x5d5c72(0x240)](_0x47d1ce, _0x5162e8, _0x19dcfc) {
            const _0x1b05f1 = _0x5d5c72;
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    const _0x90551e = _0x1b05f1;
                    window[_0x90551e(0x23f)](), this['onfocus'](), window['WebAudioEngine'][_0x90551e(0x1c9)] = ![], Laya[_0x90551e(0x1dd)][_0x90551e(0x1de)] = 0x1, Laya[_0x90551e(0x1df)][_0x90551e(0x1e4)] = !![], Laya[_0x90551e(0x1e0)] && Laya[_0x90551e(0x1e0)][_0x90551e(0x1e5)](), Laya['physicsTimer'] && Laya['physicsTimer']['resume']();
                    _0x47d1ce && _0x47d1ce(), _0x19dcfc && _0x19dcfc(), _0x19dcfc = null, _0x47d1ce = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                  const _0x5bddb1 = _0x1b05f1;
                  _0x5162e8 && (_0x5162e8(), _0x19dcfc && _0x19dcfc(), _0x19dcfc = null, _0x5162e8 = null), this[_0x5bddb1(0x243)](_0x5bddb1(0x244));
                }
            );
            return;
            // if (!YYGGames[_0x1b05f1(0x241)]()) {
            //     this['prompt'](_0x1b05f1(0x242)), _0x19dcfc && _0x19dcfc();
            //     return;
            // }
            // YYGGames['showReward']({
            //     'beforeShowAd': () => {
            //         const _0x528d5e = _0x1b05f1;
            //         window['WebAudioEngine']['adShowing'] = !![], this[_0x528d5e(0x23d)](), Laya[_0x528d5e(0x1dd)][_0x528d5e(0x1de)] = 0x0, Laya[_0x528d5e(0x1df)][_0x528d5e(0x1e4)] = ![], Laya[_0x528d5e(0x1e0)] && Laya[_0x528d5e(0x1e0)][_0x528d5e(0x1e1)](), Laya[_0x528d5e(0x1e2)] && Laya[_0x528d5e(0x1e2)][_0x528d5e(0x1e1)]();
            //     },
            //     'afterShowAd': () => {
            //         const _0x90551e = _0x1b05f1;
            //         window[_0x90551e(0x23f)](), this['onfocus'](), window['WebAudioEngine'][_0x90551e(0x1c9)] = ![], Laya[_0x90551e(0x1dd)][_0x90551e(0x1de)] = 0x1, Laya[_0x90551e(0x1df)][_0x90551e(0x1e4)] = !![], Laya[_0x90551e(0x1e0)] && Laya[_0x90551e(0x1e0)][_0x90551e(0x1e5)](), Laya['physicsTimer'] && Laya['physicsTimer']['resume']();
            //     },
            //     'rewardComplete': () => {
            //         _0x47d1ce && _0x47d1ce(), _0x19dcfc && _0x19dcfc(), _0x19dcfc = null, _0x47d1ce = null;
            //     },
            //     'rewardDismissed': () => {
            //         const _0x5bddb1 = _0x1b05f1;
            //         _0x5162e8 && (_0x5162e8(), _0x19dcfc && _0x19dcfc(), _0x19dcfc = null, _0x5162e8 = null), this[_0x5bddb1(0x243)](_0x5bddb1(0x244));
            //     }
            // });
        }
        ['initList'](_0x1ab77f) {
        }
        [_0x5d5c72(0x243)](_0x4f205c, _0xb585ec) {
            const _0x1aeec4 = _0x5d5c72;
            !this[_0x1aeec4(0x245)] && (this[_0x1aeec4(0x245)] = document[_0x1aeec4(0x246)]('div'), this[_0x1aeec4(0x245)][_0x1aeec4(0x247)][_0x1aeec4(0x248)] = 'overflow:\x20hidden;word-break:\x20break-all;word-wrap:\x20break-word;font-family:siyuan;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;', document[_0x1aeec4(0x249)][_0x1aeec4(0x24a)](this[_0x1aeec4(0x245)]));
            const _0x1a8937 = Laya['stage'][_0x1aeec4(0x24b)], _0x34e7ac = Laya[_0x1aeec4(0x1df)][_0x1aeec4(0x24c)];
            var _0x5ebd33 = window['innerWidth'], _0x546f06 = window[_0x1aeec4(0x24d)], _0xa7add8, _0x41328a;
            _0x5ebd33 / _0x546f06 > _0x1a8937 / _0x34e7ac ? (_0xa7add8 = _0x546f06, _0x41328a = _0xa7add8 * _0x1a8937 / _0x34e7ac) : (_0x41328a = _0x5ebd33, _0xa7add8 = _0x41328a * _0x34e7ac / _0x1a8937), this[_0x1aeec4(0x245)][_0x1aeec4(0x247)][_0x1aeec4(0x24e)] = _0x41328a - 0x32 + 'px', this[_0x1aeec4(0x245)][_0x1aeec4(0x24f)] = _0x4f205c, _0xb585ec = isNaN(_0xb585ec) ? 0x7d0 : _0xb585ec, this[_0x1aeec4(0x245)][_0x1aeec4(0x247)][_0x1aeec4(0x250)] = _0x1aeec4(0x251), this[_0x1aeec4(0x245)][_0x1aeec4(0x247)][_0x1aeec4(0x252)] = '1', setTimeout(function () {
                const _0x515d1a = _0x1aeec4;
                var _0x450dc2 = 0.5;
                this[_0x515d1a(0x245)][_0x515d1a(0x247)][_0x515d1a(0x253)] = _0x515d1a(0x254) + _0x450dc2 + _0x515d1a(0x255) + _0x450dc2 + _0x515d1a(0x256), this['prompt_']['style'][_0x515d1a(0x252)] = '0', this[_0x515d1a(0x245)][_0x515d1a(0x247)][_0x515d1a(0x250)] = _0x515d1a(0x257);
            }['bind'](this), _0xb585ec);
        }
        [_0x5d5c72(0x258)]() {
            return [];
            // const _0x458f37 = _0x5d5c72;
            // let _0x54f2ff = YYGGames['forgames'] || [], _0x225513 = _0x54f2ff[_0x458f37(0x259)]();
            // for (let _0x5ab1f1 = 0x0, _0x4aef60 = _0x225513[_0x458f37(0x215)]; _0x5ab1f1 < _0x4aef60; _0x5ab1f1++) {
            //     const _0x6931e9 = Math[_0x458f37(0x25a)](Math[_0x458f37(0x25b)]() * (_0x5ab1f1 + 0x1)), _0x1d5a0c = _0x225513[_0x6931e9];
            //     _0x225513[_0x6931e9] = _0x225513[_0x5ab1f1], _0x225513[_0x5ab1f1] = _0x1d5a0c;
            // }
            // return _0x225513;
        }
        ['createLogo']() {
            const _0x1b727b = _0x5d5c72;
            if (!Laya || !Laya[_0x1b727b(0x25c)])
                return null;
            if (!window[_0x1b727b(0x25d)]) {
                const _0xc55d5d = new Laya['Image']();
                _0xc55d5d[_0x1b727b(0x25e)] = _0x1b727b(0x25f), (_0xc55d5d[_0x1b727b(0x260)] = 0x32, _0xc55d5d['centerX'] = 0x0, _0xc55d5d['zOrder'] = 0x30d40), window[_0x1b727b(0x25d)] = _0xc55d5d;
            }
            return window[_0x1b727b(0x25d)];
        }
        ['yadstartup'](_0x3c4eea, _0x305e2d) {
            const _0x32d1c6 = _0x5d5c72;
            !this[_0x32d1c6(0x22d)] && (_0x305e2d && _0x305e2d());
            if (this[_0x32d1c6(0x22c)])
                return;
            _0x481469[_0x32d1c6(0x22f)]()['showSplash'](), _0x481469[_0x32d1c6(0x22f)]()[_0x32d1c6(0x261)](), this[_0x32d1c6(0x262)](), this[_0x32d1c6(0x263)](), window[_0x32d1c6(0x210)][_0x32d1c6(0x1ca)]()['then'](() => {
                const _0x5ebee5 = _0x32d1c6;
                Laya[_0x5ebee5(0x264)]['playMusic'] = function (_0x1cc6f2) {
                    window['WebAudioEngine'] && window['WebAudioEngine']['playMusic'](_0x1cc6f2);
                }, Laya[_0x5ebee5(0x264)][_0x5ebee5(0x1f5)] = function (_0x1f06f6, _0x48281f = ![]) {
                    const _0x1ec685 = _0x5ebee5;
                    window[_0x1ec685(0x210)] && window[_0x1ec685(0x210)][_0x1ec685(0x1f5)](_0x1f06f6);
                }, Laya[_0x5ebee5(0x264)][_0x5ebee5(0x1f2)] = function () {
                    const _0x1adc2d = _0x5ebee5;
                    window['WebAudioEngine'] && window[_0x1adc2d(0x210)][_0x1adc2d(0x1f2)]();
                }, Laya[_0x5ebee5(0x264)]['stopSound'] = function (_0x4a4ea7) {
                    const _0x82d868 = _0x5ebee5;
                    window[_0x82d868(0x210)] && window[_0x82d868(0x210)]['stopSound'](_0x4a4ea7);
                };
            }), this[_0x32d1c6(0x22c)] = !![], Laya[_0x32d1c6(0x265)][_0x32d1c6(0x214)](_0x32d1c6(0x266), Laya[_0x32d1c6(0x267)][_0x32d1c6(0x268)](this, _0x3c4414 => {
                const _0x5a989f = _0x32d1c6;
                YYGGames[_0x5a989f(0x269)]({
                    'appName': _0x3c4eea,
                    'config': _0x3c4414,
                    'complete': () => {
                        const _0xb968c6 = _0x5a989f, _0x390843 = YYGGames[_0xb968c6(0x26a)]();
                        window[_0xb968c6(0x26b)] = this[_0xb968c6(0x26b)](), window[_0xb968c6(0x26c)] = this[_0xb968c6(0x26c)]();
                        switch (_0x390843) {
                        case AdPlatformType['en_GAMEDISTRIBUTION']:
                        case AdPlatformType[_0xb968c6(0x26d)]:
                            window[_0xb968c6(0x25d)] && (window[_0xb968c6(0x25d)][_0xb968c6(0x1de)](0x0, 0x0), window['yad'][_0xb968c6(0x26e)]());
                            break;
                        default:
                            window['yad'] && Laya[_0xb968c6(0x1df)]['addChild'](window[_0xb968c6(0x25d)]), window[_0xb968c6(0x25d)]['on'](Laya[_0xb968c6(0x26f)][_0xb968c6(0x270)], window[_0xb968c6(0x25d)], _0x14c86f => {
                                const _0x114659 = _0xb968c6;
                                _0x14c86f[_0x114659(0x271)](), _0x481469[_0x114659(0x22f)]()[_0x114659(0x235)](_0x114659(0x272), _0x114659(0x273));
                            });
                            break;
                        }
                        this[_0xb968c6(0x22d)] = ![], _0x305e2d && _0x305e2d();
                    }
                });
            }));
        }
        [_0x5d5c72(0x274)](_0x283219) {
            // const _0x57ed85 = _0x5d5c72;
            // _0x283219 ? YYGGames[_0x57ed85(0x274)](_0x283219) : YYGGames[_0x57ed85(0x274)]();
        }
        [_0x5d5c72(0x275)]() {
            // YYGGames['hideBanner']();
        }
        [_0x5d5c72(0x276)](_0x3fe53f) {
            // const _0x1a7776 = _0x5d5c72;
            // _0x3fe53f ? YYGGames[_0x1a7776(0x276)](_0x3fe53f) : YYGGames[_0x1a7776(0x276)]();
        }
        ['hideSplash']() {
            // const _0x1fb82e = _0x5d5c72;
            // YYGGames[_0x1fb82e(0x277)]();
        }
        [_0x5d5c72(0x278)](_0x3974e3, _0x41904c) {
            const _0x22037c = _0x5d5c72;
            !this[_0x22037c(0x22d)] && (_0x41904c && _0x41904c());
            if (this[_0x22037c(0x22c)])
                return;
            _0x481469['getInstance']()[_0x22037c(0x276)](), _0x481469[_0x22037c(0x22f)]()['createLogo'](), this[_0x22037c(0x262)](), this[_0x22037c(0x263)](), window[_0x22037c(0x210)][_0x22037c(0x1ca)]()[_0x22037c(0x279)](() => {
                const _0x600023 = _0x22037c;
                Laya['SoundManager']['playMusic'] = function (_0x2fdac6) {
                    const _0x2d0ce9 = _0x4a85;
                    window[_0x2d0ce9(0x210)] && window[_0x2d0ce9(0x210)]['playMusic'](_0x2fdac6);
                }, Laya[_0x600023(0x264)][_0x600023(0x1f5)] = function (_0xfb78bd, _0x24f754 = ![]) {
                    const _0x2c1636 = _0x600023;
                    window['WebAudioEngine'] && window[_0x2c1636(0x210)][_0x2c1636(0x1f5)](_0xfb78bd);
                }, Laya[_0x600023(0x264)][_0x600023(0x1f2)] = function () {
                    const _0x178e19 = _0x600023;
                    window[_0x178e19(0x210)] && window['WebAudioEngine'][_0x178e19(0x1f2)]();
                }, Laya[_0x600023(0x264)][_0x600023(0x1f3)] = function (_0x597a47) {
                    const _0x2b864a = _0x600023;
                    window[_0x2b864a(0x210)] && window['WebAudioEngine'][_0x2b864a(0x1f3)](_0x597a47);
                };
            }), this[_0x22037c(0x22c)] = !![], Laya[_0x22037c(0x265)][_0x22037c(0x214)](_0x22037c(0x266), Laya['Handler']['create'](this, _0x2114fa => {
                const _0x3ffaff = _0x22037c;
                YYGGames[_0x3ffaff(0x27a)]({
                    'appName': _0x3974e3,
                    'config': _0x2114fa,
                    'complete': () => {
                        const _0x4191b3 = _0x3ffaff, _0x58a08a = YYGGames[_0x4191b3(0x26a)]();
                        window[_0x4191b3(0x26b)] = this[_0x4191b3(0x26b)](), window[_0x4191b3(0x26c)] = this[_0x4191b3(0x26c)]();
                        switch (_0x58a08a) {
                        case AdPlatformType['en_GAMEDISTRIBUTION']:
                        case AdPlatformType[_0x4191b3(0x26d)]:
                            window['yad'] && (window['yad'][_0x4191b3(0x1de)](0x0, 0x0), window[_0x4191b3(0x25d)][_0x4191b3(0x26e)]());
                            break;
                        default:
                            window['yad'] && Laya[_0x4191b3(0x1df)][_0x4191b3(0x27b)](window[_0x4191b3(0x25d)]), window['yad']['on'](Laya['Event'][_0x4191b3(0x270)], window[_0x4191b3(0x25d)], _0x17ef15 => {
                                const _0x48c432 = _0x4191b3;
                                _0x17ef15[_0x48c432(0x271)](), _0x481469[_0x48c432(0x22f)]()['navigate']('GAME', _0x48c432(0x273));
                            });
                            break;
                        }
                        this[_0x4191b3(0x22d)] = ![], _0x41904c && _0x41904c();
                    }
                });
            }));
        }
        [_0x5d5c72(0x27c)](_0x280127, _0x575f90) {
            const _0x36cba9 = _0x5d5c72;
            !this[_0x36cba9(0x22d)] && (_0x575f90 && _0x575f90());
            if (this[_0x36cba9(0x22c)])
                return;
            _0x481469[_0x36cba9(0x22f)]()[_0x36cba9(0x276)](), _0x481469[_0x36cba9(0x22f)]()['createLogo'](), this[_0x36cba9(0x262)](), this[_0x36cba9(0x263)](), window[_0x36cba9(0x210)]['init']()['then'](() => {
                const _0x2d9918 = _0x36cba9;
                Laya[_0x2d9918(0x264)]['playMusic'] = function (_0x1f4318) {
                    const _0x422a90 = _0x2d9918;
                    window['WebAudioEngine'] && window[_0x422a90(0x210)][_0x422a90(0x1f1)](_0x1f4318);
                }, Laya[_0x2d9918(0x264)][_0x2d9918(0x1f5)] = function (_0x585e19) {
                    const _0x9d4328 = _0x2d9918;
                    window[_0x9d4328(0x210)] && window[_0x9d4328(0x210)][_0x9d4328(0x1f5)](_0x585e19);
                }, Laya[_0x2d9918(0x264)][_0x2d9918(0x1f2)] = function (_0x586674) {
                    const _0xd65e7d = _0x2d9918;
                    window[_0xd65e7d(0x210)] && window['WebAudioEngine']['stopMusic']();
                };
            }), this['initialized_'] = !![], Laya[_0x36cba9(0x265)]['load']('cnf.json', Laya[_0x36cba9(0x267)][_0x36cba9(0x268)](this, _0x268a40 => {
                const _0x529ef1 = _0x36cba9;
                const _0x59ecaa = _0x529ef1;
                window[_0x59ecaa(0x26b)] = _0x24fad8['inst'][_0x59ecaa(0x26b)](),
                window[_0x59ecaa(0x26c)] = _0x24fad8[_0x59ecaa(0x27e)][_0x59ecaa(0x26c)]();
                this[_0x59ecaa(0x22d)] = ![], 
                _0x575f90 && _0x575f90();
                // YYGGames[_0x529ef1(0x27d)]({
                //     'channel': 0x5,
                //     'appName': _0x280127,
                //     'config': _0x268a40,
                //     'complete': () => {
                //         const _0x59ecaa = _0x529ef1, _0x268ef8 = YYGGames['getAdPlatformType']();
                //         window[_0x59ecaa(0x26b)] = _0x24fad8['inst'][_0x59ecaa(0x26b)](), window[_0x59ecaa(0x26c)] = _0x24fad8[_0x59ecaa(0x27e)][_0x59ecaa(0x26c)]();
                //         switch (_0x268ef8) {
                //         case AdPlatformType['en_GAMEDISTRIBUTION']:
                //         case AdPlatformType[_0x59ecaa(0x26d)]:
                //             window[_0x59ecaa(0x25d)] && (window[_0x59ecaa(0x25d)]['scale'](0x0, 0x0), window[_0x59ecaa(0x25d)][_0x59ecaa(0x26e)]());
                //             break;
                //         default:
                //             window['yad'] && Laya[_0x59ecaa(0x1df)][_0x59ecaa(0x27b)](window['yad']), window[_0x59ecaa(0x25d)]['on'](Laya[_0x59ecaa(0x26f)][_0x59ecaa(0x270)], window[_0x59ecaa(0x25d)], _0x30df7a => {
                //                 const _0x420764 = _0x59ecaa;
                //                 _0x30df7a[_0x420764(0x271)](), _0x481469[_0x420764(0x22f)]()[_0x420764(0x235)]('GAME', _0x420764(0x273));
                //             });
                //             break;
                //         }
                //         this[_0x59ecaa(0x22d)] = ![], _0x575f90 && _0x575f90();
                //     }
                // });
            }));
        }
        [_0x5d5c72(0x262)]() {
            const _0x57a8b8 = _0x5d5c72;
            if (!Laya[_0x57a8b8(0x27f)] || !Laya[_0x57a8b8(0x280)])
                return;
            let _0x326256 = {
                'x': 0x0,
                'type': _0x57a8b8(0x281),
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': 'Box',
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': _0x57a8b8(0x282),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': 'Sprite',
                        'searchKey': _0x57a8b8(0x283),
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': _0x57a8b8(0x284),
                            'presetID': 0x2,
                            'preset': 'laya/pages/Prefab/NoVideo.prefab',
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': _0x57a8b8(0x284),
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': _0x57a8b8(0x284),
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': _0x57a8b8(0x285),
                                'searchKey': _0x57a8b8(0x285),
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0x21c,
                                    'fillColor': _0x57a8b8(0x286)
                                },
                                'nodeParent': 0x4,
                                'label': _0x57a8b8(0x287),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x57a8b8(0x288),
                                'searchKey': _0x57a8b8(0x288),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x57a8b8(0x289),
                                    'text': _0x57a8b8(0x28a),
                                    'presetID': 0x4,
                                    'preset': _0x57a8b8(0x28b),
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': _0x57a8b8(0x28c),
                                    'align': _0x57a8b8(0x28d)
                                },
                                'nodeParent': 0x4,
                                'label': _0x57a8b8(0x28e),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x57a8b8(0x288),
                                'searchKey': _0x57a8b8(0x288),
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x57a8b8(0x289),
                                    'text': _0x57a8b8(0x28f),
                                    'presetID': 0x5,
                                    'preset': _0x57a8b8(0x28b),
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': '#ffffff',
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': _0x57a8b8(0x28e),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': _0x57a8b8(0x288),
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x57a8b8(0x289),
                                    'text': _0x57a8b8(0x290),
                                    'presetID': 0x6,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': _0x57a8b8(0x28c),
                                    'align': _0x57a8b8(0x28d)
                                },
                                'nodeParent': 0x4,
                                'label': _0x57a8b8(0x28e),
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
                        'name': _0x57a8b8(0x291),
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }]
            };
            class _0x3cda2c extends Laya['Script'] {
                constructor() {
                    super();
                }
                [_0x57a8b8(0x292)]() {
                    const _0x235b65 = _0x57a8b8;
                    this[_0x235b65(0x293)][_0x235b65(0x294)] = 0x0, this[_0x235b65(0x293)][_0x235b65(0x260)] = 0x0, this[_0x235b65(0x293)][_0x235b65(0x295)] = 0x0, this[_0x235b65(0x293)][_0x235b65(0x296)] = 0x0, this[_0x235b65(0x284)] = this['owner']['getChildByName'](_0x235b65(0x284)), this[_0x235b65(0x293)]['width'] > this[_0x235b65(0x293)][_0x235b65(0x297)] ? this[_0x235b65(0x284)][_0x235b65(0x1de)](this[_0x235b65(0x293)][_0x235b65(0x297)] / 0x780, this[_0x235b65(0x293)][_0x235b65(0x297)] / 0x780) : this[_0x235b65(0x284)][_0x235b65(0x1de)](this[_0x235b65(0x293)]['width'] / 0x438, this[_0x235b65(0x293)]['width'] / 0x438), this['spr_tip'][_0x235b65(0x298)](this[_0x235b65(0x293)]['width'] / 0x2, this[_0x235b65(0x293)][_0x235b65(0x297)] / 0x2), this['owner']['on'](Laya[_0x235b65(0x26f)][_0x235b65(0x299)], this, this[_0x235b65(0x29a)]);
                }
                [_0x57a8b8(0x29a)]() {
                    const _0x3b2096 = _0x57a8b8;
                    _0x481469[_0x3b2096(0x22f)]()[_0x3b2096(0x29b)]();
                }
            }
            let _0x58bc0a = new Laya['Prefab']();
            _0x58bc0a[_0x57a8b8(0x29c)] = _0x326256, this[_0x57a8b8(0x29d)] = _0x58bc0a[_0x57a8b8(0x268)](), this[_0x57a8b8(0x29d)][_0x57a8b8(0x29e)] = 0x30d3f, this[_0x57a8b8(0x29d)][_0x57a8b8(0x29f)](_0x3cda2c);
        }
        [_0x5d5c72(0x2a0)]() {
            const _0x307176 = _0x5d5c72;
            this[_0x307176(0x29d)] && Laya[_0x307176(0x1df)][_0x307176(0x27b)](this['noVideoPer']);
        }
        [_0x5d5c72(0x29b)]() {
            const _0x16168f = _0x5d5c72;
            this[_0x16168f(0x29d)] && this[_0x16168f(0x29d)][_0x16168f(0x26e)]();
        }
        [_0x5d5c72(0x263)]() {
            const _0x4b3b79 = _0x5d5c72;
            if (!Laya[_0x4b3b79(0x27f)] || !Laya[_0x4b3b79(0x280)])
                return;
            let _0x3758a1 = {
                'x': 0xf,
                'type': _0x4b3b79(0x281),
                'searchKey': _0x4b3b79(0x2a1),
                'props': {
                    'var': 'box_clickLayer',
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': 'box_clickLayer',
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': 'Box',
                        'searchKey': _0x4b3b79(0x281),
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': '#000000',
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': _0x4b3b79(0x281),
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
                            'valign': _0x4b3b79(0x289),
                            'text': _0x4b3b79(0x2a2),
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': _0x4b3b79(0x28c),
                            'centerY': 0x0,
                            'align': _0x4b3b79(0x28d)
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
            class _0xa888bb extends Laya['Script'] {
                constructor() {
                    super();
                }
                [_0x4b3b79(0x292)]() {
                }
                [_0x4b3b79(0x29a)]() {
                    const _0x300925 = _0x4b3b79;
                    _0x481469[_0x300925(0x22f)]()['closeNoVideo']();
                }
            }
            let _0x35c052 = new Laya['Prefab']();
            _0x35c052[_0x4b3b79(0x29c)] = _0x3758a1, this['loadingPer'] = _0x35c052['create'](), this[_0x4b3b79(0x2a3)]['zOrder'] = 0x30d3e, this[_0x4b3b79(0x2a3)][_0x4b3b79(0x29f)](_0xa888bb);
        }
        [_0x5d5c72(0x2a4)]() {
            const _0x16683c = _0x5d5c72;
            this['loadingPer'] && Laya['stage'][_0x16683c(0x27b)](this[_0x16683c(0x2a3)]);
        }
        [_0x5d5c72(0x2a5)]() {
            const _0x63fac6 = _0x5d5c72;
            this[_0x63fac6(0x2a3)] && this[_0x63fac6(0x2a3)]['removeSelf']();
        }
        [_0x5d5c72(0x2a6)]() {
            const _0x546e12 = _0x5d5c72;
            class _0x1381c5 extends Laya[_0x546e12(0x281)] {
                constructor() {
                    const _0xc5e47b = _0x546e12;
                    super(), this['img'] = new Laya[(_0xc5e47b(0x25c))](), this[_0xc5e47b(0x2a7)][_0xc5e47b(0x2a8)] = _0xc5e47b(0x2a9), this['size'](0x190, 0x12c), this[_0xc5e47b(0x2a7)][_0xc5e47b(0x2aa)](0x190, 0x12c), this[_0xc5e47b(0x27b)](this[_0xc5e47b(0x2a7)]);
                }
            }
            let _0x4e35cc = new Laya[(_0x546e12(0x2ab))]();
            return _0x4e35cc[_0x546e12(0x2aa)](0x320, 0x258), _0x4e35cc[_0x546e12(0x2ac)] = _0x1381c5, _0x4e35cc;
        }
    }
    _0x481469[_0x5d5c72(0x230)] = null, window[_0x5d5c72(0x2ad)] = _0x481469;
    class _0x24fad8 {
        constructor() {
            const _0x5ba228 = _0x5d5c72;
            this[_0x5ba228(0x2ae)] = null, this[_0x5ba228(0x2af)] = null, _0x24fad8[_0x5ba228(0x2b0)] = this;
        }
        static get [_0x5d5c72(0x27e)]() {
            return !this['_inst'] && new _0x24fad8(), _0x24fad8['_inst'];
        }
        [_0x5d5c72(0x26c)]() {
            const _0x12c49f = _0x5d5c72;
            if (!Laya || !Laya['stage'])
                return null;
            // if (YYGGames[_0x12c49f(0x26a)]() == AdPlatformType[_0x12c49f(0x2b1)] || YYGGames[_0x12c49f(0x26a)]() == AdPlatformType['en_XIAOMI']) {
            //     let _0x1558c9 = new Laya[(_0x12c49f(0x281))]();
            //     return _0x1558c9[_0x12c49f(0x2b2)] = _0x1558c9[_0x12c49f(0x2b3)] = function () {
            //     }, _0x1558c9;
            // }
            if (!this['_box_adTwo0']) {
                this[_0x12c49f(0x2ae)] = new Laya['Box'](), this[_0x12c49f(0x2ae)][_0x12c49f(0x2a8)] = _0x12c49f(0x2ae), this[_0x12c49f(0x2ae)][_0x12c49f(0x2b4)] = this['_box_adTwo0']['anchorY'] = 0.5, this[_0x12c49f(0x2ae)][_0x12c49f(0x29e)] = 0x30d3f, this[_0x12c49f(0x2ae)][_0x12c49f(0x2b5)] = 0x0;
                let _0x176581 = new Laya['Image']();
                _0x176581['name'] = 'leftAdBg', _0x176581[_0x12c49f(0x2b6)] = _0x12c49f(0x2b7), _0x176581[_0x12c49f(0x2aa)](0xdc, 0xdc), _0x176581[_0x12c49f(0x25e)] = _0x12c49f(0x2b8);
                let _0x5f17e7 = new Laya[(_0x12c49f(0x25c))]();
                _0x5f17e7[_0x12c49f(0x2a8)] = _0x12c49f(0x2b9), _0x5f17e7[_0x12c49f(0x2aa)](0xc8, 0xc8), _0x5f17e7[_0x12c49f(0x2b6)] = '30,30,30,30', _0x5f17e7[_0x12c49f(0x2b4)] = _0x5f17e7[_0x12c49f(0x2ba)] = 0.5, _0x5f17e7['skin'] = '';
                let _0x40f587 = new Laya[(_0x12c49f(0x25c))]();
                _0x40f587['name'] = _0x12c49f(0x2bb), _0x40f587[_0x12c49f(0x2aa)](0xc8, 0xc8), _0x40f587['anchorX'] = _0x40f587[_0x12c49f(0x2ba)] = 0.5, _0x40f587[_0x12c49f(0x25e)] = '', _0x40f587[_0x12c49f(0x2bc)] = _0x5f17e7, _0x176581[_0x12c49f(0x27b)](_0x40f587), _0x176581[_0x12c49f(0x298)](0x0, 0x0), _0x40f587['pos'](_0x176581[_0x12c49f(0x24e)] / 0x2, _0x176581[_0x12c49f(0x297)] / 0x2), _0x5f17e7[_0x12c49f(0x298)](_0x40f587[_0x12c49f(0x24e)] / 0x2, _0x40f587[_0x12c49f(0x297)] / 0x2);
                let _0x2079eb = new Laya[(_0x12c49f(0x25c))]();
                _0x2079eb[_0x12c49f(0x2a8)] = _0x12c49f(0x2bd), _0x2079eb['sizeGrid'] = _0x12c49f(0x2b7), _0x2079eb[_0x12c49f(0x2aa)](0xdc, 0xdc), _0x2079eb[_0x12c49f(0x25e)] = _0x12c49f(0x2b8);
                let _0x2122d2 = new Laya['Image']();
                _0x2122d2[_0x12c49f(0x2a8)] = _0x12c49f(0x2be), _0x2122d2[_0x12c49f(0x2aa)](0xc8, 0xc8), _0x2122d2[_0x12c49f(0x2b6)] = _0x12c49f(0x2b7), _0x2122d2['anchorX'] = _0x2122d2[_0x12c49f(0x2ba)] = 0.5, _0x2122d2['skin'] = _0x12c49f(0x2b8);
                let _0x811920 = new Laya[(_0x12c49f(0x25c))]();
                _0x811920[_0x12c49f(0x2a8)] = _0x12c49f(0x2bf), _0x811920[_0x12c49f(0x2aa)](0xc8, 0xc8), _0x811920[_0x12c49f(0x2b4)] = _0x811920[_0x12c49f(0x2ba)] = 0.5, _0x811920['skin'] = '', _0x811920[_0x12c49f(0x2bc)] = _0x2122d2, _0x2079eb[_0x12c49f(0x27b)](_0x811920), _0x2079eb[_0x12c49f(0x298)](_0x176581[_0x12c49f(0x24e)], 0x0), _0x811920[_0x12c49f(0x298)](_0x2079eb[_0x12c49f(0x24e)] / 0x2, _0x2079eb[_0x12c49f(0x297)] / 0x2), _0x2122d2[_0x12c49f(0x298)](_0x811920[_0x12c49f(0x24e)] / 0x2, _0x811920['height'] / 0x2), this['_box_adTwo0'][_0x12c49f(0x2c0)] = 0x0, this['_box_adTwo0'][_0x12c49f(0x24e)] = _0x176581['width'] + _0x2079eb['width'], this['_box_adTwo0'][_0x12c49f(0x27b)](_0x176581), this[_0x12c49f(0x2ae)][_0x12c49f(0x27b)](_0x2079eb), this[_0x12c49f(0x2ae)][_0x12c49f(0x2b2)] = this[_0x12c49f(0x2b2)][_0x12c49f(0x1d2)](this[_0x12c49f(0x2ae)]), this[_0x12c49f(0x2ae)][_0x12c49f(0x2b3)] = this[_0x12c49f(0x2b3)][_0x12c49f(0x1d2)](this['_box_adTwo0']);
                let _0x5dd853 = _0x481469[_0x12c49f(0x22f)]()['getForgames']();
                if (!_0x5dd853[_0x12c49f(0x215)])
                    return;
                let _0xd60fbf = JSON['parse'](JSON[_0x12c49f(0x23b)](_0x5dd853));
                _0x40f587[_0x12c49f(0x2c1)](), _0x811920[_0x12c49f(0x2c1)](), _0x40f587[_0x12c49f(0x25e)] = _0xd60fbf[0x0][_0x12c49f(0x2a9)], _0x811920[_0x12c49f(0x25e)] = _0xd60fbf[0x1]['thumb'], _0x40f587['on'](Laya['Event'][_0x12c49f(0x270)], this, _0x55bfb3 => {
                    const _0x4946ae = _0x12c49f;
                    _0x55bfb3['stopPropagation'](), _0x481469['getInstance']()[_0x4946ae(0x235)](_0x4946ae(0x272), _0x4946ae(0x2c2), _0xd60fbf[0x0]['id']);
                }), _0x811920['on'](Laya['Event'][_0x12c49f(0x270)], this, _0x14b960 => {
                    const _0x29d0d8 = _0x12c49f;
                    _0x14b960[_0x29d0d8(0x271)](), _0x481469[_0x29d0d8(0x22f)]()[_0x29d0d8(0x235)](_0x29d0d8(0x272), _0x29d0d8(0x2c2), _0xd60fbf[0x1]['id']);
                }), this[_0x12c49f(0x2ae)][_0x12c49f(0x1e3)] = ![];
            }
            return this[_0x12c49f(0x2ae)];
        }
        ['setSize'](_0x51dddd = 0xc8, _0x31cc2e = 0xc8, _0xca0115 = ![], _0x678bbd = !![]) {
            const _0x30f21a = _0x5d5c72;
            let _0x1b7183 = 0xc8;
            _0x51dddd / 0xc8 > _0x31cc2e / 0xc8 ? _0x1b7183 = _0x51dddd / 0xc8 : _0x1b7183 = _0x31cc2e / 0xc8;
            let _0xac23a5 = 0xc8;
            if (this['name'] == _0x30f21a(0x2ae)) {
                let _0x50d4d2 = this[_0x30f21a(0x2c3)](_0x30f21a(0x2c4)), _0x245e60 = this[_0x30f21a(0x2c3)](_0x30f21a(0x2bd)), _0x1c450f = _0x50d4d2[_0x30f21a(0x2c3)](_0x30f21a(0x2bb)), _0xd64744 = _0x245e60[_0x30f21a(0x2c3)]('rightAd');
                _0x678bbd && (_0x50d4d2[_0x30f21a(0x2aa)](0xdc, 0xdc), _0x245e60[_0x30f21a(0x2aa)](0xdc, 0xdc), _0x1c450f['size'](0xc8, 0xc8), _0xd64744[_0x30f21a(0x2aa)](0xc8, 0xc8), _0x1c450f[_0x30f21a(0x2bc)][_0x30f21a(0x2aa)](0xc8, 0xc8), _0xd64744[_0x30f21a(0x2bc)][_0x30f21a(0x2aa)](0xc8, 0xc8), _0x50d4d2[_0x30f21a(0x1de)](0x1, 0x1), _0x245e60['scale'](0x1, 0x1), _0x1c450f[_0x30f21a(0x1de)](0x1, 0x1), _0xd64744[_0x30f21a(0x1de)](0x1, 0x1), _0x1c450f[_0x30f21a(0x2bc)][_0x30f21a(0x1de)](0x1, 0x1), _0xd64744[_0x30f21a(0x2bc)][_0x30f21a(0x1de)](0x1, 0x1));
                let _0xd25cab = 0xc8 * _0x31cc2e / _0x51dddd;
                _0x50d4d2['size'](_0xac23a5 + 0x14, _0xd25cab + 0x14), _0x245e60['size'](_0xac23a5 + 0x14, _0xd25cab + 0x14), _0x1c450f[_0x30f21a(0x2bc)][_0x30f21a(0x2aa)](_0xac23a5, _0xd25cab), _0xd64744[_0x30f21a(0x2bc)][_0x30f21a(0x2aa)](_0xac23a5, _0xd25cab), !_0xca0115 ? (_0x1c450f[_0x30f21a(0x2aa)](_0xac23a5, _0xd25cab), _0xd64744[_0x30f21a(0x2aa)](_0xac23a5, _0xd25cab)) : (_0x1c450f[_0x30f21a(0x2aa)](0xc8 * _0x1b7183, 0xc8 * _0x1b7183), _0xd64744[_0x30f21a(0x2aa)](0xc8 * _0x1b7183, 0xc8 * _0x1b7183)), _0x1c450f[_0x30f21a(0x298)](_0x50d4d2[_0x30f21a(0x24e)] / 0x2, _0x50d4d2[_0x30f21a(0x297)] / 0x2), _0x1c450f[_0x30f21a(0x2bc)][_0x30f21a(0x298)](_0x1c450f['width'] / 0x2, _0x1c450f['height'] / 0x2), _0xd64744[_0x30f21a(0x298)](_0x245e60['width'] / 0x2, _0x245e60[_0x30f21a(0x297)] / 0x2), _0xd64744['mask'][_0x30f21a(0x298)](_0xd64744[_0x30f21a(0x24e)] / 0x2, _0xd64744[_0x30f21a(0x297)] / 0x2), this[_0x30f21a(0x2b2)](this[_0x30f21a(0x2b5)]);
            } else
                this[_0x30f21a(0x2a8)] == _0x30f21a(0x2af) && (this[_0x30f21a(0x2c5)] = [
                    _0x51dddd,
                    _0x31cc2e,
                    _0xca0115,
                    _0x678bbd
                ]);
        }
        [_0x5d5c72(0x26b)]() {
            const _0x3825c9 = _0x5d5c72;
            if (!Laya || !Laya[_0x3825c9(0x1df)])
                return null;
            // if (YYGGames['getAdPlatformType']() == AdPlatformType[_0x3825c9(0x2b1)] || YYGGames['getAdPlatformType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x3f676e = new Laya[(_0x3825c9(0x281))]();
            //     return _0x3f676e[_0x3825c9(0x2b3)] = function () {
            //     }, _0x3f676e;
            // }
            if (!this[_0x3825c9(0x2af)]) {
                this['_scrollList'] = new Laya[(_0x3825c9(0x25c))](), this[_0x3825c9(0x2af)][_0x3825c9(0x2a8)] = _0x3825c9(0x2af), this[_0x3825c9(0x2af)][_0x3825c9(0x25e)] = _0x3825c9(0x2c6), this[_0x3825c9(0x2af)][_0x3825c9(0x2b6)] = '30,30,30,30', this[_0x3825c9(0x2af)][_0x3825c9(0x2aa)](0x384, 0xdc), this[_0x3825c9(0x2af)][_0x3825c9(0x29e)] = 0x30d3f, this[_0x3825c9(0x2af)]['centerX'] = 0x0, this[_0x3825c9(0x2af)][_0x3825c9(0x2c5)] = [
                    0xc8,
                    0xc8,
                    ![],
                    !![]
                ];
                class _0x3567f6 extends Laya['Box'] {
                    constructor() {
                        const _0x2d5d23 = _0x3825c9;
                        super(), this[_0x2d5d23(0x2c7)] = 0x0, this[_0x2d5d23(0x2a7)] = new Laya[(_0x2d5d23(0x25c))](), this[_0x2d5d23(0x2a7)][_0x2d5d23(0x2a8)] = _0x2d5d23(0x2a7), this[_0x2d5d23(0x2a7)]['anchorX'] = this[_0x2d5d23(0x2a7)][_0x2d5d23(0x2ba)] = 0.5, this[_0x2d5d23(0x2aa)](0xdc, 0xdc), this[_0x2d5d23(0x2a7)][_0x2d5d23(0x2aa)](0xc8, 0xc8), this[_0x2d5d23(0x27b)](this['img']), this[_0x2d5d23(0x2c8)] = new Laya['Image'](), this[_0x2d5d23(0x2c8)]['sizeGrid'] = _0x2d5d23(0x2b7), this[_0x2d5d23(0x2c8)][_0x2d5d23(0x2a8)] = _0x2d5d23(0x2c8), this[_0x2d5d23(0x2c8)][_0x2d5d23(0x2b4)] = this[_0x2d5d23(0x2c8)][_0x2d5d23(0x2ba)] = 0.5, this[_0x2d5d23(0x2c8)]['skin'] = _0x2d5d23(0x2b8), this['imgMask'][_0x2d5d23(0x2aa)](0xc8, 0xc8), this[_0x2d5d23(0x2a7)]['mask'] = this['imgMask'], this['img'][_0x2d5d23(0x298)](this['width'] / 0x2, this[_0x2d5d23(0x297)] / 0x2), this['imgMask']['pos'](this[_0x2d5d23(0x2a7)][_0x2d5d23(0x24e)] / 0x2, this[_0x2d5d23(0x2a7)][_0x2d5d23(0x297)] / 0x2);
                    }
                }
                let _0x35b7dd = new Laya[(_0x3825c9(0x2ab))]();
                _0x35b7dd[_0x3825c9(0x2c9)] = '\x20', _0x35b7dd['name'] = _0x3825c9(0x2ca), _0x35b7dd[_0x3825c9(0x2b4)] = _0x35b7dd[_0x3825c9(0x2ba)] = 0.5, _0x35b7dd[_0x3825c9(0x2aa)](0x2bc, 0xc8), _0x35b7dd[_0x3825c9(0x2cb)][_0x3825c9(0x2cc)] = ![], _0x35b7dd[_0x3825c9(0x2cb)][_0x3825c9(0x2cd)] = ![], _0x35b7dd[_0x3825c9(0x2cb)]['touchScrollEnable'] = ![], _0x35b7dd['itemRender'] = _0x3567f6, _0x35b7dd[_0x3825c9(0x2ce)] = new Laya[(_0x3825c9(0x267))](this, this[_0x3825c9(0x2cf)]), this[_0x3825c9(0x2af)][_0x3825c9(0x27b)](_0x35b7dd), _0x35b7dd[_0x3825c9(0x298)](this[_0x3825c9(0x2af)]['width'] / 0x2, this[_0x3825c9(0x2af)][_0x3825c9(0x297)] / 0x2);
                let _0x916648 = _0x481469[_0x3825c9(0x22f)]()[_0x3825c9(0x258)]();
                if (!_0x916648[_0x3825c9(0x215)])
                    return;
                let _0x27f837 = JSON['parse'](JSON['stringify'](_0x916648));
                _0x27f837 = _0x27f837[_0x3825c9(0x2d0)](_0x27f837[_0x3825c9(0x259)](0x0, 0x4)), _0x35b7dd['array'] = _0x27f837, Laya[_0x3825c9(0x1dd)][_0x3825c9(0x2d1)](0x1, this, this['loopList']), Laya[_0x3825c9(0x1dd)][_0x3825c9(0x2d2)](0x64, this, () => {
                    const _0x1ffb0d = _0x3825c9;
                    _0x35b7dd[_0x1ffb0d(0x2d3)]();
                }), this[_0x3825c9(0x2af)][_0x3825c9(0x1e3)] = ![], this[_0x3825c9(0x2af)]['setSize'] = this[_0x3825c9(0x2b3)][_0x3825c9(0x1d2)](this[_0x3825c9(0x2af)]);
            }
            return this[_0x3825c9(0x2af)];
        }
        ['renderADHandler'](_0xe5918f, _0x599161) {
            const _0x4ac769 = _0x5d5c72;
            let _0x2ea19b = _0xe5918f[_0x4ac769(0x2d4)], _0x24cc1f = _0xe5918f[_0x4ac769(0x2c3)](_0x4ac769(0x2a7)), _0x4f6a3b = _0x24cc1f['mask'];
            _0x24cc1f[_0x4ac769(0x25e)] = _0x2ea19b['thumb'];
            this[_0x4ac769(0x2af)][_0x4ac769(0x2c5)][0x3] && (_0xe5918f[_0x4ac769(0x2aa)](0xdc, 0xdc), _0xe5918f[_0x4ac769(0x2a7)][_0x4ac769(0x2aa)](0xc8, 0xc8), _0x4f6a3b[_0x4ac769(0x2aa)](0xc8, 0xc8), _0xe5918f[_0x4ac769(0x1de)](0x1, 0x1), _0xe5918f[_0x4ac769(0x1de)](0x1, 0x1), _0x4f6a3b[_0x4ac769(0x1de)](0x1, 0x1));
            _0xe5918f[_0x4ac769(0x2c1)](), _0x24cc1f[_0x4ac769(0x2c1)](), _0xe5918f['on'](Laya[_0x4ac769(0x26f)][_0x4ac769(0x2d5)], _0xe5918f, () => {
                const _0x189a4a = _0x4ac769;
                _0xe5918f[_0x189a4a(0x29e)] = 0x64;
            }), _0xe5918f['on'](Laya[_0x4ac769(0x26f)][_0x4ac769(0x2d6)], _0xe5918f, () => {
                const _0x44c962 = _0x4ac769;
                _0xe5918f[_0x44c962(0x29e)] = _0x599161;
            }), _0x24cc1f['on'](Laya[_0x4ac769(0x26f)][_0x4ac769(0x2d5)], _0xe5918f, () => {
                const _0x16a31c = _0x4ac769;
                _0x24cc1f[_0x16a31c(0x1de)](_0x24cc1f[_0x16a31c(0x2d7)] + 0.1, _0x24cc1f[_0x16a31c(0x2d8)] + 0.1), this[_0x16a31c(0x2d9)]();
            }), _0x24cc1f['on'](Laya[_0x4ac769(0x26f)]['MOUSE_OUT'], _0xe5918f, () => {
                const _0x27f708 = _0x4ac769;
                _0x24cc1f[_0x27f708(0x1de)](_0x24cc1f[_0x27f708(0x2d7)] - 0.1, _0x24cc1f[_0x27f708(0x2d8)] - 0.1), Laya[_0x27f708(0x1dd)][_0x27f708(0x2d1)](0x1, this, this['loopList']);
            }), _0x24cc1f['on'](Laya[_0x4ac769(0x26f)]['MOUSE_DOWN'], _0xe5918f, _0x50205f => {
                const _0x20b7e8 = _0x4ac769;
                _0x50205f['stopPropagation'](), _0x481469[_0x20b7e8(0x22f)]()[_0x20b7e8(0x235)](_0x20b7e8(0x272), _0x20b7e8(0x2c2), _0x2ea19b['id']);
            });
            let _0x2fb9fa = 0xc8;
            this[_0x4ac769(0x2af)]['sizeArr'][0x0] / 0xc8 > this['_scrollList']['sizeArr'][0x1] / 0xc8 ? _0x2fb9fa = this[_0x4ac769(0x2af)][_0x4ac769(0x2c5)][0x0] / 0xc8 : _0x2fb9fa = this['_scrollList']['sizeArr'][0x1] / 0xc8;
            let _0x555935 = 0xc8, _0x2a7df6 = 0xc8 * this['_scrollList'][_0x4ac769(0x2c5)][0x1] / this[_0x4ac769(0x2af)]['sizeArr'][0x0];
            _0xe5918f[_0x4ac769(0x2aa)](_0x555935 + 0x14, _0x2a7df6 + 0x14), _0x4f6a3b[_0x4ac769(0x2aa)](_0x555935, _0x2a7df6), !this[_0x4ac769(0x2af)][_0x4ac769(0x2c5)][0x2] ? _0xe5918f[_0x4ac769(0x2a7)]['size'](_0x555935, _0x2a7df6) : (leftAd[_0x4ac769(0x2aa)](0xc8 * _0x2fb9fa, 0xc8 * _0x2fb9fa), rightAd[_0x4ac769(0x2aa)](0xc8 * _0x2fb9fa, 0xc8 * _0x2fb9fa)), _0x24cc1f[_0x4ac769(0x298)](_0xe5918f[_0x4ac769(0x24e)] / 0x2, _0xe5918f['height'] / 0x2), _0x4f6a3b[_0x4ac769(0x298)](_0x24cc1f[_0x4ac769(0x24e)] / 0x2, _0x24cc1f[_0x4ac769(0x297)] / 0x2);
        }
        [_0x5d5c72(0x2d9)]() {
            const _0x5dfa9c = _0x5d5c72;
            Laya[_0x5dfa9c(0x1dd)][_0x5dfa9c(0x2da)](this, this[_0x5dfa9c(0x2db)]);
        }
        ['loopList']() {
            const _0x199fbd = _0x5d5c72;
            if (!this[_0x199fbd(0x2af)]) {
                this['endAni']();
                return;
            }
            let _0x351e64 = this[_0x199fbd(0x2af)]['getChildByName'](_0x199fbd(0x2ca));
            _0x351e64[_0x199fbd(0x2cb)][_0x199fbd(0x20e)] += 0x1, _0x351e64[_0x199fbd(0x2cb)][_0x199fbd(0x20e)] >= _0x351e64['scrollBar'][_0x199fbd(0x2dc)] && (_0x351e64[_0x199fbd(0x2cb)]['value'] = 0x0);
        }
        [_0x5d5c72(0x2dd)](_0x11d87b) {
            const _0x4447fb = _0x5d5c72;
            if (_0x11d87b[_0x4447fb(0x2a8)] == _0x4447fb(0x2ae)) {
                let _0x46e437 = _0x11d87b[_0x4447fb(0x2c3)]('leftAdBg'), _0xa4f2a6 = _0x11d87b[_0x4447fb(0x2c3)](_0x4447fb(0x2bd)), _0x4ace6e = _0x481469[_0x4447fb(0x22f)]()[_0x4447fb(0x258)]();
                if (!_0x4ace6e['length'])
                    return;
                let _0x17f204 = JSON['parse'](JSON[_0x4447fb(0x23b)](_0x4ace6e));
                _0x46e437['offAll'](), _0xa4f2a6[_0x4447fb(0x2c1)](), _0x46e437['getChildByName']('leftAd')[_0x4447fb(0x25e)] = _0x17f204[0x0][_0x4447fb(0x2a9)], _0xa4f2a6[_0x4447fb(0x2c3)](_0x4447fb(0x2bf))[_0x4447fb(0x25e)] = _0x17f204[0x1][_0x4447fb(0x2a9)], _0x46e437['on'](Laya[_0x4447fb(0x26f)][_0x4447fb(0x270)], _0x11d87b, _0x51bace => {
                    const _0x3538ef = _0x4447fb;
                    _0x51bace[_0x3538ef(0x271)](), _0x481469[_0x3538ef(0x22f)]()[_0x3538ef(0x235)](_0x3538ef(0x272), _0x3538ef(0x2c2), _0x17f204[0x0]['id']);
                }), _0xa4f2a6['on'](Laya[_0x4447fb(0x26f)][_0x4447fb(0x270)], _0x11d87b, _0x3d95c0 => {
                    const _0x5438e9 = _0x4447fb;
                    _0x3d95c0[_0x5438e9(0x271)](), _0x481469[_0x5438e9(0x22f)]()[_0x5438e9(0x235)](_0x5438e9(0x272), _0x5438e9(0x2c2), _0x17f204[0x1]['id']);
                });
            }
        }
        [_0x5d5c72(0x2b2)](_0x566f71) {
            const _0x47dc96 = _0x5d5c72;
            if (this[_0x47dc96(0x2a8)] == '_box_adTwo0') {
                let _0x1ae5e3 = this[_0x47dc96(0x2c3)](_0x47dc96(0x2c4)), _0x353277 = this[_0x47dc96(0x2c3)](_0x47dc96(0x2bd));
                _0x353277['pos'](_0x1ae5e3[_0x47dc96(0x24e)] + _0x566f71, 0x0), this[_0x47dc96(0x24e)] = _0x1ae5e3[_0x47dc96(0x24e)] + _0x353277[_0x47dc96(0x24e)] + _0x566f71, this['spaceXNum'] = _0x566f71;
            }
        }
    }
    _0x24fad8[_0x5d5c72(0x2b0)] = null;
}());
function _0x4a85(_0x5e6db7, _0x2962aa) {
    const _0x4ee292 = _0x4ee2();
    return _0x4a85 = function (_0x4a85e8, _0x156cf7) {
        _0x4a85e8 = _0x4a85e8 - 0x1b8;
        let _0x550d1c = _0x4ee292[_0x4a85e8];
        return _0x550d1c;
    }, _0x4a85(_0x5e6db7, _0x2962aa);
}
function _0x4ee2() {
    const _0x55f698 = [
        'initialized_',
        'needStartUp',
        'initData',
        'getInstance',
        '_instance',
        'getElementById',
        'mouseup',
        'onNavigate_',
        'touchend',
        'navigate',
        'getStorageSync',
        'LocalStorage',
        'getItem',
        'setStorageSync',
        'setItem',
        'stringify',
        'screen_',
        'onblur',
        'onfocus',
        'focus',
        'showReward',
        'canShowReward',
        'No\x20Available\x20Video',
        'prompt',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'prompt_',
        'createElement',
        'style',
        'cssText',
        'body',
        'appendChild',
        'designWidth',
        'designHeight',
        'innerHeight',
        'width',
        'innerHTML',
        'display',
        'inline',
        'opacity',
        'webkitTransition',
        '-webkit-transform\x20',
        's\x20ease-in,\x20opacity\x20',
        's\x20ease-in',
        'none',
        'getForgames',
        'slice',
        'floor',
        'random',
        'Image',
        'yad',
        'skin',
        'yad.png',
        'bottom',
        'createLogo',
        'createNoVideo',
        'createLoading',
        'SoundManager',
        'loader',
        'cnf.json',
        'Handler',
        'create',
        'startupByYad',
        'getAdPlatformType',
        'scrollList',
        'box_adTwo',
        'en_XIAOMI',
        'removeSelf',
        'Event',
        'MOUSE_DOWN',
        'stopPropagation',
        'GAME',
        'LOGO',
        'showBanner',
        'hideBanner',
        'showSplash',
        'hideSplash',
        'cargamesstartup',
        'then',
        'startupByCargames',
        'addChild',
        'puzzlegamestartup',
        'startup',
        'inst',
        'Prefab',
        'Script',
        'Box',
        'Box(NoVideo)',
        'Sprite,spr_tip,spr_tip',
        'spr_tip',
        'Rect',
        '#000000',
        'Rect(NoVideo)',
        'Label',
        'middle',
        'VIDEO',
        'laya/pages/Prefab/NoVideo.prefab',
        '#ffffff',
        'center',
        'Label(NoVideo)',
        'No\x20Video\x20Available',
        'Click\x20anywhere\x20to\x20close',
        'ani1',
        'onEnable',
        'owner',
        'top',
        'left',
        'right',
        'height',
        'pos',
        'CLICK',
        'closePer',
        'closeNoVideo',
        'json',
        'noVideoPer',
        'zOrder',
        'addComponent',
        'showNoVideo',
        'Box,box_clickLayer',
        'LOADING\x5cnPLEASE\x20WAIT…',
        'loadingPer',
        'showLoading',
        'closeLoading',
        'createList',
        'img',
        'name',
        'thumb',
        'size',
        'List',
        'itemRender',
        'platform',
        '_box_adTwo0',
        '_scrollList',
        '_inst',
        'en_GAMEDISTRIBUTION',
        'setSpaceX',
        'setSize',
        'anchorX',
        'spaceXNum',
        'sizeGrid',
        '30,30,30,30',
        '',
        'leftAdMask',
        'anchorY',
        'leftAd',
        'mask',
        'rightAdBg',
        'rightAdMask',
        'rightAd',
        'centerX',
        'offAll',
        'MORE',
        'getChildByName',
        'leftAdBg',
        'sizeArr',
        '',
        'centerY',
        'imgMask',
        'hScrollBarSkin',
        'listAd',
        'scrollBar',
        'mouseWheelEnable',
        'mouseEnabled',
        'renderHandler',
        'renderADHandler',
        'concat',
        'frameLoop',
        'once',
        'refresh',
        'dataSource',
        'MOUSE_OVER',
        'MOUSE_OUT',
        'scaleX',
        'scaleY',
        'endAni',
        'clearAll',
        'loopList',
        'max',
        'visibleChangeFun',
        '757FESmVv',
        '1018bFeyof',
        '2802dhWrZN',
        '412FqBIZh',
        '3373550cREdgM',
        '1806mHIjxg',
        '13783GRtsQS',
        '157984ACcdVe',
        '252NYBsrU',
        '4858610aZlMVm',
        '11057629YcqIeq',
        '12wXRgbD',
        'beEnabled',
        'bePauseSound',
        'bePauseMusic',
        'tryToResumeIntervalId',
        'isVisibilityMuted',
        'adShowing',
        'init',
        'musicAudio',
        'soundAudio',
        'document',
        'mousedown',
        'tryToResumeAudioContext',
        'touchstart',
        'visibilitychange',
        'bind',
        'onstatechange',
        'onMusicStatechange',
        'getContext',
        'log',
        'Web\x20Audio\x20API',
        'Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser',
        'onVisibilitychange',
        'visibilityState',
        'isMuted',
        'muted',
        'timer',
        'scale',
        'stage',
        'updateTimer',
        'pause',
        'physicsTimer',
        'visible',
        'renderingEnabled',
        'resume',
        'onDBInstanceMuted',
        'isSuspend',
        'removeEventListener',
        'addEventListener',
        'onSoundStatechange',
        'suspend',
        'pauseSound',
        'pauseMusic',
        'stopAllNoLoop',
        'stopAll',
        'parse',
        'playMusic',
        'stopMusic',
        'stopSound',
        'musicVolume',
        'playSound',
        'play',
        'volume',
        '_audioInstances',
        'AudioContext',
        'webkitAudioContext',
        'context',
        'state',
        'values',
        'instance',
        'source',
        'buffer',
        'loop',
        'stop',
        'currentTime',
        'disconnect',
        'onended',
        'setup',
        '_stopSound',
        '_music',
        'has',
        'get',
        'downloadArrayBuffer',
        '_musicVolume',
        'gain',
        'value',
        'ended',
        'WebAudioEngine',
        'playBuffer',
        'error',
        'playBuffer\x20error.\x20Exception:\x20',
        'load',
        'length',
        'setThreeD',
        'threeD',
        'createSoundInstance',
        'createPanner',
        'setupPanning',
        'connect',
        'panner',
        'destination',
        'decodeAudioData',
        'Decode\x20error.',
        'url',
        'GET',
        'responseType',
        'arraybuffer',
        'onload',
        'status',
        'no\x20response',
        'onabort',
        'send',
        'canNavigateActive_',
        'action_',
        'to_'
    ];
    _0x4ee2 = function () {
        return _0x55f698;
    };
    return _0x4ee2();
}