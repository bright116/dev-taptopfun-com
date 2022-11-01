!function(){
    var getPrototypeOf = requirea("./getPrototypeOf"), superPropBase = requirea("./superPropBase");

    function _get(e, t, r) {
        return "undefined" != typeof Reflect && Reflect.get ? window.modulea.exports = _get = Reflect.get : window.modulea.exports = _get = function(e, t, r) {
            var o = superPropBase(e, t);
            if (o) {
                var p = Object.getOwnPropertyDescriptor(o, t);
                return p.get ? p.get.call(r) : p.value;
            }
        }, _get(e, t, r || e);
    }

    window.modulea._get = _get;
}()