var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(t) {
    "use strict";
    (window.zs = window.zs || {}).fsm = /* */ function() {
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
            key: "getState",
            value: function getState(t, i) {
                return null == this.list[t] ? null : this.list[t][i];
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
                    priority: n || 0,
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
                var i = this.list[this.current];
                if (null == i) return !1;
                if (null != this.target && null != i) {
                    var _t = i[this.target];
                    if (null != _t && !_t.canBreak) return !1;
                }
                var n = i[t];
                return !(null == n || null == n.thisObj || n.condition && !n.condition.call(n.thisObj) || (this.target = t, 
                zs.log.debug("runTransition: " + this.current + " - " + this.target), this.onBeforeChange && this.onBeforeChange.runWith([ this.target, this.current ]), 
                n.transition.call(n.thisObj, zs.Handler.create(this, this.onTransitionComplete)), 
                0));
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
                var i = [], n = [];
                for (var e in t) {
                    var r = t[e], s = !1;
                    for (var _t2 = 0, l = n.length; _t2 < l; _t2++) {
                        if (r.priority > n[_t2].priority) {
                            i.splice(_t2, 0, e), n.splice(_t2, 0, r), s = !0;
                            break;
                        }
                    }
                    s || (i.push(e), n.push(r));
                }
                for (var _t3 = 0, _e = i.length; _t3 < _e; _t3++) {
                    var _e2 = n[_t3];
                    if (null != _e2.thisObj && (!_e2.condition || _e2.condition.call(_e2.thisObj))) return this.target = i[_t3], 
                    zs.log.debug("runNext: " + this.current + " - " + this.target), this.onBeforeChange && this.onBeforeChange.runWith([ this.target, this.current ]), 
                    _e2.transition.call(_e2.thisObj, zs.Handler.create(this, this.onTransitionComplete)), 
                    i[_t3];
                }
                return null;
            }
        }, {
            key: "onTransitionComplete",
            value: function onTransitionComplete() {
                this.current = this.target, this.target = null;
                var t = this.list[this.current];
                if (null != t) for (var i in t) {
                    if (t[i].auto) {
                        this.runTransition(i);
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
}();