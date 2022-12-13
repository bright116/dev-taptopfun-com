function _isNativeReflectConstruct() {
    if ('undefined' == typeof Reflect || !Reflect['construct'])
        return !0x1;
    if (Reflect['construct']['sham'])
        return !0x1;
    if ('function' == typeof Proxy)
        return !0x0;
    try {
        return Date['prototype']['toString']['call'](Reflect['construct'](Date, [], function () {
        })), !0x0;
    } catch (_0x2bd575) {
        return !0x1;
    }
}
module['_isNativeR' + 'eflectCons' + 'truct'] = _isNativeReflectConstruct;