var _0x5d1781 = _0x3f20;
function _0x3f20(_0x5d3f0e, _0x4646c3) {
    var _0x4cc4ea = _0x4cc4();
    return _0x3f20 = function (_0x3f2004, _0x1823dc) {
        _0x3f2004 = _0x3f2004 - 0x185;
        var _0x479c7e = _0x4cc4ea[_0x3f2004];
        return _0x479c7e;
    }, _0x3f20(_0x5d3f0e, _0x4646c3);
}
(function (_0x55e3c8, _0x6b10aa) {
    var _0x11f44b = _0x3f20, _0x30b18a = _0x55e3c8();
    while (!![]) {
        try {
            var _0x178404 = parseInt(_0x11f44b(0x185)) / 0x1 + parseInt(_0x11f44b(0x186)) / 0x2 + -parseInt(_0x11f44b(0x187)) / 0x3 + -parseInt(_0x11f44b(0x188)) / 0x4 * (-parseInt(_0x11f44b(0x189)) / 0x5) + parseInt(_0x11f44b(0x18a)) / 0x6 + -parseInt(_0x11f44b(0x18b)) / 0x7 * (-parseInt(_0x11f44b(0x18c)) / 0x8) + -parseInt(_0x11f44b(0x18d)) / 0x9;
            if (_0x178404 === _0x6b10aa)
                break;
            else
                _0x30b18a['push'](_0x30b18a['shift']());
        } catch (_0x41129a) {
            _0x30b18a['push'](_0x30b18a['shift']());
        }
    }
}(_0x4cc4, 0x3fea9));
var _global = function () {
    var _0x86a57c = _0x3f20;
    try {
        return Function('return\x20this')() || (0x2a, eval)('this');
    } catch (_0x576bfa) {
        return typeof window === _0x86a57c(0x18e) && window[_0x86a57c(0x18f)] === window ? window : typeof self === 'object' && self['self'] === self ? self : typeof global === _0x86a57c(0x18e) && global[_0x86a57c(0x190)] === global ? global : this;
    }
}();
function bom(_0x306ba6, _0x19e1dc) {
    var _0x2bf40b = _0x3f20;
    if (typeof _0x19e1dc === _0x2bf40b(0x191))
        _0x19e1dc = { 'autoBom': ![] };
    else
        typeof _0x19e1dc !== _0x2bf40b(0x18e) && (console[_0x2bf40b(0x192)](_0x2bf40b(0x193)), _0x19e1dc = { 'autoBom': !_0x19e1dc });
    if (_0x19e1dc[_0x2bf40b(0x194)] && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i[_0x2bf40b(0x195)](_0x306ba6['type']))
        return new Blob([
            String[_0x2bf40b(0x196)](0xfeff),
            _0x306ba6
        ], { 'type': _0x306ba6['type'] });
    return _0x306ba6;
}
function download(_0x5291c4, _0xdd5d65, _0x2a9d6b) {
    var _0xfbc913 = _0x3f20, _0x2235ff = new XMLHttpRequest();
    _0x2235ff[_0xfbc913(0x197)](_0xfbc913(0x198), _0x5291c4), _0x2235ff[_0xfbc913(0x199)] = _0xfbc913(0x19a), _0x2235ff[_0xfbc913(0x19b)] = function () {
        var _0x459158 = _0xfbc913;
        saveAs(_0x2235ff[_0x459158(0x19c)], _0xdd5d65, _0x2a9d6b);
    }, _0x2235ff[_0xfbc913(0x19d)] = function () {
        var _0x43b06a = _0xfbc913;
        console[_0x43b06a(0x19e)]('could\x20not\x20download\x20file');
    }, _0x2235ff[_0xfbc913(0x19f)]();
}
function corsEnabled(_0x133848) {
    var _0x5bf275 = _0x3f20, _0x26dac2 = new XMLHttpRequest();
    return _0x26dac2[_0x5bf275(0x197)](_0x5bf275(0x1a0), _0x133848, ![]), _0x26dac2[_0x5bf275(0x19f)](), _0x26dac2[_0x5bf275(0x1a1)] >= 0xc8 && _0x26dac2[_0x5bf275(0x1a1)] <= 0x12b;
}
function click(_0x3ba51b) {
    var _0x1cee6f = _0x3f20;
    try {
        _0x3ba51b[_0x1cee6f(0x1a2)](new MouseEvent('click'));
    } catch (_0x2f820f) {
        var _0x42e897 = document[_0x1cee6f(0x1a3)](_0x1cee6f(0x1a4));
        _0x42e897[_0x1cee6f(0x1a5)](_0x1cee6f(0x1a6), !![], !![], window, 0x0, 0x0, 0x0, 0x50, 0x14, ![], ![], ![], ![], 0x0, null), _0x3ba51b[_0x1cee6f(0x1a2)](_0x42e897);
    }
}
var saveAs = _global[_0x5d1781(0x1a7)] || (typeof window !== _0x5d1781(0x18e) || window !== _global) ? function saveAs() {
} : _0x5d1781(0x1a8) in HTMLAnchorElement[_0x5d1781(0x1a9)] ? function saveAs(_0x2b05f1, _0x4ae98f, _0x32febc) {
    var _0x477a11 = _0x5d1781, _0x237cf8 = _global[_0x477a11(0x1aa)] || _global[_0x477a11(0x1ab)], _0x38c018 = document[_0x477a11(0x1ac)]('a');
    _0x4ae98f = _0x4ae98f || _0x2b05f1[_0x477a11(0x1ad)] || _0x477a11(0x1a8), _0x38c018[_0x477a11(0x1a8)] = _0x4ae98f, _0x38c018['rel'] = 'noopener', typeof _0x2b05f1 === _0x477a11(0x1ae) ? (_0x38c018[_0x477a11(0x1af)] = _0x2b05f1, _0x38c018[_0x477a11(0x1b0)] !== location[_0x477a11(0x1b0)] ? corsEnabled(_0x38c018['href']) ? download(_0x2b05f1, _0x4ae98f, _0x32febc) : click(_0x38c018, _0x38c018[_0x477a11(0x1b1)] = _0x477a11(0x1b2)) : click(_0x38c018)) : (_0x38c018['href'] = _0x237cf8[_0x477a11(0x1b3)](_0x2b05f1), setTimeout(function () {
        var _0x2d627a = _0x477a11;
        _0x237cf8[_0x2d627a(0x1b4)](_0x38c018[_0x2d627a(0x1af)]);
    }, 0x9c40), setTimeout(function () {
        click(_0x38c018);
    }, 0x0));
} : _0x5d1781(0x1b5) in navigator ? function saveAs(_0x172137, _0x55d4bb, _0x474a06) {
    var _0x4a3843 = _0x5d1781;
    _0x55d4bb = _0x55d4bb || _0x172137[_0x4a3843(0x1ad)] || _0x4a3843(0x1a8);
    if (typeof _0x172137 === _0x4a3843(0x1ae)) {
        if (corsEnabled(_0x172137))
            download(_0x172137, _0x55d4bb, _0x474a06);
        else {
            var _0x4581ae = document[_0x4a3843(0x1ac)]('a');
            _0x4581ae[_0x4a3843(0x1af)] = _0x172137, _0x4581ae['target'] = _0x4a3843(0x1b2), setTimeout(function () {
                clikc(_0x4581ae);
            });
        }
    } else
        navigator[_0x4a3843(0x1b5)](bom(_0x172137, _0x474a06), _0x55d4bb);
} : function saveAs(_0x41010c, _0x1d31b2, _0x3cf7c9, _0x4b58fa) {
    var _0x4cbc31 = _0x5d1781;
    _0x4b58fa = _0x4b58fa || open('', _0x4cbc31(0x1b2));
    _0x4b58fa && (_0x4b58fa[_0x4cbc31(0x1b6)][_0x4cbc31(0x1b7)] = _0x4b58fa[_0x4cbc31(0x1b6)][_0x4cbc31(0x1b8)][_0x4cbc31(0x1b9)] = _0x4cbc31(0x1ba));
    if (typeof _0x41010c === 'string')
        return download(_0x41010c, _0x1d31b2, _0x3cf7c9);
    var _0x201f5a = _0x41010c[_0x4cbc31(0x1bb)] === _0x4cbc31(0x1bc), _0x530649 = /constructor/i['test'](_global[_0x4cbc31(0x1bd)]) || _global[_0x4cbc31(0x1be)], _0x1c82cc = /CriOS\/[\d]+/[_0x4cbc31(0x195)](navigator[_0x4cbc31(0x1bf)]);
    if ((_0x1c82cc || _0x201f5a && _0x530649) && typeof FileReader === _0x4cbc31(0x18e)) {
        var _0x1c5d18 = new FileReader();
        _0x1c5d18[_0x4cbc31(0x1c0)] = function () {
            var _0x5c368f = _0x4cbc31, _0x39a378 = _0x1c5d18[_0x5c368f(0x1c1)];
            _0x39a378 = _0x1c82cc ? _0x39a378 : _0x39a378[_0x5c368f(0x1c2)](/^data:[^;]*;/, 'data:attachment/file;');
            if (_0x4b58fa)
                _0x4b58fa['location'][_0x5c368f(0x1af)] = _0x39a378;
            else
                location = _0x39a378;
            _0x4b58fa = null;
        }, _0x1c5d18[_0x4cbc31(0x1c3)](_0x41010c);
    } else {
        var _0x41cdb6 = _global[_0x4cbc31(0x1aa)] || _global[_0x4cbc31(0x1ab)], _0x4a46e1 = _0x41cdb6[_0x4cbc31(0x1b3)](_0x41010c);
        if (_0x4b58fa)
            _0x4b58fa['location'] = _0x4a46e1;
        else
            location['href'] = _0x4a46e1;
        _0x4b58fa = null, setTimeout(function () {
            var _0xa6174d = _0x4cbc31;
            _0x41cdb6[_0xa6174d(0x1b4)](_0x4a46e1);
        }, 0x9c40);
    }
};
function _0x4cc4() {
    var _0x1f338f = [
        'revokeObjectURL',
        'msSaveOrOpenBlob',
        'document',
        'title',
        'body',
        'innerText',
        'downloading...',
        'type',
        'application/octet-stream',
        'HTMLElement',
        'safari',
        'userAgent',
        'onloadend',
        'result',
        'replace',
        'readAsDataURL',
        'function',
        'amd',
        'laya.core',
        'require',
        'exports',
        '__esModule',
        '__isclass',
        'once',
        '_id',
        'setTo',
        '_gid',
        'args',
        'run',
        'method',
        'apply',
        'caller',
        'recover',
        'runWith',
        'unshift',
        'call',
        'concat',
        '_pool',
        'push',
        'clear',
        'length',
        'pop',
        'hasListener',
        '_events',
        'event',
        'splice',
        '_createListener',
        'offAll',
        '_recoverHandlers',
        'offAllCaller',
        'off',
        'create',
        'readAsText',
        'DONE',
        'readyState',
        '.json',
        'createFileButton',
        'input',
        'style',
        'width:150px;height:60px;',
        'top',
        'left',
        'file',
        'absolute',
        'onchange',
        'files',
        '_classMap',
        'uiView',
        'split',
        'save',
        'stringify',
        'readui',
        'loader',
        'views/collectionViewUI.scene',
        'views/loadingViewUI.scene',
        'views/rewardDialogUI.scene',
        'Handler',
        'ClassUtils',
        'getRes',
        '.scene',
        'htmlfs',
        '75949XzHAOa',
        '509412oOaPzn',
        '968232xOhReX',
        '4AbNRtq',
        '281285BbZDFr',
        '1521030fZKeeK',
        '7YOMYGw',
        '2853688igRbjw',
        '3713247NoCIPL',
        'object',
        'window',
        'global',
        'undefined',
        'warn',
        'Depricated:\x20Expected\x20third\x20argument\x20to\x20be\x20a\x20object',
        'autoBom',
        'test',
        'fromCharCode',
        'open',
        'GET',
        'responseType',
        'blob',
        'onload',
        'response',
        'onerror',
        'error',
        'send',
        'HEAD',
        'status',
        'dispatchEvent',
        'createEvent',
        'MouseEvents',
        'initMouseEvent',
        'click',
        'saveAs',
        'download',
        'prototype',
        'URL',
        'webkitURL',
        'createElement',
        'name',
        'string',
        'href',
        'origin',
        'target',
        '_blank',
        'createObjectURL'
    ];
    _0x4cc4 = function () {
        return _0x1f338f;
    };
    return _0x4cc4();
}
typeof define === _0x5d1781(0x1c4) && define[_0x5d1781(0x1c5)] && define(_0x5d1781(0x1c6), [
    _0x5d1781(0x1c7),
    _0x5d1781(0x1c8)
], function (_0xc6d31b, _0x3a4e8e) {
    'use strict';
    var _0x1812a1 = _0x5d1781;
    Object['defineProperty'](_0x3a4e8e, _0x1812a1(0x1c9), { 'value': !![] });
    for (var _0x146585 in Laya) {
        var _0xde8fd1 = Laya[_0x146585];
        _0xde8fd1 && _0xde8fd1[_0x1812a1(0x1ca)] && (_0x3a4e8e[_0x146585] = _0xde8fd1);
    }
});
(function () {
    'use strict';
    var _0x3df01f = _0x5d1781;
    class _0x1d6891 {
        constructor(_0x31e117, _0x1fa261, _0x235948, _0x29480d) {
            var _0xac7b66 = _0x3f20;
            this[_0xac7b66(0x1cb)] = ![], this[_0xac7b66(0x1cc)] = 0x0, this[_0xac7b66(0x1cd)](_0x31e117, _0x1fa261, _0x235948, _0x29480d);
        }
        [_0x3df01f(0x1cd)](_0x2a5525, _0x3c4e9d, _0x134e3f, _0x4ddb8a) {
            var _0x4d0348 = _0x3df01f;
            return this[_0x4d0348(0x1cc)] = _0x1d6891[_0x4d0348(0x1ce)]++, this['caller'] = _0x2a5525, this['method'] = _0x3c4e9d, this[_0x4d0348(0x1cf)] = _0x134e3f, this[_0x4d0348(0x1cb)] = _0x4ddb8a, this;
        }
        [_0x3df01f(0x1d0)]() {
            var _0x3ffe9c = _0x3df01f;
            if (this[_0x3ffe9c(0x1d1)] == null)
                return null;
            var _0x415340 = this[_0x3ffe9c(0x1cc)], _0x559051 = this['method'][_0x3ffe9c(0x1d2)](this[_0x3ffe9c(0x1d3)], this['args']);
            return this['_id'] === _0x415340 && this[_0x3ffe9c(0x1cb)] && this[_0x3ffe9c(0x1d4)](), _0x559051;
        }
        [_0x3df01f(0x1d5)](_0x1348b3) {
            var _0x1b54d2 = _0x3df01f;
            if (this[_0x1b54d2(0x1d1)] == null)
                return null;
            var _0x230469 = this[_0x1b54d2(0x1cc)];
            if (_0x1348b3 == null)
                var _0x217056 = this[_0x1b54d2(0x1d1)][_0x1b54d2(0x1d2)](this[_0x1b54d2(0x1d3)], this[_0x1b54d2(0x1cf)]);
            else {
                if (!this[_0x1b54d2(0x1cf)] && !_0x1348b3[_0x1b54d2(0x1d6)])
                    _0x217056 = this[_0x1b54d2(0x1d1)][_0x1b54d2(0x1d7)](this[_0x1b54d2(0x1d3)], _0x1348b3);
                else {
                    if (this[_0x1b54d2(0x1cf)])
                        _0x217056 = this['method'][_0x1b54d2(0x1d2)](this['caller'], this['args'][_0x1b54d2(0x1d8)](_0x1348b3));
                    else
                        _0x217056 = this['method'][_0x1b54d2(0x1d2)](this[_0x1b54d2(0x1d3)], _0x1348b3);
                }
            }
            return this[_0x1b54d2(0x1cc)] === _0x230469 && this[_0x1b54d2(0x1cb)] && this[_0x1b54d2(0x1d4)](), _0x217056;
        }
        ['clear']() {
            var _0x2118dc = _0x3df01f;
            return this[_0x2118dc(0x1d3)] = null, this[_0x2118dc(0x1d1)] = null, this[_0x2118dc(0x1cf)] = null, this;
        }
        [_0x3df01f(0x1d4)]() {
            var _0x2fd1ac = _0x3df01f;
            this[_0x2fd1ac(0x1cc)] > 0x0 && (this[_0x2fd1ac(0x1cc)] = 0x0, _0x1d6891[_0x2fd1ac(0x1d9)][_0x2fd1ac(0x1da)](this[_0x2fd1ac(0x1db)]()));
        }
        static ['create'](_0x5d1f1e, _0x12356c, _0x4d1a25 = null, _0x47a475 = !![]) {
            var _0x385aca = _0x3df01f;
            if (_0x1d6891[_0x385aca(0x1d9)][_0x385aca(0x1dc)])
                return _0x1d6891[_0x385aca(0x1d9)][_0x385aca(0x1dd)]()[_0x385aca(0x1cd)](_0x5d1f1e, _0x12356c, _0x4d1a25, _0x47a475);
            return new _0x1d6891(_0x5d1f1e, _0x12356c, _0x4d1a25, _0x47a475);
        }
    }
    _0x1d6891[_0x3df01f(0x1d9)] = [], _0x1d6891[_0x3df01f(0x1ce)] = 0x1;
    class _0x1fe381 {
        [_0x3df01f(0x1de)](_0x2d1d83) {
            var _0x39a250 = _0x3df01f, _0x12f397 = this[_0x39a250(0x1df)] && this[_0x39a250(0x1df)][_0x2d1d83];
            return !!_0x12f397;
        }
        [_0x3df01f(0x1e0)](_0x33aba3, _0x4ef4ad) {
            var _0x382998 = _0x3df01f;
            if (!this['_events'] || !this[_0x382998(0x1df)][_0x33aba3])
                return ![];
            var _0x4a523c = this[_0x382998(0x1df)][_0x33aba3];
            if (_0x4a523c[_0x382998(0x1d0)]) {
                if (_0x4a523c[_0x382998(0x1cb)])
                    delete this[_0x382998(0x1df)][_0x33aba3];
                _0x4ef4ad != null ? _0x4a523c[_0x382998(0x1d5)](_0x4ef4ad) : _0x4a523c['run']();
            } else {
                for (var _0x491fe1 = 0x0, _0x258ee7 = _0x4a523c[_0x382998(0x1dc)]; _0x491fe1 < _0x258ee7; _0x491fe1++) {
                    var _0x4fb048 = _0x4a523c[_0x491fe1];
                    _0x4fb048 && (_0x4ef4ad != null ? _0x4fb048[_0x382998(0x1d5)](_0x4ef4ad) : _0x4fb048[_0x382998(0x1d0)]()), (!_0x4fb048 || _0x4fb048['once']) && (_0x4a523c[_0x382998(0x1e1)](_0x491fe1, 0x1), _0x491fe1--, _0x258ee7--);
                }
                if (_0x4a523c[_0x382998(0x1dc)] === 0x0 && this['_events'])
                    delete this['_events'][_0x33aba3];
            }
            return !![];
        }
        ['on'](_0x2a2127, _0x17129f, _0x208bf6, _0x4a71af) {
            var _0x5ecf52 = _0x3df01f;
            return this[_0x5ecf52(0x1e2)](_0x2a2127, _0x17129f, _0x208bf6, _0x4a71af, ![]);
        }
        ['once'](_0x5f438a, _0x9899ad, _0x51defb, _0x1c742e) {
            return this['_createListener'](_0x5f438a, _0x9899ad, _0x51defb, _0x1c742e, !![]);
        }
        ['off'](_0xfa1460, _0x28a392, _0x4eb02c, _0x565ab7) {
            var _0x2526e7 = _0x3df01f;
            if (!this[_0x2526e7(0x1df)] || !this[_0x2526e7(0x1df)][_0xfa1460])
                return this;
            var _0x428b52 = this[_0x2526e7(0x1df)][_0xfa1460];
            if (_0x428b52 != null) {
                if (_0x428b52['run'])
                    (!_0x28a392 || _0x428b52[_0x2526e7(0x1d3)] === _0x28a392) && (_0x4eb02c == null || _0x428b52[_0x2526e7(0x1d1)] === _0x4eb02c) && (!_0x565ab7 || _0x428b52[_0x2526e7(0x1cb)]) && (delete this['_events'][_0xfa1460], _0x428b52[_0x2526e7(0x1d4)]());
                else {
                    var _0x5f22e7 = 0x0;
                    for (var _0x25a031 = 0x0, _0x251782 = _0x428b52['length']; _0x25a031 < _0x251782; _0x25a031++) {
                        var _0x45312c = _0x428b52[_0x25a031];
                        if (!_0x45312c) {
                            _0x5f22e7++;
                            continue;
                        }
                        _0x45312c && (!_0x28a392 || _0x45312c['caller'] === _0x28a392) && (_0x4eb02c == null || _0x45312c[_0x2526e7(0x1d1)] === _0x4eb02c) && (!_0x565ab7 || _0x45312c['once']) && (_0x5f22e7++, _0x428b52[_0x25a031] = null, _0x45312c[_0x2526e7(0x1d4)]());
                    }
                    if (_0x5f22e7 === _0x251782)
                        delete this['_events'][_0xfa1460];
                }
            }
            return this;
        }
        [_0x3df01f(0x1e3)](_0x1d4956) {
            var _0x2dc1f9 = _0x3df01f, _0x3d5025 = this[_0x2dc1f9(0x1df)];
            if (!_0x3d5025)
                return this;
            if (_0x1d4956)
                this[_0x2dc1f9(0x1e4)](_0x3d5025[_0x1d4956]), delete _0x3d5025[_0x1d4956];
            else {
                for (var _0x227c06 in _0x3d5025) {
                    this[_0x2dc1f9(0x1e4)](_0x3d5025[_0x227c06]);
                }
                this[_0x2dc1f9(0x1df)] = null;
            }
            return this;
        }
        [_0x3df01f(0x1e5)](_0x4263b8) {
            var _0x4bd34f = _0x3df01f;
            if (_0x4263b8 && this['_events'])
                for (var _0x58df71 in this[_0x4bd34f(0x1df)]) {
                    this[_0x4bd34f(0x1e6)](_0x58df71, _0x4263b8, null);
                }
            return this;
        }
        [_0x3df01f(0x1e4)](_0x39fc78) {
            var _0x5bb27a = _0x3df01f;
            if (!_0x39fc78)
                return;
            if (_0x39fc78[_0x5bb27a(0x1d0)])
                _0x39fc78['recover']();
            else
                for (var _0x1c989e = _0x39fc78[_0x5bb27a(0x1dc)] - 0x1; _0x1c989e > -0x1; _0x1c989e--) {
                    _0x39fc78[_0x1c989e] && (_0x39fc78[_0x1c989e][_0x5bb27a(0x1d4)](), _0x39fc78[_0x1c989e] = null);
                }
        }
        ['_createListener'](_0x165d42, _0x78fa26, _0x60fa89, _0x1c9bec, _0x2e569e, _0x11d337) {
            var _0x468c08 = _0x3df01f;
            _0x11d337 && this[_0x468c08(0x1e6)](_0x165d42, _0x78fa26, _0x60fa89, _0x2e569e);
            var _0x49495e = _0x1d6891[_0x468c08(0x1e7)](_0x78fa26 || this, _0x60fa89, _0x1c9bec, _0x2e569e);
            this['_events'] || (this[_0x468c08(0x1df)] = {});
            var _0x30dd3f = this['_events'];
            if (!_0x30dd3f[_0x165d42])
                _0x30dd3f[_0x165d42] = _0x49495e;
            else {
                if (!_0x30dd3f[_0x165d42]['run'])
                    _0x30dd3f[_0x165d42][_0x468c08(0x1da)](_0x49495e);
                else
                    _0x30dd3f[_0x165d42] = [
                        _0x30dd3f[_0x165d42],
                        _0x49495e
                    ];
            }
            return this;
        }
    }
    class _0xebba0a extends _0x1fe381 {
        [_0x3df01f(0x1e8)](_0x44e073, _0x2129d9) {
            let _0x1c9789 = new FileReader();
            _0x1c9789['onload'] = function () {
                var _0x29c12a = _0x3f20;
                FileReader[_0x29c12a(0x1e9)] == _0x1c9789[_0x29c12a(0x1ea)] ? _0x2129d9 && _0x2129d9(_0x1c9789[_0x29c12a(0x1c1)]) : _0x2129d9 && _0x2129d9(null);
            }, _0x1c9789['readAsText'](_0x44e073);
        }
        ['save'](_0x2a7dc5, _0x259c27) {
            var _0x1c643a = _0x3df01f, _0x27aa70 = new Blob([_0x2a7dc5], { 'type': '' });
            saveAs(_0x27aa70, _0x259c27 + _0x1c643a(0x1eb));
        }
        [_0x3df01f(0x1ec)](_0x1d07e0, _0x50deef, _0x611780) {
            var _0x7c4eb6 = _0x3df01f;
            let _0x43ca27 = document['createElement'](_0x7c4eb6(0x1ed));
            _0x43ca27[_0x7c4eb6(0x1ee)] = _0x7c4eb6(0x1ef), _0x43ca27[_0x7c4eb6(0x1ee)][_0x7c4eb6(0x1f0)] = _0x1d07e0 + 'px', _0x43ca27[_0x7c4eb6(0x1ee)][_0x7c4eb6(0x1f1)] = _0x50deef + 'px', _0x43ca27[_0x7c4eb6(0x1bb)] = _0x7c4eb6(0x1f2), _0x43ca27[_0x7c4eb6(0x1ee)]['position'] = _0x7c4eb6(0x1f3), _0x43ca27[_0x7c4eb6(0x1f4)] = () => {
                var _0x293138 = _0x7c4eb6;
                _0x611780 && _0x611780(_0x43ca27[_0x293138(0x1f5)]);
            }, document[_0x7c4eb6(0x1b8)]['appendChild'](_0x43ca27);
        }
        async ['saveui']() {
            var _0x3b9430 = _0x3df01f, _0x2727b9 = Laya['ClassUtils'][_0x3b9430(0x1f6)];
            for (const _0x2a9ef4 in _0x2727b9) {
                const _0x3bf646 = _0x2727b9[_0x2a9ef4];
                if (_0x3bf646 && _0x3bf646[_0x3b9430(0x1f7)]) {
                    let _0xe3feb9 = _0x2a9ef4[_0x3b9430(0x1f8)]('.');
                    await new Promise(_0x510390 => {
                        setTimeout(_0x510390, 0x64);
                    }), this[_0x3b9430(0x1f9)](JSON[_0x3b9430(0x1fa)](_0x3bf646[_0x3b9430(0x1f7)]), _0xe3feb9[_0x3b9430(0x1dd)]());
                }
            }
        }
        async [_0x3df01f(0x1fb)]() {
            var _0x18f3f3 = _0x3df01f;
            await new Promise(_0x47bd4f => {
                var _0x509b25 = _0x3f20;
                Laya[_0x509b25(0x1fc)]['load']([
                    _0x509b25(0x1fd),
                    _0x509b25(0x1fe),
                    'views/reliveDialogUI.scene',
                    'views/resultDialogUI.scene',
                    _0x509b25(0x1ff)
                ], Laya[_0x509b25(0x200)][_0x509b25(0x1e7)](this, _0x47bd4f));
            });
            var _0x3003ec = Laya[_0x18f3f3(0x201)]['_classMap'];
            for (const _0x3bc0b9 in _0x3003ec) {
                const _0x50a2ee = _0x3003ec[_0x3bc0b9];
                if (_0x50a2ee && _0x50a2ee['uiView']) {
                    let _0x46322d = _0x3bc0b9[_0x18f3f3(0x1f8)]('.')[_0x18f3f3(0x1dd)]();
                    _0x50a2ee[_0x18f3f3(0x1f7)] = Laya[_0x18f3f3(0x1fc)][_0x18f3f3(0x202)]('views/' + _0x46322d + _0x18f3f3(0x203));
                }
            }
        }
    }
    window[_0x3df01f(0x204)] = new _0xebba0a();
}());