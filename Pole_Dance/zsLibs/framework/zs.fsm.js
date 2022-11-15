var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(t, i) {
    "use strict";
    t.fsm = /* */ function() {
        function _class() {
            (0, _classCallCheck2.default)(this, _class);
        }
        (0, _createClass2.default)(_class, [ {
            key: "init",
            value: function init(t, i) {
                this.current = t || this.defaultState, this.target = null, this.current && (this.onChanged && this.onChanged.runWith(this.current), 
                (i || this.defaultAuto) && this.runNext());
            }
        }, {
            key: "registe",
            value: function registe(t, i, n, e, r, s, l, h) {
                if (null == this.list[t] && (this.list[t] = {}), e) for (var _i in this.list[t]) {
                    this.list[t][_i].auto = null;
                }
                return null == r && (r = this), s || (s = function s(t) {
                    t.run();
                }), this.list[t][i] = {
                    priority: n,
                    thisObj: r,
                    transition: s,
                    condition: l,
                    auto: e,
                    canBreak: h
                }, this;
            }
        }, {
            key: "setDefault",
            value: function setDefault(t, i) {
                return this.defaultState = t, this.defaultAuto = i, this;
            }
        }, {
            key: "unregiste",
            value: function unregiste(t, i) {
                return null != this.list[t] && null != this.list[t][i] && delete this.list[t][i], 
                this;
            }
        }, {
            key: "runTransition",
            value: function runTransition(t) {
                if (null == this.current || this.current.length <= 0) return !1;
                var n = this.list[this.current];
                if (null == n) return !1;
                if (null != this.target && null != n) {
                    var _t = n[this.target];
                    if (null != _t && !_t.canBreak) return !1;
                }
                var e = n[t];
                return null != e && null != e.thisObj && !(e.condition && !e.condition.call(e.thisObj)) && (this.target = t, 
                zs.log.debug("runTransition: " + this.current + " - " + this.target), this.onBeforeChange && this.onBeforeChange.runWith(this.target), 
                void e.transition.call(e.thisObj, i.Handler.create(this, this.onTransitionComplete)));
            }
        }, {
            key: "runNext",
            value: function runNext() {
                if (null == this.current || this.current.length <= 0) return null;
                var t = this.list[this.current];
                if (null == t) return null;
                if (null != this.target && null != t) {
                    var _i2 = t[this.target];
                    if (null != _i2 && !_i2.canBreak) return null;
                }
                var n = [], e = [];
                for (var _i3 in t) {
                    var r = t[_i3], s = !1;
                    for (var _t2 = 0, l = e.length; _t2 < l; _t2++) {
                        if (r.priority > e[_t2].priority) {
                            n.splice(_t2, 0, _i3), e.splice(_t2, 0, r), s = !0;
                            break;
                        }
                    }
                    s || (n.push(_i3), e.push(r));
                }
                for (var _t3 = 0, _r = n.length; _t3 < _r; _t3++) {
                    var _r2 = e[_t3];
                    if (null != _r2.thisObj && (!_r2.condition || _r2.condition.call(_r2.thisObj))) return this.target = n[_t3], 
                    zs.log.debug("runNext: " + this.current + " - " + this.target), this.onBeforeChange && this.onBeforeChange.runWith([ this.target, this.current ]), 
                    _r2.transition.call(_r2.thisObj, i.Handler.create(this, this.onTransitionComplete)), 
                    this.target;
                }
                return null;
            }
        }, {
            key: "onTransitionComplete",
            value: function onTransitionComplete() {
                this.current = this.target, this.target = null;
                var t = this.list[this.current];
                if (null != t) for (var _i4 in t) {
                    if (t[_i4].auto) {
                        this.runTransition(_i4);
                        break;
                    }
                }
                this.onChanged && this.onChanged.runWith(this.current);
            }
        }, {
            key: "list",
            get: function get() {
                return null == this._list && (this._list = {}), this._list;
            }
        } ]);
        return _class;
    }();
}(window.zs = window.zs || {}, Laya);