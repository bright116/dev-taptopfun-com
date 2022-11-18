function _0x27c3(_0x225e0b, _0x4dab14) {
    const _0x3295df = _0x3295();
    return _0x27c3 = function (_0x27c3fb, _0x1d8371) {
        _0x27c3fb = _0x27c3fb - 0x15b;
        let _0x560249 = _0x3295df[_0x27c3fb];
        return _0x560249;
    }, _0x27c3(_0x225e0b, _0x4dab14);
}
(function (_0x1cd7c1, _0x2b1cd3) {
    const _0x32498e = _0x27c3, _0x463f97 = _0x1cd7c1();
    while (!![]) {
        try {
            const _0x5248b8 = -parseInt(_0x32498e(0x15b)) / 0x1 + -parseInt(_0x32498e(0x15c)) / 0x2 + -parseInt(_0x32498e(0x15d)) / 0x3 * (parseInt(_0x32498e(0x15e)) / 0x4) + -parseInt(_0x32498e(0x15f)) / 0x5 * (parseInt(_0x32498e(0x160)) / 0x6) + -parseInt(_0x32498e(0x161)) / 0x7 * (parseInt(_0x32498e(0x162)) / 0x8) + parseInt(_0x32498e(0x163)) / 0x9 + parseInt(_0x32498e(0x164)) / 0xa;
            if (_0x5248b8 === _0x2b1cd3)
                break;
            else
                _0x463f97['push'](_0x463f97['shift']());
        } catch (_0x508476) {
            _0x463f97['push'](_0x463f97['shift']());
        }
    }
}(_0x3295, 0x1a8f7), !function () {
    const _0x3936ad = _0x27c3;
    class _0x779baf {
        constructor() {
            const _0x3e591d = _0x27c3;
            this[_0x3e591d(0x165)] = ![], this[_0x3e591d(0x166)] = ![], this[_0x3e591d(0x167)] = ![], this['bePauseMusic'] = ![], this[_0x3e591d(0x168)] = -0x1, this['isVisibilityMuted'] = ![], this['adShowing'] = ![];
        }
        ['init']() {
            return new Promise((_0x352f22, _0x13765b) => {
                const _0x3d306a = _0x27c3;
                try {
                    this[_0x3d306a(0x169)] = new _0x16db97(), this[_0x3d306a(0x16a)] = new _0x16db97(), window[_0x3d306a(0x16b)][_0x3d306a(0x16c)](_0x3d306a(0x16d), this[_0x3d306a(0x16e)][_0x3d306a(0x16f)](this), !![]), window[_0x3d306a(0x16b)]['addEventListener'](_0x3d306a(0x170), this[_0x3d306a(0x16e)][_0x3d306a(0x16f)](this), !![]), window['document'][_0x3d306a(0x16c)](_0x3d306a(0x171), this[_0x3d306a(0x172)][_0x3d306a(0x16f)](this)), this['tryToResumeIntervalId'] = setInterval(this['tryToResumeAudioContext'][_0x3d306a(0x16f)](this), 0xc8), this[_0x3d306a(0x169)][_0x3d306a(0x173)]()[_0x3d306a(0x174)] = this['onMusicStatechange'][_0x3d306a(0x16f)](this), this[_0x3d306a(0x16a)][_0x3d306a(0x173)]()['onstatechange'] = this[_0x3d306a(0x175)][_0x3d306a(0x16f)](this), this[_0x3d306a(0x165)] = !![], this['musicVolume'] = 0x3c, _0x352f22(!![]);
                } catch (_0x44bcf2) {
                    console['log'](_0x3d306a(0x176), _0x44bcf2), alert(_0x3d306a(0x177)), _0x352f22(![]);
                }
            });
        }
        [_0x3936ad(0x172)]() {
            const _0x2d433f = _0x3936ad;
            if (window[_0x2d433f(0x178)][_0x2d433f(0x179)])
                return;
            if (document[_0x2d433f(0x17a)] == _0x2d433f(0x17b))
                !this[_0x2d433f(0x166)] && (this[_0x2d433f(0x17c)] = this[_0x2d433f(0x17d)] = !![]), Laya[_0x2d433f(0x17e)][_0x2d433f(0x17f)] = 0x0, Laya['stage'][_0x2d433f(0x180)] = ![], Laya[_0x2d433f(0x181)] && Laya[_0x2d433f(0x181)]['pause'](), Laya[_0x2d433f(0x182)] && Laya[_0x2d433f(0x182)][_0x2d433f(0x183)]();
            else
                document[_0x2d433f(0x17a)] == 'visible' && (this['isVisibilityMuted'] && (this['isVisibilityMuted'] = this[_0x2d433f(0x17d)] = ![]), Laya[_0x2d433f(0x17e)][_0x2d433f(0x17f)] = 0x1, Laya['stage']['renderingEnabled'] = !![], Laya[_0x2d433f(0x181)] && Laya[_0x2d433f(0x181)][_0x2d433f(0x184)](), Laya[_0x2d433f(0x182)] && Laya[_0x2d433f(0x182)]['resume']());
        }
        [_0x3936ad(0x185)]() {
        }
        [_0x3936ad(0x16e)]() {
            const _0x4cf3b3 = _0x3936ad;
            if (this[_0x4cf3b3(0x166)])
                return;
            this[_0x4cf3b3(0x169)][_0x4cf3b3(0x186)]() && !this[_0x4cf3b3(0x187)] && this[_0x4cf3b3(0x169)][_0x4cf3b3(0x184)](), this[_0x4cf3b3(0x16a)]['isSuspend']() && !this[_0x4cf3b3(0x167)] && this['soundAudio']['resume'](), (!this['musicAudio'][_0x4cf3b3(0x186)]() || !this['soundAudio']['isSuspend']()) && (window['document'][_0x4cf3b3(0x188)](_0x4cf3b3(0x16d), this[_0x4cf3b3(0x16e)][_0x4cf3b3(0x16f)](this), !![]), window['document'][_0x4cf3b3(0x188)](_0x4cf3b3(0x170), this[_0x4cf3b3(0x16e)][_0x4cf3b3(0x16f)](this), !![]), clearInterval(this[_0x4cf3b3(0x168)]), this[_0x4cf3b3(0x168)] = -0x1);
        }
        ['onMusicStatechange']() {
            const _0x3fe266 = _0x3936ad;
            this[_0x3fe266(0x169)][_0x3fe266(0x186)]() && !this[_0x3fe266(0x166)] && !this[_0x3fe266(0x187)] && this[_0x3fe266(0x168)] === -0x1 && (window[_0x3fe266(0x16b)][_0x3fe266(0x16c)](_0x3fe266(0x16d), this[_0x3fe266(0x16e)][_0x3fe266(0x16f)](this), !![]), window[_0x3fe266(0x16b)]['addEventListener'](_0x3fe266(0x170), this[_0x3fe266(0x16e)][_0x3fe266(0x16f)](this), !![]), this[_0x3fe266(0x168)] = setInterval(this[_0x3fe266(0x16e)][_0x3fe266(0x16f)](this), 0xc8));
        }
        [_0x3936ad(0x175)]() {
            const _0x23dd78 = _0x3936ad;
            this['soundAudio'][_0x23dd78(0x186)]() && !this[_0x23dd78(0x166)] && !this[_0x23dd78(0x167)] && this['tryToResumeIntervalId'] === -0x1 && (window[_0x23dd78(0x16b)]['addEventListener'](_0x23dd78(0x16d), this[_0x23dd78(0x16e)][_0x23dd78(0x16f)](this), !![]), window[_0x23dd78(0x16b)][_0x23dd78(0x16c)](_0x23dd78(0x170), this[_0x23dd78(0x16e)]['bind'](this), !![]), this[_0x23dd78(0x168)] = setInterval(this[_0x23dd78(0x16e)][_0x23dd78(0x16f)](this), 0xc8));
        }
        set [_0x3936ad(0x17d)](_0xc3551) {
            const _0x17152f = _0x3936ad;
            this[_0x17152f(0x166)] = _0xc3551, this[_0x17152f(0x166)] ? (this[_0x17152f(0x169)][_0x17152f(0x189)](), this[_0x17152f(0x16a)]['suspend']()) : this[_0x17152f(0x168)] == -0x1 && (this[_0x17152f(0x168)] = setInterval(this[_0x17152f(0x16e)][_0x17152f(0x16f)](this), 0xc8));
        }
        get [_0x3936ad(0x17d)]() {
            return this['isMuted'];
        }
        set [_0x3936ad(0x183)](_0x1b136d) {
            const _0x4fc4d9 = _0x3936ad;
            this[_0x4fc4d9(0x18a)] = _0x1b136d, this[_0x4fc4d9(0x18b)] = _0x1b136d, !_0x1b136d && this['soundAudio']['stopAllNoLoop']();
        }
        get [_0x3936ad(0x183)]() {
            const _0x352f0f = _0x3936ad;
            return this['pauseSound'] || this[_0x352f0f(0x18b)];
        }
        set [_0x3936ad(0x18a)](_0x30d04e) {
            const _0x3d93ca = _0x3936ad;
            this[_0x3d93ca(0x167)] = _0x30d04e;
            if (this[_0x3d93ca(0x167)])
                this['soundAudio'][_0x3d93ca(0x189)]();
            else {
                if (this['isMuted'])
                    return;
                this[_0x3d93ca(0x16a)][_0x3d93ca(0x184)]();
            }
        }
        get [_0x3936ad(0x18a)]() {
            const _0x239cad = _0x3936ad;
            return this[_0x239cad(0x167)];
        }
        get [_0x3936ad(0x18b)]() {
            const _0x1a1536 = _0x3936ad;
            return this[_0x1a1536(0x187)];
        }
        set [_0x3936ad(0x18b)](_0x43cc89) {
            const _0xbb5fbb = _0x3936ad;
            this['bePauseMusic'] = _0x43cc89;
            if (this[_0xbb5fbb(0x187)])
                this[_0xbb5fbb(0x169)][_0xbb5fbb(0x189)]();
            else {
                if (this[_0xbb5fbb(0x166)])
                    return;
                this[_0xbb5fbb(0x169)][_0xbb5fbb(0x184)]();
            }
        }
        ['stopAll']() {
            const _0x152774 = _0x3936ad;
            this[_0x152774(0x169)][_0x152774(0x18c)](), this['soundAudio'][_0x152774(0x18c)]();
        }
        [_0x3936ad(0x18d)](_0x7651f1, _0x38bc3b, _0x3c04f2) {
            const _0x16318d = _0x3936ad;
            this[_0x16318d(0x16a)][_0x16318d(0x18d)](_0x7651f1, _0x38bc3b);
        }
        [_0x3936ad(0x18e)](_0x696ccd) {
            const _0x534f37 = _0x3936ad;
            this[_0x534f37(0x169)][_0x534f37(0x18c)](), this[_0x534f37(0x169)][_0x534f37(0x18e)](_0x696ccd);
        }
        [_0x3936ad(0x18f)]() {
            const _0x136182 = _0x3936ad;
            this[_0x136182(0x169)][_0x136182(0x18c)]();
        }
        ['stopSound'](_0x15654a) {
            const _0x143ff0 = _0x3936ad;
            this[_0x143ff0(0x16a)][_0x143ff0(0x190)](_0x15654a);
        }
        set [_0x3936ad(0x191)](_0x396989) {
            const _0x3bb802 = _0x3936ad;
            this[_0x3bb802(0x169)][_0x3bb802(0x191)] = _0x396989;
        }
        get [_0x3936ad(0x191)]() {
            const _0x2c846e = _0x3936ad;
            return this[_0x2c846e(0x169)][_0x2c846e(0x191)];
        }
        [_0x3936ad(0x192)](_0x27fb04, _0x1a9fdf = ![], _0x5dbeec = ![]) {
            const _0x189941 = _0x3936ad;
            if (!this[_0x189941(0x165)])
                return;
            this[_0x189941(0x16a)][_0x189941(0x193)](_0x27fb04, _0x1a9fdf, _0x5dbeec);
        }
    }
    class _0x283380 {
    }
    class _0x16db97 {
        constructor() {
            const _0x24a184 = _0x3936ad;
            this[_0x24a184(0x194)] = 0x64, this['_audioInstances'] = new Map(), this[_0x24a184(0x195)] = 0x64, window['AudioContext'] = window[_0x24a184(0x196)] || window[_0x24a184(0x197)], this[_0x24a184(0x198)] = new AudioContext();
        }
        ['getContext']() {
            const _0x1ff379 = _0x3936ad;
            return this[_0x1ff379(0x198)];
        }
        ['isSuspend']() {
            const _0x4a259c = _0x3936ad;
            return this['context'][_0x4a259c(0x199)] === 'suspended';
        }
        [_0x3936ad(0x189)]() {
            const _0xf9ef48 = _0x3936ad;
            this['context'][_0xf9ef48(0x189)]();
        }
        ['resume']() {
            const _0x15be04 = _0x3936ad;
            this['context'][_0x15be04(0x184)]();
        }
        [_0x3936ad(0x19a)]() {
            const _0x3a371a = _0x3936ad, _0x3fb305 = this[_0x3a371a(0x19b)]['values']();
            for (const _0x1aa46e of _0x3fb305) {
                const _0x2bf6ec = _0x1aa46e[_0x3a371a(0x19c)];
                if (_0x2bf6ec['source'][_0x3a371a(0x19d)] && !_0x2bf6ec[_0x3a371a(0x19e)][_0x3a371a(0x19f)]) {
                    try {
                        _0x2bf6ec[_0x3a371a(0x19e)][_0x3a371a(0x190)](this[_0x3a371a(0x198)]['currentTime']);
                    } catch (_0x117ff9) {
                        _0x2bf6ec[_0x3a371a(0x19e)][_0x3a371a(0x1a0)]();
                    }
                    _0x2bf6ec[_0x3a371a(0x19e)][_0x3a371a(0x1a1)] = function () {
                    }, _0x2bf6ec[_0x3a371a(0x1a2)]();
                }
            }
        }
        [_0x3936ad(0x18c)]() {
            const _0x21ae18 = _0x3936ad, _0x32607b = this[_0x21ae18(0x19b)][_0x21ae18(0x1a3)]();
            for (const _0x340f74 of _0x32607b) {
                const _0xbb96b3 = _0x340f74[_0x21ae18(0x19c)];
                if (_0xbb96b3[_0x21ae18(0x19e)][_0x21ae18(0x19d)]) {
                    try {
                        _0xbb96b3['source'][_0x21ae18(0x190)](this[_0x21ae18(0x198)]['currentTime']);
                    } catch (_0x3395d8) {
                        _0xbb96b3[_0x21ae18(0x19e)]['disconnect']();
                    }
                    _0xbb96b3[_0x21ae18(0x19e)][_0x21ae18(0x1a1)] = function () {
                    }, _0xbb96b3[_0x21ae18(0x1a2)]();
                }
            }
        }
        [_0x3936ad(0x190)](_0x1b9176) {
            const _0x53f95a = _0x3936ad;
            if (this['_audioInstances'][_0x53f95a(0x1a4)](_0x1b9176)) {
                const _0x4a3bf1 = this['_audioInstances'][_0x53f95a(0x1a5)](_0x1b9176);
                this[_0x53f95a(0x1a6)](_0x4a3bf1);
            }
        }
        ['_stopSound'](_0x3a8bb6) {
            const _0x47eeef = _0x3936ad, _0x6a41f = _0x3a8bb6[_0x47eeef(0x19c)];
            if (_0x6a41f[_0x47eeef(0x19e)]['buffer']) {
                try {
                    _0x6a41f[_0x47eeef(0x19e)][_0x47eeef(0x190)](this[_0x47eeef(0x198)][_0x47eeef(0x1a7)]);
                } catch (_0x1b546e) {
                    _0x6a41f['source']['disconnect']();
                }
                _0x6a41f[_0x47eeef(0x19e)][_0x47eeef(0x1a1)] = function () {
                }, _0x6a41f[_0x47eeef(0x1a2)]();
            }
        }
        [_0x3936ad(0x18e)](_0xe2c696) {
            const _0x1e807e = _0x3936ad;
            this['_music'] && this[_0x1e807e(0x1a6)](this[_0x1e807e(0x1a8)]), this[_0x1e807e(0x19b)]['has'](_0xe2c696) ? (this[_0x1e807e(0x1a8)] = this[_0x1e807e(0x19b)]['get'](_0xe2c696), this[_0x1e807e(0x191)] = this[_0x1e807e(0x195)], this[_0x1e807e(0x193)](_0xe2c696, !![])) : this[_0x1e807e(0x1a9)](_0xe2c696, () => {
                const _0x244a91 = _0x1e807e;
                this[_0x244a91(0x18e)](_0xe2c696);
            });
        }
        [_0x3936ad(0x18f)]() {
            const _0x4a8a69 = _0x3936ad;
            this[_0x4a8a69(0x1a8)] && this[_0x4a8a69(0x1a6)](this[_0x4a8a69(0x1a8)]);
        }
        set ['musicVolume'](_0x28bde1) {
            const _0x39610f = _0x3936ad;
            this[_0x39610f(0x195)] = _0x28bde1, this[_0x39610f(0x1a8)] && (this[_0x39610f(0x1a8)][_0x39610f(0x19c)][_0x39610f(0x1aa)][_0x39610f(0x1aa)][_0x39610f(0x1ab)] = this[_0x39610f(0x195)] / 0x64);
        }
        get [_0x3936ad(0x191)]() {
            const _0x36cdd0 = _0x3936ad;
            return this[_0x36cdd0(0x195)];
        }
        [_0x3936ad(0x193)](_0x31beca, _0x7cd70b = ![], _0x65919d = ![]) {
            const _0x2320eb = _0x3936ad;
            if (this[_0x2320eb(0x19b)][_0x2320eb(0x1a4)](_0x31beca)) {
                const _0x1e2a71 = this[_0x2320eb(0x19b)][_0x2320eb(0x1a5)](_0x31beca), _0x2443e1 = _0x1e2a71[_0x2320eb(0x19c)];
                if (_0x65919d && !_0x2443e1[_0x2320eb(0x1ac)])
                    return;
                this[_0x2320eb(0x190)](_0x31beca);
                if (_0x1e2a71['buffer'])
                    try {
                        if (window[_0x2320eb(0x178)][_0x2320eb(0x183)] && !_0x7cd70b)
                            return;
                        _0x2443e1[_0x2320eb(0x1ad)](this[_0x2320eb(0x198)][_0x2320eb(0x1a7)], _0x1e2a71[_0x2320eb(0x19d)]), _0x2443e1['source']['loop'] = _0x7cd70b;
                    } catch (_0x5b91d5) {
                        console['error'](_0x2320eb(0x1ae) + _0x5b91d5);
                    }
            } else
                this[_0x2320eb(0x1a9)](_0x31beca, () => {
                    const _0xdc8140 = _0x2320eb;
                    this[_0xdc8140(0x193)](_0x31beca, _0x7cd70b);
                });
        }
        [_0x3936ad(0x1af)](_0x3b2dac, _0x152cd7) {
            const _0x430493 = _0x3936ad;
            let _0x383ef4 = _0x3b2dac[_0x430493(0x1b0)], _0x2d4760 = 0x0;
            for (let _0x445161 = 0x0; _0x445161 < _0x3b2dac[_0x430493(0x1b0)]; _0x445161++) {
                const _0x280130 = _0x3b2dac[_0x445161];
                this[_0x430493(0x1a9)](_0x280130, () => {
                    _0x2d4760++, _0x2d4760 >= _0x383ef4 && (_0x152cd7 && _0x152cd7());
                });
            }
        }
        [_0x3936ad(0x1b1)](_0x7a0003) {
            const _0x4d92af = _0x3936ad;
            if (this['_audioInstances']['has'](_0x7a0003)) {
                const _0x2fb80d = this[_0x4d92af(0x19b)][_0x4d92af(0x1a5)](_0x7a0003);
                _0x2fb80d[_0x4d92af(0x19c)][_0x4d92af(0x1b2)] = !![];
            }
        }
        [_0x3936ad(0x1b3)]() {
            const _0x41ff00 = _0x3936ad;
            let _0x425abf = this[_0x41ff00(0x198)];
            const _0x3a9178 = {
                'gain': _0x425abf[_0x41ff00(0x1b4)](),
                'panner': _0x425abf[_0x41ff00(0x1b5)](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x5a4402, _0x5b79b1, _0x1736c5) {
                    const _0x3678fe = _0x41ff00;
                    this[_0x3678fe(0x19e)][_0x3678fe(0x19d)] = _0x5b79b1;
                    var _0x28dc4a = this;
                    this['ended'] = ![], this['source'][_0x3678fe(0x1a1)] = function () {
                        const _0x20d873 = _0x3678fe;
                        _0x28dc4a[_0x20d873(0x1a2)](), _0x28dc4a['ended'] = !![];
                    }, this[_0x3678fe(0x19e)][_0x3678fe(0x1b6)](_0x5a4402, _0x1736c5);
                },
                'setup': function () {
                    const _0xe434d5 = _0x41ff00;
                    this[_0xe434d5(0x19e)] = _0x425abf[_0xe434d5(0x1b7)](), this[_0xe434d5(0x1b8)]();
                },
                'setupPanning': function () {
                    const _0x4468fa = _0x41ff00;
                    this['threeD'] ? (this[_0x4468fa(0x19e)][_0x4468fa(0x1a0)](), this['source'][_0x4468fa(0x1b9)](this[_0x4468fa(0x1ba)]), this[_0x4468fa(0x1ba)][_0x4468fa(0x1b9)](this[_0x4468fa(0x1aa)])) : (this[_0x4468fa(0x1ba)][_0x4468fa(0x1a0)](), this[_0x4468fa(0x19e)][_0x4468fa(0x1b9)](this[_0x4468fa(0x1aa)]));
                }
            };
            return _0x3a9178[_0x41ff00(0x1ba)][_0x41ff00(0x1bb)] = 0x0, _0x3a9178[_0x41ff00(0x1aa)][_0x41ff00(0x1b9)](this[_0x41ff00(0x198)][_0x41ff00(0x1bc)]), _0x3a9178[_0x41ff00(0x1a2)](), _0x3a9178;
        }
        [_0x3936ad(0x18d)](_0x56ba6d, _0x308295, _0xb4b9d8) {
            const _0x27e0a7 = _0x3936ad, _0x4ac35b = new _0x283380();
            _0x4ac35b[_0x27e0a7(0x1bd)] = _0x56ba6d, _0x4ac35b['instance'] = this[_0x27e0a7(0x1b3)](), this[_0x27e0a7(0x19b)][_0x27e0a7(0x1be)](_0x56ba6d, _0x4ac35b), this['context'][_0x27e0a7(0x1bf)](_0x308295, function (_0x217755) {
                const _0x4c0edc = _0x27e0a7;
                _0x4ac35b[_0x4c0edc(0x19d)] = _0x217755, _0xb4b9d8 && _0xb4b9d8();
            }, function (_0x3a385f) {
                const _0x346705 = _0x27e0a7;
                _0x4ac35b['error'] = !![], _0xb4b9d8 && _0xb4b9d8(), console['log'](_0x346705(0x1c0) + _0x4ac35b[_0x346705(0x1bd)]);
            });
        }
        [_0x3936ad(0x1a9)](_0x4224e1, _0xbc4aaf) {
            const _0x10efbd = _0x3936ad;
            if (this['_audioInstances'][_0x10efbd(0x1a4)](_0x4224e1)) {
                _0xbc4aaf && _0xbc4aaf();
                return;
            }
            const _0x1f1a4e = this;
            var _0x336097 = new XMLHttpRequest();
            _0x336097['open'](_0x10efbd(0x1c1), _0x4224e1, !![]), _0x336097[_0x10efbd(0x1c2)] = 'arraybuffer', _0x336097[_0x10efbd(0x1c3)] = function () {
                const _0x26acb3 = _0x10efbd;
                if (_0x336097[_0x26acb3(0x1c4)] === 0xc8 || _0x336097[_0x26acb3(0x1c4)] === 0x0)
                    _0x1f1a4e[_0x26acb3(0x18d)](_0x4224e1, _0x336097[_0x26acb3(0x1c5)], _0xbc4aaf);
                else
                    throw _0x26acb3(0x1c6);
            }, _0x336097[_0x10efbd(0x1c7)] = function () {
                const _0x48c4de = _0x10efbd;
                _0xbc4aaf && _0xbc4aaf();
                throw _0x48c4de(0x1c6);
            }, _0x336097[_0x10efbd(0x1c8)] = function () {
                _0xbc4aaf && _0xbc4aaf();
            }, _0x336097['onabort'] = function () {
                _0xbc4aaf && _0xbc4aaf();
            }, _0x336097[_0x10efbd(0x1c9)](null);
        }
    }
    const _0x4e694d = window[_0x3936ad(0x178)] = new _0x779baf();
    class _0xac7cb0 {
        constructor() {
            const _0x5c9809 = _0x3936ad;
            this[_0x5c9809(0x1ca)] = ![], this[_0x5c9809(0x1cb)] = '', this[_0x5c9809(0x1cc)] = '', this['to_'] = '', this[_0x5c9809(0x1cd)] = null, this[_0x5c9809(0x1ce)] = ![], this[_0x5c9809(0x1cf)] = !![], this[_0x5c9809(0x1d0)]();
        }
        static [_0x3936ad(0x1d1)]() {
            const _0x1c5e14 = _0x3936ad;
            return !this[_0x1c5e14(0x1d2)] && (this[_0x1c5e14(0x1d2)] = new _0xac7cb0()), this[_0x1c5e14(0x1d2)];
        }
        [_0x3936ad(0x1d0)]() {
            const _0xeded22 = _0x3936ad;
            let _0x344a87 = document['getElementById']('layaCanvas');
            _0x344a87 && (_0x344a87[_0xeded22(0x16c)]('mouseup', this[_0xeded22(0x1d3)][_0xeded22(0x16f)](this)), _0x344a87[_0xeded22(0x16c)](_0xeded22(0x1d4), this[_0xeded22(0x1d3)][_0xeded22(0x16f)](this)));
        }
        [_0x3936ad(0x1d3)]() {
            const _0xccb092 = _0x3936ad;
            this['canNavigateActive_'] && YYGGames[_0xccb092(0x1d5)](this[_0xccb092(0x1cb)], this[_0xccb092(0x1cc)], this['to_']), this['canNavigateActive_'] = ![];
        }
        [_0x3936ad(0x1d6)](_0x5939a7) {
            const _0x2d6814 = _0x3936ad;
            let _0x21f3a1 = null;
            try {
                let _0x27ea42 = Laya[_0x2d6814(0x1d7)]['getItem'](_0x5939a7);
                _0x21f3a1 = JSON[_0x2d6814(0x18d)](_0x27ea42);
            } catch (_0x50b5c8) {
            }
            return _0x21f3a1;
        }
        [_0x3936ad(0x1d8)](_0x19ed26, _0x3028e3) {
            const _0x402ede = _0x3936ad;
            return Laya[_0x402ede(0x1d7)][_0x402ede(0x1d9)](_0x19ed26, JSON[_0x402ede(0x1da)](_0x3028e3));
        }
        [_0x3936ad(0x1d5)](_0x3bd0b8, _0x5dbdcc, _0x41ae8b) {
            const _0x254558 = _0x3936ad;
            this[_0x254558(0x1ca)] === ![] && (this['screen_'] = _0x3bd0b8, this[_0x254558(0x1cc)] = _0x5dbdcc, this[_0x254558(0x1db)] = _0x41ae8b, this[_0x254558(0x1ca)] = !![]);
        }
        [_0x3936ad(0x1dc)]() {
            const _0x191cb3 = _0x3936ad;
            _0x4e694d[_0x191cb3(0x17d)] = !![];
        }
        [_0x3936ad(0x1dd)]() {
            _0x4e694d['muted'] = ![];
        }
        ['showInterstitial'](_0xb506aa) {
            const _0x4379af = _0x3936ad;
            console[_0x4379af(0x1de)](_0x4379af(0x1df)), YYGGames[_0x4379af(0x1e0)]({
                'beforeShowAd': () => {
                    const _0x4abbd6 = _0x4379af;
                    window[_0x4abbd6(0x178)]['adShowing'] = !![], this[_0x4abbd6(0x1dc)](), Laya['timer'][_0x4abbd6(0x17f)] = 0x0, Laya[_0x4abbd6(0x1e1)][_0x4abbd6(0x180)] = ![], Laya[_0x4abbd6(0x181)] && Laya[_0x4abbd6(0x181)][_0x4abbd6(0x183)](), Laya[_0x4abbd6(0x182)] && Laya[_0x4abbd6(0x182)][_0x4abbd6(0x183)]();
                },
                'afterShowAd': () => {
                    const _0xa305c9 = _0x4379af;
                    window[_0xa305c9(0x1e2)](), this['onfocus'](), window[_0xa305c9(0x178)]['adShowing'] = ![], Laya[_0xa305c9(0x17e)][_0xa305c9(0x17f)] = 0x1, Laya[_0xa305c9(0x1e1)][_0xa305c9(0x180)] = !![], Laya[_0xa305c9(0x181)] && Laya[_0xa305c9(0x181)][_0xa305c9(0x184)](), Laya[_0xa305c9(0x182)] && Laya[_0xa305c9(0x182)][_0xa305c9(0x184)](), _0xb506aa && _0xb506aa();
                }
            });
        }
        [_0x3936ad(0x1e3)](_0x27a221, _0x61a3c, _0x4dde05) {
            const _0x336ee9 = _0x3936ad;
            console[_0x336ee9(0x1de)](_0x336ee9(0x1e4));
            if (!YYGGames[_0x336ee9(0x1e5)]()) {
                this['prompt'](_0x336ee9(0x1e6)), _0x4dde05 && _0x4dde05();
                return;
            }
            YYGGames[_0x336ee9(0x1e3)]({
                'beforeShowAd': () => {
                    const _0x5c1fbd = _0x336ee9;
                    window['WebAudioEngine'][_0x5c1fbd(0x179)] = !![], this[_0x5c1fbd(0x1dc)](), Laya[_0x5c1fbd(0x17e)][_0x5c1fbd(0x17f)] = 0x0, Laya[_0x5c1fbd(0x1e1)][_0x5c1fbd(0x180)] = ![], Laya['updateTimer'] && Laya[_0x5c1fbd(0x181)][_0x5c1fbd(0x183)](), Laya[_0x5c1fbd(0x182)] && Laya[_0x5c1fbd(0x182)][_0x5c1fbd(0x183)]();
                },
                'afterShowAd': () => {
                    const _0x3124e4 = _0x336ee9;
                    window['focus'](), this[_0x3124e4(0x1dd)](), window['WebAudioEngine'][_0x3124e4(0x179)] = ![], Laya[_0x3124e4(0x17e)][_0x3124e4(0x17f)] = 0x1, Laya[_0x3124e4(0x1e1)]['renderingEnabled'] = !![], Laya[_0x3124e4(0x181)] && Laya['updateTimer'][_0x3124e4(0x184)](), Laya[_0x3124e4(0x182)] && Laya['physicsTimer'][_0x3124e4(0x184)]();
                },
                'rewardComplete': () => {
                    _0x27a221 && _0x27a221(), _0x27a221 = null;
                },
                'rewardDismissed': () => {
                    const _0x1fb03e = _0x336ee9;
                    _0x61a3c && (_0x61a3c(), _0x61a3c = null), this[_0x1fb03e(0x1e7)](_0x1fb03e(0x1e8));
                }
            });
        }
        [_0x3936ad(0x1e9)](_0x5e5f4f) {
            const _0x1b0f33 = _0x3936ad;
            _0x5e5f4f['renderHandler'] = new Laya[(_0x1b0f33(0x1ea))](_0x5e5f4f, function (_0xbc71e) {
                const _0x4a8a70 = _0x1b0f33;
                _0xbc71e['offAll'](Laya[_0x4a8a70(0x1eb)][_0x4a8a70(0x1ec)]), _0xbc71e['on'](Laya[_0x4a8a70(0x1eb)][_0x4a8a70(0x1ec)], _0xbc71e, () => {
                    const _0x73faff = _0x4a8a70;
                    _0xac7cb0[_0x73faff(0x1d1)]()['navigate'](_0x73faff(0x1ed), 'MORE', _0xbc71e['dataSource']['id']);
                });
            }), _0x5e5f4f[_0x1b0f33(0x1ee)] = _0xac7cb0[_0x1b0f33(0x1d1)]()['getForgames']();
        }
        ['prompt'](_0x28c814, _0x5009e3) {
            const _0x56a6 = _0x3936ad;
            !this[_0x56a6(0x1cd)] && (this[_0x56a6(0x1cd)] = document[_0x56a6(0x1ef)](_0x56a6(0x1f0)), this[_0x56a6(0x1cd)][_0x56a6(0x1f1)][_0x56a6(0x1f2)] = _0x56a6(0x1f3), document[_0x56a6(0x1f4)]['appendChild'](this[_0x56a6(0x1cd)]));
            this[_0x56a6(0x1cd)]['innerHTML'] = _0x28c814;
            let _0x1c1c60 = document['getElementById']('layaCanvas');
            _0x1c1c60 && (console[_0x56a6(0x1de)](_0x56a6(0x1f5), this[_0x56a6(0x1cd)][_0x56a6(0x1f1)]), console['log'](_0x56a6(0x1f5), _0x1c1c60['width']), this[_0x56a6(0x1cd)][_0x56a6(0x1f1)][_0x56a6(0x1f6)] = _0x1c1c60[_0x56a6(0x1f7)] * 0.8), _0x5009e3 = isNaN(_0x5009e3) ? 0x7d0 : _0x5009e3, this[_0x56a6(0x1cd)][_0x56a6(0x1f1)]['display'] = _0x56a6(0x1f8), this[_0x56a6(0x1cd)]['style']['opacity'] = '1', setTimeout(function () {
                const _0x404f98 = _0x56a6;
                var _0x267bad = 0.5;
                this[_0x404f98(0x1cd)][_0x404f98(0x1f1)][_0x404f98(0x1f9)] = _0x404f98(0x1fa) + _0x267bad + _0x404f98(0x1fb) + _0x267bad + _0x404f98(0x1fc), this['prompt_']['style'][_0x404f98(0x1fd)] = '0', this['prompt_']['style']['display'] = _0x404f98(0x1fe);
            }[_0x56a6(0x16f)](this), _0x5009e3);
        }
        [_0x3936ad(0x1ff)]() {
            const _0x1b5b2b = _0x3936ad;
            let _0x56b1ac = YYGGames[_0x1b5b2b(0x200)] || [], _0x459bbb = _0x56b1ac[_0x1b5b2b(0x201)]();
            for (let _0x589012 = 0x0, _0x5bf1e1 = _0x459bbb[_0x1b5b2b(0x1b0)]; _0x589012 < _0x5bf1e1; _0x589012++) {
                const _0x5733f8 = Math[_0x1b5b2b(0x202)](Math[_0x1b5b2b(0x203)]() * (_0x589012 + 0x1)), _0x375851 = _0x459bbb[_0x5733f8];
                _0x459bbb[_0x5733f8] = _0x459bbb[_0x589012], _0x459bbb[_0x589012] = _0x375851;
            }
            return _0x459bbb;
        }
        [_0x3936ad(0x204)]() {
            const _0x498b9a = _0x3936ad;
            if (!Laya || !Laya[_0x498b9a(0x205)])
                return null;
            if (!window['yad']) {
                const _0x16b757 = new Laya[(_0x498b9a(0x205))]();
                _0x16b757[_0x498b9a(0x206)] = 'yad.png', _0x16b757[_0x498b9a(0x207)] = 0x30d40, window[_0x498b9a(0x208)] = _0x16b757;
            }
            return window[_0x498b9a(0x208)];
        }
        [_0x3936ad(0x209)](_0x295ae0, _0x1421d6) {
            const _0x58ec5d = _0x3936ad;
            !this['needStartUp'] && (_0x1421d6 && _0x1421d6());
            if (this[_0x58ec5d(0x1ce)])
                return;
            _0xac7cb0[_0x58ec5d(0x1d1)]()['showSplash'](), _0xac7cb0[_0x58ec5d(0x1d1)]()[_0x58ec5d(0x204)](), this[_0x58ec5d(0x20a)](), this[_0x58ec5d(0x20b)](), window[_0x58ec5d(0x178)]['init']()[_0x58ec5d(0x20c)](() => {
                const _0x43f977 = _0x58ec5d;
                Laya[_0x43f977(0x20d)][_0x43f977(0x18e)] = function (_0x5296da) {
                    const _0x574324 = _0x43f977;
                    window[_0x574324(0x178)] && window[_0x574324(0x178)][_0x574324(0x18e)](_0x5296da);
                }, Laya['SoundManager'][_0x43f977(0x192)] = function (_0x1a5655, _0x1f23f5 = ![]) {
                    const _0x16d5ce = _0x43f977;
                    window[_0x16d5ce(0x178)] && window[_0x16d5ce(0x178)][_0x16d5ce(0x192)](_0x1a5655, _0x1f23f5);
                }, Laya['SoundManager']['stopMusic'] = function () {
                    const _0x5d0077 = _0x43f977;
                    window[_0x5d0077(0x178)] && window[_0x5d0077(0x178)][_0x5d0077(0x18f)]();
                }, Laya[_0x43f977(0x20d)][_0x43f977(0x20e)] = function (_0x336a3d) {
                    const _0x1d737a = _0x43f977;
                    window[_0x1d737a(0x178)] && window['WebAudioEngine']['stopSound'](_0x336a3d);
                };
            }), this[_0x58ec5d(0x1ce)] = !![], Laya[_0x58ec5d(0x20f)]['load'](_0x58ec5d(0x210), Laya[_0x58ec5d(0x1ea)][_0x58ec5d(0x211)](this, _0x5564ba => {
                const _0x39fdfd = _0x58ec5d;
                YYGGames[_0x39fdfd(0x212)]({
                    'appName': _0x295ae0,
                    'config': _0x5564ba,
                    'complete': () => {
                        const _0xd1f52d = _0x39fdfd, _0x5d060d = YYGGames[_0xd1f52d(0x213)]();
                        window['scrollList'] = this['scrollList'](), window[_0xd1f52d(0x214)] = this['box_adTwo']();
                        switch (_0x5d060d) {
                        case AdPlatformType[_0xd1f52d(0x215)]:
                        case AdPlatformType[_0xd1f52d(0x216)]:
                            window[_0xd1f52d(0x208)] && (window[_0xd1f52d(0x208)][_0xd1f52d(0x17f)](0x0, 0x0), window[_0xd1f52d(0x208)][_0xd1f52d(0x217)]());
                            break;
                        default:
                            window['yad'] && Laya[_0xd1f52d(0x1e1)][_0xd1f52d(0x218)](window[_0xd1f52d(0x208)]), window[_0xd1f52d(0x208)]['on'](Laya[_0xd1f52d(0x1eb)]['MOUSE_DOWN'], window[_0xd1f52d(0x208)], _0x44c95e => {
                                const _0x58660f = _0xd1f52d;
                                _0x44c95e[_0x58660f(0x219)](), _0xac7cb0[_0x58660f(0x1d1)]()[_0x58660f(0x1d5)](_0x58660f(0x1ed), _0x58660f(0x21a));
                            });
                            break;
                        }
                        this[_0xd1f52d(0x1cf)] = ![], _0x1421d6 && _0x1421d6();
                    }
                });
            }));
        }
        [_0x3936ad(0x21b)](_0x4f1b28) {
            const _0x5a3aa1 = _0x3936ad;
            _0x4f1b28 ? YYGGames[_0x5a3aa1(0x21b)](_0x4f1b28) : YYGGames['showBanner']();
        }
        ['hideBanner']() {
            const _0x493da8 = _0x3936ad;
            YYGGames[_0x493da8(0x21c)]();
        }
        [_0x3936ad(0x21d)](_0x215278) {
            _0x215278 ? YYGGames['showSplash'](_0x215278) : YYGGames['showSplash']();
        }
        [_0x3936ad(0x21e)]() {
            const _0x2bf7cf = _0x3936ad;
            YYGGames[_0x2bf7cf(0x21e)]();
        }
        [_0x3936ad(0x21f)](_0x63788e, _0x157d80) {
            const _0x3d57f9 = _0x3936ad;
            !this[_0x3d57f9(0x1cf)] && (_0x157d80 && _0x157d80());
            if (this[_0x3d57f9(0x1ce)])
                return;
            _0xac7cb0['getInstance']()[_0x3d57f9(0x21d)](), _0xac7cb0[_0x3d57f9(0x1d1)]()[_0x3d57f9(0x204)](), this[_0x3d57f9(0x20a)](), this[_0x3d57f9(0x20b)](), window['WebAudioEngine'][_0x3d57f9(0x220)]()['then'](() => {
                const _0xdef5ed = _0x3d57f9;
                Laya[_0xdef5ed(0x20d)][_0xdef5ed(0x18e)] = function (_0x343a7) {
                    const _0x53a3d5 = _0xdef5ed;
                    window[_0x53a3d5(0x178)] && window[_0x53a3d5(0x178)][_0x53a3d5(0x18e)](_0x343a7);
                }, Laya[_0xdef5ed(0x20d)][_0xdef5ed(0x192)] = function (_0x3bdea3, _0x5e42a3 = ![]) {
                    const _0x2f7551 = _0xdef5ed;
                    window[_0x2f7551(0x178)] && window[_0x2f7551(0x178)][_0x2f7551(0x192)](_0x3bdea3);
                }, Laya[_0xdef5ed(0x20d)][_0xdef5ed(0x18f)] = function () {
                    const _0x3809e4 = _0xdef5ed;
                    window[_0x3809e4(0x178)] && window['WebAudioEngine'][_0x3809e4(0x18f)]();
                }, Laya['SoundManager'][_0xdef5ed(0x20e)] = function (_0x45522a) {
                    const _0x5c529d = _0xdef5ed;
                    window['WebAudioEngine'] && window[_0x5c529d(0x178)][_0x5c529d(0x20e)](_0x45522a);
                };
            }), this[_0x3d57f9(0x1ce)] = !![], Laya[_0x3d57f9(0x20f)]['load'](_0x3d57f9(0x210), Laya[_0x3d57f9(0x1ea)][_0x3d57f9(0x211)](this, _0x4288b1 => {
                const _0x1420c3 = _0x3d57f9;
                YYGGames[_0x1420c3(0x221)]({
                    'appName': _0x63788e,
                    'config': _0x4288b1,
                    'complete': () => {
                        const _0x55cd53 = _0x1420c3, _0x39cdc4 = YYGGames['getAdPlatformType']();
                        window[_0x55cd53(0x222)] = this['scrollList'](), window[_0x55cd53(0x214)] = this[_0x55cd53(0x214)]();
                        switch (_0x39cdc4) {
                        case AdPlatformType[_0x55cd53(0x215)]:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window[_0x55cd53(0x208)]['scale'](0x0, 0x0), window[_0x55cd53(0x208)][_0x55cd53(0x217)]());
                            break;
                        default:
                            window['yad'] && Laya[_0x55cd53(0x1e1)][_0x55cd53(0x218)](window['yad']), window[_0x55cd53(0x208)]['on'](Laya[_0x55cd53(0x1eb)][_0x55cd53(0x1ec)], window['yad'], _0x15cea4 => {
                                const _0x2b008e = _0x55cd53;
                                _0x15cea4['stopPropagation'](), _0xac7cb0[_0x2b008e(0x1d1)]()[_0x2b008e(0x1d5)]('GAME', _0x2b008e(0x21a));
                            });
                            break;
                        }
                        this['needStartUp'] = ![], _0x157d80 && _0x157d80();
                    }
                });
            }));
        }
        [_0x3936ad(0x223)](_0x25e3ce, _0x17a22b) {
            const _0x643262 = _0x3936ad;
            !this[_0x643262(0x1cf)] && (_0x17a22b && _0x17a22b());
            if (this[_0x643262(0x1ce)])
                return;
            _0xac7cb0[_0x643262(0x1d1)]()[_0x643262(0x21d)](), _0xac7cb0['getInstance']()[_0x643262(0x204)](), this['createNoVideo'](), this[_0x643262(0x20b)](), window[_0x643262(0x178)][_0x643262(0x220)]()['then'](() => {
                const _0x4138ef = _0x643262;
                Laya[_0x4138ef(0x20d)][_0x4138ef(0x18e)] = function (_0xe46646) {
                    const _0x63a39c = _0x4138ef;
                    window[_0x63a39c(0x178)] && window[_0x63a39c(0x178)]['playMusic'](_0xe46646);
                }, Laya[_0x4138ef(0x20d)][_0x4138ef(0x192)] = function (_0x40efd2) {
                    const _0xb3364f = _0x4138ef;
                    window[_0xb3364f(0x178)] && window[_0xb3364f(0x178)]['playSound'](_0x40efd2);
                }, Laya[_0x4138ef(0x20d)][_0x4138ef(0x18f)] = function (_0x2c25e7) {
                    const _0x2972f1 = _0x4138ef;
                    window['WebAudioEngine'] && window['WebAudioEngine'][_0x2972f1(0x18f)]();
                };
            }), this[_0x643262(0x1ce)] = !![], Laya[_0x643262(0x20f)]['load'](_0x643262(0x210), Laya[_0x643262(0x1ea)]['create'](this, _0x3993ba => {
                const _0x1011de = _0x643262;
                YYGGames[_0x1011de(0x224)]({
                    'channel': 0x5,
                    'appName': _0x25e3ce,
                    'config': _0x3993ba,
                    'complete': () => {
                        const _0x14fbf0 = _0x1011de, _0x2b0bab = YYGGames[_0x14fbf0(0x213)]();
                        window[_0x14fbf0(0x222)] = this[_0x14fbf0(0x222)](), window[_0x14fbf0(0x214)] = this['box_adTwo']();
                        switch (_0x2b0bab) {
                        case AdPlatformType[_0x14fbf0(0x215)]:
                        case AdPlatformType[_0x14fbf0(0x216)]:
                            window['yad'] && (window[_0x14fbf0(0x208)][_0x14fbf0(0x17f)](0x0, 0x0), window[_0x14fbf0(0x208)][_0x14fbf0(0x217)]());
                            break;
                        default:
                            window[_0x14fbf0(0x208)] && Laya[_0x14fbf0(0x1e1)][_0x14fbf0(0x218)](window[_0x14fbf0(0x208)]), window[_0x14fbf0(0x208)]['on'](Laya[_0x14fbf0(0x1eb)][_0x14fbf0(0x1ec)], window['yad'], _0x12b367 => {
                                const _0x12e54e = _0x14fbf0;
                                _0x12b367[_0x12e54e(0x219)](), _0xac7cb0['getInstance']()[_0x12e54e(0x1d5)](_0x12e54e(0x1ed), _0x12e54e(0x21a));
                            });
                            break;
                        }
                        this[_0x14fbf0(0x1cf)] = ![], _0x17a22b && _0x17a22b();
                    }
                });
            }));
        }
        [_0x3936ad(0x20a)]() {
            const _0x307030 = _0x3936ad;
            if (!Laya[_0x307030(0x225)] || !Laya[_0x307030(0x226)])
                return;
            let _0x293e67 = {
                'x': 0x0,
                'type': _0x307030(0x227),
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': _0x307030(0x227),
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': _0x307030(0x228),
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': _0x307030(0x229),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': 'Sprite',
                        'searchKey': _0x307030(0x22a),
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': _0x307030(0x22b),
                            'presetID': 0x2,
                            'preset': _0x307030(0x228),
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': _0x307030(0x22b),
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': _0x307030(0x22b),
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': 'Rect',
                                'searchKey': _0x307030(0x22c),
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': _0x307030(0x228),
                                    'height': 0x21c,
                                    'fillColor': _0x307030(0x22d)
                                },
                                'nodeParent': 0x4,
                                'label': _0x307030(0x22e),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x307030(0x22f),
                                'searchKey': _0x307030(0x22f),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x307030(0x230),
                                    'text': 'VIDEO',
                                    'presetID': 0x4,
                                    'preset': _0x307030(0x228),
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': _0x307030(0x231),
                                    'align': _0x307030(0x232)
                                },
                                'nodeParent': 0x4,
                                'label': _0x307030(0x233),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x307030(0x22f),
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x307030(0x230),
                                    'text': _0x307030(0x234),
                                    'presetID': 0x5,
                                    'preset': _0x307030(0x228),
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': '#ffffff',
                                    'align': _0x307030(0x232)
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVideo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x307030(0x22f),
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x307030(0x230),
                                    'text': _0x307030(0x235),
                                    'presetID': 0x6,
                                    'preset': _0x307030(0x228),
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': '#ffffff',
                                    'align': _0x307030(0x232)
                                },
                                'nodeParent': 0x4,
                                'label': _0x307030(0x233),
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
                        'name': _0x307030(0x236),
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }]
            };
            class _0x28270f extends Laya[_0x307030(0x226)] {
                constructor() {
                    super();
                }
                [_0x307030(0x237)]() {
                    const _0x294ec9 = _0x307030;
                    this[_0x294ec9(0x238)][_0x294ec9(0x239)] = 0x0, this[_0x294ec9(0x238)][_0x294ec9(0x23a)] = 0x0, this['owner']['left'] = 0x0, this[_0x294ec9(0x238)][_0x294ec9(0x23b)] = 0x0, this[_0x294ec9(0x22b)] = this[_0x294ec9(0x238)]['getChildByName']('spr_tip'), this[_0x294ec9(0x238)][_0x294ec9(0x1f7)] > this['owner'][_0x294ec9(0x23c)] ? this[_0x294ec9(0x22b)][_0x294ec9(0x17f)](this['owner'][_0x294ec9(0x23c)] / 0x780, this['owner']['height'] / 0x780) : this[_0x294ec9(0x22b)][_0x294ec9(0x17f)](this[_0x294ec9(0x238)]['width'] / 0x438, this[_0x294ec9(0x238)][_0x294ec9(0x1f7)] / 0x438), this[_0x294ec9(0x22b)][_0x294ec9(0x23d)](this[_0x294ec9(0x238)][_0x294ec9(0x1f7)] / 0x2, this['owner']['height'] / 0x2), this[_0x294ec9(0x238)]['on'](Laya['Event'][_0x294ec9(0x23e)], this, this[_0x294ec9(0x23f)]);
                }
                ['closePer']() {
                    const _0x1a130f = _0x307030;
                    _0xac7cb0[_0x1a130f(0x1d1)]()[_0x1a130f(0x240)]();
                }
            }
            let _0xd04b70 = new Laya[(_0x307030(0x225))]();
            _0xd04b70[_0x307030(0x241)] = _0x293e67, this[_0x307030(0x242)] = _0xd04b70['create'](), this[_0x307030(0x242)][_0x307030(0x207)] = 0x30d3f, this[_0x307030(0x242)][_0x307030(0x243)](_0x28270f);
        }
        [_0x3936ad(0x244)]() {
            const _0x440dbd = _0x3936ad;
            this['noVideoPer'] && Laya[_0x440dbd(0x1e1)]['addChild'](this['noVideoPer']);
        }
        [_0x3936ad(0x240)]() {
            const _0x273533 = _0x3936ad;
            this[_0x273533(0x242)] && this[_0x273533(0x242)]['removeSelf']();
        }
        [_0x3936ad(0x20b)]() {
            const _0x246453 = _0x3936ad;
            if (!Laya['Prefab'] || !Laya[_0x246453(0x226)])
                return;
            let _0x389b6e = {
                'x': 0xf,
                'type': _0x246453(0x227),
                'searchKey': _0x246453(0x245),
                'props': {
                    'var': _0x246453(0x246),
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': _0x246453(0x246),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': _0x246453(0x227),
                        'searchKey': _0x246453(0x227),
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': '#000000',
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': _0x246453(0x227),
                        'isOpen': !![],
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x84,
                        'child': []
                    },
                    {
                        'x': 0x1e,
                        'type': _0x246453(0x22f),
                        'searchKey': 'Label',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': _0x246453(0x230),
                            'text': 'LOADING\x5cnPLEASE\x20WAIT…',
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': _0x246453(0x231),
                            'centerY': 0x0,
                            'align': _0x246453(0x232)
                        },
                        'nodeParent': 0x83,
                        'label': _0x246453(0x22f),
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x85,
                        'child': []
                    }
                ]
            };
            class _0x3fc6e3 extends Laya[_0x246453(0x226)] {
                constructor() {
                    super();
                }
                [_0x246453(0x237)]() {
                }
                ['closePer']() {
                    const _0x522115 = _0x246453;
                    _0xac7cb0[_0x522115(0x1d1)]()[_0x522115(0x240)]();
                }
            }
            let _0x564adb = new Laya['Prefab']();
            _0x564adb['json'] = _0x389b6e, this['loadingPer'] = _0x564adb[_0x246453(0x211)](), this[_0x246453(0x247)][_0x246453(0x207)] = 0x30d3e, this[_0x246453(0x247)]['addComponent'](_0x3fc6e3);
        }
        [_0x3936ad(0x248)]() {
            const _0xfccabc = _0x3936ad;
            this[_0xfccabc(0x247)] && Laya['stage']['addChild'](this['loadingPer']);
        }
        [_0x3936ad(0x249)]() {
            const _0x4fa179 = _0x3936ad;
            this[_0x4fa179(0x247)] && this[_0x4fa179(0x247)][_0x4fa179(0x217)]();
        }
        [_0x3936ad(0x24a)]() {
            const _0x1e0f45 = _0x3936ad;
            class _0x4e25cf extends Laya[_0x1e0f45(0x227)] {
                constructor() {
                    const _0x19092c = _0x1e0f45;
                    super(), this[_0x19092c(0x24b)] = new Laya['Image'](), this[_0x19092c(0x24b)][_0x19092c(0x24c)] = _0x19092c(0x24d), this[_0x19092c(0x24e)](0x190, 0x12c), this[_0x19092c(0x24b)][_0x19092c(0x24e)](0x190, 0x12c), this[_0x19092c(0x218)](this[_0x19092c(0x24b)]);
                }
            }
            let _0x9a8ac7 = new Laya['List']();
            return _0x9a8ac7[_0x1e0f45(0x24e)](0x320, 0x258), _0x9a8ac7[_0x1e0f45(0x24f)] = _0x4e25cf, _0x9a8ac7;
        }
        [_0x3936ad(0x222)]() {
            const _0x527460 = _0x3936ad;
            if (!Laya || !Laya[_0x527460(0x1e1)])
                return null;
            if (YYGGames[_0x527460(0x213)]() == AdPlatformType[_0x527460(0x215)] || YYGGames[_0x527460(0x213)]() == AdPlatformType[_0x527460(0x216)]) {
                let _0x423fda = new Laya[(_0x527460(0x227))]();
                return _0x423fda[_0x527460(0x250)] = function () {
                }, _0x423fda;
            }
            if (!this[_0x527460(0x251)]) {
                let _0x540eae = {
                    'x': 0x0,
                    'type': _0x527460(0x252),
                    'selectedBox': 0x79,
                    'selecteID': 0x7a,
                    'searchKey': _0x527460(0x253),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x36f,
                        'presetID': 0x1,
                        'preset': _0x527460(0x254),
                        'name': _0x527460(0x255),
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': _0x527460(0x255),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': _0x527460(0x256),
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x388,
                                'skin': _0x527460(0x257),
                                'sizeGrid': _0x527460(0x258),
                                'presetID': 0x2,
                                'preset': 'laya/pages/prefab/scrollList.prefab',
                                'name': _0x527460(0x259),
                                'height': 0xb1,
                                'centerY': 0x0,
                                'centerX': 0x0
                            },
                            'nodeParent': 0x90,
                            'label': _0x527460(0x259),
                            'isDirectory': ![],
                            'isAniNode': ![],
                            'hasChild': ![],
                            'compId': 0x78,
                            'child': []
                        },
                        {
                            'x': 0xf,
                            'type': _0x527460(0x227),
                            'searchKey': _0x527460(0x227),
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': _0x527460(0x25a),
                                'presetID': 0x3,
                                'preset': _0x527460(0x254),
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': _0x527460(0x25b),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x527460(0x205),
                                    'searchKey': _0x527460(0x25c),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': _0x527460(0x254),
                                        'name': _0x527460(0x24d),
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
                                            'searchKey': _0x527460(0x205),
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': 'di1.png',
                                                'sizeGrid': _0x527460(0x25d),
                                                'renderType': _0x527460(0x25e),
                                                'presetID': 0x5,
                                                'preset': 'laya/pages/prefab/scrollList.prefab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x79,
                                            'label': _0x527460(0x25f),
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
                            'name': _0x527460(0x236),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x3aba76 extends Laya[_0x527460(0x226)] {
                    constructor() {
                        const _0x4cbccd = _0x527460;
                        super(), this['imgArr'] = [], this['scaleNum'] = [
                            0.83,
                            0.83
                        ], this[_0x4cbccd(0x260)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    [_0x527460(0x237)]() {
                        const _0x1c8fac = _0x527460;
                        this[_0x1c8fac(0x259)] = this[_0x1c8fac(0x238)]['getChildByName'](_0x1c8fac(0x259)), this['owner'][_0x1c8fac(0x261)] = ![], !this[_0x1c8fac(0x238)][_0x1c8fac(0x262)] && (this[_0x1c8fac(0x238)][_0x1c8fac(0x262)] = new Laya[(_0x1c8fac(0x1ea))](this, this[_0x1c8fac(0x263)]));
                        if (this[_0x1c8fac(0x264)][_0x1c8fac(0x1b0)]) {
                            let _0x46417f = JSON['parse'](JSON[_0x1c8fac(0x1da)](this['imgArr']));
                            Laya[_0x1c8fac(0x20f)][_0x1c8fac(0x265)](_0x46417f);
                        }
                        this[_0x1c8fac(0x250)](this[_0x1c8fac(0x260)][0x0], this['sizeTran'][0x1], this[_0x1c8fac(0x260)][0x2]), this['owner'][_0x1c8fac(0x266)][_0x1c8fac(0x267)] = ![], this[_0x1c8fac(0x238)][_0x1c8fac(0x266)]['mouseEnabled'] = ![], this[_0x1c8fac(0x238)][_0x1c8fac(0x266)][_0x1c8fac(0x268)] = ![];
                        let _0x345251 = _0xac7cb0['getInstance']()[_0x1c8fac(0x1ff)]();
                        if (!_0x345251[_0x1c8fac(0x1b0)])
                            return;
                        let _0x474d15 = JSON[_0x1c8fac(0x18d)](JSON[_0x1c8fac(0x1da)](_0x345251));
                        _0x474d15 = _0x474d15[_0x1c8fac(0x269)](_0x474d15[_0x1c8fac(0x201)](0x0, 0x4)), this[_0x1c8fac(0x238)]['centerX'] = 0x0, this[_0x1c8fac(0x238)][_0x1c8fac(0x1ee)] = _0x474d15, Laya[_0x1c8fac(0x17e)]['frameLoop'](0x1, this, this[_0x1c8fac(0x26a)]), this[_0x1c8fac(0x238)][_0x1c8fac(0x261)] = !![];
                    }
                    [_0x527460(0x263)](_0x205448, _0x3021e1) {
                        const _0x4f3813 = _0x527460;
                        let _0x42592a = _0x205448[_0x4f3813(0x26b)](_0x4f3813(0x24d));
                        _0x205448['offAll'](), _0x42592a['offAll'](), _0x205448['on'](Laya[_0x4f3813(0x1eb)][_0x4f3813(0x26c)], _0x205448, () => {
                            _0x205448['zOrder'] = 0x64;
                        }), _0x205448['on'](Laya[_0x4f3813(0x1eb)][_0x4f3813(0x26d)], _0x205448, () => {
                            const _0x533ad1 = _0x4f3813;
                            _0x205448[_0x533ad1(0x207)] = _0x3021e1;
                        }), _0x42592a['on'](Laya[_0x4f3813(0x1eb)][_0x4f3813(0x26c)], _0x205448, () => {
                            const _0x38ee3c = _0x4f3813;
                            _0x42592a['scale'](1.1, 1.1), this[_0x38ee3c(0x26e)](), this[_0x38ee3c(0x26f)](_0x205448);
                        }), _0x42592a['on'](Laya['Event'][_0x4f3813(0x26d)], _0x205448, () => {
                            const _0x4e9188 = _0x4f3813;
                            _0x42592a[_0x4e9188(0x17f)](0x1, 0x1), Laya[_0x4e9188(0x17e)]['frameLoop'](0x1, this, this['loopList']);
                        }), _0x42592a['on'](Laya[_0x4f3813(0x1eb)][_0x4f3813(0x1ec)], _0x205448, () => {
                            const _0x2d27b9 = _0x4f3813;
                            _0xac7cb0['getInstance']()[_0x2d27b9(0x1d5)](_0x2d27b9(0x1ed), _0x2d27b9(0x270), _0x205448[_0x2d27b9(0x271)]['id']);
                        });
                        let _0x6c2cdb = _0x42592a['mask'];
                        _0x205448[_0x4f3813(0x1f7)] = this[_0x4f3813(0x260)][0x0] + 0x14, _0x205448[_0x4f3813(0x23c)] = this[_0x4f3813(0x260)][0x1] + 0x14;
                        if (this[_0x4f3813(0x260)][0x2])
                            _0x6c2cdb[_0x4f3813(0x1f7)] = _0x42592a['width'] = this[_0x4f3813(0x260)][0x0], _0x6c2cdb[_0x4f3813(0x23c)] = _0x42592a[_0x4f3813(0x23c)] = this[_0x4f3813(0x260)][0x1];
                        else {
                            let _0x40d83d = 0xc8 / this[_0x4f3813(0x260)][0x0] < 0x96 / this[_0x4f3813(0x260)][0x1] ? 0xc8 / his['sizeTran'][0x0] : 0x96 / this[_0x4f3813(0x260)][0x1];
                            _0x42592a[_0x4f3813(0x1f7)] = 0xc8 / _0x40d83d, _0x42592a['height'] = 0x96 / _0x40d83d, _0x6c2cdb['width'] = this[_0x4f3813(0x260)][0x0], _0x6c2cdb['height'] = this['sizeTran'][0x1];
                        }
                        _0x6c2cdb['x'] = _0x42592a[_0x4f3813(0x1f7)] / 0x2, _0x6c2cdb['y'] = _0x42592a[_0x4f3813(0x23c)] / 0x2;
                    }
                    [_0x527460(0x26a)]() {
                        const _0x326543 = _0x527460;
                        this['owner'][_0x326543(0x266)][_0x326543(0x1ab)] += 0x1, this['owner'][_0x326543(0x266)]['value'] >= this['owner']['scrollBar'][_0x326543(0x272)] && (this[_0x326543(0x238)][_0x326543(0x266)][_0x326543(0x1ab)] = 0x0);
                    }
                    [_0x527460(0x26e)]() {
                        const _0x4e2d63 = _0x527460;
                        Laya[_0x4e2d63(0x17e)][_0x4e2d63(0x273)](this), Laya[_0x4e2d63(0x274)][_0x4e2d63(0x273)](this[_0x4e2d63(0x238)][_0x4e2d63(0x266)]);
                    }
                    [_0x527460(0x26f)](_0x596325) {
                        const _0x343d0a = _0x527460;
                        let _0x2c08f6 = new Laya[(_0x343d0a(0x275))](0x0, 0x0);
                        _0x596325[_0x343d0a(0x276)](_0x2c08f6, ![], this[_0x343d0a(0x238)]), console['log'](_0x2c08f6);
                    }
                    [_0x527460(0x277)]() {
                        const _0x35fbfe = _0x527460;
                        if (this[_0x35fbfe(0x264)][_0x35fbfe(0x1b0)]) {
                            let _0x39faa6 = JSON[_0x35fbfe(0x18d)](JSON['stringify'](this[_0x35fbfe(0x264)]));
                            Laya['loader']['clearRes'](_0x39faa6);
                        }
                        this[_0x35fbfe(0x264)] = [], this[_0x35fbfe(0x26e)](), this[_0x35fbfe(0x238)][_0x35fbfe(0x1ee)] = [];
                    }
                    [_0x527460(0x250)](_0x3833c8, _0x44b693, _0x1357e1 = ![]) {
                        const _0x5ef8dc = _0x527460;
                        this[_0x5ef8dc(0x260)] = [
                            _0x3833c8,
                            _0x44b693,
                            _0x1357e1
                        ], this[_0x5ef8dc(0x259)] && (this[_0x5ef8dc(0x238)][_0x5ef8dc(0x1f7)] = _0x3833c8 * 0x4 + 0x64, this['owner'][_0x5ef8dc(0x23c)] = _0x44b693 + 0x14, this['img_ListBg'][_0x5ef8dc(0x1f7)] = _0x3833c8 * 0x4 + 0x7d, this[_0x5ef8dc(0x259)][_0x5ef8dc(0x23c)] = _0x44b693 + 0x28, this[_0x5ef8dc(0x238)][_0x5ef8dc(0x278)]());
                    }
                }
                let _0x3e282e = new Laya[(_0x527460(0x225))]();
                _0x3e282e[_0x527460(0x241)] = _0x540eae, this[_0x527460(0x251)] = _0x3e282e[_0x527460(0x211)](), this[_0x527460(0x251)][_0x527460(0x207)] = 0x30d3f, this[_0x527460(0x251)][_0x527460(0x243)](_0x3aba76), this[_0x527460(0x251)][_0x527460(0x250)] = this[_0x527460(0x251)]['getComponent'](_0x3aba76)[_0x527460(0x250)][_0x527460(0x16f)](this[_0x527460(0x251)][_0x527460(0x279)](_0x3aba76));
            }
            return this[_0x527460(0x251)];
        }
        [_0x3936ad(0x214)]() {
            const _0x53db50 = _0x3936ad;
            if (!Laya || !Laya[_0x53db50(0x1e1)])
                return null;
            if (YYGGames['getAdPlatformType']() == AdPlatformType[_0x53db50(0x215)] || YYGGames[_0x53db50(0x213)]() == AdPlatformType['en_XIAOMI']) {
                let _0x4fb746 = new Laya[(_0x53db50(0x227))]();
                return _0x4fb746['setSpaceX'] = _0x4fb746[_0x53db50(0x250)] = function () {
                }, _0x4fb746;
            }
            if (!this['_box_adTwo']) {
                let _0x34ec0e = {
                    'x': 0x0,
                    'type': _0x53db50(0x227),
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': 'Box,box_adTwo',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': _0x53db50(0x27a),
                        'name': _0x53db50(0x214),
                        'isPresetRoot': !![],
                        'height': 0x1,
                        'centerX': 0x0,
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x99,
                    'label': _0x53db50(0x214),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x92,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': _0x53db50(0x27b),
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': 'di1.png',
                                'sizeGrid': _0x53db50(0x25d),
                                'presetID': 0x2,
                                'preset': _0x53db50(0x27a),
                                'name': _0x53db50(0x27c),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x53db50(0x27c),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': _0x53db50(0x27d),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': _0x53db50(0x27a),
                                        'name': _0x53db50(0x27e),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': _0x53db50(0x27e),
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
                                                'skin': _0x53db50(0x27f),
                                                'sizeGrid': _0x53db50(0x25d),
                                                'renderType': 'mask',
                                                'presetID': 0x4,
                                                'preset': _0x53db50(0x27a),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': _0x53db50(0x280),
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
                            'type': _0x53db50(0x205),
                            'searchKey': _0x53db50(0x281),
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': _0x53db50(0x27f),
                                'sizeGrid': _0x53db50(0x25d),
                                'presetID': 0x5,
                                'preset': _0x53db50(0x27a),
                                'name': _0x53db50(0x282),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x53db50(0x282),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x53db50(0x205),
                                    'searchKey': 'Image,img_adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                        'name': _0x53db50(0x27e),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': _0x53db50(0x27e),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x96,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x53db50(0x205),
                                            'searchKey': _0x53db50(0x205),
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0x53db50(0x27f),
                                                'sizeGrid': _0x53db50(0x25d),
                                                'renderType': _0x53db50(0x25e),
                                                'presetID': 0x7,
                                                'preset': _0x53db50(0x27a),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': _0x53db50(0x280),
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
                            'name': _0x53db50(0x236),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x571130 extends Laya[_0x53db50(0x226)] {
                    constructor() {
                        const _0x818d15 = _0x53db50;
                        super(), this[_0x818d15(0x264)] = [], this[_0x818d15(0x283)] = 0x0, this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    [_0x53db50(0x237)]() {
                        const _0x16c5af = _0x53db50;
                        !this['img_ad0'] && (this[_0x16c5af(0x27c)] = this[_0x16c5af(0x238)][_0x16c5af(0x26b)](_0x16c5af(0x27c))), !this[_0x16c5af(0x282)] && (this[_0x16c5af(0x282)] = this[_0x16c5af(0x238)][_0x16c5af(0x26b)](_0x16c5af(0x282))), !this[_0x16c5af(0x284)] && (this['img_ad0Ad'] = this[_0x16c5af(0x27c)]['getChildByName'](_0x16c5af(0x27e))), !this[_0x16c5af(0x285)] && (this['img_ad1Ad'] = this[_0x16c5af(0x282)][_0x16c5af(0x26b)]('img_adImg')), !this[_0x16c5af(0x286)] && (this['img_ad0AdMask'] = this['img_ad0Ad'][_0x16c5af(0x25e)]), !this[_0x16c5af(0x287)] && (this[_0x16c5af(0x287)] = this[_0x16c5af(0x285)][_0x16c5af(0x25e)]), this[_0x16c5af(0x238)][_0x16c5af(0x261)] = ![];
                        let _0x154e30 = _0xac7cb0[_0x16c5af(0x1d1)]()['getForgames']();
                        if (!_0x154e30[_0x16c5af(0x1b0)])
                            return;
                        let _0x5e7c18 = JSON['parse'](JSON[_0x16c5af(0x1da)](_0x154e30));
                        if (this[_0x16c5af(0x264)]['length']) {
                            let _0xb80fb2 = JSON[_0x16c5af(0x18d)](JSON[_0x16c5af(0x1da)](this['imgArr']));
                            Laya[_0x16c5af(0x20f)][_0x16c5af(0x265)](_0xb80fb2);
                        }
                        this[_0x16c5af(0x288)](this['spaceNum']), this[_0x16c5af(0x250)](this['sizeTran'][0x0], this['sizeTran'][0x1], this[_0x16c5af(0x260)][0x2]), this[_0x16c5af(0x27c)][_0x16c5af(0x289)](), this[_0x16c5af(0x282)][_0x16c5af(0x289)](), this[_0x16c5af(0x238)]['visible'] = !![], this[_0x16c5af(0x27c)][_0x16c5af(0x26b)](_0x16c5af(0x27e))[_0x16c5af(0x206)] = _0x5e7c18[0x0][_0x16c5af(0x24d)], this['img_ad1'][_0x16c5af(0x26b)](_0x16c5af(0x27e))[_0x16c5af(0x206)] = _0x5e7c18[0x1]['thumb'], this[_0x16c5af(0x27c)]['on'](Laya['Event']['MOUSE_DOWN'], this, () => {
                            const _0x5f0a6b = _0x16c5af;
                            _0xac7cb0[_0x5f0a6b(0x1d1)]()['navigate'](_0x5f0a6b(0x1ed), _0x5f0a6b(0x270), _0x5e7c18[0x0]['id']);
                        }), this[_0x16c5af(0x282)]['on'](Laya[_0x16c5af(0x1eb)][_0x16c5af(0x1ec)], this, () => {
                            const _0x2cfa4c = _0x16c5af;
                            _0xac7cb0[_0x2cfa4c(0x1d1)]()[_0x2cfa4c(0x1d5)](_0x2cfa4c(0x1ed), 'MORE', _0x5e7c18[0x1]['id']);
                        });
                    }
                    [_0x53db50(0x288)](_0x4f607b) {
                        const _0x5cfcde = _0x53db50;
                        this[_0x5cfcde(0x283)] = _0x4f607b, this[_0x5cfcde(0x27c)] && (this['img_ad0']['x'] = -this[_0x5cfcde(0x27c)][_0x5cfcde(0x1f7)] - this[_0x5cfcde(0x283)] / 0x2, this[_0x5cfcde(0x282)]['x'] = this[_0x5cfcde(0x283)] / 0x2);
                    }
                    [_0x53db50(0x277)]() {
                        const _0x29e89d = _0x53db50;
                        if (this['imgArr'][_0x29e89d(0x1b0)]) {
                            let _0x2b1631 = JSON[_0x29e89d(0x18d)](JSON[_0x29e89d(0x1da)](this[_0x29e89d(0x264)]));
                            Laya[_0x29e89d(0x20f)][_0x29e89d(0x265)](_0x2b1631);
                        }
                        this[_0x29e89d(0x264)] = [];
                    }
                    [_0x53db50(0x250)](_0x31e24, _0x3ed6b1, _0x2b3751 = ![]) {
                        const _0xeb3f80 = _0x53db50;
                        this['sizeTran'] = [
                            _0x31e24,
                            _0x3ed6b1,
                            _0x2b3751
                        ];
                        if (this[_0xeb3f80(0x27c)]) {
                            this[_0xeb3f80(0x27c)][_0xeb3f80(0x1f7)] = this[_0xeb3f80(0x282)]['width'] = _0x31e24 + 0x14, this[_0xeb3f80(0x27c)][_0xeb3f80(0x23c)] = this[_0xeb3f80(0x282)][_0xeb3f80(0x23c)] = _0x3ed6b1 + 0x14;
                            if (_0x2b3751)
                                this[_0xeb3f80(0x286)][_0xeb3f80(0x1f7)] = this[_0xeb3f80(0x287)]['width'] = this[_0xeb3f80(0x284)]['width'] = this[_0xeb3f80(0x285)][_0xeb3f80(0x1f7)] = _0x31e24, this[_0xeb3f80(0x286)][_0xeb3f80(0x23c)] = this['img_ad1AdMask'][_0xeb3f80(0x23c)] = this[_0xeb3f80(0x284)][_0xeb3f80(0x23c)] = this['img_ad1Ad']['height'] = _0x3ed6b1;
                            else {
                                let _0x59ad80 = 0xc8 / _0x31e24 < 0x96 / _0x3ed6b1 ? 0xc8 / _0x31e24 : 0x96 / _0x3ed6b1;
                                this[_0xeb3f80(0x284)][_0xeb3f80(0x1f7)] = this[_0xeb3f80(0x285)]['width'] = 0xc8 / _0x59ad80, this[_0xeb3f80(0x284)][_0xeb3f80(0x23c)] = this[_0xeb3f80(0x285)][_0xeb3f80(0x23c)] = 0x96 / _0x59ad80, this[_0xeb3f80(0x286)][_0xeb3f80(0x1f7)] = this[_0xeb3f80(0x287)][_0xeb3f80(0x1f7)] = _0x31e24, this[_0xeb3f80(0x286)][_0xeb3f80(0x23c)] = this[_0xeb3f80(0x287)]['height'] = _0x3ed6b1;
                            }
                            this[_0xeb3f80(0x286)]['x'] = this[_0xeb3f80(0x287)]['x'] = this[_0xeb3f80(0x284)][_0xeb3f80(0x1f7)] / 0x2, this[_0xeb3f80(0x286)]['y'] = this[_0xeb3f80(0x287)]['y'] = this['img_ad0Ad'][_0xeb3f80(0x23c)] / 0x2, this[_0xeb3f80(0x288)](this[_0xeb3f80(0x283)]);
                        }
                    }
                }
                let _0x520bd6 = new Laya['Prefab']();
                _0x520bd6['json'] = _0x34ec0e, this[_0x53db50(0x28a)] = _0x520bd6[_0x53db50(0x211)](), this[_0x53db50(0x28a)]['zOrder'] = 0x30d3f, this[_0x53db50(0x28a)]['addComponent'](_0x571130), this[_0x53db50(0x28a)][_0x53db50(0x288)] = this[_0x53db50(0x28a)][_0x53db50(0x279)](_0x571130)[_0x53db50(0x288)][_0x53db50(0x16f)](this[_0x53db50(0x28a)][_0x53db50(0x279)](_0x571130)), this[_0x53db50(0x28a)][_0x53db50(0x250)] = this[_0x53db50(0x28a)][_0x53db50(0x279)](_0x571130)[_0x53db50(0x250)][_0x53db50(0x16f)](this['_box_adTwo'][_0x53db50(0x279)](_0x571130));
            }
            return this[_0x53db50(0x28a)];
        }
    }
    _0xac7cb0[_0x3936ad(0x1d2)] = null, window[_0x3936ad(0x28b)] = _0xac7cb0;
}());
function _0x3295() {
    const _0xa4865a = [
        'visibilitychange',
        'onVisibilitychange',
        'getContext',
        'onstatechange',
        'onSoundStatechange',
        'Web\x20Audio\x20API',
        'Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser',
        'WebAudioEngine',
        'adShowing',
        'visibilityState',
        'hidden',
        'isVisibilityMuted',
        'muted',
        'timer',
        'scale',
        'renderingEnabled',
        'updateTimer',
        'physicsTimer',
        'pause',
        'resume',
        'onDBInstanceMuted',
        'isSuspend',
        'bePauseMusic',
        'removeEventListener',
        'suspend',
        'pauseSound',
        'pauseMusic',
        'stopAll',
        'parse',
        'playMusic',
        'stopMusic',
        'stop',
        'musicVolume',
        'playSound',
        'play',
        'volume',
        '_musicVolume',
        'AudioContext',
        'webkitAudioContext',
        'context',
        'state',
        'stopAllNoLoop',
        '_audioInstances',
        'instance',
        'buffer',
        'source',
        'loop',
        'disconnect',
        'onended',
        'setup',
        'values',
        'has',
        'get',
        '_stopSound',
        'currentTime',
        '_music',
        'downloadArrayBuffer',
        'gain',
        'value',
        'ended',
        'playBuffer',
        'playBuffer\x20error.\x20Exception:\x20',
        'load',
        'length',
        'setThreeD',
        'threeD',
        'createSoundInstance',
        'createGain',
        'createPanner',
        'start',
        'createBufferSource',
        'setupPanning',
        'connect',
        'panner',
        'rolloffFactor',
        'destination',
        'url',
        'set',
        'decodeAudioData',
        'Decode\x20error.',
        'GET',
        'responseType',
        'onload',
        'status',
        'response',
        'no\x20response',
        'onerror',
        'ontimeout',
        'send',
        'canNavigateActive_',
        'screen_',
        'action_',
        'prompt_',
        'initialized_',
        'needStartUp',
        'initData',
        'getInstance',
        '_instance',
        'onNavigate_',
        'touchend',
        'navigate',
        'getStorageSync',
        'LocalStorage',
        'setStorageSync',
        'setItem',
        'stringify',
        'to_',
        'onblur',
        'onfocus',
        'log',
        '插屏广告',
        'showInterstitial',
        'stage',
        'focus',
        'showReward',
        '激励广告',
        'canShowReward',
        'No\x20Available\x20Video',
        'prompt',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'initList',
        'Handler',
        'Event',
        'MOUSE_DOWN',
        'GAME',
        'array',
        'createElement',
        'div',
        'style',
        'cssText',
        'font-family:siyuan;max-width:80%;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;',
        'body',
        'this.prompt_.style.width',
        'maxWidth',
        'width',
        'inline',
        'webkitTransition',
        '-webkit-transform\x20',
        's\x20ease-in,\x20opacity\x20',
        's\x20ease-in',
        'opacity',
        'none',
        'getForgames',
        'forgames',
        'slice',
        'floor',
        'random',
        'createLogo',
        'Image',
        'skin',
        'zOrder',
        'yad',
        'yadstartup',
        'createNoVideo',
        'createLoading',
        'then',
        'SoundManager',
        'stopSound',
        'loader',
        'cnf.json',
        'create',
        'startupByYad',
        'getAdPlatformType',
        'box_adTwo',
        'en_GAMEDISTRIBUTION',
        'en_XIAOMI',
        'removeSelf',
        'addChild',
        'stopPropagation',
        'LOGO',
        'showBanner',
        'hideBanner',
        'showSplash',
        'hideSplash',
        'cargamesstartup',
        'init',
        'startupByCargames',
        'scrollList',
        'puzzlegamestartup',
        'startup',
        'Prefab',
        'Script',
        'Box',
        'laya/pages/Prefab/NoVideo.prefab',
        'Box(NoVideo)',
        'Sprite,spr_tip,spr_tip',
        'spr_tip',
        'Rect',
        '#000000',
        'Rect(NoVideo)',
        'Label',
        'middle',
        '#ffffff',
        'center',
        'Label(NoVideo)',
        'No\x20Video\x20Available',
        'Click\x20anywhere\x20to\x20close',
        'ani1',
        'onEnable',
        'owner',
        'top',
        'bottom',
        'right',
        'height',
        'pos',
        'CLICK',
        'closePer',
        'closeNoVideo',
        'json',
        'noVideoPer',
        'addComponent',
        'showNoVideo',
        'Box,box_clickLayer',
        'box_clickLayer',
        'loadingPer',
        'showLoading',
        'closeLoading',
        'createList',
        'img',
        'name',
        'thumb',
        'size',
        'itemRender',
        'setSize',
        '_scrollList',
        'List',
        'List,scrollAdList',
        'laya/pages/prefab/scrollList.prefab',
        'scrollAdList',
        'Image,img_ListBg',
        'di2.png',
        '30,\x2030,\x2030,\x2030',
        'img_ListBg',
        'render',
        'Box(scrollList)',
        'Image,thumb',
        '30,30,30,30',
        'mask',
        'Image(scrollList)',
        'sizeTran',
        'visible',
        'renderHandler',
        'itemRenderFun',
        'imgArr',
        'clearRes',
        'scrollBar',
        'mouseWheelEnable',
        'touchScrollEnable',
        'concat',
        'loopList',
        'getChildByName',
        'MOUSE_OVER',
        'MOUSE_OUT',
        'endAni',
        'checkPoints',
        'MORE',
        'dataSource',
        'max',
        'clearAll',
        'Tween',
        'Point',
        'localToGlobal',
        'onDisable',
        'refresh',
        'getComponent',
        'laya/pages/prefab/box_adTwo.prefab',
        'Image,img_ad0',
        'img_ad0',
        'Image,img_adImg',
        'img_adImg',
        'di1.png',
        'Image(box_adTwo)',
        'Image,img_ad1',
        'img_ad1',
        'spaceNum',
        'img_ad0Ad',
        'img_ad1Ad',
        'img_ad0AdMask',
        'img_ad1AdMask',
        'setSpaceX',
        'offAll',
        '_box_adTwo',
        'platform',
        '215362ugSODI',
        '50888ffZrFI',
        '75OTSVfD',
        '10448RWYyKe',
        '330515TlgItU',
        '6gHhWgO',
        '679hQtfdC',
        '16552nRnqov',
        '198576qEdMgn',
        '6596290kdileG',
        'beEnabled',
        'isMuted',
        'bePauseSound',
        'tryToResumeIntervalId',
        'musicAudio',
        'soundAudio',
        'document',
        'addEventListener',
        'mousedown',
        'tryToResumeAudioContext',
        'bind',
        'touchstart'
    ];
    _0x3295 = function () {
        return _0xa4865a;
    };
    return _0x3295();
}