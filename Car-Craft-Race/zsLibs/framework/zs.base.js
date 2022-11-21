!function () {
    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    window.zs = window.zs || {}, window.zs.base = window.zs.base || {}, function (i) {
        "use strict";
        var s = /* */ function () {
            function s(i, _s, t) {
                var _this = this;
                _classCallCheck2(this, s);
                this.thisArg = _s,
                    //  i.prototype instanceof zs.proxy.NativeLoading ? (
                    //     this.loading = i.make(),
                    //     this.loading.init(),
                    //     t.call(_s),
                    //     zs.Timer.inst.frameLoop(1, this, this.onProgress)
                    // ) : 
                    this.window = zs.fgui.window.create().attach(i).fit().update(i, function (i) {
                        platform.getInstance().cargamesstartup("Car-Craft-Race", () => {
                            window.yad.scale(0.8, 0.8);
                            window.yad.right = 0;
                            window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Car-Craft-Race-musicState") ?
                                JSON.parse(Laya.LocalStorage.getItem("Car-Craft-Race-musicState")) : false;
                            _this.loading = i, t.call(_s), zs.Timer.inst.frameLoop(1, _this, _this.onProgress);
                        })
                    }).show();
            }
            _createClass2(s, [{
                key: "onProgress",
                value: function onProgress() {
                    if ((!this.loading || this.loading.run(this.thisArg.progress || 0)) && this.thisArg.readyStart) {
                        this.thisArg.start(), zs.Timer.inst.clear(this, this.onProgress)
                        // if (this.loading && this.loading instanceof zs.proxy.NativeLoading) {
                        //     var _i = this.loading.owner;
                        //     _i.removeSelf(), this.loading.destroy(), _i.destroy();
                        // }
                        this.window && this.window.dispose();
                    }
                }
            }, {
                key: "progress",
                get: function get() {
                    return null == this.loading ? 0 : this.loading.current;
                }
            }], [{
                key: "init",
                value: function init(i, t, o) {
                    return new s(i, t, o);
                }
            }]);
            return s;
        }();
        (window.zs.base = window.zs.base || {}).entry = s;
    }();
}()