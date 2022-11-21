function _0xd6b5() {
    var _0x1455b6 = [
        'readAsDataURL',
        'createObjectURL',
        'location',
        'function',
        'require',
        '__esModule',
        '__isclass',
        'once',
        '_id',
        'setTo',
        '_gid',
        'caller',
        'method',
        'args',
        'apply',
        'recover',
        'runWith',
        'unshift',
        'call',
        'concat',
        'clear',
        '_pool',
        'push',
        'create',
        'hasListener',
        '_events',
        'event',
        'run',
        'length',
        'splice',
        '_createListener',
        'off',
        'offAll',
        '_recoverHandlers',
        'offAllCaller',
        'DONE',
        'readyState',
        'readAsText',
        'save',
        '.json',
        'createFileButton',
        'style',
        'width:150px;height:60px;',
        'left',
        'file',
        'position',
        'absolute',
        'saveui',
        'uiView',
        'split',
        'stringify',
        'pop',
        'readui',
        'loader',
        'load',
        'views/collectionViewUI.scene',
        'views/reliveDialogUI.scene',
        'views/resultDialogUI.scene',
        'Handler',
        'ClassUtils',
        '_classMap',
        'getRes',
        'views/',
        '.scene',
        'htmlfs',
        '1127323WyoSCD',
        '2tSZjXm',
        '4499676KlhIYE',
        '109844IcFkHv',
        '20PdKSww',
        '9431880pxfCrr',
        '4569250jbXjlE',
        '5801248sYVwhz',
        '414414nLSZvD',
        '230tjtRmh',
        'return\x20this',
        'this',
        'object',
        'window',
        'self',
        'undefined',
        'warn',
        'autoBom',
        'test',
        'type',
        'open',
        'GET',
        'responseType',
        'onload',
        'error',
        'send',
        'HEAD',
        'status',
        'dispatchEvent',
        'click',
        'createEvent',
        'initMouseEvent',
        'saveAs',
        'prototype',
        'URL',
        'createElement',
        'name',
        'download',
        'rel',
        'noopener',
        'string',
        'origin',
        'target',
        '_blank',
        'href',
        'revokeObjectURL',
        'msSaveOrOpenBlob',
        'title',
        'document',
        'body',
        'innerText',
        'downloading...',
        'application/octet-stream',
        'HTMLElement',
        'safari',
        'result',
        'replace',
        'data:attachment/file;'
    ];
    _0xd6b5 = function () {
        return _0x1455b6;
    };
    return _0xd6b5();
}
var _0x3999bc = _0x44cd;
(function (_0x1193c4, _0x581b4a) {
    var _0x3e6c2f = _0x44cd, _0x1ec2c6 = _0x1193c4();
    while (!![]) {
        try {
            var _0x259da4 = -parseInt(_0x3e6c2f(0x116)) / 0x1 * (parseInt(_0x3e6c2f(0x117)) / 0x2) + parseInt(_0x3e6c2f(0x118)) / 0x3 + -parseInt(_0x3e6c2f(0x119)) / 0x4 * (-parseInt(_0x3e6c2f(0x11a)) / 0x5) + parseInt(_0x3e6c2f(0x11b)) / 0x6 + parseInt(_0x3e6c2f(0x11c)) / 0x7 + -parseInt(_0x3e6c2f(0x11d)) / 0x8 + -parseInt(_0x3e6c2f(0x11e)) / 0x9 * (parseInt(_0x3e6c2f(0x11f)) / 0xa);
            if (_0x259da4 === _0x581b4a)
                break;
            else
                _0x1ec2c6['push'](_0x1ec2c6['shift']());
        } catch (_0x441fb3) {
            _0x1ec2c6['push'](_0x1ec2c6['shift']());
        }
    }
}(_0xd6b5, 0xe1531));
function _0x44cd(_0x4b7cf8, _0x40493a) {
    var _0xd6b59b = _0xd6b5();
    return _0x44cd = function (_0x44cd8b, _0x48077e) {
        _0x44cd8b = _0x44cd8b - 0x116;
        var _0x5ac724 = _0xd6b59b[_0x44cd8b];
        return _0x5ac724;
    }, _0x44cd(_0x4b7cf8, _0x40493a);
}
var _global = function () {
    var _0x2a0f44 = _0x44cd;
    try {
        return Function(_0x2a0f44(0x120))() || (0x2a, eval)(_0x2a0f44(0x121));
    } catch (_0x4bed0b) {
        return typeof window === _0x2a0f44(0x122) && window[_0x2a0f44(0x123)] === window ? window : typeof self === 'object' && self[_0x2a0f44(0x124)] === self ? self : typeof global === _0x2a0f44(0x122) && global['global'] === global ? global : this;
    }
}();
function bom(_0x1fd2bf, _0xf747a9) {
    var _0x545d2c = _0x44cd;
    if (typeof _0xf747a9 === _0x545d2c(0x125))
        _0xf747a9 = { 'autoBom': ![] };
    else
        typeof _0xf747a9 !== _0x545d2c(0x122) && (console[_0x545d2c(0x126)]('Depricated:\x20Expected\x20third\x20argument\x20to\x20be\x20a\x20object'), _0xf747a9 = { 'autoBom': !_0xf747a9 });
    if (_0xf747a9[_0x545d2c(0x127)] && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i[_0x545d2c(0x128)](_0x1fd2bf['type']))
        return new Blob([
            String['fromCharCode'](0xfeff),
            _0x1fd2bf
        ], { 'type': _0x1fd2bf[_0x545d2c(0x129)] });
    return _0x1fd2bf;
}
function download(_0x4f642a, _0x13a122, _0x453b88) {
    var _0x805659 = _0x44cd, _0x4fc6fd = new XMLHttpRequest();
    _0x4fc6fd[_0x805659(0x12a)](_0x805659(0x12b), _0x4f642a), _0x4fc6fd[_0x805659(0x12c)] = 'blob', _0x4fc6fd[_0x805659(0x12d)] = function () {
        saveAs(_0x4fc6fd['response'], _0x13a122, _0x453b88);
    }, _0x4fc6fd['onerror'] = function () {
        var _0x38b79b = _0x805659;
        console[_0x38b79b(0x12e)]('could\x20not\x20download\x20file');
    }, _0x4fc6fd[_0x805659(0x12f)]();
}
function corsEnabled(_0x14bf61) {
    var _0x956c07 = _0x44cd, _0x5b686d = new XMLHttpRequest();
    return _0x5b686d[_0x956c07(0x12a)](_0x956c07(0x130), _0x14bf61, ![]), _0x5b686d[_0x956c07(0x12f)](), _0x5b686d[_0x956c07(0x131)] >= 0xc8 && _0x5b686d[_0x956c07(0x131)] <= 0x12b;
}
function click(_0x19ba27) {
    var _0x394cf2 = _0x44cd;
    try {
        _0x19ba27[_0x394cf2(0x132)](new MouseEvent(_0x394cf2(0x133)));
    } catch (_0x4f14bc) {
        var _0x5850bc = document[_0x394cf2(0x134)]('MouseEvents');
        _0x5850bc[_0x394cf2(0x135)](_0x394cf2(0x133), !![], !![], window, 0x0, 0x0, 0x0, 0x50, 0x14, ![], ![], ![], ![], 0x0, null), _0x19ba27[_0x394cf2(0x132)](_0x5850bc);
    }
}
var saveAs = _global[_0x3999bc(0x136)] || (typeof window !== _0x3999bc(0x122) || window !== _global) ? function saveAs() {
} : 'download' in HTMLAnchorElement[_0x3999bc(0x137)] ? function saveAs(_0x6b9e70, _0x1565ef, _0x3acea1) {
    var _0x4c6d20 = _0x3999bc, _0x4a9bb5 = _global[_0x4c6d20(0x138)] || _global['webkitURL'], _0x206061 = document[_0x4c6d20(0x139)]('a');
    _0x1565ef = _0x1565ef || _0x6b9e70[_0x4c6d20(0x13a)] || _0x4c6d20(0x13b), _0x206061[_0x4c6d20(0x13b)] = _0x1565ef, _0x206061[_0x4c6d20(0x13c)] = _0x4c6d20(0x13d), typeof _0x6b9e70 === _0x4c6d20(0x13e) ? (_0x206061['href'] = _0x6b9e70, _0x206061[_0x4c6d20(0x13f)] !== location[_0x4c6d20(0x13f)] ? corsEnabled(_0x206061['href']) ? download(_0x6b9e70, _0x1565ef, _0x3acea1) : click(_0x206061, _0x206061[_0x4c6d20(0x140)] = _0x4c6d20(0x141)) : click(_0x206061)) : (_0x206061[_0x4c6d20(0x142)] = _0x4a9bb5['createObjectURL'](_0x6b9e70), setTimeout(function () {
        var _0x398d03 = _0x4c6d20;
        _0x4a9bb5[_0x398d03(0x143)](_0x206061['href']);
    }, 0x9c40), setTimeout(function () {
        click(_0x206061);
    }, 0x0));
} : _0x3999bc(0x144) in navigator ? function saveAs(_0x56ebc8, _0x2c1827, _0x2d7df1) {
    var _0x42b6c5 = _0x3999bc;
    _0x2c1827 = _0x2c1827 || _0x56ebc8[_0x42b6c5(0x13a)] || _0x42b6c5(0x13b);
    if (typeof _0x56ebc8 === _0x42b6c5(0x13e)) {
        if (corsEnabled(_0x56ebc8))
            download(_0x56ebc8, _0x2c1827, _0x2d7df1);
        else {
            var _0x280452 = document[_0x42b6c5(0x139)]('a');
            _0x280452[_0x42b6c5(0x142)] = _0x56ebc8, _0x280452['target'] = _0x42b6c5(0x141), setTimeout(function () {
                clikc(_0x280452);
            });
        }
    } else
        navigator[_0x42b6c5(0x144)](bom(_0x56ebc8, _0x2d7df1), _0x2c1827);
} : function saveAs(_0x1be006, _0xe5f08f, _0x2ce04e, _0x2a8b8e) {
    var _0x240c9b = _0x3999bc;
    _0x2a8b8e = _0x2a8b8e || open('', _0x240c9b(0x141));
    _0x2a8b8e && (_0x2a8b8e['document'][_0x240c9b(0x145)] = _0x2a8b8e[_0x240c9b(0x146)][_0x240c9b(0x147)][_0x240c9b(0x148)] = _0x240c9b(0x149));
    if (typeof _0x1be006 === _0x240c9b(0x13e))
        return download(_0x1be006, _0xe5f08f, _0x2ce04e);
    var _0x3d4cdb = _0x1be006['type'] === _0x240c9b(0x14a), _0x13668c = /constructor/i[_0x240c9b(0x128)](_global[_0x240c9b(0x14b)]) || _global[_0x240c9b(0x14c)], _0x43801e = /CriOS\/[\d]+/[_0x240c9b(0x128)](navigator['userAgent']);
    if ((_0x43801e || _0x3d4cdb && _0x13668c) && typeof FileReader === _0x240c9b(0x122)) {
        var _0x147867 = new FileReader();
        _0x147867['onloadend'] = function () {
            var _0x36a403 = _0x240c9b, _0x2ede47 = _0x147867[_0x36a403(0x14d)];
            _0x2ede47 = _0x43801e ? _0x2ede47 : _0x2ede47[_0x36a403(0x14e)](/^data:[^;]*;/, _0x36a403(0x14f));
            if (_0x2a8b8e)
                _0x2a8b8e['location']['href'] = _0x2ede47;
            else
                location = _0x2ede47;
            _0x2a8b8e = null;
        }, _0x147867[_0x240c9b(0x150)](_0x1be006);
    } else {
        var _0x2d0434 = _global[_0x240c9b(0x138)] || _global['webkitURL'], _0x3d29b7 = _0x2d0434[_0x240c9b(0x151)](_0x1be006);
        if (_0x2a8b8e)
            _0x2a8b8e[_0x240c9b(0x152)] = _0x3d29b7;
        else
            location[_0x240c9b(0x142)] = _0x3d29b7;
        _0x2a8b8e = null, setTimeout(function () {
            var _0x17e428 = _0x240c9b;
            _0x2d0434[_0x17e428(0x143)](_0x3d29b7);
        }, 0x9c40);
    }
};
typeof define === _0x3999bc(0x153) && define['amd'] && define('laya.core', [
    _0x3999bc(0x154),
    'exports'
], function (_0x55c4d5, _0x16480b) {
    'use strict';
    var _0x55e2a1 = _0x3999bc;
    Object['defineProperty'](_0x16480b, _0x55e2a1(0x155), { 'value': !![] });
    for (var _0xe69202 in Laya) {
        var _0x408151 = Laya[_0xe69202];
        _0x408151 && _0x408151[_0x55e2a1(0x156)] && (_0x16480b[_0xe69202] = _0x408151);
    }
});
(function () {
    'use strict';
    var _0xd7fe8b = _0x3999bc;
    class _0x4395c8 {
        constructor(_0x1d622f, _0x44c326, _0x1d3d74, _0x539f3d) {
            var _0x25732f = _0x44cd;
            this[_0x25732f(0x157)] = ![], this[_0x25732f(0x158)] = 0x0, this[_0x25732f(0x159)](_0x1d622f, _0x44c326, _0x1d3d74, _0x539f3d);
        }
        [_0xd7fe8b(0x159)](_0x4e65a4, _0x4804d1, _0xf3c11c, _0x88ad8) {
            var _0x2794fb = _0xd7fe8b;
            return this['_id'] = _0x4395c8[_0x2794fb(0x15a)]++, this[_0x2794fb(0x15b)] = _0x4e65a4, this[_0x2794fb(0x15c)] = _0x4804d1, this[_0x2794fb(0x15d)] = _0xf3c11c, this[_0x2794fb(0x157)] = _0x88ad8, this;
        }
        ['run']() {
            var _0x1bd589 = _0xd7fe8b;
            if (this['method'] == null)
                return null;
            var _0x26d900 = this[_0x1bd589(0x158)], _0x14364b = this[_0x1bd589(0x15c)][_0x1bd589(0x15e)](this[_0x1bd589(0x15b)], this['args']);
            return this[_0x1bd589(0x158)] === _0x26d900 && this['once'] && this[_0x1bd589(0x15f)](), _0x14364b;
        }
        [_0xd7fe8b(0x160)](_0x461025) {
            var _0x30619c = _0xd7fe8b;
            if (this[_0x30619c(0x15c)] == null)
                return null;
            var _0x242c9e = this[_0x30619c(0x158)];
            if (_0x461025 == null)
                var _0x4b4703 = this[_0x30619c(0x15c)][_0x30619c(0x15e)](this[_0x30619c(0x15b)], this['args']);
            else {
                if (!this[_0x30619c(0x15d)] && !_0x461025[_0x30619c(0x161)])
                    _0x4b4703 = this[_0x30619c(0x15c)][_0x30619c(0x162)](this[_0x30619c(0x15b)], _0x461025);
                else {
                    if (this[_0x30619c(0x15d)])
                        _0x4b4703 = this['method']['apply'](this['caller'], this[_0x30619c(0x15d)][_0x30619c(0x163)](_0x461025));
                    else
                        _0x4b4703 = this[_0x30619c(0x15c)][_0x30619c(0x15e)](this[_0x30619c(0x15b)], _0x461025);
                }
            }
            return this[_0x30619c(0x158)] === _0x242c9e && this[_0x30619c(0x157)] && this['recover'](), _0x4b4703;
        }
        [_0xd7fe8b(0x164)]() {
            var _0x8a6092 = _0xd7fe8b;
            return this[_0x8a6092(0x15b)] = null, this[_0x8a6092(0x15c)] = null, this[_0x8a6092(0x15d)] = null, this;
        }
        [_0xd7fe8b(0x15f)]() {
            var _0x59eff9 = _0xd7fe8b;
            this[_0x59eff9(0x158)] > 0x0 && (this['_id'] = 0x0, _0x4395c8[_0x59eff9(0x165)][_0x59eff9(0x166)](this[_0x59eff9(0x164)]()));
        }
        static [_0xd7fe8b(0x167)](_0x839e60, _0xcbc48c, _0x4dc322 = null, _0x36ff9e = !![]) {
            var _0x4baa33 = _0xd7fe8b;
            if (_0x4395c8[_0x4baa33(0x165)]['length'])
                return _0x4395c8[_0x4baa33(0x165)]['pop']()[_0x4baa33(0x159)](_0x839e60, _0xcbc48c, _0x4dc322, _0x36ff9e);
            return new _0x4395c8(_0x839e60, _0xcbc48c, _0x4dc322, _0x36ff9e);
        }
    }
    _0x4395c8[_0xd7fe8b(0x165)] = [], _0x4395c8[_0xd7fe8b(0x15a)] = 0x1;
    class _0xdbee1d {
        [_0xd7fe8b(0x168)](_0x23613e) {
            var _0x4448ec = _0xd7fe8b, _0x301451 = this[_0x4448ec(0x169)] && this[_0x4448ec(0x169)][_0x23613e];
            return !!_0x301451;
        }
        [_0xd7fe8b(0x16a)](_0x3c7430, _0x5b2524) {
            var _0x6b33ac = _0xd7fe8b;
            if (!this[_0x6b33ac(0x169)] || !this['_events'][_0x3c7430])
                return ![];
            var _0x1324ac = this['_events'][_0x3c7430];
            if (_0x1324ac[_0x6b33ac(0x16b)]) {
                if (_0x1324ac[_0x6b33ac(0x157)])
                    delete this[_0x6b33ac(0x169)][_0x3c7430];
                _0x5b2524 != null ? _0x1324ac['runWith'](_0x5b2524) : _0x1324ac[_0x6b33ac(0x16b)]();
            } else {
                for (var _0xb5f37c = 0x0, _0xfb9284 = _0x1324ac[_0x6b33ac(0x16c)]; _0xb5f37c < _0xfb9284; _0xb5f37c++) {
                    var _0x3f248d = _0x1324ac[_0xb5f37c];
                    _0x3f248d && (_0x5b2524 != null ? _0x3f248d[_0x6b33ac(0x160)](_0x5b2524) : _0x3f248d[_0x6b33ac(0x16b)]()), (!_0x3f248d || _0x3f248d[_0x6b33ac(0x157)]) && (_0x1324ac[_0x6b33ac(0x16d)](_0xb5f37c, 0x1), _0xb5f37c--, _0xfb9284--);
                }
                if (_0x1324ac['length'] === 0x0 && this[_0x6b33ac(0x169)])
                    delete this[_0x6b33ac(0x169)][_0x3c7430];
            }
            return !![];
        }
        ['on'](_0x577232, _0x2870a1, _0x5d426b, _0x320b2e) {
            var _0x2d06a9 = _0xd7fe8b;
            return this[_0x2d06a9(0x16e)](_0x577232, _0x2870a1, _0x5d426b, _0x320b2e, ![]);
        }
        [_0xd7fe8b(0x157)](_0x36e227, _0x587145, _0x4c6b98, _0x293893) {
            var _0x75fd44 = _0xd7fe8b;
            return this[_0x75fd44(0x16e)](_0x36e227, _0x587145, _0x4c6b98, _0x293893, !![]);
        }
        [_0xd7fe8b(0x16f)](_0x3d26af, _0x12a2c1, _0x2e9291, _0x3d8150) {
            var _0x4dea9f = _0xd7fe8b;
            if (!this['_events'] || !this[_0x4dea9f(0x169)][_0x3d26af])
                return this;
            var _0x4adc00 = this[_0x4dea9f(0x169)][_0x3d26af];
            if (_0x4adc00 != null) {
                if (_0x4adc00[_0x4dea9f(0x16b)])
                    (!_0x12a2c1 || _0x4adc00['caller'] === _0x12a2c1) && (_0x2e9291 == null || _0x4adc00[_0x4dea9f(0x15c)] === _0x2e9291) && (!_0x3d8150 || _0x4adc00['once']) && (delete this['_events'][_0x3d26af], _0x4adc00[_0x4dea9f(0x15f)]());
                else {
                    var _0x5114d4 = 0x0;
                    for (var _0x114442 = 0x0, _0x3ef3db = _0x4adc00[_0x4dea9f(0x16c)]; _0x114442 < _0x3ef3db; _0x114442++) {
                        var _0x5c139c = _0x4adc00[_0x114442];
                        if (!_0x5c139c) {
                            _0x5114d4++;
                            continue;
                        }
                        _0x5c139c && (!_0x12a2c1 || _0x5c139c[_0x4dea9f(0x15b)] === _0x12a2c1) && (_0x2e9291 == null || _0x5c139c[_0x4dea9f(0x15c)] === _0x2e9291) && (!_0x3d8150 || _0x5c139c[_0x4dea9f(0x157)]) && (_0x5114d4++, _0x4adc00[_0x114442] = null, _0x5c139c[_0x4dea9f(0x15f)]());
                    }
                    if (_0x5114d4 === _0x3ef3db)
                        delete this[_0x4dea9f(0x169)][_0x3d26af];
                }
            }
            return this;
        }
        [_0xd7fe8b(0x170)](_0x91fdd2) {
            var _0x325451 = _0xd7fe8b, _0x23ed02 = this[_0x325451(0x169)];
            if (!_0x23ed02)
                return this;
            if (_0x91fdd2)
                this[_0x325451(0x171)](_0x23ed02[_0x91fdd2]), delete _0x23ed02[_0x91fdd2];
            else {
                for (var _0x4930d8 in _0x23ed02) {
                    this[_0x325451(0x171)](_0x23ed02[_0x4930d8]);
                }
                this[_0x325451(0x169)] = null;
            }
            return this;
        }
        [_0xd7fe8b(0x172)](_0x26cbe8) {
            var _0x58ae6a = _0xd7fe8b;
            if (_0x26cbe8 && this[_0x58ae6a(0x169)])
                for (var _0x4d275d in this[_0x58ae6a(0x169)]) {
                    this[_0x58ae6a(0x16f)](_0x4d275d, _0x26cbe8, null);
                }
            return this;
        }
        [_0xd7fe8b(0x171)](_0x2a33d9) {
            var _0x3e0a16 = _0xd7fe8b;
            if (!_0x2a33d9)
                return;
            if (_0x2a33d9[_0x3e0a16(0x16b)])
                _0x2a33d9[_0x3e0a16(0x15f)]();
            else
                for (var _0x4abb2d = _0x2a33d9[_0x3e0a16(0x16c)] - 0x1; _0x4abb2d > -0x1; _0x4abb2d--) {
                    _0x2a33d9[_0x4abb2d] && (_0x2a33d9[_0x4abb2d][_0x3e0a16(0x15f)](), _0x2a33d9[_0x4abb2d] = null);
                }
        }
        ['_createListener'](_0x40e74e, _0x4c38eb, _0x34add7, _0x441ec5, _0x1a84b6, _0x2b10d8) {
            var _0x4f2129 = _0xd7fe8b;
            _0x2b10d8 && this[_0x4f2129(0x16f)](_0x40e74e, _0x4c38eb, _0x34add7, _0x1a84b6);
            var _0x41cace = _0x4395c8[_0x4f2129(0x167)](_0x4c38eb || this, _0x34add7, _0x441ec5, _0x1a84b6);
            this[_0x4f2129(0x169)] || (this[_0x4f2129(0x169)] = {});
            var _0x2e5617 = this[_0x4f2129(0x169)];
            if (!_0x2e5617[_0x40e74e])
                _0x2e5617[_0x40e74e] = _0x41cace;
            else {
                if (!_0x2e5617[_0x40e74e][_0x4f2129(0x16b)])
                    _0x2e5617[_0x40e74e][_0x4f2129(0x166)](_0x41cace);
                else
                    _0x2e5617[_0x40e74e] = [
                        _0x2e5617[_0x40e74e],
                        _0x41cace
                    ];
            }
            return this;
        }
    }
    class _0x1d7636 extends _0xdbee1d {
        ['readAsText'](_0x13bfb4, _0x28fef7) {
            var _0x1b9f0c = _0xd7fe8b;
            let _0x304ea6 = new FileReader();
            _0x304ea6[_0x1b9f0c(0x12d)] = function () {
                var _0x3c8c5e = _0x1b9f0c;
                FileReader[_0x3c8c5e(0x173)] == _0x304ea6[_0x3c8c5e(0x174)] ? _0x28fef7 && _0x28fef7(_0x304ea6[_0x3c8c5e(0x14d)]) : _0x28fef7 && _0x28fef7(null);
            }, _0x304ea6[_0x1b9f0c(0x175)](_0x13bfb4);
        }
        [_0xd7fe8b(0x176)](_0x4021fc, _0x3a0e13) {
            var _0x1ec683 = _0xd7fe8b, _0x387946 = new Blob([_0x4021fc], { 'type': '' });
            saveAs(_0x387946, _0x3a0e13 + _0x1ec683(0x177));
        }
        [_0xd7fe8b(0x178)](_0x395bd4, _0x28e416, _0x26ef2e) {
            var _0x46acc3 = _0xd7fe8b;
            let _0x1b4b70 = document[_0x46acc3(0x139)]('input');
            _0x1b4b70[_0x46acc3(0x179)] = _0x46acc3(0x17a), _0x1b4b70[_0x46acc3(0x179)]['top'] = _0x395bd4 + 'px', _0x1b4b70['style'][_0x46acc3(0x17b)] = _0x28e416 + 'px', _0x1b4b70['type'] = _0x46acc3(0x17c), _0x1b4b70[_0x46acc3(0x179)][_0x46acc3(0x17d)] = _0x46acc3(0x17e), _0x1b4b70['onchange'] = () => {
                _0x26ef2e && _0x26ef2e(_0x1b4b70['files']);
            }, document[_0x46acc3(0x147)]['appendChild'](_0x1b4b70);
        }
        async [_0xd7fe8b(0x17f)](_0x27cf51) {
            var _0x175ed2 = _0xd7fe8b, _0x382877 = _0x27cf51;
            for (const _0x6f5800 in _0x382877) {
                const _0x4adf77 = _0x382877[_0x6f5800];
                if (_0x4adf77 && _0x4adf77[_0x175ed2(0x180)]) {
                    let _0x1fa6c0 = _0x6f5800[_0x175ed2(0x181)]('.');
                    await new Promise(_0x2239d9 => {
                        setTimeout(_0x2239d9, 0x64);
                    }), this['save'](JSON[_0x175ed2(0x182)](_0x4adf77[_0x175ed2(0x180)]), _0x1fa6c0[_0x175ed2(0x183)]());
                }
            }
        }
        async [_0xd7fe8b(0x184)]() {
            var _0x1b408b = _0xd7fe8b;
            await new Promise(_0x105b31 => {
                var _0x58b9b5 = _0x44cd;
                Laya[_0x58b9b5(0x185)][_0x58b9b5(0x186)]([
                    _0x58b9b5(0x187),
                    'views/loadingViewUI.scene',
                    _0x58b9b5(0x188),
                    _0x58b9b5(0x189),
                    'views/rewardDialogUI.scene'
                ], Laya[_0x58b9b5(0x18a)][_0x58b9b5(0x167)](this, _0x105b31));
            });
            var _0x46a567 = Laya[_0x1b408b(0x18b)][_0x1b408b(0x18c)];
            for (const _0x8dc265 in _0x46a567) {
                const _0xcfb444 = _0x46a567[_0x8dc265];
                if (_0xcfb444 && _0xcfb444[_0x1b408b(0x180)]) {
                    let _0x36e8c5 = _0x8dc265['split']('.')[_0x1b408b(0x183)]();
                    _0xcfb444[_0x1b408b(0x180)] = Laya['loader'][_0x1b408b(0x18d)](_0x1b408b(0x18e) + _0x36e8c5 + _0x1b408b(0x18f));
                }
            }
        }
    }
    window[_0xd7fe8b(0x190)] = new _0x1d7636();
}());