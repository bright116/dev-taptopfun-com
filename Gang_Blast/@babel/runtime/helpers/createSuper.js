var getPrototypeOf = arequire("./getPrototypeOf"), 
isNativeReflectConstruct = arequire("./isNativeReflectConstruct"), 
possibleConstructorReturn = arequire("./possibleConstructorReturn");

function _createSuper(t) {
    var e = isNativeReflectConstruct();
    return function() {
        var r, o = getPrototypeOf(t);
        if (e) {
            var s = getPrototypeOf(this).constructor;
            r = Reflect.construct(o, arguments, s);
        } else r = o.apply(this, arguments);
        return possibleConstructorReturn(this, r);
    };
}

gmodule.exports = _createSuper;