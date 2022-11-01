var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(t) {
    "use strict";
    var a = /* */ function() {
        function a() {
            (0, _classCallCheck2.default)(this, a);
        }
        (0, _createClass2.default)(a, null, [ {
            key: "init",
            value: function init() {
                window.TDCORE && window.TDCORE();
            }
        }, {
            key: "justTrack",
            value: function justTrack(t, a, n) {
                window.TDAPP && (zs.log.debug("TD数据统计 " + t + " : " + a, "Talking Data", n), TDAPP.onEvent(t, a, n || null));
            }
        }, {
            key: "track",
            value: function track(t, a) {
                if (!window.TDAPP) return;
                var n = t.split("_", 2), e = zs.configs.gameCfg.tdConfig, s = null, i = t;
                n.length > 1 ? (s = e[n[0] + "_"]) && (i = s + n[1]) : (s = e[t]) && (i = s), zs.log.debug("TD数据统计 " + t + " : " + i, "Talking Data", a), 
                TDAPP.onEvent(i, i, a || null);
            }
        } ]);
        return a;
    }();
    a.defaultKey = "17842E258BB240F798B4DC3ADECF1A38", a.appName = null, a.appKey = null, 
    a.versionName = "", a.channel = "", a.startupKey = "startup", a.startupDesc = "1-启动游戏", 
    a.gameStartKey = "gameStart", a.gameStartDesc = "2-开始游戏", a.descMap = {
        PRODUCT_START: "3-产品启动",
        PRODUCT_BEGIN: "4-产品开始",
        GAME_HOME: "5-游戏首页",
        PRODUCT_HOME_PLAY: "6-首页游玩",
        GAME_PLAY: "7-游戏游玩",
        PRODUCT_PLAY_END: "8-游玩结束",
        GAME_END: "9-游戏结束",
        PRODUCT_FINISH: "10-产品结束"
    }, t.td = a;
}(window.zs = window.zs || {});