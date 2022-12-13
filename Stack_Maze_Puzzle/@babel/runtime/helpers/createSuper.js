var getPrototypeOf = require('./getProto' + 'typeOf'), isNativeReflectConstruct = require('./isNative' + 'ReflectCon' + 'struct'), possibleConstructorReturn = require('./possible' + 'Constructo' + 'rReturn');
function _createSuper(_0x24a803) {
    var _0x8f3fa1 = isNativeReflectConstruct();
    return function () {
        var _0x1a4bcf, _0x3d1fb6 = getPrototypeOf(_0x24a803);
        if (_0x8f3fa1) {
            var _0x33a0a5 = getPrototypeOf(this)['constructo' + 'r'];
            _0x1a4bcf = Reflect['construct'](_0x3d1fb6, arguments, _0x33a0a5);
        } else
            _0x1a4bcf = _0x3d1fb6['apply'](this, arguments);
        return possibleConstructorReturn(this, _0x1a4bcf);
    };
}
module['_createSup' + 'er'] = _createSuper;