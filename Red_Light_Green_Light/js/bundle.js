var __extends =
  (this && this.__extends) ||
  (function () {
    var e =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
      };
    return function (t, a) {
      function i() {
        this.constructor = t;
      }
      e(t, a), (t.prototype = null === a ? Object.create(a) : ((i.prototype = a.prototype), new i()));
    };
  })();

!(function () {
  function e(t, a, i) {
    function n(s, r) {
      if (!a[s]) {
        if (!t[s]) {
          var l = "function" == typeof require && require;
          if (!r && l) return l(s, !0);
          if (o) return o(s, !0);
          var h = new Error("Cannot find module '" + s + "'");
          throw ((h.code = "MODULE_NOT_FOUND"), h);
        }
        var d = (a[s] = {
          exports: {},
        });
        t[s][0].call(
          d.exports,
          function (e) {
            var a = t[s][1][e];
            return n(a || e);
          },
          d,
          d.exports,
          e,
          t,
          a,
          i
        );
      }
      return a[s].exports;
    }
    for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
    return n;
  }
  return e;
})()(
  {
    1: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./view/ad/AdItem"),
          n = e("./view/MainView"),
          o = (function () {
            function e() {}
            return (
              (e.init = function () {
                var e = Laya.ClassUtils.regClass;
                e("view/ad/AdItem.ts", i["default"]), e("view/MainView.ts", n["default"]);
              }),
              (e.width = 750),
              (e.height = 1334),
              (e.scaleMode = "exactfit"),
              (e.screenMode = "none"),
              (e.alignV = "middle"),
              (e.alignH = "center"),
              (e.startScene = "view/Main.scene"),
              (e.sceneRoot = ""),
              (e.debug = !1),
              (e.stat = !1),
              (e.physicsDebug = !1),
              (e.exportSceneToJson = !0),
              e
            );
          })();
        (a["default"] = o), o.init();
      },
      {
        "./view/MainView": 32,
        "./view/ad/AdItem": 38,
      },
    ],
    2: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./GameConfig"),
          n = e("./mgr/GameMgr"),
          o = e("./mgr/UIMgr"),
          s = e("./data/ConstValue"),
          r = e("./mgr/StatisMgr"),
          l = e("./mgr/WxApiMgr"),
          h = e("./data/Define"),
          d = e("./mgr/HttpMgr"),
          c = e("./utils/Tools"),
          u = e("./data/GloableTempData"),
          p = e("./mgr/ShareMgr"),
          f = (function () {
            function e() {
              const userAgent = window.navigator.userAgent;
              if (userAgent.indexOf("iPhone OS 15_1") > -1) {
                //花屏问题
                Config.useWebGL2 = false;
              }
              this.timesteamp = 0;
              // var e = window.Config3D._default;
              // (e.defaultPhysicsMemory = 32),
              Laya3D.init(i["default"].width, i["default"].height);
              Laya.Physics && Laya.Physics.enable(),
                Laya.DebugPanel && Laya.DebugPanel.enable(),
                (Laya.stage.scaleMode = i["default"].scaleMode),
                (Laya.stage.screenMode = i["default"].screenMode),
                (Laya.stage.alignV = i["default"].alignV),
                (Laya.stage.alignH = i["default"].alignH),
                (Laya.URL.exportSceneToJson = i["default"].exportSceneToJson),
                (i["default"].debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                i["default"].physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                i["default"].stat && Laya.Stat.show(),
                (Laya.alertGlobalError = !1),
                Laya.Stat.enable();
              var t = s.CV.PlayerPrefs.getString(s.CV.PlayerPrefs.Key_RegDate);
              t && "" != t
                ? u["default"].Instance.setIsNovice(!1)
                : s.CV.PlayerPrefs.setString(s.CV.PlayerPrefs.Key_RegDate, c["default"].getTodayStr()),
                o["default"].Instance.ShowLoading(!0),
                o["default"].Instance.SetLoadingBarVis(!1),
                (this.timesteamp = Date.now()),
                this.logTimeCost("白屏结束"),
                console.log("url____", s.CV.ConstValue.resUrl + "version_" + s.CV.ConstValue.version + ".json");
              Laya.ResourceVersion.enable(
                // s.CV.ConstValue.resUrl + "version.json",
                s.CV.ConstValue.resUrl + "version_" + s.CV.ConstValue.version + ".json",
                Laya.Handler.create(this, this.onVersionLoaded),
                Laya.ResourceVersion.FILENAME_VERSION
              );
              // this.onVersionLoaded();
              // htmlfs.saveui();
            }
            return (
              (e.prototype.onVersionLoaded = function () {
                this.logTimeCost("版本控制初始化完成"),
                  Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
              }),
              (e.prototype.onConfigLoaded = function () {
                this.logTimeCost("图集映射初始化完成"), this.beginLoad();
              }),
              (e.prototype.beginLoad = function () {
                var e = this;
                console.log("puzzlegame登录完成");
                switch (n["default"].channelID) {
                  case h.KG.Channel.Wechat:
                    l["default"].Instance.Setup(),
                      r["default"].SendEvent(r["default"].Statis.e_start_login, {}),
                      // l["default"].Instance.showLoading("登录中..."),
                      l["default"].Instance.login(function (t) {
                        t && e.login(t);
                      });
                    break;

                  case h.KG.Channel.Develop:
                    n["default"].Instance.Init();
                }
                // YYGGames.init("Red-Light-Green-Light", () => {
                //   // window.WebAudioEngine.musicVolume = 30;
                //   YYGGames.audio.music.volume = 20;
                //   YYGGames.audio.sound.volume = 50;
                //   YYGGames.gameBox.game1.top = 720;
                //   YYGGames.gameBox.game2.top = 520;
                //   YYGGames.gameBox.game1.left = 500;
                //   YYGGames.gameBox.game2.left = 500;
                //   YYGGames.gameBox.game1.visible = false;
                //   YYGGames.gameBox.game2.visible = false;
                //   YYGGames.gameBanner.bottom = 10;
                //   YYGGames.gameBanner.visible = false;
                //   YYGGames.gameBanner.scale(0.83, 1.106);
                //   YYGGames.icon.left = NaN;
                //   YYGGames.icon.right = 25;
                //   YYGGames.icon.top = 15;
                //   YYGGames.icon.scale(0.9, 0.9);
                //   console.log("puzzlegame登录完成");
                //   switch (n["default"].channelID) {
                //     case h.KG.Channel.Wechat:
                //       l["default"].Instance.Setup(),
                //         r["default"].SendEvent(r["default"].Statis.e_start_login, {}),
                //         // l["default"].Instance.showLoading("登录中..."),
                //         l["default"].Instance.login(function (t) {
                //           t && e.login(t);
                //         });
                //       break;

                //     case h.KG.Channel.Develop:
                //       n["default"].Instance.Init();
                //   }
                // });
                //________________
              }),
              (e.prototype.login = function (e) {
                var t = this;
                this.logTimeCost("微信登陆请求code完成");
                var a = l["default"].Instance.sharedData,
                  i = function () {
                    t.logTimeCost("服务器登陆完成"),
                      r["default"].SendEvent(r["default"].Statis.e_end_login, {}),
                      o["default"].Instance.SetLoadingBarVis(!0),
                      l["default"].Instance.hideLoading(),
                      n["default"].Instance.Init(),
                      p["default"].Instance.sendShareInfo();
                  };
                a.from && (r["default"].fromChannel = a.from), d["default"].RpcLogin(e, i);
              }),
              (e.prototype.logTimeCost = function (e) {
                console.log(e + " cost time --\x3e", Date.now() - this.timesteamp), (this.timesteamp = Date.now());
              }),
              e
            );
          })();
        new f();
      },
      {
        "./GameConfig": 1,
        "./data/ConstValue": 4,
        "./data/Define": 5,
        "./data/GloableTempData": 6,
        "./mgr/GameMgr": 12,
        "./mgr/HttpMgr": 13,
        "./mgr/ShareMgr": 15,
        "./mgr/StatisMgr": 17,
        "./mgr/UIMgr": 18,
        "./mgr/WxApiMgr": 20,
        "./utils/Tools": 22,
      },
    ],
    3: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = (function () {
          function e() {
            var e = this,
              t = this;
            t.Awake
              ? Laya.timer.callLater(this, function () {
                  t.Awake(), (e.enabled = !0);
                })
              : Laya.timer.callLater(this, function () {
                  e.enabled = !0;
                });
          }
          return (
            Object.defineProperty(e.prototype, "enabled", {
              get: function () {
                return this._enabled;
              },
              set: function (e) {
                var t = this;
                if ((null == e && (e = !1), this._enabled !== e)) {
                  this._enabled = e;
                  var a = this;
                  this._enabled
                    ? (a.OnEnbale && a.OnEnbale(),
                      !this._started &&
                        a.Start &&
                        Laya.timer.callLater(a, function () {
                          t._enabled && (a.Start(), (t._started = !0));
                        }),
                      a.Update && Laya.timer.frameLoop(1, a, a.Update))
                    : (a.OnDisable && a.OnDisable(), a.Update && Laya.timer.clear(a, a.Update));
                }
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })();
        a["default"] = i;
      },
      {},
    ],
    4: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i,
          n = e("../utils/Tools");
        !(function (e) {
          var t = (function () {
            function e() {}
            return (
              Object.defineProperty(e, "resUrl", {
                get: function () {
                  return Laya.Browser.onMiniGame ? e.cdnPath : Laya.URL.basePath;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e, "cdnPath", {
                get: function () {
                  return e.isDevelop ? "http://192.168.1.24/woodman-wx/" : "https://res.yd.banglianai.com/mtr/";
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.isDevelop = !1),
              (e.version = "1.0.34"),
              (e.httpUrl = e.isDevelop ? "http://192.168.1.209:20070/rpc-http" : "https://buss.yd.banglianai.com/mtr/rpc-http"),
              (e.guideVersion = "1.3"),
              (e.gqCfgPath = String.fromCharCode(103, 117, 97, 110, 113, 105, 97, 46, 106, 115, 111, 110)),
              (e.turnTableRoleId = 4),
              (e.adaptTopOffset = 70),
              (e.appid = "wx5f7d41f93a0b8039"),
              (e.unpack_res = []),
              (e.loadingTips = []),
              (e.sys_open_cfg = {}),
              (e.sys_guide_cfg = {}),
              (e.obstacleAni = {
                hammer: ["dead_hammer_1", "dead_hammer_2"],
                pendulum: ["dead_2", "dead_3"],
                fiveball: ["dead_2", "dead_3"],
                gun: ["dead_2", "dead_3"],
                rollball: ["dead_2", "dead_3"],
                movebox: ["dead_2", "dead_4"],
                fist: ["dead_2", "dead_4", "dead_5"],
                crossbar: ["dead_1", "dead_6"],
                flyball: ["dead_2", "dead_3"],
                roadfall: ["dead_7"],
                fly: ["jump"],
                rollingwood: ["dead_1", "dead_6"],
                stone: ["dead_hammer_1", "dead_hammer_2"],
              }),
              e
            );
          })();
          e.ConstValue = t;
          var a = (function () {
            function e() {}
            return (
              (e.Proto_wxLogin = t.httpUrl + "/account/session/wx/login"),
              (e.Proto_upload_wxInfo = t.httpUrl + "/user/signUp"),
              (e.Proto_getUserData = t.httpUrl + "/user/info"),
              (e.Proto_updateUserData = t.httpUrl + "/user/update/userinfo"),
              (e.Proto_getBox = t.httpUrl + "/user/open/parcel"),
              (e.Proto_world_rank = t.httpUrl + "/user/rank"),
              (e.Proto_share_statis = t.httpUrl + "/user/share/callback"),
              e
            );
          })();
          e.Protocol = a;
          var i = (function () {
            function e() {}
            return (
              (e.setNumber = function (e, t) {
                console.log("setNumber————————————", e, t);
                Laya.LocalStorage.setItem(e, t.toString());
              }),
              (e.getNumber = function (e) {
                var t = Laya.LocalStorage.getItem(e);
                return t ? parseFloat(t) : void 0;
              }),
              (e.getString = function (e) {
                return Laya.LocalStorage.getItem(e);
              }),
              (e.setString = function (e, t) {
                Laya.LocalStorage.setItem(e, t);
              }),
              (e.getBool = function (e, t) {
                void 0 === t && (t = !1);
                var a = Laya.LocalStorage.getItem(e);
                return void 0 === a || null === a || "" === a ? t : "1" == a;
              }),
              (e.setBool = function (e, t) {
                Laya.LocalStorage.setItem(e, t ? "1" : "0");
              }),
              (e.getJson = function (e) {
                var t = Laya.LocalStorage.getItem(e);
                if (!t || "" == t) return null;
                try {
                  return JSON.parse(t);
                } catch (a) {
                  return console.error("local getJson error, key--\x3e", e, a), null;
                }
              }),
              (e.setJson = function (e, t) {
                Laya.LocalStorage.setItem(e, JSON.stringify(t));
              }),
              (e.clearLocal = function () {
                Laya.LocalStorage.removeItem(e.Key_UserInfo), Laya.LocalStorage.removeItem(e.Key_DaySign);
              }),
              (e.isShowDaySign = function () {
                var t = e.getString(e.Key_DaySign);
                if (!t || "" == t) return !0;
                var a = t.split("_");
                return a[0] != n["default"].getTodayStr() ? !0 : !1;
              }),
              (e.Key_Cookie = "token"),
              (e.Key_UserInfo = "userinfo"),
              (e.Key_TurnTable = "turntable"),
              (e.Key_LastGetProduceTime = "lastgetproducetime"),
              (e.Key_OfflineTime = "offline_time"),
              (e.Key_TotalProduce = "total_produce"),
              (e.Key_LastOnlineTime = "last_online_time"),
              (e.Key_NextGetFreeDiamondTime = "next_free_diamond_time"),
              (e.Key_GetFreeDiamondTimes = "free_diamond_times"),
              (e.Key_ProdeceRatio = "produce_ratio"),
              (e.Key_DaySign = "day_sign"),
              (e.Key_RegDate = "reg_date"),
              (e.Key_BGM = "bgmusic"),
              e
            );
          })();
          e.PlayerPrefs = i;
        })((i = a.CV || (a.CV = {})));
      },
      {
        "../utils/Tools": 22,
      },
    ],
    5: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i;
        !(function (e) {
          var t;
          !(function (e) {
            (e[(e.Develop = 1e3)] = "Develop"), (e[(e.Wechat = 1001)] = "Wechat");
          })((t = e.Channel || (e.Channel = {})));
          var a;
          !(function (e) {
            (e[(e.BaseUI = 0)] = "BaseUI"), (e[(e.Dialog = 50)] = "Dialog"), (e[(e.TopUI = 100)] = "TopUI");
          })((a = e.UIDepth || (e.UIDepth = {})));
          var i;
          !(function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.OPEN = 1)] = "OPEN"), (e[(e.CLOSE = 2)] = "CLOSE");
          })((i = e.UITweenType || (e.UITweenType = {})));
          var n;
          !(function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Waitting = 1)] = "Waitting"), (e[(e.Loading = 2)] = "Loading");
          })((n = e.ShowLoadingType || (e.ShowLoadingType = {})));
          var o;
          !(function (e) {
            (e[(e.SUCCESS = 1)] = "SUCCESS"), (e[(e.FAILED = 2)] = "FAILED"), (e[(e.ERROR = 3)] = "ERROR");
          })((o = e.SHARE_RES || (e.SHARE_RES = {})));
          var s;
          !(function (e) {
            (e[(e.ROAD = 1)] = "ROAD"),
              (e[(e.FLY = 2)] = "FLY"),
              (e[(e.GUN = 3)] = "GUN"),
              (e[(e.PENDULUM = 4)] = "PENDULUM"),
              (e[(e.HAMMER = 5)] = "HAMMER");
          })((s = e.Obstacle_Type || (e.Obstacle_Type = {})));
          var r;
          !(function (e) {
            (e[(e.GuanQia = 1)] = "GuanQia"), (e[(e.PW = 2)] = "PW"), (e[(e.TJ = 3)] = "TJ");
          })((r = e.GameModel || (e.GameModel = {})));
          var l;
          !(function (e) {
            (e[(e.IDLE = 1)] = "IDLE"),
              (e[(e.RUN = 2)] = "RUN"),
              (e[(e.STOP = 3)] = "STOP"),
              (e[(e.JUMP = 4)] = "JUMP"),
              (e[(e.LOOKED = 5)] = "LOOKED"),
              (e[(e.HIT = 6)] = "HIT"),
              (e[(e.AI_RANDOM_STOP = 7)] = "AI_RANDOM_STOP"),
              (e[(e.AI_TRRIGGER_STOP = 8)] = "AI_TRRIGGER_STOP"),
              (e[(e.FALL = 12)] = "FALL"),
              (e[(e.FINISHED = 15)] = "FINISHED");
          })((l = e.PlayerState || (e.PlayerState = {})));
          var h;
          !(function (e) {
            (e[(e.NONE = 0)] = "NONE"),
              (e[(e.DIAMOND = 1)] = "DIAMOND"),
              (e[(e.GOLD = 2)] = "GOLD"),
              (e[(e.SKIN = 3)] = "SKIN"),
              (e[(e.ANI = 4)] = "ANI"),
              (e[(e.GIFTBOX = 5)] = "GIFTBOX");
          })((h = e.ItemType || (e.ItemType = {})));
          var d = (function () {
            function e() {}
            return e;
          })();
          e.Item = d;
          var c = (function () {
            function e() {}
            return e;
          })();
          e.UserInfo = c;
          var u = (function () {
            function e() {}
            return e;
          })();
          e.TurnTableInfo = u;
        })((i = a.KG || (a.KG = {})));
      },
      {},
    ],
    6: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = (function () {
          function e() {}
          return (
            Object.defineProperty(e, "Instance", {
              get: function () {
                return null == e._instance && ((e._instance = new e()), e._instance.initData()), e._instance;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.initData = function () {
              (this._isAutoPopDaySign = !1), (this._isNovice = !0);
            }),
            (e.prototype.setIsAutoPopDaySign = function (e) {
              this._isAutoPopDaySign = e;
            }),
            (e.prototype.getIsAutoPopDaySign = function () {
              return this._isAutoPopDaySign;
            }),
            (e.prototype.setIsNovice = function (e) {
              this._isNovice = e;
            }),
            (e.prototype.getIsNovice = function () {
              return this._isNovice;
            }),
            e
          );
        })();
        a["default"] = i;
      },
      {},
    ],
    7: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./../base/Behaviour"),
          n = e("../data/Define"),
          o = e("../mgr/EventCenter"),
          s = e("../mgr/UserDataMgr"),
          r = e("../utils/Tools"),
          l = e("../mgr/GameMgr"),
          h = e("../data/ConstValue"),
          d = e("../mgr/SoundMgr"),
          c = e("../mgr/WxApiMgr"),
          u = e("../mgr/ConfMgr"),
          p = e("../mgr/UIMgr"),
          f = e("../mgr/StatisMgr"),
          g = e("./Player"),
          y = e("../view/ad/AdMgr"),
          _ = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._PLAYER_NUM = 5),
                (t._BOSS_TIMESTEP = 1e3),
                (t._Match_Dis_X = 0.3),
                (t._BOSS_STOP_MAX_T = 1e3),
                (t._BOSS_STOP_MIN_T = 1e3),
                (t._roleAssetsPath = "res/assets/"),
                (t._texturePath = "res/texture/"),
                (t._effEndGame = "res/LayaScene_assets/Conventional/eff_end.lh"),
                (t.objReviveFlags = []),
                (t.objObstacles = []),
                (t.roleAnisResPath = []),
                (t.revivePos = []),
                (t.isStart = !1),
                (t.isPause = !1),
                (t._curSid = 0),
                (t._lastViewTime = 0),
                (t._selfIdx = 0),
                (t._completeNum = 0),
                (t._deadTimes = 0),
                (t._objPlayers = []),
                (t._runningPlayers = []),
                (t._robotsInfo = []),
                (t._roundPlayersInfo = {}),
                (t._showMatchedIdx = 0),
                (t._showMatchedQueue = []),
                (t._hasLevelLoaded = !1),
                (t.changeAlphaObs = ["hammer", "stone"]),
                (t._bossState = -1),
                (t._bossRunTime = 0),
                (t._isShake = !1),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Awake = function () {
                this.scene = Laya.loader.getRes("res/LayaScene_main/Conventional/main.ls");
                var e = (this.objRolePrefab = Laya.loader.getRes("res/LayaScene_assets/Conventional/role_1.lh"));
                (e.lock = !0),
                  Laya.stage.addChild(this.scene),
                  Laya.stage.setChildIndex(this.scene, 0),
                  (this.camera = this.scene.getChildByName("MainCamera"));
                var t = this.scene.getChildByName("Light");
                (t.intensity = 0.45),
                  (t.transform.localRotationEuler = new Laya.Vector3(-90, 180, 0)),
                  (t.shadowDistance = 10),
                  (t.shadowResolution = 1024),
                  (t.shadowPSSMCount = 1),
                  (t.shadowPCFType = 2),
                  (this.light = t),
                  Laya.loader.create([this._effEndGame, "res/sound/daojishi.mp3", "res/LayaScene_assets/Conventional/liwu.lh"]);
                var a = ["DaySignView", "TryAvatarView"];
                for (var i in a) y["default"].Instance.ShowBannerAd(a[i], !1);
              }),
              (t.prototype.Start = function () {
                (l["default"].Instance.gameScene = this),
                  u["default"].Instance.LoadAvaterCfg(),
                  o["default"].Instance.on(o["default"].Event_Oprt, this, this.oprt);
              }),
              (t.prototype.ResetGame = function () {
                this._runningPlayers = [];
                for (var e in this._objPlayers)
                  this._objPlayers[e] &&
                    (this._objPlayers[e].Destroy(), this._objPlayers[e].destroy(), delete this._objPlayers[e], (this._objPlayers[e] = null));
                this.objSelf && (this.objSelf.destroy(), delete this.objSelf, (this.objSelf = null)),
                  this.objLevelRoot && (this.objLevelRoot.destroy(), delete this.objLevelRoot, (this.objLevelRoot = null)),
                  this.effEnd && (this.effEnd.active = !1),
                  this.objGiftBox && (this.objGiftBox.active = !1),
                  (this.light.shadow = !1);
                try {
                  Laya.Resource.destroyUnusedResources();
                } catch (t) {
                  console.warn("destroyUnusedResources: ", t);
                }
                (this.light.shadow = !0),
                  (this._objPlayers = []),
                  (this.revivePos = []),
                  (this.objReviveFlags = []),
                  (this.objObstacles = []),
                  (this._bossState = -1),
                  (this._bossRunTime = 0),
                  (this._followPlayer = null),
                  (this.camera.transform.localRotationEuler = new Laya.Vector3(-23, 180, 0)),
                  (this.camera.transform.position = new Laya.Vector3(0, 2.5, -3.5));
                // d["default"].Instance.StopBGM();
              }),
              (t.prototype.StartGame = function () {
                var e = this;
                this.ResetGame(),
                  (this.isStart = !1),
                  (this.isPause = !1),
                  (this._hasLevelLoaded = !1),
                  (this._completeNum = 0),
                  (this._deadTimes = 0),
                  (this._lastViewTime = Laya.timer.currTimer);
                var t = s["default"].Instance.userInfo;
                (this._curSid = t.sId),
                  f["default"].ServerStart(t.gId, this._curSid),
                  this._matchingUI || (this._matchingUI = p["default"].Instance.ShowMatchingView()),
                  y["default"].Instance.ShowBannerAd("MatchingView"),
                  this.matchPlayers(),
                  p["default"].Instance.ShowGameView(function (t) {
                    (e._gameView = t), (t.visible = !1);
                  });
                var a = this.getNextGuanQiaInfo();
                if (
                  (l["default"].Instance.isOpenTest &&
                    (a = u["default"].Instance.GetGuanQiaInfo(l["default"].Instance.testBigId, l["default"].Instance.testSmallId)),
                  a)
                ) {
                  var i = [];
                  i.push("res/LayaScene_export/Conventional/" + a.respath),
                    i.push("res/texture/" + a.roadtexture),
                    this._lastEnvirName != a.scenepath &&
                      ((this._lastEnvirName = a.scenepath), i.push("res/LayaScene_assets/Conventional/" + a.scenepath)),
                    Laya.loader.create(i, Laya.Handler.create(this, this.gqLoaded, [i]));
                }
              }),
              (t.prototype.Restart = function () {
                (this.isStart = !1),
                  (this.isPause = !1),
                  (this._bossState = -1),
                  (this._bossRunTime = 0),
                  (this._completeNum = 0),
                  (this._deadTimes = 0),
                  (this.objViewer.active = !1),
                  this.setWaringTexture("bg_ld.png"),
                  this.resetFlag(),
                  Laya.timer.clearAll(this.objTraffic),
                  Laya.Tween.clearAll(this.objViewer);
                for (var e in this._objPlayers) this._objPlayers[e] && this._objPlayers[e].ResetData();
                (this.camera.transform.localPositionZ = this.objSelf.transform.localPositionZ - 3.5), this.startRun();
              }),
              (t.prototype.PauseGame = function (e) {
                this.isPause = e;
                for (var t in this._objPlayers) this._objPlayers[t] && this._objPlayers[t].Pause(e);
              }),
              (t.prototype.oprt = function (e) {
                this.isStart &&
                  this.selfPlayer &&
                  (e ? this.selfPlayer.ChangeState(n.KG.PlayerState.RUN) : this.selfPlayer.ChangeState(n.KG.PlayerState.STOP));
              }),
              (t.prototype.matchPlayers = function () {
                var e = this;
                (this._Match_Dis_X = 0.3),
                  (this._BOSS_STOP_MIN_T = 300),
                  (this._BOSS_TIMESTEP = 1e3),
                  750 / 1344 > Laya.Browser.width / Laya.Browser.height && (this._Match_Dis_X = 0.25);
                var t = s["default"].Instance.userInfo,
                  a = 0,
                  i = this._PLAYER_NUM;
                1 == t.gId && 1 == t.sId && ((a = 1), (i = 4), (this._Match_Dis_X = 0.4)), (this._robotsInfo = []);
                for (var n = a; i - 1 > n; n++) {
                  var o = u["default"].Instance.GetRandomNickName();
                  this._robotsInfo.push({
                    nickName: o[0],
                    faceUrl: o[1],
                  });
                }
                (this._roundRobotNum = this._robotsInfo.length),
                  (this._roundPlayersInfo = {}),
                  (this._showMatchedIdx = 0),
                  (this._showMatchedQueue = []),
                  1 == t.sId
                    ? (t.gId < 3 && ((this._BOSS_STOP_MIN_T = 800), (this._BOSS_TIMESTEP = 200)), (this._BOSS_STOP_MAX_T = 2e3))
                    : 2 == t.sId
                    ? (t.gId < 3 && (this._BOSS_STOP_MIN_T = 500), (this._BOSS_STOP_MAX_T = 1200))
                    : 3 == t.sId && (this._BOSS_STOP_MAX_T = 1e3),
                  this._matchingUI.Reset(this._roundRobotNum + 1),
                  (this._selfIdx = r["default"].GetRandomNum(a, i - 1)),
                  console.log("self index --\x3e", this._selfIdx),
                  (this.camera.transform.position = new Laya.Vector3(0, 2.4, -3));
                var l = s["default"].Instance.curUseRoleId,
                  h = s["default"].Instance.tryRoleID;
                -1 != h && ((l = h), (s["default"].Instance.tryRoleID = -1));
                var d = t.nickName ? t.nickName : "Me";
                this._roundPlayersInfo[this._selfIdx] = {
                  nickName: d,
                  faceUrl: t.faceurl,
                  roleId: l,
                };
                console.log("_roundPlayersInfo)________", this._roundPlayersInfo);
                var c = u["default"].Instance.GetRoleInfo(l);
                this.loadRole(c, function (t) {
                  if (e._roundPlayersInfo[e._selfIdx]) {
                    (t.active = !0),
                      (e._roundPlayersInfo[e._selfIdx].obj = t),
                      (t.transform.position = new Laya.Vector3(e._Match_Dis_X * (e._roundRobotNum / 2), 1.35, -0.8)),
                      (t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)); //遊戲中玩家自己的角色的旋轉參數
                    var a = t.getChildByName("role").getComponent(Laya.Animator);
                    a && a.play("run"),
                      e._matchingUI &&
                        (e.objEnvironment && (e.objEnvironment.active = !1), (e._matchingUI.visible = !0), e._matchingUI.UpdateRole(0, d)),
                      Laya.timer.loop(600, e, e.showMatchedPlayers);
                  }
                });
                for (
                  var p = 0,
                    f = function (t) {
                      if (t != g._selfIdx) {
                        var a = u["default"].Instance.GetRandomRole();
                        if (a) {
                          var i = g._robotsInfo[p];
                          p++,
                            (g._roundPlayersInfo[t] = {
                              nickName: i.nickName,
                              faceUrl: i.faceUrl,
                              roleId: a.id,
                            });
                          var n = t;
                          g.loadRole(a, function (t) {
                            e._roundPlayersInfo[n] && ((e._roundPlayersInfo[n].obj = t), e._showMatchedQueue.push(e._roundPlayersInfo[n]));
                          });
                        }
                      }
                    },
                    g = this,
                    n = a;
                  i > n;
                  n++
                )
                  f(n);
              }),
              (t.prototype.loadRole = function (e, t) {
                var a = this;
                Laya.loader.create(
                  this._roleAssetsPath + e.head_mesh,
                  Laya.Handler.create(this, function (i) {
                    var n = Laya.Sprite3D.instantiate(a.objRolePrefab, a.scene);
                    (n.getChildByName("king").active = !1), (n.getChildByName("eye").active = !1), (n.getChildByName("eff_stop").active = !1);
                    var o = n.getChildByName("role").getChildByName("head"),
                      s = n.getChildByName("role").getChildByName("body"),
                      r = n.getChildByName("role").getChildByName("bozi");
                    i &&
                      o &&
                      s &&
                      ((o.meshFilter.sharedMesh = i),
                      (o.skinnedMeshRenderer.receiveShadow = !1),
                      (o.skinnedMeshRenderer.castShadow = !0),
                      (s.skinnedMeshRenderer.receiveShadow = !1),
                      (s.skinnedMeshRenderer.castShadow = !0),
                      Laya.Texture2D.load(
                        a._texturePath + e.main_texture,
                        Laya.Handler.create(a, function (e) {
                          o && (o.skinnedMeshRenderer.material.albedoTexture = e),
                            s && (s.skinnedMeshRenderer.material.albedoTexture = e),
                            r && (r.skinnedMeshRenderer.material.albedoTexture = e);
                        })
                      )),
                      (n.active = !1),
                      t && t(n);
                  })
                );
              }),
              (t.prototype.showMatchedPlayers = function () {
                var e = this._showMatchedQueue.shift();
                if (e && e.obj) {
                  this._showMatchedIdx++,
                    (e.obj.transform.position = new Laya.Vector3((this._roundRobotNum / 2 - this._showMatchedIdx) * this._Match_Dis_X, 1.35, -0.8)),
                    (e.obj.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)), //遊戲中npc的旋轉參數
                    (e.obj.active = !0);
                  var t = e.obj.getChildByName("role").getComponent(Laya.Animator);
                  t && t.play("run"),
                    this._matchingUI && this._matchingUI.UpdateRole(this._showMatchedIdx, e.nickName),
                    this._showMatchedIdx >= this._roundRobotNum &&
                      (Laya.timer.clear(this, this.showMatchedPlayers), Laya.timer.loop(500, this, this.endMatching));
                }
              }),
              (t.prototype.endMatching = function () {
                var e = this;
                if (this._hasLevelLoaded && this._gameView) {
                  this.objLevelRoot && (this.objLevelRoot.active = !0),
                    this.objEnvironment && (this.objEnvironment.active = !0),
                    this._matchingUI && (this._matchingUI.visible = !1),
                    y["default"].Instance.CloseBannerAd("MatchingView");
                  var t = Math.random() < 0.5 ? "bgm_1" : "bgm_2";
                  d["default"].Instance.PlayBGM(t),
                    Laya.timer.clear(this, this.endMatching),
                    this._gameView.Init(this._roundRobotNum + 1),
                    this._gameView.SetPlayerName(this._roundPlayersInfo),
                    this.objObstacles.sort(function (e, t) {
                      return e.transform.localPositionZ - t.transform.localPositionZ;
                    });
                  var a = this.bornPos;
                  this._objPlayers = [];
                  var i = function (t) {
                      var i = n._roundPlayersInfo[t].obj,
                        o = n._gameView.GetNameLabel(t);
                      if (i) {
                        var s = i.addComponent(g["default"]),
                          r = Number(t);
                        if (n._selfIdx == r) {
                          var l = a.z - 3.5;
                          (n.camera.transform.localPositionY = 3),
                            (n.camera.transform.localPositionZ = -8),
                            Laya.Tween.to(
                              n.camera.transform,
                              {
                                localPositionY: 2.5,
                                localPositionZ: l,
                              },
                              1e3
                            ),
                            (n.camera.transform.localPositionX = 0.4 * (r - 2) + a.x),
                            (i.transform.position = new Laya.Vector3(0.4 * (r - 2) + a.x, 0.25, a.z)),
                            (i.transform.localScale = new Laya.Vector3(1, 1, 1)),
                            s.Init(!0, r, n.endPos.z, n.revivePos, n.objObstacles, o),
                            (n.objSelf = i),
                            (n.selfPlayer = s),
                            n.objGiftBox
                              ? ((n.objGiftBox.active = !0),
                                (n.objGiftBox.transform.position = new Laya.Vector3(0.4 * (r - 2) + a.x, 0.35, n.endPos.z)))
                              : Laya.loader.create(
                                  "res/LayaScene_assets/Conventional/liwu.lh",
                                  Laya.Handler.create(n, function (t) {
                                    (e.objGiftBox = t),
                                      e.scene.addChild(t),
                                      (e.objGiftBox.transform.position = new Laya.Vector3(0.4 * (r - 2) + a.x, 0.35, e.endPos.z));
                                  })
                                );
                        } else
                          (i.transform.position = new Laya.Vector3(0.4 * (r - 2) + a.x, 0.25, a.z)),
                            (i.transform.localScale = new Laya.Vector3(1, 1, 1)),
                            s.Init(!1, r, n.endPos.z, n.revivePos, n.objObstacles, o);
                        (s.userInfo = n._roundPlayersInfo[t]), s.AddAniClip(n.roleAnisResPath), n._objPlayers.push(s);
                      }
                    },
                    n = this;
                  for (var o in this._roundPlayersInfo) i(o);
                  f["default"].ServerEndMatch(), this._gameView && (this.isNeedShowGuide() && this._gameView.showGuideMsg("bg_ts2"), this.startRun());
                }
              }),
              (t.prototype.startRun = function () {
                var e = this;
                e.startRun2();
                console.log("kaishidaojishi");
                d["default"].Instance.PlaySound("daojishi"),
                  this._gameView.PlayDaoJiShiTween(function () {
                    (e.isStart = !0), y["default"].Instance.ShowBannerAd("GameView");
                    for (var t in e._objPlayers) e._objPlayers[t] && e._objPlayers[t].StartRun();
                    f["default"].ServerEndRunCD();
                  });
              }),
              (t.prototype.startRun2 = function () {
                var e = this;
                // 反轉角色
              }),
              (t.prototype.gqLoaded = function (e) {
                var t = this,
                  a = e[2];
                if (a && a.url) {
                  var i = Laya.loader.getRes(a.url);
                  i &&
                    (this.objEnvironment && (this.objEnvironment.removeSelf(), this.objEnvironment.destroy()),
                    this.scene.addChild(i),
                    (i.active = !1),
                    (this.objEnvironment = i));
                }
                var n = Laya.loader.getRes(e[0].url);
                if (n) {
                  this.scene.addChild(n),
                    (n.transform.localScale = new Laya.Vector3(1, 1, 1)),
                    (n.transform.position = new Laya.Vector3()),
                    (this.objLevelRoot = n),
                    (this.objLevelRoot.active = !1);
                  var o = n.getChildByName("obstacle");
                  if (((this.objObstacles = []), (this.roleAnisResPath = []), o)) {
                    this.objObstacles = o._children;
                    for (var s in this.objObstacles) {
                      var r = this.getAllChild(this.objObstacles[s]);
                      r.forEach(function (e) {
                        var t = e;
                        t && t.meshRenderer && ((t.meshRenderer.receiveShadow = !1), (t.meshRenderer.castShadow = !0));
                      });
                      var l = this.objObstacles[s].name;
                      h.CV.ConstValue.obstacleAni[l] &&
                        h.CV.ConstValue.obstacleAni[l].forEach(function (e) {
                          t.roleAnisResPath.includes(e) || t.roleAnisResPath.push(e);
                        });
                    }
                    var d = [];
                    for (var s in this.roleAnisResPath) d.push("res/assets/" + this.roleAnisResPath[s] + ".lani");
                    Laya.loader.create(
                      d,
                      Laya.Handler.create(this, function () {
                        return (t._hasLevelLoaded = !0);
                      })
                    );
                  }
                  var c = this.objLevelRoot.getChildByName("bornPos"),
                    u = new Laya.Vector3(0, 0, -0.6);
                  c && (u = c.transform.position),
                    (this.bornPos = u),
                    (this.objTraffic = n.getChildByName("show")),
                    this.setWaringTexture("bg_ld.png"),
                    (this.endPos = n.getChildByName("endPos").transform.position),
                    (this.objViewer = n.getChildByName("boss").getChildByName("view")),
                    (this.bossObj = n.getChildByName("boss")),
                    (this.bossObj.transform.localRotationEulerY = 180),
                    (this.objViewer.active = !1),
                    (this.objViewer.transform.localPositionY = 0.1),
                    this.objViewer.meshRenderer && (this.objViewer.meshRenderer.material.tilingOffsetW = -0.01);
                  var p = n.getChildByName("revive");
                  this.revivePos.push(u.z),
                    p._children.forEach(function (e) {
                      t.revivePos.push(e.transform.position.z), t.objReviveFlags.push(e);
                      var a = e.getComponent(Laya.Animator);
                      a && (a.play("flagAni"), (a.speed = 0));
                    }),
                    this.objReviveFlags.sort(function (e, t) {
                      return e.transform.position.z - t.transform.position.z;
                    }),
                    this.revivePos.sort(function (e, t) {
                      return e - t;
                    });
                  var f = Laya.loader.getRes(e[1].url),
                    g = n.getChildByName("road"),
                    y = this.getAllChild(g);
                  y.forEach(function (e) {
                    var t = e;
                    if (t && t.meshRenderer) {
                      var a = t.meshRenderer.sharedMaterial;
                      ("road_1x" != a.name && "road_2x" != a.name && "road_6x" != a.name && "road_10x" != a.name && "road_16x" != a.name) ||
                        !f ||
                        (a.albedoTexture = f),
                        (t.meshRenderer.receiveShadow = !0),
                        (t.meshRenderer.castShadow = !1);
                    }
                  });
                }
              }),
              (t.prototype.resetFlag = function () {
                for (var e in this.objReviveFlags) {
                  var t = this.objReviveFlags[e].getComponent(Laya.Animator);
                  t && t.getCurrentAnimatorPlayState()._resetPlayState(0);
                }
              }),
              (t.prototype.Update = function () {
                var e = this;
                this.isStart &&
                  !this.isPause &&
                  (this._objPlayers.sort(function (e, t) {
                    return t._Z - e._Z;
                  }),
                  this._gameView.UpdatePlayerRank(this._objPlayers),
                  (this._runningPlayers = []),
                  this._objPlayers.forEach(function (t) {
                    t.SetKingVisiable(!1), t.IsFinished || e._runningPlayers.push(t);
                  }),
                  this._runningPlayers[0] && this._runningPlayers[0].SetKingVisiable(!0),
                  this.bossView(),
                  this._gameView &&
                    this._gameView.UpdateProgress((this.objSelf.transform.localPositionZ - this.bornPos.z) / (this.endPos.z - this.bornPos.z)));
              }),
              (t.prototype.bossWarning = function () {
                var e = this,
                  t = 3,
                  a = function () {
                    var i = "bg_" + (0 == t ? "hd" : t) + ".png";
                    e.setWaringTexture(i, !0), t--, 0 > t && Laya.timer.clear(e.objTraffic, a);
                  };
                a(), Laya.timer.loop(1e3, this.objTraffic, a);
              }),
              (t.prototype.setWaringTexture = function (e, t) {
                if ((void 0 === t && (t = !1), this.objTraffic && this.objTraffic.meshRenderer)) {
                  var a = this.objTraffic.meshRenderer.sharedMaterial;
                  if (
                    (a &&
                      Laya.Texture2D.load(
                        "res/texture/" + e,
                        Laya.Handler.create(this, function (e) {
                          a.texture = e;
                        })
                      ),
                    t)
                  ) {
                    var i = this.objTraffic.getComponent(Laya.Animator);
                    i && (i.getCurrentAnimatorPlayState()._resetPlayState(0), i.play("showboard"));
                  }
                }
              }),
              (t.prototype.UpdateCamera = function () {
                if (this.isStart) {
                  var e = (this.camera.transform.localPositionZ = this.objSelf.transform.localPositionZ - 3.5);
                  for (var t in this.objObstacles) {
                    var a = this.objObstacles[t];
                    if (a && -1 != this.changeAlphaObs.indexOf(a.name)) {
                      var i = a.transform.position.z,
                        n = Math.abs(i - e);
                      this.setObjColor(a, 3 > n ? n / 3 : 1);
                    }
                  }
                }
              }),
              (t.prototype.Arrived = function (e) {
                this._completeNum++, this._completeNum > 5 && (this._completeNum = 5);
                var t = this._completeNum <= 3;
                return this.isStart && e == this._selfIdx && this.gameEnd(t), t;
              }),
              (t.prototype.RunOverRevivePoint = function (e) {
                if (this.objReviveFlags[e]) {
                  var t = this.objReviveFlags[e].getComponent(Laya.Animator);
                  t && (t.play("flagAni"), (t.speed = 1));
                }
              }),
              (t.prototype.Revive = function (e) {
                var t = this;
                this._deadTimes++;
                var a = 150 * (this.objSelf.transform.localPositionZ - e);
                Laya.Tween.to(
                  this.camera.transform,
                  {
                    localPositionZ: e - 3.5,
                  },
                  a,
                  Laya.Ease.linearIn,
                  Laya.Handler.create(this, function () {
                    // t._deadTimes >= 3 && (t._gameView.showJump(), (t._deadTimes = 0));//在每关中 每失败三次展示跳关提示页
                  })
                );
              }),
              (t.prototype.BeenHit = function () {
                l["default"].Instance.isVibrateClose || c["default"].Instance.vibrateScreen(!0);
              }),
              (t.prototype.setObjColor = function (e, t) {
                var a = this.getAllChild(e);
                for (var i in a) {
                  var n = a[i];
                  if (n && n.meshRenderer && n.meshRenderer.material) {
                    var o = n.meshRenderer.material;
                    o.albedoColorA != t && (o.albedoColorA = t);
                  }
                }
              }),
              (t.prototype.gameEnd = function (e) {
                var t = this;
                (this.isStart = !1),
                  (this._bossState = -1),
                  (this._bossRunTime = 0),
                  (this.bossObj.active = !1),
                  (this._gameView.visible = !1),
                  f["default"].ServerEnd(e),
                  y["default"].Instance.CloseBannerAd("GameView");
                var a = s["default"].Instance.IsOpenBannerTouch(),
                  i = this._completeNum;
                var n = 30 - 5 * i;
                window.end_game_conins_visible = false;

                if (e) {
                  window.end_game_conins = n;
                  window.end_game_conins_visible = true;
                  console.log("No " + i + "", n), s["default"].Instance.CompleteGuanQia(!0, n);
                  var o = this.getNextGuanQiaInfo();
                  if (o) {
                    var r = "res/LayaScene_export/Conventional/" + o.respath;
                    Laya.loader.create(r);
                  }
                  d["default"].Instance.PlaySound("win"),
                    this.effEnd
                      ? ((this.effEnd.active = !0), (this.effEnd.transform.position = this.objSelf.transform.position))
                      : Laya.loader.create(
                          this._effEndGame,
                          Laya.Handler.create(this, function (e) {
                            (t.effEnd = e), t.scene.addChild(e), (t.effEnd.transform.position = t.objSelf.transform.position);
                          })
                        );
                } else s["default"].Instance.CompleteGuanQia(!1, n), d["default"].Instance.PlaySound("lose_1");
                var l = function () {
                  p["default"].Instance.ShowGiftView(a, function () {
                    var a = p["default"].Instance.ShowEndGameView();
                    a.ShowEnd(i, e, t._curSid);
                  });
                };
                this.moveCamera(new Laya.Vector3(this.objSelf.transform.localPositionX, 0, this.endPos.z), function () {
                  //到达终点移动摄像机
                  return Laya.timer.once(2500, t, l); //2.5秒后展示结算页
                });
                var h = this.objSelf.transform.position;
                this.objGiftBox && (this.objGiftBox.transform.position = new Laya.Vector3(h.x, h.y + 0.5, h.z));
              }),
              (t.prototype.bossView = function () {
                if (this.objViewer)
                  if (((this._bossRunTime += Laya.timer.delta), -1 == this._bossState))
                    this._bossRunTime > this._BOSS_TIMESTEP && (this.bossWarning(), (this._bossState = 0), (this._bossRunTime = 0));
                  else if (0 == this._bossState)
                    this._bossRunTime > 3e3 &&
                      (this.isNeedShowGuide() && (this._gameView.showGuideMsg("bg_ts1"), h.CV.PlayerPrefs.setBool("has_show_guide", !0)),
                      (this._bossState = 1),
                      (this._bossRunTime = 0),
                      this.robotStop());
                  else if (1 == this._bossState)
                    (this.bossObj.transform.localRotationEulerY = 180),
                      (this.objViewer.transform.localScaleX = 10),
                      (this.objViewer.active = !0),
                      Laya.Tween.to(
                        this.bossObj.transform,
                        {
                          localRotationEulerY: 0,
                        },
                        300
                      ),
                      (this._bossState = 2);
                  else if (2 == this._bossState) {
                    if (this._bossRunTime > 900 && this._bossRunTime < 1700)
                      for (var e in this._objPlayers) {
                        var t = this._objPlayers[e];
                        t && t.IsRunning && (t.ChangeState(n.KG.PlayerState.LOOKED), t.Index == this._selfIdx && this.setWaringTexture("bg_ndl.png"));
                      }
                    this._bossRunTime > 1700 &&
                      ((this._bossState = 3),
                      this._objPlayers.forEach(function (e) {
                        return (e.isBossTime = !1);
                      }));
                  } else if (3 == this._bossState) {
                    this._runningPlayers[0]
                      ? ((this._followPlayer = this._runningPlayers[0]),
                        (this._followPlayer.isBossTime = !0),
                        this._runningPlayers[1] && (this._runningPlayers[1].isBossTime = !0))
                      : ((this._bossState = -1), (this._bossRunTime = 0), (this._followPlayer = null));
                    var a = this.objSelf.transform.localPositionZ,
                      i = 8 >= a ? 0.25 : ((a - 8) / 2) * 0.03 + 0.25;
                    Laya.Tween.to(
                      this.objViewer.transform,
                      {
                        localScaleX: i,
                      },
                      300
                    );
                    var o = this.bossObj.transform.localRotationEulerY;
                    this.bossObj.transform.lookAt(this._followPlayer.obj.transform.position, Laya.Vector3._Up);
                    var s = this.bossObj.transform.localRotationEulerY;
                    (this.bossObj.transform.localRotationEulerY = o),
                      Laya.Tween.to(
                        this.bossObj.transform,
                        {
                          localRotationEulerY: s,
                        },
                        300
                      ),
                      (this._bossState = 4);
                  } else if (4 == this._bossState) {
                    if (
                      (this._bossRunTime > 2e3 && this.lookAtTarget(),
                      this._bossRunTime > 2e3 &&
                        this._bossRunTime < 2500 &&
                        this._followPlayer &&
                        this._followPlayer.IsRunning &&
                        (this._followPlayer.ChangeState(n.KG.PlayerState.LOOKED),
                        this._followPlayer.Index == this._selfIdx && this.setWaringTexture("bg_ndl.png")),
                      this._bossRunTime > 2500)
                    ) {
                      if (((this._followPlayer.isBossTime = !1), this._runningPlayers.length < 2))
                        return (
                          (this._bossState = 6),
                          (this._bossRunTime = 3e3),
                          void Laya.Tween.to(
                            this.bossObj.transform,
                            {
                              localRotationEulerY: 180,
                            },
                            300
                          )
                        );
                      this._runningPlayers[0] != this._followPlayer
                        ? (this._followPlayer = this._runningPlayers[0])
                        : ((this._followPlayer = this._runningPlayers[1]), (this._followPlayer.isBossTime = !0));
                      var o = this.bossObj.transform.localRotationEulerY;
                      this.bossObj.transform.lookAt(this._followPlayer.obj.transform.position, Laya.Vector3._Up);
                      var s = this.bossObj.transform.localRotationEulerY;
                      (this.bossObj.transform.localRotationEulerY = o),
                        Laya.Tween.to(
                          this.bossObj.transform,
                          {
                            localRotationEulerY: s,
                          },
                          200
                        ),
                        (this._bossState = 5);
                    }
                  } else
                    5 == this._bossState
                      ? (this._bossRunTime > 2700 && this.lookAtTarget(),
                        this._bossRunTime > 2700 &&
                          this._followPlayer &&
                          this._followPlayer.IsRunning &&
                          (this._followPlayer.ChangeState(n.KG.PlayerState.LOOKED),
                          this._followPlayer.Index == this._selfIdx && this.setWaringTexture("bg_ndl.png")),
                        this._bossRunTime > 3200 &&
                          (this._objPlayers.forEach(function (e) {
                            return (e.isBossTime = !1);
                          }),
                          (this._bossState = 6),
                          Laya.Tween.to(
                            this.bossObj.transform,
                            {
                              localRotationEulerY: 180,
                            },
                            300
                          )))
                      : 6 == this._bossState &&
                        this._bossRunTime > 3500 &&
                        ((this.objViewer.active = !1), (this._bossState = -1), (this._bossRunTime = 0), this.setWaringTexture("bg_ld.png"));
              }),
              (t.prototype.lookAtTarget = function () {
                this._followPlayer.obj && this.bossObj.transform.lookAt(this._followPlayer.obj.transform.position, Laya.Vector3._Up);
              }),
              (t.prototype.robotStop = function () {
                var e = function (e) {
                    var a = t._objPlayers[e];
                    if (a && ((a.isBossTime = !0), a.IsRunning && a.Index != t._selfIdx)) {
                      var i = r["default"].GetRandomNum(t._BOSS_STOP_MIN_T, t._BOSS_STOP_MAX_T);
                      Laya.timer.once(i, a, function () {
                        a.ChangeState(n.KG.PlayerState.AI_RANDOM_STOP);
                      });
                    }
                  },
                  t = this;
                for (var a in this._objPlayers) e(a);
              }),
              (t.prototype.moveCamera = function (e, t) {
                var a = this,
                  i = this.camera.transform,
                  n = 0,
                  o = 0.08,
                  s = 180,
                  r = Math.PI / o,
                  l = function () {
                    if (((n += o), (s -= 180 / r), n > Math.PI))
                      return (
                        Laya.timer.clear(a, l),
                        (i.localRotationEulerY = 0),
                        (i.localPositionX = e.x),
                        void Laya.Tween.to(
                          i,
                          {
                            localPositionY: 1.2,
                            localPositionZ: e.z + 1.8,
                          },
                          800,
                          Laya.Ease.circOut,
                          Laya.Handler.create(a, function () {
                            t && t();
                          })
                        )
                      );
                    var h = 3 * Math.sin(n) + e.x,
                      d = 3 * Math.cos(Math.PI - n) + e.z;
                    (i.localPositionX = h), (i.localPositionZ = d), (i.localRotationEulerY = s);
                  };
                Laya.timer.loop(20, this, l);
              }),
              (t.prototype.getRank = function () {
                var e = [];
                return (
                  this._runningPlayers.forEach(function (t) {
                    return e.push(t.Index);
                  }),
                  e
                );
              }),
              (t.prototype.Shake = function (e) {
                function t(n, o, s) {
                  void 0 === n && (n = null),
                    void 0 === o && (o = 1),
                    void 0 === s && (s = 0),
                    0.6 > a ? ((a += 0.2), (i.z -= 0.2)) : (i.z += 0.2),
                    i.z > -15
                      ? (e.clearTimer(this, t), (this._isShake = !1), (e.transform.position = new Laya.Vector3(0, 3.5, -15)))
                      : (e.transform.position = i);
                }
                if (!this._isShake) {
                  this._isShake = !0;
                  var a = 0,
                    i = new Laya.Vector3(0, 3.5, -15);
                  e.timerLoop(1, this, t);
                }
              }),
              (t.prototype.getAllChild = function (e) {
                var t = [],
                  a = [];
                for (a.push(e); a.length > 0; ) {
                  var i = a.shift();
                  t.push(i),
                    i._children &&
                      i._children.forEach(function (e) {
                        return a.push(e);
                      });
                }
                return t;
              }),
              (t.prototype.getNextGuanQiaInfo = function (e) {
                void 0 === e && (e = !1);
                var t = s["default"].Instance.GetNextGuanQiaIDs(e);
                return u["default"].Instance.GetGuanQiaInfo(t[0], t[1]);
              }),
              (t.prototype.isNeedShowGuide = function () {
                var e = h.CV.PlayerPrefs.getBool("has_show_guide", !1);
                return !e && 1 == s["default"].Instance.userInfo.gId && 1 == s["default"].Instance.userInfo.sId;
              }),
              (t.prototype.isNeedShowGuide3 = function () {
                var e = h.CV.PlayerPrefs.getBool("has_show_guide_3", !1);
                return !e && 1 == s["default"].Instance.userInfo.gId && 3 == s["default"].Instance.userInfo.sId;
              }),
              t
            );
          })(i["default"]);
        a["default"] = _;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../mgr/ConfMgr": 10,
        "../mgr/EventCenter": 11,
        "../mgr/GameMgr": 12,
        "../mgr/SoundMgr": 16,
        "../mgr/StatisMgr": 17,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../mgr/WxApiMgr": 20,
        "../utils/Tools": 22,
        "../view/ad/AdMgr": 40,
        "./../base/Behaviour": 3,
        "./Player": 8,
      },
    ],
    8: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../data/Define"),
          n = e("./PlayerTrigger"),
          o = e("../utils/Tools"),
          s = e("../mgr/GameMgr"),
          r = e("../data/ConstValue"),
          l = e("../mgr/UserDataMgr"),
          h = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t._MOVE_SPEED = 0.035),
                (t._bornPos = []),
                (t._curBornIdx = 0),
                (t._obstacleObjs = []),
                (t._transformSpeed = new Laya.Vector3(0, 0, 0.02)),
                (t._outPos = new Laya.Vector3()),
                (t._isStart = !1),
                (t._isPause = !1),
                (t._isMoving = !1),
                (t._waittingTime = 0),
                (t._lastStepTime = 0),
                (t._aiType = 0),
                (t._state = i.KG.PlayerState.IDLE),
                (t._nextState = i.KG.PlayerState.IDLE),
                (t._isBossTime = !1),
                (t._gameScene = s["default"].Instance.gameScene),
                (t._triggerStop = !1),
                (t._lastFrame = 0),
                (t.stopObstacle = [
                  "hammer",
                  "pendulum",
                  "fiveball",
                  "gun",
                  "rollball",
                  "movebox",
                  "fist",
                  "crossbar",
                  "flyball",
                  "roadfall",
                  "rollingwood",
                  "stone",
                ]),
                (t.obstacleInfo = {
                  hammer: {
                    sizeZ: 0.7,
                    dura: 800,
                  },
                  pendulum: {
                    sizeZ: 0.3,
                    dura: 1300,
                  },
                  fiveball: {
                    sizeZ: 0.3,
                    dura: 800,
                  },
                  gun: {
                    sizeZ: 0.3,
                    dura: 800,
                  },
                  movebox: {
                    sizeZ: 0.4,
                    dura: 1300,
                  },
                  fist: {
                    sizeZ: 0.5,
                    dura: 800,
                  },
                  rollingwood: {
                    sizeZ: 0.3,
                    dura: 300,
                  },
                  crossbar: {
                    sizeZ: 0.9,
                    dura: 800,
                  },
                }),
                t
              );
            }
            return (
              __extends(t, e),
              Object.defineProperty(t.prototype, "Index", {
                get: function () {
                  return this._index;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "mState", {
                get: function () {
                  return this._state;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isBossTime", {
                set: function (e) {
                  this._isBossTime = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "IsRunning", {
                get: function () {
                  return this._isMoving;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "IsFinished", {
                get: function () {
                  return this._state == i.KG.PlayerState.FINISHED;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "obj", {
                get: function () {
                  return this.owner;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "_Z", {
                get: function () {
                  return this.obj.transform.position.z;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.onAwake = function () {}),
              (t.prototype.onEnable = function () {}),
              (t.prototype.Init = function (e, t, a, s, r, h, d) {
                var c = this;
                void 0 === d && (d = null),
                  (this._localPositionX = this.obj.transform.localPositionX),
                  (this._bornPos = s),
                  (this._curBornIdx = 0),
                  (this._lastStopObposIdx = -1),
                  (this._endPosZ = a),
                  (this._obstacleObjs = r),
                  (this._nameLab = h),
                  (this._isself = e),
                  (this._index = t),
                  (this._state = i.KG.PlayerState.IDLE),
                  (this._isPause = !1),
                  (this._isStart = !1),
                  (this._curSpeed = this._MOVE_SPEED);
                this._nameLab.pos(this._outPos.x / Laya.stage.clientScaleX, this._outPos.y / Laya.stage.clientScaleY - t); //初始化名字pos

                var u = o["default"].GetRandomNum(0, 100);
                15 > u ? (this._aiType = 1) : u >= 15 && 45 > u ? (this._aiType = 2) : u >= 45 && 70 > u ? (this._aiType = 3) : (this._aiType = 4),
                  (this.camera = this.obj.parent.getChildByName("MainCamera")),
                  (this._objEye = this.owner.getChildByName("eye")),
                  this._objEye && (this._objEye.active = !1),
                  (this._objKing = this.owner.getChildByName("king")),
                  this.SetKingVisiable(!1),
                  (this._effStop = this.owner.getChildByName("eff_stop")),
                  (this._ani = this.owner.getChildByName("role").getComponent(Laya.Animator)),
                  this._rigid && this._rigid.destroy(),
                  (this._rigid = this.owner.addComponent(Laya.Rigidbody3D));
                var p = new Laya.BoxColliderShape(0.2, 0.4, 0.2);
                (p.localOffset = new Laya.Vector3(0, 0.2, 0)),
                  (this._rigid.colliderShape = p),
                  (this._rigid.friction = 0.3),
                  (this._rigid.angularDamping = 1),
                  (this._rigid.mass = 50),
                  (this._rigid.gravity = new Laya.Vector3(0, -10, 0)),
                  (this._rigid.collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1),
                  (this._oriPos = this.obj.transform.position.clone());
                var f = this.obj.transform.localPositionX,
                  g = new Laya.Vector3(0, 0, 0);
                if (
                  ((this._rigid.physicalUpdate = function () {
                    c.obj && ((c.obj.transform.localPositionX = f), (c.obj.transform.localRotationEuler = g));
                  }),
                  this.playAni("stand"),
                  e)
                )
                  this._winAni = "win_" + l["default"].Instance.curUseAniId;
                else {
                  (this._triggerObj = this.obj.addChild(new Laya.Sprite3D())),
                    (this._triggerObj.transform.localPosition = new Laya.Vector3(0, 0.35, 0.6));
                  var y = this._triggerObj.addComponent(Laya.Rigidbody3D),
                    _ = new Laya.BoxColliderShape(0.2, 0.6, 0.6);
                  (y.colliderShape = _), (y.isKinematic = !0), (y.isTrigger = !0), this._triggerObj.addComponent(n["default"]).Init(this);
                  var m = o["default"].GetRandomNum(1, 6);
                  (this._winAni = "win_" + m), l["default"].Instance.userInfo.gId < 3 && (this._MOVE_SPEED = 0.03);
                }
                this.obj.callLater(function () {
                  return c.AddAniClip([c._winAni, "lose"], !0);
                });
              }),
              (t.prototype.AddAniClip = function (e, t) {
                var a = this;
                if ((void 0 === t && (t = !1), this._ani)) {
                  var i = function (i) {
                    var n = "res/assets/" + e[i] + ".lani",
                      o = Laya.loader.getRes(n),
                      s = function (n) {
                        if (n) {
                          var o = new Laya.AnimatorState();
                          (o.name = e[i]), (o.clip = n), (o.clip.islooping = t), a._ani.addState(o);
                        }
                      };
                    o
                      ? s(o)
                      : Laya.loader.create(
                          n,
                          Laya.Handler.create(n, function (e) {
                            return s(e);
                          })
                        );
                  };
                  for (var n in e) i(n);
                }
              }),
              (t.prototype.Destroy = function () {
                (this._rigid.physicalUpdate = null), this.obj.destroy();
              }),
              (t.prototype.ResetData = function () {
                (this._lastStepTime = 0),
                  (this._isPause = !1),
                  (this._isStart = !1),
                  (this.obj.transform.position = this._oriPos),
                  (this._state = i.KG.PlayerState.IDLE),
                  (this._nextState = i.KG.PlayerState.IDLE),
                  this.ChangeState(i.KG.PlayerState.IDLE),
                  this.SetKingVisiable(!1),
                  Laya.timer.clearAll(this),
                  Laya.Tween.clearAll(this.obj),
                  (this._curBornIdx = 0),
                  (this._lastStopObposIdx = -1),
                  this.playAni("stand", 0, 2);
              }),
              (t.prototype.StartRun = function () {
                var e = this;
                if (this._isself) this._isStart = !0;
                else {
                  var t = o["default"].GetRandomNum(600, 1300);
                  Laya.timer.once(t, this, function () {
                    (e._isStart = !0), e.ChangeState(i.KG.PlayerState.RUN);
                  });
                }
              }),
              (t.prototype.ChangeState = function (e) {
                if (!this.IsFinished && ((this._nextState = e), this._state != i.KG.PlayerState.JUMP || e != i.KG.PlayerState.STOP)) {
                  if (this._isself) {
                    if (e == i.KG.PlayerState.RUN && this._state != i.KG.PlayerState.IDLE && this._state != i.KG.PlayerState.STOP) return;
                    if (e == i.KG.PlayerState.STOP && this._state != i.KG.PlayerState.RUN) return;
                  }
                  this.executeState();
                }
              }),
              (t.prototype.executeState = function () {
                var e = this;
                if (!this._isPause && this._state != this._nextState)
                  switch (((this._state = this._nextState), (this._isMoving = this._state == i.KG.PlayerState.RUN), this._nextState)) {
                    case i.KG.PlayerState.IDLE:
                      this.playAni("stand");
                      break;

                    case i.KG.PlayerState.RUN:
                      this.playAni("run", 1.3), this.setTriggerValid(!0), this._nameLab && !this._nameLab.visible && (this._nameLab.visible = !0);
                      break;

                    case i.KG.PlayerState.STOP:
                      this.pauseAni(), this._effStop && ((this._effStop.active = !1), (this._effStop.active = !0));
                      break;

                    case i.KG.PlayerState.JUMP:
                      if (this._rigid) {
                        !this._jumpObj && (this._jumpObj = new Laya.Sprite3D()),
                          Laya.timer.clearAll(this._jumpObj),
                          this._transformSpeed.setValue(0, 3.2, 0),
                          (this._rigid.linearVelocity = this._transformSpeed),
                          this.playAni("jump");
                        var t = this._ani.getCurrentAnimatorPlayState()._duration,
                          a = this.obj.transform.localPositionZ + 1.2;
                        Laya.Tween.to(
                          this.obj.transform,
                          {
                            localPositionZ: a,
                          },
                          1e3 * t
                        ),
                          Laya.timer.once(1e3 * t, this._jumpObj, function () {
                            e._transformSpeed.setValue(0, -2, 0),
                              (e._rigid.linearVelocity = e._transformSpeed),
                              (t = 600 * e._ani.getCurrentAnimatorPlayState()._duration),
                              e._isself && (t /= 1.2),
                              Laya.timer.once(t, e._jumpObj, function () {
                                e.playAni("run"),
                                  e._transformSpeed.setValue(0, 0, 0),
                                  (e._rigid.linearVelocity = e._transformSpeed),
                                  (e._state = i.KG.PlayerState.IDLE),
                                  e._nextState == i.KG.PlayerState.JUMP && (e._nextState = i.KG.PlayerState.RUN),
                                  e.executeState();
                              });
                          });
                      }
                      break;

                    case i.KG.PlayerState.AI_RANDOM_STOP:
                      this.pauseAni(), (this._lastStepTime = Laya.timer.currTimer);
                      break;

                    case i.KG.PlayerState.AI_TRRIGGER_STOP:
                      this.pauseAni();
                      break;

                    case i.KG.PlayerState.LOOKED:
                      if ((this.pauseAni(), this.setTriggerValid(!1), this._objEye)) {
                        (this._objEye.active = !0), (this._objEye.transform.localScaleX = 0.1), (this._objEye.transform.localScaleY = 0.05);
                        var n = this._objEye.meshRenderer.material;
                        (n.albedoColorA = 0),
                          Laya.Tween.to(
                            n,
                            {
                              albedoColorA: 1,
                            },
                            500
                          ),
                          Laya.Tween.to(
                            this._objEye.transform,
                            {
                              localScaleX: 0.3,
                              localScaleY: 0.15,
                            },
                            400
                          );
                      }
                      this._nameLab && (this._nameLab.visible = !1),
                        (this._lastStepTime = Laya.timer.currTimer),
                        (this._waittingTime = 1800),
                        Laya.timer.once(1500, this, this.revive);
                      break;

                    case i.KG.PlayerState.HIT:
                      Laya.timer.clearAll(this._jumpObj),
                        Laya.Tween.clearAll(this.obj.transform),
                        this.setTriggerValid(!1),
                        (this._lastStepTime = Laya.timer.currTimer),
                        (this._waittingTime = 1800),
                        Laya.timer.once(1500, this, this.revive);
                      break;

                    case i.KG.PlayerState.FALL:
                      this.setTriggerValid(!1),
                        (this._lastStepTime = Laya.timer.currTimer),
                        (this._waittingTime = 1800),
                        Laya.timer.once(1500, this, this.revive);
                      break;

                    case i.KG.PlayerState.FINISHED:
                      (this._isStart = !1),
                        console.log("player " + this._index + " finished "),
                        this.SetKingVisiable(!1),
                        this._nameLab && (this._nameLab.visible = !1);
                  }
              }),
              (t.prototype.Pause = function (e) {
                (this._isPause = e),
                  this._isself ? (e ? this.pauseAni(!0) : this.pauseAni(!this._isMoving)) : ((this._isMoving = !e), this.pauseAni(e));
              }),
              (t.prototype.revive = function () {
                Laya.timer.clear(this, this.revive),
                  this._rigid && (this._rigid.clearForces(), (this._rigid.angularVelocity = new Laya.Vector3(0, 0, 0))),
                  (this._state = i.KG.PlayerState.IDLE),
                  (this._lastStopObposIdx = -1);
                var e = this._bornPos[this._curBornIdx]; //z轴的长度数组   记录的起点和每个存档点  -0.6，5,10,15
                if (
                  (this._objEye && (this._objEye.active = !1),
                  this._nameLab && (this._nameLab.visible = !0),
                  this.playAni("run", 0, 2),
                  this._isself && this._gameScene.Revive(e),
                  (this.obj.transform.localPositionZ = e),
                  (this.obj.transform.localPositionY = 0.25),
                  (this.obj.transform.localPositionX = this._localPositionX),
                  // console.log("重新开始之————————————————————————————", e, this.obj.transform, this._localPositionX),
                  this._fallRoads)
                ) {
                  for (var t in this._fallRoads) {
                    var a = this._fallRoads[t];
                    a && a.obj && (Laya.timer.clearAll(a.obj), Laya.Tween.clearTween(a.obj.transform), (a.obj.transform.localPositionY = a.y));
                  }
                  this._fallRoads = null;
                }
              }),
              (t.prototype.onCollisionEnter = function (e) {
                if (e.other && e.other.owner) {
                  var t = e.other.owner.name;
                  if ("roadfall" == t) {
                    this._fallRoads || (this._fallRoads = {});
                    var a = e.other.owner;
                    this._fallRoads[a.id] ||
                      ((this._fallRoads[a.id] = {
                        y: a.transform.localPositionY,
                        obj: a,
                      }),
                      Laya.timer.once(300, a, function () {
                        Laya.Tween.to(
                          a.transform,
                          {
                            localPositionY: -6,
                          },
                          3e3
                        );
                      }));
                  } else
                    -1 != this.stopObstacle.indexOf(t) &&
                      this._nextState != i.KG.PlayerState.HIT &&
                      (this._isself && this._gameScene.BeenHit(), this.ChangeState(i.KG.PlayerState.HIT), this.playBeenHitAni(t));
                }
              }),
              (t.prototype.onTriggerEnter = function (e) {
                if (e.owner) {
                  var t = e.owner.name;
                  "fly" == t && this.ChangeState(i.KG.PlayerState.JUMP);
                }
              }),
              (t.prototype.setTriggerValid = function (e) {
                this._triggerObj && (this._triggerObj.active = e);
              }),
              (t.prototype.AiTriggerStop = function () {
                var e = Math.random(),
                  t = 0.3 > e;
                3 == this._aiType ? (t = e > 0.6) : 4 == this._aiType && (t = !0),
                  this._nextState == i.KG.PlayerState.RUN && t && ((this._triggerStop = !0), this.ChangeState(i.KG.PlayerState.AI_TRRIGGER_STOP));
              }),
              (t.prototype.AiTriggerRun = function () {
                this._triggerStop &&
                  this._nextState != i.KG.PlayerState.RUN &&
                  ((this._triggerStop = !1), (this._lastStepTime = Laya.timer.currTimer), (this._waittingTime = 200));
              }),
              (t.prototype.SetKingVisiable = function (e) {
                this._objKing && (this._objKing.active = e);
              }),
              (t.prototype.onUpdate = function () {
                if (this._isStart) {
                  if (
                    (this._isself ||
                      this._isPause ||
                      this.IsFinished ||
                      this._isMoving ||
                      (Laya.timer.currTimer - this._lastStepTime > this._waittingTime &&
                        (!this._isBossTime || l["default"].Instance.userInfo.gId < 3) &&
                        ((this._state = i.KG.PlayerState.IDLE), this.ChangeState(i.KG.PlayerState.RUN))),
                    this.obj.transform.localPositionY < -1 && this.ChangeState(i.KG.PlayerState.FALL),
                    (this._isMoving || this._state == i.KG.PlayerState.JUMP) &&
                      (this._isself && !this.IsFinished && this._gameScene.UpdateCamera(), this._nameLab && this.camera))
                  ) {
                    this.camera.viewport.project(this.obj.transform.position, this.camera.projectionViewMatrix, this._outPos);
                    var e = Math.abs(this._Z - this.camera.transform.localPositionZ),
                      t = 150 - 10 * e;
                    t = o["default"].Clamp(t, 20, 150);
                    var a = 1 - e / 15;
                    (a = o["default"].Clamp(a, 0.3, 1)),
                      this._nameLab.pos(this._outPos.x / Laya.stage.clientScaleX, this._outPos.y / Laya.stage.clientScaleY - t),
                      this._nameLab.scale(a, a);
                  }
                  if (
                    this._isMoving &&
                    !this._isPause &&
                    (this.setSpeed(),
                    this._transformSpeed.setValue(
                      this.obj.transform.position.x,
                      this.obj.transform.position.y,
                      this.obj.transform.position.z + this._curSpeed
                    ),
                    (this.obj.transform.position = this._transformSpeed),
                    this.calculateRevivePos(),
                    this._Z >= this._endPosZ &&
                      (this.ChangeState(i.KG.PlayerState.FINISHED),
                      this._gameScene.Arrived(this._index) ? this.playAni(this._winAni) : this.playAni("lose")),
                    !this._isself)
                  )
                    for (var n = 0; n < this._obstacleObjs.length; n++) {
                      var s = this._obstacleObjs[n];
                      if (s)
                        if ("roadfall" == s.name || "fly" == s.name);
                        else {
                          var r = this.obstacleInfo[s.name],
                            h = r ? r.sizeZ : 0.4,
                            d = r ? r.dura : 1200;
                          if (
                            ((this._waittingTime = d),
                            this._Z >= s.transform.localPositionZ - h && this._Z < s.transform.localPositionZ - h / 2 && this._lastStopObposIdx != n)
                          ) {
                            this._lastStopObposIdx = n;
                            var c = Math.random(),
                              u = c > 0.6;
                            1 == this._aiType ? (u = 0.2 > c) : 2 == this._aiType && (u = c > 0.2),
                              this._state != i.KG.PlayerState.JUMP && u && this.ChangeState(i.KG.PlayerState.AI_RANDOM_STOP);
                          }
                        }
                    }
                }
              }),
              (t.prototype.playAni = function (e, t, a) {
                var i = this;
                if ((void 0 === t && (t = 1), void 0 === a && (a = 0), this._ani))
                  try {
                    0 == t && 0 != a
                      ? ((this._ani.speed = 1),
                        this._ani.play(e),
                        Laya.timer.frameOnce(a, this, function () {
                          return (i._ani.speed = 0);
                        }))
                      : (this._ani.crossFade(e, 0.15), (this._ani.speed = t));
                  } catch (n) {
                    console.log(n);
                  }
              }),
              (t.prototype.playBeenHitAni = function (e) {
                var t = r.CV.ConstValue.obstacleAni[e];
                if (t) {
                  var a = o["default"].GetRandomNum(0, t.length - 1);
                  this.playAni(t[a]);
                }
              }),
              (t.prototype.pauseAni = function (e) {
                void 0 === e && (e = !0), this._ani && (e ? (this._ani.speed = 0) : (this._ani.speed = 1));
              }),
              (t.prototype.setSpeed = function () {
                var e = Laya.Stat.FPS - this._lastFrame;
                if (Math.abs(e) > 5) {
                  this._lastFrame = Laya.Stat.FPS;
                  var t = o["default"].Clamp(Laya.Stat.FPS, 15, 50);
                  (this._curSpeed = this._MOVE_SPEED * (50 / t)), this._isself && (this._curSpeed *= 1.1);
                }
              }),
              (t.prototype.calculateRevivePos = function () {
                var e = this._bornPos.length,
                  t = this._curBornIdx;
                if (this._Z >= this._bornPos[e - 1]) t = e - 1;
                else for (var a = 1; a < this._bornPos.length; a++) this._bornPos[a - 1] <= this._Z && this._bornPos[a] > this._Z && (t = a - 1);
                var i = t != this._curBornIdx;
                (this._curBornIdx = t), this._isself && i && this._gameScene.RunOverRevivePoint(t - 1);
              }),
              t
            );
          })(Laya.Script3D);
        a["default"] = h;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../mgr/GameMgr": 12,
        "../mgr/UserDataMgr": 19,
        "../utils/Tools": 22,
        "./PlayerTrigger": 9,
      },
    ],
    9: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.triggerStopObs = ["hammer", "pendulum", "fiveball", "gun", "rollball", "movebox", "fist", "crossbar", "flyball", "rollingwood"]),
              (t.exitRunObs = ["hammer", "pendulum", "fiveball", "gun", "rollball", "movebox", "flyball"]),
              t
            );
          }
          return (
            __extends(t, e),
            (t.prototype.Init = function (e) {
              this._player = e;
            }),
            (t.prototype.onTriggerEnter = function (e) {
              if (this._player && e.owner) {
                var t = e.owner.name;
                -1 != this.triggerStopObs.indexOf(t) && this._player.AiTriggerStop();
              }
            }),
            (t.prototype.onTriggerExit = function (e) {
              if (this._player && e.owner) {
                var t = e.owner.name;
                -1 != this.triggerStopObs.indexOf(t) && this._player.AiTriggerRun();
              }
            }),
            t
          );
        })(Laya.Script3D);
        a["default"] = i;
      },
      {},
    ],
    10: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./EventCenter"),
          n = e("./ShareMgr"),
          o = e("./../data/ConstValue"),
          s = e("../utils/Tools"),
          r = e("../view/ad/AdMgr"),
          l = e("./GameMgr"),
          h = (function () {
            function e() {
              this.cfgFiles = [
                {
                  url: "shareType.json",
                  cache: 600,
                },
                {
                  url: "shareDoc.json",
                  cache: 600,
                },
                {
                  url: "shareInfo.json",
                  cache: 120,
                },
                {
                  url: "bannerInfo.json",
                  cache: 120,
                },
                {
                  url: "adInfo.json",
                  cache: 200,
                },
                {
                  url: "adView.json",
                  cache: 200,
                },
                {
                  url: "guanqia.json",
                  cache: 600,
                },
                {
                  url: "roleInfo.json",
                  cache: 600,
                },
                {
                  url: "roleAni.json",
                  cache: 600,
                },
                {
                  url: "game_config.json",
                  cache: 10,
                },
              ];
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "channelAdInfo", {
                get: function () {
                  return this._channelAdInfo;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "roleCfg", {
                get: function () {
                  return this._roleCfg;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "roleAniCfg", {
                get: function () {
                  return this._roleAniCfg;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.LoadCfgs = function (e) {
                var t = this,
                  a = 0,
                  n = this.cfgFiles.length;
                this.cfgs = {};
                var s = "res/config_" + o.CV.ConstValue.version + "/",
                  r = function (r) {
                    var h = l.getCfgName(s + l.cfgFiles[r].url),
                      d = o.CV.ConstValue.resUrl + h;
                    console.log("url____222", d);

                    0 != l.cfgFiles[r].cache && (d += "?steamp=" + Math.floor(Date.now() / 1e3 / l.cfgFiles[r].cache)),
                      l.httpLoad(d, function (o) {
                        (t.cfgs[h] = JSON.parse(o)), a++, i["default"].Instance.event(i["default"].Event_Loading, [a / n]), a == n && e && e();
                      });
                    console.log("this.cfgs___________", this.cfgs);
                  },
                  l = this;
                for (var h in this.cfgFiles) r(h);
              }),
              (e.prototype.LoadAvaterCfg = function () {
                var e = this;
                if (!this._avaterCfg) {
                  // var t = o.CV.ConstValue.cdnPath + "cfg/nickname-avatar-" + s["default"].GetRandomNum(1, 3) + ".json";
                  // this.httpLoad(t, function (t) {
                  //   e._avaterCfg = JSON.parse(t);
                  // });
                  var t = "cfg/nickname-avatar-2.json";
                  Laya.loader.load(
                    t,
                    new Laya.Handler(this, function (a) {
                      console.log("aaaaaaaaaaa", a);
                      e._avaterCfg = a;
                    })
                  );
                }
              }),
              (e.prototype.httpLoad = function (e, t) {
                // var a = new Laya.HttpRequest();
                // (a.http.timeout = 2e4), a.once(Laya.Event.COMPLETE, this, t), a.send(e, "", "get", "text");
              }),
              (e.prototype.getCfgName = function (e) {
                return e;
              }),
              (e.prototype.getCfg = function (e) {
                return (e = this.getCfgName(e)), Laya.Browser.onWeiXin ? this.cfgs[e] : Laya.loader.getRes(e);
              }),
              (e.prototype.ParseConf = function () {
                var e = "res/config/";
                // Laya.Browser.onWeiXin && (e = "res/config_" + o.CV.ConstValue.version + "/"),
                (l["default"].gameConf = this.getCfg(e + "game_config.json")),
                  (this._bannerCfg = this.getCfg(e + "bannerInfo.json")),
                  (this._channelAdInfo = this.getCfg(e + "adInfo.json")),
                  (this._roleCfg = this.getCfg(e + "roleInfo.json")),
                  (this._roleAniCfg = this.getCfg(e + "roleAni.json")),
                  this.parseAdView(this.getCfg(e + "adView.json")),
                  this.parseGuanQiaCfg(this.getCfg(e + "guanqia.json"));
                var t = this.getCfg(e + "shareType.json"),
                  a = this.getCfg(e + "shareInfo.json"),
                  i = this.getCfg(e + "shareDoc.json");
                n["default"].Instance.ParseCfg(t, a, i), (this.cfgs = null);
              }),
              (e.prototype.parseAdView = function (e) {
                this._channelAdView = {};
                for (var t in e)
                  this._channelAdView[e[t].uiname] || (this._channelAdView[e[t].uiname] = []), this._channelAdView[e[t].uiname].push(e[t]);
                r["default"].Instance.ShowAd("loadingView");
              }),
              (e.prototype.GetRoleInfo = function (e) {
                for (var t in this._roleCfg) if (this._roleCfg[t].id == e) return this._roleCfg[t];
                return console.log("没有id为" + e + "的角色"), null;
              }),
              (e.prototype.GetRandomRole = function () {
                var e = s["default"].GetRandomNum(0, this._roleCfg.length - 1);
                return this._roleCfg[e];
              }),
              (e.prototype.GetRoleAniCfg = function (e) {
                for (var t in this._roleAniCfg) if (this._roleAniCfg[t].id == e) return this._roleAniCfg[t];
                return console.log("没有id为" + e + "的庆祝动作"), null;
              }),
              (e.prototype.parseGuanQiaCfg = function (e) {
                this._guanqiaCfg = {};
                for (var t in e) this._guanqiaCfg[e[t].gid] || (this._guanqiaCfg[e[t].gid] = []), this._guanqiaCfg[e[t].gid].push(e[t]);
              }),
              (e.prototype.GetGuanQiaInfo = function (e, t) {
                if (this._guanqiaCfg[e]) for (var a in this._guanqiaCfg[e]) if (this._guanqiaCfg[e][a].id == t) return this._guanqiaCfg[e][a];
                return console.warn("关卡id有误！", e, t), null;
              }),
              (e.prototype.GetRandomGq = function (e) {
                if (this._guanqiaCfg[e]) {
                  var t = s["default"].GetRandomNum(0, this._guanqiaCfg[e].length - 1);
                  return [e, this._guanqiaCfg[e][t].id];
                }
              }),
              (e.prototype.GetBannerInfo = function (e) {
                for (var t in this._bannerCfg) if (this._bannerCfg[t].view_name == e) return this._bannerCfg[t];
                return void 0;
              }),
              (e.prototype.GetChannelAdInfoById = function (e) {
                for (var t in this._channelAdInfo) if (this._channelAdInfo[t].id == e) return this._channelAdInfo[t];
                return void 0;
              }),
              (e.prototype.GetChannelAdByView = function (e) {
                return this._channelAdView && this._channelAdView[e] ? this._channelAdView[e] : void 0;
              }),
              (e.prototype.GetRandomNickName = function () {
                //随便取一个名字
                if (this._avaterCfg) {
                  var e = this._avaterCfg.length,
                    t = s["default"].GetRandomNum(0, e - 1);
                  return this._avaterCfg[t];
                }
                return ["", ""];
              }),
              e
            );
          })();
        a["default"] = h;
      },
      {
        "../utils/Tools": 22,
        "../view/ad/AdMgr": 40,
        "./../data/ConstValue": 4,
        "./EventCenter": 11,
        "./GameMgr": 12,
        "./ShareMgr": 15,
      },
    ],
    11: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            __extends(t, e),
            Object.defineProperty(t, "Instance", {
              get: function () {
                return null == t._instance && (t._instance = new t()), t._instance;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.Event_ApplicationPaused = "e_application_paused"),
            (t.Event_Loading = "e_loading"),
            (t.Event_Relogin = "e_relogin"),
            (t.Event_BackShowMain = "e_show_main"),
            (t.Event_RefreshTurrent = "e_refresh_turrent"),
            (t.Event_ViewClose = "e_view_close"),
            (t.Event_Oprt = "e_oprt"),
            (t.Event_CompleteGQ = "e_complete_gq"),
            (t.Event_RemoveAppId = "e_remove_appid"),
            (t.Event_GoldChange = "e_gold"),
            (t.Event_DiamondChange = "e_diamond"),
            (t.Event_PowerChange = "e_power"),
            (t.Event_GainProduce = "e_gainproduce"),
            t
          );
        })(Laya.EventDispatcher);
        a["default"] = i;
      },
      {},
    ],
    12: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./ResMgr"),
          n = e("./UserDataMgr"),
          o = e("./HttpMgr"),
          s = e("./EventCenter"),
          r = e("./SoundMgr"),
          l = e("./ShareMgr"),
          h = e("./WxApiMgr"),
          d = e("../data/Define"),
          c = e("../data/ConstValue"),
          u = c.CV.PlayerPrefs,
          p = e("../game/GameScene"),
          f = e("../GameConfig"),
          g = e("./StatisMgr"),
          y = e("./UIMgr"),
          _ = e("../view/ad/AdMgr"),
          m = e("../data/GloableTempData"),
          b = (function () {
            function e() {
              (this._isNextday = !1), (this.needShowJumpView = !0);
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e, "channelID", {
                get: function () {
                  return Laya.Browser.onWeiXin ? d.KG.Channel.Wechat : d.KG.Channel.Develop;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e, "isShenHe", {
                get: function () {
                  var t = !1;
                  return e.gameConf && (t = 1 == e.gameConf.isShenHe), t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isVibrateClose", {
                get: function () {
                  return this._isvibrate;
                },
                set: function (e) {
                  (this._isvibrate = e), u.setBool("vibrate", e);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isNextDay", {
                get: function () {
                  return this._isNextday;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.Init = function () {
                var t = this,
                  a = Laya.Browser.onIOS;
                (this._isvibrate = u.getBool("vibrate", a)), r["default"].Instance.Init();
                var o = function (e) {
                  var a = u.getNumber(u.Key_LastOnlineTime);
                  if (a) {
                    var o = new Date(a).getDay();
                    t._isNextday = o != new Date().getDay();
                  }
                  u.setNumber(u.Key_LastOnlineTime, Date.now()),
                    i["default"].Instance.Setup(function () {
                      n["default"].Instance.Init(e), Laya.Scene.open(f["default"].startScene), i["default"].Instance.LoadMainAssets();
                    });
                };
                switch (e.channelID) {
                  case d.KG.Channel.Wechat:
                    o({});
                    break;

                  case d.KG.Channel.Develop:
                    o({});
                }
                s["default"].Instance.on(s["default"].Event_ApplicationPaused, this, function (e) {
                  e ? t.onHide() : t.onShow();
                });
              }),
              (e.prototype.onShow = function () {
                h["default"].Instance.sharedData;
                l["default"].Instance.onShow();
                var e = h["default"].Instance.sharedData;
                e.from && (g["default"].fromChannel = e.from);
              }),
              (e.prototype.onHide = function () {
                n["default"].Instance.SaveUserData(), l["default"].Instance.onHide(), u.setNumber(u.Key_OfflineTime, Date.now());
              }),
              (e.prototype.openMainScene = function () {
                new p["default"]();
              }),
              (e.prototype.ShowMainViewAd = function () {
                y["default"].Instance.IsLoadingVisible || _["default"].Instance.ShowAd("mainView");
              }),
              (e.prototype.AutoPopDaySign = function () {
                var e = this;
                !m["default"].Instance.getIsNovice() &&
                  u.isShowDaySign() &&
                  Laya.timer.once(500, this, function () {
                    e.mainView && e.mainView.clickDaySign();
                  });
              }),
              (e.prototype.StartGame = function () {
                h["default"].Instance.triggerGC(),
                  this.gameScene &&
                    this.mainView &&
                    (_["default"].Instance.CloseAllAd(),
                    c.CV.PlayerPrefs.getBool("isfirstclick") ||
                      (c.CV.PlayerPrefs.setBool("isfirstclick", !0), g["default"].SendEvent("点击开始", {}), g["default"].ClickKaishiBtn()),
                    this.gameScene.StartGame());
              }),
              (e.prototype.ContinueGame = function () {
                _["default"].Instance.CloseAllAd(), this.mainView.openTryView(!1);
              }),
              (e.prototype.ReturnMainView = function (e, t) {
                void 0 === e && (e = !1),
                  void 0 === t && (t = !1),
                  n["default"].Instance.ResetGuanQia(),
                  _["default"].Instance.CloseAllAd(),
                  y["default"].Instance.HideGameView(),
                  this.gameScene.ResetGame(),
                  Laya.loader.clearUnLoaded();
                try {
                  Laya.Resource.destroyUnusedResources();
                } catch (a) {
                  console.warn("destroyUnusedResources: ", a);
                }
                h["default"].Instance.triggerGC(),
                  //  r["default"].Instance.StopBGM(),
                  this.mainView.openMainPanel(),
                  t && this.mainView.hideScene3D();
              }),
              (e.prototype.GetTreasureBox = function (e, t) {
                o["default"].SendMsg(
                  c.CV.Protocol.Proto_getBox,
                  {
                    parcelId: e,
                  },
                  function (e) {
                    var a = JSON.parse(e);
                    console.log("10增加金币：", a.goods.goodsId - 1, a.goods.num),
                      0 == a.code && (n["default"].Instance.AddItem(a.goods.goodsId - 1, a.goods.num), t && t(a.goods.goodsId - 1, a.goods.num));
                  },
                  function (e) {
                    console.log("宝箱获取失败", e);
                  },
                  "post"
                );
              }),
              (e.isNewUser = !1),
              (e.isConnectServer = !1),
              (e.isServerShareDisabled = !1),
              e
            );
          })();
        a["default"] = b;
      },
      {
        "../GameConfig": 1,
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../data/GloableTempData": 6,
        "../game/GameScene": 7,
        "../view/ad/AdMgr": 40,
        "./EventCenter": 11,
        "./HttpMgr": 13,
        "./ResMgr": 14,
        "./ShareMgr": 15,
        "./SoundMgr": 16,
        "./StatisMgr": 17,
        "./UIMgr": 18,
        "./UserDataMgr": 19,
        "./WxApiMgr": 20,
      },
    ],
    13: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./UIMgr"),
          n = e("./WxApiMgr"),
          o = e("./GameMgr"),
          s = e("./StatisMgr"),
          r = e("./../data/ConstValue"),
          l = e("./EventCenter"),
          h = (function () {
            function e() {}
            return (
              (e.SendMsg = function (t, a, i, o, s, r, h, d) {
                void 0 === s && (s = "get");
                var c = "string" == typeof a ? a : e.getRequestPars(a),
                  u = new Laya.HttpRequest();
                (u.http.timeout = d ? d : 1e4),
                  u.once(Laya.Event.COMPLETE, this, function (t) {
                    var a;
                    try {
                      a = JSON.parse(t);
                    } catch (o) {
                      console.log("http response can not parse to json", t), (a = t);
                    }
                    a && a.error && -32e3 == a.error.code && "SESSION_INVALIDE" == a.error.message
                      ? n["default"].Instance.showModal("会话失效", "当前会话信息已失效，请重新登录！", !1, function (t) {
                          var a = function () {
                            l["default"].Instance.event(l["default"].Event_Relogin);
                          };
                          n["default"].Instance.login(function (t) {
                            t && e.RpcLogin(t, a);
                          });
                        })
                      : i && i(a);
                  }),
                  u.once(Laya.Event.ERROR, this, function (e) {
                    o && o(e), console.warn("http error! ", e);
                  }),
                  u.on(Laya.Event.PROGRESS, this, function (e) {
                    h && h(e);
                  });
                var p,
                  f = t;
                "get" == s ? (f = f + "?" + c) : (p = a), !r && (r = []), r.push("Content-Type", "application/json"), u.send(f, p, s, "text", r);
              }),
              (e.getRequestPars = function (e) {
                var t = "";
                for (var a in e) t += a + "=" + e[a] + "&";
                return t.substr(0, t.length - 1);
              }),
              (e.login = function (t, a) {
                i["default"].Instance.ShowWaitting(!0);
                var n = new Laya.HttpRequest();
                (n.http.timeout = 1e4),
                  n.once(Laya.Event.COMPLETE, this, function (t) {
                    var r = JSON.parse(t);
                    if ("success" == r.msg && 0 == r.code) {
                      console.log("openid " + r.openId, " userid " + r.userId),
                        (o["default"].isFirstEnterGame = 1 == r.isNewUser),
                        (s["default"].userId = r.userId);
                      var l = n.http.getResponseHeader("Set-Cookie");
                      if (l && l.match(/^.*x_session_id=(\w+);.+$/gi)) {
                        var h = "x_session_id=" + RegExp.$1;
                        e.sessionKey = h;
                      }
                      a && a();
                    } else console.log("登陆服务器失败, code：" + r.code);
                    i["default"].Instance.ShowWaitting(!1);
                  }),
                  n.once(Laya.Event.ERROR, this, function (e) {
                    console.log("登陆服务器失败, 错误：" + e), i["default"].Instance.ShowWaitting(!1);
                  }),
                  n.send(
                    r.CV.Protocol.Proto_wxLogin,
                    {
                      jsCode: t,
                    },
                    "post",
                    "text",
                    ["Content-Type", "application/x-www-form-urlencoded"]
                  );
              }),
              (e.RpcRequest = function (t, a, i, n) {
                var o = {
                  jsonrpc: "2.0",
                  method: t.method,
                  id: ++e.RequestIdIncr,
                  params: t.params,
                };
                e.SendMsg(r.CV.ConstValue.httpUrl + ("?method=" + t.method), o, a, i, "post", null, null, n ? n : 1e4);
              }),
              (e.RpcLogin = function (t, a) {
                var i = Laya.LocalStorage.getItem("user_openid");
                i || (i = "");
                var r = Laya.Browser.onAndroid ? 1 : 0,
                  l = {
                    method: "Sign_signin",
                    params: [
                      {
                        osType: r,
                        jsCode: t,
                        adFrom: s["default"].fromChannel,
                        openid: i,
                        scene: n["default"].Instance.scene,
                      },
                    ],
                  },
                  h = function () {
                    (o["default"].isConnectServer = !1), a && a();
                  };
                e.RpcRequest(
                  l,
                  function (t) {
                    if (t && t.result) {
                      var i = t.result;
                      (o["default"].isNewUser = i.newUser),
                        (e.sessionKey = i.token),
                        (s["default"].statDisabled = i.statDisabled),
                        (o["default"].isConnectServer = !0),
                        (o["default"].isServerShareDisabled = i.shareVadDisabled),
                        Laya.LocalStorage.setItem("user_openid", i.openid),
                        a && a();
                    } else console.log("登陆服务器失败, response: " + t), h();
                  },
                  function (e) {
                    console.log("RPC请求服务器出错, err: " + e), h();
                  },
                  5e3
                );
              }),
              (e.sessionKey = ""),
              (e.RequestIdIncr = 0),
              e
            );
          })();
        a["default"] = h;
      },
      {
        "./../data/ConstValue": 4,
        "./EventCenter": 11,
        "./GameMgr": 12,
        "./StatisMgr": 17,
        "./UIMgr": 18,
        "./WxApiMgr": 20,
      },
    ],
    14: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = Laya.Handler,
          n = e("./StatisMgr"),
          o = e("./ConfMgr"),
          s = e("./GameMgr"),
          r = e("./EventCenter"),
          l = e("./../data/Define"),
          h = l.KG.ShowLoadingType,
          d = e("./../data/ConstValue"),
          c = e("./UIMgr"),
          u = (function () {
            function e() {
              (this.cfg_res = []), (this._endLoad = !1);
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.Setup = function (e) {
                Laya.URL.basePath = d.CV.ConstValue.resUrl;
                var t = function () {
                  n["default"].SendEvent(n["default"].Statis.e_end__load, {
                    type: "加载配置文件结束",
                  }),
                    o["default"].Instance.ParseConf(),
                    e && e();
                };
                // let b = this;
                // this.FakeLoad(Laya.Handler.create(this, t), b);
                if (
                  (n["default"].LoadingStart(),
                  n["default"].SendEvent(n["default"].Statis.e_start_load, {
                    type: "开始加载配置文件",
                  }),
                  Laya.Browser.onWeiXin)
                )
                  o["default"].Instance.LoadCfgs(t);
                else {
                  var a = [];
                  o["default"].Instance.cfgFiles.forEach(function (e) {
                    return a.push("res/config/" + e.url);
                  });
                  (this.cfg_res = this.cfg_res.concat(a)), console.log("cfg_res_____", this.cfg_res);
                  this.LoadAsync(this.cfg_res, Laya.Handler.create(this, t), h.Loading, "Loading...");
                }
              }),
              (e.prototype.LoadMainAssets = function (e) {
                console.log("_LoadMainAssets");
                void 0 === e && (e = !0);
                var t = ["res/LayaScene_main/Conventional/main.ls", "res/LayaScene_assets/Conventional/role_1.lh"];
                n["default"].SendEvent(n["default"].Statis.e_start_load, {
                  type: "开始加载资源",
                }),
                  (this._endLoad = !1),
                  this.CreateLoadAsync(t, Laya.Handler.create(this, this.onLoaded), h.Loading, "Loading...", !1),
                  c["default"].Instance.ShowLoadingBannerAd();
              }),
              Object.defineProperty(e.prototype, "endLoad", {
                get: function () {
                  return this._endLoad;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.onLoaded = function () {
                (this._endLoad = !0),
                  n["default"].LoadingEnd(),
                  n["default"].SendEvent(n["default"].Statis.e_end__load, {
                    type: "加载资源结束",
                  }),
                  s["default"].Instance.openMainScene();
              }),
              (e.prototype.ShowLoading = function (e, t, a) {
                t == h.Loading ? c["default"].Instance.ShowLoading(e, a) : t == h.Waitting && c["default"].Instance.ShowWaitting(e);
              }),
              (e.prototype.loading = function (e) {
                r["default"].Instance.event(r["default"].Event_Loading, [e]);
              }),
              (e.prototype.CreateLoadAsync = function (e, t, a, n, o, s) {
                console.log("_CreateLoadAsync");
                var r = this;
                console.log("进度条百分比_2");
                void 0 === o && (o = !0),
                  void 0 === s && (s = !0),
                  this.ShowLoading(!0, a, n),
                  Laya.loader.create(
                    e,
                    i.create(this, function () {
                      o && r.ShowLoading(!1, a), t && t.run();
                    }),
                    // null
                    a == h.Loading ? i.create(this, this.loading, void 0, !1) : null
                  );
              }),
              (e.prototype.LoadAsync = function (e, t, a, n, o, s) {
                console.log("_LoadAsync");

                var r = this;
                console.log("进度条百分比_3");
                void 0 === o && (o = !0),
                  void 0 === s && (s = !0),
                  this.ShowLoading(!0, a, n),
                  Laya.loader.load(
                    e,
                    i.create(this, function () {
                      o && r.ShowLoading(!1, a), t && t.run();
                    }),
                    null,
                    // a == h.Loading ? i.create(this, this.loading, void 0, !1) : null,
                    void 0,
                    void 0,
                    s,
                    void 0
                  );
              }),
              (e.prototype.load_iii = 0),
              (e.prototype.FakeLoad = function (t, b) {
                console.log("_FakeLoad");

                console.log("进度条百分比_fake");
                Laya.timer.loop(50, this, this.FakeLoad2222, [t, b]);
              }),
              (e.prototype.FakeLoad2222 = function (t, b) {
                let n = Math.floor(Math.random() * 3 + 1) / 100;
                this.load_iii += n;
                this.loading(this.load_iii);
                if (this.load_iii >= 1.02) {
                  // let r = this;
                  // b.ShowLoading(!1, h.Waitting);
                  // b.ShowLoading(!1, h.loading);
                  // console.log("ttttt", t);
                  // console.log("ttttt", r);
                  // t && t.run();
                  // t && t();
                  Laya.timer.clear(this.FakeLoad2222);
                }
              }),
              (e.prototype.LoadSingle = function (e, t) {
                Laya.loader.load(
                  e,
                  i.create(this, function (e) {
                    t && t(e);
                  })
                );
              }),
              (e.prototype.CreateSingle = function (e, t) {
                Laya.loader.create(
                  e,
                  i.create(this, function (e) {
                    t && t(e);
                  })
                );
              }),
              e
            );
          })();
        a["default"] = u;
      },
      {
        "./../data/ConstValue": 4,
        "./../data/Define": 5,
        "./ConfMgr": 10,
        "./EventCenter": 11,
        "./GameMgr": 12,
        "./StatisMgr": 17,
        "./UIMgr": 18,
      },
    ],
    15: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./WxApiMgr"),
          n = e("./GameMgr"),
          o = e("./StatisMgr"),
          s = e("./HttpMgr"),
          r = e("./SoundMgr"),
          l = e("./../data/ConstValue"),
          h = l.CV.PlayerPrefs,
          d = e("../utils/Tools"),
          c = e("./../data/Define"),
          u = c.KG.SHARE_RES,
          p = (function () {
            function e() {
              (this._hasSharePower = !1), (this._shareTypes = {}), (this._shareInfos = {}), (this._shareDoc = []), (this._calling = !1);
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "hasSharePower", {
                get: function () {
                  return this._hasSharePower;
                },
                set: function (e) {
                  this._hasSharePower = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.ParseCfg = function (e, t, a) {
                for (var i in e) this._shareTypes[e[i].sharetype] = e[i];
                for (var i in t) this._shareInfos[t[i].sharekey] = t[i];
                if (((this._shareDoc = a), n["default"].Instance.isNextDay)) {
                  for (var i in this._shareInfos)
                    h.setJson("share_" + this._shareInfos[i].sharekey, {
                      times: 0,
                      lastRes: !0,
                    });
                  for (var i in this._shareTypes) h.setNumber("share_totaltimes_" + this._shareTypes[i].sharetype, 0);
                }
              }),
              (e.prototype.onShow = function () {
                if (this.shareData) {
                  var e = Date.now() - this.shareData.shareTimeStamp,
                    t = !0;
                  if (3 == this.shareData.shareType) {
                    var a = h.getJson("share_" + this.shareData.shareKey);
                    (a && 1 != a.lastRes) || (t = e >= 2500 && Math.random() >= 0.34), a && 0 == a.lastRes && (t = e >= 1e3);
                  } else 4 == this.shareData.shareType && (t = e >= 2500);
                  t &&
                    (this.addShareTimes(this.shareData.shareKey),
                    this.addTotalTimes(this.shareData.shareType),
                    o["default"].SendEvent(o["default"].Statis.e_share_doc, {
                      docID: this.shareData.shareDoc + "",
                    })),
                    this.updateShareRes(this.shareData.shareKey, t);
                  var i = t ? u.SUCCESS : u.FAILED;
                  this.shareData.shareCallBack && this.shareData.shareCallBack(i),
                    t
                      ? o["default"].SendEvent("[分享]功能模块分享统计(分享成功)", {
                          desc: this.shareData.shareDesc,
                        })
                      : o["default"].SendEvent("[分享]功能模块分享统计(分享失败)", {
                          desc: this.shareData.shareDesc,
                        });
                }
                (this.shareData = null), (this._calling = !1), this.sendShareInfo(), r["default"].Instance.Resume();
              }),
              (e.prototype.onHide = function () {
                this.shareData && (this.shareData.shareTimeStamp = Date.now()), r["default"].Instance.Pause();
              }),
              (e.prototype.SetShare = function () {
                if (Laya.Browser.onWeiXin) {
                  var e = this.getShareDocByID(1),
                    t = {};
                  (t.sysScene = 12121), (t.valid = this._hasSharePower ? 1 : 0);
                  var a = s["default"].getRequestPars(t);
                  i["default"].Instance.onShareAppMessage(e.title, l.CV.ConstValue.resUrl + e.pic, a, "特殊分享");
                }
              }),
              (e.prototype.getNextShareType = function (e, t) {
                if (this._shareInfos[e]) {
                  var a = this._shareInfos[e],
                    i = 0,
                    n = h.getJson("share_" + e);
                  n
                    ? (i = n.times)
                    : h.setJson("share_" + e, {
                        times: 0,
                        lastRes: !0,
                      });
                  for (var o = 0, s = 0; s < a.types.length; s++)
                    if ((-1 != a.times[s] && (o += a.times[s]), o > i || -1 == a.times[s])) {
                      var r = this.checkTypeTimes(a.types[s]),
                        l = a.types[s];
                      if (r && (!t || t != l)) return l;
                    }
                  return console.log("该分享点分享次数已用完"), -1;
                }
                return console.error("没有找到对应的分享点"), -1;
              }),
              (e.prototype.checkTypeTimes = function (e) {
                var t = h.getNumber("share_totaltimes_" + e);
                return t ? (this._shareTypes[e] && (-1 == this._shareTypes[e].maxtimes || t < this._shareTypes[e].maxtimes) ? !0 : !1) : !0;
              }),
              (e.prototype.getShareDocByID = function (e) {
                for (var t in this._shareDoc) if (e == this._shareDoc[t].doc_id) return this._shareDoc[t];
              }),
              (e.prototype.GetRandomDoc = function () {
                var e = d["default"].GetRandomNum(0, this._shareDoc.length - 1);
                return this._shareDoc[e];
              }),
              (e.prototype.addShareTimes = function (e) {
                var t = h.getJson("share_" + e);
                t && t.times++, h.setJson("share_" + e, t);
              }),
              (e.prototype.updateShareRes = function (e, t) {
                var a = h.getJson("share_" + e);
                a && (a.lastRes = t), h.setJson("share_" + e, a);
              }),
              (e.prototype.addTotalTimes = function (e) {
                var t = h.getNumber("share_totaltimes_" + e);
                t ? t++ : (t = 1), h.setNumber("share_totaltimes_" + e, t);
              }),
              (e.prototype.GetShareType = function (e, t) {
                var a = this;
                if (!Laya.Browser.onWeiXin) return void (t && t(1));
                var i = function (e) {
                    t && t(e);
                  },
                  o = function () {
                    var t = a.getNextShareType(e);
                    i(t);
                  };
                this._hasSharePower && !n["default"].isShenHe
                  ? n["default"].isConnectServer && !n["default"].isServerShareDisabled
                    ? this.getServerShareType(function (e) {
                        var t = 2;
                        0 == e && (t = 3), i(t);
                      }, o)
                    : o()
                  : i(2);
              }),
              (e.prototype.ShareMsg = function (e, t) {
                if (Laya.Browser.onWeiXin) {
                  var a = {};
                  (a.sysScene = 12121), (a.valid = this._hasSharePower ? 1 : 0);
                  var n = s["default"].getRequestPars(a);
                  i["default"].Instance.shareAppMessage(e, t, n, "特殊分享");
                }
              }),
              (e.prototype.Share = function (e, t, a, i) {
                //原游戏的激励方法
                // console.log(e, "_____", t, "_____", a, "_____", i, "_____", u.SUCCESS);
                console.log("激励视频方法");

                // YYGGames &&
                //   a &&
                //   YYGGames.showReward(() => {
                //     a(u.SUCCESS, 1);
                //   });
                
                  a &&
                  HUHU_showRewardedVideoAd(
                    () => {
                        // 用户观看广告完成，继续游戏
                        a(u.SUCCESS, 1);
                    },
                    () => {
                      // 广告请求失败或者用户跳过广告
                      promptMessage("Failed to get the reward, please watch the ads to the end.");
                    }
                  );
                  // YYGGames.showReward(() => {
                  //   a(u.SUCCESS, 1);
                  // });

                // a: 激励回调方法  有两个参数  接收激励的成功失败数据    和  激励的类型   分享，视频
                // var o = this;
                // if (!this._calling) {
                //   if (!Laya.Browser.onWeiXin) return void (a && a(u.SUCCESS, 1));
                //   var s = function (e, t) {
                //     (o._calling = !1), a && a(e, t);
                //   };
                //   this._calling = !0;
                //   var r = function () {
                //     var a = o.getNextShareType(e);
                //     return -1 == a ? !1 : (console.log("当前分享类型是：", a), void o.ShareByType(e, a, t, s, i));
                //   };
                //   this._hasSharePower && !n["default"].isShenHe
                //     ? n["default"].isConnectServer && !n["default"].isServerShareDisabled
                //       ? this.shareFromServer(function (a, n) {
                //           var r = 2;
                //           0 == a && (r = 3), t || (t = {}), (t.ticketId = n), o.ShareByType(e, r, t, s, i);
                //         }, r)
                //       : r()
                //     : (console.log("没有分享权限则全是视频"), this.ShareByType(e, 2, t, s, i));
                // }
              }),
              (e.prototype.ShareByType = function (e, t, a, r, h) {
                var c = this;
                if (!Laya.Browser.onWeiXin) return void (r && r(u.SUCCESS, 1));
                if (1 == t) r && r(u.SUCCESS, 1);
                else if (2 == t) console.log("videoad:", this._shareInfos[e].videoad), this.openAdVedio(e, this._shareInfos[e].videoad, a, r, h);
                else if (3 == t || 4 == t || 5 == t) {
                  var p = this._shareInfos[e].doc_id;
                  n["default"].gameConf.spShareScene.includes(n["default"].registerScene) && (p = this._shareInfos[e].doc_id1);
                  var g = d["default"].GetRandomNum(0, p.length - 1),
                    y = this.getShareDocByID(p[g]);
                  if (y) {
                    a || (a = {}), (a.docId = y.doc_id), (a.userId = Laya.LocalStorage.getItem("user_openid"));
                    var _ = s["default"].getRequestPars(a);
                    (this.shareData = new f()),
                      (this.shareData.shareKey = e),
                      (this.shareData.shareCallBack = function (n) {
                        r && r(n, t),
                          n == u.FAILED &&
                            i["default"].Instance.showModal("分享失败", "分享失败，请分享给好友或微信群", !0, function (i) {
                              i && c.ShareByType(e, t, a, r, h);
                            });
                      }),
                      (this.shareData.shareType = t),
                      (this.shareData.shareDesc = h),
                      (this.shareData.shareDoc = y.doc_id),
                      o["default"].SendEvent("[分享]功能模块分享统计(点击统计)", {
                        desc: h,
                      }),
                      i["default"].Instance.shareAppMessage(y.title, l.CV.ConstValue.resUrl + y.pic, _, h);
                  } else console.warn("分享文案id有误！", p);
                }
              }),
              (e.prototype.openAdVedio = function (e, t, a, s, l) {
                var h = this;
                return Laya.Browser.onWeiXin
                  ? void i["default"].Instance.showVideoAd(
                      t,
                      function (t) {
                        if (s) {
                          var a = t ? u.SUCCESS : u.FAILED;
                          a == u.SUCCESS && (h.addShareTimes(e), h.addTotalTimes(2)),
                            s && s(a, 2),
                            t
                              ? o["default"].SendEvent("[视频广告]视频广告已经看完", {
                                  desc: l,
                                })
                              : o["default"].SendEvent("[视频广告]中途退出激励视频广告", {
                                  desc: l,
                                });
                        }
                        r["default"].Instance.Resume();
                      },
                      function (t, i) {
                        if (t)
                          o["default"].SendEvent("[视频广告]功能模块视频统计(成功调起)", {
                            desc: l,
                          });
                        else {
                          console.log(e + " 调起视频失败,跳过当前类型切换至下一类型");
                          var r = "error";
                          if (
                            (i && (r = i.errMsg),
                            o["default"].SendEvent("[视频广告]视频广告拉取异常或已达上限", {
                              errMsg: r,
                            }),
                            h._hasSharePower && !n["default"].isShenHe)
                          ) {
                            var d = h.getNextShareType(e, 2);
                            if (-1 != d) return void h.ShareByType(e, d, a, s, l);
                          } else if (i && -12001 == i.err_code) return void s(u.SUCCESS, 2);
                          s && (!i || (1e3 != i.errCode && 1003 != i.errCode) ? s(u.ERROR, 2) : s(u.SUCCESS, 2));
                        }
                      }
                    )
                  : void (s && s(u.SUCCESS, 2));
              }),
              (e.prototype.getServerShareType = function (e, t) {
                s["default"].RpcRequest(
                  {
                    method: "ShareVad_getPreference",
                    params: [
                      {
                        token: s["default"].sessionKey,
                      },
                    ],
                  },
                  function (a) {
                    if (a && a.result) {
                      var i = a.result.preference;
                      console.log("服务器返回的分享类型是：", i), e && e(i);
                    }
                    a && a.error && (console.log("服务器返回的分享类型失败，", a.error), console.log("启用本地分享机制"), t && t());
                  },
                  function (e) {
                    console.log("服务器异常", e), console.log("启用本地分享机制"), t && t();
                  },
                  3e3
                );
              }),
              (e.prototype.shareFromServer = function (e, t) {
                s["default"].RpcRequest(
                  {
                    method: "ShareVad_getTicket",
                    params: [
                      {
                        token: s["default"].sessionKey,
                      },
                    ],
                  },
                  function (a) {
                    if (a && a.result) {
                      var i = a.result.ticketId,
                        n = a.result.preference;
                      console.log("服务器返回的分享类型是：", n, i), e && e(n, i);
                    }
                    a && a.error && (console.log("服务器返回的分享类型失败，", a.error), console.log("启用本地分享机制"), t && t());
                  },
                  function (e) {
                    console.log("服务器异常", e), console.log("启用本地分享机制"), t && t();
                  },
                  3e3
                );
              }),
              (e.prototype.sendShareInfo = function () {
                var e = i["default"].Instance.sharedData,
                  t = e.userId;
                t &&
                  e.ticketId &&
                  t != Laya.LocalStorage.getItem("user_openid") &&
                  (console.log("上报分享链接信息", e),
                  s["default"].RpcRequest({
                    method: "ShareVad_revisit",
                    params: [
                      {
                        token: s["default"].sessionKey,
                        ticketId: e.ticketId,
                        sharerId: t,
                        shareTextId: e.docId,
                      },
                    ],
                  }));
              }),
              e
            );
          })();
        a["default"] = p;
        var f = (function () {
          function e() {}
          return e;
        })();
      },
      {
        "../utils/Tools": 22,
        "./../data/ConstValue": 4,
        "./../data/Define": 5,
        "./GameMgr": 12,
        "./HttpMgr": 13,
        "./SoundMgr": 16,
        "./StatisMgr": 17,
        "./WxApiMgr": 20,
      },
    ],
    16: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./../data/ConstValue"),
          n = i.CV.PlayerPrefs,
          o = (function () {
            function e() {
              (this.soundPath = "res/sound/"), (this.lastBgm = "");
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "musicMuted", {
                get: function () {
                  var e = n.getBool(n.Key_BGM);
                  return (this.musicMuted = e), e;
                },
                set: function (e) {
                  n.setBool(n.Key_BGM, e), (Laya.SoundManager.muted = e);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.Init = function () {
                Laya.SoundManager.stopAllSound(), this.Resume();
              }),
              (e.prototype.PlaySound = function (e, t) {
                if (!Laya.SoundManager.muted) {
                  void 0 === t && (t = 1), Laya.SoundManager.playSound(this.soundPath + e + ".mp3", t);
                }
              }),
              (e.prototype.StopSound = function (e) {
                Laya.SoundManager.stopSound(this.soundPath + e);
              }),
              (e.prototype.PlayBGM = function (e) {
                if (!Laya.SoundManager.muted) {
                  this.StopBGM(), (this.lastBgm = this.soundPath + e + ".mp3"), Laya.SoundManager.playMusic(this.lastBgm);
                }
              }),
              (e.prototype.StopBGM = function () {
                (this.lastBgm = ""), Laya.SoundManager.stopMusic();
              }),
              (e.prototype.Pause = function () {
                Laya.SoundManager.muted = !0;
              }),
              (e.prototype.Resume = function () {
                (Laya.SoundManager.muted = this.musicMuted),
                  "" != this.lastBgm && (Laya.SoundManager.stopMusic(), Laya.SoundManager.playMusic(this.lastBgm));
              }),
              e
            );
          })();
        a["default"] = o;
      },
      {
        "./../data/ConstValue": 4,
      },
    ],
    17: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./GameMgr"),
          n = e("../data/ConstValue"),
          o = e("./HttpMgr"),
          s = (function () {
            function e() {}
            return (
              Object.defineProperty(e, "isNoSendServer", {
                get: function () {
                  return !Laya.Browser.onWeiXin || e.statDisabled || !i["default"].isConnectServer;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.SendEvent = function (e, t) {
                if (Laya.Browser.onWeiXin) {
                  var a = n.CV.ConstValue.isDevelop ? "Test_" : "";
                  wx.aldSendEvent(a + e, t);
                }
              }),
              (e.StageStart = function (e) {
                Laya.Browser.onWeiXin &&
                  wx.aldStage.onStart({
                    stageId: e,
                    stageName: "第" + e + "关",
                  });
              }),
              (e.StageRunning = function (e, t, a) {
                Laya.Browser.onWeiXin &&
                  wx.aldStage.onRunning({
                    stageId: e,
                    stageName: "第" + e + "关",
                    event: t,
                    params: {
                      itemName: a,
                    },
                  });
              }),
              (e.StageEnd = function (e, t, a) {
                Laya.Browser.onWeiXin &&
                  wx.aldStage.onEnd({
                    stageId: e,
                    stageName: "第" + e + "关",
                    event: t,
                    params: {
                      desc: a,
                    },
                  });
              }),
              (e.LoadingStart = function () {
                !e.isNoSendServer &&
                  i["default"].isNewUser &&
                  ((e.costTimeInMillis = Date.now()),
                  o["default"].RpcRequest({
                    method: "LoadStat_loadStart",
                    params: [
                      {
                        osType: Laya.Browser.onAndroid ? 1 : 0,
                        adFrom: e.fromChannel,
                      },
                    ],
                  }));
              }),
              (e.LoadingEnd = function () {
                !e.isNoSendServer &&
                  i["default"].isNewUser &&
                  o["default"].RpcRequest({
                    method: "LoadStat_loadEnd",
                    params: [
                      {
                        osType: Laya.Browser.onAndroid ? 1 : 0,
                        adFrom: e.fromChannel,
                        costTimeInMillis: Date.now() - e.costTimeInMillis,
                      },
                    ],
                  });
              }),
              (e.ClickKaishiBtn = function () {
                !e.isNoSendServer &&
                  i["default"].isNewUser &&
                  o["default"].RpcRequest({
                    method: "LoadStat_clickKaishiButton",
                    params: [
                      {
                        osType: Laya.Browser.onAndroid ? 1 : 0,
                        adFrom: e.fromChannel,
                      },
                    ],
                  });
              }),
              (e.ClickKaipaoBtn = function () {
                !e.isNoSendServer &&
                  i["default"].isNewUser &&
                  o["default"].RpcRequest({
                    method: "LoadStat_clickKaipaoButton",
                    params: [
                      {
                        osType: Laya.Browser.onAndroid ? 1 : 0,
                        adFrom: e.fromChannel,
                      },
                    ],
                  });
              }),
              (e.ServerStart = function (t, a) {
                e.isNoSendServer ||
                  ((e.serverGuanQiaID = ""),
                  (e.gqRunningTime = Date.now()),
                  o["default"].RpcRequest(
                    {
                      method: "CpStat_startBattle",
                      params: [
                        {
                          token: o["default"].sessionKey,
                          parentId: t,
                          childId: a,
                        },
                      ],
                    },
                    function (t) {
                      t && t.result && ((e.serverGuanQiaID = t.result.cpId), console.log("start cpid--\x3e ", e.serverGuanQiaID));
                    }
                  ));
              }),
              (e.ServerEnd = function (t) {
                e.isNoSendServer ||
                  (console.log("end cpid--\x3e ", e.serverGuanQiaID),
                  o["default"].RpcRequest({
                    method: "CpStat_endBattle",
                    params: [
                      {
                        cpId: e.serverGuanQiaID,
                        passed: t,
                      },
                    ],
                  }));
              }),
              (e.ServerEndMatch = function () {
                e.isNoSendServer ||
                  (console.log("revive cpid--\x3e ", e.serverGuanQiaID),
                  o["default"].RpcRequest({
                    method: "CpStat_matchedBattle",
                    params: [
                      {
                        cpId: e.serverGuanQiaID,
                      },
                    ],
                  }));
              }),
              (e.ServerEndRunCD = function () {
                e.isNoSendServer ||
                  (console.log("restart cpid--\x3e ", e.serverGuanQiaID),
                  o["default"].RpcRequest({
                    method: "CpStat_countdownedBattle",
                    params: [
                      {
                        cpId: e.serverGuanQiaID,
                      },
                    ],
                  }));
              }),
              (e.Statis = {
                e_start_login: "开始登录",
                e_end_login: "登录完成",
                e_start_load: "开始加载",
                e_end__load: "加载完成",
                e_enter_lobby: "进入大厅",
                e_share_data: "分享点",
                e_share_doc: "分享图文",
              }),
              (e.statDisabled = !1),
              (e.userId = ""),
              (e.fromChannel = ""),
              (e.costTimeInMillis = 0),
              (e.serverGuanQiaID = ""),
              (e.gqRunningTime = 0),
              e
            );
          })();
        a["default"] = s;
        var r;
        !(function (e) {
          (e[(e.START = 0)] = "START"), (e[(e.RUN = 1)] = "RUN"), (e[(e.END = 2)] = "END");
        })(r || (r = {}));
      },
      {
        "../data/ConstValue": 4,
        "./GameMgr": 12,
        "./HttpMgr": 13,
      },
    ],
    18: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./ResMgr"),
          n = e("./WxApiMgr"),
          o = e("../data/Define"),
          s = o.KG.UIDepth,
          r = o.KG.ShowLoadingType,
          l = e("../view/Tips"),
          h = e("../view/Loading"),
          d = e("../view/NotifyView"),
          c = e("../view/GuideView"),
          u = e("../view/LuckyTurnTableView"),
          p = e("../view/GameView"),
          f = e("../view/EndGameView"),
          g = e("../view/DialogTip"),
          y = e("../view/MatchingView"),
          _ = e("../view/NewSkinView"),
          m = e("../view/GiftView"),
          b = (function () {
            function e() {
              (this.viewPath = {}),
                (this.hasLoadList = {}),
                (this.loadingList = []),
                (this.UIDepthRoot = {}),
                (this.tipObjs = []),
                null != e._instance && console.error("正在创建一个UIMgr实例，请检查这是否是必要的，请使用UIMgr.Instance"),
                this.InitViewResources();
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.CreateView = function (e) {
                return new e();
              }),
              (e.prototype.InitViewResources = function () {}),
              (e.prototype.GetClassName = function (e) {
                return e.name;
              }),
              (e.prototype.OnLoaded = function (e, t) {
                var a = this.GetClassName(e),
                  i = s.BaseUI;
                if (this.viewPath[a]) {
                  var n = this.CreateView(e);
                  if (((i = this.viewPath[a].depth), !this.UIDepthRoot[i])) {
                    var o = new Laya.Sprite();
                    (o.name = "UIRoot" + i), (o.zOrder = i), Laya.stage.addChild(o), (this.UIDepthRoot[i] = o);
                  }
                  var r = this.CreateView(this.viewPath[a].view);
                  n.Setup(r, i),
                    this.UIDepthRoot[i].addChild(r),
                    (this.hasLoadList[a] = n),
                    t && t(n),
                    this.loadingList.splice(this.loadingList.indexOf(a));
                }
              }),
              (e.prototype.ShowAsync = function (e, t, a, n) {
                console.log("_ShowAsync");
                var o = this.GetUI(e);
                if (o) return o.Show(), void (t && t(o));
                var s = this.GetClassName(e);
                if (-1 == this.loadingList.indexOf(s)) {
                  this.loadingList.push(s), console.log("ShowAsync View Name is " + s);
                  var l = this.viewPath[s];
                  if (l.resPath && l.resPath.length > 0) {
                    var h = r.Waitting;
                    a && (h = a), i["default"].Instance.LoadAsync(l.resPath, Laya.Handler.create(this, this.OnLoaded, [e, t]), h, n);
                  } else this.OnLoaded(e, t);
                }
              }),
              (e.prototype.Show = function (e) {
                var t = this.GetUI(e);
                if (t) return void t.Show();
                var a = this.GetClassName(e);
                console.log("Show View Name is " + a);
                var i = s.BaseUI,
                  n = this.CreateView(e);
                if (this.viewPath[a]) {
                  if (((i = this.viewPath[a].depth), !this.UIDepthRoot[i])) {
                    var o = new Laya.Sprite();
                    (o.name = "UIRoot" + i), (o.zOrder = i), Laya.stage.addChild(o), (this.UIDepthRoot[i] = o);
                  }
                  var r = this.CreateView(this.viewPath[a].view);
                  n.Setup(r, i), this.UIDepthRoot[i].addChild(r), (this.hasLoadList[a] = n);
                }
                return n;
              }),
              (e.prototype.GetActiveUI = function (e) {
                var t = this.GetUI(e);
                return t && t.viewObj.visible ? t : void 0;
              }),
              (e.prototype.GetUI = function (e) {
                var t = this.GetClassName(e),
                  a = this.hasLoadList[t];
                if (a) {
                  if (a.viewObj) return a;
                  delete this.hasLoadList[t];
                }
              }),
              (e.prototype.GetUIByName = function (e) {
                var t = this.hasLoadList[e];
                if (t) {
                  if (t.viewObj) return t;
                  delete this.hasLoadList[e];
                }
              }),
              (e.prototype.IsShowed = function (e) {
                if (-1 != this.loadingList.indexOf(e)) return !0;
                var t = this.GetUIByName(e);
                return t && t.viewObj.visible ? !0 : !1;
              }),
              (e.prototype.Hide = function (e) {
                var t = this.GetUI(e);
                t && t.Hide();
              }),
              (e.prototype.Close = function (e) {
                var t = this.GetClassName(e),
                  a = this.hasLoadList[t];
                a && (a.viewObj && a.Close(), delete this.hasLoadList[t]);
              }),
              (e.prototype.CloseAll = function () {
                for (var e in this.hasLoadList)
                  if ("MainView" != e) {
                    var t = this.hasLoadList[e];
                    t && (t.viewObj && t.Close(), delete this.hasLoadList[e]);
                  }
              }),
              (e.prototype.AdpteScreen = function (e) {
                // if (Laya.Browser.onMobile) {
                //   var t = 750 / Laya.Browser.width,
                //     a = 1334 / t,
                //     i = (Laya.Browser.height - a) * t;
                //   e.height += i;
                // }
              }),
              (e.prototype.ShowGameView = function (e) {
                var t = this;
                this._gameview
                  ? ((this._gameview.visible = !0), e && e(this._gameview))
                  : (this.ShowWaitting(!0),
                    Laya.loader.load(
                      "res/atlas/main.atlas",
                      new Laya.Handler(this, function () {
                        (t._gameview = new p["default"]()), Laya.Scene.root.addChild(t._gameview), e && e(t._gameview), t.ShowWaitting(!1);
                      })
                    ));
              }),
              (e.prototype.HideGameView = function () {
                this._gameview && (this._gameview.visible = !1);
              }),
              (e.prototype.ShowMatchingView = function () {
                return (
                  this._matchView ||
                    ((this._matchView = new y["default"]()), Laya.stage.addChild(this._matchView), Laya.stage.setChildIndex(this._matchView, 0)),
                  (this._matchView.visible = !0),
                  this._matchView
                );
              }),
              (e.prototype.CloseGameView = function () {
                Laya.Scene.root.removeChild(this._gameview), this._gameview && this._gameview.destroy(), (this._gameview = null);
              }),
              (e.prototype.ShowEndGameView = function () {
                return (
                  this._endView || ((this._endView = new f["default"]()), Laya.Scene.root.addChild(this._endView)),
                  (this._endView.visible = !0),
                  this._endView
                );
              }),
              (e.prototype.HideEndGameView = function () {
                this._endView && (this._endView.visible = !1);
              }),
              Object.defineProperty(e.prototype, "mGuideView", {
                get: function () {
                  return this._guideui || ((this._guideui = new c["default"]()), Laya.stage.addChild(this._guideui)), this._guideui;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.ShowLuckyTurnTableView = function (e) {
                var t = new u["default"]();
                Laya.Scene.root.addChild(t), t.Show(e);
              }),
              (e.prototype.ShowFreeGetAssets = function (e, t) {
                return !1;
              }),
              (e.prototype.ShowHandTip = function (e, t, a) {
                void 0 === t && (t = null), void 0 === a && (a = 500);
              }),
              (e.prototype.ShowTips = function (e, t, a) {
                var i = this;
                if ((void 0 === t && (t = 1500), void 0 === a && (a = -200), this.tipObjs.length <= 0)) {
                  var n = new l["default"]();
                  Laya.stage.addChild(n), this.tipObjs.push(n);
                }
                var o = this.tipObjs.pop();
                Laya.stage.setChildIndex(o, Laya.stage._children.length - 1),
                  o.Show(
                    e,
                    t,
                    Laya.Handler.create(
                      this,
                      function (e) {
                        (e.visible = !1), i.tipObjs.push(e);
                      },
                      [o],
                      !0
                    ),
                    a
                  );
              }),
              (e.prototype.ShowNotify = function (e, t) {
                this.notifyui || ((this.notifyui = new d["default"]()), Laya.Scene.root.addChild(this.notifyui), (this.notifyui.centerX = 0)),
                  this.notifyui.Show(e, t);
              }),
              (e.prototype.ShowDialogTip = function (e, t, a, i) {
                void 0 === a && (a = !1),
                  void 0 === i && (i = "确认"),
                  this.dialogTip || ((this.dialogTip = new g["default"]()), Laya.stage.addChild(this.dialogTip)),
                  this.dialogTip.Show(e, t, a, i);
              }),
              (e.prototype.CloseDialogTip = function () {
                this.dialogTip || (Laya.stage.removeChild(this.dialogTip), this.dialogTip.destroy(), (this.dialogTip = null));
              }),
              (e.prototype.ShowGainItemDialog = function (e, t, a) {
                void 0 === a && (a = null);
                var i = new _["default"]();
                Laya.stage.addChild(i), i.Show(e, t, a);
              }),
              (e.prototype.ShowGiftView = function (e, t) {
                var a = new m["default"]();
                Laya.stage.addChild(a), a.Show(e, t);
              }),
              (e.prototype.ShowWaitting = function (e, t) {
                if ((void 0 === t && (t = !0), Laya.Browser.onWeiXin)) {
                  var a = function () {
                    return n["default"].Instance.hideLoading();
                  };
                  e ? (n["default"].Instance.showLoading(""), t && Laya.timer.once(1e4, this, a)) : a();
                }
              }),
              (e.prototype.ShowLoading = function (e, t) {
                this.loadingUI
                  ? this.loadingUI.Show(e)
                  : ((this.loadingUI = new h["default"]()), Laya.stage.addChild(this.loadingUI), this.loadingUI.Show(e));
              }),
              Object.defineProperty(e.prototype, "IsLoadingVisible", {
                get: function () {
                  return this.loadingUI && this.loadingUI.visible;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.UpdateProgress = function (e) {
                this.loadingUI && this.loadingUI.visible && this.loadingUI.UpdateProgress(e);
              }),
              (e.prototype.SetLoadingBarVis = function (e) {
                this.loadingUI && this.loadingUI.SetProgressVisible(e);
              }),
              (e.prototype.ShowLoadingBannerAd = function () {
                this.loadingUI && this.loadingUI.ShowLoadingBanner();
              }),
              (e.prototype.ShowAuthBtn = function (e, t) {
                if (Laya.Browser.onWeiXin) {
                  var a = wx.getSystemInfoSync(),
                    i = (a.screenWidth, a.screenHeight),
                    o = i / Laya.stage.height,
                    s = n["default"].Instance.createUserInfoButton(
                      {
                        type: "text",
                        text: "",
                        style: {
                          left: 0,
                          top: t * o,
                          width: 45,
                          height: 55,
                        },
                      },
                      function (t) {
                        console.log("user info ", t), e && e(t), t && s.destroy();
                      }
                    );
                  return console.log("wx btn ", s.style), s;
                }
              }),
              e
            );
          })();
        a["default"] = b;
      },
      {
        "../data/Define": 5,
        "../view/DialogTip": 25,
        "../view/EndGameView": 26,
        "../view/GameView": 27,
        "../view/GiftView": 28,
        "../view/GuideView": 29,
        "../view/Loading": 30,
        "../view/LuckyTurnTableView": 31,
        "../view/MatchingView": 33,
        "../view/NewSkinView": 34,
        "../view/NotifyView": 35,
        "../view/Tips": 37,
        "./ResMgr": 14,
        "./WxApiMgr": 20,
      },
    ],
    19: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./GameMgr"),
          n = e("./ShareMgr"),
          o = e("./EventCenter"),
          s = e("./StatisMgr"),
          r = e("../data/Define"),
          l = r.KG.UserInfo,
          h = r.KG.ItemType,
          d = e("./../data/ConstValue"),
          c = d.CV.PlayerPrefs,
          u = e("./ConfMgr"),
          p = e("./WxApiMgr"),
          f = e("../utils/Tools"),
          g = (function () {
            function e() {
              (this._produceRatio = 1),
                (this._ratioEndTime = 0),
                (this._baseProduce = 0.4),
                (this.totalProduce = 0),
                (this._totalRunTimes = 0),
                (this._lastSid = 0),
                (this._hasMaxLevel = !1),
                (this._tryRole = -1);
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "userInfo", {
                get: function () {
                  return this._userInfo;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "gold", {
                get: function () {
                  return Number(this._userInfo.golds);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "diamonds", {
                get: function () {
                  return this._userInfo.diamonds;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "power", {
                get: function () {
                  return this._userInfo.power;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "level", {
                get: function () {
                  return this._userInfo.level;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "produceRatio", {
                get: function () {
                  return this._produceRatio;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "ratioEndTime", {
                get: function () {
                  return this._ratioEndTime;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "baseProduce", {
                get: function () {
                  return this._baseProduce * this._produceRatio;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.Init = function (e) {
                if ((e.jsonData || (e.jsonData = {}), e.jsonData[4])) this._userInfo = e.jsonData[4];
                else {
                  var t = c.getJson(c.Key_UserInfo);
                  t
                    ? (!t.maxSco || isNaN(t.maxSco)) && (t.maxSco = 0)
                    : ((t = new l()),
                      (t.golds = "0"),
                      (t.diamonds = 50),
                      (t.level = 1),
                      (t.power = 10),
                      (t.isNewUser = 1),
                      (t.guideId = 0),
                      (t.gId = 1),
                      (t.sId = 1),
                      (t.maxSco = 0),
                      (t.useAniId = 1),
                      (t.useRoleId = 1),
                      (t.roleList = []),
                      (t.aniList = [])),
                    (this._userInfo = t),
                    this.initPlayerRiles();
                }
                n["default"].Instance.SetShare(),
                  c.getNumber(c.Key_LastGetProduceTime) || c.setNumber(c.Key_LastGetProduceTime, Date.now()),
                  this.calculateOfflineProduce(),
                  Laya.timer.loop(5e3, this, this.calculateSecondsProduce);
                var a = c.getNumber(c.Key_NextGetFreeDiamondTime);
                if (
                  ((!a || i["default"].Instance.isNextDay) &&
                    (c.setNumber(c.Key_NextGetFreeDiamondTime, 0), c.setNumber(c.Key_GetFreeDiamondTimes, 0)),
                  this.IsHaveRole(d.CV.ConstValue.turnTableRoleId))
                ) {
                  var o = this.GetRandomRoles(0)[0];
                  o && (d.CV.ConstValue.turnTableRoleId = o.id);
                }
                i["default"].Instance.isNextDay && d.CV.PlayerPrefs.setNumber("jump_gq_times", 0), this.initTurnTable(), this.saveUserInfo();
              }),
              (e.prototype.AuthSuccess = function (e) {
                if (e && e.userInfo) {
                  var t = this._userInfo;
                  (t.nickName = e.userInfo.nickName), (t.faceurl = e.userInfo.avatarUrl), this.saveUserInfo();
                }
              }),
              (e.prototype.AddItem = function (e, t) {
                //集体刷新金币的方法
                var a = "";
                switch (e) {
                  case h.GOLD:
                    var i = Number(this._userInfo.golds);
                    (i += t), (this._userInfo.golds = i.toString()), (a = o["default"].Event_GoldChange);
                    break;

                  case h.DIAMOND:
                    (this._userInfo.diamonds += t), (a = o["default"].Event_DiamondChange);
                }
                o["default"].Instance.event(a, [t]);
                this.saveUserInfo(!0);
              }),
              (e.prototype.FreeGainGold = function (e) {
                var t = c.getNumber(c.Key_NextGetFreeDiamondTime),
                  a = c.getNumber(c.Key_GetFreeDiamondTimes);
                a++,
                  (t = Date.now() + 3 * a * 60 * 1e3),
                  c.setNumber(c.Key_NextGetFreeDiamondTime, t),
                  c.setNumber(c.Key_GetFreeDiamondTimes, a),
                  console.log("1增加金币：", e); //皮肤商店  看视频得80金币  皮肤试用页面的看视频得80金币
                this.AddItem(h.GOLD, e);
              }),
              (e.prototype.ChangeGuideId = function (e) {}),
              (e.prototype.saveUserInfo = function (e) {
                void 0 === e && (e = !1), this._userInfo && c.setJson(c.Key_UserInfo, this._userInfo);
              }),
              (e.prototype.ResetGuanQia = function () {
                (this.userInfo.sId = 1), this.saveUserInfo(!0);
              }),
              (e.prototype.IsOpenBannerTouch = function () {
                if (i["default"].isShenHe) return !1;
                if (!i["default"].gameConf.wcSceneList.includes(i["default"].registerScene)) return !1;
                var e = this._totalRunTimes,
                  t = i["default"].gameConf.wuChu,
                  a = e % t.length;
                return 1 == t[a] ? !0 : !1;
              }),
              (e.prototype.CompleteGuanQia = function (e, t) {
                if ((this._totalRunTimes++, (this._hasMaxLevel = !1), (this._lastSid = this._userInfo.sId), !e))
                  return (this.userInfo.sId = 1), this.saveUserInfo(!0), !1;
                var a = this.userInfo.gId,
                  i = this.userInfo.sId + 1;
                return (
                  console.log("2增加金币：", t), //过关时增加金币
                  this.AddItem(h.GOLD, t),
                  u["default"].Instance.GetGuanQiaInfo(a, i)
                    ? ((this.userInfo.sId = i),
                      p["default"].Instance.writeRankData([
                        {
                          key: "score",
                          value: 5 * (a - 1) + i + "",
                        },
                      ]),
                      this.saveUserInfo(!0),
                      !1)
                    : (a++,
                      u["default"].Instance.GetGuanQiaInfo(a, 1)
                        ? ((this.userInfo.gId = a),
                          (this.userInfo.sId = 1),
                          p["default"].Instance.writeRankData([
                            {
                              key: "score",
                              value: 5 * (a - 1) + 1 + "",
                            },
                          ]),
                          this.saveUserInfo(!0),
                          !0)
                        : ((this._hasMaxLevel = !0), !1))
                );
              }),
              (e.prototype.Revive = function () {
                this._lastSid > 0 && ((this.userInfo.sId = this._lastSid), this.saveUserInfo(!0));
              }),
              (e.prototype.Jump = function () {
                // var e = c.getNumber("jump_gq_times");
                // e || (e = 0), 5 >= e && (e++, this.CompleteGuanQia(!0, 0)), c.setNumber("jump_gq_times", e);
                var e = c.getNumber("jump_gq_times");
                if (e == undefined) {
                  e = 1;
                }
                this.CompleteGuanQia(!0, 0), c.setNumber("jump_gq_times", e);
              }),
              (e.prototype.GetNextGuanQiaIDs = function (e) {
                void 0 === e && (e = !1);
                var t = this.userInfo.gId,
                  a = this.userInfo.sId;
                if (e) {
                  if (u["default"].Instance.GetGuanQiaInfo(t, a + 1)) return [t, a + 1];
                  if (u["default"].Instance.GetGuanQiaInfo(t + 1, 1)) return [t + 1, 1];
                } else if (this._hasMaxLevel) return u["default"].Instance.GetRandomGq(f["default"].GetRandomNum(2, t));
                return [t, a];
              }),
              (e.prototype.calculateOfflineProduce = function () {
                var e = Date.now() - c.getNumber(c.Key_LastGetProduceTime);
                if (!(0 > e)) {
                  var t = c.getNumber(c.Key_TotalProduce);
                  t ? (e > 25e4 ? (t = 100) : (t += Math.floor((e / 1e3) * 0.4))) : (t = 0),
                    t > 100 && (t = 100),
                    (this.totalProduce = t),
                    c.setNumber(c.Key_TotalProduce, t);
                }
              }),
              (e.prototype.calculateSecondsProduce = function () {
                var e = c.getNumber(c.Key_TotalProduce);
                e >= 100 ||
                  ((this.totalProduce += Math.floor(5 * this.baseProduce)),
                  this.totalProduce > 100 && (this.totalProduce = 100),
                  c.setNumber(c.Key_TotalProduce, this.totalProduce));
              }),
              (e.prototype.AddRatioProduce = function (e, t) {
                (this._produceRatio = e),
                  (this._ratioEndTime = Date.now() + 1e3 * t),
                  c.setJson(c.Key_ProdeceRatio, {
                    ratio: e,
                    end: this._ratioEndTime,
                  });
              }),
              (e.prototype.GetOnlineProduce = function () {
                var e = 2e4;
                return (
                  this.totalProduce >= 100 && (e = 0),
                  {
                    num: Math.floor(this.totalProduce),
                    leftTime: e,
                  }
                );
              }),
              (e.prototype.GainOnlinProduce = function (e) {
                var t = Math.floor(this.totalProduce * e);
                console.log("3增加金币：", t), //首页在线收益 翻倍领取和普通领取
                  this.AddItem(h.GOLD, t),
                  c.setNumber(c.Key_LastGetProduceTime, Date.now()),
                  (this.totalProduce = 0),
                  c.setNumber(c.Key_TotalProduce, 0),
                  o["default"].Instance.event(o["default"].Event_GainProduce);
                var a = "领取收益";
                return e > 1 && (a = "翻倍领取收益"), s["default"].SendEvent(a, {}), t;
              }),
              Object.defineProperty(e.prototype, "tryRoleID", {
                get: function () {
                  return this._tryRole;
                },
                set: function (e) {
                  this._tryRole = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "curUseRoleId", {
                get: function () {
                  return this._userInfo.useRoleId;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "curUseAniId", {
                get: function () {
                  return this._userInfo.useAniId;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.IsHaveRole = function (e) {
                return -1 != this._userInfo.roleList.indexOf(e);
              }),
              (e.prototype.IsHaveAni = function (e) {
                return -1 != this._userInfo.aniList.indexOf(e);
              }),
              (e.prototype.BuyRole = function (e) {
                return this.IsHaveRole(e) ? !1 : (this._userInfo.roleList.push(e), this.saveUserInfo(), !0);
              }),
              (e.prototype.UseRole = function (e) {
                return this.IsHaveRole(e) ? ((this._userInfo.useRoleId = e), this.saveUserInfo(), !0) : !1;
              }),
              (e.prototype.BuyAni = function (e) {
                return this.IsHaveAni(e) ? !1 : (this._userInfo.aniList.push(e), this.saveUserInfo(), !0);
              }),
              (e.prototype.UseAni = function (e) {
                return this.IsHaveAni(e) ? ((this._userInfo.useAniId = e), this.saveUserInfo(), !0) : !1;
              }),
              (e.prototype.GetRandomRoles = function (e) {
                var t = u["default"].Instance.roleCfg,
                  a = [];
                for (var i in t) this.IsHaveRole(t[i].id) || a.push(t[i]);
                for (var n = f["default"].GetRandomNumList(0, a.length - 1, e, !1, !0), o = [], i = 0; i < n.length; i++) a[i] && o.push(a[n[i]]);
                return o;
              }),
              (e.prototype.initPlayerRiles = function () {
                var e = u["default"].Instance.roleCfg;
                for (var t in e) 0 != e[t].condition || this.IsHaveRole(e[t].id) || this._userInfo.roleList.push(e[t].id);
                var a = u["default"].Instance.roleAniCfg;
                for (var t in a) 0 != a[t].condition || this.IsHaveAni(a[t].id) || this._userInfo.aniList.push(a[t].id);
              }),
              Object.defineProperty(e.prototype, "trunTableInfo", {
                get: function () {
                  return this._trunTable;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.initTurnTable = function () {
                var e = c.getJson(c.Key_TurnTable);
                if (e) {
                  if (e.ticketNum < 2) {
                    var t = Math.floor(((Date.now() - e.lastTurnTime) / 12) * 60 * 60 * 1e3),
                      a = e.ticketNum + t;
                    (a = f["default"].Clamp(a, 0, 2)), (e.ticketNum = 2);
                  }
                  i["default"].Instance.isNextDay && (e.turnTimes = 0);
                } else {
                  var n = new r.KG.TurnTableInfo();
                  (n.ticketNum = 2), (n.turnTimes = 0), (n.lastTurnTime = Date.now()), (e = n);
                }
                (this._trunTable = e), c.setJson(c.Key_TurnTable, this._trunTable);
              }),
              (e.prototype.StartTurnTable = function (e) {
                if (e) {
                  if (this._trunTable.ticketNum <= 0) return !1;
                  this._trunTable.ticketNum--;
                }
                return (this._trunTable.lastTurnTime = Date.now()), this._trunTable.turnTimes++, c.setJson(c.Key_TurnTable, this._trunTable), !0;
              }),
              (e.prototype.AddTurnTableTisket = function (e) {
                console.log("获得转盘卷：————————————", e);
                this._trunTable && (this._trunTable.ticketNum++, c.setJson(c.Key_TurnTable, this._trunTable));
              }),
              (e.prototype.SaveUserData = function () {
                this.saveUserInfo(!0), console.log("SaveUserData ", this._userInfo);
              }),
              (e.prototype.ClearAllData = function () {
                Laya.LocalStorage.clear();
                var e = this._userInfo;
                (e.golds = "0"),
                  (e.diamonds = 50),
                  (e.level = 1),
                  (e.power = 10),
                  (e.guideId = 0),
                  (e.isNewUser = 1),
                  (e.maxSco = 0),
                  (e.gId = 1),
                  (e.sId = 1),
                  (e.useAniId = 1),
                  (e.useRoleId = 1),
                  (e.roleList = []),
                  (e.aniList = []),
                  this.SaveUserData();
              }),
              (e.prototype.sendServer = function (e, t) {}),
              e
            );
          })();
        a["default"] = g;
      },
      {
        "../data/Define": 5,
        "../utils/Tools": 22,
        "./../data/ConstValue": 4,
        "./ConfMgr": 10,
        "./EventCenter": 11,
        "./GameMgr": 12,
        "./ShareMgr": 15,
        "./StatisMgr": 17,
        "./WxApiMgr": 20,
      },
    ],
    20: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./EventCenter"),
          n = e("../utils/Tools"),
          o = e("../data/ConstValue"),
          s = e("./ShareMgr"),
          r = e("./StatisMgr"),
          l = e("./GameMgr"),
          h = (function () {
            function e() {
              (this.SHOW_RETRY_TIMES = 3),
                (this._isLongScreen = !1),
                (this.balnkList = [
                  1005, 1006, 1053, 1042, 1027, 1054, 1048, 1031, 1012, 1047, 1011, 1025, 1072, 1032, 1049, 1013, 1017, 1024, 1030, 1059, 0,
                ]),
                (this.islogining = !1),
                (this._bannerAds = {}),
                (this._gameBannerIds = ["PBgAANeLF1zDZxEY", "PBgAANeLF1zFYm_E", "PBgAANeLF1zJBbWw"]),
                (this._noBannerTimes = 0),
                (this.lastupdata = 0);
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && (e._instance = new e()), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.Setup = function () {
                if (
                  ((this._isLongScreen = 750 / 1344 > Laya.Browser.width / Laya.Browser.height),
                  wx.onShow(this.onAppShow.bind(this)),
                  wx.onHide(this.onAppHide.bind(this)),
                  (this._options = wx.getLaunchOptionsSync()),
                  wx.showShareMenu({
                    withShareTicket: !0,
                  }),
                  (this._openContext = wx.getOpenDataContext()),
                  wx.setKeepScreenOn({
                    keepScreenOn: !0,
                    success: null,
                    fail: null,
                    complete: null,
                  }),
                  "function" == typeof wx.getUpdateManager)
                ) {
                  var e = wx.getUpdateManager();
                  e.onCheckForUpdate(function (e) {
                    console.log("hasUpdate ", e.hasUpdate);
                  }),
                    e.onUpdateReady(function () {
                      wx.showModal({
                        title: "更新提示",
                        showCancel: !1,
                        content: "新版本已经准备好，是否重启应用？",
                        success: function (t) {
                          t.confirm && e.applyUpdate();
                        },
                      });
                    }),
                    e.onUpdateFailed(function () {});
                }
                this.checkSceneId(), console.log("wxapi Setup ", JSON.stringify(this._options || ""));
              }),
              (e.prototype.onAppShow = function (e) {
                (this._options = e),
                  console.log("wx onAppShow ", JSON.stringify(this._options || "")),
                  i["default"].Instance.event(i["default"].Event_ApplicationPaused, !1),
                  this.checkSceneId();
              }),
              (e.prototype.onAppHide = function () {
                console.log("wx onAppHide "), i["default"].Instance.event(i["default"].Event_ApplicationPaused, !0);
              }),
              (e.prototype.onError = function (e) {
                console.log("全局运行错误：", e);
              }),
              (e.prototype.checkSceneId = function () {
                var e = this.scene,
                  t = this.sharedData.sysScene;
                if (t && "12121" == t) {
                  var a = this.sharedData.valid;
                  "0" == a && (e = 1011);
                }
                o.CV.PlayerPrefs.getNumber("register_scene") || o.CV.PlayerPrefs.setNumber("register_scene", e),
                  (l["default"].registerScene = o.CV.PlayerPrefs.getNumber("register_scene"));
                var i = !this.balnkList.includes(e);
                (s["default"].Instance.hasSharePower = i),
                  console.log("本次进入场景：", this.scene, " 是否白名单：", i),
                  i ? r["default"].SendEvent("白名单", {}) : r["default"].SendEvent("黑名单", {});
              }),
              Object.defineProperty(e.prototype, "appShowOptions", {
                get: function () {
                  return this._options;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "sharedData", {
                get: function () {
                  return this._options && this._options.query;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "scene", {
                get: function () {
                  return this._options && this._options.scene;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.clearSharedData = function () {
                this._options.query = null;
              }),
              (e.prototype.login = function (e, t) {
                var a = this;
                if ((void 0 === t && (t = ""), !this.islogining)) {
                  this.islogining = !0;
                  var i = Laya.timer.currTimer;
                  wx.login({
                    success: function (t) {
                      var n = Laya.timer.currTimer - i;
                      console.log("WXLogin success [cost:" + n + "ms]: " + JSON.stringify(t)), e && e(t.code), (a.islogining = !1);
                    },
                    fail: null,
                    complete: function () {
                      return a.hideLoading();
                    },
                  });
                }
              }),
              (e.prototype.getSystemInfo = function (e) {
                var t = this;
                return this._systemInfo
                  ? void (e && e(this._systemInfo))
                  : void wx.getSystemInfo({
                      success: function (e) {
                        return (t._systemInfo = e);
                      },
                      fail: function () {
                        return console.error("wx.getSystemInfo: fail");
                      },
                      complete: function () {
                        return e && e(t._systemInfo);
                      },
                    });
              }),
              (e.prototype.createUserInfoButton = function (e, t) {
                var a,
                  i = wx.createUserInfoButton(e);
                return (
                  i.onTap(function (e) {
                    -1 !== e.errMsg.indexOf("ok") ? (a = e) : console.info("wx.createUserInfoButton: fail"), t && t(a);
                  }),
                  i
                );
              }),
              (e.prototype.getUserInfo = function (e) {
                var t;
                wx.getUserInfo({
                  withCredentials: null,
                  lang: null,
                  success: function (e) {
                    return (t = e);
                  },
                  fail: function () {
                    return console.error("wx.getUserInfo: fail");
                  },
                  complete: function () {
                    return e && e(t && t.userInfo);
                  },
                });
              }),
              (e.prototype.getAuthSetting = function (e) {
                var t,
                  a = this;
                wx.getSetting({
                  success: function (e) {
                    return (t = a.parseAuthSetting(e.authSetting));
                  },
                  fail: function () {
                    return console.error("wx.getSetting: fail");
                  },
                  complete: function () {
                    return e && e(t);
                  },
                });
              }),
              (e.prototype.parseAuthSetting = function (e) {
                return {
                  userInfo: e["scope.userInfo"],
                  userLocation: e["scope.userLocation"],
                  address: e["scope.address"],
                  invoiceTitle: e["scope.invoiceTitle"],
                  werun: e["scope.werun"],
                  record: e["scope.record"],
                  writePhotosAlbum: e["scope.writePhotosAlbum"],
                  camera: e["scope.camera"],
                };
              }),
              (e.prototype.shareAppMessage = function (e, t, a, i) {
                wx.aldShareAppMessage({
                  title: e,
                  imageUrl: t,
                  query: a,
                  ald_desc: i,
                });
              }),
              (e.prototype.onShareAppMessage = function (e, t, a, i) {
                wx.aldOnShareAppMessage(function () {
                  return {
                    title: e,
                    imageUrl: t,
                    query: a,
                    ald_desc: i,
                  };
                });
              }),
              (e.prototype.showToast = function (e) {
                wx.showToast(e);
              }),
              (e.prototype.hideToast = function () {
                wx.hideToast();
              }),
              (e.prototype.showLoading = function (e) {
                wx.showLoading({
                  title: e,
                  mask: !0,
                });
              }),
              (e.prototype.hideLoading = function () {
                wx.hideLoading();
              }),
              (e.prototype.showModal = function (e, t, a, i) {
                wx.showModal({
                  title: e,
                  content: t,
                  showCancel: a,
                  success: function (e) {
                    i && i(e.confirm);
                  },
                });
              }),
              (e.prototype.vibrateScreen = function (e) {
                Laya.Browser.onWeiXin && (e ? wx.vibrateLong({}) : wx.vibrateShort({}));
              }),
              (e.prototype.triggerGC = function () {
                Laya.Browser.onWeiXin && wx.triggerGC();
              }),
              (e.prototype.exitGame = function () {
                Laya.Browser.onWeiXin && wx.exitMiniProgram();
              }),
              (e.prototype.navigateToMiniProgram = function (e, t, a) {
                Laya.Browser.onWeiXin &&
                  wx.navigateToMiniProgram({
                    appId: e,
                    path: t,
                    complete: function (t) {
                      console.log("call navigateToMiniProgram complete --\x3e ", e, t), a && a("navigateToMiniProgram:ok" == t.errMsg);
                    },
                  });
              }),
              (e.prototype.loadSubpackage = function () {
                return wx.loadSubpackage({
                  name: "rank",
                  success: function (e) {
                    console.log("开始加载分包");
                  },
                  fail: function (e) {},
                });
              }),
              (e.prototype.onVideoAdClose = function (e) {
                var t = (e && e.isEnded) || void 0 === e;
                this.closeCallback && this.closeCallback(t);
              }),
              (e.prototype.showVideo = function (e) {
                var t = this;
                void 0 === e && (e = 0),
                  this._videoAd &&
                    this._videoAd.video &&
                    this._videoAd.video
                      .load()
                      ["catch"](function (e) {
                        console.log("视频广告load失败", e);
                      })
                      .then(function () {
                        t._videoAd.video.show()["catch"](function (e) {
                          console.log("视频广告show失败", e);
                        });
                      });
              }),
              (e.prototype.runShowCallback = function (e, t) {
                this.showCallback && (this.showCallback(e, t), (this.showCallback = null));
              }),
              (e.prototype.videoError = function (e) {
                console.log("onError : 视频广告错误", e), this.runShowCallback(!1, e);
              }),
              (e.prototype.videoLoaded = function () {
                console.log("视频广告加载成功"), this._videoAd && (this._videoAd.isLoaded = !0);
              }),
              (e.prototype.createVideoAd = function (e) {
                var t = this;
                if (Laya.Browser.onWeiXin)
                  if (((this.showCallback = null), this._videoAd && this._videoAd.video)) {
                    var a = wx.createRewardedVideoAd({
                      adUnitId: e,
                    });
                    this._videoAd = {
                      video: a,
                      adUnitId: e,
                      isLoaded: !1,
                    };
                  } else {
                    var a = wx.createRewardedVideoAd({
                      adUnitId: e,
                    });
                    (this._videoAd = {
                      video: a,
                      adUnitId: e,
                      isLoaded: !1,
                    }),
                      a.onClose(function (e) {
                        return t.onVideoAdClose(e);
                      }),
                      a.onError(function (e) {
                        return t.videoError(e);
                      }),
                      a.onLoad(function () {
                        return t.videoLoaded();
                      });
                  }
              }),
              (e.prototype.showVideoAd = function (e, t, a) {
                (this.closeCallback = t),
                  Laya.Browser.onWeiXin
                    ? ((this._videoAd && this._videoAd.adUnitId == e) || this.createVideoAd(e), (this.showCallback = a), this.showVideo())
                    : Laya.timer.callLater(this, this.onVideoAdClose);
              }),
              (e.prototype.showBannerAd = function (e, t, a, i) {
                var o = this;
                void 0 === i && (i = !1);
                var s = wx.getSystemInfoSync(),
                  r = (s.screenHeight, this._bannerAds[e]);
                if ((a && r && r.banner && (r.banner.destroy(), (r = null), delete this._bannerAds[e]), !r || !r.banner)) {
                  var l;
                  if (this._noBannerTimes > 5 && this.checkSDKversion(275)) {
                    var h = n["default"].GetRandomNum(0, 2),
                      d = this._gameBannerIds[h],
                      c = {
                        adUnitId: d,
                        style: {
                          left: 0,
                          top: 0,
                        },
                      };
                    l = wx.createGameBanner(c);
                  } else {
                    var u = i ? 0.8 : 1,
                      c = {
                        adUnitId: e,
                        style: {
                          left: 0,
                          top: 0,
                          width: s.screenWidth * u,
                          height: 80,
                        },
                      };
                    l = wx.createBannerAd(c);
                  }
                  return (
                    (this._bannerAds[e] = {
                      banner: l,
                      isshow: t,
                      isshowing: !1,
                    }),
                    l.onLoad(function () {
                      console.log("banner广告加载成功,"), o._bannerAds[e].isshow && (l.show(), (o._bannerAds[e].isshowing = !0));
                    }),
                    l.onError(function (t) {
                      console.log("banner广告加载失败,", t), delete o._bannerAds[e], l.destroy(), o._noBannerTimes++;
                    }),
                    void l.onResize(function (e) {
                      var t = s.screenHeight;
                      if (o._noBannerTimes <= 5) {
                        l.style.left = s.screenWidth / 2 - l.style.realWidth / 2;
                        var a = l.style.realHeight;
                        (t -= a), o._isLongScreen && -1 != s.model.indexOf("iPhone") && (t -= 20);
                      }
                      l.style.top = t;
                    })
                  );
                }
                (r.isshow = t), t ? (r.banner.show(), (r.isshowing = !0)) : (r.banner.hide(), (r.isshowing = !1));
              }),
              (e.prototype.setBannerAdVis = function (e, t) {
                if ((void 0 === t && (t = !0), !Laya.Browser.onWeiXin)) return !1;
                var a = this._bannerAds[e];
                return a && a.banner
                  ? a
                    ? ((a.isshow = t), t ? (a.banner.show(), (a.isshowing = !0)) : (a.banner.hide(), (a.isshowing = !1)), !0)
                    : !1
                  : (delete this._bannerAds[e], !1);
              }),
              (e.prototype.getVisibleBannerId = function () {
                for (var e in this._bannerAds) {
                  var t = this._bannerAds[e];
                  if (t.banner && t.isshowing) return e;
                }
              }),
              (e.prototype.createInterstitialAd = function (e) {
                var t = this;
                if (Laya.Browser.onWeiXin) {
                  var a = wx.getSystemInfoSync(),
                    i = a.SDKVersion.replace(/\./g, "");
                  if (!(Number(i) < 260 || (this._interstitialAds || (this._interstitialAds = {}), this._interstitialAds[e]))) {
                    var n = wx.createInterstitialAd({
                      adUnitId: e,
                    });
                    n.onError(function (e) {
                      console.log("插屏广告创建失败，", e);
                    }),
                      n.onLoad(function () {
                        console.log("插屏广告加载成功"), (t._interstitialAds[e] = n);
                      }),
                      n.onClose(function () {
                        console.log("关闭插屏广告"), t._closeInterstitialAds && t._closeInterstitialAds();
                      });
                  }
                }
              }),
              (e.prototype.showInterstitialAd = function (e, t, a) {
                var i = this;
                Laya.Browser.onWeiXin &&
                  this._interstitialAds &&
                  this._interstitialAds[e] &&
                  ((this._closeInterstitialAds = a),
                  this._interstitialAds[e].show().then(
                    function (e) {
                      console.log("插屏广告显示成功"), t && t(!0);
                    },
                    function (a) {
                      console.log("插屏广告显示失败", a), " no ad data" == a.errMsg && i.createInterstitialAd(e), t && t(!1);
                    }
                  ));
              }),
              (e.prototype.writeRankData = function (e) {
                Laya.Browser.onWeiXin &&
                  this._openContext.postMessage({
                    cmd: d.WRITE_RANK_DATA,
                    data: e,
                  });
              }),
              (e.prototype.openRank = function (e, t) {
                Laya.Browser.onWeiXin &&
                  (t
                    ? this._openContext.postMessage({
                        cmd: d.OPEN_GROUP_RANK,
                        data: {
                          shareTicket: t,
                          keys: [e],
                        },
                      })
                    : this._openContext.postMessage({
                        cmd: d.OPEN_FRIENDS_RANK,
                        data: [e],
                      }));
              }),
              (e.prototype.colseRank = function () {
                Laya.Browser.onWeiXin &&
                  (Laya.stage.removeChild(this._rankSprite),
                  (this._rankSprite = null),
                  (this._rankTexture = null),
                  this._openContext.postMessage({
                    cmd: d.CLOSE_RANK,
                  }));
              }),
              (e.prototype.initTranscend = function (e) {
                Laya.Browser.onWeiXin &&
                  (this._openContext.postMessage({
                    cmd: d.INIT_TRANSCEND,
                    data: e,
                  }),
                  (this.lastupdata = Laya.timer.currTimer));
              }),
              (e.prototype.updateTranscend = function (e) {
                Laya.Browser.onWeiXin &&
                  this._rankTexture &&
                  (Laya.timer.currTimer - this.lastupdata > 20 &&
                    this._rankTexture.bitmap.alwaysChange &&
                    (this._rankTexture.bitmap.alwaysChange = !1),
                  Laya.timer.currTimer - this.lastupdata > 3e3 &&
                    (console.log("updateTranscend:", e.height),
                    (this.lastupdata = Laya.timer.currTimer),
                    (this._rankTexture.bitmap.alwaysChange = !0),
                    this._openContext.postMessage({
                      cmd: d.SHOW_TRANSCEND,
                      data: e,
                    })));
              }),
              (e.prototype.showCanvas = function (e, t) {
                var a = this;
                void 0 === t && (t = !0);
                var i = window.sharedCanvas;
                (i.width = Laya.stage.width),
                  (i.height = 600),
                  Laya.timer.once(500, this, function () {
                    (a._rankSprite = new Laya.Sprite()),
                      (a._rankSprite.zOrder = 1e3),
                      a._rankSprite.pos(e.x, e.y),
                      Laya.stage.addChild(a._rankSprite),
                      (a._rankTexture = new Laya.Texture(i)),
                      (a._rankTexture.bitmap.alwaysChange = t),
                      a._rankSprite.graphics.drawTexture(a._rankTexture, 0, 0, a._rankTexture.width, a._rankTexture.height);
                  });
                var n = Laya.stage._canvasTransform,
                  o = new Laya.Matrix(n.a, 0, 0, n.d, e.x * n.a, e.y * n.d);
                this._openContext.postMessage({
                  cmd: d.SET_CANVAS_SIZE,
                  data: {
                    matrix: o,
                  },
                });
              }),
              (e.prototype.changeMatrix = function (e) {
                if (Laya.Browser.onWeiXin) {
                  var t = Laya.stage._canvasTransform,
                    a = new Laya.Matrix(t.a, 0, 0, t.d, e.x * t.a, e.y * t.d);
                  this._openContext.postMessage({
                    cmd: d.SET_CANVAS_SIZE,
                    data: {
                      matrix: a,
                    },
                  });
                }
              }),
              (e.prototype.CaptureScreen = function (e, t, a, i, n) {
                Laya.Browser.onWeiXin &&
                  ((i = i ? i : Laya.stage.width),
                  (n = n ? n : Laya.stage.height),
                  (t = t ? t : 0),
                  (a = a ? a : 0),
                  window.canvas.toTempFilePath({
                    x: t,
                    y: a,
                    width: i,
                    height: n,
                    destWidth: i,
                    destHeight: n,
                    quality: 0.5,
                    success: function (t) {
                      e && e(t.tempFilePath);
                    },
                    fail: function (t) {
                      console.log("截屏失败：", t), e && e(void 0);
                    },
                  }));
              }),
              (e.prototype.checkSDKversion = function (e) {
                var t = wx.getSystemInfoSync(),
                  a = t.SDKVersion.replace(/\./g, "");
                return Number(a) >= e;
              }),
              e
            );
          })();
        a["default"] = h;
        var d;
        !(function (e) {
          (e[(e.WRITE_RANK_DATA = 0)] = "WRITE_RANK_DATA"),
            (e[(e.SET_CANVAS_SIZE = 1)] = "SET_CANVAS_SIZE"),
            (e[(e.OPEN_FRIENDS_RANK = 2)] = "OPEN_FRIENDS_RANK"),
            (e[(e.OPEN_GROUP_RANK = 3)] = "OPEN_GROUP_RANK"),
            (e[(e.INIT_TRANSCEND = 4)] = "INIT_TRANSCEND"),
            (e[(e.SHOW_TRANSCEND = 5)] = "SHOW_TRANSCEND"),
            (e[(e.CLOSE_RANK = 6)] = "CLOSE_RANK");
        })(d || (d = {}));
        (function () {
          function e() {}
          return (e.SCORE = "score"), (e.PW_TIMES = "pw_times"), (e.PW_MAX = "pw_max"), e;
        })();
      },
      {
        "../data/ConstValue": 4,
        "../utils/Tools": 22,
        "./EventCenter": 11,
        "./GameMgr": 12,
        "./ShareMgr": 15,
        "./StatisMgr": 17,
      },
    ],
    21: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i,
          n = Laya.View,
          o = Laya.Scene,
          s = Laya.ClassUtils.regClass;
        !(function (e) {
          var t;
          !(function (e) {
            var t = (function (e) {
              function t() {
                return e.call(this) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.createChildren = function () {
                  e.prototype.createChildren.call(this), this.createView(t.uiView);
                }),
                (t.uiView = {
                  type: "Scene",
                  props: {
                    width: 125,
                    height: 165,
                  },
                  compId: 2,
                  child: [
                    {
                      type: "Image",
                      props: {
                        y: 0,
                        x: 0,
                        width: 125,
                        var: "img_bg",
                        skin: "unpack/ad/bg_gg_0.png",
                        height: 165,
                      },
                      compId: 3,
                    },
                    {
                      type: "Image",
                      props: {
                        y: 5,
                        x: 6,
                        width: 113,
                        var: "img_icon",
                        skin: "unpack/ad/bg_txk.png",
                        height: 115,
                      },
                      compId: 4,
                    },
                    {
                      type: "Image",
                      props: {
                        y: 5,
                        x: 4,
                        width: 117,
                        var: "img_kuang",
                        skin: "unpack/ad/bg_txk.png",
                        height: 117,
                      },
                      compId: 8,
                    },
                    {
                      type: "Image",
                      props: {
                        y: 14,
                        x: 13,
                        width: 25,
                        var: "img_redpoint",
                        skin: "unpack/img_red.png",
                        scaleY: 1.08,
                        scaleX: 1.08,
                        height: 25,
                        anchorY: 0.5,
                        anchorX: 0.5,
                      },
                      compId: 6,
                    },
                    {
                      type: "Label",
                      props: {
                        y: 142,
                        x: 62,
                        width: 115,
                        var: "lab_name",
                        valign: "middle",
                        text: "label",
                        overflow: "hidden",
                        height: 25,
                        fontSize: 20,
                        color: "#fbfbfb",
                        bold: !0,
                        anchorY: 0.5,
                        anchorX: 0.5,
                        align: "center",
                      },
                      compId: 5,
                    },
                  ],
                  animations: [
                    {
                      nodes: [
                        {
                          target: 6,
                          keyframes: {
                            scaleY: [
                              {
                                value: 0.9,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleY",
                                index: 0,
                              },
                              {
                                value: 1.1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleY",
                                index: 10,
                              },
                              {
                                value: 0.9,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleY",
                                index: 15,
                              },
                              {
                                value: 1.1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleY",
                                index: 18,
                              },
                              {
                                value: 0.9,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleY",
                                index: 25,
                              },
                            ],
                            scaleX: [
                              {
                                value: 0.9,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleX",
                                index: 0,
                              },
                              {
                                value: 1.1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleX",
                                index: 10,
                              },
                              {
                                value: 0.9,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleX",
                                index: 15,
                              },
                              {
                                value: 1.1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleX",
                                index: 18,
                              },
                              {
                                value: 0.9,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 6,
                                key: "scaleX",
                                index: 25,
                              },
                            ],
                          },
                        },
                      ],
                      name: "redPointAni",
                      id: 1,
                      frameRate: 24,
                      action: 0,
                    },
                  ],
                  loadList: ["unpack/ad/bg_gg_0.png", "unpack/ad/bg_txk.png", "unpack/img_red.png"],
                  loadList3D: [],
                }),
                t
              );
            })(o);
            (e.adItemUI = t), s("ui.adComponent.adItemUI", t);
            var a = (function (e) {
              function t() {
                return e.call(this) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.createChildren = function () {
                  e.prototype.createChildren.call(this), this.createView(t.uiView);
                }),
                (t.uiView = {
                  type: "Scene",
                  props: {
                    width: 650,
                    mouseThrough: !0,
                    height: 900,
                  },
                  compId: 2,
                  child: [
                    {
                      type: "Image",
                      props: {
                        y: -588,
                        x: -675,
                        width: 2e3,
                        var: "img_mask",
                        skin: "unpack/ad/bg_d.png",
                        height: 2e3,
                        alpha: 0.2,
                        sizeGrid: "21,20,19,22",
                      },
                      compId: 10,
                    },
                    {
                      type: "Sprite",
                      props: {
                        y: 17,
                        x: 227,
                        texture: "unpack/ad/bg_rmtj.png",
                      },
                      compId: 6,
                    },
                    {
                      type: "Image",
                      props: {
                        y: 134,
                        x: 6,
                        var: "btn_open",
                        skin: "unpack/ad/img_ct_01.png",
                      },
                      compId: 8,
                    },
                    {
                      type: "Image",
                      props: {
                        y: 132,
                        x: 11,
                        width: 25,
                        skin: "unpack/img_red.png",
                        height: 25,
                      },
                      compId: 9,
                    },
                    {
                      type: "Image",
                      props: {
                        width: 560,
                        top: 70,
                        skin: "unpack/ad/bg_ggd.png",
                        right: 0,
                        height: 800,
                        bottom: 0,
                        sizeGrid: "108,0,102,64",
                      },
                      compId: 5,
                    },
                    {
                      type: "List",
                      props: {
                        width: 510,
                        var: "box_list",
                        top: 100,
                        spaceX: 3,
                        left: 125,
                        height: 750,
                      },
                      compId: 3,
                      child: [
                        {
                          type: "adItem",
                          props: {
                            runtime: "view/ad/AdItem.ts",
                            renderType: "render",
                          },
                          compId: 4,
                        },
                      ],
                    },
                  ],
                  loadList: ["unpack/ad/bg_d.png", "unpack/ad/bg_rmtj.png", "unpack/ad/img_ct_01.png", "unpack/img_red.png", "unpack/ad/bg_ggd.png"],
                  loadList3D: [],
                }),
                t
              );
            })(o);
            (e.adListUI = a), s("ui.adComponent.adListUI", a);
            var i = (function (e) {
              function t() {
                return e.call(this) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.createChildren = function () {
                  e.prototype.createChildren.call(this), this.createView(t.uiView);
                }),
                (t.uiView = {
                  type: "Scene",
                  props: {
                    width: 750,
                    height: 1334,
                  },
                  compId: 2,
                  child: [
                    {
                      type: "Image",
                      props: {
                        skin: "unpack/img_bg_d0.png",
                        scaleY: 1.6,
                        scaleX: 1.6,
                      },
                      compId: 3,
                    },
                    {
                      type: "Box",
                      props: {
                        width: 750,
                        right: 0,
                        left: 0,
                        height: 1133,
                        centerY: -75,
                      },
                      compId: 8,
                      child: [
                        {
                          type: "Sprite",
                          props: {
                            y: 0,
                            x: 200,
                            texture: "unpack/bg_hyrw.png",
                          },
                          compId: 7,
                        },
                        {
                          type: "Label",
                          props: {
                            y: 1197,
                            x: 41,
                            width: 668,
                            var: "lab_msg",
                            valign: "middle",
                            height: 63,
                            fontSize: 50,
                            color: "#ffffff",
                            bold: !0,
                            align: "center",
                          },
                          compId: 10,
                        },
                        {
                          type: "Image",
                          props: {
                            x: 241,
                            width: 267,
                            var: "btn_close",
                            skin: "unpack/img_btn2.png",
                            height: 109,
                            bottom: -150,
                            sizeGrid: "47,61,56,56",
                          },
                          compId: 4,
                          child: [
                            {
                              type: "Label",
                              props: {
                                y: 18,
                                x: 4,
                                width: 258,
                                var: "lab_btn",
                                valign: "middle",
                                text: "Close",
                                height: 63,
                                fontSize: 50,
                                color: "#ffffff",
                                bold: !0,
                                align: "center",
                              },
                              compId: 9,
                            },
                          ],
                        },
                        {
                          type: "List",
                          props: {
                            y: 128,
                            x: 59,
                            width: 640,
                            var: "box_list",
                            spaceY: 90,
                            spaceX: 100,
                            height: 1012,
                          },
                          compId: 5,
                          child: [
                            {
                              type: "adItem",
                              props: {
                                scaleY: 1.5,
                                scaleX: 1.5,
                                runtime: "view/ad/AdItem.ts",
                                renderType: "render",
                              },
                              compId: 6,
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  loadList: ["unpack/img_bg_d0.png", "unpack/bg_hyrw.png", "unpack/img_btn2.png"],
                  loadList3D: [],
                }),
                t
              );
            })(o);
            (e.adMoreGameUI = i), s("ui.adComponent.adMoreGameUI", i);
            var n = (function (e) {
              function t() {
                return e.call(this) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.createChildren = function () {
                  e.prototype.createChildren.call(this), this.createView(t.uiView);
                }),
                (t.uiView = {
                  type: "Scene",
                  props: {
                    width: 680,
                    height: 150,
                  },
                  compId: 2,
                  child: [
                    {
                      type: "Image",
                      props: {
                        width: 740,
                        var: "img_bg",
                        skin: "unpack/ad/bg_gg_3.png",
                        right: 0,
                        height: 140,
                        centerY: 0,
                        sizeGrid: "0,105,0,188",
                      },
                      compId: 7,
                    },
                    {
                      type: "List",
                      props: {
                        y: 0,
                        width: 665,
                        var: "box_list",
                        spaceX: -15,
                        repeatY: 1,
                        left: 5,
                        height: 150,
                      },
                      compId: 3,
                      child: [
                        {
                          type: "adItem",
                          props: {
                            scaleY: 0.9,
                            scaleX: 0.9,
                            runtime: "view/ad/AdItem.ts",
                            renderType: "render",
                          },
                          compId: 4,
                        },
                      ],
                    },
                  ],
                  loadList: ["unpack/ad/bg_gg_3.png"],
                  loadList3D: [],
                }),
                t
              );
            })(o);
            (e.adScrollUI = n), s("ui.adComponent.adScrollUI", n);
            var r = (function (e) {
              function t() {
                return e.call(this) || this;
              }
              return (
                __extends(t, e),
                (t.prototype.createChildren = function () {
                  e.prototype.createChildren.call(this), this.createView(t.uiView);
                }),
                (t.uiView = {
                  type: "Scene",
                  props: {
                    width: 125,
                    height: 520,
                  },
                  compId: 2,
                  child: [
                    {
                      type: "Image",
                      props: {
                        width: 125,
                        var: "img_bg",
                        top: -50,
                        skin: "unpack/ad/bg_d.png",
                        right: 0,
                        left: 0,
                        height: 561,
                        bottom: 0,
                        sizeGrid: "21,20,19,22",
                      },
                      compId: 5,
                      child: [
                        {
                          type: "Label",
                          props: {
                            y: 6,
                            x: 6,
                            width: 113,
                            valign: "middle",
                            text: "好玩推荐",
                            height: 36,
                            fontSize: 28,
                            color: "#f6f6f6",
                            align: "center",
                          },
                          compId: 6,
                        },
                      ],
                    },
                    {
                      type: "List",
                      props: {
                        y: 0,
                        x: 0,
                        width: 126,
                        var: "box_list",
                        spaceY: 8,
                        repeatX: 1,
                        height: 520,
                      },
                      compId: 3,
                      child: [
                        {
                          type: "adItem",
                          props: {
                            y: 0,
                            x: 0,
                            runtime: "view/ad/AdItem.ts",
                            renderType: "render",
                          },
                          compId: 4,
                        },
                      ],
                    },
                  ],
                  loadList: ["unpack/ad/bg_d.png"],
                  loadList3D: [],
                }),
                t
              );
            })(o);
            (e.adScrollVUI = r), s("ui.adComponent.adScrollVUI", r);
          })((t = e.adComponent || (e.adComponent = {})));
        })((i = a.ui || (a.ui = {}))),
          (function (e) {
            var t;
            !(function (e) {
              var t = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          top: 0,
                          skin: "unpack/img_match.jpg",
                          right: 0,
                          left: 0,
                        },
                        compId: 3,
                      },
                      {
                        type: "Image",
                        props: {
                          top: 0,
                          skin: "unpack/img_skinBg.png",
                          right: 0,
                          left: 0,
                          bottom: 0,
                          sizeGrid: "689,0,45,0",
                        },
                        compId: 23,
                      },
                      {
                        type: "Box",
                        props: {
                          width: 750,
                          right: 0,
                          left: 0,
                          height: 656,
                          centerY: 163,
                        },
                        compId: 16,
                        child: [
                          {
                            type: "Image",
                            props: {
                              y: 112,
                              x: 40,
                              var: "btn_avatar",
                              skin: "main/btn_fz_01.png",
                            },
                            compId: 13,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 112,
                              x: 200,
                              var: "btn_ani",
                              skin: "main/btn_qz_01.png",
                            },
                            compId: 14,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 0,
                              width: 200,
                              var: "btn_addGold",
                              skin: "unpack/img_btn3.png",
                              left: 40,
                              height: 95,
                              sizeGrid: "48,80,51,79",
                            },
                            compId: 17,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: 21,
                                  x: 136,
                                  skin: "main/bg_jb.png",
                                },
                                compId: 20,
                              },
                              {
                                type: "Sprite",
                                props: {
                                  y: 26,
                                  x: 15,
                                  texture: "unpack/img_video.png",
                                  scaleY: 0.5,
                                  scaleX: 0.5,
                                },
                                compId: 24,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 24,
                                  x: 60,
                                  width: 79,
                                  var: "lab_addGold",
                                  valign: "middle",
                                  text: "45",
                                  height: 45,
                                  fontSize: 35,
                                  color: "#ffffff",
                                  align: "center",
                                },
                                compId: 19,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              y: 0,
                              width: 200,
                              var: "btn_buyOrUse",
                              skin: "unpack/img_btn2.png",
                              right: 30,
                              height: 95,
                              sizeGrid: "47,61,56,56",
                            },
                            compId: 18,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 0,
                                  x: 0,
                                  width: 200,
                                  var: "lab_buyOrUse",
                                  valign: "middle",
                                  text: "购  买",
                                  height: 95,
                                  fontSize: 38,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 21,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              y: 111,
                              x: 646,
                              var: "btn_close",
                              skin: "main/btn_gb.png",
                            },
                            compId: 15,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 175,
                              x: 25,
                              width: 700,
                              skin: "unpack/img_bg_d.png",
                              height: 658,
                              sizeGrid: "160,143,177,194",
                            },
                            compId: 4,
                          },
                          {
                            type: "List",
                            props: {
                              y: 210,
                              x: 43,
                              width: 665,
                              var: "box_list",
                              spaceY: 8,
                              spaceX: 8,
                              repeatX: 4,
                              height: 591,
                            },
                            compId: 5,
                            child: [
                              {
                                type: "Box",
                                props: {
                                  y: 0,
                                  x: 0,
                                  width: 160,
                                  renderType: "render",
                                  height: 200,
                                },
                                compId: 7,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: 0,
                                      x: 0,
                                      width: 160,
                                      skin: "main/bg_d1.png",
                                      height: 200,
                                    },
                                    compId: 6,
                                  },
                                  {
                                    type: "Image",
                                    props: {
                                      y: 11,
                                      x: 10,
                                      width: 140,
                                      skin: "unpack/role_icon/1.png",
                                      name: "img_icon",
                                      height: 140,
                                    },
                                    compId: 9,
                                  },
                                  {
                                    type: "Image",
                                    props: {
                                      y: 11,
                                      x: 10,
                                      width: 140,
                                      skin: "unpack/bg_suo.png",
                                      name: "img_suo",
                                      height: 140,
                                    },
                                    compId: 26,
                                  },
                                  {
                                    type: "Image",
                                    props: {
                                      y: 0,
                                      x: 0,
                                      width: 160,
                                      skin: "main/img_bg_xz.png",
                                      name: "img_select",
                                      height: 200,
                                    },
                                    compId: 8,
                                  },
                                  {
                                    type: "Image",
                                    props: {
                                      skin: "unpack/img_red.png",
                                      name: "img_redpoint",
                                    },
                                    compId: 27,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 153,
                                      x: 10,
                                      width: 140,
                                      name: "lab_select",
                                      height: 40,
                                      fontSize: 26,
                                      color: "#fdfdfd",
                                      align: "center",
                                      valign: "middle",
                                    },
                                    compId: 10,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 154,
                                      x: 7,
                                      width: 148,
                                      name: "lab_condition",
                                      height: 38,
                                      fontSize: 26,
                                      color: "#fdfdfd",
                                      align: "center",
                                      valign: "middle",
                                    },
                                    compId: 12,
                                    child: [
                                      {
                                        type: "Image",
                                        props: {
                                          y: 6,
                                          x: 10,
                                          skin: "main/bg_jb.png",
                                          scaleY: 0.6,
                                          scaleX: 0.6,
                                        },
                                        compId: 11,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "Image",
                        props: {
                          width: 170,
                          top: 20,
                          skin: "lobby/bg_mcd.png",
                          left: 10,
                          height: 50,
                          sizeGrid: "18,24,13,31",
                        },
                        compId: 31,
                        child: [
                          {
                            type: "Image",
                            props: {
                              y: 7.5,
                              x: 11,
                              skin: "lobby/bg_jb.png",
                              scaleY: 0.8,
                              scaleX: 0.8,
                            },
                            compId: 30,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 6,
                              x: 53,
                              width: 113,
                              var: "lab_zsNum",
                              valign: "middle",
                              text: "50000",
                              height: 44,
                              fontSize: 35,
                              color: "#ffffff",
                              bold: !0,
                              align: "left",
                            },
                            compId: 29,
                          },
                        ],
                      },
                    ],
                    loadList: [
                      "unpack/img_match.jpg",
                      "unpack/img_skinBg.png",
                      "main/btn_fz_01.png",
                      "main/btn_qz_01.png",
                      "unpack/img_btn3.png",
                      "main/bg_jb.png",
                      "unpack/img_video.png",
                      "unpack/img_btn2.png",
                      "main/btn_gb.png",
                      "unpack/img_bg_d.png",
                      "main/bg_d1.png",
                      "unpack/role_icon/1.png",
                      "unpack/bg_suo.png",
                      "main/img_bg_xz.png",
                      "unpack/img_red.png",
                      "lobby/bg_mcd.png",
                      "lobby/bg_jb.png",
                    ],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.AvatarViewUI = t), s("ui.view.AvatarViewUI", t);
              var a = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          var: "block",
                          top: 0,
                          skin: "lobby/bg_d.png",
                          right: 0,
                          left: 0,
                          bottom: 0,
                          alpha: 0.8,
                          sizeGrid: "21,23,17,28",
                        },
                        compId: 5,
                      },
                      {
                        type: "Image",
                        props: {
                          var: "bg",
                          skin: "unpack/daysign_bg.png",
                          y: 180,
                          centerX: 0,
                        },
                        compId: 3,
                        child: [
                          {
                            type: "Button",
                            props: {
                              var: "btn_close",
                              top: 4,
                              stateNum: 1,
                              skin: "unpack/daysign_close.png",
                              right: 0,
                            },
                            compId: 4,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 122,
                              x: 188,
                              visible: !1,
                              var: "red_1",
                              skin: "unpack/img_red.png",
                            },
                            compId: 6,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 122,
                              x: 378,
                              visible: !1,
                              var: "red_2",
                              skin: "unpack/img_red.png",
                            },
                            compId: 8,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 122,
                              x: 594,
                              visible: !1,
                              var: "red_3",
                              skin: "unpack/img_red.png",
                            },
                            compId: 9,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 330,
                              x: 188,
                              visible: !1,
                              var: "red_4",
                              skin: "unpack/img_red.png",
                            },
                            compId: 10,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 330,
                              x: 378,
                              visible: !1,
                              var: "red_5",
                              skin: "unpack/img_red.png",
                            },
                            compId: 11,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 330,
                              x: 594,
                              visible: !1,
                              var: "red_6",
                              skin: "unpack/img_red.png",
                            },
                            compId: 12,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 518,
                              x: 537.5,
                              visible: !1,
                              var: "red_7",
                              skin: "unpack/img_red.png",
                            },
                            compId: 13,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 233,
                              x: 109.5,
                              visible: !1,
                              var: "nike_1",
                              skin: "unpack/right.png",
                            },
                            compId: 14,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 233,
                              x: 362,
                              visible: !1,
                              var: "nike_2",
                              skin: "unpack/right.png",
                            },
                            compId: 15,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 233,
                              x: 547,
                              visible: !1,
                              var: "nike_3",
                              skin: "unpack/right.png",
                            },
                            compId: 16,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 431,
                              x: 109.5,
                              visible: !1,
                              var: "nike_4",
                              skin: "unpack/right.png",
                            },
                            compId: 17,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 431,
                              x: 362,
                              visible: !1,
                              var: "nike_5",
                              skin: "unpack/right.png",
                            },
                            compId: 18,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 431,
                              x: 541,
                              visible: !1,
                              var: "nike_6",
                              skin: "unpack/right.png",
                            },
                            compId: 19,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 660,
                              x: 541,
                              visible: !1,
                              var: "nike_7",
                              skin: "unpack/right.png",
                            },
                            compId: 20,
                          },
                          {
                            type: "Image",
                            props: {
                              width: 422,
                              var: "btn_double",
                              skin: "unpack/img_btn2.png",
                              height: 125,
                              centerX: -1,
                              y: 800,
                              sizeGrid: "47,61,56,56",
                            },
                            compId: 23,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: 31,
                                  x: 60,
                                  skin: "unpack/img_video.png",
                                  scaleY: 0.8,
                                  scaleX: 0.8,
                                },
                                compId: 28,
                              },
                              {
                                type: "Label",
                                props: {
                                  centerY: 0,
                                  x: 95,
                                  width: 316,
                                  var: "lab_btn",
                                  text: "Double",
                                  height: 50,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 29,
                              },
                            ],
                          },
                          {
                            type: "Box",
                            props: {
                              width: 158,
                              var: "btn_get",
                              height: 55,
                              centerX: 0,
                              y: 930,
                            },
                            compId: 26,
                            child: [
                              {
                                type: "Text",
                                props: {
                                  width: 158,
                                  valign: "middle",
                                  text: "Claim",
                                  height: 55,
                                  fontSize: 30,
                                  color: "#ffffff",
                                  align: "center",
                                  runtime: "laya.display.Text",
                                },
                                compId: 27,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    loadList: [
                      "lobby/bg_d.png",
                      "unpack/daysign_bg.png",
                      "unpack/daysign_close.png",
                      "unpack/img_red.png",
                      "unpack/right.png",
                      "unpack/img_btn2.png",
                      "unpack/img_video.png",
                    ],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.DaySignViewUI = a), s("ui.view.DaySignViewUI", a);
              var i = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "View",
                    props: {
                      width: 600,
                      height: 160,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          y: 3,
                          x: 48,
                          width: 504,
                          skin: "main/bg_d.png",
                          height: 153,
                          gray: !0,
                          alpha: 0.8,
                          sizeGrid: "17,16,20,18",
                        },
                        compId: 5,
                      },
                      {
                        type: "Image",
                        props: {
                          y: 23,
                          x: 84,
                          var: "img_icon",
                          skin: "unpack/jgicon_4.png",
                        },
                        compId: 7,
                      },
                      {
                        type: "Label",
                        props: {
                          y: 44,
                          x: 223,
                          width: 289,
                          var: "lab_desc",
                          text: "解锁！！",
                          stroke: 1,
                          height: 71,
                          fontSize: 65,
                          color: "#ffe156",
                          align: "center",
                        },
                        compId: 8,
                      },
                    ],
                    loadList: ["main/bg_d.png", "unpack/jgicon_4.png"],
                    loadList3D: [],
                  }),
                  t
                );
              })(n);
              (e.DialogNotifyUI = i), s("ui.view.DialogNotifyUI", i);
              var r = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          top: 0,
                          skin: "main/bg_d.png",
                          right: 0,
                          left: 0,
                          bottom: 0,
                          sizeGrid: "17,16,20,18",
                        },
                        compId: 10,
                      },
                      {
                        type: "Image",
                        props: {
                          x: 41,
                          width: 668,
                          skin: "main/bg_1.png",
                          height: 527,
                          centerY: 0,
                          sizeGrid: "60,69,67,60",
                        },
                        compId: 3,
                        child: [
                          {
                            type: "Label",
                            props: {
                              y: 64,
                              x: 35,
                              wordWrap: !0,
                              width: 598,
                              var: "lab_msg",
                              valign: "middle",
                              leading: 8,
                              height: 261,
                              fontSize: 40,
                              bold: !0,
                              align: "center",
                            },
                            compId: 4,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 373,
                              x: 209,
                              width: 250,
                              var: "btn_ok",
                              skin: "unpack/img_btn2.png",
                              height: 115,
                              sizeGrid: "47,61,56,56",
                            },
                            compId: 5,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 21,
                                  x: 28,
                                  width: 200,
                                  var: "lab_ok",
                                  valign: "middle",
                                  text: "确认",
                                  height: 61,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 7,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              y: 373,
                              x: 50,
                              width: 250,
                              var: "btn_cancel",
                              skin: "unpack/img_btn1.png",
                              height: 115,
                              sizeGrid: "47,31,56,33",
                            },
                            compId: 8,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 21,
                                  x: 28,
                                  width: 200,
                                  valign: "middle",
                                  text: "取消",
                                  height: 61,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 9,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    loadList: ["main/bg_d.png", "main/bg_1.png", "unpack/img_btn2.png", "unpack/img_btn1.png"],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.DialogTipUI = r), s("ui.view.DialogTipUI", r);
              var l = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Box",
                        props: {
                          y: 0,
                          x: 0,
                          var: "box_gameOver",
                          top: 0,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        },
                        compId: 29,
                        child: [
                          {
                            type: "Image",
                            props: {
                              y: 0,
                              x: 0,
                              top: 0,
                              skin: "main/img_di.png",
                              right: 0,
                              left: 0,
                              bottom: 0,
                              sizeGrid: "2,2,2,2",
                            },
                            compId: 30,
                          },
                          {
                            type: "Image",
                            props: {
                              x: 375,
                              width: 400,
                              var: "btn_next",
                              skin: "unpack/img_btn1.png",
                              height: 119,
                              bottom: 300,
                              anchorY: 0.5,
                              anchorX: 0.5,
                              sizeGrid: "47,31,56,33",
                            },
                            compId: 31,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 18,
                                  x: 17,
                                  width: 366,
                                  var: "lab_btn_next",
                                  valign: "middle",
                                  text: "Next",
                                  height: 80,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 35,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              x: -110,
                              width: 300,
                              var: "btn_resetart",
                              skin: "unpack/img_btn3.png",
                              left: 40,
                              height: 119,
                              bottom: 300,
                              sizeGrid: "48,80,51,79",
                            },
                            compId: 88,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 18,
                                  x: 17,
                                  width: 266,
                                  valign: "middle",
                                  text: "Replay",
                                  height: 80,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 89,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              y: 974,
                              x: 560,
                              width: 300,
                              var: "btn_jixu",
                              skin: "unpack/img_btn2.png",
                              scaleY: 0.9833333333333333,
                              scaleX: 0.9833333333333333,
                              right: 40,
                              height: 119,
                              bottom: 300,
                              anchorY: 0.5,
                              anchorX: 0.5,
                              sizeGrid: "47,61,56,56",
                            },
                            compId: 90,
                            child: [
                              {
                                type: "Sprite",
                                props: {
                                  y: 37,
                                  x: 17,
                                  texture: "unpack/img_video.png",
                                  scaleY: 0.6,
                                  scaleX: 0.6,
                                },
                                compId: 92,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 18,
                                  x: 68,
                                  width: 222,
                                  valign: "middle",
                                  text: "Revive",
                                  height: 80,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 91,
                              },
                            ],
                          },
                          {
                            type: "Box",
                            props: {
                              width: 750,
                              var: "grp_guanqia",
                              right: 0,
                              left: 0,
                              height: 159,
                              y: 140,
                            },
                            compId: 76,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: 39,
                                  x: 150,
                                  skin: "lobby/bg_fk1.png",
                                  left: 150,
                                },
                                compId: 77,
                                child: [
                                  {
                                    type: "Label",
                                    props: {
                                      y: 10,
                                      x: -10,
                                      width: 100,
                                      var: "lab_cur",
                                      valign: "middle",
                                      text: "1",
                                      height: 60,
                                      fontSize: 55,
                                      color: "#ffffff",
                                      bold: !0,
                                      align: "center",
                                    },
                                    compId: 82,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 39,
                                  x: 520,
                                  skin: "lobby/bg_fk2.png",
                                  right: 150,
                                },
                                compId: 78,
                                child: [
                                  {
                                    type: "Label",
                                    props: {
                                      y: 10,
                                      x: -10,
                                      width: 100,
                                      var: "lab_next",
                                      valign: "middle",
                                      text: "1",
                                      height: 60,
                                      fontSize: 55,
                                      color: "#ffffff",
                                      bold: !0,
                                      align: "center",
                                    },
                                    compId: 83,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 52,
                                  x: 262,
                                  var: "img_gq1",
                                  skin: "lobby/3-1.png",
                                  sizeGrid: "17,16,17,18",
                                },
                                compId: 79,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 52,
                                  x: 348,
                                  var: "img_gq2",
                                  skin: "lobby/3-1.png",
                                  sizeGrid: "17,16,17,18",
                                },
                                compId: 80,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 52,
                                  x: 434,
                                  var: "img_gq3",
                                  skin: "lobby/3-1.png",
                                  sizeGrid: "17,16,17,18",
                                },
                                compId: 81,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              y: 380,
                              var: "btn_lobby",
                              skin: "unpack/home.png",
                              left: 0,
                            },
                            compId: 84,
                          },
                          {
                            type: "Box",
                            props: {
                              width: 750,
                              var: "box_top",
                              y: 300,
                              right: 0,
                              left: 0,
                              height: 200,
                            },
                            compId: 86,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: -40,
                                  centerX: 0,
                                  var: "img_winOrLose",
                                  skin: "main/bg_sl.png",
                                },
                                compId: 87,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 180,
                                  x: 0,
                                  width: 750,
                                  var: "lab_rank",
                                  valign: "middle",
                                  text: "No 1",
                                  height: 80,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 85,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              x: 50,
                              width: 650,
                              skin: "unpack/img_bg_end.png",
                              height: 410,
                              centerY: -95,
                              sizeGrid: "32,29,32,32",
                              visible: false,
                            },
                            compId: 93,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: -53,
                                  x: 86,
                                  skin: "unpack/img_title_0.png",
                                },
                                compId: 94,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              x: 0,
                              skin: "",
                              var: "end_coins_bg",
                              y: 608,
                              width: 750,
                              height: 100,
                            },
                            compId: 105,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: -6,
                                  x: 340,
                                  width: 97,
                                  var: "coins_num",
                                  valign: "middle",
                                  text: "+50",
                                  height: 60,
                                  fontSize: 35,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                  scaleX: 2,
                                  scaleY: 2,
                                },
                                compId: 53,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 7,
                                  x: 230,
                                  skin: "main/bg_jb.png",
                                  scaleX: 2,
                                  scaleY: 2,
                                },
                                compId: 52,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              x: 663,
                              var: "btn_giftBox",
                              skin: "unpack/img_gift_box.png",
                              scaleY: 0.6,
                              scaleX: 0.6,
                              y: 400,
                              anchorY: 0.5,
                              anchorX: 0.5,
                            },
                            compId: 105,
                          },
                        ],
                      },
                      {
                        type: "Box",
                        props: {
                          width: 200,
                          var: "grp_assets",
                          y: 50,
                          height: 48,
                          x: 0,
                        },
                        compId: 51,
                        child: [
                          {
                            type: "Image",
                            props: {
                              y: 0,
                              x: 30,
                              name: "bg",
                              skin: "lobby/bg_mcd.png",
                              width: 170,
                              height: 51,
                            },
                            compId: 52,
                          },
                          {
                            type: "Label",
                            props: {
                              y: -2,
                              x: 100,
                              width: 150,
                              var: "lab_zsNum",
                              valign: "middle",
                              text: "500",
                              height: 60,
                              fontSize: 35,
                              color: "#ffffff",
                              bold: !0,
                              align: "left",
                            },
                            compId: 53,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 1.5,
                              x: 34,
                              skin: "main/bg_jb.png",
                            },
                            compId: 52,
                          },
                        ],
                      },
                    ],
                    animations: [
                      {
                        nodes: [
                          {
                            target: 90,
                            keyframes: {
                              scaleY: [
                                {
                                  value: 0.95,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 90,
                                  key: "scaleY",
                                  index: 0,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 90,
                                  key: "scaleY",
                                  index: 15,
                                },
                                {
                                  value: 0.95,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 90,
                                  key: "scaleY",
                                  index: 30,
                                },
                              ],
                              scaleX: [
                                {
                                  value: 0.95,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 90,
                                  key: "scaleX",
                                  index: 0,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 90,
                                  key: "scaleX",
                                  index: 15,
                                },
                                {
                                  value: 0.95,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 90,
                                  key: "scaleX",
                                  index: 30,
                                },
                              ],
                            },
                          },
                        ],
                        name: "jixuBtnAni",
                        id: 1,
                        frameRate: 24,
                        action: 0,
                      },
                      {
                        nodes: [
                          {
                            target: 105,
                            keyframes: {
                              rotation: [
                                {
                                  value: -12,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 105,
                                  key: "rotation",
                                  index: 0,
                                },
                                {
                                  value: 12,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 105,
                                  key: "rotation",
                                  index: 4,
                                },
                                {
                                  value: -5,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 105,
                                  key: "rotation",
                                  index: 7,
                                },
                                {
                                  value: 3,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 105,
                                  key: "rotation",
                                  index: 10,
                                },
                                {
                                  value: -12,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 105,
                                  key: "rotation",
                                  index: 13,
                                },
                                {
                                  value: -11,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 105,
                                  key: "rotation",
                                  index: 20,
                                },
                              ],
                            },
                          },
                        ],
                        name: "giftBtnAni",
                        id: 2,
                        frameRate: 24,
                        action: 0,
                      },
                    ],
                    loadList: [
                      "main/img_di.png",
                      "unpack/img_btn1.png",
                      "unpack/img_btn3.png",
                      "unpack/img_btn2.png",
                      "unpack/img_video.png",
                      "lobby/bg_fk1.png",
                      "lobby/bg_fk2.png",
                      "lobby/3-1.png",
                      "main/btn_zy.png",
                      "main/bg_sl.png",
                      "unpack/img_bg_end.png",
                      "unpack/img_title_0.png",
                      "unpack/img_gift_box.png",
                      "main/bg_jb.png",
                    ],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.EndGameViewUI = l), s("ui.view.EndGameViewUI", l);
              var h = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Box",
                        props: {
                          y: 0,
                          x: 0,
                          var: "box_game",
                          top: 0,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        },
                        compId: 3,
                        child: [
                          {
                            type: "Box",
                            props: {
                              y: -44,
                              x: 0,
                              width: 10,
                              height: 10,
                            },
                            compId: 136,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 10,
                                  x: 0,
                                  width: 130,
                                  var: "lab_name_0",
                                  skewY: 0,
                                  skewX: -6,
                                  overflow: "hidden",
                                  height: 30,
                                  fontSize: 30,
                                  color: "#4f95f4",
                                  bold: !0,
                                  anchorY: 1,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 137,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 11,
                                  x: 155,
                                  width: 130,
                                  var: "lab_name_1",
                                  skewY: 0,
                                  skewX: -6,
                                  overflow: "hidden",
                                  height: 30,
                                  fontSize: 30,
                                  color: "#4f95f4",
                                  bold: !0,
                                  anchorY: 1,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 138,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 11,
                                  x: 310,
                                  width: 130,
                                  var: "lab_name_2",
                                  skewY: 0,
                                  skewX: -6,
                                  overflow: "hidden",
                                  height: 30,
                                  fontSize: 30,
                                  color: "#4f95f4",
                                  bold: !0,
                                  anchorY: 1,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 139,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 11,
                                  x: 465,
                                  width: 130,
                                  var: "lab_name_3",
                                  skewY: 0,
                                  skewX: -6,
                                  overflow: "hidden",
                                  height: 30,
                                  fontSize: 30,
                                  color: "#4f95f4",
                                  bold: !0,
                                  anchorY: 1,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 140,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 11,
                                  x: 620,
                                  width: 130,
                                  var: "lab_name_4",
                                  skewY: 0,
                                  skewX: -8,
                                  overflow: "hidden",
                                  height: 30,
                                  fontSize: 30,
                                  color: "#4f95f4",
                                  bold: !0,
                                  anchorY: 1,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 141,
                              },
                            ],
                          },
                          {
                            type: "ProgressBar",
                            props: {
                              y: 50,
                              x: 125,
                              width: 500,
                              var: "progress_end",
                              value: 0.8,
                              skin: "main/progress_1.png",
                              height: 30,
                              sizeGrid: "7,14,7,12",
                            },
                            compId: 130,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: -21,
                                  x: 478,
                                  skin: "main/img_flag.png",
                                },
                                compId: 135,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              x: 375,
                              var: "img_cd",
                              skin: "main/img_3.png",
                              centerY: -100,
                              anchorY: 0.5,
                              anchorX: 0.5,
                            },
                            compId: 131,
                          },
                          {
                            type: "Box",
                            props: {
                              y: 0,
                              x: 0,
                              var: "box_clickScreen",
                              top: 0,
                              right: 0,
                              left: 0,
                              bottom: 0,
                            },
                            compId: 4,
                          },
                          {
                            type: "Image",
                            props: {
                              x: 598,
                              var: "btn_jumpGQ",
                              top: 200,
                              skin: "unpack/img_btn_tgcg.png",
                            },
                            compId: 205,
                          },
                          {
                            type: "Image",
                            props: {
                              var: "btn_outGame",
                              top: 21,
                              skin: "unpack/home.png",
                              left: 20,
                            },
                            compId: 5,
                            child: [
                              {
                                type: "Sprite",
                                props: {
                                  y: 0,
                                  x: 53,
                                  visible: !1,
                                  texture: "main/dian.png",
                                  name: "sp_redpoint",
                                },
                                compId: 6,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              x: 375,
                              visible: !1,
                              var: "img_guide",
                              skin: "unpack/bg_ts1.png",
                              bottom: 350,
                              anchorY: 0.5,
                              anchorX: 0.5,
                            },
                            compId: 143,
                          },
                          {
                            type: "Box",
                            props: {
                              width: 160,
                              var: "box_rank",
                              top: 200,
                              left: 0,
                              height: 245,
                            },
                            compId: 152,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: 0,
                                  x: 0,
                                  width: 160,
                                  var: "img_rank0",
                                  skin: "main/bg_pmd.png",
                                  height: 45,
                                  sizeGrid: "15,19,18,20",
                                },
                                compId: 153,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: 8,
                                      x: 27,
                                      width: 30,
                                      skin: "main/bg_d1.png",
                                      name: "img_icon",
                                      height: 30,
                                    },
                                    compId: 171,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 4,
                                      x: 8,
                                      width: 19,
                                      valign: "middle",
                                      text: "1",
                                      overflow: "hidden",
                                      height: 36,
                                      fontSize: 26,
                                      color: "#ffea00",
                                      align: "left",
                                    },
                                    compId: 154,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 7,
                                      x: 57,
                                      width: 97,
                                      valign: "middle",
                                      overflow: "hidden",
                                      name: "lab_name",
                                      height: 30,
                                      fontSize: 20,
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 172,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 50,
                                  x: 0,
                                  width: 160,
                                  var: "img_rank1",
                                  skin: "main/bg_pmd.png",
                                  height: 45,
                                  sizeGrid: "15,19,18,20",
                                },
                                compId: 173,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: 8,
                                      x: 27,
                                      width: 30,
                                      skin: "main/bg_d1.png",
                                      name: "img_icon",
                                      height: 30,
                                    },
                                    compId: 174,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 4,
                                      x: 8,
                                      width: 19,
                                      valign: "middle",
                                      text: "2",
                                      overflow: "hidden",
                                      height: 36,
                                      fontSize: 24,
                                      color: "#96fd96",
                                      align: "left",
                                    },
                                    compId: 175,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 7,
                                      x: 57,
                                      width: 97,
                                      valign: "middle",
                                      overflow: "hidden",
                                      name: "lab_name",
                                      height: 30,
                                      fontSize: 20,
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 176,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 100,
                                  x: 0,
                                  width: 160,
                                  var: "img_rank2",
                                  skin: "main/bg_pmd.png",
                                  height: 45,
                                  sizeGrid: "15,19,18,20",
                                },
                                compId: 177,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: 8,
                                      x: 27,
                                      width: 30,
                                      skin: "main/bg_d1.png",
                                      name: "img_icon",
                                      height: 30,
                                    },
                                    compId: 178,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 4,
                                      x: 8,
                                      width: 19,
                                      valign: "middle",
                                      text: "3",
                                      overflow: "hidden",
                                      height: 36,
                                      fontSize: 24,
                                      color: "#75cdff",
                                      align: "left",
                                    },
                                    compId: 179,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 7,
                                      x: 57,
                                      width: 97,
                                      valign: "middle",
                                      overflow: "hidden",
                                      name: "lab_name",
                                      height: 30,
                                      fontSize: 20,
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 180,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 150,
                                  x: 0,
                                  width: 160,
                                  var: "img_rank3",
                                  skin: "main/bg_pmd.png",
                                  height: 45,
                                  sizeGrid: "15,19,18,20",
                                },
                                compId: 181,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: 8,
                                      x: 27,
                                      width: 30,
                                      skin: "main/bg_d1.png",
                                      name: "img_icon",
                                      height: 30,
                                    },
                                    compId: 182,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 4,
                                      x: 8,
                                      width: 19,
                                      valign: "middle",
                                      text: "4",
                                      overflow: "hidden",
                                      height: 36,
                                      fontSize: 24,
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 183,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 7,
                                      x: 57,
                                      width: 97,
                                      valign: "middle",
                                      overflow: "hidden",
                                      name: "lab_name",
                                      height: 30,
                                      fontSize: 20,
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 184,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 200,
                                  x: 0,
                                  width: 160,
                                  var: "img_rank4",
                                  skin: "main/bg_pmd.png",
                                  height: 45,
                                  bottom: 0,
                                  sizeGrid: "15,19,18,20",
                                },
                                compId: 185,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: 8,
                                      x: 27,
                                      width: 30,
                                      skin: "main/bg_d1.png",
                                      name: "img_icon",
                                      height: 30,
                                    },
                                    compId: 186,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 4,
                                      x: 8,
                                      width: 19,
                                      valign: "middle",
                                      text: "5",
                                      overflow: "hidden",
                                      height: 36,
                                      fontSize: 24,
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 187,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 7,
                                      x: 57,
                                      width: 97,
                                      valign: "middle",
                                      overflow: "hidden",
                                      name: "lab_name",
                                      height: 30,
                                      fontSize: 20,
                                      color: "#ffffff",
                                      align: "left",
                                    },
                                    compId: 188,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "Box",
                        props: {
                          y: 0,
                          x: 0,
                          var: "box_outGame",
                          top: 0,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        },
                        compId: 144,
                        child: [
                          {
                            type: "Image",
                            props: {
                              top: 0,
                              skin: "main/bg_d.png",
                              right: 0,
                              left: 0,
                              bottom: 0,
                              alpha: 0.6,
                              sizeGrid: "17,16,20,18",
                            },
                            compId: 145,
                          },
                          {
                            type: "Image",
                            props: {
                              x: 45,
                              width: 660,
                              skin: "",
                              height: 440,
                              centerY: -90,
                              sizeGrid: "25,30,27,24",
                            },
                            compId: 147,
                            child: [
                              {
                                type: "Sprite",
                                props: {
                                  y: -90,
                                  x: 84,
                                  texture: "unpack/title_3.png",
                                  visible: false,
                                },
                                compId: 146,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 471,
                                  width: 230,
                                  var: "btn_stay",
                                  skin: "unpack/img_btn1.png",
                                  left: 50,
                                  height: 90,
                                  sizeGrid: "47,31,56,33",
                                },
                                compId: 148,
                                child: [
                                  {
                                    type: "Label",
                                    props: {
                                      y: 22,
                                      x: 30,
                                      width: 171,
                                      text: "Back",
                                      height: 43,
                                      fontSize: 40,
                                      color: "#ffffff",
                                      bold: !0,
                                      align: "center",
                                    },
                                    compId: 149,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 471,
                                  width: 230,
                                  var: "btn_back",
                                  skin: "unpack/img_btn2.png",
                                  right: 50,
                                  height: 90,
                                  sizeGrid: "47,61,56,56",
                                },
                                compId: 150,
                                child: [
                                  {
                                    type: "Label",
                                    props: {
                                      y: 22,
                                      x: 30,
                                      width: 171,
                                      text: "Home",
                                      height: 43,
                                      fontSize: 40,
                                      color: "#ffffff",
                                      bold: !0,
                                      align: "center",
                                    },
                                    compId: 151,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: "Box",
                        props: {
                          y: 125,
                          x: 275,
                          width: 240,
                          var: "grp_assets",
                          height: 60,
                          centerX: 0,
                        },
                        compId: 75,
                        child: [
                          {
                            x: 30,
                            type: "Image",
                            searchKey: "Image,bg",
                            props: { y: 15, x: 20, width: 200, skin: "lobby/bg_mcd.png", sizeGrid: "18,24,13,31", name: "bg", height: 50 },
                            nodeParent: 75,
                            label: "bg",
                            isDirectory: false,
                            isAniNode: true,
                            hasChild: false,
                            compId: 206,
                            child: [],
                          },
                          {
                            type: "Image",
                            props: {
                              y: 18,
                              x: 30,
                              skin: "main/bg_jb.png",
                            },
                            compId: 76,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 12,
                              x: 100,
                              width: 150,
                              var: "lab_zsNum",
                              valign: "middle",
                              text: "500",
                              height: 60,
                              fontSize: 35,
                              color: "#ffffff",
                              bold: !0,
                              align: "left",
                            },
                            compId: 77,
                          },
                        ],
                      },
                      {
                        type: "Box",
                        props: {
                          width: 135,
                          var: "grp_shareScreen",
                          height: 186,
                          centerY: 0,
                        },
                        compId: 112,
                        child: [
                          {
                            type: "Image",
                            props: {
                              y: 0,
                              skin: "unpack/bg_xyyx.png",
                            },
                            compId: 113,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 4,
                              x: 5,
                              var: "img_share",
                              skin: "unpack/bg_d2.png",
                              sizeGrid: "32,33,34,36",
                            },
                            compId: 114,
                          },
                          {
                            type: "Image",
                            props: {
                              skin: "unpack/btn_gb.png",
                            },
                            compId: 128,
                          },
                        ],
                      },
                      {
                        type: "Box",
                        props: {
                          x: 0,
                          width: 250,
                          var: "grp_chaoyue",
                          height: 120,
                          bottom: 300,
                        },
                        compId: 121,
                        child: [
                          {
                            type: "Image",
                            props: {
                              top: 0,
                              skin: "main/bg_d.png",
                              right: 0,
                              left: 0,
                              bottom: 0,
                              sizeGrid: "17,16,20,18",
                            },
                            compId: 122,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 10,
                              x: 141,
                              width: 100,
                              var: "img_chaoyuIcon",
                              skin: "main/bg_d.png",
                              height: 100,
                              sizeGrid: "17,16,20,18",
                            },
                            compId: 123,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 5,
                              x: 0,
                              width: 133,
                              text: "新超越",
                              height: 43,
                              fontSize: 35,
                              color: "#ffffff",
                              bold: !0,
                              align: "center",
                            },
                            compId: 124,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 48,
                              x: 0,
                              width: 137,
                              var: "Lab_chaoyName",
                              valign: "middle",
                              overflow: "hidden",
                              height: 32,
                              fontSize: 20,
                              color: "#ffd700",
                              align: "center",
                            },
                            compId: 125,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 82,
                              x: 0,
                              width: 133,
                              var: "lab_chaoyNum",
                              valign: "middle",
                              text: "新超越",
                              height: 32,
                              fontSize: 20,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 126,
                          },
                        ],
                      },
                      {
                        type: "Box",
                        props: {
                          var: "box_jump",
                          top: 0,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        },
                        compId: 189,
                        child: [
                          {
                            type: "Image",
                            props: {
                              top: 0,
                              skin: "main/bg_d.png",
                              right: 0,
                              left: 0,
                              bottom: 0,
                              sizeGrid: "17,16,20,18",
                            },
                            compId: 191,
                          },
                          {
                            type: "Box",
                            props: {
                              right: 0,
                              left: 0,
                              height: 300,
                              centerY: 226,
                            },
                            compId: 192,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: 40,
                                  x: 195,
                                  width: 360,
                                  var: "btn_jump",
                                  skin: "unpack/img_btn2.png",
                                  height: 119,
                                  sizeGrid: "47,61,56,56",
                                },
                                compId: 193,
                                child: [
                                  {
                                    type: "Sprite",
                                    props: {
                                      y: 37,
                                      x: 17,
                                      texture: "unpack/img_video.png",
                                      scaleY: 0.6,
                                      scaleX: 0.6,
                                    },
                                    compId: 194,
                                  },
                                  {
                                    type: "Label",
                                    props: {
                                      y: 18,
                                      x: 74,
                                      width: 272,
                                      valign: "middle",
                                      text: "Skip",
                                      height: 80,
                                      fontSize: 50,
                                      color: "#ffffff",
                                      bold: !0,
                                      align: "center",
                                    },
                                    compId: 195,
                                  },
                                ],
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 199,
                                  x: 451,
                                  var: "btn_isshow",
                                  skin: "main/bg_d2.png",
                                },
                                compId: 198,
                                child: [
                                  {
                                    type: "Image",
                                    props: {
                                      y: -12,
                                      x: 0,
                                      skin: "main/bg_dh.png",
                                    },
                                    compId: 199,
                                  },
                                ],
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 199,
                                  x: 502,
                                  width: 211,
                                  text: "本次登陆不在弹出",
                                  height: 30,
                                  fontSize: 26,
                                  color: "#959595",
                                },
                                compId: 197,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 193,
                                  x: 310,
                                  width: 129,
                                  var: "btn_closeJump",
                                  valign: "middle",
                                  text: "Back",
                                  height: 38,
                                  fontSize: 30,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 200,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              x: 50,
                              width: 650,
                              skin: "unpack/img_bg_end.png",
                              height: 410,
                              centerY: -145,
                              sizeGrid: "32,29,32,32",
                            },
                            compId: 202,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: -53,
                                  x: 86,
                                  skin: "unpack/img_title_0.png",
                                },
                                compId: 203,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: -149,
                                  x: 118,
                                  skin: "unpack/img_txt_jump.png",
                                },
                                compId: 204,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    animations: [
                      {
                        nodes: [
                          {
                            target: 143,
                            keyframes: {
                              visible: [
                                {
                                  value: !0,
                                  tweenMethod: "linearNone",
                                  tween: !1,
                                  target: 143,
                                  key: "visible",
                                  index: 0,
                                },
                                {
                                  value: !1,
                                  tweenMethod: "linearNone",
                                  tween: !1,
                                  target: 143,
                                  key: "visible",
                                  index: 103,
                                },
                              ],
                              scaleY: [
                                {
                                  value: 0.3,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "scaleY",
                                  index: 0,
                                },
                                {
                                  value: 1.1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "scaleY",
                                  index: 3,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "scaleY",
                                  index: 5,
                                },
                              ],
                              scaleX: [
                                {
                                  value: 0.3,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "scaleX",
                                  index: 0,
                                },
                                {
                                  value: 1.1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "scaleX",
                                  index: 3,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "scaleX",
                                  index: 5,
                                },
                              ],
                              alpha: [
                                {
                                  value: 0,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "alpha",
                                  index: 0,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "alpha",
                                  index: 4,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "alpha",
                                  index: 100,
                                },
                                {
                                  value: 0,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 143,
                                  key: "alpha",
                                  index: 103,
                                },
                              ],
                            },
                          },
                        ],
                        name: "guideAni",
                        id: 1,
                        frameRate: 24,
                        action: 0,
                      },
                    ],
                    loadList: [
                      "main/progress_1.png",
                      "main/img_flag.png",
                      "main/img_3.png",
                      "unpack/img_btn_tgcg.png",
                      "main/tuichu.png",
                      "main/dian.png",
                      "unpack/bg_ts1.png",
                      "main/bg_pmd.png",
                      "main/bg_d1.png",
                      "main/bg_d.png",
                      "unpack/96x96.png",
                      "unpack/title_3.png",
                      "unpack/img_btn1.png",
                      "unpack/img_btn2.png",
                      "main/bg_jb.png",
                      "unpack/bg_xyyx.png",
                      "unpack/bg_d2.png",
                      "unpack/btn_gb.png",
                      "unpack/img_video.png",
                      "main/bg_d2.png",
                      "main/bg_dh.png",
                      "unpack/img_bg_end.png",
                      "unpack/img_title_0.png",
                      "unpack/img_txt_jump.png",
                    ],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.GameViewUI = h), s("ui.view.GameViewUI", h);
              var d = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          var: "img_bg",
                          top: 0,
                          skin: "main/bg_d.png",
                          right: 0,
                          left: 0,
                          bottom: 0,
                          sizeGrid: "17,16,20,18",
                        },
                        compId: 4,
                      },
                      {
                        type: "Box",
                        props: {
                          var: "box_mid",
                          right: 0,
                          left: 0,
                          height: 600,
                          centerY: 0,
                        },
                        compId: 5,
                        child: [
                          {
                            type: "Image",
                            props: {
                              y: 480,
                              x: 200,
                              width: 350,
                              var: "btn_vedio",
                              skin: "unpack/img_btn2.png",
                              height: 110,
                              sizeGrid: "47,61,56,56",
                            },
                            compId: 8,
                            child: [
                              {
                                type: "Sprite",
                                props: {
                                  y: 33,
                                  x: 23,
                                  texture: "unpack/img_video.png",
                                  scaleY: 0.6,
                                  scaleX: 0.6,
                                },
                                compId: 9,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 15,
                                  x: 93,
                                  width: 222,
                                  valign: "middle",
                                  text: "Open Chest",
                                  height: 80,
                                  fontSize: 40,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 10,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              y: -80,
                              x: 60,
                              skin: "unpack/bg_gx.png",
                              scaleY: 1.8,
                              scaleX: 1.8,
                            },
                            compId: 16,
                          },
                          {
                            type: "Image",
                            props: {
                              y: -28,
                              x: 650,
                              var: "btn_close",
                              skin: "unpack/btn_gb.png",
                              scaleY: 1.5,
                              scaleX: 1.5,
                            },
                            compId: 17,
                          },
                          {
                            type: "Image",
                            props: {
                              y: -185,
                              x: 81,
                              skin: "unpack/img_txt_gift.png",
                            },
                            compId: 18,
                          },
                        ],
                      },
                      {
                        type: "Box",
                        props: {
                          width: 750,
                          var: "box_bottom",
                          right: 0,
                          left: 0,
                          height: 350,
                          bottom: 100,
                        },
                        compId: 14,
                        child: [
                          {
                            type: "Image",
                            props: {
                              y: 240,
                              x: 200,
                              width: 350,
                              var: "btn_touch",
                              skin: "unpack/img_btn1.png",
                              height: 110,
                              bottom: 0,
                              sizeGrid: "47,31,56,33",
                            },
                            compId: 11,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 15,
                                  x: 64,
                                  width: 222,
                                  valign: "middle",
                                  text: "Open Chest",
                                  height: 80,
                                  fontSize: 40,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 13,
                              },
                            ],
                          },
                          {
                            type: "ProgressBar",
                            props: {
                              x: 125,
                              width: 500,
                              var: "progress_click",
                              value: 0.8,
                              top: 60,
                              skin: "main/progress_1.png",
                              height: 30,
                              sizeGrid: "7,14,7,12",
                            },
                            compId: 6,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 13,
                              x: 169,
                              width: 411,
                              var: "lab_jindu",
                              text: "label",
                              height: 39,
                              fontSize: 30,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 15,
                          },
                        ],
                      },
                    ],
                    loadList: [
                      "main/bg_d.png",
                      "unpack/img_btn2.png",
                      "unpack/img_video.png",
                      "unpack/bg_gx.png",
                      "unpack/btn_gb.png",
                      "unpack/img_txt_gift.png",
                      "unpack/img_btn1.png",
                      "main/progress_1.png",
                    ],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.GiftViewUI = d), s("ui.view.GiftViewUI", d);
              var c = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "View",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Box",
                        props: {
                          var: "box_bg",
                          top: 0,
                          right: 0,
                          left: 0,
                          bottom: 0,
                        },
                        compId: 6,
                      },
                      {
                        type: "Sprite",
                        props: {
                          y: 0,
                          x: 0,
                          var: "sp_guide",
                          cacheAs: "bitmap",
                        },
                        compId: 3,
                      },
                      {
                        type: "Image",
                        props: {
                          y: 639,
                          x: 387,
                          var: "img_hand",
                          skin: "main/yd_3.png",
                        },
                        compId: 4,
                      },
                      {
                        type: "Label",
                        props: {
                          y: 499,
                          x: 0,
                          width: 723,
                          var: "lab_guideMsg",
                          text: "点击开炮",
                          height: 57,
                          fontSize: 50,
                          color: "#ffffff",
                          centerX: 0,
                          bold: !0,
                          align: "center",
                        },
                        compId: 5,
                      },
                    ],
                    animations: [
                      {
                        nodes: [
                          {
                            target: 4,
                            keyframes: {
                              scaleY: [
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 4,
                                  key: "scaleY",
                                  index: 0,
                                },
                                {
                                  value: 0.8,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 4,
                                  key: "scaleY",
                                  index: 25,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 4,
                                  key: "scaleY",
                                  index: 50,
                                },
                              ],
                              scaleX: [
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 4,
                                  key: "scaleX",
                                  index: 0,
                                },
                                {
                                  value: 0.8,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 4,
                                  key: "scaleX",
                                  index: 25,
                                },
                                {
                                  value: 1,
                                  tweenMethod: "linearNone",
                                  tween: !0,
                                  target: 4,
                                  key: "scaleX",
                                  index: 50,
                                },
                              ],
                            },
                          },
                        ],
                        name: "handAni",
                        id: 1,
                        frameRate: 24,
                        action: 0,
                      },
                    ],
                    loadList: ["main/yd_3.png"],
                    loadList3D: [],
                  }),
                  t
                );
              })(n);
              (e.GuideViewUI = c), s("ui.view.GuideViewUI", c);
              var u = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "View",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          top: 0,
                          skin: "loading/bg_d.jpg",
                          right: 0,
                          left: 0,
                        },
                        compId: 3,
                      },
                      {
                        type: "Image",
                        props: {
                          top: 65,
                          skin: "loading/logo.png",
                          centerX: 20,
                        },
                        compId: 4,
                      },
                      {
                        type: "Label",
                        props: {
                          x: 0,
                          width: 750,
                          var: "lab_tip",
                          text: "抵制不良游戏, 拒绝盗版游戏。 注意自我保护, 谨防受骗上当。\\n适度游戏益脑, 沉迷游戏伤身。 合理安排时间, 享受健康生活。",
                          strokeColor: "#045670",
                          stroke: 5,
                          height: 60,
                          fontSize: 26,
                          color: "#fff6b5",
                          bottom: 280,
                          anchorY: 1,
                          align: "center",
                          visible: false,
                        },
                        compId: 5,
                      },
                      {
                        type: "ProgressBar",
                        props: {
                          width: 600,
                          var: "bar_load",
                          value: 0,
                          skin: "loading/progress.png",
                          centerX: 0,
                          y: 914,
                          sizeGrid: "0,33,0,35",
                        },
                        compId: 6,
                      },
                      {
                        type: "Label",
                        props: {
                          x: 175,
                          width: 400,
                          var: "lab_progress",
                          text: "加载中...",
                          strokeColor: "#045670",
                          stroke: 2,
                          height: 37,
                          fontSize: 30,
                          color: "#fff6b5",
                          y: 875,
                          align: "center",
                        },
                        compId: 7,
                      },
                    ],
                    loadList: ["loading/bg_d.jpg", "loading/logo.png", "loading/progress.png"],
                    loadList3D: [],
                  }),
                  t
                );
              })(n);
              (e.LoadingUI = u), s("ui.view.LoadingUI", u);
              var p = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          y: 0,
                          x: 0,
                          width: 750,
                          height: 1334,
                          var: "block",

                          skin: "unpack/ad/bg_d.png",

                          name: "block",

                          sizeGrid: "21,20,19,22",
                        },
                        compId: 49,
                      },
                      {
                        type: "Image",
                        props: {
                          var: "lucktt",
                          skin: "unpack/lucktt_bg_zpd.png",
                          name: "lucktt",
                          y: 150,
                          centerX: 0,
                        },
                        compId: 3,
                        child: [
                          {
                            type: "Image",
                            props: {
                              width: 541,
                              var: "bg",
                              skin: "unpack/lucktt_bg_ld.png",
                              rotation: 0,
                              name: "bg",
                              height: 540,
                              centerY: 18,
                              centerX: 0,
                              anchorY: 0.5,
                              anchorX: 0.5,
                            },
                            compId: 4,
                            child: [
                              {
                                type: "Image",
                                props: {
                                  y: 21,
                                  x: 168,
                                  width: 208,
                                  visible: !1,
                                  var: "light_1",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: -22.5,
                                  name: "light_1",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 39,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 22,
                                  x: 376,
                                  width: 208,
                                  visible: !1,
                                  var: "light_2",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: 22.5,
                                  name: "light_2",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 41,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 168,
                                  x: 522,
                                  width: 208,
                                  visible: !1,
                                  var: "light_3",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: 67.5,
                                  name: "light_3",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 42,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 375,
                                  x: 522,
                                  width: 208,
                                  visible: !1,
                                  var: "light_4",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: 112.5,
                                  name: "light_4",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 43,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 522,
                                  x: 374.5,
                                  width: 208,
                                  visible: !1,
                                  var: "light_5",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: 157.5,
                                  name: "light_5",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 44,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 522,
                                  x: 166.5,
                                  width: 208,
                                  visible: !1,
                                  var: "light_6",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: 202.5,
                                  name: "light_6",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 45,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 375,
                                  x: 19.5,
                                  width: 208,
                                  visible: !1,
                                  var: "light_7",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: 247.5,
                                  name: "light_7",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 47,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 167,
                                  x: 20.5,
                                  width: 208,
                                  visible: !1,
                                  var: "light_8",
                                  skin: "turn/lucktt_bg_bs.png",
                                  rotation: 292.5,
                                  name: "light_8",
                                  height: 273,
                                  anchorX: 0.5,
                                },
                                compId: 48,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 69,
                                  x: 175.5,
                                  width: 53,
                                  skin: "turn/bg_jb.png",
                                  scaleY: 1,
                                  scaleX: 1,
                                  rotation: 0,
                                  height: 50,
                                },
                                compId: 5,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 69,
                                  x: 311,
                                  width: 53,
                                  skin: "turn/bg_jb.png",
                                  scaleY: 1,
                                  scaleX: 1,
                                  rotation: 0,
                                  height: 50,
                                },
                                compId: 9,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 182,
                                  x: 429,
                                  width: 53,
                                  skin: "turn/bg_jb.png",
                                  scaleY: 1,
                                  scaleX: 1,
                                  rotation: 0,
                                  height: 50,
                                },
                                compId: 10,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 307,
                                  x: 429,
                                  width: 53,
                                  skin: "turn/bg_jb.png",
                                  scaleY: 1,
                                  scaleX: 1,
                                  rotation: 0,
                                  height: 50,
                                },
                                compId: 11,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 420,
                                  x: 311,
                                  width: 53,
                                  skin: "turn/bg_jb.png",
                                  scaleY: 1,
                                  scaleX: 1,
                                  rotation: 0,
                                  height: 50,
                                },
                                compId: 12,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 420,
                                  x: 175.5,
                                  width: 53,
                                  skin: "turn/bg_jb.png",
                                  scaleY: 1,
                                  scaleX: 1,
                                  rotation: 0,
                                  height: 50,
                                },
                                compId: 13,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 307,
                                  x: 70.5,
                                  width: 53,
                                  skin: "turn/bg_jb.png",
                                  scaleY: 1,
                                  scaleX: 1,
                                  rotation: 0,
                                  height: 50,
                                },
                                compId: 14,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 217,
                                  x: 33,
                                  var: "img_avatar",
                                  skin: "unpack/role_icon/1.png",
                                  scaleY: 0.8,
                                  scaleX: 0.8,
                                  rotation: -67,
                                },
                                compId: 16,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 142.5,
                                  x: 216,
                                  width: 86,
                                  var: "label_coin_1",
                                  valign: "middle",
                                  text: "888",
                                  rotation: -20,
                                  name: "label_coin_1",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 17,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 143.5,
                                  x: 321,
                                  width: 86,
                                  var: "label_coin_2",
                                  valign: "middle",
                                  text: "888",
                                  rotation: 25,
                                  name: "label_coin_2",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 18,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 217,
                                  x: 396,
                                  width: 86,
                                  var: "label_coin_3",
                                  valign: "middle",
                                  text: "888",
                                  rotation: 70,
                                  name: "label_coin_3",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 19,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 317,
                                  x: 396,
                                  width: 86,
                                  var: "label_coin_4",
                                  valign: "middle",
                                  text: "888",
                                  rotation: 115,
                                  name: "label_coin_4",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 20,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 390,
                                  x: 321,
                                  width: 86,
                                  var: "label_coin_5",
                                  valign: "middle",
                                  text: "888",
                                  rotation: 160,
                                  name: "label_coin_5",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 21,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 387,
                                  x: 222,
                                  width: 86,
                                  var: "label_coin_6",
                                  valign: "middle",
                                  text: "888",
                                  rotation: 205,
                                  name: "label_coin_6",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 22,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 317,
                                  x: 153,
                                  width: 86,
                                  var: "label_coin_7",
                                  valign: "middle",
                                  text: "888",
                                  rotation: 250,
                                  name: "label_coin_7",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 24,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 217,
                                  x: 141.5,
                                  width: 86,
                                  var: "label_coin_8",
                                  valign: "middle",
                                  text: "888",
                                  rotation: 295,
                                  name: "label_coin_8",
                                  height: 30,
                                  fontSize: 30,
                                  anchorY: 0.5,
                                  anchorX: 0.5,
                                  align: "center",
                                },
                                compId: 25,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              skin: "turn/lucktt_bg_ym.png",
                              centerY: 18,
                              centerX: 0,
                            },
                            compId: 37,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 45,
                              var: "point",
                              skin: "turn/lucktt_bg_zz.png",
                              name: "point",
                              centerX: 0,
                              anchorY: 0.2,
                              anchorX: 0.5,
                            },
                            compId: 38,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 355,
                              x: 315,
                              visible: !1,
                              var: "light",
                              skin: "turn/lucktt_light.png",
                              name: "light",
                              centerY: 19,
                              centerX: 0,
                              anchorY: 0.5,
                              anchorX: 0.5,
                            },
                            compId: 50,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 842,
                              x: 114,
                              width: 300,
                              visible: !0,
                              var: "btn_turn",
                              skin: "unpack/img_btn2.png",
                              height: 110,
                              centerX: 0,
                              anchorY: 1,
                              sizeGrid: "47,61,56,56",
                            },
                            compId: 51,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  centerY: 0,
                                  centerX: 0,
                                  width: 216,
                                  var: "lab_btn",
                                  text: "Draw",
                                  height: 55,
                                  fontSize: 55,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 52,
                              },
                              {
                                type: "Image",
                                props: {
                                  y: 55,
                                  x: 229,
                                  var: "img_share_type",
                                  skin: "unpack/img_video.png",
                                  scaleY: 0.7,
                                  scaleX: 0.7,
                                },
                                compId: 75,
                              },
                            ],
                          },
                          {
                            type: "Label",
                            props: {
                              y: 900,
                              x: 196,
                              width: 236,
                              var: "btn_close",
                              text: "Close",
                              height: 50,
                              fontSize: 36,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 73,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 670,
                              x: 34,
                              width: 561,
                              var: "lab_left",
                              text: "draw chance : ",
                              height: 50,
                              fontSize: 36,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 74,
                          },
                        ],
                      },
                      {
                        type: "Sprite",
                        props: {
                          y: 30,
                          x: 3,
                          width: 170,
                          texture: "lobby/bg_mcd.png",
                          height: 51,
                          sizeGrid: "18,24,13,31",
                        },
                        compId: 215,
                        child: [
                          {
                            type: "Label",
                            props: {
                              y: 5,
                              x: 51,
                              width: 110,
                              var: "lab_zsNum2",
                              valign: "middle",
                              text: "50000",
                              height: 42,
                              fontSize: 35,
                              color: "#ffffff",
                              bold: true,
                              align: "left",
                            },
                            compId: 11,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 7,
                              x: 8,
                              skin: "lobby/bg_jb.png",
                              scaleY: 0.8,
                              scaleX: 0.8,
                              // visible: false,
                            },
                            compId: 10,
                          },
                        ],
                      },
                    ],
                    loadList: [
                      "unpack/ad/bg_d.png",
                      "unpack/lucktt_bg_zpd.png",
                      "unpack/lucktt_bg_ld.png",
                      "turn/lucktt_bg_bs.png",
                      "turn/bg_jb.png",
                      "unpack/role_icon/1.png",
                      "turn/lucktt_bg_ym.png",
                      "turn/lucktt_bg_zz.png",
                      "turn/lucktt_light.png",
                      "unpack/img_btn2.png",
                      "unpack/img_video.png",
                    ],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.LuckyTurnTableViewUI = p), s("ui.view.LuckyTurnTableViewUI", p);
              var f = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.loadScene("view/Main");
                  }),
                  t
                );
              })(n);
              (e.MainUI = f), s("ui.view.MainUI", f);
              var g = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          y: 0,
                          top: 0,
                          skin: "unpack/img_match.jpg",
                          right: 0,
                          left: 0,
                        },
                        compId: 3,
                      },
                      {
                        type: "Image",
                        props: {
                          y: 180,
                          x: 112,
                          var: "img_tip",
                          top: 180,
                          skin: "unpack/bg_ts3.png",
                        },
                        compId: 4,
                      },
                      {
                        type: "Image",
                        props: {
                          skin: "unpack/img_bg_d1.png",
                          right: 0,
                          left: 0,
                          centerY: 90,
                        },
                        compId: 5,
                        child: [
                          {
                            type: "Label",
                            props: {
                              y: 100,
                              x: 0,
                              width: 130,
                              var: "lab_name_0",
                              overflow: "hidden",
                              height: 25,
                              fontSize: 22,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 8,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 100,
                              x: 155,
                              width: 130,
                              var: "lab_name_1",
                              overflow: "hidden",
                              height: 25,
                              fontSize: 22,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 11,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 100,
                              x: 310,
                              width: 130,
                              var: "lab_name_2",
                              overflow: "hidden",
                              height: 25,
                              fontSize: 22,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 12,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 100,
                              x: 465,
                              width: 130,
                              var: "lab_name_3",
                              overflow: "hidden",
                              height: 25,
                              fontSize: 22,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 13,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 100,
                              x: 620,
                              width: 130,
                              var: "lab_name_4",
                              overflow: "hidden",
                              height: 25,
                              fontSize: 22,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 14,
                          },
                        ],
                      },
                      {
                        type: "ProgressBar",
                        props: {
                          x: 150,
                          width: 450,
                          var: "progress_num",
                          skin: "main/progress.png",
                          height: 50,
                          bottom: 320,
                          sizeGrid: "0,24,0,28",
                        },
                        compId: 6,
                      },
                      {
                        type: "Label",
                        props: {
                          x: 160,
                          width: 430,
                          text: "Waiting for other players...",
                          height: 40,
                          fontSize: 40,
                          color: "#ffffff",
                          bottom: 380,
                          align: "center",
                        },
                        compId: 7,
                      },
                    ],
                    loadList: ["unpack/img_match.jpg", "unpack/bg_ts3.png", "unpack/img_bg_d1.png", "main/progress.png"],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.MatchingViewUI = g), s("ui.view.MatchingViewUI", g);
              var y = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          top: 0,
                          skin: "lobby/bg_d.png",
                          right: 0,
                          left: 0,
                          bottom: 0,
                          sizeGrid: "21,23,17,28",
                        },
                        compId: 3,
                      },
                      {
                        type: "Image",
                        props: {
                          x: 145,
                          width: 460,
                          skin: "unpack/img_bg_off.png",
                          height: 870,
                          centerY: -80,
                          sizeGrid: "99,34,480,45",
                        },
                        compId: 4,
                        child: [
                          {
                            type: "Sprite",
                            props: {
                              y: 37,
                              x: 2,
                              texture: "unpack/bg_gx.png",
                              scaleY: 1.3,
                              scaleX: 1.3,
                            },
                            compId: 5,
                          },
                          {
                            type: "Sprite",
                            props: {
                              y: 17,
                              x: 148,
                              texture: "unpack/img_txt_hd.png",
                            },
                            compId: 6,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 158,
                              x: 107,
                              var: "img_gift",
                              skin: "unpack/img_gift_box.png",
                            },
                            compId: 15,
                          },
                          {
                            type: "Image",
                            props: {
                              y: 513,
                              x: 55,
                              width: 350,
                              var: "btn_share",
                              skin: "unpack/img_btn3.png",
                              height: 110,
                              sizeGrid: "48,80,51,79",
                              visible: false,
                            },
                            compId: 11,
                            child: [
                              {
                                type: "Label",
                                props: {
                                  y: 20,
                                  x: 51,
                                  width: 248,
                                  valign: "middle",
                                  text: "炫耀一下",
                                  height: 62,
                                  fontSize: 46,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 13,
                              },
                            ],
                          },
                          {
                            type: "Image",
                            props: {
                              y: 513,
                              x: 55,
                              width: 350,
                              var: "btn_double",
                              skin: "unpack/img_btn2.png",
                              height: 110,
                              sizeGrid: "47,61,56,56",
                            },
                            compId: 16,
                            child: [
                              {
                                type: "Sprite",
                                props: {
                                  y: 33,
                                  x: 22,
                                  texture: "unpack/img_video.png",
                                  scaleY: 0.6,
                                  scaleX: 0.6,
                                },
                                compId: 17,
                              },
                              {
                                type: "Label",
                                props: {
                                  y: 11,
                                  x: 81,
                                  width: 249,
                                  valign: "middle",
                                  text: "Double",
                                  height: 80,
                                  fontSize: 50,
                                  color: "#ffffff",
                                  bold: !0,
                                  align: "center",
                                },
                                compId: 18,
                              },
                            ],
                          },
                          {
                            type: "Label",
                            props: {
                              y: 457,
                              x: 25,
                              width: 409,
                              var: "lab_msg",
                              height: 38,
                              fontSize: 26,
                              color: "#ffffff",
                              bold: !0,
                              align: "center",
                            },
                            compId: 9,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 632,
                              x: 109,
                              width: 241,
                              var: "btn_close",
                              valign: "middle",
                              text: "Close",
                              height: 56,
                              fontSize: 40,
                              color: "#ffffff",
                              align: "center",
                            },
                            compId: 14,
                          },
                        ],
                      },
                    ],
                    loadList: [
                      "lobby/bg_d.png",
                      "unpack/img_bg_off.png",
                      "unpack/bg_gx.png",
                      "unpack/img_txt_hd.png",
                      "unpack/img_gift_box.png",
                      "unpack/img_btn3.png",
                      "unpack/img_btn2.png",
                      "unpack/img_video.png",
                    ],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.NewSkinViewUI = y), s("ui.view.NewSkinViewUI", y);
              var _ = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                return (
                  __extends(t, e),
                  (t.prototype.createChildren = function () {
                    e.prototype.createChildren.call(this), this.createView(t.uiView);
                  }),
                  (t.uiView = {
                    type: "Scene",
                    props: {
                      width: 750,
                      height: 1334,
                    },
                    compId: 2,
                    child: [
                      {
                        type: "Image",
                        props: {
                          top: 0,
                          skin: "main/bg_d.png",
                          right: 0,
                          left: 0,
                          bottom: 0,
                          sizeGrid: "17,16,20,18",
                        },
                        compId: 19,
                      },
                      {
                        type: "Image",
                        props: {
                          x: 61,
                          width: 627,
                          skin: "unpack/bg_d1.png",
                          height: 822,
                          centerY: -150,
                          sizeGrid: "169,58,51,70",
                        },
                        compId: 11,
                        child: [
                          {
                            type: "Label",
                            props: {
                              y: 877,
                              x: 221,
                              width: 185,
                              var: "btn_close",
                              valign: "middle",
                              text: "关 闭",
                              height: 48,
                              fontSize: 35,
                              color: "#ffffff",
                              anchorY: 1,
                              align: "center",
                            },
                            compId: 17,
                          },
                          {
                            type: "Label",
                            props: {
                              y: 94,
                              x: 56,
                              width: 547,
                              text: "排名                       用户                           关卡",
                              height: 35,
                              fontSize: 26,
                              color: "#ffffff",
                            },
                            compId: 22,
                          },
                          {
                            type: "WXOpenDataViewer",
                            props: {
                              y: 153,
                              x: 23,
                              width: 580,
                              var: "wx_openData",
                              iconSign: "wx",
                              height: 640,
                              runtime: "laya.ui.WXOpenDataViewer",
                            },
                            compId: 20,
                          },
                          {
                            type: "Sprite",
                            props: {
                              y: 19,
                              x: 227,
                              texture: "unpack/txt.png",
                            },
                            compId: 21,
                          },
                        ],
                      },
                    ],
                    loadList: ["main/bg_d.png", "unpack/bg_d1.png", "unpack/txt.png"],
                    loadList3D: [],
                  }),
                  t
                );
              })(o);
              (e.RankListViewUI = _), s("ui.view.RankListViewUI", _);
            })((t = e.view || (e.view = {})));
          })((i = a.ui || (a.ui = {})));
      },
      {},
    ],
    22: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = (function () {
          function e() {}
          return (
            (e.GetRandomNum = function (e, t) {
              var a = t - e + 1,
                i = Math.random();
              return e + Math.floor(i * a);
            }),
            (e.GetRandomNumList = function (t, a, i, n, o, s) {
              for (var r = [], l = 0; i > l; l++) {
                var h = e.GetRandomNum(t, a);
                if (o && 1 == o && a - t > i)
                  for (; -1 != r.indexOf(h) || (s && s.length > 0 && i + s.length < a - t && -1 != s.indexOf(h)); ) h = e.GetRandomNum(t, a);
                r.push(h);
              }
              return n && 1 == n
                ? r.sort(function (e, t) {
                    return t > e ? -1 : 1;
                  })
                : r;
            }),
            (e.Clamp = function (e, t, a) {
              return Math.max(Math.min(e, a), t);
            }),
            (e.LogVector3 = function (e, t) {
              void 0 === t && (t = ""), console.log(t + "---\x3e x : " + e.x + ", y : " + e.y + ", z : " + e.z);
            }),
            (e.GetDirection = function (e, t) {
              var a = new Laya.Vector3();
              Laya.Vector3.subtract(t, t, a);
              var i = new Laya.Vector3();
              return Laya.Vector3.normalize(a, i), i;
            }),
            (e.GetUrlData = function (e) {
              var t = window.location.search;
              return e && (t = e), (t = t.substring(1, t.length)), t.split("&");
            }),
            (e.GetUrlDataByKey = function (e, t) {
              for (var a = this.GetUrlData(t), i = 0; i < a.length; i++) if (a[i].split("=")[0] == e) return a[i].split("=")[1];
            }),
            (e.ParseTimeMS = function (e, t) {
              void 0 === t && (t = 1);
              var a = Math.floor(e / 3600),
                i = a.toString();
              10 > a && (i = "0" + a);
              var n = Math.floor((e % 3600) / 60),
                o = n.toString();
              10 > n && (o = "0" + n);
              var s = Math.floor(e % 60),
                r = s.toString();
              return 10 > s && (r = "0" + s), 1 == t ? i + "时" + o + "分" + r + "秒" : 0 == a ? o + ":" + r : i + ":" + o + ":" + r;
            }),
            (e.ParseLongNum = function (e) {
              return e >= 1e30
                ? e >= 1e31
                  ? (e / 1e30).toFixed(1) + "C"
                  : (e / 1e30).toFixed(2) + "C"
                : e >= 1e27
                ? e >= 1e28
                  ? (e / 1e27).toFixed(1) + "D"
                  : (e / 1e27).toFixed(2) + "D"
                : e >= 1e24
                ? e >= 1e25
                  ? (e / 1e24).toFixed(1) + "H"
                  : (e / 1e24).toFixed(2) + "H"
                : e >= 1e21
                ? e >= 1e22
                  ? (e / 1e21).toFixed(1) + "Q"
                  : (e / 1e21).toFixed(2) + "Q"
                : e >= 1e18
                ? e >= 1e19
                  ? (e / 1e18).toFixed(1) + "E"
                  : (e / 1e18).toFixed(2) + "E"
                : e >= 1e15
                ? e >= 1e16
                  ? (e / 1e15).toFixed(1) + "P"
                  : (e / 1e15).toFixed(2) + "P"
                : e >= 1e12
                ? e >= 1e13
                  ? (e / 1e12).toFixed(1) + "T"
                  : (e / 1e12).toFixed(2) + "T"
                : e >= 1e9
                ? e >= 1e10
                  ? (e / 1e9).toFixed(1) + "G"
                  : (e / 1e9).toFixed(2) + "G"
                : e >= 1e6
                ? e >= 1e7
                  ? (e / 1e6).toFixed(1) + "M"
                  : (e / 1e6).toFixed(2) + "M"
                : e >= 1e4
                ? (e / 1e3).toFixed(1) + "K"
                : Math.floor(e) + "";
            }),
            (e.StrToRgb32 = function (e) {
              null == e || (e = ""), "#" == e.charAt(0) && (e = e.substr(1));
              var t = e.length,
                a = t > 6 ? parseInt(e.substr(Math.max(t - 8, 0), Math.min(t - 6, 2)), 16) : 255,
                i = t > 4 ? parseInt(e.substr(Math.max(t - 6, 0), Math.min(t - 4, 2)), 16) : 0,
                n = t > 2 ? parseInt(e.substr(Math.max(t - 4, 0), Math.min(t - 2, 2)), 16) : 0,
                o = parseInt(e.substr(Math.max(t - 2, 0)), 16);
              return {
                r: i,
                g: n,
                b: o,
                a: a,
              };
            }),
            (e.Rgb32ToStr = function (e, t, a, i) {
              var n = null == i ? "" : Math.min(i, 255).toString(16);
              1 == n.length && (n = "0" + n);
              var o = Math.min(e, 255).toString(16);
              1 == o.length && (o = "0" + o);
              var s = Math.min(t, 255).toString(16);
              1 == s.length && (s = "0" + s);
              var r = Math.min(a, 255).toString(16);
              return 1 == r.length && (r = "0" + r), "#" + o + s + r + n;
            }),
            (e.GetColorFilter = function (e, t, a) {
              var i = [e, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 1, 0],
                n = new Laya.ColorFilter(i);
              return n;
            }),
            (e.getTodayStr = function () {
              var e = new Date(),
                t = e.getFullYear(),
                a = e.getMonth(),
                i = e.getDate();
              return "" + t + a + i;
            }),
            (e.captureScreen = function () {
              var t = e.drawTC(Laya.stage, Laya.stage._renderType, 750, 1334, 0, 0);
              return t.toBase64("image/png", 0.5);
            }),
            (e.drawTC = function (e, t, a, i, n, o) {
              (n -= e.x), (o -= e.y), (n |= 0), (o |= 0), (a |= 0), (i |= 0);
              var s = new Laya.WebGLContext2D();
              s.size(a, i),
                (s.asBitmap = !0),
                s._targets.start(),
                Laya.RenderSprite.renders[t]._fun(e, s, n, o),
                s.flush(),
                s._targets.end(),
                s._targets.restore();
              var r = s._targets.getData(0, 0, a, i);
              s.destroy();
              var l = new Laya.HTMLCanvas(!0);
              l.size(a, i);
              for (
                var h = l.getContext("webgl"),
                  d = h.getImageData(0, 0, a, i),
                  c = 4 * a,
                  u = (new Uint8Array(c), d.data),
                  p = i - 1,
                  f = p * c,
                  g = 0;
                p >= 0;
                p--
              )
                u.set(r.subarray(g, g + c), f), (f -= c), (g += c);
              return h.putImageData(d, 0, 0), l;
            }),
            e
          );
        })();
        a["default"] = i;
      },
      {},
    ],
    23: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/UIMgr"),
          o = e("../mgr/UserDataMgr"),
          s = e("../mgr/ConfMgr"),
          r = e("../mgr/ShareMgr"),
          l = e("../data/Define"),
          h = e("../mgr/EventCenter"),
          d = e("../data/ConstValue"),
          c = e("./ad/AdMgr"),
          u = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t._roleInfoList = s["default"].Instance.roleCfg),
                (t._roleAniList = s["default"].Instance.roleAniCfg),
                (t._roleAssetsPath = "res/assets/"),
                (t._texturePath = "res/texture/"),
                (t._addGoldNum = 80),
                (t._uiType = 0),
                (t._curSelectId = 0),
                t.bindEvent(),
                t.adpteScreen(),
                n["default"].Instance.AdpteScreen(t),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.bindEvent = function () {
                this.btn_addGold.on(Laya.Event.CLICK, this, this.clickAddGold),
                  this.btn_avatar.on(Laya.Event.CLICK, this, this.clickAvatr),
                  this.btn_ani.on(Laya.Event.CLICK, this, this.clickAni),
                  this.btn_close.on(Laya.Event.CLICK, this, this.clickClose),
                  h["default"].Instance.on(h["default"].Event_GoldChange, this, this.refreshAssets),
                  (this.box_list.vScrollBarSkin = ""),
                  (this.box_list.renderHandler = new Laya.Handler(this, this.onRender));
              }),
              (t.prototype.adpteScreen = function () {
                Laya.Browser.width / Laya.Browser.height;
              }),
              (t.prototype.Show = function () {
                (this._uiType = 0),
                  (this._curSelectId = o["default"].Instance.curUseRoleId),
                  this.createScene(),
                  this.initList(),
                  this.refreshBtns(),
                  this.refreshBtnSkin(),
                  this.refreshAssets(),
                  (this.lab_addGold.text = this._addGoldNum + ""),
                  c["default"].Instance.ShowAd("avatarView");
              }),
              (t.prototype.refreshAssets = function () {
                this.lab_zsNum.text = o["default"].Instance.gold + "";
              }),
              (t.prototype.createScene = function () {
                var e = this;
                if (!this.scene3D) {
                  this.scene3D = new Laya.Scene3D();
                  var t = new Laya.Camera(0, 0.1, 100);
                  t.transform.translate(new Laya.Vector3(0, 1, 1.2)),
                    (t.transform.rotationEuler = new Laya.Vector3(-30, 0, 0)),
                    (t.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY),
                    (t.fieldOfView = 60);
                  var a = new Laya.DirectionLight();
                  (a.transform.rotationEuler = new Laya.Vector3(-10, 0, 0)),
                    this.scene3D.addChild(t),
                    this.scene3D.addChild(a),
                    Laya.stage.addChildAt(this.scene3D, Laya.stage._children.length);
                  var i = function (t) {
                      (e._objRole = Laya.Sprite3D.instantiate(t, e.scene3D)),
                        (e._objRole.transform.localPosition = new Laya.Vector3(0, 0.45, 0)),
                        (e._objRole.transform.scale = new Laya.Vector3(1, 1, 1)),
                        e.loadRole();
                    },
                    n = Laya.loader.getRes("res/LayaScene_assets/Conventional/role_1.lh");
                  n
                    ? i(n)
                    : Laya.loader.create(
                        "res/LayaScene_assets/Conventional/role_1.lh",
                        Laya.Handler.create(this, function (e) {
                          return i(e);
                        })
                      );
                }
              }),
              (t.prototype.loadRole = function () {
                var e = this,
                  t = s["default"].Instance.GetRoleInfo(this._curSelectId);
                0 == this._uiType &&
                  t &&
                  (Laya.loader.create(
                    this._roleAssetsPath + t.head_mesh,
                    Laya.Handler.create(this, function (a) {
                      (e._objRole.getChildByName("king").active = !1),
                        (e._objRole.getChildByName("eye").active = !1),
                        (e._objRole.getChildByName("eff_stop").active = !1),
                        (e._objRole.getChildByName("eff_run").active = !1);
                      var i = e._objRole.getChildByName("role");
                      e._ani = i.getComponent(Laya.Animator);
                      var n = i.getChildByName("head"),
                        o = i.getChildByName("body"),
                        s = i.getChildByName("bozi");
                      a &&
                        n &&
                        o &&
                        ((n.meshFilter.sharedMesh = a),
                        Laya.Texture2D.load(
                          e._texturePath + t.main_texture,
                          Laya.Handler.create(e, function (e) {
                            (n.skinnedMeshRenderer.material.albedoTexture = e),
                              (o.skinnedMeshRenderer.material.albedoTexture = e),
                              (s.skinnedMeshRenderer.material.albedoTexture = e);
                          })
                        ));
                    })
                  ),
                  this.playAni("stand"));
              }),
              (t.prototype.playWinAni = function (e) {
                var t = this;
                if (this._ani) {
                  var a = this._ani.getControllerLayer()._states;
                  for (var i in a) if (a[i].name == e) return void this._ani.play(e);
                  var n = "res/assets/" + e + ".lani",
                    o = Laya.loader.getRes(n),
                    s = function (a) {
                      if (a) {
                        var i = new Laya.AnimatorState();
                        (i.name = e), (i.clip = a), (i.clip.islooping = !0), t._ani.addState(i), t._ani.play(e);
                      }
                    };
                  o
                    ? s(o)
                    : Laya.loader.create(
                        n,
                        Laya.Handler.create(n, function (e) {
                          return s(e);
                        })
                      );
                }
              }),
              (t.prototype.playAni = function (e) {
                if (this._objRole && this._ani)
                  try {
                    this._ani.play(e);
                  } catch (t) {
                    console.log(t);
                  }
              }),
              (t.prototype.initList = function () {
                0 == this._uiType ? (this.box_list.array = this._roleInfoList) : (this._uiType = 1) && (this.box_list.array = this._roleAniList);
              }),
              (t.prototype.onRender = function (e, t) {
                var a,
                  i = this,
                  n = e.getChildByName("img_icon"),
                  s = e.getChildByName("img_select"),
                  r = e.getChildByName("lab_select"),
                  l = e.getChildByName("lab_condition"),
                  h = e.getChildByName("img_suo"),
                  d = e.getChildByName("img_redpoint");
                0 == this._uiType
                  ? ((a = this._roleInfoList[t]),
                    (n.skin = "unpack/role_icon/" + a.icon),
                    (r.visible = !0),
                    (l.visible = !1),
                    (h.visible = !1),
                    (d.visible = !1),
                    o["default"].Instance.curUseRoleId == a.id
                      ? (r.text = "Used")
                      : o["default"].Instance.IsHaveRole(a.id)
                      ? (r.text = "Use")
                      : ((h.visible = !0),
                        (r.visible = !1),
                        (l.visible = !0),
                        (l.text = a.condition_val + ""),
                        (d.visible = o["default"].Instance.gold > a.condition_val)))
                  : 1 == this._uiType &&
                    ((a = this._roleAniList[t]),
                    (n.skin = "unpack/role_icon/" + a.icon),
                    (r.visible = !0),
                    (l.visible = !1),
                    (h.visible = !1),
                    (d.visible = !1),
                    o["default"].Instance.curUseAniId == a.id
                      ? (r.text = "Used")
                      : o["default"].Instance.IsHaveAni(a.id)
                      ? (r.text = "Use")
                      : ((h.visible = !0),
                        (r.visible = !1),
                        (l.visible = !0),
                        (l.text = a.condition_val + ""),
                        (d.visible = o["default"].Instance.gold > a.condition_val))),
                  (s.visible = this._curSelectId == a.id),
                  e.offAll(),
                  e.on(Laya.Event.CLICK, this, function () {
                    (i._curSelectId = a.id), i.refreshView(), 0 == i._uiType ? i.loadRole() : i.playWinAni(a.name);
                  });
              }),
              (t.prototype.refreshView = function () {
                this.box_list.refresh(), this.refreshBtns();
              }),
              (t.prototype.refreshBtns = function () {
                var e = this;
                if ((this.btn_buyOrUse.offAll(), (this.btn_buyOrUse.gray = !1), 0 == this._uiType)) {
                  var t = s["default"].Instance.GetRoleInfo(this._curSelectId);
                  t &&
                    (o["default"].Instance.IsHaveRole(t.id)
                      ? ((this.lab_buyOrUse.text = "Use"),
                        o["default"].Instance.curUseRoleId == t.id
                          ? (this.btn_buyOrUse.gray = !0)
                          : this.btn_buyOrUse.on(Laya.Event.CLICK, this, function () {
                              o["default"].Instance.UseRole(t.id) && (n["default"].Instance.ShowTips("Used"), e.refreshView());
                            }))
                      : ((this.lab_buyOrUse.text = "Buy"),
                        this.btn_buyOrUse.on(Laya.Event.CLICK, this, function () {
                          o["default"].Instance.gold >= t.condition_val
                            ? o["default"].Instance.BuyRole(t.id) &&
                              (n["default"].Instance.ShowGainItemDialog(t.id, l.KG.ItemType.SKIN),
                              n["default"].Instance.ShowTips("Get a new skin"),
                              console.log("4增加金币：", -t.condition_valt), //买皮肤时   但是是NaN
                              o["default"].Instance.AddItem(l.KG.ItemType.GOLD, -t.condition_val),
                              e.refreshView())
                            : n["default"].Instance.ShowTips("Not enough coins");
                        })));
                } else if ((this._uiType = 1)) {
                  var a = s["default"].Instance.GetRoleAniCfg(this._curSelectId);
                  a &&
                    (o["default"].Instance.IsHaveAni(a.id)
                      ? ((this.lab_buyOrUse.text = "Use"),
                        o["default"].Instance.curUseAniId == a.id
                          ? (this.btn_buyOrUse.gray = !0)
                          : this.btn_buyOrUse.on(Laya.Event.CLICK, this, function () {
                              o["default"].Instance.UseAni(a.id) && (n["default"].Instance.ShowTips("Used"), e.refreshView());
                            }))
                      : ((this.lab_buyOrUse.text = "Buy"),
                        this.btn_buyOrUse.on(Laya.Event.CLICK, this, function () {
                          o["default"].Instance.gold >= a.condition_val
                            ? o["default"].Instance.BuyAni(a.id) &&
                              (n["default"].Instance.ShowGainItemDialog(a.id, l.KG.ItemType.ANI),
                              n["default"].Instance.ShowTips("Get a new dance"),
                              console.log("5增加金币：", -a.condition_valt), //买动作时   但是是NaN
                              o["default"].Instance.AddItem(l.KG.ItemType.GOLD, -a.condition_val),
                              e.refreshView())
                            : n["default"].Instance.ShowTips("Not enough coins");
                        })));
                }
              }),
              (t.prototype.refreshBtnSkin = function () {
                (this.btn_avatar.skin = 0 == this._uiType ? "main/btn_fz_02.png" : "main/btn_fz_01.png"),
                  (this.btn_ani.skin = 1 == this._uiType ? "main/btn_qz_02.png" : "main/btn_qz_01.png");
              }),
              (t.prototype.clickAddGold = function () {
                var e = this,
                  t = d.CV.PlayerPrefs.getNumber(d.CV.PlayerPrefs.Key_GetFreeDiamondTimes);

                // t > 10 && void n["default"].Instance.ShowTips("今日免费金币次数已用完，请明日再来");
                return void r["default"].Instance.Share(
                  "free_gold",
                  null,
                  function (t, a) {
                    if (t == l.KG.SHARE_RES.SUCCESS)
                      o["default"].Instance.FreeGainGold(e._addGoldNum), n["default"].Instance.ShowTips("You got " + e._addGoldNum + " coins");
                    else {
                      var i = "操作失败,分享到其他群试试吧";
                      2 == a && (i = "完整观看才能领取哦"),
                        t == l.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                        n["default"].Instance.ShowTips(i, 2e3);
                    }
                  },
                  "免费金币"
                );

                // t > 10
                //   ? void n["default"].Instance.ShowTips("今日免费金币次数已用完，请明日再来")
                //   : void r["default"].Instance.Share(
                //       "free_gold",
                //       null,
                //       function (t, a) {
                //         if (t == l.KG.SHARE_RES.SUCCESS)
                //           o["default"].Instance.FreeGainGold(e._addGoldNum), n["default"].Instance.ShowTips("恭喜获得" + e._addGoldNum + "金币");
                //         else {
                //           var i = "操作失败,分享到其他群试试吧";
                //           2 == a && (i = "完整观看才能领取哦"),
                //             t == l.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                //             n["default"].Instance.ShowTips(i, 2e3);
                //         }
                //       },
                //       "免费金币"
                //     );
              }),
              (t.prototype.clickAvatr = function () {
                0 != this._uiType &&
                  ((this._uiType = 0),
                  (this._curSelectId = o["default"].Instance.curUseRoleId),
                  this.initList(),
                  this.loadRole(),
                  this.refreshBtns(),
                  this.refreshBtnSkin());
              }),
              (t.prototype.clickAni = function () {
                if (1 != this._uiType) {
                  (this._curSelectId = o["default"].Instance.curUseAniId),
                    (this._uiType = 1),
                    this.initList(),
                    this.refreshBtns(),
                    this.refreshBtnSkin();
                  var e = s["default"].Instance.GetRoleAniCfg(this._curSelectId);
                  this.playWinAni(e.name);
                }
              }),
              (t.prototype.clickClose = function () {
                var e = this;
                // 展示插屏广告
                //TODO showInterstitial
                console.log("请求插屏广告");
                HUHU_showInterstitialAd()
                // YYGGames.showInterstitial(() => {});
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                c["default"].Instance.CloseAllAd(),
                  this._objRole.destroy(),
                  this.scene3D.destroy(),
                  Laya.Resource.destroyUnusedResources(),
                  Laya.timer.clearAll(this),
                  (this.visible = !1),
                  Laya.timer.callLater(this, function () {
                    return e.destroy();
                  }),
                  h["default"].Instance.event(h["default"].Event_BackShowMain, "AvatarView"),
                  h["default"].Instance.offAllCaller(this);
              }),
              t
            );
          })(i.ui.view.AvatarViewUI);
        a["default"] = u;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../mgr/ConfMgr": 10,
        "../mgr/EventCenter": 11,
        "../mgr/ShareMgr": 15,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../ui/layaMaxUI": 21,
        "./ad/AdMgr": 40,
      },
    ],
    24: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../utils/Tools"),
          o = e("../mgr/EventCenter"),
          s = e("./ad/AdMgr"),
          r = e("../mgr/ShareMgr"),
          l = e("../data/Define"),
          h = e("../mgr/UserDataMgr"),
          d = e("../data/ConstValue"),
          c = e("../mgr/UIMgr"),
          u = e("../mgr/StatisMgr"),
          p = e("../mgr/ConfMgr"),
          f = (function (e) {
            function t() {
              var t = e.call(this) || this;
              (t._skinAward = [6, 22]), (t.signGolds = [20, 20, 20, 20, 50, 100, 100]);
              var a = Laya.stage.width / Laya.stage.height;
              return (
                750 / 1334 > a && (t.height = (750 * Laya.stage.height) / Laya.stage.width),
                t.block.on(Laya.Event.CLICK, t, function () {}),
                t.btn_close.on(Laya.Event.CLICK, t, t.clickClose),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Show = function () {
                this.createScene(), s["default"].Instance.ShowBannerAd("DaySignView");
                var e = this._getDatas();
                this._turns = e.turns;
                for (
                  var t = [this.red_1, this.red_2, this.red_3, this.red_4, this.red_5, this.red_6, this.red_7],
                    a = [this.nike_1, this.nike_2, this.nike_3, this.nike_4, this.nike_5, this.nike_6, this.nike_7],
                    i = 1;
                  7 >= i;
                  i++
                )
                  e.date != n["default"].getTodayStr()
                    ? (i == Number(e.days) + 1 && (t[i - 1].visible = !0), i <= Number(e.days) && (a[i - 1].visible = !0))
                    : i <= Number(e.days) && (a[i - 1].visible = !0);
                e.turns > 0
                  ? ((this.bg.skin = "unpack/daysign_bg_2.png"),
                    (this.btn_double.visible = !1),
                    (this.btn_get.visible = !1),
                    e.date != n["default"].getTodayStr() &&
                      ((this.btn_double.visible = !0),
                      (this.btn_get.visible = !0),
                      this.btn_double.on(Laya.Event.CLICK, this, this.getDouble),
                      this.btn_get.on(Laya.Event.CLICK, this, this.getCom)))
                  : ((this.btn_double.visible = !1),
                    (this.btn_get.visible = !1),
                    e.date != n["default"].getTodayStr() &&
                      ((this.btn_double.visible = !0),
                      (this.btn_get.visible = !0),
                      1 == Number(e.days) || 6 == Number(e.days)
                        ? ((this.btn_get.visible = !1), (this.lab_btn.text = "Claim"), this.btn_double.on(Laya.Event.CLICK, this, this.getCom))
                        : ((this.lab_btn.text = "Double"),
                          this.btn_get.on(Laya.Event.CLICK, this, this.getCom),
                          this.btn_double.on(Laya.Event.CLICK, this, this.getDouble))));
              }),
              (t.prototype.createScene = function () {
                if (!this.scene3D) {
                  this.scene3D = new Laya.Scene3D();
                  var e = new Laya.Camera(0, 0.1, 100);
                  e.transform.translate(new Laya.Vector3(0, 0, 1.2)),
                    (e.transform.rotationEuler = new Laya.Vector3(0, 0, 0)),
                    (e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY),
                    (e.fieldOfView = 60);
                  var t = new Laya.DirectionLight();
                  (t.transform.rotationEuler = new Laya.Vector3(-20, 0, 0)),
                    this.scene3D.addChild(e),
                    this.scene3D.addChild(t),
                    Laya.stage.addChildAt(this.scene3D, Laya.stage._children.length),
                    this.loadRoles();
                }
              }),
              (t.prototype.loadRoles = function () {
                var e = this;
                this.tryObjRoleRoot && this.tryObjRoleRoot.destroy(),
                  (this.tryObjRoleRoot = new Laya.Sprite3D()),
                  this.scene3D.addChild(this.tryObjRoleRoot);
                var t = (1334 / Laya.stage.height) * 0.215, //签到页 角色的y轴坐标  原来是0.3
                  a = (1334 / Laya.stage.height) * 0.45,
                  i = function (i) {
                    for (
                      var n = function (n) {
                          var o = Laya.Sprite3D.instantiate(i, e.tryObjRoleRoot);
                          o.transform.localPosition = new Laya.Vector3(0, t - a * n, 0);
                          var s = 0.22 + 0.2 * n; //角色的大小   原来是0.3   现在改成0.22
                          o.transform.scale = new Laya.Vector3(s, s, s);
                          var r = p["default"].Instance.GetRoleInfo(e._skinAward[n]);
                          r &&
                            Laya.loader.create(
                              "res/assets/" + r.head_mesh,
                              Laya.Handler.create(e, function (t) {
                                (o.getChildByName("king").active = !1),
                                  (o.getChildByName("eye").active = !1),
                                  (o.getChildByName("eff_stop").active = !1),
                                  (o.getChildByName("eff_run").active = !1);
                                var a = o.getChildByName("role").getChildByName("head"),
                                  i = o.getChildByName("role").getChildByName("body"),
                                  n = o.getChildByName("role").getChildByName("bozi");
                                t &&
                                  a &&
                                  i &&
                                  ((a.meshFilter.sharedMesh = t),
                                  Laya.Texture2D.load(
                                    "res/texture/" + r.main_texture,
                                    Laya.Handler.create(e, function (e) {
                                      (a.skinnedMeshRenderer.material.albedoTexture = e),
                                        (i.skinnedMeshRenderer.material.albedoTexture = e),
                                        (n.skinnedMeshRenderer.material.albedoTexture = e);
                                    })
                                  ));
                              })
                            );
                        },
                        o = 0;
                      2 > o;
                      o++
                    )
                      n(o);
                  },
                  n = Laya.loader.getRes("res/LayaScene_assets/Conventional/role_1.lh");
                n
                  ? i(n)
                  : Laya.loader.create(
                      "res/LayaScene_assets/Conventional/role_1.lh",
                      Laya.Handler.create(this, function (e) {
                        return i(e);
                      })
                    );
              }),
              (t.prototype.clickClose = function () {
                // YYGGames.showInterstitial(() => {});
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                this._close(), o["default"].Instance.event(o["default"].Event_BackShowMain);
              }),
              (t.prototype._close = function () {
                this.tryObjRoleRoot && (this.tryObjRoleRoot.destroy(), (this.tryObjRoleRoot = null)),
                  this.scene3D.destroy(),
                  Laya.timer.clearAll(this),
                  Laya.stage.removeChild(this),
                  this.destroy(),
                  s["default"].Instance.CloseBannerAd("DaySignView");
              }),
              (t.prototype._getDatas = function () {
                var e = d.CV.PlayerPrefs.getString(d.CV.PlayerPrefs.Key_DaySign);
                e || (e = "0_0_0");
                var t = e.split("_");
                return {
                  date: t[0],
                  days: t[1],
                  turns: t[2],
                };
              }),
              (t.prototype.getCom = function () {
                var e = this,
                  t = this._getDatas();
                if (t.date != n["default"].getTodayStr()) {
                  var a = Number(t.days);
                  if (0 != this._turns || (1 != a && 6 != a)) this.complete(0, this.signGolds[a], !1, a + 1);
                  else {
                    var i = 1 == a ? 0 : 1;
                    r["default"].Instance.Share(
                      "daily_sign",
                      null,
                      function (t, n) {
                        if (t == l.KG.SHARE_RES.SUCCESS) e.complete(1, e._skinAward[i], !1, a + 1);
                        else {
                          var o = "操作失败,换个群试试吧";
                          2 == n && (o = "完整观看才能领取哦"),
                            t == l.KG.SHARE_RES.ERROR && (o = "今日视频次数已用完，请明日再来"),
                            c["default"].Instance.ShowTips(o, 2e3);
                        }
                      },
                      "转盘"
                    );
                  }
                }
              }),
              (t.prototype.getDouble = function () {
                var e = this,
                  t = this._getDatas();
                if (t.date != n["default"].getTodayStr()) {
                  var a = Number(t.days);
                  u["default"].SendEvent("签到", {
                    双倍: '点击垫到_第"' + a + "天",
                  }),
                    r["default"].Instance.Share(
                      "daily_sign",
                      null,
                      function (t, i) {
                        if (t == l.KG.SHARE_RES.SUCCESS) e.complete(0, e.signGolds[a], !0, a + 1);
                        else {
                          var n = "操作失败,换个群试试吧";
                          2 == i && (n = "完整观看才能领取哦"),
                            t == l.KG.SHARE_RES.ERROR && (n = "今日视频次数已用完，请明日再来"),
                            c["default"].Instance.ShowTips(n, 2e3);
                        }
                      },
                      "转盘"
                    );
                }
              }),
              (t.prototype.complete = function (e, t, a, i) {
                if ((this._sign(), 0 == e)) {
                  var n = "普通";
                  a && ((t *= 2), (n = "双倍")),
                    console.log("6增加金币：", t), //签到双倍领取
                    h["default"].Instance.AddItem(l.KG.ItemType.GOLD, t),
                    c["default"].Instance.ShowTips("Get " + t + " coins"),
                    u["default"].SendEvent("签到", {
                      event: n + "签到_" + i,
                    }),
                    this.clickClose();
                } else
                  this._close(),
                    h["default"].Instance.BuyRole(t),
                    c["default"].Instance.ShowGainItemDialog(t, l.KG.ItemType.SKIN, function () {
                      o["default"].Instance.event(o["default"].Event_BackShowMain);
                    }),
                    c["default"].Instance.ShowTips("Get a cool skin"),
                    u["default"].SendEvent("签到", {
                      event: "普通签到_" + i,
                    });
              }),
              (t.prototype._sign = function () {
                var e = this._getDatas();
                if (e.date != n["default"].getTodayStr()) {
                  var t = n["default"].getTodayStr(),
                    a = Number(e.days) + 1,
                    i = Number(e.turns);
                  d.CV.PlayerPrefs.setString(d.CV.PlayerPrefs.Key_DaySign, t + "_" + a + "_" + i);
                }
              }),
              t
            );
          })(i.ui.view.DaySignViewUI);
        a["default"] = f;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../mgr/ConfMgr": 10,
        "../mgr/EventCenter": 11,
        "../mgr/ShareMgr": 15,
        "../mgr/StatisMgr": 17,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../ui/layaMaxUI": 21,
        "../utils/Tools": 22,
        "./ad/AdMgr": 40,
      },
    ],
    25: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/UIMgr"),
          o = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.zOrder = 300), n["default"].Instance.AdpteScreen(t), t.btn_cancel.on(Laya.Event.CLICK, t, t.clickCancel), t;
            }
            return (
              __extends(t, e),
              (t.prototype.Show = function (e, t, a, i) {
                var n = this;
                void 0 === a && (a = !1),
                  void 0 === i && (i = "确认"),
                  (this.visible = !0),
                  (this.lab_msg.text = e),
                  (this._callback = t),
                  (this.lab_ok.text = i),
                  this.btn_ok.once(Laya.Event.CLICK, this, function () {
                    (n.visible = !1), n._callback && n._callback(!0);
                  }),
                  a ? ((this.btn_cancel.visible = !0), (this.btn_ok.x = 368)) : ((this.btn_cancel.visible = !1), (this.btn_ok.x = 209));
              }),
              (t.prototype.clickCancel = function () {
                (this.visible = !1), this._callback && this._callback(!1);
              }),
              t
            );
          })(i.ui.view.DialogTipUI);
        a["default"] = o;
      },
      {
        "../mgr/UIMgr": 18,
        "../ui/layaMaxUI": 21,
      },
    ],
    26: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../data/Define"),
          o = e("../mgr/UIMgr"),
          s = e("../mgr/ShareMgr"),
          r = e("../mgr/GameMgr"),
          l = e("../mgr/UserDataMgr"),
          h = e("./ad/AdMgr"),
          d = e("../mgr/EventCenter"),
          c = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return t.bindEvent(), t.adpteScreen(), t.loadSk(), o["default"].Instance.AdpteScreen(t), t;
            }
            return (
              __extends(t, e),
              (t.prototype.bindEvent = function () {
                this.btn_next.on(Laya.Event.CLICK, this, this.clickNext),
                  this.btn_resetart.on(Laya.Event.CLICK, this, this.clickNext),
                  this.btn_jixu.on(Laya.Event.CLICK, this, this.clickJiXu),
                  this.btn_lobby.on(Laya.Event.CLICK, this, this.clickLobby),
                  this.btn_giftBox.on(Laya.Event.CLICK, this, this.clickGift),
                  d["default"].Instance.on(d["default"].Event_GoldChange, this, this.refreshAssets);
              }),
              (t.prototype.adpteScreen = function () {
                // var e = 750 / 1344,
                //   t = Laya.Browser.width / Laya.Browser.height;
                // e > t && ((this.grp_assets.top = 90), (this.box_top.top = 160));
              }),
              (t.prototype.ShowEnd = function (e, t, a) {
                this.end_coins_bg.visible = end_game_conins_visible;
                ((this.coins_num.text = "+" + window.end_game_conins), h["default"].Instance.ShowBannerAd("EndGameView")),
                  h["default"].Instance.ShowAd("endView");
                var i = l["default"].Instance.userInfo;
                this.lab_cur.changeText(i.gId.toString()),
                  this.lab_next.changeText((i.gId + 1).toString()),
                  this.refreshAssets(),
                  this.giftBtnAni.play(0, !0),
                  (this.btn_giftBox.visible = !0);
                var n = i.sId;
                (this.lab_rank.text = "No " + e + ""),
                  (this.img_winOrLose.skin = t ? "main/bg_sl.png" : "main/bg_sb.png"),
                  t
                    ? ((this.btn_next.visible = !0), (this.btn_jixu.visible = !1), (this.btn_resetart.visible = !1))
                    : ((this.btn_next.visible = !1),
                      (this.btn_jixu.visible = !0),
                      (this.btn_resetart.visible = !0),
                      this.jixuBtnAni.play(0, !0),
                      (n = a));
                for (var o = 1; 3 >= o; o++)
                  n > o
                    ? (this["img_gq" + o].skin = "main/3-1.png")
                    : n == o
                    ? (this["img_gq" + o].skin = "main/3-2.png")
                    : (this["img_gq" + o].skin = "main/3-3.png");
              }),
              (t.prototype.refreshAssets = function () {
                this.lab_zsNum.changeText(l["default"].Instance.gold.toString());
              }),
              (t.prototype.clickNext = function () {
                // YYGGames.icon && ((YYGGames.icon.top = 1200), (YYGGames.icon.right = 145), (YYGGames.icon.skin = "yad2.png"));
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = false);
                h["default"].Instance.CloseBannerAd("EndGameView"), (this.visible = !1);
                var e = function () {
                  r["default"].Instance.ContinueGame();
                };
                (s["default"].Instance.hasSharePower && h["default"].Instance.ShowMoreGame(e)) || e();
              }),
              (t.prototype.clickJiXu = function () {
                var e = this;
                s["default"].Instance.Share(
                  "revive",
                  null,
                  function (t, a) {
                    if (t == n.KG.SHARE_RES.SUCCESS)
                      l["default"].Instance.Revive(),
                        r["default"].Instance.ContinueGame(),
                        (e.visible = !1),
                        YYGGames.icon && ((YYGGames.icon.top = 1200), (YYGGames.icon.right = 145), (YYGGames.icon.skin = "yad2.png")),
                        YYGGames.gameBanner && (YYGGames.gameBanner.visible = false),
                        h["default"].Instance.CloseBannerAd("EndGameView");
                    else {
                      var i = "操作失败,分享到其他群试试吧";
                      2 == a && (i = "完整观看才能领取哦"),
                        t == n.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                        o["default"].Instance.ShowTips(i, 2e3);
                    }
                  },
                  "复活"
                );
              }),
              (t.prototype.clickLobby = function () {
                // 展示插屏广告
                //TODO showInterstitial
                console.log("请求插屏广告");
                HUHU_showInterstitialAd()
                // YYGGames.showInterstitial(() => {});
                h["default"].Instance.CloseBannerAd("EndGameView"), r["default"].Instance.ReturnMainView(), (this.visible = !1);
              }),
              (t.prototype.clickGift = function () {
                var e = this;
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = false);
                o["default"].Instance.ShowGainItemDialog(1, n.KG.ItemType.GIFTBOX, function () {
                  h["default"].Instance.ShowAd("endView"), (e.btn_giftBox.visible = !1);
                  // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                });
              }),
              (t.prototype.loadSk = function () {
                var e = this,
                  t = new Laya.Templet();
                t.on(Laya.Event.COMPLETE, this, function () {
                  (e.skeleton1 = new Laya.Skeleton()),
                    (e.skeleton1 = t.buildArmature(0)),
                    e.skeleton1.pos(180, 667),
                    e.skeleton1.scale(1.5, 1.5),
                    e.skeleton1.showSkinByIndex(0),
                    (t.lock = !0);
                }),
                  t.loadAni("res/sk/qz_1.sk");
              }),
              t
            );
          })(i.ui.view.EndGameViewUI);
        a["default"] = c;
      },
      {
        "../data/Define": 5,
        "../mgr/EventCenter": 11,
        "../mgr/GameMgr": 12,
        "../mgr/ShareMgr": 15,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../ui/layaMaxUI": 21,
        "./ad/AdMgr": 40,
      },
    ],
    27: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/EventCenter"),
          o = e("../mgr/UserDataMgr"),
          s = e("../data/ConstValue"),
          r = e("../mgr/GameMgr"),
          l = e("../mgr/ShareMgr"),
          h = e("../data/Define"),
          d = e("../mgr/UIMgr"),
          c = e("../mgr/SoundMgr"),
          u = e("./ad/AdMgr"),
          p = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t._userInfo = o["default"].Instance.userInfo),
                (t._updatestep = 0),
                t.bindEvent(),
                t.adpteScreen(),
                d["default"].Instance.AdpteScreen(t),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.bindEvent = function () {
                var e = this;
                // this.btn_outGame.on(Laya.Event.CLICK, this, function () {//原暂停按钮
                //   return e.clickOutGame(!0);
                // }),
                //原暂停按钮改为直接回到主页按钮
                this.btn_outGame.on(Laya.Event.CLICK, this, function () {
                  // YYGGames.showInterstitial(() => {});
                  // YYGGames.icon && ((YYGGames.icon.top = 15), (YYGGames.icon.right = 25), (YYGGames.icon.skin = "yad.png"));
                  // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                  (this.box_outGame.visible = e), r["default"].Instance.gameScene.PauseGame(e), this.clickBackToMain();
                }),
                  this.btn_stay.on(Laya.Event.CLICK, this, function () {
                    return e.clickOutGame(!1);
                  }),
                  this.btn_back.on(Laya.Event.CLICK, this, this.clickBackToMain),
                  this.btn_closeJump.on(Laya.Event.CLICK, this, this.hideJump),
                  this.btn_isshow.on(Laya.Event.CLICK, this, this.clickNoShowJump),
                  this.btn_jump.on(Laya.Event.CLICK, this, this.clickJump),
                  this.btn_jumpGQ.on(Laya.Event.CLICK, this, this.clickJump),
                  this.box_clickScreen.on(Laya.Event.MOUSE_DOWN, this, this.pressDown),
                  this.box_clickScreen.on(Laya.Event.MOUSE_OUT, this, this.pressUp),
                  this.box_clickScreen.on(Laya.Event.MOUSE_UP, this, this.pressUp);
              }),
              (t.prototype.adpteScreen = function () {
                // var e = 750 / 1344,
                //   t = Laya.Browser.width / Laya.Browser.height;
                // e > t && ((this.grp_assets.top = 70), (this.progress_end.top = 180), (this.box_rank.top = 250), (this.btn_jumpGQ.top = 250));
              }),
              (t.prototype.pressDown = function () {
                n["default"].Instance.event(n["default"].Event_Oprt, !0);
              }),
              (t.prototype.pressUp = function () {
                n["default"].Instance.event(n["default"].Event_Oprt, !1);
              }),
              (t.prototype.Init = function (e) {
                (this.visible = !0),
                  (this.box_rank.visible = !1),
                  (this.box_jump.visible = !1),
                  this.UpdateProgress(0),
                  this.lab_zsNum.changeText(this._userInfo.golds + ""),
                  (this.grp_chaoyue.visible = !1),
                  (this.grp_shareScreen.visible = !1),
                  (this.box_outGame.visible = !1);
                for (var t = 0; 5 > t; t++) (this["img_rank" + t].visible = !0), (this["lab_name_" + t].text = "333");
                for (var t = e; 5 > t; t++) this["img_rank" + t].visible = !1;
                this._updatestep = 0;
                // var a = s.CV.PlayerPrefs.getNumber("jump_gq_times");
                // this.btn_jumpGQ.visible = !a || 5 >= a;
                this.btn_jumpGQ.visible = !1; //先隐藏   倒计时结束后 展示按钮
                this.btn_outGame.visible = !1;
                Laya.timer.once(3000, this, () => {
                  this.btn_jumpGQ.visible = !0;
                  this.btn_outGame.visible = !0;
                });
              }),
              (t.prototype.UpdateProgress = function (e) {
                this.progress_end.value = e;
              }),
              (t.prototype.UpdatePlayerRank = function (e) {
                if (!(Date.now() - this._updatestep < 500)) {
                  this._updatestep = Date.now();
                  for (var t = 0; t < e.length; t++)
                    if (this["img_rank" + t]) {
                      var a = this["img_rank" + t].getChildByName("lab_name"),
                        i = this["img_rank" + t].getChildByName("img_icon"),
                        n = e[t].userInfo.nickName;
                      (a.color = "Me" == n ? "#4f95f4" : "#000000"), (a.text = n), (i.skin = e[t].userInfo.faceUrl);
                    }
                }
              }),
              (t.prototype.SetPlayerName = function (e) {
                //给游戏中所有角色添加名字
                for (var t = 0; 5 > t; t++)
                  e[t] ? (this["lab_name_" + t].text = e[t].nickName) : (this["lab_name_" + t].text = ""), (this["lab_name_" + t].color = "#2fd9e5");
              }),
              (t.prototype.GetNameLabel = function (e) {
                return this["lab_name_" + e];
              }),
              (t.prototype.PlayDaoJiShiTween = function (e) {
                var t = this,
                  a = 4;
                this.img_cd.visible = !0;
                var i = function () {
                  a--,
                    0 > a
                      ? (Laya.timer.clear(t.img_cd, i), (t.img_cd.visible = !1))
                      : 0 == a
                      ? (e && e(), (t.box_rank.visible = !0), (t.img_cd.skin = "main/img_go.png"))
                      : (t.img_cd.scale(3, 3),
                        Laya.Tween.to(
                          t.img_cd,
                          {
                            scaleX: 1,
                            scaleY: 1,
                          },
                          300,
                          Laya.Ease.circIn
                        ),
                        (t.img_cd.skin = "main/img_" + a + ".png"));
                };
                i(), Laya.timer.loop(1e3, this.img_cd, i);
              }),
              (t.prototype.ClearDaoJiShi = function () {
                Laya.timer.clearAll(this.img_cd);
              }),
              (t.prototype.showGuideMsg = function (e) {
                (this.img_guide.skin = "unpack/" + e + ".png"), this.guideAni.play(0, !1);
              }),
              (t.prototype.clickNoShowJump = function () {
                var e = (r["default"].Instance.needShowJumpView = !r["default"].Instance.needShowJumpView);
                this.btn_isshow.getChildAt(0).visible = !e;
              }),
              (t.prototype.clickJump = function () {
                var e = this;
                l["default"].Instance.Share(
                  "jump",
                  null,
                  function (t, a) {
                    if (t == h.KG.SHARE_RES.SUCCESS)
                      o["default"].Instance.Jump(),
                        r["default"].Instance.ContinueGame(),
                        (e.visible = !1),
                        u["default"].Instance.CloseBannerAd("JumpView"),
                        u["default"].Instance.CloseBannerAd("GameView"),
                        u["default"].Instance.CloseAllAd(),
                        (e.box_jump.visible = !1);
                    else {
                      var i = "操作失败,分享到其他群试试吧";
                      2 == a && (i = "完整观看才能领取哦"),
                        t == h.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                        d["default"].Instance.ShowTips(i, 2e3);
                    }
                  },
                  "跳关"
                );
              }),
              (t.prototype.showJump = function () {
                if (r["default"].Instance.needShowJumpView) {
                  var e = s.CV.PlayerPrefs.getNumber("jump_gq_times");
                  (!e || 5 >= e) &&
                    (u["default"].Instance.CloseBannerAd("GameView"),
                    u["default"].Instance.ShowBannerAd("JumpView"),
                    u["default"].Instance.ShowAd("jumpView"),
                    (this.btn_isshow.getChildAt(0).visible = !r["default"].Instance.needShowJumpView),
                    (this.box_jump.visible = !0),
                    r["default"].Instance.gameScene.PauseGame(!0));
                }
              }),
              (t.prototype.hideJump = function () {
                (this.box_jump.visible = !1),
                  r["default"].Instance.gameScene.PauseGame(!1),
                  u["default"].Instance.ShowBannerAd("GameView"),
                  u["default"].Instance.CloseBannerAd("JumpView"),
                  u["default"].Instance.CloseAllAd();
              }),
              (t.prototype.clickOutGame = function (e) {
                e
                  ? (u["default"].Instance.CloseBannerAd("GameView"),
                    u["default"].Instance.ShowBannerAd("BackView"),
                    u["default"].Instance.ShowAd("backView"))
                  : (u["default"].Instance.ShowBannerAd("GameView"),
                    u["default"].Instance.CloseBannerAd("BackView"),
                    u["default"].Instance.CloseAllAd()),
                  (this.box_outGame.visible = e),
                  r["default"].Instance.gameScene.PauseGame(e);
              }),
              (t.prototype.clickRestart = function () {
                r["default"].Instance.gameScene.Restart(), (this.box_outGame.visible = !1);
              }),
              (t.prototype.clickBackToMain = function () {
                u["default"].Instance.CloseBannerAd("BackView"),
                  u["default"].Instance.CloseBannerAd("GameView"),
                  r["default"].Instance.ReturnMainView(),
                  this.ClearDaoJiShi(),
                  c["default"].Instance.StopSound("daojishi");
              }),
              t
            );
          })(i.ui.view.GameViewUI);
        a["default"] = p;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../mgr/EventCenter": 11,
        "../mgr/GameMgr": 12,
        "../mgr/ShareMgr": 15,
        "../mgr/SoundMgr": 16,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../ui/layaMaxUI": 21,
        "./ad/AdMgr": 40,
      },
    ],
    28: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/UIMgr"),
          o = e("../utils/Tools"),
          s = e("./ad/AdMgr"),
          r = e("../data/Define"),
          l = e("../mgr/ShareMgr"),
          h = e("../mgr/UserDataMgr"),
          d = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                n["default"].Instance.AdpteScreen(t),
                (t.img_bg.filters = [o["default"].GetColorFilter(68 / 255, 108 / 255, 207 / 255)]),
                t.btn_close.on(Laya.Event.CLICK, t, t.clickClose),
                t.btn_vedio.on(Laya.Event.CLICK, t, t.clickShare),
                t.btn_touch.on(Laya.Event.CLICK, t, t.clickOpen),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Show = function (e, t) {
                var a = this;
                if (
                  (e
                    ? (s["default"].Instance.ShowBannerAd("GiftView", !1),
                      Laya.timer.clearAll(this),
                      Laya.timer.frameLoop(2, this, this.updateValue),
                      (this.box_bottom.visible = !0),
                      (this.btn_vedio.visible = !1),
                      (this.btn_close.visible = !1),
                      (this.progress_click.value = 0),
                      this.lab_jindu.changeText("疯狂点击打开宝箱按钮"))
                    : (s["default"].Instance.ShowBannerAd("GiftView"),
                      (this.box_bottom.visible = !1),
                      (this.btn_vedio.visible = !0),
                      (this.btn_close.visible = !0)),
                  (this.callback = function () {
                    t && t();
                  }),
                  !this.scene3D)
                ) {
                  this.scene3D = new Laya.Scene3D();
                  var i = new Laya.Camera(0, 0.1, 100);
                  i.transform.translate(new Laya.Vector3(0, 0, 1.5)),
                    (i.transform.rotationEuler = new Laya.Vector3(-20, 0, 0)),
                    (i.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY),
                    (i.fieldOfView = 60);
                  var n = new Laya.DirectionLight();
                  (n.transform.rotationEuler = new Laya.Vector3(-30, 0, 0)),
                    this.scene3D.addChild(i),
                    this.scene3D.addChild(n),
                    Laya.stage.addChildAt(this.scene3D, Laya.stage._children.length),
                    Laya.loader.create(
                      "res/LayaScene_assets/Conventional/liwu.lh",
                      Laya.Handler.create(this, function (e) {
                        (a.objGiftBox = Laya.Sprite3D.instantiate(e)),
                          a.scene3D.addChild(a.objGiftBox),
                          (a.objGiftBox.transform.position = new Laya.Vector3(0, -0.55, 0));
                      })
                    );
                }
              }),
              (t.prototype.clickClose = function () {
                var e = this;
                // YYGGames.icon && ((YYGGames.icon.top = 15), (YYGGames.icon.right = 25), (YYGGames.icon.skin = "yad.png"));
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                s["default"].Instance.CloseBannerAd("GiftView"),
                  s["default"].Instance.CloseAllAd(),
                  this.objGiftBox.destroy(),
                  this.scene3D.destroy(),
                  Laya.Resource.destroyUnusedResources(),
                  Laya.timer.clearAll(this),
                  (this.visible = !1),
                  Laya.timer.callLater(this, function () {
                    return e.destroy();
                  }),
                  this.callback();
              }),
              (t.prototype.clickShare = function () {
                var e = this;
                l["default"].Instance.Share(
                  "get_gift",
                  null,
                  function (t, a) {
                    if (t == r.KG.SHARE_RES.SUCCESS) e.complete();
                    else {
                      var i = "操作失败,换个群试试吧";
                      2 == a && (i = "完整观看才能领取哦"),
                        t == r.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                        n["default"].Instance.ShowTips(i, 2e3);
                    }
                  },
                  "宝箱"
                );
              }),
              (t.prototype.clickOpen = function () {
                var e = this.progress_click.value;
                (e += 0.18), e > 1 && (e = 1), (this.progress_click.value = e);
              }),
              (t.prototype.updateValue = function () {
                var e = this.progress_click.value;
                0 >= e ||
                  ((e -= 0.006),
                  0 >= e && (e = 0),
                  (this.progress_click.value = e),
                  this.lab_jindu.changeText("点满即可打开宝箱,当前: " + Math.floor(100 * e) + "%"),
                  this.progress_click.value >= 0.9 &&
                    (s["default"].Instance.ShowBannerAd("GiftView"),
                    Laya.timer.clearAll(this),
                    (this.btn_touch.visible = !1),
                    (this.btn_close.visible = !1),
                    Laya.timer.once(1500, this, this.complete)));
              }),
              (t.prototype.complete = function () {
                var e = o["default"].GetRandomNum(1, 3),
                  t = "转盘券",
                  a = 1;
                e > 1
                  ? ((t = "金币"),
                    (a = 2 == e ? 50 : 100),
                    n["default"].Instance.ShowTips("Get " + a + " coins"),
                    console.log("7增加金币：", a), //终点礼盒
                    h["default"].Instance.AddItem(r.KG.ItemType.GOLD, a))
                  : (n["default"].Instance.ShowTips("Get a draw chance"), h["default"].Instance.AddTurnTableTisket(1)),
                  this.clickClose();
              }),
              t
            );
          })(i.ui.view.GiftViewUI);
        a["default"] = d;
      },
      {
        "../data/Define": 5,
        "../mgr/ShareMgr": 15,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../ui/layaMaxUI": 21,
        "../utils/Tools": 22,
        "./ad/AdMgr": 40,
      },
    ],
    29: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/UIMgr"),
          o = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.stageW = Laya.stage.width), (t.stageH = Laya.stage.height), (t.zOrder = 480), n["default"].Instance.AdpteScreen(t), t.Init(), t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Init = function () {
                (this.maskArea = new Laya.Sprite()),
                  (this.maskArea.alpha = 0.7),
                  this.maskArea.graphics.drawRect(0, 0, this.stageW, this.stageH, "#000000"),
                  this.sp_guide.addChild(this.maskArea),
                  (this.interactionArea = new Laya.Sprite()),
                  (this.interactionArea.blendMode = "destination-out"),
                  this.sp_guide.addChild(this.interactionArea),
                  (this.clickArea = new Laya.HitArea()),
                  this.clickArea.hit.drawRect(0, 0, this.stageW, this.stageH, "#000000"),
                  (this.sp_guide.hitArea = this.clickArea),
                  (this.sp_guide.mouseEnabled = !0);
              }),
              (t.prototype.ShowGuide = function (e, t, a, i, n, o) {
                var s = this;
                if (e) {
                  this.visible = !0;
                  var r = e.width,
                    l = e.height,
                    h = new Laya.Point(e.x, e.y);
                  e.parent.localToGlobal(h);
                  var d = isNaN(e.anchorX) ? 0 : e.anchorX,
                    c = isNaN(e.anchorY) ? 0 : e.anchorY,
                    u = h.x - r * d + r / 2,
                    p = h.y - l * c + l / 2,
                    f = r > l ? r : l;
                  this.clickArea.hit.drawRect(0, 0, this.stageW, this.stageH, "#000000"),
                    this.clickArea.unHit.drawCircle(u, p, f / 2, "#000000"),
                    this.interactionArea.graphics.drawCircle(u, p, f / 2, "#000000"),
                    (this.sp_guide.visible = !0),
                    (this.img_hand.visible = !0),
                    this.img_hand.pos(u + r / 3, p),
                    this.handAni.play(0, !0),
                    this.box_bg.offAll(Laya.Event.CLICK),
                    this.box_bg.on(Laya.Event.CLICK, this, function () {
                      n && n(!0), s.clickArea.unHit.clear(), s.interactionArea.graphics.clear(), (s.visible = !1), i && e.event(Laya.Event.CLICK);
                    }),
                    (this.lab_guideMsg.y = p - 170),
                    (this.lab_guideMsg.text = a),
                    this.offAll(Laya.Event.DOUBLE_CLICK),
                    1 == o &&
                      this.on(Laya.Event.DOUBLE_CLICK, this, function () {
                        s.clickArea.unHit.clear(), s.interactionArea.graphics.clear(), (s.visible = !1), n && n(!1);
                      });
                }
              }),
              t
            );
          })(i.ui.view.GuideViewUI);
        a["default"] = o;
      },
      {
        "../mgr/UIMgr": 18,
        "../ui/layaMaxUI": 21,
      },
    ],
    30: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../mgr/UIMgr"),
          n = e("../ui/layaMaxUI"),
          o = e("../mgr/EventCenter"),
          s = e("./ad/AdMgr"),
          r = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.texMsg = ""),
                (t.zOrder = 300),
                i["default"].Instance.AdpteScreen(t),
                o["default"].Instance.on(o["default"].Event_Loading, t, t.UpdateProgress),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Show = function (e, t) {
                (this.bar_load.visible = !0),
                  (this.lab_progress.visible = !0),
                  (this.texMsg = "Loading..."),
                  t && (this.texMsg = t),
                  (this.visible = e),
                  (this.bar_load.value = 0),
                  (this.lab_progress.text = ""),
                  e ? s["default"].Instance.ShowBannerAd("Loading") : s["default"].Instance.CloseBannerAd("Loading");
              }),
              (t.prototype.UpdateProgress = function (e) {
                (e = e > 1 ? 1 : e), (e = 0 > e ? 0 : e);
                e = e == 0.5 ? 0.1 : e; //进度条要从0开始不知道为啥开始时0.5   如果是0.5就变成0.1
                var t = Math.ceil(100 * e);
                // console.log("进度条百分比", e);
                (this.lab_progress.text = this.texMsg + t + "%"), (this.bar_load.value = e);
              }),
              (t.prototype.SetProgressVisible = function (e) {
                (this.bar_load.visible = e), (this.lab_progress.visible = e);
              }),
              (t.prototype.ShowLoadingBanner = function () {
                s["default"].Instance.ShowBannerAd("Loading");
              }),
              t
            );
          })(n.ui.view.LoadingUI);
        a["default"] = r;
      },
      {
        "../mgr/EventCenter": 11,
        "../mgr/UIMgr": 18,
        "../ui/layaMaxUI": 21,
        "./ad/AdMgr": 40,
      },
    ],
    31: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../data/Define"),
          o = e("../mgr/UserDataMgr"),
          s = e("../mgr/UIMgr"),
          r = e("./ad/AdMgr"),
          l = e("../mgr/StatisMgr"),
          h = e("../mgr/EventCenter"),
          d = e("../mgr/ShareMgr"),
          c = e("../mgr/ConfMgr"),
          u = e("../data/ConstValue"),
          p = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t._addAward = 0),
                (t._rewards = [8, 18, 28, 58, 88, 118, 688]),
                (t.zOrder = 120),
                s["default"].Instance.AdpteScreen(t),
                t.block.on(Laya.Event.CLICK, t, function () {}),
                t.btn_turn.on(Laya.Event.CLICK, t, t.clickTurn),
                t.btn_close.on(Laya.Event.CLICK, t, t.clickClose),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Show = function (e) {
                (this._endCall = e),
                  (this.label_coin_1.text = "" + this._rewards[0]),
                  (this.label_coin_2.text = "" + this._rewards[1]),
                  (this.label_coin_3.text = "" + this._rewards[2]),
                  (this.label_coin_4.text = "" + this._rewards[3]),
                  (this.label_coin_5.text = "" + this._rewards[4]),
                  (this.label_coin_6.text = "" + this._rewards[5]),
                  (this.label_coin_7.text = "" + this._rewards[6]),
                  (this.label_coin_8.text = "");
                this.refreshAssets2();
                var t = c["default"].Instance.GetRoleInfo(u.CV.ConstValue.turnTableRoleId);
                t && (this.img_avatar.skin = "unpack/role_icon/" + t.icon),
                  r["default"].Instance.ShowBannerAd("TurnTableView"),
                  (this.btn_turn.visible = !0),
                  this.refreshBtn();
              }),
              (t.prototype.refreshBtn = function () {
                var e = this;
                (this.btn_turn.gray = !1), (this.img_share_type.visible = !1);
                //  (this.lab_btn.x = 92);
                var t = o["default"].Instance.trunTableInfo;
                this.lab_left.visible = false;
                return (
                  t.ticketNum <= 0 &&
                    ((this.img_share_type.visible = !0),
                    // , (this.lab_btn.x = 125)
                    (this.img_share_type.skin = "unpack/img_video.png")),
                  // d["default"].Instance.GetShareType("turntable", function (t) {
                  //   2 != t && (e.img_share_type.skin = "unpack/img_share.png");
                  // })
                  void this.lab_left.changeText("draw chance : " + t.ticketNum)
                );
                // return t.turnTimes > 5
                //   ? (this.btn_turn.offAll(), (this.btn_turn.gray = !0), void this.lab_left.changeText("已达每日最大转盘限制（5次）"))
                //   : (t.ticketNum <= 0 &&
                //       ((this.img_share_type.visible = !0),
                //       (this.lab_btn.x = 125),
                //       (this.img_share_type.skin = "unpack/img_video.png"),
                //       d["default"].Instance.GetShareType("turntable", function (t) {
                //         2 != t && (e.img_share_type.skin = "unpack/img_share.png");
                //       })),
                //     void this.lab_left.changeText("剩余转盘券:" + t.ticketNum));
              }),
              (t.prototype.refreshAssets2 = function () {
                this.lab_zsNum2.changeText(o["default"].Instance.gold.toString());
              }),
              (t.prototype.run = function (e) {
                var t = this;
                console.log(e);
                this.bg.rotation = 0;
                for (
                  var a = 0 - 45 * (e - 1) + 1080 + 22.5,
                    i = function (e) {
                      return e > 8 ? e - 8 : 1 > e ? 8 - Math.abs(e) : e;
                    },
                    ob = 1;
                  8 >= ob;
                  ob++
                )
                  this.bg.getChildByName("light_" + ob).visible = !1;
                Laya.Tween.to(
                  this.bg,
                  {
                    rotation: a,
                  },
                  2e3,
                  Laya.Ease.sineOut,
                  Laya.Handler.create(this, function () {
                    for (var a = 1; 8 >= a; a++) (t.bg.getChildByName("light_" + a).visible = !0), (t.bg.getChildByName("light_" + a).alpha = 0);
                    t.bg.getChildByName("light_" + i(e)).alpha = 1;
                    for (
                      var oa = function (a) {
                          Laya.timer.once(100 * a, t, function () {
                            if (1 == a)
                              Laya.Tween.to(
                                t.bg.getChildByName("light_" + i(e)),
                                {
                                  alpha: 0,
                                },
                                200,
                                Laya.Ease.sineIn
                              ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e + a)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - a)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                );
                            else if (3 >= a)
                              Laya.Tween.to(
                                t.bg.getChildByName("light_" + i(e + (a - 1))),
                                {
                                  alpha: 0,
                                },
                                200,
                                Laya.Ease.sineIn
                              ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - (a - 1))),
                                  {
                                    alpha: 0,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e + a)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - a)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                );
                            else if (4 >= a)
                              Laya.Tween.to(
                                t.bg.getChildByName("light_" + i(e + (a - 1))),
                                {
                                  alpha: 0,
                                },
                                200,
                                Laya.Ease.sineIn
                              ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - (a - 1))),
                                  {
                                    alpha: 0,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e + a)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                );
                            else if (5 >= a)
                              Laya.Tween.to(
                                t.bg.getChildByName("light_" + i(e + 4)),
                                {
                                  alpha: 0,
                                },
                                200,
                                Laya.Ease.sineIn
                              ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e + 3)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - 3)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                );
                            else if (6 >= a)
                              Laya.Tween.to(
                                t.bg.getChildByName("light_" + i(e + 3)),
                                {
                                  alpha: 0,
                                },
                                200,
                                Laya.Ease.sineIn
                              ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - 3)),
                                  {
                                    alpha: 0,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e + 2)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - 2)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                );
                            else if (7 >= a)
                              Laya.Tween.to(
                                t.bg.getChildByName("light_" + i(e + 2)),
                                {
                                  alpha: 0,
                                },
                                200,
                                Laya.Ease.sineIn
                              ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - 2)),
                                  {
                                    alpha: 0,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e + 1)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                ),
                                Laya.Tween.to(
                                  t.bg.getChildByName("light_" + i(e - 1)),
                                  {
                                    alpha: 1,
                                  },
                                  200,
                                  Laya.Ease.sineIn
                                );
                            else if (8 >= a) {
                              for (var oy = 1; 8 >= oy; oy++)
                                (t.bg.getChildByName("light_" + oy).visible = !1), (t.bg.getChildByName("light_" + oy).alpha = 0);
                              (t.bg.getChildByName("light_" + i(e)).visible = !0),
                                (t.bg.getChildByName("light_" + i(e)).alpha = 1),
                                (t.bg.getChildByName("light_" + i(e)).skin = "turn/lucktt_bg_wxz.png"),
                                (t.light.visible = !0),
                                (t.light.alpha = 0.4),
                                Laya.Tween.to(
                                  t.light,
                                  {
                                    scaleX: 25,
                                    scaleY: 25,
                                  },
                                  500,
                                  Laya.Ease.sineOut,
                                  Laya.Handler.create(t, function () {
                                    t.light.visible = !1;
                                  })
                                ),
                                Laya.timer.once(500, t, function () {
                                  8 != e
                                    ? (s["default"].Instance.ShowTips("Get " + t._addAward + " coins"),
                                      console.log("8增加金币：", t._addAward), //转盘领取金币
                                      o["default"].Instance.AddItem(n.KG.ItemType.GOLD, t._addAward),
                                      t.refreshAssets2())
                                    : s["default"].Instance.ShowGainItemDialog(u.CV.ConstValue.turnTableRoleId, n.KG.ItemType.SKIN),
                                    (t.btn_turn.visible = !0);
                                });
                            }
                          });
                        },
                        r = 1;
                      8 >= r;
                      r++
                    )
                      oa(r);
                  }),
                  500
                );
              }),
              (t.prototype.clickSign = function () {}),
              (t.prototype.clickTurn = function () {
                console.log("转盘点击事件开始");
                var e = this,
                  t = function () {
                    e.btn_turn.visible = !1;
                    var t = function (e, t) {
                        var a = Math.floor(Math.random() * (t - e) + e);
                        return a;
                      },
                      a = t(1, 100),
                      i = 1;
                    if (83 == a) i = 8;
                    else if (a >= 63 && 68 > a) i = 7;
                    else if (62 >= a) {
                      var s = t(1, 5);
                      1 == s ? (i = 2) : 2 == s ? (i = 3) : 3 == s ? (i = 4) : 4 == s ? (i = 5) : 5 == s && (i = 6);
                    } else i = 1;
                    8 != i ? ((e._addAward = e._rewards[i - 1]), e.run(i)) : o["default"].Instance.BuyRole(u.CV.ConstValue.turnTableRoleId),
                      e.refreshBtn(),
                      l["default"].SendEvent("转盘(完成操作)", {});
                  },
                  a = o["default"].Instance.trunTableInfo;
                a && a.ticketNum > 0
                  ? o["default"].Instance.StartTurnTable(!0) && t()
                  : d["default"].Instance.Share(
                      "turntable",
                      null,
                      function (e, a) {
                        if (e == n.KG.SHARE_RES.SUCCESS) o["default"].Instance.StartTurnTable(!1), t();
                        else {
                          var i = "操作失败,换个群试试吧";
                          2 == a && (i = "完整观看才能获得转盘机会哦"),
                            e == n.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                            s["default"].Instance.ShowTips(i, 2e3);
                        }
                      },
                      "转盘"
                    );
              }),
              (t.prototype.clickClose = function () {
                // YYGGames.showInterstitial(() => {});
                // 展示插屏广告
                //TODO showInterstitial
                console.log("请求插屏广告");
                HUHU_showInterstitialAd()
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                Laya.timer.clearAll(this),
                  this.destroy(),
                  r["default"].Instance.CloseBannerAd("TurnTableView"),
                  h["default"].Instance.event(h["default"].Event_BackShowMain),
                  this._endCall && this._endCall();
              }),
              (t.prototype._callback = function (e) {
                var t = this;
                !e &&
                  this._isOpenBanner &&
                  this._isOpenBannerTouch &&
                  Laya.timer.once(100, this, function () {
                    var e = function (e, t) {
                        var a = Math.floor(Math.random() * (t - e) + e);
                        return a;
                      },
                      a = e(1, 100),
                      i = 1;
                    if (47 == a) i = 5;
                    else if (38 == a || 69 == a) {
                      var n = e(1, 6);
                      1 == n ? (i = 2) : 2 == n ? (i = 3) : 3 == n ? (i = 4) : 4 == n ? (i = 6) : 5 == n ? (i = 7) : 6 == n && (i = 8);
                    } else i = 1;
                    var s = o["default"].Instance.userInfo;
                    l["default"].SendEvent("转盘(完成操作)", {
                      关卡: s.gId + "_" + s.sId,
                    }),
                      t.run(i);
                  });
              }),
              t
            );
          })(i.ui.view.LuckyTurnTableViewUI);
        a["default"] = p;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../mgr/ConfMgr": 10,
        "../mgr/EventCenter": 11,
        "../mgr/ShareMgr": 15,
        "../mgr/StatisMgr": 17,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../ui/layaMaxUI": 21,
        "./ad/AdMgr": 40,
      },
    ],
    32: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("./../ui/layaMaxUI"),
          n = e("../mgr/UserDataMgr"),
          o = e("../mgr/GameMgr"),
          s = e("../data/ConstValue"),
          r = s.CV.PlayerPrefs,
          l = e("../mgr/SoundMgr"),
          h = e("../data/Define"),
          d = e("../mgr/UIMgr"),
          c = e("../mgr/ShareMgr"),
          u = e("../mgr/EventCenter"),
          p = e("../mgr/ConfMgr"),
          f = e("../mgr/WxApiMgr"),
          g = e("./RankListView"),
          y = e("./ad/AdMgr"),
          _ = e("../data/GloableTempData"),
          m = e("./AvatarView"),
          b = e("./DaySignView"),
          v = e("../utils/Tools"),
          I = e("./LuckyTurnTableView"),
          w = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t._userInfo = n["default"].Instance.userInfo),
                (t._addGoldNum = 80),
                (t._openingUI = !1),
                (t.produceCD = 0),
                (t.produceLeft = 0),
                (t.ratioLeftTime = 0),
                (t.pUpdateStep = 1e4),
                (t.moveV = new Laya.Vector3(0, 1, 0)),
                t.bindClick(),
                t.adpteScreen(),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.onOpened = function () {
                (o["default"].Instance.mainView = this),
                  d["default"].Instance.AdpteScreen(this),
                  this.openMainPanel(),
                  this.createScene(),
                  d["default"].Instance.ShowLoading(!1),
                  o["default"].isNewUser || o["default"].Instance.AutoPopDaySign();
              }),
              (t.prototype.bindClick = function () {
                var e = this;
                // Laya.timer.once(1000, this, () => {
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                // });

                Laya.SoundManager.musicVolume = 0.1;
                Laya.SoundManager.soundVolume = 0.1;
                var t = Math.random() < 0.5 ? "bgm_1" : "bgm_2";
                l["default"].Instance.PlayBGM(t),
                  this.btn_start.on(Laya.Event.CLICK, this, this.clickStart),
                  this.btn_zhendong.on(Laya.Event.CLICK, this, this.clickVibrate),
                  this.btn_yinxiao.on(Laya.Event.CLICK, this, this.clickSound),
                  this.btn_rank.on(Laya.Event.CLICK, this, this.clickRank),
                  this.btn_daysign.on(Laya.Event.CLICK, this, this.clickDaySign, [!0]),
                  this.btn_turnTable.on(Laya.Event.CLICK, this, this.clickTurnTable),
                  this.btn_share.on(Laya.Event.CLICK, this, this.clcikShare),
                  this.btn_avatar.on(Laya.Event.CLICK, this, this.clickAvatar),
                  this.btn_addGold.on(Laya.Event.CLICK, this, this.clickAddGold),
                  this.btn_randomTry.on(Laya.Event.CLICK, this, this.clickRandomTry),
                  this.btn_closeTryView.on(Laya.Event.CLICK, this, this.clickCloseTryView),
                  this.btn_Exit.on(Laya.Event.CLICK, this, this.clickExit),
                  this.btn_exitGame.on(Laya.Event.CLICK, this, this.clickExitGame),
                  this.btn_closeExit.on(Laya.Event.CLICK, this, this.clickCloseExit),
                  this.btn_produce.on(Laya.Event.CLICK, this, this.clickOpenProduce),
                  this.btn_double.on(Laya.Event.CLICK, this, this.clickDoubleGetProduce),
                  this.btn_ptGet.on(Laya.Event.CLICK, this, this.clickGetProduce),
                  u["default"].Instance.on(u["default"].Event_Relogin, this, this.relogin, [!1]),
                  u["default"].Instance.on(u["default"].Event_GoldChange, this, this.refreshAssets),
                  u["default"].Instance.on(u["default"].Event_BackShowMain, this, this.showScene3D),
                  u["default"].Instance.on(u["default"].Event_GainProduce, this, this.checkProduce),
                  (this.grp_testTool.visible = !1),
                  (this.btn_test._visible = s.CV.ConstValue.isDevelop),
                  this.btn_test.on(Laya.Event.CLICK, this, function () {
                    (e.grp_testTool.visible = !0), e.hideScene3D();
                  }),
                  this.btn_clearData.on(Laya.Event.CLICK, this, function () {
                    return Laya.LocalStorage.clear();
                  }),
                  this.btn_clearData.on(Laya.Event.CLICK, this, function () {
                    return (c["default"].Instance.hasSharePower = !0);
                  }),
                  this.btn_closeTest.on(Laya.Event.CLICK, this, this.closeTestPanel);
              }),
              (t.prototype.adpteScreen = function () {
                //原适配方法
                // console.log("原适配方法");
                // var e = 750 / 1344,
                //   t = Laya.Browser.width / Laya.Browser.height;
                // e > t && ((this.grp_top.top = 150), (this.img_logo.top = 100), (this.grp_bottom.bottom = 200), console.log("原适配方法使用成功"));
              }),
              (t.prototype.showScene3D = function (e) {
                void 0 === e && (e = ""),
                  this.visible &&
                    ((this._openingUI = !1),
                    y["default"].Instance.ShowAd("mainView"),
                    this.scene3D && (this.scene3D.active = !0),
                    this.wxBtn && this.wxBtn.show(),
                    this.objRole && ((this.objRole.active = !0), this.playWinAni()),
                    "AvatarView" == e && this.refreshMainRole());
              }),
              (t.prototype.hideScene3D = function () {
                (this._openingUI = !0),
                  y["default"].Instance.CloseAllAd(),
                  this.scene3D && (this.scene3D.active = !1),
                  this.wxBtn && this.wxBtn.hide();
              }),
              (t.prototype.openMainPanel = function () {
                y["default"].Instance.CloseBannerAd("Loading"),
                  o["default"].Instance.ShowMainViewAd(),
                  (this.visible = !0),
                  (this.box_main.visible = !0),
                  (this.box_tryRole.visible = !1),
                  (this.box_exit.visible = !1),
                  (this.box_produce.visible = !1),
                  this.btnStartAni.play(0, !0),
                  this.turnTableAni.play(0, !0),
                  this.refreshAssets(),
                  this.refreshSysBtns(),
                  this.UpdateGq(),
                  this.checkRankBtn(),
                  this.checkProduce(),
                  this.showScene3D(),
                  _["default"].Instance.getIsAutoPopDaySign() && r.isShowDaySign() && this.clickDaySign();
              }),
              (t.prototype.Hide = function () {
                (this.visible = !1), this.wxBtn && this.wxBtn.hide(), this.hideScene3D();
              }),
              (t.prototype.refreshSysBtns = function () {
                (this.btn_yinxiao.skin = l["default"].Instance.musicMuted ? "lobby/btn_yl_1.png" : "lobby/btn_yl.png"),
                  (this.btn_zhendong.skin = o["default"].Instance.isVibrateClose ? "lobby/btn_zd_1.png" : "lobby/btn_zd.png");
                Laya.SoundManager.muted = l["default"].Instance.musicMuted;
              }),
              (t.prototype.refreshAssets = function () {
                this.try_coins_num.text = n["default"].Instance.gold + "";
                this.lab_zsNum.changeText(this._userInfo.golds + "");
                I.lab_zsNum2 && I.lab_zsNum2.changeText(this._userInfo.golds + "");
                console.log(" this.lab_zsNum", this.lab_zsNum, this.lab_zsNum2);
              }),
              (t.prototype.UpdateGq = function () {
                this.lab_cur.changeText(this._userInfo.gId.toString()), this.lab_next.changeText((this._userInfo.gId + 1).toString());
                for (var e = this._userInfo.sId, t = 1; 3 >= t; t++)
                  e > t
                    ? (this["img_gq" + t].skin = "main/3-1.png")
                    : e == t
                    ? (this["img_gq" + t].skin = "main/3-2.png")
                    : (this["img_gq" + t].skin = "main/3-3.png");
              }),
              (t.prototype.clickStart = function () {
                //点击start按钮  开始游戏

                // YYGGames.icon && ((YYGGames.icon.top = 1200), 
                // (YYGGames.icon.right = 145),
                //  (YYGGames.icon.skin = "yad2.png"));
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = false);
                n["default"].Instance.ResetGuanQia(), this.openTryView();
              }),
              (t.prototype.clickAvatar = function () {
                if (!this._openingUI) {
                  // 展示插屏广告
                  //TODO showInterstitial
                  console.log("请求插屏广告");
                  HUHU_showInterstitialAd()
                  // YYGGames.showInterstitial(() => {});
                  // YYGGames.gameBanner && (YYGGames.gameBanner.visible = false);
                  this.hideScene3D();
                  var e = new m["default"]();
                  Laya.stage.addChild(e), e.Show();
                }
              }),
              (t.prototype.clickRank = function () {
                if (!this._openingUI) {
                  this.hideScene3D();
                  var e = new g.RankListView();
                  Laya.stage.addChild(e);
                }
              }),
              (t.prototype.clickDaySign = function (a = false) {
                //点击签到按钮  打开签到页
                // if (a == true) {
                //   YYGGames.showInterstitial(() => {});
                // }
                if (!this._openingUI) {
                  // YYGGames.gameBanner && (YYGGames.gameBanner.visible = false);
                  this.hideScene3D();
                  var e = new b["default"]();
                  Laya.stage.addChild(e), e.Show();
                }
              }),
              (t.prototype.openTryView = function (e) {
                // 展示插屏广告
                //TODO showInterstitial
                console.log("请求插屏广告");
                HUHU_showInterstitialAd()
                // YYGGames.showInterstitial(() => {});
                //试用  打开试用页页
                void 0 === e && (e = !0),
                  (this.visible = !0),
                  y["default"].Instance.CloseAllAd(),
                  this.scene3D && (this.scene3D.active = !0),
                  (this.try_coins_num.text = n["default"].Instance.gold + ""),
                  (this.box_main.visible = e),
                  (this.box_tryRole.visible = !0),
                  (this.lab_addGold.text = this._addGoldNum + ""),
                  this.objRole && (this.objRole.active = !1),
                  y["default"].Instance.ShowBannerAd("TryAvatarView"),
                  this.btn_try1.offAll(),
                  this.btn_try2.offAll(),
                  this.btn_buy1.offAll(),
                  (this.btn_buy1.getChildAt(0).text = "Buy"),
                  this.btn_buy2.offAll(),
                  (this.btn_buy2.getChildAt(0).text = "Buy"),
                  this.btn_try1.on(Laya.Event.CLICK, this, this.clickTry1),
                  this.btn_try2.on(Laya.Event.CLICK, this, this.clickTry2),
                  this.btn_buy1.on(Laya.Event.CLICK, this, this.clickBuy1),
                  this.btn_buy2.on(Laya.Event.CLICK, this, this.clickBuy2),
                  this.loadTryViewRole();
              }),
              (t.prototype.clickCloseTryView = function () {
                (this.box_tryRole.visible = !1),
                  this.destoryTryRoles(),
                  this.Hide(),
                  o["default"].Instance.StartGame(),
                  y["default"].Instance.CloseBannerAd("TryAvatarView");
              }),
              (t.prototype.clickRandomTry = function () {
                var e = n["default"].Instance.GetRandomRoles(1);
                e[0] && this.shareTry(e[0].id);
              }),
              (t.prototype.setTryRoleInfo = function () {
                var e = this.tryRoles[0];
                e && (this.lab_price1.text = e.condition_val + ""), (e = this.tryRoles[1]), e && (this.lab_price2.text = e.condition_val + "");
              }),
              (t.prototype.clickTry1 = function () {
                var e = this.tryRoles[0];
                e && this.shareTry(e.id);
              }),
              (t.prototype.clickTry2 = function () {
                var e = this.tryRoles[1];
                e && this.shareTry(e.id);
              }),
              (t.prototype.shareTry = function (e) {
                var t = this;
                c["default"].Instance.Share(
                  "try_role",
                  null,
                  function (a, i) {
                    if (a == h.KG.SHARE_RES.SUCCESS)
                      (n["default"].Instance.tryRoleID = e), t.clickCloseTryView(), y["default"].Instance.CloseBannerAd("TryAvatarView");
                    else {
                      var o = "操作失败,分享到其他群试试吧";
                      2 == i && (o = "完整观看才能领取哦"),
                        a == h.KG.SHARE_RES.ERROR && (o = "今日视频次数已用完，请明日再来"),
                        d["default"].Instance.ShowTips(o, 2e3);
                    }
                  },
                  "试用角色"
                );
              }),
              (t.prototype.clickBuy1 = function () {
                var e = this,
                  t = this.tryRoles[0];
                t &&
                  (t.condition_val <= n["default"].Instance.gold && n["default"].Instance.BuyRole(t.id)
                    ? (d["default"].Instance.ShowTips("Get a new skin"),
                      (this.btn_buy1.getChildAt(0).text = "Use"),
                      this.btn_buy1.offAll(),
                      this.btn_buy1.once(Laya.Event.CLICK, this, function () {
                        n["default"].Instance.UseRole(t.id), e.clickCloseTryView();
                      }))
                    : d["default"].Instance.ShowTips("Not enough coins"));
              }),
              (t.prototype.clickBuy2 = function () {
                var e = this,
                  t = this.tryRoles[1];
                t &&
                  (t.condition_val <= n["default"].Instance.gold && n["default"].Instance.BuyRole(t.id)
                    ? (d["default"].Instance.ShowTips("Get a new skin"),
                      (this.btn_buy2.getChildAt(0).text = "Use"),
                      this.btn_buy2.offAll(),
                      this.btn_buy2.once(Laya.Event.CLICK, this, function () {
                        n["default"].Instance.UseRole(t.id), e.clickCloseTryView();
                      }))
                    : d["default"].Instance.ShowTips("Not enough coins"));
              }),
              (t.prototype.clickAddGold = function () {
                var e = this,
                  t = s.CV.PlayerPrefs.getNumber(s.CV.PlayerPrefs.Key_GetFreeDiamondTimes);
                // return t > 10
                //   ? void d["default"].Instance.ShowTips("今日免费金币次数已用完，请明日再来")
                //   : void c["default"].Instance.Share(
                //       "free_gold",
                //       null,
                //       function (t, a) {
                //         if (t == h.KG.SHARE_RES.SUCCESS)
                //           n["default"].Instance.FreeGainGold(e._addGoldNum), d["default"].Instance.ShowTips("Get " + e._addGoldNum + " coins");
                //         else {
                //           var i = "操作失败,分享到其他群试试吧";
                //           2 == a && (i = "完整观看才能领取哦"),
                //             t == h.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                //             d["default"].Instance.ShowTips(i, 2e3);
                //         }
                //       },
                //       "免费金币"
                //     );
                return void c["default"].Instance.Share(
                  "free_gold",
                  null,
                  function (t, a) {
                    if (t == h.KG.SHARE_RES.SUCCESS)
                      n["default"].Instance.FreeGainGold(e._addGoldNum), d["default"].Instance.ShowTips("Get " + e._addGoldNum + " coins");
                    else {
                      var i = "操作失败,分享到其他群试试吧";
                      2 == a && (i = "完整观看才能领取哦"),
                        t == h.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                        d["default"].Instance.ShowTips(i, 2e3);
                    }
                  },
                  "免费金币"
                );
              }),
              (t.prototype.relogin = function (e) {
                var t = o["default"].Instance.gameScene;
                Laya.timer.clearAll(t), this.openMainPanel(), Laya.Resource.destroyUnusedResources();
              }),
              (t.prototype.clickVibrate = function () {
                var e = !o["default"].Instance.isVibrateClose;
                (o["default"].Instance.isVibrateClose = e), (this.btn_zhendong.skin = e ? "lobby/btn_zd_1.png" : "lobby/btn_zd.png");
              }),
              (t.prototype.clickSound = function () {
                var e = !l["default"].Instance.musicMuted;
                (l["default"].Instance.musicMuted = e), (this.btn_yinxiao.skin = e ? "lobby/btn_yl_1.png" : "lobby/btn_yl.png");
                var t = Math.random() < 0.5 ? "bgm_1" : "bgm_2";

                e ? l["default"].Instance.StopBGM() : l["default"].Instance.PlayBGM(t);
                Laya.SoundManager.muted = e;
              }),
              (t.prototype.clickExit = function () {
                this.hideScene3D(),
                  (this.box_exit.visible = !0),
                  y["default"].Instance.ShowAd("exitView"),
                  y["default"].Instance.ShowBannerAd("ExitGameView");
              }),
              (t.prototype.clickExitGame = function () {
                this.clickCloseExit(), y["default"].Instance.CloseBannerAd("ExitGameView"), f["default"].Instance.exitGame();
              }),
              (t.prototype.clickCloseExit = function () {
                (this.box_exit.visible = !1), this.showScene3D(), y["default"].Instance.CloseBannerAd("ExitGameView");
              }),
              (t.prototype.clickOpenProduce = function () {
                // YYGGames.showInterstitial(() => {});
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = false);
                (this.box_produce.visible = !0),
                  this.hideScene3D(),
                  y["default"].Instance.ShowBannerAd("ProduceView"),
                  y["default"].Instance.ShowAd("offlineView");
              }),
              (t.prototype.clickGetProduce = function () {
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                var e = n["default"].Instance.GainOnlinProduce(1); //在线奖励 单倍领取
                e > 0 &&
                  (d["default"].Instance.ShowTips("Get " + e + " coins"),
                  (this.box_produce.visible = !1),
                  this.showScene3D(),
                  y["default"].Instance.CloseBannerAd("ProduceView"));
              }),
              (t.prototype.clickDoubleGetProduce = function () {
                // YYGGames.gameBanner && (YYGGames.gameBanner.visible = true);
                var e = this;
                c["default"].Instance.Share(
                  "double_procude",
                  null,
                  function (t, a) {
                    if (t == h.KG.SHARE_RES.SUCCESS) {
                      var i = n["default"].Instance.GainOnlinProduce(2); //在线奖励 双倍领取
                      i > 0 &&
                        (d["default"].Instance.ShowTips("Get " + i + " coins"),
                        (e.box_produce.visible = !1),
                        e.showScene3D(),
                        y["default"].Instance.CloseBannerAd("ProduceView"));
                    } else {
                      var o = "操作失败,换个群试试吧";
                      2 == a && (o = "完整观看才能翻倍哦"),
                        t == h.KG.SHARE_RES.ERROR && (o = "今日视频次数已用完，请明日再来"),
                        d["default"].Instance.ShowTips(o, 2e3);
                    }
                  },
                  "双倍领取收益"
                );
              }),
              (t.prototype.clickTurnTable = function () {
                if (!this._openingUI) {
                  // YYGGames.showInterstitial(() => {});
                  // YYGGames.gameBanner && (YYGGames.gameBanner.visible = false);
                  var e = new I["default"]();
                  Laya.stage.addChild(e), e.Show(), this.hideScene3D();
                }
              }),
              (t.prototype.clcikShare = function () {
                c["default"].Instance.ShareMsg("我们都是木头人，不许说话不许动", s.CV.ConstValue.cdnPath + "Share/4.png");
              }),
              (t.prototype.checkProduce = function () {
                Laya.timer.clear(this, this.runProduce);
                var e = n["default"].Instance.GetOnlineProduce();
                (this.produceLeft = e.leftTime),
                  (this.ratioLeftTime = n["default"].Instance.ratioEndTime - Date.now()),
                  (this.produceCD = 0),
                  (this.lab_produce0.text = v["default"].ParseLongNum(e.num)),
                  (this.lab_produce1.text = v["default"].ParseLongNum(e.num)),
                  (this.btn_produce.mouseEnabled = e.num > 2),
                  e.leftTime > 0 && (this.runProduce(), Laya.timer.loop(20, this, this.runProduce));
              }),
              (t.prototype.runProduce = function () {
                (this.produceCD += 20),
                  (this.produceLeft -= 20),
                  (this.ratioLeftTime -= 20),
                  this.produceLeft <= 0 && Laya.timer.clear(this, this.runProduce);
                var e = n["default"].Instance.produceRatio,
                  t = this.pUpdateStep / e;
                if (
                  (this.sp_produceCD.graphics.clear(),
                  this.sp_produceCD.graphics.drawPie(58, 58, 52, -90 - (360 / t) * this.produceCD, -90, "#5c5c5c"),
                  this.produceCD >= t)
                ) {
                  (this.produceCD = 0), this.sp_produceCD.graphics.clear();
                  var a = n["default"].Instance.GetOnlineProduce();
                  (this.produceLeft = a.leftTime),
                    (this.lab_produce0.text = v["default"].ParseLongNum(a.num)),
                    (this.lab_produce1.text = v["default"].ParseLongNum(a.num)),
                    (this.btn_produce.mouseEnabled = a.num > 2);
                }
              }),
              (t.prototype.closeTestPanel = function () {
                this.showScene3D(), (o["default"].Instance.isOpenTest = this.check_openTest.selected);
                var e = parseInt(this.inp_bigID.text),
                  t = parseInt(this.inp_smallID.text);
                isNaN(e) && (e = 1),
                  isNaN(t) && (t = 1),
                  (o["default"].Instance.testBigId = e),
                  (o["default"].Instance.testSmallId = t),
                  (this.grp_testTool.visible = !1);
              }),
              (t.prototype.checkRankBtn = function () {
                var e = this;
                this.btn_rank.visible &&
                  Laya.Browser.onWeiXin &&
                  f["default"].Instance.getAuthSetting(function (t) {
                    if (!t || !t.userInfo) {
                      if (e.wxBtn) e.wxBtn.show();
                      else {
                        var a = new Laya.Point(e.btn_rank.x, e.btn_rank.y);
                        e.btn_rank.parent.localToGlobal(a),
                          (e.wxBtn = d["default"].Instance.ShowAuthBtn(function (t) {
                            t && (n["default"].Instance.AuthSuccess(t), (e.btn_rank.mouseEnabled = !0), (e.wxBtn = null));
                          }, a.y));
                      }
                      e.btn_rank.mouseEnabled = !1;
                    }
                  });
              }),
              (t.prototype.createScene = function () {
                if (!this.scene3D) {
                  this.scene3D = new Laya.Scene3D();
                  var e = new Laya.Camera(0, 0.1, 100);
                  e.transform.translate(new Laya.Vector3(0, 1, 1.2)),
                    (e.transform.rotationEuler = new Laya.Vector3(-15, 0, 0)),
                    (e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY),
                    (e.fieldOfView = 60);
                  var t = new Laya.DirectionLight();
                  (t.transform.rotationEuler = new Laya.Vector3(-10, 0, 0)),
                    this.scene3D.addChild(e),
                    this.scene3D.addChild(t),
                    Laya.stage.addChildAt(this.scene3D, Laya.stage._children.length),
                    this.loadMainRole();
                }
              }),
              (t.prototype.loadMainRole = function () {
                var e = this,
                  t = function (t) {
                    (e.objRole = Laya.Sprite3D.instantiate(t, e.scene3D)),
                      (e.objRole.transform.localPosition = new Laya.Vector3(0, 0.4, 0)),
                      (e.objRole.transform.scale = new Laya.Vector3(1, 1, 1)),
                      e.playWinAni(),
                      e.refreshMainRole();
                  },
                  a = Laya.loader.getRes("res/LayaScene_assets/Conventional/role_1.lh");
                a
                  ? t(a)
                  : Laya.loader.create(
                      "res/LayaScene_assets/Conventional/role_1.lh",
                      Laya.Handler.create(this, function (e) {
                        return t(e);
                      })
                    );
              }),
              (t.prototype.playWinAni = function () {
                var e = this.objRole.getChildByName("role");
                if (e) {
                  var t = e.getComponent(Laya.Animator),
                    a = p["default"].Instance.GetRoleAniCfg(n["default"].Instance.curUseAniId);
                  console.log("a____________", a.name);
                  console.log("a____________", a);
                  this.loadAndPlayAni(t, a.name);
                }
              }),
              (t.prototype.refreshMainRole = function () {
                var e = this,
                  t = p["default"].Instance.GetRoleInfo(this._userInfo.useRoleId);
                this.objRole &&
                  t &&
                  Laya.loader.create(
                    "res/assets/" + t.head_mesh,
                    Laya.Handler.create(this, function (a) {
                      (e.objRole.getChildByName("king").active = !1),
                        (e.objRole.getChildByName("eye").active = !1),
                        (e.objRole.getChildByName("eff_stop").active = !1),
                        (e.objRole.getChildByName("eff_run").active = !1);
                      var i = e.objRole.getChildByName("role"),
                        n = i.getChildByName("head"),
                        o = i.getChildByName("body"),
                        s = i.getChildByName("bozi");
                      a &&
                        ((n.meshFilter.sharedMesh = a),
                        Laya.Texture2D.load(
                          "res/texture/" + t.main_texture,
                          Laya.Handler.create(e, function (e) {
                            n && (n.skinnedMeshRenderer.material.albedoTexture = e),
                              o && (o.skinnedMeshRenderer.material.albedoTexture = e),
                              s && (s.skinnedMeshRenderer.material.albedoTexture = e);
                          })
                        ));
                    })
                  );
              }),
              (t.prototype.loadAndPlayAni = function (e, t) {
                if (e) {
                  t || (t = "win_1");
                  var a = e.getControllerLayer()._states;
                  for (var i in a) if (a[i].name == t) return void e.play(t);
                  var n = "res/assets/" + t + ".lani",
                    o = Laya.loader.getRes(n),
                    s = function (a) {
                      if (a) {
                        var i = new Laya.AnimatorState();
                        (i.name = t), (i.clip = a), (i.clip.islooping = !0), e.addState(i), e.play(t);
                      }
                    };
                  o
                    ? s(o)
                    : Laya.loader.create(
                        n,
                        Laya.Handler.create(n, function (e) {
                          return s(e);
                        })
                      );
                }
              }),
              (t.prototype.loadTryViewRole = function () {
                var e = this;
                this.tryObjRoleRoot && this.tryObjRoleRoot.destroy(),
                  (this.tryObjRoleRoot = new Laya.Sprite3D()),
                  this.scene3D.addChild(this.tryObjRoleRoot),
                  (this.tryRoles = n["default"].Instance.GetRandomRoles(2));
                var t = function (t) {
                    for (
                      var a = function (a) {
                          var i = Laya.Sprite3D.instantiate(t, e.tryObjRoleRoot);
                          (i.transform.localPosition = new Laya.Vector3(-0.18 + 0.36 * a, 0.73, 0)),
                            (i.transform.scale = new Laya.Vector3(0.6, 0.6, 0.6));
                          var n = e.tryRoles[a];
                          n &&
                            (e.setTryRoleInfo(),
                            Laya.loader.create(
                              "res/assets/" + n.head_mesh,
                              Laya.Handler.create(e, function (t) {
                                (i.getChildByName("king").active = !1),
                                  (i.getChildByName("eye").active = !1),
                                  (i.getChildByName("eff_stop").active = !1),
                                  (i.getChildByName("eff_run").active = !1);
                                var a = i.getChildByName("role").getChildByName("head"),
                                  o = i.getChildByName("role").getChildByName("body"),
                                  s = i.getChildByName("role").getChildByName("bozi");
                                t &&
                                  a &&
                                  o &&
                                  ((a.meshFilter.sharedMesh = t),
                                  Laya.Texture2D.load(
                                    "res/texture/" + n.main_texture,
                                    Laya.Handler.create(e, function (e) {
                                      a && (a.skinnedMeshRenderer.material.albedoTexture = e),
                                        o && (o.skinnedMeshRenderer.material.albedoTexture = e),
                                        s && (s.skinnedMeshRenderer.material.albedoTexture = e);
                                    })
                                  ));
                                var r = i.getChildByName("role");
                                if (r) {
                                  var l = r.getComponent(Laya.Animator),
                                    h = p["default"].Instance.roleAniCfg,
                                    d = v["default"].GetRandomNum(0, h.length - 1);
                                  e.loadAndPlayAni(l, h[d].name);
                                }
                              })
                            ));
                        },
                        i = 0;
                      i < e.tryRoles.length;
                      i++
                    )
                      a(i);
                  },
                  a = Laya.loader.getRes("res/LayaScene_assets/Conventional/role_1.lh");
                a
                  ? t(a)
                  : Laya.loader.create(
                      "res/LayaScene_assets/Conventional/role_1.lh",
                      Laya.Handler.create(this, function (e) {
                        return t(e);
                      })
                    );
              }),
              (t.prototype.destoryTryRoles = function () {
                this.tryObjRoleRoot && (this.tryObjRoleRoot.destroy(), (this.tryObjRoleRoot = null));
              }),
              (t.prototype.pressDown = function () {
                (this.downPoint = Laya.MouseManager.instance.mouseX), (this.isMove = !0);
              }),
              (t.prototype.pressUp = function () {
                this.isMove = !1;
              }),
              (t.prototype.turnGun = function () {
                if (this.objRole && this.isMove) {
                  var e = Laya.MouseManager.instance.mouseX - this.downPoint;
                  this.moveV.setValue(0, e / 50, 0), this.objRole.transform.rotate(this.moveV), (this.downPoint = Laya.MouseManager.instance.mouseX);
                }
              }),
              t
            );
          })(i.ui.view.MainUI);
        a["default"] = w;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../data/GloableTempData": 6,
        "../mgr/ConfMgr": 10,
        "../mgr/EventCenter": 11,
        "../mgr/GameMgr": 12,
        "../mgr/ShareMgr": 15,
        "../mgr/SoundMgr": 16,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../mgr/WxApiMgr": 20,
        "../utils/Tools": 22,
        "./../ui/layaMaxUI": 21,
        "./AvatarView": 23,
        "./DaySignView": 24,
        "./LuckyTurnTableView": 31,
        "./RankListView": 36,
        "./ad/AdMgr": 40,
      },
    ],
    33: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/UIMgr"),
          o = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t._numPlayers = 0), n["default"].Instance.AdpteScreen(t), t;
            }
            return (
              __extends(t, e),
              (t.prototype.Reset = function (e) {
                //渲染游戏中角色名字追踪
                this._numPlayers = e;
                var t = 0,
                  a = 155;
                4 == e ? (t = 75) : 3 == e && ((t = 75), (a = 200));
                for (var i = 0; 5 > i; i++) this["lab_name_" + i].changeText(""), (this["lab_name_" + i].x = i * a + t);
              }),
              (t.prototype.UpdateRole = function (e, t) {
                (this.progress_num.value = (e + 1) / this._numPlayers), (this["lab_name_" + e].text = t);
              }),
              t
            );
          })(i.ui.view.MatchingViewUI);
        a["default"] = o;
      },
      {
        "../mgr/UIMgr": 18,
        "../ui/layaMaxUI": 21,
      },
    ],
    34: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/UIMgr"),
          o = e("../mgr/ConfMgr"),
          s = e("../mgr/UserDataMgr"),
          r = e("./ad/AdMgr"),
          l = e("../mgr/ShareMgr"),
          h = e("../data/ConstValue"),
          d = e("../data/Define"),
          c = e("../utils/Tools"),
          u = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t._roleid = 0),
                (t._aniid = 0),
                n["default"].Instance.AdpteScreen(t),
                t.btn_share.on(Laya.Event.CLICK, t, t.clickShare),
                t.btn_double.on(Laya.Event.CLICK, t, t.clickDouble),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Show = function (e, t, a) {
                var i = this;
                (this._callback = function () {
                  a && a();
                }),
                  r["default"].Instance.ShowAd("offlineView"),
                  r["default"].Instance.ShowBannerAd("NewSkinView"),
                  t == d.KG.ItemType.SKIN || t == d.KG.ItemType.ANI
                    ? ((this.img_gift.visible = !1),
                      (this.btn_double.visible = !1),
                      (this.btn_share.visible = !1),
                      (this.btn_close.text = "Close"),
                      t == d.KG.ItemType.SKIN && (this.lab_msg.text = "Unlock a new skin"),
                      t == d.KG.ItemType.ANI && (this.lab_msg.text = "Unlock a new action"),
                      this.btn_close.on(Laya.Event.CLICK, this, this.clickClose),
                      this.createScene(),
                      (this._roleid = s["default"].Instance.curUseRoleId),
                      (this._aniid = s["default"].Instance.curUseRoleId),
                      t == d.KG.ItemType.SKIN ? (this._roleid = e) : t == d.KG.ItemType.ANI && (this._aniid = e),
                      this.loadMainRole())
                    : t == d.KG.ItemType.GIFTBOX &&
                      ((this.img_gift.visible = !0),
                      (this.btn_double.visible = !0),
                      (this.btn_share.visible = !1),
                      (this.lab_msg.text = ""),
                      (this.btn_close.text = "Claim"),
                      this.btn_close.on(Laya.Event.CLICK, this, function () {
                        (i.btn_close.visible = !1), i.completeBox();
                      }));
              }),
              (t.prototype.clickClose = function () {
                var e = this;
                r["default"].Instance.CloseBannerAd("NewSkinView"),
                  r["default"].Instance.CloseAllAd(),
                  this.objRole && this.objRole.destroy(),
                  this.scene3D && this.scene3D.destroy(),
                  Laya.Resource.destroyUnusedResources(),
                  Laya.timer.clearAll(this),
                  (this.visible = !1),
                  Laya.timer.callLater(this, function () {
                    return e.destroy();
                  }),
                  this._callback();
              }),
              (t.prototype.clickShare = function () {
                l["default"].Instance.ShareMsg("【有人@你】你有一款精美的皮肤待领取", h.CV.ConstValue.cdnPath + "Share/4.png");
              }),
              (t.prototype.clickDouble = function () {
                var e = this;
                l["default"].Instance.Share(
                  "get_gift",
                  null,
                  function (t, a) {
                    if (t == d.KG.SHARE_RES.SUCCESS) e.completeBox(2);
                    else {
                      var i = "操作失败,换个群试试吧";
                      2 == a && (i = "完整观看才能领取哦"),
                        t == d.KG.SHARE_RES.ERROR && (i = "今日视频次数已用完，请明日再来"),
                        n["default"].Instance.ShowTips(i, 2e3);
                    }
                  },
                  "宝箱"
                );
              }),
              (t.prototype.completeBox = function (e) {
                void 0 === e && (e = 1);
                var t = c["default"].GetRandomNum(1, 3),
                  a = "转盘券",
                  i = 1;
                t > 1
                  ? ((a = "金币"),
                    (i = 2 == t ? 50 : 100),
                    n["default"].Instance.ShowTips("Get " + i * e + " coins"),
                    console.log("9增加金币：", i * e), //结算页的礼包增加金币
                    s["default"].Instance.AddItem(d.KG.ItemType.GOLD, i * e))
                  : (n["default"].Instance.ShowTips("Get a draw chance"), s["default"].Instance.AddTurnTableTisket(i * e)),
                  // : (n["default"].Instance.ShowTips("恭喜获得转盘券 x" + i * e), s["default"].Instance.AddTurnTableTisket(i * e)),
                  this.clickClose();
              }),
              (t.prototype.createScene = function () {
                if (!this.scene3D) {
                  this.scene3D = new Laya.Scene3D();
                  var e = new Laya.Camera(0, 0.1, 100);
                  e.transform.translate(new Laya.Vector3(0, 1, 1.5)),
                    (e.transform.rotationEuler = new Laya.Vector3(-15, 0, 0)),
                    (e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY),
                    (e.fieldOfView = 60);
                  var t = new Laya.DirectionLight();
                  (t.transform.rotationEuler = new Laya.Vector3(-10, 0, 0)),
                    this.scene3D.addChild(e),
                    this.scene3D.addChild(t),
                    Laya.stage.addChildAt(this.scene3D, Laya.stage._children.length);
                }
              }),
              (t.prototype.loadMainRole = function () {
                var e = this,
                  t = function (t) {
                    (e.objRole = Laya.Sprite3D.instantiate(t, e.scene3D)),
                      (e.objRole.transform.localPosition = new Laya.Vector3(0, 0.72, 0)),
                      (e.objRole.transform.scale = new Laya.Vector3(0.8, 0.8, 0.8));
                    var a = o["default"].Instance.GetRoleInfo(e._roleid);
                    e.objRole &&
                      a &&
                      Laya.loader.create(
                        "res/assets/" + a.head_mesh,
                        Laya.Handler.create(e, function (t) {
                          (e.objRole.getChildByName("king").active = !1),
                            (e.objRole.getChildByName("eye").active = !1),
                            (e.objRole.getChildByName("eff_stop").active = !1),
                            (e.objRole.getChildByName("eff_run").active = !1);
                          var i = e.objRole.getChildByName("role"),
                            n = i.getChildByName("head"),
                            o = i.getChildByName("body"),
                            s = i.getChildByName("bozi");
                          t &&
                            ((n.meshFilter.sharedMesh = t),
                            Laya.Texture2D.load(
                              "res/texture/" + a.main_texture,
                              Laya.Handler.create(e, function (e) {
                                n && (n.skinnedMeshRenderer.material.albedoTexture = e),
                                  o && (o.skinnedMeshRenderer.material.albedoTexture = e),
                                  s && (s.skinnedMeshRenderer.material.albedoTexture = e);
                              })
                            ));
                        })
                      ),
                      e.playWinAni();
                  },
                  a = Laya.loader.getRes("res/LayaScene_assets/Conventional/role_1.lh");
                a
                  ? t(a)
                  : Laya.loader.create(
                      "res/LayaScene_assets/Conventional/role_1.lh",
                      Laya.Handler.create(this, function (e) {
                        return t(e);
                      })
                    );
              }),
              (t.prototype.playWinAni = function () {
                var e = this.objRole.getChildByName("role");
                if (e) {
                  var t = e.getComponent(Laya.Animator),
                    a = o["default"].Instance.GetRoleAniCfg(this._aniid);
                  this.loadAndPlayAni(t, a.name);
                }
              }),
              (t.prototype.loadAndPlayAni = function (e, t) {
                if (e) {
                  t || (t = "win_1");
                  var a = e.getControllerLayer()._states;
                  for (var i in a) if (a[i].name == t) return void e.play(t);
                  var n = "res/assets/" + t + ".lani",
                    o = Laya.loader.getRes(n),
                    s = function (a) {
                      if (a) {
                        var i = new Laya.AnimatorState();
                        (i.name = t), (i.clip = a), (i.clip.islooping = !0), e.addState(i), e.play(t);
                      }
                    };
                  o
                    ? s(o)
                    : Laya.loader.create(
                        n,
                        Laya.Handler.create(n, function (e) {
                          return s(e);
                        })
                      );
                }
              }),
              t
            );
          })(i.ui.view.NewSkinViewUI);
        a["default"] = u;
      },
      {
        "../data/ConstValue": 4,
        "../data/Define": 5,
        "../mgr/ConfMgr": 10,
        "../mgr/ShareMgr": 15,
        "../mgr/UIMgr": 18,
        "../mgr/UserDataMgr": 19,
        "../ui/layaMaxUI": 21,
        "../utils/Tools": 22,
        "./ad/AdMgr": 40,
      },
    ],
    35: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.zOrder = 400), t;
            }
            return (
              __extends(t, e),
              (t.prototype.Show = function (e, t) {
                var a = this;
                (this.img_icon.skin = e),
                  this.lab_desc.changeText(t),
                  (this.visible = !0),
                  Laya.Tween.to(
                    this,
                    {
                      y: 200,
                    },
                    600
                  ),
                  Laya.Tween.to(
                    this,
                    {
                      y: -100,
                    },
                    600,
                    Laya.Ease.linearIn,
                    Laya.Handler.create(this, function () {
                      a.visible = !1;
                    }),
                    5e3
                  );
              }),
              t
            );
          })(i.ui.view.DialogNotifyUI);
        a["default"] = n;
      },
      {
        "../ui/layaMaxUI": 21,
      },
    ],
    36: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../ui/layaMaxUI"),
          n = e("../mgr/WxApiMgr"),
          o = e("../mgr/UIMgr"),
          s = e("../mgr/EventCenter"),
          r = e("./ad/AdMgr"),
          l = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.curType = 0),
                t.btn_close.on(Laya.Event.CLICK, t, t.clickClose),
                (t.autoDestroyAtClosed = !0),
                o["default"].Instance.AdpteScreen(t),
                t.clickScoreRank(),
                r["default"].Instance.ShowBannerAd("RankListView"),
                Laya.timer.once(100, t, function () {
                  var e = t.wx_openData.localToGlobal(new Laya.Point());
                  n["default"].Instance.changeMatrix(e);
                }),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.clickClose = function () {
                Laya.timer.clearAll(this),
                  Laya.stage.removeChild(this),
                  this.destroy(),
                  n["default"].Instance.colseRank(),
                  s["default"].Instance.event(s["default"].Event_BackShowMain),
                  r["default"].Instance.CloseBannerAd("RankListView");
              }),
              (t.prototype.clickScoreRank = function () {
                var e = this;
                1 != this.curType &&
                  (this.setBtnsVaild(!1),
                  Laya.timer.once(1e3, this, function () {
                    e.setBtnsVaild(!0);
                  }),
                  (this.curType = 1),
                  n["default"].Instance.openRank("score"));
              }),
              (t.prototype.clickPaoWangRank = function () {}),
              (t.prototype.setBtnsVaild = function (e) {
                this.btn_close.mouseEnabled = e;
              }),
              t
            );
          })(i.ui.view.RankListViewUI);
        a.RankListView = l;
      },
      {
        "../mgr/EventCenter": 11,
        "../mgr/UIMgr": 18,
        "../mgr/WxApiMgr": 20,
        "../ui/layaMaxUI": 21,
        "./ad/AdMgr": 40,
      },
    ],
    37: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.zOrder = 500),
              (t.img_bg = new Laya.Image()),
              (t.img_bg.skin = "lobby/bg_d.png"),
              (t.img_bg.height = 64),
              (t.img_bg.alpha = 0.7),
              (t.img_bg.sizeGrid = "10,10,10,10"),
              t.addChild(t.img_bg),
              (t.lab_msg = new Laya.Label()),
              (t.lab_msg.fontSize = 35),
              (t.lab_msg.color = "#fff6b5"),
              (t.lab_msg.align = "center"),
              (t.lab_msg.stroke = 3),
              (t.lab_msg.strokeColor = "#045670"),
              (t.lab_msg.y = 12),
              t.addChild(t.lab_msg),
              t
            );
          }
          return (
            __extends(t, e),
            (t.prototype.Show = function (e, t, a, i) {
              void 0 === i && (i = 0),
                (this.visible = !0),
                (this.alpha = 1),
                (this.lab_msg.text = e),
                (this.lab_msg.width = this.width = this.lab_msg.textField.textWidth + 180),
                (this.img_bg.width = this.width),
                (this.pivotX = this.width / 2);
              var n = Laya.stage.height / 2 + i;
              this.pos(Laya.stage.width / 2, n),
                this.tween0 || (this.tween0 = new Laya.Tween()),
                this.tween1 || (this.tween1 = new Laya.Tween()),
                this.tween0.to(
                  this,
                  {
                    y: n - 230,
                  },
                  1600,
                  Laya.Ease.linearOut,
                  a,
                  t
                ),
                this.tween1.to(
                  this,
                  {
                    alpha: 0,
                  },
                  1600,
                  Laya.Ease.linearNone,
                  null,
                  t
                );
            }),
            t
          );
        })(Laya.Sprite);
        a["default"] = i;
      },
      {},
    ],
    38: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../../ui/layaMaxUI"),
          n = e("../../mgr/WxApiMgr"),
          o = e("../../mgr/StatisMgr"),
          s = e("../../mgr/UserDataMgr"),
          r = e("./AdMgr"),
          l = e("../../data/ConstValue"),
          h = e("../../mgr/EventCenter"),
          d = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.needOpenMoreGameView = !0), t.on(Laya.Event.CLICK, t, t.click), t;
            }
            return (
              __extends(t, e),
              Object.defineProperty(t.prototype, "dataSource", {
                set: function (e) {
                  e &&
                    ((this._info = e),
                    (this.img_icon.skin = l.CV.ConstValue.cdnPath + "ad_icon/" + e.icon),
                    (this.lab_name.text = e.name),
                    (this.img_redpoint.visible = 1 == e.redpoint),
                    1 == e.redpoint && this.redPointAni.play(0, !0));
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "bgVis", {
                set: function (e) {
                  this.img_bg.visible = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "labNameVis", {
                set: function (e) {
                  this.lab_name.visible = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "kuangVis", {
                set: function (e) {
                  this.img_kuang.visible = e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "bgSkin", {
                set: function (e) {
                  var t = "bg_gg_" + e + ".png";
                  this.img_bg.skin = "unpack/ad/" + t;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.PlayTween = function (e) {
                1 == e
                  ? ((this._timeline = Laya.TimeLine.to(
                      this,
                      {
                        scaleX: 1.05,
                        scaleY: 1.05,
                      },
                      150
                    )
                      .to(
                        this,
                        {
                          scaleX: 0.95,
                          scaleY: 0.95,
                        },
                        200,
                        Laya.Ease.linearIn,
                        180
                      )
                      .to(
                        this,
                        {
                          scaleX: 1.05,
                          scaleY: 1.05,
                        },
                        150,
                        Laya.Ease.linearIn,
                        220
                      )
                      .to(
                        this,
                        {
                          scaleX: 1,
                          scaleY: 1,
                        },
                        100,
                        Laya.Ease.linearIn,
                        180
                      )),
                    this._timeline.play(0, !0))
                  : 2 == e &&
                    ((this._timeline = Laya.TimeLine.to(
                      this,
                      {
                        rotation: -3,
                      },
                      150
                    )
                      .to(
                        this,
                        {
                          rotation: 5,
                        },
                        150,
                        Laya.Ease.linearIn,
                        180
                      )
                      .to(
                        this,
                        {
                          rotation: -5,
                        },
                        180,
                        Laya.Ease.linearIn,
                        200
                      )
                      .to(
                        this,
                        {
                          rotation: 0,
                        },
                        100,
                        Laya.Ease.linearIn,
                        180
                      )),
                    this._timeline.play(0, !0));
              }),
              (t.prototype.StopTween = function () {
                this._timeline && this._timeline.pause();
              }),
              (t.prototype.click = function () {
                var e = this;
                if (Laya.Browser.onWeiXin && this._info) {
                  var t = s["default"].Instance.userInfo,
                    a = t.gId + "_" + t.sId,
                    i = r["default"].Instance.curShowingView;
                  n["default"].Instance.navigateToMiniProgram(this._info.appid, this._info.query, function (t) {
                    o["default"].SendEvent("[推荐位]跳转小游戏（点击统计）", {
                      appid: e._info.name,
                      关卡: a,
                      页面: i + "_" + a,
                    }),
                      t
                        ? (o["default"].SendEvent("[推荐位]跳转小游戏（成功跳转）", {
                            appid: e._info.name,
                            关卡: a,
                            页面: i + "_" + a,
                          }),
                          1 == e._info.isremove &&
                            (r["default"].Instance.AddToRemoveList(e._info.appid), h["default"].Instance.event(h["default"].Event_RemoveAppId)))
                        : e.needOpenMoreGameView && r["default"].Instance.ShowMoreGame();
                  });
                }
              }),
              t
            );
          })(i.ui.adComponent.adItemUI);
        a["default"] = d;
      },
      {
        "../../data/ConstValue": 4,
        "../../mgr/EventCenter": 11,
        "../../mgr/StatisMgr": 17,
        "../../mgr/UserDataMgr": 19,
        "../../mgr/WxApiMgr": 20,
        "../../ui/layaMaxUI": 21,
        "./AdMgr": 40,
      },
    ],
    39: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../../ui/layaMaxUI"),
          n = e("../../utils/Tools"),
          o = e("../../mgr/ConfMgr"),
          s = e("./AdMgr"),
          r = e("../../mgr/EventCenter"),
          l = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (
                (t.isOpened = !1),
                (t._timeLine = new Laya.TimeLine()),
                (t._oriX = 0),
                (t.zOrder = 100),
                (t.box_list.vScrollBarSkin = ""),
                t.btn_open.on(Laya.Event.CLICK, t, t.clickOpen),
                (t.btn_open.skin = t.isOpened ? "unpack/ad/img_ct_02.png" : "unpack/ad/img_ct_01.png"),
                (t.img_mask.visible = !1),
                t.img_mask.on(Laya.Event.CLICK, t, null),
                t
              );
            }
            return (
              __extends(t, e),
              (t.prototype.Init = function (e) {
                (this._data = e), this.refreshDate(), (this.box_list.renderHandler = new Laya.Handler(this, this.onrender));
              }),
              (t.prototype.refreshDate = function () {
                var e = this._data,
                  t = e.ids.length,
                  a = [];
                if (t > e.maxnum)
                  if (e.israndom) {
                    var i = n["default"].GetRandomNumList(0, t - 1, e.maxnum, !1, !0);
                    for (var r in i) a.push(o["default"].Instance.GetChannelAdInfoById(e.ids[i[r]]));
                  } else for (var r = 0; r < e.maxnum; r++) a.push(o["default"].Instance.GetChannelAdInfoById(e.ids[r]));
                else for (var r in e.ids) a.push(o["default"].Instance.GetChannelAdInfoById(e.ids[r]));
                this.box_list.array = s["default"].Instance.checkList(a, !1);
              }),
              (t.prototype.onrender = function (e, t) {
                (e.bgVis = !1), (e.kuangVis = !1);
              }),
              (t.prototype.clickOpen = function () {
                this.isOpened
                  ? (this._timeLine.reset(),
                    this._timeLine
                      .to(
                        this,
                        {
                          x: this._oriX,
                        },
                        200,
                        Laya.Ease.cubicOut
                      )
                      .play(),
                    r["default"].Instance.off(r["default"].Event_RemoveAppId, this, this.refreshDate))
                  : (this._timeLine.reset(),
                    this._timeLine
                      .to(
                        this,
                        {
                          x: this._oriX - 560,
                        },
                        200,
                        Laya.Ease.cubicIn
                      )
                      .play(),
                    r["default"].Instance.on(r["default"].Event_RemoveAppId, this, this.refreshDate)),
                  (this.isOpened = !this.isOpened),
                  (this.btn_open.skin = this.isOpened ? "unpack/ad/img_ct_02.png" : "unpack/ad/img_ct_01.png"),
                  (this.img_mask.visible = this.isOpened);
              }),
              t
            );
          })(i.ui.adComponent.adListUI);
        a["default"] = l;
      },
      {
        "../../mgr/ConfMgr": 10,
        "../../mgr/EventCenter": 11,
        "../../ui/layaMaxUI": 21,
        "../../utils/Tools": 22,
        "./AdMgr": 40,
      },
    ],
    40: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../../mgr/ConfMgr"),
          n = e("./AdListPanel"),
          o = e("./AdScrollPanel"),
          s = e("./AdItem"),
          r = e("../../utils/Tools"),
          l = e("../../mgr/WxApiMgr"),
          h = e("./AdVScrollPanel"),
          d = e("../../data/ConstValue"),
          c = e("../../mgr/GameMgr"),
          u = e("./AdMoreGame"),
          p = (function () {
            function e() {
              (this._forbidedChannelAdList = []),
                (this._adScrollViews = []),
                (this._showingScrollViews = []),
                (this._adScrollViews_V = []),
                (this._showingScrollViews_V = []),
                (this._adSingleItems = []),
                (this._showingSingles = []),
                (this._showingBannerRefreshInfo = {});
            }
            return (
              Object.defineProperty(e, "Instance", {
                get: function () {
                  return null == e._instance && ((e._instance = new e()), (e._instance._showingBannerRefreshInfo = {})), e._instance;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "curShowingView", {
                get: function () {
                  return this._curShowingView;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.ShowAd = function (e) {
                // if (!c["default"].isShenHe && !c["default"].gameConf.spHuTuiScene.includes(c["default"].registerScene) && this._curShowingView != e) {
                //     this.CloseAllAd(), this._curShowingView = e;
                //     var t = i["default"].Instance.GetChannelAdByView(e);
                //     if (!t) return void console.log(e, " has not found");
                //     var a = {};
                //     for (var n in t) {
                //         var o = t[n];
                //         o && 1 == o.isshow && (a[o.showtype] || (a[o.showtype] = []), 1 == o.showtype ? a[o.showtype].push(this.showSingle(o)) : 2 == o.showtype ? a[o.showtype].push(this.showList(o)) : 3 == o.showtype ? a[o.showtype].push(this.showScroll(o, !1, e)) : 4 == o.showtype && a[o.showtype].push(this.showScroll(o, !0, e)));
                //     }
                //     return a;
                // }
              }),
              (e.prototype.CloseAllAd = function () {
                var e = this;
                (this._curShowingView = ""),
                  this._showingSingles.forEach(function (t) {
                    (t.visible = !1), (t.rotation = 0), t.scale(1, 1), t.StopTween(), Laya.timer.clearAll(t), e._adSingleItems.push(t);
                  }),
                  (this._showingSingles = []),
                  this._showingScrollViews.forEach(function (t) {
                    (t.visible = !1), Laya.timer.clearAll(t), e._adScrollViews.push(t);
                  }),
                  (this._showingScrollViews = []),
                  this._showingScrollViews_V.forEach(function (t) {
                    (t.visible = !1), Laya.timer.clearAll(t), e._adScrollViews_V.push(t);
                  }),
                  (this._showingScrollViews_V = []),
                  this._adListView && ((this._adListView.visible = !1), Laya.timer.clearAll(this._adListView));
              }),
              (e.prototype.AddToRemoveList = function (e) {
                this._forbidedChannelAdList.includes(e) || this._forbidedChannelAdList.push(e);
              }),
              (e.prototype.getRandomIdWithoutFordid = function () {
                for (var e = i["default"].Instance.channelAdInfo, t = []; t.length < e.length; ) {
                  var a = r["default"].GetRandomNum(0, e.length - 1);
                  if (!this._forbidedChannelAdList.includes(e[a].appid)) return e[a];
                  t.includes(a) || t.push(a);
                }
                var n = r["default"].GetRandomNum(0, e.length - 1);
                return e[n];
              }),
              (e.prototype.checkList = function (e, t) {
                void 0 === t && (t = !0);
                for (var a = e.length, i = [], n = 0; a > n; n++) this._forbidedChannelAdList.includes(e[n].appid) || i.push(e[n]);
                if (t) for (var o = i.length, n = o; a > n; n++) i.push(this.getRandomIdWithoutFordid());
                return i;
              }),
              (e.prototype.ShowMoreGame = function (e) {
                if (c["default"].isShenHe) return !1;
                if (c["default"].gameConf.spHuTuiScene.includes(c["default"].registerScene)) return !1;
                if (this._adMoreGameView && this._adMoreGameView.visible) return !1;
                var t = i["default"].Instance.GetChannelAdByView("MoreGameView");
                if (!t || !t[0]) return console.log("MoreGameView has not found"), !1;
                var a = t[0];
                if (a && 1 == a.isshow) {
                  this._adMoreGameView || ((this._adMoreGameView = new u["default"]()), Laya.stage.addChild(this._adMoreGameView)),
                    (this._adMoreGameView.visible = !0),
                    (this._showingBanner = l["default"].Instance.getVisibleBannerId()),
                    this._showingBanner && l["default"].Instance.setBannerAdVis(this._showingBanner, !1);
                  // var n = 750 / 1344,
                  //   o = Laya.Browser.width / Laya.Browser.height;
                  // n > o && this.ShowBannerAd("MoreGameView", !0);
                  var s = a.ids.length,
                    h = [];
                  if (s > a.maxnum)
                    if (a.israndom) {
                      var d = r["default"].GetRandomNumList(0, s - 1, a.maxnum, !1, !0);
                      for (var p in d) h.push(i["default"].Instance.GetChannelAdInfoById(a.ids[d[p]]));
                    } else for (var p = 0; p < a.maxnum; p++) h.push(i["default"].Instance.GetChannelAdInfoById(a.ids[p]));
                  else for (var p in a.ids) h.push(i["default"].Instance.GetChannelAdInfoById(a.ids[p]));
                  return this._adMoreGameView.Init(this.checkList(h)), e && this._adMoreGameView.SetCallback(e), !0;
                }
                return !1;
              }),
              (e.prototype.CloseMoreGame = function () {
                this.CloseBannerAd("MoreGameView"),
                  this._showingBanner && l["default"].Instance.setBannerAdVis(this._showingBanner, !0),
                  (this._showingBanner = void 0),
                  this._adMoreGameView && ((this._adMoreGameView.visible = !1), Laya.timer.clearAll(this._adMoreGameView));
              }),
              (e.prototype.showSingle = function (e) {
                if (this._adSingleItems.length <= 0) {
                  var t = new s["default"]();
                  Laya.stage.addChild(t), (t.zOrder = 90), this._adSingleItems.push(t);
                }
                var a = this._adSingleItems.pop();
                this._showingSingles.push(a), (a.visible = !0);
                var n = 0,
                  o = function () {
                    e.israndom ? (n = r["default"].GetRandomNum(0, e.ids.length - 1)) : (n++, n >= e.ids.length && (n = 0)),
                      (a.dataSource = i["default"].Instance.GetChannelAdInfoById(e.ids[n])),
                      (a.labNameVis = !1),
                      (a.kuangVis = !1);
                  };
                e.ids.length > 1
                  ? ((n = -1), o(), e.turnstep > 0 && Laya.timer.loop(1e3 * e.turnstep, a, o))
                  : ((a.dataSource = i["default"].Instance.GetChannelAdInfoById(e.ids[n])), (a.labNameVis = !1), (a.kuangVis = !1)),
                  a.PlayTween(e.tweentype);
                var l = this.getPos(e.pos, e.adapter);
                return a.pos(l[0], l[1]), a;
              }),
              (e.prototype.showList = function (e) {
                this._adListView || ((this._adListView = new n["default"]()), Laya.stage.addChild(this._adListView)), (this._adListView.visible = !0);
                var t = this.getPos(e.pos, e.adapter);
                return this._adListView.pos(t[0], t[1]), (this._adListView._oriX = t[0]), this._adListView.Init(e), this._adListView;
              }),
              (e.prototype.showScroll = function (e, t, a) {
                // var n,
                //   s = this;
                // t
                //   ? (this._adScrollViews_V.length <= 0 && ((n = new h["default"]()), Laya.stage.addChild(n), this._adScrollViews_V.push(n)),
                //     (n = this._adScrollViews_V.pop()),
                //     this._showingScrollViews_V.push(n))
                //   : (this._adScrollViews.length <= 0 && ((n = new o["default"]()), Laya.stage.addChild(n), this._adScrollViews.push(n)),
                //     (n = this._adScrollViews.pop()),
                //     this._showingScrollViews.push(n)),
                //   (n.visible = !0);
                // var l = this.getPos(e.pos, e.adapter);
                // n.pos(l[0], l[1]);
                // var d = [],
                //   c = 0,
                //   u = [],
                //   p = e.ids.length,
                //   f = e.maxnum,
                //   g = e.turnpos,
                //   y = [],
                //   _ = function () {
                //     if (((u = []), e.israndom)) u = r["default"].GetRandomNumList(0, p - 1, f, !1, !0, y);
                //     else
                //       for (var t = 0, a = 0; f > a; ) {
                //         var o = (c + t) % p;
                //         -1 == y.indexOf(o) && u.push(o), ++t, (a = u.length), a == f && (c = (c + t) % p);
                //       }
                //     for (var l = 0; l < u.length; l++) d[g[l]] = i["default"].Instance.GetChannelAdInfoById(e.ids[u[l]]);
                //     n.changeDatas(s.checkList(d));
                //   };
                // if (p > f) {
                //   if (((u = []), e.israndom)) u = r["default"].GetRandomNumList(0, p - 1, f, !1, !0);
                //   else for (var m = 0; m < e.maxnum; m++) u.push(m);
                //   for (var m = 0; m < u.length; m++) d.push(i["default"].Instance.GetChannelAdInfoById(e.ids[u[m]]));
                //   n.Init(this.checkList(d), a), g.length > 1 && -1 != g[0] && (f = g.length);
                //   for (var m = 0; m < u.length; m++) -1 == g.indexOf(m) && y.push(u[m]);
                //   e.turnstep > 0 && Laya.timer.loop(1e3 * e.turnstep, n, _);
                // } else {
                //   for (var m in e.ids) d.push(i["default"].Instance.GetChannelAdInfoById(e.ids[m]));
                //   n.Init(this.checkList(d), a);
                // }
                // return n;
              }),
              (e.prototype.getPos = function (e, t) {
                var a = [e[0], e[1]];
                if (Laya.Browser.onMobile) {
                  var i = 750 / Laya.Browser.width,
                    n = 1334 / i,
                    o = (Laya.Browser.height - n) * i;
                  if (0 == t || 1 == t) {
                    var s = 2;
                    1 == t && (s = 1), (a[1] += o / s);
                  } else if (2 == t) {
                    var r = 750 / 1344,
                      l = Laya.Browser.width / Laya.Browser.height;
                    r > l && (a[1] += d.CV.ConstValue.adaptTopOffset);
                  }
                }

                return a;
              }),
              (e.prototype.ShowBannerAd = function (e, t) {
                if ((void 0 === t && (t = !0), Laya.Browser.onWeiXin)) {
                  var a = i["default"].Instance.GetBannerInfo(e);
                  if (a) {
                    var n = a.banner_id,
                      o = a.refresh_step;
                    c["default"].gameConf.spBannerRefreshScene.includes(c["default"].registerScene) && (o = a.refresh_step1),
                      "GiftView" == e &&
                        (n =
                          !this._showingBannerRefreshInfo[e] || this._showingBannerRefreshInfo[e].times >= o
                            ? this.getRandomWuChuBannerId()
                            : this._showingBannerRefreshInfo[e].bid),
                      this._showingBannerRefreshInfo[e] ||
                        (this._showingBannerRefreshInfo[e] = {
                          times: 0,
                          bid: n,
                        }),
                      t && (this._showingBannerRefreshInfo[e].times += 1),
                      (this._showingBannerRefreshInfo[e].bid = n),
                      l["default"].Instance.showBannerAd(n, t, !1, 1 == a.issmall);
                  }
                }
              }),
              (e.prototype.CloseBannerAd = function (e) {
                if (Laya.Browser.onWeiXin && this._showingBannerRefreshInfo[e]) {
                  var t = i["default"].Instance.GetBannerInfo(e);
                  if (t) {
                    var a = t.refresh_step;
                    c["default"].gameConf.spBannerRefreshScene.includes(c["default"].registerScene) && (a = t.refresh_step1);
                    var n = !1;
                    if (
                      (0 >= a ? (n = !1) : this._showingBannerRefreshInfo[e].times >= a && ((this._showingBannerRefreshInfo[e].times = 0), (n = !0)),
                      l["default"].Instance.setBannerAdVis(this._showingBannerRefreshInfo[e].bid, !1),
                      n)
                    ) {
                      var o = t.banner_id;
                      "GiftView" == e && (o = this.getRandomWuChuBannerId()),
                        (this._showingBannerRefreshInfo[e].bid = o),
                        l["default"].Instance.showBannerAd(o, !1, n, 1 == t.issmall);
                    }
                  }
                }
              }),
              (e.prototype.getRandomWuChuBannerId = function () {
                var e = c["default"].gameConf.wcBanners;
                if (e && e.length > 0) {
                  var t = r["default"].GetRandomNum(0, e.length - 1);
                  return e[t];
                }
                return i["default"].Instance.GetBannerInfo("GiftView").banner_id;
              }),
              e
            );
          })();
        a["default"] = p;
      },
      {
        "../../data/ConstValue": 4,
        "../../mgr/ConfMgr": 10,
        "../../mgr/GameMgr": 12,
        "../../mgr/WxApiMgr": 20,
        "../../utils/Tools": 22,
        "./AdItem": 38,
        "./AdListPanel": 39,
        "./AdMoreGame": 41,
        "./AdScrollPanel": 42,
        "./AdVScrollPanel": 43,
      },
    ],
    41: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../../ui/layaMaxUI"),
          n = e("./AdMgr"),
          o = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.zOrder = 120), (t.box_list.vScrollBarSkin = ""), t.btn_close.on(Laya.Event.CLICK, t, t.clickClose), t;
            }
            return (
              __extends(t, e),
              (t.prototype.Init = function (e) {
                (this._callback = null),
                  (this.lab_btn.text = "Close"),
                  (this.lab_msg.text = ""),
                  (this.box_list.array = e),
                  (this.box_list.renderHandler = new Laya.Handler(this, this.onrender)),
                  Laya.timer.once(200, this, this.tween);
              }),
              (t.prototype.SetCallback = function (e) {
                var t = this;
                (this._callback = function () {
                  e && e();
                }),
                  (this.lab_btn.text = "Next"),
                  (this.btn_close.visible = !1);
                var a = 5;
                (this.lab_msg.text = "5"),
                  Laya.timer.loop(1e3, this.btn_close, function () {
                    a--, (t.lab_msg.text = a + ""), 0 >= a && (Laya.timer.clearAll(t.btn_close), (t.btn_close.visible = !0), (t.lab_msg.text = ""));
                  });
              }),
              (t.prototype.onrender = function (e, t) {
                (e.img_bg.width = 130),
                  (e.img_bg.height = 165),
                  (e.lab_name.y = 132),
                  (e.img_icon.y = 2),
                  (e.img_bg.skin = "unpack/ad/bg_" + ((t % 3) + 1) + ".png"),
                  (e.img_bg.visible = !0),
                  (e.img_kuang.visible = !1),
                  (e.needOpenMoreGameView = !1);
              }),
              (t.prototype.clickClose = function () {
                n["default"].Instance.CloseMoreGame(), this._callback && this._callback();
              }),
              (t.prototype.tween = function () {
                var e = this,
                  t = this.box_list.getChildAt(0)._children,
                  a = this.box_list.array.length,
                  i = a - t.length,
                  n = Math.floor((a - 1) / 2);
                if (i > 0) {
                  var o = 3e3 * i,
                    s = 0,
                    r = function () {
                      return e.box_list.tweenTo(++s % 2 == 0 ? 0 : n, o);
                    };
                  this.box_list.tweenTo(n, o), Laya.timer.loop(o + 1e3, this.box_list, r);
                }
              }),
              t
            );
          })(i.ui.adComponent.adMoreGameUI);
        a["default"] = o;
      },
      {
        "../../ui/layaMaxUI": 21,
        "./AdMgr": 40,
      },
    ],
    42: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../../ui/layaMaxUI"),
          n = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.zOrder = 100), (t.box_list.hScrollBarSkin = ""), t;
            }
            return (
              __extends(t, e),
              (t.prototype.Init = function (e, t) {
                (this._viewName = t),
                  Laya.timer.clearAll(this.box_list),
                  (this.box_list.array = e),
                  (this.box_list.renderHandler = new Laya.Handler(this, this.onrender)),
                  this.setListProp();
              }),
              (t.prototype.onrender = function (e, t) {
                (e.bgVis = !1),
                  (e.labNameVis = !1),
                  (e.kuangVis = !1),
                  "mainView" == this._viewName || "avatarView" == this._viewName || "offlineView" == this._viewName
                    ? e.scale(0.9, 0.9)
                    : "backView" == this._viewName || "exitView" == this._viewName
                    ? e.scale(1.6, 1.6)
                    : "endView" == this._viewName || "jumpView" == this._viewName
                    ? e.scale(1.5, 1.5)
                    : ((e.bgVis = !0), (e.labNameVis = !0), (e.kuangVis = !0));
              }),
              (t.prototype.changeDatas = function (e) {
                for (var t = 0; t < this.box_list.array.length; t++) {
                  var a = this.box_list.getCell(t);
                  a && (a.dataSource = e[t]);
                }
                this.box_list.updateArray(e);
              }),
              (t.prototype.setListProp = function () {
                this.box_list.getChildAt(0)._children;
                "mainView" == this._viewName || "avatarView" == this._viewName || "offlineView" == this._viewName
                  ? ((this.box_list.spaceX = -15),
                    (this.box_list.height = 110),
                    (this.box_list.y = 20),
                    (this.box_list.width = 665),
                    (this.img_bg.visible = !0))
                  : "backView" == this._viewName || "exitView" == this._viewName
                  ? ((this.box_list.spaceX = 85),
                    (this.box_list.height = 200),
                    (this.box_list.y = 0),
                    (this.box_list.width = 622),
                    (this.img_bg.visible = !1))
                  : ("endView" == this._viewName || "jumpView" == this._viewName) &&
                    ((this.box_list.spaceX = 80),
                    (this.box_list.height = 190),
                    (this.box_list.y = 0),
                    (this.box_list.width = 600),
                    (this.img_bg.visible = !1)),
                  (this._cellSize = this.box_list.spaceX + 125),
                  Laya.timer.once(200, this, this.tween);
              }),
              (t.prototype.tween = function () {
                var e = this,
                  t = this.box_list.getChildAt(0)._children,
                  a = this.box_list.array.length,
                  i = a - t.length,
                  n = Math.floor((a - 1) / 2);
                if (i > 0) {
                  var o = 3e3 * i,
                    s = 0,
                    r = function () {
                      return e.box_list.tweenTo(++s % 2 == 0 ? 0 : n, o);
                    };
                  this.box_list.tweenTo(n, o), Laya.timer.loop(o + 1e3, this.box_list, r);
                }
              }),
              t
            );
          })(i.ui.adComponent.adScrollUI);
        a["default"] = n;
      },
      {
        "../../ui/layaMaxUI": 21,
      },
    ],
    43: [
      function (e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
          value: !0,
        });
        var i = e("../../ui/layaMaxUI"),
          n = (function (e) {
            function t() {
              var t = e.call(this) || this;
              return (t.box_list.vScrollBarSkin = ""), t;
            }
            return (
              __extends(t, e),
              (t.prototype.Init = function (e, t) {
                (this._viewName = t),
                  (this.box_list.array = e),
                  (this.box_list.renderHandler = new Laya.Handler(this, this.onrender)),
                  this.setListProp(),
                  "loadingView" == t ? (this.zOrder = 350) : (this.zOrder = 100);
              }),
              (t.prototype.onrender = function (e, t) {
                (e.bgVis = !0), (e.labNameVis = !0), (e.kuangVis = !1), "loadingView" == this._viewName && (e.needOpenMoreGameView = !1);
              }),
              (t.prototype.changeDatas = function (e) {
                for (var t = 0; t < this.box_list.array.length; t++) {
                  var a = this.box_list.getCell(t);
                  a && (a.dataSource = e[t]);
                }
                this.box_list.updateArray(e);
              }),
              (t.prototype.setListProp = function () {
                "loading" == this._viewName
                  ? ((this.box_list.height = 520), (this.height = 520))
                  : "offlineView" == this._viewName && ((this.box_list.height = 680), (this.height = 680));
              }),
              t
            );
          })(i.ui.adComponent.adScrollVUI);
        a["default"] = n;
      },
      {
        "../../ui/layaMaxUI": 21,
      },
    ],
  },
  {},
  [2]
);
