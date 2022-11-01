var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(e) {
    "use strict";
    var m = /* */ function() {
        function m() {
            (0, _classCallCheck2.default)(this, m);
        }
        (0, _createClass2.default)(m, null, [ {
            key: "init",
            value: function init() {
                this.markGameNum(), this.markAwardNum(), this.markReadyNum();
            }
        }, {
            key: "markGameNum",
            value: function markGameNum(e) {
                var _ = zs.utils.getItem(m.key_game_num_time_stamp);
                null != _ && "" != _ && 0 != zs.utils.isToday(Number(_)) || (zs.utils.setItem(m.key_game_num_time_stamp, Date.now().toString()), 
                zs.utils.setItem(m.key_game_num, "1")), m.day_game_num = zs.utils.getItem(m.key_game_num) || 1, 
                m.day_game_num = e ? Number(m.day_game_num) + 1 : Number(m.day_game_num), zs.utils.setItem(m.key_game_num, m.day_game_num.toString());
            }
        }, {
            key: "markAwardNum",
            value: function markAwardNum(e) {
                var _ = zs.utils.getItem(m.key_award_num_time_stamp);
                null != _ && "" != _ && 0 != zs.utils.isToday(Number(_)) || (zs.utils.setItem(m.key_award_num_time_stamp, Date.now().toString()), 
                zs.utils.setItem(m.key_award_num, "1")), m.open_award_num = zs.utils.getItem(m.key_award_num) || 1, 
                m.open_award_num = e ? Number(m.open_award_num) + 1 : Number(m.open_award_num), 
                zs.utils.setItem(m.key_award_num, m.open_award_num.toString());
            }
        }, {
            key: "markReadyNum",
            value: function markReadyNum(e) {
                var _ = zs.utils.getItem(m.key_ready_num_time_stamp);
                null != _ && "" != _ && 0 != zs.utils.isToday(Number(_)) || (zs.utils.setItem(m.key_ready_num_time_stamp, Date.now().toString()), 
                zs.utils.setItem(m.key_ready_num, "1")), m.open_ready_num = zs.utils.getItem(m.key_ready_num) || 1, 
                m.open_ready_num = e ? Number(m.open_ready_num) + 1 : Number(m.open_ready_num), 
                zs.utils.setItem(m.key_ready_num, m.open_ready_num.toString());
            }
        }, {
            key: "checkEggOpen",
            value: function checkEggOpen(e) {
                if (!m.switch) return !1;
                var _ = zs.product.get("zs_click_award_since");
                if (_ && _ > 0 && (!m.day_game_num || Number(m.day_game_num) < _)) return !1;
                var t = e ? zs.product.get("zs_ready_click_num") : zs.product.get("zs_click_award_num");
                if (!t || "" == t.trim()) return !1;
                if (t = JSON.parse(t), Array.isArray(t)) {
                    if (t.length <= 0) return !1;
                    if (0 == t.length && t[0] < 0) return !0;
                    if (t.indexOf(m.day_game_num) >= 0) return !0;
                } else {
                    if (t = parseInt(t), isNaN(t)) return !1;
                    if (t < 0) return !0;
                    if (t > (e ? m.open_ready_num : m.open_award_num)) return !0;
                }
                return !1;
            }
        } ]);
        return m;
    }();
    m.switch = !0, m.key_game_num = "day_game_num", m.key_award_num = "open_award_num", 
    m.key_ready_num = "open_ready_num", m.key_award_num_time_stamp = "open_award_num_time_stamp", 
    m.key_ready_num_time_stamp = "open_ready_num_time_stamp", m.key_game_num_time_stamp = "game_num_time_stamp", 
    m.open_award_num = 0, m.open_ready_num = 0, m.day_game_num = 0, e.EggKnock = m;
}(window.zs = window.zs || {});