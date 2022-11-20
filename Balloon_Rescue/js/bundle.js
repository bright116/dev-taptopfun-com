!function () {
    var _interopRequireDefault = require("../babel/runtime/helpers/interopRequireDefault");

    var _assertThisInitialized2 = _interopRequireDefault(require("../babel/runtime/helpers/assertThisInitialized"));

    var _regenerator = _interopRequireDefault(require("../babel/runtime/regenerator"));

    var _typeof2 = _interopRequireDefault(require("../babel/runtime/helpers/typeof"));

    var _get2 = _interopRequireDefault(require("../babel/runtime/helpers/get"));

    var _possibleConstructorReturn2 = _interopRequireDefault(require("../babel/runtime/helpers/possibleConstructorReturn"));

    var _getPrototypeOf2 = _interopRequireDefault(require("../babel/runtime/helpers/getPrototypeOf"));

    var _inherits2 = _interopRequireDefault(require("../babel/runtime/helpers/inherits"));

    var _createClass2 = _interopRequireDefault(require("../babel/runtime/helpers/createClass"));

    var _classCallCheck2 = _interopRequireDefault(require("../babel/runtime/helpers/classCallCheck"));

    function _createSuper(Derived) {
        return function () {
            var Super = (0, _getPrototypeOf2.default)(Derived), result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return (0, _possibleConstructorReturn2.default)(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
            return true;
        } catch (e) {
            return false;
        }
    }

    (function () {
        "use strict";
        var STAGE_W = 750;
        var STAGE_H = 1334;
        var ConfigUtil = function ConfigUtil() {
            (0, _classCallCheck2.default)(this, ConfigUtil);
        };
        ConfigUtil.mAdOn = true;
        ConfigUtil.mSoundable = true;
        ConfigUtil.mVersion = 1002;
        ConfigUtil.TAG = "qi_qiux";
        ConfigUtil.mScoreUnit = "分";
        ConfigUtil.mURL = "https://mascaiyou.wanzhushipin.cn/qi_qiux/";
        ConfigUtil.mCmd = {
            check: "1.0.1/" + ConfigUtil.TAG + "/check?",
            login: "1.0.1/" + ConfigUtil.TAG + "/login?",
            login2: "1.0.2/" + ConfigUtil.TAG + "/login2?",
            challenge: "1.0.1/" + ConfigUtil.TAG + "/challenge?",
            querycards: "1.0.1/" + ConfigUtil.TAG + "/querycards?",
            rank: "1.0.1/" + ConfigUtil.TAG + "/rank?",
            report: "1.0.1/" + ConfigUtil.TAG + "/report?",
            AddCard: "1.0.1/" + ConfigUtil.TAG + "/addcard?",
            AddMyCard: "1.0.1/" + ConfigUtil.TAG + "/AddMyCard?",
            ad: "1.0.1/" + ConfigUtil.TAG + "/ad?",
            mymark: "1.0.1/" + ConfigUtil.TAG + "/mymark?",
            ItemTotle: "1.0.1/" + ConfigUtil.TAG + "/ItemTotle?",
            SetUserValue: "1.0.1/" + ConfigUtil.TAG + "/SetUserValue?",
            ChangeTCt: "1.0.1/" + ConfigUtil.TAG + "/ChangeTCt?",
            GetNowTime: "1.0.1/" + ConfigUtil.TAG + "/GetNowTime?"
        };
        ConfigUtil.mKeys = {
            "1.0.1": "b14640073f1781c0cadca96460652429"
        };
        ConfigUtil.maidinKey = "9bdfFbvgt1s_fd0d3e27ef";
        ConfigUtil.mReportAdHitUrl = ConfigUtil.mURL + "1.0.1/" + ConfigUtil.TAG + "/data?";
        ConfigUtil.mBannerAdId = "adunit-6578b8888ea1fbbf";
        ConfigUtil.mVideoAdId = "adunit-5378481ca38abba0";
        ConfigUtil.sMusicOnOff = true;
        ConfigUtil.sSoundOnOff = true;
        ConfigUtil.mIsNewUser = false;
        ConfigUtil.sStartGameTime = 0;
        ConfigUtil.mLineColor = "#FF5572";
        var util = /* */ function () {
            function util() {
                (0, _classCallCheck2.default)(this, util);
            }
            (0, _createClass2.default)(util, null, [{
                key: "getUrlParams",
                value: function getUrlParams(params) {
                    var ver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1.0.1";
                    var havetick = false;
                    var keys = new Array();
                    for (var key in params) {
                        if (typeof params[key] != "string" && typeof params[key] != "number") continue;
                        if (key == "tick") havetick = true;
                        var aa = key.toLocaleLowerCase();
                        params[aa] = params[key];
                        keys.push(aa);
                    }
                    if (havetick == false) {
                        var date = new Date();
                        params["tick"] = Math.floor(date.getTime() / 1e3);
                        keys.push("tick");
                    }
                    keys.sort(function (a, b) {
                        return a > b ? 1 : -1;
                    });
                    var str = "";
                    for (var index = 0; index < keys.length; index++) {
                        str = str + keys[index] + "=" + params[keys[index]] + "&";
                    }
                    var scr = "";
                    if (ver == "maidian") {
                        scr = md5_hex$1.MD5(str + "key=" + ConfigUtil.maidinKey);
                    } else {
                        if (ConfigUtil.mKeys[ver] != null) scr = md5_hex$1.MD5(str + "key=" + ConfigUtil.mKeys[ver]); else scr = md5_hex$1.MD5(str + "key=wvkbfuhl");
                    }
                    return str + "key=" + scr;
                }
            }, {
                key: "getCDN",
                value: function getCDN() {
                    return "https://tcdn.wanzhushipin.cn/xcx/sf/";
                }
            }, {
                key: "getJSON",
                value: function getJSON(str) {
                    if (str == "" || str == null) {
                        return {
                            code: -999
                        };
                    }
                    var len = str.indexOf("{", 0);
                    str = str.substr(len, str.length - len);
                    return JSON.parse(str);
                }
            }, {
                key: "getServer",
                value: function getServer() {
                    return ConfigUtil.mURL;
                }
            }]);
            return util;
        }();
        var SHOW_LOG = true;
        var LogUtil = /* */ function () {
            function LogUtil() {
                (0, _classCallCheck2.default)(this, LogUtil);
            }
            (0, _createClass2.default)(LogUtil, null, [{
                key: "log",
                value: function log(logContent) {
                    if (SHOW_LOG) {
                        console.log(ConfigUtil.TAG + ": " + logContent);
                    }
                }
            }]);
            return LogUtil;
        }();
        var ShareConfig = function ShareConfig() {
            (0, _classCallCheck2.default)(this, ShareConfig);
        };
        ShareConfig.sShareUrls = [];
        ShareConfig.mShareIds = {
            shareApp: 1,
            shareProp: 1
        };
        var TimeUtil = /* */ function () {
            function TimeUtil() {
                (0, _classCallCheck2.default)(this, TimeUtil);
            }
            (0, _createClass2.default)(TimeUtil, null, [{
                key: "getTimeBySecond",
                value: function getTimeBySecond(s) {
                    var hours = Math.round((s - 30 * 60) / (60 * 60));
                    var minutes = Math.round((s - 30) / 60) % 60;
                    var seconds = Math.floor(s % 60);
                    return (hours > 0 ? hours > 9 ? String(hours) : "0" + hours : "00") + ":" + (minutes > 0 ? minutes > 9 ? String(minutes) : "0" + minutes : "00") + ":" + (seconds > 0 ? seconds > 9 ? String(seconds) : "0" + seconds : "00");
                }
            }, {
                key: "getTodayFirstSecond",
                value: function getTodayFirstSecond() {
                    var date = new Date();
                    date.setHours(0, 0, 0, 0);
                    return date.getTime() / 1e3;
                }
            }, {
                key: "getCurrTime",
                value: function getCurrTime() {
                    var date = new Date();
                    return Math.floor(date.getTime() / 1e3);
                }
            }]);
            return TimeUtil;
        }();
        var ADUtil = /* */ function () {
            function ADUtil() {
                (0, _classCallCheck2.default)(this, ADUtil);
                this.mBannerOffsetY = 80;
                this.adBanner = null;
                this.mIsInvokeRemoveCustomBannerAd = false;
                this.mCustomBanner = null;
                this.mCustomBannerAdList = [];
                this.banner_realHeight = 0;
                this.banner_realWidth = 0;
                this.rush_bannernumb = 0;
                this.is_show_banner = false;
                this.is_success_banner = false;
            }
            (0, _createClass2.default)(ADUtil, [{
                key: "showBannerAd",
                value: function showBannerAd(adUnitId) {
                    var _this2 = this;
                    var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                    var cell = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    if (ADUtil.sDefaultBannerId == "") {
                        return;
                    }
                    var __this = this;
                    if (window["wx"]) {
                        if (__this.adBanner == null) {
                            adUnitId = ADUtil.sDefaultBannerId;
                            if (ADUtil.sDefaultBannerIdList.length > 0) {
                                if (this.rush_bannernumb >= ADUtil.sDefaultBannerIdList.length) {
                                    this.rush_bannernumb = 0;
                                }
                                adUnitId = ADUtil.sDefaultBannerIdList[this.rush_bannernumb];
                                this.rush_bannernumb++;
                            }
                            __this.adBanner = wx.createBannerAd({
                                adUnitId: adUnitId,
                                style: {
                                    left: 0,
                                    top: wxCore.uo.phone()["screenHeight"] - 107,
                                    width: wxCore.uo.phone()["screenWidth"] * scale
                                }
                            });
                            var top = wxCore.uo.phone()["screenHeight"] == 812 ? 20 : 0;
                            __this.adBanner.onResize(function (res) {
                                __this.adBanner.style.top = wxCore.uo.phone()["screenHeight"] - __this.adBanner.style.realHeight - top;
                                __this.adBanner.style.left = (wxCore.uo.phone()["screenWidth"] - __this.adBanner.style.realWidth) / 2;
                                if (__this.adBanner.style.realHeight > 104 && Laya.stage.height < 1280) { }
                            });
                            __this.adBanner.onLoad(function () {
                                console.log("adBanner 广告加载成功");
                                _this2.banner_realHeight = __this.adBanner.style.realHeight;
                                _this2.banner_realWidth = __this.adBanner.style.realWidth;
                                _this2.is_success_banner = true;
                                if (cell != null) {
                                    cell();
                                    cell = null;
                                }
                            });
                            __this.adBanner.onError(function (res) {
                                _this2.banner_realHeight = 0;
                                _this2.banner_realWidth = 0;
                                _this2.is_success_banner = false;
                                console.log("adbanner onerror = " + JSON.stringify(res));
                                if (cell != null) {
                                    cell();
                                    cell = null;
                                }
                                __this.adBanner = null;
                            });
                        } else {
                            if (__this.mCustomBanner != null) {
                                __this.mCustomBanner.visible = true;
                                __this.adBanner = null;
                            } else {
                                __this.adBanner.show();
                                this.is_show_banner = true;
                            }
                        }
                    }
                }
            }, {
                key: "hideBannerAd",
                value: function hideBannerAd() {
                    var cell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    if (this.adBanner == undefined) return;
                    if (this.adBanner != null) {
                        this.adBanner.hide();
                        if (this.is_show_banner) {
                            GameViewMassage.adUtil.adBanner.destroy(true);
                            GameViewMassage.adUtil.adBanner = null;
                            GameViewMassage.adUtil.showBannerAd("", 1, function () {
                                if (cell != null) {
                                    cell();
                                }
                            });
                        }
                        this.is_show_banner = false;
                    }
                }
            }], [{
                key: "playVideo",
                value: function playVideo(success) {
                    var loadFail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var notFinish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    if (ADUtil.sIsPlayVideo) return;
                    if (wxCore.uo.mVideoAD) {
                        ADUtil.sIsPlayVideo = true;
                        wxCore.uo.showVideoAD(function (played) {
                            if (played) {
                                ADUtil.sIsPlayVideo = false;
                                if (success != undefined && success != null) {
                                    success();
                                }
                            } else {
                                ADUtil.sIsPlayVideo = false;
                                if (notFinish != null) {
                                    notFinish();
                                }
                            }
                        });
                    } else {
                        ADUtil.sIsPlayVideo = false;
                        if (loadFail != null) {
                            loadFail();
                        } else {
                            wx.showToast({
                                title: "视频获取失败",
                                icon: "none",
                                image: "",
                                duration: 2e3
                            });
                        }
                    }
                }
            }]);
            return ADUtil;
        }();
        ADUtil.sDefaultBannerId = "";
        ADUtil.sDefaultBannerIdList = [];
        ADUtil.sDefaultVideoId = "";
        ADUtil.sIsPlayVideo = false;
        var NewTouchMistake = /* */ function () {
            function NewTouchMistake() {
                (0, _classCallCheck2.default)(this, NewTouchMistake);
                this.refresh_banner = false;
                this.mistake_data = null;
            }
            (0, _createClass2.default)(NewTouchMistake, [{
                key: "init",
                value: function init(of_touch_mistake, of_mistake_page, ip_location) {
                    this.of_touch_mistake2 = of_touch_mistake;
                    this.of_mistake_page = of_mistake_page;
                    this.ip_location = ip_location;
                }
            }, {
                key: "touchMistake",
                value: function touchMistake(name, first_channe_id, touchNum, callBackSuccess, callBackFail) {
                    var touchMistake = this.of_mistake_page;
                    if (GameViewMassage.mWX.fhOnoff == 1 && Number(touchMistake[name]) != 1) {
                        if (GameViewMassage.adUtil.is_success_banner == false) {
                            this.mistake_data = null;
                            this.refresh_banner = false;
                            callBackFail();
                            return;
                        }
                        var touch_mistake = this.of_touch_mistake2;
                        var user = false;
                        if (Number(touch_mistake["user"]) == 1) {
                            if (first_channe_id != "" && first_channe_id != "0" || wxCore.uo.first_adid != "0") {
                                if (Number(touchMistake[name]) == 2) {
                                    user = true;
                                }
                            }
                        } else {
                            if (Number(touchMistake[name]) == 2) {
                                user = true;
                            }
                        }
                        if (user) {
                            var of_judge_newuser = Number(JSON.parse(GameViewMassage.mWX.getOnOffParamByKey("of_judge_newuser"))["mistake"]);
                            if (of_judge_newuser == 1) {
                                if (wxCore.uo.mIsNewUser != 1) {
                                    user = false;
                                }
                            } else if (of_judge_newuser == 2) {
                                if (wxCore.uo.mIsNewUser != 0) {
                                    user = false;
                                }
                            }
                        }
                        console.log("判断是否出现误触", touchNum < Number(touch_mistake.touchNum), this.checkTimeSlot(), user, Number(this.ip_location["bool"]) == 0);
                        if (touchNum < Number(touch_mistake.touchNum) && this.checkTimeSlot() && user && Number(this.ip_location["bool"]) == 0) {
                            var timer1 = 1;
                            var timer2 = 2;
                            var of_touch_mistake2_type = Math.floor(Math.random() * 2) + 1;
                            if (of_touch_mistake2_type == 1 || of_touch_mistake2_type == 3) {
                                timer1 = this.of_touch_mistake2.touchTime1[0];
                                timer2 = this.of_touch_mistake2.touchTime1[1];
                            } else {
                                timer1 = this.of_touch_mistake2.touchTime2[0];
                                timer2 = this.of_touch_mistake2.touchTime2[1];
                            }
                            if (this.of_touch_mistake2.bannerRefresh == 1) {
                                this.refresh_banner = true;
                            } else {
                                this.refresh_banner = false;
                            }
                            if (of_touch_mistake2_type == 1 || of_touch_mistake2_type == 2) {
                                var cellbackinfo = {
                                    type: of_touch_mistake2_type,
                                    numortime: this.of_touch_mistake2.type[0],
                                    btnnum: this.of_touch_mistake2.type[1],
                                    timer1: timer1,
                                    timer2: timer2
                                };
                                this.mistake_data = cellbackinfo;
                                callBackSuccess(cellbackinfo);
                            } else {
                                var cellbackinfo1 = {
                                    type: this.of_touch_mistake2.type[0],
                                    numortime: this.of_touch_mistake2.type[1],
                                    timer1: timer1,
                                    timer2: timer2
                                };
                                this.mistake_data = cellbackinfo1;
                                callBackSuccess(cellbackinfo1);
                            }
                        } else {
                            this.mistake_data = null;
                            this.refresh_banner = false;
                            callBackFail();
                        }
                    } else {
                        this.mistake_data = null;
                        this.refresh_banner = false;
                        callBackFail();
                    }
                }
            }, {
                key: "checkTimeSlot",
                value: function checkTimeSlot() {
                    var time = this.of_touch_mistake2["showTime"];
                    var hour = new Date().getHours();
                    if (time[0] <= hour && hour < time[1]) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }, {
                key: "wuChuFenfaBtn",
                value: function wuChuFenfaBtn(first_channe_id) {
                    if (GameViewMassage.mWX.fhOnoff == 1) {
                        var touch_mistake = this.of_touch_mistake2;
                        var user = false;
                        if (Number(touch_mistake["user"]) == 1) {
                            if (first_channe_id != "" && first_channe_id != "0" || wxCore.uo.first_adid != "0") {
                                user = true;
                            }
                        } else {
                            user = true;
                        }
                        console.log("好友推荐误触按钮", this.checkTimeSlot(), user, Number(this.ip_location["bool"]) == 0);
                        if (this.checkTimeSlot() && user && Number(this.ip_location["bool"]) == 0) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }], [{
                key: "Inst",
                get: function get() {
                    if (!NewTouchMistake._inst) {
                        NewTouchMistake._inst = new NewTouchMistake();
                    }
                    return NewTouchMistake._inst;
                }
            }]);
            return NewTouchMistake;
        }();
        NewTouchMistake.touchNum = 0;
        var ForcePlayVideo = /* */ function () {
            function ForcePlayVideo() {
                (0, _classCallCheck2.default)(this, ForcePlayVideo);
                this.of_force_playvideo_value = 0;
                this.success_num = 0;
                this.fail_num = 0;
                this.is_show_page = false;
                this.btn_num = 0;
            }
            (0, _createClass2.default)(ForcePlayVideo, [{
                key: "judgeNowDay",
                value: function judgeNowDay() {
                    var nowday = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    var success_num = arguments.length > 1 ? arguments[1] : undefined;
                    var fail_num = arguments.length > 2 ? arguments[2] : undefined;
                    var of_force_playvideo_value = arguments.length > 3 ? arguments[3] : undefined;
                    var of_force_playvideo = arguments.length > 4 ? arguments[4] : undefined;
                    var of_force_showlevel = arguments.length > 5 ? arguments[5] : undefined;
                    this.success_num = success_num;
                    this.fail_num = fail_num;
                    if (!nowday) {
                        this.setValue(-success_num, -fail_num);
                    }
                    this.of_force_playvideo_value = of_force_playvideo_value;
                    this.of_force_playvideo = of_force_playvideo;
                    this.of_force_showlevel = of_force_showlevel;
                    this.btn_num = this.of_force_playvideo.btn_num;
                }
            }, {
                key: "setValue",
                value: function setValue() {
                    var change_success_num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var change_fail_num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    if (change_success_num != 0) {
                        this.success_num = this.success_num + change_success_num;
                        GameViewMassage.mWX.setUserValue("success_num", this.success_num + "");
                    }
                    if (change_fail_num != 0) {
                        this.fail_num = this.fail_num + change_fail_num;
                        GameViewMassage.mWX.setUserValue("fail_num", this.fail_num + "");
                    }
                }
            }, {
                key: "getIsShowPage",
                value: function getIsShowPage(level) {
                    this.is_show_page = false;
                    return 0;
                }
            }, {
                key: "getLevel",
                value: function getLevel(level) {
                    var is_show = false;
                    if (ForcePlayVideo.play_num == 0) {
                        is_show = true;
                        ForcePlayVideo.play_num = this.of_force_showlevel.interval;
                    } else {
                        ForcePlayVideo.play_num--;
                    }
                    return is_show;
                }
            }], [{
                key: "Inst",
                get: function get() {
                    if (!ForcePlayVideo._inst) {
                        ForcePlayVideo._inst = new ForcePlayVideo();
                    }
                    return ForcePlayVideo._inst;
                }
            }]);
            return ForcePlayVideo;
        }();
        ForcePlayVideo.is_true = false;
        ForcePlayVideo.play_num = 0;
        var MistakeContent = /* */ function () {
            function MistakeContent() {
                (0, _classCallCheck2.default)(this, MistakeContent);
                this.fail_num = 0;
                this.success_num = 0;
                this.nowday = "";
                this.NFList = {};
            }
            (0, _createClass2.default)(MistakeContent, [{
                key: "init",
                value: function init(ret) {
                    ret["on_off"].forEach(function (item) {
                        switch (item.key) {
                            case "of_force_playvideo":
                            case "of_force_showlevel":
                            case "of_mistake_type":
                            case "of_hitegg_close":
                            case "of_touch_mistake2":
                            case "of_loadorfirend_banner":
                            case "of_new_banner_id":
                            case "of_show_fenfa_closebtn":
                            case "of_friend_recom":
                                console.log("111111111111111", item.key);
                                item.param = JSON.parse(item.param);
                                if (!ret["fh_onoff"]) {
                                    item.value = 0;
                                }
                                MistakeContent.Inst.NFList[item.key] = item;
                                break;

                            default:
                                if (!ret["fh_onoff"]) {
                                    item.value = 0;
                                }
                                MistakeContent.Inst.NFList[item.key] = item.value;
                                break;
                        }
                    });
                    ret["user_data"].forEach(function (item) {
                        switch (item.key) {
                            case "nowday":
                                MistakeContent.Inst.nowday = item.values;
                                break;

                            case "fail_num":
                                MistakeContent.Inst.fail_num = Number(item.values);
                                break;

                            case "success_num":
                                MistakeContent.Inst.fail_num = Number(item.values);
                                break;

                            case "touchNum":
                                NewTouchMistake.touchNum = Number(item.values);
                                break;
                        }
                    });
                    if (this.nowday == "") {
                        GameViewMassage.mWX.setUserValue("nowday", ret["nowday"]);
                        ForcePlayVideo.Inst.judgeNowDay(false, 0, 0, Number(MistakeContent.Inst.NFList["of_force_playvideo"].value), MistakeContent.Inst.NFList["of_force_playvideo"].param, MistakeContent.Inst.NFList["of_force_showlevel"].param);
                    } else {
                        var is_sameDay = false;
                        if (Number(this.nowday) == Number(ret["nowday"])) {
                            is_sameDay = true;
                        } else {
                            GameViewMassage.mWX.setUserValue("nowday", ret["nowday"]);
                            is_sameDay = false;
                        }
                        ForcePlayVideo.Inst.judgeNowDay(is_sameDay, Number(this.success_num), Number(this.fail_num), Number(MistakeContent.Inst.NFList["of_force_playvideo"].value), MistakeContent.Inst.NFList["of_force_playvideo"].param, MistakeContent.Inst.NFList["of_force_showlevel"].param);
                    }
                    NewTouchMistake.Inst.init(MistakeContent.Inst.NFList["of_touch_mistake2"].param, MistakeContent.Inst.NFList["of_mistake_type"].param, ret["ip_location"]);
                }
            }], [{
                key: "Inst",
                get: function get() {
                    if (!MistakeContent._inst) {
                        MistakeContent._inst = new MistakeContent();
                    }
                    return MistakeContent._inst;
                }
            }]);
            return MistakeContent;
        }();
        var EventManager = /* */ function (_Laya$EventDispatcher) {
            (0, _inherits2.default)(EventManager, _Laya$EventDispatcher);
            var _super = _createSuper(EventManager);
            function EventManager() {
                (0, _classCallCheck2.default)(this, EventManager);
                return _super.apply(this, arguments);
            }
            (0, _createClass2.default)(EventManager, null, [{
                key: "Inst",
                get: function get() {
                    if (!EventManager._inst) {
                        EventManager._inst = new EventManager();
                    }
                    return EventManager._inst;
                }
            }]);
            return EventManager;
        }(Laya.EventDispatcher);
        EventManager._inst = null;
        EventManager.INIT_JUMP_GAMES = "INIT_JUMP_GAMES";
        EventManager.CLICK_GAME_SUCCESS_CALLBACK = "CLICK_GAME_SUCCESS_CALLBACK";
        EventManager.FENFA_GAMES_SHOW = "FENFA_GAMES_SHOW";
        EventManager.FENFA_GAMES_CLICK_GAME = "FENFA_GAMES_CLICK_GAME";
        EventManager.TAB_GAMES_SHARE_INIT = "TAB_GAMES_SHARE_INIT";
        EventManager.TAB_GAMES_SHARE_CLOSE = "TAB_GAMES_SHARE_CLOSE";
        EventManager.TAB_GAMES_SHARE_CLICK_TO_GAME = "TAB_GAMES_SHARE_CLICK_TO_GAME";
        EventManager.BANNER_GAMES_INIT = "BANNER_GAMES_INIT";
        EventManager.HOT_GAMES_INIT = "HOT_GAMES_INIT";
        EventManager.HOT_GAMES_ON_CLOSE = "HOT_GAMES_ON_CLOSE";
        EventManager.HOT_GAMES_ON_TO_GAME = "HOT_GAMES_ON_TO_GAME";
        EventManager.RESULT_GAMES_INIT = "RESULT_GAMES_INIT";
        EventManager.FRIEND_SHARE_GAMES_INIT = "FRIEND_SHARE_GAMES_INIT";
        EventManager.FRIEND_SHARE_GAMES_ON_CLOSE = "FRIEND_SHARE_GAMES_ON_CLOSE";
        EventManager.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE = "FRIEND_SHARE_GAMES_SHOW_OR_CLOSE";
        EventManager.MOREGAME_GAMES_INIT = "MOREGAME_GAMES_INIT";
        EventManager.MOREGAME_CLICK_GAME = "MOREGAME_CLICK_GAME";
        "use strict";
        var _MD = /* */ function () {
            function MD5() {
                (0, _classCallCheck2.default)(this, MD5);
                this.hexcase = 0;
                this.b64pad = "";
            }
            (0, _createClass2.default)(MD5, [{
                key: "hex_md5",
                value: function hex_md5(s) {
                    return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(s)));
                }
            }, {
                key: "b64_md5",
                value: function b64_md5(s) {
                    return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(s)));
                }
            }, {
                key: "any_md5",
                value: function any_md5(s, e) {
                    return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(s)), e);
                }
            }, {
                key: "hex_hmac_md5",
                value: function hex_hmac_md5(k, d) {
                    return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
                }
            }, {
                key: "b64_hmac_md5",
                value: function b64_hmac_md5(k, d) {
                    return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)));
                }
            }, {
                key: "any_hmac_md5",
                value: function any_hmac_md5(k, d, e) {
                    return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d)), e);
                }
            }, {
                key: "md5_vm_test",
                value: function md5_vm_test() {
                    return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
                }
            }, {
                key: "rstr_md5",
                value: function rstr_md5(s) {
                    return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
                }
            }, {
                key: "rstr_hmac_md5",
                value: function rstr_hmac_md5(key, data) {
                    var bkey = this.rstr2binl(key);
                    if (bkey.length > 16) bkey = this.binl_md5(bkey, key.length * 8);
                    var ipad = Array(16), opad = Array(16);
                    for (var i = 0; i < 16; i++) {
                        ipad[i] = bkey[i] ^ 909522486;
                        opad[i] = bkey[i] ^ 1549556828;
                    }
                    var hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
                    return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
                }
            }, {
                key: "rstr2hex",
                value: function rstr2hex(input) {
                    try {
                        this.hexcase;
                    } catch (e) {
                        this.hexcase = 0;
                    }
                    var hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
                    var output = "";
                    var x;
                    for (var i = 0; i < input.length; i++) {
                        x = input.charCodeAt(i);
                        output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(x & 15);
                    }
                    return output;
                }
            }, {
                key: "rstr2b64",
                value: function rstr2b64(input) {
                    try {
                        this.b64pad;
                    } catch (e) {
                        this.b64pad = "";
                    }
                    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                    var output = "";
                    var len = input.length;
                    for (var i = 0; i < len; i += 3) {
                        var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
                        for (var j = 0; j < 4; j++) {
                            if (i * 8 + j * 6 > input.length * 8) output += this.b64pad; else output += tab.charAt(triplet >>> 6 * (3 - j) & 63);
                        }
                    }
                    return output;
                }
            }, {
                key: "rstr2any",
                value: function rstr2any(input, encoding) {
                    var divisor = encoding.length;
                    var i, j, q, x, quotient;
                    var dividend = Array(Math.ceil(input.length / 2));
                    for (i = 0; i < dividend.length; i++) {
                        dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
                    }
                    var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
                    var remainders = Array(full_length);
                    for (j = 0; j < full_length; j++) {
                        quotient = Array();
                        x = 0;
                        for (i = 0; i < dividend.length; i++) {
                            x = (x << 16) + dividend[i];
                            q = Math.floor(x / divisor);
                            x -= q * divisor;
                            if (quotient.length > 0 || q > 0) quotient[quotient.length] = q;
                        }
                        remainders[j] = x;
                        dividend = quotient;
                    }
                    var output = "";
                    for (i = remainders.length - 1; i >= 0; i--) {
                        output += encoding.charAt(remainders[i]);
                    }
                    return output;
                }
            }, {
                key: "str2rstr_utf8",
                value: function str2rstr_utf8(input) {
                    var output = "";
                    var i = -1;
                    var x, y;
                    while (++i < input.length) {
                        x = input.charCodeAt(i);
                        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
                        if (55296 <= x && x <= 56319 && 56320 <= y && y <= 57343) {
                            x = 65536 + ((x & 1023) << 10) + (y & 1023);
                            i++;
                        }
                        if (x <= 127) output += String.fromCharCode(x); else if (x <= 2047) output += String.fromCharCode(192 | x >>> 6 & 31, 128 | x & 63); else if (x <= 65535) output += String.fromCharCode(224 | x >>> 12 & 15, 128 | x >>> 6 & 63, 128 | x & 63); else if (x <= 2097151) output += String.fromCharCode(240 | x >>> 18 & 7, 128 | x >>> 12 & 63, 128 | x >>> 6 & 63, 128 | x & 63);
                    }
                    return output;
                }
            }, {
                key: "str2rstr_utf16le",
                value: function str2rstr_utf16le(input) {
                    var output = "";
                    for (var i = 0; i < input.length; i++) {
                        output += String.fromCharCode(input.charCodeAt(i) & 255, input.charCodeAt(i) >>> 8 & 255);
                    }
                    return output;
                }
            }, {
                key: "str2rstr_utf16be",
                value: function str2rstr_utf16be(input) {
                    var output = "";
                    for (var i = 0; i < input.length; i++) {
                        output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 255, input.charCodeAt(i) & 255);
                    }
                    return output;
                }
            }, {
                key: "rstr2binl",
                value: function rstr2binl(input) {
                    var output = Array(input.length >> 2);
                    for (var i = 0; i < output.length; i++) {
                        output[i] = 0;
                    }
                    for (var i = 0; i < input.length * 8; i += 8) {
                        output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
                    }
                    return output;
                }
            }, {
                key: "binl2rstr",
                value: function binl2rstr(input) {
                    var output = "";
                    for (var i = 0; i < input.length * 32; i += 8) {
                        output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
                    }
                    return output;
                }
            }, {
                key: "binl_md5",
                value: function binl_md5(x, len) {
                    x[len >> 5] |= 128 << len % 32;
                    x[(len + 64 >>> 9 << 4) + 14] = len;
                    var a = 1732584193;
                    var b = -271733879;
                    var c = -1732584194;
                    var d = 271733878;
                    for (var i = 0; i < x.length; i += 16) {
                        var olda = a;
                        var oldb = b;
                        var oldc = c;
                        var oldd = d;
                        a = this.md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                        d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                        c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                        b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                        a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                        d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                        c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                        b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                        a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                        d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                        c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                        b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                        a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                        d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                        c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                        b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
                        a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                        d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                        c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                        b = this.md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                        a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                        d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                        c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                        b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                        a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                        d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                        c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                        b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                        a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                        d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                        c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                        b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
                        a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                        d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                        c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                        b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                        a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                        d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                        c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                        b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                        a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                        d = this.md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                        c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                        b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                        a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                        d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                        c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                        b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
                        a = this.md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                        d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                        c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                        b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                        a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                        d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                        c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                        b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                        a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                        d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                        c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                        b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                        a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                        d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                        c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                        b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
                        a = this.safe_add(a, olda);
                        b = this.safe_add(b, oldb);
                        c = this.safe_add(c, oldc);
                        d = this.safe_add(d, oldd);
                    }
                    return [a, b, c, d];
                }
            }, {
                key: "md5_cmn",
                value: function md5_cmn(q, a, b, x, s, t) {
                    return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
                }
            }, {
                key: "md5_ff",
                value: function md5_ff(a, b, c, d, x, s, t) {
                    return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
                }
            }, {
                key: "md5_gg",
                value: function md5_gg(a, b, c, d, x, s, t) {
                    return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
                }
            }, {
                key: "md5_hh",
                value: function md5_hh(a, b, c, d, x, s, t) {
                    return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
                }
            }, {
                key: "md5_ii",
                value: function md5_ii(a, b, c, d, x, s, t) {
                    return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
                }
            }, {
                key: "safe_add",
                value: function safe_add(x, y) {
                    var lsw = (x & 65535) + (y & 65535);
                    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                    return msw << 16 | lsw & 65535;
                }
            }, {
                key: "bit_rol",
                value: function bit_rol(num, cnt) {
                    return num << cnt | num >>> 32 - cnt;
                }
            }]);
            return MD5;
        }();
        var HttpRequest = Laya.HttpRequest;
        var Events = Laya.Event;
        var md5_hex = /* */ function () {
            function md5_hex() {
                (0, _classCallCheck2.default)(this, md5_hex);
            }
            (0, _createClass2.default)(md5_hex, null, [{
                key: "MD5",
                value: function MD5(str) {
                    return new _MD().hex_md5(str);
                }
            }]);
            return md5_hex;
        }();
        var testGameAPI = /* */ function () {
            function testGameAPI() {
                (0, _classCallCheck2.default)(this, testGameAPI);
            }
            (0, _createClass2.default)(testGameAPI, null, [{
                key: "GetGamesBox",
                value: function GetGamesBox(showPage, callBack) {
                    function onResult(e) {
                        var ret = null;
                        ret = testGameAPI.getJSON(e);
                        console.log("分发获取结果", ret);
                        if (ret["code"] == 0) {
                            if (callBack) callBack.runWith(ret);
                        }
                        testGameAPI.mHttpCall = null;
                    }
                    testGameAPI.mHttpCall = new HttpRequest();
                    testGameAPI.mHttpCall.once(Events.COMPLETE, testGameAPI, onResult);
                    testGameAPI.mHttpCall.once(Events.ERROR, testGameAPI, testGameAPI.onHttpRequestError);
                    console.log("uo/GetGamesBox");
                    var params = [];
                    params["position_type"] = "result_page";
                    params["type"] = showPage;
                    if (window["wx"]) {
                        params["uid"] = wxCore.uo.mWeUser["uid"];
                    } else {
                        params["uid"] = testGameAPI.uid;
                    }
                    var str = testGameAPI.sBaseURL + testGameAPI.urlConfig["GetGamesBox"]["url"] + testGameAPI.getUrlParams(params, testGameAPI.urlConfig["GetGamesBox"]["key"]);
                    testGameAPI.mHttpCall.send(str, null, "get", "text");
                }
            }, {
                key: "ClickGame",
                value: function ClickGame(appid, tag) {
                    function onResult(e) {
                        var ret = null;
                        ret = testGameAPI.getJSON(e);
                        console.log(ret);
                        if (ret["code"] == 0) {
                            EventManager.Inst.event(EventManager.CLICK_GAME_SUCCESS_CALLBACK, [appid, tag, ret]);
                        }
                        testGameAPI.mHttpCall = null;
                    }
                    testGameAPI.mHttpCall = new HttpRequest();
                    testGameAPI.mHttpCall.once(Events.COMPLETE, testGameAPI, onResult);
                    testGameAPI.mHttpCall.once(Events.ERROR, testGameAPI, testGameAPI.onHttpRequestError);
                    console.log("uo/ClickGame");
                    var params = [];
                    if (window["wx"]) {
                        params["uid"] = wxCore.uo.mWeUser["uid"];
                    } else {
                        params["uid"] = testGameAPI.uid;
                    }
                    params["appid"] = appid;
                    var str = testGameAPI.sBaseURL + testGameAPI.urlConfig["ClickGame"]["url"] + testGameAPI.getUrlParams(params, testGameAPI.urlConfig["ClickGame"]["key"]);
                    testGameAPI.mHttpCall.send(str, null, "get", "text");
                }
            }, {
                key: "GetTabGames",
                value: function GetTabGames(callBack) {
                    function onResult(e) {
                        var ret = null;
                        ret = testGameAPI.getJSON(e);
                        console.log(ret);
                        if (ret["code"] == 0) {
                            if (callBack) callBack.runWith(ret);
                        }
                        testGameAPI.mHttpCall = null;
                    }
                    testGameAPI.mHttpCall = new HttpRequest();
                    testGameAPI.mHttpCall.once(Events.COMPLETE, testGameAPI, onResult);
                    testGameAPI.mHttpCall.once(Events.ERROR, testGameAPI, testGameAPI.onHttpRequestError);
                    console.log("uo/GetGamesBoxLabel");
                    var params = [];
                    params["position_type"] = "result_page";
                    if (window["wx"]) {
                        params["uid"] = wxCore.uo.mWeUser["uid"];
                    } else {
                        params["uid"] = testGameAPI.uid;
                    }
                    var str = testGameAPI.sBaseURL + testGameAPI.urlConfig["GetGamesBoxLabel"]["url"] + testGameAPI.getUrlParams(params, testGameAPI.urlConfig["GetGamesBoxLabel"]["key"]);
                    testGameAPI.mHttpCall.send(str, null, "get", "text");
                }
            }, {
                key: "commitTotle",
                value: function commitTotle(key, dts) { }
            }, {
                key: "onHttpRequestError",
                value: function onHttpRequestError(e) {
                    testGameAPI.mHttpCall = null;
                    console.log("onHttpRequestError:" + e);
                }
            }, {
                key: "getJSON",
                value: function getJSON(str) {
                    if (str == "" || str == null) {
                        return {
                            code: -999
                        };
                    }
                    var len = str.indexOf("{", 0);
                    str = str.substr(len, str.length - len);
                    return JSON.parse(str);
                }
            }, {
                key: "getUrlParams",
                value: function getUrlParams(params) {
                    var ver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1.0.1";
                    var havetick = false;
                    var keys = new Array();
                    for (var key in params) {
                        if (typeof params[key] != "string" && typeof params[key] != "number") continue;
                        if (key == "tick") havetick = true;
                        var aa = key.toLocaleLowerCase();
                        params[aa] = params[key];
                        keys.push(aa);
                    }
                    if (havetick == false) {
                        var date = new Date();
                        params["tick"] = Math.floor(date.getTime() / 1e3);
                        keys.push("tick");
                    }
                    keys.sort(function (a, b) {
                        return a > b ? 1 : -1;
                    });
                    var str = "";
                    for (var index = 0; index < keys.length; index++) {
                        str = str + keys[index] + "=" + params[keys[index]] + "&";
                    }
                    var scr = "";
                    if (testGameAPI.mKeys[ver] != null) scr = md5_hex.MD5(str + "key=" + testGameAPI.mKeys[ver]); else scr = md5_hex.MD5(str + "key=vicky");
                    return str + "key=" + scr;
                }
            }]);
            return testGameAPI;
        }();
        testGameAPI.mKeys = {
            "1.0.1": "b14640073f1781c0cadca96460652429"
        };
        testGameAPI.sBaseURL = "https://mascaiyou.wanzhushipin.cn/qi_qiux/";
        testGameAPI.urlConfig = {
            GetGamesBox: {
                url: "1.0.1/qi_qiux/GetGamesBox2?",
                key: "1.0.1",
                tips: "分发游戏数据"
            },
            ClickGame: {
                url: "1.0.1/qi_qiux/ClickGame?",
                key: "1.0.1",
                tips: "提交点击游戏信息"
            },
            GetGamesBoxLabel: {
                url: "1.0.1/qi_qiux/GetGamesBoxLabel?",
                key: "1.0.1",
                tips: "游戏集合页"
            }
        };
        testGameAPI.uid = 1000001;
        testGameAPI.mHttpCall = null;
        var JumpGameManager = /* */ function () {
            function JumpGameManager() {
                (0, _classCallCheck2.default)(this, JumpGameManager);
                this.jumpedGameInfo = {};
                this.jumpGameInfo = {
                    jump_tag: "",
                    callBack: "",
                    jump_appid: "",
                    showList: [],
                    banner_name: ""
                };
                this.banner_name = "";
            }
            (0, _createClass2.default)(JumpGameManager, [{
                key: "initEvent",
                value: function initEvent() {
                    EventManager.Inst.on(EventManager.INIT_JUMP_GAMES, this, this.initJumpGames);
                    EventManager.Inst.on(EventManager.CLICK_GAME_SUCCESS_CALLBACK, this, this.changeClickGame);
                }
            }, {
                key: "initJumpGames",
                value: function initJumpGames(key, games) {
                    this.jumpedGameInfo[key] = games;
                }
            }, {
                key: "changeClickGame",
                value: function changeClickGame(appid, tag, ret) {
                    for (var games in this.jumpedGameInfo) {
                        this.jumpedGameInfo[games].forEach(function (item) {
                            if (item.appid === appid) {
                                item.jumped = ret.jumped;
                            }
                        });
                    }
                }
            }, {
                key: "jump",
                value: function jump(obj, tag, showList, callBack, banner_name) {

                }
            }, {
                key: "jumpGame",
                value: function jumpGame(game, gif_jump) {
                    var _this3 = this;
                    console.log(game.name);
                    var appid = game.appid, path = "";
                    if (game.param.indexOf("?") >= 0 || game.path.indexOf("?") >= 0) {
                        path = game.path + game.param;
                    } else {
                        path = game.path + "?" + game.param;
                    }
                    if (!!Laya.Browser.onMiniGame) {
                        wx.navigateToMiniProgram({
                            appId: appid,
                            path: path,
                            fail: function fail() {
                                JumpGameManager.Inst.jumpedCB(game, 0, gif_jump);
                                ForcePlayVideo.Inst.setValue(0, 1);
                            },
                            success: function success() {
                                JumpGameManager.Inst.jumpedCB(game, 1, gif_jump);
                                ForcePlayVideo.Inst.setValue(1, 0);
                                if (_this3.jumpGameInfo.jump_tag == "diversion") {
                                    EventManager.Inst.event(EventManager.MOREGAME_CLICK_GAME);
                                }
                            }
                        });
                    } else {
                        JumpGameManager.Inst.jumpedCB(game, 1, gif_jump);
                    }
                }
            }, {
                key: "jumpedCB",
                value: function jumpedCB(game, type, gif_jump) {
                    EventManager.Inst.event(EventManager[this.jumpGameInfo.callBack], [JumpGameManager.Inst.jumpGameInfo, game, type, gif_jump]);
                    if (type == 1 && JumpGameManager.Inst.jumpGameInfo.jump_appid) {
                        testGameAPI.ClickGame(JumpGameManager.Inst.jumpGameInfo.jump_appid, JumpGameManager.Inst.jumpGameInfo.jump_tag);
                    }
                }
            }, {
                key: "randomArr",
                value: function randomArr(arr) {
                    var result = arr.concat(), len = arr.length;
                    for (var i = 0; i < len; i++) {
                        var item = result[i], otherNum = Math.floor(Math.random() * len);
                        result[i] = result[otherNum];
                        result[otherNum] = item;
                    }
                    return result;
                }
            }], [{
                key: "Inst",
                get: function get() {
                    if (!JumpGameManager._inst) {
                        JumpGameManager._inst = new JumpGameManager();
                    }
                    return JumpGameManager._inst;
                }
            }]);
            return JumpGameManager;
        }();
        var FenfaEvent = /* */ function () {
            function FenfaEvent() {
                (0, _classCallCheck2.default)(this, FenfaEvent);
            }
            (0, _createClass2.default)(FenfaEvent, null, [{
                key: "fenFa",
                value: function fenFa() {
                    JumpGameManager.Inst.initEvent();
                    if (!!Laya.Browser.onMiniGame) {
                        Laya.timer.callLater(this, function () {
                            wx.postMessage({
                                type: "init",
                                width: Laya.stage.width,
                                height: Laya.stage.height
                            });
                            Laya.Browser.window.sharedCanvas.width = Laya.stage.width;
                            Laya.Browser.window.sharedCanvas.height = Laya.stage.height;
                        });
                    }
                    EventManager.Inst.on(EventManager.FENFA_GAMES_SHOW, this, function (showList, tag) {
                        var obg = {
                            showList: showList,
                            position_type: tag
                        };
                        GameViewMassage.mWX.indexBpTotle("recom_show", obg);
                    });
                    EventManager.Inst.on(EventManager.FENFA_GAMES_CLICK_GAME, this, function (jumpGameInfo, game, type, gif_jump) {
                        console.log("跳转信息：", jumpGameInfo);
                        console.log("跳转游戏：", game);
                        console.log("跳转状态：", type);
                        console.log("跳转的是否是原游戏：", gif_jump);
                        var position_type = jumpGameInfo.jump_tag;
                        var banner_name = jumpGameInfo.banner_name;
                        if (banner_name != "1") {
                            position_type = jumpGameInfo.banner_name;
                        }
                        if (position_type == "friend_recom" || position_type == "friend_recom_push") {
                            EventManager.Inst.event(EventManager.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE);
                        }
                        var level = GameViewMassage.level_num;
                        if (GameViewMassage.result_banner) {
                            level--;
                        }
                        var obg1 = {
                            game_show_list: jumpGameInfo.showList,
                            position_type: position_type,
                            game_id: game.gameid,
                            is_success_direct: type,
                            jump_type: "game",
                            level: level,
                            gif_jump: gif_jump
                        };
                        GameViewMassage.mWX.indexBpTotle("recom_click", obg1);
                    });
                }
            }]);
            return FenfaEvent;
        }();
        var Dialog = Laya.Dialog;
        var Scene = Laya.Scene;
        var REG = Laya.ClassUtils.regClass;
        var ui;
        (function (ui) {
            var UI;
            (function (UI) {
                var GameSceneUI = /* */ function (_Scene) {
                    (0, _inherits2.default)(GameSceneUI, _Scene);
                    var _super2 = _createSuper(GameSceneUI);
                    function GameSceneUI() {
                        (0, _classCallCheck2.default)(this, GameSceneUI);
                        return _super2.call(this);
                    }
                    (0, _createClass2.default)(GameSceneUI, [{
                        key: "createChildren",
                        value: function createChildren() {
                            (0, _get2.default)((0, _getPrototypeOf2.default)(GameSceneUI.prototype), "createChildren", this).call(this);
                            this.loadScene("UI/GameScene");
                        }
                    }]);
                    return GameSceneUI;
                }(Scene);
                UI.GameSceneUI = GameSceneUI;
                REG("ui.UI.GameSceneUI", GameSceneUI);
                var hitEggViewUI = /* */ function (_Scene2) {
                    (0, _inherits2.default)(hitEggViewUI, _Scene2);
                    var _super3 = _createSuper(hitEggViewUI);
                    function hitEggViewUI() {
                        (0, _classCallCheck2.default)(this, hitEggViewUI);
                        return _super3.call(this);
                    }
                    (0, _createClass2.default)(hitEggViewUI, [{
                        key: "createChildren",
                        value: function createChildren() {
                            (0, _get2.default)((0, _getPrototypeOf2.default)(hitEggViewUI.prototype), "createChildren", this).call(this);
                            this.createView(hitEggViewUI.uiView);
                        }
                    }]);
                    return hitEggViewUI;
                }(Scene);
                hitEggViewUI.uiView = {
                    type: "Scene",
                    props: {
                        width: 750,
                        height: 1334
                    },
                    compId: 1,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 750,
                            var: "bg",
                            skin: "viewMaster/img_bg.png",
                            height: 1334
                        },
                        compId: 2
                    }, {
                        type: "Box",
                        props: {
                            var: "box_reward",
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 38,
                        child: [{
                            type: "Box",
                            props: {
                                x: 114,
                                width: 522,
                                var: "box",
                                height: 867,
                                centerY: -50
                            },
                            compId: 46,
                            child: [{
                                type: "Image",
                                props: {
                                    skin: "viewMaster/txt_gxhd.png",
                                    centerX: 0
                                },
                                compId: 39
                            }, {
                                type: "Image",
                                props: {
                                    y: 125,
                                    x: 112,
                                    skin: "viewMaster/txt_kdlq.png",
                                    centerX: 0
                                },
                                compId: 40
                            }, {
                                type: "Image",
                                props: {
                                    x: 111,
                                    skin: "viewMaster/img_box.png",
                                    centerY: 0
                                },
                                compId: 41
                            }, {
                                type: "Image",
                                props: {
                                    y: 707,
                                    x: 88.5,
                                    skin: "viewMaster/img_pro2.png"
                                },
                                compId: 42,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 3,
                                        x: 3,
                                        width: 340,
                                        var: "img_pro",
                                        skin: "viewMaster/img_pro1.png"
                                    },
                                    compId: 43
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 52,
                                        x: 112.5,
                                        texture: "viewMaster/txt_ksdj.png"
                                    },
                                    compId: 44
                                }]
                            }, {
                                type: "Button",
                                props: {
                                    y: 134.5,
                                    x: 477,
                                    var: "btn_close",
                                    stateNum: 1,
                                    skin: "viewMaster/btn_close.png"
                                },
                                compId: 48
                            }]
                        }]
                    }, {
                        type: "Animation",
                        props: {
                            y: 1206,
                            x: 375,
                            width: 310,
                            var: "hitEggBtn",
                            source: "viewMaster/00.png,viewMaster/01.png,viewMaster/02.png,viewMaster/03.png,viewMaster/04.png,viewMaster/05.png,viewMaster/06.png",
                            pivotY: 100,
                            pivotX: 155,
                            height: 200
                        },
                        compId: 47
                    }],
                    loadList: ["viewMaster/img_bg.png", "viewMaster/txt_gxhd.png", "viewMaster/txt_kdlq.png", "viewMaster/img_box.png", "viewMaster/img_pro2.png", "viewMaster/img_pro1.png", "viewMaster/txt_ksdj.png", "viewMaster/btn_close.png", "viewMaster/00.png,viewMaster/01.png,viewMaster/02.png,viewMaster/03.png,viewMaster/04.png,viewMaster/05.png,viewMaster/06.png"],
                    loadList3D: []
                };
                UI.hitEggViewUI = hitEggViewUI;
                REG("ui.UI.hitEggViewUI", hitEggViewUI);
                var LoadingScnenUI = /* */ function (_Scene3) {
                    (0, _inherits2.default)(LoadingScnenUI, _Scene3);
                    var _super4 = _createSuper(LoadingScnenUI);
                    function LoadingScnenUI() {
                        (0, _classCallCheck2.default)(this, LoadingScnenUI);
                        return _super4.call(this);
                    }
                    (0, _createClass2.default)(LoadingScnenUI, [{
                        key: "createChildren",
                        value: function createChildren() {
                            (0, _get2.default)((0, _getPrototypeOf2.default)(LoadingScnenUI.prototype), "createChildren", this).call(this);
                            this.loadScene("UI/LoadingScnen");
                        }
                    }]);
                    return LoadingScnenUI;
                }(Scene);
                UI.LoadingScnenUI = LoadingScnenUI;
                REG("ui.UI.LoadingScnenUI", LoadingScnenUI);
                var ResultUI = /* */ function (_Scene4) {
                    (0, _inherits2.default)(ResultUI, _Scene4);
                    var _super5 = _createSuper(ResultUI);
                    function ResultUI() {
                        (0, _classCallCheck2.default)(this, ResultUI);
                        return _super5.call(this);
                    }
                    (0, _createClass2.default)(ResultUI, [{
                        key: "createChildren",
                        value: function createChildren() {
                            (0, _get2.default)((0, _getPrototypeOf2.default)(ResultUI.prototype), "createChildren", this).call(this);
                            this.createView(ResultUI.uiView);
                        }
                    }]);
                    return ResultUI;
                }(Scene);
                ResultUI.uiView = {
                    "x": 0,
                    "type": "Scene",
                    "selectedBox": 2,
                    "selecteID": 22,
                    "searchKey": "Scene",
                    "props": { "width": 750, "height": 1334, "autoDestroyAtClosed": true },
                    "nodeParent": -1,
                    "maxID": 23,
                    "loadList3D": [
                    ],
                    "loadList": [
                        "UI0/img_bg.jpg",
                        "UI0/img_next.png",
                        "UI0/img_again.png",
                        "UI0/img_nextlevel.png",
                        "UI0/img_cgcg.png"],
                    "label": "Scene",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 2,
                    "child": [
                        {
                            "x": 15,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": { "top": 0, "skin": "UI0/img_bg.jpg", "sizeGrid": "4,4,4,4", "right": 0, "left": 0, "bottom": 0 },
                            "nodeParent": 2,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 18,
                            "child": [
                            ]
                        },
                        {
                            "x": 15,
                            "type": "Button",
                            "searchKey": "Button,btn_home",
                            "props": { "y": 509, "x": -259, "visible": false, "var": "btn_home", "stateNum": 1 },
                            "nodeParent": 2,
                            "label": "btn_home",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 13,
                            "child": [
                            ]
                        },
                        {
                            "x": 15,
                            "type": "Button",
                            "searchKey": "Button,btn_next",
                            "props": { "y": 965, "x": 247, "var": "btn_next", "stateNum": 1, "skin": "UI0/img_next.png", "scaleY": 1.7, "scaleX": 1.7 },
                            "nodeParent": 2,
                            "label": "btn_next",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 14,
                            "child": [
                            ]
                        },
                        {
                            "x": 15,
                            "type": "Button",
                            "searchKey": "Button,btn_again",
                            "props": { "y": 965, "var": "btn_again", "stateNum": 1, "skin": "UI0/img_again.png", "scaleY": 1.5, "scaleX": 1.5, "left": 64 },
                            "nodeParent": 2,
                            "label": "btn_again",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 15,
                            "child": [
                            ]
                        },
                        {
                            "x": 15,
                            "type": "Button",
                            "searchKey": "Button,btn_nextlevel",
                            "props": { "y": 965, "var": "btn_nextlevel", "stateNum": 1, "skin": "UI0/img_nextlevel_video.png", "scaleY": 1.7, "scaleX": 1.7, "right": 39 },
                            "nodeParent": 2,
                            "label": "btn_nextlevel",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 16,
                            "child": [
                            ]
                        },
                        {
                            "x": 15,
                            "type": "Image",
                            "searchKey": "Image,img_type",
                            "props": { "y": 200, "x": 256, "var": "img_type", "skin": "UI0/img_cgcg.png" },
                            "nodeParent": 2,
                            "label": "img_type",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 12,
                            "child": [
                            ]
                        },
                        {
                            "x": 15,
                            "type": "List",
                            "searchKey": "List,list_showList",
                            "props": { "y": 387, "x": 55, "width": 800, "var": "list_showList", "scaleY": 0.8, "scaleX": 0.8, "repeatY": 2, "repeatX": 2, "height": 600 },
                            "nodeParent": 2,
                            "label": "list_showList",
                            "isOpen": false,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 20,
                            "child": [
                                {
                                    "type": "Box",
                                    "searchKey": "Box",
                                    "props": { "y": 0, "x": 0, "renderType": "render" },
                                    "nodeParent": 20,
                                    "label": "Box",
                                    "isOpen": true,
                                    "isDirectory": true,
                                    "isAniNode": false,
                                    "hasChild": true,
                                    "compId": 19,
                                    "child": [
                                        {
                                            "type": "Image",
                                            "searchKey": "Image,thumb",
                                            "props": { "width": 400, "name": "thumb", "height": 300 },
                                            "nodeParent": 19,
                                            "label": "thumb",
                                            "isDirectory": false,
                                            "isAniNode": false,
                                            "hasChild": false,
                                            "compId": 21,
                                            "child": [
                                            ]
                                        }]
                                }]
                        },
                        {
                            "x": 15,
                            "type": "Image",
                            "searchKey": "Image,btn_goHome",
                            "props": { "y": 958, "x": 267, "var": "btn_goHome", "skin": "UI0/img_hom.png", "scaleY": 1.8, "scaleX": 1.8 },
                            "nodeParent": 2,
                            "label": "btn_goHome",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 22,
                            "child": [
                            ]
                        }],
                    "animations": [
                        {
                            "nodes": [
                            ],
                            "name": "ani1",
                            "id": 1,
                            "frameRate": 24,
                            "action": 0
                        }]
                };
                UI.ResultUI = ResultUI;
                REG("ui.UI.ResultUI", ResultUI);
                var shopViewUI = /* */ function (_Dialog) {
                    (0, _inherits2.default)(shopViewUI, _Dialog);
                    var _super6 = _createSuper(shopViewUI);
                    function shopViewUI() {
                        (0, _classCallCheck2.default)(this, shopViewUI);
                        return _super6.call(this);
                    }
                    (0, _createClass2.default)(shopViewUI, [{
                        key: "createChildren",
                        value: function createChildren() {
                            (0, _get2.default)((0, _getPrototypeOf2.default)(shopViewUI.prototype), "createChildren", this).call(this);
                            this.loadScene("UI/shopView");
                        }
                    }]);
                    return shopViewUI;
                }(Dialog);
                UI.shopViewUI = shopViewUI;
                REG("ui.UI.shopViewUI", shopViewUI);
            })(UI = ui.UI || (ui.UI = {}));
        })(ui || (ui = {}));
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
    /* global Reflect, Promise */    var _extendStatics = function extendStatics(d, b) {
            _extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (d, b) {
                d.__proto__ = b;
            } || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }
            };
            return _extendStatics(d, b);
        };
        function __extends(d, b) {
            _extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var _assign = function __assign() {
            _assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) {
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                }
                return t;
            };
            return _assign.apply(this, arguments);
        };
        function __rest(s, e) {
            var t = {};
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            }
            if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
            }
            return t;
        }
        function __decorate(decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) {
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __param(paramIndex, decorator) {
            return function (target, key) {
                decorator(target, key, paramIndex);
            };
        }
        function __metadata(metadataKey, metadataValue) {
            if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }
        function __awaiter(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : new P(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }
        function __generator(thisArg, body) {
            var _ = {
                label: 0,
                sent: function sent() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                return this;
            }), g;
            function verb(n) {
                return function (v) {
                    return step([n, v]);
                };
            }
            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) {
                    try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y),
                            0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;

                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };

                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;

                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;

                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [6, e];
                        y = 0;
                    } finally {
                        f = t = 0;
                    }
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        }
        function __exportStar(m, exports) {
            for (var p in m) {
                if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }
        }
        function __values(o) {
            var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
            if (m) return m.call(o);
            return {
                next: function next() {
                    if (o && i >= o.length) o = void 0;
                    return {
                        value: o && o[i++],
                        done: !o
                    };
                }
            };
        }
        function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                    ar.push(r.value);
                }
            } catch (error) {
                e = {
                    error: error
                };
            } finally {
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        }
        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++) {
                ar = ar.concat(__read(arguments[i]));
            }
            return ar;
        }
        function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i;
            function verb(n) {
                if (g[n]) i[n] = function (v) {
                    return new Promise(function (a, b) {
                        q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                };
            }
            function resume(n, v) {
                try {
                    step(g[n](v));
                } catch (e) {
                    settle(q[0][3], e);
                }
            }
            function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }
            function fulfill(value) {
                resume("next", value);
            }
            function reject(value) {
                resume("throw", value);
            }
            function settle(f, v) {
                if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        }
        function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function (e) {
                throw e;
            }), verb("return"), i[Symbol.iterator] = function () {
                return this;
            }, i;
            function verb(n, f) {
                i[n] = o[n] ? function (v) {
                    return (p = !p) ? {
                        value: __await(o[n](v)),
                        done: n === "return"
                    } : f ? f(v) : v;
                } : f;
            }
        }
        function __asyncValues(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](),
                i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                    return this;
                }, i);
            function verb(n) {
                i[n] = o[n] && function (v) {
                    return new Promise(function (resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                    });
                };
            }
            function settle(resolve, reject, d, v) {
                Promise.resolve(v).then(function (v) {
                    resolve({
                        value: v,
                        done: d
                    });
                }, reject);
            }
        }
        function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
                Object.defineProperty(cooked, "raw", {
                    value: raw
                });
            } else {
                cooked.raw = raw;
            }
            return cooked;
        }
        function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) {
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
            result.default = mod;
            return result;
        }
        function __importDefault(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        }
        var CannonManager = /* */ function () {
            function CannonManager() {
                (0, _classCallCheck2.default)(this, CannonManager);
                this.gravity = -9.8 * 1;
                this.cannonStep = 1;
                this.cannonRefreshDelta = 1 / 30;
            }
            (0, _createClass2.default)(CannonManager, [{
                key: "enableCannonWorld",
                value: function enableCannonWorld() {
                    console.log("enable cannon world");
                    this.world = new CANNON.World();
                    this.world.gravity.set(0, this.gravity, 0);
                    this.world.broadphase = new CANNON.NaiveBroadphase();
                    this.world.quatNormalizeFast = false;
                    this.world.quatNormalizeSkip = 0;
                    this.world.defaultContactMaterial.restitution = 0;
                    this.world.defaultMaterial.restitution = -1;
                    Laya.timer.frameLoop(this.cannonStep, this, this.updateCannonWorld);
                    this.setWorldIterations(10);
                }
            }, {
                key: "updateCannonWorld",
                value: function updateCannonWorld() {
                    this.world.step(this.cannonRefreshDelta);
                }
            }, {
                key: "setWorldIterations",
                value: function setWorldIterations(iterations) {
                    this.world.solver["iterations"] = iterations;
                    console.log("set iterations", iterations);
                }
            }, {
                key: "removeConstraint",
                value: function removeConstraint(constraint) {
                    this.world.removeConstraint(constraint);
                }
            }], [{
                key: "instacne",
                get: function get() {
                    if (!CannonManager._instance) CannonManager._instance = new CannonManager();
                    return CannonManager._instance;
                }
            }]);
            return CannonManager;
        }();
        var ES = /* */ function (_Laya$EventDispatcher2) {
            (0, _inherits2.default)(ES, _Laya$EventDispatcher2);
            var _super7 = _createSuper(ES);
            function ES() {
                (0, _classCallCheck2.default)(this, ES);
                return _super7.apply(this, arguments);
            }
            (0, _createClass2.default)(ES, null, [{
                key: "instance",
                get: function get() {
                    if (!this._instace) {
                        this._instace = new ES();
                    }
                    return this._instace;
                }
            }]);
            return ES;
        }(Laya.EventDispatcher);
        ES.on_level_start = "on_level_start";
        ES.on_level_restart = "on_level_restart";
        ES.on_level_change = "on_level_change";
        ES.on_level_win = "on_level_win";
        ES.on_level_lose = "on_level_lose";
        ES.on_level_loaded = "on_level_loaded";
        ES.on_floor_clear = "on_floor_clear";
        ES.on_floor_change = "on_floor_change";
        ES.on_mouse_down = "on_mouse_down";
        ES.on_mouse_up = "on_mouse_up";
        ES.remove_balloon = "remove_balloon";
        ES.setBallCount = "setBallCount";
        ES.showDance = "showDance";
        ES.playguide = "playguide";
        ES.on_game_start = "on_game_start";
        ES.on_game_CloseG = "on_game_CloseG";
        function traverse(node, callback) {
            callback.runWith(node);
            if (node.numChildren > 0) for (var i = 0; i < node.numChildren; i++) {
                traverse(node.getChildAt(i), callback);
            }
        }
        var Node = function () {
            Laya.Node.prototype.find = function (path) {
                var self = this;
                if (!path) return self;
                var arr = path.split("/");
                var cur = self;
                while (arr.length > 0) {
                    cur = cur.getChildByName(arr.shift());
                    if (!cur) return null;
                }
                return cur;
            };
            Laya.Node.prototype.findChild = function (name) {
                var self = this;
                for (var i = 0; i < self.numChildren; i++) {
                    var n = self.getChildAt(i);
                    if (n.name === name) return n; else if (n.numChildren > 0) {
                        var m = n.findChild(name);
                        if (m != null) {
                            return m;
                        }
                    }
                }
                return null;
            };
            Laya.Node.prototype.traverse = function (call) {
                var h = new Laya.Handler(Laya.Node.prototype, call);
                traverse(this, h);
                h.recover();
            };
        }();
        var Preload = /* */ function () {
            function Preload() {
                (0, _classCallCheck2.default)(this, Preload);
            }
            (0, _createClass2.default)(Preload, [{
                key: "getPrefab",
                value: function getPrefab(tag) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee() {
                        var _prefab, b;
                        return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        _prefab = Laya.loader.getRes(Preload.preloadUrl + tag + ".lh");
                                        if (!_prefab) {
                                            _context.next = 5;
                                            break;
                                        }
                                        return _context.abrupt("return", _prefab);

                                    case 5:
                                        Laya.loader.create(Preload.preloadUrl + tag + ".lh");
                                        _context.next = 8;
                                        return this.loadPrefab(tag);

                                    case 8:
                                        b = _context.sent;
                                        return _context.abrupt("return", b);

                                    case 10:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                }
            }, {
                key: "loadPrefab",
                value: function loadPrefab(tag) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee2() {
                        var _this4 = this;
                        return _regenerator.default.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        return _context2.abrupt("return", new Promise(function (resolve, reject) {
                                            Laya.loader.create(Preload.preloadUrl + tag + ".lh", Laya.Handler.create(_this4, function () {
                                                resolve(Laya.loader.getRes(Preload.preloadUrl + tag + ".lh"));
                                            }));
                                        }));

                                    case 1:
                                    case "end":
                                        return _context2.stop();
                                }
                            }
                        }, _callee2);
                    }));
                }
            }], [{
                key: "instance",
                get: function get() {
                    if (!Preload._instance) {
                        Preload._instance = new Preload();
                    }
                    return Preload._instance;
                }
            }]);
            return Preload;
        }();
        Preload.preloadUrl = "UnityRes/LayaScene_AssetsScene/Conventional/";
        Preload.preloadArray = [Preload.preloadUrl + "BallMat0.lh"];
        var Utils = /* */ function () {
            function Utils() {
                (0, _classCallCheck2.default)(this, Utils);
            }
            (0, _createClass2.default)(Utils, null, [{
                key: "size",
                value: function size(obj) {
                    var index = 0;
                    for (var k in obj) {
                        index++;
                    }
                    return index;
                }
            }, {
                key: "vibrate",
                value: function vibrate() {
                    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var wx = Laya.Browser.window.wx;
                    if (wx) {
                        type === 0 ? wx.vibrateShort({}) : wx.vibrateLong({});
                    }
                }
            }, {
                key: "findChild",
                value: function findChild(node, name) {
                    for (var i = 0; i < node.numChildren; i++) {
                        var n = node.getChildAt(i);
                        return n.name === name ? n : this.findChild(n, name);
                    }
                }
            }, {
                key: "traverse",
                value: function traverse(node, callback) {
                    callback.runWith(node);
                    if (node.numChildren > 0) for (var i = 0; i < node.numChildren; i++) {
                        Utils.traverse(node.getChildAt(i), callback);
                    }
                }
            }, {
                key: "random",
                value: function random(min, max) {
                    var float = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    return float ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min) + min);
                }
            }, {
                key: "loadObj",
                value: function loadObj(url) {
                    return new Promise(function (resolve) {
                        Laya.Sprite3D.load(url, Laya.Handler.create(null, function (res) {
                            return resolve(Laya.Sprite3D.instantiate(res));
                        }));
                    });
                }
            }, {
                key: "wait",
                value: function wait(time) {
                    return new Promise(function (resolve) {
                        Laya.timer.once(time, null, function () {
                            return resolve();
                        });
                    });
                }
            }, {
                key: "WorldToScreen",
                value: function WorldToScreen(point, camera) {
                    var tx = camera.transform;
                    var pointA = Utils.InverseTransformPoint(tx, point);
                    var distance = pointA.z;
                    var halfFOV = camera.fieldOfView * .5 * Math.PI / 180;
                    var height = distance * Math.tan(halfFOV);
                    var width = height * camera.aspectRatio;
                    var lowerLeft = new Laya.Vector3();
                    var right = new Laya.Vector3();
                    tx.getRight(right);
                    var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
                    Laya.Vector3.subtract(tx.position, xx, lowerLeft);
                    var up = new Laya.Vector3();
                    tx.getUp(up);
                    var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
                    Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
                    var forward = new Laya.Vector3();
                    tx.getForward(forward);
                    var zz = new Laya.Vector3(-forward.x * distance, -forward.y * distance, -forward.z * distance);
                    Laya.Vector3.add(lowerLeft, zz, lowerLeft);
                    var v = new Laya.Vector3();
                    v.x = Laya.stage.width / width / 2;
                    v.y = Laya.stage.height / height / 2;
                    v.z = 0;
                    var value = new Laya.Vector3();
                    var lowerLeftA = this.InverseTransformPoint(tx, lowerLeft);
                    Laya.Vector3.subtract(pointA, lowerLeftA, value);
                    value = new Laya.Vector3(value.x * v.x, value.y * v.y, pointA.z);
                    return value;
                }
            }, {
                key: "ScreenToWorld",
                value: function ScreenToWorld(point, camera) {
                    var halfFOV = camera.fieldOfView * 1 * Math.PI / 180;
                    var height = point.z * Math.tan(halfFOV);
                    var width = height * camera.aspectRatio;
                    var lowerLeft = this.GetLowerLeft(camera.transform, point.z, width, height);
                    var v = this.GetScreenScale(width, height);
                    var value = new Laya.Vector3();
                    var lowerLeftA = this.InverseTransformPoint(camera.transform, lowerLeft);
                    value = new Laya.Vector3(-point.x / v.x, point.y / v.y, 0);
                    Laya.Vector3.add(lowerLeftA, value, value);
                    value = this.TransformPoint(camera.transform, value);
                    return value;
                }
            }, {
                key: "GetScreenScale",
                value: function GetScreenScale(width, height) {
                    var v = new Laya.Vector3();
                    v.x = Laya.stage.width / width / 2;
                    v.y = Laya.stage.height / height / 2;
                    return v;
                }
            }, {
                key: "GetLowerLeft",
                value: function GetLowerLeft(transform, distance, width, height) {
                    var lowerLeft = new Laya.Vector3();
                    var right = new Laya.Vector3();
                    transform.getRight(right);
                    Laya.Vector3.normalize(right, right);
                    var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
                    Laya.Vector3.add(transform.position, xx, lowerLeft);
                    var up = new Laya.Vector3();
                    transform.getUp(up);
                    Laya.Vector3.normalize(up, up);
                    var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
                    Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
                    var forward = new Laya.Vector3();
                    transform.getForward(forward);
                    Laya.Vector3.normalize(forward, forward);
                    var zz = new Laya.Vector3(forward.x * distance, forward.y * distance, forward.z * distance);
                    Laya.Vector3.subtract(lowerLeft, zz, lowerLeft);
                    return lowerLeft;
                }
            }, {
                key: "InverseTransformPoint",
                value: function InverseTransformPoint(origin, point) {
                    var xx = new Laya.Vector3();
                    origin.getRight(xx);
                    var yy = new Laya.Vector3();
                    origin.getUp(yy);
                    var zz = new Laya.Vector3();
                    origin.getForward(zz);
                    var zz1 = new Laya.Vector3(-zz.x, -zz.y, -zz.z);
                    var x = Utils.ProjectDistance(point, origin.position, xx);
                    var y = Utils.ProjectDistance(point, origin.position, yy);
                    var z = Utils.ProjectDistance(point, origin.position, zz1);
                    var value = new Laya.Vector3(x, y, z);
                    return value;
                }
            }, {
                key: "TransformPoint",
                value: function TransformPoint(origin, point) {
                    var value = new Laya.Vector3();
                    Laya.Vector3.transformQuat(point, origin.rotation, value);
                    Laya.Vector3.add(value, origin.position, value);
                    return value;
                }
            }, {
                key: "ProjectDistance",
                value: function ProjectDistance(first, cen, second) {
                    var aa = new Laya.Vector3();
                    Laya.Vector3.subtract(first, cen, aa);
                    var angle = Utils.Angle(aa, second) * Math.PI / 180;
                    var distance = Laya.Vector3.distance(first, cen);
                    distance *= Math.cos(angle);
                    return distance;
                }
            }, {
                key: "Angle",
                value: function Angle(ma, mb) {
                    var v1 = ma.x * mb.x + ma.y * mb.y + ma.z * mb.z;
                    var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
                    var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
                    var cosM = v1 / (ma_val * mb_val);
                    var angleAMB = Math.acos(cosM) * 180 / Math.PI;
                    return angleAMB;
                }
            }, {
                key: "Vec3LayaToCannon",
                value: function Vec3LayaToCannon(ori) {
                    var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    if (out != null) {
                        out.x = ori.x;
                        out.y = ori.y;
                        out.z = ori.z;
                        return out;
                    } else {
                        return new CANNON.Vec3(ori.x, ori.y, ori.z);
                    }
                }
            }, {
                key: "Vec3CannonToLaya",
                value: function Vec3CannonToLaya(ori) {
                    return new Laya.Vector3(ori.x, ori.y, ori.z);
                }
            }, {
                key: "QuaLayaToCannon",
                value: function QuaLayaToCannon(ori) {
                    return new CANNON.Quaternion(ori.x, ori.y, ori.z, ori.w);
                }
            }]);
            return Utils;
        }();
        Utils._up = new Laya.Vector3(0, 1, 0);
        Utils._zero = new Laya.Vector3();
        var ColliderMask = /* */ function () {
            function ColliderMask() {
                (0, _classCallCheck2.default)(this, ColliderMask);
            }
            (0, _createClass2.default)(ColliderMask, null, [{
                key: "instacne",
                get: function get() {
                    if (!this._instance) {
                        ColliderMask._instance = new ColliderMask();
                    }
                    return ColliderMask.instacne;
                }
            }]);
            return ColliderMask;
        }();
        ColliderMask.collidergroup = {
            normal: 1,
            player: 1,
            dog: 1,
            pane: 1,
            notDraw: 2
        };
        var Vec3 = CANNON.Vec3;
        var Body = CANNON.Body;
        var CannonCollider = /* */ function (_Laya$Script3D) {
            (0, _inherits2.default)(CannonCollider, _Laya$Script3D);
            var _super8 = _createSuper(CannonCollider);
            function CannonCollider() {
                var _this5;
                (0, _classCallCheck2.default)(this, CannonCollider);
                _this5 = _super8.call(this);
                _this5._moveByForce = true;
                return _this5;
            }
            (0, _createClass2.default)(CannonCollider, [{
                key: "onAwake",
                value: function onAwake() {
                    this._owner = this.owner;
                    this._trans = this._owner.transform;
                }
            }, {
                key: "initCollider",
                value: function initCollider(col) {
                    var _mass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var isTrigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var isbox = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                    var colCal = arguments.length > 4 ? arguments[4] : undefined;
                    var tag = arguments.length > 5 ? arguments[5] : undefined;
                    var isFreezeRot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
                    this._col = col;
                    if (_mass == 0) {
                        this._moveByForce = false;
                    }
                    this._colliderCall = colCal;
                    var phyMat = new CANNON.Material();
                    phyMat.friction = 1;
                    phyMat.restitution = .01;
                    var _angularFactor = new CANNON.Vec3(1, 1, 1);
                    if (isFreezeRot) {
                        _angularFactor = new CANNON.Vec3(0, 0, 0);
                    }
                    this._body = new Body({
                        mass: _mass,
                        material: phyMat,
                        quaternion: Utils.QuaLayaToCannon(this._trans.rotation),
                        position: Utils.Vec3LayaToCannon(this._trans.position),
                        linearFactor: new CANNON.Vec3(1, 1, 1),
                        angularFactor: _angularFactor
                    });
                    var offs = new Laya.Vector3();
                    var rot = new Laya.Quaternion();
                    if (this._col != this._owner) {
                        Laya.Vector3.scale(col.transform.localPosition, 1, offs);
                        rot = col.transform.localRotation;
                    } else { }
                    var _offset = Utils.Vec3LayaToCannon(offs);
                    var _offsetRot = Utils.QuaLayaToCannon(rot);
                    if (isbox) {
                        var box = new CANNON.Box(new Vec3(col.transform.getWorldLossyScale().x * .5, col.transform.getWorldLossyScale().y * .5, col.transform.getWorldLossyScale().z * .5));
                        this._body.addShape(box, _offset, _offsetRot);
                    } else {
                        var Sphere = new CANNON.Sphere(col.transform.getWorldLossyScale().x * .5);
                        this._body.addShape(Sphere, _offset, _offsetRot);
                    }
                    this._body.tag = tag;
                    this._body.owner = this._owner;
                    this._body.material.friction = 1;
                    if (isTrigger) {
                        this._body.collisionResponse = false;
                    }
                    if (this._colliderCall) {
                        this._body.addEventListener("collide", this.onCollisionEnter.bind(this));
                    }
                    this._body.collisionFilterGroup = ColliderMask.collidergroup.normal;
                    this._body.collisionFilterMask = ColliderMask.collidergroup.normal;
                    CannonManager.instacne.world.addBody(this._body);
                    return this._body;
                }
            }, {
                key: "initCollider2",
                value: function initCollider2(cols) {
                    var _mass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var isTrigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var isbox = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                    var colCal = arguments.length > 4 ? arguments[4] : undefined;
                    var tag = arguments.length > 5 ? arguments[5] : undefined;
                    var isFreezeRot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
                    if (_mass == 0) {
                        this._moveByForce = false;
                    }
                    this._colliderCall = colCal;
                    var phyMat = new CANNON.Material();
                    phyMat.friction = 1;
                    phyMat.restitution = .01;
                    var _angularFactor = new CANNON.Vec3(1, 1, 1);
                    if (isFreezeRot) {
                        _angularFactor = new CANNON.Vec3(0, 0, 0);
                    }
                    this._body = new Body({
                        mass: _mass,
                        material: phyMat,
                        quaternion: Utils.QuaLayaToCannon(this._trans.rotation),
                        position: Utils.Vec3LayaToCannon(this._trans.position),
                        linearFactor: new CANNON.Vec3(1, 1, 1),
                        angularFactor: _angularFactor
                    });
                    for (var i = 0; i < cols.length; i++) {
                        var item = cols[i];
                        var offs = item.transform.localPosition;
                        var rot = new Laya.Quaternion();
                        rot = item.transform.localRotation;
                        var _offset = Utils.Vec3LayaToCannon(offs);
                        var _offsetRot = Utils.QuaLayaToCannon(rot);
                        var box = new CANNON.Box(new Vec3(item.transform.getWorldLossyScale().x * .5, item.transform.getWorldLossyScale().y * .5, item.transform.getWorldLossyScale().z * .5));
                        this._body.addShape(box, _offset, _offsetRot);
                    }
                    this._body.tag = tag;
                    this._body.owner = this._owner;
                    this._body.material.friction = 1;
                    if (isTrigger) {
                        this._body.collisionResponse = false;
                    }
                    if (this._colliderCall) {
                        this._body.addEventListener("collide", this.onCollisionEnter.bind(this));
                    }
                    this._body.collisionFilterGroup = ColliderMask.collidergroup.normal;
                    this._body.collisionFilterMask = ColliderMask.collidergroup.normal;
                    CannonManager.instacne.world.addBody(this._body);
                    return this._body;
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (this._moveByForce) {
                        this._owner.transform.position.x = this._body.position.x;
                        this._owner.transform.position.y = this._body.position.y;
                        this._owner.transform.position.z = this._body.position.z;
                        this._owner.transform.position = this._owner.transform.position;
                        this._owner.transform.rotation.x = this._body.quaternion.x;
                        this._owner.transform.rotation.y = this._body.quaternion.y;
                        this._owner.transform.rotation.z = this._body.quaternion.z;
                        this._owner.transform.rotation.w = this._body.quaternion.w;
                        this._owner.transform.rotation = this._owner.transform.rotation;
                    } else {
                        this._body.position.x = this._owner.transform.position.x;
                        this._body.position.y = this._owner.transform.position.y;
                        this._body.position.z = this._owner.transform.position.z;
                        this._body.quaternion.x = this._owner.transform.rotation.x;
                        this._body.quaternion.y = this._owner.transform.rotation.y;
                        this._body.quaternion.z = this._owner.transform.rotation.z;
                        this._body.quaternion.w = this._owner.transform.rotation.w;
                        this._body.quaternion = this._body.quaternion;
                    }
                }
            }, {
                key: "onCollisionEnter",
                value: function onCollisionEnter(res) {
                    this._colliderCall(res);
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    CannonManager.instacne.world.removeBody(this._body);
                }
            }, {
                key: "onEnable",
                value: function onEnable() {
                    if (this._body) {
                        CannonManager.instacne.world.addBody(this._body);
                    }
                }
            }]);
            return CannonCollider;
        }(Laya.Script3D);
        var Compontent3D = /* */ function (_Laya$Script3D2) {
            (0, _inherits2.default)(Compontent3D, _Laya$Script3D2);
            var _super9 = _createSuper(Compontent3D);
            function Compontent3D() {
                (0, _classCallCheck2.default)(this, Compontent3D);
                return _super9.call(this);
            }
            (0, _createClass2.default)(Compontent3D, [{
                key: "onAwake",
                value: function onAwake() {
                    this._owner = this.owner;
                    this._trans = this._owner.transform;
                }
            }, {
                key: "setUp",
                value: function setUp(info) { }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    ES.instance.offAllCaller(this);
                    Laya.timer.clearAll(this);
                }
            }]);
            return Compontent3D;
        }(Laya.Script3D);
        var Item = /* */ function (_Compontent3D) {
            (0, _inherits2.default)(Item, _Compontent3D);
            var _super10 = _createSuper(Item);
            function Item() {
                var _this6;
                (0, _classCallCheck2.default)(this, Item);
                _this6 = _super10.call(this);
                _this6.mass = 1;
                _this6.nowMass = 1;
                _this6.iscom = false;
                _this6.levelStart = false;
                _this6.balloons = [];
                _this6.floatage = new CANNON.Vec3(0, _this6.mass * 9.8, 0);
                _this6.viewPoint = new Laya.Vector4();
                _this6.flag = false;
                return _this6;
            }
            (0, _createClass2.default)(Item, [{
                key: "onAwake",
                value: function onAwake() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Item.prototype), "onAwake", this).call(this);
                    ES.instance.on(ES.on_level_start, this, this.onlevelStart);
                }
            }, {
                key: "setUp",
                value: function setUp(info) {
                    if (info.name == "Item2") {
                        this.iscom = true;
                    }
                    this.nowMass = this.mass = Number(info.mass);
                    this.collider = this._owner.addComponent(CannonCollider);
                    var col = this._owner.getChildByName("Collider");
                    if (col.numChildren == 0) {
                        this.collider.initCollider(col, this.mass * 2, false, true, this.onCollisionEnter.bind(this), "item", false);
                    } else {
                        var cols = [];
                        for (var i = 0; i < col.numChildren; i++) {
                            var item = col.getChildAt(i);
                            cols.push(item);
                        }
                        this.collider.initCollider2(cols, this.mass * 2, false, true, this.onCollisionEnter.bind(this), "item");
                    }
                    this.collider._body.material.friction = 1;
                    this.collider._body.material.restitution = 1e-6;
                }
            }, {
                key: "onlevelStart",
                value: function onlevelStart() {
                    this.collider._body.mass = this.mass * 2;
                    this.levelStart = true;
                }
            }, {
                key: "addBalloon",
                value: function addBalloon(bCtrl) {
                    this.nowMass--;
                    console.log("当前重量", this.nowMass);
                    this.balloons.push(bCtrl);
                }
            }, {
                key: "reduceBalloon",
                value: function reduceBalloon(bCtrl) {
                    this.nowMass++;
                    if (this.nowMass >= this.mass) {
                        this.nowMass = this.mass;
                    }
                    var i = this.balloons.indexOf(bCtrl);
                    if (i != -1) {
                        this.balloons.splice(i, 1);
                    }
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (this.levelStart) {
                        if (this.nowMass <= 0) {
                            this.collider._body.mass = .01;
                            this.collider._body.applyForce(this.floatage, CANNON.Vec3.ZERO);
                            if (this.iscom) this.collider._body.collisionResponse = false;
                        } else {
                            this.collider._body.mass = this.mass * 2;
                            this.collider._body.collisionResponse = true;
                        }
                    } else { }
                    if (this._trans.position.y >= 10) {
                        GameManager.instance.mainCamera.viewport.project(this._trans.position, GameManager.instance.mainCamera.projectionViewMatrix, this.viewPoint);
                        if (this.viewPoint.y <= -50) {
                            this.removeAndScore();
                        }
                    }
                }
            }, {
                key: "removeAndScore",
                value: function removeAndScore() {
                    if (this.flag) {
                        return;
                    }
                    this.flag = true;
                    ES.instance.event(ES.remove_balloon);
                    this._owner.removeSelf();
                    this.balloons.forEach(function (item) {
                        if (item._owner.active) {
                            item.removeBalloon();
                        }
                    });
                }
            }]);
            return Item;
        }(Compontent3D);
        var CameraMoveScript = /* */ function (_Laya$Script3D3) {
            (0, _inherits2.default)(CameraMoveScript, _Laya$Script3D3);
            var _super11 = _createSuper(CameraMoveScript);
            function CameraMoveScript() {
                var _this7;
                (0, _classCallCheck2.default)(this, CameraMoveScript);
                _this7 = _super11.call(this);
                _this7._tempVector3 = new Laya.Vector3();
                _this7.yawPitchRoll = new Laya.Vector3();
                _this7.resultRotation = new Laya.Quaternion();
                _this7.tempRotationZ = new Laya.Quaternion();
                _this7.tempRotationX = new Laya.Quaternion();
                _this7.tempRotationY = new Laya.Quaternion();
                _this7.rotaionSpeed = 6e-5;
                return _this7;
            }
            (0, _createClass2.default)(CameraMoveScript, [{
                key: "onAwake",
                value: function onAwake() {
                    Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown);
                    Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
                    this.camera = this.owner;
                }
            }, {
                key: "_onDestroy",
                value: function _onDestroy() {
                    Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown);
                    Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    var elapsedTime = Laya.timer.delta;
                    if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
                        var scene = this.owner.scene;
                        Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-.01 * elapsedTime);
                        Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(.01 * elapsedTime);
                        Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-.01 * elapsedTime);
                        Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(.01 * elapsedTime);
                        Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(.01 * elapsedTime);
                        Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(-.01 * elapsedTime);
                        var offsetX = Laya.stage.mouseX - this.lastMouseX;
                        var offsetY = Laya.stage.mouseY - this.lastMouseY;
                        var yprElem = this.yawPitchRoll;
                        yprElem.x -= offsetX * this.rotaionSpeed * elapsedTime;
                        yprElem.y -= offsetY * this.rotaionSpeed * elapsedTime;
                        this.updateRotation();
                    }
                    this.lastMouseX = Laya.stage.mouseX;
                    this.lastMouseY = Laya.stage.mouseY;
                }
            }, {
                key: "mouseDown",
                value: function mouseDown(e) {
                    this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll);
                    this.lastMouseX = Laya.stage.mouseX;
                    this.lastMouseY = Laya.stage.mouseY;
                    this.isMouseDown = true;
                }
            }, {
                key: "mouseUp",
                value: function mouseUp(e) {
                    this.isMouseDown = false;
                    console.log(this.camera.transform.localRotationEuler);
                }
            }, {
                key: "moveForward",
                value: function moveForward(distance) {
                    this._tempVector3.x = 0;
                    this._tempVector3.y = 0;
                    this._tempVector3.z = distance;
                    this.camera.transform.translate(this._tempVector3);
                }
            }, {
                key: "moveRight",
                value: function moveRight(distance) {
                    this._tempVector3.y = 0;
                    this._tempVector3.z = 0;
                    this._tempVector3.x = distance;
                    this.camera.transform.translate(this._tempVector3);
                }
            }, {
                key: "moveVertical",
                value: function moveVertical(distance) {
                    this._tempVector3.x = this._tempVector3.z = 0;
                    this._tempVector3.y = distance;
                    this.camera.transform.translate(this._tempVector3, false);
                }
            }, {
                key: "updateRotation",
                value: function updateRotation() {
                    if (Math.abs(this.yawPitchRoll.y) < 1.5) {
                        Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ);
                        this.tempRotationZ.cloneTo(this.camera.transform.localRotation);
                        this.camera.transform.localRotation = this.camera.transform.localRotation;
                    }
                }
            }]);
            return CameraMoveScript;
        }(Laya.Script3D);
        var Plane = /* */ function (_Compontent3D2) {
            (0, _inherits2.default)(Plane, _Compontent3D2);
            var _super12 = _createSuper(Plane);
            function Plane() {
                (0, _classCallCheck2.default)(this, Plane);
                return _super12.call(this);
            }
            (0, _createClass2.default)(Plane, [{
                key: "onStart",
                value: function onStart() {
                    this.collider = this._owner.addComponent(CannonCollider);
                    var col = this._owner.getChildByName("Collider");
                    var cols = [];
                    for (var i = 0; i < col.numChildren; i++) {
                        var element = col.getChildAt(i);
                        cols.push(element);
                    }
                    this.collider.initCollider2(cols, 0, false, true, this.onCollisionEnter.bind(this), "plane");
                }
            }]);
            return Plane;
        }(Compontent3D);
        var Chain = /* */ function (_Compontent3D3) {
            (0, _inherits2.default)(Chain, _Compontent3D3);
            var _super13 = _createSuper(Chain);
            function Chain() {
                var _this8;
                (0, _classCallCheck2.default)(this, Chain);
                _this8 = _super13.call(this);
                _this8.mass = .01;
                _this8.constraints = [];
                return _this8;
            }
            (0, _createClass2.default)(Chain, [{
                key: "onAwake",
                value: function onAwake() {
                    var _this9 = this;
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Chain.prototype), "onAwake", this).call(this);
                    this.collider = this._owner.addComponent(CannonCollider);
                    var col = this._owner.findChild("Collider");
                    if (col != null) {
                        this.body = this.collider.initCollider(col, this.mass, true, true, this.onCollisionEnter.bind(this), "chain");
                    } else {
                        this.body = this.collider.initCollider(this._owner, this.mass, true, true, this.onCollisionEnter.bind(this), "chain");
                    }
                    this.body.mass = 0;
                    Laya.timer.frameOnce(30, this, function () {
                        _this9.setLastConstraint();
                    });
                }
            }, {
                key: "setLastConstraint",
                value: function setLastConstraint() {
                    if (this.last == null) {
                        return;
                    }
                    this.body.mass = this.mass;
                    var p1 = new CANNON.Vec3(0, .7, 0);
                    var p2 = new CANNON.Vec3(0, -.7, 0);
                    var constraint = new CANNON.LockConstraint(this.collider._body, this.last);
                    CannonManager.instacne.world.addConstraint(constraint);
                    this.constraints.push(constraint);
                }
            }, {
                key: "setFinishConstraint",
                value: function setFinishConstraint(end, endPoint) {
                    var p1 = new CANNON.Vec3(0, -.5, 0);
                    var p = new Laya.Vector3();
                    var point = new Laya.Sprite3D();
                    end.owner.addChild(point);
                    point.transform.position = endPoint;
                    p = point.transform.localPosition.clone();
                    point.removeSelf();
                    var p2 = Utils.Vec3LayaToCannon(p);
                    var constraint = new CANNON.PointToPointConstraint(this.collider._body, p1, end, p2);
                    CannonManager.instacne.world.addConstraint(constraint);
                    this.constraints.push(constraint);
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Chain.prototype), "onDisable", this).call(this);
                    this.constraints.forEach(function (item) {
                        CannonManager.instacne.removeConstraint(item);
                    });
                }
            }]);
            return Chain;
        }(Compontent3D);
        var Rope = /* */ function (_Compontent3D4) {
            (0, _inherits2.default)(Rope, _Compontent3D4);
            var _super14 = _createSuper(Rope);
            function Rope() {
                var _this10;
                (0, _classCallCheck2.default)(this, Rope);
                _this10 = _super14.call(this);
                _this10.ropeLength = 5;
                _this10.ropeCount = 5;
                _this10.ropePrefabs = [];
                _this10.prefabLength = 1.5;
                _this10.chains = [];
                return _this10;
            }
            (0, _createClass2.default)(Rope, [{
                key: "onStart",
                value: function onStart() { }
            }, {
                key: "setUpRope",
                value: function setUpRope(from, to, start, end, endPoint) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee3() {
                        var i, chain, chainCtrl;
                        return _regenerator.default.wrap(function _callee3$(_context3) {
                            while (1) {
                                switch (_context3.prev = _context3.next) {
                                    case 0:
                                        this.ropeLength = Laya.Vector3.distance(from, to);
                                        this.ropeLength = Math.ceil(this.ropeLength);
                                        this.ropeCount = Math.ceil(this.ropeLength / this.prefabLength);
                                        this.startBody = start;
                                        this.endBody = end;
                                        this.endPoint = endPoint;
                                        console.log("段数 ", this.ropeCount);
                                        if (!(this.ropePrefabs.length == 0)) {
                                            _context3.next = 13;
                                            break;
                                        }
                                        _context3.t0 = this.ropePrefabs;
                                        _context3.next = 11;
                                        return Preload.instance.getPrefab("Rope0");

                                    case 11:
                                        _context3.t1 = _context3.sent;
                                        _context3.t0.push.call(_context3.t0, _context3.t1);

                                    case 13:
                                        for (i = 0; i < this.ropeCount; i++) {
                                            chain = this.ropePrefabs[i % this.ropePrefabs.length].clone();
                                            this._owner.addChild(chain);
                                            chain.transform.localPosition = new Laya.Vector3(0, -1 * this.prefabLength * (i + 1), 0);
                                            chainCtrl = chain.addComponent(Chain);
                                            this.chains.push(chainCtrl);
                                            if (i != 0) {
                                                chainCtrl.last = this.lastBody;
                                            } else {
                                                chainCtrl.last = this.startBody;
                                            }
                                            if (i == this.ropeCount - 1) {
                                                chainCtrl.setFinishConstraint(this.endBody, this.endPoint);
                                            }
                                            chainCtrl.setLastConstraint();
                                            this.lastBody = chainCtrl.body;
                                        }

                                    case 14:
                                    case "end":
                                        return _context3.stop();
                                }
                            }
                        }, _callee3, this);
                    }));
                }
            }]);
            return Rope;
        }(Compontent3D);
        var Balloon = /* */ function (_Compontent3D5) {
            (0, _inherits2.default)(Balloon, _Compontent3D5);
            var _super15 = _createSuper(Balloon);
            function Balloon() {
                var _this11;
                (0, _classCallCheck2.default)(this, Balloon);
                _this11 = _super15.call(this);
                _this11.floatage = new CANNON.Vec3(0, .5 * 9.8, 0);
                _this11.constraints = [];
                _this11.flag = false;
                return _this11;
            }
            (0, _createClass2.default)(Balloon, [{
                key: "onAwake",
                value: function onAwake() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Balloon.prototype), "onAwake", this).call(this);
                    this.collider = this._owner.addComponent(CannonCollider);
                    var col = this._owner.getChildByName("Collider");
                    this.collider.initCollider(col, .1, false, true, this.onCollisionEnter.bind(this), "balloon", true);
                    this.collider._body.mass = 0;
                    this.collider._body.material.restitution = 1;
                    this.render = this._owner.getChildByName("Render");
                    this.ani = this.render.getComponent(Laya.Animator);
                    this.setMat();
                    this.efect = this._owner.getChildByName("Efect");
                    Laya.SoundManager.playSound("audio/add.mp3");
                }
            }, {
                key: "setMat",
                value: function setMat() {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee4() {
                        var i, matPrefab, _i, _render;
                        return _regenerator.default.wrap(function _callee4$(_context4) {
                            while (1) {
                                switch (_context4.prev = _context4.next) {
                                    case 0:
                                        i = Math.floor(Math.random() * 5);
                                        _context4.next = 3;
                                        return Preload.instance.getPrefab("BallMat" + i);

                                    case 3:
                                        matPrefab = _context4.sent;
                                        if (matPrefab.meshRenderer != null) {
                                            for (_i = 0; _i < this.render.numChildren; _i++) {
                                                _render = this.render.getChildAt(_i);
                                                _render.meshRenderer.material = matPrefab.meshRenderer.material;
                                            }
                                        }

                                    case 5:
                                    case "end":
                                        return _context4.stop();
                                }
                            }
                        }, _callee4, this);
                    }));
                }
            }, {
                key: "setTarget",
                value: function setTarget(_target, endPoint) {
                    var _this12 = this;
                    this.target = _target;
                    this.endPoint = endPoint;
                    var rope = this._owner.addComponent(Rope);
                    rope.setUpRope(this._trans.position, endPoint, this.collider._body, this.target, this.endPoint);
                    Laya.timer.once(50, this, function () {
                        _this12.collider._body.mass = .1;
                        Laya.timer.loop(10, _this12, _this12.onloop);
                    });
                }
            }, {
                key: "onEnable",
                value: function onEnable() { }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (this._trans.position.y >= 35) {
                        console.log("气球爆炸0");
                        this.removeBalloon();
                    }
                }
            }, {
                key: "onloop",
                value: function onloop() {
                    if (this.collider) {
                        this.collider._body.applyForce(this.floatage, new CANNON.Vec3());
                    }
                }
            }, {
                key: "removeBalloon",
                value: function removeBalloon() {
                    var _this13 = this;
                    var istouch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    if (this.flag) {
                        return;
                    }
                    this.flag = true;
                    this.ani.play("break");
                    if (istouch) {
                        this.item.reduceBalloon(this);
                    }
                    this.efect.active = true;
                    this.efect.particleSystem.play();
                    Laya.timer.once(300, this, function () {
                        ES.instance.event(ES.remove_balloon);
                        _this13._owner.removeSelf();
                    });
                    console.log("气球爆炸");
                    Laya.SoundManager.playSound("audio/exp.mp3");
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Balloon.prototype), "onDisable", this).call(this);
                    this.constraints.forEach(function (item) {
                        CannonManager.instacne.removeConstraint(item);
                    });
                }
            }]);
            return Balloon;
        }(Compontent3D);
        var CameraCtrl = /* */ function (_Compontent3D6) {
            (0, _inherits2.default)(CameraCtrl, _Compontent3D6);
            var _super16 = _createSuper(CameraCtrl);
            function CameraCtrl() {
                var _this14;
                (0, _classCallCheck2.default)(this, CameraCtrl);
                _this14 = _super16.call(this);
                _this14.balloonCount = 1;
                _this14.nowCount = 2;
                _this14.isLevelStart = false;
                _this14.tuochRay = new CANNON.Ray();
                _this14.ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
                _this14.cRayDir = new Laya.Vector3();
                return _this14;
            }
            (0, _createClass2.default)(CameraCtrl, [{
                key: "onAwake",
                value: function onAwake() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(CameraCtrl.prototype), "onAwake", this).call(this);
                    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
                    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
                    ES.instance.on(ES.on_level_start, this, this.onLevelStart);
                    ES.instance.on(ES.on_level_win, this, this.onLevelFinsh);
                    ES.instance.on(ES.on_level_lose, this, this.onLevelFinsh);
                    ES.instance.on(ES.on_level_restart, this, this.onLevelFinsh);
                    ES.instance.on(ES.showDance, this, this.onLevelFinsh);
                    ES.instance.on(ES.remove_balloon, this, this.addCount);
                }
            }, {
                key: "onLevelStart",
                value: function onLevelStart() {
                    this.isLevelStart = true;
                    this.balloonCount = 1;
                    this.nowCount = 1;
                }
            }, {
                key: "onLevelFinsh",
                value: function onLevelFinsh() {
                    this.isLevelStart = false;
                }
            }, {
                key: "cameraRay",
                value: function cameraRay(point) {
                    if (!GameScene.startGame) {
                        return;
                    }
                    this._owner.viewportPointToRay(point, this.ray);
                    Laya.Vector3.subtract(this.ray.origin, this._trans.position, this.cRayDir);
                    Laya.Vector3.normalize(this.cRayDir, this.cRayDir);
                    Laya.Vector3.scale(this.cRayDir, 100, this.cRayDir);
                    Laya.Vector3.add(this.ray.origin, this.cRayDir, this.cRayDir);
                    var ori = this.ray.origin.clone();
                    this.rayFrom = Utils.Vec3LayaToCannon(ori);
                    this.rayTo = Utils.Vec3LayaToCannon(this.cRayDir);
                    this.tuochRay.intersectWorld(CannonManager.instacne.world, {
                        mode: 1,
                        result: false,
                        skipBackfaces: true,
                        collisionFilterMask: -1,
                        collisionFilterGroup: -1,
                        from: this.rayFrom,
                        to: this.rayTo,
                        callback: function callback() { }
                    });
                    if (this.tuochRay.result.hasHit) {
                        return this.tuochRay.result;
                    } else {
                        return null;
                    }
                }
            }, {
                key: "mouseDown",
                value: function mouseDown() {
                    if (this.isLevelStart == false) {
                        return;
                    }
                    console.log("mouseDown");
                    var point = new Laya.Vector2(Laya.stage.mouseX * Laya.stage.clientScaleX, Laya.stage.mouseY * Laya.stage.clientScaleY);
                    var result = this.cameraRay(point);
                    if (result != null) {
                        var body = result.body;
                        console.log(result.body.tag)
                        if (result.body.tag == "item") {
                            this.createBallon(result);
                        } else if (body.tag == "balloon") {
                            var ballCtrl = body.owner.getComponent(Balloon);
                            ballCtrl.removeBalloon(true);
                        }
                    }
                }
            }, {
                key: "mouseUp",
                value: function mouseUp() { }
            }, {
                key: "createBallon",
                value: function createBallon(result) {
                    return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee5() {
                        var body, pos, itemCtrl, balloon, bCtrl;
                        return _regenerator.default.wrap(function _callee5$(_context5) {
                            while (1) {
                                switch (_context5.prev = _context5.next) {
                                    case 0:
                                        if (!(this.nowCount <= 0)) {
                                            _context5.next = 2;
                                            break;
                                        }
                                        return _context5.abrupt("return");

                                    case 2:
                                        body = result.body;
                                        console.log(body.tag);
                                        if (!(body.tag == "item")) {
                                            _context5.next = 18;
                                            break;
                                        }
                                        pos = Utils.Vec3CannonToLaya(result.hitPointWorld);
                                        itemCtrl = body.owner.getComponent(Item);
                                        _context5.next = 9;
                                        return Preload.instance.getPrefab("Balloon");

                                    case 9:
                                        balloon = _context5.sent.clone();
                                        balloon.transform.position = pos;
                                        balloon.transform.position.y += 2.5;
                                        balloon.transform.position = balloon.transform.position;
                                        GameManager.instance.sceneRoot.addChild(balloon);
                                        bCtrl = balloon.addComponent(Balloon);
                                        bCtrl.setTarget(body, pos);
                                        bCtrl.item = itemCtrl;
                                        itemCtrl.addBalloon(bCtrl);

                                    case 18:
                                        this._nowCount = -1;

                                    case 19:
                                    case "end":
                                        return _context5.stop();
                                }
                            }
                        }, _callee5, this);
                    }));
                }
            }, {
                key: "addCount",
                value: function addCount() {
                    this._nowCount = 1;
                }
            }, {
                key: "_nowCount",
                set: function set(count) {
                    this.nowCount += count;
                    var add = false;
                    if (count >= 0) {
                        add = true;
                    }
                    ES.instance.event(ES.setBallCount, [this.nowCount, add]);
                }
            }]);
            return CameraCtrl;
        }(Compontent3D);
        var Character = /* */ function (_Compontent3D7) {
            (0, _inherits2.default)(Character, _Compontent3D7);
            var _super17 = _createSuper(Character);
            function Character() {
                var _this15;
                (0, _classCallCheck2.default)(this, Character);
                _this15 = _super17.call(this);
                _this15.levelStart = false;
                _this15.won = false;
                return _this15;
            }
            (0, _createClass2.default)(Character, [{
                key: "onAwake",
                value: function onAwake() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Character.prototype), "onAwake", this).call(this);
                    this.collider = this._owner.addComponent(CannonCollider);
                    var col = this._owner.getChildByName("Collider");
                    col.meshRenderer.enable = false;
                    this.collider.initCollider(col, 0, false, true, this.onCollisionEnter.bind(this), "character");
                    Laya.timer.loop(50, this, this.checkItem);
                    Laya.timer.once(5e3, this, this.onLevelStart);
                    var tigger = this._owner.getChildByName("Trigger");
                    this.trigger = this._owner.addComponent(CannonCollider);
                    this.trigger.initCollider(tigger, 0, true, true, this.onTriggerEnter.bind(this), "trigger");
                    this.render = this._owner.getChildByName("Render");
                    this.ani = this.render.getComponent(Laya.Animator);
                }
            }, {
                key: "onLevelStart",
                value: function onLevelStart() {
                    this.levelStart = true;
                }
            }, {
                key: "checkItem",
                value: function checkItem() {
                    if (!this.trigger._body || this.levelStart == false) return;
                    var win = true;
                    for (var i = 0; i < this.trigger._body.world.contacts.length; i++) {
                        var c = this.trigger._body.world.contacts[i];
                        if (c.bi == this.trigger._body || c.bj == this.trigger._body) {
                            if (c.bi.tag == "item" || c.bj.tag == "item") {
                                win = false;
                            }
                        }
                    }
                    if (win) {
                        this.levelWin();
                    }
                }
            }, {
                key: "levelWin",
                value: function levelWin() {
                    var _this16 = this;
                    if (this.won) {
                        return;
                    }
                    this.won = true;
                    this.ani.play("stand");
                    ES.instance.event(ES.showDance);
                    // this.winsound = Laya.SoundManager.playSound("audio/win.mp3");
                    Laya.timer.once(500, this, function () {
                        _this16.ani.play("win");
                        ES.instance.event(ES.on_level_win);
                    });
                }
            }, {
                key: "onDisable",
                value: function onDisable() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(Character.prototype), "onDisable", this).call(this);
                    if (this.winsound != null) {
                        this.winsound.stop();
                    }
                }
            }]);
            return Character;
        }(Compontent3D);
        var GameManager = /* */ function (_Laya$Script) {
            (0, _inherits2.default)(GameManager, _Laya$Script);
            var _super18 = _createSuper(GameManager);
            function GameManager() {
                var _this17;
                (0, _classCallCheck2.default)(this, GameManager);
                _this17 = _super18.call(this);
                _this17.nowLevelIndex = GameViewMassage.level_num =
                    Laya.LocalStorage.getItem("Balloon-Rescue-level_num") ? JSON.parse(Laya.LocalStorage.getItem("Balloon-Rescue-level_num")) : 1;
                _this17.levelMax = 20;
                _this17.items = [];
                _this17.nowLevelloded = false;
                _this17.levelStart = false;
                _this17.inShopView = false;
                _this17.viewPoint = new Laya.Vector4();
                GameManager.instance = (0, _assertThisInitialized2.default)(_this17);
                Node;
                return _this17;
            }
            (0, _createClass2.default)(GameManager, [{
                key: "onAwake",
                value: function onAwake() {
                    console.log("gamemanager awake");
                    this.mainScene = Laya.loader.getRes("UnityRes/LayaScene_Main/Conventional/Main.ls");
                    console.log(this.mainScene)
                    Laya.stage.addChild(this.mainScene);
                    Laya.stage.setChildIndex(this.mainScene, 0);
                    this.sceneRoot = this.mainScene.getChildByName("SceneRoot");
                    this.mainCamera = this.mainScene.getChildByName("Main Camera");
                    this.mainCamera.addComponent(CameraCtrl);
                    this.mainCamera.addComponent(CameraMoveScript);
                    this.mainCamera.enableHDR = false;
                    this.preloadPrefab();
                    var that = this;
                    CannonManager.instacne.enableCannonWorld();
                    var light = that.mainScene.findChild("Directional Light");
                    light.shadowMode = Laya.ShadowMode.SoftLow;
                    light.shadowDistance = 50;
                    light.shadowResolution = 2048;
                    light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;

                    ES.instance.on(ES.on_level_loaded, this, this.onLevelLoaded);
                    ES.instance.on(ES.on_level_win, this, this.onLevelWin);
                    ES.instance.on(ES.showDance, this, this.onDance);
                    ES.instance.on(ES.on_level_start, this, this.onLevelStart);
                    ES.instance.on(ES.on_game_start, this, this.onGameStart);
                    ES.instance.on(ES.on_game_CloseG, this, this.onGameEnd);
                }
            }, {
                key: "preloadPrefab",
                value: function preloadPrefab() {
                    Laya.loader.load(Preload.preloadArray, Laya.Handler.create(this, this.afterPreload));
                }
            }, {
                key: "afterPreload",
                value: function afterPreload() {
                    platform.getInstance().hideSplash();
                    platform.getInstance().showBanner();
                    Laya.Scene.open("UI/GameScene.scene", true);
                    Laya.stage.setChildIndex(this.mainScene, 0);
                    Laya.timer.once(50, this, this.loadLevel);
                }
            }, {
                key: "updataLevel",
                value: function updataLevel() {
                    Laya.Scene.open("UI/GameScene.scene", true);
                    Laya.stage.setChildIndex(this.mainScene, 0);
                    Laya.timer.once(50, this, this.loadLevel);
                }
            }, {
                key: "loadLevel",
                value: function loadLevel() {
                    var _this18 = this;
                    console.log("loadLevel ", this.nowLevelIndex);
                    this.nowLevelloded = false;
                    var _level = this.nowLevelIndex % this.levelMax;
                    if (_level == 0) {
                        _level = this.levelMax;
                    }
                    Laya.loader.load("Levels/Lv_" + _level + ".json", Laya.Handler.create(this, function (res) {
                        var objs = res.objs;
                        objs.forEach(function (item, index) {
                            return __awaiter(_this18, void 0, void 0, /* */ _regenerator.default.mark(function _callee6() {
                                var _this19 = this;
                                var _tag, obj, _t;
                                return _regenerator.default.wrap(function _callee6$(_context6) {
                                    while (1) {
                                        switch (_context6.prev = _context6.next) {
                                            case 0:
                                                _tag = item.tag;
                                                console.log(_tag);
                                                if (!(_tag == "Camera")) {
                                                    _context6.next = 7;
                                                    break;
                                                }
                                                this.mainCamera.transform.position = new Laya.Vector3(-1 * item.position[0], item.position[1], item.position[2]);
                                                this.mainCamera.transform.localRotationEuler = new Laya.Vector3(-item.eulerAngle[0], 180 - item.eulerAngle[1], item.eulerAngle[2]);
                                                _context6.next = 14;
                                                break;

                                            case 7:
                                                _context6.next = 9;
                                                return Preload.instance.getPrefab(_tag);

                                            case 9:
                                                obj = _context6.sent.clone();
                                                obj.transform.worldMatrix = new Laya.Matrix4x4().fromArray(item.transform);
                                                this.sceneRoot.addChild(obj);
                                                _t = _tag.split("_")[0];
                                                Laya.timer.once(80, this, function () {
                                                    switch (_t) {
                                                        case "Item":
                                                            console.log("碰撞体");
                                                            var itemCtrl = obj.addComponent(Item);
                                                            itemCtrl.setUp(item);
                                                            _this19.items.push(itemCtrl);
                                                            break;

                                                        case "Plane":
                                                            obj.addComponent(Plane);
                                                            break;

                                                        case "Character":
                                                            obj.addComponent(Character);
                                                            break;

                                                        default:
                                                            break;
                                                    }
                                                });

                                            case 14:
                                            case "end":
                                                return _context6.stop();
                                        }
                                    }
                                }, _callee6, this);
                            }));
                        });
                        ES.instance.event(ES.on_level_loaded);
                        Laya.stage.setChildIndex(_this18.mainScene, 0);
                    }));
                }
            }, {
                key: "onLevelLoaded",
                value: function onLevelLoaded() {
                    this.nowLevelloded = true;
                    console.log("levelLoaded", GameScene.app);
                    if (GameScene.app != null) {
                        GameScene.app.onPlayGuide();
                    }
                }
            }, {
                key: "onGameStart",
                value: function onGameStart() {
                    if (this.nowLevelIndex == 1) {
                        this.showGuide();
                    }
                }
            }, {
                key: "onGameEnd",
                value: function onGameEnd() {
                    if (this.nowLevelIndex == 1) {
                        this.removeGuide();
                    }
                }
            }, {
                key: "onLevelStart",
                value: function onLevelStart() {
                    this.levelStart = true;
                }
            }, {
                key: "onLevelWin",
                value: function onLevelWin() {
                    if (this.nowLevelIndex == 1) {
                        this.removeGuide();
                    }
                }
            }, {
                key: "onDance",
                value: function onDance() {
                    this.items.forEach(function (item) {
                        item.removeAndScore();
                    });
                }
            }, {
                key: "clearLevel",
                value: function clearLevel() {
                    this.sceneRoot.removeChildren();
                    this.items = [];
                    this.levelStart = false;
                }
            }, {
                key: "levelRestart",
                value: function levelRestart() {
                    this.clearLevel();
                    Laya.timer.once(100, this, this.loadLevel);
                    ES.instance.event(ES.on_level_restart);
                }
            }, {
                key: "showShopView",
                value: function showShopView() {
                    Laya.Dialog.open("UI/shopView.scene");
                }
            }, {
                key: "onShopViewClose",
                value: function onShopViewClose() {
                    this.showGuide();
                }
            }, {
                key: "showGuide",
                value: function showGuide() {
                    if (this.guideAni == null && this.items[0] != undefined) {
                        var pos = this.items[0]._trans.position.clone();
                        this.mainCamera.viewport.project(pos, GameManager.instance.mainCamera.projectionViewMatrix, this.viewPoint);
                        var point = new Laya.Vector2(this.viewPoint.x / Laya.stage.clientScaleX, this.viewPoint.y / Laya.stage.clientScaleY);
                        this.guideAni = new Laya.Image("UI0/hand.png");
                        Laya.stage.addChild(this.guideAni);
                        this.guideAni.centerX = 0;
                        this.guideAni.y = point.y;
                        var lab = new Laya.Label("Remove items to save the boy");
                        this.guideAni.addChild(lab);
                        lab.fontSize = 30;
                        lab.color = "#ffffff";
                        lab.stroke = 3;
                        lab.strokeColor = "#2d2c2c";
                        lab.centerX = 0
                        lab.y = -100;
                    }
                }
            }, {
                key: "removeGuide",
                value: function removeGuide() {
                    if (this.guideAni) {
                        this.guideAni.removeSelf();
                        this.guideAni = null;
                    }
                }
            }]);
            return GameManager;
        }(Laya.Script);
        var LoadingScene = /* */ function (_ui$UI$LoadingScnenUI) {
            (0, _inherits2.default)(LoadingScene, _ui$UI$LoadingScnenUI);
            var _super19 = _createSuper(LoadingScene);
            function LoadingScene() {
                var _this20;
                (0, _classCallCheck2.default)(this, LoadingScene);
                _this20 = _super19.call(this);
                _this20.is_res = false;
                return _this20;
            }
            (0, _createClass2.default)(LoadingScene, [{
                key: "onAwake",
                value: function onAwake() {
                    this.height = Laya.stage.height;
                    this.pro1.width = 0;
                    if (GameViewMassage.adUtil == null) {
                        GameViewMassage.adUtil = new ADUtil();
                    }
                    if (wxCore.uo == null) {
                        new wxCore();
                    }
                    this.is_res = false;
                    LoadingScene.is_data = true;
                    GameViewMassage.mWX = new wxMinPro();
                    console.log("Loading Awake");
                    platform.getInstance().showSplash();
                    platform.getInstance().yadstartup("Balloon-Rescue", () => {
                        window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                        window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Balloon-Rescue-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Balloon-Rescue-musicState")) : false;
                        Laya.SoundManager.playMusic("audio/bgm.mp3");
                        let arr = ["UnityRes/LayaScene_AssetsScene/Conventional/Character.lh",
                            "UnityRes/LayaScene_AssetsScene/Conventional/Item0.lh",
                            "UnityRes/LayaScene_AssetsScene/Conventional/Plane.lh",
                            "UnityRes/LayaScene_AssetsScene/Conventional/Rope0.lh",
                            "UnityRes/LayaScene_AssetsScene/Conventional/Cube.lh",
                            "UnityRes/LayaScene_AssetsScene/Conventional/Camera.lh",
                            "UnityRes/LayaScene_AssetsScene/Conventional/Directional Light.lh",
                            "UnityRes/LayaScene_AssetsScene/Conventional/Balloon.lh"];
                        for (let i = 0; i < 26; i++) {
                            arr.push("UnityRes/LayaScene_AssetsScene/Conventional/Item_" + i + ".lh");
                        }
                        for (let a = 0; a < 3; a++) {
                            arr.push("UnityRes/LayaScene_AssetsScene/Conventional/Plane_" + a + ".lh");
                        }
                        for (let aa = 0; aa < 5; aa++) {
                            arr.push("UnityRes/LayaScene_AssetsScene/Conventional/BallMat" + aa + ".lh");
                        }
                        Laya.loader.create(arr, Laya.Handler.create(this, () => {
                            Laya.loader.create("UnityRes/LayaScene_Main/Conventional/Main.ls", Laya.Handler.create(this, this.sceneLoaded));
                        }));
                    })
                    LoadingScene.is_data = true;
                    Laya.timer.frameLoop(1, this, this.onFrame);
                }
            }, {
                key: "onEnable",
                value: function onEnable() { }
            }, {
                key: "onDisable",
                value: function onDisable() { }
            }, {
                key: "onFrame",
                value: function onFrame() {
                    var w = this.pro1.width;
                    w = w + 5;
                    if (this.is_res && LoadingScene.is_data) {
                        if (w >= 400) {
                            w = 400;
                            Laya.timer.clearAll(this);
                            var obg = {};
                            GameViewMassage.mWX.indexBpTotle("homepage_load ", obg);
                            console.log(111111111111111111111111111111)
                            Laya.stage.addComponent(GameManager);
                            LoadingScene.load_show_banner = false;
                            GameViewMassage.adUtil.hideBannerAd();
                        }
                    } else {
                        if (w >= 380) {
                            w = 380;
                        }
                    }
                    this.pro1.width = w;
                }
            }, {
                key: "sceneLoaded",
                value: function sceneLoaded(earcut) {
                    this.is_res = true;
                }
            }]);
            return LoadingScene;
        }(ui.UI.LoadingScnenUI);
        LoadingScene.is_data = false;
        LoadingScene.load_show_banner = false;
        LoadingScene.load_create_3D = false;
        var HttpRequest$1 = Laya.HttpRequest;
        var wxMinPro = /* */ function () {
            function wxMinPro() {
                (0, _classCallCheck2.default)(this, wxMinPro);
                this.mUID = 0;
                this.mOnOff = [];
                this.mCards = 0;
                this.mWeiXinVersion = "";
                this.mADKeep = 0;
                this.mHttpCall = null;
                this.mLaunch = null;
                this.mSaveImage = "";
                this.mMyRank = 0;
                this.mChallenge = null;
                this.mShareID = 0;
                this.mMarks = [0, 0, 0, 0];
                this.fhOnoff = 0;
                this.mrelayID = 0;
                this.maxToolCards = 2;
                this.mToolCards = 0;
                this.mReturnAppid = "";
                this.mReturnUrl = "";
                this.mTaskInfo = [];
                this.mCoinsNum = 0;
                this.mPropList = [];
                this.mUsingPropId = "2001";
                this.mStartAward = [];
                this.mUserData = [];
                this.mNowDay = 0;
                this.mWxAdUrl = [];
                this.mGamesBox = [];
                this.mShareCallback = null;
                this.mShareIsNoCallback = null;
                this.mShareIsAgainCallback = null;
                this.mCallShareTime = 0;
                this.mShareCount = 0;
                this.mPassAwardListData = [];
                this.mdtValues = null;
                this.stagesList = null;
                this.onOffData = {};
                this.onUserData = {};
                this.is_address = true;
            }
            (0, _createClass2.default)(wxMinPro, [{
                key: "onHttpRequestError",
                value: function onHttpRequestError(e) {
                    this.mHttpCall = null;
                    console.log("onHttpRequestError:" + e);
                }
            }, {
                key: "GetNowTime",
                value: function GetNowTime() {
                    var cell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var _this = this;
                    function onResult(e) {
                        LogUtil.log("GetNowTime()= " + e["code"] + "time" + e["time"]);
                        if (e["code"] == 0) {
                            GameViewMassage.mWX.stagesList = e["code"];
                            if (cell != null) {
                                cell(e["time"]);
                            }
                        }
                    }
                    var params = [];
                    params["uid"] = this.mUID;
                    wxCore.uo.server(wxCallBack.mIF["GetNowTime"], params, onResult);
                }
            }, {
                key: "getStageStatus",
                value: function getStageStatus() {
                    function onResult(ret) {
                        if (ret["code"] == 0) {
                            GameViewMassage.mWX.stagesList = ret["stages"];
                        } else {
                            GameViewMassage.mWX.stagesList;
                        }
                    }
                    var params = {};
                    params["uid"] = wxCore.uo.mWeUser["uid"];
                    wxCore.uo.server(wxCallBack.mIF["getstages"], params, onResult);
                }
            }, {
                key: "onLaunch",
                value: function onLaunch(mLaunch) {
                    var isLoadRes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    function onResult(ret) {
                        if (ret["code"] == 0) {
                            console.log("用户的数据", ret);
                            GameViewMassage.mWX.mMarks[0] = Number(ret["marks"]["mark"]);
                            GameViewMassage.mWX.fhOnoff = Number(ret["fh_onoff"]);
                            console.log("开关", GameViewMassage.mWX.fhOnoff);
                            ShareConfig.sShareUrls = ret["shareurl"];
                            GameViewMassage.mWX.mOnOff = ret["on_off"];
                            GameViewMassage.mWX.mNowDay = ret["nowday"];
                            GameViewMassage.mWX.mCoinsNum = Number(ret["coins"]);
                            GameViewMassage.mWX.mWxAdUrl = ret["wxadurl"];
                            GameViewMassage.mWX.mdtValues = ret["dt_values"];
                            GameViewMassage.mWX.ip_location = ret["ip_location"];
                            GameViewMassage.mWX.rightWXShare();
                            if (ret["user_data"] != undefined && ret["user_data"] != null && ret["user_data"].length > 0) GameViewMassage.mWX.mUserData = ret["user_data"];
                            GameViewMassage.mWX.setOnOff(ret);
                            GameViewMassage.mWX.setUserData();
                            GameViewMassage.mWX.ABGroup();
                            MistakeContent.Inst.init(ret);
                            GameViewMassage.mWX.mGamesBox = ret["games_box"];
                            wxCore.uo.mIsNewUser = ret["nowday"] == ret["regday"] ? 1 : 0;
                            GameViewMassage.mWX.maidianDate();
                            LoadingScene.is_data = true;
                            GameViewMassage.mWX.getStageStatus();
                            wxCore.uo.initVideoAD(ADUtil.sDefaultVideoId);
                            GameViewMassage.adUtil.showBannerAd("", 1, function () {
                                if (LoadingScene.load_show_banner && MistakeContent.Inst.NFList["of_loadorfirend_banner"].param.load == 1) {
                                    GameViewMassage.adUtil.showBannerAd("");
                                }
                            });
                        }
                    }
                    var user = wxCore.uo.getUser();
                    var params = {};
                    if (Laya.Browser.onIOS) params["platform"] = 2; else params["platform"] = 1;
                    params["uid"] = wxCore.uo.mWeUser["uid"];
                    params["ver"] = ConfigUtil.mVersion;
                    if (typeof mLaunch["query"]["uid"] != "undefined") params["target"] = mLaunch["query"]["uid"];
                    if (typeof mLaunch["query"]["type"] != "undefined") params["type"] = mLaunch["query"]["type"];
                    if (typeof mLaunch["query"]["id"] != "undefined") params["id"] = mLaunch["query"]["id"];
                    wxCore.uo.server(wxCallBack.mIF["lauch"], params, onResult);
                }
            }, {
                key: "setOnOff",
                value: function setOnOff(ret) {
                    var _this21 = this;
                    ret["on_off"].forEach(function (item) {
                        switch (item.key) {
                            case "of_videoid":
                                ADUtil.sDefaultVideoId = JSON.parse(item.param).videoid;
                                break;

                            case "of_bannerid":
                                ADUtil.sDefaultBannerId = JSON.parse(item.param).bannerid;
                                break;

                            case "of_startpage_showfenfa":
                            case "of_over_btntime":
                                item.param = JSON.parse(item.param);
                                if (!ret["fh_onoff"]) {
                                    item.value = 0;
                                }
                                _this21.onOffData[item.key] = item;
                                break;

                            default:
                                if (!ret["fh_onoff"]) {
                                    item.value = 0;
                                }
                                _this21.onOffData[item.key] = item.value;
                                break;
                        }
                    });
                }
            }, {
                key: "setUserData",
                value: function setUserData() {
                    var _this22 = this;
                    GameViewMassage.mWX.mUserData.forEach(function (res) {
                        switch (res["key"]) {
                            case "level_num":
                                GameViewMassage.level_num = Laya.LocalStorage.getItem("Balloon-Rescue-level_num") ? JSON.parse(Laya.LocalStorage.getItem("Balloon-Rescue-level_num")) : 1;
                                break;

                            case "level":
                                _this22.onUserData[res["key"]] = Number(res["values"]);
                                break;

                            case "gold":
                                localStorage.setItem("curMoney", String(res["values"]));
                                break;

                            case "shop_skin":
                                GameViewMassage.shop_skin = JSON.parse(res["values"]);
                                break;

                            case "first_adid":
                            case "first_channe_id":
                            case "first_media_type":
                            case "first_share_from":
                            case "nowtime":
                            case "sigh_id":
                            case "skin":
                                _this22.onUserData[res["key"]] = res["values"];
                                break;

                            default:
                                break;
                        }
                    });
                    console.log("11111111111111", this.onUserData);
                }
            }, {
                key: "rightWXShare",
                value: function rightWXShare() {
                    if (window["wx"]) {
                        wx.showShareMenu({
                            withShareTicket: true
                        });
                        this.shareApp();
                    }
                }
            }, {
                key: "shareApp",
                value: function shareApp() {
                    console.log("开启分享");
                    wx.onShareAppMessage(function () {
                        var shareId = ShareConfig.mShareIds["shareApp"];
                        var title = ShareConfig.sShareUrls[2]["title"];
                        var url = ShareConfig.sShareUrls[2]["url"];
                        return {
                            title: title,
                            imageUrl: url,
                            query: "uid=" + GameViewMassage.mWX.mUID + "&score=0&client=0&type=0&id=0&surl=" + shareId,
                            success: function success(res) { }
                        };
                    });
                }
            }, {
                key: "ABGroup",
                value: function ABGroup() {
                    if (Number(wxCore.uo.mWeUser["uid"]) % 2 != 0) {
                        wxCore.uo.group = "a";
                    }
                }
            }, {
                key: "address_1",
                value: function address_1() {

                }
            }, {
                key: "maidianDate",
                value: function maidianDate() {
                    if (wxCore.uo.mLaunch) {
                        var first_change_id = GameViewMassage.mWX.getUserDataByKey("first_channe_id");
                        if (first_change_id == undefined) {
                            if (wxCore.uo.mLaunch["query"]["wxgamecid"] != null) {
                                wxCore.uo.channe_id = wxCore.uo.mLaunch["query"]["wxgamecid"];
                                wxCore.uo.first_channe_id = wxCore.uo.mLaunch["query"]["wxgamecid"];
                            }
                            GameViewMassage.mWX.setUserValue("first_channe_id", wxCore.uo.first_channe_id + "");
                        } else {
                            if (wxCore.uo.mLaunch["query"]["wxgamecid"] != null) {
                                wxCore.uo.channe_id = wxCore.uo.mLaunch["query"]["wxgamecid"];
                            }
                            wxCore.uo.first_channe_id = GameViewMassage.mWX.getUserDataByKey("first_channe_id");
                        }
                    }
                    if (wxCore.uo.mLaunch) {
                        var _first_change_id = GameViewMassage.mWX.getUserDataByKey("first_adid");
                        if (_first_change_id == undefined) {
                            if (wxCore.uo.mLaunch["query"]["adid"] != null) {
                                wxCore.uo.adid = wxCore.uo.mLaunch["query"]["adid"];
                                wxCore.uo.first_adid = wxCore.uo.mLaunch["query"]["adid"];
                            }
                            GameViewMassage.mWX.setUserValue("first_adid", wxCore.uo.first_adid + "");
                        } else {
                            if (wxCore.uo.mLaunch["query"]["adid"] != null) {
                                wxCore.uo.adid = wxCore.uo.mLaunch["query"]["adid"];
                            }
                            wxCore.uo.first_adid = GameViewMassage.mWX.getUserDataByKey("first_adid");
                        }
                    }
                    GameViewMassage.mWX.address_1();
                }
            }, {
                key: "getOnOffByKey",
                value: function getOnOffByKey(key) {
                    if (this.fhOnoff == 0 && key != "of_jump") return false;
                    for (var i = 0; i < this.mOnOff.length; i++) {
                        if (this.mOnOff[i]["key"] == key) {
                            return this.mOnOff[i]["value"] != "0";
                        }
                    }
                    return false;
                }
            }, {
                key: "setUserValue",
                value: function setUserValue(dt_key, dt_value) {
                    var isShowLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    var _this = this;
                    function onResult(e) {
                        var ret = null;
                        if (typeof e == "string") ret = util.getJSON(e); else ret = util.getJSON(_this.mHttpCall.data);
                        if (ret["code"] == 0) {
                            _this.updateUserDataByKey(dt_key, dt_value);
                            if (callback != null) callback();
                        }
                        if (isShowLoading) wx.hideLoading();
                        _this.mHttpCall = null;
                    }
                    if (isShowLoading) wx.showLoading({
                        title: "",
                        mask: true,
                        success: function success() { },
                        fail: function fail() { },
                        complete: function complete() { }
                    });
                    this.mHttpCall = new HttpRequest$1();
                    this.mHttpCall.once(Laya.Event.COMPLETE, this, onResult);
                    this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var params = [];
                    params["uid"] = this.mUID;
                    params["dt_key"] = dt_key;
                    params["dt_value"] = dt_value;
                    var str = ConfigUtil.mURL + ConfigUtil.mCmd["SetUserValue"] + util.getUrlParams(params, "1.0.1");
                    this.mHttpCall.send(str, null, "get", "text");
                }
            }, {
                key: "getUserDataByKey",
                value: function getUserDataByKey(key) {
                    return GameViewMassage.mWX.onUserData[key];
                }
            }, {
                key: "updateUserDataByKey",
                value: function updateUserDataByKey(key, value) {
                    var count = 0;
                    for (var i = 0; i < this.mUserData.length; i++) {
                        if (this.mUserData[i]["key"] == key) {
                            this.mUserData[i]["values"] = value;
                        } else {
                            count++;
                        }
                    }
                    if (count == this.mUserData.length) {
                        var obj = new Object();
                        obj["key"] = key;
                        obj["values"] = value;
                        this.mUserData.push(obj);
                    }
                }
            }, {
                key: "getOnOffValueByKey",
                value: function getOnOffValueByKey(key) {
                    for (var i = 0; i < this.mOnOff.length; i++) {
                        if (this.mOnOff[i]["key"] == key) {
                            return this.mOnOff[i]["value"];
                        }
                    }
                    return "0";
                }
            }, {
                key: "getOnOffParamByKey",
                value: function getOnOffParamByKey(key) {
                    var result = "";
                    for (var i = 0; i < GameViewMassage.mWX.mOnOff.length; i++) {
                        if (GameViewMassage.mWX.mOnOff[i]["key"] == key) {
                            result = GameViewMassage.mWX.mOnOff[i]["param"];
                            break;
                        }
                    }
                    return result;
                }
            }, {
                key: "getShareTimeByCount",
                value: function getShareTimeByCount() {
                    var param = GameViewMassage.mWX.getOnOffParamByKey("of_share_time");
                    console.log("分享时间", param);
                    var result = param.split(",");
                    if (GameViewMassage.mWX.mShareCount > 0) {
                        return Number(result[result.length - 1]) / 1e3;
                    } else {
                        return Number(result[0]) / 1e3;
                    }
                }
            }, {
                key: "GetBPUrl",
                value: function GetBPUrl() {
                    var BPUrl = "";
                    if (wxCore.uo.mdtValues != null) {
                        BPUrl = wxCore.uo.mdtValues;
                        var c_uel = BPUrl.split("?");
                        return c_uel;
                    } else {
                        GameViewMassage.mWX.mdtValues.forEach(function (item) {
                            if (item["key"] == "dt_log_url") {
                                BPUrl = item["param"];
                                return;
                            }
                        });
                    }
                    var c_uel = BPUrl.split("?");
                    console.log("获得埋点地址", c_uel);
                    return c_uel;
                }
            }, {
                key: "indexBpTotle",
                value: function indexBpTotle(keyname, Cols) {
                    if (!window["wx"]) {
                        return;
                    }
                    var that = this;
                    function onResult(e) {
                        that.mHttpCall = null;
                    }
                    this.mHttpCall = new HttpRequest$1();
                    this.mHttpCall.once(Laya.Event.COMPLETE, this, this.onHttpRequestError);
                    Cols["uid"] = wxCore.uo.mWeUser["uid"];
                    Cols["is_new"] = wxCore.uo.mIsNewUser;
                    Cols["session_id"] = wxCore.uo.loginSession;
                    Cols["create_time"] = TimeUtil.getCurrTime();
                    Cols["channel_id"] = wxCore.uo.channe_id;
                    Cols["first_channel_id"] = wxCore.uo.first_channe_id;
                    Cols["adid"] = wxCore.uo.adid;
                    Cols["first_adid"] = wxCore.uo.first_adid;
                    Cols["group"] = wxCore.uo.group;
                    var param = {};
                    param["keyname"] = keyname;
                    param["uid"] = wxCore.uo.mWeUser["uid"];
                    param["clos"] = JSON.stringify(Cols);
                    var gameid = this.GetBPUrl()[1].split("=");
                    param["gameid"] = gameid[1];
                    var str = this.GetBPUrl()[0] + "?" + util.getUrlParams(param, "maidian");
                    console.log("埋点统计：", str);
                    this.mHttpCall.send(str, null, "get", "text");
                }
            }]);
            return wxMinPro;
        }();
        var ShareUtil = /* */ function () {
            function ShareUtil() {
                (0, _classCallCheck2.default)(this, ShareUtil);
            }
            (0, _createClass2.default)(ShareUtil, null, [{
                key: "shareProp",
                value: function shareProp(onSuccess) {
                    GameViewMassage.is_share = true;
                    var shareId = ShareConfig.mShareIds["shareProp"];
                    var title = ShareConfig.sShareUrls[2]["title"];
                    var url = ShareConfig.sShareUrls[2]["url"];
                    ShareUtil.is_exit = false;
                    GameViewMassage.mWX.mCallShareTime = TimeUtil.getCurrTime();
                    GameViewMassage.mWX.mShareCallback = function () {
                        onSuccess(true);
                    };
                    GameViewMassage.mWX.mShareIsNoCallback = function () {
                        GameViewMassage.mWX.mShareIsNoCallback = null;
                        onSuccess(false);
                    };
                    var success = onSuccess;
                    GameViewMassage.mWX.mShareIsAgainCallback = function () {
                        ShareUtil.shareProp(success);
                    };
                    wx.shareAppMessage({
                        title: title,
                        imageUrl: url,
                        query: "gift=" + GameViewMassage.mWX.mUID + "&uid=" + GameViewMassage.mWX.mUID + "&id=" + GameViewMassage.mWX.mShareID + "&score=0&client=0&type=0&surl=" + shareId,
                        success: function success(res) { },
                        fail: function fail(res) { }
                    });
                }
            }]);
            return ShareUtil;
        }();
        ShareUtil.is_exit = true;
        var wxCallBack = /* */ function () {
            function wxCallBack() {
                (0, _classCallCheck2.default)(this, wxCallBack);
                this.tip = null;
            }
            (0, _createClass2.default)(wxCallBack, [{
                key: "version",
                value: function version() {
                    return "1.0.1";
                }
            }, {
                key: "loginBtnPos",
                value: function loginBtnPos() {
                    return 160;
                }
            }, {
                key: "onBefore",
                value: function onBefore() {
                    return false;
                }
            }, {
                key: "onShow",
                value: function onShow() { }
            }, {
                key: "onReShow",
                value: function onReShow() { }
            }, {
                key: "onLogin",
                value: function onLogin(user, ret) {
                    GameViewMassage.mWX = new wxMinPro();
                    GameViewMassage.mWX.mUID = ret["uid"];
                    GameViewMassage.mWX.mLaunch = wxCore.uo.launch();
                    GameViewMassage.mWX.onLaunch(wxCore.uo.launch());
                    return true;
                }
            }, {
                key: "onEnterGame",
                value: function onEnterGame(frist, last, mLaunch) {
                    console.log("123", frist);
                    console.log("234", last);
                    console.log("345", mLaunch);
                    if (frist == true) { }
                    if (GameViewMassage.mWX.mShareCallback != null) {
                        ShareUtil.is_exit = true;
                        if (GameViewMassage.mWX.getOnOffValueByKey("of_share_time") == "0") {
                            GameViewMassage.mWX.mShareCallback();
                            GameViewMassage.mWX.mShareCallback = null;
                        } else {
                            if (TimeUtil.getCurrTime() - GameViewMassage.mWX.mCallShareTime > GameViewMassage.mWX.getShareTimeByCount()) {
                                GameViewMassage.mWX.mShareCallback();
                                GameViewMassage.mWX.mShareCallback = null;
                                GameViewMassage.mWX.mShareCount++;
                                GameViewMassage.mWX.mCallShareTime = 0;
                            } else {
                                if (GameViewMassage.mWX.mShareIsNoCallback != null) {
                                    GameViewMassage.mWX.mShareIsNoCallback();
                                    GameViewMassage.mWX.mShareIsNoCallback = null;
                                }
                                if (GameViewMassage.is_share) {
                                    Laya.timer.once(200, this, function () {
                                        wx.showToast({
                                            title: "分享到群生效",
                                            icon: "none",
                                            duration: 2e3,
                                            false: function _false(res) {
                                                console.log(res);
                                            },
                                            success: function success(res) {
                                                console.log(res);
                                            }
                                        });
                                    });
                                } else { }
                            }
                        }
                    }
                }
            }, {
                key: "onHideGame",
                value: function onHideGame() { }
            }]);
            return wxCallBack;
        }();
        wxCallBack.mIF = {
            wxinfo: {
                url: "1.0.1/qi_qiux/wxinfo?",
                key: "1.0.1",
                tips: "报告微信信息接口"
            },
            login: {
                url: "1.0.1/qi_qiux/login?",
                key: "1.0.1",
                tips: "登录服务"
            },
            lauch: {
                url: "1.0.1/qi_qiux/lauch?",
                key: "1.0.1",
                tips: "登录服务"
            },
            userinfo: {
                url: "1.0.1/qi_qiux/userinfo?",
                key: "1.0.1",
                tips: "更新用户信息"
            },
            getstages: {
                url: "1.0.1/qi_qiux/getstage?",
                key: "1.0.1",
                tips: "获取关卡配置"
            },
            GetNowTime: {
                url: "1.0.1/qi_qiux/GetNowTime?",
                key: "1.0.1",
                tips: "获取后台时间"
            }
        };
        var md5_hex$1 = /* */ function () {
            function md5_hex$1() {
                (0, _classCallCheck2.default)(this, md5_hex$1);
            }
            (0, _createClass2.default)(md5_hex$1, null, [{
                key: "MD5",
                value: function MD5(str) {
                    return new _MD().hex_md5(str);
                }
            }]);
            return md5_hex$1;
        }();
        var wxCore = /* */ function () {
            function wxCore() {
                (0, _classCallCheck2.default)(this, wxCore);
                this.version = "1.0.1";
                this.mLaunch = null;
                this.mWeUser = {};
                this.mPhone = {};
                this.mSDKVersion = "";
                this.iphoneX = false;
                this.mCallBack = null;
                this.mHttpCall = null;
                this.mLoginType = 1;
                this.mShowLogo = true;
                this.btnLogin = null;
                this.zOrder = 123;
                this.mFrist = true;
                this.mInit = false;
                this.mVideoAD = null;
                this.mNoVideo = false;
                this.mIsNewUser = 0;
                this.option123 = null;
                this.loginSession = null;
                this.first_share_from = null;
                this.sigh_id = null;
                this.channe_id = "0";
                this.first_channe_id = "0";
                this.adid = "0";
                this.first_adid = "0";
                this.group = "b";
                this.mdtValues = null;
                wxCore.uo = this;
                console.log("wxcore.uo = " + wxCore.uo);
                this.mCallBack = new wxCallBack();
            }
            (0, _createClass2.default)(wxCore, [{
                key: "screenHeight",
                value: function screenHeight() {
                    return this.mPhone["screenHeight"];
                }
            }, {
                key: "IsXP",
                value: function IsXP() {
                    if (Laya.Browser.onIOS && this.mPhone["screenWidth"] > 800) return true;
                    return false;
                }
            }, {
                key: "wxVersion",
                value: function wxVersion() {
                    return this.mSDKVersion;
                }
            }, {
                key: "getUser",
                value: function getUser() {
                    return this.mWeUser;
                }
            }, {
                key: "getUserID",
                value: function getUserID() {
                    return Number(this.mWeUser["uid"]);
                }
            }, {
                key: "phone",
                value: function phone() {
                    return this.mPhone;
                }
            }, {
                key: "launch",
                value: function launch() {
                    return this.mLaunch;
                }
            }, {
                key: "initWX",
                value: function initWX() {
                    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    var showlogo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    var zorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    this.mPhone = wx.getSystemInfoSync();
                    console.log("进入core", this.mPhone);
                    var str = this.mPhone["model"];
                    if (str.indexOf("iPhone X") >= 0) {
                        this.iphoneX = true;
                    }
                    this.mSDKVersion = this.mPhone["SDKVersion"];
                    var option = wx.getLaunchOptionsSync();
                    this.option123 = option["query"];
                    var res = {};
                    res["query"] = option["query"];
                    res["scene"] = option["scene"];
                    res["shareTicket"] = option["shareTicket"];
                    res["isSticky"] = option["isSticky"];
                    if (res["query"]["scene"] != null) {
                        var scene = decodeURIComponent(res["query"]["scene"]);
                        var params = scene.split("&");
                        for (var i = 0; i < params.length; i++) {
                            var param = params[i];
                            var keys = param.split("=");
                            if (keys.length == 2) res["query"][keys[0]] = keys[1];
                        }
                    }
                    this.mLaunch = res;
                    this.mLoginType = type;
                    this.mShowLogo = showlogo;
                    Laya.timer.callLater(this, this.check);
                }
            }, {
                key: "showLoginBtn",
                value: function showLoginBtn() {
                    console.log("showLoginBtn");
                    if (this.btnLogin != null) return;
                    var w = 0;
                    var h = 0;
                    var left = 0;
                    var top = 0;
                    var btn = "";
                    this.btnLogin = wx.createUserInfoButton({
                        type: "image",
                        withCredentials: false,
                        image: btn,
                        style: {
                            left: left,
                            top: top,
                            width: w,
                            height: h
                        }
                    });
                    this.btnLogin.show();
                    console.log(this.btnLogin);
                    this.btnLogin.onTap(function (res) {
                        if (typeof res["userInfo"] == "undefined") {
                            wx.showToast({
                                title: "游戏需要您授权头像和用户名信息!",
                                icon: "success",
                                image: "",
                                duration: 2e3
                            });
                            return;
                        }
                        wxCore.uo.btnLogin.destroy();
                        wxCore.uo.initUser(res);
                        wxCore.uo.btnLogin = null;
                    });
                }
            }, {
                key: "check",
                value: function check() {
                    wx.checkSession({
                        success: function success(res) {
                            console.log("checkSession ok");
                            wxCore.uo.login();
                        },
                        fail: function fail(res) {
                            console.log("checkSession fail");
                            wx.removeStorageSync("user");
                            wxCore.uo.login();
                        }
                    });
                }
            }, {
                key: "reLogin",
                value: function reLogin() {
                    wx.removeStorageSync("user");
                    this.login();
                }
            }, {
                key: "login",
                value: function login() {
                    var checked = true;
                    var user = wx.getStorageSync("user");
                    if ((0, _typeof2.default)(user) == "object") {
                        var openid = user["openid"];
                        if (openid == "" || openid == null) checked = false;
                        if (user["uid"] == "" || user["uid"] == null || Number(user["uid"]) < 1e4) checked = false;
                    } else checked = false;
                    if (checked) {
                        wxCore.uo.mWeUser = user;
                        wxCore.uo.checkCode("");
                    } else {
                        wx.login({
                            success: function success(res) {
                                wxCore.uo.checkCode(res.code);
                            },
                            fail: function fail(res) {
                                console.log("login fail,try again");
                                Laya.timer.once(1e3, wxCore.uo, wxCore.uo.login);
                            }
                        });
                    }
                }
            }, {
                key: "checkCode",
                value: function checkCode(code) {
                    console.log("开始登陆");
                    function onResult(ret) {
                        console.log("用户登录返回数据", ret);
                        if (ret["code"] == 0) {
                            wxCore.uo.mdtValues = ret["dt_value"];
                            wxCore.uo.loginSession = TimeUtil.getCurrTime();
                            if (wxCore.uo.mWeUser != null && wxCore.uo.mWeUser["uid"] == ret["uid"]) {
                                if (wxCore.uo.mWeUser["openid"] != ret["openid"]) {
                                    Laya.timer.once(100, wxCore.uo, wxCore.uo.reLogin);
                                    return;
                                }
                            } else {
                                wxCore.uo.mWeUser = {};
                                wxCore.uo.mWeUser["openid"] = ret["openid"];
                                wxCore.uo.mWeUser["uid"] = Number(ret["uid"]);
                            }
                            var obg = {};
                            GameViewMassage.mWX.indexBpTotle("app_open", obg);
                            if (wxCore.uo.mCallBack.onLogin(wxCore.uo.mWeUser, ret) == true) wxCore.uo.getUserInfo(); else wxCore.uo.init();
                        } else {
                            Laya.timer.once(1e3, wxCore.uo, wxCore.uo.reLogin);
                        }
                    }
                    var params = [];
                    params["code"] = code;
                    if (code == "") params["uid"] = wxCore.uo.mWeUser["uid"];
                    if (typeof this.mLaunch["query"]["uid"] != "undefined") params["master"] = this.mLaunch["query"]["uid"];
                    if (typeof this.mLaunch["query"]["agentid"] != "undefined") params["agentid"] = this.mLaunch["query"]["agentid"];
                    if (typeof this.mLaunch["query"]["adid"] != "undefined") params["adid"] = this.mLaunch["query"]["adid"];
                    params["ver"] = this.mCallBack.version();
                    this.server(wxCallBack.mIF["login"], params, onResult);
                }
            }, {
                key: "getUserInfo",
                value: function getUserInfo() {
                    if (this.mLoginType == 2) {
                        wxCore.uo.onEnter(null, this.mLaunch);
                        wxCore.uo.init();
                        return;
                    }
                    wx.getUserInfo({
                        withCredentials: false,
                        lang: "zh_CN",
                        success: function success(res) {
                            console.log(res);
                            wxCore.uo.initUser(res);
                        },
                        fail: function fail(res) {
                            console.log(res);
                            if (wxCore.uo.mSDKVersion >= "2.0.1") {
                                wxCore.uo.showLoginBtn();
                                wxCore.uo.mCallBack.onReShow();
                            } else {
                                wxCore.uo.wxAuthorize();
                            }
                        }
                    });
                }
            }, {
                key: "wxAuthorize",
                value: function wxAuthorize() {
                    wx.authorize({
                        scope: "scope.userInfo",
                        success: function success(res) {
                            wxCore.uo.getUserInfo();
                        },
                        fail: function fail(res) {
                            wxCore.uo.openSeting();
                        }
                    });
                }
            }, {
                key: "openSeting",
                value: function openSeting() {
                    var _this = this;
                    wx.showModal({
                        title: "提示",
                        content: "游戏需要您授权头像和用户名信息",
                        showCancel: false,
                        cancelText: "取消",
                        confirmText: "确认",
                        success: function success(res) {
                            wx.openSetting({
                                success: function success(res) {
                                    if (res.authSetting["scope.userInfo"] == false) {
                                        wxCore.uo.openSeting();
                                    } else {
                                        wxCore.uo.getUserInfo();
                                    }
                                },
                                fail: function fail(res) {
                                    _this.openSeting();
                                }
                            });
                        }
                    });
                }
            }, {
                key: "initUser",
                value: function initUser(res) {
                    var change = 0;
                    var userInfo = res.userInfo;
                    console.log(userInfo.avatarUrl, wxCore.uo.mWeUser["avatarUrl"], wxCore.uo.mWeUser["nickName"], userInfo.nickName);
                    if (wxCore.uo.mWeUser["nickName"] != userInfo.nickName) {
                        wxCore.uo.mWeUser["nickName"] = userInfo.nickName;
                        change = 1;
                    }
                    var face = userInfo.avatarUrl;
                    if (face.charAt(face.length - 1) == "0" && face.charAt(face.length - 2) == "/") {
                        face = face.substr(0, face.length - 2);
                        face = face + "/132";
                    }
                    if (wxCore.uo.mWeUser["avatarUrl"] != face) {
                        wxCore.uo.mWeUser["avatarUrl"] = face;
                        change = 1;
                    }
                    wxCore.uo.mWeUser["gender"] = userInfo.gender;
                    wxCore.uo.mWeUser["province"] = userInfo.province;
                    wxCore.uo.mWeUser["city"] = userInfo.city;
                    wxCore.uo.mWeUser["country"] = userInfo.country;
                    if (change == 1) wxCore.uo.updateUserInfo();
                    wx.setStorageSync("user", wxCore.uo.mWeUser);
                    wxCore.uo.onEnter(null, this.mLaunch);
                    wxCore.uo.init();
                }
            }, {
                key: "onEnter",
                value: function onEnter(last, cur) {
                    this.mCallBack.onEnterGame(this.mFrist, last, cur);
                    this.mFrist = false;
                }
            }, {
                key: "init",
                value: function init() {
                    if (this.mInit == false) {
                        wx.onShow(this.wxShow);
                        wx.onHide(this.wxHide);
                        this.mInit = true;
                    }
                }
            }, {
                key: "wxShow",
                value: function wxShow(option) {
                    console.log("默认隐藏");
                    console.log("达到");
                    console.log("进入:" + new Date().getTime());
                    console.log(option);
                    var res = {};
                    res["query"] = option["query"];
                    res["scene"] = option["scene"];
                    res["shareTicket"] = option["shareTicket"];
                    res["isSticky"] = option["isSticky"];
                    if (res["query"]["scene"] != null) {
                        var scene = decodeURIComponent(res["query"]["scene"]);
                        var params = scene.split("&");
                        for (var i = 0; i < params.length; i++) {
                            var param = params[i];
                            var keys = param.split("=");
                            if (keys.length == 2) res["query"][keys[0]] = keys[1];
                        }
                    }
                    if (wxCore.uo.mFrist == true) {
                        wxCore.uo.mLaunch = res;
                        wxCore.uo.getUserInfo();
                        return;
                    } else var lastLaunch = wxCore.uo.mLaunch;
                    wxCore.uo.mLaunch = res;
                    wxCore.uo.onEnter(lastLaunch, res);
                }
            }, {
                key: "wxHide",
                value: function wxHide() {
                    wxCore.uo.mCallBack.onHideGame();
                    console.log("退出:" + new Date().getTime());
                }
            }, {
                key: "updateUserInfo",
                value: function updateUserInfo() {
                    function onResult(ret) {
                        console.log("updateUserInfo..ok");
                    }
                    var params = {};
                    params["uid"] = wxCore.uo.mWeUser["uid"];
                    params["gender"] = wxCore.uo.mWeUser["gender"];
                    if (wxCore.uo.mWeUser["province"] != null && wxCore.uo.mWeUser["province"] != "") params["province"] = wxCore.uo.mWeUser["province"];
                    if (wxCore.uo.mWeUser["city"] != null && wxCore.uo.mWeUser["city"] != "") params["city"] = wxCore.uo.mWeUser["city"];
                    this.server(wxCallBack.mIF["userinfo"], params, onResult);
                }
            }, {
                key: "server",
                value: function server(rpc, params, callback) {
                    var ecbck = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    function onResult(e) {
                        var ret = null;
                        if (typeof e == "string") ret = util.getJSON(e); else ret = util.getJSON(wxCore.uo.mHttpCall.data);
                        if (callback != null) callback(ret);
                        wxCore.uo.mHttpCall = null;
                    }
                    function onHttpRequestError(e) {
                        if (ecbck != null) ecbck(); else wxCore.uo.onHttpRequestError(e);
                    }
                    this.mHttpCall = new Laya.HttpRequest();
                    this.mHttpCall.once(Laya.Event.COMPLETE, this, onResult);
                    this.mHttpCall.once(Laya.Event.ERROR, this, onHttpRequestError);
                    var str = util.getServer() + rpc["url"] + util.getUrlParams(params, rpc["key"]);
                    console.log("22222", str);
                    this.mHttpCall.send(str, null, "get", "text");
                }
            }, {
                key: "onHttpRequestError",
                value: function onHttpRequestError(e) {
                    console.log("http协议发送失败", e);
                    wx.hideLoading();
                }
            }, {
                key: "initVideoAD",
                value: function initVideoAD(key) {
                    var _this23 = this;
                    if (key == "") {
                        this.mNoVideo = true;
                        return;
                    }
                    if (this.mVideoAD == null) {
                        this.mVideoAD = wx.createRewardedVideoAd({
                            adUnitId: key
                        });
                        this.mVideoAD.load().then(function () {
                            console.log("广告初始化成功");
                        }).catch(function (err) {
                            _this23.mVideoAD = null;
                            console.log("没有拉到广告");
                        });
                        this.mVideoAD.onError(function (err) {
                            console.log(err);
                            wxCore.uo.mNoVideo = true;
                            _this23.mVideoAD = null;
                        });
                    }
                }
            }, {
                key: "showVideoAD",
                value: function showVideoAD(callback) {
                    if (this.mVideoAD == null || wxCore.uo.mNoVideo == true) {
                        if (callback != null) callback(false);
                        return false;
                    } else {
                        wxCore.uo.mVideoAD.show();
                        this.mVideoAD.offClose(null);
                        this.mVideoAD.onClose(function (res) {
                            if (res && res.isEnded || res === undefined) {
                                if (callback != null) callback(true);
                            } else {
                                if (callback != null) callback(false);
                            }
                        });
                        return true;
                    }
                }
            }]);
            return wxCore;
        }();
        wxCore.uo = null;
        var GameViewMassage = /* */ function () {
            function GameViewMassage() {
                (0, _classCallCheck2.default)(this, GameViewMassage);
            }
            (0, _createClass2.default)(GameViewMassage, null, [{
                key: "subname",
                value: function subname(name, len) {
                    if (name.length > len) {
                        name = name.substr(0, len) + "...";
                    }
                    return name;
                }
            }, {
                key: "setMenuHeight",
                value: function setMenuHeight() {
                    if (window["wx"]) {
                        var wxRect = wx.getMenuButtonBoundingClientRect();
                        var h = wxRect.height;
                        var t = wxRect.top;
                        var l = wxRect.left;
                        GameViewMassage.applist_y = t * Laya.stage.height / wxCore.uo.mPhone["screenHeight"];
                    }
                    GameViewMassage.is_h_w = false;
                    if (Laya.stage.width * 2 < Laya.stage.height) {
                        GameViewMassage.is_h_w = true;
                    }
                }
            }, {
                key: "showGold",
                value: function showGold(gold) {
                    if (gold > 9999) {
                        gold = Math.floor(gold / 1e3);
                        return gold + "k";
                    }
                    return gold;
                }
            }, {
                key: "day",
                value: function day() {
                    var date = new Date();
                    var yes_day_time = [date.getFullYear(), date.getMonth(), date.getDate()];
                    var day_time = GameViewMassage.mWX.getUserDataByKey("yes_day_time");
                    if (day_time == undefined) {
                        GameViewMassage.mWX.setUserValue("yes_day_time", JSON.stringify(yes_day_time));
                        GameViewMassage.mWX.setUserValue("haveTipCount", "20");
                        return true;
                    } else {
                        var dat = JSON.parse(day_time);
                        if (dat.length == 3) {
                            var is_true = true;
                            if (dat[0] != yes_day_time[0]) {
                                is_true = false;
                            }
                            if (dat[1] != yes_day_time[1]) {
                                is_true = false;
                            }
                            if (dat[2] != yes_day_time[2]) {
                                is_true = false;
                            }
                            if (is_true == false) {
                                GameViewMassage.mWX.setUserValue("yes_day_time", JSON.stringify(yes_day_time));
                            }
                            return is_true;
                        }
                    }
                }
            }]);
            return GameViewMassage;
        }();
        GameViewMassage.rewardview = null;
        GameViewMassage.resultview = null;
        GameViewMassage.start_box_show = true;
        GameViewMassage.level_num = 1;
        GameViewMassage.applist_y = 40;
        GameViewMassage.is_h_w = false;
        GameViewMassage.adUtil = null;
        GameViewMassage.wRankData = [];
        GameViewMassage.is_share = true;
        GameViewMassage.result_banner = false;
        GameViewMassage.BannerGamesShare = null;
        GameViewMassage.HotShare = null;
        GameViewMassage.FriendShare = null;
        GameViewMassage.ResultGamesShare = null;
        GameViewMassage.DiversionImg = null;
        GameViewMassage.different_lv = 0;
        GameViewMassage.shop_skin = [];
        GameViewMassage.start_game = false;
        var Distribute = /* */ function () {
            function Distribute() {
                (0, _classCallCheck2.default)(this, Distribute);
            }
            (0, _createClass2.default)(Distribute, null, [{
                key: "convert",
                value: function convert(obj) {
                    var small_frame = [], small_interval = [], small_image = "", small_static_image = "", big_frame = [], big_interval = [], big_image = "", millisecond = [], millisecond_big = [], big_static_image = "", small_atlas = "", big_atlas = "";
                    if (obj.anim_config && obj.anim_config != "") {
                        var p = {};
                        p = JSON.parse(obj.anim_config);
                        p.framelist = p.group_static.toString().split(",");
                        p.framebiglist = p.group_static_big.toString().split(",");
                        p.millisecond = p.millisecond_static.toString().split(",");
                        p.millisecond_big = p.millisecond_static_big.toString().split(",");
                        p.millisecond2 = p.millisecond2.toString().split(",");
                        p.millisecond_big2 = p.millisecond_big2.toString().split(",");
                        p.millisecond3 = p.millisecond3.toString().split(",");
                        p.millisecond_big3 = p.millisecond_big3.toString().split(",");
                        if (!!p.small_json) {
                            small_atlas = p.small_json;
                        }
                        if (!!p.big_json) {
                            big_atlas = p.big_json;
                        }
                        small_frame = p.framelist;
                        small_interval = p.millisecond;
                        small_image = obj.static_icon;
                        millisecond = p.millisecond3;
                        small_static_image = obj.url_icon;
                        big_frame = p.framebiglist;
                        big_interval = p.millisecond_big;
                        big_image = obj.static_big_btn_icon;
                        millisecond_big = p.millisecond_big3;
                        big_static_image = obj.big_btn_icon;
                    } else {
                        return null;
                    }
                    var result = {
                        small_frame: small_frame,
                        small_interval: small_interval,
                        small_image: small_image,
                        millisecond: millisecond,
                        small_static_image: small_static_image,
                        small_atlas: small_atlas,
                        big_frame: big_frame,
                        big_interval: big_interval,
                        big_image: big_image,
                        millisecond_big: millisecond_big,
                        big_static_image: big_static_image,
                        big_atlas: big_atlas
                    };
                    return result;
                }
            }, {
                key: "addAni",
                value: function addAni(target, firstPath, frame_number, json, type) {
                    var _this24 = this;
                    if (!target.getStyle()) {
                        return;
                    }
                    var frames = [];
                    var allFrame = 0, frameArr = [];
                    var ani = new Laya.Animation();
                    ani.interval = 120;
                    ani.name = "gameAni";
                    if (type == "small") {
                        ani.scale(1.04, 1.04);
                        ani.pos(0, 0);
                    } else if (type == "big") {
                        ani.scale(.6, .6);
                    } else if (type == "big2") {
                        ani.scale(.95, .95);
                    } else if (type == "big4") {
                        ani.scale(.7, .7);
                    } else if (type == "big7") {
                        ani.scale(.4, .4);
                    }
                    if (!json) {
                        frame_number.forEach(function (item) {
                            allFrame += Number(item);
                            frameArr.push(allFrame);
                        });
                        frames.push(firstPath);
                        for (var i = 2; i <= allFrame; i++) {
                            var path = firstPath.replace("_1.", "_" + i + ".");
                            frames.push(path);
                        }
                        Laya.loader.load(firstPath, Laya.Handler.create(null, function () {
                            if (!target.getStyle()) {
                                return;
                            }
                            if (type != "big7") {
                                target.skin = firstPath;
                            }
                            Laya.loader.load(frames, Laya.Handler.create(_this24, function () {
                                if (!target.getStyle()) {
                                    return;
                                }
                                target.addChild(ani.loadImages(frames)).play();
                            }), null, Laya.Loader.IMAGE, 4, true, "userExport", true);
                        }));
                    } else {
                        frames.push(json);
                        if (!target.getStyle()) {
                            return;
                        }
                        target.addChild(ani.loadAtlas(json)).play();
                    }
                    return frames;
                }
            }]);
            return Distribute;
        }();
        var ComponentView = /* */ function (_Laya$Label) {
            (0, _inherits2.default)(ComponentView, _Laya$Label);
            var _super20 = _createSuper(ComponentView);
            function ComponentView() {
                var _this25;
                (0, _classCallCheck2.default)(this, ComponentView);
                _this25 = _super20.call(this);
                _this25.moveTimeType = true;
                _this25.size(Laya.stage.width, Laya.stage.height);
                _this25.pos(0, 0);
                return _this25;
            }
            (0, _createClass2.default)(ComponentView, [{
                key: "preventMove",
                value: function preventMove() {
                    var _this26 = this;
                    if (!this.moveTimeType) {
                        return false;
                    }
                    this.moveTimeType = false;
                    Laya.timer.once(100, this, function () {
                        _this26.moveTimeType = true;
                    });
                    return true;
                }
            }, {
                key: "rotateIcon",
                value: function rotateIcon(target, callback) {

                }
            }, {
                key: "createBg",
                value: function createBg() {
                    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .75;
                    var bg = new Laya.Label();
                    bg.bgColor = "#000";
                    bg.alpha = type;
                    bg.size(this.width, this.height);
                    this.addChild(bg);
                }
            }]);
            return ComponentView;
        }(Laya.Label);
        var BannerGamesShare = /* */ function (_ComponentView) {
            (0, _inherits2.default)(BannerGamesShare, _ComponentView);
            var _super21 = _createSuper(BannerGamesShare);
            function BannerGamesShare() {
                var _this27;
                (0, _classCallCheck2.default)(this, BannerGamesShare);
                _this27 = _super21.call(this);
                _this27.gameData = [];
                _this27.showList = [];
                _this27.direct = 1;
                _this27.DELAY_TIME = 90;
                _this27.SPEED = 2;
                _this27.delayTimer = 0;
                _this27.isTouch = false;
                _this27.banner_name = "";
                _this27.size(Laya.stage.width, 200);
                EventManager.Inst.on(EventManager.BANNER_GAMES_INIT, (0, _assertThisInitialized2.default)(_this27), _this27.initData);
                return _this27;
            }
            (0, _createClass2.default)(BannerGamesShare, [{
                key: "clearPage",
                value: function clearPage() {
                    EventManager.Inst.offAll(EventManager.BANNER_GAMES_INIT);
                }
            }, {
                key: "initData",
                value: function initData(ret, parent, y, banner_name) {

                }
            }, {
                key: "initView",
                value: function initView() {

                }
            }, {
                key: "updataGames",
                value: function updataGames(cell, index) {

                }
            }, {
                key: "scroll",
                value: function scroll() {

                }
            }, {
                key: "_frameLoop",
                value: function _frameLoop() {
                    var num = this.gameData.length;
                    var bar = this.gameList.scrollBar;
                    if (num > 10) {
                        num = 10;
                    }
                    if (num <= 4) {
                        return;
                    }
                    if (this.isTouch) { } else {

                    }
                }
            }, {
                key: "onMouseDown",
                value: function onMouseDown() {

                }
            }, {
                key: "onMouseUp",
                value: function onMouseUp() {

                }
            }]);
            return BannerGamesShare;
        }(ComponentView);
        BannerGamesShare.TAG = "banner";
        var BannerItemRender = /* */ function (_Laya$Box) {
            (0, _inherits2.default)(BannerItemRender, _Laya$Box);
            var _super22 = _createSuper(BannerItemRender);
            function BannerItemRender() {
                var _this30;
                (0, _classCallCheck2.default)(this, BannerItemRender);
                _this30 = _super22.call(this);
                _this30.initBox();
                _this30.size(184, 184);
                _this30.pos(8, 8);
                return _this30;
            }
            (0, _createClass2.default)(BannerItemRender, [{
                key: "initBox",
                value: function initBox() {
                    var img = new Laya.Image();
                    img.name = "gameIcon";
                    img.size(156, 156);
                    img.scale(.9, .9);
                    img.anchorX = .5;
                    img.anchorY = .5;
                    this.addChild(img);
                    img.centerX = 0;
                    img.centerY = 0;
                    var border = new Laya.Image();
                    border.skin = "fenfa/border2.png";
                    border.size(184, 184);
                    border.pos(0, 0);
                    this.addChild(border);
                }
            }]);
            return BannerItemRender;
        }(Laya.Box);
        var DiversionShare = /* */ function (_Laya$Image) {
            (0, _inherits2.default)(DiversionShare, _Laya$Image);
            var _super23 = _createSuper(DiversionShare);
            function DiversionShare() {

            }
            (0, _createClass2.default)(DiversionShare, [{
                key: "initData",
                value: function initData(ret, parent, x, y, position_type, show_close, closeCallBack) {

                }
            }, {
                key: "initView",
                value: function initView() {

                }
            }, {
                key: "changeGame",
                value: function changeGame() {

                }
            }, {
                key: "clearPage",
                value: function clearPage() {

                }
            }], [{
                key: "showDiversionShare",
                value: function showDiversionShare(parent, x, y, position_type, show_close, showCallBack, closeCallBack) {

                }
            }]);
            return DiversionShare;
        }(Laya.Image);
        DiversionShare.TAG = "diversion";
        var ComponentImage = /* */ function (_Laya$Image2) {
            (0, _inherits2.default)(ComponentImage, _Laya$Image2);
            var _super24 = _createSuper(ComponentImage);
            function ComponentImage() {
                (0, _classCallCheck2.default)(this, ComponentImage);
                return _super24.call(this);
            }
            (0, _createClass2.default)(ComponentImage, [{
                key: "btnShowLater",
                value: function btnShowLater(caller) {
                    var _this34 = this;
                    this.alpha = 0;
                    Laya.timer.once(2e3, caller, function () {
                        caller.addChild(_this34);
                        Laya.Tween.to(_this34, {
                            alpha: 1
                        }, 300);
                    });
                }
            }]);
            return ComponentImage;
        }(Laya.Image);
        var ComponentLabel = /* */ function (_Laya$Label2) {
            (0, _inherits2.default)(ComponentLabel, _Laya$Label2);
            var _super25 = _createSuper(ComponentLabel);
            function ComponentLabel() {
                var _this35;
                (0, _classCallCheck2.default)(this, ComponentLabel);
                _this35 = _super25.call(this);
                _this35.align = "center";
                _this35.valign = "middle";
                _this35.fontSize = 32;
                return _this35;
            }
            (0, _createClass2.default)(ComponentLabel, null, [{
                key: "addPoint",
                value: function addPoint(str) {
                    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
                    if (str.length <= len) {
                        return str;
                    } else {
                        return str.slice(0, len) + "...";
                    }
                }
            }]);
            return ComponentLabel;
        }(Laya.Label);
        var FriendShare = /* */ function (_ComponentView2) {
            (0, _inherits2.default)(FriendShare, _ComponentView2);
            var _super26 = _createSuper(FriendShare);
            function FriendShare() {
                var _this36;
                (0, _classCallCheck2.default)(this, FriendShare);
                _this36 = _super26.call(this);
                _this36.showList = [];
                _this36.friend_name = "";
                _this36.friend_show = false;
                _this36.size(Laya.stage.width, Laya.stage.height);
                _this36.pos(0, 0);
                EventManager.Inst.on(EventManager.FRIEND_SHARE_GAMES_INIT, (0, _assertThisInitialized2.default)(_this36), _this36.initData);
                return _this36;
            }
            (0, _createClass2.default)(FriendShare, [{
                key: "initData",
                value: function initData(game, parent) {
                    var _this37 = this;
                    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "1";
                    this.gameData = game;
                    this.showList = [this.gameData.appid];
                    EventManager.Inst.event(EventManager.INIT_JUMP_GAMES, [FriendShare.TAG, [this.gameData]]);
                    this.initView();
                    this.initOpenData();
                    this.zOrder = 100;
                    parent.addChild(this);
                    if (name == "1") {
                        this.friend_name = FriendShare.TAG;
                    } else {
                        this.friend_name = name;
                    }
                    if (FenfaCloseBtn.is_first_jump == 3) {
                        this.jumpFirstGame(this.gameData);
                        this.visible = false;
                    } else {
                        if (MistakeContent.Inst.NFList["of_loadorfirend_banner"].param.friend == 1) {
                            this.friend_show = true;
                            GameViewMassage.adUtil.showBannerAd("");
                            var time = MistakeContent.Inst.NFList["of_loadorfirend_banner"].param.time;
                            Laya.timer.once(Number(time), this, function () {
                                GameViewMassage.adUtil.hideBannerAd(function () {
                                    if (_this37.friend_show) {
                                        GameViewMassage.adUtil.showBannerAd("");
                                    }
                                });
                            });
                        }
                    }
                    EventManager.Inst.event(EventManager.FENFA_GAMES_SHOW, [this.showList, this.friend_name]);
                }
            }, {
                key: "jumpFirstGame",
                value: function jumpFirstGame(data) {

                }
            }, {
                key: "initOpenData",
                value: function initOpenData() {
                    if (!!Laya.Browser.onMiniGame) {
                        wx.postMessage({
                            type: "friendShare",
                            game: this.gameData,
                            show: 1
                        });
                        var invitePlaySprite = new Laya.WXOpenDataViewer();
                        invitePlaySprite.texture.sourceHeight = Laya.stage.height;
                        invitePlaySprite.texture.sourceWidth = Laya.stage.width;
                        invitePlaySprite.name = "inviteImg";
                        invitePlaySprite.size(this.width, this.height);
                        invitePlaySprite.pos(0, 0);
                        this.addChild(invitePlaySprite);
                    }
                }
            }, {
                key: "initView",
                value: function initView() {
                    var _this38 = this;
                    this.createBg();
                    this.showBox = new Laya.Image("fenfa/invite_play_bg.png");
                    this.showBox.size(600, 255);
                    this.showBox.centerX = 0;
                    this.showBox.centerY = 0;
                    this.addChild(this.showBox);
                    this.showBox.on(Laya.Event.CLICK, this, this.onClikGame);
                    this.headImg = new Laya.Image();
                    this.headImg.size(80, 80);
                    this.headImg.pos(42, 42);
                    Laya.timer.once(2e3, this, function () {
                        _this38.headImg.skin = "fenfa/fakeImg.jpg";
                    });
                    this.showBox.addChild(this.headImg);
                    var headBorder = new Laya.Image();
                    headBorder.size(80, 80);
                    headBorder.pos(0, 0);
                    this.headImg.addChild(headBorder);
                    this.friendText = new ComponentLabel();
                    this.friendText.size(420, 36);
                    this.friendText.pos(144, 36);
                    this.friendText.fontSize = 30;
                    this.friendText.color = "#010101";
                    this.friendText.text = "喵喵喵邀请您加入";
                    this.showBox.addChild(this.friendText);
                    this.gameText = new ComponentLabel();
                    this.gameText.size(420, 36);
                    this.gameText.pos(144, 88);
                    this.gameText.fontSize = 30;
                    this.gameText.color = "#000000";
                    this.gameText.bold = true;
                    this.gameText.text = this.gameData.name;
                    this.showBox.addChild(this.gameText);
                    var getImg = new Laya.Image("fenfa/invite_play_ok.png");
                    this.showBox.addChild(getImg);
                    getImg.centerX = 0;
                    getImg.bottom = 32;
                    this.closeBtn = new ComponentImage();
                    this.closeBtn.skin = "fenfa/invite_play_pass.png";
                    this.closeBtn.centerX = 0;
                    this.closeBtn.centerY = 242;
                    this.closeBtn.btnShowLater(this);
                    this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseFriend);
                }
            }, {
                key: "onClikGame",
                value: function onClikGame() {

                }
            }, {
                key: "onCloseFriend",
                value: function onCloseFriend() {
                    JumpGameManager.Inst.jumpGameInfo.banner_name = this.friend_name;
                    JumpGameManager.Inst.jumpGameInfo.callBack = "FENFA_GAMES_CLICK_GAME";
                    JumpGameManager.Inst.jumpGameInfo.jump_tag = this.friend_name;
                    JumpGameManager.Inst.jumpGameInfo.showList = [this.gameData.appid];
                    var notJumpList = [], jumpedAppid = [];
                    for (var i = 0; i < JumpGameManager.Inst.jumpedGameInfo[FriendShare.TAG].length; i++) {
                        var item = JumpGameManager.Inst.jumpedGameInfo[FriendShare.TAG][i];
                        if (!item.jumped) {
                            notJumpList.push(item);
                        } else {
                            jumpedAppid.push(item.appid);
                        }
                    }
                    if (jumpedAppid.indexOf(this.gameData["appid"]) < 0 || !notJumpList.length) {
                        JumpGameManager.Inst.jumpedCB(this.gameData, -1, true);
                    } else {
                        JumpGameManager.Inst.jumpedCB(this.gameData, 1, false);
                    }
                    this.friend_show = false;
                    Laya.timer.clearAll(this);
                    EventManager.Inst.event(EventManager.FRIEND_SHARE_GAMES_ON_CLOSE);
                }
            }, {
                key: "clearPage",
                value: function clearPage() {
                    this.friend_show = false;
                    Laya.timer.clearAll(this);
                    if (!!Laya.Browser.onMiniGame) {
                        wx.postMessage({
                            type: "friendShare",
                            show: 0
                        });
                    }
                    var inviteImg = this.getChildByName("inviteImg");
                    if (!!inviteImg) {
                        inviteImg.removeSelf();
                        inviteImg.destroy(true);
                    }
                    EventManager.Inst.offAll(EventManager.FRIEND_SHARE_GAMES_INIT);
                }
            }]);
            return FriendShare;
        }(ComponentView);
        FriendShare.TAG = "friend_recom";
        var FenfaCloseBtn = /* */ function () {
            function FenfaCloseBtn() {
                (0, _classCallCheck2.default)(this, FenfaCloseBtn);
            }
            (0, _createClass2.default)(FenfaCloseBtn, null, [{
                key: "showFriendBtn",
                value: function showFriendBtn(page) {
                    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var cell = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    var friend_open = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
                    var friend_close = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
                    this.friend_open = friend_open;
                    this.friend_close = friend_close;
                    console.log("好友推荐按钮", wxCore.uo.first_channe_id != "0" || wxCore.uo.first_adid != "0", NewTouchMistake.Inst.wuChuFenfaBtn(wxCore.uo.first_channe_id));
                    if (window["wx"] && (wxCore.uo.first_channe_id != "0" || wxCore.uo.first_adid != "0")) {
                        var friend_btn = MistakeContent.Inst.NFList["of_show_fenfa_closebtn"].param.btnShow;
                        if (Number(friend_btn) == 0) {
                            FenfaCloseBtn.show_btn = false;
                        } else {
                            FenfaCloseBtn.show_btn = true;
                        }
                    }
                    var friend_btn = MistakeContent.Inst.NFList["of_show_fenfa_closebtn"].param.btnShow;
                    this.is_first_jump = Number(friend_btn);
                    if (FenfaCloseBtn.show_btn && GameViewMassage.mWX.fhOnoff == 1) {
                        this.click_time = true;
                        if (!FenfaCloseBtn.btn_friend) {
                            FenfaCloseBtn.btn_friend = new Laya.Button();
                            FenfaCloseBtn.btn_friend.skin = "fenfa/invite2_play_closeBtn.png";
                            FenfaCloseBtn.btn_friend.pos(40 + x, GameViewMassage.applist_y + y);
                            FenfaCloseBtn.btn_friend.stateNum = 1;
                            FenfaCloseBtn.btn_friend.zOrder = 18;
                            page.addChild(FenfaCloseBtn.btn_friend);
                            FenfaCloseBtn.btn_friend.on(Laya.Event.CLICK, this, this.onshowFriend);
                            if (cell != null) {
                                cell();
                            }
                        } else {
                            FenfaCloseBtn.btn_friend.off(Laya.Event.CLICK, this, this.onshowFriend);
                            FenfaCloseBtn.btn_friend.removeSelf();
                            FenfaCloseBtn.btn_friend.destroy(true);
                            FenfaCloseBtn.btn_friend = new Laya.Button();
                            FenfaCloseBtn.btn_friend.skin = "fenfa/invite2_play_closeBtn.png";
                            FenfaCloseBtn.btn_friend.pos(40 + x, GameViewMassage.applist_y + y);
                            FenfaCloseBtn.btn_friend.stateNum = 1;
                            FenfaCloseBtn.btn_friend.zOrder = 18;
                            page.addChild(FenfaCloseBtn.btn_friend);
                            FenfaCloseBtn.btn_friend.on(Laya.Event.CLICK, this, this.onshowFriend);
                            if (cell != null) {
                                cell();
                            }
                        }
                    }
                }
            }, {
                key: "onshowFriend",
                value: function onshowFriend() {
                    var _this39 = this;
                    if (this.click_time) {
                        this.click_time = false;
                        Laya.timer.once(1e3, this, function () {
                            _this39.click_time = true;
                        });
                    } else {
                        return;
                    }
                    testGameAPI.GetGamesBox("friend_share", Laya.Handler.create(this, function (ret) {
                        if (!!ret["games_box"][0]) {
                            FenfaCloseBtn.isShow_banner = GameViewMassage.adUtil.is_show_banner;
                            GameViewMassage.adUtil.hideBannerAd();
                            _this39.FriendShareBtn = new FriendShare();
                            if (_this39.friend_open != null) {
                                _this39.friend_open();
                            }
                            EventManager.Inst.event(EventManager.FRIEND_SHARE_GAMES_INIT, [ret["games_box"][0], Laya.stage, "friend_recom_push"]);
                            EventManager.Inst.on(EventManager.FRIEND_SHARE_GAMES_ON_CLOSE, _this39, _this39.onCloseFriendBtn);
                            EventManager.Inst.on(EventManager.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE, _this39, _this39.onCloseFriendBtn);
                        } else {
                            _this39.onCloseFriendBtn();
                        }
                    }));
                }
            }, {
                key: "onCloseFriendBtn",
                value: function onCloseFriendBtn() {
                    if (this.FriendShareBtn) {
                        EventManager.Inst.off(EventManager.FRIEND_SHARE_GAMES_SHOW_OR_CLOSE, this, this.onCloseFriendBtn);
                        EventManager.Inst.off(EventManager.FRIEND_SHARE_GAMES_ON_CLOSE, this, this.onCloseFriendBtn);
                        this.FriendShareBtn.clearPage();
                        this.FriendShareBtn.removeSelf();
                        this.FriendShareBtn.destroy(true);
                        this.FriendShareBtn = null;
                        if (this.friend_close != null) {
                            this.friend_close();
                        }
                    }
                    if (FenfaCloseBtn.isShow_banner) {
                        GameViewMassage.adUtil.showBannerAd("");
                    } else {
                        GameViewMassage.adUtil.hideBannerAd();
                    }
                }
            }]);
            return FenfaCloseBtn;
        }();
        FenfaCloseBtn.show_btn = false;
        FenfaCloseBtn.btn_friend = null;
        FenfaCloseBtn.friend_open = null;
        FenfaCloseBtn.friend_close = null;
        FenfaCloseBtn.is_first_jump = 0;
        FenfaCloseBtn.isShow_banner = false;
        FenfaCloseBtn.click_time = true;
        var hitEggView = /* */ function (_ui$UI$hitEggViewUI) {
            (0, _inherits2.default)(hitEggView, _ui$UI$hitEggViewUI);
            var _super27 = _createSuper(hitEggView);
            function hitEggView() {
                var _this40;
                (0, _classCallCheck2.default)(this, hitEggView);
                _this40 = _super27.call(this);
                _this40.first_clise = true;
                _this40.num_time = 6;
                _this40.img_pro.width = 0;
                _this40.height = _this40.bg.height = Laya.stage.height;
                GameViewMassage.adUtil.hideBannerAd();
                GameViewMassage.mWX.indexBpTotle("sur_page", {
                    level: GameViewMassage.level_num
                });
                hitEggView.skin_id = -1;
                _this40.hitEggBtn.interval = 100;
                _this40.hitEggBtn.play();
                _this40.hitEggBtn.y = _this40.height - 140;
                return _this40;
            }
            (0, _createClass2.default)(hitEggView, [{
                key: "init",
                value: function init(closeCallBack) {
                    var _this41 = this;
                    this.closeCallBack = closeCallBack;
                    this.hitEggBtn.on(Laya.Event.CLICK, this, this.onHitEgg);
                    this.hitEggBtn.on(Laya.Event.MOUSE_DOWN, this, this.onDown);
                    this.hitEggBtn.on(Laya.Event.MOUSE_UP, this, this.onUP);
                    this.btn_close.on(Laya.Event.CLICK, this, this.clear, [2]);
                    var time = MistakeContent.Inst.NFList["of_hitegg_close"].param.time;
                    this.btn_close.visible = false;
                    Laya.timer.once(Number(time), this, function () {
                        _this41.btn_close.visible = true;
                    });
                    this.num_time = (Math.floor(Math.random() * 2) + 4) * 51;
                    Laya.timer.loop(10, this, this.onLoopPro);
                }
            }, {
                key: "onDown",
                value: function onDown() {
                    if (this.first_clise) {
                        this.first_clise = false;
                        GameViewMassage.mWX.indexBpTotle("sur_button", {
                            level: GameViewMassage.level_num
                        });
                    }
                    this.hitEggBtn.scale(.9, .9);
                }
            }, {
                key: "onUP",
                value: function onUP() {
                    this.hitEggBtn.scale(1, 1);
                }
            }, {
                key: "onClose",
                value: function onClose() {
                    this.onPass();
                }
            }, {
                key: "showContent2",
                value: function showContent2() {
                    var _this42 = this;
                    Laya.timer.clearAll(this);
                    Laya.Tween.clearAll(this);
                    GameViewMassage.adUtil.showBannerAd("");
                    Laya.timer.once(2e3, this, function () {
                        _this42.hitEggBtn.stop();
                        _this42.changeSkin();
                    });
                }
            }, {
                key: "onPass",
                value: function onPass() {
                    hitEggView.Inst.clear();
                }
            }, {
                key: "onLoopPro",
                value: function onLoopPro() {
                    if (this.img_pro.width >= this.num_time) {
                        this.showContent2();
                        return;
                    }
                    if (this.img_pro.width > 0) {
                        this.img_pro.width -= 1;
                    }
                }
            }, {
                key: "onHitEgg",
                value: function onHitEgg() {
                    this.img_pro.width += 70;
                    if (this.img_pro.width >= 340) {
                        this.img_pro.width = 340;
                        return;
                    }
                }
            }, {
                key: "changeSkin",
                value: function changeSkin() {
                    hitEggView.skin_id = Math.floor(Math.random() * 6 + 1);
                    if (hitEggView.skin_id >= 7) {
                        hitEggView.skin_id = 1;
                    }
                    if (Laya.Browser.onMiniGame) {
                        wx.showToast({
                            title: "奖励领取成功",
                            icon: "none",
                            duration: 2e3
                        });
                    }
                    GameViewMassage.mWX.indexBpTotle("icon_page", {
                        icon_type: "sur_award",
                        is_success: 1,
                        from_type: "direct"
                    });
                    this.clear();
                }
            }, {
                key: "clear",
                value: function clear() {
                    GameViewMassage.adUtil.hideBannerAd();
                    Laya.timer.clearAll(hitEggView.Inst);
                    Laya.Tween.clearAll(hitEggView.Inst);
                    hitEggView.Inst.removeSelf();
                    hitEggView.Inst.destroy(true);
                    hitEggView._inst = null;
                    this.closeCallBack.run();
                }
            }], [{
                key: "Inst",
                get: function get() {
                    if (this._inst == null) {
                        this._inst = new hitEggView();
                        this._inst.zOrder = 55;
                        Laya.stage.addChild(this._inst);
                    }
                    return this._inst;
                }
            }]);
            return hitEggView;
        }(ui.UI.hitEggViewUI);
        hitEggView._inst = null;
        hitEggView.skin_id = -1;
        var HotShare = /* */ function (_ComponentView3) {
            (0, _inherits2.default)(HotShare, _ComponentView3);
            var _super28 = _createSuper(HotShare);
            function HotShare() {
                var _this43;
                (0, _classCallCheck2.default)(this, HotShare);
                _this43 = _super28.call(this);
                _this43.gameData = [];
                _this43.showList = [];
                _this43.moveType = 1;
                _this43.resh_banner = false;
                EventManager.Inst.on(EventManager.HOT_GAMES_INIT, (0, _assertThisInitialized2.default)(_this43), _this43.initData);
                return _this43;
            }
            (0, _createClass2.default)(HotShare, [{
                key: "initData",
                value: function initData(ret, parent) {
                    var _this44 = this;
                    this.gameData = ret["games_box"];
                    this.gameData.forEach(function (item) {
                        _this44.showList.push(item.appid);
                    });
                    EventManager.Inst.event(EventManager.INIT_JUMP_GAMES, [HotShare.TAG, this.gameData]);
                    this.initView();
                    this.zOrder = 100;
                    parent.addChild(this);
                    EventManager.Inst.event(EventManager.FENFA_GAMES_SHOW, [this.showList, HotShare.TAG]);
                    this.jumpFirstGame(this.gameData);
                }
            }, {
                key: "jumpFirstGame",
                value: function jumpFirstGame(data) {

                }
            }, {
                key: "initView",
                value: function initView() {
                    var _this45 = this;
                    this.createBg(1);
                    var title = new Laya.Image("fenfa/bkyx.png");
                    title.y = 70;
                    title.centerX = 0;
                    this.addChild(title);
                    this.gameList = new Laya.List();
                    this.gameList.renderHandler = new Laya.Handler(this, this.updataGames);
                    this.gameList.repeatX = 2;
                    this.gameList.repeatY = Math.ceil(this.gameData.length / 2);
                    this.gameList.spaceX = 32;
                    this.gameList.spaceY = 20;
                    this.gameList.top = 200;
                    this.gameList.bottom = 0;
                    this.gameList.left = 0;
                    this.gameList.right = 0;
                    this.gameList.itemRender = HotItemRender;
                    this.gameList.vScrollBarSkin = "";
                    this.gameList.scrollBar.elasticBackTime = 200;
                    this.gameList.scrollBar.elasticDistance = 50;
                    this.addChild(this.gameList);
                    this.gameList.array = this.gameData;
                    this.gameList.on(Laya.Event.MOUSE_DOWN, this, this.onTouch);
                    this.gameList.on(Laya.Event.MOUSE_UP, this, this.onLeave);
                    this.gameList.on(Laya.Event.MOUSE_OUT, this, this.onLeave);
                    this.closeBtn = new Laya.Image("fenfa/fhan.png");
                    this.closeBtn.pos(0, 72);
                    this.closeBtn.size(108, 99);
                    this.addChild(this.closeBtn);
                    this.closeBtn.on(Laya.Event.CLICK, this, this.onBtnClose);
                    this.startBtn = new Laya.Image("fenfa/btn_start.png");
                    this.startBtn.bottom = 64;
                    this.startBtn.centerX = 0;
                    this.addChild(this.startBtn);
                    NewTouchMistake.Inst.touchMistake("hotshare", wxCore.uo.first_channe_id, NewTouchMistake.touchNum, function (res) {
                        if (GameViewMassage.adUtil.adBanner != null) {
                            NewTouchMistake.touchNum++;
                            GameViewMassage.mWX.setUserValue("touchNum", NewTouchMistake.touchNum + "");
                            if (res["type"] <= 2) {
                                var touch_num = 0;
                                _this45.startBtn.on(Laya.Event.CLICK, _this45, function (e) {
                                    touch_num++;
                                    if (touch_num >= Number(res["numortime"])) {
                                        _this45.onBtnStart(e);
                                    }
                                    if (touch_num == Number(res["btnnum"])) {
                                        _this45.showbanner(res);
                                    }
                                });
                                if (0 == Number(res["btnnum"])) {
                                    _this45.showbanner(res);
                                }
                            } else {
                                Laya.timer.once(Number(res["numortime"]) * 1e3, _this45, function () {
                                    _this45.startBtn.on(Laya.Event.CLICK, _this45, _this45.onBtnStart);
                                });
                                _this45.showbanner(res);
                            }
                        } else {
                            _this45.startBtn.on(Laya.Event.CLICK, _this45, _this45.onBtnStart);
                        }
                    }, function () {
                        _this45.startBtn.on(Laya.Event.CLICK, _this45, _this45.onBtnStart);
                    });
                    Laya.timer.once(1e3, this, function () {
                        _this45.gameList.scrollBar.max += 200;
                        _this45.loopGames();
                    });
                }
            }, {
                key: "showbanner",
                value: function showbanner(res) {
                    var _this46 = this;
                    if (res["type"] == 1 || res["type"] == 3) {
                        Laya.timer.once(Number(res["timer1"]), this, function () {
                            GameViewMassage.adUtil.showBannerAd("");
                            Laya.timer.once(Number(res["timer2"]), _this46, function () {
                                GameViewMassage.adUtil.hideBannerAd();
                                _this46.resh_banner = false;
                            });
                        });
                    }
                    if (res["type"] == 2 || res["type"] == 4) {
                        Laya.timer.once(Number(res["timer1"]), this, function () {
                            GameViewMassage.adUtil.showBannerAd("");
                            Laya.timer.once(Number(res["timer2"]), _this46, function () {
                                _this46.btnDis();
                            });
                        });
                    }
                }
            }, {
                key: "onBtnClose",
                value: function onBtnClose(e) {
                    e.stopPropagation();
                    GameViewMassage.adUtil.hideBannerAd();
                    EventManager.Inst.event(EventManager.HOT_GAMES_ON_CLOSE);
                }
            }, {
                key: "onBtnStart",
                value: function onBtnStart(e) {
                    e.stopPropagation();
                    GameViewMassage.adUtil.hideBannerAd();
                    EventManager.Inst.event(EventManager.HOT_GAMES_ON_CLOSE);
                }
            }, {
                key: "loopGames",
                value: function loopGames() {
                    var _this47 = this;
                    var val = 0, row = Math.ceil(this.gameData.length / 2), allTime = row * 2e3, time = this.gameList.scrollBar.value / this.gameList.scrollBar.max * allTime;
                    if (this.moveType == 1) {
                        val = this.gameList.scrollBar.max;
                        time = (this.gameList.scrollBar.max - this.gameList.scrollBar.value) / this.gameList.scrollBar.max * allTime;
                    }
                    Laya.Tween.to(this.gameList.scrollBar, {
                        value: val
                    }, time, Laya.Ease.linearInOut, Laya.Handler.create(this, function () {
                        if (_this47.gameList.scrollBar.value + 360 > _this47.gameList.scrollBar.max) {
                            _this47.moveType = -1;
                        } else if (_this47.gameList.scrollBar.value - 360 < 0) {
                            _this47.moveType = 1;
                        }
                        _this47.loopGames();
                    }));
                }
            }, {
                key: "onTouch",
                value: function onTouch(e) {
                    Laya.timer.clear(this, this.loopGames);
                    Laya.Tween.clearAll(this.gameList.scrollBar);
                }
            }, {
                key: "onLeave",
                value: function onLeave() {
                    if (!this.preventMove()) {
                        return;
                    }
                    Laya.timer.once(1e3, this, this.loopGames);
                }
            }, {
                key: "updataGames",
                value: function updataGames(cell, index) {

                }
            }, {
                key: "btnDis",
                value: function btnDis() {
                    if (GameViewMassage.adUtil.banner_realHeight != 0) {
                        var h_w = Laya.stage.width / GameViewMassage.adUtil.banner_realWidth;
                        var h1 = h_w * GameViewMassage.adUtil.banner_realHeight;
                        var distance = JSON.parse(GameViewMassage.mWX.getOnOffParamByKey("of_btn_distance"))["distance"];
                        if ((distance != "" || distance != undefined) && GameViewMassage.mWX.fhOnoff != 0) {
                            var h = Number(distance);
                            if (wxCore.uo.phone()["screenHeight"] == 812) {
                                h = 40 + h;
                            }
                            this.startBtn.y = Laya.stage.height - h1 - this.startBtn.height - h;
                        } else {
                            var h = 20;
                            if (wxCore.uo.phone()["screenHeight"] == 812) {
                                h = 60;
                            }
                            this.startBtn.y = Laya.stage.height - h1 - this.startBtn.height - h;
                        }
                    } else {
                        this.startBtn.bottom = 64;
                    }
                }
            }, {
                key: "clearPage",
                value: function clearPage() {
                    EventManager.Inst.offAll(EventManager.HOT_GAMES_INIT);
                }
            }]);
            return HotShare;
        }(ComponentView);
        HotShare.TAG = "recommend_page";
        var HotItemRender = /* */ function (_Laya$Box2) {
            (0, _inherits2.default)(HotItemRender, _Laya$Box2);
            var _super29 = _createSuper(HotItemRender);
            function HotItemRender() {
                var _this49;
                (0, _classCallCheck2.default)(this, HotItemRender);
                _this49 = _super29.call(this);
                _this49.initBox();
                _this49.size(330, 440);
                _this49.anchorX = .5;
                _this49.anchorY = .5;
                _this49.pos(197, 220);
                return _this49;
            }
            (0, _createClass2.default)(HotItemRender, [{
                key: "initBox",
                value: function initBox() {
                    var img = new Laya.Image();
                    img.name = "gameImg";
                    img.size(308, 412);
                    img.pos(12, 12);
                    this.addChild(img);
                    var mask = new Laya.Image();
                    mask.name = "game_mask";
                    mask.skin = "fenfa/kuang.png";
                    mask.centerX = .5;
                    mask.centerY = .5;
                    this.addChild(mask);
                }
            }]);
            return HotItemRender;
        }(Laya.Box);
        var ResultGamesShare = /* */ function (_ComponentView4) {
            (0, _inherits2.default)(ResultGamesShare, _ComponentView4);
            var _super30 = _createSuper(ResultGamesShare);
            function ResultGamesShare() {

            }
            (0, _createClass2.default)(ResultGamesShare, [{
                key: "initData",
                value: function initData(ret, parent, showHand, y) {

                }
            }, {
                key: "jumpFirstGame",
                value: function jumpFirstGame(data) {

                }
            }, {
                key: "initView",
                value: function initView() {

                }
            }, {
                key: "updataGames",
                value: function updataGames(cell, index) {

                }
            }, {
                key: "clearPage",
                value: function clearPage() {

                }
            }, {
                key: "addHand",
                value: function addHand(box) {

                }
            }]);
            return ResultGamesShare;
        }(ComponentView);
        ResultGamesShare.TAG = "result_page";
        var ResultGamesShareItemRender = /* */ function (_Laya$Box3) {
            (0, _inherits2.default)(ResultGamesShareItemRender, _Laya$Box3);
            var _super31 = _createSuper(ResultGamesShareItemRender);
            function ResultGamesShareItemRender() {
                var _this53;
                (0, _classCallCheck2.default)(this, ResultGamesShareItemRender);
                _this53 = _super31.call(this);
                _this53.size(238, 332);
                _this53.pos(10, 332);
                _this53.anchorX = 0;
                _this53.anchorY = 1;
                _this53.initBox();
                return _this53;
            }
            (0, _createClass2.default)(ResultGamesShareItemRender, [{
                key: "initBox",
                value: function initBox() {
                    var img = new Laya.Image();
                    img.name = "gameImg";
                    img.size(198, 264);
                    img.pos(119, 152);
                    img.anchorX = .5;
                    img.anchorY = .5;
                    this.addChild(img);
                    var mask = new Laya.Image();
                    mask.name = "gameBroder";
                    mask.skin = "fenfa/result_border.png";
                    mask.size(238, 332);
                    mask.pos(0, 0);
                    this.addChild(mask);
                }
            }]);
            return ResultGamesShareItemRender;
        }(Laya.Box);
        var Result = /* */ function (_ui$UI$ResultUI) {
            (0, _inherits2.default)(Result, _ui$UI$ResultUI);
            var _super32 = _createSuper(Result);
            function Result(is_success) {
                var _this54;
                (0, _classCallCheck2.default)(this, Result);
                _this54 = _super32.call(this);
                _this54.is_success = true;
                _this54.height = Laya.stage.height;
                _this54.is_success = is_success;
                return _this54;
            }
            (0, _createClass2.default)(Result, [{
                key: "onAwake",
                value: function onAwake() {
                    this.height = Laya.stage.height;
                    this.btn_home.y = GameViewMassage.applist_y;
                    this.btn_home.visible = true;
                    this.btn_goHome.visible = false;
                    this.btn_next.visible = false;
                    this.btn_again.visible = false;
                    this.btn_nextlevel.visible = false;
                    this.showHotGame_front();
                }
            }, {
                key: "onOpened",
                value: function onOpened() {
                    var _this55 = this;
                    var type = Number(GameViewMassage.mWX.getOnOffValueByKey("of_btn_type"));
                    if (type == 1 || GameViewMassage.mWX.fhOnoff == 0) {
                        this.btn_nextlevel.skin = "UI0/img_nextlevel.png";
                    } else if (type == 2) {
                        this.btn_nextlevel.skin = "UI0/img_nextlevel_video.png";
                    } else if (type == 3) {
                        this.btn_nextlevel.skin = "UI0/img_nextlevel_share.png";
                    } else {
                        this.btn_nextlevel.skin = "UI0/img_nextlevel.png";
                    }
                    this.btn_nextlevel.on(Laya.Event.CLICK, this, this.nextLevel);
                    this.onCloseFriendPage();
                    var is_level_complete = 1;
                    if (this.is_success) {
                        is_level_complete = 1;
                    } else {
                        is_level_complete = 0;
                    }
                    var obg = {
                        is_level_complete: is_level_complete,
                        level: GameViewMassage.level_num
                    };
                    GameViewMassage.mWX.indexBpTotle("level_complete_info ", obg);
                    if (this.is_success) {
                        this.img_type.skin = "UI0/img_cgcg.png";
                    } else {
                        this.img_type.skin = "UI0/img_cgsb.png";
                        this.btn_next.visible = false;
                    }
                    platform.getInstance().initList(this.list_showList);
                    if (GameManager.instance.nowLevelIndex >= 20) {
                        this.btn_goHome.visible = true;
                        this.btn_next.visible = false;
                    } else {
                        this.btn_next.visible = true;
                        this.btn_goHome.visible = false;
                    }
                }
            }, {
                key: "onCloseFriendPage",
                value: function onCloseFriendPage() {
                    var _this56 = this;
                    if (!this.ResultGamesShare_result) {
                        GameViewMassage.adUtil.showBannerAd("");
                        console.log("result");
                        var showHand = true;
                        testGameAPI.GetGamesBox("result", Laya.Handler.create(this, function (ret) {
                            _this56.ResultGamesShare_result = new ResultGamesShare();
                            EventManager.Inst.event(EventManager.RESULT_GAMES_INIT, [ret, _this56, showHand, Laya.stage.height / 2 - 380]);
                        }));
                    }
                    GameViewMassage.adUtil.showBannerAd("");
                    this.show_btn_result();
                }
            }, {
                key: "show_btn_result",
                value: function show_btn_result() {
                    var _this57 = this;
                    GameViewMassage.adUtil.showBannerAd("");
                    this.btn_next.on(Laya.Event.CLICK, this, this.onNext);
                    this.btn_again.on(Laya.Event.CLICK, this, this.onAgainGame);
                    this.btn_goHome.on(Laya.Event.CLICK, this, this.nextLevel);
                    this.btnDis();
                    if (this.is_success) {
                        this.btn_again.visible = false;
                        this.btn_next.alpha = 0;
                        this.btn_next.visible = false;
                        if (window["wx"]) {
                            var time_num = Number(GameViewMassage.mWX.onOffData["of_over_btntime"].param.time);
                        }
                        var time = 0;
                        if (time_num != undefined) {
                            time = time_num;
                        }
                        Laya.timer.once(Number(time), this, function () {
                            _this57.btn_next.visible = true;
                            Laya.Tween.to(_this57.btn_next, {
                                alpha: 1
                            }, 500);
                        });
                    } else {
                        this.btn_again.alpha = 0;
                        this.btn_again.visible = false;
                        this.btn_nextlevel.alpha = 0;
                        this.btn_nextlevel.visible = false;
                        if (window["wx"]) {
                            var time_num = Number(GameViewMassage.mWX.onOffData["of_over_btntime"].param.time);
                        }
                        var time = 0;
                        if (time_num != undefined) {
                            time = time_num;
                        }
                        Laya.timer.once(Number(time), this, function () {
                            _this57.btn_again.visible = true;
                            Laya.Tween.to(_this57.btn_again, {
                                alpha: 1
                            }, 500);
                            _this57.btn_nextlevel.visible = true;
                            Laya.Tween.to(_this57.btn_nextlevel, {
                                alpha: 1
                            }, 500);
                        });
                    }
                }
            }, {
                key: "showbanner",
                value: function showbanner(res) {

                }
            }, {
                key: "onNext",
                value: function onNext() {
                    platform.getInstance().showInterstitial(() => {
                        this.showHotGame_after();
                        GameViewMassage.level_num++;
                        if (GameViewMassage.level_num > 20) {
                            GameViewMassage.level_num = 20;
                        }
                        let level_num = JSON.parse(Laya.LocalStorage.getItem("Balloon-Rescue-level_num"));
                        if (GameViewMassage.level_num >= level_num) {
                            Laya.LocalStorage.setItem("Balloon-Rescue-level_num", JSON.stringify(GameViewMassage.level_num));
                            GameViewMassage.mWX.setUserValue("level", GameManager.instance.nowLevelIndex + "");
                        }
                        GameManager.instance.nowLevelIndex++;
                        if (GameManager.instance.nowLevelIndex > 20) {
                            GameManager.instance.nowLevelIndex = 20;
                        }
                        GameManager.instance.levelRestart();
                        ES.instance.event(ES.on_floor_change);
                    });
                }
            }, {
                key: "onAgainGame",
                value: function onAgainGame() {
                    platform.getInstance().showInterstitial(() => {
                        // this.showHotGame_after();
                        GameManager.instance.levelRestart();
                        ES.instance.event(ES.on_floor_change);
                    });
                }
            }, {
                key: "nextLevel",
                value: function nextLevel() {
                    var _this59 = this;
                    platform.getInstance().showInterstitial(() => {
                        this.showHotGame_after();
                        GameViewMassage.level_num++;
                        if (GameViewMassage.level_num > 20) {
                            GameViewMassage.level_num = 20;
                        }
                        let level_num = JSON.parse(Laya.LocalStorage.getItem("Balloon-Rescue-level_num"));
                        if (GameViewMassage.level_num >= level_num) {
                            Laya.LocalStorage.setItem("Balloon-Rescue-level_num", JSON.stringify(GameViewMassage.level_num));
                            GameViewMassage.mWX.setUserValue("level", GameManager.instance.nowLevelIndex + "");
                        }
                        GameManager.instance.nowLevelIndex++;
                        if (GameManager.instance.nowLevelIndex > 20) {
                            GameManager.instance.nowLevelIndex = 20;
                        }
                        GameManager.instance.levelRestart();
                        ES.instance.event(ES.on_floor_change);
                    })
                    // 
                    // var type = Number(GameViewMassage.mWX.getOnOffValueByKey("of_btn_type"));
                    // if (type == 1 || GameViewMassage.mWX.fhOnoff == 0) {
                    //     this.nextlevel();
                    //     GameViewMassage.level_num++;
                    //     GameViewMassage.mWX.setUserValue("level_num", JSON.stringify(GameViewMassage.level_num));
                    //     this.inde1("direct", 1);
                    // } else if (type == 2) {
                    //     ADUtil.playVideo(function () {
                    //         _this59.nextlevel();
                    //         GameViewMassage.level_num++;
                    //         GameViewMassage.mWX.setUserValue("level_num", JSON.stringify(GameViewMassage.level_num));
                    //         _this59.inde1("video", 1);
                    //     }, function () {
                    //         ShareUtil.shareProp(function (is) {
                    //             if (is) {
                    //                 _this59.nextlevel();
                    //                 GameViewMassage.level_num++;
                    //                 GameViewMassage.mWX.setUserValue("level_num", JSON.stringify(GameViewMassage.level_num));
                    //                 _this59.inde1("share", 1);
                    //             } else {
                    //                 _this59.inde1("share", 0);
                    //             }
                    //         });
                    //     }, function () {
                    //         _this59.inde1("video", 0);
                    //     });
                    // } else if (type == 3) {
                    //     ShareUtil.shareProp(function (is) {
                    //         if (is) {
                    //             _this59.nextlevel();
                    //             GameViewMassage.level_num++;
                    //             GameViewMassage.mWX.setUserValue("level_num", JSON.stringify(GameViewMassage.level_num));
                    //             _this59.inde1("share", 1);
                    //         } else {
                    //             _this59.inde1("share", 0);
                    //         }
                    //     });
                    // }
                }
            }, {
                key: "inde1",
                value: function inde1(from_type, is_success) {
                    var type = "next_level";
                    var obg = {
                        icon_type: type,
                        is_click: 1,
                        is_success: is_success,
                        from_type: from_type
                    };
                    GameViewMassage.mWX.indexBpTotle("icon_page", obg);
                }
            }, {
                key: "nextlevel",
                value: function nextlevel() {
                    this.onNext();
                }
            }, {
                key: "showHotGame_after",
                value: function showHotGame_after() {
                    var _this60 = this;
                    this.clear();
                }
            }, {
                key: "showHotGame_front",
                value: function showHotGame_front() {
                    var _this61 = this;
                    this.onOpened();
                }
            }, {
                key: "onCloseHot",
                value: function onCloseHot() {
                    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    if (this.HotShare_result) {
                        EventManager.Inst.off(EventManager.HOT_GAMES_ON_CLOSE, this, this.onCloseHot);
                        EventManager.Inst.off(EventManager.HOT_GAMES_ON_TO_GAME, this, this.onCloseHot);
                        this.HotShare_result.clearPage();
                        this.HotShare_result.removeSelf();
                        this.HotShare_result.destroy(true);
                        this.HotShare_result = null;
                    }
                    if (type == 2) {
                        this.onOpened();
                    }
                }
            }, {
                key: "clear",
                value: function clear() {
                    GameViewMassage.adUtil.hideBannerAd();
                    if (this.ResultGamesShare_result) {
                        this.ResultGamesShare_result.clearPage();
                        this.ResultGamesShare_result.removeSelf();
                        this.ResultGamesShare_result.destroy(true);
                        this.ResultGamesShare_result = null;
                    }
                    this.removeSelf();
                    this.destroy(true);
                    GameViewMassage.resultview = null;
                }
            }, {
                key: "btnDis",
                value: function btnDis() {
                    if (GameViewMassage.adUtil.banner_realHeight != 0) {
                        var h_w = Laya.stage.width / GameViewMassage.adUtil.banner_realWidth;
                        var h1 = h_w * GameViewMassage.adUtil.banner_realHeight;
                        var distance_num = GameViewMassage.mWX.getOnOffParamByKey("of_btn_distance");
                        var distance = "20";
                        if (distance_num != "") {
                            distance = JSON.parse(distance_num)["distance"];
                        }
                        if ((distance != "" || distance != undefined) && GameViewMassage.mWX.fhOnoff != 0) {
                            var h = Number(distance);
                            if (Laya.stage.width * 2 < Laya.stage.height) {
                                if (wxCore.uo.phone()["screenHeight"] == 812) {
                                    h = 40 + h;
                                }
                            }
                            this.btn_next.y = Laya.stage.height - h1 - this.btn_next.height - h;
                            this.btn_again.y = Laya.stage.height - h1 - this.btn_again.height - h;
                            this.btn_nextlevel.y = Laya.stage.height - h1 - this.btn_again.height - h;
                        } else {
                            var h = 40;
                            if (Laya.stage.width * 2 < Laya.stage.height) {
                                if (wxCore.uo.phone()["screenHeight"] == 812) {
                                    h = 100 + h;
                                } else {
                                    h = 60 + h;
                                }
                            }
                            this.btn_next.y = Laya.stage.height - h1 - this.btn_next.height - h;
                            this.btn_again.y = Laya.stage.height - h1 - this.btn_again.height - h;
                            this.btn_nextlevel.y = Laya.stage.height - h1 - this.btn_again.height - h;
                        }
                    } else {
                        this.btn_next.bottom = 250;
                        this.btn_again.bottom = 250;
                        this.btn_nextlevel.bottom = 250;
                    }
                }
            }]);
            return Result;
        }(ui.UI.ResultUI);
        Result.maxlevel = 50;
        var GameScene = /* */ function (_ui$UI$GameSceneUI) {
            (0, _inherits2.default)(GameScene, _ui$UI$GameSceneUI);
            var _super33 = _createSuper(GameScene);
            function GameScene() {
                var _this62;
                (0, _classCallCheck2.default)(this, GameScene);
                _this62 = _super33.call(this);
                _this62.intType = 1e3;
                _this62.numType = 1e3;
                _this62.strType = "hello laya";
                _this62.boolType = true;
                _this62.levelCount = 0;
                _this62.click_btn = false;
                GameScene.app = (0, _assertThisInitialized2.default)(_this62);
                return _this62;
            }
            (0, _createClass2.default)(GameScene, [{
                key: "onAwake",
                value: function onAwake() {
                    var _this63 = this;
                    console.log("gameScene Awake");
                    this.addBtnEvent();
                    this.showBoxStart();
                    ES.instance.on(ES.on_floor_change, this, function () {
                        _this63.showBoxStart();
                    });
                    ES.instance.on(ES.on_level_win, this, this.showBoxresult);
                    ES.instance.on(ES.on_level_lose, this, this.showBoxFaild);
                    ES.instance.on(ES.setBallCount, this, function (count, add) {
                        _this63.lab_ballCount.text = count + "";
                        if (add) {
                            _this63.showAdd();
                        }
                    });
                    this.btn_music.skin = window.WebAudioEngine.pause ? "UI0/btn_sound_off.png" : "UI0/btn_sound_on.png";
                    this.list_level.array = new Array(20);
                    this.list_level.renderHandler = new Laya.Handler.create(this, this.renderH, null, false)
                }
            }, {
                key: "renderH",
                value: function renderH(cell, index) {
                    let num = cell.getChildByName("levelNum");
                    let box_lock = cell.getChildByName("box_lock");

                    num.text = "" + (index + 1);
                    cell.offAll();
                    let level_num = Laya.LocalStorage.getItem("Balloon-Rescue-level_num") ? JSON.parse(Laya.LocalStorage.getItem("Balloon-Rescue-level_num")) : 1;
                    if (index + 1 <= level_num) {
                        cell.enable = true;
                        box_lock.visible = false;
                        cell.on(Laya.Event.CLICK, this, this.changeLevel, [index + 1]);
                    } else {
                        cell.enable = false;
                        box_lock.visible = true;
                    }
                }
            }, {
                key: "changeLevel",
                value: function changeLevel(i) {
                    GameManager.instance.nowLevelIndex = GameViewMassage.level_num = i;
                    GameManager.instance.levelRestart();
                    this.showBoxStart();
                }
            }, {
                key: "onPlayGuide",
                value: function onPlayGuide() {
                    Laya.timer.once(200, this, function () {
                        ES.instance.event(ES.on_level_start);
                    });
                }
            }, {
                key: "addBtnEvent",
                value: function addBtnEvent() {
                    var _this64 = this;
                    this.btn_start.on(Laya.Event.CLICK, this, function () {
                        ES.instance.event(ES.on_level_start);
                        _this64.showBoxGameing();
                    });
                    this.btn_nextLevel.on(Laya.Event.CLICK, this, function () {
                        _this64.levelCount++;
                        _this64.lab_setLevel.text = "" + _this64.levelCount;
                    });
                    this.btn_lastLevel.on(Laya.Event.CLICK, this, function () {
                        _this64.levelCount--;
                        if (_this64.levelCount <= 0) {
                            _this64.levelCount = 1;
                        }
                        _this64.lab_setLevel.text = "" + _this64.levelCount;
                    });
                    this.btn_changeLevel.on(Laya.Event.CLICK, this, function () {
                        GameManager.instance.nowLevelIndex = _this64.levelCount;
                        if (GameManager.instance.nowLevelIndex > 20) {
                            GameManager.instance.nowLevelIndex = 20;
                        }
                        GameManager.instance.levelRestart();
                    });
                    this.btn_goHome.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showInterstitial(() => {
                            GameManager.instance.levelRestart();
                            this.showBoxGameing();
                            ES.instance.event(ES.on_game_CloseG);
                        })
                    });
                    this.btn_skip.on(Laya.Event.CLICK, this, function () {
                        platform.getInstance().showReward(() => {
                            ES.instance.event(ES.on_game_CloseG);
                            GameViewMassage.level_num++;
                            if (GameViewMassage.level_num > 20) {
                                GameViewMassage.level_num = 20;
                            }
                            let level_num = JSON.parse(Laya.LocalStorage.getItem("Balloon-Rescue-level_num"));
                            if (GameViewMassage.level_num >= level_num) {
                                Laya.LocalStorage.setItem("Balloon-Rescue-level_num", JSON.stringify(GameViewMassage.level_num));
                                GameViewMassage.mWX.setUserValue("level", GameManager.instance.nowLevelIndex + "");
                            }
                            GameManager.instance.nowLevelIndex++;
                            if (GameManager.instance.nowLevelIndex > 20) {
                                GameManager.instance.nowLevelIndex = 20;
                            }
                            GameManager.instance.levelRestart();
                            ES.instance.event(ES.on_floor_change);
                        })
                    });
                    this.btn_restart.on(Laya.Event.CLICK, this, function () {
                        if (this.click_btn) {
                            return
                        }
                        this.click_btn = true;
                        platform.getInstance().showInterstitial(() => {
                            ES.instance.event(ES.on_game_CloseG);
                            // _this64.showBoxFaild();
                            GameManager.instance.levelRestart();
                            _this64.showBoxStart();
                            GameScene.startGame = true;
                            this.box_start.visible = false;
                            this.box_gaming.visible = true;
                            ES.instance.event(ES.on_game_start);
                        })
                        Laya.timer.once(1000, this.btn_restart, () => { this.click_btn = false; });
                    });
                    this.btn_nextLevel1.on(Laya.Event.CLICK, this, function () {
                        GameManager.instance.nowLevelIndex++;
                        if (GameManager.instance.nowLevelIndex > 20) {
                            GameManager.instance.nowLevelIndex = 20;
                        }
                        GameManager.instance.levelRestart();
                        _this64.showBoxStart();
                    });
                    this.btn_changeSkin.on(Laya.Event.CLICK, this, function () { });
                    this.btn_restart1.on(Laya.Event.CLICK, this, function () { });
                    this.btn_music.on(Laya.Event.CLICK, this, function () {
                        window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                        Laya.LocalStorage.setItem("Balloon-Rescue-musicState", JSON.stringify(window.WebAudioEngine.pause));
                        this.btn_music.skin = window.WebAudioEngine.pause ? "UI0/btn_sound_off.png" : "UI0/btn_sound_on.png";
                    });
                    this.box_start.on(Laya.Event.CLICK, this, function () {
                        this.click_btn = false;
                        platform.getInstance().showInterstitial(() => {
                            GameScene.startGame = true;
                            this.box_start.visible = false;
                            this.box_gaming.visible = true;
                            ES.instance.event(ES.on_game_start);
                        });
                    });
                    this.SelectLevel.on(Laya.Event.CLICK, this, function (e) {
                        e.stopPropagation();
                        this.click_btn = false;
                        this.list_level.refresh()
                        this.box_level.visible = true;
                    });
                    this.back_level.on(Laya.Event.CLICK, this, function () {
                        this.box_level.visible = false;
                    });
                }
            }, {
                key: "showBoxStart",
                value: function showBoxStart() {
                    this.showBoxGameing();
                }
            }, {
                key: "onUpdate",
                value: function onUpdate() {
                    if (GameManager.instance.nowLevelloded) {
                        Laya.timer.clearAll(this);
                        this.onPlayGuide();
                    }
                }
            }, {
                key: "showBoxGameing",
                value: function showBoxGameing() {
                    GameScene.startGame = false;
                    this.box_start.visible = true;
                    this.box_gaming.scaleX = 1;
                    this.box_gaming.visible = false;
                    this.box_level.visible = false;
                    this.box_result.scaleX = 0;
                    this.box_faild.scaleX = 0;
                    Laya.timer.frameLoop(20, this, this.onUpdate);
                    this.lab_floor.text = "Level " + GameViewMassage.level_num;
                    this.lab_ballCount.text = "1";
                    this.fenfabtn();
                    this.showFenfa();
                }
            }, {
                key: "fenfabtn",
                value: function fenfabtn() {
                    var _this65 = this;
                }
            }, {
                key: "onClick",
                value: function onClick() {
                    this.off(Laya.Event.CLICK, this, this.onClick);
                    this.showFenfa();
                }
            }, {
                key: "clearFenfa",
                value: function clearFenfa() {
                    if (GameScene.BannerGamesShare_start) {
                        GameScene.BannerGamesShare_start.clearPage();
                        GameScene.BannerGamesShare_start.removeSelf();
                        GameScene.BannerGamesShare_start.destroy(true);
                        GameScene.BannerGamesShare_start = null;
                    }
                    if (GameScene.DiversionImg_start) {
                        GameScene.DiversionImg_start.removeSelf();
                        GameScene.DiversionImg_start.destroy(true);
                        GameScene.DiversionImg_start = null;
                    }
                    if (GameViewMassage.DiversionImg != null) {
                        GameViewMassage.DiversionImg.clearPage();
                    }
                }
            }, {
                key: "showFenfa",
                value: function showFenfa() {
                    var down_height = 0;
                    if (GameViewMassage.is_h_w) {
                        down_height = 40;
                    }
                    if (!GameScene.BannerGamesShare_start) {
                        console.log("onShowBannerList");
                        testGameAPI.GetGamesBox("banner", Laya.Handler.create(this, function (ret) {
                            GameScene.BannerGamesShare_start = new BannerGamesShare();
                            GameScene.BannerGamesShare_start.zOrder = 10;
                            EventManager.Inst.event(EventManager.BANNER_GAMES_INIT, [ret, Laya.stage, Laya.stage.height - GameScene.BannerGamesShare_start.height - down_height, "banner_home"]);
                        }));
                    } else {
                        GameScene.BannerGamesShare_start.clearPage();
                        GameScene.BannerGamesShare_start.removeSelf();
                        GameScene.BannerGamesShare_start.destroy(true);
                        GameScene.BannerGamesShare_start = null;
                        testGameAPI.GetGamesBox("banner", Laya.Handler.create(this, function (ret) {
                            GameScene.BannerGamesShare_start = new BannerGamesShare();
                            GameScene.BannerGamesShare_start.zOrder = 10;
                            EventManager.Inst.event(EventManager.BANNER_GAMES_INIT, [ret, Laya.stage, Laya.stage.height - GameScene.BannerGamesShare_start.height - down_height, "banner_home"]);
                        }));
                    }
                    var of_show_iconclosebtn_type = false;
                    if (window["wx"]) {
                        var of_show_iconclosebtn = Number(JSON.parse(GameViewMassage.mWX.getOnOffParamByKey("of_show_iconclosebtn")).type);
                        if (of_show_iconclosebtn == 1) {
                            of_show_iconclosebtn_type = true;
                        }
                    }
                    if (GameViewMassage.DiversionImg != null) {
                        GameViewMassage.DiversionImg.clearPage();
                    }
                    if (GameViewMassage.DiversionImg == null) {
                        GameViewMassage.DiversionImg = DiversionShare.showDiversionShare(this, Laya.stage.width - 80, 350, "icon", of_show_iconclosebtn_type, Laya.Handler.create(this, function () {
                            console.log("icon展示回调");
                        }), Laya.Handler.create(this, function () {
                            console.log("icon关闭回调");
                            GameViewMassage.DiversionImg = null;
                        }));
                    } else {
                        GameViewMassage.DiversionImg.clearPage();
                        GameViewMassage.DiversionImg = DiversionShare.showDiversionShare(this, Laya.stage.width - 80, 350, "icon", of_show_iconclosebtn_type, Laya.Handler.create(this, function () {
                            console.log("icon展示回调");
                        }), Laya.Handler.create(this, function () {
                            GameViewMassage.DiversionImg = null;
                            console.log("icon关闭回调");
                        }));
                    }
                }
            }, {
                key: "showBoxresult",
                value: function showBoxresult() {
                    console.log("111111,游戏胜利");
                    var showpage = ForcePlayVideo.Inst.getIsShowPage(GameViewMassage.level_num);
                    if (showpage == 0) {
                        if (GameViewMassage.resultview == null) {
                            GameViewMassage.resultview = new Result(true);
                            GameViewMassage.resultview.zOrder = 20;
                            Laya.stage.addChild(GameViewMassage.resultview);
                        }
                    } else {
                        hitEggView.Inst.init(Laya.Handler.create(this, function () {
                            GameViewMassage.adUtil.hideBannerAd();
                            if (GameViewMassage.resultview == null) {
                                GameViewMassage.resultview = new Result(true);
                                GameViewMassage.resultview.zOrder = 20;
                                Laya.stage.addChild(GameViewMassage.resultview);
                            }
                        }));
                    }
                }
            }, {
                key: "showBoxFaild",
                value: function showBoxFaild() {
                    console.log("111111,游戏失败");
                    var showpage = ForcePlayVideo.Inst.getIsShowPage(GameViewMassage.level_num);
                    if (showpage == 0) {
                        if (GameViewMassage.resultview == null) {
                            GameViewMassage.resultview = new Result(false);
                            GameViewMassage.resultview.zOrder = 20;
                            Laya.stage.addChild(GameViewMassage.resultview);
                        }
                    } else {
                        hitEggView.Inst.init(Laya.Handler.create(this, function () {
                            GameViewMassage.adUtil.hideBannerAd();
                            if (GameViewMassage.resultview == null) {
                                GameViewMassage.resultview = new Result(false);
                                GameViewMassage.resultview.zOrder = 20;
                                Laya.stage.addChild(GameViewMassage.resultview);
                            }
                        }));
                    }
                }
            }, {
                key: "showAdd",
                value: function showAdd() {
                    if (GameManager.instance.levelStart) {
                        Laya.timer.clear(this, this.hideAdd);
                        this.lab_add.visible = true;
                        Laya.timer.once(500, this, this.hideAdd);
                    }
                }
            }, {
                key: "hideAdd",
                value: function hideAdd() {
                    this.lab_add.visible = false;
                }
            }, {
                key: "onEnable",
                value: function onEnable() { }
            }, {
                key: "onDisable",
                value: function onDisable() { }
            }], [{
                key: "rotaOtherGame",
                value: function rotaOtherGame(dhimg) {
                    Laya.Tween.clearAll(this);
                    var __this = this;
                    function Tw1() {
                        Laya.Tween.to(dhimg, {
                            rotation: 0
                        }, 200, null, new Laya.Handler(__this, Tw2));
                    }
                    function Tw2() {
                        Laya.Tween.to(dhimg, {
                            rotation: 30
                        }, 200, null, new Laya.Handler(__this, Tw3), 2e3);
                    }
                    function Tw3() {
                        Laya.Tween.to(dhimg, {
                            rotation: 0
                        }, 200, null, new Laya.Handler(__this, Tw4));
                    }
                    function Tw4() {
                        Laya.Tween.to(dhimg, {
                            rotation: 30
                        }, 200, null, new Laya.Handler(__this, Tw1));
                    }
                    Laya.Tween.to(dhimg, {
                        rotation: 30
                    }, 200, null, new Laya.Handler(__this, Tw1));
                }
            }]);
            return GameScene;
        }(ui.UI.GameSceneUI);
        GameScene.startGame = false;
        GameScene.app = null;
        GameScene.one_guide = 0;
        var shopView = /* */ function (_ui$UI$shopViewUI) {
            (0, _inherits2.default)(shopView, _ui$UI$shopViewUI);
            var _super34 = _createSuper(shopView);
            function shopView() {
                var _this66;
                (0, _classCallCheck2.default)(this, shopView);
                _this66 = _super34.call(this);
                _this66.intType = 1e3;
                _this66.numType = 1e3;
                _this66.strType = "hello laya";
                _this66.boolType = true;
                return _this66;
            }
            (0, _createClass2.default)(shopView, [{
                key: "onAwake",
                value: function onAwake() {
                    var _this67 = this;
                    console.log("shopViewAwake");
                    this.btn_close.on(Laya.Event.CLICK, this, function () {
                        _this67.close();
                    });
                    var data = [];
                    for (var i = 0; i < 3; i++) {
                        var element = i;
                        data.push(element);
                    }
                    this.list_equipment.dataSource = data;
                    this.list_equipment.itemRender = shopBox;
                    this.list_equipment.spaceX = 40;
                    this.list_equipment.renderHandler = new Laya.Handler(this, this.shopListRender);
                }
            }, {
                key: "shopListRender",
                value: function shopListRender(ceil, index) {
                    ceil.setShopBox(ceil.dataSource, index);
                }
            }, {
                key: "onEnable",
                value: function onEnable() {
                    GameManager.instance.inShopView = true;
                }
            }, {
                key: "onDisable",
                value: function onDisable() { }
            }, {
                key: "onClosed",
                value: function onClosed() {
                    GameManager.instance.inShopView = false;
                    GameManager.instance.onShopViewClose();
                }
            }]);
            return shopView;
        }(ui.UI.shopViewUI);
        var shopBox = /* */ function (_Laya$Box4) {
            (0, _inherits2.default)(shopBox, _Laya$Box4);
            var _super35 = _createSuper(shopBox);
            function shopBox() {
                var _this68;
                (0, _classCallCheck2.default)(this, shopBox);
                _this68 = _super35.call(this);
                _this68.itemName = new Laya.Label();
                _this68.bgImg = new Laya.Image("NinjaRes/shop_card_blue.png");
                _this68.itemImg = new Laya.Image();
                _this68.initBox();
                return _this68;
            }
            (0, _createClass2.default)(shopBox, [{
                key: "initBox",
                value: function initBox() {
                    this.width = 200;
                    this.height = 300;
                    this.addChild(this.bgImg);
                    this.bgImg.width = 200;
                    this.bgImg.height = 300;
                    this.addChild(this.itemName);
                    this.itemName.centerX = 0;
                    this.itemName.top = 20;
                    this.itemName.fontSize = 30;
                    this.itemName.color = "#ffffff";
                    this.itemName.stroke = 2;
                    this.itemName.strokeColor = "#404040";
                    this.addChild(this.itemImg);
                    this.itemImg.centerX = 0;
                    this.itemImg.centerY = 0;
                    this.itemImg.width = 150;
                    this.itemImg.height = 150;
                }
            }, {
                key: "setShopBox",
                value: function setShopBox(data, index) {
                    this.itemName.text = data + "";
                    console.log("setShopBox", data);
                    switch (data) {
                        case 0:
                            this.randomHeal();
                            break;

                        case 1:
                            this.randomWeapon();
                            break;

                        case 2:
                            this.randomSkill();
                            break;

                        default:
                            break;
                    }
                    this.on(Laya.Event.CLICK, this, this.useItme);
                }
            }, {
                key: "useItme",
                value: function useItme() { }
            }, {
                key: "randomHeal",
                value: function randomHeal() { }
            }, {
                key: "randomWeapon",
                value: function randomWeapon() { }
            }, {
                key: "randomSkill",
                value: function randomSkill() { }
            }]);
            return shopBox;
        }(Laya.Box);
        var GameConfig = /* */ function () {
            function GameConfig() {
                (0, _classCallCheck2.default)(this, GameConfig);
            }
            (0, _createClass2.default)(GameConfig, null, [{
                key: "init",
                value: function init() {
                    var reg = Laya.ClassUtils.regClass;
                    reg("script/UI/GameScene.ts", GameScene);
                    reg("script/UI/LoadingScene.ts", LoadingScene);
                    reg("script/UI/shopView.ts", shopView);
                }
            }]);
            return GameConfig;
        }();
        GameConfig.width = 750;
        GameConfig.height = 1334;
        GameConfig.scaleMode = "exactfit";
        GameConfig.screenMode = "none";
        GameConfig.alignV = "middle";
        GameConfig.alignH = "center";
        GameConfig.startScene = "UI/LoadingScnen.scene";
        GameConfig.sceneRoot = "";
        GameConfig.debug = false;
        GameConfig.stat = false;
        GameConfig.physicsDebug = false;
        GameConfig.exportSceneToJson = true;
        GameConfig.init();
        var Mathf = /* */ function () {
            function Mathf() {
                (0, _classCallCheck2.default)(this, Mathf);
            }
            (0, _createClass2.default)(Mathf, null, [{
                key: "Sin",
                value: function Sin(f) {
                    return Math.sin(f);
                }
            }, {
                key: "Cos",
                value: function Cos(f) {
                    return Math.cos(f);
                }
            }, {
                key: "Tan",
                value: function Tan(f) {
                    return Math.tan(f);
                }
            }, {
                key: "Asin",
                value: function Asin(f) {
                    return Math.asin(f);
                }
            }, {
                key: "Acos",
                value: function Acos(f) {
                    return Math.acos(f);
                }
            }, {
                key: "Atan",
                value: function Atan(f) {
                    return Math.atan(f);
                }
            }, {
                key: "Atan2",
                value: function Atan2(y, x) {
                    return Math.atan2(y, x);
                }
            }, {
                key: "Sqrt",
                value: function Sqrt(f) {
                    return Math.sqrt(f);
                }
            }, {
                key: "Abs",
                value: function Abs(f) {
                    return Math.abs(f);
                }
            }, {
                key: "Random",
                value: function Random(min, max) {
                    var float = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                    return float ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min) + min);
                }
            }, {
                key: "Min",
                value: function Min() {
                    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
                        values[_key] = arguments[_key];
                    }
                    var length = values.length;
                    if (length == 0) {
                        return 0;
                    }
                    var num3 = values[0];
                    for (var i = 1; i < length; i++) {
                        if (values[i] < num3) {
                            num3 = values[i];
                        }
                    }
                    return num3;
                }
            }, {
                key: "Max",
                value: function Max() {
                    for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        values[_key2] = arguments[_key2];
                    }
                    var length = values.length;
                    if (length == 0) {
                        return 0;
                    }
                    var num3 = values[0];
                    for (var i = 1; i < length; i++) {
                        if (values[i] > num3) {
                            num3 = values[i];
                        }
                    }
                    return num3;
                }
            }, {
                key: "Pow",
                value: function Pow(f, p) {
                    return Math.pow(f, p);
                }
            }, {
                key: "Exp",
                value: function Exp(power) {
                    return Math.exp(power);
                }
            }, {
                key: "Log",
                value: function Log(f) {
                    return Math.log(f);
                }
            }, {
                key: "Log10",
                value: function Log10(f) {
                    return Math.log10(f);
                }
            }, {
                key: "Ceil",
                value: function Ceil(f) {
                    return Math.ceil(f);
                }
            }, {
                key: "Floor",
                value: function Floor(f) {
                    return Math.floor(f);
                }
            }, {
                key: "Round",
                value: function Round(f) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var d = this.Pow(10, n);
                    return Math.floor(f * d + .5) / d;
                }
            }, {
                key: "RoundVector3",
                value: function RoundVector3(v) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    v.x = this.Round(v.x, n);
                    v.y = this.Round(v.y, n);
                    v.z = this.Round(v.z, n);
                }
            }, {
                key: "Sign",
                value: function Sign(f) {
                    return f < 0 ? -1 : 1;
                }
            }, {
                key: "Clamp",
                value: function Clamp(value, min, max) {
                    if (value < min) {
                        value = min;
                        return value;
                    }
                    if (value > max) {
                        value = max;
                    }
                    return value;
                }
            }, {
                key: "Clamp01",
                value: function Clamp01(value) {
                    if (value < 0) {
                        return 0;
                    }
                    if (value > 1) {
                        return 1;
                    }
                    return value;
                }
            }, {
                key: "Lerp",
                value: function Lerp(a, b, t) {
                    return a + (b - a) * this.Clamp01(t);
                }
            }, {
                key: "LerpUnclamped",
                value: function LerpUnclamped(a, b, t) {
                    return a + (b - a) * t;
                }
            }, {
                key: "LerpAngle",
                value: function LerpAngle(a, b, t) {
                    var num = this.Repeat(b - a, 360);
                    if (num > 180) {
                        num -= 360;
                    }
                    return a + num * this.Clamp01(t);
                }
            }, {
                key: "MoveTowards",
                value: function MoveTowards(current, target, maxDelta) {
                    if (this.Abs(target - current) <= maxDelta) {
                        return target;
                    }
                    return current + this.Sign(target - current) * maxDelta;
                }
            }, {
                key: "MoveTowardsAngle",
                value: function MoveTowardsAngle(current, target, maxDelta) {
                    var num = this.DeltaAngle(current, target);
                    if (-maxDelta < num && num < maxDelta) {
                        return target;
                    }
                    target = current + num;
                    return this.MoveTowards(current, target, maxDelta);
                }
            }, {
                key: "SmoothStep",
                value: function SmoothStep(from, to, t) {
                    t = this.Clamp01(t);
                    t = -2 * t * t * t + 3 * t * t;
                    return to * t + from * (1 - t);
                }
            }, {
                key: "Gamma",
                value: function Gamma(value, absmax, gamma) {
                    var flag = false;
                    if (value < 0) {
                        flag = true;
                    }
                    var num = this.Abs(value);
                    if (num > absmax) {
                        return !flag ? num : -num;
                    }
                    var num3 = this.Pow(num / absmax, gamma) * absmax;
                    return !flag ? num3 : -num3;
                }
            }, {
                key: "Repeat",
                value: function Repeat(t, length) {
                    return this.Clamp(t - this.Floor(t / length) * length, 0, length);
                }
            }, {
                key: "PingPong",
                value: function PingPong(t, length) {
                    t = this.Repeat(t, length * 2);
                    return length - this.Abs(t - length);
                }
            }, {
                key: "InverseLerp",
                value: function InverseLerp(a, b, value) {
                    if (a != b) {
                        return this.Clamp01((value - a) / (b - a));
                    }
                    return 0;
                }
            }, {
                key: "DeltaAngle",
                value: function DeltaAngle(current, target) {
                    var num = this.Repeat(target - current, 360);
                    if (num > 180) {
                        num -= 360;
                    }
                    return num;
                }
            }, {
                key: "SmoothDamp",
                value: function SmoothDamp(current, target, currentVelocity, smoothTime) {
                    var maxSpeed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_SAFE_INTEGER;
                    var deltaTime = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Laya.timer.delta * .001;
                    smoothTime = this.Max(1e-4, smoothTime);
                    var num = 2 / smoothTime;
                    var num2 = num * deltaTime;
                    var num3 = 1 / (1 + num2 + .48 * num2 * num2 + .235 * num2 * num2 * num2);
                    var num4 = current - target;
                    var num5 = target;
                    var max = maxSpeed * smoothTime;
                    num4 = this.Clamp(num4, -max, max);
                    target = current - num4;
                    var num7 = (currentVelocity + num * num4) * deltaTime;
                    currentVelocity = (currentVelocity - num * num7) * num3;
                    var num8 = target + (num4 + num7) * num3;
                    if (num5 - current > 0 == num8 > num5) {
                        num8 = num5;
                        currentVelocity = (num8 - num5) / deltaTime;
                    }
                    return {
                        value: num8,
                        currentVelocity: currentVelocity
                    };
                }
            }, {
                key: "LineIntersection",
                value: function LineIntersection(p1, p2, p3, p4, result) {
                    var num = p2.x - p1.x;
                    var num2 = p2.y - p1.y;
                    var num3 = p4.x - p3.x;
                    var num4 = p4.y - p3.y;
                    var num5 = num * num4 - num2 * num3;
                    if (num5 == 0) {
                        return false;
                    }
                    var num6 = p3.x - p1.x;
                    var num7 = p3.y - p1.y;
                    var num8 = (num6 * num4 - num7 * num3) / num5;
                    result = new Laya.Vector2(p1.x + num8 * num, p1.y + num8 * num2);
                    return true;
                }
            }, {
                key: "LineSegmentIntersection",
                value: function LineSegmentIntersection(p1, p2, p3, p4, result) {
                    var num = p2.x - p1.x;
                    var num2 = p2.y - p1.y;
                    var num3 = p4.x - p3.x;
                    var num4 = p4.y - p3.y;
                    var num5 = num * num4 - num2 * num3;
                    if (num5 == 0) {
                        return false;
                    }
                    var num6 = p3.x - p1.x;
                    var num7 = p3.y - p1.y;
                    var num8 = (num6 * num4 - num7 * num3) / num5;
                    if (num8 < 0 || num8 > 1) {
                        return false;
                    }
                    var num9 = (num6 * num2 - num7 * num) / num5;
                    if (num9 < 0 || num9 > 1) {
                        return false;
                    }
                    result = new Laya.Vector2(p1.x + num8 * num, p1.y + num8 * num2);
                    return true;
                }
            }]);
            return Mathf;
        }();
        Mathf.PI = 3.141593;
        Mathf.Infinity = Number.MAX_SAFE_INTEGER;
        Mathf.NegativeInfinity = Number.MIN_SAFE_INTEGER;
        Mathf.Deg2Rad = .01745329;
        Mathf.Rad2Deg = 57.29578;
        var Quaternion = Laya.Quaternion;
        var Quaternion$1 = function () {
            Quaternion.prototype.vmult = function (v, target) {
                var target = target || new Laya.Vector3();
                var x = v.x, y = v.y, z = v.z;
                var qx = this.x, qy = this.y, qz = this.z, qw = this.w;
                var ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
                target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
                target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
                target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
                return target;
            };
            Quaternion.prototype.conjugate = function () {
                this.x *= -1;
                this.y *= -1;
                this.z *= -1;
                return this;
            };
            Quaternion.prototype.copy = function (s) {
                this.x = s.x;
                this.y = s.y;
                this.z = s.z;
                this.w = s.w;
                return this;
            };
            Quaternion.prototype.setFromEuler = function (euler) {
                var x = euler.x, y = euler.y, z = euler.z;
                var cos = Math.cos;
                var sin = Math.sin;
                var c1 = cos(x / 2);
                var c2 = cos(y / 2);
                var c3 = cos(z / 2);
                var s1 = sin(x / 2);
                var s2 = sin(y / 2);
                var s3 = sin(z / 2);
                this.x = s1 * c2 * c3 + c1 * s2 * s3;
                this.y = c1 * s2 * c3 - s1 * c2 * s3;
                this.z = c1 * c2 * s3 + s1 * s2 * c3;
                this.w = c1 * c2 * c3 - s1 * s2 * s3;
                return this;
            };
            Quaternion.prototype.setFromAxisAngle = function (axis, angle) {
                var halfAngle = angle / 2, s = Math.sin(halfAngle);
                this.x = axis.x * s;
                this.y = axis.y * s;
                this.z = axis.z * s;
                this.w = Math.cos(halfAngle);
                return this;
            };
            Quaternion.prototype.setFromRotationMatrix = function (m) {
                var te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33, s;
                if (trace > 0) {
                    s = .5 / Math.sqrt(trace + 1);
                    this.w = .25 / s;
                    this.x = (m32 - m23) * s;
                    this.y = (m13 - m31) * s;
                    this.z = (m21 - m12) * s;
                } else if (m11 > m22 && m11 > m33) {
                    s = 2 * Math.sqrt(1 + m11 - m22 - m33);
                    this.w = (m32 - m23) / s;
                    this.x = .25 * s;
                    this.y = (m12 + m21) / s;
                    this.z = (m13 + m31) / s;
                } else if (m22 > m33) {
                    s = 2 * Math.sqrt(1 + m22 - m11 - m33);
                    this.w = (m13 - m31) / s;
                    this.x = (m12 + m21) / s;
                    this.y = .25 * s;
                    this.z = (m23 + m32) / s;
                } else {
                    s = 2 * Math.sqrt(1 + m33 - m11 - m22);
                    this.w = (m21 - m12) / s;
                    this.x = (m13 + m31) / s;
                    this.y = (m23 + m32) / s;
                    this.z = .25 * s;
                }
                return this;
            };
            Quaternion.prototype.setFromUnitVectors = function (vFrom, vTo) {
                var EPS = 1e-6;
                var r = vFrom.dot(vTo) + 1;
                if (r < EPS) {
                    r = 0;
                    if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                        this.x = -vFrom.y;
                        this.y = vFrom.x;
                        this.z = 0;
                        this.w = r;
                    } else {
                        this.x = 0;
                        this.y = -vFrom.z;
                        this.z = vFrom.y;
                        this.w = r;
                    }
                } else {
                    this.x = vFrom.y * vTo.z - vFrom.z * vTo.y;
                    this.y = vFrom.z * vTo.x - vFrom.x * vTo.z;
                    this.z = vFrom.x * vTo.y - vFrom.y * vTo.x;
                    this.w = r;
                }
                return this.normalize();
            };
            Quaternion.prototype.angleTo = function (q) {
                return 2 * Math.acos(Math.abs(Mathf.Clamp(this.dot(q), -1, 1)));
            };
            Quaternion.prototype.rotateTowards = function (q, step) {
                var angle = this.angleTo(q);
                if (angle === 0) return this;
                var t = Math.min(1, step / angle);
                this.slerp(q, t);
                return this;
            };
            Quaternion.prototype.inverse = function () {
                return this.conjugate();
            };
            Quaternion.prototype.dot = function (v) {
                return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
            };
            Quaternion.prototype.lengthSq = function () {
                return this.dot(this);
            };
            Quaternion.prototype.length = function () {
                return Math.sqrt(this.dot(this));
            };
            Quaternion.prototype.normalize = function () {
                var l = this.length();
                if (l === 0) {
                    this.x = 0;
                    this.y = 0;
                    this.z = 0;
                    this.w = 1;
                } else {
                    l = 1 / l;
                    this.x = this.x * l;
                    this.y = this.y * l;
                    this.z = this.z * l;
                    this.w = this.w * l;
                }
                return this;
            };
            Quaternion.prototype.multiply = function (q) {
                return this.multiplyQuaternions(this, q);
            };
            Quaternion.prototype.premultiply = function (q) {
                return this.multiplyQuaternions(q, this);
            };
            Quaternion.prototype.multiplyQuaternions = function (a, b) {
                var qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
                var qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;
                this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
                this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
                this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
                this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
                return this;
            };
            Quaternion.prototype.slerp = function (qb, t) {
                if (t === 0) return this;
                if (t === 1) return this.copy(qb);
                var x = this.x, y = this.y, z = this.z, w = this.w;
                var cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;
                if (cosHalfTheta < 0) {
                    this.w = -qb.w;
                    this.x = -qb.x;
                    this.y = -qb.y;
                    this.z = -qb.z;
                    cosHalfTheta = -cosHalfTheta;
                } else {
                    this.copy(qb);
                }
                if (cosHalfTheta >= 1) {
                    this.w = w;
                    this.x = x;
                    this.y = y;
                    this.z = z;
                    return this;
                }
                var sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
                if (sqrSinHalfTheta <= Number.EPSILON) {
                    var s = 1 - t;
                    this.w = s * w + t * this.w;
                    this.x = s * x + t * this.x;
                    this.y = s * y + t * this.y;
                    this.z = s * z + t * this.z;
                    this.normalize();
                    return this;
                }
                var sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
                var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
                var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
                this.w = w * ratioA + this.w * ratioB;
                this.x = x * ratioA + this.x * ratioB;
                this.y = y * ratioA + this.y * ratioB;
                this.z = z * ratioA + this.z * ratioB;
                return this;
            };
            Quaternion.prototype.equals = function (quaternion) {
                return quaternion.x === this.x && quaternion.y === this.y && quaternion.z === this.z && quaternion.w === this.w;
            };
            Quaternion.prototype.fromArray = function (arr) {
                this.x = arr[0];
                this.y = arr[1];
                this.z = arr[2];
                this.w = arr[3];
                return this;
            };
            Quaternion.prototype.toArray = function () {
                return [this.x, this.y, this.z, this.w];
            };
            Quaternion.prototype.toString = function () {
                return "Quaternion: " + this.x + ", " + this.y + ", " + this.z + ", " + this.w;
            };
        }();
        var Vector3 = function () {
            Laya.Vector3.prototype.vsub = function (v, target) {
                var target = target || new Laya.Vector3();
                Laya.Vector3.subtract(this, v, target);
                return target;
            };
            Laya.Vector3.prototype.vadd = function (v, target) {
                var target = target || new Laya.Vector3();
                Laya.Vector3.add(this, v, target);
                return target;
            };
            Laya.Vector3.prototype.mult = function (scalar, target) {
                target = target || new Laya.Vector3();
                var x = this.x, y = this.y, z = this.z;
                target.x = scalar * x;
                target.y = scalar * y;
                target.z = scalar * z;
                return target;
            };
            Laya.Vector3.prototype.divide = function (scalar, target) {
                target = target || new Laya.Vector3();
                var x = this.x, y = this.y, z = this.z;
                target.x = x / scalar;
                target.y = y / scalar;
                target.z = z / scalar;
                return target;
            };
            Laya.Vector3.prototype.cross = function (v, target) {
                var vx = v.x, vy = v.y, vz = v.z, x = this.x, y = this.y, z = this.z;
                var target = target || new Laya.Vector3();
                target.x = y * vz - z * vy;
                target.y = z * vx - x * vz;
                target.z = x * vy - y * vx;
                return target;
            };
            Laya.Vector3.prototype.dot = function (v) {
                return this.x * v.x + this.y * v.y + this.z * v.z;
            };
            Laya.Vector3.prototype.normalize = function () {
                var num = this.magnitude();
                if (num <= 1e-5) this.set(0, 0, 0); else this.divide(num, this);
                return this;
            };
            Laya.Vector3.prototype.magnitude = function () {
                return Mathf.Sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            };
            Laya.Vector3.prototype.magnitudeSquared = function () {
                return this.dot(this);
            };
            Laya.Vector3.prototype.distanceTo = function (p) {
                var x = this.x, y = this.y, z = this.z;
                var px = p.x, py = p.y, pz = p.z;
                return Math.sqrt((px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z));
            };
            Laya.Vector3.prototype.distanceSquared = function (p) {
                var x = this.x, y = this.y, z = this.z;
                var px = p.x, py = p.y, pz = p.z;
                return (px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z);
            };
            Laya.Vector3.prototype.scale = Laya.Vector3.prototype.mult;
            Laya.Vector3.prototype.vmul = function (vector, target) {
                target = target || new Laya.Vector3();
                target.x = vector.x * this.x;
                target.y = vector.y * this.y;
                target.z = vector.z * this.z;
                return target;
            };
            Laya.Vector3.prototype.negate = function (target) {
                target = target || new Laya.Vector3();
                target.x = -this.x;
                target.y = -this.y;
                target.z = -this.z;
                return target;
            };
            Laya.Vector3.prototype.set = function (x, y, z) {
                this.x = x;
                this.y = y;
                this.z = z;
                return this;
            };
            Laya.Vector3.prototype.copy = function (v) {
                this.x = v.x;
                this.y = v.y;
                this.z = v.z;
                return this;
            };
            Laya.Vector3.prototype.toArray = function () {
                return [this.x, this.y, this.z];
            };
            Laya.Vector3.prototype.fromArray = function (array, offset) {
                if (offset === undefined) offset = 0;
                this.x = array[offset];
                this.y = array[offset + 1];
                this.z = array[offset + 2];
                return this;
            };
            var Vec3_tangents_n = new Laya.Vector3();
            var Vec3_tangents_randVec = new Laya.Vector3();
            Laya.Vector3.prototype.tangents = function (t1, t2) {
                var norm = this.norm();
                if (norm > 0) {
                    var n = Vec3_tangents_n;
                    var inorm = 1 / norm;
                    n.set(this.x * inorm, this.y * inorm, this.z * inorm);
                    var randVec = Vec3_tangents_randVec;
                    if (Math.abs(n.x) < .9) {
                        randVec.set(1, 0, 0);
                        n.cross(randVec, t1);
                    } else {
                        randVec.set(0, 1, 0);
                        n.cross(randVec, t1);
                    }
                    n.cross(t1, t2);
                } else {
                    t1.set(1, 0, 0);
                    t2.set(0, 1, 0);
                }
            };
            Laya.Vector3.prototype.lerp = function (v, t, target) {
                var x = this.x, y = this.y, z = this.z;
                target.x = x + (v.x - x) * t;
                target.y = y + (v.y - y) * t;
                target.z = z + (v.z - z) * t;
            };
            Laya.Vector3.prototype.almostEquals = function (v, precision) {
                if (precision === undefined) {
                    precision = 1e-6;
                }
                if (Math.abs(this.x - v.x) > precision || Math.abs(this.y - v.y) > precision || Math.abs(this.z - v.z) > precision) {
                    return false;
                }
                return true;
            };
            Laya.Vector3.prototype.isZero = function () {
                return this.x === 0 && this.y === 0 && this.z === 0;
            };
            var antip_neg = new Laya.Vector3();
            Laya.Vector3.prototype.isAntiparallelTo = function (v, precision) {
                this.negate(antip_neg);
                return antip_neg.almostEquals(v, precision);
            };
            Laya.Vector3.angle = function (from, to) {
                var num = Mathf.Sqrt(from.magnitudeSquared() * to.magnitudeSquared());
                return num >= 1e-15 ? Mathf.Acos(Mathf.Clamp(from.dot(to) / num, -1, 1)) * 57.29578 : 0;
            };
            Laya.Vector3.signedAngle = function (from, to, axis) {
                return Laya.Vector3.angle(from, to) * Mathf.Sign(axis.dot(from.cross(to)));
            };
            Laya.Vector3.moveTowards = function (current, target, maxDistanceDelta, out) {
                var out = out || new Laya.Vector3();
                var vector = target.vsub(current);
                var magnitude = vector.magnitude();
                if (magnitude <= maxDistanceDelta || magnitude == 0) out.copy(target); else {
                    current.vadd(vector.divide(magnitude).mult(maxDistanceDelta), out);
                }
                return out;
            };
            Laya.Vector3.reflect = function (inDirection, inNormal, target) {
                var target = target || new Laya.Vector3();
                inNormal.mult(inNormal.dot(inDirection) * -2, target);
                target.vadd(inDirection, target);
                return target;
            };
            Laya.Vector3.prototype.min = function (v) {
                this.x = Mathf.Min(this.x, v.x);
                this.y = Mathf.Min(this.y, v.y);
                this.z = Mathf.Min(this.z, v.z);
                return this;
            };
            Laya.Vector3.prototype.max = function (v) {
                this.x = Mathf.Max(this.x, v.x);
                this.y = Mathf.Max(this.y, v.y);
                this.z = Mathf.Max(this.z, v.z);
                return this;
            };
            Laya.Vector3.prototype.applyMatrix3 = function (m) {
                var x = this.x, y = this.y, z = this.z;
                var e = m.elements;
                this.x = e[0] * x + e[3] * y + e[6] * z;
                this.y = e[1] * x + e[4] * y + e[7] * z;
                this.z = e[2] * x + e[5] * y + e[8] * z;
                return this;
            };
            Laya.Vector3.prototype.applyMatrix4 = function (m) {
                var x = this.x, y = this.y, z = this.z;
                var e = m.elements;
                var w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
                this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
                this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
                this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
                return this;
            };
            Laya.Vector3.prototype.applyQuaternion = function (q) {
                var x = this.x, y = this.y, z = this.z;
                var qx = q.x, qy = q.y, qz = q.z, qw = q.w;
                var ix = qw * x + qy * z - qz * y;
                var iy = qw * y + qz * x - qx * z;
                var iz = qw * z + qx * y - qy * x;
                var iw = -qx * x - qy * y - qz * z;
                this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
                this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
                this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
                return this;
            };
            Laya.Vector3.prototype.setFromMatrixPosition = function (m) {
                var e = m.elements;
                this.x = e[12];
                this.y = e[13];
                this.z = e[14];
                return this;
            };
            Laya.Vector3.prototype.setFromMatrixScale = function (m) {
                var sx = this.setFromMatrixColumn(m, 0).magnitude();
                var sy = this.setFromMatrixColumn(m, 1).magnitude();
                var sz = this.setFromMatrixColumn(m, 2).magnitude();
                this.x = sx;
                this.y = sy;
                this.z = sz;
                return this;
            };
            Laya.Vector3.prototype.setFromMatrix3Column = function (m, index) {
                return this.fromArray(m.elements, index * 3);
            };
            Laya.Vector3.prototype.setFromMatrixColumn = function (m, index) {
                return this.fromArray(m.elements, index * 4);
            };
            Laya.Vector3.prototype.toString = function () {
                return "Vector3: " + this.x + ", " + this.y + ", " + this.z;
            };
            Laya.Vector3.zero = new Laya.Vector3();
            Laya.Vector3.one = new Laya.Vector3(1, 1, 1);
            Laya.Vector3.up = new Laya.Vector3(0, 1, 0);
            Laya.Vector3.down = new Laya.Vector3(0, -1, 0);
            Laya.Vector3.forward = new Laya.Vector3(0, 0, 1);
            Laya.Vector3.back = new Laya.Vector3(0, 0, -1);
            Laya.Vector3.right = new Laya.Vector3(-1, 0, 0);
            Laya.Vector3.left = new Laya.Vector3(1, 0, 0);
        }();
        function traverse$1(node, callback) {
            callback.runWith(node);
            if (node.numChildren > 0) for (var i = 0; i < node.numChildren; i++) {
                traverse$1(node.getChildAt(i), callback);
            }
        }
        var Node$1 = function () {
            Laya.Node.prototype.find = function (path) {
                var self = this;
                if (!path) return self;
                var arr = path.split("/");
                var cur = self;
                while (arr.length > 0) {
                    cur = cur.getChildByName(arr.shift());
                    if (!cur) return null;
                }
                return cur;
            };
            Laya.Node.prototype.findChild = function (name) {
                var self = this;
                for (var i = 0; i < self.numChildren; i++) {
                    var n = self.getChildAt(i);
                    if (n.name === name) return n; else if (n.numChildren > 0) {
                        var m = n.findChild(name);
                        if (m != null) {
                            return m;
                        }
                    }
                }
                return null;
            };
            Laya.Node.prototype.traverse = function (call) {
                var h = new Laya.Handler(Laya.Node.prototype, call);
                traverse$1(this, h);
                h.recover();
            };
        }();
        var Matrix4x4 = Laya.Matrix4x4;
        var Vector3$1 = Laya.Vector3;
        var Matrix4x4$1 = function () {
            var _v1 = new Vector3$1();
            var _m1 = new Laya.Matrix4x4();
            var _zero = new Vector3$1(0, 0, 0);
            var _one = new Vector3$1(1, 1, 1);
            var _x = new Vector3$1();
            var _y = new Vector3$1();
            var _z = new Vector3$1();
            Matrix4x4.prototype.setForward;
            Matrix4x4.prototype.set = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
                var self = this;
                var te = self.elements;
                te[0] = n11;
                te[4] = n12;
                te[8] = n13;
                te[12] = n14;
                te[1] = n21;
                te[5] = n22;
                te[9] = n23;
                te[13] = n24;
                te[2] = n31;
                te[6] = n32;
                te[10] = n33;
                te[14] = n34;
                te[3] = n41;
                te[7] = n42;
                te[11] = n43;
                te[15] = n44;
                return this;
            };
            Matrix4x4.prototype.copy = function (m) {
                var te = this.elements;
                var me = m.elements;
                te[0] = me[0];
                te[1] = me[1];
                te[2] = me[2];
                te[3] = me[3];
                te[4] = me[4];
                te[5] = me[5];
                te[6] = me[6];
                te[7] = me[7];
                te[8] = me[8];
                te[9] = me[9];
                te[10] = me[10];
                te[11] = me[11];
                te[12] = me[12];
                te[13] = me[13];
                te[14] = me[14];
                te[15] = me[15];
                return this;
            };
            Matrix4x4.prototype.copyPosition = function (m) {
                var te = this.elements, me = m.elements;
                te[12] = me[12];
                te[13] = me[13];
                te[14] = me[14];
                return this;
            };
            Matrix4x4.prototype.extractBasis = function (xAxis, yAxis, zAxis) {
                xAxis.setFromMatrixColumn(this, 0);
                yAxis.setFromMatrixColumn(this, 1);
                zAxis.setFromMatrixColumn(this, 2);
                return this;
            };
            Matrix4x4.prototype.makeBasis = function (xAxis, yAxis, zAxis) {
                this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.extractRotation = function (m) {
                var te = this.elements;
                var me = m.elements;
                var scaleX = 1 / _v1.setFromMatrixColumn(m, 0).magnitude();
                var scaleY = 1 / _v1.setFromMatrixColumn(m, 1).magnitude();
                var scaleZ = 1 / _v1.setFromMatrixColumn(m, 2).magnitude();
                te[0] = me[0] * scaleX;
                te[1] = me[1] * scaleX;
                te[2] = me[2] * scaleX;
                te[3] = 0;
                te[4] = me[4] * scaleY;
                te[5] = me[5] * scaleY;
                te[6] = me[6] * scaleY;
                te[7] = 0;
                te[8] = me[8] * scaleZ;
                te[9] = me[9] * scaleZ;
                te[10] = me[10] * scaleZ;
                te[11] = 0;
                te[12] = 0;
                te[13] = 0;
                te[14] = 0;
                te[15] = 1;
                return this;
            };
            Matrix4x4.prototype.makeRotationFromEuler = function (euler) {
                var te = this.elements;
                var x = euler.x, y = euler.y, z = euler.z;
                var a = Math.cos(x), b = Math.sin(x);
                var c = Math.cos(y), d = Math.sin(y);
                var e = Math.cos(z), f = Math.sin(z);
                var ae = a * e, af = a * f, be = b * e, bf = b * f;
                te[0] = c * e;
                te[4] = -c * f;
                te[8] = d;
                te[1] = af + be * d;
                te[5] = ae - bf * d;
                te[9] = -b * c;
                te[2] = bf - ae * d;
                te[6] = be + af * d;
                te[10] = a * c;
                te[3] = 0;
                te[7] = 0;
                te[11] = 0;
                te[12] = 0;
                te[13] = 0;
                te[14] = 0;
                te[15] = 1;
                return this;
            };
            Matrix4x4.prototype.makeRotationFromQuaternion = function (q) {
                return this.compose(_zero, q, _one);
            };
            Matrix4x4.prototype.lookAt = function (eye, target, up) {
                var te = this.elements;
                eye.vsub(target, _z);
                if (_z.magnitudeSquared() === 0) {
                    _z.z = 1;
                }
                _z.normalize();
                up.cross(_z, _x);
                if (_x.magnitudeSquared() === 0) {
                    if (Math.abs(up.z) === 1) {
                        _z.x += 1e-4;
                    } else {
                        _z.z += 1e-4;
                    }
                    _z.normalize();
                    up.cross(_z, _x);
                }
                _x.normalize();
                _z.cross(_x, _y);
                te[0] = _x.x;
                te[4] = _y.x;
                te[8] = _z.x;
                te[1] = _x.y;
                te[5] = _y.y;
                te[9] = _z.y;
                te[2] = _x.z;
                te[6] = _y.z;
                te[10] = _z.z;
                return this;
            };
            Matrix4x4.prototype.multiply = function (m) {
                return this.multiplyMatrices(this, m);
            };
            Matrix4x4.prototype.premultiply = function (m) {
                return this.multiplyMatrices(m, this);
            };
            Matrix4x4.prototype.multiplyMatrices = function (a, b) {
                var ae = a.elements;
                var be = b.elements;
                var te = this.elements;
                var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
                var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
                var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
                var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
                var b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
                var b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
                var b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
                var b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
                te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
                te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
                te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
                te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
                te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
                te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
                te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
                te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
                te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
                te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
                te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
                te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
                te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
                te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
                te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
                te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
                return this;
            };
            Matrix4x4.prototype.multiplyScalar = function (s) {
                var te = this.elements;
                te[0] *= s;
                te[4] *= s;
                te[8] *= s;
                te[12] *= s;
                te[1] *= s;
                te[5] *= s;
                te[9] *= s;
                te[13] *= s;
                te[2] *= s;
                te[6] *= s;
                te[10] *= s;
                te[14] *= s;
                te[3] *= s;
                te[7] *= s;
                te[11] *= s;
                te[15] *= s;
                return this;
            };
            Matrix4x4.prototype.determinant = function () {
                var te = this.elements;
                var n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
                var n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
                var n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
                var n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
                return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
            };
            Matrix4x4.prototype.transpose = function () {
                var te = this.elements;
                var tmp;
                tmp = te[1];
                te[1] = te[4];
                te[4] = tmp;
                tmp = te[2];
                te[2] = te[8];
                te[8] = tmp;
                tmp = te[6];
                te[6] = te[9];
                te[9] = tmp;
                tmp = te[3];
                te[3] = te[12];
                te[12] = tmp;
                tmp = te[7];
                te[7] = te[13];
                te[13] = tmp;
                tmp = te[11];
                te[11] = te[14];
                te[14] = tmp;
                return this;
            };
            Matrix4x4.prototype.setPosition = function (x, y, z) {
                var te = this.elements;
                if (x instanceof Laya.Vector3) {
                    te[12] = x.x;
                    te[13] = x.y;
                    te[14] = x.z;
                } else {
                    te[12] = x;
                    te[13] = y;
                    te[14] = z;
                }
                return this;
            };
            Matrix4x4.prototype.getInverse = function (m) {
                var te = this.elements, me = m.elements, n11 = me[0], n21 = me[1], n31 = me[2], n41 = me[3], n12 = me[4], n22 = me[5], n32 = me[6], n42 = me[7], n13 = me[8], n23 = me[9], n33 = me[10], n43 = me[11], n14 = me[12], n24 = me[13], n34 = me[14], n44 = me[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
                var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
                if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                var detInv = 1 / det;
                te[0] = t11 * detInv;
                te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
                te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
                te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
                te[4] = t12 * detInv;
                te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
                te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
                te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
                te[8] = t13 * detInv;
                te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
                te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
                te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
                te[12] = t14 * detInv;
                te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
                te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
                te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
                return this;
            };
            Matrix4x4.prototype.scale = function (v) {
                var te = this.elements;
                var x = v.x, y = v.y, z = v.z;
                te[0] *= x;
                te[4] *= y;
                te[8] *= z;
                te[1] *= x;
                te[5] *= y;
                te[9] *= z;
                te[2] *= x;
                te[6] *= y;
                te[10] *= z;
                te[3] *= x;
                te[7] *= y;
                te[11] *= z;
                return this;
            };
            Matrix4x4.prototype.getMaxScaleOnAxis = function () {
                var te = this.elements;
                var scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
                var scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
                var scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
                return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
            };
            Matrix4x4.prototype.makeTranslation = function (x, y, z) {
                this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.makeRotationX = function (theta) {
                var c = Math.cos(theta), s = Math.sin(theta);
                this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.makeRotationY = function (theta) {
                var c = Math.cos(theta), s = Math.sin(theta);
                this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.makeRotationZ = function (theta) {
                var c = Math.cos(theta), s = Math.sin(theta);
                this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.makeRotationAxis = function (axis, angle) {
                var c = Math.cos(angle);
                var s = Math.sin(angle);
                var t = 1 - c;
                var x = axis.x, y = axis.y, z = axis.z;
                var tx = t * x, ty = t * y;
                this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.makeScale = function (x, y, z) {
                this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.makeShear = function (x, y, z) {
                this.set(1, y, z, 0, x, 1, z, 0, x, y, 1, 0, 0, 0, 0, 1);
                return this;
            };
            Matrix4x4.prototype.compose = function (position, quaternion, scale) {
                var te = this.elements;
                var x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
                var x2 = x + x, y2 = y + y, z2 = z + z;
                var xx = x * x2, xy = x * y2, xz = x * z2;
                var yy = y * y2, yz = y * z2, zz = z * z2;
                var wx = w * x2, wy = w * y2, wz = w * z2;
                var sx = scale.x, sy = scale.y, sz = scale.z;
                te[0] = (1 - (yy + zz)) * sx;
                te[1] = (xy + wz) * sx;
                te[2] = (xz - wy) * sx;
                te[3] = 0;
                te[4] = (xy - wz) * sy;
                te[5] = (1 - (xx + zz)) * sy;
                te[6] = (yz + wx) * sy;
                te[7] = 0;
                te[8] = (xz + wy) * sz;
                te[9] = (yz - wx) * sz;
                te[10] = (1 - (xx + yy)) * sz;
                te[11] = 0;
                te[12] = position.x;
                te[13] = position.y;
                te[14] = position.z;
                te[15] = 1;
                return this;
            };
            Matrix4x4.prototype.decompose = function (position, quaternion, scale) {
                var te = this.elements;
                var sx = _v1.set(te[0], te[1], te[2]).magnitude();
                var sy = _v1.set(te[4], te[5], te[6]).magnitude();
                var sz = _v1.set(te[8], te[9], te[10]).magnitude();
                var det = this.determinant();
                if (det < 0) sx = -sx;
                position.x = te[12];
                position.y = te[13];
                position.z = te[14];
                _m1.copy(this);
                var invSX = 1 / sx;
                var invSY = 1 / sy;
                var invSZ = 1 / sz;
                _m1.elements[0] *= invSX;
                _m1.elements[1] *= invSX;
                _m1.elements[2] *= invSX;
                _m1.elements[4] *= invSY;
                _m1.elements[5] *= invSY;
                _m1.elements[6] *= invSY;
                _m1.elements[8] *= invSZ;
                _m1.elements[9] *= invSZ;
                _m1.elements[10] *= invSZ;
                quaternion.setFromRotationMatrix(_m1);
                scale.x = sx;
                scale.y = sy;
                scale.z = sz;
                return this;
            };
            Matrix4x4.prototype.equals = function (matrix) {
                var te = this.elements;
                var me = matrix.elements;
                for (var i = 0; i < 16; i++) {
                    if (te[i] !== me[i]) return false;
                }
                return true;
            };
            Matrix4x4.prototype.toArray = function (array, offset) {
                if (array === undefined) array = [];
                if (offset === undefined) offset = 0;
                var te = this.elements;
                array[offset] = te[0];
                array[offset + 1] = te[1];
                array[offset + 2] = te[2];
                array[offset + 3] = te[3];
                array[offset + 4] = te[4];
                array[offset + 5] = te[5];
                array[offset + 6] = te[6];
                array[offset + 7] = te[7];
                array[offset + 8] = te[8];
                array[offset + 9] = te[9];
                array[offset + 10] = te[10];
                array[offset + 11] = te[11];
                array[offset + 12] = te[12];
                array[offset + 13] = te[13];
                array[offset + 14] = te[14];
                array[offset + 15] = te[15];
                return array;
            };
            Matrix4x4.prototype.fromArray = function (array, offset) {
                if (offset === undefined) offset = 0;
                for (var i = 0; i < 16; i++) {
                    this.elements[i] = array[i + offset];
                }
                return this;
            };
        }();
        var Main = /* */ function () {
            function Main() {
                (0, _classCallCheck2.default)(this, Main);
                if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height); else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
                Laya.stage.scaleMode = GameConfig.scaleMode;
                Laya.stage.screenMode = GameConfig.screenMode;
                Laya.stage.alignV = GameConfig.alignV;
                Laya.stage.alignH = GameConfig.alignH;
                Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
                window.yad = platform.getInstance().createLogo();
                window.yad.top = 0;
                window.yad.right = 0;
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            (0, _createClass2.default)(Main, [{
                key: "onVersionLoaded",
                value: function onVersionLoaded() {
                    Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                }
            }, {
                key: "onConfigLoaded",
                value: function onConfigLoaded() {
                    GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
                }
            }]);
            return Main;
        }();
        new Main();
    })();
}()