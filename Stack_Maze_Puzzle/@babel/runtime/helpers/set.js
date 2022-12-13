var superPropBase = require('./superPro' + 'pBase'), defineProperty = require('./definePr' + 'operty');
function set(_0x383192, _0x48eca0, _0x25c3bc, _0x5c3863) {
    return (set = 'undefined' != typeof Reflect && Reflect['set'] ? Reflect['set'] : function (_0x11130c, _0x1d695d, _0xe1f86f, _0x2bc987) {
        var _0x44e7c4, _0x49d68d = superPropBase(_0x11130c, _0x1d695d);
        if (_0x49d68d) {
            if ((_0x44e7c4 = Object['getOwnProp' + 'ertyDescri' + 'ptor'](_0x49d68d, _0x1d695d))['set'])
                return _0x44e7c4['set']['call'](_0x2bc987, _0xe1f86f), !0x0;
            if (!_0x44e7c4['writable'])
                return !0x1;
        }
        if (_0x44e7c4 = Object['getOwnProp' + 'ertyDescri' + 'ptor'](_0x2bc987, _0x1d695d)) {
            if (!_0x44e7c4['writable'])
                return !0x1;
            _0x44e7c4['value'] = _0xe1f86f, Object['defineProp' + 'erty'](_0x2bc987, _0x1d695d, _0x44e7c4);
        } else
            defineProperty(_0x2bc987, _0x1d695d, _0xe1f86f);
        return !0x0;
    })(_0x383192, _0x48eca0, _0x25c3bc, _0x5c3863);
}
function _set(_0xcabd51, _0x1b806b, _0x38356e, _0x2889d5, _0x397645) {
    if (!set(_0xcabd51, _0x1b806b, _0x38356e, _0x2889d5 || _0xcabd51) && _0x397645)
        throw new Error('failed\x20to\x20' + 'set\x20proper' + 'ty');
    return _0x38356e;
}
module['_set'] = _set;