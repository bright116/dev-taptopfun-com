function _0x2d3f(_0x48a063, _0x131a3) {
    const _0x5ea2cd = _0x5ea2();
    return _0x2d3f = function (_0x2d3fdf, _0x5b1bfd) {
        _0x2d3fdf = _0x2d3fdf - 0x9d;
        let _0x5d9346 = _0x5ea2cd[_0x2d3fdf];
        return _0x5d9346;
    }, _0x2d3f(_0x48a063, _0x131a3);
}
(function (_0x573deb, _0x282499) {
    const _0x50b123 = _0x2d3f, _0x1cd623 = _0x573deb();
    while (!![]) {
        try {
            const _0x4309fd = -parseInt(_0x50b123(0x9d)) / 0x1 + -parseInt(_0x50b123(0x9e)) / 0x2 * (-parseInt(_0x50b123(0x9f)) / 0x3) + parseInt(_0x50b123(0xa0)) / 0x4 + -parseInt(_0x50b123(0xa1)) / 0x5 + parseInt(_0x50b123(0xa2)) / 0x6 + parseInt(_0x50b123(0xa3)) / 0x7 * (parseInt(_0x50b123(0xa4)) / 0x8) + -parseInt(_0x50b123(0xa5)) / 0x9;
            if (_0x4309fd === _0x282499)
                break;
            else
                _0x1cd623['push'](_0x1cd623['shift']());
        } catch (_0x3d6181) {
            _0x1cd623['push'](_0x1cd623['shift']());
        }
    }
}(_0x5ea2, 0xbc122), !function () {
    const _0x938c9 = _0x2d3f;
    class _0x44bacc {
        constructor() {
            const _0x9acca0 = _0x2d3f;
            this[_0x9acca0(0xa6)] = ![], this[_0x9acca0(0xa7)] = ![], this['bePauseSound'] = ![], this[_0x9acca0(0xa8)] = ![], this[_0x9acca0(0xa9)] = -0x1, this['isVisibilityMuted'] = ![], this[_0x9acca0(0xaa)] = ![];
        }
        [_0x938c9(0xab)]() {
            return new Promise((_0x558697, _0x22b04e) => {
                const _0x1cb620 = _0x2d3f;
                try {
                    this[_0x1cb620(0xac)] = new _0x309825(), this[_0x1cb620(0xad)] = new _0x309825(), window[_0x1cb620(0xae)][_0x1cb620(0xaf)](_0x1cb620(0xb0), this[_0x1cb620(0xb1)]['bind'](this), !![]), window[_0x1cb620(0xae)][_0x1cb620(0xaf)](_0x1cb620(0xb2), this[_0x1cb620(0xb1)]['bind'](this), !![]), window['document']['addEventListener'](_0x1cb620(0xb3), this['onVisibilitychange'][_0x1cb620(0xb4)](this)), this['tryToResumeIntervalId'] = setInterval(this['tryToResumeAudioContext'][_0x1cb620(0xb4)](this), 0xc8), this[_0x1cb620(0xac)][_0x1cb620(0xb5)]()[_0x1cb620(0xb6)] = this[_0x1cb620(0xb7)][_0x1cb620(0xb4)](this), this[_0x1cb620(0xad)]['getContext']()['onstatechange'] = this[_0x1cb620(0xb8)][_0x1cb620(0xb4)](this), this[_0x1cb620(0xa6)] = !![], this[_0x1cb620(0xb9)] = 0x3c, _0x558697(!![]);
                } catch (_0x2b3af2) {
                    console[_0x1cb620(0xba)]('Web\x20Audio\x20API', _0x2b3af2), alert(_0x1cb620(0xbb)), _0x558697(![]);
                }
            });
        }
        [_0x938c9(0xbc)]() {
            const _0x267651 = _0x938c9;
            if (window['WebAudioEngine'][_0x267651(0xaa)])
                return;
            if (document[_0x267651(0xbd)] == _0x267651(0xbe))
                !this[_0x267651(0xa7)] && (this['isVisibilityMuted'] = this[_0x267651(0xbf)] = !![]), Laya[_0x267651(0xc0)][_0x267651(0xc1)] = 0x0, Laya['stage']['renderingEnabled'] = ![], Laya['updateTimer'] && Laya[_0x267651(0xc2)]['pause'](), Laya[_0x267651(0xc3)] && Laya[_0x267651(0xc3)][_0x267651(0xc4)]();
            else
                document[_0x267651(0xbd)] == 'visible' && (this['isVisibilityMuted'] && (this['isVisibilityMuted'] = this[_0x267651(0xbf)] = ![]), Laya['timer']['scale'] = 0x1, Laya[_0x267651(0xc5)][_0x267651(0xc6)] = !![], Laya['updateTimer'] && Laya['updateTimer'][_0x267651(0xc7)](), Laya[_0x267651(0xc3)] && Laya[_0x267651(0xc3)][_0x267651(0xc7)]());
        }
        [_0x938c9(0xc8)]() {
        }
        ['tryToResumeAudioContext']() {
            const _0x22d358 = _0x938c9;
            if (this[_0x22d358(0xa7)])
                return;
            this['musicAudio']['isSuspend']() && !this[_0x22d358(0xa8)] && this[_0x22d358(0xac)]['resume'](), this[_0x22d358(0xad)][_0x22d358(0xc9)]() && !this[_0x22d358(0xca)] && this[_0x22d358(0xad)]['resume'](), (!this[_0x22d358(0xac)][_0x22d358(0xc9)]() || !this[_0x22d358(0xad)][_0x22d358(0xc9)]()) && (window[_0x22d358(0xae)][_0x22d358(0xcb)](_0x22d358(0xb0), this['tryToResumeAudioContext'][_0x22d358(0xb4)](this), !![]), window['document']['removeEventListener'](_0x22d358(0xb2), this[_0x22d358(0xb1)][_0x22d358(0xb4)](this), !![]), clearInterval(this[_0x22d358(0xa9)]), this[_0x22d358(0xa9)] = -0x1);
        }
        [_0x938c9(0xb7)]() {
            const _0x2bb624 = _0x938c9;
            this[_0x2bb624(0xac)][_0x2bb624(0xc9)]() && !this[_0x2bb624(0xa7)] && !this[_0x2bb624(0xa8)] && this[_0x2bb624(0xa9)] === -0x1 && (window[_0x2bb624(0xae)][_0x2bb624(0xaf)](_0x2bb624(0xb0), this[_0x2bb624(0xb1)][_0x2bb624(0xb4)](this), !![]), window[_0x2bb624(0xae)][_0x2bb624(0xaf)]('touchstart', this['tryToResumeAudioContext'][_0x2bb624(0xb4)](this), !![]), this[_0x2bb624(0xa9)] = setInterval(this[_0x2bb624(0xb1)][_0x2bb624(0xb4)](this), 0xc8));
        }
        [_0x938c9(0xb8)]() {
            const _0xbc4696 = _0x938c9;
            this['soundAudio'][_0xbc4696(0xc9)]() && !this['isMuted'] && !this['bePauseSound'] && this[_0xbc4696(0xa9)] === -0x1 && (window[_0xbc4696(0xae)][_0xbc4696(0xaf)](_0xbc4696(0xb0), this['tryToResumeAudioContext'][_0xbc4696(0xb4)](this), !![]), window[_0xbc4696(0xae)][_0xbc4696(0xaf)](_0xbc4696(0xb2), this[_0xbc4696(0xb1)][_0xbc4696(0xb4)](this), !![]), this['tryToResumeIntervalId'] = setInterval(this[_0xbc4696(0xb1)][_0xbc4696(0xb4)](this), 0xc8));
        }
        set [_0x938c9(0xbf)](_0xaec196) {
            const _0x4cf540 = _0x938c9;
            this[_0x4cf540(0xa7)] = _0xaec196, this['isMuted'] ? (this['musicAudio'][_0x4cf540(0xcc)](), this['soundAudio'][_0x4cf540(0xcc)]()) : this[_0x4cf540(0xa9)] == -0x1 && (this[_0x4cf540(0xa9)] = setInterval(this[_0x4cf540(0xb1)][_0x4cf540(0xb4)](this), 0xc8));
        }
        get ['muted']() {
            const _0x27b3a0 = _0x938c9;
            return this[_0x27b3a0(0xa7)];
        }
        set [_0x938c9(0xc4)](_0x2e0b05) {
            const _0x5c210d = _0x938c9;
            this['pauseSound'] = _0x2e0b05, this[_0x5c210d(0xcd)] = _0x2e0b05, !_0x2e0b05 && this['soundAudio'][_0x5c210d(0xce)]();
        }
        get ['pause']() {
            const _0x31e3d7 = _0x938c9;
            return this[_0x31e3d7(0xcf)] || this[_0x31e3d7(0xcd)];
        }
        set [_0x938c9(0xcf)](_0x4bcfd5) {
            const _0x5428a6 = _0x938c9;
            this[_0x5428a6(0xca)] = _0x4bcfd5;
            if (this[_0x5428a6(0xca)])
                this[_0x5428a6(0xad)][_0x5428a6(0xcc)]();
            else {
                if (this[_0x5428a6(0xa7)])
                    return;
                this[_0x5428a6(0xad)][_0x5428a6(0xc7)]();
            }
        }
        get [_0x938c9(0xcf)]() {
            const _0x40c5e7 = _0x938c9;
            return this[_0x40c5e7(0xca)];
        }
        get [_0x938c9(0xcd)]() {
            const _0xad65aa = _0x938c9;
            return this[_0xad65aa(0xa8)];
        }
        set [_0x938c9(0xcd)](_0x29a31e) {
            const _0x524383 = _0x938c9;
            this[_0x524383(0xa8)] = _0x29a31e;
            if (this[_0x524383(0xa8)])
                this[_0x524383(0xac)]['suspend']();
            else {
                if (this[_0x524383(0xa7)])
                    return;
                this[_0x524383(0xac)][_0x524383(0xc7)]();
            }
        }
        [_0x938c9(0xd0)]() {
            const _0x3027b6 = _0x938c9;
            this[_0x3027b6(0xac)]['stopAll'](), this['soundAudio'][_0x3027b6(0xd0)]();
        }
        [_0x938c9(0xd1)](_0x1f9468, _0x2ebfb4, _0x2863f5) {
            const _0x4f1017 = _0x938c9;
            this[_0x4f1017(0xad)][_0x4f1017(0xd1)](_0x1f9468, _0x2ebfb4);
        }
        [_0x938c9(0xd2)](_0x43e670) {
            const _0x253396 = _0x938c9;
            this[_0x253396(0xac)][_0x253396(0xd0)](), this[_0x253396(0xac)][_0x253396(0xd2)](_0x43e670);
        }
        [_0x938c9(0xd3)]() {
            const _0x105d0c = _0x938c9;
            this['musicAudio'][_0x105d0c(0xd0)]();
        }
        [_0x938c9(0xd4)](_0x29042b) {
            const _0x6b4b69 = _0x938c9;
            this[_0x6b4b69(0xad)][_0x6b4b69(0xd5)](_0x29042b);
        }
        set [_0x938c9(0xb9)](_0x3c26a3) {
            const _0x59a5c7 = _0x938c9;
            this['musicAudio'][_0x59a5c7(0xb9)] = _0x3c26a3;
        }
        get [_0x938c9(0xb9)]() {
            return this['musicAudio']['musicVolume'];
        }
        [_0x938c9(0xd6)](_0x1cce63, _0x22a6b6 = ![], _0x30fc08 = ![]) {
            const _0x8d33a4 = _0x938c9;
            if (!this['beEnabled'])
                return;
            this[_0x8d33a4(0xad)][_0x8d33a4(0xd7)](_0x1cce63, _0x22a6b6, _0x30fc08);
        }
    }
    class _0x43561c {
    }
    class _0x309825 {
        constructor() {
            const _0x5c737f = _0x938c9;
            this[_0x5c737f(0xd8)] = 0x64, this[_0x5c737f(0xd9)] = new Map(), this[_0x5c737f(0xda)] = 0x64, window[_0x5c737f(0xdb)] = window[_0x5c737f(0xdb)] || window[_0x5c737f(0xdc)], this['context'] = new AudioContext();
        }
        [_0x938c9(0xb5)]() {
            const _0x5a5bc9 = _0x938c9;
            return this[_0x5a5bc9(0xdd)];
        }
        [_0x938c9(0xc9)]() {
            const _0x13c330 = _0x938c9;
            return this[_0x13c330(0xdd)][_0x13c330(0xde)] === 'suspended';
        }
        [_0x938c9(0xcc)]() {
            const _0x3e437e = _0x938c9;
            this['context'][_0x3e437e(0xcc)]();
        }
        [_0x938c9(0xc7)]() {
            const _0x5343ee = _0x938c9;
            this[_0x5343ee(0xdd)][_0x5343ee(0xc7)]();
        }
        [_0x938c9(0xce)]() {
            const _0x37ced9 = _0x938c9, _0x3a9dd9 = this[_0x37ced9(0xd9)]['values']();
            for (const _0x230619 of _0x3a9dd9) {
                const _0x269688 = _0x230619[_0x37ced9(0xdf)];
                if (_0x269688[_0x37ced9(0xe0)][_0x37ced9(0xe1)] && !_0x269688[_0x37ced9(0xe0)][_0x37ced9(0xe2)]) {
                    try {
                        _0x269688[_0x37ced9(0xe0)][_0x37ced9(0xd5)](this[_0x37ced9(0xdd)][_0x37ced9(0xe3)]);
                    } catch (_0x20bd7e) {
                        _0x269688[_0x37ced9(0xe0)][_0x37ced9(0xe4)]();
                    }
                    _0x269688[_0x37ced9(0xe0)][_0x37ced9(0xe5)] = function () {
                    }, _0x269688[_0x37ced9(0xe6)]();
                }
            }
        }
        [_0x938c9(0xd0)]() {
            const _0x35d9bd = _0x938c9, _0x3729d4 = this[_0x35d9bd(0xd9)][_0x35d9bd(0xe7)]();
            for (const _0x5bff2a of _0x3729d4) {
                const _0x5ab143 = _0x5bff2a[_0x35d9bd(0xdf)];
                if (_0x5ab143[_0x35d9bd(0xe0)][_0x35d9bd(0xe1)]) {
                    try {
                        _0x5ab143[_0x35d9bd(0xe0)][_0x35d9bd(0xd5)](this[_0x35d9bd(0xdd)][_0x35d9bd(0xe3)]);
                    } catch (_0x53cd00) {
                        _0x5ab143['source']['disconnect']();
                    }
                    _0x5ab143[_0x35d9bd(0xe0)][_0x35d9bd(0xe5)] = function () {
                    }, _0x5ab143[_0x35d9bd(0xe6)]();
                }
            }
        }
        [_0x938c9(0xd5)](_0x1ee86e) {
            const _0x114b6c = _0x938c9;
            if (this[_0x114b6c(0xd9)][_0x114b6c(0xe8)](_0x1ee86e)) {
                const _0x434533 = this[_0x114b6c(0xd9)][_0x114b6c(0xe9)](_0x1ee86e);
                this['_stopSound'](_0x434533);
            }
        }
        [_0x938c9(0xea)](_0x3b6c33) {
            const _0x3d2eb5 = _0x938c9, _0x309a19 = _0x3b6c33[_0x3d2eb5(0xdf)];
            if (_0x309a19[_0x3d2eb5(0xe0)]['buffer']) {
                try {
                    _0x309a19[_0x3d2eb5(0xe0)][_0x3d2eb5(0xd5)](this[_0x3d2eb5(0xdd)][_0x3d2eb5(0xe3)]);
                } catch (_0x393f14) {
                    _0x309a19['source'][_0x3d2eb5(0xe4)]();
                }
                _0x309a19[_0x3d2eb5(0xe0)][_0x3d2eb5(0xe5)] = function () {
                }, _0x309a19['setup']();
            }
        }
        [_0x938c9(0xd2)](_0x331f4a) {
            const _0x453a2b = _0x938c9;
            this[_0x453a2b(0xeb)] && this[_0x453a2b(0xea)](this[_0x453a2b(0xeb)]), this[_0x453a2b(0xd9)][_0x453a2b(0xe8)](_0x331f4a) ? (this[_0x453a2b(0xeb)] = this[_0x453a2b(0xd9)][_0x453a2b(0xe9)](_0x331f4a), this[_0x453a2b(0xb9)] = this[_0x453a2b(0xda)], this[_0x453a2b(0xd7)](_0x331f4a, !![])) : this[_0x453a2b(0xec)](_0x331f4a, () => {
                const _0x32410a = _0x453a2b;
                this[_0x32410a(0xd2)](_0x331f4a);
            });
        }
        [_0x938c9(0xd3)]() {
            const _0x5249b2 = _0x938c9;
            this[_0x5249b2(0xeb)] && this[_0x5249b2(0xea)](this[_0x5249b2(0xeb)]);
        }
        set [_0x938c9(0xb9)](_0xcce664) {
            const _0x45c011 = _0x938c9;
            this[_0x45c011(0xda)] = _0xcce664, this['_music'] && (this['_music'][_0x45c011(0xdf)][_0x45c011(0xed)]['gain']['value'] = this[_0x45c011(0xda)] / 0x64);
        }
        get ['musicVolume']() {
            const _0x2983dc = _0x938c9;
            return this[_0x2983dc(0xda)];
        }
        [_0x938c9(0xd7)](_0x1596da, _0x38bee9 = ![], _0x4c36a6 = ![]) {
            const _0x4a38b9 = _0x938c9;
            if (this[_0x4a38b9(0xd9)][_0x4a38b9(0xe8)](_0x1596da)) {
                const _0x4a9215 = this[_0x4a38b9(0xd9)][_0x4a38b9(0xe9)](_0x1596da), _0x3676bd = _0x4a9215['instance'];
                if (_0x4c36a6 && !_0x3676bd[_0x4a38b9(0xee)])
                    return;
                this['stop'](_0x1596da);
                if (_0x4a9215[_0x4a38b9(0xe1)])
                    try {
                        if (window[_0x4a38b9(0xef)]['pause'] && !_0x38bee9)
                            return;
                        _0x3676bd[_0x4a38b9(0xf0)](this[_0x4a38b9(0xdd)][_0x4a38b9(0xe3)], _0x4a9215[_0x4a38b9(0xe1)]), _0x3676bd['source']['loop'] = _0x38bee9;
                    } catch (_0x5c3836) {
                        console[_0x4a38b9(0xf1)](_0x4a38b9(0xf2) + _0x5c3836);
                    }
            } else
                this[_0x4a38b9(0xec)](_0x1596da, () => {
                    const _0x516601 = _0x4a38b9;
                    this[_0x516601(0xd7)](_0x1596da, _0x38bee9);
                });
        }
        [_0x938c9(0xf3)](_0x18e9f0, _0x4b7a23) {
            const _0x17ccb4 = _0x938c9;
            let _0x5843c7 = _0x18e9f0[_0x17ccb4(0xf4)], _0x485b8d = 0x0;
            for (let _0x1cce04 = 0x0; _0x1cce04 < _0x18e9f0[_0x17ccb4(0xf4)]; _0x1cce04++) {
                const _0x4f829c = _0x18e9f0[_0x1cce04];
                this[_0x17ccb4(0xec)](_0x4f829c, () => {
                    _0x485b8d++, _0x485b8d >= _0x5843c7 && (_0x4b7a23 && _0x4b7a23());
                });
            }
        }
        [_0x938c9(0xf5)](_0xbece25) {
            const _0x24ab54 = _0x938c9;
            if (this[_0x24ab54(0xd9)][_0x24ab54(0xe8)](_0xbece25)) {
                const _0x3df713 = this[_0x24ab54(0xd9)][_0x24ab54(0xe9)](_0xbece25);
                _0x3df713[_0x24ab54(0xdf)][_0x24ab54(0xf6)] = !![];
            }
        }
        ['createSoundInstance']() {
            const _0x245ff7 = _0x938c9;
            let _0x138f90 = this[_0x245ff7(0xdd)];
            const _0x572838 = {
                'gain': _0x138f90['createGain'](),
                'panner': _0x138f90[_0x245ff7(0xf7)](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x5c928c, _0x2cab40, _0x2dc49a) {
                    const _0x38a75c = _0x245ff7;
                    this[_0x38a75c(0xe0)][_0x38a75c(0xe1)] = _0x2cab40;
                    var _0x578a4d = this;
                    this[_0x38a75c(0xee)] = ![], this[_0x38a75c(0xe0)][_0x38a75c(0xe5)] = function () {
                        const _0x2a778f = _0x38a75c;
                        _0x578a4d['setup'](), _0x578a4d[_0x2a778f(0xee)] = !![];
                    }, this[_0x38a75c(0xe0)]['start'](_0x5c928c, _0x2dc49a);
                },
                'setup': function () {
                    const _0x4016b7 = _0x245ff7;
                    this[_0x4016b7(0xe0)] = _0x138f90[_0x4016b7(0xf8)](), this['setupPanning']();
                },
                'setupPanning': function () {
                    const _0x3c60f5 = _0x245ff7;
                    this[_0x3c60f5(0xf6)] ? (this[_0x3c60f5(0xe0)]['disconnect'](), this[_0x3c60f5(0xe0)]['connect'](this['panner']), this[_0x3c60f5(0xf9)][_0x3c60f5(0xfa)](this['gain'])) : (this[_0x3c60f5(0xf9)][_0x3c60f5(0xe4)](), this['source'][_0x3c60f5(0xfa)](this[_0x3c60f5(0xed)]));
                }
            };
            return _0x572838[_0x245ff7(0xf9)][_0x245ff7(0xfb)] = 0x0, _0x572838[_0x245ff7(0xed)]['connect'](this[_0x245ff7(0xdd)][_0x245ff7(0xfc)]), _0x572838[_0x245ff7(0xe6)](), _0x572838;
        }
        [_0x938c9(0xd1)](_0x5f4614, _0x116e1f, _0x2d5126) {
            const _0x57388f = _0x938c9, _0x4d3c77 = new _0x43561c();
            _0x4d3c77[_0x57388f(0xfd)] = _0x5f4614, _0x4d3c77[_0x57388f(0xdf)] = this[_0x57388f(0xfe)](), this[_0x57388f(0xd9)][_0x57388f(0xff)](_0x5f4614, _0x4d3c77), this[_0x57388f(0xdd)][_0x57388f(0x100)](_0x116e1f, function (_0xf23501) {
                const _0x2d1eb1 = _0x57388f;
                _0x4d3c77[_0x2d1eb1(0xe1)] = _0xf23501, _0x2d5126 && _0x2d5126();
            }, function (_0x4e4c80) {
                const _0x1b3fe6 = _0x57388f;
                _0x4d3c77[_0x1b3fe6(0xf1)] = !![], _0x2d5126 && _0x2d5126(), console[_0x1b3fe6(0xba)](_0x1b3fe6(0x101) + _0x4d3c77[_0x1b3fe6(0xfd)]);
            });
        }
        [_0x938c9(0xec)](_0x3c70cc, _0x35ff6b) {
            const _0x55d560 = _0x938c9;
            if (this[_0x55d560(0xd9)]['has'](_0x3c70cc)) {
                _0x35ff6b && _0x35ff6b();
                return;
            }
            const _0xaeb285 = this;
            var _0x48c815 = new XMLHttpRequest();
            _0x48c815[_0x55d560(0x102)](_0x55d560(0x103), _0x3c70cc, !![]), _0x48c815[_0x55d560(0x104)] = _0x55d560(0x105), _0x48c815[_0x55d560(0x106)] = function () {
                const _0x2ce732 = _0x55d560;
                if (_0x48c815[_0x2ce732(0x107)] === 0xc8 || _0x48c815[_0x2ce732(0x107)] === 0x0)
                    _0xaeb285[_0x2ce732(0xd1)](_0x3c70cc, _0x48c815[_0x2ce732(0x108)], _0x35ff6b);
                else
                    throw _0x2ce732(0x109);
            }, _0x48c815[_0x55d560(0x10a)] = function () {
                const _0x34e354 = _0x55d560;
                _0x35ff6b && _0x35ff6b();
                throw _0x34e354(0x109);
            }, _0x48c815[_0x55d560(0x10b)] = function () {
                _0x35ff6b && _0x35ff6b();
            }, _0x48c815['onabort'] = function () {
                _0x35ff6b && _0x35ff6b();
            }, _0x48c815['send'](null);
        }
    }
    const _0x231429 = window[_0x938c9(0xef)] = new _0x44bacc();
    class _0x2654d8 {
        constructor() {
            const _0x2371c8 = _0x938c9;
            this['canNavigateActive_'] = ![], this['screen_'] = '', this[_0x2371c8(0x10c)] = '', this[_0x2371c8(0x10d)] = '', this['prompt_'] = null, this[_0x2371c8(0x10e)] = ![], this[_0x2371c8(0x10f)] = !![], this[_0x2371c8(0x110)]();
        }
        static [_0x938c9(0x111)]() {
            const _0x2bf11d = _0x938c9;
            return !this['_instance'] && (this['_instance'] = new _0x2654d8()), this[_0x2bf11d(0x112)];
        }
        [_0x938c9(0x110)]() {
            const _0x4e89fb = _0x938c9;
            let _0x669f4b = document['getElementById'](_0x4e89fb(0x113));
            _0x669f4b && (_0x669f4b['addEventListener']('mouseup', this[_0x4e89fb(0x114)][_0x4e89fb(0xb4)](this)), _0x669f4b[_0x4e89fb(0xaf)](_0x4e89fb(0x115), this[_0x4e89fb(0x114)][_0x4e89fb(0xb4)](this)));
        }
        [_0x938c9(0x114)]() {
            const _0x18400f = _0x938c9;
            this['canNavigateActive_'] && YYGGames['navigate'](this[_0x18400f(0x116)], this[_0x18400f(0x10c)], this[_0x18400f(0x10d)]), this[_0x18400f(0x117)] = ![];
        }
        [_0x938c9(0x118)](_0x2f0255) {
            const _0xc05259 = _0x938c9;
            let _0x44eced = null;
            try {
                let _0x3884f4 = Laya[_0xc05259(0x119)][_0xc05259(0x11a)](_0x2f0255);
                _0x44eced = JSON['parse'](_0x3884f4);
            } catch (_0x403fa6) {
            }
            return _0x44eced;
        }
        ['setStorageSync'](_0x53e17f, _0x1a6c89) {
            const _0x157cde = _0x938c9;
            return Laya[_0x157cde(0x119)][_0x157cde(0x11b)](_0x53e17f, JSON['stringify'](_0x1a6c89));
        }
        [_0x938c9(0x11c)](_0x15601e, _0x23b37d, _0x43645a) {
            const _0x154fea = _0x938c9;
            this['canNavigateActive_'] === ![] && (this[_0x154fea(0x116)] = _0x15601e, this[_0x154fea(0x10c)] = _0x23b37d, this['to_'] = _0x43645a, this[_0x154fea(0x117)] = !![]);
        }
        [_0x938c9(0x11d)]() {
            const _0x76703d = _0x938c9;
            _0x231429[_0x76703d(0xbf)] = !![];
        }
        [_0x938c9(0x11e)]() {
            const _0x5bb328 = _0x938c9;
            _0x231429[_0x5bb328(0xbf)] = ![];
        }
        ['showInterstitial'](_0x1ea2a4) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            const _0x5d0512 = _0x938c9;
            const _0xfc1211 = _0x5d0512;
            window[_0xfc1211(0x120)](), this[_0xfc1211(0x11e)](), window[_0xfc1211(0xef)][_0xfc1211(0xaa)] = ![], Laya['timer'][_0xfc1211(0xc1)] = 0x1, Laya[_0xfc1211(0xc5)][_0xfc1211(0xc6)] = !![], Laya[_0xfc1211(0xc2)] && Laya['updateTimer'][_0xfc1211(0xc7)](), Laya[_0xfc1211(0xc3)] && Laya[_0xfc1211(0xc3)]['resume'](), _0x1ea2a4 && _0x1ea2a4();
            return;
            // const _0x5d0512 = _0x938c9;
            // console[_0x5d0512(0xba)]('插屏广告'), YYGGames[_0x5d0512(0x11f)]({
            //     'beforeShowAd': () => {
            //         const _0x4d5dea = _0x5d0512;
            //         window[_0x4d5dea(0xef)][_0x4d5dea(0xaa)] = !![], this['onblur'](), Laya[_0x4d5dea(0xc0)][_0x4d5dea(0xc1)] = 0x0, Laya['stage'][_0x4d5dea(0xc6)] = ![], Laya[_0x4d5dea(0xc2)] && Laya[_0x4d5dea(0xc2)][_0x4d5dea(0xc4)](), Laya['physicsTimer'] && Laya[_0x4d5dea(0xc3)]['pause']();
            //     },
            //     'afterShowAd': () => {
            //         const _0xfc1211 = _0x5d0512;
            //         window[_0xfc1211(0x120)](), this[_0xfc1211(0x11e)](), window[_0xfc1211(0xef)][_0xfc1211(0xaa)] = ![], Laya['timer'][_0xfc1211(0xc1)] = 0x1, Laya[_0xfc1211(0xc5)][_0xfc1211(0xc6)] = !![], Laya[_0xfc1211(0xc2)] && Laya['updateTimer'][_0xfc1211(0xc7)](), Laya[_0xfc1211(0xc3)] && Laya[_0xfc1211(0xc3)]['resume'](), _0x1ea2a4 && _0x1ea2a4();
            //     }
            // });
        }
        ['showReward'](_0x4debe4, _0x223c7e, _0x1893e4) {
            const _0x49e846 = _0x938c9;
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    const _0x18176b = _0x49e846;
                    window[_0x18176b(0x120)](), this[_0x18176b(0x11e)](), window[_0x18176b(0xef)][_0x18176b(0xaa)] = ![], Laya[_0x18176b(0xc0)][_0x18176b(0xc1)] = 0x1, Laya[_0x18176b(0xc5)]['renderingEnabled'] = !![], Laya[_0x18176b(0xc2)] && Laya['updateTimer'][_0x18176b(0xc7)](), Laya[_0x18176b(0xc3)] && Laya['physicsTimer'][_0x18176b(0xc7)]();
                    _0x4debe4 && _0x4debe4(), _0x4debe4 = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                    const _0x4c32f3 = _0x49e846;
                    _0x223c7e && (_0x223c7e(), _0x223c7e = null), this[_0x4c32f3(0x122)](_0x4c32f3(0x125));
                }
            );
            return;
            // console[_0x49e846(0xba)]('激励广告');
            // if (!YYGGames[_0x49e846(0x121)]()) {
            //     this[_0x49e846(0x122)](_0x49e846(0x123)), _0x1893e4 && _0x1893e4();
            //     return;
            // }
            // YYGGames[_0x49e846(0x124)]({
            //     'beforeShowAd': () => {
            //         const _0x4ba91c = _0x49e846;
            //         window[_0x4ba91c(0xef)]['adShowing'] = !![], this[_0x4ba91c(0x11d)](), Laya[_0x4ba91c(0xc0)][_0x4ba91c(0xc1)] = 0x0, Laya[_0x4ba91c(0xc5)][_0x4ba91c(0xc6)] = ![], Laya[_0x4ba91c(0xc2)] && Laya['updateTimer'][_0x4ba91c(0xc4)](), Laya['physicsTimer'] && Laya[_0x4ba91c(0xc3)][_0x4ba91c(0xc4)]();
            //     },
            //     'afterShowAd': () => {
            //         const _0x18176b = _0x49e846;
            //         window[_0x18176b(0x120)](), this[_0x18176b(0x11e)](), window[_0x18176b(0xef)][_0x18176b(0xaa)] = ![], Laya[_0x18176b(0xc0)][_0x18176b(0xc1)] = 0x1, Laya[_0x18176b(0xc5)]['renderingEnabled'] = !![], Laya[_0x18176b(0xc2)] && Laya['updateTimer'][_0x18176b(0xc7)](), Laya[_0x18176b(0xc3)] && Laya['physicsTimer'][_0x18176b(0xc7)]();
            //     },
            //     'rewardComplete': () => {
            //         _0x4debe4 && _0x4debe4(), _0x4debe4 = null;
            //     },
            //     'rewardDismissed': () => {
            //         const _0x4c32f3 = _0x49e846;
            //         _0x223c7e && (_0x223c7e(), _0x223c7e = null), this[_0x4c32f3(0x122)](_0x4c32f3(0x125));
            //     }
            // });
        }
        [_0x938c9(0x126)](_0x5d6916) {
            const _0x1f9f29 = _0x938c9;
            _0x5d6916[_0x1f9f29(0x127)] = new Laya[(_0x1f9f29(0x128))](_0x5d6916, function (_0x234f20) {
                const _0x4d4b93 = _0x1f9f29;
                _0x234f20[_0x4d4b93(0x129)](Laya['Event'][_0x4d4b93(0x12a)]), _0x234f20['on'](Laya[_0x4d4b93(0x12b)][_0x4d4b93(0x12a)], _0x234f20, () => {
                    const _0x33076f = _0x4d4b93;
                    _0x2654d8[_0x33076f(0x111)]()['navigate']('GAME', _0x33076f(0x12c), _0x234f20[_0x33076f(0x12d)]['id']);
                });
            }), _0x5d6916[_0x1f9f29(0x12e)] = _0x2654d8[_0x1f9f29(0x111)]()[_0x1f9f29(0x12f)]();
        }
        [_0x938c9(0x122)](_0x1d8d85, _0x114356) {
            const _0x1a0e09 = _0x938c9;
            !this[_0x1a0e09(0x130)] && (this[_0x1a0e09(0x130)] = document[_0x1a0e09(0x131)](_0x1a0e09(0x132)), this['prompt_'][_0x1a0e09(0x133)][_0x1a0e09(0x134)] = 'font-family:siyuan;max-width:80%;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;', document[_0x1a0e09(0x135)][_0x1a0e09(0x136)](this[_0x1a0e09(0x130)]));
            this[_0x1a0e09(0x130)][_0x1a0e09(0x137)] = _0x1d8d85;
            let _0x10eaa8 = document[_0x1a0e09(0x138)](_0x1a0e09(0x113));
            _0x10eaa8 && (console['log'](_0x1a0e09(0x139), this['prompt_']['style']), console[_0x1a0e09(0xba)](_0x1a0e09(0x139), _0x10eaa8[_0x1a0e09(0x13a)]), this[_0x1a0e09(0x130)]['style']['maxWidth'] = _0x10eaa8[_0x1a0e09(0x13a)] * 0.8), _0x114356 = isNaN(_0x114356) ? 0x7d0 : _0x114356, this[_0x1a0e09(0x130)][_0x1a0e09(0x133)]['display'] = _0x1a0e09(0x13b), this[_0x1a0e09(0x130)][_0x1a0e09(0x133)]['opacity'] = '1', setTimeout(function () {
                const _0xe03460 = _0x1a0e09;
                var _0x3b3300 = 0.5;
                this[_0xe03460(0x130)][_0xe03460(0x133)][_0xe03460(0x13c)] = _0xe03460(0x13d) + _0x3b3300 + _0xe03460(0x13e) + _0x3b3300 + 's\x20ease-in', this[_0xe03460(0x130)]['style']['opacity'] = '0', this[_0xe03460(0x130)][_0xe03460(0x133)][_0xe03460(0x13f)] = _0xe03460(0x140);
            }[_0x1a0e09(0xb4)](this), _0x114356);
        }
        [_0x938c9(0x12f)]() {
            const _0x5bcd7f = _0x938c9;
            let _0x382a68 = YYGGames[_0x5bcd7f(0x141)] || [], _0x5a101c = _0x382a68[_0x5bcd7f(0x142)]();
            for (let _0x215bfb = 0x0, _0x5b0238 = _0x5a101c[_0x5bcd7f(0xf4)]; _0x215bfb < _0x5b0238; _0x215bfb++) {
                const _0x4c8ac9 = Math[_0x5bcd7f(0x143)](Math['random']() * (_0x215bfb + 0x1)), _0xf7fe2a = _0x5a101c[_0x4c8ac9];
                _0x5a101c[_0x4c8ac9] = _0x5a101c[_0x215bfb], _0x5a101c[_0x215bfb] = _0xf7fe2a;
            }
            return _0x5a101c;
        }
        ['createLogo']() {
            const _0x58b9f1 = _0x938c9;
            if (!Laya || !Laya[_0x58b9f1(0x144)])
                return null;
            if (!window[_0x58b9f1(0x145)]) {
                const _0x3ef3f5 = new Laya[(_0x58b9f1(0x144))]();
                _0x3ef3f5[_0x58b9f1(0x146)] = _0x58b9f1(0x147), _0x3ef3f5[_0x58b9f1(0x148)] = 0x30d40, window[_0x58b9f1(0x145)] = _0x3ef3f5;
            }
            return window[_0x58b9f1(0x145)];
        }
        [_0x938c9(0x149)](_0x291205, _0x5bcaf9) {
            const _0x24c159 = _0x938c9;
            !this[_0x24c159(0x10f)] && (_0x5bcaf9 && _0x5bcaf9());
            if (this[_0x24c159(0x10e)])
                return;
            _0x2654d8[_0x24c159(0x111)]()[_0x24c159(0x14a)](), _0x2654d8['getInstance']()[_0x24c159(0x14b)](), this[_0x24c159(0x14c)](), this[_0x24c159(0x14d)](), window['WebAudioEngine'][_0x24c159(0xab)]()['then'](() => {
                const _0x512317 = _0x24c159;
                Laya[_0x512317(0x14e)]['playMusic'] = function (_0x562298) {
                    const _0x25d325 = _0x512317;
                    window[_0x25d325(0xef)] && window[_0x25d325(0xef)][_0x25d325(0xd2)](_0x562298);
                }, Laya[_0x512317(0x14e)]['playSound'] = function (_0x4c8307, _0x4a2d73 = ![]) {
                    const _0x2abd8f = _0x512317;
                    window[_0x2abd8f(0xef)] && window[_0x2abd8f(0xef)][_0x2abd8f(0xd6)](_0x4c8307);
                }, Laya['SoundManager']['stopMusic'] = function () {
                    const _0xfd6838 = _0x512317;
                    window[_0xfd6838(0xef)] && window['WebAudioEngine'][_0xfd6838(0xd3)]();
                }, Laya['SoundManager']['stopSound'] = function (_0x506e3c) {
                    const _0x5c7738 = _0x512317;
                    window[_0x5c7738(0xef)] && window[_0x5c7738(0xef)][_0x5c7738(0xd4)](_0x506e3c);
                };
            }), this['initialized_'] = !![], Laya[_0x24c159(0x14f)][_0x24c159(0xf3)](_0x24c159(0x150), Laya[_0x24c159(0x128)]['create'](this, _0x376fb3 => {
                const _0x31d323 = _0x24c159;
                const _0x56a485 = _0x31d323;
                this[_0x56a485(0x10f)] = ![], _0x5bcaf9 && _0x5bcaf9();
                // YYGGames[_0x31d323(0x151)]({
                //     'appName': _0x291205,
                //     'config': _0x376fb3,
                //     'complete': () => {
                //         const _0x56a485 = _0x31d323, _0xc4f9ba = YYGGames[_0x56a485(0x152)]();
                //         window[_0x56a485(0x153)] = this[_0x56a485(0x153)](), window['box_adTwo'] = this[_0x56a485(0x154)]();
                //         switch (_0xc4f9ba) {
                //         case AdPlatformType[_0x56a485(0x155)]:
                //         case AdPlatformType[_0x56a485(0x156)]:
                //             window[_0x56a485(0x145)] && (window[_0x56a485(0x145)]['scale'](0x0, 0x0), window[_0x56a485(0x145)][_0x56a485(0x157)]());
                //             break;
                //         default:
                //             window['yad'] && Laya[_0x56a485(0xc5)][_0x56a485(0x158)](window[_0x56a485(0x145)]), window[_0x56a485(0x145)]['on'](Laya[_0x56a485(0x12b)][_0x56a485(0x12a)], window[_0x56a485(0x145)], _0x476622 => {
                //                 const _0x45ceaf = _0x56a485;
                //                 _0x476622[_0x45ceaf(0x159)](), _0x2654d8[_0x45ceaf(0x111)]()[_0x45ceaf(0x11c)](_0x45ceaf(0x15a), _0x45ceaf(0x15b));
                //             });
                //             break;
                //         }
                //         this[_0x56a485(0x10f)] = ![], _0x5bcaf9 && _0x5bcaf9();
                //     }
                // });
            }));
        }
        ['showBanner'](_0x9f86cd) {
            // const _0x4472ba = _0x938c9;
            // _0x9f86cd ? YYGGames[_0x4472ba(0x15c)](_0x9f86cd) : YYGGames[_0x4472ba(0x15c)]();
        }
        [_0x938c9(0x15d)]() {
            // const _0x53bc3f = _0x938c9;
            // YYGGames[_0x53bc3f(0x15d)]();
        }
        [_0x938c9(0x14a)](_0x355705) {
            // const _0x558713 = _0x938c9;
            // _0x355705 ? YYGGames[_0x558713(0x14a)](_0x355705) : YYGGames[_0x558713(0x14a)]();
        }
        [_0x938c9(0x15e)]() {
            // const _0x1234fc = _0x938c9;
            // YYGGames[_0x1234fc(0x15e)]();
        }
        [_0x938c9(0x15f)](_0x58f073, _0x2c529a) {
            const _0x3bfb92 = _0x938c9;
            !this['needStartUp'] && (_0x2c529a && _0x2c529a());
            if (this[_0x3bfb92(0x10e)])
                return;
            _0x2654d8['getInstance']()[_0x3bfb92(0x14a)](), _0x2654d8['getInstance']()[_0x3bfb92(0x14b)](), this[_0x3bfb92(0x14c)](), this[_0x3bfb92(0x14d)](), window['WebAudioEngine'][_0x3bfb92(0xab)]()[_0x3bfb92(0x160)](() => {
                const _0x503a3e = _0x3bfb92;
                Laya['SoundManager'][_0x503a3e(0xd2)] = function (_0xc88b0c) {
                    const _0x1cd814 = _0x503a3e;
                    window[_0x1cd814(0xef)] && window[_0x1cd814(0xef)]['playMusic'](_0xc88b0c);
                }, Laya[_0x503a3e(0x14e)][_0x503a3e(0xd6)] = function (_0x2f8f91, _0x5a44d2 = ![]) {
                    const _0x3f7961 = _0x503a3e;
                    window['WebAudioEngine'] && window['WebAudioEngine'][_0x3f7961(0xd6)](_0x2f8f91);
                }, Laya[_0x503a3e(0x14e)][_0x503a3e(0xd3)] = function () {
                    const _0x289822 = _0x503a3e;
                    window[_0x289822(0xef)] && window['WebAudioEngine']['stopMusic']();
                }, Laya[_0x503a3e(0x14e)]['stopSound'] = function (_0x2fb0e5) {
                    const _0x4f0f52 = _0x503a3e;
                    window[_0x4f0f52(0xef)] && window[_0x4f0f52(0xef)][_0x4f0f52(0xd4)](_0x2fb0e5);
                };
            }), this[_0x3bfb92(0x10e)] = !![], Laya[_0x3bfb92(0x14f)][_0x3bfb92(0xf3)](_0x3bfb92(0x150), Laya[_0x3bfb92(0x128)][_0x3bfb92(0x161)](this, _0x30da3e => {
                const _0x8d477d = _0x3bfb92;
                const _0x6aefbb = _0x8d477d;
                this[_0x6aefbb(0x10f)] = ![], _0x2c529a && _0x2c529a();
                // YYGGames[_0x8d477d(0x162)]({
                //     'appName': _0x58f073,
                //     'config': _0x30da3e,
                //     'complete': () => {
                //         const _0x6aefbb = _0x8d477d, _0x47266c = YYGGames[_0x6aefbb(0x152)]();
                //         window[_0x6aefbb(0x153)] = this[_0x6aefbb(0x153)](), window[_0x6aefbb(0x154)] = this[_0x6aefbb(0x154)]();
                //         switch (_0x47266c) {
                //         case AdPlatformType[_0x6aefbb(0x155)]:
                //         case AdPlatformType[_0x6aefbb(0x156)]:
                //             window[_0x6aefbb(0x145)] && (window[_0x6aefbb(0x145)][_0x6aefbb(0xc1)](0x0, 0x0), window['yad']['removeSelf']());
                //             break;
                //         default:
                //             window[_0x6aefbb(0x145)] && Laya[_0x6aefbb(0xc5)][_0x6aefbb(0x158)](window[_0x6aefbb(0x145)]), window[_0x6aefbb(0x145)]['on'](Laya[_0x6aefbb(0x12b)][_0x6aefbb(0x12a)], window[_0x6aefbb(0x145)], _0x2f3c49 => {
                //                 const _0x51fc08 = _0x6aefbb;
                //                 _0x2f3c49[_0x51fc08(0x159)](), _0x2654d8[_0x51fc08(0x111)]()[_0x51fc08(0x11c)](_0x51fc08(0x15a), _0x51fc08(0x15b));
                //             });
                //             break;
                //         }
                //         this[_0x6aefbb(0x10f)] = ![], _0x2c529a && _0x2c529a();
                //     }
                // });
            }));
        }
        [_0x938c9(0x163)](_0x5bd82f, _0x139da1) {
            const _0x4d6792 = _0x938c9;
            !this['needStartUp'] && (_0x139da1 && _0x139da1());
            if (this[_0x4d6792(0x10e)])
                return;
            _0x2654d8[_0x4d6792(0x111)]()[_0x4d6792(0x14a)](), _0x2654d8['getInstance']()[_0x4d6792(0x14b)](), this[_0x4d6792(0x14c)](), this['createLoading'](), window[_0x4d6792(0xef)][_0x4d6792(0xab)]()[_0x4d6792(0x160)](() => {
                const _0x1d592d = _0x4d6792;
                Laya['SoundManager'][_0x1d592d(0xd2)] = function (_0x358b73) {
                    window['WebAudioEngine'] && window['WebAudioEngine']['playMusic'](_0x358b73);
                }, Laya[_0x1d592d(0x14e)]['playSound'] = function (_0x1b21a1) {
                    const _0x55284a = _0x1d592d;
                    window['WebAudioEngine'] && window[_0x55284a(0xef)][_0x55284a(0xd6)](_0x1b21a1);
                }, Laya[_0x1d592d(0x14e)]['stopMusic'] = function (_0x40e17a) {
                    const _0x4194e3 = _0x1d592d;
                    window['WebAudioEngine'] && window[_0x4194e3(0xef)]['stopMusic']();
                };
            }), this[_0x4d6792(0x10e)] = !![], Laya[_0x4d6792(0x14f)]['load'](_0x4d6792(0x150), Laya[_0x4d6792(0x128)][_0x4d6792(0x161)](this, _0x53eb63 => {
                const _0x422bac = _0x4d6792;
                const _0x41a3ad = _0x422bac;
                this['needStartUp'] = ![], _0x139da1 && _0x139da1();
                // YYGGames[_0x422bac(0x164)]({
                //     'channel': 0x5,
                //     'appName': _0x5bd82f,
                //     'config': _0x53eb63,
                //     'complete': () => {
                //         const _0x41a3ad = _0x422bac, _0x549308 = YYGGames['getAdPlatformType']();
                //         window[_0x41a3ad(0x153)] = this['scrollList'](), window[_0x41a3ad(0x154)] = this['box_adTwo']();
                //         switch (_0x549308) {
                //         case AdPlatformType['en_GAMEDISTRIBUTION']:
                //         case AdPlatformType[_0x41a3ad(0x156)]:
                //             window[_0x41a3ad(0x145)] && (window[_0x41a3ad(0x145)]['scale'](0x0, 0x0), window[_0x41a3ad(0x145)][_0x41a3ad(0x157)]());
                //             break;
                //         default:
                //             window[_0x41a3ad(0x145)] && Laya['stage'][_0x41a3ad(0x158)](window['yad']), window[_0x41a3ad(0x145)]['on'](Laya['Event'][_0x41a3ad(0x12a)], window['yad'], _0x2dd3b3 => {
                //                 const _0x590a2b = _0x41a3ad;
                //                 _0x2dd3b3[_0x590a2b(0x159)](), _0x2654d8['getInstance']()[_0x590a2b(0x11c)](_0x590a2b(0x15a), _0x590a2b(0x15b));
                //             });
                //             break;
                //         }
                //         this['needStartUp'] = ![], _0x139da1 && _0x139da1();
                //     }
                // });
            }));
        }
        [_0x938c9(0x14c)]() {
            const _0x4ceb3b = _0x938c9;
            if (!Laya[_0x4ceb3b(0x165)] || !Laya[_0x4ceb3b(0x166)])
                return;
            let _0x382574 = {
                'x': 0x0,
                'type': _0x4ceb3b(0x167),
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': _0x4ceb3b(0x167),
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': _0x4ceb3b(0x168),
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': 'Box(NoVideo)',
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': _0x4ceb3b(0x169),
                        'searchKey': _0x4ceb3b(0x16a),
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': _0x4ceb3b(0x16b),
                            'presetID': 0x2,
                            'preset': _0x4ceb3b(0x168),
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': 'spr_tip',
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': _0x4ceb3b(0x16b),
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': 'Rect',
                                'searchKey': _0x4ceb3b(0x16c),
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': _0x4ceb3b(0x168),
                                    'height': 0x21c,
                                    'fillColor': _0x4ceb3b(0x16d)
                                },
                                'nodeParent': 0x4,
                                'label': _0x4ceb3b(0x16e),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x4ceb3b(0x16f),
                                'searchKey': _0x4ceb3b(0x16f),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x4ceb3b(0x170),
                                    'text': _0x4ceb3b(0x171),
                                    'presetID': 0x4,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': _0x4ceb3b(0x172),
                                    'align': _0x4ceb3b(0x173)
                                },
                                'nodeParent': 0x4,
                                'label': _0x4ceb3b(0x174),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x4ceb3b(0x16f),
                                'searchKey': _0x4ceb3b(0x16f),
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': _0x4ceb3b(0x175),
                                    'presetID': 0x5,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': _0x4ceb3b(0x172),
                                    'align': _0x4ceb3b(0x173)
                                },
                                'nodeParent': 0x4,
                                'label': _0x4ceb3b(0x174),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x4ceb3b(0x16f),
                                'searchKey': _0x4ceb3b(0x16f),
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x4ceb3b(0x170),
                                    'text': _0x4ceb3b(0x176),
                                    'presetID': 0x6,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': '#ffffff',
                                    'align': _0x4ceb3b(0x173)
                                },
                                'nodeParent': 0x4,
                                'label': _0x4ceb3b(0x174),
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
            class _0x5abc28 extends Laya['Script'] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                    const _0x35de22 = _0x4ceb3b;
                    this['owner']['top'] = 0x0, this[_0x35de22(0x177)][_0x35de22(0x178)] = 0x0, this['owner']['left'] = 0x0, this[_0x35de22(0x177)]['right'] = 0x0, this[_0x35de22(0x16b)] = this['owner']['getChildByName'](_0x35de22(0x16b)), this[_0x35de22(0x177)][_0x35de22(0x13a)] > this['owner'][_0x35de22(0x179)] ? this[_0x35de22(0x16b)]['scale'](this[_0x35de22(0x177)][_0x35de22(0x179)] / 0x780, this[_0x35de22(0x177)]['height'] / 0x780) : this['spr_tip']['scale'](this[_0x35de22(0x177)][_0x35de22(0x13a)] / 0x438, this[_0x35de22(0x177)][_0x35de22(0x13a)] / 0x438), this[_0x35de22(0x16b)][_0x35de22(0x17a)](this[_0x35de22(0x177)][_0x35de22(0x13a)] / 0x2, this['owner'][_0x35de22(0x179)] / 0x2), this[_0x35de22(0x177)]['on'](Laya['Event'][_0x35de22(0x17b)], this, this[_0x35de22(0x17c)]);
                }
                ['closePer']() {
                    const _0x539b0e = _0x4ceb3b;
                    _0x2654d8[_0x539b0e(0x111)]()['closeNoVideo']();
                }
            }
            let _0x5c2f04 = new Laya['Prefab']();
            _0x5c2f04[_0x4ceb3b(0x17d)] = _0x382574, this[_0x4ceb3b(0x17e)] = _0x5c2f04['create'](), this[_0x4ceb3b(0x17e)][_0x4ceb3b(0x148)] = 0x30d3f, this['noVideoPer']['addComponent'](_0x5abc28);
        }
        [_0x938c9(0x17f)]() {
            const _0x26eb09 = _0x938c9;
            this['noVideoPer'] && Laya[_0x26eb09(0xc5)][_0x26eb09(0x158)](this['noVideoPer']);
        }
        ['closeNoVideo']() {
            const _0x15fe76 = _0x938c9;
            this[_0x15fe76(0x17e)] && this[_0x15fe76(0x17e)][_0x15fe76(0x157)]();
        }
        ['createLoading']() {
            const _0x32ab07 = _0x938c9;
            if (!Laya[_0x32ab07(0x165)] || !Laya[_0x32ab07(0x166)])
                return;
            let _0x3a3cad = {
                'x': 0xf,
                'type': _0x32ab07(0x167),
                'searchKey': _0x32ab07(0x180),
                'props': {
                    'var': _0x32ab07(0x181),
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': _0x32ab07(0x181),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': _0x32ab07(0x167),
                        'searchKey': _0x32ab07(0x167),
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': _0x32ab07(0x16d),
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': _0x32ab07(0x167),
                        'isOpen': !![],
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x84,
                        'child': []
                    },
                    {
                        'x': 0x1e,
                        'type': _0x32ab07(0x16f),
                        'searchKey': _0x32ab07(0x16f),
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': 'middle',
                            'text': _0x32ab07(0x182),
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': '#ffffff',
                            'centerY': 0x0,
                            'align': 'center'
                        },
                        'nodeParent': 0x83,
                        'label': _0x32ab07(0x16f),
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x85,
                        'child': []
                    }
                ]
            };
            class _0x33492a extends Laya[_0x32ab07(0x166)] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                ['closePer']() {
                    const _0x1851ed = _0x32ab07;
                    _0x2654d8[_0x1851ed(0x111)]()[_0x1851ed(0x183)]();
                }
            }
            let _0x26fd23 = new Laya['Prefab']();
            _0x26fd23[_0x32ab07(0x17d)] = _0x3a3cad, this[_0x32ab07(0x184)] = _0x26fd23[_0x32ab07(0x161)](), this['loadingPer'][_0x32ab07(0x148)] = 0x30d3e, this['loadingPer'][_0x32ab07(0x185)](_0x33492a);
        }
        ['showLoading']() {
            const _0x46630b = _0x938c9;
            this[_0x46630b(0x184)] && Laya[_0x46630b(0xc5)][_0x46630b(0x158)](this[_0x46630b(0x184)]);
        }
        ['closeLoading']() {
            const _0x9048ce = _0x938c9;
            this[_0x9048ce(0x184)] && this['loadingPer']['removeSelf']();
        }
        [_0x938c9(0x186)]() {
            const _0x416fdc = _0x938c9;
            class _0x4cbdbf extends Laya[_0x416fdc(0x167)] {
                constructor() {
                    const _0x111bd5 = _0x416fdc;
                    super(), this[_0x111bd5(0x187)] = new Laya['Image'](), this['img'][_0x111bd5(0x188)] = _0x111bd5(0x189), this['size'](0x190, 0x12c), this[_0x111bd5(0x187)][_0x111bd5(0x18a)](0x190, 0x12c), this['addChild'](this[_0x111bd5(0x187)]);
                }
            }
            let _0x1c8553 = new Laya['List']();
            return _0x1c8553[_0x416fdc(0x18a)](0x320, 0x258), _0x1c8553[_0x416fdc(0x18b)] = _0x4cbdbf, _0x1c8553;
        }
        ['scrollList']() {
            const _0x160579 = _0x938c9;
            if (!Laya || !Laya[_0x160579(0xc5)])
                return null;
            if (YYGGames[_0x160579(0x152)]() == AdPlatformType[_0x160579(0x155)] || YYGGames['getAdPlatformType']() == AdPlatformType[_0x160579(0x156)]) {
                let _0x5bd1bf = new Laya[(_0x160579(0x167))]();
                return _0x5bd1bf[_0x160579(0x18c)] = function () {
                }, _0x5bd1bf;
            }
            if (!this[_0x160579(0x18d)]) {
                let _0x6e1cd5 = {
                    'x': 0x0,
                    'type': 'List',
                    'selectedBox': 0x79,
                    'selecteID': 0x7a,
                    'searchKey': _0x160579(0x18e),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x36f,
                        'presetID': 0x1,
                        'preset': _0x160579(0x18f),
                        'name': _0x160579(0x190),
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': _0x160579(0x190),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': 'Image,img_ListBg',
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x388,
                                'skin': '',
                                'sizeGrid': '30,\x2030,\x2030,\x2030',
                                'presetID': 0x2,
                                'preset': 'laya/pages/prefab/scrollList.prefab',
                                'name': _0x160579(0x191),
                                'height': 0xb1,
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
                            'type': _0x160579(0x167),
                            'searchKey': _0x160579(0x167),
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': _0x160579(0x192),
                                'presetID': 0x3,
                                'preset': _0x160579(0x18f),
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': _0x160579(0x193),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x160579(0x144),
                                    'searchKey': _0x160579(0x194),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': _0x160579(0x18f),
                                        'name': _0x160579(0x189),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'nodeParent': 0x77,
                                    'label': _0x160579(0x189),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': ![],
                                    'hasChild': !![],
                                    'compId': 0x79,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': 'Image',
                                            'searchKey': _0x160579(0x144),
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': _0x160579(0x195),
                                                'sizeGrid': _0x160579(0x196),
                                                'renderType': _0x160579(0x197),
                                                'presetID': 0x5,
                                                'preset': _0x160579(0x18f),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x79,
                                            'label': _0x160579(0x198),
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
                class _0x39fa1a extends Laya[_0x160579(0x166)] {
                    constructor() {
                        const _0x8c0d8c = _0x160579;
                        super(), this[_0x8c0d8c(0x199)] = [], this[_0x8c0d8c(0x19a)] = [
                            0.83,
                            0.83
                        ], this[_0x8c0d8c(0x19b)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    [_0x160579(0x19c)]() {
                        const _0x14ef1c = _0x160579;
                        this[_0x14ef1c(0x191)] = this['owner'][_0x14ef1c(0x19d)](_0x14ef1c(0x191)), this[_0x14ef1c(0x177)]['visible'] = ![], !this[_0x14ef1c(0x177)][_0x14ef1c(0x127)] && (this[_0x14ef1c(0x177)][_0x14ef1c(0x127)] = new Laya[(_0x14ef1c(0x128))](this, this['itemRenderFun']));
                        if (this[_0x14ef1c(0x199)][_0x14ef1c(0xf4)]) {
                            let _0x51caf4 = JSON[_0x14ef1c(0xd1)](JSON[_0x14ef1c(0x19e)](this[_0x14ef1c(0x199)]));
                            Laya[_0x14ef1c(0x14f)][_0x14ef1c(0x19f)](_0x51caf4);
                        }
                        this['setSize'](this[_0x14ef1c(0x19b)][0x0], this[_0x14ef1c(0x19b)][0x1], this[_0x14ef1c(0x19b)][0x2]), this['owner']['scrollBar']['mouseWheelEnable'] = ![], this['owner'][_0x14ef1c(0x1a0)][_0x14ef1c(0x1a1)] = ![], this['owner'][_0x14ef1c(0x1a0)][_0x14ef1c(0x1a2)] = ![];
                        let _0x5e051b = _0x2654d8[_0x14ef1c(0x111)]()[_0x14ef1c(0x12f)]();
                        if (!_0x5e051b[_0x14ef1c(0xf4)])
                            return;
                        let _0x11950e = JSON[_0x14ef1c(0xd1)](JSON[_0x14ef1c(0x19e)](_0x5e051b));
                        _0x11950e = _0x11950e[_0x14ef1c(0x1a3)](_0x11950e[_0x14ef1c(0x142)](0x0, 0x4)), this[_0x14ef1c(0x177)]['centerX'] = 0x0, this['owner'][_0x14ef1c(0x12e)] = _0x11950e, Laya[_0x14ef1c(0xc0)]['frameLoop'](0x1, this, this['loopList']), this[_0x14ef1c(0x177)][_0x14ef1c(0x1a4)] = !![];
                    }
                    [_0x160579(0x1a5)](_0x23d45b, _0x35cc17) {
                        const _0x5b8c16 = _0x160579;
                        let _0x1e26af = _0x23d45b['getChildByName'](_0x5b8c16(0x189));
                        _0x23d45b[_0x5b8c16(0x129)](), _0x1e26af[_0x5b8c16(0x129)](), _0x23d45b['on'](Laya[_0x5b8c16(0x12b)]['MOUSE_OVER'], _0x23d45b, () => {
                            const _0x598ee2 = _0x5b8c16;
                            _0x23d45b[_0x598ee2(0x148)] = 0x64;
                        }), _0x23d45b['on'](Laya[_0x5b8c16(0x12b)][_0x5b8c16(0x1a6)], _0x23d45b, () => {
                            const _0x13be4e = _0x5b8c16;
                            _0x23d45b[_0x13be4e(0x148)] = _0x35cc17;
                        }), _0x1e26af['on'](Laya[_0x5b8c16(0x12b)][_0x5b8c16(0x1a7)], _0x23d45b, () => {
                            const _0x577021 = _0x5b8c16;
                            _0x1e26af['scale'](1.1, 1.1), this[_0x577021(0x1a8)](), this['checkPoints'](_0x23d45b);
                        }), _0x1e26af['on'](Laya['Event'][_0x5b8c16(0x1a6)], _0x23d45b, () => {
                            const _0x13e14d = _0x5b8c16;
                            _0x1e26af[_0x13e14d(0xc1)](0x1, 0x1), Laya[_0x13e14d(0xc0)]['frameLoop'](0x1, this, this['loopList']);
                        }), _0x1e26af['on'](Laya[_0x5b8c16(0x12b)]['MOUSE_DOWN'], _0x23d45b, () => {
                            const _0x1cb3d0 = _0x5b8c16;
                            _0x2654d8[_0x1cb3d0(0x111)]()[_0x1cb3d0(0x11c)](_0x1cb3d0(0x15a), _0x1cb3d0(0x12c), _0x23d45b['dataSource']['id']);
                        });
                        let _0x3d7e91 = _0x1e26af[_0x5b8c16(0x197)];
                        _0x23d45b[_0x5b8c16(0x13a)] = this[_0x5b8c16(0x19b)][0x0] + 0x14, _0x23d45b[_0x5b8c16(0x179)] = this['sizeTran'][0x1] + 0x14;
                        if (this[_0x5b8c16(0x19b)][0x2])
                            _0x3d7e91['width'] = _0x1e26af[_0x5b8c16(0x13a)] = this[_0x5b8c16(0x19b)][0x0], _0x3d7e91[_0x5b8c16(0x179)] = _0x1e26af[_0x5b8c16(0x179)] = this[_0x5b8c16(0x19b)][0x1];
                        else {
                            let _0x588926 = 0xc8 / this[_0x5b8c16(0x19b)][0x0] < 0x96 / this[_0x5b8c16(0x19b)][0x1] ? 0xc8 / his[_0x5b8c16(0x19b)][0x0] : 0x96 / this[_0x5b8c16(0x19b)][0x1];
                            _0x1e26af[_0x5b8c16(0x13a)] = 0xc8 / _0x588926, _0x1e26af['height'] = 0x96 / _0x588926, _0x3d7e91[_0x5b8c16(0x13a)] = this[_0x5b8c16(0x19b)][0x0], _0x3d7e91[_0x5b8c16(0x179)] = this[_0x5b8c16(0x19b)][0x1];
                        }
                        _0x3d7e91['x'] = _0x1e26af['width'] / 0x2, _0x3d7e91['y'] = _0x1e26af['height'] / 0x2;
                    }
                    [_0x160579(0x1a9)]() {
                        const _0x5c26e5 = _0x160579;
                        this['owner'][_0x5c26e5(0x1a0)][_0x5c26e5(0x1aa)] += 0x1, this[_0x5c26e5(0x177)][_0x5c26e5(0x1a0)][_0x5c26e5(0x1aa)] >= this[_0x5c26e5(0x177)][_0x5c26e5(0x1a0)][_0x5c26e5(0x1ab)] && (this[_0x5c26e5(0x177)][_0x5c26e5(0x1a0)][_0x5c26e5(0x1aa)] = 0x0);
                    }
                    ['endAni']() {
                        const _0x18d02a = _0x160579;
                        Laya[_0x18d02a(0xc0)][_0x18d02a(0x1ac)](this), Laya[_0x18d02a(0x1ad)][_0x18d02a(0x1ac)](this[_0x18d02a(0x177)][_0x18d02a(0x1a0)]);
                    }
                    [_0x160579(0x1ae)](_0x330321) {
                        const _0x2979ca = _0x160579;
                        let _0x27d8b7 = new Laya[(_0x2979ca(0x1af))](0x0, 0x0);
                        _0x330321[_0x2979ca(0x1b0)](_0x27d8b7, ![], this[_0x2979ca(0x177)]), console[_0x2979ca(0xba)](_0x27d8b7);
                    }
                    ['onDisable']() {
                        const _0x2ddf93 = _0x160579;
                        if (this[_0x2ddf93(0x199)][_0x2ddf93(0xf4)]) {
                            let _0x42766b = JSON[_0x2ddf93(0xd1)](JSON[_0x2ddf93(0x19e)](this[_0x2ddf93(0x199)]));
                            Laya[_0x2ddf93(0x14f)][_0x2ddf93(0x19f)](_0x42766b);
                        }
                        this[_0x2ddf93(0x199)] = [], this[_0x2ddf93(0x1a8)](), this[_0x2ddf93(0x177)][_0x2ddf93(0x12e)] = [];
                    }
                    [_0x160579(0x18c)](_0x46ac35, _0x2c5a80, _0x32caa6 = ![]) {
                        const _0x4fb150 = _0x160579;
                        this[_0x4fb150(0x19b)] = [
                            _0x46ac35,
                            _0x2c5a80,
                            _0x32caa6
                        ], this[_0x4fb150(0x191)] && (this['owner']['width'] = _0x46ac35 * 0x4 + 0x64, this[_0x4fb150(0x177)]['height'] = _0x2c5a80 + 0x14, this[_0x4fb150(0x191)]['width'] = _0x46ac35 * 0x4 + 0x7d, this['img_ListBg'][_0x4fb150(0x179)] = _0x2c5a80 + 0x28, this[_0x4fb150(0x177)]['refresh']());
                    }
                }
                let _0x329288 = new Laya[(_0x160579(0x165))]();
                _0x329288['json'] = _0x6e1cd5, this[_0x160579(0x18d)] = _0x329288[_0x160579(0x161)](), this[_0x160579(0x18d)]['zOrder'] = 0x30d3f, this[_0x160579(0x18d)]['addComponent'](_0x39fa1a), this[_0x160579(0x18d)][_0x160579(0x18c)] = this['_scrollList'][_0x160579(0x1b1)](_0x39fa1a)['setSize'][_0x160579(0xb4)](this['_scrollList'][_0x160579(0x1b1)](_0x39fa1a));
            }
            return this[_0x160579(0x18d)];
        }
        [_0x938c9(0x154)]() {
            const _0x464653 = _0x938c9;
            if (!Laya || !Laya['stage'])
                return null;
            if (YYGGames['getAdPlatformType']() == AdPlatformType[_0x464653(0x155)] || YYGGames['getAdPlatformType']() == AdPlatformType['en_XIAOMI']) {
                let _0x58ba9c = new Laya[(_0x464653(0x167))]();
                return _0x58ba9c['setSpaceX'] = _0x58ba9c[_0x464653(0x18c)] = function () {
                }, _0x58ba9c;
            }
            if (!this[_0x464653(0x1b2)]) {
                let _0x26764e = {
                    'x': 0x0,
                    'type': 'Box',
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': _0x464653(0x1b3),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': _0x464653(0x1b4),
                        'name': _0x464653(0x154),
                        'isPresetRoot': !![],
                        'height': 0x1,
                        'centerX': 0x0,
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x99,
                    'label': _0x464653(0x154),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x92,
                    'child': [
                        {
                            'x': 0xf,
                            'type': _0x464653(0x144),
                            'searchKey': _0x464653(0x1b5),
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': _0x464653(0x195),
                                'sizeGrid': _0x464653(0x196),
                                'presetID': 0x2,
                                'preset': _0x464653(0x1b4),
                                'name': 'img_ad0',
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x464653(0x1b6),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x464653(0x144),
                                    'searchKey': _0x464653(0x1b7),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                        'name': 'img_adImg',
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': _0x464653(0x1b8),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x95,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x464653(0x144),
                                            'searchKey': _0x464653(0x144),
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0x464653(0x195),
                                                'sizeGrid': _0x464653(0x196),
                                                'renderType': _0x464653(0x197),
                                                'presetID': 0x4,
                                                'preset': _0x464653(0x1b4),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': _0x464653(0x1b9),
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
                            'type': _0x464653(0x144),
                            'searchKey': _0x464653(0x1ba),
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': _0x464653(0x195),
                                'sizeGrid': _0x464653(0x196),
                                'presetID': 0x5,
                                'preset': _0x464653(0x1b4),
                                'name': _0x464653(0x1bb),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x464653(0x1bb),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x464653(0x144),
                                    'searchKey': _0x464653(0x1b7),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                        'name': _0x464653(0x1b8),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': _0x464653(0x1b8),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x96,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x464653(0x144),
                                            'searchKey': 'Image',
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0x464653(0x195),
                                                'sizeGrid': _0x464653(0x196),
                                                'renderType': 'mask',
                                                'presetID': 0x7,
                                                'preset': _0x464653(0x1b4),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': _0x464653(0x1b9),
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
                            'name': _0x464653(0x1bc),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x343866 extends Laya['Script'] {
                    constructor() {
                        const _0x321fd1 = _0x464653;
                        super(), this['imgArr'] = [], this[_0x321fd1(0x1bd)] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        const _0x2b58d5 = _0x464653;
                        !this['img_ad0'] && (this[_0x2b58d5(0x1b6)] = this[_0x2b58d5(0x177)][_0x2b58d5(0x19d)](_0x2b58d5(0x1b6))), !this[_0x2b58d5(0x1bb)] && (this['img_ad1'] = this[_0x2b58d5(0x177)][_0x2b58d5(0x19d)](_0x2b58d5(0x1bb))), !this[_0x2b58d5(0x1be)] && (this[_0x2b58d5(0x1be)] = this['img_ad0'][_0x2b58d5(0x19d)](_0x2b58d5(0x1b8))), !this['img_ad1Ad'] && (this['img_ad1Ad'] = this[_0x2b58d5(0x1bb)]['getChildByName']('img_adImg')), !this['img_ad0AdMask'] && (this[_0x2b58d5(0x1bf)] = this['img_ad0Ad'][_0x2b58d5(0x197)]), !this[_0x2b58d5(0x1c0)] && (this[_0x2b58d5(0x1c0)] = this[_0x2b58d5(0x1c1)]['mask']), this[_0x2b58d5(0x177)][_0x2b58d5(0x1a4)] = ![];
                        let _0x12689e = _0x2654d8[_0x2b58d5(0x111)]()['getForgames']();
                        if (!_0x12689e['length'])
                            return;
                        let _0x303a40 = JSON[_0x2b58d5(0xd1)](JSON[_0x2b58d5(0x19e)](_0x12689e));
                        if (this[_0x2b58d5(0x199)]['length']) {
                            let _0x4be810 = JSON[_0x2b58d5(0xd1)](JSON['stringify'](this[_0x2b58d5(0x199)]));
                            Laya[_0x2b58d5(0x14f)]['clearRes'](_0x4be810);
                        }
                        this[_0x2b58d5(0x1c2)](this['spaceNum']), this[_0x2b58d5(0x18c)](this[_0x2b58d5(0x19b)][0x0], this['sizeTran'][0x1], this[_0x2b58d5(0x19b)][0x2]), this['img_ad0'][_0x2b58d5(0x129)](), this[_0x2b58d5(0x1bb)][_0x2b58d5(0x129)](), this['owner'][_0x2b58d5(0x1a4)] = !![], this['img_ad0'][_0x2b58d5(0x19d)](_0x2b58d5(0x1b8))[_0x2b58d5(0x146)] = _0x303a40[0x0]['thumb'], this[_0x2b58d5(0x1bb)][_0x2b58d5(0x19d)](_0x2b58d5(0x1b8))[_0x2b58d5(0x146)] = _0x303a40[0x1]['thumb'], this[_0x2b58d5(0x1b6)]['on'](Laya[_0x2b58d5(0x12b)][_0x2b58d5(0x12a)], this, () => {
                            const _0x4a2b7c = _0x2b58d5;
                            _0x2654d8[_0x4a2b7c(0x111)]()[_0x4a2b7c(0x11c)]('GAME', _0x4a2b7c(0x12c), _0x303a40[0x0]['id']);
                        }), this[_0x2b58d5(0x1bb)]['on'](Laya['Event'][_0x2b58d5(0x12a)], this, () => {
                            const _0x555a7c = _0x2b58d5;
                            _0x2654d8[_0x555a7c(0x111)]()['navigate'](_0x555a7c(0x15a), _0x555a7c(0x12c), _0x303a40[0x1]['id']);
                        });
                    }
                    [_0x464653(0x1c2)](_0x398c22) {
                        const _0xcbe732 = _0x464653;
                        this[_0xcbe732(0x1bd)] = _0x398c22, this[_0xcbe732(0x1b6)] && (this[_0xcbe732(0x1b6)]['x'] = -this[_0xcbe732(0x1b6)][_0xcbe732(0x13a)] - this[_0xcbe732(0x1bd)] / 0x2, this['img_ad1']['x'] = this[_0xcbe732(0x1bd)] / 0x2);
                    }
                    [_0x464653(0x1c3)]() {
                        const _0x5f37a7 = _0x464653;
                        if (this[_0x5f37a7(0x199)][_0x5f37a7(0xf4)]) {
                            let _0x2dfc85 = JSON['parse'](JSON[_0x5f37a7(0x19e)](this[_0x5f37a7(0x199)]));
                            Laya[_0x5f37a7(0x14f)][_0x5f37a7(0x19f)](_0x2dfc85);
                        }
                        this[_0x5f37a7(0x199)] = [];
                    }
                    [_0x464653(0x18c)](_0x3838f6, _0x474c74, _0x103a7f = ![]) {
                        const _0x48cfba = _0x464653;
                        this[_0x48cfba(0x19b)] = [
                            _0x3838f6,
                            _0x474c74,
                            _0x103a7f
                        ];
                        if (this['img_ad0']) {
                            this['img_ad0']['width'] = this['img_ad1'][_0x48cfba(0x13a)] = _0x3838f6 + 0x14, this['img_ad0'][_0x48cfba(0x179)] = this[_0x48cfba(0x1bb)][_0x48cfba(0x179)] = _0x474c74 + 0x14;
                            if (_0x103a7f)
                                this[_0x48cfba(0x1bf)]['width'] = this['img_ad1AdMask'][_0x48cfba(0x13a)] = this[_0x48cfba(0x1be)]['width'] = this[_0x48cfba(0x1c1)][_0x48cfba(0x13a)] = _0x3838f6, this[_0x48cfba(0x1bf)][_0x48cfba(0x179)] = this[_0x48cfba(0x1c0)][_0x48cfba(0x179)] = this['img_ad0Ad']['height'] = this[_0x48cfba(0x1c1)][_0x48cfba(0x179)] = _0x474c74;
                            else {
                                let _0x248b9e = 0xc8 / _0x3838f6 < 0x96 / _0x474c74 ? 0xc8 / _0x3838f6 : 0x96 / _0x474c74;
                                this[_0x48cfba(0x1be)]['width'] = this[_0x48cfba(0x1c1)][_0x48cfba(0x13a)] = 0xc8 / _0x248b9e, this[_0x48cfba(0x1be)]['height'] = this[_0x48cfba(0x1c1)][_0x48cfba(0x179)] = 0x96 / _0x248b9e, this['img_ad0AdMask'][_0x48cfba(0x13a)] = this['img_ad1AdMask'][_0x48cfba(0x13a)] = _0x3838f6, this[_0x48cfba(0x1bf)][_0x48cfba(0x179)] = this[_0x48cfba(0x1c0)][_0x48cfba(0x179)] = _0x474c74;
                            }
                            this[_0x48cfba(0x1bf)]['x'] = this['img_ad1AdMask']['x'] = this['img_ad0Ad'][_0x48cfba(0x13a)] / 0x2, this[_0x48cfba(0x1bf)]['y'] = this[_0x48cfba(0x1c0)]['y'] = this[_0x48cfba(0x1be)][_0x48cfba(0x179)] / 0x2, this['setSpaceX'](this[_0x48cfba(0x1bd)]);
                        }
                    }
                }
                let _0x2f0948 = new Laya[(_0x464653(0x165))]();
                _0x2f0948[_0x464653(0x17d)] = _0x26764e, this[_0x464653(0x1b2)] = _0x2f0948['create'](), this[_0x464653(0x1b2)][_0x464653(0x148)] = 0x30d3f, this['_box_adTwo']['addComponent'](_0x343866), this[_0x464653(0x1b2)][_0x464653(0x1c2)] = this[_0x464653(0x1b2)][_0x464653(0x1b1)](_0x343866)[_0x464653(0x1c2)][_0x464653(0xb4)](this[_0x464653(0x1b2)][_0x464653(0x1b1)](_0x343866)), this['_box_adTwo'][_0x464653(0x18c)] = this['_box_adTwo'][_0x464653(0x1b1)](_0x343866)[_0x464653(0x18c)][_0x464653(0xb4)](this[_0x464653(0x1b2)][_0x464653(0x1b1)](_0x343866));
            }
            return this[_0x464653(0x1b2)];
        }
    }
    _0x2654d8[_0x938c9(0x112)] = null, window[_0x938c9(0x1c4)] = _0x2654d8;
}());
function _0x5ea2() {
    const _0x2071e2 = [
        'play',
        'volume',
        '_audioInstances',
        '_musicVolume',
        'AudioContext',
        'webkitAudioContext',
        'context',
        'state',
        'instance',
        'source',
        'buffer',
        'loop',
        'currentTime',
        'disconnect',
        'onended',
        'setup',
        'values',
        'has',
        'get',
        '_stopSound',
        '_music',
        'downloadArrayBuffer',
        'gain',
        'ended',
        'WebAudioEngine',
        'playBuffer',
        'error',
        'playBuffer\x20error.\x20Exception:\x20',
        'load',
        'length',
        'setThreeD',
        'threeD',
        'createPanner',
        'createBufferSource',
        'panner',
        'connect',
        'rolloffFactor',
        'destination',
        'url',
        'createSoundInstance',
        'set',
        'decodeAudioData',
        'Decode\x20error.',
        'open',
        'GET',
        'responseType',
        'arraybuffer',
        'onload',
        'status',
        'response',
        'no\x20response',
        'onerror',
        'ontimeout',
        'action_',
        'to_',
        'initialized_',
        'needStartUp',
        'initData',
        'getInstance',
        '_instance',
        'layaCanvas',
        'onNavigate_',
        'touchend',
        'screen_',
        'canNavigateActive_',
        'getStorageSync',
        'LocalStorage',
        'getItem',
        'setItem',
        'navigate',
        'onblur',
        'onfocus',
        'showInterstitial',
        'focus',
        'canShowReward',
        'prompt',
        'No\x20Available\x20Video',
        'showReward',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'initList',
        'renderHandler',
        'Handler',
        'offAll',
        'MOUSE_DOWN',
        'Event',
        'MORE',
        'dataSource',
        'array',
        'getForgames',
        'prompt_',
        'createElement',
        'div',
        'style',
        'cssText',
        'body',
        'appendChild',
        'innerHTML',
        'getElementById',
        'this.prompt_.style.width',
        'width',
        'inline',
        'webkitTransition',
        '-webkit-transform\x20',
        's\x20ease-in,\x20opacity\x20',
        'display',
        'none',
        'forgames',
        'slice',
        'floor',
        'Image',
        'yad',
        'skin',
        'yad.png',
        'zOrder',
        'yadstartup',
        'showSplash',
        'createLogo',
        'createNoVideo',
        'createLoading',
        'SoundManager',
        'loader',
        'cnf.json',
        'startupByYad',
        'getAdPlatformType',
        'scrollList',
        'box_adTwo',
        'en_GAMEDISTRIBUTION',
        'en_XIAOMI',
        'removeSelf',
        'addChild',
        'stopPropagation',
        'GAME',
        'LOGO',
        'showBanner',
        'hideBanner',
        'hideSplash',
        'cargamesstartup',
        'then',
        'create',
        'startupByCargames',
        'puzzlegamestartup',
        'startup',
        'Prefab',
        'Script',
        'Box',
        'laya/pages/Prefab/NoVideo.prefab',
        'Sprite',
        'Sprite,spr_tip,spr_tip',
        'spr_tip',
        'Rect',
        '#000000',
        'Rect(NoVideo)',
        'Label',
        'middle',
        'VIDEO',
        '#ffffff',
        'center',
        'Label(NoVideo)',
        'No\x20Video\x20Available',
        'Click\x20anywhere\x20to\x20close',
        'owner',
        'bottom',
        'height',
        'pos',
        'CLICK',
        'closePer',
        'json',
        'noVideoPer',
        'showNoVideo',
        'Box,box_clickLayer',
        'box_clickLayer',
        'LOADING\x5cnPLEASE\x20WAIT…',
        'closeNoVideo',
        'loadingPer',
        'addComponent',
        'createList',
        'img',
        'name',
        'thumb',
        'size',
        'itemRender',
        'setSize',
        '_scrollList',
        'List,scrollAdList',
        'laya/pages/prefab/scrollList.prefab',
        'scrollAdList',
        'img_ListBg',
        'render',
        'Box(scrollList)',
        'Image,thumb',
        'di1.png',
        '30,30,30,30',
        'mask',
        'Image(scrollList)',
        'imgArr',
        'scaleNum',
        'sizeTran',
        'onEnable',
        'getChildByName',
        'stringify',
        'clearRes',
        'scrollBar',
        'mouseEnabled',
        'touchScrollEnable',
        'concat',
        'visible',
        'itemRenderFun',
        'MOUSE_OUT',
        'MOUSE_OVER',
        'endAni',
        'loopList',
        'value',
        'max',
        'clearAll',
        'Tween',
        'checkPoints',
        'Point',
        'localToGlobal',
        'getComponent',
        '_box_adTwo',
        'Box,box_adTwo',
        'laya/pages/prefab/box_adTwo.prefab',
        'Image,img_ad0',
        'img_ad0',
        'Image,img_adImg',
        'img_adImg',
        'Image(box_adTwo)',
        'Image,img_ad1',
        'img_ad1',
        'ani1',
        'spaceNum',
        'img_ad0Ad',
        'img_ad0AdMask',
        'img_ad1AdMask',
        'img_ad1Ad',
        'setSpaceX',
        'onDisable',
        'platform',
        '87413jqeNth',
        '2346602kVRAUB',
        '3CyABui',
        '1105096WrnHHp',
        '2694390xcexmS',
        '1049580EFyKKj',
        '7ihVvwK',
        '7407056rDgRzS',
        '10383822vtjnWb',
        'beEnabled',
        'isMuted',
        'bePauseMusic',
        'tryToResumeIntervalId',
        'adShowing',
        'init',
        'musicAudio',
        'soundAudio',
        'document',
        'addEventListener',
        'mousedown',
        'tryToResumeAudioContext',
        'touchstart',
        'visibilitychange',
        'bind',
        'getContext',
        'onstatechange',
        'onMusicStatechange',
        'onSoundStatechange',
        'musicVolume',
        'log',
        'Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser',
        'onVisibilitychange',
        'visibilityState',
        'hidden',
        'muted',
        'timer',
        'scale',
        'updateTimer',
        'physicsTimer',
        'pause',
        'stage',
        'renderingEnabled',
        'resume',
        'onDBInstanceMuted',
        'isSuspend',
        'bePauseSound',
        'removeEventListener',
        'suspend',
        'pauseMusic',
        'stopAllNoLoop',
        'pauseSound',
        'stopAll',
        'parse',
        'playMusic',
        'stopMusic',
        'stopSound',
        'stop',
        'playSound'
    ];
    _0x5ea2 = function () {
        return _0x2071e2;
    };
    return _0x5ea2();
}