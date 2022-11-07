(function (_0x2e26fa, _0xf7e370) {
    const _0x445541 = _0x33cc, _0x4ea9fd = _0x2e26fa();
    while (!![]) {
        try {
            const _0xe91b10 = parseInt(_0x445541(0xc1)) / 0x1 + -parseInt(_0x445541(0xc2)) / 0x2 * (parseInt(_0x445541(0xc3)) / 0x3) + parseInt(_0x445541(0xc4)) / 0x4 + parseInt(_0x445541(0xc5)) / 0x5 + -parseInt(_0x445541(0xc6)) / 0x6 * (parseInt(_0x445541(0xc7)) / 0x7) + -parseInt(_0x445541(0xc8)) / 0x8 + parseInt(_0x445541(0xc9)) / 0x9 * (parseInt(_0x445541(0xca)) / 0xa);
            if (_0xe91b10 === _0xf7e370)
                break;
            else
                _0x4ea9fd['push'](_0x4ea9fd['shift']());
        } catch (_0x1663dd) {
            _0x4ea9fd['push'](_0x4ea9fd['shift']());
        }
    }
}(_0x293a, 0x925d1), !function () {
    const _0x1ffa89 = _0x33cc;
    class _0x14d362 {
        constructor() {
            const _0x1a3097 = _0x33cc;
            this[_0x1a3097(0xcb)] = ![], this[_0x1a3097(0xcc)] = ![], this[_0x1a3097(0xcd)] = ![], this[_0x1a3097(0xce)] = ![], this[_0x1a3097(0xcf)] = -0x1, this[_0x1a3097(0xd0)] = ![], this[_0x1a3097(0xd1)] = ![];
        }
        [_0x1ffa89(0xd2)]() {
            return new Promise((_0x5b72ff, _0x4d829d) => {
                const _0x4e136f = _0x33cc;
                try {
                    this[_0x4e136f(0xd3)] = new _0x11f3c4(), this[_0x4e136f(0xd4)] = new _0x11f3c4(), window[_0x4e136f(0xd5)][_0x4e136f(0xd6)]('mousedown', () => {
                        setTimeout(() => {
                            const _0x1efd82 = _0x33cc;
                            if (this[_0x1efd82(0xd1)]) {
                            } else
                                this['tryToResumeAudioContext']();
                        }, 0x64);
                    }, !![]), window[_0x4e136f(0xd5)][_0x4e136f(0xd6)](_0x4e136f(0xd7), () => {
                        setTimeout(() => {
                            const _0x6a7619 = _0x33cc;
                            if (this[_0x6a7619(0xd1)]) {
                            } else
                                this[_0x6a7619(0xd8)]();
                        }, 0x64);
                    }, !![]), window[_0x4e136f(0xd5)][_0x4e136f(0xd6)](_0x4e136f(0xd9), this[_0x4e136f(0xda)]['bind'](this)), this[_0x4e136f(0xd3)][_0x4e136f(0xdb)]()[_0x4e136f(0xdc)] = this[_0x4e136f(0xdd)][_0x4e136f(0xde)](this), this['soundAudio']['getContext']()[_0x4e136f(0xdc)] = this[_0x4e136f(0xdf)][_0x4e136f(0xde)](this), this['beEnabled'] = !![], this['musicVolume'] = 0x3c, this[_0x4e136f(0xe0)] = ![], this[_0x4e136f(0xd8)](), _0x5b72ff(!![]);
                } catch (_0x456252) {
                    console[_0x4e136f(0xe1)](_0x4e136f(0xe2), _0x456252), alert('Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser'), _0x5b72ff(![]);
                }
            });
        }
        [_0x1ffa89(0xda)]() {
            const _0x4d0577 = _0x1ffa89;
            if (this[_0x4d0577(0xd1)])
                return;
            if (document[_0x4d0577(0xe3)] == _0x4d0577(0xe4))
                !this['isMuted'] && (this[_0x4d0577(0xd0)] = this[_0x4d0577(0xe5)] = !![]), Laya[_0x4d0577(0xe6)][_0x4d0577(0xe7)] = 0x0, Laya[_0x4d0577(0xe8)]['renderingEnabled'] = ![], Laya[_0x4d0577(0xe9)] && Laya[_0x4d0577(0xe9)][_0x4d0577(0xea)](), Laya[_0x4d0577(0xeb)] && Laya['physicsTimer'][_0x4d0577(0xea)]();
            else
                document[_0x4d0577(0xe3)] == _0x4d0577(0xec) && (this[_0x4d0577(0xd0)] && (this[_0x4d0577(0xd0)] = this[_0x4d0577(0xe5)] = ![]), Laya[_0x4d0577(0xe6)][_0x4d0577(0xe7)] = 0x1, Laya['stage']['renderingEnabled'] = !![], Laya['updateTimer'] && Laya[_0x4d0577(0xe9)]['resume'](), Laya['physicsTimer'] && Laya[_0x4d0577(0xeb)]['resume']());
        }
        [_0x1ffa89(0xed)]() {
        }
        ['tryToResumeAudioContext']() {
            const _0x56cddb = _0x1ffa89;
            if (this[_0x56cddb(0xd1)])
                return;
            if (this[_0x56cddb(0xcc)])
                return;
            this['musicAudio'][_0x56cddb(0xee)]() && !this[_0x56cddb(0xce)] && !this[_0x56cddb(0xcc)] && this[_0x56cddb(0xd3)]['resume'](), this[_0x56cddb(0xd4)][_0x56cddb(0xee)]() && !this[_0x56cddb(0xcd)] && !this[_0x56cddb(0xcc)] && this['soundAudio'][_0x56cddb(0xef)](), (!this[_0x56cddb(0xd3)]['isSuspend']() || !this[_0x56cddb(0xd4)]['isSuspend']()) && (window[_0x56cddb(0xd5)][_0x56cddb(0xf0)]('mousedown', this[_0x56cddb(0xd8)][_0x56cddb(0xde)](this), !![]), window[_0x56cddb(0xd5)][_0x56cddb(0xf0)](_0x56cddb(0xd7), this[_0x56cddb(0xd8)][_0x56cddb(0xde)](this), !![]), clearInterval(this[_0x56cddb(0xcf)]), this[_0x56cddb(0xcf)] = -0x1);
        }
        ['onMusicStatechange']() {
            const _0x5093f8 = _0x1ffa89;
            this[_0x5093f8(0xd3)][_0x5093f8(0xee)]() && !this[_0x5093f8(0xcc)] && !this[_0x5093f8(0xce)] && this[_0x5093f8(0xcf)] === -0x1 && (window[_0x5093f8(0xd5)]['addEventListener']('mousedown', this[_0x5093f8(0xd8)][_0x5093f8(0xde)](this), !![]), window[_0x5093f8(0xd5)]['addEventListener'](_0x5093f8(0xd7), this[_0x5093f8(0xd8)]['bind'](this), !![]), this[_0x5093f8(0xcf)] = setInterval(this[_0x5093f8(0xd8)][_0x5093f8(0xde)](this), 0xc8));
        }
        ['onSoundStatechange']() {
            const _0x4e6fca = _0x1ffa89;
            this[_0x4e6fca(0xd4)][_0x4e6fca(0xee)]() && !this[_0x4e6fca(0xcc)] && !this[_0x4e6fca(0xcd)] && this[_0x4e6fca(0xcf)] === -0x1 && (window[_0x4e6fca(0xd5)][_0x4e6fca(0xd6)](_0x4e6fca(0xf1), this[_0x4e6fca(0xd8)][_0x4e6fca(0xde)](this), !![]), window[_0x4e6fca(0xd5)]['addEventListener'](_0x4e6fca(0xd7), this[_0x4e6fca(0xd8)]['bind'](this), !![]), this[_0x4e6fca(0xcf)] = setInterval(this[_0x4e6fca(0xd8)][_0x4e6fca(0xde)](this), 0xc8));
        }
        set [_0x1ffa89(0xe5)](_0x3b6a20) {
            const _0xe07178 = _0x1ffa89;
            this[_0xe07178(0xcc)] = _0x3b6a20, this[_0xe07178(0xcc)] ? (this[_0xe07178(0xd3)]['suspend'](), this[_0xe07178(0xd4)][_0xe07178(0xf2)]()) : this[_0xe07178(0xcf)] == -0x1 && (this[_0xe07178(0xcf)] = setInterval(this[_0xe07178(0xd8)][_0xe07178(0xde)](this), 0xc8));
        }
        get ['muted']() {
            const _0x5d3383 = _0x1ffa89;
            return this[_0x5d3383(0xcc)];
        }
        set ['pause'](_0x1d1a3a) {
            const _0x36ce3c = _0x1ffa89;
            this[_0x36ce3c(0xf3)] = _0x1d1a3a, this[_0x36ce3c(0xf4)] = _0x1d1a3a, !_0x1d1a3a && this[_0x36ce3c(0xd4)]['stopAllNoLoop']();
        }
        get ['pause']() {
            const _0x414da9 = _0x1ffa89;
            return this['pauseSound'] || this[_0x414da9(0xf4)];
        }
        set [_0x1ffa89(0xf3)](_0x2b6bf0) {
            const _0x4919d6 = _0x1ffa89;
            this[_0x4919d6(0xcd)] = _0x2b6bf0;
            if (this['bePauseSound'])
                this[_0x4919d6(0xd4)][_0x4919d6(0xf2)]();
            else {
                if (this[_0x4919d6(0xcc)])
                    return;
                this[_0x4919d6(0xd4)][_0x4919d6(0xef)]();
            }
        }
        get [_0x1ffa89(0xf3)]() {
            return this['bePauseSound'];
        }
        get [_0x1ffa89(0xf4)]() {
            const _0x2df9ae = _0x1ffa89;
            return this[_0x2df9ae(0xce)];
        }
        set [_0x1ffa89(0xf4)](_0x58785c) {
            const _0x326e4e = _0x1ffa89;
            this[_0x326e4e(0xce)] = _0x58785c;
            if (this['bePauseMusic'])
                this[_0x326e4e(0xd3)]['suspend']();
            else {
                if (this[_0x326e4e(0xcc)])
                    return;
                this[_0x326e4e(0xd3)][_0x326e4e(0xef)]();
            }
        }
        ['stopAll']() {
            const _0x3f3fda = _0x1ffa89;
            this['musicAudio'][_0x3f3fda(0xf5)](), this[_0x3f3fda(0xd4)][_0x3f3fda(0xf5)]();
        }
        ['parse'](_0x77054e, _0x4353b8, _0x352a78) {
            const _0x336669 = _0x1ffa89;
            this[_0x336669(0xd4)][_0x336669(0xf6)](_0x77054e, _0x4353b8);
        }
        [_0x1ffa89(0xf7)](_0x50d0f8) {
            const _0x43f363 = _0x1ffa89;
            this['musicAudio'][_0x43f363(0xf5)](), this[_0x43f363(0xd3)][_0x43f363(0xf7)](_0x50d0f8);
        }
        [_0x1ffa89(0xf8)]() {
            const _0x51ab35 = _0x1ffa89;
            this[_0x51ab35(0xd3)]['stopAll']();
        }
        ['stopSound'](_0x1f017e) {
            const _0xf8903 = _0x1ffa89;
            this['soundAudio'][_0xf8903(0xf9)](_0x1f017e);
        }
        set [_0x1ffa89(0xfa)](_0x299d31) {
            const _0x43b6ef = _0x1ffa89;
            this[_0x43b6ef(0xd3)][_0x43b6ef(0xfa)] = _0x299d31;
        }
        get [_0x1ffa89(0xfa)]() {
            const _0x46ad30 = _0x1ffa89;
            return this[_0x46ad30(0xd3)]['musicVolume'];
        }
        ['playSound'](_0x4ea442, _0x51fe05 = ![], _0x4b154a = ![]) {
            const _0x3585f8 = _0x1ffa89;
            if (!this['beEnabled'])
                return;
            this['soundAudio'][_0x3585f8(0xfb)](_0x4ea442, _0x51fe05, _0x4b154a);
        }
    }
    class _0x598dd1 {
    }
    class _0x11f3c4 {
        constructor() {
            const _0x24410b = _0x1ffa89;
            this[_0x24410b(0xfc)] = 0x64, this['_audioInstances'] = new Map(), this[_0x24410b(0xfd)] = 0x64, window[_0x24410b(0xfe)] = window[_0x24410b(0xfe)] || window['webkitAudioContext'], this[_0x24410b(0xff)] = new AudioContext();
        }
        [_0x1ffa89(0xdb)]() {
            return this['context'];
        }
        [_0x1ffa89(0xee)]() {
            const _0x585dd6 = _0x1ffa89;
            return this[_0x585dd6(0xff)][_0x585dd6(0x100)] === _0x585dd6(0x101);
        }
        [_0x1ffa89(0xf2)]() {
            const _0x1a62e8 = _0x1ffa89;
            return this[_0x1a62e8(0xff)]['suspend']();
        }
        ['resume']() {
            const _0x45bbc4 = _0x1ffa89;
            return this[_0x45bbc4(0xff)][_0x45bbc4(0xef)]();
        }
        [_0x1ffa89(0x102)]() {
            const _0x1804eb = _0x1ffa89, _0x3a7535 = this['_audioInstances'][_0x1804eb(0x103)]();
            for (const _0xa2656e of _0x3a7535) {
                const _0x127485 = _0xa2656e['instance'];
                if (_0x127485[_0x1804eb(0x104)][_0x1804eb(0x105)] && !_0x127485[_0x1804eb(0x104)][_0x1804eb(0x106)]) {
                    try {
                        _0x127485[_0x1804eb(0x104)][_0x1804eb(0xf9)](this[_0x1804eb(0xff)][_0x1804eb(0x107)]);
                    } catch (_0xf82579) {
                        _0x127485['source'][_0x1804eb(0x108)]();
                    }
                    _0x127485[_0x1804eb(0x104)][_0x1804eb(0x109)] = function () {
                    }, _0x127485[_0x1804eb(0x10a)]();
                }
            }
        }
        ['stopAll']() {
            const _0x23c221 = _0x1ffa89, _0x28e46b = this[_0x23c221(0x10b)]['values']();
            for (const _0x22d3d2 of _0x28e46b) {
                const _0x46ad9a = _0x22d3d2[_0x23c221(0x10c)];
                if (_0x46ad9a[_0x23c221(0x104)][_0x23c221(0x105)]) {
                    try {
                        _0x46ad9a['source']['stop'](this[_0x23c221(0xff)]['currentTime']);
                    } catch (_0x19b4b8) {
                        _0x46ad9a[_0x23c221(0x104)][_0x23c221(0x108)]();
                    }
                    _0x46ad9a[_0x23c221(0x104)][_0x23c221(0x109)] = function () {
                    }, _0x46ad9a['setup']();
                }
            }
        }
        [_0x1ffa89(0xf9)](_0x33073f) {
            const _0x4192b6 = _0x1ffa89;
            if (this[_0x4192b6(0x10b)][_0x4192b6(0x10d)](_0x33073f)) {
                const _0x1d050a = this['_audioInstances']['get'](_0x33073f);
                this[_0x4192b6(0x10e)](_0x1d050a);
            }
        }
        [_0x1ffa89(0x10e)](_0x3c21b0) {
            const _0x3afb9a = _0x1ffa89, _0x9d7101 = _0x3c21b0[_0x3afb9a(0x10c)];
            if (_0x9d7101[_0x3afb9a(0x104)][_0x3afb9a(0x105)]) {
                try {
                    _0x9d7101[_0x3afb9a(0x104)][_0x3afb9a(0xf9)](this[_0x3afb9a(0xff)][_0x3afb9a(0x107)]);
                } catch (_0x5ee9db) {
                    _0x9d7101[_0x3afb9a(0x104)][_0x3afb9a(0x108)]();
                }
                _0x9d7101[_0x3afb9a(0x104)][_0x3afb9a(0x109)] = function () {
                }, _0x9d7101['setup']();
            }
        }
        [_0x1ffa89(0xf7)](_0x10c0a8) {
            const _0x7127f2 = _0x1ffa89;
            this[_0x7127f2(0x10f)] && this[_0x7127f2(0x10e)](this[_0x7127f2(0x10f)]), this[_0x7127f2(0x10b)][_0x7127f2(0x10d)](_0x10c0a8) ? (this[_0x7127f2(0x10f)] = this[_0x7127f2(0x10b)][_0x7127f2(0x110)](_0x10c0a8), this[_0x7127f2(0xfa)] = this[_0x7127f2(0xfd)], this[_0x7127f2(0xfb)](_0x10c0a8, !![])) : this[_0x7127f2(0x111)](_0x10c0a8, () => {
                const _0x2ebca0 = _0x7127f2;
                this[_0x2ebca0(0xf7)](_0x10c0a8);
            });
        }
        [_0x1ffa89(0xf8)]() {
            const _0x5737e9 = _0x1ffa89;
            this[_0x5737e9(0x10f)] && this[_0x5737e9(0x10e)](this['_music']);
        }
        set [_0x1ffa89(0xfa)](_0x43ef03) {
            const _0x377851 = _0x1ffa89;
            this[_0x377851(0xfd)] = _0x43ef03, this[_0x377851(0x10f)] && (this[_0x377851(0x10f)][_0x377851(0x10c)][_0x377851(0x112)][_0x377851(0x112)][_0x377851(0x113)] = this[_0x377851(0xfd)] / 0x64);
        }
        get [_0x1ffa89(0xfa)]() {
            const _0x37e82a = _0x1ffa89;
            return this[_0x37e82a(0xfd)];
        }
        ['play'](_0x177d41, _0x5d574c = ![], _0xb2db48 = ![]) {
            const _0xbd80d = _0x1ffa89;
            if (this[_0xbd80d(0x10b)][_0xbd80d(0x10d)](_0x177d41)) {
                const _0x3ba1d6 = this[_0xbd80d(0x10b)][_0xbd80d(0x110)](_0x177d41), _0x2f9279 = _0x3ba1d6[_0xbd80d(0x10c)];
                if (_0xb2db48 && !_0x2f9279['ended'])
                    return;
                this['stop'](_0x177d41);
                if (_0x3ba1d6[_0xbd80d(0x105)])
                    try {
                        if (window[_0xbd80d(0x114)][_0xbd80d(0xea)] && !_0x5d574c)
                            return;
                        _0x2f9279[_0xbd80d(0x115)](this[_0xbd80d(0xff)][_0xbd80d(0x107)], _0x3ba1d6['buffer']), _0x2f9279['source']['loop'] = _0x5d574c;
                    } catch (_0x54ffe2) {
                        console[_0xbd80d(0x116)]('playBuffer\x20error.\x20Exception:\x20' + _0x54ffe2);
                    }
            } else
                this[_0xbd80d(0x111)](_0x177d41, () => {
                    this['play'](_0x177d41, _0x5d574c);
                });
        }
        ['load'](_0x3e23e2, _0x34889d) {
            const _0x29d5d8 = _0x1ffa89;
            let _0xeac68b = _0x3e23e2[_0x29d5d8(0x117)], _0x2c7207 = 0x0;
            for (let _0xf27188 = 0x0; _0xf27188 < _0x3e23e2['length']; _0xf27188++) {
                const _0x32a608 = _0x3e23e2[_0xf27188];
                this[_0x29d5d8(0x111)](_0x32a608, () => {
                    _0x2c7207++, _0x2c7207 >= _0xeac68b && (_0x34889d && _0x34889d());
                });
            }
        }
        [_0x1ffa89(0x118)](_0x8517ed) {
            const _0x5882e6 = _0x1ffa89;
            if (this['_audioInstances'][_0x5882e6(0x10d)](_0x8517ed)) {
                const _0x41af7d = this[_0x5882e6(0x10b)]['get'](_0x8517ed);
                _0x41af7d['instance'][_0x5882e6(0x119)] = !![];
            }
        }
        [_0x1ffa89(0x11a)]() {
            const _0x275151 = _0x1ffa89;
            let _0x1449c0 = this[_0x275151(0xff)];
            const _0x1c9911 = {
                'gain': _0x1449c0[_0x275151(0x11b)](),
                'panner': _0x1449c0[_0x275151(0x11c)](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x890fc2, _0x13bfa0, _0x439dee) {
                    const _0x17315e = _0x275151;
                    this[_0x17315e(0x104)]['buffer'] = _0x13bfa0;
                    var _0x2ef4b9 = this;
                    this['ended'] = ![], this['source']['onended'] = function () {
                        const _0xbe8a04 = _0x17315e;
                        _0x2ef4b9['setup'](), _0x2ef4b9[_0xbe8a04(0x11d)] = !![];
                    }, this[_0x17315e(0x104)][_0x17315e(0x11e)](_0x890fc2, _0x439dee);
                },
                'setup': function () {
                    const _0x1720c4 = _0x275151;
                    this[_0x1720c4(0x104)] = _0x1449c0[_0x1720c4(0x11f)](), this[_0x1720c4(0x120)]();
                },
                'setupPanning': function () {
                    const _0x230ebe = _0x275151;
                    this[_0x230ebe(0x119)] ? (this['source'][_0x230ebe(0x108)](), this[_0x230ebe(0x104)][_0x230ebe(0x121)](this[_0x230ebe(0x122)]), this[_0x230ebe(0x122)][_0x230ebe(0x121)](this[_0x230ebe(0x112)])) : (this[_0x230ebe(0x122)][_0x230ebe(0x108)](), this[_0x230ebe(0x104)][_0x230ebe(0x121)](this[_0x230ebe(0x112)]));
                }
            };
            return _0x1c9911[_0x275151(0x122)][_0x275151(0x123)] = 0x0, _0x1c9911[_0x275151(0x112)]['connect'](this['context']['destination']), _0x1c9911[_0x275151(0x10a)](), _0x1c9911;
        }
        ['parse'](_0xd23abb, _0x1cac18, _0x4352bb) {
            const _0xdb13a2 = _0x1ffa89, _0x39e3e2 = new _0x598dd1();
            _0x39e3e2[_0xdb13a2(0x124)] = _0xd23abb, _0x39e3e2['instance'] = this[_0xdb13a2(0x11a)](), this['_audioInstances'][_0xdb13a2(0x125)](_0xd23abb, _0x39e3e2), this[_0xdb13a2(0xff)][_0xdb13a2(0x126)](_0x1cac18, function (_0x1ce14b) {
                const _0x4752a9 = _0xdb13a2;
                _0x39e3e2[_0x4752a9(0x105)] = _0x1ce14b, _0x4352bb && _0x4352bb();
            }, function (_0x28a2be) {
                const _0x419a97 = _0xdb13a2;
                _0x39e3e2['error'] = !![], _0x4352bb && _0x4352bb(), console['log'](_0x419a97(0x127) + _0x39e3e2['url']);
            });
        }
        [_0x1ffa89(0x111)](_0x154bb9, _0x56646d) {
            const _0x2d1fdf = _0x1ffa89;
            if (this[_0x2d1fdf(0x10b)][_0x2d1fdf(0x10d)](_0x154bb9)) {
                _0x56646d && _0x56646d();
                return;
            }
            const _0x27f74d = this;
            var _0x4fecaf = new XMLHttpRequest();
            _0x4fecaf[_0x2d1fdf(0x128)](_0x2d1fdf(0x129), _0x154bb9, !![]), _0x4fecaf[_0x2d1fdf(0x12a)] = _0x2d1fdf(0x12b), _0x4fecaf['onload'] = function () {
                const _0x3d0828 = _0x2d1fdf;
                if (_0x4fecaf[_0x3d0828(0x12c)] === 0xc8 || _0x4fecaf[_0x3d0828(0x12c)] === 0x0)
                    _0x27f74d[_0x3d0828(0xf6)](_0x154bb9, _0x4fecaf[_0x3d0828(0x12d)], _0x56646d);
                else
                    throw 'no\x20response';
            }, _0x4fecaf[_0x2d1fdf(0x12e)] = function () {
                const _0x1a2364 = _0x2d1fdf;
                _0x56646d && _0x56646d();
                throw _0x1a2364(0x12f);
            }, _0x4fecaf[_0x2d1fdf(0x130)] = function () {
                _0x56646d && _0x56646d();
            }, _0x4fecaf[_0x2d1fdf(0x131)] = function () {
                _0x56646d && _0x56646d();
            }, _0x4fecaf['send'](null);
        }
    }
    const _0x2dabf2 = window[_0x1ffa89(0x114)] = new _0x14d362();
    class _0x57319c {
        constructor() {
            const _0x3e50c2 = _0x1ffa89;
            this[_0x3e50c2(0x132)] = ![], this[_0x3e50c2(0x133)] = '', this[_0x3e50c2(0x134)] = '', this[_0x3e50c2(0x135)] = '', this[_0x3e50c2(0x136)] = null, this[_0x3e50c2(0x137)] = ![], this[_0x3e50c2(0x138)] = !![], this[_0x3e50c2(0x139)]();
        }
        static [_0x1ffa89(0x13a)]() {
            const _0x3fe7f0 = _0x1ffa89;
            return !this[_0x3fe7f0(0x13b)] && (this[_0x3fe7f0(0x13b)] = new _0x57319c()), this['_instance'];
        }
        [_0x1ffa89(0x139)]() {
            const _0x15c757 = _0x1ffa89;
            let _0x11ce69 = document['getElementById'](_0x15c757(0x13c));
            _0x11ce69 && (_0x11ce69[_0x15c757(0xd6)](_0x15c757(0x13d), this['onNavigate_'][_0x15c757(0xde)](this)), _0x11ce69[_0x15c757(0xd6)](_0x15c757(0x13e), this[_0x15c757(0x13f)][_0x15c757(0xde)](this)));
        }
        [_0x1ffa89(0x13f)]() {
            const _0x5015c5 = _0x1ffa89;
            this[_0x5015c5(0x132)] && YYGGames[_0x5015c5(0x140)](this['screen_'], this[_0x5015c5(0x134)], this[_0x5015c5(0x135)]), this[_0x5015c5(0x132)] = ![];
        }
        [_0x1ffa89(0x141)](_0x4e6196) {
            const _0x5bd033 = _0x1ffa89;
            let _0x212323 = null;
            try {
                let _0x3d0795 = Laya[_0x5bd033(0x142)][_0x5bd033(0x143)](_0x4e6196);
                _0x212323 = JSON['parse'](_0x3d0795);
            } catch (_0x2364db) {
            }
            return _0x212323;
        }
        [_0x1ffa89(0x144)](_0x5b40c0, _0xf0114) {
            const _0x308bc9 = _0x1ffa89;
            return Laya['LocalStorage'][_0x308bc9(0x145)](_0x5b40c0, JSON[_0x308bc9(0x146)](_0xf0114));
        }
        [_0x1ffa89(0x140)](_0x3c5b5e, _0x323fd9, _0x4d888d) {
            const _0x14dc5d = _0x1ffa89;
            this[_0x14dc5d(0x132)] === ![] && (this['screen_'] = _0x3c5b5e, this['action_'] = _0x323fd9, this[_0x14dc5d(0x135)] = _0x4d888d, this['canNavigateActive_'] = !![]);
        }
        [_0x1ffa89(0x147)]() {
            setTimeout(() => {
                _0x2dabf2['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                _0x2dabf2['muted'] = ![];
            }, 0x64);
        }
        ['showInterstitial'](_0x433702) {
            const _0x3e8d6a = _0x1ffa89;
            YYGGames[_0x3e8d6a(0x148)]({
                'beforeShowAd': () => {
                    const _0x4e9d5a = _0x3e8d6a;
                    window['WebAudioEngine']['adShowing'] = !![], this[_0x4e9d5a(0x147)](), Laya[_0x4e9d5a(0xe6)][_0x4e9d5a(0xe7)] = 0x0, Laya['stage'][_0x4e9d5a(0x149)] = ![], Laya[_0x4e9d5a(0xe9)] && Laya[_0x4e9d5a(0xe9)][_0x4e9d5a(0xea)](), Laya[_0x4e9d5a(0xeb)] && Laya['physicsTimer']['pause']();
                },
                'afterShowAd': () => {
                    const _0x3c13f1 = _0x3e8d6a;
                    window[_0x3c13f1(0x14a)](), this[_0x3c13f1(0x14b)](), window['WebAudioEngine'][_0x3c13f1(0xd1)] = ![], Laya[_0x3c13f1(0xe6)][_0x3c13f1(0xe7)] = 0x1, Laya[_0x3c13f1(0xe8)]['renderingEnabled'] = !![], Laya[_0x3c13f1(0xe9)] && Laya[_0x3c13f1(0xe9)][_0x3c13f1(0xef)](), Laya[_0x3c13f1(0xeb)] && Laya[_0x3c13f1(0xeb)][_0x3c13f1(0xef)](), _0x433702 && _0x433702();
                }
            });
        }
        [_0x1ffa89(0x14c)](_0x59aaf0, _0x5d39fe, _0x4d5524) {
            const _0x4e7c31 = _0x1ffa89;
            if (!YYGGames['canShowReward']()) {
                this['prompt'](_0x4e7c31(0x14d)), _0x4d5524 && _0x4d5524();
                return;
            }
            YYGGames[_0x4e7c31(0x14c)]({
                'beforeShowAd': () => {
                    const _0x2a223c = _0x4e7c31;
                    window['WebAudioEngine']['adShowing'] = !![], this['onblur'](), Laya[_0x2a223c(0xe6)][_0x2a223c(0xe7)] = 0x0, Laya[_0x2a223c(0xe8)][_0x2a223c(0x149)] = ![], Laya[_0x2a223c(0xe9)] && Laya['updateTimer']['pause'](), Laya[_0x2a223c(0xeb)] && Laya[_0x2a223c(0xeb)]['pause']();
                },
                'afterShowAd': () => {
                    const _0xd9a6ae = _0x4e7c31;
                    window[_0xd9a6ae(0x14a)](), this[_0xd9a6ae(0x14b)](), window[_0xd9a6ae(0x114)][_0xd9a6ae(0xd1)] = ![], Laya[_0xd9a6ae(0xe6)][_0xd9a6ae(0xe7)] = 0x1, Laya[_0xd9a6ae(0xe8)][_0xd9a6ae(0x149)] = !![], Laya[_0xd9a6ae(0xe9)] && Laya[_0xd9a6ae(0xe9)][_0xd9a6ae(0xef)](), Laya[_0xd9a6ae(0xeb)] && Laya['physicsTimer']['resume']();
                },
                'rewardComplete': () => {
                    _0x59aaf0 && _0x59aaf0(), _0x4d5524 && _0x4d5524(), _0x4d5524 = null, _0x59aaf0 = null;
                },
                'rewardDismissed': () => {
                    const _0x543cb4 = _0x4e7c31;
                    _0x5d39fe && (_0x5d39fe(), _0x4d5524 && _0x4d5524(), _0x4d5524 = null, _0x5d39fe = null), this[_0x543cb4(0x14e)](_0x543cb4(0x14f));
                }
            });
        }
        [_0x1ffa89(0x150)](_0x423d20) {
        }
        [_0x1ffa89(0x14e)](_0x4efdd7, _0x33918b) {
            const _0x1e5c21 = _0x1ffa89;
            !this[_0x1e5c21(0x136)] && (this[_0x1e5c21(0x136)] = document[_0x1e5c21(0x151)]('div'), this[_0x1e5c21(0x136)]['style'][_0x1e5c21(0x152)] = _0x1e5c21(0x153), document[_0x1e5c21(0x154)][_0x1e5c21(0x155)](this[_0x1e5c21(0x136)]));
            const _0x58eda6 = Laya[_0x1e5c21(0xe8)]['designWidth'], _0x23fd1a = Laya[_0x1e5c21(0xe8)][_0x1e5c21(0x156)];
            var _0x3d2dfd = window['innerWidth'], _0x1db33b = window[_0x1e5c21(0x157)], _0x51a31c, _0x2bbcf4;
            _0x3d2dfd / _0x1db33b > _0x58eda6 / _0x23fd1a ? (_0x51a31c = _0x1db33b, _0x2bbcf4 = _0x51a31c * _0x58eda6 / _0x23fd1a) : (_0x2bbcf4 = _0x3d2dfd, _0x51a31c = _0x2bbcf4 * _0x23fd1a / _0x58eda6), this['prompt_'][_0x1e5c21(0x158)]['width'] = _0x2bbcf4 - 0x32 + 'px', this[_0x1e5c21(0x136)][_0x1e5c21(0x159)] = _0x4efdd7, _0x33918b = isNaN(_0x33918b) ? 0x7d0 : _0x33918b, this[_0x1e5c21(0x136)][_0x1e5c21(0x158)][_0x1e5c21(0x15a)] = _0x1e5c21(0x15b), this['prompt_'][_0x1e5c21(0x158)]['opacity'] = '1', setTimeout(function () {
                const _0x1bac2f = _0x1e5c21;
                var _0x466674 = 0.5;
                this[_0x1bac2f(0x136)][_0x1bac2f(0x158)][_0x1bac2f(0x15c)] = '-webkit-transform\x20' + _0x466674 + _0x1bac2f(0x15d) + _0x466674 + _0x1bac2f(0x15e), this['prompt_'][_0x1bac2f(0x158)]['opacity'] = '0', this[_0x1bac2f(0x136)]['style'][_0x1bac2f(0x15a)] = _0x1bac2f(0x15f);
            }['bind'](this), _0x33918b);
        }
        [_0x1ffa89(0x160)](_0x329808, _0x5daa27 = 0x7d0) {
            const _0x15aa14 = _0x1ffa89;
            if (!Laya)
                return;
            !this[_0x15aa14(0x161)] && (this[_0x15aa14(0x161)] = new Laya['Label'](), this[_0x15aa14(0x161)]['align'] = 'center', this['labelInfo'][_0x15aa14(0x162)] = 'middle', this[_0x15aa14(0x161)]['bgColor'] = _0x15aa14(0x163), this[_0x15aa14(0x161)]['color'] = _0x15aa14(0x164), this[_0x15aa14(0x161)][_0x15aa14(0x165)] = 0x1e, this['labelInfo'][_0x15aa14(0x166)] = 0x0, this[_0x15aa14(0x161)][_0x15aa14(0x167)] = -0x32, this[_0x15aa14(0x161)][_0x15aa14(0x168)] = 0x174876e800), this[_0x15aa14(0x161)][_0x15aa14(0x169)] = null, this[_0x15aa14(0x161)][_0x15aa14(0x16a)] = null, this[_0x15aa14(0x161)][_0x15aa14(0x16b)] = ![], this[_0x15aa14(0x161)][_0x15aa14(0xec)] = ![], this[_0x15aa14(0x161)]['text'] = _0x329808, this[_0x15aa14(0x161)][_0x15aa14(0x16a)] += 0x28, this['labelInfo'][_0x15aa14(0x169)] > Laya[_0x15aa14(0xe8)][_0x15aa14(0x169)] - 0x64 && (this[_0x15aa14(0x161)][_0x15aa14(0x169)] = Laya[_0x15aa14(0xe8)]['width'] - 0x64, this[_0x15aa14(0x161)][_0x15aa14(0x16b)] = !![]), this[_0x15aa14(0x161)][_0x15aa14(0xec)] = !![], Laya[_0x15aa14(0xe8)]['addChild'](this[_0x15aa14(0x161)]), Laya[_0x15aa14(0xe6)][_0x15aa14(0x16c)](this, this[_0x15aa14(0x16d)]), Laya['timer'][_0x15aa14(0x16e)](_0x5daa27, this, this[_0x15aa14(0x16d)]);
        }
        ['clearLabel']() {
            const _0x39f3f8 = _0x1ffa89;
            this[_0x39f3f8(0x161)][_0x39f3f8(0xec)] = ![];
        }
        ['getForgames']() {
            const _0x475a72 = _0x1ffa89;
            let _0x37407b = YYGGames[_0x475a72(0x16f)] || [], _0x924aea = _0x37407b[_0x475a72(0x170)]();
            for (let _0x61c68f = 0x0, _0x528f8d = _0x924aea['length']; _0x61c68f < _0x528f8d; _0x61c68f++) {
                const _0x3301f1 = Math[_0x475a72(0x171)](Math[_0x475a72(0x172)]() * (_0x61c68f + 0x1)), _0x5a3435 = _0x924aea[_0x3301f1];
                _0x924aea[_0x3301f1] = _0x924aea[_0x61c68f], _0x924aea[_0x61c68f] = _0x5a3435;
            }
            return _0x924aea;
        }
        [_0x1ffa89(0x173)]() {
            const _0x2de51b = _0x1ffa89;
            if (!Laya || !Laya[_0x2de51b(0x174)])
                return null;
            if (!window['yad']) {
                const _0x3c67f7 = new Laya[(_0x2de51b(0x174))]();
                _0x3c67f7[_0x2de51b(0x175)] = _0x2de51b(0x176), _0x3c67f7[_0x2de51b(0x168)] = 0x30d40, window[_0x2de51b(0x177)] = _0x3c67f7;
            }
            return window[_0x2de51b(0x177)];
        }
        [_0x1ffa89(0x178)](_0x5162e6, _0x41ae05) {
            const _0x4e9cf5 = _0x1ffa89;
            !this[_0x4e9cf5(0x138)] && (_0x41ae05 && _0x41ae05());
            if (this['initialized_'])
                return;
            _0x57319c[_0x4e9cf5(0x13a)]()[_0x4e9cf5(0x179)](), _0x57319c['getInstance']()[_0x4e9cf5(0x173)](), this[_0x4e9cf5(0x17a)](), this[_0x4e9cf5(0x17b)](), window['WebAudioEngine'][_0x4e9cf5(0xd2)]()[_0x4e9cf5(0x17c)](() => {
                const _0x534c17 = _0x4e9cf5;
                Laya['SoundManager'][_0x534c17(0xf7)] = function (_0x418be8) {
                    const _0x47e0a8 = _0x534c17;
                    window[_0x47e0a8(0x114)] && window[_0x47e0a8(0x114)]['playMusic'](_0x418be8);
                }, Laya['SoundManager'][_0x534c17(0x17d)] = function (_0x68e3af, _0x5b983c = ![]) {
                    const _0x492a4e = _0x534c17;
                    window[_0x492a4e(0x114)] && window[_0x492a4e(0x114)][_0x492a4e(0x17d)](_0x68e3af);
                }, Laya[_0x534c17(0x17e)]['stopMusic'] = function () {
                    const _0x17a133 = _0x534c17;
                    window[_0x17a133(0x114)] && window[_0x17a133(0x114)][_0x17a133(0xf8)]();
                }, Laya[_0x534c17(0x17e)][_0x534c17(0x17f)] = function (_0x17dfbb) {
                    const _0x5cf805 = _0x534c17;
                    window[_0x5cf805(0x114)] && window[_0x5cf805(0x114)][_0x5cf805(0x17f)](_0x17dfbb);
                };
            }), this[_0x4e9cf5(0x137)] = !![], Laya[_0x4e9cf5(0x180)][_0x4e9cf5(0x181)](_0x4e9cf5(0x182), Laya[_0x4e9cf5(0x183)][_0x4e9cf5(0x184)](this, _0x3166bb => {
                const _0x351f8c = _0x4e9cf5;
                YYGGames[_0x351f8c(0x185)]({
                    'appName': _0x5162e6,
                    'config': _0x3166bb,
                    'complete': () => {
                        const _0x3c4874 = _0x351f8c, _0x3bdbaa = YYGGames[_0x3c4874(0x186)]();
                        window[_0x3c4874(0x187)] = this['scrollList'](), window['box_adTwo'] = this[_0x3c4874(0x188)]();
                        switch (_0x3bdbaa) {
                        case AdPlatformType[_0x3c4874(0x189)]:
                        case AdPlatformType[_0x3c4874(0x18a)]:
                            window['yad'] && (window[_0x3c4874(0x177)][_0x3c4874(0xe7)](0x0, 0x0), window[_0x3c4874(0x177)][_0x3c4874(0x18b)]());
                            break;
                        default:
                            window[_0x3c4874(0x177)] && Laya[_0x3c4874(0xe8)][_0x3c4874(0x18c)](window['yad']), window[_0x3c4874(0x177)]['on'](Laya[_0x3c4874(0x18d)][_0x3c4874(0x18e)], window[_0x3c4874(0x177)], _0x26b01b => {
                                const _0x567bfc = _0x3c4874;
                                _0x26b01b[_0x567bfc(0x18f)](), _0x57319c[_0x567bfc(0x13a)]()[_0x567bfc(0x140)](_0x567bfc(0x190), _0x567bfc(0x191));
                            });
                            break;
                        }
                        this[_0x3c4874(0x138)] = ![], _0x41ae05 && _0x41ae05();
                    }
                });
            }));
        }
        [_0x1ffa89(0x192)](_0x4573c5) {
            const _0x201c42 = _0x1ffa89;
            _0x4573c5 ? YYGGames[_0x201c42(0x192)](_0x4573c5) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            const _0x294ad2 = _0x1ffa89;
            YYGGames[_0x294ad2(0x193)]();
        }
        [_0x1ffa89(0x179)](_0x3c7e19) {
            const _0x5f88f9 = _0x1ffa89;
            _0x3c7e19 ? YYGGames[_0x5f88f9(0x179)](_0x3c7e19) : YYGGames[_0x5f88f9(0x179)]();
        }
        [_0x1ffa89(0x194)]() {
            const _0x1b0f6a = _0x1ffa89;
            YYGGames[_0x1b0f6a(0x194)]();
        }
        [_0x1ffa89(0x195)](_0x220597, _0x28e2ce) {
            const _0x19064a = _0x1ffa89;
            !this['needStartUp'] && (_0x28e2ce && _0x28e2ce());
            if (this[_0x19064a(0x137)])
                return;
            _0x57319c[_0x19064a(0x13a)]()[_0x19064a(0x179)](), _0x57319c[_0x19064a(0x13a)]()[_0x19064a(0x173)](), this[_0x19064a(0x17a)](), this[_0x19064a(0x17b)](), window[_0x19064a(0x114)]['init']()[_0x19064a(0x17c)](() => {
                const _0x35640b = _0x19064a;
                Laya[_0x35640b(0x17e)][_0x35640b(0xf7)] = function (_0x364c5d) {
                    const _0x19a41f = _0x35640b;
                    window[_0x19a41f(0x114)] && window[_0x19a41f(0x114)]['playMusic'](_0x364c5d);
                }, Laya[_0x35640b(0x17e)][_0x35640b(0x17d)] = function (_0x5a39f4, _0x3c39d2 = ![]) {
                    const _0x355610 = _0x35640b;
                    window['WebAudioEngine'] && window[_0x355610(0x114)]['playSound'](_0x5a39f4);
                }, Laya['SoundManager'][_0x35640b(0xf8)] = function () {
                    const _0x215789 = _0x35640b;
                    window[_0x215789(0x114)] && window[_0x215789(0x114)][_0x215789(0xf8)]();
                }, Laya[_0x35640b(0x17e)][_0x35640b(0x17f)] = function (_0x93abb8) {
                    const _0x3d4387 = _0x35640b;
                    window[_0x3d4387(0x114)] && window[_0x3d4387(0x114)][_0x3d4387(0x17f)](_0x93abb8);
                };
            }), this['initialized_'] = !![], Laya['loader'][_0x19064a(0x181)]('cnf.json', Laya['Handler'][_0x19064a(0x184)](this, _0x21316a => {
                const _0x859b19 = _0x19064a;
                YYGGames[_0x859b19(0x196)]({
                    'appName': _0x220597,
                    'config': _0x21316a,
                    'complete': () => {
                        const _0x3b8352 = _0x859b19, _0x24abbf = YYGGames['getAdPlatformType']();
                        window[_0x3b8352(0x187)] = this[_0x3b8352(0x187)](), window['box_adTwo'] = this[_0x3b8352(0x188)]();
                        switch (_0x24abbf) {
                        case AdPlatformType[_0x3b8352(0x189)]:
                        case AdPlatformType[_0x3b8352(0x18a)]:
                            window['yad'] && (window[_0x3b8352(0x177)][_0x3b8352(0xe7)](0x0, 0x0), window['yad'][_0x3b8352(0x18b)]());
                            break;
                        default:
                            window[_0x3b8352(0x177)] && Laya['stage'][_0x3b8352(0x18c)](window[_0x3b8352(0x177)]), window[_0x3b8352(0x177)]['on'](Laya[_0x3b8352(0x18d)][_0x3b8352(0x18e)], window[_0x3b8352(0x177)], _0x3cba09 => {
                                const _0xe480a3 = _0x3b8352;
                                _0x3cba09['stopPropagation'](), _0x57319c[_0xe480a3(0x13a)]()[_0xe480a3(0x140)](_0xe480a3(0x190), 'LOGO');
                            });
                            break;
                        }
                        this[_0x3b8352(0x138)] = ![], _0x28e2ce && _0x28e2ce();
                    }
                });
            }));
        }
        ['puzzlegamestartup'](_0x5e252d, _0x2c699b) {
            const _0x5e253c = _0x1ffa89;
            !this['needStartUp'] && (_0x2c699b && _0x2c699b());
            if (this['initialized_'])
                return;
            _0x57319c[_0x5e253c(0x13a)]()['showSplash'](), _0x57319c[_0x5e253c(0x13a)]()[_0x5e253c(0x173)](), this[_0x5e253c(0x17a)](), this['createLoading'](), window['WebAudioEngine'][_0x5e253c(0xd2)]()[_0x5e253c(0x17c)](() => {
                const _0x161afc = _0x5e253c;
                Laya[_0x161afc(0x17e)][_0x161afc(0xf7)] = function (_0x157937) {
                    const _0x6cb71f = _0x161afc;
                    window['WebAudioEngine'] && window['WebAudioEngine'][_0x6cb71f(0xf7)](_0x157937);
                }, Laya[_0x161afc(0x17e)][_0x161afc(0x17d)] = function (_0x4d07de) {
                    const _0x2e36f8 = _0x161afc;
                    window[_0x2e36f8(0x114)] && window['WebAudioEngine'][_0x2e36f8(0x17d)](_0x4d07de);
                }, Laya[_0x161afc(0x17e)][_0x161afc(0xf8)] = function (_0x4ea171) {
                    const _0x4a899b = _0x161afc;
                    window[_0x4a899b(0x114)] && window['WebAudioEngine'][_0x4a899b(0xf8)]();
                };
            }), this[_0x5e253c(0x137)] = !![], Laya[_0x5e253c(0x180)][_0x5e253c(0x181)](_0x5e253c(0x182), Laya[_0x5e253c(0x183)]['create'](this, _0x5b9f51 => {
                const _0x58495d = _0x5e253c;
                YYGGames[_0x58495d(0x197)]({
                    'channel': 0x5,
                    'appName': _0x5e252d,
                    'config': _0x5b9f51,
                    'complete': () => {
                        const _0x2a1ae6 = _0x58495d, _0x5547ab = YYGGames[_0x2a1ae6(0x186)]();
                        window[_0x2a1ae6(0x187)] = this['scrollList'](), window[_0x2a1ae6(0x188)] = this[_0x2a1ae6(0x188)]();
                        switch (_0x5547ab) {
                        case AdPlatformType[_0x2a1ae6(0x189)]:
                        case AdPlatformType['en_XIAOMI']:
                            window[_0x2a1ae6(0x177)] && (window[_0x2a1ae6(0x177)][_0x2a1ae6(0xe7)](0x0, 0x0), window[_0x2a1ae6(0x177)][_0x2a1ae6(0x18b)]());
                            break;
                        default:
                            window[_0x2a1ae6(0x177)] && Laya[_0x2a1ae6(0xe8)]['addChild'](window[_0x2a1ae6(0x177)]), window[_0x2a1ae6(0x177)]['on'](Laya[_0x2a1ae6(0x18d)][_0x2a1ae6(0x18e)], window['yad'], _0x5bbcb2 => {
                                const _0x197b56 = _0x2a1ae6;
                                _0x5bbcb2[_0x197b56(0x18f)](), _0x57319c[_0x197b56(0x13a)]()[_0x197b56(0x140)]('GAME', 'LOGO');
                            });
                            break;
                        }
                        this[_0x2a1ae6(0x138)] = ![], _0x2c699b && _0x2c699b();
                    }
                });
            }));
        }
        ['createNoVideo']() {
            const _0x4f9044 = _0x1ffa89;
            if (!Laya[_0x4f9044(0x198)] || !Laya[_0x4f9044(0x199)])
                return;
            let _0x1becf6 = {
                'x': 0x0,
                'type': _0x4f9044(0x19a),
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': _0x4f9044(0x19a),
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': _0x4f9044(0x19b),
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': _0x4f9044(0x19c),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': 'Sprite',
                        'searchKey': 'Sprite,spr_tip,spr_tip',
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': _0x4f9044(0x19d),
                            'presetID': 0x2,
                            'preset': _0x4f9044(0x19b),
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': _0x4f9044(0x19d),
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': _0x4f9044(0x19d),
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': _0x4f9044(0x19e),
                                'searchKey': _0x4f9044(0x19e),
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': _0x4f9044(0x19b),
                                    'height': 0x21c,
                                    'fillColor': _0x4f9044(0x163)
                                },
                                'nodeParent': 0x4,
                                'label': 'Rect(NoVideo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': 'Label',
                                'searchKey': _0x4f9044(0x19f),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x4f9044(0x1a0),
                                    'text': _0x4f9044(0x1a1),
                                    'presetID': 0x4,
                                    'preset': _0x4f9044(0x19b),
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': _0x4f9044(0x164),
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': _0x4f9044(0x1a2),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x4f9044(0x19f),
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'No\x20Video\x20Available',
                                    'presetID': 0x5,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': _0x4f9044(0x164),
                                    'align': _0x4f9044(0x1a3)
                                },
                                'nodeParent': 0x4,
                                'label': _0x4f9044(0x1a2),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x4f9044(0x19f),
                                'searchKey': _0x4f9044(0x19f),
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x4f9044(0x1a0),
                                    'text': _0x4f9044(0x1a4),
                                    'presetID': 0x6,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': _0x4f9044(0x164),
                                    'align': _0x4f9044(0x1a3)
                                },
                                'nodeParent': 0x4,
                                'label': _0x4f9044(0x1a2),
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
            class _0x258bcd extends Laya[_0x4f9044(0x199)] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    const _0x41b6f1 = _0x4f9044;
                    this[_0x41b6f1(0x1a5)][_0x41b6f1(0x1a6)] = 0x0, this['owner'][_0x41b6f1(0x1a7)] = 0x0, this[_0x41b6f1(0x1a5)][_0x41b6f1(0x1a8)] = 0x0, this[_0x41b6f1(0x1a5)][_0x41b6f1(0x1a9)] = 0x0, this['spr_tip'] = this['owner'][_0x41b6f1(0x1aa)]('spr_tip'), this['owner'][_0x41b6f1(0x169)] > this[_0x41b6f1(0x1a5)][_0x41b6f1(0x16a)] ? this[_0x41b6f1(0x19d)][_0x41b6f1(0xe7)](this[_0x41b6f1(0x1a5)]['height'] / 0x780, this[_0x41b6f1(0x1a5)][_0x41b6f1(0x16a)] / 0x780) : this['spr_tip'][_0x41b6f1(0xe7)](this[_0x41b6f1(0x1a5)]['width'] / 0x438, this[_0x41b6f1(0x1a5)][_0x41b6f1(0x169)] / 0x438), this[_0x41b6f1(0x19d)]['pos'](this[_0x41b6f1(0x1a5)][_0x41b6f1(0x169)] / 0x2, this[_0x41b6f1(0x1a5)]['height'] / 0x2), this[_0x41b6f1(0x1a5)]['on'](Laya[_0x41b6f1(0x18d)][_0x41b6f1(0x1ab)], this, this[_0x41b6f1(0x1ac)]);
                }
                ['closePer']() {
                    const _0x2966e9 = _0x4f9044;
                    _0x57319c[_0x2966e9(0x13a)]()[_0x2966e9(0x1ad)]();
                }
            }
            let _0x5edbef = new Laya[(_0x4f9044(0x198))]();
            _0x5edbef[_0x4f9044(0x1ae)] = _0x1becf6, this[_0x4f9044(0x1af)] = _0x5edbef['create'](), this['noVideoPer'][_0x4f9044(0x168)] = 0x30d3f, this[_0x4f9044(0x1af)][_0x4f9044(0x1b0)](_0x258bcd);
        }
        [_0x1ffa89(0x1b1)]() {
            const _0x274d79 = _0x1ffa89;
            this[_0x274d79(0x1af)] && Laya['stage']['addChild'](this[_0x274d79(0x1af)]);
        }
        [_0x1ffa89(0x1ad)]() {
            const _0x4d1648 = _0x1ffa89;
            this[_0x4d1648(0x1af)] && this[_0x4d1648(0x1af)][_0x4d1648(0x18b)]();
        }
        [_0x1ffa89(0x17b)]() {
            const _0x1da3e5 = _0x1ffa89;
            if (!Laya[_0x1da3e5(0x198)] || !Laya[_0x1da3e5(0x199)])
                return;
            let _0x4a76f3 = {
                'x': 0xf,
                'type': 'Box',
                'searchKey': _0x1da3e5(0x1b2),
                'props': {
                    'var': _0x1da3e5(0x1b3),
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': _0x1da3e5(0x1b3),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': _0x1da3e5(0x19a),
                        'searchKey': 'Box',
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': _0x1da3e5(0x163),
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': _0x1da3e5(0x19a),
                        'isOpen': !![],
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x84,
                        'child': []
                    },
                    {
                        'x': 0x1e,
                        'type': _0x1da3e5(0x19f),
                        'searchKey': _0x1da3e5(0x19f),
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': 'middle',
                            'text': _0x1da3e5(0x1b4),
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': _0x1da3e5(0x164),
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
            class _0x8acd94 extends Laya[_0x1da3e5(0x199)] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                [_0x1da3e5(0x1ac)]() {
                    const _0x554405 = _0x1da3e5;
                    _0x57319c[_0x554405(0x13a)]()[_0x554405(0x1ad)]();
                }
            }
            let _0x56a8f1 = new Laya['Prefab']();
            _0x56a8f1[_0x1da3e5(0x1ae)] = _0x4a76f3, this[_0x1da3e5(0x1b5)] = _0x56a8f1[_0x1da3e5(0x184)](), this[_0x1da3e5(0x1b5)]['zOrder'] = 0x30d3e, this[_0x1da3e5(0x1b5)][_0x1da3e5(0x1b0)](_0x8acd94);
        }
        [_0x1ffa89(0x1b6)]() {
            const _0x44c818 = _0x1ffa89;
            this[_0x44c818(0x1b5)] && Laya[_0x44c818(0xe8)][_0x44c818(0x18c)](this['loadingPer']);
        }
        [_0x1ffa89(0x1b7)]() {
            const _0x477889 = _0x1ffa89;
            this['loadingPer'] && this[_0x477889(0x1b5)]['removeSelf']();
        }
        [_0x1ffa89(0x1b8)]() {
            const _0x50a8ec = _0x1ffa89;
            class _0x33aa20 extends Laya[_0x50a8ec(0x19a)] {
                constructor() {
                    const _0x16f961 = _0x50a8ec;
                    super(), this[_0x16f961(0x1b9)] = new Laya[(_0x16f961(0x174))](), this['img'][_0x16f961(0x1ba)] = _0x16f961(0x1bb), this[_0x16f961(0x1bc)](0x190, 0x12c), this[_0x16f961(0x1b9)]['size'](0x190, 0x12c), this[_0x16f961(0x18c)](this[_0x16f961(0x1b9)]);
                }
            }
            let _0x1c8f4a = new Laya[(_0x50a8ec(0x1bd))]();
            return _0x1c8f4a[_0x50a8ec(0x1bc)](0x320, 0x258), _0x1c8f4a[_0x50a8ec(0x1be)] = _0x33aa20, _0x1c8f4a;
        }
        ['scrollList']() {
            const _0x354bf0 = _0x1ffa89;
            if (!Laya || !Laya[_0x354bf0(0xe8)])
                return null;
            if (YYGGames[_0x354bf0(0x186)]() == AdPlatformType[_0x354bf0(0x189)] || YYGGames['getAdPlatformType']() == AdPlatformType[_0x354bf0(0x18a)]) {
                let _0x3ff725 = new Laya[(_0x354bf0(0x19a))]();
                return _0x3ff725['setSize'] = function () {
                }, _0x3ff725;
            }
            if (!this['_scrollList']) {
                let _0x48c52f = {
                    'x': 0x0,
                    'type': _0x354bf0(0x1bd),
                    'selectedBox': 0x90,
                    'selecteID': 0x78,
                    'searchKey': _0x354bf0(0x1bf),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x370,
                        'repeatY': 0x1,
                        'presetID': 0x1,
                        'preset': _0x354bf0(0x1c0),
                        'name': _0x354bf0(0x1c1),
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': _0x354bf0(0x1c1),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': _0x354bf0(0x174),
                            'searchKey': 'Image,img_ListBg',
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x384,
                                'skin': _0x354bf0(0x1c2),
                                'sizeGrid': _0x354bf0(0x1c3),
                                'presetID': 0x2,
                                'preset': _0x354bf0(0x1c0),
                                'name': _0x354bf0(0x1c4),
                                'height': 0xbe,
                                'centerY': 0x0,
                                'centerX': 0x0
                            },
                            'nodeParent': 0x90,
                            'label': _0x354bf0(0x1c4),
                            'isDirectory': ![],
                            'isAniNode': ![],
                            'hasChild': ![],
                            'compId': 0x78,
                            'child': []
                        },
                        {
                            'x': 0xf,
                            'type': 'Box',
                            'searchKey': _0x354bf0(0x19a),
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': _0x354bf0(0x1c5),
                                'presetID': 0x3,
                                'preset': 'laya/pages/prefab/scrollList.prefab',
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': _0x354bf0(0x1c6),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x354bf0(0x174),
                                    'searchKey': _0x354bf0(0x1c7),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': _0x354bf0(0x1c0),
                                        'name': _0x354bf0(0x1bb),
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
                                            'type': _0x354bf0(0x174),
                                            'searchKey': 'Image',
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': _0x354bf0(0x1c8),
                                                'sizeGrid': '30,30,30,30',
                                                'renderType': _0x354bf0(0x1c9),
                                                'presetID': 0x5,
                                                'preset': _0x354bf0(0x1c0),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x79,
                                            'label': 'Image(scrollList)',
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
                            'name': _0x354bf0(0x1ca),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x199176 extends Laya[_0x354bf0(0x199)] {
                    constructor() {
                        const _0x2601e1 = _0x354bf0;
                        super(), this['imgArr'] = [], this[_0x2601e1(0x1cb)] = [
                            0.83,
                            0.83
                        ], this[_0x2601e1(0x1cc)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        const _0x1d8aca = _0x354bf0;
                        this[_0x1d8aca(0x1c4)] = this[_0x1d8aca(0x1a5)]['getChildByName'](_0x1d8aca(0x1c4)), this['owner'][_0x1d8aca(0xec)] = ![], !this[_0x1d8aca(0x1a5)][_0x1d8aca(0x1cd)] && (this[_0x1d8aca(0x1a5)][_0x1d8aca(0x1cd)] = new Laya['Handler'](this, this['itemRenderFun']));
                        if (this['imgArr'][_0x1d8aca(0x117)]) {
                            let _0x56b97f = JSON['parse'](JSON[_0x1d8aca(0x146)](this['imgArr']));
                            Laya[_0x1d8aca(0x180)][_0x1d8aca(0x1ce)](_0x56b97f);
                        }
                        this[_0x1d8aca(0x1cf)](this[_0x1d8aca(0x1cc)][0x0], this[_0x1d8aca(0x1cc)][0x1], this[_0x1d8aca(0x1cc)][0x2]), this[_0x1d8aca(0x1a5)][_0x1d8aca(0x1d0)][_0x1d8aca(0x1d1)] = ![], this[_0x1d8aca(0x1a5)]['scrollBar']['mouseEnabled'] = ![], this['owner'][_0x1d8aca(0x1d0)][_0x1d8aca(0x1d2)] = ![];
                        let _0x1c520a = _0x57319c[_0x1d8aca(0x13a)]()[_0x1d8aca(0x1d3)]();
                        if (!_0x1c520a[_0x1d8aca(0x117)])
                            return;
                        this['listArray'] = JSON[_0x1d8aca(0xf6)](JSON[_0x1d8aca(0x146)](_0x1c520a)), this[_0x1d8aca(0x1d4)] = this[_0x1d8aca(0x1d4)][_0x1d8aca(0x1d5)](this[_0x1d8aca(0x1d4)][_0x1d8aca(0x170)](0x0, 0x4)), this[_0x1d8aca(0x1a5)]['centerX'] = 0x0, this[_0x1d8aca(0x1a5)][_0x1d8aca(0x1d6)] = this['listArray'], Laya[_0x1d8aca(0xe6)][_0x1d8aca(0x1d7)](0x1, this, this[_0x1d8aca(0x1d8)]), this['owner'][_0x1d8aca(0xec)] = !![];
                    }
                    ['itemRenderFun'](_0xc0f58b, _0x3ef0a2) {
                        const _0x319b49 = _0x354bf0;
                        let _0x472207 = _0xc0f58b[_0x319b49(0x1aa)](_0x319b49(0x1bb));
                        _0xc0f58b[_0x319b49(0x1d9)](), _0x472207[_0x319b49(0x1d9)](), _0xc0f58b['on'](Laya[_0x319b49(0x18d)][_0x319b49(0x1da)], _0xc0f58b, () => {
                            const _0x514076 = _0x319b49;
                            _0xc0f58b[_0x514076(0x168)] = 0x64;
                        }), _0xc0f58b['on'](Laya['Event']['MOUSE_OUT'], _0xc0f58b, () => {
                            const _0x74ee4b = _0x319b49;
                            _0xc0f58b[_0x74ee4b(0x168)] = _0x3ef0a2;
                        }), _0x472207['on'](Laya[_0x319b49(0x18d)][_0x319b49(0x1da)], _0xc0f58b, () => {
                            const _0x374819 = _0x319b49;
                            _0x472207['scale'](1.1, 1.1), this[_0x374819(0x1db)]();
                        }), _0x472207['on'](Laya[_0x319b49(0x18d)][_0x319b49(0x1dc)], _0xc0f58b, () => {
                            const _0x2567e5 = _0x319b49;
                            _0x472207[_0x2567e5(0xe7)](0x1, 0x1), Laya[_0x2567e5(0xe6)][_0x2567e5(0x1d7)](0x1, this, this['loopList']);
                        }), _0x472207['on'](Laya[_0x319b49(0x18d)]['MOUSE_DOWN'], _0xc0f58b, _0x290f48 => {
                            const _0x117d27 = _0x319b49;
                            _0x290f48[_0x117d27(0x18f)](), _0x57319c[_0x117d27(0x13a)]()[_0x117d27(0x140)]('GAME', 'MORE', _0xc0f58b[_0x117d27(0x1dd)]['id']);
                        });
                        let _0x31905f = _0x472207[_0x319b49(0x1c9)];
                        _0xc0f58b['width'] = this[_0x319b49(0x1cc)][0x0] + 0x14, _0xc0f58b[_0x319b49(0x16a)] = this['sizeTran'][0x1] + 0x14, _0xc0f58b['x'] = (this['sizeTran'][0x0] + 0x14) * _0x3ef0a2;
                        if (this[_0x319b49(0x1cc)][0x2])
                            _0x31905f[_0x319b49(0x169)] = _0x472207[_0x319b49(0x169)] = this['sizeTran'][0x0], _0x31905f[_0x319b49(0x16a)] = _0x472207[_0x319b49(0x16a)] = this[_0x319b49(0x1cc)][0x1];
                        else {
                            let _0x3fd8b8 = 0xc8 / this[_0x319b49(0x1cc)][0x0] < 0x96 / this[_0x319b49(0x1cc)][0x1] ? 0xc8 / this[_0x319b49(0x1cc)][0x0] : 0x96 / this[_0x319b49(0x1cc)][0x1];
                            _0x472207[_0x319b49(0x169)] = 0xc8 / _0x3fd8b8, _0x472207[_0x319b49(0x16a)] = 0x96 / _0x3fd8b8, _0x31905f[_0x319b49(0x169)] = this[_0x319b49(0x1cc)][0x0], _0x31905f[_0x319b49(0x16a)] = this[_0x319b49(0x1cc)][0x1];
                        }
                        _0x31905f['x'] = _0x472207[_0x319b49(0x169)] / 0x2, _0x31905f['y'] = _0x472207['height'] / 0x2;
                    }
                    [_0x354bf0(0x1cf)](_0x44fc48, _0x59327d, _0x51f898 = ![]) {
                        const _0x471fa1 = _0x354bf0;
                        this[_0x471fa1(0x1cc)] = [
                            _0x44fc48,
                            _0x59327d,
                            _0x51f898
                        ], this[_0x471fa1(0x1c4)] && (this['owner'][_0x471fa1(0x169)] = (_0x44fc48 + 0x14) * 0x4, this[_0x471fa1(0x1a5)]['height'] = _0x59327d + 0x14, this['img_ListBg'][_0x471fa1(0x169)] = (_0x44fc48 + 0x14) * 0x4 + 0x14, this[_0x471fa1(0x1c4)]['height'] = _0x59327d + 0x28, this[_0x471fa1(0x1a5)][_0x471fa1(0x1d6)] = [], this[_0x471fa1(0x1a5)][_0x471fa1(0x1d6)] = this[_0x471fa1(0x1d4)]);
                    }
                    [_0x354bf0(0x1d8)]() {
                        const _0x54f365 = _0x354bf0;
                        this[_0x54f365(0x1a5)][_0x54f365(0x1d0)][_0x54f365(0x113)] += 0x1, this[_0x54f365(0x1a5)][_0x54f365(0x1d0)]['value'] >= this['owner']['scrollBar'][_0x54f365(0x1de)] && (this[_0x54f365(0x1a5)][_0x54f365(0x1d0)][_0x54f365(0x113)] = 0x0);
                    }
                    ['endAni']() {
                        const _0x792273 = _0x354bf0;
                        Laya[_0x792273(0xe6)]['clearAll'](this), Laya[_0x792273(0x1df)][_0x792273(0x1e0)](this['owner']['scrollBar']);
                    }
                    [_0x354bf0(0x1e1)](_0x56f2e5) {
                    }
                    [_0x354bf0(0x1e2)]() {
                        const _0xc3db83 = _0x354bf0;
                        if (this[_0xc3db83(0x1e3)][_0xc3db83(0x117)]) {
                            let _0x24c427 = JSON[_0xc3db83(0xf6)](JSON[_0xc3db83(0x146)](this[_0xc3db83(0x1e3)]));
                            Laya[_0xc3db83(0x180)][_0xc3db83(0x1ce)](_0x24c427);
                        }
                        this['imgArr'] = [], this[_0xc3db83(0x1db)](), this['owner'][_0xc3db83(0x1d6)] = [];
                    }
                }
                let _0x592cf1 = new Laya[(_0x354bf0(0x198))]();
                _0x592cf1['json'] = _0x48c52f, this['_scrollList'] = _0x592cf1[_0x354bf0(0x184)](), this['_scrollList'][_0x354bf0(0x168)] = 0x30d3f, this[_0x354bf0(0x1e4)][_0x354bf0(0x1b0)](_0x199176), this['_scrollList']['setSize'] = this[_0x354bf0(0x1e4)][_0x354bf0(0x1e5)](_0x199176)[_0x354bf0(0x1cf)][_0x354bf0(0xde)](this[_0x354bf0(0x1e4)][_0x354bf0(0x1e5)](_0x199176));
            }
            return this[_0x354bf0(0x1e4)];
        }
        [_0x1ffa89(0x188)]() {
            const _0x86d09c = _0x1ffa89;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames[_0x86d09c(0x186)]() == AdPlatformType['en_GAMEDISTRIBUTION'] || YYGGames['getAdPlatformType']() == AdPlatformType['en_XIAOMI']) {
                let _0x1740c5 = new Laya[(_0x86d09c(0x19a))]();
                return _0x1740c5['setSpaceX'] = _0x1740c5[_0x86d09c(0x1cf)] = function () {
                }, _0x1740c5;
            }
            if (!this['_box_adTwo']) {
                let _0x57672a = {
                    'x': 0x0,
                    'type': _0x86d09c(0x19a),
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': _0x86d09c(0x1e6),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': _0x86d09c(0x1e7),
                        'name': _0x86d09c(0x188),
                        'isPresetRoot': !![],
                        'height': 0x1,
                        'centerX': 0x0,
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x99,
                    'label': _0x86d09c(0x188),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x92,
                    'child': [
                        {
                            'x': 0xf,
                            'type': _0x86d09c(0x174),
                            'searchKey': _0x86d09c(0x1e8),
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': _0x86d09c(0x1c8),
                                'sizeGrid': '30,30,30,30',
                                'presetID': 0x2,
                                'preset': _0x86d09c(0x1e7),
                                'name': _0x86d09c(0x1e9),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x86d09c(0x1e9),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': 'Image,img_adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': _0x86d09c(0x1e7),
                                        'name': 'img_adImg',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': _0x86d09c(0x1ea),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x95,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x86d09c(0x174),
                                            'searchKey': _0x86d09c(0x174),
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0x86d09c(0x1c8),
                                                'sizeGrid': _0x86d09c(0x1eb),
                                                'renderType': _0x86d09c(0x1c9),
                                                'presetID': 0x4,
                                                'preset': _0x86d09c(0x1e7),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': _0x86d09c(0x1ec),
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
                            'type': _0x86d09c(0x174),
                            'searchKey': _0x86d09c(0x1ed),
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': _0x86d09c(0x1c8),
                                'sizeGrid': '30,30,30,30',
                                'presetID': 0x5,
                                'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                'name': _0x86d09c(0x1ee),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x86d09c(0x1ee),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': _0x86d09c(0x1ef),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': _0x86d09c(0x1e7),
                                        'name': _0x86d09c(0x1ea),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': _0x86d09c(0x1ea),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x96,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x86d09c(0x174),
                                            'searchKey': _0x86d09c(0x174),
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0x86d09c(0x1c8),
                                                'sizeGrid': _0x86d09c(0x1eb),
                                                'renderType': _0x86d09c(0x1c9),
                                                'presetID': 0x7,
                                                'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': 'Image(box_adTwo)',
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
                            'name': _0x86d09c(0x1ca),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0xa94e58 extends Laya[_0x86d09c(0x199)] {
                    constructor() {
                        const _0x159170 = _0x86d09c;
                        super(), this[_0x159170(0x1e3)] = [], this[_0x159170(0x1f0)] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    [_0x86d09c(0x1f1)]() {
                        const _0x12b697 = _0x86d09c;
                        !this[_0x12b697(0x1e9)] && (this[_0x12b697(0x1e9)] = this[_0x12b697(0x1a5)]['getChildByName'](_0x12b697(0x1e9))), !this[_0x12b697(0x1ee)] && (this[_0x12b697(0x1ee)] = this['owner'][_0x12b697(0x1aa)]('img_ad1')), !this[_0x12b697(0x1f2)] && (this[_0x12b697(0x1f2)] = this['img_ad0'][_0x12b697(0x1aa)](_0x12b697(0x1ea))), !this[_0x12b697(0x1f3)] && (this[_0x12b697(0x1f3)] = this[_0x12b697(0x1ee)][_0x12b697(0x1aa)](_0x12b697(0x1ea))), !this[_0x12b697(0x1f4)] && (this[_0x12b697(0x1f4)] = this[_0x12b697(0x1f2)][_0x12b697(0x1c9)]), !this[_0x12b697(0x1f5)] && (this[_0x12b697(0x1f5)] = this[_0x12b697(0x1f3)][_0x12b697(0x1c9)]), this[_0x12b697(0x1a5)][_0x12b697(0xec)] = ![];
                        let _0x438139 = _0x57319c[_0x12b697(0x13a)]()[_0x12b697(0x1d3)]();
                        if (!_0x438139['length'])
                            return;
                        let _0xc2f370 = JSON[_0x12b697(0xf6)](JSON[_0x12b697(0x146)](_0x438139));
                        if (this[_0x12b697(0x1e3)]['length']) {
                            let _0x3bff41 = JSON[_0x12b697(0xf6)](JSON[_0x12b697(0x146)](this[_0x12b697(0x1e3)]));
                            Laya[_0x12b697(0x180)][_0x12b697(0x1ce)](_0x3bff41);
                        }
                        this['setSpaceX'](this[_0x12b697(0x1f0)]), this[_0x12b697(0x1cf)](this[_0x12b697(0x1cc)][0x0], this[_0x12b697(0x1cc)][0x1], this[_0x12b697(0x1cc)][0x2]), this['img_ad0'][_0x12b697(0x1d9)](), this[_0x12b697(0x1ee)]['offAll'](), this['owner'][_0x12b697(0xec)] = !![], this[_0x12b697(0x1e9)]['getChildByName']('img_adImg')['skin'] = _0xc2f370[0x0][_0x12b697(0x1bb)], this['img_ad1']['getChildByName'](_0x12b697(0x1ea))[_0x12b697(0x175)] = _0xc2f370[0x1][_0x12b697(0x1bb)], this[_0x12b697(0x1e9)]['on'](Laya[_0x12b697(0x18d)][_0x12b697(0x18e)], this, _0x182d1e => {
                            const _0x468914 = _0x12b697;
                            _0x182d1e[_0x468914(0x18f)](), _0x57319c[_0x468914(0x13a)]()['navigate'](_0x468914(0x190), _0x468914(0x1f6), _0xc2f370[0x0]['id']);
                        }), this[_0x12b697(0x1ee)]['on'](Laya[_0x12b697(0x18d)]['MOUSE_DOWN'], this, _0x9b6783 => {
                            const _0x4e557e = _0x12b697;
                            _0x9b6783['stopPropagation'](), _0x57319c['getInstance']()[_0x4e557e(0x140)](_0x4e557e(0x190), 'MORE', _0xc2f370[0x1]['id']);
                        });
                    }
                    ['setSpaceX'](_0x175597) {
                        const _0x5c02cf = _0x86d09c;
                        this[_0x5c02cf(0x1f0)] = _0x175597, this['img_ad0'] && (this[_0x5c02cf(0x1e9)]['x'] = -this[_0x5c02cf(0x1e9)]['width'] - this['spaceNum'] / 0x2, this[_0x5c02cf(0x1ee)]['x'] = this[_0x5c02cf(0x1f0)] / 0x2);
                    }
                    [_0x86d09c(0x1e2)]() {
                        const _0x3041ab = _0x86d09c;
                        if (this[_0x3041ab(0x1e3)][_0x3041ab(0x117)]) {
                            let _0x409f15 = JSON['parse'](JSON[_0x3041ab(0x146)](this['imgArr']));
                            Laya[_0x3041ab(0x180)][_0x3041ab(0x1ce)](_0x409f15);
                        }
                        this['imgArr'] = [];
                    }
                    [_0x86d09c(0x1cf)](_0x5ea501, _0x581ae5, _0xd889aa = ![]) {
                        const _0x3bc05f = _0x86d09c;
                        this[_0x3bc05f(0x1cc)] = [
                            _0x5ea501,
                            _0x581ae5,
                            _0xd889aa
                        ];
                        if (this['img_ad0']) {
                            this[_0x3bc05f(0x1e9)][_0x3bc05f(0x169)] = this[_0x3bc05f(0x1ee)][_0x3bc05f(0x169)] = _0x5ea501 + 0x14, this[_0x3bc05f(0x1e9)][_0x3bc05f(0x16a)] = this[_0x3bc05f(0x1ee)][_0x3bc05f(0x16a)] = _0x581ae5 + 0x14;
                            if (_0xd889aa)
                                this[_0x3bc05f(0x1f4)][_0x3bc05f(0x169)] = this[_0x3bc05f(0x1f5)][_0x3bc05f(0x169)] = this[_0x3bc05f(0x1f2)][_0x3bc05f(0x169)] = this[_0x3bc05f(0x1f3)][_0x3bc05f(0x169)] = _0x5ea501, this[_0x3bc05f(0x1f4)][_0x3bc05f(0x16a)] = this[_0x3bc05f(0x1f5)][_0x3bc05f(0x16a)] = this[_0x3bc05f(0x1f2)]['height'] = this[_0x3bc05f(0x1f3)][_0x3bc05f(0x16a)] = _0x581ae5;
                            else {
                                let _0x510df6 = 0xc8 / _0x5ea501 < 0x96 / _0x581ae5 ? 0xc8 / _0x5ea501 : 0x96 / _0x581ae5;
                                this['img_ad0Ad'][_0x3bc05f(0x169)] = this[_0x3bc05f(0x1f3)]['width'] = 0xc8 / _0x510df6, this[_0x3bc05f(0x1f2)][_0x3bc05f(0x16a)] = this[_0x3bc05f(0x1f3)][_0x3bc05f(0x16a)] = 0x96 / _0x510df6, this[_0x3bc05f(0x1f4)][_0x3bc05f(0x169)] = this[_0x3bc05f(0x1f5)][_0x3bc05f(0x169)] = _0x5ea501, this[_0x3bc05f(0x1f4)][_0x3bc05f(0x16a)] = this[_0x3bc05f(0x1f5)][_0x3bc05f(0x16a)] = _0x581ae5;
                            }
                            this[_0x3bc05f(0x1f4)]['x'] = this[_0x3bc05f(0x1f5)]['x'] = this[_0x3bc05f(0x1f2)][_0x3bc05f(0x169)] / 0x2, this[_0x3bc05f(0x1f4)]['y'] = this[_0x3bc05f(0x1f5)]['y'] = this[_0x3bc05f(0x1f2)][_0x3bc05f(0x16a)] / 0x2, this[_0x3bc05f(0x1f7)](this[_0x3bc05f(0x1f0)]);
                        }
                    }
                }
                let _0x2f4a74 = new Laya[(_0x86d09c(0x198))]();
                _0x2f4a74[_0x86d09c(0x1ae)] = _0x57672a, this[_0x86d09c(0x1f8)] = _0x2f4a74[_0x86d09c(0x184)](), this[_0x86d09c(0x1f8)][_0x86d09c(0x168)] = 0x30d3f, this[_0x86d09c(0x1f8)][_0x86d09c(0x1b0)](_0xa94e58), this[_0x86d09c(0x1f8)][_0x86d09c(0x1f7)] = this[_0x86d09c(0x1f8)][_0x86d09c(0x1e5)](_0xa94e58)[_0x86d09c(0x1f7)][_0x86d09c(0xde)](this['_box_adTwo'][_0x86d09c(0x1e5)](_0xa94e58)), this[_0x86d09c(0x1f8)]['setSize'] = this[_0x86d09c(0x1f8)][_0x86d09c(0x1e5)](_0xa94e58)[_0x86d09c(0x1cf)][_0x86d09c(0xde)](this[_0x86d09c(0x1f8)][_0x86d09c(0x1e5)](_0xa94e58));
            }
            return this[_0x86d09c(0x1f8)];
        }
    }
    _0x57319c['_instance'] = null, window[_0x1ffa89(0x1f9)] = _0x57319c;
    class _0x1e94b2 {
        constructor() {
            const _0x10a96d = _0x1ffa89;
            this[_0x10a96d(0x1fa)] = null, this[_0x10a96d(0x1e4)] = null, _0x1e94b2[_0x10a96d(0x1fb)] = this;
        }
        static get [_0x1ffa89(0x1fc)]() {
            const _0x263599 = _0x1ffa89;
            return !_0x1e94b2[_0x263599(0x1fb)] && new _0x1e94b2(), _0x1e94b2[_0x263599(0x1fb)];
        }
        [_0x1ffa89(0x188)]() {
            const _0xe10cda = _0x1ffa89;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames[_0xe10cda(0x186)]() == AdPlatformType['en_GAMEDISTRIBUTION'] || YYGGames['getAdPlatformType']() == AdPlatformType[_0xe10cda(0x18a)]) {
                let _0x4cb2dc = new Laya[(_0xe10cda(0x19a))]();
                return _0x4cb2dc[_0xe10cda(0x1f7)] = _0x4cb2dc[_0xe10cda(0x1cf)] = function () {
                }, _0x4cb2dc;
            }
            if (!this[_0xe10cda(0x1fa)]) {
                this['_box_adTwo0'] = new Laya[(_0xe10cda(0x19a))](), this[_0xe10cda(0x1fa)][_0xe10cda(0x1ba)] = '_box_adTwo0', this[_0xe10cda(0x1fa)][_0xe10cda(0x1fd)] = this[_0xe10cda(0x1fa)]['anchorY'] = 0.5, this[_0xe10cda(0x1fa)][_0xe10cda(0x168)] = 0x30d3f, this[_0xe10cda(0x1fa)][_0xe10cda(0x1fe)] = 0x0;
                let _0x3bc404 = new Laya[(_0xe10cda(0x174))]();
                _0x3bc404[_0xe10cda(0x1ba)] = 'leftAdBg', _0x3bc404['sizeGrid'] = _0xe10cda(0x1eb), _0x3bc404['size'](0xdc, 0xaa), _0x3bc404['skin'] = _0xe10cda(0x1c8);
                let _0xf618ec = new Laya[(_0xe10cda(0x174))]();
                _0xf618ec['name'] = _0xe10cda(0x1ff), _0xf618ec[_0xe10cda(0x1bc)](0xc8, 0x96), _0xf618ec[_0xe10cda(0x200)] = _0xe10cda(0x1eb), _0xf618ec[_0xe10cda(0x1fd)] = _0xf618ec[_0xe10cda(0x201)] = 0.5, _0xf618ec[_0xe10cda(0x175)] = _0xe10cda(0x1c8);
                let _0x887bc2 = new Laya[(_0xe10cda(0x174))]();
                _0x887bc2[_0xe10cda(0x1ba)] = _0xe10cda(0x202), _0x887bc2[_0xe10cda(0x1bc)](0xc8, 0x96), _0x887bc2['anchorX'] = _0x887bc2[_0xe10cda(0x201)] = 0.5, _0x887bc2[_0xe10cda(0x175)] = '', _0x887bc2['mask'] = _0xf618ec, _0x3bc404[_0xe10cda(0x18c)](_0x887bc2), _0x3bc404[_0xe10cda(0x203)](0x0, 0x0), _0x887bc2[_0xe10cda(0x203)](_0x3bc404[_0xe10cda(0x169)] / 0x2, _0x3bc404[_0xe10cda(0x16a)] / 0x2), _0xf618ec[_0xe10cda(0x203)](_0x887bc2[_0xe10cda(0x169)] / 0x2, _0x887bc2[_0xe10cda(0x16a)] / 0x2);
                let _0x30f6a8 = new Laya[(_0xe10cda(0x174))]();
                _0x30f6a8[_0xe10cda(0x1ba)] = 'rightAdBg', _0x30f6a8[_0xe10cda(0x200)] = _0xe10cda(0x1eb), _0x30f6a8[_0xe10cda(0x1bc)](0xdc, 0xaa), _0x30f6a8[_0xe10cda(0x175)] = _0xe10cda(0x1c8);
                let _0x50c278 = new Laya[(_0xe10cda(0x174))]();
                _0x50c278[_0xe10cda(0x1ba)] = 'rightAdMask', _0x50c278[_0xe10cda(0x1bc)](0xc8, 0x96), _0x50c278[_0xe10cda(0x200)] = _0xe10cda(0x1eb), _0x50c278['anchorX'] = _0x50c278[_0xe10cda(0x201)] = 0.5, _0x50c278[_0xe10cda(0x175)] = _0xe10cda(0x1c8);
                let _0x27ddf2 = new Laya['Image']();
                _0x27ddf2[_0xe10cda(0x1ba)] = _0xe10cda(0x204), _0x27ddf2[_0xe10cda(0x1bc)](0xc8, 0x96), _0x27ddf2['anchorX'] = _0x27ddf2[_0xe10cda(0x201)] = 0.5, _0x27ddf2['skin'] = '', _0x27ddf2[_0xe10cda(0x1c9)] = _0x50c278, _0x30f6a8[_0xe10cda(0x18c)](_0x27ddf2), _0x30f6a8[_0xe10cda(0x203)](_0x3bc404[_0xe10cda(0x169)], 0x0), _0x27ddf2[_0xe10cda(0x203)](_0x30f6a8[_0xe10cda(0x169)] / 0x2, _0x30f6a8[_0xe10cda(0x16a)] / 0x2), _0x50c278[_0xe10cda(0x203)](_0x27ddf2[_0xe10cda(0x169)] / 0x2, _0x27ddf2[_0xe10cda(0x16a)] / 0x2), this[_0xe10cda(0x1fa)][_0xe10cda(0x166)] = 0x0, this[_0xe10cda(0x1fa)][_0xe10cda(0x169)] = _0x3bc404['width'] + _0x30f6a8[_0xe10cda(0x169)], this[_0xe10cda(0x1fa)][_0xe10cda(0x18c)](_0x3bc404), this['_box_adTwo0'][_0xe10cda(0x18c)](_0x30f6a8), this[_0xe10cda(0x1fa)][_0xe10cda(0x1f7)] = this['setSpaceX'][_0xe10cda(0xde)](this[_0xe10cda(0x1fa)]), this[_0xe10cda(0x1fa)][_0xe10cda(0x1cf)] = this['setSize']['bind'](this[_0xe10cda(0x1fa)]);
                let _0x196abf = _0x57319c[_0xe10cda(0x13a)]()['getForgames']();
                if (!_0x196abf['length'])
                    return;
                let _0x307d37 = JSON['parse'](JSON[_0xe10cda(0x146)](_0x196abf));
                _0x887bc2[_0xe10cda(0x1d9)](), _0x27ddf2[_0xe10cda(0x1d9)](), _0x887bc2[_0xe10cda(0x175)] = _0x307d37[0x0]['thumb'], _0x27ddf2[_0xe10cda(0x175)] = _0x307d37[0x1][_0xe10cda(0x1bb)], _0x887bc2['on'](Laya[_0xe10cda(0x18d)]['MOUSE_DOWN'], this, _0x4f15b5 => {
                    const _0x501054 = _0xe10cda;
                    _0x4f15b5[_0x501054(0x18f)](), _0x57319c['getInstance']()['navigate'](_0x501054(0x190), _0x501054(0x1f6), _0x307d37[0x0]['id']);
                }), _0x27ddf2['on'](Laya['Event'][_0xe10cda(0x18e)], this, _0x3aab68 => {
                    const _0x4002af = _0xe10cda;
                    _0x3aab68[_0x4002af(0x18f)](), _0x57319c[_0x4002af(0x13a)]()[_0x4002af(0x140)]('GAME', _0x4002af(0x1f6), _0x307d37[0x1]['id']);
                }), this['_box_adTwo0'][_0xe10cda(0xec)] = ![];
            }
            return this[_0xe10cda(0x1fa)];
        }
        [_0x1ffa89(0x1cf)](_0xf05ee8 = 0xc8, _0x10bd4a = 0x96, _0x342b83 = ![], _0x54b17f = !![]) {
            const _0x28cf66 = _0x1ffa89;
            let _0x289c6f = 0x1;
            _0xf05ee8 / 0xc8 > _0x10bd4a / 0x96 ? _0x289c6f = _0xf05ee8 / 0xc8 : _0x289c6f = _0x10bd4a / 0x96;
            let _0x1726e3 = 0xc8;
            if (this['name'] == _0x28cf66(0x1fa)) {
                let _0x30dd78 = this[_0x28cf66(0x1aa)](_0x28cf66(0x205)), _0x3eee74 = this['getChildByName'](_0x28cf66(0x206)), _0x4bb90c = _0x30dd78[_0x28cf66(0x1aa)]('leftAd'), _0x21c20a = _0x3eee74[_0x28cf66(0x1aa)](_0x28cf66(0x204));
                _0x54b17f && (_0x30dd78[_0x28cf66(0x1bc)](0xdc, 0xaa), _0x3eee74[_0x28cf66(0x1bc)](0xdc, 0xaa), _0x4bb90c[_0x28cf66(0x1bc)](0xc8, 0x96), _0x21c20a['size'](0xc8, 0x96), _0x4bb90c[_0x28cf66(0x1c9)]['size'](0xc8, 0x96), _0x21c20a['mask'][_0x28cf66(0x1bc)](0xc8, 0x96), _0x30dd78['scale'](0x1, 0x1), _0x3eee74[_0x28cf66(0xe7)](0x1, 0x1), _0x4bb90c[_0x28cf66(0xe7)](0x1, 0x1), _0x21c20a[_0x28cf66(0xe7)](0x1, 0x1), _0x4bb90c[_0x28cf66(0x1c9)][_0x28cf66(0xe7)](0x1, 0x1), _0x21c20a['mask'][_0x28cf66(0xe7)](0x1, 0x1));
                let _0x3b68c0 = 0xc8 * _0x10bd4a / _0xf05ee8;
                _0x30dd78['size'](_0x1726e3 + 0x14, _0x3b68c0 + 0x14), _0x3eee74[_0x28cf66(0x1bc)](_0x1726e3 + 0x14, _0x3b68c0 + 0x14), _0x4bb90c[_0x28cf66(0x1c9)][_0x28cf66(0x1bc)](_0x1726e3, _0x3b68c0), _0x21c20a[_0x28cf66(0x1c9)][_0x28cf66(0x1bc)](_0x1726e3, _0x3b68c0), !_0x342b83 ? (_0x4bb90c[_0x28cf66(0x1bc)](_0x1726e3, _0x3b68c0), _0x21c20a['size'](_0x1726e3, _0x3b68c0)) : (_0x4bb90c[_0x28cf66(0x1bc)](0xc8 * _0x289c6f, 0x96 * _0x289c6f), _0x21c20a[_0x28cf66(0x1bc)](0xc8 * _0x289c6f, 0x96 * _0x289c6f)), _0x4bb90c[_0x28cf66(0x203)](_0x30dd78['width'] / 0x2, _0x30dd78[_0x28cf66(0x16a)] / 0x2), _0x4bb90c[_0x28cf66(0x1c9)]['pos'](_0x4bb90c[_0x28cf66(0x169)] / 0x2, _0x4bb90c[_0x28cf66(0x16a)] / 0x2), _0x21c20a[_0x28cf66(0x203)](_0x3eee74[_0x28cf66(0x169)] / 0x2, _0x3eee74['height'] / 0x2), _0x21c20a['mask']['pos'](_0x21c20a[_0x28cf66(0x169)] / 0x2, _0x21c20a[_0x28cf66(0x16a)] / 0x2), this[_0x28cf66(0x1f7)](this[_0x28cf66(0x1fe)]);
            } else {
                if (this[_0x28cf66(0x1ba)] == _0x28cf66(0x1e4)) {
                    this['sizeArr'] = [
                        _0xf05ee8,
                        _0x10bd4a,
                        _0x342b83,
                        _0x54b17f
                    ];
                    let _0x2f631c = 0x1;
                    this['sizeArr'][0x0] / 0xc8 > this[_0x28cf66(0x207)][0x1] / 0x96 ? _0x2f631c = this[_0x28cf66(0x207)][0x0] / 0xc8 : _0x2f631c = this[_0x28cf66(0x207)][0x1] / 0x96;
                    let _0x29c2bb = 0xc8, _0x11a3a0 = 0xc8 * this[_0x28cf66(0x207)][0x1] / this['sizeArr'][0x0];
                    !this[_0x28cf66(0x207)][0x2] ? (this[_0x28cf66(0x16a)] = _0x11a3a0 + 0x14, this['getChildByName'](_0x28cf66(0x208))[_0x28cf66(0x16a)] = _0x11a3a0 + 0x14) : (this[_0x28cf66(0x16a)] = (_0x11a3a0 + 0x14) * _0x2f631c, this['getChildByName'](_0x28cf66(0x208))[_0x28cf66(0x16a)] = (_0x11a3a0 + 0x14) * _0x2f631c);
                }
            }
        }
        [_0x1ffa89(0x187)]() {
            const _0x56f4f9 = _0x1ffa89;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatformType']() == AdPlatformType[_0x56f4f9(0x189)] || YYGGames[_0x56f4f9(0x186)]() == AdPlatformType[_0x56f4f9(0x18a)]) {
                let _0x12e5e1 = new Laya[(_0x56f4f9(0x19a))]();
                return _0x12e5e1['setSize'] = function () {
                }, _0x12e5e1;
            }
            if (!this[_0x56f4f9(0x1e4)]) {
                this[_0x56f4f9(0x1e4)] = new Laya[(_0x56f4f9(0x174))](), this[_0x56f4f9(0x1e4)][_0x56f4f9(0x1ba)] = _0x56f4f9(0x1e4), this[_0x56f4f9(0x1e4)][_0x56f4f9(0x175)] = _0x56f4f9(0x1c2), this['_scrollList'][_0x56f4f9(0x200)] = _0x56f4f9(0x1eb), this['_scrollList']['size'](0x384, 0xbe), this[_0x56f4f9(0x1e4)]['zOrder'] = 0x30d3f, this[_0x56f4f9(0x1e4)]['centerX'] = 0x0, this[_0x56f4f9(0x1e4)]['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x36fb96 extends Laya[_0x56f4f9(0x19a)] {
                    constructor() {
                        const _0x45cd59 = _0x56f4f9;
                        super(), this[_0x45cd59(0x167)] = 0x0, this['img'] = new Laya[(_0x45cd59(0x174))](), this[_0x45cd59(0x1b9)][_0x45cd59(0x1ba)] = _0x45cd59(0x1b9), this[_0x45cd59(0x1b9)][_0x45cd59(0x1fd)] = this[_0x45cd59(0x1b9)]['anchorY'] = 0.5, this[_0x45cd59(0x1bc)](0xdc, 0xaa), this[_0x45cd59(0x1b9)][_0x45cd59(0x1bc)](0xc8, 0x96), this[_0x45cd59(0x18c)](this['img']), this['imgMask'] = new Laya[(_0x45cd59(0x174))](), this['imgMask']['sizeGrid'] = _0x45cd59(0x1eb), this[_0x45cd59(0x209)][_0x45cd59(0x1ba)] = _0x45cd59(0x209), this['imgMask'][_0x45cd59(0x1fd)] = this['imgMask'][_0x45cd59(0x201)] = 0.5, this[_0x45cd59(0x209)]['skin'] = _0x45cd59(0x1c8), this['imgMask'][_0x45cd59(0x1bc)](0xc8, 0x96), this[_0x45cd59(0x1b9)]['mask'] = this['imgMask'], this[_0x45cd59(0x1b9)]['pos'](this[_0x45cd59(0x169)] / 0x2, this[_0x45cd59(0x16a)] / 0x2), this['imgMask']['pos'](this[_0x45cd59(0x1b9)][_0x45cd59(0x169)] / 0x2, this[_0x45cd59(0x1b9)][_0x45cd59(0x16a)] / 0x2);
                    }
                }
                let _0x94c12c = new Laya['List']();
                _0x94c12c[_0x56f4f9(0x20a)] = '\x20', _0x94c12c[_0x56f4f9(0x1ba)] = 'listAd', _0x94c12c[_0x56f4f9(0x1fd)] = _0x94c12c[_0x56f4f9(0x201)] = 0.5, _0x94c12c[_0x56f4f9(0x1bc)](0x370, 0xaa), _0x94c12c[_0x56f4f9(0x1d0)][_0x56f4f9(0x1d1)] = ![], _0x94c12c[_0x56f4f9(0x1d0)]['mouseEnabled'] = ![], _0x94c12c[_0x56f4f9(0x1d0)]['touchScrollEnable'] = ![], _0x94c12c['itemRender'] = _0x36fb96, _0x94c12c['renderHandler'] = new Laya[(_0x56f4f9(0x183))](this, this[_0x56f4f9(0x20b)]), this[_0x56f4f9(0x1e4)][_0x56f4f9(0x18c)](_0x94c12c), _0x94c12c[_0x56f4f9(0x166)] = _0x94c12c[_0x56f4f9(0x167)] = 0x0;
                let _0x464b64 = _0x57319c[_0x56f4f9(0x13a)]()[_0x56f4f9(0x1d3)]();
                if (!_0x464b64['length'])
                    return;
                let _0x1d7394 = JSON[_0x56f4f9(0xf6)](JSON['stringify'](_0x464b64));
                _0x1d7394 = _0x1d7394['concat'](_0x1d7394[_0x56f4f9(0x170)](0x0, 0x4)), _0x94c12c[_0x56f4f9(0x1d6)] = _0x1d7394, Laya['timer']['frameLoop'](0x1, this, this[_0x56f4f9(0x1d8)]), Laya[_0x56f4f9(0xe6)]['once'](0x64, this, () => {
                    _0x94c12c['refresh']();
                }), this['_scrollList'][_0x56f4f9(0xec)] = ![], this['_scrollList'][_0x56f4f9(0x1cf)] = this[_0x56f4f9(0x1cf)][_0x56f4f9(0xde)](this[_0x56f4f9(0x1e4)]);
            }
            return this[_0x56f4f9(0x1e4)];
        }
        [_0x1ffa89(0x20b)](_0x1420e9, _0x3c3380) {
            const _0x148dbe = _0x1ffa89;
            let _0x16b4ea = _0x1420e9[_0x148dbe(0x1dd)], _0x1c9dbd = _0x1420e9[_0x148dbe(0x1aa)]('img'), _0x3817ca = _0x1c9dbd[_0x148dbe(0x1c9)];
            _0x1c9dbd[_0x148dbe(0x175)] = _0x16b4ea[_0x148dbe(0x1bb)];
            this['_scrollList'][_0x148dbe(0x207)][0x3] && (_0x1420e9['size'](0xdc, 0xaa), _0x1420e9[_0x148dbe(0x1b9)][_0x148dbe(0x1bc)](0xc8, 0x96), _0x3817ca['size'](0xc8, 0x96), _0x1420e9[_0x148dbe(0xe7)](0x1, 0x1), _0x1420e9[_0x148dbe(0xe7)](0x1, 0x1), _0x3817ca[_0x148dbe(0xe7)](0x1, 0x1));
            _0x1420e9[_0x148dbe(0x1d9)](), _0x1c9dbd['offAll'](), _0x1420e9['on'](Laya['Event'][_0x148dbe(0x1da)], _0x1420e9, () => {
                const _0x1470e7 = _0x148dbe;
                _0x1420e9[_0x1470e7(0x168)] = 0x64;
            }), _0x1420e9['on'](Laya[_0x148dbe(0x18d)]['MOUSE_OUT'], _0x1420e9, () => {
                const _0xb1fdfc = _0x148dbe;
                _0x1420e9[_0xb1fdfc(0x168)] = _0x3c3380;
            }), _0x1c9dbd['on'](Laya[_0x148dbe(0x18d)][_0x148dbe(0x1da)], _0x1420e9, () => {
                const _0x20b41d = _0x148dbe;
                _0x1c9dbd[_0x20b41d(0xe7)](_0x1c9dbd[_0x20b41d(0x20c)] + 0.1, _0x1c9dbd[_0x20b41d(0x20d)] + 0.1), this['endAni']();
            }), _0x1c9dbd['on'](Laya[_0x148dbe(0x18d)]['MOUSE_OUT'], _0x1420e9, () => {
                const _0x3a5c10 = _0x148dbe;
                _0x1c9dbd[_0x3a5c10(0xe7)](_0x1c9dbd[_0x3a5c10(0x20c)] - 0.1, _0x1c9dbd[_0x3a5c10(0x20d)] - 0.1), Laya[_0x3a5c10(0xe6)][_0x3a5c10(0x1d7)](0x1, this, this[_0x3a5c10(0x1d8)]);
            }), _0x1c9dbd['on'](Laya['Event'][_0x148dbe(0x18e)], _0x1420e9, _0x50199e => {
                const _0x1a457e = _0x148dbe;
                _0x50199e[_0x1a457e(0x18f)](), _0x57319c[_0x1a457e(0x13a)]()[_0x1a457e(0x140)](_0x1a457e(0x190), 'MORE', _0x16b4ea['id']);
            });
            let _0x5c21dd = 0x1;
            this[_0x148dbe(0x1e4)][_0x148dbe(0x207)][0x0] / 0xc8 > this['_scrollList'][_0x148dbe(0x207)][0x1] / 0x96 ? _0x5c21dd = this[_0x148dbe(0x1e4)][_0x148dbe(0x207)][0x0] / 0xc8 : _0x5c21dd = this['_scrollList'][_0x148dbe(0x207)][0x1] / 0x96;
            let _0x57faad = 0xc8, _0x3b218 = 0xc8 * this[_0x148dbe(0x1e4)][_0x148dbe(0x207)][0x1] / this[_0x148dbe(0x1e4)][_0x148dbe(0x207)][0x0];
            !this['_scrollList'][_0x148dbe(0x207)][0x2] ? (_0x1420e9['img'][_0x148dbe(0x1bc)](_0x57faad, _0x3b218), _0x1420e9[_0x148dbe(0x1bc)](_0x57faad + 0x14, _0x3b218 + 0x14), _0x3817ca[_0x148dbe(0x1bc)](_0x57faad, _0x3b218)) : (_0x1420e9[_0x148dbe(0x1b9)][_0x148dbe(0x1bc)](_0x57faad * _0x5c21dd, _0x3b218 * _0x5c21dd), _0x1420e9[_0x148dbe(0x1bc)]((_0x57faad + 0x14) * _0x5c21dd, (_0x3b218 + 0x14) * _0x5c21dd), _0x3817ca[_0x148dbe(0x1bc)](_0x57faad * _0x5c21dd, _0x3b218 * _0x5c21dd)), _0x1c9dbd[_0x148dbe(0x203)](_0x1420e9['width'] / 0x2, _0x1420e9[_0x148dbe(0x16a)] / 0x2), _0x3817ca[_0x148dbe(0x203)](_0x1c9dbd['width'] / 0x2, _0x1c9dbd[_0x148dbe(0x16a)] / 0x2);
        }
        [_0x1ffa89(0x1db)]() {
            const _0xcb6c38 = _0x1ffa89;
            Laya[_0xcb6c38(0xe6)][_0xcb6c38(0x1e0)](this, this[_0xcb6c38(0x1d8)]);
        }
        ['loopList']() {
            const _0x4bc03d = _0x1ffa89;
            if (!this[_0x4bc03d(0x1e4)]) {
                this[_0x4bc03d(0x1db)]();
                return;
            }
            let _0x4a2cab = this[_0x4bc03d(0x1e4)][_0x4bc03d(0x1aa)](_0x4bc03d(0x208));
            _0x4a2cab['scrollBar'][_0x4bc03d(0x113)] += 0x1, _0x4a2cab['scrollBar'][_0x4bc03d(0x113)] >= _0x4a2cab[_0x4bc03d(0x1d0)][_0x4bc03d(0x1de)] && (_0x4a2cab[_0x4bc03d(0x1d0)]['value'] = 0x0);
        }
        ['visibleChangeFun'](_0x5cf2e1) {
            const _0x303810 = _0x1ffa89;
            if (_0x5cf2e1['name'] == _0x303810(0x1fa)) {
                let _0x41c82a = _0x5cf2e1[_0x303810(0x1aa)](_0x303810(0x205)), _0x46bd23 = _0x5cf2e1['getChildByName'](_0x303810(0x206)), _0x44a7c8 = _0x57319c[_0x303810(0x13a)]()[_0x303810(0x1d3)]();
                if (!_0x44a7c8[_0x303810(0x117)])
                    return;
                let _0x5de89e = JSON[_0x303810(0xf6)](JSON['stringify'](_0x44a7c8));
                _0x41c82a[_0x303810(0x1d9)](), _0x46bd23['offAll'](), _0x41c82a[_0x303810(0x1aa)](_0x303810(0x202))['skin'] = _0x5de89e[0x0][_0x303810(0x1bb)], _0x46bd23[_0x303810(0x1aa)]('rightAd')['skin'] = _0x5de89e[0x1][_0x303810(0x1bb)], _0x41c82a['on'](Laya['Event'][_0x303810(0x18e)], _0x5cf2e1, _0x1a0f0a => {
                    const _0x2195cf = _0x303810;
                    _0x1a0f0a[_0x2195cf(0x18f)](), _0x57319c['getInstance']()[_0x2195cf(0x140)](_0x2195cf(0x190), _0x2195cf(0x1f6), _0x5de89e[0x0]['id']);
                }), _0x46bd23['on'](Laya[_0x303810(0x18d)][_0x303810(0x18e)], _0x5cf2e1, _0x2287e6 => {
                    const _0x1a2df7 = _0x303810;
                    _0x2287e6[_0x1a2df7(0x18f)](), _0x57319c['getInstance']()[_0x1a2df7(0x140)](_0x1a2df7(0x190), 'MORE', _0x5de89e[0x1]['id']);
                });
            }
        }
        ['setSpaceX'](_0x127d77) {
            const _0x5af9b3 = _0x1ffa89;
            if (this['name'] == _0x5af9b3(0x1fa)) {
                let _0x56e443 = this[_0x5af9b3(0x1aa)]('leftAdBg'), _0x54e396 = this['getChildByName']('rightAdBg');
                _0x54e396[_0x5af9b3(0x203)](_0x56e443['width'] + _0x127d77, 0x0), this[_0x5af9b3(0x169)] = _0x56e443['width'] + _0x54e396[_0x5af9b3(0x169)] + _0x127d77, this[_0x5af9b3(0x1fe)] = _0x127d77;
            }
        }
    }
    _0x1e94b2[_0x1ffa89(0x1fb)] = null;
}());
function _0x33cc(_0x41a080, _0x52475d) {
    const _0x293aa9 = _0x293a();
    return _0x33cc = function (_0x33cc09, _0x2537a0) {
        _0x33cc09 = _0x33cc09 - 0xc1;
        let _0x1381b8 = _0x293aa9[_0x33cc09];
        return _0x1381b8;
    }, _0x33cc(_0x41a080, _0x52475d);
}
function _0x293a() {
    const _0x26e49c = [
        'volume',
        '_musicVolume',
        'AudioContext',
        'context',
        'state',
        'suspended',
        'stopAllNoLoop',
        'values',
        'source',
        'buffer',
        'loop',
        'currentTime',
        'disconnect',
        'onended',
        'setup',
        '_audioInstances',
        'instance',
        'has',
        '_stopSound',
        '_music',
        'get',
        'downloadArrayBuffer',
        'gain',
        'value',
        'WebAudioEngine',
        'playBuffer',
        'error',
        'length',
        'setThreeD',
        'threeD',
        'createSoundInstance',
        'createGain',
        'createPanner',
        'ended',
        'start',
        'createBufferSource',
        'setupPanning',
        'connect',
        'panner',
        'rolloffFactor',
        'url',
        'set',
        'decodeAudioData',
        'Decode\x20error.',
        'open',
        'GET',
        'responseType',
        'arraybuffer',
        'status',
        'response',
        'onerror',
        'no\x20response',
        'ontimeout',
        'onabort',
        'canNavigateActive_',
        'screen_',
        'action_',
        'to_',
        'prompt_',
        'initialized_',
        'needStartUp',
        'initData',
        'getInstance',
        '_instance',
        'layaCanvas',
        'mouseup',
        'touchend',
        'onNavigate_',
        'navigate',
        'getStorageSync',
        'LocalStorage',
        'getItem',
        'setStorageSync',
        'setItem',
        'stringify',
        'onblur',
        'showInterstitial',
        'renderingEnabled',
        'focus',
        'onfocus',
        'showReward',
        'No\x20Available\x20Video',
        'prompt',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'initList',
        'createElement',
        'cssText',
        'overflow:\x20hidden;word-break:\x20break-all;word-wrap:\x20break-word;font-family:siyuan;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;',
        'body',
        'appendChild',
        'designHeight',
        'innerHeight',
        'style',
        'innerHTML',
        'display',
        'inline',
        'webkitTransition',
        's\x20ease-in,\x20opacity\x20',
        's\x20ease-in',
        'none',
        'prompt0',
        'labelInfo',
        'valign',
        '#000000',
        '#ffffff',
        'fontSize',
        'centerX',
        'centerY',
        'zOrder',
        'width',
        'height',
        'wordWrap',
        'clear',
        'clearLabel',
        'once',
        'forgames',
        'slice',
        'floor',
        'random',
        'createLogo',
        'Image',
        'skin',
        'yad.png',
        'yad',
        'yadstartup',
        'showSplash',
        'createNoVideo',
        'createLoading',
        'then',
        'playSound',
        'SoundManager',
        'stopSound',
        'loader',
        'load',
        'cnf.json',
        'Handler',
        'create',
        'startupByYad',
        'getAdPlatformType',
        'scrollList',
        'box_adTwo',
        'en_GAMEDISTRIBUTION',
        'en_XIAOMI',
        'removeSelf',
        'addChild',
        'Event',
        'MOUSE_DOWN',
        'stopPropagation',
        'GAME',
        'LOGO',
        'showBanner',
        'hideBanner',
        'hideSplash',
        'cargamesstartup',
        'startupByCargames',
        'startup',
        'Prefab',
        'Script',
        'Box',
        'laya/pages/Prefab/NoVideo.prefab',
        'Box(NoVideo)',
        'spr_tip',
        'Rect',
        'Label',
        'middle',
        'VIDEO',
        'Label(NoVideo)',
        'center',
        'Click\x20anywhere\x20to\x20close',
        'owner',
        'top',
        'bottom',
        'left',
        'right',
        'getChildByName',
        'CLICK',
        'closePer',
        'closeNoVideo',
        'json',
        'noVideoPer',
        'addComponent',
        'showNoVideo',
        'Box,box_clickLayer',
        'box_clickLayer',
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
        'List,scrollAdList',
        'laya/pages/prefab/scrollList.prefab',
        'scrollAdList',
        'di2.png',
        '30,\x2030,\x2030,\x2030',
        'img_ListBg',
        'render',
        'Box(scrollList)',
        'Image,thumb',
        'di1.png',
        'mask',
        'ani1',
        'scaleNum',
        'sizeTran',
        'renderHandler',
        'clearRes',
        'setSize',
        'scrollBar',
        'mouseWheelEnable',
        'touchScrollEnable',
        'getForgames',
        'listArray',
        'concat',
        'array',
        'frameLoop',
        'loopList',
        'offAll',
        'MOUSE_OVER',
        'endAni',
        'MOUSE_OUT',
        'dataSource',
        'max',
        'Tween',
        'clearAll',
        'checkPoints',
        'onDisable',
        'imgArr',
        '_scrollList',
        'getComponent',
        'Box,box_adTwo',
        'laya/pages/prefab/box_adTwo.prefab',
        'Image,img_ad0',
        'img_ad0',
        'img_adImg',
        '30,30,30,30',
        'Image(box_adTwo)',
        'Image,img_ad1',
        'img_ad1',
        'Image,img_adImg',
        'spaceNum',
        'onEnable',
        'img_ad0Ad',
        'img_ad1Ad',
        'img_ad0AdMask',
        'img_ad1AdMask',
        'MORE',
        'setSpaceX',
        '_box_adTwo',
        'platform',
        '_box_adTwo0',
        '_inst',
        'inst',
        'anchorX',
        'spaceXNum',
        'leftAdMask',
        'sizeGrid',
        'anchorY',
        'leftAd',
        'pos',
        'rightAd',
        'leftAdBg',
        'rightAdBg',
        'sizeArr',
        'listAd',
        'imgMask',
        'hScrollBarSkin',
        'renderADHandler',
        'scaleX',
        'scaleY',
        '114964VukTWw',
        '2CZTXuY',
        '2086230rzeWnB',
        '3249120ncZWBf',
        '4511490hZAKHp',
        '12LLyGSw',
        '1206744CzwauR',
        '1634536hMiqpo',
        '130266jsJeSx',
        '10YVWWaq',
        'beEnabled',
        'isMuted',
        'bePauseSound',
        'bePauseMusic',
        'tryToResumeIntervalId',
        'isVisibilityMuted',
        'adShowing',
        'init',
        'musicAudio',
        'soundAudio',
        'document',
        'addEventListener',
        'touchstart',
        'tryToResumeAudioContext',
        'visibilitychange',
        'onVisibilitychange',
        'getContext',
        'onstatechange',
        'onMusicStatechange',
        'bind',
        'onSoundStatechange',
        'isFocusOn',
        'log',
        'Web\x20Audio\x20API',
        'visibilityState',
        'hidden',
        'muted',
        'timer',
        'scale',
        'stage',
        'updateTimer',
        'pause',
        'physicsTimer',
        'visible',
        'onDBInstanceMuted',
        'isSuspend',
        'resume',
        'removeEventListener',
        'mousedown',
        'suspend',
        'pauseSound',
        'pauseMusic',
        'stopAll',
        'parse',
        'playMusic',
        'stopMusic',
        'stop',
        'musicVolume',
        'play'
    ];
    _0x293a = function () {
        return _0x26e49c;
    };
    return _0x293a();
}