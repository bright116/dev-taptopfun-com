!function(t, e, i) {
    i.un, i.uns, i.static;
    var a = i.class, r = i.getset, n = (i.__newvec, laya.utils.Browser, laya.utils.Color), s = laya.filters.ColorFilterAction, l = laya.filters.webgl.ColorFilterActionGL, o = laya.filters.Filter, u = laya.filters.webgl.FilterActionGL, c = laya.maths.Matrix, h = (laya.maths.Rectangle, 
    laya.renders.Render), f = (laya.renders.RenderContext, laya.webgl.resource.RenderTarget2D), _ = laya.utils.RunDriver, d = (laya.webgl.shader.d2.ShaderDefines2D, 
    laya.display.Sprite, laya.resource.Texture, laya.webgl.shader.d2.value.Value2D), g = function() {
        function t() {
            this.data = null;
        }
        a(t, "laya.filters.FilterAction");
        var e = t.prototype;
        return i.imps(e, {
            "laya.filters.IFilterAction": !0
        }), e.apply = function(t) {
            return null;
        }, t;
    }(), y = function() {
        function t() {}
        return a(t, "laya.filters.WebGLFilter"), t.enable = function() {
            t.isInit || (t.isInit = !0, h.isWebGL && (_.createFilterAction = function(t) {
                var e;
                switch (t) {
                  case 32:
                    e = new l();
                    break;

                  case 16:
                    e = new p();
                    break;

                  case 8:
                    e = new w();
                }
                return e;
            }));
        }, t.isInit = !1, t.__init$ = function() {
            _.createFilterAction = function(t) {
                var e;
                switch (t) {
                  case 16:
                  case 8:
                    e = new g();
                    break;

                  case 32:
                    e = new s();
                }
                return e;
            };
        }, t;
    }(), p = (function(t) {
        function e(t) {
            this.strength = NaN, this.strength_sig2_2sig2_gauss1 = [], e.__super.call(this), 
            void 0 === t && (t = 4), h.isWebGL && y.enable(), this.strength = t, this._action = _.createFilterAction(16), 
            this._action.data = this;
        }
        a(e, "laya.filters.BlurFilter", o);
        var i = e.prototype;
        i.callNative = function(t) {
            t.conchModel && t.conchModel.blurFilter && t.conchModel.blurFilter(this.strength);
        }, r(0, i, "action", function() {
            return this._action;
        }), r(0, i, "type", function() {
            return 16;
        });
    }(), function(t) {
        function e(t, i, a, r) {
            this._color = null, e.__super.call(this), this._elements = new Float32Array(9), 
            void 0 === i && (i = 4), void 0 === a && (a = 6), void 0 === r && (r = 6), h.isWebGL && y.enable(), 
            this._color = new n(t), this.blur = Math.min(i, 20), this.offX = a, this.offY = r, 
            this._action = _.createFilterAction(8), this._action.data = this;
        }
        a(e, "laya.filters.GlowFilter", o);
        var i = e.prototype;
        i.getColor = function() {
            return this._color._color;
        }, i.callNative = function(t) {
            t.conchModel && t.conchModel.glowFilter && t.conchModel.glowFilter(this._color.strColor, this._elements[4], this._elements[5], this._elements[6]);
        }, r(0, i, "type", function() {
            return 8;
        }), r(0, i, "action", function() {
            return this._action;
        }), r(0, i, "offY", function() {
            return this._elements[6];
        }, function(t) {
            this._elements[6] = t;
        }), r(0, i, "offX", function() {
            return this._elements[5];
        }, function(t) {
            this._elements[5] = t;
        }), r(0, i, "blur", function() {
            return this._elements[4];
        }, function(t) {
            this._elements[4] = t;
        });
    }(), function(t) {
        function e() {
            this.data = null, e.__super.call(this);
        }
        a(e, "laya.filters.webgl.BlurFilterActionGL", u);
        var i = e.prototype;
        return i.setValueMix = function(t) {
            t.defines.add(this.data.type);
        }, i.apply3d = function(t, e, i, a, r) {
            var n = t.getValue("bounds"), s = d.create(1, 0);
            s.setFilters([ this.data ]), c.EMPTY.identity(), i.ctx.drawTarget(t, 0, 0, n.width, n.height, c.EMPTY, "src", s), 
            s.setFilters(null);
        }, i.setValue = function(t) {
            t.strength = this.data.strength;
            var e = this.data.strength / 3, i = e * e;
            this.data.strength_sig2_2sig2_gauss1[0] = this.data.strength, this.data.strength_sig2_2sig2_gauss1[1] = i, 
            this.data.strength_sig2_2sig2_gauss1[2] = 2 * i, this.data.strength_sig2_2sig2_gauss1[3] = 1 / (2 * Math.PI * i), 
            t.strength_sig2_2sig2_gauss1 = this.data.strength_sig2_2sig2_gauss1;
        }, r(0, i, "typeMix", function() {
            return 16;
        }), e;
    }()), w = function(t) {
        function e() {
            this.data = null, this._initKey = !1, this._textureWidth = 0, this._textureHeight = 0, 
            e.__super.call(this);
        }
        a(e, "laya.filters.webgl.GlowFilterActionGL", u);
        var n = e.prototype;
        return i.imps(n, {
            "laya.filters.IFilterActionGL": !0
        }), n.setValueMix = function(t) {}, n.apply3d = function(t, e, i, a, r) {
            var n = t.getValue("bounds");
            t.addValue("color", this.data.getColor());
            var s = n.width, l = n.height;
            this._textureWidth = s, this._textureHeight = l;
            var o, u = c.TEMP;
            return u.identity(), (o = d.create(1, 0)).setFilters([ this.data ]), i.ctx.drawTarget(t, 0, 0, this._textureWidth, this._textureHeight, u, "src", o, null), 
            o = d.create(1, 0), i.ctx.drawTarget(t, 0, 0, this._textureWidth, this._textureHeight, u, "src", o), 
            null;
        }, n.setSpriteWH = function(t) {
            this._textureWidth = t.width, this._textureHeight = t.height;
        }, n.setValue = function(t) {
            t.u_offsetX = this.data.offX, t.u_offsetY = -this.data.offY, t.u_strength = 1, t.u_blurX = this.data.blur, 
            t.u_blurY = this.data.blur, t.u_textW = this._textureWidth, t.u_textH = this._textureHeight, 
            t.u_color = this.data.getColor();
        }, r(0, n, "typeMix", function() {
            return 8;
        }), e.tmpTarget = function(t, e, i, a, r) {
            var n = t.getValue("bounds");
            t.getValue("out").end();
            var s = f.create(n.width, n.height);
            s.start();
            var l = t.getValue("color");
            l && s.clear(l[0], l[1], l[2], 0), t.addValue("tmpTarget", s);
        }, e.startOut = function(t, e, i, a, r) {
            t.getValue("tmpTarget").end();
            var n = t.getValue("out");
            n.start();
            var s = t.getValue("color");
            s && n.clear(s[0], s[1], s[2], 0);
        }, e.recycleTarget = function(t, e, i, a, r) {
            t.getValue("src"), t.getValue("tmpTarget").recycle();
        }, e;
    }();
    i.__init([ y ]);
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", [ "require", "exports" ], function(t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    for (var i in Laya) {
        var a = Laya[i];
        a && a.__isclass && (e[i] = a);
    }
});