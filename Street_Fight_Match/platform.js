function _0xb205(_0x476855, _0x2179ac) {
    const _0x203842 = _0x2038();
    return _0xb205 = function (_0xb205d, _0x33ab1f) {
        _0xb205d = _0xb205d - 0x1a3;
        let _0x54f166 = _0x203842[_0xb205d];
        return _0x54f166;
    }, _0xb205(_0x476855, _0x2179ac);
}
(function (_0x803baf, _0x2c85b8) {
    const _0x12b744 = _0xb205, _0x4175b4 = _0x803baf();
    while (!![]) {
        try {
            const _0x4aaab8 = -parseInt(_0x12b744(0x1a3)) / 0x1 * (-parseInt(_0x12b744(0x1a4)) / 0x2) + parseInt(_0x12b744(0x1a5)) / 0x3 * (parseInt(_0x12b744(0x1a6)) / 0x4) + -parseInt(_0x12b744(0x1a7)) / 0x5 * (parseInt(_0x12b744(0x1a8)) / 0x6) + parseInt(_0x12b744(0x1a9)) / 0x7 * (parseInt(_0x12b744(0x1aa)) / 0x8) + parseInt(_0x12b744(0x1ab)) / 0x9 * (parseInt(_0x12b744(0x1ac)) / 0xa) + -parseInt(_0x12b744(0x1ad)) / 0xb + parseInt(_0x12b744(0x1ae)) / 0xc * (-parseInt(_0x12b744(0x1af)) / 0xd);
            if (_0x4aaab8 === _0x2c85b8)
                break;
            else
                _0x4175b4['push'](_0x4175b4['shift']());
        } catch (_0x19fc5c) {
            _0x4175b4['push'](_0x4175b4['shift']());
        }
    }
}(_0x2038, 0x927e2), !function () {
    const _0x1d422a = _0xb205;
    class _0x2faf90 {
        constructor() {
            const _0x2531f2 = _0xb205;
            this[_0x2531f2(0x1b0)] = ![], this[_0x2531f2(0x1b1)] = ![], this[_0x2531f2(0x1b2)] = ![], this['bePauseMusic'] = ![], this[_0x2531f2(0x1b3)] = -0x1, this[_0x2531f2(0x1b4)] = ![], this[_0x2531f2(0x1b5)] = ![];
        }
        [_0x1d422a(0x1b6)]() {
            return new Promise((_0x575fd9, _0x5ab9cf) => {
                const _0x2ef1ed = _0xb205;
                try {
                    this[_0x2ef1ed(0x1b7)] = new _0x4defab(), this['soundAudio'] = new _0x4defab(), window[_0x2ef1ed(0x1b8)][_0x2ef1ed(0x1b9)](_0x2ef1ed(0x1ba), () => {
                        setTimeout(() => {
                            const _0x106823 = _0xb205;
                            if (this[_0x106823(0x1b5)]) {
                            } else
                                this[_0x106823(0x1bb)]();
                        }, 0x64);
                    }, !![]), window[_0x2ef1ed(0x1b8)]['addEventListener'](_0x2ef1ed(0x1bc), () => {
                        setTimeout(() => {
                            const _0xddd36e = _0xb205;
                            if (this[_0xddd36e(0x1b5)]) {
                            } else
                                this['tryToResumeAudioContext']();
                        }, 0x64);
                    }, !![]), window[_0x2ef1ed(0x1b8)][_0x2ef1ed(0x1b9)](_0x2ef1ed(0x1bd), this[_0x2ef1ed(0x1be)][_0x2ef1ed(0x1bf)](this)), this[_0x2ef1ed(0x1b7)]['getContext']()[_0x2ef1ed(0x1c0)] = this['onMusicStatechange'][_0x2ef1ed(0x1bf)](this), this[_0x2ef1ed(0x1c1)][_0x2ef1ed(0x1c2)]()[_0x2ef1ed(0x1c0)] = this[_0x2ef1ed(0x1c3)][_0x2ef1ed(0x1bf)](this), this[_0x2ef1ed(0x1b0)] = !![], this[_0x2ef1ed(0x1c4)] = 0x3c, this[_0x2ef1ed(0x1c5)] = ![], this['tryToResumeAudioContext'](), _0x575fd9(!![]);
                } catch (_0x1f6431) {
                    console[_0x2ef1ed(0x1c6)]('Web\x20Audio\x20API', _0x1f6431), alert(_0x2ef1ed(0x1c7)), _0x575fd9(![]);
                }
            });
        }
        [_0x1d422a(0x1be)]() {
            const _0x7d907a = _0x1d422a;
            if (this[_0x7d907a(0x1b5)])
                return;
            if (document[_0x7d907a(0x1c8)] == _0x7d907a(0x1c9))
                !this['isMuted'] && (this[_0x7d907a(0x1b4)] = this[_0x7d907a(0x1ca)] = !![]), Laya['timer'][_0x7d907a(0x1cb)] = 0x0, Laya[_0x7d907a(0x1cc)][_0x7d907a(0x1cd)] = ![], Laya['updateTimer'] && Laya['updateTimer'][_0x7d907a(0x1ce)](), Laya['physicsTimer'] && Laya[_0x7d907a(0x1cf)][_0x7d907a(0x1ce)]();
            else
                document[_0x7d907a(0x1c8)] == 'visible' && (this[_0x7d907a(0x1b4)] && (this[_0x7d907a(0x1b4)] = this[_0x7d907a(0x1ca)] = ![]), Laya[_0x7d907a(0x1d0)][_0x7d907a(0x1cb)] = 0x1, Laya[_0x7d907a(0x1cc)][_0x7d907a(0x1cd)] = !![], Laya[_0x7d907a(0x1d1)] && Laya[_0x7d907a(0x1d1)][_0x7d907a(0x1d2)](), Laya[_0x7d907a(0x1cf)] && Laya[_0x7d907a(0x1cf)]['resume']());
        }
        [_0x1d422a(0x1d3)]() {
        }
        [_0x1d422a(0x1bb)]() {
            const _0x14274b = _0x1d422a;
            if (this[_0x14274b(0x1b5)])
                return;
            if (this['isMuted'])
                return;
            this[_0x14274b(0x1b7)][_0x14274b(0x1d4)]() && !this['bePauseMusic'] && !this[_0x14274b(0x1b1)] && this['musicAudio'][_0x14274b(0x1d2)](), this[_0x14274b(0x1c1)][_0x14274b(0x1d4)]() && !this[_0x14274b(0x1b2)] && !this[_0x14274b(0x1b1)] && this[_0x14274b(0x1c1)][_0x14274b(0x1d2)](), (!this[_0x14274b(0x1b7)][_0x14274b(0x1d4)]() || !this[_0x14274b(0x1c1)][_0x14274b(0x1d4)]()) && (window[_0x14274b(0x1b8)][_0x14274b(0x1d5)](_0x14274b(0x1ba), this['tryToResumeAudioContext']['bind'](this), !![]), window[_0x14274b(0x1b8)][_0x14274b(0x1d5)]('touchstart', this['tryToResumeAudioContext'][_0x14274b(0x1bf)](this), !![]), clearInterval(this[_0x14274b(0x1b3)]), this[_0x14274b(0x1b3)] = -0x1);
        }
        [_0x1d422a(0x1d6)]() {
            const _0x186ba9 = _0x1d422a;
            this[_0x186ba9(0x1b7)]['isSuspend']() && !this[_0x186ba9(0x1b1)] && !this[_0x186ba9(0x1d7)] && this[_0x186ba9(0x1b3)] === -0x1 && (window[_0x186ba9(0x1b8)][_0x186ba9(0x1b9)](_0x186ba9(0x1ba), this[_0x186ba9(0x1bb)][_0x186ba9(0x1bf)](this), !![]), window[_0x186ba9(0x1b8)][_0x186ba9(0x1b9)](_0x186ba9(0x1bc), this['tryToResumeAudioContext'][_0x186ba9(0x1bf)](this), !![]), this[_0x186ba9(0x1b3)] = setInterval(this[_0x186ba9(0x1bb)]['bind'](this), 0xc8));
        }
        [_0x1d422a(0x1c3)]() {
            const _0x1e65b1 = _0x1d422a;
            this[_0x1e65b1(0x1c1)][_0x1e65b1(0x1d4)]() && !this[_0x1e65b1(0x1b1)] && !this[_0x1e65b1(0x1b2)] && this[_0x1e65b1(0x1b3)] === -0x1 && (window[_0x1e65b1(0x1b8)][_0x1e65b1(0x1b9)](_0x1e65b1(0x1ba), this[_0x1e65b1(0x1bb)][_0x1e65b1(0x1bf)](this), !![]), window[_0x1e65b1(0x1b8)][_0x1e65b1(0x1b9)]('touchstart', this[_0x1e65b1(0x1bb)][_0x1e65b1(0x1bf)](this), !![]), this[_0x1e65b1(0x1b3)] = setInterval(this[_0x1e65b1(0x1bb)][_0x1e65b1(0x1bf)](this), 0xc8));
        }
        set ['muted'](_0x3d8625) {
            const _0x1d9744 = _0x1d422a;
            this[_0x1d9744(0x1b1)] = _0x3d8625, this[_0x1d9744(0x1b1)] ? (this[_0x1d9744(0x1b7)][_0x1d9744(0x1d8)](), this[_0x1d9744(0x1c1)]['suspend']()) : this['tryToResumeIntervalId'] == -0x1 && (this[_0x1d9744(0x1b3)] = setInterval(this[_0x1d9744(0x1bb)][_0x1d9744(0x1bf)](this), 0xc8));
        }
        get [_0x1d422a(0x1ca)]() {
            const _0xbf28bc = _0x1d422a;
            return this[_0xbf28bc(0x1b1)];
        }
        set [_0x1d422a(0x1ce)](_0x197f59) {
            const _0xd15bd8 = _0x1d422a;
            this[_0xd15bd8(0x1d9)] = _0x197f59, this[_0xd15bd8(0x1da)] = _0x197f59, !_0x197f59 && this[_0xd15bd8(0x1c1)][_0xd15bd8(0x1db)]();
        }
        get [_0x1d422a(0x1ce)]() {
            const _0x32af1b = _0x1d422a;
            return this['pauseSound'] || this[_0x32af1b(0x1da)];
        }
        set [_0x1d422a(0x1d9)](_0x15b6d4) {
            const _0x241dfc = _0x1d422a;
            this[_0x241dfc(0x1b2)] = _0x15b6d4;
            if (this[_0x241dfc(0x1b2)])
                this['soundAudio']['suspend']();
            else {
                if (this[_0x241dfc(0x1b1)])
                    return;
                this['soundAudio'][_0x241dfc(0x1d2)]();
            }
        }
        get [_0x1d422a(0x1d9)]() {
            const _0x32ae76 = _0x1d422a;
            return this[_0x32ae76(0x1b2)];
        }
        get [_0x1d422a(0x1da)]() {
            const _0x1aa66e = _0x1d422a;
            return this[_0x1aa66e(0x1d7)];
        }
        set ['pauseMusic'](_0x3bcf22) {
            const _0x1fac6b = _0x1d422a;
            this[_0x1fac6b(0x1d7)] = _0x3bcf22;
            if (this[_0x1fac6b(0x1d7)])
                this[_0x1fac6b(0x1b7)]['suspend']();
            else {
                if (this['isMuted'])
                    return;
                this[_0x1fac6b(0x1b7)]['resume']();
            }
        }
        [_0x1d422a(0x1dc)]() {
            const _0x3371f3 = _0x1d422a;
            this[_0x3371f3(0x1b7)]['stopAll'](), this[_0x3371f3(0x1c1)][_0x3371f3(0x1dc)]();
        }
        ['parse'](_0x57c07f, _0x5b733b, _0x1d7f03) {
            const _0x213b4f = _0x1d422a;
            this[_0x213b4f(0x1c1)][_0x213b4f(0x1dd)](_0x57c07f, _0x5b733b);
        }
        ['playMusic'](_0x124096) {
            const _0x77aa27 = _0x1d422a;
            this[_0x77aa27(0x1b7)][_0x77aa27(0x1dc)](), this[_0x77aa27(0x1b7)][_0x77aa27(0x1de)](_0x124096);
        }
        ['stopMusic']() {
            const _0x21803a = _0x1d422a;
            this[_0x21803a(0x1b7)][_0x21803a(0x1dc)]();
        }
        [_0x1d422a(0x1df)](_0xaf93c9) {
            const _0x435a46 = _0x1d422a;
            this[_0x435a46(0x1c1)][_0x435a46(0x1e0)](_0xaf93c9);
        }
        set ['musicVolume'](_0x164deb) {
            this['musicAudio']['musicVolume'] = _0x164deb;
        }
        get [_0x1d422a(0x1c4)]() {
            const _0x4cba4e = _0x1d422a;
            return this[_0x4cba4e(0x1b7)]['musicVolume'];
        }
        [_0x1d422a(0x1e1)](_0x5622b1, _0x4ab5b3 = ![], _0x18aaa7 = ![]) {
            const _0x3f30a4 = _0x1d422a;
            if (!this[_0x3f30a4(0x1b0)])
                return;
            this[_0x3f30a4(0x1c1)][_0x3f30a4(0x1e2)](_0x5622b1, _0x4ab5b3, _0x18aaa7);
        }
    }
    class _0x355b05 {
    }
    class _0x4defab {
        constructor() {
            const _0x402a0b = _0x1d422a;
            this['volume'] = 0x64, this[_0x402a0b(0x1e3)] = new Map(), this[_0x402a0b(0x1e4)] = 0x64, window['AudioContext'] = window['AudioContext'] || window[_0x402a0b(0x1e5)], this['context'] = new AudioContext();
        }
        ['getContext']() {
            const _0x3a1868 = _0x1d422a;
            return this[_0x3a1868(0x1e6)];
        }
        [_0x1d422a(0x1d4)]() {
            const _0x3f55e4 = _0x1d422a;
            return this['context'][_0x3f55e4(0x1e7)] === _0x3f55e4(0x1e8);
        }
        ['suspend']() {
            const _0x583e84 = _0x1d422a;
            return this['context'][_0x583e84(0x1d8)]();
        }
        ['resume']() {
            const _0x2eec90 = _0x1d422a;
            return this['context'][_0x2eec90(0x1d2)]();
        }
        ['stopAllNoLoop']() {
            const _0xcc5dc2 = _0x1d422a, _0x4a002f = this['_audioInstances'][_0xcc5dc2(0x1e9)]();
            for (const _0x4ec529 of _0x4a002f) {
                const _0x2bd983 = _0x4ec529[_0xcc5dc2(0x1ea)];
                if (_0x2bd983[_0xcc5dc2(0x1eb)][_0xcc5dc2(0x1ec)] && !_0x2bd983[_0xcc5dc2(0x1eb)][_0xcc5dc2(0x1ed)]) {
                    try {
                        _0x2bd983[_0xcc5dc2(0x1eb)]['stop'](this[_0xcc5dc2(0x1e6)][_0xcc5dc2(0x1ee)]);
                    } catch (_0x2b1167) {
                        _0x2bd983[_0xcc5dc2(0x1eb)][_0xcc5dc2(0x1ef)]();
                    }
                    _0x2bd983[_0xcc5dc2(0x1eb)][_0xcc5dc2(0x1f0)] = function () {
                    }, _0x2bd983[_0xcc5dc2(0x1f1)]();
                }
            }
        }
        [_0x1d422a(0x1dc)]() {
            const _0x30c55e = _0x1d422a, _0x27beb0 = this['_audioInstances'][_0x30c55e(0x1e9)]();
            for (const _0x5830a5 of _0x27beb0) {
                const _0x54a532 = _0x5830a5[_0x30c55e(0x1ea)];
                if (_0x54a532[_0x30c55e(0x1eb)][_0x30c55e(0x1ec)]) {
                    try {
                        _0x54a532['source'][_0x30c55e(0x1e0)](this[_0x30c55e(0x1e6)][_0x30c55e(0x1ee)]);
                    } catch (_0x283359) {
                        _0x54a532[_0x30c55e(0x1eb)]['disconnect']();
                    }
                    _0x54a532[_0x30c55e(0x1eb)][_0x30c55e(0x1f0)] = function () {
                    }, _0x54a532[_0x30c55e(0x1f1)]();
                }
            }
        }
        [_0x1d422a(0x1e0)](_0x4cd236) {
            const _0x2aacaf = _0x1d422a;
            if (this['_audioInstances'][_0x2aacaf(0x1f2)](_0x4cd236)) {
                const _0x2e8bb9 = this[_0x2aacaf(0x1e3)][_0x2aacaf(0x1f3)](_0x4cd236);
                this[_0x2aacaf(0x1f4)](_0x2e8bb9);
            }
        }
        [_0x1d422a(0x1f4)](_0xe102cb) {
            const _0x4f984a = _0x1d422a, _0x271a9f = _0xe102cb[_0x4f984a(0x1ea)];
            if (_0x271a9f[_0x4f984a(0x1eb)][_0x4f984a(0x1ec)]) {
                try {
                    _0x271a9f['source']['stop'](this['context']['currentTime']);
                } catch (_0x778c6f) {
                    _0x271a9f[_0x4f984a(0x1eb)][_0x4f984a(0x1ef)]();
                }
                _0x271a9f['source'][_0x4f984a(0x1f0)] = function () {
                }, _0x271a9f[_0x4f984a(0x1f1)]();
            }
        }
        [_0x1d422a(0x1de)](_0x8acfb7) {
            const _0x2c44d3 = _0x1d422a;
            this[_0x2c44d3(0x1f5)] && this[_0x2c44d3(0x1f4)](this[_0x2c44d3(0x1f5)]), this['_audioInstances'][_0x2c44d3(0x1f2)](_0x8acfb7) ? (this['_music'] = this[_0x2c44d3(0x1e3)][_0x2c44d3(0x1f3)](_0x8acfb7), this[_0x2c44d3(0x1c4)] = this[_0x2c44d3(0x1e4)], this[_0x2c44d3(0x1e2)](_0x8acfb7, !![])) : this[_0x2c44d3(0x1f6)](_0x8acfb7, () => {
                const _0x299811 = _0x2c44d3;
                this[_0x299811(0x1de)](_0x8acfb7);
            });
        }
        [_0x1d422a(0x1f7)]() {
            const _0x266367 = _0x1d422a;
            this[_0x266367(0x1f5)] && this[_0x266367(0x1f4)](this[_0x266367(0x1f5)]);
        }
        set [_0x1d422a(0x1c4)](_0x5f24d7) {
            const _0x128fc1 = _0x1d422a;
            this[_0x128fc1(0x1e4)] = _0x5f24d7, this[_0x128fc1(0x1f5)] && (this[_0x128fc1(0x1f5)]['instance'][_0x128fc1(0x1f8)][_0x128fc1(0x1f8)]['value'] = this[_0x128fc1(0x1e4)] / 0x64);
        }
        get ['musicVolume']() {
            const _0x95ae58 = _0x1d422a;
            return this[_0x95ae58(0x1e4)];
        }
        ['play'](_0x90203e, _0x5c1f50 = ![], _0x12d72d = ![]) {
            const _0x1bbab8 = _0x1d422a;
            if (this[_0x1bbab8(0x1e3)]['has'](_0x90203e)) {
                const _0x4b8154 = this[_0x1bbab8(0x1e3)][_0x1bbab8(0x1f3)](_0x90203e), _0x113f9e = _0x4b8154[_0x1bbab8(0x1ea)];
                if (_0x12d72d && !_0x113f9e['ended'])
                    return;
                this[_0x1bbab8(0x1e0)](_0x90203e);
                if (_0x4b8154[_0x1bbab8(0x1ec)])
                    try {
                        if (window['WebAudioEngine'][_0x1bbab8(0x1ce)] && !_0x5c1f50)
                            return;
                        _0x113f9e['playBuffer'](this['context'][_0x1bbab8(0x1ee)], _0x4b8154[_0x1bbab8(0x1ec)]), _0x113f9e[_0x1bbab8(0x1eb)][_0x1bbab8(0x1ed)] = _0x5c1f50;
                    } catch (_0x3d900d) {
                        console['error'](_0x1bbab8(0x1f9) + _0x3d900d);
                    }
            } else
                this['downloadArrayBuffer'](_0x90203e, () => {
                    this['play'](_0x90203e, _0x5c1f50);
                });
        }
        [_0x1d422a(0x1fa)](_0x16e827, _0x18e7bb) {
            const _0x215d13 = _0x1d422a;
            let _0x2e26b6 = _0x16e827[_0x215d13(0x1fb)], _0x8962b4 = 0x0;
            for (let _0x4cb164 = 0x0; _0x4cb164 < _0x16e827['length']; _0x4cb164++) {
                const _0xa24c04 = _0x16e827[_0x4cb164];
                this['downloadArrayBuffer'](_0xa24c04, () => {
                    _0x8962b4++, _0x8962b4 >= _0x2e26b6 && (_0x18e7bb && _0x18e7bb());
                });
            }
        }
        [_0x1d422a(0x1fc)](_0x16f9ca) {
            const _0x458a72 = _0x1d422a;
            if (this[_0x458a72(0x1e3)][_0x458a72(0x1f2)](_0x16f9ca)) {
                const _0x3a5114 = this[_0x458a72(0x1e3)]['get'](_0x16f9ca);
                _0x3a5114['instance'][_0x458a72(0x1fd)] = !![];
            }
        }
        [_0x1d422a(0x1fe)]() {
            const _0x5997b9 = _0x1d422a;
            let _0x1e2888 = this[_0x5997b9(0x1e6)];
            const _0x4912ba = {
                'gain': _0x1e2888[_0x5997b9(0x1ff)](),
                'panner': _0x1e2888[_0x5997b9(0x200)](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x124e67, _0x5d41d0, _0x383110) {
                    const _0x3acc68 = _0x5997b9;
                    this[_0x3acc68(0x1eb)][_0x3acc68(0x1ec)] = _0x5d41d0;
                    var _0x3b69f8 = this;
                    this[_0x3acc68(0x201)] = ![], this[_0x3acc68(0x1eb)][_0x3acc68(0x1f0)] = function () {
                        const _0x4d5480 = _0x3acc68;
                        _0x3b69f8[_0x4d5480(0x1f1)](), _0x3b69f8[_0x4d5480(0x201)] = !![];
                    }, this[_0x3acc68(0x1eb)][_0x3acc68(0x202)](_0x124e67, _0x383110);
                },
                'setup': function () {
                    const _0x5225fa = _0x5997b9;
                    this[_0x5225fa(0x1eb)] = _0x1e2888[_0x5225fa(0x203)](), this[_0x5225fa(0x204)]();
                },
                'setupPanning': function () {
                    const _0x2da099 = _0x5997b9;
                    this['threeD'] ? (this[_0x2da099(0x1eb)][_0x2da099(0x1ef)](), this[_0x2da099(0x1eb)][_0x2da099(0x205)](this[_0x2da099(0x206)]), this[_0x2da099(0x206)][_0x2da099(0x205)](this[_0x2da099(0x1f8)])) : (this[_0x2da099(0x206)][_0x2da099(0x1ef)](), this[_0x2da099(0x1eb)][_0x2da099(0x205)](this[_0x2da099(0x1f8)]));
                }
            };
            return _0x4912ba[_0x5997b9(0x206)][_0x5997b9(0x207)] = 0x0, _0x4912ba[_0x5997b9(0x1f8)]['connect'](this[_0x5997b9(0x1e6)][_0x5997b9(0x208)]), _0x4912ba[_0x5997b9(0x1f1)](), _0x4912ba;
        }
        ['parse'](_0x3829b2, _0x1d36f4, _0x2271d3) {
            const _0x12fdf4 = _0x1d422a, _0x570269 = new _0x355b05();
            _0x570269[_0x12fdf4(0x209)] = _0x3829b2, _0x570269[_0x12fdf4(0x1ea)] = this[_0x12fdf4(0x1fe)](), this['_audioInstances'][_0x12fdf4(0x20a)](_0x3829b2, _0x570269), this['context']['decodeAudioData'](_0x1d36f4, function (_0x55216c) {
                _0x570269['buffer'] = _0x55216c, _0x2271d3 && _0x2271d3();
            }, function (_0x315e02) {
                const _0x49d942 = _0x12fdf4;
                _0x570269[_0x49d942(0x20b)] = !![], _0x2271d3 && _0x2271d3(), console['log'](_0x49d942(0x20c) + _0x570269[_0x49d942(0x209)]);
            });
        }
        [_0x1d422a(0x1f6)](_0x15e2b4, _0x4ee191) {
            const _0x280496 = _0x1d422a;
            if (this[_0x280496(0x1e3)][_0x280496(0x1f2)](_0x15e2b4)) {
                _0x4ee191 && _0x4ee191();
                return;
            }
            const _0xf46c85 = this;
            var _0x2cc7db = new XMLHttpRequest();
            _0x2cc7db[_0x280496(0x20d)](_0x280496(0x20e), _0x15e2b4, !![]), _0x2cc7db['responseType'] = 'arraybuffer', _0x2cc7db['onload'] = function () {
                const _0x1d6830 = _0x280496;
                if (_0x2cc7db[_0x1d6830(0x20f)] === 0xc8 || _0x2cc7db[_0x1d6830(0x20f)] === 0x0)
                    _0xf46c85[_0x1d6830(0x1dd)](_0x15e2b4, _0x2cc7db[_0x1d6830(0x210)], _0x4ee191);
                else
                    throw _0x1d6830(0x211);
            }, _0x2cc7db[_0x280496(0x212)] = function () {
                const _0x8003c7 = _0x280496;
                _0x4ee191 && _0x4ee191();
                throw _0x8003c7(0x211);
            }, _0x2cc7db[_0x280496(0x213)] = function () {
                _0x4ee191 && _0x4ee191();
            }, _0x2cc7db[_0x280496(0x214)] = function () {
                _0x4ee191 && _0x4ee191();
            }, _0x2cc7db[_0x280496(0x215)](null);
        }
    }
    const _0x53edd9 = window['WebAudioEngine'] = new _0x2faf90();
    class _0x406c46 {
        constructor() {
            const _0x3602a9 = _0x1d422a;
            this[_0x3602a9(0x216)] = ![], this[_0x3602a9(0x217)] = '', this[_0x3602a9(0x218)] = '', this['to_'] = '', this['prompt_'] = null, this[_0x3602a9(0x219)] = ![], this[_0x3602a9(0x21a)] = !![], this[_0x3602a9(0x21b)]();
        }
        static [_0x1d422a(0x21c)]() {
            const _0x195265 = _0x1d422a;
            return !this[_0x195265(0x21d)] && (this[_0x195265(0x21d)] = new _0x406c46()), this[_0x195265(0x21d)];
        }
        ['initData']() {
            const _0x32e8f = _0x1d422a;
            let _0x2248d9 = document[_0x32e8f(0x21e)](_0x32e8f(0x21f));
            _0x2248d9 && (_0x2248d9[_0x32e8f(0x1b9)]('mouseup', this['onNavigate_'][_0x32e8f(0x1bf)](this)), _0x2248d9[_0x32e8f(0x1b9)](_0x32e8f(0x220), this['onNavigate_']['bind'](this)));
        }
        [_0x1d422a(0x221)]() {
            const _0x7adffa = _0x1d422a;
            this[_0x7adffa(0x216)] && YYGGames[_0x7adffa(0x222)](this[_0x7adffa(0x217)], this[_0x7adffa(0x218)], this['to_']), this[_0x7adffa(0x216)] = ![];
        }
        [_0x1d422a(0x223)](_0x331820) {
            const _0x4d76f1 = _0x1d422a;
            let _0x5df444 = null;
            try {
                let _0x1c6b24 = Laya['LocalStorage'][_0x4d76f1(0x224)](_0x331820);
                _0x5df444 = JSON['parse'](_0x1c6b24);
            } catch (_0x189e64) {
            }
            return _0x5df444;
        }
        [_0x1d422a(0x225)](_0x2e9892, _0x16394d) {
            const _0x5e5bd7 = _0x1d422a;
            return Laya[_0x5e5bd7(0x226)][_0x5e5bd7(0x227)](_0x2e9892, JSON[_0x5e5bd7(0x228)](_0x16394d));
        }
        [_0x1d422a(0x222)](_0x39559a, _0x50a516, _0x37d07d) {
            const _0x4a5654 = _0x1d422a;
            this[_0x4a5654(0x216)] === ![] && (this[_0x4a5654(0x217)] = _0x39559a, this['action_'] = _0x50a516, this[_0x4a5654(0x229)] = _0x37d07d, this[_0x4a5654(0x216)] = !![]);
        }
        [_0x1d422a(0x22a)]() {
            setTimeout(() => {
                _0x53edd9['muted'] = !![];
            }, 0x64);
        }
        [_0x1d422a(0x22b)]() {
            setTimeout(() => {
                const _0x4b6558 = _0xb205;
                _0x53edd9[_0x4b6558(0x1ca)] = ![];
            }, 0x64);
        }
        ['showInterstitial'](_0x526f0d) {
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            const _0x1916a1 = _0x1d422a;
            const _0x340d25 = _0x1916a1;
                    window[_0x340d25(0x22d)](), this[_0x340d25(0x22b)](), window['WebAudioEngine'][_0x340d25(0x1b5)] = ![], Laya[_0x340d25(0x1d0)][_0x340d25(0x1cb)] = 0x1, Laya[_0x340d25(0x1cc)][_0x340d25(0x1cd)] = !![], Laya[_0x340d25(0x1d1)] && Laya[_0x340d25(0x1d1)][_0x340d25(0x1d2)](), Laya[_0x340d25(0x1cf)] && Laya[_0x340d25(0x1cf)][_0x340d25(0x1d2)](), _0x526f0d && _0x526f0d();
                    return ;
        }
        //showReward
        [_0x1d422a(0x22e)](_0x5b7fe9, _0x583437, _0x385bbd) {
            console.log("请求激励广告");
            const _0x27268f = _0x1d422a;
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    const _0x525382 = _0x27268f;
                    window[_0x525382(0x22d)](), this[_0x525382(0x22b)](), window['WebAudioEngine'][_0x525382(0x1b5)] = ![], Laya[_0x525382(0x1d0)][_0x525382(0x1cb)] = 0x1, Laya['stage'][_0x525382(0x1cd)] = !![], Laya[_0x525382(0x1d1)] && Laya[_0x525382(0x1d1)][_0x525382(0x1d2)](), Laya[_0x525382(0x1cf)] && Laya[_0x525382(0x1cf)][_0x525382(0x1d2)]();
                    _0x5b7fe9 && _0x5b7fe9(), _0x385bbd && _0x385bbd(), _0x385bbd = null, _0x5b7fe9 = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                  const _0x585f29 = _0x27268f;
                    _0x583437 && (_0x583437(), _0x385bbd && _0x385bbd(), _0x385bbd = null, _0x583437 = null), this[_0x585f29(0x22f)](_0x585f29(0x232));
                  promptMessage("Failed to get the reward, please watch the ads to the end.");
                }
            );
            return;
        }
        [_0x1d422a(0x233)](_0x372c43) {
        }
        [_0x1d422a(0x22f)](_0x5a6724, _0x121af0) {
            const _0x12f3fc = _0x1d422a;
            !this['prompt_'] && (this[_0x12f3fc(0x234)] = document[_0x12f3fc(0x235)](_0x12f3fc(0x236)), this[_0x12f3fc(0x234)][_0x12f3fc(0x237)][_0x12f3fc(0x238)] = 'overflow:\x20hidden;word-break:\x20break-all;word-wrap:\x20break-word;font-family:siyuan;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;', document[_0x12f3fc(0x239)][_0x12f3fc(0x23a)](this[_0x12f3fc(0x234)]));
            const _0x5ede4b = Laya[_0x12f3fc(0x1cc)][_0x12f3fc(0x23b)], _0x4d4682 = Laya[_0x12f3fc(0x1cc)][_0x12f3fc(0x23c)];
            var _0x312107 = window['innerWidth'], _0x5738ce = window['innerHeight'], _0x5d7174, _0x12982b;
            _0x312107 / _0x5738ce > _0x5ede4b / _0x4d4682 ? (_0x5d7174 = _0x5738ce, _0x12982b = _0x5d7174 * _0x5ede4b / _0x4d4682) : (_0x12982b = _0x312107, _0x5d7174 = _0x12982b * _0x4d4682 / _0x5ede4b), this[_0x12f3fc(0x234)][_0x12f3fc(0x237)]['width'] = _0x12982b - 0x32 + 'px', this[_0x12f3fc(0x234)][_0x12f3fc(0x23d)] = _0x5a6724, _0x121af0 = isNaN(_0x121af0) ? 0x7d0 : _0x121af0, this[_0x12f3fc(0x234)]['style'][_0x12f3fc(0x23e)] = _0x12f3fc(0x23f), this['prompt_'][_0x12f3fc(0x237)]['opacity'] = '1', setTimeout(function () {
                const _0x4471c9 = _0x12f3fc;
                var _0x36c618 = 0.5;
                this[_0x4471c9(0x234)][_0x4471c9(0x237)][_0x4471c9(0x240)] = _0x4471c9(0x241) + _0x36c618 + _0x4471c9(0x242) + _0x36c618 + _0x4471c9(0x243), this[_0x4471c9(0x234)][_0x4471c9(0x237)][_0x4471c9(0x244)] = '0', this['prompt_'][_0x4471c9(0x237)]['display'] = _0x4471c9(0x245);
            }[_0x12f3fc(0x1bf)](this), _0x121af0);
        }
        [_0x1d422a(0x246)]() {
            return [];
        }
        [_0x1d422a(0x24b)]() {
            const _0x10bd47 = _0x1d422a;
            if (!Laya || !Laya[_0x10bd47(0x24c)])
                return null;
            if (!window[_0x10bd47(0x24d)]) {
                const _0x48a548 = new Laya[(_0x10bd47(0x24c))]();
                _0x48a548[_0x10bd47(0x24e)] = _0x10bd47(0x24f), _0x48a548[_0x10bd47(0x250)] = 0x30d40, window[_0x10bd47(0x24d)] = _0x48a548;
            }
            return window[_0x10bd47(0x24d)];
        }
        [_0x1d422a(0x251)](_0x4d232d, _0x15656a) {
            const _0x2c8e7f = _0x1d422a;
            !this['needStartUp'] && (_0x15656a && _0x15656a());
            if (this[_0x2c8e7f(0x219)])
                return;
            _0x406c46['getInstance']()[_0x2c8e7f(0x252)](), _0x406c46[_0x2c8e7f(0x21c)]()[_0x2c8e7f(0x24b)](), this[_0x2c8e7f(0x253)](), this[_0x2c8e7f(0x254)](), window[_0x2c8e7f(0x231)][_0x2c8e7f(0x1b6)]()[_0x2c8e7f(0x255)](() => {
                const _0xb7a265 = _0x2c8e7f;
                Laya[_0xb7a265(0x256)][_0xb7a265(0x1de)] = function (_0x412945) {
                    const _0xa93826 = _0xb7a265;
                    window[_0xa93826(0x231)] && window[_0xa93826(0x231)]['playMusic'](_0x412945);
                }, Laya[_0xb7a265(0x256)][_0xb7a265(0x1e1)] = function (_0x2e2d3d, _0x216efd = ![]) {
                    const _0x49be12 = _0xb7a265;
                    window[_0x49be12(0x231)] && window[_0x49be12(0x231)][_0x49be12(0x1e1)](_0x2e2d3d);
                }, Laya[_0xb7a265(0x256)][_0xb7a265(0x1f7)] = function () {
                    const _0x4d282f = _0xb7a265;
                    window[_0x4d282f(0x231)] && window[_0x4d282f(0x231)]['stopMusic']();
                }, Laya[_0xb7a265(0x256)]['stopSound'] = function (_0x32f1e9) {
                    const _0x58bf80 = _0xb7a265;
                    window[_0x58bf80(0x231)] && window[_0x58bf80(0x231)]['stopSound'](_0x32f1e9);
                };
            }), this[_0x2c8e7f(0x219)] = !![], Laya[_0x2c8e7f(0x257)][_0x2c8e7f(0x1fa)]('cnf.json', Laya[_0x2c8e7f(0x258)]['create'](this, _0x4de127 => {
                window[_0x31367b(0x259)] = this[_0x31367b(0x259)](), window['box_adTwo'] = this[_0x31367b(0x25a)]();
                this[_0x31367b(0x21a)] = ![], _0x15656a && _0x15656a();
                // YYGGames['startupByYad']({
                //     'appName': _0x4d232d,
                //     'config': _0x4de127,
                //     'complete': () => {
                //         const _0x31367b = _0xb205, _0x1fffcb = YYGGames['getAdPlatformType']();
                //         window[_0x31367b(0x259)] = this[_0x31367b(0x259)](), window['box_adTwo'] = this[_0x31367b(0x25a)]();
                //         switch (_0x1fffcb) {
                //         case AdPlatformType[_0x31367b(0x25b)]:
                //         case AdPlatformType[_0x31367b(0x25c)]:
                //             window[_0x31367b(0x24d)] && (window[_0x31367b(0x24d)][_0x31367b(0x1cb)](0x0, 0x0), window[_0x31367b(0x24d)]['removeSelf']());
                //             break;
                //         default:
                //             window[_0x31367b(0x24d)] && Laya[_0x31367b(0x1cc)]['addChild'](window[_0x31367b(0x24d)]), window[_0x31367b(0x24d)]['on'](Laya['Event'][_0x31367b(0x25d)], window['yad'], _0x2c0105 => {
                //                 const _0x4b6147 = _0x31367b;
                //                 _0x2c0105['stopPropagation'](), _0x406c46[_0x4b6147(0x21c)]()[_0x4b6147(0x222)]('GAME', 'LOGO');
                //             });
                //             break;
                //         }
                //         this[_0x31367b(0x21a)] = ![], _0x15656a && _0x15656a();
                //     }
                // });
            }));
        }
        [_0x1d422a(0x25e)](_0x76d43e) {
            // const _0x33e07b = _0x1d422a;
            // _0x76d43e ? YYGGames[_0x33e07b(0x25e)](_0x76d43e) : YYGGames[_0x33e07b(0x25e)]();
        }
        [_0x1d422a(0x25f)]() {
            // const _0xb74035 = _0x1d422a;
            // YYGGames[_0xb74035(0x25f)]();
        }
        [_0x1d422a(0x252)](_0x5dff40) {
            // const _0x46d8df = _0x1d422a;
            // _0x5dff40 ? YYGGames[_0x46d8df(0x252)](_0x5dff40) : YYGGames[_0x46d8df(0x252)]();
        }
        [_0x1d422a(0x260)]() {
            // YYGGames['hideSplash']();
        }
        ['cargamesstartup'](_0x46f97c, _0x1e0e93) {
            const _0x5ca436 = _0x1d422a;
            !this[_0x5ca436(0x21a)] && (_0x1e0e93 && _0x1e0e93());
            if (this[_0x5ca436(0x219)])
                return;
            _0x406c46[_0x5ca436(0x21c)]()[_0x5ca436(0x252)](), _0x406c46[_0x5ca436(0x21c)]()[_0x5ca436(0x24b)](), this[_0x5ca436(0x253)](), this[_0x5ca436(0x254)](), window[_0x5ca436(0x231)]['init']()['then'](() => {
                const _0x1a6fc7 = _0x5ca436;
                Laya[_0x1a6fc7(0x256)]['playMusic'] = function (_0x271d1b) {
                    const _0x2f34b5 = _0x1a6fc7;
                    window['WebAudioEngine'] && window[_0x2f34b5(0x231)]['playMusic'](_0x271d1b);
                }, Laya[_0x1a6fc7(0x256)][_0x1a6fc7(0x1e1)] = function (_0x2966d6, _0x574a3a = ![]) {
                    const _0x5c395f = _0x1a6fc7;
                    window[_0x5c395f(0x231)] && window[_0x5c395f(0x231)][_0x5c395f(0x1e1)](_0x2966d6);
                }, Laya['SoundManager']['stopMusic'] = function () {
                    const _0x319293 = _0x1a6fc7;
                    window['WebAudioEngine'] && window[_0x319293(0x231)]['stopMusic']();
                }, Laya[_0x1a6fc7(0x256)][_0x1a6fc7(0x1df)] = function (_0x3792e4) {
                    const _0x4b5613 = _0x1a6fc7;
                    window[_0x4b5613(0x231)] && window[_0x4b5613(0x231)]['stopSound'](_0x3792e4);
                };
            }), this[_0x5ca436(0x219)] = !![], Laya[_0x5ca436(0x257)][_0x5ca436(0x1fa)](_0x5ca436(0x261), Laya['Handler'][_0x5ca436(0x262)](this, _0x551fb1 => {
                YYGGames['startupByCargames']({
                    'appName': _0x46f97c,
                    'config': _0x551fb1,
                    'complete': () => {
                        const _0x2fe81e = _0xb205, _0x4c854c = YYGGames[_0x2fe81e(0x263)]();
                        window[_0x2fe81e(0x259)] = this[_0x2fe81e(0x259)](), window[_0x2fe81e(0x25a)] = this['box_adTwo']();
                        switch (_0x4c854c) {
                        case AdPlatformType[_0x2fe81e(0x25b)]:
                        case AdPlatformType['en_XIAOMI']:
                            window['yad'] && (window[_0x2fe81e(0x24d)][_0x2fe81e(0x1cb)](0x0, 0x0), window[_0x2fe81e(0x24d)][_0x2fe81e(0x264)]());
                            break;
                        default:
                            window['yad'] && Laya[_0x2fe81e(0x1cc)][_0x2fe81e(0x265)](window[_0x2fe81e(0x24d)]), window['yad']['on'](Laya[_0x2fe81e(0x266)][_0x2fe81e(0x25d)], window['yad'], _0x313027 => {
                                const _0x8a2101 = _0x2fe81e;
                                _0x313027['stopPropagation'](), _0x406c46[_0x8a2101(0x21c)]()[_0x8a2101(0x222)]('GAME', 'LOGO');
                            });
                            break;
                        }
                        this[_0x2fe81e(0x21a)] = ![], _0x1e0e93 && _0x1e0e93();
                    }
                });
            }));
        }
        //puzzlegamestartup
        [_0x1d422a(0x267)](_0xcaf977, _0x48bb17) {
            const _0x27312f = _0x1d422a;
            !this[_0x27312f(0x21a)] && (_0x48bb17 && _0x48bb17());
            if (this[_0x27312f(0x219)])
                return;
            _0x406c46['getInstance']()[_0x27312f(0x252)](), _0x406c46['getInstance']()[_0x27312f(0x24b)](), this[_0x27312f(0x253)](), this['createLoading'](), window[_0x27312f(0x231)]['init']()[_0x27312f(0x255)](() => {
                const _0xc0e323 = _0x27312f;
                Laya['SoundManager']['playMusic'] = function (_0x2c43e5) {
                    const _0x330b34 = _0xb205;
                    window[_0x330b34(0x231)] && window[_0x330b34(0x231)][_0x330b34(0x1de)](_0x2c43e5);
                }, Laya[_0xc0e323(0x256)][_0xc0e323(0x1e1)] = function (_0x5f2cd1) {
                    const _0x301822 = _0xc0e323;
                    window['WebAudioEngine'] && window[_0x301822(0x231)][_0x301822(0x1e1)](_0x5f2cd1);
                }, Laya[_0xc0e323(0x256)][_0xc0e323(0x1f7)] = function (_0xaaabfa) {
                    const _0x3e401e = _0xc0e323;
                    window[_0x3e401e(0x231)] && window[_0x3e401e(0x231)][_0x3e401e(0x1f7)]();
                };
            }),
             this[_0x27312f(0x219)] = !![], Laya[_0x27312f(0x257)]['load'](_0x27312f(0x261), Laya[_0x27312f(0x258)][_0x27312f(0x262)](this, _0x313147 => {
                const _0x2373d0 = _0x27312f;
                const _0x5e33d9 = _0x2373d0;
                        window[_0x5e33d9(0x259)] = this[_0x5e33d9(0x259)](), window[_0x5e33d9(0x25a)] = this[_0x5e33d9(0x25a)]();
                        this[_0x5e33d9(0x21a)] = ![], _0x48bb17 && _0x48bb17();
                // const _0x2373d0 = _0x27312f;
                // YYGGames[_0x2373d0(0x268)]({
                //     'channel': 0x5,
                //     'appName': _0xcaf977,
                //     'config': _0x313147,
                //     'complete': () => {
                //         const _0x5e33d9 = _0x2373d0, _0x61ade7 = YYGGames[_0x5e33d9(0x263)]();
                //         window[_0x5e33d9(0x259)] = this[_0x5e33d9(0x259)](), window[_0x5e33d9(0x25a)] = this[_0x5e33d9(0x25a)]();
                //         switch (_0x61ade7) {
                //         case AdPlatformType[_0x5e33d9(0x25b)]:
                //         case AdPlatformType[_0x5e33d9(0x25c)]:
                //             window[_0x5e33d9(0x24d)] && (window[_0x5e33d9(0x24d)][_0x5e33d9(0x1cb)](0x0, 0x0), window[_0x5e33d9(0x24d)][_0x5e33d9(0x264)]());
                //             break;
                //         default:
                //             window[_0x5e33d9(0x24d)] && Laya['stage'][_0x5e33d9(0x265)](window[_0x5e33d9(0x24d)]), window[_0x5e33d9(0x24d)]['on'](Laya[_0x5e33d9(0x266)][_0x5e33d9(0x25d)], window[_0x5e33d9(0x24d)], _0x4c9561 => {
                //                 const _0x48ee23 = _0x5e33d9;
                //                 _0x4c9561[_0x48ee23(0x269)](), _0x406c46[_0x48ee23(0x21c)]()[_0x48ee23(0x222)]('GAME', _0x48ee23(0x26a));
                //             });
                //             break;
                //         }
                //         this[_0x5e33d9(0x21a)] = ![], _0x48bb17 && _0x48bb17();
                //     }
                // });
            }));
        }
        [_0x1d422a(0x253)]() {
            const _0x2b230c = _0x1d422a;
            if (!Laya[_0x2b230c(0x26b)] || !Laya[_0x2b230c(0x26c)])
                return;
            let _0x13cd0f = {
                'x': 0x0,
                'type': _0x2b230c(0x26d),
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': _0x2b230c(0x26d),
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': _0x2b230c(0x26e),
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': _0x2b230c(0x26f),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': _0x2b230c(0x270),
                        'searchKey': _0x2b230c(0x271),
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': 'spr_tip',
                            'presetID': 0x2,
                            'preset': _0x2b230c(0x26e),
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': _0x2b230c(0x272),
                            'height': 0x21c
                        },
                        'nodeParent': 0x3,
                        'label': _0x2b230c(0x272),
                        'isOpen': !![],
                        'isDirectory': !![],
                        'isAniNode': !![],
                        'hasChild': !![],
                        'compId': 0x4,
                        'child': [
                            {
                                'x': 0x1e,
                                'type': 'Rect',
                                'searchKey': _0x2b230c(0x273),
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': _0x2b230c(0x26e),
                                    'height': 0x21c,
                                    'fillColor': _0x2b230c(0x274)
                                },
                                'nodeParent': 0x4,
                                'label': _0x2b230c(0x275),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x2b230c(0x276),
                                'searchKey': _0x2b230c(0x276),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x2b230c(0x277),
                                    'text': _0x2b230c(0x278),
                                    'presetID': 0x4,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': _0x2b230c(0x279),
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': _0x2b230c(0x27a),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x2b230c(0x276),
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x2b230c(0x277),
                                    'text': _0x2b230c(0x27b),
                                    'presetID': 0x5,
                                    'preset': _0x2b230c(0x26e),
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': _0x2b230c(0x279),
                                    'align': _0x2b230c(0x27c)
                                },
                                'nodeParent': 0x4,
                                'label': _0x2b230c(0x27a),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x2b230c(0x276),
                                'searchKey': _0x2b230c(0x276),
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': 'middle',
                                    'text': 'Click\x20anywhere\x20to\x20close',
                                    'presetID': 0x6,
                                    'preset': _0x2b230c(0x26e),
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': _0x2b230c(0x279),
                                    'align': _0x2b230c(0x27c)
                                },
                                'nodeParent': 0x4,
                                'label': _0x2b230c(0x27a),
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
                        'name': _0x2b230c(0x27d),
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }]
            };
            class _0x3aa80a extends Laya[_0x2b230c(0x26c)] {
                constructor() {
                    super();
                }
                [_0x2b230c(0x27e)]() {
                    const _0x2ed84d = _0x2b230c;
                    this[_0x2ed84d(0x27f)][_0x2ed84d(0x280)] = 0x0, this[_0x2ed84d(0x27f)][_0x2ed84d(0x281)] = 0x0, this[_0x2ed84d(0x27f)][_0x2ed84d(0x282)] = 0x0, this[_0x2ed84d(0x27f)]['right'] = 0x0, this[_0x2ed84d(0x272)] = this[_0x2ed84d(0x27f)][_0x2ed84d(0x283)](_0x2ed84d(0x272)), this[_0x2ed84d(0x27f)][_0x2ed84d(0x284)] > this['owner'][_0x2ed84d(0x285)] ? this[_0x2ed84d(0x272)][_0x2ed84d(0x1cb)](this['owner'][_0x2ed84d(0x285)] / 0x780, this[_0x2ed84d(0x27f)][_0x2ed84d(0x285)] / 0x780) : this[_0x2ed84d(0x272)]['scale'](this[_0x2ed84d(0x27f)]['width'] / 0x438, this[_0x2ed84d(0x27f)][_0x2ed84d(0x284)] / 0x438), this[_0x2ed84d(0x272)]['pos'](this[_0x2ed84d(0x27f)][_0x2ed84d(0x284)] / 0x2, this['owner'][_0x2ed84d(0x285)] / 0x2), this[_0x2ed84d(0x27f)]['on'](Laya[_0x2ed84d(0x266)][_0x2ed84d(0x286)], this, this['closePer']);
                }
                [_0x2b230c(0x287)]() {
                    const _0x3e18fb = _0x2b230c;
                    _0x406c46[_0x3e18fb(0x21c)]()['closeNoVideo']();
                }
            }
            let _0x16cd98 = new Laya[(_0x2b230c(0x26b))]();
            _0x16cd98[_0x2b230c(0x288)] = _0x13cd0f, this[_0x2b230c(0x289)] = _0x16cd98['create'](), this['noVideoPer'][_0x2b230c(0x250)] = 0x30d3f, this['noVideoPer'][_0x2b230c(0x28a)](_0x3aa80a);
        }
        [_0x1d422a(0x28b)]() {
            const _0x5d2adc = _0x1d422a;
            this['noVideoPer'] && Laya[_0x5d2adc(0x1cc)][_0x5d2adc(0x265)](this[_0x5d2adc(0x289)]);
        }
        [_0x1d422a(0x28c)]() {
            const _0x4b3d8a = _0x1d422a;
            this[_0x4b3d8a(0x289)] && this[_0x4b3d8a(0x289)][_0x4b3d8a(0x264)]();
        }
        [_0x1d422a(0x254)]() {
            const _0xadbf9c = _0x1d422a;
            if (!Laya[_0xadbf9c(0x26b)] || !Laya[_0xadbf9c(0x26c)])
                return;
            let _0x142155 = {
                'x': 0xf,
                'type': _0xadbf9c(0x26d),
                'searchKey': _0xadbf9c(0x28d),
                'props': {
                    'var': _0xadbf9c(0x28e),
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
                        'type': _0xadbf9c(0x26d),
                        'searchKey': _0xadbf9c(0x26d),
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': _0xadbf9c(0x274),
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
                        'type': _0xadbf9c(0x276),
                        'searchKey': _0xadbf9c(0x276),
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'valign': _0xadbf9c(0x277),
                            'text': _0xadbf9c(0x28f),
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': _0xadbf9c(0x279),
                            'centerY': 0x0,
                            'align': _0xadbf9c(0x27c)
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
            class _0x2b4420 extends Laya[_0xadbf9c(0x26c)] {
                constructor() {
                    super();
                }
                ['onEnable']() {
                }
                [_0xadbf9c(0x287)]() {
                    const _0x25fda3 = _0xadbf9c;
                    _0x406c46['getInstance']()[_0x25fda3(0x28c)]();
                }
            }
            let _0x4fd918 = new Laya[(_0xadbf9c(0x26b))]();
            _0x4fd918['json'] = _0x142155, this[_0xadbf9c(0x290)] = _0x4fd918[_0xadbf9c(0x262)](), this['loadingPer'][_0xadbf9c(0x250)] = 0x30d3e, this[_0xadbf9c(0x290)][_0xadbf9c(0x28a)](_0x2b4420);
        }
        ['showLoading']() {
            const _0x3114e0 = _0x1d422a;
            this[_0x3114e0(0x290)] && Laya[_0x3114e0(0x1cc)]['addChild'](this[_0x3114e0(0x290)]);
        }
        [_0x1d422a(0x291)]() {
            const _0x3b9d27 = _0x1d422a;
            this[_0x3b9d27(0x290)] && this[_0x3b9d27(0x290)][_0x3b9d27(0x264)]();
        }
        ['createList']() {
            const _0x5a25d9 = _0x1d422a;
            class _0x1d12ad extends Laya[_0x5a25d9(0x26d)] {
                constructor() {
                    const _0x5d2e7c = _0x5a25d9;
                    super(), this[_0x5d2e7c(0x292)] = new Laya[(_0x5d2e7c(0x24c))](), this[_0x5d2e7c(0x292)][_0x5d2e7c(0x293)] = 'thumb', this['size'](0x190, 0x12c), this['img'][_0x5d2e7c(0x294)](0x190, 0x12c), this['addChild'](this[_0x5d2e7c(0x292)]);
                }
            }
            let _0x428df5 = new Laya['List']();
            return _0x428df5[_0x5a25d9(0x294)](0x320, 0x258), _0x428df5[_0x5a25d9(0x295)] = _0x1d12ad, _0x428df5;
        }
        [_0x1d422a(0x259)]() {
            const _0x457474 = _0x1d422a;
            if (!Laya || !Laya[_0x457474(0x1cc)])
                return null;
            // if (YYGGames[_0x457474(0x263)]() == AdPlatformType['en_GAMEDISTRIBUTION'] || YYGGames['getAdPlatformType']() == AdPlatformType['en_XIAOMI']) {
            //     let _0x1abfca = new Laya[(_0x457474(0x26d))]();
            //     return _0x1abfca[_0x457474(0x296)] = function () {
            //     }, _0x1abfca;
            // }
            if (!this['_scrollList']) {
                let _0x1197e0 = {
                    'x': 0x0,
                    'type': 'List',
                    'selectedBox': 0x90,
                    'selecteID': 0x78,
                    'searchKey': _0x457474(0x297),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x370,
                        'repeatY': 0x1,
                        'presetID': 0x1,
                        'preset': _0x457474(0x298),
                        'name': _0x457474(0x299),
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': _0x457474(0x299),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': 'Image',
                            'searchKey': _0x457474(0x29a),
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x384,
                                'skin': _0x457474(0x29b),
                                'sizeGrid': '30,\x2030,\x2030,\x2030',
                                'presetID': 0x2,
                                'preset': _0x457474(0x298),
                                'name': _0x457474(0x29c),
                                'height': 0xbe,
                                'centerY': 0x0,
                                'centerX': 0x0
                            },
                            'nodeParent': 0x90,
                            'label': _0x457474(0x29c),
                            'isDirectory': ![],
                            'isAniNode': ![],
                            'hasChild': ![],
                            'compId': 0x78,
                            'child': []
                        },
                        {
                            'x': 0xf,
                            'type': 'Box',
                            'searchKey': _0x457474(0x26d),
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': 'render',
                                'presetID': 0x3,
                                'preset': _0x457474(0x298),
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': _0x457474(0x29d),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x457474(0x24c),
                                    'searchKey': _0x457474(0x29e),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': _0x457474(0x298),
                                        'name': _0x457474(0x29f),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'nodeParent': 0x77,
                                    'label': _0x457474(0x29f),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': ![],
                                    'hasChild': !![],
                                    'compId': 0x79,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x457474(0x24c),
                                            'searchKey': 'Image',
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': 'di1.png',
                                                'sizeGrid': _0x457474(0x2a0),
                                                'renderType': _0x457474(0x2a1),
                                                'presetID': 0x5,
                                                'preset': _0x457474(0x298),
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
                            'name': _0x457474(0x27d),
                            'id': 0x1,
                            'frameRate': 0x18,
                            'action': 0x0
                        }]
                };
                class _0x29b76a extends Laya['Script'] {
                    constructor() {
                        const _0x198954 = _0x457474;
                        super(), this['imgArr'] = [], this[_0x198954(0x2a2)] = [
                            0.83,
                            0.83
                        ], this[_0x198954(0x2a3)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    [_0x457474(0x27e)]() {
                        return [];
                    }
                    [_0x457474(0x2a5)](_0x371fff, _0x30d830) {
                        const _0x46e6c2 = _0x457474;
                        let _0x113e62 = _0x371fff[_0x46e6c2(0x283)]('thumb');
                        _0x371fff['offAll'](), _0x113e62[_0x46e6c2(0x2b0)](), _0x371fff['on'](Laya[_0x46e6c2(0x266)][_0x46e6c2(0x2b1)], _0x371fff, () => {
                            _0x371fff['zOrder'] = 0x64;
                        }), _0x371fff['on'](Laya[_0x46e6c2(0x266)][_0x46e6c2(0x2b2)], _0x371fff, () => {
                            _0x371fff['zOrder'] = _0x30d830;
                        }), _0x113e62['on'](Laya['Event'][_0x46e6c2(0x2b1)], _0x371fff, () => {
                            const _0x2c2c53 = _0x46e6c2;
                            _0x113e62[_0x2c2c53(0x1cb)](1.1, 1.1), this['endAni']();
                        }), _0x113e62['on'](Laya[_0x46e6c2(0x266)][_0x46e6c2(0x2b2)], _0x371fff, () => {
                            const _0xa3ea13 = _0x46e6c2;
                            _0x113e62[_0xa3ea13(0x1cb)](0x1, 0x1), Laya[_0xa3ea13(0x1d0)][_0xa3ea13(0x2ad)](0x1, this, this['loopList']);
                        }), _0x113e62['on'](Laya[_0x46e6c2(0x266)][_0x46e6c2(0x25d)], _0x371fff, _0x34a90c => {
                            const _0x10b150 = _0x46e6c2;
                            _0x34a90c[_0x10b150(0x269)](), _0x406c46[_0x10b150(0x21c)]()[_0x10b150(0x222)](_0x10b150(0x2b3), _0x10b150(0x2b4), _0x371fff['dataSource']['id']);
                        });
                        let _0x5cf46e = _0x113e62[_0x46e6c2(0x2a1)];
                        _0x371fff[_0x46e6c2(0x284)] = this[_0x46e6c2(0x2a3)][0x0] + 0x14, _0x371fff[_0x46e6c2(0x285)] = this[_0x46e6c2(0x2a3)][0x1] + 0x14, _0x371fff['x'] = (this['sizeTran'][0x0] + 0x14) * _0x30d830;
                        if (this[_0x46e6c2(0x2a3)][0x2])
                            _0x5cf46e[_0x46e6c2(0x284)] = _0x113e62[_0x46e6c2(0x284)] = this[_0x46e6c2(0x2a3)][0x0], _0x5cf46e['height'] = _0x113e62[_0x46e6c2(0x285)] = this[_0x46e6c2(0x2a3)][0x1];
                        else {
                            let _0x3f2e52 = 0xc8 / this[_0x46e6c2(0x2a3)][0x0] < 0x96 / this[_0x46e6c2(0x2a3)][0x1] ? 0xc8 / this[_0x46e6c2(0x2a3)][0x0] : 0x96 / this[_0x46e6c2(0x2a3)][0x1];
                            _0x113e62[_0x46e6c2(0x284)] = 0xc8 / _0x3f2e52, _0x113e62[_0x46e6c2(0x285)] = 0x96 / _0x3f2e52, _0x5cf46e[_0x46e6c2(0x284)] = this[_0x46e6c2(0x2a3)][0x0], _0x5cf46e['height'] = this[_0x46e6c2(0x2a3)][0x1];
                        }
                        _0x5cf46e['x'] = _0x113e62['width'] / 0x2, _0x5cf46e['y'] = _0x113e62[_0x46e6c2(0x285)] / 0x2;
                    }
                    ['setSize'](_0x597745, _0x576b64, _0x2e5d1c = ![]) {
                        const _0x50a444 = _0x457474;
                        this[_0x50a444(0x2a3)] = [
                            _0x597745,
                            _0x576b64,
                            _0x2e5d1c
                        ], this['img_ListBg'] && (this[_0x50a444(0x27f)][_0x50a444(0x284)] = (_0x597745 + 0x14) * 0x4, this[_0x50a444(0x27f)][_0x50a444(0x285)] = _0x576b64 + 0x14, this['img_ListBg'][_0x50a444(0x284)] = (_0x597745 + 0x14) * 0x4 + 0x14, this[_0x50a444(0x29c)][_0x50a444(0x285)] = _0x576b64 + 0x28, this[_0x50a444(0x27f)][_0x50a444(0x2b5)] = [], this[_0x50a444(0x27f)]['array'] = this['listArray']);
                    }
                    [_0x457474(0x2ae)]() {
                        const _0x2f0dd3 = _0x457474;
                        this['owner']['scrollBar'][_0x2f0dd3(0x2b6)] += 0x1, this['owner'][_0x2f0dd3(0x2a8)][_0x2f0dd3(0x2b6)] >= this['owner'][_0x2f0dd3(0x2a8)]['max'] && (this['owner'][_0x2f0dd3(0x2a8)][_0x2f0dd3(0x2b6)] = 0x0);
                    }
                    [_0x457474(0x2b7)]() {
                        const _0x5e9df1 = _0x457474;
                        Laya[_0x5e9df1(0x1d0)]['clearAll'](this), Laya[_0x5e9df1(0x2b8)][_0x5e9df1(0x2b9)](this[_0x5e9df1(0x27f)]['scrollBar']);
                    }
                    [_0x457474(0x2ba)](_0x1c830b) {
                    }
                    [_0x457474(0x2bb)]() {
                        const _0xac482c = _0x457474;
                        if (this[_0xac482c(0x2a6)][_0xac482c(0x1fb)]) {
                            let _0x2e7c4b = JSON[_0xac482c(0x1dd)](JSON[_0xac482c(0x228)](this['imgArr']));
                            Laya[_0xac482c(0x257)][_0xac482c(0x2a7)](_0x2e7c4b);
                        }
                        this[_0xac482c(0x2a6)] = [], this['endAni'](), this[_0xac482c(0x27f)][_0xac482c(0x2b5)] = [];
                    }
                }
                let _0x218f05 = new Laya[(_0x457474(0x26b))]();
                _0x218f05['json'] = _0x1197e0, this[_0x457474(0x2bc)] = _0x218f05['create'](), this[_0x457474(0x2bc)][_0x457474(0x250)] = 0x30d3f, this[_0x457474(0x2bc)]['addComponent'](_0x29b76a), this[_0x457474(0x2bc)][_0x457474(0x296)] = this[_0x457474(0x2bc)][_0x457474(0x2bd)](_0x29b76a)[_0x457474(0x296)][_0x457474(0x1bf)](this[_0x457474(0x2bc)][_0x457474(0x2bd)](_0x29b76a));
            }
            return this[_0x457474(0x2bc)];
        }
        [_0x1d422a(0x25a)]() {
            const _0x1635cc = _0x1d422a;
            if (!Laya || !Laya[_0x1635cc(0x1cc)])
                return null;
            // if (YYGGames['getAdPlatformType']() == AdPlatformType[_0x1635cc(0x25b)] || YYGGames[_0x1635cc(0x263)]() == AdPlatformType[_0x1635cc(0x25c)]) {
            //     let _0x3e1313 = new Laya[(_0x1635cc(0x26d))]();
            //     return _0x3e1313[_0x1635cc(0x2be)] = _0x3e1313[_0x1635cc(0x296)] = function () {
            //     }, _0x3e1313;
            // }
            if (!this[_0x1635cc(0x2bf)]) {
                let _0x1ab945 = {
                    'x': 0x0,
                    'type': _0x1635cc(0x26d),
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': 'Box,box_adTwo',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': _0x1635cc(0x2c0),
                        'name': 'box_adTwo',
                        'isPresetRoot': !![],
                        'height': 0x1,
                        'centerX': 0x0,
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x99,
                    'label': _0x1635cc(0x25a),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x92,
                    'child': [
                        {
                            'x': 0xf,
                            'type': _0x1635cc(0x24c),
                            'searchKey': 'Image,img_ad0',
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': 'di1.png',
                                'sizeGrid': _0x1635cc(0x2a0),
                                'presetID': 0x2,
                                'preset': _0x1635cc(0x2c0),
                                'name': _0x1635cc(0x2c1),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x1635cc(0x2c1),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': _0x1635cc(0x2c2),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': _0x1635cc(0x2c0),
                                        'name': _0x1635cc(0x2c3),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': _0x1635cc(0x2c3),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x95,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x1635cc(0x24c),
                                            'searchKey': 'Image',
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0x1635cc(0x2c4),
                                                'sizeGrid': _0x1635cc(0x2a0),
                                                'renderType': _0x1635cc(0x2a1),
                                                'presetID': 0x4,
                                                'preset': _0x1635cc(0x2c0),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': 'Image(box_adTwo)',
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
                            'type': _0x1635cc(0x24c),
                            'searchKey': _0x1635cc(0x2c5),
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': _0x1635cc(0x2c4),
                                'sizeGrid': _0x1635cc(0x2a0),
                                'presetID': 0x5,
                                'preset': _0x1635cc(0x2c0),
                                'name': _0x1635cc(0x2c6),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0x1635cc(0x2c6),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x1635cc(0x24c),
                                    'searchKey': 'Image,img_adImg',
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                        'name': _0x1635cc(0x2c3),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': _0x1635cc(0x2c3),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x96,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x1635cc(0x24c),
                                            'searchKey': _0x1635cc(0x24c),
                                            'props': {
                                                'width': 0xc8,
                                                'skin': _0x1635cc(0x2c4),
                                                'sizeGrid': _0x1635cc(0x2a0),
                                                'renderType': 'mask',
                                                'presetID': 0x7,
                                                'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': _0x1635cc(0x2c7),
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
                class _0x544654 extends Laya['Script'] {
                    constructor() {
                        const _0x16f6ae = _0x1635cc;
                        super(), this[_0x16f6ae(0x2a6)] = [], this[_0x16f6ae(0x2c8)] = 0x0, this[_0x16f6ae(0x2a3)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        const _0x907197 = _0x1635cc;
                        !this[_0x907197(0x2c1)] && (this[_0x907197(0x2c1)] = this[_0x907197(0x27f)][_0x907197(0x283)](_0x907197(0x2c1))), !this[_0x907197(0x2c6)] && (this[_0x907197(0x2c6)] = this[_0x907197(0x27f)]['getChildByName'](_0x907197(0x2c6))), !this[_0x907197(0x2c9)] && (this[_0x907197(0x2c9)] = this[_0x907197(0x2c1)][_0x907197(0x283)]('img_adImg')), !this[_0x907197(0x2ca)] && (this[_0x907197(0x2ca)] = this[_0x907197(0x2c6)][_0x907197(0x283)](_0x907197(0x2c3))), !this['img_ad0AdMask'] && (this[_0x907197(0x2cb)] = this[_0x907197(0x2c9)][_0x907197(0x2a1)]), !this[_0x907197(0x2cc)] && (this[_0x907197(0x2cc)] = this[_0x907197(0x2ca)][_0x907197(0x2a1)]), this[_0x907197(0x27f)][_0x907197(0x2af)] = ![];
                        let _0xac7252 = _0x406c46[_0x907197(0x21c)]()[_0x907197(0x246)]();
                        if (!_0xac7252[_0x907197(0x1fb)])
                            return;
                        let _0x4ef691 = JSON[_0x907197(0x1dd)](JSON['stringify'](_0xac7252));
                        if (this[_0x907197(0x2a6)][_0x907197(0x1fb)]) {
                            let _0x19b6d1 = JSON[_0x907197(0x1dd)](JSON[_0x907197(0x228)](this[_0x907197(0x2a6)]));
                            Laya['loader'][_0x907197(0x2a7)](_0x19b6d1);
                        }
                        this[_0x907197(0x2be)](this[_0x907197(0x2c8)]), this['setSize'](this[_0x907197(0x2a3)][0x0], this[_0x907197(0x2a3)][0x1], this[_0x907197(0x2a3)][0x2]), this[_0x907197(0x2c1)][_0x907197(0x2b0)](), this['img_ad1'][_0x907197(0x2b0)](), this[_0x907197(0x27f)][_0x907197(0x2af)] = !![], this[_0x907197(0x2c1)]['getChildByName'](_0x907197(0x2c3))['skin'] = _0x4ef691[0x0][_0x907197(0x29f)], this['img_ad1'][_0x907197(0x283)](_0x907197(0x2c3))[_0x907197(0x24e)] = _0x4ef691[0x1][_0x907197(0x29f)], this[_0x907197(0x2c1)]['on'](Laya['Event'][_0x907197(0x25d)], this, _0x4a9fca => {
                            const _0x192057 = _0x907197;
                            _0x4a9fca[_0x192057(0x269)](), _0x406c46[_0x192057(0x21c)]()[_0x192057(0x222)](_0x192057(0x2b3), _0x192057(0x2b4), _0x4ef691[0x0]['id']);
                        }), this[_0x907197(0x2c6)]['on'](Laya[_0x907197(0x266)]['MOUSE_DOWN'], this, _0x40aa63 => {
                            const _0x1844ff = _0x907197;
                            _0x40aa63['stopPropagation'](), _0x406c46[_0x1844ff(0x21c)]()[_0x1844ff(0x222)]('GAME', _0x1844ff(0x2b4), _0x4ef691[0x1]['id']);
                        });
                    }
                    [_0x1635cc(0x2be)](_0x50ffb6) {
                        const _0x12ea47 = _0x1635cc;
                        this[_0x12ea47(0x2c8)] = _0x50ffb6, this[_0x12ea47(0x2c1)] && (this['img_ad0']['x'] = -this['img_ad0'][_0x12ea47(0x284)] - this['spaceNum'] / 0x2, this[_0x12ea47(0x2c6)]['x'] = this['spaceNum'] / 0x2);
                    }
                    [_0x1635cc(0x2bb)]() {
                        const _0x587852 = _0x1635cc;
                        if (this[_0x587852(0x2a6)][_0x587852(0x1fb)]) {
                            let _0x3e49a7 = JSON['parse'](JSON['stringify'](this[_0x587852(0x2a6)]));
                            Laya[_0x587852(0x257)][_0x587852(0x2a7)](_0x3e49a7);
                        }
                        this[_0x587852(0x2a6)] = [];
                    }
                    [_0x1635cc(0x296)](_0x5d2a5c, _0x1009a1, _0xf5e48e = ![]) {
                        const _0x116ecd = _0x1635cc;
                        this[_0x116ecd(0x2a3)] = [
                            _0x5d2a5c,
                            _0x1009a1,
                            _0xf5e48e
                        ];
                        if (this[_0x116ecd(0x2c1)]) {
                            this['img_ad0'][_0x116ecd(0x284)] = this['img_ad1'][_0x116ecd(0x284)] = _0x5d2a5c + 0x14, this[_0x116ecd(0x2c1)][_0x116ecd(0x285)] = this[_0x116ecd(0x2c6)]['height'] = _0x1009a1 + 0x14;
                            if (_0xf5e48e)
                                this[_0x116ecd(0x2cb)][_0x116ecd(0x284)] = this[_0x116ecd(0x2cc)][_0x116ecd(0x284)] = this['img_ad0Ad'][_0x116ecd(0x284)] = this[_0x116ecd(0x2ca)]['width'] = _0x5d2a5c, this[_0x116ecd(0x2cb)]['height'] = this[_0x116ecd(0x2cc)]['height'] = this[_0x116ecd(0x2c9)][_0x116ecd(0x285)] = this['img_ad1Ad'][_0x116ecd(0x285)] = _0x1009a1;
                            else {
                                let _0x5314d5 = 0xc8 / _0x5d2a5c < 0x96 / _0x1009a1 ? 0xc8 / _0x5d2a5c : 0x96 / _0x1009a1;
                                this[_0x116ecd(0x2c9)][_0x116ecd(0x284)] = this[_0x116ecd(0x2ca)]['width'] = 0xc8 / _0x5314d5, this[_0x116ecd(0x2c9)][_0x116ecd(0x285)] = this[_0x116ecd(0x2ca)][_0x116ecd(0x285)] = 0x96 / _0x5314d5, this['img_ad0AdMask'][_0x116ecd(0x284)] = this[_0x116ecd(0x2cc)][_0x116ecd(0x284)] = _0x5d2a5c, this['img_ad0AdMask'][_0x116ecd(0x285)] = this[_0x116ecd(0x2cc)]['height'] = _0x1009a1;
                            }
                            this[_0x116ecd(0x2cb)]['x'] = this[_0x116ecd(0x2cc)]['x'] = this[_0x116ecd(0x2c9)][_0x116ecd(0x284)] / 0x2, this[_0x116ecd(0x2cb)]['y'] = this[_0x116ecd(0x2cc)]['y'] = this['img_ad0Ad'][_0x116ecd(0x285)] / 0x2, this['setSpaceX'](this[_0x116ecd(0x2c8)]);
                        }
                    }
                }
                let _0x100026 = new Laya['Prefab']();
                _0x100026[_0x1635cc(0x288)] = _0x1ab945, this['_box_adTwo'] = _0x100026[_0x1635cc(0x262)](), this[_0x1635cc(0x2bf)]['zOrder'] = 0x30d3f, this['_box_adTwo'][_0x1635cc(0x28a)](_0x544654), this[_0x1635cc(0x2bf)][_0x1635cc(0x2be)] = this[_0x1635cc(0x2bf)]['getComponent'](_0x544654)[_0x1635cc(0x2be)][_0x1635cc(0x1bf)](this[_0x1635cc(0x2bf)][_0x1635cc(0x2bd)](_0x544654)), this[_0x1635cc(0x2bf)][_0x1635cc(0x296)] = this['_box_adTwo'][_0x1635cc(0x2bd)](_0x544654)[_0x1635cc(0x296)][_0x1635cc(0x1bf)](this[_0x1635cc(0x2bf)][_0x1635cc(0x2bd)](_0x544654));
            }
            return this[_0x1635cc(0x2bf)];
        }
    }
    _0x406c46[_0x1d422a(0x21d)] = null, window[_0x1d422a(0x2cd)] = _0x406c46;
    class _0x39d714 {
        constructor() {
            const _0x4f7d8a = _0x1d422a;
            this['_box_adTwo0'] = null, this[_0x4f7d8a(0x2bc)] = null, this[_0x4f7d8a(0x2ce)] = this;
        }
        static get ['inst']() {
            const _0x44c9bf = _0x1d422a;
            return !this[_0x44c9bf(0x2ce)] && new _0x39d714(), this[_0x44c9bf(0x2ce)];
        }
        ['box_adTwo']() {
            const _0x555529 = _0x1d422a;
            if (!Laya || !Laya[_0x555529(0x1cc)])
                return null;
            // if (YYGGames[_0x555529(0x263)]() == AdPlatformType['en_GAMEDISTRIBUTION'] || YYGGames[_0x555529(0x263)]() == AdPlatformType[_0x555529(0x25c)]) {
            //     let _0x200c58 = new Laya['Box']();
            //     return _0x200c58[_0x555529(0x2be)] = _0x200c58[_0x555529(0x296)] = function () {
            //     }, _0x200c58;
            // }
            if (!this['_box_adTwo0']) {
                this[_0x555529(0x2cf)] = new Laya[(_0x555529(0x26d))](), this['_box_adTwo0']['name'] = _0x555529(0x2cf), this['_box_adTwo0'][_0x555529(0x2d0)] = this[_0x555529(0x2cf)][_0x555529(0x2d1)] = 0.5, this[_0x555529(0x2cf)][_0x555529(0x250)] = 0x30d3f, this[_0x555529(0x2cf)][_0x555529(0x2d2)] = 0x0;
                let _0x24e248 = new Laya[(_0x555529(0x24c))]();
                _0x24e248[_0x555529(0x293)] = _0x555529(0x2d3), _0x24e248[_0x555529(0x2d4)] = '30,30,30,30', _0x24e248[_0x555529(0x294)](0xdc, 0xaa), _0x24e248[_0x555529(0x24e)] = _0x555529(0x2c4);
                let _0x22eb46 = new Laya[(_0x555529(0x24c))]();
                _0x22eb46['name'] = 'leftAdMask', _0x22eb46['size'](0xc8, 0x96), _0x22eb46[_0x555529(0x2d4)] = '30,30,30,30', _0x22eb46[_0x555529(0x2d0)] = _0x22eb46[_0x555529(0x2d1)] = 0.5, _0x22eb46['skin'] = _0x555529(0x2c4);
                let _0x3b7852 = new Laya['Image']();
                _0x3b7852[_0x555529(0x293)] = _0x555529(0x2d5), _0x3b7852[_0x555529(0x294)](0xc8, 0x96), _0x3b7852[_0x555529(0x2d0)] = _0x3b7852[_0x555529(0x2d1)] = 0.5, _0x3b7852[_0x555529(0x24e)] = '', _0x3b7852[_0x555529(0x2a1)] = _0x22eb46, _0x24e248['addChild'](_0x3b7852), _0x24e248[_0x555529(0x2d6)](0x0, 0x0), _0x3b7852['pos'](_0x24e248[_0x555529(0x284)] / 0x2, _0x24e248['height'] / 0x2), _0x22eb46[_0x555529(0x2d6)](_0x3b7852[_0x555529(0x284)] / 0x2, _0x3b7852[_0x555529(0x285)] / 0x2);
                let _0x1a706c = new Laya[(_0x555529(0x24c))]();
                _0x1a706c[_0x555529(0x293)] = 'rightAdBg', _0x1a706c[_0x555529(0x2d4)] = _0x555529(0x2a0), _0x1a706c[_0x555529(0x294)](0xdc, 0xaa), _0x1a706c['skin'] = _0x555529(0x2c4);
                let _0x5c7914 = new Laya[(_0x555529(0x24c))]();
                _0x5c7914[_0x555529(0x293)] = 'rightAdMask', _0x5c7914[_0x555529(0x294)](0xc8, 0x96), _0x5c7914[_0x555529(0x2d4)] = _0x555529(0x2a0), _0x5c7914['anchorX'] = _0x5c7914[_0x555529(0x2d1)] = 0.5, _0x5c7914[_0x555529(0x24e)] = 'di1.png';
                let _0x58ebbe = new Laya['Image']();
                _0x58ebbe[_0x555529(0x293)] = 'rightAd', _0x58ebbe['size'](0xc8, 0x96), _0x58ebbe['anchorX'] = _0x58ebbe['anchorY'] = 0.5, _0x58ebbe[_0x555529(0x24e)] = '', _0x58ebbe['mask'] = _0x5c7914, _0x1a706c[_0x555529(0x265)](_0x58ebbe), _0x1a706c['pos'](_0x24e248[_0x555529(0x284)], 0x0), _0x58ebbe[_0x555529(0x2d6)](_0x1a706c[_0x555529(0x284)] / 0x2, _0x1a706c[_0x555529(0x285)] / 0x2), _0x5c7914['pos'](_0x58ebbe[_0x555529(0x284)] / 0x2, _0x58ebbe[_0x555529(0x285)] / 0x2), this[_0x555529(0x2cf)][_0x555529(0x2d7)] = 0x0, this[_0x555529(0x2cf)][_0x555529(0x284)] = _0x24e248[_0x555529(0x284)] + _0x1a706c[_0x555529(0x284)], this['_box_adTwo0'][_0x555529(0x265)](_0x24e248), this['_box_adTwo0'][_0x555529(0x265)](_0x1a706c), this['_box_adTwo0'][_0x555529(0x2be)] = this[_0x555529(0x2be)]['bind'](this[_0x555529(0x2cf)]), this[_0x555529(0x2cf)][_0x555529(0x296)] = this[_0x555529(0x296)]['bind'](this['_box_adTwo0']);
                let _0x39e275 = _0x406c46[_0x555529(0x21c)]()[_0x555529(0x246)]();
                if (!_0x39e275[_0x555529(0x1fb)])
                    return;
                let _0x512be5 = JSON[_0x555529(0x1dd)](JSON[_0x555529(0x228)](_0x39e275));
                _0x3b7852[_0x555529(0x2b0)](), _0x58ebbe[_0x555529(0x2b0)](), _0x3b7852['skin'] = _0x512be5[0x0][_0x555529(0x29f)], _0x58ebbe[_0x555529(0x24e)] = _0x512be5[0x1][_0x555529(0x29f)], _0x3b7852['on'](Laya[_0x555529(0x266)][_0x555529(0x25d)], this, _0x1e4e9c => {
                    const _0x207c42 = _0x555529;
                    _0x1e4e9c[_0x207c42(0x269)](), _0x406c46[_0x207c42(0x21c)]()['navigate'](_0x207c42(0x2b3), _0x207c42(0x2b4), _0x512be5[0x0]['id']);
                }), _0x58ebbe['on'](Laya[_0x555529(0x266)]['MOUSE_DOWN'], this, _0x5251ef => {
                    const _0x54d844 = _0x555529;
                    _0x5251ef[_0x54d844(0x269)](), _0x406c46[_0x54d844(0x21c)]()[_0x54d844(0x222)](_0x54d844(0x2b3), _0x54d844(0x2b4), _0x512be5[0x1]['id']);
                }), this[_0x555529(0x2cf)][_0x555529(0x2af)] = ![];
            }
            return this[_0x555529(0x2cf)];
        }
        [_0x1d422a(0x296)](_0x2baa5f = 0xc8, _0x4bd5ed = 0x96, _0x6a9e9f = ![], _0x126190 = !![]) {
            const _0x55aee5 = _0x1d422a;
            let _0x4a6b93 = 0xc8;
            _0x2baa5f / 0xc8 > _0x4bd5ed / 0x96 ? _0x4a6b93 = _0x2baa5f / 0xc8 : _0x4a6b93 = _0x4bd5ed / 0x96;
            let _0x583ad4 = 0xc8;
            if (this[_0x55aee5(0x293)] == _0x55aee5(0x2cf)) {
                let _0x56ad94 = this[_0x55aee5(0x283)](_0x55aee5(0x2d3)), _0x22b59d = this['getChildByName'](_0x55aee5(0x2d8)), _0x41c151 = _0x56ad94[_0x55aee5(0x283)]('leftAd'), _0x40662c = _0x22b59d[_0x55aee5(0x283)]('rightAd');
                _0x126190 && (_0x56ad94[_0x55aee5(0x294)](0xdc, 0xaa), _0x22b59d[_0x55aee5(0x294)](0xdc, 0xaa), _0x41c151[_0x55aee5(0x294)](0xc8, 0x96), _0x40662c[_0x55aee5(0x294)](0xc8, 0x96), _0x41c151['mask'][_0x55aee5(0x294)](0xc8, 0x96), _0x40662c['mask']['size'](0xc8, 0x96), _0x56ad94[_0x55aee5(0x1cb)](0x1, 0x1), _0x22b59d[_0x55aee5(0x1cb)](0x1, 0x1), _0x41c151[_0x55aee5(0x1cb)](0x1, 0x1), _0x40662c[_0x55aee5(0x1cb)](0x1, 0x1), _0x41c151[_0x55aee5(0x2a1)]['scale'](0x1, 0x1), _0x40662c[_0x55aee5(0x2a1)][_0x55aee5(0x1cb)](0x1, 0x1));
                let _0x460ab8 = 0xc8 * _0x4bd5ed / _0x2baa5f;
                _0x56ad94['size'](_0x583ad4 + 0x14, _0x460ab8 + 0x14), _0x22b59d[_0x55aee5(0x294)](_0x583ad4 + 0x14, _0x460ab8 + 0x14), _0x41c151[_0x55aee5(0x2a1)][_0x55aee5(0x294)](_0x583ad4, _0x460ab8), _0x40662c[_0x55aee5(0x2a1)][_0x55aee5(0x294)](_0x583ad4, _0x460ab8), !_0x6a9e9f ? (_0x41c151[_0x55aee5(0x294)](_0x583ad4, _0x460ab8), _0x40662c[_0x55aee5(0x294)](_0x583ad4, _0x460ab8)) : (_0x41c151['size'](0xc8 * _0x4a6b93, 0x96 * _0x4a6b93), _0x40662c[_0x55aee5(0x294)](0xc8 * _0x4a6b93, 0x96 * _0x4a6b93)), _0x41c151[_0x55aee5(0x2d6)](_0x56ad94[_0x55aee5(0x284)] / 0x2, _0x56ad94[_0x55aee5(0x285)] / 0x2), _0x41c151[_0x55aee5(0x2a1)]['pos'](_0x41c151[_0x55aee5(0x284)] / 0x2, _0x41c151['height'] / 0x2), _0x40662c[_0x55aee5(0x2d6)](_0x22b59d[_0x55aee5(0x284)] / 0x2, _0x22b59d['height'] / 0x2), _0x40662c[_0x55aee5(0x2a1)]['pos'](_0x40662c['width'] / 0x2, _0x40662c[_0x55aee5(0x285)] / 0x2), this[_0x55aee5(0x2be)](this[_0x55aee5(0x2d2)]);
            } else
                this['name'] == _0x55aee5(0x2bc) && (this['sizeArr'] = [
                    _0x2baa5f,
                    _0x4bd5ed,
                    _0x6a9e9f,
                    _0x126190
                ]);
        }
        [_0x1d422a(0x259)]() {
            const _0x35a349 = _0x1d422a;
            if (!Laya || !Laya[_0x35a349(0x1cc)])
                return null;
            if (YYGGames[_0x35a349(0x263)]() == AdPlatformType[_0x35a349(0x25b)] || YYGGames[_0x35a349(0x263)]() == AdPlatformType[_0x35a349(0x25c)]) {
                let _0x502f23 = new Laya[(_0x35a349(0x26d))]();
                return _0x502f23[_0x35a349(0x296)] = function () {
                }, _0x502f23;
            }
            if (!this[_0x35a349(0x2bc)]) {
                this[_0x35a349(0x2bc)] = new Laya[(_0x35a349(0x24c))](), this[_0x35a349(0x2bc)][_0x35a349(0x293)] = '_scrollList', this[_0x35a349(0x2bc)][_0x35a349(0x24e)] = _0x35a349(0x29b), this['_scrollList'][_0x35a349(0x2d4)] = '30,30,30,30', this['_scrollList']['size'](0x384, 0xbe), this[_0x35a349(0x2bc)][_0x35a349(0x250)] = 0x30d3f, this[_0x35a349(0x2bc)][_0x35a349(0x2d7)] = 0x0, this[_0x35a349(0x2bc)][_0x35a349(0x2d9)] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x2c8ca3 extends Laya[_0x35a349(0x26d)] {
                    constructor() {
                        const _0x3083a8 = _0x35a349;
                        super(), this['centerY'] = 0x0, this[_0x3083a8(0x292)] = new Laya['Image'](), this['img'][_0x3083a8(0x293)] = _0x3083a8(0x292), this[_0x3083a8(0x292)][_0x3083a8(0x2d0)] = this[_0x3083a8(0x292)]['anchorY'] = 0.5, this[_0x3083a8(0x294)](0xdc, 0xaa), this[_0x3083a8(0x292)]['size'](0xc8, 0x96), this['addChild'](this[_0x3083a8(0x292)]), this[_0x3083a8(0x2da)] = new Laya[(_0x3083a8(0x24c))](), this['imgMask'][_0x3083a8(0x2d4)] = '30,30,30,30', this[_0x3083a8(0x2da)][_0x3083a8(0x293)] = 'imgMask', this[_0x3083a8(0x2da)][_0x3083a8(0x2d0)] = this[_0x3083a8(0x2da)]['anchorY'] = 0.5, this[_0x3083a8(0x2da)][_0x3083a8(0x24e)] = _0x3083a8(0x2c4), this[_0x3083a8(0x2da)][_0x3083a8(0x294)](0xc8, 0x96), this[_0x3083a8(0x292)][_0x3083a8(0x2a1)] = this[_0x3083a8(0x2da)], this[_0x3083a8(0x292)][_0x3083a8(0x2d6)](this['width'] / 0x2, this['height'] / 0x2), this[_0x3083a8(0x2da)][_0x3083a8(0x2d6)](this[_0x3083a8(0x292)]['width'] / 0x2, this[_0x3083a8(0x292)][_0x3083a8(0x285)] / 0x2);
                    }
                }
                let _0x1dc1b3 = new Laya['List']();
                _0x1dc1b3['hScrollBarSkin'] = '\x20', _0x1dc1b3[_0x35a349(0x293)] = 'listAd', _0x1dc1b3[_0x35a349(0x2d0)] = _0x1dc1b3[_0x35a349(0x2d1)] = 0.5, _0x1dc1b3[_0x35a349(0x294)](0x370, 0xaa), _0x1dc1b3[_0x35a349(0x2a8)]['mouseWheelEnable'] = ![], _0x1dc1b3['scrollBar'][_0x35a349(0x2aa)] = ![], _0x1dc1b3['scrollBar'][_0x35a349(0x2ab)] = ![], _0x1dc1b3['itemRender'] = _0x2c8ca3, _0x1dc1b3['renderHandler'] = new Laya[(_0x35a349(0x258))](this, this[_0x35a349(0x2db)]), this[_0x35a349(0x2bc)][_0x35a349(0x265)](_0x1dc1b3), _0x1dc1b3[_0x35a349(0x2d6)](this[_0x35a349(0x2bc)][_0x35a349(0x284)] / 0x2, this[_0x35a349(0x2bc)]['height'] / 0x2);
                let _0x494ec8 = _0x406c46[_0x35a349(0x21c)]()[_0x35a349(0x246)]();
                if (!_0x494ec8[_0x35a349(0x1fb)])
                    return;
                let _0x5bf7a5 = JSON[_0x35a349(0x1dd)](JSON['stringify'](_0x494ec8));
                _0x5bf7a5 = _0x5bf7a5[_0x35a349(0x2dc)](_0x5bf7a5['slice'](0x0, 0x4)), _0x1dc1b3[_0x35a349(0x2b5)] = _0x5bf7a5, Laya['timer'][_0x35a349(0x2ad)](0x1, this, this[_0x35a349(0x2ae)]), Laya[_0x35a349(0x1d0)][_0x35a349(0x2dd)](0x64, this, () => {
                    const _0x42063b = _0x35a349;
                    _0x1dc1b3[_0x42063b(0x2de)]();
                }), this[_0x35a349(0x2bc)][_0x35a349(0x2af)] = ![], this['_scrollList'][_0x35a349(0x296)] = this[_0x35a349(0x296)][_0x35a349(0x1bf)](this[_0x35a349(0x2bc)]);
            }
            return this['_scrollList'];
        }
        [_0x1d422a(0x2db)](_0x1d9637, _0x28ef94) {
            const _0x1dd090 = _0x1d422a;
            let _0x6a260e = _0x1d9637['dataSource'], _0x4bd412 = _0x1d9637[_0x1dd090(0x283)]('img'), _0x32ddf5 = _0x4bd412['mask'];
            _0x4bd412[_0x1dd090(0x24e)] = _0x6a260e[_0x1dd090(0x29f)];
            this[_0x1dd090(0x2bc)][_0x1dd090(0x2d9)][0x3] && (_0x1d9637[_0x1dd090(0x294)](0xdc, 0xaa), _0x1d9637[_0x1dd090(0x292)][_0x1dd090(0x294)](0xc8, 0x96), _0x32ddf5[_0x1dd090(0x294)](0xc8, 0x96), _0x1d9637['scale'](0x1, 0x1), _0x1d9637['scale'](0x1, 0x1), _0x32ddf5['scale'](0x1, 0x1));
            _0x1d9637[_0x1dd090(0x2b0)](), _0x4bd412[_0x1dd090(0x2b0)](), _0x1d9637['on'](Laya[_0x1dd090(0x266)][_0x1dd090(0x2b1)], _0x1d9637, () => {
                const _0x55cdfc = _0x1dd090;
                _0x1d9637[_0x55cdfc(0x250)] = 0x64;
            }), _0x1d9637['on'](Laya['Event'][_0x1dd090(0x2b2)], _0x1d9637, () => {
                const _0x31cdb1 = _0x1dd090;
                _0x1d9637[_0x31cdb1(0x250)] = _0x28ef94;
            }), _0x4bd412['on'](Laya[_0x1dd090(0x266)][_0x1dd090(0x2b1)], _0x1d9637, () => {
                const _0xef522b = _0x1dd090;
                _0x4bd412[_0xef522b(0x1cb)](_0x4bd412[_0xef522b(0x2df)] + 0.1, _0x4bd412[_0xef522b(0x2e0)] + 0.1), this[_0xef522b(0x2b7)]();
            }), _0x4bd412['on'](Laya['Event'][_0x1dd090(0x2b2)], _0x1d9637, () => {
                const _0x176ef4 = _0x1dd090;
                _0x4bd412['scale'](_0x4bd412[_0x176ef4(0x2df)] - 0.1, _0x4bd412[_0x176ef4(0x2e0)] - 0.1), Laya[_0x176ef4(0x1d0)][_0x176ef4(0x2ad)](0x1, this, this[_0x176ef4(0x2ae)]);
            }), _0x4bd412['on'](Laya['Event'][_0x1dd090(0x25d)], _0x1d9637, _0x2140c5 => {
                const _0x266f8a = _0x1dd090;
                _0x2140c5[_0x266f8a(0x269)](), _0x406c46[_0x266f8a(0x21c)]()[_0x266f8a(0x222)](_0x266f8a(0x2b3), _0x266f8a(0x2b4), _0x6a260e['id']);
            });
            let _0x1b54b0 = 0xc8;
            this['_scrollList'][_0x1dd090(0x2d9)][0x0] / 0xc8 > this[_0x1dd090(0x2bc)][_0x1dd090(0x2d9)][0x1] / 0x96 ? _0x1b54b0 = this[_0x1dd090(0x2bc)]['sizeArr'][0x0] / 0xc8 : _0x1b54b0 = this[_0x1dd090(0x2bc)][_0x1dd090(0x2d9)][0x1] / 0x96;
            let _0x361821 = 0xc8, _0x1844fd = 0xc8 * this['_scrollList'][_0x1dd090(0x2d9)][0x1] / this[_0x1dd090(0x2bc)][_0x1dd090(0x2d9)][0x0];
            _0x1d9637[_0x1dd090(0x294)](_0x361821 + 0x14, _0x1844fd + 0x14), _0x32ddf5['size'](_0x361821, _0x1844fd), !this[_0x1dd090(0x2bc)][_0x1dd090(0x2d9)][0x2] ? _0x1d9637[_0x1dd090(0x292)][_0x1dd090(0x294)](_0x361821, _0x1844fd) : (leftAd[_0x1dd090(0x294)](0xc8 * _0x1b54b0, 0x96 * _0x1b54b0), rightAd[_0x1dd090(0x294)](0xc8 * _0x1b54b0, 0x96 * _0x1b54b0)), _0x4bd412[_0x1dd090(0x2d6)](_0x1d9637['width'] / 0x2, _0x1d9637['height'] / 0x2), _0x32ddf5['pos'](_0x4bd412['width'] / 0x2, _0x4bd412['height'] / 0x2);
        }
        [_0x1d422a(0x2b7)]() {
            const _0x4804cc = _0x1d422a;
            Laya['timer']['clearAll'](this, this[_0x4804cc(0x2ae)]);
        }
        ['loopList']() {
            const _0x14dbdb = _0x1d422a;
            if (!this['_scrollList']) {
                this[_0x14dbdb(0x2b7)]();
                return;
            }
            let _0x67068b = this[_0x14dbdb(0x2bc)]['getChildByName']('listAd');
            _0x67068b[_0x14dbdb(0x2a8)][_0x14dbdb(0x2b6)] += 0x1, _0x67068b[_0x14dbdb(0x2a8)][_0x14dbdb(0x2b6)] >= _0x67068b[_0x14dbdb(0x2a8)][_0x14dbdb(0x2e1)] && (_0x67068b[_0x14dbdb(0x2a8)][_0x14dbdb(0x2b6)] = 0x0);
        }
        ['visibleChangeFun'](_0x143987) {
            const _0x9ffc5 = _0x1d422a;
            if (_0x143987[_0x9ffc5(0x293)] == _0x9ffc5(0x2cf)) {
                let _0x11d592 = _0x143987[_0x9ffc5(0x283)](_0x9ffc5(0x2d3)), _0x9945e7 = _0x143987[_0x9ffc5(0x283)](_0x9ffc5(0x2d8)), _0x4fb30e = _0x406c46[_0x9ffc5(0x21c)]()[_0x9ffc5(0x246)]();
                if (!_0x4fb30e[_0x9ffc5(0x1fb)])
                    return;
                let _0x566899 = JSON[_0x9ffc5(0x1dd)](JSON[_0x9ffc5(0x228)](_0x4fb30e));
                _0x11d592[_0x9ffc5(0x2b0)](), _0x9945e7[_0x9ffc5(0x2b0)](), _0x11d592[_0x9ffc5(0x283)]('leftAd')[_0x9ffc5(0x24e)] = _0x566899[0x0][_0x9ffc5(0x29f)], _0x9945e7[_0x9ffc5(0x283)](_0x9ffc5(0x2e2))[_0x9ffc5(0x24e)] = _0x566899[0x1][_0x9ffc5(0x29f)], _0x11d592['on'](Laya['Event'][_0x9ffc5(0x25d)], _0x143987, _0x25bf04 => {
                    const _0x59d5c7 = _0x9ffc5;
                    _0x25bf04[_0x59d5c7(0x269)](), _0x406c46[_0x59d5c7(0x21c)]()[_0x59d5c7(0x222)](_0x59d5c7(0x2b3), _0x59d5c7(0x2b4), _0x566899[0x0]['id']);
                }), _0x9945e7['on'](Laya[_0x9ffc5(0x266)]['MOUSE_DOWN'], _0x143987, _0x199a0e => {
                    const _0x1192e1 = _0x9ffc5;
                    _0x199a0e[_0x1192e1(0x269)](), _0x406c46[_0x1192e1(0x21c)]()[_0x1192e1(0x222)](_0x1192e1(0x2b3), _0x1192e1(0x2b4), _0x566899[0x1]['id']);
                });
            }
        }
        [_0x1d422a(0x2be)](_0x4d0984) {
            const _0x155784 = _0x1d422a;
            if (this[_0x155784(0x293)] == _0x155784(0x2cf)) {
                let _0x5bd90c = this['getChildByName'](_0x155784(0x2d3)), _0xc69055 = this[_0x155784(0x283)]('rightAdBg');
                _0xc69055[_0x155784(0x2d6)](_0x5bd90c[_0x155784(0x284)] + _0x4d0984, 0x0), this[_0x155784(0x284)] = _0x5bd90c[_0x155784(0x284)] + _0xc69055[_0x155784(0x284)] + _0x4d0984, this['spaceXNum'] = _0x4d0984;
            }
        }
    }
}());
function _0x2038() {
    const _0x1db190 = [
        'Sprite,spr_tip,spr_tip',
        'spr_tip',
        'Rect',
        '#000000',
        'Rect(NoVideo)',
        'Label',
        'middle',
        'VIDEO',
        '#ffffff',
        'Label(NoVideo)',
        'No\x20Video\x20Available',
        'center',
        'ani1',
        'onEnable',
        'owner',
        'top',
        'bottom',
        'left',
        'getChildByName',
        'width',
        'height',
        'CLICK',
        'closePer',
        'json',
        'noVideoPer',
        'addComponent',
        'showNoVideo',
        'closeNoVideo',
        'Box,box_clickLayer',
        'box_clickLayer',
        'LOADING\x5cnPLEASE\x20WAIT…',
        'loadingPer',
        'closeLoading',
        'img',
        'name',
        'size',
        'itemRender',
        'setSize',
        'List,scrollAdList',
        'laya/pages/prefab/scrollList.prefab',
        'scrollAdList',
        'Image,img_ListBg',
        'di2.png',
        'img_ListBg',
        'Box(scrollList)',
        'Image,thumb',
        'thumb',
        '30,30,30,30',
        'mask',
        'scaleNum',
        'sizeTran',
        'renderHandler',
        'itemRenderFun',
        'imgArr',
        'clearRes',
        'scrollBar',
        'mouseWheelEnable',
        'mouseEnabled',
        'touchScrollEnable',
        'listArray',
        'frameLoop',
        'loopList',
        'visible',
        'offAll',
        'MOUSE_OVER',
        'MOUSE_OUT',
        'GAME',
        'MORE',
        'array',
        'value',
        'endAni',
        'Tween',
        'clearAll',
        'checkPoints',
        'onDisable',
        '_scrollList',
        'getComponent',
        'setSpaceX',
        '_box_adTwo',
        'laya/pages/prefab/box_adTwo.prefab',
        'img_ad0',
        'Image,img_adImg',
        'img_adImg',
        'di1.png',
        'Image,img_ad1',
        'img_ad1',
        'Image(box_adTwo)',
        'spaceNum',
        'img_ad0Ad',
        'img_ad1Ad',
        'img_ad0AdMask',
        'img_ad1AdMask',
        'platform',
        '_inst',
        '_box_adTwo0',
        'anchorX',
        'anchorY',
        'spaceXNum',
        'leftAdBg',
        'sizeGrid',
        'leftAd',
        'pos',
        'centerX',
        'rightAdBg',
        'sizeArr',
        'imgMask',
        'renderADHandler',
        'concat',
        'once',
        'refresh',
        'scaleX',
        'scaleY',
        'max',
        'rightAd',
        '3817jWZDsA',
        '120haWiwX',
        '57KSGOHH',
        '234448WInMDj',
        '20MbOuzP',
        '1600044lqzjWS',
        '1852102eEsROA',
        '32rtTxsg',
        '692244WCODGT',
        '70iCLvLB',
        '6538719tgjZBv',
        '12KeDryx',
        '8817185PCVNnR',
        'beEnabled',
        'isMuted',
        'bePauseSound',
        'tryToResumeIntervalId',
        'isVisibilityMuted',
        'adShowing',
        'init',
        'musicAudio',
        'document',
        'addEventListener',
        'mousedown',
        'tryToResumeAudioContext',
        'touchstart',
        'visibilitychange',
        'onVisibilitychange',
        'bind',
        'onstatechange',
        'soundAudio',
        'getContext',
        'onSoundStatechange',
        'musicVolume',
        'isFocusOn',
        'log',
        'Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser',
        'visibilityState',
        'hidden',
        'muted',
        'scale',
        'stage',
        'renderingEnabled',
        'pause',
        'physicsTimer',
        'timer',
        'updateTimer',
        'resume',
        'onDBInstanceMuted',
        'isSuspend',
        'removeEventListener',
        'onMusicStatechange',
        'bePauseMusic',
        'suspend',
        'pauseSound',
        'pauseMusic',
        'stopAllNoLoop',
        'stopAll',
        'parse',
        'playMusic',
        'stopSound',
        'stop',
        'playSound',
        'play',
        '_audioInstances',
        '_musicVolume',
        'webkitAudioContext',
        'context',
        'state',
        'suspended',
        'values',
        'instance',
        'source',
        'buffer',
        'loop',
        'currentTime',
        'disconnect',
        'onended',
        'setup',
        'has',
        'get',
        '_stopSound',
        '_music',
        'downloadArrayBuffer',
        'stopMusic',
        'gain',
        'playBuffer\x20error.\x20Exception:\x20',
        'load',
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
        'destination',
        'url',
        'set',
        'error',
        'Decode\x20error.',
        'open',
        'GET',
        'status',
        'response',
        'no\x20response',
        'onerror',
        'ontimeout',
        'onabort',
        'send',
        'canNavigateActive_',
        'screen_',
        'action_',
        'initialized_',
        'needStartUp',
        'initData',
        'getInstance',
        '_instance',
        'getElementById',
        'layaCanvas',
        'touchend',
        'onNavigate_',
        'navigate',
        'getStorageSync',
        'getItem',
        'setStorageSync',
        'LocalStorage',
        'setItem',
        'stringify',
        'to_',
        'onblur',
        'onfocus',
        'showInterstitial',
        'focus',
        'showReward',
        'prompt',
        'No\x20Available\x20Video',
        'WebAudioEngine',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'initList',
        'prompt_',
        'createElement',
        'div',
        'style',
        'cssText',
        'body',
        'appendChild',
        'designWidth',
        'designHeight',
        'innerHTML',
        'display',
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
        'yad',
        'skin',
        'yad0.png',
        'zOrder',
        'yadstartup',
        'showSplash',
        'createNoVideo',
        'createLoading',
        'then',
        'SoundManager',
        'loader',
        'Handler',
        'scrollList',
        'box_adTwo',
        'en_GAMEDISTRIBUTION',
        'en_XIAOMI',
        'MOUSE_DOWN',
        'showBanner',
        'hideBanner',
        'hideSplash',
        'cnf.json',
        'create',
        'getAdPlatformType',
        'removeSelf',
        'addChild',
        'Event',
        'puzzlegamestartup',
        'startup',
        'stopPropagation',
        'LOGO',
        'Prefab',
        'Script',
        'Box',
        'laya/pages/Prefab/NoVideo.prefab',
        'Box(NoVideo)',
        'Sprite'
    ];
    _0x2038 = function () {
        return _0x1db190;
    };
    return _0x2038();
}