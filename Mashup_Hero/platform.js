(function (_0x4d765f, _0x36d0f7) {
    const _0x20c094 = _0x5af8, _0x52b809 = _0x4d765f();
    while (!![]) {
        try {
            const _0x3da643 = -parseInt(_0x20c094(0x1a7)) / 0x1 * (parseInt(_0x20c094(0x1a8)) / 0x2) + -parseInt(_0x20c094(0x1a9)) / 0x3 * (parseInt(_0x20c094(0x1aa)) / 0x4) + parseInt(_0x20c094(0x1ab)) / 0x5 + parseInt(_0x20c094(0x1ac)) / 0x6 * (-parseInt(_0x20c094(0x1ad)) / 0x7) + -parseInt(_0x20c094(0x1ae)) / 0x8 * (parseInt(_0x20c094(0x1af)) / 0x9) + parseInt(_0x20c094(0x1b0)) / 0xa * (-parseInt(_0x20c094(0x1b1)) / 0xb) + parseInt(_0x20c094(0x1b2)) / 0xc;
            if (_0x3da643 === _0x36d0f7)
                break;
            else
                _0x52b809['push'](_0x52b809['shift']());
        } catch (_0x470f24) {
            _0x52b809['push'](_0x52b809['shift']());
        }
    }
}(_0x2454, 0xa0c1b), !function () {
    const _0x3cb5c0 = _0x5af8;
    class _0x1a4e8d {
        constructor() {
            const _0x11c4be = _0x5af8;
            this[_0x11c4be(0x1b3)] = ![], this[_0x11c4be(0x1b4)] = ![], this['bePauseSound'] = ![], this[_0x11c4be(0x1b5)] = ![], this['tryToResumeIntervalId'] = -0x1, this[_0x11c4be(0x1b6)] = ![], this[_0x11c4be(0x1b7)] = ![];
        }
        [_0x3cb5c0(0x1b8)]() {
            return new Promise((_0x475d20, _0x254b9e) => {
                const _0x513960 = _0x5af8;
                try {
                    this[_0x513960(0x1b9)] = new _0x4ad0b7(), this[_0x513960(0x1ba)] = new _0x4ad0b7(), window[_0x513960(0x1bb)]['addEventListener'](_0x513960(0x1bc), () => {
                        setTimeout(() => {
                            const _0x5b5442 = _0x5af8;
                            if (this[_0x5b5442(0x1b7)]) {
                            } else
                                this[_0x5b5442(0x1bd)]();
                        }, 0x64);
                    }, !![]), window[_0x513960(0x1bb)][_0x513960(0x1be)](_0x513960(0x1bf), () => {
                        setTimeout(() => {
                            const _0x43b2a7 = _0x5af8;
                            if (this['adShowing']) {
                            } else
                                this[_0x43b2a7(0x1bd)]();
                        }, 0x64);
                    }, !![]), window[_0x513960(0x1bb)][_0x513960(0x1be)](_0x513960(0x1c0), this[_0x513960(0x1c1)][_0x513960(0x1c2)](this)), this[_0x513960(0x1b9)][_0x513960(0x1c3)]()[_0x513960(0x1c4)] = this[_0x513960(0x1c5)][_0x513960(0x1c2)](this), this[_0x513960(0x1ba)][_0x513960(0x1c3)]()[_0x513960(0x1c4)] = this['onSoundStatechange'][_0x513960(0x1c2)](this), this[_0x513960(0x1b3)] = !![], this[_0x513960(0x1c6)] = 0x3c, this[_0x513960(0x1c7)] = ![], this['tryToResumeAudioContext'](), _0x475d20(!![]);
                } catch (_0x568b28) {
                    console[_0x513960(0x1c8)]('Web\x20Audio\x20API', _0x568b28), alert(_0x513960(0x1c9)), _0x475d20(![]);
                }
            });
        }
        ['onVisibilitychange']() {
            const _0x3aca59 = _0x3cb5c0;
            if (this['adShowing'])
                return;
            if (document['visibilityState'] == _0x3aca59(0x1ca))
                !this[_0x3aca59(0x1b4)] && (this[_0x3aca59(0x1b6)] = this[_0x3aca59(0x1cb)] = !![]), Laya[_0x3aca59(0x1cc)]['scale'] = 0x0, Laya[_0x3aca59(0x1cd)][_0x3aca59(0x1ce)] = ![], Laya[_0x3aca59(0x1cf)] && Laya['updateTimer'][_0x3aca59(0x1d0)](), Laya[_0x3aca59(0x1d1)] && Laya['physicsTimer'][_0x3aca59(0x1d0)]();
            else
                document[_0x3aca59(0x1d2)] == _0x3aca59(0x1d3) && (this[_0x3aca59(0x1b6)] && (this[_0x3aca59(0x1b6)] = this['muted'] = ![]), Laya[_0x3aca59(0x1cc)][_0x3aca59(0x1d4)] = 0x1, Laya[_0x3aca59(0x1cd)][_0x3aca59(0x1ce)] = !![], Laya['updateTimer'] && Laya[_0x3aca59(0x1cf)][_0x3aca59(0x1d5)](), Laya['physicsTimer'] && Laya[_0x3aca59(0x1d1)][_0x3aca59(0x1d5)]());
        }
        [_0x3cb5c0(0x1d6)]() {
        }
        ['tryToResumeAudioContext']() {
            const _0x22f724 = _0x3cb5c0;
            if (this['adShowing'])
                return;
            if (this['isMuted'])
                return;
            this['musicAudio'][_0x22f724(0x1d7)]() && !this[_0x22f724(0x1b5)] && this[_0x22f724(0x1b9)][_0x22f724(0x1d5)](), this[_0x22f724(0x1ba)][_0x22f724(0x1d7)]() && !this['bePauseSound'] && this[_0x22f724(0x1ba)][_0x22f724(0x1d5)](), (!this[_0x22f724(0x1b9)][_0x22f724(0x1d7)]() || !this[_0x22f724(0x1ba)]['isSuspend']()) && (window[_0x22f724(0x1bb)][_0x22f724(0x1d8)]('mousedown', this[_0x22f724(0x1bd)][_0x22f724(0x1c2)](this), !![]), window['document']['removeEventListener'](_0x22f724(0x1bf), this[_0x22f724(0x1bd)][_0x22f724(0x1c2)](this), !![]), clearInterval(this['tryToResumeIntervalId']), this['tryToResumeIntervalId'] = -0x1);
        }
        [_0x3cb5c0(0x1c5)]() {
            const _0x546be1 = _0x3cb5c0;
            this[_0x546be1(0x1b9)]['isSuspend']() && !this['isMuted'] && !this[_0x546be1(0x1b5)] && this[_0x546be1(0x1d9)] === -0x1 && (window[_0x546be1(0x1bb)]['addEventListener']('mousedown', this[_0x546be1(0x1bd)][_0x546be1(0x1c2)](this), !![]), window['document']['addEventListener'](_0x546be1(0x1bf), this[_0x546be1(0x1bd)][_0x546be1(0x1c2)](this), !![]), this[_0x546be1(0x1d9)] = setInterval(this[_0x546be1(0x1bd)][_0x546be1(0x1c2)](this), 0xc8));
        }
        [_0x3cb5c0(0x1da)]() {
            const _0x5760d4 = _0x3cb5c0;
            this[_0x5760d4(0x1ba)][_0x5760d4(0x1d7)]() && !this[_0x5760d4(0x1b4)] && !this[_0x5760d4(0x1db)] && this[_0x5760d4(0x1d9)] === -0x1 && (window[_0x5760d4(0x1bb)][_0x5760d4(0x1be)](_0x5760d4(0x1bc), this[_0x5760d4(0x1bd)][_0x5760d4(0x1c2)](this), !![]), window[_0x5760d4(0x1bb)]['addEventListener'](_0x5760d4(0x1bf), this[_0x5760d4(0x1bd)][_0x5760d4(0x1c2)](this), !![]), this[_0x5760d4(0x1d9)] = setInterval(this['tryToResumeAudioContext']['bind'](this), 0xc8));
        }
        set [_0x3cb5c0(0x1cb)](_0x5d03a7) {
            const _0x146995 = _0x3cb5c0;
            this['isMuted'] = _0x5d03a7, this['isMuted'] ? (this[_0x146995(0x1b9)][_0x146995(0x1dc)](), this[_0x146995(0x1ba)]['suspend']()) : this[_0x146995(0x1d9)] == -0x1 && (this[_0x146995(0x1d9)] = setInterval(this[_0x146995(0x1bd)][_0x146995(0x1c2)](this), 0xc8));
        }
        get [_0x3cb5c0(0x1cb)]() {
            const _0x52238a = _0x3cb5c0;
            return this[_0x52238a(0x1b4)];
        }
        set [_0x3cb5c0(0x1d0)](_0x1feba2) {
            const _0x20ab0b = _0x3cb5c0;
            this[_0x20ab0b(0x1dd)] = _0x1feba2, this[_0x20ab0b(0x1de)] = _0x1feba2, !_0x1feba2 && this[_0x20ab0b(0x1ba)][_0x20ab0b(0x1df)]();
        }
        get ['pause']() {
            return this['pauseSound'] || this['pauseMusic'];
        }
        set [_0x3cb5c0(0x1dd)](_0x522d95) {
            const _0x1abd9d = _0x3cb5c0;
            this[_0x1abd9d(0x1db)] = _0x522d95;
            if (this[_0x1abd9d(0x1db)])
                this[_0x1abd9d(0x1ba)][_0x1abd9d(0x1dc)]();
            else {
                if (this[_0x1abd9d(0x1b4)])
                    return;
                this['soundAudio'][_0x1abd9d(0x1d5)]();
            }
        }
        get [_0x3cb5c0(0x1dd)]() {
            const _0x446c3c = _0x3cb5c0;
            return this[_0x446c3c(0x1db)];
        }
        get [_0x3cb5c0(0x1de)]() {
            const _0x178b1a = _0x3cb5c0;
            return this[_0x178b1a(0x1b5)];
        }
        set ['pauseMusic'](_0x4ddbae) {
            const _0x1435b8 = _0x3cb5c0;
            this[_0x1435b8(0x1b5)] = _0x4ddbae;
            if (this['bePauseMusic'])
                this['musicAudio'][_0x1435b8(0x1dc)]();
            else {
                if (this[_0x1435b8(0x1b4)])
                    return;
                this[_0x1435b8(0x1b9)][_0x1435b8(0x1d5)]();
            }
        }
        [_0x3cb5c0(0x1e0)]() {
            const _0x4d99a7 = _0x3cb5c0;
            this['musicAudio']['stopAll'](), this[_0x4d99a7(0x1ba)][_0x4d99a7(0x1e0)]();
        }
        [_0x3cb5c0(0x1e1)](_0x294f64, _0x631396, _0x348b17) {
            const _0x5e3abe = _0x3cb5c0;
            this[_0x5e3abe(0x1ba)]['parse'](_0x294f64, _0x631396);
        }
        [_0x3cb5c0(0x1e2)](_0x185028) {
            const _0xf3708d = _0x3cb5c0;
            this[_0xf3708d(0x1b9)][_0xf3708d(0x1e0)](), this['musicAudio'][_0xf3708d(0x1e2)](_0x185028);
        }
        ['stopMusic']() {
            const _0x5cd313 = _0x3cb5c0;
            this[_0x5cd313(0x1b9)]['stopAll']();
        }
        [_0x3cb5c0(0x1e3)](_0x3f1f4f) {
            const _0x1e4e56 = _0x3cb5c0;
            this['soundAudio'][_0x1e4e56(0x1e4)](_0x3f1f4f);
        }
        set ['musicVolume'](_0x400fac) {
            const _0x536429 = _0x3cb5c0;
            this['musicAudio'][_0x536429(0x1c6)] = _0x400fac;
        }
        get [_0x3cb5c0(0x1c6)]() {
            const _0x469087 = _0x3cb5c0;
            return this[_0x469087(0x1b9)][_0x469087(0x1c6)];
        }
        [_0x3cb5c0(0x1e5)](_0x52864f, _0x5e9f90 = ![], _0x32a4b0 = ![]) {
            const _0xfcf8cd = _0x3cb5c0;
            if (!this['beEnabled'])
                return;
            this[_0xfcf8cd(0x1ba)][_0xfcf8cd(0x1e6)](_0x52864f, _0x5e9f90, _0x32a4b0);
        }
    }
    class _0x475f64 {
    }
    class _0x4ad0b7 {
        constructor() {
            const _0x25a2f3 = _0x3cb5c0;
            this[_0x25a2f3(0x1e7)] = 0x64, this[_0x25a2f3(0x1e8)] = new Map(), this[_0x25a2f3(0x1e9)] = 0x64, window[_0x25a2f3(0x1ea)] = window[_0x25a2f3(0x1ea)] || window[_0x25a2f3(0x1eb)], this[_0x25a2f3(0x1ec)] = new AudioContext();
        }
        [_0x3cb5c0(0x1c3)]() {
            const _0x5a34fd = _0x3cb5c0;
            return this[_0x5a34fd(0x1ec)];
        }
        ['isSuspend']() {
            const _0x5e646f = _0x3cb5c0;
            return this['context'][_0x5e646f(0x1ed)] === _0x5e646f(0x1ee);
        }
        ['suspend']() {
            const _0x5165ce = _0x3cb5c0;
            return this[_0x5165ce(0x1ec)][_0x5165ce(0x1dc)]();
        }
        ['resume']() {
            const _0x514aa1 = _0x3cb5c0;
            return this[_0x514aa1(0x1ec)][_0x514aa1(0x1d5)]();
        }
        ['stopAllNoLoop']() {
            const _0x3cef35 = _0x3cb5c0, _0x1a6235 = this[_0x3cef35(0x1e8)][_0x3cef35(0x1ef)]();
            for (const _0x4acde4 of _0x1a6235) {
                const _0x34f3e5 = _0x4acde4[_0x3cef35(0x1f0)];
                if (_0x34f3e5[_0x3cef35(0x1f1)][_0x3cef35(0x1f2)] && !_0x34f3e5[_0x3cef35(0x1f1)][_0x3cef35(0x1f3)]) {
                    try {
                        _0x34f3e5[_0x3cef35(0x1f1)]['stop'](this[_0x3cef35(0x1ec)][_0x3cef35(0x1f4)]);
                    } catch (_0x457da3) {
                        _0x34f3e5[_0x3cef35(0x1f1)][_0x3cef35(0x1f5)]();
                    }
                    _0x34f3e5[_0x3cef35(0x1f1)][_0x3cef35(0x1f6)] = function () {
                    }, _0x34f3e5[_0x3cef35(0x1f7)]();
                }
            }
        }
        [_0x3cb5c0(0x1e0)]() {
            const _0x336056 = _0x3cb5c0, _0x2ffd63 = this[_0x336056(0x1e8)][_0x336056(0x1ef)]();
            for (const _0x1a0d0e of _0x2ffd63) {
                const _0x3e1426 = _0x1a0d0e[_0x336056(0x1f0)];
                if (_0x3e1426[_0x336056(0x1f1)][_0x336056(0x1f2)]) {
                    try {
                        _0x3e1426['source'][_0x336056(0x1e4)](this[_0x336056(0x1ec)][_0x336056(0x1f4)]);
                    } catch (_0x2d9725) {
                        _0x3e1426['source']['disconnect']();
                    }
                    _0x3e1426['source']['onended'] = function () {
                    }, _0x3e1426['setup']();
                }
            }
        }
        [_0x3cb5c0(0x1e4)](_0x30d880) {
            const _0x4e8373 = _0x3cb5c0;
            if (this[_0x4e8373(0x1e8)][_0x4e8373(0x1f8)](_0x30d880)) {
                const _0x48b434 = this[_0x4e8373(0x1e8)][_0x4e8373(0x1f9)](_0x30d880);
                this[_0x4e8373(0x1fa)](_0x48b434);
            }
        }
        [_0x3cb5c0(0x1fa)](_0x23499c) {
            const _0x4b8862 = _0x3cb5c0, _0x11c52f = _0x23499c[_0x4b8862(0x1f0)];
            if (_0x11c52f[_0x4b8862(0x1f1)][_0x4b8862(0x1f2)]) {
                try {
                    _0x11c52f[_0x4b8862(0x1f1)]['stop'](this['context'][_0x4b8862(0x1f4)]);
                } catch (_0x1e81ef) {
                    _0x11c52f[_0x4b8862(0x1f1)][_0x4b8862(0x1f5)]();
                }
                _0x11c52f[_0x4b8862(0x1f1)][_0x4b8862(0x1f6)] = function () {
                }, _0x11c52f['setup']();
            }
        }
        [_0x3cb5c0(0x1e2)](_0x4b9394) {
            const _0x43edda = _0x3cb5c0;
            this[_0x43edda(0x1fb)] && this[_0x43edda(0x1fa)](this[_0x43edda(0x1fb)]), this[_0x43edda(0x1e8)][_0x43edda(0x1f8)](_0x4b9394) ? (this[_0x43edda(0x1fb)] = this[_0x43edda(0x1e8)][_0x43edda(0x1f9)](_0x4b9394), this[_0x43edda(0x1c6)] = this[_0x43edda(0x1e9)], this[_0x43edda(0x1e6)](_0x4b9394, !![])) : this[_0x43edda(0x1fc)](_0x4b9394, () => {
                const _0x52aa00 = _0x43edda;
                this[_0x52aa00(0x1e2)](_0x4b9394);
            });
        }
        ['stopMusic']() {
            const _0x1a7dc7 = _0x3cb5c0;
            this[_0x1a7dc7(0x1fb)] && this[_0x1a7dc7(0x1fa)](this[_0x1a7dc7(0x1fb)]);
        }
        set [_0x3cb5c0(0x1c6)](_0x1cc3ab) {
            const _0x36272f = _0x3cb5c0;
            this['_musicVolume'] = _0x1cc3ab, this[_0x36272f(0x1fb)] && (this['_music'][_0x36272f(0x1f0)]['gain'][_0x36272f(0x1fd)][_0x36272f(0x1fe)] = this[_0x36272f(0x1e9)] / 0x64);
        }
        get [_0x3cb5c0(0x1c6)]() {
            const _0x2fecdd = _0x3cb5c0;
            return this[_0x2fecdd(0x1e9)];
        }
        ['play'](_0xa93390, _0x4dd482 = ![], _0x148482 = ![]) {
            const _0x1dd56c = _0x3cb5c0;
            if (this['_audioInstances'][_0x1dd56c(0x1f8)](_0xa93390)) {
                const _0x56bf6d = this[_0x1dd56c(0x1e8)][_0x1dd56c(0x1f9)](_0xa93390), _0x4acc0b = _0x56bf6d['instance'];
                if (_0x148482 && !_0x4acc0b[_0x1dd56c(0x1ff)])
                    return;
                this[_0x1dd56c(0x1e4)](_0xa93390);
                if (_0x56bf6d['buffer'])
                    try {
                        if (window[_0x1dd56c(0x200)][_0x1dd56c(0x1d0)] && !_0x4dd482)
                            return;
                        _0x4acc0b['playBuffer'](this['context']['currentTime'], _0x56bf6d[_0x1dd56c(0x1f2)]), _0x4acc0b[_0x1dd56c(0x1f1)]['loop'] = _0x4dd482;
                    } catch (_0x4faaeb) {
                        console[_0x1dd56c(0x201)]('playBuffer\x20error.\x20Exception:\x20' + _0x4faaeb);
                    }
            } else
                this[_0x1dd56c(0x1fc)](_0xa93390, () => {
                    this['play'](_0xa93390, _0x4dd482);
                });
        }
        ['load'](_0x41c5dc, _0x14bf67) {
            const _0x14e759 = _0x3cb5c0;
            let _0x6b457e = _0x41c5dc[_0x14e759(0x202)], _0x1b9645 = 0x0;
            for (let _0x374741 = 0x0; _0x374741 < _0x41c5dc[_0x14e759(0x202)]; _0x374741++) {
                const _0x2c6ac9 = _0x41c5dc[_0x374741];
                this['downloadArrayBuffer'](_0x2c6ac9, () => {
                    _0x1b9645++, _0x1b9645 >= _0x6b457e && (_0x14bf67 && _0x14bf67());
                });
            }
        }
        [_0x3cb5c0(0x203)](_0x5982a2) {
            const _0x30b005 = _0x3cb5c0;
            if (this[_0x30b005(0x1e8)][_0x30b005(0x1f8)](_0x5982a2)) {
                const _0x380b8c = this['_audioInstances'][_0x30b005(0x1f9)](_0x5982a2);
                _0x380b8c[_0x30b005(0x1f0)][_0x30b005(0x204)] = !![];
            }
        }
        ['createSoundInstance']() {
            const _0x5c973e = _0x3cb5c0;
            let _0x15bfba = this[_0x5c973e(0x1ec)];
            const _0x36f8c2 = {
                'gain': _0x15bfba[_0x5c973e(0x205)](),
                'panner': _0x15bfba['createPanner'](),
                'threeD': ![],
                'ended': ![],
                'playBuffer': function (_0x5b87fe, _0x1feddd, _0x512602) {
                    const _0x2c1a73 = _0x5c973e;
                    this['source'][_0x2c1a73(0x1f2)] = _0x1feddd;
                    var _0x53bc81 = this;
                    this[_0x2c1a73(0x1ff)] = ![], this[_0x2c1a73(0x1f1)][_0x2c1a73(0x1f6)] = function () {
                        const _0xa713a3 = _0x2c1a73;
                        _0x53bc81[_0xa713a3(0x1f7)](), _0x53bc81[_0xa713a3(0x1ff)] = !![];
                    }, this[_0x2c1a73(0x1f1)]['start'](_0x5b87fe, _0x512602);
                },
                'setup': function () {
                    const _0x4bd055 = _0x5c973e;
                    this['source'] = _0x15bfba[_0x4bd055(0x206)](), this[_0x4bd055(0x207)]();
                },
                'setupPanning': function () {
                    const _0x2763c6 = _0x5c973e;
                    this[_0x2763c6(0x204)] ? (this['source'][_0x2763c6(0x1f5)](), this[_0x2763c6(0x1f1)]['connect'](this[_0x2763c6(0x208)]), this[_0x2763c6(0x208)]['connect'](this[_0x2763c6(0x1fd)])) : (this[_0x2763c6(0x208)][_0x2763c6(0x1f5)](), this[_0x2763c6(0x1f1)]['connect'](this[_0x2763c6(0x1fd)]));
                }
            };
            return _0x36f8c2[_0x5c973e(0x208)]['rolloffFactor'] = 0x0, _0x36f8c2[_0x5c973e(0x1fd)][_0x5c973e(0x209)](this[_0x5c973e(0x1ec)]['destination']), _0x36f8c2[_0x5c973e(0x1f7)](), _0x36f8c2;
        }
        ['parse'](_0x4148be, _0x53a70d, _0x817231) {
            const _0x590ba2 = _0x3cb5c0, _0x25bf02 = new _0x475f64();
            _0x25bf02[_0x590ba2(0x20a)] = _0x4148be, _0x25bf02['instance'] = this[_0x590ba2(0x20b)](), this['_audioInstances'][_0x590ba2(0x20c)](_0x4148be, _0x25bf02), this[_0x590ba2(0x1ec)][_0x590ba2(0x20d)](_0x53a70d, function (_0x29ac26) {
                _0x25bf02['buffer'] = _0x29ac26, _0x817231 && _0x817231();
            }, function (_0x5ed325) {
                const _0x113743 = _0x590ba2;
                _0x25bf02[_0x113743(0x201)] = !![], _0x817231 && _0x817231(), console[_0x113743(0x1c8)]('Decode\x20error.' + _0x25bf02[_0x113743(0x20a)]);
            });
        }
        [_0x3cb5c0(0x1fc)](_0x3fa42a, _0x403e90) {
            const _0x1e6bbd = _0x3cb5c0;
            if (this['_audioInstances'][_0x1e6bbd(0x1f8)](_0x3fa42a)) {
                _0x403e90 && _0x403e90();
                return;
            }
            const _0x1383f1 = this;
            var _0x32641b = new XMLHttpRequest();
            _0x32641b[_0x1e6bbd(0x20e)]('GET', _0x3fa42a, !![]), _0x32641b[_0x1e6bbd(0x20f)] = _0x1e6bbd(0x210), _0x32641b[_0x1e6bbd(0x211)] = function () {
                const _0x366e0a = _0x1e6bbd;
                if (_0x32641b[_0x366e0a(0x212)] === 0xc8 || _0x32641b[_0x366e0a(0x212)] === 0x0)
                    _0x1383f1['parse'](_0x3fa42a, _0x32641b[_0x366e0a(0x213)], _0x403e90);
                else
                    throw 'no\x20response';
            }, _0x32641b[_0x1e6bbd(0x214)] = function () {
                const _0x2957d4 = _0x1e6bbd;
                _0x403e90 && _0x403e90();
                throw _0x2957d4(0x215);
            }, _0x32641b[_0x1e6bbd(0x216)] = function () {
                _0x403e90 && _0x403e90();
            }, _0x32641b['onabort'] = function () {
                _0x403e90 && _0x403e90();
            }, _0x32641b[_0x1e6bbd(0x217)](null);
        }
    }
    const _0x1d1003 = window[_0x3cb5c0(0x200)] = new _0x1a4e8d();
    class _0x1871ac {
        constructor() {
            const _0x1baa09 = _0x3cb5c0;
            this[_0x1baa09(0x218)] = ![], this[_0x1baa09(0x219)] = '', this['action_'] = '', this[_0x1baa09(0x21a)] = '', this['prompt_'] = null, this[_0x1baa09(0x21b)] = ![], this[_0x1baa09(0x21c)] = !![], this[_0x1baa09(0x21d)]();
        }
        static [_0x3cb5c0(0x21e)]() {
            const _0x2d86d9 = _0x3cb5c0;
            return !this['_instance'] && (this[_0x2d86d9(0x21f)] = new _0x1871ac()), this[_0x2d86d9(0x21f)];
        }
        [_0x3cb5c0(0x21d)]() {
            const _0xe07d77 = _0x3cb5c0;
            let _0x3adc94 = document[_0xe07d77(0x220)](_0xe07d77(0x221));
            _0x3adc94 && (_0x3adc94[_0xe07d77(0x1be)](_0xe07d77(0x222), this['onNavigate_'][_0xe07d77(0x1c2)](this)), _0x3adc94[_0xe07d77(0x1be)](_0xe07d77(0x223), this[_0xe07d77(0x224)][_0xe07d77(0x1c2)](this)));
        }
        [_0x3cb5c0(0x224)]() {
            const _0x27d8f6 = _0x3cb5c0;
            this[_0x27d8f6(0x218)] && YYGGames[_0x27d8f6(0x225)](this[_0x27d8f6(0x219)], this[_0x27d8f6(0x226)], this[_0x27d8f6(0x21a)]), this[_0x27d8f6(0x218)] = ![];
        }
        [_0x3cb5c0(0x227)](_0x19e94e) {
            const _0x186b91 = _0x3cb5c0;
            let _0x2ecb07 = null;
            try {
                let _0x343ce2 = Laya['LocalStorage'][_0x186b91(0x228)](_0x19e94e);
                _0x2ecb07 = JSON[_0x186b91(0x1e1)](_0x343ce2);
            } catch (_0x4873c6) {
            }
            return _0x2ecb07;
        }
        [_0x3cb5c0(0x229)](_0x1ca81d, _0x17dc3b) {
            const _0x3c18cf = _0x3cb5c0;
            return Laya[_0x3c18cf(0x22a)]['setItem'](_0x1ca81d, JSON['stringify'](_0x17dc3b));
        }
        [_0x3cb5c0(0x225)](_0x4c6ce1, _0x533d27, _0x1e10f5) {
            const _0x3abf3e = _0x3cb5c0;
            this[_0x3abf3e(0x218)] === ![] && (this[_0x3abf3e(0x219)] = _0x4c6ce1, this[_0x3abf3e(0x226)] = _0x533d27, this['to_'] = _0x1e10f5, this[_0x3abf3e(0x218)] = !![]);
        }
        [_0x3cb5c0(0x22b)]() {
            setTimeout(() => {
                _0x1d1003['muted'] = !![];
            }, 0x64);
        }
        ['onfocus']() {
            setTimeout(() => {
                const _0xa4820b = _0x5af8;
                _0x1d1003[_0xa4820b(0x1cb)] = ![];
            }, 0x64);
        }
        ['showInterstitial'](_0x3bf87f) {
            const _0x4d7645 = _0x3cb5c0;
            console.log("请求插屏广告");

            HUHU_showInterstitialAd();
            const _0x2949fa = _0x4d7645;
            window['focus'](), this[_0x2949fa(0x22d)](), window[_0x2949fa(0x200)][_0x2949fa(0x1b7)] = ![], Laya[_0x2949fa(0x1cc)][_0x2949fa(0x1d4)] = 0x1, Laya['stage'][_0x2949fa(0x1ce)] = !![], Laya[_0x2949fa(0x1cf)] && Laya[_0x2949fa(0x1cf)]['resume'](), Laya[_0x2949fa(0x1d1)] && Laya[_0x2949fa(0x1d1)]['resume'](), _0x3bf87f && _0x3bf87f();
            return;
            // YYGGames[_0x4d7645(0x22c)]({
            //     'beforeShowAd': () => {
            //         const _0x4836bb = _0x4d7645;
            //         window['WebAudioEngine']['adShowing'] = !![], this['onblur'](), Laya[_0x4836bb(0x1cc)][_0x4836bb(0x1d4)] = 0x0, Laya[_0x4836bb(0x1cd)]['renderingEnabled'] = ![], Laya[_0x4836bb(0x1cf)] && Laya[_0x4836bb(0x1cf)]['pause'](), Laya[_0x4836bb(0x1d1)] && Laya[_0x4836bb(0x1d1)][_0x4836bb(0x1d0)]();
            //     },
            //     'afterShowAd': () => {
            //         const _0x2949fa = _0x4d7645;
            //         window['focus'](), this[_0x2949fa(0x22d)](), window[_0x2949fa(0x200)][_0x2949fa(0x1b7)] = ![], Laya[_0x2949fa(0x1cc)][_0x2949fa(0x1d4)] = 0x1, Laya['stage'][_0x2949fa(0x1ce)] = !![], Laya[_0x2949fa(0x1cf)] && Laya[_0x2949fa(0x1cf)]['resume'](), Laya[_0x2949fa(0x1d1)] && Laya[_0x2949fa(0x1d1)]['resume'](), _0x3bf87f && _0x3bf87f();
            //     }
            // });
        }
        [_0x3cb5c0(0x22e)](_0x3b130b, _0x29005f, _0x1bd7e1) {
            const _0x1c19ca = _0x3cb5c0;
            console.log("请求激励广告");
            HUHU_showRewardedVideoAd(
                () => {
                    // 用户观看广告完成，继续游戏
                    const _0x384f14 = _0x1c19ca;
                    window['focus'](), this['onfocus'](), window['WebAudioEngine']['adShowing'] = ![], Laya[_0x384f14(0x1cc)]['scale'] = 0x1, Laya['stage'][_0x384f14(0x1ce)] = !![], Laya[_0x384f14(0x1cf)] && Laya[_0x384f14(0x1cf)][_0x384f14(0x1d5)](), Laya[_0x384f14(0x1d1)] && Laya[_0x384f14(0x1d1)]['resume']();
                    _0x3b130b && _0x3b130b(), _0x1bd7e1 && _0x1bd7e1(), _0x1bd7e1 = null, _0x3b130b = null;
                },
                () => {
                  // 广告请求失败或者用户跳过广告
                  const _0x389299 = _0x1c19ca;
                  _0x29005f && (_0x29005f(), _0x1bd7e1 && _0x1bd7e1(), _0x1bd7e1 = null, _0x29005f = null), this['prompt'](_0x389299(0x232));
                }
            );
            return;
            // if (!YYGGames[_0x1c19ca(0x22f)]()) {
            //     this[_0x1c19ca(0x230)](_0x1c19ca(0x231)), _0x1bd7e1 && _0x1bd7e1();
            //     return;
            // }
            // YYGGames[_0x1c19ca(0x22e)]({
            //     'beforeShowAd': () => {
            //         const _0x1c0cf2 = _0x1c19ca;
            //         window[_0x1c0cf2(0x200)][_0x1c0cf2(0x1b7)] = !![], this[_0x1c0cf2(0x22b)](), Laya[_0x1c0cf2(0x1cc)]['scale'] = 0x0, Laya[_0x1c0cf2(0x1cd)]['renderingEnabled'] = ![], Laya['updateTimer'] && Laya[_0x1c0cf2(0x1cf)][_0x1c0cf2(0x1d0)](), Laya[_0x1c0cf2(0x1d1)] && Laya['physicsTimer'][_0x1c0cf2(0x1d0)]();
            //     },
            //     'afterShowAd': () => {
            //         const _0x384f14 = _0x1c19ca;
            //         window['focus'](), this['onfocus'](), window['WebAudioEngine']['adShowing'] = ![], Laya[_0x384f14(0x1cc)]['scale'] = 0x1, Laya['stage'][_0x384f14(0x1ce)] = !![], Laya[_0x384f14(0x1cf)] && Laya[_0x384f14(0x1cf)][_0x384f14(0x1d5)](), Laya[_0x384f14(0x1d1)] && Laya[_0x384f14(0x1d1)]['resume']();
            //     },
            //     'rewardComplete': () => {
            //         _0x3b130b && _0x3b130b(), _0x1bd7e1 && _0x1bd7e1(), _0x1bd7e1 = null, _0x3b130b = null;
            //     },
            //     'rewardDismissed': () => {
            //         const _0x389299 = _0x1c19ca;
            //         _0x29005f && (_0x29005f(), _0x1bd7e1 && _0x1bd7e1(), _0x1bd7e1 = null, _0x29005f = null), this['prompt'](_0x389299(0x232));
            //     }
            // });
        }
        [_0x3cb5c0(0x233)](_0x3ce20d) {
        }
        ['prompt'](_0x483fa7, _0x4b18f5) {
            const _0x21b672 = _0x3cb5c0;
            !this[_0x21b672(0x234)] && (this[_0x21b672(0x234)] = document[_0x21b672(0x235)](_0x21b672(0x236)), this['prompt_']['style']['cssText'] = _0x21b672(0x237), document[_0x21b672(0x238)][_0x21b672(0x239)](this[_0x21b672(0x234)]));
            const _0x2e53e9 = Laya['stage']['designWidth'], _0x5babe1 = Laya['stage'][_0x21b672(0x23a)];
            var _0x58e1b3 = window[_0x21b672(0x23b)], _0x3da651 = window[_0x21b672(0x23c)], _0x376535, _0x1ea02d;
            _0x58e1b3 / _0x3da651 > _0x2e53e9 / _0x5babe1 ? (_0x376535 = _0x3da651, _0x1ea02d = _0x376535 * _0x2e53e9 / _0x5babe1) : (_0x1ea02d = _0x58e1b3, _0x376535 = _0x1ea02d * _0x5babe1 / _0x2e53e9), this[_0x21b672(0x234)][_0x21b672(0x23d)]['width'] = _0x1ea02d - 0x32 + 'px', this['prompt_']['innerHTML'] = _0x483fa7, _0x4b18f5 = isNaN(_0x4b18f5) ? 0x7d0 : _0x4b18f5, this[_0x21b672(0x234)][_0x21b672(0x23d)][_0x21b672(0x23e)] = _0x21b672(0x23f), this[_0x21b672(0x234)][_0x21b672(0x23d)][_0x21b672(0x240)] = '1', setTimeout(function () {
                const _0x259c3d = _0x21b672;
                var _0x5afdc6 = 0.5;
                this[_0x259c3d(0x234)][_0x259c3d(0x23d)][_0x259c3d(0x241)] = '-webkit-transform\x20' + _0x5afdc6 + _0x259c3d(0x242) + _0x5afdc6 + _0x259c3d(0x243), this[_0x259c3d(0x234)]['style'][_0x259c3d(0x240)] = '0', this[_0x259c3d(0x234)]['style']['display'] = 'none';
            }[_0x21b672(0x1c2)](this), _0x4b18f5);
        }
        [_0x3cb5c0(0x244)]() {
            return  [];
            // const _0x2085f5 = _0x3cb5c0;
            // let _0x3c55e2 = YYGGames[_0x2085f5(0x245)] || [], _0x36faf9 = _0x3c55e2['slice']();
            // for (let _0x2d4ddf = 0x0, _0x5a524f = _0x36faf9[_0x2085f5(0x202)]; _0x2d4ddf < _0x5a524f; _0x2d4ddf++) {
            //     const _0xfdc01a = Math['floor'](Math[_0x2085f5(0x246)]() * (_0x2d4ddf + 0x1)), _0x202554 = _0x36faf9[_0xfdc01a];
            //     _0x36faf9[_0xfdc01a] = _0x36faf9[_0x2d4ddf], _0x36faf9[_0x2d4ddf] = _0x202554;
            // }
            // return _0x36faf9;
        }
        [_0x3cb5c0(0x247)]() {
            const _0x24197a = _0x3cb5c0;
            if (!Laya || !Laya[_0x24197a(0x248)])
                return null;
            if (!window[_0x24197a(0x249)]) {
                const _0x58de5d = new Laya[(_0x24197a(0x248))]();
                _0x58de5d['skin'] = _0x24197a(0x24a), _0x58de5d[_0x24197a(0x24b)] = 0x30d40, window[_0x24197a(0x249)] = _0x58de5d;
            }
            return window[_0x24197a(0x249)];
        }
        [_0x3cb5c0(0x24c)](_0x14c777, _0x19a51f) {
            const _0x391cfa = _0x3cb5c0;
            !this[_0x391cfa(0x21c)] && (_0x19a51f && _0x19a51f());
            if (this[_0x391cfa(0x21b)])
                return;
            _0x1871ac[_0x391cfa(0x21e)]()[_0x391cfa(0x24d)](), _0x1871ac[_0x391cfa(0x21e)]()[_0x391cfa(0x247)](), this[_0x391cfa(0x24e)](), this[_0x391cfa(0x24f)](), window[_0x391cfa(0x200)][_0x391cfa(0x1b8)]()[_0x391cfa(0x250)](() => {
                const _0x402c60 = _0x391cfa;
                Laya[_0x402c60(0x251)][_0x402c60(0x1e2)] = function (_0x12289b) {
                    const _0xe45aa3 = _0x402c60;
                    window[_0xe45aa3(0x200)] && window['WebAudioEngine'][_0xe45aa3(0x1e2)](_0x12289b);
                }, Laya[_0x402c60(0x251)][_0x402c60(0x1e5)] = function (_0x3c63a7, _0x5e6c32 = ![]) {
                    const _0x355fe0 = _0x402c60;
                    window['WebAudioEngine'] && window[_0x355fe0(0x200)]['playSound'](_0x3c63a7);
                }, Laya[_0x402c60(0x251)][_0x402c60(0x252)] = function () {
                    const _0x4130f4 = _0x402c60;
                    window['WebAudioEngine'] && window[_0x4130f4(0x200)][_0x4130f4(0x252)]();
                }, Laya['SoundManager'][_0x402c60(0x1e3)] = function (_0x35117f) {
                    const _0x797d11 = _0x402c60;
                    window[_0x797d11(0x200)] && window[_0x797d11(0x200)][_0x797d11(0x1e3)](_0x35117f);
                };
            }), this[_0x391cfa(0x21b)] = !![], Laya[_0x391cfa(0x253)]['load'](_0x391cfa(0x254), Laya[_0x391cfa(0x255)][_0x391cfa(0x256)](this, _0x16a37 => {
                const _0x36e56f = _0x391cfa;
                const _0xc5b38 = _0x36e56f;
                window[_0xc5b38(0x259)] = this[_0xc5b38(0x259)](), window[_0xc5b38(0x25a)] = this[_0xc5b38(0x25a)]();
                this[_0xc5b38(0x21c)] = ![], _0x19a51f && _0x19a51f();
                // YYGGames[_0x36e56f(0x257)]({
                //     'appName': _0x14c777,
                //     'config': _0x16a37,
                //     'complete': () => {
                //         const _0xc5b38 = _0x36e56f, _0x4a5a03 = YYGGames[_0xc5b38(0x258)]();
                //         window[_0xc5b38(0x259)] = this[_0xc5b38(0x259)](), window[_0xc5b38(0x25a)] = this[_0xc5b38(0x25a)]();
                //         switch (_0x4a5a03) {
                //         case AdPlatformType['en_GAMEDISTRIBUTION']:
                //         case AdPlatformType[_0xc5b38(0x25b)]:
                //             window[_0xc5b38(0x249)] && (window[_0xc5b38(0x249)]['scale'](0x0, 0x0), window[_0xc5b38(0x249)][_0xc5b38(0x25c)]());
                //             break;
                //         default:
                //             window['yad'] && Laya[_0xc5b38(0x1cd)][_0xc5b38(0x25d)](window[_0xc5b38(0x249)]), window[_0xc5b38(0x249)]['on'](Laya[_0xc5b38(0x25e)][_0xc5b38(0x25f)], window[_0xc5b38(0x249)], _0x4e4b6d => {
                //                 const _0x44c4ce = _0xc5b38;
                //                 _0x4e4b6d[_0x44c4ce(0x260)](), _0x1871ac[_0x44c4ce(0x21e)]()[_0x44c4ce(0x225)](_0x44c4ce(0x261), _0x44c4ce(0x262));
                //             });
                //             break;
                //         }
                //         this[_0xc5b38(0x21c)] = ![], _0x19a51f && _0x19a51f();
                //     }
                // });
            }));
        }
        [_0x3cb5c0(0x263)](_0x1f9f91) {
            // const _0x1de203 = _0x3cb5c0;
            // _0x1f9f91 ? YYGGames[_0x1de203(0x263)](_0x1f9f91) : YYGGames['showBanner']();
        }
        [_0x3cb5c0(0x264)]() {
            // YYGGames['hideBanner']();
        }
        ['showSplash'](_0x1d04ce) {
            // const _0x249f61 = _0x3cb5c0;
            // _0x1d04ce ? YYGGames[_0x249f61(0x24d)](_0x1d04ce) : YYGGames[_0x249f61(0x24d)]();
        }
        [_0x3cb5c0(0x265)]() {
            // const _0x594264 = _0x3cb5c0;
            // YYGGames[_0x594264(0x265)]();
        }
        [_0x3cb5c0(0x266)](_0x3d3bfe, _0x234d6c) {
            const _0x459f34 = _0x3cb5c0;
            !this[_0x459f34(0x21c)] && (_0x234d6c && _0x234d6c());
            if (this[_0x459f34(0x21b)])
                return;
            _0x1871ac['getInstance']()[_0x459f34(0x24d)](), _0x1871ac[_0x459f34(0x21e)]()[_0x459f34(0x247)](), this['createNoVideo'](), this['createLoading'](), window['WebAudioEngine'][_0x459f34(0x1b8)]()[_0x459f34(0x250)](() => {
                const _0x37969f = _0x459f34;
                Laya[_0x37969f(0x251)]['playMusic'] = function (_0x11eb77) {
                    const _0x236d1c = _0x37969f;
                    window[_0x236d1c(0x200)] && window[_0x236d1c(0x200)][_0x236d1c(0x1e2)](_0x11eb77);
                }, Laya[_0x37969f(0x251)][_0x37969f(0x1e5)] = function (_0x57ea93, _0x4ab6ca = ![]) {
                    const _0x181dca = _0x37969f;
                    window[_0x181dca(0x200)] && window[_0x181dca(0x200)][_0x181dca(0x1e5)](_0x57ea93);
                }, Laya[_0x37969f(0x251)][_0x37969f(0x252)] = function () {
                    const _0x42702a = _0x37969f;
                    window['WebAudioEngine'] && window[_0x42702a(0x200)]['stopMusic']();
                }, Laya[_0x37969f(0x251)][_0x37969f(0x1e3)] = function (_0x1e12a4) {
                    const _0x2531d7 = _0x37969f;
                    window[_0x2531d7(0x200)] && window[_0x2531d7(0x200)][_0x2531d7(0x1e3)](_0x1e12a4);
                };
            }), this[_0x459f34(0x21b)] = !![], Laya['loader']['load'](_0x459f34(0x254), Laya['Handler'][_0x459f34(0x256)](this, _0x3469b0 => {
                YYGGames['startupByCargames']({
                    'appName': _0x3d3bfe,
                    'config': _0x3469b0,
                    'complete': () => {
                        const _0x293743 = _0x5af8, _0x339aeb = YYGGames[_0x293743(0x258)]();
                        window['scrollList'] = this[_0x293743(0x259)](), window[_0x293743(0x25a)] = this['box_adTwo']();
                        switch (_0x339aeb) {
                        case AdPlatformType['en_GAMEDISTRIBUTION']:
                        case AdPlatformType[_0x293743(0x25b)]:
                            window['yad'] && (window[_0x293743(0x249)][_0x293743(0x1d4)](0x0, 0x0), window[_0x293743(0x249)][_0x293743(0x25c)]());
                            break;
                        default:
                            window[_0x293743(0x249)] && Laya[_0x293743(0x1cd)]['addChild'](window[_0x293743(0x249)]), window[_0x293743(0x249)]['on'](Laya['Event'][_0x293743(0x25f)], window[_0x293743(0x249)], _0x4eeee5 => {
                                const _0x543168 = _0x293743;
                                _0x4eeee5['stopPropagation'](), _0x1871ac[_0x543168(0x21e)]()[_0x543168(0x225)](_0x543168(0x261), 'LOGO');
                            });
                            break;
                        }
                        this[_0x293743(0x21c)] = ![], _0x234d6c && _0x234d6c();
                    }
                });
            }));
        }
        [_0x3cb5c0(0x267)](_0x5a14cc, _0x3c6a64) {
            const _0x1a3e79 = _0x3cb5c0;
            !this[_0x1a3e79(0x21c)] && (_0x3c6a64 && _0x3c6a64());
            if (this['initialized_'])
                return;
            _0x1871ac['getInstance']()['showSplash'](), _0x1871ac['getInstance']()[_0x1a3e79(0x247)](), this[_0x1a3e79(0x24e)](), this['createLoading'](), window[_0x1a3e79(0x200)]['init']()[_0x1a3e79(0x250)](() => {
                const _0x2c5974 = _0x1a3e79;
                Laya[_0x2c5974(0x251)]['playMusic'] = function (_0x2785f7) {
                    const _0x1c1385 = _0x2c5974;
                    window[_0x1c1385(0x200)] && window[_0x1c1385(0x200)][_0x1c1385(0x1e2)](_0x2785f7);
                }, Laya[_0x2c5974(0x251)][_0x2c5974(0x1e5)] = function (_0x395adc) {
                    const _0x2459ee = _0x2c5974;
                    window['WebAudioEngine'] && window[_0x2459ee(0x200)][_0x2459ee(0x1e5)](_0x395adc);
                }, Laya['SoundManager'][_0x2c5974(0x252)] = function (_0x4ea454) {
                    const _0x222188 = _0x2c5974;
                    window['WebAudioEngine'] && window[_0x222188(0x200)][_0x222188(0x252)]();
                };
            }), this['initialized_'] = !![], Laya[_0x1a3e79(0x253)]['load'](_0x1a3e79(0x254), Laya[_0x1a3e79(0x255)]['create'](this, _0x333993 => {
                YYGGames['startup']({
                    'channel': 0x5,
                    'appName': _0x5a14cc,
                    'config': _0x333993,
                    'complete': () => {
                        const _0xc38864 = _0x5af8, _0x35b8ea = YYGGames['getAdPlatformType']();
                        window['scrollList'] = this[_0xc38864(0x259)](), window[_0xc38864(0x25a)] = this['box_adTwo']();
                        switch (_0x35b8ea) {
                        case AdPlatformType[_0xc38864(0x268)]:
                        case AdPlatformType[_0xc38864(0x25b)]:
                            window[_0xc38864(0x249)] && (window[_0xc38864(0x249)]['scale'](0x0, 0x0), window[_0xc38864(0x249)][_0xc38864(0x25c)]());
                            break;
                        default:
                            window[_0xc38864(0x249)] && Laya[_0xc38864(0x1cd)]['addChild'](window[_0xc38864(0x249)]), window[_0xc38864(0x249)]['on'](Laya[_0xc38864(0x25e)][_0xc38864(0x25f)], window[_0xc38864(0x249)], _0x508d34 => {
                                const _0x5401ea = _0xc38864;
                                _0x508d34['stopPropagation'](), _0x1871ac['getInstance']()[_0x5401ea(0x225)](_0x5401ea(0x261), _0x5401ea(0x262));
                            });
                            break;
                        }
                        this['needStartUp'] = ![], _0x3c6a64 && _0x3c6a64();
                    }
                });
            }));
        }
        [_0x3cb5c0(0x24e)]() {
            const _0x328a42 = _0x3cb5c0;
            if (!Laya[_0x328a42(0x269)] || !Laya[_0x328a42(0x26a)])
                return;
            let _0x297925 = {
                'x': 0x0,
                'type': 'Box',
                'selectedBox': 0x3,
                'selecteID': 0x4,
                'searchKey': _0x328a42(0x26b),
                'props': {
                    'y': 0x0,
                    'x': 0x0,
                    'top': 0x0,
                    'right': 0x0,
                    'presetID': 0x1,
                    'preset': _0x328a42(0x26c),
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'isPresetRoot': !![],
                    'bottom': 0x0
                },
                'nodeParent': -0x1,
                'maxID': 0xa,
                'label': _0x328a42(0x26d),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x3,
                'child': [{
                        'x': 0xf,
                        'type': _0x328a42(0x26e),
                        'searchKey': _0x328a42(0x26f),
                        'props': {
                            'y': 0x12c,
                            'x': 0x190,
                            'width': 0x2e4,
                            'var': _0x328a42(0x270),
                            'presetID': 0x2,
                            'preset': _0x328a42(0x26c),
                            'pivotY': 0x10e,
                            'pivotX': 0x172,
                            'name': _0x328a42(0x270),
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
                                'type': _0x328a42(0x271),
                                'searchKey': 'Rect',
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'presetID': 0x3,
                                    'preset': _0x328a42(0x26c),
                                    'height': 0x21c,
                                    'fillColor': _0x328a42(0x272)
                                },
                                'nodeParent': 0x4,
                                'label': _0x328a42(0x273),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x6,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x328a42(0x274),
                                'searchKey': _0x328a42(0x274),
                                'props': {
                                    'y': 0x1e,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x328a42(0x275),
                                    'text': _0x328a42(0x276),
                                    'presetID': 0x4,
                                    'preset': 'laya/pages/Prefab/NoVideo.prefab',
                                    'height': 0x4c,
                                    'fontSize': 0x50,
                                    'color': _0x328a42(0x277),
                                    'align': _0x328a42(0x278)
                                },
                                'nodeParent': 0x4,
                                'label': 'Label(NoVideo)',
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x7,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x328a42(0x274),
                                'searchKey': _0x328a42(0x274),
                                'props': {
                                    'y': 0xa3,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x328a42(0x275),
                                    'text': _0x328a42(0x279),
                                    'presetID': 0x5,
                                    'preset': _0x328a42(0x26c),
                                    'height': 0xaa,
                                    'fontSize': 0x28,
                                    'color': _0x328a42(0x277),
                                    'align': 'center'
                                },
                                'nodeParent': 0x4,
                                'label': _0x328a42(0x27a),
                                'isDirectory': ![],
                                'isAniNode': !![],
                                'hasChild': ![],
                                'compId': 0x8,
                                'child': []
                            },
                            {
                                'x': 0x1e,
                                'type': _0x328a42(0x274),
                                'searchKey': 'Label',
                                'props': {
                                    'y': 0x164,
                                    'x': 0x0,
                                    'width': 0x2e4,
                                    'valign': _0x328a42(0x275),
                                    'text': _0x328a42(0x27b),
                                    'presetID': 0x6,
                                    'preset': _0x328a42(0x26c),
                                    'height': 0xaa,
                                    'fontSize': 0x23,
                                    'color': _0x328a42(0x277),
                                    'align': _0x328a42(0x278)
                                },
                                'nodeParent': 0x4,
                                'label': _0x328a42(0x27a),
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
            class _0x25ac19 extends Laya[_0x328a42(0x26a)] {
                constructor() {
                    super();
                }
                [_0x328a42(0x27c)]() {
                    const _0x47280d = _0x328a42;
                    this[_0x47280d(0x27d)][_0x47280d(0x27e)] = 0x0, this[_0x47280d(0x27d)][_0x47280d(0x27f)] = 0x0, this[_0x47280d(0x27d)][_0x47280d(0x280)] = 0x0, this[_0x47280d(0x27d)][_0x47280d(0x281)] = 0x0, this[_0x47280d(0x270)] = this[_0x47280d(0x27d)][_0x47280d(0x282)]('spr_tip'), this[_0x47280d(0x27d)]['width'] > this[_0x47280d(0x27d)]['height'] ? this[_0x47280d(0x270)][_0x47280d(0x1d4)](this['owner']['height'] / 0x780, this['owner']['height'] / 0x780) : this[_0x47280d(0x270)][_0x47280d(0x1d4)](this['owner'][_0x47280d(0x283)] / 0x438, this[_0x47280d(0x27d)]['width'] / 0x438), this[_0x47280d(0x270)]['pos'](this[_0x47280d(0x27d)][_0x47280d(0x283)] / 0x2, this[_0x47280d(0x27d)][_0x47280d(0x284)] / 0x2), this[_0x47280d(0x27d)]['on'](Laya[_0x47280d(0x25e)][_0x47280d(0x285)], this, this[_0x47280d(0x286)]);
                }
                [_0x328a42(0x286)]() {
                    const _0x519a5f = _0x328a42;
                    _0x1871ac['getInstance']()[_0x519a5f(0x287)]();
                }
            }
            let _0x2517a7 = new Laya[(_0x328a42(0x269))]();
            _0x2517a7['json'] = _0x297925, this[_0x328a42(0x288)] = _0x2517a7[_0x328a42(0x256)](), this[_0x328a42(0x288)]['zOrder'] = 0x30d3f, this[_0x328a42(0x288)]['addComponent'](_0x25ac19);
        }
        ['showNoVideo']() {
            const _0x170f98 = _0x3cb5c0;
            this['noVideoPer'] && Laya[_0x170f98(0x1cd)][_0x170f98(0x25d)](this[_0x170f98(0x288)]);
        }
        [_0x3cb5c0(0x287)]() {
            const _0x31613e = _0x3cb5c0;
            this[_0x31613e(0x288)] && this[_0x31613e(0x288)][_0x31613e(0x25c)]();
        }
        ['createLoading']() {
            const _0x476762 = _0x3cb5c0;
            if (!Laya[_0x476762(0x269)] || !Laya[_0x476762(0x26a)])
                return;
            let _0x1c1881 = {
                'x': 0xf,
                'type': _0x476762(0x26b),
                'searchKey': _0x476762(0x289),
                'props': {
                    'var': _0x476762(0x28a),
                    'top': 0x0,
                    'right': 0x0,
                    'mouseEnabled': !![],
                    'left': 0x0,
                    'bottom': 0x0
                },
                'nodeParent': 0x2,
                'label': _0x476762(0x28a),
                'isOpen': !![],
                'isDirectory': !![],
                'isAniNode': !![],
                'hasChild': !![],
                'compId': 0x83,
                'child': [
                    {
                        'x': 0x1e,
                        'type': _0x476762(0x26b),
                        'searchKey': _0x476762(0x26b),
                        'props': {
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': _0x476762(0x272),
                            'alpha': 0.5
                        },
                        'nodeParent': 0x83,
                        'label': _0x476762(0x26b),
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
                            'text': _0x476762(0x28b),
                            'right': 0x0,
                            'left': 0x0,
                            'fontSize': 0x32,
                            'color': _0x476762(0x277),
                            'centerY': 0x0,
                            'align': _0x476762(0x278)
                        },
                        'nodeParent': 0x83,
                        'label': _0x476762(0x274),
                        'isDirectory': ![],
                        'isAniNode': !![],
                        'hasChild': ![],
                        'compId': 0x85,
                        'child': []
                    }
                ]
            };
            class _0x4997ac extends Laya[_0x476762(0x26a)] {
                constructor() {
                    super();
                }
                [_0x476762(0x27c)]() {
                }
                [_0x476762(0x286)]() {
                    const _0x17bfd5 = _0x476762;
                    _0x1871ac[_0x17bfd5(0x21e)]()[_0x17bfd5(0x287)]();
                }
            }
            let _0x14e9a9 = new Laya['Prefab']();
            _0x14e9a9[_0x476762(0x28c)] = _0x1c1881, this[_0x476762(0x28d)] = _0x14e9a9[_0x476762(0x256)](), this[_0x476762(0x28d)][_0x476762(0x24b)] = 0x30d3e, this[_0x476762(0x28d)][_0x476762(0x28e)](_0x4997ac);
        }
        [_0x3cb5c0(0x28f)]() {
            const _0x18f747 = _0x3cb5c0;
            this['loadingPer'] && Laya[_0x18f747(0x1cd)][_0x18f747(0x25d)](this[_0x18f747(0x28d)]);
        }
        ['closeLoading']() {
            const _0x59309a = _0x3cb5c0;
            this[_0x59309a(0x28d)] && this['loadingPer'][_0x59309a(0x25c)]();
        }
        ['createList']() {
            const _0x577a6f = _0x3cb5c0;
            class _0x47382b extends Laya[_0x577a6f(0x26b)] {
                constructor() {
                    const _0x2d9dcc = _0x577a6f;
                    super(), this[_0x2d9dcc(0x290)] = new Laya[(_0x2d9dcc(0x248))](), this[_0x2d9dcc(0x290)][_0x2d9dcc(0x291)] = _0x2d9dcc(0x292), this[_0x2d9dcc(0x293)](0x190, 0x12c), this[_0x2d9dcc(0x290)][_0x2d9dcc(0x293)](0x190, 0x12c), this[_0x2d9dcc(0x25d)](this['img']);
                }
            }
            let _0x460575 = new Laya['List']();
            return _0x460575[_0x577a6f(0x293)](0x320, 0x258), _0x460575[_0x577a6f(0x294)] = _0x47382b, _0x460575;
        }
        [_0x3cb5c0(0x259)]() {
            const _0x1d8c54 = _0x3cb5c0;
            if (!Laya || !Laya[_0x1d8c54(0x1cd)])
                return null;
            // if (YYGGames['getAdPlatformType']() == AdPlatformType[_0x1d8c54(0x268)] || YYGGames[_0x1d8c54(0x258)]() == AdPlatformType['en_XIAOMI']) {
            //     let _0x5a8db2 = new Laya[(_0x1d8c54(0x26b))]();
            //     return _0x5a8db2[_0x1d8c54(0x295)] = function () {
            //     }, _0x5a8db2;
            // }
            if (!this[_0x1d8c54(0x296)]) {
                let _0x195162 = {
                    'x': 0x0,
                    'type': _0x1d8c54(0x297),
                    'selectedBox': 0x90,
                    'selecteID': 0x78,
                    'searchKey': 'List,scrollAdList',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x370,
                        'repeatY': 0x1,
                        'presetID': 0x1,
                        'preset': 'laya/pages/prefab/scrollList.prefab',
                        'name': _0x1d8c54(0x298),
                        'isPresetRoot': !![],
                        'height': 0xaa,
                        'hScrollBarSkin': '\x20',
                        'anchorY': 0.5,
                        'anchorX': 0.5
                    },
                    'nodeParent': -0x1,
                    'maxID': 0x91,
                    'label': _0x1d8c54(0x298),
                    'isOpen': !![],
                    'isDirectory': !![],
                    'isAniNode': !![],
                    'hasChild': !![],
                    'compId': 0x90,
                    'child': [
                        {
                            'x': 0xf,
                            'type': _0x1d8c54(0x248),
                            'searchKey': _0x1d8c54(0x299),
                            'props': {
                                'zOrder': -0xa,
                                'width': 0x384,
                                'skin': _0x1d8c54(0x29a),
                                'sizeGrid': _0x1d8c54(0x29b),
                                'presetID': 0x2,
                                'preset': 'laya/pages/prefab/scrollList.prefab',
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
                            'type': _0x1d8c54(0x26b),
                            'searchKey': _0x1d8c54(0x26b),
                            'props': {
                                'x': 0x0,
                                'width': 0xdc,
                                'renderType': _0x1d8c54(0x29c),
                                'presetID': 0x3,
                                'preset': _0x1d8c54(0x29d),
                                'height': 0xaa
                            },
                            'nodeParent': 0x90,
                            'label': _0x1d8c54(0x29e),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': ![],
                            'hasChild': !![],
                            'compId': 0x77,
                            'child': [{
                                    'x': 0x1e,
                                    'type': _0x1d8c54(0x248),
                                    'searchKey': _0x1d8c54(0x29f),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x4,
                                        'preset': _0x1d8c54(0x29d),
                                        'name': _0x1d8c54(0x292),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'nodeParent': 0x77,
                                    'label': _0x1d8c54(0x292),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': ![],
                                    'hasChild': !![],
                                    'compId': 0x79,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0x1d8c54(0x248),
                                            'searchKey': _0x1d8c54(0x248),
                                            'props': {
                                                'y': 0x4b,
                                                'x': 0x64,
                                                'width': 0xc8,
                                                'skin': _0x1d8c54(0x2a0),
                                                'sizeGrid': _0x1d8c54(0x2a1),
                                                'renderType': _0x1d8c54(0x2a2),
                                                'presetID': 0x5,
                                                'preset': _0x1d8c54(0x29d),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x79,
                                            'label': _0x1d8c54(0x2a3),
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
                class _0x2fcca8 extends Laya[_0x1d8c54(0x26a)] {
                    constructor() {
                        const _0x51e14a = _0x1d8c54;
                        super(), this[_0x51e14a(0x2a4)] = [], this[_0x51e14a(0x2a5)] = [
                            0.83,
                            0.83
                        ], this['sizeTran'] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    ['onEnable']() {
                        const _0x1d4a5b = _0x1d8c54;
                        this[_0x1d4a5b(0x2a6)] = this[_0x1d4a5b(0x27d)][_0x1d4a5b(0x282)](_0x1d4a5b(0x2a6)), this[_0x1d4a5b(0x27d)][_0x1d4a5b(0x1d3)] = ![], !this[_0x1d4a5b(0x27d)][_0x1d4a5b(0x2a7)] && (this[_0x1d4a5b(0x27d)]['renderHandler'] = new Laya[(_0x1d4a5b(0x255))](this, this[_0x1d4a5b(0x2a8)]));
                        if (this[_0x1d4a5b(0x2a4)][_0x1d4a5b(0x202)]) {
                            let _0x116a48 = JSON[_0x1d4a5b(0x1e1)](JSON[_0x1d4a5b(0x2a9)](this[_0x1d4a5b(0x2a4)]));
                            Laya['loader'][_0x1d4a5b(0x2aa)](_0x116a48);
                        }
                        this['setSize'](this[_0x1d4a5b(0x2ab)][0x0], this[_0x1d4a5b(0x2ab)][0x1], this[_0x1d4a5b(0x2ab)][0x2]), this[_0x1d4a5b(0x27d)][_0x1d4a5b(0x2ac)][_0x1d4a5b(0x2ad)] = ![], this['owner']['scrollBar'][_0x1d4a5b(0x2ae)] = ![], this[_0x1d4a5b(0x27d)][_0x1d4a5b(0x2ac)][_0x1d4a5b(0x2af)] = ![];
                        let _0x426b84 = _0x1871ac[_0x1d4a5b(0x21e)]()['getForgames']();
                        if (!_0x426b84[_0x1d4a5b(0x202)])
                            return;
                        this[_0x1d4a5b(0x2b0)] = JSON[_0x1d4a5b(0x1e1)](JSON[_0x1d4a5b(0x2a9)](_0x426b84)), this[_0x1d4a5b(0x2b0)] = this[_0x1d4a5b(0x2b0)]['concat'](this[_0x1d4a5b(0x2b0)][_0x1d4a5b(0x2b1)](0x0, 0x4)), this[_0x1d4a5b(0x27d)][_0x1d4a5b(0x2b2)] = 0x0, this['owner'][_0x1d4a5b(0x2b3)] = this[_0x1d4a5b(0x2b0)], Laya['timer']['frameLoop'](0x1, this, this[_0x1d4a5b(0x2b4)]), this[_0x1d4a5b(0x27d)]['visible'] = !![];
                    }
                    [_0x1d8c54(0x2a8)](_0x1d1510, _0x2edcaa) {
                        const _0x15452d = _0x1d8c54;
                        let _0xa22d15 = _0x1d1510['getChildByName'](_0x15452d(0x292));
                        _0x1d1510[_0x15452d(0x2b5)](), _0xa22d15[_0x15452d(0x2b5)](), _0x1d1510['on'](Laya['Event'][_0x15452d(0x2b6)], _0x1d1510, () => {
                            const _0x15a81e = _0x15452d;
                            _0x1d1510[_0x15a81e(0x24b)] = 0x64;
                        }), _0x1d1510['on'](Laya['Event'][_0x15452d(0x2b7)], _0x1d1510, () => {
                            _0x1d1510['zOrder'] = _0x2edcaa;
                        }), _0xa22d15['on'](Laya[_0x15452d(0x25e)][_0x15452d(0x2b6)], _0x1d1510, () => {
                            _0xa22d15['scale'](1.1, 1.1), this['endAni']();
                        }), _0xa22d15['on'](Laya[_0x15452d(0x25e)][_0x15452d(0x2b7)], _0x1d1510, () => {
                            const _0x502687 = _0x15452d;
                            _0xa22d15[_0x502687(0x1d4)](0x1, 0x1), Laya['timer'][_0x502687(0x2b8)](0x1, this, this['loopList']);
                        }), _0xa22d15['on'](Laya[_0x15452d(0x25e)]['MOUSE_DOWN'], _0x1d1510, _0x368faf => {
                            const _0x146ccb = _0x15452d;
                            _0x368faf['stopPropagation'](), _0x1871ac[_0x146ccb(0x21e)]()['navigate'](_0x146ccb(0x261), _0x146ccb(0x2b9), _0x1d1510['dataSource']['id']);
                        });
                        let _0x881b37 = _0xa22d15['mask'];
                        _0x1d1510[_0x15452d(0x283)] = this[_0x15452d(0x2ab)][0x0] + 0x14, _0x1d1510[_0x15452d(0x284)] = this[_0x15452d(0x2ab)][0x1] + 0x14, _0x1d1510['x'] = (this[_0x15452d(0x2ab)][0x0] + 0x14) * _0x2edcaa;
                        if (this[_0x15452d(0x2ab)][0x2])
                            _0x881b37[_0x15452d(0x283)] = _0xa22d15[_0x15452d(0x283)] = this['sizeTran'][0x0], _0x881b37[_0x15452d(0x284)] = _0xa22d15[_0x15452d(0x284)] = this['sizeTran'][0x1];
                        else {
                            let _0x21c214 = 0xc8 / this[_0x15452d(0x2ab)][0x0] < 0x96 / this[_0x15452d(0x2ab)][0x1] ? 0xc8 / this[_0x15452d(0x2ab)][0x0] : 0x96 / this[_0x15452d(0x2ab)][0x1];
                            _0xa22d15[_0x15452d(0x283)] = 0xc8 / _0x21c214, _0xa22d15[_0x15452d(0x284)] = 0x96 / _0x21c214, _0x881b37[_0x15452d(0x283)] = this[_0x15452d(0x2ab)][0x0], _0x881b37['height'] = this[_0x15452d(0x2ab)][0x1];
                        }
                        _0x881b37['x'] = _0xa22d15[_0x15452d(0x283)] / 0x2, _0x881b37['y'] = _0xa22d15[_0x15452d(0x284)] / 0x2;
                    }
                    [_0x1d8c54(0x295)](_0x55ae83, _0x39499c, _0x5bfbc1 = ![]) {
                        const _0x5e346e = _0x1d8c54;
                        this['sizeTran'] = [
                            _0x55ae83,
                            _0x39499c,
                            _0x5bfbc1
                        ], this['img_ListBg'] && (this[_0x5e346e(0x27d)][_0x5e346e(0x283)] = (_0x55ae83 + 0x14) * 0x4, this[_0x5e346e(0x27d)][_0x5e346e(0x284)] = _0x39499c + 0x14, this[_0x5e346e(0x2a6)][_0x5e346e(0x283)] = (_0x55ae83 + 0x14) * 0x4 + 0x14, this[_0x5e346e(0x2a6)][_0x5e346e(0x284)] = _0x39499c + 0x28, this[_0x5e346e(0x27d)][_0x5e346e(0x2b3)] = [], this[_0x5e346e(0x27d)]['array'] = this[_0x5e346e(0x2b0)]);
                    }
                    [_0x1d8c54(0x2b4)]() {
                        const _0xc246eb = _0x1d8c54;
                        this[_0xc246eb(0x27d)][_0xc246eb(0x2ac)][_0xc246eb(0x1fe)] += 0x1, this[_0xc246eb(0x27d)][_0xc246eb(0x2ac)]['value'] >= this[_0xc246eb(0x27d)][_0xc246eb(0x2ac)][_0xc246eb(0x2ba)] && (this[_0xc246eb(0x27d)][_0xc246eb(0x2ac)][_0xc246eb(0x1fe)] = 0x0);
                    }
                    [_0x1d8c54(0x2bb)]() {
                        const _0x37166a = _0x1d8c54;
                        Laya[_0x37166a(0x1cc)][_0x37166a(0x2bc)](this), Laya[_0x37166a(0x2bd)][_0x37166a(0x2bc)](this['owner'][_0x37166a(0x2ac)]);
                    }
                    [_0x1d8c54(0x2be)](_0x2b8067) {
                    }
                    ['onDisable']() {
                        const _0x695f82 = _0x1d8c54;
                        if (this[_0x695f82(0x2a4)][_0x695f82(0x202)]) {
                            let _0x1d441a = JSON[_0x695f82(0x1e1)](JSON[_0x695f82(0x2a9)](this[_0x695f82(0x2a4)]));
                            Laya['loader']['clearRes'](_0x1d441a);
                        }
                        this[_0x695f82(0x2a4)] = [], this[_0x695f82(0x2bb)](), this[_0x695f82(0x27d)][_0x695f82(0x2b3)] = [];
                    }
                }
                let _0xaf7cf1 = new Laya[(_0x1d8c54(0x269))]();
                _0xaf7cf1[_0x1d8c54(0x28c)] = _0x195162, this['_scrollList'] = _0xaf7cf1['create'](), this[_0x1d8c54(0x296)][_0x1d8c54(0x24b)] = 0x30d3f, this[_0x1d8c54(0x296)][_0x1d8c54(0x28e)](_0x2fcca8), this[_0x1d8c54(0x296)][_0x1d8c54(0x295)] = this[_0x1d8c54(0x296)][_0x1d8c54(0x2bf)](_0x2fcca8)['setSize']['bind'](this[_0x1d8c54(0x296)][_0x1d8c54(0x2bf)](_0x2fcca8));
            }
            return this[_0x1d8c54(0x296)];
        }
        ['box_adTwo']() {
            const _0xa1c305 = _0x3cb5c0;
            if (!Laya || !Laya[_0xa1c305(0x1cd)])
                return null;
            // if (YYGGames[_0xa1c305(0x258)]() == AdPlatformType['en_GAMEDISTRIBUTION'] || YYGGames[_0xa1c305(0x258)]() == AdPlatformType[_0xa1c305(0x25b)]) {
            //     let _0x4ae82c = new Laya[(_0xa1c305(0x26b))]();
            //     return _0x4ae82c[_0xa1c305(0x2c0)] = _0x4ae82c['setSize'] = function () {
            //     }, _0x4ae82c;
            // }
            if (!this[_0xa1c305(0x2c1)]) {
                let _0x459363 = {
                    'x': 0x0,
                    'type': _0xa1c305(0x26b),
                    'selectedBox': 0x96,
                    'selecteID': 0x98,
                    'searchKey': _0xa1c305(0x2c2),
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'width': 0x1,
                        'presetID': 0x1,
                        'preset': _0xa1c305(0x2c3),
                        'name': _0xa1c305(0x25a),
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
                            'type': _0xa1c305(0x248),
                            'searchKey': _0xa1c305(0x2c4),
                            'props': {
                                'y': 0x0,
                                'x': -0x136,
                                'width': 0xdc,
                                'skin': _0xa1c305(0x2a0),
                                'sizeGrid': _0xa1c305(0x2a1),
                                'presetID': 0x2,
                                'preset': _0xa1c305(0x2c3),
                                'name': _0xa1c305(0x2c5),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0xa1c305(0x2c5),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x93,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': _0xa1c305(0x2c6),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x3,
                                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                        'name': _0xa1c305(0x2c7),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x93,
                                    'label': _0xa1c305(0x2c7),
                                    'isOpen': !![],
                                    'isDirectory': !![],
                                    'isAniNode': !![],
                                    'hasChild': !![],
                                    'compId': 0x95,
                                    'child': [{
                                            'x': 0x2d,
                                            'type': _0xa1c305(0x248),
                                            'searchKey': _0xa1c305(0x248),
                                            'props': {
                                                'width': 0xc8,
                                                'skin': '',
                                                'sizeGrid': _0xa1c305(0x2a1),
                                                'renderType': _0xa1c305(0x2a2),
                                                'presetID': 0x4,
                                                'preset': _0xa1c305(0x2c3),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x95,
                                            'label': _0xa1c305(0x2c8),
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
                            'type': _0xa1c305(0x248),
                            'searchKey': _0xa1c305(0x2c9),
                            'props': {
                                'y': 0x0,
                                'x': 0x5a,
                                'width': 0xdc,
                                'skin': _0xa1c305(0x2a0),
                                'sizeGrid': _0xa1c305(0x2a1),
                                'presetID': 0x5,
                                'preset': _0xa1c305(0x2c3),
                                'name': _0xa1c305(0x2ca),
                                'height': 0xaa
                            },
                            'nodeParent': 0x92,
                            'label': _0xa1c305(0x2ca),
                            'isOpen': !![],
                            'isDirectory': !![],
                            'isAniNode': !![],
                            'hasChild': !![],
                            'compId': 0x94,
                            'child': [{
                                    'x': 0x1e,
                                    'type': 'Image',
                                    'searchKey': _0xa1c305(0x2c6),
                                    'props': {
                                        'width': 0xc8,
                                        'presetID': 0x6,
                                        'preset': 'laya/pages/prefab/box_adTwo.prefab',
                                        'name': _0xa1c305(0x2c7),
                                        'height': 0x96,
                                        'centerY': 0x0,
                                        'centerX': 0x0
                                    },
                                    'nodeParent': 0x94,
                                    'label': _0xa1c305(0x2c7),
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
                                                'skin': _0xa1c305(0x2a0),
                                                'sizeGrid': _0xa1c305(0x2a1),
                                                'renderType': _0xa1c305(0x2a2),
                                                'presetID': 0x7,
                                                'preset': _0xa1c305(0x2c3),
                                                'height': 0x96,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'nodeParent': 0x96,
                                            'label': _0xa1c305(0x2c8),
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
                class _0x165a00 extends Laya[_0xa1c305(0x26a)] {
                    constructor() {
                        const _0x4ad74c = _0xa1c305;
                        super(), this[_0x4ad74c(0x2a4)] = [], this[_0x4ad74c(0x2cb)] = 0x0, this[_0x4ad74c(0x2ab)] = [
                            0xc8,
                            0x96,
                            !![]
                        ];
                    }
                    [_0xa1c305(0x27c)]() {
                        const _0x4ca9f8 = _0xa1c305;
                        !this[_0x4ca9f8(0x2c5)] && (this[_0x4ca9f8(0x2c5)] = this[_0x4ca9f8(0x27d)][_0x4ca9f8(0x282)](_0x4ca9f8(0x2c5))), !this[_0x4ca9f8(0x2ca)] && (this['img_ad1'] = this[_0x4ca9f8(0x27d)][_0x4ca9f8(0x282)](_0x4ca9f8(0x2ca))), !this[_0x4ca9f8(0x2cc)] && (this[_0x4ca9f8(0x2cc)] = this['img_ad0'][_0x4ca9f8(0x282)](_0x4ca9f8(0x2c7))), !this[_0x4ca9f8(0x2cd)] && (this[_0x4ca9f8(0x2cd)] = this[_0x4ca9f8(0x2ca)][_0x4ca9f8(0x282)](_0x4ca9f8(0x2c7))), !this['img_ad0AdMask'] && (this[_0x4ca9f8(0x2ce)] = this['img_ad0Ad'][_0x4ca9f8(0x2a2)]), !this[_0x4ca9f8(0x2cf)] && (this['img_ad1AdMask'] = this[_0x4ca9f8(0x2cd)]['mask']), this[_0x4ca9f8(0x27d)][_0x4ca9f8(0x1d3)] = ![];
                        let _0x2ea450 = _0x1871ac[_0x4ca9f8(0x21e)]()[_0x4ca9f8(0x244)]();
                        if (!_0x2ea450['length'])
                            return;
                        let _0x54879e = JSON['parse'](JSON[_0x4ca9f8(0x2a9)](_0x2ea450));
                        if (this['imgArr'][_0x4ca9f8(0x202)]) {
                            let _0x1da4bd = JSON[_0x4ca9f8(0x1e1)](JSON[_0x4ca9f8(0x2a9)](this[_0x4ca9f8(0x2a4)]));
                            Laya[_0x4ca9f8(0x253)][_0x4ca9f8(0x2aa)](_0x1da4bd);
                        }
                        this[_0x4ca9f8(0x2c0)](this[_0x4ca9f8(0x2cb)]), this[_0x4ca9f8(0x295)](this['sizeTran'][0x0], this[_0x4ca9f8(0x2ab)][0x1], this['sizeTran'][0x2]), this[_0x4ca9f8(0x2c5)][_0x4ca9f8(0x2b5)](), this['img_ad1']['offAll'](), this[_0x4ca9f8(0x27d)]['visible'] = !![], this['img_ad0']['getChildByName'](_0x4ca9f8(0x2c7))[_0x4ca9f8(0x2d0)] = _0x54879e[0x0][_0x4ca9f8(0x292)], this[_0x4ca9f8(0x2ca)][_0x4ca9f8(0x282)](_0x4ca9f8(0x2c7))['skin'] = _0x54879e[0x1][_0x4ca9f8(0x292)], this['img_ad0']['on'](Laya[_0x4ca9f8(0x25e)]['MOUSE_DOWN'], this, _0xa99bf5 => {
                            const _0x550e6e = _0x4ca9f8;
                            _0xa99bf5['stopPropagation'](), _0x1871ac[_0x550e6e(0x21e)]()[_0x550e6e(0x225)](_0x550e6e(0x261), _0x550e6e(0x2b9), _0x54879e[0x0]['id']);
                        }), this[_0x4ca9f8(0x2ca)]['on'](Laya[_0x4ca9f8(0x25e)][_0x4ca9f8(0x25f)], this, _0x23f63b => {
                            const _0x127993 = _0x4ca9f8;
                            _0x23f63b[_0x127993(0x260)](), _0x1871ac[_0x127993(0x21e)]()['navigate'](_0x127993(0x261), _0x127993(0x2b9), _0x54879e[0x1]['id']);
                        });
                    }
                    [_0xa1c305(0x2c0)](_0x294438) {
                        const _0x3bee9c = _0xa1c305;
                        this[_0x3bee9c(0x2cb)] = _0x294438, this[_0x3bee9c(0x2c5)] && (this[_0x3bee9c(0x2c5)]['x'] = -this[_0x3bee9c(0x2c5)][_0x3bee9c(0x283)] - this[_0x3bee9c(0x2cb)] / 0x2, this[_0x3bee9c(0x2ca)]['x'] = this[_0x3bee9c(0x2cb)] / 0x2);
                    }
                    ['onDisable']() {
                        const _0x247ab7 = _0xa1c305;
                        if (this['imgArr'][_0x247ab7(0x202)]) {
                            let _0x188813 = JSON[_0x247ab7(0x1e1)](JSON[_0x247ab7(0x2a9)](this[_0x247ab7(0x2a4)]));
                            Laya[_0x247ab7(0x253)][_0x247ab7(0x2aa)](_0x188813);
                        }
                        this[_0x247ab7(0x2a4)] = [];
                    }
                    [_0xa1c305(0x295)](_0x587523, _0x272ffd, _0x46dfd6 = ![]) {
                        const _0x4e3c6b = _0xa1c305;
                        this[_0x4e3c6b(0x2ab)] = [
                            _0x587523,
                            _0x272ffd,
                            _0x46dfd6
                        ];
                        if (this[_0x4e3c6b(0x2c5)]) {
                            this[_0x4e3c6b(0x2c5)][_0x4e3c6b(0x283)] = this[_0x4e3c6b(0x2ca)]['width'] = _0x587523 + 0x14, this[_0x4e3c6b(0x2c5)][_0x4e3c6b(0x284)] = this[_0x4e3c6b(0x2ca)][_0x4e3c6b(0x284)] = _0x272ffd + 0x14;
                            if (_0x46dfd6)
                                this[_0x4e3c6b(0x2ce)][_0x4e3c6b(0x283)] = this[_0x4e3c6b(0x2cf)]['width'] = this[_0x4e3c6b(0x2cc)][_0x4e3c6b(0x283)] = this[_0x4e3c6b(0x2cd)][_0x4e3c6b(0x283)] = _0x587523, this[_0x4e3c6b(0x2ce)][_0x4e3c6b(0x284)] = this[_0x4e3c6b(0x2cf)][_0x4e3c6b(0x284)] = this[_0x4e3c6b(0x2cc)][_0x4e3c6b(0x284)] = this[_0x4e3c6b(0x2cd)][_0x4e3c6b(0x284)] = _0x272ffd;
                            else {
                                let _0x5b98fe = 0xc8 / _0x587523 < 0x96 / _0x272ffd ? 0xc8 / _0x587523 : 0x96 / _0x272ffd;
                                this['img_ad0Ad'][_0x4e3c6b(0x283)] = this[_0x4e3c6b(0x2cd)][_0x4e3c6b(0x283)] = 0xc8 / _0x5b98fe, this[_0x4e3c6b(0x2cc)]['height'] = this['img_ad1Ad'][_0x4e3c6b(0x284)] = 0x96 / _0x5b98fe, this[_0x4e3c6b(0x2ce)][_0x4e3c6b(0x283)] = this[_0x4e3c6b(0x2cf)][_0x4e3c6b(0x283)] = _0x587523, this['img_ad0AdMask']['height'] = this[_0x4e3c6b(0x2cf)][_0x4e3c6b(0x284)] = _0x272ffd;
                            }
                            this[_0x4e3c6b(0x2ce)]['x'] = this[_0x4e3c6b(0x2cf)]['x'] = this['img_ad0Ad'][_0x4e3c6b(0x283)] / 0x2, this[_0x4e3c6b(0x2ce)]['y'] = this[_0x4e3c6b(0x2cf)]['y'] = this[_0x4e3c6b(0x2cc)]['height'] / 0x2, this[_0x4e3c6b(0x2c0)](this[_0x4e3c6b(0x2cb)]);
                        }
                    }
                }
                let _0x59269a = new Laya[(_0xa1c305(0x269))]();
                _0x59269a[_0xa1c305(0x28c)] = _0x459363, this[_0xa1c305(0x2c1)] = _0x59269a[_0xa1c305(0x256)](), this[_0xa1c305(0x2c1)]['zOrder'] = 0x30d3f, this[_0xa1c305(0x2c1)][_0xa1c305(0x28e)](_0x165a00), this['_box_adTwo'][_0xa1c305(0x2c0)] = this[_0xa1c305(0x2c1)][_0xa1c305(0x2bf)](_0x165a00)[_0xa1c305(0x2c0)][_0xa1c305(0x1c2)](this[_0xa1c305(0x2c1)][_0xa1c305(0x2bf)](_0x165a00)), this['_box_adTwo'][_0xa1c305(0x295)] = this[_0xa1c305(0x2c1)][_0xa1c305(0x2bf)](_0x165a00)[_0xa1c305(0x295)]['bind'](this[_0xa1c305(0x2c1)][_0xa1c305(0x2bf)](_0x165a00));
            }
            return this[_0xa1c305(0x2c1)];
        }
    }
    _0x1871ac['_instance'] = null, window[_0x3cb5c0(0x2d1)] = _0x1871ac;
    class _0x20f393 {
        constructor() {
            const _0x418056 = _0x3cb5c0;
            this[_0x418056(0x2d2)] = null, this[_0x418056(0x296)] = null, this['_inst'] = this;
        }
        static get ['inst']() {
            const _0x2490e8 = _0x3cb5c0;
            return !this[_0x2490e8(0x2d3)] && new _0x20f393(), this[_0x2490e8(0x2d3)];
        }
        [_0x3cb5c0(0x25a)]() {
            const _0x357837 = _0x3cb5c0;
            if (!Laya || !Laya[_0x357837(0x1cd)])
                return null;
            if (YYGGames[_0x357837(0x258)]() == AdPlatformType['en_GAMEDISTRIBUTION'] || YYGGames['getAdPlatformType']() == AdPlatformType[_0x357837(0x25b)]) {
                let _0x272f5d = new Laya[(_0x357837(0x26b))]();
                return _0x272f5d['setSpaceX'] = _0x272f5d['setSize'] = function () {
                }, _0x272f5d;
            }
            if (!this[_0x357837(0x2d2)]) {
                this[_0x357837(0x2d2)] = new Laya[(_0x357837(0x26b))](), this[_0x357837(0x2d2)][_0x357837(0x291)] = _0x357837(0x2d2), this[_0x357837(0x2d2)][_0x357837(0x2d4)] = this['_box_adTwo0']['anchorY'] = 0.5, this[_0x357837(0x2d2)][_0x357837(0x24b)] = 0x30d3f, this[_0x357837(0x2d2)][_0x357837(0x2d5)] = 0x0;
                let _0x1d8b33 = new Laya['Image']();
                _0x1d8b33[_0x357837(0x291)] = 'leftAdBg', _0x1d8b33[_0x357837(0x2d6)] = _0x357837(0x2a1), _0x1d8b33[_0x357837(0x293)](0xdc, 0xaa), _0x1d8b33[_0x357837(0x2d0)] = '';
                let _0x44900a = new Laya[(_0x357837(0x248))]();
                _0x44900a[_0x357837(0x291)] = 'leftAdMask', _0x44900a[_0x357837(0x293)](0xc8, 0x96), _0x44900a[_0x357837(0x2d6)] = _0x357837(0x2a1), _0x44900a['anchorX'] = _0x44900a[_0x357837(0x2d7)] = 0.5, _0x44900a[_0x357837(0x2d0)] = _0x357837(0x2a0);
                let _0x12b336 = new Laya[(_0x357837(0x248))]();
                _0x12b336['name'] = 'leftAd', _0x12b336[_0x357837(0x293)](0xc8, 0x96), _0x12b336[_0x357837(0x2d4)] = _0x12b336[_0x357837(0x2d7)] = 0.5, _0x12b336[_0x357837(0x2d0)] = '', _0x12b336[_0x357837(0x2a2)] = _0x44900a, _0x1d8b33['addChild'](_0x12b336), _0x1d8b33['pos'](0x0, 0x0), _0x12b336[_0x357837(0x2d8)](_0x1d8b33['width'] / 0x2, _0x1d8b33[_0x357837(0x284)] / 0x2), _0x44900a[_0x357837(0x2d8)](_0x12b336['width'] / 0x2, _0x12b336[_0x357837(0x284)] / 0x2);
                let _0x3167e1 = new Laya['Image']();
                _0x3167e1[_0x357837(0x291)] = 'rightAdBg', _0x3167e1['sizeGrid'] = '30,30,30,30', _0x3167e1[_0x357837(0x293)](0xdc, 0xaa), _0x3167e1[_0x357837(0x2d0)] = _0x357837(0x2a0);
                let _0x409612 = new Laya[(_0x357837(0x248))]();
                _0x409612[_0x357837(0x291)] = _0x357837(0x2d9), _0x409612[_0x357837(0x293)](0xc8, 0x96), _0x409612[_0x357837(0x2d6)] = _0x357837(0x2a1), _0x409612[_0x357837(0x2d4)] = _0x409612[_0x357837(0x2d7)] = 0.5, _0x409612[_0x357837(0x2d0)] = _0x357837(0x2a0);
                let _0x3d14c2 = new Laya['Image']();
                _0x3d14c2[_0x357837(0x291)] = _0x357837(0x2da), _0x3d14c2[_0x357837(0x293)](0xc8, 0x96), _0x3d14c2[_0x357837(0x2d4)] = _0x3d14c2[_0x357837(0x2d7)] = 0.5, _0x3d14c2[_0x357837(0x2d0)] = '', _0x3d14c2[_0x357837(0x2a2)] = _0x409612, _0x3167e1[_0x357837(0x25d)](_0x3d14c2), _0x3167e1[_0x357837(0x2d8)](_0x1d8b33[_0x357837(0x283)], 0x0), _0x3d14c2['pos'](_0x3167e1[_0x357837(0x283)] / 0x2, _0x3167e1[_0x357837(0x284)] / 0x2), _0x409612[_0x357837(0x2d8)](_0x3d14c2['width'] / 0x2, _0x3d14c2[_0x357837(0x284)] / 0x2), this[_0x357837(0x2d2)]['centerX'] = 0x0, this[_0x357837(0x2d2)][_0x357837(0x283)] = _0x1d8b33[_0x357837(0x283)] + _0x3167e1[_0x357837(0x283)], this['_box_adTwo0'][_0x357837(0x25d)](_0x1d8b33), this[_0x357837(0x2d2)][_0x357837(0x25d)](_0x3167e1), this[_0x357837(0x2d2)][_0x357837(0x2c0)] = this['setSpaceX'][_0x357837(0x1c2)](this[_0x357837(0x2d2)]), this[_0x357837(0x2d2)][_0x357837(0x295)] = this['setSize'][_0x357837(0x1c2)](this[_0x357837(0x2d2)]);
                let _0x2d20fb = _0x1871ac[_0x357837(0x21e)]()[_0x357837(0x244)]();
                if (!_0x2d20fb[_0x357837(0x202)])
                    return;
                let _0x4b0abe = JSON[_0x357837(0x1e1)](JSON[_0x357837(0x2a9)](_0x2d20fb));
                _0x12b336['offAll'](), _0x3d14c2[_0x357837(0x2b5)](), _0x12b336[_0x357837(0x2d0)] = _0x4b0abe[0x0][_0x357837(0x292)], _0x3d14c2['skin'] = _0x4b0abe[0x1][_0x357837(0x292)], _0x12b336['on'](Laya['Event'][_0x357837(0x25f)], this, _0x55711b => {
                    const _0x1f60b0 = _0x357837;
                    _0x55711b['stopPropagation'](), _0x1871ac[_0x1f60b0(0x21e)]()['navigate'](_0x1f60b0(0x261), _0x1f60b0(0x2b9), _0x4b0abe[0x0]['id']);
                }), _0x3d14c2['on'](Laya[_0x357837(0x25e)][_0x357837(0x25f)], this, _0x52039e => {
                    const _0x47b998 = _0x357837;
                    _0x52039e[_0x47b998(0x260)](), _0x1871ac[_0x47b998(0x21e)]()[_0x47b998(0x225)](_0x47b998(0x261), _0x47b998(0x2b9), _0x4b0abe[0x1]['id']);
                }), this[_0x357837(0x2d2)]['visible'] = ![];
            }
            return this[_0x357837(0x2d2)];
        }
        [_0x3cb5c0(0x295)](_0x41c964 = 0xc8, _0x4ee277 = 0x96, _0x3da981 = ![], _0x5e9a53 = !![]) {
            const _0x89d195 = _0x3cb5c0;
            let _0x1d1d18 = 0xc8;
            _0x41c964 / 0xc8 > _0x4ee277 / 0x96 ? _0x1d1d18 = _0x41c964 / 0xc8 : _0x1d1d18 = _0x4ee277 / 0x96;
            let _0x5707a3 = 0xc8;
            if (this['name'] == _0x89d195(0x2d2)) {
                let _0xe469bf = this[_0x89d195(0x282)](_0x89d195(0x2db)), _0x32b8f6 = this['getChildByName'](_0x89d195(0x2dc)), _0x1c86a1 = _0xe469bf[_0x89d195(0x282)](_0x89d195(0x2dd)), _0x339a6d = _0x32b8f6[_0x89d195(0x282)]('rightAd');
                _0x5e9a53 && (_0xe469bf['size'](0xdc, 0xaa), _0x32b8f6[_0x89d195(0x293)](0xdc, 0xaa), _0x1c86a1[_0x89d195(0x293)](0xc8, 0x96), _0x339a6d[_0x89d195(0x293)](0xc8, 0x96), _0x1c86a1[_0x89d195(0x2a2)][_0x89d195(0x293)](0xc8, 0x96), _0x339a6d[_0x89d195(0x2a2)]['size'](0xc8, 0x96), _0xe469bf['scale'](0x1, 0x1), _0x32b8f6[_0x89d195(0x1d4)](0x1, 0x1), _0x1c86a1[_0x89d195(0x1d4)](0x1, 0x1), _0x339a6d[_0x89d195(0x1d4)](0x1, 0x1), _0x1c86a1[_0x89d195(0x2a2)][_0x89d195(0x1d4)](0x1, 0x1), _0x339a6d[_0x89d195(0x2a2)]['scale'](0x1, 0x1));
                let _0x59f98e = 0xc8 * _0x4ee277 / _0x41c964;
                _0xe469bf[_0x89d195(0x293)](_0x5707a3 + 0x14, _0x59f98e + 0x14), _0x32b8f6[_0x89d195(0x293)](_0x5707a3 + 0x14, _0x59f98e + 0x14), _0x1c86a1['mask'][_0x89d195(0x293)](_0x5707a3, _0x59f98e), _0x339a6d[_0x89d195(0x2a2)][_0x89d195(0x293)](_0x5707a3, _0x59f98e), !_0x3da981 ? (_0x1c86a1[_0x89d195(0x293)](_0x5707a3, _0x59f98e), _0x339a6d[_0x89d195(0x293)](_0x5707a3, _0x59f98e)) : (_0x1c86a1[_0x89d195(0x293)](0xc8 * _0x1d1d18, 0x96 * _0x1d1d18), _0x339a6d[_0x89d195(0x293)](0xc8 * _0x1d1d18, 0x96 * _0x1d1d18)), _0x1c86a1[_0x89d195(0x2d8)](_0xe469bf[_0x89d195(0x283)] / 0x2, _0xe469bf[_0x89d195(0x284)] / 0x2), _0x1c86a1[_0x89d195(0x2a2)]['pos'](_0x1c86a1[_0x89d195(0x283)] / 0x2, _0x1c86a1['height'] / 0x2), _0x339a6d[_0x89d195(0x2d8)](_0x32b8f6[_0x89d195(0x283)] / 0x2, _0x32b8f6[_0x89d195(0x284)] / 0x2), _0x339a6d[_0x89d195(0x2a2)]['pos'](_0x339a6d[_0x89d195(0x283)] / 0x2, _0x339a6d[_0x89d195(0x284)] / 0x2), this[_0x89d195(0x2c0)](this[_0x89d195(0x2d5)]);
            } else
                this['name'] == _0x89d195(0x296) && (this[_0x89d195(0x2de)] = [
                    _0x41c964,
                    _0x4ee277,
                    _0x3da981,
                    _0x5e9a53
                ]);
        }
        [_0x3cb5c0(0x259)]() {
            const _0x1f0713 = _0x3cb5c0;
            if (!Laya || !Laya[_0x1f0713(0x1cd)])
                return null;
            if (YYGGames['getAdPlatformType']() == AdPlatformType[_0x1f0713(0x268)] || YYGGames['getAdPlatformType']() == AdPlatformType['en_XIAOMI']) {
                let _0x5b810e = new Laya[(_0x1f0713(0x26b))]();
                return _0x5b810e['setSize'] = function () {
                }, _0x5b810e;
            }
            if (!this['_scrollList']) {
                this[_0x1f0713(0x296)] = new Laya['Image'](), this[_0x1f0713(0x296)][_0x1f0713(0x291)] = _0x1f0713(0x296), this['_scrollList']['skin'] = _0x1f0713(0x29a), this[_0x1f0713(0x296)][_0x1f0713(0x2d6)] = _0x1f0713(0x2a1), this['_scrollList'][_0x1f0713(0x293)](0x384, 0xbe), this[_0x1f0713(0x296)][_0x1f0713(0x24b)] = 0x30d3f, this[_0x1f0713(0x296)][_0x1f0713(0x2b2)] = 0x0, this['_scrollList']['sizeArr'] = [
                    0xc8,
                    0x96,
                    ![],
                    !![]
                ];
                class _0x506164 extends Laya[_0x1f0713(0x26b)] {
                    constructor() {
                        const _0x28d163 = _0x1f0713;
                        super(), this['centerY'] = 0x0, this[_0x28d163(0x290)] = new Laya[(_0x28d163(0x248))](), this[_0x28d163(0x290)][_0x28d163(0x291)] = _0x28d163(0x290), this[_0x28d163(0x290)]['anchorX'] = this[_0x28d163(0x290)]['anchorY'] = 0.5, this['size'](0xdc, 0xaa), this[_0x28d163(0x290)][_0x28d163(0x293)](0xc8, 0x96), this['addChild'](this['img']), this[_0x28d163(0x2df)] = new Laya[(_0x28d163(0x248))](), this[_0x28d163(0x2df)][_0x28d163(0x2d6)] = _0x28d163(0x2a1), this[_0x28d163(0x2df)]['name'] = _0x28d163(0x2df), this[_0x28d163(0x2df)][_0x28d163(0x2d4)] = this['imgMask'][_0x28d163(0x2d7)] = 0.5, this['imgMask'][_0x28d163(0x2d0)] = _0x28d163(0x2a0), this[_0x28d163(0x2df)]['size'](0xc8, 0x96), this[_0x28d163(0x290)][_0x28d163(0x2a2)] = this[_0x28d163(0x2df)], this[_0x28d163(0x290)][_0x28d163(0x2d8)](this[_0x28d163(0x283)] / 0x2, this['height'] / 0x2), this[_0x28d163(0x2df)][_0x28d163(0x2d8)](this['img'][_0x28d163(0x283)] / 0x2, this['img'][_0x28d163(0x284)] / 0x2);
                    }
                }
                let _0x3b0fbd = new Laya[(_0x1f0713(0x297))]();
                _0x3b0fbd[_0x1f0713(0x2e0)] = '\x20', _0x3b0fbd['name'] = _0x1f0713(0x2e1), _0x3b0fbd[_0x1f0713(0x2d4)] = _0x3b0fbd[_0x1f0713(0x2d7)] = 0.5, _0x3b0fbd[_0x1f0713(0x293)](0x370, 0xaa), _0x3b0fbd[_0x1f0713(0x2ac)][_0x1f0713(0x2ad)] = ![], _0x3b0fbd[_0x1f0713(0x2ac)][_0x1f0713(0x2ae)] = ![], _0x3b0fbd['scrollBar'][_0x1f0713(0x2af)] = ![], _0x3b0fbd[_0x1f0713(0x294)] = _0x506164, _0x3b0fbd[_0x1f0713(0x2a7)] = new Laya['Handler'](this, this[_0x1f0713(0x2e2)]), this[_0x1f0713(0x296)][_0x1f0713(0x25d)](_0x3b0fbd), _0x3b0fbd[_0x1f0713(0x2d8)](this[_0x1f0713(0x296)][_0x1f0713(0x283)] / 0x2, this[_0x1f0713(0x296)]['height'] / 0x2);
                let _0x350058 = _0x1871ac[_0x1f0713(0x21e)]()[_0x1f0713(0x244)]();
                if (!_0x350058[_0x1f0713(0x202)])
                    return;
                let _0x3ca245 = JSON['parse'](JSON['stringify'](_0x350058));
                _0x3ca245 = _0x3ca245['concat'](_0x3ca245[_0x1f0713(0x2b1)](0x0, 0x4)), _0x3b0fbd[_0x1f0713(0x2b3)] = _0x3ca245, Laya['timer'][_0x1f0713(0x2b8)](0x1, this, this[_0x1f0713(0x2b4)]), Laya[_0x1f0713(0x1cc)][_0x1f0713(0x2e3)](0x64, this, () => {
                    const _0x310224 = _0x1f0713;
                    _0x3b0fbd[_0x310224(0x2e4)]();
                }), this['_scrollList']['visible'] = ![], this[_0x1f0713(0x296)][_0x1f0713(0x295)] = this[_0x1f0713(0x295)][_0x1f0713(0x1c2)](this[_0x1f0713(0x296)]);
            }
            return this['_scrollList'];
        }
        [_0x3cb5c0(0x2e2)](_0xe586fb, _0x2c1a86) {
            const _0x32ba1b = _0x3cb5c0;
            let _0x116164 = _0xe586fb[_0x32ba1b(0x2e5)], _0x25fef9 = _0xe586fb[_0x32ba1b(0x282)](_0x32ba1b(0x290)), _0x220b67 = _0x25fef9[_0x32ba1b(0x2a2)];
            _0x25fef9[_0x32ba1b(0x2d0)] = _0x116164[_0x32ba1b(0x292)];
            this[_0x32ba1b(0x296)][_0x32ba1b(0x2de)][0x3] && (_0xe586fb[_0x32ba1b(0x293)](0xdc, 0xaa), _0xe586fb[_0x32ba1b(0x290)][_0x32ba1b(0x293)](0xc8, 0x96), _0x220b67[_0x32ba1b(0x293)](0xc8, 0x96), _0xe586fb[_0x32ba1b(0x1d4)](0x1, 0x1), _0xe586fb['scale'](0x1, 0x1), _0x220b67[_0x32ba1b(0x1d4)](0x1, 0x1));
            _0xe586fb[_0x32ba1b(0x2b5)](), _0x25fef9[_0x32ba1b(0x2b5)](), _0xe586fb['on'](Laya[_0x32ba1b(0x25e)]['MOUSE_OVER'], _0xe586fb, () => {
                const _0x69b7af = _0x32ba1b;
                _0xe586fb[_0x69b7af(0x24b)] = 0x64;
            }), _0xe586fb['on'](Laya[_0x32ba1b(0x25e)][_0x32ba1b(0x2b7)], _0xe586fb, () => {
                _0xe586fb['zOrder'] = _0x2c1a86;
            }), _0x25fef9['on'](Laya[_0x32ba1b(0x25e)][_0x32ba1b(0x2b6)], _0xe586fb, () => {
                const _0x1ee598 = _0x32ba1b;
                _0x25fef9[_0x1ee598(0x1d4)](_0x25fef9[_0x1ee598(0x2e6)] + 0.1, _0x25fef9[_0x1ee598(0x2e7)] + 0.1), this['endAni']();
            }), _0x25fef9['on'](Laya[_0x32ba1b(0x25e)][_0x32ba1b(0x2b7)], _0xe586fb, () => {
                const _0x3b1c9a = _0x32ba1b;
                _0x25fef9['scale'](_0x25fef9[_0x3b1c9a(0x2e6)] - 0.1, _0x25fef9[_0x3b1c9a(0x2e7)] - 0.1), Laya[_0x3b1c9a(0x1cc)][_0x3b1c9a(0x2b8)](0x1, this, this['loopList']);
            }), _0x25fef9['on'](Laya[_0x32ba1b(0x25e)]['MOUSE_DOWN'], _0xe586fb, _0x1736d6 => {
                const _0x415a6f = _0x32ba1b;
                _0x1736d6[_0x415a6f(0x260)](), _0x1871ac['getInstance']()[_0x415a6f(0x225)](_0x415a6f(0x261), _0x415a6f(0x2b9), _0x116164['id']);
            });
            let _0x491bf6 = 0xc8;
            this['_scrollList'][_0x32ba1b(0x2de)][0x0] / 0xc8 > this[_0x32ba1b(0x296)][_0x32ba1b(0x2de)][0x1] / 0x96 ? _0x491bf6 = this['_scrollList'][_0x32ba1b(0x2de)][0x0] / 0xc8 : _0x491bf6 = this[_0x32ba1b(0x296)][_0x32ba1b(0x2de)][0x1] / 0x96;
            let _0x4f474e = 0xc8, _0x4f68b3 = 0xc8 * this[_0x32ba1b(0x296)]['sizeArr'][0x1] / this['_scrollList'][_0x32ba1b(0x2de)][0x0];
            _0xe586fb[_0x32ba1b(0x293)](_0x4f474e + 0x14, _0x4f68b3 + 0x14), _0x220b67['size'](_0x4f474e, _0x4f68b3), !this[_0x32ba1b(0x296)]['sizeArr'][0x2] ? _0xe586fb[_0x32ba1b(0x290)][_0x32ba1b(0x293)](_0x4f474e, _0x4f68b3) : (leftAd[_0x32ba1b(0x293)](0xc8 * _0x491bf6, 0x96 * _0x491bf6), rightAd[_0x32ba1b(0x293)](0xc8 * _0x491bf6, 0x96 * _0x491bf6)), _0x25fef9[_0x32ba1b(0x2d8)](_0xe586fb[_0x32ba1b(0x283)] / 0x2, _0xe586fb[_0x32ba1b(0x284)] / 0x2), _0x220b67[_0x32ba1b(0x2d8)](_0x25fef9[_0x32ba1b(0x283)] / 0x2, _0x25fef9[_0x32ba1b(0x284)] / 0x2);
        }
        [_0x3cb5c0(0x2bb)]() {
            const _0x5074ae = _0x3cb5c0;
            Laya['timer'][_0x5074ae(0x2bc)](this, this[_0x5074ae(0x2b4)]);
        }
        ['loopList']() {
            const _0x9fc59f = _0x3cb5c0;
            if (!this[_0x9fc59f(0x296)]) {
                this[_0x9fc59f(0x2bb)]();
                return;
            }
            let _0x3c7dfb = this[_0x9fc59f(0x296)][_0x9fc59f(0x282)](_0x9fc59f(0x2e1));
            _0x3c7dfb[_0x9fc59f(0x2ac)][_0x9fc59f(0x1fe)] += 0x1, _0x3c7dfb[_0x9fc59f(0x2ac)][_0x9fc59f(0x1fe)] >= _0x3c7dfb[_0x9fc59f(0x2ac)][_0x9fc59f(0x2ba)] && (_0x3c7dfb[_0x9fc59f(0x2ac)][_0x9fc59f(0x1fe)] = 0x0);
        }
        [_0x3cb5c0(0x2e8)](_0x109bb8) {
            const _0xe10d00 = _0x3cb5c0;
            if (_0x109bb8['name'] == _0xe10d00(0x2d2)) {
                let _0x5d38a7 = _0x109bb8[_0xe10d00(0x282)]('leftAdBg'), _0x145579 = _0x109bb8['getChildByName'](_0xe10d00(0x2dc)), _0xe48f6c = _0x1871ac[_0xe10d00(0x21e)]()['getForgames']();
                if (!_0xe48f6c[_0xe10d00(0x202)])
                    return;
                let _0x57f5bd = JSON[_0xe10d00(0x1e1)](JSON[_0xe10d00(0x2a9)](_0xe48f6c));
                _0x5d38a7['offAll'](), _0x145579['offAll'](), _0x5d38a7[_0xe10d00(0x282)](_0xe10d00(0x2dd))['skin'] = _0x57f5bd[0x0]['thumb'], _0x145579['getChildByName']('rightAd')[_0xe10d00(0x2d0)] = _0x57f5bd[0x1][_0xe10d00(0x292)], _0x5d38a7['on'](Laya[_0xe10d00(0x25e)][_0xe10d00(0x25f)], _0x109bb8, _0xd4be23 => {
                    const _0x15896c = _0xe10d00;
                    _0xd4be23['stopPropagation'](), _0x1871ac[_0x15896c(0x21e)]()[_0x15896c(0x225)]('GAME', _0x15896c(0x2b9), _0x57f5bd[0x0]['id']);
                }), _0x145579['on'](Laya[_0xe10d00(0x25e)][_0xe10d00(0x25f)], _0x109bb8, _0x58dfb7 => {
                    const _0xa683e2 = _0xe10d00;
                    _0x58dfb7[_0xa683e2(0x260)](), _0x1871ac['getInstance']()[_0xa683e2(0x225)]('GAME', _0xa683e2(0x2b9), _0x57f5bd[0x1]['id']);
                });
            }
        }
        [_0x3cb5c0(0x2c0)](_0x3f49bc) {
            const _0x2b2632 = _0x3cb5c0;
            if (this[_0x2b2632(0x291)] == '_box_adTwo0') {
                let _0x59ffda = this['getChildByName'](_0x2b2632(0x2db)), _0x1f7dc6 = this[_0x2b2632(0x282)](_0x2b2632(0x2dc));
                _0x1f7dc6[_0x2b2632(0x2d8)](_0x59ffda[_0x2b2632(0x283)] + _0x3f49bc, 0x0), this['width'] = _0x59ffda[_0x2b2632(0x283)] + _0x1f7dc6[_0x2b2632(0x283)] + _0x3f49bc, this[_0x2b2632(0x2d5)] = _0x3f49bc;
            }
        }
    }
}());
function _0x5af8(_0x3d4f72, _0x1354a0) {
    const _0x2454e7 = _0x2454();
    return _0x5af8 = function (_0x5af885, _0x4e20b6) {
        _0x5af885 = _0x5af885 - 0x1a7;
        let _0x3398a5 = _0x2454e7[_0x5af885];
        return _0x3398a5;
    }, _0x5af8(_0x3d4f72, _0x1354a0);
}
function _0x2454() {
    const _0xbbebd4 = [
        '5438885gCXwHY',
        '54066Gyeqbb',
        '301lhVrTo',
        '8917288LONwGe',
        '9BsDrHM',
        '20PDvObu',
        '4797353ECfByi',
        '41307876rXDFnS',
        'beEnabled',
        'isMuted',
        'bePauseMusic',
        'isVisibilityMuted',
        'adShowing',
        'init',
        'musicAudio',
        'soundAudio',
        'document',
        'mousedown',
        'tryToResumeAudioContext',
        'addEventListener',
        'touchstart',
        'visibilitychange',
        'onVisibilitychange',
        'bind',
        'getContext',
        'onstatechange',
        'onMusicStatechange',
        'musicVolume',
        'isFocusOn',
        'log',
        'Web\x20Audio\x20API\x20is\x20not\x20supported\x20in\x20this\x20browser',
        'hidden',
        'muted',
        'timer',
        'stage',
        'renderingEnabled',
        'updateTimer',
        'pause',
        'physicsTimer',
        'visibilityState',
        'visible',
        'scale',
        'resume',
        'onDBInstanceMuted',
        'isSuspend',
        'removeEventListener',
        'tryToResumeIntervalId',
        'onSoundStatechange',
        'bePauseSound',
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
        'volume',
        '_audioInstances',
        '_musicVolume',
        'AudioContext',
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
        'gain',
        'value',
        'ended',
        'WebAudioEngine',
        'error',
        'length',
        'setThreeD',
        'threeD',
        'createGain',
        'createBufferSource',
        'setupPanning',
        'panner',
        'connect',
        'url',
        'createSoundInstance',
        'set',
        'decodeAudioData',
        'open',
        'responseType',
        'arraybuffer',
        'onload',
        'status',
        'response',
        'onerror',
        'no\x20response',
        'ontimeout',
        'send',
        'canNavigateActive_',
        'screen_',
        'to_',
        'initialized_',
        'needStartUp',
        'initData',
        'getInstance',
        '_instance',
        'getElementById',
        'layaCanvas',
        'mouseup',
        'touchend',
        'onNavigate_',
        'navigate',
        'action_',
        'getStorageSync',
        'getItem',
        'setStorageSync',
        'LocalStorage',
        'onblur',
        'showInterstitial',
        'onfocus',
        'showReward',
        'canShowReward',
        'prompt',
        'No\x20Available\x20Video',
        'Pls\x20watch\x20the\x20ad\x20completely,\x20so\x20that\x20you\x20can\x20claim\x20your\x20reward',
        'initList',
        'prompt_',
        'createElement',
        'div',
        'overflow:\x20hidden;word-break:\x20break-all;word-wrap:\x20break-word;font-family:siyuan;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;',
        'body',
        'appendChild',
        'designHeight',
        'innerWidth',
        'innerHeight',
        'style',
        'display',
        'inline',
        'opacity',
        'webkitTransition',
        's\x20ease-in,\x20opacity\x20',
        's\x20ease-in',
        'getForgames',
        'forgames',
        'random',
        'createLogo',
        'Image',
        'yad',
        'yad.png',
        'zOrder',
        'yadstartup',
        'showSplash',
        'createNoVideo',
        'createLoading',
        'then',
        'SoundManager',
        'stopMusic',
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
        'puzzlegamestartup',
        'en_GAMEDISTRIBUTION',
        'Prefab',
        'Script',
        'Box',
        'laya/pages/Prefab/NoVideo.prefab',
        'Box(NoVideo)',
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
        'No\x20Video\x20Available',
        'Label(NoVideo)',
        'Click\x20anywhere\x20to\x20close',
        'onEnable',
        'owner',
        'top',
        'bottom',
        'left',
        'right',
        'getChildByName',
        'width',
        'height',
        'CLICK',
        'closePer',
        'closeNoVideo',
        'noVideoPer',
        'Box,box_clickLayer',
        'box_clickLayer',
        'LOADING\x5cnPLEASE\x20WAIT…',
        'json',
        'loadingPer',
        'addComponent',
        'showLoading',
        'img',
        'name',
        'thumb',
        'size',
        'itemRender',
        'setSize',
        '_scrollList',
        'List',
        'scrollAdList',
        'Image,img_ListBg',
        '',
        '30,\x2030,\x2030,\x2030',
        'render',
        'laya/pages/prefab/scrollList.prefab',
        'Box(scrollList)',
        'Image,thumb',
        '',
        '30,30,30,30',
        'mask',
        'Image(scrollList)',
        'imgArr',
        'scaleNum',
        'img_ListBg',
        'renderHandler',
        'itemRenderFun',
        'stringify',
        'clearRes',
        'sizeTran',
        'scrollBar',
        'mouseWheelEnable',
        'mouseEnabled',
        'touchScrollEnable',
        'listArray',
        'slice',
        'centerX',
        'array',
        'loopList',
        'offAll',
        'MOUSE_OVER',
        'MOUSE_OUT',
        'frameLoop',
        'MORE',
        'max',
        'endAni',
        'clearAll',
        'Tween',
        'checkPoints',
        'getComponent',
        'setSpaceX',
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
        'spaceNum',
        'img_ad0Ad',
        'img_ad1Ad',
        'img_ad0AdMask',
        'img_ad1AdMask',
        'skin',
        'platform',
        '_box_adTwo0',
        '_inst',
        'anchorX',
        'spaceXNum',
        'sizeGrid',
        'anchorY',
        'pos',
        'rightAdMask',
        'rightAd',
        'leftAdBg',
        'rightAdBg',
        'leftAd',
        'sizeArr',
        'imgMask',
        'hScrollBarSkin',
        'listAd',
        'renderADHandler',
        'once',
        'refresh',
        'dataSource',
        'scaleX',
        'scaleY',
        'visibleChangeFun',
        '1XLNmcJ',
        '414766yLvHAj',
        '3pVBYGB',
        '5159512sBucCc'
    ];
    _0x2454 = function () {
        return _0xbbebd4;
    };
    return _0x2454();
}