var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

window.zs = window.zs || {}, window.zs.log = window.zs.log || {}, function(o) {
    "use strict";
    var l;
    !function(o) {
        o[o.DEBUG = 0] = "DEBUG", o[o.INFO = 1] = "INFO", o[o.WARN = 2] = "WARN", o[o.ERROR = 3] = "ERROR", 
        o[o.FATAL = 4] = "FATAL";
    }(l = l || (l = {}));
    var e = function e() {
        (0, _classCallCheck2.default)(this, e);
    };
    function log(o, n, r, c) {
        var t = "";
        if (null == r && (r = l.INFO), e.logLevel > r) return;
        var g = "#000";
        switch (r) {
          case l.DEBUG:
            t = "[DEBUG] ", g = e.color_Debug;
            break;

          case l.INFO:
            t = "[INFO] ", g = e.color_Info;
            break;

          case l.WARN:
            t = "[WARN] ", g = e.color_Warn;
            break;

          case l.ERROR:
            t = "[ERROR] ", g = e.color_Error;
            break;

          case l.FATAL:
            t = "[FATAL] ", g = e.color_Fatal;
        }
        if (n && n.length > 0 && (t += "<" + n + "> "), t += o, e.logTime) {
            var _o = new Date(), _l = "    " + _o.getFullYear() + "-" + _o.getMonth() + "-" + _o.getDate() + " " + _o.getHours() + ":" + _o.getMinutes() + ":" + _o.getSeconds();
            e.logMilliseconds && (_l = _l + ":" + _o.getMilliseconds()), t += _l;
        }
        if (c ? console.log("%c " + t, "color:" + g, c) : console.log("%c " + t, "color:" + g), 
        r == l.FATAL && e.fatalThrow) throw new Error(t);
    }
    e.logLevel = l.INFO, e.logTime = !0, e.logMilliseconds = !1, e.fatalThrow = !1, 
    e.color_Debug = "#08f", e.color_Info = "#000", e.color_Warn = "#f80", e.color_Error = "#f00", 
    e.color_Fatal = "#900", o.Level = l, o.Configs = e, o.log = log, o.debug = function(o, e, n) {
        log(o, e, l.DEBUG, n);
    }, o.info = function(o, e, n) {
        log(o, e, l.INFO, n);
    }, o.warn = function(o, e, n) {
        log(o, e, l.WARN, n);
    }, o.error = function(o, e, n) {
        log(o, e, l.ERROR, n);
    }, o.fatal = function(o, e, n) {
        log(o, e, l.FATAL, n);
    };
}(window.zs.log = window.zs.log || {});