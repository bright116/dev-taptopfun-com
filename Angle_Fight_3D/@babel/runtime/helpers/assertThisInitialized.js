!function(){
    function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
    }

    window.modulea._assertThisInitialized = _assertThisInitialized;
}()