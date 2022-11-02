window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(a, s) {
    "use strict";
    class l {
        constructor() {}
    }
    l.OnRecieveMainScopeMsg = "OnRecieveMainScopeMsg", l.OpenRank = "OpenRank", l.CloseRank = "CloseRank", 
    l.ShowRank = "ShowRank", s.ILaya.regClass(l), s.ClassUtils.regClass("zs.laya.opendata.EventId", l);
    class e {
        constructor() {}
    }
    e.Rank = "Rank", s.ILaya.regClass(e), s.ClassUtils.regClass("zs.laya.opendata.CloudKey", e), 
    s.ClassUtils.regClass("Zhise.OpenViewCloudKey", e);
    class n {
        constructor() {
            this.userId = null;
        }
    }
    n.data = new n(), s.ILaya.regClass(n), s.ClassUtils.regClass("zs.laya.opendata.UserData", n), 
    s.ClassUtils.regClass("Zhise.UserData", n);
    class t {
        constructor() {}
    }
    t.FriendRank = "FriendRank", t.WorldRank = "WorldRank", s.ILaya.regClass(t), s.ClassUtils.regClass("zs.laya.opendata.RankType", t), 
    s.ClassUtils.regClass("Zhise.RankType", t);
    class i {
        constructor(a, s, l, e, n) {
            this.index = a, this.avatarUrl = s, this.nickname = l, this.score = e, this.isSelf = n;
        }
    }
    i.selfData = null, i.friendData = null, i.worldData = null, s.ILaya.regClass(i), 
    s.ClassUtils.regClass("zs.laya.opendata.RankData", i), s.ClassUtils.regClass("Zhise.RankData", i);
    class r {
        constructor(a, s) {
            this.event = a, this.data = s, this.url = null;
        }
    }
    s.ILaya.regClass(r), s.ClassUtils.regClass("zs.laya.opendata.MainScopeMsg", r), 
    s.ClassUtils.regClass("Zhise.MainScopeMsg", r), a.EventDefine = l, a.CloudKeyDefine = e, 
    a.UserData = n, a.RankType = t, a.RankData = i;
}(window.zs.laya.opendata = window.zs.laya.opendata || {}, Laya);