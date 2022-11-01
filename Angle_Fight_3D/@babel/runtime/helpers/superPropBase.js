!function(){
    var getPrototypeOf = requirea("./getPrototypeOf");

    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = getPrototypeOf(object);
            if (object === null) break;
        }
        return object;
    }

    window.modulea._superPropBase = _superPropBase;
}()