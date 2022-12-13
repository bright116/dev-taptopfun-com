var webuzzUtils = {
    Defalut: {
        log(e, n) {
            webuzzCommon.DEBUG && (n ? console.log(e, n) : console.log(e));
        },
        sendEvent(e, n) {
            wx && ((n = void 0 === n ? {} : n).channel = webuzzCommon.userChannel, n.version = webuzzCommon.GAME_VERSION, 
            this.sendWebuzzEvent(e, n));
        },
        sendWebuzzEvent(e, n) {
            if (wx) switch (e) {
              case "首页显示":
                let o = 0, u = 0, t = "";
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18), 
                o = 1);
                let z = wx.getLaunchOptionsSync();
                z.query && z.query.channel && (u = 1), z.referrerInfo && z.referrerInfo.appId && (t = z.referrerInfo.appId), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/login",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        is_new: webuzzCommon.newUser ? 1 : 0,
                        channel: webuzzCommon.userChannel,
                        scene: z.scene,
                        is_channel: u,
                        channel_appid: t,
                        is_random: o,
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("login event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "下一关展示":
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/next",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        level: "level" in n ? n.level : webuzzCommon.userLevel,
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("next event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "Banner广告展示":
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "banner",
                        from: "",
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("banner event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "看完视频":
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "video",
                        from: "",
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("video event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "插屏广告显示":
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "chapin",
                        from: "",
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("chapin event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "格子广告显示":
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/ad",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        type: "custom",
                        from: "",
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("custom event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
                break;

              case "跳转到其他游戏":
                webuzzCommon.userID || (webuzzCommon.userID = Math.random().toString(36).substr(2, 18)), 
                wx.request({
                    url: "https://www.webuzz.com.cn/wxevent/navi",
                    data: {
                        appid: webuzzCommon.APPID,
                        openid: webuzzCommon.userID,
                        channel: webuzzCommon.userChannel,
                        c_appid: n.appid,
                        showname: n.name,
                        type: 1,
                        from: n.from,
                        skin: n.skin,
                        today: 0,
                        history: 0,
                        strategy: webuzzCommon.userStrategy
                    },
                    method: "POST",
                    success: function(e) {
                        webuzzUtils.Defalut.log("navi event done."), webuzzUtils.Defalut.log(e);
                    },
                    fail: function(e) {
                        webuzzUtils.Defalut.log(e);
                    }
                });
            }
        },
        getWxStorageData() {
            if (wx) {
                var e = wx.getStorageSync(webuzzCommon.USER_ID_KEY);
                e && (webuzzCommon.userID = e), webuzzCommon.userID && webuzzCommon.userID.length > 8 ? webuzzCommon.newUser = !1 : webuzzCommon.newUser = !0;
                var n = wx.getStorageSync(webuzzCommon.USER_LEVEL_KEY);
                webuzzCommon.userLevel = n || 0;
                var o = wx.getLaunchOptionsSync();
                if (o.query && o.query.channel) webuzzCommon.userChannel = o.query.channel; else {
                    var u = wx.getStorageSync(webuzzCommon.USER_CHANNEL_KEY);
                    webuzzCommon.userChannel = u || "null";
                }
                wx.setStorageSync(webuzzCommon.USER_CHANNEL_KEY, webuzzCommon.userChannel), webuzzCommon.userScene = o.scene;
            }
        },
        getUserInfo() {
            var e = this;
            webuzzCommon.userID && webuzzCommon.userID.length > 8 ? this.sendEvent("首页显示") : wx.login({
                success(n) {
                    n.code ? wx.request({
                        url: "https://www.webuzz.com.cn/wxevent/openid",
                        data: {
                            code: n.code,
                            appid: webuzzCommon.APPID
                        },
                        method: "POST",
                        success: function(n) {
                            webuzzUtils.Defalut.log("openid done."), webuzzUtils.Defalut.log(n), webuzzCommon.userID = n.data.data, 
                            wx.setStorageSync(webuzzCommon.USER_ID_KEY, webuzzCommon.userID), e.sendEvent("首页显示");
                        },
                        fail: function(n) {
                            webuzzUtils.Defalut.log("登录失败！" + n.errMsg), e.sendEvent("首页显示");
                        }
                    }) : (webuzzUtils.Defalut.log("登录失败！" + n.errMsg), e.sendEvent("首页显示"));
                },
                fail(n) {
                    webuzzUtils.Defalut.log("登录失败！" + n.errMsg), e.sendEvent("首页显示");
                }
            });
        },
        currentDateString() {
            var e = new Date();
            return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate();
        }
    }
};

window.webuzzUtils = webuzzUtils;