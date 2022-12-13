!function(t, i, e) {
    e.un, e.uns, e.static;
    var r = e.class, h = e.getset, s = (e.__newvec, laya.utils.Browser), a = laya.resource.HTMLCanvas, o = (laya.utils.Handler, 
    laya.net.Loader), n = laya.maths.Point, l = laya.maths.Rectangle, _ = laya.renders.Render, p = laya.renders.RenderContext, c = laya.display.Sprite, m = laya.resource.Texture, d = function() {
        function t() {
            this._jsonData = null, this._tileTexSetArr = [], this._texArray = [], this._x = 0, 
            this._y = 0, this._width = 0, this._height = 0, this._mapW = 0, this._mapH = 0, 
            this._mapTileW = 0, this._mapTileH = 0, this._mapSprite = null, this._layerArray = [], 
            this._renderLayerArray = [], this._gridArray = [], this._showGridKey = !1, this._totalGridNum = 0, 
            this._gridW = 0, this._gridH = 0, this._gridWidth = 450, this._gridHeight = 450, 
            this._jsonLoader = null, this._loader = null, this._tileSetArray = [], this._currTileSet = null, 
            this._completeHandler = null, this._index = 0, this._animationDic = {}, this._properties = null, 
            this._tileProperties = {}, this._tileProperties2 = {}, this._orientation = "orthogonal", 
            this._renderOrder = "right-down", this._colorArray = [ "FF", "00", "33", "66" ], 
            this._scale = 1, this._pivotScaleX = .5, this._pivotScaleY = .5, this._centerX = 0, 
            this._centerY = 0, this._viewPortX = 0, this._viewPortY = 0, this._viewPortWidth = 0, 
            this._viewPortHeight = 0, this._enableLinear = !0, this._resPath = null, this._pathArray = null, 
            this._limitRange = !1, this._fastDirty = !0, this.autoCache = !0, this.autoCacheType = "normal", 
            this.enableMergeLayer = !1, this.removeCoveredTile = !1, this.showGridTextureCount = !1, 
            this.antiCrack = !0, this.cacheAllAfterInit = !1, this._texutreStartDic = {}, this._rect = new l(), 
            this._paddingRect = new l(), this._mapRect = new i(), this._mapLogicRect = new i(), 
            this._mapLastRect = new i(), this._mapSprite = new c();
        }
        var i, s, n;
        r(t, "laya.map.TiledMap");
        var d = t.prototype;
        return d.createMap = function(t, i, e, r, h, s, a) {
            void 0 === s && (s = !0), void 0 === a && (a = !1), this._enableLinear = s, this._limitRange = a, 
            this._rect.x = i.x, this._rect.y = i.y, this._rect.width = i.width, this._rect.height = i.height, 
            this._viewPortWidth = i.width / this._scale, this._viewPortHeight = i.height / this._scale, 
            this._completeHandler = e, r ? this._paddingRect.copyFrom(r) : this._paddingRect.setTo(0, 0, 0, 0), 
            h && (this._gridWidth = h.x, this._gridHeight = h.y);
            var n = t.lastIndexOf("/");
            n > -1 ? (this._resPath = t.substr(0, n), this._pathArray = this._resPath.split("/")) : (this._resPath = "", 
            this._pathArray = []), this._jsonLoader = new o(), this._jsonLoader.once("complete", this, this.onJsonComplete), 
            this._jsonLoader.load(t, "json", !1);
        }, d.onJsonComplete = function(t) {
            var i = this._jsonData = t;
            this._properties = i.properties, this._orientation = i.orientation, this._renderOrder = i.renderorder, 
            this._mapW = i.width, this._mapH = i.height, this._mapTileW = i.tilewidth, this._mapTileH = i.tileheight, 
            this._width = this._mapTileW * this._mapW, this._height = this._mapTileH * this._mapH, 
            "staggered" == this._orientation && (this._height = (.5 + .5 * this._mapH) * this._mapTileH), 
            this._mapLastRect.top = this._mapLastRect.bottom = this._mapLastRect.left = this._mapLastRect.right = -1;
            var e, r, h = i.tilesets, a = 0;
            for (a = 0; a < h.length; a++) if (e = h[a], (r = new n()).init(e), !r.properties || !r.properties.ignore) {
                this._tileProperties[a] = r.tileproperties, this.addTileProperties(r.tileproperties), 
                this._tileSetArray.push(r);
                var l = e.tiles;
                if (l) for (var _ in l) {
                    var p = l[_].animation;
                    if (p) {
                        var c = new s();
                        this._animationDic[_] = c, c.image = e.image;
                        for (var m = 0; m < p.length; m++) {
                            var d = p[m];
                            c.mAniIdArray.push(d.tileid), c.mDurationTimeArray.push(d.duration);
                        }
                    }
                }
            }
            if (this._tileTexSetArr.push(null), this._tileSetArray.length > 0) {
                r = this._currTileSet = this._tileSetArray.shift(), this._loader = new o(), this._loader.once("complete", this, this.onTextureComplete);
                var u = this.mergePath(this._resPath, r.image);
                this._loader.load(u, "image", !1);
            }
        }, d.mergePath = function(t, i) {
            var e = "", r = i.split("/"), h = 0, s = 0;
            for (s = r.length - 1; s >= 0; s--) ".." == r[s] && h++;
            if (0 == h) return e = this._pathArray.length > 0 ? t + "/" + i : i;
            var a = this._pathArray.length - h;
            for (a < 0 && console.log("[error]path does not exist", this._pathArray, r, t, i), 
            s = 0; s < a; s++) 0 == s ? e += this._pathArray[s] : e = e + "/" + this._pathArray[s];
            for (s = h; s < r.length; s++) e = e + "/" + r[s];
            return e;
        }, d.onTextureComplete = function(t) {
            this._jsonData;
            var i = t;
            _.isWebGL && !this._enableLinear && (i.bitmap.minFifter = 9728, i.bitmap.magFifter = 9728, 
            i.bitmap.enableMerageInAtlas = !1), this._texArray.push(i);
            var e = this._currTileSet, r = e.tilewidth, h = e.tileheight, s = e.imagewidth, a = e.imageheight, o = (e.firstgid, 
            Math.floor((s - e.margin - r) / (r + e.spacing)) + 1), n = Math.floor((a - e.margin - h) / (h + e.spacing)) + 1, l = null;
            this._texutreStartDic[e.image] = this._tileTexSetArr.length;
            for (var p = 0; p < n; p++) for (var c = 0; c < o; c++) (l = new u()).offX = e.titleoffsetX, 
            l.offY = e.titleoffsetY - (h - this._mapTileH), l.texture = m.createFromTexture(i, e.margin + (r + e.spacing) * c, e.margin + (h + e.spacing) * p, r, h), 
            this.antiCrack && this.adptTexture(l.texture), this._tileTexSetArr.push(l), l.gid = this._tileTexSetArr.length;
            if (this._tileSetArray.length > 0) {
                e = this._currTileSet = this._tileSetArray.shift(), this._loader.once("complete", this, this.onTextureComplete);
                var d = this.mergePath(this._resPath, e.image);
                this._loader.load(d, "image", !1);
            } else this._currTileSet = null, this.initMap();
        }, d.adptTexture = function(t) {
            if (t) {
                var i = t.uv[0], e = t.uv[2], r = t.uv[1], h = t.uv[7], s = 1 / t.bitmap.width, a = 1 / t.bitmap.height;
                t.uv[0] = t.uv[6] = i + s, t.uv[2] = t.uv[4] = e - s, t.uv[1] = t.uv[3] = r + a, 
                t.uv[5] = t.uv[7] = h - a;
            }
        }, d.initMap = function() {
            var t = 0, i = 0;
            for (var r in this._animationDic) {
                var h = this._animationDic[r], s = 0;
                s = this._texutreStartDic[h.image];
                var a = this.getTexture(parseInt(r) + s);
                if (h.mAniIdArray.length > 0) {
                    for (a.textureArray = [], a.durationTimeArray = h.mDurationTimeArray, a.isAnimation = !0, 
                    a.animationTotalTime = 0, t = 0, i = a.durationTimeArray.length; t < i; t++) a.animationTotalTime += a.durationTimeArray[t];
                    for (t = 0, i = h.mAniIdArray.length; t < i; t++) {
                        var o = this.getTexture(h.mAniIdArray[t] + s);
                        a.textureArray.push(o);
                    }
                }
            }
            for (this._gridWidth = Math.floor(this._gridWidth / this._mapTileW) * this._mapTileW, 
            this._gridHeight = Math.floor(this._gridHeight / this._mapTileH) * this._mapTileH, 
            this._gridWidth < this._mapTileW && (this._gridWidth = this._mapTileW), this._gridHeight < this._mapTileH && (this._gridHeight = this._mapTileH), 
            this._gridW = Math.ceil(this._width / this._gridWidth), this._gridH = Math.ceil(this._height / this._gridHeight), 
            this._totalGridNum = this._gridW * this._gridH, t = 0; t < this._gridH; t++) {
                var n = [];
                this._gridArray.push(n);
                for (var l = 0; l < this._gridW; l++) n.push(null);
            }
            for (var _, p, c, m = this._jsonData.layers, d = !0, u = 0; u < m.length; u++) {
                var g = m[u];
                if (1 == g.visible) {
                    var y = new f();
                    y.init(g, this), this.enableMergeLayer ? (_ = y.getLayerProperties("layer"), (d = d || !c || _ != p) ? (d = !1, 
                    y.tarLayer = y, c = y, this._mapSprite.addChild(y), this._renderLayerArray.push(y)) : y.tarLayer = c, 
                    p = _) : (this._mapSprite.addChild(y), this._renderLayerArray.push(y)), this._layerArray.push(y);
                }
            }
            this.removeCoveredTile && this.adptTiledMapData(), this.cacheAllAfterInit && this.cacheAllGrid(), 
            this.moveViewPort(this._rect.x, this._rect.y), e.stage.addChild(this.mapSprite()), 
            null != this._completeHandler && this._completeHandler.run();
        }, d.addTileProperties = function(t) {
            var i;
            for (i in t) this._tileProperties2[i] = t[i];
        }, d.getTileUserData = function(t, i, e) {
            return this._tileProperties2 && this._tileProperties2[t] && i in this._tileProperties2[t] ? this._tileProperties2[t][i] : e;
        }, d.adptTiledMapData = function() {
            var t, i = 0, e = {};
            for (i = this._layerArray.length - 1; i >= 0; i--) (t = this._layerArray[i]._mapData) && (this.removeCoverd(t, e), 
            this.collectCovers(t, e, i));
        }, d.removeCoverd = function(t, i) {
            var e = 0, r = 0;
            for (r = t.length, e = 0; e < r; e++) i[e] && (t[e] = 0);
        }, d.collectCovers = function(t, i, e) {
            var r = 0, h = 0;
            h = t.length;
            var s = 0;
            for (r = 0; r < h; r++) (s = t[r]) > 0 && this.getTileUserData(s - 1, "type", 0) > 0 && (i[r] = s);
        }, d.getTexture = function(t) {
            return t < this._tileTexSetArr.length ? this._tileTexSetArr[t] : null;
        }, d.getMapProperties = function(t) {
            return this._properties ? this._properties[t] : null;
        }, d.getTileProperties = function(t, i, e) {
            return this._tileProperties[t] && this._tileProperties[t][i] ? this._tileProperties[t][i][e] : null;
        }, d.getSprite = function(t, i, e) {
            if (0 < this._tileTexSetArr.length) {
                var r = new g();
                r.initData(this, !0), r.size(i, e);
                var h = this._tileTexSetArr[t];
                if (null != h && null != h.texture) {
                    if (h.isAnimation) {
                        var s = new y();
                        this._index++, s.setTileTextureSet(this._index.toString(), h), r.addAniSprite(s), 
                        r.addChild(s);
                    } else r.graphics.drawTexture(h.texture, 0, 0, i, e);
                    r.drawImageNum++;
                }
                return r;
            }
            return null;
        }, d.setViewPortPivotByScale = function(t, i) {
            this._pivotScaleX = t, this._pivotScaleY = i, this._fastDirty = !0;
        }, d.moveViewPort = function(t, i) {
            if (this._x = -t, this._y = -i, this._fastDirty) this._rect.x = t, this._rect.y = i, 
            this.updateViewPort(); else {
                var e = NaN, r = NaN;
                e = t - this._rect.x, r = i - this._rect.y, this._rect.x = t, this._rect.y = i, 
                this.updateViewPortFast(e, r);
            }
        }, d.changeViewPort = function(t, i, e, r) {
            t == this._rect.x && i == this._rect.y && e == this._rect.width && r == this._rect.height || (e != this._rect.width || r != this._rect.height ? (this._fastDirty = !0, 
            this._x = -t, this._y = -i, this._rect.x = t, this._rect.y = i, this._rect.width = e, 
            this._rect.height = r, this._viewPortWidth = e / this._scale, this._viewPortHeight = r / this._scale, 
            this.updateViewPort()) : this.moveViewPort(t, i));
        }, d.changeViewPortBySize = function(t, i, e) {
            return null == e && (e = new l()), this._centerX = this._rect.x + this._rect.width * this._pivotScaleX, 
            this._centerY = this._rect.y + this._rect.height * this._pivotScaleY, e.x = this._centerX - t * this._pivotScaleX, 
            e.y = this._centerY - i * this._pivotScaleY, e.width = t, e.height = i, this.changeViewPort(e.x, e.y, e.width, e.height), 
            e;
        }, d.updateViewPortFast = function(t, i) {
            this._centerX += t, this._centerY += i, this._viewPortX += t, this._viewPortY += i;
            var e = !1, r = i / this._gridHeight, h = t / this._gridWidth;
            this._mapLogicRect.top += r, this._mapLogicRect.bottom += r, this._mapLogicRect.left += h, 
            this._mapLogicRect.right += h, this._mapRect.top = 0 | this._mapLogicRect.top, this._mapRect.bottom = 0 | this._mapLogicRect.bottom, 
            this._mapRect.left = 0 | this._mapLogicRect.left, this._mapRect.right = 0 | this._mapLogicRect.right, 
            this._mapRect.top == this._mapLastRect.top && this._mapRect.bottom == this._mapLastRect.bottom && this._mapRect.left == this._mapLastRect.left && this._mapRect.right == this._mapLastRect.right || (this.clipViewPort(), 
            this._mapLastRect.top = this._mapRect.top, this._mapLastRect.bottom = this._mapRect.bottom, 
            this._mapLastRect.left = this._mapRect.left, this._mapLastRect.right = this._mapRect.right, 
            e = !0), (e = e || 0 != t || 0 != i) && this.updateMapLayersPos();
        }, d.updateMapLayersPos = function() {
            for (var t, i = this._renderLayerArray.length, e = 0; e < i; e++) (t = this._renderLayerArray[e])._gridSpriteArray.length > 0 && (t.updateAloneObject(), 
            t.pos(-this._viewPortX, -this._viewPortY));
        }, d.updateViewPort = function() {
            this._fastDirty = !1;
            var t = this._rect.width * this._pivotScaleX, i = this._rect.height * this._pivotScaleY;
            this._centerX = this._rect.x + t, this._centerY = this._rect.y + i;
            var e = !1, r = this._viewPortX;
            this._viewPortX = this._centerX - t / this._scale, r != this._viewPortX ? e = !0 : r = this._viewPortY, 
            this._viewPortY = this._centerY - i / this._scale, e || r == this._viewPortY || (e = !0), 
            this._limitRange && (this._viewPortX + this._viewPortWidth > this._width && (this._viewPortX = this._width - this._viewPortWidth), 
            this._viewPortY + this._viewPortHeight > this._height && (this._viewPortY = this._height - this._viewPortHeight), 
            this._viewPortX < 0 && (this._viewPortX = 0), this._viewPortY < 0 && (this._viewPortY = 0));
            var h = this._paddingRect;
            this._mapLogicRect.top = (this._viewPortY - h.y) / this._gridHeight, this._mapLogicRect.bottom = (this._viewPortY + this._viewPortHeight + h.height + h.y) / this._gridHeight, 
            this._mapLogicRect.left = (this._viewPortX - h.x) / this._gridWidth, this._mapLogicRect.right = (this._viewPortX + this._viewPortWidth + h.width + h.x) / this._gridWidth, 
            this._mapRect.top = 0 | this._mapLogicRect.top, this._mapRect.bottom = 0 | this._mapLogicRect.bottom, 
            this._mapRect.left = 0 | this._mapLogicRect.left, this._mapRect.right = 0 | this._mapLogicRect.right, 
            this._mapRect.top == this._mapLastRect.top && this._mapRect.bottom == this._mapLastRect.bottom && this._mapRect.left == this._mapLastRect.left && this._mapRect.right == this._mapLastRect.right || (this.clipViewPort(), 
            this._mapLastRect.top = this._mapRect.top, this._mapLastRect.bottom = this._mapRect.bottom, 
            this._mapLastRect.left = this._mapRect.left, this._mapLastRect.right = this._mapRect.right, 
            e = !0), e && this.updateMapLayersPos();
        }, d.clipViewPort = function() {
            var t = 0, i = 0, e = 0, r = 0;
            if (this._mapRect.left > this._mapLastRect.left) {
                if ((t = this._mapRect.left - this._mapLastRect.left) > 0) for (r = this._mapLastRect.left; r < this._mapLastRect.left + t; r++) for (e = this._mapLastRect.top; e <= this._mapLastRect.bottom; e++) this.hideGrid(r, e);
            } else if ((i = Math.min(this._mapLastRect.left, this._mapRect.right + 1) - this._mapRect.left) > 0) for (r = this._mapRect.left; r < this._mapRect.left + i; r++) for (e = this._mapRect.top; e <= this._mapRect.bottom; e++) this.showGrid(r, e);
            if (this._mapRect.right > this._mapLastRect.right) {
                if ((i = this._mapRect.right - this._mapLastRect.right) > 0) for (r = Math.max(this._mapLastRect.right + 1, this._mapRect.left); r <= this._mapLastRect.right + i; r++) for (e = this._mapRect.top; e <= this._mapRect.bottom; e++) this.showGrid(r, e);
            } else if ((t = this._mapLastRect.right - this._mapRect.right) > 0) for (r = this._mapRect.right + 1; r <= this._mapRect.right + t; r++) for (e = this._mapLastRect.top; e <= this._mapLastRect.bottom; e++) this.hideGrid(r, e);
            if (this._mapRect.top > this._mapLastRect.top) {
                if ((t = this._mapRect.top - this._mapLastRect.top) > 0) for (e = this._mapLastRect.top; e < this._mapLastRect.top + t; e++) for (r = this._mapLastRect.left; r <= this._mapLastRect.right; r++) this.hideGrid(r, e);
            } else if ((i = Math.min(this._mapLastRect.top, this._mapRect.bottom + 1) - this._mapRect.top) > 0) for (e = this._mapRect.top; e < this._mapRect.top + i; e++) for (r = this._mapRect.left; r <= this._mapRect.right; r++) this.showGrid(r, e);
            if (this._mapRect.bottom > this._mapLastRect.bottom) {
                if ((i = this._mapRect.bottom - this._mapLastRect.bottom) > 0) for (e = Math.max(this._mapLastRect.bottom + 1, this._mapRect.top); e <= this._mapLastRect.bottom + i; e++) for (r = this._mapRect.left; r <= this._mapRect.right; r++) this.showGrid(r, e);
            } else if ((t = this._mapLastRect.bottom - this._mapRect.bottom) > 0) for (e = this._mapRect.bottom + 1; e <= this._mapRect.bottom + t; e++) for (r = this._mapLastRect.left; r <= this._mapLastRect.right; r++) this.hideGrid(r, e);
        }, d.showGrid = function(t, i) {
            if (!(t < 0 || t >= this._gridW || i < 0 || i >= this._gridH)) {
                var e, r = 0, h = this._gridArray[i][t];
                if (null == h) h = this.getGridArray(t, i); else for (r = 0; r < h.length && r < this._layerArray.length; r++) this._layerArray[r] && h[r] && 0 == (e = h[r]).visible && e.drawImageNum > 0 && e.show();
            }
        }, d.cacheAllGrid = function() {
            var t, i = 0, e = 0;
            for (i = 0; i < this._gridW; i++) for (e = 0; e < this._gridH; e++) t = this.getGridArray(i, e), 
            this.cacheGridsArray(t);
        }, d.cacheGridsArray = function(i) {
            var e;
            t._tempContext || (t._tempContext = new p(1, 1, a.create("AUTO"))), (e = t._tempContext.canvas).context.asBitmap = !1;
            var r = 0, h = 0;
            h = i.length;
            var s;
            for (r = 0; r < h; r++) s = i[r], e.clear(), e.size(1, 1), s.render(t._tempContext, 0, 0), 
            s.hide();
            e.clear(), e.size(1, 1);
        }, d.getGridArray = function(t, i) {
            var e, r = 0, h = 0, s = this._gridArray[i][t];
            if (null == s) {
                s = this._gridArray[i][t] = [];
                var a = 0, o = 0, n = 0, l = 0, _ = this._gridWidth, p = this._gridHeight;
                switch (this.orientation) {
                  case "isometric":
                    a = Math.floor(t * _), o = Math.floor(t * _ + _), n = Math.floor(i * p), l = Math.floor(i * p + p);
                    var c = 0, m = 0, d = 0, u = 0;
                    break;

                  case "staggered":
                    a = Math.floor(t * _ / this._mapTileW), o = Math.floor((t * _ + _) / this._mapTileW), 
                    n = Math.floor(i * p / (this._mapTileH / 2)), l = Math.floor((i * p + p) / (this._mapTileH / 2));
                    break;

                  case "orthogonal":
                    a = Math.floor(t * _ / this._mapTileW), o = Math.floor((t * _ + _) / this._mapTileW), 
                    n = Math.floor(i * p / this._mapTileH), l = Math.floor((i * p + p) / this._mapTileH);
                    break;

                  case "hexagonal":
                    var g = 2 * this._mapTileH / 3;
                    a = Math.floor(t * _ / this._mapTileW), o = Math.ceil((t * _ + _) / this._mapTileW), 
                    n = Math.floor(i * p / g), l = Math.ceil((i * p + p) / g);
                }
                for (var f, y, v = null, w = 0; w < this._layerArray.length; w++) {
                    v = this._layerArray[w], this.enableMergeLayer ? (v.tarLayer != y && (f = null, 
                    y = v.tarLayer), f || (f = y.getDrawSprite(t, i), s.push(f)), e = f) : (e = v.getDrawSprite(t, i), 
                    s.push(e));
                    var A;
                    switch (this._showGridKey && (A = "#", A += this._colorArray[Math.floor(Math.random() * this._colorArray.length)], 
                    A += this._colorArray[Math.floor(Math.random() * this._colorArray.length)], A += this._colorArray[Math.floor(Math.random() * this._colorArray.length)]), 
                    this.orientation) {
                      case "isometric":
                        var T = this.tileHeight / 2, R = this.tileWidth / 2, x = this._width / 2;
                        d = Math.floor(n / T), u = Math.floor(l / T), c = this._mapW + Math.floor((a - x) / R), 
                        m = this._mapW + Math.floor((o - x) / R), this._mapW;
                        var P = 2 * this._mapH;
                        for (d < 0 && (d = 0), d >= P && (d = P - 1), u < 0 && (l = 0), u >= P && (u = P - 1), 
                        e.zOrder = this._totalGridNum * w + i * this._gridW + t, r = d; r < u; r++) for (h = 0; h <= r; h++) {
                            var H = r - h, L = h, S = H - L + this._mapW;
                            S > c && S <= m && v.drawTileTexture(e, H, L) && e.drawImageNum++;
                        }
                        break;

                      case "staggered":
                        for (e.zOrder = w * this._totalGridNum + i * this._gridW + t, r = n; r < l; r++) for (h = a; h < o; h++) v.drawTileTexture(e, h, r) && e.drawImageNum++;
                        break;

                      case "orthogonal":
                      case "hexagonal":
                        switch (this._renderOrder) {
                          case "right-down":
                            for (e.zOrder = w * this._totalGridNum + i * this._gridW + t, r = n; r < l; r++) for (h = a; h < o; h++) v.drawTileTexture(e, h, r) && e.drawImageNum++;
                            break;

                          case "right-up":
                            for (e.zOrder = w * this._totalGridNum + (this._gridH - 1 - i) * this._gridW + t, 
                            r = l - 1; r >= n; r--) for (h = a; h < o; h++) v.drawTileTexture(e, h, r) && e.drawImageNum++;
                            break;

                          case "left-down":
                            for (e.zOrder = w * this._totalGridNum + i * this._gridW + (this._gridW - 1 - t), 
                            r = n; r < l; r++) for (h = o - 1; h >= a; h--) v.drawTileTexture(e, h, r) && e.drawImageNum++;
                            break;

                          case "left-up":
                            for (e.zOrder = w * this._totalGridNum + (this._gridH - 1 - i) * this._gridW + (this._gridW - 1 - t), 
                            r = l - 1; r >= n; r--) for (h = o - 1; h >= a; h--) v.drawTileTexture(e, h, r) && e.drawImageNum++;
                        }
                    }
                    e.isHaveAnimation || (e.autoSize = !0, this.autoCache && (e.cacheAs = this.autoCacheType), 
                    e.autoSize = !1), this.enableMergeLayer ? f && f.drawImageNum > 0 && y && (y.addChild(f), 
                    f.visible = !1, f.show()) : (e.drawImageNum > 0 && (v.addChild(e), e.visible = !1, 
                    e.show()), this._showGridKey && e.graphics.drawRect(0, 0, _, p, null, A));
                }
                this.enableMergeLayer && this.showGridTextureCount && f && f.graphics.fillText(f.drawImageNum + "", 20, 20, null, "#ff0000", "left");
            }
            return s;
        }, d.hideGrid = function(t, i) {
            if (!(t < 0 || t >= this._gridW || i < 0 || i >= this._gridH)) {
                var e = this._gridArray[i][t];
                if (e) for (var r, h = 0; h < e.length; h++) (r = e[h]).drawImageNum > 0 && null != r && r.hide();
            }
        }, d.getLayerObject = function(t, i) {
            for (var e = null, r = 0; r < this._layerArray.length && (e = this._layerArray[r]).layerName != t; r++) ;
            return e ? e.getObjectByName(i) : null;
        }, d.destroy = function() {
            this._orientation = "orthogonal", this._jsonData = null;
            var t = 0;
            this._gridArray = [];
            var i;
            for (t = 0; t < this._tileTexSetArr.length; t++) (i = this._tileTexSetArr[t]) && i.clearAll();
            for (this._tileTexSetArr = [], t = 0; t < this._texArray.length; t++) this._texArray[t].destroy();
            for (this._texArray = [], this._width = 0, this._height = 0, this._mapW = 0, this._mapH = 0, 
            this._mapTileW = 0, this._mapTileH = 0, this._rect.setTo(0, 0, 0, 0), t = 0; t < this._layerArray.length; t++) this._layerArray[t].clearAll();
            this._layerArray = [], this._renderLayerArray = [], this._mapSprite && (this._mapSprite.destroy(), 
            this._mapSprite = null), this._jsonLoader = null, this._loader = null;
            var e = this._animationDic;
            for (var r in e) delete e[r];
            this._properties = null, e = this._tileProperties;
            for (r in e) delete e[r];
            this._currTileSet = null, this._completeHandler = null, this._mapRect.clearAll(), 
            this._mapLastRect.clearAll(), this._tileSetArray = [], this._gridWidth = 450, this._gridHeight = 450, 
            this._gridW = 0, this._gridH = 0, this._x = 0, this._y = 0, this._index = 0, this._enableLinear = !0, 
            this._resPath = null, this._pathArray = null;
        }, d.mapSprite = function() {
            return this._mapSprite;
        }, d.getLayerByName = function(t) {
            for (var i, e = 0; e < this._layerArray.length; e++) if (i = this._layerArray[e], 
            t == i.layerName) return i;
            return null;
        }, d.getLayerByIndex = function(t) {
            return t < this._layerArray.length ? this._layerArray[t] : null;
        }, h(0, d, "orientation", function() {
            return this._orientation;
        }), h(0, d, "viewPortX", function() {
            return -this._viewPortX;
        }), h(0, d, "scale", function() {
            return this._scale;
        }, function(t) {
            t <= 0 || (this._scale = t, this._viewPortWidth = this._rect.width / t, this._viewPortHeight = this._rect.height / t, 
            this._mapSprite.scale(this._scale, this._scale), this.updateViewPort());
        }), h(0, d, "tileWidth", function() {
            return this._mapTileW;
        }), h(0, d, "viewPortY", function() {
            return -this._viewPortY;
        }), h(0, d, "tileHeight", function() {
            return this._mapTileH;
        }), h(0, d, "width", function() {
            return this._width;
        }), h(0, d, "numRowsTile", function() {
            return this._mapH;
        }), h(0, d, "numColumnsTile", function() {
            return this._mapW;
        }), h(0, d, "height", function() {
            return this._height;
        }), h(0, d, "viewPortWidth", function() {
            return this._viewPortWidth;
        }), h(0, d, "viewPortHeight", function() {
            return this._viewPortHeight;
        }), h(0, d, "x", function() {
            return this._x;
        }), h(0, d, "y", function() {
            return this._y;
        }), h(0, d, "gridWidth", function() {
            return this._gridWidth;
        }), h(0, d, "gridHeight", function() {
            return this._gridHeight;
        }), h(0, d, "numColumnsGrid", function() {
            return this._gridW;
        }), h(0, d, "numRowsGrid", function() {
            return this._gridH;
        }), h(0, d, "renderOrder", function() {
            return this._renderOrder;
        }), t.ORIENTATION_ORTHOGONAL = "orthogonal", t.ORIENTATION_ISOMETRIC = "isometric", 
        t.ORIENTATION_STAGGERED = "staggered", t.ORIENTATION_HEXAGONAL = "hexagonal", t.RENDERORDER_RIGHTDOWN = "right-down", 
        t.RENDERORDER_RIGHTUP = "right-up", t.RENDERORDER_LEFTDOWN = "left-down", t.RENDERORDER_LEFTUP = "left-up", 
        t._tempContext = null, t.__init$ = function() {
            i = function() {
                function t() {
                    this.left = 0, this.top = 0, this.right = 0, this.bottom = 0;
                }
                return r(t, ""), t.prototype.clearAll = function() {
                    this.left = this.top = this.right = this.bottom = 0;
                }, t;
            }(), s = function() {
                function t() {
                    this.mAniIdArray = [], this.mDurationTimeArray = [], this.mTileTexSetArr = [], this.image = null;
                }
                return r(t, ""), t;
            }(), n = function() {
                function t() {
                    this.firstgid = 0, this.image = "", this.imageheight = 0, this.imagewidth = 0, this.margin = 0, 
                    this.name = 0, this.properties = null, this.spacing = 0, this.tileheight = 0, this.tilewidth = 0, 
                    this.titleoffsetX = 0, this.titleoffsetY = 0, this.tileproperties = null;
                }
                return r(t, ""), t.prototype.init = function(t) {
                    this.firstgid = t.firstgid, this.image = t.image, this.imageheight = t.imageheight, 
                    this.imagewidth = t.imagewidth, this.margin = t.margin, this.name = t.name, this.properties = t.properties, 
                    this.spacing = t.spacing, this.tileheight = t.tileheight, this.tilewidth = t.tilewidth, 
                    this.tileproperties = t.tileproperties;
                    var i = t.tileoffset;
                    i && (this.titleoffsetX = i.x, this.titleoffsetY = i.y);
                }, t;
            }();
        }, t;
    }(), u = function() {
        function t() {
            this.gid = -1, this.texture = null, this.offX = 0, this.offY = 0, this.textureArray = null, 
            this.durationTimeArray = null, this.animationTotalTime = 0, this.isAnimation = !1, 
            this._spriteNum = 0, this._aniDic = null, this._frameIndex = 0, this._time = 0, 
            this._interval = 0, this._preFrameTime = 0;
        }
        r(t, "laya.map.TileTexSet");
        var i = t.prototype;
        return i.addAniSprite = function(t, i) {
            if (0 != this.animationTotalTime && (null == this._aniDic && (this._aniDic = {}), 
            0 == this._spriteNum && (e.timer.frameLoop(3, this, this.animate), this._preFrameTime = s.now(), 
            this._frameIndex = 0, this._time = 0, this._interval = 0), this._spriteNum++, this._aniDic[t] = i, 
            this.textureArray && this._frameIndex < this.textureArray.length)) {
                var r = this.textureArray[this._frameIndex];
                this.drawTexture(i, r);
            }
        }, i.animate = function() {
            if (this.textureArray && this.textureArray.length > 0 && this.durationTimeArray && this.durationTimeArray.length > 0) {
                var t = s.now();
                this._interval = t - this._preFrameTime, this._preFrameTime = t, this._interval > this.animationTotalTime && (this._interval = this._interval % this.animationTotalTime), 
                this._time += this._interval;
                for (var i = this.durationTimeArray[this._frameIndex]; this._time > i; ) {
                    this._time -= i, (++this._frameIndex >= this.durationTimeArray.length || this._frameIndex >= this.textureArray.length) && (this._frameIndex = 0);
                    var e, r = this.textureArray[this._frameIndex];
                    for (var h in this._aniDic) e = this._aniDic[h], this.drawTexture(e, r);
                    i = this.durationTimeArray[this._frameIndex];
                }
            }
        }, i.drawTexture = function(t, i) {
            t.graphics.clear(), t.graphics.drawTexture(i.texture, i.offX, i.offY);
        }, i.removeAniSprite = function(t) {
            this._aniDic && this._aniDic[t] && (delete this._aniDic[t], 0 == --this._spriteNum && e.timer.clear(this, this.animate));
        }, i.showDebugInfo = function() {
            var t = null;
            return this._spriteNum > 0 && (t = "TileTextureSet::gid:" + this.gid.toString() + " 动画数:" + this._spriteNum.toString()), 
            t;
        }, i.clearAll = function() {
            this.gid = -1, this.texture && (this.texture.destroy(), this.texture = null), this.offX = 0, 
            this.offY = 0, this.textureArray = null, this.durationTimeArray = null, this.isAnimation = !1, 
            this._spriteNum = 0, this._aniDic = null, this._frameIndex = 0, this._preFrameTime = 0, 
            this._time = 0, this._interval = 0;
        }, t;
    }(), g = function(t) {
        function i() {
            this.relativeX = 0, this.relativeY = 0, this.isAloneObject = !1, this.isHaveAnimation = !1, 
            this.aniSpriteArray = null, this.drawImageNum = 0, this._map = null, i.__super.call(this);
        }
        r(i, "laya.map.GridSprite", t);
        var e = i.prototype;
        return e.initData = function(t, i) {
            void 0 === i && (i = !1), this._map = t, this.isAloneObject = i;
        }, e._setDisplay = function(i) {
            if (!i) {
                var e = this._$P.cacheCanvas;
                e && e.ctx && (e.ctx.canvas.destroy(), e.ctx = null);
                var r = this._$P._filterCache;
                r && (r.destroy(), r.recycle(), this._set$P("_filterCache", null)), this._$P._isHaveGlowFilter && this._set$P("_isHaveGlowFilter", !1);
            }
            t.prototype._setDisplay.call(this, i);
        }, e.addAniSprite = function(t) {
            null == this.aniSpriteArray && (this.aniSpriteArray = []), this.aniSpriteArray.push(t);
        }, e.show = function() {
            if (!this.visible) {
                if (this.visible = !0, !this.isAloneObject) {
                    var t;
                    (t = this.parent) && t.showGridSprite(this);
                }
                if (!_.isWebGL && this._map.autoCache && (this.cacheAs = this._map.autoCacheType), 
                null == this.aniSpriteArray) return;
                for (var i = 0; i < this.aniSpriteArray.length; i++) this.aniSpriteArray[i].show();
            }
        }, e.hide = function() {
            if (this.visible) {
                if (this.visible = !1, !this.isAloneObject) {
                    var t;
                    (t = this.parent) && t.hideGridSprite(this);
                }
                if (!_.isWebGL && this._map.autoCache && (this.cacheAs = "none"), null == this.aniSpriteArray) return;
                for (var i = 0; i < this.aniSpriteArray.length; i++) this.aniSpriteArray[i].hide();
            }
        }, e.updatePos = function() {
            this.isAloneObject ? (this._map && (this.x = this.relativeX, this.y = this.relativeY), 
            this.x < 0 || this.x > this._map.viewPortWidth || this.y < 0 || this.y > this._map.viewPortHeight ? this.hide() : this.show()) : this._map && (this.x = this.relativeX, 
            this.y = this.relativeY);
        }, e.clearAll = function() {
            if (this._map && (this._map = null), this.visible = !1, null != this.aniSpriteArray) for (var t = 0; t < this.aniSpriteArray.length; t++) this.aniSpriteArray[t].clearAll();
            this.destroy(), this.relativeX = 0, this.relativeY = 0, this.isHaveAnimation = !1, 
            this.aniSpriteArray = null, this.drawImageNum = 0;
        }, i;
    }(c), f = function(t) {
        function i() {
            this._map = null, this._mapData = null, this._tileWidthHalf = 0, this._tileHeightHalf = 0, 
            this._mapWidthHalf = 0, this._mapHeightHalf = 0, this._gridSpriteArray = [], this._objDic = null, 
            this._dataDic = null, this._properties = null, this.tarLayer = null, this.layerName = null, 
            this._showGridList = [], this._aloneObjs = [], i.__super.call(this), this._tempMapPos = new n();
        }
        r(i, "laya.map.MapLayer", t);
        var e = i.prototype;
        return e.init = function(t, i) {
            this._map = i, this._mapData = t.data, t.height, t.width;
            var e = i.tileWidth, r = i.tileHeight;
            switch (this.layerName = t.name, this._properties = t.properties, this.alpha = t.opacity, 
            this._tileWidthHalf = e / 2, this._tileHeightHalf = r / 2, this._mapWidthHalf = this._map.width / 2 - this._tileWidthHalf, 
            this._mapHeightHalf = this._map.height / 2, t.type) {
              case "tilelayer":
                break;

              case "objectgroup":
                var h = t.objects;
                h.length > 0 && (this._objDic = {}, this._dataDic = {});
                for (var s, a = NaN, o = NaN, l = 0; l < h.length; l++) if (s = h[l], this._dataDic[s.name] = s, 
                1 == s.visible) {
                    a = s.width, o = s.height;
                    var _ = i.getSprite(s.gid, a, o);
                    if (null != _) {
                        switch (this._map.orientation) {
                          case "isometric":
                            this.getScreenPositionByTilePos(s.x / r, s.y / r, n.TEMP), _.pivot(a / 2, o / 2), 
                            _.rotation = s.rotation, _.x = _.relativeX = n.TEMP.x + this._map.viewPortX, _.y = _.relativeY = n.TEMP.y + this._map.viewPortY - o / 2;
                            break;

                          case "staggered":
                          case "orthogonal":
                            _.pivot(a / 2, o / 2), _.rotation = s.rotation, _.x = _.relativeX = s.x + a / 2, 
                            _.y = _.relativeY = s.y - o / 2;
                            break;

                          case "hexagonal":
                            _.x = _.relativeX = s.x, _.y = _.relativeY = s.y;
                        }
                        this.addChild(_), this._gridSpriteArray.push(_), _.isAloneObject && (this._showGridList.push(_), 
                        this._aloneObjs.push(_)), this._objDic[s.name] = _;
                    }
                }
            }
        }, e.getObjectByName = function(t) {
            return this._objDic ? this._objDic[t] : null;
        }, e.getObjectDataByName = function(t) {
            return this._dataDic ? this._dataDic[t] : null;
        }, e.getLayerProperties = function(t) {
            return this._properties ? this._properties[t] : null;
        }, e.getTileData = function(t, i) {
            if (i >= 0 && i < this._map.numRowsTile && t >= 0 && t < this._map.numColumnsTile) {
                var e = i * this._map.numColumnsTile + t, r = this._mapData;
                if (null != r && e < r.length) return r[e];
            }
            return 0;
        }, e.getScreenPositionByTilePos = function(t, i, e) {
            if (e) {
                switch (this._map.orientation) {
                  case "isometric":
                    e.x = this._map.width / 2 - (i - t) * this._tileWidthHalf, e.y = (i + t) * this._tileHeightHalf;
                    break;

                  case "staggered":
                    t = Math.floor(t), i = Math.floor(i), e.x = t * this._map.tileWidth + (1 & i) * this._tileWidthHalf, 
                    e.y = i * this._tileHeightHalf;
                    break;

                  case "orthogonal":
                    e.x = t * this._map.tileWidth, e.y = i * this._map.tileHeight;
                    break;

                  case "hexagonal":
                    t = Math.floor(t), i = Math.floor(i);
                    var r = 2 * this._map.tileHeight / 3;
                    e.x = (t * this._map.tileWidth + i % 2 * this._tileWidthHalf) % this._map.gridWidth, 
                    e.y = i * r % this._map.gridHeight;
                }
                e.x = (e.x + this._map.viewPortX) * this._map.scale, e.y = (e.y + this._map.viewPortY) * this._map.scale;
            }
        }, e.getTileDataByScreenPos = function(t, i) {
            var e = 0;
            return this.getTilePositionByScreenPos(t, i, this._tempMapPos) && (e = this.getTileData(Math.floor(this._tempMapPos.x), Math.floor(this._tempMapPos.y))), 
            e;
        }, e.getTilePositionByScreenPos = function(t, i, e) {
            t = t / this._map.scale - this._map.viewPortX, i = i / this._map.scale - this._map.viewPortY;
            var r = this._map.tileWidth, h = this._map.tileHeight, s = 0, a = 0;
            switch (this._map.orientation) {
              case "isometric":
                var o = t - this._map.width / 2;
                return s = -(o / r - i / h), a = o / r + i / h, e && (e.x = a, e.y = s), !0;

              case "staggered":
                if (e) {
                    var n = 0, l = 0;
                    n = (t - (Math.floor(t / r) * r + r / 2)) * h / 2, l = (i - (Math.floor(i / h) * h + h / 2)) * r / 2, 
                    Math.abs(n) + Math.abs(l) <= r * h / 4 ? (a = Math.floor(t / r), s = 2 * Math.floor(i / h)) : (t -= r / 2, 
                    a = Math.floor(t / r) + 1, i -= h / 2, s = 2 * Math.floor(i / h) + 1), e.x = a - (1 & s), 
                    e.y = s;
                }
                return !0;

              case "orthogonal":
                return a = t / r, s = i / h, e && (e.x = a, e.y = s), !0;

              case "hexagonal":
                a = (t - (s = i / (2 * h / 3)) % 2 * this._tileWidthHalf) / r, e && (e.x = a, e.y = s);
            }
            return !1;
        }, e.getDrawSprite = function(t, i) {
            var e = new g();
            return e.relativeX = t * this._map.gridWidth, e.relativeY = i * this._map.gridHeight, 
            e.initData(this._map), e.updatePos(), this._gridSpriteArray.push(e), e;
        }, e.showGridSprite = function(t) {
            var i = this._showGridList, e = 0, r = 0;
            r = i.length;
            var h, s = -1;
            for (e = 0; e < r; e++) {
                if ((h = i[e]) == t) return;
                h.isAloneObject || h.visible || (s = e);
            }
            s >= 0 ? i[s] = t : i.push(t);
        }, e.hideGridSprite = function(t) {
            t.visible = !1;
        }, e.updateGridPos = function() {
            var t, i, e = 0;
            e = (i = this._showGridList).length;
            for (var r = 0; r < e; r++) ((t = i[r])._style.visible || t.isAloneObject) && t.drawImageNum > 0 && t.updatePos();
        }, e.updateAloneObject = function() {
            var t, i, e = 0;
            e = (i = this._aloneObjs).length;
            for (var r = 0; r < e; r++) (t = i[r]).drawImageNum > 0 && t.updatePos();
        }, e.render = function(i, e, r) {
            var h = this._childs;
            this._childs = this._showGridList, t.prototype.render.call(this, i, e, r), this._childs = h;
        }, e.drawTileTexture = function(t, i, e) {
            if (e >= 0 && e < this._map.numRowsTile && i >= 0 && i < this._map.numColumnsTile) {
                var r = e * this._map.numColumnsTile + i, h = this._mapData;
                if (null != h && r < h.length && 0 != h[r]) {
                    var s = this._map.getTexture(h[r]);
                    if (s) {
                        var a = 0, o = 0;
                        switch (s.texture, this._map.orientation) {
                          case "staggered":
                            a = i * this._map.tileWidth % this._map.gridWidth + (1 & e) * this._tileWidthHalf, 
                            o = e * this._tileHeightHalf % this._map.gridHeight;
                            break;

                          case "orthogonal":
                            a = i * this._map.tileWidth % this._map.gridWidth, o = e * this._map.tileHeight % this._map.gridHeight;
                            break;

                          case "isometric":
                            a = (this._mapWidthHalf + (i - e) * this._tileWidthHalf) % this._map.gridWidth, 
                            o = (i + e) * this._tileHeightHalf % this._map.gridHeight;
                            break;

                          case "hexagonal":
                            var n = 2 * this._map.tileHeight / 3;
                            a = (i * this._map.tileWidth + e % 2 * this._tileWidthHalf) % this._map.gridWidth, 
                            o = e * n % this._map.gridHeight;
                        }
                        if (s.isAnimation) {
                            var l = new y();
                            l.x = a, l.y = o, l.setTileTextureSet(r.toString(), s), t.addAniSprite(l), t.addChild(l), 
                            t.isHaveAnimation = !0;
                        } else t.graphics.drawTexture(s.texture, a + s.offX, o + s.offY);
                        return !0;
                    }
                }
            }
            return !1;
        }, e.clearAll = function() {
            this._map = null, this._mapData = null, this._tileWidthHalf = 0, this._tileHeightHalf = 0, 
            this._mapWidthHalf = 0, this._mapHeightHalf = 0, this.layerName = null;
            var t = 0;
            if (this._objDic) {
                for (var i in this._objDic) delete this._objDic[i];
                this._objDic = null;
            }
            if (this._dataDic) {
                for (i in this._dataDic) delete this._dataDic[i];
                this._dataDic = null;
            }
            for (t = 0; t < this._gridSpriteArray.length; t++) this._gridSpriteArray[t].clearAll();
            this._properties = null, this._tempMapPos = null, this.tarLayer = null;
        }, i;
    }(c), y = function(t) {
        function i() {
            this._tileTextureSet = null, this._aniName = null, i.__super.call(this);
        }
        r(i, "laya.map.TileAniSprite", c);
        var e = i.prototype;
        return e.setTileTextureSet = function(t, i) {
            this._aniName = t, this._tileTextureSet = i, i.addAniSprite(this._aniName, this);
        }, e.show = function() {
            this._tileTextureSet.addAniSprite(this._aniName, this);
        }, e.hide = function() {
            this._tileTextureSet.removeAniSprite(this._aniName);
        }, e.clearAll = function() {
            this._tileTextureSet.removeAniSprite(this._aniName), this.destroy(), this._tileTextureSet = null, 
            this._aniName = null;
        }, i;
    }();
    e.__init([ d ]);
}(window, document, Laya), "function" == typeof define && define.amd && define("laya.core", [ "require", "exports" ], function(t, i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    for (var e in Laya) {
        var r = Laya[e];
        r && r.__isclass && (i[e] = r);
    }
});