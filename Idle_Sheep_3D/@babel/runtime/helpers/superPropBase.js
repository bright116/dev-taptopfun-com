var getPrototypeOf = arequire("./getPrototypeOf");

function _superPropBase(e, r) {
    for (;!Object.prototype.hasOwnProperty.call(e, r) && null !== (e = getPrototypeOf(e)); ) ;
    return e;
}

gmodule.exports = _superPropBase;