!function() {
    function e(n, e, o) {
        return new Promise(function(i, r) {
            var d = new XMLHttpRequest();
            d.withCredentials = !0, d.onreadystatechange = function() {
                4 === d.readyState && 200 == d.status && i(JSON.parse(d.responseText));
            }, d.onerror = function(n) {
                r("");
            }, d.ontimeout = function(n) {
                r("");
            }, d.open(n, e + function(n) {
                var e = "?";
                for (var o in n) e += o + "=" + n[o] + "&";
                return e;
            }(o), !1), d.send();
        });
    }
    void 0 === window.JJSdkConf && console.error("jiujiu_sdk_conf.js必须放置在jiujiu_sdk.js、jiujiu_pull_sdk.js之前");
    for (var n = {
        JJGameConfigs: function() {
            return e("GET", window.JJSdkConf.req_domain + "/game/configs", {
                version: window.JJSdkConf.version,
                app_key: window.JJSdkConf.app_key
            });
        },
        JJGameConfigByKeys: function(n) {
            return e("GET", window.JJSdkConf.req_domain + "/get/configs/by/keys", {
                version: window.JJSdkConf.version,
                app_key: window.JJSdkConf.app_key,
                config_key: n
            });
        },
        JJGameShares: function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e("GET", window.JJSdkConf.req_domain + "/game/shares", {
                app_key: window.JJSdkConf.app_key,
                p_code: n
            });
        },
        JJGameAds: function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e("GET", window.JJSdkConf.req_domain + "/ads", {
                app_key: window.JJSdkConf.app_key,
                position_id: n
            });
        },
        JJGetGameConfigAdShare: function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", o = {};
            return n && (o = n()), o.app_key = window.JJSdkConf.app_key, o.version = window.JJSdkConf.version, 
            void 0 === o.version ? void console.error("配置三合一接口必须小游戏传递版本号") : e("GET", window.JJSdkConf.req_domain + "/batch/configs", o);
        }
    }, o = [ "JJGameConfigs", "JJGameConfigByKeys", "JJGameShares", "JJGameAds", "JJGetGameConfigAdShare" ], i = o.length - 1; i >= 0; i--) !function(n, e) {
        Object.defineProperty(window, n, {
            value: e,
            writable: !1,
            enumerable: !0,
            configurable: !0
        });
    }(o[i], n[o[i]]);
}();