!function(e, n, o) {
    var r = (o.un, o.uns, o.static), a = o.class, l = o.getset, c = (o.__newvec, laya.display.Animation), u = laya.utils.Browser, _ = laya.utils.ClassUtils, d = laya.filters.ColorFilter, f = laya.components.Component, g = (laya.Const, 
    laya.utils.Ease), p = laya.events.Event, m = laya.display.Graphics, v = laya.utils.Handler, y = laya.net.HttpRequest, C = laya.display.Input, b = laya.net.Loader, S = laya.net.LocalStorage, w = laya.maths.Matrix, x = (laya.display.Node, 
    laya.maths.Point), B = laya.maths.Rectangle, k = (laya.renders.Render, laya.display.Scene), I = laya.utils.SceneUtils, L = laya.display.Sprite, M = (laya.display.Stage, 
    laya.display.Text), z = laya.resource.Texture, T = laya.utils.TimeLine, D = laya.utils.Tween, H = laya.utils.Utils, O = laya.utils.WeakObject;
    o.interface("laya.ui.IBox"), o.interface("laya.ui.IItem"), o.interface("laya.ui.ISelect"), 
    o.interface("laya.ui.IRender");
    var P = function() {
        function t() {}
        return a(t, "UIConfig"), t.touchScrollEnable = !0, t.mouseWheelEnable = !0, t.showButtons = !0, 
        t.popupBgColor = "#000000", t.popupBgAlpha = .5, t.closeDialogOnSide = !0, t;
    }(), Y = function() {
        function t() {}
        return a(t, "laya.ui.Styles"), t.labelColor = "#000000", t.buttonStateNum = 3, t.scrollBarMinNum = 15, 
        t.scrollBarDelayTime = 500, r(t, [ "defaultSizeGrid", function() {
            return this.defaultSizeGrid = [ 4, 4, 4, 4, 0 ];
        }, "labelPadding", function() {
            return this.labelPadding = [ 2, 2, 2, 2 ];
        }, "inputLabelPadding", function() {
            return this.inputLabelPadding = [ 1, 1, 1, 3 ];
        }, "buttonLabelColors", function() {
            return this.buttonLabelColors = [ "#32556b", "#32cc6b", "#ff0000", "#C0C0C0" ];
        }, "comboBoxItemColors", function() {
            return this.comboBoxItemColors = [ "#5e95b6", "#ffffff", "#000000", "#8fa4b1", "#ffffff" ];
        } ]), t;
    }(), A = function() {
        function t() {}
        return a(t, "laya.ui.UIUtils"), t.fillArray = function(t, i, e) {
            var s = t.concat();
            if (i) for (var h = i.split(","), n = 0, o = Math.min(s.length, h.length); o > n; n++) {
                var r = h[n];
                s[n] = "true" == r || "false" != r && r, null != e && (s[n] = e(r));
            }
            return s;
        }, t.toColor = function(t) {
            return H.toHexColor(t);
        }, t.gray = function(i, e) {
            void 0 === e && (e = !0), e ? t.addFilter(i, t.grayFilter) : t.clearFilter(i, d);
        }, t.addFilter = function(t, i) {
            var e = t.filters || [];
            e.push(i), t.filters = e;
        }, t.clearFilter = function(t, i) {
            var e = t.filters;
            if (null != e && e.length > 0) {
                for (var s = e.length - 1; s > -1; s--) {
                    var h = e[s];
                    o.__typeof(h, i) && e.splice(s, 1);
                }
                t.filters = e;
            }
        }, t._getReplaceStr = function(i) {
            return t.escapeSequence[i];
        }, t.adptString = function(i) {
            return i.replace(/\\(\w)/g, t._getReplaceStr);
        }, t.getBindFun = function(i) {
            var e = t._funMap.get(i);
            if (null == e) {
                var s = '"' + i + '"', h = "(function(data){if(data==null)return;with(data){try{\nreturn " + (s = s.replace(/^"\${|}"$/g, "").replace(/\${/g, '"+').replace(/}/g, '+"')) + "\n}catch(e){}}})";
                e = o._runScript(h), t._funMap.set(i, e);
            }
            return e;
        }, r(t, [ "grayFilter", function() {
            return this.grayFilter = new d([ .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0 ]);
        }, "escapeSequence", function() {
            return this.escapeSequence = {
                "\\n": "\n",
                "\\t": "\t"
            };
        }, "_funMap", function() {
            return this._funMap = new O();
        } ]), t;
    }(), N = function(t) {
        function i() {
            i.__super.call(this), this._top = NaN, this._bottom = NaN, this._left = NaN, this._right = NaN, 
            this._centerX = NaN, this._centerY = NaN;
        }
        a(i, "laya.ui.Widget", f);
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
            if (i) if (isNaN(this.centerX)) {
                if (isNaN(this.left)) isNaN(this.right) || (t.x = Math.round(i.width - t.displayWidth - this.right + t.pivotX * t.scaleX)); else if (t.x = Math.round(this.left + t.pivotX * t.scaleX), 
                !isNaN(this.right)) {
                    var e = (i._width - this.left - this.right) / (t.scaleX || .01);
                    if (e != t.width) return t.width = e, !0;
                }
            } else t.x = Math.round(.5 * (i.width - t.displayWidth) + this.centerX + t.pivotX * t.scaleX);
            return !1;
        }, e.resetLayoutY = function() {
            var t = this.owner;
            if (!t) return !1;
            var i = t.parent;
            if (i) if (isNaN(this.centerY)) {
                if (isNaN(this.top)) isNaN(this.bottom) || (t.y = Math.round(i.height - t.displayHeight - this.bottom + t.pivotY * t.scaleY)); else if (t.y = Math.round(this.top + t.pivotY * t.scaleY), 
                !isNaN(this.bottom)) {
                    var e = (i._height - this.top - this.bottom) / (t.scaleY || .01);
                    if (e != t.height) return t.height = e, !0;
                }
            } else t.y = Math.round(.5 * (i.height - t.displayHeight) + this.centerY + t.pivotY * t.scaleY);
            return !1;
        }, e.resetLayout = function() {
            this.owner && (this.resetLayoutX(), this.resetLayoutY());
        }, l(0, e, "centerX", function() {
            return this._centerX;
        }, function(t) {
            this._centerX != t && (this._centerX = t, this.resetLayoutX());
        }), l(0, e, "top", function() {
            return this._top;
        }, function(t) {
            this._top != t && (this._top = t, this.resetLayoutY());
        }), l(0, e, "bottom", function() {
            return this._bottom;
        }, function(t) {
            this._bottom != t && (this._bottom = t, this.resetLayoutY());
        }), l(0, e, "left", function() {
            return this._left;
        }, function(t) {
            this._left != t && (this._left = t, this.resetLayoutX());
        }), l(0, e, "right", function() {
            return this._right;
        }, function(t) {
            this._right != t && (this._right = t, this.resetLayoutX());
        }), l(0, e, "centerY", function() {
            return this._centerY;
        }, function(t) {
            this._centerY != t && (this._centerY = t, this.resetLayoutY());
        }), r(i, [ "EMPTY", function() {
            return this.EMPTY = new i();
        } ]), i;
    }(), X = (function(t) {
        function i() {
            i.__super.call(this);
        }
        a(i, "laya.ui.UIEvent", p), i.SHOW_TIP = "showtip", i.HIDE_TIP = "hidetip";
    }(), function(t) {
        function i() {
            this.autoCacheCmd = !0, this._width = 0, this._height = 0, this._source = null, 
            this._sizeGrid = null, this._isChanged = !1, this._offset = null, i.__super.call(this);
        }
        a(i, "laya.ui.AutoBitmap", t);
        var e = i.prototype;
        return e.destroy = function() {
            t.prototype.destroy.call(this), this._source = null, this._sizeGrid = null, this._offset = null;
        }, e._setChanged = function() {
            this._isChanged || (this._isChanged = !0, o.timer.callLater(this, this.changeSource));
        }, e.changeSource = function() {
            this._isChanged = !1;
            var t = this._source;
            if (t && t.bitmap) {
                var e = this.width, s = this.height, h = this._sizeGrid, n = t.sourceWidth, o = t.sourceHeight;
                if (!h || n === e && o === s) this.clear(), this.drawTexture(t, this._offset ? this._offset[0] : 0, this._offset ? this._offset[1] : 0, e, s); else {
                    this.clear();
                    var r = h[0], a = h[1], l = h[2], c = h[3], u = h[4], _ = !1;
                    if (e == n && (c = a = 0), s == o && (r = l = 0), c + a > e) {
                        var d = e;
                        _ = !0, e = c + a, this.save(), this.clipRect(0, 0, d, s);
                    }
                    c && r && this.drawImage(i.getTexture(t, 0, 0, c, r), 0, 0, c, r), a && r && this.drawImage(i.getTexture(t, n - a, 0, a, r), e - a, 0, a, r), 
                    c && l && this.drawImage(i.getTexture(t, 0, o - l, c, l), 0, s - l, c, l), a && l && this.drawImage(i.getTexture(t, n - a, o - l, a, l), e - a, s - l, a, l), 
                    r && this.drawBitmap(u, i.getTexture(t, c, 0, n - c - a, r), c, 0, e - c - a, r), 
                    l && this.drawBitmap(u, i.getTexture(t, c, o - l, n - c - a, l), c, s - l, e - c - a, l), 
                    c && this.drawBitmap(u, i.getTexture(t, 0, r, c, o - r - l), 0, r, c, s - r - l), 
                    a && this.drawBitmap(u, i.getTexture(t, n - a, r, a, o - r - l), e - a, r, a, s - r - l), 
                    this.drawBitmap(u, i.getTexture(t, c, r, n - c - a, o - r - l), c, r, e - c - a, s - r - l), 
                    _ && this.restore();
                }
                this._repaint();
            }
        }, e.drawBitmap = function(t, i, e, s, h, n) {
            void 0 === h && (h = 0), void 0 === n && (n = 0), .1 > h || .1 > n || (!t || i.width == h && i.height == n ? this.drawImage(i, e, s, h, n) : this.fillTexture(i, e, s, h, n));
        }, l(0, e, "sizeGrid", function() {
            return this._sizeGrid;
        }, function(t) {
            this._sizeGrid = t, this._setChanged();
        }), l(0, e, "width", function() {
            return this._width ? this._width : this._source ? this._source.sourceWidth : 0;
        }, function(t) {
            this._width != t && (this._width = t, this._setChanged());
        }), l(0, e, "height", function() {
            return this._height ? this._height : this._source ? this._source.sourceHeight : 0;
        }, function(t) {
            this._height != t && (this._height = t, this._setChanged());
        }), l(0, e, "source", function() {
            return this._source;
        }, function(t) {
            t ? (this._source = t, this._setChanged()) : (this._source = null, this.clear());
        }), i.getTexture = function(t, i, e, s, h) {
            var n;
            return 0 >= s && (s = 1), 0 >= h && (h = 1), t.$_GID || (t.$_GID = H.getGID()), 
            n && n._getSource() || (n = z.createFromTexture(t, i, e, s, h)), n;
        }, i;
    }(m)), E = function(t) {
        function i() {
            this._dataSource = null, this._toolTip = null, this._tag = null, this._disabled = !1, 
            this._gray = !1, i.__super.call(this), this._anchorX = NaN, this._anchorY = NaN, 
            this._widget = N.EMPTY, this.preinitialize(), this.createChildren(), this.initialize();
        }
        a(i, "laya.ui.UIComponent", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._dataSource = null, 
            this._tag = null, this._toolTip = null;
        }, e.preinitialize = function() {}, e.createChildren = function() {}, e.initialize = function() {}, 
        e.measureWidth = function() {
            var t = 0;
            this.commitMeasure();
            for (var i = this.numChildren - 1; i > -1; i--) {
                var e = this.getChildAt(i);
                e._visible && (t = Math.max(e._x + e.width * e.scaleX, t));
            }
            return t;
        }, e.commitMeasure = function() {}, e.measureHeight = function() {
            var t = 0;
            this.commitMeasure();
            for (var i = this.numChildren - 1; i > -1; i--) {
                var e = this.getChildAt(i);
                e._visible && (t = Math.max(e._y + e.height * e.scaleY, t));
            }
            return t;
        }, e._sizeChanged = function() {
            isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height), 
            this.event("resize"), this._widget !== N.EMPTY && this._widget.resetLayout();
        }, e.onMouseOver = function(t) {
            o.stage.event("showtip", this._toolTip);
        }, e.onMouseOut = function(t) {
            o.stage.event("hidetip", this._toolTip);
        }, e._getWidget = function() {
            return this._widget === N.EMPTY && (this._widget = this.addComponent(N)), this._widget;
        }, e.onCompResize = function() {
            this._sizeChanged();
        }, e._childChanged = function(i) {
            this.callLater(this._sizeChanged), t.prototype._childChanged.call(this, i);
        }, l(0, e, "centerY", function() {
            return this._widget.centerY;
        }, function(t) {
            t != this._widget.centerY && (this._getWidget().centerY = t);
        }), l(0, e, "width", function() {
            return this._width ? this._width : this.measureWidth();
        }, function(t) {
            o.superGet(L, this, "width") != t && (o.superSet(L, this, "width", t), this.callLater(this._sizeChanged));
        }), l(0, e, "bottom", function() {
            return this._widget.bottom;
        }, function(t) {
            t != this._widget.bottom && (this._getWidget().bottom = t);
        }), l(0, e, "height", function() {
            return this._height ? this._height : this.measureHeight();
        }, function(t) {
            o.superGet(L, this, "height") != t && (o.superSet(L, this, "height", t), this.callLater(this._sizeChanged));
        }), l(0, e, "left", function() {
            return this._widget.left;
        }, function(t) {
            t != this._widget.left && (this._getWidget().left = t);
        }), l(0, e, "dataSource", function() {
            return this._dataSource;
        }, function(t) {
            for (var i in this._dataSource = t, this._dataSource) this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = this._dataSource[i]);
        }), l(0, e, "centerX", function() {
            return this._widget.centerX;
        }, function(t) {
            t != this._widget.centerX && (this._getWidget().centerX = t);
        }), l(0, e, "top", function() {
            return this._widget.top;
        }, function(t) {
            t != this._widget.top && (this._getWidget().top = t);
        }), l(0, e, "right", function() {
            return this._widget.right;
        }, function(t) {
            t != this._widget.right && (this._getWidget().right = t);
        }), l(0, e, "tag", function() {
            return this._tag;
        }, function(t) {
            this._tag = t;
        }), l(0, e, "toolTip", function() {
            return this._toolTip;
        }, function(t) {
            this._toolTip != t && (this._toolTip = t, null != t ? (this.on("mouseover", this, this.onMouseOver), 
            this.on("mouseout", this, this.onMouseOut)) : (this.off("mouseover", this, this.onMouseOver), 
            this.off("mouseout", this, this.onMouseOut)));
        }), l(0, e, "gray", function() {
            return this._gray;
        }, function(t) {
            t !== this._gray && (this._gray = t, A.gray(this, t));
        }), l(0, e, "disabled", function() {
            return this._disabled;
        }, function(t) {
            t !== this._disabled && (this.gray = this._disabled = t, this.mouseEnabled = !t);
        }), l(0, e, "scaleX", t.prototype._$get_scaleX, function(t) {
            o.superGet(L, this, "scaleX") != t && (o.superSet(L, this, "scaleX", t), this.event("resize"));
        }), l(0, e, "scaleY", t.prototype._$get_scaleY, function(t) {
            o.superGet(L, this, "scaleY") != t && (o.superSet(L, this, "scaleY", t), this.event("resize"));
        }), l(0, e, "anchorX", function() {
            return this._anchorX;
        }, function(t) {
            this._anchorX != t && (this._anchorX = t, this.callLater(this._sizeChanged));
        }), l(0, e, "anchorY", function() {
            return this._anchorY;
        }, function(t) {
            this._anchorY != t && (this._anchorY = t, this.callLater(this._sizeChanged));
        }), i;
    }(L), G = function(t) {
        function i() {
            this.lockLayer = null, this.popupEffect = function(t) {
                t.scale(1, 1), t._effectTween = D.from(t, {
                    x: o.stage.width / 2,
                    y: o.stage.height / 2,
                    scaleX: 0,
                    scaleY: 0
                }, 300, g.backOut, v.create(this, this.doOpen, [ t ]), 0, !1, !1);
            }, this.closeEffect = function(t) {
                t._effectTween = D.to(t, {
                    x: o.stage.width / 2,
                    y: o.stage.height / 2,
                    scaleX: 0,
                    scaleY: 0
                }, 300, g.strongOut, v.create(this, this.doClose, [ t ]), 0, !1, !1);
            }, i.__super.call(this), this.maskLayer = new L(), this.popupEffectHandler = new v(this, this.popupEffect), 
            this.closeEffectHandler = new v(this, this.closeEffect), this.mouseEnabled = this.maskLayer.mouseEnabled = !0, 
            this.zOrder = 1e3, o.stage.addChild(this), o.stage.on("resize", this, this._onResize), 
            P.closeDialogOnSide && this.maskLayer.on("click", this, this._closeOnSide), this._onResize(null);
        }
        a(i, "laya.ui.DialogManager", L);
        var e = i.prototype;
        return e._closeOnSide = function() {
            var t = this.getChildAt(this.numChildren - 1);
            t instanceof laya.ui.Dialog && t.close();
        }, e.setLockView = function(t) {
            this.lockLayer || (this.lockLayer = new W(), this.lockLayer.mouseEnabled = !0, this.lockLayer.size(o.stage.width, o.stage.height)), 
            this.lockLayer.removeChildren(), t && (t.centerX = t.centerY = 0, this.lockLayer.addChild(t));
        }, e._onResize = function(t) {
            var i = this.maskLayer.width = o.stage.width, e = this.maskLayer.height = o.stage.height;
            this.lockLayer && this.lockLayer.size(i, e), this.maskLayer.graphics.clear(!0), 
            this.maskLayer.graphics.drawRect(0, 0, i, e, P.popupBgColor), this.maskLayer.alpha = P.popupBgAlpha;
            for (var s = this.numChildren - 1; s > -1; s--) {
                var h = this.getChildAt(s);
                h.isPopupCenter && this._centerDialog(h);
            }
        }, e._centerDialog = function(t) {
            t.x = Math.round((o.stage.width - t.width >> 1) + t.pivotX), t.y = Math.round((o.stage.height - t.height >> 1) + t.pivotY);
        }, e.open = function(t, i, e) {
            void 0 === i && (i = !1), void 0 === e && (e = !1), i && this._closeAll(), this._clearDialogEffect(t), 
            t.isPopupCenter && this._centerDialog(t), this.addChild(t), (t.isModal || this._getBit(32)) && o.timer.callLater(this, this._checkMask), 
            e && null != t.popupEffect ? t.popupEffect.runWith(t) : this.doOpen(t), this.event("open");
        }, e._clearDialogEffect = function(t) {
            t._effectTween && (D.clear(t._effectTween), t._effectTween = null);
        }, e.doOpen = function(t) {
            t.onOpened(t._param);
        }, e.lock = function(t) {
            this.lockLayer && (t ? this.addChild(this.lockLayer) : this.lockLayer.removeSelf());
        }, e.close = function(t) {
            this._clearDialogEffect(t), t.isShowEffect && null != t.closeEffect ? t.closeEffect.runWith([ t ]) : this.doClose(t), 
            this.event("close");
        }, e.doClose = function(t) {
            t.removeSelf(), t.isModal && this._checkMask(), t.closeHandler && t.closeHandler.runWith(t.closeType), 
            t.onClosed(t.closeType), t.autoDestroyAtClosed && t.destroy();
        }, e.closeAll = function() {
            this._closeAll(), this.event("close");
        }, e._closeAll = function() {
            for (var t = this.numChildren - 1; t > -1; t--) {
                var i = this.getChildAt(t);
                i && null != i.close && this.doClose(i);
            }
        }, e.getDialogsByGroup = function(t) {
            for (var i = [], e = this.numChildren - 1; e > -1; e--) {
                var s = this.getChildAt(e);
                s && s.group === t && i.push(s);
            }
            return i;
        }, e.closeByGroup = function(t) {
            for (var i = [], e = this.numChildren - 1; e > -1; e--) {
                var s = this.getChildAt(e);
                s && s.group === t && (s.close(), i.push(s));
            }
            return i;
        }, e._checkMask = function() {
            this.maskLayer.removeSelf();
            for (var t = this.numChildren - 1; t > -1; t--) {
                var i = this.getChildAt(t);
                if (i && i.isModal) return void this.addChildAt(this.maskLayer, t);
            }
        }, i;
    }(), R = function(t) {
        function i() {
            this._watchMap = {}, this._widget = null, this._dataSource = null, this._anchorX = NaN, 
            this._anchorY = NaN, this._widget = N.EMPTY, i.__super.call(this);
        }
        a(i, "laya.ui.View", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), this._watchMap = null, t.prototype.destroy.call(this, i);
        }, e.changeData = function(t) {
            var i = this._watchMap[t];
            if (i) for (var e = 0, s = i.length; s > e; e++) {
                i[e].exe(this);
            }
        }, e._sizeChanged = function() {
            isNaN(this._anchorX) || (this.pivotX = this.anchorX * this.width), isNaN(this._anchorY) || (this.pivotY = this.anchorY * this.height), 
            this.event("resize");
        }, e._getWidget = function() {
            return this._widget === N.EMPTY && (this._widget = this.addComponent(N)), this._widget;
        }, e.loadUI = function(t) {
            var e = i.uiMap[t];
            i.uiMap && this.createView(e);
        }, l(0, e, "anchorX", function() {
            return this._anchorX;
        }, function(t) {
            this._anchorX != t && (this._anchorX = t, this.callLater(this._sizeChanged));
        }), l(0, e, "centerX", function() {
            return this._widget.centerX;
        }, function(t) {
            t != this._widget.centerX && (this._getWidget().centerX = t);
        }), l(0, e, "top", function() {
            return this._widget.top;
        }, function(t) {
            t != this._widget.top && (this._getWidget().top = t);
        }), l(0, e, "bottom", function() {
            return this._widget.bottom;
        }, function(t) {
            t != this._widget.bottom && (this._getWidget().bottom = t);
        }), l(0, e, "dataSource", function() {
            return this._dataSource;
        }, function(t) {
            for (var i in this._dataSource = t, t) {
                var e = this.getChildByName(i);
                e instanceof laya.ui.UIComponent ? e.dataSource = t[i] : this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = t[i]);
            }
        }), l(0, e, "left", function() {
            return this._widget.left;
        }, function(t) {
            t != this._widget.left && (this._getWidget().left = t);
        }), l(0, e, "right", function() {
            return this._widget.right;
        }, function(t) {
            t != this._widget.right && (this._getWidget().right = t);
        }), l(0, e, "anchorY", function() {
            return this._anchorY;
        }, function(t) {
            this._anchorY != t && (this._anchorY = t, this.callLater(this._sizeChanged));
        }), l(0, e, "centerY", function() {
            return this._widget.centerY;
        }, function(t) {
            t != this._widget.centerY && (this._getWidget().centerY = t);
        }), i.regComponent = function(t, i) {
            _.regClass(t, i);
        }, i.regViewRuntime = function(t, i) {
            _.regClass(t, i);
        }, i.regUI = function(t, i) {
            o.loader.cacheRes(t, i);
        }, i.uiMap = {}, i.__init$ = function() {
            _.regShortClassName([ it, V, yt, J, W, lt, V, ht, j, F, E, ft, gt, U, $, rt, ot, q, ct, mt, Q, K, Ct, at, i, tt, _t, dt, nt, pt, vt, L, c, M, ut ]);
        }, i;
    }(k), W = (function(t) {
        function s() {
            this._$4__texture = null, s.__super.call(this), this._width = this._height = 200;
            var t = new z();
            if (!o.Texture2D) throw new Error("WXOpenDataViewer:webgl not found!");
            t.bitmap = new o.Texture2D(), this.texture = t;
        }
        a(s, "laya.ui.WXOpenDataViewer", t);
        var i = s.prototype;
        i.onEnable = function() {
            this.postMsg({
                type: "display",
                rate: o.stage.frameRate
            }), e.wx && e.sharedCanvas && o.timer.frameLoop(1, this, this._onLoop);
        }, i.onDisable = function() {
            this.postMsg({
                type: "undisplay"
            }), o.timer.clear(this, this._onLoop);
        }, i._onLoop = function() {
            this.texture.bitmap.loadImageSource(e.sharedCanvas);
        }, i._postMsg = function() {
            var t = new w();
            t.translate(this.x, this.y);
            var i = o.stage;
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
        }, i.postMsg = function(t) {
            e.wx && e.wx.getOpenDataContext && e.wx.getOpenDataContext().postMessage(t);
        }, l(0, i, "x", t.prototype._$get_x, function(t) {
            o.superSet(E, this, "x", t), this.callLater(this._postMsg);
        }), l(0, i, "width", t.prototype._$get_width, function(t) {
            o.superSet(E, this, "width", t), e.sharedCanvas && (e.sharedCanvas.width = t), this.callLater(this._postMsg);
        }), l(0, i, "height", t.prototype._$get_height, function(t) {
            o.superSet(E, this, "height", t), e.sharedCanvas && (e.sharedCanvas.height = t), 
            this.callLater(this._postMsg);
        }), l(0, i, "y", t.prototype._$get_y, function(t) {
            o.superSet(E, this, "y", t), this.callLater(this._postMsg);
        });
    }(E), function(t) {
        function i() {
            this._bgColor = null, i.__super.call(this);
        }
        a(i, "laya.ui.Box", t);
        var e = i.prototype;
        return o.imps(e, {
            "laya.ui.IBox": !0
        }), e._onResize = function(t) {
            this.graphics.clear(), this.graphics.drawRect(0, 0, this.width, this.height, this._bgColor);
        }, l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            for (var i in this._dataSource = t, t) {
                var e = this.getChildByName(i);
                e ? e.dataSource = t[i] : this.hasOwnProperty(i) && "function" != typeof this[i] && (this[i] = t[i]);
            }
        }), l(0, e, "bgColor", function() {
            return this._bgColor;
        }, function(t) {
            this._bgColor = t, t ? (this._onResize(null), this.on("resize", this, this._onResize)) : (this.graphics.clear(), 
            this.off("resize", this, this._onResize));
        }), i;
    }(E)), V = function(t) {
        function i(t, e) {
            this.toggle = !1, this._bitmap = null, this._text = null, this._strokeColors = null, 
            this._state = 0, this._selected = !1, this._skin = null, this._autoSize = !0, this._sources = null, 
            this._clickHandler = null, this._stateChanged = !1, i.__super.call(this), this._labelColors = Y.buttonLabelColors, 
            this._stateNum = Y.buttonStateNum, void 0 === e && (e = ""), this.skin = t, this.label = e;
        }
        a(i, "laya.ui.Button", t);
        var e = i.prototype;
        return o.imps(e, {
            "laya.ui.ISelect": !0
        }), e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bitmap && this._bitmap.destroy(), 
            this._text && this._text.destroy(i), this._bitmap = null, this._text = null, this._clickHandler = null, 
            this._labelColors = this._sources = this._strokeColors = null;
        }, e.createChildren = function() {
            this.graphics = this._bitmap = new X();
        }, e.createText = function() {
            this._text || (this._text = new M(), this._text.overflow = "hidden", this._text.align = "center", 
            this._text.valign = "middle", this._text.width = this._width, this._text.height = this._height);
        }, e.initialize = function() {
            1 !== this._mouseState && (this.mouseEnabled = !0, this._setBit(64, !0)), this._createListener("mouseover", this, this.onMouse, null, !1, !1), 
            this._createListener("mouseout", this, this.onMouse, null, !1, !1), this._createListener("mousedown", this, this.onMouse, null, !1, !1), 
            this._createListener("mouseup", this, this.onMouse, null, !1, !1), this._createListener("click", this, this.onMouse, null, !1, !1);
        }, e.onMouse = function(t) {
            return !1 === this.toggle && this._selected ? void 0 : "click" === t.type ? (this.toggle && (this.selected = !this._selected), 
            void (this._clickHandler && this._clickHandler.run())) : void (!this._selected && (this.state = i.stateMap[t.type]));
        }, e._skinLoaded = function() {
            this.callLater(this.changeClips), this._setStateChanged(), this._sizeChanged(), 
            this.event("loaded");
        }, e.changeClips = function() {
            var t = b.getRes(this._skin);
            if (t) {
                var i = t.sourceWidth, e = t.sourceHeight / this._stateNum;
                t.$_GID || (t.$_GID = H.getGID());
                var s = t.$_GID + "-" + this._stateNum, h = O.I.get(s);
                if (H.isOkTextureList(h) || (h = null), h) this._sources = h; else {
                    if (this._sources = [], 1 === this._stateNum) this._sources.push(t); else for (var n = 0; n < this._stateNum; n++) this._sources.push(z.createFromTexture(t, 0, e * n, i, e));
                    O.I.set(s, this._sources);
                }
                this._autoSize ? (this._bitmap.width = this._width || i, this._bitmap.height = this._height || e, 
                this._text && (this._text.width = this._bitmap.width, this._text.height = this._bitmap.height)) : this._text && (this._text.x = i);
            } else console.log("lose skin", this._skin);
        }, e.measureWidth = function() {
            return this.runCallLater(this.changeClips), this._autoSize ? this._bitmap.width : (this.runCallLater(this.changeState), 
            this._bitmap.width + (this._text ? this._text.width : 0));
        }, e.measureHeight = function() {
            return this.runCallLater(this.changeClips), this._text ? Math.max(this._bitmap.height, this._text.height) : this._bitmap.height;
        }, e.changeState = function() {
            this._stateChanged = !1, this.runCallLater(this.changeClips);
            var t = this._state < this._stateNum ? this._state : this._stateNum - 1;
            this._sources && (this._bitmap.source = this._sources[t]), this.label && (this._text.color = this._labelColors[t], 
            this._strokeColors && (this._text.strokeColor = this._strokeColors[t]));
        }, e._setStateChanged = function() {
            this._stateChanged || (this._stateChanged = !0, this.callLater(this.changeState));
        }, l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, t ? b.getRes(t) ? this._skinLoaded() : o.loader.load(this._skin, v.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
        }), l(0, e, "labelPadding", function() {
            return this.createText(), this._text.padding.join(",");
        }, function(t) {
            this.createText(), this._text.padding = A.fillArray(Y.labelPadding, t, Number);
        }), l(0, e, "state", function() {
            return this._state;
        }, function(t) {
            this._state != t && (this._state = t, this._setStateChanged());
        }), l(0, e, "text", function() {
            return this.createText(), this._text;
        }), l(0, e, "stateNum", function() {
            return this._stateNum;
        }, function(t) {
            "string" == typeof t && (t = parseInt(t)), this._stateNum != t && (this._stateNum = 1 > t ? 1 : t > 3 ? 3 : t, 
            this.callLater(this.changeClips));
        }), l(0, e, "label", function() {
            return this._text ? this._text.text : null;
        }, function(t) {
            (this._text || t) && (this.createText(), this._text.text != t && (t && !this._text.parent && this.addChild(this._text), 
            this._text.text = (t + "").replace(/\\n/g, "\n"), this._setStateChanged()));
        }), l(0, e, "labelSize", function() {
            return this.createText(), this._text.fontSize;
        }, function(t) {
            this.createText(), this._text.fontSize = t;
        }), l(0, e, "selected", function() {
            return this._selected;
        }, function(t) {
            this._selected != t && (this._selected = t, this.state = this._selected ? 2 : 0, 
            this.event("change"));
        }), l(0, e, "strokeColors", function() {
            return this._strokeColors ? this._strokeColors.join(",") : "";
        }, function(t) {
            this._strokeColors = A.fillArray(Y.buttonLabelColors, t, String), this._setStateChanged();
        }), l(0, e, "labelColors", function() {
            return this._labelColors.join(",");
        }, function(t) {
            this._labelColors = A.fillArray(Y.buttonLabelColors, t, String), this._setStateChanged();
        }), l(0, e, "labelStroke", function() {
            return this.createText(), this._text.stroke;
        }, function(t) {
            this.createText(), this._text.stroke = t;
        }), l(0, e, "labelStrokeColor", function() {
            return this.createText(), this._text.strokeColor;
        }, function(t) {
            this.createText(), this._text.strokeColor = t;
        }), l(0, e, "labelBold", function() {
            return this.createText(), this._text.bold;
        }, function(t) {
            this.createText(), this._text.bold = t;
        }), l(0, e, "labelFont", function() {
            return this.createText(), this._text.font;
        }, function(t) {
            this.createText(), this._text.font = t;
        }), l(0, e, "labelAlign", function() {
            return this.createText(), this._text.align;
        }, function(t) {
            this.createText(), this._text.align = t;
        }), l(0, e, "clickHandler", function() {
            return this._clickHandler;
        }, function(t) {
            this._clickHandler = t;
        }), l(0, e, "sizeGrid", function() {
            return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
        }, function(t) {
            this._bitmap.sizeGrid = A.fillArray(Y.defaultSizeGrid, t, Number);
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(E, this, "width", t), this._autoSize && (this._bitmap.width = t, this._text && (this._text.width = t));
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(E, this, "height", t), this._autoSize && (this._bitmap.height = t, this._text && (this._text.height = t));
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.label = t + "" : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "iconOffset", function() {
            return this._bitmap._offset ? this._bitmap._offset.join(",") : null;
        }, function(t) {
            this._bitmap._offset = t ? A.fillArray([ 1, 1 ], t, Number) : [];
        }), r(i, [ "stateMap", function() {
            return this.stateMap = {
                mouseup: 0,
                mouseover: 1,
                mousedown: 2,
                mouseout: 0
            };
        } ]), i;
    }(E), U = function(t) {
        function i(t) {
            this._bitmap = null, this._skin = null, this._group = null, i.__super.call(this), 
            this.skin = t;
        }
        a(i, "laya.ui.Image", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), 
            this._bitmap = null;
        }, e.dispose = function() {
            this.destroy(!0), o.loader.clearRes(this._skin);
        }, e.createChildren = function() {
            this.graphics = this._bitmap = new X(), this._bitmap.autoCacheCmd = !1;
        }, e.setSource = function(t, i) {
            t === this._skin && i && (this.source = i, this.onCompResize());
        }, e.measureWidth = function() {
            return this._bitmap.width;
        }, e.measureHeight = function() {
            return this._bitmap.height;
        }, l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "string" == typeof t ? this.skin = t : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "source", function() {
            return this._bitmap.source;
        }, function(t) {
            this._bitmap && (this._bitmap.source = t, this.event("loaded"), this.repaint());
        }), l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            if (this._skin != t) if (this._skin = t, t) {
                var i = b.getRes(t);
                i ? (this.source = i, this.onCompResize()) : o.loader.load(this._skin, v.create(this, this.setSource, [ this._skin ]), null, "image", 1, !0, this._group);
            } else this.source = null;
        }), l(0, e, "sizeGrid", function() {
            return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
        }, function(t) {
            this._bitmap.sizeGrid = A.fillArray(Y.defaultSizeGrid, t, Number);
        }), l(0, e, "group", function() {
            return this._group;
        }, function(t) {
            t && this._skin && b.setGroup(this._skin, t), this._group = t;
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(E, this, "width", t), this._bitmap.width = 0 == t ? 1e-7 : t;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(E, this, "height", t), this._bitmap.height = 0 == t ? 1e-7 : t;
        }), i;
    }(E), $ = function(t) {
        function i(t) {
            this._tf = null, i.__super.call(this), void 0 === t && (t = ""), this.text = t;
        }
        a(i, "laya.ui.Label", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._tf = null;
        }, e.createChildren = function() {
            this.addChild(this._tf = new M());
        }, e.changeText = function(t) {
            this._tf.changeText(t);
        }, e.measureWidth = function() {
            return this._tf.width;
        }, e.measureHeight = function() {
            return this._tf.height;
        }, l(0, e, "padding", function() {
            return this._tf.padding.join(",");
        }, function(t) {
            this._tf.padding = A.fillArray(Y.labelPadding, t, Number);
        }), l(0, e, "bold", function() {
            return this._tf.bold;
        }, function(t) {
            this._tf.bold = t;
        }), l(0, e, "align", function() {
            return this._tf.align;
        }, function(t) {
            this._tf.align = t;
        }), l(0, e, "text", function() {
            return this._tf.text;
        }, function(t) {
            this._tf.text != t && (t && (t = A.adptString(t + "")), this._tf.text = t, this.event("change"), 
            this._width && this._height || this.onCompResize());
        }), l(0, e, "italic", function() {
            return this._tf.italic;
        }, function(t) {
            this._tf.italic = t;
        }), l(0, e, "wordWrap", function() {
            return this._tf.wordWrap;
        }, function(t) {
            this._tf.wordWrap = t;
        }), l(0, e, "font", function() {
            return this._tf.font;
        }, function(t) {
            this._tf.font = t;
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.text = t + "" : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "color", function() {
            return this._tf.color;
        }, function(t) {
            this._tf.color = t;
        }), l(0, e, "valign", function() {
            return this._tf.valign;
        }, function(t) {
            this._tf.valign = t;
        }), l(0, e, "leading", function() {
            return this._tf.leading;
        }, function(t) {
            this._tf.leading = t;
        }), l(0, e, "fontSize", function() {
            return this._tf.fontSize;
        }, function(t) {
            this._tf.fontSize = t;
        }), l(0, e, "bgColor", function() {
            return this._tf.bgColor;
        }, function(t) {
            this._tf.bgColor = t;
        }), l(0, e, "borderColor", function() {
            return this._tf.borderColor;
        }, function(t) {
            this._tf.borderColor = t;
        }), l(0, e, "stroke", function() {
            return this._tf.stroke;
        }, function(t) {
            this._tf.stroke = t;
        }), l(0, e, "strokeColor", function() {
            return this._tf.strokeColor;
        }, function(t) {
            this._tf.strokeColor = t;
        }), l(0, e, "textField", function() {
            return this._tf;
        }), l(0, e, "width", function() {
            return this._width || this._tf.text ? o.superGet(E, this, "width") : 0;
        }, function(t) {
            o.superSet(E, this, "width", t), this._tf.width = t;
        }), l(0, e, "height", function() {
            return this._height || this._tf.text ? o.superGet(E, this, "height") : 0;
        }, function(t) {
            o.superSet(E, this, "height", t), this._tf.height = t;
        }), l(0, e, "overflow", function() {
            return this._tf.overflow;
        }, function(t) {
            this._tf.overflow = t;
        }), l(0, e, "underline", function() {
            return this._tf.underline;
        }, function(t) {
            this._tf.underline = t;
        }), l(0, e, "underlineColor", function() {
            return this._tf.underlineColor;
        }, function(t) {
            this._tf.underlineColor = t;
        }), i;
    }(E), F = function(t) {
        function i(t, e) {
            this._visibleNum = 6, this._button = null, this._list = null, this._isOpen = !1, 
            this._itemSize = 12, this._labels = [], this._selectedIndex = -1, this._selectHandler = null, 
            this._itemHeight = NaN, this._listHeight = NaN, this._listChanged = !1, this._itemChanged = !1, 
            this._scrollBarSkin = null, this._isCustomList = !1, this.itemRender = null, i.__super.call(this), 
            this._itemColors = Y.comboBoxItemColors, this.skin = t, this.labels = e;
        }
        a(i, "laya.ui.ComboBox", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._button && this._button.destroy(i), 
            this._list && this._list.destroy(i), this._button = null, this._list = null, this._itemColors = null, 
            this._labels = null, this._selectHandler = null;
        }, e.createChildren = function() {
            this.addChild(this._button = new V()), this._button.text.align = "left", this._button.labelPadding = "0,0,0,5", 
            this._button.on("mousedown", this, this.onButtonMouseDown);
        }, e._createList = function() {
            this._list = new rt(), this._scrollBarSkin && (this._list.vScrollBarSkin = this._scrollBarSkin), 
            this._setListEvent(this._list);
        }, e._setListEvent = function(t) {
            this._list.selectEnable = !0, this._list.on("mousedown", this, this.onListDown), 
            this._list.mouseHandler = v.create(this, this.onlistItemMouse, null, !1), this._list.scrollBar && this._list.scrollBar.on("mousedown", this, this.onScrollBarDown);
        }, e.onListDown = function(t) {
            t.stopPropagation();
        }, e.onScrollBarDown = function(t) {
            t.stopPropagation();
        }, e.onButtonMouseDown = function(t) {
            this.callLater(this.switchTo, [ !this._isOpen ]);
        }, e.measureWidth = function() {
            return this._button.width;
        }, e.measureHeight = function() {
            return this._button.height;
        }, e.changeList = function() {
            this._listChanged = !1;
            var t = this.width - 2, i = this._itemColors[2];
            this._itemHeight = this._itemSize + 6, this._list.itemRender = this.itemRender || {
                type: "Box",
                child: [ {
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
                } ]
            }, this._list.repeatY = this._visibleNum, this._list.refresh();
        }, e.onlistItemMouse = function(t, i) {
            var e = t.type;
            if ("mouseover" === e || "mouseout" === e) {
                if (this._isCustomList) return;
                var s = this._list.getCell(i);
                if (!s) return;
                var h = s.getChildByName("label");
                h && ("mouseover" === e ? (h.bgColor = this._itemColors[0], h.color = this._itemColors[1]) : (h.bgColor = null, 
                h.color = this._itemColors[2]));
            } else "click" === e && (this.selectedIndex = i, this.isOpen = !1);
        }, e.switchTo = function(t) {
            this.isOpen = t;
        }, e.changeOpen = function() {
            this.isOpen = !this._isOpen;
        }, e.changeItem = function() {
            if (this._itemChanged = !1, this._listHeight = this._labels.length > 0 ? Math.min(this._visibleNum, this._labels.length) * this._itemHeight : this._itemHeight, 
            !this._isCustomList) {
                var t = this._list.graphics;
                t.clear(!0), t.drawRect(0, 0, this.width - 1, this._listHeight, this._itemColors[4], this._itemColors[3]);
            }
            var i = this._list.array || [];
            i.length = 0;
            for (var e = 0, s = this._labels.length; s > e; e++) i.push({
                label: this._labels[e]
            });
            this._list.height = this._listHeight, this._list.array = i;
        }, e.changeSelected = function() {
            this._button.label = this.selectedLabel;
        }, e._onStageMouseWheel = function(t) {
            this._list && !this._list.contains(t.target) && this.removeList(null);
        }, e.removeList = function(t) {
            o.stage.off("mousedown", this, this.removeList), o.stage.off("mousewheel", this, this._onStageMouseWheel), 
            this.isOpen = !1;
        }, l(0, e, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this._selectedIndex = t, this._labels.length > 0 ? this.changeSelected() : this.callLater(this.changeSelected), 
            this.event("change", [ p.EMPTY.setTo("change", this, this) ]), this._selectHandler && this._selectHandler.runWith(this._selectedIndex));
        }), l(0, e, "skin", function() {
            return this._button.skin;
        }, function(t) {
            this._button.skin != t && (this._button.skin = t, this._listChanged = !0);
        }), l(0, e, "visibleNum", function() {
            return this._visibleNum;
        }, function(t) {
            this._visibleNum = t, this._listChanged = !0;
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(E, this, "width", t), this._button.width = this._width, this._itemChanged = !0, 
            this._listChanged = !0;
        }), l(0, e, "selectedLabel", function() {
            return this._selectedIndex > -1 && this._selectedIndex < this._labels.length ? this._labels[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._labels.indexOf(t);
        }), l(0, e, "labels", function() {
            return this._labels.join(",");
        }, function(t) {
            this._labels.length > 0 && (this.selectedIndex = -1), t ? this._labels = t.split(",") : this._labels.length = 0, 
            this._itemChanged = !0;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(E, this, "height", t), this._button.height = this._height;
        }), l(0, e, "selectHandler", function() {
            return this._selectHandler;
        }, function(t) {
            this._selectHandler = t;
        }), l(0, e, "labelBold", function() {
            return this._button.text.bold;
        }, function(t) {
            this._button.text.bold = t;
        }), l(0, e, "itemColors", function() {
            return String(this._itemColors);
        }, function(t) {
            this._itemColors = A.fillArray(this._itemColors, t, String), this._listChanged = !0;
        }), l(0, e, "itemSize", function() {
            return this._itemSize;
        }, function(t) {
            this._itemSize = t, this._listChanged = !0;
        }), l(0, e, "scrollBar", function() {
            return this.list.scrollBar;
        }), l(0, e, "isOpen", function() {
            return this._isOpen;
        }, function(t) {
            if (this._isOpen != t) if (this._isOpen = t, this._button.selected = this._isOpen, 
            this._isOpen) {
                this._list || this._createList(), this._listChanged && !this._isCustomList && this.changeList(), 
                this._itemChanged && this.changeItem();
                var i = this.localToGlobal(x.TEMP.setTo(0, 0)), e = i.y + this._button.height;
                e = e + this._listHeight <= o.stage.height ? e : i.y - this._listHeight, this._list.pos(i.x, e), 
                this._list.zOrder = 1001, o._currentStage.addChild(this._list), o.stage.once("mousedown", this, this.removeList), 
                o.stage.on("mousewheel", this, this._onStageMouseWheel), this._list.selectedIndex = this._selectedIndex;
            } else this._list && this._list.removeSelf();
        }), l(0, e, "scrollBarSkin", function() {
            return this._scrollBarSkin;
        }, function(t) {
            this._scrollBarSkin = t;
        }), l(0, e, "sizeGrid", function() {
            return this._button.sizeGrid;
        }, function(t) {
            this._button.sizeGrid = t;
        }), l(0, e, "button", function() {
            return this._button;
        }), l(0, e, "list", function() {
            return this._list || this._createList(), this._list;
        }, function(t) {
            t && (t.removeSelf(), this._isCustomList = !0, this._list = t, this._setListEvent(t), 
            this._itemHeight = t.getCell(0).height + t.spaceY);
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "labelColors", function() {
            return this._button.labelColors;
        }, function(t) {
            this._button.labelColors != t && (this._button.labelColors = t);
        }), l(0, e, "labelPadding", function() {
            return this._button.text.padding.join(",");
        }, function(t) {
            this._button.text.padding = A.fillArray(Y.labelPadding, t, Number);
        }), l(0, e, "labelSize", function() {
            return this._button.text.fontSize;
        }, function(t) {
            this._button.text.fontSize = t;
        }), l(0, e, "labelFont", function() {
            return this._button.text.font;
        }, function(t) {
            this._button.text.font = t;
        }), l(0, e, "stateNum", function() {
            return this._button.stateNum;
        }, function(t) {
            this._button.stateNum = t;
        }), i;
    }(E), j = (function(t) {
        function i() {
            this._tipBox = null, this._tipText = null, this._defaultTipHandler = null, i.__super.call(this), 
            this._tipBox = new E(), this._tipBox.addChild(this._tipText = new M()), this._tipText.x = this._tipText.y = 5, 
            this._tipText.color = i.tipTextColor, this._defaultTipHandler = this._showDefaultTip, 
            o.stage.on("showtip", this, this._onStageShowTip), o.stage.on("hidetip", this, this._onStageHideTip), 
            this.zOrder = 1100;
        }
        a(i, "laya.ui.TipManager", E);
        var e = i.prototype;
        e._onStageHideTip = function(t) {
            o.timer.clear(this, this._showTip), this.closeAll(), this.removeSelf();
        }, e._onStageShowTip = function(t) {
            o.timer.once(i.tipDelay, this, this._showTip, [ t ], !0);
        }, e._showTip = function(t) {
            if ("string" == typeof t) {
                var i = String(t);
                Boolean(i) && this._defaultTipHandler(i);
            } else t instanceof laya.utils.Handler ? t.run() : "function" == typeof t && t.apply();
            o.stage.on("mousemove", this, this._onStageMouseMove), o.stage.on("mousedown", this, this._onStageMouseDown), 
            this._onStageMouseMove(null);
        }, e._onStageMouseDown = function(t) {
            this.closeAll();
        }, e._onStageMouseMove = function(t) {
            this._showToStage(this, i.offsetX, i.offsetY);
        }, e._showToStage = function(t, i, e) {
            void 0 === i && (i = 0), void 0 === e && (e = 0);
            var s = t.getBounds();
            t.x = o.stage.mouseX + i, t.y = o.stage.mouseY + e, t._x + s.width > o.stage.width && (t.x -= s.width + i), 
            t._y + s.height > o.stage.height && (t.y -= s.height + e);
        }, e.closeAll = function() {
            o.timer.clear(this, this._showTip), o.stage.off("mousemove", this, this._onStageMouseMove), 
            o.stage.off("mousedown", this, this._onStageMouseDown), this.removeChildren();
        }, e.showDislayTip = function(t) {
            this.addChild(t), this._showToStage(this), o._currentStage.addChild(this);
        }, e._showDefaultTip = function(t) {
            this._tipText.text = t;
            var e = this._tipBox.graphics;
            e.clear(!0), e.drawRect(0, 0, this._tipText.width + 10, this._tipText.height + 10, i.tipBackColor), 
            this.addChild(this._tipBox), this._showToStage(this), o._currentStage.addChild(this);
        }, l(0, e, "defaultTipHandler", function() {
            return this._defaultTipHandler;
        }, function(t) {
            this._defaultTipHandler = t;
        }), i.offsetX = 10, i.offsetY = 15, i.tipTextColor = "#ffffff", i.tipBackColor = "#111111", 
        i.tipDelay = 200;
    }(), function(t) {
        function i(t, e, s) {
            this._sources = null, this._bitmap = null, this._skin = null, this._clipX = 1, this._clipY = 1, 
            this._clipWidth = 0, this._clipHeight = 0, this._autoPlay = !1, this._interval = 50, 
            this._complete = null, this._isPlaying = !1, this._index = 0, this._clipChanged = !1, 
            this._group = null, this._toIndex = -1, i.__super.call(this), void 0 === e && (e = 1), 
            void 0 === s && (s = 1), this._clipX = e, this._clipY = s, this.skin = t;
        }
        a(i, "laya.ui.Clip", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, !0), this._bitmap && this._bitmap.destroy(), 
            this._bitmap = null, this._sources = null;
        }, e.dispose = function() {
            this.destroy(!0), o.loader.clearRes(this._skin);
        }, e.createChildren = function() {
            this.graphics = this._bitmap = new X();
        }, e._onDisplay = function(t) {
            this._isPlaying ? this._getBit(128) ? this.play() : this.stop() : this._autoPlay && this.play();
        }, e._skinLoaded = function() {
            this._setClipChanged(), this._sizeChanged(), this.event("loaded");
        }, e.changeClip = function() {
            if (this._clipChanged = !1, this._skin) {
                var t = b.getRes(this._skin);
                t ? this.loadComplete(this._skin, t) : o.loader.load(this._skin, v.create(this, this.loadComplete, [ this._skin ]));
            }
        }, e.loadComplete = function(t, i) {
            if (t === this._skin && i) {
                var e = this._clipWidth || Math.ceil(i.sourceWidth / this._clipX), s = this._clipHeight || Math.ceil(i.sourceHeight / this._clipY), h = this._skin + e + s, n = O.I.get(h);
                if (H.isOkTextureList(n) || (n = null), n) this._sources = n; else {
                    this._sources = [];
                    for (var o = 0; o < this._clipY; o++) for (var r = 0; r < this._clipX; r++) this._sources.push(z.createFromTexture(i, e * r, s * o, e, s));
                    O.I.set(h, this._sources);
                }
                this.index = this._index, this.event("loaded"), this.onCompResize();
            }
        }, e.measureWidth = function() {
            return this.runCallLater(this.changeClip), this._bitmap.width;
        }, e.measureHeight = function() {
            return this.runCallLater(this.changeClip), this._bitmap.height;
        }, e.play = function(t, i) {
            void 0 === t && (t = 0), void 0 === i && (i = -1), this._isPlaying = !0, this.index = t, 
            this._toIndex = i, this._index++, o.timer.loop(this.interval, this, this._loop), 
            this.on("display", this, this._onDisplay), this.on("undisplay", this, this._onDisplay);
        }, e._loop = function() {
            this._visible && this._sources && (this._index++, this._toIndex > -1 && this._index >= this._toIndex ? this.stop() : this._index >= this._sources.length && (this._index = 0), 
            this.index = this._index);
        }, e.stop = function() {
            this._isPlaying = !1, o.timer.clear(this, this._loop), this.event("complete");
        }, e._setClipChanged = function() {
            this._clipChanged || (this._clipChanged = !0, this.callLater(this.changeClip));
        }, l(0, e, "interval", function() {
            return this._interval;
        }, function(t) {
            this._interval != t && (this._interval = t, this._isPlaying && this.play());
        }), l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, t ? b.getRes(t) ? this._skinLoaded() : o.loader.load(this._skin, v.create(this, this._skinLoaded), null, "image", 1) : this._bitmap.source = null);
        }), l(0, e, "sources", function() {
            return this._sources;
        }, function(t) {
            this._sources = t, this.index = this._index, this.event("loaded");
        }), l(0, e, "clipX", function() {
            return this._clipX;
        }, function(t) {
            this._clipX = t || 1, this._setClipChanged();
        }), l(0, e, "clipY", function() {
            return this._clipY;
        }, function(t) {
            this._clipY = t || 1, this._setClipChanged();
        }), l(0, e, "total", function() {
            return this.runCallLater(this.changeClip), this._sources ? this._sources.length : 0;
        }), l(0, e, "clipWidth", function() {
            return this._clipWidth;
        }, function(t) {
            this._clipWidth = t, this._setClipChanged();
        }), l(0, e, "sizeGrid", function() {
            return this._bitmap.sizeGrid ? this._bitmap.sizeGrid.join(",") : null;
        }, function(t) {
            this._bitmap.sizeGrid = A.fillArray(Y.defaultSizeGrid, t, Number);
        }), l(0, e, "group", function() {
            return this._group;
        }, function(t) {
            t && this._skin && b.setGroup(this._skin, t), this._group = t;
        }), l(0, e, "clipHeight", function() {
            return this._clipHeight;
        }, function(t) {
            this._clipHeight = t, this._setClipChanged();
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(E, this, "width", t), this._bitmap.width = t;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(E, this, "height", t), this._bitmap.height = t;
        }), l(0, e, "index", function() {
            return this._index;
        }, function(t) {
            this._index = t, this._bitmap && this._sources && (this._bitmap.source = this._sources[t]), 
            this.event("change");
        }), l(0, e, "autoPlay", function() {
            return this._autoPlay;
        }, function(t) {
            this._autoPlay != t && (this._autoPlay = t, t ? this.play() : this.stop());
        }), l(0, e, "isPlaying", function() {
            return this._isPlaying;
        }, function(t) {
            this._isPlaying = t;
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.index = parseInt(t) : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "bitmap", function() {
            return this._bitmap;
        }), i;
    }(E)), J = function(t) {
        function i() {
            this.changeHandler = null, this._gridSize = 11, this._bgColor = "#ffffff", this._borderColor = "#000000", 
            this._inputColor = "#000000", this._inputBgColor = "#efefef", this._colorPanel = null, 
            this._colorTiles = null, this._colorBlock = null, this._colorInput = null, this._colorButton = null, 
            this._colors = [], this._selectedColor = "#000000", this._panelChanged = !1, i.__super.call(this);
        }
        a(i, "laya.ui.ColorPicker", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._colorPanel && this._colorPanel.destroy(i), 
            this._colorButton && this._colorButton.destroy(i), this._colorPanel = null, this._colorTiles = null, 
            this._colorBlock = null, this._colorInput = null, this._colorButton = null, this._colors = null, 
            this.changeHandler = null;
        }, e.createChildren = function() {
            this.addChild(this._colorButton = new V()), this._colorPanel = new W(), this._colorPanel.size(230, 166), 
            this._colorPanel.addChild(this._colorTiles = new L()), this._colorPanel.addChild(this._colorBlock = new L()), 
            this._colorPanel.addChild(this._colorInput = new C());
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
            for (var i = [ 0, 3355443, 6710886, 10066329, 13421772, 16777215, 16711680, 65280, 255, 16776960, 65535, 16711935 ], e = 0; 12 > e; e++) for (var s = 0; 20 > s; s++) {
                var h;
                h = 0 === s ? i[e] : 1 === s ? 0 : 51 * (((3 * e + s / 6) % 3 << 0) + 3 * (e / 6 << 0)) << 16 | s % 6 * 51 << 8 | (e << 0) % 6 * 51;
                var n = A.toColor(h);
                this._colors.push(n);
                var o = s * this._gridSize, r = e * this._gridSize;
                t.drawRect(o, r, this._gridSize, this._gridSize, n, "#000000");
            }
        }, e.onColorButtonClick = function(t) {
            this._colorPanel.parent ? this.close() : this.open();
        }, e.open = function() {
            var t = this.localToGlobal(new x()), i = t.x + this._colorPanel.width <= o.stage.width ? t.x : o.stage.width - this._colorPanel.width, e = t.y + this._colorButton.height;
            e = e + this._colorPanel.height <= o.stage.height ? e : t.y - this._colorPanel.height, 
            this._colorPanel.pos(i, e), this._colorPanel.zOrder = 1001, o._currentStage.addChild(this._colorPanel), 
            o.stage.on("mousedown", this, this.removeColorBox);
        }, e.close = function() {
            o.stage.off("mousedown", this, this.removeColorBox), this._colorPanel.removeSelf();
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
            var t = this._colorTiles.getMousePoint(), i = Math.floor(t.x / this._gridSize), e = Math.floor(t.y / this._gridSize);
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
        }, l(0, e, "inputBgColor", function() {
            return this._inputBgColor;
        }, function(t) {
            this._inputBgColor = t, this._setPanelChanged();
        }), l(0, e, "selectedColor", function() {
            return this._selectedColor;
        }, function(t) {
            this._selectedColor != t && (this._selectedColor = this._colorInput.text = t, this.drawBlock(t), 
            this.changeColor(), this.changeHandler && this.changeHandler.runWith(this._selectedColor), 
            this.event("change", p.EMPTY.setTo("change", this, this)));
        }), l(0, e, "skin", function() {
            return this._colorButton.skin;
        }, function(t) {
            this._colorButton.once("loaded", this, this.changeColor), this._colorButton.skin = t;
        }), l(0, e, "bgColor", function() {
            return this._bgColor;
        }, function(t) {
            this._bgColor = t, this._setPanelChanged();
        }), l(0, e, "borderColor", function() {
            return this._borderColor;
        }, function(t) {
            this._borderColor = t, this._setPanelChanged();
        }), l(0, e, "inputColor", function() {
            return this._inputColor;
        }, function(t) {
            this._inputColor = t, this._setPanelChanged();
        }), i;
    }(E), q = function(t) {
        function i(t) {
            this.changeHandler = null, this._bg = null, this._bar = null, this._skin = null, 
            this._value = .5, i.__super.call(this), this.skin = t;
        }
        a(i, "laya.ui.ProgressBar", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bg && this._bg.destroy(i), 
            this._bar && this._bar.destroy(i), this._bg = this._bar = null, this.changeHandler = null;
        }, e.createChildren = function() {
            this.addChild(this._bg = new U()), this.addChild(this._bar = new U()), this._bar._bitmap.autoCacheCmd = !1;
        }, e._skinLoaded = function() {
            this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png"), 
            this.callLater(this.changeValue), this._sizeChanged(), this.event("loaded");
        }, e.measureWidth = function() {
            return this._bg.width;
        }, e.measureHeight = function() {
            return this._bg.height;
        }, e.changeValue = function() {
            if (this.sizeGrid) {
                var t = this.sizeGrid.split(","), i = Number(t[3]), e = Number(t[1]), s = (this.width - i - e) * this._value;
                this._bar.width = i + e + s, this._bar.visible = this._bar.width > i + e;
            } else this._bar.width = this.width * this._value;
        }, l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this._skin && !b.getRes(this._skin) ? o.loader.load(this._skin, v.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(E, this, "height", t), this._bg.height = this._height, this._bar.height = this._height;
        }), l(0, e, "bar", function() {
            return this._bar;
        }), l(0, e, "value", function() {
            return this._value;
        }, function(t) {
            this._value != t && (t = t > 1 ? 1 : 0 > t ? 0 : t, this._value = t, this.callLater(this.changeValue), 
            this.event("change"), this.changeHandler && this.changeHandler.runWith(t));
        }), l(0, e, "bg", function() {
            return this._bg;
        }), l(0, e, "sizeGrid", function() {
            return this._bg.sizeGrid;
        }, function(t) {
            this._bg.sizeGrid = this._bar.sizeGrid = t;
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(E, this, "width", t), this._bg.width = this._width, this.callLater(this.changeValue);
        }), i;
    }(E), Q = function(t) {
        function i(t) {
            this.rollRatio = .97, this.changeHandler = null, this.scaleBar = !0, this.autoHide = !1, 
            this.elasticDistance = 0, this.elasticBackTime = 500, this.upButton = null, this.downButton = null, 
            this.slider = null, this._scrollSize = 1, this._skin = null, this._thumbPercent = 1, 
            this._target = null, this._lastPoint = null, this._lastOffset = 0, this._checkElastic = !1, 
            this._isElastic = !1, this._value = NaN, this._hide = !1, this._clickOnly = !0, 
            this._offsets = null, this.isLockedFun = null, this.triggerDownDragLimit = null, 
            this.triggerUpDragLimit = null, i.__super.call(this), this._showButtons = P.showButtons, 
            this._touchScrollEnable = P.touchScrollEnable, this._mouseWheelEnable = P.mouseWheelEnable, 
            this.skin = t, this.max = 1;
        }
        a(i, "laya.ui.ScrollBar", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), this.stopScroll(), this.target = null, t.prototype.destroy.call(this, i), 
            this.upButton && this.upButton.destroy(i), this.downButton && this.downButton.destroy(i), 
            this.slider && this.slider.destroy(i), this.upButton = this.downButton = null, this.slider = null, 
            this.changeHandler = null, this._offsets = null;
        }, e.createChildren = function() {
            this.addChild(this.slider = new K()), this.addChild(this.upButton = new V()), this.addChild(this.downButton = new V());
        }, e.initialize = function() {
            this.slider.showLabel = !1, this.slider.tick = 0, this.slider.on("change", this, this.onSliderChange), 
            this.slider.setSlider(0, 0, 0), this.upButton.on("mousedown", this, this.onButtonMouseDown), 
            this.downButton.on("mousedown", this, this.onButtonMouseDown);
        }, e.onSliderChange = function() {
            this._value != this.slider.value && (this.value = this.slider.value);
        }, e.onButtonMouseDown = function(t) {
            var i = t.currentTarget === this.upButton;
            this.slide(i), o.timer.once(Y.scrollBarDelayTime, this, this.startLoop, [ i ]), 
            o.stage.once("mouseup", this, this.onStageMouseUp);
        }, e.startLoop = function(t) {
            o.timer.frameLoop(1, this, this.slide, [ t ]);
        }, e.slide = function(t) {
            t ? this.value -= this._scrollSize : this.value += this._scrollSize;
        }, e.onStageMouseUp = function(t) {
            o.timer.clear(this, this.startLoop), o.timer.clear(this, this.slide);
        }, e._skinLoaded = function() {
            this.slider.skin = this._skin, this.callLater(this.changeScrollBar), this._sizeChanged(), 
            this.event("loaded");
        }, e.changeScrollBar = function() {
            this.upButton.visible = this._showButtons, this.downButton.visible = this._showButtons, 
            this._showButtons && (this.upButton.skin = this._skin.replace(".png", "$up.png"), 
            this.downButton.skin = this._skin.replace(".png", "$down.png")), this.slider.isVertical ? this.slider.y = this._showButtons ? this.upButton.height : 0 : this.slider.x = this._showButtons ? this.upButton.width : 0, 
            this.resetPositions(), this.repaint();
        }, e._sizeChanged = function() {
            t.prototype._sizeChanged.call(this), this.repaint(), this.resetPositions(), this.event("change"), 
            this.changeHandler && this.changeHandler.runWith(this.value);
        }, e.resetPositions = function() {
            this.slider.isVertical ? this.slider.height = this.height - (this._showButtons ? this.upButton.height + this.downButton.height : 0) : this.slider.width = this.width - (this._showButtons ? this.upButton.width + this.downButton.width : 0), 
            this.resetButtonPosition();
        }, e.resetButtonPosition = function() {
            this.slider.isVertical ? this.downButton.y = this.slider._y + this.slider.height : this.downButton.x = this.slider._x + this.slider.width;
        }, e.measureWidth = function() {
            return this.slider.isVertical ? this.slider.width : 100;
        }, e.measureHeight = function() {
            return this.slider.isVertical ? 100 : this.slider.height;
        }, e.setScroll = function(t, i, e) {
            this.runCallLater(this._sizeChanged), this.slider.setSlider(t, i, e), this.slider.bar.visible = i > 0, 
            !this._hide && this.autoHide && (this.visible = !1);
        }, e.onTargetMouseWheel = function(t) {
            this.value -= t.delta * this._scrollSize, this.target = this._target;
        }, e.onTargetMouseDown = function(t) {
            (!this.isLockedFun || this.isLockedFun(t)) && (this.event("end"), this._clickOnly = !0, 
            this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new x()), 
            this._lastPoint.setTo(o.stage.mouseX, o.stage.mouseY), o.timer.clear(this, this.tweenMove), 
            D.clearTween(this), o.stage.once("mouseup", this, this.onStageMouseUp2), o.stage.once("mouseout", this, this.onStageMouseUp2), 
            o.timer.frameLoop(1, this, this.loop));
        }, e.startDragForce = function() {
            this._clickOnly = !0, this._lastOffset = 0, this._checkElastic = !1, this._lastPoint || (this._lastPoint = new x()), 
            this._lastPoint.setTo(o.stage.mouseX, o.stage.mouseY), o.timer.clear(this, this.tweenMove), 
            D.clearTween(this), o.stage.once("mouseup", this, this.onStageMouseUp2), o.stage.once("mouseout", this, this.onStageMouseUp2), 
            o.timer.frameLoop(1, this, this.loop);
        }, e.cancelDragOp = function() {
            o.stage.off("mouseup", this, this.onStageMouseUp2), o.stage.off("mouseout", this, this.onStageMouseUp2), 
            o.timer.clear(this, this.tweenMove), o.timer.clear(this, this.loop), this._target.mouseEnabled = !0;
        }, e.checkTriggers = function(t) {
            return void 0 === t && (t = !1), this.value >= 0 && this.value - this._lastOffset <= 0 && this.triggerDownDragLimit && this.triggerDownDragLimit(t) ? (this.cancelDragOp(), 
            this.value = 0, !0) : !!(this.value <= this.max && this.value - this._lastOffset >= this.max && this.triggerUpDragLimit && this.triggerUpDragLimit(t)) && (this.cancelDragOp(), 
            this.value = this.max, !0);
        }, e.startTweenMoveForce = function(t) {
            this._lastOffset = t, o.timer.frameLoop(1, this, this.tweenMove, [ 200 ]);
        }, e.loop = function() {
            var t = o.stage.mouseY, i = o.stage.mouseX;
            if (this._lastOffset = this.isVertical ? t - this._lastPoint.y : i - this._lastPoint.x, 
            this._clickOnly) {
                if (!(Math.abs(this._lastOffset * (this.isVertical ? o.stage._canvasTransform.getScaleY() : o.stage._canvasTransform.getScaleX())) > 1)) return;
                if (this._clickOnly = !1, this.checkTriggers()) return;
                this._offsets || (this._offsets = []), this._offsets.length = 0, this._target.mouseEnabled = !1, 
                !this.hide && this.autoHide && (this.alpha = 1, this.visible = !0), this.event("start");
            } else if (this.checkTriggers()) return;
            this._offsets.push(this._lastOffset), this._lastPoint.x = i, this._lastPoint.y = t, 
            0 !== this._lastOffset && (this._checkElastic || (this.elasticDistance > 0 ? this._checkElastic || 0 == this._lastOffset || (this._lastOffset > 0 && this._value <= this.min || this._lastOffset < 0 && this._value >= this.max ? (this._isElastic = !0, 
            this._checkElastic = !0) : this._isElastic = !1) : this._checkElastic = !0), this._isElastic ? this._value <= this.min ? this._lastOffset > 0 ? this.value -= this._lastOffset * Math.max(0, 1 - (this.min - this._value) / this.elasticDistance) : (this.value -= .5 * this._lastOffset, 
            this._value >= this.min && (this._checkElastic = !1)) : this._value >= this.max && (this._lastOffset < 0 ? this.value -= this._lastOffset * Math.max(0, 1 - (this._value - this.max) / this.elasticDistance) : (this.value -= .5 * this._lastOffset, 
            this._value <= this.max && (this._checkElastic = !1))) : this.value -= this._lastOffset);
        }, e.onStageMouseUp2 = function(t) {
            if (o.stage.off("mouseup", this, this.onStageMouseUp2), o.stage.off("mouseout", this, this.onStageMouseUp2), 
            o.timer.clear(this, this.loop), !(this._clickOnly && this._value >= this.min && this._value <= this.max)) if (this._target.mouseEnabled = !0, 
            this._isElastic) this._value < this.min ? D.to(this, {
                value: this.min
            }, this.elasticBackTime, g.sineOut, v.create(this, this.elasticOver)) : this._value > this.max && D.to(this, {
                value: this.max
            }, this.elasticBackTime, g.sineOut, v.create(this, this.elasticOver)); else {
                if (!this._offsets) return;
                this._offsets.length < 1 && (this._offsets[0] = this.isVertical ? o.stage.mouseY - this._lastPoint.y : o.stage.mouseX - this._lastPoint.x);
                for (var i = 0, e = Math.min(this._offsets.length, 3), s = 0; e > s; s++) i += this._offsets[this._offsets.length - 1 - s];
                if (this._lastOffset = i / e, 2 > (i = Math.abs(this._lastOffset))) return void this.event("end");
                i > 250 && (this._lastOffset = this._lastOffset > 0 ? 250 : -250);
                var h = Math.round(Math.abs(this.elasticDistance * (this._lastOffset / 150)));
                o.timer.frameLoop(1, this, this.tweenMove, [ h ]);
            }
        }, e.elasticOver = function() {
            this._isElastic = !1, !this.hide && this.autoHide && D.to(this, {
                alpha: 0
            }, 500), this.event("end");
        }, e.tweenMove = function(t) {
            if (this._lastOffset *= this.rollRatio, !this.checkTriggers(!0)) {
                var i = NaN;
                if (t > 0 && (this._lastOffset > 0 && this.value <= this.min ? (this._isElastic = !0, 
                i = .5 * -(this.min - t - this.value), this._lastOffset > i && (this._lastOffset = i)) : this._lastOffset < 0 && this.value >= this.max && (this._isElastic = !0, 
                i = .5 * -(this.max + t - this.value), this._lastOffset < i && (this._lastOffset = i))), 
                this.value -= this._lastOffset, Math.abs(this._lastOffset) < .1) {
                    if (o.timer.clear(this, this.tweenMove), this._isElastic) return void (this._value < this.min ? D.to(this, {
                        value: this.min
                    }, this.elasticBackTime, g.sineOut, v.create(this, this.elasticOver)) : this._value > this.max ? D.to(this, {
                        value: this.max
                    }, this.elasticBackTime, g.sineOut, v.create(this, this.elasticOver)) : this.elasticOver());
                    this.event("end"), !this.hide && this.autoHide && D.to(this, {
                        alpha: 0
                    }, 500);
                }
            }
        }, e.stopScroll = function() {
            this.onStageMouseUp2(null), o.timer.clear(this, this.tweenMove), D.clearTween(this);
        }, l(0, e, "thumbPercent", function() {
            return this._thumbPercent;
        }, function(t) {
            this.runCallLater(this.changeScrollBar), this.runCallLater(this._sizeChanged), t = t >= 1 ? .99 : t, 
            this._thumbPercent = t, this.scaleBar && (this.slider.isVertical ? this.slider.bar.height = Math.max(this.slider.height * t, Y.scrollBarMinNum) : this.slider.bar.width = Math.max(this.slider.width * t, Y.scrollBarMinNum));
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            " " != t && this._skin != t && (this._skin = t, this._skin && !b.getRes(this._skin) ? o.loader.load([ this._skin, this._skin.replace(".png", "$up.png"), this._skin.replace(".png", "$down.png"), this._skin.replace(".png", "$bar.png") ], v.create(this, this._skinLoaded)) : this._skinLoaded());
        }), l(0, e, "max", function() {
            return this.slider.max;
        }, function(t) {
            this.slider.max = t;
        }), l(0, e, "min", function() {
            return this.slider.min;
        }, function(t) {
            this.slider.min = t;
        }), l(0, e, "value", function() {
            return this._value;
        }, function(t) {
            t !== this._value && (this._value = t, this._isElastic || (this.slider._value != t && (this.slider._value = t, 
            this.slider.changeValue()), this._value = this.slider._value), this.event("change"), 
            this.changeHandler && this.changeHandler.runWith(this._value));
        }), l(0, e, "isVertical", function() {
            return this.slider.isVertical;
        }, function(t) {
            this.slider.isVertical = t;
        }), l(0, e, "sizeGrid", function() {
            return this.slider.sizeGrid;
        }, function(t) {
            this.slider.sizeGrid = t;
        }), l(0, e, "scrollSize", function() {
            return this._scrollSize;
        }, function(t) {
            this._scrollSize = t;
        }), l(0, e, "target", function() {
            return this._target;
        }, function(t) {
            this._target && (this._target.off("mousewheel", this, this.onTargetMouseWheel), 
            this._target.off("mousedown", this, this.onTargetMouseDown)), this._target = t, 
            t && (this._mouseWheelEnable && this._target.on("mousewheel", this, this.onTargetMouseWheel), 
            this._touchScrollEnable && this._target.on("mousedown", this, this.onTargetMouseDown));
        }), l(0, e, "hide", function() {
            return this._hide;
        }, function(t) {
            this._hide = t, this.visible = !t;
        }), l(0, e, "showButtons", function() {
            return this._showButtons;
        }, function(t) {
            this._showButtons = t, this.callLater(this.changeScrollBar);
        }), l(0, e, "touchScrollEnable", function() {
            return this._touchScrollEnable;
        }, function(t) {
            this._touchScrollEnable = t, this.target = this._target;
        }), l(0, e, "mouseWheelEnable", function() {
            return this._mouseWheelEnable;
        }, function(t) {
            this._mouseWheelEnable = t, this.target = this._target;
        }), l(0, e, "lastOffset", function() {
            return this._lastOffset;
        }), l(0, e, "tick", function() {
            return this.slider.tick;
        }, function(t) {
            this.slider.tick = t;
        }), i;
    }(E), K = function(t) {
        function i(t) {
            this.changeHandler = null, this.isVertical = !0, this.showLabel = !0, this._allowClickBack = !1, 
            this._max = 100, this._min = 0, this._tick = 1, this._value = 0, this._skin = null, 
            this._bg = null, this._progress = null, this._bar = null, this._tx = NaN, this._ty = NaN, 
            this._maxMove = NaN, this._globalSacle = null, i.__super.call(this), this.skin = t;
        }
        a(i, "laya.ui.Slider", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bg && this._bg.destroy(i), 
            this._bar && this._bar.destroy(i), this._progress && this._progress.destroy(i), 
            this._bg = null, this._bar = null, this._progress = null, this.changeHandler = null;
        }, e.createChildren = function() {
            this.addChild(this._bg = new U()), this.addChild(this._bar = new V());
        }, e.initialize = function() {
            this._bar.on("mousedown", this, this.onBarMouseDown), this._bg.sizeGrid = this._bar.sizeGrid = "4,4,4,4,0", 
            this._progress && (this._progress.sizeGrid = this._bar.sizeGrid), this.allowClickBack = !0;
        }, e.onBarMouseDown = function(t) {
            this._globalSacle || (this._globalSacle = new x()), this._globalSacle.setTo(this.globalScaleX || .01, this.globalScaleY || .01), 
            this._maxMove = this.isVertical ? this.height - this._bar.height : this.width - this._bar.width, 
            this._tx = o.stage.mouseX, this._ty = o.stage.mouseY, o.stage.on("mousemove", this, this.mouseMove), 
            o.stage.once("mouseup", this, this.mouseUp), o.stage.once("mouseout", this, this.mouseUp), 
            this.showValueText();
        }, e.showValueText = function() {
            if (this.showLabel) {
                var t = laya.ui.Slider.label;
                this.addChild(t), t.textField.changeText(this._value + ""), this.isVertical ? (t.x = this._bar._x + 20, 
                t.y = .5 * (this._bar.height - t.height) + this._bar._y) : (t.y = this._bar._y - 20, 
                t.x = .5 * (this._bar.width - t.width) + this._bar._x);
            }
        }, e.hideValueText = function() {
            laya.ui.Slider.label && laya.ui.Slider.label.removeSelf();
        }, e.mouseUp = function(t) {
            o.stage.off("mousemove", this, this.mouseMove), o.stage.off("mouseup", this, this.mouseUp), 
            o.stage.off("mouseout", this, this.mouseUp), this.sendChangeEvent("changed"), this.hideValueText();
        }, e.mouseMove = function(t) {
            var i = this._value;
            if (this.isVertical ? (this._bar.y += (o.stage.mouseY - this._ty) / this._globalSacle.y, 
            this._bar._y > this._maxMove ? this._bar.y = this._maxMove : this._bar._y < 0 && (this._bar.y = 0), 
            this._value = this._bar._y / this._maxMove * (this._max - this._min) + this._min, 
            this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x += (o.stage.mouseX - this._tx) / this._globalSacle.x, 
            this._bar._x > this._maxMove ? this._bar.x = this._maxMove : this._bar._x < 0 && (this._bar.x = 0), 
            this._value = this._bar._x / this._maxMove * (this._max - this._min) + this._min, 
            this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width)), 
            this._tx = o.stage.mouseX, this._ty = o.stage.mouseY, 0 != this._tick) {
                var e = Math.pow(10, (this._tick + "").length - 1);
                this._value = Math.round(Math.round(this._value / this._tick) * this._tick * e) / e;
            }
            this._value != i && this.sendChangeEvent(), this.showValueText();
        }, e.sendChangeEvent = function(t) {
            void 0 === t && (t = "change"), this.event(t), this.changeHandler && this.changeHandler.runWith(this._value);
        }, e._skinLoaded = function() {
            this._bg.skin = this._skin, this._bar.skin = this._skin.replace(".png", "$bar.png");
            var t = this._skin.replace(".png", "$progress.png");
            b.getRes(t) && (this._progress || (this.addChild(this._progress = new U()), this._progress.sizeGrid = this._bar.sizeGrid, 
            this.setChildIndex(this._progress, 1)), this._progress.skin = t), this.setBarPoint(), 
            this.callLater(this.changeValue), this._sizeChanged(), this.event("loaded");
        }, e.setBarPoint = function() {
            this.isVertical ? this._bar.x = Math.round(.5 * (this._bg.width - this._bar.width)) : this._bar.y = Math.round(.5 * (this._bg.height - this._bar.height));
        }, e.measureWidth = function() {
            return Math.max(this._bg.width, this._bar.width);
        }, e.measureHeight = function() {
            return Math.max(this._bg.height, this._bar.height);
        }, e._sizeChanged = function() {
            t.prototype._sizeChanged.call(this), this.isVertical ? this._bg.height = this.height : this._bg.width = this.width, 
            this.setBarPoint(), this.changeValue();
        }, e.setSlider = function(t, i, e) {
            this._value = -1, this._min = t, this._max = i > t ? i : t, this.value = t > e ? t : e > i ? i : e;
        }, e.changeValue = function() {
            if (0 != this.tick) {
                var t = Math.pow(10, (this._tick + "").length - 1);
                this._value = Math.round(Math.round(this._value / this._tick) * this._tick * t) / t;
            }
            this._value = this._value > this._max ? this._max : this._value < this._min ? this._min : this._value;
            var i = this._max - this._min;
            0 === i && (i = 1), this.isVertical ? (this._bar.y = (this._value - this._min) / i * (this.height - this._bar.height), 
            this._progress && (this._progress.height = this._bar._y + .5 * this._bar.height)) : (this._bar.x = (this._value - this._min) / i * (this.width - this._bar.width), 
            this._progress && (this._progress.width = this._bar._x + .5 * this._bar.width));
        }, e.onBgMouseDown = function(t) {
            var i = this._bg.getMousePoint();
            this.isVertical ? this.value = i.y / (this.height - this._bar.height) * (this._max - this._min) + this._min : this.value = i.x / (this.width - this._bar.width) * (this._max - this._min) + this._min;
        }, l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t || "string" == typeof t ? this.value = Number(t) : o.superSet(E, this, "dataSource", t);
        }), l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this._skin && !b.getRes(this._skin) ? o.loader.load([ this._skin, this._skin.replace(".png", "$bar.png") ], v.create(this, this._skinLoaded)) : this._skinLoaded());
        }), l(0, e, "tick", function() {
            return this._tick;
        }, function(t) {
            this._tick != t && (this._tick = t, this.callLater(this.changeValue));
        }), l(0, e, "sizeGrid", function() {
            return this._bg.sizeGrid;
        }, function(t) {
            this._bg.sizeGrid = t, this._bar.sizeGrid = t, this._progress && (this._progress.sizeGrid = this._bar.sizeGrid);
        }), l(0, e, "allowClickBack", function() {
            return this._allowClickBack;
        }, function(t) {
            this._allowClickBack != t && (this._allowClickBack = t, t ? this._bg.on("mousedown", this, this.onBgMouseDown) : this._bg.off("mousedown", this, this.onBgMouseDown));
        }), l(0, e, "max", function() {
            return this._max;
        }, function(t) {
            this._max != t && (this._max = t, this.callLater(this.changeValue));
        }), l(0, e, "min", function() {
            return this._min;
        }, function(t) {
            this._min != t && (this._min = t, this.callLater(this.changeValue));
        }), l(0, e, "bar", function() {
            return this._bar;
        }), l(0, e, "value", function() {
            return this._value;
        }, function(t) {
            if (this._value != t) {
                var i = this._value;
                this._value = t, this.changeValue(), this._value != i && this.sendChangeEvent();
            }
        }), r(i, [ "label", function() {
            return this.label = new $();
        } ]), i;
    }(E), Z = function(t) {
        function h(t) {
            this.gameStopHD = !1, this.iconImgTl = null, this._iconImage = null, this._moreBox = null, 
            this._gameBox = null, this.screenType = 0, this._moreGameDataUrl = "https://abc.layabox.com/public/more/gamelist2.json", 
            this._iconImageObj = null, this.clickCallBack = null, this.closeCallBack = null, 
            this.isShow = !1, this.dinfo = null, this.ErrorUrlHttps = "https://elastic.layabox.com/", 
            this.tongjiType = "bdm", void 0 === t && (t = 0), h.__super.call(this), this.screenType = t, 
            this.init();
        }
        var e, s;
        a(h, "laya.ui.MoreGame", R);
        var l = h.prototype;
        return l.getLocalDateString = function(t) {
            void 0 === t && (t = 0);
            var i = this.getDateByTimestamp(t).toLocaleDateString();
            if (u.onLimixiu || u.onMiniGame) {
                var e = new Date();
                i = h.toLocaleDateString(e.getTime());
            }
            var s = new RegExp("/", "g");
            return i.replace(s, "-");
        }, l.getDateByTimestamp = function(t) {
            return void 0 === t && (t = 0), t && "" != t ? new Date(t) : new Date();
        }, l.reportError = function(t, i, e) {
            void 0 === i && (i = ""), e = e || {};
            var s = Date.now(), o = new Date(s + 0);
            e.date = o.toLocaleString(), e.etype = t, "error" != t && "statistics" != t && (t = "statistics"), 
            e.version = "V0.0.1", e.gameId = 10100, e.dinfo = this.dinfo, e.channel = -1e3, 
            e.msg = i, e["@timestamp"] = o.toISOString(), e.user = this.getUserId(), e.openid = this.getOpenId();
            var r = h.getDay(o);
            e.rdate = r, e.day = o.getDate() + "", e.hour = o.getHours() + "", e.minute = o.getMinutes() + "", 
            e.gameurl = n.baseURI, e.regTime = 0, "error" == t ? this.sendLog(e, this.tongjiType + "error-" + r.substring(0, 6) + "/" + t + "/", t) : this.sendLog(e, this.tongjiType + "-" + r.substring(0, 6) + "/" + t + "/", t);
        }, l.getUserId = function() {
            var t = parseInt(S.getItem("layauserid") + "") || -1;
            return -1 == t && (t = this.randRange(0, 1e9), S.setItem("layauserid", t + "")), 
            t;
        }, l.getOpenId = function() {
            var t = S.getItem("openid");
            if (null == t || "" == t) {
                t = "";
                for (var i = 0; 32 > i; i++) {
                    var e = this.randRange(0, 62);
                    t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(e);
                }
                S.setItem("openid", t);
            }
            return t;
        }, l.sendLog = function(t, i, e) {
            var s = this, h = new y();
            h.on("error", this, function(t, i, e) {
                e && -1 != e.indexOf("[404]") && new y().send(s.ErrorUrlHttps + "garbage/" + i + "/", JSON.stringify(t), "post", "text", [ "Content-Type", "application/json" ]);
            }, [ t, e ]), u.onBDMiniGame && (t.gameurl = ""), h.send(this.ErrorUrlHttps + i, JSON.stringify(t), "post", "text", [ "Content-Type", "application/json" ]);
        }, l.initEvent = function() {
            this.on("click", this, this.onIconClick);
        }, l.onStageResize = function() {
            var t = Math.min(o.stage.width / o.stage.designWidth, o.stage.height / o.stage.designHeight);
            o.stage.width < 720 && (t = .9), this._moreBox && this._moreBox.scale(t, t), this._gameBox && this._gameBox.scale(t, t);
        }, l.tada = function(t, i, e, s) {
            void 0 === e && (e = 1.1), void 0 === s && (s = 1);
            var h = new T();
            return h.reset(), h.to(t, {
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
            }, .1 * i), h.play(0), h;
        }, l.dispose = function() {
            this.removeEvent(), this.gameStopHD = !0, h._moreGameData = null, this._iconImageObj = null, 
            this.clickCallBack = null, this.closeCallBack = null, this.iconImgTl && (this.iconImgTl.offAll("complete"), 
            this.iconImgTl = null), this._moreBox && (this._moreBox.removeChildren(), this._moreBox = null), 
            this._gameBox && (this._gameBox.removeChildren(), this._gameBox = null), this._iconImage && (this._iconImage.removeSelf(), 
            this._iconImage = null);
        }, l.onSetIconType = function(t) {
            this.gameStopHD = !t, this.visible = t;
        }, l.checkIconImgHD = function() {
            this.iconImgTl ? this.iconImgTl.play(0) : this.iconImgTl = this.tada(this._iconImage, 1200, 1.1, .9), 
            this.iconImgTl.on("complete", this, this.onTlComplete);
        }, l.onTlComplete = function() {
            if (this.parent) {
                if (this._iconImage.scale(.9, .9), this._iconImage.rotation = 0, this.gameStopHD && this.iconImgTl) return this.iconImgTl.offAll("complete"), 
                void (this.iconImgTl = null);
                o.timer.once(1e3, this, this.onYanChiPlay);
            } else this.iconImgTl && (this.iconImgTl.offAll(), this.iconImgTl = null);
        }, l.onYanChiPlay = function() {
            this.parent && this.iconImgTl ? this.iconImgTl.play(0) : this.iconImgTl && (this.iconImgTl.offAll("complete"), 
            this.iconImgTl = null);
        }, l.removeEvent = function() {
            this.off("click", this, this.onIconClick);
        }, l.onIconClick = function() {
            this.isShow = !0, null != this.clickCallBack && this.clickCallBack.run();
            var t = S.getItem("currentTime"), i = this.getLocalDateString();
            t != i ? (S.setItem("currentTime", i), this.reportError(h._moreGameData.statid1)) : this.reportError(h._moreGameData.statid2), 
            this.onResLoaded();
        }, l.onResLoaded = function() {
            if (this._moreBox) this._moreBox.visible = !0; else {
                this._moreBox = new W(), o.stage.addChild(this._moreBox), this._moreBox.zOrder = 99999, 
                this._moreBox.left = this._moreBox.right = this._moreBox.top = this._moreBox.bottom = 0;
                var t = this.onCreateImage(h.onGetAtlasDanImgUrl("img_white_bg"), this._moreBox);
                t.top = t.left = t.right = t.bottom = 0, t.sizeGrid = "1,1,1,1,1";
                var i = this.onCreateImage(h.onGetAtlasDanImgUrl("hengfengexian"), this._moreBox);
                i.left = i.right = 0, i.y = 132, i.alpha = .2;
                var s = this.onCreateImage(h.onGetAtlasDanImgUrl("img_font_jingcai"), this._moreBox);
                s.on("click", this, this.onJiantouImgClick), this.isQMP() && this.screenType ? s.pos(15, 70) : s.pos(15, 45);
                var n = new rt();
                this._moreBox.addChild(n), n.itemRender = e, n.selectEnable = !0, n.vScrollBarSkin = "", 
                n.scrollBar.autoHide = !0, n.scrollBar.elasticDistance = 250, n.renderHandler = new v(this, this.onGameListRender);
                var r = h._moreGameData.marvellousGame.gameList, a = [];
                a.push(r[0]), a.push(r[1]);
                var l = this.RandomNumBoth(a.length, r.length - a.length, r.length);
                if (!l) return void (this.visible = !1);
                try {
                    for (var c = 0, u = l.length; u > c; c++) {
                        var _ = l[c];
                        a.push(r[_]);
                    }
                    h._moreGameData.marvellousGame.gameList = [], h._moreGameData.marvellousGame.gameList = a, 
                    n.array = h._moreGameData.marvellousGame.gameList;
                } catch (t) {
                    n.array = h._moreGameData.marvellousGame.gameList;
                }
                this.screenType && (n.spaceY = 10, n.width = 690, this.isQMP() ? n.height = o.stage.height + 130 : n.height = 1139, 
                n.y = 139, n.centerX = 0), this.onStageResize();
            }
        }, l.RandomNumBoth = function(t, i, e) {
            for (var s = [], h = t; e > h; h++) s.push(h);
            var n = [], o = s.length;
            for (h = 0; o > h; h++) {
                var r = (s.length, Math.floor(Math.random() * s.length));
                if (n.push(s[r]), s.splice(r, 1), s.length <= o - i) return n;
            }
            return null;
        }, l.isQMP = function() {
            var t, i = !1;
            if (t = "horizontal" == o.stage.screenMode ? u.height % 9 : u.width % 9, u.onAndroid && 0 == t) {
                var e;
                e = "horizontal" == o.stage.screenMode ? u.width : u.height, -1 != [ 2280, 2160, 2244, 3120, 2248, 2340, 2310 ].indexOf(e) && (i = !0);
            }
            var s = /iPhone/gi.test(u.window.navigator.userAgent) && 375 == Math.min(u.clientHeight, u.clientWidth) && 812 == Math.max(u.clientHeight, u.clientWidth), h = 414 == Math.min(u.clientHeight, u.clientWidth) && 896 == Math.max(u.clientHeight, u.clientWidth);
            return !u.onMiniGame && !u.onBDMiniGame || u.onAndroid || !s && !h || (i = !0), 
            i;
        }, l.onDrawShapes = function(t, i, e, s) {
            void 0 === e && (e = 5), void 0 === s && (s = !1);
            var h = e;
            s && (h = 0);
            var n = new L();
            return n.graphics.drawPath(0, 0, [ [ "moveTo", e, 0 ], [ "lineTo", 105, 0 ], [ "arcTo", t, 0, t, e, e ], [ "lineTo", t, i ], [ "arcTo", t, i + e, 105, i + e, h ], [ "lineTo", e, i + e ], [ "arcTo", 0, i + e, 0, i, h ], [ "lineTo", 0, e ], [ "arcTo", 0, 0, e, 0, e ], [ "closePath" ] ], {
                fillStyle: "#ff0000"
            }), n;
        }, l.onCreateMaskImg = function(t, i) {
            var e = this.onCreateImage(h.onGetAtlasDanImgUrl("dayuan"), i), s = this.onCreateImage(t, e);
            s.pos(11, 10);
            var n = new L();
            return n.graphics.drawCircle(71, 74, 68, "#ff0000"), s.mask = n, e.scale(.7, .7), 
            e;
        }, l.onGameListRender = function(t, i) {
            var e = h._moreGameData.marvellousGame.gameList;
            if (!(0 > i || i > e.length - 1)) {
                var s = e[i];
                t.init(s, this.screenType, new v(this, this.onItemClickCallBack));
            }
        }, l.onItemClickCallBack = function(t) {
            var i = this;
            if (swan.navigateToMiniProgram) {
                var e = t.appKey, s = t.path, h = t.extendInfo;
                swan.navigateToMiniProgram({
                    appKey: e,
                    path: s,
                    extraData: h,
                    success: function(t) {},
                    fail: function(t) {},
                    complete: function(e) {
                        i.reportError(t.statid);
                    }.bind(this)
                });
            }
        }, l.onJiantouImgClick = function(t) {
            this.isShow = !1, this._moreBox && (this._moreBox.visible = !1), null != this.closeCallBack && this.closeCallBack.run();
        }, l.onCreateLabel = function(t, i, e, s, h, n, o) {
            void 0 === e && (e = 24), void 0 === s && (s = "#000000"), void 0 === h && (h = !1), 
            void 0 === n && (n = "center"), void 0 === o && (o = 10);
            var r = new $();
            return r.text = t, r.font = "Microsoft YaHei", r.fontSize = e, r.color = s, r.bold = !0, 
            r.leading = o, r.valign = "middle", r.align = n, r.wordWrap = h, i.addChild(r), 
            r;
        }, l.onCreateImage = function(t, i) {
            var e = new U();
            return e.skin = t, i.addChild(e), e;
        }, l.init = function() {
            var t = u.window.navigator.userAgent.indexOf("SwanGame") > -1;
            this.visible = !1, t && (this.dinfo = JSON.stringify(laya.bd.mini.BMiniAdapter.systemInfo), 
            this.onGetAdvsListData());
        }, l.randRange = function(t, i) {
            return Math.floor(Math.random() * (i - t + 1)) + t;
        }, l.onGetAdvsListData = function() {
            var t = this, i = this.randRange(1e4, 1e6), e = this._moreGameDataUrl + "?" + i;
            h._http.open("get", e, !0), h._http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
            h._http.responseType = "text", h._http.onerror = function(i) {
                t._onError(i);
            }, h._http.onload = function(i) {
                t._onLoad(i);
            }, h._http.send(null);
        }, l._onError = function(t) {
            this.error("Request failed Status:" + h._http.status + " text:" + h._http.statusText);
        }, l._onLoad = function(t) {
            var i = h._http, e = void 0 !== i.status ? i.status : 200;
            200 === e || 204 === e || 0 === e ? this.complete() : this.error("[" + i.status + "]" + i.statusText + ":" + i.responseURL);
        }, l.error = function(t) {
            this.event("error", t);
        }, l.complete = function() {
            try {
                var t = h._http.response || h._http.responseText;
                h._moreGameData = JSON.parse(t), this.initUI();
            } catch (t) {
                !1, this.error(t.message);
            }
        }, l.initUI = function() {
            h._moreGameData.isOpen && this.screenType ? (this._iconImage || (this._iconImage = new U(), 
            this.addChild(this._iconImage)), this._iconImage.skin = h.onGetImgSkinUrl(h._moreGameData.icon), 
            this._iconImageObj && (this._iconImage.size(this._iconImageObj.width, this._iconImageObj.height), 
            this._iconImage.pivot(this._iconImageObj.width / 2, this._iconImageObj.height / 2), 
            this._iconImage.pos(this._iconImageObj.width / 2, this._iconImageObj.height / 2)), 
            this.visible = !0, this.initEvent(), this.gameStopHD = !1, this.checkIconImgHD()) : this.visible = !1;
        }, l.setIconSize = function(t, i) {
            this._iconImage && (this._iconImage.size(t, i), this._iconImage.pivot(t / 2, i / 2), 
            this._iconImage.pos(t / 2, i / 2)), this._iconImageObj = {
                width: t,
                height: i
            };
        }, h.toLocaleDateString = function(t) {
            return h.getDateFormatStr(t, "/");
        }, h.getDateFormatStr = function(t, i) {
            void 0 === i && (i = "yynndd");
            var e = new Date(t), s = e.getFullYear(), h = e.getMonth() + 1, n = e.getDate(), o = e.getHours(), r = e.getMinutes(), a = e.getSeconds();
            switch (i) {
              case "yynndd":
                return s.toString() + "年" + h.toString() + "月" + n.toString() + "日";

              case "/":
                return s.toString() + "/" + h.toString() + "/" + n.toString();
            }
            return s.toString() + "年" + h.toString() + "月" + n.toString() + "日" + o.toString() + "时" + r.toString() + "分" + a.toString() + "秒";
        }, h.getDay = function(t) {
            var i = t.getMonth() + 1, e = t.getDate();
            return t.getFullYear() + "" + (10 > i ? "0" + i : i) + (10 > e ? "0" + e : e);
        }, h.onGetAtlasDanImgUrl = function(t) {
            return h._moreGameData.imgPath + h._moreGameData.atlas + t + ".png";
        }, h.onGetImgSkinUrl = function(t) {
            return h._moreGameData.imgPath + t;
        }, h.onGetIconImgSkinUrl = function(t) {
            return h._moreGameData.iconPath + t;
        }, h._moreGameData = null, r(h, [ "_http", function() {
            return this._http = new u.window.XMLHttpRequest();
        } ]), h.__init$ = function() {
            e = function(t) {
                function i() {
                    this.titleLabel = null, this.gameListBox = null, i.__super.call(this);
                }
                a(i, "", W);
                var e = i.prototype;
                return e.init = function(t, i, e) {
                    if (this.titleLabel ? this.titleLabel.text = t.title : (this.titleLabel = this.onCreateLabel(t.title, this, 32, "#3d3939"), 
                    this.titleLabel.pos(8, 0), this.titleLabel.size(162, 50)), this.gameListBox) for (h = 0, 
                    n = this.gameListBox._children.length; n > h; h++) (o = this.gameListBox._children[h]).init(t.gameList[h], i, e); else {
                        this.gameListBox = new W(), this.addChild(this.gameListBox);
                        for (var h = 0, n = t.gameList.length; n > h; h++) {
                            var o = new s();
                            o.init(t.gameList[h], i, e), o.x = 0 + 175 * h, o.y = 65, this.gameListBox.addChild(o);
                        }
                    }
                    this.size(695, 340);
                }, e.onCreateLabel = function(t, i, e, s, h) {
                    void 0 === e && (e = 26), void 0 === s && (s = "#000000"), void 0 === h && (h = !0);
                    var n = new $();
                    return n.text = t, n.font = "Microsoft YaHei", n.fontSize = e, n.color = s, n.bold = h, 
                    n.leading = 10, n.valign = "middle", n.align = "center", n.overflow = "hidden", 
                    i.addChild(n), n;
                }, i;
            }(), s = function(t) {
                function i() {
                    this.kuangImg = null, this.iconNameLabel = null, this.iconImg = null, this.playImg = null, 
                    this.itemData = null, this.callBackHandler = null, i.__super.call(this);
                }
                a(i, "", W);
                var e = i.prototype;
                return e.MoveGameItem = function() {}, e.initEvent = function() {
                    this.on("click", this, this.onItemClick);
                }, e.onItemClick = function() {
                    null != this.callBackHandler && this.callBackHandler.runWith([ this.itemData ]);
                }, e.init = function(t, i, e) {
                    if (this.itemData = t, this.callBackHandler = e, this.kuangImg ? this.kuangImg.skin = h.onGetAtlasDanImgUrl("dayuan") : this.kuangImg = this.onCreateImage(h.onGetAtlasDanImgUrl("dayuan"), this), 
                    this.iconImg) this.iconImg.skin = h.onGetIconImgSkinUrl(t.icon); else {
                        this.iconImg = this.onCreateImage(h.onGetIconImgSkinUrl(t.icon), this);
                        var s = new L();
                        s.graphics.drawCircle(71, 74, 68, "#ff0000"), this.iconImg.mask = s, this.iconImg.pos(13, 10);
                    }
                    this.iconNameLabel ? this.iconNameLabel.text = t.name : (this.iconNameLabel = this.onCreateLabel(t.name, this, 28, "#3d3939"), 
                    this.iconNameLabel.pos(7, 165)), this.playImg ? this.playImg.skin = h.onGetAtlasDanImgUrl("img_play") : (this.playImg = this.onCreateImage(h.onGetAtlasDanImgUrl("img_play"), this), 
                    this.playImg.pos(12, 210)), this.size(165, 270), this.initEvent();
                }, e.onCreateLabel = function(t, i, e, s, h) {
                    void 0 === e && (e = 24), void 0 === s && (s = "#000000"), void 0 === h && (h = !1);
                    var n = new $();
                    return n.text = t, n.font = "Microsoft YaHei", n.fontSize = e, n.color = s, n.bold = h, 
                    n.leading = 10, n.valign = "middle", n.align = "center", n.size(152, 44), n.overflow = "hidden", 
                    i.addChild(n), n;
                }, e.onCreateImage = function(t, i) {
                    var e = new U();
                    return e.skin = t, i.addChild(e), e;
                }, i;
            }();
        }, h;
    }(), tt = function(t) {
        function i() {
            this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, this.group = null, 
            this.isModal = !1, this.isShowEffect = !0, this.isPopupCenter = !0, this.closeType = null, 
            this._dragArea = null, this._param = null, this._effectTween = null, i.__super.call(this), 
            this.popupEffect = i.manager.popupEffectHandler, this.closeEffect = i.manager.closeEffectHandler, 
            this._dealDragArea(), this.on("click", this, this._onClick);
        }
        a(i, "laya.ui.Dialog", t);
        var e = i.prototype;
        return e._dealDragArea = function() {
            var t = this.getChildByName("drag");
            t && (this.dragArea = t._x + "," + t._y + "," + t.width + "," + t.height, t.removeSelf());
        }, e._onMouseDown = function(t) {
            var i = this.getMousePoint();
            this._dragArea.contains(i.x, i.y) ? this.startDrag() : this.stopDrag();
        }, e._onClick = function(t) {
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
        }, e.open = function(t, e) {
            void 0 === t && (t = !0), this._dealDragArea(), this._param = e, i.manager.open(this, t, this.isShowEffect), 
            i.manager.lock(!1);
        }, e.close = function(t) {
            this.closeType = t, i.manager.close(this);
        }, e.destroy = function(i) {
            void 0 === i && (i = !0), this.closeHandler = null, this.popupEffect = null, this.closeEffect = null, 
            this._dragArea = null, t.prototype.destroy.call(this, i);
        }, e.show = function(t, i) {
            void 0 === t && (t = !1), void 0 === i && (i = !0), this._open(!1, t, i);
        }, e.popup = function(t, i) {
            void 0 === t && (t = !1), void 0 === i && (i = !0), this._open(!0, t, i);
        }, e._open = function(t, e, s) {
            this.isModal = t, this.isShowEffect = s, i.manager.lock(!0), this.open(e);
        }, l(0, e, "dragArea", function() {
            return this._dragArea ? this._dragArea.toString() : null;
        }, function(t) {
            if (t) {
                var i = A.fillArray([ 0, 0, 0, 0 ], t, Number);
                this._dragArea = new B(i[0], i[1], i[2], i[3]), this.on("mousedown", this, this._onMouseDown);
            } else this._dragArea = null, this.off("mousedown", this, this._onMouseDown);
        }), l(0, e, "isPopup", function() {
            return null != this.parent;
        }), l(0, e, "zOrder", t.prototype._$get_zOrder, function(t) {
            o.superSet(R, this, "zOrder", t), i.manager._checkMask();
        }), l(1, i, "manager", function() {
            return i._manager = i._manager || new G();
        }, function(t) {
            i._manager = t;
        }), i.setLockView = function(t) {
            i.manager.setLockView(t);
        }, i.lock = function(t) {
            i.manager.lock(t);
        }, i.closeAll = function() {
            i.manager.closeAll();
        }, i.getDialogsByGroup = function(t) {
            return i.manager.getDialogsByGroup(t);
        }, i.closeByGroup = function(t) {
            return i.manager.closeByGroup(t);
        }, i.CLOSE = "close", i.CANCEL = "cancel", i.SURE = "sure", i.NO = "no", i.YES = "yes", 
        i.OK = "ok", i._manager = null, i;
    }(R), it = function(t) {
        function i() {
            this._items = null, this._selectedIndex = 0, i.__super.call(this), this._setIndexHandler = v.create(this, this.setIndex, null, !1);
        }
        a(i, "laya.ui.ViewStack", t);
        var e = i.prototype;
        return o.imps(e, {
            "laya.ui.IItem": !0
        }), e.setItems = function(t) {
            this.removeChildren();
            for (var i = 0, e = 0, s = t.length; s > e; e++) {
                var h = t[e];
                h && (h.name = "item" + i, this.addChild(h), i++);
            }
            this.initItems();
        }, e.addItem = function(t) {
            t.name = "item" + this._items.length, this.addChild(t), this.initItems();
        }, e._afterInited = function() {
            this.initItems();
        }, e.initItems = function() {
            this._items = [];
            for (var t = 0; 1e4 > t; t++) {
                var i = this.getChildByName("item" + t);
                if (null == i) break;
                this._items.push(i), i.visible = t == this._selectedIndex;
            }
        }, e.setSelect = function(t, i) {
            this._items && t > -1 && t < this._items.length && (this._items[t].visible = i);
        }, e.setIndex = function(t) {
            this.selectedIndex = t;
        }, l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            if (this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t) this.selectedIndex = parseInt(t); else for (var i in this._dataSource) this.hasOwnProperty(i) && (this[i] = this._dataSource[i]);
        }), l(0, e, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, 
            this.setSelect(this._selectedIndex, !0));
        }), l(0, e, "selection", function() {
            return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._items.indexOf(t);
        }), l(0, e, "items", function() {
            return this._items;
        }), l(0, e, "setIndexHandler", function() {
            return this._setIndexHandler;
        }, function(t) {
            this._setIndexHandler = t;
        }), i;
    }(W), et = function(t) {
        function i() {
            this._space = 0, this._align = "none", this._itemChanged = !1, i.__super.call(this);
        }
        a(i, "laya.ui.LayoutBox", W);
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
        }, l(0, e, "space", function() {
            return this._space;
        }, function(t) {
            this._space = t, this._setItemChanged();
        }), l(0, e, "align", function() {
            return this._align;
        }, function(t) {
            this._align = t, this._setItemChanged();
        }), i;
    }(), st = function(t) {
        function i(t, e) {
            this.selectHandler = null, this._items = null, this._selectedIndex = -1, this._skin = null, 
            this._direction = "horizontal", this._space = 0, this._labels = null, this._labelColors = null, 
            this._labelFont = null, this._labelStrokeColor = null, this._strokeColors = null, 
            this._labelStroke = NaN, this._labelSize = 0, this._labelBold = !1, this._labelPadding = null, 
            this._labelAlign = null, this._stateNum = 0, this._labelChanged = !1, i.__super.call(this), 
            this.skin = e, this.labels = t;
        }
        a(i, "laya.ui.UIGroup", t);
        var e = i.prototype;
        return o.imps(e, {
            "laya.ui.IItem": !0
        }), e.preinitialize = function() {
            this.mouseEnabled = !0;
        }, e.destroy = function(t) {
            void 0 === t && (t = !0), laya.ui.UIComponent.prototype.destroy.call(this, t), this._items && (this._items.length = 0), 
            this._items = null, this.selectHandler = null;
        }, e.addItem = function(t, i) {
            void 0 === i && (i = !0);
            var e = t, s = this._items.length;
            if (e.name = "item" + s, this.addChild(e), this.initItems(), i && s > 0) {
                var h = this._items[s - 1];
                "horizontal" == this._direction ? e.x = h._x + h.width + this._space : e.y = h._y + h.height + this._space;
            } else i && (e.x = 0, e.y = 0);
            return s;
        }, e.delItem = function(t, i) {
            void 0 === i && (i = !0);
            var e = this._items.indexOf(t);
            if (-1 != e) {
                var s = t;
                this.removeChild(s);
                for (var h = e + 1, n = this._items.length; n > h; h++) {
                    var o = this._items[h];
                    o.name = "item" + (h - 1), i && ("horizontal" == this._direction ? o.x -= s.width + this._space : o.y -= s.height + this._space);
                }
                if (this.initItems(), this._selectedIndex > -1) {
                    var r;
                    r = this._selectedIndex < this._items.length ? this._selectedIndex : this._selectedIndex - 1, 
                    this._selectedIndex = -1, this.selectedIndex = r;
                }
            }
        }, e._afterInited = function() {
            this.initItems();
        }, e.initItems = function() {
            this._items || (this._items = []), this._items.length = 0;
            for (var t = 0; 1e4 > t; t++) {
                var i = this.getChildByName("item" + t);
                if (null == i) break;
                this._items.push(i), i.selected = t === this._selectedIndex, i.clickHandler = v.create(this, this.itemClick, [ t ], !1);
            }
        }, e.itemClick = function(t) {
            this.selectedIndex = t;
        }, e.setSelect = function(t, i) {
            this._items && t > -1 && t < this._items.length && (this._items[t].selected = i);
        }, e._skinLoaded = function() {
            this._setLabelChanged(), this.event("loaded");
        }, e.createItem = function(t, i) {
            return null;
        }, e.changeLabels = function() {
            if (this._labelChanged = !1, this._items) for (var t = 0, i = 0, e = this._items.length; e > i; i++) {
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
        }, e.commitMeasure = function() {
            this.runCallLater(this.changeLabels);
        }, e._setLabelChanged = function() {
            this._labelChanged || (this._labelChanged = !0, this.callLater(this.changeLabels));
        }, l(0, e, "labelStrokeColor", function() {
            return this._labelStrokeColor;
        }, function(t) {
            this._labelStrokeColor != t && (this._labelStrokeColor = t, this._setLabelChanged());
        }), l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this._skin && !b.getRes(this._skin) ? o.loader.load(this._skin, v.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
        }), l(0, e, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this.setSelect(this._selectedIndex, !1), this._selectedIndex = t, 
            this.setSelect(t, !0), this.event("change"), this.selectHandler && this.selectHandler.runWith(this._selectedIndex));
        }), l(0, e, "labels", function() {
            return this._labels;
        }, function(t) {
            if (this._labels != t) {
                if (this._labels = t, this.removeChildren(), this._setLabelChanged(), this._labels) for (var i = this._labels.split(","), e = 0, s = i.length; s > e; e++) {
                    var h = this.createItem(this._skin, i[e]);
                    h.name = "item" + e, this.addChild(h);
                }
                this.initItems();
            }
        }), l(0, e, "strokeColors", function() {
            return this._strokeColors;
        }, function(t) {
            this._strokeColors != t && (this._strokeColors = t, this._setLabelChanged());
        }), l(0, e, "labelColors", function() {
            return this._labelColors;
        }, function(t) {
            this._labelColors != t && (this._labelColors = t, this._setLabelChanged());
        }), l(0, e, "labelStroke", function() {
            return this._labelStroke;
        }, function(t) {
            this._labelStroke != t && (this._labelStroke = t, this._setLabelChanged());
        }), l(0, e, "labelSize", function() {
            return this._labelSize;
        }, function(t) {
            this._labelSize != t && (this._labelSize = t, this._setLabelChanged());
        }), l(0, e, "stateNum", function() {
            return this._stateNum;
        }, function(t) {
            this._stateNum != t && (this._stateNum = t, this._setLabelChanged());
        }), l(0, e, "labelBold", function() {
            return this._labelBold;
        }, function(t) {
            this._labelBold != t && (this._labelBold = t, this._setLabelChanged());
        }), l(0, e, "labelFont", function() {
            return this._labelFont;
        }, function(t) {
            this._labelFont != t && (this._labelFont = t, this._setLabelChanged());
        }), l(0, e, "labelPadding", function() {
            return this._labelPadding;
        }, function(t) {
            this._labelPadding != t && (this._labelPadding = t, this._setLabelChanged());
        }), l(0, e, "direction", function() {
            return this._direction;
        }, function(t) {
            this._direction = t, this._setLabelChanged();
        }), l(0, e, "space", function() {
            return this._space;
        }, function(t) {
            this._space = t, this._setLabelChanged();
        }), l(0, e, "items", function() {
            return this._items;
        }), l(0, e, "selection", function() {
            return this._selectedIndex > -1 && this._selectedIndex < this._items.length ? this._items[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._items.indexOf(t);
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.labels = t.join(",") : o.superSet(W, this, "dataSource", t);
        }), i;
    }(W), ht = function(t) {
        function i(t, e) {
            void 0 === e && (e = ""), i.__super.call(this, t, e);
        }
        a(i, "laya.ui.CheckBox", t);
        var e = i.prototype;
        return e.preinitialize = function() {
            laya.ui.UIComponent.prototype.preinitialize.call(this), this.toggle = !0, this._autoSize = !1;
        }, e.initialize = function() {
            t.prototype.initialize.call(this), this.createText(), this._text.align = "left", 
            this._text.valign = "top", this._text.width = 0;
        }, l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "boolean" == typeof t ? this.selected = t : "string" == typeof t ? this.selected = "true" === t : o.superSet(V, this, "dataSource", t);
        }), i;
    }(V), nt = function(t) {
        function i() {
            this._list = null, this._source = null, this._renderHandler = null, this._spaceLeft = 10, 
            this._spaceBottom = 0, this._keepStatus = !0, i.__super.call(this), this.width = this.height = 200;
        }
        a(i, "laya.ui.Tree", t);
        var e = i.prototype;
        return o.imps(e, {
            "laya.ui.IRender": !0
        }), e.destroy = function(t) {
            void 0 === t && (t = !0), laya.ui.UIComponent.prototype.destroy.call(this, t), this._list && this._list.destroy(t), 
            this._list = null, this._source = null, this._renderHandler = null;
        }, e.createChildren = function() {
            this.addChild(this._list = new rt()), this._list.renderHandler = v.create(this, this.renderItem, null, !1), 
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
                var h = t.getChildByName("folder");
                h && (2 == h.clipY ? h.index = e.isDirectory ? 0 : 1 : h.index = e.isDirectory ? e.isOpen ? 1 : 0 : 2), 
                this._renderHandler && this._renderHandler.runWith([ t, i ]);
            }
        }, e.onArrowClick = function(t) {
            var i = t.currentTarget.tag;
            this._list.array[i].isOpen = !this._list.array[i].isOpen, this.event("open"), this._list.array = this.getArray();
        }, e.setItemState = function(t, i) {
            this._list.array[t] && (this._list.array[t].isOpen = i, this._list.array = this.getArray());
        }, e.fresh = function() {
            this._list.array = this.getArray(), this.repaint();
        }, e.parseXml = function(t, i, e, s) {
            var h, n = t.childNodes, o = n.length;
            if (!s) {
                h = {};
                var r, a = t.attributes;
                for (var l in a) {
                    var c = (r = a[l]).nodeName, u = r.nodeValue;
                    h[c] = "true" == u || "false" != u && u;
                }
                h.nodeParent = e, o > 0 && (h.isDirectory = !0), h.hasChild = o > 0, i.push(h);
            }
            for (var _ = 0; o > _; _++) {
                var d = n[_];
                this.parseXml(d, i, h, !1);
            }
        }, e.parseOpenStatus = function(t, i) {
            for (var e = 0, s = i.length; s > e; e++) {
                var h = i[e];
                if (h.isDirectory) for (var n = 0, o = t.length; o > n; n++) {
                    var r = t[n];
                    if (r.isDirectory && this.isSameParent(r, h) && h.label == r.label) {
                        h.isOpen = r.isOpen;
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
            for (var h in e = e.toLocaleLowerCase(), t) !(s = t[h]).isDirectory && String(s.label).toLowerCase().indexOf(e) > -1 && (s.x = 0, 
            i.push(s)), s.child && s.child.length > 0 && this.getFilterSource(s.child, i, e);
        }, l(0, e, "spaceBottom", function() {
            return this._list.spaceY;
        }, function(t) {
            this._list.spaceY = t;
        }), l(0, e, "keepStatus", function() {
            return this._keepStatus;
        }, function(t) {
            this._keepStatus = t;
        }), l(0, e, "itemRender", function() {
            return this._list.itemRender;
        }, function(t) {
            this._list.itemRender = t;
        }), l(0, e, "array", function() {
            return this._list.array;
        }, function(t) {
            this._keepStatus && this._list.array && t && this.parseOpenStatus(this._list.array, t), 
            this._source = t, this._list.array = this.getArray();
        }), l(0, e, "mouseHandler", function() {
            return this._list.mouseHandler;
        }, function(t) {
            this._list.mouseHandler = t;
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, o.superSet(W, this, "dataSource", t);
        }), l(0, e, "source", function() {
            return this._source;
        }), l(0, e, "scrollBar", function() {
            return this._list.scrollBar;
        }), l(0, e, "list", function() {
            return this._list;
        }), l(0, e, "scrollBarSkin", function() {
            return this._list.vScrollBarSkin;
        }, function(t) {
            this._list.vScrollBarSkin = t;
        }), l(0, e, "renderHandler", function() {
            return this._renderHandler;
        }, function(t) {
            this._renderHandler = t;
        }), l(0, e, "selectedIndex", function() {
            return this._list.selectedIndex;
        }, function(t) {
            this._list.selectedIndex = t;
        }), l(0, e, "spaceLeft", function() {
            return this._spaceLeft;
        }, function(t) {
            this._spaceLeft = t;
        }), l(0, e, "selectedItem", function() {
            return this._list.selectedItem;
        }, function(t) {
            this._list.selectedItem = t;
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(W, this, "width", t), this._list.width = t;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(W, this, "height", t), this._list.height = t;
        }), l(0, e, "xml", null, function(t) {
            var i = [];
            this.parseXml(t.childNodes[0], i, null, !0), this.array = i;
        }), l(0, e, "selectedPath", function() {
            return this._list.selectedItem ? this._list.selectedItem.path : null;
        }), i;
    }(W), ot = function(t) {
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
            laya.display.Node.prototype.addChild.call(this, this._content = new W());
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
            var t = this.contentWidth || 1, i = this.contentHeight || 1, e = this._vScrollBar, s = this._hScrollBar, h = e && i > this._height, n = s && t > this._width, o = h ? this._width - e.width : this._width, r = n ? this._height - s.height : this._height;
            e && (e.x = this._width - e.width, e.y = 0, e.height = this._height - (n ? s.height : 0), 
            e.scrollSize = Math.max(.033 * this._height, 1), e.thumbPercent = r / i, e.setScroll(0, i - r, e.value)), 
            s && (s.x = 0, s.y = this._height - s.height, s.width = this._width - (h ? e.width : 0), 
            s.scrollSize = Math.max(.033 * this._width, 1), s.thumbPercent = o / t, s.setScroll(0, t - o, s.value));
        }, e._sizeChanged = function() {
            laya.ui.UIComponent.prototype._sizeChanged.call(this), this.setContentSize(this._width, this._height);
        }, e.setContentSize = function(t, i) {
            var e = this._content;
            e.width = t, e.height = i, e._style.scrollRect || (e.scrollRect = B.create()), e._style.scrollRect.setTo(0, 0, t, i), 
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
            this._usedCache || (this._usedCache = o.superGet(W, this, "cacheAs")), o.superSet(W, this, "cacheAs", "none"), 
            this._hScrollBar && this._hScrollBar.once("end", this, this.onScrollEnd), this._vScrollBar && this._vScrollBar.once("end", this, this.onScrollEnd);
        }, e.onScrollEnd = function() {
            o.superSet(W, this, "cacheAs", this._usedCache);
        }, e._setScrollChanged = function() {
            this._scrollChanged || (this._scrollChanged = !0, this.callLater(this.changeScroll));
        }, l(0, e, "numChildren", function() {
            return this._content.numChildren;
        }), l(0, e, "hScrollBarSkin", function() {
            return this._hScrollBar ? this._hScrollBar.skin : null;
        }, function(t) {
            null == this._hScrollBar && (laya.display.Node.prototype.addChild.call(this, this._hScrollBar = new ft()), 
            this._hScrollBar.on("change", this, this.onScrollBarChange, [ this._hScrollBar ]), 
            this._hScrollBar.target = this._content, this._hScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0, 
            this._setScrollChanged()), this._hScrollBar.skin = t;
        }), l(0, e, "contentWidth", function() {
            for (var t = 0, i = this._content.numChildren - 1; i > -1; i--) {
                var e = this._content.getChildAt(i);
                t = Math.max(e._x + e.width * e.scaleX - e.pivotX, t);
            }
            return t;
        }), l(0, e, "contentHeight", function() {
            for (var t = 0, i = this._content.numChildren - 1; i > -1; i--) {
                var e = this._content.getChildAt(i);
                t = Math.max(e._y + e.height * e.scaleY - e.pivotY, t);
            }
            return t;
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(W, this, "width", t), this._setScrollChanged();
        }), l(0, e, "hScrollBar", function() {
            return this._hScrollBar;
        }), l(0, e, "content", function() {
            return this._content;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(W, this, "height", t), this._setScrollChanged();
        }), l(0, e, "vScrollBarSkin", function() {
            return this._vScrollBar ? this._vScrollBar.skin : null;
        }, function(t) {
            null == this._vScrollBar && (laya.display.Node.prototype.addChild.call(this, this._vScrollBar = new _t()), 
            this._vScrollBar.on("change", this, this.onScrollBarChange, [ this._vScrollBar ]), 
            this._vScrollBar.target = this._content, this._vScrollBar.elasticDistance = this._elasticEnabled ? 200 : 0, 
            this._setScrollChanged()), this._vScrollBar.skin = t;
        }), l(0, e, "vScrollBar", function() {
            return this._vScrollBar;
        }), l(0, e, "cacheAs", t.prototype._$get_cacheAs, function(t) {
            o.superSet(W, this, "cacheAs", t), this._usedCache = null, "none" !== t ? (this._hScrollBar && this._hScrollBar.on("start", this, this.onScrollStart), 
            this._vScrollBar && this._vScrollBar.on("start", this, this.onScrollStart)) : (this._hScrollBar && this._hScrollBar.off("start", this, this.onScrollStart), 
            this._vScrollBar && this._vScrollBar.off("start", this, this.onScrollStart));
        }), l(0, e, "elasticEnabled", function() {
            return this._elasticEnabled;
        }, function(t) {
            this._elasticEnabled = t, this._vScrollBar && (this._vScrollBar.elasticDistance = t ? 200 : 0), 
            this._hScrollBar && (this._hScrollBar.elasticDistance = t ? 200 : 0);
        }), i;
    }(W), rt = function(t) {
        function i() {
            this.selectHandler = null, this.renderHandler = null, this.mouseHandler = null, 
            this.selectEnable = !1, this.totalPage = 0, this._$componentType = "List", this._content = null, 
            this._scrollBar = null, this._itemRender = null, this._repeatX = 0, this._repeatY = 0, 
            this._repeatX2 = 0, this._repeatY2 = 0, this._spaceX = 0, this._spaceY = 0, this._array = null, 
            this._startIndex = 0, this._selectedIndex = -1, this._page = 0, this._isVertical = !0, 
            this._cellSize = 20, this._cellOffset = 0, this._isMoved = !1, this.cacheContent = !1, 
            this._createdLine = 0, this._cellChanged = !1, this._usedCache = null, this._elasticEnabled = !1, 
            this._preLen = 0, i.__super.call(this), this._cells = [], this._offset = new x();
        }
        a(i, "laya.ui.List", t);
        var e = i.prototype;
        return o.imps(e, {
            "laya.ui.IRender": !0,
            "laya.ui.IItem": !0
        }), e.destroy = function(t) {
            void 0 === t && (t = !0), this._content && this._content.destroy(t), this._scrollBar && this._scrollBar.destroy(t), 
            laya.ui.UIComponent.prototype.destroy.call(this, t), this._content = null, this._scrollBar = null, 
            this._itemRender = null, this._cells = null, this._array = null, this.selectHandler = this.renderHandler = this.mouseHandler = null;
        }, e.createChildren = function() {
            this.addChild(this._content = new W());
        }, e.onScrollStart = function() {
            this._usedCache || (this._usedCache = o.superGet(W, this, "cacheAs")), o.superSet(W, this, "cacheAs", "none"), 
            this._scrollBar.once("end", this, this.onScrollEnd);
        }, e.onScrollEnd = function() {
            o.superSet(W, this, "cacheAs", this._usedCache);
        }, e._removePreScrollBar = function() {
            var t = this.removeChildByName("scrollBar");
            t && t.destroy(!0);
        }, e.changeCells = function() {
            if (this._cellChanged = !1, this._itemRender) {
                this.scrollBar = this.getChildByName("scrollBar");
                var t = this._getOneCell(), i = t.width + this._spaceX || 1, e = t.height + this._spaceY || 1;
                this._width > 0 && (this._repeatX2 = this._isVertical ? Math.round(this._width / i) : Math.ceil(this._width / i)), 
                this._height > 0 && (this._repeatY2 = this._isVertical ? Math.ceil(this._height / e) : Math.round(this._height / e));
                var s = this._width ? this._width : i * this.repeatX - this._spaceX, h = this._height ? this._height : e * this.repeatY - this._spaceY;
                this._cellSize = this._isVertical ? e : i, this._cellOffset = this._isVertical ? e * Math.max(this._repeatY2, this._repeatY) - h - this._spaceY : i * Math.max(this._repeatX2, this._repeatX) - s - this._spaceX, 
                this._isVertical && this.vScrollBarSkin ? this._scrollBar.height = h : !this._isVertical && this.hScrollBarSkin && (this._scrollBar.width = s), 
                this.setContentSize(s, h);
                var n = this._isVertical ? this.repeatX : this.repeatY, o = (this._isVertical ? this.repeatY : this.repeatX) + (this._scrollBar ? 1 : 0);
                this._createItems(0, n, o), this._createdLine = o, this._array && (this.array = this._array, 
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
            var s = this._content, h = this._getOneCell(), n = h.width + this._spaceX, o = h.height + this._spaceY;
            if (this.cacheContent) {
                var r = new W();
                r.cacheAs = "normal", r.pos((this._isVertical ? 0 : t) * n, (this._isVertical ? t : 0) * o), 
                this._content.addChild(r), s = r;
            } else {
                for (var a = [], l = this._cells.length - 1; l > -1; l--) {
                    var c = this._cells[l];
                    c.removeSelf(), a.push(c);
                }
                this._cells.length = 0;
            }
            for (var u = t; e > u; u++) for (var _ = 0; i > _; _++) (h = a && a.length ? a.pop() : this.createItem()).x = (this._isVertical ? _ : u) * n - s._x, 
            h.y = (this._isVertical ? u : _) * o - s._y, h.name = "item" + (u * i + _), s.addChild(h), 
            this.addCell(h);
        }, e.createItem = function() {
            var t = [];
            if ("function" == typeof this._itemRender) var i = new this._itemRender(); else i = I.createComp(this._itemRender, null, null, t);
            if (0 == t.length && i._watchMap) {
                var e = i._watchMap;
                for (var s in e) for (var h = e[s], n = 0; n < h.length; n++) {
                    var o = h[n];
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
                var t = 0;
                t = 0;
                for (var i = 0; 1e4 > i; i++) {
                    var e = this.getChildByName("item" + i);
                    if (!e) break;
                    this.addCell(e), t++;
                }
                this.repeatY = t;
            }
        }, e.setContentSize = function(t, i) {
            this._content.width = t, this._content.height = i, (this._scrollBar || 0 != this._offset.x || 0 != this._offset.y) && (this._content._style.scrollRect || (this._content.scrollRect = B.create()), 
            this._content._style.scrollRect.setTo(-this._offset.x, -this._offset.y, t, i), this._content.scrollRect = this._content.scrollRect), 
            this.event("resize");
        }, e.onCellMouse = function(t) {
            "mousedown" === t.type && (this._isMoved = !1);
            var i = t.currentTarget, e = this._startIndex + this._cells.indexOf(i);
            0 > e || ("click" === t.type || "rightclick" === t.type ? this.selectEnable && !this._isMoved ? this.selectedIndex = e : this.changeCellState(i, !0, 0) : "mouseover" !== t.type && "mouseout" !== t.type || this._selectedIndex === e || this.changeCellState(i, "mouseover" === t.type, 0), 
            this.mouseHandler && this.mouseHandler.runWith([ t, e ]));
        }, e.changeCellState = function(t, i, e) {
            var s = t.getChildByName("selectBox");
            s && (this.selectEnable = !0, s.visible = i, s.index = e);
        }, e._sizeChanged = function() {
            laya.ui.UIComponent.prototype._sizeChanged.call(this), this.setContentSize(this.width, this.height), 
            this._scrollBar && this.callLater(this.onScrollBarChange);
        }, e.onScrollBarChange = function(t) {
            this.runCallLater(this.changeCells);
            var i = this._scrollBar.value, e = this._isVertical ? this.repeatX : this.repeatY, s = this._isVertical ? this.repeatY : this.repeatX, h = Math.floor(i / this._cellSize);
            if (this.cacheContent) o = s + 1, this._createdLine - h < o && (this._createItems(this._createdLine, e, this._createdLine + o), 
            this.renderItems(this._createdLine * e, 0), this._createdLine += o); else {
                var n = h * e, o = 0;
                if (n > this._startIndex) {
                    o = n - this._startIndex;
                    var r = !0, a = this._startIndex + e * (s + 1);
                    this._isMoved = !0;
                } else n < this._startIndex && (o = this._startIndex - n, r = !1, a = this._startIndex - 1, 
                this._isMoved = !0);
                for (var l = 0; o > l; l++) {
                    if (r) {
                        var c = this._cells.shift();
                        this._cells[this._cells.length] = c;
                        var u = a + l;
                    } else c = this._cells.pop(), this._cells.unshift(c), u = a - l;
                    var _ = Math.floor(u / e) * this._cellSize;
                    this._isVertical ? c.y = _ : c.x = _, this.renderItem(c, u);
                }
                this._startIndex = n, this.changeSelectStatus();
            }
            var d = this._content._style.scrollRect;
            this._isVertical ? (d.y = i - this._offset.y, d.x = -this._offset.x) : (d.y = -this._offset.y, 
            d.x = i - this._offset.x), this._content.scrollRect = d;
        }, e.posCell = function(t, i) {
            if (this._scrollBar) {
                var e = this._isVertical ? this.repeatX : this.repeatY, s = (this._isVertical ? this.repeatY : this.repeatX, 
                Math.floor(i / e) * this._cellSize);
                this._isVertical ? t._y = s : t.x = s;
            }
        }, e.changeSelectStatus = function() {
            for (var t = 0, i = this._cells.length; i > t; t++) this.changeCellState(this._cells[t], this._selectedIndex === this._startIndex + t, 1);
        }, e.renderItems = function(t, i) {
            void 0 === t && (t = 0), void 0 === i && (i = 0);
            for (var e = t, s = i || this._cells.length; s > e; e++) this.renderItem(this._cells[e], this._startIndex + e);
            this.changeSelectStatus();
        }, e.renderItem = function(t, i) {
            this._array && i >= 0 && i < this._array.length ? (t.visible = !0, t._$bindData ? (t._dataSource = this._array[i], 
            this._bindData(t, this._array[i])) : t.dataSource = this._array[i], this.cacheContent || this.posCell(t, i), 
            this.hasListener("render") && this.event("render", [ t, i ]), this.renderHandler && this.renderHandler.runWith([ t, i ])) : (t.visible = !1, 
            t.dataSource = null);
        }, e._bindData = function(t, i) {
            for (var e = t._$bindData, s = 0, h = e.length; h > s; s++) {
                var n = e[s++], o = e[s++], r = e[s], a = A.getBindFun(r);
                n[o] = a.call(this, i);
            }
        }, e.updateArray = function(t) {
            this._array = t;
            var i = 0;
            if (this._array && ((i = this._preLen - this._startIndex) >= 0 && this.renderItems(i), 
            this._preLen = this._array.length), this._scrollBar) {
                var e = t.length, s = this._isVertical ? this.repeatX : this.repeatY, h = this._isVertical ? this.repeatY : this.repeatX, n = Math.ceil(e / s);
                n >= h && (this._scrollBar.thumbPercent = h / n, this._scrollBar.slider._max = (n - h) * this._cellSize + this._cellOffset);
            }
        }, e.refresh = function() {
            this.array = this._array;
        }, e.getItem = function(t) {
            return t > -1 && t < this._array.length ? this._array[t] : null;
        }, e.changeItem = function(t, i) {
            t > -1 && t < this._array.length && (this._array[t] = i, t >= this._startIndex && t < this._startIndex + this._cells.length && this.renderItem(this.getCell(t), t));
        }, e.setItem = function(t, i) {
            this.changeItem(t, i);
        }, e.addItem = function(t) {
            this._array.push(t), this.array = this._array;
        }, e.addItemAt = function(t, i) {
            this._array.splice(i, 0, t), this.array = this._array;
        }, e.deleteItem = function(t) {
            this._array.splice(t, 1), this.array = this._array;
        }, e.getCell = function(t) {
            return this.runCallLater(this.changeCells), t > -1 && this._cells ? this._cells[(t - this._startIndex) % this._cells.length] : null;
        }, e.scrollTo = function(t) {
            if (this._scrollBar) {
                var i = this._isVertical ? this.repeatX : this.repeatY;
                this._scrollBar.value = Math.floor(t / i) * this._cellSize;
            } else this.startIndex = t;
        }, e.tweenTo = function(t, i, e) {
            if (void 0 === i && (i = 200), this._scrollBar) {
                this._scrollBar.stopScroll();
                var s = this._isVertical ? this.repeatX : this.repeatY;
                D.to(this._scrollBar, {
                    value: Math.floor(t / s) * this._cellSize
                }, i, null, e, 0, !0);
            } else this.startIndex = t, e && e.run();
        }, e._setCellChanged = function() {
            this._cellChanged || (this._cellChanged = !0, this.callLater(this.changeCells));
        }, e.commitMeasure = function() {
            this.runCallLater(this.changeCells);
        }, l(0, e, "cacheAs", t.prototype._$get_cacheAs, function(t) {
            o.superSet(W, this, "cacheAs", t), this._scrollBar && (this._usedCache = null, "none" !== t ? this._scrollBar.on("start", this, this.onScrollStart) : this._scrollBar.off("start", this, this.onScrollStart));
        }), l(0, e, "content", function() {
            return this._content;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            t != this._height && (o.superSet(W, this, "height", t), this._setCellChanged());
        }), l(0, e, "itemRender", function() {
            return this._itemRender;
        }, function(t) {
            if (this._itemRender != t) {
                this._itemRender = t;
                for (var i = this._cells.length - 1; i > -1; i--) this._cells[i].destroy();
                this._cells.length = 0, this._setCellChanged();
            }
        }), l(0, e, "vScrollBarSkin", function() {
            return this._scrollBar ? this._scrollBar.skin : null;
        }, function(t) {
            this._removePreScrollBar();
            var i = new _t();
            i.name = "scrollBar", i.right = 0, i.skin = t, i.elasticDistance = this._elasticEnabled ? 200 : 0, 
            this.scrollBar = i, this.addChild(i), this._setCellChanged();
        }), l(0, e, "page", function() {
            return this._page;
        }, function(t) {
            this._page = t, this._array && (this._page = t > 0 ? t : 0, this._page = this._page < this.totalPage ? this._page : this.totalPage - 1, 
            this.startIndex = this._page * this.repeatX * this.repeatY);
        }), l(0, e, "hScrollBarSkin", function() {
            return this._scrollBar ? this._scrollBar.skin : null;
        }, function(t) {
            this._removePreScrollBar();
            var i = new ft();
            i.name = "scrollBar", i.bottom = 0, i.skin = t, i.elasticDistance = this._elasticEnabled ? 200 : 0, 
            this.scrollBar = i, this.addChild(i), this._setCellChanged();
        }), l(0, e, "repeatX", function() {
            return this._repeatX > 0 ? this._repeatX : this._repeatX2 > 0 ? this._repeatX2 : 1;
        }, function(t) {
            this._repeatX = t, this._setCellChanged();
        }), l(0, e, "scrollBar", function() {
            return this._scrollBar;
        }, function(t) {
            this._scrollBar != t && (this._scrollBar = t, t && (this._isVertical = this._scrollBar.isVertical, 
            this.addChild(this._scrollBar), this._scrollBar.on("change", this, this.onScrollBarChange)));
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            t != this._width && (o.superSet(W, this, "width", t), this._setCellChanged());
        }), l(0, e, "repeatY", function() {
            return this._repeatY > 0 ? this._repeatY : this._repeatY2 > 0 ? this._repeatY2 : 1;
        }, function(t) {
            this._repeatY = t, this._setCellChanged();
        }), l(0, e, "spaceX", function() {
            return this._spaceX;
        }, function(t) {
            this._spaceX = t, this._setCellChanged();
        }), l(0, e, "spaceY", function() {
            return this._spaceY;
        }, function(t) {
            this._spaceY = t, this._setCellChanged();
        }), l(0, e, "selectedIndex", function() {
            return this._selectedIndex;
        }, function(t) {
            this._selectedIndex != t && (this._selectedIndex = t, this.changeSelectStatus(), 
            this.event("change"), this.selectHandler && this.selectHandler.runWith(t), this.startIndex = this._startIndex);
        }), l(0, e, "selectedItem", function() {
            return -1 != this._selectedIndex ? this._array[this._selectedIndex] : null;
        }, function(t) {
            this.selectedIndex = this._array.indexOf(t);
        }), l(0, e, "length", function() {
            return this._array ? this._array.length : 0;
        }), l(0, e, "selection", function() {
            return this.getCell(this._selectedIndex);
        }, function(t) {
            this.selectedIndex = this._startIndex + this._cells.indexOf(t);
        }), l(0, e, "startIndex", function() {
            return this._startIndex;
        }, function(t) {
            this._startIndex = t > 0 ? t : 0, this.callLater(this.renderItems);
        }), l(0, e, "array", function() {
            return this._array;
        }, function(t) {
            this.runCallLater(this.changeCells), this._array = t || [], this._preLen = this._array.length;
            var i = this._array.length;
            if (this.totalPage = Math.ceil(i / (this.repeatX * this.repeatY)), this._selectedIndex = this._selectedIndex < i ? this._selectedIndex : i - 1, 
            this.startIndex = this._startIndex, this._scrollBar) {
                this._scrollBar.stopScroll();
                var e = this._isVertical ? this.repeatX : this.repeatY, s = this._isVertical ? this.repeatY : this.repeatX, h = Math.ceil(i / e);
                (this._cellOffset > 0 ? this.totalPage + 1 : this.totalPage) > 1 && h >= s ? (this._scrollBar.scrollSize = this._cellSize, 
                this._scrollBar.thumbPercent = s / h, this._scrollBar.setScroll(0, (h - s) * this._cellSize + this._cellOffset, this._scrollBar.value), 
                this._scrollBar.target = this._content) : (this._scrollBar.setScroll(0, 0, 0), this._scrollBar.target = this._content);
            }
        }), l(0, e, "dataSource", t.prototype._$get_dataSource, function(t) {
            this._dataSource = t, "number" == typeof t && Math.floor(t) == t || "string" == typeof t ? this.selectedIndex = parseInt(t) : t instanceof Array ? this.array = t : o.superSet(W, this, "dataSource", t);
        }), l(0, e, "cells", function() {
            return this.runCallLater(this.changeCells), this._cells;
        }), l(0, e, "elasticEnabled", function() {
            return this._elasticEnabled;
        }, function(t) {
            this._elasticEnabled = t, this._scrollBar && (this._scrollBar.elasticDistance = t ? 200 : 0);
        }), i;
    }(W), at = function(t) {
        function i(t) {
            this._bg = null, this._skin = null, i.__super.call(this), void 0 === t && (t = ""), 
            this.text = t, this.skin = this.skin;
        }
        a(i, "laya.ui.TextInput", t);
        var e = i.prototype;
        return e.preinitialize = function() {
            this.mouseEnabled = !0;
        }, e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._bg && this._bg.destroy(), 
            this._bg = null;
        }, e.createChildren = function() {
            this.addChild(this._tf = new C()), this._tf.padding = Y.inputLabelPadding, this._tf.on("input", this, this._onInput), 
            this._tf.on("enter", this, this._onEnter), this._tf.on("blur", this, this._onBlur), 
            this._tf.on("focus", this, this._onFocus);
        }, e._onFocus = function() {
            this.event("focus", this);
        }, e._onBlur = function() {
            this.event("blur", this);
        }, e._onInput = function() {
            this.event("input", this);
        }, e._onEnter = function() {
            this.event("enter", this);
        }, e.initialize = function() {
            this.width = 128, this.height = 22;
        }, e._skinLoaded = function() {
            this._bg || (this.graphics = this._bg = new X()), this._bg.source = b.getRes(this._skin), 
            this._width && (this._bg.width = this._width), this._height && (this._bg.height = this._height), 
            this._sizeChanged(), this.event("loaded");
        }, e.select = function() {
            this._tf.select();
        }, e.setSelection = function(t, i) {
            this._tf.setSelection(t, i);
        }, l(0, e, "text", t.prototype._$get_text, function(t) {
            this._tf.text != t && (t += "", this._tf.text = t, this.event("change"));
        }), l(0, e, "bg", function() {
            return this._bg;
        }, function(t) {
            this.graphics = this._bg = t;
        }), l(0, e, "multiline", function() {
            return this._tf.multiline;
        }, function(t) {
            this._tf.multiline = t;
        }), l(0, e, "skin", function() {
            return this._skin;
        }, function(t) {
            this._skin != t && (this._skin = t, this._skin && !b.getRes(this._skin) ? o.loader.load(this._skin, v.create(this, this._skinLoaded), null, "image", 1) : this._skinLoaded());
        }), l(0, e, "sizeGrid", function() {
            return this._bg && this._bg.sizeGrid ? this._bg.sizeGrid.join(",") : null;
        }, function(t) {
            this._bg || (this.graphics = this._bg = new X()), this._bg.sizeGrid = A.fillArray(Y.defaultSizeGrid, t, Number);
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet($, this, "width", t), this._bg && (this._bg.width = t);
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet($, this, "height", t), this._bg && (this._bg.height = t);
        }), l(0, e, "editable", function() {
            return this._tf.editable;
        }, function(t) {
            this._tf.editable = t;
        }), l(0, e, "restrict", function() {
            return this._tf.restrict;
        }, function(t) {
            this._tf.restrict = t;
        }), l(0, e, "prompt", function() {
            return this._tf.prompt;
        }, function(t) {
            this._tf.prompt = t;
        }), l(0, e, "promptColor", function() {
            return this._tf.promptColor;
        }, function(t) {
            this._tf.promptColor = t;
        }), l(0, e, "maxChars", function() {
            return this._tf.maxChars;
        }, function(t) {
            this._tf.maxChars = t;
        }), l(0, e, "focus", function() {
            return this._tf.focus;
        }, function(t) {
            this._tf.focus = t;
        }), l(0, e, "type", function() {
            return this._tf.type;
        }, function(t) {
            this._tf.type = t;
        }), i;
    }($), lt = function(t) {
        function i() {
            this._oldW = 0, this._oldH = 0, i.__super.call(this);
        }
        a(i, "laya.ui.ScaleBox", t);
        var e = i.prototype;
        return e.onEnable = function() {
            o.stage.on("resize", this, this.onResize), this.onResize();
        }, e.onDisable = function() {
            o.stage.off("resize", this, this.onResize);
        }, e.onResize = function() {
            if (this.width > 0 && this.height > 0) {
                var t = Math.min(o.stage.width / this._oldW, o.stage.height / this._oldH);
                o.superSet(W, this, "width", o.stage.width), o.superSet(W, this, "height", o.stage.height), 
                this.scale(t, t);
            }
        }, l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(W, this, "width", t), this._oldW = t;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(W, this, "height", t), this._oldH = t;
        }), i;
    }(W), ct = function(t) {
        function i(t, e) {
            this._value = null, void 0 === e && (e = ""), i.__super.call(this, t, e);
        }
        a(i, "laya.ui.Radio", t);
        var e = i.prototype;
        return e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._value = null;
        }, e.preinitialize = function() {
            laya.ui.UIComponent.prototype.preinitialize.call(this), this.toggle = !1, this._autoSize = !1;
        }, e.initialize = function() {
            t.prototype.initialize.call(this), this.createText(), this._text.align = "left", 
            this._text.valign = "top", this._text.width = 0, this.on("click", this, this.onClick);
        }, e.onClick = function(t) {
            this.selected = !0;
        }, l(0, e, "value", function() {
            return null != this._value ? this._value : this.label;
        }, function(t) {
            this._value = t;
        }), i;
    }(V), ut = function(t) {
        function i(t, e) {
            this._valueArr = null, this._indexMap = null, this._sheet = null, this._direction = "horizontal", 
            this._spaceX = 0, this._spaceY = 0, this._align = "left", this._wordsW = 0, this._wordsH = 0, 
            i.__super.call(this), t && (this.skin = t), e && (this.sheet = e);
        }
        a(i, "laya.ui.FontClip", t);
        var e = i.prototype;
        return e.createChildren = function() {
            this._bitmap = new X(), this.on("loaded", this, this._onClipLoaded);
        }, e._onClipLoaded = function() {
            this.callLater(this.changeValue);
        }, e.changeValue = function() {
            var t;
            if (this._sources && this._valueArr && (this.graphics.clear(!0), t = this._sources[0])) {
                var i = "horizontal" === this._direction;
                i ? (this._wordsW = this._valueArr.length * (t.sourceWidth + this.spaceX), this._wordsH = t.sourceHeight) : (this._wordsW = t.sourceWidth, 
                this._wordsH = (t.sourceHeight + this.spaceY) * this._valueArr.length);
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
                for (var s = 0, h = this._valueArr.length; h > s; s++) {
                    var n = this._indexMap[this._valueArr.charAt(s)];
                    this.sources[n] && (t = this.sources[n], i ? this.graphics.drawImage(t, e + s * (t.sourceWidth + this.spaceX), 0, t.sourceWidth, t.sourceHeight) : this.graphics.drawImage(t, 0 + e, s * (t.sourceHeight + this.spaceY), t.sourceWidth, t.sourceHeight));
                }
                this._width || (this._widget.resetLayoutX(), this.callLater(this._sizeChanged)), 
                this._height || (this._widget.resetLayoutY(), this.callLater(this._sizeChanged));
            }
        }, e.measureWidth = function() {
            return this._wordsW;
        }, e.measureHeight = function() {
            return this._wordsH;
        }, e.destroy = function(i) {
            void 0 === i && (i = !0), this._valueArr = null, this._indexMap = null, this.graphics.clear(!0), 
            this.removeSelf(), this.off("loaded", this, this._onClipLoaded), t.prototype.destroy.call(this, i);
        }, l(0, e, "sheet", function() {
            return this._sheet;
        }, function(t) {
            t += "", this._sheet = t;
            var i = t.split(" ");
            this._clipX = String(i[0]).length, this.clipY = i.length, this._indexMap = {};
            for (var e = 0; e < this._clipY; e++) for (var s = i[e].split(""), h = 0, n = s.length; n > h; h++) this._indexMap[s[h]] = e * this._clipX + h;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(j, this, "height", t), this.callLater(this.changeValue);
        }), l(0, e, "direction", function() {
            return this._direction;
        }, function(t) {
            this._direction = t, this.callLater(this.changeValue);
        }), l(0, e, "value", function() {
            return this._valueArr ? this._valueArr : "";
        }, function(t) {
            t += "", this._valueArr = t, this.callLater(this.changeValue);
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(j, this, "width", t), this.callLater(this.changeValue);
        }), l(0, e, "spaceX", function() {
            return this._spaceX;
        }, function(t) {
            this._spaceX = t, "horizontal" === this._direction && this.callLater(this.changeValue);
        }), l(0, e, "spaceY", function() {
            return this._spaceY;
        }, function(t) {
            this._spaceY = t, "horizontal" !== this._direction && this.callLater(this.changeValue);
        }), l(0, e, "align", function() {
            return this._align;
        }, function(t) {
            this._align = t, this.callLater(this.changeValue);
        }), i;
    }(j), _t = (function(t) {
        function i(t) {
            this.advsListArr = [], this.resUrl = "https://unioncdn.layabox.com/config/iconlist.json", 
            this._data = [], this._resquestTime = 36e4, this._appid = null, this._playIndex = 0, 
            this._lunboTime = 5e3, i.__super.call(this), this._http = new u.window.XMLHttpRequest(), 
            this.skin = t, this.setLoadUrl(), this.init(), this.size(120, 120);
        }
        a(i, "laya.ui.AdvImage", t);
        var e = i.prototype;
        e.setLoadUrl = function() {
            u.onLimixiu && (this.resUrl = "https://abc.layabox.com/public/wyw/gconfig.json");
        }, e.init = function() {
            this.isSupportJump() ? ((u.onMiniGame || u.onBDMiniGame) && o.timer.loop(this._resquestTime, this, this.onGetAdvsListData), 
            this.onGetAdvsListData(), this.initEvent()) : this.visible = !1;
        }, e.initEvent = function() {
            this.on("click", this, this.onAdvsImgClick);
        }, e.onAdvsImgClick = function() {
            this.getCurrentAppidObj() && this.jumptoGame();
        }, e.revertAdvsData = function() {
            if (this.advsListArr[this._playIndex]) if (this.visible = !0, u.onLimixiu) {
                this.visible = !0;
                var t = this.advsListArr[this._playIndex];
                t && (u.onLimixiu && GameStatusInfo.gameId == t.gameid ? this.onLunbo() : (this.skin = "https://abc.layabox.com/public/icon/" + t.iconUrl, 
                this.size(103, 126)));
            } else this.skin = this.advsListArr[this._playIndex];
        }, e.isSupportJump = function() {
            if (u.onMiniGame) return "function" == typeof wx.navigateToMiniProgram;
            if (u.onLimixiu) {
                if (BK.QQ.skipGame) return !0;
            } else if (u.onBDMiniGame) return !0;
            return !1;
        }, e.jumptoGame = function() {
            var t = this, i = this.advsListArr[this._playIndex], e = parseInt(i.gameid), s = i.extendInfo;
            if (i.path, u.onLimixiu) {
                if (!i.isLunBo && !i.isLunBo) {
                    var h = S.getJSON("gameObj");
                    h || (h = {}), h[i.gameid] || (h[i.gameid] = {}), h[i.gameid] = {
                        isclick: !0
                    }, S.setJSON("gameObj", h), this.advsListArr.splice(this._playIndex, 1);
                }
                BK.QQ.skipGame(e, s), this.updateAdvsInfo();
            } else u.onMiniGame ? this.isSupportJump() && wx.navigateToMiniProgram({
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
            }) : u.onBDMiniGame || (this.visible = !1);
        }, e.updateAdvsInfo = function() {
            this.visible = !1, this.onLunbo(), o.timer.loop(this._lunboTime, this, this.onLunbo);
        }, e.onLunbo = function() {
            this._playIndex >= this.advsListArr.length - 1 ? this._playIndex = 0 : this._playIndex += 1, 
            this.visible = !0, this.revertAdvsData();
        }, e.getCurrentAppidObj = function() {
            return this.advsListArr[this._playIndex];
        }, e.onGetAdvsListData = function() {
            var t = this, e = i.randRange(1e4, 1e6), s = this.resUrl + "?" + e;
            this._http.open("get", s, !0), this._http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
            this._http.responseType = "text", this._http.onerror = function(i) {
                t._onError(i);
            }, this._http.onload = function(i) {
                t._onLoad(i);
            }, this._http.send(null);
        }, e._onError = function(t) {
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
        }, e._onLoad = function(t) {
            var i = this._http, e = void 0 !== i.status ? i.status : 200;
            200 === e || 204 === e || 0 === e ? this.complete() : this.error("[" + i.status + "]" + i.statusText + ":" + i.responseURL);
        }, e.error = function(t) {
            this.event("error", t);
        }, e.complete = function() {
            try {
                this._data = this._http.response || this._http.responseText, this._data = JSON.parse(this._data), 
                u.onLimixiu ? (this.advsListArr = this.getAdvsQArr(this._data), this.advsListArr.length ? (this.updateAdvsInfo(), 
                this.revertAdvsData()) : this.visible = !1) : (this.advsListArr = this._data.list, 
                this._appid = this._data.appid, this.updateAdvsInfo(), this.revertAdvsData());
            } catch (t) {
                !1, this.error(t.message);
            }
        }, e.getAdvsQArr = function(t) {
            var i = [], e = S.getJSON("gameObj");
            for (var s in t) {
                var h = t[s];
                e && e[h.gameid] && !h.isQiangZhi || i.push(h);
            }
            return i;
        }, e.clear = function() {
            var t = this._http;
            t.onerror = t.onabort = t.onprogress = t.onload = null;
        }, e.destroy = function(i) {
            void 0 === i && (i = !0), o.timer.clear(this, this.onLunbo), t.prototype.destroy.call(this, !0), 
            this.clear(), o.timer.clear(this, this.onGetAdvsListData);
        }, i.randRange = function(t, i) {
            return Math.floor(Math.random() * (i - t + 1)) + t;
        };
    }(U), function(t) {
        function i() {
            i.__super.call(this);
        }
        return a(i, "laya.ui.VScrollBar", Q), i;
    }()), dt = function(t) {
        function i() {
            i.__super.call(this);
        }
        return a(i, "laya.ui.VSlider", K), i;
    }(), ft = function(t) {
        function i() {
            i.__super.call(this);
        }
        return a(i, "laya.ui.HScrollBar", t), i.prototype.initialize = function() {
            t.prototype.initialize.call(this), this.slider.isVertical = !1;
        }, i;
    }(Q), gt = function(t) {
        function i(t) {
            i.__super.call(this, t), this.isVertical = !1;
        }
        return a(i, "laya.ui.HSlider", K), i;
    }(), pt = function(t) {
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
            for (var t = [], i = 0, e = 0, s = this.numChildren; s > e; e++) {
                var h = this.getChildAt(e);
                h && (t.push(h), i = this._height ? this._height : Math.max(i, h.height * h.scaleY));
            }
            this.sortItem(t);
            var n = 0;
            for (e = 0, s = t.length; s > e; e++) (h = t[e]).x = n, n += h.width * h.scaleX + this._space, 
            "top" == this._align ? h.y = 0 : "middle" == this._align ? h.y = .5 * (i - h.height * h.scaleY) : "bottom" == this._align && (h.y = i - h.height * h.scaleY);
            this._sizeChanged();
        }, l(0, e, "height", t.prototype._$get_height, function(t) {
            this._height != t && (o.superSet(et, this, "height", t), this.callLater(this.changeItems));
        }), i.NONE = "none", i.TOP = "top", i.MIDDLE = "middle", i.BOTTOM = "bottom", i;
    }(et), mt = function(t) {
        function i() {
            i.__super.call(this);
        }
        return a(i, "laya.ui.RadioGroup", st), i.prototype.createItem = function(t, i) {
            return new ct(t, i);
        }, i;
    }(), vt = function(t) {
        function i() {
            i.__super.call(this);
        }
        a(i, "laya.ui.VBox", t);
        var e = i.prototype;
        return e.changeItems = function() {
            this._itemChanged = !1;
            for (var t = [], i = 0, e = 0, s = this.numChildren; s > e; e++) {
                var h = this.getChildAt(e);
                h && (t.push(h), i = this._width ? this._width : Math.max(i, h.width * h.scaleX));
            }
            this.sortItem(t);
            var n = 0;
            for (e = 0, s = t.length; s > e; e++) (h = t[e]).y = n, n += h.height * h.scaleY + this._space, 
            "left" == this._align ? h.x = 0 : "center" == this._align ? h.x = .5 * (i - h.width * h.scaleX) : "right" == this._align && (h.x = i - h.width * h.scaleX);
            this._sizeChanged();
        }, l(0, e, "width", t.prototype._$get_width, function(t) {
            this._width != t && (o.superSet(et, this, "width", t), this.callLater(this.changeItems));
        }), i.NONE = "none", i.LEFT = "left", i.CENTER = "center", i.RIGHT = "right", i;
    }(et), yt = function(t) {
        function i(t) {
            this._vScrollBar = null, this._hScrollBar = null, void 0 === t && (t = ""), i.__super.call(this, t), 
            this.on("change", this, this._onTextChange);
        }
        a(i, "laya.ui.TextArea", t);
        var e = i.prototype;
        return e._onTextChange = function() {
            this.callLater(this.changeScroll);
        }, e.destroy = function(i) {
            void 0 === i && (i = !0), t.prototype.destroy.call(this, i), this._vScrollBar && this._vScrollBar.destroy(), 
            this._hScrollBar && this._hScrollBar.destroy(), this._vScrollBar = null, this._hScrollBar = null;
        }, e.initialize = function() {
            this.width = 180, this.height = 150, this._tf.wordWrap = !0, this.multiline = !0;
        }, e.onVBarChanged = function(t) {
            this._tf.scrollY != this._vScrollBar.value && (this._tf.scrollY = this._vScrollBar.value);
        }, e.onHBarChanged = function(t) {
            this._tf.scrollX != this._hScrollBar.value && (this._tf.scrollX = this._hScrollBar.value);
        }, e.changeScroll = function() {
            var t = this._vScrollBar && this._tf.maxScrollY > 0, i = this._hScrollBar && this._tf.maxScrollX > 0, e = t ? this._width - this._vScrollBar.width : this._width, s = i ? this._height - this._hScrollBar.height : this._height, h = this._tf.padding || Y.labelPadding;
            this._tf.width = e, this._tf.height = s, this._vScrollBar && (this._vScrollBar.x = this._width - this._vScrollBar.width - h[2], 
            this._vScrollBar.y = h[1], this._vScrollBar.height = this._height - (i ? this._hScrollBar.height : 0) - h[1] - h[3], 
            this._vScrollBar.scrollSize = 1, this._vScrollBar.thumbPercent = s / Math.max(this._tf.textHeight, s), 
            this._vScrollBar.setScroll(1, this._tf.maxScrollY, this._tf.scrollY), this._vScrollBar.visible = t), 
            this._hScrollBar && (this._hScrollBar.x = h[0], this._hScrollBar.y = this._height - this._hScrollBar.height - h[3], 
            this._hScrollBar.width = this._width - (t ? this._vScrollBar.width : 0) - h[0] - h[2], 
            this._hScrollBar.scrollSize = Math.max(.033 * e, 1), this._hScrollBar.thumbPercent = e / Math.max(this._tf.textWidth, e), 
            this._hScrollBar.setScroll(0, this.maxScrollX, this.scrollX), this._hScrollBar.visible = i);
        }, e.scrollTo = function(t) {
            this.commitMeasure(), this._tf.scrollY = t;
        }, l(0, e, "scrollY", function() {
            return this._tf.scrollY;
        }), l(0, e, "width", t.prototype._$get_width, function(t) {
            o.superSet(at, this, "width", t), this.callLater(this.changeScroll);
        }), l(0, e, "hScrollBar", function() {
            return this._hScrollBar;
        }), l(0, e, "height", t.prototype._$get_height, function(t) {
            o.superSet(at, this, "height", t), this.callLater(this.changeScroll);
        }), l(0, e, "maxScrollX", function() {
            return this._tf.maxScrollX;
        }), l(0, e, "vScrollBarSkin", function() {
            return this._vScrollBar ? this._vScrollBar.skin : null;
        }, function(t) {
            null == this._vScrollBar && (this.addChild(this._vScrollBar = new _t()), this._vScrollBar.on("change", this, this.onVBarChanged), 
            this._vScrollBar.target = this._tf, this.callLater(this.changeScroll)), this._vScrollBar.skin = t;
        }), l(0, e, "hScrollBarSkin", function() {
            return this._hScrollBar ? this._hScrollBar.skin : null;
        }, function(t) {
            null == this._hScrollBar && (this.addChild(this._hScrollBar = new ft()), this._hScrollBar.on("change", this, this.onHBarChanged), 
            this._hScrollBar.mouseWheelEnable = !1, this._hScrollBar.target = this._tf, this.callLater(this.changeScroll)), 
            this._hScrollBar.skin = t;
        }), l(0, e, "vScrollBar", function() {
            return this._vScrollBar;
        }), l(0, e, "maxScrollY", function() {
            return this._tf.maxScrollY;
        }), l(0, e, "scrollX", function() {
            return this._tf.scrollX;
        }), i;
    }(at), Ct = function(t) {
        function i() {
            i.__super.call(this);
        }
        return a(i, "laya.ui.Tab", st), i.prototype.createItem = function(t, i) {
            return new V(t, i);
        }, i;
    }();
    o.__init([ Z, R ]);
}(window, document, Laya);