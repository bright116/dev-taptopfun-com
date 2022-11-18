window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(i, s) {
    "use strict";
    class n {
        constructor() {}
        static loadConfig(i, s) {
            this.Instance.loadConfig(i, s);
        }
        static init(i, s) {
            this.Instance.init(i, s);
        }
        static sendVideoLog() {
            this.Instance.sendVideoLog();
        }
        static loadAd(i) {
            this.Instance.loadAd(i);
        }
        static navigate2Mini(i, s, n, t, o) {
            this.Instance.navigate2Mini(i, s, n, t, o);
        }
        static get Instance() {
            return this.initialized || (this.initialized = !0, zs.sdk ? this.instance = zs.sdk : this.instance = {
                loadConfig: function(i, s) {
                    s && s(), console.log("zs.sdk is undefined");
                },
                init: function(i, s) {
                    console.log("zs.sdk.init"), console.log("zs.sdk is undefined");
                },
                sendVideoLog: function() {
                    console.log("zs.sdk.sendVideoLog"), console.log("zs.sdk is undefined");
                },
                loadAd: function(i) {
                    i && i({
                        promotion: [],
                        indexLeft: [],
                        endPage: [],
                        backAd: []
                    }), console.log("zs.sdk is undefined");
                },
                navigate2Mini: function(i, s, n, t, o) {
                    t && t(), o && o(), console.log("zs.sdk is undefined");
                }
            }), this.instance;
        }
    }
    n.instance = null, n.initialized = !1, s.ClassUtils.regClass("zs.laya.zsapp.zsAppSdk", n), 
    i.zsAppSdk = n;
}(window.zs.laya.zsapp = window.zs.laya.zsapp || {}, Laya);