!function(i, e, t) {
    t.un, t.uns;
    var n = t.static, a = t.class, o = t.getset, r = (t.__newvec, laya.utils.Browser), l = (laya.events.Event, 
    laya.events.EventDispatcher), s = laya.resource.HTMLImage, u = laya.utils.Handler, c = laya.display.Input, d = laya.net.Loader, f = laya.net.LocalStorage, h = (laya.maths.Matrix, 
    laya.renders.Render), v = laya.utils.RunDriver, p = laya.media.SoundChannel, m = laya.media.SoundManager, g = laya.net.URL, y = laya.utils.Utils, w = function() {
        function e() {}
        return a(e, "laya.wx.mini.MiniAdpter"), e.getJson = function(i) {
            return JSON.parse(i);
        }, e.init = function(n, a) {
            if (void 0 === n && (n = !1), void 0 === a && (a = !1), !(e._inited || (e._inited = !0, 
            (e.window = i).navigator.userAgent.indexOf("MiniGame") < 0))) {
                e.isZiYu = a, e.isPosMsgYu = n, e.EnvConfig = {};
                try {
                    laya.webgl.resource.WebGLCanvas.premulAlpha = !0;
                } catch (i) {}
                if (e.isZiYu || (_.setNativeFileDir("/layaairGame"), _.existDir(_.fileNativeDir, u.create(e, e.onMkdirCallBack))), 
                "ios 10.1.1" === (e.systemInfo = wx.getSystemInfoSync()).system.toLowerCase()) try {
                    laya.webgl.resource.WebGLCharImage.canUseCanvas = !1;
                } catch (i) {}
                e.window.focus = function() {}, t._getUrlPath = function() {}, e.window.logtime = function(i) {}, 
                e.window.alertTimeLog = function(i) {}, e.window.resetShareInfo = function() {}, 
                e.window.CanvasRenderingContext2D = function() {}, e.window.CanvasRenderingContext2D.prototype = e.window.wx.createCanvas().getContext("2d").__proto__, 
                e.window.document.body.appendChild = function() {}, e.EnvConfig.pixelRatioInt = 0, 
                v.getPixelRatio = e.pixelRatio, e._preCreateElement = r.createElement, r.createElement = e.createElement, 
                v.createShaderCondition = e.createShaderCondition, y.parseXMLFromString = e.parseXMLFromString, 
                c._createInputElement = C._createInputElement, e.EnvConfig.load = d.prototype.load, 
                d.prototype.load = L.prototype.load, d.prototype._loadImage = x.prototype._loadImage, 
                f._baseClass = F, F.__init__(), e.onReciveData();
            }
        }, e.onReciveData = function() {
            laya.wx.mini.MiniAdpter.isZiYu && wx.onMessage(function(i) {
                "opendatacontext" == i.isLoad ? i.url && (_.ziyuFileData[i.url] = i.atlasdata, _.ziyuFileTextureData[i.imgReadyUrl] = i.imgNativeUrl) : "openJsondatacontext" == i.isLoad ? i.url && (_.ziyuFileData[i.url] = i.atlasdata) : "openJsondatacontextPic" == i.isLoad && (_.ziyuFileTextureData[i.imgReadyUrl] = i.imgNativeUrl);
            });
        }, e.measureText = function(i) {
            var t = e._measureText(i);
            return t || (t = {
                width: 16
            }, console.warn("-------??????????????????????????????----????????????---------")), t;
        }, e.getUrlEncode = function(i, e) {
            return -1 != i.indexOf(".fnt") ? "utf8" : "arraybuffer" == e ? "" : "ascii";
        }, e.downLoadFile = function(i, e, t, n) {
            void 0 === e && (e = ""), void 0 === n && (n = "ascii"), _.getFileInfo(i) ? null != t && t.runWith([ 0 ]) : _.downLoadFile(i, e, t, n);
        }, e.remove = function(i, e) {
            _.deleteFile("", i, e, "", 0);
        }, e.removeAll = function() {
            _.deleteAll();
        }, e.hasNativeFile = function(i) {
            return _.isLocalNativeFile(i);
        }, e.getFileInfo = function(i) {
            return _.getFileInfo(i);
        }, e.getFileList = function() {
            return _.filesListObj;
        }, e.exitMiniProgram = function() {
            e.window.wx.exitMiniProgram();
        }, e.onMkdirCallBack = function(i, e) {
            i || (_.filesListObj = JSON.parse(e.data));
        }, e.pixelRatio = function() {
            if (!e.EnvConfig.pixelRatioInt) try {
                return e.EnvConfig.pixelRatioInt = e.systemInfo.pixelRatio, e.systemInfo.pixelRatio;
            } catch (i) {}
            return e.EnvConfig.pixelRatioInt;
        }, e.createElement = function(t) {
            if ("canvas" == t) {
                var n;
                return 1 == e.idx ? e.isZiYu ? (n = sharedCanvas).style = {} : n = i.canvas : n = i.wx.createCanvas(), 
                e.idx++, n;
            }
            if ("textarea" == t || "input" == t) return e.onCreateInput(t);
            if ("div" == t) {
                var a = e._preCreateElement(t);
                return a.contains = function(i) {
                    return null;
                }, a.removeChild = function(i) {}, a;
            }
            return e._preCreateElement(t);
        }, e.onCreateInput = function(i) {
            var t = e._preCreateElement(i);
            return t.focus = C.wxinputFocus, t.blur = C.wxinputblur, t.style = {}, t.value = 0, 
            t.parentElement = {}, t.placeholder = {}, t.type = {}, t.setColor = function(i) {}, 
            t.setType = function(i) {}, t.setFontFace = function(i) {}, t.addEventListener = function(i) {}, 
            t.contains = function(i) {
                return null;
            }, t.removeChild = function(i) {}, t;
        }, e.createShaderCondition = function(i) {
            var e = this;
            return function() {
                return e[i.replace("this.", "")];
            };
        }, e.sendAtlasToOpenDataContext = function(i) {
            if (!laya.wx.mini.MiniAdpter.isZiYu) {
                var t = d.getRes(g.formatURL(i));
                if (!t) throw "?????????url????????????????????????????????????????????????????????????????????????";
                t.meta.image.split(",");
                if (t.meta && t.meta.image) for (var n = t.meta.image.split(","), a = i.indexOf("/") >= 0 ? "/" : "\\", o = i.lastIndexOf(a), r = o >= 0 ? i.substr(0, o + 1) : "", l = 0, s = n.length; l < s; l++) n[l] = r + n[l]; else n = [ i.replace(".json", ".png") ];
                for (l = 0; l < n.length; l++) {
                    var u = n[l];
                    e.postInfoToContext(i, u, t);
                }
            }
        }, e.postInfoToContext = function(i, e, t) {
            var n = {
                frames: t.frames,
                meta: t.meta
            }, a = e, o = _.getFileInfo(g.formatURL(e));
            if (o) var r = o.md5, l = _.getFileNativePath(r); else l = a;
            if (!l) throw "?????????????????????url??????????????????";
            wx.postMessage({
                url: i,
                atlasdata: n,
                imgNativeUrl: l,
                imgReadyUrl: a,
                isLoad: "opendatacontext"
            });
        }, e.sendSinglePicToOpenDataContext = function(i) {
            var e = g.formatURL(i), t = _.getFileInfo(e);
            if (t) {
                var n = t.md5, a = _.getFileNativePath(n);
                i = e;
            } else a = i;
            if (!a) throw "?????????????????????url??????????????????";
            wx.postMessage({
                url: i,
                imgNativeUrl: a,
                imgReadyUrl: i,
                isLoad: "openJsondatacontextPic"
            });
        }, e.sendJsonDataToDataContext = function(i) {
            if (!laya.wx.mini.MiniAdpter.isZiYu) {
                var e = d.getRes(i);
                if (!e) throw "?????????url????????????????????????????????????????????????????????????????????????";
                wx.postMessage({
                    url: i,
                    atlasdata: e,
                    isLoad: "openJsondatacontext"
                });
            }
        }, e.EnvConfig = null, e.window = null, e._preCreateElement = null, e._inited = !1, 
        e.systemInfo = null, e.isZiYu = !1, e.isPosMsgYu = !1, e.autoCacheFile = !0, e.minClearSize = 5242880, 
        e.subNativeFiles = null, e.subNativeheads = [], e.subMaps = [], e.AutoCacheDownFile = !1, 
        e._measureText = null, e.parseXMLFromString = function(e) {
            var t;
            e = e.replace(/>\s+</g, "><");
            try {
                t = new i.Parser.DOMParser().parseFromString(e, "text/xml");
            } catch (i) {
                throw "????????????xml???????????????";
            }
            return t;
        }, e.idx = 1, n(e, [ "nativefiles", function() {
            return this.nativefiles = [ "layaNativeDir", "wxlocal" ];
        } ]), e;
    }(), _ = function() {
        function e() {}
        return a(e, "laya.wx.mini.MiniFileMgr"), e.isLocalNativeFile = function(i) {
            for (var e = 0, t = w.nativefiles.length; e < t; e++) if (-1 != i.indexOf(w.nativefiles[e])) return !0;
            return !1;
        }, e.getFileInfo = function(i) {
            var t = i, n = e.filesListObj[t];
            return null == n ? null : n;
        }, e.read = function(i, t, n, a, o, r) {
            void 0 === t && (t = "ascill"), void 0 === a && (a = ""), void 0 === o && (o = !1), 
            void 0 === r && (r = "");
            var l;
            l = "" == a || -1 == a.indexOf("http://") && -1 == a.indexOf("https://") ? i : e.getFileNativePath(i), 
            e.fs.readFile({
                filePath: l,
                encoding: t,
                success: function(i) {
                    null != n && n.runWith([ 0, i ]);
                },
                fail: function(i) {
                    i && "" != a ? e.downFiles(a, t, n, a, o, r) : null != n && n.runWith([ 1 ]);
                }
            });
        }, e.downFiles = function(i, t, n, a, o, r, l) {
            void 0 === t && (t = "ascii"), void 0 === a && (a = ""), void 0 === o && (o = !1), 
            void 0 === r && (r = ""), void 0 === l && (l = !0), e.wxdown({
                url: i,
                success: function(s) {
                    200 === s.statusCode ? e.readFile(s.tempFilePath, t, n, a, o, r, l) : 403 === s.statusCode ? null != n && n.runWith([ 0, i ]) : null != n && n.runWith([ 1, s ]);
                },
                fail: function(i) {
                    null != n && n.runWith([ 1, i ]);
                }
            }).onProgressUpdate(function(i) {
                null != n && n.runWith([ 2, i.progress ]);
            });
        }, e.readFile = function(i, t, n, a, o, r, l) {
            void 0 === t && (t = "ascill"), void 0 === a && (a = ""), void 0 === o && (o = !1), 
            void 0 === r && (r = ""), void 0 === l && (l = !0), e.fs.readFile({
                filePath: i,
                encoding: t,
                success: function(r) {
                    -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? (w.autoCacheFile || o) && e.copyFile(i, a, n, t, l) : null != n && n.runWith([ 0, r ]);
                },
                fail: function(i) {
                    i && null != n && n.runWith([ 1, i ]);
                }
            });
        }, e.downOtherFiles = function(i, t, n, a, o) {
            void 0 === n && (n = ""), void 0 === a && (a = !1), void 0 === o && (o = !0), e.wxdown({
                url: i,
                success: function(i) {
                    200 === i.statusCode ? (w.autoCacheFile || a) && -1 == n.indexOf("wx.qlogo.cn") && -1 == n.indexOf(".php") ? e.copyFile(i.tempFilePath, n, t, "", o) : null != t && t.runWith([ 0, i.tempFilePath ]) : null != t && t.runWith([ 1, i ]);
                },
                fail: function(i) {
                    null != t && t.runWith([ 1, i ]);
                }
            });
        }, e.downLoadFile = function(n, a, o, r) {
            void 0 === a && (a = ""), void 0 === r && (r = "ascii"), i.navigator.userAgent.indexOf("MiniGame") < 0 ? t.loader.load(n, o) : "image" == a || "sound" == a ? e.downOtherFiles(n, o, n, !0, !1) : e.downFiles(n, r, o, n, !0, a, !1);
        }, e.copyFile = function(i, t, n, a, o) {
            void 0 === a && (a = ""), void 0 === o && (o = !0);
            var r = i.split("/"), l = r[r.length - 1], s = e.getFileInfo(t), u = e.getFileNativePath(l), c = e.getCacheUseSize();
            s ? s.readyUrl != t ? e.fs.getFileInfo({
                filePath: i,
                success: function(i) {
                    o && c + 4194304 + i.size >= 52428800 && (i.size > w.minClearSize && (w.minClearSize = i.size), 
                    e.onClearCacheRes()), e.deleteFile(l, t, n, a, i.size);
                },
                fail: function(i) {
                    null != n && n.runWith([ 1, i ]);
                }
            }) : null != n && n.runWith([ 0 ]) : e.fs.getFileInfo({
                filePath: i,
                success: function(r) {
                    o && c + 4194304 + r.size >= 52428800 && (r.size > w.minClearSize && (w.minClearSize = r.size), 
                    e.onClearCacheRes()), e.fs.copyFile({
                        srcPath: i,
                        destPath: u,
                        success: function(i) {
                            e.onSaveFile(t, l, !0, a, n, r.size);
                        },
                        fail: function(i) {
                            null != n && n.runWith([ 1, i ]);
                        }
                    });
                },
                fail: function(i) {
                    null != n && n.runWith([ 1, i ]);
                }
            });
        }, e.onClearCacheRes = function() {
            var i = w.minClearSize, t = [];
            for (var n in e.filesListObj) t.push(e.filesListObj[n]);
            e.sortOn(t, "times", 16);
            for (var a = 0, o = 1, r = t.length; o < r; o++) {
                var l = t[o];
                if (a >= i) break;
                a += l.size, e.deleteFile("", l.readyUrl);
            }
        }, e.sortOn = function(i, e, t) {
            return void 0 === t && (t = 0), 16 == t ? i.sort(function(i, t) {
                return i[e] - t[e];
            }) : 18 == t ? i.sort(function(i, t) {
                return t[e] - i[e];
            }) : i.sort(function(i, t) {
                return i[e] - t[e];
            });
        }, e.getFileNativePath = function(i) {
            return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + i;
        }, e.deleteFile = function(i, t, n, a, o) {
            void 0 === t && (t = ""), void 0 === a && (a = ""), void 0 === o && (o = 0);
            var r = e.getFileInfo(t), l = e.getFileNativePath(r.md5);
            e.fs.unlink({
                filePath: l,
                success: function(r) {
                    var l = "" != i;
                    if ("" != i) {
                        var s = e.getFileNativePath(i);
                        e.fs.copyFile({
                            srcPath: i,
                            destPath: s,
                            success: function(o) {
                                e.onSaveFile(t, i, l, a, n, o.size);
                            },
                            fail: function(i) {
                                null != n && n.runWith([ 1, i ]);
                            }
                        });
                    } else e.onSaveFile(t, i, l, a, n, o);
                },
                fail: function(i) {}
            });
        }, e.deleteAll = function() {
            var i = [];
            for (var t in e.filesListObj) i.push(e.filesListObj[t]);
            for (var n = 1, a = i.length; n < a; n++) {
                var o = i[n];
                e.deleteFile("", o.readyUrl);
            }
            laya.wx.mini.MiniFileMgr.filesListObj && laya.wx.mini.MiniFileMgr.filesListObj.fileUsedSize && (laya.wx.mini.MiniFileMgr.filesListObj.fileUsedSize = 0), 
            laya.wx.mini.MiniFileMgr.writeFilesList("", JSON.stringify({}), !1);
        }, e.onSaveFile = function(i, t, n, a, o, l) {
            void 0 === n && (n = !0), void 0 === a && (a = ""), void 0 === l && (l = 0);
            var s = i;
            if (null == e.filesListObj.fileUsedSize && (e.filesListObj.fileUsedSize = 0), n) {
                e.getFileNativePath(t);
                e.filesListObj[s] = {
                    md5: t,
                    readyUrl: i,
                    size: l,
                    times: r.now(),
                    encoding: a
                }, e.filesListObj.fileUsedSize = parseInt(e.filesListObj.fileUsedSize) + l, e.writeFilesList(s, JSON.stringify(e.filesListObj), !0), 
                null != o && o.runWith([ 0 ]);
            } else if (e.filesListObj[s]) {
                var u = parseInt(e.filesListObj[s].size);
                e.filesListObj.fileUsedSize = parseInt(e.filesListObj.fileUsedSize) - u, delete e.filesListObj[s], 
                e.writeFilesList(s, JSON.stringify(e.filesListObj), !1), null != o && o.runWith([ 0 ]);
            }
        }, e.writeFilesList = function(i, t, n) {
            var a = e.fileNativeDir + "/" + e.fileListName;
            e.fs.writeFile({
                filePath: a,
                encoding: "utf8",
                data: t,
                success: function(i) {},
                fail: function(i) {}
            }), !w.isZiYu && w.isPosMsgYu && wx.postMessage({
                url: i,
                data: e.filesListObj[i],
                isLoad: "filenative",
                isAdd: n
            });
        }, e.getCacheUseSize = function() {
            return e.filesListObj && e.filesListObj.fileUsedSize ? e.filesListObj.fileUsedSize : 0;
        }, e.existDir = function(i, t) {
            e.fs.mkdir({
                dirPath: i,
                success: function(i) {
                    null != t && t.runWith([ 0, {
                        data: JSON.stringify({})
                    } ]);
                },
                fail: function(i) {
                    -1 != i.errMsg.indexOf("file already exists") ? e.readSync(e.fileListName, "utf8", t) : null != t && t.runWith([ 1, i ]);
                }
            });
        }, e.readSync = function(i, t, n, a) {
            void 0 === t && (t = "ascill"), void 0 === a && (a = "");
            var o, r = e.getFileNativePath(i);
            try {
                o = e.fs.readFileSync(r, t), null != n && n.runWith([ 0, {
                    data: o
                } ]);
            } catch (i) {
                null != n && n.runWith([ 1 ]);
            }
        }, e.setNativeFileDir = function(i) {
            e.fileNativeDir = wx.env.USER_DATA_PATH + i;
        }, e.filesListObj = {}, e.fileNativeDir = null, e.fileListName = "layaairfiles.txt", 
        e.ziyuFileData = {}, e.ziyuFileTextureData = {}, e.loadPath = "", e.DESCENDING = 2, 
        e.NUMERIC = 16, n(e, [ "fs", function() {
            return this.fs = wx.getFileSystemManager();
        }, "wxdown", function() {
            return this.wxdown = wx.downloadFile;
        } ]), e;
    }(), x = function() {
        function i() {}
        return a(i, "laya.wx.mini.MiniImage"), i.prototype._loadImage = function(e) {
            var t = this;
            if (w.isZiYu) i.onCreateImage(e, t, !0); else {
                var n = !1;
                if (_.isLocalNativeFile(e)) {
                    if (-1 != e.indexOf("http://") || -1 != e.indexOf("https://")) if ("" != _.loadPath) e = e.split(_.loadPath)[1]; else {
                        var a = "" != g.rootPath ? g.rootPath : g.basePath, o = e;
                        "" != a && (e = e.split(a)[1]), e || (e = o);
                    }
                    if (w.subNativeFiles && 0 == w.subNativeheads.length) for (var r in w.subNativeFiles) {
                        var l = w.subNativeFiles[r];
                        w.subNativeheads = w.subNativeheads.concat(l);
                        for (var s = 0; s < l.length; s++) w.subMaps[l[s]] = r + "/" + l[s];
                    }
                    if (w.subNativeFiles && -1 != e.indexOf("/")) {
                        var c = e.split("/")[0] + "/";
                        if (c && -1 != w.subNativeheads.indexOf(c)) {
                            var d = w.subMaps[c];
                            e = e.replace(c, d);
                        }
                    }
                } else n = !0, e = g.formatURL(e);
                _.getFileInfo(e) ? i.onCreateImage(e, t, !n) : -1 != e.indexOf("http://") || -1 != e.indexOf("https://") ? w.isZiYu ? i.onCreateImage(e, t, !0) : _.downOtherFiles(e, new u(i, i.onDownImgCallBack, [ e, t ]), e) : i.onCreateImage(e, t, !0);
            }
        }, i.onDownImgCallBack = function(e, t, n, a) {
            void 0 === a && (a = ""), n ? t.onError(null) : i.onCreateImage(e, t, !1, a);
        }, i.onCreateImage = function(i, e, t, n) {
            function a() {
                c.onload = null, c.onerror = null, delete e.imgCache[i];
            }
            void 0 === t && (t = !1), void 0 === n && (n = "");
            var o;
            if (w.autoCacheFile) if (t) if (w.isZiYu) {
                var l = g.formatURL(i);
                o = _.ziyuFileTextureData[l] ? _.ziyuFileTextureData[l] : i;
            } else o = i; else if ("" != n) o = n; else {
                var u = _.getFileInfo(i).md5;
                o = _.getFileNativePath(u);
            } else o = t ? i : n;
            null == e.imgCache && (e.imgCache = {});
            var c, d = function() {
                a(), e._url = g.formatURL(e._url), e.onLoaded(c);
            }, f = function() {
                a(), e.event("error", "Load image failed");
            };
            "nativeimage" == e._type ? ((c = new r.window.Image()).crossOrigin = "", c.onload = d, 
            c.onerror = f, c.src = o, e.imgCache[i] = c) : new s.create(o, {
                onload: d,
                onerror: f,
                onCreate: function(t) {
                    c = t, e.imgCache[i] = t;
                }
            });
        }, i;
    }(), C = function() {
        function e() {}
        return a(e, "laya.wx.mini.MiniInput"), e._createInputElement = function() {
            c._initInput(c.area = r.createElement("textarea")), c._initInput(c.input = r.createElement("input")), 
            c.inputContainer = r.createElement("div"), c.inputContainer.style.position = "absolute", 
            c.inputContainer.style.zIndex = 1e5, r.container.appendChild(c.inputContainer), 
            c.inputContainer.setPos = function(i, e) {
                c.inputContainer.style.left = i + "px", c.inputContainer.style.top = e + "px";
            }, t.stage.on("resize", null, e._onStageResize), wx.onWindowResize && wx.onWindowResize(function(e) {
                i.dispatchEvent && i.dispatchEvent("resize");
            }), m._soundClass = b, m._musicClass = b;
            var n = w.systemInfo.model, a = w.systemInfo.system;
            -1 != n.indexOf("iPhone") && (r.onIPhone = !0, r.onIOS = !0, r.onIPad = !0, r.onAndroid = !1), 
            -1 == a.indexOf("Android") && -1 == a.indexOf("Adr") || (r.onAndroid = !0, r.onIPhone = !1, 
            r.onIOS = !1, r.onIPad = !1);
        }, e._onStageResize = function() {
            t.stage._canvasTransform.identity().scale(r.width / h.canvas.width / v.getPixelRatio(), r.height / h.canvas.height / v.getPixelRatio());
        }, e.wxinputFocus = function(i) {
            var e = c.inputElement.target;
            e && !e.editable || (w.window.wx.offKeyboardConfirm(), w.window.wx.offKeyboardInput(), 
            w.window.wx.showKeyboard({
                defaultValue: e.text,
                maxLength: e.maxChars,
                multiple: e.multiline,
                confirmHold: !0,
                confirmType: "done",
                success: function(i) {},
                fail: function(i) {}
            }), w.window.wx.onKeyboardConfirm(function(i) {
                var t = i ? i.value : "";
                e.text = t, e.event("input"), laya.wx.mini.MiniInput.inputEnter();
            }), w.window.wx.onKeyboardInput(function(i) {
                var t = i ? i.value : "";
                e.multiline || -1 == t.indexOf("\n") ? (e.text = t, e.event("input")) : laya.wx.mini.MiniInput.inputEnter();
            }));
        }, e.inputEnter = function() {
            c.inputElement.target.focus = !1;
        }, e.wxinputblur = function() {
            e.hideKeyboard();
        }, e.hideKeyboard = function() {
            w.window.wx.offKeyboardConfirm(), w.window.wx.offKeyboardInput(), w.window.wx.hideKeyboard({
                success: function(i) {
                    console.log("????????????");
                },
                fail: function(i) {
                    console.log("??????????????????:" + (i ? i.errMsg : ""));
                }
            });
        }, e;
    }(), F = function() {
        function i() {}
        return a(i, "laya.wx.mini.MiniLocalStorage"), i.__init__ = function() {
            i.items = i;
        }, i.setItem = function(i, e) {
            try {
                wx.setStorageSync(i, e);
            } catch (t) {
                wx.setStorage({
                    key: i,
                    data: e
                });
            }
        }, i.getItem = function(i) {
            return wx.getStorageSync(i);
        }, i.setJSON = function(e, t) {
            i.setItem(e, t);
        }, i.getJSON = function(e) {
            return i.getItem(e);
        }, i.removeItem = function(i) {
            wx.removeStorageSync(i);
        }, i.clear = function() {
            wx.clearStorageSync();
        }, i.getStorageInfoSync = function() {
            try {
                var i = wx.getStorageInfoSync();
                return console.log(i.keys), console.log(i.currentSize), console.log(i.limitSize), 
                i;
            } catch (i) {}
            return null;
        }, i.support = !0, i.items = null, i;
    }(), L = (function() {
        function i() {}
        a(i, "laya.wx.mini.MiniLocation"), i.__init__ = function() {
            w.window.navigator.geolocation.getCurrentPosition = i.getCurrentPosition, w.window.navigator.geolocation.watchPosition = i.watchPosition, 
            w.window.navigator.geolocation.clearWatch = i.clearWatch;
        }, i.getCurrentPosition = function(i, e, t) {
            var n;
            (n = {}).success = function(e) {
                null != i && i(e);
            }, n.fail = e, w.window.wx.getLocation(n);
        }, i.watchPosition = function(e, n, a) {
            i._curID++;
            var o;
            return o = {}, o.success = e, o.error = n, i._watchDic[i._curID] = o, t.timer.loop(1e3, null, i._myLoop), 
            i._curID;
        }, i.clearWatch = function(e) {
            delete i._watchDic[e], i._hasWatch() || t.timer.clear(null, i._myLoop);
        }, i._hasWatch = function() {
            var e;
            for (e in i._watchDic) if (i._watchDic[e]) return !0;
            return !1;
        }, i._myLoop = function() {
            i.getCurrentPosition(i._mySuccess, i._myError);
        }, i._mySuccess = function(e) {
            var t = {};
            t.coords = e, t.timestamp = r.now();
            var n;
            for (n in i._watchDic) i._watchDic[n].success && i._watchDic[n].success(t);
        }, i._myError = function(e) {
            var t;
            for (t in i._watchDic) i._watchDic[t].error && i._watchDic[t].error(e);
        }, i._watchDic = {}, i._curID = 0;
    }(), function(i) {
        function e() {
            e.__super.call(this);
        }
        a(e, "laya.wx.mini.MiniAccelerator", i);
        var t = e.prototype;
        t.on = function(t, n, a, o) {
            return i.prototype.on.call(this, t, n, a, o), e.startListen(this.onDeviceOrientationChange), 
            this;
        }, t.off = function(t, n, a, o) {
            return void 0 === o && (o = !1), this.hasListener(t) || e.stopListen(), i.prototype.off.call(this, t, n, a, o);
        }, e.__init__ = function() {
            try {
                var i;
                if (!(i = laya.device.motion.Accelerator)) return;
                i.prototype.on = e.prototype.on, i.prototype.off = e.prototype.off;
            } catch (i) {}
        }, e.startListen = function(i) {
            if (e._callBack = i, !e._isListening) {
                e._isListening = !0;
                try {
                    wx.onAccelerometerChange(e.onAccelerometerChange);
                } catch (i) {}
            }
        }, e.stopListen = function() {
            e._isListening = !1;
            try {
                wx.stopAccelerometer({});
            } catch (i) {}
        }, e.onAccelerometerChange = function(i) {
            var t;
            (t = {}).acceleration = i, t.accelerationIncludingGravity = i, t.rotationRate = {}, 
            null != e._callBack && e._callBack(t);
        }, e._isListening = !1, e._callBack = null;
    }(l), function(i) {
        function e() {
            e.__super.call(this);
        }
        return a(e, "laya.wx.mini.MiniLoader", l), e.prototype.load = function(i, t, n, a, o) {
            void 0 === n && (n = !0), void 0 === o && (o = !1);
            var r = this;
            if (r._url = i, 0 === i.indexOf("data:image") ? r._type = t = "image" : r._type = t || (t = r.getTypeFromUrl(i)), 
            r._cache = n, r._data = null, !o && d.loadedMap[g.formatURL(i)]) return r._data = d.loadedMap[g.formatURL(i)], 
            this.event("progress", 1), void this.event("complete", r._data);
            if (null != d.parserMap[t]) return r._customParse = !0, void (d.parserMap[t] instanceof laya.utils.Handler ? d.parserMap[t].runWith(this) : d.parserMap[t].call(null, this));
            var l = w.getUrlEncode(i, t), s = y.getFileExtension(i);
            if (-1 != e._fileTypeArr.indexOf(s)) w.EnvConfig.load.call(this, i, t, n, a, o); else {
                if (w.isZiYu && !_.ziyuFileData[i] && (i = g.formatURL(i)), w.isZiYu && _.ziyuFileData[i]) {
                    var c = _.ziyuFileData[i];
                    return void r.onLoaded(c);
                }
                if (_.getFileInfo(i)) {
                    var f = _.getFileInfo(i);
                    f.encoding = null == f.encoding ? "ascii" : f.encoding, _.readFile(i, f.encoding, new u(e, e.onReadNativeCallBack, [ l, i, t, n, a, o, r ]), i);
                } else {
                    if (_.isLocalNativeFile(i)) {
                        if (w.subNativeFiles && 0 == w.subNativeheads.length) for (var h in w.subNativeFiles) {
                            var v = w.subNativeFiles[h];
                            w.subNativeheads = w.subNativeheads.concat(v);
                            for (var p = 0; p < v.length; p++) w.subMaps[v[p]] = h + "/" + v[p];
                        }
                        if (w.subNativeFiles && -1 != i.indexOf("/")) {
                            var m = i.split("/")[0] + "/";
                            if (m && -1 != w.subNativeheads.indexOf(m)) {
                                var x = w.subMaps[m];
                                i = i.replace(m, x);
                            }
                        }
                        return void _.read(i, l, new u(e, e.onReadNativeCallBack, [ l, i, t, n, a, o, r ]));
                    }
                    var C = i;
                    -1 != (i = g.formatURL(i)).indexOf("http://") || -1 != i.indexOf("https://") ? w.EnvConfig.load.call(r, C, t, n, a, o) : _.readFile(i, l, new u(e, e.onReadNativeCallBack, [ l, i, t, n, a, o, r ]), i);
                }
            }
        }, e.onReadNativeCallBack = function(i, e, t, n, a, o, r, l, s) {
            if (void 0 === n && (n = !0), void 0 === o && (o = !1), void 0 === l && (l = 0), 
            l) 1 == l && (console.log("-----------???????????????????????????????????????----"), w.EnvConfig.load.call(r, e, t, n, a, o)); else {
                var u;
                u = "json" == t || "atlas" == t ? w.getJson(s.data) : "xml" == t ? y.parseXMLFromString(s.data) : s.data, 
                !w.isZiYu && w.isPosMsgYu && "arraybuffer" != t && wx.postMessage({
                    url: e,
                    data: u,
                    isLoad: "filedata"
                }), r.onLoaded(u);
            }
        }, n(e, [ "_fileTypeArr", function() {
            return this._fileTypeArr = [ "png", "jpg", "bmp", "jpeg", "gif" ];
        } ]), e;
    }()), b = function(i) {
        function e() {
            this._sound = null, this.url = null, this.loaded = !1, this.readyUrl = null, e.__super.call(this);
        }
        a(e, "laya.wx.mini.MiniSound", l);
        var t = e.prototype;
        return t.load = function(i) {
            if (_.isLocalNativeFile(i)) {
                if (-1 != i.indexOf("http://") || -1 != i.indexOf("https://")) if ("" != _.loadPath) i = i.split(_.loadPath)[1]; else {
                    var t = "" != g.rootPath ? g.rootPath : g.basePath;
                    "" != t && (i = i.split(t)[1]);
                }
            } else i = g.formatURL(i);
            if (this.url = i, this.readyUrl = i, e._audioCache[this.readyUrl]) this.event("complete"); else if (w.autoCacheFile && _.getFileInfo(i)) this.onDownLoadCallBack(i, 0); else if (w.autoCacheFile) if (_.isLocalNativeFile(i)) {
                var n = i;
                if ("" != (t = "" != g.rootPath ? g.rootPath : g.basePath) && (i = i.split(t)[1]), 
                i || (i = n), w.subNativeFiles && 0 == w.subNativeheads.length) for (var a in w.subNativeFiles) {
                    var o = w.subNativeFiles[a];
                    w.subNativeheads = w.subNativeheads.concat(o);
                    for (var r = 0; r < o.length; r++) w.subMaps[o[r]] = a + "/" + o[r];
                }
                if (w.subNativeFiles && -1 != i.indexOf("/")) {
                    var l = i.split("/")[0] + "/";
                    if (l && -1 != w.subNativeheads.indexOf(l)) {
                        var s = w.subMaps[l];
                        i = i.replace(l, s);
                    }
                }
                this.onDownLoadCallBack(i, 0);
            } else _.downOtherFiles(i, u.create(this, this.onDownLoadCallBack, [ i ]), i); else this.onDownLoadCallBack(i, 0);
        }, t.onDownLoadCallBack = function(i, t) {
            if (t) this.event("error"); else {
                var n;
                if (w.autoCacheFile) {
                    var a = _.getFileInfo(i);
                    if (a && a.md5) {
                        var o = a.md5;
                        n = _.getFileNativePath(o);
                    } else n = i;
                    this._sound = e._createSound(), this._sound.src = this.url = n;
                } else this._sound = e._createSound(), this._sound.src = i;
                this._sound.onCanplay(e.bindToThis(this.onCanPlay, this)), this._sound.onError(e.bindToThis(this.onError, this));
            }
        }, t.onError = function(i) {
            try {
                console.log("-----1---------------minisound-----id:" + e._id), console.log(i);
            } catch (i) {
                console.log("-----2---------------minisound-----id:" + e._id), console.log(i);
            }
            this.event("error"), this._sound.offError(null);
        }, t.onCanPlay = function() {
            this.loaded = !0, this.event("complete"), this._sound.offCanplay(null);
        }, t.play = function(i, t) {
            void 0 === i && (i = 0), void 0 === t && (t = 0);
            var n;
            if (this.url == m._tMusic ? (e._musicAudio || (e._musicAudio = e._createSound()), 
            n = e._musicAudio) : n = e._audioCache[this.readyUrl] ? e._audioCache[this.readyUrl]._sound : e._createSound(), 
            w.autoCacheFile && _.getFileInfo(this.url)) {
                var a = _.getFileInfo(this.url).md5;
                n.src = this.url = _.getFileNativePath(a);
            } else n.src = this.url;
            var o = new I(n, this);
            return o.url = this.url, o.loops = t, o.loop = 0 === t, o.startTime = i, o.play(), 
            m.addChannel(o), o;
        }, t.dispose = function() {
            var i = e._audioCache[this.readyUrl];
            i && (i.src = "", i._sound && (i._sound.destroy(), i._sound = null, i = null), delete e._audioCache[this.readyUrl]);
        }, o(0, t, "duration", function() {
            return this._sound.duration;
        }), e._createSound = function() {
            return e._id++, w.window.wx.createInnerAudioContext();
        }, e.bindToThis = function(i, e) {
            return i.bind(e);
        }, e._musicAudio = null, e._id = 0, e._audioCache = {}, e;
    }(), I = function(i) {
        function e(i, t) {
            this._audio = null, this._onEnd = null, this._miniSound = null, e.__super.call(this), 
            this._audio = i, this._miniSound = t, this._onEnd = e.bindToThis(this.__onEnd, this), 
            i.onEnded(this._onEnd);
        }
        a(e, "laya.wx.mini.MiniSoundChannel", p);
        var n = e.prototype;
        return n.__onEnd = function() {
            if (1 == this.loops) return this.completeHandler && (t.timer.once(10, this, this.__runComplete, [ this.completeHandler ], !1), 
            this.completeHandler = null), this.stop(), void this.event("complete");
            this.loops > 0 && this.loops--, this.startTime = 0, this.play();
        }, n.play = function() {
            this.isStopped = !1, m.addChannel(this), this._audio.play();
        }, n.stop = function() {
            this.isStopped = !0, m.removeChannel(this), this.completeHandler = null, this._audio && (this._audio.pause(), 
            this._audio.offEnded(null), this._audio = null, this._miniSound = null, this._onEnd = null);
        }, n.pause = function() {
            this.isStopped = !0, this._audio.pause();
        }, n.resume = function() {
            this._audio && (this.isStopped = !1, m.addChannel(this), this._audio.play());
        }, o(0, n, "startTime", null, function(i) {
            this._audio && (this._audio.startTime = i);
        }), o(0, n, "autoplay", function() {
            return this._audio.autoplay;
        }, function(i) {
            this._audio.autoplay = i;
        }), o(0, n, "position", function() {
            return this._audio ? this._audio.currentTime : 0;
        }), o(0, n, "duration", function() {
            return this._audio ? this._audio.duration : 0;
        }), o(0, n, "loop", function() {
            return this._audio.loop;
        }, function(i) {
            this._audio.loop = i;
        }), o(0, n, "volume", function() {
            return this._audio ? this._audio.volume : 1;
        }, function(i) {
            this._audio && (this._audio.volume = i);
        }), e.bindToThis = function(i, e) {
            return i.bind(e);
        }, e;
    }();
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", [ "require", "exports" ], function(i, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var t in Laya) {
        var n = Laya[t];
        n && n.__isclass && (e[t] = n);
    }
});