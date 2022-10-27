! function(s, r, _) {
    _.un, _.uns;
    var h = _.static,
        a = _.class,
        n = _.getset,
        o = (_.__newvec, laya.display.Animation),
        l = laya.utils.Browser,
        c = laya.utils.ClassUtils,
        e = laya.filters.ColorFilter,
        u = laya.components.Component,
        d = (laya.Const,
            laya.utils.Ease),
        f = laya.events.Event,
        t = laya.display.Graphics,
        g = laya.utils.Handler,
        p = laya.net.HttpRequest,
        m = laya.display.Input,
        v = laya.net.Loader,
        y = laya.net.LocalStorage,
        C = laya.maths.Matrix,
        b = (laya.display.Node,
            laya.maths.Point),
        S = laya.maths.Rectangle,
        i = (laya.renders.Render, laya.display.Scene),
        w = laya.utils.SceneUtils,
        x = laya.display.Sprite,
        B = (laya.display.Stage,
            laya.display.Text),
        k = laya.resource.Texture,
        I = laya.utils.TimeLine,
        L = laya.utils.Tween,
        M = laya.utils.Utils,
        z = laya.utils.WeakObject;
    _.interface("laya.ui.IBox"), _.interface("laya.ui.IItem"), _.interface("laya.ui.IRender"),
        _.interface("laya.ui.ISelect");
    var T = function() {
            function t() {}
            return a(t, "UIConfig"), t.touchScrollEnable = !0, t.mouseWheelEnable = !0, t.showButtons = !0,
                t.popupBgColor = "#000000", t.popupBgAlpha = .5, t.closeDialogOnSide = !0, t;
        }(),
        D = function() {
            function t() {}
            return a(t, "laya.ui.Styles"), t.labelColor = "#000000", t.buttonStateNum = 3, t.scrollBarMinNum = 15,
                t.scrollBarDelayTime = 500, h(t, ["defaultSizeGrid", function() {
                    return this.defaultSizeGrid = [4, 4, 4, 4, 0];
                }, "labelPadding", function() {
                    return this.labelPadding = [2, 2, 2, 2];
                }, "inputLabelPadding", function() {
                    return this.inputLabelPadding = [1, 1, 1, 3];
                }, "buttonLabelColors", function() {
                    return this.buttonLabelColors = ["#32556b", "#32cc6b", "#ff0000", "#C0C0C0"];
                }, "comboBoxItemColors", function() {
                    return this.comboBoxItemColors = ["#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff"];
                }]), t;
        }(),
        H = function() {
            function n() {}
            return a(n, "laya.ui.UIUtils"), n.fillArray = function(t, i, e) {
                var s = t.concat();
                if (i)
                    for (var n = i.split(","), h = 0, o = Math.min(s.length, n.length); h < o; h++) {
                        var r = n[h];
                        s[h] = "true" == r || "false" != r && r, null != e && (s[h] = e(r));
                    }
                return s;
            }, n.toColor = function(t) {
                return M.toHexColor(t);
            }, n.gray = function(t, i) {
                void 0 === i && (i = !0), i ? n.addFilter(t, n.grayFilter) : n.clearFilter(t, e);
            }, n.addFilter = function(t, i) {
                var e = t.filters || [];
                e.push(i), t.filters = e;
            }, n.clearFilter = function(t, i) {
                var e = t.filters;
                if (null != e && 0 < e.length) {
                    for (var s = e.length - 1; - 1 < s; s--) {
                        var n = e[s];
                        _.__typeof(n, i) && e.splice(s, 1);
                    }
                    t.filters = e;
                }
            }, n._getReplaceStr = function(t) {
                return n.escapeSequence[t];
            }, n.adptString = function(t) {
                return t.replace(/\\(\w)/g, n._getReplaceStr);
            }, n.getBindFun = function(t) {
                var i = n._funMap.get(t);
                if (null == i) {
                    var e = '"' + t + '"',
                        s = "(function(data){if(data==null)return;with(data){try{\nreturn " + (e = e.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                    i = _._runScript(s), n._funMap.set(t, i);
                }
                return i;
            }, h(n, ["grayFilter", function() {
                return this.grayFilter = new e([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0]);
            }, "escapeSequence", function() {
                return this.escapeSequence = {
                    "\\n": "\n",
                    "\\t": "\t"
                };
            }, "_funMap", function() {
                return this._funMap = new z();
            }]), n;
        }(),
        O = function(t) {
            function i() {
                i.__super.call(this), this._top = NaN, this._bottom = NaN, this._left = NaN, this._right = NaN,
                    this._centerX = NaN, this._centerY = NaN;
            }
            a(i, "laya.ui.Widget", u);
            var e = i.prototype;
            return e.onReset = function() {
                this._top = this._bottom = this._left = this._right = this._centerX = this._centerY = NaN;
            }, e._onEnable = function() {
                this.owner.parent ? this._onAdded() : this.owner.once("added", this, this._onAdded);
            }, e._onDisable = function() {
                this.owner.off("added", this, this._onAdded), this.owner.parent && this.owner.parent.off("resize", this, this._onParentResize);
            }, e._onAdded = function() {
                this.owner.parent && this.owner.parent.on("resize", this, this._onParentResize),
                    this.resetLayoutX(), this.resetLayoutY();
            }, e._onParentResize = function() {
                (this.resetLayoutX() || this.resetLayoutY()) && this.owner.event("resize");
            }, e.resetLayoutX = function() {
                var t = this.owner;
                if (!t) return !1;
                var i = t.parent;
                if (i)
                    if (isNaN(this.centerX)) {
                        if (isNaN(this.left)) isNaN(this.right) || (t.x = Math.round(i.width - t.displayWidth - this.right + t.pivotX * t.scaleX));
                        else if (t.x = Math.round(this.left + t.pivotX * t.scaleX), !isNaN(this.right)) {
                            var e = (i._width - this.left - this.right) / (t.scaleX || .01);
                            if (e != t.width) return t.width = e, !0;
                        }
                    } else t.x = Math.round(.5 * (i.width - t.displayWidth) + this.centerX + t.pivotX * t.scaleX);
                return !1;
            }, e.resetLayoutY = function() {
                var t = this.owner;
                if (!t) return !1;
                var i = t.parent;
                if (i)
                    if (isNaN(this.centerY)) {
                        if (isNaN(this.top)) isNaN(this.bottom) || (t.y = Math.round(i.height - t.displayHeight - this.bottom + t.pivotY * t.scaleY));
                        else if (t.y = Math.round(this.top + t.pivotY * t.scaleY), !isNaN(this.bottom)) {
                            var e = (i._height - this.top - this.bottom) / (t.scaleY || .01);
                            if (e != t.height) return t.height = e, !0;
                        }
                    } else t.y = Math.round(.5 * (i.height - t.displayHeight) + this.centerY + t.pivotY * t.scaleY);
                return !1;
            }, e.resetLayout = function() {
                this.owner && (this.resetLayoutX(), this.resetLayoutY());
            }, n(0, e, "centerX", function() {
                return this._centerX;
            }, function(t) {
                this._centerX != t && (this._centerX = t, this.resetLayoutX());
            }), n(0, e, "top", function() {
                return this._top;
            }, function(t) {
                this._top != t && (this._top = t, this.resetLayoutY());
            }), n(0, e, "bottom", function() {
                return this._bottom;
            }, function(t) {
                this._bottom != t && (this._bottom = t, this.resetLayoutY());
            }), n(0, e, "left", function() {
                return this._left;
            }, function(t) {
                this._left != t && (this._left = t, this.resetLayoutX());
            }), n(0, e, "right", function() {
                return this._right;
            }, function(t) {
                this._right != t && (this._right = t, this.resetLayoutX());
            }), n(0, e, "centerY", function() {
                return this._centerY;
            }, function(t) {
                this._centerY != t && (this._centerY = t, this.resetLayoutY());
            }), h(i, ["EMPTY", function() {
                return this.EMPTY = new i();
            }]), i;
        }(),
        P = (function(t) {
            function i() {
                i.__super.call(this);
            }
            a(i, "laya.ui.UIEvent", f), i.SHOW_TIP = "showtip", i.HIDE_TIP = "hidetip";
        }(), function(t) {
            function d() {
                this.autoCacheCmd = !0, this._width = 0, this._height = 0, this._source = null,
                    this._sizeGrid = null, this._isChanged = !1, this._offset = null, d.__super.call(this);
            }
            a(d, "laya.ui.AutoBitmap", t);
            var i = d.prototype;
            return i.destroy = function() {
                t.prototype.destroy.call(this), this._source = null, this._sizeGrid = null, this._offset = null;
            }, i._setChanged = function() {
                this._isChanged || (this._isChanged = !0, _.timer.callLater(this, this.changeSource));
            }, i.changeSource = function() {
                this._isChanged = !1;
                var t = this._source;
                if (t && t.bitmap) {
                    var i = this.width,
                        e = this.height,
                        s = this._sizeGrid,
                        n = t.sourceWidth,
                        h = t.sourceHeight;
                    if (!s || n === i && h === e) this.clear(), this.drawTexture(t, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, i, e);
                    else {
                        this.clear();
                        var o = s[0],
                            r = s[1],
                            a = s[2],
                            l = s[3],
                            c = s[4],
                            u = !1;
                        if (i == n && (l = r = 0), e == h && (o = a = 0), i < l + r) {
                            var _ = i;
                            u = !0, i = l + r, this.save(), this.clipRect(0, 0, _, e);
                        }
                        l && o && this.drawImage(d.getTexture(t, 0, 0, l, o), 0, 0, l, o), r && o && this.drawImage(d.getTexture(t, n - r, 0, r, o), i - r, 0, r, o),
                            l && a && this.drawImage(d.getTexture(t, 0, h - a, l, a), 0, e - a, l, a), r && a && this.drawImage(d.getTexture(t, n - r, h - a, r, a), i - r, e - a, r, a),
                            o && this.drawBitmap(c, d.getTexture(t, l, 0, n - l - r, o), l, 0, i - l - r, o),
                            a && this.drawBitmap(c, d.getTexture(t, l, h - a, n - l - r, a), l, e - a, i - l - r, a),
                            l && this.drawBitmap(c, d.getTexture(t, 0, o, l, h - o - a), 0, o, l, e - o - a),
                            r && this.drawBitmap(c, d.getTexture(t, n - r, o, r, h - o - a), i - r, o, r, e - o - a),
                            this.drawBitmap(c, d.getTexture(t, l, o, n - l - r, h - o - a), l, o, i - l - r, e - o - a),
                            u && this.restore();
                    }
                    this._repaint();
                }
            }, i.drawBitmap = function(t, i, e, s, n, h) {
                void 0 === n && (n = 0), void 0 === h && (h = 0), n < .1 || h < .1 || (!t || i.width == n && i.height == h ? this.drawImage(i, e, s, n, h) : this.fillTexture(i, e, s, n, h));
            }, n(0, i, "sizeGrid", function() {
                return this._sizeGrid;
            }, function(t) {
                this._sizeGrid = t, this._setChanged();
            }), n(0, i, "width", function() {
                return this._width ? this._width : this._source ? this._source.sourceWidth : 0;
            }, function(t) {
                this._width != t && (this._width = t, this._setChanged());
            }), n(0, i, "height", function() {
                return this._height ? this._height : this._source ? this._source.sourceHeight : 0;
            }, function(t) {
                this._height != t && (this._height = t, this._setChanged());
            }), n(0, i, "source", function() {
                return this._source;
            }, function(t) {
                t ? (this._source = t, this._setChanged()) : (this._source = null, this.clear());
            }), d.getTexture = function(t, i, e, s, n) {
                var h;
                return s <= 0 && (s = 1), n <= 0 && (n = 1), t.$_GID || (t.$_GID = M.getGID()),
                    h && h._getSource() || (h = k.createFromTexture(t, i, e, s, n)), h;
            }, d;
        }(t)),
        Y = function(i) {
            function t() {
                this._dataSource = null, this._toolTip = null, this._tag = null, this._disabled = !1,
                    this._gray = !1, t.__super.call(this), this._anchorX = NaN, this._anchorY = NaN,
                    this._widget = O.EMPTY, this.preinitialize(), this.createChildren(), this.initialize();
            }
            a(t, "laya.ui.UIComponent", i);
            var e = t.prototype;
            return e.destroy = function(t) {
                    void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._dataSource = null,
                        this._tag = null, this._toolTip = null;
                }, e.preinitialize = function() {}, e.createChildren = function() {}, e.initialize = function() {},
                e.measureWidth = function() {
                    var t = 0;
                    this.commitMeasure();
                    for (var i = this.numChildren - 1; - 1 < i; i--) {
                        var e = this.getChildAt(i);
                        e._visible && (t = Math.max(e._x + e.width * e.scaleX, t));
                    }
                    return t;
                }, e.commitMeasure = function() {}, e.measureHeight = function() {
                    var t = 0;
                    this.commitMeasure();
                    for (var i = this.numChildren - 1; - 1 < i; i--) {
                        var e = this.getChildAt(i);
                        e._visible && (t = Math.max(e._y + e.height * e.scaleY, t));
                    }
                    return t;
                }, e._sizeChanged = function() {
                    isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height),
                        this.event("resize"), this._widget !== O.EMPTY && this._widget.resetLayout();
                }, e.onMouseOver = function(t) {
                    _.stage.event("showtip", this._toolTip);
                }, e.onMouseOut = function(t) {
                    _.stage.event("hidetip", this._toolTip);
                }, e._getWidget = function() {
                    return this._widget === O.EMPTY && (this._widget = this.addComponent(O)), this._widget;
                }, e.onCompResize = function() {
                    this._sizeChanged();
                }, e._childChanged = function(t) {
                    this.callLater(this._sizeChanged), i.prototype._childChanged.call(this, t);
                }, n(0, e, "centerY", function() {
                    return this._widget.centerY;
                }, function(t) {
                    t != this._widget.centerY && (this._getWidget().centerY = t);
                }), n(0, e, "width", function() {
                    return this._width ? this._width : this.measureWidth();
                }, function(t) {
                    _.superGet(x, this, "width") != t && (_.superSet(x, this, "width", t), this.callLater(this._sizeChanged));
                }), n(0, e, "bottom", function() {
                    return this._widget.bottom;
                }, function(t) {
                    t != this._widget.bottom && (this._getWidget().bottom = t);
                }), n(0, e, "height", function() {
                    return this._height ? this._height : this.measureHeight();
                }, function(t) {
                    _.superGet(x, this, "height") != t && (_.superSet(x, this, "height", t), this.callLater(this._sizeChanged));
                }), n(0, e, "left", function() {
                    return this._widget.left;
                }, function(t) {
                    t != this._widget.left && (this._getWidget().left = t);
                }), n(0, e, "dataSource", function() {
                    return this._dataSource;
                }, function(t) {
                    for (var i in this._dataSource = t, this._dataSource) this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = this._dataSource[i]);
                }), n(0, e, "centerX", function() {
                    return this._widget.centerX;
                }, function(t) {
                    t != this._widget.centerX && (this._getWidget().centerX = t);
                }), n(0, e, "top", function() {
                    return this._widget.top;
                }, function(t) {
                    t != this._widget.top && (this._getWidget().top = t);
                }), n(0, e, "right", function() {
                    return this._widget.right;
                }, function(t) {
                    t != this._widget.right && (this._getWidget().right = t);
                }), n(0, e, "tag", function() {
                    return this._tag;
                }, function(t) {
                    this._tag = t;
                }), n(0, e, "toolTip", function() {
                    return this._toolTip;
                }, function(t) {
                    this._toolTip != t && (null != (this._toolTip = t) ? (this.on("mouseover", this, this.onMouseOver),
                        this.on("mouseout", this, this.onMouseOut)) : (this.off("mouseover", this, this.onMouseOver),
                        this.off("mouseout", this, this.onMouseOut)));
                }), n(0, e, "gray", function() {
                    return this._gray;
                }, function(t) {
                    t !== this._gray && (this._gray = t, H.gray(this, t));
                }), n(0, e, "disabled", function() {
                    return this._disabled;
                }, function(t) {
                    t !== this._disabled && (this.gray = this._disabled = t, this.mouseEnabled = !t);
                }), n(0, e, "scaleX", i.prototype._$get_scaleX, function(t) {
                    _.superGet(x, this, "scaleX") != t && (_.superSet(x, this, "scaleX", t), this.event("resize"));
                }), n(0, e, "scaleY", i.prototype._$get_scaleY, function(t) {
                    _.superGet(x, this, "scaleY") != t && (_.superSet(x, this, "scaleY", t), this.event("resize"));
                }), n(0, e, "anchorX", function() {
                    return this._anchorX;
                }, function(t) {
                    this._anchorX != t && (this._anchorX = t, this.callLater(this._sizeChanged));
                }), n(0, e, "anchorY", function() {
                    return this._anchorY;
                }, function(t) {
                    this._anchorY != t && (this._anchorY = t, this.callLater(this._sizeChanged));
                }), t;
        }(x),
        A = function(t) {
            function i() {
                this.lockLayer = null, this.popupEffect = function(t) {
                        t.scale(1, 1), t._effectTween = L.from(t, {
                            x: _.stage.width / 2,
                            y: _.stage.height / 2,
                            scaleX: 0,
                            scaleY: 0
                        }, 300, d.backOut, g.create(this, this.doOpen, [t]), 0, !1, !1);
                    }, this.closeEffect = function(t) {
                        t._effectTween = L.to(t, {
                            x: _.stage.width / 2,
                            y: _.stage.height / 2,
                            scaleX: 0,
                            scaleY: 0
                        }, 300, d.strongOut, g.create(this, this.doClose, [t]), 0, !1, !1);
                    }, i.__super.call(this), this.maskLayer = new x(), this.popupEffectHandler = new g(this, this.popupEffect),
                    this.closeEffectHandler = new g(this, this.closeEffect), this.mouseEnabled = this.maskLayer.mouseEnabled = !0,
                    this.zOrder = 1e3, _.stage.addChild(this), _.stage.on("resize", this, this._onResize),
                    T.closeDialogOnSide && this.maskLayer.on("click", this, this._closeOnSide), this._onResize(null);
            }
            a(i, "laya.ui.DialogManager", x);
            var e = i.prototype;
            return e._closeOnSide = function() {
                var t = this.getChildAt(this.numChildren - 1);
                t instanceof laya.ui.Dialog && t.close();
            }, e.setLockView = function(t) {
                this.lockLayer || (this.lockLayer = new X(), this.lockLayer.mouseEnabled = !0, this.lockLayer.size(_.stage.width, _.stage.height)),
                    this.lockLayer.removeChildren(), t && (t.centerX = t.centerY = 0, this.lockLayer.addChild(t));
            }, e._onResize = function(t) {
                var i = this.maskLayer.width = _.stage.width,
                    e = this.maskLayer.height = _.stage.height;
                this.lockLayer && this.lockLayer.size(i, e), this.maskLayer.graphics.clear(!0),
                    this.maskLayer.graphics.drawRect(0, 0, i, e, T.popupBgColor), this.maskLayer.alpha = T.popupBgAlpha;
                for (var s = this.numChildren - 1; - 1 < s; s--) {
                    var n = this.getChildAt(s);
                    n.isPopupCenter && this._centerDialog(n);
                }
            }, e._centerDialog = function(t) {
                t.x = Math.round((_.stage.width - t.width >> 1) + t.pivotX), t.y = Math.round((_.stage.height - t.height >> 1) + t.pivotY);
            }, e.open = function(t, i, e) {
                void 0 === i && (i = !1), void 0 === e && (e = !1), i && this._closeAll(), this._clearDialogEffect(t),
                    t.isPopupCenter && this._centerDialog(t), this.addChild(t), (t.isModal || this._getBit(32)) && _.timer.callLater(this, this._checkMask),
                    e && null != t.popupEffect ? t.popupEffect.runWith(t) : this.doOpen(t), this.event("open");
            }, e._clearDialogEffect = function(t) {
                t._effectTween && (L.clear(t._effectTween), t._effectTween = null);
            }, e.doOpen = function(t) {
                t.onOpened(t._param);
            }, e.lock = function(t) {
                this.lockLayer && (t ? this.addChild(this.lockLayer) : this.lockLayer.removeSelf());
            }, e.close = function(t) {
                this._clearDialogEffect(t), t.isShowEffect && null != t.closeEffect ? t.closeEffect.runWith([t]) : this.doClose(t),
                    this.event("close");
            }, e.doClose = function(t) {
                t.removeSelf(), t.isModal && this._checkMask(), t.closeHandler && t.closeHandler.runWith(t.closeType),
                    t.onClosed(t.closeType), t.autoDestroyAtClosed && t.destroy();
            }, e.closeAll = function() {
                this._closeAll(), this.event("close");
            }, e._closeAll = function() {
                for (var t = this.numChildren - 1; - 1 < t; t--) {
                    var i = this.getChildAt(t);
                    i && null != i.close && this.doClose(i);
                }
            }, e.getDialogsByGroup = function(t) {
                for (var i = [], e = this.numChildren - 1; - 1 < e; e--) {
                    var s = this.getChildAt(e);
                    s && s.group === t && i.push(s);
                }
                return i;
            }, e.closeByGroup = function(t) {
                for (var i = [], e = this.numChildren - 1; - 1 < e; e--) {
                    var s = this.getChildAt(e);
                    s && s.group === t && (s.close(), i.push(s));
                }
                return i;
            }, e._checkMask = function() {
                this.maskLayer.removeSelf();
                for (var t = this.numChildren - 1; - 1 < t; t--) {
                    var i = this.getChildAt(t);
                    if (i && i.isModal) return void this.addChildAt(this.maskLayer, t);
                }
            }, i;
        }(),
        N = function(i) {
            function e() {
                this._watchMap = {}, this._widget = null, this._dataSource = null, this._anchorX = NaN,
                    this._anchorY = NaN, this._widget = O.EMPTY, e.__super.call(this);
            }
            a(e, "laya.ui.View", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), this._watchMap = null, i.prototype.destroy.call(this, t);
            }, t.changeData = function(t) {
                var i = this._watchMap[t];
                if (i)
                    for (var e = 0, s = i.length; e < s; e++) {
                        i[e].exe(this);
                    }
            }, t._sizeChanged = function() {
                isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height),
                    this.event("resize");
            }, t._getWidget = function() {
                return this._widget === O.EMPTY && (this._widget = this.addComponent(O)), this._widget;
            }, t.loadUI = function(t) {
                var i = e.uiMap[t];
                e.uiMap && this.createView(i);
            }, n(0, t, "anchorX", function() {
                return this._anchorX;
            }, function(t) {
                this._anchorX != t && (this._anchorX = t, this.callLater(this._sizeChanged));
            }), n(0, t, "centerX", function() {
                return this._widget.centerX;
            }, function(t) {
                t != this._widget.centerX && (this._getWidget().centerX = t);
            }), n(0, t, "top", function() {
                return this._widget.top;
            }, function(t) {
                t != this._widget.top && (this._getWidget().top = t);
            }), n(0, t, "bottom", function() {
                return this._widget.bottom;
            }, function(t) {
                t != this._widget.bottom && (this._getWidget().bottom = t);
            }), n(0, t, "dataSource", function() {
                return this._dataSource;
            }, function(t) {
                for (var i in this._dataSource = t) {
                    var e = this.getChildByName(i);
                    e instanceof laya.ui.UIComponent ? e.dataSource = t[i] : this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = t[i]);
                }
            }), n(0, t, "left", function() {
                return this._widget.left;
            }, function(t) {
                t != this._widget.left && (this._getWidget().left = t);
            }), n(0, t, "right", function() {
                return this._widget.right;
            }, function(t) {
                t != this._widget.right && (this._getWidget().right = t);
            }), n(0, t, "anchorY", function() {
                return this._anchorY;
            }, function(t) {
                this._anchorY != t && (this._anchorY = t, this.callLater(this._sizeChanged));
            }), n(0, t, "centerY", function() {
                return this._widget.centerY;
            }, function(t) {
                t != this._widget.centerY && (this._getWidget().centerY = t);
            }), e.regComponent = function(t, i) {
                c.regClass(t, i);
            }, e.regViewRuntime = function(t, i) {
                c.regClass(t, i);
            }, e.regUI = function(t, i) {
                _.loader.cacheRes(t, i);
            }, e.uiMap = {}, e.__init$ = function() {
                c.regShortClassName([Q, E, gt, U, X, ht, E, tt, V, W, Y, ct, ut, G, R, st, et, $, ot, dt, F, j, pt, nt, e, q, at, lt, it, _t, ft, x, o, B, rt]);
            }, e;
        }(i),
        X = (function(t) {
            function i() {
                this._$4__texture = null, i.__super.call(this), this._width = this._height = 200;
                var t = new k();
                if (!_.Texture2D) throw new Error("WXOpenDataViewer:webgl not found!");
                t.bitmap = new _.Texture2D(), this.texture = t;
            }
            a(i, "laya.ui.WXOpenDataViewer", t);
            var e = i.prototype;
            e.onEnable = function() {
                this.postMsg({
                    type: "display",
                    rate: _.stage.frameRate
                }), s.wx && s.sharedCanvas && _.timer.frameLoop(1, this, this._onLoop);
            }, e.onDisable = function() {
                this.postMsg({
                    type: "undisplay"
                }), _.timer.clear(this, this._onLoop);
            }, e._onLoop = function() {
                this.texture.bitmap.loadImageSource(s.sharedCanvas);
            }, e._postMsg = function() {
                var t = new C();
                t.translate(this.x, this.y);
                var i = _.stage;
                t.scale(i._canvasTransform.getScaleX() * this.globalScaleX * i.transform.getScaleX(), i._canvasTransform.getScaleY() * this.globalScaleY * i.transform.getScaleY()),
                    this.postMsg({
                        type: "changeMatrix",
                        a: t.a,
                        b: t.b,
                        c: t.c,
                        d: t.d,
                        tx: t.tx,
                        ty: t.ty,
                        w: this.width,
                        h: this.height
                    });
            }, e.postMsg = function(t) {
                s.wx && s.wx.getOpenDataContext && s.wx.getOpenDataContext().postMessage(t);
            }, n(0, e, "x", t.prototype._$get_x, function(t) {
                _.superSet(Y, this, "x", t), this.callLater(this._postMsg);
            }), n(0, e, "width", t.prototype._$get_width, function(t) {
                _.superSet(Y, this, "width", t), s.sharedCanvas && (s.sharedCanvas.width = t), this.callLater(this._postMsg);
            }), n(0, e, "height", t.prototype._$get_height, function(t) {
                _.superSet(Y, this, "height", t), s.sharedCanvas && (s.sharedCanvas.height = t),
                    this.callLater(this._postMsg);
            }), n(0, e, "y", t.prototype._$get_y, function(t) {
                _.superSet(Y, this, "y", t), this.callLater(this._postMsg);
            });
        }(Y), function(t) {
            function i() {
                this._bgColor = null, i.__super.call(this);
            }
            a(i, "laya.ui.Box", t);
            var e = i.prototype;
            return _.imps(e, {
                "laya.ui.IBox": !0
            }), e._onResize = function(t) {
                this.graphics.clear(), this.graphics.drawRect(0, 0, this.width, this.height, this._bgColor);
            }, n(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
                for (var i in this._dataSource = t) {
                    var e = this.getChildByName(i);
                    e ? e.dataSource = t[i] : this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = t[i]);
                }
            }), n(0, e, "bgColor", function() {
                return this._bgColor;
            }, function(t) {
                (this._bgColor = t) ? (this._onResize(null), this.on("resize", this, this._onResize)) : (this.graphics.clear(),
                    this.off("resize", this, this._onResize));
            }), i;
        }(Y)),
        E = function(i) {
            function e(t, i) {
                this.toggle = !1, this._bitmap = null, this._text = null, this._strokeColors = null,
                    this._state = 0, this._selected = !1, this._skin = null, this._autoSize = !0, this._sources = null,
                    this._clickHandler = null, this._stateChanged = !1, e.__super.call(this), this._labelColors = D.buttonLabelColors,
                    this._stateNum = D.buttonStateNum, void 0 === i && (i = ""), this.skin = t, this.label = i;
            }
            a(e, "laya.ui.Button", i);
            var t = e.prototype;
            return _.imps(t, {
                "laya.ui.ISelect": !0
            }), t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._bitmap && this._bitmap.destroy(),
                    this._text && this._text.destroy(t), this._bitmap = null, this._text = null, this._clickHandler = null,
                    this._labelColors = this._sources = this._strokeColors = null;
            }, t.createChildren = function() {
                this.graphics = this._bitmap = new P();
            }, t.createText = function() {
                this._text || (this._text = new B(), this._text.overflow = "hidden", this._text.align = "center",
                    this._text.valign = "middle", this._text.width = this._width, this._text.height = this._height);
            }, t.initialize = function() {
                1 !== this._mouseState && (this.mouseEnabled = !0, this._setBit(64, !0)), this._createListener("mouseover", this, this.onMouse, null, !1, !1),
                    this._createListener("mouseout", this, this.onMouse, null, !1, !1), this._createListener("mousedown", this, this.onMouse, null, !1, !1),
                    this._createListener("mouseup", this, this.onMouse, null, !1, !1), this._createListener("click", this, this.onMouse, null, !1, !1);
            }, t.onMouse = function(t) {
                if (!1 !== this.toggle || !this._selected) return "click" === t.type ? (this.toggle && (this.selected = !this._selected),
                    void(this._clickHandler && this._clickHandler.run())) : void(!this._selected && (this.state = e.stateMap[t.type]));
            }, t._skinLoaded = function() {
                this.callLater(this.changeClips), this._setStateChanged(), this._sizeChanged(),
                    this.event("loaded");
            }, t.changeClips = function() {
                var t = v.getRes(this._skin);
                if (t) {
                    var i = t.sourceWidth,
                        e = t.sourceHeight / this._stateNum;
                    t.$_GID || (t.$_GID = M.getGID());
                    var s = t.$_GID + "-" + this._stateNum,
                        n = z.I.get(s);
                    if (M.isOkTextureList(n) || (n = null), n) this._sources = n;
                    else {
                        if (this._sources = [], 1 === this._stateNum) this._sources.push(t);
                        else
                            for (var h = 0; h < this._stateNum; h++) this._sources.push(k.createFromTexture(t, 0, e * h, i, e));
                        z.I.set(s, this._sources);
                    }
                    this._autoSize ? (this._bitmap.width = this._width || i, this._bitmap.height = this._height || e,
                        this._text && (this._text.width = this._bitmap.width, this._text.height = this._bitmap.height)) : this._text && (this._text.x = i);
                } else console.log("lose skin", this._skin);
            }, t.measureWidth = function() {
                return this.runCallLater(this.changeClips), this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState),
                    this._bitmap.width + (this._text ? this._text.width : 0));
            }, t.measureHeight = function() {
                return this.runCallLater(this.changeClips), this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height;
            }, t.changeState = function() {
                this._stateChanged = !1, this.runCallLater(this.changeClips);
                var t = this._state < this._stateNum ? this._state : this._stateNum - 1;
                this._sources && (this._bitmap.source = this._sources[t]), this.label && (this._text.color = this._labelColors[t],
                    this._strokeColors && (this._text.strokeColor = this._strokeColors[t]));
            }, t._setStateChanged = function() {
                this._stateChanged || (this._stateChanged = !0, this.callLater(this.changeState));
            }, n(0, t, "skin", function() {
                return this._skin;
            }, function(t) {
                this._skin != t && ((this._skin = t) ? v.getRes(t) ? this._skinLoaded() : _.loader.load(this._skin, g.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), n(0, t, "labelPadding", function() {
                return this.createText(), this._text.padding.join(",");
            }, function(t) {
                this.createText(), this._text.padding = H.fillArray(D.labelPadding, t, Number);
            }), n(0, t, "state", function() {
                return this._state;
            }, function(t) {
                this._state != t && (this._state = t, this._setStateChanged());
            }), n(0, t, "text", function() {
                return this.createText(), this._text;
            }), n(0, t, "stateNum", function() {
                return this._stateNum;
            }, function(t) {
                "string" == typeof t && (t = parseInt(t)), this._stateNum != t && (this._stateNum = t < 1 ? 1 : 3 < t ? 3 : t,
                    this.callLater(this.changeClips));
            }), n(0, t, "label", function() {
                return this._text ? this._text.text : null;
            }, function(t) {
                (this._text || t) && (this.createText(), this._text.text != t && (t && !this._text.parent && this.addChild(this._text),
                    this._text.text = (t + "").replace(/\\n/g, "\n"), this._setStateChanged()));
            }), n(0, t, "labelSize", function() {
                return this.createText(), this._text.fontSize;
            }, function(t) {
                this.createText(), this._text.fontSize = t;
            }), n(0, t, "selected", function() {
                return this._selected;
            }, function(t) {
                this._selected != t && (this._selected = t, this.state = this._selected ? 2 : 0,
                    this.event("change"));
            }), n(0, t, "strokeColors", function() {
                return this._strokeColors ? this._strokeColors.join(",") : "";
            }, function(t) {
                this._strokeColors = H.fillArray(D.buttonLabelColors, t, String), this._setStateChanged();
            }), n(0, t, "labelColors", function() {
                return this._labelColors.join(",");
            }, function(t) {
                this._labelColors = H.fillArray(D.buttonLabelColors, t, String), this._setStateChanged();
            }), n(0, t, "labelStroke", function() {
                return this.createText(), this._text.stroke;
            }, function(t) {
                this.createText(), this._text.stroke = t;
            }), n(0, t, "labelStrokeColor", function() {
                return this.createText(), this._text.strokeColor;
            }, function(t) {
                this.createText(), this._text.strokeColor = t;
            }), n(0, t, "labelBold", function() {
                return this.createText(), this._text.bold;
            }, function(t) {
                this.createText(), this._text.bold = t;
            }), n(0, t, "labelFont", function() {
                return this.createText(), this._text.font;
            }, function(t) {
                this.createText(), this._text.font = t;
            }), n(0, t, "labelAlign", function() {
                return this.createText(), this._text.align;
            }, function(t) {
                this.createText(), this._text.align = t;
            }), n(0, t, "clickHandler", function() {
                return this._clickHandler;
            }, function(t) {
                this._clickHandler = t;
            }), n(0, t, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
            }, function(t) {
                this._bitmap.sizeGrid = H.fillArray(D.defaultSizeGrid, t, Number);
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(Y, this, "width", t), this._autoSize && (this._bitmap.width = t, this._text && (this._text.width = t));
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(Y, this, "height", t), this._autoSize && (this._bitmap.height = t, this._text && (this._text.height = t));
            }), n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) || "string" == typeof t ? this.label = t + "" : _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "iconOffset", function() {
                return this._bitmap._offset ? this._bitmap._offset.join(",") : null;
            }, function(t) {
                this._bitmap._offset = t ? H.fillArray([1, 1], t, Number) : [];
            }), h(e, ["stateMap", function() {
                return this.stateMap = {
                    mouseup: 0,
                    mouseover: 1,
                    mousedown: 2,
                    mouseout: 0
                };
            }]), e;
        }(Y),
        G = function(i) {
            function e(t) {
                this._bitmap = null, this._skin = null, this._group = null, e.__super.call(this),
                    this.skin = t;
            }
            a(e, "laya.ui.Image", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(),
                    this._bitmap = null;
            }, t.dispose = function() {
                this.destroy(!0), _.loader.clearRes(this._skin);
            }, t.createChildren = function() {
                this.graphics = this._bitmap = new P(), this._bitmap.autoCacheCmd = !1;
            }, t.setSource = function(t, i) {
                t === this._skin && i && (this.source = i, this.onCompResize());
            }, t.measureWidth = function() {
                return this._bitmap.width;
            }, t.measureHeight = function() {
                return this._bitmap.height;
            }, n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "string" == typeof(this._dataSource = t) ? this.skin = t: _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "source", function() {
                return this._bitmap.source;
            }, function(t) {
                this._bitmap && (this._bitmap.source = t, this.event("loaded"), this.repaint());
            }), n(0, t, "skin", function() {
                return this._skin;
            }, function(t) {
                if (this._skin != t)
                    if (this._skin = t) {
                        var i = v.getRes(t);
                        i ? (this.source = i, this.onCompResize()) : _.loader.load(this._skin, g.create(this, this.setSource, [this._skin]), null, "image", 1, !0, this._group);
                    } else this.source = null;
            }), n(0, t, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
            }, function(t) {
                this._bitmap.sizeGrid = H.fillArray(D.defaultSizeGrid, t, Number);
            }), n(0, t, "group", function() {
                return this._group;
            }, function(t) {
                t && this._skin && v.setGroup(this._skin, t), this._group = t;
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(Y, this, "width", t), this._bitmap.width = 0 == t ? 1e-7 : t;
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(Y, this, "height", t), this._bitmap.height = 0 == t ? 1e-7 : t;
            }), e;
        }(Y),
        R = function(i) {
            function e(t) {
                this._tf = null, e.__super.call(this), void 0 === t && (t = ""), this.text = t;
            }
            a(e, "laya.ui.Label", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._tf = null;
            }, t.createChildren = function() {
                this.addChild(this._tf = new B());
            }, t.changeText = function(t) {
                this._tf.changeText(t);
            }, t.measureWidth = function() {
                return this._tf.width;
            }, t.measureHeight = function() {
                return this._tf.height;
            }, n(0, t, "padding", function() {
                return this._tf.padding.join(",");
            }, function(t) {
                this._tf.padding = H.fillArray(D.labelPadding, t, Number);
            }), n(0, t, "bold", function() {
                return this._tf.bold;
            }, function(t) {
                this._tf.bold = t;
            }), n(0, t, "align", function() {
                return this._tf.align;
            }, function(t) {
                this._tf.align = t;
            }), n(0, t, "text", function() {
                return this._tf.text;
            }, function(t) {
                this._tf.text != t && (t && (t = H.adptString(t + "")), this._tf.text = t, this.event("change"),
                    this._width && this._height || this.onCompResize());
            }), n(0, t, "italic", function() {
                return this._tf.italic;
            }, function(t) {
                this._tf.italic = t;
            }), n(0, t, "wordWrap", function() {
                return this._tf.wordWrap;
            }, function(t) {
                this._tf.wordWrap = t;
            }), n(0, t, "font", function() {
                return this._tf.font;
            }, function(t) {
                this._tf.font = t;
            }), n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) || "string" == typeof t ? this.text = t + "" : _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "color", function() {
                return this._tf.color;
            }, function(t) {
                this._tf.color = t;
            }), n(0, t, "valign", function() {
                return this._tf.valign;
            }, function(t) {
                this._tf.valign = t;
            }), n(0, t, "leading", function() {
                return this._tf.leading;
            }, function(t) {
                this._tf.leading = t;
            }), n(0, t, "fontSize", function() {
                return this._tf.fontSize;
            }, function(t) {
                this._tf.fontSize = t;
            }), n(0, t, "bgColor", function() {
                return this._tf.bgColor;
            }, function(t) {
                this._tf.bgColor = t;
            }), n(0, t, "borderColor", function() {
                return this._tf.borderColor;
            }, function(t) {
                this._tf.borderColor = t;
            }), n(0, t, "stroke", function() {
                return this._tf.stroke;
            }, function(t) {
                this._tf.stroke = t;
            }), n(0, t, "strokeColor", function() {
                return this._tf.strokeColor;
            }, function(t) {
                this._tf.strokeColor = t;
            }), n(0, t, "textField", function() {
                return this._tf;
            }), n(0, t, "width", function() {
                return this._width || this._tf.text ? _.superGet(Y, this, "width") : 0;
            }, function(t) {
                _.superSet(Y, this, "width", t), this._tf.width = t;
            }), n(0, t, "height", function() {
                return this._height || this._tf.text ? _.superGet(Y, this, "height") : 0;
            }, function(t) {
                _.superSet(Y, this, "height", t), this._tf.height = t;
            }), n(0, t, "overflow", function() {
                return this._tf.overflow;
            }, function(t) {
                this._tf.overflow = t;
            }), n(0, t, "underline", function() {
                return this._tf.underline;
            }, function(t) {
                this._tf.underline = t;
            }), n(0, t, "underlineColor", function() {
                return this._tf.underlineColor;
            }, function(t) {
                this._tf.underlineColor = t;
            }), e;
        }(Y),
        W = function(i) {
            function e(t, i) {
                this._visibleNum = 6, this._button = null, this._list = null, this._isOpen = !1,
                    this._itemSize = 12, this._labels = [], this._selectedIndex = -1, this._selectHandler = null,
                    this._itemHeight = NaN, this._listHeight = NaN, this._listChanged = !1, this._itemChanged = !1,
                    this._scrollBarSkin = null, this._isCustomList = !1, this.itemRender = null, e.__super.call(this),
                    this._itemColors = D.comboBoxItemColors, this.skin = t, this.labels = i;
            }
            a(e, "laya.ui.ComboBox", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._button && this._button.destroy(t),
                    this._list && this._list.destroy(t), this._button = null, this._list = null, this._itemColors = null,
                    this._labels = null, this._selectHandler = null;
            }, t.createChildren = function() {
                this.addChild(this._button = new E()), this._button.text.align = "left", this._button.labelPadding = "0,0,0,5",
                    this._button.on("mousedown", this, this.onButtonMouseDown);
            }, t._createList = function() {
                this._list = new st(), this._scrollBarSkin && (this._list.vScrollBarSkin = this._scrollBarSkin),
                    this._setListEvent(this._list);
            }, t._setListEvent = function(t) {
                this._list.selectEnable = !0, this._list.on("mousedown", this, this.onListDown),
                    this._list.mouseHandler = g.create(this, this.onlistItemMouse, null, !1), this._list.scrollBar && this._list.scrollBar.on("mousedown", this, this.onScrollBarDown);
            }, t.onListDown = function(t) {
                t.stopPropagation();
            }, t.onScrollBarDown = function(t) {
                t.stopPropagation();
            }, t.onButtonMouseDown = function(t) {
                this.callLater(this.switchTo, [!this._isOpen]);
            }, t.measureWidth = function() {
                return this._button.width;
            }, t.measureHeight = function() {
                return this._button.height;
            }, t.changeList = function() {
                this._listChanged = !1;
                var t = this.width - 2,
                    i = this._itemColors[2];
                this._itemHeight = this._itemSize + 6, this._list.itemRender = this.itemRender || {
                    type: "Box",
                    child: [{
                        type: "Label",
                        props: {
                            name: "label",
                            x: 1,
                            padding: "3,3,3,3",
                            width: t,
                            height: this._itemHeight,
                            fontSize: this._itemSize,
                            color: i
                        }
                    }]
                }, this._list.repeatY = this._visibleNum, this._list.refresh();
            }, t.onlistItemMouse = function(t, i) {
                var e = t.type;
                if ("mouseover" === e || "mouseout" === e) {
                    if (this._isCustomList) return;
                    var s = this._list.getCell(i);
                    if (!s) return;
                    var n = s.getChildByName("label");
                    n && (n.color = "mouseover" === e ? (n.bgColor = this._itemColors[0], this._itemColors[1]) : (n.bgColor = null,
                        this._itemColors[2]));
                } else "click" === e && (this.selectedIndex = i, this.isOpen = !1);
            }, t.switchTo = function(t) {
                this.isOpen = t;
            }, t.changeOpen = function() {
                this.isOpen = !this._isOpen;
            }, t.changeItem = function() {
                if (this._itemChanged = !1, this._listHeight = 0 < this._labels.length ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight, !this._isCustomList) {
                    var t = this._list.graphics;
                    t.clear(!0), t.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3]);
                }
                for (var i = this._list.array || [], e = i.length = 0, s = this._labels.length; e < s; e++) i.push({
                    label: this._labels[e]
                });
                this._list.height = this._listHeight, this._list.array = i;
            }, t.changeSelected = function() {
                this._button.label = this.selectedLabel;
            }, t._onStageMouseWheel = function(t) {
                this._list && !this._list.contains(t.target) && this.removeList(null);
            }, t.removeList = function(t) {
                _.stage.off("mousedown", this, this.removeList), _.stage.off("mousewheel", this, this._onStageMouseWheel),
                    this.isOpen = !1;
            }, n(0, t, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(t) {
                this._selectedIndex != t && (this._selectedIndex = t, 0 < this._labels.length ? this.changeSelected() : this.callLater(this.changeSelected),
                    this.event("change", [f.EMPTY.setTo("change", this, this)]), this._selectHandler && this._selectHandler.runWith(this._selectedIndex));
            }), n(0, t, "skin", function() {
                return this._button.skin;
            }, function(t) {
                this._button.skin != t && (this._button.skin = t, this._listChanged = !0);
            }), n(0, t, "visibleNum", function() {
                return this._visibleNum;
            }, function(t) {
                this._visibleNum = t, this._listChanged = !0;
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(Y, this, "width", t), this._button.width = this._width, this._itemChanged = !0,
                    this._listChanged = !0;
            }), n(0, t, "selectedLabel", function() {
                return -1 < this._selectedIndex && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : null;
            }, function(t) {
                this.selectedIndex = this._labels.indexOf(t);
            }), n(0, t, "labels", function() {
                return this._labels.join(",");
            }, function(t) {
                0 < this._labels.length && (this.selectedIndex = -1), t ? this._labels = t.split(",") : this._labels.length = 0,
                    this._itemChanged = !0;
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(Y, this, "height", t), this._button.height = this._height;
            }), n(0, t, "selectHandler", function() {
                return this._selectHandler;
            }, function(t) {
                this._selectHandler = t;
            }), n(0, t, "labelBold", function() {
                return this._button.text.bold;
            }, function(t) {
                this._button.text.bold = t;
            }), n(0, t, "itemColors", function() {
                return String(this._itemColors);
            }, function(t) {
                this._itemColors = H.fillArray(this._itemColors, t, String), this._listChanged = !0;
            }), n(0, t, "itemSize", function() {
                return this._itemSize;
            }, function(t) {
                this._itemSize = t, this._listChanged = !0;
            }), n(0, t, "scrollBar", function() {
                return this.list.scrollBar;
            }), n(0, t, "isOpen", function() {
                return this._isOpen;
            }, function(t) {
                if (this._isOpen != t)
                    if (this._isOpen = t, this._button.selected = this._isOpen,
                        this._isOpen) {
                        this._list || this._createList(), this._listChanged && !this._isCustomList && this.changeList(),
                            this._itemChanged && this.changeItem();
                        var i = this.localToGlobal(b.TEMP.setTo(0, 0)),
                            e = i.y + this._button.height;
                        e = e + this._listHeight <= _.stage.height ? e : i.y - this._listHeight, this._list.pos(i.x, e),
                            this._list.zOrder = 1001, _._currentStage.addChild(this._list), _.stage.once("mousedown", this, this.removeList),
                            _.stage.on("mousewheel", this, this._onStageMouseWheel), this._list.selectedIndex = this._selectedIndex;
                    } else this._list && this._list.removeSelf();
            }), n(0, t, "scrollBarSkin", function() {
                return this._scrollBarSkin;
            }, function(t) {
                this._scrollBarSkin = t;
            }), n(0, t, "sizeGrid", function() {
                return this._button.sizeGrid;
            }, function(t) {
                this._button.sizeGrid = t;
            }), n(0, t, "button", function() {
                return this._button;
            }), n(0, t, "list", function() {
                return this._list || this._createList(), this._list;
            }, function(t) {
                t && (t.removeSelf(), this._isCustomList = !0, this._list = t, this._setListEvent(t),
                    this._itemHeight = t.getCell(0).height + t.spaceY);
            }), n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "labelColors", function() {
                return this._button.labelColors;
            }, function(t) {
                this._button.labelColors != t && (this._button.labelColors = t);
            }), n(0, t, "labelPadding", function() {
                return this._button.text.padding.join(",");
            }, function(t) {
                this._button.text.padding = H.fillArray(D.labelPadding, t, Number);
            }), n(0, t, "labelSize", function() {
                return this._button.text.fontSize;
            }, function(t) {
                this._button.text.fontSize = t;
            }), n(0, t, "labelFont", function() {
                return this._button.text.font;
            }, function(t) {
                this._button.text.font = t;
            }), n(0, t, "stateNum", function() {
                return this._button.stateNum;
            }, function(t) {
                this._button.stateNum = t;
            }), e;
        }(Y),
        V = (function(t) {
            function e() {
                this._tipBox = null, this._tipText = null, this._defaultTipHandler = null, e.__super.call(this),
                    this._tipBox = new Y(), this._tipBox.addChild(this._tipText = new B()), this._tipText.x = this._tipText.y = 5,
                    this._tipText.color = e.tipTextColor, this._defaultTipHandler = this._showDefaultTip,
                    _.stage.on("showtip", this, this._onStageShowTip), _.stage.on("hidetip", this, this._onStageHideTip),
                    this.zOrder = 1100;
            }
            a(e, "laya.ui.TipManager", Y);
            var i = e.prototype;
            i._onStageHideTip = function(t) {
                    _.timer.clear(this, this._showTip), this.closeAll(), this.removeSelf();
                }, i._onStageShowTip = function(t) {
                    _.timer.once(e.tipDelay, this, this._showTip, [t], !0);
                }, i._showTip = function(t) {
                    if ("string" == typeof t) {
                        var i = String(t);
                        Boolean(i) && this._defaultTipHandler(i);
                    } else t instanceof laya.utils.Handler ? t.run() : "function" == typeof t && t.apply();
                    _.stage.on("mousemove", this, this._onStageMouseMove), _.stage.on("mousedown", this, this._onStageMouseDown),
                        this._onStageMouseMove(null);
                }, i._onStageMouseDown = function(t) {
                    this.closeAll();
                }, i._onStageMouseMove = function(t) {
                    this._showToStage(this, e.offsetX, e.offsetY);
                }, i._showToStage = function(t, i, e) {
                    void 0 === i && (i = 0), void 0 === e && (e = 0);
                    var s = t.getBounds();
                    t.x = _.stage.mouseX + i, t.y = _.stage.mouseY + e, t._x + s.width > _.stage.width && (t.x -= s.width + i),
                        t._y + s.height > _.stage.height && (t.y -= s.height + e);
                }, i.closeAll = function() {
                    _.timer.clear(this, this._showTip), _.stage.off("mousemove", this, this._onStageMouseMove),
                        _.stage.off("mousedown", this, this._onStageMouseDown), this.removeChildren();
                }, i.showDislayTip = function(t) {
                    this.addChild(t), this._showToStage(this), _._currentStage.addChild(this);
                }, i._showDefaultTip = function(t) {
                    this._tipText.text = t;
                    var i = this._tipBox.graphics;
                    i.clear(!0), i.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, e.tipBackColor),
                        this.addChild(this._tipBox), this._showToStage(this), _._currentStage.addChild(this);
                }, n(0, i, "defaultTipHandler", function() {
                    return this._defaultTipHandler;
                }, function(t) {
                    this._defaultTipHandler = t;
                }), e.offsetX = 10, e.offsetY = 15, e.tipTextColor = "#ffffff", e.tipBackColor = "#111111",
                e.tipDelay = 200;
        }(), function(i) {
            function s(t, i, e) {
                this._sources = null, this._bitmap = null, this._skin = null, this._clipX = 1, this._clipY = 1,
                    this._clipWidth = 0, this._clipHeight = 0, this._autoPlay = !1, this._interval = 50,
                    this._complete = null, this._isPlaying = !1, this._index = 0, this._clipChanged = !1,
                    this._group = null, this._toIndex = -1, s.__super.call(this), void 0 === i && (i = 1),
                    void 0 === e && (e = 1), this._clipX = i, this._clipY = e, this.skin = t;
            }
            a(s, "laya.ui.Clip", i);
            var t = s.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(),
                    this._bitmap = null, this._sources = null;
            }, t.dispose = function() {
                this.destroy(!0), _.loader.clearRes(this._skin);
            }, t.createChildren = function() {
                this.graphics = this._bitmap = new P();
            }, t._onDisplay = function(t) {
                this._isPlaying ? this._getBit(128) ? this.play() : this.stop() : this._autoPlay && this.play();
            }, t._skinLoaded = function() {
                this._setClipChanged(), this._sizeChanged(), this.event("loaded");
            }, t.changeClip = function() {
                if (this._clipChanged = !1, this._skin) {
                    var t = v.getRes(this._skin);
                    t ? this.loadComplete(this._skin, t) : _.loader.load(this._skin, g.create(this, this.loadComplete, [this._skin]));
                }
            }, t.loadComplete = function(t, i) {
                if (t === this._skin && i) {
                    var e = this._clipWidth || Math.ceil(i.sourceWidth / this._clipX),
                        s = this._clipHeight || Math.ceil(i.sourceHeight / this._clipY),
                        n = this._skin + e + s,
                        h = z.I.get(n);
                    if (M.isOkTextureList(h) || (h = null), h) this._sources = h;
                    else {
                        this._sources = [];
                        for (var o = 0; o < this._clipY; o++)
                            for (var r = 0; r < this._clipX; r++) this._sources.push(k.createFromTexture(i, e * r, s * o, e, s));
                        z.I.set(n, this._sources);
                    }
                    this.index = this._index, this.event("loaded"), this.onCompResize();
                }
            }, t.measureWidth = function() {
                return this.runCallLater(this.changeClip), this._bitmap.width;
            }, t.measureHeight = function() {
                return this.runCallLater(this.changeClip), this._bitmap.height;
            }, t.play = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = -1), this._isPlaying = !0, this.index = t,
                    this._toIndex = i, this._index++, _.timer.loop(this.interval, this, this._loop),
                    this.on("display", this, this._onDisplay), this.on("undisplay", this, this._onDisplay);
            }, t._loop = function() {
                this._visible && this._sources && (this._index++, -1 < this._toIndex && this._index >= this._toIndex ? this.stop() : this._index >= this._sources.length && (this._index = 0),
                    this.index = this._index);
            }, t.stop = function() {
                this._isPlaying = !1, _.timer.clear(this, this._loop), this.event("complete");
            }, t._setClipChanged = function() {
                this._clipChanged || (this._clipChanged = !0, this.callLater(this.changeClip));
            }, n(0, t, "interval", function() {
                return this._interval;
            }, function(t) {
                this._interval != t && (this._interval = t, this._isPlaying && this.play());
            }), n(0, t, "skin", function() {
                return this._skin;
            }, function(t) {
                this._skin != t && ((this._skin = t) ? v.getRes(t) ? this._skinLoaded() : _.loader.load(this._skin, g.create(this, this._skinLoaded), null, "image", 1) : this._bitmap.source = null);
            }), n(0, t, "sources", function() {
                return this._sources;
            }, function(t) {
                this._sources = t, this.index = this._index, this.event("loaded");
            }), n(0, t, "clipX", function() {
                return this._clipX;
            }, function(t) {
                this._clipX = t || 1, this._setClipChanged();
            }), n(0, t, "clipY", function() {
                return this._clipY;
            }, function(t) {
                this._clipY = t || 1, this._setClipChanged();
            }), n(0, t, "total", function() {
                return this.runCallLater(this.changeClip), this._sources ? this._sources.length : 0;
            }), n(0, t, "clipWidth", function() {
                return this._clipWidth;
            }, function(t) {
                this._clipWidth = t, this._setClipChanged();
            }), n(0, t, "sizeGrid", function() {
                return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
            }, function(t) {
                this._bitmap.sizeGrid = H.fillArray(D.defaultSizeGrid, t, Number);
            }), n(0, t, "group", function() {
                return this._group;
            }, function(t) {
                t && this._skin && v.setGroup(this._skin, t), this._group = t;
            }), n(0, t, "clipHeight", function() {
                return this._clipHeight;
            }, function(t) {
                this._clipHeight = t, this._setClipChanged();
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(Y, this, "width", t), this._bitmap.width = t;
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(Y, this, "height", t), this._bitmap.height = t;
            }), n(0, t, "index", function() {
                return this._index;
            }, function(t) {
                this._index = t, this._bitmap && this._sources && (this._bitmap.source = this._sources[t]),
                    this.event("change");
            }), n(0, t, "autoPlay", function() {
                return this._autoPlay;
            }, function(t) {
                this._autoPlay != t && ((this._autoPlay = t) ? this.play() : this.stop());
            }), n(0, t, "isPlaying", function() {
                return this._isPlaying;
            }, function(t) {
                this._isPlaying = t;
            }), n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) && Math.floor(t) == t || "string" == typeof t ? this.index = parseInt(t) : _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "bitmap", function() {
                return this._bitmap;
            }), s;
        }(Y)),
        U = function(i) {
            function t() {
                this.changeHandler = null, this._gridSize = 11, this._bgColor = "#ffffff", this._borderColor = "#000000",
                    this._inputColor = "#000000", this._inputBgColor = "#efefef", this._colorPanel = null,
                    this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null,
                    this._colors = [], this._selectedColor = "#000000", this._panelChanged = !1, t.__super.call(this);
            }
            a(t, "laya.ui.ColorPicker", i);
            var e = t.prototype;
            return e.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._colorPanel && this._colorPanel.destroy(t),
                    this._colorButton && this._colorButton.destroy(t), this._colorPanel = null, this._colorTiles = null,
                    this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = null,
                    this.changeHandler = null;
            }, e.createChildren = function() {
                this.addChild(this._colorButton = new E()), this._colorPanel = new X(), this._colorPanel.size(230, 166),
                    this._colorPanel.addChild(this._colorTiles = new x()), this._colorPanel.addChild(this._colorBlock = new x()),
                    this._colorPanel.addChild(this._colorInput = new m());
            }, e.initialize = function() {
                this._colorButton.on("click", this, this.onColorButtonClick), this._colorBlock.pos(5, 5),
                    this._colorInput.pos(60, 5), this._colorInput.size(60, 20), this._colorInput.on("change", this, this.onColorInputChange),
                    this._colorInput.on("keydown", this, this.onColorFieldKeyDown), this._colorTiles.pos(5, 30),
                    this._colorTiles.on("mousemove", this, this.onColorTilesMouseMove), this._colorTiles.on("click", this, this.onColorTilesClick),
                    this._colorTiles.size(20 * this._gridSize, 12 * this._gridSize), this._colorPanel.on("mousedown", this, this.onPanelMouseDown),
                    this.bgColor = this._bgColor;
            }, e.onPanelMouseDown = function(t) {
                t.stopPropagation();
            }, e.changePanel = function() {
                this._panelChanged = !1;
                var t = this._colorPanel.graphics;
                t.clear(!0), t.drawRect(0, 0, 230, 166, this._bgColor, this._borderColor), this.drawBlock(this._selectedColor),
                    this._colorInput.borderColor = this._borderColor, this._colorInput.bgColor = this._inputBgColor,
                    this._colorInput.color = this._inputColor, (t = this._colorTiles.graphics).clear(!0);
                for (var i = [0, 3355443, 6710886, 10066329, 13421772, 16777215, 16711680, 65280, 255, 16776960, 65535, 16711935], e = 0; e < 12; e++)
                    for (var s = 0; s < 20; s++) {
                        var n = 0;
                        n = 0 === s ? i[e] : 1 === s ? 0 : 51 * (((3 * e + s / 6) % 3 << 0) + 3 * (e / 6 << 0)) << 16 | s % 6 * 51 << 8 | (e << 0) % 6 * 51;
                        var h = H.toColor(n);
                        this._colors.push(h);
                        var o = s * this._gridSize,
                            r = e * this._gridSize;
                        t.drawRect(o, r, this._gridSize, this._gridSize, h, "#000000");
                    }
            }, e.onColorButtonClick = function(t) {
                this._colorPanel.parent ? this.close() : this.open();
            }, e.open = function() {
                var t = this.localToGlobal(new b()),
                    i = t.x + this._colorPanel.width <= _.stage.width ? t.x : _.stage.width - this._colorPanel.width,
                    e = t.y + this._colorButton.height;
                e = e + this._colorPanel.height <= _.stage.height ? e : t.y - this._colorPanel.height,
                    this._colorPanel.pos(i, e), this._colorPanel.zOrder = 1001, _._currentStage.addChild(this._colorPanel),
                    _.stage.on("mousedown", this, this.removeColorBox);
            }, e.close = function() {
                _.stage.off("mousedown", this, this.removeColorBox), this._colorPanel.removeSelf();
            }, e.removeColorBox = function(t) {
                this.close();
            }, e.onColorFieldKeyDown = function(t) {
                13 == t.keyCode && (this._colorInput.text ? this.selectedColor = this._colorInput.text : this.selectedColor = null,
                    this.close(), t.stopPropagation());
            }, e.onColorInputChange = function(t) {
                this._colorInput.text ? this.drawBlock(this._colorInput.text) : this.drawBlock("#FFFFFF");
            }, e.onColorTilesClick = function(t) {
                this.selectedColor = this.getColorByMouse(), this.close();
            }, e.onColorTilesMouseMove = function(t) {
                this._colorInput.focus = !1;
                var i = this.getColorByMouse();
                this._colorInput.text = i, this.drawBlock(i);
            }, e.getColorByMouse = function() {
                var t = this._colorTiles.getMousePoint(),
                    i = Math.floor(t.x / this._gridSize),
                    e = Math.floor(t.y / this._gridSize);
                return this._colors[20 * e + i];
            }, e.drawBlock = function(t) {
                var i = this._colorBlock.graphics;
                i.clear(!0);
                var e = t || "#ffffff";
                i.drawRect(0, 0, 50, 20, e, this._borderColor), t || i.drawLine(0, 0, 50, 20, "#ff0000");
            }, e.changeColor = function() {
                var t = this.graphics;
                t.clear(!0);
                var i = this._selectedColor || "#000000";
                t.drawRect(0, 0, this._colorButton.width, this._colorButton.height, i);
            }, e._setPanelChanged = function() {
                this._panelChanged || (this._panelChanged = !0, this.callLater(this.changePanel));
            }, n(0, e, "inputBgColor", function() {
                return this._inputBgColor;
            }, function(t) {
                this._inputBgColor = t, this._setPanelChanged();
            }), n(0, e, "selectedColor", function() {
                return this._selectedColor;
            }, function(t) {
                this._selectedColor != t && (this._selectedColor = this._colorInput.text = t, this.drawBlock(t),
                    this.changeColor(), this.changeHandler && this.changeHandler.runWith(this._selectedColor),
                    this.event("change", f.EMPTY.setTo("change", this, this)));
            }), n(0, e, "skin", function() {
                return this._colorButton.skin;
            }, function(t) {
                this._colorButton.once("loaded", this, this.changeColor), this._colorButton.skin = t;
            }), n(0, e, "bgColor", function() {
                return this._bgColor;
            }, function(t) {
                this._bgColor = t, this._setPanelChanged();
            }), n(0, e, "borderColor", function() {
                return this._borderColor;
            }, function(t) {
                this._borderColor = t, this._setPanelChanged();
            }), n(0, e, "inputColor", function() {
                return this._inputColor;
            }, function(t) {
                this._inputColor = t, this._setPanelChanged();
            }), t;
        }(Y),
        $ = function(i) {
            function e(t) {
                this.changeHandler = null, this._bg = null, this._bar = null, this._skin = null,
                    this._value = .5, e.__super.call(this), this.skin = t;
            }
            a(e, "laya.ui.ProgressBar", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._bg && this._bg.destroy(t),
                    this._bar && this._bar.destroy(t), this._bg = this._bar = null, this.changeHandler = null;
            }, t.createChildren = function() {
                this.addChild(this._bg = new G()), this.addChild(this._bar = new G()), this._bar._bitmap.autoCacheCmd = !1;
            }, t._skinLoaded = function() {
                this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"),
                    this.callLater(this.changeValue), this._sizeChanged(), this.event("loaded");
            }, t.measureWidth = function() {
                return this._bg.width;
            }, t.measureHeight = function() {
                return this._bg.height;
            }, t.changeValue = function() {
                if (this.sizeGrid) {
                    var t = this.sizeGrid.split(","),
                        i = Number(t[3]),
                        e = Number(t[1]),
                        s = (this.width - i - e) * this._value;
                    this._bar.width = i + e + s, this._bar.visible = this._bar.width > i + e;
                } else this._bar.width = this.width * this._value;
            }, n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) || "string" == typeof t ? this.value = Number(t) : _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "skin", function() {
                return this._skin;
            }, function(t) {
                this._skin != t && (this._skin = t, this._skin && !v.getRes(this._skin) ? _.loader.load(this._skin, g.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(Y, this, "height", t), this._bg.height = this._height, this._bar.height = this._height;
            }), n(0, t, "bar", function() {
                return this._bar;
            }), n(0, t, "value", function() {
                return this._value;
            }, function(t) {
                this._value != t && (t = 1 < t ? 1 : t < 0 ? 0 : t, this._value = t, this.callLater(this.changeValue),
                    this.event("change"), this.changeHandler && this.changeHandler.runWith(t));
            }), n(0, t, "bg", function() {
                return this._bg;
            }), n(0, t, "sizeGrid", function() {
                return this._bg.sizeGrid;
            }, function(t) {
                this._bg.sizeGrid = this._bar.sizeGrid = t;
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(Y, this, "width", t), this._bg.width = this._width, this.callLater(this.changeValue);
            }), e;
        }(Y),
        F = function(i) {
            function e(t) {
                this.rollRatio = .97, this.changeHandler = null, this.scaleBar = !0, this.autoHide = !1,
                    this.elasticDistance = 0, this.elasticBackTime = 500, this.upButton = null, this.downButton = null,
                    this.slider = null, this._scrollSize = 1, this._skin = null, this._thumbPercent = 1,
                    this._target = null, this._lastPoint = null, this._lastOffset = 0, this._checkElastic = !1,
                    this._isElastic = !1, this._value = NaN, this._hide = !1, this._clickOnly = !0,
                    this._offsets = null, this.isLockedFun = null, this.triggerDownDragLimit = null,
                    this.triggerUpDragLimit = null, e.__super.call(this), this._showButtons = T.showButtons,
                    this._touchScrollEnable = T.touchScrollEnable, this._mouseWheelEnable = T.mouseWheelEnable,
                    this.skin = t, this.max = 1;
            }
            a(e, "laya.ui.ScrollBar", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), this.stopScroll(), this.target = null, i.prototype.destroy.call(this, t),
                    this.upButton && this.upButton.destroy(t), this.downButton && this.downButton.destroy(t),
                    this.slider && this.slider.destroy(t), this.upButton = this.downButton = null, this.slider = null,
                    this.changeHandler = null, this._offsets = null;
            }, t.createChildren = function() {
                this.addChild(this.slider = new j()), this.addChild(this.upButton = new E()), this.addChild(this.downButton = new E());
            }, t.initialize = function() {
                this.slider.showLabel = !1, this.slider.tick = 0, this.slider.on("change", this, this.onSliderChange),
                    this.slider.setSlider(0, 0, 0), this.upButton.on("mousedown", this, this.onButtonMouseDown),
                    this.downButton.on("mousedown", this, this.onButtonMouseDown);
            }, t.onSliderChange = function() {
                this._value != this.slider.value && (this.value = this.slider.value);
            }, t.onButtonMouseDown = function(t) {
                var i = t.currentTarget === this.upButton;
                this.slide(i), _.timer.once(D.scrollBarDelayTime, this, this.startLoop, [i]),
                    _.stage.once("mouseup", this, this.onStageMouseUp);
            }, t.startLoop = function(t) {
                _.timer.frameLoop(1, this, this.slide, [t]);
            }, t.slide = function(t) {
                t ? this.value -= this._scrollSize : this.value += this._scrollSize;
            }, t.onStageMouseUp = function(t) {
                _.timer.clear(this, this.startLoop), _.timer.clear(this, this.slide);
            }, t._skinLoaded = function() {
                this.slider.skin = this._skin, this.callLater(this.changeScrollBar), this._sizeChanged(),
                    this.event("loaded");
            }, t.changeScrollBar = function() {
                this.upButton.visible = this._showButtons, this.downButton.visible = this._showButtons,
                    this._showButtons && (this.upButton.skin = this._skin.replace(".png", "$up.png"),
                        this.downButton.skin = this._skin.replace(".png", "$down.png")), this.slider.isVertical ? this.slider.y = this._showButtons ? this.upButton.height : 0 : this.slider.x = this._showButtons ? this.upButton.width : 0,
                    this.resetPositions(), this.repaint();
            }, t._sizeChanged = function() {
                i.prototype._sizeChanged.call(this), this.repaint(), this.resetPositions(), this.event("change"),
                    this.changeHandler && this.changeHandler.runWith(this.value);
            }, t.resetPositions = function() {
                this.slider.isVertical ? this.slider.height = this.height - (this._showButtons ? this.upButton.height + this.downButton.height : 0) : this.slider.width = this.width - (this._showButtons ? this.upButton.width + this.downButton.width : 0),
                    this.resetButtonPosition();
            }, t.resetButtonPosition = function() {
                this.slider.isVertical ? this.downButton.y = this.slider._y + this.slider.height : this.downButton.x = this.slider._x + this.slider.width;
            }, t.measureWidth = function() {
                return this.slider.isVertical ? this.slider.width : 100;
            }, t.measureHeight = function() {
                return this.slider.isVertical ? 100 : this.slider.height;
            }, t.setScroll = function(t, i, e) {
                this.runCallLater(this._sizeChanged), this.slider.setSlider(t, i, e), this.slider.bar.visible = 0 < i, !this._hide && this.autoHide && (this.visible = !1);
            }, t.onTargetMouseWheel = function(t) {
                this.value -= t.delta * this._scrollSize, this.target = this._target;
            }, t.onTargetMouseDown = function(t) {
                this.isLockedFun && !this.isLockedFun(t) || (this.event("end"), this._clickOnly = !0,
                    this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new b()),
                    this._lastPoint.setTo(_.stage.mouseX, _.stage.mouseY), _.timer.clear(this, this.tweenMove),
                    L.clearTween(this), _.stage.once("mouseup", this, this.onStageMouseUp2), _.stage.once("mouseout", this, this.onStageMouseUp2),
                    _.timer.frameLoop(1, this, this.loop));
            }, t.startDragForce = function() {
                this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new b()),
                    this._lastPoint.setTo(_.stage.mouseX, _.stage.mouseY), _.timer.clear(this, this.tweenMove),
                    L.clearTween(this), _.stage.once("mouseup", this, this.onStageMouseUp2), _.stage.once("mouseout", this, this.onStageMouseUp2),
                    _.timer.frameLoop(1, this, this.loop);
            }, t.cancelDragOp = function() {
                _.stage.off("mouseup", this, this.onStageMouseUp2), _.stage.off("mouseout", this, this.onStageMouseUp2),
                    _.timer.clear(this, this.tweenMove), _.timer.clear(this, this.loop), this._target.mouseEnabled = !0;
            }, t.checkTriggers = function(t) {
                return void 0 === t && (t = !1), 0 <= this.value && this.value - this._lastOffset <= 0 && this.triggerDownDragLimit && this.triggerDownDragLimit(t) ? (this.cancelDragOp(), !(this.value = 0)) : !!(this.value <= this.max && this.value - this._lastOffset >= this.max && this.triggerUpDragLimit && this.triggerUpDragLimit(t)) && (this.cancelDragOp(),
                    this.value = this.max, !0);
            }, t.startTweenMoveForce = function(t) {
                this._lastOffset = t, _.timer.frameLoop(1, this, this.tweenMove, [200]);
            }, t.loop = function() {
                var t = _.stage.mouseY,
                    i = _.stage.mouseX;
                if (this._lastOffset = this.isVertical ? t - this._lastPoint.y : i - this._lastPoint.x,
                    this._clickOnly) {
                    if (!(1 < Math.abs(this._lastOffset * (this.isVertical ? _.stage._canvasTransform.getScaleY() : _.stage._canvasTransform.getScaleX())))) return;
                    if (this._clickOnly = !1, this.checkTriggers()) return;
                    this._offsets || (this._offsets = []), this._offsets.length = 0, this._target.mouseEnabled = !1, !this.hide && this.autoHide && (this.alpha = 1, this.visible = !0), this.event("start");
                } else if (this.checkTriggers()) return;
                this._offsets.push(this._lastOffset), this._lastPoint.x = i, this._lastPoint.y = t,
                    0 !== this._lastOffset && (this._checkElastic || (0 < this.elasticDistance ? this._checkElastic || 0 == this._lastOffset || (0 < this._lastOffset && this._value <= this.min || this._lastOffset < 0 && this._value >= this.max ? (this._isElastic = !0,
                        this._checkElastic = !0) : this._isElastic = !1) : this._checkElastic = !0), this._isElastic ? this._value <= this.min ? 0 < this._lastOffset ? this.value -= this._lastOffset * Math.max(0, 1 - (this.min - this._value) / this.elasticDistance) : (this.value -= .5 * this._lastOffset,
                        this._value >= this.min && (this._checkElastic = !1)) : this._value >= this.max && (this._lastOffset < 0 ? this.value -= this._lastOffset * Math.max(0, 1 - (this._value - this.max) / this.elasticDistance) : (this.value -= .5 * this._lastOffset,
                        this._value <= this.max && (this._checkElastic = !1))) : this.value -= this._lastOffset);
            }, t.onStageMouseUp2 = function(t) {
                if (_.stage.off("mouseup", this, this.onStageMouseUp2), _.stage.off("mouseout", this, this.onStageMouseUp2),
                    _.timer.clear(this, this.loop), !(this._clickOnly && this._value >= this.min && this._value <= this.max))
                    if (this._target.mouseEnabled = !0,
                        this._isElastic) this._value < this.min ? L.to(this, {
                        value: this.min
                    }, this.elasticBackTime, d.sineOut, g.create(this, this.elasticOver)) : this._value > this.max && L.to(this, {
                        value: this.max
                    }, this.elasticBackTime, d.sineOut, g.create(this, this.elasticOver));
                    else {
                        if (!this._offsets) return;
                        this._offsets.length < 1 && (this._offsets[0] = this.isVertical ? _.stage.mouseY - this._lastPoint.y : _.stage.mouseX - this._lastPoint.x);
                        for (var i = 0, e = Math.min(this._offsets.length, 3), s = 0; s < e; s++) i += this._offsets[this._offsets.length - 1 - s];
                        if (this._lastOffset = i / e, (i = Math.abs(this._lastOffset)) < 2) return void this.event("end");
                        250 < i && (this._lastOffset = 0 < this._lastOffset ? 250 : -250);
                        var n = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 150)));
                        _.timer.frameLoop(1, this, this.tweenMove, [n]);
                    }
            }, t.elasticOver = function() {
                this._isElastic = !1, !this.hide && this.autoHide && L.to(this, {
                    alpha: 0
                }, 500), this.event("end");
            }, t.tweenMove = function(t) {
                if (this._lastOffset *= this.rollRatio, !this.checkTriggers(!0)) {
                    var i = NaN;
                    if (0 < t && (0 < this._lastOffset && this.value <= this.min ? (this._isElastic = !0,
                            i = .5 * -(this.min - t - this.value), this._lastOffset > i && (this._lastOffset = i)) : this._lastOffset < 0 && this.value >= this.max && (this._isElastic = !0,
                            i = .5 * -(this.max + t - this.value), this._lastOffset < i && (this._lastOffset = i))),
                        this.value -= this._lastOffset, Math.abs(this._lastOffset) < .1) {
                        if (_.timer.clear(this, this.tweenMove), this._isElastic) return void(this._value < this.min ? L.to(this, {
                            value: this.min
                        }, this.elasticBackTime, d.sineOut, g.create(this, this.elasticOver)) : this._value > this.max ? L.to(this, {
                            value: this.max
                        }, this.elasticBackTime, d.sineOut, g.create(this, this.elasticOver)) : this.elasticOver());
                        this.event("end"), !this.hide && this.autoHide && L.to(this, {
                            alpha: 0
                        }, 500);
                    }
                }
            }, t.stopScroll = function() {
                this.onStageMouseUp2(null), _.timer.clear(this, this.tweenMove), L.clearTween(this);
            }, n(0, t, "thumbPercent", function() {
                return this._thumbPercent;
            }, function(t) {
                this.runCallLater(this.changeScrollBar), this.runCallLater(this._sizeChanged), t = 1 <= t ? .99 : t,
                    this._thumbPercent = t, this.scaleBar && (this.slider.isVertical ? this.slider.bar.height = Math.max(this.slider.height * t, D.scrollBarMinNum) : this.slider.bar.width = Math.max(this.slider.width * t, D.scrollBarMinNum));
            }), n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) || "string" == typeof t ? this.value = Number(t) : _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "skin", function() {
                return this._skin;
            }, function(t) {
                " " != t && this._skin != t && (this._skin = t, this._skin && !v.getRes(this._skin) ? _.loader.load([this._skin, this._skin.replace(".png", "$up.png"), this._skin.replace(".png", "$down.png"), this._skin.replace(".png", "$bar.png")], g.create(this, this._skinLoaded)) : this._skinLoaded());
            }), n(0, t, "max", function() {
                return this.slider.max;
            }, function(t) {
                this.slider.max = t;
            }), n(0, t, "min", function() {
                return this.slider.min;
            }, function(t) {
                this.slider.min = t;
            }), n(0, t, "value", function() {
                return this._value;
            }, function(t) {
                t !== this._value && (this._value = t, this._isElastic || (this.slider._value != t && (this.slider._value = t,
                        this.slider.changeValue()), this._value = this.slider._value), this.event("change"),
                    this.changeHandler && this.changeHandler.runWith(this._value));
            }), n(0, t, "isVertical", function() {
                return this.slider.isVertical;
            }, function(t) {
                this.slider.isVertical = t;
            }), n(0, t, "sizeGrid", function() {
                return this.slider.sizeGrid;
            }, function(t) {
                this.slider.sizeGrid = t;
            }), n(0, t, "scrollSize", function() {
                return this._scrollSize;
            }, function(t) {
                this._scrollSize = t;
            }), n(0, t, "target", function() {
                return this._target;
            }, function(t) {
                this._target && (this._target.off("mousewheel", this, this.onTargetMouseWheel),
                    this._target.off("mousedown", this, this.onTargetMouseDown)), (this._target = t) && (this._mouseWheelEnable && this._target.on("mousewheel", this, this.onTargetMouseWheel),
                    this._touchScrollEnable && this._target.on("mousedown", this, this.onTargetMouseDown));
            }), n(0, t, "hide", function() {
                return this._hide;
            }, function(t) {
                this._hide = t, this.visible = !t;
            }), n(0, t, "showButtons", function() {
                return this._showButtons;
            }, function(t) {
                this._showButtons = t, this.callLater(this.changeScrollBar);
            }), n(0, t, "touchScrollEnable", function() {
                return this._touchScrollEnable;
            }, function(t) {
                this._touchScrollEnable = t, this.target = this._target;
            }), n(0, t, "mouseWheelEnable", function() {
                return this._mouseWheelEnable;
            }, function(t) {
                this._mouseWheelEnable = t, this.target = this._target;
            }), n(0, t, "lastOffset", function() {
                return this._lastOffset;
            }), n(0, t, "tick", function() {
                return this.slider.tick;
            }, function(t) {
                this.slider.tick = t;
            }), e;
        }(Y),
        j = function(i) {
            function e(t) {
                this.changeHandler = null, this.isVertical = !0, this.showLabel = !0, this._allowClickBack = !1,
                    this._max = 100, this._min = 0, this._tick = 1, this._value = 0, this._skin = null,
                    this._bg = null, this._progress = null, this._bar = null, this._tx = NaN, this._ty = NaN,
                    this._maxMove = NaN, this._globalSacle = null, e.__super.call(this), this.skin = t;
            }
            a(e, "laya.ui.Slider", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._bg && this._bg.destroy(t),
                    this._bar && this._bar.destroy(t), this._progress && this._progress.destroy(t),
                    this._bg = null, this._bar = null, this._progress = null, this.changeHandler = null;
            }, t.createChildren = function() {
                this.addChild(this._bg = new G()), this.addChild(this._bar = new E());
            }, t.initialize = function() {
                this._bar.on("mousedown", this, this.onBarMouseDown), this._bg.sizeGrid = this._bar.sizeGrid = "4,4,4,4,0",
                    this._progress && (this._progress.sizeGrid = this._bar.sizeGrid), this.allowClickBack = !0;
            }, t.onBarMouseDown = function(t) {
                this._globalSacle || (this._globalSacle = new b()), this._globalSacle.setTo(this.globalScaleX || .01, this.globalScaleY || .01),
                    this._maxMove = this.isVertical ? this.height - this._bar.height : this.width - this._bar.width,
                    this._tx = _.stage.mouseX, this._ty = _.stage.mouseY, _.stage.on("mousemove", this, this.mouseMove),
                    _.stage.once("mouseup", this, this.mouseUp), _.stage.once("mouseout", this, this.mouseUp),
                    this.showValueText();
            }, t.showValueText = function() {
                if (this.showLabel) {
                    var t = laya.ui.Slider.label;
                    this.addChild(t), t.textField.changeText(this._value + ""), this.isVertical ? (t.x = this._bar._x + 20,
                        t.y = .5 * (this._bar.height - t.height) + this._bar._y) : (t.y = this._bar._y - 20,
                        t.x = .5 * (this._bar.width - t.width) + this._bar._x);
                }
            }, t.hideValueText = function() {
                laya.ui.Slider.label && laya.ui.Slider.label.removeSelf();
            }, t.mouseUp = function(t) {
                _.stage.off("mousemove", this, this.mouseMove), _.stage.off("mouseup", this, this.mouseUp),
                    _.stage.off("mouseout", this, this.mouseUp), this.sendChangeEvent("changed"), this.hideValueText();
            }, t.mouseMove = function(t) {
                var i = this._value;
                if (this.isVertical ? (this._bar.y += (_.stage.mouseY - this._ty) / this._globalSacle.y,
                        this._bar._y > this._maxMove ? this._bar.y = this._maxMove : this._bar._y < 0 && (this._bar.y = 0),
                        this._value = this._bar._y / this._maxMove * (this._max - this._min) + this._min,
                        this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x += (_.stage.mouseX - this._tx) / this._globalSacle.x,
                        this._bar._x > this._maxMove ? this._bar.x = this._maxMove : this._bar._x < 0 && (this._bar.x = 0),
                        this._value = this._bar._x / this._maxMove * (this._max - this._min) + this._min,
                        this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width)),
                    this._tx = _.stage.mouseX, this._ty = _.stage.mouseY, 0 != this._tick) {
                    var e = Math.pow(10, (this._tick + "").length - 1);
                    this._value = Math.round(Math.round(this._value / this._tick) * this._tick * e) / e;
                }
                this._value != i && this.sendChangeEvent(), this.showValueText();
            }, t.sendChangeEvent = function(t) {
                void 0 === t && (t = "change"), this.event(t), this.changeHandler && this.changeHandler.runWith(this._value);
            }, t._skinLoaded = function() {
                this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png");
                var t = this._skin.replace(".png", "$progress.png");
                v.getRes(t) && (this._progress || (this.addChild(this._progress = new G()), this._progress.sizeGrid = this._bar.sizeGrid,
                        this.setChildIndex(this._progress, 1)), this._progress.skin = t), this.setBarPoint(),
                    this.callLater(this.changeValue), this._sizeChanged(), this.event("loaded");
            }, t.setBarPoint = function() {
                this.isVertical ? this._bar.x = Math.round(.5 * (this._bg.width - this._bar.width)) : this._bar.y = Math.round(.5 * (this._bg.height - this._bar.height));
            }, t.measureWidth = function() {
                return Math.max(this._bg.width, this._bar.width);
            }, t.measureHeight = function() {
                return Math.max(this._bg.height, this._bar.height);
            }, t._sizeChanged = function() {
                i.prototype._sizeChanged.call(this), this.isVertical ? this._bg.height = this.height : this._bg.width = this.width,
                    this.setBarPoint(), this.changeValue();
            }, t.setSlider = function(t, i, e) {
                this._value = -1, this._min = t, this._max = t < i ? i : t, this.value = e < t ? t : i < e ? i : e;
            }, t.changeValue = function() {
                if (0 != this.tick) {
                    var t = Math.pow(10, (this._tick + "").length - 1);
                    this._value = Math.round(Math.round(this._value / this._tick) * this._tick * t) / t;
                }
                this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
                var i = this._max - this._min;
                0 === i && (i = 1), this.isVertical ? (this._bar.y = (this._value - this._min) / i * (this.height - this._bar.height),
                    this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x = (this._value - this._min) / i * (this.width - this._bar.width),
                    this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width));
            }, t.onBgMouseDown = function(t) {
                var i = this._bg.getMousePoint();
                this.isVertical ? this.value = i.y / (this.height - this._bar.height) * (this._max - this._min) + this._min : this.value = i.x / (this.width - this._bar.width) * (this._max - this._min) + this._min;
            }, n(0, t, "dataSource", i.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) || "string" == typeof t ? this.value = Number(t) : _.superSet(Y, this, "dataSource", t);
            }), n(0, t, "skin", function() {
                return this._skin;
            }, function(t) {
                this._skin != t && (this._skin = t, this._skin && !v.getRes(this._skin) ? _.loader.load([this._skin, this._skin.replace(".png", "$bar.png")], g.create(this, this._skinLoaded)) : this._skinLoaded());
            }), n(0, t, "tick", function() {
                return this._tick;
            }, function(t) {
                this._tick != t && (this._tick = t, this.callLater(this.changeValue));
            }), n(0, t, "sizeGrid", function() {
                return this._bg.sizeGrid;
            }, function(t) {
                this._bg.sizeGrid = t, this._bar.sizeGrid = t, this._progress && (this._progress.sizeGrid = this._bar.sizeGrid);
            }), n(0, t, "allowClickBack", function() {
                return this._allowClickBack;
            }, function(t) {
                this._allowClickBack != t && ((this._allowClickBack = t) ? this._bg.on("mousedown", this, this.onBgMouseDown) : this._bg.off("mousedown", this, this.onBgMouseDown));
            }), n(0, t, "max", function() {
                return this._max;
            }, function(t) {
                this._max != t && (this._max = t, this.callLater(this.changeValue));
            }), n(0, t, "min", function() {
                return this._min;
            }, function(t) {
                this._min != t && (this._min = t, this.callLater(this.changeValue));
            }), n(0, t, "bar", function() {
                return this._bar;
            }), n(0, t, "value", function() {
                return this._value;
            }, function(t) {
                if (this._value != t) {
                    var i = this._value;
                    this._value = t, this.changeValue(), this._value != i && this.sendChangeEvent();
                }
            }), h(e, ["label", function() {
                return this.label = new R();
            }]), e;
        }(Y),
        J = function(t) {
            var c, o;

            function u(t) {
                this.gameStopHD = !1, this.iconImgTl = null, this._iconImage = null, this._moreBox = null,
                    this._gameBox = null, this.screenType = 0, this._moreGameDataUrl = "https://abc.layabox.com/public/more/gamelist2.json",
                    this._iconImageObj = null, this.clickCallBack = null, this.closeCallBack = null,
                    this.isShow = !1, this.dinfo = null, this.ErrorUrlHttps = "https://elastic.layabox.com/",
                    this.tongjiType = "bdm", void 0 === t && (t = 0), u.__super.call(this), this.screenType = t,
                    this.init();
            }
            a(u, "laya.ui.MoreGame", N);
            var i = u.prototype;
            return i.getLocalDateString = function(t) {
                void 0 === t && (t = 0);
                var i = this.getDateByTimestamp(t).toLocaleDateString();
                if (l.onLimixiu || l.onMiniGame) {
                    var e = new Date();
                    i = u.toLocaleDateString(e.getTime());
                }
                var s = new RegExp("/", "g");
                return i = i.replace(s, "-");
            }, i.getDateByTimestamp = function(t) {
                return void 0 === t && (t = 0), t && "" != t ? new Date(t) : new Date();
            }, i.reportError = function(t, i, e) {
                void 0 === i && (i = ""), e = e || {};
                var s = Date.now(),
                    n = new Date(s + 0);
                e.date = n.toLocaleString(), "error" != (e.etype = t) && "statistics" != t && (t = "statistics"),
                    e.version = "V0.0.1", e.gameId = 10100, e.dinfo = this.dinfo, e.channel = -1e3,
                    e.msg = i, e["@timestamp"] = n.toISOString(), e.user = this.getUserId(), e.openid = this.getOpenId();
                var h = u.getDay(n);
                e.rdate = h, e.day = n.getDate() + "", e.hour = n.getHours() + "", e.minute = n.getMinutes() + "",
                    e.gameurl = r.baseURI, e.regTime = 0, "error" == t ? this.sendLog(e, this.tongjiType + "error-" + h.substring(0, 6) + "/" + t + "/", t) : this.sendLog(e, this.tongjiType + "-" + h.substring(0, 6) + "/" + t + "/", t);
            }, i.getUserId = function() {
                var t = parseInt(y.getItem("layauserid") + "") || -1;
                return -1 == t && (t = this.randRange(0, 1e9), y.setItem("layauserid", t + "")),
                    t;
            }, i.getOpenId = function() {
                var t = y.getItem("openid");
                if (null == t || "" == t) {
                    t = "";
                    for (var i = 0; i < 32; i++) {
                        var e = this.randRange(0, 62);
                        t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(e);
                    }
                    y.setItem("openid", t);
                }
                return t;
            }, i.sendLog = function(t, i, e) {
                var s = this,
                    n = new p();
                n.on("error", this, function(t, i, e) {
                    e && -1 != e.indexOf("[404]") && new p().send(s.ErrorUrlHttps + "garbage/" + i + "/", JSON.stringify(t), "post", "text", ["Content-Type", "application/json"]);
                }, [t, e]), l.onBDMiniGame && (t.gameurl = ""), n.send(this.ErrorUrlHttps + i, JSON.stringify(t), "post", "text", ["Content-Type", "application/json"]);
            }, i.initEvent = function() {
                this.on("click", this, this.onIconClick);
            }, i.onStageResize = function() {
                var t = Math.min(_.stage.width / _.stage.designWidth, _.stage.height / _.stage.designHeight);
                _.stage.width < 720 && (t = .9), this._moreBox && this._moreBox.scale(t, t), this._gameBox && this._gameBox.scale(t, t);
            }, i.tada = function(t, i, e, s) {
                void 0 === e && (e = 1.1), void 0 === s && (s = 1);
                var n = new I();
                return n.reset(), n.to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: 3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: -3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: 3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: -3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: 3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: -3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: 3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: -3
                }, .1 * i).to(t, {
                    scaleX: e,
                    scaleY: e,
                    rotation: 3
                }, .1 * i).to(t, {
                    scaleX: s,
                    scaleY: s,
                    rotation: 0
                }, .1 * i), n.play(0), n;
            }, i.dispose = function() {
                this.removeEvent(), this.gameStopHD = !0, u._moreGameData = null, this._iconImageObj = null,
                    this.clickCallBack = null, this.closeCallBack = null, this.iconImgTl && (this.iconImgTl.offAll("complete"),
                        this.iconImgTl = null), this._moreBox && (this._moreBox.removeChildren(), this._moreBox = null),
                    this._gameBox && (this._gameBox.removeChildren(), this._gameBox = null), this._iconImage && (this._iconImage.removeSelf(),
                        this._iconImage = null);
            }, i.onSetIconType = function(t) {
                this.gameStopHD = !t, this.visible = t;
            }, i.checkIconImgHD = function() {
                this.iconImgTl ? this.iconImgTl.play(0) : this.iconImgTl = this.tada(this._iconImage, 1200, 1.1, .9),
                    this.iconImgTl.on("complete", this, this.onTlComplete);
            }, i.onTlComplete = function() {
                if (this.parent) {
                    if (this._iconImage.scale(.9, .9), this._iconImage.rotation = 0, this.gameStopHD && this.iconImgTl) return this.iconImgTl.offAll("complete"),
                        void(this.iconImgTl = null);
                    _.timer.once(1e3, this, this.onYanChiPlay);
                } else this.iconImgTl && (this.iconImgTl.offAll(), this.iconImgTl = null);
            }, i.onYanChiPlay = function() {
                this.parent && this.iconImgTl ? this.iconImgTl.play(0) : this.iconImgTl && (this.iconImgTl.offAll("complete"),
                    this.iconImgTl = null);
            }, i.removeEvent = function() {
                this.off("click", this, this.onIconClick);
            }, i.onIconClick = function() {
                this.isShow = !0, null != this.clickCallBack && this.clickCallBack.run();
                var t = y.getItem("currentTime"),
                    i = this.getLocalDateString();
                t != i ? (y.setItem("currentTime", i), this.reportError(u._moreGameData.statid1)) : this.reportError(u._moreGameData.statid2),
                    this.onResLoaded();
            }, i.onResLoaded = function() {
                if (this._moreBox) this._moreBox.visible = !0;
                else {
                    this._moreBox = new X(), _.stage.addChild(this._moreBox), this._moreBox.zOrder = 99999,
                        this._moreBox.left = this._moreBox.right = this._moreBox.top = this._moreBox.bottom = 0;
                    var t = this.onCreateImage(u.onGetAtlasDanImgUrl("img_white_bg"), this._moreBox);
                    t.top = t.left = t.right = t.bottom = 0, t.sizeGrid = "1,1,1,1,1";
                    var i = this.onCreateImage(u.onGetAtlasDanImgUrl("hengfengexian"), this._moreBox);
                    i.left = i.right = 0, i.y = 132, i.alpha = .2;
                    var e = this.onCreateImage(u.onGetAtlasDanImgUrl("img_font_jingcai"), this._moreBox);
                    e.on("click", this, this.onJiantouImgClick), this.isQMP() && this.screenType ? e.pos(15, 70) : e.pos(15, 45);
                    var s = new st();
                    this._moreBox.addChild(s), s.itemRender = c, s.selectEnable = !0, s.vScrollBarSkin = "",
                        s.scrollBar.autoHide = !0, s.scrollBar.elasticDistance = 250, s.renderHandler = new g(this, this.onGameListRender);
                    var n = u._moreGameData.marvellousGame.gameList,
                        h = [];
                    h.push(n[0]), h.push(n[1]);
                    var o = this.RandomNumBoth(h.length, n.length - h.length, n.length);
                    if (!o) return void(this.visible = !1);
                    try {
                        for (var r = 0, a = o.length; r < a; r++) {
                            var l = o[r];
                            h.push(n[l]);
                        }
                        u._moreGameData.marvellousGame.gameList = [], u._moreGameData.marvellousGame.gameList = h,
                            s.array = u._moreGameData.marvellousGame.gameList;
                    } catch (t) {
                        s.array = u._moreGameData.marvellousGame.gameList;
                    }
                    this.screenType && (s.spaceY = 10, s.width = 690, this.isQMP() ? s.height = _.stage.height + 130 : s.height = 1139,
                        s.y = 139, s.centerX = 0), this.onStageResize();
                }
            }, i.RandomNumBoth = function(t, i, e) {
                for (var s = [], n = t; n < e; n++) s.push(n);
                var h = [],
                    o = s.length;
                for (n = 0; n < o; n++) {
                    s.length;
                    var r = Math.floor(Math.random() * s.length);
                    if (h.push(s[r]), s.splice(r, 1), s.length <= o - i) return h;
                }
                return null;
            }, i.isQMP = function() {
                var t = !1,
                    i = 0;
                if (i = "horizontal" == _.stage.screenMode ? l.height % 9 : l.width % 9, l.onAndroid && 0 == i) {
                    var e = 0;
                    e = "horizontal" == _.stage.screenMode ? l.width : l.height, -1 != [2280, 2160, 2244, 3120, 2248, 2340, 2310].indexOf(e) && (t = !0);
                }
                var s = /iPhone/gi.test(l.window.navigator.userAgent) && 375 == Math.min(l.clientHeight, l.clientWidth) && 812 == Math.max(l.clientHeight, l.clientWidth),
                    n = 414 == Math.min(l.clientHeight, l.clientWidth) && 896 == Math.max(l.clientHeight, l.clientWidth);
                return !l.onMiniGame && !l.onBDMiniGame || l.onAndroid || !s && !n || (t = !0),
                    t;
            }, i.onDrawShapes = function(t, i, e, s) {
                void 0 === e && (e = 5), void 0 === s && (s = !1);
                var n = e;
                s && (n = 0);
                var h = new x();
                return h.graphics.drawPath(0, 0, [
                    ["moveTo", e, 0],
                    ["lineTo", 105, 0],
                    ["arcTo", t, 0, t, e, e],
                    ["lineTo", t, i],
                    ["arcTo", t, i + e, 105, i + e, n],
                    ["lineTo", e, i + e],
                    ["arcTo", 0, i + e, 0, i, n],
                    ["lineTo", 0, e],
                    ["arcTo", 0, 0, e, 0, e],
                    ["closePath"]
                ], {
                    fillStyle: "#ff0000"
                }), h;
            }, i.onCreateMaskImg = function(t, i) {
                var e = this.onCreateImage(u.onGetAtlasDanImgUrl("dayuan"), i),
                    s = this.onCreateImage(t, e);
                s.pos(11, 10);
                var n = new x();
                return n.graphics.drawCircle(71, 74, 68, "#ff0000"), s.mask = n, e.scale(.7, .7),
                    e;
            }, i.onGameListRender = function(t, i) {
                var e = u._moreGameData.marvellousGame.gameList;
                if (!(i < 0 || i > e.length - 1)) {
                    var s = e[i];
                    t.init(s, this.screenType, new g(this, this.onItemClickCallBack));
                }
            }, i.onItemClickCallBack = function(i) {
                var e = this;
                if (swan.navigateToMiniProgram) {
                    var t = i.appKey,
                        s = i.path,
                        n = i.extendInfo;
                    swan.navigateToMiniProgram({
                        appKey: t,
                        path: s,
                        extraData: n,
                        success: function(t) {},
                        fail: function(t) {},
                        complete: function(t) {
                            e.reportError(i.statid);
                        }.bind(this)
                    });
                }
            }, i.onJiantouImgClick = function(t) {
                this.isShow = !1, this._moreBox && (this._moreBox.visible = !1), null != this.closeCallBack && this.closeCallBack.run();
            }, i.onCreateLabel = function(t, i, e, s, n, h, o) {
                void 0 === e && (e = 24), void 0 === s && (s = "#000000"), void 0 === n && (n = !1),
                    void 0 === h && (h = "center"), void 0 === o && (o = 10);
                var r = new R();
                return r.text = t, r.font = "Microsoft YaHei", r.fontSize = e, r.color = s, r.bold = !0,
                    r.leading = o, r.valign = "middle", r.align = h, r.wordWrap = n, i.addChild(r),
                    r;
            }, i.onCreateImage = function(t, i) {
                var e = new G();
                return e.skin = t, i.addChild(e), e;
            }, i.init = function() {
                var t = -1 < l.window.navigator.userAgent.indexOf("SwanGame");
                this.visible = !1, t && (this.dinfo = JSON.stringify(laya.bd.mini.BMiniAdapter.systemInfo),
                    this.onGetAdvsListData());
            }, i.randRange = function(t, i) {
                return Math.floor(Math.random() * (i - t + 1)) + t;
            }, i.onGetAdvsListData = function() {
                var i = this,
                    t = this.randRange(1e4, 1e6),
                    e = this._moreGameDataUrl + "?" + t;
                u._http.open("get", e, !0), u._http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    u._http.responseType = "text", u._http.onerror = function(t) {
                        i._onError(t);
                    }, u._http.onload = function(t) {
                        i._onLoad(t);
                    }, u._http.send(null);
            }, i._onError = function(t) {
                this.error("Request failed Status:" + u._http.status + " text:" + u._http.statusText);
            }, i._onLoad = function(t) {
                var i = u._http,
                    e = void 0 !== i.status ? i.status : 200;
                200 === e || 204 === e || 0 === e ? this.complete() : this.error("[" + i.status + "]" + i.statusText + ":" + i.responseURL);
            }, i.error = function(t) {
                this.event("error", t);
            }, i.complete = function() {
                try {
                    var t = u._http.response || u._http.responseText;
                    u._moreGameData = JSON.parse(t), this.initUI();
                } catch (t) {
                    !1, this.error(t.message);
                }
            }, i.initUI = function() {
                u._moreGameData.isOpen && this.screenType ? (this._iconImage || (this._iconImage = new G(),
                        this.addChild(this._iconImage)), this._iconImage.skin = u.onGetImgSkinUrl(u._moreGameData.icon),
                    this._iconImageObj && (this._iconImage.size(this._iconImageObj.width, this._iconImageObj.height),
                        this._iconImage.pivot(this._iconImageObj.width / 2, this._iconImageObj.height / 2),
                        this._iconImage.pos(this._iconImageObj.width / 2, this._iconImageObj.height / 2)),
                    this.visible = !0, this.initEvent(), this.gameStopHD = !1, this.checkIconImgHD()) : this.visible = !1;
            }, i.setIconSize = function(t, i) {
                this._iconImage && (this._iconImage.size(t, i), this._iconImage.pivot(t / 2, i / 2),
                    this._iconImage.pos(t / 2, i / 2)), this._iconImageObj = {
                    width: t,
                    height: i
                };
            }, u.toLocaleDateString = function(t) {
                return u.getDateFormatStr(t, "/");
            }, u.getDateFormatStr = function(t, i) {
                void 0 === i && (i = "yynndd");
                var e = new Date(t),
                    s = e.getFullYear(),
                    n = e.getMonth() + 1,
                    h = e.getDate(),
                    o = e.getHours(),
                    r = e.getMinutes(),
                    a = e.getSeconds();
                switch (i) {
                    case "yynndd":
                        return s.toString() + "年" + n.toString() + "月" + h.toString() + "日";

                    case "/":
                        return s.toString() + "/" + n.toString() + "/" + h.toString();
                }
                return s.toString() + "年" + n.toString() + "月" + h.toString() + "日" + o.toString() + "时" + r.toString() + "分" + a.toString() + "秒";
            }, u.getDay = function(t) {
                var i = t.getMonth() + 1,
                    e = t.getDate();
                return t.getFullYear() + "" + (i < 10 ? "0" + i : i) + (e < 10 ? "0" + e : e);
            }, u.onGetAtlasDanImgUrl = function(t) {
                return u._moreGameData.imgPath + u._moreGameData.atlas + t + ".png";
            }, u.onGetImgSkinUrl = function(t) {
                return u._moreGameData.imgPath + t;
            }, u.onGetIconImgSkinUrl = function(t) {
                return u._moreGameData.iconPath + t;
            }, u._moreGameData = null, h(u, ["_http", function() {
                return this._http = new l.window.XMLHttpRequest();
            }]), u.__init$ = function() {
                c = function(t) {
                    function i() {
                        this.titleLabel = null, this.gameListBox = null, i.__super.call(this);
                    }
                    a(i, "", X);
                    var e = i.prototype;
                    return e.init = function(t, i, e) {
                        if (this.titleLabel ? this.titleLabel.text = t.title : (this.titleLabel = this.onCreateLabel(t.title, this, 32, "#3d3939"),
                                this.titleLabel.pos(8, 0), this.titleLabel.size(162, 50)), this.gameListBox)
                            for (s = 0,
                                n = this.gameListBox._children.length; s < n; s++)(h = this.gameListBox._children[s]).init(t.gameList[s], i, e);
                        else {
                            this.gameListBox = new X(), this.addChild(this.gameListBox);
                            for (var s = 0, n = t.gameList.length; s < n; s++) {
                                var h = new o();
                                h.init(t.gameList[s], i, e), h.x = 0 + 175 * s, h.y = 65, this.gameListBox.addChild(h);
                            }
                        }
                        this.size(695, 340);
                    }, e.onCreateLabel = function(t, i, e, s, n) {
                        void 0 === e && (e = 26), void 0 === s && (s = "#000000"), void 0 === n && (n = !0);
                        var h = new R();
                        return h.text = t, h.font = "Microsoft YaHei", h.fontSize = e, h.color = s, h.bold = n,
                            h.leading = 10, h.valign = "middle", h.align = "center", h.overflow = "hidden",
                            i.addChild(h), h;
                    }, i;
                }(), o = function(t) {
                    function i() {
                        this.kuangImg = null, this.iconNameLabel = null, this.iconImg = null, this.playImg = null,
                            this.itemData = null, this.callBackHandler = null, i.__super.call(this);
                    }
                    a(i, "", X);
                    var e = i.prototype;
                    return e.MoveGameItem = function() {}, e.initEvent = function() {
                        this.on("click", this, this.onItemClick);
                    }, e.onItemClick = function() {
                        null != this.callBackHandler && this.callBackHandler.runWith([this.itemData]);
                    }, e.init = function(t, i, e) {
                        if (this.itemData = t, this.callBackHandler = e, this.kuangImg ? this.kuangImg.skin = u.onGetAtlasDanImgUrl("dayuan") : this.kuangImg = this.onCreateImage(u.onGetAtlasDanImgUrl("dayuan"), this),
                            this.iconImg) this.iconImg.skin = u.onGetIconImgSkinUrl(t.icon);
                        else {
                            this.iconImg = this.onCreateImage(u.onGetIconImgSkinUrl(t.icon), this);
                            var s = new x();
                            s.graphics.drawCircle(71, 74, 68, "#ff0000"), this.iconImg.mask = s, this.iconImg.pos(13, 10);
                        }
                        this.iconNameLabel ? this.iconNameLabel.text = t.name : (this.iconNameLabel = this.onCreateLabel(t.name, this, 28, "#3d3939"),
                            this.iconNameLabel.pos(7, 165)), this.playImg ? this.playImg.skin = u.onGetAtlasDanImgUrl("img_play") : (this.playImg = this.onCreateImage(u.onGetAtlasDanImgUrl("img_play"), this),
                            this.playImg.pos(12, 210)), this.size(165, 270), this.initEvent();
                    }, e.onCreateLabel = function(t, i, e, s, n) {
                        void 0 === e && (e = 24), void 0 === s && (s = "#000000"), void 0 === n && (n = !1);
                        var h = new R();
                        return h.text = t, h.font = "Microsoft YaHei", h.fontSize = e, h.color = s, h.bold = n,
                            h.leading = 10, h.valign = "middle", h.align = "center", h.size(152, 44), h.overflow = "hidden",
                            i.addChild(h), h;
                    }, e.onCreateImage = function(t, i) {
                        var e = new G();
                        return e.skin = t, i.addChild(e), e;
                    }, i;
                }();
            }, u;
        }(),
        q = function(i) {
            function s() {
                this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, this.group = null,
                    this.isModal = !1, this.isShowEffect = !0, this.isPopupCenter = !0, this.closeType = null,
                    this._dragArea = null, this._param = null, this._effectTween = null, s.__super.call(this),
                    this.popupEffect = s.manager.popupEffectHandler, this.closeEffect = s.manager.closeEffectHandler,
                    this._dealDragArea(), this.on("click", this, this._onClick);
            }
            a(s, "laya.ui.Dialog", i);
            var t = s.prototype;
            return t._dealDragArea = function() {
                    var t = this.getChildByName("drag");
                    t && (this.dragArea = t._x + "," + t._y + "," + t.width + "," + t.height, t.removeSelf());
                }, t._onMouseDown = function(t) {
                    var i = this.getMousePoint();
                    this._dragArea.contains(i.x, i.y) ? this.startDrag() : this.stopDrag();
                }, t._onClick = function(t) {
                    var i = t.target;
                    if (i) switch (i.name) {
                        case "close":
                        case "cancel":
                        case "sure":
                        case "no":
                        case "ok":
                        case "yes":
                            return void this.close(i.name);
                    }
                }, t.open = function(t, i) {
                    void 0 === t && (t = !0), this._dealDragArea(), this._param = i, s.manager.open(this, t, this.isShowEffect),
                        s.manager.lock(!1);
                }, t.close = function(t) {
                    this.closeType = t, s.manager.close(this);
                }, t.destroy = function(t) {
                    void 0 === t && (t = !0), this.closeHandler = null, this.popupEffect = null, this.closeEffect = null,
                        this._dragArea = null, i.prototype.destroy.call(this, t);
                }, t.show = function(t, i) {
                    void 0 === t && (t = !1), void 0 === i && (i = !0), this._open(!1, t, i);
                }, t.popup = function(t, i) {
                    void 0 === t && (t = !1), void 0 === i && (i = !0), this._open(!0, t, i);
                }, t._open = function(t, i, e) {
                    this.isModal = t, this.isShowEffect = e, s.manager.lock(!0), this.open(i);
                }, n(0, t, "dragArea", function() {
                    return this._dragArea ? this._dragArea.toString() : null;
                }, function(t) {
                    if (t) {
                        var i = H.fillArray([0, 0, 0, 0], t, Number);
                        this._dragArea = new S(i[0], i[1], i[2], i[3]), this.on("mousedown", this, this._onMouseDown);
                    } else this._dragArea = null, this.off("mousedown", this, this._onMouseDown);
                }), n(0, t, "isPopup", function() {
                    return null != this.parent;
                }), n(0, t, "zOrder", i.prototype._$get_zOrder, function(t) {
                    _.superSet(N, this, "zOrder", t), s.manager._checkMask();
                }), n(1, s, "manager", function() {
                    return s._manager = s._manager || new A();
                }, function(t) {
                    s._manager = t;
                }), s.setLockView = function(t) {
                    s.manager.setLockView(t);
                }, s.lock = function(t) {
                    s.manager.lock(t);
                }, s.closeAll = function() {
                    s.manager.closeAll();
                }, s.getDialogsByGroup = function(t) {
                    return s.manager.getDialogsByGroup(t);
                }, s.closeByGroup = function(t) {
                    return s.manager.closeByGroup(t);
                }, s.CLOSE = "close", s.CANCEL = "cancel", s.SURE = "sure", s.NO = "no", s.YES = "yes",
                s.OK = "ok", s._manager = null, s;
        }(N),
        Q = function(t) {
            function i() {
                this._items = null, this._selectedIndex = 0, i.__super.call(this), this._setIndexHandler = g.create(this, this.setIndex, null, !1);
            }
            a(i, "laya.ui.ViewStack", t);
            var e = i.prototype;
            return _.imps(e, {
                "laya.ui.IItem": !0
            }), e.setItems = function(t) {
                this.removeChildren();
                for (var i = 0, e = 0, s = t.length; e < s; e++) {
                    var n = t[e];
                    n && (n.name = "item" + i, this.addChild(n), i++);
                }
                this.initItems();
            }, e.addItem = function(t) {
                t.name = "item" + this._items.length, this.addChild(t), this.initItems();
            }, e._afterInited = function() {
                this.initItems();
            }, e.initItems = function() {
                this._items = [];
                for (var t = 0; t < 1e4; t++) {
                    var i = this.getChildByName("item" + t);
                    if (null == i) break;
                    this._items.push(i), i.visible = t == this._selectedIndex;
                }
            }, e.setSelect = function(t, i) {
                this._items && -1 < t && t < this._items.length && (this._items[t].visible = i);
            }, e.setIndex = function(t) {
                this.selectedIndex = t;
            }, n(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
                if ("number" == typeof(this._dataSource = t) && Math.floor(t) == t || "string" == typeof t) this.selectedIndex = parseInt(t);
                else
                    for (var i in this._dataSource) this.hasOwnProperty(i) && (this[i] = this._dataSource[i]);
            }), n(0, e, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(t) {
                this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t,
                    this.setSelect(this._selectedIndex, !0));
            }), n(0, e, "selection", function() {
                return -1 < this._selectedIndex && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
            }, function(t) {
                this.selectedIndex = this._items.indexOf(t);
            }), n(0, e, "items", function() {
                return this._items;
            }), n(0, e, "setIndexHandler", function() {
                return this._setIndexHandler;
            }, function(t) {
                this._setIndexHandler = t;
            }), i;
        }(X),
        K = function(t) {
            function i() {
                this._space = 0, this._align = "none", this._itemChanged = !1, i.__super.call(this);
            }
            a(i, "laya.ui.LayoutBox", X);
            var e = i.prototype;
            return e.addChild = function(t) {
                return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChild.call(this, t);
            }, e.onResize = function(t) {
                this._setItemChanged();
            }, e.addChildAt = function(t, i) {
                return t.on("resize", this, this.onResize), this._setItemChanged(), laya.display.Node.prototype.addChildAt.call(this, t, i);
            }, e.removeChildAt = function(t) {
                return this.getChildAt(t).off("resize", this, this.onResize), this._setItemChanged(),
                    laya.display.Node.prototype.removeChildAt.call(this, t);
            }, e.refresh = function() {
                this._setItemChanged();
            }, e.changeItems = function() {
                this._itemChanged = !1;
            }, e.sortItem = function(t) {
                t && t.sort(function(t, i) {
                    return t.y - i.y;
                });
            }, e._setItemChanged = function() {
                this._itemChanged || (this._itemChanged = !0, this.callLater(this.changeItems));
            }, n(0, e, "space", function() {
                return this._space;
            }, function(t) {
                this._space = t, this._setItemChanged();
            }), n(0, e, "align", function() {
                return this._align;
            }, function(t) {
                this._align = t, this._setItemChanged();
            }), i;
        }(),
        Z = function(t) {
            function e(t, i) {
                this.selectHandler = null, this._items = null, this._selectedIndex = -1, this._skin = null,
                    this._direction = "horizontal", this._space = 0, this._labels = null, this._labelColors = null,
                    this._labelFont = null, this._labelStrokeColor = null, this._strokeColors = null,
                    this._labelStroke = NaN, this._labelSize = 0, this._labelBold = !1, this._labelPadding = null,
                    this._labelAlign = null, this._stateNum = 0, this._labelChanged = !1, e.__super.call(this),
                    this.skin = i, this.labels = t;
            }
            a(e, "laya.ui.UIGroup", t);
            var i = e.prototype;
            return _.imps(i, {
                "laya.ui.IItem": !0
            }), i.preinitialize = function() {
                this.mouseEnabled = !0;
            }, i.destroy = function(t) {
                void 0 === t && (t = !0), laya.ui.UIComponent.prototype.destroy.call(this, t), this._items && (this._items.length = 0),
                    this._items = null, this.selectHandler = null;
            }, i.addItem = function(t, i) {
                void 0 === i && (i = !0);
                var e = t,
                    s = this._items.length;
                if (e.name = "item" + s, this.addChild(e), this.initItems(), i && 0 < s) {
                    var n = this._items[s - 1];
                    "horizontal" == this._direction ? e.x = n._x + n.width + this._space : e.y = n._y + n.height + this._space;
                } else i && (e.x = 0, e.y = 0);
                return s;
            }, i.delItem = function(t, i) {
                void 0 === i && (i = !0);
                var e = this._items.indexOf(t);
                if (-1 != e) {
                    var s = t;
                    this.removeChild(s);
                    for (var n = e + 1, h = this._items.length; n < h; n++) {
                        var o = this._items[n];
                        o.name = "item" + (n - 1), i && ("horizontal" == this._direction ? o.x -= s.width + this._space : o.y -= s.height + this._space);
                    }
                    if (this.initItems(), -1 < this._selectedIndex) {
                        var r;
                        r = this._selectedIndex < this._items.length ? this._selectedIndex : this._selectedIndex - 1,
                            this._selectedIndex = -1, this.selectedIndex = r;
                    }
                }
            }, i._afterInited = function() {
                this.initItems();
            }, i.initItems = function() {
                this._items || (this._items = []);
                for (var t = this._items.length = 0; t < 1e4; t++) {
                    var i = this.getChildByName("item" + t);
                    if (null == i) break;
                    this._items.push(i), i.selected = t === this._selectedIndex, i.clickHandler = g.create(this, this.itemClick, [t], !1);
                }
            }, i.itemClick = function(t) {
                this.selectedIndex = t;
            }, i.setSelect = function(t, i) {
                this._items && -1 < t && t < this._items.length && (this._items[t].selected = i);
            }, i._skinLoaded = function() {
                this._setLabelChanged(), this.event("loaded");
            }, i.createItem = function(t, i) {
                return null;
            }, i.changeLabels = function() {
                if (this._labelChanged = !1, this._items)
                    for (var t = 0, i = 0, e = this._items.length; i < e; i++) {
                        var s = this._items[i];
                        this._skin && (s.skin = this._skin), this._labelColors && (s.labelColors = this._labelColors),
                            this._labelSize && (s.labelSize = this._labelSize), this._labelStroke && (s.labelStroke = this._labelStroke),
                            this._labelStrokeColor && (s.labelStrokeColor = this._labelStrokeColor), this._strokeColors && (s.strokeColors = this._strokeColors),
                            this._labelBold && (s.labelBold = this._labelBold), this._labelPadding && (s.labelPadding = this._labelPadding),
                            this._labelAlign && (s.labelAlign = this._labelAlign), this._stateNum && (s.stateNum = this._stateNum),
                            this._labelFont && (s.labelFont = this._labelFont), "horizontal" === this._direction ? (s.y = 0,
                                s.x = t, t += s.width + this._space) : (s.x = 0, s.y = t, t += s.height + this._space);
                    }
                this._sizeChanged();
            }, i.commitMeasure = function() {
                this.runCallLater(this.changeLabels);
            }, i._setLabelChanged = function() {
                this._labelChanged || (this._labelChanged = !0, this.callLater(this.changeLabels));
            }, n(0, i, "labelStrokeColor", function() {
                return this._labelStrokeColor;
            }, function(t) {
                this._labelStrokeColor != t && (this._labelStrokeColor = t, this._setLabelChanged());
            }), n(0, i, "skin", function() {
                return this._skin;
            }, function(t) {
                this._skin != t && (this._skin = t, this._skin && !v.getRes(this._skin) ? _.loader.load(this._skin, g.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), n(0, i, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(t) {
                this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t,
                    this.setSelect(t, !0), this.event("change"), this.selectHandler && this.selectHandler.runWith(this._selectedIndex));
            }), n(0, i, "labels", function() {
                return this._labels;
            }, function(t) {
                if (this._labels != t) {
                    if (this._labels = t, this.removeChildren(), this._setLabelChanged(), this._labels)
                        for (var i = this._labels.split(","), e = 0, s = i.length; e < s; e++) {
                            var n = this.createItem(this._skin, i[e]);
                            n.name = "item" + e, this.addChild(n);
                        }
                    this.initItems();
                }
            }), n(0, i, "strokeColors", function() {
                return this._strokeColors;
            }, function(t) {
                this._strokeColors != t && (this._strokeColors = t, this._setLabelChanged());
            }), n(0, i, "labelColors", function() {
                return this._labelColors;
            }, function(t) {
                this._labelColors != t && (this._labelColors = t, this._setLabelChanged());
            }), n(0, i, "labelStroke", function() {
                return this._labelStroke;
            }, function(t) {
                this._labelStroke != t && (this._labelStroke = t, this._setLabelChanged());
            }), n(0, i, "labelSize", function() {
                return this._labelSize;
            }, function(t) {
                this._labelSize != t && (this._labelSize = t, this._setLabelChanged());
            }), n(0, i, "stateNum", function() {
                return this._stateNum;
            }, function(t) {
                this._stateNum != t && (this._stateNum = t, this._setLabelChanged());
            }), n(0, i, "labelBold", function() {
                return this._labelBold;
            }, function(t) {
                this._labelBold != t && (this._labelBold = t, this._setLabelChanged());
            }), n(0, i, "labelFont", function() {
                return this._labelFont;
            }, function(t) {
                this._labelFont != t && (this._labelFont = t, this._setLabelChanged());
            }), n(0, i, "labelPadding", function() {
                return this._labelPadding;
            }, function(t) {
                this._labelPadding != t && (this._labelPadding = t, this._setLabelChanged());
            }), n(0, i, "direction", function() {
                return this._direction;
            }, function(t) {
                this._direction = t, this._setLabelChanged();
            }), n(0, i, "space", function() {
                return this._space;
            }, function(t) {
                this._space = t, this._setLabelChanged();
            }), n(0, i, "items", function() {
                return this._items;
            }), n(0, i, "selection", function() {
                return -1 < this._selectedIndex && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
            }, function(t) {
                this.selectedIndex = this._items.indexOf(t);
            }), n(0, i, "dataSource", t.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : _.superSet(X, this, "dataSource", t);
            }), e;
        }(X),
        tt = function(t) {
            function e(t, i) {
                void 0 === i && (i = ""), e.__super.call(this, t, i);
            }
            a(e, "laya.ui.CheckBox", t);
            var i = e.prototype;
            return i.preinitialize = function() {
                laya.ui.UIComponent.prototype.preinitialize.call(this), this.toggle = !0, this._autoSize = !1;
            }, i.initialize = function() {
                t.prototype.initialize.call(this), this.createText(), this._text.align = "left",
                    this._text.valign = "top", this._text.width = 0;
            }, n(0, i, "dataSource", t.prototype._$get_dataSource, function(t) {
                "boolean" == typeof(this._dataSource = t) ? this.selected = t: "string" == typeof t ? this.selected = "true" === t : _.superSet(E, this, "dataSource", t);
            }), e;
        }(E),
        it = function(t) {
            function i() {
                this._list = null, this._source = null, this._renderHandler = null, this._spaceLeft = 10,
                    this._spaceBottom = 0, this._keepStatus = !0, i.__super.call(this), this.width = this.height = 200;
            }
            a(i, "laya.ui.Tree", t);
            var e = i.prototype;
            return _.imps(e, {
                "laya.ui.IRender": !0
            }), e.destroy = function(t) {
                void 0 === t && (t = !0), laya.ui.UIComponent.prototype.destroy.call(this, t), this._list && this._list.destroy(t),
                    this._list = null, this._source = null, this._renderHandler = null;
            }, e.createChildren = function() {
                this.addChild(this._list = new st()), this._list.renderHandler = g.create(this, this.renderItem, null, !1),
                    this._list.repeatX = 1, this._list.on("change", this, this.onListChange);
            }, e.onListChange = function(t) {
                this.event("change");
            }, e.getArray = function() {
                var t, i = [];
                for (var e in this._source) t = this._source[e], this.getParentOpenStatus(t) && (t.x = this._spaceLeft * this.getDepth(t),
                    i.push(t));
                return i;
            }, e.getDepth = function(t, i) {
                return void 0 === i && (i = 0), null == t.nodeParent ? i : this.getDepth(t.nodeParent, i + 1);
            }, e.getParentOpenStatus = function(t) {
                var i = t.nodeParent;
                return null == i || !!i.isOpen && (null == i.nodeParent || this.getParentOpenStatus(i));
            }, e.renderItem = function(t, i) {
                var e = t.dataSource;
                if (e) {
                    t.left = e.x;
                    var s = t.getChildByName("arrow");
                    s && (e.hasChild ? (s.visible = !0, s.index = e.isOpen ? 1 : 0, s.tag = i, s.off("click", this, this.onArrowClick),
                        s.on("click", this, this.onArrowClick)) : s.visible = !1);
                    var n = t.getChildByName("folder");
                    n && (2 == n.clipY ? n.index = e.isDirectory ? 0 : 1 : n.index = e.isDirectory ? e.isOpen ? 1 : 0 : 2),
                        this._renderHandler && this._renderHandler.runWith([t, i]);
                }
            }, e.onArrowClick = function(t) {
                var i = t.currentTarget.tag;
                this._list.array[i].isOpen = !this._list.array[i].isOpen, this.event("open"), this._list.array = this.getArray();
            }, e.setItemState = function(t, i) {
                this._list.array[t] && (this._list.array[t].isOpen = i, this._list.array = this.getArray());
            }, e.fresh = function() {
                this._list.array = this.getArray(), this.repaint();
            }, e.parseXml = function(t, i, e, s) {
                var n, h = t.childNodes,
                    o = h.length;
                if (!s) {
                    n = {};
                    var r, a = t.attributes;
                    for (var l in a) {
                        var c = (r = a[l]).nodeName,
                            u = r.nodeValue;
                        n[c] = "true" == u || "false" != u && u;
                    }
                    n.nodeParent = e, 0 < o && (n.isDirectory = !0), n.hasChild = 0 < o, i.push(n);
                }
                for (var _ = 0; _ < o; _++) {
                    var d = h[_];
                    this.parseXml(d, i, n, !1);
                }
            }, e.parseOpenStatus = function(t, i) {
                for (var e = 0, s = i.length; e < s; e++) {
                    var n = i[e];
                    if (n.isDirectory)
                        for (var h = 0, o = t.length; h < o; h++) {
                            var r = t[h];
                            if (r.isDirectory && this.isSameParent(r, n) && n.label == r.label) {
                                n.isOpen = r.isOpen;
                                break;
                            }
                        }
                }
            }, e.isSameParent = function(t, i) {
                return null == t.nodeParent && null == i.nodeParent || null != t.nodeParent && null != i.nodeParent && (t.nodeParent.label == i.nodeParent.label && this.isSameParent(t.nodeParent, i.nodeParent));
            }, e.filter = function(t) {
                if (Boolean(t)) {
                    var i = [];
                    this.getFilterSource(this._source, i, t), this._list.array = i;
                } else this._list.array = this.getArray();
            }, e.getFilterSource = function(t, i, e) {
                var s;
                for (var n in e = e.toLocaleLowerCase(), t) !(s = t[n]).isDirectory && -1 < String(s.label).toLowerCase().indexOf(e) && (s.x = 0,
                    i.push(s)), s.child && 0 < s.child.length && this.getFilterSource(s.child, i, e);
            }, n(0, e, "spaceBottom", function() {
                return this._list.spaceY;
            }, function(t) {
                this._list.spaceY = t;
            }), n(0, e, "keepStatus", function() {
                return this._keepStatus;
            }, function(t) {
                this._keepStatus = t;
            }), n(0, e, "itemRender", function() {
                return this._list.itemRender;
            }, function(t) {
                this._list.itemRender = t;
            }), n(0, e, "array", function() {
                return this._list.array;
            }, function(t) {
                this._keepStatus && this._list.array && t && this.parseOpenStatus(this._list.array, t),
                    this._source = t, this._list.array = this.getArray();
            }), n(0, e, "mouseHandler", function() {
                return this._list.mouseHandler;
            }, function(t) {
                this._list.mouseHandler = t;
            }), n(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
                this._dataSource = t, _.superSet(X, this, "dataSource", t);
            }), n(0, e, "source", function() {
                return this._source;
            }), n(0, e, "scrollBar", function() {
                return this._list.scrollBar;
            }), n(0, e, "list", function() {
                return this._list;
            }), n(0, e, "scrollBarSkin", function() {
                return this._list.vScrollBarSkin;
            }, function(t) {
                this._list.vScrollBarSkin = t;
            }), n(0, e, "renderHandler", function() {
                return this._renderHandler;
            }, function(t) {
                this._renderHandler = t;
            }), n(0, e, "selectedIndex", function() {
                return this._list.selectedIndex;
            }, function(t) {
                this._list.selectedIndex = t;
            }), n(0, e, "spaceLeft", function() {
                return this._spaceLeft;
            }, function(t) {
                this._spaceLeft = t;
            }), n(0, e, "selectedItem", function() {
                return this._list.selectedItem;
            }, function(t) {
                this._list.selectedItem = t;
            }), n(0, e, "width", t.prototype._$get_width, function(t) {
                _.superSet(X, this, "width", t), this._list.width = t;
            }), n(0, e, "height", t.prototype._$get_height, function(t) {
                _.superSet(X, this, "height", t), this._list.height = t;
            }), n(0, e, "xml", null, function(t) {
                var i = [];
                this.parseXml(t.childNodes[0], i, null, !0), this.array = i;
            }), n(0, e, "selectedPath", function() {
                return this._list.selectedItem ? this._list.selectedItem.path : null;
            }), i;
        }(X),
        et = function(t) {
            function i() {
                this._content = null, this._vScrollBar = null, this._hScrollBar = null, this._scrollChanged = !1,
                    this._usedCache = null, this._elasticEnabled = !1, i.__super.call(this), this.width = this.height = 100;
            }
            a(i, "laya.ui.Panel", t);
            var e = i.prototype;
            return e.destroy = function(t) {
                void 0 === t && (t = !0), laya.ui.UIComponent.prototype.destroy.call(this, t), this._content && this._content.destroy(t),
                    this._vScrollBar && this._vScrollBar.destroy(t), this._hScrollBar && this._hScrollBar.destroy(t),
                    this._vScrollBar = null, this._hScrollBar = null, this._content = null;
            }, e.destroyChildren = function() {
                this._content.destroyChildren();
            }, e.createChildren = function() {
                laya.display.Node.prototype.addChild.call(this, this._content = new X());
            }, e.addChild = function(t) {
                return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChild(t);
            }, e.onResize = function() {
                this._setScrollChanged();
            }, e.addChildAt = function(t, i) {
                return t.on("resize", this, this.onResize), this._setScrollChanged(), this._content.addChildAt(t, i);
            }, e.removeChild = function(t) {
                return t.off("resize", this, this.onResize), this._setScrollChanged(), this._content.removeChild(t);
            }, e.removeChildAt = function(t) {
                return this.getChildAt(t).off("resize", this, this.onResize), this._setScrollChanged(),
                    this._content.removeChildAt(t);
            }, e.removeChildren = function(t, i) {
                return void 0 === t && (t = 0), void 0 === i && (i = 2147483647), this._content.removeChildren(t, i),
                    this._setScrollChanged(), this;
            }, e.getChildAt = function(t) {
                return this._content.getChildAt(t);
            }, e.getChildByName = function(t) {
                return this._content.getChildByName(t);
            }, e.getChildIndex = function(t) {
                return this._content.getChildIndex(t);
            }, e.changeScroll = function() {
                this._scrollChanged = !1;
                var t = this.contentWidth || 1,
                    i = this.contentHeight || 1,
                    e = this._vScrollBar,
                    s = this._hScrollBar,
                    n = e && i > this._height,
                    h = s && t > this._width,
                    o = n ? this._width - e.width : this._width,
                    r = h ? this._height - s.height : this._height;
                e && (e.x = this._width - e.width, e.y = 0, e.height = this._height - (h ? s.height : 0),
                        e.scrollSize = Math.max(.033 * this._height, 1), e.thumbPercent = r / i, e.setScroll(0, i - r, e.value)),
                    s && (s.x = 0, s.y = this._height - s.height, s.width = this._width - (n ? e.width : 0),
                        s.scrollSize = Math.max(.033 * this._width, 1), s.thumbPercent = o / t, s.setScroll(0, t - o, s.value));
            }, e._sizeChanged = function() {
                laya.ui.UIComponent.prototype._sizeChanged.call(this), this.setContentSize(this._width, this._height);
            }, e.setContentSize = function(t, i) {
                var e = this._content;
                e.width = t, e.height = i, e._style.scrollRect || (e.scrollRect = S.create()), e._style.scrollRect.setTo(0, 0, t, i),
                    e.scrollRect = e.scrollRect;
            }, e.onScrollBarChange = function(t) {
                var i = this._content._style.scrollRect;
                if (i) {
                    var e = Math.round(t.value);
                    t.isVertical ? i.y = e : i.x = e, this._content.scrollRect = i;
                }
            }, e.scrollTo = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = 0), this.vScrollBar && (this.vScrollBar.value = i),
                    this.hScrollBar && (this.hScrollBar.value = t);
            }, e.refresh = function() {
                this.changeScroll();
            }, e.onScrollStart = function() {
                this._usedCache || (this._usedCache = _.superGet(X, this, "cacheAs")), _.superSet(X, this, "cacheAs", "none"),
                    this._hScrollBar && this._hScrollBar.once("end", this, this.onScrollEnd), this._vScrollBar && this._vScrollBar.once("end", this, this.onScrollEnd);
            }, e.onScrollEnd = function() {
                _.superSet(X, this, "cacheAs", this._usedCache);
            }, e._setScrollChanged = function() {
                this._scrollChanged || (this._scrollChanged = !0, this.callLater(this.changeScroll));
            }, n(0, e, "numChildren", function() {
                return this._content.numChildren;
            }), n(0, e, "hScrollBarSkin", function() {
                return this._hScrollBar ? this._hScrollBar.skin : null;
            }, function(t) {
                null == this._hScrollBar && (laya.display.Node.prototype.addChild.call(this, this._hScrollBar = new ct()),
                    this._hScrollBar.on("change", this, this.onScrollBarChange, [this._hScrollBar]),
                    this._hScrollBar.target = this._content, this._hScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0,
                    this._setScrollChanged()), this._hScrollBar.skin = t;
            }), n(0, e, "contentWidth", function() {
                for (var t = 0, i = this._content.numChildren - 1; - 1 < i; i--) {
                    var e = this._content.getChildAt(i);
                    t = Math.max(e._x + e.width * e.scaleX - e.pivotX, t);
                }
                return t;
            }), n(0, e, "contentHeight", function() {
                for (var t = 0, i = this._content.numChildren - 1; - 1 < i; i--) {
                    var e = this._content.getChildAt(i);
                    t = Math.max(e._y + e.height * e.scaleY - e.pivotY, t);
                }
                return t;
            }), n(0, e, "width", t.prototype._$get_width, function(t) {
                _.superSet(X, this, "width", t), this._setScrollChanged();
            }), n(0, e, "hScrollBar", function() {
                return this._hScrollBar;
            }), n(0, e, "content", function() {
                return this._content;
            }), n(0, e, "height", t.prototype._$get_height, function(t) {
                _.superSet(X, this, "height", t), this._setScrollChanged();
            }), n(0, e, "vScrollBarSkin", function() {
                return this._vScrollBar ? this._vScrollBar.skin : null;
            }, function(t) {
                null == this._vScrollBar && (laya.display.Node.prototype.addChild.call(this, this._vScrollBar = new at()),
                    this._vScrollBar.on("change", this, this.onScrollBarChange, [this._vScrollBar]),
                    this._vScrollBar.target = this._content, this._vScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0,
                    this._setScrollChanged()), this._vScrollBar.skin = t;
            }), n(0, e, "vScrollBar", function() {
                return this._vScrollBar;
            }), n(0, e, "cacheAs", t.prototype._$get_cacheAs, function(t) {
                _.superSet(X, this, "cacheAs", t), this._usedCache = null, "none" !== t ? (this._hScrollBar && this._hScrollBar.on("start", this, this.onScrollStart),
                    this._vScrollBar && this._vScrollBar.on("start", this, this.onScrollStart)) : (this._hScrollBar && this._hScrollBar.off("start", this, this.onScrollStart),
                    this._vScrollBar && this._vScrollBar.off("start", this, this.onScrollStart));
            }), n(0, e, "elasticEnabled", function() {
                return this._elasticEnabled;
            }, function(t) {
                this._elasticEnabled = t, this._vScrollBar && (this._vScrollBar.elasticDistance = t ? 200 : 0),
                    this._hScrollBar && (this._hScrollBar.elasticDistance = t ? 200 : 0);
            }), i;
        }(X),
        st = function(t) {
            function i() {
                this.selectHandler = null, this.renderHandler = null, this.mouseHandler = null,
                    this.selectEnable = !1, this.totalPage = 0, this._$componentType = "List", this._content = null,
                    this._scrollBar = null, this._itemRender = null, this._repeatX = 0, this._repeatY = 0,
                    this._repeatX2 = 0, this._repeatY2 = 0, this._spaceX = 0, this._spaceY = 0, this._array = null,
                    this._startIndex = 0, this._selectedIndex = -1, this._page = 0, this._isVertical = !0,
                    this._cellSize = 20, this._cellOffset = 0, this._isMoved = !1, this.cacheContent = !1,
                    this._createdLine = 0, this._cellChanged = !1, this._usedCache = null, this._elasticEnabled = !1,
                    this._preLen = 0, i.__super.call(this), this._cells = [], this._offset = new b();
            }
            a(i, "laya.ui.List", t);
            var e = i.prototype;
            return _.imps(e, {
                "laya.ui.IRender": !0,
                "laya.ui.IItem": !0
            }), e.destroy = function(t) {
                void 0 === t && (t = !0), this._content && this._content.destroy(t), this._scrollBar && this._scrollBar.destroy(t),
                    laya.ui.UIComponent.prototype.destroy.call(this, t), this._content = null, this._scrollBar = null,
                    this._itemRender = null, this._cells = null, this._array = null, this.selectHandler = this.renderHandler = this.mouseHandler = null;
            }, e.createChildren = function() {
                this.addChild(this._content = new X());
            }, e.onScrollStart = function() {
                this._usedCache || (this._usedCache = _.superGet(X, this, "cacheAs")), _.superSet(X, this, "cacheAs", "none"),
                    this._scrollBar.once("end", this, this.onScrollEnd);
            }, e.onScrollEnd = function() {
                _.superSet(X, this, "cacheAs", this._usedCache);
            }, e._removePreScrollBar = function() {
                var t = this.removeChildByName("scrollBar");
                t && t.destroy(!0);
            }, e.changeCells = function() {
                if (this._cellChanged = !1, this._itemRender) {
                    this.scrollBar = this.getChildByName("scrollBar");
                    var t = this._getOneCell(),
                        i = t.width + this._spaceX || 1,
                        e = t.height + this._spaceY || 1;
                    0 < this._width && (this._repeatX2 = this._isVertical ? Math.round(this._width / i) : Math.ceil(this._width / i)),
                        0 < this._height && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / e) : Math.round(this._height / e));
                    var s = this._width ? this._width : i * this.repeatX - this._spaceX,
                        n = this._height ? this._height : e * this.repeatY - this._spaceY;
                    this._cellSize = this._isVertical ? e : i, this._cellOffset = this._isVertical ? e * Math.max(this._repeatY2, this._repeatY) - n - this._spaceY : i * Math.max(this._repeatX2, this._repeatX) - s - this._spaceX,
                        this._isVertical && this.vScrollBarSkin ? this._scrollBar.height = n : !this._isVertical && this.hScrollBarSkin && (this._scrollBar.width = s),
                        this.setContentSize(s, n);
                    var h = this._isVertical ? this.repeatX : this.repeatY,
                        o = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                    this._createItems(0, h, o), this._createdLine = o, this._array && (this.array = this._array,
                        this.runCallLater(this.renderItems));
                }
            }, e._getOneCell = function() {
                if (0 === this._cells.length) {
                    var t = this.createItem();
                    if (this._offset.setTo(t._x, t._y), this.cacheContent) return t;
                    this._cells.push(t);
                }
                return this._cells[0];
            }, e._createItems = function(t, i, e) {
                var s = this._content,
                    n = this._getOneCell(),
                    h = n.width + this._spaceX,
                    o = n.height + this._spaceY;
                if (this.cacheContent) {
                    var r = new X();
                    r.cacheAs = "normal", r.pos((this._isVertical ? 0 : t) * h, (this._isVertical ? t : 0) * o),
                        this._content.addChild(r), s = r;
                } else {
                    for (var a = [], l = this._cells.length - 1; - 1 < l; l--) {
                        var c = this._cells[l];
                        c.removeSelf(), a.push(c);
                    }
                    this._cells.length = 0;
                }
                for (var u = t; u < e; u++)
                    for (var _ = 0; _ < i; _++)(n = a && a.length ? a.pop() : this.createItem()).x = (this._isVertical ? _ : u) * h - s._x,
                        n.y = (this._isVertical ? u : _) * o - s._y, n.name = "item" + (u * i + _), s.addChild(n),
                        this.addCell(n);
            }, e.createItem = function() {
                var t = [];
                if ("function" == typeof this._itemRender) var i = new this._itemRender();
                else i = w.createComp(this._itemRender, null, null, t);
                if (0 == t.length && i._watchMap) {
                    var e = i._watchMap;
                    for (var s in e)
                        for (var n = e[s], h = 0; h < n.length; h++) {
                            var o = n[h];
                            t.push(o.comp, o.prop, o.value);
                        }
                }
                return t.length && (i._$bindData = t), i;
            }, e.addCell = function(t) {
                t.on("click", this, this.onCellMouse), t.on("rightclick", this, this.onCellMouse),
                    t.on("mouseover", this, this.onCellMouse), t.on("mouseout", this, this.onCellMouse),
                    t.on("mousedown", this, this.onCellMouse), t.on("mouseup", this, this.onCellMouse),
                    this._cells.push(t);
            }, e._afterInited = function() {
                this.initItems();
            }, e.initItems = function() {
                if (!this._itemRender && null != this.getChildByName("item0")) {
                    this.repeatX = 1;
                    for (var t = 0, i = t = 0; i < 1e4; i++) {
                        var e = this.getChildByName("item" + i);
                        if (!e) break;
                        this.addCell(e), t++;
                    }
                    this.repeatY = t;
                }
            }, e.setContentSize = function(t, i) {
                this._content.width = t, this._content.height = i, (this._scrollBar || 0 != this._offset.x || 0 != this._offset.y) && (this._content._style.scrollRect || (this._content.scrollRect = S.create()),
                        this._content._style.scrollRect.setTo(-this._offset.x, -this._offset.y, t, i), this._content.scrollRect = this._content.scrollRect),
                    this.event("resize");
            }, e.onCellMouse = function(t) {
                "mousedown" === t.type && (this._isMoved = !1);
                var i = t.currentTarget,
                    e = this._startIndex + this._cells.indexOf(i);
                e < 0 || ("click" === t.type || "rightclick" === t.type ? this.selectEnable && !this._isMoved ? this.selectedIndex = e : this.changeCellState(i, !0, 0) : "mouseover" !== t.type && "mouseout" !== t.type || this._selectedIndex === e || this.changeCellState(i, "mouseover" === t.type, 0),
                    this.mouseHandler && this.mouseHandler.runWith([t, e]));
            }, e.changeCellState = function(t, i, e) {
                var s = t.getChildByName("selectBox");
                s && (this.selectEnable = !0, s.visible = i, s.index = e);
            }, e._sizeChanged = function() {
                laya.ui.UIComponent.prototype._sizeChanged.call(this), this.setContentSize(this.width, this.height),
                    this._scrollBar && this.callLater(this.onScrollBarChange);
            }, e.onScrollBarChange = function(t) {
                this.runCallLater(this.changeCells);
                var i = this._scrollBar.value,
                    e = this._isVertical ? this.repeatX : this.repeatY,
                    s = this._isVertical ? this.repeatY : this.repeatX,
                    n = Math.floor(i / this._cellSize);
                if (this.cacheContent) o = s + 1, this._createdLine - n < o && (this._createItems(this._createdLine, e, this._createdLine + o),
                    this.renderItems(this._createdLine * e, 0), this._createdLine += o);
                else {
                    var h = n * e,
                        o = 0;
                    if (h > this._startIndex) {
                        o = h - this._startIndex;
                        var r = !0,
                            a = this._startIndex + e * (s + 1);
                        this._isMoved = !0;
                    } else h < this._startIndex && (o = this._startIndex - h, r = !1, a = this._startIndex - 1,
                        this._isMoved = !0);
                    for (var l = 0; l < o; l++) {
                        if (r) {
                            var c = this._cells.shift();
                            this._cells[this._cells.length] = c;
                            var u = a + l;
                        } else c = this._cells.pop(), this._cells.unshift(c), u = a - l;
                        var _ = Math.floor(u / e) * this._cellSize;
                        this._isVertical ? c.y = _ : c.x = _, this.renderItem(c, u);
                    }
                    this._startIndex = h, this.changeSelectStatus();
                }
                var d = this._content._style.scrollRect;
                this._isVertical ? (d.y = i - this._offset.y, d.x = -this._offset.x) : (d.y = -this._offset.y,
                    d.x = i - this._offset.x), this._content.scrollRect = d;
            }, e.posCell = function(t, i) {
                if (this._scrollBar) {
                    var e = this._isVertical ? this.repeatX : this.repeatY,
                        s = (this._isVertical ? this.repeatY : this.repeatX,
                            Math.floor(i / e) * this._cellSize);
                    this._isVertical ? t._y = s : t.x = s;
                }
            }, e.changeSelectStatus = function() {
                for (var t = 0, i = this._cells.length; t < i; t++) this.changeCellState(this._cells[t], this._selectedIndex === this._startIndex + t, 1);
            }, e.renderItems = function(t, i) {
                void 0 === t && (t = 0), void 0 === i && (i = 0);
                for (var e = t, s = i || this._cells.length; e < s; e++) this.renderItem(this._cells[e], this._startIndex + e);
                this.changeSelectStatus();
            }, e.renderItem = function(t, i) {
                this._array && 0 <= i && i < this._array.length ? (t.visible = !0, t._$bindData ? (t._dataSource = this._array[i],
                        this._bindData(t, this._array[i])) : t.dataSource = this._array[i], this.cacheContent || this.posCell(t, i),
                    this.hasListener("render") && this.event("render", [t, i]), this.renderHandler && this.renderHandler.runWith([t, i])) : (t.visible = !1,
                    t.dataSource = null);
            }, e._bindData = function(t, i) {
                for (var e = t._$bindData, s = 0, n = e.length; s < n; s++) {
                    var h = e[s++],
                        o = e[s++],
                        r = e[s],
                        a = H.getBindFun(r);
                    h[o] = a.call(this, i);
                }
            }, e.updateArray = function(t) {
                this._array = t;
                var i = 0;
                if (this._array && (0 <= (i = this._preLen - this._startIndex) && this.renderItems(i),
                        this._preLen = this._array.length), this._scrollBar) {
                    var e = t.length,
                        s = this._isVertical ? this.repeatX : this.repeatY,
                        n = this._isVertical ? this.repeatY : this.repeatX,
                        h = Math.ceil(e / s);
                    n <= h && (this._scrollBar.thumbPercent = n / h, this._scrollBar.slider._max = (h - n) * this._cellSize + this._cellOffset);
                }
            }, e.refresh = function() {
                this.array = this._array;
            }, e.getItem = function(t) {
                return -1 < t && t < this._array.length ? this._array[t] : null;
            }, e.changeItem = function(t, i) {
                -1 < t && t < this._array.length && (this._array[t] = i, t >= this._startIndex && t < this._startIndex + this._cells.length && this.renderItem(this.getCell(t), t));
            }, e.setItem = function(t, i) {
                this.changeItem(t, i);
            }, e.addItem = function(t) {
                this._array.push(t), this.array = this._array;
            }, e.addItemAt = function(t, i) {
                this._array.splice(i, 0, t), this.array = this._array;
            }, e.deleteItem = function(t) {
                this._array.splice(t, 1), this.array = this._array;
            }, e.getCell = function(t) {
                return this.runCallLater(this.changeCells), -1 < t && this._cells ? this._cells[(t - this._startIndex) % this._cells.length] : null;
            }, e.scrollTo = function(t) {
                if (this._scrollBar) {
                    var i = this._isVertical ? this.repeatX : this.repeatY;
                    this._scrollBar.value = Math.floor(t / i) * this._cellSize;
                } else this.startIndex = t;
            }, e.tweenTo = function(t, i, e) {
                if (void 0 === i && (i = 200), this._scrollBar) {
                    this._scrollBar.stopScroll();
                    var s = this._isVertical ? this.repeatX : this.repeatY;
                    L.to(this._scrollBar, {
                        value: Math.floor(t / s) * this._cellSize
                    }, i, null, e, 0, !0);
                } else this.startIndex = t, e && e.run();
            }, e._setCellChanged = function() {
                this._cellChanged || (this._cellChanged = !0, this.callLater(this.changeCells));
            }, e.commitMeasure = function() {
                this.runCallLater(this.changeCells);
            }, n(0, e, "cacheAs", t.prototype._$get_cacheAs, function(t) {
                _.superSet(X, this, "cacheAs", t), this._scrollBar && (this._usedCache = null, "none" !== t ? this._scrollBar.on("start", this, this.onScrollStart) : this._scrollBar.off("start", this, this.onScrollStart));
            }), n(0, e, "content", function() {
                return this._content;
            }), n(0, e, "height", t.prototype._$get_height, function(t) {
                t != this._height && (_.superSet(X, this, "height", t), this._setCellChanged());
            }), n(0, e, "itemRender", function() {
                return this._itemRender;
            }, function(t) {
                if (this._itemRender != t) {
                    this._itemRender = t;
                    for (var i = this._cells.length - 1; - 1 < i; i--) this._cells[i].destroy();
                    this._cells.length = 0, this._setCellChanged();
                }
            }), n(0, e, "vScrollBarSkin", function() {
                return this._scrollBar ? this._scrollBar.skin : null;
            }, function(t) {
                this._removePreScrollBar();
                var i = new at();
                i.name = "scrollBar", i.right = 0, i.skin = t, i.elasticDistance = this._elasticEnabled ? 200 : 0,
                    this.scrollBar = i, this.addChild(i), this._setCellChanged();
            }), n(0, e, "page", function() {
                return this._page;
            }, function(t) {
                this._page = t, this._array && (this._page = 0 < t ? t : 0, this._page = this._page < this.totalPage ? this._page : this.totalPage - 1,
                    this.startIndex = this._page * this.repeatX * this.repeatY);
            }), n(0, e, "hScrollBarSkin", function() {
                return this._scrollBar ? this._scrollBar.skin : null;
            }, function(t) {
                this._removePreScrollBar();
                var i = new ct();
                i.name = "scrollBar", i.bottom = 0, i.skin = t, i.elasticDistance = this._elasticEnabled ? 200 : 0,
                    this.scrollBar = i, this.addChild(i), this._setCellChanged();
            }), n(0, e, "repeatX", function() {
                return 0 < this._repeatX ? this._repeatX : 0 < this._repeatX2 ? this._repeatX2 : 1;
            }, function(t) {
                this._repeatX = t, this._setCellChanged();
            }), n(0, e, "scrollBar", function() {
                return this._scrollBar;
            }, function(t) {
                this._scrollBar != t && (this._scrollBar = t) && (this._isVertical = this._scrollBar.isVertical,
                    this.addChild(this._scrollBar), this._scrollBar.on("change", this, this.onScrollBarChange));
            }), n(0, e, "width", t.prototype._$get_width, function(t) {
                t != this._width && (_.superSet(X, this, "width", t), this._setCellChanged());
            }), n(0, e, "repeatY", function() {
                return 0 < this._repeatY ? this._repeatY : 0 < this._repeatY2 ? this._repeatY2 : 1;
            }, function(t) {
                this._repeatY = t, this._setCellChanged();
            }), n(0, e, "spaceX", function() {
                return this._spaceX;
            }, function(t) {
                this._spaceX = t, this._setCellChanged();
            }), n(0, e, "spaceY", function() {
                return this._spaceY;
            }, function(t) {
                this._spaceY = t, this._setCellChanged();
            }), n(0, e, "selectedIndex", function() {
                return this._selectedIndex;
            }, function(t) {
                this._selectedIndex != t && (this._selectedIndex = t, this.changeSelectStatus(),
                    this.event("change"), this.selectHandler && this.selectHandler.runWith(t), this.startIndex = this._startIndex);
            }), n(0, e, "selectedItem", function() {
                return -1 != this._selectedIndex ? this._array[this._selectedIndex] : null;
            }, function(t) {
                this.selectedIndex = this._array.indexOf(t);
            }), n(0, e, "length", function() {
                return this._array ? this._array.length : 0;
            }), n(0, e, "selection", function() {
                return this.getCell(this._selectedIndex);
            }, function(t) {
                this.selectedIndex = this._startIndex + this._cells.indexOf(t);
            }), n(0, e, "startIndex", function() {
                return this._startIndex;
            }, function(t) {
                this._startIndex = 0 < t ? t : 0, this.callLater(this.renderItems);
            }), n(0, e, "array", function() {
                return this._array;
            }, function(t) {
                this.runCallLater(this.changeCells), this._array = t || [], this._preLen = this._array.length;
                var i = this._array.length;
                if (this.totalPage = Math.ceil(i / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < i ? this._selectedIndex : i - 1,
                    this.startIndex = this._startIndex, this._scrollBar) {
                    this._scrollBar.stopScroll();
                    var e = this._isVertical ? this.repeatX : this.repeatY,
                        s = this._isVertical ? this.repeatY : this.repeatX,
                        n = Math.ceil(i / e),
                        h = 0 < this._cellOffset ? this.totalPage + 1 : this.totalPage;
                    this._scrollBar.target = (1 < h && s <= n ? (this._scrollBar.scrollSize = this._cellSize,
                            this._scrollBar.thumbPercent = s / n, this._scrollBar.setScroll(0, (n - s) * this._cellSize + this._cellOffset, this._scrollBar.value)) : this._scrollBar.setScroll(0, 0, 0),
                        this._content);
                }
            }), n(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
                "number" == typeof(this._dataSource = t) && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.array = t : _.superSet(X, this, "dataSource", t);
            }), n(0, e, "cells", function() {
                return this.runCallLater(this.changeCells), this._cells;
            }), n(0, e, "elasticEnabled", function() {
                return this._elasticEnabled;
            }, function(t) {
                this._elasticEnabled = t, this._scrollBar && (this._scrollBar.elasticDistance = t ? 200 : 0);
            }), i;
        }(X),
        nt = function(i) {
            function e(t) {
                this._bg = null, this._skin = null, e.__super.call(this), void 0 === t && (t = ""),
                    this.text = t, this.skin = this.skin;
            }
            a(e, "laya.ui.TextInput", i);
            var t = e.prototype;
            return t.preinitialize = function() {
                this.mouseEnabled = !0;
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._bg && this._bg.destroy(),
                    this._bg = null;
            }, t.createChildren = function() {
                this.addChild(this._tf = new m()), this._tf.padding = D.inputLabelPadding, this._tf.on("input", this, this._onInput),
                    this._tf.on("enter", this, this._onEnter), this._tf.on("blur", this, this._onBlur),
                    this._tf.on("focus", this, this._onFocus);
            }, t._onFocus = function() {
                this.event("focus", this);
            }, t._onBlur = function() {
                this.event("blur", this);
            }, t._onInput = function() {
                this.event("input", this);
            }, t._onEnter = function() {
                this.event("enter", this);
            }, t.initialize = function() {
                this.width = 128, this.height = 22;
            }, t._skinLoaded = function() {
                this._bg || (this.graphics = this._bg = new P()), this._bg.source = v.getRes(this._skin),
                    this._width && (this._bg.width = this._width), this._height && (this._bg.height = this._height),
                    this._sizeChanged(), this.event("loaded");
            }, t.select = function() {
                this._tf.select();
            }, t.setSelection = function(t, i) {
                this._tf.setSelection(t, i);
            }, n(0, t, "text", i.prototype._$get_text, function(t) {
                this._tf.text != t && (t += "", this._tf.text = t, this.event("change"));
            }), n(0, t, "bg", function() {
                return this._bg;
            }, function(t) {
                this.graphics = this._bg = t;
            }), n(0, t, "multiline", function() {
                return this._tf.multiline;
            }, function(t) {
                this._tf.multiline = t;
            }), n(0, t, "skin", function() {
                return this._skin;
            }, function(t) {
                this._skin != t && (this._skin = t, this._skin && !v.getRes(this._skin) ? _.loader.load(this._skin, g.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
            }), n(0, t, "sizeGrid", function() {
                return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(",") : null;
            }, function(t) {
                this._bg || (this.graphics = this._bg = new P()), this._bg.sizeGrid = H.fillArray(D.defaultSizeGrid, t, Number);
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(R, this, "width", t), this._bg && (this._bg.width = t);
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(R, this, "height", t), this._bg && (this._bg.height = t);
            }), n(0, t, "editable", function() {
                return this._tf.editable;
            }, function(t) {
                this._tf.editable = t;
            }), n(0, t, "restrict", function() {
                return this._tf.restrict;
            }, function(t) {
                this._tf.restrict = t;
            }), n(0, t, "prompt", function() {
                return this._tf.prompt;
            }, function(t) {
                this._tf.prompt = t;
            }), n(0, t, "promptColor", function() {
                return this._tf.promptColor;
            }, function(t) {
                this._tf.promptColor = t;
            }), n(0, t, "maxChars", function() {
                return this._tf.maxChars;
            }, function(t) {
                this._tf.maxChars = t;
            }), n(0, t, "focus", function() {
                return this._tf.focus;
            }, function(t) {
                this._tf.focus = t;
            }), n(0, t, "type", function() {
                return this._tf.type;
            }, function(t) {
                this._tf.type = t;
            }), e;
        }(R),
        ht = function(t) {
            function i() {
                this._oldW = 0, this._oldH = 0, i.__super.call(this);
            }
            a(i, "laya.ui.ScaleBox", t);
            var e = i.prototype;
            return e.onEnable = function() {
                _.stage.on("resize", this, this.onResize), this.onResize();
            }, e.onDisable = function() {
                _.stage.off("resize", this, this.onResize);
            }, e.onResize = function() {
                if (0 < this.width && 0 < this.height) {
                    var t = Math.min(_.stage.width / this._oldW, _.stage.height / this._oldH);
                    _.superSet(X, this, "width", _.stage.width), _.superSet(X, this, "height", _.stage.height),
                        this.scale(t, t);
                }
            }, n(0, e, "width", t.prototype._$get_width, function(t) {
                _.superSet(X, this, "width", t), this._oldW = t;
            }), n(0, e, "height", t.prototype._$get_height, function(t) {
                _.superSet(X, this, "height", t), this._oldH = t;
            }), i;
        }(X),
        ot = function(i) {
            function e(t, i) {
                this._value = null, void 0 === i && (i = ""), e.__super.call(this, t, i);
            }
            a(e, "laya.ui.Radio", i);
            var t = e.prototype;
            return t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._value = null;
            }, t.preinitialize = function() {
                laya.ui.UIComponent.prototype.preinitialize.call(this), this.toggle = !1, this._autoSize = !1;
            }, t.initialize = function() {
                i.prototype.initialize.call(this), this.createText(), this._text.align = "left",
                    this._text.valign = "top", this._text.width = 0, this.on("click", this, this.onClick);
            }, t.onClick = function(t) {
                this.selected = !0;
            }, n(0, t, "value", function() {
                return null != this._value ? this._value : this.label;
            }, function(t) {
                this._value = t;
            }), e;
        }(E),
        rt = function(i) {
            function e(t, i) {
                this._valueArr = null, this._indexMap = null, this._sheet = null, this._direction = "horizontal",
                    this._spaceX = 0, this._spaceY = 0, this._align = "left", this._wordsW = 0, this._wordsH = 0,
                    e.__super.call(this), t && (this.skin = t), i && (this.sheet = i);
            }
            a(e, "laya.ui.FontClip", i);
            var t = e.prototype;
            return t.createChildren = function() {
                this._bitmap = new P(), this.on("loaded", this, this._onClipLoaded);
            }, t._onClipLoaded = function() {
                this.callLater(this.changeValue);
            }, t.changeValue = function() {
                var t;
                if (this._sources && (this._valueArr && (this.graphics.clear(!0), t = this._sources[0]))) {
                    var i = "horizontal" === this._direction;
                    this._wordsH = i ? (this._wordsW = this._valueArr.length * (t.sourceWidth + this.spaceX),
                        t.sourceHeight) : (this._wordsW = t.sourceWidth, (t.sourceHeight + this.spaceY) * this._valueArr.length);
                    var e = 0;
                    if (this._width) switch (this._align) {
                        case "center":
                            e = .5 * (this._width - this._wordsW);
                            break;

                        case "right":
                            e = this._width - this._wordsW;
                            break;

                        default:
                            e = 0;
                    }
                    for (var s = 0, n = this._valueArr.length; s < n; s++) {
                        var h = this._indexMap[this._valueArr.charAt(s)];
                        this.sources[h] && (t = this.sources[h], i ? this.graphics.drawImage(t, e + s * (t.sourceWidth + this.spaceX), 0, t.sourceWidth, t.sourceHeight) : this.graphics.drawImage(t, 0 + e, s * (t.sourceHeight + this.spaceY), t.sourceWidth, t.sourceHeight));
                    }
                    this._width || (this._widget.resetLayoutX(), this.callLater(this._sizeChanged)),
                        this._height || (this._widget.resetLayoutY(), this.callLater(this._sizeChanged));
                }
            }, t.measureWidth = function() {
                return this._wordsW;
            }, t.measureHeight = function() {
                return this._wordsH;
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), this._valueArr = null, this._indexMap = null, this.graphics.clear(!0),
                    this.removeSelf(), this.off("loaded", this, this._onClipLoaded), i.prototype.destroy.call(this, t);
            }, n(0, t, "sheet", function() {
                return this._sheet;
            }, function(t) {
                t += "";
                var i = (this._sheet = t).split(" ");
                this._clipX = String(i[0]).length, this.clipY = i.length, this._indexMap = {};
                for (var e = 0; e < this._clipY; e++)
                    for (var s = i[e].split(""), n = 0, h = s.length; n < h; n++) this._indexMap[s[n]] = e * this._clipX + n;
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(V, this, "height", t), this.callLater(this.changeValue);
            }), n(0, t, "direction", function() {
                return this._direction;
            }, function(t) {
                this._direction = t, this.callLater(this.changeValue);
            }), n(0, t, "value", function() {
                return this._valueArr ? this._valueArr : "";
            }, function(t) {
                t += "", this._valueArr = t, this.callLater(this.changeValue);
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(V, this, "width", t), this.callLater(this.changeValue);
            }), n(0, t, "spaceX", function() {
                return this._spaceX;
            }, function(t) {
                this._spaceX = t, "horizontal" === this._direction && this.callLater(this.changeValue);
            }), n(0, t, "spaceY", function() {
                return this._spaceY;
            }, function(t) {
                this._spaceY = t, "horizontal" !== this._direction && this.callLater(this.changeValue);
            }), n(0, t, "align", function() {
                return this._align;
            }, function(t) {
                this._align = t, this.callLater(this.changeValue);
            }), e;
        }(V),
        at = (function(i) {
            function s(t) {
                this.advsListArr = [], this.resUrl = "https://unioncdn.layabox.com/config/iconlist.json",
                    this._data = [], this._resquestTime = 36e4, this._appid = null, this._playIndex = 0,
                    this._lunboTime = 5e3, s.__super.call(this), this._http = new l.window.XMLHttpRequest(),
                    this.skin = t, this.setLoadUrl(), this.init(), this.size(120, 120);
            }
            a(s, "laya.ui.AdvImage", i);
            var t = s.prototype;
            t.setLoadUrl = function() {
                l.onLimixiu && (this.resUrl = "https://abc.layabox.com/public/wyw/gconfig.json");
            }, t.init = function() {
                this.isSupportJump() ? ((l.onMiniGame || l.onBDMiniGame) && _.timer.loop(this._resquestTime, this, this.onGetAdvsListData),
                    this.onGetAdvsListData(), this.initEvent()) : this.visible = !1;
            }, t.initEvent = function() {
                this.on("click", this, this.onAdvsImgClick);
            }, t.onAdvsImgClick = function() {
                this.getCurrentAppidObj() && this.jumptoGame();
            }, t.revertAdvsData = function() {
                if (this.advsListArr[this._playIndex])
                    if (this.visible = !0, l.onLimixiu) {
                        this.visible = !0;
                        var t = this.advsListArr[this._playIndex];
                        t && (l.onLimixiu && GameStatusInfo.gameId == t.gameid ? this.onLunbo() : (this.skin = "https://abc.layabox.com/public/icon/" + t.iconUrl,
                            this.size(103, 126)));
                    } else this.skin = this.advsListArr[this._playIndex];
            }, t.isSupportJump = function() {
                if (l.onMiniGame) return "function" == typeof wx.navigateToMiniProgram;
                if (l.onLimixiu) {
                    if (BK.QQ.skipGame) return !0;
                } else if (l.onBDMiniGame) return !0;
                return !1;
            }, t.jumptoGame = function() {
                var t = this,
                    i = this.advsListArr[this._playIndex],
                    e = parseInt(i.gameid),
                    s = i.extendInfo;
                i.path;
                if (l.onLimixiu) {
                    if (!i.isLunBo && !i.isLunBo) {
                        var n = y.getJSON("gameObj");
                        n || (n = {}), n[i.gameid] || (n[i.gameid] = {}), n[i.gameid] = {
                            isclick: !0
                        }, y.setJSON("gameObj", n), this.advsListArr.splice(this._playIndex, 1);
                    }
                    BK.QQ.skipGame(e, s), this.updateAdvsInfo();
                } else l.onMiniGame ? this.isSupportJump() && wx.navigateToMiniProgram({
                    appId: this._appid,
                    path: "",
                    extraData: "",
                    envVersion: "release",
                    success: function() {
                        console.log("-------------跳转成功--------------");
                    },
                    fail: function() {
                        console.log("-------------跳转失败--------------");
                    },
                    complete: function() {
                        console.log("-------------跳转接口调用成功--------------"), t.updateAdvsInfo();
                    }.bind(this)
                }) : l.onBDMiniGame || (this.visible = !1);
            }, t.updateAdvsInfo = function() {
                this.visible = !1, this.onLunbo(), _.timer.loop(this._lunboTime, this, this.onLunbo);
            }, t.onLunbo = function() {
                this._playIndex >= this.advsListArr.length - 1 ? this._playIndex = 0 : this._playIndex += 1,
                    this.visible = !0, this.revertAdvsData();
            }, t.getCurrentAppidObj = function() {
                return this.advsListArr[this._playIndex];
            }, t.onGetAdvsListData = function() {
                var i = this,
                    t = s.randRange(1e4, 1e6),
                    e = this.resUrl + "?" + t;
                this._http.open("get", e, !0), this._http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    this._http.responseType = "text", this._http.onerror = function(t) {
                        i._onError(t);
                    }, this._http.onload = function(t) {
                        i._onLoad(t);
                    }, this._http.send(null);
            }, t._onError = function(t) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
            }, t._onLoad = function(t) {
                var i = this._http,
                    e = void 0 !== i.status ? i.status : 200;
                200 === e || 204 === e || 0 === e ? this.complete() : this.error("[" + i.status + "]" + i.statusText + ":" + i.responseURL);
            }, t.error = function(t) {
                this.event("error", t);
            }, t.complete = function() {
                try {
                    this._data = this._http.response || this._http.responseText, this._data = JSON.parse(this._data),
                        l.onLimixiu ? (this.advsListArr = this.getAdvsQArr(this._data), this.advsListArr.length ? (this.updateAdvsInfo(),
                            this.revertAdvsData()) : this.visible = !1) : (this.advsListArr = this._data.list,
                            this._appid = this._data.appid, this.updateAdvsInfo(), this.revertAdvsData());
                } catch (t) {
                    !1, this.error(t.message);
                }
            }, t.getAdvsQArr = function(t) {
                var i = [],
                    e = y.getJSON("gameObj");
                for (var s in t) {
                    var n = t[s];
                    e && e[n.gameid] && !n.isQiangZhi || i.push(n);
                }
                return i;
            }, t.clear = function() {
                var t = this._http;
                t.onerror = t.onabort = t.onprogress = t.onload = null;
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), _.timer.clear(this, this.onLunbo), i.prototype.destroy.call(this, !0),
                    this.clear(), _.timer.clear(this, this.onGetAdvsListData);
            }, s.randRange = function(t, i) {
                return Math.floor(Math.random() * (i - t + 1)) + t;
            };
        }(G), function(t) {
            function i() {
                i.__super.call(this);
            }
            return a(i, "laya.ui.VScrollBar", F), i;
        }()),
        lt = function(t) {
            function i() {
                i.__super.call(this);
            }
            return a(i, "laya.ui.VSlider", j), i;
        }(),
        ct = function(t) {
            function i() {
                i.__super.call(this);
            }
            return a(i, "laya.ui.HScrollBar", t), i.prototype.initialize = function() {
                t.prototype.initialize.call(this), this.slider.isVertical = !1;
            }, i;
        }(F),
        ut = function(t) {
            function i(t) {
                i.__super.call(this, t), this.isVertical = !1;
            }
            return a(i, "laya.ui.HSlider", j), i;
        }(),
        _t = function(t) {
            function i() {
                i.__super.call(this);
            }
            a(i, "laya.ui.HBox", t);
            var e = i.prototype;
            return e.sortItem = function(t) {
                t && t.sort(function(t, i) {
                    return t.x - i.x;
                });
            }, e.changeItems = function() {
                this._itemChanged = !1;
                for (var t = [], i = 0, e = 0, s = this.numChildren; e < s; e++) {
                    var n = this.getChildAt(e);
                    n && (t.push(n), i = this._height ? this._height : Math.max(i, n.height * n.scaleY));
                }
                this.sortItem(t);
                var h = 0;
                for (e = 0, s = t.length; e < s; e++)(n = t[e]).x = h, h += n.width * n.scaleX + this._space,
                    "top" == this._align ? n.y = 0 : "middle" == this._align ? n.y = .5 * (i - n.height * n.scaleY) : "bottom" == this._align && (n.y = i - n.height * n.scaleY);
                this._sizeChanged();
            }, n(0, e, "height", t.prototype._$get_height, function(t) {
                this._height != t && (_.superSet(K, this, "height", t), this.callLater(this.changeItems));
            }), i.NONE = "none", i.TOP = "top", i.MIDDLE = "middle", i.BOTTOM = "bottom", i;
        }(K),
        dt = function(t) {
            function i() {
                i.__super.call(this);
            }
            return a(i, "laya.ui.RadioGroup", Z), i.prototype.createItem = function(t, i) {
                return new ot(t, i);
            }, i;
        }(),
        ft = function(t) {
            function i() {
                i.__super.call(this);
            }
            a(i, "laya.ui.VBox", t);
            var e = i.prototype;
            return e.changeItems = function() {
                this._itemChanged = !1;
                for (var t = [], i = 0, e = 0, s = this.numChildren; e < s; e++) {
                    var n = this.getChildAt(e);
                    n && (t.push(n), i = this._width ? this._width : Math.max(i, n.width * n.scaleX));
                }
                this.sortItem(t);
                var h = 0;
                for (e = 0, s = t.length; e < s; e++)(n = t[e]).y = h, h += n.height * n.scaleY + this._space,
                    "left" == this._align ? n.x = 0 : "center" == this._align ? n.x = .5 * (i - n.width * n.scaleX) : "right" == this._align && (n.x = i - n.width * n.scaleX);
                this._sizeChanged();
            }, n(0, e, "width", t.prototype._$get_width, function(t) {
                this._width != t && (_.superSet(K, this, "width", t), this.callLater(this.changeItems));
            }), i.NONE = "none", i.LEFT = "left", i.CENTER = "center", i.RIGHT = "right", i;
        }(K),
        gt = function(i) {
            function e(t) {
                this._vScrollBar = null, this._hScrollBar = null, void 0 === t && (t = ""), e.__super.call(this, t),
                    this.on("change", this, this._onTextChange);
            }
            a(e, "laya.ui.TextArea", i);
            var t = e.prototype;
            return t._onTextChange = function() {
                this.callLater(this.changeScroll);
            }, t.destroy = function(t) {
                void 0 === t && (t = !0), i.prototype.destroy.call(this, t), this._vScrollBar && this._vScrollBar.destroy(),
                    this._hScrollBar && this._hScrollBar.destroy(), this._vScrollBar = null, this._hScrollBar = null;
            }, t.initialize = function() {
                this.width = 180, this.height = 150, this._tf.wordWrap = !0, this.multiline = !0;
            }, t.onVBarChanged = function(t) {
                this._tf.scrollY != this._vScrollBar.value && (this._tf.scrollY = this._vScrollBar.value);
            }, t.onHBarChanged = function(t) {
                this._tf.scrollX != this._hScrollBar.value && (this._tf.scrollX = this._hScrollBar.value);
            }, t.changeScroll = function() {
                var t = this._vScrollBar && 0 < this._tf.maxScrollY,
                    i = this._hScrollBar && 0 < this._tf.maxScrollX,
                    e = t ? this._width - this._vScrollBar.width : this._width,
                    s = i ? this._height - this._hScrollBar.height : this._height,
                    n = this._tf.padding || D.labelPadding;
                this._tf.width = e, this._tf.height = s, this._vScrollBar && (this._vScrollBar.x = this._width - this._vScrollBar.width - n[2],
                        this._vScrollBar.y = n[1], this._vScrollBar.height = this._height - (i ? this._hScrollBar.height : 0) - n[1] - n[3],
                        this._vScrollBar.scrollSize = 1, this._vScrollBar.thumbPercent = s / Math.max(this._tf.textHeight, s),
                        this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY), this._vScrollBar.visible = t),
                    this._hScrollBar && (this._hScrollBar.x = n[0], this._hScrollBar.y = this._height - this._hScrollBar.height - n[3],
                        this._hScrollBar.width = this._width - (t ? this._vScrollBar.width : 0) - n[0] - n[2],
                        this._hScrollBar.scrollSize = Math.max(.033 * e, 1), this._hScrollBar.thumbPercent = e / Math.max(this._tf.textWidth, e),
                        this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX), this._hScrollBar.visible = i);
            }, t.scrollTo = function(t) {
                this.commitMeasure(), this._tf.scrollY = t;
            }, n(0, t, "scrollY", function() {
                return this._tf.scrollY;
            }), n(0, t, "width", i.prototype._$get_width, function(t) {
                _.superSet(nt, this, "width", t), this.callLater(this.changeScroll);
            }), n(0, t, "hScrollBar", function() {
                return this._hScrollBar;
            }), n(0, t, "height", i.prototype._$get_height, function(t) {
                _.superSet(nt, this, "height", t), this.callLater(this.changeScroll);
            }), n(0, t, "maxScrollX", function() {
                return this._tf.maxScrollX;
            }), n(0, t, "vScrollBarSkin", function() {
                return this._vScrollBar ? this._vScrollBar.skin : null;
            }, function(t) {
                null == this._vScrollBar && (this.addChild(this._vScrollBar = new at()), this._vScrollBar.on("change", this, this.onVBarChanged),
                    this._vScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._vScrollBar.skin = t;
            }), n(0, t, "hScrollBarSkin", function() {
                return this._hScrollBar ? this._hScrollBar.skin : null;
            }, function(t) {
                null == this._hScrollBar && (this.addChild(this._hScrollBar = new ct()), this._hScrollBar.on("change", this, this.onHBarChanged),
                        this._hScrollBar.mouseWheelEnable = !1, this._hScrollBar.target = this._tf, this.callLater(this.changeScroll)),
                    this._hScrollBar.skin = t;
            }), n(0, t, "vScrollBar", function() {
                return this._vScrollBar;
            }), n(0, t, "maxScrollY", function() {
                return this._tf.maxScrollY;
            }), n(0, t, "scrollX", function() {
                return this._tf.scrollX;
            }), e;
        }(nt),
        pt = function(t) {
            function i() {
                i.__super.call(this);
            }
            return a(i, "laya.ui.Tab", Z), i.prototype.createItem = function(t, i) {
                return new E(t, i);
            }, i;
        }();
    _.__init([J, N]);
}(window, document, Laya);